import React, { Fragment } from 'react';
import Planet from './Planet';

const showMessage = () =>{
    alert("Meu primeiro Evento em React")
}


const Planets =() =>{
    return (
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={showMessage}>Clique Aqui</button>
            <Planet name="Mercúrio"
                    description = "Saiba mais sobre Mercúrio."
                    link_url = "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg"
            />
        </Fragment>
    )
}

export default Planets;