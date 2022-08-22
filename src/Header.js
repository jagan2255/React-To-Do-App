import React , {Component} from "react";


class Header extends Component{

   constructor(props){
    super(props)
    this.state={

    }
   }

   logout(){
    return window.location.replace("/");

   }

   render(){
    return(
        <div>
            <nav className="navbar navbar-dark bg-primary">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 mx-3 h1"><h5>To-Do App</h5></span>
    <div>
    <button onClick={this.logout} className="btn btn-danger m-1 me-4">Logout</button>
  </div>
  </div>
  
</nav>

        </div>
    )
   }

}

export default Header;

