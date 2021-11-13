import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const [product, setProduct] = useState({});

    let history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...product };
        newLoginData[field] = value;
        setProduct(newLoginData);
    }

    const handleAddProduct = e => {
        fetch('https://sleepy-caverns-13881.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Item Added Successfully!", "success");
                    e.target.reset();
                    history.push('/explore');
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <div className="login-card">
                <h3 className="text-center">Add Product</h3>
                <form onSubmit={handleAddProduct} className="mt-4 d-flex flex-column">
                    <TextField
                        onChange={handleOnChange}
                        name="name"
                        sx={{ width: '100%', marginTop: 3 }}
                        type="text" id="outlined-basic"
                        label="Product Name" variant="outlined" />
                    <TextField
                        onChange={handleOnChange}
                        sx={{ width: '100%', marginTop: 3 }}
                        name="description"
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                    />
                    <TextField
                        onChange={handleOnChange}
                        name="price"
                        sx={{ width: '100%', marginTop: 3 }}
                        type="text" id="outlined-basic"
                        label="Product Price" variant="outlined" />
                    <TextField
                        onChange={handleOnChange}
                        name="img"
                        sx={{ width: '100%', marginTop: 3 }}
                        type="url" id="outlined-basic"
                        label="Photo URL" variant="outlined" />
                    <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Add Product</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;