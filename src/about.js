import createCard from "./component/component";
import createPageTitle from "./pageTitle/pageTitle";

const mission = `<p>Here at GREY Restaurants, we strive to create the bleakest restaurant imaginable. We do this by systematically banning colors, and replacing them with greys of all kinds.</p>`;
const team = `<p>
hsl(0, 0%, 20%)<br>
hsl(0, 0%, 90%)<br>
hsl(0, 0%, 80%)<br>
hsl(0, 0%, 60%)<br>
hsl(0, 0%, 20%)<br>Every single one of these greys is working tirelessly to make this website as boring as possible.</p>`;
const contact = `BoringColors@example.com`;
const aboutContent = [
    createPageTitle('About'),
    createCard('Our Mission', mission),
    createCard('Our Team', team),
    createCard('Contact Us', contact)
];

export { aboutContent };