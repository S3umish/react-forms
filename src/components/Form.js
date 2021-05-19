import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div> 
  //     <form onSubmit={this.props.handleSubmit}>
  //       <input 
  //       type="text"
  //       name="firstName"
  //       onChange={this.props.handleChange} 
  //       value={this.props.formData.firstName}     
  //       />

  //       <input 
  //       type="text" 
  //       name="lastName" 
  //       onChange={this.props.handleChange} 
  //       value={this.props.formData.lastName}
  //       />
  //       <input type="submit"/>
  //     </form>
  //     {this.props.listOfSubmissions()}     
  //     </div>
  //   )
  // }
}

export default Form;