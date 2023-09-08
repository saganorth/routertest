

import {useLoaderData, Link, useLocation } from "react-router-dom"; 



function Post() {  
  
  const data = useLoaderData()
  const { title, body, userId } = data.post
  const {username} =data.user
  console.log(title,body,userId)
  return (  
  
    <div>
      <h2>Title: {title}</h2> 
      <p><strong>Text: </strong>{body}</p>
      <Link to={`/users/${userId}`} state = {data.user}><p>User: {username}</p></Link>

      <h3>comments</h3>
   

      </div>

    ); 
  }

export const postsWithParamsLoader = async ({ params }) => {
    console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()
  
      // if (!res.ok) {
      //     throw Error('Could not fetch the post!')
      // }
      const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      const user = await userRes.json()
      
      // if (!res.ok) {
      //     throw Error('Could not fetch the user!')
      // }

    const data = { post, user };
    console.log(data)
    return data
}
  
  export default Post;