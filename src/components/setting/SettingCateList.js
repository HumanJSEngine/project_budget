import { SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';
import axios from 'axios';

const SettingCateList = ({ children, to, ccSeq }) => {
    const delCate = async () => {
        try {
            await axios
                .get(
                    `http://haeji.mawani.kro.kr:8585/api/category/delete?no=${ccSeq}`
                )
                .then((res) => {
                    if (res) {
                        alert(res.data.message);
                    } else {
                        alert('카테고리 삭제 실패');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Box>
            <Minus onClick={() => delCate()}>-</Minus>
            <Catelist>
                <ItemName>{children}</ItemName>
                <Link to={to}>
                    <SlArrowRight size={12} />
                </Link>
            </Catelist>
        </Box>
    );
};

const Box = styled.li`
    display: flex;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0 10px;
    margin: 0px 16px;
`;

const Minus = styled.button`
    width: 15px;
    height: 15px;
    background: #e23636;
    border-radius: 50%;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Catelist = styled.div`
    width: 100%;
    max-width: 330px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.gray200};
    padding: 10px 0px;
`;

const ItemName = styled.span`
    color: ${colors.gray900};
    font: ${fonts.score15Regular};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default SettingCateList;
