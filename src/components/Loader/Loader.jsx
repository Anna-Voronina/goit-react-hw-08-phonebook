import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#5c00b5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        margin: '0 auto',
      }}
      wrapperClassName={'Loader'}
      visible={true}
    />
  );
};
