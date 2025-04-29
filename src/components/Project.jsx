import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import Skeleton from 'react-loading-skeleton'

import { 
  darkModeState, 
  projectState  
} from '../state/atoms';

const Project = () => {
  const darkMode = useRecoilValue(darkModeState);
  const [project, setProject] = useRecoilState(projectState);
  const [loadingProject, setLoadingProject] = useState(true);

  const skeletonBaseColor = darkMode ? '#444' : '#ddd'; 
  const skeletonHighlightColor = darkMode ? '#555' : '#eee';

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/project`);
      const response = await fetch(`https://api.soesepdev.my.id/project`);
      const result = await response.json();
      console.log(result)
      setProject(result.data);
    } catch (error) {
      console.error('Error fetching projects data:', error);
    } finally {
      setLoadingProject(false);
    }
  };

  return (
    <section className="project">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 mb-3">
            {
              loadingProject ? (
                <Skeleton height={30} width='20%' baseColor={skeletonBaseColor} highlightColor={skeletonHighlightColor} borderRadius={12} />
              ) : (
                <h4 className={ darkMode ? 'text-white' : 'text-dark' + ' fw-normal fade-in' }>
                  <span className='me-2'>
                    <box-icon name='circle' type='solid' color={ darkMode ? '#fff' : '#ffc107'}  style={{ verticalAlign: 'middle' }}></box-icon>
                  </span>
                  <span className='bg-wardning'>Projects</span>
                </h4>
              )
            }
          </div>

          <div className="col-lg-12">
            <div className="row">
              {
                loadingProject ? (
                  <>
                    <div className="col-sm-4 mb-3">
                      <Skeleton height={200} width='100%' baseColor={skeletonBaseColor} highlightColor={skeletonHighlightColor} borderRadius={12} />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <Skeleton height={200} width='100%' baseColor={skeletonBaseColor} highlightColor={skeletonHighlightColor} borderRadius={12} />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <Skeleton height={200} width='100%' baseColor={skeletonBaseColor} highlightColor={skeletonHighlightColor} borderRadius={12} />
                    </div>
                  </>
                ) : (
                  <>
                    {
                      project.map(proj => (
                        <div className="col-sm-4 mb-3 fade-in" key={ proj.id }>
                          <div className={'card border-0 shadow rounded px-3 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                            <div className={'card-body px-0 rounded ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                              <div className='mb-2'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="me-2" width={25} />
                              </div>
                              <div>
                                <h5 className={ 'card-title fw-normal ' + (darkMode ? 'text-white' : 'text-dark') }>{ proj.title }</h5>
                              </div>
                              <div className='mb-2'>
                                <span className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>
                                  { proj.desciption }
                                  {/* { proj.description } */}
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
                      ))
                    }
                  </>
                )
              }  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;