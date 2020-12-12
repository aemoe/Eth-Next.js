import App from 'next/app'
import { appWithTranslation } from '../i18n'
import { UseWalletProvider } from 'use-wallet'

const MyApp = ({ Component, pageProps }) => <UseWalletProvider
    chainId={0x4}
    connectors={{
        walletconnect: { rpcUrl: 'https://rinkeby.infura.io/v3/3970ae72d3db40f6a6dfad8544b4da1c' }
    }}
><Component {...pageProps} /></UseWalletProvider>

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
