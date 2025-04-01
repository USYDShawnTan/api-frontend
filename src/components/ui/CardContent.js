import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  titleVariants,
  descriptionVariants,
  getRainbowColor,
  previewVariants,
} from "../../utils/animationUtils";

/**
 * CardContent - API卡片的内容区域
 *
 * @param {Object} props 组件属性
 * @param {string} props.title 卡片标题
 * @param {string} props.description 卡片描述
 * @param {string} props.endpoint API端点
 * @param {boolean} props.isHovered 卡片是否处于悬停状态
 * @param {number} props.rainbowProgress 彩虹效果进度值
 * @param {number} props.totalRequests API的请求总数
 */
const CardContent = ({
  title,
  description,
  endpoint,
  isHovered,
  rainbowProgress,
  totalRequests = 0,
}) => {
  // 为彩虹进度条定义变体
  const rainbowVariants = {
    hover: {
      width: "100%",
      opacity: 1,
      transition: {
        width: { duration: 0.5, ease: "easeOut" },
        opacity: { duration: 0.3, ease: "easeIn" },
      },
    },
    initial: {
      width: "0%",
      opacity: 0,
      transition: {
        width: { duration: 0.5, ease: "easeIn" },
        opacity: { duration: 0.3, delay: 0.2, ease: "easeOut" },
      },
    },
  };

  // 定义文本平滑样式，解决动画过程中的字体锐化问题
  const fontSmoothingStyle = {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    backfaceVisibility: "hidden",
  };

  // 格式化请求数量显示（大于1000则显示为k，大于10000则显示为w）
  const formatRequestCount = (count) => {
    if (count >= 10000) {
      return (count / 10000).toFixed(2) + "w";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    } else {
      return count.toString();
    }
  };

  return (
    <>
      <Link
        to={`/${endpoint}`}
        className="block p-6 z-10 relative h-full"
        style={fontSmoothingStyle}
      >
        <div className="group relative z-10 flex flex-col h-full">
          <motion.div className="flex items-center">
            <motion.h2
              variants={titleVariants}
              className="text-lg font-bold mb-2.5"
              style={fontSmoothingStyle}
            >
              {title}
            </motion.h2>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="ml-2 text-white opacity-0 group-hover:opacity-100 transition-all"
            >
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </motion.div>
          </motion.div>

          <motion.p
            variants={descriptionVariants}
            className="text-sm leading-relaxed flex-grow"
            style={fontSmoothingStyle}
          >
            {description}
          </motion.p>

          <div
            className="mt-4 flex items-center justify-between text-xs text-white/60"
            style={fontSmoothingStyle}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faFire} className="mr-1" />
              <span>{formatRequestCount(totalRequests)}</span>
            </div>
            <span className="text-white/40 text-xs">查看详情</span>
          </div>
        </div>
      </Link>

      {/* 底部RGB进度条 - 添加平滑的过渡效果 */}
      <motion.div
        className="absolute bottom-0 left-0 h-1.5 rounded-b-xl"
        style={{
          background: isHovered
            ? `linear-gradient(90deg, ${getRainbowColor(
                rainbowProgress
              )}, ${getRainbowColor((rainbowProgress + 0.5) % 1)})`
            : `linear-gradient(90deg, ${getRainbowColor(
                rainbowProgress
              )}, ${getRainbowColor((rainbowProgress + 0.5) % 1)})`,
          boxShadow: isHovered ? "0 0 8px rgba(255, 255, 255, 0.6)" : "none",
        }}
        variants={rainbowVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      />

      {/* API预览 - 悬停时显示 */}
      {isHovered && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={previewVariants}
          className="absolute top-0 right-0 bg-black/85 px-3 py-1.5 rounded-br-none rounded-tl-none rounded-tr-xl rounded-bl-md text-xs font-mono shadow-lg z-20 border-l border-b border-white/10"
          style={{
            fontWeight: 500,
            letterSpacing: "0.03em",
            ...fontSmoothingStyle,
          }}
        >
          <span className="text-green-400 font-medium flex items-center">
            <span className="text-white/70 mr-1 text-[10px]">GET</span>/
            {endpoint}
          </span>
        </motion.div>
      )}
    </>
  );
};

export default CardContent;
