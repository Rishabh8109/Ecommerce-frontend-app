import MobileSection from '../pages/Electroncs/Mobiles/MobileSection';
import MobileAccessories from '../pages/Electroncs/Mobile-Accessories/MobileAccessories';
import LaptopSection from '../pages/Electroncs/Laptop/LaptopSection';
import FeaturedSection from '../pages/Electroncs/Featured/FeaturedSection';
import TelevisionSection from '../pages/Electroncs/Television/TelevisionSection';
import Main from '../pages/Electroncs/Mobiles/Main';



export const route = [
    {
        path : "/mobiles",
        component : Main
    },
    {
        path : "/Mobile Accessories",
        component :MobileAccessories
    },
    {
        path : "/Laptops",
        component :LaptopSection
    },
    {
        path:"/Television",
        component :TelevisionSection,
    },
    {
        path:"/Featured",
        component :FeaturedSection
    },
]