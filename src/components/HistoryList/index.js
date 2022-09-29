/* eslint-disable react/button-has-type */
import './index.css'

const HistoryList = props => {
  const {historyItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const onDeleteItem = () => deleteHistoryItem(id)
  const testid = 'delete'
  return (
    <li className="list-item-container">
      <div className="items-container">
        <div className="time-container">
          <p className="time">{timeAccessed}</p>
        </div>
        <img alt="app logo" className="domain-logo" src={logoUrl} />
        <p className="title">{title}</p>
        <p className="link">{domainUrl}</p>
      </div>
      <div className="delete-icon-container">
        <button className="delete-icon" onClick={onDeleteItem}>
          {testid}
        </button>
      </div>
    </li>
  )
}

export default HistoryList
