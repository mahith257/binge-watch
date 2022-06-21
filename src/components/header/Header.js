import Navbar from '../Navbar';
import './Header.css'
import logo from '../.././images/logo.png'

export default function Header() {
  return (
    <div className='header' onClick={() => window.scroll(0,0)}>
        <img className='brand-logo' src={logo} alt='brandLogo' />
        <div className='brand'>Binge  Watch</div>
        <div className='icons'>
          <Navbar />
        </div>
    </div>
  );
}
