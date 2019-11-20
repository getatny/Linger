import { Image, ScrollView, View, Button } from "@tarojs/components"
import { connect } from "@tarojs/redux";
import Taro, { Component } from '@tarojs/taro'
import TitleBar from "../../components/titleBar/titleBar";
import TopCover from "../../components/topCover/topCover";
import defaultAvatar from '../../static/img/default-avatar.png'
import UserMenu from "../../components/userMenu/userMenu";
import './mine.less'
import { setUserInfo } from "../../store/actions/user";

const mineCover = 'https://www.getatny.com/wp-content/uploads/2019/09/mine-cover.jpg'
const favoriteMenus = [
    { id: 1, title: '喜欢的音乐', link: '', icon: 'favorite' },
    { id: 2, title: '喜欢的歌单', link: '', icon: 'similarproduct' },
    { id: 3, title: '喜欢的文章', link: '', icon: 'imagetext' },
]
const personalMenus = [
    { id: 1, title: '关于我们', link: '', icon: 'earth' },
    { id: 2, title: '意见反馈', link: '', icon: 'comments' },
    { id: 3, title: '清除缓存', link: '', icon: 'save' },
]

@connect(({user}) => ({
    userInfo: user
}), dispatch => ({
    onSetUserInfo(value) {
        dispatch(setUserInfo(value))
    }
}))

export default class Mine extends Component {

    onGetUserInfo = e => {
        this.props.onSetUserInfo(e.detail.userInfo)
    }

    render() {
        const userInfo = this.props.userInfo
        const avatar = userInfo.avatarUrl !== '' ? userInfo.avatarUrl : defaultAvatar
        const nickName = userInfo.nickName !== '' ? userInfo.nickName : '未登录'

        return <View className='mine-page'>
            <ScrollView scrollY className='main-content'>
                <TitleBar />
                <TopCover cover={mineCover} info>
                    <View className='user-profile'>
                        <Image className='avatar' mode='aspectFit' src={avatar} />
                        <View className='username'>{nickName}</View>
                    </View>
                </TopCover>
                <View className='favorite-menu'><UserMenu menus={favoriteMenus} /></View>
                <View className={['personal-menu', userInfo.nickName === '' ? 'mg-bt' : null].join(' ')}><UserMenu menus={personalMenus} /></View>
            </ScrollView>
            {userInfo.nickName === '' ? <Button className='login-button' openType='getUserInfo' onGetUserInfo={this.onGetUserInfo}>登录享受完整服务</Button> : null}
        </View>
    }

}
