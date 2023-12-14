import { useState } from "react"
import CreatePersonalInfo from "./personalInfo"
import CreateEducation from "./educationInfo";
import CreateResume from "./resume";
import "./styles/app.css"
import "./styles/forms.css"
import { v4 as uuidv4 } from 'uuid';

const uniqueKey = uuidv4();

console.log(uniqueKey);

export default function App() {
    const [personalInfoArr, setPersonalInfoArr] = useState([]);
    const [educationInfoArr, setEducationInfoArr] = useState([]);

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

        console.log('working');
        console.log(obj);
        setPersonalInfoArr([...personalInfoArr, obj]);
        console.log(personalInfoArr)
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

        console.log('working');
        console.log(obj);
        setEducationInfoArr([...educationInfoArr, obj]);
        console.log(educationInfoArr)
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

    return(
        <div className="App-interface">
            <div className="Forms">
                <CreatePersonalInfo handlePersonalArray={handlePersonalInfoArr} displayPersOnclick={displayPersOnclick}/>
                <CreateEducation handleEducationArray={handleEducationArray} educationInfoArr={educationInfoArr} displayEduOnclick={displayEduOnclick}/>
            </div>
            <div className="Resume">
                <CreateResume educationInfoArr={educationInfoArr} personalInfoArr={personalInfoArr}/>
            </div>
        </div>
    )
}