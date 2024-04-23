import './component.css';

function createComponent(title, content) {
    let element = document.createElement('div');
    element.appendChild(document.createElement('div'));
    let div = element.firstChild;
    div.classList.add('top-border', 'text-start');
    div.appendChild(document.createElement('h2'));
    div.firstChild.innerText = title;

    let contentWrapper = document.createElement('div');
    contentWrapper.innerHTML = content;
    element.appendChild(contentWrapper);
    element.classList.add('component');
    return element;
}


export default createComponent;