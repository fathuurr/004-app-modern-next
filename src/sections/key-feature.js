/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Tambahkan ini
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Vector',
    title: 'Seamless Integration',
    text:
      'Experience a world where your app effortlessly connects with various platforms and services.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Monitoring',
    title: 'Personalized User Experience',
    text:
      'Dive into a tailored journey with our personalized user experience feature.',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Quality & Short-period',
    text:
      'Experience top-tier mobile apps developed in record time with our "Quality & Short-period" feature.',
  },
];

export default function KeyFeature() {
  const controls = useAnimation();
  const [ref, inView] = useInView(); // Gunakan useInView untuk mendeteksi saat masuk ke viewport

  // Animasi saat elemen masuk ke dalam viewport
  if (inView) {
    controls.start('visible');
  } else {
    controls.start('hidden');
  }

  return (
    <section ref={ref} sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1 }}
            >
              <FeatureCardColumn
                src={item.imgSrc}
                alt={item.title}
                title={item.title}
                text={item.text}
              />
            </motion.div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
