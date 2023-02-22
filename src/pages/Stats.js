import React, { useState } from 'react';
import BottomNavigation from '../components/common/BottomNavigation';
import Page from '../styles/Page';
import Chart from '../components/stats/Chart';
import Exppermonth from '../components/stats/Exppermonth';
import Category from '../components/stats/Category';
import Expcatelist from '../components/stats/Expcatelist';
import List from '../components/stats/List';
import Rightlist from '../components/stats/Rightlist';
import Leftlist from '../components/stats/Leftlist';
import Monthprice from '../components/stats/Monthprice';
import Header from '../components/Layout/Header';
import useFetch from '../hooks/useFetch';
import Percent from '../utils/Percent';
import Container from '../styles/Container';

const Stats = () => {
    const statdata = useFetch(
        'get',
        'http://haeji.mawani.kro.kr:8585/api/expense/list'
    );

    console.log(statdata);
    return (
        <Page>
            <Header />
            <Container>
                <Exppermonth month={'1월'} monthprice={10000} />
                <Category>
                    <Monthprice />
                    <Chart statdata={statdata} />
                    <Expcatelist>
                        {statdata.map((item) => (
                            <List>
                                <Leftlist
                                    key={item.ehCcSeq}
                                    part={item.ehC}
                                    percent={Percent(statdata, item.ehPrice)}
                                    color={'#6C72FF'}
                                />
                                <Rightlist price={item.ehPrice} />
                            </List>
                        ))}
                    </Expcatelist>
                </Category>
            </Container>
            <BottomNavigation />
        </Page>
    );
};

export default Stats;
