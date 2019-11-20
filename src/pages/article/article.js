import { ScrollView, View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import TitleBar from "../../components/titleBar/titleBar";
import TopCover from "../../components/topCover/topCover";
import './article.less'

const ArticleCover = 'https://www.getatny.com/wp-content/uploads/2019/09/article-cover.jpg'

export default class Article extends Component {

    state = {
        articleList: [
            { id: 1, cover: 'https://s1.ax1x.com/2019/11/19/MR3wNQ.md.jpg', title: '后来的我们' },
            { id: 2, cover: 'https://s2.ax1x.com/2019/11/20/MhQmdS.jpg', title: '要么孤独，要么庸俗' },
            { id: 3, cover: 'https://s2.ax1x.com/2019/11/20/MhkeyQ.md.jpg', title: '我们都曾畏惧告别' },
        ]
    }

    onArticleClick = async (article) => {
        await Taro.navigateTo({
            url: `/pages/article/articleDetails?id=${article.id}&title=${article.title}&cover=${article.cover}`,
        })
    }

    render() {
        return <View className='article-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar />
                <TopCover cover={ArticleCover} />
                {this.state.articleList.map((item, index) => {
                    return <View className='article' key={item.id} style={index === 0 ? { marginTop: '-150rpx' } : null} onClick={() => this.onArticleClick(item)}>
                        <View className='article-cover' style={{ backgroundImage: 'url("' + item.cover + '")' }} />
                        <View className='article-info'>
                            <View className='title'>{item.title}</View>
                        </View>
                    </View>
                })}
            </ScrollView>
        </View>
    }

}
