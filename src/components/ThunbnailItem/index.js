import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onClickThumbnail} = props
  const {id, thumbnailUrl} = eachItem

  const onClickThumbnailItem = () => {
    onClickThumbnail(id)
  }

  // const altValue = isMatched ? 'match' : 'thumbnail'

  return (
    <li>
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailItem}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
