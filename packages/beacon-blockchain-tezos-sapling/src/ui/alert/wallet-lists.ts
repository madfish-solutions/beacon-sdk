import { App, DesktopApp, ExtensionApp, WebApp } from '@airgap/beacon-types'
  
  export const extensionList: ExtensionApp[] = []
  
  export const desktopList: DesktopApp[] = []
  
  export const webList: WebApp[] = []
  
  export const iOSList: App[] = [
  {
    "key": "airgap_ios",
    "name": "AirGap Wallet",
    "shortName": "AirGap",
    "color": "rgb(4, 235, 204)",
    "logo": "data:image/png;base64,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",
    "universalLink": "https://wallet.airgap.it",
    "deepLink": "airgap-wallet://"
  }
]
  
  