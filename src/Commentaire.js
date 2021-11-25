import React from "react";


class Commentaire extends React.Component {
    render() {
        return(
            <div className="card card-body mt-3 mb-3" style={{background: "red"}}>
                <ul className="list-group">
                    <h5 align="center" className="card-title" style={{color: "white"}}>Dernier poste</h5>
                    <li className="list-group-item" style={{background: "yellow"}}>{this.props.Commentaire.Commentaire}</li>
                    <a className="list-group-item" style={{background: "blue"}}><button className="btn btn-success" onClick={this.props.clic}> 👍 C'est super ! </button></a>
                    <li className="list-group-item" style={{background: "white"}}>Nombre de 👍 C'est super ! : {this.props.like}</li>
                </ul>
            </div>
        );
    }
}

export default Commentaire;