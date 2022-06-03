import React from "react";
import FetchItem from "./FetchItem";

function App() {
  let [resultActivity, setState] = React.useState({});
  async function fetchBored() {
    const price = document.querySelector("[name='price']").value;
    const type = document.querySelector("[name='type']").value;
    const difficulty = document.querySelector("[name='difficulty']").value;
    const people = document.querySelector("[name='people']").value;

    let minprice = 0;
    let maxprice = 1;
    if (price !== 'Стоимость') {
      minprice = price / 10;
      maxprice = price / 10;
    };
    let mindifficulty = 0;
    let maxdifficulty = 1;
    if (difficulty !== 'Сложность') {
      mindifficulty = difficulty / 10;
      maxdifficulty = difficulty / 10;
    };
    let fetchString = '';
    if (people !== 'Кол-во участников'){
      if (type === 'Тип') {
        fetchString = `http://www.boredapi.com/api/activity?minprice=${minprice}&maxprice=${maxprice}&minaccessibility=${mindifficulty}&maxaccessibility=${maxdifficulty}&participants=${people}`;
      } else  {
        fetchString = `http://www.boredapi.com/api/activity?minprice=${minprice}&maxprice=${maxprice}&minaccessibility=${mindifficulty}&maxaccessibility=${maxdifficulty}&type=${type}&participants=${people}`;
      }
    } else {
      if (type === 'Тип') {
        fetchString = `http://www.boredapi.com/api/activity?minprice=${minprice}&maxprice=${maxprice}&minaccessibility=${mindifficulty}&maxaccessibility=${maxdifficulty}`;
      } else  {
        fetchString = `http://www.boredapi.com/api/activity?minprice=${minprice}&maxprice=${maxprice}&minaccessibility=${mindifficulty}&maxaccessibility=${maxdifficulty}&type=${type}`;
      }
    }
    
    const response = await fetch(fetchString);
    if (response.ok) {
      const result = await response.json();
      resultActivity = result;
      const objActivity = {
        education: "образование",
        recreational: "развлечение",
        social: "общение",
        diy: "сделай сам",
        charity: "благотворительность",
        cooking: "приготовление еды",
        relaxation: "релаксация",
        music: "музыка",
        busywork: "работа",
      };
      resultActivity.type = objActivity[resultActivity.type];
      setState(resultActivity);
    }
  }
  let display = "";
  if (resultActivity.activity) {
    display = "";
  } else {
    display = "d-none";
  }
  return (
    <div className="App">
      <header className="text-center mt-5 App-header">
        <h1>Скучно... Чем бы заняться?</h1>
      </header>
      <div className="d-flex flex-column align-items-center mt-5">
        <button
          type="button"
          className="btn btn-primary btn-lg mb-5"
          onClick={() => fetchBored()}
        >
          Найти!
        </button>
        <div className="w-75 p-3">
          <div className="d-flex">
            <select name="difficulty" className="form-select fs-6 border-1 border-dark" aria-label="Default select example">
              <option defaultValue='Сложность'>Сложность</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <select name="type" className="form-select fs-6 border-1 border-dark" aria-label="Default select example">
              <option defaultValue='Тип'>Тип</option>
              <option value="education">образование</option>
              <option value="recreational">развлечение</option>
              <option value="social">общение</option>
              <option value="diy">сделай сам</option>
              <option value="charity">благотворительность</option>
              <option value="cooking">приготовление еды</option>
              <option value="relaxation">релаксация</option>
              <option value="music">музыка</option>
              <option value="busywork">работа</option>
            </select>
            <select name="price" className="form-select fs-6 border-1 border-dark" aria-label="Default select example">
              <option defaultValue='Стоимость'>Стоимость</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <select name="people" className="form-select fs-6 border-1 border-dark" aria-label="Default select example">
              <option defaultValue='Кол-во участников'>Кол-во участников</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className={display}>
            <FetchItem resultActivity={resultActivity} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
