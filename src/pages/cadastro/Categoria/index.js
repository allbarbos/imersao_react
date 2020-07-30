import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'


const CadastroCategoria = () => {
  const defaultValues = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(defaultValues)

  const onChange = ({target}) => {
    setValues({
      ...values,
      [target.getAttribute('name')]: target.value
    })
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>

      <form onSubmit={(evt) => {
        evt.preventDefault();
        setCategorias([
          ...categorias,
          values
        ])
        setValues(defaultValues)
      }}>

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={onChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={onChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={onChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((obj, idx) => (<li key={idx}>{obj.nome}</li>))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria
