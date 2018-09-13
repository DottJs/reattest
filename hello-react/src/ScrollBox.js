import React, {Component} from 'react';

class Scrollbox extends Component{

    scollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        // const scrollHeight = this.box.scrollHeight;
        // const clientHeight = this.box.clientHeight;

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render(){

        const style ={
            border : '1px, solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };
        const innerStyle = {
            width:'100%',
            height:'650px',
            background:'linear-gradient(white, black)'
        }

        return(
            <div style={style} ref={(ref)=>{this.box = ref}}>
                <div style={innerStyle}>Hi</div>
            </div>
        );
    }
}

export default Scrollbox;