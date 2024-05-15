import React from 'react'
import Topbar from '../components/topbar'
import PokemonCard from '../components/listviewcard'


const listView = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check viewport width on initial render

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    getProducts();

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const getProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const result = await response.json();
      setProducts(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Topbar />
    <PokemonCard />
    
    </>
  )
}

export default listView