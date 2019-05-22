// Redefine path to base
var keyStorageAux = "auxBizagiAuthentication";//from submenu workportal ThemeBuilder
var keyRedirectUrl = "_redirectUrl_";
var session = window.sessionStorage.getItem("bizagiAuthentication") || window.sessionStorage.getItem(keyStorageAux) || "{}";

if (window.location.search && session == "{}") {
    if(window.sessionStorage.getItem(keyRedirectUrl) === null || window.sessionStorage.getItem(keyRedirectUrl) === "" || window.sessionStorage.getItem(keyRedirectUrl) === undefined){
        var mustSaveRedirectUrl = true;
        if (window.location.search.indexOf("syncToken") != -1)  // Identify redirect from oAuth ADFS, in this case this redirect uri must not be saved
        {
            mustSaveRedirectUrl = false;
        }
        if (mustSaveRedirectUrl){
            window.sessionStorage.setItem(keyRedirectUrl, window.location.search);
        }
    } 
}

if (window.sessionStorage.getItem(keyStorageAux)) {
    window.sessionStorage.removeItem(keyStorageAux);
}

var bizagiConcurrent;
try{ session = JSON.parse(session); } catch (e) { console.log(e); }


//communicates to parents who have access to the resource(WsFederatedAuthentication)
window.parent.postMessage("Access: true", "*");

// sometimes the load bizagi.loader.js?_4352 get HTTP error 302
if (typeof bizagi === "undefined") {
    window.location.reload();
}

if (session.isAuthenticate) {
    var redirectUrl = window.sessionStorage.getItem(keyRedirectUrl);
    if(redirectUrl) {
        window.location.href = "index.html" + redirectUrl;
        window.sessionStorage.removeItem(keyRedirectUrl);
    }
}

// Gets the loader instance, and load the module
var loader = bizagi.loader;
BIZAGI_PATH_TO_BASE = "./";

// add svg icons
var currentlyHTML = document.body.innerHTML;
// generated with genome project
function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}
var svgIcons16 = '<svg xmlns="http://www.w3.org/2000/svg" display="none" width="0" height="0" id="genome-icons"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#b7b7b7;}</style><style>.cls-1,.cls-2{fill:none;}.cls-1{clip-rule:evenodd;}.cls-3{fill:#b3b3b3;}.cls-4{fill:#ccc;}.cls-5{clip-path:url(#clip-path);}.cls-6{clip-path:url(#clip-path-2);}.cls-7{fill:#fff;}</style><clipPath id="icon-radiobutton-selected-disabled-clip-path"><path class="cls-1" d="M8.58,11.78l5.17-5.07a.75.75,0,0,1,1,0,.71.71,0,0,1,0,1l-5.7,5.57a.74.74,0,0,1-1,0L5.21,10.51a.72.72,0,0,1,0-1,.77.77,0,0,1,1,0Z"/></clipPath><clipPath id="icon-radiobutton-selected-disabled-clip-path-2"><rect class="cls-2" x="1" y="0.5" width="18" height="18"/></clipPath><style>.cls-1,.cls-2{fill:none;}.cls-1{clip-rule:evenodd;}.cls-3{fill:#028279;}.cls-4{fill:#3a9e97;}.cls-5{clip-path:url(#clip-path);}.cls-6{clip-path:url(#clip-path-2);}.cls-7{fill:#fff;}</style><clipPath id="icon-radiobutton-selected-clip-path"><path class="cls-1" d="M8.58,11.78l5.17-5.07a.75.75,0,0,1,1,0,.71.71,0,0,1,0,1l-5.7,5.57a.74.74,0,0,1-1,0L5.21,10.51a.72.72,0,0,1,0-1,.77.77,0,0,1,1,0Z"/></clipPath><clipPath id="icon-radiobutton-selected-clip-path-2"><rect class="cls-2" x="1" y="0.5" width="18" height="18"/></clipPath></defs><symbol viewBox="0 0 16 16" id="icon-anonymize"><path d="M16,5.5A12.54,12.54,0,0,0,15.91,4a.54.54,0,0,0-.15-.29l-.11-.1a.44.44,0,0,0-.28-.14A5,5,0,0,1,12.42,2,6.07,6.07,0,0,0,8.29,0H7.71A6.07,6.07,0,0,0,3.58,2,5,5,0,0,1,.63,3.45a.61.61,0,0,0-.3.15l-.09.09A.54.54,0,0,0,.09,4,12.54,12.54,0,0,0,0,5.5,10.33,10.33,0,0,0,3.17,13s0,.05.06.07A13.5,13.5,0,0,0,7.82,16L8,16l.18,0a13.5,13.5,0,0,0,4.59-2.9s.05,0,.06-.07A10.33,10.33,0,0,0,16,5.5ZM1.05,4.4A5.92,5.92,0,0,0,4.3,2.67,5.11,5.11,0,0,1,7.72,1h.55A5.09,5.09,0,0,1,11.7,2.67,5.92,5.92,0,0,0,15,4.4c0,.36.05.72.05,1.1a9.31,9.31,0,0,1-2.48,6.37,5.5,5.5,0,0,0-9,0A9.31,9.31,0,0,1,1,5.5C1,5.12,1,4.76,1.05,4.4ZM8,15a12.34,12.34,0,0,1-3.8-2.35,4.48,4.48,0,0,1,7.6,0A12.34,12.34,0,0,1,8,15Z"/><path d="M8,9A3,3,0,1,0,5,6,3,3,0,0,0,8,9ZM8,4A2,2,0,1,1,6,6,2,2,0,0,1,8,4Z"/></symbol><symbol viewBox="0 0 16 16" id="icon-arrow-down"><g id="icon-arrow-down-arrow-down-special"><path d="M8,10.5a.5.5,0,0,1-.35-.14l-4-4a.5.5,0,1,1,.71-.71L8,9.29l3.65-3.65a.51.51,0,0,1,.71,0A.5.5,0,0,1,12.5,6a.47.47,0,0,1-.14.35l-4,4A.5.5,0,0,1,8,10.5Z"/></g></symbol><symbol viewBox="0 0 16 16" id="icon-arrow-right"><g id="icon-arrow-right-arrow-right-special"><path d="M6,12.5a.5.5,0,0,1-.36-.14.51.51,0,0,1,0-.71L9.29,8,5.64,4.35a.52.52,0,0,1,0-.71.51.51,0,0,1,.71,0l4,4a.51.51,0,0,1,0,.7l-4,4A.47.47,0,0,1,6,12.5Z"/></g></symbol><symbol viewBox="0 0 16 16" id="icon-bizagi-lines"><g id="icon-bizagi-lines-bizagi-lines-16x"><path d="M13.74,4.46,8.24,1.38a.51.51,0,0,0-.48,0L2.26,4.46A.51.51,0,0,0,2,4.9v6.2a.51.51,0,0,0,.26.44l5.5,3.08a.51.51,0,0,0,.48,0l5.5-3.08A.51.51,0,0,0,14,11.1V4.9A.51.51,0,0,0,13.74,4.46ZM13,10.25,8.5,7.71v-5L13,5.19ZM7.5,7.14l-4-2.24,4-2.23ZM8,13.61l-5-2.8V5.75l9.48,5.35Z"/></g></symbol><symbol viewBox="0 0 16 16" id="icon-download-report-user"><path d="M15.91,4a.54.54,0,0,0-.15-.29l-.11-.1a.44.44,0,0,0-.28-.14A5,5,0,0,1,12.42,2,6.07,6.07,0,0,0,8.29,0H7.71A6.07,6.07,0,0,0,3.58,2,5,5,0,0,1,.63,3.45a.61.61,0,0,0-.3.15l-.09.09A.54.54,0,0,0,.09,4,12.54,12.54,0,0,0,0,5.5C0,11.05,4,14.55,7.82,16L8,16l.18,0C12,14.55,16,11.05,16,5.5A12.54,12.54,0,0,0,15.91,4ZM8,15c-3.42-1.34-7-4.5-7-9.46,0-.38,0-.74.05-1.1A5.92,5.92,0,0,0,4.3,2.67,5.11,5.11,0,0,1,7.72,1h.55A5.09,5.09,0,0,1,11.7,2.67,5.92,5.92,0,0,0,15,4.4c0,.36.05.72.05,1.1C15,10.46,11.42,13.62,8,15Z"/><path d="M7.65,9.85a.36.36,0,0,0,.16.11.47.47,0,0,0,.38,0h0a.53.53,0,0,0,.15-.11l2-2a.49.49,0,0,0-.7-.7L8.5,8.29V3.5a.5.5,0,0,0-1,0V8.29L6.35,7.15a.49.49,0,0,0-.7.7Z"/><path d="M10.5,11h-5a.5.5,0,0,0,0,1h5a.5.5,0,0,0,0-1Z"/></symbol><symbol viewBox="0 0 16 16" id="icon-email"><g id="icon-email-email-16x"><path d="M14.5,6a.5.5,0,0,0-.5.5v4.1c0,1.3-.1,1.4-.6,1.4H2.6c-.2,0-.6,0-.6-1.4V6.5A.5.5,0,0,0,1.5,6a.5.5,0,0,0-.5.5v4.1C1,11.2,1,13,2.6,13H13.4C15,13,15,11.7,15,10.6V6.5A.5.5,0,0,0,14.5,6Z"/><path d="M14.5,3H1.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.2.4l6.5,4h.6l6.5-4a.5.5,0,0,0,.2-.4v-1A.5.5,0,0,0,14.5,3ZM14,4.2,8,7.9,2,4.2V4H14Z"/></g></symbol><symbol viewBox="0 0 16 16" id="icon-fit-zoom"><path d="M14,0H2A2,2,0,0,0,0,2V14a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V2A2,2,0,0,0,14,0Zm1,14a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H14a1,1,0,0,1,1,1Z"/><path d="M4.21,3.5h1a.5.5,0,0,0,0-1H3a.41.41,0,0,0-.19,0,.51.51,0,0,0-.27.27A.41.41,0,0,0,2.5,3V5.25a.5.5,0,0,0,1,0v-1L5.65,6.35a.48.48,0,0,0,.7,0,.48.48,0,0,0,0-.7Z"/><path d="M13.19,2.54a.41.41,0,0,0-.19,0H10.75a.5.5,0,0,0,0,1h1L9.65,5.65a.48.48,0,0,0,0,.7.48.48,0,0,0,.7,0L12.5,4.21v1a.5.5,0,0,0,1,0V3a.41.41,0,0,0,0-.19A.51.51,0,0,0,13.19,2.54Z"/><path d="M5.65,9.65,3.5,11.79v-1a.5.5,0,0,0-1,0V13a.41.41,0,0,0,0,.19.51.51,0,0,0,.27.27.41.41,0,0,0,.19,0H5.25a.5.5,0,0,0,0-1h-1l2.14-2.15a.49.49,0,0,0-.7-.7Z"/><path d="M13,10.25a.5.5,0,0,0-.5.5v1L10.35,9.65a.49.49,0,0,0-.7.7l2.14,2.15h-1a.5.5,0,0,0,0,1H13a.41.41,0,0,0,.19,0,.51.51,0,0,0,.27-.27.41.41,0,0,0,0-.19V10.75A.5.5,0,0,0,13,10.25Z"/></symbol><symbol viewBox="0 0 16 16" id="icon-info"><path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,15a7,7,0,1,1,7-7A7,7,0,0,1,8,15Z"/><path d="M8,5.35a1,1,0,0,0,1-1,1,1,0,0,0-1.66-.69A1,1,0,0,0,7,4.38a.94.94,0,0,0,.29.69A.93.93,0,0,0,8,5.35Z"/><path d="M8.85,11.84a9.47,9.47,0,0,1,0-1.31V8.38c0-.59,0-1.21.08-1.87l-.15-.08a6.31,6.31,0,0,1-1.07.35A12.42,12.42,0,0,1,6.21,7v.48a2.27,2.27,0,0,1,.87.09.29.29,0,0,1,.08.16A21,21,0,0,1,7.22,10a14.27,14.27,0,0,1-.07,1.8A.28.28,0,0,1,7,12a3.35,3.35,0,0,1-.82.12v.47q.7,0,1.62,0c.7,0,1.36,0,2,0v-.5A2.6,2.6,0,0,1,9,12C8.9,12,8.87,11.92,8.85,11.84Z"/></symbol><symbol viewBox="0 0 16 16" id="icon-privacy"><path d="M8,16l-.18,0C4,14.55,0,11.05,0,5.5A12.54,12.54,0,0,1,.09,4a.54.54,0,0,1,.15-.29,1,1,0,0,1,.39-.24A4.91,4.91,0,0,0,3.58,2,6.11,6.11,0,0,1,7.71,0h.58a6.11,6.11,0,0,1,4.13,2,4.91,4.91,0,0,0,2.95,1.47.47.47,0,0,1,.28.14,1,1,0,0,1,.26.39A12.54,12.54,0,0,1,16,5.5c0,5.55-4,9.05-7.82,10.47ZM1.05,4.4C1,4.76,1,5.13,1,5.5c0,5,3.58,8.12,7,9.46,3.42-1.34,7-4.5,7-9.46,0-.37,0-.74-.05-1.1A5.86,5.86,0,0,1,11.7,2.67,5.09,5.09,0,0,0,8.27,1H7.72A5.11,5.11,0,0,0,4.3,2.67,5.86,5.86,0,0,1,1.05,4.4Z"/><path d="M8,13l-.18,0A7,7,0,0,1,3,6.5a7,7,0,0,1,.06-.93.47.47,0,0,1,.14-.3,1,1,0,0,1,.36-.2,2.77,2.77,0,0,0,1.65-.82A3.82,3.82,0,0,1,7.82,3h.36a3.82,3.82,0,0,1,2.61,1.25,2.77,2.77,0,0,0,1.65.82.56.56,0,0,1,.29.14.73.73,0,0,1,.21.36A7,7,0,0,1,13,6.5,7,7,0,0,1,8.18,13ZM4,6c0,.16,0,.33,0,.49A6,6,0,0,0,8,12,6,6,0,0,0,12,6.5c0-.16,0-.33,0-.49a3.8,3.8,0,0,1-1.91-1.07A2.84,2.84,0,0,0,8.16,4H7.83a2.86,2.86,0,0,0-1.9.94A3.8,3.8,0,0,1,4,6Z"/></symbol><symbol viewBox="0 0 16 16" id="icon-process"><g id="icon-process-process-16x"><path d="M12,11V8H8.5V6.83L10.83,4.5,8,1.67,5.17,4.5,7.5,6.83V8H4v3H1v4H7V11H5V9h6v2H9v4h6V11ZM8,3.09,9.41,4.5,8,5.91,6.59,4.5ZM6,12v2H2V12H6Zm8,2H10V12h4Z"/></g></symbol><symbol viewBox="0 0 20 20" id="icon-radiobuton-unselected"><circle class="cls-1" cx="10" cy="10" r="8.5"/><path class="cls-2" d="M10,2a8,8,0,1,1-8,8,8,8,0,0,1,8-8m0-1a9,9,0,1,0,9,9,9,9,0,0,0-9-9Z"/></symbol><symbol viewBox="0 0 20 20" id="icon-radiobutton-selected-disabled"><circle class="cls-3" cx="10" cy="10" r="8.5"/><path class="cls-4" d="M10,2a8,8,0,1,1-8,8,8,8,0,0,1,8-8m0-1a9,9,0,1,0,9,9,9,9,0,0,0-9-9Z"/><g class="cls-5"><g class="cls-6"><rect class="cls-7" y="1.5" width="20" height="17"/></g></g></symbol><symbol viewBox="0 0 20 20" id="icon-radiobutton-selected"><circle class="cls-3" cx="10" cy="10" r="8.5"/><path class="cls-4" d="M10,2a8,8,0,1,1-8,8,8,8,0,0,1,8-8m0-1a9,9,0,1,0,9,9,9,9,0,0,0-9-9Z"/><g class="cls-5"><g class="cls-6"><rect class="cls-7" y="1.5" width="20" height="17"/></g></g></symbol><symbol viewBox="0 0 16 16" id="icon-user"><g id="icon-user-user-16x"><path d="M8,8A2.5,2.5,0,0,1,5.5,5.5v-1a2.5,2.5,0,0,1,5,0v1A2.5,2.5,0,0,1,8,8ZM8,3A1.5,1.5,0,0,0,6.5,4.5v1a1.5,1.5,0,0,0,3,0v-1A1.5,1.5,0,0,0,8,3Z"/><path d="M12.94,14H3.06a1,1,0,0,1-.78-.37,1,1,0,0,1-.21-.84C2.53,10.6,5,9,8,9s5.47,1.6,5.93,3.79a1,1,0,0,1-.21.84A1,1,0,0,1,12.94,14ZM8,10c-2.46,0-4.59,1.29-4.95,3H13C12.59,11.29,10.46,10,8,10Z"/></g></symbol><symbol viewBox="0 0 16 16" id="icon-vocabulary"><g id="icon-vocabulary-vocabulary-16x"><path d="M2.23,5A.56.56,0,0,0,2.5,5a.49.49,0,0,0,.42-.24A6,6,0,0,1,12.47,4h-2a.5.5,0,0,0,0,1h3a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-1,0V3.12A7,7,0,0,0,2.08,4.27.5.5,0,0,0,2.23,5Z"/><path d="M13.75,11.08a.5.5,0,0,0-.69.15A6,6,0,0,1,3.53,12h2a.5.5,0,0,0,0-1h-3a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,1,0V12.88a7,7,0,0,0,10.9-1.11A.5.5,0,0,0,13.75,11.08Z"/><path d="M14.5,6H1.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-3A.5.5,0,0,0,14.5,6ZM14,9H2V7H14Z"/></g></symbol></svg>';
var svgIcons24 = '<svg xmlns="http://www.w3.org/2000/svg" display="none" width="0" height="0" id="genome-icons"><symbol viewBox="0 0 16 16" id="icon-go-to-activity">  <path d="M12.5,4h-9A1.5,1.5,0,0,0,2,5.5v9A1.5,1.5,0,0,0,3.5,16h9A1.5,1.5,0,0,0,14,14.5v-9A1.5,1.5,0,0,0,12.5,4Zm-9,1h9a.5.5,0,0,1,.5.5v5H11a.51.51,0,0,0-.45.28L10,12,7.43,7.74A.51.51,0,0,0,7,7.5a.53.53,0,0,0-.43.22L4.73,10.5H3v-5A.5.5,0,0,1,3.5,5Zm9,10h-9a.5.5,0,0,1-.5-.5v-3H5a.51.51,0,0,0,.42-.22L7,8.93l2.59,4.33a.51.51,0,0,0,.43.24h0a.5.5,0,0,0,.43-.28l.86-1.72H13v3A.5.5,0,0,1,12.5,15Z"/> <path d="M11.5,1H5V.5A.5.5,0,0,0,4.69,0a.48.48,0,0,0-.54.11l-1,1a.48.48,0,0,0,0,.7l1,1A.47.47,0,0,0,4.5,3a.43.43,0,0,0,.19,0A.5.5,0,0,0,5,2.5V2h6.5a.5.5,0,0,0,0-1Z"/> </symbol><symbol viewBox="0 0 16 16" id="icon-vocabulary"><g id="icon-vocabulary-vocabulary-16x"><path d="M2.23,5A.56.56,0,0,0,2.5,5a.49.49,0,0,0,.42-.24A6,6,0,0,1,12.47,4h-2a.5.5,0,0,0,0,1h3a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-1,0V3.12A7,7,0,0,0,2.08,4.27.5.5,0,0,0,2.23,5Z"/><path d="M13.75,11.08a.5.5,0,0,0-.69.15A6,6,0,0,1,3.53,12h2a.5.5,0,0,0,0-1h-3a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,1,0V12.88a7,7,0,0,0,10.9-1.11A.5.5,0,0,0,13.75,11.08Z"/><path d="M14.5,6H1.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-3A.5.5,0,0,0,14.5,6ZM14,9H2V7H14Z"/></g></symbol><symbol viewBox="0 0 24 24" id="icon-warning"><g id="icon-warning-warning-24x"><path d="M12,16a.5.5,0,0,1-.5-.5v-9a.5.5,0,0,1,1,0v9A.5.5,0,0,1,12,16Z"/><circle cx="12" cy="18.5" r="0.5"/><path d="M21.93,23H2.07a1.56,1.56,0,0,1-1.33-.75,1.65,1.65,0,0,1-.06-1.61L10.6,1.35a1.58,1.58,0,0,1,2.8,0l9.92,19.29a1.65,1.65,0,0,1-.06,1.61A1.56,1.56,0,0,1,21.93,23ZM12,1.5a.56.56,0,0,0-.51.3L1.57,21.09a.67.67,0,0,0,0,.63.56.56,0,0,0,.48.28H21.93a.56.56,0,0,0,.48-.28.67.67,0,0,0,0-.63L12.51,1.8A.56.56,0,0,0,12,1.5Z"/></g></symbol><symbol viewBox="0 0 24 24" id="transfer-permissions"><g id="transfer-permissions-user-delegate-24x"><path d="M7.17,7.66A2.57,2.57,0,0,1,4.61,5.09v-1a2.57,2.57,0,0,1,5.13,0v1A2.58,2.58,0,0,1,7.17,7.66Zm0-5.16A1.56,1.56,0,0,0,5.61,4.06v1a1.57,1.57,0,1,0,3.13,0v-1A1.57,1.57,0,0,0,7.17,2.5Z"/><path d="M6.66,13.87H2.07a1,1,0,0,1-1-1.23c.47-2.26,3-3.9,6.1-3.9a.5.5,0,0,1,0,1c-2.55,0-4.75,1.33-5.12,3.1l4.61,0a.5.5,0,0,1,.5.5A.51.51,0,0,1,6.66,13.87Z"/><path d="M10.21,15.87a.47.47,0,0,1-.35-.15.5.5,0,0,1,0-.71l1.64-1.64L9.86,11.72a.5.5,0,0,1,0-.71.5.5,0,0,1,.7,0l2,2a.5.5,0,0,1,0,.71l-2,2A.49.49,0,0,1,10.21,15.87Z"/><path d="M16.92,15.78a2.56,2.56,0,0,1-2.56-2.56v-1a2.57,2.57,0,0,1,5.13,0v1A2.57,2.57,0,0,1,16.92,15.78Zm0-5.16a1.56,1.56,0,0,0-1.56,1.56v1a1.57,1.57,0,0,0,3.13,0v-1A1.56,1.56,0,0,0,16.92,10.62Z"/><path d="M22,22H11.82a1,1,0,0,1-.8-.38,1,1,0,0,1-.2-.84c.47-2.27,3-3.91,6.1-3.91s5.64,1.64,6.11,3.91a1,1,0,0,1-.21.84A1,1,0,0,1,22,22Zm-5.11-4.13c-2.55,0-4.76,1.34-5.13,3.11L22,21h0C21.68,19.19,19.48,17.85,16.92,17.85Z"/></g></symbol></svg>';

removeElement(document.body.getElementsByTagName('svg'));
document.body.innerHTML = svgIcons16 + svgIcons24 + currentlyHTML;

/**
 *   this method start the maintenance windows
 * */
var maintenanceWindows = false;
bizagi.loader.startPageMaintenance = function () {
    if (!maintenanceWindows) {
        maintenanceWindows = true;
        loader.startAndThen("maintenance")
            .then(function () {
                var maintenance = new bizagi.maintenance.facade({
                    proxyPrefix: bizagiConfig.proxyPrefix || ""
                });
                maintenance.execute();
            })
    }
};



loader.nativeAjax(loader.getPathUrl(bizagiConfig.proxyPrefix + "Api/Authentication/BizagiConfig"), function (response) {
    var bizagiConfig = JSON.parse(response.responseText);
    if (bizagiConfig.redirectErrorPage) {
        window.location.href = bizagiConfig.redirectErrorPage;
        return;
    }

    /**
     * This key enable the analysis of invocations of multiaction service,
     * looking for a circular dependencies.
     *
     * @default By default the value depend of environment
     * @type {boolean}
     */
    bizagi.override.detectCircularDependencies = !bizagiConfig.isProduction;

    bizagiConfig.groupByCaseNumber = bizagiConfig.groupByCaseNumber;

    // Store configuration in session storage
    window.sessionStorage.setItem("BizagiConfiguration", response.responseText);

    if (bizagiConfig.code === "FED_AUTHENTICATION_ERROR") {
        window.top.document.location = bizagiConfig.message;
        return;
    }

    if (bizagiConfig.defaultLanguage) {
        bizagiConfig.defaultLanguage = bizagiConfig.defaultLanguage;
        bizagiConcurrent = bizagiConfig.isConcurrentSession;
    } else {
        if (bizagiConfig.code) {
            if (bizagiConfig.code === "AUTHENTICATION_ERROR") {
                window.location.href = "App/Inicio/UserNotValid.aspx";
            } else {
                alert(bizagiConfig.code + "\n" + bizagiConfig.message);
            }
        }
    }
    for (var k in bizagiConfig) { window.bizagiConfig[k] = bizagiConfig[k] };
}, function (response) {
    // Error callback
    if (response.status == 503)
        bizagiConfig.maintenanceWindows = true
    else
        window.alert("Something went wrong! " + response.responseURL + " " + response.responseText);
});

loader.preInit(["bizagiDefault", bizagiConfig.environment, undefined, "./"], [
    bizagiConfig.defaultLanguage || session.language || "en", bizagiConfig.log || false, bizagi.override.Inbox_RowsPerPage || "",
    [session.symbol || "$", session.decimalSeparator || ",", session.groupSeparator || ".", session.decimalDigits || "2"],
    [session.shortDateFormat || "dd/MM/yyyy", session.timeFormat || "H:mm", session.longDateFormat || "dddd, dd' de 'MMMM' de 'yyyy"],
    [session.uploadMaxFileSize || bizagiConfig.uploadMaxFileSize || "1048576"], "",
    "ASP.NET_SessionId"
]);

loader.init(function () {
    // Check if Bizagi its a oAuth server provider

    if (bizagiConfig.maintenanceWindows) {
        setTimeout(bizagi.loader.startPageMaintenance(), 50000);
    }
    else {
        var path = location.pathname.split("/");
        var urlParameters = bizagi.readQueryString();
        var oAuthRequest = (isLoginExternal(path) || (urlParameters.type && (urlParameters.type == "oauth2AsServer" || urlParameters.type == "oauth2AsBridge")));

        function isLoginExternal(path) {
            var _valueLogin = false;

            for (var i = 0; i < path.length; i++) {
                if (path[i] === "loginexternal.html") {
                    _valueLogin = true;
                }
            }
            return _valueLogin;
        };

        if (session.isAuthenticate == "true" && !oAuthRequest) {

            loader.nativeAjax(loader.getPathUrl(bizagiConfig.proxyPrefix + "Rest/Licenses"), function (response) {
                try {
                    var objectResponse = JSON.parse(response.response);
                    if (objectResponse.status === "error") {
                        errorLicenses = true;
                        window.location.href = "error.html?message=" + objectResponse.message + "&type=" + objectResponse.type;
                    }
                }
                catch (err) {
                }
            });

            BIZAGI_ENABLE_FLAT = true;//Flag to smartphone & tablet
            if (!bizagiConfig.themesEnabled) {
                var module = bizagi.detectDevice() !== "desktop" ? "workportalflat" : "workportal";
                loader.start(module).then(function () {

                    // Catch all XHR errors and show a generic Error Message Window
                    bizagi.showErrorAlertDialog = true;

                    $(document).ajaxError(function (event, jqXHR, ajaxSettings, thrownError) {
                        if (jqXHR.readyState === 0) return;
                        if (bizagi.showErrorAlertDialog &&
                            jqXHR.status != 401 && //Dont show message when authentication fails
                            jqXHR.status != 404) {//Dont show message on feature plans
                                
                            if (typeof thrownError == "object") {
                                bizagi.modalError.show(thrownError.message);
                            } else {
                                // Extract data from jqXHR object
                                try {
                                    var data = JSON.parse(jqXHR.responseText);
                                    if (data.message) {
                                        bizagi.modalError.show(thrownError + ": " + data.message);
                                    } else {
                                        bizagi.modalError.show(thrownError);
                                    }
                                } catch (e) {
                                    bizagi.modalError.show(thrownError);
                                }
                            }

                            bizagi.showErrorAlertDialog = true;
                        }

                    });

                    if (bizagiConfig.environment === "debug") {
                        var links = document.getElementsByTagName('link');
                        var typePattern = /^text\/(x-)?less$/;

                        less.sheets = [];

                        for (var i = 0; i < links.length; i++) {
                            if (links[i].rel === 'stylesheet/less' || (links[i].rel.match(/stylesheet/) &&
                                (links[i].type.match(typePattern)) || links[i].href.match(/less.css/))) {
                                less.sheets.push(links[i]);
                            }
                        }

                        less.refresh(true);
                    }

                    var workportal = window.bizagiWorkportal = new bizagi.workportal.facade({
                        proxyPrefix: bizagiConfig.proxyPrefix || ""
                    });

                    workportal.execute();

                    if (bizagiConcurrent === true) {
                        var validNavigation;
                        $(document).on('keydown keyup', function (e) {
                            if (e.which === 116 || e.which === 82 && e.ctrlKey) {
                                validNavigation = true;
                            }
                        });
                        $(window).on('beforeunload', function (e) {
                            if (!validNavigation && typeof $(e.target.activeElement).attr('class') == "undefined") {
                                workportal.dataService.logoutBeforeUnload();
                            }
                        });
                    }
                });
            }
            else {
                loader.start("theme.base").then(function () {
                    if (bizagiConfig.environment === "debug") {
                        var links = document.getElementsByTagName('link');
                        var typePattern = /^text\/(x-)?less$/;

                        less.sheets = [];

                        for (var i = 0; i < links.length; i++) {
                            if (links[i].rel === 'stylesheet/less' || (links[i].rel.match(/stylesheet/) &&
                                (links[i].type.match(typePattern)) || links[i].href.match(/less.css/))) {
                                less.sheets.push(links[i]);
                            }
                        }

                        less.refresh(true);
                    }

                    var workportal = window.bizagiWorkportal = new bizagi.workportal.facade({
                        proxyPrefix: bizagiConfig.proxyPrefix || ""
                    });

                    var desktopWorkportal = new bizagi.workportal.desktop.facade({
                        proxyPrefix: bizagiConfig.proxyPrefix || ""
                    });

                    var servicesPD = new bizagi.workportal.services.behaviors.projectDashboard(self.dataService);
                    servicesPD.setCustomizeTheme();
                });
            }
        } else {
            BIZAGI_ENABLE_FLAT = false;//Flag to load smartphone & tablet old device
            // Initialize login module
            /*if (window.self !== window.top) {
                window.top.document.location = window.self.location;
            }else {
    */
            var path = location.pathname.split("/");
            var loginModule = "";

            if (isLoginExternal(path)) {
                loginModule = "loginexternal";
            } else {
                loginModule = "login";
            }
            loader.start(loginModule).then(function () {
                // Get parameters for Oauth
                var oAuthParameters = {
                    type: urlParameters.type,
                    oAuth2InternalState: urlParameters.oAuth2InternalState,
                    syncToken: urlParameters.syncToken,
                    oauth2sso: urlParameters.oauth2sso
                };
                var login = new bizagi.login.facade({
                    proxyPrefix: bizagiConfig.proxyPrefix || "",
                    oAuthParameters: oAuthParameters
                });
                login.execute();
            });


            // }
        }
    }
});

