import React , { Component } from 'react'; 
import './App.css';
import Profil from './Profil.js';
import ChangeProfil from './ChangeProfil.js';
import Commentaire from './Commentaire.js';
//import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


class App extends Component {
    
    constructor(props){
      super(props); 
      this.state={
        profil: [
          {
            id: 0,
            nom: 'Albert', 
            prenom: 'Frank', 
            date: '3 juin 1960',
            background: "black",
            photo:'https://key0.cc/images/preview/111894_dd4a85595fa29cdf7e5e944118f9faa2.png',
            Commentaire: "Bonsoir les enfants !",
            likes: 0
          },
          {
            id: 1, 
            nom: 'Hart', 
            prenom: 'Arnaud', 
            date: '14 juillet 1999',
            background: "black",
            photo: 'https://cdn.pixabay.com/photo/2012/04/18/15/59/man-37411_960_720.png',
            Commentaire: "Les affaires sont les affaires",
            likes: 0
          },
          {
            id: 2,
            nom: 'Gaston', 
            prenom: "Etienne", 
            date: '13 Janvier 1975',
            background: "black",
            photo: 'https://img1.freepng.fr/20180812/vsz/kisspng-businessperson-metal-roof-single-person-image-about-us-hph-contadores-5b70e9207497e9.8813696115341263684776.jpg', 
            Commentaire: "Championnnnn du monde !!!!!!",
            likes: 0
          }
        ], 
        select: 0
      }; 
      this.handleChange= this.handleChange.bind(this); 
    }
    
    handleChange(index) 
    {
      this.setState({select: index});
    }
  
    handleLikes(index){
      const compteur = this.state.profil.slice();
      compteur[index].likes++;
      this.setState({profil: compteur})
    }
    
    render(){
      return (
        <div>
          <nav className="navbar navbar-extend-sm navbar-dark bg-dark py-0 justify-content-end" id="navig">
          {this.state.profil.map((profil)=>
            <ChangeProfil
              key={profil.id}
              profil={profil}
              parameter={this.handleChange}
            />
            )}
          </nav>
          <div className="container-fluid" id="profil">
            <div className="row">
              <Profil 
                infos = {this.state.profil[this.state.select]}
              />
            </div>
            <div className="row">
              <Commentaire
                Commentaire={this.state.profil[this.state.select]}
                like={this.state.profil[this.state.select].likes}
                clic={() => this.handleLikes(this.state.select)}
              />          
            </div>
          </div>
        </div>  
      );
    }
  }
      
      export default App;