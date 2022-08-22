import React , {Component} from "react";
import './Home.css';
import Header from "./Header";

class ToDo extends Component{

    constructor(props){
        super(props)
        this.state={
            item:["Read Book" , "Play Cricket"],
            text:""
        }
    }

    data=(e)=>{
      this.setState({text:e.target.value})

    }
    adddata=(e)=>{
        var x = this.state.text;
        var y = this.state.item;

        var a = document.getElementById('input')

       if(a.value===""){
        alert('Input cannt be Empty')
       }else{
        y.push(x)

        this.setState({item:y})
       a.value='';
       }
     
    }

    deleteitem=(i)=>{
        // eslint-disable-next-line no-restricted-globals
        if(!confirm("Are you sure want to delete")){
            return ;
        }
        var x = this.state.item
        x.splice(i,1)
        this.setState({item:x})

    }

   render(){
    return(
        <div>
            <div>

                <Header/>

            </div>
            <div className="todobody">
            <div className="d-flex justify-content-center  pt-5 mb-5">

                    <div>
                        <input className=" search" onChange={this.data} id="input" placeholder="Enter Something" />
                        <button className="btn btn-warning search1" onClick={this.adddata}>Add</button>
                    </div>


                </div>

                <div className="d-flex justify-content-center mt-5 pb-5">

                    <div className="table22">
                        <table className="table table-hover table-bordered border-primary">
                        <thead className="table-primary table-active">
                          <tr>
                            <th className="text-center" scope="col">#</th>
                            <th scope="col">ToDo</th>
                            <th className="text-center" scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>

                        { this.state.item.map((itm,k)=>{
                        return(
                          <tr className="table-light">
                            <th className="text-center" scope="row">{k}</th>
                            <td>{itm}</td>
                            <td className="text-center"><button onClick={()=>{this.deleteitem(k)}} className="btn btn-danger">Delete</button></td>
                          </tr>
                        )
                       })
                       }
                        </tbody>
                      </table>       
                    </div>
                </div>
                </div>

        </div>
    )
   }

}

export default ToDo;
