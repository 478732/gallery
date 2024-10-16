let widget = null

const interval = setInterval(tawkCallback, 1000);

function tawkCallback() {
    if (!widget) {
        widget = document.querySelector(".widget-visible");    
    } 
    else {
        clearInterval(interval);
        
        const iframe = widget.children[1]

        if(iframe) {
            const iframeHead = iframe.contentDocument.head;        
            const link = document.createElement("link");
    
            link.rel = "stylesheet";
            link.href = '/css/tawk.css';
            link.type = "text/css";
            
            iframeHead.appendChild(link);    
            iframe.style.boxShadow = "rgba(0, 18, 46, 0.16) 0px 8px 22px 0px";    
            iframe.style.borderRadius = "1rem";    
        }
    }    
}
