import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  return (
    <div className="div_lista-suspensa">
      <label className="label">{props.label}</label>
      <select required={props.obrigatorio} className="lista-suspensa">
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa