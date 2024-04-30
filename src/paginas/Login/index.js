import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            exibir_mensagem: ""
        };

        this.acessar = this.acessar.bind(this);
    }

    async acessar(){
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() =>{
            window.location.href = "./principal";
        })
        .catch(()=>{
            this.setState({
                exibir_mensagem: "E-mail ou Senha estão errados!"
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Página de Login</h1>
                <input type="text" placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value })} />
                <br />
                <input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} />
                <br />
                <div style={{ color: "red"}}>{this.state.exibir_mensagem}</div>
                <br />
                <button onClick={this.acessar}>Acessar</button>
                <br/>
                <br/>
                <Link to="/cadastro">Ainda não tem cadastro?</Link>
            </div>
        );
    }
}

export default Login;