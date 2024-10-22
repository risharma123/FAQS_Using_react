import Faqs from './component/Faqs';
import './App.css'

function App() {
  const questionAnswer=[{
    question:'What is HTML?',
    Answer:"HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content."
  },
{
  question:"what is React? ",
  Answer:"React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation. React is widely used in web development due to the following features: Code Reusability."
},
{
question:"what is Component?",
Answer:"React Components are the building block of React Application. They are the reusable code blocks containing logics and and UI elements"
},
{
  question:"what is Hook?",
  Answer:"Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. (We don't recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you'd like.)"
},];
 
  return (
    <div >
      <Faqs questionAnswer={questionAnswer}/>
    </div>
  )
}

export default App
