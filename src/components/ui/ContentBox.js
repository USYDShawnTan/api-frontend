import React from "react";

/**
 * ContentBox - A reusable component for styled content boxes with animations
 *
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Content of the box
 * @param {string} props.className Additional CSS classes
 * @param {number} props.animationDelay Animation delay in seconds
 * @param {'left'|'right'} props.direction Animation direction ('left' or 'right')
 * @param {Object} props.style Additional inline styles
 */
const ContentBox = ({
  children,
  className = "",
  animationDelay = 0,
  direction = "left",
  style = {},
}) => {
  const animationClass =
    direction === "left" ? "animate__fadeInLeft" : "animate__fadeInRight";

  return (
    <div
      className={`bg-black/50 backdrop-blur-sm text-pink-200 p-3 rounded-md border border-white/10 ${className} animate__animated ${animationClass}`}
      style={{
        animationDelay: `${animationDelay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ContentBox;
