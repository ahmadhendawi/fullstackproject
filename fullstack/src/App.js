import logo from './logo.svg';
import './App.css';

var result=res.json

function getData(){
  fetch('https://localhost:4000/getData')
  .then(response => response.json())
  .then(json => result=json)
  .catch(error => console.error(error));
}

function getPrice(){
  fetch('https://localhost:4000/getPrice')
  .then(response => response.json())
  .then(json => result=json)
  .catch(error => console.error(error));
}

function App() {
  {getData()} {getPrice()}
  return (

    <p>{result.name.age.major}</p>
  
  );
}

export default App;

