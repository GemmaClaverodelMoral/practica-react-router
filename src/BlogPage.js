import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "./auth";

function BlogPage () {
    const auth = useAuth()
    let blogPosts = []
    blogPosts = auth.data

    return (
        <>
            <h1>Blog</h1>
            <ul> 
                {blogPosts?.map( (post) => (
                    <BlogLink
                        key = { post.slug } 
                        post = { post }
                    />
                ))}
            </ul>
            < Outlet /> 
        </>
        
    )
};

function BlogLink({ post }) {
    return (
        <li>
            <Link 
                to = { `/blog/${ post.slug }` }
            >{ post.title }
            </Link>
        </li>)
}


export { BlogPage };