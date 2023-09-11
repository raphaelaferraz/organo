import './CampoTexto.css';

const CampoTexto = props => {
  
  const inputDigitado = (evento) => {
    props.textoAlterado(evento.target.value)
  }

  return (
    <div className='campo_texto'>
      <label className='campo_texto--label'>{props.label}</label>
      <input value={props.valor} onChange={inputDigitado} required={props.obrigatorio} className='campo_texto--input' placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
