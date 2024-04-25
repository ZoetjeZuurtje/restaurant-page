import createCard from "./component/component";
import createPageTitle from "./pageTitle/pageTitle";


const opensOn = createCard('Opening Hours', '<p>Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm</p>');
const review = createCard('Review', '<blockquote><p>GREY has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of an industrial district, but other than that, it is amazing! This is exactly the kind of place that I like to return to again and again.</p><footer>- Moderately Satisfied Customer</footer></blockquote>');
const locations = createCard('Locations', '<p>123 Hue street, Chromaville</p>');
review.style.textAlign = 'start';

const homeContent = [
    createPageTitle('GREY Restaurants'),
    review,
    opensOn,
    locations
]

export { homeContent };