import './Time.css'

const Time = (props) => {
  return (
    <section className='secao-time'>
      <h3 className='secao-time_titulo'>{props.nome}</h3>
    </section>
  )
}

export default Time