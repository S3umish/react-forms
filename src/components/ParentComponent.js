import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }

    
    // state ={
    //     firstName: "",
    //     lastName: "",
    //     submittedData: []
    // }
    /*handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
    console.log(event.target.name);
    console.log(event.target.value);
    };
    handleLastNameChange = (event) => {
        this.setState({
        lastName: event.target.value,
        });
    // };*/

    // handleChange = event => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }
    
    // handleSubmit = event => {
    //   event.preventDefault()
    //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    //   let dataArray = this.state.submittedData.concat(formData)
    //   this.setState({submittedData: dataArray})
    // }
  

    // listOfSubmissions = () => {
    //     return this.state.submittedData.map((data, index) => {
    //       return (
    //         <div key={index}>
    //           <span>{data.firstName}</span> <span>{data.lastName}</span>
    //         </div>
    //       );
    //     });
    //   };



      // handleSubmit = (event) => {
      //   event.preventDefault();
      //   // let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    
      //   this.setState({
      //     firstName: "",
      //     lastName: "",
      //     submittedData: [
      //       ...this.state.submittedData,
      //       {
      //         firstName: this.state.firstName,
      //         lastName: this.state.lastName,
      //       },
      //     ],
      //   });
      // };


    
    // render() {
    //     return (
    //         <div>
    //         <Form
    //         formData ={this.state}
    //         handleSubmit={this.handleSubmit}
    //         listOfSubmissions={this.listOfSubmissions}
    //         handleChange = {this.handleChange}
    //         />
    //         <DisplayData fromData={this.state}/>
    //         </div>
    //     )
    // }
}
