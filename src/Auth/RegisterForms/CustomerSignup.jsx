import React, { Fragment} from 'react';
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import CustomerForm from './CustomerForm';



const CustomerSignup = () => {
    

    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <Row className='mx-0'>
                    <Col xs="12" className='px-0'>
                        <div className="login-card auth-login">
                            
                            <div className="login-main1 login-tab1 login-main">
                                
                                <TabContent  className="content-login">
                                    <TabPane className="fade show">
                                        <CustomerForm  />
                                    </TabPane>
                                </TabContent >
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default CustomerSignup;