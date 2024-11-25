import './blog.css';

import BlogItem from './blogItem'
import blogImage from '../../assets/images/post-1.jpg'
import blog2Image from '../../assets/images/post-2.jpg'
import blog3Image from '../../assets/images/post-3.jpg'
function Blog(){
  let blogs =[
    {
blogImage:blogImage,
blogTitle:'post title 1',
blogInfo:'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
blogAuthore:'arefa',
blogTime:5,
    },
    {
      blogImage:blog2Image,
      blogTitle:'post title 2',
      blogInfo:'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
      blogAuthore:'zahra',
      blogTime:10,
          },
          {
            blogImage:blog3Image,
            blogTitle:'post title 3',
            blogInfo:'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            blogAuthore:'sara',
            blogTime:20,
                },      

  ]
    return(
        <section id="blog">
        <div class="container">
          <div class="section-info">
            <h2 class="section-title">BLOG</h2>
            <p class="section-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="row">
           <BlogItem {...blogs[0]}/>
           <BlogItem {...blogs[1]}/>
           <BlogItem {...blogs[2]}/>
          </div>
        </div>
      </section>
    )
}
export default Blog