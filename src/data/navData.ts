export interface NavItem {
  text: string
  icon?: string
  desc?: string
  link?: string
  js?: string
}

export interface NavGroup {
  name: string
  icon: string
  desc?: string
  item: NavItem[]
}

export const navList: NavGroup[][] = []

navList[0] = [{
  name: "线上课时", icon: "fa-solid fa-chalkboard-user", item: [
    { text: "学习通", icon: "iconfont icon-chaoxing", link: "https://i.chaoxing.com/" },
    { text: "WeLearn", icon: "fa-solid fa-school", link: "https://welearn.sflep.com/index.aspx" },
    { text: "知到(智慧树)", icon: "fa-solid fa-tree", link: "http://onlineweb.zhihuishu.com" },
    { text: "中国大学MOOC", icon: "fa-solid fa-book-open", link: "https://icourse163.org/home.htm" },
    { text: "云班课", icon: "fa-solid fa-cloud", link: "https://www.mosoteach.cn/web/" },
    { text: "学堂在线", icon: "fa-solid fa-school-circle-check", link: "https://www.xuetangx.com/my-courses/current" },
    { text: "蓝桥云课", icon: "iconfont icon-lanqiao", link: "https://www.lanqiao.cn/" },
    { text: "PTA", icon: "fa-solid fa-laptop-code", link: "https://pintia.cn/problem-sets/active" },
    { text: "希冀", icon: "fa-solid fa-infinity", link: "https://course.educg.net/" },
    { text: "雨课堂", icon: "fa-solid fa-book-open-reader", link: "https://zyd.cdutcm.edu.cn/xxyjyjszx/yhzn1/cjwtjd1/content_90666/" },
    { text: "掌上金课", desc: "成中医自研，微信打开", icon: "fa-solid fa-book-medical", link: "https://yjyzsjk.cdutcm.edu.cn/zsjkm/Account/"},
  ]
}, {
  name: "成中医学习", icon: "fa-solid fa-graduation-cap", item: [
    { text: "成中医官网", icon: "fa-solid fa-globe", link: "https://www.cdutcm.edu.cn/" },
    { text: "畅行杏林", icon: "fa-solid fa-leaf", link: "https://ywt.cdutcm.edu.cn/" },
    { text: "教务系统电脑版", icon: "fa-regular fa-calendar-days", link: "https://jwweb.cdutcm.edu.cn/" },
    { text: "微教务系统", desc: "微信打开", icon: "fa-regular fa-calendar-days", link: "http://jwwx.cdutcm.edu.cn/" },
    { text: "计财处线上平台", desc: "绑定农行卡才可领奖学金", icon: "fa-solid fa-wallet", link: "https://jhcwcdlpt.cdutcm.edu.cn:8051/logCas" },
    { text: "图书馆", desc: "查论文免费", icon: "fa-solid fa-book", link: "https://lib.cdutcm.edu.cn/" },
    { text: "正版软件", icon: "fa-solid fa-cubes", link: "http://ms.cdutcm.edu.cn/" },
    { text: "实验室综合管理平台", desc: "实验室借用", icon: "fa-solid fa-flask", link: "http://210.41.222.139/Wap2/Login" },
    { text: "成中医学工网", icon: "fa-solid fa-briefcase", link: "https://zyd.cdutcm.edu.cn/xgb2023" },
    { text: "本学期校历查看", icon: "fa-solid fa-calendar-days", link: "https://zyd.cdutcm.edu.cn/jwc/jsbszn/content_114063/" },
  ]
}, {
  name: "成中医生活", icon: "fa-solid fa-school", item: [
    { text: "成中医E聚落", desc: "手机上必须用微信打开", icon: "fa-solid fa-street-view", link: "https://one.cdutcm.edu.cn/" },
    { text: "菜鸟驿站", desc: "淘宝取快递", icon: "iconfont icon-taobao", link: "https://pages-fast.m.taobao.com/wow/z/uniapp/1100194/last-mile-fe/m-end-school/home" },//iconfont icon-taobao
    { text: "一卡通", desc: "微信打开", icon: "fa-solid fa-sack-dollar", link: "http://www.mjmic.cn/YKT/Page/CS.aspx" },
    { text: "电费充值", desc: "微信打开，先充饭卡再充电费", icon: "fa-solid fa-bolt", link: "http://www.mjmic.cn/MJDK/Page/Deng/XuanlouBu.aspx" },
    { text: "UNIRUN安卓版", desc: "浏览器下载", icon: "fa-solid fa-person-running", link: "https://cyanedge-my.sharepoint.com/:u:/g/personal/me_henrywhu_cn/IQDY4lQcihLzQLJuUoRLIX6IAemfd6AShDCDSct9fdnKx6c?e=sPDJVK" },
    { text: "成中医WiFi认证", desc: "校园网联网认证", icon: "fa-solid fa-signal", link: "https://portal.cdutcm.edu.cn/webauth.do" },
    { text: "智慧后勤", desc: "报修&借钥匙&失物招领", icon: "fa-solid fa-headset", link: "https://zhhq.cdutcm.edu.cn/" },
    { text: "保卫处", icon: "fa-solid fa-person-military-pointing", link: "http://bwc1.cdutcm.edu.cn/auth_server/login" },
    { text: "温江校医院", desc: "微信打开，可用大学生医保", icon: "fa-solid fa-hospital-user", link: "https://wjmzb.cddmi.cn/H5/#" },
    { text: "志愿四川", desc: "微信打开，报名志愿活动", icon: "fa-solid fa-hand-holding-heart", link: "https://zysc.scyol.com/fzysc/" },
  ]
}, {
  name: "考试/补习/比赛", icon: "fa-solid fa-pen-ruler", item: [
    { text: "试卷打印", desc: "打印店资源", icon: "fa-solid fa-print", js: "dialog.showMsg(this.textContent)" },
    { text: "名来的网课", desc: "期末保命复习视频", icon: "fa-solid fa-hard-drive", link: "https://drive.mzdyl.xyz/%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99" },
    { text: "安娜的档案", desc: "世界最大互联网图书馆", icon: "fa-solid fa-book-atlas", link: "https://zh.annas-archive.org/" },
    { text: "Z Library", desc: "免费电子书下载", icon: "fa-solid fa-book-atlas", link: "https://zh.z-library.sk/" },
    { text: "学信档案", icon: "fa-solid fa-address-card", link: "https://my.chsi.com.cn/archive/index.action" },
    { text: "四六级报名", icon: "fa-solid fa-scroll", link: "https://cet-bm.neea.edu.cn/" },
    { text: "计算机报名", icon: "fa-solid fa-computer", link: "https://ncre-bm.neea.edu.cn/" },
    { text: "普通话报名", icon: "fa-solid fa-bullhorn", link: "https://bm.cltt.org/" },
    { text: "教资报名", icon: "fa-solid fa-person-chalkboard", link: "https://ntce.neea.edu.cn/" },
    { text: "电子商务三创赛", icon: "fa-solid fa-meteor", link: "https://www.3chuang.net/" },
    { text: "华迪杯计算机设计大赛", icon: "fa-solid fa-computer", link: "https://scjsjds.cn/" },
    { text: "蓝桥杯", icon: "iconfont icon-lanqiao", link:"https://dasai.lanqiao.cn/" },
    { text: "ExamCrafts", desc: "还在开发中，可以刷多种题型", icon :"fa-solid fa-note-sticky", link: "https://www.examcrafts.com/" },
  ]
}, {
  name: "成中医周边", icon: "fa-solid fa-circle-nodes", item: [
    { text: "这个点了会报错", desc: "成中医校园频道", link: "https://pd.qq.com/s/1145141919810/" },//311xl977l?b=9
    { text: "成中医校园论坛", desc: "啥都可以问", link: "https://pd.qq.com/s/9o8eewkub?b=9/" },
    { text: "成中医微信使用指南", desc: "绑定后才方便使用", link: "https://zyd.cdutcm.edu.cn/xxyjyjszx/yhzn1/cjwtjd1/content_90666/" },
    { text: "访客进校登记", link: "http://bwc1.cdutcm.edu.cn/wechat/visitor/appointment_list_anon.xhtml" },
    { text: "毕业生就业平台", desc: "", link: "https://m.bysjy.com.cn/index" },
  ]
}, {
  name: "成中医电话", icon: "fa-solid fa-phone", item: [
    { text: "后勤部", desc: "成中医版315", link: "tel:028-61800315" },
    { text: "空调处", desc: "教室开空调必备", link: "tel:028-61801100" },
    { text: "保卫处", desc: "出警速度超级快", link: "tel:028-61800110" },
    { text: "本科招生", desc: "有问必答", link: "tel:028-61800090" },
    { text: "教务处", link: "tel:028-61800075" },
    { text: "博物馆", link: "tel:028-65489473" },
    { text: "图书馆", link: "tel:028-61466659" },
    { text: "信息中心", link: "tel:028-61800213" },
  ]
}]

navList[1] = [{
  name: "第三方导航", icon: "fa-solid fa-signs-post", item: [
    { text: "半岛导航", desc: "西邮 学习", link: "https://www.bandao.ltd/guidance/" },
    { text: "掘金酱", desc: "开发者", link: "https://e.juejin.cn/" },
    { text: "AI工具集", link: "https://ai-bot.cn/" },
    { text: "别摸鱼", desc: "AI 新媒体", link: "https://biemoyu.com/" },
    { text: "下次一定", desc: "影视 工具 装机", link: "https://www.iiice.cn/" },
    { text: "蜗牛导航", desc: "开发 设计", link: "https://s.eallion.com/" },
  ]
}, {
  name: "AI工具", icon: "fa-solid fa-robot",
  item: [
    { text: "豆包", desc: "字节", link: "https://www.doubao.com/chat/" },
    { text: "DeepSeek", link: "https://chat.deepseek.com/" },
    { text: "Kimi.ai", desc: "月之暗面", link: "https://kimi.com/" },
    { text: "秘塔", desc: "搜索 学术", link: "https://metaso.cn/" },
    { text: "元宝", desc: "腾讯", link: "https://yuanbao.tencent.com/" },
    { text: "SCNet", desc: "DeepSeek", link: "https://chat.scnet.cn/ui/chatbot/" },
    { text: "纳米AI", desc: "360(聚合)", link: "https://bot.n.cn/" },
    { text: "通义", desc: "阿里", link: "https://qianwen.com/" },
    { text: "文心一言", desc: "百度", link: "https://yiyan.baidu.com/" },
    { text: "智谱", desc: "", link: "https://chatglm.cn/" },
    { text: "星火", desc: "讯飞", link: "https://xinghuo.xfyun.cn/desk" },
    { text: "天工", desc: "昆仑", link: "https://search.tiangong.cn/" },
    { text: "商量", desc: "商汤", link: "https://chat.sensetime.com/" },
    { text: "ChatGPT", desc: "OpenAI", link: "https://chatgpt.com/" },
    { text: "Gemini", desc: "Google", link: "https://gemini.google.com/" },
    { text: "Copilot", desc: "Microsoft", link: "https://copilot.microsoft.com/" },
    { text: "Poe", desc: "Quora", link: "https://poe.com/" },
    { text: "Perplexity", link: "https://www.perplexity.ai/" },
  ]
}, {
  name: "校友推荐", icon: "fa-solid fa-inbox",
  desc: `<a onclick="dialog.showMsg('联系方式')"><i class="fa-solid fa-pen-to-square"></i> 我要投稿</a>`,
  item: [
    { text: "打字背单词", desc: "Qwerty Learner", link: "https://qwerty.kaiyi.cool/" },
    { text: "公众号编辑", desc: "Doocs Markdown", icon: "fa-brands fa-markdown", link: "https://md.doocs.org/" },
    { text: "电脑入门", desc: "你缺失的那门计算机课", icon: "fa-solid fa-book-bookmark", link: "https://www.criwits.top/missing/" },
    { text: "电脑帮助", desc: "南大IT侠手册", link: "https://www.yuque.com/itxia" },
    { text: "芯片榜", desc: "极客湾SoCPK", link: "https://www.socpk.com/" },
    { text: "Yesicon", desc: "前端图标库", link: "https://yesicon.app/" },
    { text: "开发速查", desc: "Quick Reference", icon: "fa-solid fa-swatchbook", link: "https://quickref.cn/" },
  ]
}, {
  name: "在线工具", icon: "fa-solid fa-toolbox", item: [
    { text: "菜鸟工具", desc: "运行代码", link: "https://c.runoob.com/" },
    { text: "在线PS", desc: "稿定设计", link: "https://ps.gaoding.com/" },
    { text: "帮小忙", desc: "QQ浏览器", link: "https://tool.browser.qq.com/" },
    { text: "IT Tools", desc: "程序员工具", link: "https://it-tools.tech/" },
    { text: "MikuTools", desc: "小工具集合", link: "https://tools.miku.ac/" },
    { text: "测网速", desc: "中科大测速", link: "https://test.ustc.edu.cn/" },
    { text: "USTC反代", desc: "教育网出口测试", link: "http://revproxy.ustc.edu.cn:8000/" },
    { text: "IP检查", desc: "Ping0", link: "https://ping0.cc/" },
    { text: "MyIP", desc: "IP工具箱", link: "https://ipcheck.ing/" },
    { text: "画流程图", desc: "Draw.io", link: "https://draw.io/" },
    { text: "电路仿真", desc: "CircuitJS1", link: "https://www.falstad.com/circuit/circuitjs.html" },
    { text: "在线DOS", desc: "MASM汇编", link: "https://dosasm.github.io/dosrun/" },
    { text: "HDL仿真", desc: "EDA playground", link: "https://edaplayground.com/" },
    { text: "RISC-V仿真", desc: "emulsiV", link: "https://eseo-tech.github.io/emulsiV/" },
    { text: "汇编转换", desc: "Compiler Explorer", link: "https://godbolt.org/" },
  ]
}, {
  name: "软件下载", icon: "fa-solid fa-cube", item: [
    { text: "Win软件", desc: "联想应用商店", icon: "fa-brands fa-microsoft", link: "https://lestore.lenovo.com/" },
    { text: "应用推荐", desc: "果核剥壳", link: "https://www.ghxi.com/" },
    { text: "微软商店解析", desc: "Generation Project", icon: "fa-solid fa-bag-shopping", link: "https://store.rg-adguard.net/" },
    { text: "Win镜像", desc: "UUPDump", icon: "fa-brands fa-windows", link: "https://www.uupdump.cn/" },
    { text: "开源镜像", desc: "NJU Mirror", link: "https://mirror.nju.edu.cn/" },
    { text: "Mac软件", desc: "Digit77破解", icon: "fa-brands fa-apple", link: "https://www.digit77.com/" },
    { text: "JB激活", desc: "JetBra.in", icon: "iconfont icon-apple-mask-icon", link: "https://3.jetbra.in/" },
  ]
}, {
  name: "友链", icon: "fa-solid fa-link",
  desc: `<a onclick="dialog.showMsg('联系方式')"><i class="fa-solid fa-user-plus"></i> 添加友链</a>`,
  item: [
    { text: "小胡的个人网站", desc: "导航站修改者，智医小弟", icon: "fa-solid fa-wechat", link: "https://henry.city/" },
    { text: "纸鹿的个人网站", desc: "导航站原作者，西邮大佬", link: "https://zhilu.site/" },
    { text: "小胡的公众号", desc: "微信搜“小胡同学的记事本”", link: "" },
    { text: "CO导航", desc: "本站Fork来源", link: "https://cooo.site/" },
  ]
},]

navList[2] = [{
  name: "了解各学院", icon: "fa-solid fa-signs-post", item: [
    { text: "半岛导航", desc: "西邮 学习", link: "https://www.bandao.ltd/guidance/" },
  ]
}]