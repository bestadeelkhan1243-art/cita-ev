"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Products", 
    href: "/products",
    hasDropdown: true
  },
  { name: "Industries", href: "/industries" },
  { name: "Software", href: "/software" },
  { name: "Projects", href: "/projects" },
  { name: "Downloads", href: "/downloads" },
  { name: "Partner Program", href: "/partner" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image 
            src={scrolled ? "/logos/CITA-EV-Logo-Green.png" : "/logos/CITA-EV-Logo-Green.png"} 
            alt="CITA EV" 
            width={180} 
            height={50} 
            style={{ objectFit: 'contain' }} 
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                  {link.hasDropdown && <FiChevronDown className={styles.dropdownIcon} />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <Button variant={scrolled ? "outline" : "outlineWhite"} href="https://wa.me/923001002226">
            WhatsApp
          </Button>
          <Button variant="primary" href="/contact">
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className={styles.mobileNavList}>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileActions}>
              <Button variant="secondary" href="https://wa.me/923001002226" fullWidth>
                WhatsApp
              </Button>
              <Button variant="primary" href="/contact" fullWidth>
                Request Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
