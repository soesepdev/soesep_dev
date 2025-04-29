import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { profileState } from '../state/atoms';

import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Project from '../components/Project';
import Footer from '../components/Footer';

const Home = () => {
  const setProfile = useSetRecoilState(profileState);

  useEffect(() => {
    fetchProfile();
  }, []);
  
  const fetchProfile = async () => {
    try {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/profile`);
      const response = await fetch(`https://api.soesepdev.my.id/profile`);
      const result = await response.json();
      setProfile(result.data);
    } catch (err) {
      console.error('Error fetching profile data:', err);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="container">
        <Welcome/>
        <Project/>
        <Footer/>
      </div>
    </>
  )
}

export default Home;