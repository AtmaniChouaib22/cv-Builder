function CreateInput({id, type, label, placeholder, value, onChange}) {
    return (
        <div className="Input-field">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}

export default CreateInput ;