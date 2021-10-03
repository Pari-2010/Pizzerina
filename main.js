menu_list_array = ["Veg Margherita Pizza", "Unthinkable Pizza", "Farmhouse Pizza", "Peppy Paneer Pizza", "Veggie Paradise Pizza", "Moroccan Spice Pasta Pizza", 
"];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        
}

function add_top(){
var htmldata;
var item=document.getElementById("add_item").value;
       
        htmldata="menu_list_array.sort();"
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_item{
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
