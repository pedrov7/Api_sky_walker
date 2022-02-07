import React from 'react';

export const Kardex = ({resultado}) => {


    const arreglo = Object.entries(resultado).filter((item, i) => i<5);
    

    // const arreglo1 = arreglo.filter((item, i) => i<5);
    // console.log(arreglo[0][0]);

    // resultado.map((item,i)=>{
    //     console.log(item);
    // })

    return (

        <ul className="list-group">
            {
                arreglo.map((item, indice)=>{
                   return <li key = {indice} className="list-group-item"><strong>{item[0]}:</strong>{item[1]}</li>
                })
            }
            
            
            
            
        </ul>


    );
};
