import React from 'react'
import { StoreProvider } from './store'
import Counter from './components/counter/counter'

const App = () => {
  return (

    <StoreProvider>
      <div>
        <Counter />
      </div>
    </StoreProvider>
    
  )
}

export default App

//gerekli ayarlamaları index içerisinde yaptığımız için uygulamamız reduce ile sarmalanmış olur