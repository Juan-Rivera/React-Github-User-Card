import React from 'react';

const Card = props => {
    return (
        <div className='cardC'>
                <div className='avatar'>
                        <img src={props.card.avatar_url} alt={props.card.name} />
                    </div>
                <div className='info'>
                        <h3>{props.card.name}</h3>
                        <p>Username: {props.card.login}</p>
                        <p>Location: {props.card.location}</p>
                        <a href={props.card.html_url}>Profile</a>
                        <p>Followers: {props.card.followers}</p>
                    </div>
            </div>
    )
}
export default Card