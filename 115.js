var user = prompt("剪刀、石頭、布");
var computer = Math.random();
if(computer<=0.33){
    computer= "剪刀";
}
else if (computer<=0.66){
    computer="石頭";
}
else{
    computer="布";
}
alert("拳王出拳" + computer);

if (user==computer){
    alert("你竟然跟拳王出一樣!!!");
}
    
else if (user == "剪刀"){
    if (computer == "石頭"){
        alert("哈哈我贏啦");
    }
    if (computer == "布"){
        alert("呵呵你贏了");
    }
    }
   else if (user == "石頭"){
    if (computer == "剪刀"){
        alert("噢我輸了");
  }
    if (computer == "布"){
        alert("哈哈聰明點好嗎");
    }
   }
    else if (user == "布"){
    if (computer == "剪刀"){
        alert("搖搖腦袋，聽到水聲了嗎");
  }
    if (computer == "石頭"){
        alert("我願賭服輸");
    }
    }