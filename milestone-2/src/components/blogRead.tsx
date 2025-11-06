import React from 'react';
import Image from "next/image";
import Link from "next/link";
import style from "./blogRead.module.css"
import { BlogDetails } from "../app/blogData";

export default function BlogRead(props: BlogDetails) {
    return(
      
            <div className = {style.blog} >
                    <Link href = "/blogs">Back</Link>
                    <h2> {props.title}</h2>
                    <h3>  {props.date}</h3>
                    <Image 
                        src={`/images/${props.image}`} 
                        alt = {props.imageAlt} 
                        width = {500}
                        height = {250}
                        className = {style.image}
                
                    ></Image>
                    <p> {props.finalScore}</p>
                    <ul>
                        {props.scorers.map((scorer,i) => (
                            <li key={i}>{scorer}</li>
                        ))}
                    </ul>
                    <Link href = {props.videoLink}>Click to Watch Extended Highlights</Link>

                    
                
            </div>
         
          
     
     
    )
}