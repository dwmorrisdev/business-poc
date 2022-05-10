import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ExpandableDrawer from './navbar/drawer';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({children}: LayoutProps): JSX.Element {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="poc-project"
        />
        <title>POC Project</title>
      </Head>
      <ExpandableDrawer>
        <section className={styles.container} >
          {children}
        </section>
      </ExpandableDrawer>
    </div>
  )
}