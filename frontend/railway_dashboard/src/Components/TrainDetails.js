import React, { useEffect, useState } from 'react';
import { Spinner, Button, Table, Card, CardBody, CardHeader } from 'reactstrap';
import { getTrain } from '../Services/railway-dashboard-services';
import {
  useParams
} from 'react-router-dom';

const TrainDetails = () => {
  const {
    trainNumber
  } = useParams();
  const [trainData, setTrainData] = useState([])
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getTrain(trainNumber)

      if (response) {
        setTrainData(response)
      }
      setRenderComponent(true);
      
    })()
  }, [])
  return <>
    <div style={{ 'width': '10  0%', 'textAlign': 'center' }}>
      <h1 style={{ 'marginTop': '30px', 'marginBottom': '30px' }}>
        Train-Details                                                     
      </h1>
      <Card>
        <CardBody>
          <p>Train-Name: {trainData.trainName}</p>
          <p>Train-Number: {trainData.trainNumber}</p>
          <p>Departure Time: {`${trainData.departureTime?.Hours} : ${trainData.departureTime?.Minutes} : ${trainData.departureTime?.Seconds}`}</p>
          <p>Seats-Available : AC: {trainData.seatsAvailable?.AC}</p>
          <p>Price : AC: {trainData.price?.AC}</p>
          <p>Seats-Available : Sleeper: {trainData.seatsAvailable?.sleeper}</p>
          <p>Price : Sleeper: {trainData.price?.sleeper}</p>
          <p>Delayed-By: {trainData.delayedBy}</p>
        </CardBody>
      </Card>
      {/* <Table striped responsive>
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
      </Table> */}
    </div>
  </>
}

export default TrainDetails;