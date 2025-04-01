import React, { useEffect, useRef } from "react";

const UniverseCanvas = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const lastTimeRef = useRef(0);
  const FPS = 30; // 限制最大FPS
  const frameDelay = 1000 / FPS;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let width,
      height,
      stars = [],
      comets = [];
    let starCount, cometCount;
    const starScale = 0.03; // 调整普通星星的移动速度，使其更慢
    const cometScale = 0.05; // 调整彗星的移动速度，使其更快
    const colors = {
      star: "226,225,142",
      comet: "226,225,224",
    };

    // 检测是否为移动设备
    const isMobile = window.innerWidth < 768;

    // 控制参数
    const MAX_COMETS = isMobile ? 3 : 5; // 移动设备减少彗星数量
    const COMET_INTERVAL = isMobile ? 3000 : 2000; // 移动设备降低彗星频率
    const STAR_DENSITY = isMobile ? 0.25 : 0.4; // 降低移动设备上的星星密度
    let lastCometTime = 0;

    function init() {
      resize();
      window.addEventListener("resize", handleResize);

      // 初始化星星
      createStars();

      // 初始化彗星（一开始只创建少量彗星）
      cometCount = isMobile ? 1 : 2; // 移动设备初始只有1个彗星
      for (let i = 0; i < cometCount; i++) {
        comets.push(new Star(true)); // 创建彗星
      }

      lastCometTime = Date.now();
      requestRef.current = requestAnimationFrame(animate);
    }

    // 创建星星的函数，单独提取以便在resize时重新调用
    function createStars() {
      stars = []; // 清空现有星星
      starCount = Math.round(width * STAR_DENSITY); // 根据窗口宽度和设备类型计算星星数量
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star(false)); // 创建普通星星
      }
    }

    // 处理窗口大小变化
    function handleResize() {
      // 更新canvas尺寸
      resize();

      // 当窗口大小变化时重新创建星星，确保分布均匀
      createStars();
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function animate(timestamp) {
      // 实现基于时间的节流
      if (timestamp - lastTimeRef.current < frameDelay) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTimeRef.current = timestamp;
      context.clearRect(0, 0, width, height);

      // 更新普通星星
      stars.forEach((star, index) => {
        star.update();
        if (star.needsReset) {
          stars[index] = new Star(false);
        }
      });

      // 更新彗星
      comets.forEach((comet, index) => {
        comet.update();
        if (comet.needsReset) {
          comets[index] = new Star(true);
        }
      });

      // 动态控制彗星数量
      const currentTime = Date.now();
      if (
        comets.length < MAX_COMETS &&
        currentTime - lastCometTime > COMET_INTERVAL
      ) {
        comets.push(new Star(true));
        lastCometTime = currentTime;
      }

      requestRef.current = requestAnimationFrame(animate);
    }

    function Star(isComet) {
      this.isComet = isComet;
      this.needsReset = false;
      this.reset();
    }

    Star.prototype.reset = function () {
      this.needsReset = false;

      if (this.isComet) {
        // 彗星起始位置在左上方区域
        this.x = Math.random() * width * 0.7;
        this.y = Math.random() * height * 0.25;
        this.dx = Math.random() * cometScale * 10 + 2;
        this.dy = Math.random() * cometScale * 10 + 2;
      } else {
        // 普通星星均匀分布
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.dx = (Math.random() - 0.5) * starScale * 10;
        this.dy = (Math.random() - 0.5) * starScale * 10;
      }

      this.r = Math.random() * 1.5 + 1.1;
      this.opacity = this.isComet ? 0.2 : 0; // 彗星初始就有一定透明度
      this.opacityTresh = Math.random() * 0.6 + 0.4;
      this.do = Math.random() * 0.002 + 0.001;
    };

    Star.prototype.update = function () {
      if (this.opacity < this.opacityTresh) {
        this.opacity += this.do;
      } else if (this.opacity > 0) {
        this.opacity -= this.do / 2;
      }

      // 修改边界检测逻辑，扩大边界范围以防止星星在边缘消失
      if (
        this.x < -20 ||
        this.x > width + 20 ||
        this.y < -20 ||
        this.y > height + 20
      ) {
        this.needsReset = true;
        return;
      }

      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    };

    Star.prototype.draw = function () {
      context.beginPath();
      if (this.isComet) {
        // 绘制彗星
        context.fillStyle = `rgba(${colors.comet},${this.opacity})`;
        context.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);

        // 绘制彗星尾巴
        const tailLength = Math.min(30, Math.floor((this.dx + this.dy) * 1.5));
        for (let i = 0; i < tailLength; i++) {
          context.fillStyle = `rgba(${colors.comet},${
            this.opacity - (this.opacity / tailLength) * i
          })`;
          context.fillRect(
            this.x - (this.dx / 3) * i,
            this.y - (this.dy / 3) * i - 1,
            2,
            2
          );
        }
      } else {
        // 绘制普通星星
        context.fillStyle = `rgba(${colors.star},${this.opacity})`;
        context.fillRect(this.x, this.y, this.r, this.r);
      }
      context.closePath();
      context.fill();
    };

    init();

    // 清理函数
    return () => {
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [frameDelay]); // 添加frameDelay作为依赖项

  return (
    <canvas
      ref={canvasRef}
      id="universe"
      className="fixed top-0 left-0 w-full h-full"
      style={{
        zIndex: 0,
        willChange: "transform", // 使用will-change优化
        transform: "translateZ(0)", // 强制GPU加速
      }}
    />
  );
};

export default UniverseCanvas;
