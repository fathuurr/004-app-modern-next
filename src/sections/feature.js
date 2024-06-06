/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Smart Features',
    text:
      'Experience cutting-edge technology that brings your app to life with intelligent functionalities tailored to your needs.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Fast Performance',
    text:
      'Enjoy lightning-fast performance that ensures your app runs smoothly and efficiently, providing an exceptional user experience.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'Unlimited Content',
    text:
      'Access a world of endless possibilities with limitless content integration, keeping your users engaged and informed.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Unlimited Customization',
    text:
      'Transform your app to perfectly match your vision with our extensive customization options, allowing for a truly unique experience.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Boost Productivity',
    text:
      `Enhance your workflow and increase efficiency with tools and features designed to maximize productivity and streamline operations.`,
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Customer Support',
    text:
      `Benefit from our dedicated customer support team, ready to assist you at every step to ensure your app's success and satisfaction.`,
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Leading edge features"
          title="Unlock a world of possibilities with the feature"
        />

        <Grid sx={styles.grid}>
          {data.map((item, index) => (
            <FeatureItem key={item.id} {...item} index={index} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const FeatureItem = ({ imgSrc, altText, title, text, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }} // Adjust timing as needed
    >
      <FeatureCard src={imgSrc} alt={altText} title={title} text={text} />
    </motion.div>
  );
};

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
