function darkMode(){
    document.body.classList.toggle('dark-mode-variables');
}

function DisplayNotesPanel(panelId) {
    var panel = document.getElementById(panelId);
    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
    } else {
        panel.classList.add('show');
    }
}

function DisplayUserUi(){
    var settings = document.querySelector('.bxs-cog');
    var profile = document.querySelector('.bxs-user-circle');
    if(settings.classList.contains('show') && profile.classList.contains('show')){
        settings.classList.remove('show')
        profile.classList.remove('show')
    }else{
        settings.classList.add('show')
        profile.classList.add('show')
    }
}