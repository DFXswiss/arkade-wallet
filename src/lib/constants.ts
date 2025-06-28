export const arknoteHRP = 'arknote'
export const defaultFee = 0
export const testDomains = ['dev.arkade.money', 'next.arkade.money', 'localhost']
export const testServer = 'https://staging.mutinynet.arkade.sh'
export const mainServer = 'https://arkd.arkade.money'

export const defaultArkServer = () => {
  if (import.meta.env.VITE_ARK_SERVER) return import.meta.env.VITE_ARK_SERVER
  for (const domain of testDomains) {
    if (window.location.hostname.includes(domain)) {
      return testServer
    }
  }
  return mainServer
}
