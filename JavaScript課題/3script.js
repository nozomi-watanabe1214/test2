document.write("■■■問1■■■<br>")
function menseki(hankei){
    return hankei*hankei*3.14+"㎠";
}
document.write(menseki(5)+"<br>");
document.write(menseki(7)+"<br>");
document.write(menseki(10)+"<br>");

document.write("<br>")

document.write("■■■問2■■■<br>")
function tanoshii(group, otona,kodomo){
    return group + "グループの合計金額は" + (500*otona)+(200*kodomo)+"円です。<br>";
}
document.write(tanoshii("A", 2,4));
document.write(tanoshii("B", 1,5));
document.write(tanoshii("C", 3,7));






document.write("問6<br>")
document.write("ココカラ―――――――――<br>")
for(var star10=0;star10<3;star10++){
    for(var star11=0;star11<3;star11++){
        if(star11 % 2==0){
            document.write("★");}
        else{
            document.write("☆");}
    }
    document.write("<br>");
}
document.write("―――――――――ココマデ<br><br>")