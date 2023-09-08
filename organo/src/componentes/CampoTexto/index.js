import './CampoTexto.css';

const CampoTexto = props => {
  return (
    <div className='campo_texto'>
      <label className='campo_texto--label'>{props.label}</label>
      <input required={props.obrigatorio} className='campo_texto--input' placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
