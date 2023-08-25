import './WelcomeScreen.scss';
import logo from '../../assets/Logos/secura.svg';
import { Link } from 'react-router-dom';

function WelcomeScreen() {

    return (
        <section className="welcome-screen">
            <Link className='welcome-screen__logo-container'>
                <img className="welcome-screen__logo" src={logo} alt="secura logo"/>
            </Link>
        </section>
    )
}

export default WelcomeScreen;