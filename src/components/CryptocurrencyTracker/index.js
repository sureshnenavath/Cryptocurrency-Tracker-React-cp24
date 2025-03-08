import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    try {
      const response = await fetch(
        'https://apis.ccbp.in/crypto-currency-converter',
      )
      const data = await response.json()

      const formattedData = data.map(crypto => ({
        id: crypto.id,
        currencyName: crypto.currency_name,
        usdValue: crypto.usd_value,
        euroValue: crypto.euro_value,
        currencyLogo: crypto.currency_logo,
      }))

      this.setState({
        cryptocurrenciesData: formattedData,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error fetching cryptocurrencies:', error)
      this.setState({isLoading: false})
    }
  }

  render() {
    const {cryptocurrenciesData, isLoading} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="background-img"
        />
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
