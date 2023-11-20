import { useState } from "react";
import CreatePersonal from "./personal";

function CreateForms() {
    const showBox = () => {
        const btn = document.querySelector(".Personal-input");
        console.log(btn);
        btn.classList.toggle("open");
        
    }
    return (
        <div className="Forms">
            <CreatePersonal showBox={showBox} />
        </div>
    )
}

export default CreateForms ;