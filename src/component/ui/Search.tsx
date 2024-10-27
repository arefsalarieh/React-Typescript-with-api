
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const show = (text:string) =>{
  console.log(text);
}

const CustomSearch = () => (
  <Space direction="vertical" className='mt-10 w-96'>
    <Search
      placeholder="What are you looking for?"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={show}
    />
  </Space>
);

export default CustomSearch;