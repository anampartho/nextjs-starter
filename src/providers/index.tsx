import { FC, PropsWithChildren } from 'react';
import ReactQueryProvider from './ReactQueryProvider';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
