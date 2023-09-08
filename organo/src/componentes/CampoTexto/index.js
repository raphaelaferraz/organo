import './CampoTexto.css'

const CampoTexto = () => {
  return(
    <div className="campo_texto">
      <label className="campo_texto--label">Nome</label>
      <input className="campo_texto--input" placeholder="Digite o seu nome" />
    </div>
  )
}

export default CampoTexto