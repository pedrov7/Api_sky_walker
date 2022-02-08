import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Kardex } from './Kardex';
import { Modal } from './Modal';

export const Identificacion = ({id}) => {

  const [lista, setLista] = useState([]);
  const [error, setError] = useState(false);
  const [cambioId, setCambioId] = useState(false);
  
  const enlace = `https://swapi.dev/api/people/${id}`;  



  useEffect(()=>{

    axios.get(enlace)
            .then(response => { setLista(response.data) })
            // .catch(e => {setError(e.response.status)});
            .catch(e => 
                {
                e.response.status === 404? 
                setError(true):
                setError(false)
                });


  },[])
  
  console.log(lista);


  return (
  
  
  <div>

  <Kardex resultado = {lista}/>
  <Modal enviaModal = {error} setError = {setError} propiedad = {setCambioId}/>
  </div>
  


  );
};
