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
import axios from 'axios';

const Stats = () => {
    return (
        <Page>
            <Header />
            <Exppermonth month={'1월'} monthprice={10000} />
            <Category>
                <Monthprice />
                <Chart />
                <Expcatelist>
                    <List>
                        <Leftlist
                            part={'part'}
                            percent={52.8}
                            color={'#6C72FF'}
                        />
                        <Rightlist price={400000} />
                    </List>
                    <List>
                        <Leftlist
                            part={'part'}
                            percent={12.3}
                            color={'#F47560'}
                        />
                        <Rightlist price={200000} />
                    </List>
                    <List>
                        <Leftlist
                            part={'part'}
                            percent={12.3}
                            color={'#F47560'}
                        />
                        <Rightlist price={200000} />
                    </List>
                    <List>
                        <Leftlist
                            part={'part'}
                            percent={12.3}
                            color={'#F47560'}
                        />
                        <Rightlist price={200000} />
                    </List>
                </Expcatelist>
            </Category>

            <BottomNavigation />
        </Page>
    );
};

export default Stats;
