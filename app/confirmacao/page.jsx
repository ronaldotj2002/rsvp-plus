'use client'

import {React, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Confirmacao = () => {

    const [nome, setNome] = useState('');
    const [acompanhanteAdulto, setAcompanhanteAdulto] = useState('');
    const [acompanhanteCrianca, setAcompanhanteCrianca] = useState('');

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleQtdConvidadosAdultos = (event) => {
        setAcompanhanteAdulto(event.target.value);
    };

    const handleQtdConvidadosCriancas = (event) => {
        setAcompanhanteCrianca(event.target.value);
    };

    const handleConfirma = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3100/convidados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    acompanhanteAdulto,
                    acompanhanteCrianca,
                    codigo
                }),
            });

            if (response.ok) {
                
                toast.success('Dados confirmados com sucesso!');
            } else {
               
                toast.error('Erro ao confirmar os dados. Por favor, tente novamente.');
            }
        } catch (error) {
            
            console.error('Erro ao enviar a solicitação:', error);
            toast.error('Erro ao confirmar os dados. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container mx-auto px-4 mt-3">
            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-start-5 col-span-4">
                    <form>
                       
                        <label className="input input-bordered flex items-center gap-2">
                            Convidado
                            <input
                                type="text"
                                value={nome}
                                onChange={handleNomeChange}
                                className="grow"
                                placeholder="Nome"
                            />
                        </label>

                        <select onChange={handleQtdConvidadosAdultos} className="select select-bordered w-full max-w-xs mt-4">
                            <option disabled>Quantos Adultos?</option>
                            <option value={1}>1 Adulto</option>
                            <option value={2}>2 Adultos</option>
                        </select>

                        <select onChange={handleQtdConvidadosCriancas} className="select select-bordered w-full max-w-xs mt-4">
                            <option disabled>Quantas Crianças?</option>
                            <option value={1}>1 Criança</option>
                            <option value={2}>2 Crianças</option>
                            <option value={3}>3 Crianças</option>
                        </select>

                        <button onClick={handleConfirma} className="btn btn-info mt-6">Confirmar</button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Confirmacao;
