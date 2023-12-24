import { facebook, instagram, shieldTick, support, truckFast, twitter, github } from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  customer3,
  customer4,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3
} from '../assets/images';

export const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/AboutUs', label: 'About Us' },
  // { href: '/products', label: 'Products' },
  { href: '/Signup', label: 'Contact Us' }
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3
  }
];

export const features = [
  {
    id: 'feature-1',
    // icon: send,
    title: 'Case E-filing System',
    content:
      'Upon a legal case registration, generation of an e-file, enabling swift documentation and organized record creation for the case'
  },
  {
    id: 'feature-2',
    // icon: shield,
    title: 'Prioritized & Scheduled Case List ',
    content: 'Curated and organized list of prioritized case schedules for efficient proceedings.'
  },
  {
    id: 'feature-3',
    // icon: star,
    title: 'Centralized dashboard',
    content:
      'Efficiently manage cases with a centralized dashboard and digital record system, enhancing accessibility and organization.'
  },
  {
    id: 'feature-3',
    // icon: send,
    title: 'Judicial Override: Scheduled Case Flexibility',
    content:
      'Granting judges the authority to modify scheduled case orders, ensuring flexibility and fairness in exceptional circumstances..'
  }
  // {
  //   id: "feature-4",
  //   icon: send,
  //   title: "Automatic alerts & Notifications ",
  //   content:
  //     "Stay informed with automated alerts and notifications for scheduled cases, ensuring timely updates and seamless coordination.",
  // },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' }
];

export const products = [
  {
    productId: 100,
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: 200.2
  },
  {
    productId: 101,
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: 210.2
  },
  {
    productId: 102,
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: 220.2
  },
  {
    productId: 103,
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: 230.2
  }
];

export const services = [
  {
    imgURL: 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702906529/sched_yekcee.png',
    label: 'Case E-Filing System',
    subtext:
      'Upon a legal case registration, generation of an e-file, enabling swift documentation and organized record creation for the case'
  },
  {
    imgURL: 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702906529/list_wapxqs.png',
    label: 'Priority based Scheduling',
    subtext:
      'Efficiently manage cases with a centralized dashboard and digital record system, enhancing accessibility and organization.'
  },
  {
    imgURL: 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702906530/judge_rgajps.png',
    label: 'Judicial Override',
    subtext:
      'Granting judges the authority to modify scheduled case orders, ensuring flexibility and fairness in exceptional circumstances.'
  }
];

export const reviews = [
  {
    imgURL:
      'https://media.licdn.com/dms/image/C4E03AQFjCiGoDlwFGw/profile-displayphoto-shrink_400_400/0/1620688060668?e=1708560000&v=beta&t=w-SCkec7Rzj66U6l_djDLndNMLhSlcMis_7zjADhpYU',
    customerName: 'Nauman Chohan',
    rating: 4.4,
    feedback: 'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'
  },
  {
    imgURL:
      'https://media.licdn.com/dms/image/D4D03AQGQOZVAigaZmQ/profile-displayphoto-shrink_800_800/0/1663096627002?e=1708560000&v=beta&t=F4AGGA39hTMvfmBvjMnOnUFfOSXVvau5h0czRdAtOGo',
    customerName: 'Neha Hajare',
    rating: 4.2,
    feedback:
      'I apprecaite the convenience this platform provides. The organized case list and easy navigation truly helps in managing legal matters effectivley.'
  },
  {
    imgURL: 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702892625/murari_yzvnff.jpg',
    customerName: 'Murari Ramuka (Google)',
    rating: 4,
    feedback:
      "The platform's design is incredible. The case registeration, updates really has a quick response. Morover, the data about case types, court complexes is  highly accurate. "
  },
  {
    imgURL: 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702920943/WhatsApp_Image_2023-12-18_at_23.05.10_cf951103_isb0rr.jpg',
    customerName: 'Adv. P.N. Gope (Ex. P.P. Jamshedpur)',
    rating: 4.1,
    feedback:
      'I am a lawyer, and this website is really an innovation in this field. It is user-friendly and provides helpful overview of case statuses separate display of competed, pending cases, scheduled-unscheduled cases, aiding lawyers like me in our work.'
  }
  // {
  //   imgURL: customer4,
  //   customerName: 'Adv. Ashutosh Singh',
  //   rating: 4.1,
  //   feedback:
  //     'I am a lawyer, and this website is really an innovation in this field. It is user-friendly and provides helpful overview of case statuses separate display of competed, pending cases, scheduled-unscheduled cases, aiding lawyers like me in our work.'
  // }
];

export const footerLinks = [
  {
    title: 'Help',
    links: [
      { name: 'Terms and Conditions', link: '/' },
      { name: 'Video Tutorial', link: '/SuperQuality' },
      { name: 'Documentation', link: '/' }

      // { name: 'Air Force 2', link: '/' },
      // { name: 'Nike Waffle Racer', link: '/' },
      // { name: 'Nike Cortez', link: '/' }
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Chat with us', link: '/' },
      { name: 'FAQs', link: '/FAQ' },
      { name: 'User Reviews', link: '/CustomerReviews' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'teamastra@gmail.com', link: 'mailto:teamastra@gmail.com' },
      { name: '+91 7218821284', link: 'tel:+917218821284' }
    ]
  }
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
  {
    src: github,
    alt: 'github logo',
    link: 'https://github.com/codewithmitesh'
  }
];

export const cartItems = [
  {
    id: 1,
    name: 'Nike Air Max 2019',
    size: '36EU - 4US',
    price: 1259.0,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
  },
  {
    id: 2,
    name: 'Nike Air Max 2019',
    size: '36EU - 4US',
    price: 1259.0,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
  }
];
