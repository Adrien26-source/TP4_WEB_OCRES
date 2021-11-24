import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ProfilDetails from './ProfilDetails'
import axios from 'axios'

export default class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProfil: 1
        }
    }

    ///appel de fonction : le composant se charge
    componentDidMount() {
        this.getProfilsData();
    }

    /// pour avoir les données de profils de json
    getProfilsData() {
        axios.get('asset/samplejson/profilslist.json').then(response => {
            this.setState({profilList: response})
        });
    }

    render() {
        ///si pas de données
        if (!this.state.profilList)
            return (<p>Loading data</p>);

        return (

            <div className="container">
                {
               }
                <div className="text-right">
                    {this.state.profilList.data.map(profil =>
                        <Button variant="outline-dark" onClick={() => this.setState({selectedProfil: profil.id})}>
                            Profil {profil.id} </Button>)}
                </div>
                {
            // Details du profil
               }
                    <ProfilDetails className="Profil-content" val={this.state.selectedProfil}/>

            </div>
        );
    }
}