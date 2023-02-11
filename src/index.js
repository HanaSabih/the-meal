import './style.css';
import { getData, getOptionsData } from './modules/mealsMenu.js';

import logoSrc from './images/logo.png';

const logoLink = document.querySelector('.logo-link');
const logo = new Image();
logo.src = logoSrc;
logo.id = 'nav-logo';
logoLink.appendChild(logo);

const menuListUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

getData(menuListUrl);
getOptionsData('Beef');
