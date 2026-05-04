import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class LinkContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favLinks: [
        { name: "Cam's Github", url: "https://github.com/camunity" }
      ]
    }
  }

  removeLink = (index) => {
    let links = this.state.favLinks
    links.splice(index, 1)
    this.setState({ favLinks: links })
  }

  handleSubmit = (newLink) => {
    this.setState({ favLinks: [...this.state.favLinks, newLink] })
  }

  render() {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-pink-600 mb-2">My Favorite Links</h1>
        <p className="text-gray-500 mb-6">Add a new link with a name and URL to the table!</p>
        <Table favLinks={this.state.favLinks} removeLink={this.removeLink} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default LinkContainer