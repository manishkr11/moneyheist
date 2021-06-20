import React from 'react'
import tokio from '../pictures/icons/tokio.jpg'
import '../style/CardStyle.css'

function Card({character}) {
    return (
        <div className="container">
            <div className="card" style={{width:"200px"}}>
                <img className="card-image" src={tokio} alt="money heist" />
                    <div className="card-body">
                        <h4 className="card-title">{character.name}</h4>
                    </div>
            </div>
        </div>
    )
}

export default Card
