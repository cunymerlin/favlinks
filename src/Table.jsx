import React, { Component } from 'react'

class Table extends Component {
  render() {
    const { favLinks, removeLink, handleEdit } = this.props
    return (
      <table className="w-full text-left border-collapse mb-8">
        <thead>
          <tr className="bg-pink-600 text-white">
            <th className="p-3">Name</th>
            <th className="p-3">URL</th>
            <th className="p-3">Edit</th>
            <th className="p-3">Remove</th>
          </tr>
        </thead>
        <tbody>
          {favLinks.map((link) => (
            <tr key={link.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">{link.name}</td>
              <td className="p-3">
                <a href={link.email} target="_blank" className="text-pink-500 hover:underline">{link.email}</a>
              </td>
              <td className="p-3">
                <button
                  onClick={() => handleEdit(link)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </td>
              <td className="p-3">
                <button
                  onClick={() => removeLink(link.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table