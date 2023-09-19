import React, {Component} from "react"
import {Link} from "react-router-dom" 
import firebase from '../../Firebase';

class Cadastro extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            dtnasc: ""
        }

        this.gravar = this.gravar.bind(this);

    }

    async gravar (){

        var cadastroRealizadoComSUcesso = 0;

       firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
       .then (async(retorno) => {
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dtnasc: this.state.dtnasc
            })

            alert ("Usuário cadastrado com sucesso")
            cadastroRealizadoComSUcesso = 1

            if (cadastroRealizadoComSUcesso === 1){
                window.location.href = '/Interna'
                cadastroRealizadoComSUcesso = 0
            }
       })
       .catch((error) => {
        if(error.code === 'auth/weak-password'){
            alert("A senha deve ter no mínimo 6 caracteres!");
        }
        if(error.code === 'auth/invalid-email'){
            alert("O e-mail digitado é inválido!");
        }
        if(error.code === 'auth/email-already-in-use'){
            alert("O e-mail digitado já está cadastrado!");
        }
    });
    }

    render(){
        return (
        
            <div className="container">
                <header className="header">
                    <h1>Cadastro</h1>
                    <span>Por favor digite suas informações de cadastro</span>
                </header>

                <div className="form">
                    <div className="inputContainer">
                        <input 
                        type='email' 
                        placeholder='E-mail' 
                        onChange={(e) => this.setState({email: e.target.value})} />
                    </div>

                    <div className="inputContainer">
                        <input 
                        type='password' 
                        placeholder='Senha' 
                        onChange={(e) => this.setState({senha: e.target.value})} />
                    </div>

                    <div className="inputContainer">
                        <input 
                        type='text' 
                        placeholder='Nome' 
                        onChange={(e) => this.setState({nome: e.target.value})} />
                    </div>

                    <div className="inputContainer">
                        <input 
                        type='text' 
                        placeholder='Sobrenome' 
                        onChange={(e) => this.setState({sobrenome: e.target.value})} />
                    </div>

                    <div className="inputContainer">
                        <input 
                        type='date' 
                        placeholder='Data de Nascimento' 
                        onChange={(e) => this.setState({dtnasc: e.target.value})} />
                    </div>
                    
                    <button onClick={this.gravar} className="button">Cadastrar</button>

                    <div className="footer">
                        <p>Você já tem uma conta?</p>
                        <Link to="/Login"> Acesse sua conta aqui</Link>
                    </div>
                </div>
                
                <br/><br/><br/>
                <footer>Somativa 02 - Tecnologia Para Desenvolvimento Web - Victor Hugo Rabello Teixeira</footer>
            </div>
        )
    }

}

export default Cadastro