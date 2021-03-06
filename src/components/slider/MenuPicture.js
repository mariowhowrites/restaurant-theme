import React, { useState } from "react"
import { Transition } from "react-transition-group"

export default function MenuPicture({
  currentItem,
  selectedItem,
  setCurrentItem,
  setSelectedItem,
}) {
  return (
    <div
      style={{
        width: "50%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!selectedItem ? (
        <DefaultPicture currentItem={currentItem} />
      ) : (
        <AnimatedPicture
          selectedItem={selectedItem}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  )
}

function DefaultPicture({ currentItem }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url('${currentItem.picture}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  )
}

function AnimatedPicture({
  selectedItem,
  currentItem,
  setCurrentItem,
  setSelectedItem,
}) {
  console.log(selectedItem, currentItem)

  let [animate, setAnimate] = useState(false)
  const animationTime = 500

  setTimeout(() => {
    setCurrentItem(selectedItem)
    setSelectedItem(null)
  }, animationTime)

  setTimeout(() => {
    setAnimate(true)
  }, 100)

  const imageStyles = item => ({
    width: "100%",
    height: "100%",
    backgroundImage: `url('${item.picture}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  })

  const slideInStyles = {
    position: "absolute",
    bottom: "100%",
    opacity: 0,
    transition: `bottom ${animationTime /
      2}ms ease-in, opacity ${animationTime / 2}ms ease-in-out`,
  }

  const transitionStyles = {
    entering: {
      bottom: 0,
      opacity: 1,
    },
    entered: {
      bottom: 0,
      opacity: 1,
    },
  }

  return (
    <React.Fragment>
      <Transition
        in={animate}
        timeout={animationTime}
        onEntering={() => console.log("hello")}
        onEntered={() => console.log("goodbye")}
      >
        {state => (
          <div
            style={{
              ...imageStyles(selectedItem),
              ...slideInStyles,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>
      <div style={imageStyles(currentItem)} />
    </React.Fragment>
  )
}

// ok, what do I want to happen?

// default is selected
// if there's a new menu item selected...
// slide it in from above
// once animation is finished...
// move new to current
// current disappears
