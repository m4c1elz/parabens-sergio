async function fetchData() {
    const loadingFallback = document.createElement("h1")
    loadingFallback.innerText = "Carregando..."
    document.querySelector("body").appendChild(loadingFallback)

    const response = await fetch("/messages/review")
    const result = await response.json()

    document.querySelector("body").removeChild(loadingFallback)

    return result
}

async function acceptMessage(id) {
    const response = await fetch("/messages/accept/" + id, {
        method: "put",
    })
    console.log(response)
}

function renderMessages(messages, onClick) {
    messages.map(message => {
        let html = "<div class='message'>"

        html += "<h1>"
        html += `${message.from}`
        html += "</h1>"

        html += "<p>"
        html += message.content
        html += "</p>"

        html += `<button ${
            onClick && `onClick='acceptMessage(${message.id})'`
        }>`
        html += "Aceitar"
        html += "</button>"

        html += "<button>"
        html += "Remover"
        html += "</button>"

        html += "</div>"

        document.querySelector("body").innerHTML += html
    })
}

async function main() {
    const messages = await fetchData()
    renderMessages(messages, true)
}

main()
