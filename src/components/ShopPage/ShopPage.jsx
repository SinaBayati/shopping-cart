import ShopItem from "../ShopItem/ShopItem";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: white;
  font-size: 4rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const GridWrapper = styled.div`
  background-color: #111;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 0;
`;

function ShopPage() {
  return (
    <>
      <StyledH2>Shop Page</StyledH2>
      <GridWrapper>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
        <ShopItem></ShopItem>
      </GridWrapper>
    </>
  );
}

export default ShopPage;
