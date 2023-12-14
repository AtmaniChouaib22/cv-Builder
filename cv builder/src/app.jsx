import { useState } from "react"
import CreatePersonalInfo from "./personalInfo"
import CreateEducation from "./educationInfo";
import DisplayEducation from "./displayEducations";

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
        };

        console.log('working');
        console.log(obj);
        setEducationInfoArr([...educationInfoArr, obj]);
        console.log(educationInfoArr)
    }
    return(
        <>
            <CreatePersonalInfo handlePersonalArray={handlePersonalInfoArr} />
            <CreateEducation handleEducationArray={handleEducationArray} />
            <DisplayEducation educationInfoArr={educationInfoArr} />
        </>
    )
}