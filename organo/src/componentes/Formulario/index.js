import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
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

  const salvar = (evento) => {
    evento.preventDefault()
    console.log('Formulário foi submetido!!')
  }


  return (
    <section className="secao">
      <form onSubmit={salvar} className="secao_formulario">
        <h2 className="titulo_formulario">Preencha os dados para criar o card do colaborador:</h2>
        <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite o seu nome' />
        <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite o seu cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario