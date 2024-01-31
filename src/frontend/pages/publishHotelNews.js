import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AddBlogs from './userprofile/addBlogs';

const PublishHotelNews = () => {
    return (
        <>
            <Header />
            <div className='publish_news_div'>
               <AddBlogs/>
               </div>
            <Footer />
        </>
    );
};

export default PublishHotelNews;
