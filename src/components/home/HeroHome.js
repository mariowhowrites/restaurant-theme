import React from "react"
import styled from "styled-components"
import HeroSidebar from "./HeroSidebar"

const HeroContainer = styled.main`
  display: flex;
  height: 100vh;
  position: relative;
`

export default function HeroHome() {
  return (
    <HeroContainer>
      <HeroSidebar />
      <HeroContent />
    </HeroContainer>
  )
}

function HeroContent() {
  return <HeroContentWrapper />
}

const HeroContentWrapper = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=100");
  width: 100%;
  background-position: center;
  background-size: cover;
`
