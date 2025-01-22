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
              <h4>Elvaco CMi4140</h4>
              <h6 className="text-muted fw-light mb-4">January 22, 2025</h6>
              <p>
                We have implemented the decoder for Elvaco CMi4140 in version 1.3.
              </p>
            </article>
            <article className="py-5">
              <h4>Wehrle WECOUNT-S</h4>
              <h6 className="text-muted fw-light mb-4">July 2, 2024</h6>
              <p>
                We have implemented the decoder for Wehrle/Sontex WECOUNT-S in version 0.3.4.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Axioma Qalcosonic W1 Ultrasonic Water Meter</h4>
              <h6 className="text-muted fw-light mb-4">May 29, 2024</h6>
              <p>
                We have implemented the decoder for Axioma Qalcosonic W1 Ultrasonic Water Meter in V01.4, V01.8, and V01_20240201.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Integra TOPAS SONIC/RUBIN SONIC</h4>
              <h6 className="text-muted fw-light mb-4">May 21, 2024</h6>
              <p>
                We have implemented the decoder for Integra TOPAS SONIC/RUBIN SONIC in TOPAS SONIC V 3.X and RUBIN SONIC V 0.X10.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Sagemcom WM-L Siconia Water Meter</h4>
              <h6 className="text-muted fw-light mb-4">May 7, 2024</h6>
              <p>
                We have implemented the decoder for Sagemcom WM-L Siconia Water Meter in V22.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Diehl HRL-c-G3</h4>
              <h6 className="text-muted fw-light mb-4">March 11, 2024</h6>
              <p>
                We have implemented the decoder for Diehl HRL-c-G3 according to specification version 1.7 2020.08.18.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>MClimate Wireless Thermostat</h4>
              <h6 className="text-muted fw-light mb-4">January 25, 2024</h6>
              <p>
                We have implemented the decoder for MClimate Wireless Thermostat.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Socomec Diris-B-10L</h4>
              <h6 className="text-muted fw-light mb-4">November 28, 2023</h6>
              <p>
                We have implemented the decoder for Socomec Diris-B-10L.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Adeunis Temp</h4>
              <h6 className="text-muted fw-light mb-4">November 28, 2023</h6>
              <p>
                We have implemented the decoder for Adeunis Temp and Temp2S.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>VA-GM-2 Vega-Absolute GM-2</h4>
              <h6 className="text-muted fw-light mb-4">November 11, 2023</h6>
              <p>
                We have implemented the decoder for VA-GM-2 Vega-Absolute GM-2.
                The decoder is currently compatible with FW ≥ 0.1.0.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Fludia BelSenso FM432g Gas Tracker</h4>
              <h6 className="text-muted fw-light mb-4">November 2, 2023</h6>
              <p>
                We have implemented the decoder for Fludia BelSenso FM432g Gas Tracker.
                The decoder is currently compatible with Document Ref FLD10068 version 1.0.7.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>NAS LoRaWAN™ BK-G PULSE READER CM3060</h4>
              <h6 className="text-muted fw-light mb-4">October 22, 2023</h6>
              <p>
                We have implemented the decoder for NAS LoRaWAN™ BK-G PULSE READER CM3060.
                The decoder is currently compatible with FW ≥ 0.1.0.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Milesight EM300 series</h4>
              <h6 className="text-muted fw-light mb-4">January 21, 2022</h6>
              <p>
                We have implemented the <Link to='/payloads/milesight/AM300/'>Milesight AM300 series</Link> decoder
                including both sensors AM307 and AM319 in most recent version and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Milesight EM500</h4>
              <h6 className="text-muted fw-light mb-4">December 16, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/milesight/EM500/'>Milesight EM500</Link> sensor
                in most recent version and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Decentlab DL-SHT35</h4>
              <h6 className="text-muted fw-light mb-4">August 12, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/decentlab/DL-SHT35/'>Decentlab DL-SHT35</Link> decoder.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Adeunis Field Test Device</h4>
              <h6 className="text-muted fw-light mb-4">July 15, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/adeunis/field-test-device/'>Adeunis Field Test Device</Link> decoder
                compatible with V1.2.0 and added the decoder to our decoder repository.
              </p>
            </article>
            <article className="py-5">
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
              <h4>Elvaco CMi4180</h4>
              <h6 className="text-muted fw-light mb-4">October 5, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/elvaco/CMi4180/'>Elvaco CMi4180</Link> sensor
                in most recent version and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Decentlab DL-SHT35</h4>
              <h6 className="text-muted fw-light mb-4">August 12, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/decentlab/DL-SHT35/'>Decentlab DL-SHT35</Link> decoder.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Adeunis Field Test Device</h4>
              <h6 className="text-muted fw-light mb-4">July 15, 2021</h6>
              <p>
                We have implemented the <Link to='/payloads/adeunis/field-test-device/'>Adeunis Field Test Device</Link> decoder
                compatible with V1.2.0 and added the decoder to our decoder repository.
              </p>
            </article>
            <article className="py-5">
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
            <article className="py-5">
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
                in versions 1.0 and 1.4 and added the decoder to our payload collection.
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
