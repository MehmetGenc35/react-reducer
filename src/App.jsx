import React from 'react'
import { StoreProvider } from './store'
import AppRouter from './router'

const App = () => {
  return (

    <StoreProvider>
      <AppRouter/>
    </StoreProvider>
    
  )
}

export default App

//gerekli ayarlamaları index içerisinde yaptığımız için uygulamamız reduce ile sarmalanmış olur