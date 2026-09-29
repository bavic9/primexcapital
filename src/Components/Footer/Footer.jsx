import React from 'react';
import logo from '../Assets/logosmb.png';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';

const social = [
  ['https://x.com/Prime_x_capital?t=3JHg2WNpMJhStizWAqqkOQ&s=08', FaTwitter, 'X'],
  ['https://www.facebook.com/groups/2545729222112814', FaFacebookF, 'Facebook'],
  ['https://www.tiktok.com/@primexcapital?_t=8l7IAPBQmOr&_r=1', FaTiktok, 'TikTok'],
  ['https://www.instagram.com/prime_x_capital?igsh=aWJrNTczaTFzNDhy', FaInstagram, 'Instagram'],
  ['https://youtube.com/@primexcapital?si=edlxB6SH-DSwusdn', FaYoutube, 'YouTube'],
  ['https://t.me/primexcapital', FaTelegram, 'Telegram'],
];

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300">
    <div className="page-container grid gap-10 py-12 md:grid-cols-3">
      <div>
        <img src={logo} alt="Prime X Capital" className="h-12 w-auto" />
        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
          Trading education, resources, and community for developing traders.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">Explore</h3>
        <div className="mt-4 flex flex-col gap-2 text-sm">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/mentorship" className="hover:text-white">Mentorship</a>
          <a href="/blog" className="hover:text-white">Blog</a>
          <a href="/faqs" className="hover:text-white">FAQs</a>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">Follow us</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {social.map(([url, Icon, label]) => (
            <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} className="rounded-lg border border-slate-700 p-2.5 text-slate-400 hover:border-slate-500 hover:text-white">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-slate-800">
      <div className="page-container py-5 text-xs text-slate-500">© {new Date().getFullYear()} Prime X Capital. All Rights Reserved.</div>
    </div>
  </footer>
);

export default Footer;
