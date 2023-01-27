import React, { useState,useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import ItemList from '../../components/Home/ItemList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
// import { data } from '../../config/data';

const Home = ({data}) => {
  const [items, setItems] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    setItems(data);
  }, [data]);
  
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for item by category
  const handleSearchResults = () => {
    const allItems = data;
    const filteredItems = allItems.filter((item) =>
      item.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setItems(filteredItems);
  };

  // Clear search and show all items
  const handleClearSearch = () => {
    setItems(data);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header title={"Blog"}/>

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* item List & Empty View */}
      {!items.length ? <EmptyList /> : <ItemList items={items} />}
      
    </div>
  );
};

export default Home;