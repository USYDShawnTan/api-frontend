const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

// 加载.env文件
require("dotenv").config();

// 从环境变量中获取MongoDB连接信息，如果不存在则使用默认值
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB_NAME || "api";
const COLLECTION_NAME = process.env.MONGODB_COLLECTION || "apidata";
const OUTPUT_FILE = path.join(__dirname, "../src/apiData.json");

async function fetchFromMongoDB() {
  console.log("📡 开始从MongoDB获取数据...");

  const client = new MongoClient(MONGODB_URI);

  try {
    // 连接到MongoDB
    await client.connect();
    console.log("✅ 已连接到MongoDB");

    // 获取数据库和集合
    const database = client.db(DB_NAME);
    const collection = database.collection(COLLECTION_NAME);

    // 查询所有数据
    const documents = await collection.find({}).toArray();
    console.log(`📊 找到 ${documents.length} 条API数据`);

    if (documents.length === 0) {
      throw new Error("未找到任何数据");
    }

    // 确保目录存在
    const dir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 保存数据到本地JSON文件
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(documents, null, 2), "utf8");

    console.log(`✅ 成功保存 ${documents.length} 条API数据到: ${OUTPUT_FILE}`);

    return true;
  } catch (error) {
    console.error("❌ 从MongoDB获取数据失败:", error.message);

    // 创建静态示例数据作为备份
    console.log("📄 创建示例数据作为备份...");
    const exampleData = [
      {
        _id: "1",
        title: "示例API",
        description: "这是一个示例API（备份数据）",
        endpoint: "example",
        requestParams: ["param - 参数说明"],
        requestExample: ["?param=value"],
        responseFormat: "JSON",
        responseExample: '{ "message": "Success" }',
      },
    ];

    // 保存示例数据
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(exampleData, null, 2), "utf8");
    console.log(`✅ 已保存示例数据到: ${OUTPUT_FILE}`);

    return false;
  } finally {
    // 关闭MongoDB连接
    await client.close();
    console.log("🔌 已关闭MongoDB连接");
  }
}

// 立即执行函数
(async () => {
  try {
    const success = await fetchFromMongoDB();
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error("❌ 未处理的错误:", error);
    process.exit(1);
  }
})();
