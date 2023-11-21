import { useState } from "react";
import CreatePersonal from "./personal";
import CreateEducation from "./education";
import CreateResume from "./resume";

function CreateForms() {
    //show the form onclick
    const showBox = () => {
        const btn = document.querySelector(".Personal-input");
        console.log(btn);
        btn.classList.toggle("open"); 
    }

    const showEduBox = () => {
        const btn = document.querySelector(".Education-input");
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
    //Education informations state
    const [educationInfo, SetEducationInfo]= useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        disc: ""
    });

    const handleEducationChange = (e) => {
       //console.log(e.target.value, e.target.id);
       const val = e.target.value ;
       const id = e.target.id; 
       SetEducationInfo((prevInfo)=>({...prevInfo, [id]: val}))
    }

    //display informations on submit
    const [submitted, SetSubmitted] = useState(false);
    const handleSub= (e) => {
        e.preventDefault();
        SetSubmitted(true) ;
    }

    const [eduSubmitted, SetEduSubmitted] = useState(false);
    const handleEduSub= (e) => {
        e.preventDefault();
        SetEduSubmitted(true) ;
    }

    return (
        <>
            <div className="Forms">
            <CreatePersonal showBox={showBox} handlePersonalChange={handlePersonalChange} personalInfo={personalInfo} handleSub=    {handleSub}/>
            <CreateEducation showEduBox={showEduBox} handleEducationChange={handleEducationChange} educationInfo={educationInfo} handleEduSub={handleEduSub}/>
            </div>
            <CreateResume submitted={submitted} eduSubmitted={eduSubmitted}
            personalInfo={personalInfo} educationInfo={educationInfo}/>
        </>
    )
}

export default CreateForms ;