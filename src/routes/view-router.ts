import { Router } from "express"
import path from "node:path"

const router = Router()

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"))
})

router.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "create.html"))
})

export const viewRouter = router
