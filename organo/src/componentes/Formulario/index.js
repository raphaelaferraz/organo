import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () => {
  return (
    <section className="secao">
      <form className="secao_formulario">
        <CampoTexto label='Nome' placeholder='Digite o seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite o seu cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
      </form>
    </section>
  );
};

export default Formulario