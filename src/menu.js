import createCard from "./component/component";
import createPageTitle from "./pageTitle/pageTitle";
import './menu.css';

const drinks = createCard('Drinks', '<p><pre>Milk         ...$5\nEarl Grey    ...$2\nBlack Coffee ...$3\n</pre></p>');
let food = `<table>
    <thead>
        <tr>
            <th colspan="2">Main Dishes</th>
            <th colspan="2">Sides</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>BLT</td>
            <td>$2</td>
            <td>Sandwich</td>
            <td>$2</td>
        </tr>
        <tr>
            <td>Pancakes</td>
            <td>$4.50</td>
            <td>Fruit<sup>*</sup></td>
            <td>$2</td>
        </tr>
        <tr>
            <td>French Toast</td>
            <td>$5</td>
        </tr>
        <tr>
            <td>Waffles</td>
            <td>$3</td>
        </tr>
    </tbody>
</table>
<sup>* Strawberries may contain traces of red</sup>`;
const menuContent = [
    createPageTitle('Menu'),
    drinks,
    createCard('Food', food),
];

export { menuContent };