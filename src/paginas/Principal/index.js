import React, { Component } from 'react';
import firebase from '../../Firebase';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            data_nasc: ""
        };
    }

    async componentDidMount(){

        await firebase.auth().onAuthStateChanged(async (usuario) => {

            if(usuario){
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {

                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        data_nasc: retorno.data().data_nasc
                    })
                })
            } else{
                window.location.href = "./";
            }
        })
    }

    render() {
        return (
            <div>
                Nome: {this.state.nome}
                <br/>
                Sobrenome: {this.state.sobrenome}
                <br/>
                Data de Nascimento: {this.state.data_nasc}
            </div>
        );
    }
}

export default Principal;