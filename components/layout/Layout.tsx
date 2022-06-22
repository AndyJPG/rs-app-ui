import React from "react"

const Layout = (props: { children?: React.ReactNode }) => {
  return (
    <>
      <div>navbar</div>
      {props.children}
    </>
  )
}

export default Layout