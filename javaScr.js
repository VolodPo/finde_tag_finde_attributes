
  //ЗАВДАННЯ 1. Отримати всі теги і порахувати їх кількість.
var dfg= "fsdgd dfghfg"
var str="!--...--,!DOCTYPE,a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hr,html,i,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,meta,meter,nav,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,ruby,rb,rt,rtc,rp,s,samp,script,section,select,small,source,span,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr";

var arr=str.split(",");
var tag={};
arr.forEach(function(item){	
	var sumTag=document.getElementsByTagName(item).length;	
	if(!!sumTag) {
		tag[item]=sumTag;		
	}
});

	console.log(tag);




// //ЗАВДАННЯ 2. Порахувати атрибути в html
// var arrAttr=[];
// var arr=[];
// var obj={};

// var sumTag=document.getElementsByTagName("*")//Отримую колекцію тегів
// 	for(var teg of sumTag){//Перебираю теги
// 		var sumAttr = teg.attributes;//отримав колекції з атрибутів						
// 		if(!!sumAttr.length){//перевірка на нульову довжину колекції
// 			for(var atr of sumAttr) {//перебираю кожну колекцію атрибутів
// 				arrAttr.push(atr.localName);//добавляю всі атрибути в масив
// 			};			
// 		};			
// 	};	
	
// 	for (var i = 0; i < arrAttr.length; i++) {
// 		var attr=arrAttr[i];
// 		if(!obj[attr]){
// 			obj[attr]=0;
// 		};
// 		obj[attr]+=1;		
// 	};
// 	console.log("Загальна кількість атрибутів: ", arrAttr.length);
// 	console.log("Атрибути по видам: ",obj);