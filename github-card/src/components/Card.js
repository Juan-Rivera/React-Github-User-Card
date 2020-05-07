import React, { Component } from 'react';
import axios from 'axios';

const urlFollowers = 'https://api.github.com/users/Juan-Rivera/followers';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = { 
            followerD: []
        }
    }

    componentDidMount(){
        axios
            .get(urlFollowers)
            .then(res => {
                this.setState({
                    followerD: res.data[0].login
                })
                console.log(this.state.followerD)
            })
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
                        <a href={this.props.card.html_url}>Profile (click here)</a>
                        <p>Followers: {this.state.followerD}</p>
                    </div>
            </div>
        )
    }
}
export default Card