import { useState } from "react";
import CreateInput from "./inputField";

function CreateExperience({handleExperienceArray, experienceInfoArr, displayExpOnclick, handleExpDelete}) {
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [discription, setDiscription] = useState("");

    const handleExperienceChange = (id, value) => {
        switch(id) {
            case "company": 
                setCompany(value);
                break;
            case "title": 
                setTitle(value);
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
            case "discription": 
                setDiscription(value);
                break;
        }
    };

    const handleExpSubmit = (e) => {
        e.preventDefault();
        handleExperienceArray(company, title, startDate, endDate, location,discription, e);
        clearInputs() ;
        
    };

    function clearInputs () {
        setCompany("");
        setTitle("");
        setStartDate("");
        setEndDate("");
        setLocation("");
        setDiscription("");
    }

    return (
        <div className="Experience">
            <div className="Box-Header" onClick={displayExpOnclick}>Experience</div>
            <form onSubmit={handleExpSubmit} className="Experience-Form">
                <CreateInput id="company" type="text" label="Company Name" placeholder="ex: Facebook" value={company} handleInputChange={handleExperienceChange} />
                <CreateInput id="title" type="text" label="job Title" placeholder="Job Title" value={title} handleInputChange={handleExperienceChange}/>
                <CreateInput id="startDate" type="date" label="Starting Date" placeholder=""value={startDate} handleInputChange={handleExperienceChange}/>
                <CreateInput id="endDate" type="date" label="Ending Date" placeholder="" value={endDate} handleInputChange={handleExperienceChange}/>
                <CreateInput id="location" type="text" label="Location" placeholder="City, Country" value={location} handleInputChange={handleExperienceChange}/>
                <CreateInput id="discription" type="text" label="Discription" placeholder="Discription" value={discription} handleInputChange={handleExperienceChange}/>
                <div className="Buttons">
                    <button type="submit" className="Submit-Btn"><SaveIcon stroke={"white"} width={16} height={16}/>Submit</button>
                </div>
            </form>

            <div className="Short-Cuts">
                {experienceInfoArr.map(item => (<div className="Info-Box">
                    <div>{item.title}</div>
                    <button onClick={() => handleExpDelete(item.key)}>Delete</button>
                </div>))}
            </div>
        </div>
    )
}

export default CreateExperience ;