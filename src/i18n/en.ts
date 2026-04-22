import type { Dict } from './ja';

export const en: Dict = {
  meta: {
    title: 'Kamiyama College of Technology — Intro',
    description:
      'A fan-made intro site for Kamiyama Marugoto College of Technology, a private 5-year residential college in Tokushima nurturing entrepreneurs through technology and design.',
  },
  nav: {
    about: 'About',
    curriculum: 'Curriculum',
    campus: 'Campus',
    faculty: 'Faculty',
    life: 'Student Life',
    news: 'News',
    access: 'Access',
    official: 'Official Site',
  },
  hero: {
    eyebrow: 'KAMIYAMA COLLEGE OF TECHNOLOGY',
    title: 'Reshape the human future\nthrough technology\nand design.',
    lead: 'A 5-year residential KOSEN nestled in the misty mountains of Kamiyama, Tokushima — empowering 15-year-olds to become creators and entrepreneurs.',
    primary: 'Explore the school',
    secondary: 'Visit official site',
  },
  about: {
    heading: 'About',
    subheading: '"People who start things by making things."',
    body: 'Opened in April 2023 in Kamiyama, Tokushima, we are a private residential KOSEN (College of Technology) cultivating entrepreneurial spirit. Students live and learn together for five years, from age 15 to 20, around three pillars: Technology × Design × Entrepreneurship.',
    pillars: [
      { title: 'Technology', body: 'From AI and programming to hardware — sharpen the craft of making.' },
      { title: 'Design', body: 'Observe people and society, reframe problems, and bring ideas to life.' },
      { title: 'Entrepreneurship', body: 'Engage with real ventures, from business design through implementation.' },
    ],
  },
  curriculum: {
    heading: 'Curriculum',
    lead: 'A 5-year journey shifting gradually from "learn" to "make" to "start".',
    items: [
      { year: 'Year 1', title: 'Learn', body: 'Foundations, programming basics, and community building in the dorm.' },
      { year: 'Year 2', title: 'Make', body: 'Prototyping, design research, first contact with society.' },
      { year: 'Year 3', title: 'Try', body: 'Hands-on projects with local businesses and startups.' },
      { year: 'Year 4', title: 'Deepen', body: 'Specialization, research, short-term overseas programs.' },
      { year: 'Year 5', title: 'Start', body: 'Graduation = launch your own venture or implementation.' },
    ],
  },
  campus: {
    heading: 'Campus & Facilities',
    lead: 'A wooden campus blending into the Kamiyama landscape — fab lab, library, dorms, and dining all in one.',
    facilities: [
      { name: 'Main Building', body: 'A learning space wrapped in the warmth of wood and earth.' },
      { name: 'Fab Lab', body: '3D printers, laser cutters, and electronics gear ready to use.' },
      { name: 'HOME (Dorm)', body: 'The 5-year living base where students and staff share one roof.' },
      { name: 'Dining Hall', body: 'Daily meals built around local Kamiyama ingredients.' },
    ],
  },
  faculty: {
    heading: 'Faculty & Mentors',
    lead: 'Researchers, founders, designers, and engineers walking alongside students.',
    members: [
      { name: 'Full-time Faculty', role: 'Foundations to advanced studios', body: 'Long-term mentorship across the 5-year arc.' },
      { name: 'Creative Partners', role: 'Top-tier creators', body: 'Bring out students sensibility through real-world projects.' },
      { name: 'Founder Mentors', role: 'Working entrepreneurs', body: 'Coach from idea to launch.' },
    ],
  },
  life: {
    heading: 'Student Life & HOME',
    lead: 'Five years living through the four seasons of Kamiyama.',
    points: [
      'Students and staff share the same campus',
      'Join local festivals and farming activities',
      'Private rooms + shared lounges for independence and collaboration',
      'Hot springs, rivers, and mountains within walking distance',
    ],
  },
  news: {
    heading: 'News',
    empty: 'Coming soon.',
    readMore: 'Read more',
  },
  access: {
    heading: 'Access',
    address: '132 Kita, Jinryo, Kamiyama, Myozai-gun, Tokushima 771-3310, Japan',
    transport: 'Tokushima Awaodori Airport → Tokushima Sta. → Local bus to "Kamiyama Kosen Mae"',
    officialLinkLabel: 'Official site: kamiyama.ac.jp',
    officialLinkUrl: 'https://kamiyama.ac.jp/en/',
    mapLabel: 'Open in Google Maps',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kamiyama+Marugoto+College+of+Technology',
  },
  footer: {
    disclaimer: 'This is an unofficial fan-made site built for learning purposes. Please refer to the official site for the latest info.',
    copyright: '© 2026 ghcp-school-intro demo',
  },
  switcher: {
    label: 'Language',
    ja: '日本語',
    en: 'English',
  },
};
