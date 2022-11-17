import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "标题",
  description: "描述",
  themeConfig: {
    nav: [
      {
        text: "golang",
        link: "/go/1",
      },
      {
        text: "算法",
        link: "/algo/1",
      },
    ],
    sidebar: {
      "/go/": [
        {
          text: "基础",
          collapsible: true,
          items: [{ text: "golang1", link: "/go/1" }],
        },
        {
          text: "提高",
          collapsible: true,
          items: [{ text: "golang2", link: "/go/2" }],
        },
      ],
      "/algo/": [
        {
          text: "算法",
          collapsible: true,
          items: [
            { text: "算法1", link: "/algo/1" },
            { text: "算法2", link: "/algo/2" },
          ],
        },
      ],
    },
  },
  appearance: true,
});
