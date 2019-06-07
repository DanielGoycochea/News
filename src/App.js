import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'

class App extends Component {
  state={
      noticias: []
  }
   componentDidMount(){
   this.consultarNoticias()
  }

  consultarNoticias = async (categoria = 'general')=>{
    const url= `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${process.env.REACT_APP_API_KEY}`
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })

  }



  render() {
    return (
      <Fragment>
        <Header
        titulo= "Api Noticias con React"
        />
        <div className='container white contenedor-noticias'>
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias
          noticias={this.state.noticias}
          
          />
        </div>


      </Fragment>
      
    );
  }
}

export default App;