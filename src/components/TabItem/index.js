import './index.css'

const TabItem = props => {
  const {eachItem, isActive, onClickChangeActiveTabId} = props
  const {tabId, displayText} = eachItem

  const style = isActive && 'active-style'

  const onClickTabButton = () => {
    onClickChangeActiveTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${style}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
