import reactDom from 'react-dom';
import Timer from './hooks-practice/Timer';
// import FavoriteCar from './hooks-practice/Car';
// import FavoriteColor from './hooks-practice/Color';
// import Iteration from './memo-practice/Iteration';
// import CarDetails from './demo/Car';
// import Notification from './demo/Notification';
// import Garage from './demo/Garage';
// import Form from './demo/Form';
// import Form1 from './demo/Form1';
// import Nav from './pages/Nav';


// const result = () => {
//     return message() + " He lives at " + city + " in " + country + ".";
// }

// const display = () => {
//     const x = 5;
//     return <h1> {x} {(x > 10 ? "Greater than 10": "Less then 10")}</h1>
// }

reactDom.render(<Timer/>, document.getElementById('root'));