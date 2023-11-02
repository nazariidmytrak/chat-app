import {
  generateMenuItems,
  renderMenuItems,
} from '@/components/server/helpers';
import { useModal } from '@/hooks/use-modal-store';
import { MemberRole, Server } from '@prisma/client';

interface Props {
  server: Server;
  role?: MemberRole;
}

const ServerMenuItems = ({ server, role }: Props) => {
  const { onOpen } = useModal();
  const menuItems = generateMenuItems(onOpen, server, role);
  return <div>{renderMenuItems(menuItems)}</div>;
};

export default ServerMenuItems;
