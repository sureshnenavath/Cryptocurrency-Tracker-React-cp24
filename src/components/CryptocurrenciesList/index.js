import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = ({cryptocurrenciesData}) => {
  return (
    <div className="cryptocurrencies-list-container">
      <div className="table-container">
        <div className="table-header">
          <p className="header-text">Coin Type</p>
          <p className="header-text">USD</p>
          <p className="header-text">EURO</p>
        </div>
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(crypto => (
            <CryptocurrencyItem key={crypto.id} cryptoDetails={crypto} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
