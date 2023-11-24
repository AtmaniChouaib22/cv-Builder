export default function DisplayExperience({experienceInfo}) {
    return (
        <div className="Experience-display">
            <div>
                <div>{experienceInfo.startDate}-{experienceInfo.endDate}</div>
                <div>{experienceInfo.location}</div>
            </div>
            <div>
                <div>{experienceInfo.title}</div>
                <div>{experienceInfo.company}</div>
                <div>{experienceInfo.disc}</div>
            </div>
        </div>
    )
}