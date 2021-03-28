import "./Crypto.css";
import { FaTimes } from 'react-icons/fa'

const Crypto = ({ crypto, onDelete }) => {
    return (
        <div className='crypto'>
            <p id="name">{crypto.text}</p>
            <p id="price">{crypto.price}</p>
            <p id="hr24">{crypto.percentage}</p>
            <div id="delete"><FaTimes id = "x" style={{ cursor: 'pointer'}} onClick={() => onDelete(crypto.id)}/></div>
        </div>
    )
}

export default Crypto