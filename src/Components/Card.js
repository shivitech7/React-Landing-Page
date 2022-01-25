import React from "react";
import Contract from './Images/contract.png';
import Payment from './Images/paymentCard.jpg';
import Proposal from './Images/proposals.png';
import './Styles/Card.css';

const Card = () => {

    const cardData = [
        {
            'image': Proposal,
            'title': 'Proposals',
            'description': 'Simplify the process to create proposals.'
        },
        {
            'image': Proposal,
            'title': 'Quotes',
            'description': 'Simplify the process to create proposals.'
        },
        {
            'image': Contract,
            'title': 'Contracts',
            'description': 'Simplify the process to create proposals.'
        },
        {
            'image': Payment,
            'title': 'Payments',
            'description': 'Simplify the process to create proposals.'
        }
    ]

    return (
        <div className="card_container">
            {
                cardData.map((element, i) => {
                    const title = element.title;
                    return (
                        <div style={{ backgroundColor: title === 'Proposals' ? 'rgb(110, 207, 240)' : title === 'Quotes' ? 'blue' : title === 'Contracts' ? 'lightgreen' : 'yellow' }} className="card" key={i}>
                            <img style={{marginTop:'10px', marginBottom:'10px'}} width='60px' height="60px" src={element.image} />
                            <h4>{element.title}</h4>
                            <p>{element.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;