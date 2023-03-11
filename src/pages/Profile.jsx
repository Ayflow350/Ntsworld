import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
// import Edit_user from '../components/Edit_user'
import Mynfts from '../components/Mynfts'
import Test from '../components/test';

// import Edit_user from '../components/Edit_user';


const Profile = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-hero">
       <Header />
       
       <Mynfts/>
       {/* <Test/> */}
     </div>
     <Footer/>
      {/* <Edit_user/>  */}
     

    
   </div>
  );
};
export default Profile;