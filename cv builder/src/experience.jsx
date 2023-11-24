import CreateInput from "./inputField"
import './styles/experience.css'
function CreateExperience({showExpBox, experienceInfo, handleExperienceChange, handleExpSub, handleClearExperience}) {
    return (
        <>
            <h1 onClick={showExpBox}>Experience</h1>
            <form className="Experience-input" id="experienceForm" onSubmit={handleExpSub}>
                <CreateInput id="company" type="text" placeholder="Company" label="Company Name" value={experienceInfo.company} onChange={handleExperienceChange} />
                <CreateInput id="title" type="text" placeholder="job title" label="Job Title" value={experienceInfo.title} onChange={handleExperienceChange} />
                <CreateInput id="startDate" type="text" placeholder="" label="Start Date" value={experienceInfo.startDate} onChange={handleExperienceChange} />
                <CreateInput id="endDate" type="text" placeholder="" label="End Date" value={experienceInfo.endDate} onChange={handleExperienceChange} />
                <CreateInput id="location" type="text" placeholder="Location" label="Location" value={experienceInfo.location} onChange={handleExperienceChange} />
                <CreateInput id="disc" type="text" placeholder="Discription" label="Discription" value={experienceInfo.disc} onChange={handleExperienceChange} />
               <button type="submit">Save</button>
               <button type="submit" onClick={handleClearExperience}>Clear</button>
            </form>
        </>
    )
}
export default CreateExperience ;