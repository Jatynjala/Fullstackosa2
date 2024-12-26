import { useState } from 'react'
import Render from './components/Render'
import AddInput from './components/AddInput'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState(persons)

  console.log(persons)

  const addPerson = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target)
    const nameObject = { name: newName , number: newNumber}
    console.log(nameObject)
    console.log(persons.map(person => person.name).includes(newName, 0))
    if (persons.map(person => person.name).includes(newName, 0)) {
      alert('Name already included')
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFiltering = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    setFiltered(persons.filter((person) => person.name.includes(filter)))
    console.log(filtered)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFiltering}/>
      <h2>Add a new</h2>
      <AddInput nameValue={newName} numberValue={newNumber} onNameChange={handleNameChange} onNumberChange={handleNumberChange} onSubmit={addPerson}/>
      <h2>Numbers</h2>
      <Render filtered={filtered} />
    </div>
  )

}

export default App