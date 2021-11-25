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
            photo:'https://img1.freepng.fr/20180602/icj/kisspng-aged-care-old-age-nursing-home-care-health-care-ho-senior-citizens-5b12b1d63465d1.9049591415279518302146.jpg',
            Commentaire: "Bonsoir les enfants c'est Franky !",
            likes: 0
          },
          {
            id: 1, 
            nom: 'Hart', 
            prenom: 'Arnaud', 
            date: '14 juillet 1999',
            background: "black",
            photo: 'https://www.loyer-avocat.com/photos/422x340/homme-d-affaire.png',
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
            Commentaire: "On est Championnnnnssssss du monde !!!!!!",
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
          <nav className="navbar navbar-extend-sm py-0 justify-content-end" id="nav"> Adrien Cherqui TD04 ING4
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