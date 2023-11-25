import './styles/educationDisp.css'

export default function DisplayEducation({educationInfo}) {
    return (
        <div className="Education-display">
            <div className="Edu-one">
                <div className="SE-date">{educationInfo.startDate} To {educationInfo.endDate}</div>
                <div className='Location'>{educationInfo.location}</div>
            </div>
            <div className="Edu-two">
                <div className='School'>{educationInfo.school}</div>
                <div className='Degree'>{educationInfo.degree}</div>
            </div>
        </div>
    )
}