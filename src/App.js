import React, { Component } from "react";
import ListaDeNotas from "./Componentes/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./Componentes/FormularioCadastro/FormularioCadastro";
import ListaCategorias from "./Componentes/ListaCategorias";
import "./Assets/App.css"
import "./Assets/index.css"
import ArrayDeNotas from "./dados/notas";
import Categorias from "./dados/Categorias";

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }




  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>

      </section>
    )
  }

}
export default App;