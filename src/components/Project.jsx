import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import Skeleton from 'react-loading-skeleton';
import Modal from 'react-modal';

import { darkModeState, projectState } from '../state/atoms';

const Project = () => {
  const darkMode = useRecoilValue(darkModeState);
  const [project, setProject] = useRecoilState(projectState);
  const [loadingProject, setLoadingProject] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [projectView, setProjectView] = useState([]); 


  const skeletonBaseColor = darkMode ? '#444' : '#ddd'; 
  const skeletonHighlightColor = darkMode ? '#555' : '#eee';

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const response = await fetch(`https://api.soesepdev.my.id/project`);
      const result = await response.json();
      setProject(result.data);
    } catch (error) {
      console.error('Error fetching projects data:', error);
    } finally {
      setLoadingProject(false);
    }
  };

  const openProject = (data) => {
    setIsModalOpen(true); 
    setProjectView(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProjectView([]);
  };

  return (
    <>
      <section className="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-3">
              {loadingProject ? (
                <Skeleton
                  height={30}
                  width="20%"
                  baseColor={skeletonBaseColor}
                  highlightColor={skeletonHighlightColor}
                  borderRadius={12}
                />
              ) : (
                <h4 className={darkMode ? 'text-white' : 'text-dark' + ' fw-normal fade-in'}>
                  <span className="me-2">
                    <box-icon
                      name="circle"
                      type="solid"
                      color={'#ffc107'}
                      style={{ verticalAlign: 'middle' }}
                    ></box-icon>
                  </span>
                  <span>Projects</span>
                </h4>
              )}
            </div>

            <div className="col-lg-12">
              <div className="row">
                {loadingProject ? (
                  <>
                    <div className="col-sm-4 mb-3">
                      <Skeleton
                        height={200}
                        width="100%"
                        baseColor={skeletonBaseColor}
                        highlightColor={skeletonHighlightColor}
                        borderRadius={12}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <Skeleton
                        height={200}
                        width="100%"
                        baseColor={skeletonBaseColor}
                        highlightColor={skeletonHighlightColor}
                        borderRadius={12}
                      />
                    </div>
                    <div className="col-sm-4 mb-3">
                      <Skeleton
                        height={200}
                        width="100%"
                        baseColor={skeletonBaseColor}
                        highlightColor={skeletonHighlightColor}
                        borderRadius={12}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {project.map((proj) => (
                      <div className="col-sm-4 mb-3 fade-in" key={proj.id}>
                        <div
                          className={
                            'card border-0 shadow rounded px-3 ' + (darkMode ? 'bg-secondary' : 'bg-white')
                          }
                        >
                          <div
                            className={
                              'card-body px-0 rounded ' + (darkMode ? 'bg-secondary' : 'bg-white')
                            }
                          >
                            <div className="mb-2">
                              { proj.stack &&
                                proj.stack.split(',').map((tech, i) => (
                                  <img src={tech.trim()} className="me-2" width={25} key={i} alt='stack' />
                                ))
                              }
                            </div>
                            <div>
                              <h5
                                className={'card-title fw-normal ' + (darkMode ? 'text-white' : 'text-dark')}
                              >
                                {proj.title}
                              </h5>
                            </div>
                            <div className="mb-2">
                              <span
                                className={'card-text ' + (darkMode ? 'text-white' : 'text-dark')}
                              >
                                {proj.description.slice(0, 80) + '...'}
                              </span>
                            </div>
                            <div>
                              <Link
                                onClick={() => openProject(proj)}
                                className="text-decoration-none"
                                aria-label="Open Project"
                              >
                                <box-icon
                                  name="link-alt"
                                  size="sm"
                                  color={darkMode ? '#fff' : '#2b3137'}
                                ></box-icon>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        ariaHideApp={false} 
        onRequestClose={closeModal} 
        closeTimeoutMS={100} 
        className={ 'vh-100 rounded-0 fade-in ' + (darkMode ? 'bg-dark' : 'bg-white') }
      >
        <div className='container py-4 px-4'>
          
          <div className='row mt-5 mb-3'>
            <div className='col-sm-12'>
                <div>
                  <button onClick={closeModal} className='btn btn-sm btn-danger'>. / back</button>
                </div>
            </div>
          </div>

          <div className='row'> 
            <div className='col-sm-6'>
              {
                projectView.slide ? (
                  <>
                    { projectView.slide &&
                      projectView.slide.split(',').map((slide, i) => (
                        <img src={slide.trim()} className="rounded w-100 mb-3" key={i} alt='slide' />
                      ))
                    }
                  </>
                ) : (
                  <>
                    <Skeleton
                      height={ 250 }
                      width="100%"
                      baseColor={skeletonBaseColor}
                      highlightColor={skeletonHighlightColor}
                      borderRadius={12}
                      className='mb-3'
                    />
                  </>
                )
              }
              
            </div>

            <div className='col-sm-6'>
              {
                projectView.title ? (
                  <>
                    <h4 className={ darkMode ? 'text-white' : 'text-dark' }>{ projectView.title }</h4>
                    <div className='mb-2'>
                      { projectView.stack &&
                        projectView.stack.split(',').map((tech, i) => (
                          <img src={tech.trim()} className="me-2" width={25} key={i} alt='tech' />
                        ))
                      }
                    </div>
                    <div className={ (darkMode ? 'text-white' : 'text-dark') + ' mb-2' }>
                      { projectView.description }
                    </div>
                    <div>
                      <Link to={ projectView.url } className='btn btn-secondary btn-sm'>demo</Link>
                    </div>
                  </>
                ) : (
                  <>
                    <Skeleton
                      height={ 25 }
                      width="60%"
                      baseColor={skeletonBaseColor}
                      highlightColor={skeletonHighlightColor}
                      borderRadius={12}
                      className='mb-3'
                    />

                    <Skeleton
                      height={ 20 }
                      width="100%"
                      baseColor={skeletonBaseColor}
                      highlightColor={skeletonHighlightColor}
                      borderRadius={12}
                      className='mb-1'
                    />
                    
                    <Skeleton
                      height={ 20 }
                      width="90%"
                      baseColor={skeletonBaseColor}
                      highlightColor={skeletonHighlightColor}
                      borderRadius={12}
                      className='mb-1'
                    />
                    
                    <Skeleton
                      height={ 20 }
                      width="100%"
                      baseColor={skeletonBaseColor}
                      highlightColor={skeletonHighlightColor}
                      borderRadius={12}
                      className='mb-1'
                    />
                  </>
                )
              }

              

            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Project;