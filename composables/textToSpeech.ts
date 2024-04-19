import APIStatus from "~/types/ElevenLabs"

export default function textToSpeech( text: string ) {
    const voiceId = 'N2lVS1w4EtoT3dr4eOWO'
    const apiKey = '14af713303442c8bc866db62289c265e' // API key on free account
    
    let apiStatus
    
    const headers = new Headers()
    headers.append( 'Accept', 'audio/mpeg' )
    headers.append( 'xi-api-key', apiKey )
    headers.append( 'Content-Type', 'application/json' )
    
    const body = JSON.stringify({
        text: text,
        model_id: 'eleven_turbo_v2', // eleven_monolingual_v1
        voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
        }
    })
    
    apiStatus = APIStatus.loading

    try {
        fetch( `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`, {
            method: 'POST',
            headers: headers,
            body: body
        }).then(response => {
            if (response.ok) {
                apiStatus = APIStatus.generated
                return response.blob()
            } else {
                throw new Error( 'Error: ' + response.statusText )
            }
        }).then(blob => {
            const url = window.URL.createObjectURL( blob )
            const audio = new Audio( url )
            audio.play()
            audio.onended = () => {
                apiStatus = APIStatus.failed
            }
        }).catch(error => {
            console.error( 'Error:', error )
            apiStatus = APIStatus.failed
        })
    } catch (error) {
        console.warn( error )
        
    }
    
}

// Sample text:
// In the heart of the bustling city, a solitary street performer captivated the crowd with his mesmerizing melodies. His fingers danced effortlessly across the strings of his guitar, weaving a tapestry of sound that seemed to transport listeners to distant realms. People paused in their hurried lives to soak in the soulful notes, finding solace in the fleeting moments of tranquility amidst the urban chaos.