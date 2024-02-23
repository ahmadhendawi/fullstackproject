import logo from './logo.svg';
import './App.css';
import React from 'react';

var result=res.json
class App extends React.Component
{
  constructor (props){
    super(props) 
    this.state={
      data:"",
      price:""}
  }
data(){
  fetch('http://localhost:4000/getData')
  .then(response => response.json())
  .then(json => this.setState({data:json}))
  .catch(error => console.error(error));
}
products(){
  fetch('http://localhost:4000/getPrice')
  .then(response => response.json())
  .then(json => this.setState({price:json}))
  .catch(error => console.error(error));
}
fetchData=()=>
{
   this.data();
   this.products();
}
render()
{
   return (
    <div>
      <button onClick={this.fetchData}>fetch </button>
      <p>{this.state.data.name}</p>
      <p>{this.state.data.age}</p>
      <p>{this.state.data.major}</p>

      <div><p>{this.state.price.price1}</p>
      <p>{this.state.price.price2}</p>
      <p>{this.state.price.price3}</p>
    <p>{this.state.price.price4}</p></div>
    </div>
   )
}}
export default App;

