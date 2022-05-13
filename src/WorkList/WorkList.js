import './WorkList.css';
import { useState } from 'react';


function WorkList(props) {
  const {show} = props
  const [preview, setPreview] = useState()
  const [previewDesc, setPreviewDesc] = useState('')

  console.log(show)

  return (
    <div className={show?"work-container show":"work-container hidden"}>
      <ul>
        {[{title:'Astroport - Alternative UI',
           link:'https://astroport.incioman.com/',
           logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/logo-astroport.svg',
           preview:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/preview/astro-ui.png',
           desc:'',
           width: '24px'},

          {title:'Astroport - Governance Dashboard',
           link:'https://astroport-governance.incioman.com/',
           logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/logo-astroport.svg',
           preview:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/preview/astro-gov.png',
           desc:'Astro holders could vote for governance proposals. The goal of this dashboard\
           was to allow a more in depth and precise inspection of the governance process and actors involved.\
           It allowed to both see the general statistics but also how individual voters had behaved.\ The\
           dashboard has been developed using React and SQL for backend queries exposed via APIs by Flispide.\
           ',
           width: '24px'},

           {title:'Levana - Lockdrop Calculator',
           link:'https://calculator.levana.finance/',
           preview:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/levana.png',
           logo:'https://raw.githubusercontent.com/IncioMan/levana_lockdrop/master/images/favicon.ico',
           desc:'',
           width: '24px'},

          {title:'Mars Protocol - Launch Dashboard',
           link:'https://mars-lockdrop.incioman.com',
           logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/mars.svg',
           preview:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/preview/mars-lockdrop.png',
           desc:'Mars Protocol is a decentralized application developed on the Terra blockchain which allows to lend and borrow assets.\
            The application also allows for Smart-Contract-to-Smart-Contract lending and borrowing.\
           The dashboard allowed to visualise the data from the Mars lockdrop event - the launch event of the $MARS token distributed to users locking their $UST into the Red Bank.\
           The dashboard was built using Streamlit (for the website), Pandas (data manipulation) and Altair (data viz).\
           ',
           width: '24px'},

          {title:'Nebula - Launch Dashboard',
          link:'https://lbp-dashboard.neb.money/',
          logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/NEB.png',
          preview:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/preview/nebula.png',
          desc:'',
          width: '24px'},

          {title:'Prism Protocol - Dashboard',
          link:'https://data.prismprotocol.app/',
          logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/prism.svg',
          preview:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/preview/prism3.png',
          desc:'',
          width: '24px'},

          {title:'Prism Protocol - Launch Dashboard',
          link:'https://prism-forge.incioman.com/',
          logo:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/prism.svg',
          preview:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/preview/prism-forge.png',
          desc:'',
          width: '24px'}]
        .map((i)=>{
          return <li className="work-item" onMouseOver={()=>{
            setPreview(i.preview);
            setPreviewDesc(i.desc)
          }}>
                    <div>
                      <img src={i.logo} width={i.width} style={{paddingRight:'16px',paddingTop:'8px'}}/>
                    </div>
                    <a style={{color: 'white'}} href={i['link']} target='_blank'>
                        <u className='work-title'>{i.title}</u>
                    </a>
                </li>  
        })}
        </ul>
        <div className='work-preview'>
          {preview && 
            <div style={{maxWidth:"400px",textAlign: "justify"}}>
              <img style={{border:"solid"}} src={preview} width='400'/>
              <div className='preview-desc'>
                {previewDesc}
              </div>
            </div>
          }
        </div>
    </div>
  );
}

export default WorkList;
