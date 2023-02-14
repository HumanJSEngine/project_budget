import React from 'react';
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

const Stats = () => {
    return (
        <Page>
            <Exppermonth month={'1월'} monthprice={10000} />
            <Category>
                <Monthprice />
                <Chart />
                <Expcatelist>
                    <List>
                        <Leftlist part={'part'} percent={52.8} />
                        <Rightlist price={400000} />
                    </List>
                    <List>
                        <Leftlist part={'part'} percent={12.3} />
                        <Rightlist price={200000} />
                    </List>
                </Expcatelist>
            </Category>

            <BottomNavigation />
        </Page>
    );
};

export default Stats;
