import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: black;
  box-shadow: 0 0 10px black;
  color: white;
  font-size: 1.2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  align-items: center;
  gap: 4rem;

  img {
    width: 100px;
    height: auto;
    border-radius: 0.5rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const RemoveButton = styled(StyledButtonSmall)`
  padding: 0.5rem 2rem;
`;

function CartItem({
  id,
  title = "Cart Item",
  count = 0,
  price = "???$",
  onIncrement,
  onDecrement,
  onCountChange,
  onRemove,
  imgSrc = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  imgAlt,
}) {
  return (
    <Wrapper>
      <img src={imgSrc} alt={imgAlt} />
      <FlexWrapper>
        <h3>{title}</h3>
        <h4>{price + "$"}</h4>
        <ButtonsWrapper>
          <StyledButtonSmall onClick={() => onDecrement(id)}>
            -
          </StyledButtonSmall>
          <StyledInput
            value={count}
            onChange={(e) => onCountChange({ id, value: e.target.value })}
            type="number"
            min={0}
          ></StyledInput>
          <StyledButtonSmall onClick={() => onIncrement(id)}>
            +
          </StyledButtonSmall>
        </ButtonsWrapper>
      </FlexWrapper>
      <RemoveButton onClick={() => onRemove(id)}>Remove Item</RemoveButton>
    </Wrapper>
  );
}

export default CartItem;
