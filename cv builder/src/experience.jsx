import CreateInput from "./inputField"
import './styles/experience.css'
import { SaveIcon, DeleteIcon } from "./assets/icons";

function CreateExperience({showExpBox, experienceInfo, handleExperienceChange, handleExpSub, handleClearExperience}) {
    return (
        <>
            <h1 onClick={showExpBox} className="Header-button">Experience</h1>
            <form className="Experience-input" id="experienceForm" onSubmit={handleExpSub}>
                <CreateInput id="company" type="text" placeholder="ex: Meta, google..." label="Company Name" value={experienceInfo.company} onChange={handleExperienceChange} />
                <CreateInput id="title" type="text" placeholder="ex: Project Manger" label="Job Title" value={experienceInfo.title} onChange={handleExperienceChange} />
                <CreateInput id="startDate" type="text" placeholder="" label="Start Date" value={experienceInfo.startDate} onChange={handleExperienceChange} />
                <CreateInput id="endDate" type="text" placeholder="" label="End Date" value={experienceInfo.endDate} onChange={handleExperienceChange} />
                <CreateInput id="location" type="text" placeholder="Location" label="Location" value={experienceInfo.location} onChange={handleExperienceChange} />
                <CreateInput id="disc" type="text" placeholder="Discription" label="Discription" value={experienceInfo.disc} onChange={handleExperienceChange} />
                <div className="Buttons">
                <button type="submit" className="Save-btn"><SaveIcon stroke="#fff" width="20" height="20"/>Save</button>
               <button type="submit" onClick={handleClearExperience} className="Clear-btn"><DeleteIcon stroke="#fff" width="20" height="20"/>Clear</button>
                </div>
            </form>
        </>
    )
}
export default CreateExperience ;