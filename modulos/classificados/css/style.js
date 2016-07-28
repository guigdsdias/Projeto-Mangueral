import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "url(/classificados/images/background.jpg) no-repeat",
        "backgroundAttachment": "fixed",
        "backgroundSize": "cover",
        "backgroundPosition": "50% 50%",
        "fontFamily": "'Open Sans', sans-serif"
    },
    "a": {
        "outline": 0,
        "color": "#FF432E",
        "textDecoration": "none"
    },
    "a:hover": {
        "outline": 0,
        "textDecoration": "none"
    },
    "a:focus": {
        "outline": 0
    },
    "a:active": {
        "outline": 0
    },
    "aactive": {
        "outline": 0
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "li": {
        "listStyle": "none"
    },
    "p": {
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 13,
        "lineHeight": 21
    },
    "btn-primary": {
        "textTransform": "uppercase",
        "fontWeight": "300",
        "color": "#fff",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "borderRadius": 3,
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "btn-primary:hover": {
        "color": "#fff",
        "backgroundColor": "none !important"
    },
    "btn-primary:focus": {
        "color": "#fff",
        "backgroundColor": "none !important"
    },
    "btn-primary:active": {
        "color": "#fff",
        "backgroundColor": "none !important"
    },
    "btn-primaryactive": {
        "color": "#fff",
        "backgroundColor": "none !important"
    },
    "open dropdown-togglebtn-primary": {
        "color": "#fff",
        "backgroundColor": "none !important"
    },
    "btn-primarydisabled": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primary[disabled]": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "fieldset[disabled] btn-primary": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primarydisabled:hover": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primary[disabled]:hover": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "fieldset[disabled] btn-primary:hover": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primarydisabled:focus": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primary[disabled]:focus": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "fieldset[disabled] btn-primary:focus": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primarydisabled:active": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primary[disabled]:active": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "fieldset[disabled] btn-primary:active": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primarydisabledactive": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "btn-primary[disabled]active": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "fieldset[disabled] btn-primaryactive": {
        "borderColor": "#FF432E",
        "backgroundColor": "#FF432E"
    },
    "section-title h3": {
        "color": "#666 !important",
        "FontStyle": "italic",
        "fontSize": 28,
        "fontFamily": "'Oswald', sans-serif",
        "textTransform": "none"
    },
    "section-title p": {
        "paddingBottom": 60,
        "color": "#999",
        "fontSize": 18,
        "FontStyle": "italic",
        "fontWeight": "300"
    },
    "logo-section": {},
    "logo h1": {
        "fontFamily": "'Lobster', cursive",
        "color": "#fff",
        "fontSize": 60
    },
    "logo span": {
        "color": "#999"
    },
    "blue": {
        "background": "#28ABE3"
    },
    "green": {
        "background": "#72bf48"
    },
    "red": {
        "background": "#FF432E"
    },
    "light-red": {
        "background": "#FB6648"
    },
    "light-orange": {
        "background": "#FA6900"
    },
    "color": {
        "background": "#0ECEAB"
    },
    "gray": {
        "background": "gray"
    },
    "light-gray": {
        "background": "lightgray"
    },
    "transparency": {
        "opacity": 0.2,
        "filter": "alpha(opacity=20)",
        "background": "gray"
    },
    "mainbody-section": {
        "paddingTop": 10,
        "paddingBottom": 30
    },
    "menu-item": {
        "color": "#fff",
        "paddingTop": 20,
        "paddingBottom": 20,
        "marginBottom": 30,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "menu-item a": {
        "color": "#fff",
        "display": "block",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "menu-item a p": {
        "fontFamily": "'Oswald', sans-serif",
        "fontWeight": "300",
        "fontSize": 20
    },
    "menu-item a i": {
        "fontSize": 50,
        "paddingBottom": 20
    },
    "menu-item:hover a": {
        "textDecoration": "none",
        "Color": "#333",
        "animation": "wobble",
        "WebkitAnimation": "wobble",
        "animationDuration": "1000ms",
        "WebkitAnimationDuration": "1000ms"
    },
    "home-slider img": {
        "width": "100%",
        "height": "auto"
    },
    "home-slider carousel-indicators": {
        "position": "absolute",
        "bottom": "10%"
    },
    "home-slider carousel-indicators active": {
        "backgroundColor": "#FF432E"
    },
    "copyright": {
        "background": "rgba( 0, 0, 0, 0.7)",
        "color": "#fff",
        "paddingTop": 20,
        "paddingBottom": 20
    },
    "menuTop": {
        "background": "rgba( 0, 0, 0, 0.7)",
        "color": "#fff",
        "paddingTop": 5,
        "paddingBottom": 5,
        "marginTop": 10
    },
    "section-modal modal-content": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": "!important",
        "paddingLeft": 0,
        "minHeight": "100%",
        "border": "0 !important",
        "borderRadius": 0,
        "backgroundClip": "border-box",
        "WebkitBoxShadow": "none !important",
        "MozBoxShadow": "none !important",
        "boxShadow": "none !important",
        "color": "#888",
        "fontWeight": "300"
    },
    "section-modal close-modal": {
        "position": "absolute",
        "top": 25,
        "right": 25,
        "width": 75,
        "height": 75,
        "backgroundColor": "transparent",
        "cursor": "pointer"
    },
    "section-modal close-modal:hover": {
        "opacity": 0.3
    },
    "section-modal close-modal lr": {
        "zIndex": 1051,
        "width": 1,
        "height": 75,
        "marginLeft": 35,
        "backgroundColor": "#222",
        "WebkitTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "section-modal close-modal lr rl": {
        "zIndex": 1052,
        "width": 1,
        "height": 75,
        "backgroundColor": "#222",
        "WebkitTransform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "transform": "rotate(90deg)"
    },
    "feature": {
        "paddingBottom": 80,
        "textAlign": "center"
    },
    "feature-2": {
        "paddingBottom": 80
    },
    "feature h4": {
        "fontSize": 15,
        "color": "#666",
        "fontWeight": "300",
        "fontFamily": "'Oswald', sans-serif"
    },
    "feature-2 h4": {
        "fontSize": 15,
        "color": "#444",
        "paddingBottom": 10,
        "fontWeight": "300",
        "fontFamily": "'Oswald', sans-serif"
    },
    "feature p": {
        "color": "#444",
        "fontSize": 13,
        "lineHeight": 20,
        "fontWeight": "300"
    },
    "feature-2 p": {
        "color": "#444",
        "fontSize": 13,
        "lineHeight": 20,
        "fontWeight": "300"
    },
    "feature i": {
        "fontSize": 3.5,
        "color": "#fff",
        "background": "#FF432E",
        "width": 100,
        "height": 100,
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25,
        "marginBottom": 10,
        "WebkitBorderRadius": "70%",
        "MozBorderRadius": "70%",
        "OBorderRadius": "70%",
        "borderRadius": "70%",
        "position": "relative",
        "boxShadow": "0 0 0 30px transparent",
        "WebkitTransform": "translate3d(2, 2, 2)",
        "MozTransform": "translate3d(2, 2, 2)",
        "OTransform": "translate3d(2, 2, 2)",
        "transform": "translate3d(2, 2, 2)",
        "WebkitTransition": "box-shadow .6s ease-in-out",
        "MozTransition": "box-shadow .6s ease-in-out",
        "OTransition": "box-shadow .6s ease-in-out",
        "transition": "box-shadow .6s ease-in-out"
    },
    "no-touch feature:hover i": {
        "WebkitTransition": "box-shadow .4s ease-in-out",
        "MozTransition": "box-shadow .4s ease-in-out",
        "OTransition": "box-shadow .4s ease-in-out",
        "transition": "box-shadow .4s ease-in-out",
        "boxShadow": "0 0 0 0 #FF432E"
    },
    "no-touch feature:active i": {
        "WebkitTransition": "box-shadow .4s ease-in-out",
        "MozTransition": "box-shadow .4s ease-in-out",
        "OTransition": "box-shadow .4s ease-in-out",
        "transition": "box-shadow .4s ease-in-out",
        "boxShadow": "0 0 0 0 #FF432E"
    },
    "no-touch feature:focus i": {
        "WebkitTransition": "box-shadow .4s ease-in-out",
        "MozTransition": "box-shadow .4s ease-in-out",
        "OTransition": "box-shadow .4s ease-in-out",
        "transition": "box-shadow .4s ease-in-out",
        "boxShadow": "0 0 0 0 #FF432E"
    },
    "feature-2 i": {
        "color": "#FF432E",
        "fontSize": 3,
        "paddingTop": 1,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "position": "relative"
    },
    "portfolio-item": {
        "position": "relative",
        "marginBottom": 30
    },
    "portfolio-item portfolio-details": {
        "background": "rgba(0, 0, 0, 0.8)",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "height": "100%",
        "opacity": 0
    },
    "portfolio-item portfolio-details h4": {
        "paddingTop": "20%",
        "paddingBottom": "10%",
        "color": "#fff",
        "fontFamily": "'Oswald', sans-serif",
        "fontWeight": "300",
        "fontSize": 20
    },
    "portfolio-item portfolio-details a i": {
        "fontSize": 30
    },
    "portfolio-item:hover portfolio-details": {
        "opacity": 1,
        "animation": "pulse",
        "WebkitAnimation": "pulse",
        "animationDuration": "300ms",
        "WebkitAnimationDuration": "300ms"
    },
    "about-text": {
        "paddingBottom": 50
    },
    "about-text p": {
        "color": "#777",
        "textAlign": "justify"
    },
    "about-text ul": {
        "marginTop": 30,
        "fontSize": 13
    },
    "about-text li": {
        "marginBottom": 10,
        "color": "#999"
    },
    "about-text li i": {
        "paddingRight": 10,
        "color": "#FF432E"
    },
    "skill": {
        "paddingBottom": 5
    },
    "skill p": {
        "marginBottom": 7
    },
    "progress": {
        "background": "#fff",
        "overflow": "visible",
        "height": 20,
        "marginBottom": 10,
        "backgroundColor": "#f9f9f9",
        "borderRadius": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "progress-bar": {
        "background": "#FF432E",
        "float": "left",
        "height": "100%",
        "fontSize": 12,
        "color": "#ffffff",
        "textAlign": "center",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "WebkitTransition": "width 0.6s ease",
        "transition": "width 0.6s ease",
        "position": "relative"
    },
    "progress-bar-span": {
        "opacity": 1,
        "position": "absolute",
        "top": -5,
        "background": "#ACB2B8",
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "color": "#FFF",
        "borderRadius": 0,
        "right": 0,
        "WebkitTransition": "all .5s ease-in-out",
        "MozTransition": "all .5s ease-in-out",
        "OTransition": "all .5s ease-in-out",
        "MsTransition": "all .5s ease-in-out",
        "transition": "all .5s ease-in-out"
    },
    "skill:hover progress-bar-span": {
        "opacity": 1,
        "WebkitTransition": "all .5s ease-in-out",
        "MozTransition": "all .5s ease-in-out",
        "OTransition": "all .5s ease-in-out",
        "MsTransition": "all .5s ease-in-out",
        "transition": "all .5s ease-in-out"
    },
    "custom-tab nav-tabsnav-justified > active > a": {
        "borderRadius": 0,
        "BorderLeftColor": "transparent",
        "color": "#666",
        "borderBottomColor": "#ddd"
    },
    "custom-tab nav-tabsnav-justified > active > a:hover": {
        "borderRadius": 0,
        "BorderLeftColor": "transparent",
        "color": "#666",
        "borderBottomColor": "#ddd"
    },
    "custom-tab nav-tabsnav-justified > active > a:focus": {
        "borderRadius": 0,
        "BorderLeftColor": "transparent",
        "color": "#666",
        "borderBottomColor": "#ddd"
    },
    "custom-tab nav-tabsnav-justified": {
        "marginBottom": 20,
        "background": "#FF432E"
    },
    "custom-tab nav-tabsnav-justified > li": {
        "borderRight": "1px solid #f1f1f1"
    },
    "custom-tab nav-tabsnav-justified > li:last-child": {
        "borderRight": "none"
    },
    "custom-tab nav-tabsnav-justified > li > a": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 18,
        "color": "#fff",
        "fontFamily": "'Oswald', sans-serif",
        "fontWeight": "300"
    },
    "custom-tab nav-tabsnav-justified > li > a:hover": {
        "borderRadius": 0,
        "color": "#333"
    },
    "custom-tab tab-content tab-pane p": {
        "textAlign": "justify",
        "color": "#777"
    },
    "pricing-section": {
        "paddingTop": 80,
        "paddingRight": 0,
        "paddingBottom": 80,
        "paddingLeft": 0,
        "background": "#f5f5f5"
    },
    "pricing-table": {
        "textAlign": "center",
        "background": "#fff"
    },
    "plan-name": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "background": "#FF432E"
    },
    "plan-name h3": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "plan-price": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0
    },
    "plan-price price-value": {
        "fontSize": 38,
        "lineHeight": 40,
        "fontWeight": "600",
        "color": "#444"
    },
    "plan-price price-value span": {
        "fontSize": 18,
        "fontWeight": "300",
        "lineHeight": 18
    },
    "plan-price interval": {
        "lineHeight": 14
    },
    "plan-list li": {
        "paddingTop": 13,
        "paddingRight": 13,
        "paddingBottom": 13,
        "paddingLeft": 13,
        "fontSize": 14,
        "borderBottom": "1px solid #eee"
    },
    "plan-list li:first-child": {
        "borderTop": "1px solid #eee"
    },
    "plan-signup": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "background": "#FF432E"
    },
    "plan-signup a": {
        "textTransform": "uppercase",
        "color": "#fff"
    },
    "team-member": {
        "position": "relative",
        "width": "100%",
        "marginBottom": 30
    },
    "team-details": {
        "fontFamily": "'Open Sans', sans-serif",
        "paddingLeft": 10,
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(0, 0, 0, 0.8)",
        "opacity": 0
    },
    "team-member img": {
        "width": "100%",
        "height": "auto"
    },
    "team-details h4": {
        "fontSize": 25,
        "fontWeight": "300",
        "color": "#FF432E",
        "fontFamily": "'Oswald', sans-serif",
        "textTransform": "none",
        "textAlign": "center",
        "paddingTop": "20%"
    },
    "team-details designation": {
        "fontSize": 16,
        "fontWeight": "300",
        "color": "#fff",
        "textAlign": "center"
    },
    "team-details ul": {
        "paddingTop": "40%"
    },
    "team-details li": {
        "display": "inline-block",
        "listStyle": "none",
        "paddingRight": 10
    },
    "team-details li a": {
        "paddingTop": 5,
        "paddingRight": 8,
        "paddingBottom": 5,
        "paddingLeft": 8,
        "background": "#FF432E",
        "color": "#fff",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "OBorderRadius": 2,
        "borderRadius": 2
    },
    "team-member:hover team-details": {
        "opacity": 1,
        "WebkitAnimation": "pulse",
        "animation": "pulse",
        "animationDuration": "300ms",
        "WebkitAnimationDuration": "300ms"
    },
    "latest-post": {
        "paddingBottom": 20
    },
    "latest-post h4": {
        "paddingTop": 20,
        "paddingBottom": 5
    },
    "latest-post h4 a": {
        "color": "#FF432E"
    },
    "latest-post post-details li": {
        "color": "#999",
        "display": "inline",
        "fontSize": 13,
        "paddingRight": 10
    },
    "latest-post post-details li i": {
        "paddingRight": 5,
        "color": "#FF432E"
    },
    "latest-post p": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "color": "#999",
        "fontWeight": "300",
        "textAlign": "justify"
    },
    "footer-contact-info": {
        "background": "#FF432E",
        "color": "#fff",
        "paddingTop": 20,
        "paddingRight": 30,
        "paddingBottom": 20,
        "paddingLeft": 30,
        "MarginTop": 80,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "borderRadius": 3
    },
    "footer-contact-info ul": {
        "paddingBottom": 10
    },
    "footer-contact-info h4": {
        "paddingBottom": 10
    },
    "footer-contact-info li strong": {
        "fontWeight": "600"
    },
    "footer-social": {
        "paddingTop": 78,
        "paddingRight": 0,
        "paddingBottom": 78,
        "paddingLeft": 0,
        "border": "1px solid #FF432E",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "borderRadius": 3
    },
    "footer-social li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "footer-social li a": {
        "background": "#FF432E",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "color": "#fff",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "OBorderRadius": 2,
        "borderRadius": 2,
        "border": "1px solid #FF432E"
    },
    "footer-social li i": {
        "fontSize": 15,
        "width": 20,
        "height": 20
    },
    "footer-social li:hover a": {
        "background": "#fff",
        "Border": "1px solid #FF432E",
        "color": "#666"
    },
    "contact btn-primary": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "fontSize": 16
    },
    "contact btn-primary:hover": {
        "background": "transparent",
        "color": "#FF432E"
    },
    "contact section-title h3": {
        "color": "#fff"
    },
    "contact section-heading": {
        "color": "#fff"
    },
    "contact form-group": {
        "marginBottom": 25
    },
    "contact form-group input": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "contact form-group textarea": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "contact form-group inputform-control": {
        "height": "auto"
    },
    "contact form-group textareaform-control": {
        "height": 236
    },
    "contact::-webkit-input-placeholder": {
        "textTransform": "uppercase",
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontWeight": "700",
        "color": "#bbb"
    },
    "contact:-moz-placeholder": {
        "textTransform": "uppercase",
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontWeight": "700",
        "color": "#bbb"
    },
    "contact::-moz-placeholder": {
        "textTransform": "uppercase",
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontWeight": "700",
        "color": "#bbb"
    },
    "contact:-ms-input-placeholder": {
        "textTransform": "uppercase",
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontWeight": "700",
        "color": "#bbb"
    },
    "contact text-danger": {
        "color": "#e74c3c"
    },
    "contact button": {
        "fontWeight": "400",
        "marginTop": 30
    },
    "testimonial": {
        "marginBottom": 80
    },
    "testimonial h4": {
        "fontFamily": "'Oswald', sans-serif",
        "fontWeight": "300",
        "paddingTop": 20,
        "paddingBottom": 20
    },
    "testimonial speech": {
        "background": "#FF432E",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "#fff"
    }
});