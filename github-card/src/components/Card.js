import React, { Component } from 'react';
import axios from 'axios';

const urlFollowers = 'https://api.github.com/users/Juan-Rivera/followers';

class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='cardC'>
                <div className='avatar'>
                        <img src={this.props.card.avatar_url} alt={this.props.card.name} />
                    </div>
                <div className='info'>
                        <h3>{this.props.card.name}</h3>
                        <p>Username: {this.props.card.login}</p>
                        <p>Location: {this.props.card.location}</p>
                        <a href={this.props.card.html_url}>Profile</a>
                        <p>Followers: {this.props.card.followers}</p>
                    </div>
            </div>
        )
    }
}
export default Card