import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {getData,delData} from "./services/baterry.js";
import TableComponent from "./components/TabletComponent/TabletComponent.js";

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function get() {
      const data = await getData();
      setDados(data);
    }
    get();
  }, []);

  console.log({ dados });

  return (
    <div>
      <Header />
        <h1 className="title">Registros</h1>
        <div className="grid-container"></div>
       
       <TableComponent data={dados} />
      
    </div>
  );
}

export default App;
