import './blog.css';
function BlogItem(props){
    return(
        <div className="col-4">
        <div className="blog-box">
          <div classname="blog-img">
            <img src={props.blogImage} classname="img-fluid" />
          </div>
          <div classname="blog-content">
            <h3 classname="blog-title">{props.blogTitle}</h3>
            <p classname="blog-desc">{props.blogInfo}
            </p>
          </div>
          <div classname="blog-footer">
            <div classname="post-author">
              <p classname="author">{props.blogAuthore}</p>
            </div>
            <div classname="post-date">
              <span classname="bi bi-clock"></span>{props.blogTime}
            </div>
          </div>
        </div>
      </div>
    )
}
export default BlogItem