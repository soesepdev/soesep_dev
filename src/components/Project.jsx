import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { 
  darkModeState, 
  // categoryState, 
  // projectState  
} from '../state/atoms';

const Project = () => {
  const darkMode = useRecoilValue(darkModeState);
  // const [category, setCategory] = useRecoilState(categoryState);
  // const [project, setProject] = useRecoilState(projectState);

  // const [categoryActive, setCategoryActive] = useState('*');

  useEffect(() => {
    // fetchDataCategory();
    // fetchDataProject();
  }, []);

  const fetchDataCategory = async () => {
    try {
      const response = await fetch('https://api.abdisusep.my.id/api/categories');
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  const fetchDataProject = async (id = '') => {
    try {
      const filter = id ? '' : '';
      const response = await fetch(`https://api.abdisusep.my.id/api/projects${filter}`);
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  };

  const filterDataProject= async (id) => {
    // setCategoryActive(id);
    // fetchDataProject()
  }

  return (
    <section className="project">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 mb-3">
            <h4 className={ darkMode ? 'text-white' : 'text-dark' + ' fw-normal'}>
              {/* <box-icon name='folder' color={ darkMode ? '#fff' : '#2b3137'}></box-icon> */}
              <span className=''>Projects</span>
            </h4>
          </div>
          <div className="col-lg-12">
            <div className="row">

              <div className="col-sm-4 mb-3" key='1'>
                <div className={'card border-0 shadow rounded px-3 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                  
                  <div className={'card-body px-0 rounded ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                    <div className='mb-2'>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="me-2" width={25} />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="me-2" width={25} />
                    </div>
                    <div>
                      <h5 className={ 'card-title fw-normal ' + (darkMode ? 'text-white' : 'text-dark') }>Project 1</h5>
                    </div>
                    <div className='mb-2'>
                      <span className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ligula a bibendum rutrum...
                      </span>
                    </div>
                    <div>
                      <Link to='/' className='text-decoration-none text-dark'>
                        <box-icon name='link-alt' size='sm'></box-icon>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="col-sm-4 mb-3" key='1'>
                <div className={'card border-0 shadow rounded px-3 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                  
                  <div className={'card-body px-0 rounded ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                    <div className='mb-2'>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="me-2" width={25} />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="me-2" width={25} />
                    </div>
                    <div>
                      <h5 className={ 'card-title fw-normal ' + (darkMode ? 'text-white' : 'text-dark') }>Project 2</h5>
                    </div>
                    <div className='mb-2'>
                      <span className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ligula a bibendum rutrum...
                      </span>
                    </div>
                    <div>
                      <Link to='/' className='text-decoration-none text-dark'>
                        <box-icon name='link-alt' size='sm'></box-icon>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="col-sm-4 mb-3" key='1'>
                <div className={'card border-0 shadow rounded px-3 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                  
                  <div className={'card-body px-0 rounded ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                    <div className='mb-2'>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="me-2" width={25} />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="me-2" width={25} />
                    </div>
                    <div>
                      <h5 className={ 'card-title fw-normal ' + (darkMode ? 'text-white' : 'text-dark') }>Project 3</h5>
                    </div>
                    <div className='mb-2'>
                      <span className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ligula a bibendum rutrum...
                      </span>
                    </div>
                    <div>
                      <Link to='/' className='text-decoration-none text-dark'>
                        <box-icon name='link-alt' size='sm'></box-icon>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;