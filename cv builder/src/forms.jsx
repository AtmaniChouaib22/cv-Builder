import { useState } from "react";
import CreatePersonal from "./personal";
import CreateResume from "./resume";

function CreateForms() {
    //show the form onclick
    const showBox = () => {
        const btn = document.querySelector(".Personal-input");
        console.log(btn);
        btn.classList.toggle("open"); 
    }

    //personal informations state
    const [personalInfo, SetPersonalInfo]= useState({
        fullName: "",
        email: "",
        phone: "",
        location: ""
    });
    const handlePersonalChange = (e) => {
       //console.log(e.target.value, e.target.id);
       const val = e.target.value ;
       const id = e.target.id; 
       SetPersonalInfo((prevInfo)=>({...prevInfo, [id]: val}))
    }

    //display informations on submit
    const [submitted, SetSubmitted] = useState(false);
    const handleSub= (e) => {
        e.preventDefault();
        SetSubmitted(true) ;
    }

    return (
        <>
            <div className="Forms">
            <CreatePersonal showBox={showBox} handlePersonalChange={handlePersonalChange} personalInfo={personalInfo} handleSub=    {handleSub}/>
            </div>
            <CreateResume submitted={submitted} personalInfo={personalInfo}/>
        </>
    )
}

export default CreateForms ;