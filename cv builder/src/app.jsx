import { useState } from "react"
import CreatePersonalInfo from "./personalInfo"
import CreateEducation from "./educationInfo";
import CreateResume from "./resume";
import CreateExperience from "./experienceInfo";
import "./styles/app.css"
import "./styles/forms.css"
import { v4 as uuidv4 } from 'uuid';

const uniqueKey = uuidv4();

console.log(uniqueKey);

export default function App() {
    const [personalInfoArr, setPersonalInfoArr] = useState([]);
    const [educationInfoArr, setEducationInfoArr] = useState([]);
    const [experienceInfoArr, setExperienceInfoArr] = useState([]);

    function handlePersonalInfoArr(firstName, lastName, email, phone, location, e) {
        e.preventDefault();
        const obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            location: location,
            key: uuidv4()
        };
        setPersonalInfoArr([...personalInfoArr, obj]);
    }
    
    function handleEducationArray(school, degree, startDate, endDate, location, e) {
        e.preventDefault();
        const obj = {
            school: school,
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            location: location,
            key: uuidv4()
        };
        setEducationInfoArr([...educationInfoArr, obj]);
    }

    function handleExperienceArray(company, title, startDate, endDate, location, discription, e) {
        e.preventDefault();
        const obj = {
            company: company,
            title: title,
            startDate: startDate,
            endDate: endDate,
            location: location,
            discription: discription,
            key: uuidv4()
        };
        setExperienceInfoArr([...experienceInfoArr, obj]);
    }

    // display onclick the forms
    function displayPersOnclick() {
        const btn = document.querySelector(".Personal-Form");
        btn.classList.toggle("open");
    }
    function displayEduOnclick() {
        const btn = document.querySelector(".Education-Form");
        btn.classList.toggle("open");
    }
    function displayExpOnclick() {
        const btn = document.querySelector(".Experience-Form");
        btn.classList.toggle("open");
        console.log("www")
    }
    //delete 
    const handleDelete = (key) => {
        const newEducations = educationInfoArr.filter(item => item.key !== key)
        setEducationInfoArr(newEducations)
    }
    const handleExpDelete = (key) => {
        const newExperiences = experienceInfoArr.filter(item => item.key !== key)
        setExperienceInfoArr(newExperiences);
    }
    const handlePersDelete = () => {
        setPersonalInfoArr([]);
    }
    
    return(
        <div className="App-interface">
            <div className="Forms">
                <CreatePersonalInfo handlePersonalArray={handlePersonalInfoArr} displayPersOnclick={displayPersOnclick} handlePersDelete={handlePersDelete}/>
                <CreateEducation handleDelete={handleDelete} handleEducationArray={handleEducationArray} educationInfoArr={educationInfoArr} displayEduOnclick={displayEduOnclick}/>
                <CreateExperience handleExperienceArray={handleExperienceArray} experienceInfoArr={experienceInfoArr} displayExpOnclick={displayExpOnclick} handleExpDelete={handleExpDelete}/>
            </div>
            <div className="Resume">
                <CreateResume educationInfoArr={educationInfoArr} personalInfoArr={personalInfoArr} experienceInfoArr={experienceInfoArr}/>
            </div>
        </div>
    )
}