import './index.css'

const CryptocurrencyItem = ({cryptoDetails}) => {
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="crypto-details">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="value">{usdValue}</p>
      <p className="value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
