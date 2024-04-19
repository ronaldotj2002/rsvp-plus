'use client'

import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const AreaLogada = () => {

    const [dadosConvite, setDadosConvite] = useState(null);
    const [dadosConvitesAtivos, setDadosConvitesAtivos] = useState(null);
    // const [dadosConvidados, setDadosConvidados] = useState(null);
    const [dadosConvidadosConfirmados, setDadosConvidadosConfirmados] = useState(null);
    const [gridAtual, setGridAtual] = useState(null);
    const [loading, setLoading] = useState(false);

    const date = new Date();
    const formattedDate = format(date, 'dd/MM/yyyy');

    
    const fetchConvites = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3100/convite');
            if (!response.ok) {
                throw new Error('Falha ao buscar os convites');
            }
            const data = await response.json();
            setDadosConvite(data);
            setGridAtual('dadosConvite')
        } catch (error) {
            console.error('Erro ao buscar os convites:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchConvitesAtivos  = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3100/convite/ativo');
            if (!response.ok) {
                throw new Error('Falha ao buscar os convites ativos');
            }
            const data = await response.json();
            setDadosConvitesAtivos(data);
            setGridAtual('dadosConvitesAtivos')
        } catch (error) {
            console.error('Erro ao buscar os convites ativos:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchConvidadosConfirmados  = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3100/convidados');
            if (!response.ok) {
                throw new Error('Falha ao buscar os convidados');
            }
            const data = await response.json();
            setDadosConvidadosConfirmados(data);
            setGridAtual('dadosConvidadosConfirmados')
        } catch (error) {
            console.error('Erro ao buscar os convidados:', error);
        } finally {
            setLoading(false);
        }
    };


    const handleConvitesButtonClick = () => {
        fetchConvites(); 
      };

      const handleConvitesAtivosButtonClick = () => {
        fetchConvitesAtivos(); 
      };
    
      const handleConvidadosConfirmadosButtonClick = () => {
        fetchConvidadosConfirmados(); 
      };
     
   
    return (
   
            <div className='container mx-auto px-4 mt-3'>

                <div className='grid grid-cols-subgrid gap-4 col-span3 mt-8'>

                    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mx-auto block">
                
                        <li>
                            <a onClick={handleConvitesButtonClick} disabled={loading}>
                                Lista de Convites
                                <span className="badge badge-xs badge-info"></span>
                            </a>
                        </li>

                        <li>
                            <a onClick={handleConvitesAtivosButtonClick} disabled={loading}>
                                Convites Ativos
                                <span className="badge badge-xs badge-info"></span>
                            </a>
                        </li>
                        
                        <li>
                            <a onClick={handleConvidadosConfirmadosButtonClick} disabled={loading}>
                                Convidados Confirmados
                                <span className="badge badge-xs badge-info"></span>
                            </a>
                        </li>

                        <li className="ml-10">
                            <a className="btn btn-error">
                                Logout
                            
                            </a>
                        </li>
                    </ul>

                </div>

            <div className="overflow-x-auto">
                <h1 className="text-center mt-5 mb-5">
                {gridAtual === 'dadosConvite' && dadosConvite && (
                    'Lista de Convites'                    
                )}</h1>
            {gridAtual === 'dadosConvite' && dadosConvite && (
                <table className="table table-zebra">
                  
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Usado</th>
                        </tr>
                    </thead>
                    <tbody>
                            {dadosConvite.map((item, index) => (
                                <tr key={index}>
                                <td>{item.codigo}</td>
                                <td>{item.usado ? 'Sim' : 'Não'}</td>
                                </tr>
                            ))}
                                                 
                    </tbody>
                </table>
                )}


                <h1 className="text-center mt-5 mb-5">
                    {gridAtual === 'dadosConvitesAtivos' && dadosConvitesAtivos && (
                        'Convites Ativos'
                    )}</h1>
                {gridAtual === 'dadosConvitesAtivos' && dadosConvitesAtivos && (
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Usado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dadosConvitesAtivos.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.codigo}</td>
                                    <td>{item.usado ? 'Sim' : 'Não'}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                )}

<h1 className="text-center mt-5 mb-5">
                    {gridAtual === 'dadosConvidadosConfirmados' && dadosConvidadosConfirmados && (
                        'Convidados Confirados'
                    )}</h1>
                {gridAtual === 'dadosConvidadosConfirmados' && dadosConvidadosConfirmados && (
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade de Adultos</th>
                                <th>Quantidade de Crianças</th>
                                <th>Cod. Convite</th>
                                <th>Data de Confirmação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dadosConvidadosConfirmados.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nome}</td>
                                    <td>{item.acompanhanteAdulto}</td>
                                    <td>{item.acompanhanteCrianca}</td>
                                    <td>{item.codconvite}</td>
                                    <td>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                )}
            </div>
            </div>
     
    )
}

export default AreaLogada;

