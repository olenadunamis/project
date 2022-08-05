import { Button } from "bootstrap";
import React,{Component} from "react";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
 export default class CreateEmployee extends Component
{

        constructor(props)
        {
            super(props)

           // this.onChangeEmpName = this.onChangeEmpName.bind(this);

            this.state = {

                name:'',
                email:'',
                empid:''
            }
        }

        onChangeEmpName = (event)=>{   //console.log(event.target.value)
            this.setState({name:event.target.value})
        }
        onChangeEmpEmail = (event)=>{   //console.log(event.target.value)
            this.setState({email:event.target.value})
        }
        onChangeEmpID = (event)=>{   //console.log(event.target.value)
            this.setState({empid:event.target.value})
        }

        onSumbit = (event)=>{
            event.preventDefault();
            console.log("I am Working")
           const empObject ={

            name:this.state.name,
            email:this.state.email,
            empid:this.state.empid 

           }
           axios.post('http://localhost:8000/emp/create-employee',empObject)
           .then(res =>console.log(res.data))

           this.setState({ 
            name:'',
            email:'',
            empid:''
        })
        }


    render()
    {

        return (

            <div className="form-wrapper">
                
             <Form onSumbit={this.onSumbit}>
             <Form.Group controlId="Name"> 
             <Form.Label>Name</Form.Label>
             <Form.Control type="name" value ={this.state.name} onChange={this.onChangeEmpName}  />
             </Form.Group>

             <Form.Group controlId="Email"> 
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" value ={this.state.email} onChange={this.onChangeEmpEmail} />
             </Form.Group>

             <Form.Group controlId="EmpId"> 
             <Form.Label>EmpId</Form.Label>
             <Form.Control type="text" value ={this.state.empid} onChange={this.onChangeEmpId}  />
             </Form.Group>


             <Button variant="danger"  size ="ig" block = "block" className="mt-4" type = "sumbit">

                Create Employee

             </Button>

            </Form>   


            </div>

        )

    }
}