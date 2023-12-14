
function DisplayEducation({educationInfoArr}) {
    console.log(educationInfoArr);
    return (
        <div className="hello">
            {educationInfoArr.map(item => (<div>{item.school}{item.degree}</div>))}
        </div>
    )
}
export default DisplayEducation ;