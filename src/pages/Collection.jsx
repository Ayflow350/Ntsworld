import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Artworks from "../components/Artworks";
import Transactions from "../components/Transactions";


const collection = () => {
  return (
    <div>
     <div className="min-h-screen">
     <div className="gradient-bg-hero">
        <Header />
       
      </div>

      <Artworks />

      <Transactions />


  
      <Footer/>
      
     </div>
     
    </div>
  );
};
export default collection;

{/* <Link to='/' className='btn'>
Home
</Link> */}


