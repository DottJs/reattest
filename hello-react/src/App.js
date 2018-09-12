import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {

  render() {
    return (
      // 생성한 컴포넌트에서 prop으로 잡은 것 = {표시할 내용}}
      <MyComponent name='Kim' age={20}/> //{'Kim'} JS코드안의 문자열이란 의미로 
    );
  }
}

export default App;
