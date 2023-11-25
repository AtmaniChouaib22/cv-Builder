import './styles/experienceDisp.css'
export default function DisplayExperience({experienceInfo}) {
    return (
        <div className="Experience-display">
            <div className="Exp-one">
                <div className="SE-Date">{experienceInfo.startDate} To {experienceInfo.endDate}</div>
                <div className="Location">{experienceInfo.location}</div>
            </div>
            <div className="Exp-two">
                <div className="Title">{experienceInfo.title}</div>
                <div className="Company">{experienceInfo.company}</div>
                <div className="Disctiption">{experienceInfo.disc}</div>
            </div>
        </div>
    )
}