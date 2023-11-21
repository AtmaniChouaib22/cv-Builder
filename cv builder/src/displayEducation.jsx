export default function DisplayEducation({educationInfo}) {
    return (
        <div className="Education-display">
            <div>
                <div>{educationInfo.startDate}-{educationInfo.endDate}</div>
                <div>{educationInfo.location}</div>
            </div>
            <div>
                <div>{educationInfo.school}</div>
                <div>{educationInfo.degree}</div>
            </div>
        </div>
    )
}