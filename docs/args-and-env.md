# 参数与变量

## 启动参数

| 参数名     | 参数                  | 示例                               | 说明          |
|---------|---------------------|----------------------------------|-------------|
| 设置目录    | `--config`          | `--config=/Users/wushuo/ani-rss` | 指定设置与数据存放位置 |
| 端口      | `--server.port`     | `--server.port 7789`             | 指定服务端口      |
| IP绑定    | `--server.address`  | `--server.address 0.0.0.0`       | 指定绑定IP地址    |
| GUI菜单   | `--gui`             | `--gui`                          | 启用图形界面菜单    |
| SWAGGER | `--swagger-enabled` | `--swagger-enabled=true`         | 接口文档        |
| MCP     | `--mcp-enabled`     | `--mcp-enabled=true`             | MCP         |

## 环境变量

| 变量名     | 变量                | 示例                      | 说明          |
|---------|-------------------|-------------------------|-------------|
| 设置目录    | `CONFIG`          | `/Users/wushuo/ani-rss` | 指定设置与数据存放位置 |
| 端口      | `SERVER_PORT`     | `7789`                  | 指定服务端口      |
| IP绑定    | `SERVER_ADDRESS`  | `0.0.0.0`               | 指定绑定IP地址    |
| SWAGGER | `SWAGGER_ENABLED` | `false`                 | 接口文档        |
| MCP     | `MCP_ENABLED`     | `false`                 | MCP         |

## Swagger 接口文档

- **启用Swagger:** `SWAGGER_ENABLED=true` (设置环境变量)
- **通过链接访问:** `/swagger-ui/index.html`

## MCP 使用方式

- **启用MCP:** `MCP_ENABLED=true` (设置环境变量)
- **接入类型:** `streamable`
- **端点:** `/api/mcp`
- **Header:** `api-key=xxxxxx`
- **请求超时时长:** `30秒`
- **执行超时时长:** `300秒`
