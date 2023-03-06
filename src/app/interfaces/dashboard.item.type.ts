export interface DashboardItem {
  theme: string;
  themeIcon: string;
  campaignTitle: string;
  campaignType: string;
  status: string;
  impactedUsers: number;
  color: string;
  creationDate: Date;
  sendDate: Date;
  expandableData: Array<{
    icon: string;
    label: string;
    value: string
  }>;
}
