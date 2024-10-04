import { ReactNode, createContext, useState } from 'react'

export enum Pages {
  Init,
  InitNew,
  InitOld,
  InitPassword,
  InitConnect,
  ReceiveAmount,
  ReceiveFees,
  ReceiveInvoice,
  ReceiveSuccess,
  SendAmount,
  SendInvoice,
  SendDetails,
  SendFees,
  SendPayment,
  SendSuccess,
  Transactions,
  Unlock,
  Wallet,
}

interface NavigationContextProps {
  screen: Pages
  navigate: (arg0: Pages) => void
}

export const NavigationContext = createContext<NavigationContextProps>({
  screen: Pages.Init,
  navigate: () => {},
})

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [screen, setScreen] = useState(Pages.Init)
  const navigate = setScreen
  return <NavigationContext.Provider value={{ screen, navigate }}>{children}</NavigationContext.Provider>
}
