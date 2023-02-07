import './style.css';
import logoSrc from './images/logo.png';

const logoLink = document.querySelector('.logo-link');
const logo = new Image();
logo.src = logoSrc;
logo.id = 'nav-logo';
logoLink.appendChild(logo);