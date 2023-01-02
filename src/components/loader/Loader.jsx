import { Circles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color="#3f51b5"
      ariaLabel="circles-loading"
      wrapperStyle={{ margin: '0 auto' }}
      visible={true}
    />
  );
}
