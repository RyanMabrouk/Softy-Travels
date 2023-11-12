import React from "react";
import { Link } from "react-router-dom";

export function Title(props) {
  return (
    <div className="title_header">
      <h2 className="subtitle">{props.title}</h2>
      <Link to={props.link} className="view_all">
        View All
      </Link>
    </div>
  );
}
