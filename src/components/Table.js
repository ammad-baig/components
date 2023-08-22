import React from "react";

const Table = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {props?.thead?.map((x, i) => (
              <th key={i}>{x.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props?.tbody?.map((x, i) => (
            <tr key={i}>
              {props?.thead?.map((e, j) => (
                <td key={j}>{x[e.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
