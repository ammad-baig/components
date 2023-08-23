import "./App.css";
import Button from "./components/Button";
import Cards from "./components/Cards";
import Select from "./components/Select";
import Table from "./components/Table";
import Input from "./components/input";
import { useState } from "react";

function App() {
  // BUTTON COMPONENTS

  const [counter, setCounter] = useState(0);
  const changebtn = () => {
    setCounter((prev) => prev + 1);
  };

  // CARDS COMPONENTS

  let cardObj = [
    {
      id: 1,
      name: "ABC",
      age: 18,
      institute: "SAIMS",
      isActive: true,
    },
    {
      id: 2,
      name: "XYZ",
      age: 48,
      institute: "SAIMS",
      isActive: false,
    },
    {
      id: 3,
      name: "MNO",
      age: 20,
      institute: "SAIMS",
      isActive: true,
    },
    {
      id: 4,
      name: "JKL",
      age: 8,
      institute: "SAIMS",
      isActive: false,
    },
    {
      id: 5,
      name: "OPQ",
      age: 28,
      institute: "SAIMS",
      isActive: true,
    },
  ];

  // SELECT COMPONENTS

  let optionArr = ["Option1", "Option2", "Option3", "Option4", "Option5"];

  // TABLE COMPONENTS

  let tableHead = [
    {
      key: "name",
      name: "NAME",
    },

    {
      key: "age",
      name: "AGE",
    },
    {
      key: "rollNumber",
      name: "ROll NUMBER",
    },
    {
      key: "institute",
      name: "INSTITUTE",
    },
  ];

  let tableBody = [
    {
      name: "ABC",
      age: 10,
      rollNumber: "AB-01",
      institute: "SAIMS",
    },
    {
      name: "MNO",
      age: 18,
      rollNumber: "AB-02",
      institute: "SAIMS",
    },
    {
      name: "XYZ",
      age: 50,
      rollNumber: "AB-03",
      institute: "SAIMS",
    },
    {
      name: "JKL",
      age: 13,
      rollNumber: "AB-04",
      institute: "SAIMS",
    },
    {
      name: "QWERTY",
      age: 69,
      rollNumber: "AB-05",
      institute: "SAIMS",
    },
  ];

  return (
    <>
      <div>
        <h1>INPUT COMPONENT</h1>
        <Input
          type="password"
          placeholder="Enter Password"
          label="PASSWORD: "
        />
      </div>

      <div>
        <h1>BUTTON COMPONENT</h1>
        <div>Button Clicked : {counter}</div>
        <Button click={changebtn} text="BUTTON" />
      </div>

      <div>
        <h1>SELECT COMPONENET</h1>
        <Select options={optionArr} />
      </div>

      <div>
        <h1>TABLE COMPONENT</h1>
        <Table thead={tableHead} tbody={tableBody} />
      </div>

      <div>
        <h1>CARDS COMPONENTS</h1>
        {cardObj.map((x) => (
          <Cards
            key={x.id}
            // id={x.id}
            // name={x.name}
            // age={x.age}
            // institute={x.institute}
            // isActive={x.isActive}
            item={x}
          />
        ))}
      </div>
    </>
  );
}

export default App;
