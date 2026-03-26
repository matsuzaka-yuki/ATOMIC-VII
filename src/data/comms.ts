export interface Channel {
  id: string;
  name: string;
  frequency: string;
  status: "online" | "weak" | "offline";
  signalBars: number;
  lastActivity: string;
  frequencyOverride?: { color: string; prefix: string };
  activityOverride?: { color: string; text: string };
}

export interface Transmission {
  direction: "received" | "sent";
  avatar: string;
  sender: string;
  time: string;
  badge: "routine" | "encrypted" | "priority";
  message: string;
}

export interface Gauge {
  value: string;
  label: string;
  sublabel: string;
  fillOffset: number;
  speed: "slow" | "medium" | "fast";
}

export const channels: Channel[] = [
  { id: "CH-001", name: "指挥部频率", frequency: "142.500 MHz", status: "online", signalBars: 5, lastActivity: "14:32:08" },
  { id: "CH-002", name: "外勤巡逻频道", frequency: "156.750 MHz", status: "online", signalBars: 4, lastActivity: "14:31:45" },
  { id: "CH-003", name: "紧急广播", frequency: "121.500 MHz", status: "weak", signalBars: 2, lastActivity: "12:00:00" },
  { id: "CH-004", name: "科学研究频道", frequency: "168.200 MHz", status: "online", signalBars: 5, lastActivity: "14:29:12" },
  { id: "CH-005", name: "后勤补给频道", frequency: "134.800 MHz", status: "online", signalBars: 3, lastActivity: "14:28:55" },
  { id: "CH-006", name: "地面联络频道", frequency: "147.300 MHz", status: "weak", signalBars: 2, lastActivity: "13:45:22" },
  { id: "CH-007", name: "加密量子链路", frequency: "\u221E.\u221E\u221E\u221E GHz [QUANTUM]", status: "online", signalBars: 5, lastActivity: "14:32:15" },
  {
    id: "CH-008", name: "辐射监测网络", frequency: "189.400 MHz", status: "offline", signalBars: 0,
    lastActivity: "08:12:33",
    frequencyOverride: { color: "var(--color-text-secondary)", prefix: "\u2715" },
    activityOverride: { color: "var(--color-warning-red)", text: "08:12:33 [\u6545\u969C]" },
  },
];

export const transmissions: Transmission[] = [
  { direction: "received", avatar: "R7", sender: "RECON-7", time: "14:28:42", badge: "routine", message: "\u5DE1\u903B\u62A5\u544A\uFF1AB-7\u533A\u57DF\u5DF2\u5B8C\u6210\u521D\u6B65\u626B\u63CF\uFF0C\u672A\u53D1\u73B0\u5F02\u5E38\u8F90\u5C04\u6E90\u3002\u5730\u8868\u5E9F\u589F\u7ED3\u6784\u7A33\u5B9A\uFF0C\u5EFA\u8BAE\u6807\u8BB0\u4E3A\u5B89\u5168\u901A\u884C\u533A\u57DF\u3002" },
  { direction: "sent", avatar: "HQ", sender: "HQ-COMMAND", time: "14:29:05", badge: "routine", message: "\u6536\u5230\uFF0CRECON-7\u3002B-7\u533A\u57DF\u5DF2\u66F4\u65B0\u4E3A\u5B89\u5168\u72B6\u6001\u3002\u7EE7\u7EED\u5411C-1\u533A\u57DF\u63A8\u8FDB\uFF0C\u6CE8\u610F\u76D1\u63A7\u8F90\u5C04\u8BFB\u6570\u53D8\u5316\u3002" },
  { direction: "received", avatar: "S3", sender: "SCIENCE-LAB-03", time: "14:29:33", badge: "encrypted", message: "\u540C\u4F4D\u7D20\u6837\u672C\u5206\u6790\u7ED3\u679C\uFF1A\u9536-90\u6D53\u5EA6\u8D85\u51FA\u9884\u671F\u503C23%\u3002\u5EFA\u8BAE\u7ACB\u5373\u8C03\u6574\u53CD\u5E94\u5806\u51B7\u5374\u53C2\u6570\uFF0C\u9632\u6B62\u5806\u82AF\u6E29\u5EA6\u5F02\u5E38\u5347\u9AD8\u3002" },
  { direction: "sent", avatar: "HQ", sender: "HQ-COMMAND", time: "14:30:01", badge: "priority", message: "\u7D27\u6025\u901A\u77E5\u53CD\u5E94\u5806\u63A7\u5236\u5BA4\uFF1A\u7ACB\u5373\u6267\u884C\u51B7\u5374\u534F\u8BAE\u03B1-7\uFF0C\u964D\u4F4E\u4E3B\u5FAA\u73AF\u6D41\u91CF\u81F375%\u3002\u79D1\u5B66\u90E8\u6301\u7EED\u76D1\u6D4B\u540C\u4F4D\u7D20\u6D53\u5EA6\u3002" },
  { direction: "received", avatar: "L5", sender: "LOGISTICS-5", time: "14:30:45", badge: "routine", message: "\u8865\u7ED9\u8BF7\u6C42\uFF1A\u5C45\u4F4F\u533AC\u680B\u51C0\u6C34\u6EE4\u82AF\u5E93\u5B58\u964D\u81F3\u4E34\u754C\u6C34\u5E73\uFF0C\u9700\u8981\u7D27\u6025\u8C03\u62E8200\u4E2A\u6807\u51C6\u6EE4\u82AF\u3002\u9884\u8BA13\u5929\u5185\u8017\u5C3D\u73B0\u6709\u50A8\u5907\u3002" },
  { direction: "received", avatar: "R7", sender: "RECON-7", time: "14:31:22", badge: "encrypted", message: "\u26A0 \u8B66\u544A\uFF1AC-1\u533A\u57DF\u68C0\u6D4B\u5230\u672A\u77E5\u7535\u78C1\u4FE1\u53F7\u6E90\uFF0C\u9891\u7387\u5F02\u5E38\u3002\u7591\u4F3C\u7B2C\u4E09\u65B9\u901A\u8BAF\u8BBE\u5907\u3002\u8BF7\u6C42\u8FDB\u4E00\u6B65\u6307\u4EE4\u3002" },
  { direction: "sent", avatar: "HQ", sender: "HQ-COMMAND", time: "14:31:48", badge: "priority", message: "RECON-7\u4FDD\u6301\u9690\u853D\uFF0C\u542F\u7528\u4FE1\u53F7\u5206\u6790\u5957\u4EF6\u8FDB\u884C\u9891\u8C31\u91C7\u96C6\u3002\u4E0D\u8981\u63A5\u8FD1\u76EE\u6807\uFF0C\u7B49\u5F85\u652F\u63F4\u5C0F\u7EC4\u62B5\u8FBE\u3002\u5B89\u5168\u534F\u8BAE\u5DF2\u5347\u7EA7\u81F3\u6A59\u8272\u3002" },
];

export const gauges: Gauge[] = [
  { value: "42", label: "\u4FE1\u566A\u6BD4 (SNR)", sublabel: "dB \u00B7 \u4F18\u826F", fillOffset: 56, speed: "fast" },
  { value: "90%", label: "\u52A0\u5BC6\u72B6\u6001", sublabel: "AES-256 \u00B7 \u5B89\u5168", fillOffset: 28, speed: "slow" },
  { value: "60%", label: "\u5E26\u5BBD\u4F7F\u7528\u7387", sublabel: "\u6B63\u5E38\u8D1F\u8F7D", fillOffset: 113, speed: "medium" },
  { value: "7", label: "\u6D3B\u8DC3\u8FDE\u63A5", sublabel: "/ 8 \u603B\u9891\u9053", fillOffset: 85, speed: "fast" },
];
