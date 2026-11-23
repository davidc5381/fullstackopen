function Form(props){

return(
    <form onSubmit={props.handleForm}>
        <div>
          name: <input onChange={ props.handleNewName } />
        </div>
        <div>number: <input onChange={props.handleNewNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
}

export default Form