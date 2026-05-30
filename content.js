// Funktion, die den Button sucht und löscht
function killRobloxPlus() {
    // Findet den Link, der zu Roblox Plus führt
    const badLink = document.querySelector('a[href*="roblox.com/plus"]') || document.querySelector('a[href*="/plus"]');
    
    if (badLink) {
        // Findet das übergeordnete <li> Element des Links
        const liElement = badLink.closest('li');
        if (liElement) {
            liElement.remove();
            console.log("Roblox Plus erfolgreich blockiert!");
        }
    }
}

// Beobachter, der reagiert, sobald Roblox die Sidebar dynamisch nachlädt
const sidebarObserver = new MutationObserver((mutations) => {
    killRobloxPlus();
});

// Startet die Überwachung der Seite
sidebarObserver.observe(document.body, {
    childList: true,
    subtree: true
});

// Erster Aufruf, falls es schon geladen ist
killRobloxPlus();
