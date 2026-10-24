
$(document).ready(function () {

    // 1. Show / hide instructions
    $("#instructionButton").click(function () {
        $("#instructions").toggle();
    });

    // 2. Slide effect for the event list
    $("#detailsButton").click(function () {
        $("#eventPanel").slideToggle(400);
    });

    // 3. Dynamically add an event to the list
    $("#addButton").click(function () {
        const selected = $("#eventChoice").val();

        if (!selected) {
            $("#feedback")
                .text("Select an event before adding it.")
                .hide()
                .fadeIn(300);
            return;
        }

        $("<li>")
            .text(selected + " — Added")
            .appendTo("#eventList");

        $("#feedback")
            .text("The event was added to your list.")
            .hide()
            .fadeIn(400);
    });

    // 4. Mouse events and jQuery selectors
    $("#eventHeading").mouseover(function () {
        $(this).css("color", "#e11d48");
    });

    $("#eventHeading").mouseout(function () {
        $(this).css("color", "#4f46e5");
    });

    // Display the complete contents of all four files in <pre>.
    const files = [
        "index.html",
        "style.css",
        "script.js",
        "jquery.js"
    ];

    Promise.all(files.map(function (file) {
        return fetch(file).then(function (response) {
            if (!response.ok) {
                throw new Error("Unable to load " + file);
            }

            return response.text();
        }).then(function (code) {
            return "/* ===== " + file + " ===== */\n" + code;
        });
    })).then(function (contents) {
        $("#sourceCode").text(contents.join("\n\n"));
    }).catch(function () {
        $("#sourceCode").text(
            "Could not load source code. Run the project using Live Server."
        );
    });
});
