import React from 'react';
import axios from 'axios';
import { Card, Icon } from "semantic-ui-react";





class PlayersList extends React.Component {

    constructor(){
        super();
        this.state = {
          players: []
        }
      }
    
      componentDidMount(){
        
        axios 
        .get(`http://localhost:5000/api/players`)
        .then(res =>this.setState({players: res.data}))
       
        
        .catch(err => console.error("Something is wrong with user data. Take a look here:", err));
    
      }
    
    componentDidUpdate(){
      
    }
    
    
      render() {
        // console.log('This.state.user:', this.state.user)
        // console.log('This.state.players:', this.state.players)
        // let players=this.state
        console.log('PlayersList.js -> %cthis.state:', 'color: red', this.state)
        
        // let players = this.state.searches.sort(compareNumbers)
        return (
            <div>
            {Array.from(this.state.players).map(player => (
                <div key={player.id} player={player}>
        <Card.Group className='cardGroup'>
                 <Card className= 'player-card'>
                    <Card.Content>
                      <Card.Header>{player.name}</Card.Header>
                      <Card.Meta>{player.country}</Card.Meta>
                      </Card.Content>
                    <Card.Content extra>
							<Icon name="user">
							{player.searches}
                            </Icon> 
					
					</Card.Content>
                  </Card>
                </Card.Group>
              </div>
              ))}
        </div>
        )}
    }

export default PlayersList
					

