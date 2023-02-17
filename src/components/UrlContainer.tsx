import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const UrlContainer = ({ children }: Props) => {
  return (
    <div
      className={`w-6/12 border bg-gray-100 mx-auto p-4 flex flex-col justify-center shadow-md my-6 rounded-lg`}
    >
      {children}
    </div>
  );
};

export default UrlContainer;
