import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import employeeService from "../services/employee.service";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        employeeService.getAll()
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    })
    const handleDelete = (id) => {
        employeeService.remove(id)
            .then(response => {
                toast.success("Delete successfully");
            })
            .catch(error => {
                toast.success("Something went wrong");
            })
    }
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (employees) => {
        const ws = XLSX.utils.json_to_sheet(employees);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileExtension);
    };

    return (
        <div className="container">
            <h3 className="text-center">List of Product</h3>
            <hr></hr>
            <div className="">
                <Link to="/add" className=" btn btn-primary btn-sm ">Add Product</Link>{' '}
                <button className="btn btn-primary btn-sm" onClick={(e) => exportToCSV(employees)}>Export to xlsx</button>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-primary btn-sm float-end"
                    table="table-to-xls"
                    filename="list-of-product"
                    sheet="sheet"
                    buttonText="Export to xls"
                />
            </div>
            <hr></hr>
            <div>
                <table className="table table-striped table-bordered table-hover" id="table-to-xls">
                    <thead className="">
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Balance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            < tr key={employee.productId} >
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{employee.productId}</td>
                                <td>{employee.productName}</td>
                                <td>{employee.productCity}</td>
                                <td>
                                    <Link className="btn btn-info btn-sm ms-auto" to={`/product/detail/${employee.productId}`}>Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm ms-auto"
                                        onClick={() => { if (window.confirm('Are you sure delete this item?')) handleDelete(employee.productId) }}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default EmployeesList;