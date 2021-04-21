export const createList = (list) => {
    fetch("http://localhost:4000/lists", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(list)
    })
}

export const deleteList = (id) => {
    fetch(`http://localhost:4000/lists/${id}`
        , {
            method: "DELETE",
        })
}