import ModeIcon from '@mui/icons-material/Mode';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';

library.add(faReact, faNode);

export const Testmonials_OBJs = [
  {
    id: 1,
    Name: 'Niharika Ambekar',
    Type: 'BSE Student',
    Description: 'Best work experiance with sanchit Highly Skilled in frontEnd Techonology Dedicated person with their job and Highly enthusiast work they done with great optimistic way',
    Rating: 4,
    // ImgUrl: 'public/Assets/niharika.jpg'
  },
  {
    id: 2,
    Name: 'Mohit Patil',
    Type: 'Full-Stack Developer',
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis',
    Rating: 3,
    // ImgUrl: '/public/Assets/mohit.jpg'
  },
  {
    id: 3,
    Name: 'Vaishnavi Patil',
    Type: 'Sr.Software developer',
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis',
    Rating: 3,
    // ImgUrl: '/public/Assets/vaishnavi.jpg',
  },
  {
    id: 4,
    Name: 'Rushita Joshi',
    Type: 'Front-End Developer',
    Description: 'Your solution that was elegant, efficient and User-friendly.You were always available to answer questions provide guidance and it was an absolute pleasure working with you❤',
    Rating: 5,
    // ImgUrl: '@/Assets/rushita.jpg',
  },
  {
    id: 5,
    Name: 'Rushita Joshi',
    Type: 'Front-End Developer',
    Description: 'Your solution that was elegant, efficient and User-friendly.You were always available to answer questions provide guidance and it was an absolute pleasure working with you❤',
    Rating: 5,
    // ImgUrl: '@/Assets/rushita.jpg',
  },
  {
    id: 6,
    Name: 'Rushita Joshi',
    Type: 'Front-End Developer',
    Description: 'Your solution that was elegant, efficient and User-friendly.You were always available to answer questions provide guidance and it was an absolute pleasure working with you❤',
    Rating: 5,
    // ImgUrl: '@/Assets/rushita.jpg',
  },
  {
    id: 7,
    Name: 'Rushita Joshi',
    Type: 'Front-End Developer',
    Description: 'Your solution that was elegant, efficient and User-friendly.You were always available to answer questions provide guidance and it was an absolute pleasure working with you❤',
    Rating: 5,
    // ImgUrl: '@/Assets/rushita.jpg',
  },
  {
    id: 7,
    Name: 'Pratiksha bhosale',
    Type: 'Front-End Developer',
    Description: 'Your solution that was elegant, efficient and User-friendly.You were always available to answer questions provide guidance and it was an absolute pleasure working with you❤',
    Rating: 5,
    // ImgUrl: '@/Assets/rushita.jpg',
  },

]
export const Service_OBJs = [
  {
    Icon: <ModeIcon sx={{ fontSize: '35px', color: '#20C5FA' }} />,
    title: 'UI/UX Designer',
    popupinfo: [
      'I develop the User Interface',
      'Web Page Development',
      'I create ux element Interactions',
      'I position your comapny Brand'
    ]
  },
  {
    Icon: <PaletteIcon sx={{ fontSize: '35px', color: '#20C5FA' }} />,
    title: 'Graphic Designer',
    popupinfo: [
      'kjlskdfjs',
      'asdkfjsdkf',
      'asdfkldjf',
      'sdlkfjsd'
    ]
  },
  {
    Icon: <CodeIcon sx={{ fontSize: '35px', color: '#20C5FA' }} />,
    title: 'Front-End development',
    popupinfo: [
      'Debugging and Troubleshooting',
      'I develop Responsive application device friendly',
      'Back-End APIs Integrating',
      'Data Binding',
    ]

  },
  // {
  //   Icon: <LanguageIcon sx={{ fontSize: '35px', color: '#20C5FA' }} />,
  //   title: 'Search Engine Optimization',
  //   popupinfo: [
  //     'kjlskdfjs',
  //     'asdkfjsdkf',
  //     'asdfkldjf',
  //     'sdlkfjsd'

  //   ]
  // },
]
export const PortfolioDetails = [
  {
    id: 1,
    title: 'Portfolio App',
    img: '',
    description: 'The product app manage all of business requriment and such as product summary and some more funcationality',
    demourl: 'https://portfoliosanchit.web.app/'
  },
  // {
  //   title: 'Product App',
  //   img: 'https://i0.wp.com/marvel.com.sa/wp-content/uploads/2022/07/What-is-Your-Website-Design-Process-Blog-Post-Feature-Image-36119-01.png?resize=2048%2C1074&ssl=1',
  //   description: 'The product app manage all of business requriment and such as product summary and some more funcationality',
  //   // Btnurl: null
  // },
]
export const SkillsCircle = [
  {
    id: 1,
    progress: 77,
    icon: <HtmlRoundedIcon sx={{ fontSize: 50, color: '#20C5FA' }} />
  },
  {
    id: 2,
    progress: 77,
    icon: <CssRoundedIcon sx={{ fontSize: 50, color: '#20C5FA' }} />
  },
  {
    id: 3,
    progress: 89,
    icon: <JavascriptRoundedIcon sx={{ fontSize: 50, color: '#20C5FA' }} />
  },
  {
    id: 4,
    progress: 75,
    icon: <FontAwesomeIcon icon={faReact} style={{ color: "#20C5FA", height: '50px' }} />

  },
  {
    id: 5,
    progress: 60,
    icon: <FontAwesomeIcon icon={faNode} style={{ color: "#20C5FA", height: '50px' }} />
  },
]


export const FooterLinks = [
  {
    header: 'Web Links',
    links: [
      { subtitle: 'Contact', href: 'https://www.example1.com' },
      { subtitle: 'Portfolio', href: 'https://www.example2.com' },
      { subtitle: 'Blogs', href: 'https://medium.com/@barjibhe99' },
    ],
  },
  {
    header: 'Works',
    links: [
      { subtitle: 'Figma', href: 'https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1082011251689625079' },
      { subtitle: 'Github', href: 'https://github.com/Sanchitbarjibhe' },
      { subtitle: 'Youtube', href: 'https://www.youtube.com/channel/UCHQS8ubdsVbx41IeNRYP-Rg' },
    ],
  },
  {
    header: 'Certification',
    links: [
      { subtitle: 'Web Dev Bootcamp 2022 ', href: 'https://www.udemy.com/certificate/UC-194b2154-4b1d-4f54-99da-f39f2dd349b7/' },
      { subtitle: 'MERN Bootcamp 2023 ', href: 'https://www.udemy.com/certificate/UC-e04625b0-df28-44e8-bb6e-26003562e77a/' },
      { subtitle: 'JavaScript DSA', href: 'https://www.freecodecamp.org/certification/fccb5b649d7-82aa-47e7-a819-c5ee11c6317e/javascript-algorithms-and-data-structures' },
      { subtitle: 'Responsive Web Design', href: 'https://www.freecodecamp.org/certification/fccb5b649d7-82aa-47e7-a819-c5ee11c6317e/responsive-web-design' },
    ],
  },
  {
    header: 'Community',
    links: [
      { subtitle: 'Link 1 ', href: 'https://www.example3.com' },
    ],
  },
];

