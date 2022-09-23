import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Shop = ({ onItemAdd, onItemDelete }) => {
  const [meals, setMeals] = useState([
    {
      id: 1,
      name: "Pizza",
      price: 15,
      img: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
    },
    {
      id: 2,
      name: "Lamb Tzatziki Burger",
      price: 10,
      img: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
    },
    {
      id: 3,
      name: "Paella",
      price: 30,
      img: "https://www.themealdb.com/images/media/meals/1520081754.jpg",
    },
    {
      id: 4,
      name: "Chicken Handi",
      price: 20,
      img: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    },
    {
      id: 5,
      name: "Spaghetti Bolognese",
      price: 10,
      img: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    },
    {
      id: 6,
      name: "Beef Lo Mein",
      price: 35,
      img: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
    },
    {
      id: 7,
      name: "New York cheesecake",
      price: 7,
      img: "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg",
    },
    {
      id: 8,
      name: "Pierogi ",
      price: 12,
      img: "https://www.themealdb.com/images/media/meals/45xxr21593348847.jpg",
    },
    {
      id: 9,
      name: "Tonkatsu pork",
      price: 15,
      img: "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg",
    },
    {
      id: 10,
      name: "Japanese gohan rice",
      price: 20,
      img: "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg",
    },
  ]);

  return (
    <ShopContainer>
      <ShopWrapper>
        {meals.map((meal) => {
          return (
            <ShopItem key={meal.id}>
              <img src={meal.img} alt={meal.name} />
              <ItemName>{meal.name}</ItemName>
              <ItemPrice>Price: {meal.price}$</ItemPrice>
              <AddItemButton
                onClick={() => {
                  onItemAdd(meal);
                }}
              >
                Add to cart
              </AddItemButton>
            </ShopItem>
          );
        })}
      </ShopWrapper>
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.quaternary};
  padding-bottom: 1rem;
`;

const ShopWrapper = styled.div`
  width: 90%;
  padding-top: 1rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
`;

const ShopItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
  }
`;

const ItemName = styled.h5`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const AddItemButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.quaternary};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  padding: 0.2rem 0;
  cursor: pointer;
  width: 100%;
`;

export default Shop;
