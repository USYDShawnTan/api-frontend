import React from "react";

/**
 * CardBadge - 显示在卡片左上角的ID徽章
 *
 * @param {Object} props 组件属性
 * @param {string} props.id 要显示的ID
 */
const CardBadge = ({ id }) => {
  // 字体平滑和渲染优化样式
  const fontSmoothingStyle = {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    backfaceVisibility: "hidden",
  };

  return (
    <div
      className="absolute px-2 py-1 rounded-md text-xs font-mono z-20 flex items-center gap-1"
      style={fontSmoothingStyle}
    >
      <span className="text-white">{id}</span>
    </div>
  );
};

export default CardBadge;
