"use client";
import React from 'react' 
import { useState } from 'react';

const Form = () => {

  const [vuelo,setVuelo] = useState<string>("")
  const [tipoVuelo, setTipoVuelo] = useState<string>('na');
  const [salida,setSalida] = useState<string>("")
  const [llegada,setLlegada] = useState<string>("")
  const [horaSalida,setHoraSalida] = useState<string>("")
  const [horaLlegada,setHoraLlegada] = useState<string>("")
  const [aeronave,setAeronave] = useState<string>("")
  const [pasajeros,setPasajeros] = useState<number | ''>('')
  const [tiquete,setTiquete] = useState<number | ''>('')
  const [impuestos,setImpuestos] = useState<number | ''>('')
  const [sobretasa,setSobretasa] = useState<number | ''>('')
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page

    if([vuelo,salida,llegada,horaSalida,horaLlegada,aeronave].includes('')){
      setError(true) 
   }
   else{
       setError(false)

  }};

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipoVuelo(e.target.value);
  };

  const handleImpuestos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      setImpuestos(value === '' ? '' : Number(value));
    }
    
  };

  const handleSobretasa = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      setSobretasa(value === '' ? '' : Number(value));
    }
    
  };

  const handlePasajeros = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0)) {
      setPasajeros(value === '' ? '' : Number(value));
    }
    
  };

  const handleTiquete = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0)) {
      setTiquete(value === '' ? '' : Number(value));
    }
    
  };


  return (
    <div className='px-32 w-[1255px] mt-8'>
      {error && <h2 className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">Todos los campos son obligatorios</h2>}

      <form onSubmit={handleSubmit}>
        <div className='pt-5 relative'>
          <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light  bg-slate-50 w-32 h-1 align-top'>Número de vuelo </label>
          <input type='text' 
            className='border-2 border-gray-300 pl-5 h-14 w-[1000px]' 
            placeholder='SA-1234' 
            value={vuelo} 
            onChange={(e)=>setVuelo(e.target.value)}>
          </input>
        </div>

        <div className='pt-5'>
          <label className='block'>Tipo de vuelo: </label>
          <div className='pt-2'>
            <label className='pr-12'>
              <input type='radio' name='tipo' value='na' className='mr-2' checked={tipoVuelo === 'na'} onChange={handleOptionChange}></input>
              Nacional 
            </label>
        
            <label className=''>
              <input type='radio' name='tipo' value='in' className='mr-2' checked={tipoVuelo === 'in'} onChange={handleOptionChange}></input>
              Internacional
            </label>
          </div>
          
        </div>

        <div className='pt-5 relative'>
          <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light  bg-slate-50 w-32 h-1 align-top'>Ciudad de origen: </label>
          <select name='origen' className='border-2 border-gray-300 pl-5 h-14 w-[1000px]'>
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

        <div className='pt-5 relative'>
          <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light  bg-slate-50 w-36 h-1 align-top'>Ciudad de destino: </label>
          <select name='destino' className='border-2 border-gray-300 pl-5 h-14 w-[1000px]'>
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

        <div className='flex'>

          <div className='pt-5 pr-12 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-32 h-1 align-top'>Fecha de salida: </label>
            <input type='date' className='border-2 border-gray-300 pl-5 h-14 w-[474px]'
              value={salida} 
              onChange={(e)=>setSalida(e.target.value)}>       
            </input>
          </div>

          <div className='pt-5 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-28 h-1 align-top'>Hora de salida: </label>
            <input type='time' className='border-2 border-gray-300 pl-5 h-14 w-[476px]'
              value={horaSalida} 
              onChange={(e)=>setHoraSalida(e.target.value)}>
            </input>
          </div>

        </div>

        <div className='flex'>

          <div className='pt-5 pr-12 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-36 h-1 align-top'>Fecha de llegada: </label>
            <input type='date' className='border-2 border-gray-300 pl-5 h-14 w-[474px]'
              value={llegada} 
              onChange={(e)=>setLlegada(e.target.value)}>
            </input>
          </div>

          <div className='pt-5 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-32 h-1 align-top'>Hora de llegada: </label>
            <input type='time' className='border-2 border-gray-300 pl-5 h-14 w-[476px]'
            value={horaLlegada} 
            onChange={(e)=>setHoraLlegada(e.target.value)}>
            </input>
          </div>  

        </div>

        <div className='flex'>

          <div className='pt-5 pr-12 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-32 h-1 align-top'>Tipo de aeronave: </label>
            <input type='text' className='border-2 border-gray-300 pl-5 h-14 w-[600px]'
              value={aeronave}
              onChange={(e)=>setAeronave(e.target.value)}>
            </input>
          </div>

          <div className='pt-5 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-52 h-1 align-top'>Cantidad máxima de pasajeros: </label>
            <input type='number' className='border-2 border-gray-300 pl-5 h-14 w-[350px]'
              value={pasajeros} 
              onChange={handlePasajeros}>
            </input>
          </div>

        </div>

        <div className='flex'>

          <div className='pt-5 pr-8 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-32 h-1 align-top'>Precio de tiquete: </label>
            <input type='number' className='border-2 border-gray-300 pl-5 h-14 w-[435px]'
              value={tiquete} 
              onChange={handleTiquete}>
            </input>
          </div>

          <div className='pt-5 pr-8 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-24 h-1 align-top'>Impuestos(%): </label>
            <input type='number' className='border-2 border-gray-300 pl-5 h-14 w-[250px]'
              value={impuestos} 
              onChange={handleImpuestos}>
            </input>
          </div>

          <div className='pt-5 relative'>
            <label className='absolute top-0 left-0 ml-7 py-3 px-3 text-xs font-light bg-slate-50 w-24 h-1 align-top'>Sobretasa(%): </label>
            <input type='number' className='border-2 border-gray-300 pl-5 h-14 w-[250px]'
              value={sobretasa} 
              onChange={handleSobretasa}>
            </input>
          </div>  

        </div>
        
        <button className='bg-blue-400 text-white mt-4 rounded-sm px-6 h-10'>CREAR VUELO  </button>

        

        
        
      </form>






    </div>
  )
}

export default Form