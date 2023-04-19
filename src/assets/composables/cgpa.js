function cgpa(scores) {
  let sumOfUnits;
  let scoreUnit;

  scores.forEach((score) => {
    const result = parseInt(score.score);
    const unit = parseInt(score.unit);
    let point;

    if (result >= 70) {
      point = 4;
    } else if (result < 70 && result >= 60) {
      point = 3;
    } else if (result < 60 && result >= 50) {
      point = 2;
    } else if (result < 50 && result >= 45) {
      point = 1;
    } else {
      point = 0;
    }

    if (sumOfUnits) {
      sumOfUnits += unit;
    } else {
      sumOfUnits = unit;
    }

    if (scoreUnit) {
      scoreUnit += point * unit;
    } else {
      scoreUnit = point * unit;
    }
  });
  let result = scoreUnit / sumOfUnits;
  return result.toFixed(2)
}
export default cgpa;
