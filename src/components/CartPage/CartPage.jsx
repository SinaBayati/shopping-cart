import CartItem from "../CartItem/CartItem";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #111;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledH2 = styled.h2`
  color: white;
  font-size: 4rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const CheckoutButton = styled.button`
  background-color: white;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1.3rem;
  transition: box-shadow 0.2s ease;
  border: none;

  &:hover {
    box-shadow: 0 0 10px white;
    cursor: pointer;
  }
`;

function CartPage() {
  return (
    <Wrapper>
      <StyledH2>Cart Page</StyledH2>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CheckoutButton>Checkout</CheckoutButton>
    </Wrapper>
  );
}

export default CartPage;
