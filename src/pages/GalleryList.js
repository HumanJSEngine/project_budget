import React from 'react';
import GalleryLayout from '../components/gallerylist/GalleryLayout';
import GalleryListImg from '../components/gallerylist/GalleryListImg';
import ex from '../asset/ex.jpg';
import Page from '../styles/Page';
import BottomNavigation from '../components/common/BottomNavigation';
const GalleryList = () => {
    return (
        <Page>
            <GalleryLayout>
                <GalleryListImg src={ex} date={'11일 월요일'} price={10000} />
                <GalleryListImg src={ex} date={'12일 화요일'} price={20000} />
                <GalleryListImg src={ex} date={'13일 수요일'} price={30000} />
                <GalleryListImg src={ex} date={'14일 목요일'} price={40000} />
            </GalleryLayout>
            <BottomNavigation />
        </Page>
    );
};

export default GalleryList;
