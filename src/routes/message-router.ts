import { Router } from "express"
import { prisma } from "../lib/prisma"

const router = Router()

router.get("/messages", async (_, res) => {
    const messages = await prisma.message.findMany({
        orderBy: {
            createdAt: "desc",
        },
    })

    res.json(messages)
})

router.post("/messages", async (req, res) => {
    type MessageBody = { from: string; content: string }

    const { from, content }: MessageBody = req.body

    await prisma.message.create({
        data: {
            from,
            content,
        },
    })

    return res.status(201).redirect("/")
})

export const messageRouter = router
