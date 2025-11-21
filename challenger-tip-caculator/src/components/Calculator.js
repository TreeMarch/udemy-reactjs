import { useState } from "react";
import Bill from "./Bill";
import Output from "./Output";
import Percentage from "./Percentage";
import ResetBtn from "./ResetBtn";

export default function Calculator(){
    const [bill,setBill] = useState("");
    const [percentage1,setPercentage1] = useState(0);
    const [percentage2,setPercentage2] = useState(0);
    const tip = bill * ((Number(percentage1) + Number(percentage2)) / 2 / 100);
    

    function handleReset(){
        setBill("")
        setPercentage1(0)
        setPercentage2(0)
    }

    return(
        <div>
            <Bill bill={bill} onSetBill={setBill}/>
            <Percentage percentage={percentage1} onSetPercentage={setPercentage1}><span>How did you like the service : </span></Percentage>
            <Percentage percentage={percentage2} onSetPercentage={setPercentage2}><span>How did you like the service : </span></Percentage>
            {bill > 0 && (
            <>
                <Output bill={bill} tip={tip}/>
                <ResetBtn onReset={handleReset}/>
            </>
            )}
        </div>
    )
}