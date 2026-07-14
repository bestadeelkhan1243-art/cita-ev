"use client";

import React, { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Smartphone, Award, Nfc, Plug, AlertTriangle, Zap, Activity, Server, Wifi, Sun, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import styles from "./page.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const product = getProductBySlug(unwrappedParams.slug);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDatasheetUrl, setSelectedDatasheetUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleDownloadClick = (e: React.MouseEvent, modelName: string, url: string = "") => {
    e.preventDefault();
    setSelectedModel(modelName);
    setSelectedDatasheetUrl(url);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
    if (selectedDatasheetUrl) {
      window.open(selectedDatasheetUrl, "_blank");
    } else {
      alert("Datasheet requested successfully! It will be sent to your email.");
    }
  };

  const closeModal = () => setIsModalOpen(false);

  if (!product) {
    notFound();
  }

  // Icon mapping for smart features
  const iconMap: Record<string, React.ElementType> = {
    smartphone: Smartphone,
    award: Award,
    nfc: Nfc,
    plug: Plug,
    "alert-triangle": AlertTriangle,
    zap: Zap,
    activity: Activity,
    server: Server,
    wifi: Wifi,
    sun: Sun,
    shield: Shield,
  };

  return (
    <main className={styles.page}>
      
      {/* 1. Full Width Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `linear-gradient(to right, rgba(5,11,20,0.95) 0%, rgba(5,11,20,0.7) 50%, rgba(5,11,20,0.3) 100%), url(${product.heroImageUrl || product.imageUrl})` }}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.productName}
              initial="hidden" animate="visible" variants={fadeUp}
            >
              {product.name.toUpperCase()}
            </motion.h1>
            <motion.p 
              className={styles.heroSubheadline}
              initial="hidden" animate="visible" variants={fadeUp}
            >
              {product.heroSubheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. INTRO & QUOTE SECTION */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <motion.div className={styles.introImageWrapper} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className={styles.introImage}
              unoptimized
            />
          </motion.div>
          <motion.div className={styles.introContent} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className={styles.introHeadline}>{product.heroHeadline}</h2>
            <p className={styles.introDescription}>{product.description}</p>
            <a href="/contact" className={styles.quoteLink}>
              Get a quote <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. DATASHEET SECTION */}
      <section className={styles.datasheetSection}>
        <div className={styles.datasheetContainer}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className={styles.datasheetHeadline}>
              Perfect for overnight EV charging at home or workplace
            </h3>
            <p className={styles.datasheetSub}>
              To know more, download the datasheet below.
            </p>
            <button onClick={(e) => handleDownloadClick(e, product.name, product.datasheetUrl)} className={styles.quoteLink} style={{ marginTop: '20px', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Download Datasheet <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ADDED SECTIONS FROM UK SITE */}
      {/* 1. IP65 and IK10 Rated */}
      <section className={styles.splitSection}>
        <div className={styles.splitTextContainer}>
          <h2 className={styles.splitTitle}>IP65 and IK10 Rated<br/>EV Charger</h2>
          <p className={styles.splitDesc}>
            When selecting devices for challenging environments, understanding the protection ratings is crucial to ensure durability & reliability.
          </p>
          <ul className={styles.splitList}>
            <li><Check size={20} className={styles.listIcon}/> The {product.name} is fully protected against dust and resistant to water, making it ideal for outdoor installations.</li>
            <li><Check size={20} className={styles.listIcon}/> The {product.name} is built to withstand significant impact protected from external physical damage.</li>
            <li><Check size={20} className={styles.listIcon}/> {product.name} charger is engineered for durability, providing reliable long-term performance.</li>
          </ul>
        </div>
        <div className={styles.splitImageContainerLight}>
           <Image src={product.imageUrl} alt="IP65 Rating" fill className={styles.splitImage} unoptimized />
        </div>
      </section>

      {/* 2. Benefits Grid */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <h2 className={styles.benefitsTitle}>Smart AC EV<br/>Charger benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>01. Widely available</h3>
              <p>AC chargers are the most widely available EV charging solution, offering accessible and efficient charging for homes, workplaces, and public locations.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>02. Lower installation costs</h3>
              <p>AC Chargers are less expensive to install and maintain, making them cost-effective for the users.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>03. Multiple power levels</h3>
              <p>AC chargers come in various power levels (e.g., 7kW, 11kW, 22kW, 44kW), providing flexibility to match different charging needs and electrical capacities.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>04. Simplicity</h3>
              <p>Installation of AC chargers is relatively straightforward, often requiring less infrastructure upgrade compared to DC chargers, making it easier to set up at various locations.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>05. Gentler charging</h3>
              <p>AC chargers typically charge at a slower rate than DC fast chargers, which can be gentler on the EV's battery, potentially extending its lifespan by reducing thermal stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Warranty Banner */}
      <section className={styles.warrantyBanner}>
        <div className={styles.warrantyContent}>
          <h2>3-year extendable<br/>warranty</h2>
          <p>For all our wall mount EV charging hardware products</p>
          <a href="/contact" className={styles.warrantyLink}>Get a quote for 22kW <ArrowRight size={20}/></a>
        </div>
      </section>

      {/* 4. Monitor from Desk */}
      <section className={styles.splitSectionAlt}>
        <div className={styles.splitImageContainerLight}>
          <Image src="/images/desktop-software.jpg" alt="CPMS Dashboard" fill className={styles.splitImage} style={{ objectFit: 'cover', padding: 0 }} unoptimized />
        </div>
        <div className={styles.splitTextContainerBlue}>
          <h2 className={styles.splitTitle}>Monitor your EV<br/>charging from your<br/>desk</h2>
          <ul className={styles.splitList}>
            <li><Check size={20} className={styles.listIcon}/> RFID access to start and stop charging easily</li>
            <li><Check size={20} className={styles.listIcon}/> Monitor who charges when with our CPMS</li>
            <li><Check size={20} className={styles.listIcon}/> Charging insights and analytics</li>
          </ul>
          <a href="#" className={styles.learnMoreLink}>Learn more <ArrowRight size={20}/></a>
        </div>
      </section>

      {/* 5. Smart, simple App */}
      <section className={styles.splitSection}>
        <div className={styles.splitTextContainerGreen}>
          <h2 className={styles.splitTitle}>Smart, simple and<br/>safe way to charge<br/>your EV at anywhere</h2>
          <ul className={styles.splitList}>
            <li><Check size={20} className={styles.listIcon}/> Realtime operation</li>
            <li><Check size={20} className={styles.listIcon}/> Charging insights and analytics</li>
            <li><Check size={20} className={styles.listIcon}/> Schedule EV charging</li>
          </ul>
          <a href="#" className={styles.learnMoreLink}>Learn more <ArrowRight size={20}/></a>
          <div className={styles.appStores}>
            <div className={styles.appBadge}>App Store</div>
            <div className={styles.appBadge}>Google Play</div>
          </div>
        </div>
        <div className={styles.splitImageContainerDark}>
           <Image src="/images/apps.png" alt="Mobile App" fill className={styles.splitImage} style={{ objectFit: 'cover', padding: 0 }} unoptimized />
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      {product.comparisonTable && product.comparisonTable.length > 0 && (
        <section className={styles.comparisonSection}>
          <div className={styles.comparisonContainer}>
            <motion.div className={styles.tableWrapper} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th>CITA EV CHARGER COMPARISON</th>
                    {product.comparisonTable.map((col, idx) => (
                      <th key={idx}>{col.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Protection</td>
                    {product.comparisonTable.map((col, idx) => <td key={idx}>{col.protection}</td>)}
                  </tr>
                  <tr>
                    <td>Smart App Support</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>{col.smartApp ? <Check size={20} className={styles.iconCheck} /> : <X size={20} className={styles.iconCross} />}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Mounting Method</td>
                    {product.comparisonTable.map((col, idx) => <td key={idx}>{col.mounting}</td>)}
                  </tr>
                  <tr>
                    <td>RFID Card/Tag</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>{col.rfid ? <Check size={20} className={styles.iconCheck} /> : <X size={20} className={styles.iconCross} />}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Touch Screen</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>{col.touchScreen ? <Check size={20} className={styles.iconCheck} /> : <X size={20} className={styles.iconCross} />}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Compatible with all EVs</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>{col.compatibleAll ? <Check size={20} className={styles.iconCheck} /> : <X size={20} className={styles.iconCross} />}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Warranty</td>
                    {product.comparisonTable.map((col, idx) => <td key={idx}>{col.warranty}</td>)}
                  </tr>
                  <tr>
                    <td>Charging Cable</td>
                    {product.comparisonTable.map((col, idx) => <td key={idx}>{col.cable}</td>)}
                  </tr>
                  <tr>
                    <td>Datasheets</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>
                        <button 
                          onClick={(e) => handleDownloadClick(e, col.name, col.datasheetUrl)} 
                          style={{ color: 'var(--secondary-color)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', fontWeight: 'bold' }}
                        >
                          {col.datasheet}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      )}

      {/* 5. SMART FEATURES GRID */}
      {product.smartFeatures && product.smartFeatures.length > 0 && (
        <section className={styles.featuresSection}>
          <motion.h2 className={styles.featuresTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {product.name} - Smart Features
          </motion.h2>
          <div className={styles.featuresGrid}>
            {product.smartFeatures.map((feat, idx) => {
              const IconComp = iconMap[feat.icon] || Check;
              return (
                <motion.div key={idx} className={styles.featureCard} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                  <IconComp size={40} className={styles.featureIcon} />
                  <span className={styles.featureTitle}>{feat.title}</span>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. TARGET APPLICATIONS */}
      {product.targetApplications && product.targetApplications.length > 0 && (
        <section className={styles.applicationsSection}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Ideal Applications
          </motion.h2>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {[...product.targetApplications, ...product.targetApplications].map((app, idx) => (
                <div key={idx} className={styles.appCardMarquee}>
                  <div className={styles.appIconWrapper}>
                    <Check size={24} className={styles.appIcon} />
                  </div>
                  <h3 className={styles.appTitle}>{app}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQS */}
      {product.faqs && product.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Frequently Asked Questions
          </motion.h2>
          <div className={styles.faqContainer}>
            {product.faqs.map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.faqOpen : ''}`}>
                <button 
                  className={styles.faqQuestion} 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* DOWNLOAD MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}><X size={24} /></button>
            <h3 className={styles.modalTitle}>Download the {selectedModel} Datasheet</h3>
            <form className={styles.modalForm} onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Full Name" required className={styles.modalInput} />
              <input type="email" placeholder="Enter Your Email" required className={styles.modalInput} />
              <input type="tel" placeholder="Enter Your Contact Number" required className={styles.modalInput} />
              <input type="text" placeholder="Enter Your City" required className={styles.modalInput} />
              <label className={styles.modalCheckbox}>
                <input type="checkbox" required />
                <span>I confirm that I've read and agree to Privacy Policy</span>
              </label>
              <button type="submit" className={styles.modalSubmit}>Download Now</button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}
