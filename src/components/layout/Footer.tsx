import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.colInfo}>
            <Link href="/" className={styles.logo}>
              <Image src="/logos/CITA-EV-Logo-Green.png" alt="CITA EV" width={180} height={50} style={{ objectFit: 'contain' }} />
            </Link>
            <p className={styles.description}>
              Official Distributor of CITA EV Charging Solutions in Pakistan. Powering the future of mobility with intelligent AC and DC chargers.
            </p>
            <p className={styles.companyName}>
              Operated by BLUEOCEAN TECH IMPEX PRIVATE LIMITED
            </p>
          </div>

          <div className={styles.colLinks}>
            <h4 className={styles.title}>Products</h4>
            <ul className={styles.linkList}>
              <li><Link href="/products/residential">Residential Chargers</Link></li>
              <li><Link href="/products/commercial">Commercial Chargers</Link></li>
              <li><Link href="/products/dc-fast">DC Fast Chargers</Link></li>
              <li><Link href="/software">Software Solutions</Link></li>
            </ul>
          </div>

          <div className={styles.colLinks}>
            <h4 className={styles.title}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/certifications">Certifications</Link></li>
              <li><Link href="/partner">Become a Partner</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.colContact}>
            <h4 className={styles.title}>Contact Us</h4>
            <ul className={styles.linkList}>
              <li>Phone: 0300-1002226</li>
              <li>WhatsApp: 0300-1002226</li>
              <li>Email: contact@citaevchargers.com</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} CITA EV Chargers Pakistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
