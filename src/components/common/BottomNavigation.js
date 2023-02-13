import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BottomNavigationTab from './BottomNavigationTab';


const BottomNavigation = () => {
  return (
    <Box>
      <BottomNavigationTab type=''>리스트</BottomNavigationTab>
      <BottomNavigationTab type='calendar'>달력</BottomNavigationTab>
      <BottomNavigationTab type='stats'>통계</BottomNavigationTab>
      <BottomNavigationTab type='setting'>설정</BottomNavigationTab>
    </Box>
  );
};

const Box = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 56px;
`;

export default BottomNavigation;
