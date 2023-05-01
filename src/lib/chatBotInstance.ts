import { OpenAI } from "langchain/llms/openai"
import { ConversationSummaryMemory } from "langchain/memory"
import { LLMChain } from "langchain/chains"
import { PromptTemplate } from "langchain/prompts"

const memory = new ConversationSummaryMemory({
  memoryKey: "chat_history",
  llm: new OpenAI({ modelName: "gpt-3.5-turbo", temperature: 0 }),
})

const prompt = PromptTemplate.fromTemplate(
  `This is a conversation with an AI that only responds to development messages. The user says: "{input}".`
)

export const chain = new LLMChain({ llm: memory.llm, prompt: prompt })
