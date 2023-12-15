import { MailIcon, PhoneIcon, LocationIcon } from "./assets/icons"
export default function DisplayPersonal({personalInfoArr}) {
    console.log(personalInfoArr)
    return (
        <div className="Personal-Section">
            {personalInfoArr.map(item => (<div key={item.key} className="Personnal-Item">
                <h1 className="Full-Name">{item.firstName} {item.lastName}</h1>
                <div className="Contacts">
                    <div className="Holder"><MailIcon stroke={"white"} width={16} height={16}/>{item.email}</div>
                    <div className="Holder"><LocationIcon stroke={"white"} width={16} height={16}/>{item.location}</div>
                    <div className="Holder"><PhoneIcon stroke={"white"} width={16} height={16}/>{item.phone}</div>
                </div>
            </div>))}
        </div>
    )
}