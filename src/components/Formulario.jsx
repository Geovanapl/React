import {useState} from 'react'

export default function Formulario(){

  const [Nome,setNome]=useState('')
  const [email,setemail]=useState('')
  const [idade,setIdade]=useState('')

  const[user, setUser]=useState('')

  function Registrar(event){
    alert('usuário registrado!')
    event.preventDefault()

    setUser({Nome:Nome,idade:idade,email:email})
  }
  
  return(
    <div>
      <form onSubmit={Registrar}>
        <h1>Cadastrando usuário</h1>
        <label>Nome:</label><br/>
        <input placeholder="Digite seu nome" value={Nome} onChange={(event)=>setNome(event.target.value)}/><br/>

        <label>email:</label><br/>
        <input placeholder="Digite seu Email" value={email} onChange={(event)=>setemail(event.target.value)}/><br/>

        <label>Idade:</label><br/>
        <input placeholder="Digite seu Idade" value={idade} onChange={(event)=>setIdade(event.target.value)}/><br/>

        <button type='submit'>Registrar</button>
      </form><br/>
      <div>
        <span>Bem vindo(a):{user.Nome}</span><br/>
        <span>Idade:{user.idade}</span><br/>
        <span>Email:{user.email}</span><br/>
      </div>

    </div>
  )
}