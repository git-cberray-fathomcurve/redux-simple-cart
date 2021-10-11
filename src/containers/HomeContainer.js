import Home from '../components/Home.js';
import { connect } from 'react-redux';
import {addToCart} from '../services/actions/action.js'
import {removeToCart} from '../services/actions/action.js'
//... import more actions here

const mapStateToProps = state=>({
    //data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:()=>dispatch(removeToCart())
    //... more action functions go here
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;