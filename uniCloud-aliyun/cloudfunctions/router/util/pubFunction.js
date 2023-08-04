/**
 * 自定义公共函数包
 * 这里可以写你自己的公共函数
 */
var pubFun = {};
/**
 * 公共函数写法示例
 * 调用示例：
 * pubFun.test();
 * 或
 * vk.myfn.test();
 */
pubFun.test = function(path) {
	// 此处可以直接使用 vk 实例
	let timeStr = vk.pubfn.timeFormat(new Date(), "yyyy-MM-dd hh:mm:ss");
	// 逻辑
	// ...
	// 逻辑	
	return {
		timeStr,
		msg: "这是公共函数test的返回"
	}
}


module.exports = pubFun;
