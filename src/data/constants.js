import React from 'react';
import { FaWordpress, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaShopify, FaGithub, FaServer } from 'react-icons/fa';

export const NAV_LINKS = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Experience', path: '#experience' },
  { name: 'Projects', path: '#projects' },
  { name: 'Services', path: '#services' },
  { name: 'Contact', path: '#contact' },
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Projects' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Countries Served' },
];

export const SKILLS = [
  {
    category: 'WordPress',
    skills: [
      { name: 'Elementor Pro', level: 95 },
      { name: 'WooCommerce', level: 90 },
      { name: 'WPBakery', level: 85 },
      { name: 'Divi', level: 80 },
      { name: 'Theme Customization', level: 95 },
      { name: 'Plugin Customization', level: 85 },
      { name: 'ACF', level: 90 },
      { name: 'Contact Forms', level: 100 },
      { name: 'Speed Optimization', level: 95 },
    ]
  },
  {
    category: 'Front-End',
    skills: [
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Responsive Design', level: 100 },
      { name: 'Cross Browser Comp.', level: 95 },
    ]
  },
  {
    category: 'E-Commerce',
    skills: [
      { name: 'WooCommerce', level: 95 },
      { name: 'Shopify', level: 80 },
      { name: 'Payment Gateways', level: 90 },
      { name: 'Product Management', level: 95 },
      { name: 'Checkout Customization', level: 90 },
    ]
  },
  {
    category: 'Other',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'cPanel', level: 95 },
      { name: 'SEO', level: 85 },
      { name: 'Website Migration', level: 95 },
      { name: 'Hosting', level: 90 },
      { name: 'Performance Opt.', level: 95 },
    ]
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Front-End & WordPress Developer',
    company: 'Adaxiom Tech',
    date: 'February 2021 – Present',
    responsibilities: [
      'Developed responsive websites',
      'Built custom WordPress websites',
      'Designed websites using Elementor',
      'WooCommerce store development',
      'Landing Pages',
      'Speed Optimization',
      'Website Maintenance',
      'Bug Fixing',
      'Theme Customization',
      'Plugin Integration',
    ]
  }
];

export const PROJECTS = [
  { id: 1, title: 'Adsells', url: 'https://www.adsells.biz/', category: 'Corporate', image: 'https://picsum.photos/seed/Adsells/800/450' },
  { id: 2, title: 'Western Youth Services', url: 'https://www.westernyouthservices.org/', category: 'Healthcare', image: 'https://picsum.photos/seed/WesternYouthServices/800/450' },
  { id: 3, title: 'Ironwood Venture', url: 'https://ironwoodventure.com/', category: 'Corporate', image: 'https://picsum.photos/seed/IronwoodVenture/800/450' },
  { id: 4, title: 'ESAFAB', url: 'https://esafab.com/', category: 'Corporate', image: 'https://picsum.photos/seed/ESAFAB/800/450' },
  { id: 5, title: 'The Nix Creative', url: 'https://thenixcreative.com/', category: 'Corporate', image: 'https://picsum.photos/seed/TheNixCreative/800/450' },
  { id: 6, title: 'Comfort & Care Apparel', url: 'https://www.comfortandcareapparel.com/', category: 'E-commerce', image: 'https://picsum.photos/seed/ComfortCareApparel/800/450' },
  { id: 7, title: 'Banu Mukhtar Farms', url: 'https://banumukhtarfarms.com/', category: 'Corporate', image: 'https://picsum.photos/seed/BanuMukhtarFarms/800/450' },
  { id: 8, title: 'Psych Bright Health', url: 'https://psychbrighthealth.com/', category: 'Healthcare', image: 'https://picsum.photos/seed/PsychBrightHealth/800/450' },
  { id: 9, title: 'MIQJAAF', url: 'https://miqjaaf.co.za/', category: 'Corporate', image: 'https://picsum.photos/seed/MIQJAAF/800/450' },
  { id: 10, title: 'Flow Petroleum', url: 'https://flowpetroleum.com.pk/', category: 'Corporate', image: 'https://picsum.photos/seed/FlowPetroleum/800/450' },
  { id: 11, title: 'When Light Fades Away Hope Remains', url: 'https://whenlightfadesawayhoperemains.com/', category: 'Corporate', image: 'https://picsum.photos/seed/WhenLightFadesAway/800/450' },
  { id: 12, title: 'USI Traders', url: 'https://usitraders.co.za/', category: 'E-commerce', image: 'https://picsum.photos/seed/USITraders/800/450' },
  { id: 13, title: 'Sitech', url: 'https://sitech.com.pk/', category: 'Corporate', image: 'https://picsum.photos/seed/Sitech/800/450' },
  { id: 14, title: 'Madagascar Invest', url: 'https://madagascarinvest.com/', category: 'Finance', image: 'https://picsum.photos/seed/MadagascarInvest/800/450' },
  { id: 15, title: 'Graph N Print', url: 'https://graphnprint.com/', category: 'Corporate', image: 'https://picsum.photos/seed/GraphNPrint/800/450' },
  { id: 16, title: 'Notta Taj Law', url: 'https://nottatajlaw.com/', category: 'Corporate', image: 'https://picsum.photos/seed/NottaTajLaw/800/450' },
  { id: 17, title: 'Adsell Starweej', url: 'https://adsellstarweej.com/', category: 'Corporate', image: 'https://picsum.photos/seed/AdsellStarweej/800/450' },
  { id: 18, title: 'Rubric System', url: 'https://rubricsystem.com/', category: 'Corporate', image: 'https://picsum.photos/seed/RubricSystem/800/450' },
  { id: 19, title: 'SSN Services', url: 'https://ssn-services.co.uk/', category: 'Corporate', image: 'https://picsum.photos/seed/SSNServices/800/450' },
  { id: 20, title: 'SKAS Tax Services', url: 'https://skastaxservices.ca/', category: 'Finance', image: 'https://picsum.photos/seed/SKASTaxServices/800/450' },
  { id: 21, title: 'Home Grant Funds', url: 'https://homegrantfunds.com/', category: 'Finance', image: 'https://picsum.photos/seed/HomeGrantFunds/800/450' },
  { id: 22, title: 'Strix Defense', url: 'https://strixdefense.net/', category: 'Corporate', image: 'https://picsum.photos/seed/StrixDefense/800/450' },
  { id: 23, title: 'Curio Design Studio', url: 'https://curiodesignstudio.com/', category: 'E-commerce', image: 'https://picsum.photos/seed/CurioDesignStudio/800/450' },
];

export const SERVICES = [
  { title: 'Custom WordPress Development', description: 'Custom, scalable, and secure WordPress websites tailored to your business needs.' },
  { title: 'Elementor Pro Expert', description: 'Pixel-perfect, high-performance designs built with Elementor Pro.' },
  { title: 'WooCommerce Store Development', description: 'Fully functional, secure e-commerce solutions with custom checkouts and payment gateways.' },
  { title: 'Landing Page Design', description: 'High-converting, fast-loading landing pages for campaigns and products.' },
  { title: 'WordPress Speed Optimization', description: 'Achieve 90+ Lighthouse scores for better user experience and SEO.' },
  { title: 'Theme & Plugin Customization', description: 'Modifying existing themes and plugins to perfectly fit your unique requirements.' },
  { title: 'Bug Fixing & Maintenance', description: 'Identify and resolve website issues, console errors, and perform regular updates.' },
  { title: 'Shopify Store Customization', description: 'Beautiful, conversion-optimized Shopify stores tailored to your brand.' },
  { title: 'Responsive Web Development', description: 'Flawless experiences across all devices—mobile, tablet, and desktop.' },
  { title: 'Cross-Browser Compatibility', description: 'Ensuring your website looks and functions perfectly across all modern web browsers.' },
  { title: 'Website Migration', description: 'Seamless migration of websites across servers or domains with zero downtime.' },
  { title: 'SEO-Friendly Development', description: 'On-page SEO, schema markup, and semantic HTML to rank higher.' },
];

export const TESTIMONIALS = [
  { id: 1, name: 'John Doe', position: 'CEO, TechCorp', text: 'Muhammad Hussain is an exceptional developer. He delivered our WooCommerce store on time and it looks stunning.' },
  { id: 2, name: 'Sarah Smith', position: 'Marketing Manager', text: 'The landing pages he created with Elementor significantly boosted our conversion rates. Highly recommended!' },
  { id: 3, name: 'David Wilson', position: 'Founder, Startup Inc.', text: 'Fast, responsive, and incredibly professional. Our website speed improved drastically after his optimization.' },
];
