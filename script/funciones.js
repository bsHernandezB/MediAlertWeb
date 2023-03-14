function moveToPrincipal(){
    window.location = "Principal.html";
}

function moveToModificar(){
    window.location = "Modificar.html";
}

function moveToHistorial(){
    window.location = "Historial.html";
}

function moveToCrearAlarma(){
    window.location = "CrearAlarma.html";
}

function moveToIndex(){
    window.location = "index.html";
}

function deleteAlarm(){
    localStorage.clear();
    closeDialogDelete();
    location.reload();
}

function validateCreate(){
    var pos = localStorage['myKey'] || '0';

    if(pos == 0){
        var element = document.getElementById("createAlarm"); 
        element.style.display = "none";
    }
    else{
        var element = document.getElementById("createAlarm"); 
        element.style.display = "block";
    }
}

function cambiarkey(){
    localStorage['myKey'] = '1';
    moveToPrincipal();
}

function selectOptions(){
    var selector = document.getElementById("options");
    var sel = selector.value;

    if(sel == "0"){
        var element = document.getElementById("buttonExecute"); 
        element.style.display = "none";
        
        element = document.getElementById("textfieldHours"); 
        element.style.display = "none";
    }

    if(sel == "1" || sel == "2"){
        var element = document.getElementById("buttonExecute"); 
        element.style.display = "flex";
        
        element = document.getElementById("textfieldHours"); 
        element.style.display = "block";
    }

    if(sel == "3"){
        var element = document.getElementById("buttonExecute"); 
        element.style.display = "flex";

        element = document.getElementById("textfieldHours"); 
        element.style.display = "none";
    }
}

function modifyAlarms(){
    var selector = document.getElementById("options");
    var sel = selector.value;

    if(sel == "1" || sel == "2"){
        var check = document.getElementById("checkbox-1");
        check.checked = false;

        check = document.getElementById("checkbox-2");
        check.checked = false;

        check = document.getElementById("checkbox-3");
        check.checked = false;

        check = document.getElementById("checkbox-4");
        check.checked = false;

        check = document.getElementById("checkbox-5");
        check.checked = false;
    }

    if(sel == "3"){
        var trcheck = document.getElementById("trA1");
        var check = document.getElementById("checkbox-1");

        if(trcheck.style.display == "block"){
            if(check.checked){
                check.checked = false;
                trcheck.style.display = "none";
            }
        }

        trcheck = document.getElementById("trA2");
        check = document.getElementById("checkbox-2");

        if(trcheck.style.display == "block"){
            if(check.checked){
                check.checked = false;
                trcheck.style.display = "none";
            }
        }

        trcheck = document.getElementById("trA3");
        check = document.getElementById("checkbox-3");

        if(trcheck.style.display == "block"){
            if(check.checked){
                check.checked = false;
                trcheck.style.display = "none";
            }
        }

        trcheck = document.getElementById("trA4");
        check = document.getElementById("checkbox-4");

        if(trcheck.style.display == "block"){
            if(check.checked){
                check.checked = false;
                trcheck.style.display = "none";
            }
        }

        trcheck = document.getElementById("trA5");
        check = document.getElementById("checkbox-5");

        if(trcheck.style.display == "block"){
            if(check.checked){
                check.checked = false;
                trcheck.style.display = "none";
            }
        }
    }
}

function showDialogSounds(){
    var element = document.getElementById("dialogSounds");
    element.style.display = "block";
}

function closeDialogSounds(){
    var element = document.getElementById("dialogSounds");
    element.style.display = "none";
}

function showDialogDelete(){
    var element = document.getElementById("dialogDelete");
    element.style.display = "block";
}

function closeDialogDelete(){
    var element = document.getElementById("dialogDelete");
    element.style.display = "none";
}

function showDialogNotification(){
    var element = document.getElementById("dialogNotification");
    element.style.display = "block";
}

function showDialogQuestion(){
    var element = document.getElementById("dialogNotification");
    element.style.display = "none";

    element = document.getElementById("dialogQuestion");
    element.style.display = "block";
}

function closeDialogQuestion(){
    var element = document.getElementById("dialogQuestion");
    element.style.display = "none";
}

