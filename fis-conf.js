// 加 md5
fis.match('*.{js,css,png}', {
    // useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

// fis.match('*.tpl', {
//   parser: fis.plugin('underscore') // js 压缩
// });

//npm install -g fis-parser-sass
//npm install -g fis-parser-underscore
// fis.match('**/*.scss', {
//     rExt: '.css', // from .scss to .css
//     parser: fis.plugin('sass')
// });

//调试目录
fis.media('fedev')
    .match('*.{js,css,png}', {
        useHash: true,
        useSprite: false,
        optimizer: null
    })
    .match('/test/**',{
        release:'/$0'
    })
    // .match('*.js', {
    //   domain: 'http://zt.emao.com'
    // })
    .match('/test/server.conf',{
        release:'/config/server.conf'
    });
//生产目录
fis.media('phpdev')
    .match('*.{js,css,png}', {
        useHash: true,
        useSprite: false,
        optimizer: null
    })
    // .match('html/**/(*)', {
    //     release: '../resources/views/bang/$1'
    // })
    .match('/*.html',{
        rExt: 'blade.php',
        isHtmlLike:true,
        release:'../resources/views/activity/$0'
    })
    .match('/js/**', {
        release: '/assets/activity/dfxtl/$0'
    })
    .match('css/**', {
        release: '/assets/activity/dfxtl/$0'
    })
    .match('/img/**', {
        release: '/assets/activity/dfxtl/$0'
    });
//bat文件不构建
fis.set('project.ignore', ['*.bat','fis-conf.js','*.sh']);
fis.set('project.charset', 'utf8');
//mock假数据模拟
// fis.match('/test/**', {
//   release: '$0'
// });

// fis.match('/test/server.conf', {
//   release: '/config/server.conf'
// });
