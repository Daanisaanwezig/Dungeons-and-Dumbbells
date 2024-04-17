export function GPS() {
    const hasGPS: Ref<boolean> = ref(true)

    const location: Ref<GeolocationPosition | null> = ref(null)
    
    const hasActiveGoal: Ref<boolean> = ref(true)
    const goal: Ref<number | null> = ref(null)
    const distanceTraveled: Ref<number> = ref(0)
    const goalAchieved: Ref<boolean> = ref(false)

    const difference: Ref<number> = ref(0) // Expose this value for debug purposes
    
    const watchLocation = ( targetDistance: number ) => {
        if ( process.client ) {
            if (! navigator.geolocation ) {
                return hasGPS.value = false
            }
            goal.value = targetDistance

            hasActiveGoal.value = true
    
            const options = {
                enableHighAccuracy: true, // Enable high accuracy
                timeout: 10000, // We don't want to wait for longer than a second for a response
                maximumAge: 2500 // Maximum age of retrieved data
            }
            const watchPosition = navigator.geolocation.watchPosition( ( postion ) => {
                const difference = calculateDifference( postion )
                distanceTraveled.value += difference

                if ( distanceTraveled.value > targetDistance ) {
                    navigator.geolocation.clearWatch( watchPosition )
                    goalAchieved.value = true
                    hasActiveGoal.value = false
                    return
                }
            }, ( error ) => { // Add proper error handling here
                console.warn( error )
                navigator.geolocation.clearWatch( watchPosition )
                hasActiveGoal.value = false
            }, options )
        }
    }

    const calculateDifference = ( newLocation:GeolocationPosition ) => { // TODO: Take into account the accuracy... When low, ignore the data or manipulate it
        if (! location.value ) {
            location.value = newLocation // Previous value has not yet been set
            return 0
        }
        if ( newLocation.coords.accuracy > 25 ) { // Uncertainty is greater than x in meters
            return 0
        }

        const earthRadiusInKM = 6371
        const differenceLatitude = ( newLocation.coords.latitude - location.value.coords.latitude ) * Math.PI / 180
        const differenceLongitude = ( newLocation.coords.longitude - location.value.coords.longitude ) * Math.PI / 180
        const oldLatidude = location.value.coords.latitude
        const newLatidude = newLocation.coords.latitude

        const a =   Math.sin( differenceLatitude / 2 ) * Math.sin( differenceLatitude / 2 ) +
                    Math.sin( differenceLongitude / 2 ) * Math.sin( differenceLongitude / 2 ) *
                    Math.cos( oldLatidude ) * Math.cos( newLatidude )

        const c = 2 * Math.atan2( Math.sqrt( a ), Math.sqrt( 1 - a ) )

        const traveled = earthRadiusInKM * c * 1000 // Distance traveled in meters
        difference.value = traveled
        location.value = newLocation
        return traveled
    }

    const resetGPSGoal = () => {
        location.value = null
        distanceTraveled.value = 0
        goalAchieved.value = false
        hasActiveGoal.value = false
    }

    return {
        watchLocation,
        resetGPSGoal,

        hasGPS,
        location,
        distanceTraveled,
        goal,
        hasActiveGoal,
        goalAchieved
    }
}