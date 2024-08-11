// libs
import express from "express"
import path from "node:path"

// routers
import { messageRouter } from "./routes/message-router"
import { viewRouter } from "./routes/view-router"
import { notFoundFallback } from "./routes/not-found-fallback"

const app = express()
const port = process.env.PORT || 3333

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "views", "public")))

app.use(viewRouter)
app.use(messageRouter)
app.use(notFoundFallback)

app.listen(port, () => {
    console.log("Listening on " + port)
})
