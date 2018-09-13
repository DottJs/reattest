import React, {Component} from 'react';

class IterationSample extends Component{
    render(){

        const names = ['눈', '비', '바람', '맑음'];

        const nameList = names.map( (name,index) => (<li key={index}>{name}</li>) );

        return (
            <div>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default IterationSample;