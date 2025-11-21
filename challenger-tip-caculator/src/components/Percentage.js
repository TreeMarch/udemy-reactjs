export default function Percentage({children,percentage,onSetPercentage}) {
  return (
    <div>
      {children}
      <select value={percentage} onChange={(e) => onSetPercentage(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Abosolute Amazing (20%)</option>
      </select>
    </div>
  );
}
