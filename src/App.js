import React from "react";
import FetchItem from "./FetchItem";

function App() {
  let [resultActivity, setState] = React.useState({});
  async function fetchBored() {
    const response = await fetch(
      "http://www.boredapi.com/api/activity?minprice=0&maxprice=1"
    );
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
        <div class="w-75 p-3">
          <div className="d-flex">
            <select name="difficulty" class="form-select fs-6 border-1 border-dark" aria-label="Default select example">
              <option selected>Сложность</option>
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
            <select name="type" class="form-select fs-6 border-1 border-dark" aria-label="Default select example">
              <option selected>Тип</option>
              <option value="образование">образование</option>
              <option value="развлечение">развлечение</option>
              <option value="общение">общение</option>
              <option value="сделай сам">сделай сам</option>
              <option value="благотворительность">благотворительность</option>
              <option value="приготовление еды">приготовление еды</option>
              <option value="релаксация">релаксация</option>
              <option value="музыка">музыка</option>
              <option value="работа">работа</option>
            </select>
            <select name="price" class="form-select fs-6 border-1 border-dark" aria-label="Default select example">
              <option selected>Цена</option>
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
