import React, { Component } from "react";
import "../sass/main.css";
import axios from "axios";
import { email, token } from "../private.js";
import { Button, Form, Message } from "semantic-ui-react";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    comment: "",
    submitted: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    // console.log(this.state)
    //   e.preventDefault();

    //   const url = `https://formsubmit.io/send/${email}`

    //   const proxy = `https://crossorigin.me/https://formsubmit.io/send/${email}`

    //   const postData = {
    //     email: "test@test.com",
    //     password: "password"
    //   };

    //   let axiosConfig = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       "Accept": 'application/json',
    //     }
    //   };

    //  const result = await axios.post(url, postData)
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="contact" id="Contact">
        <LightSpeed left duration={1000} delay={100}>
          <div id="Contact" className="contact__title">
            Contact
            <LightSpeed left duration={1200} delay={600}>
              <div className="contact__title__line">&nbsp;</div>
            </LightSpeed>
          </div>
        </LightSpeed>

        <Fade left duration={800} delay={400}>
            <p className="contact__details">
              You can contact me by filling in the comment section below..
            </p>
      </Fade>

        {
          <Fade left duration={1000} delay={100}>
            <Form
              success={this.state.submitted}
              target="_blank"
              method="POST"
              action={`https://formsubmit.io/send/${token}`}
              className="contact__form"
              onSubmit={this.handleSubmit}
            >
              <Form.Field required>
                <label className="label">Enter Name</label>
                <input placeholder="Enter Name" required />
              </Form.Field>
              <input
                name="_formsubmit_id"
                type="text"
                style={{ display: "none" }}
              />

              <Form.Field required>
                <label>Email</label>
                <input
                  placeholder="Enter Email"
                  name="email"
                  type="email"
                  id="email"
                />
              </Form.Field>

              <Form.Field required>
                <Form.TextArea
                  required
                  label="Comment"
                  placeholder="Tell us more about you..."
                  required
                />
              </Form.Field>
              <Message
                success
                header="Form Submitted"
                content="Thanks, I'll get back to you soon!"
              />
              <Button positive={this.state.submitted} type="submit">
                Submit
              </Button>
            </Form>
          </Fade>
        }
      </div>
    );
  }
}

export default Contact;
