import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, } from "./auth";

function BlogPost () {
    const navigate = useNavigate();
    const auth = useAuth();
    const { slug } = useParams()

    let blogPost = []
    blogPost = auth.data.find(post => post.slug === slug)

    const canDelete = auth.user?.userType !== '' || blogPost.author === auth.user?.userName

    const returnToBlog = () => {
        navigate('/blog') //navigate(-1) //devuelve a la ruta visitada anterior a la actual
    }

    const removeBySlug = () => {
        const newArray = auth.data.filter(item => item.slug !== slug);
        auth.updateData( newArray ) 
        returnToBlog()
    };

    return (
        <>  
            <button onClick={ returnToBlog }> Volver a la lista de Posts</button>
            <h2>{ blogPost.title }</h2>
            <p>{ blogPost.author }</p>
            <p>{ blogPost.content }</p>
            
            { !!canDelete && 
               <button onClick={ () => removeBySlug( auth.data, slug )}>
                Eliminar Post
               </button>}
        </>
        
    )
};

export { BlogPost };