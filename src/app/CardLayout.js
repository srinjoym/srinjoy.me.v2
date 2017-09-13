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
            if(expData.lg_size){
               return <Col key = {expData.id} xs={12} sm={expData.sm_size} md={expData.sm_size} lg={expData.lg_size}>
                  <CardExpand image={require('../../img/'+expData.image)} title={expData.title} wide={true} subtitle={expData.subtitle} text={expData.text} link={expData.link} ext={expData.ext}/>
               </Col>;
            }else{
               return <Col key = {expData.id} xs={12} sm={6} md={6} lg={4}>
                  <CardExpand image={require('../../img/'+expData.image)} title={expData.title} subtitle={expData.subtitle} text={expData.text} link={expData.link} ext={expData.ext}/>
               </Col>;
            }

            })}
            </Row>
        </div>
    );
  }
}
export default CardLayout;
