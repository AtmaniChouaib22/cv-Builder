import { useState } from "react";
import CreateInput from "./inputField";
import DispalyPersonal from "./displayPersonal";
import './styles.css'

function CreatePersonalInfo() {

    const [personalInfo, setPersonalInfo] = useState({
        fullname: "",
        email: "",
        phone: "",
        location: ""
    });

    const handlePersonalChange = (e) => {
        //destructuring the event object and getting id,value
        const {id, value} = e.target ;
        setPersonalInfo((prevInfo =>({...prevInfo, [id]: value})))
    }

    const [isOpen, setOpen] = useState(false);
    const showBox = (e) => {
        if (e.target.tagName !== 'INPUT') {
            setOpen(!isOpen);
        }
    }

    const [submited, SetSubmited] = useState(false);
    const saveSubmit = (e) => {
        e.preventDefault();
        SetSubmited(true);
    }

    return (
        <>
        <div className="Personal-wrapper">
            <h1 onClick={showBox}>click me</h1>
            <form className={`Personal-form ${isOpen ? "open" : ""}`} onSubmit={saveSubmit}>
            <CreateInput id="fullname" type="text" label="Full Name" placeholder="Ryan Gosling" value={personalInfo.fullname} onChange={handlePersonalChange} />
            <CreateInput id="email" type="email" label="Email Adresse" placeholder="RyanGosling@gmail.com" value={personalInfo.email} onChange={handlePersonalChange} />
            <CreateInput id="phone" type="tel" label="Phone Number" placeholder="031 21 34" value={personalInfo.phone} onChange={handlePersonalChange} />
            <CreateInput id="location" type="text" label="Location" placeholder="London, UK" value={personalInfo.location} onChange={handlePersonalChange} /> 
            <button type="submit" id="submitpersonal">Save</button>        
            </form>
        </div>
        <DispalyPersonal {...personalInfo} />
        </>
    )
}

export default CreatePersonalInfo ;