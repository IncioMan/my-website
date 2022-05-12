import logo from './logo.svg';
import './App.css';
import WorkList from './WorkList/WorkList';
import { BsGithub, BsMedium, BsTwitter } from 'react-icons/bs';
import { useEffect, useState } from 'react';


function App() {
  const [transition, setTransition] = useState(false)

  useEffect(()=>{
    setTransition(true)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <div className={'profile-container' + (transition?' slide-exit-active':'')} >
          <img src={"https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/2022-01-23%2012.30.34.jpg"} className="App-logo" alt="logo" />
          <div className='titles-container'>
            <div>Software/Data Engineer</div>
            <div>On-chain Data Analyst</div>
          </div>
          <div className={'contacts-container'}>
            <a href={'https://twitter.com/IncioMan'}><BsTwitter size={'3em'} className='contact-logo'/></a>
            <a href={'https://github.com/IncioMan'}><BsGithub size={'3em'} className='contact-logo'/></a>
            <a href={'https://medium.com/@incioman'}><BsMedium size={'3em'} className='contact-logo'/></a>
          </div>
        </div>
        <WorkList show={transition}/>
      </header>
    </div>
  );
}

export default App;
