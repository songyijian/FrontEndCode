一.css的权重：
	权重的规则：

	important > 内嵌样式 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符

	第一等：代表内联样式，如: style=""，权值为1000。
	第二等：代表ID选择器，如：#content，权值为100。
	第三等：代表类，伪类和属性选择器，如.content，权值为10。
	第四等：代表类型选择器和伪元素选择器，如div p，权值为1。

	/*权重为1*/
	div{
	}
	/*权重为10*/
	.class1{
	}
	/*权重为100*/
	#id1{
	}
	/*权重为100+1=101*/
	#id1 div{
	}
	/*权重为10+1=11*/
	.class1 div{
	}
	/*权重为10+10+1=21*/
	.class1 .class2 div{
	}
	/*权重为1000+100=1100*/
    
	#left{color:black!important;}        
	注意：
	1.如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现
	2.如果样式上加有!important标记,那么始终采用这个标记的样式。
