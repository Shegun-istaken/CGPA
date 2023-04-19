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
        <p>Course Unit ( 0 - 4)</p>
        <input
          onChange={onUnitChange}
          type="number"
          min="0"
          max="4"
          value={unit}
        />
      </label>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
