import React, { useState } from 'react';
import './tab.css';

const Tab = ({ converter }) => {
    const [ativo, setAtivo] = useState(1);


    return (
        <div className='tab'>
            <p className='tab-texto'>Converter para: </p>
            <div className='tab-container'>
                <button
                    className={ativo === 1 ? "ativo" : ""}
                    data-tipo="C"
                    onClick={(evento) => {
                        setAtivo(1);
                        converter(evento);
                    }}>
                    Celsius
                </button>

                <button data-tipo="F"
                    className={ativo === 2 ? "ativo" : ""}
                    onClick={(evento) => {
                        setAtivo(2);
                        converter(evento);
                    }}>
                    Fahrenheit
                </button>

                <button data-tipo="K"
                    className={ativo === 3 ? "ativo" : ""}
                    onClick={(evento) => {
                        setAtivo(3);
                        converter(evento);
                    }}>
                    Kelvin
                </button>

            </div>
        </div>
    )
}

export default Tab;