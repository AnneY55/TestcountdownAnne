jQuery(function($){
var launch = new Date(2021,3,22,17,30,0);
var Months = $('#Months');
var Days = $('#Days');
var Hours = $('#Hours');
var Minutes = $('#Minutes');
var Seconds = $('#Seconds');
setDate();
function setDate(){
    var now = new Date();
    var s = (launch.getTime() - now.getTime())/1000;
    var x = Math.floor(s/2628000);
    Months.html('<strong>'+x+'</strong>');
    s -=d*2628000 ;
    var d = Math.floor(s/86400);
    Days.html('<strong>'+d+'</strong>');
    s -= d*86400;
    var h = Math.floor(s/3600);
    Hours.html('<strong>'+h+'</strong>');
    s -= h*3600;
    var m = Math.floor(s/60);
    Minutes.html('<strong>'+m+'</strong>');
    s -= m*60;
    var s = Math.floor(s);
    Seconds.html('<strong>'+s+'</strong>');
    setTimeout(setDate,1000);

    }




});
/*countdownManager = {
    // Configuration
    targetTime: new Date('220-09-28 00:00:00'), // Date cible du compte à rebours (00:00:00)
    displayElement: { // Elements HTML où sont affichés les informations
        jour:  null,
        heures: null,
        minutes:  null,
        secondes:  null
    },
     
    // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
    init: function(){
        // Récupération des références vers les éléments pour l'affichage
        // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
        this.displayElement.day  = jQuery('#countdown_jour');
        this.displayElement.hour = jQuery('#countdown_heures');
        this.displayElement.min  = jQuery('#countdown_minutes');
        this.displayElement.sec  = jQuery('#countdown_secondes');
         
        // Lancement du compte à rebours
        this.tick(); // Premier tick tout de suite
        window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
    },
     
    // Met à jour le compte à rebours (tic d'horloge)
    tick: function(){
        // Instant présent
        var timeNow  = new Date();
         
        // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
        if( timeNow > this.targetTime ){
            timeNow = this.targetTime;
        }
         
        // Calcul du temps restant
        var diff = this.dateDiff(timeNow, this.targetTime);

         this.displayElement.day.text(  diff.day  );
        this.displayElement.hour.text( diff.hour );
        this.displayElement.min.text(  diff.min  );
        this.displayElement.sec.text(  diff.sec  );
    },
     
    // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
    dateDiff: function(date1, date2){
        var diff = {}                           // Initialisation du retour
        var tmp = date2 - date1;
 
        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes
        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes
        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures
        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;
 
        return diff;
    }
};
 
jQuery(function($){
    // Lancement du compte à rebours au chargement de la page
    countdownManager.init();
});//
