import Taro, { Component } from '@tarojs/taro'
import { ScrollView, View } from "@tarojs/components"
import TitleBar from "../../components/titleBar/titleBar"
import TopCover from "../../components/topCover/topCover"

const aboutCover = 'https://s2.ax1x.com/2020/02/04/1DG5ZR.md.png'

export default class About extends Component {

    render() {
        return <View className='mine-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar isBack />
                <TopCover cover={aboutCover} noMask />
            </ScrollView>
        </View>
    }

}
