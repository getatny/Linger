import { ScrollView, View } from "@tarojs/components"
import Taro, { Component } from '@tarojs/taro'
import TitleBar from "../../components/titleBar/titleBar";
import TopCover from "../../components/topCover/topCover";
import './article.less'

export default class Article extends Component {

    state = {
        articleList: [
            { id: 1, cover: 'https://s1.ax1x.com/2019/11/19/MR3wNQ.md.jpg', title: '后来的我们' },
            { id: 2, cover: 'https://s2.ax1x.com/2019/11/20/MhQmdS.jpg', title: '要么孤独，要么庸俗' },
            { id: 3, cover: 'https://s2.ax1x.com/2019/11/20/MhkeyQ.md.jpg', title: '我们都曾畏惧告别' },
            { id: 4, cover: 'https://s2.ax1x.com/2019/11/20/MhKvNQ.jpg', title: '你走了真好，不然总担心你要走' },
        ]
    }

    onArticleClick = async (article) => {
        if (article.id) {
            await Taro.navigateTo({
                url: `/pages/article/articleDetails?id=${article.id}&title=${article.title}&cover=${article.cover}`,
            })
        }
    }

    render() {
        const firstArticle = this.state.articleList[0] || {
            id: null,
            cover: 'https://www.getatny.com/wp-content/uploads/2019/09/article-cover.jpg',
            title: '要么孤独，要么庸俗'
        }

        return <View className='article-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar />
                <TopCover cover={firstArticle.cover} shadow info click={() => this.onArticleClick(firstArticle)}>
                    <View className='first-article-title'>{firstArticle.title}</View>
                </TopCover>
                {this.state.articleList.slice(1).map((item, index) => {
                    return <View className='article' key={item.id} style={index === 0 ? { marginTop: '35rpx' } : null} onClick={() => this.onArticleClick(item)}>
                        <View className='article-cover' style={index % 2 === 0 ? { backgroundImage: 'url("' + item.cover + '")', left: 0 } : { backgroundImage: 'url("' + item.cover + '")', right: 0 }} />
                        <View className='article-info' style={index % 2 === 0 ? { right: 0 } : { left: 0 }}>
                            <View className='title'>{item.title}</View>
                        </View>
                    </View>
                })}
            </ScrollView>
        </View>
    }

}
