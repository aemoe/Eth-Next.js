import Head from 'next/head'
import { useEffect } from 'react'
import useWallet from 'use-wallet'
import { withTranslation } from '../i18n'
import HeaderFooter from '../layout/HeaderFooter'
import classNames from 'classnames/bind'
import styles from '../styles/Home.less'
const cx = classNames.bind(styles)
import Web3 from 'web3'

const Home = ({ t }) => {
  const { account, ethereum } = useWallet()

  //  const web3 = new Web3(ethereum)
  //  const ABI = [ { "inputs": [], "name": "getMsgArr", "outputs": [ { "internalType": "string[]", "name": "", "type": "string[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "string[]", "name": "strs", "type": "string[]" } ], "name": "setMsgArr", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]
  //   const Contract = new web3.eth.Contract(ABI, "0xc631f2aa82730d90aaba53b44e8dfdc7341d6630")

  //     useEffect(() => {
  //     const timer = setInterval(async () => {
  //       const str = {
  //           age: user.age,
  //           name: user.name
  //       };
  //       // Contract.methods.setMsgArr(str).send({from:account});
  //       console.log(await Contract.methods.getMsgArr().call())
  //    }, 3000)
  //     return () => {
  //       clearInterval(timer)
  //     }
  //   }, [account])

  return (
    <HeaderFooter>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.slogan}>
          <p>
            The <b>Phoenix.link</b> is a automated swap protocol for Liquidity
            Providers on Ethereum.
          </p>
          <a>Launch App ↗</a>
        </div>
        <div className={styles.content}>
          <h1>What is Phoenix.link?</h1>
          <div className={styles.pool}>
            <ul className={styles.pool_content}>
              <li>123</li>
              <li>123</li>
              <li>123</li>
            </ul>
          </div>
        </div>
        <div className={styles.content}>
          <h1>Farm pool</h1>
          <div className={styles.pool}>
            <ul className={styles.total}>
              <li>
                <span className={styles.burn}>
                  <p className={styles.value}>$432,323.04</p>
                  <p className={styles.title}>Burn reward</p>
                </span>
              </li>
              <li>
                <span className={styles.locked}>
                  <p className={styles.value}>$43.04m</p>
                  <p className={styles.title}>Locked in Farm</p>
                </span>
              </li>
              <li>
                <span className={styles.price}>
                  <p className={styles.value}>$43.04</p>
                  <p className={styles.title}>MOMO Price</p>
                </span>
              </li>
            </ul>
            <ul className={styles.pool_content}>
              <li>
                <span>
                  <h1>ETH-MOMO LP Pool</h1>
                  <h2>SWAP ETH-MOMO LP</h2>
                  <h3>
                    0.00000
                    <img src="https://index-dao.s3.amazonaws.com/eth-dpi.svg" />
                  </h3>
                  <h4>Staked ETH/MOMO Uniswap LP Tokens</h4>
                  <h3>55.33% APY</h3>
                  <h4>(Unstable)</h4>
                  <h3>0.00000</h3>
                  <h4>Unclaimed MOMO in pool</h4>
                  <dl className={styles.btns}>
                    <dt>
                      <p>
                        <s>
                          <button className={styles.claim}>Claim</button>
                        </s>
                        <b></b>
                        <s>
                          <button className={styles.stake}>
                            Approve & Stake
                          </button>
                        </s>
                      </p>
                    </dt>
                    <dt>
                      <p>
                        <button disabled className={styles.withdraw}>
                          Unstake & Claim
                        </button>
                      </p>
                    </dt>
                  </dl>
                </span>
              </li>
              <li>
                <span>
                  <h1>ETH-MOMO LP Pool</h1>
                  <h2>SWAP ETH-MOMO LP</h2>
                  <h3>
                    0.00000
                    <img src="https://index-dao.s3.amazonaws.com/eth-dpi.svg" />
                  </h3>
                  <h4>Staked ETH/MOMO Uniswap LP Tokens</h4>
                  <h3>55.33% APY</h3>
                  <h4>(Unstable)</h4>
                  <h3>0.00000</h3>
                  <h4>Unclaimed MOMO in pool</h4>
                  <dl className={styles.btns}>
                    <dt>
                      <p>
                        <s>
                          <button className={styles.claim}>Claim</button>
                        </s>
                        <b></b>
                        <s>
                          <button className={styles.stake}>
                            Approve & Stake
                          </button>
                        </s>
                      </p>
                    </dt>
                    <dt>
                      <p>
                        <button disabled className={styles.withdraw}>
                          Unstake & Claim
                        </button>
                      </p>
                    </dt>
                  </dl>
                </span>
              </li>
              <li>
                <span>
                  <h1>ETH-MOMO LP Pool</h1>
                  <h2>SWAP ETH-MOMO LP</h2>
                  <h3>
                    0.00000
                    <img src="https://index-dao.s3.amazonaws.com/eth-dpi.svg" />
                  </h3>
                  <h4>Staked ETH/MOMO Uniswap LP Tokens</h4>
                  <h3>55.33% APY</h3>
                  <h4>(Unstable)</h4>
                  <h3>0.00000</h3>
                  <h4>Unclaimed MOMO in pool</h4>
                  <dl className={styles.btns}>
                    <dt>
                      <p>
                        <s>
                          <button className={styles.claim}>Claim</button>
                        </s>
                        <b></b>
                        <s>
                          <button className={styles.stake}>
                            Approve & Stake
                          </button>
                        </s>
                      </p>
                    </dt>
                    <dt>
                      <p>
                        <button disabled className={styles.withdraw}>
                          Unstake & Claim
                        </button>
                      </p>
                    </dt>
                  </dl>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderFooter>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'home'],
})

export default withTranslation('home')(Home)
