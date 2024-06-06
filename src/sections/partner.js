/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Partner from "assets/partner.png";

const data = {
  subTitle: "Our technology",
  title: "Innovative Solutions for Modern Challenges",
  description:
    "Explore the cutting-edge technology behind our app development process. From advanced algorithms to seamless integrations, we leverage the latest tools and techniques to deliver high-quality solutions tailored to your needs. Discover how our technology can empower your business and elevate your digital presence.",
  btnName: "Get Started",
  btnURL: "#",
};

export default function PartnerSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section sx={{ variant: "section.partner" }}>
      <Container sx={styles.containerBox}>
        <Box
          ref={ref}
          sx={{ ...styles.contentBox, ...styles.animation(inView) }}
          as={motion.div}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, "40px", 0] }}>
          <Image src={Partner} alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", 450, 550, "350px", "410px", "485px"],
    mx: "auto",
    pb: ["30px", null, null, 0],
    ".description": {
      pr: [0, null, null, null, 4],
    },
  },
  animation: (inView) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    transition: "opacity 0.5s, transform 0.5s",
  }),
};
