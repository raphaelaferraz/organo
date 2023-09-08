import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () => {
  return (
    <section className="secao">
      <form className="secao_formulario">
        <h2 className="titulo_formulario">Preencha os dados para criar o card do colaborador:</h2>
        <CampoTexto label='Nome' placeholder='Digite o seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite o seu cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
      </form>
    </section>
  );
};

export default Formulario