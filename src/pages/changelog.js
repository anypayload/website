import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Callto from "../components/callto"

const ProductsPage = () => (
  <Layout className="bg-light">
    <SEO
      title="Changelog"
      description="Recent updates for your IoT payloads"
    />

    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h1>Changelog</h1>
            <h2 className="text-muted lead mt-4">
              Recent updates for your IoT payloads.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="bg-white py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <article className="py-5">
              <h4>Adeunis Field Test Device</h4>
              <h6 className="text-muted fw-light mb-4">July 15, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/adeunis/field-test-device/'>Adeunis Field Test Device</Link> decoder
                compatible with V1.2.0 and added the decoder to our decoder repository.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>NAS CM3021</h4>
              <h6 className="text-muted fw-light mb-4">June 24, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/nas/CM3021/'>NAS CM3021</Link> sensor
                compatible with FW ≥ 1.0.0 has been implemented and added to our decoders.
                The decoder is compatible with
                <ul>
                  <li>Wehrle Modularis meters</li>
                  <li>Bernhardt Modularis compatible meters</li>
                  <li>Maddalena CD SD PLUS EVO</li>
                  <li>Maddalena VTZ</li>
                  <li>Siemens WFW30/WFK30 series</li>
                  <li>Wasser-Geräte ECO type meters</li>
                  <li>WaterTech Polaris-S</li>
                </ul>
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>IMBuildings</h4>
              <h6 className="text-muted fw-light mb-4">May 29, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/imbuildings/imbuildings/'>IMBuildings</Link> sensor
                in the latest version with all variants including the Comfort Sensor CO2, People Counter, Buttons, Pulse Counter, and Tracker and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Elvaco CMi4110</h4>
              <h6 className="text-muted fw-light mb-4">March 25, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/elvaco/CMi4110/'>Elvaco CMi4110</Link> sensor
                in most recent version and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Teneo CO2 Stoplicht Sensor</h4>
              <h6 className="text-muted fw-light mb-4">January 26, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/teneo/co2-stoplicht/'>Teneo CO2 Stoplicht Sensor</Link>{' '}
                and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Bosch Parking Lot Sensor</h4>
              <h6 className="text-muted fw-light mb-4">November 11, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/bosch/parking-lot-sensor'>Bosch Parking Lot Sensor</Link>{' '}
                and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Sensoneo Single Sensor 3.0</h4>
              <h6 className="text-muted fw-light mb-4">November 11, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/sensoneo/single-sensor'>Sensoneo Single Sensor 3.0</Link>{' '}
                and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Senseair Explora CO<sub>2</sub> Sensor</h4>
              <h6 className="text-muted fw-light mb-4">November 11, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/senseair/explora-co2/'>Senseair Explora CO<sub>2</sub> Sensor</Link>{' '}
                and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>PNI PlacePod Vehicle Detection Sensor</h4>
              <h6 className="text-muted fw-light mb-4">November 11, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/pni/place-pod-vehicle-detection-sensor/'>PNI PlacePod Vehicle Detection Sensor</Link>{' '}
                and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Tabs Healthy Home Sensor</h4>
              <h6 className="text-muted fw-light mb-4">November 11, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/tabs/healthy-home-sensor/'>Tabs Healthy Home Sensor</Link>{' '}
                and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>CayenneLPP</h4>
              <h6 className="text-muted fw-light mb-4">November 11, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/cayenne/lpp'>CayenneLPP protocol</Link>{' '}
                and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Gavazzi</h4>
              <h6 className="text-muted fw-light mb-4">November 11, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/gavazzi/gavazzi/'>Gavazzi</Link>{' '}
                sensor and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Gavazzi R56</h4>
              <h6 className="text-muted fw-light mb-4">August 13, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/gavazzi/R56/'>Gavazzi R56</Link>{' '}
                parking sensor and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Ursalink AM100/AM102</h4>
              <h6 className="text-muted fw-light mb-4">July 22, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/ursalink/AM100/'>Ursalink AM100/AM102 series</Link>{' '}
                sensor and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Libelium Smart Parking (v1)</h4>
              <h6 className="text-muted fw-light mb-4">July 04, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/libelium/smart-parking-v1/'>Libelium Smart Parking (v1)</Link>{' '}
                sensor and added the decoder to our payload collection. The sensor
                can be used to detect available parking slots in smart cities.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Elvaco CMi4160</h4>
              <h6 className="text-muted fw-light mb-4">June 24, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/elvaco/CMi4160/'>Elvaco CMi4160</Link> sensor
                in most recent version 1.0 and added the decoder to our
                payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Adeunis Dry Contacts</h4>
              <h6 className="text-muted fw-light mb-4">May 11, 2020</h6>
              <p>
                We have implemented the <Link to='/payloads/adeunis/dry-contacts/'>Adeunis Dry Contacts</Link> sensor and added the
                decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Elsys</h4>
              <h6 className="text-muted fw-light mb-4">April 20, 2020</h6>
              <p>
                The popular <Link to='/payloads/elsys/'>Elsys</Link> sensor has been added to
                our payload collection.
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>

    <Callto />
  </Layout>
)

export default ProductsPage
