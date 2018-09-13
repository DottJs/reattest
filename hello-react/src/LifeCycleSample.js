import React, {Component} from 'react'

class LifeCycleSample extends Component{

    state = {
        number : 0,
        color : null
    }

    myRef = null //Ref 를 설정할 부분

    constructor(props){
        super(props);
        console.log('constructor props 생성');
    }

    static getDerivedStateFromProps(nextProps, prevState){ //마운트 //업데이트
        if(nextProps !== prevState){
            return {color: nextProps.color};
        }
        else{
            return null;
        }
    }

    componentDidMount(){ //마운트 / 랜더링 이후
        console.log('componentDidMount 실행 마운트/업데이트')
    };

    shouldComponentUpdate(nextProps, nextState){ //업데이트
        console.log('shouldComponentUpdate / Props 값이 변하면 업데이트/ 나머지가 4이면 이후 작업을 실행하지 않는다.', nextProps, nextState);
        return nextState.number % 10 !== 4;
        // 마지막자리가 4이면 false를 반환하며, 업데이트를 시키지 않는다. 
    }

    componentWillUnmount(){ //언마운트
        console.log('componentWillUnmount 제거하면')
    }

    handleClick = () =>{
        this.setState({ number : this.state.number + 1});
    }

    getSnapshotBeforeUpdate(prevProps, prevState){ //업데이트 DOM 반영 직전
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        else{
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState)
        if(snapshot){
            console.log('업데이트 되기 직전 색상 getSnapshotBeforeUpdate의 snapshot을 받음', snapshot);
        }
    }

   
    render(){
        console.log('render UI를 출력함')
        const style = {color : this.props.color};
        return(
            <div>
                <h1 style={style} ref={(ref) =>{this.myRef = ref}}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleSample;