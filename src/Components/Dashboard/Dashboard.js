import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {

    render (){
        let {name, price, imgUrl}= this.props
        return(
            <div>
                <h1>Dashboard</h1>
                <Product/>
            </div>
        )
    }

}

export default Dashboard;