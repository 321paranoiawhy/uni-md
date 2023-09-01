# MongoDB 使用

## 安装 MongoDB

- [MongoDB Community Server Download](https://www.mongodb.com/try/download/community)

## MongoDB 简介

集合 (`Collection`)

文档 (`Document`)

数据库 (`Database`)

在 `MongoDB` 中, 存储在集合中的每个文档都需要一个唯一的 `_id` 字段作为主键。如果插入的文档省略了 `_id` 字段, MongoDB 驱动程序会自动为 `_id` 字段生成一个 `ObjectId`。

## 检查是否存在某文档

```ts

```