import {useState, useEffect} from 'react';
import './App.css';
import Cartproduct from './cart/Cartproduct';
import Productcard from './Product/Productcard';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const limit = 10;
    const page = 1;
    let url = "https://jirabo.com"
    const newUrl = `${url}/api/product?limit=${limit}&page=${page}`;
    fetch(newUrl).then(res=> res.json()).then(data=> setProducts(data.data)).catch(err=>alert(err));
  }, [])
  return (
    <div className="App">
       <Cartproduct/>
      <div className='allproduct'>
        {products.length > 0 ? products.map((product) => (
          <Productcard key={product._id} id={product._id} title={product.name} price={product.price.regular} />
        )) : null }
      </div>   
    </div>
  );
}

export default App;
