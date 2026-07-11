import React from 'react';
import styles from './Button.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'outlineWhite';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  fullWidth = false,
}) => {
  const combinedClassName = `${styles.btn} ${styles[variant]} ${styles[size]} ${
    fullWidth ? styles.fullWidth : ''
  } ${className}`;

  const MotionButton = motion.button;

  const content = (
    <MotionButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </MotionButton>
  );

  if (href) {
    return (
      <Link href={href} className={styles.linkWrapper}>
        {content}
      </Link>
    );
  }

  return content;
};
