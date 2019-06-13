import React, { useState } from "react"
import styled, { css } from "styled-components"

import MenuPicture from "./MenuPicture"

export default function MenuSlider({ menuItems }) {
  let [currentItem, setCurrentItem] = useState(menuItems[0])
  let [selectedItem, setSelectedItem] = useState(null)

  return (
    <section
      style={{
        display: "flex",
        minHeight: "80vh",
      }}
    >
      <MenuPicture
        currentItem={currentItem}
        selectedItem={selectedItem}
        setCurrentItem={setCurrentItem}
        setSelectedItem={setSelectedItem}
      />
      <MenuSelect
        menuItems={menuItems}
        currentItem={currentItem}
        setSelectedItem={setSelectedItem}
      />
    </section>
  )
}

const RestaurantTitle = styled.h2`
  font-family: "Raleway";
  font-size: 3.35rem;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  margin: 3rem 0 1rem;

  ${({ currentItem, item }) =>
    currentItem.name === item.name &&
    css`
      color: red;
    `}
`

function MenuSelect({ menuItems, currentItem, setSelectedItem }) {
  return (
    <div style={{ backgroundColor: "black", width: "50%" }}>
      <ul style={{ listStyle: "none" }}>
        {menuItems.map(item => (
          <React.Fragment key={item.name}>
            <li onMouseOver={() => setSelectedItem(item)}>
              <RestaurantTitle currentItem={currentItem} item={item}>
                {item.name}
              </RestaurantTitle>
            </li>
            <p style={{ fontFamily: "Courgette", color: "white" }}>
              {item.description}
            </p>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}
