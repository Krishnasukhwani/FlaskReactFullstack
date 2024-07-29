import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
  render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-dark' bg-primary>
                <div>
                    <a href='/users'></a>
                    User Management App
                </div>
            </nav>
        </header>
      </div>
    )
  }
}

export default HeaderComponent
