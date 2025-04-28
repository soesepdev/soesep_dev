import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { 
  darkModeState, 
  profileState, 
  socialState
} from '../state/atoms';

const Welcome = () => {
  const darkMode = useRecoilValue(darkModeState);
  const [profile, setProfile] = useRecoilState(profileState);
  const [social, setSocial] = useRecoilState(socialState);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingSocial, setLoadingSocial] = useState(true);
  const imageProfile = './profile.jpg';

  useEffect(() => {
    fetchProfile();
    fetchSocial();
  }, []);

  const fetchProfile = async () => {
    try {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/profile`);
      const response = await fetch(`https://api.soesepdev.my.id/profile`);
      const result = await response.json();
      setProfile(result.data);
    } catch (err) {
      console.error('Error fetching profile data:', err);
    } finally {
      setLoadingProfile(false);
    }
  };

  const fetchSocial = async () => {
    try {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/social`);
      const response = await fetch(`https://api.soesepdev.my.id/social`);
      const result = await response.json();
      setSocial(result.data);
    } catch (err) {
      console.error('Error fetching social data:', err);
    } finally {
      setLoadingSocial(false);
    }
  };

  return (
    <section className="welcome">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 pt-1"> 
            { 
              loadingProfile ? (
                <Skeleton height={200} width='100%' className='profile-image' />
              ) : (
                <img src={imageProfile} className="profile-image fade-in" />
              )
            }
          </div>
          <div className="col-lg-9 col-12">
            <div>
              <h1 className="m-0 mt-2 mb-3 fs-3">
                {
                  loadingProfile ? (
                    <Skeleton height={35} width='60%' />
                  ) : (
                    <>
                      <span className="me-2">👋</span>
                      <span className={ (darkMode ? 'text-white' : 'text-dark') + ' fw-normal fade-in'}>Hello there, i'm </span>
                      <span className="fw-normal profile-name fade-in">{profile.name}</span>
                    </>
                  )
                }
                
              </h1>

              <h4 className={ (darkMode ? 'text-white' : 'text-dark') + ' mb-2'}>
                {
                  loadingProfile ? (
                    <>
                      <Skeleton height={20} width='90%' />
                      <Skeleton height={20} width='100%' />
                      <Skeleton height={20} width='70%' />
                    </>
                  ) : (
                    <>
                      <span className="fw-normal me-2 fs-5 fade-in">I'm a</span>
                      <span className="fw-normal me-2 fs-5 bg-warning fade-in">{profile.title}</span>
                      <span className="fw-normal fs-5 fade-in">{profile.description}</span>
                    </>
                  )
                }
              </h4>

              <div>
                {
                  loadingSocial ? (
                    <Skeleton height={30} width='30%' />
                  ) : (
                    <>
                      {
                        social.map(soc => (
                          <span className="me-2 fade-in">
                            <Link to={ soc.url } target='_blank'>
                              <box-icon type={ soc.type } name={ soc.icon } size='md' color={ darkMode ? '#ffffff' : soc.color }></box-icon>
                            </Link>
                        </span>
                        ))
                      }
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome;