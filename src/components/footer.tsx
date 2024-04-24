import Link from 'next/link';
import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FooterForm } from '@/components/forms/footer-mailing/footer-form';

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

export const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto px-4 pb-8 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="border-t border-gray-100 pt-8 lg:mt-24">
          <div className="flex justify-between w-full items-end">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-start">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="transition hover:opacity-75">
                    {link.name}
                  </Link>
                </li>
              ))}
              {generalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="transition hover:opacity-75">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <FooterForm />
          </div>
        </div>
      </div>
    </footer>
  );
};

const generalLinks = [
  { name: 'Privacy Policy', url: '/privacy-policy' },
  { name: 'Terms of Service', url: '/tos' },
  // { name: 'Contact Us', url: '/contact' },
];

const socialLinks: SocialLink[] = [
  // {
  //   name: 'Facebook',
  //   url: '#',
  //   icon: <FaFacebookF className="h-6 w-6" />,
  // },
  // {
  //   name: 'Instagram',
  //   url: '#',
  //   icon: <FaInstagram className="h-6 w-6" />,
  // },
  // {
  //   name: 'Twitter',
  //   url: '#',
  //   icon: <FaXTwitter className="h-6 w-6" />,
  // },
];
