

let tip=prompt("Выберите тип сайта: \n 1 - Сайт визитка - 3000 р.; \n 2 - Многостраничный сайт - 20000 р.; \n 3 - Онлайн магазин - 50000 р.;",1);


let diz=prompt("Выберите дизаин сайта: \n 1 - Простой дизай - 1000 р.;\n 2 - Шаблонный дизай - 2000 р.; \n 3 - Уникальный дизаин - 20000 р.; ",1);


let ad=prompt("Выберите адаптивность сайта: \n 1 - Есть- 5000 р.; \n 2 - Нет - 1000 р.; ",1);


let site ={
            param1:[
[3000],[6],
[20000],[10],
[50000],[30]
],

 param2:[
[1000], [4],
[2000], [6],
[20000],[20]
],


param3:[
[5000], [6],
[1000], [2]
],
stoimoct(t,d,a){

st=parseInt(t)+parseInt(d)+parseInt(a);
return st;


},
srok(t1,d1,a1){

sr=parseInt(t1)+parseInt(d1)+parseInt(a1);
return sr;


}
              


};

let tips, tipv, dizs,dizv, ads, adv;



if (tip==="1"){
tips=site.param1[0];
tipv=site.param1[1];

}else if(tip==="2"){

tips=site.param1[2];
tipv=site.param1[3];


}else if(tip==="3"){

	tips=site.param1[4];
tipv=site.param1[5];
}else{

tips=site.param1[0];
tipv=site.param1[1];


}




if (diz==="1"){
dizs=site.param2[0];
dizv=site.param2[1];



}else if(diz==="2"){

dizs=site.param2[2];
dizv=site.param2[3];


}else if(diz==="3"){

	dizs=site.param2[4];
dizv=site.param2[5];



}else{

dizs=site.param2[0];
dizv=site.param2[1];


}


if (ad==="1"){
ads=site.param3[0];
adv=site.param3[1];



}else if(diz==="2"){

ads=site.param3[2];
adv=site.param3[3];


}else{

ads=site.param3[0];
adv=site.param3[1];


}

alert("Стоимость: "+site.stoimoct(tips,dizs,ads)+"р."+"\n"+"Срок: "+site.srok(tipv,dizv,adv)+" дней.");