import React, {Component} from 'react';

class IterationSample extends Component{
    state = {
        names : ['눈', '비', '바람', '맑음'],
        name : ''
    }

    handleChange = (e) =>{
        this.setState({name : e.target.value});
    }

    handleInsert = () =>{
        this.setState({ 
            names : this.state.names.concat(this.state.name), //concat을 쓴이유 : push는 기존배열이 변형되므로 기존배열과 새로운 배열을 합친 concat을 사용
            name : ''
        });
    }

    handleRemove = (index) =>{
        const {names} = this.state; //const names = this.state.names 와 같은뜻
        this.setState({
            names : [...names.slice(0,index), ...names.slice(index+1, names.length)] // 배열에서의 ...(전개연산자)가 concat 보다 간결하고 쉽다.
        });
    }

    render(){
        const nameList = this.state.names.map( (names, index) => (<li key={index} onDoubleClick={()=>{this.handleRemove(index)}}>{names}</li>) );
                                                                                //이벤트 자체를 포함시켜 함수를 생성함 : 랜더링 이후 사용할 수 있으며 undefined의 오류 방지

        return (
            <div>
                <input onChange={this.handleChange} value={this.state.name} />
                <button onClick={this.handleInsert}>추가</button>

                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default IterationSample;