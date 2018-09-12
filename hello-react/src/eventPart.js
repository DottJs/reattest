import React, {Component} from 'react';

class EventPart extends Component{
    state = {
        message : ''
    }

    handleChang = (e) => {
        this.setState({
            message : e.target.value
        });
    }

    handleOnClick = () =>{
        alert(this.state.message);
        this.setState({message : ''});
    }

    render(){
        return(
            <div>
                <input type="text" name="message" value={this.state.message} placeholder="값" onChange={this.handleChang}>
                </input>
                <button onClick={this.handleOnClick}>
                버튼</button>
            </div>
        )
    }
}

export default EventPart;