import reactDom from 'react-dom';
import Iteration from './memo-practice/Iteration';
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

reactDom.render(<Iteration/>, document.getElementById('root'));