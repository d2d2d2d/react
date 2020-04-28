## 내용요약
<pre>
[project-ex01]
ES6 for Reac


===========================
[project-ex02]
전통적인 DOM API 기반의 앱

npm init -y project menifest package.json 생성

===========================
[project-ex03]
파일 나눠서 작성해보기



===========================
[project-ex04]
ES6 모듈 지원 연습
module은 순서 바꿔도 됨 (독립적)
module: App.js, index.js


===========================
[project-ex05]
ES6 모듈 지원 기반으로 작성해보기

===========================
[project-ex05] 번들링 (build)

1. 프로젝트 생성 
    1.1 프로젝트 디렉토리 생성
    1.2 src, public 디렉토리 생성
2. 매니페스트(package.json) 초기화
    $ npm init -y

3. webpack 설치
    $ npm i -D webpack-cli webpack-dev-server
    $ npx webpack -v
4. webpack 설정(webpack.config.js)
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
}
5. npm scripting
  "script":{
    "build": "npx webpack",
    "start": "node webpack-dev-server"
  }

  6. React Refactoring
    -- react 라이브러리 패키지 설치
        $ npm i -D react react-dom
    -- index.js, App.js 코드 수정

7. 번들링
    -- Babel 설치
    $ npm i -D @babel/core @babel/preset-env @babel/present-react
    -- babel-loader 설정(webpack.config.js)
    -- babel 설정(babel.config.json)


=====================================================================
[project-ex07] 컴포넌트 구현 & 컴포넌트 속성 = create-react-app project-ex07

1. 프로젝트 생성 
    1.1 프로젝트 디렉토리 생성
    1.2 src, public 디렉토리 생성

2. 매니페스트(package.json) 초기화
    $ npm init -y

3. 패키지 설치 
    $ npm i -D webpack webpack-cli webpack-dev-server react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react

4. webpack 설정(webpack.config.js)
-----------------------------------------------
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
}
-----------------------------------------------

5. babel 설정(babel.config.json)
-----------------------------------------------
{
    "presets": [
        [
            "@babel/env",{
                "targets": {
                    "ie": "11",
                    "edge": "80",
                    "firefox": "73",
                    "chrome": "82",
                    "opera": "69",
                    "safari": "13"
                }
            }
        ],"@babel/preset-react"
    ]
}
-----------------------------------------------

6. npm scripting : package.json, scripts 섹션 수정
-----------------------------------------------
  "script":{
    "build": "npx webpack",
    "start": "node webpack-dev-server"
  }
-----------------------------------------------

7. 
<pre>