import { useState } from "react";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 1px #ccc;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }

`;

const people = [
  {
    id: "people-01",
    title: "Roberto"
  },{
    id: "people-02",
    title: "Jorge"
  },{
    id: "people-03",
    title: "Micaela"
  },{
    id: "people-04",
    title: "Yanina"
  },{
    id: "people-05",
    title: "Claudia"
  },{
    id: "people-06",
    title: "Rudolph"
  },{
    id: "people-07",
    title: "Yazmin"
  },{
    id: "people-08",
    title: "Pipi"
  }
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesion de masajes"
  },{
    id: "calendar-02",
    title: "reunion-02"
  },{
    id: "calendar-03",
    title: "Revision VTV"
  },{
    id: "calendar-04",
    title: "Evento gremial"
  },{
    id: "calendar-05",
    title: "Dia del empleado"
  },{
    id: "calendar-06",
    title: "Cumpleaños de X"
  },{
    id: "calendar-07",
    title: "Juntada con amigos"
  },{
    id: "calendar-08",
    title: "Cena familiar"
  }
];

const emails = [
  {
    id: "email-01",
    title: "reporte de resultado"
  },{
    id: "email-02",
    title: "reporte de tarifas"
  },{
    id: "email-03",
    title: "reporte de actualizacion"
  },{
    id: "email-04",
    title: "reporte de bajas"
  }
];


function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  //const [currentOption, setCurrentOption] = useState("all");

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        //setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        //setCurrentOption("people");
        break;
      case "calendar":
        setData([...calendar]);
       // setCurrentOption("calendar");
        break;
      case "emails":
        setData([...emails]);
        //setCurrentOption("emails");
        break;
    
      default:
        break;
    }
  }
  
  function handleItemSelected(item) {
    setSelection(item);
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">ALL</Button>
      <Button onClick={handleClick} name="people">PEOPLE</Button>
      <Button onClick={handleClick} name="calendar">CALENDAR</Button>
      <Button onClick={handleClick} name="emails">EMAILS</Button>

      {selection 
        ? <div>You selected: {selection.title}</div>
        : ""}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
