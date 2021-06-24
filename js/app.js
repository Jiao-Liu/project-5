baguetteBox.run(".grid");


document.getElementById('search').addEventListener("keyup", myFunction)

function myFunction(){
 
    var text = document.getElementById("search").value.toLowerCase();
    var imglist = document.getElementsByTagName('img');
   

    for ( let i = 0; i< imglist.length; i++ ) {
       var dataCaption = document.getElementsByTagName('a')[i].getAttribute('data-caption')
    
        if (dataCaption.toLowerCase().indexOf(text) > -1) {
            imglist[i].style.display = '';
        } else {
            imglist[i].style.display = 'none';
        }
    }
}

