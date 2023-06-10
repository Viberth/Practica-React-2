import React from 'react';
import '../hojas-estilos/Contador.css'


function Contador({ clicks }) {

    return(

        <div className='contador'>
            {clicks}
        </div>
    );

}

export default Contador;