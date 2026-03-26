export interface Document {
  id: string;
  title: string;
  cls: "top-secret" | "secret" | "confidential" | "unclassified";
  clsName: string;
  author: string;
  date: string;
  pages: string;
  department: string;
  keywords: string;
  description: string;
  tags: string[];
  content: string;
}

export interface LogDataItem {
  label: string;
  value: string;
  red?: boolean;
}

export interface ExperimentLog {
  date: string;
  year: string;
  experimentId: string;
  status: "pending" | "success" | "failed" | "classified";
  statusName: string;
  title: string;
  description: string;
  data: LogDataItem[];
}

export interface TimelineEvent {
  year: string;
  event: string;
  description: string;
  major: boolean;
}

export const documents: Document[] = [
  {
    id: "ATM-1957-PRM-001",
    title: "普罗米修斯计划：受控核聚变反应堆设计蓝图",
    cls: "top-secret",
    clsName: "绝密",
    author: "Dr. Viktor Stein",
    date: "1957.03.14",
    pages: "347页",
    department: "聚变能源部",
    keywords: "普罗米修斯 聚变 能源",
    description: "详细记载了ATOMIC-7第一代托卡马克装置的完整设计参数，包括超导磁体线圈规格、等离子体约束场计算模型以及氘-氚燃料注入系统的工程图纸。",
    tags: ["聚变能源", "反应堆"],
    content: `<p>本文件包含ATOMIC-7研究所第一代托卡马克核聚变装置的完整技术规格与设计蓝图。文件内容涉及国家核心机密，未经O5级安全许可授权，任何复制、传播或引用行为将依据《国家安全法》第17条予以严惩。</p>
<div class="modal-stamp">绝密</div>
<p>第一章概述了受控核聚变的基本原理及本装置的设计目标：在实验室环境下实现持续稳定的氘-氚聚变反应，并输出可利用的电能。设计额定功率为500MW热功率，预计电功率转换效率不低于35%。</p>
<div class="modal-stamped-image"></div>
<p>第二章至第六章分别详述了超导磁体系统、等离子体加热与约束、燃料注入与灰烬排出、热交换与发电系统以及控制与安全联锁系统的设计参数。附录包含全部工程图纸及计算书。</p>`,
  },
  {
    id: "ATM-1958-APR-012",
    title: "T-51同位素动力外骨骼装甲：战术评估报告",
    cls: "top-secret",
    clsName: "绝密",
    author: "Col. James Harper",
    date: "1958.11.22",
    pages: "128页",
    department: "动力装甲部",
    keywords: "T-51 动力装甲 外骨骼",
    description: "基于内华达试验场实弹测试数据，对T-51系列动力装甲的战场生存能力、机动性能及核生化防护效能进行综合评估。包含与苏联动力装甲的对比分析。",
    tags: ["动力装甲", "军事"],
    content: `<p>本报告基于内华达试验场N-7区域进行的为期30天的实地战术评估测试，对T-51系列同位素动力外骨骼装甲的综合作战效能进行系统评估。</p>
<div class="modal-stamp">绝密</div>
<p>测试环境包括：沙漠高温环境（日间地表温度67°C）、模拟核爆辐射区（累积剂量4.2Sv）、高湿度丛林环境以及城市巷战模拟场景。</p>
<p>主要结论：T-51装甲在力量倍增（12x）、速度维持（全速冲刺45km/h，持续2小时）、辐射防护（可抵御高达1000Sv/h的外部辐射）方面表现优异。主要缺陷在于关节伺服系统在沙尘环境下的磨损率偏高，建议改进密封设计。</p>
<div class="modal-stamped-image"></div>`,
  },
  {
    id: "ATM-1959-QCM-003",
    title: "幽灵电路：量子纠缠通讯网络原型测试记录",
    cls: "secret",
    clsName: "机密",
    author: "Dr. Elena Vasquez",
    date: "1959.06.08",
    pages: "89页",
    department: "量子通讯部",
    keywords: "量子 纠缠 通讯 EMP",
    description: "记录了跨越1200公里的量子纠缠信号传输实验。实验证明该技术可完全免疫EMP干扰，在模拟核爆环境下维持100%通讯稳定性。",
    tags: ["量子通讯", "EMP"],
    content: `<p>本记录详述了代号"幽灵电路"的量子纠缠通讯原型系统的第三次大规模测试。测试在ATOMIC-7本部（内华达）与东海岸中继站（新泽西）之间进行，直线距离约3800公里。</p>
<p>测试项目包括：信号传输延迟、纠缠态保真度、环境干扰耐受性以及EMP冲击恢复时间。</p>
<p>关键数据：平均传输延迟 &lt;0.001ms（理论零延迟），纠缠保真度 0.97，在模拟EMP冲击后恢复时间 &lt;200ms。结论：该技术已具备实用化部署条件。</p>`,
  },
  {
    id: "ATM-1960-RMD-007",
    title: "辐射天使：同位素靶向治疗临床实验数据",
    cls: "secret",
    clsName: "机密",
    author: "Dr. Li Wei-Ming",
    date: "1960.02.19",
    pages: "214页",
    department: "辐射医学部",
    keywords: "辐射 医学 同位素 治疗",
    description: "利用放射性同位素Co-60进行恶性肿瘤靶向销毁的实验数据。在47名受试者中，32人实现完全缓解，但长期辐射后遗症风险仍需进一步观察。",
    tags: ["辐射医学", "临床"],
    content: `<p>本报告汇总了利用钴-60同位素进行恶性肿瘤靶向放射治疗的临床实验数据。实验周期为1959年3月至1960年1月，共纳入受试者47名。</p>
<p>治疗方案：通过微型同位素胶囊精准植入肿瘤区域，利用Co-60的γ射线在局部产生高剂量辐射，同时最大限度减少对周围健康组织的影响。</p>
<p>结果：完全缓解32例（68.1%），部分缓解9例（19.1%），无效6例（12.8%）。主要不良反应包括局部放射性皮炎（全部受试者）及骨髓抑制（23例）。长期随访显示，5例完全缓解者在12个月后出现继发性恶性肿瘤。</p>`,
  },
  {
    id: "ATM-1960-ECO-015",
    title: "绿洲协议：辐射环境植物变异适应性研究",
    cls: "confidential",
    clsName: "内部",
    author: "Dr. Sarah Chen",
    date: "1960.09.30",
    pages: "156页",
    department: "废土生态部",
    keywords: "废土 生态 植物 变异",
    description: "在内华达核试验场周边区域发现的12种高辐射耐受植物物种分析报告。部分物种展现出惊人的基因修复能力，或可用于未来废土生态重建。",
    tags: ["废土生态", "生物"],
    content: `<p>本报告记录了在内华达核试验场周边30公里范围内发现的12种高辐射耐受植物物种的采集、培育及分析结果。</p>
<p>其中最引人注目的是一种被临时命名为"凤凰蕨"（编号ECO-1960-003）的变种蕨类植物。该植物在辐射剂量高达500mSv/h的环境中仍能正常生长繁殖，其细胞内检测到一种此前未知的DNA修复酶。</p>
<p>该酶的发现具有重要的理论和应用价值：若能人工合成并应用于人类细胞，可能大幅提升人体对辐射损伤的修复能力。相关研究已获批进入下一阶段。</p>`,
  },
  {
    id: "ATM-1961-COL-022",
    title: "深寒回路：第四代氦锂合金冷却液效能报告",
    cls: "confidential",
    clsName: "内部",
    author: "Eng. Mikhail Petrov",
    date: "1961.04.11",
    pages: "78页",
    department: "聚变能源部",
    keywords: "冷却液 氦锂 热交换",
    description: "新型氦锂合金冷却液在极端高温环境下的热交换效率测试。相比传统水冷系统，热传导率提升340%，可将反应堆核心温度稳定控制在200°C以下。",
    tags: ["材料科学", "冷却系统"],
    content: `<p>本报告评估了第四代氦锂合金冷却液（代号LiHe-IV）在MARK-IV反应堆冷却系统中的实际运行效能。</p>
<p>测试条件：反应堆功率输出1.1GW，持续运行168小时。冷却液入口温度25°C，流量1200L/min。</p>
<p>结果：反应堆核心温度稳定控制在187±3°C，热交换效率达94.7%，较第三代水冷系统提升340%。冷却液在高温下未出现相变或分解现象，化学稳定性优良。建议在MARK-V反应堆设计中全面采用此冷却方案。</p>`,
  },
  {
    id: "ATM-1961-SAF-031",
    title: "核设施标准安全操作规程（第三版）",
    cls: "unclassified",
    clsName: "公开",
    author: "Safety Division",
    date: "1961.08.15",
    pages: "423页",
    department: "安全协议部",
    keywords: "安全 手册 规程 操作",
    description: "面向所有ATOMIC-7设施人员的安全操作指南，涵盖辐射防护、紧急疏散、设备维护及事故处理标准程序。每位入职人员必须通过相关考核。",
    tags: ["安全规程", "手册"],
    content: `<p>本规程为ATOMIC-7研究所全体人员必须遵守的安全操作标准。第三版在前两版基础上，根据过去两年的事故经验教训进行了全面修订。</p>
<p>主要修订内容包括：新增辐射剂量实时监测与报警规程、修订紧急疏散路线图（新增B7层避难所）、强化高放射性区域出入管理流程、增加同位素操作专项安全守则。</p>
<p>所有在册人员须在本规程发布后30日内完成重新培训并通过考核。未通过考核者将被暂停进入限制区域的权限，直至补考通过。</p>`,
  },
  {
    id: "ATM-1962-ANN-001",
    title: "ATOMIC-7研究所1961年度研究进展报告",
    cls: "unclassified",
    clsName: "公开",
    author: "Director's Office",
    date: "1962.01.20",
    pages: "96页",
    department: "所长办公室",
    keywords: "年报 总结 成果 统计",
    description: "汇总1961年度各研究部门的主要成果、专利申请、人员变动及预算执行情况。全年完成重大实验47项，申请专利12项，新增研究员89名。",
    tags: ["年报", "统计"],
    content: `<p>本报告汇总ATOMIC-7研究所1961年度各研究部门主要工作成果。</p>
<p>聚变能源部：MARK-IV反应堆于1961年6月正式投入运行，全年累计发电8,760小时，输出电量9.2亿度。新型氦锂冷却液研发取得突破性进展。</p>
<p>动力装甲部：T-51B型装甲完成定型，开始小批量试生产。年度交付军方47套。</p>
<p>量子通讯部：完成1200公里量子纠缠传输验证，启动全球中继网络规划。</p>
<p>辐射医学部：同位素靶向治疗进入二期临床，累计治疗患者127例。</p>
<p>废土生态部：发现高辐射耐受植物12种，"凤凰蕨"研究进入基因层面分析阶段。</p>
<p>人员与预算：年末在册人员2,187人（较上年增长15%），年度预算执行率94.2%，申请专利12项。</p>`,
  },
];

export const experimentLogs: ExperimentLog[] = [
  {
    date: "12.08",
    year: "1962",
    experimentId: "EXP-1962-0847",
    status: "pending",
    statusName: "进行中",
    title: "MARK-IV反应堆第127次点火测试",
    description: "本轮测试旨在验证新型氦锂冷却系统在持续高功率运行下的稳定性。预计运行时长48小时，目标功率输出1.15GW。",
    data: [
      { label: "功率：", value: "1.12 GW" },
      { label: "温度：", value: "187°C" },
      { label: "运行：", value: "23h 14m" },
    ],
  },
  {
    date: "11.29",
    year: "1962",
    experimentId: "EXP-1962-0839",
    status: "success",
    statusName: "成功",
    title: "T-51B装甲核电池耐久性测试",
    description: "在模拟战场环境下对T-51B型装甲的微型裂变电池进行连续72小时压力测试。电池在承受多次模拟EMP冲击后仍维持正常输出。",
    data: [
      { label: "续航：", value: "78.4 h" },
      { label: "EMP冲击：", value: "17次" },
      { label: "损耗：", value: "2.3%" },
    ],
  },
  {
    date: "11.15",
    year: "1962",
    experimentId: "EXP-1962-0831",
    status: "failed",
    statusName: "失败",
    title: "量子中继器跨洋传输实验",
    description: "尝试通过部署在大西洋中继站的量子纠缠节点实现与欧洲分部的即时通讯。信号在1800公里处出现严重衰减，纠缠态稳定性不足。",
    data: [
      { label: "传输距离：", value: "1,847 km", red: true },
      { label: "信号衰减：", value: "67%", red: true },
      { label: "纠缠保真度：", value: "0.31", red: true },
    ],
  },
  {
    date: "10.22",
    year: "1962",
    experimentId: "EXP-1962-0824",
    status: "classified",
    statusName: "已封存",
    title: "[数据已清除] —— O5级权限查看",
    description: "本实验记录已根据安全协议第7.3条进行数据清除处理。如需查阅原始数据，请提交O5级安全许可申请至安全协议部。",
    data: [
      { label: "状态：", value: "已封存", red: true },
      { label: "解密日期：", value: "2187.01.01" },
    ],
  },
  {
    date: "10.05",
    year: "1962",
    experimentId: "EXP-1962-0819",
    status: "success",
    statusName: "成功",
    title: "辐射耐受植物第四代培育周期完成",
    description: "代号\u201C凤凰蕨\u201D的第四代变异植物在500mSv/h辐射环境下成功完成完整生命周期。植株展现出异常的DNA修复能力，基因组分析正在进行中。",
    data: [
      { label: "辐射耐受：", value: "500 mSv/h" },
      { label: "生长周期：", value: "42天" },
      { label: "基因变异率：", value: "12.7%" },
    ],
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1957",
    event: "ATOMIC-7研究所正式成立",
    description: "根据总统第11451号行政命令，在内华达沙漠地下深处开始建设核子前沿研究设施。首批研究员127人入驻。",
    major: true,
  },
  {
    year: "1958",
    event: "普罗米修斯计划启动",
    description: "第一代托卡马克装置开始建造。T-51动力装甲原型机完成首次穿戴测试，操作者反馈良好。",
    major: false,
  },
  {
    year: "1959",
    event: "幽灵电路原型验证成功",
    description: "量子纠缠通讯原型在1200公里距离上实现零延迟传输，引起军方高度重视。辐射医学部正式成立。",
    major: false,
  },
  {
    year: "1960",
    event: "首次受控聚变反应",
    description: "MARK-I反应堆实现持续3.7秒的受控聚变反应，输出功率达12MW。古巴导弹危机期间，研究所进入最高戒备状态。",
    major: true,
  },
  {
    year: "1961",
    event: "MARK-IV反应堆投入使用",
    description: "第四代反应堆正式并网发电，额定功率1.2GW。废土生态部发现高辐射耐受植物，绿洲协议启动。在册人员突破2000人。",
    major: false,
  },
  {
    year: "1962",
    event: "凤凰计划启动",
    description: "基于绿洲协议成果，启动代号\u201C凤凰\u201D的废土生态重建预研项目。量子中继器网络开始全球部署规划。",
    major: false,
  },
];
