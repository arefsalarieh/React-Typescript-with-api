import { useState } from 'react';
import frame from '../../assets/images/Frame.svg'

const CoursesAndBlogsFilter = ({setTechFilter}:{setTechFilter:(st:string)=>void}) => {
    const [TechList, setTechList] = useState<string[]>(['frontEnd' , 'backEnd' , 'ai' ]);

    const handleFilter = (e : React.FormEvent<HTMLInputElement>) =>{
        setTechFilter(e.currentTarget.value);
    }
  return (
    <div className='p-4 shadow-2xl'>
        <div className='flex bg-[#E7E7E7] p-4'>
            <img src={frame} alt="" />
            <h1 className='font-bold text-2xl ms-4'>Filters</h1>
        </div>

        <div className='mt-4 bg-[#FAFAFA] p-4 shadow-2xl'>
            <h1 className='my-2 bg-[aqua] rounded-2xl p-3'>technology</h1>

            {TechList.map(item=>{
                return(
                    <div key={item} className='m-1'>
                        <input type="radio" name="tech" className="radio h-4 mr-2 " value={item} id={item}  onChange={handleFilter}/>
                        <label htmlFor={item} className='text-red-600'>{item}</label>                        
                    </div>
                )
            })}

            <input type="radio" name="tech" className="radio h-4 mr-2 " value='clear' id='clear'  onChange={handleFilter}/>
            <label htmlFor='clear' className='text-green-600'>clear</label>   

        </div>
    </div>
  )
}

export default CoursesAndBlogsFilter