import { useLocation } from 'react-router-dom';

const useBasePath = () => {
  const location = useLocation();
  const basePath = process.env.REACT_APP_BASE_PATH || '/'; // 기본 경로 설정
  return `${basePath}${location.pathname}`;
};

export default useBasePath;