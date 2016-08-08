import { connect } from 'react-redux';
import ProductPage from '../components/ProductPage/ProductPage';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.filter(x => x.id === ownProps.params.id)[0]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const ProductPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage)

export default ProductPageContainer