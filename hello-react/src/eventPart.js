import React, {Component} from 'react';

class EventPart extends Component{
    state = {
        message:'',
        name : ''
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick = () =>{
        alert(`${this.state.username} ${this.state.message}`);
        this.setState({username:'', message:''});
    }
    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render(){
        return(
        <div>
            <input type="text" name="username" placeholder="유져이름" value={this.state.username} onChange={this.handleChange}/>
            <input type="text" name="message" placeholder="메세지" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>

        </div>)
    }
}

export default EventPart;