import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap'
import employeeService from "../services/employee.service";
import productSevicer from '../services/employee.service'
const AddEmployee = () => {
    const [productName, setName] = useState('');
    const [productCity, setCity] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    const saveProduct = (e) => {
        e.preventDefault();
        const productId = id;
        const product = { productId, productName, productCity, };
        if (id) {
            //update recod
            productSevicer.update(product)
                .then(response => {
                    //console.log('Update successfully', response.data);
                    toast.success("Update successfully");
                    navigate('/');
                })
                .catch(error => {
                    toast.error("Update eror");
                    //console.log('Something went wrong', error);
                });
        } else {
            //create recod
            productSevicer.create(product)
                .then(response => {
                    //console.log('Added successfully', response.data);
                    toast.success("Create successfully");
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    }
    useEffect(() => {
        if (id) {
            employeeService.get(id)
                .then(product => {
                    //console.log('Get data to vidw detail: ', product.data);
                    setName(product.data.productName);
                    setCity(product.data.productCity);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <div className="container">
            <h1>Add New Product</h1>
            <hr></hr>
            <div className="">
                <form>
                    <div className="form-group col-4 mb-4">
                        <input value={productName}
                            placeholder="Enter name"
                            className="form-control"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4 mb-4">
                        <input value={productCity}
                            placeholder="Enter city"
                            className="form-control"
                            id="city"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="btn btn-success btn-lg"
                            onClick={(e) => {
                                saveProduct(e)
                            }}
                        >Save</button>
                    </div>
                </form>
            </div>
            <hr></hr>
            <Link to="/" className="">Back to list</Link>
        </div>
    );
}

export default AddEmployee;