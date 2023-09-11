import './Banner.css'

function Banner() {
  return(
    <header className="banner">
      <img  className="banner_imagem" src="./imagens/banner.png" alt="Banner do organo"/>
    </header>
  )
}

// Permite que o componente seja importado em outros arquivos
export default Banner;