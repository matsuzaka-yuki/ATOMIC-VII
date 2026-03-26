export interface FacilityZone {
  name: string;
  icon: string;
  desc: string;
  personnel: number;
  capacity: number;
  radiation: string;
  temp: string;
  clearance: string;
  alert?: boolean;
}

export interface FacilityEquipment {
  name: string;
  status: "online" | "warning" | "offline" | "standby";
  statusText: string;
  detail: string;
}

export interface FacilityData {
  slug: string;
  name: string;
  code: string;
  icon: string;
  floor: string;
  depth: string;
  tagline: string;
  description: string;
  area: string;
  clearanceLevel: string;
  clearanceNum: number;
  envStats: Array<{ label: string; value: string; warning?: boolean }>;
  zones: FacilityZone[];
  equipment: FacilityEquipment[];
  rules: string[];
  alerts: Array<{ level: "info" | "warning" | "critical"; text: string }>;
}

export const facilities: Record<string, FacilityData> = {
  command: {
    slug: "command",
    name: "主控中心",
    code: "FAC-CMD",
    icon: "🎛",
    floor: "B4",
    depth: "-68m",
    tagline: "全设施神经中枢，一切在此汇聚",
    description:
      "主控中心是ATOMIC-7地下设施的核心指挥枢纽，位于B4层深度68米处。该区域配备全息投影战术地图、72屏监控阵列以及直接接入MARK-IV反应堆控制系统的主控台。所有楼层的实时环境数据、人员位置、安全警报均在此汇总显示。主控中心实行24小时轮班制，由3组值班团队交替值守，确保设施全天候不间断运行。",
    area: "1,200 m\u00B2",
    clearanceLevel: "LEVEL 3 - 机密",
    clearanceNum: 3,
    envStats: [
      { label: "辐射水平", value: "0.12 mSv/h" },
      { label: "环境温度", value: "22\u00B0C" },
      { label: "空气循环", value: "100%" },
      { label: "照明系统", value: "正常" },
      { label: "当前人员", value: "42 / 60" },
      { label: "网络延迟", value: "<1 ms" },
    ],
    zones: [
      { name: "主控台", icon: "🖥", desc: "72屏环形监控阵列，覆盖全部楼层实时画面。中央为全息投影战术地图，可实时显示设施3D模型及人员位置。", personnel: 12, capacity: 15, radiation: "0.12", temp: "22\u00B0C", clearance: "LEVEL 3" },
      { name: "通讯指挥室", icon: "📻", desc: "常规通讯与量子通讯双重指挥席位。配备抗EMP备用通讯线路，确保核打击后指挥链路畅通。", personnel: 8, capacity: 12, radiation: "0.08", temp: "22\u00B0C", clearance: "LEVEL 3" },
      { name: "数据中心", icon: "💾", desc: "主服务器机房，存放全部研究数据与人员档案。采用军用级加密存储，物理隔离于外部网络。环境温度维持16\u00B0C。", personnel: 6, capacity: 8, radiation: "0.05", temp: "16\u00B0C", clearance: "LEVEL 3" },
      { name: "值班休息室", icon: "☕", desc: "值班人员轮班休息区域，配备简易床铺、自动咖啡机与急救包。24小时热水供应。", personnel: 16, capacity: 25, radiation: "0.10", temp: "23\u00B0C", clearance: "LEVEL 1" },
    ],
    equipment: [
      { name: "全息投影战术地图", status: "online", statusText: "在线", detail: "分辨率 4096x4096，实时刷新率 60fps" },
      { name: "72屏监控阵列", status: "online", statusText: "在线", detail: "覆盖全部7层 + 地表，4K分辨率" },
      { name: "反应堆直连控制台", status: "online", statusText: "在线", detail: "双冗余线路，响应延迟 <5ms" },
      { name: "量子通讯终端", status: "online", statusText: "在线", detail: "纠缠保真度 0.97，零延迟" },
      { name: "EMP备份通讯", status: "standby", statusText: "待命", detail: "短波备用通道，随时可激活" },
      { name: "UPS不间断电源", status: "online", statusText: "在线", detail: "满电状态，可维持运行 45 分钟" },
    ],
    rules: [
      "主控中心实行24小时轮班制，每班8小时，严禁脱岗",
      "进入主控台区域需出示L3安全许可及当日通行证",
      "严禁携带任何未经授权的电子存储设备进入数据中心",
      "所有通讯记录自动存档，保留期限不少于10年",
      "遇紧急情况立即启动DEFCON协议，无需上级批准",
    ],
    alerts: [
      { level: "info", text: "B3层生态实验室辐射读数偏高（1.87 mSv/h），已自动标记为黄色警报" },
      { level: "warning", text: "水循环系统B3模块维护中，整体产能降至62%，预计72小时后恢复" },
      { level: "info", text: "下一次全设施安全演习定于3月15日 14:00-16:00" },
    ],
  },
  reactor: {
    slug: "reactor",
    name: "反应堆大厅",
    code: "FAC-RCR",
    icon: "⚛",
    floor: "B5",
    depth: "-91m",
    tagline: "恒星之火在地下燃烧",
    description:
      "反应堆大厅位于设施最深层B5，深度91米，是ATOMIC-7的心脏地带。大厅中央矗立着MARK-IV托卡马克聚变反应堆，这是人类工程史上最复杂的装置之一。反应堆采用超导磁场约束等离子体，以氘和氚为燃料，额定输出功率1.2GW。大厅周围环绕着三重安全壳、应急冷却系统与辐射监测网络，进入该区域必须穿戴全套辐射防护服。",
    area: "3,500 m\u00B2",
    clearanceLevel: "LEVEL 4 - 绝密",
    clearanceNum: 4,
    envStats: [
      { label: "辐射水平", value: "2.34 mSv/h", warning: true },
      { label: "核心温度", value: "187\u00B0C" },
      { label: "冷却压力", value: "256 ATM" },
      { label: "输出功率", value: "1.2 GW" },
      { label: "当前人员", value: "38 / 50" },
      { label: "氚储量", value: "73%" },
    ],
    zones: [
      { name: "反应堆核心区", icon: "⚛", desc: "MARK-IV托卡马克主体，超导磁体直径18米，等离子体环截面3.2平方米。三重安全壳设计，外层为2米厚硼酸混凝土。", personnel: 8, capacity: 12, radiation: "5.67", temp: "45\u00B0C", clearance: "LEVEL 4", alert: true },
      { name: "主控操作区", icon: "🖥", desc: "反应堆运行控制台，配备手动/自动双模式。紧急停堆按钮（SCRAM）可在0.3秒内切断全部磁体电源。", personnel: 12, capacity: 15, radiation: "0.89", temp: "28\u00B0C", clearance: "LEVEL 4" },
      { name: "冷却系统区", icon: "❄", desc: "第四代氦锂合金冷却液LiHe-IV循环系统，流量1200L/min，运行压力256ATM。配备双回路冗余设计。", personnel: 10, capacity: 12, radiation: "0.67", temp: "35\u00B0C", clearance: "LEVEL 3" },
      { name: "燃料储存区", icon: "🛢", desc: "氘-氚聚变燃料及裂变备用燃料棒储存。多重物理屏障，24小时武装看守。当前氚储量可维持运行680小时。", personnel: 8, capacity: 8, radiation: "3.12", temp: "18\u00B0C", clearance: "LEVEL 4" },
    ],
    equipment: [
      { name: "MARK-IV反应堆主体", status: "online", statusText: "运行中", detail: "输出 1.2GW | 运行 8,760h 累计" },
      { name: "超导磁体系统", status: "online", statusText: "正常", detail: "18T场强 | 液氦冷却 -269\u00B0C" },
      { name: "LiHe-IV冷却循环", status: "online", statusText: "正常", detail: "流量 1200L/min | 压力 256ATM" },
      { name: "SCRAM紧急停堆", status: "standby", statusText: "待命", detail: "响应时间 0.3s | 上次测试 3/1" },
      { name: "辐射监测网络", status: "online", statusText: "在线", detail: "48个传感器 | 实时更新" },
      { name: "氚增殖模块", status: "warning", statusText: "降级", detail: "产能 78% | 锂包壳待更换" },
    ],
    rules: [
      "进入反应堆大厅必须穿戴全套辐射防护服（Mark-III型及以上）",
      "单次暴露时间不得超过4小时，日累计不超过6小时",
      "随身佩戴个人剂量计，超限自动触发撤离警报",
      "反应堆核心区5米范围内严禁携带任何磁性材料",
      "SCRAM按钮仅限值班长及以上权限人员操作",
      "所有维护作业需提前48小时提交申请并获得双重审批",
    ],
    alerts: [
      { level: "warning", text: "氚增殖模块产能降至78%，锂包壳更换作业已排期，预计4月完成" },
      { level: "critical", text: "反应堆核心区辐射水平 5.67 mSv/h，接近黄区上限。建议减少非必要人员进入。" },
      { level: "info", text: "MARK-V反应堆概念设计已完成初步评审，预计2023年启动工程阶段" },
    ],
  },
  weapon: {
    slug: "weapon",
    name: "武器实验室",
    code: "FAC-WPN",
    icon: "🔬",
    floor: "B3",
    depth: "-47m",
    tagline: "铸就守护文明之剑",
    description:
      "武器实验室位于B3层，是ATOMIC-7进行先进武器技术研发与测试的核心区域。该区域分为通用实验室群、动力装甲测试区以及武器原型组装车间三大功能模块。动力装甲部与聚变能源部在此联合开展多项武器化应用研究，包括T-51B装甲的量产工艺优化、定向能武器原型测试以及微型核动力装置的安全评估。",
    area: "2,800 m\u00B2",
    clearanceLevel: "LEVEL 3 - 机密",
    clearanceNum: 3,
    envStats: [
      { label: "辐射水平", value: "0.15 mSv/h" },
      { label: "环境温度", value: "22\u00B0C" },
      { label: "空气洁净度", value: "ISO 7" },
      { label: "当前人员", value: "67 / 100" },
      { label: "在研项目", value: "9 项" },
      { label: "武器库存", value: "受控" },
    ],
    zones: [
      { name: "通用实验室群", icon: "🔬", desc: "6间标准化多用途实验室，配备化学通风柜、高精度天平、电子显微镜及3D打印设备。可按需转换为特定项目专用实验室。", personnel: 35, capacity: 60, radiation: "0.08", temp: "22\u00B0C", clearance: "LEVEL 3" },
      { name: "装甲测试区", icon: "🛡", desc: "T-51系列动力装甲的组装、调试与性能测试区域。配备液压测试台、弹道测试隧道及模拟辐射环境舱。", personnel: 18, capacity: 25, radiation: "0.22", temp: "24\u00B0C", clearance: "LEVEL 3" },
      { name: "武器原型车间", icon: "🔧", desc: "高精度武器原型组装与调试车间，配备五轴CNC加工中心、激光焊接系统及非破坏性检测设备。", personnel: 14, capacity: 15, radiation: "0.12", temp: "21\u00B0C", clearance: "LEVEL 4" },
    ],
    equipment: [
      { name: "电子显微镜（TEM/SEM）", status: "online", statusText: "在线", detail: "分辨率 0.1nm | 日均使用 14h" },
      { name: "五轴CNC加工中心", status: "online", statusText: "在线", detail: "精度 \u00B10.005mm | 24h可预约" },
      { name: "弹道测试隧道", status: "online", statusText: "在线", detail: "长度 200m | 最高速度 Mach 3" },
      { name: "模拟辐射环境舱", status: "online", statusText: "在线", detail: "可模拟 0-100 Sv/h 辐射场" },
      { name: "液压测试台", status: "warning", statusText: "维护中", detail: "最大载荷 50t | 油封更换中" },
      { name: "3D金属打印系统", status: "online", statusText: "在线", detail: "钛合金/钨钢 | 成型体积 400mm\u00B3" },
    ],
    rules: [
      "所有实验需提前24小时在实验管理系统提交申请",
      "涉及放射性材料或高能装置的实验需额外安全审批",
      "武器原型车间实行双人出入制度，严禁单人作业",
      "弹道测试需提前通知安全部门并清空测试区周边50米",
      "所有实验数据当日备份至数据中心，原始记录保留不少于5年",
    ],
    alerts: [
      { level: "warning", text: "液压测试台正在更换油封，预计3月29日恢复使用。期间装甲测试项目需使用备用测试台。" },
      { level: "info", text: "新型合金材料AM-117的疲劳测试已进入第2000小时，预计下周完成" },
    ],
  },
  living: {
    slug: "living",
    name: "居住区",
    code: "FAC-LIV",
    icon: "🛏",
    floor: "B2",
    depth: "-28m",
    tagline: "地下的家，文明的火种",
    description:
      "居住区位于B2层深度28米处，是ATOMIC-7全体人员的日常生活空间。区域涵盖宿舍、食堂、娱乐设施、洗衣房及小卖部，可容纳500人长期居住。居住区的设计理念是在极端封闭环境下维持人员的身心健康与团队凝聚力，所有生活设施均按最高舒适度标准建造，旨在让研究人员在紧张的工作之余获得充分休息。",
    area: "4,200 m\u00B2",
    clearanceLevel: "LEVEL 1 - 公开",
    clearanceNum: 1,
    envStats: [
      { label: "辐射水平", value: "0.02 mSv/h" },
      { label: "环境温度", value: "23\u00B0C" },
      { label: "相对湿度", value: "45%" },
      { label: "当前住户", value: "347 / 500" },
      { label: "空余床位", value: "153" },
      { label: "食品储备", value: "90 天" },
    ],
    zones: [
      { name: "宿舍区", icon: "🛏", desc: "含单人间60间（高级研究员）、双人间120间、四人宿舍80间。每间配备独立通风、阅读灯与储物柜。公共浴室每50人共享一间。", personnel: 280, capacity: 460, radiation: "0.02", temp: "23\u00B0C", clearance: "LEVEL 1" },
      { name: "主食堂", icon: "🍽", desc: "可同时容纳200人就餐。由地下水培农场与战略储备共同保障供餐，每日供应三餐加夜宵。每周五为特色美食日。", personnel: 25, capacity: 200, radiation: "0.01", temp: "24\u00B0C", clearance: "LEVEL 1" },
      { name: "娱乐区", icon: "🎮", desc: "包含50座电影院、图书室（藏书12,000册）、健身房、台球室与电子游戏室。每周三举办集体电影放映会。", personnel: 30, capacity: 100, radiation: "0.01", temp: "23\u00B0C", clearance: "LEVEL 1" },
      { name: "生活服务区", icon: "🧺", desc: "公共洗衣房（24台洗衣机）、小卖部（日用品与零食）、理发室及心理咨询服务室。心理咨询服务每周三、五开放。", personnel: 12, capacity: 40, radiation: "0.01", temp: "23\u00B0C", clearance: "LEVEL 1" },
    ],
    equipment: [
      { name: "中央空调系统", status: "online", statusText: "在线", detail: "恒温23\u00B0C | 新风量 30m\u00B3/h/人" },
      { name: "水培农场", status: "online", statusText: "在线", detail: "日产蔬菜 120kg | 品种 18种" },
      { name: "净水系统", status: "online", statusText: "在线", detail: "日处理能力 50吨 | 达标率 100%" },
      { name: "废物处理", status: "online", statusText: "在线", detail: "焚烧+压缩 | 日处理 2.5吨" },
      { name: "洗衣设备", status: "online", statusText: "在线", detail: "24台洗衣机 | 日均运转 18h" },
      { name: "应急广播", status: "standby", statusText: "待命", detail: "覆盖全区域 | 可与主控中心联动" },
    ],
    rules: [
      "宿舍区23:00熄灯，值班人员与特殊情况除外",
      "食堂就餐时间：早餐 06:30-08:00，午餐 11:30-13:00，晚餐 17:30-19:00",
      "娱乐区设备使用实行预约制，每次不超过2小时",
      "严禁在宿舍区内存放易燃易爆物品及放射性材料",
      "公共区域保持整洁，个人物品不得占用公共空间",
    ],
    alerts: [
      { level: "info", text: "本周五特色美食日主题：中式火锅。食材已从战略储备中调配。" },
      { level: "info", text: "心理咨询服务本周三 14:00-17:00 开放，建议连续在设施内超过90天的人员主动预约。" },
      { level: "warning", text: "洗衣房4号洗衣机故障，预计明日修复。期间请使用其他设备。" },
    ],
  },
  surface: {
    slug: "surface",
    name: "地表出口",
    code: "FAC-SRF",
    icon: "☀",
    floor: "地表",
    depth: "0m",
    tagline: "光明与黑暗的交界线",
    description:
      "地表出口区是ATOMIC-7设施与外部世界的唯一物理连接通道。该区域包括伪装为废弃矿井的主入口大门、直升机起降坪、通讯天线群、太阳能辅助发电阵列以及4座警卫哨塔。地表区域位于内华达沙漠腹地，夏季地表温度可达67\u00B0C，所有建筑均采用伪装设计融入沙漠环境。日常出入需通过30吨液压防爆闸门，该闸门外观伪装为废弃矿井入口。",
    area: "约 50,000 m\u00B2",
    clearanceLevel: "LEVEL 2 - 内部",
    clearanceNum: 2,
    envStats: [
      { label: "外部辐射", value: "0.34 mSv/h", warning: true },
      { label: "地表温度", value: "38\u00B0C" },
      { label: "风速", value: "12 km/h" },
      { label: "能见度", value: "15 km" },
      { label: "外围人员", value: "35 人" },
      { label: "伪装完好率", value: "97%" },
    ],
    zones: [
      { name: "主入口大门", icon: "🚪", desc: "30吨液压防爆闸门，伪装为废弃矿井入口。开启时间45秒，配备遥控武器站与地雷防御带。门禁系统采用三重验证。", personnel: 8, capacity: 0, radiation: "0.34", temp: "38\u00B0C", clearance: "LEVEL 2" },
      { name: "直升机坪", icon: "🚁", desc: "可起降2架中型直升机，主要用于紧急人员转移与高优先级物资运输。夜间启用隐蔽照明模式，雷达截面最小化。", personnel: 4, capacity: 0, radiation: "0.28", temp: "35\u00B0C", clearance: "LEVEL 2" },
      { name: "通讯天线群", icon: "📡", desc: "包含量子中继天线、短波天线阵列及卫星通讯碟形天线。通过伪装网与沙漠环境融合。每日进行一次通讯链路测试。", personnel: 3, capacity: 0, radiation: "0.30", temp: "42\u00B0C", clearance: "LEVEL 2" },
      { name: "警卫哨塔群", icon: "🏰", desc: "4座外围警卫哨塔，配备热成像仪、重机枪及防空导弹。哨塔间距800米，形成交叉火力覆盖。24小时双人值守。", personnel: 12, capacity: 0, radiation: "0.32", temp: "40\u00B0C", clearance: "LEVEL 2" },
      { name: "装甲车库", icon: "🚛", desc: "停放4辆装甲运兵车、2辆指挥车及1辆移动雷达车。设有地下通道直通B1层洗消区，外勤车辆返回后必须先经洗消。", personnel: 6, capacity: 0, radiation: "0.26", temp: "36\u00B0C", clearance: "LEVEL 2" },
      { name: "太阳能阵列", icon: "☀", desc: "伪装为废弃建筑的太阳能发电面板群，总装机容量2MW，为设施提供约8%的辅助电力。在反应堆停机时可维持基本生命支持。", personnel: 2, capacity: 0, radiation: "0.25", temp: "45\u00B0C", clearance: "LEVEL 1" },
    ],
    equipment: [
      { name: "液压防爆闸门", status: "online", statusText: "在线", detail: "30吨级 | 开启 45s | 三重验证" },
      { name: "遥控武器站", status: "online", statusText: "在线", detail: "12.7mm重机枪 | 有效射程 1500m" },
      { name: "热成像监控", status: "online", statusText: "在线", detail: "探测距离 2000m | 全天候" },
      { name: "防空导弹系统", status: "standby", statusText: "待命", detail: "4联装 | 射程 15km" },
      { name: "太阳能发电", status: "online", statusText: "在线", detail: "2MW | 当前输出 1.7MW" },
      { name: "伪装系统", status: "online", statusText: "正常", detail: "完好率 97% | 3号面板待修" },
    ],
    rules: [
      "所有人员出入需持有效通行证并接受三重身份验证",
      "外勤返回车辆必须先通过B1层洗消通道，严禁直接进入",
      "地表活动范围限于设施围墙内，严禁越界",
      "直升机起降需提前2小时提交飞行计划并获得批准",
      "夜间（20:00-06:00）非紧急情况禁止出入",
      "发现未经授权的人员或车辆立即启动ALERT协议",
    ],
    alerts: [
      { level: "warning", text: "3号太阳能伪装面板出现破损，维修作业已排期。期间该区域伪装效果略有下降。" },
      { level: "info", text: "本月例行外围巡逻将于3月28日执行，届时地表出口将临时关闭2小时。" },
      { level: "info", text: "直升机燃料储备充足，可支持连续飞行作业48小时。" },
    ],
  },
};

export const facilityList = Object.values(facilities);

export const alertConfig: Record<string, { label: string; color: string; icon: string }> = {
  info: { label: "通知", color: "var(--color-crt-green)", icon: "\u25B8" },
  warning: { label: "警告", color: "var(--color-atomic-orange)", icon: "\u26A0" },
  critical: { label: "严重", color: "var(--color-warning-red)", icon: "\u26D4" },
};
