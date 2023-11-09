export interface ChannelDataProps {
  label: string;
  type: string;
  data: {
    id: string;
    name: string;
    icon: React.ReactNode;
  }[];
}
