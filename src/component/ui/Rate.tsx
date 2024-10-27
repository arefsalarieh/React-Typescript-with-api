import React, { useState } from 'react';
import { Flex, Rate } from 'antd';


const CustomRate: React.FC = () => {
  const [value, setValue] = useState(3);
  return (
    <Flex gap="" vertical>
      <Rate  onChange={setValue} value={value} />
      
    </Flex>
  );
};

export default CustomRate;