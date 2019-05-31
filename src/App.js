import React, {Component} from 'react';
import Dashboard from'./Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        inventory: [{
          name:'jack',
          price: 12,
          imgUrl: 'https://tenor.com/view/hey-spider-man-spider-verse-miles-morales-gif-13861403'
        }]
      }
  }

  render(){
    let {name, price, imgUrl} = this.state
    return (
      <div >
        <Header/>
        <Dashboard
          name ={name}
          price= {price}
          imgUrl= {imgUrl}
        />
        <Form/>
      </div>
    );
  }
}

export default App;
