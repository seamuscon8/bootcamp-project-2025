import BlogPreview from "@/src/components/blogPreview"
import "../globals.css"
import blogs from "../blogData"
export default function Home() {
    return (
		<div className = "blog-container">
		   {blogs.map(blog => 
      		<BlogPreview key = {blog.title} {...blog} 
			
			/> // This is how we call the component
			)}	
			
		
		</div>
		) 
}