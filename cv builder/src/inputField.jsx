function CreateInput({id, type, label, placeholder, value, handleInputChange}) {
    return (
        <div className="Input-field">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={(e) => handleInputChange(id, e.target.value)}/>
        </div>
    )
}

export default CreateInput ;