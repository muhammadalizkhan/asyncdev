import React from 'react';
import './Services.scss';
import { FaCode, FaSync, FaBolt, FaCogs, FaMobileAlt, FaDatabase, FaShieldAlt, FaCloud, FaBug } from 'react-icons/fa';

const services = [
  { icon: <FaDatabase />, title: 'Custom Development', description: 'Get custom software perfectly built for your business to boost productivity and efficiency.' },
  { icon: <FaMobileAlt />, title: 'Mobile App Development', description: "Make your mobile app stand out from the crowd with Devsnic's Android and iOS development." },
  { icon: <FaCode />, title: 'Web Development', description: 'Deliver high-quality web development, design and functionality tailored for your business.' },
  { icon: <FaCogs />, title: 'DevOps', description: 'Speed up your development process and improve product quality with DevOps consulting and automation services.' },
  { icon: <FaShieldAlt />, title: 'Ecommerce Ecosystem', description: 'Keep your digital assets safe and protect your business from threats with our cybersecurity solutions.' },
  { icon: <FaSync />, title: 'UI/UX Development', description: 'Drive efficiency and growth with tailored and custom UI/UX solutions for your business.' },
  { icon: <FaCloud />, title: 'Cloud Migration & Management', description: 'Seamlessly transition your business operations to the cloud with secure and scalable solutions.' },
  { icon: <FaBug />, title: 'QA Testing & Automation', description: 'Improve your software’s reliability with our comprehensive QA testing services.' },
];

export default function Services() {
  return (
    <div className="services">
      <h2 className="services-title">From Idea to Completion, we bring Full-Stack Expertise</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-header">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
