'use client' 

import { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  useEffect(() => {
    // Abrir o modal assim que o componente for montado
    document.getElementById('my_modal_1').showModal();
  }, []);

  const [codigo, setCodigo] = useState('');
  const [validCodigo, setValidCodigo] = useState(false);
  const [attendees, setAttendees] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter()

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };
  

  const handleConfirma = async () => {
    // Supondo que você tenha URL definido em algum lugar do seu código
const URL = 'http://localhost:3100/';



try {
  const response = await fetch(`${URL}convite/codigo/${codigo}`);
console.log("RESPONSE", response.status)

  if(response.status === 400) {
    toast.error('O Codigo informado é Inválido"')
    document.getElementById('my_modal_1').showModal();
    
  }

  if(response.status === 404) {
    toast.error('Informe o Código"')
    document.getElementById('my_modal_1').showModal();
    
  }

  if (response.ok) {
    // Se a resposta estiver OK, analise o JSON retornado
    router.push('/confirmacao')
    const json = await response.json();
    // Faça algo com o JSON retornado
    console.log(json);
  } else {
    // Se a resposta não estiver OK, registre o erro
    console.error('Erro na solicitação:', response.status);
  }
} catch (error) {
  // Se ocorrer um erro durante a solicitação, registre o erro
  console.error('Erro durante a solicitação:', error);
}

  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!validCodigo ? (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Bem-vindo à Comemoração de 8 Anos do Davi</h3>
              <p className="py-4">Por favor, insira o código impresso no seu convite para confirmar sua presença:</p>
              <div className="">
                <form method="dialog">
                  <input type="text" value={codigo} onChange={handleCodigoChange} placeholder="Digite o Código" className="input input-bordered input-info w-full max-w-xs" />
                  <button onClick={handleConfirma} className="btn btn-info ml-3">Confirmar</button>
                </form>
              </div>
            </div>
            <ToastContainer />
          </dialog>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      ) : (
        <div>
          <h1>Obrigado por confirmar sua presença!</h1>
          <p>Você confirmou presença para {attendees} pessoa(s).</p>
        </div>
      )}
      
    </main>
  );
}


// eslint-disable-next-line react/jsx-props-no-spreading
