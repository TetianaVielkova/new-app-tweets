import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#766A92"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
    }}
      visible={true}
    />
  );
};