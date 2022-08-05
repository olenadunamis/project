import React,{Component} from "react"
import axios from "axios"
export default class EmpTable extends Component
{

    render()
    {
        return(

                <tr>
                    <td>{this.props.obj.name}</td>
                    <td>{this.props.obj.email}</td>
                    <td>{this.props.obj.empid}</td>
                </tr>

        )
    }

}