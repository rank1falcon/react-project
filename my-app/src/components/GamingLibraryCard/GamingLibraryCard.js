import './GamingLibraryCard.css'
import { SecondaryButton } from '../../components/index'
const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
            <ul>
                <li><img src={props.image} alt="img"/></li>
                <li><h4>{props.title}</h4><span>{props.category}</span></li>
                <li><h4>Data Added</h4><span>{props.date_added}</span></li>
                <li><h4>hours played</h4><span>{props.hours_played}</span></li>
                <li><h4>Currently</h4><span>{props.download}</span></li>
                <SecondaryButton>Download</SecondaryButton>
            </ul>
    </div>
  )
}

export default GamingLibraryCard