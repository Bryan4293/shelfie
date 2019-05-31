import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgUrl:''
        }
        this.onChange= this.onChange.bind(this)
        this.baseState = this.state
        this.resetForm= this.resetForm.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    resetForm(){
        this.setState(this.baseState)
    }


    render (){
        let {name, price, imgUrl}= this.state
        return(
            <div>
                <h1>Form</h1>
                <p>Image URL:</p>
                    <input name='imgUrl' type='url'  value={imgUrl} onChange={(e) => this.onChange(e)}></input>
                <p>Product Name:</p>
                    <input name='name'  value={name} onChange={(e) => this.onChange(e)}></input>
                <p>Price:</p>
                    <input name='price' type='number' value={price} onChange= {(e) => this.onChange(e)}></input>
                <div>
                    <button onClick={this.resetForm}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }

}

export default Form;