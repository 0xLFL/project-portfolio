import HomePage from '@/components/HomePage/index';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import config from '../config.json';
const {
  grades
} = config

export type Grade = typeof grades[keyof typeof grades];

export interface Project {
  name: string,
  description: string,
  repo: string,
  img: string,
  example: string,
}

export interface Course {
  name: string,
  mark: number | null,
  grade: Grade | null,
  discription: string,
}

export interface Config {
  github: string,
  projects: Project[],
  notableCourses: Course[],
  educationDescription: string,
  welcomeMessageLarge: string,
  welecomeMessageSmall: string,
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `Page for ${params.slug}`,
  };
}

export default async function ConfigPage({ params }: { params: { route: string } }) {
  const { route } = await params;

  // Fetch configuration from the database
  let configData: Config | null = null;

  configData = {
    github: '0xLFL',
    projects: [{
      name: 'Snake',
      description: 'This is a new take on the classic game of snake, whilst it still has the classic gamemode within it, there is also 2 new gamemodes that allow you to vs the computer or another person respectively',
      repo: 'snake',
      img: 'https://symphonious-selkie-ebdd8f.netlify.app/file.svg',
      example: 'https://snake-0xlfl.netlify.app',
    }, {
      name: 'Project two',
      description: 'This is the description for project two',
      repo: 'project-portfolio',
      img: 'https://symphonious-selkie-ebdd8f.netlify.app/file.svg',
      example: 'https://github.com/0xLFL',
    }, {
      name: 'Project three',
      description: 'This is the description for project three',
      repo: 'project-portfolio',
      img: 'https://symphonious-selkie-ebdd8f.netlify.app/file.svg',
      example: 'https://github.com/0xLFL',
    }, {
      name: 'Project four',
      description: 'This is the description for project four',
      repo: 'project-portfolio',
      img: 'https://symphonious-selkie-ebdd8f.netlify.app/file.svg',
      example: 'https://github.com/0xLFL',
    }],
    notableCourses: [{
      name: 'COMP6080 Web Front-End Programming',
      mark: null,
      grade: 'High Distinction',
      discription: 'This course takes students from basic static HTML and css websites, through to using ReactJs to create dynamic websites'
    }, {
      name: 'COMP2521 Data Structures and Algorithms',
      mark: null,
      grade: 'Credit',
      discription: 'This course provides an introduction to the structure, analysis and usage of a range of fundamental data types and the core algorithms that operate on them.'
    }, {
      name: 'COMP2511 Object-Oriented Design & Programming',
      mark: null,
      grade: 'Credit',
      discription: 'The course introduces students to Object-Oriented Programming and explores how OOP attempts to solve the problem of good software design. Software design patterns are also taught in this course.'
    }, {
      name: 'COMP1511 Programing Fundamentals',
      mark: null,
      grade: 'High Distinction',
      discription: 'This course is an introductory course to the basics of computer programming and Computer Science.'
    }],
    educationDescription: 'I studied a Bachelor of Computer Science at the University of New South Wales. I begun my studies in february 2021, initialy studying electrical engineering before picking up computer science as a double degree and later dropping down to just study computer science. Through my degree i have learnt propper git tequies, software design pattens, agile programing (Jira) and sql database design as well as various type of test such as black box, unit, end to end and compent testing.',
    welcomeMessageLarge: 'Hey, my name is Luke',
    welecomeMessageSmall: 'I’m a recently graduate from the University of New South Wales (Sydney), Bachelor of Computer Science Program'
  }

  if (configData) {
    return (
      <PageContent config={configData}/>
    )
  }
  return notFound();
}

function PageContent({ config }: { config: Config }) {
  return (
    <HomePage config={config}/>
  );
}
