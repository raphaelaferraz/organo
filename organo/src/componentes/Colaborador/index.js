  import './Colaborador.css'

  const Colaborador = (props) => {
    return (
      <div className="div-colaborador">
        <div className="div-colaborador_cabecalho">
          <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className="div-colaborador_rodape">
          <h4>{props.nome}</h4>
          <h5>{props.cargo}</h5>
        </div>
      </div>
    )
  }

  export default Colaborador