import { React,Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

    constructor(props){
        super(props);
        this.state={
            ingredients:{
                salad:1,
                bacon:1,
                cheese:0,
                meat:2
            }
        }
    }



    render(){
        return(
           <Aux>
               <Burger ingredients={this.state.ingredients}/>
               <div>Burger control</div>
           </Aux>
        );
    }
}
export default BurgerBuilder;