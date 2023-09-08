
import { useLoaderData, useNavigation, Link } from "react-router-dom";


export const Home = () => {

 

    const data = useLoaderData();
    const navigation = useNavigation();
    console.log(data)
    if (navigation.state === "loading") {
      return <div>(I'm getting your data, please hold on :)</div>;
    }
  
  return(
    data.map((post) => {
      return(
        <div>
          
            <h2>No: {post.id}<br/></h2>
            <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
          
          <hr/>
        </div>
      )
    })
  )
};
  
  // loader function
export const postsLoader = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()
  console.log(data)

    if (!res.ok) {
        throw Error('Could not fetch the posts!')
    }
    return data
}
