import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import First1 from './component/First1'
import Second from './component/Second'
import Third from './component/Third'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import First1 from './component/First1'
import Tab1 from './component/Tab1'
import FakeStoreCard from './component/FakeStoreCard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     <Navbar/>
     <Routes>
      {/* props used to pass values  */}
      <Route path='/' element={<First1 data={{name:"Richu",age:22,place:"Mavelikara"}}/> }/>
      <Route path='/s' element={<Second name="Mern"/>} />
      <Route path='/t' element={<Third age="22"/>} />
      <Route path='/r' element={<Tab1/>} />
      <Route path='/u' element={<FakeStoreCard/>} />
     </Routes>
    </>
  )
}

export default App
