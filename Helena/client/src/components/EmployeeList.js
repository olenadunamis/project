import React,{Component} from "react"
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import EmpTable from "./EmpTable";
 export default class EmployeeList extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            empdatalist:[]
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:8000/emp')
        .then(res=>{
            console.table(res.data)
            this.setState({
                empdatalist: res.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

DataTable()
{
    return this.state.empdatalist.map((res,i) =>
    {
        return<EmpTable obj ={res} key = {i} />;
    });
}


    render()
    {

        return (

            <div className="table-wrapper">
                <Table striped bordered hover>
                <thead>

                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>EmpId</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>

                </tbody>
                </Table>
            </div>

        )

    }
}