function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* PRINTZIN — icons + product placeholder art */
const Icon = ({
  name,
  size = 22,
  stroke = 2,
  ...rest
}) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...rest
  };
  const paths = {
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.5",
      y2: "16.5"
    })),
    cart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "20",
      r: "1.4",
      fill: "currentColor",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "20",
      r: "1.4",
      fill: "currentColor",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 3h2.2l2 12.4a1.5 1.5 0 0 0 1.5 1.3h9.3a1.5 1.5 0 0 0 1.5-1.2L20.5 7H5.2"
    })),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "3.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 20a7 7 0 0 1 14 0"
    })),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M12 20.5C5.5 16 3 12.5 3 9a4.5 4.5 0 0 1 9-1.2A4.5 4.5 0 0 1 21 9c0 3.5-2.5 7-9 11.5Z"
    }),
    star: /*#__PURE__*/React.createElement("path", {
      d: "M12 3.2l2.5 5.1 5.6.8-4 4 1 5.6L12 16l-5 2.6 1-5.6-4-4 5.6-.8Z"
    }),
    chevron: /*#__PURE__*/React.createElement("polyline", {
      points: "9 6 15 12 9 18"
    }),
    chevronDown: /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    }),
    chevronUp: /*#__PURE__*/React.createElement("polyline", {
      points: "18 15 12 9 6 15"
    }),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })),
    minus: /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }),
    trash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
    })),
    upload: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 16V4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 9 12 4 17 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 20h14"
    })),
    check: /*#__PURE__*/React.createElement("polyline", {
      points: "4 12 10 18 20 6"
    }),
    truck: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "1.5",
      y: "6",
      width: "13",
      height: "10",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 9h4l3 3v4h-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "1.6"
    })),
    gift: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "9",
      width: "18",
      height: "11",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 13h18M12 9v11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9S10.5 4 8 5s.5 4 4 4c3.5 0 5.5 0 4-4-2.5-1-4 4-4 4Z"
    })),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })),
    close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    })),
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6Z"
    }),
    refresh: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 0 1 15-6.7L21 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 3v5h-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 0 1-15 6.7L3 16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 21v-5h5"
    })),
    tag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 3h7l11 11-7 7L3 10Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7.5",
      cy: "7.5",
      r: "1.4",
      fill: "currentColor",
      stroke: "none"
    })),
    sparkle: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"
    }),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M5 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"
    }),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 7l8.5 6 8.5-6"
    })),
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "2.4"
    })),
    lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "10",
      width: "16",
      height: "11",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10V7a4 4 0 0 1 8 0v3"
    })),
    edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 20h4l11-11-4-4L4 16Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 5l4 4"
    })),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "12",
      x2: "18",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "18",
      x2: "14",
      y2: "18"
    })),
    arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "12",
      x2: "20",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 6 20 12 14 18"
    })),
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    })),
    instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.5",
      cy: "6.5",
      r: "1",
      fill: "currentColor",
      stroke: "none"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    "aria-hidden": "true"
  }), paths[name] || null);
};

/* Product-type glyphs for the placeholder image system */
const ProductGlyph = ({
  type,
  size = 90,
  color = '#E03E18'
}) => {
  const s = {
    width: size,
    height: size,
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: color,
    strokeWidth: 2.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const g = {
    mug: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "18",
      width: "26",
      height: "30",
      rx: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40 24h6a6 6 0 0 1 0 14h-6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27",
      cy: "33",
      r: "6",
      strokeDasharray: "2 3"
    })),
    frame: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "36",
      height: "36",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 42l8-9 6 6 5-6 5 9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25",
      cy: "25",
      r: "3"
    })),
    shirt: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M24 14l-10 6 4 7 5-3v22h22V31l5 3 4-7-10-6-5 4h-10z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27 14a5 5 0 0 0 10 0"
    })),
    cushion: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "13",
      width: "38",
      height: "38",
      rx: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 19c4 5 4 19 0 26M45 19c-4 5-4 19 0 26",
      strokeWidth: "1.6",
      opacity: ".6"
    })),
    hamper: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 26h36l-3 22H17z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 26h40"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 26c2-8 6-12 10-12s8 4 10 12"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "20",
      r: "3"
    })),
    bottle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M26 12h12v6l3 5v25a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4V23l3-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 30h18"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "38",
      r: "5",
      strokeDasharray: "2 3"
    })),
    lamp: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "26",
      r: "14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26 44h12l-2 8H28z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24 52h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27 22l4 6 6-9",
      strokeWidth: "1.8"
    })),
    key: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "22",
      cy: "24",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28 30l16 16M40 42l4-4M36 38l4-4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22",
      cy: "24",
      r: "3"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", s, g[type] || g.gift);
};
window.Icon = Icon;
window.ProductGlyph = ProductGlyph;