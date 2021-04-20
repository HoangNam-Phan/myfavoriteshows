export const getLists = () => {
    fetch("http://localhost:4000/lists")
        .then((res) => {
            const data = res.json()
            console.log(data)
        })
        .then(data => {
            console.log(data)
        })
}

export const createList = (list) => {
    fetch("http://localhost:4000/create", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(list)
    })
}