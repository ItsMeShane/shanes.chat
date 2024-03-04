import OpenAI from 'openai';

const openai = new OpenAI({
   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
   dangerouslyAllowBrowser: true,
});

// create new thread and save it to local storage
const createThread = async () => {
   const newThread = await openai.beta.threads.create();
   const newThreadId = newThread.id;
   localStorage.setItem('threadId', newThreadId);
   return newThreadId;
};

// load messages from saved thread
const loadMessages = async (threadId) => {
   try {
      const assistanceResponse = await openai.beta.threads.messages.list(threadId);
      const messages = assistanceResponse.data
         .map((message) => ({
            text: message.content[0].text.value,
            sender: message.role === 'user' ? 'user' : 'assistant',
         })) 
         .reverse();
      return messages;
   } catch (error) {
      console.error(error);
      console.error('Failed to load messages from thread');
      return [];
   }
};

const sendMessageToAssistant = async (threadId, text) => {
   try {
      // create message
      await openai.beta.threads.messages.create(threadId, {
         role: 'user',
         content: text,
      });
      // send message to openai assistant
      const run = await openai.beta.threads.runs.create(threadId, {
         assistant_id: process.env.REACT_APP_OPENAI_ASSISTANT_ID,
      });

      // wait for assistant response
      let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      while (runStatus.status !== 'completed') {
         // check once every second to see if assistant finished message
         await new Promise((resolve) => setTimeout(resolve, 1000));
         runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      }

      // get assistant response
      const assistantResponse = (
         await openai.beta.threads.messages.list(threadId)
      ).data.find((message) => message.role === 'assistant');

      let assistantMessage = assistantResponse.content[0].text.value;
      // remove all file references
      assistantMessage = assistantMessage.replaceAll(/【.*?】/g, '');

      return assistantMessage;
   } catch (error) {
      console.error(error);
      console.error('Failed to send message to OpenAI');
      return '';
   }
};

const starterMessages = [
   { text: "Hey, I'm Shane's Assistant.", sender: 'assistant' },
   { text: 'How can I help you?', sender: 'assistant' },
 ];
 
 export { createThread, loadMessages, sendMessageToAssistant };
 export default starterMessages;
