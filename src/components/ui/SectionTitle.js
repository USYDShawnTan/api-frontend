import React from "react";

/**
 * SectionTitle - A reusable section title component with animations
 * 
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Content of the title
 * @param {string} props.className Additional CSS classes
 */
const SectionTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl text-white/90 font-semibold mb-3 animate__animated animate__fadeIn ${className}`}>
    {children}
  </h3>
);

export default SectionTitle; 