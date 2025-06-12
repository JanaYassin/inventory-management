
import './App.css';
import React, { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  

  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/api/items');
    const data = await res.json();
    setItems(data);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSave = async (item) => {
    if (item.id) {
      await fetch(`http://localhost:5000/api/items/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
    } else {
      await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
    }
    setSelectedItem(null);
    fetchItems();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/items/${id}`, {
      method: 'DELETE'
    });
    fetchItems();
  };

  return (
    <div className="container">
      <h1>Inventory Management</h1>
      <ItemForm selectedItem={selectedItem} onSave={handleSave} />


     <div className="search-box">
      <input
          type="text"
          placeholder="Search by name, category, or status"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
          />
          </div>
      <ItemList items={filteredItems} onDelete={handleDelete} onEdit={setSelectedItem} />
    </div>
  );
}
export default App;
