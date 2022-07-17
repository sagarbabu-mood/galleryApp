// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {details, changeBgImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = details

  const changeImage = () => {
    changeBgImage(id)
  }
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  return (
    <li>
      <button className="thumbnail-button" type="button" onClick={changeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
