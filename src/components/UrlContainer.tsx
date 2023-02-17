import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const UrlContainer = ({ children }: Props) => {
  return (
    <div
      className={`md:w-6/12 mx-2 border bg-gray-100 md:mx-auto p-4 flex flex-col justify-center shadow-md my-6 rounded-lg`}
    >
      {children}
    </div>
  );
};

export default UrlContainer;
