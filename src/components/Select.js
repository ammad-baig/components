import React from "react";

const Select = (props) => {
  return (
    <div>
      <select onChange={props.onChange} value={props.value}>
        {props.options.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
