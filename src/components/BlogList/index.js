// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="items-container">
      {blogsList.map(eachItem => (
        <BlogItem blogsList={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
