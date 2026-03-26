export interface DepartmentStaff {
  name: string;
  title: string;
  role: string;
}

export interface DepartmentProject {
  id: string;
  name: string;
  status: "active" | "completed" | "classified";
  description: string;
  progress: number;
}

export interface DepartmentData {
  slug: string;
  name: string;
  code: string;
  icon: string;
  tagline: string;
  description: string;
  founded: string;
  headCount: number;
  clearanceLevel: number;
  location: string;
  objectives: string[];
  stats: Array<{ label: string; value: string }>;
  staff: DepartmentStaff[];
  projects: DepartmentProject[];
  achievements: string[];
}

export const departments: Record<string, DepartmentData> = {
  fusion: {
    slug: "fusion",
    name: "聚变能源部",
    code: "DEPT-FUS",
    icon: "⚛",
    tagline: "掌控恒星之火，照亮人类未来",
    description:
      "聚变能源部是ATOMIC-7研究所的核心部门，成立于1957年研究所创建之初。部门致力于实现可控核聚变反应的商业化应用，目前已成功研发并部署第四代托卡马克聚变装置——MARK-IV反应堆。部门下设等离子体物理组、超导磁体工程组、燃料循环组和反应堆安全组四个研究小组，拥有超过200名顶尖科研人员。",
    founded: "1957年3月",
    headCount: 234,
    clearanceLevel: 4,
    location: "B2层 — 反应堆大厅",
    objectives: [
      "实现持续稳定的氘-氚聚变反应，维持时间超过720小时",
      "将聚变发电效率提升至40%以上，降低商业化运营成本",
      "研发第五代聚变装置MARK-V，目标输出功率2.5GW",
      "解决氚燃料自持增殖难题，实现燃料闭式循环",
      "探索氦-3聚变技术路线，减少中子辐射污染",
    ],
    stats: [
      { label: "反应堆输出功率", value: "1.2 GW" },
      { label: "年发电量", value: "9.2 亿度" },
      { label: "运行效率", value: "94.7%" },
      { label: "累计运行", value: "12,480 h" },
      { label: "专利数量", value: "47 项" },
      { label: "安全记录", value: "0 事故" },
    ],
    staff: [
      { name: "Dr. Viktor Stein", title: "部门主管 / 首席科学家", role: "聚变反应堆设计" },
      { name: "Eng. Mikhail Petrov", title: "高级工程师", role: "冷却系统" },
      { name: "Dr. Akira Tanaka", title: "等离子体物理学家", role: "磁约束研究" },
      { name: "Dr. Hannah Müller", title: "材料科学家", role: "超导磁体" },
    ],
    projects: [
      { id: "FUS-001", name: "普罗米修斯计划", status: "active", description: "第四代托卡马克装置MARK-IV的持续优化与扩容改造，目标输出功率从1.2GW提升至1.8GW。", progress: 78 },
      { id: "FUS-002", name: "深寒回路", status: "completed", description: "第四代氦锂合金冷却液LiHe-IV研发，热交换效率较水冷系统提升340%。", progress: 100 },
      { id: "FUS-003", name: "凤凰反应堆MARK-V", status: "active", description: "第五代聚变装置概念设计与可行性验证，目标输出功率2.5GW，采用新型球形托卡马克构型。", progress: 23 },
      { id: "FUS-004", name: "氚工厂", status: "classified", description: "[已加密] 氚燃料增殖与提纯技术研究。", progress: 61 },
    ],
    achievements: [
      "1957年：研究所成立，聚变能源部同步创建",
      "1958年：第一代托卡马克装置MARK-I成功点火",
      "1959年：实现聚变反应持续运行超过100小时",
      "1960年：MARK-II反应堆首次实现净能量增益（Q>1）",
      "1961年：MARK-IV反应堆正式投入商业运行",
      "1961年：LiHe-IV冷却液研发成功，效率提升340%",
    ],
  },
  armor: {
    slug: "armor",
    name: "动力装甲部",
    code: "DEPT-APR",
    icon: "🛡",
    tagline: "钢铁之躯，守护文明的最后防线",
    description:
      "动力装甲部负责研发和量产军用动力外骨骼装甲系统。T-51系列同位素动力外骨骼是该部门的旗舰产品，集成了微型核裂变电池、液压伺服系统和综合态势感知模块。部门在材料科学、动力系统和人机工程学领域拥有世界领先的技术储备，目前已完成T-51B型的定型并进入小批量试生产阶段。",
    founded: "1957年6月",
    headCount: 189,
    clearanceLevel: 4,
    location: "B3层 — 武器实验室",
    objectives: [
      "完成T-51B型装甲的全面量产准备，年度交付目标100套",
      "研发T-60下一代动力装甲，提升力量倍增至18x",
      "改进关节伺服系统密封设计，延长沙尘环境下使用寿命",
      "开发模块化武器挂载系统，支持快速换装",
      "研究轻量化合金材料，降低装甲整体重量15%",
    ],
    stats: [
      { label: "力量倍增", value: "12x" },
      { label: "最高速度", value: "45 km/h" },
      { label: "续航时间", value: "72 h" },
      { label: "年度交付", value: "47 套" },
      { label: "防护等级", value: "1000 Sv/h" },
      { label: "在研型号", value: "3 种" },
    ],
    staff: [
      { name: "Col. James Harper", title: "部门主管 / 上校", role: "战术评估" },
      { name: "Dr. Robert Chen", title: "首席工程师", role: "动力系统" },
      { name: "Dr. Ingrid Larsson", title: "材料科学家", role: "装甲合金" },
      { name: "Sgt. Major Williams", title: "高级测试员", role: "实地测试" },
    ],
    projects: [
      { id: "APR-001", name: "T-51B量产计划", status: "active", description: "T-51B型同位素动力外骨骼的量产线建设与工艺优化，目标年产能100套。", progress: 65 },
      { id: "APR-002", name: "沙漠风暴改进", status: "completed", description: "针对沙漠环境下的关节磨损问题进行密封改进，磨损率降低78%。", progress: 100 },
      { id: "APR-003", name: "T-60概念设计", status: "active", description: "下一代动力装甲概念研究，目标力量倍增18x，集成主动防护系统。", progress: 12 },
      { id: "APR-004", name: "模块化武器平台", status: "active", description: "快速换装武器挂载系统研发，支持轻/重武器5秒内切换。", progress: 45 },
    ],
    achievements: [
      "1957年：动力装甲部成立，启动T-51基础研究",
      "1958年：T-51原型机首次试穿测试",
      "1959年：完成内华达试验场30天实地战术评估",
      "1960年：T-51A型完成定型",
      "1961年：T-51B型完成定型，开始小批量试生产",
      "1961年：年度交付军方47套，全部通过验收",
    ],
  },
  quantum: {
    slug: "quantum",
    name: "量子通讯部",
    code: "DEPT-QCM",
    icon: "📡",
    tagline: "超越光速的连接，永不中断的指挥",
    description:
      '量子通讯部专注于基于量子纠缠效应的超光速通讯技术研发。部门的核心成果"幽灵电路"量子纠缠通讯原型系统已成功实现3800公里距离内的零延迟传输验证，纠缠保真度达0.97。该技术具有完全免疫电磁干扰和核爆EMP效应的天然优势，是确保国家指挥链路在核打击后仍可维持运作的战略性技术储备。',
    founded: "1958年1月",
    headCount: 156,
    clearanceLevel: 5,
    location: "B4层 — 量子实验室",
    objectives: [
      "完成全球量子纠缠中继网络的规划与第一期建设",
      "将纠缠保真度从0.97提升至0.99以上",
      "研发量子加密协议Q-SHIELD，抵御量子计算攻击",
      "实现多节点同时纠缠通讯，支持组网作战",
      "探索量子隐形传态在物资传输领域的应用",
    ],
    stats: [
      { label: "传输延迟", value: "0 ms" },
      { label: "纠缠保真度", value: "0.97" },
      { label: "验证距离", value: "3,800 km" },
      { label: "EMP恢复", value: "<200 ms" },
      { label: "加密等级", value: "Q-256" },
      { label: "中继站", value: "12 座" },
    ],
    staff: [
      { name: "Dr. Elena Vasquez", title: "部门主管 / 首席科学家", role: "量子纠缠理论" },
      { name: "Dr. Wei Zhang", title: "高级研究员", role: "量子加密" },
      { name: "Dr. Nikolai Orlov", title: "实验物理学家", role: "中继技术" },
      { name: "Dr. Maria Santos", title: "通讯工程师", role: "信号处理" },
    ],
    projects: [
      { id: "QCM-001", name: "幽灵电路III期", status: "active", description: "扩大量子纠缠通讯验证范围，目标实现8000公里跨洋传输。", progress: 52 },
      { id: "QCM-002", name: "Q-SHIELD协议", status: "active", description: "下一代量子加密通讯协议研发，可抵御量子计算机的Shor算法攻击。", progress: 34 },
      { id: "QCM-003", name: "全球中继网", status: "active", description: "全球量子纠缠中继网络规划与第一期建设，规划中继站120座。", progress: 8 },
      { id: "QCM-004", name: "量子雷达", status: "classified", description: "[已加密] 基于量子纠缠的新型探测技术研究。", progress: 41 },
    ],
    achievements: [
      "1958年：量子通讯部成立",
      "1959年：幽灵电路I期——500公里传输验证成功",
      "1959年：幽灵电路II期——2000公里传输验证成功",
      "1960年：幽灵电路III期——3800公里零延迟传输验证",
      "1961年：完成1200公里量子纠缠传输稳定性长期测试",
      "1961年：启动全球中继网络规划",
    ],
  },
  medical: {
    slug: "medical",
    name: "辐射医学部",
    code: "DEPT-RMD",
    icon: "💉",
    tagline: "与辐射共存，守护生命之光",
    description:
      "辐射医学部是ATOMIC-7研究所中与人类生命健康最直接相关的研究部门。部门主要研究方向包括：辐射损伤的预防与治疗、同位素靶向治疗技术、辐射适应性基因研究以及核环境下的公共卫生保障。部门目前最引人注目的成果是利用钴-60同位素进行恶性肿瘤靶向放射治疗的临床实验，完全缓解率达68.1%。",
    founded: "1958年4月",
    headCount: 178,
    clearanceLevel: 3,
    location: "B1层 — 医疗翼",
    objectives: [
      "将同位素靶向治疗完全缓解率从68.1%提升至85%以上",
      "研发新型辐射防护药物，降低急性辐射综合征死亡率",
      "探索辐射适应性基因的分离与人工合成",
      "建立核环境下大规模公共卫生应急预案",
      "开发便携式辐射剂量实时监测生物传感器",
    ],
    stats: [
      { label: "完全缓解率", value: "68.1%" },
      { label: "累计治疗", value: "127 例" },
      { label: "在研药物", value: "14 种" },
      { label: "临床阶段", value: "II 期" },
      { label: "基因靶点", value: "23 个" },
      { label: "防护等级", value: "Sv级" },
    ],
    staff: [
      { name: "Dr. Li Wei-Ming", title: "部门主管 / 首席医学官", role: "同位素治疗" },
      { name: "Dr. Sarah Thompson", title: "放射医学专家", role: "辐射防护" },
      { name: "Dr. Kenji Yamamoto", title: "基因学家", role: "辐射适应基因" },
      { name: "Nurse Captain Maria Lopez", title: "高级护理长", role: "临床护理" },
    ],
    projects: [
      { id: "RMD-001", name: "辐射天使II期", status: "active", description: "同位素靶向治疗第二期临床实验，扩大样本量至200例，引入新型同位素铱-192。", progress: 58 },
      { id: "RMD-002", name: "铅盾计划", status: "active", description: "新型辐射防护药物RAD-SHIELD研发，目标将急性辐射综合征死亡率降低50%。", progress: 33 },
      { id: "RMD-003", name: "基因炼金术", status: "active", description: "辐射适应性基因的分离、测序与人工合成研究，目标实现人类辐射耐受性提升。", progress: 19 },
      { id: "RMD-004", name: "生物剂量计", status: "completed", description: "基于血液生物标志物的便携式辐射剂量实时监测传感器原型开发。", progress: 100 },
    ],
    achievements: [
      "1958年：辐射医学部成立",
      "1959年：同位素靶向治疗I期临床实验启动",
      "1960年：辐射天使I期完成，完全缓解率68.1%",
      "1960年：发现辐射耐受基因标志物3组",
      "1961年：同位素靶向治疗进入II期临床",
      "1961年：累计治疗患者127例，RAD-SHIELD原型完成",
    ],
  },
  ecology: {
    slug: "ecology",
    name: "废土生态部",
    code: "DEPT-ECO",
    icon: "🌿",
    tagline: "在废墟中播种希望，让生命重返大地",
    description:
      '废土生态部致力于研究核辐射环境下的生态系统恢复与重建技术。部门的研究涵盖高辐射耐受植物筛选与培育、土壤去污技术、辐射环境下的微生物生态学以及生态修复工程。部门在内华达核试验场周边发现了12种高辐射耐受植物物种，其中最引人注目的是含有未知DNA修复酶的"凤凰蕨"，该发现可能对人类辐射防护产生革命性影响。',
    founded: "1959年2月",
    headCount: 112,
    clearanceLevel: 3,
    location: "B1层 — 生态实验室 / 地表观测站",
    objectives: [
      '完成"凤凰蕨"DNA修复酶的分离、测序与人工合成',
      "建立高辐射耐受植物基因库，目标收集200种以上",
      "研发大规模土壤去污技术，目标效率提升至90%",
      "建设首座辐射环境生态修复示范区",
      "研究辐射环境下食物链的传播与富集规律",
    ],
    stats: [
      { label: "耐受物种", value: "12 种" },
      { label: "基因库容量", value: "156 株" },
      { label: "土壤去污率", value: "73%" },
      { label: "观测站点", value: "8 座" },
      { label: "修复面积", value: "2.3 km²" },
      { label: "新发现酶", value: "1 种" },
    ],
    staff: [
      { name: "Dr. Sarah Chen", title: "部门主管 / 首席生态学家", role: "辐射生态学" },
      { name: "Dr. Tom Baker", title: "植物遗传学家", role: "耐受植物培育" },
      { name: "Dr. Yuki Nakamura", title: "土壤科学家", role: "土壤去污" },
      { name: "Ranger Capt. Davis", title: "外勤队长", role: "野外采样" },
    ],
    projects: [
      { id: "ECO-001", name: "绿洲协议", status: "active", description: "辐射环境植物变异适应性研究续期，扩大采样范围至50公里半径。", progress: 62 },
      { id: "ECO-002", name: "凤凰计划", status: "active", description: '"凤凰蕨"DNA修复酶的完整测序与人工合成，探索应用于人类细胞的可能性。', progress: 28 },
      { id: "ECO-003", name: "净土工程", status: "active", description: "大规模土壤去污技术研发，采用生物修复与化学淋洗联合方案。", progress: 41 },
      { id: "ECO-004", name: "伊甸园示范区", status: "active", description: "首座辐射环境生态修复示范区建设，面积2.3平方公里。", progress: 15 },
    ],
    achievements: [
      "1959年：废土生态部成立",
      "1960年：绿洲协议启动，开始核试验场周边生态调查",
      "1960年：发现12种高辐射耐受植物物种",
      '1960年：发现"凤凰蕨"及其未知DNA修复酶',
      "1961年：完成2.3平方公里生态修复示范区选址",
      "1961年：土壤去污技术效率提升至73%",
    ],
  },
};

export const departmentList = Object.values(departments);

export const statusConfig: Record<string, { label: string; class: string }> = {
  active: { label: "进行中", class: "log-status-pending" },
  completed: { label: "已完成", class: "log-status-success" },
  classified: { label: "已加密", class: "log-status-classified" },
};

export const clearanceLabels: Record<number, { label: string; class: string }> = {
  1: { label: "L1 — 公开", class: "cls-l1" },
  2: { label: "L2 — 内部", class: "cls-l2" },
  3: { label: "L3 — 机密", class: "cls-l3" },
  4: { label: "L4 — 绝密", class: "cls-l4" },
  5: { label: "L5 — 最高机密", class: "cls-l5" },
};
