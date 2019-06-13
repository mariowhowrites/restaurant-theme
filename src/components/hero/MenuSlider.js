import React, { useState } from "react"
import styled, { css } from "styled-components"

export default function MenuSlider({ menuItems }) {
  let [selectedItem, setSelectedItem] = useState(menuItems[0])

  return (
    <section
      style={{
        display: "flex",
        minHeight: "80vh",
      }}
    >
      <MenuPicture selectedItem={selectedItem} />
      <MenuSelect
        menuItems={menuItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </section>
  )
}

function MenuPicture({ selectedItem }) {
  return (
    <div
      style={{
        width: "50%",
        backgroundImage: `url('${selectedItem.picture}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  )
}

const RestaurantTitle = styled.h2`
  font-family: "Raleway";
  font-size: 3.35rem;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;

  ${({ selectedItem, item }) =>
    selectedItem.name === item.name &&
    css`
      color: red;
    `}
`

function MenuSelect({ menuItems, selectedItem, setSelectedItem }) {
  return (
    <div style={{ backgroundColor: "black", width: "50%" }}>
      <ul style={{ listStyle: "none" }}>
        {menuItems.map(item => (
          <li key={item.name} onMouseOver={() => setSelectedItem(item)}>
            <RestaurantTitle selectedItem={selectedItem} item={item}>
              {item.name}
            </RestaurantTitle>
          </li>
        ))}
      </ul>
    </div>
  )
}
