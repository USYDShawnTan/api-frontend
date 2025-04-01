import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "animate.css";
import { ApiDataProvider } from "./components/api/ApiPageContext";
import { motion } from "framer-motion";

// 懒加载组件
const HomePage = lazy(() => import("./components/home/HomePage"));
const ApiPage = lazy(() => import("./components/api/ApiPage"));
const UniverseCanvas = lazy(() => import("./components/ui/UniverseCanvas"));

// 简单的加载状态组件
const LoadingIndicator = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="backdrop-blur-md bg-white/5 p-8 rounded-xl shadow-xl"
    >
      <div className="flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
        />
      </div>
    </motion.div>
  </div>
);

// 主应用组件
const App = () => {
  return (
    <ApiDataProvider>
      <Router>
        <div
          className="relative bg-fixed min-h-screen p-4"
          style={{
            background:
              "linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)",
          }}
        >
          {/* 星空背景 */}
          <Suspense fallback={<div />}>
            <UniverseCanvas />
          </Suspense>

          <div className="relative z-10 flex flex-wrap justify-center items-start px-4 min-h-screen">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<LoadingIndicator />}>
                    <HomePage />
                  </Suspense>
                }
              />
              <Route
                path="/:pageName"
                element={
                  <Suspense fallback={<LoadingIndicator />}>
                    <ApiPage />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApiDataProvider>
  );
};

export default App;
