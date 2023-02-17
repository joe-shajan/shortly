import { useCallback, useState } from 'react';
import { Header, ShortendUrl, ShortUrl } from '../components';

type Props = {};

const Home = (props: Props) => {
  const [urls, SetUrls] = useState<
    Array<{ originalUrl: string; shortendUrl: string }>
  >([]);

  const addNewShortendUrl = useCallback(
    (originalUrl: string, shortendUrl: string) => {
      SetUrls((prev) => {
        return [...prev, { originalUrl, shortendUrl }];
      });
    },
    []
  );

  return (
    <div className="min-h-screen bg-gray-200 pb-8">
      {/* header with tagline and svg */}
      <Header />

      <ShortUrl addNewShortendUrl={addNewShortendUrl} />

      {urls.map(({ originalUrl, shortendUrl }) => (
        <ShortendUrl
          key={shortendUrl}
          originalUrl={originalUrl}
          shortendUrl={shortendUrl}
        />
      ))}
    </div>
  );
};

export default Home;
