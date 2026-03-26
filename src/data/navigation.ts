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

export const departmentNav: NavItem[] = [
  { label: "聚变能源部", href: "/dept/fusion" },
  { label: "动力装甲部", href: "/dept/armor" },
  { label: "量子通讯部", href: "/dept/quantum" },
  { label: "辐射医学部", href: "/dept/medical" },
  { label: "废土生态部", href: "/dept/ecology" },
];

export const siteConfig = {
  title: "ATOMIC-7 // 核子前沿研究所",
  classification: "TOP SECRET // RESTRICTED ACCESS",
  description:
    "ATOMIC-7核子前沿研究所——成立于1957年，致力于核子能技术的和平利用与前沿探索。",
};
