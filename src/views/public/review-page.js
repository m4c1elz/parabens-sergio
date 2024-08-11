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
    const acceptedMessage = document.querySelector(`div[data-index='${id}']`)

    try {
        // removing previous error msg
        const errorMsg = document.querySelector(".error")
        if (errorMsg) {
            errorMsg.remove()
        }

        await fetch("/messages/accept/" + id, {
            method: "put",
        })

        document.querySelector("body").removeChild(acceptedMessage)
    } catch (error) {
        console.log(error)
        const errorMsg = document.createElement("h1")
        errorMsg.classList.add("error")
        errorMsg.innerText = "Houve um erro."

        acceptedMessage.append(errorMsg)
    }
}

function renderMessages(messages, onClick) {
    if (messages.length === 0) {
        document.querySelector("body").innerHTML += "<h1>Não há mensagens.</h1>"
    }

    messages.map(message => {
        let html = `<div class='message' data-index='${message.id}'>`

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
