import CampoTexto from '../CampoTexto';

const Formulario = () => {
  return (
    <section>
      <form>
        <CampoTexto label='Nome' placeholder='Digite o seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite o seu cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
      </form>
    </section>
  );
};

export default Formulario