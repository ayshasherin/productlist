import { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

class ProductList extends Component{
    constructor() {
        super();
        this.state = {
            productList: [] // default empty array
        }
    }
    // addTodo: add a new task inside the state
    addProduct = (event)=> {
        event.preventDefault(); // stop default behaviour
        //console.log(event.target.taskTitle.value);
        const data = event.target,
        newProduct = {
            product_name: data.product_name.value
           
        }
        //console.log(newTodo);
        // updating the array but not re-rendering
        this.state.productList.push(newProduct);
        // updating state and re-render
        this.setState({
            productList: this.state.productList
        })
    }
    // delete todo from the array
    deleteProduct = (event)=> {
        // splice(indexNumber, howmanyTodelete)
        this.state.productList.splice(event.target.value, 1)
        this.setState({
            productList: this.state.productList
        })
    }
    render() {
        console.log(this.state.productList)
        return(
            <>
            <Form onSubmit={this.addProduct}>
                <Form.Group controlId="formBasicProductName">
                    <Form.Label>Enter the data : </Form.Label>
                    <Form.Control type="text" placeholder="Enter the string" name="product_name" onChange={this.changeProduct}/>
                </Form.Group>
                
                
                <Button type="submit" className="btn btn-success">
                    Submit
                </Button>
            </Form>

            <ListGroup>
                {
                    this.state.productList.map((product, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="success">
                                 {product.product_name}
                                 <Button type="button" variant="danger" onClick={this.deleteProduct} value={index}>
                                     Delete
                                 </Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </>
        )
    }
}

export default ProductList;