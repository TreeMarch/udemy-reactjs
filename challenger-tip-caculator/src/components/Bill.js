export default function Bill({bill,onSetBill}){
    return(
        <div>
            <span>How much was the bill : </span>
            <input type="number" placeholder="100" value={bill} onChange={(e) => onSetBill(Number(e.target.value))}/>
        </div>
    )
}