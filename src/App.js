import logo from './pizza.png';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [ image, setImage ] = useState(logo);
  const [ dna, setDna ] = useState('');
  const [ probability, setProbability ] = useState('');
  const [ description, setDescription ] = useState('');

  useEffect(() => {
    // initial fetch - replace with finished fetchData
    fetchData()
  }, [])

  const fetchData = async () => {
    // const data = await {} 
    // setData(data);
    setTimeout(() => setData(), 2000);
  }

  const setData = (data) => {
    setImage(logo)
    setDna('name')
    setProbability('45%')
    setDescription('description')
  }

  const clearData = () => {
    setImage(undefined)
    setDna('loading...')
    setProbability('loading...')
    setDescription('loading...')
  }

  const vote = async (voteBool) => {
    console.log("VOTE", voteBool)
    clearData()
    fetchData()
  }

  return (
    <div className="App" style={{display:'flex', justifyContent: 'center', width:'100vw'}}>
      <header className="Pizza-QA">
        <div style={{maxWidth:'300px', minHeight:'300px', marginTop: '50px'}}>

          <div style={{textAlign:'left', fontStyle: 'bold'}}>
            <p style={{fontSize: '40px'}} >Pizza QA</p>
            <p>Hi. Please make a pizza!  </p>
            <p>PizzaDNA: {dna}</p>
            <p>Pizza Probability: {probability}</p>
            <p>Description: {description}</p>
          </div>

          <div style={{maxWidth:'300px', minHeight:'300px', marginTop: '20px', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}} className="image" >
            {!!image ? <img src={image} alt="" className="App-logo" /> : <p>Loading...  </p>}
          </div>

          <div style={{display:'flex', justifyContent: 'center', marginTop:'20px'}}>
            <button onClick={() => vote(true)} class="button " style={{width:'150px', height: '70px'}}>Up</button>
            <button onClick={() => vote(false)} class="button " style={{width:'150px', height: '70px'}}>Down</button>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
