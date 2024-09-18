
function Input({name, identifier, value, onEdit}){
    
    return <>
        <label htmlFor={name}>  {name} </label>
        <input type="number" required id={identifier} name={name} value={value} onChange={(e) => onEdit(e.target)}/>
    </>
}

export default Input