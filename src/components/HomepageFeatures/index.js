import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const currentYear = new Date().getFullYear();

const FeatureList = [
 {
  title: 'Learn Azure by Doing Azure',
  // Svg: require('@site/static/img/github-mark.svg').default,
  Svg: require('@site/static/img/github-mark-white.svg').default,
  description: (
    <>
    Doing Azure is intended to be a learning amplifier.
    </>
  ),
  },
  {
  title: 'Decisions over Options',
  Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  description: (
    <>
    There are so very many options in {currentYear} so we need to make some choices.
    Asserting Azure as the cloud platform is itself is one such choice. There are many more.
    Most decisions are explained.
    </>
  ),
  },
  {
  title: 'Powered by React',
  Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  description: (
    <>
    Extend or customize your website layout by reusing React. Docusaurus can
    be extended while reusing the same header and footer.
    </>
  ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
