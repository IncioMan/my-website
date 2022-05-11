import './WorkList.css';
import { useState } from 'react';


function WorkList(props) {
  const {show} = props

  console.log(show)

  return (
    <div className={show?"work-container show":"work-container hidden"}>
      <ul>
        {[{title:'Astroport - Alternative UI',link:'https://astroport.incioman.com/'},
        {title:'Astroport - Governance Dashboard',link:'https://astroport-governance.incioman.com/'},
        {title:'Mars Protocol - Launch Dashboard',link:'https://marslockdrop.herokuapp.com/'},
        {title:'Nebula - Launch Dashboard',link:'https://lbp-dashboard.neb.money/'},
        {title:'Prism Protocol - Dashboard',link:'https://data.prismprotocol.app/'}]
        .map((i)=>{
          return <li className="work-item"><a style={{color: 'white'}} href={i['link']} target='_blank'><u>{i.title}</u></a></li>  
        })}
        </ul>
    </div>
  );
}

export default WorkList;
