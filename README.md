# bvh to VRMA - 7 languages
Modified to support 7 languages.(English, Russian, Spanish, Thai, Chinese, Korean, Japanese)  
This repository contains a web application that converts BVH files into VRM animation files.  
7言語に対応しました。  
このリポジトリは bvh ファイルを VRMアニメーション ファイルに変換する web アプリケーションのリポジトリです。

# Language Switching Instructions

The default language is English.  
## Append ?l=xx to the end of the URL
(where xx is: English = en, Russian = ru, Spanish = es, Thai = th, Chinese = cn, Korean = kr, Japanese = jp)

## Click the button for your preferred language
Language selection is available after the page is displayed.

# Web application. Run in web bowser
The web application is available at vr180g.com  
vr180g.com でウェブアプリを公開しています。  
English https://vr180g.com/bvh2vrma-7lang?l=en  
Русский https://vr180g.com/bvh2vrma-7lang?l=ru  
Español https://vr180g.com/bvh2vrma-7lang?l=es  
ภาษาไทย https://vr180g.com/bvh2vrma-7lang?l=th  
中文 https://vr180g.com/bvh2vrma-7lang?l=cn  
한국어 https://vr180g.com/bvh2vrma-7lang?l=kr  
日本語 https://vr180g.com/bvh2vrma-7lang?l=jp  

# Where is VRMA used?
R800ZZ WebXR VRM Viewer
https://www.youtube.com/watch?v=WSahXLS94Cs  
https://vr180g.com/viewer/viewer.php?l=en  
R800ZZ WebXR VRM Viewer can load VRMA files.  
However, since it can also read BVH files directly, there's no need to convert them to VRMA.

# How can I generate a BVH file?
R800ZZ Motion Capture for PICO 4 Ultra / PICO 4  
https://www.youtube.com/watch?v=JLc6bQfha5c  
https://vr180g.com/pico/motioncapture.php?l=en  

# Development

This is a Next.js project developed on Node.js.  
The project is primarily written in TypeScript.  
If you're unfamiliar with Next.js, some behaviors may be confusing.  
It is recommended to use "yarn dev" during development and run "yarn export" only at the very end.  

## Initial setup (installing dependencies)
```
git clone https://github.com/vrm-c/bvh2vrma-7lang
yarn install
```

## Start development server
```
yarn dev
```
Open `http://localhost:3000` in your browser

## Builds index.html
```
yarn build
yarn export
```
Outputs to the "out" directory.

# VRM Animation(Motion)

VRM Animation is a glTF extension for describing animations targeting humanoid models defined by the VRM specification.
VRMアニメーションは、VRMで定義された人型モデルに対するアニメーションを記述するための glTF 拡張です。
Detail [Webサイト](https://vrm.dev/vrma/)
https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm_animation-1.0/README.ja.md

# License

- [MIT License](./LICENSE.txt)
