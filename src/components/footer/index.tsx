import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '../ui/separator';
import { RiInstagramLine } from 'react-icons/ri';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { RiTwitterXFill } from 'react-icons/ri';

interface TextLink {
  title: string;
  href: string;
}

interface IconLink {
  icon: React.ReactNode;
  href: string;
}

const SupportLinks: TextLink[] = [
  {
    title: 'Help Center',
    href: '#',
  },
  {
    title: 'Air Cover',
    href: '#',
  },
  {
    title: 'Anti-discrimination',
    href: '#',
  },
  {
    title: 'Disability support',
    href: '#',
  },
  {
    title: 'Cancellation options',
    href: '#',
  },
  {
    title: 'Report neighborhood concern',
    href: '#',
  },
];

const HostingLinks: TextLink[] = [
  {
    title: 'Laurylee your home',
    href: '#',
  },
  {
    title: 'AirCover for Hosts',
    href: '#',
  },
  {
    title: 'Hosting resources',
    href: '#',
  },
  {
    title: 'Community forum',
    href: '#',
  },
  {
    title: 'Hosting responsibly',
    href: '#',
  },
  {
    title: 'Laurylee-friendly apartments',
    href: '#',
  },
];

const LauryleeLinks: TextLink[] = [
  {
    title: 'Newsroom',
    href: '#',
  },
  {
    title: 'New features',
    href: '#',
  },
  {
    title: 'Careers resources',
    href: '#',
  },
  {
    title: 'Investors',
    href: '#',
  },
  {
    title: 'Gift cards',
    href: '#',
  },
  {
    title: 'laurylee.com emergency stays',
    href: '#',
  },
];

const SocialLinks: IconLink[] = [
  {
    icon: <RiFacebookCircleFill className='size-4 text-white' />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <RiTwitterXFill className='size-4 text-white' />,
    href: 'https://twitter.com/',
  },
  {
    icon: <RiInstagramLine className='size-4 text-white' />,
    href: 'https://www.instagram.com/',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className='bg-lightGray pt-[3.75rem] pb-[1.875rem] h-[400px]'>
      <div className='max-w-[70.0625rem] w-full m-auto'>
        <div className='flex items-start justify-between mb-12 mr-[160px]'>
          <div className='flex flex-col gap-1.5'>
            <h2 className='paragraph-1 text-black mb-2'>Support</h2>
            {SupportLinks.map((link, index) => (
              <p key={index} className='paragraph-1 text-darkGray'>
                <Link to={link.href}>{link.title}</Link>
              </p>
            ))}
          </div>
          <div className='flex flex-col gap-1.5'>
            <h2 className='paragraph-1 text-black mb-3'>Hosting</h2>
            {HostingLinks.map((link, index) => (
              <p key={index} className='paragraph-1 text-darkGray'>
                <Link to={link.href}>{link.title}</Link>
              </p>
            ))}
          </div>
          <div className='flex flex-col gap-1.5'>
            <h2 className='paragraph-1 text-black mb-3'>Laurylee</h2>
            {LauryleeLinks.map((link, index) => (
              <p key={index} className='paragraph-1 text-darkGray'>
                <Link to={link.href}>{link.title}</Link>
              </p>
            ))}
          </div>
        </div>
        <Separator className='mb-5' />
        <div className='flex'>
          <p className='paragraph-1 text-darkGray mr-10'>
            © 2024 Laurylee. All rights reserved
          </p>
          <ul className='flex gap-5 mr-auto list-inside list-disc'>
            <li>
              <Link to='#'>Terms</Link>
            </li>
            <li>
              <Link to='#'>Sitemap</Link>
            </li>
            <li>
              <Link to='#'>Privacy</Link>
            </li>
            <li>
              <Link to='#'>Contact</Link>
            </li>
          </ul>
          <div className='flex gap-4'>
            {SocialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className='size-6 bg-black flex justify-center items-center hover:bg-black/80 transition-all duration-200 ease-in-out'
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
