import { chain } from "@/lib/chatBotInstance"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userMessage } = req.body

  if (!userMessage) throw new Error("User message not provided")

  try {
    const botMessage = await chain.call({ input: userMessage })
    res.json({ status: 200, message: botMessage })
  } catch (error) {
    res.status(500).json({ error, message: "Couldn't load IA, try later" })
  }
}
