import Taro, { Component } from '@tarojs/taro'
import { ScrollView, View } from "@tarojs/components"
import { useSelector } from "@tarojs/redux"
import TitleBar from "../../components/titleBar/titleBar"
import './favoriteArticle.less'

export default class About extends Component {

    state = {
        articleList: [
            { id: 1, cover: 'https://s1.ax1x.com/2019/11/19/MR3wNQ.md.jpg', title: '后来的我们' },
            { id: 2, cover: 'https://s2.ax1x.com/2019/11/20/MhQmdS.jpg', title: '要么孤独，要么庸俗' },
            { id: 3, cover: 'https://s2.ax1x.com/2019/11/20/MhkeyQ.md.jpg', title: '我们都曾畏惧告别' },
            { id: 4, cover: 'https://s2.ax1x.com/2019/11/20/MhKvNQ.jpg', title: '你走了真好，不然总担心你要走' },
        ]
    }

    onListItemClick = async article => {
        if (article.id) {
            await Taro.navigateTo({
                url: `/pages/article/articleDetails?id=${article.id}&title=${article.title}&cover=${article.cover}`,
            })
        }
    }

    render() {
        const customBar = useSelector(state => state.system.customBar)

        return <View className='mine-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar isBack title='喜欢的文章' black />
                <View className='favorite-article-list' style={{ padding: (customBar + 20) + 'px 50rpx 0' }}>
                    {this.state.articleList.map(item => (
                        <View className='article-list-item' onClick={() => this.onListItemClick(item)} key={item.id}>
                            <View className='cover' style={{ backgroundImage: 'url("' + item.cover + '")' }} />
                            <View className='title'>{item.title}</View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    }

}
