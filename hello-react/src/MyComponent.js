import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    //자신의 기본값을 설정하였다. // defaultProps
    //직접 값을 주는 것은 부모 Component 이다.
    static defaultProps = { 
        name : '기본이름',
        age: 0
    }

    static propTypes = {
        name : PropTypes.string,
        age : PropTypes.number.isRequired 
        //number / array / bool / func / object / string / symbol / node / element / instanceOf(MYClass) / oneOf(['male', 'Female']) / oneOfType() / arrayOf() / objectOf() / shape() / any
        //isRequired 필수요소 값으로 설정
    }
    
    //변화하는 값을 사용하기 위해서는 state 를 사용한다.
    //값을 업데이트 하기 위해서는 setState({사용할 state : 조건}})를 사용해야한다.
    //state를 단순하게 사용하는 방법
    state = {
        number : 0,
    }
    
    render(){
        return (
            <div>
                <p>저는 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age} 살입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={ () => {
                    this.setState({
                        number : this.state.number + 1
                    })
                }
                }> 더하기 </button>
            </div>
        )
    }
}

export default MyComponent; 