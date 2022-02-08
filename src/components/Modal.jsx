import React from 'react';
import logo from './viejito.png';

export const Modal = ({enviaModal,setError,propiedad}) => {

    let display  = "modal d-none";

    if(enviaModal){
        display = "modal d-block"
    }
    const manejaClick = () =>{
       display = "modal d-none";
       setError(false);
       propiedad(false); 
    }

    return (

        // style = {{display: 'block'}}

        <div  className= {display} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Error!</h5>
                        <button onClick = {manejaClick} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Estos no son los droides que está buscando</p>                        
                    </div>
                    <img src={logo} alt="Obi-Wan Kenobi"/>
                    <div className="modal-footer">

                        <button onClick = {manejaClick} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
