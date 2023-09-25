import { useState } from 'react';

export const useClipboard = (inviteUrl: string) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return { copied, copyToClipboard };
};
