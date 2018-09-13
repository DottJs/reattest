import React, {Component} from 'react';

class EventPart extends Component{
    state = {
        username : '',
        message : ''
    }

    handleChang = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleOnClick = () =>{
        alert(this.state.message);
        this.setState({message : ''});
    }

    render(){
        return(
            <div>
                <input type="text" name="message" value={this.state.message} placeholder="값message" onChange={this.handleChang}>
                </input>
                <input type="text" name="username" value={this.state.message} placeholder="값username" onChange={this.handleChang}>
                </input>
                <button onClick={this.handleOnClick}>
                버튼</button>
            </div>
        )
    }
}

export default EventPart;