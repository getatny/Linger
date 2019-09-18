import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { connect, Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'
import './app.less'
import { setCustomBar, setStatusBar } from "./store/actions/system";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

@connect(({system}) => ({
    customBar: system.customBar,
    statusBar: system.statusBar
}), dispatch => ({
    onSetStatusBar(value) {
        dispatch(setStatusBar(value))
    },
    onSetCustomBar(value) {
        dispatch(setCustomBar(value))
    }
}))

class App extends Component {

    config = {
        pages: [
            'pages/index/index',
            'pages/article/article'
        ],
        window: {
            navigationStyle: 'custom',
            backgroundColor: '#fafafb',
            navigationBarTextStyle: 'white'
        },
        tabBar: {
            list: [
                {
                    pagePath: 'pages/index/index',
                    text: '音乐'
                },
                {
                    pagePath: 'pages/article/article',
                    text: '文章'
                }
            ]
        }
    }

    componentWillMount() {
        const systemInfo = Taro.getSystemInfoSync()
        // eslint-disable-next-line no-undef
        const custom = wx.getMenuButtonBoundingClientRect()
        const statusBar = systemInfo.statusBarHeight
        this.props.onSetStatusBar(statusBar)
        this.props.onSetCustomBar(custom.height + custom.top + (custom.top - statusBar))
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
