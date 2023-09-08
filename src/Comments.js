import {useLoaderData } from "react-router-dom"; 

function Comments () {
    const data = useLoaderData(); 
    
  
    return (
     
        
      
     data.map((comment) => {
            return (
            <li >
              <p><strong>{comment.name}</strong></p>
              <p>{comment.body}</p>
            </li>
          )}

          ))}; 
    
    

    

    export const postsWithParamsLoader = async ({ params }) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
      const data = await res.json()
      console.log(data)
    
        if (!res.ok) {
            throw Error('Could not fetch the posts!')
        }
        return data
    
  }
 export default Comments; 