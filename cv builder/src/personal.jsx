
import CreateInput from "./inputField";
import './styles/personal.css'
import { SaveIcon, DeleteIcon } from "./assets/icons";

function CreatePersonal({showBox, personalInfo, handlePersonalChange, handleSub, handleClearPersonal}) {

    return (
        <>
            <h1 onClick={showBox} className="Header-button">Personal Informations</h1>
            <form className="Personal-input" id="personalForm" onSubmit={handleSub}>
                <CreateInput id="fullName" type="text" placeholder="Ryan Gosling" label="Full Name" value={personalInfo.fullName} onChange={handlePersonalChange} />
                <CreateInput id="email" type="email" placeholder="Ryangosling@email.com" label="Email Adresse" value={personalInfo.email} onChange={handlePersonalChange} />
                <CreateInput id="location" type="text" placeholder="London, Uk" label="Location" value={personalInfo.location} onChange={handlePersonalChange} />
                <CreateInput id="phone" type="tel" placeholder="+213 7 99 12" label="Phone Number" value={personalInfo.phone} onChange={handlePersonalChange} />
                <div className="Buttons">
                <button type="submit" className="Save-btn"><SaveIcon stroke="#fff" width="20" height="20"/>save</button>
               <button type="submit" onClick={handleClearPersonal} className="Clear-btn"><DeleteIcon stroke="#fff" width="20" height="20"/>Clear</button>
                </div>
            </form>
        </>
    )
}

export default CreatePersonal ;