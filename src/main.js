import './index.css';
import { homeContent } from './home';
import { menuContent } from './menu';
import { aboutContent } from './about';

function loadContent(elementArray) {
    const contentElement = document.querySelector('#content');
    contentElement.textContent = '';
    
    for (let i = 0; i < elementArray.length; i++) {
        contentElement.appendChild(elementArray[i]);
    }
}

function switchTab(tab) {
    switch (tab) {
        case "menu":
            loadContent(menuContent);
            break;
        case "about":
            loadContent(aboutContent);
            break;
        default:
            loadContent(homeContent);
            break;
    }
}

const navButtons = document.querySelectorAll('header .button');
navButtons.forEach(button => button.addEventListener('click', event => {
    navButtons.forEach(button => button.classList.remove('active'));

    let targetElement = event.target;
    targetElement.classList.add('active');
    switchTab(targetElement.dataset.tab);
}));

switchTab('home');