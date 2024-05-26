import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import './index.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentación técnica - Sistema SAAG">
      <div className={styles.box}>
        <div>
          <HomepageHeader />
          <div className="textDescription">
            El Sistema Administrativo de Apoyo General (SAAG) fue desarrollado para la empresa
            <a href="https://www.acibfunin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              ACIB-FUNIN
            </a>
            con el propósito principal de automatizar procesos administrativos en el departamento de recursos humanos de la empresa.
          </div>
        </div>
      </div>
    </Layout>
  );
}
