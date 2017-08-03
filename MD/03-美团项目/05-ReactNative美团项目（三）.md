# 美团项目（三）

## 1.实现附近界面

### 1.安装react-native-scrollable-tab-view

**第一种方法（>=0.44版本）：**

https://github.com/skv-headless/react-native-scrollable-tab-view

在控制台进入美团项目的根目录，执行：npm install react-native-scrollable-tab-view --save

![](1.png)

可以在项目的node_modules文件中查看是否引入成功(  下图是引入成功 )

![](2.png)

**第二种方法（<0.44版本）：**

1.下载该框架的源代码：

![](3.png)



2.下载0.6.1的版本

![](4.png)



### 2.引用react-native-scrollable-tab-view

![](5.png)



### 3.scrollable-tab-view的样式

![](6.png)

```
   				<ScrollableTabView
                    tabBarBackgroundColor='#F5FCFF'
                    tabBarActiveTextColor='#FF4645'
                    tabBarInactiveTextColor='gray'
                    tabBarUnderlineStyle={{backgroundColor:'#FF4645',height:1}}
                >
                    <Text tabLabel='享美食'>My</Text>
                    <Text tabLabel='住酒店'>favorite</Text>
                    <Text tabLabel='爱玩'>project</Text>
                    <Text tabLabel='全部'>project</Text>

                </ScrollableTabView>
```

1.tabBarUnderlineStyle(style) 

 设置DefaultTabBar和ScrollableTabBarTab选中时下方横线的颜 色。 

 2.tabBarBackgroundColor(String) 

 设置整个Tab这一栏的背景颜色 

 3.tabBarActiveTextColor(String) 

 设置选中Tab的文字颜色。 

4.tabBarInactiveTextColor(String) 

设置未选中Tab的文字颜色。 



执行效果：

![](7.png)

### 4.添加对应的Page

1.定义对应的Page组件

![](9.png)

2.应用对应的Page组件

![](10.png)

```
	 		<ScrollableTabView
                    tabBarBackgroundColor='#F5FCFF'
                    tabBarActiveTextColor='#FF4645'
                    tabBarInactiveTextColor='gray'
                    tabBarUnderlineStyle={{backgroundColor:'#FF4645',height:1}}
                >
                    <Food tabLabel='享美食'></Food>
                    <Hotel tabLabel='住酒店'></Hotel>
                    <Play tabLabel='爱玩'></Play>
                    <All tabLabel='全部'></All>

                </ScrollableTabView>
```

3.执行效果图



![](8.png)



### 5.实现Food中的列表

#### 1.开始网络请求获取数据

1.发起网络请求

```
http://47.93.30.78:8080/MeiTuan/near
```

![](11.png)

2.查看请求的数据

![](12.png)

#### 2.添加状态机保存数据

![](13.png)

#### 3.实现food组件

1.初始化ListView

![](14.png)

2.执行效果：

![](15.png)

#### 4.实现food组件的列表

##### **1.修改数据源**

![](16.png)

执行效果：

![](17.png)

##### **2.美食对应的Item布局（定义一个NearItem组件）**

![](19.png)

对应的样式

![](20.png)

##### 3.使用NearItem组件

![](26.png)

执行效果：

![](18.png)



##### **4.完善NearItem组件的样式**

**1.图片和布局居中**

![](21.png)

**2.实现右边的View布局**

![](22.png)

布局对应的样式

![](23.png)

**3.修改字体样式**

![](24.png)

**4.给标题添加标签**

![](25.png)

**5.设计点击事件**

![](27.png)

### 6.Food组件添加头

#### **1.添加头部布局**

![](28.png)

#### **2.头部布局实现函数**

![](29.png)

#### **3.头部布局的样式**

![](30.png)

#### **4.头部文字样式**

计算屏幕的宽度

![](31.png)

头部文字的样式

![](32.png)

#### **5.头部文字默认的选中第一个**

FF4346    white    gray

![](33.png)

执行效果：

![](34.png)



#### **6.实现其它的列表**

![](15.png)



#### **7.优化组件，并添加加载中的提示**

修改NearPage组件

![](36.png)

修改Food组件数据源初始化代码

![](37.png)

#### 8.处理头部的点击事件

![](64.png)



## 2.实现订单界面

### 1.数据的准备

#### 1.定义一个json文件

![](38.png)

#### 2.在OrderPage中引入json文件

![](39.png)

### 2.实现头部内容

#### 1.定义一个OrderItemView组件

![](40.png)

#### 2.引入OrderItemView组件

![](41.png)

#### 3.定义OrderItemBar组件

![](42.png)

#### 4.引用OrderItemBar组件

![](43.png)

#### 5.实现OrderItemBar布局

![](44.png)

对应的样式

![](46.png)

### 3.渲染最近订单内容

![](47.png)



### 3.渲染最近流浪内容

![](48.png)

### 4.设计点击事件

![](49.png)

执行效果：

![](50.png)





## 3.ScrollView的下拉刷新

### 1.添加下拉刷新监听事件

![](51.png)

### 2.加载网络数据



































```
http://47.93.30.78:8080/MeiTuan/order
```

![](52.png)

执行的效果

![](53.png)

## 4.打包发布

### 1.生成签名文件（meituan.jsk)

http://blog.csdn.net/developer_jiangqq/article/details/50525976/

1.点击Bulid选择Gererate Signed Apk 

![](56.png)

2.点击创建签名文件（Create new ...） 

![这里写图片描述](57.png) 

3.创建签名文件（meituan.jsk）

所有的密码都是：123456

![](54.png)

4.创建成功：

![](55.png)

5.附加说明：

![这里写图片描述](http://img.blog.csdn.net/20161119103558847)

### 2.将签名文件拷贝到Android项目

1.把刚刚生成的签名文件复制到项目android/app文件夹下面

![](58.png)

2.然后进行修改项目中**gradle.properties**文件，进行添加如下的代码(注意下面的签名和别名的名称和上一步放入的meituan.jks要一样，下面两项分别填写签名和别名的密码

```
MYAPP_RELEASE_STORE_FILE=meituan.jks
MYAPP_RELEASE_KEY_ALIAS=meituan
MYAPP_RELEASE_STORE_PASSWORD=123456
MYAPP_RELEASE_KEY_PASSWORD=123456
```

![](59.png)

3.给应用添加签名-配置局部应用Gradle文件

       直接在工程目录下得android/app/build.gradle中以下节点添加如下内容:

```
android {  
    ...  
    defaultConfig { ... }  
    signingConfigs {  
        release {  
             storeFile file(MYAPP_RELEASE_STORE_FILE)
             storePassword MYAPP_RELEASE_STORE_PASSWORD
             keyAlias MYAPP_RELEASE_KEY_ALIAS
             keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }  
    }  
    buildTypes {  
        release {  
            ...  
            signingConfig signingConfigs.release 
        }  
    }  
}  
```

![](60.png)

### 3.生成签名包

1.在控制台进入MeiTuan项目根目录 , 执行下面指令:cd android

![](62.png)

2.在Android目录下执行下面的指令：gradlew assembleRelease

![](61.png)

3.查看打包正式的apk

![](63.png)























































