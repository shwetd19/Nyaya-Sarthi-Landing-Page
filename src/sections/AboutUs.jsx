import React from 'react';
import FAQ from './FAQ';
import Aos from 'aos';
export const AboutUs = () => {
  const teamMentors = [
    {
      id: 1,
      name: 'Nauman Chohan',
      role: 'Industry Mentor',
      linkedin: 'https://www.linkedin.com/in/nauman-chohan-a424351bb/',
      github: '',
      twitter: '',
      description: 'Machine Learning Engineer',
      image:
        'https://media.licdn.com/dms/image/C4E03AQFjCiGoDlwFGw/profile-displayphoto-shrink_400_400/0/1620688060668?e=1708560000&v=beta&t=w-SCkec7Rzj66U6l_djDLndNMLhSlcMis_7zjADhpYU'
    },

    {
      id: 2,
      name: 'Prof. Neha Hajare',
      role: 'College Mentor',
      linkedin: 'https://www.linkedin.com/in/neha-hajare-raut-988a1182/',
      github: '',
      twitter: '',
      description: 'AWS Certified Professional and IT Enthusiast',
      image:
        'https://media.licdn.com/dms/image/D4D03AQGQOZVAigaZmQ/profile-displayphoto-shrink_800_800/0/1663096627002?e=1708560000&v=beta&t=F4AGGA39hTMvfmBvjMnOnUFfOSXVvau5h0czRdAtOGo'

      // Add more social media objects as neede
    }
  ];

  const teamGuides = [
    {
      id: 1,
      name: 'Murari Ramuka',
      role: 'External Guide',
      linkedin: 'https://www.linkedin.com/in/murari-ramuka-98a440a/',
      github: '',
      twitter: '',
      description: 'Data Analytics Specialist at Google',
      image: 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702892625/murari_yzvnff.jpg'
    },
    {
      id: 2,
      name: 'Parth Kolgiri',
      role: 'External Guide',
      linkedin: 'https://www.linkedin.com/in/parth-k-b10aba144/',
      github: '',
      twitter: '',
      description: 'Fullstack Developer',
      image:
        'https://media.licdn.com/dms/image/D4D03AQHcNEFrZfQosA/profile-displayphoto-shrink_800_800/0/1680590304361?e=1708560000&v=beta&t=vzVOqStjdfg5_ZhpT34HrxG6oA_R1mqb2DI1lYVq554'
    }
  ];

  const teamMembers = [
    {
      name: 'Neeraj Kumar',
      role: 'MERN Stack Developer, Data Scientist',
      linkedin: 'https://www.linkedin.com/in/neeraj-kumar-091415237/',
      github: '',
      twitter: '',
      bio: 'Neeraj Kumar, skilled in data science techniques for analyzing and deriving insights from data set. He is also proficient in MERN stack development',
      image:
        'https://media.licdn.com/dms/image/C4D03AQHDouCZOYFGNg/profile-displayphoto-shrink_800_800/0/1659377685995?e=1708560000&v=beta&t=uHYtLpp2pfmVJ-m5p1WBiiJNBMFb6CXL7-25HZGYLS8'
    },
    {
      name: 'Mitesh Tank',
      role: 'Full Stack Developer, DevOps',
      linkedin: 'https://www.linkedin.com/in/mitesh-tank/',
      github: 'https://github.com/codewithmitesh',
      twitter: '',
      bio: 'Mitesh Tank, a full stack web developer, experienced in creating web applications ensuring seamless deployment and integration.',
      image: 'https://avatars.githubusercontent.com/u/85953650?v=4'
    },
    {
      name: 'Prasad Lokhande',
      role: 'MERN Stack, AI/ML',
      linkedin: 'https://www.linkedin.com/in/prasad-lokhande-540020254/',
      github: '',
      twitter: '',
      bio: 'Prasad Lokhande, skills person in MERN stack development and capable in leveraging AI and machine learning to build applications',
      image:
        'https://media.licdn.com/dms/image/D4D03AQHDz74j17EEbg/profile-displayphoto-shrink_800_800/0/1679330842246?e=1708560000&v=beta&t=0po5foh9m1_BlqaAQvYtz2mk8sWKW4pNA5zoCbw1Ba4'
    },
    {
      name: 'Abhishek Pawar',
      role: 'Web Developer, Cloud Computing',
      linkedin: 'https://www.linkedin.com/in/abhishek-pawar-63629022a/',
      github: '',
      twitter: '',
      bio: 'Abhishek Pawar, excellent in creating websites, and skilled in utilising cloud Technology for modern, scalable online solutions.',
      image:
        'https://media.licdn.com/dms/image/C4D03AQE7vlN6-aNRgw/profile-displayphoto-shrink_800_800/0/1658039867904?e=1708560000&v=beta&t=nF_5x7IA1XQP9IZLvooNDkD3lJuDLNMrhIPYNRAEDDI'
    },
    {
      name: 'Shwetas Dhake',
      role: 'Fullstack Developer',
      linkedin: 'https://www.linkedin.com/in/shwetas-dhake/',
      github: '',
      twitter: '',
      bio: 'Shwetas Dhake, is a full stack developer, experienced at crafting website using technologies for both front-end and back-end development',
      image: 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702892873/dhake_yh3rny.jpg'
    },
    {
      name: 'Tanvi Pednekar',
      role: 'Frontend Developer',
      linkedin: 'https://www.linkedin.com/in/pednekartanvi/',
      github: '',
      twitter: '',
      bio: 'Tanvi Pednekar, is knowledgeable in frontend development and crafting engaging user experiences for web applications',
      image:
        'https://media.licdn.com/dms/image/D4E03AQGc0omFNMhP8g/profile-displayphoto-shrink_800_800/0/1688987769783?e=1708560000&v=beta&t=w47zuAMPGtAakuZWL_zBJXUjQyzUr_f4DOnqdHynbrI'
    }
  ];

  return (
    <>
      <div data-aos="zoom-out" className="m-10 flex flex-col  justify-center px-16 py-40 absolute z-20" id="about-us">
      
        <div data-aos="fade-up-right">
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[110px] font-bold">
            <span className=" xl:whitespace-nowrap relative pr-10 xl: dark:xl:bg-slate-gray duration-400 rounded-lg">
              Team
            </span>
            <br />
            <span className="text-coral-red inline-block mt-6">ASTRA_11 </span>
          </h1>
          <p className="font-montserrat text-black bold text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-gray-400">
            These are the dynamic minds crafting innovative solutions to redefine case management for seamless
            legal experience.
          </p>
        </div>
        {/* <h1 className="text-white text-4xl">Text Matter Team ASTRA</h1> */}
      </div>
      <div className="w-full relative -z-10 mb-64">
        <img
          className="opacity-90 object-contain scale-[2.1] max-h-full overflow-y-hidden "
          src={
            'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702896148/top-view-career-guidance-items-judges_23-2149443469_1_qadwhy.jpg'
          }
        />
      </div>

      <div className="max-w-[85rem] px-4 m-0 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
        <div className="max-w-2xl mx-auto bg-rgb(245 246 255 / var(--tw-bg-opacity)) text-center mb-10 lg:mb-14">
          {/* <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meet Our Developer Team</h2> */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              MEET OUR DEVELOPER TEAM
            </h1>
            <p className="mx-auto leading-relaxed text-base">
              Meet the awesome minds behind our products – our developers! They turn cool ideas into real things, making
              our tech top-notch.
            </p>
          </div>
        </div>
        <div data-aos="zoom-out" className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-indigo-50 shadow-3xl pt-8 pb-8 rounded-xl hover:scale-105 ease-out duration-300 transition-all"
            >
              <img
                className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto "
                src={member.image}
                alt={`Image of ${member.name}`}
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-900 sm:text-base lg:text-lg dark:text-gray-200">
                  {member.name}
                </h3>

                <p className="p-1 text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">{member.role}</p>
                <p className="p-4 text-xs text-grey-700 sm:text-sm lg:text-base dark:text-black-400">{member.bio}</p>
              </div>
              <div className="flex flex-row justify-center gap-5 items-center">
                <a href={member.linkedin}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
                <a href={member.github}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                    <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                  </svg>
                </a>
                <a href={member.twitter}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">TEAM MENTORS</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Meet the mentors – your go-to team for guidance and success. With experience and passion, they're here
                to champion your journey.
              </p>
            </div>
            <div>
              <div data-aos="zoom-in" className="flex justify-evenly -m-4 flex-wrap ">
                {/* Team members */}
                {teamMentors.map((member) => (
                  <div
                    key={member.id}
                    className="p-4 lg:w-[45%] hover:scale-105 ease-out duration-300 shadow-3xl transition-all"
                  >
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src={member.image}
                      />
                      <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                        <h3 className="text-gray-500 mb-3">{member.role}</h3>
                        <p className="mb-4">{member.description}</p>
                        <div className="flex flex-row justify-start gap-5 items-center">
                          <a href={member.linkedin}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                          </a>
                          <a href={member.linkedin}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                              <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                            </svg>
                          </a>
                          <a href="https://www.linkedin.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
                            </svg>
                          </a>
                        </div>
                        {/* <span className="inline-flex"> */}
                        {/* Social media icons */}
                        {/* {member.socialMedia.map((social, index) => (
                        <a
                          key={index}
                          className="ml-2 text-gray-500"
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d={social.iconPath}></path>
                          </svg>
                        </a>
                      ))} */}

                        {/* </span> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-center w-full mt-20 mb-20">
                <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">EXTERNAL GUIDES</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Connect with our external guides – your dedicated support system for expert advice and triumph. With a
                  wealth of experience and unwavering commitment, they are here to empower your path to success.
                </p>
              </div>
              <div>
                <div data-aos="zoom-in" className="flex justify-evenly -m-4 flex-wrap ">
                  {/* Team members */}
                  {teamGuides.map((member) => (
                    <div
                      key={member.id}
                      className="p-4 lg:w-[45%] hover:scale-105 ease-out duration-300 shadow-3xl transition-all"
                    >
                      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                          src={member.image}
                        />
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                          <h3 className="text-gray-500 mb-3">{member.role}</h3>
                          <p className="mb-4">{member.description}</p>
                          <div className="flex flex-row justify-start gap-5 items-center">
                            <a href={member.linkedin}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                              </svg>
                            </a>
                            <a href="https://www.linkedin.com/">
                              <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                                <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                              </svg>
                            </a>
                            <a href="https://www.linkedin.com/">
                              <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
                              </svg>
                            </a>
                          </div>
                          {/* <span className="inline-flex"> */}
                          {/* Social media icons */}
                          {/* {member.socialMedia.map((social, index) => (
                        <a
                          key={index}
                          className="ml-2 text-gray-500"
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d={social.iconPath}></path>
                          </svg>
                        </a>
                      ))} */}

                          {/* </span> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* );
}; */}
      </div>
      <FAQ />
    </>
  );
};

// export default AboutUs;
