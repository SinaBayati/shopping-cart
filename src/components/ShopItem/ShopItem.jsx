import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 10px black;
  box-sizing: border-box;
  width: 250px;
  padding: 0 0 1.5rem;

  img {
    width: 100%;
    height: 400px;
    object-fit: fill;
    object-position: center;
  }
`;

const StyledInput = styled.input`
  width: 4rem;
  background-color: #111;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const StyledButtonSmall = styled.button`
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background-color: #111;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px white;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledButtonBig = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;

  &:hover {
    box-shadow: 0 0 5px white;
  }
`;

function ShopItem({
  id,
  imgSrc = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  imgAlt,
  title = "Shop Item",
  onAdd,
  price,
}) {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    if (count >= 1) setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleAddToCart(count) {
    onAdd({ id, count });
    setCount(0);
  }

  return (
    <Card>
      <img style={{}} src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <ButtonsWrapper>
        <StyledButtonSmall onClick={handleDecrement}>-</StyledButtonSmall>
        <StyledInput
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          type="number"
          min={0}
        ></StyledInput>
        <StyledButtonSmall onClick={handleIncrement}>+</StyledButtonSmall>
      </ButtonsWrapper>
      <StyledButtonBig onClick={handleAddToCart}>Add to cart</StyledButtonBig>
    </Card>
  );
}

export default ShopItem;
