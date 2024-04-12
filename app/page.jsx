'use client' 

import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    // Abrir o modal assim que o componente for montado
    document.getElementById('my_modal_1').showModal();
  }, []);

  const [codigo, setCodigo] = useState('');
  const [validCodigo, setValidCodigo] = useState(false);
  const [attendees, setAttendees] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleConfirma = async () => {
    try {
      const response = await fetch('./api/confirmacao/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ codigo, attendees }),
      });
      
      if (response.ok) {
        // Verifica se a resposta não está vazia antes de tentar analisá-la
        const json = await response.json();
        // Faça algo com o JSON
      } else {
        console.error('Erro na solicitação:', response.status);
      }

      const data = await response.json();

      if (response.ok) {
        setValidCodigo(true);
        setAttendees(data.attendees);
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Erro ao confirmar presença:', error);
      setErrorMessage('Ocorreu um erro ao confirmar presença. Por favor, tente novamente mais tarde.');
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
