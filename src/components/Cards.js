import React from "react";

const Cards = (props) => {
  return (
    <div>
      <ul>
        <li>id: {props.item.id}</li>
        <li>name: {props.item.name}</li>
        <li>age: {props.item.age}</li>
        <li>institute: {props.item.institute}</li>
        <li>isActive : {props.item.isActive ? "YES" : "NO"}</li>
      </ul>
    </div>
  );
};

export default Cards;
