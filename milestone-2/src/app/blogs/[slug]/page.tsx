
import {use} from "react"
import { notFound } from "next/navigation";
import BlogRead from "@/src/components/blogRead"
import { blogDetails, type BlogDetails } from "../../blogData";




export default function TestPage({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} : {slug: string}  = use(params);
   const blog = blogDetails.find((b) => b.slug === slug);
    if (!blog) return notFound();  
    return (
    
    <main style={{ padding: 24 }}>

      <BlogRead {...blog}/>
     
    </main>
  );
}
