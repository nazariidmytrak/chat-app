import { useMemo } from 'react';

import { Button } from '@/components/ui/button';
import useServerActions from '../hooks/use-server-modal';

interface Props {
  actionType: string;
  serverId: string;
  onClose: () => void;
}

const CommonServerModalFooter = ({ actionType, onClose, serverId }: Props) => {
  const { isLoading, performServerAction } = useServerActions();
  const onClick = useMemo(
    () => async () => {
      await performServerAction(serverId, actionType);
      onClose();
    },
    [performServerAction, serverId, onClose, actionType]
  );
  return (
    <div className='flex items-center justify-between w-full'>
      <Button variant='ghost' disabled={isLoading} onClick={onClose}>
        Cancel
      </Button>
      <Button variant='primary' disabled={isLoading} onClick={onClick}>
        Confirm
      </Button>
    </div>
  );
};

export default CommonServerModalFooter;
