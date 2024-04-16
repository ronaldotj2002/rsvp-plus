'use client'

import {React, useState} from 'react';

import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Confirmacao = () => {

    const [nome, setNome] = useState('')
    const [acompanhanteAdulto, setAcompanhanteAdulto] = useState('')
    const [acompanhanteCrianca, setAcompanhanteCrianca] = useState('')
   

    const handleNomeChange = (event) => {
        setNome(event.target.value);
        console.log("NOME", nome)
    }

    const handleQtdConvidadosAdultos = (event) => {
        setQtdConvidados(event.target.value);
        console.log("setAcompanhanteAdulto", setAcompanhanteAdulto)
    }

    const handleQtdConvidadosCriancas = (event) => {
        setQtdConvidados(event.target.value);
        console.log("setAcompanhanteCrianca", setAcompanhanteCrianca)
    }

    const handleConfirma =  async (event) => {
        event.preventDefault();
        console.log("NOME", nome, " - /", qtdConvidados)
    }



    return (
        <div className='container mx-auto px-4 mt-3'>

            <div className='grid grid-cols-subgrid gap-4 col-span3 mt-8'>

                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mx-auto block">
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Página de Confirmação
                            {/* <span className="badge badge-sm">99+</span> */}
                        </a>
                    </li>

                </ul>

            </div>

            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-start-5 col-span-4">

                    <form>
                        <label className="input input-bordered flex items-center gap-2">
                            Convidado
                            <input type="text" value={nome} onChange={handleNomeChange} className="grow" placeholder="Nome" />
                        </label>

                        <select onChange={handleQtdConvidadosAdultos} className="select select-bordered w-full max-w-xs mt-4">
                            <option disabled >Quantos Adultos?</option>
                            <option value={1}>1 Adulto</option>
                            <option value={2}>2 Adultos</option>                            
                        </select>

                        <select onChange={handleQtdConvidadosCriancas} className="select select-bordered w-full max-w-xs mt-4">
                            <option disabled >Quantas Crianças?</option>
                            <option value={1}>1 Criança</option>
                            <option value={2}>2 Crianças</option>     
                            <option value={3}>3 Crianças</option>                          
                        </select>

                        <button onclick={handleConfirma} className="btn btn-info mt-6">Confirmar</button>

                    </form>

                </div>
            </div>


        </div>
    )
}

export default Confirmacao;