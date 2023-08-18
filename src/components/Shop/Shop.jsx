import React from 'react'
import "./Shop.scss"
import SearchBar from '../SearchBar/SearchBar';
// import { useState } from 'react'
import products from "../Products/products";
import Product from "../Products/simpleProduct";
import Begin from '../Begin/Begin';
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";
import { useState, useEffect } from 'react';

// const[searchInput, seSearchInput] = useState("");
const Shop = () => {
    const [books, setBooks] = useState([]);
    const handleDataFromChild = (data) => {
        console.log("Parent Child connection established");
        setBooks(data);
        console.log(data);
      };
    return <>
    <Begin names = "Shop"/>
    
    <div className="container">
    
        <div className='shopImage'>
            <h1>Shop Grid</h1>
        </div>
        <div className="searchBar">
            <SearchBar onDataFromChild = {handleDataFromChild}></SearchBar>
            <FormControl>

            <InputLabel>Filter</InputLabel>

            <Select 
                sx={{
                width: 250,
                height: 50,
                }}
            >
                <MenuItem value={1}>Sort By Price: Low To High</MenuItem>
                <MenuItem value={2}>Sort By Price: High To Low</MenuItem>
                <MenuItem value={3}>Sort By Quantity: Low To High</MenuItem>
                <MenuItem value={4}>Sort By Quantity: High To Low</MenuItem>
            </Select>
            </FormControl>

        </div>
        <div className='products'>{books.map((book) => <Product data = {book}></Product> )}</div>
        </div> 
    </>

}

export default Shop;