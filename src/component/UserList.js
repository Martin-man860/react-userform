import React,{Component} from "react";
import App from "../App";

class UserList extends Component {
    render() {
        
    

   const users = this.props.data;


    return (
        
            
                users.map((user,index) => {
                    return (
                        <div key={index}>
                            <h1>{user.name}</h1>
                            <h2>{user.email}</h2>
                            <h3>{user.gen}</h3>
                        </div>
                    );
                })
            
        
    )

        }
}
export default UserList;