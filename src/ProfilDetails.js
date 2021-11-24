import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


///component enfant de component de profil
export default class ProfilDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    ///chargement du component
    componentDidMount() {
        this.getProfilDetails();
        this.setState({backgroundColor: "light"});
        this.setState({textColor: "dark"});
        this.setState({isNight: false});
    }

    ///charger les détails du profil à partir de json
    getProfilDetails(id) {

        axios.get('asset/samplejson/profil' + id + '.json').then(response => {
            this.setState({profilDetails: response});
        });
        this.setState({id: id});
    }

    ///Appel fonction quand le bouton Worth/Not Worth est cliqué
    handleLikeClick(isWorth) {
        let copy = (JSON).parse(JSON.stringify(this.state.profilDetails));
        const jsonfile = require('jsonfile');
        const file = '/asset/profil' + this.state.id + '.json';
        if (isWorth) {
            copy.data.lastPostLike += 1;
            this.setState({profilDetails: copy});

        } else {
            if (this.state.profilDetails.data.lastPostLike > 0) {
                copy.data.lastPostLike -= 1;
                this.setState({profilDetails: copy});
            }
        }
        
    }

    handleUpdateBackgroundClick() {
        if (!this.state.isNight)
            this.setState({backgroundColor: "dark", textColor: "light"});
        else this.setState({backgroundColor: "light", textColor: "dark"});
        this.setState({isNight: !this.state.isNight});
    }

    render() {
        if (!this.state.profilDetails)
            return (<p>Loading Data</p>);
        return (
            <div className="profildetails">
                <Card className="text-justify" text={this.state.textColor} bg={this.state.backgroundColor}
                      style={{width: '18rem', margin: 'auto'}}>
                    <Card.Profil variant="top" src={"Profil/" + this.state.profilDetails.data.ProfilProfil + ".jpg"}
                              style={{width: "100 %", height: "15vw", 'objectFit': "cover"}}
                    />
                    <Card.Header>
                        {this.state.profilDetails.data.surname.toUpperCase()} {this.state.profilDetails.data.name}
                        <Button variant={this.state.textColor} className={"float-right"} size={"sm"}
                                onClick={() => this.handleUpdateBackgroundClick()}>Change</Button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            {this.state.profilDetails.data.role}
                        </Card.Title>
                        <Card.Subtitle>
                            {this.state.profilDetails.data.elo}
                        </Card.Subtitle>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text>
                            {this.state.profilDetails.data.lastPost}
                        </Card.Text>
                        <Button variant={'outline-' + this.state.textColor} className="float-left"
                                onClick={() => this.handleLikeClick(true)}>Worth
                            !</Button>
                        <Button variant={'outline-' + this.state.textColor} className="float-right"
                                onClick={() => this.handleLikeClick(false)}>Not Worth
                            !</Button>
                    </Card.Body>

                    <Card.Footer>
                        <small
                            className="float-right">  {this.state.profilDetails.data.lastPostLike} Worth
                            It</small>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}