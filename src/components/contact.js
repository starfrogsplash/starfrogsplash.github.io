import React, { Component } from "react";
import "../sass/main.css";
import axios from 'axios';
import email from '../private.js'

class Contact extends Component {

  state = {
    name: '',
    email: '',
    comment: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault();

    const url = `https://formsubmit.io/send/${email}`

    const postData = {
      email: "test@test.com",
      password: "password"
    };

    let axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      }
    };

    axios.post(url, postData,)
    .then(res => {
        console.log("res===", res);
        console.log(res.data);
    }).catch((e) => console.log("error:", e))
 
  }

  render() {
 
    return (
      <div className="contact">
        <form className="contact__form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <label>
            email:
            <input type="email" name="email" onChange={this.handleChange}/>
          </label>     
          <label>
            Comment:
             <textarea value={this.state.value} onChange={this.handleChange} name="comment" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
