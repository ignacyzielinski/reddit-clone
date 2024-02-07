import { useState } from 'react'
import Wrapper from './components/Wrapper'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-200'>
        <Wrapper/>
      </div>
    </>
  )
}

export default App
