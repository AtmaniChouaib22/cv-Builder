export default function DisplayPersonal({personalInfoArr}) {
    console.log(personalInfoArr)
    return (
        <div className="Personal-Section">
            {personalInfoArr.map(item => (<div key={item.key}>
                <h1 className="Full-Name">{item.firstName} {item.lastName}</h1>
                <div className="Contacts">
                    <div>{item.email}</div>
                    <div>{item.location}</div>
                    <div>{item.phone}</div>
                </div>
            </div>))}
        </div>
    )
}