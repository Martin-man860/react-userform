import React, {useState} from "react"


function User (props) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [gen,setGen] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        
        let user = {
            name: name,
            email: email,
       
            gen: gen,
        };

        props.addUser(user);
        setName("")
        setEmail("")
        setGen("")
        
    }

    return (
      <form onSubmit ={(e)=>handleSubmit(e) }>

         <div className="box">    

           <input type="text" name="full name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
          <input type="text" name="gen" value={gen} onChange={(e) => setGen(e.target.value)}/>

        </div>

      
       <div className="submit">
       <input type="Submit"/>   
        </div>

    </form>
    )
}


export default User;
