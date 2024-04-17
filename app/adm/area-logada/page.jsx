

const AreaLogada = () => {
    return (
        <div className='container mx-auto px-4 mt-3'>

            <div className='grid grid-cols-subgrid gap-4 col-span3 mt-8'>

                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box mx-auto block">
               
                    <li>
                        <a>
                            Lista de Convites
                            <span className="badge badge-xs badge-info"></span>
                        </a>
                    </li>

                    <li>
                        <a>
                            Convites Ativos
                            <span className="badge badge-xs badge-info"></span>
                        </a>
                    </li>

                    <li>
                        <a>
                            Lista de Convidados
                            <span className="badge badge-xs badge-info"></span>
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            Convidados Confirados
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
        </div>
    )
}

export default AreaLogada