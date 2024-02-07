import { FC } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

Home.displayName = "Home";
export default Home;