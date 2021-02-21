// Event tag lightswitch
document.getElementById("nav-bar-lightswitch-image").addEventListener("click", function() {
    gtag('event', 'click', {
        'event_category': 'navigation',
        'event_label': 'ga_navbar_lightswitch_toggle'
    });
    console.log("Check")
});