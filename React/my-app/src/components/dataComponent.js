import React, { useState, useEffect } from 'react';
import '../App.css'

function DataComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try{
            const response = await fetch('http://localhost:8000/api/data/');
            const jsonData = await response.json();

            setData(jsonData.medical);
        } catch(error){
            console.log('Error fetching data', error);
        }
    } 

    return(
        <div className='tableDiv'>
            <div className='headerDiv'>
            <h1>
                Disease prediction based on bloodwork
            </h1>
            </div>
             <table className='Table'>
                <thead>
                    <tr>
                        <th>Disease</th>
                        <th>HbA1c</th>
                        <th>Triglycerides</th>
                        <th>BMI</th>
                        <th>LDL Cholesterol</th>
                        <th>HDL Cholesterol</th>
                        <th>Hematocrit</th>
                        <th>Insulin</th>
                        <th>C-reactive Protein</th>
                        <th>Creatinine</th>
                        <th>AST</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => (
                            <tr key={item.i}>
                            <td key={item.i}>{item.Disease}</td>
                            <td key={item.i}>{item.HbA1c.toFixed(5)}</td>
                            <td key={item.i}>{item.Triglycerides.toFixed(5)}</td>
                            <td key={item.i}>{item.BMI.toFixed(5)}</td>
                            <td key={item.i}>{item.LDLCholesterol.toFixed(5)}</td>
                            <td key={item.i}>{item.HDLCholesterol.toFixed(5)}</td>
                            <td key={item.i}>{item.Hematocrit.toFixed(5)}</td>
                            <td key={item.i}>{item.Insulin.toFixed(5)}</td>
                            <td key={item.i}>{item.Hemoglobin.toFixed(5)}</td>
                            <td key={item.i}>{item.Creatinine.toFixed(5)}</td>
                            <td key={item.i}>{item.AST.toFixed(5)}</td>
                            </tr>
                        ))
                    }
                </tbody>
             </table>
        </div>
    );

}

export default DataComponent;