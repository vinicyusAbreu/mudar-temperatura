import React, { useState } from 'react';
import './main.css';
import Form from './form/form';
import Tab from './tab/tab';
import conversor from '../functions/conversor';

const Main = () => {
    const [valorGraus, setValorGraus] = useState('');
    const [valorTipo, setValorTipo] = useState('');
    const [valor, setValor] = useState('C');
    const [resultado, setResultado] = useState(0);


    const enviarTemperatura = ({ graus, tipo }) => {
        setValorGraus(graus);
        setValorTipo(tipo);
        convertendoValor(graus, tipo, valor);
    }

    const converter = (dados) => {
        let valor = dados.target.dataset.tipo;
        setValor(valor);
        convertendoValor(valorGraus, valorTipo, valor);
    }

    const convertendoValor = (graus, tipo, valor) => {
        if (graus === '') return;
        setResultado(conversor(graus, tipo, valor));
    }

    return (
        <main>
            <h3 id="resultado">{resultado}</h3>
            <Form enviarTemperatura={enviarTemperatura} />
            <Tab converter={converter} />
        </main>
    );
}



export default Main;