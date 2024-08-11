import { Router } from "express"
import path from "node:path"

const router = Router()

router.get("*", (_, res) => {
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"))
})

export const notFoundFallback = router
