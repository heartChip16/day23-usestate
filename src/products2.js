import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Products2() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        function getAllCategories() {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res => res.json())
                .then(json => { setCategories(json); console.log("json categories: ", json) })
        };


        getAllCategories();
    }, [])

    useEffect(() => {
        function getProducts() {
            // products.map(product => {
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                .then(res => res.json())
                .then(json => { console.log("json products: ", json); setProducts(json); });
            // products = [...products, product];
        }
        if (selectedCategory) {
            console.log("selectedCategory: ", selectedCategory)
            getProducts();
        }

    }, [selectedCategory])

    function handleChange(e) {
        setSelectedCategory(e.target.value.toLowerCase());
    }

    return (
        <div>
            <select name="categories" id="categories" onChange={handleChange}>
                {categories.map(category => <option key={category} value={category}>{category.toUpperCase()}</option>)}
            </select>
            <section>
                <h1 className="text-capitalize m-5">{selectedCategory}</h1>
                <div className='container d-flex flex-row'>
                    {products.map(prod => <section key={prod.id}>
                        <div className="m-5 p-2">
                            <div>
                                {/* <img style={{height: 200, width: 200, objectFit: "contain"}}/> src={} etc. */}
                                <img src={prod.image} alt={prod.title} className="image square p-2 rounded border border-1" />
                            </div>
                            <div>
                                <p className="fw-bold">{prod.title}</p>
                                <p className="fw-bold">${prod.price}</p>
                                <p>{prod.description}</p>

                            </div>
                        </div>

                    </section>)}
                </div>
            </section>
        </div>
    )
}
export default Products2
