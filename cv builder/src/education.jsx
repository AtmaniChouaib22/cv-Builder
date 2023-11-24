import CreateInput from "./inputField";
import './styles/education.css' ;

function CreateEducation({showEduBox, educationInfo, handleEducationChange, handleEduSub, handleClearEducation}) {
    return (
        <>
            <h1 onClick={showEduBox} className="Header-button">Education</h1>
            <form className="Education-input" id="educationForm" onSubmit={handleEduSub}>
                <CreateInput id="school" type="text" placeholder="school / university" label="School" value={educationInfo.school} onChange={handleEducationChange} />
                <CreateInput id="degree" type="text" placeholder="licence/masters in" label="Degree" value={educationInfo.degree} onChange={handleEducationChange} />
                <CreateInput id="startDate" type="text" placeholder="" label="Start Date" value={educationInfo.startDate} onChange={handleEducationChange} />
                <CreateInput id="endDate" type="text" placeholder="" label="End Date" value={educationInfo.endDate} onChange={handleEducationChange} />
                <CreateInput id="location" type="text" placeholder="uni location" label="Location" value={educationInfo.location} onChange={handleEducationChange} />
               <button type="submit">Save</button>
               <button type="submit" onClick={handleClearEducation}>Clear</button>
            </form>
        </>
    )
}

export default CreateEducation ;