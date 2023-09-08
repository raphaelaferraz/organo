import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]
  return (
    <section className="secao">
      <form className="secao_formulario">
        <h2 className="titulo_formulario">Preencha os dados para criar o card do colaborador:</h2>
        <CampoTexto label='Nome' placeholder='Digite o seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite o seu cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
        <ListaSuspensa label="Time" itens={times} />
        <Botao nome="Criar card" />
      </form>
    </section>
  );
};

export default Formulario