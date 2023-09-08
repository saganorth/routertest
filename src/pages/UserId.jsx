
import { useLocation } from "react-router-dom"; 


function UserId({ user }) {

const {state} = useLocation(); 
console.log(state); 


  
  return (
    <div className="user-id">
      <h4>User Info:</h4>
      {/* <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Company: {user.company}</p> */}
    </div>
    // <h2>UserId - Page</h2>
  );
}

export default UserId;
