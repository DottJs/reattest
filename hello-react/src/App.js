import React, { Component } from 'react';
// import MyComponent from './MyComponent';
import EventPart from './eventPart'; //첫글자는 대문자로 시작해야한다.

class App extends Component {

  render() {
    return (
      // 첫글자는 대문자로 시작해야 된다.
      <div>
          <EventPart />
      </div>
    );
  }
}

export default App;
