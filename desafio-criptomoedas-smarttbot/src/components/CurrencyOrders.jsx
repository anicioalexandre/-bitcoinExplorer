import React from 'react';
import { connect } from 'react-redux';
import { Container, OrdersContainer } from '../styles/CurrencyOrders';
import OrdersTable from './OrdersTable';
import CurrencyInfo from './CurrencyInfo';
import { useParams } from 'react-router-dom';

const CurrencyOrders = ({ orders, actualCurrency }) => {
  const { currency } = useParams();
  return (
    <Container>
      <h2>Ordens: {currency}</h2>
      <OrdersContainer>
        <OrdersTable
          reverse={true}
          names={['VENDA', 'QTD']}
          orders={orders?.asks}
        />
        <OrdersTable names={['COMPRA', 'QTD']} orders={orders?.bids} />
        <CurrencyInfo />
      </OrdersContainer>
    </Container>
  );
};

const mapState = (state) => ({
  orders: state.orderBook.orders,
  actualCurrency: state.orderBook.actualCurrency,
});

export default connect(mapState)(CurrencyOrders);
