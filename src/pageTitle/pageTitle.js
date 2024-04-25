import './pageTitle.css';

function createPageTitle(title) {
    const element = document.createElement('div');
    element.classList.add('component', 'page-title');
    element.appendChild(document.createElement('h1'));
    element.firstChild.innerText = title;
    return element;
}

export default createPageTitle;