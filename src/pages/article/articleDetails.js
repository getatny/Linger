import { ScrollView, View, RichText, Image } from "@tarojs/components";
import Taro, { Component } from '@tarojs/taro';
import { useSelector } from '@tarojs/redux';
import './articleDetails.less';
import CIcon from "../../components/cIcon/cIcon";
import TitleBar from "../../components/titleBar/titleBar";
import Divider from '../../static/img/divider.png'

export default class ArticleDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            basicArticleInfo: null,
            showContent: false,
            pageScrollTop: null,
            articleInfo: {
                author: 'Matthew Wang',
                createTime: '2019-11-20',
                content: '<p>大学同学S一毕业就结婚了，婚后不久怀了孕。本来她想等孩子满一周岁就出来工作，可是她身体底子太差，生孩子时落下一身病。老公体贴她，让她安心在家照顾孩子，不用考虑挣钱，他一个人能养家。</p>\n' +
                    '<p> </p>\n' +
                    '<p>从此，S便一心一意在家做全职太太，再不考虑上班的事。几年后，S又生了一个二胎，更不想出来工作了。</p>\n' +
                    '<p> </p>\n' +
                    '<p>两个孩子都上了学，S有了大把休闲的时间。她经常在朋友圈晒照片，美食，旅游，帅气的老公和两个儿子，还有宽敞明亮的家，让我们这些苦哈哈的上班族羡慕得红了眼。我偶尔和她聊天，夸奖她老公能干，一个人能养四个人，还把日子过得那么滋润。S总是表现得不以为然：“男人嘛，挣钱养家是应该的。”</p>\n' +
                    '<p> </p>\n' +
                    '<p>哪有什么岁月静好，不过是有人替你负重前行</p>\n' +
                    '<p> </p>\n' +
                    '<p>当初体质虚弱的S，经过这么多年的调养，已是珠圆玉润，看着比同龄人年轻很多。她时常在朋友圈发一些文字，大多是“岁月静好，现世安稳”之类的内容。她微信上的名字干脆就叫“岁月静好”，我常常加班到深夜刷朋友圈时，一低头看到她的头像就忍不住心生悲凉——-同学不同命，人与人之间的差距怎么会那么大？</p>\n' +
                    '<p> </p>\n' +
                    '<p>春节刚过，公司要举办一个大的商务活动，我负责采购红酒。记得S的老公就是红酒经销商，于是给她打了一个电话，要了他老公手机号。</p>\n' +
                    '<p> </p>\n' +
                    '<p>电话接通，S的老公听我说明来意，很是兴奋。他说去年和我们老总推销过他经销的红酒，但是没有签成，这次希望我能在老总面前多美言，促成这个大订单。</p>\n' +
                    '<p> </p>\n' +
                    '<p>我们约好时间，让他送几个样品过来供我们挑选，当然，最后签单还是要老总定夺。</p>\n' +
                    '<p> </p>\n' +
                    '<p>S的老公把红酒样品送来时，老总正好在市里开会，让我们把红酒拿过去，等散了会一起去饭店吃饭。</p>\n' +
                    '<p>很快到了老总开会的地点，老总说马上出来，让我们在车里等他一会儿。</p>\n' +
                    '<p> </p>\n' +
                    '<p>S的老公执意不肯在车上等，他说这样不礼貌，就站在车旁等着。北方二月里的天，和冬天差不了多少，温度还很低。我怕冷不愿下车，就在车上坐着。料峭的寒风里，S的老公西装笔挺地站在外面。他和我只隔着一层车窗玻璃，脸上冻得起了一层鸡皮疙瘩都看得清清楚楚。他带着谦卑的笑容，专注地看着会议厅门口方向。</p>\n' +
                    '<p> </p>\n' +
                    '<p>等了二十多分钟，我们老总终于出来了。S的老公赶紧抢步迎上去握手，我也下了车。我们老总握了一下他的手，有点吃惊：“你的手怎么那么凉，没在车里等我吗？”S的老公连连说：“没关系，没关系，车里太闷，正好透透气。”</p>\n' +
                    '<p> </p>\n' +
                    '<p>我们一起去饭店吃饭，品酒。</p>\n' +
                    '<p> </p>\n' +
                    '<p>酒桌上，为了表示诚意，S的老公一杯接着一杯地干，把我看得心惊肉跳。我劝他少喝点，酒喝多了对身体不好。他笑，没事，已经习惯了，经常这样喝。我这个老板说得好听叫“总”，其实就是销售员，不喝酒怎么卖酒？</p>\n' +
                    '<p> </p>\n' +
                    '<p>中途的时候，S的老公说去一下洗手间，我看他脸色十分难看，就追了出去。洗手间门口，一股刺鼻的酒味迎面而来，S的老公弯着腰在洗手池那吐，表情痛苦不堪。他看到我，强颜笑了笑，继续吐。</p>\n' +
                    '<p> </p>\n' +
                    '<p>我默默退到门口等他。想起S秀的那些幸福，不由苦笑。她一定不知道自己老公的工作会如此辛苦，那些光鲜背后，就像他穿着单薄的春装站在寒风中等客户一样，不过是咬紧了牙关的支撑。</p>\n' +
                    '<p> </p>\n' +
                    '<p>青春年少时，我并不曾懂得自己那些快意活法，都是来自父母的躬身托起。我迷席慕蓉的诗，做琼瑶的粉，为赋新词强说愁，唯独没想过父母的辛苦和劳累。</p>\n' +
                    '<p> </p>\n' +
                    '<p>婚前，我甚至在家里没有洗过衣服，更没洗过碗，婚后也整天在父母那蹭吃蹭喝，吃完抹嘴就走。曾经有年轻的同事看到我的手，无不艳羡地说，姐姐三十几岁人的手，竟如同婴儿般柔软白皙。我洋洋得意，自诩丽质天生。</p>\n' +
                    '<p> </p>\n' +
                    '<p>记得那一天，妈妈手上的戒指摘不下来，让我帮忙。摸着妈妈的手，感觉那么那粗糙那么僵硬，心口不由一紧。低头看时，发现指尖全是裂口。大的裂口上，贴着医用胶布；小的裂口，一个个张着嘴，仿佛诉说着经年的辛劳。</p>\n' +
                    '<p> </p>\n' +
                    '<p>我满心愧疚与感动。妈妈这双粗糙的手，为我承担了太多的累，我却一直以为那是天经地义。</p>\n' +
                    '<p> </p>\n' +
                    '<p>众生皆苦，没有人会被命运额外眷顾。如果你活得格外轻松顺遂，一定是有人替你承担了你该承担的重量。</p>\n' +
                    '<p> </p>\n' +
                    '<p>那个替你负重前行的人，就是这个世界上最爱你的人，他（她）总是怕你太累，而把最多的重量放在自己肩上。如果一个人对你好，绝对是命运的恩赐，而不是理所应当。哪怕是夫妻，哪怕是父母。</p>\n' +
                    '<p> </p>\n' +
                    '<p>你要学会珍惜那个人。</p>\n' +
                    '<p> </p>\n' +
                    '<p>Author 苏心，70后女子，专栏作者，流行期刊写手，新媒体编辑。曾经驰骋职场，如今只爱文字，追逐向阳花般的日子。关于职场，关于生活，关于婚姻，关于女人，我手写我心。</p>'
            }
        }
    }

    pageScroll = 0

    componentWillMount() {
        const params = this.$router.params
        this.setState({
            basicArticleInfo: params
        })
    }

    onReadMoreButtonClick = async () => {
        this.setState({ showContent: true })
        await Taro.setNavigationBarColor({ frontColor: '#000000', backgroundColor: '#ffffff' })
    }

    onBackToButtonClick = async () => {
        if (this.pageScroll === 0) {
            this.setState({ showContent: false })
            await Taro.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#000000' })
        } else {
            this.setState({ pageScrollTop: 0 }, () => {
                this.setState({ pageScrollTop: null })
            })
        }
    }

    onArticlePageScroll = (event) => {
        this.pageScroll = event.detail.scrollTop
    }

    render() {
        const { title, cover } = this.state.basicArticleInfo || {}
        const article = this.state.articleInfo || {}
        const customBar = useSelector(state => state.system.customBar)

        return <View className='article-details-page'>
            <TitleBar isBack black={this.state.showContent} />
            <View className='article-cover' style={{ backgroundImage: 'url("' + cover + '")' }}>
                <View className='cover-info'>
                    <View className='cover-title'>{title}</View>
                    <View className='cover-info-details'>
                        <View className='cover-author'>
                            <CIcon icon='account' />{article.author}
                        </View>
                        <View className='cover-time'>
                            <CIcon icon='clock' />{article.createTime}
                        </View>
                    </View>
                    <View className='cover-description'>{article.content.replace(/<\/?.+?>/g, '').substring(0, 120)}...</View>
                    <View className='cover-read-more' onClick={this.onReadMoreButtonClick}><CIcon icon='shanghua' /></View>
                </View>
            </View>
            <ScrollView scrollY enableBackToTop scrollWithAnimation scrollTop={this.state.pageScrollTop} onScroll={this.onArticlePageScroll} className={`article-main-content ${this.state.showContent ? 'show' : 'false'}`}>
                <View style={{ padding: customBar + 'px 50rpx 50rpx' }}>
                    <View className='content-title'>{title}</View>
                    <Image src={Divider} mode='aspectFit' className='divider' />
                    <RichText className='content-full' nodes={article.content} />
                </View>
                <View className='flow-menu favorite'><CIcon icon='favorites' /></View>
                <View className='flow-menu back-to' onClick={this.onBackToButtonClick}><CIcon icon='back' style={{ transform: 'rotate(90deg)' }} /></View>
            </ScrollView>
        </View>
    }

}
