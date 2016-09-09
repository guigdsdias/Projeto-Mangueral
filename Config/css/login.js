import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "*:before": {
        "boxSizing": "border-box"
    },
    "*:after": {
        "boxSizing": "border-box"
    },
    "html": {
        "overflowY": "scroll"
    },
    "body": {
        "background": "#c1bdba",
        "fontFamily": "'Titillium Web', sans-serif"
    },
    "a": {
        "textDecoration": "none",
        "color": "#1ab188",
        "WebkitTransition": ".5s ease",
        "transition": ".5s ease"
    },
    "a:hover": {
        "color": "#179b77"
    },
    "form": {
        "background": "rgba(19, 35, 47, 0.9)",
        "paddingTop": 40,
        "paddingRight": 40,
        "paddingBottom": 40,
        "paddingLeft": 40,
        "maxWidth": 600,
        "marginTop": 40,
        "marginRight": "auto",
        "marginBottom": 40,
        "marginLeft": "auto",
        "borderRadius": 4,
        "boxShadow": "0 4px 10px 4px rgba(19, 35, 47, 0.3)"
    },
    "tab-group": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0
    },
    "tab-group:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "tab-group li a": {
        "display": "block",
        "textDecoration": "none",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "background": "rgba(160, 179, 176, 0.25)",
        "color": "#a0b3b0",
        "fontSize": 20,
        "float": "left",
        "width": "50%",
        "textAlign": "center",
        "cursor": "pointer",
        "WebkitTransition": ".5s ease",
        "transition": ".5s ease"
    },
    "tab-group li a:hover": {
        "background": "#179b77",
        "color": "#ffffff"
    },
    "tab-group active a": {
        "background": "#1ab188",
        "color": "#ffffff"
    },
    "tab-content > div:last-child": {
        "display": "none"
    },
    "h1": {
        "textAlign": "center",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0
    },
    "input": {
        "fontSize": 22,
        "display": "block",
        "width": "100%",
        "height": "100%",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "background": "none",
        "backgroundImage": "none",
        "border": "1px solid #a0b3b0",
        "color": "#ffffff",
        "borderRadius": 0,
        "WebkitTransition": "border-color .25s ease, box-shadow .25s ease",
        "transition": "border-color .25s ease, box-shadow .25s ease"
    },
    "textarea": {
        "fontSize": 22,
        "display": "block",
        "width": "100%",
        "height": "100%",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "background": "none",
        "backgroundImage": "none",
        "border": "2px solid #a0b3b0",
        "color": "#ffffff",
        "borderRadius": 0,
        "WebkitTransition": "border-color .25s ease, box-shadow .25s ease",
        "transition": "border-color .25s ease, box-shadow .25s ease",
        "resize": "vertical"
    },
    "input:focus": {
        "outline": 0,
        "borderColor": "#1ab188"
    },
    "textarea:focus": {
        "outline": 0,
        "borderColor": "#1ab188"
    },
    "field-wrap": {
        "position": "relative",
        "marginBottom": 40
    },
    "top-row:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "top-row > div": {
        "float": "left",
        "width": "48%",
        "marginRight": "4%"
    },
    "top-row > div:last-child": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "button": {
        "border": 0,
        "outline": "none",
        "borderRadius": 0,
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "fontWeight": "600",
        "textTransform": "uppercase",
        "letterSpacing": 0.1,
        "background": "#1ab188",
        "color": "#ffffff",
        "WebkitTransition": "all 0.5s ease",
        "transition": "all 0.5s ease",
        "WebkitAppearance": "none"
    },
    "button:hover": {
        "background": "#179b77"
    },
    "button:focus": {
        "background": "#179b77"
    },
    "button-block": {
        "display": "block",
        "width": "100%"
    },
    "buttonFace": {
        "background": "#006dcc"
    },
    "forgot": {
        "marginTop": -20,
        "textAlign": "right"
    }
});