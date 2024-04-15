import OpenAI from "openai";

export default function () {
    
localStorage.setItem("character", "An orc herbalist named gruk, he stands at 7 foot tall has green skin and has a lot of scars. He is a gentle soul so he didn't fit into his tribe which is why he started adventuring alone. While he is not a good fighter his knowledge of herbs makes him dangerous if he is prepared");

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a fantasy storyteller that generates an original story with ${localStorage.getItem("character")} as the main character. You generate the story in small chunks, about 200 words, after which you give 3 choices, which are numbered, from which the user will choose. based on the chosen option: ${localStorage.getItem("response")}, you will continue the story where the following text leaves off. ${localStorage.getItem('story')}. The output is JSON.`,
      },
      { role: "user", content: "yes"},
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);
  localStorage.setItem('story', ''+completion.choices[0].message.content)
}

main();
}