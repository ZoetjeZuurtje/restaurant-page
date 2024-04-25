import './component.css';


function createCard(title, content) {
    let element = document.createElement('div');
    element.appendChild(document.createElement('div'));
    let div = element.firstChild;
    div.classList.add('top-border');
    div.appendChild(document.createElement('h1'));
    div.firstChild.innerText = title;
    div.firstChild.classList.add('component-title');

    let contentWrapper = document.createElement('div');
    contentWrapper.innerHTML = content;
    element.appendChild(contentWrapper);
    element.classList.add('component');
    return element;
}


export default createCard;