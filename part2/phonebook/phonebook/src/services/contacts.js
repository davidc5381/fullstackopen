import axios from 'axios'
const baseUrl = "/api/persons"

const addContact = (newObject) => {
    const request = axios.post(baseUrl, newObject)
        return request.then((response) => response.data)
}

const getContacts = () => {
    const request = axios.get(baseUrl)
        return request.then( (response) => 
            response.data
        )
}

const deleteContact = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then( response => response.data )
}

export default {    addContact,
                    getContacts,
                    deleteContact
                }