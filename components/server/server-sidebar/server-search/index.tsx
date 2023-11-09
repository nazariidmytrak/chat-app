'use client';

import ServerSearchButton from './server-search-button';
import useServerSearch from '@/components/server/hooks/use-server-search';
import { ChannelDataProps } from '@/components/server/interface';
import ServerSearchCommand from './server-search-command';

const ServerSearch = ({ channelData }: { channelData: ChannelDataProps[] }) => {
  const { open, setOpen, onClick } = useServerSearch();

  return (
    <>
      <ServerSearchButton onClick={() => setOpen(true)} />
      <ServerSearchCommand
        open={open}
        onOpenChange={setOpen}
        channelData={channelData}
        onClick={onClick}
      />
    </>
  );
};

export default ServerSearch;
