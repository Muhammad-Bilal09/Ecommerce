import React from 'react'
import { IoHandRight } from "react-icons/io5";
import "../../scss/shop.scss"
import MensItem from '../MensItem';
import WomenItem from '../WomenItem';
import KidsItem from '../KidsItem';
import Heroimg from "../../Assets/hero_image.png"
import Mens from "../../Assets/banner_mens.png"
import Women from "../../Assets/banner_women.png"
import Kids from "../../Assets/banner_kids.png"
export default function Shop() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className='hero'>
                <div className='shop ' style={{marginTop:"150px"}}>
                    <h4>new arrival only</h4>
                    <h1>
                        new <span style={{color:"darkgray"}}><IoHandRight/> </span><br />collection <br />for everyone 
                    </h1>
                <button className='btn btn-primary'> Latest Collection</button>
                </div>
                <div className='shopimg'>
                   <img style={{width:"70%"}} src={Heroimg} alt="" />
                </div>
                </div>
            <h1 className='text-center text-primary'>New Collection</h1>
            <img src={Mens} style={{width:"80%"}} alt="" />
            <div className="template" >
               
            <MensItem img="https://i0.wp.com/risingranks.me/wp-content/uploads/2023/09/street-style-of-mens-clothing-1.jpg?resize=542%2C542&ssl=1" name="men dress" price={25000}/>

            <MensItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4jzel56jAX9X7MWrEdQHR2O9adIwNgwpYQ&usqp=CAU" name="men dress" price={10000}/>

            <MensItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4jzel56jAX9X7MWrEdQHR2O9adIwNgwpYQ&usqp=CAU" name="men dress" price={5000}/>

            <MensItem img="https://i.pinimg.com/564x/84/48/af/8448af80944eaca909874361f6009221.jpg"price={25000} name="men dress"/>

            <MensItem img="https://i.pinimg.com/474x/ff/d4/83/ffd483a418b7a6d4589c427a3665f55e.jpg" price= {15000} name="men dress"/>

            <MensItem img="https://www.instyle.com/thmb/EMeMmp7gV5ZC-QgM9f-7R_iLSr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-539573922-2000-a03885527cf14bb9b1719a5812fb1d26.jpg" name="men dress" price={5000}/>
            </div>
            <img src={Women} style={{width:"80%"}} alt="" />
<div className='template'>

<WomenItem img="https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg" name="Women dress" price={ 10000}/>

<WomenItem img="https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg" name="Women dress" price={ 10000}/>

<WomenItem img="https://i.pinimg.com/736x/d5/a1/45/d5a1453e4c607ed88f285c228ca52dfa.jpg" price={ 10000} name="Women dress"/>

<WomenItem img="https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg" price={ 15000} name="Women dress"/>

<WomenItem img="https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg" price={ 15000} name="Women dress"/>

<WomenItem img="https://static-01.daraz.pk/p/d8ad268874f1c9f7c6647b637e3eb987.jpg" price={ 15000} name="Women dress"/>

</div>

<img src={Kids} style={{width:"80%"}} alt="" />
<div className='template'>
<KidsItem img="https://nronlineshop.pk/wp-content/uploads/2019/12/9-1.jpg" name="Kid dress" price={7000} />

<KidsItem img="https://nronlineshop.pk/wp-content/uploads/2019/12/9-1.jpg" price={7000} name="Kid dress" />

<KidsItem img="https://nronlineshop.pk/wp-content/uploads/2019/12/9-1.jpg" price={7000}  name="Kid dress"/>

<KidsItem img="https://canary.contestimg.wish.com/api/webimage/5e5de4ff42f0d0323fc489e3-large.jpg?cache_buster=f32be6fd788a14ee26a522f01327c8f9" name="Kid dress" price={7000} />

<KidsItem img="https://canary.contestimg.wish.com/api/webimage/5e5de4ff42f0d0323fc489e3-large.jpg?cache_buster=f32be6fd788a14ee26a522f01327c8f9" name="Kid dress" price={7000} />

<KidsItem img="https://canary.contestimg.wish.com/api/webimage/5e5de4ff42f0d0323fc489e3-large.jpg?cache_buster=f32be6fd788a14ee26a522f01327c8f9" name="Kid dress" price={7000} />


</div>

           
            
            </div>
        </div>
    </div>
    </>
  )
}
