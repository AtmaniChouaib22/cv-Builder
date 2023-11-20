import { useState } from "react";
import CreateInput from "./inputField";
import './styles.css'


function CreatePersonal({showBox}) {
    const [personalInfo, SetPersonalInfo]= useState({
        fullName: "",
        email: "",
        phone: "",
        location: ""
    });

    const handlePersonalChange = (e) => {
        console.log(e.target.value, e.target.id);
       const val = e.target.value ;
       const id = e.target.id; 
       SetPersonalInfo((prevInfo)=>({...prevInfo, [id]: val}))
    }

    return (
        <>
            <h1 onClick={showBox}>click me</h1>
            <form className="Personal-input">
                <CreateInput id="fullName" type="text" placeholder="Ryan Gosling" label="Full Name" value={personalInfo.fullName} onChange={handlePersonalChange} />
            </form>
        </>
    )
}

export default CreatePersonal ;