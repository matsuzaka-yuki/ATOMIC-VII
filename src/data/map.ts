export interface ZoneInfo {
  floor: string;
  name: string;
  desc: string;
  personnel: number;
  capacity: number;
  radiation: string;
  temp: string;
  clearance: string;
  alert?: boolean;
}

export const zoneData: Record<string, ZoneInfo> = {
  reception: { floor: "B1 // -12m", name: "接待大厅", desc: "设施主入口缓冲区，负责访客登记、身份核验与初步安全检查。配备毫米波扫描门与辐射剂量计。", personnel: 12, capacity: 50, radiation: "0.02", temp: "23°C", clearance: "LEVEL 1 - 公开" },
  security: { floor: "B1 // -12m", name: "安检区", desc: "二级安全检查区域，包括生物特征识别、随身物品X光扫描以及同位素痕迹检测。未通过检查者将被引导至隔离室。", personnel: 8, capacity: 30, radiation: "0.03", temp: "22°C", clearance: "LEVEL 2 - 内部" },
  "armory-b1": { floor: "B1 // -12m", name: "武器库", desc: "常规武器储存与发放中心，存放T-51装甲备件、轻武器弹药及非致命性防暴装备。所有出入需双人核验。", personnel: 4, capacity: 10, radiation: "0.01", temp: "20°C", clearance: "LEVEL 3 - 机密" },
  medical: { floor: "B1 // -12m", name: "医疗中心", desc: "综合医疗设施，含手术室3间、ICU床位12张、普通病房40张。配备同位素治疗室与辐射烧伤专科。", personnel: 23, capacity: 80, radiation: "0.05", temp: "24°C", clearance: "LEVEL 2 - 内部" },
  decontam: { floor: "B1 // -12m", name: "洗消通道", desc: "外勤人员返回后的强制洗消区域，采用化学洗消与辐射洗消双通道设计。单次洗消周期约25分钟。", personnel: 6, capacity: 20, radiation: "0.08", temp: "28°C", clearance: "LEVEL 1 - 公开" },
  quarters: { floor: "B2 // -28m", name: "居住区", desc: "研究员及工作人员居住区域，含单人间、双人间及四人宿舍。配备公共浴室、洗衣房与小卖部。", personnel: 347, capacity: 500, radiation: "0.02", temp: "23°C", clearance: "LEVEL 1 - 公开" },
  cafeteria: { floor: "B2 // -28m", name: "食堂", desc: "主食堂可同时容纳200人就餐。食品供应由地下水培农场与战略储备共同保障，可维持全设施90天供餐。", personnel: 89, capacity: 200, radiation: "0.01", temp: "24°C", clearance: "LEVEL 1 - 公开" },
  recreation: { floor: "B2 // -28m", name: "娱乐区", desc: "包含电影院、图书室、健身房与电子游戏室。每周举办一次集体电影放映会，是维持人员心理健康的重要设施。", personnel: 45, capacity: 100, radiation: "0.01", temp: "23°C", clearance: "LEVEL 1 - 公开" },
  "storage-b2": { floor: "B2 // -28m", name: "物资仓库", desc: "战略物资储备仓库，存放食品、医疗用品、备件及应急装备。库存量由AI系统实时监控，自动触发补货流程。", personnel: 12, capacity: 15, radiation: "0.01", temp: "18°C", clearance: "LEVEL 2 - 内部" },
  labs: { floor: "B3 // -47m", name: "通用实验室", desc: "多用途研究实验室群，配备标准化学、物理及生物实验设备。可按需转换为特定项目专用实验室。", personnel: 67, capacity: 100, radiation: "0.15", temp: "22°C", clearance: "LEVEL 3 - 机密" },
  radmed: { floor: "B3 // -47m", name: "辐射医学部", desc: "专门从事辐射生物学研究与同位素靶向治疗的部门。设有Co-60照射室与低剂量慢性辐射暴露实验室。", personnel: 34, capacity: 50, radiation: "0.45", temp: "22°C", clearance: "LEVEL 3 - 机密" },
  eco: { floor: "B3 // -47m", name: "生态实验室", desc: "【警告】当前检测到异常植物生长活动。凤凰蕈第四代样本出现不可预测的基因变异，该区域已被临时封锁，等待安全评估。", personnel: 0, capacity: 30, radiation: "1.87", temp: "28°C", clearance: "LEVEL 3 - 机密", alert: true },
  water: { floor: "B3 // -47m", name: "水处理中心", desc: "地下水源净化与循环系统，采用反渗透、紫外线消毒与碘吸附三重净化工艺。当前B3模块正在维护，产能降级运行。", personnel: 8, capacity: 10, radiation: "0.02", temp: "20°C", clearance: "LEVEL 2 - 内部" },
  control: { floor: "B4 // -68m", name: "主控中心", desc: "设施的核心指挥枢纽，配备全息投影战术地图、多屏监控阵列以及直接接入反应堆控制系统的主控台。所有楼层的实时数据在此汇总显示。", personnel: 42, capacity: 60, radiation: "0.12", temp: "22°C", clearance: "LEVEL 3 - 机密" },
  quantum: { floor: "B4 // -68m", name: "量子通讯部", desc: "量子纠缠通讯网络核心节点所在区域。配备超低温冷却系统维持量子态稳定，该区域严禁携带任何电子设备进入。", personnel: 29, capacity: 40, radiation: "0.08", temp: "4°C", clearance: "LEVEL 4 - 绝密" },
  server: { floor: "B4 // -68m", name: "数据中心", desc: "主服务器机房，存放ATOMIC-7全部研究数据与人员档案。采用军用级加密存储，物理隔离于外部网络。", personnel: 15, capacity: 20, radiation: "0.05", temp: "16°C", clearance: "LEVEL 3 - 机密" },
  comms: { floor: "B4 // -68m", name: "常规通讯室", desc: "短波、超短波及卫星通讯设备机房，作为量子通讯网络的备份通道。在EMP环境下仍可维持基础通讯能力。", personnel: 11, capacity: 15, radiation: "0.03", temp: "22°C", clearance: "LEVEL 2 - 内部" },
  reactor: { floor: "B5 // -91m", name: "反应堆大厅", desc: "MARK-IV托卡马克聚变反应堆所在地。大厅中央为反应堆主体，周围环绕控制台与应急冷却系统。进入需穿戴全套辐射防护服。", personnel: 38, capacity: 50, radiation: "2.34", temp: "35°C", clearance: "LEVEL 4 - 绝密" },
  cooling: { floor: "B5 // -91m", name: "冷却系统", desc: "第四代氦锂合金冷却液循环系统，负责将反应堆产生的热量导出并转化为可利用的热能。系统运行压力256ATM。", personnel: 16, capacity: 20, radiation: "0.67", temp: "45°C", clearance: "LEVEL 3 - 机密" },
  fuel: { floor: "B5 // -91m", name: "燃料储存", desc: "氘-氚聚变燃料及裂变反应堆备用燃料棒储存区。采用多重物理屏障与24小时武装看守。", personnel: 6, capacity: 8, radiation: "3.12", temp: "18°C", clearance: "LEVEL 4 - 绝密" },
  gate: { floor: "地表", name: "主入口大门", desc: "设施唯一地面出入口，为30吨液压防爆闸门，外观伪装为废弃矿井入口。配有遥控武器站与地雷防御带。", personnel: 8, capacity: 0, radiation: "0.34", temp: "38°C", clearance: "LEVEL 2 - 内部" },
  helipad: { floor: "地表", name: "直升机坪", desc: "可起降2架中型直升机，主要用于紧急人员转移与高优先级物资运输。夜间启用隐蔽照明模式。", personnel: 4, capacity: 0, radiation: "0.28", temp: "35°C", clearance: "LEVEL 2 - 内部" },
  solar: { floor: "地表", name: "太阳能阵列", desc: "伪装为废弃建筑的太阳能发电面板群，为设施提供约8%的辅助电力。在反应堆停机时可维持基本生命支持系统。", personnel: 2, capacity: 0, radiation: "0.25", temp: "45°C", clearance: "LEVEL 1 - 公开" },
  antenna: { floor: "地表", name: "通讯天线群", desc: "包含量子中继天线、短波天线阵列及卫星通讯碟形天线。天线群通过伪装网与周围沙漠环境融为一体。", personnel: 3, capacity: 0, radiation: "0.30", temp: "42°C", clearance: "LEVEL 2 - 内部" },
  guard: { floor: "地表", name: "警卫哨塔", desc: "设施外围4座警卫哨塔，配备热成像仪、重机枪及防空导弹。哨塔之间形成交叉火力覆盖，无监视死角。", personnel: 12, capacity: 0, radiation: "0.32", temp: "40°C", clearance: "LEVEL 2 - 内部" },
  parking: { floor: "地表", name: "装甲车库", desc: "停放4辆装甲运兵车、2辆指挥车及1辆移动雷达车。车库设有地下通道直通B1层洗消区。", personnel: 6, capacity: 0, radiation: "0.26", temp: "36°C", clearance: "LEVEL 2 - 内部" },
};

export interface UtilityInfo {
  icon: string;
  name: string;
  status: "online" | "warning" | "offline";
  statusText: string;
  fillPercent: number;
  fillClass: "green" | "orange" | "red";
  value: string;
  detail: string;
}

export const utilities: UtilityInfo[] = [
  { icon: "⚡", name: "主电力", status: "online", statusText: "在线", fillPercent: 94, fillClass: "green", value: "94.2%", detail: "MARK-IV 聚变反应堆供电" },
  { icon: "🌻", name: "通风系统", status: "online", statusText: "在线", fillPercent: 87, fillClass: "green", value: "87.5%", detail: "HEPA过滤 + 碘吸附塔" },
  { icon: "💧", name: "水循环", status: "warning", statusText: "降级", fillPercent: 62, fillClass: "orange", value: "62.1%", detail: "B3净水模块维护中" },
  { icon: "📡", name: "通讯链路", status: "online", statusText: "在线", fillPercent: 98, fillClass: "green", value: "98.7%", detail: "量子中继网络全通" },
  { icon: "☢", name: "辐射屏蔽", status: "online", statusText: "正常", fillPercent: 99, fillClass: "green", value: "99.1%", detail: "铅板 + 硼酸混凝土" },
];
