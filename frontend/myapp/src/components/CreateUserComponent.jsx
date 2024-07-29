import React, { Component } from 'react'
import UserService from '../services/UserService'

export class CreateUserComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id:this.props.match.params.id,
            firstName:"",
            lastName:"",
            emailId:""
        }
        this.changeFirstNameHandler= this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler= this.changeLastNameHandler.bind(this)
        this.changeEmailHandler= this.changeEmailHandler.bind(this)
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this)
    }

    saveOrUpdateUser =(e)=>{
        e.preventDefault()
        let user ={
            firstname:this.state.firstName,
            lastname:this.state.lastName,
            emailId:this.state.emailId,

        }

        if(this.state.id == "_add"){
            UserService.createUser(user).then((res)=>{ this.props.history.push('/users')})
        }
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value})
    }

    changeLastNameHandler =(event)=>{
        this.setState({lastName:event.target.value})
    }
    changeEmailHandler =(event)=>{
        this.setState({emailId:event.target.value})
    }
    cancel(){
        this.props.history.push('/users')
    }

    componentDidMount(){
        if(this.state.id==="_add"){
            return
        }
        else{
            UserService.getUserByID(this.state.id)
            .then((res)=>{
                let user = res.data
                this.setState({
                    firstName:user.firtName,
                    lasrName:user.lastName,
                    emailId:user.emailId
                })
            })
        }
    }
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    this.getTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label>FirstName:</label>
                            <input placeholder='First Name' name="firstName" className='form-control'
                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label>LastName:</label>
                            <input placeholder='Last Name' name="lastName" className='form-control'
                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label>Email Id:</label>
                            <input placeholder='Email Address' name="emailId" className='form-control'
                            value={this.state.emailId} onChange={this.changeEmailHandler} />
                        </div>
                        <button className='btn btn-success' onClick={this.saveOrUpdateUser}>Save</button>
                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                    </form>
                </div>
            </div>

        </div>
        
      </div>
    )
  }
}

export default CreateUserComponent
