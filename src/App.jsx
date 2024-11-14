import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarChart from './components/BarChart';
import CandleStick from './components/CandleStick';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Welcome to candles</h1>
       <BarChart />
       <CandleStick />
    </>
  )
}

export default App
