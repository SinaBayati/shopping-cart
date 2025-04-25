import { useOutletContext } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import styled from "styled-components";
import { useState } from "react";

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
  const { data, cart, setCart } = useOutletContext();

  function handleCountChange({ id, value: newValue }) {
    const isInCart = cart.find((c) => c.id === id) ? true : false;

    if (isInCart) {
      const newCart = cart.map((c) =>
        c.id === id ? { ...c, count: newValue } : c
      );
      setCart(newCart);
    }
  }

  function handleIncrement(id) {
    const newCart = cart.map((c) =>
      c.id === id ? { ...c, count: Number(c.count) + 1 } : c
    );
    setCart(newCart);
  }

  function handleDecrement(id) {
    const newCart = cart.map((c) =>
      c.id === id ? { ...c, count: decrement(c.count, 1) } : c
    );
    setCart(newCart);
  }

  function handleRemove(id) {
    const newCart = cart.filter((c) => c.id !== id);
    setCart(newCart);
  }

  function decrement(number, decrementValue) {
    const result = number - decrementValue;
    if (result < 0) return 0;
    return result;
  }

  function calculatePrice(id, count) {
    const selectedItemPrice = data.find((d) => d.id === id).price;
    return selectedItemPrice * count;
  }

  function calculateTotal(cart) {
    let total = 0;
    for (const c of cart) {
      total += calculatePrice(c.id, c.count);
    }
    return total.toFixed(2);
  }

  return (
    <Wrapper>
      <StyledH2>Cart Page</StyledH2>
      {cart.map((c) => {
        const selectedItem = data.find((d) => d.id === c.id);
        return (
          <CartItem
            key={c.id}
            id={c.id}
            title={selectedItem.title}
            price={selectedItem.price}
            count={c.count}
            imgSrc={selectedItem.image}
            imgAlt={selectedItem.title}
            onCountChange={handleCountChange}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
            onIncrement={handleIncrement}
          />
        );
      })}
      <p style={{ color: "white", fontWeight: "bold" }}>
        Total: {calculateTotal(cart)}
      </p>
      <CheckoutButton>Checkout</CheckoutButton>
    </Wrapper>
  );
}

export default CartPage;
