import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductGrid from '@/components/productgrid/productgrid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Product Page</h1>
        <ProductGrid />
      </div>
    </>
  )
}

export default App
