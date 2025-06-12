import React, { useState, useEffect } from 'react';

const initialForm = {
    name: '',
    quantity: '',
    category: '',
    status: 'in stock',
};

export default function ItemForm({ selectedItem, onSave}) {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (selectedItem) setForm(selectedItem);
    }, [selectedItem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => {
          let updated = { ...prev, [name]: value };
      
          if (name === 'name') {
            const suggestions = autoFillSuggestions(value);
            updated = { ...updated, ...suggestions };
          }
      
          return updated;
        });
      };
      

    const autoFillSuggestions = (name) => {
        const lower = name.toLowerCase();
        if (lower.includes("milk") || lower.includes("bread") || lower.includes("cheese")) {
          return { category: "Food", status: "in stock" };
        } else if (lower.includes("screwdriver") || lower.includes("hammer")) {
          return { category: "Tools", status: "low stock" };
        } else if (lower.includes("printer") || lower.includes("laptop")) {
          return { category: "Electronics", status: "ordered" };
        } else {
          return {};
        }
      };
      

    const handleSubmit = e => {
        e.preventDefault();
        onSave(form);
        setForm(initialForm);
    };

    return (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
          <input style={{ marginLeft: '15px' , padding: '10px', font: '14px'}} name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
          <select name="status" value={form.status} onChange={handleChange}>
            <option>in stock</option>
            <option>low stock</option>
            <option>ordered</option>
            <option>discontinued</option>
          </select>
          <button type="submit">{selectedItem ? "Update" : "Add"} Item</button>
        </form>
      );
}
