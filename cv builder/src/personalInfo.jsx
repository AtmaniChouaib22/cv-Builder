import { useState } from "react";
import CreateInput from "./inputField";
import { SaveIcon, DeleteIcon } from "./assets/icons";

function CreatePersonalInfo({handlePersonalArray, displayPersOnclick, handlePersDelete}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    const handlePersonalChange = (id, value) => {
        switch(id) {
            case "firstName": 
                setFirstName(value);
                break;
            case "lastName": 
                setLastName(value);
                break;
            case "email": 
                setEmail(value);
                break;
            case "phone": 
                setPhone(value);
                break;
            case "location": 
                setLocation(value);
                break;
        }
    };

    const handlePersSubmit = (e) => {
        e.preventDefault();
        handlePersonalArray(firstName, lastName, email, phone, location, e);
        // Clear the form after submission
        clearInputs(); 
    
    }

    function clearInputs() {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setLocation("");
    }

    return (
        <div className="Personal" >
            <div className="Box-Header" onClick={displayPersOnclick}>Personal information</div>
            <form onSubmit={handlePersSubmit} className="Personal-Form">
                <CreateInput id="firstName" type="text" label="First Name" placeholder="Ryan" value={firstName} handleInputChange={handlePersonalChange} />
                <CreateInput id="lastName" type="text" label="Last Name" placeholder="Gosling" value={lastName} handleInputChange={handlePersonalChange}/>
                <CreateInput id="email" type="email" label="Email" placeholder="Ryangosling@gmail.com"value={email} handleInputChange={handlePersonalChange}/>
                <CreateInput id="phone" type="tel" label="Phone" placeholder="123-456-7890" value={phone} handleInputChange={handlePersonalChange}/>
                <CreateInput id="location" type="text" label="Location" placeholder="City, Country"value={location} handleInputChange={handlePersonalChange}/>
                <div className="btns">
                <button type="submit" className="Submit-btn"><SaveIcon stroke={"white"} width={16} height={16}/>Submit</button>
                <button onClick={handlePersDelete} className="Delete-btn"><DeleteIcon stroke={"white"} width={16} height={16}/>Delete</button>
                </div>
            </form>
        </div>
    )

}

export default CreatePersonalInfo ;