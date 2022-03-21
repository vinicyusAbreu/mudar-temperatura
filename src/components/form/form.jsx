import React, { useState } from 'react';
import './form.css';

const Form = ({ enviarTemperatura }) => {
    const [graus, setGraus] = useState('');
    const [tipo, setTipo] = useState('fahrenheit');



    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            if (graus === '') return;
            enviarTemperatura({ graus, tipo });
        }}>

            <div className='form-box'>
                <label>Graus: </label>
                <input
                    type="number" name="graus" id="graus"
                    value={graus}
                    onChange={(evento) => {
                        setGraus(evento.target.value);
                    }}
                />
            </div>

            <div className='form-box'>
                <label>Tipo: </label>
                <select
                    name="tipo" id="tipo" value={tipo}
                    onChange={(evento) => {
                        setTipo(evento.target.value);
                    }}
                >
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </div>
            <button type="submit" className='form-box'>Converter</button>
        </form>
    );
}

export default Form;