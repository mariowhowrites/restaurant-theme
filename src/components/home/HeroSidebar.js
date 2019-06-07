import React, { useState } from "react"
import styled from "styled-components"
import { Transition } from "react-transition-group"

const Sidebar = styled.aside`
  width: 20%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 100%;
  transition: bottom 750ms ease-in;
`

const RestaurantTitleWrapper = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const RestaurantTitle = styled.h2`
  font-family: "Courgette";
  font-size: 3.35rem;
  transition: opacity 300ms ease-in;
  opacity: 0;
`

const SidebarNav = styled.ul`
  list-style: none;
  font-family: "Raleway";
  text-transform: lowercase;
  padding: 0;
  text-align: center;
  transition: opacity 300ms ease-in;
  opacity: 0;
`

const NavItem = styled.li`
  margin: 2rem 0;
  font-size: 1.6rem;
`

const BookButton = styled.div`
  background-color: #fb2002;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courgette";
  font-size: 4rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  transition: opacity 300ms ease-in;
  opacity: 0;
`

const transitionStyles = {
  entering: {
    bottom: 0,
  },
  entered: {
    bottom: 0,
  },
}

const opacityTransitionStyles = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
}

function HeroSidebar() {
  let [appear, setAppear] = useState(false)
  let [titleAppear, setTitleAppear] = useState(false)
  let [menuAppear, setMenuAppear] = useState(false)
  let [bookAppear, setBookAppear] = useState(false)

  console.log(titleAppear)

  setTimeout(() => {
    setAppear(true)
  }, 200)

  return (
    <Transition
      in={appear}
      timeout={750}
      onEntered={() => {
        console.log("sidebar is in")
        setTitleAppear(true)
      }}
    >
      {state => (
        <Sidebar style={{ ...transitionStyles[state] }}>
          <RestaurantTitleWrapper>
            <Transition
              in={titleAppear}
              timeout={300}
              onEntered={() => setMenuAppear(true)}
            >
              {state => (
                <RestaurantTitle style={{ ...opacityTransitionStyles[state] }}>
                  Restaurant
                </RestaurantTitle>
              )}
            </Transition>
          </RestaurantTitleWrapper>
          <div style={{ height: "40%" }}>
            <Transition
              in={menuAppear}
              timeout={300}
              onEntered={() => setBookAppear(true)}
            >
              {state => (
                <SidebarNav style={{ ...opacityTransitionStyles[state] }}>
                  <NavItem>Menu</NavItem>
                  <NavItem>About</NavItem>
                  <NavItem>Contact</NavItem>
                </SidebarNav>
              )}
            </Transition>
          </div>
          <div
            style={{
              height: "20%",
              width: "100%",
            }}
          >
            <Transition in={bookAppear} timeout={300}>
              {state => (
                <BookButton style={{ ...opacityTransitionStyles[state] }}>
                  Book
                </BookButton>
              )}
            </Transition>
          </div>
        </Sidebar>
      )}
    </Transition>
  )
}

export default HeroSidebar
