import React from 'react'

const Form = () => {
  return (
    <div>

      <h6>*Todos los campos son obligatorios</h6>

      <form>
        <div>
          <label>Número de vuelo: </label>
          <input type='text'></input>
        </div>

        <div>
          <label>Tipo de vuelo: </label>
          <label>
            <input type='radio' name='tipo' value='na'></input>
            Nacional 
          </label>
      
          <label>
            <input type='radio' name='tipo' value='in'></input>
            Internacional
          </label>
        </div>

        <div>
          <label>Ciudad de origen: </label>
          <select name='origen'>
            <option value="bog">(BOG) Aeropuerto Internacional El Dorado - Bogotá</option>
            <option value="clo">(CLO) Aeropuerto Internacional Alfonso Bonilla Aragón - Cali</option>
            <option value="ctg">(CTG) Aeropuerto Internacional Rafael Núñez - Cartagena</option>
            <option value="mde">(MDE) Aeropuerto Internacional José María Córdova - Rionegro/Medellín</option>
            <option value="cdg">(CDG) Aeropuerto Charles de Gaulle - París, Francia</option>
            <option value="dxb">(DXB) Aeropuerto Internacional de Dubái - Dubái, Emiratos Árabes Unidos</option>
            <option value="jfk">(JFK) Aeropuerto Internacional John F. Kennedy - Nueva York, Estados Unidos</option>
            <option value="mex">(MEX) Aeropuerto Internacional Benito Juárez - Ciudad de México, México</option>
          </select>
        </div>

        <div>
          <label>Ciudad de destino: </label>
          <select name='destino'>
            <option value="bog">(BOG) Aeropuerto Internacional El Dorado - Bogotá</option>
            <option value="clo">(CLO) Aeropuerto Internacional Alfonso Bonilla Aragón - Cali</option>
            <option value="ctg">(CTG) Aeropuerto Internacional Rafael Núñez - Cartagena</option>
            <option value="mde">(MDE) Aeropuerto Internacional José María Córdova - Rionegro/Medellín</option>
            <option value="cdg">(CDG) Aeropuerto Charles de Gaulle - París, Francia</option>
            <option value="dxb">(DXB) Aeropuerto Internacional de Dubái - Dubái, Emiratos Árabes Unidos</option>
            <option value="jfk">(JFK) Aeropuerto Internacional John F. Kennedy - Nueva York, Estados Unidos</option>
            <option value="mex">(MEX) Aeropuerto Internacional Benito Juárez - Ciudad de México, México</option>
          </select>
        </div>

        <div>
          <label>Tipo de aeronave: </label>
          <input type='text'></input>
        </div>

        <div>
          <label>Cantidad máxima de pasajeros: </label>
          <input type='number'></input>
        </div>

        <div>
          <label>Precio de tiquete: </label>
          <input type='number'></input>
        </div>

        <div>
          <label>Impuestos(%): </label>
          <input type='number'></input>
        </div>

        <div>
          <label>Sobretasa(%): </label>
          <input type='number'></input>
        </div>

        
        
      </form>






    </div>
  )
}

export default Form