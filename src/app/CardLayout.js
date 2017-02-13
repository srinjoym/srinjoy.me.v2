import React, { PropTypes } from 'react';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/CardLayout.scss';
import CardExpand from './CardExpand.js';
class CardLayout extends React.Component{
  render(){
    return(
        <div>
            <Row className={theme.row}>
            {this.props.data.map(expData => {
            return <Col key = {expData.id} xs={12} sm={6} md={6} lg={4}>
              <CardExpand image={require('../../img/'+expData.image)} title={expData.title} subtitle={expData.subtitle} text={expData.text} link={expData.link}/>
            </Col>;
            })}
            </Row>
        </div>
    );
  }
}
export default CardLayout;
