import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarChart from './components/BarChart';
import CandleStickOld from './components/CandleStickOld';
import CandleStick from './components/CandleStick';
import {options, series} from './utils/info';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Welcome to candles</h1>
       <CandleStick chartOptions={options} chartSeries={series} width={500}/>
     
    </>
  )
}

export default App
