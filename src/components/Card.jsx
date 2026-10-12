import React from 'react'
import { Bookmark } from 'lucide-react'


const Card = (props) => {
  console.log(props.company)
  return (
     <div className="card">
        <div>
          <div className='top'>
          <img src={props.brandLogo} />
          <button>Save <Bookmark size={13}/> </button>
        </div>
        <div className='main'>
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>

        <div className='footer'>
          <div>
            <h3>{props.pay}</h3>
            <p>Mumbai,India</p>
          </div>
            <button>Apply now</button>
        </div>

    </div>
  )
}

export default Card