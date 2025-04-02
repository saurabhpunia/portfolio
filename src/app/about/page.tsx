import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Saurabh Punia. I live in Ahmedabad, India where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Saurabh Punia. <br/> I live in Ahmedabad, India, where I build innovative digital experiences.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m Saurabh Punia, a Software Engineer with over 4 years of experience in full-stack development, specializing in PHP, Laravel, Livewire, Vue.js, Nuxt.js, Quasar, JavaScript, TypeScript, React and Alpine.js to build scalable and high-performance web applications. With expertise in both front-end and back-end development, I focus on creating responsive, user-friendly interfaces while ensuring seamless integration with RESTful APIs, GraphQL, and database management systems like MySQL and PostgreSQL. Passionate about problem-solving and optimizing applications, I continuously strive to enhance performance, security, and user experience through modern technologies and best practices.
            </p>
            <p>
              Throughout my career, I have successfully managed and contributed to a variety of projects, including multi-tenant serverless applications, employee management systems, recruitment platforms, and file-sharing services. I have extensive experience working with AWS services (Lambda, S3, SES, SQS, CloudWatch), Docker, Nginx, and Apache for deployment and cloud-based solutions.
            </p>
            <p>
              I take pride in my problem-solving skills, having resolved 1500+ bugs and optimized multiple applications for speed, security, and mobile responsiveness. Additionally, I have experience mentoring developers, conducting technical interviews, and leading teams in an Agile environment.
            </p>
            <p>
              From designing database architectures to integrating third-party APIs (Stripe, Twilio, Google Calendar, SureScripts, Paytm, HubSpot, and more), I am always looking for innovative ways to enhance software performance and user experience.
            </p>
            
            <p>
              Let’s connect and build something amazing together! 🚀
            </p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/_jaattitude/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/saurabhpunia/" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/saurabh-punia-57b370152/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:chaudharysaurabhpunia@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-7 pb-2 dark:border-zinc-700/40"
            >
              chaudharysaurabhpunia@gmail.com
            </SocialLink>
          </ul>
          <div className="mt-6 border-t border-zinc-100 dark:border-zinc-700/40 pt-8 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am passionate about continuous learning, staying up-to-date with the latest technologies, and delivering high-quality digital solutions. Whether it's developing a robust backend system, crafting an intuitive UI, or scaling cloud-based applications, I thrive on tackling challenges and creating impactful software.
              </p>
              <p>
                I am always eager to learn and adapt to new challenges, whether it’s exploring new frameworks or diving into complex algorithms. My goal is to create innovative solutions that not only meet client requirements but also enhance user experience and drive business success.
              </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
