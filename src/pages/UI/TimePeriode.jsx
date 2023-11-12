import React from "react";

export function TimePeriode(props) {
  const formatter = new Intl.DateTimeFormat("fr", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  if (!props.start && !props.end) {
    return null;
  }
  const start = new Date(props.start);
  const end = new Date(props.end);
  //const period = days_passed(start);
  return (
    <div>
      <p>
        {/*Math.floor(period / 30) + " days ago" +" → " +
          date_diff_indays(start, end) +" days.!"*/}
      </p>
      <p className="catch_phrase">
        {formatter.format(start) + " → " + formatter.format(end)}
      </p>
    </div>
  );
}
function days_passed(date) {
  let d = new Date(date);
  let d2 = new Date(d.getFullYear(), 0, 0);
  let timeDiff = d.getTime() - d2.getTime();
  let diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}
function date_diff_indays(d, d2) {
  let timeDiff = d2.getTime() - d.getTime();
  let diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}
