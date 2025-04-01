import React from "react";
import ApiDetailTemplate from "./ApiDetailTemplate";
import { useApiData } from "./ApiPageContext";

const ApiPageTemplate = ({ apiLink }) => {
  const { apiData } = useApiData();
  // 路由中的apiLink格式是'/endpoint'，需要去掉前缀'/'来匹配endpoint属性
  const path = apiLink.startsWith("/") ? apiLink.substring(1) : apiLink;
  const apiItem = apiData.find((api) => api.endpoint === path);

  if (!apiItem) {
    return <div>API Data not found</div>;
  }

  return <ApiDetailTemplate {...apiItem} />;
};

export default ApiPageTemplate;
