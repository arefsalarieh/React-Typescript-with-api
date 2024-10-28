
import { Input, Space } from 'antd';


const { Search } = Input;


const CustomSearch = ({ setList}:{ setList:(arg:string)=>void}) =>{



  return(
    <Space direction="vertical" className=' w-96'>
    <Search
      placeholder="What are you looking for?"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={setList}
    />
  </Space>
  )
}

export default CustomSearch;