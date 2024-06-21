import * as React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

function CovidTracker() {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [nationdetails, setNationdetails] = useState([]);

  useEffect(() => {
    handleFetchData();
    //oneway using promises
    // fetch("https://disease.sh/v3/covid-19/countries")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
  }, []);

  const handleFetchData = async () => {
    try {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectOption = (e) => {
    setSelectedOption(e);
    const nationArray = data.filter((item) => item.country === e.target.value);
    setNationdetails(nationArray);
  };
  return (
    <div>
      <Row>
        <Col md={12}>
          <h1>COVID-19 tracker</h1>
          <select onChange={handleSelectOption}>
            {data.map((i, k) => (
              <option key={k}>{i.country}</option>
            ))}
            <option value={selectedOption}>Select the country</option>
          </select>
        </Col>
      </Row>
      <div className="pt-3">
      {selectedOption ? (
      <Row>
          <Col md={3}>
            <Card border="secondary" style={{ width: "14rem", height: "8rem" }}>
              <Card.Body>
                <Card.Title>Corona Virus cases</Card.Title>
                {nationdetails.map((i, k) => (
                  <div key={k}>
                    <Card.Text>{i.cases}</Card.Text>
                    <Card.Text>{i.casesPerOneMillion} Total</Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card border="secondary" style={{ width: "14rem", height: "8rem" }}>
              <Card.Body>
                <Card.Title>Recovered</Card.Title>
                {nationdetails.map((i, k) => (
                  <div key={k}>
                    <Card.Text>{i.recovered}</Card.Text>
                    <Card.Text>{i.recoveredPerOneMillion} Total </Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card border="secondary" style={{ width: "14rem", height: "8rem" }}>
              <Card.Body>
                <Card.Title>Deaths</Card.Title>
                {nationdetails.map((i, k) => (
                  <div key={k}>
                    <Card.Text>{i.deaths}</Card.Text>
                    <Card.Text>{i.deathsPerOneMillion} Total </Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
      </Row>
    ):(
        <h6>Please select an option</h6>
    )}
</div>
      {/* <Container>
        <Row>
          <Col md={10}>
            <Row>
              <Col md={10}>
                <h1>COVID-19 tracker</h1>
              </Col>
              <Col md={2}>
                <select onChange={handleSelectOption}>
                  {data.map((i, k) => (
                    <option key={k}>{i.country}</option>
                  ))}
                  <option value={selectedOption}>Select the country</option>
                </select>
              </Col>
            </Row>
            <Row>
              <>
                <Col md={3}>
                  <Card
                    border="secondary"
                    style={{ width: "14rem", height: "8rem" }}
                  >
                    <Card.Body>
                      <Card.Title>Corona Virus cases</Card.Title>
                      {nationdetails.map((i, k) => (
                        <div key={k}>
                          <Card.Text>{i.cases}</Card.Text>
                          <Card.Text>{i.casesPerOneMillion} Total</Card.Text>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card
                    border="secondary"
                    style={{ width: "14rem", height: "8rem" }}
                  >
                    <Card.Body>
                      <Card.Title>Recovered</Card.Title>
                      {nationdetails.map((i, k) => (
                        <div key={k}>
                          <Card.Text>{i.recovered}</Card.Text>
                          <Card.Text>
                            {i.recoveredPerOneMillion} Total{" "}
                          </Card.Text>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card
                    border="secondary"
                    style={{ width: "14rem", height: "8rem" }}
                  >
                    <Card.Body>
                      <Card.Title>Deaths</Card.Title>
                      {nationdetails.map((i, k) => (
                        <div key={k}>
                          <Card.Text>{i.deaths}</Card.Text>
                          <Card.Text>{i.deathsPerOneMillion} Total </Card.Text>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              </>
            </Row>
          </Col>
          <Col md={2}>
            <Card
              border="secondary"
              style={{ width: "16rem", height: "12rem", marginLeft: "5rem" }}
            >
              <Card.Body>
                <Card.Title>Live Case by country</Card.Title>
                <Card.Title> world wide new cases </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h1>MAP Component</h1>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default CovidTracker;
