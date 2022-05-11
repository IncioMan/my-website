import logo from './logo.svg';
import './App.css';
import WorkList from './WorkList/WorkList';
import { BsGithub, BsMedium, BsTwitter } from 'react-icons/bs';
import { useState } from 'react';


function App() {
  const [transition, setTransition] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <div className={'profile-container' + (transition?' slide-exit-active':'')} >
          <img src={"https://raw.githubusercontent.com/IncioMan/my-website/master/images/2022-01-23%2012.30.34.jpg"} className="App-logo" alt="logo" />
          <div className={'contacts-container'}>
            <a href={'https://twitter.com/IncioMan'}><BsTwitter size={'3em'} className='contact-logo'/></a>
            <a href={'https://github.com/IncioMan'}><BsGithub size={'3em'} className='contact-logo'/></a>
            <a href={'https://medium.com/@incioman'}><BsMedium size={'3em'} className='contact-logo'/></a>
          </div>
          <button className='work-button' onClick={()=>setTransition(true)}>My Work</button>
        </div>
        <WorkList show={transition}/>
      </header>
    </div>
  );
}

export default App;
