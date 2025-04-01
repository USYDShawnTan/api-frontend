import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { getRandomAnimation, cardVariants } from "../../utils/animationUtils";
import CardBadge from "../ui/CardBadge";
import LightEffect from "../ui/LightEffect";
import CardContent from "../ui/CardContent";

/**
 * ApiCard - 显示API信息的卡片组件
 *
 * @param {Object} props 组件属性
 * @param {Object} props.api API数据对象
 * @param {number} props.index 卡片索引
 */
const ApiCard = ({ api, index }) => {
  const { title, description, endpoint, _id, totalRequests } = api;
  const [animation] = useState(getRandomAnimation());
  const [delay] = useState(
    `animate__delay-${Math.floor(Math.random() * 3) + 1}00ms`
  );
  const [rainbowProgress, setRainbowProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // 控制光效动画
  const lightControls = useAnimationControls();

  // 字体平滑和渲染优化样式
  const fontSmoothingStyle = {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)", // 强制GPU加速，但避免动画中的字体锐化
  };

  // RGB动画效果
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setRainbowProgress((prev) => (prev + 0.01) % 1);
      }, 50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered]);

  // 悬停处理函数
  const handleHoverStart = () => {
    setIsHovered(true);
    lightControls.start("animate");
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`animate__animated animate__${animation} ${delay} relative api-card px-2`}
      style={{ "--animate-duration": "1.2s", ...fontSmoothingStyle }}
    >
      <motion.div
        className="rounded-xl overflow-hidden max-w-xs mx-auto h-full shadow-lg"
        ref={cardRef}
        layout
        layoutId={`card-${index}`}
        initial="initial"
        whileHover="hover"
        variants={cardVariants}
        transition={{
          layout: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={fontSmoothingStyle}
      >
        {/* ID Badge */}
        <CardBadge id={_id} index={index} />

        {/* 卡片内光晕效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-0 opacity-50 rounded-xl"></div>

        {/* 跑马灯光效 */}
        <LightEffect controls={lightControls} />

        {/* 卡片内容 */}
        <CardContent
          title={title}
          description={description}
          endpoint={endpoint}
          isHovered={isHovered}
          rainbowProgress={rainbowProgress}
          totalRequests={totalRequests}
        />
      </motion.div>
    </div>
  );
};

export default ApiCard;
