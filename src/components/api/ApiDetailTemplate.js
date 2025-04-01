import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import UI components
import SectionTitle from "../ui/SectionTitle";
import ContentBox from "../ui/ContentBox";
import JsonDisplay from "../ui/JsonDisplay";
import ClipboardButton from "../ui/ClipboardButton";

const API_BASE_URL = "https://api.433200.xyz/api/";

const ApiDetailTemplate = ({
  title = "API 详情",
  description = "这是一个API的详细介绍。",
  endpoint = "endpoint",
  requestParams = [],
  requestExample = [],
  responseFormat = "JSON",
  responseExample = "",
}) => {
  // 处理参数字符串，分离参数名和描述
  const parseParam = (paramStr) => {
    const parts = paramStr.split(" - ");
    if (parts.length >= 2) {
      return {
        name: parts[0].trim(),
        description: parts.slice(1).join(" - ").trim(),
      };
    }
    return { name: paramStr, description: "" };
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full py-8">
      <div
        className="bg-[rgba(45,45,65,0.35)] backdrop-blur-md shadow-lg rounded-xl p-6 m-4 w-full max-w-xl animate__animated animate__fadeIn border border-white/15"
        style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)" }}
      >
        <h2 className="text-2xl text-white font-bold mb-4 animate__animated animate__fadeInDown">
          {title}
        </h2>
        <p className="mb-6 text-white/80 text-base animate__animated animate__fadeInUp animate__delay-1s">
          {description}
        </p>

        <div className="mb-5">
          <SectionTitle>请求方式：</SectionTitle>
          <ContentBox animationDelay={0.1} direction="left">
            <p className="font-medium">GET</p>
          </ContentBox>
        </div>

        <div className="mb-5">
          <SectionTitle>请求地址：</SectionTitle>
          <ContentBox
            className="flex items-center"
            animationDelay={0.2}
            direction="right"
          >
            <div className="flex-1 break-words pr-2 font-medium">
              {`${API_BASE_URL}${endpoint}`}
            </div>
            <ClipboardButton textToCopy={`${API_BASE_URL}${endpoint}`} />
          </ContentBox>
        </div>

        {requestParams.length > 0 && (
          <div className="mb-5">
            <SectionTitle>请求参数：</SectionTitle>
            <div>
              {requestParams.map((param, index) => {
                // 处理新格式的字符串参数
                const paramObj =
                  typeof param === "string" ? parseParam(param) : param; // 兼容旧格式

                return (
                  <ContentBox
                    key={index}
                    className="mb-2"
                    animationDelay={0.2 + index * 0.05}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    <div className="break-words">
                      <span className="font-semibold">{paramObj.name}:</span>{" "}
                      <span>{paramObj.description}</span>
                    </div>
                  </ContentBox>
                );
              })}
            </div>
          </div>
        )}

        {requestExample.length > 0 && (
          <div className="mb-5">
            <SectionTitle>请求示例：</SectionTitle>
            <div>
              {requestExample.map((example, index) => (
                <ContentBox
                  key={index}
                  className="mb-2 flex items-center"
                  animationDelay={0.3 + index * 0.05}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div className="flex-1 break-words pr-2 whitespace-pre-wrap font-medium">
                    {`${API_BASE_URL}${endpoint}${example}`}
                  </div>
                  <ClipboardButton
                    textToCopy={`${API_BASE_URL}${endpoint}${example}`}
                  />
                </ContentBox>
              ))}
            </div>
          </div>
        )}

        <div className="mb-5">
          <SectionTitle>返回格式：</SectionTitle>
          <ContentBox animationDelay={0.4} direction="left">
            <p className="font-medium">{responseFormat}</p>
          </ContentBox>
        </div>

        <div className="mb-5">
          <SectionTitle>返回示例：</SectionTitle>
          <ContentBox
            className="relative"
            animationDelay={0.5}
            direction="right"
          >
            <div className="animate__animated animate__fadeIn">
              <JsonDisplay jsonString={responseExample} />
            </div>
          </ContentBox>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ApiDetailTemplate;
