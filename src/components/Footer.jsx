import { useRecoilValue } from 'recoil';

import { 
  darkModeState, 
  profileState 
} from '../state/atoms';

const Footer = () => {
  const darkMode = useRecoilValue(darkModeState);
  const profile  = useRecoilValue(profileState);

  return (
    <section className="footer">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 mb-3 text-center">
            <p className={ darkMode ? 'text-white' : 'text-dark'}>Created with <span className="cofee">☕︎</span> by <span className="fw-semibold profile-name">{ profile.name ? profile.name : '. . .' }</span></p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer;