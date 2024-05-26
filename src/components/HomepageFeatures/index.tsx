import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Login',
    Image: require('@site/static/img/login.png').default,
    description: (
      <>
       Acceso.
      </>
    ),
  },
  {
    title: 'Dashboard',
    Image: require('@site/static/img/dash.png').default,
    description: (
      <>
       Resumen del estado de la información del sistema.
      </>
    ),
  },
  {
    title: 'Empleados',
    Image: require('@site/static/img/employes.png').default,
    description: (
      <>
        Información relevante del personal de la empresa.
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img src={Image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
