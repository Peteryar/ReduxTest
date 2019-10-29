import React from 'react';

class DisplayMessage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleInput(event){
        
      this.props.getInputValue(event.target.value);
    }
    submitMessage(){
     this.props.getInputValue('');
     this.props.sendMessage(this.props.input);
    }
    render(){
        return <div>
               <input onChange={this.handleInput.bind(this)} value={this.props.input}/>
               <button onClick={this.submitMessage.bind(this)}>Submit</button>
               <ul>{this.props.message.map((mes,index)=>(
                   <li key={index}>{mes}</li>
               ))}</ul>
        </div>
    }
}
export default DisplayMessage;