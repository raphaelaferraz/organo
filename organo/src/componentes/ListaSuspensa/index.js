import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

  const inputAlterado = (evento) => {
    props.textoAlterado(evento.target.value)
  }

  return (
    <div className="div_lista-suspensa">
      <label className="label">{props.label}</label>
      <select value={props.valor} onChange={inputAlterado} required={props.obrigatorio} className="lista-suspensa">
        <option value="" hidden>Selecione o time</option>
        {props.itens.map(item => {
          return (<option key={item}>{item}</option>)
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa