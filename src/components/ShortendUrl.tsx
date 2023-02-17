import { memo, useState } from 'react';

import UrlContainer from './UrlContainer';
import Button from './button/Button';

type Props = {
  originalUrl: string;
  shortendUrl: string;
};

const ShortendUrl = ({ originalUrl, shortendUrl }: Props) => {
  const [showCopiedMsg, setShowCopiedMsg] = useState(false);

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(shortendUrl);

    setShowCopiedMsg(true);

    setTimeout(() => {
      setShowCopiedMsg(false);
    }, 3000);
  };

  return (
    <UrlContainer>
      <div className="h-full border border-gray-300 rounded w-full flex gap-4 justify-between items-center px-2">
        <div className="truncate">
          <a className="hover:underline text-sm" href={originalUrl}>
            {originalUrl}
          </a>
        </div>
        <div className="flex gap-3 items-center">
          <a
            className="text-teal-800 hover:underline text-sm"
            href={shortendUrl}
          >
            {shortendUrl}
          </a>
          <div className="h-8 flex my-2">
            <Button
              value={showCopiedMsg ? 'Copied' : 'Copy'}
              onClick={copyToClipBoard}
            />
          </div>
        </div>
      </div>
    </UrlContainer>
  );
};

export default memo(ShortendUrl);
