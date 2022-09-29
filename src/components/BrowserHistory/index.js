import './index.css'
import {Component} from 'react'
import HistoryList from '../HistoryList'

class BrowserHistory extends Component {
  initialHistoryList = this.props

  state = {
    searchInput: '',
    historyLists: this.initialHistoryList.initialHistoryList,
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteHistoryItem = id => {
    const {historyLists} = this.state
    const updateHistory = historyLists.filter(eachItem => eachItem.id !== id)
    this.setState({historyLists: updateHistory})
  }

  render() {
    const {searchInput, historyLists} = this.state
    const searchResult = historyLists.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const emptyPage = (
      <div>
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="History"
            className="history-icon"
          />
          <div className="input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon"
                alt="Search"
              />
            </div>
            <input
              type="search"
              className="input"
              value={searchInput}
              onChange={this.onSearchInput}
            />
          </div>
        </nav>
        <div className="empty-page-container">
          <p className="empty-page-description">There is no history to show</p>
        </div>
      </div>
    )

    const historyPage = (
      <div>
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="History"
            className="history-icon"
          />
          <div className="input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon"
                alt="Search"
              />
            </div>
            <input
              type="search"
              className="input"
              value={searchInput}
              onChange={this.onSearchInput}
            />
          </div>
        </nav>
        <div className="body-container">
          <ul className="list-container">
            {searchResult.map(each => (
              <HistoryList
                historyItem={each}
                key={each.id}
                deleteHistoryItem={this.onDeleteHistoryItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
    return searchResult.length > 0 ? historyPage : emptyPage
  }
}
export default BrowserHistory
