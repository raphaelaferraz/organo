import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
  const css = {backgroundColor: props.corSecundaria}
  
  return (
    props.colaboradores.length > 0 && <section className='secao-time' style={css}>
      <h3 style={{borderColor: props.corPrimaria}}className='secao-time_titulo'>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
      </div>
    </section>
  )
}

export default Time