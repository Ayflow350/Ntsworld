import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Create from '../components/Create';
import Alert from "../components/Alert";
import Loading from "../components/Loading";


const CreatePage = () => {
  return (
    <div className="">
      <Header></Header>


      <div className='main-create-wrap'>
      <div>
      <Create/> 
      <Alert />
     <Loading />
      

      </div>
   

      </div>
    

    

      <Footer/>
     
    </div>
  );
};
export default CreatePage;

