import { useOutletContext } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: white;
  font-size: 4rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 0 4rem;
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
  const { data, cart, setCart } = useOutletContext();

  function handleAdd({ id, count }) {
    const isInCart = cart.find((c) => c.id === id) ? true : false;

    if (isInCart) {
      const newCart = cart.map((c) =>
        c.id === id ? { ...c, count: Number(c.count) + count } : c
      );
      setCart(newCart);
    } else {
      setCart([...cart, { id, count }]);
    }
  }

  return (
    <>
      <StyledH2>Shop Page</StyledH2>
      <GridWrapper>
        {data.map((d) => (
          <ShopItem
            key={d.id}
            id={d.id}
            imgSrc={d.image}
            imgAlt={d.title}
            title={d.title}
            price={d.price}
            onAdd={handleAdd}
          ></ShopItem>
        ))}
      </GridWrapper>
    </>
  );
}

export default ShopPage;
