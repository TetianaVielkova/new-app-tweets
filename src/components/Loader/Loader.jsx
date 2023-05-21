import { BallTriangle } from 'react-loader-spinner';
import {Div} from './Loader.styled'

export const Loader = () => {
  return (
    <Div><BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#766A92"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    /></Div>
  );
};