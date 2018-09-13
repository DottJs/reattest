import React, { Component } from 'react';
// import MyComponent from './MyComponent';
// import EventPart from './eventPart'; //첫글자는 대문자로 시작해야한다.
// import ValidationSample from './validationSample'; //첫글자는 대문자로 시작해야한다.
// import Scrollbox from './ScrollBox'; //첫글자는 대문자로 시작해야한다.
import IterationSample from './IterationSample'; //첫글자는 대문자로 시작해야한다.

class App extends Component {

  render() {
    return (
      // 첫글자는 대문자로 시작해야 된다.
      <div>
          {/* <ValidationSample /> */}
          {/* <Scrollbox ref={(ref) =>{this.scrollBox = ref }} />
          <button onClick={()=>{ this.scrollBox.scollToBottom() }}>밑으로</button> */}
          <IterationSample />
      </div>
    );
  }
}

export default App;
