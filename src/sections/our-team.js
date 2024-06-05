import SectionHeader from 'components/section-header';
import Fathur from 'assets/our-team/test2.png';
import Tabah from 'assets/our-team/tabah.jpeg';
import Bayu from 'assets/our-team/bayu.jpeg';
import Denis from 'assets/our-team/denis.jpeg';
import Ical from 'assets/our-team/ical.jpeg';
import Tegar from 'assets/our-team/tegar.jpeg';

import { Label, Input, Textarea, Container, Grid, Button } from 'theme-ui';
import OurTeamCard from 'components/our-team-card';

const data = [
  {
    id: 1,
    imgSrc: Fathur,
    altText: 'Fathur',
    title: 'Fathurrahman Qarnain',
    text: 'Software Engineer',
  },
  {
    id: 2,
    imgSrc: Bayu,
    altText: 'Bayu',
    title: 'Bayu Subekti',
    text: 'Frontend Developer',
  },
  {
    id: 3,
    imgSrc: Ical,
    altText: 'Achmad',
    title: 'Achmad Ikhsan Rizkal Aldair',
    text: 'UI/UX Designer',
  },
  {
    id: 4,
    imgSrc: Tabah,
    altText: 'Tabah',
    title: 'Muhammad Tabah Muhyi Halim',
    text: 'UI/UX Designer',
  },
  {
    id: 5,
    imgSrc: Denis,
    altText: 'Denis',
    title: 'Denis Bayu Prihantoro',
    text: 'Product Manager',
  },
  {
    id: 6,
    imgSrc: Tegar,
    altText: 'Tegar',
    title: 'Tegar Hanafi',
    text: 'Product Manager',
  },
];

const OurTeam = () => {
  return (
    <section id='contactus' sx={{ variant: 'section.ourTeam' }}>
      <Container>
        <SectionHeader
          slogan={'Contact Us'}
          title={'Get in Touch with Our Expert Team'}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <OurTeamCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>

        <div style={{ marginTop: '50px', marginBottom: '60px' }}>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' id='email' mb={3} />

          <Label htmlFor='name'>Your Name</Label>
          <Input type='name' name='name' id='name' mb={3} />

          <Label htmlFor='message'>Message</Label>
          <Textarea name='message' id='message' rows={6} mb={3} />

          <Button>Submit</Button>
        </div>
      </Container>
    </section>
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

export default OurTeam;
