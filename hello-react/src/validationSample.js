import React, {Component} from 'react';
import './validationSample.css'

class ValidationSample extends Component{
    state ={
        password :'',
        clicked : false,
        validate : false
    }

    handleChange = (e) =>{
        this.setState({password : e.target.value})
    }
    handelButton = () =>{
        this.setState({clicked : true, validate : this.state.password === '0000'});
        this.input.focus();
    }
    render(){
        return(
        <div>
            <input type="password" name="password" ref={(ref) => this.input = ref} value={this.state.password} onChange={this.handleChange} className={this.state.clicked? (this.state.validate ? 'sucess' : 'false') : ''}/>
            <button  onClick={this.handelButton}>버튼</button>
        </div>
        )
    }
}

export default ValidationSample;