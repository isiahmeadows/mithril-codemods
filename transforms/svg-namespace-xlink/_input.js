m("svg",
    m("use[href='svg-attr.svg#icon']")
);

m("svg.class",
    m("use", {
        href : "identifier-object.svg#icon"
    })
);

m("svg#id",
    m("use", {
        "href" : "literal-object.svg#icon"
    })
);

// Not transformed because unsure of context
m("image[href='no-context-attr.gif']");
m("image", {
    href : "no-context-obj.gif"
});

// Not transformed because no SVG parent
m("div",
    m("a", {
        href : "no-parent-obj.jpg"
    }),
    m("image[href='no-parent-attr.gif']")
);
