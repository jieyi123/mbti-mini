import {View, Text} from '@tarojs/components'
import {AtButton} from 'taro-ui'

import './index.scss'

export default () => {
  return (
    <View className='index'>
      <Text>用户详情</Text>
      <AtButton type='primary'>按钮文案</AtButton>
    </View>
  )
}
