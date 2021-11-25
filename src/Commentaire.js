import React from "react";

class Commentaire extends React.Component {
    render() {
        return(
            <div className="card card-body mt-3 mb-3" style={{background: "#2E8B57"}}>
                <ul className="list-group">
                    <h5 align="center" className="card-title" style={{color: "white"}}>Derniere publication</h5>
                    <li className="list-group-item" style={{background: "#90EE90"}}>{this.props.Commentaire.Commentaire}</li>
                    <a className="list-group-item" style={{background: "#90EE90"}}><button className="btn btn-info" onClick={this.props.clic}> C'est super ! </button></a>
                    <li className="list-group-item" style={{background: "#90EE90"}}>J'aime : {this.props.like}</li>
                </ul>
            </div>
        );
    }
}

export default Commentaire;