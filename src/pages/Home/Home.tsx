import {FC} from 'react';
import Navbar from '../../components/navbar/Navbar';

const Home:FC = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

Home.displayName = "Home";
export default Home;