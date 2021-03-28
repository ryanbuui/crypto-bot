import "./CryptoList.css";
import Crypto from './Crypto'

const CryptoList = ({ cryptos, onDelete }) => {
    return (
        <div id="container">
            {cryptos.map((crypto) => (
            <Crypto key={crypto.text} crypto={crypto} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default CryptoList