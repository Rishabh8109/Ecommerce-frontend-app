
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  TitleH4,
  TitleH6,
  TitleH2,
  SubTitle,
} from "../../../../styledComponent/GlobalStyle";
import {
  Header,
  Section,
  ProductCard,
  MainImage,
  ChildImage,
} from "../styledComponent";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link , Switch , Route} from "react-router-dom";
import Product from '../Product';
import BuySection from '../BuySection';

function Sub_Mobile_Section(props) {
  const { match } = props;
  
  const slug = match.params.slug;
  const BradcrambsUrl = match.path.split("/").slice(1, 3);

 
  
  return (
    <Row>
      <Col xs={2} className="p-2 bg-whitesmoke">
        <TitleH4 className="ml-3">Filter</TitleH4>
      </Col>
      <Col xs={10} className="bg-light h-100 p-2">
        <Header className="py-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
              <TitleH4 className="ml-3">Home</TitleH4>
            </Link>
            <Link to={`/${BradcrambsUrl[0]}`}>
              <TitleH4 className="ml-3">{BradcrambsUrl[0]}</TitleH4>
            </Link>
            <Link to={`${match.url}`}>
              <TitleH2 className="ml-3">{slug}</TitleH2>
            </Link>
          </Breadcrumbs>
          <TitleH6 className="ml-3 ">letest form Mi : Redmi GO</TitleH6>
          <TitleH2 className="ml-3">{slug} Mobiles : </TitleH2>
        </Header>
        <Switch>
             <Section className="my-2">
             <Route exact path={`${match.url}`}>
               <Product {...props}/>
             </Route>
             <Route path={`${match.url}/:slug`}>
               <BuySection />
             </Route>
             </Section>
        </Switch> 
      </Col>
    </Row>
  );
}

export default Sub_Mobile_Section;
