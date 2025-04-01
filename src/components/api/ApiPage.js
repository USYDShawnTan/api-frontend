import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiPageTemplate from "./ApiPageTemplate";
import { useApiData } from "./ApiPageContext";

const ApiPage = () => {
  const { pageName } = useParams();
  const [loading, setLoading] = useState(true);
  const [apiItem, setApiItem] = useState(null);
  const [error, setError] = useState(null);

  const {
    apiData,
    loading: apiDataLoading,
    error: apiDataError,
  } = useApiData();

  useEffect(() => {
    // 如果 API 数据正在加载，等待
    if (apiDataLoading) {
      return;
    }

    // 如果 API 数据加载出错，显示错误
    if (apiDataError) {
      setError(apiDataError);
      setLoading(false);
      return;
    }

    try {
      // 直接比较endpoint与路由参数
      const foundApiItem = apiData.find((api) => api.endpoint === pageName);

      if (foundApiItem) {
        setApiItem(foundApiItem);
      } else {
        setError("未找到API内容");
      }
    } catch (err) {
      setError("加载API内容时发生错误");
      console.error(err);
    }

    setLoading(false);
  }, [pageName, apiData, apiDataLoading, apiDataError]);

  if (apiDataLoading || loading) {
    // 使用简单的加载指示器
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate__animated animate__fadeIn">
          <p className="text-[#F8C6C6] text-lg">加载中...</p>
        </div>
      </div>
    );
  }

  if (error || !apiItem) {
    return (
      <div className="bg-[#6E708D] shadow-lg rounded-lg p-6 m-4 w-full max-w-lg text-center animate__animated animate__fadeIn">
        <h2 className="text-2xl text-[#F8C6C6] font-bold mb-4">
          {error || "页面未找到"}
        </h2>
        <p className="text-[#E7CBA8]">请返回首页查看其他API</p>
      </div>
    );
  }

  // 传递endpoint属性给ApiPageTemplate
  return <ApiPageTemplate apiLink={`/${apiItem.endpoint}`} />;
};

export default ApiPage;
