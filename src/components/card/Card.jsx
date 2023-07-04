import './Card.scss'
import PropTypes from 'prop-types'

function Card({item}) {
  return (
  
        <div className='container-card'>
          <div className='card'>
           

            
          <img src={item.urlToImage} alt='card image'/>
            <div className='wrap'>
            <a className='link' href={item.url}>
            <h3 className='title'>{item.content}</h3>
            <p className='desc'>{item.description}</p>
            <p>Read more</p>
            </a>
            </div>
           
            
            
         </div>
        </div>
       

 
  )
}
Card.propTypes = {
  item:PropTypes.object
} 


export default Card