import React from "react";
import { motion } from "framer-motion";
import { lightEffectVariants } from "../../utils/animationUtils";

/**
 * LightEffect - 卡片上的光效动画
 *
 * @param {Object} props 组件属性
 * @param {Object} props.controls framer-motion动画控制器
 * @param {boolean} props.isHovered 指示卡片是否被悬停
 */
const LightEffect = ({ controls, isHovered }) => {
  // 渲染优化样式
  const renderOptimizationStyle = {
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
    willChange: "opacity, transform",
  };

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      variants={lightEffectVariants}
      initial="initial"
      animate={controls}
      style={{ height: "150%", ...renderOptimizationStyle }}
    />
  );
};

export default LightEffect;
