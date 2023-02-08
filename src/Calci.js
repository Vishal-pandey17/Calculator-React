import React from 'react';

class Calci extends React.Component{
    constructor(){
        super();
        this.state = {
            display: 0
        }
    }

    add = () =>{
       this.setState((prevState) => {
           return {
            display: prevState.display+2
           }
       }); 
    }
    square = () =>{
        this.setState((prevState) =>{
           return {
              display: prevState.display*prevState.display
           }
        });
    }
    double = () =>{
        this.setState((prevState) =>{
           return {
              display: prevState.display*2
           }
        });
    }

    divide = () =>{
        this.setState((prevState) =>{
           return {
              display: prevState.display/2
           }
        });
    }
    subtract = () =>{
        this.setState((prevState) =>{
           return {
              display: prevState.display-2
           }
        });
    }
    render(){
        const {display} = this.state
        return (
            <div>
               <div className='display' style={{textAlign: 'center', fontWeight: 700, fontSize: 50}}>
                  {display}
               </div>
               <div className='button' style={{textAlign: 'center'}}>
               <button style={{margin: 10}} onClick={this.add}>Add 2!</button>
               <button style={{margin: 10}} onClick={this.square}>Square 2!</button>
               <button style={{margin: 10}} onClick={this.double}>Double 2!</button>
               <button style={{margin: 10}} onClick={this.divide}>Divide 2!</button>
               <button style={{margin: 10}} onClick={this.subtract}>Subtract 2!</button>
               </div>
            </div>
        );
    }
}


export default Calci;
