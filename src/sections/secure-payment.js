/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import PaymentThumb from 'assets/paymentThumb.png';
import PaymentPattern from 'assets/payment-pattern.png';

const data = {
  subTitle: 'PAYMENT SECURITY',
  title: 'Secure Payment Transaction System with #1 Ranking',
  description:
    '"Experience peace of mind with our top-ranked Secure Payment Transaction System, ensuring the highest level of payment security available. Benefit from the expertise of our management team, renowned for delivering unparalleled design system guidelines.',
  btnName: 'Learn More',
  btnURL: '#',
};

export default function SecurePayment() {
  const [refThumbnail, inViewThumbnail] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refContent, inViewContent] = useInView({ triggerOnce: false, threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section sx={{ variant: 'section.securePayment' }}>
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox}>
        <motion.div
          ref={refThumbnail}
          initial="hidden"
          animate={inViewThumbnail ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          sx={styles.thumbnail}
        >
          <Image src={PaymentThumb} alt={data.title} />
        </motion.div>
        <motion.div
          ref={refContent}
          initial="hidden"
          animate={inViewContent ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          sx={styles.contentBox}
        >
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </motion.div>
      </Container>
    </section>
  );
}

const styles = {
  bgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: -1,
    width: [
      '100%',
      null,
      null,
      'calc(50% + 400px)',
      'calc(50% + 480px)',
      'calc(50% + 570px)',
      null,
      'calc(50% + 625px)',
    ],
    backgroundImage: `url(${PaymentPattern})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    mb: -2,
    ml: [-4, '-40px', null, null, 0],
    order: [2, null, null, 0],
    pr: [6, null, 7, 0],
  },
  contentBox: {
    width: ['100%', 420, 480, 380, 500, 570],
    mx: 'auto',
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    pt: [0, null, null, 4, '50px', null, 4, '80px'],
    pl: [0, null, null, 40, '90px'],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
};
