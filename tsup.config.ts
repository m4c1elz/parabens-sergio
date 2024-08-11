import { defineConfig } from "tsup"
import { cp } from "node:fs/promises"

export default defineConfig({
    entry: ["./src/**/*.{ts, html, js}"],
    outDir: "dist",
    bundle: false,
    shims: true,
    clean: true,
    onSuccess: async () => {
        // copy the views directory (that isn't bundled by default) to the dist folder
        await cp("./src/views", "./dist/views", { recursive: true })
    },
})
