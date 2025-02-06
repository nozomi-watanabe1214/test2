document.write("問１<br>");
document.write("ココカラ―――――――――<br>");
for(var star1=1;star1<=5;star1++){
    document.write("★");
}
document.write("<br>");
document.write("―――――――――ココマデ<br><br>");

document.write("問2<br>");
document.write("ココカラ―――――――――<br>");
for(var star2=1;star2<=2;star2++){
    for(var star3=1;star3<=3;star3++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("―――――――――ココマデ<br><br>");

document.write("問3<br>");
document.write("ココカラ―――――――――<br>");
for(var star4=1;star4<=2;star4++){
    for(var star5=1;star5<=5;star5++){
        document.write("☆");
    }
    document.write("<br>");
}
document.write("―――――――――ココマデ<br><br>");

document.write("問4<br>");
document.write("ココカラ―――――――――<br>");
for(var star6=1;star6<=4;star6++){
    for(var star7=1;star7<=5;star7++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("―――――――――ココマデ<br><br>");

document.write("問5<br>");
document.write("ココカラ―――――――――<br>");
for(var star8=1;star8<=4;star8++){
    for(var star9=1;star9<=3;star9++){
        document.write("★");
    }
document.write("<br>");
}
document.write("―――――――――ココマデ<br><br>");

document.write("問6<br>");
document.write("ココカラ―――――――――<br>");
for(var line1=1; line1<=3; line1++){
    for(var star10=1; star10<=3; star10++){
        if(star10 % 2==1){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("―――――――――ココマデ<br><br>")

document.write("問7<br>");
document.write("ココカラ―――――――――<br>");
for(var line2=1; line2<=4; line2++){
    for(var star11=1; star11<=5; star11++){
        if(star11 % 2==0){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
document.write("<br>");
}
document.write("―――――――――ココマデ<br><br>")

document.write("問8<br>");
document.write("ココカラ―――――――――<br>");
for(var line3=1; line3<=5; line3++){
    for(var star12=1; star12<=line3; star12++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("―――――――――ココマデ")

