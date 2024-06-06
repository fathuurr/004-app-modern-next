/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const packages = [
  {
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Free access for all kind of exercise corrections with downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Premium',
    description: 'For startup enterprise',
    priceWithUnit: '$29.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Free access for all kind of exercise corrections with downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: true,
      },
    ],
  },
];

export default function Package() {
  const [refLeft, inViewLeft] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refRight, inViewRight] = useInView({ triggerOnce: false, threshold: 0.1 });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Let’s see how it works"
          slogan="Whats the function"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          <motion.div
            ref={refLeft}
            initial="hidden"
            animate={inViewLeft ? 'visible' : 'hidden'}
            variants={leftVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            sx={{ marginRight: [0, null, null, 3], marginBottom: [4, null, null, 0] }}
          >
            <PriceCard data={packages[0]} key={packages[0].name} />
          </motion.div>
          <motion.div
            ref={refRight}
            initial="hidden"
            animate={inViewRight ? 'visible' : 'hidden'}
            variants={rightVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            sx={{ marginLeft: [0, null, null, 3], marginBottom: [4, null, null, 0] }}
          >
            <PriceCard data={packages[1]} key={packages[1].name} />
          </motion.div>
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
