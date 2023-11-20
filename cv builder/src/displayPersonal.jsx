
function DisplayPersonal({personalInfo}) {
    return (
        <div className="Personal-display">
            <div>{personalInfo.fullName}</div>
            <div className="Contact-display">
                <div>{personalInfo.email}</div>
                <div>{personalInfo.location}</div>
                <div>{personalInfo.phone}</div>
            </div>
        </div>
    )
}

export default DisplayPersonal ;