menu_list_array = ["Veg Margherita Pizza","Pepperoni Pizza"," Hawaiian Pizza","Paneer Special Pizza"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        } 
        htmldata=htmldata+"</ol>"
        document.getElementById("display_menu   ").innerHTML = htmldata;
        
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class= 'cards'> "
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<div class="card">' + '<img src="https://www.kitchentreaty.com/wp-content/uploads/2017/02/how-to-make-heart-shaped-pizzas-featured-420x500.jpg/>"' + menu_list_array[i] + '</div>' ;
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
