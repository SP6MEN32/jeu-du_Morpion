/*var grille = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
];


console.log( grille);*/


function generateTable(line, col){
    for (var i = 0; i < line; i++) {
        $("#vue").append("<tr></tr>");  
        for (var j = 0;j  < col; j++) {
        $("#vue tr:last-child").append('<td width="100" height="100">'+"&nbsp"+'</td>');
        }
    }
}
        var joueur_en_cours="p1";
        var premierJoueur="X";
        var secondJoueur="O";
        var compteur=0;
 
generateTable(3, 3);
    
    
    $('td').click(function(premierJoueur, secondJoueur){
      var intCase=$(this).html();
      console.log(intCase);
      if (intCase!="&nbsp;"){
        return;
      }
      else{
        compteur++ 
        if (compteur %2===0){ //second tour multiple de 2 pair
            joueur_en_cours="p2";
            var colonne=$(this).index();
            var ligne=$(this).parent().index();
            console.log(colonne+'/'+ligne);
            $(this).html("<img src=http://img.xooimage.com/files60/1/e/f/dyn003_original_1...2751d227-26b4025.gif>");
            }
        else{
        joueur_en_cours="p1";
        $(this).html("<img src=https://pic.chinesefontdesign.com/uploads/2013/09/y.gif>");
        }
      }  
    });

   



















