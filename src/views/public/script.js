async function fetchData() {
    const loadingFallback = document.createElement("h1")
    loadingFallback.innerText = "Carregando..."
    document.querySelector("body").appendChild(loadingFallback)

    const response = await fetch("/messages")
    const result = await response.json()

    document.querySelector("body").removeChild(loadingFallback)

    return result
}

function renderMessages(messages) {
    messages.map(message => {
        let html = "<div class='message'>"

        html += "<h1>"
        html += message.from
        html += "</h1>"

        html += "<p>"
        html += message.content
        html += "</p>"

        html += "</div>"

        document.querySelector("body").innerHTML += html
    })
}

async function main() {
    const messages = await fetchData()
    renderMessages(messages)
}

main()
