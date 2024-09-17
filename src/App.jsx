import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ItemQuestion from './ItemQuestion';



const faqs = [
  {
    title: "What is lifting state up in React?",
    text: "Lifting state up is the process of moving state to a common parent component so that child components can share and update the state through props."
  },
  {
    title: "How does the useState hook work?",
    text: "The useState hook allows you to add state to functional components. It returns an array with the current state value and a function to update it."
  },
  {
    title: "What is the purpose of the arrow function in an event handler?",
    text: "The arrow function is used in event handlers to pass parameters to the function or to prevent the function from executing immediately when the component renders."
  },
  {
    title: "How does React handle derived state?",
    text: "Derived state is a variable created based on some data inside the state. It does not need to be stored in the state itself and is recalculated during each render."
  },
  {
    title: "What is the difference between props and state in React?",
    text: "Props are read-only data passed from parent to child components, while state is data that can change and is managed within the component itself."
  },
  {
    title: "What are React components?",
    text: "React components are reusable, independent pieces of UI built using JavaScript functions or classes. They can accept inputs, known as props, and return React elements."
  },
  {
    title: "How do you pass data from a child to a parent component in React?",
    text: "You pass a function from the parent component as a prop to the child. The child component calls this function to send data back to the parent."
  },
  {
    title: "What does it mean when we say React is declarative?",
    text: "React is declarative because it lets you describe the UI you want at any point in time, and React takes care of updating the DOM to match that UI."
  },
  {
    title: "Why is it better to pass functions as props in React?",
    text: "Passing functions as props allows child components to communicate with their parent, making it easier to manage and update shared state from various components."
  },
  {
    title: "How does React handle reference-based programming?",
    text: "In React, primitive values are assigned directly, while arrays, objects, and functions are assigned by reference. State management relies on these references to update components efficiently."
  }
];

const App = () => {
  const [listQuestions, setListQuestions] = useState(faqs);
  

  const listItems = listQuestions.map((mappedElement, index) =>(
<ItemQuestion question={mappedElement} key={index} num={index+1} />))
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-slate-100">
      {listItems}
    </div>
  );
}

export default App;

/*
import RestCard from './RestaurantApp/RestCard.jsx';
import restaurants from './RestaurantApp/restaurants.jsx';
const pageSize = 4;

const App = () => {
  const restCards = restaurants.map((mappedElement, index)=> 
    <RestCard restaurant ={mappedElement} key={index}/>)

  return (

  <div className='flex flex-col items-center'>
      <div className='flex p-4'>
      <img 
          className=' w-24 object-cover p-2'
        src="https://cdn.pixabay.com/photo/2022/03/09/05/05/coffee-7057030_1280.png"/>
        <div className='flex flex-col justify-center text-4xl ml-6 text-stone-600'>Munch Central</div>
      </div>
      <div className='flex flex-wrap  justify-center w-full max-w-5xl bg-stone-100 rounded-lg'>
          {restCards}
      </div>
     
  </div>
  );
}
export default App;

*/
