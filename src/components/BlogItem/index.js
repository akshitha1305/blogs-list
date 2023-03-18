// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList

  return (
    <>
      <li className="list-container">
        <div className="date-title">
          <h1 className="title">{title}</h1>
          <h1 className="date">{publishedDate}</h1>
        </div>
        <p className="description">{description}</p>
      </li>
      <hr />
    </>
  )
}
export default BlogItem
