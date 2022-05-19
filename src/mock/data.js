import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Swagat Koirala | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio !!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  resume: 'swagat_koirala_resume.pdf',
  paragraphOne:
    'Hello! My name is Swagat and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom Bootstrap themes — turns out experimental editing in a custom templates or say snippets taught me a lot about HTML & CSS! The interest and excitement in coding started to develop in my mind. Further, i started to learn backend from which i gained the knowledge about dymanic data handling, interconnecting frontend and backend.',
  paragraphTwo:
    "Fast-forward to today, and I've had the privilege of working as developer in a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences.",
  paragraphThree:
    "I'm a Full-stack web developer currently working as a associate software developer.",
  resume: 'resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project7.png',
    title: 'Byakhya',
    info: 'Byakhya is Nepal’s first ads free, subscribers only online business journalism initiative. We deliver authentic and meaningful insights on Nepal’s economy and business sector through well-researched crisply narrated stories to investors, entrepreneurs, business persons, leaders, business executives and professionals!',
    info2: '',
    url: 'https://byakhya.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.png',
    title: 'Kisan Sanjal',
    info: 'Kisan Sanjal is an online platform where kisan’s and agriculture based professionals can interact with each other.',
    info2: '',
    url: 'https://kisansanjal.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'Smart Wakil',
    info: 'Smart Wakil is an online platform where lawyers and prospective clients can connect with each other to avail various legal services in a simple, transparent and cost-effective manner.',
    info2: '',
    url: 'https://smartwakil.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Nepal Invests',
    info: 'Nepal Invests is your window to invest in Nepal and will contain all the relevant resources to help you get started, scale up, raise capital and grow your business in Nepal.',
    info2: '',
    url: 'https://nepalinvests.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'My Portfolio',
    info: 'The idea is to create a simple UI showing my details in this portpolio website.',
    info2: '',
    url: 'https://swagatkoirala.com.np',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Internalaya',
    info: 'The idea is to create a bridge between the gap that exists between "Bidhyalaya" (school/formal education) and "Karyalaya" (office/career/real-life work) by providing paid and purposeful internships to help youngsters explore the area of their interests and determine their career path.',
    info2: '',
    url: 'https://internalaya.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Computer Pasal',
    info: 'The idea is to become a platform for enabling and ensuring wide access reach of world-class technology in the country. This site aim to introduce constant new, and intriguing products/ gadgets /accessories which will encourage the customer to return regularly.',
    info2: '',
    url: 'http://computerpasal.pythonanywhere.com/',
    repo: 'https://github.com/swagatkoirala/Computer-Pasal', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/swagatkoirala/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/swagatkoirala/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/swa.raj.925/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/swagat_koirala/',
    },
  ],
};
