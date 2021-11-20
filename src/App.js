import logo from './logo.svg';
import './App.css';


function Logo(){
  return (
    <>
      <img src={logo} alt="logo" width="40" />
    </>
  )
}

function Content(){
  return (
    <>
      <h1>Content</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}

function App() {
  return (
    <div>
      <Logo />
      <Content />
    </div>
  );
}

export default App;
