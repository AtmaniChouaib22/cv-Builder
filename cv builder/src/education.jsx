import CreateInput from "./inputField";
import './styles/education.css' ;
import { SaveIcon, DeleteIcon } from "./assets/icons";

function CreateEducation({showEduBox, educationInfo, handleEducationChange, handleEduSub, handleClearEducation}) {
    return (
        <>
            <h1 onClick={showEduBox} className="Header-button">Education</h1>
            <form className="Education-input" id="educationForm" onSubmit={handleEduSub}>
                <CreateInput id="school" type="text" placeholder="school / university" label="School" value={educationInfo.school} onChange={handleEducationChange} />
                <CreateInput id="degree" type="text" placeholder="licence/masters in" label="Degree" value={educationInfo.degree} onChange={handleEducationChange} />
                <CreateInput id="startDate" type="date" placeholder="" label="Start Date" value={educationInfo.startDate} onChange={handleEducationChange} />
                <CreateInput id="endDate" type="date" placeholder="" label="End Date" value={educationInfo.endDate} onChange={handleEducationChange} />
                <CreateInput id="location" type="text" placeholder="uni/school location" label="Location" value={educationInfo.location} onChange={handleEducationChange} />
                <div className="Buttons">
                <button type="submit" className="Save-btn"><SaveIcon stroke="#fff" width="20" height="20"/>Save</button>
               <button type="submit" onClick={handleClearEducation} className="Clear-btn"><DeleteIcon stroke="#fff" width="20" height="20"/>Clear</button>
                </div>
            </form>
        </>
    )
}

export default CreateEducation ;