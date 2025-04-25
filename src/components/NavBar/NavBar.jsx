import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import useData from "../../useData";

const Wrapper = styled.div`
  margin: 0;
  padding: 0.5rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0.5rem;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  ${(p) => p.active && "background-color: #111;"}
  display: inline-block;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #111;
  }
`;

const CartCount = styled.span`
  display: inline-block;
  padding: 0.1rem 0.3rem;
  border-radius: 50%;
  background-color: white;
  color: black;
`;

function NavBar() {
  const [activePage, setActivePage] = useState("home");
  const [cart, setCart] = useState([]);
  const [data, error] = useData("https://fakestoreapi.com/products");

  if (error) console.error(error);

  return (
    <>
      <Wrapper>
        <Logo>WallCart</Logo>
        <Ul>
          <StyledLink
            active={activePage === "home"}
            onClick={() => setActivePage("home")}
            to={"home"}
          >
            Home
          </StyledLink>
          <StyledLink
            active={activePage === "shop"}
            onClick={() => setActivePage("shop")}
            to={"shop"}
          >
            Shop
          </StyledLink>
          <StyledLink
            active={activePage === "cart"}
            onClick={() => setActivePage("cart")}
            to={"cart"}
          >
            Cart <CartCount>{cart.length}</CartCount>
          </StyledLink>
        </Ul>
      </Wrapper>
      <Outlet context={{ setActivePage, data, cart, setCart }} />
    </>
  );
}

export default NavBar;
