export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "主控台", href: "/" },
  { label: "研究档案", href: "/archives" },
  { label: "设施地图", href: "/map" },
  { label: "通讯频道", href: "/comms" },
  { label: "安全协议", href: "/security" },
];

export const siteConfig = {
  title: "ATOMIC-7 // 核子前沿研究所",
  classification: "TOP SECRET // RESTRICTED ACCESS",
  description:
    "ATOMIC-7核子前沿研究所——成立于1957年，致力于核子能技术的和平利用与前沿探索。",
};
