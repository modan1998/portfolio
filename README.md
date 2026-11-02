# 个人作品集

这是一份可填写的个人作品集骨架，基于 [Ryan Fitzgerald 的 DevPortfolio](https://github.com/RyanFitzgerald/devportfolio)（MIT）改成。页面上的中文都是占位，换成你自己的内容即可。

技术栈：Astro + Tailwind CSS。

## 修改个人资料

所有会显示在页面上的内容都在 `src/config.ts`：

- `name`、`title`、`description`：名字、一句话简介、网站描述
- `accentColor`：全站强调色
- `social`：邮箱、LinkedIn、X、GitHub。首屏图标在对应值为空时会隐藏；页脚四个图标都会显示，请改成你自己的链接
- `aboutMe`：关于我
- `skills`：技能标签
- `projects`：项目
- `experience`：工作经历
- `education`：教育经历

删掉 `projects`、`experience` 或 `education` 里的全部条目后，对应区块会自动隐藏。

## 添加项目

在 `projects` 数组里照着现有占位项增删：

```ts
{
  name: "项目名称",
  description: "一两句简介",
  link: "https://github.com/your-username/project", // 留空字符串则卡片不可点击
  skills: ["标签一", "标签二"],
}
```

## 简历

站点里的「下载简历」指向 `/resume.pdf`（如果以后设置了 `base`，会自动加上前缀）。

把你的 PDF 放到 `public/resume.pdf`，覆盖仓库里的占位文件。占位 PDF 只是一个可打开的空壳，提醒你替换它。

入口在三处：

- 顶部导航
- 首屏姓名下方
- 「关于我」正文下方

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开终端里提示的本地地址。确认内容后再构建：

```bash
npm run build
```

产物在 `dist/`。

## 部署

### Vercel

1. 在 Vercel 导入这个 GitHub 仓库。
2. 框架预设选 Astro。构建命令是 `npm run build`，输出目录是 `dist`。
3. 保持 `astro.config.mjs` 里不设置 `base`（默认 `/`），这样「下载简历」就是 `/resume.pdf`。

### GitHub Pages

仓库名是 `portfolio` 时，项目站点地址一般是 `https://modan1998.github.io/portfolio/`。

1. 在 `astro.config.mjs` 的 `defineConfig` 里加上：

```js
site: "https://modan1998.github.io",
base: "/portfolio",
```

2. 仓库 Settings → Pages → Build and deployment，Source 选 GitHub Actions。
3. 新增 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

如果以后改成用户主页仓库（`modan1998.github.io`），把 `base` 去掉或设成 `/`。

## 许可

模板版权见 `LICENSE.md`（Copyright (c) 2025 Ryan Fitzgerald，MIT）。
