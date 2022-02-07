import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { Formulario } from './Formulario';


const Menu = () => {

    const [categoria, setCategoria] = useState('people');

    const [cambioSelector, setCambioSelector] = useState(false);

    const handleOnChange = (e) => {
        setCategoria(e.target.value)
        setCambioSelector(false);
    }

    // const enlacesApi = [`"https://swapi.dev/api/${people}/${datto}"`];




    return (

        <div>

            <div className='row g-3'>

                <div className="col-md">
                    <select onChange={handleOnChange} className="form-select" aria-label="Default select example">
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="films">films</option>
                        <option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                        <option value="starships">starships</option>
                    </select>
                </div>
            
                <div className="col-md">
                 <Formulario enviarCategoria={categoria} selector={cambioSelector} setearSelector={setCambioSelector} />
                 </div>
                 </div>

        </div>


    );
}


export default Menu;

