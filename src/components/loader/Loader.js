import { LoaderBox } from 'components/loader/Loader.styled';
import { RotatingLines } from 'react-loader-spinner';
import { theme } from '../constants/Theme';

export const Loader = ({ width }) => {
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor={theme.colors.hover}
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </LoaderBox>
  );
};
