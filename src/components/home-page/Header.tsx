import { memo } from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="md:w-9/12 md:p-0 px-2 flex mx-auto items-center">
      {/* title */}
      <div className="w-8/12 flex flex-col justify-around md:h-48 h-26">
        <h1 className="md:text-5xl text-md">More than just shorter Links.</h1>
        <p className="hidden md:block">
          Build your brands recognitation and get detailed insights on how your
          links are performing.
        </p>
      </div>
      {/* svg */}
      <div className="w-4/12 md:h-64 h-36  object-cover">
        <img src="homepage.svg" className="h-full " alt="svg" />
      </div>
    </div>
  );
};

export default memo(Header);
