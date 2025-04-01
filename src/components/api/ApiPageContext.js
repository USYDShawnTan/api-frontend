import React, { createContext, useReducer, useEffect, useContext } from "react";

// 使用try-catch包装导入，防止构建失败
let apiDataJson = [];
try {
  // 直接导入JSON文件
  apiDataJson = require("../../apiData.json");
} catch (error) {
  console.warn("无法加载apiData.json文件，使用空数组作为默认值", error);
  apiDataJson = [];
}

// 定义初始状态
const initialState = {
  apiData: [],
  loading: true,
  error: null,
  errorDetails: null,
};

// 定义actions类型
const ACTION_TYPES = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  SET_LOADING: "SET_LOADING",
};

// 定义reducer函数
function apiReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        apiData: action.payload,
        loading: false,
        error: null,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        errorDetails: action.payload.details,
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

// 创建上下文
const ApiDataContext = createContext();

// 定义上下文提供者组件
export const ApiDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    // 使用导入的JSON数据
    try {
      console.log(`加载 ${apiDataJson.length} 条本地API数据`);

      // 处理responseExample的格式
      const processedData = apiDataJson.map((api) => {
        // 如果responseExample是对象或数组，则转换为格式化的JSON字符串
        if (
          api.responseExample &&
          (typeof api.responseExample === "object" ||
            Array.isArray(api.responseExample))
        ) {
          return {
            ...api,
            responseExample: JSON.stringify(api.responseExample, null, 2),
          };
        }
        return api;
      });

      dispatch({
        type: ACTION_TYPES.FETCH_SUCCESS,
        payload: processedData,
      });
    } catch (err) {
      console.error("加载本地API数据失败:", err);
      dispatch({
        type: ACTION_TYPES.FETCH_ERROR,
        payload: {
          message: "加载API数据失败",
          details: err,
        },
      });
    }
  }, []);

  // 提供数据和状态给子组件
  return (
    <ApiDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ApiDataContext.Provider>
  );
};

// 创建自定义钩子，方便使用上下文
export const useApiData = () => {
  const context = useContext(ApiDataContext);
  if (!context) {
    throw new Error("useApiData must be used within an ApiDataProvider");
  }
  return context;
};

// 导出action创建函数，简化dispatch调用
export const apiActions = {
  setLoading: (isLoading) => ({
    type: ACTION_TYPES.SET_LOADING,
    payload: isLoading,
  }),
  fetchSuccess: (data) => ({
    type: ACTION_TYPES.FETCH_SUCCESS,
    payload: data,
  }),
  fetchError: (error) => ({
    type: ACTION_TYPES.FETCH_ERROR,
    payload: { message: error.message, details: error },
  }),
};

export default ApiDataContext;
