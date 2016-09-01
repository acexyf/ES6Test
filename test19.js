
// var temp=[1, 4, -5, 10].find((a,b,c) => a >30);
// console.log(temp);


var str = '<td height="20" ><input type="text" ><div align="left"><span class="STYLE1"><b>准考证号:</b>2011241204<b>姓名:</b>李四</span></div></td>';
str = str.replace(/<[^>]*?>(.*?)/gi,'$1'); //删除左部
str = str.replace(/(.*?)<\/[^>]*?>/gi,'$1');  //删除右部
console.log(str);
