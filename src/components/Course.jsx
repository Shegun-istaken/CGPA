export default function Course({
  onScoreChange,
  onUnitChange,
  onTitleChange,
  title,
  score,
  unit,
  onDelete,
}) {
  return (
    <div className="course">
      <label>
        <p>
          Course Title <small>(optional)</small>
        </p>
        <input value={title} type="text" onChange={onTitleChange} />
      </label>

      <label>
        <p>Your Score ( 0 - 100)</p>
        <input
          onChange={onScoreChange}
          type="number"
          min="0"
          max="100"
          value={score}
        />
      </label>

      <label>
        <p>Course Unit: {unit} {unit == 1 ? "unit" : "units"}</p>
        <input
          onChange={onUnitChange}
          type="range"
          min="1"
          max="6"
          value={unit}
        />
      </label>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
