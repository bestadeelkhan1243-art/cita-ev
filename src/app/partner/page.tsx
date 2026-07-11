"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, Target, BookOpen, Headset, Briefcase, Award } from "lucide-react";
import styles from "./page.module.css";

export default function PartnerPage() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const benefits = [
    { icon: <Award size={32} />, title: "Authorized Product Access" },
    { icon: <TrendingUp size={32} />, title: "Sales Support" },
    { icon: <Target size={32} />, title: "Marketing Support" },
    { icon: <BookOpen size={32} />, title: "Technical Training" },
    { icon: <Briefcase size={32} />, title: "Project Assistance" },
    { icon: <Users size={32} />, title: "Lead Referrals" },
    { icon: <Headset size={32} />, title: "Priority Support" },
    { icon: <ShieldCheck size={32} />, title: "Business Development" }
  ];

  const idealTypes = [
    "Electrical Contractors",
    "Solar Companies",
    "Engineering Firms",
    "Technology Integrators",
    "Infrastructure Companies",
    "EV Businesses",
    "Energy Consultants",
    "Facility Management"
  ];

  return (
    <main className={styles.page}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <h1 className={styles.heroTitle}>Become A CITA EV Charging Partner</h1>
            <p className={styles.heroSubtitle}>
              Join our growing dealer and partner network across Pakistan.
            </p>
          </motion.div>

          <motion.div 
            className={styles.heroFormCard}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.formTitle}>Quick Contact</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Full Name" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Email Address" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" placeholder="Phone Number" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <select className={styles.formSelect} required>
                  <option value="" disabled selected>Business Type</option>
                  <option value="distributor">Distributor</option>
                  <option value="reseller">Reseller</option>
                  <option value="installer">Installer</option>
                  <option value="strategic">Strategic Partner</option>
                </select>
              </div>
              <button type="submit" className={styles.submitBtn}>Submit Details</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. PARTNER NETWORK INTRO */}
      <section className={styles.introSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className={styles.sectionTitle}>Building Pakistan&apos;s EV Charging Ecosystem</h2>
          <p className={styles.sectionSubtitle}>
            Through partnerships with installers, consultants, contractors and technology providers, CITA EV Chargers Pakistan aims to accelerate EV infrastructure deployment nationwide.
          </p>
        </motion.div>
      </section>

      {/* 3. DEALER BENEFITS */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <motion.div
            className={styles.textCenter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            style={{ textAlign: 'center' }}
          >
            <h2 className={styles.sectionTitle}>Dealer Benefits</h2>
          </motion.div>
          
          <motion.div 
            className={styles.benefitsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} className={styles.benefitCard} variants={fadeUpVariant}>
                <div className={styles.iconWrapper}>
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. IDEAL DEALER TYPES */}
      <section className={styles.idealSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          style={{ textAlign: 'center' }}
        >
          <h2 className={styles.sectionTitle}>Ideal Dealer Types</h2>
          <p className={styles.sectionSubtitle} style={{ maxWidth: '800px', margin: '0 auto' }}>
            We are looking to partner with specialized companies to build a robust charging infrastructure.
          </p>
          
          <div className={styles.idealGrid}>
            {idealTypes.map((type, index) => (
              <div key={index} className={styles.idealTag}>
                {type}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. MAIN DEALER APPLICATION FORM */}
      <section className={styles.formSection} id="apply">
        <motion.div
          className={styles.mainFormContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className={styles.sectionTitle}>Dealer Application Form</h2>
            <p className={styles.sectionSubtitle}>Complete the form below to apply for our partnership program.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className={styles.formGrid}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Company Name *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Contact Person *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Designation" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Phone Number *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Email Address *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="City *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <select className={styles.formSelect} required defaultValue="">
                <option value="" disabled>Business Type *</option>
                {idealTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
              </select>
            </div>
            <div className={styles.formGroup}>
              <input type="number" placeholder="Years In Operation" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <input type="url" placeholder="Company Website" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Areas Served" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <input type="number" placeholder="Technical Team Size" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <input type="number" placeholder="Sales Team Size" className={styles.formInput} />
            </div>
            <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
              <select className={styles.formSelect} defaultValue="">
                <option value="" disabled>Annual Revenue Range</option>
                <option value="under_10m">Under 10M PKR</option>
                <option value="10m_50m">10M - 50M PKR</option>
                <option value="50m_100m">50M - 100M PKR</option>
                <option value="over_100m">Over 100M PKR</option>
              </select>
            </div>
            <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
              <textarea placeholder="Additional Comments" className={styles.formTextarea}></textarea>
            </div>
            <div className={styles.formGroup} style={{ gridColumn: '1 / -1', marginTop: '20px' }}>
              <button type="submit" className={styles.submitBtn} style={{ padding: '20px', fontSize: '1.1rem' }}>
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </section>

    </main>
  );
}
