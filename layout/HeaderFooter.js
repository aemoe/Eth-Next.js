import "../styles/_common.less"
import styles from "../styles/layout.less"
import { withTranslation } from "../i18n"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import React from "react"

const HeaderFooter = (props) => {
  const { activeIndex } = props
  return (
      <div className={styles.wrapper}>
        <Head>
          <meta itemProp="image" content="/logo.png" />
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta name="author" content="Teamoe" />
          <meta name="generator" content="Teamoe" />
          <meta name="copyright" content="momo.finance" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Cache-Control" content="no-transform" />
          <meta httpEquiv="Cache-Control" content="no-siteapp" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="bookmark" href="/favicon.ico" />
          <meta name="description" content="momo.finance" />
          <meta name="keywords" content="momo.finance" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <script src="/viewport.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: ``,
            }}
          />
        </Head>
        <Header activeIndex={activeIndex} />
        <main className={styles.container}>{props.children}</main>
        <Footer />
      </div>
  );
};

export default withTranslation("header")(HeaderFooter);
