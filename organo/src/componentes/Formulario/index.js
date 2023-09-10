import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const salvar = evento => {
    evento.preventDefault();
    props.colaboradorCadastrado({
      nome,
      cargo, 
      imagem,
      time
    })

    setNome("")
    setCargo("")
    setImagem("")
    setTime("")
  }

  return (
    <section className='secao'>
      <form onSubmit={salvar} className='secao_formulario'>
        <h2 className='titulo_formulario'>
          Preencha os dados para criar o card do colaborador:
        </h2>
        <CampoTexto
          valor={nome}
          textoAlterado={valor => setNome(valor)}
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o seu nome'
        />
        <CampoTexto
          valor={cargo}
          textoAlterado={valor => setCargo(valor)}
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite o seu cargo'
        />
        <CampoTexto
          valor={imagem}
          textoAlterado={valor => setImagem(valor)}
          label='Imagem'
          placeholder='Informe o endereço da imagem'
        />
        <ListaSuspensa 
          valor = {time}
          textoAlterado={valor => setTime(valor)}
          obrigatorio={true} 
          label='Time' 
          itens={props.times} 
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
