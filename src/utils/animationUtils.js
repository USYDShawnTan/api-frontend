// 动画效果列表
export const animations = [
  "fadeIn",
  "fadeInUp",
  "fadeInDown",
  "fadeInLeft",
  "fadeInRight",
  "bounceIn",
  "zoomIn",
  "flipInX",
  "flipInY",
];

// 获取随机动画
export const getRandomAnimation = () => {
  return animations[Math.floor(Math.random() * animations.length)];
};

// RGB颜色变化函数
export const getRainbowColor = (progress) => {
  // 使用HSL色彩空间来创建彩虹效果
  const hue = (progress * 360) % 360;
  return `hsl(${hue}, 85%, 70%)`;
};

// 动画变体定义
export const cardVariants = {
  initial: {
    scale: 1,
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(45, 45, 65, 0.35)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    zIndex: 1,
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.15)",
    backgroundColor: "rgba(55, 55, 80, 0.45)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    zIndex: 3,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

export const titleVariants = {
  initial: {
    color: "rgba(255, 255, 255, 0.9)",
    y: 0,
  },
  hover: {
    color: "#ffffff",
    y: -2,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  },
};

export const descriptionVariants = {
  initial: {
    color: "rgba(255, 255, 255, 0.7)",
    opacity: 0.9,
  },
  hover: {
    color: "rgba(255, 255, 255, 0.95)",
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
};

export const lightEffectVariants = {
  initial: {
    x: "-100%",
    opacity: 0,
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 80%, transparent)",
  },
  animate: {
    x: "200%",
    opacity: 0.9,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1.5,
    },
  },
};

export const previewVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};
