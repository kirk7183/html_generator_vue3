const BANNERS =
    [
        { name: "Main_left", mobileVer: "Main_mob", disabled: ["pictureLinkMob", "colorBackgroundBanner", "lineCheck", "colorLine"] },
        { name: "Main_center", mobileVer: "Main_mob", disabled: ["pictureLinkMob", "colorBackgroundBanner", "lineCheck", "colorLine"] },
        { name: "Main_right", mobileVer: "Main_mob", disabled: ["pictureLinkMob", "colorBackgroundBanner", "lineCheck", "colorLine"] },
        { name: "Img_left", mobileVer: "Img_left_right_mob", disabled: ["textWelcome", "textWelcomeFontSize"] },
        { name: "Img_right", mobileVer: "Img_left_right_mob", disabled: ["textWelcome", "textWelcomeFontSize"] },
        { name: "Img_left_reverse", mobileVer: "Img_left_right_reverse_mob", disabled: ["textWelcome", "textWelcomeFontSize"] },
        { name: "Img_right_reverse", mobileVer: "Img_left_right_reverse_mob", disabled: ["textWelcome", "textWelcomeFontSize"] },
        { name: "Img_bg_full_text_left", mobileVer: "Img_bg_full_mob", disabled: ["colorBackgroundBanner", "textWelcome", "textWelcomeFontSize"] },
        { name: "Img_bg_full_text_center", mobileVer: "Img_bg_full_mob", disabled: ["colorBackgroundBanner", "textWelcome", "textWelcomeFontSize"] },
        { name: "Img_bg_full_text_right", mobileVer: "Img_bg_full_mob", disabled: ["colorBackgroundBanner", "textWelcome", "textWelcomeFontSize"] },
        { name: "Img_bg_no_text_center", mobileVer: "Img_bg_full_mob", disabled: ["pictureLinkMob", "textWelcome", "textWelcomeFontSize"] },
        { name: "Mini_banner_1", mobileVer: "Mini_banner_1_mob", disabled: ["pictureLink", "pictureLinkMob", "textWelcome", "textWelcomeFontSize", "textSubtitle", "textSubtitleFontSize", "textButton", "btnStyle", "buttonLink", "colorTextButton", "colorBackgroundButton", "lineCheck", "colorLine"] },
        { name: "Img_x2_text_center", mobileVer: "Img_x2_text_center_mob", disabled: ["textWelcome", "textWelcomeFontSize"] },
    ]

const LINKS_DUMMY_DATA = [
    { name: "Inventory", link: "/inventory.php" },
    { name: "Financing", link: "/forms.php?cid=1&t=2" },
    { name: "TestDrive", link: "/forms.php?cid=1&t=4" },
    { name: "Offer", link: "/forms.php?cid=1&t=1" },
    { name: "Trade-In", link: "/forms.php?cid=1&t=5" },
    { name: "Cash For Your Car", link: "/forms.php?cid=1&t=6" },
    { name: "Consignment", link: "/forms.php?cid=1&t=3" },
    { name: "Reviews", link: "/reviews.php" },
    { name: "About Us", link: "/about.php" },
    { name: "Contact", link: "/contact.php" },
];

const BUTTON_LOOK = [
    { name: "Square", class: "squareBtn" },
    { name: "Rounded", class: "roundedBtn" },
    { name: "Soft_Rounded", class: "softRoundBtn" },
    { name: "Half_Round", class: "halfRoundBtn" },
    { name: "Diagonal", class: "diagonalBtn" },
];

const TABS = [
    { title: "Banners & pictures", tab_type: "BannersAndPictures" },
    { title: "Text & Fonts", tab_type: "TextAndFonts" },
    { title: "Buttons & Links", tab_type: "ButtonsAndLinks" },
    { title: "More Options ", tab_type: "MoreOptions" },
    { title: "Web Theme", tab_type: "WebTheme" },
    { title: "Mobile Version", tab_type: "MobileVersion" },
    { title: "Save & Delete", tab_type: "SaveAndDelete" }
];

const FONTS = [
    { fontName: "Montserrat", combo: 1, weight: ["100", "400", "500", "700", "800"], cssRule: "font-family: 'Montserrat', sans-serif;", fontImport: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;800&display=swap');" },
    { fontName: "Cairo", combo: 1, weight: ["300", "400", "500", "700", "800"], cssRule: "font-family: 'Cairo', sans-serif;", fontImport: "@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700;800&display=swap');" },
    { fontName: "Playfair Display", combo: 0, weight: ["400", "500", "700", "800"], cssRule: "font-family: 'Playfair Display', serif;", fontImport: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700;1,800&display=swap');" }
]

export { BANNERS, LINKS_DUMMY_DATA, BUTTON_LOOK, TABS, FONTS }

// { font1st: "Playfair Display", font1st_Link: "", font2nd: "Chivo", font2nd_Link: "", font3rd: "Cica Glisha", font3rd_Link: "" },
// { font1st: "Montserrat", font1st_Link: "", font2nd: "Aztec", font2nd_Link: "", font3rd: "Cica Glisha", font3rd_Link: "" },
// { font1st: "Chivo", font1st_Link: "", font2nd: "Aztec", font2nd_Link: "", font3rd: "Cica Glisha", font3rd_Link: "" }
