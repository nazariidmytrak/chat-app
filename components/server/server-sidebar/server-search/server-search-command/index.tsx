import React from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { ChannelDataProps } from '@/components/server/interface';

interface Props {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  channelData: ChannelDataProps[];
  onClick: (item: { id: string; type: string }) => void;
}

const ServerSearchCommand = ({
  open,
  onOpenChange,
  channelData,
  onClick,
}: Props) => {
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder='Search all channels and members' />
      <CommandList>
        <CommandEmpty>No results found</CommandEmpty>
        {channelData.map(({ label, type, data }) => {
          if (!data?.length) return null;
          return (
            <CommandGroup key={label} heading={label}>
              {data.map(({ id, icon, name }) => {
                return (
                  <CommandItem
                    className='gap-x-1.5 cursor-pointer'
                    key={id}
                    onSelect={() => onClick({ id, type })}
                  >
                    {icon}
                    <span className='max-w-[400px] truncate'>{name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
};

export default ServerSearchCommand;
