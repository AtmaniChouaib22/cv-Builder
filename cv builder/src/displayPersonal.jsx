function DispalyPersonal({fullname, email, phone, location}) {
    return (
        <div className="Display-personal">
            <div>{fullname}</div>
            <div className="Display-contact">
                <div>{email}</div>
                <div>{phone}</div>
                <div>{location}</div>
            </div>
        </div>
    )
}

export default DispalyPersonal 