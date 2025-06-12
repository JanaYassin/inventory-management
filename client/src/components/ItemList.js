import React from 'react';


export default function ItemList({ items, onDelete, onEdit }){
    return(
        <table>
            <thead>
        <tr>
          <th>Name</th><th>Qty</th><th>Category</th><th>Status</th><th>Actions</th>
        </tr>
      </thead>
      
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td style={{ color: item.quantity < 5 ? 'red' : 'inherit' }}>
            {item.quantity} {item.quantity < 5 && <strong>⚠️</strong>}
            </td>
            <td>{item.category}</td>
            <td>{item.status}</td>
            <td>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button className="delete" onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>

        </table>
    )

}