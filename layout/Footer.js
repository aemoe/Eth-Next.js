import { Link, withTranslation } from '../i18n'
import styles from '../styles/layout.less'

const Footer = ({ t }) => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>Twitter</li>
                <li>Telegram</li>
                <li>Discord</li>
                <li>Github</li>
            </ul>
        </footer>
    )
}

export default withTranslation('header')(Footer)