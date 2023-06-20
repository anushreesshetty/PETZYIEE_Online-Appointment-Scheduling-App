import React from 'react';
import Table from 'react-bootstrap/Table';
const AppointMentShorList = ({ appointment }) => {
    return (
        <div className='card shadow'>
            <Table striped responsive>
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Pet Type</th>
                    <th className="text-secondary" scope="col">Pet Breed</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Pet Age</th>


                </tr>
            </thead>
            <tbody>
                {appointment && appointment?.map((item, index) =>
                    <tr key={index + 200}>
                        <td>{index + 1}</td>
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.pettype}</td>
                        <td>{item.petbreed}</td>
                        <td>{item.service}</td>
                        <td>{item.age}</td>
                        <td className="btn-group">
                            <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Not Visited</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
        </div>
    );
};

export default AppointMentShorList;