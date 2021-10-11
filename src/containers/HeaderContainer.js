import Header from '../components/Header.js';
import { connect } from 'react-redux';
//import {addToCart} from '../services/actions/action.js'
//... import more actions here

const mapStateToProps = state=>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
//     addToCartHandler:data=>dispatch(addToCart(data))
//     //... more action functions go here
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
//export default Home;