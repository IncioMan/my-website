import './WorkList.css';
import { useState } from 'react';


function WorkList(props) {
  const {show} = props
  const [preview, setPreview] = useState('https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/preview/mars-lockdrop.png')
  const [previewDesc, setPreviewDesc] = useState('Mars Protocol is a decentralized application developed on the Terra blockchain which allows to lend and borrow assets.\
  The application also allows for Smart-Contract-to-Smart-Contract lending and borrowing.\
 The dashboard allowed to visualise the data from the Mars lockdrop event - the launch event of the $MARS token distributed to users locking their $UST into the Red Bank.\
 The dashboard was built using Streamlit (for the website), Pandas (data manipulation) and Altair (data viz).\
 ')

  console.log(show)

  return (
    <div className={show?"work-container show":"work-container hidden"}>
      <ul>
        {[{title:'Terra Rebirth - Voting Dashboard',
           link:'https://terra-rebirth.incioman.com/',
           logo:'https://raw.githubusercontent.com/IncioMan/terra-rebirth/master/public/favicon.svg',
           preview:'https://raw.githubusercontent.com/IncioMan/my-website/master/src/images/preview/terra-rebirth.png',
           desc:"\
            This dashboard allows users to explore arguably the most important Terra blockchain governance proposal (1623, Rebirth Terra Network) \
            with a single voter level of detail, while also obtaining information such as the wallet age and how much time users have waited before casting their vote.\
            The application has been developed with Pandas (data preparation) and React (UI)",
           width: '24px'},
           {title:'Astroport - Alternative UI',
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
           desc:'Levana was a DeFi protocol built on the Terra blockchain. It was supposed to \
           allow users to take leveraged positions. The protocol was planning to launch its LVN token via\
           a combination of Lockdrop and LBP. This dashboard allows users to predict how many LVN tokens they\
           would get, based on theirs and others\s locked liquidity and others. The dashboard has been developed using Streamlit.',
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
          desc:'Nebula is a protocol built on Terra that enabled users to invest in narratives and strategies expressed through decentralized basket instruments called clusters.\
          Their token - NEB - has been launched via an LBP mechanism. The dashboard allowed anyone to monitor what\
          the price of the token was over time and how other users were behaving.\
          The dashboard was built using Streamlit (for the website), Pandas (data manipulation) and Altair (data viz).',
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
          return <li className="work-item" 
          onMouseOut={()=>{
            setPreview(null);
            setPreviewDesc(null)
          }} 
          onMouseOver={()=>{
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
