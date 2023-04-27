import { chain } from "@/lib/chatBotInstance"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const welcomeMessage =
      "Hello! Welcome to our chatbot. Ask me whatever the programming questions you want"
    const showWelcomeMessage = await chain.call({ input: welcomeMessage })
    res.status(200).json(showWelcomeMessage)
  } catch (error) {
    res.status(500).json({ error, message: "Couldn't load IA, try later" })
  }
}
