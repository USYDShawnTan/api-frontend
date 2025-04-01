# API Frontend 项目

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-Ready-47A248)

一个现代化的 API 展示平台，用于展示和管理 API 接口。该项目采用 React 构建前端，并通过 GitHub Actions 自动部署。

## 🚀 特性

- 📱 响应式设计，适配各种设备
- 🎨 现代化 UI，包含炫酷的动画效果
- 📋 展示 API 接口详细信息，包括请求参数、示例和响应格式
- 📊 显示 API 调用统计数据
- 🔄 自动从 MongoDB 获取最新 API 数据
- 🔒 安全管理敏感配置信息
- 🚀 自动化部署流程

## 📋 前提条件

- Node.js 22.x
- pnpm 8.x
- MongoDB 数据库
- GitHub 账户（用于部署）

## 🛠️ 本地开发环境设置

### 1. 克隆仓库

```bash
git clone https://github.com/your-username/api-frontend.git
cd api-frontend
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 创建`.env`文件

在项目根目录创建一个`.env`文件，添加以下内容（替换为您的 MongoDB 连接信息）：

```
# MongoDB连接信息
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB_NAME=api
MONGODB_COLLECTION=apidata
```

### 4. 从 MongoDB 获取数据

```bash
pnpm run sync-data
```

### 5. 启动开发服务器

```bash
pnpm start
```

应用将在 [http://localhost:3000](http://localhost:3000) 运行。

## 📦 部署流程

该项目使用 GitHub Actions 进行自动构建和部署。每当推送到`main`或`master`分支时，会触发构建流程。

### 部署流程概述：

1. GitHub Actions 检出代码
2. 设置 Node.js 环境并安装 pnpm
3. 安装项目依赖
4. 从 MongoDB 获取最新数据
5. 构建前端应用
6. 将构建产物推送到`build-artifacts`分支
7. 触发后端仓库工作流程更新

### 设置 GitHub Secrets

在仓库设置中添加以下 Secrets：

- `PAT_TOKEN`: GitHub 个人访问令牌，具有 repo 和 workflow 权限
- `MONGODB_URI`: MongoDB 连接字符串
- `MONGODB_DB_NAME`: MongoDB 数据库名
- `MONGODB_COLLECTION`: MongoDB 集合名

## 🔗 与后端集成

该前端应用与 FastAPI 后端集成，后端部署在 Render 上。前端构建完成后，GitHub Actions 会自动触发后端仓库的工作流程，更新 API 服务。

### 配置后端更新钩子

确保后端仓库已配置了`repository_dispatch`事件处理程序，以响应前端的更新通知。

## 🗂️ 项目结构

```
api-frontend/
├── .github/                  # GitHub相关配置
│   └── workflows/            # GitHub Actions工作流程
├── public/                   # 静态资源
├── scripts/                  # 脚本文件
│   └── fetchFromMongoDB.js   # 从MongoDB获取数据的脚本
├── src/                      # 源代码
│   ├── components/           # React组件
│   │   ├── api/              # API相关组件
│   │   │   └── ApiCard.js    # API卡片组件
│   │   └── ui/               # UI通用组件
│   ├── utils/                # 工具函数
│   ├── apiData.json          # API数据（由脚本生成）
│   ├── App.js                # 应用入口组件
│   └── index.js              # 应用入口文件
├── .env                      # 环境变量（本地开发使用）
├── .gitignore                # Git忽略文件
├── package.json              # 项目配置和依赖
└── README.md                 # 项目说明文档
```

## 🔧 环境变量

### 开发环境

在`.env`文件中配置：

```
MONGODB_URI=mongodb+srv://...
MONGODB_DB_NAME=api
MONGODB_COLLECTION=apidata
```

### 生产环境

在 GitHub 仓库设置中添加 Secrets：

- `MONGODB_URI`
- `MONGODB_DB_NAME`
- `MONGODB_COLLECTION`

## 🤝 贡献指南

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 LICENSE 文件


---

## 故障排除

### 构建失败

如果 GitHub Actions 构建失败，请检查：

1. MongoDB 连接字符串是否正确
2. GitHub Secrets 是否配置好
3. PAT_TOKEN 权限是否包含'repo'和'workflow'
4. 检查 GitHub Actions 日志，查看具体错误信息

### 数据不显示

1. 确保 MongoDB 有可用数据
2. 检查`fetchFromMongoDB.js`脚本的输出
3. 确认`.env`文件配置正确
4. 查看浏览器控制台是否有错误

### 后端更新失败

1. 检查后端仓库名称是否正确
2. 确认后端仓库已配置`repository_dispatch`事件处理
3. 验证 PAT_TOKEN 权限是否足够
