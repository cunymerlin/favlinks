import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      url: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({ name: '', url: '' })
  }

  render() {
    return (
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Add New</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Link Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="e.g. Google"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Link URL</label>
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="e.g. https://google.com"
          />
        </div>
        <button
          onClick={this.handleSubmit}
          className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 font-medium"
        >
          Submit
        </button>
      </div>
    )
  }
}

export default Form