import './Rodape.css'

const Rodape = () => {
  return (
    <footer className="rodape">
      <section>
        <ul>
          <li>
            <a href="www.facebook.com">
              <img src="./imagens/fb.png"alt="Facebook"/>
            </a>
          </li>
          <li>
            <a href="www.instagram.com">
              <img src="./imagens/ig.png" alt="Instagram"/>
            </a>
          </li>
          <li>
            <a href="www.twitter.com">
              <img src="./imagens/tw.png" alt="Twitter"/>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/fundo.png" alt="Imagem de fundo"/>
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  )
}

export default Rodape