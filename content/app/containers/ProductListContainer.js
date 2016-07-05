import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const ProductListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)

export default ProductListContainer