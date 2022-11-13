function handleSubmit(event) {
    event.preventDefault()

    console.log("::: Form Submitted :::")

    Client.getAPIfn()
    .then (
        setTimeout(() => {
            Client.updateUIfn()
        }, 5000)
    )

}

export { handleSubmit }