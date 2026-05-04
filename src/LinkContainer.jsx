import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class LinkContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favLinks: [],
      editingLink: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => this.setState({ favLinks: data }))
  }

  removeLink = (id) => {
    fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' })
      .then(() => {
        this.setState({ favLinks: this.state.favLinks.filter(link => link.id !== id) })
      })
  }

  handleSubmit = (newLink) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newLink.name, email: newLink.url })
    })
      .then(res => res.json())
      .then(created => {
        this.setState({ favLinks: [...this.state.favLinks, created] })
      })
  }

  handleEdit = (link) => {
    this.setState({ editingLink: link })
  }

  handleUpdate = (updatedLink) => {
    fetch(`http://localhost:3000/users/${updatedLink.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: updatedLink.name, email: updatedLink.email })
    })
      .then(res => res.json())
      .then(updated => {
        this.setState({
          favLinks: this.state.favLinks.map(l => l.id === updated.id ? updated : l),
          editingLink: null
        })
      })
  }

  render() {
    const { editingLink } = this.state
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-pink-600 mb-2">My Favorite Links</h1>
        <p className="text-gray-500 mb-6">Add a new link with a name and URL to the table!</p>
        <Table favLinks={this.state.favLinks} removeLink={this.removeLink} handleEdit={this.handleEdit} />

        {editingLink ? (
          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <h2 className="font-bold text-lg mb-2">Edit Link</h2>
            <input
              className="border p-2 w-full mb-2 rounded"
              value={editingLink.name}
              onChange={e => this.setState({ editingLink: { ...editingLink, name: e.target.value }})}
            />
            <input
              className="border p-2 w-full mb-2 rounded"
              value={editingLink.email}
              onChange={e => this.setState({ editingLink: { ...editingLink, email: e.target.value }})}
            />
            <button onClick={() => this.handleUpdate(editingLink)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
            <button onClick={() => this.setState({ editingLink: null })} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        ) : (
          <Form handleSubmit={this.handleSubmit} />
        )}
      </div>
    )
  }
}

export default LinkContainer