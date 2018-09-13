import React, { Component } from 'react';
// import MyComponent from './MyComponent';
// import EventPart from './eventPart'; //첫글자는 대문자로 시작해야한다.
// import ValidationSample from './validationSample'; //첫글자는 대문자로 시작해야한다.
// import Scrollbox from './ScrollBox'; //첫글자는 대문자로 시작해야한다.
// import IterationSample from './IterationSample'; //첫글자는 대문자로 시작해야한다.
import LifeCycleSample from './LifeCycleSample'; //첫글자는 대문자로 시작해야한다.

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  state = {
    color : '#000000'
  }

  handleClick = () =>{
    this.setState({color : getRandomColor()});
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
          <LifeCycleSample color={this.state.color}/>
          {/* color의 값은 App Class 의 state를 사용함 / 나타내는 코드는 LifeCycle에서 사용함*/}
      </div>
    );
  }
}

export default App;
