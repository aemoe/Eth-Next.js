import styles from '../styles/layout.less'
import {  Link, withTranslation } from '../i18n'
import Wallet from '../components/wallet'
import Locales from '../components/locales'

const Header = (props) => {
    return ( 
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logo}></div>
                 <ul>
                    <Link href="/"><li className={styles.active}>Home</li></Link>
                    <Link href="/home"><li>Farm</li></Link>
                    <Link href="/home"><li>About</li></Link>
                </ul>
                <Wallet />
            </div>
            {props.children}
        </header>
    )
}


export default withTranslation('header')(Header)
