import React from 'react';
import banner from '../../../Image/banner.jpg'


const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage:`url(${banner})`}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">GADGET WORLD</h1>
                    <p class="mb-5">Provident cupidi tate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-orange-500 hover:bg-orange-700">Explore Gadgets</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;