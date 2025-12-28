import React from "react";
import Promotion from '@/components/sections/Promotion.jsx';
import FeaturedProducts from '@/components/sections/FeaturedProducts.jsx';
import LatestProducts from "../components/sections/LatestProducts";
import WhatShopexOffer from "@sections/WhatShopexOffer.jsx";
import UniqueFeatureSofa from "@sections/UniqueFeatureSofa.jsx";
import TrendingProducts from "@sections/TrendingProducts.jsx";
import DiscountItem from "@sections/DiscountItem.jsx";
import TopCategories from "@sections/TopCategories.jsx";
import Button from "@ui/Button.jsx"
import LatestBlog from "@sections/LatestBlog.jsx";

const MainPage = () => {
    return (
        <main className='
            flex flex-col items-center'
        >

            <Promotion />
            <FeaturedProducts title="Featured Products" />
            <LatestProducts title="Latest Products" />
            <WhatShopexOffer title="What Shopex Offer!" />
            <UniqueFeatureSofa title="Unique Features Of latest & Trending Poducts" />
            <TrendingProducts title="Trending Products" />
            <DiscountItem title="Discount Item" />
            <TopCategories title="Top Categories" />

            <div
                className="relative mb-[96px]"
            >
                <img
                    src="src/assets/images/Rectangle 102.png"
                    alt=""
                />

                <div
                    className="
                    absolute top-[174px] left-1/2 -translate-x-1/2
                    w-[580px]
                    flex flex-col items-center gap-[28px]"
                >
                    <p
                        className="
                        text-text text-[35px] text-center leading-[1.55] tracking-[0.015em] font-primary font-bold not-italic">
                        Get Latest Update By Subscribe 0ur Newslater
                    </p>
                    <Button>
                        Shop Now
                    </Button>
                </div>

            </div>

            <div className="mx-auto mb-[96px]">
                <img
                    src="src/assets/images/image 1174.png"
                    alt="Featured"
                    className=""
                />
            </div>

            <LatestBlog title = "Latest Blog" />

        </main>
    );
};

export default MainPage;
