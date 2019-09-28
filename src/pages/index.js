import React from "react"
import { Row, Container } from "react-bootstrap"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

// import LinkHolder from "../components/Counter/OriginalContent/LinkHolder"
// import Counter from "../components/Counter/old/OriginalCounter"
// import TestCounterPrep from "../components/Counter/old/Test"
import CounterDeliver from "../components/Counter/CounterPresenter"
import AddCounterFrame from "../components/Counter/AddCounter"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      {/*
          <Row className="justify-content-center my-3">
            <Col md="6">
              <LinkHolder />
            </Col>
          </Row>
      */}
      <Row className="counter-holder justify-content-center my-3">
        {/*
          <Counter />
          <TestCounterPrep />
        */}
        {/* <UseForm /> input form */}
        <AddCounterFrame />
        <CounterDeliver />
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
