import './WorkList.css';
import { useState } from 'react';


function WorkList(props) {
  const {show} = props

  console.log(show)

  return (
    <div className={show?"work-container show":"work-container hidden"}>
      <ul>
        {[{title:'Astroport - Alternative UI',
           link:'https://astroport.incioman.com/',
           logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/logo-astroport.svg',
           width: '24px'},
          {title:'Astroport - Governance Dashboard',
           link:'https://astroport-governance.incioman.com/',
           logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/logo-astroport.svg',
           width: '24px'},
          {title:'Mars Protocol - Launch Dashboard',
          link:'https://mars-lockdrop.incioman.com',
          logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/mars.svg',
          width: '24px'},
          {title:'Nebula - Launch Dashboard',
          link:'https://lbp-dashboard.neb.money/',
          logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/NEB.png',
          width: '24px'},
          {title:'Prism Protocol - Dashboard',
          link:'https://data.prismprotocol.app/',
          logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/prism.svg',
          width: '24px'}]
        .map((i)=>{
          return <li className="work-item">
                    <div>
                      <img src={i.logo} width={i.width} style={{paddingRight:'16px',paddingTop:'8px'}}/>
                    </div>
                    <a style={{color: 'white'}} href={i['link']} target='_blank'>
                        <u className='work-title'>{i.title}</u>
                    </a>
                </li>  
        })}
        </ul>
    </div>
  );
}

export default WorkList;
