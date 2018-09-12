import React, {Component} from 'react';

class EventPart extends Component{
    state = {
        message : 0
    }
    
    render(){
        return(
            <div>
                <input type="text" 
                        name="message"
                        placeholder="값을 입력해주세요"
                        value={this.state.message}
                        onChange={(e) => { this.setState({message : e.target.value}) }}>
                </input>
                <button onClick={()=>{
                    alert(this.state.message); 
                    this.setState({message : ''})
                }}>State버튼</button>
            </div>
        )
    }
}

export default EventPart;