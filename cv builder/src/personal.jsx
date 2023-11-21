
import CreateInput from "./inputField";
import './styles/personal.css'

function CreatePersonal({showBox, personalInfo, handlePersonalChange, handleSub}) {

    return (
        <>
            <h1 onClick={showBox}>click me</h1>
            <form className="Personal-input" id="personalForm" onSubmit={handleSub}>
                <CreateInput id="fullName" type="text" placeholder="Ryan Gosling" label="Full Name" value={personalInfo.fullName} onChange={handlePersonalChange} />
                <CreateInput id="email" type="email" placeholder="Ryangosling@email.com" label="Email Adresse" value={personalInfo.email} onChange={handlePersonalChange} />
                <CreateInput id="location" type="text" placeholder="London, Uk" label="Location" value={personalInfo.location} onChange={handlePersonalChange} />
                <CreateInput id="phone" type="tel" placeholder="+213 7 99 12" label="Phone Number" value={personalInfo.phone} onChange={handlePersonalChange} />
               <button type="submit">Save</button>
            </form>
        </>
    )
}

export default CreatePersonal ;