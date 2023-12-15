function DisplayExperience({experienceInfoArr}) {
    console.log(experienceInfoArr);
    return (
        <div className="Experience-Section">
            {experienceInfoArr.map(item => (<div key={item.key} className="Experience-Item">
                <div className="left-info">
                    <div>{item.startDate} To </div>
                    <div>{item.endDate}</div>
                    <div className="Location">{item.location}</div>
                </div>
                <div className="right-info">
                    <div className="Title">{item.title}</div>
                    <div className="Company">{item.company}</div>
                    <div className="Discription">{item.discription}</div>
                </div>
            </div>))}
        </div>
    )
}
export default DisplayExperience ;