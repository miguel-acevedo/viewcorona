import * as React from 'react'

// Use utils to assign types.

const Header: React.FunctionComponent<{title: string}> = ({ title }) => (
<header>
  <div className="container text-center">
    <h1>{title}</h1>
    <p>Timeline of coronavirus events</p>
  </div>
</header>
)

export default Header