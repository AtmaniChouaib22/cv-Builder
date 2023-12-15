
function DisplayEducation({educationInfoArr}) {
    console.log(educationInfoArr);
    return (
        <div className="Education-Section">
            {educationInfoArr.map(item => (<div key={item.key} className="Education-Item">
                <div className="left-info">
                    <div>{item.startDate} To </div>
                    <div>{item.endDate}</div>
                    <div>{item.location}</div>
                </div>
                <div className="right-info">
                    <div>{item.degree}</div>
                    <div>{item.school}</div>
                </div>
            </div>))}
        </div>
    )
}
export default DisplayEducation ;