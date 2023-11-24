
import CreateInput from "./inputField";
import './styles/personal.css'
import deleteImage from "./assets/delete.png"
import saveImage from "./assets/save.png"

function CreatePersonal({showBox, personalInfo, handlePersonalChange, handleSub, handleClearPersonal}) {

    return (
        <>
            <h1 onClick={showBox} className="Header-button">Personal Informations</h1>
            <form className="Personal-input" id="personalForm" onSubmit={handleSub}>
                <CreateInput id="fullName" type="text" placeholder="Ryan Gosling" label="Full Name" value={personalInfo.fullName} onChange={handlePersonalChange} />
                <CreateInput id="email" type="email" placeholder="Ryangosling@email.com" label="Email Adresse" value={personalInfo.email} onChange={handlePersonalChange} />
                <CreateInput id="location" type="text" placeholder="London, Uk" label="Location" value={personalInfo.location} onChange={handlePersonalChange} />
                <CreateInput id="phone" type="tel" placeholder="+213 7 99 12" label="Phone Number" value={personalInfo.phone} onChange={handlePersonalChange} />
               <button type="submit" className="Save-btn"><img src={saveImage} alt="save.png" className="save-img"/>save</button>
               <button type="submit" onClick={handleClearPersonal} className="Clear-btn"><img src={deleteImage} alt="del.png" className="del-img"/>Clear</button>
            </form>
        </>
    )
}

export default CreatePersonal ;