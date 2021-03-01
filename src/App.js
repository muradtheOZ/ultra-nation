import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';
function App() {
  const [countries, setCountries] = useState([]);
  const[cart,setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        const names = data.map(country => country.name);
      })
  }, []);
  const handleAddToCountry =(props)=>{
    const newCart = [...cart,props]
    setCart(newCart);
}
  return (
    <div className="mainApp">
      <h1>Country loaded:{countries.length}</h1>
      <Cart cart ={cart}></Cart>
      <div className="flexShow">
        {
          countries.map(country => <Country handleAddToCountry={handleAddToCountry} country={country} key={country.alpha3Code}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
