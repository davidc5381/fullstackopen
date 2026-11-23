function People(props){

return (
    <div>{props.searchPerson.map((person, i)=> <ul key={i}>{person.name} {person.number}</ul>) }</div>
)
}
export default People