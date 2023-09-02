import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Moshe',
  lastName: 'Basall',
  initials: 'js', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack / Front End Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'based in Israel',
    },
    {
      emoji: '💼',
      text: 'Systems Engineer at BambiDynamic',
    },
    {
      emoji: '📧',
      text: 'basall7@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://www.facebook.com/moshiko.basal1',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://github.com/moshBa92',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/moshe-basall/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hello! I'm Moshe. I'm a systems engineer for Bambidynamic. I studied CompSci at Talpiot hitech, I enjoy to play football and make great coctails, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'bootstrap',
      'html 5',
      'css3',
      'figma',
      'typescript',
      'Mui',
    ],
    exposedTo: ['nodejs', 'angular', 'figma'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
  ],
  portfolio: [
    {
      title: 'Code-Editor',
      source: 'https://github.com/moshBa92/jbook-code-editor-main', // this should imgbe a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Color memory game',
      source: 'https://github.com/moshBa92/color-memo',
      image: mock2,
    },
    // {
    //   title: 'Project 3',
    //   source: 'https://github.com/paytonjewell',
    //   image: mock3,
    // },
  ],
};
