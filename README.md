# bvh to VRMA
This repository contains a web application that converts BVH files into VRM animation files.　　
このリポジトリは bvh ファイルを VRMアニメーション ファイルに変換する web アプリケーションのリポジトリです。

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

# How can I generate a BVH file?
R800ZZ Motion Capture for PICO 4 Ultra / PICO 4  
https://www.youtube.com/watch?v=JLc6bQfha5c  
https://vr180g.com/pico/motioncapture.php?l=en  

# Develop

```
git clone https://github.com/vrm-c/bvh2vrma-7lang
```

```
yarn install && yarn dev
```
Open http://localhost:3000 in your browser

# VRM Animation(Motion)

VRM Animation is a glTF extension for describing animations targeting humanoid models defined by the VRM specification.
VRMアニメーションは、VRMで定義された人型モデルに対するアニメーションを記述するための glTF 拡張です。
Detail [Webサイト](https://vrm.dev/vrma/)
https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm_animation-1.0/README.ja.md

# License

- [MIT License](./LICENSE.txt)
