import React from 'react';
import axios from 'axios';




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
      console.log('THIS update State:', this.state)
    }
    
    
      render() {
        // console.log('This.state.user:', this.state.user)
        // console.log('This.state.followers:', this.state.followers)
        
        return (
          <div className="App">
        <h1>Most Searched World Class Payers</h1>  
        {/* <Form className='change-user'>
      <Form.Field>
        <label>Change User</label>
        <input />
      </Form.Field>
      <button className='submit-btn'>Submit</button>
    </Form>
            <UserCard user={this.state.user} followers={this.state.followers} /> */}
       </div>
      )}; 
        }


export default PlayersList

