import './Time.css'

const Time = (props) => {
  const css = {backgroundColor: props.corSecundaria}
  
  return (
    <section className='secao-time' style={css}>
      <h3 style={{borderColor: props.corPrimaria}}className='secao-time_titulo'>{props.nome}</h3>
    </section>
  )
}

export default Time