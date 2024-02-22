import logo from './logo.svg';
import './App.css';

var result=""

function getData(){
  fetch('https://localhost:3000/getData')
  .then(response => response.json())
  .then(json => result=json)
  .catch(error => console.error(error));
}

function getPrice(){
  fetch('https://localhost:3000/getPrice')
  .then(response => response.json())
  .then(json => setData(json))
  .catch(error => console.error(error));
}

function App() {
  {getData()}
  return (

    <p>{result.name}</p>
  
  );
}

export default App;

