import { useMemo } from 'react';

import useServerActions from '@/components/modals/server-modals/shared/hooks/use-server-modal';
import CommonServerDescription from './common-server-modal-description';
import CommonServerFooter from './common-server-modal-footer';

interface Props {
  type: 'leave' | 'delete';
  onClose: () => void;
  serverName: string;
  serverId: string;
}

const CommonServerModalContent = ({
  type,
  serverName,
  onClose,
  serverId,
}: Props) => {
  const { isLoading, performServerAction } = useServerActions();
  const actionType = type === 'leave' ? 'leave' : 'delete';

  const onClick = useMemo(
    () => async () => {
      await performServerAction(serverId, actionType);
      onClose();
    },
    [performServerAction, serverId, onClose, actionType]
  );

  return (
    <>
      <CommonServerDescription
        actionType={actionType}
        serverName={serverName}
      />
      <CommonServerFooter
        isLoading={isLoading}
        onClose={onClose}
        onClick={onClick}
      />
    </>
  );
};

export default CommonServerModalContent;
