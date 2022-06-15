import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cartDropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigage = useNavigate();

    const goToCheckoutHandler = () => {
        navigage('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
            }
            </CartItems>

            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;