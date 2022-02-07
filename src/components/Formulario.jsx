import React from 'react';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import axios from 'axios';
import { Kardex } from './Kardex';
import { Modal } from './Modal';

export const Formulario = ({enviarCategoria, selector, setearSelector}) => {

    // const {lista} = props;

    const [id, setId] = useState(1);
    const [lista, setLista] = useState([]);
    const [error, setError] = useState(false);

    const [cambioId, setCambioId] = useState(false);



    // const enlace = ;

    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/${enviarCategoria}/${id}`)
    //         .then(response => { setLista(response.data) })
    //         .catch(e => alert(e))
    // }, []);

    const handleOnChange = (e) => {
        setId(e.target.value);
        setCambioId(false);
        
    }

    const handleOnClick = () => {
        axios.get(`https://swapi.dev/api/${enviarCategoria}/${id}`)
            .then(response => { setLista(response.data) })
            // .catch(e => {setError(e.response.status)});
            .catch(e => 
                {
                e.response.status === 404? 
                setError(true):
                setError(false)
                });
         
            
                setearSelector(true);
                setCambioId(true);
            
           

            
    }
    console.log(error);

  return (
  
  
    <div className='row g-2'>
        
        <div className="input-group mb-3">
          <h6 className='ps-5 pe-2 pt-2'>Id</h6>
          <input onChange = {handleOnChange} type="number" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
          <button onClick = {handleOnClick} className="btn btn-secondary">Search</button>
        </div>
        { 
        selector && cambioId && !error && <Kardex resultado = {lista}/>        
        }
        
        <Modal enviaModal = {error} setError = {setError} propiedad = {setCambioId}/>
      </div>
  
  
  );
};
