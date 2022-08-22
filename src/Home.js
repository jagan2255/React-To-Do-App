import React , {Component} from "react";
import './Home.css';

class Home extends Component{

   constructor(props){
    super(props)
    this.state={
      email:"",
      password:""

    }
   }

   eventChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})

   }


   login=(e)=>{

    var data={
      email:this.state.email,
      password:this.state.password
  }

  //alert(data.email)

    if (data.email==="admin@gmail.com" && data.password==="admin1234") {

     return window.location.replace("/todo");

    }else{
    alert("Invalid User")
  }

   }

   render(){
    return(
        <div className="d-flex justify-content-center body22 ">

            <div className="formcontent">
            <div className="form shadow">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={this.eventChange} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={this.eventChange} name="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <div className="text-center d-grid">
  <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>

  </div>
</div>
            </div>

        </div>
    )
   }

}

export default Home;
