const BANNERS =
    [
        { name: "Main_left", disabled: ["pictureLinkMob", "colorBackgroundBanner", "lineCheck", "colorLine"], mobileVer: "Main_mob" },
        { name: "Main_center", disabled: ["pictureLinkMob", "colorBackgroundBanner", "lineCheck", "colorLine"], mobileVer: "Main_mob" },
        { name: "Main_right", disabled: ["pictureLinkMob", "colorBackgroundBanner", "lineCheck", "colorLine"], mobileVer: "Main_mob" },
        { name: "Img_left", disabled: ["textWelcome", "textWelcomeFontSize"], mobileVer: "Img_left_right_mob", },
        { name: "Img_right", disabled: ["textWelcome", "textWelcomeFontSize"], mobileVer: "Img_left_right_mob" },
        { name: "Img_left_reverse", disabled: ["textWelcome", "textWelcomeFontSize"], mobileVer: "Img_left_right_reverse_mob" },
        { name: "Img_right_reverse", disabled: ["textWelcome", "textWelcomeFontSize"], mobileVer: "Img_left_right_reverse_mob" },
        { name: "Img_bg_full_text_left", disabled: ["colorBackgroundBanner", "textWelcome", "textWelcomeFontSize"], mobileVer: "Img_bg_full_mob" },
        { name: "Img_bg_full_text_center", disabled: ["colorBackgroundBanner", "textWelcome", "textWelcomeFontSize"], mobileVer: "Img_bg_full_mob" },
        { name: "Img_bg_full_text_right", disabled: ["colorBackgroundBanner", "textWelcome", "textWelcomeFontSize"], mobileVer: "Img_bg_full_mob" },
        { name: "Img_bg_no_text_center", disabled: ["pictureLinkMob", "textWelcome", "textWelcomeFontSize"], mobileVer: "Img_bg_full_mob" },
        { name: "Mini_banner_1", disabled: ["pictureLink", "pictureLinkMob", "textWelcome", "textWelcomeFontSize", "textSubtitle", "textSubtitleFontSize", "textButton", "btnStyle", "buttonLink", "colorTextButton", "colorBackgroundButton", "lineCheck", "colorLine"], mobileVer: "Mini_banner_1_mob" },
        { name: "Img_x2_text_center", disabled: ["textWelcome", "textWelcomeFontSize"], mobileVer: "Img_x2_text_center_mob" },
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
    { font1st: "Playfair Display", font1st_Link: "", font2nd: "Chivo", font2nd_Link: "", font3rd: "Cica Glisha", font3rd_Link: "" },
    { font1st: "Montserrat", font1st_Link: "", font2nd: "Aztec", font2nd_Link: "", font3rd: "Cica Glisha", font3rd_Link: "" },
    { font1st: "Chivo", font1st_Link: "", font2nd: "Aztec", font2nd_Link: "", font3rd: "Cica Glisha", font3rd_Link: "" }
]

export { BANNERS, LINKS_DUMMY_DATA, BUTTON_LOOK, TABS, FONTS }



// "Banners & pictures": {
//     tab_type: "BannersAndPictures",
//   },
//   "Text & Fonts": {
//     tab_type: "TextAndFonts",
//   },
//   "Buttons & Links": {
//     tab_type: "ButtonsAndLinks",
//   },
//   "More Options ": {
//     tab_type: "MoreOptions",
//   },
//   "Web Theme": {
//     tab_type: "WebTheme",
//   },
//   "Mobile Version": {
//     tab_type: "MobileVersion",
//   },