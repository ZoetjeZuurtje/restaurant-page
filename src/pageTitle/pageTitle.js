import './pageTitle.css';

function createPageTitle(title, size = 'h1') {
    const element = document.createElement('div');
    element.classList.add('component', 'page-title');
    element.appendChild(document.createElement(size));
    element.firstChild.innerText = title;
    return element;
}

export default createPageTitle;