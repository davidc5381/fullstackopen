import { useEffect, useState } from 'react'
import Form from './Form'
// import axios from 'axios'
import contactService from './services/contacts'
import Notification from './Notifications'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect( () => {
    contactService.getContacts()
                .then( (allPeople) => {
                  setPersons(allPeople)
                  console.log(allPeople)
                  
                } )
}
  ,[])

  const handleNewNumber = (event) => {
    const addNumber = event.target.value
    setNewNumber(addNumber)
  }

  const handleNewName = (event) => {
    const addNew = event.target.value
    setNewName(addNew)
  }

  const handleForm = (event) => {
    event.preventDefault()

    const personExists = persons.some( (person) => newName === person.name)
    if (personExists) {
      return alert(`${newName} is already added to the phonebook`)
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    contactService.addContact(newPerson)
                  .then( () => {
                      setPersons(persons.concat(newPerson))
                      const successMessage = `Added ${newPerson.name}`
                      setErrorMessage(successMessage)
                      setTimeout( () => {
                          setErrorMessage(null)
                          },5000)
                      setNewName('')
                      setNewNumber('')
                  })

    

  }
 
  const deletePerson = (person, id) => {
    window.confirm(`Do you want to delete ${person}`)
    contactService.deleteContact(id)
                  .catch(() => console.log('errror'))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Form handleForm={handleForm} handleNewName={handleNewName} handleNewNumber={handleNewNumber}/>

      <h2>Numbers</h2>
      <ul>
        {persons.map(
          (person) => <p key={person.name}>{person.name} {person.number} <button onClick={ () => deletePerson(person.name, person.id) } >delete</button></p>
        )} 
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App