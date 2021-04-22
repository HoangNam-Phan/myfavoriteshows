// LISTE ERSTELLEN
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

// SHOW ZUR LISTE HINZUFÜGEN
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

// EINE SHOW AUS EINER LISTE LÖSCHEN
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

// EINE LISTE LÖSCHEN
export const deleteList = (id) => {
    fetch(`http://localhost:4000/lists/${id}`
        , {
            method: "DELETE",
        })
}

// EINE BESTIMMTE LISTEN FETCHEN
export const getList = (id) => fetch(`http://localhost:4000/lists/${id}`).then(res => res.json())

//ALLE LISTEN FETCHEN
export const getLists = () => fetch('http://localhost:4000/lists').then(res => res.json())
