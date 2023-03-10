import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { urlFor } from "../sanity";
import {
  Experience,
  PageInfo,
  Project,
  Resume,
  Skill,
  Social,
} from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchResume } from "../utils/fetchResume";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  resume: Resume;
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  resume,
}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
     overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <div className="">
        <Head>
          <title>Damian&apos;s Portfolio</title>
        </Head>

        <Header socials={socials} resume={resume} />

        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>

        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                className="h-10 w-10 rounded-full  filter grayscale hover:grayscale-0 cursor-pointer"
                src={urlFor(pageInfo?.heroImage).url()}
                alt=""
                priority
                width={40}
                height={40}
              />
            </div>
          </footer>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const resume: Resume = await fetchResume();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      resume,
    },
    revalidate: 10,
  };
};
