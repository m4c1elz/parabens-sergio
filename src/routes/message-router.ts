import { Router } from "express"
import { prisma } from "../lib/prisma"

const router = Router()

router.get("/messages", async (_, res) => {
    const messages = await prisma.message.findMany({
        where: { status: "ok" },
        orderBy: {
            createdAt: "desc",
        },
    })

    res.json(messages)
})

router.get("/messages/review", async (_, res) => {
    const messages = await prisma.message.findMany({
        where: { NOT: { status: "ok" } },
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
            status: "pending",
        },
    })

    return res.status(201).redirect("/")
})

router.put("/messages/accept/:id", async (req, res) => {
    const id = Number(req.params.id)

    await prisma.message.update({
        where: { id },
        data: {
            status: "ok",
        },
    })

    return res.sendStatus(201)
})

export const messageRouter = router
