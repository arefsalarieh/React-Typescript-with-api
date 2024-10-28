import React, { useState } from 'react';
import { Slider, Switch } from 'antd';

const FilterCost = ({MinCost  , MaxCost , setMinCost , setMaxCost}:{MinCost:number , setMinCost:(arg:number)=>void , MaxCost:number , setMaxCost:(arg:number)=>void}) => {

  const handleCost = (arr:number[]) =>{
    setMinCost(arr[0]*100000)
    setMaxCost(arr[1]*100000)
  }

  return (
    <>
        <div className='mt-4 bg-[#FAFAFA] p-4 shadow-2xl'>
          <h1 className='my-2 bg-[aqua] rounded-2xl p-3'>cost</h1>
          <div className='flex gap-6 mt-6'>
            <h3 className='w-[20%]'>{MinCost ? MinCost : 'free'}</h3>
            <Slider className='w-[60%]' range defaultValue={[0, 100]}  step={1} onChange={handleCost}/>
            <h3 className='w-[20%]'>{MaxCost}</h3>
          </div>
        </div>
    </>
  );
};

export default FilterCost;