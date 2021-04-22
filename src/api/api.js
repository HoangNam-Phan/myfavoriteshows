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

export const updateList = (name, rating, id, listId) => {
    fetch(`http://localhost:4000/lists/${listId}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, rating, id })
    })
}

export const deleteFromList = (id, listId) => {
    fetch(`http://localhost:4000/lists/${listId}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
    })
}

export const deleteList = (id) => {
    fetch(`http://localhost:4000/lists/${id}`
        , {
            method: "DELETE",
        })
}

export const getList = (id) => fetch(`http://localhost:4000/lists/${id}`).then(res => res.json())

