'use client'

import {React, useState} from 'react';
import {useRouter} from 'next/navigation'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Confirmacao = () => {

    const [nome, setNome] = useState('')
    const [acompanhanteAdulto, setAcompanhanteAdulto] = useState('')
    const [acompanhanteCrianca, setAcompanhanteCrianca] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const router = useRouter()

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

    const handleUsuario = (event) => {
        setUsuario(event.target.value);
        console.log("NOME", usuario)
    }

    const handleSenha = (event) => {
        setSenha(event.target.value);
        console.log("NOME", senha)
    }

    const handleConfirma =  async (event) => {
        event.preventDefault();
        console.log("NOME", nome, " - /", qtdConvidados)
    }

    const handleLogin =  async (event) => {
        event.preventDefault();
        if(usuario === 'Ronaldo') {
            router.push('/adm')
        } else {
            toast.error('Usuário ou senha Inválido"')
        }
        console.log("Tela de login", usuario)
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

                    <li>
                        <a onClick={() => document.getElementById('my_modal_1').showModal()}>
                            ADM
                            <span className="badge badge-xs badge-info"></span>
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

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Login</h3>
                    <p className="py-4 text-center">Área restrita aos administradores do evento!</p>                    
                        <form method="dialog">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" value={usuario} onchange={handleUsuario} placeholder="Usuario"  />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" value={senha}  onChange={handleSenha}/>
                            </label>
                            <button className="btn btn-info float-right block mt-8 w-28 mr6" onClick={handleLogin}>Logar</button>
                            <button className="btn btn-outline btn-info float-left block mt-8 w-28 ml-6">Cancelar</button>
                        </form>                      
                </div>
                <ToastContainer />
            </dialog>

        </div>
    )
}

export default Confirmacao;