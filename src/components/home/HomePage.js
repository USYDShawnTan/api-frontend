import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ApiDataContext from "../api/ApiPageContext";
import ApiCard from "../api/ApiCard";

/**
 * 全局字体平滑和渲染优化样式
 */
const fontSmoothingStyle = {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  backfaceVisibility: "hidden",
};

/**
 * HomePage - 首页组件，展示API卡片列表
 */
const HomePage = () => {
  // 使用上下文获取API数据
  const { apiData, loading, error, errorDetails } =
    React.useContext(ApiDataContext);

  // 添加状态来管理API数据
  const [sortedApiData, setSortedApiData] = useState([]);

  // 当原始数据加载完成后，初始化数据
  useEffect(() => {
    if (apiData && apiData.length > 0) {
      setSortedApiData([...apiData]);
    }
  }, [apiData]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} errorDetails={errorDetails} />;
  }

  return (
    <div
      className="w-full flex flex-col items-center"
      style={fontSmoothingStyle}
    >
      <HeaderSection />
      <ApiCardList apiData={sortedApiData} />
      <FooterSection count={sortedApiData.length} />
    </div>
  );
};

// 组件拆分 - 加载状态
const LoadingState = () => (
  <div
    className="w-full h-screen flex justify-center items-center"
    style={fontSmoothingStyle}
  >
    <div className="backdrop-blur-md bg-white/5 p-8 rounded-xl shadow-xl">
      <p className="text-white text-xl font-medium">加载 API 数据中...</p>
      <div className="mt-3 flex justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        />
      </div>
    </div>
  </div>
);

// 组件拆分 - 错误状态
const ErrorState = ({ error, errorDetails }) => (
  <div
    className="w-full flex flex-col justify-center items-center backdrop-blur-lg bg-white/10 shadow-lg rounded-xl p-8 m-4 max-w-2xl border border-white/10"
    style={fontSmoothingStyle}
  >
    <p className="text-white text-xl mb-4 font-medium">
      加载失败: {error}. 请刷新页面重试.
    </p>
    {errorDetails && (
      <div className="mt-4 text-left w-full">
        <details className="bg-white/20 p-4 rounded-lg text-white/90">
          <summary className="cursor-pointer font-medium">
            显示错误详情（开发人员用）
          </summary>
          <pre className="mt-3 p-4 bg-black/30 rounded-lg overflow-auto text-sm">
            {JSON.stringify(errorDetails, null, 2)}
          </pre>
        </details>
      </div>
    )}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.location.reload()}
      className="mt-6 px-8 py-3 bg-gradient-to-r from-white/80 to-white/90 text-[#3a1c71] rounded-full font-medium hover:shadow-lg transition-all"
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      刷新页面
    </motion.button>
  </div>
);

// 组件拆分 - 页头部分
const HeaderSection = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-8 mt-10 max-w-4xl px-4"
    style={{
      ...fontSmoothingStyle,
      transform: "translateZ(0)",
      willChange: "opacity, transform",
    }}
  >
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow-lg leading-tight animate__animated animate__fadeInDown">
      API{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
        合集
      </span>
    </h1>
    <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate__animated animate__fadeInUp backdrop-blur-md bg-white/10 p-5 rounded-2xl shadow-lg border border-white/10">
      浏览我们丰富的API集合，所有API都有详细的文档和示例。点击卡片查看详情。
    </p>
  </motion.div>
);

// 组件拆分 - API卡片列表
const ApiCardList = ({ apiData }) => (
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 my-6 w-full max-w-7xl mx-auto px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    layout
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 30,
      layout: {
        duration: 0.3,
      },
      staggerChildren: 0.1,
    }}
    style={{
      ...fontSmoothingStyle,
      transform: "translateZ(0)",
      willChange: "opacity",
    }}
  >
    {apiData.map((api, index) => (
      <ApiCard key={api.id || index} api={api} index={index} />
    ))}
  </motion.div>
);

// 组件拆分 - 页脚部分
const FooterSection = ({ count }) => (
  <div className="py-10" style={fontSmoothingStyle}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="backdrop-blur-md bg-white/10 p-4 px-6 rounded-full shadow-lg border border-white/10"
      style={{ transform: "translateZ(0)", willChange: "opacity" }}
    >
      <p className="text-white/70 text-sm">总计 {count} 个API资源可用</p>
    </motion.div>
  </div>
);

export default HomePage;
