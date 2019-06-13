import React from "react"
import HeroHome from "../components/home/HeroHome"
import MenuSlider from "../components/hero/MenuSlider"

const menuSliderItems = [
  {
    name: "Salad Bar",
    picture:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Ribeye",
    picture:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
  },
  {
    name: "Dimsum",
    picture:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
]

export default () => {
  return (
    <>
      <HeroHome />
      <MenuSlider menuItems={menuSliderItems} />
    </>
  )
}
