
import React, { Component } from 'react';
import './App.css';

class App extends Component {
//prop=properties// 
//constructor is used to bind things//
//super props is a must when we use constructor props//
//this.state -> helps to modify the code within the component and we can call it whenever needed inside the component//
//inform is empty array//
  constructor(props){
    super(props);       //Props are Read-Only//
    this.state={
      title: 'React CRUD Application',
      act: 0,
      index: '',
      inform: []
    }
  } 
  // refs, we can update the application UI when an event occurs (user clicks on something).
//component is created//
  // componentDidMount(){
  //   this.refs.name.focus();
  // }
  fSubmit = (e) =>{
    e.preventDefault();//prevents data from showing //
    console.log('try');

    let inform= this.state.inform;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){   //create
      let data = {
        name, address
      }
      inform.push(data);
    }
    
    else{                      //update
      let index = this.state.index;
      inform[index].name = name;
      inform[index].address = address;
    }    

    this.setState({ 
      inform: inform,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let inform = this.state.inform;
    inform.splice(i,1);
    this.setState({
      inform: inform
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.inform[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

   
  }  

  render() {
    let inform = this.state.inform;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          
          {inform.map((data, i) =>//use arrow//
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.address}
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}
//hello = () => {
  // return "Hello World!";}
export default App;