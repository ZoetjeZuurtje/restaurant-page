import './index.css';
import { contentElements } from './index';

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
            //insertContent(menuContent);
            break;
        case "location":
            //insertContent(locationContent);
            break;
        case "job":
            //insertContent(jobContent);
            break;
        case "about":
            //insertContent(aboutContent);
            break;
        default:
            //insertContent(homeContent? should figure out a way to do this elegantly);
            break;
    }
}

const navButtons = document.querySelectorAll('header .button');
navButtons.forEach(button => button.addEventListener('click', event => {
    navButtons.forEach(button => button.classList.remove('active'));

    let targetElement = event.target;
    if (event.target.tagName == 'LEGEND') {
        targetElement = event.target.parentElement;
    }
    targetElement.classList.add('active');
    switchTab(event.target.dataset.tab);
}));

loadContent(contentElements);