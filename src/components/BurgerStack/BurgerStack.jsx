import { useState } from 'react';

function BurgerStack({ setIngredients } {
    const [burgerStack, setBurgerStack] = useState(" ");
})

    const handleSubmit = (event) => {
        event.preventDefault();
        setBurgerStack((prevBurgerStack) => [...prevBurgerStack, newBurgerStack]);
        setNewBurgerStack(" ");
    };

    const handleChange = (event) => {
        setNewBurgerStack(event.target.value);
    };

const BurgerStack = (props) => {
    return <ul>// map through props.ingredients</ul>;
  };
  
  export default BurgerStack;
  