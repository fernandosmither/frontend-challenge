import { RemainingItem } from './components/RemainingItem';
import { Products } from './components/RemainingItem'
import { useEffect, useState } from 'react'
import PillsHero from './components/PillsHero';
import Navbar from './components/Navbar';
import axios from "axios"

const productsAPI = "https://private-5aff7-inventurestest.apiary-mock.com/products";

function App() {
  const [products, setProducts] = useState<Products>({ payload: [] });

  useEffect(() => {
    axios.get<Products>(productsAPI).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
    <Navbar />
    <PillsHero />
    <main>
      <h2 className='text-2xl py-2 px-4 font-medium bg-inventuresGray'>Te queda</h2>
      {products.payload.map((product) => (
        <RemainingItem key={product.id} {...product} />))}
    </main>
    </>
  )
}

export default App
