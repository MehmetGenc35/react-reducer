//uygulamanın reduce dan haberdar olması için merkez js imiz

import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counter/reducer";
import { counterInitialState } from "./counter/initial-state";


//boş merkezi state oluşturuldu
const StoreContext = createContext();

//componentlerden daha kolay bir şekilde context import edilsin diye yaptık
export const useStore=()=>useContext(StoreContext);




//sarmallama işlemini burada yapacağımız için burayı component yaptık
//bir componentin arasındakileri almak istiyorsak özel children prop unu kullanıyoruz
export const StoreProvider = ({children}) => {

  
  //counterın mevcut değerini ve onu değiştirecek state i value ya aktarabilmemiz lazım
  const [stateCounter,dispatchCounter]=useReducer(counterReducer,counterInitialState)
  //stateCounter==>counter ın değeri
  //dispatchCountery==>counterı değiştirecek fonksiyonu verecek olan yer



  //uygulamanın her yerinden ulaşmak için value içerisine getter ve setter ı koymuş olduk
  return (
    <StoreContext.Provider value={{stateCounter,dispatchCounter}}>
      {children}
    </StoreContext.Provider>
  )
}


