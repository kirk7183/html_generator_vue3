const btnStyle = (value) => {
    var selected;
    switch (value) {

        case "Square":
            //already set up as default in all button style
            // display: inline-block;
            //   width: fit-content;
            //   text-align: center;
            //   font-size: calc(1px + 1vw);
            //   padding: 0.5vw 1.2vw;
            selected = ``;
            break;
        case "Rounded":
            selected = `border-radius:50px;`;
            break;
        case "Soft_Rounded":
            selected = `border-radius:10px;`;
            break;
        case "Half_Round":
            selected = `border-radius:30px 0;`;
            break;
        case "Diagonal":
            selected = `transform: skewx(-20deg);
            position: unset; top: unset; left: unset;`;
            break;
        default: `
            dosent matter, 1 will be always selected from above :)`
    }
    return selected;
};

export { btnStyle }