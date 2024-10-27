import { Container } from 'react-bootstrap'
import { Cardcomponents } from '../components/Cardcomponents'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export const Features = () => {
  return (
    <div>
    <Container>
    <div className='row'>
        <Cardcomponents icon = {<FontAwesomeIcon icon={faFolder} />} title={"Fresh new layout"} text={"With Bootstrap 5, we've created a fresh new layout for this template!"} />
        <Cardcomponents icon={<FontAwesomeIcon icon={faCloudArrowDown} />} title={"Free to download"} text={"As always, Start Bootstrap has a powerful collectin of free templates."} />
        <Cardcomponents icon={<FontAwesomeIcon icon={faAddressCard} />} title={"Jumbotron hero header"} text={"The heroic part of this template is the jumbotron hero header!"} />
        <Cardcomponents icon={<FontAwesomeIcon icon={faBootstrap} />} title={"Feature boxes"} text={"We've created some custom feature boxes using Bootstrap icons!"} />
        <Cardcomponents icon={<FontAwesomeIcon icon={faCode} />} title={"Simple clean code"}text={"We keep our dependencies up to date and squash bugs as they come!"}/>
        <Cardcomponents icon={<FontAwesomeIcon icon={faCircleCheck} />} title={"A name you trust"} text={"Start Bootstrap has been the leader in free Bootstrap templates since 2013!"}/>
        </div>

</Container>


    </div>
    
  )
}
