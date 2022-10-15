sidepanel.innerHTML = "<h1>Orpheux</h1>"+
"<a><i class='m-i'>library_music</i> <p>Library</p></a>"+
"<a><i class='m-i'>search</i> <p>Explore</p></a>"+
"<a><i class='m-i'>settings</i> <p>Settings</p></a>"

var sidepanelbtns = sidepanel.getElementsByTagName("a")

for (let i = 0; i < sidepanelbtns.length; i++) {
    const element = sidepanelbtns[i];
    ButtonEvent(element, function(){
        var mainToSwitchTo
        switch (i) {
            case 0:
                mainToSwitchTo = "library"
                break
            case 1:
                mainToSwitchTo = "explore"
                break
            case 2:
                mainToSwitchTo = "settings"
                break
        }
        for (let i = 0; i < sidepanelbtns.length; i++) {
            sidepanelbtns[i].classList.remove("active")
            
        }
        element.classList.add("active")
        ShowMain(mainToSwitchTo)
    })
}