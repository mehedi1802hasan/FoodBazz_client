import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import Menuitems from '../../../Shared/Menuitems';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menus,setMenus]=useState([]);
    const[menu]=useMenu();
    const popular=menu.filter(item=>item.category === 'popular')
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItmes= data.filter(item=>item.category==='popular')
    //         setMenus(popularItmes)
    //     })
    // },[])
    return (
        <section className='mb-10'>
            <SectionTitle
            heading={'From our menu'}
            subHeading={"Popular Items"}></SectionTitle>
<div className='grid md:grid-cols-2 gap-8'>
    {
        popular.map(item=>
        <Menuitems
        key={item._id}
        item={item}
        >
        </Menuitems>)
    }
</div>
<h4><button className="btn btn-outline mt-5 border-0 border-b-4 border-red-700 ">see more</button></h4>
        </section>
    );
};

export default PopularMenu;