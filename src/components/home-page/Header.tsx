import { memo } from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-9/12 flex mx-auto items-center">
      {/* title */}
      <div className="w-8/12 flex flex-col justify-around h-48">
        <h1 className="text-5xl">More than just shorter Links.</h1>
        <p>
          Build your brands recognitation and get detailed insights on how your
          links are performing.
        </p>
      </div>
      {/* svg */}
      <div className="w-4/12 h-64 object-cover">
        <img src="homepage.svg" className="h-full " alt="svg" />
      </div>
    </div>
  );
};

export default memo(Header);
