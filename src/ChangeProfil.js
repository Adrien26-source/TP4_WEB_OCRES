import React from "react";

function ChangeProfil(props) {
    const{profil, parameter} = props;

    return (
        <div className="px-1">
            <button className="btn btn-warning" onClick={() => parameter(profil.id)}> {profil.nom} {profil.prenom}</button>
        </div>
    );
}

export default ChangeProfil;