// LISTE ERSTELLEN
export const createList = (list) => {
    fetch("https://myfavoriteshows.herokuapp.com/lists", {
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
    fetch(`https://myfavoriteshows.herokuapp.com/lists/${listId}`, {
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
    fetch(`https://myfavoriteshows.herokuapp.com/lists/${listId}`, {
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
    fetch(`https://myfavoriteshows.herokuapp.com/lists/${id}`
        , {
            method: "DELETE",
        })
}

// EINE BESTIMMTE LISTEN FETCHEN
export const getList = (id) => fetch(`https://myfavoriteshows.herokuapp.com/lists/${id}`).then(res => res.json())

//ALLE LISTEN FETCHEN
export const getLists = () => fetch('https://myfavoriteshows.herokuapp.com/lists').then(res => res.json())
