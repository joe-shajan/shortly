import React, { memo, useEffect, useState } from 'react';

import { useFetch } from '../../utils';
import UrlContainer from '../UrlContainer';
import Button from '../button/Button';

type Props = {
  addNewShortendUrl: (originalUrl: string, shortendUrl: string) => void;
};

const ShortUrl = ({ addNewShortendUrl }: Props) => {
  const [urlInput, setUrlInput] = useState('');
  const [data, isLoading, error, fetchData] = useFetch();

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setUrlInput(e.currentTarget.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchData(`https://api.shrtco.de/v2/shorten?url=${urlInput}`);
    setUrlInput('');
  };

  useEffect(() => {
    if (!data) return;
    const { original_link: ogLink, full_short_link: fSLink } = data.result;
    addNewShortendUrl(ogLink, fSLink);
  }, [data, addNewShortendUrl]);

  return (
    <UrlContainer>
      <form className="  w-9/12 mx-auto" onSubmit={onSubmitHandler}>
        <div className="flex gap-6">
          <input
            type="text"
            className="w-full p-1 border rounded"
            placeholder="Shorten a link here..."
            value={urlInput}
            onChange={onChangeHandler}
          />

          <Button
            disabled={urlInput.length ? false : true}
            isLoading={isLoading}
            value={'Submit'}
          />
        </div>
        {error ? <p className="text-red-500 text-sm"> {error}</p> : null}
      </form>
    </UrlContainer>
  );
};

export default memo(ShortUrl);
