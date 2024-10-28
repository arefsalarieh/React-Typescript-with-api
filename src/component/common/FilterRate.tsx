import { Flex, Rate } from 'antd';


const FilterRate = ({setRateFilter}:{setRateFilter:(arg : number | null)=>void}) => {
    const rateArr:number[] = [0 , 1 , 2 , 3 , 4 ]

    const handleRateFilter = (e: React.FormEvent<HTMLInputElement>) =>{
        const newRate = Number(e.currentTarget.value)
        const floorRate = Math.floor(newRate)
        setRateFilter(floorRate)
    }
  return (
    <div className='mt-4 bg-[#FAFAFA] p-4 shadow-2xl'>
            <h1 className='my-2 bg-[aqua] rounded-2xl p-3'>rate</h1>


            {rateArr.map(item=>{
                return(
                    <div className='flex my-1'>
                        <input type="radio" name="rate" className="radio h-4 mr-2 " value={item} id={item.toString()}  onChange={handleRateFilter}/>
                        <label htmlFor={item.toString()} className='text-red-600'>
                            <Flex gap="" vertical>
                                <Rate   value={item} /> 
                            </Flex>               
                        </label>  
                        <h3 className='text-green-400 ms-3'>and more</h3>    
                    </div>                      
                )
            })}
            
                    <div className='flex my-1'>
                        <input type="radio" name="rate" className="radio h-4 mr-2 " value={5} id='5'  onChange={handleRateFilter}/>
                            <label htmlFor='5' className='text-red-600'>
                                <Flex gap="" vertical>
                                    <Rate   value={5} /> 
                                </Flex>               
                        </label>    
                        <h3 className='text-green-400 ms-3'>        </h3>    

                    </div>

                     


    </div>
  )
}

export default FilterRate