import React from "react";
import { delData } from "../../services/baterry";

const TableComponent = ({ data }) => {
  return (
    <div>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.brand}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td style={{display:"flex",gap:'1rem',alignItems:"center",justifyContent:'center'}} >
                <button onClick={()=>{alert(item.id)}} >Editar</button>
                <button onClick={()=>delData(item.id)} >Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
