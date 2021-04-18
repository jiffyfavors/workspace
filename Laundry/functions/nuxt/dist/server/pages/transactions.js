exports.ids = [14];
exports.modules = Array(80).concat([
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);


/* harmony default export */ __webpack_exports__["a"] = (_VDivider__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 121 */,
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VSubheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);


/* harmony default export */ __webpack_exports__["a"] = (_VSubheader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VToolbar_VToolbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _src_components_VToolbar_VToolbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VToolbar_VToolbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _VImg_VImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Styles
 // Extensions

 // Components

 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-toolbar',
  props: {
    absolute: Boolean,
    bottom: Boolean,
    collapse: Boolean,
    dense: Boolean,
    extended: Boolean,
    extensionHeight: {
      default: 48,
      type: [Number, String]
    },
    flat: Boolean,
    floating: Boolean,
    prominent: Boolean,
    short: Boolean,
    src: {
      type: [String, Object],
      default: ''
    },
    tag: {
      type: String,
      default: 'header'
    }
  },
  data: () => ({
    isExtended: false
  }),
  computed: {
    computedHeight() {
      const height = this.computedContentHeight;
      if (!this.isExtended) return height;
      const extensionHeight = parseInt(this.extensionHeight);
      return this.isCollapsed ? height : height + (!isNaN(extensionHeight) ? extensionHeight : 0);
    },

    computedContentHeight() {
      if (this.height) return parseInt(this.height);
      if (this.isProminent && this.dense) return 96;
      if (this.isProminent && this.short) return 112;
      if (this.isProminent) return 128;
      if (this.dense) return 48;
      if (this.short || this.$vuetify.breakpoint.smAndDown) return 56;
      return 64;
    },

    classes() {
      return { ..._VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-toolbar': true,
        'v-toolbar--absolute': this.absolute,
        'v-toolbar--bottom': this.bottom,
        'v-toolbar--collapse': this.collapse,
        'v-toolbar--collapsed': this.isCollapsed,
        'v-toolbar--dense': this.dense,
        'v-toolbar--extended': this.isExtended,
        'v-toolbar--flat': this.flat,
        'v-toolbar--floating': this.floating,
        'v-toolbar--prominent': this.isProminent
      };
    },

    isCollapsed() {
      return this.collapse;
    },

    isProminent() {
      return this.prominent;
    },

    styles() {
      return { ...this.measurableStyles,
        height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "f"])(this.computedHeight)
      };
    }

  },

  created() {
    const breakingProps = [['app', '<v-app-bar app>'], ['manual-scroll', '<v-app-bar :value="false">'], ['clipped-left', '<v-app-bar clipped-left>'], ['clipped-right', '<v-app-bar clipped-right>'], ['inverted-scroll', '<v-app-bar inverted-scroll>'], ['scroll-off-screen', '<v-app-bar scroll-off-screen>'], ['scroll-target', '<v-app-bar scroll-target>'], ['scroll-threshold', '<v-app-bar scroll-threshold>'], ['card', '<v-app-bar flat>']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* breaking */ "a"])(original, replacement, this);
    });
  },

  methods: {
    genBackground() {
      const props = {
        height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "f"])(this.computedHeight),
        src: this.src
      };
      const image = this.$scopedSlots.img ? this.$scopedSlots.img({
        props
      }) : this.$createElement(_VImg_VImg__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props
      });
      return this.$createElement('div', {
        staticClass: 'v-toolbar__image'
      }, [image]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-toolbar__content',
        style: {
          height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "f"])(this.computedContentHeight)
        }
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getSlot */ "o"])(this));
    },

    genExtension() {
      return this.$createElement('div', {
        staticClass: 'v-toolbar__extension',
        style: {
          height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "f"])(this.extensionHeight)
        }
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getSlot */ "o"])(this, 'extension'));
    }

  },

  render(h) {
    this.isExtended = this.extended || !!this.$scopedSlots.extension;
    const children = [this.genContent()];
    const data = this.setBackgroundColor(this.color, {
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    });
    if (this.isExtended) children.push(this.genExtension());
    if (this.src || this.$scopedSlots.img) children.unshift(this.genBackground());
    return h(this.tag, data, children);
  }

}));

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: VInput

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VInput/VInput.sass
var VInput = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js + 1 modules
var VLabel = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VMessages/VMessages.sass
var VMessages = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMessages/VMessages.js
// Styles
 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ var VMessages_VMessages = (Object(mixins["a" /* default */])(colorable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-messages',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    genChildren() {
      return this.$createElement('transition-group', {
        staticClass: 'v-messages__wrapper',
        attrs: {
          name: 'message-transition',
          tag: 'div'
        }
      }, this.value.map(this.genMessage));
    },

    genMessage(message, key) {
      return this.$createElement('div', {
        staticClass: 'v-messages__message',
        key
      }, Object(helpers["o" /* getSlot */])(this, 'default', {
        message,
        key
      }) || [message]);
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.color, {
      staticClass: 'v-messages',
      class: this.themeClasses
    }), [this.genChildren()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMessages/index.js


/* harmony default export */ var components_VMessages = (VMessages_VMessages);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/binds-attrs/index.js
var binds_attrs = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/validatable/index.js
var validatable = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VInput/VInput.js
// Styles
 // Components



 // Mixins


 // Utilities




const baseMixins = Object(mixins["a" /* default */])(binds_attrs["a" /* default */], validatable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VInput_VInput = (baseMixins.extend().extend({
  name: 'v-input',
  inheritAttrs: false,
  props: {
    appendIcon: String,
    backgroundColor: {
      type: String,
      default: ''
    },
    dense: Boolean,
    height: [Number, String],
    hideDetails: [Boolean, String],
    hint: String,
    id: String,
    label: String,
    loading: Boolean,
    persistentHint: Boolean,
    prependIcon: String,
    value: null
  },

  data() {
    return {
      lazyValue: this.value,
      hasMouseDown: false
    };
  },

  computed: {
    classes() {
      return {
        'v-input--has-state': this.hasState,
        'v-input--hide-details': !this.showDetails,
        'v-input--is-label-active': this.isLabelActive,
        'v-input--is-dirty': this.isDirty,
        'v-input--is-disabled': this.isDisabled,
        'v-input--is-focused': this.isFocused,
        // <v-switch loading>.loading === '' so we can't just cast to boolean
        'v-input--is-loading': this.loading !== false && this.loading != null,
        'v-input--is-readonly': this.isReadonly,
        'v-input--dense': this.dense,
        ...this.themeClasses
      };
    },

    computedId() {
      return this.id || `input-${this._uid}`;
    },

    hasDetails() {
      return this.messagesToDisplay.length > 0;
    },

    hasHint() {
      return !this.hasMessages && !!this.hint && (this.persistentHint || this.isFocused);
    },

    hasLabel() {
      return !!(this.$slots.label || this.label);
    },

    // Proxy for `lazyValue`
    // This allows an input
    // to function without
    // a provided model
    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit(this.$_modelEvent, val);
      }

    },

    isDirty() {
      return !!this.lazyValue;
    },

    isLabelActive() {
      return this.isDirty;
    },

    messagesToDisplay() {
      if (this.hasHint) return [this.hint];
      if (!this.hasMessages) return [];
      return this.validations.map(validation => {
        if (typeof validation === 'string') return validation;
        const validationResult = validation(this.internalValue);
        return typeof validationResult === 'string' ? validationResult : '';
      }).filter(message => message !== '');
    },

    showDetails() {
      return this.hideDetails === false || this.hideDetails === 'auto' && this.hasDetails;
    }

  },
  watch: {
    value(val) {
      this.lazyValue = val;
    }

  },

  beforeCreate() {
    // v-radio-group needs to emit a different event
    // https://github.com/vuetifyjs/vuetify/issues/4752
    this.$_modelEvent = this.$options.model && this.$options.model.event || 'input';
  },

  methods: {
    genContent() {
      return [this.genPrependSlot(), this.genControl(), this.genAppendSlot()];
    },

    genControl() {
      return this.$createElement('div', {
        staticClass: 'v-input__control'
      }, [this.genInputSlot(), this.genMessages()]);
    },

    genDefaultSlot() {
      return [this.genLabel(), this.$slots.default];
    },

    genIcon(type, cb, extraData = {}) {
      const icon = this[`${type}Icon`];
      const eventName = `click:${Object(helpers["r" /* kebabCase */])(type)}`;
      const hasListener = !!(this.listeners$[eventName] || cb);
      const data = Object(mergeData["a" /* default */])({
        attrs: {
          'aria-label': hasListener ? Object(helpers["r" /* kebabCase */])(type).split('-')[0] + ' icon' : undefined,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          light: this.light
        },
        on: !hasListener ? undefined : {
          click: e => {
            e.preventDefault();
            e.stopPropagation();
            this.$emit(eventName, e);
            cb && cb(e);
          },
          // Container has g event that will
          // trigger menu open if enclosed
          mouseup: e => {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }, extraData);
      return this.$createElement('div', {
        staticClass: `v-input__icon`,
        class: type ? `v-input__icon--${Object(helpers["r" /* kebabCase */])(type)}` : undefined
      }, [this.$createElement(VIcon["a" /* default */], data, icon)]);
    },

    genInputSlot() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor, {
        staticClass: 'v-input__slot',
        style: {
          height: Object(helpers["f" /* convertToUnit */])(this.height)
        },
        on: {
          click: this.onClick,
          mousedown: this.onMouseDown,
          mouseup: this.onMouseUp
        },
        ref: 'input-slot'
      }), [this.genDefaultSlot()]);
    },

    genLabel() {
      if (!this.hasLabel) return null;
      return this.$createElement(VLabel["a" /* default */], {
        props: {
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: this.hasState,
          for: this.computedId,
          light: this.light
        }
      }, this.$slots.label || this.label);
    },

    genMessages() {
      if (!this.showDetails) return null;
      return this.$createElement(components_VMessages, {
        props: {
          color: this.hasHint ? '' : this.validationState,
          dark: this.dark,
          light: this.light,
          value: this.messagesToDisplay
        },
        attrs: {
          role: this.hasMessages ? 'alert' : null
        },
        scopedSlots: {
          default: props => Object(helpers["o" /* getSlot */])(this, 'message', props)
        }
      });
    },

    genSlot(type, location, slot) {
      if (!slot.length) return null;
      const ref = `${type}-${location}`;
      return this.$createElement('div', {
        staticClass: `v-input__${ref}`,
        ref
      }, slot);
    },

    genPrependSlot() {
      const slot = [];

      if (this.$slots.prepend) {
        slot.push(this.$slots.prepend);
      } else if (this.prependIcon) {
        slot.push(this.genIcon('prepend'));
      }

      return this.genSlot('prepend', 'outer', slot);
    },

    genAppendSlot() {
      const slot = []; // Append icon for text field was really
      // an appended inner icon, v-text-field
      // will overwrite this method in order to obtain
      // backwards compat

      if (this.$slots.append) {
        slot.push(this.$slots.append);
      } else if (this.appendIcon) {
        slot.push(this.genIcon('append'));
      }

      return this.genSlot('append', 'outer', slot);
    },

    onClick(e) {
      this.$emit('click', e);
    },

    onMouseDown(e) {
      this.hasMouseDown = true;
      this.$emit('mousedown', e);
    },

    onMouseUp(e) {
      this.hasMouseDown = false;
      this.$emit('mouseup', e);
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.validationState, {
      staticClass: 'v-input',
      class: this.classes
    }), this.genContent());
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VInput/index.js


/* harmony default export */ var components_VInput = __webpack_exports__["a"] = (VInput_VInput);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(150);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _mixins_proxyable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
 // Components

 // Mixins




 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_3__[/* factory */ "b"])(['absolute', 'fixed', 'top', 'bottom']), _mixins_proxyable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-progress-linear',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null
    },
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: 'primary'
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    query: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    stream: Boolean,
    striped: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },

  data() {
    return {
      internalLazyValue: this.value || 0
    };
  },

  computed: {
    __cachedBackground() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor || this.color, {
        staticClass: 'v-progress-linear__background',
        style: this.backgroundStyle
      }));
    },

    __cachedBar() {
      return this.$createElement(this.computedTransition, [this.__cachedBarType]);
    },

    __cachedBarType() {
      return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate;
    },

    __cachedBuffer() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__buffer',
        style: this.styles
      });
    },

    __cachedDeterminate() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: `v-progress-linear__determinate`,
        style: {
          width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.normalizedValue, '%')
        }
      }));
    },

    __cachedIndeterminate() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          'v-progress-linear__indeterminate--active': this.active
        }
      }, [this.genProgressBar('long'), this.genProgressBar('short')]);
    },

    __cachedStream() {
      if (!this.stream) return null;
      return this.$createElement('div', this.setTextColor(this.color, {
        staticClass: 'v-progress-linear__stream',
        style: {
          width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(100 - this.normalizedBuffer, '%')
        }
      }));
    },

    backgroundStyle() {
      const backgroundOpacity = this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity);
      return {
        opacity: backgroundOpacity,
        [this.isReversed ? 'right' : 'left']: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.normalizedValue, '%'),
        width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.normalizedBuffer - this.normalizedValue, '%')
      };
    },

    classes() {
      return {
        'v-progress-linear--absolute': this.absolute,
        'v-progress-linear--fixed': this.fixed,
        'v-progress-linear--query': this.query,
        'v-progress-linear--reactive': this.reactive,
        'v-progress-linear--reverse': this.isReversed,
        'v-progress-linear--rounded': this.rounded,
        'v-progress-linear--striped': this.striped,
        ...this.themeClasses
      };
    },

    computedTransition() {
      return this.indeterminate ? _transitions__WEBPACK_IMPORTED_MODULE_1__[/* VFadeTransition */ "d"] : _transitions__WEBPACK_IMPORTED_MODULE_1__[/* VSlideXTransition */ "e"];
    },

    isReversed() {
      return this.$vuetify.rtl !== this.reverse;
    },

    normalizedBuffer() {
      return this.normalize(this.bufferValue);
    },

    normalizedValue() {
      return this.normalize(this.internalLazyValue);
    },

    reactive() {
      return Boolean(this.$listeners.change);
    },

    styles() {
      const styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (!this.indeterminate && parseFloat(this.normalizedBuffer) !== 100) {
        styles.width = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.normalizedBuffer, '%');
      }

      return styles;
    }

  },
  methods: {
    genContent() {
      const slot = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* getSlot */ "o"])(this, 'default', {
        value: this.internalLazyValue
      });
      if (!slot) return null;
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__content'
      }, slot);
    },

    genListeners() {
      const listeners = this.$listeners;

      if (this.reactive) {
        listeners.click = this.onClick;
      }

      return listeners;
    },

    genProgressBar(name) {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          [name]: true
        }
      }));
    },

    onClick(e) {
      if (!this.reactive) return;
      const {
        width
      } = this.$el.getBoundingClientRect();
      this.internalValue = e.offsetX / width * 100;
    },

    normalize(value) {
      if (value < 0) return 0;
      if (value > 100) return 100;
      return parseFloat(value);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-progress-linear',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': this.normalizedBuffer,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      style: {
        bottom: this.bottom ? 0 : undefined,
        height: this.active ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "f"])(this.height) : 0,
        top: this.top ? 0 : undefined
      },
      on: this.genListeners()
    };
    return h('div', data, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()]);
  }

}));

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: VLabel

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VLabel/VLabel.sass
var VLabel = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLabel/VLabel.js
// Styles
 // Mixins



 // Helpers


/* @vue/component */

/* harmony default export */ var VLabel_VLabel = (Object(mixins["a" /* default */])(themeable["a" /* default */]).extend({
  name: 'v-label',
  functional: true,
  props: {
    absolute: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    disabled: Boolean,
    focused: Boolean,
    for: String,
    left: {
      type: [Number, String],
      default: 0
    },
    right: {
      type: [Number, String],
      default: 'auto'
    },
    value: Boolean
  },

  render(h, ctx) {
    const {
      children,
      listeners,
      props
    } = ctx;
    const data = {
      staticClass: 'v-label',
      class: {
        'v-label--active': props.value,
        'v-label--is-disabled': props.disabled,
        ...Object(themeable["b" /* functionalThemeClasses */])(ctx)
      },
      attrs: {
        for: props.for,
        'aria-hidden': !props.for
      },
      on: listeners,
      style: {
        left: Object(helpers["f" /* convertToUnit */])(props.left),
        right: Object(helpers["f" /* convertToUnit */])(props.right),
        position: props.absolute ? 'absolute' : 'relative'
      },
      ref: 'label'
    };
    return h('label', colorable["a" /* default */].options.methods.setTextColor(props.focused && props.color, data), children);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js


/* harmony default export */ var components_VLabel = __webpack_exports__["a"] = (VLabel_VLabel);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VProgressLinear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(156);


/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'loadable',
  props: {
    loading: {
      type: [Boolean, String],
      default: false
    },
    loaderHeight: {
      type: [Number, String],
      default: 2
    }
  },
  methods: {
    genProgress() {
      if (this.loading === false) return null;
      return this.$slots.progress || this.$createElement(_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: {
          absolute: true,
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          height: this.loaderHeight,
          indeterminate: true
        }
      });
    }

  }
}));

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _colorable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
// Mixins


 // Utilities




const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_colorable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_registrable__WEBPACK_IMPORTED_MODULE_2__[/* inject */ "a"])('form'), _themeable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'validatable',
  props: {
    disabled: Boolean,
    error: Boolean,
    errorCount: {
      type: [Number, String],
      default: 1
    },
    errorMessages: {
      type: [String, Array],
      default: () => []
    },
    messages: {
      type: [String, Array],
      default: () => []
    },
    readonly: Boolean,
    rules: {
      type: Array,
      default: () => []
    },
    success: Boolean,
    successMessages: {
      type: [String, Array],
      default: () => []
    },
    validateOnBlur: Boolean,
    value: {
      required: false
    }
  },

  data() {
    return {
      errorBucket: [],
      hasColor: false,
      hasFocused: false,
      hasInput: false,
      isFocused: false,
      isResetting: false,
      lazyValue: this.value,
      valid: false
    };
  },

  computed: {
    computedColor() {
      if (this.isDisabled) return undefined;
      if (this.color) return this.color; // It's assumed that if the input is on a
      // dark background, the user will want to
      // have a white color. If the entire app
      // is setup to be dark, then they will
      // like want to use their primary color

      if (this.isDark && !this.appIsDark) return 'white';else return 'primary';
    },

    hasError() {
      return this.internalErrorMessages.length > 0 || this.errorBucket.length > 0 || this.error;
    },

    // TODO: Add logic that allows the user to enable based
    // upon a good validation
    hasSuccess() {
      return this.internalSuccessMessages.length > 0 || this.success;
    },

    externalError() {
      return this.internalErrorMessages.length > 0 || this.error;
    },

    hasMessages() {
      return this.validationTarget.length > 0;
    },

    hasState() {
      if (this.isDisabled) return false;
      return this.hasSuccess || this.shouldValidate && this.hasError;
    },

    internalErrorMessages() {
      return this.genInternalMessages(this.errorMessages);
    },

    internalMessages() {
      return this.genInternalMessages(this.messages);
    },

    internalSuccessMessages() {
      return this.genInternalMessages(this.successMessages);
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('input', val);
      }

    },

    isDisabled() {
      return this.disabled || !!this.form && this.form.disabled;
    },

    isInteractive() {
      return !this.isDisabled && !this.isReadonly;
    },

    isReadonly() {
      return this.readonly || !!this.form && this.form.readonly;
    },

    shouldValidate() {
      if (this.externalError) return true;
      if (this.isResetting) return false;
      return this.validateOnBlur ? this.hasFocused && !this.isFocused : this.hasInput || this.hasFocused;
    },

    validations() {
      return this.validationTarget.slice(0, Number(this.errorCount));
    },

    validationState() {
      if (this.isDisabled) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor) return this.computedColor;
      return undefined;
    },

    validationTarget() {
      if (this.internalErrorMessages.length > 0) {
        return this.internalErrorMessages;
      } else if (this.successMessages && this.successMessages.length > 0) {
        return this.internalSuccessMessages;
      } else if (this.messages && this.messages.length > 0) {
        return this.internalMessages;
      } else if (this.shouldValidate) {
        return this.errorBucket;
      } else return [];
    }

  },
  watch: {
    rules: {
      handler(newVal, oldVal) {
        if (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* deepEqual */ "i"])(newVal, oldVal)) return;
        this.validate();
      },

      deep: true
    },

    internalValue() {
      // If it's the first time we're setting input,
      // mark it with hasInput
      this.hasInput = true;
      this.validateOnBlur || this.$nextTick(this.validate);
    },

    isFocused(val) {
      // Should not check validation
      // if disabled
      if (!val && !this.isDisabled) {
        this.hasFocused = true;
        this.validateOnBlur && this.$nextTick(this.validate);
      }
    },

    isResetting() {
      setTimeout(() => {
        this.hasInput = false;
        this.hasFocused = false;
        this.isResetting = false;
        this.validate();
      }, 0);
    },

    hasError(val) {
      if (this.shouldValidate) {
        this.$emit('update:error', val);
      }
    },

    value(val) {
      this.lazyValue = val;
    }

  },

  beforeMount() {
    this.validate();
  },

  created() {
    this.form && this.form.register(this);
  },

  beforeDestroy() {
    this.form && this.form.unregister(this);
  },

  methods: {
    genInternalMessages(messages) {
      if (!messages) return [];else if (Array.isArray(messages)) return messages;else return [messages];
    },

    /** @public */
    reset() {
      this.isResetting = true;
      this.internalValue = Array.isArray(this.internalValue) ? [] : undefined;
    },

    /** @public */
    resetValidation() {
      this.isResetting = true;
    },

    /** @public */
    validate(force = false, value) {
      const errorBucket = [];
      value = value || this.internalValue;
      if (force) this.hasInput = this.hasFocused = true;

      for (let index = 0; index < this.rules.length; index++) {
        const rule = this.rules[index];
        const valid = typeof rule === 'function' ? rule(value) : rule;

        if (valid === false || typeof valid === 'string') {
          errorBucket.push(valid || '');
        } else if (typeof valid !== 'boolean') {
          Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* consoleError */ "b"])(`Rules should return a string or boolean, received '${typeof valid}' instead`, this);
        }
      }

      this.errorBucket = errorBucket;
      this.valid = errorBucket.length === 0;
      return this.valid;
    }

  }
}));

/***/ }),
/* 152 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 153 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VToolbarItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VToolbarTitle; });
/* harmony import */ var _VToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
// Components
 // Utilities


const VToolbarTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-toolbar__title');
const VToolbarItems = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-toolbar__items');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VToolbar: _VToolbar__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VToolbarItems,
    VToolbarTitle
  }
});

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTextField/VTextField.sass
var VTextField = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCounter/VCounter.sass
var VCounter = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCounter/VCounter.js
// Styles
 // Mixins



/* @vue/component */

/* harmony default export */ var VCounter_VCounter = (Object(mixins["a" /* default */])(themeable["a" /* default */]).extend({
  name: 'v-counter',
  functional: true,
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    max: [Number, String]
  },

  render(h, ctx) {
    const {
      props
    } = ctx;
    const max = parseInt(props.max, 10);
    const value = parseInt(props.value, 10);
    const content = max ? `${value} / ${max}` : String(props.value);
    const isGreater = max && value > max;
    return h('div', {
      staticClass: 'v-counter',
      class: {
        'error--text': isGreater,
        ...Object(themeable["b" /* functionalThemeClasses */])(ctx)
      }
    }, content);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCounter/index.js


/* harmony default export */ var components_VCounter = (VCounter_VCounter);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js + 1 modules
var VLabel = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/intersectable/index.js
// Directives
 // Utilities

 // Types


function intersectable(options) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // do nothing because intersection observer is not available
    return external_vue_default.a.extend({
      name: 'intersectable'
    });
  }

  return external_vue_default.a.extend({
    name: 'intersectable',

    mounted() {
      intersect["a" /* default */].inserted(this.$el, {
        name: 'intersect',
        value: this.onObserve
      });
    },

    destroyed() {
      intersect["a" /* default */].unbind(this.$el);
    },

    methods: {
      onObserve(entries, observer, isIntersecting) {
        if (!isIntersecting) return;

        for (let i = 0, length = options.onVisible.length; i < length; i++) {
          const callback = this[options.onVisible[i]];

          if (typeof callback === 'function') {
            callback();
            continue;
          }

          Object(console["c" /* consoleWarn */])(options.onVisible[i] + ' method is not available on the instance but referenced in intersectable mixin options');
        }
      }

    }
  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js
var loadable = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/validatable/index.js
var validatable = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
// Styles
 // Extensions

 // Components


 // Mixins



 // Directives

 // Utilities


 // Types


const baseMixins = Object(mixins["a" /* default */])(VInput["a" /* default */], intersectable({
  onVisible: ['setLabelWidth', 'setPrefixWidth', 'setPrependWidth', 'tryAutofocus']
}), loadable["a" /* default */]);
const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
/* @vue/component */

/* harmony default export */ var VTextField_VTextField = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-text-field',
  directives: {
    ripple: ripple["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    appendOuterIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    clearIcon: {
      type: String,
      default: '$clear'
    },
    counter: [Boolean, Number, String],
    counterValue: Function,
    filled: Boolean,
    flat: Boolean,
    fullWidth: Boolean,
    label: String,
    outlined: Boolean,
    placeholder: String,
    prefix: String,
    prependInnerIcon: String,
    reverse: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    singleLine: Boolean,
    solo: Boolean,
    soloInverted: Boolean,
    suffix: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: () => ({
    badInput: false,
    labelWidth: 0,
    prefixWidth: 0,
    prependWidth: 0,
    initialValue: null,
    isBooted: false,
    isClearing: false
  }),
  computed: {
    classes() {
      return { ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-text-field': true,
        'v-text-field--full-width': this.fullWidth,
        'v-text-field--prefix': this.prefix,
        'v-text-field--single-line': this.isSingle,
        'v-text-field--solo': this.isSolo,
        'v-text-field--solo-inverted': this.soloInverted,
        'v-text-field--solo-flat': this.flat,
        'v-text-field--filled': this.filled,
        'v-text-field--is-booted': this.isBooted,
        'v-text-field--enclosed': this.isEnclosed,
        'v-text-field--reverse': this.reverse,
        'v-text-field--outlined': this.outlined,
        'v-text-field--placeholder': this.placeholder,
        'v-text-field--rounded': this.rounded,
        'v-text-field--shaped': this.shaped
      };
    },

    computedColor() {
      const computedColor = validatable["a" /* default */].options.computed.computedColor.call(this);
      if (!this.soloInverted || !this.isFocused) return computedColor;
      return this.color || 'primary';
    },

    computedCounterValue() {
      if (typeof this.counterValue === 'function') {
        return this.counterValue(this.internalValue);
      }

      return (this.internalValue || '').toString().length;
    },

    hasCounter() {
      return this.counter !== false && this.counter != null;
    },

    hasDetails() {
      return VInput["a" /* default */].options.computed.hasDetails.call(this) || this.hasCounter;
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('input', this.lazyValue);
      }

    },

    isDirty() {
      var _this$lazyValue;

      return ((_this$lazyValue = this.lazyValue) == null ? void 0 : _this$lazyValue.toString().length) > 0 || this.badInput;
    },

    isEnclosed() {
      return this.filled || this.isSolo || this.outlined;
    },

    isLabelActive() {
      return this.isDirty || dirtyTypes.includes(this.type);
    },

    isSingle() {
      return this.isSolo || this.singleLine || this.fullWidth || // https://material.io/components/text-fields/#filled-text-field
      this.filled && !this.hasLabel;
    },

    isSolo() {
      return this.solo || this.soloInverted;
    },

    labelPosition() {
      let offset = this.prefix && !this.labelValue ? this.prefixWidth : 0;
      if (this.labelValue && this.prependWidth) offset -= this.prependWidth;
      return this.$vuetify.rtl === this.reverse ? {
        left: offset,
        right: 'auto'
      } : {
        left: 'auto',
        right: offset
      };
    },

    showLabel() {
      return this.hasLabel && (!this.isSingle || !this.isLabelActive && !this.placeholder);
    },

    labelValue() {
      return !this.isSingle && Boolean(this.isFocused || this.isLabelActive || this.placeholder);
    }

  },
  watch: {
    labelValue: 'setLabelWidth',
    outlined: 'setLabelWidth',

    label() {
      this.$nextTick(this.setLabelWidth);
    },

    prefix() {
      this.$nextTick(this.setPrefixWidth);
    },

    isFocused: 'updateValue',

    value(val) {
      this.lazyValue = val;
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('box')) {
      Object(console["a" /* breaking */])('box', 'filled', this);
    }
    /* istanbul ignore next */


    if (this.$attrs.hasOwnProperty('browser-autocomplete')) {
      Object(console["a" /* breaking */])('browser-autocomplete', 'autocomplete', this);
    }
    /* istanbul ignore if */


    if (this.shaped && !(this.filled || this.outlined || this.isSolo)) {
      Object(console["c" /* consoleWarn */])('shaped should be used with either filled or outlined', this);
    }
  },

  mounted() {
    this.autofocus && this.tryAutofocus();
    this.setLabelWidth();
    this.setPrefixWidth();
    this.setPrependWidth();
    requestAnimationFrame(() => this.isBooted = true);
  },

  methods: {
    /** @public */
    focus() {
      this.onFocus();
    },

    /** @public */
    blur(e) {
      // https://github.com/vuetifyjs/vuetify/issues/5913
      // Safari tab order gets broken if called synchronous
      window.requestAnimationFrame(() => {
        this.$refs.input && this.$refs.input.blur();
      });
    },

    clearableCallback() {
      this.$refs.input && this.$refs.input.focus();
      this.$nextTick(() => this.internalValue = null);
    },

    genAppendSlot() {
      const slot = [];

      if (this.$slots['append-outer']) {
        slot.push(this.$slots['append-outer']);
      } else if (this.appendOuterIcon) {
        slot.push(this.genIcon('appendOuter'));
      }

      return this.genSlot('append', 'outer', slot);
    },

    genPrependInnerSlot() {
      const slot = [];

      if (this.$slots['prepend-inner']) {
        slot.push(this.$slots['prepend-inner']);
      } else if (this.prependInnerIcon) {
        slot.push(this.genIcon('prependInner'));
      }

      return this.genSlot('prepend', 'inner', slot);
    },

    genIconSlot() {
      const slot = [];

      if (this.$slots['append']) {
        slot.push(this.$slots['append']);
      } else if (this.appendIcon) {
        slot.push(this.genIcon('append'));
      }

      return this.genSlot('append', 'inner', slot);
    },

    genInputSlot() {
      const input = VInput["a" /* default */].options.methods.genInputSlot.call(this);
      const prepend = this.genPrependInnerSlot();

      if (prepend) {
        input.children = input.children || [];
        input.children.unshift(prepend);
      }

      return input;
    },

    genClearIcon() {
      if (!this.clearable) return null;
      const data = this.isDirty ? undefined : {
        attrs: {
          disabled: true
        }
      };
      return this.genSlot('append', 'inner', [this.genIcon('clear', this.clearableCallback, data)]);
    },

    genCounter() {
      if (!this.hasCounter) return null;
      const max = this.counter === true ? this.attrs$.maxlength : this.counter;
      return this.$createElement(components_VCounter, {
        props: {
          dark: this.dark,
          light: this.light,
          max,
          value: this.computedCounterValue
        }
      });
    },

    genControl() {
      return VInput["a" /* default */].options.methods.genControl.call(this);
    },

    genDefaultSlot() {
      return [this.genFieldset(), this.genTextFieldSlot(), this.genClearIcon(), this.genIconSlot(), this.genProgress()];
    },

    genFieldset() {
      if (!this.outlined) return null;
      return this.$createElement('fieldset', {
        attrs: {
          'aria-hidden': true
        }
      }, [this.genLegend()]);
    },

    genLabel() {
      if (!this.showLabel) return null;
      const data = {
        props: {
          absolute: true,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: !this.isSingle && (this.isFocused || !!this.validationState),
          for: this.computedId,
          left: this.labelPosition.left,
          light: this.light,
          right: this.labelPosition.right,
          value: this.labelValue
        }
      };
      return this.$createElement(VLabel["a" /* default */], data, this.$slots.label || this.label);
    },

    genLegend() {
      const width = !this.singleLine && (this.labelValue || this.isDirty) ? this.labelWidth : 0;
      const span = this.$createElement('span', {
        domProps: {
          innerHTML: '&#8203;'
        }
      });
      return this.$createElement('legend', {
        style: {
          width: !this.isSingle ? Object(helpers["f" /* convertToUnit */])(width) : undefined
        }
      }, [span]);
    },

    genInput() {
      const listeners = Object.assign({}, this.listeners$);
      delete listeners['change']; // Change should not be bound externally

      return this.$createElement('input', {
        style: {},
        domProps: {
          value: this.type === 'number' && Object.is(this.lazyValue, -0) ? '-0' : this.lazyValue
        },
        attrs: { ...this.attrs$,
          autofocus: this.autofocus,
          disabled: this.isDisabled,
          id: this.computedId,
          placeholder: this.placeholder,
          readonly: this.isReadonly,
          type: this.type
        },
        on: Object.assign(listeners, {
          blur: this.onBlur,
          input: this.onInput,
          focus: this.onFocus,
          keydown: this.onKeyDown
        }),
        ref: 'input'
      });
    },

    genMessages() {
      if (!this.showDetails) return null;
      const messagesNode = VInput["a" /* default */].options.methods.genMessages.call(this);
      const counterNode = this.genCounter();
      return this.$createElement('div', {
        staticClass: 'v-text-field__details'
      }, [messagesNode, counterNode]);
    },

    genTextFieldSlot() {
      return this.$createElement('div', {
        staticClass: 'v-text-field__slot'
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, this.genInput(), this.suffix ? this.genAffix('suffix') : null]);
    },

    genAffix(type) {
      return this.$createElement('div', {
        class: `v-text-field__${type}`,
        ref: type
      }, this[type]);
    },

    onBlur(e) {
      this.isFocused = false;
      e && this.$nextTick(() => this.$emit('blur', e));
    },

    onClick() {
      if (this.isFocused || this.isDisabled || !this.$refs.input) return;
      this.$refs.input.focus();
    },

    onFocus(e) {
      if (!this.$refs.input) return;

      if (document.activeElement !== this.$refs.input) {
        return this.$refs.input.focus();
      }

      if (!this.isFocused) {
        this.isFocused = true;
        e && this.$emit('focus', e);
      }
    },

    onInput(e) {
      const target = e.target;
      this.internalValue = target.value;
      this.badInput = target.validity && target.validity.badInput;
    },

    onKeyDown(e) {
      if (e.keyCode === helpers["s" /* keyCodes */].enter) this.$emit('change', this.internalValue);
      this.$emit('keydown', e);
    },

    onMouseDown(e) {
      // Prevent input from being blurred
      if (e.target !== this.$refs.input) {
        e.preventDefault();
        e.stopPropagation();
      }

      VInput["a" /* default */].options.methods.onMouseDown.call(this, e);
    },

    onMouseUp(e) {
      if (this.hasMouseDown) this.focus();
      VInput["a" /* default */].options.methods.onMouseUp.call(this, e);
    },

    setLabelWidth() {
      if (!this.outlined) return;
      this.labelWidth = this.$refs.label ? Math.min(this.$refs.label.scrollWidth * 0.75 + 6, this.$el.offsetWidth - 24) : 0;
    },

    setPrefixWidth() {
      if (!this.$refs.prefix) return;
      this.prefixWidth = this.$refs.prefix.offsetWidth;
    },

    setPrependWidth() {
      if (!this.outlined || !this.$refs['prepend-inner']) return;
      this.prependWidth = this.$refs['prepend-inner'].offsetWidth;
    },

    tryAutofocus() {
      if (!this.autofocus || typeof document === 'undefined' || !this.$refs.input || document.activeElement === this.$refs.input) return false;
      this.$refs.input.focus();
      return true;
    },

    updateValue(val) {
      // Sets validationState from validatable
      this.hasColor = val;

      if (val) {
        this.initialValue = this.lazyValue;
      } else if (this.initialValue !== this.lazyValue) {
        this.$emit('change', this.lazyValue);
      }
    }

  }
}));

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);


/* harmony default export */ __webpack_exports__["a"] = (_VProgressLinear__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 157 */,
/* 158 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 159 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 160 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 161 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 162 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 163 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 164 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 165 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'comparable',
  props: {
    valueComparator: {
      type: Function,
      default: _util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* deepEqual */ "i"]
    }
  }
}));

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _mixins_detachable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var _mixins_menuable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(172);
/* harmony import */ var _mixins_returnable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67);
/* harmony import */ var _mixins_roundable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);
// Styles
 // Components

 // Mixins









 // Directives


 // Utilities




const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(_mixins_dependent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_detachable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_menuable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], _mixins_returnable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-menu',

  provide() {
    return {
      isInMenu: true,
      // Pass theme through to default slot
      theme: this.theme
    };
  },

  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]
  },
  props: {
    auto: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnContentClick: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    disableKeys: Boolean,
    maxHeight: {
      type: [Number, String],
      default: 'auto'
    },
    offsetX: Boolean,
    offsetY: Boolean,
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnHover: Boolean,
    origin: {
      type: String,
      default: 'top left'
    },
    transition: {
      type: [Boolean, String],
      default: 'v-menu-transition'
    }
  },

  data() {
    return {
      calculatedTopAuto: 0,
      defaultOffset: 8,
      hasJustFocused: false,
      listIndex: -1,
      resizeTimeout: 0,
      selectedIndex: null,
      tiles: []
    };
  },

  computed: {
    activeTile() {
      return this.tiles[this.listIndex];
    },

    calculatedLeft() {
      const menuWidth = Math.max(this.dimensions.content.width, parseFloat(this.calculatedMinWidth));
      if (!this.auto) return this.calcLeft(menuWidth) || '0';
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* convertToUnit */ "f"])(this.calcXOverflow(this.calcLeftAuto(), menuWidth)) || '0';
    },

    calculatedMaxHeight() {
      const height = this.auto ? '200px' : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* convertToUnit */ "f"])(this.maxHeight);
      return height || '0';
    },

    calculatedMaxWidth() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* convertToUnit */ "f"])(this.maxWidth) || '0';
    },

    calculatedMinWidth() {
      if (this.minWidth) {
        return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* convertToUnit */ "f"])(this.minWidth) || '0';
      }

      const minWidth = Math.min(this.dimensions.activator.width + Number(this.nudgeWidth) + (this.auto ? 16 : 0), Math.max(this.pageWidth - 24, 0));
      const calculatedMaxWidth = isNaN(parseInt(this.calculatedMaxWidth)) ? minWidth : parseInt(this.calculatedMaxWidth);
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* convertToUnit */ "f"])(Math.min(calculatedMaxWidth, minWidth)) || '0';
    },

    calculatedTop() {
      const top = !this.auto ? this.calcTop() : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* convertToUnit */ "f"])(this.calcYOverflow(this.calculatedTopAuto));
      return top || '0';
    },

    hasClickableTiles() {
      return Boolean(this.tiles.find(tile => tile.tabIndex > -1));
    },

    styles() {
      return {
        maxHeight: this.calculatedMaxHeight,
        minWidth: this.calculatedMinWidth,
        maxWidth: this.calculatedMaxWidth,
        top: this.calculatedTop,
        left: this.calculatedLeft,
        transformOrigin: this.origin,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },
  watch: {
    isActive(val) {
      if (!val) this.listIndex = -1;
    },

    isContentActive(val) {
      this.hasJustFocused = val;
    },

    listIndex(next, prev) {
      if (next in this.tiles) {
        const tile = this.tiles[next];
        tile.classList.add('v-list-item--highlighted');
        this.$refs.content.scrollTop = tile.offsetTop - tile.clientHeight;
      }

      prev in this.tiles && this.tiles[prev].classList.remove('v-list-item--highlighted');
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_14__[/* removed */ "e"])('full-width', this);
    }
  },

  mounted() {
    this.isActive && this.callActivate();
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(() => {
        // Once transitioning, calculate scroll and top position
        this.startTransition().then(() => {
          if (this.$refs.content) {
            this.calculatedTopAuto = this.calcTopAuto();
            this.auto && (this.$refs.content.scrollTop = this.calcScrollPosition());
          }
        });
      });
    },

    calcScrollPosition() {
      const $el = this.$refs.content;
      const activeTile = $el.querySelector('.v-list-item--active');
      const maxScrollTop = $el.scrollHeight - $el.offsetHeight;
      return activeTile ? Math.min(maxScrollTop, Math.max(0, activeTile.offsetTop - $el.offsetHeight / 2 + activeTile.offsetHeight / 2)) : $el.scrollTop;
    },

    calcLeftAuto() {
      return parseInt(this.dimensions.activator.left - this.defaultOffset * 2);
    },

    calcTopAuto() {
      const $el = this.$refs.content;
      const activeTile = $el.querySelector('.v-list-item--active');

      if (!activeTile) {
        this.selectedIndex = null;
      }

      if (this.offsetY || !activeTile) {
        return this.computedTop;
      }

      this.selectedIndex = Array.from(this.tiles).indexOf(activeTile);
      const tileDistanceFromMenuTop = activeTile.offsetTop - this.calcScrollPosition();
      const firstTileOffsetTop = $el.querySelector('.v-list-item').offsetTop;
      return this.computedTop - tileDistanceFromMenuTop - firstTileOffsetTop - 1;
    },

    changeListIndex(e) {
      // For infinite scroll and autocomplete, re-evaluate children
      this.getTiles();

      if (!this.isActive || !this.hasClickableTiles) {
        return;
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* keyCodes */ "s"].tab) {
        this.isActive = false;
        return;
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* keyCodes */ "s"].down) {
        this.nextTile();
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* keyCodes */ "s"].up) {
        this.prevTile();
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* keyCodes */ "s"].enter && this.listIndex !== -1) {
        this.tiles[this.listIndex].click();
      } else {
        return;
      } // One of the conditions was met, prevent default action (#2988)


      e.preventDefault();
    },

    closeConditional(e) {
      const target = e.target;
      return this.isActive && !this._isDestroyed && this.closeOnClick && !this.$refs.content.contains(target);
    },

    genActivatorAttributes() {
      const attributes = _mixins_activatable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genActivatorAttributes.call(this);

      if (this.activeTile && this.activeTile.id) {
        return { ...attributes,
          'aria-activedescendant': this.activeTile.id
        };
      }

      return attributes;
    },

    genActivatorListeners() {
      const listeners = _mixins_menuable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].options.methods.genActivatorListeners.call(this);

      if (!this.disableKeys) {
        listeners.keydown = this.onKeyDown;
      }

      return listeners;
    },

    genTransition() {
      const content = this.genContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [content]);
    },

    genDirectives() {
      const directives = [{
        name: 'show',
        value: this.isContentActive
      }]; // Do not add click outside for hover menu

      if (!this.openOnHover && this.closeOnClick) {
        directives.push({
          name: 'click-outside',
          value: {
            handler: () => {
              this.isActive = false;
            },
            closeConditional: this.closeConditional,
            include: () => [this.$el, ...this.getOpenDependentElements()]
          }
        });
      }

      return directives;
    },

    genContent() {
      const options = {
        attrs: { ...this.getScopeIdAttrs(),
          role: 'role' in this.$attrs ? this.$attrs.role : 'menu'
        },
        staticClass: 'v-menu__content',
        class: { ...this.rootThemeClasses,
          ...this.roundedClasses,
          'v-menu__content--auto': this.auto,
          'v-menu__content--fixed': this.activatorFixed,
          menuable__content__active: this.isActive,
          [this.contentClass.trim()]: true
        },
        style: this.styles,
        directives: this.genDirectives(),
        ref: 'content',
        on: {
          click: e => {
            const target = e.target;
            if (target.getAttribute('disabled')) return;
            if (this.closeOnContentClick) this.isActive = false;
          },
          keydown: this.onKeyDown
        }
      };

      if (this.$listeners.scroll) {
        options.on = options.on || {};
        options.on.scroll = this.$listeners.scroll;
      }

      if (!this.disabled && this.openOnHover) {
        options.on = options.on || {};
        options.on.mouseenter = this.mouseEnterHandler;
      }

      if (this.openOnHover) {
        options.on = options.on || {};
        options.on.mouseleave = this.mouseLeaveHandler;
      }

      return this.$createElement('div', options, this.getContentSlot());
    },

    getTiles() {
      if (!this.$refs.content) return;
      this.tiles = Array.from(this.$refs.content.querySelectorAll('.v-list-item'));
    },

    mouseEnterHandler() {
      this.runDelay('open', () => {
        if (this.hasJustFocused) return;
        this.hasJustFocused = true;
        this.isActive = true;
      });
    },

    mouseLeaveHandler(e) {
      // Prevent accidental re-activation
      this.runDelay('close', () => {
        if (this.$refs.content.contains(e.relatedTarget)) return;
        requestAnimationFrame(() => {
          this.isActive = false;
          this.callDeactivate();
        });
      });
    },

    nextTile() {
      const tile = this.tiles[this.listIndex + 1];

      if (!tile) {
        if (!this.tiles.length) return;
        this.listIndex = -1;
        this.nextTile();
        return;
      }

      this.listIndex++;
      if (tile.tabIndex === -1) this.nextTile();
    },

    prevTile() {
      const tile = this.tiles[this.listIndex - 1];

      if (!tile) {
        if (!this.tiles.length) return;
        this.listIndex = this.tiles.length;
        this.prevTile();
        return;
      }

      this.listIndex--;
      if (tile.tabIndex === -1) this.prevTile();
    },

    onKeyDown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* keyCodes */ "s"].esc) {
        // Wait for dependent elements to close first
        setTimeout(() => {
          this.isActive = false;
        });
        const activator = this.getActivator();
        this.$nextTick(() => activator && activator.focus());
      } else if (!this.isActive && [_util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* keyCodes */ "s"].up, _util_helpers__WEBPACK_IMPORTED_MODULE_15__[/* keyCodes */ "s"].down].includes(e.keyCode)) {
        this.isActive = true;
      } // Allow for isActive watcher to generate tile list


      this.$nextTick(() => this.changeListIndex(e));
    },

    onResize() {
      if (!this.isActive) return; // Account for screen resize
      // and orientation change
      // eslint-disable-next-line no-unused-expressions

      this.$refs.content.offsetWidth;
      this.updateDimensions(); // When resizing to a smaller width
      // content width is evaluated before
      // the new activator width has been
      // set, causing it to not size properly
      // hacky but will revisit in the future

      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.updateDimensions, 100);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-menu',
      class: {
        'v-menu--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      },
      directives: [{
        arg: '500',
        name: 'resize',
        value: this.onResize
      }]
    };
    return h('div', data, [!this.activator && this.genActivator(), this.showLazyContent(() => [this.$createElement(_VThemeProvider__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      props: {
        root: true,
        light: this.light,
        dark: this.dark
      }
    }, [this.genTransition()])])]);
  }

}));

/***/ }),
/* 168 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);


/* harmony default export */ __webpack_exports__["a"] = (_VMenu__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _stackable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _activatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
// Mixins


 // Utilities


 // Types

const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_stackable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _positionable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _activatable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'menuable',
  props: {
    allowOverflow: Boolean,
    light: Boolean,
    dark: Boolean,
    maxWidth: {
      type: [Number, String],
      default: 'auto'
    },
    minWidth: [Number, String],
    nudgeBottom: {
      type: [Number, String],
      default: 0
    },
    nudgeLeft: {
      type: [Number, String],
      default: 0
    },
    nudgeRight: {
      type: [Number, String],
      default: 0
    },
    nudgeTop: {
      type: [Number, String],
      default: 0
    },
    nudgeWidth: {
      type: [Number, String],
      default: 0
    },
    offsetOverflow: Boolean,
    openOnClick: Boolean,
    positionX: {
      type: Number,
      default: null
    },
    positionY: {
      type: Number,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: null
    }
  },
  data: () => ({
    absoluteX: 0,
    absoluteY: 0,
    activatedBy: null,
    activatorFixed: false,
    dimensions: {
      activator: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollHeight: 0,
        offsetLeft: 0
      },
      content: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollHeight: 0
      }
    },
    hasJustFocused: false,
    hasWindow: false,
    inputActivator: false,
    isContentActive: false,
    pageWidth: 0,
    pageYOffset: 0,
    stackClass: 'v-menu__content--active',
    stackMinZIndex: 6
  }),
  computed: {
    computedLeft() {
      const a = this.dimensions.activator;
      const c = this.dimensions.content;
      const activatorLeft = (this.attach !== false ? a.offsetLeft : a.left) || 0;
      const minWidth = Math.max(a.width, c.width);
      let left = 0;
      left += this.left ? activatorLeft - (minWidth - a.width) : activatorLeft;

      if (this.offsetX) {
        const maxWidth = isNaN(Number(this.maxWidth)) ? a.width : Math.min(a.width, Number(this.maxWidth));
        left += this.left ? -maxWidth : a.width;
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return left;
    },

    computedTop() {
      const a = this.dimensions.activator;
      const c = this.dimensions.content;
      let top = 0;
      if (this.top) top += a.height - c.height;
      if (this.attach !== false) top += a.offsetTop;else top += a.top + this.pageYOffset;
      if (this.offsetY) top += this.top ? -a.height : a.height;
      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return top;
    },

    hasActivator() {
      return !!this.$slots.activator || !!this.$scopedSlots.activator || !!this.activator || !!this.inputActivator;
    }

  },
  watch: {
    disabled(val) {
      val && this.callDeactivate();
    },

    isActive(val) {
      if (this.disabled) return;
      val ? this.callActivate() : this.callDeactivate();
    },

    positionX: 'updateDimensions',
    positionY: 'updateDimensions'
  },

  beforeMount() {
    this.hasWindow = typeof window !== 'undefined';
  },

  methods: {
    absolutePosition() {
      return {
        offsetTop: 0,
        offsetLeft: 0,
        scrollHeight: 0,
        top: this.positionY || this.absoluteY,
        bottom: this.positionY || this.absoluteY,
        left: this.positionX || this.absoluteX,
        right: this.positionX || this.absoluteX,
        height: 0,
        width: 0
      };
    },

    activate() {},

    calcLeft(menuWidth) {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* convertToUnit */ "f"])(this.attach !== false ? this.computedLeft : this.calcXOverflow(this.computedLeft, menuWidth));
    },

    calcTop() {
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* convertToUnit */ "f"])(this.attach !== false ? this.computedTop : this.calcYOverflow(this.computedTop));
    },

    calcXOverflow(left, menuWidth) {
      const xOverflow = left + menuWidth - this.pageWidth + 12;

      if ((!this.left || this.right) && xOverflow > 0) {
        left = Math.max(left - xOverflow, 0);
      } else {
        left = Math.max(left, 12);
      }

      return left + this.getOffsetLeft();
    },

    calcYOverflow(top) {
      const documentHeight = this.getInnerHeight();
      const toTop = this.pageYOffset + documentHeight;
      const activator = this.dimensions.activator;
      const contentHeight = this.dimensions.content.height;
      const totalHeight = top + contentHeight;
      const isOverflowing = toTop < totalHeight; // If overflowing bottom and offset
      // TODO: set 'bottom' position instead of 'top'

      if (isOverflowing && this.offsetOverflow && // If we don't have enough room to offset
      // the overflow, don't offset
      activator.top > contentHeight) {
        top = this.pageYOffset + (activator.top - contentHeight); // If overflowing bottom
      } else if (isOverflowing && !this.allowOverflow) {
        top = toTop - contentHeight - 12; // If overflowing top
      } else if (top < this.pageYOffset && !this.allowOverflow) {
        top = this.pageYOffset + 12;
      }

      return top < 12 ? 12 : top;
    },

    callActivate() {
      if (!this.hasWindow) return;
      this.activate();
    },

    callDeactivate() {
      this.isContentActive = false;
      this.deactivate();
    },

    checkForPageYOffset() {
      if (this.hasWindow) {
        this.pageYOffset = this.activatorFixed ? 0 : this.getOffsetTop();
      }
    },

    checkActivatorFixed() {
      if (this.attach !== false) return;
      let el = this.getActivator();

      while (el) {
        if (window.getComputedStyle(el).position === 'fixed') {
          this.activatorFixed = true;
          return;
        }

        el = el.offsetParent;
      }

      this.activatorFixed = false;
    },

    deactivate() {},

    genActivatorListeners() {
      const listeners = _activatable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genActivatorListeners.call(this);
      const onClick = listeners.click;

      listeners.click = e => {
        if (this.openOnClick) {
          onClick && onClick(e);
        }

        this.absoluteX = e.clientX;
        this.absoluteY = e.clientY;
      };

      return listeners;
    },

    getInnerHeight() {
      if (!this.hasWindow) return 0;
      return window.innerHeight || document.documentElement.clientHeight;
    },

    getOffsetLeft() {
      if (!this.hasWindow) return 0;
      return window.pageXOffset || document.documentElement.scrollLeft;
    },

    getOffsetTop() {
      if (!this.hasWindow) return 0;
      return window.pageYOffset || document.documentElement.scrollTop;
    },

    getRoundedBoundedClientRect(el) {
      const rect = el.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        bottom: Math.round(rect.bottom),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    },

    measure(el) {
      if (!el || !this.hasWindow) return null;
      const rect = this.getRoundedBoundedClientRect(el); // Account for activator margin

      if (this.attach !== false) {
        const style = window.getComputedStyle(el);
        rect.left = parseInt(style.marginLeft);
        rect.top = parseInt(style.marginTop);
      }

      return rect;
    },

    sneakPeek(cb) {
      requestAnimationFrame(() => {
        const el = this.$refs.content;

        if (!el || el.style.display !== 'none') {
          cb();
          return;
        }

        el.style.display = 'inline-block';
        cb();
        el.style.display = 'none';
      });
    },

    startTransition() {
      return new Promise(resolve => requestAnimationFrame(() => {
        this.isContentActive = this.hasJustFocused = this.isActive;
        resolve();
      }));
    },

    updateDimensions() {
      this.hasWindow = typeof window !== 'undefined';
      this.checkActivatorFixed();
      this.checkForPageYOffset();
      this.pageWidth = document.documentElement.clientWidth;
      const dimensions = {
        activator: { ...this.dimensions.activator
        },
        content: { ...this.dimensions.content
        }
      }; // Activator should already be shown

      if (!this.hasActivator || this.absolute) {
        dimensions.activator = this.absolutePosition();
      } else {
        const activator = this.getActivator();
        if (!activator) return;
        dimensions.activator = this.measure(activator);
        dimensions.activator.offsetLeft = activator.offsetLeft;

        if (this.attach !== false) {
          // account for css padding causing things to not line up
          // this is mostly for v-autocomplete, hopefully it won't break anything
          dimensions.activator.offsetTop = activator.offsetTop;
        } else {
          dimensions.activator.offsetTop = 0;
        }
      } // Display and hide to get dimensions


      this.sneakPeek(() => {
        this.$refs.content && (dimensions.content = this.measure(this.$refs.content));
        this.dimensions = dimensions;
      });
    }

  }
}));

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'transitionable',
  props: {
    mode: String,
    origin: String,
    transition: String
  }
}));

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 175 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 176 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 177 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 178 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 179 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(181)(module)))

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 182 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 183 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 184 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VWindow/VWindow.sass
var VWindow = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindow.js
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ var VWindow_VWindow = (VItemGroup["a" /* BaseItemGroup */].extend({
  name: 'v-window',

  provide() {
    return {
      windowGroup: this
    };
  },

  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: {
      type: Boolean,
      default: undefined
    },
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },

  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },

  computed: {
    isActive() {
      return this.transitionCount > 0;
    },

    classes() {
      return { ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },

    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.$vuetify.rtl && axis === 'x' ? !this.internalReverse : this.internalReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },

    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },

    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },

    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },

    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },

    internalReverse() {
      return this.reverse ? !this.isReverse : this.isReverse;
    }

  },
  watch: {
    internalIndex: 'updateReverse'
  },

  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },

  methods: {
    genContainer() {
      const children = [this.$slots.default];

      if (this.showArrows) {
        children.push(this.genControlIcons());
      }

      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },

    genIcon(direction, icon, fn) {
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, [this.$createElement(VBtn["a" /* default */], {
        props: {
          icon: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
        },
        on: {
          click: () => {
            this.changedByDelimiters = true;
            fn();
          }
        }
      }, [this.$createElement(VIcon["a" /* default */], {
        props: {
          large: true
        }
      }, icon)])]);
    },

    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }

      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }

      return icons;
    },

    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },

    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },

    next() {
      this.isReverse = this.$vuetify.rtl;
      /* istanbul ignore if */

      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },

    prev() {
      this.isReverse = !this.$vuetify.rtl;
      /* istanbul ignore if */

      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },

    updateReverse(val, oldVal) {
      if (this.changedByDelimiters) {
        this.changedByDelimiters = false;
        return;
      }

      this.isReverse = val < oldVal;
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };

    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }

    return h('div', data, [this.genContainer()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js
// Extensions
 // Types & Components


/* @vue/component */

/* harmony default export */ var VTabsItems = __webpack_exports__["a"] = (VWindow_VWindow.extend({
  name: 'v-tabs-items',
  props: {
    mandatory: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return { ...VWindow_VWindow.options.computed.classes.call(this),
        'v-tabs-items': true
      };
    },

    isDark() {
      return this.rootIsDark;
    }

  },
  methods: {
    getValue(item, i) {
      return item.id || VItemGroup["a" /* BaseItemGroup */].options.methods.getValue.call(this, item, i);
    }

  }
}));

/***/ }),
/* 186 */,
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VAppBar_VAppBar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _src_components_VAppBar_VAppBar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VAppBar_VAppBar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony import */ var _directives_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _mixins_applicationable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _mixins_scrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
// Styles
 // Extensions

 // Directives

 // Mixins




 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_scrollable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_mixins_applicationable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('top', ['clippedLeft', 'clippedRight', 'computedHeight', 'invertedScroll', 'isExtended', 'isProminent', 'value']));
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-app-bar',
  directives: {
    Scroll: _directives_scroll__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]
  },
  props: {
    clippedLeft: Boolean,
    clippedRight: Boolean,
    collapseOnScroll: Boolean,
    elevateOnScroll: Boolean,
    fadeImgOnScroll: Boolean,
    hideOnScroll: Boolean,
    invertedScroll: Boolean,
    scrollOffScreen: Boolean,
    shrinkOnScroll: Boolean,
    value: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isActive: this.value
    };
  },

  computed: {
    applicationProperty() {
      return !this.bottom ? 'top' : 'bottom';
    },

    canScroll() {
      return _mixins_scrollable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].options.computed.canScroll.call(this) && (this.invertedScroll || this.elevateOnScroll || this.hideOnScroll || this.collapseOnScroll || this.isBooted || // If falsey, user has provided an
      // explicit value which should
      // overwrite anything we do
      !this.value);
    },

    classes() {
      return { ..._VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-toolbar--collapse': this.collapse || this.collapseOnScroll,
        'v-app-bar': true,
        'v-app-bar--clipped': this.clippedLeft || this.clippedRight,
        'v-app-bar--fade-img-on-scroll': this.fadeImgOnScroll,
        'v-app-bar--elevate-on-scroll': this.elevateOnScroll,
        'v-app-bar--fixed': !this.absolute && (this.app || this.fixed),
        'v-app-bar--hide-shadow': this.hideShadow,
        'v-app-bar--is-scrolled': this.currentScroll > 0,
        'v-app-bar--shrink-on-scroll': this.shrinkOnScroll
      };
    },

    computedContentHeight() {
      if (!this.shrinkOnScroll) return _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.computedContentHeight.call(this);
      const height = this.computedOriginalHeight;
      const min = this.dense ? 48 : 56;
      const max = height;
      const difference = max - min;
      const iteration = difference / this.computedScrollThreshold;
      const offset = this.currentScroll * iteration;
      return Math.max(min, max - offset);
    },

    computedFontSize() {
      if (!this.isProminent) return undefined;
      const max = this.dense ? 96 : 128;
      const difference = max - this.computedContentHeight;
      const increment = 0.00347; // 1.5rem to a minimum of 1.25rem

      return Number((1.50 - difference * increment).toFixed(2));
    },

    computedLeft() {
      if (!this.app || this.clippedLeft) return 0;
      return this.$vuetify.application.left;
    },

    computedMarginTop() {
      if (!this.app) return 0;
      return this.$vuetify.application.bar;
    },

    computedOpacity() {
      if (!this.fadeImgOnScroll) return undefined;
      const opacity = Math.max((this.computedScrollThreshold - this.currentScroll) / this.computedScrollThreshold, 0);
      return Number(parseFloat(opacity).toFixed(2));
    },

    computedOriginalHeight() {
      let height = _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.computedContentHeight.call(this);
      if (this.isExtended) height += parseInt(this.extensionHeight);
      return height;
    },

    computedRight() {
      if (!this.app || this.clippedRight) return 0;
      return this.$vuetify.application.right;
    },

    computedScrollThreshold() {
      if (this.scrollThreshold) return Number(this.scrollThreshold);
      return this.computedOriginalHeight - (this.dense ? 48 : 56);
    },

    computedTransform() {
      if (!this.canScroll || this.elevateOnScroll && this.currentScroll === 0 && this.isActive) return 0;
      if (this.isActive) return 0;
      const scrollOffScreen = this.scrollOffScreen ? this.computedHeight : this.computedContentHeight;
      return this.bottom ? scrollOffScreen : -scrollOffScreen;
    },

    hideShadow() {
      if (this.elevateOnScroll && this.isExtended) {
        return this.currentScroll < this.computedScrollThreshold;
      }

      if (this.elevateOnScroll) {
        return this.currentScroll === 0 || this.computedTransform < 0;
      }

      return (!this.isExtended || this.scrollOffScreen) && this.computedTransform !== 0;
    },

    isCollapsed() {
      if (!this.collapseOnScroll) {
        return _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.isCollapsed.call(this);
      }

      return this.currentScroll > 0;
    },

    isProminent() {
      return _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.isProminent.call(this) || this.shrinkOnScroll;
    },

    styles() {
      return { ..._VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        fontSize: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(this.computedFontSize, 'rem'),
        marginTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(this.computedMarginTop),
        transform: `translateY(${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(this.computedTransform)})`,
        left: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(this.computedLeft),
        right: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(this.computedRight)
      };
    }

  },
  watch: {
    canScroll: 'onScroll',

    computedTransform() {
      // Normally we do not want the v-app-bar
      // to update the application top value
      // to avoid screen jump. However, in
      // this situation, we must so that
      // the clipped drawer can update
      // its top value when scrolled
      if (!this.canScroll || !this.clippedLeft && !this.clippedRight) return;
      this.callUpdate();
    },

    invertedScroll(val) {
      this.isActive = !val || this.currentScroll !== 0;
    }

  },

  created() {
    if (this.invertedScroll) this.isActive = false;
  },

  methods: {
    genBackground() {
      const render = _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genBackground.call(this);
      render.data = this._b(render.data || {}, render.tag, {
        style: {
          opacity: this.computedOpacity
        }
      });
      return render;
    },

    updateApplication() {
      return this.invertedScroll ? 0 : this.computedHeight + this.computedTransform;
    },

    thresholdMet() {
      if (this.invertedScroll) {
        this.isActive = this.currentScroll > this.computedScrollThreshold;
        return;
      }

      if (this.hideOnScroll) {
        this.isActive = this.isScrollingUp || this.currentScroll < this.computedScrollThreshold;
      }

      if (this.currentThreshold < this.computedScrollThreshold) return;
      this.savedScroll = this.currentScroll;
    }

  },

  render(h) {
    const render = _VToolbar_VToolbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.render.call(this, h);
    render.data = render.data || {};

    if (this.canScroll) {
      render.data.directives = render.data.directives || [];
      render.data.directives.push({
        arg: this.scrollTarget,
        name: 'scroll',
        value: this.onScroll
      });
    }

    return render;
  }

}));

/***/ }),
/* 188 */,
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VMain/VMain.sass
var VMain = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js
var ssr_bootable = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
// Styles
 // Mixins


/* @vue/component */

/* harmony default export */ var VMain_VMain = (ssr_bootable["a" /* default */].extend({
  name: 'v-main',
  props: {
    tag: {
      type: String,
      default: 'main'
    }
  },
  computed: {
    styles() {
      const {
        bar,
        top,
        right,
        footer,
        insetFooter,
        bottom,
        left
      } = this.$vuetify.application;
      return {
        paddingTop: `${top + bar}px`,
        paddingRight: `${right}px`,
        paddingBottom: `${footer + insetFooter + bottom}px`,
        paddingLeft: `${left}px`
      };
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-main',
      style: this.styles,
      ref: 'main'
    };
    return h(this.tag, data, [h('div', {
      staticClass: 'v-main__wrap'
    }, this.$slots.default)]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VContent/VContent.js
// Extensions


/* @vue/component */

/* harmony default export */ var VContent = __webpack_exports__["a"] = (VMain_VMain.extend({
  name: 'v-main',

  created() {
    Object(console["d" /* deprecate */])('v-content', 'v-main', this);
  },

  render(h) {
    // Add the legacy class names
    const node = VMain_VMain.options.render.call(this, h);
    node.data.staticClass += ' v-content';
    node.children[0].data.staticClass += ' v-content__wrap';
    return h(node.tag, node.data, node.children);
  }

}));

/***/ }),
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('spacer', 'div', 'v-spacer'));

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);




/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('container').extend({
  name: 'v-container',
  functional: true,
  props: {
    id: String,
    tag: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },

  render(h, {
    props,
    data,
    children
  }) {
    let classes;
    const {
      attrs
    } = data;

    if (attrs) {
      // reset attrs to extract utility clases like pa-3
      data.attrs = {};
      classes = Object.keys(attrs).filter(key => {
        // TODO: Remove once resolved
        // https://github.com/vuejs/vue/issues/7841
        if (key === 'slot') return false;
        const value = attrs[key]; // add back data attributes like data-test="foo" but do not
        // add them as classes

        if (key.startsWith('data-')) {
          data.attrs[key] = value;
          return false;
        }

        return value || typeof value === 'string';
      });
    }

    if (props.id) {
      data.domProps = data.domProps || {};
      data.domProps.id = props.id;
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(data, {
      staticClass: 'container',
      class: Array({
        'container--fluid': props.fluid
      }).concat(classes || [])
    }), children);
  }

}));

/***/ }),
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ defaultMenuProps; });

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTextField/VTextField.sass
var VTextField = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSelect/VSelect.sass
var VSelect = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VChip/VChip.sass
var VChip = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/sizeable/index.js
var sizeable = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
// Styles

 // Components


 // Mixins






 // Utilities


/* @vue/component */

/* harmony default export */ var VChip_VChip = (Object(mixins["a" /* default */])(colorable["a" /* default */], sizeable["a" /* default */], routable["a" /* default */], themeable["a" /* default */], Object(groupable["a" /* factory */])('chipGroup'), Object(toggleable["b" /* factory */])('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,

      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }

    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ...routable["a" /* default */].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },

    hasClose() {
      return Boolean(this.close);
    },

    isClickable() {
      return Boolean(routable["a" /* default */].options.computed.isClickable.call(this) || this.chipGroup);
    }

  },

  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(console["a" /* breaking */])(original, replacement, this);
    });
  },

  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },

    genFilter() {
      const children = [];

      if (this.isActive) {
        children.push(this.$createElement(VIcon["a" /* default */], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }

      return this.$createElement(transitions["b" /* VExpandXTransition */], children);
    },

    genClose() {
      return this.$createElement(VIcon["a" /* default */], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },

    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()]);
    }

  },

  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VChip/index.js


/* harmony default export */ var components_VChip = (VChip_VChip);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js
var VMenu = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass
var VSimpleCheckbox = __webpack_require__(177);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var directives_ripple = __webpack_require__(17);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon_VIcon = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js



 // Mixins


 // Utilities



/* harmony default export */ var VCheckbox_VSimpleCheckbox = (external_vue_default.a.extend({
  name: 'v-simple-checkbox',
  functional: true,
  directives: {
    ripple: directives_ripple["a" /* default */]
  },
  props: { ...colorable["a" /* default */].options.props,
    ...themeable["a" /* default */].options.props,
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    value: Boolean,
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    }
  },

  render(h, {
    props,
    data,
    listeners
  }) {
    const children = [];

    if (props.ripple && !props.disabled) {
      const ripple = h('div', colorable["a" /* default */].options.methods.setTextColor(props.color, {
        staticClass: 'v-input--selection-controls__ripple',
        directives: [{
          name: 'ripple',
          value: {
            center: true
          }
        }]
      }));
      children.push(ripple);
    }

    let icon = props.offIcon;
    if (props.indeterminate) icon = props.indeterminateIcon;else if (props.value) icon = props.onIcon;
    children.push(h(VIcon_VIcon["a" /* default */], colorable["a" /* default */].options.methods.setTextColor(props.value && props.color, {
      props: {
        disabled: props.disabled,
        dark: props.dark,
        light: props.light
      }
    }), icon));
    const classes = {
      'v-simple-checkbox': true,
      'v-simple-checkbox--disabled': props.disabled
    };
    return h('div', Object(mergeData["a" /* default */])(data, {
      class: classes,
      on: {
        click: e => {
          e.stopPropagation();

          if (data.on && data.on.input && !props.disabled) {
            Object(helpers["z" /* wrapInArray */])(data.on.input).forEach(f => f(!props.value));
          }
        }
      }
    }), children);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/index.js
var VDivider = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSubheader/index.js
var VSubheader = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var VList = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList_VList = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelectList.js
// Components



 // Directives

 // Mixins


 // Helpers

 // Types


/* @vue/component */

/* harmony default export */ var VSelectList = (Object(mixins["a" /* default */])(colorable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-select-list',
  // https://github.com/vuejs/vue/issues/6872
  directives: {
    ripple: directives_ripple["a" /* default */]
  },
  props: {
    action: Boolean,
    dense: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: 'disabled'
    },
    itemText: {
      type: [String, Array, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Array, Function],
      default: 'value'
    },
    noDataText: String,
    noFilter: Boolean,
    searchInput: null,
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    parsedItems() {
      return this.selectedItems.map(item => this.getValue(item));
    },

    tileActiveClass() {
      return Object.keys(this.setTextColor(this.color).class || {}).join(' ');
    },

    staticNoDataTile() {
      const tile = {
        attrs: {
          role: undefined
        },
        on: {
          mousedown: e => e.preventDefault()
        }
      };
      return this.$createElement(VListItem["a" /* default */], tile, [this.genTileContent(this.noDataText)]);
    }

  },
  methods: {
    genAction(item, inputValue) {
      return this.$createElement(VListItemAction["a" /* default */], [this.$createElement(VCheckbox_VSimpleCheckbox, {
        props: {
          color: this.color,
          value: inputValue
        },
        on: {
          input: () => this.$emit('select', item)
        }
      })]);
    },

    genDivider(props) {
      return this.$createElement(VDivider["a" /* default */], {
        props
      });
    },

    genFilteredText(text) {
      text = text || '';
      if (!this.searchInput || this.noFilter) return Object(helpers["j" /* escapeHTML */])(text);
      const {
        start,
        middle,
        end
      } = this.getMaskedCharacters(text);
      return `${Object(helpers["j" /* escapeHTML */])(start)}${this.genHighlight(middle)}${Object(helpers["j" /* escapeHTML */])(end)}`;
    },

    genHeader(props) {
      return this.$createElement(VSubheader["a" /* default */], {
        props
      }, props.header);
    },

    genHighlight(text) {
      return `<span class="v-list-item__mask">${Object(helpers["j" /* escapeHTML */])(text)}</span>`;
    },

    getMaskedCharacters(text) {
      const searchInput = (this.searchInput || '').toString().toLocaleLowerCase();
      const index = text.toLocaleLowerCase().indexOf(searchInput);
      if (index < 0) return {
        start: '',
        middle: text,
        end: ''
      };
      const start = text.slice(0, index);
      const middle = text.slice(index, index + searchInput.length);
      const end = text.slice(index + searchInput.length);
      return {
        start,
        middle,
        end
      };
    },

    genTile({
      item,
      index,
      disabled = null,
      value = false
    }) {
      if (!value) value = this.hasItem(item);

      if (item === Object(item)) {
        disabled = disabled !== null ? disabled : this.getDisabled(item);
      }

      const tile = {
        attrs: {
          // Default behavior in list does not
          // contain aria-selected by default
          'aria-selected': String(value),
          id: `list-item-${this._uid}-${index}`,
          role: 'option'
        },
        on: {
          mousedown: e => {
            // Prevent onBlur from being called
            e.preventDefault();
          },
          click: () => disabled || this.$emit('select', item)
        },
        props: {
          activeClass: this.tileActiveClass,
          disabled,
          ripple: true,
          inputValue: value
        }
      };

      if (!this.$scopedSlots.item) {
        return this.$createElement(VListItem["a" /* default */], tile, [this.action && !this.hideSelected && this.items.length > 0 ? this.genAction(item, value) : null, this.genTileContent(item, index)]);
      }

      const parent = this;
      const scopedSlot = this.$scopedSlots.item({
        parent,
        item,
        attrs: { ...tile.attrs,
          ...tile.props
        },
        on: tile.on
      });
      return this.needsTile(scopedSlot) ? this.$createElement(VListItem["a" /* default */], tile, scopedSlot) : scopedSlot;
    },

    genTileContent(item, index = 0) {
      const innerHTML = this.genFilteredText(this.getText(item));
      return this.$createElement(VList["b" /* VListItemContent */], [this.$createElement(VList["d" /* VListItemTitle */], {
        domProps: {
          innerHTML
        }
      })]);
    },

    hasItem(item) {
      return this.parsedItems.indexOf(this.getValue(item)) > -1;
    },

    needsTile(slot) {
      return slot.length !== 1 || slot[0].componentOptions == null || slot[0].componentOptions.Ctor.options.name !== 'v-list-item';
    },

    getDisabled(item) {
      return Boolean(Object(helpers["n" /* getPropertyFromItem */])(item, this.itemDisabled, false));
    },

    getText(item) {
      return String(Object(helpers["n" /* getPropertyFromItem */])(item, this.itemText, item));
    },

    getValue(item) {
      return Object(helpers["n" /* getPropertyFromItem */])(item, this.itemValue, this.getText(item));
    }

  },

  render() {
    const children = [];
    const itemsLength = this.items.length;

    for (let index = 0; index < itemsLength; index++) {
      const item = this.items[index];
      if (this.hideSelected && this.hasItem(item)) continue;
      if (item == null) children.push(this.genTile({
        item,
        index
      }));else if (item.header) children.push(this.genHeader(item));else if (item.divider) children.push(this.genDivider(item));else children.push(this.genTile({
        item,
        index
      }));
    }

    children.length || children.push(this.$slots['no-data'] || this.staticNoDataTile);
    this.$slots['prepend-item'] && children.unshift(this.$slots['prepend-item']);
    this.$slots['append-item'] && children.push(this.$slots['append-item']);
    return this.$createElement(VList_VList["a" /* default */], {
      staticClass: 'v-select-list',
      class: this.themeClasses,
      attrs: {
        role: 'listbox',
        tabindex: -1
      },
      props: {
        dense: this.dense
      }
    }, children);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField_VTextField = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/comparable/index.js
var comparable = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/filterable/index.js

/* @vue/component */

/* harmony default export */ var filterable = (external_vue_default.a.extend({
  name: 'filterable',
  props: {
    noDataText: {
      type: String,
      default: '$vuetify.noDataText'
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js
// Styles

 // Components



 // Extensions


 // Mixins


 // Directives

 // Utilities



 // Types


const defaultMenuProps = {
  closeOnClick: false,
  closeOnContentClick: false,
  disableKeys: true,
  openOnClick: false,
  maxHeight: 304
}; // Types

const baseMixins = Object(mixins["a" /* default */])(VTextField_VTextField["a" /* default */], comparable["a" /* default */], filterable);
/* @vue/component */

/* harmony default export */ var VSelect_VSelect = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-select',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  props: {
    appendIcon: {
      type: String,
      default: '$dropdown'
    },
    attach: {
      type: null,
      default: false
    },
    cacheItems: Boolean,
    chips: Boolean,
    clearable: Boolean,
    deletableChips: Boolean,
    disableLookup: Boolean,
    eager: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemColor: {
      type: String,
      default: 'primary'
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: 'disabled'
    },
    itemText: {
      type: [String, Array, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Array, Function],
      default: 'value'
    },
    menuProps: {
      type: [String, Array, Object],
      default: () => defaultMenuProps
    },
    multiple: Boolean,
    openOnClear: Boolean,
    returnObject: Boolean,
    smallChips: Boolean
  },

  data() {
    return {
      cachedItems: this.cacheItems ? this.items : [],
      menuIsBooted: false,
      isMenuActive: false,
      lastItem: 20,
      // As long as a value is defined, show it
      // Otherwise, check if multiple
      // to determine which default to provide
      lazyValue: this.value !== undefined ? this.value : this.multiple ? [] : undefined,
      selectedIndex: -1,
      selectedItems: [],
      keyboardLookupPrefix: '',
      keyboardLookupLastTime: 0
    };
  },

  computed: {
    /* All items that the select has */
    allItems() {
      return this.filterDuplicates(this.cachedItems.concat(this.items));
    },

    classes() {
      return { ...VTextField_VTextField["a" /* default */].options.computed.classes.call(this),
        'v-select': true,
        'v-select--chips': this.hasChips,
        'v-select--chips--small': this.smallChips,
        'v-select--is-menu-active': this.isMenuActive,
        'v-select--is-multi': this.multiple
      };
    },

    /* Used by other components to overwrite */
    computedItems() {
      return this.allItems;
    },

    computedOwns() {
      return `list-${this._uid}`;
    },

    computedCounterValue() {
      return this.multiple ? this.selectedItems.length : (this.getText(this.selectedItems[0]) || '').toString().length;
    },

    directives() {
      return this.isFocused ? [{
        name: 'click-outside',
        value: {
          handler: this.blur,
          closeConditional: this.closeConditional
        }
      }] : undefined;
    },

    dynamicHeight() {
      return 'auto';
    },

    hasChips() {
      return this.chips || this.smallChips;
    },

    hasSlot() {
      return Boolean(this.hasChips || this.$scopedSlots.selection);
    },

    isDirty() {
      return this.selectedItems.length > 0;
    },

    listData() {
      const scopeId = this.$vnode && this.$vnode.context.$options._scopeId;
      const attrs = scopeId ? {
        [scopeId]: true
      } : {};
      return {
        attrs: { ...attrs,
          id: this.computedOwns
        },
        props: {
          action: this.multiple,
          color: this.itemColor,
          dense: this.dense,
          hideSelected: this.hideSelected,
          items: this.virtualizedItems,
          itemDisabled: this.itemDisabled,
          itemText: this.itemText,
          itemValue: this.itemValue,
          noDataText: this.$vuetify.lang.t(this.noDataText),
          selectedItems: this.selectedItems
        },
        on: {
          select: this.selectItem
        },
        scopedSlots: {
          item: this.$scopedSlots.item
        }
      };
    },

    staticList() {
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        Object(console["b" /* consoleError */])('assert: staticList should not be called if slots are used');
      }

      return this.$createElement(VSelectList, this.listData);
    },

    virtualizedItems() {
      return this.$_menuProps.auto ? this.computedItems : this.computedItems.slice(0, this.lastItem);
    },

    menuCanShow: () => true,

    $_menuProps() {
      let normalisedProps = typeof this.menuProps === 'string' ? this.menuProps.split(',') : this.menuProps;

      if (Array.isArray(normalisedProps)) {
        normalisedProps = normalisedProps.reduce((acc, p) => {
          acc[p.trim()] = true;
          return acc;
        }, {});
      }

      return { ...defaultMenuProps,
        eager: this.eager,
        value: this.menuCanShow && this.isMenuActive,
        nudgeBottom: normalisedProps.offsetY ? 1 : 0,
        ...normalisedProps
      };
    }

  },
  watch: {
    internalValue(val) {
      this.initialValue = val;
      this.setSelectedItems();
    },

    isMenuActive(val) {
      window.setTimeout(() => this.onMenuActiveChange(val));
    },

    items: {
      immediate: true,

      handler(val) {
        if (this.cacheItems) {
          // Breaks vue-test-utils if
          // this isn't calculated
          // on the next tick
          this.$nextTick(() => {
            this.cachedItems = this.filterDuplicates(this.cachedItems.concat(val));
          });
        }

        this.setSelectedItems();
      }

    }
  },
  methods: {
    /** @public */
    blur(e) {
      VTextField_VTextField["a" /* default */].options.methods.blur.call(this, e);
      this.isMenuActive = false;
      this.isFocused = false;
      this.selectedIndex = -1;
    },

    /** @public */
    activateMenu() {
      if (!this.isInteractive || this.isMenuActive) return;
      this.isMenuActive = true;
    },

    clearableCallback() {
      this.setValue(this.multiple ? [] : undefined);
      this.setMenuIndex(-1);
      this.$nextTick(() => this.$refs.input && this.$refs.input.focus());
      if (this.openOnClear) this.isMenuActive = true;
    },

    closeConditional(e) {
      if (!this.isMenuActive) return true;
      return !this._isDestroyed && ( // Click originates from outside the menu content
      // Multiple selects don't close when an item is clicked
      !this.getContent() || !this.getContent().contains(e.target)) && // Click originates from outside the element
      this.$el && !this.$el.contains(e.target) && e.target !== this.$el;
    },

    filterDuplicates(arr) {
      const uniqueValues = new Map();

      for (let index = 0; index < arr.length; ++index) {
        const item = arr[index];
        const val = this.getValue(item); // TODO: comparator

        !uniqueValues.has(val) && uniqueValues.set(val, item);
      }

      return Array.from(uniqueValues.values());
    },

    findExistingIndex(item) {
      const itemValue = this.getValue(item);
      return (this.internalValue || []).findIndex(i => this.valueComparator(this.getValue(i), itemValue));
    },

    getContent() {
      return this.$refs.menu && this.$refs.menu.$refs.content;
    },

    genChipSelection(item, index) {
      const isDisabled = !this.isInteractive || this.getDisabled(item);
      return this.$createElement(components_VChip, {
        staticClass: 'v-chip--select',
        attrs: {
          tabindex: -1
        },
        props: {
          close: this.deletableChips && !isDisabled,
          disabled: isDisabled,
          inputValue: index === this.selectedIndex,
          small: this.smallChips
        },
        on: {
          click: e => {
            if (isDisabled) return;
            e.stopPropagation();
            this.selectedIndex = index;
          },
          'click:close': () => this.onChipInput(item)
        },
        key: JSON.stringify(this.getValue(item))
      }, this.getText(item));
    },

    genCommaSelection(item, index, last) {
      const color = index === this.selectedIndex && this.computedColor;
      const isDisabled = !this.isInteractive || this.getDisabled(item);
      return this.$createElement('div', this.setTextColor(color, {
        staticClass: 'v-select__selection v-select__selection--comma',
        class: {
          'v-select__selection--disabled': isDisabled
        },
        key: JSON.stringify(this.getValue(item))
      }), `${this.getText(item)}${last ? '' : ', '}`);
    },

    genDefaultSlot() {
      const selections = this.genSelections();
      const input = this.genInput(); // If the return is an empty array
      // push the input

      if (Array.isArray(selections)) {
        selections.push(input); // Otherwise push it into children
      } else {
        selections.children = selections.children || [];
        selections.children.push(input);
      }

      return [this.genFieldset(), this.$createElement('div', {
        staticClass: 'v-select__slot',
        directives: this.directives
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, selections, this.suffix ? this.genAffix('suffix') : null, this.genClearIcon(), this.genIconSlot(), this.genHiddenInput()]), this.genMenu(), this.genProgress()];
    },

    genIcon(type, cb, extraData) {
      const icon = VInput["a" /* default */].options.methods.genIcon.call(this, type, cb, extraData);

      if (type === 'append') {
        // Don't allow the dropdown icon to be focused
        icon.children[0].data = Object(mergeData["a" /* default */])(icon.children[0].data, {
          attrs: {
            tabindex: icon.children[0].componentOptions.listeners && '-1',
            'aria-hidden': 'true',
            'aria-label': undefined
          }
        });
      }

      return icon;
    },

    genInput() {
      const input = VTextField_VTextField["a" /* default */].options.methods.genInput.call(this);
      delete input.data.attrs.name;
      input.data = Object(mergeData["a" /* default */])(input.data, {
        domProps: {
          value: null
        },
        attrs: {
          readonly: true,
          type: 'text',
          'aria-readonly': String(this.isReadonly),
          'aria-activedescendant': Object(helpers["m" /* getObjectValueByPath */])(this.$refs.menu, 'activeTile.id'),
          autocomplete: Object(helpers["m" /* getObjectValueByPath */])(input.data, 'attrs.autocomplete', 'off')
        },
        on: {
          keypress: this.onKeyPress
        }
      });
      return input;
    },

    genHiddenInput() {
      return this.$createElement('input', {
        domProps: {
          value: this.lazyValue
        },
        attrs: {
          type: 'hidden',
          name: this.attrs$.name
        }
      });
    },

    genInputSlot() {
      const render = VTextField_VTextField["a" /* default */].options.methods.genInputSlot.call(this);
      render.data.attrs = { ...render.data.attrs,
        role: 'button',
        'aria-haspopup': 'listbox',
        'aria-expanded': String(this.isMenuActive),
        'aria-owns': this.computedOwns
      };
      return render;
    },

    genList() {
      // If there's no slots, we can use a cached VNode to improve performance
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        return this.genListWithSlot();
      } else {
        return this.staticList;
      }
    },

    genListWithSlot() {
      const slots = ['prepend-item', 'no-data', 'append-item'].filter(slotName => this.$slots[slotName]).map(slotName => this.$createElement('template', {
        slot: slotName
      }, this.$slots[slotName])); // Requires destructuring due to Vue
      // modifying the `on` property when passed
      // as a referenced object

      return this.$createElement(VSelectList, { ...this.listData
      }, slots);
    },

    genMenu() {
      const props = this.$_menuProps;
      props.activator = this.$refs['input-slot']; // Attach to root el so that
      // menu covers prepend/append icons

      if ( // TODO: make this a computed property or helper or something
      this.attach === '' || // If used as a boolean prop (<v-menu attach>)
      this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
      this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
      ) {
          props.attach = this.$el;
        } else {
        props.attach = this.attach;
      }

      return this.$createElement(VMenu["a" /* default */], {
        attrs: {
          role: undefined
        },
        props,
        on: {
          input: val => {
            this.isMenuActive = val;
            this.isFocused = val;
          },
          scroll: this.onScroll
        },
        ref: 'menu'
      }, [this.genList()]);
    },

    genSelections() {
      let length = this.selectedItems.length;
      const children = new Array(length);
      let genSelection;

      if (this.$scopedSlots.selection) {
        genSelection = this.genSlotSelection;
      } else if (this.hasChips) {
        genSelection = this.genChipSelection;
      } else {
        genSelection = this.genCommaSelection;
      }

      while (length--) {
        children[length] = genSelection(this.selectedItems[length], length, length === children.length - 1);
      }

      return this.$createElement('div', {
        staticClass: 'v-select__selections'
      }, children);
    },

    genSlotSelection(item, index) {
      return this.$scopedSlots.selection({
        attrs: {
          class: 'v-chip--select'
        },
        parent: this,
        item,
        index,
        select: e => {
          e.stopPropagation();
          this.selectedIndex = index;
        },
        selected: index === this.selectedIndex,
        disabled: !this.isInteractive
      });
    },

    getMenuIndex() {
      return this.$refs.menu ? this.$refs.menu.listIndex : -1;
    },

    getDisabled(item) {
      return Object(helpers["n" /* getPropertyFromItem */])(item, this.itemDisabled, false);
    },

    getText(item) {
      return Object(helpers["n" /* getPropertyFromItem */])(item, this.itemText, item);
    },

    getValue(item) {
      return Object(helpers["n" /* getPropertyFromItem */])(item, this.itemValue, this.getText(item));
    },

    onBlur(e) {
      e && this.$emit('blur', e);
    },

    onChipInput(item) {
      if (this.multiple) this.selectItem(item);else this.setValue(null); // If all items have been deleted,
      // open `v-menu`

      if (this.selectedItems.length === 0) {
        this.isMenuActive = true;
      } else {
        this.isMenuActive = false;
      }

      this.selectedIndex = -1;
    },

    onClick(e) {
      if (!this.isInteractive) return;

      if (!this.isAppendInner(e.target)) {
        this.isMenuActive = true;
      }

      if (!this.isFocused) {
        this.isFocused = true;
        this.$emit('focus');
      }

      this.$emit('click', e);
    },

    onEscDown(e) {
      e.preventDefault();

      if (this.isMenuActive) {
        e.stopPropagation();
        this.isMenuActive = false;
      }
    },

    onKeyPress(e) {
      if (this.multiple || !this.isInteractive || this.disableLookup) return;
      const KEYBOARD_LOOKUP_THRESHOLD = 1000; // milliseconds

      const now = performance.now();

      if (now - this.keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        this.keyboardLookupPrefix = '';
      }

      this.keyboardLookupPrefix += e.key.toLowerCase();
      this.keyboardLookupLastTime = now;
      const index = this.allItems.findIndex(item => {
        const text = (this.getText(item) || '').toString();
        return text.toLowerCase().startsWith(this.keyboardLookupPrefix);
      });
      const item = this.allItems[index];

      if (index !== -1) {
        this.lastItem = Math.max(this.lastItem, index + 5);
        this.setValue(this.returnObject ? item : this.getValue(item));
        this.$nextTick(() => this.$refs.menu.getTiles());
        setTimeout(() => this.setMenuIndex(index));
      }
    },

    onKeyDown(e) {
      if (this.isReadonly && e.keyCode !== helpers["s" /* keyCodes */].tab) return;
      const keyCode = e.keyCode;
      const menu = this.$refs.menu; // If enter, space, open menu

      if ([helpers["s" /* keyCodes */].enter, helpers["s" /* keyCodes */].space].includes(keyCode)) this.activateMenu();
      this.$emit('keydown', e);
      if (!menu) return; // If menu is active, allow default
      // listIndex change from menu

      if (this.isMenuActive && keyCode !== helpers["s" /* keyCodes */].tab) {
        this.$nextTick(() => {
          menu.changeListIndex(e);
          this.$emit('update:list-index', menu.listIndex);
        });
      } // If menu is not active, up and down can do
      // one of 2 things. If multiple, opens the
      // menu, if not, will cycle through all
      // available options


      if (!this.isMenuActive && [helpers["s" /* keyCodes */].up, helpers["s" /* keyCodes */].down].includes(keyCode)) return this.onUpDown(e); // If escape deactivate the menu

      if (keyCode === helpers["s" /* keyCodes */].esc) return this.onEscDown(e); // If tab - select item or close menu

      if (keyCode === helpers["s" /* keyCodes */].tab) return this.onTabDown(e); // If space preventDefault

      if (keyCode === helpers["s" /* keyCodes */].space) return this.onSpaceDown(e);
    },

    onMenuActiveChange(val) {
      // If menu is closing and mulitple
      // or menuIndex is already set
      // skip menu index recalculation
      if (this.multiple && !val || this.getMenuIndex() > -1) return;
      const menu = this.$refs.menu;
      if (!menu || !this.isDirty) return; // When menu opens, set index of first active item

      for (let i = 0; i < menu.tiles.length; i++) {
        if (menu.tiles[i].getAttribute('aria-selected') === 'true') {
          this.setMenuIndex(i);
          break;
        }
      }
    },

    onMouseUp(e) {
      if (this.hasMouseDown && e.which !== 3 && this.isInteractive) {
        // If append inner is present
        // and the target is itself
        // or inside, toggle menu
        if (this.isAppendInner(e.target)) {
          this.$nextTick(() => this.isMenuActive = !this.isMenuActive); // If user is clicking in the container
          // and field is enclosed, activate it
        } else if (this.isEnclosed) {
          this.isMenuActive = true;
        }
      }

      VTextField_VTextField["a" /* default */].options.methods.onMouseUp.call(this, e);
    },

    onScroll() {
      if (!this.isMenuActive) {
        requestAnimationFrame(() => this.getContent().scrollTop = 0);
      } else {
        if (this.lastItem > this.computedItems.length) return;
        const showMoreItems = this.getContent().scrollHeight - (this.getContent().scrollTop + this.getContent().clientHeight) < 200;

        if (showMoreItems) {
          this.lastItem += 20;
        }
      }
    },

    onSpaceDown(e) {
      e.preventDefault();
    },

    onTabDown(e) {
      const menu = this.$refs.menu;
      if (!menu) return;
      const activeTile = menu.activeTile; // An item that is selected by
      // menu-index should toggled

      if (!this.multiple && activeTile && this.isMenuActive) {
        e.preventDefault();
        e.stopPropagation();
        activeTile.click();
      } else {
        // If we make it here,
        // the user has no selected indexes
        // and is probably tabbing out
        this.blur(e);
      }
    },

    onUpDown(e) {
      const menu = this.$refs.menu;
      if (!menu) return;
      e.preventDefault(); // Multiple selects do not cycle their value
      // when pressing up or down, instead activate
      // the menu

      if (this.multiple) return this.activateMenu();
      const keyCode = e.keyCode; // Cycle through available values to achieve
      // select native behavior

      menu.isBooted = true;
      window.requestAnimationFrame(() => {
        menu.getTiles();
        helpers["s" /* keyCodes */].up === keyCode ? menu.prevTile() : menu.nextTile();
        menu.activeTile && menu.activeTile.click();
      });
    },

    selectItem(item) {
      if (!this.multiple) {
        this.setValue(this.returnObject ? item : this.getValue(item));
        this.isMenuActive = false;
      } else {
        const internalValue = (this.internalValue || []).slice();
        const i = this.findExistingIndex(item);
        i !== -1 ? internalValue.splice(i, 1) : internalValue.push(item);
        this.setValue(internalValue.map(i => {
          return this.returnObject ? i : this.getValue(i);
        })); // When selecting multiple
        // adjust menu after each
        // selection

        this.$nextTick(() => {
          this.$refs.menu && this.$refs.menu.updateDimensions();
        }); // We only need to reset list index for multiple
        // to keep highlight when an item is toggled
        // on and off

        if (!this.multiple) return;
        const listIndex = this.getMenuIndex();
        this.setMenuIndex(-1); // There is no item to re-highlight
        // when selections are hidden

        if (this.hideSelected) return;
        this.$nextTick(() => this.setMenuIndex(listIndex));
      }
    },

    setMenuIndex(index) {
      this.$refs.menu && (this.$refs.menu.listIndex = index);
    },

    setSelectedItems() {
      const selectedItems = [];
      const values = !this.multiple || !Array.isArray(this.internalValue) ? [this.internalValue] : this.internalValue;

      for (const value of values) {
        const index = this.allItems.findIndex(v => this.valueComparator(this.getValue(v), this.getValue(value)));

        if (index > -1) {
          selectedItems.push(this.allItems[index]);
        }
      }

      this.selectedItems = selectedItems;
    },

    setValue(value) {
      const oldValue = this.internalValue;
      this.internalValue = value;
      value !== oldValue && this.$emit('change', value);
    },

    isAppendInner(target) {
      // return true if append inner is present
      // and the target is itself or inside
      const appendInner = this.$refs['append-inner'];
      return appendInner && (appendInner === target || appendInner.contains(target));
    }

  }
}));

/***/ }),
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 201 */,
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VBadge_VBadge_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _src_components_VBadge_VBadge_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VBadge_VBadge_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon_VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _mixins_transitionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(173);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
// Styles
 // Components

 // Mixins





 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_6__[/* factory */ "b"])(['left', 'bottom']), _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_transitionable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).extend({
  name: 'v-badge',
  props: {
    avatar: Boolean,
    bordered: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    content: {
      required: false
    },
    dot: Boolean,
    label: {
      type: String,
      default: '$vuetify.badge'
    },
    icon: String,
    inline: Boolean,
    offsetX: [Number, String],
    offsetY: [Number, String],
    overlap: Boolean,
    tile: Boolean,
    transition: {
      type: String,
      default: 'scale-rotate-transition'
    },
    value: {
      default: true
    }
  },
  computed: {
    classes() {
      return {
        'v-badge--avatar': this.avatar,
        'v-badge--bordered': this.bordered,
        'v-badge--bottom': this.bottom,
        'v-badge--dot': this.dot,
        'v-badge--icon': this.icon != null,
        'v-badge--inline': this.inline,
        'v-badge--left': this.left,
        'v-badge--overlap': this.overlap,
        'v-badge--tile': this.tile,
        ...this.themeClasses
      };
    },

    computedBottom() {
      return this.bottom ? 'auto' : this.computedYOffset;
    },

    computedLeft() {
      if (this.isRtl) {
        return this.left ? this.computedXOffset : 'auto';
      }

      return this.left ? 'auto' : this.computedXOffset;
    },

    computedRight() {
      if (this.isRtl) {
        return this.left ? 'auto' : this.computedXOffset;
      }

      return !this.left ? 'auto' : this.computedXOffset;
    },

    computedTop() {
      return this.bottom ? this.computedYOffset : 'auto';
    },

    computedXOffset() {
      return this.calcPosition(this.offsetX);
    },

    computedYOffset() {
      return this.calcPosition(this.offsetY);
    },

    isRtl() {
      return this.$vuetify.rtl;
    },

    // Default fallback if offsetX
    // or offsetY are undefined.
    offset() {
      if (this.overlap) return this.dot ? 8 : 12;
      return this.dot ? 2 : 4;
    },

    styles() {
      if (this.inline) return {};
      return {
        bottom: this.computedBottom,
        left: this.computedLeft,
        right: this.computedRight,
        top: this.computedTop
      };
    }

  },
  methods: {
    calcPosition(offset) {
      return `calc(100% - ${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__[/* convertToUnit */ "f"])(offset || this.offset)})`;
    },

    genBadge() {
      const lang = this.$vuetify.lang;
      const label = this.$attrs['aria-label'] || lang.t(this.label);
      const data = this.setBackgroundColor(this.color, {
        staticClass: 'v-badge__badge',
        style: this.styles,
        attrs: {
          'aria-atomic': this.$attrs['aria-atomic'] || 'true',
          'aria-label': label,
          'aria-live': this.$attrs['aria-live'] || 'polite',
          title: this.$attrs.title,
          role: this.$attrs.role || 'status'
        },
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      });
      const badge = this.$createElement('span', data, [this.genBadgeContent()]);
      if (!this.transition) return badge;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          mode: this.mode
        }
      }, [badge]);
    },

    genBadgeContent() {
      // Dot prop shows no content
      if (this.dot) return undefined;
      const slot = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__[/* getSlot */ "o"])(this, 'badge');
      if (slot) return slot;
      if (this.content) return String(this.content);
      if (this.icon) return this.$createElement(_VIcon_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.icon);
      return undefined;
    },

    genBadgeWrapper() {
      return this.$createElement('span', {
        staticClass: 'v-badge__wrapper'
      }, [this.genBadge()]);
    }

  },

  render(h) {
    const badge = [this.genBadgeWrapper()];
    const children = [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__[/* getSlot */ "o"])(this)];
    const {
      'aria-atomic': _x,
      'aria-label': _y,
      'aria-live': _z,
      role,
      title,
      ...attrs
    } = this.$attrs;
    if (this.inline && this.left) children.unshift(badge);else children.push(badge);
    return h('span', {
      staticClass: 'v-badge',
      attrs,
      class: this.classes
    }, children);
  }

}));

/***/ }),
/* 203 */,
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "y"])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));

/***/ }),
/* 205 */,
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _VBtn_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(121);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
// Components

 // Types


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_2___default.a.extend({
  name: 'v-app-bar-nav-icon',
  functional: true,

  render(h, {
    slots,
    listeners,
    props,
    data
  }) {
    const d = Object.assign(data, {
      staticClass: `v-app-bar__nav-icon ${data.staticClass || ''}`.trim(),
      props: { ...props,
        icon: true
      },
      on: listeners
    });
    const defaultSlot = slots().default;
    return h(_VBtn_VBtn__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], d, defaultSlot || [h(_VIcon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], '$menu')]);
  }

}));

/***/ }),
/* 207 */,
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(155);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }

  },
  watch: {
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },

    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }

  },

  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },

  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },

    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },

    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },

    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }

      this.$emit('keydown', e);
    }

  }
}));

/***/ }),
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
// Mixins


 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_routable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], // Must be after routable
// to overwrite activeClass
Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_0__[/* factory */ "a"])('tabsBar'), _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend().extend({
  name: 'v-tab',
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  data: () => ({
    proxyClass: 'v-tab--active'
  }),
  computed: {
    classes() {
      return {
        'v-tab': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-tab--disabled': this.disabled,
        ...this.groupClasses
      };
    },

    value() {
      let to = this.to || this.href || '';

      if (this.$router && this.to === Object(this.to)) {
        const resolve = this.$router.resolve(this.to, this.$route, this.append);
        to = resolve.href;
      }

      return to.replace('#', '');
    }

  },

  mounted() {
    this.onRouteChange();
  },

  methods: {
    click(e) {
      // If user provides an
      // actual link, do not
      // prevent default
      if (this.href && this.href.indexOf('#') > -1) e.preventDefault();
      if (e.detail) this.$el.blur();
      this.$emit('click', e);
      this.to || this.toggle();
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      'aria-selected': String(this.isActive),
      role: 'tab',
      tabindex: 0
    };
    data.on = { ...data.on,
      keydown: e => {
        if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* keyCodes */ "s"].enter) this.click(e);
        this.$emit('keydown', e);
      }
    };
    return h(tag, data, this.$slots.default);
  }

}));

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTabs/VTabs.sass
var VTabs = __webpack_require__(182);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass
var VSlideGroup = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/mobile/index.js
var mobile = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities


const BaseSlideGroup = Object(mixins["a" /* default */])(VItemGroup["a" /* BaseItemGroup */], mobile["a" /* default */]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: resize["a" /* default */],
    Touch: touch["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    internalItemsLength: 0,
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    __cachedNext() {
      return this.genTransition('next');
    },

    __cachedPrev() {
      return this.genTransition('prev');
    },

    classes() {
      return { ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },

    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && this.isOverflowing;
      }
    },

    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },

    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }

  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',

    scrollOffset(val) {
      this.$refs.content.style.transform = `translateX(${-val}px)`;
    }

  },

  beforeUpdate() {
    this.internalItemsLength = (this.$children || []).length;
  },

  updated() {
    if (this.internalItemsLength === (this.$children || []).length) return;
    this.setWidths();
  },

  methods: {
    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content'
      }, this.$slots.default);
    },

    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },

    genIcon(location) {
      let icon = location;

      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }

      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },

    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },

    genTransition(location) {
      return this.$createElement(transitions["d" /* VFadeTransition */], [this.genIcon(location)]);
    },

    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper'
      }, [this.genContent()]);
    },

    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },

    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },

    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },

    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },

    onTouchMove(e) {
      this.scrollOffset = this.startX - e.touchmoveX;
    },

    onTouchEnd() {
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);

      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }
    },

    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },

    scrollIntoView
    /* istanbul ignore next */
    () {
      if (!this.selectedItem) {
        return;
      }

      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = this.calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = this.calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },

    calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
      const clientWidth = selectedElement.clientWidth;
      const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;

      if (rtl) {
        currentScrollOffset = -currentScrollOffset;
      }

      const totalWidth = widths.wrapper + currentScrollOffset;
      const itemOffset = clientWidth + offsetLeft;
      const additionalOffset = clientWidth * 0.4;

      if (offsetLeft <= currentScrollOffset) {
        currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
      } else if (totalWidth <= itemOffset) {
        currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
      }

      return rtl ? -currentScrollOffset : currentScrollOffset;
    },

    calculateCenteredOffset(selectedElement, widths, rtl) {
      const {
        offsetLeft,
        clientWidth
      } = selectedElement;

      if (rtl) {
        const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
        return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
      } else {
        const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
        return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
      }
    },

    scrollTo
    /* istanbul ignore next */
    (location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },

    setWidths
    /* istanbul ignore next */
    () {
      window.requestAnimationFrame(() => {
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        };
        this.isOverflowing = this.widths.wrapper < this.widths.content;
        this.scrollIntoView();
      });
    }

  },

  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }

});
/* harmony default export */ var VSlideGroup_VSlideGroup = (BaseSlideGroup.extend({
  name: 'v-slide-group',

  provide() {
    return {
      slideGroup: this
    };
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js
var ssr_bootable = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsBar.js
// Extensions
 // Mixins


 // Utilities


/* harmony default export */ var VTabsBar = (Object(mixins["a" /* default */])(BaseSlideGroup, ssr_bootable["a" /* default */], themeable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-tabs-bar',

  provide() {
    return {
      tabsBar: this
    };
  },

  computed: {
    classes() {
      return { ...BaseSlideGroup.options.computed.classes.call(this),
        'v-tabs-bar': true,
        'v-tabs-bar--is-mobile': this.isMobile,
        // TODO: Remove this and move to v-slide-group
        'v-tabs-bar--show-arrows': this.showArrows,
        ...this.themeClasses
      };
    }

  },
  watch: {
    items: 'callSlider',
    internalValue: 'callSlider',
    $route: 'onRouteChange'
  },
  methods: {
    callSlider() {
      if (!this.isBooted) return;
      this.$emit('call:slider');
    },

    genContent() {
      const render = BaseSlideGroup.options.methods.genContent.call(this);
      render.data = render.data || {};
      render.data.staticClass += ' v-tabs-bar__content';
      return render;
    },

    onRouteChange(val, oldVal) {
      /* istanbul ignore next */
      if (this.mandatory) return;
      const items = this.items;
      const newPath = val.path;
      const oldPath = oldVal.path;
      let hasNew = false;
      let hasOld = false;

      for (const item of items) {
        if (item.to === newPath) hasNew = true;else if (item.to === oldPath) hasOld = true;
        if (hasNew && hasOld) break;
      } // If we have an old item and not a new one
      // it's assumed that the user navigated to
      // a path that is not present in the items


      if (!hasNew && hasOld) this.internalValue = undefined;
    }

  },

  render(h) {
    const render = BaseSlideGroup.options.render.call(this, h);
    render.data.attrs = {
      role: 'tablist'
    };
    return render;
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js + 1 modules
var VTabsItems = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
// Mixins
 // Utilities


/* @vue/component */

/* harmony default export */ var VTabsSlider = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  name: 'v-tabs-slider',

  render(h) {
    return h('div', this.setBackgroundColor(this.color, {
      staticClass: 'v-tabs-slider'
    }));
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js
// Styles
 // Components



 // Mixins



 // Directives

 // Utilities



const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], proxyable["a" /* default */], themeable["a" /* default */]);
/* harmony default export */ var VTabs_VTabs = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-tabs',
  directives: {
    Resize: resize["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: ''
    },
    alignWithTitle: Boolean,
    backgroundColor: String,
    centerActive: Boolean,
    centered: Boolean,
    fixedTabs: Boolean,
    grow: Boolean,
    height: {
      type: [Number, String],
      default: undefined
    },
    hideSlider: Boolean,
    iconsAndText: Boolean,
    mobileBreakpoint: [String, Number],
    nextIcon: {
      type: String,
      default: '$next'
    },
    optional: Boolean,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    right: Boolean,
    showArrows: [Boolean, String],
    sliderColor: String,
    sliderSize: {
      type: [Number, String],
      default: 2
    },
    vertical: Boolean
  },

  data() {
    return {
      resizeTimeout: 0,
      slider: {
        height: null,
        left: null,
        right: null,
        top: null,
        width: null
      },
      transitionTime: 300
    };
  },

  computed: {
    classes() {
      return {
        'v-tabs--align-with-title': this.alignWithTitle,
        'v-tabs--centered': this.centered,
        'v-tabs--fixed-tabs': this.fixedTabs,
        'v-tabs--grow': this.grow,
        'v-tabs--icons-and-text': this.iconsAndText,
        'v-tabs--right': this.right,
        'v-tabs--vertical': this.vertical,
        ...this.themeClasses
      };
    },

    isReversed() {
      return this.$vuetify.rtl && this.vertical;
    },

    sliderStyles() {
      return {
        height: Object(helpers["f" /* convertToUnit */])(this.slider.height),
        left: this.isReversed ? undefined : Object(helpers["f" /* convertToUnit */])(this.slider.left),
        right: this.isReversed ? Object(helpers["f" /* convertToUnit */])(this.slider.right) : undefined,
        top: this.vertical ? Object(helpers["f" /* convertToUnit */])(this.slider.top) : undefined,
        transition: this.slider.left != null ? null : 'none',
        width: Object(helpers["f" /* convertToUnit */])(this.slider.width)
      };
    },

    computedColor() {
      if (this.color) return this.color;else if (this.isDark && !this.appIsDark) return 'white';else return 'primary';
    }

  },
  watch: {
    alignWithTitle: 'callSlider',
    centered: 'callSlider',
    centerActive: 'callSlider',
    fixedTabs: 'callSlider',
    grow: 'callSlider',
    right: 'callSlider',
    showArrows: 'callSlider',
    vertical: 'callSlider',
    '$vuetify.application.left': 'onResize',
    '$vuetify.application.right': 'onResize',
    '$vuetify.rtl': 'onResize'
  },

  mounted() {
    this.$nextTick(() => {
      window.setTimeout(this.callSlider, 30);
    });
  },

  methods: {
    callSlider() {
      if (this.hideSlider || !this.$refs.items || !this.$refs.items.selectedItems.length) {
        this.slider.width = 0;
        return false;
      }

      this.$nextTick(() => {
        // Give screen time to paint
        const activeTab = this.$refs.items.selectedItems[0];
        /* istanbul ignore if */

        if (!activeTab || !activeTab.$el) {
          this.slider.width = 0;
          this.slider.left = 0;
          return;
        }

        const el = activeTab.$el;
        this.slider = {
          height: !this.vertical ? Number(this.sliderSize) : el.scrollHeight,
          left: this.vertical ? 0 : el.offsetLeft,
          right: this.vertical ? 0 : el.offsetLeft + el.offsetWidth,
          top: el.offsetTop,
          width: this.vertical ? Number(this.sliderSize) : el.scrollWidth
        };
      });
      return true;
    },

    genBar(items, slider) {
      const data = {
        style: {
          height: Object(helpers["f" /* convertToUnit */])(this.height)
        },
        props: {
          activeClass: this.activeClass,
          centerActive: this.centerActive,
          dark: this.dark,
          light: this.light,
          mandatory: !this.optional,
          mobileBreakpoint: this.mobileBreakpoint,
          nextIcon: this.nextIcon,
          prevIcon: this.prevIcon,
          showArrows: this.showArrows,
          value: this.internalValue
        },
        on: {
          'call:slider': this.callSlider,
          change: val => {
            this.internalValue = val;
          }
        },
        ref: 'items'
      };
      this.setTextColor(this.computedColor, data);
      this.setBackgroundColor(this.backgroundColor, data);
      return this.$createElement(VTabsBar, data, [this.genSlider(slider), items]);
    },

    genItems(items, item) {
      // If user provides items
      // opt to use theirs
      if (items) return items; // If no tabs are provided
      // render nothing

      if (!item.length) return null;
      return this.$createElement(VTabsItems["a" /* default */], {
        props: {
          value: this.internalValue
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, item);
    },

    genSlider(slider) {
      if (this.hideSlider) return null;

      if (!slider) {
        slider = this.$createElement(VTabsSlider, {
          props: {
            color: this.sliderColor
          }
        });
      }

      return this.$createElement('div', {
        staticClass: 'v-tabs-slider-wrapper',
        style: this.sliderStyles
      }, [slider]);
    },

    onResize() {
      if (this._isDestroyed) return;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.callSlider, 0);
    },

    parseNodes() {
      let items = null;
      let slider = null;
      const item = [];
      const tab = [];
      const slot = this.$slots.default || [];
      const length = slot.length;

      for (let i = 0; i < length; i++) {
        const vnode = slot[i];

        if (vnode.componentOptions) {
          switch (vnode.componentOptions.Ctor.options.name) {
            case 'v-tabs-slider':
              slider = vnode;
              break;

            case 'v-tabs-items':
              items = vnode;
              break;

            case 'v-tab-item':
              item.push(vnode);
              break;
            // case 'v-tab' - intentionally omitted

            default:
              tab.push(vnode);
          }
        } else {
          tab.push(vnode);
        }
      }
      /**
       * tab: array of `v-tab`
       * slider: single `v-tabs-slider`
       * items: single `v-tabs-items`
       * item: array of `v-tab-item`
       */


      return {
        tab,
        slider,
        items,
        item
      };
    }

  },

  render(h) {
    const {
      tab,
      slider,
      items,
      item
    } = this.parseNodes();
    return h('div', {
      staticClass: 'v-tabs',
      class: this.classes,
      directives: [{
        name: 'resize',
        modifiers: {
          quiet: true
        },
        value: this.onResize
      }]
    }, [this.genBar(tab, slider), this.genItems(items, item)]);
  }

}));

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/bootable/index.js
var bootable = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindowItem.js
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(mixins["a" /* default */])(bootable["a" /* default */], Object(groupable["a" /* factory */])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ var VWindowItem = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },

  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },

  computed: {
    classes() {
      return this.groupClasses;
    },

    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }

      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }

  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },

    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.


      this.inTransition = false;

      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },

    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.


      this.inTransition = true;

      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(helpers["f" /* convertToUnit */])(this.windowGroup.$el.clientHeight);
      }

      this.windowGroup.transitionCount++;
    },

    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }

      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.


        this.windowGroup.transitionHeight = Object(helpers["f" /* convertToUnit */])(el.clientHeight);
      });
    }

  },

  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js
// Extensions

/* @vue/component */

/* harmony default export */ var VTabItem = __webpack_exports__["a"] = (VWindowItem.extend({
  name: 'v-tab-item',
  props: {
    id: String
  },
  methods: {
    genWindowItem() {
      const item = VWindowItem.options.methods.genWindowItem.call(this);
      item.data.domProps = item.data.domProps || {};
      item.data.domProps.id = this.id || this.value;
      return item;
    }

  }
}));

/***/ }),
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },

    styles() {
      // Styles are not needed when
      // using the absolute prop.
      if (this.absolute) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application; // Should always move for y-axis
      // applicationable components.

      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bottom + footer + insetFooter),
        paddingLeft: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(left),
        paddingRight: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "o"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "o"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));

/***/ }),
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_0__[/* factory */ "a"])('expansionPanels', 'v-expansion-panel', 'v-expansion-panels'), Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_1__[/* provide */ "b"])('expansionPanel', true)
/* @vue/component */
).extend({
  name: 'v-expansion-panel',
  props: {
    disabled: Boolean,
    readonly: Boolean
  },

  data() {
    return {
      content: null,
      header: null,
      nextIsActive: false
    };
  },

  computed: {
    classes() {
      return {
        'v-expansion-panel--active': this.isActive,
        'v-expansion-panel--next-active': this.nextIsActive,
        'v-expansion-panel--disabled': this.isDisabled,
        ...this.groupClasses
      };
    },

    isDisabled() {
      return this.expansionPanels.disabled || this.disabled;
    },

    isReadonly() {
      return this.expansionPanels.readonly || this.readonly;
    }

  },
  methods: {
    registerContent(vm) {
      this.content = vm;
    },

    unregisterContent() {
      this.content = null;
    },

    registerHeader(vm) {
      this.header = vm;
      vm.$on('click', this.onClick);
    },

    unregisterHeader() {
      this.header = null;
    },

    onClick(e) {
      if (e.detail) this.header.$el.blur();
      this.$emit('click', e);
      this.isReadonly || this.isDisabled || this.toggle();
    },

    toggle() {
      /* istanbul ignore else */
      if (this.content) this.content.isBooted = true;
      this.$nextTick(() => this.$emit('change'));
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-expansion-panel',
      class: this.classes,
      attrs: {
        'aria-expanded': String(this.isActive)
      }
    }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getSlot */ "o"])(this));
  }

}));

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
 // Mixins



 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_3__[/* inject */ "a"])('expansionPanel', 'v-expansion-panel-content', 'v-expansion-panel'));
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-expansion-panel-content',
  computed: {
    isActive() {
      return this.expansionPanel.isActive;
    }

  },

  created() {
    this.expansionPanel.registerContent(this);
  },

  beforeDestroy() {
    this.expansionPanel.unregisterContent();
  },

  render(h) {
    return h(_transitions__WEBPACK_IMPORTED_MODULE_0__[/* VExpandTransition */ "a"], this.showLazyContent(() => [h('div', this.setBackgroundColor(this.color, {
      staticClass: 'v-expansion-panel-content',
      directives: [{
        name: 'show',
        value: this.isActive
      }]
    }), [h('div', {
      class: 'v-expansion-panel-content__wrap'
    }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* getSlot */ "o"])(this))])]));
  }

}));

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
// Components

 // Mixins


 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_3__[/* inject */ "a"])('expansionPanel', 'v-expansion-panel-header', 'v-expansion-panel'));
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-expansion-panel-header',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    disableIconRotate: Boolean,
    expandIcon: {
      type: String,
      default: '$expand'
    },
    hideActions: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  data: () => ({
    hasMousedown: false
  }),
  computed: {
    classes() {
      return {
        'v-expansion-panel-header--active': this.isActive,
        'v-expansion-panel-header--mousedown': this.hasMousedown
      };
    },

    isActive() {
      return this.expansionPanel.isActive;
    },

    isDisabled() {
      return this.expansionPanel.isDisabled;
    },

    isReadonly() {
      return this.expansionPanel.isReadonly;
    }

  },

  created() {
    this.expansionPanel.registerHeader(this);
  },

  beforeDestroy() {
    this.expansionPanel.unregisterHeader();
  },

  methods: {
    onClick(e) {
      this.$emit('click', e);
    },

    genIcon() {
      const icon = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getSlot */ "o"])(this, 'actions') || [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.expandIcon)];
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_0__[/* VFadeTransition */ "d"], [this.$createElement('div', {
        staticClass: 'v-expansion-panel-header__icon',
        class: {
          'v-expansion-panel-header__icon--disable-rotate': this.disableIconRotate
        },
        directives: [{
          name: 'show',
          value: !this.isDisabled
        }]
      }, icon)]);
    }

  },

  render(h) {
    return h('button', this.setBackgroundColor(this.color, {
      staticClass: 'v-expansion-panel-header',
      class: this.classes,
      attrs: {
        tabindex: this.isDisabled ? -1 : null,
        type: 'button'
      },
      directives: [{
        name: 'ripple',
        value: this.ripple
      }],
      on: { ...this.$listeners,
        click: this.onClick,
        mousedown: () => this.hasMousedown = true,
        mouseup: () => this.hasMousedown = false
      }
    }), [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getSlot */ "o"])(this, 'default', {
      open: this.isActive
    }, true), this.hideActions || this.genIcon()]);
  }

}));

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VExpansionPanel_VExpansionPanel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);
/* harmony import */ var _src_components_VExpansionPanel_VExpansionPanel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VExpansionPanel_VExpansionPanel_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Components

 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseItemGroup */ "a"].extend({
  name: 'v-expansion-panels',

  provide() {
    return {
      expansionPanels: this
    };
  },

  props: {
    accordion: Boolean,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    focusable: Boolean,
    inset: Boolean,
    popout: Boolean,
    readonly: Boolean,
    tile: Boolean
  },
  computed: {
    classes() {
      return { ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseItemGroup */ "a"].options.computed.classes.call(this),
        'v-expansion-panels': true,
        'v-expansion-panels--accordion': this.accordion,
        'v-expansion-panels--flat': this.flat,
        'v-expansion-panels--hover': this.hover,
        'v-expansion-panels--focusable': this.focusable,
        'v-expansion-panels--inset': this.inset,
        'v-expansion-panels--popout': this.popout,
        'v-expansion-panels--tile': this.tile
      };
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('expand')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__[/* breaking */ "a"])('expand', 'multiple', this);
    }
    /* istanbul ignore next */


    if (Array.isArray(this.value) && this.value.length > 0 && typeof this.value[0] === 'boolean') {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__[/* breaking */ "a"])(':value="[true, false, true]"', ':value="[0, 2]"', this);
    }
  },

  methods: {
    updateItem(item, index) {
      const value = this.getValue(item, index);
      const nextValue = this.getValue(item, index + 1);
      item.isActive = this.toggleMethod(value);
      item.nextIsActive = this.toggleMethod(nextValue);
    }

  }
}));

/***/ }),
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCard_vue_vue_type_style_index_0_id_d8b35866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCard_vue_vue_type_style_index_0_id_d8b35866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCard_vue_vue_type_style_index_0_id_d8b35866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCard_vue_vue_type_style_index_0_id_d8b35866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCard_vue_vue_type_style_index_0_id_d8b35866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/transactions.vue?vue&type=template&id=4f77dea6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('v-card',{staticClass:"overflow-hidden",attrs:{"flat":"","width":"100vw"}},[_c('nav-drawer',{model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}}),_vm._v(" "),_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"blue"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('v-app-bar',{staticStyle:{"z-index":"2"},attrs:{"color":"rgba(100,115,201)","dark":"","fixed":"","app":""},scopedSlots:_vm._u([{key:"extension",fn:function(){return [_c('v-tabs',{attrs:{"grow":"","background-color":"rgba(100,115,201)","center-active":"","icons-and-text":"","centered":"","color":"white"},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('v-tab',{attrs:{"dense":""}},[_vm._v("Food\n                        "),_c('v-icon',{attrs:{"dense":""}},[_vm._v("mdi-food")])],1),_vm._v(" "),_c('v-tab',{attrs:{"dense":""}},[_vm._v("Shopping\n                        "),_c('v-icon',{attrs:{"dense":""}},[_vm._v("mdi-cart-arrow-right")])],1),_vm._v(" "),_c('v-tab',{attrs:{"dense":""}},[_vm._v("Bills\n                        "),_c('v-icon',{attrs:{"dense":""}},[_vm._v("mdi-account-cash")])],1)],1)]},proxy:true}])},[_c('v-app-bar-nav-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer=!_vm.drawer}}}),_vm._v(" "),_c('v-avatar',{staticClass:"mr-2",attrs:{"rounded":"","size":"35"}},[_c('v-img',{attrs:{"src":"/icon.png"}})],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v("Jiffy Favors")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('client-only',[(_vm.cartSize > 0)?_c('v-btn',{attrs:{"icon":"","to":"/cart"}},[_c('v-badge',{attrs:{"color":"red"},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_vm._v(" "+_vm._s(_vm.cartSize)+" ")]},proxy:true}],null,false,1285045876)},[_vm._v(" "),_c('v-icon',{attrs:{"color":"white","dense":""}},[_vm._v(" mdi-cart-outline ")])],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('v-sheet',{staticClass:"overflow-y-auto mb-10",attrs:{"min-height":"80vh","max-height":"100vh"}},[_c('v-content',[_c('v-tabs-items',{model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('v-tab-item',[(_vm.trans.orders.size < 1)?_c('v-layout',{attrs:{"flat":"","wrap":"","justify-center":"","align-center":"","text-left":""}},[_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-icon',{staticClass:"mb-2",attrs:{"color":"error","size":"200"}},[_vm._v(" mdi-cart-off ")]),_vm._v(" "),_c('blockquote',{staticClass:"blockquote mb-5"},[_c('span',{staticStyle:{"font-size":"50px"}},[_vm._v("😢")]),_vm._v(" "),_c('h4',[_vm._v("There's nothing here. Want to order something?")])]),_vm._v(" "),_c('footer',[_c('v-btn',{attrs:{"outlined":"","text":"","block":"","to":"/food","color":"red"}},[_vm._v(" View Menus")])],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.trans.orders.size > 0)?_c('v-tabs',{attrs:{"center-active":"","centered":"","background-color":"transparent","color":"blue"},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tab',{attrs:{"dense":""}},[_vm._v(" Ongoing ")]),_vm._v(" "),_c('v-tab',{attrs:{"dense":""}},[_vm._v(" History ")]),_vm._v(" "),_c('v-tabs-items',{model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tab-item',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},_vm._l((_vm.trans.orders.data.filter(
                      function (o) { return (o.status !=='cancelled' && o.status !== 'completed'); }
                    )),function(order,index){return _c('order-card',{key:index,attrs:{"item":order}})}),1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","fill-height":"","align-center":"","text-left":""}},_vm._l((_vm.trans.orders.data.filter(
                      function (o) { return (o.status !== 'placed' && o.status !== 'accepted'); }
                    )),function(order,index){return _c('order-card',{key:index,attrs:{"item":order}})}),1)],1)],1)],1):_vm._e()],1),_vm._v(" "),_c('v-tab-item',[(_vm.trans.shops.size < 1)?_c('v-layout',{attrs:{"flat":"","wrap":"","justify-center":"","align-center":"","text-left":""}},[_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-icon',{staticClass:"mb-2",attrs:{"color":"error","size":"200"}},[_vm._v(" mdi-cart-off ")]),_vm._v(" "),_c('blockquote',{staticClass:"blockquote mb-5"},[_c('span',{staticStyle:{"font-size":"50px"}},[_vm._v("😢")]),_vm._v(" "),_c('h4',[_vm._v("There's nothing here. Want to shop something?")])]),_vm._v(" "),_c('footer',[_c('v-btn',{attrs:{"outlined":"","text":"","block":"","to":"/shopping","color":"red"}},[_vm._v("Shop Now")])],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.trans.shops.size > 0)?_c('v-tabs',{attrs:{"center-active":"","centered":"","background-color":"transparent","color":"blue"},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tab',{attrs:{"dense":""}},[_vm._v(" Ongoing ")]),_vm._v(" "),_c('v-tab',{attrs:{"dense":""}},[_vm._v(" History ")]),_vm._v(" "),_c('v-tabs-items',{model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tab-item',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},_vm._l((_vm.trans.shops.data.filter(
                      function (o) { return o.status !== 'cancelled' && o.status !== 'completed'; }
                    )),function(shop,index){return _c('shop-list-card',{key:index,attrs:{"item":shop}})}),1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","fill-height":"","align-center":"","text-left":""}},_vm._l((_vm.trans.shops.data.filter(
                      function (o) { return o.status !== 'placed' && o.status !== 'accepted'; }
                    )),function(shop,index){return _c('shop-list-card',{key:index,attrs:{"item":shop}})}),1)],1)],1)],1):_vm._e()],1),_vm._v(" "),_c('v-tab-item',[(_vm.trans.bills.size < 1)?_c('v-layout',{attrs:{"flat":"","wrap":"","justify-center":"","align-center":"","text-left":""}},[_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-icon',{staticClass:"mb-2",attrs:{"color":"error","size":"200"}},[_vm._v(" mdi-cart-off ")]),_vm._v(" "),_c('blockquote',{staticClass:"blockquote mb-5"},[_c('span',{staticStyle:{"font-size":"50px"}},[_vm._v("😢")]),_vm._v(" "),_c('h4',[_vm._v("\n                  There's nothing here. You want to pay your bill with us?\n                ")])]),_vm._v(" "),_c('footer',[_c('v-btn',{attrs:{"outlined":"","text":"","block":"","to":"/bills_payment","color":"red"}},[_vm._v("Show Biller")])],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.trans.bills.size > 0)?_c('v-tabs',{attrs:{"center-active":"","centered":"","background-color":"transparent","color":"blue"},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tab',{attrs:{"dense":""}},[_vm._v(" Ongoing ")]),_vm._v(" "),_c('v-tab',{attrs:{"dense":""}},[_vm._v(" History ")]),_vm._v(" "),_c('v-tabs-items',{model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tab-item',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},_vm._l((_vm.trans.bills.data.filter(
                      function (o) { return o.status !== 'completed' && o.status != 'cancelled'; }
                    )),function(bill,index){return _c('bills-card',{key:index,attrs:{"item":bill}})}),1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","fill-height":"","align-center":"","text-left":""}},_vm._l((_vm.trans.bills.data.filter(
                      function (o) { return o.status != 'placed' && o.status != 'accepted'; }
                    )),function(bill,index){return _c('bills-card',{key:index,attrs:{"item":bill}})}),1)],1)],1)],1):_vm._e()],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/transactions.vue?vue&type=template&id=4f77dea6&

// EXTERNAL MODULE: external "vue-loading-overlay"
var external_vue_loading_overlay_ = __webpack_require__(63);
var external_vue_loading_overlay_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_overlay_);

// EXTERNAL MODULE: ./node_modules/vue-loading-overlay/dist/vue-loading.css
var vue_loading = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderCard.vue?vue&type=template&id=d8b35866&scoped=true&
var OrderCardvue_type_template_id_d8b35866_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{staticClass:"ma-1",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-card',{staticClass:"mx-auto",attrs:{"max-width":"400"}},[_c('span',{staticClass:"bestseller mb-5"},[_vm._v(_vm._s(_vm.item.status.toUpperCase()))]),_vm._v(" "),_c('v-card-text',[(_vm.item.rider === 'unassigned' && _vm.checkIfOngoing(_vm.item.status))?_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" Waiting for rider to accept the job... ")]),_vm._v(" "),_c('v-progress-linear',{attrs:{"indeterminate":"","color":"cyan"}}),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Your rider")])],1)],1):_vm._e(),_vm._v(" "),(_vm.item.rider !== 'unassigned' && _vm.checkIfOngoing(_vm.item.status))?_c('v-card-actions',[_c('v-list',{attrs:{"dense":""}},[_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.rider_profile.profile.firstname)+" "+_vm._s(_vm.rider_profile.profile.lastname)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Your rider")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","dense":"","href":"tel:"+_vm.rider_profile.contact}},[_c('v-icon',{attrs:{"color":"blue"}},[_vm._v(" mdi-phone ")])],1)],1),_vm._v(" "),_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.$getNow(_vm.item.logs[_vm.item.logs.length-1].time).substring(10))+" "+_vm._s(_vm.item.logs[_vm.item.logs.length-1].event))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Latest Status Update")])],1)],1)],1)],1):_vm._e(),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-layout',{staticClass:"mt-5",attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_c('strong',[_vm._v("Order Reference")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_c('strong',[_vm._v(_vm._s(_vm.item.id))])]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_c('strong',[_vm._v("Order Value")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.amount.order_value)))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_vm._v(" Delivery Fee -\n                    "),_c('small',[_vm._v(_vm._s(_vm.item.delivery.distance.computed)+" km")])]),_vm._v(" "),_c('v-flex',{staticClass:"text-end",attrs:{"xs4":"","sm4":"","md4":""}},[_vm._v(" "+_vm._s(_vm._f("toPHP")((_vm.item.amount.delivery.platform + _vm.item.amount.delivery.rider + _vm.item.amount.sc.markup)))+" ")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),(_vm.computeDeduction.amount>0)?_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_c('span',{staticClass:"subheading"},[_c('strong',[_vm._v("Discount "+_vm._s(_vm.computeDeduction. text))])])]):_vm._e(),_vm._v(" "),(_vm.computeDeduction.amount>0)?_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_c('div',{staticClass:"ml-2 red--text"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.computeDeduction.amount)))])])]):_vm._e(),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_c('span',{staticClass:"subheading"},[_c('strong',[_vm._v("Total")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_c('div',{staticClass:"ml-2 red--text"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.amount.grandtotal - _vm.computeDeduction.amount)))])])])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-expansion-panels',{attrs:{"accordion":"","popout":""}},[_c('v-expansion-panel',[_c('v-expansion-panel-header',[_vm._v("View Items")]),_vm._v(" "),_c('v-expansion-panel-content',[_c('v-list',{attrs:{"dense":""}},_vm._l((_vm.item.order.items),function(i,index){return _c('v-list-item-group',{key:index},[_c('v-list-item',[_c('v-list-item-avatar',{attrs:{"tile":"","color":"grey darken-3"}},[_c('v-img',{staticClass:"elevation-6",attrs:{"src":i.info.img}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',{domProps:{"textContent":_vm._s(i.info.name)}}),_vm._v(" "),_c('v-list-item-subtitle',[_c('small',[_vm._v(_vm._s(_vm.computeAddOns(i.add_ons)))])]),_vm._v(" "),_c('v-list-item-subtitle',{staticClass:"text--primary"},[_c('strong',[_vm._v(" "+_vm._s(_vm._f("toPHP")((_vm.computeTotal(i) / i.qty)))+" x "+_vm._s(i.qty)+" = "+_vm._s(_vm._f("toPHP")(_vm.computeTotal(i)))+" ")])])],1)],1),_vm._v(" "),(index <= _vm.item.order.items)?_c('v-divider',{key:"divide_" + index}):_vm._e()],1)}),1)],1)],1)],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),(_vm.item.assign_rider === 'unassigned' && _vm.checkIfOngoing(_vm.item.status))?_c('v-card-actions',[_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-avatar',{attrs:{"color":"grey darken-3"}},[_c('v-img',{directives:[{name:"img",rawName:"v-img"}],staticClass:"elevation-6"})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" Waiting for rider to accept the job... ")]),_vm._v(" "),_c('v-progress-linear',{attrs:{"indeterminate":"","color":"cyan"}}),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Your rider")])],1)],1)],1):_vm._e(),_vm._v(" "),_c('v-card-actions',[_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-avatar',{attrs:{"color":"grey darken-3"}},[_c('v-img',{staticClass:"elevation-6",attrs:{"src":_vm.item.order.merchant.logo}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.item.order.merchant.name)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" "+_vm._s(_vm.item.order.merchant.branch)+" ")])],1),_vm._v(" "),_c('v-list-item-action',[(_vm.checkIfOngoing(_vm.item.status))?_c('v-btn',{attrs:{"small":"","dense":"","text":"","color":"blue darken-1"},on:{"click":function($event){$event.stopPropagation();_vm.orderSheet = true}}},[_vm._v(" Manage ")]):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"inset":""},model:{value:(_vm.orderSheet),callback:function ($$v) {_vm.orderSheet=$$v},expression:"orderSheet"}},[_c('v-list',{attrs:{"dense":""}},[_c('v-subheader',[_vm._v("Manage Order")]),_vm._v(" "),_c('v-list-item',{attrs:{"disabled":_vm.item.status != 'placed'},on:{"click":function($event){$event.stopPropagation();_vm.dialog = true}}},[_c('v-list-item-title',[_vm._v("Cancel Order")])],1),_vm._v(" "),_c('v-list-item',{on:{"click":function($event){$event.stopPropagation();_vm.mapSheet = true}}},[_c('v-list-item-title',[_vm._v("Change Delivery Address")])],1),_vm._v(" "),_c('v-list-item',{on:{"click":function($event){$event.stopPropagation();_vm.generateDates(), _vm.timediag = true}}},[_c('v-list-item-title',[_vm._v("Change Delivery Time")])],1),_vm._v(" "),_c('v-list-item',{on:{"click":function($event){$event.stopPropagation();;(_vm.dialog = false), (_vm.contactsheet = true)}}},[_c('v-list-item-title',[_vm._v("Update Contact Information")])],1),_vm._v(" "),_c('v-list-item',{on:{"click":function($event){$event.stopPropagation();_vm.tipdiag = true}}},[_c('v-list-item-title',[_vm._v("Change/Add Rider Tip")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"persistent":""},model:{value:(_vm.contactsheet),callback:function ($$v) {_vm.contactsheet=$$v},expression:"contactsheet"}},[_c('v-card',{attrs:{"tile":""}},[_c('v-card-title',{attrs:{"primary-title":""}},[_vm._v(" Contact Information ")]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md12":""}},[_c('v-text-field',{attrs:{"dense":"","label":"Fullname","outlined":"","placeholder":"Fullname"},model:{value:(_vm.otherContact.name),callback:function ($$v) {_vm.$set(_vm.otherContact, "name", $$v)},expression:"otherContact.name"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":""}},[_c('v-text-field',{attrs:{"dense":"","label":"Your number","outlined":"","placeholder":"Your number"},model:{value:(_vm.otherContact.number),callback:function ($$v) {_vm.$set(_vm.otherContact, "number", $$v)},expression:"otherContact.number"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","color":"red"},on:{"click":function($event){_vm.setContactInfo(), (_vm.contactsheet = false)}}},[_vm._v(" Apply Changes ")])],1)],1)],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-dialog',{attrs:{"max-width":"290"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v(" Cancel your order? ")]),_vm._v(" "),_c('v-card-text',[_vm._v(" You can cancel your order without charges as long as the restaurant is not processi ng your order. ")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":function($event){_vm.dialog = false}}},[_vm._v(" Close ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":function($event){_vm.cancelOrder(), (_vm.dialog = false)}}},[_vm._v(" Ok ")])],1)],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"scrollable":""},model:{value:(_vm.mapSheet),callback:function ($$v) {_vm.mapSheet=$$v},expression:"mapSheet"}},[_c('v-card',{attrs:{"tile":"","height":"600px"}},[_c('v-card-title',{attrs:{"primary-title":""}},[_vm._v(" Update Delivery Address\n                "),_c('small',[_vm._v(" This will recompute your\n                    "),_c('strong',[_vm._v("Delivery Fee")])])]),_vm._v(" "),_c('v-card-text',[_c('div',{staticClass:"mapcontainer"},[_c('GMap',{ref:"gMap",attrs:{"id":"gmap","center":_vm.mylocation,"options":{
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: true,
            zoomControl: true,
            gestureHandling: 'greedy'
          },"zoom":20},on:{"center_changed":_vm.centerChange}},[_c('GMapMarker',{ref:"gmapmarker",attrs:{"position":_vm.mylocation,"options":{ icon: _vm.selectedmarker }}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-textarea',{attrs:{"label":"Address","outlined":"","placeholder":"Address"},model:{value:(_vm.fare.delivery_address),callback:function ($$v) {_vm.$set(_vm.fare, "delivery_address", $$v)},expression:"fare.delivery_address"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-text-field',{attrs:{"hint":"Type 'NA' if not applicable","label":"Floor/Unit/Room No.","persistent-hint":"","outlined":""},model:{value:(_vm.fare.units),callback:function ($$v) {_vm.$set(_vm.fare, "units", $$v)},expression:"fare.units"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-textarea',{attrs:{"label":"Note to rider","outlined":"","placeholder":"eg. Landmark/ Building"},model:{value:(_vm.fare.notetorider),callback:function ($$v) {_vm.$set(_vm.fare, "notetorider", $$v)},expression:"fare.notetorider"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","color":"red"},on:{"click":function($event){_vm.recalculateFees(), (_vm.mapSheet = false)}}},[_vm._v(" Apply Changes ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"persistent":""},model:{value:(_vm.timediag),callback:function ($$v) {_vm.timediag=$$v},expression:"timediag"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Delivery Date & Time")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md6":"","lg6":"","sm6":""}},[_c('v-select',{attrs:{"flat":"","items":_vm.dates,"return-object":"","label":"Delivery Date"},scopedSlots:_vm._u([{key:"selection",fn:function(data){return [_vm._v(" "+_vm._s(data.item.label)+", "+_vm._s(data.item.day_name)+" "+_vm._s(data.item.name)+" "+_vm._s(data.item.day)+" ")]}},{key:"item",fn:function(data){return [_vm._v(" "+_vm._s(data.item.label)+", "+_vm._s(data.item.day_name)+" "+_vm._s(data.item.name)+" "+_vm._s(data.item.day)+" ")]}}]),model:{value:(_vm.delivery_date),callback:function ($$v) {_vm.delivery_date=$$v},expression:"delivery_date"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md6":"","lg6":"","sm6":""}},[_c('v-select',{attrs:{"flat":"","items":_vm.delivery_date.delivery_time,"label":"Delivery Time"},model:{value:(_vm.delivery_time),callback:function ($$v) {_vm.delivery_time=$$v},expression:"delivery_time"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"blue darken-1","text":""},on:{"click":function($event){_vm.timediag = false}}},[_vm._v(" Close ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"blue darken-1","text":""},on:{"click":function($event){_vm.saveNewTime(), (_vm.timediag = false)}}},[_vm._v(" Save ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"persistent":""},model:{value:(_vm.tipdiag),callback:function ($$v) {_vm.tipdiag=$$v},expression:"tipdiag"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Rider Tip")])]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-text-field',{attrs:{"right":"","type":"number","dense":"","solo":"","label":"Rider Time","outlined":"","placeholder":"Amount of tip"},model:{value:(_vm.rider_tip),callback:function ($$v) {_vm.rider_tip=$$v},expression:"rider_tip"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","disabled":_vm.rider_tip < 0,"color":"red"},on:{"click":_vm.saveTip}},[_vm._v(" Apply Changes ")])],1)],1)],1),_vm._v(" "),_c('v-snackbar',{attrs:{"color":"success","bottom":"","timeout":_vm.timeout},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_vm._v(" "+_vm._s(_vm.info)+" ")])],1)}
var OrderCardvue_type_template_id_d8b35866_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/OrderCard.vue?vue&type=template&id=d8b35866&scoped=true&

// EXTERNAL MODULE: ./node_modules/lodash.clonedeep/index.js
var lodash_clonedeep = __webpack_require__(180);
var lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep);

// EXTERNAL MODULE: external "geofirestore"
var external_geofirestore_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OrderCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var OrderCardvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,

      default() {
        return {};
      }

    }
  },
  watch: {
    rider_profile(val) {
      console.log(val);
    }

  },

  data() {
    return {
      business: {},
      snackbar: false,
      info: '',
      timeout: 3500,
      timediag: false,
      delivery_date: {
        delivery_time: []
      },
      dates: [],
      delivery_time: '',
      mapSheet: false,
      selectedmarker: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
      otherContact: {
        name: '',
        number: ''
      },
      tiptooltip: false,
      rider_tip: 0,
      rider_profile: {
        contact: '',
        profile: {
          firstname: ''
        }
      },
      tipdiag: false,
      fare: {
        delivery_address: '',
        units: '',
        notetorider: ''
      },
      contactsheet: false,
      dialog: false,
      orderSheet: false,
      showtooltip: false,
      mylocation: {
        lat: 9.7941185,
        lng: 118.7322599
      }
    };
  },

  computed: {
    df() {
      return this.$store.getters['admin/getFare'];
    },

    computeDeduction() {
      let discount = 0;
      let discountText = '';

      if (this.item.amount.hasOwnProperty('deduction')) {
        if (this.item.amount.deduction.charged_to === 'merchant') {
          discount = discount + this.item.amount.deduction.computed;
        } else if (this.item.amount.deduction.charged_to === 'platform') {
          discount = discount + this.item.amount.deduction.computed;
        }

        discountText = this.item.amount.deduction.code + '-' + this.item.amount.deduction.value;
      }

      return {
        text: discountText,
        amount: discount
      };
    }

  },

  mounted() {
    if (this.item.rider !== 'unassigned') {
      this.getRiderInfo();
    }

    this.mylocation = {
      lat: this.item.delivery.to.coord.lat,
      lng: this.item.delivery.to.coord.lng
    };
    this.rider_tip = this.item.amount.tip;
    this.fare = {
      delivery_address: this.item.delivery.to.address,
      units: this.item.delivery.to.unit,
      notetorider: this.item.delivery.rider_note,
      coord: Object.assign({}, this.item.delivery.to.coord)
    };

    try {
      this.otherContact = {
        name: this.item.order.by.otherContact.name,
        number: this.item.order.by.otherContact.number
      };
    } catch (e) {
      this.otherContact = {
        name: this.item.order.by.name,
        number: this.item.order.by.contact
      };
    }
  },

  methods: {
    getRiderInfo() {
      var rider = new external_geofirestore_["GeoCollectionReference"](this.$fireStoreObj().collection('riders'));
      this.$bind('rider_profile', rider.doc(this.item.rider));
    },

    checkIfOngoing(val) {
      if (val === 'placed' || val === 'ongoing' || val === 'accepted') {
        return true;
      } else {
        return false;
      }
    },

    saveTip() {
      this.$fireStoreObj().collection('orders').doc(this.item.id).update({
        'd.amount.tip': Math.round(this.rider_tip)
      }).then(() => {
        this.tipdiag = false;
        this.orderSheet = false;
        this.info = 'Tip amount recorded. Thank you!';
        this.snackbar = true;
      });
    },

    saveNewTime() {
      this.$fireStoreObj().collection('orders').doc(this.item.id).update({
        'd.delivery.date': this.delivery_date.date,
        'd.delivery.time': this.delivery_time,
        'd.timestamp': this.$generateTimestamp(this.delivery_date.date, this.delivery_time)
      }).then(() => {
        this.orderSheet = false;
        this.info = 'Delivery Time & Date updated';
        this.snackbar = true;
      });
    },

    generateDates() {
      this.$fireStoreObj().collection('merchant').doc(this.item.order.merchant.id).get().then(d => {
        let data = d.data().d;
        this.business.delivery = Object.assign({}, data.delivery_time);
        const today = this.addDays(new Date(), 0);
        const tomorrow = this.addDays(new Date(), 1);
        const nextday = this.addDays(new Date(), 2);

        if (new Date().getHours() < 21) {
          this.dates = [today, tomorrow, nextday];
        } else {
          this.dates = [tomorrow, nextday];

          for (let i = 3; i <= 6; i++) this.dates.push(this.addDays(new Date(), i));
        }
      });
    },

    addDays(date, days) {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const label = ['Today', 'Tomorrow', 'Advanced Order'];
      const result = new Date(date);
      result.setDate(result.getDate() + days);

      if (days === 2) {
        label.push(dayNames[result.getDay()]);
      }

      let delivery_time = [];
      let now = new Date(this.$getNow()).getTime();
      let close = new Date(this.$getNow().substring(0, 10) + ' ' + this.business.delivery.close);
      let open = new Date(this.$getNow().substring(0, 10) + ' ' + this.business.delivery.open);

      if (days === 0) {
        if (now < close && now > open) delivery_time = this.$timeRange(this.$formatAMPM(new Date()), this.business.delivery.close, 45);else delivery_time = this.$timeRange(this.business.delivery.open, this.business.delivery.close, 45);
        delivery_time.unshift('ASAP');
      } else {
        delivery_time = this.$timeRange(this.business.delivery.open, this.business.delivery.close, 45);
      }

      return {
        date: result.toISOString().slice(0, 10),
        name: monthNames[result.getMonth()],
        day: result.getDate(),
        day_name: dayNames[result.getDay()],
        label: days < 2 ? label[days] : label[2],
        delivery_time
      };
    },

    recalculateFees() {
      const coordinates = this.$refs.gMap.map.getCenter();
      const dl = {
        lat: coordinates.lat(),
        lng: coordinates.lng()
      };
      const sl = {
        lat: this.item.delivery.from.coord.lat,
        lng: this.item.delivery.from.coord.lng
      };
      this.$store.dispatch('admin/getAreaByLocation', {
        lat: this.item.delivery.from.coord.lat,
        lng: this.item.delivery.from.coord.lng
      }).then(() => {
        this.$axios.$get('/distance/', {
          params: {
            origins: sl.lat + ',' + sl.lng,
            destinations: dl.lat + ',' + dl.lng,
            key: 'AIzaSyDX-atoLm6nQpMgQ_GYHIo1kiscAe5txXc'
          },
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }).then(d => {
          const platform = parseFloat(this.df.fees.food.distance_platform);
          const rider = parseFloat(this.df.fees.food.distance_rider);
          const md = parseFloat(this.df.fees.food.min_distance);
          const min_df = parseFloat(this.df.fees.food.min_df);
          const distance = d.rows[0].elements[0].distance.value;
          const fixed_rider_fee = parseFloat(this.df.fees.food.rider_fixed_fee);
          let df = 0;

          if (distance / 1000 < md) {
            df = min_df;
          } else {
            let multiplier = distance / 1000 - md;

            if (multiplier < 1) {
              multiplier = 1;
            }

            multiplier = Math.floor(multiplier) + 1;
            df = (rider + platform) * multiplier + min_df;
          }

          const distance_actual = parseFloat(d.rows[0].elements[0].distance.value / 1000).toFixed(2);
          let rider_df = 0;
          if (distance_actual <= md) rider_df = fixed_rider_fee;else rider_df = fixed_rider_fee + (distance_actual - md) * rider;
          rider_df = Math.floor(rider_df);
          let platform_df = Math.floor(df - rider_df);
          const total = parseFloat(this.item.amount.order_value) + rider_df + platform_df + parseFloat(this.item.amount.sc.markup);
          let update_data = lodash_clonedeep_default()(this.item);
          delete update_data.id;
          update_data.amount.tip = Math.round(this.rider_tip);
          update_data.amount.delivery = {
            platform: platform_df,
            rider: rider_df
          };
          update_data.amount.grandtotal = total;
          update_data.delivery.distance = {
            computed: parseFloat(Math.floor(d.rows[0].elements[0].distance.value / 1000) + 1).toFixed(2),
            actual: parseFloat(d.rows[0].elements[0].distance.value / 1000).toFixed(2)
          };
          update_data.delivery.to = {
            address: this.fare.delivery_address,
            coord: {
              lat: dl.lat,
              lng: dl.lng
            },
            unit: this.fare.units
          };
          update_data.delivery.rider_note = this.fare.notetorider;
          update_data.coordinates = new this.$fireStoreObj.GeoPoint(dl.lat, dl.lng);
          const firestore = this.$fireStoreObj();
          const geocollection = new external_geofirestore_["GeoCollectionReference"](firestore.collection('orders'));
          geocollection.doc(this.item.id).update(update_data).then(() => {
            this.orderSheet = false;
            this.info = 'Delivery details and fees updated.';
            this.snackbar = true;
          });
        }).catch(e => {
          console.log(e);
        });
      });
    },

    centerChange() {
      const coordinates = this.$refs.gMap.map.getCenter();
      this.$refs.gmapmarker.marker.setPosition({
        lat: coordinates.lat(),
        lng: coordinates.lng()
      });
    },

    setContactInfo() {
      this.$fireStoreObj().collection('orders').doc(this.item.id).update({
        'd.order.by.otherContact': this.otherContact
      }).then(() => {
        this.orderSheet = false;
        this.info = 'Contact Information updated';
        this.snackbar = true;
      });
    },

    cancelOrder() {
      this.$fireStoreObj().collection('orders').doc(this.item.id).update({
        'd.status': 'cancelled'
      }).then(() => {
        this.orderSheet = false;
        this.info = 'Order is now cancelled';
        this.snackbar = true;
      });
    },

    computeAddOns(item) {
      const txt = [];

      for (const value of Object.entries(item)) {
        if (Array.isArray(value)) {
          value.forEach(a => {
            txt.push(a.name);
          });
        } else {
          txt.push(value.name);
        }
      }

      let res = 'w/ ';

      for (let i = 0; i < txt.length; i++) {
        res = res + txt[i] + ',';
      }

      return res.substring(0, res.length - 1);
    },

    computeTotal(item) {
      let total = 0;
      total = total + item.info.base_price * item.qty;
      const addons = Object.values(item.add_ons);
      addons.forEach(a => {
        if (Array.isArray(a)) {
          a.forEach(b => {
            total = total + b.price * item.qty;
          });
        } else {
          total = total + a.price * item.qty;
        }
      });
      return total;
    }

  }
});
// CONCATENATED MODULE: ./components/OrderCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OrderCardvue_type_script_lang_js_ = (OrderCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var components_VList = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 5 modules
var VSelect = __webpack_require__(196);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js
var VSubheader = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(208);

// CONCATENATED MODULE: ./components/OrderCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(256)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OrderCardvue_type_script_lang_js_,
  OrderCardvue_type_template_id_d8b35866_scoped_true_render,
  OrderCardvue_type_template_id_d8b35866_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "d8b35866",
  "02ccddf4"
  
)

/* harmony default export */ var OrderCard = (component.exports);

/* vuetify-loader */


































installComponents_default()(component, {VBottomSheet: VBottomSheet["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VDivider: VDivider["a" /* default */],VExpansionPanel: VExpansionPanel["a" /* default */],VExpansionPanelContent: VExpansionPanelContent["a" /* default */],VExpansionPanelHeader: VExpansionPanelHeader["a" /* default */],VExpansionPanels: VExpansionPanels["a" /* default */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSnackbar: VSnackbar["a" /* default */],VSpacer: VSpacer["a" /* default */],VSubheader: VSubheader["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BillsCard.vue?vue&type=template&id=09b06b08&
var BillsCardvue_type_template_id_09b06b08_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{staticClass:"ma-1",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-card',{staticClass:"mx-auto",attrs:{"max-width":"400"}},[_c('span',{staticClass:"bestseller mb-5"},[_vm._v(_vm._s(_vm.item.status.toUpperCase()))]),_vm._v(" "),_c('v-card-text',[(_vm.item.rider !== 'unassigned' && _vm.checkIfOngoing(_vm.item.status))?_c('v-card-actions',[_c('v-list',{attrs:{"dense":""}},[_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.rider_profile.profile.firstname)+" "+_vm._s(_vm.rider_profile.profile.lastname)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Your rider")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","dense":"","href":"tel:"+_vm.rider_profile.contact}},[_c('v-icon',{attrs:{"color":"blue"}},[_vm._v(" mdi-phone ")])],1)],1),_vm._v(" "),_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.$getNow(_vm.item.logs[_vm.item.logs.length-1].time).substring(10))+" "+_vm._s(_vm.item.logs[_vm.item.logs.length-1].event))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Latest Status Update")])],1)],1)],1)],1):_vm._e(),_vm._v(" "),_c('v-layout',{staticClass:"mt-5",attrs:{"wrap":""}},[(_vm.item.rider === 'unassigned' && _vm.checkIfOngoing(_vm.item.status))?_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" Waiting for rider to accept the job... ")]),_vm._v(" "),_c('v-progress-linear',{attrs:{"indeterminate":"","color":"cyan"}}),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Your rider")])],1)],1):_vm._e(),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v("Request No.")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm.item.id))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v("Appoinment Time")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm.item.appointment.date)+" "+_vm._s(_vm.item.appointment.time))])]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v("Service Fee")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.fees.sf)))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_vm._v("Pickup Fee -\n                    "),_c('small',[_vm._v(_vm._s(_vm.item.fees.pickup.distance)+" km")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.fees.pickup.fees.platform + _vm.item.fees.pickup.fees.rider)))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_vm._v("Delivery Fee -\n                    "),_c('small',[_vm._v(_vm._s(_vm.item.fees.dropoff.distance)+" km")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.fees.dropoff.fees.platform + _vm.item.fees.dropoff.fees.rider)))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('span',{staticClass:"subheading"},[_c('strong',[_vm._v("Total")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('div',{staticClass:"ml-2 red--text"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.fees.pickup.fees.platform + _vm.item.fees.pickup.fees.rider + _vm.item.fees.dropoff.fees.platform + _vm.item.fees.dropoff.fees.rider + _vm.item.fees.sf)))])])])],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-avatar',{attrs:{"color":"grey darken-3"}},[_c('v-img',{staticClass:"elevation-6",attrs:{"src":_vm.item.biller.logo}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.item.biller.name)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" "+_vm._s(_vm.item.biller.branch)+" ")])],1),_vm._v(" "),_c('v-list-item-action',[(_vm.checkIfOngoing(_vm.item.status))?_c('v-btn',{attrs:{"small":"","dense":"","text":"","color":"red"},on:{"click":function($event){$event.stopPropagation();_vm.dialog = true}}},[_vm._v(" Cancel ")]):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"290"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("Appointment Cancellation")]),_vm._v(" "),_c('v-card-text',[_vm._v("You can cancel your appointment as long as no rider accepted the job.")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":function($event){_vm.dialog = false}}},[_vm._v(" Close ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":function($event){_vm.cancelAppointment(), (_vm.dialog = false)}}},[_vm._v("Yes, Cancel")])],1)],1)],1)],1)],1)}
var BillsCardvue_type_template_id_09b06b08_staticRenderFns = []


// CONCATENATED MODULE: ./components/BillsCard.vue?vue&type=template&id=09b06b08&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BillsCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Manage Biller
//Change Pickup Address
//Change Drop Off Address
//Change Appointment  Time

/* harmony default export */ var BillsCardvue_type_script_lang_js_ = ({
  props: {
    item: Object
  },

  data() {
    return {
      orderSheet: false,
      info: '',
      snackbar: false,
      dialog: false,
      rider_profile: {
        contact: '',
        profile: {
          firstname: ''
        }
      }
    };
  },

  mounted() {
    if (this.item.rider !== 'unassigned') {
      this.getRiderInfo();
    }
  },

  methods: {
    getRiderInfo() {
      var rider = new external_geofirestore_["GeoCollectionReference"](this.$fireStoreObj().collection('riders'));
      this.$bind('rider_profile', rider.doc(this.item.rider));
    },

    checkIfOngoing(val) {
      if (val === 'placed' || val === 'ongoing' || val === 'accepted' || val === 'enroute') {
        return true;
      } else {
        return false;
      }
    },

    cancelAppointment() {
      this.$fireStoreObj().collection('billspay_request').doc(this.item.id).update({
        'd.status': 'cancelled'
      }).then(() => {
        this.orderSheet = false;
        this.info = 'Appointment is now cancelled';
        this.snackbar = true;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/BillsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BillsCardvue_type_script_lang_js_ = (BillsCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/BillsCard.vue





/* normalize component */

var BillsCard_component = Object(componentNormalizer["a" /* default */])(
  components_BillsCardvue_type_script_lang_js_,
  BillsCardvue_type_template_id_09b06b08_render,
  BillsCardvue_type_template_id_09b06b08_staticRenderFns,
  false,
  null,
  null,
  "f3c0edf8"
  
)

/* harmony default export */ var BillsCard = (BillsCard_component.exports);

/* vuetify-loader */






















installComponents_default()(BillsCard_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VDivider: VDivider["a" /* default */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopListCard.vue?vue&type=template&id=1d31fd97&
var ShopListCardvue_type_template_id_1d31fd97_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{staticClass:"ma-1",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-card',{staticClass:"mx-auto",attrs:{"max-width":"400"}},[_c('span',{staticClass:"bestseller mb-5"},[_vm._v(_vm._s(_vm.item.status.toUpperCase()))]),_vm._v(" "),_c('v-card-text',[(_vm.item.rider !== 'unassigned' && _vm.checkIfOngoing(_vm.item.status))?_c('v-card-actions',[_c('v-list',{attrs:{"dense":""}},[_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.rider_profile.profile.firstname)+" "+_vm._s(_vm.rider_profile.profile.lastname)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Your rider")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","dense":"","href":"tel:"+_vm.rider_profile.contact}},[_c('v-icon',{attrs:{"color":"blue"}},[_vm._v(" mdi-phone ")])],1)],1),_vm._v(" "),_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.$getNow(_vm.item.logs[_vm.item.logs.length-1].time).substring(10))+" "+_vm._s(_vm.$item.logs[_vm.item.logs.length-1].event))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Latest Status Update")])],1)],1)],1)],1):_vm._e(),_vm._v(" "),_c('v-layout',{staticClass:"mt-5",attrs:{"wrap":""}},[(_vm.item.rider === 'unassigned' && _vm.checkIfOngoing(_vm.item.status))?_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" Waiting for rider to accept the job... ")]),_vm._v(" "),_c('v-progress-linear',{attrs:{"indeterminate":"","color":"cyan"}}),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Your rider")])],1)],1):_vm._e(),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v("Request No.")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm.item.id))])]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_vm._v(" With Price ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.getTotal().total)))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_vm._v(" Progress ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_c('span',{staticClass:"red--text"},[_vm._v(_vm._s(_vm.getTotal().done)+"/"+_vm._s(_vm.item.items.length))]),_vm._v(" items finish")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_vm._v("Delivery Fee -\n                    "),_c('small',[_vm._v(_vm._s(_vm.item.deliver.distance.computed)+" km")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.fees.delivery.platform + _vm.item.fees.delivery.rider)))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v("Service Fee")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.getTotal().sc))+" ("+_vm._s(_vm.item.fees.sc)+" %) ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('span',{staticClass:"subheading"},[_c('strong',[_vm._v("Total")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","sm6":"","md6":""}},[_c('div',{staticClass:"ml-2 red--text"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.fees.delivery.platform + _vm.item.fees.delivery.rider + _vm.getTotal().sc + _vm.getTotal().total)))])])])],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-list-item',{staticClass:"grow",attrs:{"dense":""}},[_c('v-list-item-avatar',{attrs:{"color":"grey darken-3"}},[_c('v-img',{staticClass:"elevation-6",attrs:{"src":_vm.item.store.logo}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.item.store.name)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" "+_vm._s(_vm.item.store.branch)+" ")])],1),_vm._v(" "),_c('v-list-item-action',[(_vm.checkIfOngoing(_vm.item.status))?_c('v-btn',{attrs:{"small":"","dense":"","text":"","color":"blue"},on:{"click":function($event){$event.stopPropagation();_vm.orderSheet = true}}},[_vm._v(" Manage ")]):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"290"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("Appointment Cancellation")]),_vm._v(" "),_c('v-card-text',[_vm._v("You can cancel your appointment as long as no rider accepted the job.")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":function($event){_vm.dialog = false}}},[_vm._v(" Close ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":function($event){_vm.cancelAppointment(), (_vm.dialog = false)}}},[_vm._v("Yes, Cancel")])],1)],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"inset":""},model:{value:(_vm.orderSheet),callback:function ($$v) {_vm.orderSheet=$$v},expression:"orderSheet"}},[_c('v-list',{attrs:{"dense":""}},[_c('v-subheader',[_vm._v("Manage Shopping")]),_vm._v(" "),_c('v-list-item',{attrs:{"disabled":_vm.item.status != 'placed'},on:{"click":function($event){$event.stopPropagation();_vm.dialog = true}}},[_c('v-list-item-title',[_vm._v("Cancel Shopping")])],1),_vm._v(" "),_c('v-list-item',{attrs:{"disabled":_vm.item.status == 'placed'},on:{"click":function($event){$event.stopPropagation();_vm.bsQoute = true}}},[_c('v-list-item-title',[_vm._v("Track Item Prices")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{model:{value:(_vm.addNewItem),callback:function ($$v) {_vm.addNewItem=$$v},expression:"addNewItem"}},[_c('v-card',[_c('v-card-title',[_vm._v(_vm._s(_vm.mode=='add' ? 'Add Item to List' : 'Edit Item'))]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},[_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md12":"","sm12":"","lg12":""}},[_c('v-textarea',{attrs:{"rows":"3","label":"Item description","outlined":"","placeholder":"eg. Brand, Color, etc."},model:{value:(_vm.shopitem.desc),callback:function ($$v) {_vm.$set(_vm.shopitem, "desc", $$v)},expression:"shopitem.desc"}})],1),_vm._v(" "),_c('v-flex',{staticClass:"text-center",attrs:{"xs4":"","md4":"","sm4":"","lg4":""}},[_c('v-text-field',{attrs:{"type":"number","label":"Measure","dense":""},model:{value:(_vm.shopitem.measure),callback:function ($$v) {_vm.$set(_vm.shopitem, "measure", $$v)},expression:"shopitem.measure"}})],1),_vm._v(" "),_c('v-flex',{staticClass:"text-center",attrs:{"xs4":"","md4":"","sm4":"","lg4":""}},[_c('v-select',{attrs:{"dense":"","flat":"","items":_vm.units,"label":"Unit","item-text":"name","item-value":"value"},model:{value:(_vm.shopitem.unit),callback:function ($$v) {_vm.$set(_vm.shopitem, "unit", $$v)},expression:"shopitem.unit"}})],1),_vm._v(" "),_c('v-flex',{staticClass:"text-center",attrs:{"xs4":"","md4":"","sm4":"","lg4":""}},[_c('span',{staticClass:"caption grey--text"},[_vm._v(" Qty ")]),_vm._v(" "),_c('v-icon',{staticClass:"white--text",attrs:{"color":"red"},on:{"click":function($event){_vm.shopitem.qty = _vm.shopitem.qty < 1 ? 1 : _vm.shopitem.qty - 1}}},[_vm._v(" mdi-minus ")]),_vm._v(" "+_vm._s(_vm.shopitem.qty)+"\n                        "),_c('v-icon',{staticClass:"white--text",attrs:{"color":"green"},on:{"click":function($event){_vm.shopitem.qty = _vm.shopitem.qty + 1}}},[_vm._v(" mdi-plus ")])],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"shopresponsive",attrs:{"outlined":"","text":"","color":"blue","block":""},on:{"click":function($event){$event.stopPropagation();_vm.addItem(), _vm.addNewItem = false}}},[_vm._v(_vm._s(_vm.mode=='add' ? 'Add To List' : 'Update Item'))])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"fullscreen":"","persistent":""},model:{value:(_vm.bsQoute),callback:function ($$v) {_vm.bsQoute=$$v},expression:"bsQoute"}},[_c('v-card',{staticStyle:{"height":"100vh"}},[_c('v-card-title',[_vm._v("Price Tracking")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("Tap or Click Item to Edit")]),_vm._v(" "),_c('v-card-text',[_c('small',[_vm._v("You cannot remove or edit items marked as\n                    "),_c('strong',[_c('span',{staticClass:"red--text"},[_vm._v("PAID")])])]),_vm._v(" "),_c('v-list',{attrs:{"dense":"","three-line":""}},_vm._l((_vm.item.items),function(_item,index){return _c('v-list-item-group',{key:index},[_c('span',{staticClass:"bestseller"},[_vm._v(_vm._s(_item.status.toUpperCase()))]),_vm._v(" "),_c('v-list-item',{attrs:{"dense":"","disabled":_item.status==='paid'}},[_c('v-list-item-content',{on:{"click":function($event){$event.stopPropagation();_vm.item_copy = Object.assign({},_item), _vm.shopitem = Object.assign({},_item), _vm.mode= 'edit', _vm.addNewItem = true}}},[_c('v-list-item-title',{domProps:{"textContent":_vm._s(_item.desc)}}),_vm._v(" "),_c('v-list-item-subtitle',{staticClass:"blue--text"},[_vm._v(" "+_vm._s(_item.measure)+" "+_vm._s(_item.unit)+" x "+_vm._s(_item.qty)+" = "+_vm._s(_item.measure * _item.qty)+" "+_vm._s(_item.unit)+" ("+_vm._s(_item.measure)+" "+_vm._s(_item.unit)+"/unit ) ")]),_vm._v(" "),_c('v-list-item-subtitle',{staticClass:"red--text"},[_vm._v(" "+_vm._s(_vm._f("toPHP")(_item.price))+" / "+_vm._s(_item.measure)+" "+_vm._s(_item.unit)+" = "+_vm._s(_vm._f("toPHP")(_item.price * _item.qty))+" ")])],1),_vm._v(" "),(_item.status!=='paid')?_c('v-list-item-action-text',[_c('v-icon',{attrs:{"small":"","color":"red"},on:{"click":function($event){$event.stopPropagation();_vm.shopitem = Object.assign({},_item), _vm.mode= 'delete', _vm.addItem()}}},[_vm._v(" mdi-delete ")])],1):_vm._e()],1),_vm._v(" "),_c('v-divider')],1)}),1),_vm._v(" "),_c('v-list',{attrs:{"dense":"","single-line":""}},[_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.getTotal().total)))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Shopping Total")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.getTotal().sc)))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Service Fee")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.fees.delivery.platform + _vm.item.fees.delivery.rider)))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Delivery Fee("+_vm._s(_vm.item.deliver.distance.computed)+" km)")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"subtitle-1 red--text"},[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.fees.delivery.platform + _vm.item.fees.delivery.rider + _vm.getTotal().sc + _vm.getTotal().total)))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Grandtotal")])],1)],1)],1),_vm._v(" "),_c('v-fab-transition',[_c('v-btn',{staticStyle:{"margin-bottom":"100px"},attrs:{"color":"pink","dark":"","small":"","absolute":"","bottom":"","right":"","fab":""},on:{"click":function($event){$event.stopPropagation();_vm.mode='add', _vm.addNewItem = true}}},[_c('v-icon',[_vm._v("mdi-plus")])],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"shopresponsive",attrs:{"outlined":"","text":"","color":"blue","block":""},on:{"click":function($event){$event.stopPropagation();_vm.bsQoute=false}}},[_vm._v("Close")])],1)],1)],1)],1)}
var ShopListCardvue_type_template_id_1d31fd97_staticRenderFns = []


// CONCATENATED MODULE: ./components/ShopListCard.vue?vue&type=template&id=1d31fd97&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopListCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ShopListCardvue_type_script_lang_js_ = ({
  props: {
    item: Object
  },
  computed: {
    units() {
      let units = [{
        name: 'Pieces(pcs)',
        value: 'pcs'
      }, {
        name: 'Liter(L)',
        value: 'L'
      }, {
        name: 'Milliliter(mL)',
        value: 'mL'
      }, {
        name: 'Pack(pack)',
        value: 'pack'
      }, {
        name: 'Kilogram(kg)',
        value: 'kg'
      }, {
        name: 'Grams(g)',
        value: 'g'
      }, {
        name: 'Milligram(mg)',
        value: 'mg'
      }, {
        name: 'Ounce(oz)',
        value: 'oz'
      }, {
        name: 'Inches(in)',
        value: 'in'
      }, {
        name: 'Meter(m)',
        value: 'm'
      }, {
        name: 'Feet(ft)',
        value: 'ft'
      }, {
        name: 'Pad(pad)',
        value: 'pad'
      }, {
        name: 'Bundle(bundle)',
        value: 'bundle'
      }, {
        name: 'Bottle(bot)',
        value: 'bot'
      }];
      return units.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    }

  },

  data() {
    return {
      item_copy: {},
      mode: 'add',
      orderSheet: false,
      info: '',
      snackbar: false,
      dialog: false,
      addNewItem: false,
      bsQoute: false,
      shopitem: {
        desc: '',
        qty: 1,
        price: 0,
        measure: 1,
        unit: 'pcs',
        status: 'unpaid'
      },
      rider_profile: {
        contact: '',
        profile: {
          firstname: ''
        }
      }
    };
  },

  mounted() {
    if (this.item.rider !== 'unassigned') {
      this.getRiderInfo();
    }
  },

  methods: {
    getRiderInfo() {
      var rider = new external_geofirestore_["GeoCollectionReference"](this.$fireStoreObj().collection('riders'));
      this.$bind('rider_profile', rider.doc(this.item.rider));
    },

    addItem() {
      const firestore = this.$fireStoreObj();
      const geocollection = new external_geofirestore_["GeoCollectionReference"](firestore.collection('shop_request'));

      if (this.mode === 'add') {
        geocollection.doc(this.item.id).update({
          items: this.$fireStoreObj.FieldValue.arrayUnion(this.shopitem)
        }).then(() => {
          this.info = 'Item added to your shopping list';
          this.snackbar = true;
          this.shopitem = {
            desc: '',
            qty: 1,
            price: 0,
            measure: 1,
            unit: 'pcs',
            status: 'unpaid'
          };
        });
      } else if (this.mode === 'edit') {
        this.shopitem.status = 'changed';
        geocollection.doc(this.item.id).update({
          items: this.$fireStoreObj.FieldValue.arrayRemove(this.item_copy)
        }).then(() => {
          geocollection.doc(this.item.id).update({
            items: this.$fireStoreObj.FieldValue.arrayUnion(this.shopitem)
          }).then(() => {
            this.shopitem = {
              desc: '',
              qty: 1,
              price: 0,
              measure: 1,
              unit: 'pcs',
              status: 'unpaid'
            };
            this.info = 'Updated in your list';
            this.snackbar = true;
          });
        });
      } else {
        geocollection.doc(this.item.id).update({
          items: this.$fireStoreObj.FieldValue.arrayRemove(this.shopitem)
        }).then(() => {
          this.info = 'Item removed from your list';
          this.snackbar = true;
          this.shopitem = {
            desc: '',
            qty: 1,
            price: 0,
            measure: 1,
            unit: 'pcs',
            status: 'unpaid'
          };
        });
      }
    },

    getTotal() {
      let total = 0;
      let withprice = 0;
      this.item.items.forEach(item => {
        total = total + item.qty * item.price;
        if (item.price > 0 || item.status == 'paid') withprice++;
      });
      return {
        sc: parseFloat((total * this.item.fees.sc / 100).toFixed(2)),
        total: total,
        done: withprice
      };
    },

    checkIfOngoing(val) {
      if (val === 'placed' || val === 'ongoing' || val === 'accepted' || val === 'enroute') {
        return true;
      } else {
        return false;
      }
    },

    cancelAppointment() {
      this.$fireStoreObj().collection('shop_request').doc(this.item.id).update({
        'd.status': 'cancelled'
      }).then(() => {
        this.orderSheet = false;
        this.info = 'Shopping  is now cancelled';
        this.snackbar = true;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ShopListCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShopListCardvue_type_script_lang_js_ = (ShopListCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(55);

// CONCATENATED MODULE: ./components/ShopListCard.vue





/* normalize component */

var ShopListCard_component = Object(componentNormalizer["a" /* default */])(
  components_ShopListCardvue_type_script_lang_js_,
  ShopListCardvue_type_template_id_1d31fd97_render,
  ShopListCardvue_type_template_id_1d31fd97_staticRenderFns,
  false,
  null,
  null,
  "71d5768c"
  
)

/* harmony default export */ var ShopListCard = (ShopListCard_component.exports);

/* vuetify-loader */































installComponents_default()(ShopListCard_component, {VBottomSheet: VBottomSheet["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VDivider: VDivider["a" /* default */],VFabTransition: transitions["c" /* VFabTransition */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemActionText: components_VList["a" /* VListItemActionText */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSpacer: VSpacer["a" /* default */],VSubheader: VSubheader["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/transactions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var transactionsvue_type_script_lang_js_ = ({
  components: {
    Loading: external_vue_loading_overlay_default.a,
    OrderCard: OrderCard,
    BillsCard: BillsCard,
    ShopListCard: ShopListCard
  },
  layout: 'menu',

  data() {
    return {
      drawer: false,
      tab: null,
      type: null,
      isLoading: true
    };
  },

  computed: {
    cartSize() {
      return this.$store.getters['cart/getCartItemCount'];
    },

    trans() {
      return this.$store.getters['auth/getMyTransaction'];
    }

  },

  mounted() {
    var ot = this.trans.shops.data.filter(o => o.status != 'cancelled' && o.status != 'completed');
    console.log(ot);
    this.$store.dispatch('auth/getMyTransaction').then(() => {
      this.isLoading = false;
    }).catch(e => {
      this.isLoading = false;
    });
  },

  methods: {
    isOngoing(status) {
      return status === 'placed' || status === 'accepted';
    }

  }
});
// CONCATENATED MODULE: ./pages/transactions.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_transactionsvue_type_script_lang_js_ = (transactionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
var VAppBar = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js
var VAppBarNavIcon = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBadge/VBadge.js
var VBadge = __webpack_require__(202);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VContent/VContent.js + 1 modules
var VContent = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js + 1 modules
var VTabItem = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 3 modules
var VTabs = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js + 1 modules
var VTabsItems = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(154);

// CONCATENATED MODULE: ./pages/transactions.vue





/* normalize component */

var transactions_component = Object(componentNormalizer["a" /* default */])(
  pages_transactionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "921da03e"
  
)

/* harmony default export */ var transactions = __webpack_exports__["default"] = (transactions_component.exports);

/* vuetify-loader */



















installComponents_default()(transactions_component, {VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VAvatar: VAvatar["a" /* default */],VBadge: VBadge["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VContent: VContent["a" /* default */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VSheet: VSheet["a" /* default */],VSpacer: VSpacer["a" /* default */],VTab: VTab["a" /* default */],VTabItem: VTabItem["a" /* default */],VTabs: VTabs["a" /* default */],VTabsItems: VTabsItems["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})


/***/ })
]);;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkJ0bi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkRpdmlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdWJoZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WUHJvZ3Jlc3NMaW5lYXIvVlByb2dyZXNzTGluZWFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbG9hZGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdmFsaWRhdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkdyaWQvVkdyaWQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRvb2xiYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL1ZDb3VudGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ291bnRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9pbnRlcnNlY3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2FyZC9WQ2FyZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkxhYmVsL1ZMYWJlbC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNZXNzYWdlcy9WTWVzc2FnZXMuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQXBwQmFyL1ZBcHBCYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNYWluL1ZNYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvY29tcGFyYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbWVudWFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdHJhbnNpdGlvbmFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQmFkZ2UvVkJhZGdlLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNoZWNrYm94L1ZTaW1wbGVDaGVja2JveC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZDaGlwL1ZDaGlwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlRleHRhcmVhL1ZUZXh0YXJlYS5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2guY2xvbmVkZWVwL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYnMuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WU2xpZGVHcm91cC9WU2xpZGVHcm91cC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZXaW5kb3cvVldpbmRvdy5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WV2luZG93L1ZXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzSXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1haW4vVk1haW4udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb250ZW50L1ZDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WU3BhY2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2hpcC9WQ2hpcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNoaXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDaGVja2JveC9WU2ltcGxlQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTZWxlY3QvVlNlbGVjdExpc3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvZmlsdGVyYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZTbmFja2Jhci9WU25hY2tiYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkJhZGdlL1ZCYWRnZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkdyaWQvVlJvdy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkFwcEJhci9WQXBwQmFyTmF2SWNvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRleHRhcmVhL1ZUZXh0YXJlYS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlNsaWRlR3JvdXAvVlNsaWRlR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzQmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFic1NsaWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZXaW5kb3cvVldpbmRvd0l0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJJdGVtLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbC9WRXhwYW5zaW9uUGFuZWwuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlNuYWNrYmFyL1ZTbmFja2Jhci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09yZGVyQ2FyZC52dWU/OWU3ZiIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkV4cGFuc2lvblBhbmVsL1ZFeHBhbnNpb25QYW5lbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkV4cGFuc2lvblBhbmVsL1ZFeHBhbnNpb25QYW5lbENvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbC9WRXhwYW5zaW9uUGFuZWxIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbC9WRXhwYW5zaW9uUGFuZWxzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3JkZXJDYXJkLnZ1ZT84ODk0Iiwid2VicGFjazovLy8uL3BhZ2VzL3RyYW5zYWN0aW9ucy52dWU/MDdjMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09yZGVyQ2FyZC52dWU/OTAyYyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9PcmRlckNhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3JkZXJDYXJkLnZ1ZT85YzQ5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3JkZXJDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JpbGxzQ2FyZC52dWU/M2U0YSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9CaWxsc0NhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmlsbHNDYXJkLnZ1ZT9iMmM2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmlsbHNDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3BMaXN0Q2FyZC52dWU/OWJiMiIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9TaG9wTGlzdENhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hvcExpc3RDYXJkLnZ1ZT9kYmE4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hvcExpc3RDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vcGFnZXMvdHJhbnNhY3Rpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9wYWdlcy90cmFuc2FjdGlvbnMudnVlP2Q4MDkiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdHJhbnNhY3Rpb25zLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBRUE7QUFDQSxnSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFFQTtBQUNBLG9IOzs7Ozs7OztBQ0hBO0FBQUE7QUFFQTtBQUNBLHNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU0sWUFBWSxHQUFHLG9GQUFzQixDQUEzQyxpQkFBMkMsQ0FBM0M7QUFDQSxNQUFNLGFBQWEsR0FBRyxvRkFBc0IsQ0FBNUMsa0JBQTRDLENBQTVDO0FBQ0EsTUFBTSxTQUFTLEdBQUcsb0ZBQXNCLENBQXhDLGNBQXdDLENBQXhDO0FBQ0EsTUFBTSxVQUFVLEdBQUcsb0ZBQXNCLENBQXpDLGVBQXlDLENBQXpDO0FBRUE7QUFRZTtBQUNiLHlCQUF1QixFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLdkI7QUFMdUI7QUFEWixDQUFmLEU7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBS0E7O0FBQ2UsdUhBQU0sQ0FBTixPQUFjO0FBQzNCLE1BQUksRUFEdUI7QUFHM0IsT0FBSyxFQUFFO0FBQ0wsWUFBUSxFQURIO0FBRUwsVUFBTSxFQUZE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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7OztBQ0F6RztBQUMzQjtBQUNMOzs7QUFHM0Q7QUFDdUY7QUFDdkYsSUFBSSxzQkFBUyxHQUFHLDhDQUFVO0FBQzFCLEVBQUUsMENBQU07QUFDUixFQUFFLE1BQU07QUFDUixFQUFFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsd0dBQVMsUUFBUTs7QUFFaEM7QUFDZ0c7QUFDdkM7QUFDTztBQUNQO0FBQ0Y7QUFDSjtBQUNFO0FBQ007QUFDTjtBQUNBO0FBQ0Y7QUFDSTtBQUNBO0FBQ0E7QUFDSDtBQUNJO0FBQ0g7QUFDSztBQUNNO0FBQ2hFLDJCQUFpQixDQUFDLHNCQUFTLEdBQUcsbUNBQU8sQ0FBQyxpREFBYyxDQUFDLG1DQUFPLENBQUMsaUNBQU0sQ0FBQyw2QkFBSSxDQUFDLCtCQUFLLENBQUMscUNBQVEsQ0FBQywrQkFBSyxDQUFDLCtCQUFLLENBQUMsNkJBQUksQ0FBQyxtQ0FBTyxDQUFDLGlDQUFNLENBQUMsbUNBQU8sQ0FBQyw2QkFBSSxDQUFDLHFDQUFRLENBQUMsK0JBQUssQ0FBQyx5Q0FBVSxDQUFDLGdEQUFhLENBQUMiLCJmaWxlIjoicGFnZXMvdHJhbnNhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZCdG4gZnJvbSAnLi9WQnRuJ1xuXG5leHBvcnQgeyBWQnRuIH1cbmV4cG9ydCBkZWZhdWx0IFZCdG5cbiIsImltcG9ydCBWRGl2aWRlciBmcm9tICcuL1ZEaXZpZGVyJ1xuXG5leHBvcnQgeyBWRGl2aWRlciB9XG5leHBvcnQgZGVmYXVsdCBWRGl2aWRlclxuIiwiaW1wb3J0IFZTdWJoZWFkZXIgZnJvbSAnLi9WU3ViaGVhZGVyJ1xuXG5leHBvcnQgeyBWU3ViaGVhZGVyIH1cbmV4cG9ydCBkZWZhdWx0IFZTdWJoZWFkZXJcbiIsImltcG9ydCBWQ2FyZCBmcm9tICcuL1ZDYXJkJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuY29uc3QgVkNhcmRBY3Rpb25zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX19hY3Rpb25zJylcbmNvbnN0IFZDYXJkU3VidGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3N1YnRpdGxlJylcbmNvbnN0IFZDYXJkVGV4dCA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fdGV4dCcpXG5jb25zdCBWQ2FyZFRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX190aXRsZScpXG5cbmV4cG9ydCB7XG4gIFZDYXJkLFxuICBWQ2FyZEFjdGlvbnMsXG4gIFZDYXJkU3VidGl0bGUsXG4gIFZDYXJkVGV4dCxcbiAgVkNhcmRUaXRsZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAkX3Z1ZXRpZnlfc3ViY29tcG9uZW50czoge1xuICAgIFZDYXJkLFxuICAgIFZDYXJkQWN0aW9ucyxcbiAgICBWQ2FyZFN1YnRpdGxlLFxuICAgIFZDYXJkVGV4dCxcbiAgICBWQ2FyZFRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRvb2xiYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZTaGVldCBmcm9tICcuLi9WU2hlZXQvVlNoZWV0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkltZywgeyBzcmNPYmplY3QgfSBmcm9tICcuLi9WSW1nL1ZJbWcnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGJyZWFraW5nIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVlNoZWV0LmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRvb2xiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYWJzb2x1dGU6IEJvb2xlYW4sXG4gICAgYm90dG9tOiBCb29sZWFuLFxuICAgIGNvbGxhcHNlOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGV4dGVuZGVkOiBCb29sZWFuLFxuICAgIGV4dGVuc2lvbkhlaWdodDoge1xuICAgICAgZGVmYXVsdDogNDgsXG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIH0sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBmbG9hdGluZzogQm9vbGVhbixcbiAgICBwcm9taW5lbnQ6IEJvb2xlYW4sXG4gICAgc2hvcnQ6IEJvb2xlYW4sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdIGFzIFByb3BUeXBlPHN0cmluZyB8IHNyY09iamVjdD4sXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hlYWRlcicsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGlzRXh0ZW5kZWQ6IGZhbHNlLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgaWYgKCF0aGlzLmlzRXh0ZW5kZWQpIHJldHVybiBoZWlnaHRcblxuICAgICAgY29uc3QgZXh0ZW5zaW9uSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5leHRlbnNpb25IZWlnaHQpXG5cbiAgICAgIHJldHVybiB0aGlzLmlzQ29sbGFwc2VkXG4gICAgICAgID8gaGVpZ2h0XG4gICAgICAgIDogaGVpZ2h0ICsgKCFpc05hTihleHRlbnNpb25IZWlnaHQpID8gZXh0ZW5zaW9uSGVpZ2h0IDogMClcbiAgICB9LFxuICAgIGNvbXB1dGVkQ29udGVudEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLmhlaWdodCkgcmV0dXJuIHBhcnNlSW50KHRoaXMuaGVpZ2h0KVxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQgJiYgdGhpcy5kZW5zZSkgcmV0dXJuIDk2XG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCAmJiB0aGlzLnNob3J0KSByZXR1cm4gMTEyXG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCkgcmV0dXJuIDEyOFxuICAgICAgaWYgKHRoaXMuZGVuc2UpIHJldHVybiA0OFxuICAgICAgaWYgKHRoaXMuc2hvcnQgfHwgdGhpcy4kdnVldGlmeS5icmVha3BvaW50LnNtQW5kRG93bikgcmV0dXJuIDU2XG4gICAgICByZXR1cm4gNjRcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRvb2xiYXInOiB0cnVlLFxuICAgICAgICAndi10b29sYmFyLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXRvb2xiYXItLWJvdHRvbSc6IHRoaXMuYm90dG9tLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZSc6IHRoaXMuY29sbGFwc2UsXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlZCc6IHRoaXMuaXNDb2xsYXBzZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tZXh0ZW5kZWQnOiB0aGlzLmlzRXh0ZW5kZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsb2F0aW5nJzogdGhpcy5mbG9hdGluZyxcbiAgICAgICAgJ3YtdG9vbGJhci0tcHJvbWluZW50JzogdGhpcy5pc1Byb21pbmVudCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQ29sbGFwc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taW5lbnRcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMubWVhc3VyYWJsZVN0eWxlcyxcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRIZWlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgY29uc3QgYnJlYWtpbmdQcm9wcyA9IFtcbiAgICAgIFsnYXBwJywgJzx2LWFwcC1iYXIgYXBwPiddLFxuICAgICAgWydtYW51YWwtc2Nyb2xsJywgJzx2LWFwcC1iYXIgOnZhbHVlPVwiZmFsc2VcIj4nXSxcbiAgICAgIFsnY2xpcHBlZC1sZWZ0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1sZWZ0PiddLFxuICAgICAgWydjbGlwcGVkLXJpZ2h0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1yaWdodD4nXSxcbiAgICAgIFsnaW52ZXJ0ZWQtc2Nyb2xsJywgJzx2LWFwcC1iYXIgaW52ZXJ0ZWQtc2Nyb2xsPiddLFxuICAgICAgWydzY3JvbGwtb2ZmLXNjcmVlbicsICc8di1hcHAtYmFyIHNjcm9sbC1vZmYtc2NyZWVuPiddLFxuICAgICAgWydzY3JvbGwtdGFyZ2V0JywgJzx2LWFwcC1iYXIgc2Nyb2xsLXRhcmdldD4nXSxcbiAgICAgIFsnc2Nyb2xsLXRocmVzaG9sZCcsICc8di1hcHAtYmFyIHNjcm9sbC10aHJlc2hvbGQ+J10sXG4gICAgICBbJ2NhcmQnLCAnPHYtYXBwLWJhciBmbGF0PiddLFxuICAgIF1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgYnJlYWtpbmdQcm9wcy5mb3JFYWNoKChbb3JpZ2luYWwsIHJlcGxhY2VtZW50XSkgPT4ge1xuICAgICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KG9yaWdpbmFsKSkgYnJlYWtpbmcob3JpZ2luYWwsIHJlcGxhY2VtZW50LCB0aGlzKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJhY2tncm91bmQgKCkge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkSGVpZ2h0KSxcbiAgICAgICAgc3JjOiB0aGlzLnNyYyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLiRzY29wZWRTbG90cy5pbWdcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5pbWcoeyBwcm9wcyB9KVxuICAgICAgICA6IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkltZywgeyBwcm9wcyB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9faW1hZ2UnLFxuICAgICAgfSwgW2ltYWdlXSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2NvbnRlbnQnLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMpKVxuICAgIH0sXG4gICAgZ2VuRXh0ZW5zaW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19leHRlbnNpb24nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmV4dGVuc2lvbkhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMsICdleHRlbnNpb24nKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICB0aGlzLmlzRXh0ZW5kZWQgPSB0aGlzLmV4dGVuZGVkIHx8ICEhdGhpcy4kc2NvcGVkU2xvdHMuZXh0ZW5zaW9uXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFt0aGlzLmdlbkNvbnRlbnQoKV1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzRXh0ZW5kZWQpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5FeHRlbnNpb24oKSlcbiAgICBpZiAodGhpcy5zcmMgfHwgdGhpcy4kc2NvcGVkU2xvdHMuaW1nKSBjaGlsZHJlbi51bnNoaWZ0KHRoaXMuZ2VuQmFja2dyb3VuZCgpKVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZXNzYWdlcy5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKENvbG9yYWJsZSwgVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1tZXNzYWdlcycsXG5cbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmdbXT4sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNoaWxkcmVuICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uLWdyb3VwJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXNfX3dyYXBwZXInLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6ICdtZXNzYWdlLXRyYW5zaXRpb24nLFxuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLnZhbHVlLm1hcCh0aGlzLmdlbk1lc3NhZ2UpKVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZSAobWVzc2FnZTogc3RyaW5nLCBrZXk6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzX19tZXNzYWdlJyxcbiAgICAgICAga2V5LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzLCAnZGVmYXVsdCcsIHsgbWVzc2FnZSwga2V5IH0pIHx8IFttZXNzYWdlXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzJyxcbiAgICAgIGNsYXNzOiB0aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICB9KSwgW3RoaXMuZ2VuQ2hpbGRyZW4oKV0pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuL1ZNZXNzYWdlcydcblxuZXhwb3J0IHsgVk1lc3NhZ2VzIH1cbmV4cG9ydCBkZWZhdWx0IFZNZXNzYWdlc1xuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVklucHV0LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuLi9WTWVzc2FnZXMnXG5cbi8vIE1peGluc1xuaW1wb3J0IEJpbmRzQXR0cnMgZnJvbSAnLi4vLi4vbWl4aW5zL2JpbmRzLWF0dHJzJ1xuaW1wb3J0IFZhbGlkYXRhYmxlIGZyb20gJy4uLy4uL21peGlucy92YWxpZGF0YWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQge1xuICBjb252ZXJ0VG9Vbml0LFxuICBnZXRTbG90LFxuICBrZWJhYkNhc2UsXG59IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEYXRhLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBJbnB1dFZhbGlkYXRpb25SdWxlIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQmluZHNBdHRycyxcbiAgVmFsaWRhdGFibGUsXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UgKi9cbiAgJF9tb2RlbEV2ZW50OiBzdHJpbmdcbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtaW5wdXQnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRJY29uOiBTdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcbiAgICBoaWRlRGV0YWlsczogW0Jvb2xlYW4sIFN0cmluZ10gYXMgUHJvcFR5cGU8Ym9vbGVhbiB8ICdhdXRvJz4sXG4gICAgaGludDogU3RyaW5nLFxuICAgIGlkOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnRIaW50OiBCb29sZWFuLFxuICAgIHByZXBlbmRJY29uOiBTdHJpbmcsXG4gICAgdmFsdWU6IG51bGwgYXMgYW55IGFzIFByb3BUeXBlPGFueT4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGhhc01vdXNlRG93bjogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWlucHV0LS1oYXMtc3RhdGUnOiB0aGlzLmhhc1N0YXRlLFxuICAgICAgICAndi1pbnB1dC0taGlkZS1kZXRhaWxzJzogIXRoaXMuc2hvd0RldGFpbHMsXG4gICAgICAgICd2LWlucHV0LS1pcy1sYWJlbC1hY3RpdmUnOiB0aGlzLmlzTGFiZWxBY3RpdmUsXG4gICAgICAgICd2LWlucHV0LS1pcy1kaXJ0eSc6IHRoaXMuaXNEaXJ0eSxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWRpc2FibGVkJzogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAndi1pbnB1dC0taXMtZm9jdXNlZCc6IHRoaXMuaXNGb2N1c2VkLFxuICAgICAgICAvLyA8di1zd2l0Y2ggbG9hZGluZz4ubG9hZGluZyA9PT0gJycgc28gd2UgY2FuJ3QganVzdCBjYXN0IHRvIGJvb2xlYW5cbiAgICAgICAgJ3YtaW5wdXQtLWlzLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcgIT09IGZhbHNlICYmIHRoaXMubG9hZGluZyAhPSBudWxsLFxuICAgICAgICAndi1pbnB1dC0taXMtcmVhZG9ubHknOiB0aGlzLmlzUmVhZG9ubHksXG4gICAgICAgICd2LWlucHV0LS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRJZCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmlkIHx8IGBpbnB1dC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzVG9EaXNwbGF5Lmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGhhc0hpbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmhhc01lc3NhZ2VzICYmXG4gICAgICAgICEhdGhpcy5oaW50ICYmXG4gICAgICAgICh0aGlzLnBlcnNpc3RlbnRIaW50IHx8IHRoaXMuaXNGb2N1c2VkKVxuICAgIH0sXG4gICAgaGFzTGFiZWwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhKHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICAvLyBQcm94eSBmb3IgYGxhenlWYWx1ZWBcbiAgICAvLyBUaGlzIGFsbG93cyBhbiBpbnB1dFxuICAgIC8vIHRvIGZ1bmN0aW9uIHdpdGhvdXRcbiAgICAvLyBhIHByb3ZpZGVkIG1vZGVsXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgICAgIHRoaXMuJGVtaXQodGhpcy4kX21vZGVsRXZlbnQsIHZhbClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhIXRoaXMubGF6eVZhbHVlXG4gICAgfSxcbiAgICBpc0xhYmVsQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGlydHlcbiAgICB9LFxuICAgIG1lc3NhZ2VzVG9EaXNwbGF5ICgpOiBzdHJpbmdbXSB7XG4gICAgICBpZiAodGhpcy5oYXNIaW50KSByZXR1cm4gW3RoaXMuaGludF1cblxuICAgICAgaWYgKCF0aGlzLmhhc01lc3NhZ2VzKSByZXR1cm4gW11cblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnMubWFwKCh2YWxpZGF0aW9uOiBzdHJpbmcgfCBJbnB1dFZhbGlkYXRpb25SdWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsaWRhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiB2YWxpZGF0aW9uXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRpb24odGhpcy5pbnRlcm5hbFZhbHVlKVxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsaWRhdGlvblJlc3VsdCA9PT0gJ3N0cmluZycgPyB2YWxpZGF0aW9uUmVzdWx0IDogJydcbiAgICAgIH0pLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UgIT09ICcnKVxuICAgIH0sXG4gICAgc2hvd0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZURldGFpbHMgPT09IGZhbHNlIHx8ICh0aGlzLmhpZGVEZXRhaWxzID09PSAnYXV0bycgJiYgdGhpcy5oYXNEZXRhaWxzKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyB2LXJhZGlvLWdyb3VwIG5lZWRzIHRvIGVtaXQgYSBkaWZmZXJlbnQgZXZlbnRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzQ3NTJcbiAgICB0aGlzLiRfbW9kZWxFdmVudCA9ICh0aGlzLiRvcHRpb25zLm1vZGVsICYmIHRoaXMuJG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlblByZXBlbmRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuQ29udHJvbCgpLFxuICAgICAgICB0aGlzLmdlbkFwcGVuZFNsb3QoKSxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkNvbnRyb2wgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0X19jb250cm9sJyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5JbnB1dFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5NZXNzYWdlcygpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkljb24gKFxuICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgY2I/OiAoZTogRXZlbnQpID0+IHZvaWQsXG4gICAgICBleHRyYURhdGE6IFZOb2RlRGF0YSA9IHt9XG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gKHRoaXMgYXMgYW55KVtgJHt0eXBlfUljb25gXVxuICAgICAgY29uc3QgZXZlbnROYW1lID0gYGNsaWNrOiR7a2ViYWJDYXNlKHR5cGUpfWBcbiAgICAgIGNvbnN0IGhhc0xpc3RlbmVyID0gISEodGhpcy5saXN0ZW5lcnMkW2V2ZW50TmFtZV0gfHwgY2IpXG5cbiAgICAgIGNvbnN0IGRhdGEgPSBtZXJnZURhdGEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWxhYmVsJzogaGFzTGlzdGVuZXIgPyBrZWJhYkNhc2UodHlwZSkuc3BsaXQoJy0nKVswXSArICcgaWNvbicgOiB1bmRlZmluZWQsXG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICB9LFxuICAgICAgICBvbjogIWhhc0xpc3RlbmVyXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwgZSlcbiAgICAgICAgICAgICAgY2IgJiYgY2IoZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBDb250YWluZXIgaGFzIGcgZXZlbnQgdGhhdCB3aWxsXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG1lbnUgb3BlbiBpZiBlbmNsb3NlZFxuICAgICAgICAgICAgbW91c2V1cDogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICB9LCBleHRyYURhdGEpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1pbnB1dF9faWNvbmAsXG4gICAgICAgIGNsYXNzOiB0eXBlID8gYHYtaW5wdXRfX2ljb24tLSR7a2ViYWJDYXNlKHR5cGUpfWAgOiB1bmRlZmluZWQsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgVkljb24sXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBpY29uXG4gICAgICAgICksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuSW5wdXRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXRfX3Nsb3QnLFxuICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgICBtb3VzZWRvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgbW91c2V1cDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ2lucHV0LXNsb3QnLFxuICAgICAgfSksIFt0aGlzLmdlbkRlZmF1bHRTbG90KCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0xhYmVsKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGFiZWwsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogdGhpcy5oYXNTdGF0ZSxcbiAgICAgICAgICBmb3I6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZNZXNzYWdlcywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNvbG9yOiB0aGlzLmhhc0hpbnQgPyAnJyA6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5tZXNzYWdlc1RvRGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiB0aGlzLmhhc01lc3NhZ2VzID8gJ2FsZXJ0JyA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogcHJvcHMgPT4gZ2V0U2xvdCh0aGlzLCAnbWVzc2FnZScsIHByb3BzKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5TbG90IChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgICBzbG90OiAoVk5vZGUgfCBWTm9kZVtdKVtdXG4gICAgKSB7XG4gICAgICBpZiAoIXNsb3QubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWYgPSBgJHt0eXBlfS0ke2xvY2F0aW9ufWBcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LWlucHV0X18ke3JlZn1gLFxuICAgICAgICByZWYsXG4gICAgICB9LCBzbG90KVxuICAgIH0sXG4gICAgZ2VuUHJlcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90cy5wcmVwZW5kKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90cy5wcmVwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ3ByZXBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICAvLyBBcHBlbmQgaWNvbiBmb3IgdGV4dCBmaWVsZCB3YXMgcmVhbGx5XG4gICAgICAvLyBhbiBhcHBlbmRlZCBpbm5lciBpY29uLCB2LXRleHQtZmllbGRcbiAgICAgIC8vIHdpbGwgb3ZlcndyaXRlIHRoaXMgbWV0aG9kIGluIG9yZGVyIHRvIG9idGFpblxuICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdFxuICAgICAgaWYgKHRoaXMuJHNsb3RzLmFwcGVuZCkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHMuYXBwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBFdmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZURvd24gKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IHRydWVcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IGZhbHNlXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZXVwJywgZSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy52YWxpZGF0aW9uU3RhdGUsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dCcsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgIH0pLCB0aGlzLmdlbkNvbnRlbnQoKSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVklucHV0IGZyb20gJy4vVklucHV0J1xuXG5leHBvcnQgeyBWSW5wdXQgfVxuZXhwb3J0IGRlZmF1bHQgVklucHV0XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ2FyZC5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2xvYWRhYmxlJ1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSdcblxuLy8gSGVscGVyc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBMb2FkYWJsZSxcbiAgUm91dGFibGUsXG4gIFZTaGVldFxuKS5leHRlbmQoe1xuICBuYW1lOiAndi1jYXJkJyxcblxuICBwcm9wczoge1xuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgaG92ZXI6IEJvb2xlYW4sXG4gICAgaW1nOiBTdHJpbmcsXG4gICAgbGluazogQm9vbGVhbixcbiAgICBsb2FkZXJIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgcmFpc2VkOiBCb29sZWFuLFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWNhcmQnOiB0cnVlLFxuICAgICAgICAuLi5Sb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtY2FyZC0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtY2FyZC0taG92ZXInOiB0aGlzLmhvdmVyLFxuICAgICAgICAndi1jYXJkLS1saW5rJzogdGhpcy5pc0NsaWNrYWJsZSxcbiAgICAgICAgJ3YtY2FyZC0tbG9hZGluZyc6IHRoaXMubG9hZGluZyxcbiAgICAgICAgJ3YtY2FyZC0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAndi1jYXJkLS1yYWlzZWQnOiB0aGlzLnJhaXNlZCxcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qgc3R5bGU6IERpY3Rpb25hcnk8c3RyaW5nPiA9IHtcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuc3R5bGVzLmNhbGwodGhpcyksXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmltZykge1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7dGhpcy5pbWd9XCIpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXRgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlblByb2dyZXNzICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IExvYWRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5Qcm9ncmVzcy5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghcmVuZGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2FyZF9fcHJvZ3Jlc3MnLFxuICAgICAgICBrZXk6ICdwcm9ncmVzcycsXG4gICAgICB9LCBbcmVuZGVyXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLnN0eWxlID0gdGhpcy5zdHlsZXNcblxuICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICBkYXRhLmF0dHJzID0gZGF0YS5hdHRycyB8fCB7fVxuICAgICAgZGF0YS5hdHRycy50YWJpbmRleCA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIGRhdGEpLCBbXG4gICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICB0aGlzLiRzbG90cy5kZWZhdWx0LFxuICAgIF0pXG4gIH0sXG59KVxuIiwiaW1wb3J0ICcuL1ZQcm9ncmVzc0xpbmVhci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQge1xuICBWRmFkZVRyYW5zaXRpb24sXG4gIFZTbGlkZVhUcmFuc2l0aW9uLFxufSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFByb3h5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcHJveHlhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMgfSBmcm9tICd2dWUvdHlwZXMnXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAndG9wJywgJ2JvdHRvbSddKSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kT3BhY2l0eToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBidWZmZXJWYWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEwMCxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBxdWVyeTogQm9vbGVhbixcbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3RyZWFtOiBCb29sZWFuLFxuICAgIHN0cmlwZWQ6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVybmFsTGF6eVZhbHVlOiB0aGlzLnZhbHVlIHx8IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgX19jYWNoZWRCYWNrZ3JvdW5kICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19iYWNrZ3JvdW5kJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuYmFja2dyb3VuZFN0eWxlLFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQodGhpcy5jb21wdXRlZFRyYW5zaXRpb24sIFt0aGlzLl9fY2FjaGVkQmFyVHlwZV0pXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhclR5cGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB0aGlzLl9fY2FjaGVkSW5kZXRlcm1pbmF0ZSA6IHRoaXMuX19jYWNoZWREZXRlcm1pbmF0ZVxuICAgIH0sXG4gICAgX19jYWNoZWRCdWZmZXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2J1ZmZlcicsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBfX2NhY2hlZERldGVybWluYXRlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtcHJvZ3Jlc3MtbGluZWFyX19kZXRlcm1pbmF0ZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIF9fY2FjaGVkSW5kZXRlcm1pbmF0ZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZScsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlLS1hY3RpdmUnOiB0aGlzLmFjdGl2ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzc0JhcignbG9uZycpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzQmFyKCdzaG9ydCcpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIF9fY2FjaGVkU3RyZWFtICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgaWYgKCF0aGlzLnN0cmVhbSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fc3RyZWFtJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCgxMDAgLSB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGJhY2tncm91bmRTdHlsZSAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gdGhpcy5iYWNrZ3JvdW5kT3BhY2l0eSA9PSBudWxsXG4gICAgICAgID8gKHRoaXMuYmFja2dyb3VuZENvbG9yID8gMSA6IDAuMylcbiAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMuYmFja2dyb3VuZE9wYWNpdHkpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGJhY2tncm91bmRPcGFjaXR5LFxuICAgICAgICBbdGhpcy5pc1JldmVyc2VkID8gJ3JpZ2h0JyA6ICdsZWZ0J106IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZEJ1ZmZlciAtIHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tYWJzb2x1dGUnOiB0aGlzLmFic29sdXRlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLWZpeGVkJzogdGhpcy5maXhlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1xdWVyeSc6IHRoaXMucXVlcnksXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcmVhY3RpdmUnOiB0aGlzLnJlYWN0aXZlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJldmVyc2UnOiB0aGlzLmlzUmV2ZXJzZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1zdHJpcGVkJzogdGhpcy5zdHJpcGVkLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IFZGYWRlVHJhbnNpdGlvbiA6IFZTbGlkZVhUcmFuc2l0aW9uXG4gICAgfSxcbiAgICBpc1JldmVyc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bCAhPT0gdGhpcy5yZXZlcnNlXG4gICAgfSxcbiAgICBub3JtYWxpemVkQnVmZmVyICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMuYnVmZmVyVmFsdWUpXG4gICAgfSxcbiAgICBub3JtYWxpemVkVmFsdWUgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5pbnRlcm5hbExhenlWYWx1ZSlcbiAgICB9LFxuICAgIHJlYWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuJGxpc3RlbmVycy5jaGFuZ2UpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzdHlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxuXG4gICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHN0eWxlcy5oZWlnaHQgPSAwXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pbmRldGVybWluYXRlICYmIHBhcnNlRmxvYXQodGhpcy5ub3JtYWxpemVkQnVmZmVyKSAhPT0gMTAwKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkQnVmZmVyLCAnJScpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZXNcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90KHRoaXMsICdkZWZhdWx0JywgeyB2YWx1ZTogdGhpcy5pbnRlcm5hbExhenlWYWx1ZSB9KVxuXG4gICAgICBpZiAoIXNsb3QpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2NvbnRlbnQnLFxuICAgICAgfSwgc2xvdClcbiAgICB9LFxuICAgIGdlbkxpc3RlbmVycyAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLiRsaXN0ZW5lcnNcblxuICAgICAgaWYgKHRoaXMucmVhY3RpdmUpIHtcbiAgICAgICAgbGlzdGVuZXJzLmNsaWNrID0gdGhpcy5vbkNsaWNrXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnNcbiAgICB9LFxuICAgIGdlblByb2dyZXNzQmFyIChuYW1lOiAnbG9uZycgfCAnc2hvcnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBbbmFtZV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5yZWFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IGUub2Zmc2V0WCAvIHdpZHRoICogMTAwXG4gICAgfSxcbiAgICBub3JtYWxpemUgKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgIGlmICh2YWx1ZSA8IDApIHJldHVybiAwXG4gICAgICBpZiAodmFsdWUgPiAxMDApIHJldHVybiAxMDBcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5pbmRldGVybWluYXRlID8gdW5kZWZpbmVkIDogdGhpcy5ub3JtYWxpemVkVmFsdWUsXG4gICAgICB9LFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20gPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuYWN0aXZlID8gY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCkgOiAwLFxuICAgICAgICB0b3A6IHRoaXMudG9wID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5nZW5MaXN0ZW5lcnMoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgdGhpcy5fX2NhY2hlZFN0cmVhbSxcbiAgICAgIHRoaXMuX19jYWNoZWRCYWNrZ3JvdW5kLFxuICAgICAgdGhpcy5fX2NhY2hlZEJ1ZmZlcixcbiAgICAgIHRoaXMuX19jYWNoZWRCYXIsXG4gICAgICB0aGlzLmdlbkNvbnRlbnQoKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZMYWJlbC5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUsIHsgZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyB9IGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1sYWJlbCcsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGFic29sdXRlOiBCb29sZWFuLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBmb2N1c2VkOiBCb29sZWFuLFxuICAgIGZvcjogU3RyaW5nLFxuICAgIGxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgfSxcblxuICByZW5kZXIgKGgsIGN0eCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsaXN0ZW5lcnMsIHByb3BzIH0gPSBjdHhcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWxhYmVsJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LWxhYmVsLS1hY3RpdmUnOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgJ3YtbGFiZWwtLWlzLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIC4uLmZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMoY3R4KSxcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBmb3I6IHByb3BzLmZvcixcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogIXByb3BzLmZvcixcbiAgICAgIH0sXG4gICAgICBvbjogbGlzdGVuZXJzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbGVmdDogY29udmVydFRvVW5pdChwcm9wcy5sZWZ0KSxcbiAgICAgICAgcmlnaHQ6IGNvbnZlcnRUb1VuaXQocHJvcHMucmlnaHQpLFxuICAgICAgICBwb3NpdGlvbjogcHJvcHMuYWJzb2x1dGUgPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJyxcbiAgICAgIH0sXG4gICAgICByZWY6ICdsYWJlbCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2xhYmVsJywgQ29sb3JhYmxlLm9wdGlvbnMubWV0aG9kcy5zZXRUZXh0Q29sb3IocHJvcHMuZm9jdXNlZCAmJiBwcm9wcy5jb2xvciwgZGF0YSksIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCBWTGFiZWwgZnJvbSAnLi9WTGFiZWwnXG5cbmV4cG9ydCB7IFZMYWJlbCB9XG5leHBvcnQgZGVmYXVsdCBWTGFiZWxcbiIsImltcG9ydCBWdWUsIHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyJ1xuXG5pbnRlcmZhY2UgY29sb3JhYmxlIGV4dGVuZHMgVnVlIHtcbiAgY29sb3I/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBMb2FkYWJsZVxuICpcbiAqIEBtaXhpblxuICpcbiAqIFVzZWQgdG8gYWRkIGxpbmVhciBwcm9ncmVzcyBiYXIgdG8gY29tcG9uZW50c1xuICogQ2FuIHVzZSBhIGRlZmF1bHQgYmFyIHdpdGggYSBzcGVjaWZpYyBjb2xvclxuICogb3IgZGVzaWduYXRlIGEgY3VzdG9tIHByb2dyZXNzIGxpbmVhciBiYXJcbiAqL1xuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQ8Y29sb3JhYmxlPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdsb2FkYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbG9hZGVySGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMixcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Qcm9ncmVzcyAoKTogVk5vZGUgfCBWTm9kZVtdIHwgbnVsbCB7XG4gICAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLnByb2dyZXNzIHx8IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlByb2dyZXNzTGluZWFyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICAgICAgY29sb3I6ICh0aGlzLmxvYWRpbmcgPT09IHRydWUgfHwgdGhpcy5sb2FkaW5nID09PSAnJylcbiAgICAgICAgICAgID8gKHRoaXMuY29sb3IgfHwgJ3ByaW1hcnknKVxuICAgICAgICAgICAgOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmxvYWRlckhlaWdodCxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uL3RoZW1lYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uL3JlZ2lzdHJhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBJbnB1dE1lc3NhZ2UsIElucHV0VmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBSZWdpc3RyYWJsZUluamVjdDwnZm9ybScsIGFueT4oJ2Zvcm0nKSxcbiAgVGhlbWVhYmxlLFxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndmFsaWRhdGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgZXJyb3JDb3VudDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBydWxlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRWYWxpZGF0aW9uUnVsZXM+LFxuICAgIHN1Y2Nlc3M6IEJvb2xlYW4sXG4gICAgc3VjY2Vzc01lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgdmFsaWRhdGVPbkJsdXI6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yQnVja2V0OiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgIGhhc0NvbG9yOiBmYWxzZSxcbiAgICAgIGhhc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaGFzSW5wdXQ6IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGlzUmVzZXR0aW5nOiBmYWxzZSxcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuY29sb3IpIHJldHVybiB0aGlzLmNvbG9yXG4gICAgICAvLyBJdCdzIGFzc3VtZWQgdGhhdCBpZiB0aGUgaW5wdXQgaXMgb24gYVxuICAgICAgLy8gZGFyayBiYWNrZ3JvdW5kLCB0aGUgdXNlciB3aWxsIHdhbnQgdG9cbiAgICAgIC8vIGhhdmUgYSB3aGl0ZSBjb2xvci4gSWYgdGhlIGVudGlyZSBhcHBcbiAgICAgIC8vIGlzIHNldHVwIHRvIGJlIGRhcmssIHRoZW4gdGhleSB3aWxsXG4gICAgICAvLyBsaWtlIHdhbnQgdG8gdXNlIHRoZWlyIHByaW1hcnkgY29sb3JcbiAgICAgIGlmICh0aGlzLmlzRGFyayAmJiAhdGhpcy5hcHBJc0RhcmspIHJldHVybiAnd2hpdGUnXG4gICAgICBlbHNlIHJldHVybiAncHJpbWFyeSdcbiAgICB9LFxuICAgIGhhc0Vycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5lcnJvckJ1Y2tldC5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuZXJyb3JcbiAgICAgIClcbiAgICB9LFxuICAgIC8vIFRPRE86IEFkZCBsb2dpYyB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYmFzZWRcbiAgICAvLyB1cG9uIGEgZ29vZCB2YWxpZGF0aW9uXG4gICAgaGFzU3VjY2VzcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5zdWNjZXNzXG4gICAgICApXG4gICAgfSxcbiAgICBleHRlcm5hbEVycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwIHx8IHRoaXMuZXJyb3JcbiAgICB9LFxuICAgIGhhc01lc3NhZ2VzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgaGFzU3RhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaGFzU3VjY2VzcyB8fFxuICAgICAgICAodGhpcy5zaG91bGRWYWxpZGF0ZSAmJiB0aGlzLmhhc0Vycm9yKVxuICAgICAgKVxuICAgIH0sXG4gICAgaW50ZXJuYWxFcnJvck1lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuZXJyb3JNZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5tZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsU3VjY2Vzc01lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuc3VjY2Vzc01lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiB1bmtub3duIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlzYWJsZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgKFxuICAgICAgICAhIXRoaXMuZm9ybSAmJlxuICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZWRcbiAgICAgIClcbiAgICB9LFxuICAgIGlzSW50ZXJhY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seVxuICAgIH0sXG4gICAgaXNSZWFkb25seSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFkb25seSB8fCAoXG4gICAgICAgICEhdGhpcy5mb3JtICYmXG4gICAgICAgIHRoaXMuZm9ybS5yZWFkb25seVxuICAgICAgKVxuICAgIH0sXG4gICAgc2hvdWxkVmFsaWRhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuZXh0ZXJuYWxFcnJvcikgcmV0dXJuIHRydWVcbiAgICAgIGlmICh0aGlzLmlzUmVzZXR0aW5nKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVPbkJsdXJcbiAgICAgICAgPyB0aGlzLmhhc0ZvY3VzZWQgJiYgIXRoaXMuaXNGb2N1c2VkXG4gICAgICAgIDogKHRoaXMuaGFzSW5wdXQgfHwgdGhpcy5oYXNGb2N1c2VkKVxuICAgIH0sXG4gICAgdmFsaWRhdGlvbnMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQuc2xpY2UoMCwgTnVtYmVyKHRoaXMuZXJyb3JDb3VudCkpXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU3RhdGUgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5oYXNFcnJvciAmJiB0aGlzLnNob3VsZFZhbGlkYXRlKSByZXR1cm4gJ2Vycm9yJ1xuICAgICAgaWYgKHRoaXMuaGFzU3VjY2VzcykgcmV0dXJuICdzdWNjZXNzJ1xuICAgICAgaWYgKHRoaXMuaGFzQ29sb3IpIHJldHVybiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbGlkYXRpb25UYXJnZXQgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICh0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN1Y2Nlc3NNZXNzYWdlcyAmJiB0aGlzLnN1Y2Nlc3NNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVzc2FnZXMgJiYgdGhpcy5tZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvckJ1Y2tldFxuICAgICAgfSBlbHNlIHJldHVybiBbXVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBydWxlczoge1xuICAgICAgaGFuZGxlciAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKGRlZXBFcXVhbChuZXdWYWwsIG9sZFZhbCkpIHJldHVyblxuICAgICAgICB0aGlzLnZhbGlkYXRlKClcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlLFxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZSAoKSB7XG4gICAgICAvLyBJZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIHNldHRpbmcgaW5wdXQsXG4gICAgICAvLyBtYXJrIGl0IHdpdGggaGFzSW5wdXRcbiAgICAgIHRoaXMuaGFzSW5wdXQgPSB0cnVlXG4gICAgICB0aGlzLnZhbGlkYXRlT25CbHVyIHx8IHRoaXMuJG5leHRUaWNrKHRoaXMudmFsaWRhdGUpXG4gICAgfSxcbiAgICBpc0ZvY3VzZWQgKHZhbCkge1xuICAgICAgLy8gU2hvdWxkIG5vdCBjaGVjayB2YWxpZGF0aW9uXG4gICAgICAvLyBpZiBkaXNhYmxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdmFsICYmXG4gICAgICAgICF0aGlzLmlzRGlzYWJsZWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIHRoaXMudmFsaWRhdGVPbkJsdXIgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy52YWxpZGF0ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmVzZXR0aW5nICgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc0lucHV0ID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYXNGb2N1c2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKVxuICAgICAgfSwgMClcbiAgICB9LFxuICAgIGhhc0Vycm9yICh2YWwpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTplcnJvcicsIHZhbClcbiAgICAgIH1cbiAgICB9LFxuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5mb3JtICYmIHRoaXMuZm9ybS5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0udW5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5JbnRlcm5hbE1lc3NhZ2VzIChtZXNzYWdlczogSW5wdXRNZXNzYWdlIHwgbnVsbCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICghbWVzc2FnZXMpIHJldHVybiBbXVxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlcykpIHJldHVybiBtZXNzYWdlc1xuICAgICAgZWxzZSByZXR1cm4gW21lc3NhZ2VzXVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICB0aGlzLmlzUmVzZXR0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gQXJyYXkuaXNBcnJheSh0aGlzLmludGVybmFsVmFsdWUpXG4gICAgICAgID8gW11cbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgcmVzZXRWYWxpZGF0aW9uICgpIHtcbiAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSB0cnVlXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHZhbGlkYXRlIChmb3JjZSA9IGZhbHNlLCB2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgZXJyb3JCdWNrZXQgPSBbXVxuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLmludGVybmFsVmFsdWVcblxuICAgICAgaWYgKGZvcmNlKSB0aGlzLmhhc0lucHV0ID0gdGhpcy5oYXNGb2N1c2VkID0gdHJ1ZVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5ydWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMucnVsZXNbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicgPyBydWxlKHZhbHVlKSA6IHJ1bGVcblxuICAgICAgICBpZiAodmFsaWQgPT09IGZhbHNlIHx8IHR5cGVvZiB2YWxpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlcnJvckJ1Y2tldC5wdXNoKHZhbGlkIHx8ICcnKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWxpZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgY29uc29sZUVycm9yKGBSdWxlcyBzaG91bGQgcmV0dXJuIGEgc3RyaW5nIG9yIGJvb2xlYW4sIHJlY2VpdmVkICcke3R5cGVvZiB2YWxpZH0nIGluc3RlYWRgLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXJyb3JCdWNrZXQgPSBlcnJvckJ1Y2tldFxuICAgICAgdGhpcy52YWxpZCA9IGVycm9yQnVja2V0Lmxlbmd0aCA9PT0gMFxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZFxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlRvb2xiYXIgZnJvbSAnLi9WVG9vbGJhcidcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5jb25zdCBWVG9vbGJhclRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX190aXRsZScpXG5jb25zdCBWVG9vbGJhckl0ZW1zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX19pdGVtcycpXG5cbmV4cG9ydCB7XG4gIFZUb29sYmFyLFxuICBWVG9vbGJhckl0ZW1zLFxuICBWVG9vbGJhclRpdGxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVlRvb2xiYXIsXG4gICAgVlRvb2xiYXJJdGVtcyxcbiAgICBWVG9vbGJhclRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkNvdW50ZXIuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgVGhlbWVhYmxlLCB7IGZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY291bnRlcicsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBtYXg6IFtOdW1iZXIsIFN0cmluZ10sXG4gIH0sXG5cbiAgcmVuZGVyIChoLCBjdHgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gY3R4XG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQocHJvcHMubWF4LCAxMClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHByb3BzLnZhbHVlLCAxMClcbiAgICBjb25zdCBjb250ZW50ID0gbWF4ID8gYCR7dmFsdWV9IC8gJHttYXh9YCA6IFN0cmluZyhwcm9wcy52YWx1ZSlcbiAgICBjb25zdCBpc0dyZWF0ZXIgPSBtYXggJiYgKHZhbHVlID4gbWF4KVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1jb3VudGVyJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdlcnJvci0tdGV4dCc6IGlzR3JlYXRlcixcbiAgICAgICAgLi4uZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyhjdHgpLFxuICAgICAgfSxcbiAgICB9LCBjb250ZW50KVxuICB9LFxufSlcbiIsImltcG9ydCBWQ291bnRlciBmcm9tICcuL1ZDb3VudGVyJ1xuXG5leHBvcnQgeyBWQ291bnRlciB9XG5leHBvcnQgZGVmYXVsdCBWQ291bnRlclxuIiwiLy8gRGlyZWN0aXZlc1xuaW1wb3J0IEludGVyc2VjdCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ludGVyc2VjdCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb25zb2xlV2FybiB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlcnNlY3RhYmxlIChvcHRpb25zOiB7IG9uVmlzaWJsZTogc3RyaW5nW10gfSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykpIHtcbiAgICAvLyBkbyBub3RoaW5nIGJlY2F1c2UgaW50ZXJzZWN0aW9uIG9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGVcbiAgICByZXR1cm4gVnVlLmV4dGVuZCh7IG5hbWU6ICdpbnRlcnNlY3RhYmxlJyB9KVxuICB9XG5cbiAgcmV0dXJuIFZ1ZS5leHRlbmQoe1xuICAgIG5hbWU6ICdpbnRlcnNlY3RhYmxlJyxcblxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0Lmluc2VydGVkKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50LCB7XG4gICAgICAgIG5hbWU6ICdpbnRlcnNlY3QnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vbk9ic2VydmUsXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZXN0cm95ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0LnVuYmluZCh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudClcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25PYnNlcnZlIChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciwgaXNJbnRlcnNlY3Rpbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFpc0ludGVyc2VjdGluZykgcmV0dXJuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG9wdGlvbnMub25WaXNpYmxlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAodGhpcyBhcyBhbnkpW29wdGlvbnMub25WaXNpYmxlW2ldXVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlV2FybihvcHRpb25zLm9uVmlzaWJsZVtpXSArICcgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUgb24gdGhlIGluc3RhbmNlIGJ1dCByZWZlcmVuY2VkIGluIGludGVyc2VjdGFibGUgbWl4aW4gb3B0aW9ucycpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUZXh0RmllbGQuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWQ291bnRlciBmcm9tICcuLi9WQ291bnRlcidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBJbnRlcnNlY3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9pbnRlcnNlY3RhYmxlJ1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4uLy4uL21peGlucy9sb2FkYWJsZSdcbmltcG9ydCBWYWxpZGF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdmFsaWRhdGFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwga2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBicmVha2luZywgY29uc29sZVdhcm4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWSW5wdXQsXG4gIEludGVyc2VjdGFibGUoe1xuICAgIG9uVmlzaWJsZTogW1xuICAgICAgJ3NldExhYmVsV2lkdGgnLFxuICAgICAgJ3NldFByZWZpeFdpZHRoJyxcbiAgICAgICdzZXRQcmVwZW5kV2lkdGgnLFxuICAgICAgJ3RyeUF1dG9mb2N1cycsXG4gICAgXSxcbiAgfSksXG4gIExvYWRhYmxlLFxuKVxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBsYWJlbDogSFRNTEVsZW1lbnRcbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICAgICdwcmVwZW5kLWlubmVyJzogSFRNTEVsZW1lbnRcbiAgICBwcmVmaXg6IEhUTUxFbGVtZW50XG4gICAgc3VmZml4OiBIVE1MRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGRpcnR5VHlwZXMgPSBbJ2NvbG9yJywgJ2ZpbGUnLCAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ3dlZWsnLCAnbW9udGgnXVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi10ZXh0LWZpZWxkJyxcblxuICBkaXJlY3RpdmVzOiB7IHJpcHBsZSB9LFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRPdXRlckljb246IFN0cmluZyxcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgIGNsZWFySWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjbGVhcicsXG4gICAgfSxcbiAgICBjb3VudGVyOiBbQm9vbGVhbiwgTnVtYmVyLCBTdHJpbmddLFxuICAgIGNvdW50ZXJWYWx1ZTogRnVuY3Rpb24gYXMgUHJvcFR5cGU8KHZhbHVlOiBhbnkpID0+IG51bWJlcj4sXG4gICAgZmlsbGVkOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgZnVsbFdpZHRoOiBCb29sZWFuLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBwcmVmaXg6IFN0cmluZyxcbiAgICBwcmVwZW5kSW5uZXJJY29uOiBTdHJpbmcsXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHNoYXBlZDogQm9vbGVhbixcbiAgICBzaW5nbGVMaW5lOiBCb29sZWFuLFxuICAgIHNvbG86IEJvb2xlYW4sXG4gICAgc29sb0ludmVydGVkOiBCb29sZWFuLFxuICAgIHN1ZmZpeDogU3RyaW5nLFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYmFkSW5wdXQ6IGZhbHNlLFxuICAgIGxhYmVsV2lkdGg6IDAsXG4gICAgcHJlZml4V2lkdGg6IDAsXG4gICAgcHJlcGVuZFdpZHRoOiAwLFxuICAgIGluaXRpYWxWYWx1ZTogbnVsbCxcbiAgICBpc0Jvb3RlZDogZmFsc2UsXG4gICAgaXNDbGVhcmluZzogZmFsc2UsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZCc6IHRydWUsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWZ1bGwtd2lkdGgnOiB0aGlzLmZ1bGxXaWR0aCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcHJlZml4JzogdGhpcy5wcmVmaXgsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNpbmdsZS1saW5lJzogdGhpcy5pc1NpbmdsZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sbyc6IHRoaXMuaXNTb2xvLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvLWludmVydGVkJzogdGhpcy5zb2xvSW52ZXJ0ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZmlsbGVkJzogdGhpcy5maWxsZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWlzLWJvb3RlZCc6IHRoaXMuaXNCb290ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWVuY2xvc2VkJzogdGhpcy5pc0VuY2xvc2VkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1yZXZlcnNlJzogdGhpcy5yZXZlcnNlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1vdXRsaW5lZCc6IHRoaXMub3V0bGluZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc2hhcGVkJzogdGhpcy5zaGFwZWQsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgY29uc3QgY29tcHV0ZWRDb2xvciA9IFZhbGlkYXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb2xvci5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghdGhpcy5zb2xvSW52ZXJ0ZWQgfHwgIXRoaXMuaXNGb2N1c2VkKSByZXR1cm4gY29tcHV0ZWRDb2xvclxuXG4gICAgICByZXR1cm4gdGhpcy5jb2xvciB8fCAncHJpbWFyeSdcbiAgICB9LFxuICAgIGNvbXB1dGVkQ291bnRlclZhbHVlICgpOiBudW1iZXIge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvdW50ZXJWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyVmFsdWUodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmludGVybmFsVmFsdWUgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoXG4gICAgfSxcbiAgICBoYXNDb3VudGVyICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvdW50ZXIgIT09IGZhbHNlICYmIHRoaXMuY291bnRlciAhPSBudWxsXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5jb21wdXRlZC5oYXNEZXRhaWxzLmNhbGwodGhpcykgfHwgdGhpcy5oYXNDb3VudGVyXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmxhenlWYWx1ZSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZT8udG9TdHJpbmcoKS5sZW5ndGggPiAwIHx8IHRoaXMuYmFkSW5wdXRcbiAgICB9LFxuICAgIGlzRW5jbG9zZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5maWxsZWQgfHxcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5vdXRsaW5lZFxuICAgICAgKVxuICAgIH0sXG4gICAgaXNMYWJlbEFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RpcnR5IHx8IGRpcnR5VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKVxuICAgIH0sXG4gICAgaXNTaW5nbGUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5zaW5nbGVMaW5lIHx8XG4gICAgICAgIHRoaXMuZnVsbFdpZHRoIHx8XG4gICAgICAgIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jZmlsbGVkLXRleHQtZmllbGRcbiAgICAgICAgKHRoaXMuZmlsbGVkICYmICF0aGlzLmhhc0xhYmVsKVxuICAgICAgKVxuICAgIH0sXG4gICAgaXNTb2xvICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNvbG8gfHwgdGhpcy5zb2xvSW52ZXJ0ZWRcbiAgICB9LFxuICAgIGxhYmVsUG9zaXRpb24gKCk6IFJlY29yZDwnbGVmdCcgfCAncmlnaHQnLCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+IHtcbiAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5wcmVmaXggJiYgIXRoaXMubGFiZWxWYWx1ZSkgPyB0aGlzLnByZWZpeFdpZHRoIDogMFxuXG4gICAgICBpZiAodGhpcy5sYWJlbFZhbHVlICYmIHRoaXMucHJlcGVuZFdpZHRoKSBvZmZzZXQgLT0gdGhpcy5wcmVwZW5kV2lkdGhcblxuICAgICAgcmV0dXJuICh0aGlzLiR2dWV0aWZ5LnJ0bCA9PT0gdGhpcy5yZXZlcnNlKSA/IHtcbiAgICAgICAgbGVmdDogb2Zmc2V0LFxuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgfSA6IHtcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICByaWdodDogb2Zmc2V0LFxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0xhYmVsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0xhYmVsICYmICghdGhpcy5pc1NpbmdsZSB8fCAoIXRoaXMuaXNMYWJlbEFjdGl2ZSAmJiAhdGhpcy5wbGFjZWhvbGRlcikpXG4gICAgfSxcbiAgICBsYWJlbFZhbHVlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc1NpbmdsZSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNMYWJlbEFjdGl2ZSB8fCB0aGlzLnBsYWNlaG9sZGVyKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBsYWJlbFZhbHVlOiAnc2V0TGFiZWxXaWR0aCcsXG4gICAgb3V0bGluZWQ6ICdzZXRMYWJlbFdpZHRoJyxcbiAgICBsYWJlbCAoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljayh0aGlzLnNldExhYmVsV2lkdGgpXG4gICAgfSxcbiAgICBwcmVmaXggKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5zZXRQcmVmaXhXaWR0aClcbiAgICB9LFxuICAgIGlzRm9jdXNlZDogJ3VwZGF0ZVZhbHVlJyxcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2JveCcpKSB7XG4gICAgICBicmVha2luZygnYm94JywgJ2ZpbGxlZCcsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2Jyb3dzZXItYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGJyZWFraW5nKCdicm93c2VyLWF1dG9jb21wbGV0ZScsICdhdXRvY29tcGxldGUnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0aGlzLnNoYXBlZCAmJiAhKHRoaXMuZmlsbGVkIHx8IHRoaXMub3V0bGluZWQgfHwgdGhpcy5pc1NvbG8pKSB7XG4gICAgICBjb25zb2xlV2Fybignc2hhcGVkIHNob3VsZCBiZSB1c2VkIHdpdGggZWl0aGVyIGZpbGxlZCBvciBvdXRsaW5lZCcsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuYXV0b2ZvY3VzICYmIHRoaXMudHJ5QXV0b2ZvY3VzKClcbiAgICB0aGlzLnNldExhYmVsV2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlZml4V2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlcGVuZFdpZHRoKClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gKHRoaXMuaXNCb290ZWQgPSB0cnVlKSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBmb2N1cyAoKSB7XG4gICAgICB0aGlzLm9uRm9jdXMoKVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBibHVyIChlPzogRXZlbnQpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvNTkxM1xuICAgICAgLy8gU2FmYXJpIHRhYiBvcmRlciBnZXRzIGJyb2tlbiBpZiBjYWxsZWQgc3luY2hyb25vdXNcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuYmx1cigpXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xlYXJhYmxlQ2FsbGJhY2sgKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuaW50ZXJuYWxWYWx1ZSA9IG51bGwpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ2FwcGVuZC1vdXRlciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLW91dGVyJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRPdXRlckljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kT3V0ZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlblByZXBlbmRJbm5lclNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlcGVuZElubmVySWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdwcmVwZW5kSW5uZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdpbm5lcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5JY29uU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydhcHBlbmQnXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ2FwcGVuZCddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgY29uc3QgcHJlcGVuZCA9IHRoaXMuZ2VuUHJlcGVuZElubmVyU2xvdCgpXG5cbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIGlucHV0LmNoaWxkcmVuID0gaW5wdXQuY2hpbGRyZW4gfHwgW11cbiAgICAgICAgaW5wdXQuY2hpbGRyZW4udW5zaGlmdChwcmVwZW5kKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9LFxuICAgIGdlbkNsZWFySWNvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuY2xlYXJhYmxlKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5pc0RpcnR5ID8gdW5kZWZpbmVkIDogeyBhdHRyczogeyBkaXNhYmxlZDogdHJ1ZSB9IH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgW1xuICAgICAgICB0aGlzLmdlbkljb24oJ2NsZWFyJywgdGhpcy5jbGVhcmFibGVDYWxsYmFjaywgZGF0YSksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQ291bnRlciAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzQ291bnRlcikgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5jb3VudGVyID09PSB0cnVlID8gdGhpcy5hdHRycyQubWF4bGVuZ3RoIDogdGhpcy5jb3VudGVyXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZDb3VudGVyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5jb21wdXRlZENvdW50ZXJWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5Db250cm9sICgpIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbkNvbnRyb2wuY2FsbCh0aGlzKVxuICAgIH0sXG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5GaWVsZHNldCgpLFxuICAgICAgICB0aGlzLmdlblRleHRGaWVsZFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5DbGVhckljb24oKSxcbiAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5GaWVsZHNldCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSwgW3RoaXMuZ2VuTGVnZW5kKCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dMYWJlbCkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogIXRoaXMuaXNTaW5nbGUgJiYgKHRoaXMuaXNGb2N1c2VkIHx8ICEhdGhpcy52YWxpZGF0aW9uU3RhdGUpLFxuICAgICAgICAgIGZvcjogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIGxlZnQ6IHRoaXMubGFiZWxQb3NpdGlvbi5sZWZ0LFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIHJpZ2h0OiB0aGlzLmxhYmVsUG9zaXRpb24ucmlnaHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubGFiZWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxhYmVsLCBkYXRhLCB0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgZ2VuTGVnZW5kICgpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gIXRoaXMuc2luZ2xlTGluZSAmJiAodGhpcy5sYWJlbFZhbHVlIHx8IHRoaXMuaXNEaXJ0eSkgPyB0aGlzLmxhYmVsV2lkdGggOiAwXG4gICAgICBjb25zdCBzcGFuID0gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiAnJiM4MjAzOycgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdsZWdlbmQnLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6ICF0aGlzLmlzU2luZ2xlID8gY29udmVydFRvVW5pdCh3aWR0aCkgOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9LCBbc3Bhbl0pXG4gICAgfSxcbiAgICBnZW5JbnB1dCAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpc3RlbmVycyQpXG4gICAgICBkZWxldGUgbGlzdGVuZXJzWydjaGFuZ2UnXSAvLyBDaGFuZ2Ugc2hvdWxkIG5vdCBiZSBib3VuZCBleHRlcm5hbGx5XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnbnVtYmVyJyAmJiBPYmplY3QuaXModGhpcy5sYXp5VmFsdWUsIC0wKSkgPyAnLTAnIDogdGhpcy5sYXp5VmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLi4udGhpcy5hdHRycyQsXG4gICAgICAgICAgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcmVhZG9ubHk6IHRoaXMuaXNSZWFkb25seSxcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiBPYmplY3QuYXNzaWduKGxpc3RlbmVycywge1xuICAgICAgICAgIGJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICAgIGlucHV0OiB0aGlzLm9uSW5wdXQsXG4gICAgICAgICAgZm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgfSksXG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzTm9kZSA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuTWVzc2FnZXMuY2FsbCh0aGlzKVxuICAgICAgY29uc3QgY291bnRlck5vZGUgPSB0aGlzLmdlbkNvdW50ZXIoKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fZGV0YWlscycsXG4gICAgICB9LCBbXG4gICAgICAgIG1lc3NhZ2VzTm9kZSxcbiAgICAgICAgY291bnRlck5vZGUsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuVGV4dEZpZWxkU2xvdCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fc2xvdCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy5wcmVmaXggPyB0aGlzLmdlbkFmZml4KCdwcmVmaXgnKSA6IG51bGwsXG4gICAgICAgIHRoaXMuZ2VuSW5wdXQoKSxcbiAgICAgICAgdGhpcy5zdWZmaXggPyB0aGlzLmdlbkFmZml4KCdzdWZmaXgnKSA6IG51bGwsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQWZmaXggKHR5cGU6ICdwcmVmaXgnIHwgJ3N1ZmZpeCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBgdi10ZXh0LWZpZWxkX18ke3R5cGV9YCxcbiAgICAgICAgcmVmOiB0eXBlLFxuICAgICAgfSwgdGhpc1t0eXBlXSlcbiAgICB9LFxuICAgIG9uQmx1ciAoZT86IEV2ZW50KSB7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICBlICYmIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJGVtaXQoJ2JsdXInLCBlKSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNEaXNhYmxlZCB8fCAhdGhpcy4kcmVmcy5pbnB1dCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgIH0sXG4gICAgb25Gb2N1cyAoZT86IEV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuaW5wdXQpIHJldHVyblxuXG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy4kcmVmcy5pbnB1dCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIGUgJiYgdGhpcy4kZW1pdCgnZm9jdXMnLCBlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25JbnB1dCAoZTogRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgdGhpcy5iYWRJbnB1dCA9IHRhcmdldC52YWxpZGl0eSAmJiB0YXJnZXQudmFsaWRpdHkuYmFkSW5wdXRcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIpIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuaW50ZXJuYWxWYWx1ZSlcblxuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlRG93biAoZTogRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgaW5wdXQgZnJvbSBiZWluZyBibHVycmVkXG4gICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuJHJlZnMuaW5wdXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgVklucHV0Lm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlRG93bi5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5oYXNNb3VzZURvd24pIHRoaXMuZm9jdXMoKVxuXG4gICAgICBWSW5wdXQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBzZXRMYWJlbFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMubGFiZWxXaWR0aCA9IHRoaXMuJHJlZnMubGFiZWxcbiAgICAgICAgPyBNYXRoLm1pbih0aGlzLiRyZWZzLmxhYmVsLnNjcm9sbFdpZHRoICogMC43NSArIDYsICh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudCkub2Zmc2V0V2lkdGggLSAyNClcbiAgICAgICAgOiAwXG4gICAgfSxcbiAgICBzZXRQcmVmaXhXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMucHJlZml4KSByZXR1cm5cblxuICAgICAgdGhpcy5wcmVmaXhXaWR0aCA9IHRoaXMuJHJlZnMucHJlZml4Lm9mZnNldFdpZHRoXG4gICAgfSxcbiAgICBzZXRQcmVwZW5kV2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkIHx8ICF0aGlzLiRyZWZzWydwcmVwZW5kLWlubmVyJ10pIHJldHVyblxuXG4gICAgICB0aGlzLnByZXBlbmRXaWR0aCA9IHRoaXMuJHJlZnNbJ3ByZXBlbmQtaW5uZXInXS5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgdHJ5QXV0b2ZvY3VzICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuYXV0b2ZvY3VzIHx8XG4gICAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaW5wdXQgfHxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgKSByZXR1cm4gZmFsc2VcblxuICAgICAgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICB1cGRhdGVWYWx1ZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBTZXRzIHZhbGlkYXRpb25TdGF0ZSBmcm9tIHZhbGlkYXRhYmxlXG4gICAgICB0aGlzLmhhc0NvbG9yID0gdmFsXG5cbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5sYXp5VmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5sYXp5VmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4vVlByb2dyZXNzTGluZWFyJ1xuXG5leHBvcnQgeyBWUHJvZ3Jlc3NMaW5lYXIgfVxuZXhwb3J0IGRlZmF1bHQgVlByb2dyZXNzTGluZWFyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ2NvbXBhcmFibGUnLFxuICBwcm9wczoge1xuICAgIHZhbHVlQ29tcGFyYXRvcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBkZWVwRXF1YWwsXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPHR5cGVvZiBkZWVwRXF1YWw+LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZW51LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vVlRoZW1lUHJvdmlkZXInXG5cbi8vIE1peGluc1xuaW1wb3J0IEFjdGl2YXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9hY3RpdmF0YWJsZSdcbmltcG9ydCBEZWxheWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2RlbGF5YWJsZSdcbmltcG9ydCBEZXBlbmRlbnQgZnJvbSAnLi4vLi4vbWl4aW5zL2RlcGVuZGVudCdcbmltcG9ydCBEZXRhY2hhYmxlIGZyb20gJy4uLy4uL21peGlucy9kZXRhY2hhYmxlJ1xuaW1wb3J0IE1lbnVhYmxlIGZyb20gJy4uLy4uL21peGlucy9tZW51YWJsZSdcbmltcG9ydCBSZXR1cm5hYmxlIGZyb20gJy4uLy4uL21peGlucy9yZXR1cm5hYmxlJ1xuaW1wb3J0IFJvdW5kYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91bmRhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlJ1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgcmVtb3ZlZCB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGtleUNvZGVzLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFZOb2RlRGF0YSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgRGVwZW5kZW50LFxuICBEZWxheWFibGUsXG4gIERldGFjaGFibGUsXG4gIE1lbnVhYmxlLFxuICBSZXR1cm5hYmxlLFxuICBSb3VuZGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIFRoZW1lYWJsZVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1tZW51JyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc0luTWVudTogdHJ1ZSxcbiAgICAgIC8vIFBhc3MgdGhlbWUgdGhyb3VnaCB0byBkZWZhdWx0IHNsb3RcbiAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgIH1cbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICAgIFJlc2l6ZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGF1dG86IEJvb2xlYW4sXG4gICAgY2xvc2VPbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUtleXM6IEJvb2xlYW4sXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgb2Zmc2V0WDogQm9vbGVhbixcbiAgICBvZmZzZXRZOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5PbkhvdmVyOiBCb29sZWFuLFxuICAgIG9yaWdpbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RvcCBsZWZ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ3YtbWVudS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWxjdWxhdGVkVG9wQXV0bzogMCxcbiAgICAgIGRlZmF1bHRPZmZzZXQ6IDgsXG4gICAgICBoYXNKdXN0Rm9jdXNlZDogZmFsc2UsXG4gICAgICBsaXN0SW5kZXg6IC0xLFxuICAgICAgcmVzaXplVGltZW91dDogMCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgIHRpbGVzOiBbXSBhcyBIVE1MRWxlbWVudFtdLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFjdGl2ZVRpbGUgKCk6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XVxuICAgIH0sXG4gICAgY2FsY3VsYXRlZExlZnQgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBtZW51V2lkdGggPSBNYXRoLm1heCh0aGlzLmRpbWVuc2lvbnMuY29udGVudC53aWR0aCwgcGFyc2VGbG9hdCh0aGlzLmNhbGN1bGF0ZWRNaW5XaWR0aCkpXG5cbiAgICAgIGlmICghdGhpcy5hdXRvKSByZXR1cm4gdGhpcy5jYWxjTGVmdChtZW51V2lkdGgpIHx8ICcwJ1xuXG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmNhbGNYT3ZlcmZsb3codGhpcy5jYWxjTGVmdEF1dG8oKSwgbWVudVdpZHRoKSkgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4SGVpZ2h0ICgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hdXRvXG4gICAgICAgID8gJzIwMHB4J1xuICAgICAgICA6IGNvbnZlcnRUb1VuaXQodGhpcy5tYXhIZWlnaHQpXG5cbiAgICAgIHJldHVybiBoZWlnaHQgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4V2lkdGggKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLm1heFdpZHRoKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRNaW5XaWR0aCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLm1pbldpZHRoKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMubWluV2lkdGgpIHx8ICcwJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWluKFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yLndpZHRoICtcbiAgICAgICAgTnVtYmVyKHRoaXMubnVkZ2VXaWR0aCkgK1xuICAgICAgICAodGhpcy5hdXRvID8gMTYgOiAwKSxcbiAgICAgICAgTWF0aC5tYXgodGhpcy5wYWdlV2lkdGggLSAyNCwgMClcbiAgICAgIClcblxuICAgICAgY29uc3QgY2FsY3VsYXRlZE1heFdpZHRoID0gaXNOYU4ocGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpKVxuICAgICAgICA/IG1pbldpZHRoXG4gICAgICAgIDogcGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpXG5cbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KE1hdGgubWluKFxuICAgICAgICBjYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIG1pbldpZHRoXG4gICAgICApKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRUb3AgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCB0b3AgPSAhdGhpcy5hdXRvXG4gICAgICAgID8gdGhpcy5jYWxjVG9wKClcbiAgICAgICAgOiBjb252ZXJ0VG9Vbml0KHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNhbGN1bGF0ZWRUb3BBdXRvKSlcblxuICAgICAgcmV0dXJuIHRvcCB8fCAnMCdcbiAgICB9LFxuICAgIGhhc0NsaWNrYWJsZVRpbGVzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudGlsZXMuZmluZCh0aWxlID0+IHRpbGUudGFiSW5kZXggPiAtMSkpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuY2FsY3VsYXRlZE1heEhlaWdodCxcbiAgICAgICAgbWluV2lkdGg6IHRoaXMuY2FsY3VsYXRlZE1pbldpZHRoLFxuICAgICAgICBtYXhXaWR0aDogdGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIHRvcDogdGhpcy5jYWxjdWxhdGVkVG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLmNhbGN1bGF0ZWRMZWZ0LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICB6SW5kZXg6IHRoaXMuekluZGV4IHx8IHRoaXMuYWN0aXZlWkluZGV4LFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZSAodmFsKSB7XG4gICAgICBpZiAoIXZhbCkgdGhpcy5saXN0SW5kZXggPSAtMVxuICAgIH0sXG4gICAgaXNDb250ZW50QWN0aXZlICh2YWwpIHtcbiAgICAgIHRoaXMuaGFzSnVzdEZvY3VzZWQgPSB2YWxcbiAgICB9LFxuICAgIGxpc3RJbmRleCAobmV4dCwgcHJldikge1xuICAgICAgaWYgKG5leHQgaW4gdGhpcy50aWxlcykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1tuZXh0XVxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zY3JvbGxUb3AgPSB0aWxlLm9mZnNldFRvcCAtIHRpbGUuY2xpZW50SGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHByZXYgaW4gdGhpcy50aWxlcyAmJlxuICAgICAgICB0aGlzLnRpbGVzW3ByZXZdLmNsYXNzTGlzdC5yZW1vdmUoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnZnVsbC13aWR0aCcpKSB7XG4gICAgICByZW1vdmVkKCdmdWxsLXdpZHRoJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLmNhbGxBY3RpdmF0ZSgpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucyBvZiBtZW51XG4gICAgICAvLyBhbmQgaXRzIGFjdGl2YXRvclxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICAgIC8vIFN0YXJ0IHRoZSB0cmFuc2l0aW9uXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAvLyBPbmNlIHRyYW5zaXRpb25pbmcsIGNhbGN1bGF0ZSBzY3JvbGwgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICB0aGlzLnN0YXJ0VHJhbnNpdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFRvcEF1dG8gPSB0aGlzLmNhbGNUb3BBdXRvKClcbiAgICAgICAgICAgIHRoaXMuYXV0byAmJiAodGhpcy4kcmVmcy5jb250ZW50LnNjcm9sbFRvcCA9IHRoaXMuY2FsY1Njcm9sbFBvc2l0aW9uKCkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNhbGNTY3JvbGxQb3NpdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSAkZWwucXVlcnlTZWxlY3RvcignLnYtbGlzdC1pdGVtLS1hY3RpdmUnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgbWF4U2Nyb2xsVG9wID0gJGVsLnNjcm9sbEhlaWdodCAtICRlbC5vZmZzZXRIZWlnaHRcblxuICAgICAgcmV0dXJuIGFjdGl2ZVRpbGVcbiAgICAgICAgPyBNYXRoLm1pbihtYXhTY3JvbGxUb3AsIE1hdGgubWF4KDAsIGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gJGVsLm9mZnNldEhlaWdodCAvIDIgKyBhY3RpdmVUaWxlLm9mZnNldEhlaWdodCAvIDIpKVxuICAgICAgICA6ICRlbC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGNhbGNMZWZ0QXV0byAoKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvci5sZWZ0IC0gdGhpcy5kZWZhdWx0T2Zmc2V0ICogMilcbiAgICB9LFxuICAgIGNhbGNUb3BBdXRvICgpIHtcbiAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgY29uc3QgYWN0aXZlVGlsZSA9ICRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0tLWFjdGl2ZScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuXG4gICAgICBpZiAoIWFjdGl2ZVRpbGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vZmZzZXRZIHx8ICFhY3RpdmVUaWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IEFycmF5LmZyb20odGhpcy50aWxlcykuaW5kZXhPZihhY3RpdmVUaWxlKVxuXG4gICAgICBjb25zdCB0aWxlRGlzdGFuY2VGcm9tTWVudVRvcCA9IGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gdGhpcy5jYWxjU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgY29uc3QgZmlyc3RUaWxlT2Zmc2V0VG9wID0gKCRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0nKSBhcyBIVE1MRWxlbWVudCkub2Zmc2V0VG9wXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wIC0gdGlsZURpc3RhbmNlRnJvbU1lbnVUb3AgLSBmaXJzdFRpbGVPZmZzZXRUb3AgLSAxXG4gICAgfSxcbiAgICBjaGFuZ2VMaXN0SW5kZXggKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIC8vIEZvciBpbmZpbml0ZSBzY3JvbGwgYW5kIGF1dG9jb21wbGV0ZSwgcmUtZXZhbHVhdGUgY2hpbGRyZW5cbiAgICAgIHRoaXMuZ2V0VGlsZXMoKVxuXG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgIXRoaXMuaGFzQ2xpY2thYmxlVGlsZXMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5kb3duKSB7XG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLnVwKSB7XG4gICAgICAgIHRoaXMucHJldlRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyICYmIHRoaXMubGlzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XS5jbGljaygpXG4gICAgICB9IGVsc2UgeyByZXR1cm4gfVxuICAgICAgLy8gT25lIG9mIHRoZSBjb25kaXRpb25zIHdhcyBtZXQsIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKCMyOTg4KVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSxcbiAgICBjbG9zZUNvbmRpdGlvbmFsIChlOiBFdmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgIXRoaXMuX2lzRGVzdHJveWVkICYmXG4gICAgICAgIHRoaXMuY2xvc2VPbkNsaWNrICYmXG4gICAgICAgICF0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnModGFyZ2V0KVxuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yQXR0cmlidXRlcyAoKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckF0dHJpYnV0ZXMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVUaWxlICYmIHRoaXMuYWN0aXZlVGlsZS5pZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IHRoaXMuYWN0aXZlVGlsZS5pZCxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlc1xuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IE1lbnVhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JMaXN0ZW5lcnMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZUtleXMpIHtcbiAgICAgICAgbGlzdGVuZXJzLmtleWRvd24gPSB0aGlzLm9uS2V5RG93blxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZW5Db250ZW50KClcblxuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBjb250ZW50XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sIFtjb250ZW50XSlcbiAgICB9LFxuICAgIGdlbkRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10ge1xuICAgICAgY29uc3QgZGlyZWN0aXZlczogVk5vZGVEaXJlY3RpdmVbXSA9IFt7XG4gICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuaXNDb250ZW50QWN0aXZlLFxuICAgICAgfV1cblxuICAgICAgLy8gRG8gbm90IGFkZCBjbGljayBvdXRzaWRlIGZvciBob3ZlciBtZW51XG4gICAgICBpZiAoIXRoaXMub3Blbk9uSG92ZXIgJiYgdGhpcy5jbG9zZU9uQ2xpY2spIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnY2xpY2stb3V0c2lkZScsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0sXG4gICAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgICAgICBpbmNsdWRlOiAoKSA9PiBbdGhpcy4kZWwsIC4uLnRoaXMuZ2V0T3BlbkRlcGVuZGVudEVsZW1lbnRzKCldLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RpdmVzXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLnRoaXMuZ2V0U2NvcGVJZEF0dHJzKCksXG4gICAgICAgICAgcm9sZTogJ3JvbGUnIGluIHRoaXMuJGF0dHJzID8gdGhpcy4kYXR0cnMucm9sZSA6ICdtZW51JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIC4uLnRoaXMucm9vdFRoZW1lQ2xhc3NlcyxcbiAgICAgICAgICAuLi50aGlzLnJvdW5kZWRDbGFzc2VzLFxuICAgICAgICAgICd2LW1lbnVfX2NvbnRlbnQtLWF1dG8nOiB0aGlzLmF1dG8sXG4gICAgICAgICAgJ3YtbWVudV9fY29udGVudC0tZml4ZWQnOiB0aGlzLmFjdGl2YXRvckZpeGVkLFxuICAgICAgICAgIG1lbnVhYmxlX19jb250ZW50X19hY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICAgW3RoaXMuY29udGVudENsYXNzLnRyaW0oKV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5nZW5EaXJlY3RpdmVzKCksXG4gICAgICAgIHJlZjogJ2NvbnRlbnQnLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlT25Db250ZW50Q2xpY2spIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIH0sXG4gICAgICB9IGFzIFZOb2RlRGF0YVxuXG4gICAgICBpZiAodGhpcy4kbGlzdGVuZXJzLnNjcm9sbCkge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLnNjcm9sbCA9IHRoaXMuJGxpc3RlbmVycy5zY3JvbGxcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMub3Blbk9uSG92ZXIpIHtcbiAgICAgICAgb3B0aW9ucy5vbiA9IG9wdGlvbnMub24gfHwge31cbiAgICAgICAgb3B0aW9ucy5vbi5tb3VzZWVudGVyID0gdGhpcy5tb3VzZUVudGVySGFuZGxlclxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcGVuT25Ib3Zlcikge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLm1vdXNlbGVhdmUgPSB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCBvcHRpb25zLCB0aGlzLmdldENvbnRlbnRTbG90KCkpXG4gICAgfSxcbiAgICBnZXRUaWxlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuY29udGVudCkgcmV0dXJuXG5cbiAgICAgIHRoaXMudGlsZXMgPSBBcnJheS5mcm9tKHRoaXMuJHJlZnMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1saXN0LWl0ZW0nKSlcbiAgICB9LFxuICAgIG1vdXNlRW50ZXJIYW5kbGVyICgpIHtcbiAgICAgIHRoaXMucnVuRGVsYXkoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0p1c3RGb2N1c2VkKSByZXR1cm5cblxuICAgICAgICB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIG1vdXNlTGVhdmVIYW5kbGVyIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgcmUtYWN0aXZhdGlvblxuICAgICAgdGhpcy5ydW5EZWxheSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkgcmV0dXJuXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgICAgICB0aGlzLmNhbGxEZWFjdGl2YXRlKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBuZXh0VGlsZSAoKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleCArIDFdXG5cbiAgICAgIGlmICghdGlsZSkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgICB0aGlzLmxpc3RJbmRleCA9IC0xXG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RJbmRleCsrXG4gICAgICBpZiAodGlsZS50YWJJbmRleCA9PT0gLTEpIHRoaXMubmV4dFRpbGUoKVxuICAgIH0sXG4gICAgcHJldlRpbGUgKCkge1xuICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXggLSAxXVxuXG4gICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5saXN0SW5kZXggPSB0aGlzLnRpbGVzLmxlbmd0aFxuICAgICAgICB0aGlzLnByZXZUaWxlKClcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0SW5kZXgtLVxuICAgICAgaWYgKHRpbGUudGFiSW5kZXggPT09IC0xKSB0aGlzLnByZXZUaWxlKClcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGRlcGVuZGVudCBlbGVtZW50cyB0byBjbG9zZSBmaXJzdFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvciA9IHRoaXMuZ2V0QWN0aXZhdG9yKClcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gYWN0aXZhdG9yICYmIGFjdGl2YXRvci5mb2N1cygpKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgW2tleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duXS5pbmNsdWRlcyhlLmtleUNvZGUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gQWxsb3cgZm9yIGlzQWN0aXZlIHdhdGNoZXIgdG8gZ2VuZXJhdGUgdGlsZSBsaXN0XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLmNoYW5nZUxpc3RJbmRleChlKSlcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIHNjcmVlbiByZXNpemVcbiAgICAgIC8vIGFuZCBvcmllbnRhdGlvbiBjaGFuZ2VcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcblxuICAgICAgLy8gV2hlbiByZXNpemluZyB0byBhIHNtYWxsZXIgd2lkdGhcbiAgICAgIC8vIGNvbnRlbnQgd2lkdGggaXMgZXZhbHVhdGVkIGJlZm9yZVxuICAgICAgLy8gdGhlIG5ldyBhY3RpdmF0b3Igd2lkdGggaGFzIGJlZW5cbiAgICAgIC8vIHNldCwgY2F1c2luZyBpdCB0byBub3Qgc2l6ZSBwcm9wZXJseVxuICAgICAgLy8gaGFja3kgYnV0IHdpbGwgcmV2aXNpdCBpbiB0aGUgZnV0dXJlXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KVxuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy51cGRhdGVEaW1lbnNpb25zLCAxMDApXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tZW51JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LW1lbnUtLWF0dGFjaGVkJzpcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gJycgfHxcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gdHJ1ZSB8fFxuICAgICAgICAgIHRoaXMuYXR0YWNoID09PSAnYXR0YWNoJyxcbiAgICAgIH0sXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBhcmc6ICc1MDAnLFxuICAgICAgICBuYW1lOiAncmVzaXplJyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25SZXNpemUsXG4gICAgICB9XSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgIXRoaXMuYWN0aXZhdG9yICYmIHRoaXMuZ2VuQWN0aXZhdG9yKCksXG4gICAgICB0aGlzLnNob3dMYXp5Q29udGVudCgoKSA9PiBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRoZW1lUHJvdmlkZXIsIHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIFt0aGlzLmdlblRyYW5zaXRpb24oKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IFZNZW51IGZyb20gJy4vVk1lbnUnXG5cbmV4cG9ydCB7IFZNZW51IH1cbmV4cG9ydCBkZWZhdWx0IFZNZW51XG4iLCIvLyBNaXhpbnNcbmltcG9ydCBQb3NpdGlvbmFibGUgZnJvbSAnLi4vcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFN0YWNrYWJsZSBmcm9tICcuLi9zdGFja2FibGUnXG5pbXBvcnQgQWN0aXZhdGFibGUgZnJvbSAnLi4vYWN0aXZhdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgU3RhY2thYmxlLFxuICBQb3NpdGlvbmFibGUsXG4gIEFjdGl2YXRhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICBhdHRhY2g6IGJvb2xlYW4gfCBzdHJpbmcgfCBFbGVtZW50XG4gIG9mZnNldFk6IGJvb2xlYW5cbiAgb2Zmc2V0WDogYm9vbGVhblxuICAkcmVmczoge1xuICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50XG4gICAgYWN0aXZhdG9yOiBIVE1MRWxlbWVudFxuICB9XG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdtZW51YWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBhbGxvd092ZXJmbG93OiBCb29sZWFuLFxuICAgIGxpZ2h0OiBCb29sZWFuLFxuICAgIGRhcms6IEJvb2xlYW4sXG4gICAgbWF4V2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBtaW5XaWR0aDogW051bWJlciwgU3RyaW5nXSxcbiAgICBudWRnZUJvdHRvbToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZUxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VSaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVRvcDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVdpZHRoOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG9mZnNldE92ZXJmbG93OiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiBCb29sZWFuLFxuICAgIHBvc2l0aW9uWDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHBvc2l0aW9uWToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGFic29sdXRlWDogMCxcbiAgICBhYnNvbHV0ZVk6IDAsXG4gICAgYWN0aXZhdGVkQnk6IG51bGwgYXMgRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGFjdGl2YXRvckZpeGVkOiBmYWxzZSxcbiAgICBkaW1lbnNpb25zOiB7XG4gICAgICBhY3RpdmF0b3I6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBvZmZzZXRUb3A6IDAsXG4gICAgICAgIHNjcm9sbEhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0VG9wOiAwLFxuICAgICAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaGFzSnVzdEZvY3VzZWQ6IGZhbHNlLFxuICAgIGhhc1dpbmRvdzogZmFsc2UsXG4gICAgaW5wdXRBY3RpdmF0b3I6IGZhbHNlLFxuICAgIGlzQ29udGVudEFjdGl2ZTogZmFsc2UsXG4gICAgcGFnZVdpZHRoOiAwLFxuICAgIHBhZ2VZT2Zmc2V0OiAwLFxuICAgIHN0YWNrQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQtLWFjdGl2ZScsXG4gICAgc3RhY2tNaW5aSW5kZXg6IDYsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRMZWZ0ICgpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2YXRvckxlZnQgPSAodGhpcy5hdHRhY2ggIT09IGZhbHNlID8gYS5vZmZzZXRMZWZ0IDogYS5sZWZ0KSB8fCAwXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWF4KGEud2lkdGgsIGMud2lkdGgpXG4gICAgICBsZXQgbGVmdCA9IDBcbiAgICAgIGxlZnQgKz0gdGhpcy5sZWZ0ID8gYWN0aXZhdG9yTGVmdCAtIChtaW5XaWR0aCAtIGEud2lkdGgpIDogYWN0aXZhdG9yTGVmdFxuICAgICAgaWYgKHRoaXMub2Zmc2V0WCkge1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IGlzTmFOKE51bWJlcih0aGlzLm1heFdpZHRoKSlcbiAgICAgICAgICA/IGEud2lkdGhcbiAgICAgICAgICA6IE1hdGgubWluKGEud2lkdGgsIE51bWJlcih0aGlzLm1heFdpZHRoKSlcblxuICAgICAgICBsZWZ0ICs9IHRoaXMubGVmdCA/IC1tYXhXaWR0aCA6IGEud2lkdGhcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm51ZGdlTGVmdCkgbGVmdCAtPSBwYXJzZUludCh0aGlzLm51ZGdlTGVmdClcbiAgICAgIGlmICh0aGlzLm51ZGdlUmlnaHQpIGxlZnQgKz0gcGFyc2VJbnQodGhpcy5udWRnZVJpZ2h0KVxuXG4gICAgICByZXR1cm4gbGVmdFxuICAgIH0sXG4gICAgY29tcHV0ZWRUb3AgKCkge1xuICAgICAgY29uc3QgYSA9IHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3JcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmRpbWVuc2lvbnMuY29udGVudFxuICAgICAgbGV0IHRvcCA9IDBcblxuICAgICAgaWYgKHRoaXMudG9wKSB0b3AgKz0gYS5oZWlnaHQgLSBjLmhlaWdodFxuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgdG9wICs9IGEub2Zmc2V0VG9wXG4gICAgICBlbHNlIHRvcCArPSBhLnRvcCArIHRoaXMucGFnZVlPZmZzZXRcbiAgICAgIGlmICh0aGlzLm9mZnNldFkpIHRvcCArPSB0aGlzLnRvcCA/IC1hLmhlaWdodCA6IGEuaGVpZ2h0XG4gICAgICBpZiAodGhpcy5udWRnZVRvcCkgdG9wIC09IHBhcnNlSW50KHRoaXMubnVkZ2VUb3ApXG4gICAgICBpZiAodGhpcy5udWRnZUJvdHRvbSkgdG9wICs9IHBhcnNlSW50KHRoaXMubnVkZ2VCb3R0b20pXG5cbiAgICAgIHJldHVybiB0b3BcbiAgICB9LFxuICAgIGhhc0FjdGl2YXRvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLiRzY29wZWRTbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLmFjdGl2YXRvciB8fCAhIXRoaXMuaW5wdXRBY3RpdmF0b3JcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZGlzYWJsZWQgKHZhbCkge1xuICAgICAgdmFsICYmIHRoaXMuY2FsbERlYWN0aXZhdGUoKVxuICAgIH0sXG4gICAgaXNBY3RpdmUgKHZhbCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVyblxuXG4gICAgICB2YWwgPyB0aGlzLmNhbGxBY3RpdmF0ZSgpIDogdGhpcy5jYWxsRGVhY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBwb3NpdGlvblg6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgICBwb3NpdGlvblk6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy5oYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhYnNvbHV0ZVBvc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uWCB8fCB0aGlzLmFic29sdXRlWCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb25YIHx8IHRoaXMuYWJzb2x1dGVYLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZhdGUgKCkge30sXG4gICAgY2FsY0xlZnQgKG1lbnVXaWR0aDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmF0dGFjaCAhPT0gZmFsc2VcbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkTGVmdFxuICAgICAgICA6IHRoaXMuY2FsY1hPdmVyZmxvdyh0aGlzLmNvbXB1dGVkTGVmdCwgbWVudVdpZHRoKSlcbiAgICB9LFxuICAgIGNhbGNUb3AgKCkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5hdHRhY2ggIT09IGZhbHNlXG4gICAgICAgID8gdGhpcy5jb21wdXRlZFRvcFxuICAgICAgICA6IHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNvbXB1dGVkVG9wKSlcbiAgICB9LFxuICAgIGNhbGNYT3ZlcmZsb3cgKGxlZnQ6IG51bWJlciwgbWVudVdpZHRoOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHhPdmVyZmxvdyA9IGxlZnQgKyBtZW51V2lkdGggLSB0aGlzLnBhZ2VXaWR0aCArIDEyXG5cbiAgICAgIGlmICgoIXRoaXMubGVmdCB8fCB0aGlzLnJpZ2h0KSAmJiB4T3ZlcmZsb3cgPiAwKSB7XG4gICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0IC0geE92ZXJmbG93LCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIDEyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVmdCArIHRoaXMuZ2V0T2Zmc2V0TGVmdCgpXG4gICAgfSxcbiAgICBjYWxjWU92ZXJmbG93ICh0b3A6IG51bWJlcikge1xuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KClcbiAgICAgIGNvbnN0IHRvVG9wID0gdGhpcy5wYWdlWU9mZnNldCArIGRvY3VtZW50SGVpZ2h0XG4gICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnQuaGVpZ2h0XG4gICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRvcCArIGNvbnRlbnRIZWlnaHRcbiAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSB0b1RvcCA8IHRvdGFsSGVpZ2h0XG5cbiAgICAgIC8vIElmIG92ZXJmbG93aW5nIGJvdHRvbSBhbmQgb2Zmc2V0XG4gICAgICAvLyBUT0RPOiBzZXQgJ2JvdHRvbScgcG9zaXRpb24gaW5zdGVhZCBvZiAndG9wJ1xuICAgICAgaWYgKGlzT3ZlcmZsb3dpbmcgJiZcbiAgICAgICAgdGhpcy5vZmZzZXRPdmVyZmxvdyAmJlxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGVub3VnaCByb29tIHRvIG9mZnNldFxuICAgICAgICAvLyB0aGUgb3ZlcmZsb3csIGRvbid0IG9mZnNldFxuICAgICAgICBhY3RpdmF0b3IudG9wID4gY29udGVudEhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAoYWN0aXZhdG9yLnRvcCAtIGNvbnRlbnRIZWlnaHQpXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyBib3R0b21cbiAgICAgIH0gZWxzZSBpZiAoaXNPdmVyZmxvd2luZyAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRvVG9wIC0gY29udGVudEhlaWdodCAtIDEyXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyB0b3BcbiAgICAgIH0gZWxzZSBpZiAodG9wIDwgdGhpcy5wYWdlWU9mZnNldCAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAxMlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9wIDwgMTIgPyAxMiA6IHRvcFxuICAgIH0sXG4gICAgY2FsbEFjdGl2YXRlICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVyblxuXG4gICAgICB0aGlzLmFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNhbGxEZWFjdGl2YXRlICgpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gZmFsc2VcblxuICAgICAgdGhpcy5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNoZWNrRm9yUGFnZVlPZmZzZXQgKCkge1xuICAgICAgaWYgKHRoaXMuaGFzV2luZG93KSB7XG4gICAgICAgIHRoaXMucGFnZVlPZmZzZXQgPSB0aGlzLmFjdGl2YXRvckZpeGVkID8gMCA6IHRoaXMuZ2V0T2Zmc2V0VG9wKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrQWN0aXZhdG9yRml4ZWQgKCkge1xuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgcmV0dXJuXG4gICAgICBsZXQgZWwgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSBmYWxzZVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSAoKSB7fSxcbiAgICBnZW5BY3RpdmF0b3JMaXN0ZW5lcnMgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckxpc3RlbmVycy5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IG9uQ2xpY2sgPSBsaXN0ZW5lcnMuY2xpY2tcblxuICAgICAgbGlzdGVuZXJzLmNsaWNrID0gKGU6IE1vdXNlRXZlbnQgJiBLZXlib2FyZEV2ZW50ICYgRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcGVuT25DbGljaykge1xuICAgICAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hYnNvbHV0ZVggPSBlLmNsaWVudFhcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVkgPSBlLmNsaWVudFlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVyc1xuICAgIH0sXG4gICAgZ2V0SW5uZXJIZWlnaHQgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfSxcbiAgICBnZXRPZmZzZXRMZWZ0ICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICB9LFxuICAgIGdldE9mZnNldFRvcCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGdldFJvdW5kZWRCb3VuZGVkQ2xpZW50UmVjdCAoZWw6IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGgucm91bmQocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5yb3VuZChyZWN0LnJpZ2h0KSxcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQocmVjdC53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChyZWN0LmhlaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWFzdXJlIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICghZWwgfHwgIXRoaXMuaGFzV2luZG93KSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSb3VuZGVkQm91bmRlZENsaWVudFJlY3QoZWwpXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIGFjdGl2YXRvciBtYXJnaW5cbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcblxuICAgICAgICByZWN0LmxlZnQgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0ISlcbiAgICAgICAgcmVjdC50b3AgPSBwYXJzZUludChzdHlsZS5tYXJnaW5Ub3AhKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdFxuICAgIH0sXG4gICAgc25lYWtQZWVrIChjYjogKCkgPT4gdm9pZCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcblxuICAgICAgICBpZiAoIWVsIHx8IGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgIGNiKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICBjYigpXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdGFydFRyYW5zaXRpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbnRlbnRBY3RpdmUgPSB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdGhpcy5pc0FjdGl2ZVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgdXBkYXRlRGltZW5zaW9ucyAoKSB7XG4gICAgICB0aGlzLmhhc1dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICB0aGlzLmNoZWNrQWN0aXZhdG9yRml4ZWQoKVxuICAgICAgdGhpcy5jaGVja0ZvclBhZ2VZT2Zmc2V0KClcbiAgICAgIHRoaXMucGFnZVdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbnM6IGFueSA9IHtcbiAgICAgICAgYWN0aXZhdG9yOiB7IC4uLnRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3IgfSxcbiAgICAgICAgY29udGVudDogeyAuLi50aGlzLmRpbWVuc2lvbnMuY29udGVudCB9LFxuICAgICAgfVxuXG4gICAgICAvLyBBY3RpdmF0b3Igc2hvdWxkIGFscmVhZHkgYmUgc2hvd25cbiAgICAgIGlmICghdGhpcy5oYXNBY3RpdmF0b3IgfHwgdGhpcy5hYnNvbHV0ZSkge1xuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICAgIGlmICghYWN0aXZhdG9yKSByZXR1cm5cblxuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMubWVhc3VyZShhY3RpdmF0b3IpXG4gICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldExlZnQgPSBhY3RpdmF0b3Iub2Zmc2V0TGVmdFxuICAgICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgY3NzIHBhZGRpbmcgY2F1c2luZyB0aGluZ3MgdG8gbm90IGxpbmUgdXBcbiAgICAgICAgICAvLyB0aGlzIGlzIG1vc3RseSBmb3Igdi1hdXRvY29tcGxldGUsIGhvcGVmdWxseSBpdCB3b24ndCBicmVhayBhbnl0aGluZ1xuICAgICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldFRvcCA9IGFjdGl2YXRvci5vZmZzZXRUb3BcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRUb3AgPSAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBhbmQgaGlkZSB0byBnZXQgZGltZW5zaW9uc1xuICAgICAgdGhpcy5zbmVha1BlZWsoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQgJiYgKGRpbWVuc2lvbnMuY29udGVudCA9IHRoaXMubWVhc3VyZSh0aGlzLiRyZWZzLmNvbnRlbnQpKVxuXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd0cmFuc2l0aW9uYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlOiBTdHJpbmcsXG4gICAgb3JpZ2luOiBTdHJpbmcsXG4gICAgdHJhbnNpdGlvbjogU3RyaW5nLFxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKCFpc0Fycikge1xuICAgIHZhciBwcm9wcyA9IGlzRnVsbCA/IGdldEFsbEtleXModmFsdWUpIDoga2V5cyh2YWx1ZSk7XG4gIH1cbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGUgVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90bykgPyBvYmplY3RDcmVhdGUocHJvdG8pIDoge307XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBidWZmZXIuY29uc3RydWN0b3IoYnVmZmVyLmxlbmd0aCk7XG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgdHJ1ZSkgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIHRydWUpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WV2luZG93LnNhc3MnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUgfSBmcm9tICd2dWUvdHlwZXMvdm5vZGUnXG5pbXBvcnQgeyBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFRvdWNoSGFuZGxlcnMgfSBmcm9tICd2dWV0aWZ5L3R5cGVzJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgVG91Y2ggZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZCdG4gZnJvbSAnLi4vVkJ0bidcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCB7IEJhc2VJdGVtR3JvdXAgfSBmcm9tICcuLi9WSXRlbUdyb3VwL1ZJdGVtR3JvdXAnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBCYXNlSXRlbUdyb3VwLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXdpbmRvdycsXG5cbiAgcHJvdmlkZSAoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgd2luZG93R3JvdXA6IHRoaXMsXG4gICAgfVxuICB9LFxuXG4gIGRpcmVjdGl2ZXM6IHsgVG91Y2ggfSxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndi13aW5kb3ctaXRlbS0tYWN0aXZlJyxcbiAgICB9LFxuICAgIGNvbnRpbnVvdXM6IEJvb2xlYW4sXG4gICAgbWFuZGF0b3J5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG5leHRJY29uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICckbmV4dCcsXG4gICAgfSxcbiAgICBwcmV2SWNvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnJHByZXYnLFxuICAgIH0sXG4gICAgcmV2ZXJzZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHNob3dBcnJvd3M6IEJvb2xlYW4sXG4gICAgc2hvd0Fycm93c09uSG92ZXI6IEJvb2xlYW4sXG4gICAgdG91Y2g6IE9iamVjdCBhcyBQcm9wVHlwZTxUb3VjaEhhbmRsZXJzPixcbiAgICB0b3VjaGxlc3M6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFuZ2VkQnlEZWxpbWl0ZXJzOiBmYWxzZSxcbiAgICAgIGludGVybmFsSGVpZ2h0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgc3RyaW5nLCAvLyBUaGlzIGNhbiBiZSBmaXhlZCBieSBjaGlsZCBjbGFzcy5cbiAgICAgIHRyYW5zaXRpb25IZWlnaHQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBzdHJpbmcsIC8vIEludGVybWVkaWF0ZSBoZWlnaHQgZHVyaW5nIHRyYW5zaXRpb24uXG4gICAgICB0cmFuc2l0aW9uQ291bnQ6IDAsIC8vIE51bWJlciBvZiB3aW5kb3dzIGluIHRyYW5zaXRpb24gc3RhdGUuXG4gICAgICBpc0Jvb3RlZDogZmFsc2UsXG4gICAgICBpc1JldmVyc2U6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGlzQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb25Db3VudCA+IDBcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5CYXNlSXRlbUdyb3VwLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi13aW5kb3ctLXNob3ctYXJyb3dzLW9uLWhvdmVyJzogdGhpcy5zaG93QXJyb3dzT25Ib3ZlcixcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogc3RyaW5nIHtcbiAgICAgIGlmICghdGhpcy5pc0Jvb3RlZCkgcmV0dXJuICcnXG5cbiAgICAgIGNvbnN0IGF4aXMgPSB0aGlzLnZlcnRpY2FsID8gJ3knIDogJ3gnXG4gICAgICBjb25zdCByZXZlcnNlID0gdGhpcy4kdnVldGlmeS5ydGwgJiYgYXhpcyA9PT0gJ3gnID8gIXRoaXMuaW50ZXJuYWxSZXZlcnNlIDogdGhpcy5pbnRlcm5hbFJldmVyc2VcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHJldmVyc2UgPyAnLXJldmVyc2UnIDogJydcblxuICAgICAgcmV0dXJuIGB2LXdpbmRvdy0ke2F4aXN9JHtkaXJlY3Rpb259LXRyYW5zaXRpb25gXG4gICAgfSxcbiAgICBoYXNBY3RpdmVJdGVtcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gIWl0ZW0uZGlzYWJsZWQpXG4gICAgICApXG4gICAgfSxcbiAgICBoYXNOZXh0ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVvdXMgfHwgdGhpcy5pbnRlcm5hbEluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxXG4gICAgfSxcbiAgICBoYXNQcmV2ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVvdXMgfHwgdGhpcy5pbnRlcm5hbEluZGV4ID4gMFxuICAgIH0sXG4gICAgaW50ZXJuYWxJbmRleCAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFZhbHVlID09PSB0aGlzLmdldFZhbHVlKGl0ZW0sIGkpXG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJuYWxSZXZlcnNlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnJldmVyc2UgPyAhdGhpcy5pc1JldmVyc2UgOiB0aGlzLmlzUmV2ZXJzZVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbEluZGV4OiAndXBkYXRlUmV2ZXJzZScsXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy5pc0Jvb3RlZCA9IHRydWUpKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250YWluZXIgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuJHNsb3RzLmRlZmF1bHRdXG5cbiAgICAgIGlmICh0aGlzLnNob3dBcnJvd3MpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaCh0aGlzLmdlbkNvbnRyb2xJY29ucygpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytd2luZG93X19jb250YWluZXInLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICd2LXdpbmRvd19fY29udGFpbmVyLS1pcy1hY3RpdmUnOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogdGhpcy5pbnRlcm5hbEhlaWdodCB8fCB0aGlzLnRyYW5zaXRpb25IZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlbkljb24gKFxuICAgICAgZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsXG4gICAgICBpY29uOiBzdHJpbmcsXG4gICAgICBmbjogKCkgPT4gdm9pZFxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LXdpbmRvd19fJHtkaXJlY3Rpb259YCxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudChWQnRuLCB7XG4gICAgICAgICAgcHJvcHM6IHsgaWNvbjogdHJ1ZSB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHRoaXMuJHZ1ZXRpZnkubGFuZy50KGAkdnVldGlmeS5jYXJvdXNlbC4ke2RpcmVjdGlvbn1gKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRCeURlbGltaXRlcnMgPSB0cnVlXG4gICAgICAgICAgICAgIGZuKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSwgW1xuICAgICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgICAgIHByb3BzOiB7IGxhcmdlOiB0cnVlIH0sXG4gICAgICAgICAgfSwgaWNvbiksXG4gICAgICAgIF0pLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkNvbnRyb2xJY29ucyAoKSB7XG4gICAgICBjb25zdCBpY29ucyA9IFtdXG5cbiAgICAgIGNvbnN0IHByZXZJY29uID0gdGhpcy4kdnVldGlmeS5ydGxcbiAgICAgICAgPyB0aGlzLm5leHRJY29uXG4gICAgICAgIDogdGhpcy5wcmV2SWNvblxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmhhc1ByZXYgJiZcbiAgICAgICAgcHJldkljb24gJiZcbiAgICAgICAgdHlwZW9mIHByZXZJY29uID09PSAnc3RyaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSB0aGlzLmdlbkljb24oJ3ByZXYnLCBwcmV2SWNvbiwgdGhpcy5wcmV2KVxuICAgICAgICBpY29uICYmIGljb25zLnB1c2goaWNvbilcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dEljb24gPSB0aGlzLiR2dWV0aWZ5LnJ0bFxuICAgICAgICA/IHRoaXMucHJldkljb25cbiAgICAgICAgOiB0aGlzLm5leHRJY29uXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzTmV4dCAmJlxuICAgICAgICBuZXh0SWNvbiAmJlxuICAgICAgICB0eXBlb2YgbmV4dEljb24gPT09ICdzdHJpbmcnXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2VuSWNvbignbmV4dCcsIG5leHRJY29uLCB0aGlzLm5leHQpXG4gICAgICAgIGljb24gJiYgaWNvbnMucHVzaChpY29uKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWNvbnNcbiAgICB9LFxuICAgIGdldE5leHRJbmRleCAoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSAoaW5kZXggKyAxKSAlIHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tuZXh0SW5kZXhdXG5cbiAgICAgIGlmIChpdGVtLmRpc2FibGVkKSByZXR1cm4gdGhpcy5nZXROZXh0SW5kZXgobmV4dEluZGV4KVxuXG4gICAgICByZXR1cm4gbmV4dEluZGV4XG4gICAgfSxcbiAgICBnZXRQcmV2SW5kZXggKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgY29uc3QgcHJldkluZGV4ID0gKGluZGV4ICsgdGhpcy5pdGVtcy5sZW5ndGggLSAxKSAlIHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1twcmV2SW5kZXhdXG5cbiAgICAgIGlmIChpdGVtLmRpc2FibGVkKSByZXR1cm4gdGhpcy5nZXRQcmV2SW5kZXgocHJldkluZGV4KVxuXG4gICAgICByZXR1cm4gcHJldkluZGV4XG4gICAgfSxcbiAgICBuZXh0ICgpIHtcbiAgICAgIHRoaXMuaXNSZXZlcnNlID0gdGhpcy4kdnVldGlmeS5ydGxcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXRoaXMuaGFzQWN0aXZlSXRlbXMgfHwgIXRoaXMuaGFzTmV4dCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZ2V0TmV4dEluZGV4KHRoaXMuaW50ZXJuYWxJbmRleClcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW25leHRJbmRleF1cblxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdGhpcy5nZXRWYWx1ZShpdGVtLCBuZXh0SW5kZXgpXG4gICAgfSxcbiAgICBwcmV2ICgpIHtcbiAgICAgIHRoaXMuaXNSZXZlcnNlID0gIXRoaXMuJHZ1ZXRpZnkucnRsXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZUl0ZW1zIHx8ICF0aGlzLmhhc1ByZXYpIHJldHVyblxuXG4gICAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLmdldFByZXZJbmRleCh0aGlzLmludGVybmFsSW5kZXgpXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tsYXN0SW5kZXhdXG5cbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoaXRlbSwgbGFzdEluZGV4KVxuICAgIH0sXG4gICAgdXBkYXRlUmV2ZXJzZSAodmFsOiBudW1iZXIsIG9sZFZhbDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5jaGFuZ2VkQnlEZWxpbWl0ZXJzKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEJ5RGVsaW1pdGVycyA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmlzUmV2ZXJzZSA9IHZhbCA8IG9sZFZhbFxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytd2luZG93JyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBkaXJlY3RpdmVzOiBbXSBhcyBWTm9kZURpcmVjdGl2ZVtdLFxuICAgIH1cblxuICAgIGlmICghdGhpcy50b3VjaGxlc3MpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy50b3VjaCB8fCB7XG4gICAgICAgIGxlZnQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLiR2dWV0aWZ5LnJ0bCA/IHRoaXMucHJldigpIDogdGhpcy5uZXh0KClcbiAgICAgICAgfSxcbiAgICAgICAgcmlnaHQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLiR2dWV0aWZ5LnJ0bCA/IHRoaXMubmV4dCgpIDogdGhpcy5wcmV2KClcbiAgICAgICAgfSxcbiAgICAgICAgZW5kOiAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnQ6IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICBkYXRhLmRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgIG5hbWU6ICd0b3VjaCcsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW3RoaXMuZ2VuQ29udGFpbmVyKCldKVxuICB9LFxufSlcbiIsIi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWV2luZG93IGZyb20gJy4uL1ZXaW5kb3cvVldpbmRvdydcblxuLy8gVHlwZXMgJiBDb21wb25lbnRzXG5pbXBvcnQgeyBCYXNlSXRlbUdyb3VwLCBHcm91cGFibGVJbnN0YW5jZSB9IGZyb20gJy4vLi4vVkl0ZW1Hcm91cC9WSXRlbUdyb3VwJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVldpbmRvdy5leHRlbmQoe1xuICBuYW1lOiAndi10YWJzLWl0ZW1zJyxcblxuICBwcm9wczoge1xuICAgIG1hbmRhdG9yeToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVldpbmRvdy5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGFicy1pdGVtcyc6IHRydWUsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0RhcmsgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdElzRGFya1xuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdldFZhbHVlIChpdGVtOiBHcm91cGFibGVJbnN0YW5jZSwgaTogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gaXRlbS5pZCB8fCBCYXNlSXRlbUdyb3VwLm9wdGlvbnMubWV0aG9kcy5nZXRWYWx1ZS5jYWxsKHRoaXMsIGl0ZW0sIGkpXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQXBwQmFyLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWVG9vbGJhciBmcm9tICcuLi9WVG9vbGJhci9WVG9vbGJhcidcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Njcm9sbCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgQXBwbGljYXRpb25hYmxlIGZyb20gJy4uLy4uL21peGlucy9hcHBsaWNhdGlvbmFibGUnXG5pbXBvcnQgU2Nyb2xsYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc2Nyb2xsYWJsZSdcbmltcG9ydCBTU1JCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc3NyLWJvb3RhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgVlRvb2xiYXIsXG4gIFNjcm9sbGFibGUsXG4gIFNTUkJvb3RhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBBcHBsaWNhdGlvbmFibGUoJ3RvcCcsIFtcbiAgICAnY2xpcHBlZExlZnQnLFxuICAgICdjbGlwcGVkUmlnaHQnLFxuICAgICdjb21wdXRlZEhlaWdodCcsXG4gICAgJ2ludmVydGVkU2Nyb2xsJyxcbiAgICAnaXNFeHRlbmRlZCcsXG4gICAgJ2lzUHJvbWluZW50JyxcbiAgICAndmFsdWUnLFxuICBdKVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1hcHAtYmFyJyxcblxuICBkaXJlY3RpdmVzOiB7IFNjcm9sbCB9LFxuXG4gIHByb3BzOiB7XG4gICAgY2xpcHBlZExlZnQ6IEJvb2xlYW4sXG4gICAgY2xpcHBlZFJpZ2h0OiBCb29sZWFuLFxuICAgIGNvbGxhcHNlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgZWxldmF0ZU9uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGZhZGVJbWdPblNjcm9sbDogQm9vbGVhbixcbiAgICBoaWRlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgaW52ZXJ0ZWRTY3JvbGw6IEJvb2xlYW4sXG4gICAgc2Nyb2xsT2ZmU2NyZWVuOiBCb29sZWFuLFxuICAgIHNocmlua09uU2Nyb2xsOiBCb29sZWFuLFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy52YWx1ZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBhcHBsaWNhdGlvblByb3BlcnR5ICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICF0aGlzLmJvdHRvbSA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICB9LFxuICAgIGNhblNjcm9sbCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBTY3JvbGxhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2FuU2Nyb2xsLmNhbGwodGhpcykgJiZcbiAgICAgICAgKFxuICAgICAgICAgIHRoaXMuaW52ZXJ0ZWRTY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmVsZXZhdGVPblNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuaGlkZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5pc0Jvb3RlZCB8fFxuICAgICAgICAgIC8vIElmIGZhbHNleSwgdXNlciBoYXMgcHJvdmlkZWQgYW5cbiAgICAgICAgICAvLyBleHBsaWNpdCB2YWx1ZSB3aGljaCBzaG91bGRcbiAgICAgICAgICAvLyBvdmVyd3JpdGUgYW55dGhpbmcgd2UgZG9cbiAgICAgICAgICAhdGhpcy52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlJzogdGhpcy5jb2xsYXBzZSB8fCB0aGlzLmNvbGxhcHNlT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXInOiB0cnVlLFxuICAgICAgICAndi1hcHAtYmFyLS1jbGlwcGVkJzogdGhpcy5jbGlwcGVkTGVmdCB8fCB0aGlzLmNsaXBwZWRSaWdodCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZmFkZS1pbWctb24tc2Nyb2xsJzogdGhpcy5mYWRlSW1nT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXItLWVsZXZhdGUtb24tc2Nyb2xsJzogdGhpcy5lbGV2YXRlT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXItLWZpeGVkJzogIXRoaXMuYWJzb2x1dGUgJiYgKHRoaXMuYXBwIHx8IHRoaXMuZml4ZWQpLFxuICAgICAgICAndi1hcHAtYmFyLS1oaWRlLXNoYWRvdyc6IHRoaXMuaGlkZVNoYWRvdyxcbiAgICAgICAgJ3YtYXBwLWJhci0taXMtc2Nyb2xsZWQnOiB0aGlzLmN1cnJlbnRTY3JvbGwgPiAwLFxuICAgICAgICAndi1hcHAtYmFyLS1zaHJpbmstb24tc2Nyb2xsJzogdGhpcy5zaHJpbmtPblNjcm9sbCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQ29udGVudEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5zaHJpbmtPblNjcm9sbCkgcmV0dXJuIFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb250ZW50SGVpZ2h0LmNhbGwodGhpcylcblxuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wdXRlZE9yaWdpbmFsSGVpZ2h0XG5cbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMuZGVuc2UgPyA0OCA6IDU2XG4gICAgICBjb25zdCBtYXggPSBoZWlnaHRcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXggLSBtaW5cbiAgICAgIGNvbnN0IGl0ZXJhdGlvbiA9IGRpZmZlcmVuY2UgLyB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmN1cnJlbnRTY3JvbGwgKiBpdGVyYXRpb25cblxuICAgICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgbWF4IC0gb2Zmc2V0KVxuICAgIH0sXG4gICAgY29tcHV0ZWRGb250U2l6ZSAoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICghdGhpcy5pc1Byb21pbmVudCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICBjb25zdCBtYXggPSB0aGlzLmRlbnNlID8gOTYgOiAxMjhcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXggLSB0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodFxuICAgICAgY29uc3QgaW5jcmVtZW50ID0gMC4wMDM0N1xuXG4gICAgICAvLyAxLjVyZW0gdG8gYSBtaW5pbXVtIG9mIDEuMjVyZW1cbiAgICAgIHJldHVybiBOdW1iZXIoKDEuNTAgLSBkaWZmZXJlbmNlICogaW5jcmVtZW50KS50b0ZpeGVkKDIpKVxuICAgIH0sXG4gICAgY29tcHV0ZWRMZWZ0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCB8fCB0aGlzLmNsaXBwZWRMZWZ0KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvbi5sZWZ0XG4gICAgfSxcbiAgICBjb21wdXRlZE1hcmdpblRvcCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHApIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLmJhclxuICAgIH0sXG4gICAgY29tcHV0ZWRPcGFjaXR5ICgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF0aGlzLmZhZGVJbWdPblNjcm9sbCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICBjb25zdCBvcGFjaXR5ID0gTWF0aC5tYXgoXG4gICAgICAgICh0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkIC0gdGhpcy5jdXJyZW50U2Nyb2xsKSAvIHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQsXG4gICAgICAgIDBcbiAgICAgIClcblxuICAgICAgcmV0dXJuIE51bWJlcihwYXJzZUZsb2F0KG9wYWNpdHkpLnRvRml4ZWQoMikpXG4gICAgfSxcbiAgICBjb21wdXRlZE9yaWdpbmFsSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgbGV0IGhlaWdodCA9IFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb250ZW50SGVpZ2h0LmNhbGwodGhpcylcbiAgICAgIGlmICh0aGlzLmlzRXh0ZW5kZWQpIGhlaWdodCArPSBwYXJzZUludCh0aGlzLmV4dGVuc2lvbkhlaWdodClcbiAgICAgIHJldHVybiBoZWlnaHRcbiAgICB9LFxuICAgIGNvbXB1dGVkUmlnaHQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwIHx8IHRoaXMuY2xpcHBlZFJpZ2h0KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvbi5yaWdodFxuICAgIH0sXG4gICAgY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQgKCk6IG51bWJlciB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxUaHJlc2hvbGQpIHJldHVybiBOdW1iZXIodGhpcy5zY3JvbGxUaHJlc2hvbGQpXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkT3JpZ2luYWxIZWlnaHQgLSAodGhpcy5kZW5zZSA/IDQ4IDogNTYpXG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zZm9ybSAoKTogbnVtYmVyIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2Nyb2xsIHx8XG4gICAgICAgICh0aGlzLmVsZXZhdGVPblNjcm9sbCAmJiB0aGlzLmN1cnJlbnRTY3JvbGwgPT09IDAgJiYgdGhpcy5pc0FjdGl2ZSlcbiAgICAgICkgcmV0dXJuIDBcblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHJldHVybiAwXG5cbiAgICAgIGNvbnN0IHNjcm9sbE9mZlNjcmVlbiA9IHRoaXMuc2Nyb2xsT2ZmU2NyZWVuXG4gICAgICAgID8gdGhpcy5jb21wdXRlZEhlaWdodFxuICAgICAgICA6IHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG5cbiAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA/IHNjcm9sbE9mZlNjcmVlbiA6IC1zY3JvbGxPZmZTY3JlZW5cbiAgICB9LFxuICAgIGhpZGVTaGFkb3cgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsICYmIHRoaXMuaXNFeHRlbmRlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGV2YXRlT25TY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcm9sbCA9PT0gMCB8fFxuICAgICAgICAgIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm0gPCAwXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLmlzRXh0ZW5kZWQgfHxcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZTY3JlZW5cbiAgICAgICkgJiYgdGhpcy5jb21wdXRlZFRyYW5zZm9ybSAhPT0gMFxuICAgIH0sXG4gICAgaXNDb2xsYXBzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKCF0aGlzLmNvbGxhcHNlT25TY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuaXNDb2xsYXBzZWQuY2FsbCh0aGlzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsID4gMFxuICAgIH0sXG4gICAgaXNQcm9taW5lbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5pc1Byb21pbmVudC5jYWxsKHRoaXMpIHx8XG4gICAgICAgIHRoaXMuc2hyaW5rT25TY3JvbGxcbiAgICAgIClcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuc3R5bGVzLmNhbGwodGhpcyksXG4gICAgICAgIGZvbnRTaXplOiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRGb250U2l6ZSwgJ3JlbScpLFxuICAgICAgICBtYXJnaW5Ub3A6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZE1hcmdpblRvcCksXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm0pfSlgLFxuICAgICAgICBsZWZ0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRMZWZ0KSxcbiAgICAgICAgcmlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZFJpZ2h0KSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgY2FuU2Nyb2xsOiAnb25TY3JvbGwnLFxuICAgIGNvbXB1dGVkVHJhbnNmb3JtICgpIHtcbiAgICAgIC8vIE5vcm1hbGx5IHdlIGRvIG5vdCB3YW50IHRoZSB2LWFwcC1iYXJcbiAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgYXBwbGljYXRpb24gdG9wIHZhbHVlXG4gICAgICAvLyB0byBhdm9pZCBzY3JlZW4ganVtcC4gSG93ZXZlciwgaW5cbiAgICAgIC8vIHRoaXMgc2l0dWF0aW9uLCB3ZSBtdXN0IHNvIHRoYXRcbiAgICAgIC8vIHRoZSBjbGlwcGVkIGRyYXdlciBjYW4gdXBkYXRlXG4gICAgICAvLyBpdHMgdG9wIHZhbHVlIHdoZW4gc2Nyb2xsZWRcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2Nyb2xsIHx8XG4gICAgICAgICghdGhpcy5jbGlwcGVkTGVmdCAmJiAhdGhpcy5jbGlwcGVkUmlnaHQpXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmNhbGxVcGRhdGUoKVxuICAgIH0sXG4gICAgaW52ZXJ0ZWRTY3JvbGwgKHZhbDogYm9vbGVhbikge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9ICF2YWwgfHwgdGhpcy5jdXJyZW50U2Nyb2xsICE9PSAwXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICBpZiAodGhpcy5pbnZlcnRlZFNjcm9sbCkgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJhY2tncm91bmQgKCkge1xuICAgICAgY29uc3QgcmVuZGVyID0gVlRvb2xiYXIub3B0aW9ucy5tZXRob2RzLmdlbkJhY2tncm91bmQuY2FsbCh0aGlzKVxuXG4gICAgICByZW5kZXIuZGF0YSA9IHRoaXMuX2IocmVuZGVyLmRhdGEgfHwge30sIHJlbmRlci50YWchLCB7XG4gICAgICAgIHN0eWxlOiB7IG9wYWNpdHk6IHRoaXMuY29tcHV0ZWRPcGFjaXR5IH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcmVuZGVyXG4gICAgfSxcbiAgICB1cGRhdGVBcHBsaWNhdGlvbiAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLmludmVydGVkU2Nyb2xsXG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMuY29tcHV0ZWRIZWlnaHQgKyB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtXG4gICAgfSxcbiAgICB0aHJlc2hvbGRNZXQgKCkge1xuICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMuY3VycmVudFNjcm9sbCA+IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhpZGVPblNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5pc1Njcm9sbGluZ1VwIHx8XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2Nyb2xsIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50VGhyZXNob2xkIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc2F2ZWRTY3JvbGwgPSB0aGlzLmN1cnJlbnRTY3JvbGxcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCByZW5kZXIgPSBWVG9vbGJhci5vcHRpb25zLnJlbmRlci5jYWxsKHRoaXMsIGgpXG5cbiAgICByZW5kZXIuZGF0YSA9IHJlbmRlci5kYXRhIHx8IHt9XG5cbiAgICBpZiAodGhpcy5jYW5TY3JvbGwpIHtcbiAgICAgIHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMgPSByZW5kZXIuZGF0YS5kaXJlY3RpdmVzIHx8IFtdXG4gICAgICByZW5kZXIuZGF0YS5kaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICBhcmc6IHRoaXMuc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBuYW1lOiAnc2Nyb2xsJyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25TY3JvbGwsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WTWFpbi5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBTU1JCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc3NyLWJvb3RhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBTU1JCb290YWJsZS5leHRlbmQoe1xuICBuYW1lOiAndi1tYWluJyxcblxuICBwcm9wczoge1xuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ21haW4nLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGJhciwgdG9wLCByaWdodCwgZm9vdGVyLCBpbnNldEZvb3RlciwgYm90dG9tLCBsZWZ0LFxuICAgICAgfSA9IHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb25cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZ1RvcDogYCR7dG9wICsgYmFyfXB4YCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBgJHtyaWdodH1weGAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGAke2Zvb3RlciArIGluc2V0Rm9vdGVyICsgYm90dG9tfXB4YCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IGAke2xlZnR9cHhgLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbWFpbicsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICByZWY6ICdtYWluJyxcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgW1xuICAgICAgaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6ICd2LW1haW5fX3dyYXAnIH0sXG4gICAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHRcbiAgICAgICksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWTWFpbiBmcm9tICcuLi9WTWFpbi9WTWFpbidcbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZNYWluLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1haW4nLFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGRlcHJlY2F0ZSgndi1jb250ZW50JywgJ3YtbWFpbicsIHRoaXMpXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIC8vIEFkZCB0aGUgbGVnYWN5IGNsYXNzIG5hbWVzXG4gICAgY29uc3Qgbm9kZSA9IFZNYWluLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIG5vZGUuZGF0YSEuc3RhdGljQ2xhc3MgKz0gJyB2LWNvbnRlbnQnXG4gICAgbm9kZS5jaGlsZHJlbiFbMF0hLmRhdGEhLnN0YXRpY0NsYXNzICs9ICcgdi1jb250ZW50X193cmFwJ1xuXG4gICAgcmV0dXJuIGgobm9kZS50YWcsIG5vZGUuZGF0YSwgbm9kZS5jaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vX2dyaWQuc2FzcydcbmltcG9ydCB7IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3NwYWNlcicsICdkaXYnLCAndi1zcGFjZXInKVxuIiwiaW1wb3J0ICcuL19ncmlkLnNhc3MnXG5pbXBvcnQgJy4vVkdyaWQuc2FzcydcblxuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJ1xuXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgR3JpZCgnY29udGFpbmVyJykuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY29udGFpbmVyJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBpZDogU3RyaW5nLFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgfSxcbiAgICBmbHVpZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHJlbmRlciAoaCwgeyBwcm9wcywgZGF0YSwgY2hpbGRyZW4gfSkge1xuICAgIGxldCBjbGFzc2VzXG4gICAgY29uc3QgeyBhdHRycyB9ID0gZGF0YVxuICAgIGlmIChhdHRycykge1xuICAgICAgLy8gcmVzZXQgYXR0cnMgdG8gZXh0cmFjdCB1dGlsaXR5IGNsYXNlcyBsaWtlIHBhLTNcbiAgICAgIGRhdGEuYXR0cnMgPSB7fVxuICAgICAgY2xhc3NlcyA9IE9iamVjdC5rZXlzKGF0dHJzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIG9uY2UgcmVzb2x2ZWRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS9pc3N1ZXMvNzg0MVxuICAgICAgICBpZiAoa2V5ID09PSAnc2xvdCcpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNba2V5XVxuXG4gICAgICAgIC8vIGFkZCBiYWNrIGRhdGEgYXR0cmlidXRlcyBsaWtlIGRhdGEtdGVzdD1cImZvb1wiIGJ1dCBkbyBub3RcbiAgICAgICAgLy8gYWRkIHRoZW0gYXMgY2xhc3Nlc1xuICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICBkYXRhLmF0dHJzIVtrZXldID0gdmFsdWVcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5pZCkge1xuICAgICAgZGF0YS5kb21Qcm9wcyA9IGRhdGEuZG9tUHJvcHMgfHwge31cbiAgICAgIGRhdGEuZG9tUHJvcHMuaWQgPSBwcm9wcy5pZFxuICAgIH1cblxuICAgIHJldHVybiBoKFxuICAgICAgcHJvcHMudGFnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICdjb250YWluZXInLFxuICAgICAgICBjbGFzczogQXJyYXk8YW55Pih7XG4gICAgICAgICAgJ2NvbnRhaW5lci0tZmx1aWQnOiBwcm9wcy5mbHVpZCxcbiAgICAgICAgfSkuY29uY2F0KGNsYXNzZXMgfHwgW10pLFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlblxuICAgIClcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ2hpcC5zYXNzJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBWRXhwYW5kWFRyYW5zaXRpb24gfSBmcm9tICcuLi90cmFuc2l0aW9ucydcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIEdyb3VwYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvZ3JvdXBhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBUb2dnbGVhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJ1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSdcbmltcG9ydCBTaXplYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc2l6ZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgYnJlYWtpbmcgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFNpemVhYmxlLFxuICBSb3V0YWJsZSxcbiAgVGhlbWVhYmxlLFxuICBHcm91cGFibGVGYWN0b3J5KCdjaGlwR3JvdXAnKSxcbiAgVG9nZ2xlYWJsZUZhY3RvcnkoJ2lucHV0VmFsdWUnKVxuKS5leHRlbmQoe1xuICBuYW1lOiAndi1jaGlwJyxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaXBHcm91cCkgcmV0dXJuICcnXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpcEdyb3VwLmFjdGl2ZUNsYXNzXG4gICAgICB9LFxuICAgIH0gYXMgYW55IGFzIFByb3BWYWxpZGF0b3I8c3RyaW5nPixcbiAgICBjbG9zZTogQm9vbGVhbixcbiAgICBjbG9zZUljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZGVsZXRlJyxcbiAgICB9LFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGRyYWdnYWJsZTogQm9vbGVhbixcbiAgICBmaWx0ZXI6IEJvb2xlYW4sXG4gICAgZmlsdGVySWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjb21wbGV0ZScsXG4gICAgfSxcbiAgICBsYWJlbDogQm9vbGVhbixcbiAgICBsaW5rOiBCb29sZWFuLFxuICAgIG91dGxpbmVkOiBCb29sZWFuLFxuICAgIHBpbGw6IEJvb2xlYW4sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc3BhbicsXG4gICAgfSxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcbiAgICB2YWx1ZTogbnVsbCBhcyBhbnkgYXMgUHJvcFR5cGU8YW55PixcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHByb3h5Q2xhc3M6ICd2LWNoaXAtLWFjdGl2ZScsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWNoaXAnOiB0cnVlLFxuICAgICAgICAuLi5Sb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtY2hpcC0tY2xpY2thYmxlJzogdGhpcy5pc0NsaWNrYWJsZSxcbiAgICAgICAgJ3YtY2hpcC0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAndi1jaGlwLS1kcmFnZ2FibGUnOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgICAgJ3YtY2hpcC0tbGFiZWwnOiB0aGlzLmxhYmVsLFxuICAgICAgICAndi1jaGlwLS1saW5rJzogdGhpcy5pc0xpbmssXG4gICAgICAgICd2LWNoaXAtLW5vLWNvbG9yJzogIXRoaXMuY29sb3IsXG4gICAgICAgICd2LWNoaXAtLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgJ3YtY2hpcC0tcGlsbCc6IHRoaXMucGlsbCxcbiAgICAgICAgJ3YtY2hpcC0tcmVtb3ZhYmxlJzogdGhpcy5oYXNDbG9zZSxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICAgIC4uLnRoaXMuc2l6ZWFibGVDbGFzc2VzLFxuICAgICAgICAuLi50aGlzLmdyb3VwQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc0Nsb3NlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuY2xvc2UpXG4gICAgfSxcbiAgICBpc0NsaWNrYWJsZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgUm91dGFibGUub3B0aW9ucy5jb21wdXRlZC5pc0NsaWNrYWJsZS5jYWxsKHRoaXMpIHx8XG4gICAgICAgIHRoaXMuY2hpcEdyb3VwXG4gICAgICApXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICBjb25zdCBicmVha2luZ1Byb3BzID0gW1xuICAgICAgWydvdXRsaW5lJywgJ291dGxpbmVkJ10sXG4gICAgICBbJ3NlbGVjdGVkJywgJ2lucHV0LXZhbHVlJ10sXG4gICAgICBbJ3ZhbHVlJywgJ2FjdGl2ZSddLFxuICAgICAgWydAaW5wdXQnLCAnQGFjdGl2ZS5zeW5jJ10sXG4gICAgXVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBicmVha2luZ1Byb3BzLmZvckVhY2goKFtvcmlnaW5hbCwgcmVwbGFjZW1lbnRdKSA9PiB7XG4gICAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkob3JpZ2luYWwpKSBicmVha2luZyhvcmlnaW5hbCwgcmVwbGFjZW1lbnQsIHRoaXMpXG4gICAgfSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2sgKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcblxuICAgICAgdGhpcy5jaGlwR3JvdXAgJiYgdGhpcy50b2dnbGUoKVxuICAgIH0sXG4gICAgZ2VuRmlsdGVyICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXG5cbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNoaXBfX2ZpbHRlcicsXG4gICAgICAgICAgICBwcm9wczogeyBsZWZ0OiB0cnVlIH0sXG4gICAgICAgICAgfSwgdGhpcy5maWx0ZXJJY29uKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZFeHBhbmRYVHJhbnNpdGlvbiwgY2hpbGRyZW4pXG4gICAgfSxcbiAgICBnZW5DbG9zZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNoaXBfX2Nsb3NlJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICByaWdodDogdHJ1ZSxcbiAgICAgICAgICBzaXplOiAxOCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2s6Y2xvc2UnKVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmFjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLmNsb3NlSWNvbilcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fY29udGVudCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZmlsdGVyICYmIHRoaXMuZ2VuRmlsdGVyKCksXG4gICAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHQsXG4gICAgICAgIHRoaXMuaGFzQ2xvc2UgJiYgdGhpcy5nZW5DbG9zZSgpLFxuICAgICAgXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFt0aGlzLmdlbkNvbnRlbnQoKV1cbiAgICBsZXQgeyB0YWcsIGRhdGEgfSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZUxpbmsoKVxuXG4gICAgZGF0YS5hdHRycyA9IHtcbiAgICAgIC4uLmRhdGEuYXR0cnMsXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlID8gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgICAgdGFiaW5kZXg6IHRoaXMuY2hpcEdyb3VwICYmICF0aGlzLmRpc2FibGVkID8gMCA6IGRhdGEuYXR0cnMhLnRhYmluZGV4LFxuICAgIH1cbiAgICBkYXRhLmRpcmVjdGl2ZXMhLnB1c2goe1xuICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgdmFsdWU6IHRoaXMuYWN0aXZlLFxuICAgIH0pXG4gICAgZGF0YSA9IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIGRhdGEpXG5cbiAgICBjb25zdCBjb2xvciA9IHRoaXMudGV4dENvbG9yIHx8ICh0aGlzLm91dGxpbmVkICYmIHRoaXMuY29sb3IpXG5cbiAgICByZXR1cm4gaCh0YWcsIHRoaXMuc2V0VGV4dENvbG9yKGNvbG9yLCBkYXRhKSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZDaGlwIGZyb20gJy4vVkNoaXAnXG5cbmV4cG9ydCB7IFZDaGlwIH1cbmV4cG9ydCBkZWZhdWx0IFZDaGlwXG4iLCJpbXBvcnQgJy4vVlNpbXBsZUNoZWNrYm94LnNhc3MnXG5cbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbmltcG9ydCBWdWUsIHsgVk5vZGUsIFZOb2RlRGlyZWN0aXZlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICcuLi9WSWNvbidcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7IHdyYXBJbkFycmF5IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2ltcGxlLWNoZWNrYm94JyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICByaXBwbGUsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICAuLi5Db2xvcmFibGUub3B0aW9ucy5wcm9wcyxcbiAgICAuLi5UaGVtZWFibGUub3B0aW9ucy5wcm9wcyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgdmFsdWU6IEJvb2xlYW4sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjaGVja2JveEluZGV0ZXJtaW5hdGUnLFxuICAgIH0sXG4gICAgb25JY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94T24nLFxuICAgIH0sXG4gICAgb2ZmSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjaGVja2JveE9mZicsXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgsIHsgcHJvcHMsIGRhdGEsIGxpc3RlbmVycyB9KTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW11cblxuICAgIGlmIChwcm9wcy5yaXBwbGUgJiYgIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICBjb25zdCByaXBwbGUgPSBoKCdkaXYnLCBDb2xvcmFibGUub3B0aW9ucy5tZXRob2RzLnNldFRleHRDb2xvcihwcm9wcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXQtLXNlbGVjdGlvbi1jb250cm9sc19fcmlwcGxlJyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAncmlwcGxlJyxcbiAgICAgICAgICB2YWx1ZTogeyBjZW50ZXI6IHRydWUgfSxcbiAgICAgICAgfV0gYXMgVk5vZGVEaXJlY3RpdmVbXSxcbiAgICAgIH0pKVxuXG4gICAgICBjaGlsZHJlbi5wdXNoKHJpcHBsZSlcbiAgICB9XG5cbiAgICBsZXQgaWNvbiA9IHByb3BzLm9mZkljb25cbiAgICBpZiAocHJvcHMuaW5kZXRlcm1pbmF0ZSkgaWNvbiA9IHByb3BzLmluZGV0ZXJtaW5hdGVJY29uXG4gICAgZWxzZSBpZiAocHJvcHMudmFsdWUpIGljb24gPSBwcm9wcy5vbkljb25cblxuICAgIGNoaWxkcmVuLnB1c2goaChWSWNvbiwgQ29sb3JhYmxlLm9wdGlvbnMubWV0aG9kcy5zZXRUZXh0Q29sb3IocHJvcHMudmFsdWUgJiYgcHJvcHMuY29sb3IsIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgZGFyazogcHJvcHMuZGFyayxcbiAgICAgICAgbGlnaHQ6IHByb3BzLmxpZ2h0LFxuICAgICAgfSxcbiAgICB9KSwgaWNvbikpXG5cbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ3Ytc2ltcGxlLWNoZWNrYm94JzogdHJ1ZSxcbiAgICAgICd2LXNpbXBsZS1jaGVja2JveC0tZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlZCxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JyxcbiAgICAgIG1lcmdlRGF0YShkYXRhLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5vbiAmJiBkYXRhLm9uLmlucHV0ICYmICFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICB3cmFwSW5BcnJheShkYXRhLm9uLmlucHV0KS5mb3JFYWNoKGYgPT4gZighcHJvcHMudmFsdWUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZTaW1wbGVDaGVja2JveCBmcm9tICcuLi9WQ2hlY2tib3gvVlNpbXBsZUNoZWNrYm94J1xuaW1wb3J0IFZEaXZpZGVyIGZyb20gJy4uL1ZEaXZpZGVyJ1xuaW1wb3J0IFZTdWJoZWFkZXIgZnJvbSAnLi4vVlN1YmhlYWRlcidcbmltcG9ydCB7XG4gIFZMaXN0LFxuICBWTGlzdEl0ZW0sXG4gIFZMaXN0SXRlbUFjdGlvbixcbiAgVkxpc3RJdGVtQ29udGVudCxcbiAgVkxpc3RJdGVtVGl0bGUsXG59IGZyb20gJy4uL1ZMaXN0J1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgcmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gSGVscGVyc1xuaW1wb3J0IHtcbiAgZXNjYXBlSFRNTCxcbiAgZ2V0UHJvcGVydHlGcm9tSXRlbSxcbn0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IFZOb2RlLCBQcm9wVHlwZSwgVk5vZGVDaGlsZHJlbiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IgfSBmcm9tICd2dWUvdHlwZXMvb3B0aW9ucydcbmltcG9ydCB7IFNlbGVjdEl0ZW1LZXkgfSBmcm9tICd2dWV0aWZ5L3R5cGVzJ1xuXG50eXBlIExpc3RUaWxlID0geyBpdGVtOiBhbnksIGRpc2FibGVkPzogbnVsbCB8IGJvb2xlYW4sIHZhbHVlPzogYm9vbGVhbiwgaW5kZXg6IG51bWJlciB9O1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKENvbG9yYWJsZSwgVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1zZWxlY3QtbGlzdCcsXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS9pc3N1ZXMvNjg3MlxuICBkaXJlY3RpdmVzOiB7XG4gICAgcmlwcGxlLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aW9uOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGhpZGVTZWxlY3RlZDogQm9vbGVhbixcbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8YW55W10+LFxuICAgIGl0ZW1EaXNhYmxlZDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgfSxcbiAgICBpdGVtVGV4dDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICAgIGl0ZW1WYWx1ZToge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgfSxcbiAgICBub0RhdGFUZXh0OiBTdHJpbmcsXG4gICAgbm9GaWx0ZXI6IEJvb2xlYW4sXG4gICAgc2VhcmNoSW5wdXQ6IG51bGwgYXMgdW5rbm93biBhcyBQcm9wVHlwZTxhbnk+LFxuICAgIHNlbGVjdGVkSXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPGFueVtdPixcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHBhcnNlZEl0ZW1zICgpOiBhbnlbXSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcChpdGVtID0+IHRoaXMuZ2V0VmFsdWUoaXRlbSkpXG4gICAgfSxcbiAgICB0aWxlQWN0aXZlQ2xhc3MgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvcikuY2xhc3MgfHwge30pLmpvaW4oJyAnKVxuICAgIH0sXG4gICAgc3RhdGljTm9EYXRhVGlsZSAoKTogVk5vZGUge1xuICAgICAgY29uc3QgdGlsZSA9IHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbW91c2Vkb3duOiAoZTogRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKSwgLy8gUHJldmVudCBvbkJsdXIgZnJvbSBiZWluZyBjYWxsZWRcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtLCB0aWxlLCBbXG4gICAgICAgIHRoaXMuZ2VuVGlsZUNvbnRlbnQodGhpcy5ub0RhdGFUZXh0KSxcbiAgICAgIF0pXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQWN0aW9uIChpdGVtOiBvYmplY3QsIGlucHV0VmFsdWU6IGFueSk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMaXN0SXRlbUFjdGlvbiwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZTaW1wbGVDaGVja2JveCwge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiAoKSA9PiB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5EaXZpZGVyIChwcm9wczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkRpdmlkZXIsIHsgcHJvcHMgfSlcbiAgICB9LFxuICAgIGdlbkZpbHRlcmVkVGV4dCAodGV4dDogc3RyaW5nKSB7XG4gICAgICB0ZXh0ID0gdGV4dCB8fCAnJ1xuXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoSW5wdXQgfHwgdGhpcy5ub0ZpbHRlcikgcmV0dXJuIGVzY2FwZUhUTUwodGV4dClcblxuICAgICAgY29uc3QgeyBzdGFydCwgbWlkZGxlLCBlbmQgfSA9IHRoaXMuZ2V0TWFza2VkQ2hhcmFjdGVycyh0ZXh0KVxuXG4gICAgICByZXR1cm4gYCR7ZXNjYXBlSFRNTChzdGFydCl9JHt0aGlzLmdlbkhpZ2hsaWdodChtaWRkbGUpfSR7ZXNjYXBlSFRNTChlbmQpfWBcbiAgICB9LFxuICAgIGdlbkhlYWRlciAocHJvcHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWU3ViaGVhZGVyLCB7IHByb3BzIH0sIHByb3BzLmhlYWRlcilcbiAgICB9LFxuICAgIGdlbkhpZ2hsaWdodCAodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJ2LWxpc3QtaXRlbV9fbWFza1wiPiR7ZXNjYXBlSFRNTCh0ZXh0KX08L3NwYW4+YFxuICAgIH0sXG4gICAgZ2V0TWFza2VkQ2hhcmFjdGVycyAodGV4dDogc3RyaW5nKToge1xuICAgICAgc3RhcnQ6IHN0cmluZ1xuICAgICAgbWlkZGxlOiBzdHJpbmdcbiAgICAgIGVuZDogc3RyaW5nXG4gICAgfSB7XG4gICAgICBjb25zdCBzZWFyY2hJbnB1dCA9ICh0aGlzLnNlYXJjaElucHV0IHx8ICcnKS50b1N0cmluZygpLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IGluZGV4ID0gdGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoSW5wdXQpXG5cbiAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiB7IHN0YXJ0OiAnJywgbWlkZGxlOiB0ZXh0LCBlbmQ6ICcnIH1cblxuICAgICAgY29uc3Qgc3RhcnQgPSB0ZXh0LnNsaWNlKDAsIGluZGV4KVxuICAgICAgY29uc3QgbWlkZGxlID0gdGV4dC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2hJbnB1dC5sZW5ndGgpXG4gICAgICBjb25zdCBlbmQgPSB0ZXh0LnNsaWNlKGluZGV4ICsgc2VhcmNoSW5wdXQubGVuZ3RoKVxuICAgICAgcmV0dXJuIHsgc3RhcnQsIG1pZGRsZSwgZW5kIH1cbiAgICB9LFxuICAgIGdlblRpbGUgKHtcbiAgICAgIGl0ZW0sXG4gICAgICBpbmRleCxcbiAgICAgIGRpc2FibGVkID0gbnVsbCxcbiAgICAgIHZhbHVlID0gZmFsc2UsXG4gICAgfTogTGlzdFRpbGUpOiBWTm9kZSB8IFZOb2RlW10gfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF2YWx1ZSkgdmFsdWUgPSB0aGlzLmhhc0l0ZW0oaXRlbSlcblxuICAgICAgaWYgKGl0ZW0gPT09IE9iamVjdChpdGVtKSkge1xuICAgICAgICBkaXNhYmxlZCA9IGRpc2FibGVkICE9PSBudWxsXG4gICAgICAgICAgPyBkaXNhYmxlZFxuICAgICAgICAgIDogdGhpcy5nZXREaXNhYmxlZChpdGVtKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aWxlID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaW4gbGlzdCBkb2VzIG5vdFxuICAgICAgICAgIC8vIGNvbnRhaW4gYXJpYS1zZWxlY3RlZCBieSBkZWZhdWx0XG4gICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBTdHJpbmcodmFsdWUpLFxuICAgICAgICAgIGlkOiBgbGlzdC1pdGVtLSR7dGhpcy5fdWlkfS0ke2luZGV4fWAsXG4gICAgICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbW91c2Vkb3duOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgb25CbHVyIGZyb20gYmVpbmcgY2FsbGVkXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsaWNrOiAoKSA9PiBkaXNhYmxlZCB8fCB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy50aWxlQWN0aXZlQ2xhc3MsXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgcmlwcGxlOiB0cnVlLFxuICAgICAgICAgIGlucHV0VmFsdWU6IHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuJHNjb3BlZFNsb3RzLml0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtLCB0aWxlLCBbXG4gICAgICAgICAgdGhpcy5hY3Rpb24gJiYgIXRoaXMuaGlkZVNlbGVjdGVkICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB0aGlzLmdlbkFjdGlvbihpdGVtLCB2YWx1ZSlcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICB0aGlzLmdlblRpbGVDb250ZW50KGl0ZW0sIGluZGV4KSxcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50ID0gdGhpc1xuICAgICAgY29uc3Qgc2NvcGVkU2xvdCA9IHRoaXMuJHNjb3BlZFNsb3RzLml0ZW0oe1xuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLi4udGlsZS5hdHRycyxcbiAgICAgICAgICAuLi50aWxlLnByb3BzLFxuICAgICAgICB9LFxuICAgICAgICBvbjogdGlsZS5vbixcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLm5lZWRzVGlsZShzY29wZWRTbG90KVxuICAgICAgICA/IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtLCB0aWxlLCBzY29wZWRTbG90KVxuICAgICAgICA6IHNjb3BlZFNsb3RcbiAgICB9LFxuICAgIGdlblRpbGVDb250ZW50IChpdGVtOiBhbnksIGluZGV4ID0gMCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZ2VuRmlsdGVyZWRUZXh0KHRoaXMuZ2V0VGV4dChpdGVtKSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtQ29udGVudCxcbiAgICAgICAgW3RoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtVGl0bGUsIHtcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUwgfSxcbiAgICAgICAgfSldXG4gICAgICApXG4gICAgfSxcbiAgICBoYXNJdGVtIChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlZEl0ZW1zLmluZGV4T2YodGhpcy5nZXRWYWx1ZShpdGVtKSkgPiAtMVxuICAgIH0sXG4gICAgbmVlZHNUaWxlIChzbG90OiBWTm9kZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2xvdCEubGVuZ3RoICE9PSAxIHx8XG4gICAgICAgIHNsb3QhWzBdLmNvbXBvbmVudE9wdGlvbnMgPT0gbnVsbCB8fFxuICAgICAgICBzbG90IVswXS5jb21wb25lbnRPcHRpb25zLkN0b3Iub3B0aW9ucy5uYW1lICE9PSAndi1saXN0LWl0ZW0nXG4gICAgfSxcbiAgICBnZXREaXNhYmxlZCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbURpc2FibGVkLCBmYWxzZSkpXG4gICAgfSxcbiAgICBnZXRUZXh0IChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1UZXh0LCBpdGVtKSlcbiAgICB9LFxuICAgIGdldFZhbHVlIChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVZhbHVlLCB0aGlzLmdldFRleHQoaXRlbSkpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKCk6IFZOb2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbjogVk5vZGVDaGlsZHJlbiA9IFtdXG4gICAgY29uc3QgaXRlbXNMZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aFxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdXG5cbiAgICAgIGlmICh0aGlzLmhpZGVTZWxlY3RlZCAmJlxuICAgICAgICB0aGlzLmhhc0l0ZW0oaXRlbSlcbiAgICAgICkgY29udGludWVcblxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkgY2hpbGRyZW4ucHVzaCh0aGlzLmdlblRpbGUoeyBpdGVtLCBpbmRleCB9KSlcbiAgICAgIGVsc2UgaWYgKGl0ZW0uaGVhZGVyKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuSGVhZGVyKGl0ZW0pKVxuICAgICAgZWxzZSBpZiAoaXRlbS5kaXZpZGVyKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuRGl2aWRlcihpdGVtKSlcbiAgICAgIGVsc2UgY2hpbGRyZW4ucHVzaCh0aGlzLmdlblRpbGUoeyBpdGVtLCBpbmRleCB9KSlcbiAgICB9XG5cbiAgICBjaGlsZHJlbi5sZW5ndGggfHwgY2hpbGRyZW4ucHVzaCh0aGlzLiRzbG90c1snbm8tZGF0YSddIHx8IHRoaXMuc3RhdGljTm9EYXRhVGlsZSlcblxuICAgIHRoaXMuJHNsb3RzWydwcmVwZW5kLWl0ZW0nXSAmJiBjaGlsZHJlbi51bnNoaWZ0KHRoaXMuJHNsb3RzWydwcmVwZW5kLWl0ZW0nXSlcblxuICAgIHRoaXMuJHNsb3RzWydhcHBlbmQtaXRlbSddICYmIGNoaWxkcmVuLnB1c2godGhpcy4kc2xvdHNbJ2FwcGVuZC1pdGVtJ10pXG5cbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdCwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdC1saXN0JyxcbiAgICAgIGNsYXNzOiB0aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgfSxcbiAgICAgIHByb3BzOiB7IGRlbnNlOiB0aGlzLmRlbnNlIH0sXG4gICAgfSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ2ZpbHRlcmFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgbm9EYXRhVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyR2dWV0aWZ5Lm5vRGF0YVRleHQnLFxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4uL1ZUZXh0RmllbGQvVlRleHRGaWVsZC5zYXNzJ1xuaW1wb3J0ICcuL1ZTZWxlY3Quc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZDaGlwIGZyb20gJy4uL1ZDaGlwJ1xuaW1wb3J0IFZNZW51IGZyb20gJy4uL1ZNZW51J1xuaW1wb3J0IFZTZWxlY3RMaXN0IGZyb20gJy4vVlNlbGVjdExpc3QnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWSW5wdXQgZnJvbSAnLi4vVklucHV0J1xuaW1wb3J0IFZUZXh0RmllbGQgZnJvbSAnLi4vVlRleHRGaWVsZC9WVGV4dEZpZWxkJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb21wYXJhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb21wYXJhYmxlJ1xuaW1wb3J0IEZpbHRlcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2ZpbHRlcmFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5pbXBvcnQgeyBnZXRQcm9wZXJ0eUZyb21JdGVtLCBnZXRPYmplY3RWYWx1ZUJ5UGF0aCwga2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBjb25zb2xlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFZOb2RlRGlyZWN0aXZlLCBQcm9wVHlwZSwgVk5vZGVEYXRhIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgU2VsZWN0SXRlbUtleSB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWVudVByb3BzID0ge1xuICBjbG9zZU9uQ2xpY2s6IGZhbHNlLFxuICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcbiAgZGlzYWJsZUtleXM6IHRydWUsXG4gIG9wZW5PbkNsaWNrOiBmYWxzZSxcbiAgbWF4SGVpZ2h0OiAzMDQsXG59XG5cbi8vIFR5cGVzXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWVGV4dEZpZWxkLFxuICBDb21wYXJhYmxlLFxuICBGaWx0ZXJhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRyZWZzOiB7XG4gICAgbWVudTogSW5zdGFuY2VUeXBlPHR5cGVvZiBWTWVudT5cbiAgICBsYWJlbDogSFRNTEVsZW1lbnRcbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICAgICdwcmVwZW5kLWlubmVyJzogSFRNTEVsZW1lbnRcbiAgICAnYXBwZW5kLWlubmVyJzogSFRNTEVsZW1lbnRcbiAgICBwcmVmaXg6IEhUTUxFbGVtZW50XG4gICAgc3VmZml4OiBIVE1MRWxlbWVudFxuICB9XG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNlbGVjdCcsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIENsaWNrT3V0c2lkZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGFwcGVuZEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZHJvcGRvd24nLFxuICAgIH0sXG4gICAgYXR0YWNoOiB7XG4gICAgICB0eXBlOiBudWxsIGFzIHVua25vd24gYXMgUHJvcFR5cGU8c3RyaW5nIHwgYm9vbGVhbiB8IEVsZW1lbnQgfCBWTm9kZT4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGNhY2hlSXRlbXM6IEJvb2xlYW4sXG4gICAgY2hpcHM6IEJvb2xlYW4sXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgIGRlbGV0YWJsZUNoaXBzOiBCb29sZWFuLFxuICAgIGRpc2FibGVMb29rdXA6IEJvb2xlYW4sXG4gICAgZWFnZXI6IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkOiBCb29sZWFuLFxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxhbnlbXT4sXG4gICAgaXRlbUNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBpdGVtRGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBGdW5jdGlvbl0gYXMgUHJvcFR5cGU8U2VsZWN0SXRlbUtleT4sXG4gICAgICBkZWZhdWx0OiAnZGlzYWJsZWQnLFxuICAgIH0sXG4gICAgaXRlbVRleHQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBGdW5jdGlvbl0gYXMgUHJvcFR5cGU8U2VsZWN0SXRlbUtleT4sXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgICBpdGVtVmFsdWU6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBGdW5jdGlvbl0gYXMgUHJvcFR5cGU8U2VsZWN0SXRlbUtleT4sXG4gICAgICBkZWZhdWx0OiAndmFsdWUnLFxuICAgIH0sXG4gICAgbWVudVByb3BzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGRlZmF1bHRNZW51UHJvcHMsXG4gICAgfSxcbiAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICBvcGVuT25DbGVhcjogQm9vbGVhbixcbiAgICByZXR1cm5PYmplY3Q6IEJvb2xlYW4sXG4gICAgc21hbGxDaGlwczogQm9vbGVhbixcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FjaGVkSXRlbXM6IHRoaXMuY2FjaGVJdGVtcyA/IHRoaXMuaXRlbXMgOiBbXSxcbiAgICAgIG1lbnVJc0Jvb3RlZDogZmFsc2UsXG4gICAgICBpc01lbnVBY3RpdmU6IGZhbHNlLFxuICAgICAgbGFzdEl0ZW06IDIwLFxuICAgICAgLy8gQXMgbG9uZyBhcyBhIHZhbHVlIGlzIGRlZmluZWQsIHNob3cgaXRcbiAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgbXVsdGlwbGVcbiAgICAgIC8vIHRvIGRldGVybWluZSB3aGljaCBkZWZhdWx0IHRvIHByb3ZpZGVcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy52YWx1ZVxuICAgICAgICA6IHRoaXMubXVsdGlwbGUgPyBbXSA6IHVuZGVmaW5lZCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IC0xLFxuICAgICAgc2VsZWN0ZWRJdGVtczogW10gYXMgYW55W10sXG4gICAgICBrZXlib2FyZExvb2t1cFByZWZpeDogJycsXG4gICAgICBrZXlib2FyZExvb2t1cExhc3RUaW1lOiAwLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qIEFsbCBpdGVtcyB0aGF0IHRoZSBzZWxlY3QgaGFzICovXG4gICAgYWxsSXRlbXMgKCk6IG9iamVjdFtdIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckR1cGxpY2F0ZXModGhpcy5jYWNoZWRJdGVtcy5jb25jYXQodGhpcy5pdGVtcykpXG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlRleHRGaWVsZC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3Ytc2VsZWN0JzogdHJ1ZSxcbiAgICAgICAgJ3Ytc2VsZWN0LS1jaGlwcyc6IHRoaXMuaGFzQ2hpcHMsXG4gICAgICAgICd2LXNlbGVjdC0tY2hpcHMtLXNtYWxsJzogdGhpcy5zbWFsbENoaXBzLFxuICAgICAgICAndi1zZWxlY3QtLWlzLW1lbnUtYWN0aXZlJzogdGhpcy5pc01lbnVBY3RpdmUsXG4gICAgICAgICd2LXNlbGVjdC0taXMtbXVsdGknOiB0aGlzLm11bHRpcGxlLFxuICAgICAgfVxuICAgIH0sXG4gICAgLyogVXNlZCBieSBvdGhlciBjb21wb25lbnRzIHRvIG92ZXJ3cml0ZSAqL1xuICAgIGNvbXB1dGVkSXRlbXMgKCk6IG9iamVjdFtdIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbEl0ZW1zXG4gICAgfSxcbiAgICBjb21wdXRlZE93bnMgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gYGxpc3QtJHt0aGlzLl91aWR9YFxuICAgIH0sXG4gICAgY29tcHV0ZWRDb3VudGVyVmFsdWUgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZVxuICAgICAgICA/IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGhcbiAgICAgICAgOiAodGhpcy5nZXRUZXh0KHRoaXMuc2VsZWN0ZWRJdGVtc1swXSkgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoXG4gICAgfSxcbiAgICBkaXJlY3RpdmVzICgpOiBWTm9kZURpcmVjdGl2ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRm9jdXNlZCA/IFt7XG4gICAgICAgIG5hbWU6ICdjbGljay1vdXRzaWRlJyxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBoYW5kbGVyOiB0aGlzLmJsdXIsXG4gICAgICAgICAgY2xvc2VDb25kaXRpb25hbDogdGhpcy5jbG9zZUNvbmRpdGlvbmFsLFxuICAgICAgICB9LFxuICAgICAgfV0gOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGR5bmFtaWNIZWlnaHQgKCkge1xuICAgICAgcmV0dXJuICdhdXRvJ1xuICAgIH0sXG4gICAgaGFzQ2hpcHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpcHMgfHwgdGhpcy5zbWFsbENoaXBzXG4gICAgfSxcbiAgICBoYXNTbG90ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaGFzQ2hpcHMgfHwgdGhpcy4kc2NvcGVkU2xvdHMuc2VsZWN0aW9uKVxuICAgIH0sXG4gICAgaXNEaXJ0eSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGxpc3REYXRhICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qgc2NvcGVJZCA9IHRoaXMuJHZub2RlICYmICh0aGlzLiR2bm9kZS5jb250ZXh0IS4kb3B0aW9ucyBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5fc2NvcGVJZFxuICAgICAgY29uc3QgYXR0cnMgPSBzY29wZUlkID8ge1xuICAgICAgICBbc2NvcGVJZF06IHRydWUsXG4gICAgICB9IDoge31cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgICBpZDogdGhpcy5jb21wdXRlZE93bnMsXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWN0aW9uOiB0aGlzLm11bHRpcGxlLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLml0ZW1Db2xvcixcbiAgICAgICAgICBkZW5zZTogdGhpcy5kZW5zZSxcbiAgICAgICAgICBoaWRlU2VsZWN0ZWQ6IHRoaXMuaGlkZVNlbGVjdGVkLFxuICAgICAgICAgIGl0ZW1zOiB0aGlzLnZpcnR1YWxpemVkSXRlbXMsXG4gICAgICAgICAgaXRlbURpc2FibGVkOiB0aGlzLml0ZW1EaXNhYmxlZCxcbiAgICAgICAgICBpdGVtVGV4dDogdGhpcy5pdGVtVGV4dCxcbiAgICAgICAgICBpdGVtVmFsdWU6IHRoaXMuaXRlbVZhbHVlLFxuICAgICAgICAgIG5vRGF0YVRleHQ6IHRoaXMuJHZ1ZXRpZnkubGFuZy50KHRoaXMubm9EYXRhVGV4dCksXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5zZWxlY3RlZEl0ZW1zLFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHNlbGVjdDogdGhpcy5zZWxlY3RJdGVtLFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czoge1xuICAgICAgICAgIGl0ZW06IHRoaXMuJHNjb3BlZFNsb3RzLml0ZW0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSxcbiAgICBzdGF0aWNMaXN0ICgpOiBWTm9kZSB7XG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ25vLWRhdGEnXSB8fCB0aGlzLiRzbG90c1sncHJlcGVuZC1pdGVtJ10gfHwgdGhpcy4kc2xvdHNbJ2FwcGVuZC1pdGVtJ10pIHtcbiAgICAgICAgY29uc29sZUVycm9yKCdhc3NlcnQ6IHN0YXRpY0xpc3Qgc2hvdWxkIG5vdCBiZSBjYWxsZWQgaWYgc2xvdHMgYXJlIHVzZWQnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWU2VsZWN0TGlzdCwgdGhpcy5saXN0RGF0YSlcbiAgICB9LFxuICAgIHZpcnR1YWxpemVkSXRlbXMgKCk6IG9iamVjdFtdIHtcbiAgICAgIHJldHVybiAodGhpcy4kX21lbnVQcm9wcyBhcyBhbnkpLmF1dG9cbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkSXRlbXNcbiAgICAgICAgOiB0aGlzLmNvbXB1dGVkSXRlbXMuc2xpY2UoMCwgdGhpcy5sYXN0SXRlbSlcbiAgICB9LFxuICAgIG1lbnVDYW5TaG93OiAoKSA9PiB0cnVlLFxuICAgICRfbWVudVByb3BzICgpOiBvYmplY3Qge1xuICAgICAgbGV0IG5vcm1hbGlzZWRQcm9wcyA9IHR5cGVvZiB0aGlzLm1lbnVQcm9wcyA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB0aGlzLm1lbnVQcm9wcy5zcGxpdCgnLCcpXG4gICAgICAgIDogdGhpcy5tZW51UHJvcHNcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9ybWFsaXNlZFByb3BzKSkge1xuICAgICAgICBub3JtYWxpc2VkUHJvcHMgPSBub3JtYWxpc2VkUHJvcHMucmVkdWNlKChhY2MsIHApID0+IHtcbiAgICAgICAgICBhY2NbcC50cmltKCldID0gdHJ1ZVxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgfSwge30pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRlZmF1bHRNZW51UHJvcHMsXG4gICAgICAgIGVhZ2VyOiB0aGlzLmVhZ2VyLFxuICAgICAgICB2YWx1ZTogdGhpcy5tZW51Q2FuU2hvdyAmJiB0aGlzLmlzTWVudUFjdGl2ZSxcbiAgICAgICAgbnVkZ2VCb3R0b206IG5vcm1hbGlzZWRQcm9wcy5vZmZzZXRZID8gMSA6IDAsIC8vIGNvbnZlcnQgdG8gaW50XG4gICAgICAgIC4uLm5vcm1hbGlzZWRQcm9wcyxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaW50ZXJuYWxWYWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHZhbFxuICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1zKClcbiAgICB9LFxuICAgIGlzTWVudUFjdGl2ZSAodmFsKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uTWVudUFjdGl2ZUNoYW5nZSh2YWwpKVxuICAgIH0sXG4gICAgaXRlbXM6IHtcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgIGhhbmRsZXIgKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5jYWNoZUl0ZW1zKSB7XG4gICAgICAgICAgLy8gQnJlYWtzIHZ1ZS10ZXN0LXV0aWxzIGlmXG4gICAgICAgICAgLy8gdGhpcyBpc24ndCBjYWxjdWxhdGVkXG4gICAgICAgICAgLy8gb24gdGhlIG5leHQgdGlja1xuICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkSXRlbXMgPSB0aGlzLmZpbHRlckR1cGxpY2F0ZXModGhpcy5jYWNoZWRJdGVtcy5jb25jYXQodmFsKSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1zKClcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBibHVyIChlPzogRXZlbnQpIHtcbiAgICAgIFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLmJsdXIuY2FsbCh0aGlzLCBlKVxuICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZVxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTFcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgYWN0aXZhdGVNZW51ICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNJbnRlcmFjdGl2ZSB8fFxuICAgICAgICB0aGlzLmlzTWVudUFjdGl2ZVxuICAgICAgKSByZXR1cm5cblxuICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSB0cnVlXG4gICAgfSxcbiAgICBjbGVhcmFibGVDYWxsYmFjayAoKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMubXVsdGlwbGUgPyBbXSA6IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuc2V0TWVudUluZGV4KC0xKVxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKCkpXG5cbiAgICAgIGlmICh0aGlzLm9wZW5PbkNsZWFyKSB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIGNsb3NlQ29uZGl0aW9uYWwgKGU6IEV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaXNNZW51QWN0aXZlKSByZXR1cm4gdHJ1ZVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAhdGhpcy5faXNEZXN0cm95ZWQgJiZcblxuICAgICAgICAvLyBDbGljayBvcmlnaW5hdGVzIGZyb20gb3V0c2lkZSB0aGUgbWVudSBjb250ZW50XG4gICAgICAgIC8vIE11bHRpcGxlIHNlbGVjdHMgZG9uJ3QgY2xvc2Ugd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWRcbiAgICAgICAgKCF0aGlzLmdldENvbnRlbnQoKSB8fFxuICAgICAgICAhdGhpcy5nZXRDb250ZW50KCkuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkpICYmXG5cbiAgICAgICAgLy8gQ2xpY2sgb3JpZ2luYXRlcyBmcm9tIG91dHNpZGUgdGhlIGVsZW1lbnRcbiAgICAgICAgdGhpcy4kZWwgJiZcbiAgICAgICAgIXRoaXMuJGVsLmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpICYmXG4gICAgICAgIGUudGFyZ2V0ICE9PSB0aGlzLiRlbFxuICAgICAgKVxuICAgIH0sXG4gICAgZmlsdGVyRHVwbGljYXRlcyAoYXJyOiBhbnlbXSkge1xuICAgICAgY29uc3QgdW5pcXVlVmFsdWVzID0gbmV3IE1hcCgpXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBjb25zdCBpdGVtID0gYXJyW2luZGV4XVxuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmdldFZhbHVlKGl0ZW0pXG5cbiAgICAgICAgLy8gVE9ETzogY29tcGFyYXRvclxuICAgICAgICAhdW5pcXVlVmFsdWVzLmhhcyh2YWwpICYmIHVuaXF1ZVZhbHVlcy5zZXQodmFsLCBpdGVtKVxuICAgICAgfVxuICAgICAgcmV0dXJuIEFycmF5LmZyb20odW5pcXVlVmFsdWVzLnZhbHVlcygpKVxuICAgIH0sXG4gICAgZmluZEV4aXN0aW5nSW5kZXggKGl0ZW06IG9iamVjdCkge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdGhpcy5nZXRWYWx1ZShpdGVtKVxuXG4gICAgICByZXR1cm4gKHRoaXMuaW50ZXJuYWxWYWx1ZSB8fCBbXSkuZmluZEluZGV4KChpOiBvYmplY3QpID0+IHRoaXMudmFsdWVDb21wYXJhdG9yKHRoaXMuZ2V0VmFsdWUoaSksIGl0ZW1WYWx1ZSkpXG4gICAgfSxcbiAgICBnZXRDb250ZW50ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLm1lbnUgJiYgdGhpcy4kcmVmcy5tZW51LiRyZWZzLmNvbnRlbnRcbiAgICB9LFxuICAgIGdlbkNoaXBTZWxlY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5kZXg6IG51bWJlcikge1xuICAgICAgY29uc3QgaXNEaXNhYmxlZCA9IChcbiAgICAgICAgIXRoaXMuaXNJbnRlcmFjdGl2ZSB8fFxuICAgICAgICB0aGlzLmdldERpc2FibGVkKGl0ZW0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZDaGlwLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1jaGlwLS1zZWxlY3QnLFxuICAgICAgICBhdHRyczogeyB0YWJpbmRleDogLTEgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjbG9zZTogdGhpcy5kZWxldGFibGVDaGlwcyAmJiAhaXNEaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4LFxuICAgICAgICAgIHNtYWxsOiB0aGlzLnNtYWxsQ2hpcHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXhcbiAgICAgICAgICB9LFxuICAgICAgICAgICdjbGljazpjbG9zZSc6ICgpID0+IHRoaXMub25DaGlwSW5wdXQoaXRlbSksXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZShpdGVtKSksXG4gICAgICB9LCB0aGlzLmdldFRleHQoaXRlbSkpXG4gICAgfSxcbiAgICBnZW5Db21tYVNlbGVjdGlvbiAoaXRlbTogb2JqZWN0LCBpbmRleDogbnVtYmVyLCBsYXN0OiBib29sZWFuKSB7XG4gICAgICBjb25zdCBjb2xvciA9IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXggJiYgdGhpcy5jb21wdXRlZENvbG9yXG4gICAgICBjb25zdCBpc0Rpc2FibGVkID0gKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuZ2V0RGlzYWJsZWQoaXRlbSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKGNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zZWxlY3RfX3NlbGVjdGlvbiB2LXNlbGVjdF9fc2VsZWN0aW9uLS1jb21tYScsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3Ytc2VsZWN0X19zZWxlY3Rpb24tLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKGl0ZW0pKSxcbiAgICAgIH0pLCBgJHt0aGlzLmdldFRleHQoaXRlbSl9JHtsYXN0ID8gJycgOiAnLCAnfWApXG4gICAgfSxcbiAgICBnZW5EZWZhdWx0U2xvdCAoKTogKFZOb2RlIHwgVk5vZGVbXSB8IG51bGwpW10ge1xuICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuZ2VuU2VsZWN0aW9ucygpXG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2VuSW5wdXQoKVxuXG4gICAgICAvLyBJZiB0aGUgcmV0dXJuIGlzIGFuIGVtcHR5IGFycmF5XG4gICAgICAvLyBwdXNoIHRoZSBpbnB1dFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0aW9ucykpIHtcbiAgICAgICAgc2VsZWN0aW9ucy5wdXNoKGlucHV0KVxuICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgaW50byBjaGlsZHJlblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0aW9ucy5jaGlsZHJlbiA9IHNlbGVjdGlvbnMuY2hpbGRyZW4gfHwgW11cbiAgICAgICAgc2VsZWN0aW9ucy5jaGlsZHJlbi5wdXNoKGlucHV0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlbkZpZWxkc2V0KCksXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc2VsZWN0X19zbG90JyxcbiAgICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLmRpcmVjdGl2ZXMsXG4gICAgICAgIH0sIFtcbiAgICAgICAgICB0aGlzLmdlbkxhYmVsKCksXG4gICAgICAgICAgdGhpcy5wcmVmaXggPyB0aGlzLmdlbkFmZml4KCdwcmVmaXgnKSA6IG51bGwsXG4gICAgICAgICAgc2VsZWN0aW9ucyxcbiAgICAgICAgICB0aGlzLnN1ZmZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3N1ZmZpeCcpIDogbnVsbCxcbiAgICAgICAgICB0aGlzLmdlbkNsZWFySWNvbigpLFxuICAgICAgICAgIHRoaXMuZ2VuSWNvblNsb3QoKSxcbiAgICAgICAgICB0aGlzLmdlbkhpZGRlbklucHV0KCksXG4gICAgICAgIF0pLFxuICAgICAgICB0aGlzLmdlbk1lbnUoKSxcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzcygpLFxuICAgICAgXVxuICAgIH0sXG4gICAgZ2VuSWNvbiAoXG4gICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICBjYj86IChlOiBFdmVudCkgPT4gdm9pZCxcbiAgICAgIGV4dHJhRGF0YT86IFZOb2RlRGF0YVxuICAgICkge1xuICAgICAgY29uc3QgaWNvbiA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuSWNvbi5jYWxsKHRoaXMsIHR5cGUsIGNiLCBleHRyYURhdGEpXG5cbiAgICAgIGlmICh0eXBlID09PSAnYXBwZW5kJykge1xuICAgICAgICAvLyBEb24ndCBhbGxvdyB0aGUgZHJvcGRvd24gaWNvbiB0byBiZSBmb2N1c2VkXG4gICAgICAgIGljb24uY2hpbGRyZW4hWzBdLmRhdGEgPSBtZXJnZURhdGEoaWNvbi5jaGlsZHJlbiFbMF0uZGF0YSEsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGFiaW5kZXg6IGljb24uY2hpbGRyZW4hWzBdLmNvbXBvbmVudE9wdGlvbnMhLmxpc3RlbmVycyAmJiAnLTEnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiB1bmRlZmluZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGljb25cbiAgICB9LFxuICAgIGdlbklucHV0ICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLmdlbklucHV0LmNhbGwodGhpcylcblxuICAgICAgZGVsZXRlIGlucHV0LmRhdGEhLmF0dHJzIS5uYW1lXG5cbiAgICAgIGlucHV0LmRhdGEgPSBtZXJnZURhdGEoaW5wdXQuZGF0YSEsIHtcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByZWFkb25seTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiBTdHJpbmcodGhpcy5pc1JlYWRvbmx5KSxcbiAgICAgICAgICAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogZ2V0T2JqZWN0VmFsdWVCeVBhdGgodGhpcy4kcmVmcy5tZW51LCAnYWN0aXZlVGlsZS5pZCcpLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogZ2V0T2JqZWN0VmFsdWVCeVBhdGgoaW5wdXQuZGF0YSEsICdhdHRycy5hdXRvY29tcGxldGUnLCAnb2ZmJyksXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IGtleXByZXNzOiB0aGlzLm9uS2V5UHJlc3MgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH0sXG4gICAgZ2VuSGlkZGVuSW5wdXQgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHRoaXMubGF6eVZhbHVlIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgbmFtZTogdGhpcy5hdHRycyQubmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5JbnB1dFNsb3QgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLmdlbklucHV0U2xvdC5jYWxsKHRoaXMpXG5cbiAgICAgIHJlbmRlci5kYXRhIS5hdHRycyA9IHtcbiAgICAgICAgLi4ucmVuZGVyLmRhdGEhLmF0dHJzLFxuICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAnbGlzdGJveCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogU3RyaW5nKHRoaXMuaXNNZW51QWN0aXZlKSxcbiAgICAgICAgJ2FyaWEtb3ducyc6IHRoaXMuY29tcHV0ZWRPd25zLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyXG4gICAgfSxcbiAgICBnZW5MaXN0ICgpOiBWTm9kZSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIHNsb3RzLCB3ZSBjYW4gdXNlIGEgY2FjaGVkIFZOb2RlIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICAgIGlmICh0aGlzLiRzbG90c1snbm8tZGF0YSddIHx8IHRoaXMuJHNsb3RzWydwcmVwZW5kLWl0ZW0nXSB8fCB0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5MaXN0V2l0aFNsb3QoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGljTGlzdFxuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuTGlzdFdpdGhTbG90ICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBzbG90cyA9IFsncHJlcGVuZC1pdGVtJywgJ25vLWRhdGEnLCAnYXBwZW5kLWl0ZW0nXVxuICAgICAgICAuZmlsdGVyKHNsb3ROYW1lID0+IHRoaXMuJHNsb3RzW3Nsb3ROYW1lXSlcbiAgICAgICAgLm1hcChzbG90TmFtZSA9PiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHtcbiAgICAgICAgICBzbG90OiBzbG90TmFtZSxcbiAgICAgICAgfSwgdGhpcy4kc2xvdHNbc2xvdE5hbWVdKSlcbiAgICAgIC8vIFJlcXVpcmVzIGRlc3RydWN0dXJpbmcgZHVlIHRvIFZ1ZVxuICAgICAgLy8gbW9kaWZ5aW5nIHRoZSBgb25gIHByb3BlcnR5IHdoZW4gcGFzc2VkXG4gICAgICAvLyBhcyBhIHJlZmVyZW5jZWQgb2JqZWN0XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWU2VsZWN0TGlzdCwge1xuICAgICAgICAuLi50aGlzLmxpc3REYXRhLFxuICAgICAgfSwgc2xvdHMpXG4gICAgfSxcbiAgICBnZW5NZW51ICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHRoaXMuJF9tZW51UHJvcHMgYXMgYW55XG4gICAgICBwcm9wcy5hY3RpdmF0b3IgPSB0aGlzLiRyZWZzWydpbnB1dC1zbG90J11cblxuICAgICAgLy8gQXR0YWNoIHRvIHJvb3QgZWwgc28gdGhhdFxuICAgICAgLy8gbWVudSBjb3ZlcnMgcHJlcGVuZC9hcHBlbmQgaWNvbnNcbiAgICAgIGlmIChcbiAgICAgICAgLy8gVE9ETzogbWFrZSB0aGlzIGEgY29tcHV0ZWQgcHJvcGVydHkgb3IgaGVscGVyIG9yIHNvbWV0aGluZ1xuICAgICAgICB0aGlzLmF0dGFjaCA9PT0gJycgfHwgLy8gSWYgdXNlZCBhcyBhIGJvb2xlYW4gcHJvcCAoPHYtbWVudSBhdHRhY2g+KVxuICAgICAgICB0aGlzLmF0dGFjaCA9PT0gdHJ1ZSB8fCAvLyBJZiBib3VuZCB0byBhIGJvb2xlYW4gKDx2LW1lbnUgOmF0dGFjaD1cInRydWVcIj4pXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSAnYXR0YWNoJyAvLyBJZiBib3VuZCBhcyBib29sZWFuIHByb3AgaW4gcHVnICh2LW1lbnUoYXR0YWNoKSlcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5hdHRhY2ggPSB0aGlzLiRlbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMuYXR0YWNoID0gdGhpcy5hdHRhY2hcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVk1lbnUsIHtcbiAgICAgICAgYXR0cnM6IHsgcm9sZTogdW5kZWZpbmVkIH0sXG4gICAgICAgIHByb3BzLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiAodmFsOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHZhbFxuICAgICAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB2YWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcm9sbDogdGhpcy5vblNjcm9sbCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiAnbWVudScsXG4gICAgICB9LCBbdGhpcy5nZW5MaXN0KCldKVxuICAgIH0sXG4gICAgZ2VuU2VsZWN0aW9ucyAoKTogVk5vZGUge1xuICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGhcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gbmV3IEFycmF5KGxlbmd0aClcblxuICAgICAgbGV0IGdlblNlbGVjdGlvblxuICAgICAgaWYgKHRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvbikge1xuICAgICAgICBnZW5TZWxlY3Rpb24gPSB0aGlzLmdlblNsb3RTZWxlY3Rpb25cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNDaGlwcykge1xuICAgICAgICBnZW5TZWxlY3Rpb24gPSB0aGlzLmdlbkNoaXBTZWxlY3Rpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuQ29tbWFTZWxlY3Rpb25cbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGNoaWxkcmVuW2xlbmd0aF0gPSBnZW5TZWxlY3Rpb24oXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zW2xlbmd0aF0sXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zZWxlY3RfX3NlbGVjdGlvbnMnLFxuICAgICAgfSwgY2hpbGRyZW4pXG4gICAgfSxcbiAgICBnZW5TbG90U2VsZWN0aW9uIChpdGVtOiBvYmplY3QsIGluZGV4OiBudW1iZXIpOiBWTm9kZVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24hKHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBjbGFzczogJ3YtY2hpcC0tc2VsZWN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBpdGVtLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2VsZWN0OiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXhcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgIGRpc2FibGVkOiAhdGhpcy5pc0ludGVyYWN0aXZlLFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdldE1lbnVJbmRleCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy5tZW51ID8gKHRoaXMuJHJlZnMubWVudSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5saXN0SW5kZXggOiAtMVxuICAgIH0sXG4gICAgZ2V0RGlzYWJsZWQgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtRGlzYWJsZWQsIGZhbHNlKVxuICAgIH0sXG4gICAgZ2V0VGV4dCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1UZXh0LCBpdGVtKVxuICAgIH0sXG4gICAgZ2V0VmFsdWUgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtVmFsdWUsIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICAgIG9uQmx1ciAoZT86IEV2ZW50KSB7XG4gICAgICBlICYmIHRoaXMuJGVtaXQoJ2JsdXInLCBlKVxuICAgIH0sXG4gICAgb25DaGlwSW5wdXQgKGl0ZW06IG9iamVjdCkge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHRoaXMuc2VsZWN0SXRlbShpdGVtKVxuICAgICAgZWxzZSB0aGlzLnNldFZhbHVlKG51bGwpXG4gICAgICAvLyBJZiBhbGwgaXRlbXMgaGF2ZSBiZWVuIGRlbGV0ZWQsXG4gICAgICAvLyBvcGVuIGB2LW1lbnVgXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaXNJbnRlcmFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIGlmICghdGhpcy5pc0FwcGVuZElubmVyKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWVcbiAgICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpXG4gICAgfSxcbiAgICBvbkVzY0Rvd24gKGU6IEV2ZW50KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmICh0aGlzLmlzTWVudUFjdGl2ZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uS2V5UHJlc3MgKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5tdWx0aXBsZSB8fFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuZGlzYWJsZUxvb2t1cFxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgS0VZQk9BUkRfTE9PS1VQX1RIUkVTSE9MRCA9IDEwMDAgLy8gbWlsbGlzZWNvbmRzXG4gICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgaWYgKG5vdyAtIHRoaXMua2V5Ym9hcmRMb29rdXBMYXN0VGltZSA+IEtFWUJPQVJEX0xPT0tVUF9USFJFU0hPTEQpIHtcbiAgICAgICAgdGhpcy5rZXlib2FyZExvb2t1cFByZWZpeCA9ICcnXG4gICAgICB9XG4gICAgICB0aGlzLmtleWJvYXJkTG9va3VwUHJlZml4ICs9IGUua2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIHRoaXMua2V5Ym9hcmRMb29rdXBMYXN0VGltZSA9IG5vd1xuXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuYWxsSXRlbXMuZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gKHRoaXMuZ2V0VGV4dChpdGVtKSB8fCAnJykudG9TdHJpbmcoKVxuXG4gICAgICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0aGlzLmtleWJvYXJkTG9va3VwUHJlZml4KVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFsbEl0ZW1zW2luZGV4XVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmxhc3RJdGVtID0gTWF0aC5tYXgodGhpcy5sYXN0SXRlbSwgaW5kZXggKyA1KVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMucmV0dXJuT2JqZWN0ID8gaXRlbSA6IHRoaXMuZ2V0VmFsdWUoaXRlbSkpXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJHJlZnMubWVudS5nZXRUaWxlcygpKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0TWVudUluZGV4KGluZGV4KSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKHRoaXMuaXNSZWFkb25seSAmJiBlLmtleUNvZGUgIT09IGtleUNvZGVzLnRhYikgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGVcbiAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLiRyZWZzLm1lbnVcblxuICAgICAgLy8gSWYgZW50ZXIsIHNwYWNlLCBvcGVuIG1lbnVcbiAgICAgIGlmIChbXG4gICAgICAgIGtleUNvZGVzLmVudGVyLFxuICAgICAgICBrZXlDb2Rlcy5zcGFjZSxcbiAgICAgIF0uaW5jbHVkZXMoa2V5Q29kZSkpIHRoaXMuYWN0aXZhdGVNZW51KClcblxuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpXG5cbiAgICAgIGlmICghbWVudSkgcmV0dXJuXG5cbiAgICAgIC8vIElmIG1lbnUgaXMgYWN0aXZlLCBhbGxvdyBkZWZhdWx0XG4gICAgICAvLyBsaXN0SW5kZXggY2hhbmdlIGZyb20gbWVudVxuICAgICAgaWYgKHRoaXMuaXNNZW51QWN0aXZlICYmIGtleUNvZGUgIT09IGtleUNvZGVzLnRhYikge1xuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgbWVudS5jaGFuZ2VMaXN0SW5kZXgoZSlcbiAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bGlzdC1pbmRleCcsIG1lbnUubGlzdEluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBtZW51IGlzIG5vdCBhY3RpdmUsIHVwIGFuZCBkb3duIGNhbiBkb1xuICAgICAgLy8gb25lIG9mIDIgdGhpbmdzLiBJZiBtdWx0aXBsZSwgb3BlbnMgdGhlXG4gICAgICAvLyBtZW51LCBpZiBub3QsIHdpbGwgY3ljbGUgdGhyb3VnaCBhbGxcbiAgICAgIC8vIGF2YWlsYWJsZSBvcHRpb25zXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmlzTWVudUFjdGl2ZSAmJlxuICAgICAgICBba2V5Q29kZXMudXAsIGtleUNvZGVzLmRvd25dLmluY2x1ZGVzKGtleUNvZGUpXG4gICAgICApIHJldHVybiB0aGlzLm9uVXBEb3duKGUpXG5cbiAgICAgIC8vIElmIGVzY2FwZSBkZWFjdGl2YXRlIHRoZSBtZW51XG4gICAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjKSByZXR1cm4gdGhpcy5vbkVzY0Rvd24oZSlcblxuICAgICAgLy8gSWYgdGFiIC0gc2VsZWN0IGl0ZW0gb3IgY2xvc2UgbWVudVxuICAgICAgaWYgKGtleUNvZGUgPT09IGtleUNvZGVzLnRhYikgcmV0dXJuIHRoaXMub25UYWJEb3duKGUpXG5cbiAgICAgIC8vIElmIHNwYWNlIHByZXZlbnREZWZhdWx0XG4gICAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Q29kZXMuc3BhY2UpIHJldHVybiB0aGlzLm9uU3BhY2VEb3duKGUpXG4gICAgfSxcbiAgICBvbk1lbnVBY3RpdmVDaGFuZ2UgKHZhbDogYm9vbGVhbikge1xuICAgICAgLy8gSWYgbWVudSBpcyBjbG9zaW5nIGFuZCBtdWxpdHBsZVxuICAgICAgLy8gb3IgbWVudUluZGV4IGlzIGFscmVhZHkgc2V0XG4gICAgICAvLyBza2lwIG1lbnUgaW5kZXggcmVjYWxjdWxhdGlvblxuICAgICAgaWYgKFxuICAgICAgICAodGhpcy5tdWx0aXBsZSAmJiAhdmFsKSB8fFxuICAgICAgICB0aGlzLmdldE1lbnVJbmRleCgpID4gLTFcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLiRyZWZzLm1lbnVcblxuICAgICAgaWYgKCFtZW51IHx8ICF0aGlzLmlzRGlydHkpIHJldHVyblxuXG4gICAgICAvLyBXaGVuIG1lbnUgb3BlbnMsIHNldCBpbmRleCBvZiBmaXJzdCBhY3RpdmUgaXRlbVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51LnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtZW51LnRpbGVzW2ldLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0aGlzLnNldE1lbnVJbmRleChpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uTW91c2VVcCAoZTogTW91c2VFdmVudCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmhhc01vdXNlRG93biAmJlxuICAgICAgICBlLndoaWNoICE9PSAzICYmXG4gICAgICAgIHRoaXMuaXNJbnRlcmFjdGl2ZVxuICAgICAgKSB7XG4gICAgICAgIC8vIElmIGFwcGVuZCBpbm5lciBpcyBwcmVzZW50XG4gICAgICAgIC8vIGFuZCB0aGUgdGFyZ2V0IGlzIGl0c2VsZlxuICAgICAgICAvLyBvciBpbnNpZGUsIHRvZ2dsZSBtZW51XG4gICAgICAgIGlmICh0aGlzLmlzQXBwZW5kSW5uZXIoZS50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gKHRoaXMuaXNNZW51QWN0aXZlID0gIXRoaXMuaXNNZW51QWN0aXZlKSlcbiAgICAgICAgLy8gSWYgdXNlciBpcyBjbGlja2luZyBpbiB0aGUgY29udGFpbmVyXG4gICAgICAgIC8vIGFuZCBmaWVsZCBpcyBlbmNsb3NlZCwgYWN0aXZhdGUgaXRcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRW5jbG9zZWQpIHtcbiAgICAgICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlVXAuY2FsbCh0aGlzLCBlKVxuICAgIH0sXG4gICAgb25TY3JvbGwgKCkge1xuICAgICAgaWYgKCF0aGlzLmlzTWVudUFjdGl2ZSkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gKHRoaXMuZ2V0Q29udGVudCgpLnNjcm9sbFRvcCA9IDApKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdEl0ZW0gPiB0aGlzLmNvbXB1dGVkSXRlbXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgICBjb25zdCBzaG93TW9yZUl0ZW1zID0gKFxuICAgICAgICAgIHRoaXMuZ2V0Q29udGVudCgpLnNjcm9sbEhlaWdodCAtXG4gICAgICAgICAgKHRoaXMuZ2V0Q29udGVudCgpLnNjcm9sbFRvcCArXG4gICAgICAgICAgdGhpcy5nZXRDb250ZW50KCkuY2xpZW50SGVpZ2h0KVxuICAgICAgICApIDwgMjAwXG5cbiAgICAgICAgaWYgKHNob3dNb3JlSXRlbXMpIHtcbiAgICAgICAgICB0aGlzLmxhc3RJdGVtICs9IDIwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3BhY2VEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9LFxuICAgIG9uVGFiRG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUpIHJldHVyblxuXG4gICAgICBjb25zdCBhY3RpdmVUaWxlID0gbWVudS5hY3RpdmVUaWxlXG5cbiAgICAgIC8vIEFuIGl0ZW0gdGhhdCBpcyBzZWxlY3RlZCBieVxuICAgICAgLy8gbWVudS1pbmRleCBzaG91bGQgdG9nZ2xlZFxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5tdWx0aXBsZSAmJlxuICAgICAgICBhY3RpdmVUaWxlICYmXG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlXG4gICAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICBhY3RpdmVUaWxlLmNsaWNrKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHdlIG1ha2UgaXQgaGVyZSxcbiAgICAgICAgLy8gdGhlIHVzZXIgaGFzIG5vIHNlbGVjdGVkIGluZGV4ZXNcbiAgICAgICAgLy8gYW5kIGlzIHByb2JhYmx5IHRhYmJpbmcgb3V0XG4gICAgICAgIHRoaXMuYmx1cihlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25VcERvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLiRyZWZzLm1lbnVcblxuICAgICAgaWYgKCFtZW51KSByZXR1cm5cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIC8vIE11bHRpcGxlIHNlbGVjdHMgZG8gbm90IGN5Y2xlIHRoZWlyIHZhbHVlXG4gICAgICAvLyB3aGVuIHByZXNzaW5nIHVwIG9yIGRvd24sIGluc3RlYWQgYWN0aXZhdGVcbiAgICAgIC8vIHRoZSBtZW51XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkgcmV0dXJuIHRoaXMuYWN0aXZhdGVNZW51KClcblxuICAgICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZVxuXG4gICAgICAvLyBDeWNsZSB0aHJvdWdoIGF2YWlsYWJsZSB2YWx1ZXMgdG8gYWNoaWV2ZVxuICAgICAgLy8gc2VsZWN0IG5hdGl2ZSBiZWhhdmlvclxuICAgICAgbWVudS5pc0Jvb3RlZCA9IHRydWVcblxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIG1lbnUuZ2V0VGlsZXMoKVxuICAgICAgICBrZXlDb2Rlcy51cCA9PT0ga2V5Q29kZSA/IG1lbnUucHJldlRpbGUoKSA6IG1lbnUubmV4dFRpbGUoKVxuICAgICAgICBtZW51LmFjdGl2ZVRpbGUgJiYgbWVudS5hY3RpdmVUaWxlLmNsaWNrKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzZWxlY3RJdGVtIChpdGVtOiBvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMucmV0dXJuT2JqZWN0ID8gaXRlbSA6IHRoaXMuZ2V0VmFsdWUoaXRlbSkpXG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGludGVybmFsVmFsdWUgPSAodGhpcy5pbnRlcm5hbFZhbHVlIHx8IFtdKS5zbGljZSgpXG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmZpbmRFeGlzdGluZ0luZGV4KGl0ZW0pXG5cbiAgICAgICAgaSAhPT0gLTEgPyBpbnRlcm5hbFZhbHVlLnNwbGljZShpLCAxKSA6IGludGVybmFsVmFsdWUucHVzaChpdGVtKVxuICAgICAgICB0aGlzLnNldFZhbHVlKGludGVybmFsVmFsdWUubWFwKChpOiBvYmplY3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5PYmplY3QgPyBpIDogdGhpcy5nZXRWYWx1ZShpKVxuICAgICAgICB9KSlcblxuICAgICAgICAvLyBXaGVuIHNlbGVjdGluZyBtdWx0aXBsZVxuICAgICAgICAvLyBhZGp1c3QgbWVudSBhZnRlciBlYWNoXG4gICAgICAgIC8vIHNlbGVjdGlvblxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5tZW51ICYmXG4gICAgICAgICAgICAodGhpcy4kcmVmcy5tZW51IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLnVwZGF0ZURpbWVuc2lvbnMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byByZXNldCBsaXN0IGluZGV4IGZvciBtdWx0aXBsZVxuICAgICAgICAvLyB0byBrZWVwIGhpZ2hsaWdodCB3aGVuIGFuIGl0ZW0gaXMgdG9nZ2xlZFxuICAgICAgICAvLyBvbiBhbmQgb2ZmXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gdGhpcy5nZXRNZW51SW5kZXgoKVxuXG4gICAgICAgIHRoaXMuc2V0TWVudUluZGV4KC0xKVxuXG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIGl0ZW0gdG8gcmUtaGlnaGxpZ2h0XG4gICAgICAgIC8vIHdoZW4gc2VsZWN0aW9ucyBhcmUgaGlkZGVuXG4gICAgICAgIGlmICh0aGlzLmhpZGVTZWxlY3RlZCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5zZXRNZW51SW5kZXgobGlzdEluZGV4KSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldE1lbnVJbmRleCAoaW5kZXg6IG51bWJlcikge1xuICAgICAgdGhpcy4kcmVmcy5tZW51ICYmICgodGhpcy4kcmVmcy5tZW51IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmxpc3RJbmRleCA9IGluZGV4KVxuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyAoKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW11cbiAgICAgIGNvbnN0IHZhbHVlcyA9ICF0aGlzLm11bHRpcGxlIHx8ICFBcnJheS5pc0FycmF5KHRoaXMuaW50ZXJuYWxWYWx1ZSlcbiAgICAgICAgPyBbdGhpcy5pbnRlcm5hbFZhbHVlXVxuICAgICAgICA6IHRoaXMuaW50ZXJuYWxWYWx1ZVxuXG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYWxsSXRlbXMuZmluZEluZGV4KHYgPT4gdGhpcy52YWx1ZUNvbXBhcmF0b3IoXG4gICAgICAgICAgdGhpcy5nZXRWYWx1ZSh2KSxcbiAgICAgICAgICB0aGlzLmdldFZhbHVlKHZhbHVlKVxuICAgICAgICApKVxuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuYWxsSXRlbXNbaW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHNlbGVjdGVkSXRlbXNcbiAgICB9LFxuICAgIHNldFZhbHVlICh2YWx1ZTogYW55KSB7XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuaW50ZXJuYWxWYWx1ZVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsdWVcbiAgICAgIHZhbHVlICE9PSBvbGRWYWx1ZSAmJiB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSlcbiAgICB9LFxuICAgIGlzQXBwZW5kSW5uZXIgKHRhcmdldDogYW55KSB7XG4gICAgICAvLyByZXR1cm4gdHJ1ZSBpZiBhcHBlbmQgaW5uZXIgaXMgcHJlc2VudFxuICAgICAgLy8gYW5kIHRoZSB0YXJnZXQgaXMgaXRzZWxmIG9yIGluc2lkZVxuICAgICAgY29uc3QgYXBwZW5kSW5uZXIgPSB0aGlzLiRyZWZzWydhcHBlbmQtaW5uZXInXVxuXG4gICAgICByZXR1cm4gYXBwZW5kSW5uZXIgJiYgKGFwcGVuZElubmVyID09PSB0YXJnZXQgfHwgYXBwZW5kSW5uZXIuY29udGFpbnModGFyZ2V0KSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQmFkZ2Uuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcbmltcG9ydCBUb2dnbGVhYmxlIGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJ1xuaW1wb3J0IFRyYW5zaXRpb25hYmxlIGZyb20gJy4uLy4uL21peGlucy90cmFuc2l0aW9uYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgUG9zaXRpb25hYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9wb3NpdGlvbmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGdldFNsb3QsXG59IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgUG9zaXRpb25hYmxlRmFjdG9yeShbJ2xlZnQnLCAnYm90dG9tJ10pLFxuICBUaGVtZWFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIFRyYW5zaXRpb25hYmxlLFxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtYmFkZ2UnLFxuXG4gIHByb3BzOiB7XG4gICAgYXZhdGFyOiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBjb250ZW50OiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgIGRvdDogQm9vbGVhbixcbiAgICBsYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyR2dWV0aWZ5LmJhZGdlJyxcbiAgICB9LFxuICAgIGljb246IFN0cmluZyxcbiAgICBpbmxpbmU6IEJvb2xlYW4sXG4gICAgb2Zmc2V0WDogW051bWJlciwgU3RyaW5nXSxcbiAgICBvZmZzZXRZOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIG92ZXJsYXA6IEJvb2xlYW4sXG4gICAgdGlsZTogQm9vbGVhbixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc2NhbGUtcm90YXRlLXRyYW5zaXRpb24nLFxuICAgIH0sXG4gICAgdmFsdWU6IHsgZGVmYXVsdDogdHJ1ZSB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWJhZGdlLS1hdmF0YXInOiB0aGlzLmF2YXRhcixcbiAgICAgICAgJ3YtYmFkZ2UtLWJvcmRlcmVkJzogdGhpcy5ib3JkZXJlZCxcbiAgICAgICAgJ3YtYmFkZ2UtLWJvdHRvbSc6IHRoaXMuYm90dG9tLFxuICAgICAgICAndi1iYWRnZS0tZG90JzogdGhpcy5kb3QsXG4gICAgICAgICd2LWJhZGdlLS1pY29uJzogdGhpcy5pY29uICE9IG51bGwsXG4gICAgICAgICd2LWJhZGdlLS1pbmxpbmUnOiB0aGlzLmlubGluZSxcbiAgICAgICAgJ3YtYmFkZ2UtLWxlZnQnOiB0aGlzLmxlZnQsXG4gICAgICAgICd2LWJhZGdlLS1vdmVybGFwJzogdGhpcy5vdmVybGFwLFxuICAgICAgICAndi1iYWRnZS0tdGlsZSc6IHRoaXMudGlsZSxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZEJvdHRvbSAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA/ICdhdXRvJyA6IHRoaXMuY29tcHV0ZWRZT2Zmc2V0XG4gICAgfSxcbiAgICBjb21wdXRlZExlZnQgKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5pc1J0bCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0ID8gdGhpcy5jb21wdXRlZFhPZmZzZXQgOiAnYXV0bydcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMubGVmdCA/ICdhdXRvJyA6IHRoaXMuY29tcHV0ZWRYT2Zmc2V0XG4gICAgfSxcbiAgICBjb21wdXRlZFJpZ2h0ICgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMuaXNSdGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdCA/ICdhdXRvJyA6IHRoaXMuY29tcHV0ZWRYT2Zmc2V0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhdGhpcy5sZWZ0ID8gJ2F1dG8nIDogdGhpcy5jb21wdXRlZFhPZmZzZXRcbiAgICB9LFxuICAgIGNvbXB1dGVkVG9wICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID8gdGhpcy5jb21wdXRlZFlPZmZzZXQgOiAnYXV0bydcbiAgICB9LFxuICAgIGNvbXB1dGVkWE9mZnNldCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNQb3NpdGlvbih0aGlzLm9mZnNldFgpXG4gICAgfSxcbiAgICBjb21wdXRlZFlPZmZzZXQgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjUG9zaXRpb24odGhpcy5vZmZzZXRZKVxuICAgIH0sXG4gICAgaXNSdGwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkucnRsXG4gICAgfSxcbiAgICAvLyBEZWZhdWx0IGZhbGxiYWNrIGlmIG9mZnNldFhcbiAgICAvLyBvciBvZmZzZXRZIGFyZSB1bmRlZmluZWQuXG4gICAgb2Zmc2V0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMub3ZlcmxhcCkgcmV0dXJuIHRoaXMuZG90ID8gOCA6IDEyXG4gICAgICByZXR1cm4gdGhpcy5kb3QgPyAyIDogNFxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgaWYgKHRoaXMuaW5saW5lKSByZXR1cm4ge31cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm90dG9tOiB0aGlzLmNvbXB1dGVkQm90dG9tLFxuICAgICAgICBsZWZ0OiB0aGlzLmNvbXB1dGVkTGVmdCxcbiAgICAgICAgcmlnaHQ6IHRoaXMuY29tcHV0ZWRSaWdodCxcbiAgICAgICAgdG9wOiB0aGlzLmNvbXB1dGVkVG9wLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhbGNQb3NpdGlvbiAob2Zmc2V0OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAke2NvbnZlcnRUb1VuaXQob2Zmc2V0IHx8IHRoaXMub2Zmc2V0KX0pYFxuICAgIH0sXG4gICAgZ2VuQmFkZ2UgKCkge1xuICAgICAgY29uc3QgbGFuZyA9IHRoaXMuJHZ1ZXRpZnkubGFuZ1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLiRhdHRyc1snYXJpYS1sYWJlbCddIHx8IGxhbmcudCh0aGlzLmxhYmVsKVxuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtYmFkZ2VfX2JhZGdlJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWF0b21pYyc6IHRoaXMuJGF0dHJzWydhcmlhLWF0b21pYyddIHx8ICd0cnVlJyxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IGxhYmVsLFxuICAgICAgICAgICdhcmlhLWxpdmUnOiB0aGlzLiRhdHRyc1snYXJpYS1saXZlJ10gfHwgJ3BvbGl0ZScsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuJGF0dHJzLnRpdGxlLFxuICAgICAgICAgIHJvbGU6IHRoaXMuJGF0dHJzLnJvbGUgfHwgJ3N0YXR1cycsXG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICB9XSxcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGJhZGdlID0gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIGRhdGEsIFt0aGlzLmdlbkJhZGdlQ29udGVudCgpXSlcblxuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBiYWRnZVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLnRyYW5zaXRpb24sXG4gICAgICAgICAgb3JpZ2luOiB0aGlzLm9yaWdpbixcbiAgICAgICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICAgIH0sXG4gICAgICB9LCBbYmFkZ2VdKVxuICAgIH0sXG4gICAgZ2VuQmFkZ2VDb250ZW50ICgpIHtcbiAgICAgIC8vIERvdCBwcm9wIHNob3dzIG5vIGNvbnRlbnRcbiAgICAgIGlmICh0aGlzLmRvdCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICBjb25zdCBzbG90ID0gZ2V0U2xvdCh0aGlzLCAnYmFkZ2UnKVxuXG4gICAgICBpZiAoc2xvdCkgcmV0dXJuIHNsb3RcbiAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHJldHVybiBTdHJpbmcodGhpcy5jb250ZW50KVxuICAgICAgaWYgKHRoaXMuaWNvbikgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHRoaXMuaWNvbilcblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZ2VuQmFkZ2VXcmFwcGVyICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtYmFkZ2VfX3dyYXBwZXInLFxuICAgICAgfSwgW3RoaXMuZ2VuQmFkZ2UoKV0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgYmFkZ2UgPSBbdGhpcy5nZW5CYWRnZVdyYXBwZXIoKV1cbiAgICBjb25zdCBjaGlsZHJlbiA9IFtnZXRTbG90KHRoaXMpXVxuICAgIGNvbnN0IHtcbiAgICAgICdhcmlhLWF0b21pYyc6IF94LFxuICAgICAgJ2FyaWEtbGFiZWwnOiBfeSxcbiAgICAgICdhcmlhLWxpdmUnOiBfeixcbiAgICAgIHJvbGUsXG4gICAgICB0aXRsZSxcbiAgICAgIC4uLmF0dHJzXG4gICAgfSA9IHRoaXMuJGF0dHJzXG5cbiAgICBpZiAodGhpcy5pbmxpbmUgJiYgdGhpcy5sZWZ0KSBjaGlsZHJlbi51bnNoaWZ0KGJhZGdlKVxuICAgIGVsc2UgY2hpbGRyZW4ucHVzaChiYWRnZSlcblxuICAgIHJldHVybiBoKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWJhZGdlJyxcbiAgICAgIGF0dHJzLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICB9LCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vVkdyaWQuc2FzcydcblxuaW1wb3J0IFZ1ZSwgeyBQcm9wT3B0aW9ucyB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5pbXBvcnQgeyB1cHBlckZpcnN0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBubyB4c1xuY29uc3QgYnJlYWtwb2ludHMgPSBbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ11cblxuY29uc3QgQUxJR05NRU5UID0gWydzdGFydCcsICdlbmQnLCAnY2VudGVyJ11cblxuZnVuY3Rpb24gbWFrZVByb3BzIChwcmVmaXg6IHN0cmluZywgZGVmOiAoKSA9PiBQcm9wT3B0aW9ucykge1xuICByZXR1cm4gYnJlYWtwb2ludHMucmVkdWNlKChwcm9wcywgdmFsKSA9PiB7XG4gICAgcHJvcHNbcHJlZml4ICsgdXBwZXJGaXJzdCh2YWwpXSA9IGRlZigpXG4gICAgcmV0dXJuIHByb3BzXG4gIH0sIHt9IGFzIERpY3Rpb25hcnk8UHJvcE9wdGlvbnM+KVxufVxuXG5jb25zdCBhbGlnblZhbGlkYXRvciA9IChzdHI6IGFueSkgPT4gWy4uLkFMSUdOTUVOVCwgJ2Jhc2VsaW5lJywgJ3N0cmV0Y2gnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBhbGlnblByb3BzID0gbWFrZVByb3BzKCdhbGlnbicsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBhbGlnblZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBqdXN0aWZ5VmFsaWRhdG9yID0gKHN0cjogYW55KSA9PiBbLi4uQUxJR05NRU5ULCAnc3BhY2UtYmV0d2VlbicsICdzcGFjZS1hcm91bmQnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBqdXN0aWZ5UHJvcHMgPSBtYWtlUHJvcHMoJ2p1c3RpZnknLCAoKSA9PiAoe1xuICB0eXBlOiBTdHJpbmcsXG4gIGRlZmF1bHQ6IG51bGwsXG4gIHZhbGlkYXRvcjoganVzdGlmeVZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBhbGlnbkNvbnRlbnRWYWxpZGF0b3IgPSAoc3RyOiBhbnkpID0+IFsuLi5BTElHTk1FTlQsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCcsICdzdHJldGNoJ10uaW5jbHVkZXMoc3RyKVxuY29uc3QgYWxpZ25Db250ZW50UHJvcHMgPSBtYWtlUHJvcHMoJ2FsaWduQ29udGVudCcsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBhbGlnbkNvbnRlbnRWYWxpZGF0b3IsXG59KSlcblxuY29uc3QgcHJvcE1hcCA9IHtcbiAgYWxpZ246IE9iamVjdC5rZXlzKGFsaWduUHJvcHMpLFxuICBqdXN0aWZ5OiBPYmplY3Qua2V5cyhqdXN0aWZ5UHJvcHMpLFxuICBhbGlnbkNvbnRlbnQ6IE9iamVjdC5rZXlzKGFsaWduQ29udGVudFByb3BzKSxcbn1cblxuY29uc3QgY2xhc3NNYXAgPSB7XG4gIGFsaWduOiAnYWxpZ24nLFxuICBqdXN0aWZ5OiAnanVzdGlmeScsXG4gIGFsaWduQ29udGVudDogJ2FsaWduLWNvbnRlbnQnLFxufVxuXG5mdW5jdGlvbiBicmVha3BvaW50Q2xhc3MgKHR5cGU6IGtleW9mIHR5cGVvZiBwcm9wTWFwLCBwcm9wOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gIGxldCBjbGFzc05hbWUgPSBjbGFzc01hcFt0eXBlXVxuICBpZiAodmFsID09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgaWYgKHByb3ApIHtcbiAgICAvLyBhbGlnblNtIC0+IFNtXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IHByb3AucmVwbGFjZSh0eXBlLCAnJylcbiAgICBjbGFzc05hbWUgKz0gYC0ke2JyZWFrcG9pbnR9YFxuICB9XG4gIC8vIC5hbGlnbi1pdGVtcy1zbS1jZW50ZXJcbiAgY2xhc3NOYW1lICs9IGAtJHt2YWx9YFxuICByZXR1cm4gY2xhc3NOYW1lLnRvTG93ZXJDYXNlKClcbn1cblxuY29uc3QgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgYW55W10+KClcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXJvdycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIG5vR3V0dGVyczogQm9vbGVhbixcbiAgICBhbGlnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogYWxpZ25WYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5hbGlnblByb3BzLFxuICAgIGp1c3RpZnk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGp1c3RpZnlWYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5qdXN0aWZ5UHJvcHMsXG4gICAgYWxpZ25Db250ZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBhbGlnbkNvbnRlbnRWYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5hbGlnbkNvbnRlbnRQcm9wcyxcbiAgfSxcbiAgcmVuZGVyIChoLCB7IHByb3BzLCBkYXRhLCBjaGlsZHJlbiB9KSB7XG4gICAgLy8gU3VwZXItZmFzdCBtZW1vaXphdGlvbiBiYXNlZCBvbiBwcm9wcywgNXggZmFzdGVyIHRoYW4gSlNPTi5zdHJpbmdpZnlcbiAgICBsZXQgY2FjaGVLZXkgPSAnJ1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgICAgY2FjaGVLZXkgKz0gU3RyaW5nKChwcm9wcyBhcyBhbnkpW3Byb3BdKVxuICAgIH1cbiAgICBsZXQgY2xhc3NMaXN0ID0gY2FjaGUuZ2V0KGNhY2hlS2V5KVxuXG4gICAgaWYgKCFjbGFzc0xpc3QpIHtcbiAgICAgIGNsYXNzTGlzdCA9IFtdXG4gICAgICAvLyBMb29wIHRocm91Z2ggYGFsaWduYCwgYGp1c3RpZnlgLCBgYWxpZ25Db250ZW50YCBicmVha3BvaW50IHByb3BzXG4gICAgICBsZXQgdHlwZToga2V5b2YgdHlwZW9mIHByb3BNYXBcbiAgICAgIGZvciAodHlwZSBpbiBwcm9wTWFwKSB7XG4gICAgICAgIHByb3BNYXBbdHlwZV0uZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gKHByb3BzIGFzIGFueSlbcHJvcF1cbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBicmVha3BvaW50Q2xhc3ModHlwZSwgcHJvcCwgdmFsdWUpXG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkgY2xhc3NMaXN0IS5wdXNoKGNsYXNzTmFtZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY2xhc3NMaXN0LnB1c2goe1xuICAgICAgICAnbm8tZ3V0dGVycyc6IHByb3BzLm5vR3V0dGVycyxcbiAgICAgICAgJ3Jvdy0tZGVuc2UnOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgW2BhbGlnbi0ke3Byb3BzLmFsaWdufWBdOiBwcm9wcy5hbGlnbixcbiAgICAgICAgW2BqdXN0aWZ5LSR7cHJvcHMuanVzdGlmeX1gXTogcHJvcHMuanVzdGlmeSxcbiAgICAgICAgW2BhbGlnbi1jb250ZW50LSR7cHJvcHMuYWxpZ25Db250ZW50fWBdOiBwcm9wcy5hbGlnbkNvbnRlbnQsXG4gICAgICB9KVxuXG4gICAgICBjYWNoZS5zZXQoY2FjaGVLZXksIGNsYXNzTGlzdClcbiAgICB9XG5cbiAgICByZXR1cm4gaChcbiAgICAgIHByb3BzLnRhZyxcbiAgICAgIG1lcmdlRGF0YShkYXRhLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAncm93JyxcbiAgICAgICAgY2xhc3M6IGNsYXNzTGlzdCxcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuaW1wb3J0IFZCdG4gZnJvbSAnLi4vVkJ0bi9WQnRuJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtYXBwLWJhci1uYXYtaWNvbicsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICByZW5kZXIgKGgsIHsgc2xvdHMsIGxpc3RlbmVycywgcHJvcHMsIGRhdGEgfSkge1xuICAgIGNvbnN0IGQgPSBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAoYHYtYXBwLWJhcl9fbmF2LWljb24gJHtkYXRhLnN0YXRpY0NsYXNzIHx8ICcnfWApLnRyaW0oKSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBpY29uOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG9uOiBsaXN0ZW5lcnMsXG4gICAgfSlcblxuICAgIGNvbnN0IGRlZmF1bHRTbG90ID0gc2xvdHMoKS5kZWZhdWx0XG5cbiAgICByZXR1cm4gaChWQnRuLCBkLCBkZWZhdWx0U2xvdCB8fCBbaChWSWNvbiwgJyRtZW51JyldKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUZXh0YXJlYS5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIFZ1ZSB7XG4gICRyZWZzOiB7XG4gICAgaW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgfVxufVxuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zPG9wdGlvbnMgJlxuICBJbnN0YW5jZVR5cGU8dHlwZW9mIFZUZXh0RmllbGQ+XG4+KFxuICBWVGV4dEZpZWxkXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRleHRhcmVhJyxcblxuICBwcm9wczoge1xuICAgIGF1dG9Hcm93OiBCb29sZWFuLFxuICAgIG5vUmVzaXplOiBCb29sZWFuLFxuICAgIHJvd0hlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDI0LFxuICAgICAgdmFsaWRhdG9yOiAodjogYW55KSA9PiAhaXNOYU4ocGFyc2VGbG9hdCh2KSksXG4gICAgfSxcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNSxcbiAgICAgIHZhbGlkYXRvcjogKHY6IGFueSkgPT4gIWlzTmFOKHBhcnNlSW50KHYsIDEwKSksXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi10ZXh0YXJlYSc6IHRydWUsXG4gICAgICAgICd2LXRleHRhcmVhLS1hdXRvLWdyb3cnOiB0aGlzLmF1dG9Hcm93LFxuICAgICAgICAndi10ZXh0YXJlYS0tbm8tcmVzaXplJzogdGhpcy5ub1Jlc2l6ZUhhbmRsZSxcbiAgICAgICAgLi4uVlRleHRGaWVsZC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG5vUmVzaXplSGFuZGxlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm5vUmVzaXplIHx8IHRoaXMuYXV0b0dyb3dcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbGF6eVZhbHVlICgpIHtcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodClcbiAgICB9LFxuICAgIHJvd0hlaWdodCAoKSB7XG4gICAgICB0aGlzLmF1dG9Hcm93ICYmIHRoaXMuJG5leHRUaWNrKHRoaXMuY2FsY3VsYXRlSW5wdXRIZWlnaHQpXG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodCgpXG4gICAgfSwgMClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FsY3VsYXRlSW5wdXRIZWlnaHQgKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLiRyZWZzLmlucHV0XG4gICAgICBpZiAoIWlucHV0KSByZXR1cm5cblxuICAgICAgaW5wdXQuc3R5bGUuaGVpZ2h0ID0gJzAnXG4gICAgICBjb25zdCBoZWlnaHQgPSBpbnB1dC5zY3JvbGxIZWlnaHRcbiAgICAgIGNvbnN0IG1pbkhlaWdodCA9IHBhcnNlSW50KHRoaXMucm93cywgMTApICogcGFyc2VGbG9hdCh0aGlzLnJvd0hlaWdodClcbiAgICAgIC8vIFRoaXMgaGFzIHRvIGJlIGRvbmUgQVNBUCwgd2FpdGluZyBmb3IgVnVlXG4gICAgICAvLyB0byB1cGRhdGUgdGhlIERPTSBjYXVzZXMgdWdseSBsYXlvdXQganVtcGluZ1xuICAgICAgaW5wdXQuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBoZWlnaHQpICsgJ3B4J1xuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dC5jYWxsKHRoaXMpXG5cbiAgICAgIGlucHV0LnRhZyA9ICd0ZXh0YXJlYSdcbiAgICAgIGRlbGV0ZSBpbnB1dC5kYXRhIS5hdHRycyEudHlwZVxuICAgICAgaW5wdXQuZGF0YSEuYXR0cnMhLnJvd3MgPSB0aGlzLnJvd3NcblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBvbklucHV0IChlOiBFdmVudCkge1xuICAgICAgVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMub25JbnB1dC5jYWxsKHRoaXMsIGUpXG4gICAgICB0aGlzLmF1dG9Hcm93ICYmIHRoaXMuY2FsY3VsYXRlSW5wdXRIZWlnaHQoKVxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50cyBjbG9zaW5nIG9mIGFcbiAgICAgIC8vIGRpYWxvZyB3aGVuIHByZXNzaW5nXG4gICAgICAvLyBlbnRlclxuICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBHcm91cGFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL2dyb3VwYWJsZSdcbmltcG9ydCBSb3V0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91dGFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tICcuLy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi8uLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBSb3V0YWJsZSxcbiAgLy8gTXVzdCBiZSBhZnRlciByb3V0YWJsZVxuICAvLyB0byBvdmVyd3JpdGUgYWN0aXZlQ2xhc3NcbiAgR3JvdXBhYmxlRmFjdG9yeSgndGFic0JhcicpLFxuICBUaGVtZWFibGVcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBFeHRyYWN0VnVlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRlbDogSFRNTEVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoXG4gIC8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYicsXG5cbiAgcHJvcHM6IHtcbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgcHJveHlDbGFzczogJ3YtdGFiLS1hY3RpdmUnLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi10YWInOiB0cnVlLFxuICAgICAgICAuLi5Sb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGFiLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIC4uLnRoaXMuZ3JvdXBDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWUgKCk6IGFueSB7XG4gICAgICBsZXQgdG8gPSB0aGlzLnRvIHx8IHRoaXMuaHJlZiB8fCAnJ1xuXG4gICAgICBpZiAodGhpcy4kcm91dGVyICYmXG4gICAgICAgIHRoaXMudG8gPT09IE9iamVjdCh0aGlzLnRvKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHJlc29sdmUgPSB0aGlzLiRyb3V0ZXIucmVzb2x2ZShcbiAgICAgICAgICB0aGlzLnRvLFxuICAgICAgICAgIHRoaXMuJHJvdXRlLFxuICAgICAgICAgIHRoaXMuYXBwZW5kXG4gICAgICAgIClcblxuICAgICAgICB0byA9IHJlc29sdmUuaHJlZlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG8ucmVwbGFjZSgnIycsICcnKVxuICAgIH0sXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5vblJvdXRlQ2hhbmdlKClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2sgKGU6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAvLyBJZiB1c2VyIHByb3ZpZGVzIGFuXG4gICAgICAvLyBhY3R1YWwgbGluaywgZG8gbm90XG4gICAgICAvLyBwcmV2ZW50IGRlZmF1bHRcbiAgICAgIGlmICh0aGlzLmhyZWYgJiZcbiAgICAgICAgdGhpcy5ocmVmLmluZGV4T2YoJyMnKSA+IC0xXG4gICAgICApIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBpZiAoZS5kZXRhaWwpIHRoaXMuJGVsLmJsdXIoKVxuXG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpXG5cbiAgICAgIHRoaXMudG8gfHwgdGhpcy50b2dnbGUoKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHsgdGFnLCBkYXRhIH0gPSB0aGlzLmdlbmVyYXRlUm91dGVMaW5rKClcblxuICAgIGRhdGEuYXR0cnMgPSB7XG4gICAgICAuLi5kYXRhLmF0dHJzLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBTdHJpbmcodGhpcy5pc0FjdGl2ZSksXG4gICAgICByb2xlOiAndGFiJyxcbiAgICAgIHRhYmluZGV4OiAwLFxuICAgIH1cbiAgICBkYXRhLm9uID0ge1xuICAgICAgLi4uZGF0YS5vbixcbiAgICAgIGtleWRvd246IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyKSB0aGlzLmNsaWNrKGUpXG5cbiAgICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpXG4gICAgICB9LFxuICAgIH1cblxuICAgIHJldHVybiBoKHRhZywgZGF0YSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WU2xpZGVHcm91cC5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5pbXBvcnQgeyBWRmFkZVRyYW5zaXRpb24gfSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IHsgQmFzZUl0ZW1Hcm91cCB9IGZyb20gJy4uL1ZJdGVtR3JvdXAvVkl0ZW1Hcm91cCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgTW9iaWxlIGZyb20gJy4uLy4uL21peGlucy9tb2JpbGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBSZXNpemUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUnXG5pbXBvcnQgVG91Y2ggZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zLCB7IEV4dHJhY3RWdWUgfSBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUsIHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmludGVyZmFjZSBUb3VjaEV2ZW50IHtcbiAgdG91Y2hzdGFydFg6IG51bWJlclxuICB0b3VjaG1vdmVYOiBudW1iZXJcbiAgc3RvcFByb3BhZ2F0aW9uOiBGdW5jdGlvblxufVxuXG5pbnRlcmZhY2UgV2lkdGhzIHtcbiAgY29udGVudDogbnVtYmVyXG4gIHdyYXBwZXI6IG51bWJlclxufVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIFZ1ZSB7XG4gICRyZWZzOiB7XG4gICAgY29udGVudDogSFRNTEVsZW1lbnRcbiAgICB3cmFwcGVyOiBIVE1MRWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBCYXNlU2xpZGVHcm91cCA9IG1peGluczxvcHRpb25zICZcbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuICBFeHRyYWN0VnVlPFtcbiAgICB0eXBlb2YgQmFzZUl0ZW1Hcm91cCxcbiAgICB0eXBlb2YgTW9iaWxlLFxuICBdPlxuLyogZXNsaW50LWVuYWJsZSBpbmRlbnQgKi9cbj4oXG4gIEJhc2VJdGVtR3JvdXAsXG4gIE1vYmlsZSxcbiAgLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ2Jhc2Utc2xpZGUtZ3JvdXAnLFxuXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBSZXNpemUsXG4gICAgVG91Y2gsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3Ytc2xpZGUtaXRlbS0tYWN0aXZlJyxcbiAgICB9LFxuICAgIGNlbnRlckFjdGl2ZTogQm9vbGVhbixcbiAgICBuZXh0SWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRuZXh0JyxcbiAgICB9LFxuICAgIHByZXZJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHByZXYnLFxuICAgIH0sXG4gICAgc2hvd0Fycm93czoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gKFxuICAgICAgICB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nIHx8IFtcbiAgICAgICAgICAnYWx3YXlzJyxcbiAgICAgICAgICAnZGVza3RvcCcsXG4gICAgICAgICAgJ21vYmlsZScsXG4gICAgICAgIF0uaW5jbHVkZXModilcbiAgICAgICksXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGludGVybmFsSXRlbXNMZW5ndGg6IDAsXG4gICAgaXNPdmVyZmxvd2luZzogZmFsc2UsXG4gICAgcmVzaXplVGltZW91dDogMCxcbiAgICBzdGFydFg6IDAsXG4gICAgc2Nyb2xsT2Zmc2V0OiAwLFxuICAgIHdpZHRoczoge1xuICAgICAgY29udGVudDogMCxcbiAgICAgIHdyYXBwZXI6IDAsXG4gICAgfSxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBfX2NhY2hlZE5leHQgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLmdlblRyYW5zaXRpb24oJ25leHQnKVxuICAgIH0sXG4gICAgX19jYWNoZWRQcmV2ICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5UcmFuc2l0aW9uKCdwcmV2JylcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5CYXNlSXRlbUdyb3VwLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1zbGlkZS1ncm91cCc6IHRydWUsXG4gICAgICAgICd2LXNsaWRlLWdyb3VwLS1oYXMtYWZmaXhlcyc6IHRoaXMuaGFzQWZmaXhlcyxcbiAgICAgICAgJ3Ytc2xpZGUtZ3JvdXAtLWlzLW92ZXJmbG93aW5nJzogdGhpcy5pc092ZXJmbG93aW5nLFxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzQWZmaXhlcyAoKTogQm9vbGVhbiB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc2hvd0Fycm93cykge1xuICAgICAgICAvLyBBbHdheXMgc2hvdyBhcnJvd3Mgb24gZGVza3RvcCAmIG1vYmlsZVxuICAgICAgICBjYXNlICdhbHdheXMnOiByZXR1cm4gdHJ1ZVxuXG4gICAgICAgIC8vIEFsd2F5cyBzaG93IGFycm93cyBvbiBkZXNrdG9wXG4gICAgICAgIGNhc2UgJ2Rlc2t0b3AnOiByZXR1cm4gIXRoaXMuaXNNb2JpbGVcblxuICAgICAgICAvLyBTaG93IGFycm93cyBvbiBtb2JpbGUgd2hlbiBvdmVyZmxvd2luZy5cbiAgICAgICAgLy8gVGhpcyBtYXRjaGVzIHRoZSBkZWZhdWx0IDIuMiBiZWhhdmlvclxuICAgICAgICBjYXNlIHRydWU6IHJldHVybiB0aGlzLmlzT3ZlcmZsb3dpbmdcblxuICAgICAgICAvLyBBbHdheXMgc2hvdyBvbiBtb2JpbGVcbiAgICAgICAgY2FzZSAnbW9iaWxlJzogcmV0dXJuIChcbiAgICAgICAgICB0aGlzLmlzTW9iaWxlIHx8XG4gICAgICAgICAgdGhpcy5pc092ZXJmbG93aW5nXG4gICAgICAgIClcblxuICAgICAgICAvLyBodHRwczovL21hdGVyaWFsLmlvL2NvbXBvbmVudHMvdGFicyNzY3JvbGxhYmxlLXRhYnNcbiAgICAgICAgLy8gQWx3YXlzIHNob3cgYXJyb3dzIHdoZW5cbiAgICAgICAgLy8gb3ZlcmZsb3dlZCBvbiBkZXNrdG9wXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAoXG4gICAgICAgICAgIXRoaXMuaXNNb2JpbGUgJiZcbiAgICAgICAgICB0aGlzLmlzT3ZlcmZsb3dpbmdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzTmV4dCAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAoIXRoaXMuaGFzQWZmaXhlcykgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGNvbnN0IHsgY29udGVudCwgd3JhcHBlciB9ID0gdGhpcy53aWR0aHNcblxuICAgICAgLy8gQ2hlY2sgb25lIHNjcm9sbCBhaGVhZCB0byBrbm93IHRoZSB3aWR0aCBvZiByaWdodC1tb3N0IGl0ZW1cbiAgICAgIHJldHVybiBjb250ZW50ID4gTWF0aC5hYnModGhpcy5zY3JvbGxPZmZzZXQpICsgd3JhcHBlclxuICAgIH0sXG4gICAgaGFzUHJldiAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNBZmZpeGVzICYmIHRoaXMuc2Nyb2xsT2Zmc2V0ICE9PSAwXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGludGVybmFsVmFsdWU6ICdzZXRXaWR0aHMnLFxuICAgIC8vIFdoZW4gb3ZlcmZsb3cgY2hhbmdlcywgdGhlIGFycm93cyBhbHRlclxuICAgIC8vIHRoZSB3aWR0aHMgb2YgdGhlIGNvbnRlbnQgYW5kIHdyYXBwZXJcbiAgICAvLyBhbmQgbmVlZCB0byBiZSByZWNhbGN1bGF0ZWRcbiAgICBpc092ZXJmbG93aW5nOiAnc2V0V2lkdGhzJyxcbiAgICBzY3JvbGxPZmZzZXQgKHZhbCkge1xuICAgICAgdGhpcy4kcmVmcy5jb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LXZhbH1weClgXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVVcGRhdGUgKCkge1xuICAgIHRoaXMuaW50ZXJuYWxJdGVtc0xlbmd0aCA9ICh0aGlzLiRjaGlsZHJlbiB8fCBbXSkubGVuZ3RoXG4gIH0sXG5cbiAgdXBkYXRlZCAoKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJuYWxJdGVtc0xlbmd0aCA9PT0gKHRoaXMuJGNoaWxkcmVuIHx8IFtdKS5sZW5ndGgpIHJldHVyblxuICAgIHRoaXMuc2V0V2lkdGhzKClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLy8gQWx3YXlzIGdlbmVyYXRlIG5leHQgZm9yIHNjcm9sbGFibGUgaGludFxuICAgIGdlbk5leHQgKCk6IFZOb2RlIHwgbnVsbCB7XG4gICAgICBjb25zdCBzbG90ID0gdGhpcy4kc2NvcGVkU2xvdHMubmV4dFxuICAgICAgICA/IHRoaXMuJHNjb3BlZFNsb3RzLm5leHQoe30pXG4gICAgICAgIDogdGhpcy4kc2xvdHMubmV4dCB8fCB0aGlzLl9fY2FjaGVkTmV4dFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc2xpZGUtZ3JvdXBfX25leHQnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICd2LXNsaWRlLWdyb3VwX19uZXh0LS1kaXNhYmxlZCc6ICF0aGlzLmhhc05leHQsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMub25BZmZpeENsaWNrKCduZXh0JyksXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogJ25leHQnLFxuICAgICAgfSwgW3Nsb3RdKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNsaWRlLWdyb3VwX19jb250ZW50JyxcbiAgICAgICAgcmVmOiAnY29udGVudCcsXG4gICAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICAgIH0sXG4gICAgZ2VuRGF0YSAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3Jlc2l6ZScsXG4gICAgICAgICAgdmFsdWU6IHRoaXMub25SZXNpemUsXG4gICAgICAgIH1dLFxuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuSWNvbiAobG9jYXRpb246ICdwcmV2JyB8ICduZXh0Jyk6IFZOb2RlIHwgbnVsbCB7XG4gICAgICBsZXQgaWNvbiA9IGxvY2F0aW9uXG5cbiAgICAgIGlmICh0aGlzLiR2dWV0aWZ5LnJ0bCAmJiBsb2NhdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIGljb24gPSAnbmV4dCdcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4kdnVldGlmeS5ydGwgJiYgbG9jYXRpb24gPT09ICduZXh0Jykge1xuICAgICAgICBpY29uID0gJ3ByZXYnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwcGVyTG9jYXRpb24gPSBgJHtsb2NhdGlvblswXS50b1VwcGVyQ2FzZSgpfSR7bG9jYXRpb24uc2xpY2UoMSl9YFxuICAgICAgY29uc3QgaGFzQWZmaXggPSAodGhpcyBhcyBhbnkpW2BoYXMke3VwcGVyTG9jYXRpb259YF1cblxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5zaG93QXJyb3dzICYmXG4gICAgICAgICFoYXNBZmZpeFxuICAgICAgKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGRpc2FibGVkOiAhaGFzQWZmaXgsXG4gICAgICAgIH0sXG4gICAgICB9LCAodGhpcyBhcyBhbnkpW2Ake2ljb259SWNvbmBdKVxuICAgIH0sXG4gICAgLy8gQWx3YXlzIGdlbmVyYXRlIHByZXYgZm9yIHNjcm9sbGFibGUgaGludFxuICAgIGdlblByZXYgKCk6IFZOb2RlIHwgbnVsbCB7XG4gICAgICBjb25zdCBzbG90ID0gdGhpcy4kc2NvcGVkU2xvdHMucHJldlxuICAgICAgICA/IHRoaXMuJHNjb3BlZFNsb3RzLnByZXYoe30pXG4gICAgICAgIDogdGhpcy4kc2xvdHMucHJldiB8fCB0aGlzLl9fY2FjaGVkUHJldlxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc2xpZGUtZ3JvdXBfX3ByZXYnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICd2LXNsaWRlLWdyb3VwX19wcmV2LS1kaXNhYmxlZCc6ICF0aGlzLmhhc1ByZXYsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMub25BZmZpeENsaWNrKCdwcmV2JyksXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogJ3ByZXYnLFxuICAgICAgfSwgW3Nsb3RdKVxuICAgIH0sXG4gICAgZ2VuVHJhbnNpdGlvbiAobG9jYXRpb246ICdwcmV2JyB8ICduZXh0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkZhZGVUcmFuc2l0aW9uLCBbdGhpcy5nZW5JY29uKGxvY2F0aW9uKV0pXG4gICAgfSxcbiAgICBnZW5XcmFwcGVyICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc2xpZGUtZ3JvdXBfX3dyYXBwZXInLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICd0b3VjaCcsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHN0YXJ0OiAoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5vdmVyZmxvd0NoZWNrKGUsIHRoaXMub25Ub3VjaFN0YXJ0KSxcbiAgICAgICAgICAgIG1vdmU6IChlOiBUb3VjaEV2ZW50KSA9PiB0aGlzLm92ZXJmbG93Q2hlY2soZSwgdGhpcy5vblRvdWNoTW92ZSksXG4gICAgICAgICAgICBlbmQ6IChlOiBUb3VjaEV2ZW50KSA9PiB0aGlzLm92ZXJmbG93Q2hlY2soZSwgdGhpcy5vblRvdWNoRW5kKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XSxcbiAgICAgICAgcmVmOiAnd3JhcHBlcicsXG4gICAgICB9LCBbdGhpcy5nZW5Db250ZW50KCldKVxuICAgIH0sXG4gICAgY2FsY3VsYXRlTmV3T2Zmc2V0IChkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0Jywgd2lkdGhzOiBXaWR0aHMsIHJ0bDogYm9vbGVhbiwgY3VycmVudFNjcm9sbE9mZnNldDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBzaWduID0gcnRsID8gLTEgOiAxXG4gICAgICBjb25zdCBuZXdBYm9zbHV0ZU9mZnNldCA9IHNpZ24gKiBjdXJyZW50U2Nyb2xsT2Zmc2V0ICtcbiAgICAgICAgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnID8gLTEgOiAxKSAqIHdpZHRocy53cmFwcGVyXG5cbiAgICAgIHJldHVybiBzaWduICogTWF0aC5tYXgoTWF0aC5taW4obmV3QWJvc2x1dGVPZmZzZXQsIHdpZHRocy5jb250ZW50IC0gd2lkdGhzLndyYXBwZXIpLCAwKVxuICAgIH0sXG4gICAgb25BZmZpeENsaWNrIChsb2NhdGlvbjogJ3ByZXYnIHwgJ25leHQnKSB7XG4gICAgICB0aGlzLiRlbWl0KGBjbGljazoke2xvY2F0aW9ufWApXG4gICAgICB0aGlzLnNjcm9sbFRvKGxvY2F0aW9uKVxuICAgIH0sXG4gICAgb25SZXNpemUgKCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc2V0V2lkdGhzKClcbiAgICB9LFxuICAgIG9uVG91Y2hTdGFydCAoZTogVG91Y2hFdmVudCkge1xuICAgICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLiRyZWZzXG5cbiAgICAgIHRoaXMuc3RhcnRYID0gdGhpcy5zY3JvbGxPZmZzZXQgKyBlLnRvdWNoc3RhcnRYIGFzIG51bWJlclxuXG4gICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2l0aW9uJywgJ25vbmUnKVxuICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lsbENoYW5nZScsICd0cmFuc2Zvcm0nKVxuICAgIH0sXG4gICAgb25Ub3VjaE1vdmUgKGU6IFRvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gdGhpcy5zdGFydFggLSBlLnRvdWNobW92ZVhcbiAgICB9LFxuICAgIG9uVG91Y2hFbmQgKCkge1xuICAgICAgY29uc3QgeyBjb250ZW50LCB3cmFwcGVyIH0gPSB0aGlzLiRyZWZzXG4gICAgICBjb25zdCBtYXhTY3JvbGxPZmZzZXQgPSBjb250ZW50LmNsaWVudFdpZHRoIC0gd3JhcHBlci5jbGllbnRXaWR0aFxuXG4gICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2l0aW9uJywgbnVsbClcbiAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpbGxDaGFuZ2UnLCBudWxsKVxuXG4gICAgICBpZiAodGhpcy4kdnVldGlmeS5ydGwpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsT2Zmc2V0ID4gMCB8fCAhdGhpcy5pc092ZXJmbG93aW5nKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSAwXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGxPZmZzZXQgPD0gLW1heFNjcm9sbE9mZnNldCkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gLW1heFNjcm9sbE9mZnNldFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxPZmZzZXQgPCAwIHx8ICF0aGlzLmlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IDBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbE9mZnNldCA+PSBtYXhTY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IG1heFNjcm9sbE9mZnNldFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvdmVyZmxvd0NoZWNrIChlOiBUb3VjaEV2ZW50LCBmbjogKGU6IFRvdWNoRXZlbnQpID0+IHZvaWQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMuaXNPdmVyZmxvd2luZyAmJiBmbihlKVxuICAgIH0sXG4gICAgc2Nyb2xsSW50b1ZpZXcgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCkge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPT09IDAgfHxcbiAgICAgICAgKCF0aGlzLmNlbnRlckFjdGl2ZSAmJiAhdGhpcy5pc092ZXJmbG93aW5nKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gMFxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNlbnRlckFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHRoaXMuY2FsY3VsYXRlQ2VudGVyZWRPZmZzZXQoXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uJGVsIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgIHRoaXMud2lkdGhzLFxuICAgICAgICAgIHRoaXMuJHZ1ZXRpZnkucnRsXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc092ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gdGhpcy5jYWxjdWxhdGVVcGRhdGVkT2Zmc2V0KFxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLiRlbCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICB0aGlzLndpZHRocyxcbiAgICAgICAgICB0aGlzLiR2dWV0aWZ5LnJ0bCxcbiAgICAgICAgICB0aGlzLnNjcm9sbE9mZnNldFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBjYWxjdWxhdGVVcGRhdGVkT2Zmc2V0IChzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB3aWR0aHM6IFdpZHRocywgcnRsOiBib29sZWFuLCBjdXJyZW50U2Nyb2xsT2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgY29uc3QgY2xpZW50V2lkdGggPSBzZWxlY3RlZEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBydGxcbiAgICAgICAgPyAod2lkdGhzLmNvbnRlbnQgLSBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0TGVmdCAtIGNsaWVudFdpZHRoKVxuICAgICAgICA6IHNlbGVjdGVkRWxlbWVudC5vZmZzZXRMZWZ0XG5cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgY3VycmVudFNjcm9sbE9mZnNldCA9IC1jdXJyZW50U2Nyb2xsT2Zmc2V0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSB3aWR0aHMud3JhcHBlciArIGN1cnJlbnRTY3JvbGxPZmZzZXRcbiAgICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSBjbGllbnRXaWR0aCArIG9mZnNldExlZnRcbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxPZmZzZXQgPSBjbGllbnRXaWR0aCAqIDAuNFxuXG4gICAgICBpZiAob2Zmc2V0TGVmdCA8PSBjdXJyZW50U2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgIGN1cnJlbnRTY3JvbGxPZmZzZXQgPSBNYXRoLm1heChvZmZzZXRMZWZ0IC0gYWRkaXRpb25hbE9mZnNldCwgMClcbiAgICAgIH0gZWxzZSBpZiAodG90YWxXaWR0aCA8PSBpdGVtT2Zmc2V0KSB7XG4gICAgICAgIGN1cnJlbnRTY3JvbGxPZmZzZXQgPSBNYXRoLm1pbihjdXJyZW50U2Nyb2xsT2Zmc2V0IC0gKHRvdGFsV2lkdGggLSBpdGVtT2Zmc2V0IC0gYWRkaXRpb25hbE9mZnNldCksIHdpZHRocy5jb250ZW50IC0gd2lkdGhzLndyYXBwZXIpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydGwgPyAtY3VycmVudFNjcm9sbE9mZnNldCA6IGN1cnJlbnRTY3JvbGxPZmZzZXRcbiAgICB9LFxuICAgIGNhbGN1bGF0ZUNlbnRlcmVkT2Zmc2V0IChzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB3aWR0aHM6IFdpZHRocywgcnRsOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0TGVmdCwgY2xpZW50V2lkdGggfSA9IHNlbGVjdGVkRWxlbWVudFxuXG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldENlbnRlcmVkID0gd2lkdGhzLmNvbnRlbnQgLSBvZmZzZXRMZWZ0IC0gY2xpZW50V2lkdGggLyAyIC0gd2lkdGhzLndyYXBwZXIgLyAyXG4gICAgICAgIHJldHVybiAtTWF0aC5taW4od2lkdGhzLmNvbnRlbnQgLSB3aWR0aHMud3JhcHBlciwgTWF0aC5tYXgoMCwgb2Zmc2V0Q2VudGVyZWQpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0Q2VudGVyZWQgPSBvZmZzZXRMZWZ0ICsgY2xpZW50V2lkdGggLyAyIC0gd2lkdGhzLndyYXBwZXIgLyAyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbih3aWR0aHMuY29udGVudCAtIHdpZHRocy53cmFwcGVyLCBNYXRoLm1heCgwLCBvZmZzZXRDZW50ZXJlZCkpXG4gICAgICB9XG4gICAgfSxcbiAgICBzY3JvbGxUbyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAobG9jYXRpb246ICdwcmV2JyB8ICduZXh0Jykge1xuICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB0aGlzLmNhbGN1bGF0ZU5ld09mZnNldChsb2NhdGlvbiwge1xuICAgICAgICAvLyBGb3JjZSByZWZsb3dcbiAgICAgICAgY29udGVudDogdGhpcy4kcmVmcy5jb250ZW50ID8gdGhpcy4kcmVmcy5jb250ZW50LmNsaWVudFdpZHRoIDogMCxcbiAgICAgICAgd3JhcHBlcjogdGhpcy4kcmVmcy53cmFwcGVyID8gdGhpcy4kcmVmcy53cmFwcGVyLmNsaWVudFdpZHRoIDogMCxcbiAgICAgIH0sIHRoaXMuJHZ1ZXRpZnkucnRsLCB0aGlzLnNjcm9sbE9mZnNldClcbiAgICB9LFxuICAgIHNldFdpZHRocyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAgKCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29udGVudCwgd3JhcHBlciB9ID0gdGhpcy4kcmVmc1xuXG4gICAgICAgIHRoaXMud2lkdGhzID0ge1xuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQgPyBjb250ZW50LmNsaWVudFdpZHRoIDogMCxcbiAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyID8gd3JhcHBlci5jbGllbnRXaWR0aCA6IDAsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3ZlcmZsb3dpbmcgPSB0aGlzLndpZHRocy53cmFwcGVyIDwgdGhpcy53aWR0aHMuY29udGVudFxuXG4gICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgfSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5nZW5EYXRhKCksIFtcbiAgICAgIHRoaXMuZ2VuUHJldigpLFxuICAgICAgdGhpcy5nZW5XcmFwcGVyKCksXG4gICAgICB0aGlzLmdlbk5leHQoKSxcbiAgICBdKVxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgQmFzZVNsaWRlR3JvdXAuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2xpZGUtZ3JvdXAnLFxuXG4gIHByb3ZpZGUgKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNsaWRlR3JvdXA6IHRoaXMsXG4gICAgfVxuICB9LFxufSlcbiIsIi8vIEV4dGVuc2lvbnNcbmltcG9ydCB7IEJhc2VTbGlkZUdyb3VwIH0gZnJvbSAnLi4vVlNsaWRlR3JvdXAvVlNsaWRlR3JvdXAnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWVGFiIGZyb20gJy4vVlRhYidcblxuLy8gTWl4aW5zXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgU1NSQm9vdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Nzci1ib290YWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbnR5cGUgVlRhYkluc3RhbmNlID0gSW5zdGFuY2VUeXBlPHR5cGVvZiBWVGFiPlxuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIEJhc2VTbGlkZUdyb3VwLFxuICBTU1JCb290YWJsZSxcbiAgVGhlbWVhYmxlXG4gIC8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYnMtYmFyJyxcblxuICBwcm92aWRlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFic0JhcjogdGhpcyxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLkJhc2VTbGlkZUdyb3VwLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10YWJzLWJhcic6IHRydWUsXG4gICAgICAgICd2LXRhYnMtYmFyLS1pcy1tb2JpbGUnOiB0aGlzLmlzTW9iaWxlLFxuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBhbmQgbW92ZSB0byB2LXNsaWRlLWdyb3VwXG4gICAgICAgICd2LXRhYnMtYmFyLS1zaG93LWFycm93cyc6IHRoaXMuc2hvd0Fycm93cyxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGl0ZW1zOiAnY2FsbFNsaWRlcicsXG4gICAgaW50ZXJuYWxWYWx1ZTogJ2NhbGxTbGlkZXInLFxuICAgICRyb3V0ZTogJ29uUm91dGVDaGFuZ2UnLFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxsU2xpZGVyICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0Jvb3RlZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NhbGw6c2xpZGVyJylcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgY29uc3QgcmVuZGVyID0gQmFzZVNsaWRlR3JvdXAub3B0aW9ucy5tZXRob2RzLmdlbkNvbnRlbnQuY2FsbCh0aGlzKVxuXG4gICAgICByZW5kZXIuZGF0YSA9IHJlbmRlci5kYXRhIHx8IHt9XG4gICAgICByZW5kZXIuZGF0YS5zdGF0aWNDbGFzcyArPSAnIHYtdGFicy1iYXJfX2NvbnRlbnQnXG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIG9uUm91dGVDaGFuZ2UgKHZhbDogUm91dGUsIG9sZFZhbDogUm91dGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAodGhpcy5tYW5kYXRvcnkpIHJldHVyblxuXG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMgYXMgdW5rbm93biBhcyBWVGFiSW5zdGFuY2VbXVxuICAgICAgY29uc3QgbmV3UGF0aCA9IHZhbC5wYXRoXG4gICAgICBjb25zdCBvbGRQYXRoID0gb2xkVmFsLnBhdGhcblxuICAgICAgbGV0IGhhc05ldyA9IGZhbHNlXG4gICAgICBsZXQgaGFzT2xkID0gZmFsc2VcblxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChpdGVtLnRvID09PSBuZXdQYXRoKSBoYXNOZXcgPSB0cnVlXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0udG8gPT09IG9sZFBhdGgpIGhhc09sZCA9IHRydWVcblxuICAgICAgICBpZiAoaGFzTmV3ICYmIGhhc09sZCkgYnJlYWtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBvbGQgaXRlbSBhbmQgbm90IGEgbmV3IG9uZVxuICAgICAgLy8gaXQncyBhc3N1bWVkIHRoYXQgdGhlIHVzZXIgbmF2aWdhdGVkIHRvXG4gICAgICAvLyBhIHBhdGggdGhhdCBpcyBub3QgcHJlc2VudCBpbiB0aGUgaXRlbXNcbiAgICAgIGlmICghaGFzTmV3ICYmIGhhc09sZCkgdGhpcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgcmVuZGVyID0gQmFzZVNsaWRlR3JvdXAub3B0aW9ucy5yZW5kZXIuY2FsbCh0aGlzLCBoKVxuXG4gICAgcmVuZGVyLmRhdGEhLmF0dHJzID0ge1xuICAgICAgcm9sZTogJ3RhYmxpc3QnLFxuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJcbiAgfSxcbn0pXG4iLCIvLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUvdHlwZXMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi10YWJzLXNsaWRlcicsXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtdGFicy1zbGlkZXInLFxuICAgIH0pKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUYWJzLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWVGFic0JhciBmcm9tICcuL1ZUYWJzQmFyJ1xuaW1wb3J0IFZUYWJzSXRlbXMgZnJvbSAnLi9WVGFic0l0ZW1zJ1xuaW1wb3J0IFZUYWJzU2xpZGVyIGZyb20gJy4vVlRhYnNTbGlkZXInXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFByb3h5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcHJveHlhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgUmVzaXplIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi8uLi8uLi91dGlsL21peGlucydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBQcm94eWFibGUsXG4gIFRoZW1lYWJsZVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBpdGVtczogSW5zdGFuY2VUeXBlPHR5cGVvZiBWVGFic0Jhcj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYnMnLFxuXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBSZXNpemUsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBhbGlnbldpdGhUaXRsZTogQm9vbGVhbixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFN0cmluZyxcbiAgICBjZW50ZXJBY3RpdmU6IEJvb2xlYW4sXG4gICAgY2VudGVyZWQ6IEJvb2xlYW4sXG4gICAgZml4ZWRUYWJzOiBCb29sZWFuLFxuICAgIGdyb3c6IEJvb2xlYW4sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgaGlkZVNsaWRlcjogQm9vbGVhbixcbiAgICBpY29uc0FuZFRleHQ6IEJvb2xlYW4sXG4gICAgbW9iaWxlQnJlYWtwb2ludDogW1N0cmluZywgTnVtYmVyXSxcbiAgICBuZXh0SWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRuZXh0JyxcbiAgICB9LFxuICAgIG9wdGlvbmFsOiBCb29sZWFuLFxuICAgIHByZXZJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHByZXYnLFxuICAgIH0sXG4gICAgcmlnaHQ6IEJvb2xlYW4sXG4gICAgc2hvd0Fycm93czogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgc2xpZGVyQ29sb3I6IFN0cmluZyxcbiAgICBzbGlkZXJTaXplOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMixcbiAgICB9LFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXNpemVUaW1lb3V0OiAwLFxuICAgICAgc2xpZGVyOiB7XG4gICAgICAgIGhlaWdodDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuICAgICAgICBsZWZ0OiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICAgIHJpZ2h0OiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICAgIHRvcDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuICAgICAgICB3aWR0aDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25UaW1lOiAzMDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXRhYnMtLWFsaWduLXdpdGgtdGl0bGUnOiB0aGlzLmFsaWduV2l0aFRpdGxlLFxuICAgICAgICAndi10YWJzLS1jZW50ZXJlZCc6IHRoaXMuY2VudGVyZWQsXG4gICAgICAgICd2LXRhYnMtLWZpeGVkLXRhYnMnOiB0aGlzLmZpeGVkVGFicyxcbiAgICAgICAgJ3YtdGFicy0tZ3Jvdyc6IHRoaXMuZ3JvdyxcbiAgICAgICAgJ3YtdGFicy0taWNvbnMtYW5kLXRleHQnOiB0aGlzLmljb25zQW5kVGV4dCxcbiAgICAgICAgJ3YtdGFicy0tcmlnaHQnOiB0aGlzLnJpZ2h0LFxuICAgICAgICAndi10YWJzLS12ZXJ0aWNhbCc6IHRoaXMudmVydGljYWwsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNSZXZlcnNlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5ydGwgJiYgdGhpcy52ZXJ0aWNhbFxuICAgIH0sXG4gICAgc2xpZGVyU3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuc2xpZGVyLmhlaWdodCksXG4gICAgICAgIGxlZnQ6IHRoaXMuaXNSZXZlcnNlZCA/IHVuZGVmaW5lZCA6IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIubGVmdCksXG4gICAgICAgIHJpZ2h0OiB0aGlzLmlzUmV2ZXJzZWQgPyBjb252ZXJ0VG9Vbml0KHRoaXMuc2xpZGVyLnJpZ2h0KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgdG9wOiB0aGlzLnZlcnRpY2FsID8gY29udmVydFRvVW5pdCh0aGlzLnNsaWRlci50b3ApIDogdW5kZWZpbmVkLFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLnNsaWRlci5sZWZ0ICE9IG51bGwgPyBudWxsIDogJ25vbmUnLFxuICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCh0aGlzLnNsaWRlci53aWR0aCksXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMuY29sb3IpIHJldHVybiB0aGlzLmNvbG9yXG4gICAgICBlbHNlIGlmICh0aGlzLmlzRGFyayAmJiAhdGhpcy5hcHBJc0RhcmspIHJldHVybiAnd2hpdGUnXG4gICAgICBlbHNlIHJldHVybiAncHJpbWFyeSdcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgYWxpZ25XaXRoVGl0bGU6ICdjYWxsU2xpZGVyJyxcbiAgICBjZW50ZXJlZDogJ2NhbGxTbGlkZXInLFxuICAgIGNlbnRlckFjdGl2ZTogJ2NhbGxTbGlkZXInLFxuICAgIGZpeGVkVGFiczogJ2NhbGxTbGlkZXInLFxuICAgIGdyb3c6ICdjYWxsU2xpZGVyJyxcbiAgICByaWdodDogJ2NhbGxTbGlkZXInLFxuICAgIHNob3dBcnJvd3M6ICdjYWxsU2xpZGVyJyxcbiAgICB2ZXJ0aWNhbDogJ2NhbGxTbGlkZXInLFxuICAgICckdnVldGlmeS5hcHBsaWNhdGlvbi5sZWZ0JzogJ29uUmVzaXplJyxcbiAgICAnJHZ1ZXRpZnkuYXBwbGljYXRpb24ucmlnaHQnOiAnb25SZXNpemUnLFxuICAgICckdnVldGlmeS5ydGwnOiAnb25SZXNpemUnLFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuY2FsbFNsaWRlciwgMzApXG4gICAgfSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FsbFNsaWRlciAoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGlkZVNsaWRlciB8fFxuICAgICAgICAhdGhpcy4kcmVmcy5pdGVtcyB8fFxuICAgICAgICAhdGhpcy4kcmVmcy5pdGVtcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyLndpZHRoID0gMFxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAvLyBHaXZlIHNjcmVlbiB0aW1lIHRvIHBhaW50XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IHRoaXMuJHJlZnMuaXRlbXMuc2VsZWN0ZWRJdGVtc1swXVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCFhY3RpdmVUYWIgfHwgIWFjdGl2ZVRhYi4kZWwpIHtcbiAgICAgICAgICB0aGlzLnNsaWRlci53aWR0aCA9IDBcbiAgICAgICAgICB0aGlzLnNsaWRlci5sZWZ0ID0gMFxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsID0gYWN0aXZlVGFiLiRlbCBhcyBIVE1MRWxlbWVudFxuXG4gICAgICAgIHRoaXMuc2xpZGVyID0ge1xuICAgICAgICAgIGhlaWdodDogIXRoaXMudmVydGljYWwgPyBOdW1iZXIodGhpcy5zbGlkZXJTaXplKSA6IGVsLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICBsZWZ0OiB0aGlzLnZlcnRpY2FsID8gMCA6IGVsLm9mZnNldExlZnQsXG4gICAgICAgICAgcmlnaHQ6IHRoaXMudmVydGljYWwgPyAwIDogZWwub2Zmc2V0TGVmdCArIGVsLm9mZnNldFdpZHRoLFxuICAgICAgICAgIHRvcDogZWwub2Zmc2V0VG9wLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnZlcnRpY2FsID8gTnVtYmVyKHRoaXMuc2xpZGVyU2l6ZSkgOiBlbC5zY3JvbGxXaWR0aCxcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIGdlbkJhciAoaXRlbXM6IFZOb2RlW10sIHNsaWRlcjogVk5vZGUgfCBudWxsKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IHRoaXMuYWN0aXZlQ2xhc3MsXG4gICAgICAgICAgY2VudGVyQWN0aXZlOiB0aGlzLmNlbnRlckFjdGl2ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgbWFuZGF0b3J5OiAhdGhpcy5vcHRpb25hbCxcbiAgICAgICAgICBtb2JpbGVCcmVha3BvaW50OiB0aGlzLm1vYmlsZUJyZWFrcG9pbnQsXG4gICAgICAgICAgbmV4dEljb246IHRoaXMubmV4dEljb24sXG4gICAgICAgICAgcHJldkljb246IHRoaXMucHJldkljb24sXG4gICAgICAgICAgc2hvd0Fycm93czogdGhpcy5zaG93QXJyb3dzLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmludGVybmFsVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgJ2NhbGw6c2xpZGVyJzogdGhpcy5jYWxsU2xpZGVyLFxuICAgICAgICAgIGNoYW5nZTogKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICByZWY6ICdpdGVtcycsXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29tcHV0ZWRDb2xvciwgZGF0YSlcbiAgICAgIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yLCBkYXRhKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWVGFic0JhciwgZGF0YSwgW1xuICAgICAgICB0aGlzLmdlblNsaWRlcihzbGlkZXIpLFxuICAgICAgICBpdGVtcyxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5JdGVtcyAoaXRlbXM6IFZOb2RlIHwgbnVsbCwgaXRlbTogVk5vZGVbXSkge1xuICAgICAgLy8gSWYgdXNlciBwcm92aWRlcyBpdGVtc1xuICAgICAgLy8gb3B0IHRvIHVzZSB0aGVpcnNcbiAgICAgIGlmIChpdGVtcykgcmV0dXJuIGl0ZW1zXG5cbiAgICAgIC8vIElmIG5vIHRhYnMgYXJlIHByb3ZpZGVkXG4gICAgICAvLyByZW5kZXIgbm90aGluZ1xuICAgICAgaWYgKCFpdGVtLmxlbmd0aCkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRhYnNJdGVtcywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmludGVybmFsVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2hhbmdlOiAodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHZhbFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LCBpdGVtKVxuICAgIH0sXG4gICAgZ2VuU2xpZGVyIChzbGlkZXI6IFZOb2RlIHwgbnVsbCkge1xuICAgICAgaWYgKHRoaXMuaGlkZVNsaWRlcikgcmV0dXJuIG51bGxcblxuICAgICAgaWYgKCFzbGlkZXIpIHtcbiAgICAgICAgc2xpZGVyID0gdGhpcy4kY3JlYXRlRWxlbWVudChWVGFic1NsaWRlciwge1xuICAgICAgICAgIHByb3BzOiB7IGNvbG9yOiB0aGlzLnNsaWRlckNvbG9yIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10YWJzLXNsaWRlci13cmFwcGVyJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuc2xpZGVyU3R5bGVzLFxuICAgICAgfSwgW3NsaWRlcl0pXG4gICAgfSxcbiAgICBvblJlc2l6ZSAoKSB7XG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVyblxuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KVxuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5jYWxsU2xpZGVyLCAwKVxuICAgIH0sXG4gICAgcGFyc2VOb2RlcyAoKSB7XG4gICAgICBsZXQgaXRlbXMgPSBudWxsXG4gICAgICBsZXQgc2xpZGVyID0gbnVsbFxuICAgICAgY29uc3QgaXRlbSA9IFtdXG4gICAgICBjb25zdCB0YWIgPSBbXVxuICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNsb3QubGVuZ3RoXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgdm5vZGUgPSBzbG90W2ldXG5cbiAgICAgICAgaWYgKHZub2RlLmNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgICAgICBzd2l0Y2ggKHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3Rvci5vcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3YtdGFicy1zbGlkZXInOiBzbGlkZXIgPSB2bm9kZVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAndi10YWJzLWl0ZW1zJzogaXRlbXMgPSB2bm9kZVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAndi10YWItaXRlbSc6IGl0ZW0ucHVzaCh2bm9kZSlcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIC8vIGNhc2UgJ3YtdGFiJyAtIGludGVudGlvbmFsbHkgb21pdHRlZFxuICAgICAgICAgICAgZGVmYXVsdDogdGFiLnB1c2godm5vZGUpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhYi5wdXNoKHZub2RlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogdGFiOiBhcnJheSBvZiBgdi10YWJgXG4gICAgICAgKiBzbGlkZXI6IHNpbmdsZSBgdi10YWJzLXNsaWRlcmBcbiAgICAgICAqIGl0ZW1zOiBzaW5nbGUgYHYtdGFicy1pdGVtc2BcbiAgICAgICAqIGl0ZW06IGFycmF5IG9mIGB2LXRhYi1pdGVtYFxuICAgICAgICovXG4gICAgICByZXR1cm4geyB0YWIsIHNsaWRlciwgaXRlbXMsIGl0ZW0gfVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHsgdGFiLCBzbGlkZXIsIGl0ZW1zLCBpdGVtIH0gPSB0aGlzLnBhcnNlTm9kZXMoKVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi10YWJzJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiAncmVzaXplJyxcbiAgICAgICAgbW9kaWZpZXJzOiB7IHF1aWV0OiB0cnVlIH0sXG4gICAgICAgIHZhbHVlOiB0aGlzLm9uUmVzaXplLFxuICAgICAgfV0sXG4gICAgfSwgW1xuICAgICAgdGhpcy5nZW5CYXIodGFiLCBzbGlkZXIpLFxuICAgICAgdGhpcy5nZW5JdGVtcyhpdGVtcywgaXRlbSksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVldpbmRvdyBmcm9tICcuL1ZXaW5kb3cnXG5cbi8vIE1peGluc1xuaW1wb3J0IEJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9ib290YWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgR3JvdXBhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9ncm91cGFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBUb3VjaCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zLCB7IEV4dHJhY3RWdWUgfSBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBCb290YWJsZSxcbiAgR3JvdXBhYmxlRmFjdG9yeSgnd2luZG93R3JvdXAnLCAndi13aW5kb3ctaXRlbScsICd2LXdpbmRvdycpXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkZWw6IEhUTUxFbGVtZW50XG4gIHdpbmRvd0dyb3VwOiBJbnN0YW5jZVR5cGU8dHlwZW9mIFZXaW5kb3c+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKFxuICAvKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi13aW5kb3ctaXRlbScsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIFRvdWNoLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgcmV2ZXJzZVRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgIGluVHJhbnNpdGlvbjogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB0aGlzLmdyb3VwQ2xhc3Nlc1xuICAgIH0sXG4gICAgY29tcHV0ZWRUcmFuc2l0aW9uICgpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy53aW5kb3dHcm91cC5pbnRlcm5hbFJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnRyYW5zaXRpb24gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgPyB0aGlzLnRyYW5zaXRpb24gfHwgJydcbiAgICAgICAgICA6IHRoaXMud2luZG93R3JvdXAuY29tcHV0ZWRUcmFuc2l0aW9uXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZXZlcnNlVHJhbnNpdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLnJldmVyc2VUcmFuc2l0aW9uIHx8ICcnXG4gICAgICAgIDogdGhpcy53aW5kb3dHcm91cC5jb21wdXRlZFRyYW5zaXRpb25cbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5EZWZhdWx0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgIH0sXG4gICAgZ2VuV2luZG93SXRlbSAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytd2luZG93LWl0ZW0nLFxuICAgICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfV0sXG4gICAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgICB9LCB0aGlzLmdlbkRlZmF1bHRTbG90KCkpXG4gICAgfSxcbiAgICBvbkFmdGVyVHJhbnNpdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5UcmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBGaW5hbGl6ZSB0cmFuc2l0aW9uIHN0YXRlLlxuICAgICAgdGhpcy5pblRyYW5zaXRpb24gPSBmYWxzZVxuICAgICAgaWYgKHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkNvdW50ID4gMCkge1xuICAgICAgICB0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25Db3VudC0tXG5cbiAgICAgICAgLy8gUmVtb3ZlIGNvbnRhaW5lciBoZWlnaHQgaWYgd2UgYXJlIG91dCBvZiB0cmFuc2l0aW9uLlxuICAgICAgICBpZiAodGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQgPT09IDApIHtcbiAgICAgICAgICB0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25IZWlnaHQgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25CZWZvcmVUcmFuc2l0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmluVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSW5pdGlhbGl6ZSB0cmFuc2l0aW9uIHN0YXRlIGhlcmUuXG4gICAgICB0aGlzLmluVHJhbnNpdGlvbiA9IHRydWVcbiAgICAgIGlmICh0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25Db3VudCA9PT0gMCkge1xuICAgICAgICAvLyBTZXQgaW5pdGlhbCBoZWlnaHQgZm9yIGhlaWdodCB0cmFuc2l0aW9uLlxuICAgICAgICB0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25IZWlnaHQgPSBjb252ZXJ0VG9Vbml0KHRoaXMud2luZG93R3JvdXAuJGVsLmNsaWVudEhlaWdodClcbiAgICAgIH1cbiAgICAgIHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkNvdW50KytcbiAgICB9LFxuICAgIG9uVHJhbnNpdGlvbkNhbmNlbGxlZCAoKSB7XG4gICAgICB0aGlzLm9uQWZ0ZXJUcmFuc2l0aW9uKCkgLy8gVGhpcyBzaG91bGQgaGF2ZSB0aGUgc2FtZSBwYXRoIGFzIG5vcm1hbCB0cmFuc2l0aW9uIGVuZC5cbiAgICB9LFxuICAgIG9uRW50ZXIgKGVsOiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKCF0aGlzLmluVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAvLyBEbyBub3Qgc2V0IGhlaWdodCBpZiBubyB0cmFuc2l0aW9uIG9yIGNhbmNlbGxlZC5cbiAgICAgICAgaWYgKCF0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbiB8fCAhdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0cmFuc2l0aW9uIHRhcmdldCBoZWlnaHQuXG4gICAgICAgIHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkhlaWdodCA9IGNvbnZlcnRUb1VuaXQoZWwuY2xpZW50SGVpZ2h0KVxuICAgICAgfSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgndHJhbnNpdGlvbicsIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG5hbWU6IHRoaXMuY29tcHV0ZWRUcmFuc2l0aW9uLFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIC8vIEhhbmRsZXJzIGZvciBlbnRlciB3aW5kb3dzLlxuICAgICAgICBiZWZvcmVFbnRlcjogdGhpcy5vbkJlZm9yZVRyYW5zaXRpb24sXG4gICAgICAgIGFmdGVyRW50ZXI6IHRoaXMub25BZnRlclRyYW5zaXRpb24sXG4gICAgICAgIGVudGVyQ2FuY2VsbGVkOiB0aGlzLm9uVHJhbnNpdGlvbkNhbmNlbGxlZCxcblxuICAgICAgICAvLyBIYW5kbGVycyBmb3IgbGVhdmUgd2luZG93cy5cbiAgICAgICAgYmVmb3JlTGVhdmU6IHRoaXMub25CZWZvcmVUcmFuc2l0aW9uLFxuICAgICAgICBhZnRlckxlYXZlOiB0aGlzLm9uQWZ0ZXJUcmFuc2l0aW9uLFxuICAgICAgICBsZWF2ZUNhbmNlbGxlZDogdGhpcy5vblRyYW5zaXRpb25DYW5jZWxsZWQsXG5cbiAgICAgICAgLy8gRW50ZXIgaGFuZGxlciBmb3IgaGVpZ2h0IHRyYW5zaXRpb24uXG4gICAgICAgIGVudGVyOiB0aGlzLm9uRW50ZXIsXG4gICAgICB9LFxuICAgIH0sIHRoaXMuc2hvd0xhenlDb250ZW50KCgpID0+IFt0aGlzLmdlbldpbmRvd0l0ZW0oKV0pKVxuICB9LFxufSlcbiIsIi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWV2luZG93SXRlbSBmcm9tICcuLi9WV2luZG93L1ZXaW5kb3dJdGVtJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVldpbmRvd0l0ZW0uZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFiLWl0ZW0nLFxuXG4gIHByb3BzOiB7XG4gICAgaWQ6IFN0cmluZyxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuV2luZG93SXRlbSAoKSB7XG4gICAgICBjb25zdCBpdGVtID0gVldpbmRvd0l0ZW0ub3B0aW9ucy5tZXRob2RzLmdlbldpbmRvd0l0ZW0uY2FsbCh0aGlzKVxuXG4gICAgICBpdGVtLmRhdGEhLmRvbVByb3BzID0gaXRlbS5kYXRhIS5kb21Qcm9wcyB8fCB7fVxuICAgICAgaXRlbS5kYXRhIS5kb21Qcm9wcy5pZCA9IHRoaXMuaWQgfHwgdGhpcy52YWx1ZVxuXG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZTbmFja2Jhci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldC9WU2hlZXQnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgZGVwcmVjYXRlLCByZW1vdmVkIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUHJvcFR5cGUsIFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIFZTaGVldCxcbiAgQ29sb3JhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFtcbiAgICAnYWJzb2x1dGUnLFxuICAgICdib3R0b20nLFxuICAgICdsZWZ0JyxcbiAgICAncmlnaHQnLFxuICAgICd0b3AnLFxuICBdKVxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc25hY2tiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwOiBCb29sZWFuLFxuICAgIGNlbnRlcmVkOiBCb29sZWFuLFxuICAgIGNvbnRlbnRDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBtdWx0aUxpbmU6IEJvb2xlYW4sXG4gICAgdGV4dDogQm9vbGVhbixcbiAgICB0aW1lb3V0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNTAwMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddIGFzIFByb3BUeXBlPGZhbHNlIHwgc3RyaW5nPixcbiAgICAgIGRlZmF1bHQ6ICd2LXNuYWNrLXRyYW5zaXRpb24nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVvZiB2ID09PSAnc3RyaW5nJyB8fCB2ID09PSBmYWxzZSxcbiAgICB9LFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYWN0aXZlVGltZW91dDogLTEsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXNuYWNrLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXNuYWNrLS1hY3RpdmUnOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICAndi1zbmFjay0tYm90dG9tJzogdGhpcy5ib3R0b20gfHwgIXRoaXMudG9wLFxuICAgICAgICAndi1zbmFjay0tY2VudGVyZWQnOiB0aGlzLmNlbnRlcmVkLFxuICAgICAgICAndi1zbmFjay0taGFzLWJhY2tncm91bmQnOiB0aGlzLmhhc0JhY2tncm91bmQsXG4gICAgICAgICd2LXNuYWNrLS1sZWZ0JzogdGhpcy5sZWZ0LFxuICAgICAgICAndi1zbmFjay0tbXVsdGktbGluZSc6IHRoaXMubXVsdGlMaW5lICYmICF0aGlzLnZlcnRpY2FsLFxuICAgICAgICAndi1zbmFjay0tcmlnaHQnOiB0aGlzLnJpZ2h0LFxuICAgICAgICAndi1zbmFjay0tdGV4dCc6IHRoaXMudGV4dCxcbiAgICAgICAgJ3Ytc25hY2stLXRvcCc6IHRoaXMudG9wLFxuICAgICAgICAndi1zbmFjay0tdmVydGljYWwnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gVGV4dCBhbmQgb3V0bGluZWQgc3R5bGVzIGJvdGhcbiAgICAvLyB1c2UgdHJhbnNwYXJlbnQgYmFja2dyb3VuZHNcbiAgICBoYXNCYWNrZ3JvdW5kICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLnRleHQgJiZcbiAgICAgICAgIXRoaXMub3V0bGluZWRcbiAgICAgIClcbiAgICB9LFxuICAgIC8vIFNuYWNrYmFyIGlzIGRhcmsgYnkgZGVmYXVsdFxuICAgIC8vIG92ZXJyaWRlIHRoZW1lYWJsZSBsb2dpYy5cbiAgICBpc0RhcmsgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQmFja2dyb3VuZFxuICAgICAgICA/ICF0aGlzLmxpZ2h0XG4gICAgICAgIDogVGhlbWVhYmxlLm9wdGlvbnMuY29tcHV0ZWQuaXNEYXJrLmNhbGwodGhpcylcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIC8vIFN0eWxlcyBhcmUgbm90IG5lZWRlZCB3aGVuXG4gICAgICAvLyB1c2luZyB0aGUgYWJzb2x1dGUgcHJvcC5cbiAgICAgIGlmICh0aGlzLmFic29sdXRlKSByZXR1cm4ge31cblxuICAgICAgY29uc3Qge1xuICAgICAgICBiYXIsXG4gICAgICAgIGJvdHRvbSxcbiAgICAgICAgZm9vdGVyLFxuICAgICAgICBpbnNldEZvb3RlcixcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIHRvcCxcbiAgICAgIH0gPSB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uXG5cbiAgICAgIC8vIFNob3VsZCBhbHdheXMgbW92ZSBmb3IgeS1heGlzXG4gICAgICAvLyBhcHBsaWNhdGlvbmFibGUgY29tcG9uZW50cy5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IGNvbnZlcnRUb1VuaXQoYm90dG9tICsgZm9vdGVyICsgaW5zZXRGb290ZXIpLFxuICAgICAgICBwYWRkaW5nTGVmdDogIXRoaXMuYXBwID8gdW5kZWZpbmVkIDogY29udmVydFRvVW5pdChsZWZ0KSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAhdGhpcy5hcHAgPyB1bmRlZmluZWQgOiBjb252ZXJ0VG9Vbml0KHJpZ2h0KSxcbiAgICAgICAgcGFkZGluZ1RvcDogY29udmVydFRvVW5pdChiYXIgKyB0b3ApLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZTogJ3NldFRpbWVvdXQnLFxuICAgIHRpbWVvdXQ6ICdzZXRUaW1lb3V0JyxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkgdGhpcy5zZXRUaW1lb3V0KClcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnYXV0by1oZWlnaHQnKSkge1xuICAgICAgcmVtb3ZlZCgnYXV0by1oZWlnaHQnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIGlmICh0aGlzLnRpbWVvdXQgPT0gMCkge1xuICAgICAgZGVwcmVjYXRlKCd0aW1lb3V0PVwiMFwiJywgJy0xJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkFjdGlvbnMgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNuYWNrX19hY3Rpb24gJyxcbiAgICAgIH0sIFtcbiAgICAgICAgZ2V0U2xvdCh0aGlzLCAnYWN0aW9uJywge1xuICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiAndi1zbmFja19fYnRuJyB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbmFja19fY29udGVudCcsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgW3RoaXMuY29udGVudENsYXNzXTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiAnc3RhdHVzJyxcbiAgICAgICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LCBbZ2V0U2xvdCh0aGlzKV0pXG4gICAgfSxcbiAgICBnZW5XcmFwcGVyICgpIHtcbiAgICAgIGNvbnN0IHNldENvbG9yID0gdGhpcy5oYXNCYWNrZ3JvdW5kXG4gICAgICAgID8gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgOiB0aGlzLnNldFRleHRDb2xvclxuXG4gICAgICBjb25zdCBkYXRhID0gc2V0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc25hY2tfX3dyYXBwZXInLFxuICAgICAgICBjbGFzczogVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfV0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0YSwgW1xuICAgICAgICB0aGlzLmdlbkNvbnRlbnQoKSxcbiAgICAgICAgdGhpcy5nZW5BY3Rpb25zKCksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuVHJhbnNpdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHsgbmFtZTogdGhpcy50cmFuc2l0aW9uIH0sXG4gICAgICB9LCBbdGhpcy5nZW5XcmFwcGVyKCldKVxuICAgIH0sXG4gICAgc2V0VGltZW91dCAoKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZlVGltZW91dClcblxuICAgICAgY29uc3QgdGltZW91dCA9IE51bWJlcih0aGlzLnRpbWVvdXQpXG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNBY3RpdmUgfHxcbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIDAgaW4gdjNcbiAgICAgICAgWzAsIC0xXS5pbmNsdWRlcyh0aW1lb3V0KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgfSwgdGltZW91dClcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXNuYWNrJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgfSwgW1xuICAgICAgdGhpcy50cmFuc2l0aW9uICE9PSBmYWxzZVxuICAgICAgICA/IHRoaXMuZ2VuVHJhbnNpdGlvbigpXG4gICAgICAgIDogdGhpcy5nZW5XcmFwcGVyKCksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZFeHBhbnNpb25QYW5lbHMgZnJvbSAnLi9WRXhwYW5zaW9uUGFuZWxzJ1xuaW1wb3J0IFZFeHBhbnNpb25QYW5lbEhlYWRlciBmcm9tICcuL1ZFeHBhbnNpb25QYW5lbEhlYWRlcidcbmltcG9ydCBWRXhwYW5zaW9uUGFuZWxDb250ZW50IGZyb20gJy4vVkV4cGFuc2lvblBhbmVsQ29udGVudCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgeyBmYWN0b3J5IGFzIEdyb3VwYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvZ3JvdXBhYmxlJ1xuaW1wb3J0IHsgcHJvdmlkZSBhcyBSZWdpc3RyYWJsZVByb3ZpZGUgfSBmcm9tICcuLi8uLi9taXhpbnMvcmVnaXN0cmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxudHlwZSBWRXhwYW5zaW9uUGFuZWxIZWFkZXJJbnN0YW5jZSA9IEluc3RhbmNlVHlwZTx0eXBlb2YgVkV4cGFuc2lvblBhbmVsSGVhZGVyPlxudHlwZSBWRXhwYW5zaW9uUGFuZWxDb250ZW50SW5zdGFuY2UgPSBJbnN0YW5jZVR5cGU8dHlwZW9mIFZFeHBhbnNpb25QYW5lbENvbnRlbnQ+XG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgR3JvdXBhYmxlRmFjdG9yeTwnZXhwYW5zaW9uUGFuZWxzJywgdHlwZW9mIFZFeHBhbnNpb25QYW5lbHM+KCdleHBhbnNpb25QYW5lbHMnLCAndi1leHBhbnNpb24tcGFuZWwnLCAndi1leHBhbnNpb24tcGFuZWxzJyksXG4gIFJlZ2lzdHJhYmxlUHJvdmlkZSgnZXhwYW5zaW9uUGFuZWwnLCB0cnVlKVxuICAvKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi1leHBhbnNpb24tcGFuZWwnLFxuXG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IG51bGwgYXMgVkV4cGFuc2lvblBhbmVsQ29udGVudEluc3RhbmNlIHwgbnVsbCxcbiAgICAgIGhlYWRlcjogbnVsbCBhcyBWRXhwYW5zaW9uUGFuZWxIZWFkZXJJbnN0YW5jZSB8IG51bGwsXG4gICAgICBuZXh0SXNBY3RpdmU6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1leHBhbnNpb24tcGFuZWwtLWFjdGl2ZSc6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICd2LWV4cGFuc2lvbi1wYW5lbC0tbmV4dC1hY3RpdmUnOiB0aGlzLm5leHRJc0FjdGl2ZSxcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVsLS1kaXNhYmxlZCc6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgLi4udGhpcy5ncm91cENsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0Rpc2FibGVkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuc2lvblBhbmVscy5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVkXG4gICAgfSxcbiAgICBpc1JlYWRvbmx5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuc2lvblBhbmVscy5yZWFkb25seSB8fCB0aGlzLnJlYWRvbmx5XG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgcmVnaXN0ZXJDb250ZW50ICh2bTogVkV4cGFuc2lvblBhbmVsQ29udGVudEluc3RhbmNlKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB2bVxuICAgIH0sXG4gICAgdW5yZWdpc3RlckNvbnRlbnQgKCkge1xuICAgICAgdGhpcy5jb250ZW50ID0gbnVsbFxuICAgIH0sXG4gICAgcmVnaXN0ZXJIZWFkZXIgKHZtOiBWRXhwYW5zaW9uUGFuZWxIZWFkZXJJbnN0YW5jZSkge1xuICAgICAgdGhpcy5oZWFkZXIgPSB2bVxuICAgICAgdm0uJG9uKCdjbGljaycsIHRoaXMub25DbGljaylcbiAgICB9LFxuICAgIHVucmVnaXN0ZXJIZWFkZXIgKCkge1xuICAgICAgdGhpcy5oZWFkZXIgPSBudWxsXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoZS5kZXRhaWwpIHRoaXMuaGVhZGVyIS4kZWwuYmx1cigpXG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcblxuICAgICAgdGhpcy5pc1JlYWRvbmx5IHx8IHRoaXMuaXNEaXNhYmxlZCB8fCB0aGlzLnRvZ2dsZSgpXG4gICAgfSxcbiAgICB0b2dnbGUgKCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHRoaXMuY29udGVudC5pc0Jvb3RlZCA9IHRydWVcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJGVtaXQoJ2NoYW5nZScpKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtZXhwYW5zaW9uLXBhbmVsJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBhdHRyczoge1xuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IFN0cmluZyh0aGlzLmlzQWN0aXZlKSxcbiAgICAgIH0sXG4gICAgfSwgZ2V0U2xvdCh0aGlzKSlcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVkV4cGFuc2lvblBhbmVsIGZyb20gJy4vVkV4cGFuc2lvblBhbmVsJ1xuaW1wb3J0IHsgVkV4cGFuZFRyYW5zaXRpb24gfSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQm9vdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2Jvb3RhYmxlJ1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IHsgaW5qZWN0IGFzIFJlZ2lzdHJhYmxlSW5qZWN0IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3JlZ2lzdHJhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zLCB7IEV4dHJhY3RWdWUgfSBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUsIHsgVk5vZGUsIFZ1ZUNvbnN0cnVjdG9yIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBCb290YWJsZSxcbiAgQ29sb3JhYmxlLFxuICBSZWdpc3RyYWJsZUluamVjdDwnZXhwYW5zaW9uUGFuZWwnLCBWdWVDb25zdHJ1Y3RvcjxWdWU+PignZXhwYW5zaW9uUGFuZWwnLCAndi1leHBhbnNpb24tcGFuZWwtY29udGVudCcsICd2LWV4cGFuc2lvbi1wYW5lbCcpXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICBleHBhbnNpb25QYW5lbDogSW5zdGFuY2VUeXBlPHR5cGVvZiBWRXhwYW5zaW9uUGFuZWw+XG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50JyxcblxuICBjb21wdXRlZDoge1xuICAgIGlzQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuc2lvblBhbmVsLmlzQWN0aXZlXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVsLnJlZ2lzdGVyQ29udGVudCh0aGlzKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWwudW5yZWdpc3RlckNvbnRlbnQoKVxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaChWRXhwYW5kVHJhbnNpdGlvbiwgdGhpcy5zaG93TGF6eUNvbnRlbnQoKCkgPT4gW1xuICAgICAgaCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQnLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfV0sXG4gICAgICB9KSwgW1xuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAndi1leHBhbnNpb24tcGFuZWwtY29udGVudF9fd3JhcCcgfSwgZ2V0U2xvdCh0aGlzKSksXG4gICAgICBdKSxcbiAgICBdKSlcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgeyBWRmFkZVRyYW5zaXRpb24gfSBmcm9tICcuLi90cmFuc2l0aW9ucydcbmltcG9ydCBWRXhwYW5zaW9uUGFuZWwgZnJvbSAnLi9WRXhwYW5zaW9uUGFuZWwnXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IHsgaW5qZWN0IGFzIFJlZ2lzdHJhYmxlSW5qZWN0IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3JlZ2lzdHJhYmxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgcmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zLCB7IEV4dHJhY3RWdWUgfSBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUsIHsgVk5vZGUsIFZ1ZUNvbnN0cnVjdG9yIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFJlZ2lzdHJhYmxlSW5qZWN0PCdleHBhbnNpb25QYW5lbCcsIFZ1ZUNvbnN0cnVjdG9yPFZ1ZT4+KCdleHBhbnNpb25QYW5lbCcsICd2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLCAndi1leHBhbnNpb24tcGFuZWwnKVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJGVsOiBIVE1MRWxlbWVudFxuICBleHBhbnNpb25QYW5lbDogSW5zdGFuY2VUeXBlPHR5cGVvZiBWRXhwYW5zaW9uUGFuZWw+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcicsXG5cbiAgZGlyZWN0aXZlczogeyByaXBwbGUgfSxcblxuICBwcm9wczoge1xuICAgIGRpc2FibGVJY29uUm90YXRlOiBCb29sZWFuLFxuICAgIGV4cGFuZEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZXhwYW5kJyxcbiAgICB9LFxuICAgIGhpZGVBY3Rpb25zOiBCb29sZWFuLFxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgaGFzTW91c2Vkb3duOiBmYWxzZSxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci0tYWN0aXZlJzogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci0tbW91c2Vkb3duJzogdGhpcy5oYXNNb3VzZWRvd24sXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0FjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbnNpb25QYW5lbC5pc0FjdGl2ZVxuICAgIH0sXG4gICAgaXNEaXNhYmxlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbnNpb25QYW5lbC5pc0Rpc2FibGVkXG4gICAgfSxcbiAgICBpc1JlYWRvbmx5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuc2lvblBhbmVsLmlzUmVhZG9ubHlcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWwucmVnaXN0ZXJIZWFkZXIodGhpcylcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVsLnVucmVnaXN0ZXJIZWFkZXIoKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpXG4gICAgfSxcbiAgICBnZW5JY29uICgpIHtcbiAgICAgIGNvbnN0IGljb24gPSBnZXRTbG90KHRoaXMsICdhY3Rpb25zJykgfHxcbiAgICAgICAgW3RoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHRoaXMuZXhwYW5kSWNvbildXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZGYWRlVHJhbnNpdGlvbiwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJfX2ljb24nLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAndi1leHBhbnNpb24tcGFuZWwtaGVhZGVyX19pY29uLS1kaXNhYmxlLXJvdGF0ZSc6IHRoaXMuZGlzYWJsZUljb25Sb3RhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICAgICAgdmFsdWU6ICF0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgfV0sXG4gICAgICAgIH0sIGljb24pLFxuICAgICAgXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnYnV0dG9uJywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHRhYmluZGV4OiB0aGlzLmlzRGlzYWJsZWQgPyAtMSA6IG51bGwsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgfSxcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6ICdyaXBwbGUnLFxuICAgICAgICB2YWx1ZTogdGhpcy5yaXBwbGUsXG4gICAgICB9XSxcbiAgICAgIG9uOiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgbW91c2Vkb3duOiAoKSA9PiAodGhpcy5oYXNNb3VzZWRvd24gPSB0cnVlKSxcbiAgICAgICAgbW91c2V1cDogKCkgPT4gKHRoaXMuaGFzTW91c2Vkb3duID0gZmFsc2UpLFxuICAgICAgfSxcbiAgICB9KSwgW1xuICAgICAgZ2V0U2xvdCh0aGlzLCAnZGVmYXVsdCcsIHsgb3BlbjogdGhpcy5pc0FjdGl2ZSB9LCB0cnVlKSxcbiAgICAgIHRoaXMuaGlkZUFjdGlvbnMgfHwgdGhpcy5nZW5JY29uKCksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WRXhwYW5zaW9uUGFuZWwuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQmFzZUl0ZW1Hcm91cCwgR3JvdXBhYmxlSW5zdGFuY2UgfSBmcm9tICcuLi9WSXRlbUdyb3VwL1ZJdGVtR3JvdXAnXG5pbXBvcnQgVkV4cGFuc2lvblBhbmVsIGZyb20gJy4vVkV4cGFuc2lvblBhbmVsJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGJyZWFraW5nIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW50ZXJmYWNlIFZFeHBhbnNpb25QYW5lbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBWRXhwYW5zaW9uUGFuZWw+IHt9XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBCYXNlSXRlbUdyb3VwLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWV4cGFuc2lvbi1wYW5lbHMnLFxuXG4gIHByb3ZpZGUgKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGFuc2lvblBhbmVsczogdGhpcyxcbiAgICB9XG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhY2NvcmRpb246IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBob3ZlcjogQm9vbGVhbixcbiAgICBmb2N1c2FibGU6IEJvb2xlYW4sXG4gICAgaW5zZXQ6IEJvb2xlYW4sXG4gICAgcG9wb3V0OiBCb29sZWFuLFxuICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgIHRpbGU6IEJvb2xlYW4sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uQmFzZUl0ZW1Hcm91cC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVscyc6IHRydWUsXG4gICAgICAgICd2LWV4cGFuc2lvbi1wYW5lbHMtLWFjY29yZGlvbic6IHRoaXMuYWNjb3JkaW9uLFxuICAgICAgICAndi1leHBhbnNpb24tcGFuZWxzLS1mbGF0JzogdGhpcy5mbGF0LFxuICAgICAgICAndi1leHBhbnNpb24tcGFuZWxzLS1ob3Zlcic6IHRoaXMuaG92ZXIsXG4gICAgICAgICd2LWV4cGFuc2lvbi1wYW5lbHMtLWZvY3VzYWJsZSc6IHRoaXMuZm9jdXNhYmxlLFxuICAgICAgICAndi1leHBhbnNpb24tcGFuZWxzLS1pbnNldCc6IHRoaXMuaW5zZXQsXG4gICAgICAgICd2LWV4cGFuc2lvbi1wYW5lbHMtLXBvcG91dCc6IHRoaXMucG9wb3V0LFxuICAgICAgICAndi1leHBhbnNpb24tcGFuZWxzLS10aWxlJzogdGhpcy50aWxlLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2V4cGFuZCcpKSB7XG4gICAgICBicmVha2luZygnZXhwYW5kJywgJ211bHRpcGxlJywgdGhpcylcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkgJiZcbiAgICAgIHRoaXMudmFsdWUubGVuZ3RoID4gMCAmJlxuICAgICAgdHlwZW9mIHRoaXMudmFsdWVbMF0gPT09ICdib29sZWFuJ1xuICAgICkge1xuICAgICAgYnJlYWtpbmcoJzp2YWx1ZT1cIlt0cnVlLCBmYWxzZSwgdHJ1ZV1cIicsICc6dmFsdWU9XCJbMCwgMl1cIicsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVJdGVtIChpdGVtOiBHcm91cGFibGVJbnN0YW5jZSAmIFZFeHBhbnNpb25QYW5lbEluc3RhbmNlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoaXRlbSwgaW5kZXgpXG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0sIGluZGV4ICsgMSlcblxuICAgICAgaXRlbS5pc0FjdGl2ZSA9IHRoaXMudG9nZ2xlTWV0aG9kKHZhbHVlKVxuICAgICAgaXRlbS5uZXh0SXNBY3RpdmUgPSB0aGlzLnRvZ2dsZU1ldGhvZChuZXh0VmFsdWUpXG4gICAgfSxcbiAgfSxcbn0pXG4iLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLW9uZU9mLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0zLW9uZU9mLTEtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOGIzNTg2NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LWxheW91dCcsW19jKCd2LWNhcmQnLHtzdGF0aWNDbGFzczpcIm92ZXJmbG93LWhpZGRlblwiLGF0dHJzOntcImZsYXRcIjpcIlwiLFwid2lkdGhcIjpcIjEwMHZ3XCJ9fSxbX2MoJ25hdi1kcmF3ZXInLHttb2RlbDp7dmFsdWU6KF92bS5kcmF3ZXIpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uZHJhd2VyPSQkdn0sZXhwcmVzc2lvbjpcImRyYXdlclwifX0pLF92bS5fdihcIiBcIiksX2MoJ2xvYWRpbmcnLHthdHRyczp7XCJhY3RpdmVcIjpfdm0uaXNMb2FkaW5nLFwibG9hZGVyXCI6XCJiYXJzXCIsXCJpcy1mdWxsLXBhZ2VcIjp0cnVlLFwiY29sb3JcIjpcImJsdWVcIn0sb246e1widXBkYXRlOmFjdGl2ZVwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmlzTG9hZGluZz0kZXZlbnR9fX0pLF92bS5fdihcIiBcIiksX2MoJ3YtYXBwLWJhcicse3N0YXRpY1N0eWxlOntcInotaW5kZXhcIjpcIjJcIn0sYXR0cnM6e1wiY29sb3JcIjpcInJnYmEoMTAwLDExNSwyMDEpXCIsXCJkYXJrXCI6XCJcIixcImZpeGVkXCI6XCJcIixcImFwcFwiOlwiXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImV4dGVuc2lvblwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygndi10YWJzJyx7YXR0cnM6e1wiZ3Jvd1wiOlwiXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJyZ2JhKDEwMCwxMTUsMjAxKVwiLFwiY2VudGVyLWFjdGl2ZVwiOlwiXCIsXCJpY29ucy1hbmQtdGV4dFwiOlwiXCIsXCJjZW50ZXJlZFwiOlwiXCIsXCJjb2xvclwiOlwid2hpdGVcIn0sbW9kZWw6e3ZhbHVlOihfdm0udHlwZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50eXBlPSQkdn0sZXhwcmVzc2lvbjpcInR5cGVcIn19LFtfYygndi10YWInLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX3ZtLl92KFwiRm9vZFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSxfYygndi1pY29uJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW192bS5fdihcIm1kaS1mb29kXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtdGFiJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW192bS5fdihcIlNob3BwaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLF9jKCd2LWljb24nLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX3ZtLl92KFwibWRpLWNhcnQtYXJyb3ctcmlnaHRcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi10YWInLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX3ZtLl92KFwiQmlsbHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3YtaWNvbicse2F0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfdm0uX3YoXCJtZGktYWNjb3VudC1jYXNoXCIpXSldLDEpXSwxKV19LHByb3h5OnRydWV9XSl9LFtfYygndi1hcHAtYmFyLW5hdi1pY29uJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uZHJhd2VyPSFfdm0uZHJhd2VyfX19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWF2YXRhcicse3N0YXRpY0NsYXNzOlwibXItMlwiLGF0dHJzOntcInJvdW5kZWRcIjpcIlwiLFwic2l6ZVwiOlwiMzVcIn19LFtfYygndi1pbWcnLHthdHRyczp7XCJzcmNcIjpcIi9pY29uLnBuZ1wifX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRvb2xiYXItdGl0bGUnLFtfdm0uX3YoXCJKaWZmeSBGYXZvcnNcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ2NsaWVudC1vbmx5JyxbKF92bS5jYXJ0U2l6ZSA+IDApP19jKCd2LWJ0bicse2F0dHJzOntcImljb25cIjpcIlwiLFwidG9cIjpcIi9jYXJ0XCJ9fSxbX2MoJ3YtYmFkZ2UnLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImJhZGdlXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLmNhcnRTaXplKStcIiBcIildfSxwcm94eTp0cnVlfV0sbnVsbCxmYWxzZSwxMjg1MDQ1ODc2KX0sW192bS5fdihcIiBcIiksX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJ3aGl0ZVwiLFwiZGVuc2VcIjpcIlwifX0sW192bS5fdihcIiBtZGktY2FydC1vdXRsaW5lIFwiKV0pXSwxKV0sMSk6X3ZtLl9lKCldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXNoZWV0Jyx7c3RhdGljQ2xhc3M6XCJvdmVyZmxvdy15LWF1dG8gbWItMTBcIixhdHRyczp7XCJtaW4taGVpZ2h0XCI6XCI4MHZoXCIsXCJtYXgtaGVpZ2h0XCI6XCIxMDB2aFwifX0sW19jKCd2LWNvbnRlbnQnLFtfYygndi10YWJzLWl0ZW1zJyx7bW9kZWw6e3ZhbHVlOihfdm0udHlwZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50eXBlPSQkdn0sZXhwcmVzc2lvbjpcInR5cGVcIn19LFtfYygndi10YWItaXRlbScsWyhfdm0udHJhbnMub3JkZXJzLnNpemUgPCAxKT9fYygndi1sYXlvdXQnLHthdHRyczp7XCJmbGF0XCI6XCJcIixcIndyYXBcIjpcIlwiLFwianVzdGlmeS1jZW50ZXJcIjpcIlwiLFwiYWxpZ24tY2VudGVyXCI6XCJcIixcInRleHQtbGVmdFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXJcIixhdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibGczXCI6XCJcIn19LFtfYygndi1pY29uJyx7c3RhdGljQ2xhc3M6XCJtYi0yXCIsYXR0cnM6e1wiY29sb3JcIjpcImVycm9yXCIsXCJzaXplXCI6XCIyMDBcIn19LFtfdm0uX3YoXCIgbWRpLWNhcnQtb2ZmIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2Jsb2NrcXVvdGUnLHtzdGF0aWNDbGFzczpcImJsb2NrcXVvdGUgbWItNVwifSxbX2MoJ3NwYW4nLHtzdGF0aWNTdHlsZTp7XCJmb250LXNpemVcIjpcIjUwcHhcIn19LFtfdm0uX3YoXCLwn5iiXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnaDQnLFtfdm0uX3YoXCJUaGVyZSdzIG5vdGhpbmcgaGVyZS4gV2FudCB0byBvcmRlciBzb21ldGhpbmc/XCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdmb290ZXInLFtfYygndi1idG4nLHthdHRyczp7XCJvdXRsaW5lZFwiOlwiXCIsXCJ0ZXh0XCI6XCJcIixcImJsb2NrXCI6XCJcIixcInRvXCI6XCIvZm9vZFwiLFwiY29sb3JcIjpcInJlZFwifX0sW192bS5fdihcIiBWaWV3IE1lbnVzXCIpXSldLDEpXSwxKV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLnRyYW5zLm9yZGVycy5zaXplID4gMCk/X2MoJ3YtdGFicycse2F0dHJzOntcImNlbnRlci1hY3RpdmVcIjpcIlwiLFwiY2VudGVyZWRcIjpcIlwiLFwiYmFja2dyb3VuZC1jb2xvclwiOlwidHJhbnNwYXJlbnRcIixcImNvbG9yXCI6XCJibHVlXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnRhYiksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50YWI9JCR2fSxleHByZXNzaW9uOlwidGFiXCJ9fSxbX2MoJ3YtdGFiJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW192bS5fdihcIiBPbmdvaW5nIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGFiJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW192bS5fdihcIiBIaXN0b3J5IFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGFicy1pdGVtcycse21vZGVsOnt2YWx1ZTooX3ZtLnRhYiksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50YWI9JCR2fSxleHByZXNzaW9uOlwidGFiXCJ9fSxbX2MoJ3YtdGFiLWl0ZW0nLFtfYygndi1sYXlvdXQnLHthdHRyczp7XCJ3cmFwXCI6XCJcIixcImp1c3RpZnktY2VudGVyXCI6XCJcIixcImFsaWduLWNlbnRlclwiOlwiXCIsXCJ0ZXh0LWxlZnRcIjpcIlwifX0sX3ZtLl9sKChfdm0udHJhbnMub3JkZXJzLmRhdGEuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7IHJldHVybiAoby5zdGF0dXMgIT09J2NhbmNlbGxlZCcgJiYgby5zdGF0dXMgIT09ICdjb21wbGV0ZWQnKTsgfVxuICAgICAgICAgICAgICAgICAgICApKSxmdW5jdGlvbihvcmRlcixpbmRleCl7cmV0dXJuIF9jKCdvcmRlci1jYXJkJyx7a2V5OmluZGV4LGF0dHJzOntcIml0ZW1cIjpvcmRlcn19KX0pLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRhYi1pdGVtJyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJmaWxsLWhlaWdodFwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LF92bS5fbCgoX3ZtLnRyYW5zLm9yZGVycy5kYXRhLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykgeyByZXR1cm4gKG8uc3RhdHVzICE9PSAncGxhY2VkJyAmJiBvLnN0YXR1cyAhPT0gJ2FjY2VwdGVkJyk7IH1cbiAgICAgICAgICAgICAgICAgICAgKSksZnVuY3Rpb24ob3JkZXIsaW5kZXgpe3JldHVybiBfYygnb3JkZXItY2FyZCcse2tleTppbmRleCxhdHRyczp7XCJpdGVtXCI6b3JkZXJ9fSl9KSwxKV0sMSldLDEpXSwxKTpfdm0uX2UoKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi10YWItaXRlbScsWyhfdm0udHJhbnMuc2hvcHMuc2l6ZSA8IDEpP19jKCd2LWxheW91dCcse2F0dHJzOntcImZsYXRcIjpcIlwiLFwid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LFtfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJsZzNcIjpcIlwifX0sW19jKCd2LWljb24nLHtzdGF0aWNDbGFzczpcIm1iLTJcIixhdHRyczp7XCJjb2xvclwiOlwiZXJyb3JcIixcInNpemVcIjpcIjIwMFwifX0sW192bS5fdihcIiBtZGktY2FydC1vZmYgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnYmxvY2txdW90ZScse3N0YXRpY0NsYXNzOlwiYmxvY2txdW90ZSBtYi01XCJ9LFtfYygnc3Bhbicse3N0YXRpY1N0eWxlOntcImZvbnQtc2l6ZVwiOlwiNTBweFwifX0sW192bS5fdihcIvCfmKJcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdoNCcsW192bS5fdihcIlRoZXJlJ3Mgbm90aGluZyBoZXJlLiBXYW50IHRvIHNob3Agc29tZXRoaW5nP1wiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZm9vdGVyJyxbX2MoJ3YtYnRuJyx7YXR0cnM6e1wib3V0bGluZWRcIjpcIlwiLFwidGV4dFwiOlwiXCIsXCJibG9ja1wiOlwiXCIsXCJ0b1wiOlwiL3Nob3BwaW5nXCIsXCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiU2hvcCBOb3dcIildKV0sMSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0udHJhbnMuc2hvcHMuc2l6ZSA+IDApP19jKCd2LXRhYnMnLHthdHRyczp7XCJjZW50ZXItYWN0aXZlXCI6XCJcIixcImNlbnRlcmVkXCI6XCJcIixcImJhY2tncm91bmQtY29sb3JcIjpcInRyYW5zcGFyZW50XCIsXCJjb2xvclwiOlwiYmx1ZVwifSxtb2RlbDp7dmFsdWU6KF92bS50YWIpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0udGFiPSQkdn0sZXhwcmVzc2lvbjpcInRhYlwifX0sW19jKCd2LXRhYicse2F0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfdm0uX3YoXCIgT25nb2luZyBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRhYicse2F0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfdm0uX3YoXCIgSGlzdG9yeSBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRhYnMtaXRlbXMnLHttb2RlbDp7dmFsdWU6KF92bS50YWIpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0udGFiPSQkdn0sZXhwcmVzc2lvbjpcInRhYlwifX0sW19jKCd2LXRhYi1pdGVtJyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LF92bS5fbCgoX3ZtLnRyYW5zLnNob3BzLmRhdGEuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7IHJldHVybiBvLnN0YXR1cyAhPT0gJ2NhbmNlbGxlZCcgJiYgby5zdGF0dXMgIT09ICdjb21wbGV0ZWQnOyB9XG4gICAgICAgICAgICAgICAgICAgICkpLGZ1bmN0aW9uKHNob3AsaW5kZXgpe3JldHVybiBfYygnc2hvcC1saXN0LWNhcmQnLHtrZXk6aW5kZXgsYXR0cnM6e1wiaXRlbVwiOnNob3B9fSl9KSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi10YWItaXRlbScsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwiLFwianVzdGlmeS1jZW50ZXJcIjpcIlwiLFwiZmlsbC1oZWlnaHRcIjpcIlwiLFwiYWxpZ24tY2VudGVyXCI6XCJcIixcInRleHQtbGVmdFwiOlwiXCJ9fSxfdm0uX2woKF92bS50cmFucy5zaG9wcy5kYXRhLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykgeyByZXR1cm4gby5zdGF0dXMgIT09ICdwbGFjZWQnICYmIG8uc3RhdHVzICE9PSAnYWNjZXB0ZWQnOyB9XG4gICAgICAgICAgICAgICAgICAgICkpLGZ1bmN0aW9uKHNob3AsaW5kZXgpe3JldHVybiBfYygnc2hvcC1saXN0LWNhcmQnLHtrZXk6aW5kZXgsYXR0cnM6e1wiaXRlbVwiOnNob3B9fSl9KSwxKV0sMSldLDEpXSwxKTpfdm0uX2UoKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi10YWItaXRlbScsWyhfdm0udHJhbnMuYmlsbHMuc2l6ZSA8IDEpP19jKCd2LWxheW91dCcse2F0dHJzOntcImZsYXRcIjpcIlwiLFwid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LFtfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJsZzNcIjpcIlwifX0sW19jKCd2LWljb24nLHtzdGF0aWNDbGFzczpcIm1iLTJcIixhdHRyczp7XCJjb2xvclwiOlwiZXJyb3JcIixcInNpemVcIjpcIjIwMFwifX0sW192bS5fdihcIiBtZGktY2FydC1vZmYgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnYmxvY2txdW90ZScse3N0YXRpY0NsYXNzOlwiYmxvY2txdW90ZSBtYi01XCJ9LFtfYygnc3Bhbicse3N0YXRpY1N0eWxlOntcImZvbnQtc2l6ZVwiOlwiNTBweFwifX0sW192bS5fdihcIvCfmKJcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdoNCcsW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIFRoZXJlJ3Mgbm90aGluZyBoZXJlLiBZb3Ugd2FudCB0byBwYXkgeW91ciBiaWxsIHdpdGggdXM/XFxuICAgICAgICAgICAgICAgIFwiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZm9vdGVyJyxbX2MoJ3YtYnRuJyx7YXR0cnM6e1wib3V0bGluZWRcIjpcIlwiLFwidGV4dFwiOlwiXCIsXCJibG9ja1wiOlwiXCIsXCJ0b1wiOlwiL2JpbGxzX3BheW1lbnRcIixcImNvbG9yXCI6XCJyZWRcIn19LFtfdm0uX3YoXCJTaG93IEJpbGxlclwiKV0pXSwxKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS50cmFucy5iaWxscy5zaXplID4gMCk/X2MoJ3YtdGFicycse2F0dHJzOntcImNlbnRlci1hY3RpdmVcIjpcIlwiLFwiY2VudGVyZWRcIjpcIlwiLFwiYmFja2dyb3VuZC1jb2xvclwiOlwidHJhbnNwYXJlbnRcIixcImNvbG9yXCI6XCJibHVlXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnRhYiksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50YWI9JCR2fSxleHByZXNzaW9uOlwidGFiXCJ9fSxbX2MoJ3YtdGFiJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW192bS5fdihcIiBPbmdvaW5nIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGFiJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW192bS5fdihcIiBIaXN0b3J5IFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGFicy1pdGVtcycse21vZGVsOnt2YWx1ZTooX3ZtLnRhYiksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50YWI9JCR2fSxleHByZXNzaW9uOlwidGFiXCJ9fSxbX2MoJ3YtdGFiLWl0ZW0nLFtfYygndi1sYXlvdXQnLHthdHRyczp7XCJ3cmFwXCI6XCJcIixcImp1c3RpZnktY2VudGVyXCI6XCJcIixcImFsaWduLWNlbnRlclwiOlwiXCIsXCJ0ZXh0LWxlZnRcIjpcIlwifX0sX3ZtLl9sKChfdm0udHJhbnMuYmlsbHMuZGF0YS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uc3RhdHVzICE9PSAnY29tcGxldGVkJyAmJiBvLnN0YXR1cyAhPSAnY2FuY2VsbGVkJzsgfVxuICAgICAgICAgICAgICAgICAgICApKSxmdW5jdGlvbihiaWxsLGluZGV4KXtyZXR1cm4gX2MoJ2JpbGxzLWNhcmQnLHtrZXk6aW5kZXgsYXR0cnM6e1wiaXRlbVwiOmJpbGx9fSl9KSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi10YWItaXRlbScsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwiLFwianVzdGlmeS1jZW50ZXJcIjpcIlwiLFwiZmlsbC1oZWlnaHRcIjpcIlwiLFwiYWxpZ24tY2VudGVyXCI6XCJcIixcInRleHQtbGVmdFwiOlwiXCJ9fSxfdm0uX2woKF92bS50cmFucy5iaWxscy5kYXRhLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobykgeyByZXR1cm4gby5zdGF0dXMgIT0gJ3BsYWNlZCcgJiYgby5zdGF0dXMgIT0gJ2FjY2VwdGVkJzsgfVxuICAgICAgICAgICAgICAgICAgICApKSxmdW5jdGlvbihiaWxsLGluZGV4KXtyZXR1cm4gX2MoJ2JpbGxzLWNhcmQnLHtrZXk6aW5kZXgsYXR0cnM6e1wiaXRlbVwiOmJpbGx9fSl9KSwxKV0sMSldLDEpXSwxKTpfdm0uX2UoKV0sMSldLDEpXSwxKV0sMSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3YtZmxleCcse3N0YXRpY0NsYXNzOlwibWEtMVwiLGF0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJsZzNcIjpcIlwifX0sW19jKCd2LWNhcmQnLHtzdGF0aWNDbGFzczpcIm14LWF1dG9cIixhdHRyczp7XCJtYXgtd2lkdGhcIjpcIjQwMFwifX0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJiZXN0c2VsbGVyIG1iLTVcIn0sW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uc3RhdHVzLnRvVXBwZXJDYXNlKCkpKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbKF92bS5pdGVtLnJpZGVyID09PSAndW5hc3NpZ25lZCcgJiYgX3ZtLmNoZWNrSWZPbmdvaW5nKF92bS5pdGVtLnN0YXR1cykpP19jKCd2LWxpc3QtaXRlbScse3N0YXRpY0NsYXNzOlwiZ3Jvd1wiLGF0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIiBXYWl0aW5nIGZvciByaWRlciB0byBhY2NlcHQgdGhlIGpvYi4uLiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXByb2dyZXNzLWxpbmVhcicse2F0dHJzOntcImluZGV0ZXJtaW5hdGVcIjpcIlwiLFwiY29sb3JcIjpcImN5YW5cIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIllvdXIgcmlkZXJcIildKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5pdGVtLnJpZGVyICE9PSAndW5hc3NpZ25lZCcgJiYgX3ZtLmNoZWNrSWZPbmdvaW5nKF92bS5pdGVtLnN0YXR1cykpP19jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LWxpc3QnLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtJyx7c3RhdGljQ2xhc3M6XCJncm93XCIsYXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhfdm0ucmlkZXJfcHJvZmlsZS5wcm9maWxlLmZpcnN0bmFtZSkrXCIgXCIrX3ZtLl9zKF92bS5yaWRlcl9wcm9maWxlLnByb2ZpbGUubGFzdG5hbWUpK1wiIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiWW91ciByaWRlclwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImljb25cIjpcIlwiLFwiZGVuc2VcIjpcIlwiLFwiaHJlZlwiOlwidGVsOlwiK192bS5yaWRlcl9wcm9maWxlLmNvbnRhY3R9fSxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJibHVlXCJ9fSxbX3ZtLl92KFwiIG1kaS1waG9uZSBcIildKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyx7c3RhdGljQ2xhc3M6XCJncm93XCIsYXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhfdm0uJGdldE5vdyhfdm0uaXRlbS5sb2dzW192bS5pdGVtLmxvZ3MubGVuZ3RoLTFdLnRpbWUpLnN1YnN0cmluZygxMCkpK1wiIFwiK192bS5fcyhfdm0uaXRlbS5sb2dzW192bS5pdGVtLmxvZ3MubGVuZ3RoLTFdLmV2ZW50KSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIkxhdGVzdCBTdGF0dXMgVXBkYXRlXCIpXSldLDEpXSwxKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtbGF5b3V0Jyx7c3RhdGljQ2xhc3M6XCJtdC01XCIsYXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzOFwiOlwiXCIsXCJzbThcIjpcIlwiLFwibWQ4XCI6XCJcIn19LFtfYygnc3Ryb25nJyxbX3ZtLl92KFwiT3JkZXIgUmVmZXJlbmNlXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czRcIjpcIlwiLFwic200XCI6XCJcIixcIm1kNFwiOlwiXCJ9fSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uaWQpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1kaXZpZGVyJyksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM4XCI6XCJcIixcInNtOFwiOlwiXCIsXCJtZDhcIjpcIlwifX0sW19jKCdzdHJvbmcnLFtfdm0uX3YoXCJPcmRlciBWYWx1ZVwiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJtZDRcIjpcIlwifX0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5pdGVtLmFtb3VudC5vcmRlcl92YWx1ZSkpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM4XCI6XCJcIixcInNtOFwiOlwiXCIsXCJtZDhcIjpcIlwifX0sW192bS5fdihcIiBEZWxpdmVyeSBGZWUgLVxcbiAgICAgICAgICAgICAgICAgICAgXCIpLF9jKCdzbWFsbCcsW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uZGVsaXZlcnkuZGlzdGFuY2UuY29tcHV0ZWQpK1wiIGttXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcInRleHQtZW5kXCIsYXR0cnM6e1wieHM0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJtZDRcIjpcIlwifX0sW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoKF92bS5pdGVtLmFtb3VudC5kZWxpdmVyeS5wbGF0Zm9ybSArIF92bS5pdGVtLmFtb3VudC5kZWxpdmVyeS5yaWRlciArIF92bS5pdGVtLmFtb3VudC5zYy5tYXJrdXApKSkrXCIgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1kaXZpZGVyJyksX3ZtLl92KFwiIFwiKSwoX3ZtLmNvbXB1dGVEZWR1Y3Rpb24uYW1vdW50PjApP19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czhcIjpcIlwiLFwic204XCI6XCJcIixcIm1kOFwiOlwiXCJ9fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInN1YmhlYWRpbmdcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoXCJEaXNjb3VudCBcIitfdm0uX3MoX3ZtLmNvbXB1dGVEZWR1Y3Rpb24uIHRleHQpKV0pXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uY29tcHV0ZURlZHVjdGlvbi5hbW91bnQ+MCk/X2MoJ3YtZmxleCcse2F0dHJzOntcInhzNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibWQ0XCI6XCJcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtbC0yIHJlZC0tdGV4dFwifSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmNvbXB1dGVEZWR1Y3Rpb24uYW1vdW50KSkpXSldKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzOFwiOlwiXCIsXCJzbThcIjpcIlwiLFwibWQ4XCI6XCJcIn19LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwic3ViaGVhZGluZ1wifSxbX2MoJ3N0cm9uZycsW192bS5fdihcIlRvdGFsXCIpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibWQ0XCI6XCJcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtbC0yIHJlZC0tdGV4dFwifSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLml0ZW0uYW1vdW50LmdyYW5kdG90YWwgLSBfdm0uY29tcHV0ZURlZHVjdGlvbi5hbW91bnQpKSldKV0pXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtZXhwYW5zaW9uLXBhbmVscycse2F0dHJzOntcImFjY29yZGlvblwiOlwiXCIsXCJwb3BvdXRcIjpcIlwifX0sW19jKCd2LWV4cGFuc2lvbi1wYW5lbCcsW19jKCd2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFtfdm0uX3YoXCJWaWV3IEl0ZW1zXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1leHBhbnNpb24tcGFuZWwtY29udGVudCcsW19jKCd2LWxpc3QnLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxfdm0uX2woKF92bS5pdGVtLm9yZGVyLml0ZW1zKSxmdW5jdGlvbihpLGluZGV4KXtyZXR1cm4gX2MoJ3YtbGlzdC1pdGVtLWdyb3VwJyx7a2V5OmluZGV4fSxbX2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWF2YXRhcicse2F0dHJzOntcInRpbGVcIjpcIlwiLFwiY29sb3JcIjpcImdyZXkgZGFya2VuLTNcIn19LFtfYygndi1pbWcnLHtzdGF0aWNDbGFzczpcImVsZXZhdGlvbi02XCIsYXR0cnM6e1wic3JjXCI6aS5pbmZvLmltZ319KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScse2RvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKGkuaW5mby5uYW1lKX19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW19jKCdzbWFsbCcsW192bS5fdihfdm0uX3MoX3ZtLmNvbXB1dGVBZGRPbnMoaS5hZGRfb25zKSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScse3N0YXRpY0NsYXNzOlwidGV4dC0tcHJpbWFyeVwifSxbX2MoJ3N0cm9uZycsW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoKF92bS5jb21wdXRlVG90YWwoaSkgLyBpLnF0eSkpKStcIiB4IFwiK192bS5fcyhpLnF0eSkrXCIgPSBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmNvbXB1dGVUb3RhbChpKSkpK1wiIFwiKV0pXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLChpbmRleCA8PSBfdm0uaXRlbS5vcmRlci5pdGVtcyk/X2MoJ3YtZGl2aWRlcicse2tleTpcImRpdmlkZV9cIiArIGluZGV4fSk6X3ZtLl9lKCldLDEpfSksMSldLDEpXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksKF92bS5pdGVtLmFzc2lnbl9yaWRlciA9PT0gJ3VuYXNzaWduZWQnICYmIF92bS5jaGVja0lmT25nb2luZyhfdm0uaXRlbS5zdGF0dXMpKT9fYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1saXN0LWl0ZW0nLHtzdGF0aWNDbGFzczpcImdyb3dcIixhdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWF2YXRhcicse2F0dHJzOntcImNvbG9yXCI6XCJncmV5IGRhcmtlbi0zXCJ9fSxbX2MoJ3YtaW1nJyx7ZGlyZWN0aXZlczpbe25hbWU6XCJpbWdcIixyYXdOYW1lOlwidi1pbWdcIn1dLHN0YXRpY0NsYXNzOlwiZWxldmF0aW9uLTZcIn0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFdhaXRpbmcgZm9yIHJpZGVyIHRvIGFjY2VwdCB0aGUgam9iLi4uIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtcHJvZ3Jlc3MtbGluZWFyJyx7YXR0cnM6e1wiaW5kZXRlcm1pbmF0ZVwiOlwiXCIsXCJjb2xvclwiOlwiY3lhblwifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiWW91ciByaWRlclwiKV0pXSwxKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3YtbGlzdC1pdGVtJyx7c3RhdGljQ2xhc3M6XCJncm93XCIsYXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1hdmF0YXInLHthdHRyczp7XCJjb2xvclwiOlwiZ3JleSBkYXJrZW4tM1wifX0sW19jKCd2LWltZycse3N0YXRpY0NsYXNzOlwiZWxldmF0aW9uLTZcIixhdHRyczp7XCJzcmNcIjpfdm0uaXRlbS5vcmRlci5tZXJjaGFudC5sb2dvfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uaXRlbS5vcmRlci5tZXJjaGFudC5uYW1lKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLml0ZW0ub3JkZXIubWVyY2hhbnQuYnJhbmNoKStcIiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbKF92bS5jaGVja0lmT25nb2luZyhfdm0uaXRlbS5zdGF0dXMpKT9fYygndi1idG4nLHthdHRyczp7XCJzbWFsbFwiOlwiXCIsXCJkZW5zZVwiOlwiXCIsXCJ0ZXh0XCI6XCJcIixcImNvbG9yXCI6XCJibHVlIGRhcmtlbi0xXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLm9yZGVyU2hlZXQgPSB0cnVlfX19LFtfdm0uX3YoXCIgTWFuYWdlIFwiKV0pOl92bS5fZSgpXSwxKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse2F0dHJzOntcImluc2V0XCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0ub3JkZXJTaGVldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5vcmRlclNoZWV0PSQkdn0sZXhwcmVzc2lvbjpcIm9yZGVyU2hlZXRcIn19LFtfYygndi1saXN0Jyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LXN1YmhlYWRlcicsW192bS5fdihcIk1hbmFnZSBPcmRlclwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiZGlzYWJsZWRcIjpfdm0uaXRlbS5zdGF0dXMgIT0gJ3BsYWNlZCd9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmRpYWxvZyA9IHRydWV9fX0sW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIkNhbmNlbCBPcmRlclwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScse29uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLm1hcFNoZWV0ID0gdHJ1ZX19fSxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiQ2hhbmdlIERlbGl2ZXJ5IEFkZHJlc3NcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLHtvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5nZW5lcmF0ZURhdGVzKCksIF92bS50aW1lZGlhZyA9IHRydWV9fX0sW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIkNoYW5nZSBEZWxpdmVyeSBUaW1lXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTs7KF92bS5kaWFsb2cgPSBmYWxzZSksIChfdm0uY29udGFjdHNoZWV0ID0gdHJ1ZSl9fX0sW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIlVwZGF0ZSBDb250YWN0IEluZm9ybWF0aW9uXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0udGlwZGlhZyA9IHRydWV9fX0sW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIkNoYW5nZS9BZGQgUmlkZXIgVGlwXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1ib3R0b20tc2hlZXQnLHthdHRyczp7XCJwZXJzaXN0ZW50XCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0uY29udGFjdHNoZWV0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmNvbnRhY3RzaGVldD0kJHZ9LGV4cHJlc3Npb246XCJjb250YWN0c2hlZXRcIn19LFtfYygndi1jYXJkJyx7YXR0cnM6e1widGlsZVwiOlwiXCJ9fSxbX2MoJ3YtY2FyZC10aXRsZScse2F0dHJzOntcInByaW1hcnktdGl0bGVcIjpcIlwifX0sW192bS5fdihcIiBDb250YWN0IEluZm9ybWF0aW9uIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCJ9fSxbX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcImRlbnNlXCI6XCJcIixcImxhYmVsXCI6XCJGdWxsbmFtZVwiLFwib3V0bGluZWRcIjpcIlwiLFwicGxhY2Vob2xkZXJcIjpcIkZ1bGxuYW1lXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLm90aGVyQ29udGFjdC5uYW1lKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLm90aGVyQ29udGFjdCwgXCJuYW1lXCIsICQkdil9LGV4cHJlc3Npb246XCJvdGhlckNvbnRhY3QubmFtZVwifX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwifX0sW19jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJkZW5zZVwiOlwiXCIsXCJsYWJlbFwiOlwiWW91ciBudW1iZXJcIixcIm91dGxpbmVkXCI6XCJcIixcInBsYWNlaG9sZGVyXCI6XCJZb3VyIG51bWJlclwifSxtb2RlbDp7dmFsdWU6KF92bS5vdGhlckNvbnRhY3QubnVtYmVyKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLm90aGVyQ29udGFjdCwgXCJudW1iZXJcIiwgJCR2KX0sZXhwcmVzc2lvbjpcIm90aGVyQ29udGFjdC5udW1iZXJcIn19KV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1widGlsZVwiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJjb2xvclwiOlwicmVkXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uc2V0Q29udGFjdEluZm8oKSwgKF92bS5jb250YWN0c2hlZXQgPSBmYWxzZSl9fX0sW192bS5fdihcIiBBcHBseSBDaGFuZ2VzIFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3Ytcm93Jyx7YXR0cnM6e1wianVzdGlmeVwiOlwiY2VudGVyXCJ9fSxbX2MoJ3YtZGlhbG9nJyx7YXR0cnM6e1wibWF4LXdpZHRoXCI6XCIyOTBcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZGlhbG9nKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmRpYWxvZz0kJHZ9LGV4cHJlc3Npb246XCJkaWFsb2dcIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10aXRsZScse3N0YXRpY0NsYXNzOlwiaGVhZGxpbmVcIn0sW192bS5fdihcIiBDYW5jZWwgeW91ciBvcmRlcj8gXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLXRleHQnLFtfdm0uX3YoXCIgWW91IGNhbiBjYW5jZWwgeW91ciBvcmRlciB3aXRob3V0IGNoYXJnZXMgYXMgbG9uZyBhcyB0aGUgcmVzdGF1cmFudCBpcyBub3QgcHJvY2Vzc2kgbmcgeW91ciBvcmRlci4gXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJncmVlbiBkYXJrZW4tMVwiLFwidGV4dFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uZGlhbG9nID0gZmFsc2V9fX0sW192bS5fdihcIiBDbG9zZSBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJncmVlbiBkYXJrZW4tMVwiLFwidGV4dFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uY2FuY2VsT3JkZXIoKSwgKF92bS5kaWFsb2cgPSBmYWxzZSl9fX0sW192bS5fdihcIiBPayBcIildKV0sMSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1ib3R0b20tc2hlZXQnLHthdHRyczp7XCJzY3JvbGxhYmxlXCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0ubWFwU2hlZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ubWFwU2hlZXQ9JCR2fSxleHByZXNzaW9uOlwibWFwU2hlZXRcIn19LFtfYygndi1jYXJkJyx7YXR0cnM6e1widGlsZVwiOlwiXCIsXCJoZWlnaHRcIjpcIjYwMHB4XCJ9fSxbX2MoJ3YtY2FyZC10aXRsZScse2F0dHJzOntcInByaW1hcnktdGl0bGVcIjpcIlwifX0sW192bS5fdihcIiBVcGRhdGUgRGVsaXZlcnkgQWRkcmVzc1xcbiAgICAgICAgICAgICAgICBcIiksX2MoJ3NtYWxsJyxbX3ZtLl92KFwiIFRoaXMgd2lsbCByZWNvbXB1dGUgeW91clxcbiAgICAgICAgICAgICAgICAgICAgXCIpLF9jKCdzdHJvbmcnLFtfdm0uX3YoXCJEZWxpdmVyeSBGZWVcIildKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLXRleHQnLFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtYXBjb250YWluZXJcIn0sW19jKCdHTWFwJyx7cmVmOlwiZ01hcFwiLGF0dHJzOntcImlkXCI6XCJnbWFwXCIsXCJjZW50ZXJcIjpfdm0ubXlsb2NhdGlvbixcIm9wdGlvbnNcIjp7XG4gICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgICAgICAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5J1xuICAgICAgICAgIH0sXCJ6b29tXCI6MjB9LG9uOntcImNlbnRlcl9jaGFuZ2VkXCI6X3ZtLmNlbnRlckNoYW5nZX19LFtfYygnR01hcE1hcmtlcicse3JlZjpcImdtYXBtYXJrZXJcIixhdHRyczp7XCJwb3NpdGlvblwiOl92bS5teWxvY2F0aW9uLFwib3B0aW9uc1wiOnsgaWNvbjogX3ZtLnNlbGVjdGVkbWFya2VyIH19fSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwiLFwic20xMlwiOlwiXCJ9fSxbX2MoJ3YtdGV4dGFyZWEnLHthdHRyczp7XCJsYWJlbFwiOlwiQWRkcmVzc1wiLFwib3V0bGluZWRcIjpcIlwiLFwicGxhY2Vob2xkZXJcIjpcIkFkZHJlc3NcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZmFyZS5kZWxpdmVyeV9hZGRyZXNzKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmZhcmUsIFwiZGVsaXZlcnlfYWRkcmVzc1wiLCAkJHYpfSxleHByZXNzaW9uOlwiZmFyZS5kZWxpdmVyeV9hZGRyZXNzXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCIsXCJzbTEyXCI6XCJcIn19LFtfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wiaGludFwiOlwiVHlwZSAnTkEnIGlmIG5vdCBhcHBsaWNhYmxlXCIsXCJsYWJlbFwiOlwiRmxvb3IvVW5pdC9Sb29tIE5vLlwiLFwicGVyc2lzdGVudC1oaW50XCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZmFyZS51bml0cyksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5mYXJlLCBcInVuaXRzXCIsICQkdil9LGV4cHJlc3Npb246XCJmYXJlLnVuaXRzXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCIsXCJzbTEyXCI6XCJcIn19LFtfYygndi10ZXh0YXJlYScse2F0dHJzOntcImxhYmVsXCI6XCJOb3RlIHRvIHJpZGVyXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJwbGFjZWhvbGRlclwiOlwiZWcuIExhbmRtYXJrLyBCdWlsZGluZ1wifSxtb2RlbDp7dmFsdWU6KF92bS5mYXJlLm5vdGV0b3JpZGVyKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmZhcmUsIFwibm90ZXRvcmlkZXJcIiwgJCR2KX0sZXhwcmVzc2lvbjpcImZhcmUubm90ZXRvcmlkZXJcIn19KV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJ0aWxlXCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIixcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5yZWNhbGN1bGF0ZUZlZXMoKSwgKF92bS5tYXBTaGVldCA9IGZhbHNlKX19fSxbX3ZtLl92KFwiIEFwcGx5IENoYW5nZXMgXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1ib3R0b20tc2hlZXQnLHthdHRyczp7XCJwZXJzaXN0ZW50XCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0udGltZWRpYWcpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0udGltZWRpYWc9JCR2fSxleHByZXNzaW9uOlwidGltZWRpYWdcIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10aXRsZScsW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJoZWFkbGluZVwifSxbX3ZtLl92KFwiRGVsaXZlcnkgRGF0ZSAmIFRpbWVcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtY29udGFpbmVyJyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ2XCI6XCJcIixcImxnNlwiOlwiXCIsXCJzbTZcIjpcIlwifX0sW19jKCd2LXNlbGVjdCcse2F0dHJzOntcImZsYXRcIjpcIlwiLFwiaXRlbXNcIjpfdm0uZGF0ZXMsXCJyZXR1cm4tb2JqZWN0XCI6XCJcIixcImxhYmVsXCI6XCJEZWxpdmVyeSBEYXRlXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcInNlbGVjdGlvblwiLGZuOmZ1bmN0aW9uKGRhdGEpe3JldHVybiBbX3ZtLl92KFwiIFwiK192bS5fcyhkYXRhLml0ZW0ubGFiZWwpK1wiLCBcIitfdm0uX3MoZGF0YS5pdGVtLmRheV9uYW1lKStcIiBcIitfdm0uX3MoZGF0YS5pdGVtLm5hbWUpK1wiIFwiK192bS5fcyhkYXRhLml0ZW0uZGF5KStcIiBcIildfX0se2tleTpcIml0ZW1cIixmbjpmdW5jdGlvbihkYXRhKXtyZXR1cm4gW192bS5fdihcIiBcIitfdm0uX3MoZGF0YS5pdGVtLmxhYmVsKStcIiwgXCIrX3ZtLl9zKGRhdGEuaXRlbS5kYXlfbmFtZSkrXCIgXCIrX3ZtLl9zKGRhdGEuaXRlbS5uYW1lKStcIiBcIitfdm0uX3MoZGF0YS5pdGVtLmRheSkrXCIgXCIpXX19XSksbW9kZWw6e3ZhbHVlOihfdm0uZGVsaXZlcnlfZGF0ZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5kZWxpdmVyeV9kYXRlPSQkdn0sZXhwcmVzc2lvbjpcImRlbGl2ZXJ5X2RhdGVcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDZcIjpcIlwiLFwibGc2XCI6XCJcIixcInNtNlwiOlwiXCJ9fSxbX2MoJ3Ytc2VsZWN0Jyx7YXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJpdGVtc1wiOl92bS5kZWxpdmVyeV9kYXRlLmRlbGl2ZXJ5X3RpbWUsXCJsYWJlbFwiOlwiRGVsaXZlcnkgVGltZVwifSxtb2RlbDp7dmFsdWU6KF92bS5kZWxpdmVyeV90aW1lKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmRlbGl2ZXJ5X3RpbWU9JCR2fSxleHByZXNzaW9uOlwiZGVsaXZlcnlfdGltZVwifX0pXSwxKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1wiY29sb3JcIjpcImJsdWUgZGFya2VuLTFcIixcInRleHRcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLnRpbWVkaWFnID0gZmFsc2V9fX0sW192bS5fdihcIiBDbG9zZSBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJibHVlIGRhcmtlbi0xXCIsXCJ0ZXh0XCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5zYXZlTmV3VGltZSgpLCAoX3ZtLnRpbWVkaWFnID0gZmFsc2UpfX19LFtfdm0uX3YoXCIgU2F2ZSBcIildKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse2F0dHJzOntcInBlcnNpc3RlbnRcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS50aXBkaWFnKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnRpcGRpYWc9JCR2fSxleHByZXNzaW9uOlwidGlwZGlhZ1wifX0sW19jKCd2LWNhcmQnLFtfYygndi1jYXJkLXRpdGxlJyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImhlYWRsaW5lXCJ9LFtfdm0uX3YoXCJSaWRlciBUaXBcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCIsXCJzbTEyXCI6XCJcIn19LFtfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wicmlnaHRcIjpcIlwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZW5zZVwiOlwiXCIsXCJzb2xvXCI6XCJcIixcImxhYmVsXCI6XCJSaWRlciBUaW1lXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJwbGFjZWhvbGRlclwiOlwiQW1vdW50IG9mIHRpcFwifSxtb2RlbDp7dmFsdWU6KF92bS5yaWRlcl90aXApLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ucmlkZXJfdGlwPSQkdn0sZXhwcmVzc2lvbjpcInJpZGVyX3RpcFwifX0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJ0aWxlXCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIixcImRpc2FibGVkXCI6X3ZtLnJpZGVyX3RpcCA8IDAsXCJjb2xvclwiOlwicmVkXCJ9LG9uOntcImNsaWNrXCI6X3ZtLnNhdmVUaXB9fSxbX3ZtLl92KFwiIEFwcGx5IENoYW5nZXMgXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1zbmFja2Jhcicse2F0dHJzOntcImNvbG9yXCI6XCJzdWNjZXNzXCIsXCJib3R0b21cIjpcIlwiLFwidGltZW91dFwiOl92bS50aW1lb3V0fSxtb2RlbDp7dmFsdWU6KF92bS5zbmFja2JhciksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5zbmFja2Jhcj0kJHZ9LGV4cHJlc3Npb246XCJzbmFja2JhclwifX0sW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLmluZm8pK1wiIFwiKV0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDx2LWZsZXggeHMxMiBtZDQgc200IGxnMyBjbGFzcz1cIm1hLTFcIj5cbiAgICAgICAgPHYtY2FyZCBjbGFzcz1cIm14LWF1dG9cIiBtYXgtd2lkdGg9XCI0MDBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVzdHNlbGxlciBtYi01XCI+e3sgaXRlbS5zdGF0dXMudG9VcHBlckNhc2UoKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gZGVuc2UgY2xhc3M9XCJncm93XCIgdi1pZj1cIml0ZW0ucmlkZXIgPT09ICd1bmFzc2lnbmVkJyAmJiBjaGVja0lmT25nb2luZyhpdGVtLnN0YXR1cylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+IFdhaXRpbmcgZm9yIHJpZGVyIHRvIGFjY2VwdCB0aGUgam9iLi4uIDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1wcm9ncmVzcy1saW5lYXIgaW5kZXRlcm1pbmF0ZSBjb2xvcj1cImN5YW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPllvdXIgcmlkZXI8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnMgdi1pZj1cIml0ZW0ucmlkZXIgIT09ICd1bmFzc2lnbmVkJyAmJiBjaGVja0lmT25nb2luZyhpdGVtLnN0YXR1cylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZSBjbGFzcz1cImdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7cmlkZXJfcHJvZmlsZS5wcm9maWxlLmZpcnN0bmFtZX19IHt7cmlkZXJfcHJvZmlsZS5wcm9maWxlLmxhc3RuYW1lfX0gPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPllvdXIgcmlkZXI8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBkZW5zZSA6aHJlZj1cImB0ZWw6YCtyaWRlcl9wcm9maWxlLmNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cImJsdWVcIj4gbWRpLXBob25lIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlIGNsYXNzPVwiZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+e3skZ2V0Tm93KGl0ZW0ubG9nc1tpdGVtLmxvZ3MubGVuZ3RoLTFdLnRpbWUpLnN1YnN0cmluZygxMCl9fSB7e2l0ZW0ubG9nc1tpdGVtLmxvZ3MubGVuZ3RoLTFdLmV2ZW50fX08L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+TGF0ZXN0IFN0YXR1cyBVcGRhdGU8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcCBjbGFzcz1cIm10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czggc204IG1kOD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+T3JkZXIgUmVmZXJlbmNlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCBzbTQgbWQ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBpdGVtLmlkIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM4IHNtOCBtZDg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk9yZGVyIFZhbHVlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCBzbTQgbWQ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBpdGVtLmFtb3VudC5vcmRlcl92YWx1ZSB8IHRvUEhQIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzOCBzbTggbWQ4PiBEZWxpdmVyeSBGZWUgLVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnt7IGl0ZW0uZGVsaXZlcnkuZGlzdGFuY2UuY29tcHV0ZWQgfX0ga208L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgc200IG1kNCBjbGFzcz1cInRleHQtZW5kXCI+IHt7IChpdGVtLmFtb3VudC5kZWxpdmVyeS5wbGF0Zm9ybSArIGl0ZW0uYW1vdW50LmRlbGl2ZXJ5LnJpZGVyICsgaXRlbS5hbW91bnQuc2MubWFya3VwKSB8IHRvUEhQIH19IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM4IHNtOCBtZDggdi1pZj1cImNvbXB1dGVEZWR1Y3Rpb24uYW1vdW50PjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGlzY291bnQge3tjb21wdXRlRGVkdWN0aW9uLiB0ZXh0fX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IHNtNCBtZDQgdi1pZj1cImNvbXB1dGVEZWR1Y3Rpb24uYW1vdW50PjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0yIHJlZC0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgY29tcHV0ZURlZHVjdGlvbi5hbW91bnQgfCB0b1BIUCB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzOCBzbTggbWQ4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ub3RhbDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgc200IG1kND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0yIHJlZC0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgaXRlbS5hbW91bnQuZ3JhbmR0b3RhbCAtIGNvbXB1dGVEZWR1Y3Rpb24uYW1vdW50IHwgdG9QSFAgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPHYtZXhwYW5zaW9uLXBhbmVscyBhY2NvcmRpb24gcG9wb3V0PlxuICAgICAgICAgICAgICAgICAgICA8di1leHBhbnNpb24tcGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlZpZXcgSXRlbXM8L3YtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1ncm91cCB2LWZvcj1cIihpLCBpbmRleCkgaW4gaXRlbS5vcmRlci5pdGVtc1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hdmF0YXIgdGlsZSBjb2xvcj1cImdyZXkgZGFya2VuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaW1nIGNsYXNzPVwiZWxldmF0aW9uLTZcIiA6c3JjPVwiaS5pbmZvLmltZ1wiIC8+IDwvdi1saXN0LWl0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGUgdi10ZXh0PVwiaS5pbmZvLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3sgY29tcHV0ZUFkZE9ucyhpLmFkZF9vbnMpIH19PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlIGNsYXNzPVwidGV4dC0tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ge3sgKGNvbXB1dGVUb3RhbChpKSAvIGkucXR5KSB8IHRvUEhQIH19IHgge3sgaS5xdHkgfX0gPSB7eyBjb21wdXRlVG90YWwoaSkgfCB0b1BIUCB9fSA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciB2LWlmPVwiaW5kZXggPD0gaXRlbS5vcmRlci5pdGVtc1wiIDprZXk9XCJgZGl2aWRlX2AgKyBpbmRleFwiIC8+IDwvdi1saXN0LWl0ZW0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1leHBhbnNpb24tcGFuZWw+XG4gICAgICAgICAgICAgICAgPC92LWV4cGFuc2lvbi1wYW5lbHM+XG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgPHYtZGl2aWRlciAvPlxuICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zIHYtaWY9XCJpdGVtLmFzc2lnbl9yaWRlciA9PT0gJ3VuYXNzaWduZWQnICYmIGNoZWNrSWZPbmdvaW5nKGl0ZW0uc3RhdHVzKVwiPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZSBjbGFzcz1cImdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWF2YXRhciBjb2xvcj1cImdyZXkgZGFya2VuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWltZyB2LWltZyBjbGFzcz1cImVsZXZhdGlvbi02XCIgLz4gPC92LWxpc3QtaXRlbS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPiBXYWl0aW5nIGZvciByaWRlciB0byBhY2NlcHQgdGhlIGpvYi4uLiA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtcHJvZ3Jlc3MtbGluZWFyIGluZGV0ZXJtaW5hdGUgY29sb3I9XCJjeWFuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5Zb3VyIHJpZGVyPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZSBjbGFzcz1cImdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWF2YXRhciBjb2xvcj1cImdyZXkgZGFya2VuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWltZyBjbGFzcz1cImVsZXZhdGlvbi02XCIgOnNyYz1cIml0ZW0ub3JkZXIubWVyY2hhbnQubG9nb1wiIC8+IDwvdi1saXN0LWl0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4ge3sgaXRlbS5vcmRlci5tZXJjaGFudC5uYW1lIH19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+IHt7IGl0ZW0ub3JkZXIubWVyY2hhbnQuYnJhbmNoIH19IDwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBzbWFsbCBkZW5zZSB2LWlmPVwiY2hlY2tJZk9uZ29pbmcoaXRlbS5zdGF0dXMpXCIgdGV4dCBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBAY2xpY2suc3RvcD1cIm9yZGVyU2hlZXQgPSB0cnVlXCI+IE1hbmFnZSA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwib3JkZXJTaGVldFwiIGluc2V0PlxuICAgICAgICAgICAgPHYtbGlzdCBkZW5zZT5cbiAgICAgICAgICAgICAgICA8di1zdWJoZWFkZXI+TWFuYWdlIE9yZGVyPC92LXN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gOmRpc2FibGVkPVwiaXRlbS5zdGF0dXMgIT0gJ3BsYWNlZCdcIiBAY2xpY2suc3RvcD1cImRpYWxvZyA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPkNhbmNlbCBPcmRlcjwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gQGNsaWNrLnN0b3A9XCJtYXBTaGVldCA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPkNoYW5nZSBEZWxpdmVyeSBBZGRyZXNzPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBAY2xpY2suc3RvcD1cImdlbmVyYXRlRGF0ZXMoKSwgdGltZWRpYWcgPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT5DaGFuZ2UgRGVsaXZlcnkgVGltZTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gQGNsaWNrLnN0b3A9XCI7KGRpYWxvZyA9IGZhbHNlKSwgKGNvbnRhY3RzaGVldCA9IHRydWUpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT5VcGRhdGUgQ29udGFjdCBJbmZvcm1hdGlvbjwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gQGNsaWNrLnN0b3A9XCJ0aXBkaWFnID0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+Q2hhbmdlL0FkZCBSaWRlciBUaXA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJjb250YWN0c2hlZXRcIiBwZXJzaXN0ZW50PlxuICAgICAgICAgICAgPHYtY2FyZCB0aWxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT4gQ29udGFjdCBJbmZvcm1hdGlvbiA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LW1vZGVsPVwib3RoZXJDb250YWN0Lm5hbWVcIiBkZW5zZSBsYWJlbD1cIkZ1bGxuYW1lXCIgb3V0bGluZWQgcGxhY2Vob2xkZXI9XCJGdWxsbmFtZVwiIC8+IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LW1vZGVsPVwib3RoZXJDb250YWN0Lm51bWJlclwiIGRlbnNlIGxhYmVsPVwiWW91ciBudW1iZXJcIiBvdXRsaW5lZCBwbGFjZWhvbGRlcj1cIllvdXIgbnVtYmVyXCIgLz4gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gdGlsZSBvdXRsaW5lZCBjb2xvcj1cInJlZFwiIEBjbGljaz1cInNldENvbnRhY3RJbmZvKCksIChjb250YWN0c2hlZXQgPSBmYWxzZSlcIj4gQXBwbHkgQ2hhbmdlcyA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPHYtcm93IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiMjkwXCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cImhlYWRsaW5lXCI+IENhbmNlbCB5b3VyIG9yZGVyPyA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PiBZb3UgY2FuIGNhbmNlbCB5b3VyIG9yZGVyIHdpdGhvdXQgY2hhcmdlcyBhcyBsb25nIGFzIHRoZSByZXN0YXVyYW50IGlzIG5vdCBwcm9jZXNzaSBuZyB5b3VyIG9yZGVyLiA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJkaWFsb2cgPSBmYWxzZVwiPiBDbG9zZSA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiB0ZXh0IEBjbGljaz1cImNhbmNlbE9yZGVyKCksIChkaWFsb2cgPSBmYWxzZSlcIj4gT2sgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwibWFwU2hlZXRcIiBzY3JvbGxhYmxlPlxuICAgICAgICAgICAgPHYtY2FyZCB0aWxlIGhlaWdodD1cIjYwMHB4XCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPiBVcGRhdGUgRGVsaXZlcnkgQWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8c21hbGw+IFRoaXMgd2lsbCByZWNvbXB1dGUgeW91clxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EZWxpdmVyeSBGZWU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHTWFwIGlkPVwiZ21hcFwiIHJlZj1cImdNYXBcIiA6Y2VudGVyPVwibXlsb2NhdGlvblwiIDpvcHRpb25zPVwie1xuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5J1xuICAgICAgICAgICAgICB9XCIgOnpvb209XCIyMFwiIEBjZW50ZXJfY2hhbmdlZD1cImNlbnRlckNoYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHTWFwTWFya2VyIHJlZj1cImdtYXBtYXJrZXJcIiA6cG9zaXRpb249XCJteWxvY2F0aW9uXCIgOm9wdGlvbnM9XCJ7IGljb246IHNlbGVjdGVkbWFya2VyIH1cIiAvPiA8L0dNYXA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQxMiBzbTEyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dGFyZWEgdi1tb2RlbD1cImZhcmUuZGVsaXZlcnlfYWRkcmVzc1wiIGxhYmVsPVwiQWRkcmVzc1wiIG91dGxpbmVkIHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiIC8+IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQxMiBzbTEyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LW1vZGVsPVwiZmFyZS51bml0c1wiIGhpbnQ9XCJUeXBlICdOQScgaWYgbm90IGFwcGxpY2FibGVcIiBsYWJlbD1cIkZsb29yL1VuaXQvUm9vbSBOby5cIiBwZXJzaXN0ZW50LWhpbnQgb3V0bGluZWQgLz4gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDEyIHNtMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0YXJlYSB2LW1vZGVsPVwiZmFyZS5ub3RldG9yaWRlclwiIGxhYmVsPVwiTm90ZSB0byByaWRlclwiIG91dGxpbmVkIHBsYWNlaG9sZGVyPVwiZWcuIExhbmRtYXJrLyBCdWlsZGluZ1wiIC8+IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHRpbGUgb3V0bGluZWQgY29sb3I9XCJyZWRcIiBAY2xpY2s9XCJyZWNhbGN1bGF0ZUZlZXMoKSwgKG1hcFNoZWV0ID0gZmFsc2UpXCI+IEFwcGx5IENoYW5nZXMgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDwvdi1ib3R0b20tc2hlZXQ+XG4gICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwidGltZWRpYWdcIiBwZXJzaXN0ZW50PlxuICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+RGVsaXZlcnkgRGF0ZSAmIFRpbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQ2IGxnNiBzbTY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCB2LW1vZGVsPVwiZGVsaXZlcnlfZGF0ZVwiIGZsYXQgOml0ZW1zPVwiZGF0ZXNcIiByZXR1cm4tb2JqZWN0IGxhYmVsPVwiRGVsaXZlcnkgRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNzZWxlY3Rpb249XCJkYXRhXCI+IHt7IGRhdGEuaXRlbS5sYWJlbCB9fSwge3sgZGF0YS5pdGVtLmRheV9uYW1lIH19IHt7IGRhdGEuaXRlbS5uYW1lIH19IHt7IGRhdGEuaXRlbS5kYXkgfX0gPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaXRlbT1cImRhdGFcIj4ge3sgZGF0YS5pdGVtLmxhYmVsIH19LCB7eyBkYXRhLml0ZW0uZGF5X25hbWUgfX0ge3sgZGF0YS5pdGVtLm5hbWUgfX0ge3sgZGF0YS5pdGVtLmRheSB9fSA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDYgbGc2IHNtNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IHYtbW9kZWw9XCJkZWxpdmVyeV90aW1lXCIgZmxhdCA6aXRlbXM9XCJkZWxpdmVyeV9kYXRlLmRlbGl2ZXJ5X3RpbWVcIiBsYWJlbD1cIkRlbGl2ZXJ5IFRpbWVcIiAvPiA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJ0aW1lZGlhZyA9IGZhbHNlXCI+IENsb3NlIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiB0ZXh0IEBjbGljaz1cInNhdmVOZXdUaW1lKCksICh0aW1lZGlhZyA9IGZhbHNlKVwiPiBTYXZlIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cInRpcGRpYWdcIiBwZXJzaXN0ZW50PlxuICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+UmlkZXIgVGlwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQxMiBzbTEyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1tb2RlbD1cInJpZGVyX3RpcFwiIHJpZ2h0IHR5cGU9XCJudW1iZXJcIiBkZW5zZSBzb2xvIGxhYmVsPVwiUmlkZXIgVGltZVwiIG91dGxpbmVkIHBsYWNlaG9sZGVyPVwiQW1vdW50IG9mIHRpcFwiIC8+IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHRpbGUgb3V0bGluZWQgOmRpc2FibGVkPVwicmlkZXJfdGlwIDwgMFwiIGNvbG9yPVwicmVkXCIgQGNsaWNrPVwic2F2ZVRpcFwiPiBBcHBseSBDaGFuZ2VzIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICA8di1zbmFja2JhciB2LW1vZGVsPVwic25hY2tiYXJcIiBjb2xvcj1cInN1Y2Nlc3NcIiBib3R0b20gOnRpbWVvdXQ9XCJ0aW1lb3V0XCI+IHt7IGluZm8gfX0gPC92LXNuYWNrYmFyPlxuICAgIDwvdi1mbGV4PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnXG5pbXBvcnQge1xuICAgIEdlb0NvbGxlY3Rpb25SZWZlcmVuY2Vcbn0gZnJvbSAnZ2VvZmlyZXN0b3JlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICByaWRlcl9wcm9maWxlKHZhbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVzaW5lc3M6IHt9LFxuICAgICAgICAgICAgc25hY2tiYXI6IGZhbHNlLFxuICAgICAgICAgICAgaW5mbzogJycsXG4gICAgICAgICAgICB0aW1lb3V0OiAzNTAwLFxuICAgICAgICAgICAgdGltZWRpYWc6IGZhbHNlLFxuICAgICAgICAgICAgZGVsaXZlcnlfZGF0ZToge1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5X3RpbWU6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0ZXM6IFtdLFxuICAgICAgICAgICAgZGVsaXZlcnlfdGltZTogJycsXG4gICAgICAgICAgICBtYXBTaGVldDogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZG1hcmtlcjogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFIVVNVUkJWSGdCNVZVN1N3TkJFSjdMbVpCZ01DK1VkS0t4ME1aQ0cyc3J3Y2JDQjJnbHBGRFEzdG8vSWVndlNBSVdQckJKSXlTbGlwVUtLcVlMYUhKM2lXSWVsenUvRFRrOGo3MUg3TVFQbHRtWm5mbG1aM2IzanVpdlEzQnpDSWZESTRGQVlCdlRSVjNYUjd0QmdsQ0NPSVA5b0Z3dXYvNDZRU3dXV3dmWklhYUROaTd2R09scXRacWhmaFBFNC9FVmlBeTVWNmxqRTh1VlN1WFljNEprTWpuY2FyVWVNUjBpYjVEYjdmWkV2VjZ2V0JkOFBHK1E3M0xJRll5ajNsQXNhMUcvMzcvRDQrSldnUGJjUWt5YmQ5anBkR1lWUlhsbVNpUVNTWW1pZU1XbWhnTXV3STBrU1RQa3BRSmd6S0puRGZKdUtZcnlCSkg3c1ZOQlNQR0k3QktvRmwzbitHZ3VNWTRKSGl6Nkd0b3liaWlzUmN6bUV0UEZBTStJZmw2aTVEbVRLWXFlWCtOc3NqMTlsVXo5TjJKNFhOeERUaVFTa3dpNG96NkFEVTNoTGR4Yjdkd1c5UnlMNUIwRkhybHRBZ1pVc0VjZTRlUnJtd0IzdWdDUkozZms0VnZzT3dFREh0Y1d4S2VEeTRlbWFXbUhkUktkRnB2TnBoUUtoZGhGbU9ldDQyRDNzZnRUSnc3WC93SGd3L1U4aDF5d2tKL2dZSmVJL3dpL2c4a2RtcXFxRzVBbGs2MkVyK2VtRzduWEJGU3IxYXJvTlNOa253T1Z6Wm5OUzZ4SUh0Rm9ORjZDd2VBYnBoZXlMT2ZvMytBTGZyU3V6SjFGOEVzQUFBQUFTVVZPUks1Q1lJST0nLFxuICAgICAgICAgICAgb3RoZXJDb250YWN0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpcHRvb2x0aXA6IGZhbHNlLFxuICAgICAgICAgICAgcmlkZXJfdGlwOiAwLFxuICAgICAgICAgICAgcmlkZXJfcHJvZmlsZToge1xuICAgICAgICAgICAgICAgIGNvbnRhY3Q6ICcnLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXBkaWFnOiBmYWxzZSxcbiAgICAgICAgICAgIGZhcmU6IHtcbiAgICAgICAgICAgICAgICBkZWxpdmVyeV9hZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICB1bml0czogJycsXG4gICAgICAgICAgICAgICAgbm90ZXRvcmlkZXI6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFjdHNoZWV0OiBmYWxzZSxcbiAgICAgICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICBvcmRlclNoZWV0OiBmYWxzZSxcbiAgICAgICAgICAgIHNob3d0b29sdGlwOiBmYWxzZSxcbiAgICAgICAgICAgIG15bG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICBsYXQ6IDkuNzk0MTE4NSxcbiAgICAgICAgICAgICAgICBsbmc6IDExOC43MzIyNTk5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGRmKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbJ2FkbWluL2dldEZhcmUnXVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlRGVkdWN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGRpc2NvdW50ID0gMDtcbiAgICAgICAgICAgIGxldCBkaXNjb3VudFRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbS5hbW91bnQuaGFzT3duUHJvcGVydHkoJ2RlZHVjdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbS5hbW91bnQuZGVkdWN0aW9uLmNoYXJnZWRfdG8gPT09ICdtZXJjaGFudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnQgPSBkaXNjb3VudCArIHRoaXMuaXRlbS5hbW91bnQuZGVkdWN0aW9uLmNvbXB1dGVkXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLml0ZW0uYW1vdW50LmRlZHVjdGlvbi5jaGFyZ2VkX3RvID09PSAncGxhdGZvcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ID0gZGlzY291bnQgKyB0aGlzLml0ZW0uYW1vdW50LmRlZHVjdGlvbi5jb21wdXRlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNjb3VudFRleHQgPSB0aGlzLml0ZW0uYW1vdW50LmRlZHVjdGlvbi5jb2RlICsgJy0nICsgdGhpcy5pdGVtLmFtb3VudC5kZWR1Y3Rpb24udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogZGlzY291bnRUZXh0LFxuICAgICAgICAgICAgICAgIGFtb3VudDogZGlzY291bnQgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtLnJpZGVyICE9PSAndW5hc3NpZ25lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmlkZXJJbmZvKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm15bG9jYXRpb24gPSB7XG4gICAgICAgICAgICBsYXQ6IHRoaXMuaXRlbS5kZWxpdmVyeS50by5jb29yZC5sYXQsXG4gICAgICAgICAgICBsbmc6IHRoaXMuaXRlbS5kZWxpdmVyeS50by5jb29yZC5sbmdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJpZGVyX3RpcCA9IHRoaXMuaXRlbS5hbW91bnQudGlwXG4gICAgICAgIHRoaXMuZmFyZSA9IHtcbiAgICAgICAgICAgIGRlbGl2ZXJ5X2FkZHJlc3M6IHRoaXMuaXRlbS5kZWxpdmVyeS50by5hZGRyZXNzLFxuICAgICAgICAgICAgdW5pdHM6IHRoaXMuaXRlbS5kZWxpdmVyeS50by51bml0LFxuICAgICAgICAgICAgbm90ZXRvcmlkZXI6IHRoaXMuaXRlbS5kZWxpdmVyeS5yaWRlcl9ub3RlLFxuICAgICAgICAgICAgY29vcmQ6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbS5kZWxpdmVyeS50by5jb29yZClcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5vdGhlckNvbnRhY3QgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5pdGVtLm9yZGVyLmJ5Lm90aGVyQ29udGFjdC5uYW1lLFxuICAgICAgICAgICAgICAgIG51bWJlcjogdGhpcy5pdGVtLm9yZGVyLmJ5Lm90aGVyQ29udGFjdC5udW1iZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5vdGhlckNvbnRhY3QgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5pdGVtLm9yZGVyLmJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiB0aGlzLml0ZW0ub3JkZXIuYnkuY29udGFjdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFJpZGVySW5mbygpIHtcbiAgICAgICAgICAgIHZhciByaWRlciA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKHRoaXMuJGZpcmVTdG9yZU9iaigpLmNvbGxlY3Rpb24oJ3JpZGVycycpKVxuICAgICAgICAgICAgdGhpcy4kYmluZCgncmlkZXJfcHJvZmlsZScsIHJpZGVyLmRvYyh0aGlzLml0ZW0ucmlkZXIpKVxuICAgICAgICB9LFxuICAgICAgICBjaGVja0lmT25nb2luZyh2YWwpIHtcbiAgICAgICAgICAgIGlmICh2YWwgPT09ICdwbGFjZWQnIHx8IHZhbCA9PT0gJ29uZ29pbmcnIHx8IHZhbCA9PT0gJ2FjY2VwdGVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzYXZlVGlwKCkge1xuICAgICAgICAgICAgdGhpcy4kZmlyZVN0b3JlT2JqKCkuY29sbGVjdGlvbignb3JkZXJzJykuZG9jKHRoaXMuaXRlbS5pZCkudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAnZC5hbW91bnQudGlwJzogTWF0aC5yb3VuZCh0aGlzLnJpZGVyX3RpcClcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGlwZGlhZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlclNoZWV0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8gPSAnVGlwIGFtb3VudCByZWNvcmRlZC4gVGhhbmsgeW91ISdcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZU5ld1RpbWUoKSB7XG4gICAgICAgICAgICB0aGlzLiRmaXJlU3RvcmVPYmooKS5jb2xsZWN0aW9uKCdvcmRlcnMnKS5kb2ModGhpcy5pdGVtLmlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICdkLmRlbGl2ZXJ5LmRhdGUnOiB0aGlzLmRlbGl2ZXJ5X2RhdGUuZGF0ZSxcbiAgICAgICAgICAgICAgICAnZC5kZWxpdmVyeS50aW1lJzogdGhpcy5kZWxpdmVyeV90aW1lLFxuICAgICAgICAgICAgICAgICdkLnRpbWVzdGFtcCc6IHRoaXMuJGdlbmVyYXRlVGltZXN0YW1wKHRoaXMuZGVsaXZlcnlfZGF0ZS5kYXRlLCB0aGlzLmRlbGl2ZXJ5X3RpbWUpXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyU2hlZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaW5mbyA9ICdEZWxpdmVyeSBUaW1lICYgRGF0ZSB1cGRhdGVkJ1xuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZURhdGVzKCkge1xuICAgICAgICAgICAgdGhpcy4kZmlyZVN0b3JlT2JqKCkuY29sbGVjdGlvbignbWVyY2hhbnQnKS5kb2ModGhpcy5pdGVtLm9yZGVyLm1lcmNoYW50LmlkKS5nZXQoKS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBkLmRhdGEoKS5kXG4gICAgICAgICAgICAgICAgdGhpcy5idXNpbmVzcy5kZWxpdmVyeSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEuZGVsaXZlcnlfdGltZSlcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IHRoaXMuYWRkRGF5cyhuZXcgRGF0ZSgpLCAwKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvbW9ycm93ID0gdGhpcy5hZGREYXlzKG5ldyBEYXRlKCksIDEpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dGRheSA9IHRoaXMuYWRkRGF5cyhuZXcgRGF0ZSgpLCAyKVxuICAgICAgICAgICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldEhvdXJzKCkgPCAyMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzID0gW3RvZGF5LCB0b21vcnJvdywgbmV4dGRheV1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVzID0gW3RvbW9ycm93LCBuZXh0ZGF5XVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8PSA2OyBpKyspIHRoaXMuZGF0ZXMucHVzaCh0aGlzLmFkZERheXMobmV3IERhdGUoKSwgaSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aE5hbWVzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuICAgICAgICAgICAgY29uc3QgZGF5TmFtZXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gWydUb2RheScsICdUb21vcnJvdycsICdBZHZhbmNlZCBPcmRlciddXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICAgICAgcmVzdWx0LnNldERhdGUocmVzdWx0LmdldERhdGUoKSArIGRheXMpXG4gICAgICAgICAgICBpZiAoZGF5cyA9PT0gMikge1xuICAgICAgICAgICAgICAgIGxhYmVsLnB1c2goZGF5TmFtZXNbcmVzdWx0LmdldERheSgpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkZWxpdmVyeV90aW1lID0gW11cbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSh0aGlzLiRnZXROb3coKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICBsZXQgY2xvc2UgPSBuZXcgRGF0ZSh0aGlzLiRnZXROb3coKS5zdWJzdHJpbmcoMCwgMTApICsgJyAnICsgdGhpcy5idXNpbmVzcy5kZWxpdmVyeS5jbG9zZSlcbiAgICAgICAgICAgIGxldCBvcGVuID0gbmV3IERhdGUodGhpcy4kZ2V0Tm93KCkuc3Vic3RyaW5nKDAsIDEwKSArICcgJyArIHRoaXMuYnVzaW5lc3MuZGVsaXZlcnkub3BlbilcbiAgICAgICAgICAgIGlmIChkYXlzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA8IGNsb3NlICYmIG5vdyA+IG9wZW4pIGRlbGl2ZXJ5X3RpbWUgPSB0aGlzLiR0aW1lUmFuZ2UodGhpcy4kZm9ybWF0QU1QTShuZXcgRGF0ZSgpKSwgdGhpcy5idXNpbmVzcy5kZWxpdmVyeS5jbG9zZSwgNDUpXG4gICAgICAgICAgICAgICAgZWxzZSBkZWxpdmVyeV90aW1lID0gdGhpcy4kdGltZVJhbmdlKHRoaXMuYnVzaW5lc3MuZGVsaXZlcnkub3BlbiwgdGhpcy5idXNpbmVzcy5kZWxpdmVyeS5jbG9zZSwgNDUpXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfdGltZS51bnNoaWZ0KCdBU0FQJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfdGltZSA9IHRoaXMuJHRpbWVSYW5nZSh0aGlzLmJ1c2luZXNzLmRlbGl2ZXJ5Lm9wZW4sIHRoaXMuYnVzaW5lc3MuZGVsaXZlcnkuY2xvc2UsIDQ1KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRlOiByZXN1bHQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICAgICAgICAgICAgbmFtZTogbW9udGhOYW1lc1tyZXN1bHQuZ2V0TW9udGgoKV0sXG4gICAgICAgICAgICAgICAgZGF5OiByZXN1bHQuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgIGRheV9uYW1lOiBkYXlOYW1lc1tyZXN1bHQuZ2V0RGF5KCldLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXlzIDwgMiA/IGxhYmVsW2RheXNdIDogbGFiZWxbMl0sXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfdGltZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWNhbGN1bGF0ZUZlZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuJHJlZnMuZ01hcC5tYXAuZ2V0Q2VudGVyKClcbiAgICAgICAgICAgIGNvbnN0IGRsID0ge1xuICAgICAgICAgICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0KCksXG4gICAgICAgICAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2wgPSB7XG4gICAgICAgICAgICAgICAgbGF0OiB0aGlzLml0ZW0uZGVsaXZlcnkuZnJvbS5jb29yZC5sYXQsXG4gICAgICAgICAgICAgICAgbG5nOiB0aGlzLml0ZW0uZGVsaXZlcnkuZnJvbS5jb29yZC5sbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhZG1pbi9nZXRBcmVhQnlMb2NhdGlvbicsIHtcbiAgICAgICAgICAgICAgICBsYXQ6IHRoaXMuaXRlbS5kZWxpdmVyeS5mcm9tLmNvb3JkLmxhdCxcbiAgICAgICAgICAgICAgICBsbmc6IHRoaXMuaXRlbS5kZWxpdmVyeS5mcm9tLmNvb3JkLmxuZ1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXhpb3MuJGdldCgnL2Rpc3RhbmNlLycsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5zOiBzbC5sYXQgKyAnLCcgKyBzbC5sbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbnM6IGRsLmxhdCArICcsJyArIGRsLmxuZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FJemFTeURYLWF0b0xtNm5RcE1nUV9HWUhJbzFraXNjQWU1dHhYYydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QuZGlzdGFuY2VfcGxhdGZvcm0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZGVyID0gcGFyc2VGbG9hdCh0aGlzLmRmLmZlZXMuZm9vZC5kaXN0YW5jZV9yaWRlcilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWQgPSBwYXJzZUZsb2F0KHRoaXMuZGYuZmVlcy5mb29kLm1pbl9kaXN0YW5jZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluX2RmID0gcGFyc2VGbG9hdCh0aGlzLmRmLmZlZXMuZm9vZC5taW5fZGYpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZC5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkX3JpZGVyX2ZlZSA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QucmlkZXJfZml4ZWRfZmVlKVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGYgPSAwXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSAvIDEwMDAgPCBtZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGYgPSBtaW5fZGZcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtdWx0aXBsaWVyID0gZGlzdGFuY2UgLyAxMDAwIC0gbWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsaWVyIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gTWF0aC5mbG9vcihtdWx0aXBsaWVyKSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGRmID0gKHJpZGVyICsgcGxhdGZvcm0pICogbXVsdGlwbGllciArIG1pbl9kZlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlX2FjdHVhbCA9IHBhcnNlRmxvYXQoZC5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlLnZhbHVlIC8gMTAwMCkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmlkZXJfZGYgPSAwXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZV9hY3R1YWwgPD0gbWQpIHJpZGVyX2RmID0gZml4ZWRfcmlkZXJfZmVlXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmlkZXJfZGYgPSBmaXhlZF9yaWRlcl9mZWUgKyAoKGRpc3RhbmNlX2FjdHVhbCAtIG1kKSAqIHJpZGVyKVxuICAgICAgICAgICAgICAgICAgICByaWRlcl9kZiA9IE1hdGguZmxvb3IocmlkZXJfZGYpXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF0Zm9ybV9kZiA9IE1hdGguZmxvb3IoZGYgLSByaWRlcl9kZilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRoaXMuaXRlbS5hbW91bnQub3JkZXJfdmFsdWUpICsgcmlkZXJfZGYgKyBwbGF0Zm9ybV9kZiArIHBhcnNlRmxvYXQodGhpcy5pdGVtLmFtb3VudC5zYy5tYXJrdXApXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVfZGF0YSA9IGNsb25lRGVlcCh0aGlzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1cGRhdGVfZGF0YS5pZFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVfZGF0YS5hbW91bnQudGlwID0gTWF0aC5yb3VuZCh0aGlzLnJpZGVyX3RpcClcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlX2RhdGEuYW1vdW50LmRlbGl2ZXJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtX2RmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlkZXI6IHJpZGVyX2RmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlX2RhdGEuYW1vdW50LmdyYW5kdG90YWwgPSB0b3RhbFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVfZGF0YS5kZWxpdmVyeS5kaXN0YW5jZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkOiBwYXJzZUZsb2F0KE1hdGguZmxvb3IoZC5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlLnZhbHVlIC8gMTAwMCkgKyAxKS50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwYXJzZUZsb2F0KGQucm93c1swXS5lbGVtZW50c1swXS5kaXN0YW5jZS52YWx1ZSAvIDEwMDApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVfZGF0YS5kZWxpdmVyeS50byA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuZmFyZS5kZWxpdmVyeV9hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGRsLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IGRsLmxuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6IHRoaXMuZmFyZS51bml0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9kYXRhLmRlbGl2ZXJ5LnJpZGVyX25vdGUgPSB0aGlzLmZhcmUubm90ZXRvcmlkZXJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlX2RhdGEuY29vcmRpbmF0ZXMgPSBuZXcgdGhpcy4kZmlyZVN0b3JlT2JqLkdlb1BvaW50KGRsLmxhdCwgZGwubG5nKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSB0aGlzLiRmaXJlU3RvcmVPYmooKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9jb2xsZWN0aW9uID0gbmV3IEdlb0NvbGxlY3Rpb25SZWZlcmVuY2UoZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ29yZGVycycpKVxuICAgICAgICAgICAgICAgICAgICBnZW9jb2xsZWN0aW9uLmRvYyh0aGlzLml0ZW0uaWQpLnVwZGF0ZSh1cGRhdGVfZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyU2hlZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvID0gJ0RlbGl2ZXJ5IGRldGFpbHMgYW5kIGZlZXMgdXBkYXRlZC4nXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNlbnRlckNoYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy4kcmVmcy5nTWFwLm1hcC5nZXRDZW50ZXIoKVxuICAgICAgICAgICAgdGhpcy4kcmVmcy5nbWFwbWFya2VyLm1hcmtlci5zZXRQb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQoKSxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzZXRDb250YWN0SW5mbygpIHtcbiAgICAgICAgICAgIHRoaXMuJGZpcmVTdG9yZU9iaigpLmNvbGxlY3Rpb24oJ29yZGVycycpLmRvYyh0aGlzLml0ZW0uaWQpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgJ2Qub3JkZXIuYnkub3RoZXJDb250YWN0JzogdGhpcy5vdGhlckNvbnRhY3RcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJTaGVldCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvID0gJ0NvbnRhY3QgSW5mb3JtYXRpb24gdXBkYXRlZCdcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsT3JkZXIoKSB7XG4gICAgICAgICAgICB0aGlzLiRmaXJlU3RvcmVPYmooKS5jb2xsZWN0aW9uKCdvcmRlcnMnKS5kb2ModGhpcy5pdGVtLmlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICdkLnN0YXR1cyc6ICdjYW5jZWxsZWQnXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyU2hlZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaW5mbyA9ICdPcmRlciBpcyBub3cgY2FuY2VsbGVkJ1xuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlQWRkT25zKGl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHR4dCA9IFtdXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIE9iamVjdC5lbnRyaWVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dC5wdXNoKGEubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0eHQucHVzaCh2YWx1ZS5uYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXMgPSAndy8gJ1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXMgPSByZXMgKyB0eHRbaV0gKyAnLCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuc3Vic3RyaW5nKDAsIHJlcy5sZW5ndGggLSAxKVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlVG90YWwoaXRlbSkge1xuICAgICAgICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIGl0ZW0uaW5mby5iYXNlX3ByaWNlICogaXRlbS5xdHlcbiAgICAgICAgICAgIGNvbnN0IGFkZG9ucyA9IE9iamVjdC52YWx1ZXMoaXRlbS5hZGRfb25zKVxuICAgICAgICAgICAgYWRkb25zLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgICAgICAgICBhLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBiLnByaWNlICogaXRlbS5xdHlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgYS5wcmljZSAqIGl0ZW0ucXR5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFxuICAgICAgICB9XG4gICAgfVxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgICAgICAgLmJlc3RzZWxsZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5tYXBjb250YWluZXIsXG4gIC5HTWFwLFxuICAuR01hcF9fV3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLm1hcGNvbnRhaW5lcixcbiAgICAgICAgLkdNYXAsXG4gICAgICAgIC5HTWFwX19XcmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3JkZXJDYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOGIzNTg2NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9PcmRlckNhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9PcmRlckNhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIHZhciBzdHlsZTAgPSByZXF1aXJlKFwiLi9PcmRlckNhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDhiMzU4NjYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpXG5pZiAoc3R5bGUwLl9faW5qZWN0X18pIHN0eWxlMC5fX2luamVjdF9fKGNvbnRleHQpXG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBcImQ4YjM1ODY2XCIsXG4gIFwiMDJjY2RkZjRcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHNcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQm90dG9tU2hlZXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCb3R0b21TaGVldCc7XG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRpYWxvZyc7XG5pbXBvcnQgeyBWRGl2aWRlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRpdmlkZXInO1xuaW1wb3J0IHsgVkV4cGFuc2lvblBhbmVsIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WRXhwYW5zaW9uUGFuZWwnO1xuaW1wb3J0IHsgVkV4cGFuc2lvblBhbmVsQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkV4cGFuc2lvblBhbmVsJztcbmltcG9ydCB7IFZFeHBhbnNpb25QYW5lbEhlYWRlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkV4cGFuc2lvblBhbmVsJztcbmltcG9ydCB7IFZFeHBhbnNpb25QYW5lbHMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbCc7XG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJY29uJztcbmltcG9ydCB7IFZJbWcgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJbWcnO1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkxpc3QgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQWN0aW9uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1BdmF0YXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUNvbnRlbnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUdyb3VwIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1TdWJ0aXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZQcm9ncmVzc0xpbmVhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyJztcbmltcG9ydCB7IFZSb3cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTZWxlY3QgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTZWxlY3QnO1xuaW1wb3J0IHsgVlNuYWNrYmFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU25hY2tiYXInO1xuaW1wb3J0IHsgVlNwYWNlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVlN1YmhlYWRlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlN1YmhlYWRlcic7XG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dEZpZWxkJztcbmltcG9ydCB7IFZUZXh0YXJlYSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRleHRhcmVhJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCb3R0b21TaGVldCxWQnRuLFZDYXJkLFZDYXJkQWN0aW9ucyxWQ2FyZFRleHQsVkNhcmRUaXRsZSxWQ29udGFpbmVyLFZEaWFsb2csVkRpdmlkZXIsVkV4cGFuc2lvblBhbmVsLFZFeHBhbnNpb25QYW5lbENvbnRlbnQsVkV4cGFuc2lvblBhbmVsSGVhZGVyLFZFeHBhbnNpb25QYW5lbHMsVkZsZXgsVkljb24sVkltZyxWTGF5b3V0LFZMaXN0LFZMaXN0SXRlbSxWTGlzdEl0ZW1BY3Rpb24sVkxpc3RJdGVtQXZhdGFyLFZMaXN0SXRlbUNvbnRlbnQsVkxpc3RJdGVtR3JvdXAsVkxpc3RJdGVtU3VidGl0bGUsVkxpc3RJdGVtVGl0bGUsVlByb2dyZXNzTGluZWFyLFZSb3csVlNlbGVjdCxWU25hY2tiYXIsVlNwYWNlcixWU3ViaGVhZGVyLFZUZXh0RmllbGQsVlRleHRhcmVhfSlcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcIm1hLTFcIixhdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibGczXCI6XCJcIn19LFtfYygndi1jYXJkJyx7c3RhdGljQ2xhc3M6XCJteC1hdXRvXCIsYXR0cnM6e1wibWF4LXdpZHRoXCI6XCI0MDBcIn19LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiYmVzdHNlbGxlciBtYi01XCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnN0YXR1cy50b1VwcGVyQ2FzZSgpKSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsWyhfdm0uaXRlbS5yaWRlciAhPT0gJ3VuYXNzaWduZWQnICYmIF92bS5jaGVja0lmT25nb2luZyhfdm0uaXRlbS5zdGF0dXMpKT9fYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1saXN0Jyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbScse3N0YXRpY0NsYXNzOlwiZ3Jvd1wiLGF0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihfdm0uX3MoX3ZtLnJpZGVyX3Byb2ZpbGUucHJvZmlsZS5maXJzdG5hbWUpK1wiIFwiK192bS5fcyhfdm0ucmlkZXJfcHJvZmlsZS5wcm9maWxlLmxhc3RuYW1lKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIllvdXIgcmlkZXJcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJpY29uXCI6XCJcIixcImRlbnNlXCI6XCJcIixcImhyZWZcIjpcInRlbDpcIitfdm0ucmlkZXJfcHJvZmlsZS5jb250YWN0fX0sW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwiYmx1ZVwifX0sW192bS5fdihcIiBtZGktcGhvbmUgXCIpXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScse3N0YXRpY0NsYXNzOlwiZ3Jvd1wiLGF0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihfdm0uX3MoX3ZtLiRnZXROb3coX3ZtLml0ZW0ubG9nc1tfdm0uaXRlbS5sb2dzLmxlbmd0aC0xXS50aW1lKS5zdWJzdHJpbmcoMTApKStcIiBcIitfdm0uX3MoX3ZtLml0ZW0ubG9nc1tfdm0uaXRlbS5sb2dzLmxlbmd0aC0xXS5ldmVudCkpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCJMYXRlc3QgU3RhdHVzIFVwZGF0ZVwiKV0pXSwxKV0sMSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxheW91dCcse3N0YXRpY0NsYXNzOlwibXQtNVwiLGF0dHJzOntcIndyYXBcIjpcIlwifX0sWyhfdm0uaXRlbS5yaWRlciA9PT0gJ3VuYXNzaWduZWQnICYmIF92bS5jaGVja0lmT25nb2luZyhfdm0uaXRlbS5zdGF0dXMpKT9fYygndi1saXN0LWl0ZW0nLHtzdGF0aWNDbGFzczpcImdyb3dcIixhdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCIgV2FpdGluZyBmb3IgcmlkZXIgdG8gYWNjZXB0IHRoZSBqb2IuLi4gXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1wcm9ncmVzcy1saW5lYXInLHthdHRyczp7XCJpbmRldGVybWluYXRlXCI6XCJcIixcImNvbG9yXCI6XCJjeWFuXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCJZb3VyIHJpZGVyXCIpXSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX2MoJ3N0cm9uZycsW192bS5fdihcIlJlcXVlc3QgTm8uXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uaWQpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM2XCI6XCJcIixcInNtNlwiOlwiXCIsXCJtZDZcIjpcIlwifX0sW19jKCdzdHJvbmcnLFtfdm0uX3YoXCJBcHBvaW5tZW50IFRpbWVcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5hcHBvaW50bWVudC5kYXRlKStcIiBcIitfdm0uX3MoX3ZtLml0ZW0uYXBwb2ludG1lbnQudGltZSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX2MoJ3N0cm9uZycsW192bS5fdihcIlNlcnZpY2UgRmVlXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLml0ZW0uZmVlcy5zZikpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM2XCI6XCJcIixcInNtNlwiOlwiXCIsXCJtZDZcIjpcIlwifX0sW192bS5fdihcIlBpY2t1cCBGZWUgLVxcbiAgICAgICAgICAgICAgICAgICAgXCIpLF9jKCdzbWFsbCcsW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uZmVlcy5waWNrdXAuZGlzdGFuY2UpK1wiIGttXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLml0ZW0uZmVlcy5waWNrdXAuZmVlcy5wbGF0Zm9ybSArIF92bS5pdGVtLmZlZXMucGlja3VwLmZlZXMucmlkZXIpKSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfdm0uX3YoXCJEZWxpdmVyeSBGZWUgLVxcbiAgICAgICAgICAgICAgICAgICAgXCIpLF9jKCdzbWFsbCcsW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uZmVlcy5kcm9wb2ZmLmRpc3RhbmNlKStcIiBrbVwiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM2XCI6XCJcIixcInNtNlwiOlwiXCIsXCJtZDZcIjpcIlwifX0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5pdGVtLmZlZXMuZHJvcG9mZi5mZWVzLnBsYXRmb3JtICsgX3ZtLml0ZW0uZmVlcy5kcm9wb2ZmLmZlZXMucmlkZXIpKSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwic3ViaGVhZGluZ1wifSxbX2MoJ3N0cm9uZycsW192bS5fdihcIlRvdGFsXCIpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtbC0yIHJlZC0tdGV4dFwifSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLml0ZW0uZmVlcy5waWNrdXAuZmVlcy5wbGF0Zm9ybSArIF92bS5pdGVtLmZlZXMucGlja3VwLmZlZXMucmlkZXIgKyBfdm0uaXRlbS5mZWVzLmRyb3BvZmYuZmVlcy5wbGF0Zm9ybSArIF92bS5pdGVtLmZlZXMuZHJvcG9mZi5mZWVzLnJpZGVyICsgX3ZtLml0ZW0uZmVlcy5zZikpKV0pXSldKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3YtbGlzdC1pdGVtJyx7c3RhdGljQ2xhc3M6XCJncm93XCIsYXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1hdmF0YXInLHthdHRyczp7XCJjb2xvclwiOlwiZ3JleSBkYXJrZW4tM1wifX0sW19jKCd2LWltZycse3N0YXRpY0NsYXNzOlwiZWxldmF0aW9uLTZcIixhdHRyczp7XCJzcmNcIjpfdm0uaXRlbS5iaWxsZXIubG9nb319KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLml0ZW0uYmlsbGVyLm5hbWUpK1wiIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uaXRlbS5iaWxsZXIuYnJhbmNoKStcIiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbKF92bS5jaGVja0lmT25nb2luZyhfdm0uaXRlbS5zdGF0dXMpKT9fYygndi1idG4nLHthdHRyczp7XCJzbWFsbFwiOlwiXCIsXCJkZW5zZVwiOlwiXCIsXCJ0ZXh0XCI6XCJcIixcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uZGlhbG9nID0gdHJ1ZX19fSxbX3ZtLl92KFwiIENhbmNlbCBcIildKTpfdm0uX2UoKV0sMSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1yb3cnLHthdHRyczp7XCJqdXN0aWZ5XCI6XCJjZW50ZXJcIn19LFtfYygndi1kaWFsb2cnLHthdHRyczp7XCJwZXJzaXN0ZW50XCI6XCJcIixcIm1heC13aWR0aFwiOlwiMjkwXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmRpYWxvZyksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5kaWFsb2c9JCR2fSxleHByZXNzaW9uOlwiZGlhbG9nXCJ9fSxbX2MoJ3YtY2FyZCcsW19jKCd2LWNhcmQtdGl0bGUnLHtzdGF0aWNDbGFzczpcImhlYWRsaW5lXCJ9LFtfdm0uX3YoXCJBcHBvaW50bWVudCBDYW5jZWxsYXRpb25cIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW192bS5fdihcIllvdSBjYW4gY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXMgbG9uZyBhcyBubyByaWRlciBhY2NlcHRlZCB0aGUgam9iLlwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwiZ3JlZW4gZGFya2VuLTFcIixcInRleHRcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmRpYWxvZyA9IGZhbHNlfX19LFtfdm0uX3YoXCIgQ2xvc2UgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwiZ3JlZW4gZGFya2VuLTFcIixcInRleHRcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmNhbmNlbEFwcG9pbnRtZW50KCksIChfdm0uZGlhbG9nID0gZmFsc2UpfX19LFtfdm0uX3YoXCJZZXMsIENhbmNlbFwiKV0pXSwxKV0sMSldLDEpXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgICA8di1mbGV4IHhzMTIgbWQ0IHNtNCBsZzMgY2xhc3M9XCJtYS0xXCI+XG4gICAgICAgIDx2LWNhcmQgY2xhc3M9XCJteC1hdXRvXCIgbWF4LXdpZHRoPVwiNDAwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlc3RzZWxsZXIgbWItNVwiPnt7IGl0ZW0uc3RhdHVzLnRvVXBwZXJDYXNlKCkgfX08L3NwYW4+XG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zIHYtaWY9XCJpdGVtLnJpZGVyICE9PSAndW5hc3NpZ25lZCcgJiYgY2hlY2tJZk9uZ29pbmcoaXRlbS5zdGF0dXMpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxpc3QgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gZGVuc2UgY2xhc3M9XCJncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT57e3JpZGVyX3Byb2ZpbGUucHJvZmlsZS5maXJzdG5hbWV9fSB7e3JpZGVyX3Byb2ZpbGUucHJvZmlsZS5sYXN0bmFtZX19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5Zb3VyIHJpZGVyPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gZGVuc2UgOmhyZWY9XCJgdGVsOmArcmlkZXJfcHJvZmlsZS5jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJibHVlXCI+IG1kaS1waG9uZSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZSBjbGFzcz1cImdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7JGdldE5vdyhpdGVtLmxvZ3NbaXRlbS5sb2dzLmxlbmd0aC0xXS50aW1lKS5zdWJzdHJpbmcoMTApfX0ge3tpdGVtLmxvZ3NbaXRlbS5sb2dzLmxlbmd0aC0xXS5ldmVudH19PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPkxhdGVzdCBTdGF0dXMgVXBkYXRlPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwIGNsYXNzPVwibXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gZGVuc2UgY2xhc3M9XCJncm93XCIgdi1pZj1cIml0ZW0ucmlkZXIgPT09ICd1bmFzc2lnbmVkJyAmJiBjaGVja0lmT25nb2luZyhpdGVtLnN0YXR1cylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4gV2FpdGluZyBmb3IgcmlkZXIgdG8gYWNjZXB0IHRoZSBqb2IuLi4gPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1wcm9ncmVzcy1saW5lYXIgaW5kZXRlcm1pbmF0ZSBjb2xvcj1cImN5YW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5Zb3VyIHJpZGVyPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgc202IG1kNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UmVxdWVzdCBOby48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGl0ZW0uaWQgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFwcG9pbm1lbnQgVGltZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgc202IG1kNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgaXRlbS5hcHBvaW50bWVudC5kYXRlIH19IHt7aXRlbS5hcHBvaW50bWVudC50aW1lfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlNlcnZpY2UgRmVlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBzbTYgbWQ2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBpdGVtLmZlZXMuc2YgfCB0b1BIUCB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgc202IG1kNj5QaWNrdXAgRmVlIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57eyBpdGVtLmZlZXMucGlja3VwLmRpc3RhbmNlfX0ga208L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgc202IG1kNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgaXRlbS5mZWVzLnBpY2t1cC5mZWVzLnBsYXRmb3JtICsgaXRlbS5mZWVzLnBpY2t1cC5mZWVzLnJpZGVyIHwgdG9QSFAgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+RGVsaXZlcnkgRmVlIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57eyBpdGVtLmZlZXMuZHJvcG9mZi5kaXN0YW5jZX19IGttPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGl0ZW0uZmVlcy5kcm9wb2ZmLmZlZXMucGxhdGZvcm0gKyBpdGVtLmZlZXMuZHJvcG9mZi5mZWVzLnJpZGVyIHwgdG9QSFAgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRvdGFsPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBzbTYgbWQ2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTIgcmVkLS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBpdGVtLmZlZXMucGlja3VwLmZlZXMucGxhdGZvcm0gKyBpdGVtLmZlZXMucGlja3VwLmZlZXMucmlkZXIgKyBpdGVtLmZlZXMuZHJvcG9mZi5mZWVzLnBsYXRmb3JtICsgaXRlbS5mZWVzLmRyb3BvZmYuZmVlcy5yaWRlciArIGl0ZW0uZmVlcy5zZiB8IHRvUEhQIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlIGNsYXNzPVwiZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYXZhdGFyIGNvbG9yPVwiZ3JleSBkYXJrZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaW1nIGNsYXNzPVwiZWxldmF0aW9uLTZcIiA6c3JjPVwiaXRlbS5iaWxsZXIubG9nb1wiIC8+IDwvdi1saXN0LWl0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4ge3sgaXRlbS5iaWxsZXIubmFtZSB9fSA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPiB7eyBpdGVtLmJpbGxlci5icmFuY2ggfX0gPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHNtYWxsIGRlbnNlIHYtaWY9XCJjaGVja0lmT25nb2luZyhpdGVtLnN0YXR1cylcIiB0ZXh0IGNvbG9yPVwicmVkXCIgQGNsaWNrLnN0b3A9XCJkaWFsb2cgPSB0cnVlXCI+IENhbmNlbCA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDx2LXJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIHBlcnNpc3RlbnQgbWF4LXdpZHRoPVwiMjkwXCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cImhlYWRsaW5lXCI+QXBwb2ludG1lbnQgQ2FuY2VsbGF0aW9uPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5Zb3UgY2FuIGNhbmNlbCB5b3VyIGFwcG9pbnRtZW50IGFzIGxvbmcgYXMgbm8gcmlkZXIgYWNjZXB0ZWQgdGhlIGpvYi48L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJkaWFsb2cgPSBmYWxzZVwiPiBDbG9zZSA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiB0ZXh0IEBjbGljaz1cImNhbmNlbEFwcG9pbnRtZW50KCksIChkaWFsb2cgPSBmYWxzZSlcIj5ZZXMsIENhbmNlbDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICA8L3YtZGlhbG9nPlxuICAgICAgICA8L3Ytcm93PlxuICAgIDwvdi1mbGV4PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4vL01hbmFnZSBCaWxsZXJcbi8vQ2hhbmdlIFBpY2t1cCBBZGRyZXNzXG4vL0NoYW5nZSBEcm9wIE9mZiBBZGRyZXNzXG4vL0NoYW5nZSBBcHBvaW50bWVudCAgVGltZVxuaW1wb3J0IHtcbiAgICBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlXG59IGZyb20gJ2dlb2ZpcmVzdG9yZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBpdGVtOiBPYmplY3RcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlclNoZWV0OiBmYWxzZSxcbiAgICAgICAgICAgIGluZm86ICcnLFxuICAgICAgICAgICAgc25hY2tiYXI6IGZhbHNlLFxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgICAgIHJpZGVyX3Byb2ZpbGU6IHtcbiAgICAgICAgICAgICAgICBjb250YWN0OiAnJyxcbiAgICAgICAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtLnJpZGVyICE9PSAndW5hc3NpZ25lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmlkZXJJbmZvKClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRSaWRlckluZm8oKSB7XG4gICAgICAgICAgICB2YXIgcmlkZXIgPSBuZXcgR2VvQ29sbGVjdGlvblJlZmVyZW5jZSh0aGlzLiRmaXJlU3RvcmVPYmooKS5jb2xsZWN0aW9uKCdyaWRlcnMnKSlcbiAgICAgICAgICAgIHRoaXMuJGJpbmQoJ3JpZGVyX3Byb2ZpbGUnLCByaWRlci5kb2ModGhpcy5pdGVtLnJpZGVyKSlcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tJZk9uZ29pbmcodmFsKSB7XG4gICAgICAgICAgICBpZiAodmFsID09PSAncGxhY2VkJyB8fCB2YWwgPT09ICdvbmdvaW5nJyB8fCB2YWwgPT09ICdhY2NlcHRlZCcgfHwgdmFsID09PSAnZW5yb3V0ZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsQXBwb2ludG1lbnQoKSB7XG4gICAgICAgICAgICB0aGlzLiRmaXJlU3RvcmVPYmooKS5jb2xsZWN0aW9uKCdiaWxsc3BheV9yZXF1ZXN0JykuZG9jKHRoaXMuaXRlbS5pZCkudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAnZC5zdGF0dXMnOiAnY2FuY2VsbGVkJ1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlclNoZWV0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8gPSAnQXBwb2ludG1lbnQgaXMgbm93IGNhbmNlbGxlZCdcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CaWxsc0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JpbGxzQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0JpbGxzQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDliMDZiMDgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmlsbHNDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmlsbHNDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZjNjMGVkZjhcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHNcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRpYWxvZyc7XG5pbXBvcnQgeyBWRGl2aWRlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRpdmlkZXInO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSW1nJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUFjdGlvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Db250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1TdWJ0aXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZQcm9ncmVzc0xpbmVhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyJztcbmltcG9ydCB7IFZSb3cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTcGFjZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCdG4sVkNhcmQsVkNhcmRBY3Rpb25zLFZDYXJkVGV4dCxWQ2FyZFRpdGxlLFZEaWFsb2csVkRpdmlkZXIsVkZsZXgsVkljb24sVkltZyxWTGF5b3V0LFZMaXN0LFZMaXN0SXRlbSxWTGlzdEl0ZW1BY3Rpb24sVkxpc3RJdGVtQXZhdGFyLFZMaXN0SXRlbUNvbnRlbnQsVkxpc3RJdGVtU3VidGl0bGUsVkxpc3RJdGVtVGl0bGUsVlByb2dyZXNzTGluZWFyLFZSb3csVlNwYWNlcn0pXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJtYS0xXCIsYXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDRcIjpcIlwiLFwic200XCI6XCJcIixcImxnM1wiOlwiXCJ9fSxbX2MoJ3YtY2FyZCcse3N0YXRpY0NsYXNzOlwibXgtYXV0b1wiLGF0dHJzOntcIm1heC13aWR0aFwiOlwiNDAwXCJ9fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImJlc3RzZWxsZXIgbWItNVwifSxbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5zdGF0dXMudG9VcHBlckNhc2UoKSkpXSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLXRleHQnLFsoX3ZtLml0ZW0ucmlkZXIgIT09ICd1bmFzc2lnbmVkJyAmJiBfdm0uY2hlY2tJZk9uZ29pbmcoX3ZtLml0ZW0uc3RhdHVzKSk/X2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3YtbGlzdCcse2F0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0nLHtzdGF0aWNDbGFzczpcImdyb3dcIixhdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKF92bS5yaWRlcl9wcm9maWxlLnByb2ZpbGUuZmlyc3RuYW1lKStcIiBcIitfdm0uX3MoX3ZtLnJpZGVyX3Byb2ZpbGUucHJvZmlsZS5sYXN0bmFtZSkrXCIgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCJZb3VyIHJpZGVyXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1wiaWNvblwiOlwiXCIsXCJkZW5zZVwiOlwiXCIsXCJocmVmXCI6XCJ0ZWw6XCIrX3ZtLnJpZGVyX3Byb2ZpbGUuY29udGFjdH19LFtfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcImJsdWVcIn19LFtfdm0uX3YoXCIgbWRpLXBob25lIFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLHtzdGF0aWNDbGFzczpcImdyb3dcIixhdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKF92bS4kZ2V0Tm93KF92bS5pdGVtLmxvZ3NbX3ZtLml0ZW0ubG9ncy5sZW5ndGgtMV0udGltZSkuc3Vic3RyaW5nKDEwKSkrXCIgXCIrX3ZtLl9zKF92bS4kaXRlbS5sb2dzW192bS5pdGVtLmxvZ3MubGVuZ3RoLTFdLmV2ZW50KSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIkxhdGVzdCBTdGF0dXMgVXBkYXRlXCIpXSldLDEpXSwxKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtbGF5b3V0Jyx7c3RhdGljQ2xhc3M6XCJtdC01XCIsYXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbKF92bS5pdGVtLnJpZGVyID09PSAndW5hc3NpZ25lZCcgJiYgX3ZtLmNoZWNrSWZPbmdvaW5nKF92bS5pdGVtLnN0YXR1cykpP19jKCd2LWxpc3QtaXRlbScse3N0YXRpY0NsYXNzOlwiZ3Jvd1wiLGF0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIiBXYWl0aW5nIGZvciByaWRlciB0byBhY2NlcHQgdGhlIGpvYi4uLiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXByb2dyZXNzLWxpbmVhcicse2F0dHJzOntcImluZGV0ZXJtaW5hdGVcIjpcIlwiLFwiY29sb3JcIjpcImN5YW5cIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIllvdXIgcmlkZXJcIildKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfYygnc3Ryb25nJyxbX3ZtLl92KFwiUmVxdWVzdCBOby5cIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5pZCkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX3ZtLl92KFwiIFdpdGggUHJpY2UgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM2XCI6XCJcIixcInNtNlwiOlwiXCIsXCJtZDZcIjpcIlwifX0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5nZXRUb3RhbCgpLnRvdGFsKSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX3ZtLl92KFwiIFByb2dyZXNzIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfYygnc3Ryb25nJyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dFwifSxbX3ZtLl92KF92bS5fcyhfdm0uZ2V0VG90YWwoKS5kb25lKStcIi9cIitfdm0uX3MoX3ZtLml0ZW0uaXRlbXMubGVuZ3RoKSldKSxfdm0uX3YoXCIgaXRlbXMgZmluaXNoXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX3ZtLl92KFwiRGVsaXZlcnkgRmVlIC1cXG4gICAgICAgICAgICAgICAgICAgIFwiKSxfYygnc21hbGwnLFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmRlbGl2ZXIuZGlzdGFuY2UuY29tcHV0ZWQpK1wiIGttXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLml0ZW0uZmVlcy5kZWxpdmVyeS5wbGF0Zm9ybSArIF92bS5pdGVtLmZlZXMuZGVsaXZlcnkucmlkZXIpKSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfYygnc3Ryb25nJyxbX3ZtLl92KFwiU2VydmljZSBGZWVcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIn19LFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfdm0uZ2V0VG90YWwoKS5zYykpK1wiIChcIitfdm0uX3MoX3ZtLml0ZW0uZmVlcy5zYykrXCIgJSkgXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInN1YmhlYWRpbmdcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoXCJUb3RhbFwiKV0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czZcIjpcIlwiLFwic202XCI6XCJcIixcIm1kNlwiOlwiXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibWwtMiByZWQtLXRleHRcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5pdGVtLmZlZXMuZGVsaXZlcnkucGxhdGZvcm0gKyBfdm0uaXRlbS5mZWVzLmRlbGl2ZXJ5LnJpZGVyICsgX3ZtLmdldFRvdGFsKCkuc2MgKyBfdm0uZ2V0VG90YWwoKS50b3RhbCkpKV0pXSldKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3YtbGlzdC1pdGVtJyx7c3RhdGljQ2xhc3M6XCJncm93XCIsYXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1hdmF0YXInLHthdHRyczp7XCJjb2xvclwiOlwiZ3JleSBkYXJrZW4tM1wifX0sW19jKCd2LWltZycse3N0YXRpY0NsYXNzOlwiZWxldmF0aW9uLTZcIixhdHRyczp7XCJzcmNcIjpfdm0uaXRlbS5zdG9yZS5sb2dvfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uaXRlbS5zdG9yZS5uYW1lKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLml0ZW0uc3RvcmUuYnJhbmNoKStcIiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbKF92bS5jaGVja0lmT25nb2luZyhfdm0uaXRlbS5zdGF0dXMpKT9fYygndi1idG4nLHthdHRyczp7XCJzbWFsbFwiOlwiXCIsXCJkZW5zZVwiOlwiXCIsXCJ0ZXh0XCI6XCJcIixcImNvbG9yXCI6XCJibHVlXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLm9yZGVyU2hlZXQgPSB0cnVlfX19LFtfdm0uX3YoXCIgTWFuYWdlIFwiKV0pOl92bS5fZSgpXSwxKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXJvdycse2F0dHJzOntcImp1c3RpZnlcIjpcImNlbnRlclwifX0sW19jKCd2LWRpYWxvZycse2F0dHJzOntcInBlcnNpc3RlbnRcIjpcIlwiLFwibWF4LXdpZHRoXCI6XCIyOTBcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZGlhbG9nKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmRpYWxvZz0kJHZ9LGV4cHJlc3Npb246XCJkaWFsb2dcIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10aXRsZScse3N0YXRpY0NsYXNzOlwiaGVhZGxpbmVcIn0sW192bS5fdihcIkFwcG9pbnRtZW50IENhbmNlbGxhdGlvblwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX3ZtLl92KFwiWW91IGNhbiBjYW5jZWwgeW91ciBhcHBvaW50bWVudCBhcyBsb25nIGFzIG5vIHJpZGVyIGFjY2VwdGVkIHRoZSBqb2IuXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJncmVlbiBkYXJrZW4tMVwiLFwidGV4dFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uZGlhbG9nID0gZmFsc2V9fX0sW192bS5fdihcIiBDbG9zZSBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJncmVlbiBkYXJrZW4tMVwiLFwidGV4dFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uY2FuY2VsQXBwb2ludG1lbnQoKSwgKF92bS5kaWFsb2cgPSBmYWxzZSl9fX0sW192bS5fdihcIlllcywgQ2FuY2VsXCIpXSldLDEpXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYm90dG9tLXNoZWV0Jyx7YXR0cnM6e1wiaW5zZXRcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS5vcmRlclNoZWV0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLm9yZGVyU2hlZXQ9JCR2fSxleHByZXNzaW9uOlwib3JkZXJTaGVldFwifX0sW19jKCd2LWxpc3QnLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3Ytc3ViaGVhZGVyJyxbX3ZtLl92KFwiTWFuYWdlIFNob3BwaW5nXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJkaXNhYmxlZFwiOl92bS5pdGVtLnN0YXR1cyAhPSAncGxhY2VkJ30sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uZGlhbG9nID0gdHJ1ZX19fSxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiQ2FuY2VsIFNob3BwaW5nXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiZGlzYWJsZWRcIjpfdm0uaXRlbS5zdGF0dXMgPT0gJ3BsYWNlZCd9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmJzUW91dGUgPSB0cnVlfX19LFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCJUcmFjayBJdGVtIFByaWNlc1wiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYm90dG9tLXNoZWV0Jyx7bW9kZWw6e3ZhbHVlOihfdm0uYWRkTmV3SXRlbSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5hZGROZXdJdGVtPSQkdn0sZXhwcmVzc2lvbjpcImFkZE5ld0l0ZW1cIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10aXRsZScsW192bS5fdihfdm0uX3MoX3ZtLm1vZGU9PSdhZGQnID8gJ0FkZCBJdGVtIHRvIExpc3QnIDogJ0VkaXQgSXRlbScpKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LFtfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCIsXCJzbTEyXCI6XCJcIixcImxnMTJcIjpcIlwifX0sW19jKCd2LXRleHRhcmVhJyx7YXR0cnM6e1wicm93c1wiOlwiM1wiLFwibGFiZWxcIjpcIkl0ZW0gZGVzY3JpcHRpb25cIixcIm91dGxpbmVkXCI6XCJcIixcInBsYWNlaG9sZGVyXCI6XCJlZy4gQnJhbmQsIENvbG9yLCBldGMuXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnNob3BpdGVtLmRlc2MpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc2hvcGl0ZW0sIFwiZGVzY1wiLCAkJHYpfSxleHByZXNzaW9uOlwic2hvcGl0ZW0uZGVzY1wifX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyXCIsYXR0cnM6e1wieHM0XCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibGc0XCI6XCJcIn19LFtfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1widHlwZVwiOlwibnVtYmVyXCIsXCJsYWJlbFwiOlwiTWVhc3VyZVwiLFwiZGVuc2VcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS5zaG9waXRlbS5tZWFzdXJlKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnNob3BpdGVtLCBcIm1lYXN1cmVcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInNob3BpdGVtLm1lYXN1cmVcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzNFwiOlwiXCIsXCJtZDRcIjpcIlwiLFwic200XCI6XCJcIixcImxnNFwiOlwiXCJ9fSxbX2MoJ3Ytc2VsZWN0Jyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwiLFwiZmxhdFwiOlwiXCIsXCJpdGVtc1wiOl92bS51bml0cyxcImxhYmVsXCI6XCJVbml0XCIsXCJpdGVtLXRleHRcIjpcIm5hbWVcIixcIml0ZW0tdmFsdWVcIjpcInZhbHVlXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnNob3BpdGVtLnVuaXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc2hvcGl0ZW0sIFwidW5pdFwiLCAkJHYpfSxleHByZXNzaW9uOlwic2hvcGl0ZW0udW5pdFwifX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyXCIsYXR0cnM6e1wieHM0XCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibGc0XCI6XCJcIn19LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY2FwdGlvbiBncmV5LS10ZXh0XCJ9LFtfdm0uX3YoXCIgUXR5IFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtaWNvbicse3N0YXRpY0NsYXNzOlwid2hpdGUtLXRleHRcIixhdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uc2hvcGl0ZW0ucXR5ID0gX3ZtLnNob3BpdGVtLnF0eSA8IDEgPyAxIDogX3ZtLnNob3BpdGVtLnF0eSAtIDF9fX0sW192bS5fdihcIiBtZGktbWludXMgXCIpXSksX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uc2hvcGl0ZW0ucXR5KStcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSxfYygndi1pY29uJyx7c3RhdGljQ2xhc3M6XCJ3aGl0ZS0tdGV4dFwiLGF0dHJzOntcImNvbG9yXCI6XCJncmVlblwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLnNob3BpdGVtLnF0eSA9IF92bS5zaG9waXRlbS5xdHkgKyAxfX19LFtfdm0uX3YoXCIgbWRpLXBsdXMgXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1idG4nLHtzdGF0aWNDbGFzczpcInNob3ByZXNwb25zaXZlXCIsYXR0cnM6e1wib3V0bGluZWRcIjpcIlwiLFwidGV4dFwiOlwiXCIsXCJjb2xvclwiOlwiYmx1ZVwiLFwiYmxvY2tcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5hZGRJdGVtKCksIF92bS5hZGROZXdJdGVtID0gZmFsc2V9fX0sW192bS5fdihfdm0uX3MoX3ZtLm1vZGU9PSdhZGQnID8gJ0FkZCBUbyBMaXN0JyA6ICdVcGRhdGUgSXRlbScpKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYm90dG9tLXNoZWV0Jyx7YXR0cnM6e1wiZnVsbHNjcmVlblwiOlwiXCIsXCJwZXJzaXN0ZW50XCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0uYnNRb3V0ZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5ic1FvdXRlPSQkdn0sZXhwcmVzc2lvbjpcImJzUW91dGVcIn19LFtfYygndi1jYXJkJyx7c3RhdGljU3R5bGU6e1wiaGVpZ2h0XCI6XCIxMDB2aFwifX0sW19jKCd2LWNhcmQtdGl0bGUnLFtfdm0uX3YoXCJQcmljZSBUcmFja2luZ1wiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1zdWJ0aXRsZScsW192bS5fdihcIlRhcCBvciBDbGljayBJdGVtIHRvIEVkaXRcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCdzbWFsbCcsW192bS5fdihcIllvdSBjYW5ub3QgcmVtb3ZlIG9yIGVkaXQgaXRlbXMgbWFya2VkIGFzXFxuICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3N0cm9uZycsW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJyZWQtLXRleHRcIn0sW192bS5fdihcIlBBSURcIildKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0Jyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwiLFwidGhyZWUtbGluZVwiOlwiXCJ9fSxfdm0uX2woKF92bS5pdGVtLml0ZW1zKSxmdW5jdGlvbihfaXRlbSxpbmRleCl7cmV0dXJuIF9jKCd2LWxpc3QtaXRlbS1ncm91cCcse2tleTppbmRleH0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJiZXN0c2VsbGVyXCJ9LFtfdm0uX3YoX3ZtLl9zKF9pdGVtLnN0YXR1cy50b1VwcGVyQ2FzZSgpKSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScse2F0dHJzOntcImRlbnNlXCI6XCJcIixcImRpc2FibGVkXCI6X2l0ZW0uc3RhdHVzPT09J3BhaWQnfX0sW19jKCd2LWxpc3QtaXRlbS1jb250ZW50Jyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uaXRlbV9jb3B5ID0gT2JqZWN0LmFzc2lnbih7fSxfaXRlbSksIF92bS5zaG9waXRlbSA9IE9iamVjdC5hc3NpZ24oe30sX2l0ZW0pLCBfdm0ubW9kZT0gJ2VkaXQnLCBfdm0uYWRkTmV3SXRlbSA9IHRydWV9fX0sW19jKCd2LWxpc3QtaXRlbS10aXRsZScse2RvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKF9pdGVtLmRlc2MpfX0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyx7c3RhdGljQ2xhc3M6XCJibHVlLS10ZXh0XCJ9LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF9pdGVtLm1lYXN1cmUpK1wiIFwiK192bS5fcyhfaXRlbS51bml0KStcIiB4IFwiK192bS5fcyhfaXRlbS5xdHkpK1wiID0gXCIrX3ZtLl9zKF9pdGVtLm1lYXN1cmUgKiBfaXRlbS5xdHkpK1wiIFwiK192bS5fcyhfaXRlbS51bml0KStcIiAoXCIrX3ZtLl9zKF9pdGVtLm1lYXN1cmUpK1wiIFwiK192bS5fcyhfaXRlbS51bml0KStcIi91bml0ICkgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dFwifSxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfaXRlbS5wcmljZSkpK1wiIC8gXCIrX3ZtLl9zKF9pdGVtLm1lYXN1cmUpK1wiIFwiK192bS5fcyhfaXRlbS51bml0KStcIiA9IFwiK192bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfaXRlbS5wcmljZSAqIF9pdGVtLnF0eSkpK1wiIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLChfaXRlbS5zdGF0dXMhPT0ncGFpZCcpP19jKCd2LWxpc3QtaXRlbS1hY3Rpb24tdGV4dCcsW19jKCd2LWljb24nLHthdHRyczp7XCJzbWFsbFwiOlwiXCIsXCJjb2xvclwiOlwicmVkXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLnNob3BpdGVtID0gT2JqZWN0LmFzc2lnbih7fSxfaXRlbSksIF92bS5tb2RlPSAnZGVsZXRlJywgX3ZtLmFkZEl0ZW0oKX19fSxbX3ZtLl92KFwiIG1kaS1kZWxldGUgXCIpXSldLDEpOl92bS5fZSgpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKV0sMSl9KSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QnLHthdHRyczp7XCJkZW5zZVwiOlwiXCIsXCJzaW5nbGUtbGluZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5nZXRUb3RhbCgpLnRvdGFsKSkpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCJTaG9wcGluZyBUb3RhbFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmdldFRvdGFsKCkuc2MpKSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIlNlcnZpY2UgRmVlXCIpXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScsW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfdm0uaXRlbS5mZWVzLmRlbGl2ZXJ5LnBsYXRmb3JtICsgX3ZtLml0ZW0uZmVlcy5kZWxpdmVyeS5yaWRlcikpKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiRGVsaXZlcnkgRmVlKFwiK192bS5fcyhfdm0uaXRlbS5kZWxpdmVyLmRpc3RhbmNlLmNvbXB1dGVkKStcIiBrbSlcIildKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLHtzdGF0aWNDbGFzczpcInN1YnRpdGxlLTEgcmVkLS10ZXh0XCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5pdGVtLmZlZXMuZGVsaXZlcnkucGxhdGZvcm0gKyBfdm0uaXRlbS5mZWVzLmRlbGl2ZXJ5LnJpZGVyICsgX3ZtLmdldFRvdGFsKCkuc2MgKyBfdm0uZ2V0VG90YWwoKS50b3RhbCkpKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiR3JhbmR0b3RhbFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZmFiLXRyYW5zaXRpb24nLFtfYygndi1idG4nLHtzdGF0aWNTdHlsZTp7XCJtYXJnaW4tYm90dG9tXCI6XCIxMDBweFwifSxhdHRyczp7XCJjb2xvclwiOlwicGlua1wiLFwiZGFya1wiOlwiXCIsXCJzbWFsbFwiOlwiXCIsXCJhYnNvbHV0ZVwiOlwiXCIsXCJib3R0b21cIjpcIlwiLFwicmlnaHRcIjpcIlwiLFwiZmFiXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0ubW9kZT0nYWRkJywgX3ZtLmFkZE5ld0l0ZW0gPSB0cnVlfX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwic2hvcHJlc3BvbnNpdmVcIixhdHRyczp7XCJvdXRsaW5lZFwiOlwiXCIsXCJ0ZXh0XCI6XCJcIixcImNvbG9yXCI6XCJibHVlXCIsXCJibG9ja1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmJzUW91dGU9ZmFsc2V9fX0sW192bS5fdihcIkNsb3NlXCIpXSldLDEpXSwxKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPHYtZmxleCB4czEyIG1kNCBzbTQgbGczIGNsYXNzPVwibWEtMVwiPlxuICAgICAgICA8di1jYXJkIGNsYXNzPVwibXgtYXV0b1wiIG1heC13aWR0aD1cIjQwMFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZXN0c2VsbGVyIG1iLTVcIj57eyBpdGVtLnN0YXR1cy50b1VwcGVyQ2FzZSgpIH19PC9zcGFuPlxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnMgdi1pZj1cIml0ZW0ucmlkZXIgIT09ICd1bmFzc2lnbmVkJyAmJiBjaGVja0lmT25nb2luZyhpdGVtLnN0YXR1cylcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlIGNsYXNzPVwiZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+e3tyaWRlcl9wcm9maWxlLnByb2ZpbGUuZmlyc3RuYW1lfX0ge3tyaWRlcl9wcm9maWxlLnByb2ZpbGUubGFzdG5hbWV9fSA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+WW91ciByaWRlcjwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIGRlbnNlIDpocmVmPVwiYHRlbDpgK3JpZGVyX3Byb2ZpbGUuY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwiYmx1ZVwiPiBtZGktcGhvbmUgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gZGVuc2UgY2xhc3M9XCJncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT57eyRnZXROb3coaXRlbS5sb2dzW2l0ZW0ubG9ncy5sZW5ndGgtMV0udGltZSkuc3Vic3RyaW5nKDEwKX19IHt7JGl0ZW0ubG9nc1tpdGVtLmxvZ3MubGVuZ3RoLTFdLmV2ZW50fX08L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+TGF0ZXN0IFN0YXR1cyBVcGRhdGU8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwIGNsYXNzPVwibXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gZGVuc2UgY2xhc3M9XCJncm93XCIgdi1pZj1cIml0ZW0ucmlkZXIgPT09ICd1bmFzc2lnbmVkJyAmJiBjaGVja0lmT25nb2luZyhpdGVtLnN0YXR1cylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4gV2FpdGluZyBmb3IgcmlkZXIgdG8gYWNjZXB0IHRoZSBqb2IuLi4gPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1wcm9ncmVzcy1saW5lYXIgaW5kZXRlcm1pbmF0ZSBjb2xvcj1cImN5YW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5Zb3VyIHJpZGVyPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgc202IG1kNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UmVxdWVzdCBOby48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGl0ZW0uaWQgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+IFdpdGggUHJpY2UgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7Z2V0VG90YWwoKS50b3RhbHx0b1BIUH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBzbTYgbWQ2PiBQcm9ncmVzcyA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgc202IG1kNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWQtLXRleHRcIj57e2dldFRvdGFsKCkuZG9uZX19L3t7aXRlbS5pdGVtcy5sZW5ndGh9fTwvc3Bhbj4gaXRlbXMgZmluaXNoPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBzbTYgbWQ2PkRlbGl2ZXJ5IEZlZSAtXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3sgaXRlbS5kZWxpdmVyLmRpc3RhbmNlLmNvbXB1dGVkfX0ga208L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgc202IG1kNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgaXRlbS5mZWVzLmRlbGl2ZXJ5LnBsYXRmb3JtICsgaXRlbS5mZWVzLmRlbGl2ZXJ5LnJpZGVyIHwgdG9QSFAgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IHNtNiBtZDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlNlcnZpY2UgRmVlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBzbTYgbWQ2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57e2dldFRvdGFsKCkuc2N8dG9QSFB9fSAoe3sgaXRlbS5mZWVzLnNjfX0gJSkgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBzbTYgbWQ2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ub3RhbDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgc202IG1kNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0yIHJlZC0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgaXRlbS5mZWVzLmRlbGl2ZXJ5LnBsYXRmb3JtICsgaXRlbS5mZWVzLmRlbGl2ZXJ5LnJpZGVyICsgZ2V0VG90YWwoKS5zYyArIGdldFRvdGFsKCkudG90YWwgfCB0b1BIUCB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZSBjbGFzcz1cImdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWF2YXRhciBjb2xvcj1cImdyZXkgZGFya2VuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWltZyBjbGFzcz1cImVsZXZhdGlvbi02XCIgOnNyYz1cIml0ZW0uc3RvcmUubG9nb1wiIC8+IDwvdi1saXN0LWl0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4ge3sgaXRlbS5zdG9yZS5uYW1lIH19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+IHt7IGl0ZW0uc3RvcmUuYnJhbmNoIH19IDwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBzbWFsbCBkZW5zZSB2LWlmPVwiY2hlY2tJZk9uZ29pbmcoaXRlbS5zdGF0dXMpXCIgdGV4dCBjb2xvcj1cImJsdWVcIiBAY2xpY2suc3RvcD1cIm9yZGVyU2hlZXQgPSB0cnVlXCI+IE1hbmFnZSA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDx2LXJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIHBlcnNpc3RlbnQgbWF4LXdpZHRoPVwiMjkwXCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cImhlYWRsaW5lXCI+QXBwb2ludG1lbnQgQ2FuY2VsbGF0aW9uPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5Zb3UgY2FuIGNhbmNlbCB5b3VyIGFwcG9pbnRtZW50IGFzIGxvbmcgYXMgbm8gcmlkZXIgYWNjZXB0ZWQgdGhlIGpvYi48L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJkaWFsb2cgPSBmYWxzZVwiPiBDbG9zZSA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiB0ZXh0IEBjbGljaz1cImNhbmNlbEFwcG9pbnRtZW50KCksIChkaWFsb2cgPSBmYWxzZSlcIj5ZZXMsIENhbmNlbDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICA8L3YtZGlhbG9nPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cIm9yZGVyU2hlZXRcIiBpbnNldD5cbiAgICAgICAgICAgIDx2LWxpc3QgZGVuc2U+XG4gICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyPk1hbmFnZSBTaG9wcGluZzwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIDpkaXNhYmxlZD1cIml0ZW0uc3RhdHVzICE9ICdwbGFjZWQnXCIgQGNsaWNrLnN0b3A9XCJkaWFsb2cgPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT5DYW5jZWwgU2hvcHBpbmc8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIDpkaXNhYmxlZD1cIml0ZW0uc3RhdHVzID09ICdwbGFjZWQnXCIgQGNsaWNrLnN0b3A9XCJic1FvdXRlID0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+VHJhY2sgSXRlbSBQcmljZXM8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPCEtLSAgPHYtbGlzdC1pdGVtIDpkaXNhYmxlZD1cIml0ZW0uc3RhdHVzID09ICdwbGFjZWQnXCIgQGNsaWNrLnN0b3A9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPlRyYWNrIFJpZGVyPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPiAtLT48L3YtbGlzdD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJhZGROZXdJdGVtXCI+XG4gICAgICAgICAgICA8di1jYXJkPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+e3ttb2RlPT0nYWRkJyA/ICdBZGQgSXRlbSB0byBMaXN0JyA6ICdFZGl0IEl0ZW0nfX08L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwIGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciB0ZXh0LWxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQxMiBzbTEyIGxnMTIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHRhcmVhIHJvd3M9XCIzXCIgbGFiZWw9XCJJdGVtIGRlc2NyaXB0aW9uXCIgb3V0bGluZWQgdi1tb2RlbD1cInNob3BpdGVtLmRlc2NcIiBwbGFjZWhvbGRlcj1cImVnLiBCcmFuZCwgQ29sb3IsIGV0Yy5cIj48L3YtdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IG1kNCBzbTQgbGc0IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIHR5cGU9XCJudW1iZXJcIiBsYWJlbD1cIk1lYXN1cmVcIiB2LW1vZGVsPVwic2hvcGl0ZW0ubWVhc3VyZVwiIGRlbnNlPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCBtZDQgc200IGxnNCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGRlbnNlIHYtbW9kZWw9XCJzaG9waXRlbS51bml0XCIgZmxhdCA6aXRlbXM9XCJ1bml0c1wiIGxhYmVsPVwiVW5pdFwiIGl0ZW0tdGV4dD1cIm5hbWVcIiBpdGVtLXZhbHVlPVwidmFsdWVcIiAvPiA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IG1kNCBzbTQgbGc0IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb24gZ3JleS0tdGV4dFwiPiBRdHkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiIGNvbG9yPVwicmVkXCIgQGNsaWNrPVwic2hvcGl0ZW0ucXR5ID0gc2hvcGl0ZW0ucXR5IDwgMSA/IDEgOiBzaG9waXRlbS5xdHkgLSAxXCI+IG1kaS1taW51cyA8L3YtaWNvbj4ge3tzaG9waXRlbS5xdHl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiIGNvbG9yPVwiZ3JlZW5cIiBAY2xpY2s9XCJzaG9waXRlbS5xdHkgPSBzaG9waXRlbS5xdHkgKyAxXCI+IG1kaS1wbHVzIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lZCB0ZXh0IGNsYXNzPVwic2hvcHJlc3BvbnNpdmVcIiBjb2xvcj1cImJsdWVcIiBAY2xpY2suc3RvcD1cImFkZEl0ZW0oKSwgYWRkTmV3SXRlbSA9IGZhbHNlXCIgYmxvY2s+e3ttb2RlPT0nYWRkJyA/ICdBZGQgVG8gTGlzdCcgOiAnVXBkYXRlIEl0ZW0nfX08L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJic1FvdXRlXCIgZnVsbHNjcmVlbiBwZXJzaXN0ZW50PlxuICAgICAgICAgICAgPHYtY2FyZCBzdHlsZT1cImhlaWdodDogMTAwdmg7XCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5QcmljZSBUcmFja2luZzwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtc3VidGl0bGU+VGFwIG9yIENsaWNrIEl0ZW0gdG8gRWRpdDwvdi1jYXJkLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdSBjYW5ub3QgcmVtb3ZlIG9yIGVkaXQgaXRlbXMgbWFya2VkIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVkLS10ZXh0XCI+UEFJRDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0IGRlbnNlIHRocmVlLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tZ3JvdXAgdi1mb3I9XCIoX2l0ZW0sIGluZGV4KSBpbiBpdGVtLml0ZW1zXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZXN0c2VsbGVyXCI+e3sgX2l0ZW0uc3RhdHVzLnRvVXBwZXJDYXNlKCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlIDpkaXNhYmxlZD1cIl9pdGVtLnN0YXR1cz09PSdwYWlkJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudCBAY2xpY2suc3RvcD1cIml0ZW1fY29weSA9IE9iamVjdC5hc3NpZ24oe30sX2l0ZW0pLCBzaG9waXRlbSA9IE9iamVjdC5hc3NpZ24oe30sX2l0ZW0pLCBtb2RlPSAnZWRpdCcsIGFkZE5ld0l0ZW0gPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGUgdi10ZXh0PVwiX2l0ZW0uZGVzY1wiPjwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGUgY2xhc3M9XCJibHVlLS10ZXh0XCI+IHt7X2l0ZW0ubWVhc3VyZX19IHt7X2l0ZW0udW5pdH19IHgge3tfaXRlbS5xdHl9fSA9IHt7X2l0ZW0ubWVhc3VyZSAqIF9pdGVtLnF0eX19IHt7X2l0ZW0udW5pdH19ICh7e19pdGVtLm1lYXN1cmV9fSB7e19pdGVtLnVuaXR9fS91bml0ICkgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZSBjbGFzcz1cInJlZC0tdGV4dFwiPiB7e19pdGVtLnByaWNlfHRvUEhQfX0gLyB7e19pdGVtLm1lYXN1cmV9fSB7e19pdGVtLnVuaXR9fSA9IHt7X2l0ZW0ucHJpY2UgKiBfaXRlbS5xdHkgfHRvUEhQfX0gPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uLXRleHQgdi1pZj1cIl9pdGVtLnN0YXR1cyE9PSdwYWlkJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbCBjb2xvcj1cInJlZFwiIEBjbGljay5zdG9wPVwic2hvcGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LF9pdGVtKSwgbW9kZT0gJ2RlbGV0ZScsIGFkZEl0ZW0oKVwiPiBtZGktZGVsZXRlIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0IGRlbnNlIHNpbmdsZS1saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+IHt7Z2V0VG90YWwoKS50b3RhbHx0b1BIUH19PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPlNob3BwaW5nIFRvdGFsPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+IHt7Z2V0VG90YWwoKS5zY3x0b1BIUH19PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPlNlcnZpY2UgRmVlPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+e3sgaXRlbS5mZWVzLmRlbGl2ZXJ5LnBsYXRmb3JtICsgaXRlbS5mZWVzLmRlbGl2ZXJ5LnJpZGVyIHwgdG9QSFAgfX08L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+RGVsaXZlcnkgRmVlKHt7IGl0ZW0uZGVsaXZlci5kaXN0YW5jZS5jb21wdXRlZH19IGttKTwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlIGNsYXNzPVwic3VidGl0bGUtMSByZWQtLXRleHRcIj57eyBpdGVtLmZlZXMuZGVsaXZlcnkucGxhdGZvcm0gKyBpdGVtLmZlZXMuZGVsaXZlcnkucmlkZXIgKyBnZXRUb3RhbCgpLnNjICsgZ2V0VG90YWwoKS50b3RhbCB8IHRvUEhQIH19PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPkdyYW5kdG90YWw8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8di1mYWItdHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInBpbmtcIiBkYXJrIHNtYWxsIEBjbGljay5zdG9wPVwibW9kZT0nYWRkJywgYWRkTmV3SXRlbSA9IHRydWVcIiBhYnNvbHV0ZSBib3R0b20gcmlnaHQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMDBweDtcIiBmYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZhYi10cmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZWQgdGV4dCBjbGFzcz1cInNob3ByZXNwb25zaXZlXCIgY29sb3I9XCJibHVlXCIgQGNsaWNrLnN0b3A9XCJic1FvdXRlPWZhbHNlXCIgYmxvY2s+Q2xvc2U8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICA8L3YtZmxleD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHtcbiAgICBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlXG59XG5mcm9tICdnZW9maXJlc3RvcmUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgaXRlbTogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB1bml0cygpIHtcbiAgICAgICAgICAgIGxldCB1bml0cyA9IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1BpZWNlcyhwY3MpJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3BjcydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGl0ZXIoTCknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnTCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWlsbGlsaXRlcihtTCknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnbUwnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhY2socGFjayknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAncGFjaydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnS2lsb2dyYW0oa2cpJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2tnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdHcmFtcyhnKScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNaWxsaWdyYW0obWcpJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ21nJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdPdW5jZShveiknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnb3onXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0luY2hlcyhpbiknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnaW4nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ01ldGVyKG0pJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ20nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZlZXQoZnQpJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2Z0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGFkKHBhZCknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAncGFkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQnVuZGxlKGJ1bmRsZSknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnYnVuZGxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQm90dGxlKGJvdCknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnYm90J1xuICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIHJldHVybiB1bml0cy5zb3J0KChhLCBiKSA9PiAoYS5uYW1lIDwgYi5uYW1lID8gLTEgOiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogMCkpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtX2NvcHk6IHt9LFxuICAgICAgICAgICAgbW9kZTogJ2FkZCcsXG4gICAgICAgICAgICBvcmRlclNoZWV0OiBmYWxzZSxcbiAgICAgICAgICAgIGluZm86ICcnLFxuICAgICAgICAgICAgc25hY2tiYXI6IGZhbHNlLFxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgICAgIGFkZE5ld0l0ZW06IGZhbHNlLFxuICAgICAgICAgICAgYnNRb3V0ZTogZmFsc2UsXG4gICAgICAgICAgICBzaG9waXRlbToge1xuICAgICAgICAgICAgICAgIGRlc2M6ICcnLFxuICAgICAgICAgICAgICAgIHF0eTogMSxcbiAgICAgICAgICAgICAgICBwcmljZTogMCxcbiAgICAgICAgICAgICAgICBtZWFzdXJlOiAxLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwY3MnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3VucGFpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlkZXJfcHJvZmlsZToge1xuICAgICAgICAgICAgICAgIGNvbnRhY3Q6ICcnLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW0ucmlkZXIgIT09ICd1bmFzc2lnbmVkJykge1xuICAgICAgICAgICAgdGhpcy5nZXRSaWRlckluZm8oKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFJpZGVySW5mbygpIHtcbiAgICAgICAgICAgIHZhciByaWRlciA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKHRoaXMuJGZpcmVTdG9yZU9iaigpLmNvbGxlY3Rpb24oJ3JpZGVycycpKVxuICAgICAgICAgICAgdGhpcy4kYmluZCgncmlkZXJfcHJvZmlsZScsIHJpZGVyLmRvYyh0aGlzLml0ZW0ucmlkZXIpKVxuICAgICAgICB9LFxuICAgICAgICBhZGRJdGVtKCkge1xuICAgICAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gdGhpcy4kZmlyZVN0b3JlT2JqKClcbiAgICAgICAgICAgIGNvbnN0IGdlb2NvbGxlY3Rpb24gPSBuZXcgR2VvQ29sbGVjdGlvblJlZmVyZW5jZShmaXJlc3RvcmUuY29sbGVjdGlvbignc2hvcF9yZXF1ZXN0JykpXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgIGdlb2NvbGxlY3Rpb24uZG9jKHRoaXMuaXRlbS5pZCkudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuJGZpcmVTdG9yZU9iai5GaWVsZFZhbHVlLmFycmF5VW5pb24odGhpcy5zaG9waXRlbSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvID0gJ0l0ZW0gYWRkZWQgdG8geW91ciBzaG9wcGluZyBsaXN0J1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3BpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0OiAncGNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3VucGFpZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9waXRlbS5zdGF0dXMgPSAnY2hhbmdlZCdcbiAgICAgICAgICAgICAgICBnZW9jb2xsZWN0aW9uLmRvYyh0aGlzLml0ZW0uaWQpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0aGlzLiRmaXJlU3RvcmVPYmouRmllbGRWYWx1ZS5hcnJheVJlbW92ZSh0aGlzLml0ZW1fY29weSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2VvY29sbGVjdGlvbi5kb2ModGhpcy5pdGVtLmlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuJGZpcmVTdG9yZU9iai5GaWVsZFZhbHVlLmFycmF5VW5pb24odGhpcy5zaG9waXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3BpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6ICdwY3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3VucGFpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mbyA9ICdVcGRhdGVkIGluIHlvdXIgbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2VvY29sbGVjdGlvbi5kb2ModGhpcy5pdGVtLmlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogdGhpcy4kZmlyZVN0b3JlT2JqLkZpZWxkVmFsdWUuYXJyYXlSZW1vdmUodGhpcy5zaG9waXRlbSlcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvID0gJ0l0ZW0gcmVtb3ZlZCBmcm9tIHlvdXIgbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbmFja2JhciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9waXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogJ3BjcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICd1bnBhaWQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRUb3RhbCgpIHtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgICAgICAgIGxldCB3aXRocHJpY2UgPSAwO1xuICAgICAgICAgICAgdGhpcy5pdGVtLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIChpdGVtLnF0eSAqIGl0ZW0ucHJpY2UpXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2UgPiAwIHx8IGl0ZW0uc3RhdHVzID09ICdwYWlkJykgd2l0aHByaWNlKytcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjOiBwYXJzZUZsb2F0KCgodG90YWwgKiB0aGlzLml0ZW0uZmVlcy5zYykgLyAxMDApLnRvRml4ZWQoMikpLFxuICAgICAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgICAgICAgICAgICBkb25lOiB3aXRocHJpY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tJZk9uZ29pbmcodmFsKSB7XG4gICAgICAgICAgICBpZiAodmFsID09PSAncGxhY2VkJyB8fCB2YWwgPT09ICdvbmdvaW5nJyB8fCB2YWwgPT09ICdhY2NlcHRlZCcgfHwgdmFsID09PSAnZW5yb3V0ZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsQXBwb2ludG1lbnQoKSB7XG4gICAgICAgICAgICB0aGlzLiRmaXJlU3RvcmVPYmooKS5jb2xsZWN0aW9uKCdzaG9wX3JlcXVlc3QnKS5kb2ModGhpcy5pdGVtLmlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICdkLnN0YXR1cyc6ICdjYW5jZWxsZWQnXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyU2hlZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaW5mbyA9ICdTaG9wcGluZyAgaXMgbm93IGNhbmNlbGxlZCdcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaG9wTGlzdENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3BMaXN0Q2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nob3BMaXN0Q2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQzMWZkOTcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvcExpc3RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2hvcExpc3RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNzFkNTc2OGNcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHNcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQm90dG9tU2hlZXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCb3R0b21TaGVldCc7XG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRpYWxvZyc7XG5pbXBvcnQgeyBWRGl2aWRlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRpdmlkZXInO1xuaW1wb3J0IHsgVkZhYlRyYW5zaXRpb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL3RyYW5zaXRpb25zJztcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkljb24nO1xuaW1wb3J0IHsgVkltZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkltZyc7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWTGlzdCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1BY3Rpb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUFjdGlvblRleHQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUF2YXRhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtR3JvdXAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbVN1YnRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1UaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVlByb2dyZXNzTGluZWFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WUHJvZ3Jlc3NMaW5lYXInO1xuaW1wb3J0IHsgVlJvdyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVlNlbGVjdCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlNlbGVjdCc7XG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWU3ViaGVhZGVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3ViaGVhZGVyJztcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUZXh0RmllbGQnO1xuaW1wb3J0IHsgVlRleHRhcmVhIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dGFyZWEnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJvdHRvbVNoZWV0LFZCdG4sVkNhcmQsVkNhcmRBY3Rpb25zLFZDYXJkU3VidGl0bGUsVkNhcmRUZXh0LFZDYXJkVGl0bGUsVkRpYWxvZyxWRGl2aWRlcixWRmFiVHJhbnNpdGlvbixWRmxleCxWSWNvbixWSW1nLFZMYXlvdXQsVkxpc3QsVkxpc3RJdGVtLFZMaXN0SXRlbUFjdGlvbixWTGlzdEl0ZW1BY3Rpb25UZXh0LFZMaXN0SXRlbUF2YXRhcixWTGlzdEl0ZW1Db250ZW50LFZMaXN0SXRlbUdyb3VwLFZMaXN0SXRlbVN1YnRpdGxlLFZMaXN0SXRlbVRpdGxlLFZQcm9ncmVzc0xpbmVhcixWUm93LFZTZWxlY3QsVlNwYWNlcixWU3ViaGVhZGVyLFZUZXh0RmllbGQsVlRleHRhcmVhfSlcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8di1sYXlvdXQ+XG4gICAgICAgIDx2LWNhcmQgZmxhdCB3aWR0aD1cIjEwMHZ3XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgPG5hdi1kcmF3ZXIgdi1tb2RlbD1cImRyYXdlclwiID48L25hdi1kcmF3ZXI+XG4gICAgICAgICAgICA8bG9hZGluZyA6YWN0aXZlLnN5bmM9XCJpc0xvYWRpbmdcIiBsb2FkZXI9XCJiYXJzXCIgOmlzLWZ1bGwtcGFnZT1cInRydWVcIiBjb2xvcj1cImJsdWVcIiAvPlxuICAgICAgICAgICAgPHYtYXBwLWJhciBjb2xvcj1cInJnYmEoMTAwLDExNSwyMDEpXCIgIHN0eWxlPVwiei1pbmRleDoyXCIgZGFyayBmaXhlZCBhcHA+XG4gICAgICAgICAgICAgICA8di1hcHAtYmFyLW5hdi1pY29uICAgQGNsaWNrLnN0b3A9XCJkcmF3ZXI9IWRyYXdlclwiPjwvdi1hcHAtYmFyLW5hdi1pY29uPlxuICAgICAgICAgICAgICAgIDx2LWF2YXRhciAgY2xhc3M9XCJtci0yXCIgcm91bmRlZCBzaXplPVwiMzVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtaW1nIHNyYz1cIi9pY29uLnBuZ1wiIC8+IDwvdi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5KaWZmeSBGYXZvcnM8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICA8Y2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCJjYXJ0U2l6ZSA+IDBcIiBpY29uIHRvPVwiL2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJhZGdlIGNvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNiYWRnZSBvdmVybGFwPiB7eyBjYXJ0U2l6ZSB9fSA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ3aGl0ZVwiIGRlbnNlPiBtZGktY2FydC1vdXRsaW5lIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgIDwvY2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNleHRlbnNpb24+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRhYnMgZ3JvdyBiYWNrZ3JvdW5kLWNvbG9yPVwicmdiYSgxMDAsMTE1LDIwMSlcIiB2LW1vZGVsPVwidHlwZVwiIGNlbnRlci1hY3RpdmUgaWNvbnMtYW5kLXRleHQgY2VudGVyZWQgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiIGRlbnNlPkZvb2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGRlbnNlPm1kaS1mb29kPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiIGRlbnNlPlNob3BwaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBkZW5zZT5tZGktY2FydC1hcnJvdy1yaWdodDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYiBkZW5zZT5CaWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gZGVuc2U+bWRpLWFjY291bnQtY2FzaDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYj5cbiAgICAgICAgICAgICAgICAgICAgPC92LXRhYnM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdi1hcHAtYmFyPlxuICAgICAgICAgICAgPHYtc2hlZXQgY2xhc3M9XCJvdmVyZmxvdy15LWF1dG8gbWItMTBcIiBtaW4taGVpZ2h0PVwiODB2aFwiIG1heC1oZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgICAgICAgIDx2LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRhYnMtaXRlbXMgdi1tb2RlbD1cInR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCBmbGF0IHYtaWY9XCJ0cmFucy5vcmRlcnMuc2l6ZSA8IDFcIiB3cmFwIGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciB0ZXh0LWxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDQgc200IGxnMyBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNsYXNzPVwibWItMlwiIGNvbG9yPVwiZXJyb3JcIiBzaXplPVwiMjAwXCI+IG1kaS1jYXJ0LW9mZiA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZSBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6NTBweDtcIj4mIzEyODU0Njs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRoZXJlJ3Mgbm90aGluZyBoZXJlLiBXYW50IHRvIG9yZGVyIHNvbWV0aGluZz88L2g0PiA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lZCB0ZXh0IGJsb2NrIHRvPVwiL2Zvb2RcIiBjb2xvcj1cInJlZFwiPiBWaWV3IE1lbnVzPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYnMgdi1pZj1cInRyYW5zLm9yZGVycy5zaXplID4gMFwiIHYtbW9kZWw9XCJ0YWJcIiBjZW50ZXItYWN0aXZlIGNlbnRlcmVkIGJhY2tncm91bmQtY29sb3I9XCJ0cmFuc3BhcmVudFwiIGNvbG9yPVwiYmx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10YWIgZGVuc2U+IE9uZ29pbmcgPC92LXRhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiIGRlbnNlPiBIaXN0b3J5IDwvdi10YWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYnMtaXRlbXMgdi1tb2RlbD1cInRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9yZGVyLWNhcmQgdi1mb3I9XCIob3JkZXIsIGluZGV4KSBpbiB0cmFucy5vcmRlcnMuZGF0YS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChvKSA9PiAoby5zdGF0dXMgIT09J2NhbmNlbGxlZCcgJiYgby5zdGF0dXMgIT09ICdjb21wbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVwiIDprZXk9XCJpbmRleFwiIDppdGVtPVwib3JkZXJcIiAvPiA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgZmlsbC1oZWlnaHQgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9yZGVyLWNhcmQgdi1mb3I9XCIob3JkZXIsIGluZGV4KSBpbiB0cmFucy5vcmRlcnMuZGF0YS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChvKSA9PiAoby5zdGF0dXMgIT09ICdwbGFjZWQnICYmIG8uc3RhdHVzICE9PSAnYWNjZXB0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVwiIDprZXk9XCJpbmRleFwiIDppdGVtPVwib3JkZXJcIiAvPiA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFicy1pdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFicz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCBmbGF0IHYtaWY9XCJ0cmFucy5zaG9wcy5zaXplIDwgMVwiIHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kNCBzbTQgbGczIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY2xhc3M9XCJtYi0yXCIgY29sb3I9XCJlcnJvclwiIHNpemU9XCIyMDBcIj4gbWRpLWNhcnQtb2ZmIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3M9XCJibG9ja3F1b3RlIG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTo1MHB4O1wiPiYjMTI4NTQ2Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VGhlcmUncyBub3RoaW5nIGhlcmUuIFdhbnQgdG8gc2hvcCBzb21ldGhpbmc/PC9oND4gPC9ibG9ja3F1b3RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZWQgdGV4dCBibG9jayB0bz1cIi9zaG9wcGluZ1wiIGNvbG9yPVwicmVkXCI+U2hvcCBOb3c8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFicyB2LWlmPVwidHJhbnMuc2hvcHMuc2l6ZSA+IDBcIiB2LW1vZGVsPVwidGFiXCIgY2VudGVyLWFjdGl2ZSBjZW50ZXJlZCBiYWNrZ3JvdW5kLWNvbG9yPVwidHJhbnNwYXJlbnRcIiBjb2xvcj1cImJsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiIGRlbnNlPiBPbmdvaW5nIDwvdi10YWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYiBkZW5zZT4gSGlzdG9yeSA8L3YtdGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10YWJzLWl0ZW1zIHYtbW9kZWw9XCJ0YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwIGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciB0ZXh0LWxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzaG9wLWxpc3QtY2FyZCB2LWZvcj1cIihzaG9wLCBpbmRleCkgaW4gdHJhbnMuc2hvcHMuZGF0YS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChvKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uc3RhdHVzICE9PSAnY2FuY2VsbGVkJyAmJiBvLnN0YXR1cyAhPT0gJ2NvbXBsZXRlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcIiA6a2V5PVwiaW5kZXhcIiA6aXRlbT1cInNob3BcIiAvPiA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgZmlsbC1oZWlnaHQgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNob3AtbGlzdC1jYXJkIHYtZm9yPVwiKHNob3AsIGluZGV4KSBpbiB0cmFucy5zaG9wcy5kYXRhLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKG8pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby5zdGF0dXMgIT09ICdwbGFjZWQnICYmIG8uc3RhdHVzICE9PSAnYWNjZXB0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXCIgOmtleT1cImluZGV4XCIgOml0ZW09XCJzaG9wXCIgLz4gPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYnMtaXRlbXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10YWItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgZmxhdCB2LWlmPVwidHJhbnMuYmlsbHMuc2l6ZSA8IDFcIiB3cmFwIGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciB0ZXh0LWxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDQgc200IGxnMyBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNsYXNzPVwibWItMlwiIGNvbG9yPVwiZXJyb3JcIiBzaXplPVwiMjAwXCI+IG1kaS1jYXJ0LW9mZiA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZSBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6NTBweDtcIj4mIzEyODU0Njs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgIFRoZXJlJ3Mgbm90aGluZyBoZXJlLiBZb3Ugd2FudCB0byBwYXkgeW91ciBiaWxsIHdpdGggdXM/XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+IDwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmVkIHRleHQgYmxvY2sgdG89XCIvYmlsbHNfcGF5bWVudFwiIGNvbG9yPVwicmVkXCI+U2hvdyBCaWxsZXI8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFicyB2LWlmPVwidHJhbnMuYmlsbHMuc2l6ZSA+IDBcIiB2LW1vZGVsPVwidGFiXCIgY2VudGVyLWFjdGl2ZSBjZW50ZXJlZCBiYWNrZ3JvdW5kLWNvbG9yPVwidHJhbnNwYXJlbnRcIiBjb2xvcj1cImJsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiIGRlbnNlPiBPbmdvaW5nIDwvdi10YWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYiBkZW5zZT4gSGlzdG9yeSA8L3YtdGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10YWJzLWl0ZW1zIHYtbW9kZWw9XCJ0YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwIGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciB0ZXh0LWxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiaWxscy1jYXJkIHYtZm9yPVwiKGJpbGwsIGluZGV4KSBpbiB0cmFucy5iaWxscy5kYXRhLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKG8pID0+IG8uc3RhdHVzICE9PSAnY29tcGxldGVkJyAmJiBvLnN0YXR1cyAhPSAnY2FuY2VsbGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVwiIDprZXk9XCJpbmRleFwiIDppdGVtPVwiYmlsbFwiIC8+IDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10YWItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcCBqdXN0aWZ5LWNlbnRlciBmaWxsLWhlaWdodCBhbGlnbi1jZW50ZXIgdGV4dC1sZWZ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmlsbHMtY2FyZCB2LWZvcj1cIihiaWxsLCBpbmRleCkgaW4gdHJhbnMuYmlsbHMuZGF0YS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChvKSA9PiBvLnN0YXR1cyAhPSAncGxhY2VkJyAmJiBvLnN0YXR1cyAhPSAnYWNjZXB0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXCIgOmtleT1cImluZGV4XCIgOml0ZW09XCJiaWxsXCIgLz4gPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYnMtaXRlbXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10YWJzLWl0ZW1zPlxuICAgICAgICAgICAgICAgIDwvdi1jb250ZW50PlxuICAgICAgICAgICAgPC92LXNoZWV0PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICA8L3YtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgTG9hZGluZyBmcm9tICd2dWUtbG9hZGluZy1vdmVybGF5J1xuaW1wb3J0ICd2dWUtbG9hZGluZy1vdmVybGF5L2Rpc3QvdnVlLWxvYWRpbmcuY3NzJ1xuaW1wb3J0IE9yZGVyQ2FyZCBmcm9tICd+L2NvbXBvbmVudHMvT3JkZXJDYXJkLnZ1ZSdcbmltcG9ydCBCaWxsc0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL0JpbGxzQ2FyZCdcbmltcG9ydCBTaG9wTGlzdENhcmQgZnJvbSAnfi9jb21wb25lbnRzL1Nob3BMaXN0Q2FyZCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIExvYWRpbmcsXG4gICAgICAgIE9yZGVyQ2FyZCxcbiAgICAgICAgQmlsbHNDYXJkLFxuICAgICAgICBTaG9wTGlzdENhcmRcbiAgICB9LFxuICAgIGxheW91dDogJ21lbnUnLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkcmF3ZXI6ZmFsc2UsXG4gICAgICAgICAgICB0YWI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY2FydFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0SXRlbUNvdW50J11cbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYXV0aC9nZXRNeVRyYW5zYWN0aW9uJ11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdmFyIG90ID0gdGhpcy50cmFucy5zaG9wcy5kYXRhLmZpbHRlcihcbiAgICAgICAgICAgIChvKSA9PiBvLnN0YXR1cyAhPSAnY2FuY2VsbGVkJyAmJiBvLnN0YXR1cyAhPSAnY29tcGxldGVkJylcbiAgICAgICAgY29uc29sZS5sb2cob3QpXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2dldE15VHJhbnNhY3Rpb24nKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaXNPbmdvaW5nKHN0YXR1cykge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gJ3BsYWNlZCcgfHwgc3RhdHVzID09PSAnYWNjZXB0ZWQnXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHJhbnNhY3Rpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90cmFuc2FjdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90cmFuc2FjdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmNzdkZWE2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RyYW5zYWN0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RyYW5zYWN0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjkyMWRhMDNlXCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcEJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQXBwQmFyTmF2SWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXZhdGFyJztcbmltcG9ydCB7IFZCYWRnZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJhZGdlJztcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDb250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ29udGVudCc7XG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJY29uJztcbmltcG9ydCB7IFZJbWcgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJbWcnO1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVlNoZWV0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU2hlZXQnO1xuaW1wb3J0IHsgVlNwYWNlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVlRhYiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW1wb3J0IHsgVlRhYkl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUYWJzJztcbmltcG9ydCB7IFZUYWJzIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGFicyc7XG5pbXBvcnQgeyBWVGFic0l0ZW1zIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGFicyc7XG5pbXBvcnQgeyBWVG9vbGJhclRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVG9vbGJhcic7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQXBwQmFyLFZBcHBCYXJOYXZJY29uLFZBdmF0YXIsVkJhZGdlLFZCdG4sVkNhcmQsVkNvbnRlbnQsVkZsZXgsVkljb24sVkltZyxWTGF5b3V0LFZTaGVldCxWU3BhY2VyLFZUYWIsVlRhYkl0ZW0sVlRhYnMsVlRhYnNJdGVtcyxWVG9vbGJhclRpdGxlfSlcbiJdLCJzb3VyY2VSb290IjoiIn0=