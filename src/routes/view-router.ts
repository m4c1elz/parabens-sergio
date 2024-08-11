import { Router } from "express"
import path from "node:path"

const router = Router()

router.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"))
})

router.get("/create", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "create.html"))
})

router.get("/review", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "review.html"))
})

router.get("/success", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "success.html"))
})

export const viewRouter = router
