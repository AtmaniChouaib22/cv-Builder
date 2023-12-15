import { useState } from "react";
import CreateInput from "./inputField";

function CreateEducation({handleEducationArray, educationInfoArr, displayEduOnclick, handleDelete}) {
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");

    const handleEducationChange = (id, value) => {
        switch(id) {
            case "school": 
                setSchool(value);
                break;
            case "degree": 
                setDegree(value);
                break;
            case "startDate": 
                setStartDate(value);
                break;
            case "endDate": 
                setEndDate(value);
                break;
            case "location": 
                setLocation(value);
                break;
        }
    };
    const handleEduSubmit = (e) => {
        e.preventDefault();
        handleEducationArray(school, degree, startDate, endDate, location, e);
        clearInputs() ;
    };
    function clearInputs () {
        setDegree("");
        setSchool("");
        setStartDate("");
        setEndDate("");
        setLocation("");
    } 
    return (
        <div className="Education">
            <div className="Box-Header" onClick={displayEduOnclick}>Education</div>
            <form onSubmit={handleEduSubmit} className="Education-Form">
                <CreateInput id="school" type="text" label="School/university" placeholder="MIT" value={school} handleInputChange={handleEducationChange} />
                <CreateInput id="degree" type="text" label="Degree" placeholder="Computer Science" value={degree} handleInputChange={handleEducationChange}/>
                <CreateInput id="startDate" type="date" label="Starting Date" placeholder=""value={startDate} handleInputChange={handleEducationChange}/>
                <CreateInput id="endDate" type="date" label="Ending Date" placeholder="" value={endDate} handleInputChange={handleEducationChange}/>
                <CreateInput id="location" type="text" label="Location" placeholder="City, Country"value={location} handleInputChange={handleEducationChange}/>
                <div className="Buttons">
                    <button type="submit" className="Submit-btn"><SaveIcon stroke={"white"} width={16} height={16}/>Submit</button>
                </div>
            </form>

            <div className="Short-Cuts">
                {educationInfoArr.map(item => (<div className="Info-Box">
                    <div>{item.degree}</div>
                    <button onClick={() => handleDelete(item.key)}><DeleteIcon stroke={"white"} width={10} height={10}/>Delete</button>
                </div>))}
            </div>
        </div>
    )
}

export default CreateEducation ;