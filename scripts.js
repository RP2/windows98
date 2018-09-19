// portfolio script
let finder = document.getElementById("finder"); // finder shortcut
let project = document.getElementById("project-finder"); // project shortcut
select(); // call select
    function select() {
        let margin = { //sets random values to margin
            top: Math.floor(Math.random() * 200) + 10 + 'px',
            left: Math.floor(Math.random() * 200) + 20 + 'px',
        }
        finder.style.top = margin.top; //sets position on load
        finder.style.left = margin.left;
        $("#file-portfolio").on("click", e => { //single click select
            $("#file-portfolio").addClass("selected");
            e.stopPropagation()
        });
        $(document).on("click", e => { //single click deselect
            if ($(e.target).is("#icon-portfolio") === false) {
                $("#file-portfolio").removeClass("selected");
            }
        });
        $("#file-portfolio").on("dblclick", e => { //on double click show finder
            finder.style.display = "flex";
        })
        $("#finder-close").on("click", e => { //on double click show finder
            let margin = { //sets random values to margin
                top: Math.floor(Math.random() * 200) + 10 + 'px',
                left: Math.floor(Math.random() * 200) + 20 + 'px',
            }
            finder.style.top = margin.top; // resets position when closed
            finder.style.left = margin.left;
            finder.style.display = "none";
        });
        $("#project-close").on("click", e => { //on double click show finder
            let margin = { //sets random values to margin
                top: Math.floor(Math.random() * 200) + 10 + 'px',
                left: Math.floor(Math.random() * 200) + 20 + 'px',
            }
            project.style.top = margin.top; // resets position when closed
            project.style.left = margin.left;
            project.style.display = "none";
        });
    } // end of select

    function projectOpen(event){  // on double click populate project div
        let margin = { //sets random values to margin
            top: Math.floor(Math.random() * 200) + 10 + 'px',
            left: Math.floor(Math.random() * 200) + 20 + 'px',
        }
        project.style.top = margin.top; // resets position when closed
        project.style.left = margin.left;
        project.style.display = "none";
        if (event.id === "file1"){ // depending on which file clicked
            $("#project-name").empty().append(`${event.id}`) //empty then append file name
            $("#project-content").empty().append(` 
            <div id="links">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RP2/musicdiscovery" title="click_here">>github</a>
            <a target="_blank" rel="noopener noreferrer" href="https://ga-md.herokuapp.com/" title="click_here">>live_site</a>
            </div>
            <img src="./images/discovermusic.jpg" alt="file1">
            `); // empty then append links and picture
        } else if (event.id === "file2") { 
            $("#project-name").empty().append(`${event.id}`)
            $("#project-content").empty().append(` 
            <div id="links">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RP2/WayfarerProject" title="click_here">>github</a>
            </div>
            <img src="./images/wayfarer.jpg" alt="file2">
            `); // empty then append links and picture
        } else if (event.id === "file3") {
            $("#project-name").empty().append(`${event.id}`)
            $("#project-content").empty().append(` 
            <div id="links">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RP2/fitness-app" title="click_here">>github</a>
            </div>
            <p>no pictures yet :(</p>
            `); // empty then append links and picture
        } else if (event.id === "file4") {
            $("#project-name").empty().append(`${event.id}`)
            $("#project-content").empty().append(` 
            <div id="links">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RP2/exBook" title="click_here">>github</a>
            <a target="_blank" rel="noopener noreferrer" href="https://exbook.herokuapp.com/" title="click_here">>live_site</a>
            </div>
            <img src="./images/exbook.jpg" alt="file4">
            `); // empty then append links and picture
        } else if (event.id === "about") { // About
            $("#project-name").empty().append(`<p>About_Me</p>`)
            $("#project-content").empty().append(`<p>Hello, my name is Riley...</p>
            <p>Having a diverse skill set is important to me, which is why I went to school for Communication Design as well as attended General Assembly to learn the back end. I hope to continue to learn throughout my career and widen my skills. I was the lead designer in two games and a member of a third at university. I also enjoy working in teams and collaborating with others.</p>`);
        } else { //err catch
            $("#project-name").empty();
            $("#project-content").empty();
        }
        project.style.display = "flex"; //shows div
    } //end of projectOpen

dragElement(document.getElementById("finder")); //object shortcuts
dragElement(document.getElementById("project-finder"));

    function dragElement(element) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(element.id + "-nav")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(element.id + "-nav").onmousedown = dragMouseDown;
        } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
} // end of drag element