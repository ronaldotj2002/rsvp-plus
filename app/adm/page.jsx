'use client'

import {React, useState, useEffect} from 'react';
import {useRouter} from 'next/navigation'
import { ToastContainer, toast} from 'react-toastify'
import { AuthService } from '../auth/authService'
import 'react-toastify/dist/ReactToastify.css'


const Adm = () => {

    useEffect(() => {
        // Abrir o modal assim que o componente for montado
        document.getElementById('my_modal_1').showModal();
      }, []);

    const [values, setValues] = useState({
        email: '',
        senha: ''
    })
    
    const router = useRouter()

    function handleChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        setValues((currentValues) => {
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            }
        })
    }

    return (
        <div className='container mx-auto px-4 mt-3'>

            <div className='grid grid-cols-subgrid gap-4 col-span3 mt-8'>

                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mx-auto block">
               
                    <li>
                        <a onClick={() => document.getElementById('my_modal_1').showModal()}>
                            Página do Administrador do Evento 
                            <span className="badge badge-xs badge-info"></span>
                        </a>
                    </li>
                </ul>

            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Login</h3>
                    <p className="py-4 text-center">Área restrita aos administradores do evento!</p>                    
                        <form method="dialog" onSubmit ={(event) => {
                            event.preventDefault();
                            AuthService.login({
                                email: values.email,
                                senha: values.senha
                            })
                            .then(() => {
                                router.push('/adm/area-logada')
                            })
                            .catch(() => {
                                // alert("Usuário ou senha inválido!")
                                toast.error('Usuário ou senha inválido!')
                            })
                        }} >
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text"  name="email" className="grow" value={values.email}  onChange={handleChange} placeholder="Usuario"  />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" name='senha' className="grow" value={values.senha}  onChange={handleChange}/>
                            </label>
                            <button className="btn btn-info block mt-8 w-28 mx-auto" >Logar</button>
                           
                        </form>                      
                </div>
                <ToastContainer />
            </dialog>

        </div>
    )
}

export default Adm;