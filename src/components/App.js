import React, { PureComponent } from 'react'

import style from './style.scss'

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1 className={style.title}>App</h1>
      </div>
    )
  }
}

export default App