import React,{ Component } from 'react';


class eventPart extends Component{
    state = {
        message : ''
    }
    render(){
        return(
            <div>
                <h1>
                    First Events
                </h1>
                <input 
                type="text"
                name="message"
                placeholder="값을 입력해 주세요"
                value={this.state.message}
                onChange={
                    (e) => { this.setState({
                        message : e.target.value
                    })
                    }
                }
                />
                <button
                onClick={
                    (e) =>{
                        alert(this.state.message);
                        this.setState({
                            message : ''
                        });
                    }
                }
                >입력한 State를 확인</button>
                
            </div>
        )
    }
}

export default eventPart;