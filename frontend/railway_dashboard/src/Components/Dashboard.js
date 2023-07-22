import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import {getTrains} from '../Services/railway-dashboard-services'

const Dashboard = ()=>{
    const [trainsData, setTrainsData] = useState([])
    const [renderComponent, setRenderComponent] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await getTrains()
            if(response){
                setTrainsData(response)
            }
            setRenderComponent(true);
        })()
    }, [])
    return <>
    <div style={{ 'width': '10  0%', 'textAlign': 'center' }}>
      <h1 style={{ 'marginTop': '30px', 'marginBottom': '30px' }}>
        <Badge bg="danger">Trains Data Dashboard</Badge>
      </h1>
      <Table striped responsive>
        <thead style={{ 'color': '#454140', 'fontWeight': '600' }}>
          <tr>
            <th>Train-Name</th>
            <th>Train-Number</th>
            <th>Departure-Time</th>
            <th>Seats-Available : AC</th>
            <th>Price : AC</th>
            <th>Seats-Available : Sleeper</th>
            <th>Price : Sleeper</th>
            <th>Delayed-By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!renderComponent ?
            <tr>
              <td colSpan="9">
                <span style={{ fontSize: "18px" }}>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
                </span>
              </td>
            </tr>
            : null}

          {renderComponent && trainsData.length === 0 ?
            <tr>
              <td colSpan="9">
                <span style={{ fontSize: "18px" }}>No Data Found...</span>
              </td>
            </tr>
            : null}
          {trainsData.map((details) => {
            return <tr>
              <td>{details.trainName}</td>
              <td>{details.trainNumber}</td>
              <td>{`${details.departureTime.Hours} : ${details.departureTime.Minutes} : ${details.departureTime.Seconds}`}</td>
              <td>{details.seatsAvailable.AC}</td>
              <td>{details.price.AC}</td>
              <td>{details.seatsAvailable.sleeper}</td>
              <td>{details.price.sleeper}</td>
              <td>{details.delayedBy}</td>
              <td>
                <Button type="button">View Details</Button>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
    </>
}

export default Dashboard;