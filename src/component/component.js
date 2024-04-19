import './component.css';

function createComponent(content) {
    let element = document.createElement('div');
    element.innerHTML = content;
    element.classList.add('component');
    return element;
}


export default createComponent;