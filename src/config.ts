// 个人作品集配置。把下面的占位内容换成你的真实信息即可。
// 简历文件放在 public/resume.pdf，页面上的「下载简历」会链到它。
export const siteConfig = {
  name: "你的名字",
  title: "一句话简介",
  description: "这里是网站简介，会用在页面标题和分享描述里。",
  accentColor: "#1d4ed8",
  social: {
    email: "you@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    twitter: "https://x.com/your-handle",
    github: "https://github.com/your-username",
  },
  aboutMe:
    "在这里写一段自我介绍。可以包括你的背景、正在做的事，以及你希望别人记住的一点。这段话会显示在「关于我」区块。",
  skills: ["技能一", "技能二", "技能三", "例如 TypeScript"],
  projects: [
    {
      name: "项目一：填写项目名称",
      description:
        "用一两句话说明这个项目做了什么、你负责哪一部分。把链接换成仓库或线上地址；留空则卡片不可点击。",
      link: "https://example.com/project-1",
      skills: ["标签一", "标签二"],
    },
    {
      name: "项目二：填写项目名称",
      description:
        "第二个项目的简介。可以写使用的技术、解决的问题，或上线之后的结果。",
      link: "https://example.com/project-2",
      skills: ["标签一", "标签二"],
    },
    {
      name: "项目三：填写项目名称",
      description: "第三个项目的简介。不需要的占位项可以直接从列表里删掉。",
      link: "https://example.com/project-3",
      skills: ["标签一", "标签二"],
    },
  ],
  experience: [
    {
      company: "公司名称",
      title: "职位名称",
      dateRange: "2022.01 - 至今",
      bullets: [
        "在这里写一条具体工作，例如负责的产品或模块",
        "在这里写一条可以量化的结果",
        "在这里写协作、工程或业务上的亮点",
      ],
    },
    {
      company: "上一家公司名称",
      title: "当时的职位",
      dateRange: "2020.06 - 2021.12",
      bullets: [
        "在这里写你当时的主要职责",
        "在这里写你交付过的东西",
      ],
    },
  ],
  education: [
    {
      school: "学校名称",
      degree: "学历与专业，例如计算机科学学士",
      dateRange: "2014 - 2018",
      achievements: [
        "在这里写荣誉、成绩或相关课程",
        "在这里写社团、竞赛或毕业设计",
      ],
    },
  ],
};
