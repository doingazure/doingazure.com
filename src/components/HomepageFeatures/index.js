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
    Doing Azure is intended to be a learning amplifier. We can also learn
    cybersecurity by doing cybersecurity, or learn programming by doing programming.
    And in {currentYear}, we can learn AI by doing AI.
    </>
  ),
  },
  {
  title: 'Opinionated',
  Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  description: (
    <>
    There are so very many options in {currentYear} so we need to make some choices. Opinionated choices.
    Asserting Azure as the cloud platform is itself is one such opinionated choice. There are many more.
    Most decisions are explained, or attempted at least.
    </>
  ),
  },
  {
  title: 'Powered by Azure, but not only Azure',
  Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  description: (
    <>
    The Azure platform might be the center of gravity for much of this site,
    but scope extends beyond. For example, there is (or will be) some GitHub here too 
    (this relates to the "opiniated" part).
    And there's a lot of other stuff too. For example, an opioniated view about setting up
    email for a small business or open source project (coming soon?).
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
