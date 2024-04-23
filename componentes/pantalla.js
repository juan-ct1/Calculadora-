import React from "react";
import '../hojas-de-estilos/pantalla.css';

const Pantalla = ({ input }) => {
    const maxLength = 20; // Define el número máximo de caracteres a mostrar

    return (
        <div className='input'>
            {input.length > maxLength ? input.slice(0, maxLength) : input}
        </div>
    );
}

export default Pantalla;
