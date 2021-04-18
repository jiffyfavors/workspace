exports.ids = [6];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);


/* harmony default export */ __webpack_exports__["a"] = (_VDivider__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VSubheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);


/* harmony default export */ __webpack_exports__["a"] = (_VSubheader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 144:
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

/***/ 145:
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

/***/ 146:
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

/***/ 147:
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

/***/ 148:
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

/***/ 149:
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

/***/ 150:
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

/***/ 151:
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

/***/ 152:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 154:
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

/***/ 155:
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);


/* harmony default export */ __webpack_exports__["a"] = (_VProgressLinear__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 160:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 166:
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

/***/ 167:
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

/***/ 168:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);


/* harmony default export */ __webpack_exports__["a"] = (_VMenu__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 172:
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

/***/ 173:
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

/***/ 174:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 178:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 180:
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

/***/ 181:
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

/***/ 182:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 183:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 184:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 185:
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

/***/ 187:
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

/***/ 189:
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('spacer', 'div', 'v-spacer'));

/***/ }),

/***/ 193:
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

/***/ 196:
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

/***/ 202:
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

/***/ 203:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 204:
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

/***/ 206:
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

/***/ 212:
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

/***/ 213:
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

/***/ 214:
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

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoCard_vue_vue_type_style_index_0_id_0d748326_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(203);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoCard_vue_vue_type_style_index_0_id_0d748326_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoCard_vue_vue_type_style_index_0_id_0d748326_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoCard_vue_vue_type_style_index_0_id_0d748326_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoCard_vue_vue_type_style_index_0_id_0d748326_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_measurable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _directives_intersect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
// Mixins

 // Directives

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_mixins_measurable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'VLazy',
  directives: {
    intersect: _directives_intersect__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: undefined,
        rootMargin: undefined,
        threshold: undefined
      })
    },
    tag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: String,
      default: 'fade-transition'
    }
  },
  computed: {
    styles() {
      return { ...this.measurableStyles
      };
    }

  },
  methods: {
    genContent() {
      const slot = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* getSlot */ "o"])(this);
      /* istanbul ignore if */

      if (!this.transition) return slot;
      const children = [];
      if (this.isActive) children.push(slot);
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, children);
    },

    onObserve(entries, observer, isIntersecting) {
      if (this.isActive) return;
      this.isActive = isIntersecting;
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-lazy',
      attrs: this.$attrs,
      directives: [{
        name: 'intersect',
        value: {
          handler: this.onObserve,
          options: this.options
        }
      }],
      on: this.$listeners,
      style: this.styles
    }, [this.genContent()]);
  }

}));

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/RestoCard.vue?vue&type=template&id=0d748326&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{staticClass:"pa-2",attrs:{"xs12":"","md4":"","sm6":"","lg3":""}},[_c('v-lazy',{attrs:{"options":{
      threshold: .6
    },"min-height":"200","transition":"fade-transition"},model:{value:(_vm.isActive),callback:function ($$v) {_vm.isActive=$$v},expression:"isActive"}},[_c('v-card',{attrs:{"width":"100%","to":_vm.url,"disabled":_vm.data.draft}},[_c('v-img',{attrs:{"src":_vm.data.backdrop,"height":"200px","min-width":"100%","width":"100%"}},[(_vm.delivery_fee>0)?_c('span',{staticClass:"onsale"},[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.delivery_fee))+" Delivery")]):_vm._e(),_vm._v(" "),(_vm.data.rates.cr>0)?_c('span',{staticClass:"bestseller"},[_vm._v("Recommended")]):_vm._e(),_vm._v(" "),(_vm.data.draft)?_c('span',{staticClass:"transtype"},[_vm._v("Not Accepting Order")]):_vm._e()]),_vm._v(" "),_c('v-card-actions',[_c('v-list-item',{attrs:{"dense":""}},[_c('v-list-item-avatar',{attrs:{"color":"grey darken-3"}},[_c('v-img',{staticClass:"elevation-6",attrs:{"src":_vm.data.logo}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.data.business_name))]),_vm._v(" "),_c('v-list-item-subtitle',[_c('small',[_vm._v(_vm._s(_vm.data.branch))])])],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RestoCard.vue?vue&type=template&id=0d748326&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RestoCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RestoCardvue_type_script_lang_js_ = ({
  data() {
    return {
      isActive: false
    };
  },

  computed: {
    currentLocation() {
      return this.$store.getters['map/getLocation'];
    },

    delivery_fee() {
      let index = this.delivery_fees.findIndex(x => x.id === this.data.id);
      if (index > -1) return this.delivery_fees[index].amount;else return 0;
    },

    delivery_fees() {
      return this.$store.getters['map/getDeliveryFees'];
    },

    df() {
      return this.$store.getters['admin/getFare'];
    }

  },
  watch: {
    isActive(val) {
      if (val && !this.data.draft) {
        let sl = {
          lat: this.data.coordinates.latitude,
          lng: this.data.coordinates.longitude
        };
        let dl = this.currentLocation;

        if (this.delivery_fee === 0) {
          this.calculateFees(dl, sl);
        }
      }
    }

  },
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    calculateFees(dl, sl) {
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
        const scv = parseFloat(this.df.fees.food.sc_min_value);
        const md = parseFloat(this.df.fees.food.min_distance);
        const min_df = parseFloat(this.df.fees.food.min_df);
        const fixed_rider_fee = parseFloat(this.df.fees.food.rider_fixed_fee);
        const distance = d.rows[0].elements[0].distance.value;
        let df = 0;
        let ds = distance / 1000;

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

        ds = Math.floor(ds) + 1;
        const distance_actual = parseFloat(d.rows[0].elements[0].distance.value / 1000).toFixed(2);
        let rider_df = 0;
        if (distance_actual <= md) rider_df = fixed_rider_fee;else rider_df = fixed_rider_fee + (distance_actual - md) * rider;
        rider_df = Math.floor(rider_df);
        let platform_df = Math.floor(df - rider_df);
        this.$store.commit('map/addDeliveryFees', {
          id: this.data.id,
          amount: platform_df + rider_df
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./components/RestoCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RestoCardvue_type_script_lang_js_ = (RestoCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLazy/VLazy.js
var VLazy = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var VList = __webpack_require__(10);

// CONCATENATED MODULE: ./components/RestoCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(217)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RestoCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0d748326",
  "99f7e85a"
  
)

/* harmony default export */ var RestoCard = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */











installComponents_default()(component, {VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VFlex: VFlex["a" /* default */],VImg: VImg["a" /* default */],VLazy: VLazy["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: VList["b" /* VListItemContent */],VListItemSubtitle: VList["c" /* VListItemSubtitle */],VListItemTitle: VList["d" /* VListItemTitle */]})


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VAutocomplete_VAutocomplete_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var _src_components_VAutocomplete_VAutocomplete_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VAutocomplete_VAutocomplete_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(196);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(155);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
// Styles
 // Extensions


 // Utilities



const defaultMenuProps = { ..._VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* defaultMenuProps */ "b"],
  offsetY: true,
  offsetOverflow: true,
  transition: false
};
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-autocomplete',
  props: {
    allowOverflow: {
      type: Boolean,
      default: true
    },
    autoSelectFirst: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Function,
      default: (item, queryText, itemText) => {
        return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1;
      }
    },
    hideNoData: Boolean,
    menuProps: {
      type: _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.props.menuProps.type,
      default: () => defaultMenuProps
    },
    noFilter: Boolean,
    searchInput: {
      type: String,
      default: undefined
    }
  },

  data() {
    return {
      lazySearch: this.searchInput
    };
  },

  computed: {
    classes() {
      return { ..._VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-autocomplete': true,
        'v-autocomplete--is-selecting-index': this.selectedIndex > -1
      };
    },

    computedItems() {
      return this.filteredItems;
    },

    selectedValues() {
      return this.selectedItems.map(item => this.getValue(item));
    },

    hasDisplayedItems() {
      return this.hideSelected ? this.filteredItems.some(item => !this.hasItem(item)) : this.filteredItems.length > 0;
    },

    currentRange() {
      if (this.selectedItem == null) return 0;
      return String(this.getText(this.selectedItem)).length;
    },

    filteredItems() {
      if (!this.isSearching || this.noFilter || this.internalSearch == null) return this.allItems;
      return this.allItems.filter(item => {
        const value = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* getPropertyFromItem */ "n"])(item, this.itemText);
        const text = value != null ? String(value) : '';
        return this.filter(item, String(this.internalSearch), text);
      });
    },

    internalSearch: {
      get() {
        return this.lazySearch;
      },

      set(val) {
        this.lazySearch = val;
        this.$emit('update:search-input', val);
      }

    },

    isAnyValueAllowed() {
      return false;
    },

    isDirty() {
      return this.searchIsDirty || this.selectedItems.length > 0;
    },

    isSearching() {
      return this.multiple && this.searchIsDirty || this.searchIsDirty && this.internalSearch !== this.getText(this.selectedItem);
    },

    menuCanShow() {
      if (!this.isFocused) return false;
      return this.hasDisplayedItems || !this.hideNoData;
    },

    $_menuProps() {
      const props = _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.$_menuProps.call(this);
      props.contentClass = `v-autocomplete__content ${props.contentClass || ''}`.trim();
      return { ...defaultMenuProps,
        ...props
      };
    },

    searchIsDirty() {
      return this.internalSearch != null && this.internalSearch !== '';
    },

    selectedItem() {
      if (this.multiple) return null;
      return this.selectedItems.find(i => {
        return this.valueComparator(this.getValue(i), this.getValue(this.internalValue));
      });
    },

    listData() {
      const data = _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.listData.call(this);
      data.props = { ...data.props,
        items: this.virtualizedItems,
        noFilter: this.noFilter || !this.isSearching || !this.filteredItems.length,
        searchInput: this.internalSearch
      };
      return data;
    }

  },
  watch: {
    filteredItems: 'onFilteredItemsChanged',
    internalValue: 'setSearch',

    isFocused(val) {
      if (val) {
        document.addEventListener('copy', this.onCopy);
        this.$refs.input && this.$refs.input.select();
      } else {
        document.removeEventListener('copy', this.onCopy);
        this.updateSelf();
      }
    },

    isMenuActive(val) {
      if (val || !this.hasSlot) return;
      this.lazySearch = undefined;
    },

    items(val, oldVal) {
      // If we are focused, the menu
      // is not active, hide no data is enabled,
      // and items change
      // User is probably async loading
      // items, try to activate the menu
      if (!(oldVal && oldVal.length) && this.hideNoData && this.isFocused && !this.isMenuActive && val.length) this.activateMenu();
    },

    searchInput(val) {
      this.lazySearch = val;
    },

    internalSearch: 'onInternalSearchChanged',
    itemText: 'updateSelf'
  },

  created() {
    this.setSearch();
  },

  destroyed() {
    document.removeEventListener('copy', this.onCopy);
  },

  methods: {
    onFilteredItemsChanged(val, oldVal) {
      // TODO: How is the watcher triggered
      // for duplicate items? no idea
      if (val === oldVal) return;
      this.setMenuIndex(-1);
      this.$nextTick(() => {
        if (!this.internalSearch || val.length !== 1 && !this.autoSelectFirst) return;
        this.$refs.menu.getTiles();
        this.setMenuIndex(0);
      });
    },

    onInternalSearchChanged() {
      this.updateMenuDimensions();
    },

    updateMenuDimensions() {
      // Type from menuable is not making it through
      this.isMenuActive && this.$refs.menu && this.$refs.menu.updateDimensions();
    },

    changeSelectedIndex(keyCode) {
      // Do not allow changing of selectedIndex
      // when search is dirty
      if (this.searchIsDirty) return;

      if (this.multiple && keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* keyCodes */ "s"].left) {
        if (this.selectedIndex === -1) {
          this.selectedIndex = this.selectedItems.length - 1;
        } else {
          this.selectedIndex--;
        }
      } else if (this.multiple && keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* keyCodes */ "s"].right) {
        if (this.selectedIndex >= this.selectedItems.length - 1) {
          this.selectedIndex = -1;
        } else {
          this.selectedIndex++;
        }
      } else if (keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* keyCodes */ "s"].backspace || keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* keyCodes */ "s"].delete) {
        this.deleteCurrentItem();
      }
    },

    deleteCurrentItem() {
      const curIndex = this.selectedIndex;
      const curItem = this.selectedItems[curIndex]; // Do nothing if input or item is disabled

      if (!this.isInteractive || this.getDisabled(curItem)) return;
      const lastIndex = this.selectedItems.length - 1; // Select the last item if
      // there is no selection

      if (this.selectedIndex === -1 && lastIndex !== 0) {
        this.selectedIndex = lastIndex;
        return;
      }

      const length = this.selectedItems.length;
      const nextIndex = curIndex !== length - 1 ? curIndex : curIndex - 1;
      const nextItem = this.selectedItems[nextIndex];

      if (!nextItem) {
        this.setValue(this.multiple ? [] : undefined);
      } else {
        this.selectItem(curItem);
      }

      this.selectedIndex = nextIndex;
    },

    clearableCallback() {
      this.internalSearch = undefined;
      _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.clearableCallback.call(this);
    },

    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genInput.call(this);
      input.data = Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(input.data, {
        attrs: {
          'aria-activedescendant': Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* getObjectValueByPath */ "m"])(this.$refs.menu, 'activeTile.id'),
          autocomplete: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* getObjectValueByPath */ "m"])(input.data, 'attrs.autocomplete', 'off')
        },
        domProps: {
          value: this.internalSearch
        }
      });
      return input;
    },

    genInputSlot() {
      const slot = _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInputSlot.call(this);
      slot.data.attrs.role = 'combobox';
      return slot;
    },

    genSelections() {
      return this.hasSlot || this.multiple ? _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genSelections.call(this) : [];
    },

    onClick(e) {
      if (!this.isInteractive) return;
      this.selectedIndex > -1 ? this.selectedIndex = -1 : this.onFocus();
      if (!this.isAppendInner(e.target)) this.activateMenu();
    },

    onInput(e) {
      if (this.selectedIndex > -1 || !e.target) return;
      const target = e.target;
      const value = target.value; // If typing and menu is not currently active

      if (target.value) this.activateMenu();
      this.internalSearch = value;
      this.badInput = target.validity && target.validity.badInput;
    },

    onKeyDown(e) {
      const keyCode = e.keyCode;
      _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onKeyDown.call(this, e); // The ordering is important here
      // allows new value to be updated
      // and then moves the index to the
      // proper location

      this.changeSelectedIndex(keyCode);
    },

    onSpaceDown(e) {},

    onTabDown(e) {
      _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onTabDown.call(this, e);
      this.updateSelf();
    },

    onUpDown(e) {
      // Prevent screen from scrolling
      e.preventDefault(); // For autocomplete / combobox, cycling
      // interfers with native up/down behavior
      // instead activate the menu

      this.activateMenu();
    },

    selectItem(item) {
      _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.selectItem.call(this, item);
      this.setSearch();
    },

    setSelectedItems() {
      _VSelect_VSelect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.setSelectedItems.call(this); // #4273 Don't replace if searching
      // #4403 Don't replace if focused

      if (!this.isFocused) this.setSearch();
    },

    setSearch() {
      // Wait for nextTick so selectedItem
      // has had time to update
      this.$nextTick(() => {
        if (!this.multiple || !this.internalSearch || !this.isMenuActive) {
          this.internalSearch = !this.selectedItems.length || this.multiple || this.hasSlot ? null : this.getText(this.selectedItem);
        }
      });
    },

    updateSelf() {
      if (!this.searchIsDirty && !this.internalValue) return;

      if (!this.valueComparator(this.internalSearch, this.getValue(this.internalValue))) {
        this.setSearch();
      }
    },

    hasItem(item) {
      return this.selectedValues.indexOf(this.getValue(item)) > -1;
    },

    onCopy(event) {
      if (this.selectedIndex === -1) return;
      const currentItem = this.selectedItems[this.selectedIndex];
      const currentItemText = this.getText(currentItem);
      event.clipboardData.setData('text/plain', currentItemText);
      event.clipboardData.setData('text/vnd.vuetify.autocomplete.item+plain', currentItemText);
      event.preventDefault();
    }

  }
}));

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
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
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
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
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
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
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
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

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
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
var Symbol = root.Symbol,
    iteratorSymbol = Symbol ? Symbol.iterator : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeKeys = overArg(Object.keys, Object),
    nativeRandom = Math.random;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

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
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
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
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
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
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
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
 * Gets `n` random elements at unique keys from `collection` up to the
 * size of `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the random elements.
 * @example
 *
 * _.sampleSize([1, 2, 3], 2);
 * // => [3, 1]
 *
 * _.sampleSize([1, 2, 3], 4);
 * // => [2, 3, 1]
 */
function sampleSize(collection, n, guard) {
  var index = -1,
      result = toArray(collection),
      length = result.length,
      lastIndex = length - 1;

  if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
    n = 1;
  } else {
    n = baseClamp(toInteger(n), 0, length);
  }
  while (++index < n) {
    var rand = baseRandom(index, lastIndex),
        value = result[rand];

    result[rand] = result[index];
    result[index] = value;
  }
  result.length = n;
  return result;
}

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  return sampleSize(collection, MAX_ARRAY_LENGTH);
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
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (iteratorSymbol && value[iteratorSymbol]) {
    return iteratorToArray(value[iteratorSymbol]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
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
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = shuffle;


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/food.vue?vue&type=template&id=8baccf88&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('location-selector')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/food.vue?vue&type=template&id=8baccf88&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/LocationSelector.vue?vue&type=template&id=df51084c&
var LocationSelectorvue_type_template_id_df51084c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('nav-drawer',{model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}}),_vm._v(" "),_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"#00aff0"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('v-card',{staticClass:"cardhyt mb-10",attrs:{"flat":"","width":"100%"}},[_c('v-app-bar',{attrs:{"color":"rgba(100,115,201)","app":"","dark":"","flat":""},scopedSlots:_vm._u([{key:"extension",fn:function(){return [_c('client-only',[(!_vm.isHide)?_c('v-tabs',{attrs:{"slider-color":"white","dense":"","grow":"","show-arrows":"","center-active":"","centered":""},model:{value:(_vm.currentItem),callback:function ($$v) {_vm.currentItem=$$v},expression:"currentItem"}},[_c('v-tab',{key:"all",attrs:{"href":"#tab-all"}},[_vm._v(" All ")]),_vm._v(" "),_vm._l((_vm.initialTab),function(item){return _c('v-tab',{key:item.name,attrs:{"href":'#tab-' + item.name}},[_vm._v(" "+_vm._s(item.name)+" ")])}),_vm._v(" "),_c('v-btn',{staticClass:"align-self-center mr-4",attrs:{"text":""},on:{"click":function($event){$event.stopPropagation();_vm.moreBS=true}}},[_vm._v(" more\n                            "),_c('v-icon',{attrs:{"right":""}},[_vm._v("mdi-menu-down")])],1)],2):_vm._e()],1)]},proxy:true}])},[(!_vm.isSearch)?_c('v-app-bar-nav-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer=!_vm.drawer}}}):_vm._e(),_vm._v(" "),(!_vm.isSearch)?_c('v-avatar',{staticClass:"mr-2",attrs:{"rounded":"","size":"35"}},[_c('v-img',{attrs:{"src":"/icon.png"}})],1):_vm._e(),_vm._v(" "),(!_vm.isSearch)?_c('v-toolbar-title',[_vm._v(" Jiffy Favors ")]):_vm._e(),_vm._v(" "),(!_vm.isSearch)?_c('v-spacer'):_vm._e(),_vm._v(" "),_c('client-only',[(_vm.isSearch)?_c('v-autocomplete',{attrs:{"items":_vm.getRestos('all'),"autofocus":"","prepend-inner-icon":"mdi-magnify","solo":"","hide-details":"","hide-selected":"","dense":"","light":"","label":"Select","item-value":"id","item-text":"business_name"},on:{"blur":function($event){_vm.isSearch = false}},scopedSlots:_vm._u([{key:"item",fn:function(data){return [_c('v-list',{attrs:{"flat":"","dense":"","to":'/resto/' + data.item.url}},[_c('v-list-item-group',[_c('v-list-item',{attrs:{"to":'/resto/' + data.item.url}},[_c('v-list-item-avatar',[_c('v-img',{attrs:{"src":data.item.logo}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(data.item.business_name)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" "+_vm._s(data.item.branch)+" ")])],1)],1)],1)],1)]}}],null,false,3173427272)}):_vm._e(),_vm._v(" "),(!_vm.isSearch)?_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.isSearch = true}}},[_c('v-icon',[_vm._v("mdi-magnify")])],1):_vm._e(),_vm._v(" "),(_vm.cartSize > 0)?_c('v-btn',{attrs:{"icon":"","to":"/cart"}},[_c('v-badge',{attrs:{"color":"red"},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_vm._v(" "+_vm._s(_vm.cartSize)+" ")]},proxy:true}],null,false,1285045876)},[_vm._v(" "),_c('v-icon',{attrs:{"color":"white","dense":""}},[_vm._v(" mdi-cart-outline ")])],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('v-sheet',{staticClass:"overflow-y-auto fill-height",attrs:{"id":"scrolling-techniques-3"}},[_c('v-container',{attrs:{"fluid":""}},[(_vm.isHide)?_c('v-content',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},[_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('div',{staticClass:"mapcontainer"},[_c('GMap',{ref:"gMap",attrs:{"id":"gmap","center":_vm.mylocation,"options":{
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: true,
            zoomControl: true,
            gestureHandling: 'greedy'
          },"zoom":15},on:{"center_changed":_vm.centerChange}},[_c('GMapMarker',{ref:"gmapmarker",attrs:{"position":_vm.mylocation,"options":{ icon: _vm.selectedmarker }}})],1)],1),_vm._v(" "),_c('v-btn',{staticClass:"white--text mt-5",attrs:{"color":"blue darken-1","text":"","block":"","outlined":""},on:{"click":_vm.updateMapLocation}},[_vm._v(" Find Restaurant ")])],1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.isHide)?_c('v-content',[_c('client-only',[_c('v-tabs-items',{model:{value:(_vm.currentItem),callback:function ($$v) {_vm.currentItem=$$v},expression:"currentItem"}},[_c('v-tab-item',{key:"all",attrs:{"value":"tab-all"}},[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},_vm._l((_vm.getRestos('all')),function(i){return _c('resto-card',{key:i.id,staticClass:"review-card",staticStyle:{"white-space":"initial"},attrs:{"data":i,"url":/resto/+i.url}})}),1)],1),_vm._v(" "),_vm._l((_vm.initialTab.concat(_vm.moreTab)),function(item){return _c('v-tab-item',{key:item.name,attrs:{"value":'tab-' + item.name}},[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},_vm._l((item.values),function(i){return _c('resto-card',{key:i.id,staticClass:"review-card",staticStyle:{"white-space":"initial"},attrs:{"data":i,"url":/resto/+i.url}})}),1)],1)})],2)],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[(_vm.moreTab.length)?_c('v-bottom-sheet',{attrs:{"inset":"","scrollable":"","max-width":"400"},model:{value:(_vm.moreBS),callback:function ($$v) {_vm.moreBS=$$v},expression:"moreBS"}},[_c('v-card',[_c('v-card-title',[_vm._v("More Options")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-card-text',{staticStyle:{"height":"300px"}},[_c('v-list',{attrs:{"dense":""}},_vm._l((_vm.moreTab),function(item){return _c('v-list-item',{key:item.name,on:{"click":function($event){return _vm.addItem(item)}}},[_c('v-list-item-title',[_vm._v(" "+_vm._s(item.name))]),_vm._v(" "),_c('v-divider')],1)}),1)],1)],1)],1):_vm._e()],1)],1)}
var LocationSelectorvue_type_template_id_df51084c_staticRenderFns = []


// CONCATENATED MODULE: ./components/LocationSelector.vue?vue&type=template&id=df51084c&

// EXTERNAL MODULE: ./node_modules/lodash.clonedeep/index.js
var lodash_clonedeep = __webpack_require__(180);
var lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep);

// EXTERNAL MODULE: external "vue-loading-overlay"
var external_vue_loading_overlay_ = __webpack_require__(63);
var external_vue_loading_overlay_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_overlay_);

// EXTERNAL MODULE: ./components/RestoCard.vue + 4 modules
var RestoCard = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vue-loading-overlay/dist/vue-loading.css
var vue_loading = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/lodash.shuffle/index.js
var lodash_shuffle = __webpack_require__(252);
var lodash_shuffle_default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocationSelector.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var LocationSelectorvue_type_script_lang_js_ = ({
  components: {
    RestoCard: RestoCard["a" /* default */],
    Loading: external_vue_loading_overlay_default.a
  },

  data() {
    return {
      drawer: false,
      selectedmarker: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
      coordiag: false,
      isLoading: true,
      isHide: false,
      isSearch: false,
      initialTab: [],
      moreTab: [],
      currentItem: null,
      partners: [],
      moreBS: false,
      dialog: false,
      geocenter: {
        lat: 9.7941185,
        lng: 118.7322599
      },
      mylocation: {
        lat: 9.7941185,
        lng: 118.7322599
      }
    };
  },

  computed: {
    cartSize() {
      return this.$store.getters['cart/getCartItemCount'];
    },

    resto() {
      return this.$store.getters['map/getStores'];
    },

    tags() {
      const fare = this.$store.getters['admin/getFare'];
      const menu = [];

      if (fare !== null && fare.hasOwnProperty('tags')) {
        const tags = lodash_clonedeep_default()(fare.tags).sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
        tags.forEach(tag => {
          const foods = this.getRestos(tag);
          if (foods.length > 0) menu.push({
            name: tag,
            values: foods
          });
        });
        return menu;
      } else {
        return [];
      }
    }

  },
  watch: {
    tags() {
      if (this.tags.length > 5) {
        this.initialTab = lodash_clonedeep_default()(this.tags).splice(0, 3);
        this.moreTab = lodash_clonedeep_default()(this.tags).splice(4, this.tags.length - 1);
      }
    },

    currentItem() {
      document.getElementById('scrolling-techniques-3').scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

  },

  mounted() {
    this.$store.commit('map/clearDeliveryFees');

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(() => {
        this.$getLocation({
          enableHighAccuracy: true,
          timeout: 10000
        }).then(coordinates => {
          if (coordinates.accuracy < 500) {
            this.findStores({
              lat: coordinates.lat,
              lng: coordinates.lng
            });
          } else {
            this.isLoading = false;
            this.isHide = true;
          }
        }, error => {
          console.log(error);
          this.isLoading = false;
          this.isHide = true;
        });
      }, () => {
        this.isLoading = false;
        this.isHide = true;
      });
    } else {
      this.isLoading = false;
      this.isHide = true;
    }
  },

  methods: {
    addItem(item) {
      window.scrollTo(0, 0);
      const removed = this.initialTab.splice(0, 1);
      this.initialTab.push(...this.moreTab.splice(this.moreTab.indexOf(item), 1));
      this.moreTab.push(...removed);
      this.$nextTick(() => {
        this.moreBS = false;
        this.currentItem = 'tab-' + item.name;
        this.moreTab = this.moreTab.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      });
    },

    findStores(coordinates) {
      this.$store.commit('map/setLocation', {
        lat: coordinates.lat,
        lng: coordinates.lng
      });
      this.$store.dispatch('map/getNearbyStore', {
        lat: coordinates.lat,
        lng: coordinates.lng
      }).then(() => {
        this.isLoading = false;
        this.isHide = false;
        this.coordiag = false;
      });
    },

    centerChange() {
      const coordinates = this.$refs.gMap.map.getCenter();
      this.$refs.gmapmarker.marker.setPosition({
        lat: coordinates.lat(),
        lng: coordinates.lng()
      });
    },

    updateMapLocation() {
      this.isLoading = true;
      const coordinates = this.$refs.gMap.map.getCenter();
      this.findStores({
        lat: coordinates.lat(),
        lng: coordinates.lng()
      });
    },

    getRestos(item) {
      try {
        if (item !== 'all') {
          let resto = lodash_clonedeep_default()(this.resto.filter(a => a.tags.includes(item)));
          let featured = lodash_shuffle_default()(resto.filter(a => a.rates.cr > 0));
          let notFeatured = lodash_shuffle_default()(resto.filter(a => a.rates.cr == 0));
          return featured.concat(notFeatured.sort((a, b) => a.draft - b.draft));
        } else {
          let resto = lodash_clonedeep_default()(this.resto);
          let featured = lodash_shuffle_default()(resto.filter(a => a.rates.cr > 0));
          let notFeatured = lodash_shuffle_default()(resto.filter(a => a.rates.cr == 0));
          return featured.concat(notFeatured.sort((a, b) => a.draft - b.draft));
        }
      } catch (e) {
        return [];
      }
    },

    checkIfExist(item) {
      const c = this.resto.filter(a => a.tags.includes(item));
      console.log(c, item);
    }

  }
});
// CONCATENATED MODULE: ./components/LocationSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LocationSelectorvue_type_script_lang_js_ = (LocationSelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
var VAppBar = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js
var VAppBarNavIcon = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBadge/VBadge.js
var VBadge = __webpack_require__(202);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VContent/VContent.js + 1 modules
var VContent = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var components_VList = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(192);

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

// CONCATENATED MODULE: ./components/LocationSelector.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LocationSelectorvue_type_script_lang_js_,
  LocationSelectorvue_type_template_id_df51084c_render,
  LocationSelectorvue_type_template_id_df51084c_staticRenderFns,
  false,
  null,
  null,
  "372d6f5c"
  
)

/* harmony default export */ var LocationSelector = (component.exports);

/* vuetify-loader */

































installComponents_default()(component, {VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VAutocomplete: VAutocomplete["a" /* default */],VAvatar: VAvatar["a" /* default */],VBadge: VBadge["a" /* default */],VBottomSheet: VBottomSheet["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VContainer: VContainer["a" /* default */],VContent: VContent["a" /* default */],VDivider: VDivider["a" /* default */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */],VSpacer: VSpacer["a" /* default */],VTab: VTab["a" /* default */],VTabItem: VTabItem["a" /* default */],VTabs: VTabs["a" /* default */],VTabsItems: VTabsItems["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/food.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var foodvue_type_script_lang_js_ = ({
  components: {
    LocationSelector: LocationSelector
  },
  layout: 'menu',

  mounted() {
    this.$fireAnalytics.logEvent('page_view');
  }

});
// CONCATENATED MODULE: ./pages/food.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_foodvue_type_script_lang_js_ = (foodvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/food.vue





/* normalize component */

var food_component = Object(componentNormalizer["a" /* default */])(
  pages_foodvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "11b68b2c"
  
)

/* harmony default export */ var food = __webpack_exports__["default"] = (food_component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkRpdmlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdWJoZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WUHJvZ3Jlc3NMaW5lYXIvVlByb2dyZXNzTGluZWFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbG9hZGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdmFsaWRhdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkdyaWQvVkdyaWQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRvb2xiYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL1ZDb3VudGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ291bnRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9pbnRlcnNlY3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2FyZC9WQ2FyZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkxhYmVsL1ZMYWJlbC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNZXNzYWdlcy9WTWVzc2FnZXMuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQXBwQmFyL1ZBcHBCYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNYWluL1ZNYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvY29tcGFyYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbWVudWFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdHJhbnNpdGlvbmFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQmFkZ2UvVkJhZGdlLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNoZWNrYm94L1ZTaW1wbGVDaGVja2JveC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZDaGlwL1ZDaGlwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5jbG9uZWRlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFicy5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZTbGlkZUdyb3VwL1ZTbGlkZUdyb3VwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVldpbmRvdy9WV2luZG93LnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZXaW5kb3cvVldpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYnNJdGVtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkFwcEJhci9WQXBwQmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWFpbi9WTWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvbnRlbnQvVkNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZTcGFjZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDaGlwL1ZDaGlwLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2hpcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNoZWNrYm94L1ZTaW1wbGVDaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0TGlzdC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9maWx0ZXJhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU2VsZWN0L1ZTZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZCYWRnZS9WQmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN0b0NhcmQudnVlPzBjYjgiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZSb3cudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhck5hdkljb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTbGlkZUdyb3VwL1ZTbGlkZUdyb3VwLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFic0Jhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYnNTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WV2luZG93L1ZXaW5kb3dJdGVtLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFiSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RvQ2FyZC52dWU/MmM2YiIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkxhenkvVkxhenkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkF1dG9jb21wbGV0ZS9WQXV0b2NvbXBsZXRlLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN0b0NhcmQudnVlPzNmYzgiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVzdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RvQ2FyZC52dWU/N2QyMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBdXRvY29tcGxldGUvVkF1dG9jb21wbGV0ZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLnNodWZmbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZm9vZC52dWU/MDJiYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2F0aW9uU2VsZWN0b3IudnVlP2M0ODAiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9jYXRpb25TZWxlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2NhdGlvblNlbGVjdG9yLnZ1ZT85MjY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9jYXRpb25TZWxlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vL3BhZ2VzL2Zvb2QudnVlIiwid2VicGFjazovLy8uL3BhZ2VzL2Zvb2QudnVlPzU2YWIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZm9vZC52dWUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZCdG4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFFQTtBQUNBLG9IOzs7Ozs7OztBQ0hBO0FBQUE7QUFFQTtBQUNBLHNIOzs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNLFlBQVksR0FBRyxvRkFBc0IsQ0FBM0MsaUJBQTJDLENBQTNDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsb0ZBQXNCLENBQTVDLGtCQUE0QyxDQUE1QztBQUNBLE1BQU0sU0FBUyxHQUFHLG9GQUFzQixDQUF4QyxjQUF3QyxDQUF4QztBQUNBLE1BQU0sVUFBVSxHQUFHLG9GQUFzQixDQUF6QyxlQUF5QyxDQUF6QztBQUVBO0FB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YUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtB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Ozs7OztBQ2xCeEI7QUFBQTtBQUVBO0FBQ0EsZ0giLCJmaWxlIjoicGFnZXMvZm9vZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWRGl2aWRlciBmcm9tICcuL1ZEaXZpZGVyJ1xuXG5leHBvcnQgeyBWRGl2aWRlciB9XG5leHBvcnQgZGVmYXVsdCBWRGl2aWRlclxuIiwiaW1wb3J0IFZTdWJoZWFkZXIgZnJvbSAnLi9WU3ViaGVhZGVyJ1xuXG5leHBvcnQgeyBWU3ViaGVhZGVyIH1cbmV4cG9ydCBkZWZhdWx0IFZTdWJoZWFkZXJcbiIsImltcG9ydCBWQ2FyZCBmcm9tICcuL1ZDYXJkJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuY29uc3QgVkNhcmRBY3Rpb25zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX19hY3Rpb25zJylcbmNvbnN0IFZDYXJkU3VidGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3N1YnRpdGxlJylcbmNvbnN0IFZDYXJkVGV4dCA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fdGV4dCcpXG5jb25zdCBWQ2FyZFRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX190aXRsZScpXG5cbmV4cG9ydCB7XG4gIFZDYXJkLFxuICBWQ2FyZEFjdGlvbnMsXG4gIFZDYXJkU3VidGl0bGUsXG4gIFZDYXJkVGV4dCxcbiAgVkNhcmRUaXRsZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAkX3Z1ZXRpZnlfc3ViY29tcG9uZW50czoge1xuICAgIFZDYXJkLFxuICAgIFZDYXJkQWN0aW9ucyxcbiAgICBWQ2FyZFN1YnRpdGxlLFxuICAgIFZDYXJkVGV4dCxcbiAgICBWQ2FyZFRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRvb2xiYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZTaGVldCBmcm9tICcuLi9WU2hlZXQvVlNoZWV0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkltZywgeyBzcmNPYmplY3QgfSBmcm9tICcuLi9WSW1nL1ZJbWcnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGJyZWFraW5nIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVlNoZWV0LmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRvb2xiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYWJzb2x1dGU6IEJvb2xlYW4sXG4gICAgYm90dG9tOiBCb29sZWFuLFxuICAgIGNvbGxhcHNlOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGV4dGVuZGVkOiBCb29sZWFuLFxuICAgIGV4dGVuc2lvbkhlaWdodDoge1xuICAgICAgZGVmYXVsdDogNDgsXG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIH0sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBmbG9hdGluZzogQm9vbGVhbixcbiAgICBwcm9taW5lbnQ6IEJvb2xlYW4sXG4gICAgc2hvcnQ6IEJvb2xlYW4sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdIGFzIFByb3BUeXBlPHN0cmluZyB8IHNyY09iamVjdD4sXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hlYWRlcicsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGlzRXh0ZW5kZWQ6IGZhbHNlLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgaWYgKCF0aGlzLmlzRXh0ZW5kZWQpIHJldHVybiBoZWlnaHRcblxuICAgICAgY29uc3QgZXh0ZW5zaW9uSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5leHRlbnNpb25IZWlnaHQpXG5cbiAgICAgIHJldHVybiB0aGlzLmlzQ29sbGFwc2VkXG4gICAgICAgID8gaGVpZ2h0XG4gICAgICAgIDogaGVpZ2h0ICsgKCFpc05hTihleHRlbnNpb25IZWlnaHQpID8gZXh0ZW5zaW9uSGVpZ2h0IDogMClcbiAgICB9LFxuICAgIGNvbXB1dGVkQ29udGVudEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLmhlaWdodCkgcmV0dXJuIHBhcnNlSW50KHRoaXMuaGVpZ2h0KVxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQgJiYgdGhpcy5kZW5zZSkgcmV0dXJuIDk2XG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCAmJiB0aGlzLnNob3J0KSByZXR1cm4gMTEyXG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCkgcmV0dXJuIDEyOFxuICAgICAgaWYgKHRoaXMuZGVuc2UpIHJldHVybiA0OFxuICAgICAgaWYgKHRoaXMuc2hvcnQgfHwgdGhpcy4kdnVldGlmeS5icmVha3BvaW50LnNtQW5kRG93bikgcmV0dXJuIDU2XG4gICAgICByZXR1cm4gNjRcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRvb2xiYXInOiB0cnVlLFxuICAgICAgICAndi10b29sYmFyLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXRvb2xiYXItLWJvdHRvbSc6IHRoaXMuYm90dG9tLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZSc6IHRoaXMuY29sbGFwc2UsXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlZCc6IHRoaXMuaXNDb2xsYXBzZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tZXh0ZW5kZWQnOiB0aGlzLmlzRXh0ZW5kZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsb2F0aW5nJzogdGhpcy5mbG9hdGluZyxcbiAgICAgICAgJ3YtdG9vbGJhci0tcHJvbWluZW50JzogdGhpcy5pc1Byb21pbmVudCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQ29sbGFwc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taW5lbnRcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMubWVhc3VyYWJsZVN0eWxlcyxcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRIZWlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgY29uc3QgYnJlYWtpbmdQcm9wcyA9IFtcbiAgICAgIFsnYXBwJywgJzx2LWFwcC1iYXIgYXBwPiddLFxuICAgICAgWydtYW51YWwtc2Nyb2xsJywgJzx2LWFwcC1iYXIgOnZhbHVlPVwiZmFsc2VcIj4nXSxcbiAgICAgIFsnY2xpcHBlZC1sZWZ0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1sZWZ0PiddLFxuICAgICAgWydjbGlwcGVkLXJpZ2h0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1yaWdodD4nXSxcbiAgICAgIFsnaW52ZXJ0ZWQtc2Nyb2xsJywgJzx2LWFwcC1iYXIgaW52ZXJ0ZWQtc2Nyb2xsPiddLFxuICAgICAgWydzY3JvbGwtb2ZmLXNjcmVlbicsICc8di1hcHAtYmFyIHNjcm9sbC1vZmYtc2NyZWVuPiddLFxuICAgICAgWydzY3JvbGwtdGFyZ2V0JywgJzx2LWFwcC1iYXIgc2Nyb2xsLXRhcmdldD4nXSxcbiAgICAgIFsnc2Nyb2xsLXRocmVzaG9sZCcsICc8di1hcHAtYmFyIHNjcm9sbC10aHJlc2hvbGQ+J10sXG4gICAgICBbJ2NhcmQnLCAnPHYtYXBwLWJhciBmbGF0PiddLFxuICAgIF1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgYnJlYWtpbmdQcm9wcy5mb3JFYWNoKChbb3JpZ2luYWwsIHJlcGxhY2VtZW50XSkgPT4ge1xuICAgICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KG9yaWdpbmFsKSkgYnJlYWtpbmcob3JpZ2luYWwsIHJlcGxhY2VtZW50LCB0aGlzKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJhY2tncm91bmQgKCkge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkSGVpZ2h0KSxcbiAgICAgICAgc3JjOiB0aGlzLnNyYyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLiRzY29wZWRTbG90cy5pbWdcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5pbWcoeyBwcm9wcyB9KVxuICAgICAgICA6IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkltZywgeyBwcm9wcyB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9faW1hZ2UnLFxuICAgICAgfSwgW2ltYWdlXSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2NvbnRlbnQnLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMpKVxuICAgIH0sXG4gICAgZ2VuRXh0ZW5zaW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19leHRlbnNpb24nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmV4dGVuc2lvbkhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMsICdleHRlbnNpb24nKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICB0aGlzLmlzRXh0ZW5kZWQgPSB0aGlzLmV4dGVuZGVkIHx8ICEhdGhpcy4kc2NvcGVkU2xvdHMuZXh0ZW5zaW9uXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFt0aGlzLmdlbkNvbnRlbnQoKV1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzRXh0ZW5kZWQpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5FeHRlbnNpb24oKSlcbiAgICBpZiAodGhpcy5zcmMgfHwgdGhpcy4kc2NvcGVkU2xvdHMuaW1nKSBjaGlsZHJlbi51bnNoaWZ0KHRoaXMuZ2VuQmFja2dyb3VuZCgpKVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZXNzYWdlcy5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKENvbG9yYWJsZSwgVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1tZXNzYWdlcycsXG5cbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmdbXT4sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNoaWxkcmVuICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uLWdyb3VwJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXNfX3dyYXBwZXInLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6ICdtZXNzYWdlLXRyYW5zaXRpb24nLFxuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLnZhbHVlLm1hcCh0aGlzLmdlbk1lc3NhZ2UpKVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZSAobWVzc2FnZTogc3RyaW5nLCBrZXk6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzX19tZXNzYWdlJyxcbiAgICAgICAga2V5LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzLCAnZGVmYXVsdCcsIHsgbWVzc2FnZSwga2V5IH0pIHx8IFttZXNzYWdlXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzJyxcbiAgICAgIGNsYXNzOiB0aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICB9KSwgW3RoaXMuZ2VuQ2hpbGRyZW4oKV0pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuL1ZNZXNzYWdlcydcblxuZXhwb3J0IHsgVk1lc3NhZ2VzIH1cbmV4cG9ydCBkZWZhdWx0IFZNZXNzYWdlc1xuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVklucHV0LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuLi9WTWVzc2FnZXMnXG5cbi8vIE1peGluc1xuaW1wb3J0IEJpbmRzQXR0cnMgZnJvbSAnLi4vLi4vbWl4aW5zL2JpbmRzLWF0dHJzJ1xuaW1wb3J0IFZhbGlkYXRhYmxlIGZyb20gJy4uLy4uL21peGlucy92YWxpZGF0YWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQge1xuICBjb252ZXJ0VG9Vbml0LFxuICBnZXRTbG90LFxuICBrZWJhYkNhc2UsXG59IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEYXRhLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBJbnB1dFZhbGlkYXRpb25SdWxlIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQmluZHNBdHRycyxcbiAgVmFsaWRhdGFibGUsXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UgKi9cbiAgJF9tb2RlbEV2ZW50OiBzdHJpbmdcbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtaW5wdXQnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRJY29uOiBTdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcbiAgICBoaWRlRGV0YWlsczogW0Jvb2xlYW4sIFN0cmluZ10gYXMgUHJvcFR5cGU8Ym9vbGVhbiB8ICdhdXRvJz4sXG4gICAgaGludDogU3RyaW5nLFxuICAgIGlkOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnRIaW50OiBCb29sZWFuLFxuICAgIHByZXBlbmRJY29uOiBTdHJpbmcsXG4gICAgdmFsdWU6IG51bGwgYXMgYW55IGFzIFByb3BUeXBlPGFueT4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGhhc01vdXNlRG93bjogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWlucHV0LS1oYXMtc3RhdGUnOiB0aGlzLmhhc1N0YXRlLFxuICAgICAgICAndi1pbnB1dC0taGlkZS1kZXRhaWxzJzogIXRoaXMuc2hvd0RldGFpbHMsXG4gICAgICAgICd2LWlucHV0LS1pcy1sYWJlbC1hY3RpdmUnOiB0aGlzLmlzTGFiZWxBY3RpdmUsXG4gICAgICAgICd2LWlucHV0LS1pcy1kaXJ0eSc6IHRoaXMuaXNEaXJ0eSxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWRpc2FibGVkJzogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAndi1pbnB1dC0taXMtZm9jdXNlZCc6IHRoaXMuaXNGb2N1c2VkLFxuICAgICAgICAvLyA8di1zd2l0Y2ggbG9hZGluZz4ubG9hZGluZyA9PT0gJycgc28gd2UgY2FuJ3QganVzdCBjYXN0IHRvIGJvb2xlYW5cbiAgICAgICAgJ3YtaW5wdXQtLWlzLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcgIT09IGZhbHNlICYmIHRoaXMubG9hZGluZyAhPSBudWxsLFxuICAgICAgICAndi1pbnB1dC0taXMtcmVhZG9ubHknOiB0aGlzLmlzUmVhZG9ubHksXG4gICAgICAgICd2LWlucHV0LS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRJZCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmlkIHx8IGBpbnB1dC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzVG9EaXNwbGF5Lmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGhhc0hpbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmhhc01lc3NhZ2VzICYmXG4gICAgICAgICEhdGhpcy5oaW50ICYmXG4gICAgICAgICh0aGlzLnBlcnNpc3RlbnRIaW50IHx8IHRoaXMuaXNGb2N1c2VkKVxuICAgIH0sXG4gICAgaGFzTGFiZWwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhKHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICAvLyBQcm94eSBmb3IgYGxhenlWYWx1ZWBcbiAgICAvLyBUaGlzIGFsbG93cyBhbiBpbnB1dFxuICAgIC8vIHRvIGZ1bmN0aW9uIHdpdGhvdXRcbiAgICAvLyBhIHByb3ZpZGVkIG1vZGVsXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgICAgIHRoaXMuJGVtaXQodGhpcy4kX21vZGVsRXZlbnQsIHZhbClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhIXRoaXMubGF6eVZhbHVlXG4gICAgfSxcbiAgICBpc0xhYmVsQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGlydHlcbiAgICB9LFxuICAgIG1lc3NhZ2VzVG9EaXNwbGF5ICgpOiBzdHJpbmdbXSB7XG4gICAgICBpZiAodGhpcy5oYXNIaW50KSByZXR1cm4gW3RoaXMuaGludF1cblxuICAgICAgaWYgKCF0aGlzLmhhc01lc3NhZ2VzKSByZXR1cm4gW11cblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnMubWFwKCh2YWxpZGF0aW9uOiBzdHJpbmcgfCBJbnB1dFZhbGlkYXRpb25SdWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsaWRhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiB2YWxpZGF0aW9uXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRpb24odGhpcy5pbnRlcm5hbFZhbHVlKVxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsaWRhdGlvblJlc3VsdCA9PT0gJ3N0cmluZycgPyB2YWxpZGF0aW9uUmVzdWx0IDogJydcbiAgICAgIH0pLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UgIT09ICcnKVxuICAgIH0sXG4gICAgc2hvd0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZURldGFpbHMgPT09IGZhbHNlIHx8ICh0aGlzLmhpZGVEZXRhaWxzID09PSAnYXV0bycgJiYgdGhpcy5oYXNEZXRhaWxzKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyB2LXJhZGlvLWdyb3VwIG5lZWRzIHRvIGVtaXQgYSBkaWZmZXJlbnQgZXZlbnRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzQ3NTJcbiAgICB0aGlzLiRfbW9kZWxFdmVudCA9ICh0aGlzLiRvcHRpb25zLm1vZGVsICYmIHRoaXMuJG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlblByZXBlbmRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuQ29udHJvbCgpLFxuICAgICAgICB0aGlzLmdlbkFwcGVuZFNsb3QoKSxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkNvbnRyb2wgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0X19jb250cm9sJyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5JbnB1dFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5NZXNzYWdlcygpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkljb24gKFxuICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgY2I/OiAoZTogRXZlbnQpID0+IHZvaWQsXG4gICAgICBleHRyYURhdGE6IFZOb2RlRGF0YSA9IHt9XG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gKHRoaXMgYXMgYW55KVtgJHt0eXBlfUljb25gXVxuICAgICAgY29uc3QgZXZlbnROYW1lID0gYGNsaWNrOiR7a2ViYWJDYXNlKHR5cGUpfWBcbiAgICAgIGNvbnN0IGhhc0xpc3RlbmVyID0gISEodGhpcy5saXN0ZW5lcnMkW2V2ZW50TmFtZV0gfHwgY2IpXG5cbiAgICAgIGNvbnN0IGRhdGEgPSBtZXJnZURhdGEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWxhYmVsJzogaGFzTGlzdGVuZXIgPyBrZWJhYkNhc2UodHlwZSkuc3BsaXQoJy0nKVswXSArICcgaWNvbicgOiB1bmRlZmluZWQsXG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICB9LFxuICAgICAgICBvbjogIWhhc0xpc3RlbmVyXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwgZSlcbiAgICAgICAgICAgICAgY2IgJiYgY2IoZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBDb250YWluZXIgaGFzIGcgZXZlbnQgdGhhdCB3aWxsXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG1lbnUgb3BlbiBpZiBlbmNsb3NlZFxuICAgICAgICAgICAgbW91c2V1cDogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICB9LCBleHRyYURhdGEpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1pbnB1dF9faWNvbmAsXG4gICAgICAgIGNsYXNzOiB0eXBlID8gYHYtaW5wdXRfX2ljb24tLSR7a2ViYWJDYXNlKHR5cGUpfWAgOiB1bmRlZmluZWQsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgVkljb24sXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBpY29uXG4gICAgICAgICksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuSW5wdXRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXRfX3Nsb3QnLFxuICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgICBtb3VzZWRvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgbW91c2V1cDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ2lucHV0LXNsb3QnLFxuICAgICAgfSksIFt0aGlzLmdlbkRlZmF1bHRTbG90KCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0xhYmVsKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGFiZWwsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogdGhpcy5oYXNTdGF0ZSxcbiAgICAgICAgICBmb3I6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZNZXNzYWdlcywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNvbG9yOiB0aGlzLmhhc0hpbnQgPyAnJyA6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5tZXNzYWdlc1RvRGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiB0aGlzLmhhc01lc3NhZ2VzID8gJ2FsZXJ0JyA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogcHJvcHMgPT4gZ2V0U2xvdCh0aGlzLCAnbWVzc2FnZScsIHByb3BzKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5TbG90IChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgICBzbG90OiAoVk5vZGUgfCBWTm9kZVtdKVtdXG4gICAgKSB7XG4gICAgICBpZiAoIXNsb3QubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWYgPSBgJHt0eXBlfS0ke2xvY2F0aW9ufWBcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LWlucHV0X18ke3JlZn1gLFxuICAgICAgICByZWYsXG4gICAgICB9LCBzbG90KVxuICAgIH0sXG4gICAgZ2VuUHJlcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90cy5wcmVwZW5kKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90cy5wcmVwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ3ByZXBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICAvLyBBcHBlbmQgaWNvbiBmb3IgdGV4dCBmaWVsZCB3YXMgcmVhbGx5XG4gICAgICAvLyBhbiBhcHBlbmRlZCBpbm5lciBpY29uLCB2LXRleHQtZmllbGRcbiAgICAgIC8vIHdpbGwgb3ZlcndyaXRlIHRoaXMgbWV0aG9kIGluIG9yZGVyIHRvIG9idGFpblxuICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdFxuICAgICAgaWYgKHRoaXMuJHNsb3RzLmFwcGVuZCkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHMuYXBwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBFdmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZURvd24gKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IHRydWVcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IGZhbHNlXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZXVwJywgZSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy52YWxpZGF0aW9uU3RhdGUsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dCcsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgIH0pLCB0aGlzLmdlbkNvbnRlbnQoKSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVklucHV0IGZyb20gJy4vVklucHV0J1xuXG5leHBvcnQgeyBWSW5wdXQgfVxuZXhwb3J0IGRlZmF1bHQgVklucHV0XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ2FyZC5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2xvYWRhYmxlJ1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSdcblxuLy8gSGVscGVyc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBMb2FkYWJsZSxcbiAgUm91dGFibGUsXG4gIFZTaGVldFxuKS5leHRlbmQoe1xuICBuYW1lOiAndi1jYXJkJyxcblxuICBwcm9wczoge1xuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgaG92ZXI6IEJvb2xlYW4sXG4gICAgaW1nOiBTdHJpbmcsXG4gICAgbGluazogQm9vbGVhbixcbiAgICBsb2FkZXJIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgcmFpc2VkOiBCb29sZWFuLFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWNhcmQnOiB0cnVlLFxuICAgICAgICAuLi5Sb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtY2FyZC0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtY2FyZC0taG92ZXInOiB0aGlzLmhvdmVyLFxuICAgICAgICAndi1jYXJkLS1saW5rJzogdGhpcy5pc0NsaWNrYWJsZSxcbiAgICAgICAgJ3YtY2FyZC0tbG9hZGluZyc6IHRoaXMubG9hZGluZyxcbiAgICAgICAgJ3YtY2FyZC0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAndi1jYXJkLS1yYWlzZWQnOiB0aGlzLnJhaXNlZCxcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qgc3R5bGU6IERpY3Rpb25hcnk8c3RyaW5nPiA9IHtcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuc3R5bGVzLmNhbGwodGhpcyksXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmltZykge1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7dGhpcy5pbWd9XCIpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXRgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlblByb2dyZXNzICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IExvYWRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5Qcm9ncmVzcy5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghcmVuZGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2FyZF9fcHJvZ3Jlc3MnLFxuICAgICAgICBrZXk6ICdwcm9ncmVzcycsXG4gICAgICB9LCBbcmVuZGVyXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLnN0eWxlID0gdGhpcy5zdHlsZXNcblxuICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICBkYXRhLmF0dHJzID0gZGF0YS5hdHRycyB8fCB7fVxuICAgICAgZGF0YS5hdHRycy50YWJpbmRleCA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIGRhdGEpLCBbXG4gICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICB0aGlzLiRzbG90cy5kZWZhdWx0LFxuICAgIF0pXG4gIH0sXG59KVxuIiwiaW1wb3J0ICcuL1ZQcm9ncmVzc0xpbmVhci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQge1xuICBWRmFkZVRyYW5zaXRpb24sXG4gIFZTbGlkZVhUcmFuc2l0aW9uLFxufSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFByb3h5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcHJveHlhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMgfSBmcm9tICd2dWUvdHlwZXMnXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAndG9wJywgJ2JvdHRvbSddKSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kT3BhY2l0eToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBidWZmZXJWYWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEwMCxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBxdWVyeTogQm9vbGVhbixcbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3RyZWFtOiBCb29sZWFuLFxuICAgIHN0cmlwZWQ6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVybmFsTGF6eVZhbHVlOiB0aGlzLnZhbHVlIHx8IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgX19jYWNoZWRCYWNrZ3JvdW5kICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19iYWNrZ3JvdW5kJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuYmFja2dyb3VuZFN0eWxlLFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQodGhpcy5jb21wdXRlZFRyYW5zaXRpb24sIFt0aGlzLl9fY2FjaGVkQmFyVHlwZV0pXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhclR5cGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB0aGlzLl9fY2FjaGVkSW5kZXRlcm1pbmF0ZSA6IHRoaXMuX19jYWNoZWREZXRlcm1pbmF0ZVxuICAgIH0sXG4gICAgX19jYWNoZWRCdWZmZXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2J1ZmZlcicsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBfX2NhY2hlZERldGVybWluYXRlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtcHJvZ3Jlc3MtbGluZWFyX19kZXRlcm1pbmF0ZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIF9fY2FjaGVkSW5kZXRlcm1pbmF0ZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZScsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlLS1hY3RpdmUnOiB0aGlzLmFjdGl2ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzc0JhcignbG9uZycpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzQmFyKCdzaG9ydCcpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIF9fY2FjaGVkU3RyZWFtICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgaWYgKCF0aGlzLnN0cmVhbSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fc3RyZWFtJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCgxMDAgLSB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGJhY2tncm91bmRTdHlsZSAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gdGhpcy5iYWNrZ3JvdW5kT3BhY2l0eSA9PSBudWxsXG4gICAgICAgID8gKHRoaXMuYmFja2dyb3VuZENvbG9yID8gMSA6IDAuMylcbiAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMuYmFja2dyb3VuZE9wYWNpdHkpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGJhY2tncm91bmRPcGFjaXR5LFxuICAgICAgICBbdGhpcy5pc1JldmVyc2VkID8gJ3JpZ2h0JyA6ICdsZWZ0J106IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZEJ1ZmZlciAtIHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tYWJzb2x1dGUnOiB0aGlzLmFic29sdXRlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLWZpeGVkJzogdGhpcy5maXhlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1xdWVyeSc6IHRoaXMucXVlcnksXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcmVhY3RpdmUnOiB0aGlzLnJlYWN0aXZlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJldmVyc2UnOiB0aGlzLmlzUmV2ZXJzZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1zdHJpcGVkJzogdGhpcy5zdHJpcGVkLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IFZGYWRlVHJhbnNpdGlvbiA6IFZTbGlkZVhUcmFuc2l0aW9uXG4gICAgfSxcbiAgICBpc1JldmVyc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bCAhPT0gdGhpcy5yZXZlcnNlXG4gICAgfSxcbiAgICBub3JtYWxpemVkQnVmZmVyICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMuYnVmZmVyVmFsdWUpXG4gICAgfSxcbiAgICBub3JtYWxpemVkVmFsdWUgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5pbnRlcm5hbExhenlWYWx1ZSlcbiAgICB9LFxuICAgIHJlYWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuJGxpc3RlbmVycy5jaGFuZ2UpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzdHlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxuXG4gICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHN0eWxlcy5oZWlnaHQgPSAwXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pbmRldGVybWluYXRlICYmIHBhcnNlRmxvYXQodGhpcy5ub3JtYWxpemVkQnVmZmVyKSAhPT0gMTAwKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkQnVmZmVyLCAnJScpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZXNcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90KHRoaXMsICdkZWZhdWx0JywgeyB2YWx1ZTogdGhpcy5pbnRlcm5hbExhenlWYWx1ZSB9KVxuXG4gICAgICBpZiAoIXNsb3QpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2NvbnRlbnQnLFxuICAgICAgfSwgc2xvdClcbiAgICB9LFxuICAgIGdlbkxpc3RlbmVycyAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLiRsaXN0ZW5lcnNcblxuICAgICAgaWYgKHRoaXMucmVhY3RpdmUpIHtcbiAgICAgICAgbGlzdGVuZXJzLmNsaWNrID0gdGhpcy5vbkNsaWNrXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnNcbiAgICB9LFxuICAgIGdlblByb2dyZXNzQmFyIChuYW1lOiAnbG9uZycgfCAnc2hvcnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBbbmFtZV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5yZWFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IGUub2Zmc2V0WCAvIHdpZHRoICogMTAwXG4gICAgfSxcbiAgICBub3JtYWxpemUgKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgIGlmICh2YWx1ZSA8IDApIHJldHVybiAwXG4gICAgICBpZiAodmFsdWUgPiAxMDApIHJldHVybiAxMDBcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5pbmRldGVybWluYXRlID8gdW5kZWZpbmVkIDogdGhpcy5ub3JtYWxpemVkVmFsdWUsXG4gICAgICB9LFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20gPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuYWN0aXZlID8gY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCkgOiAwLFxuICAgICAgICB0b3A6IHRoaXMudG9wID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5nZW5MaXN0ZW5lcnMoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgdGhpcy5fX2NhY2hlZFN0cmVhbSxcbiAgICAgIHRoaXMuX19jYWNoZWRCYWNrZ3JvdW5kLFxuICAgICAgdGhpcy5fX2NhY2hlZEJ1ZmZlcixcbiAgICAgIHRoaXMuX19jYWNoZWRCYXIsXG4gICAgICB0aGlzLmdlbkNvbnRlbnQoKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZMYWJlbC5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUsIHsgZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyB9IGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1sYWJlbCcsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGFic29sdXRlOiBCb29sZWFuLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBmb2N1c2VkOiBCb29sZWFuLFxuICAgIGZvcjogU3RyaW5nLFxuICAgIGxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgfSxcblxuICByZW5kZXIgKGgsIGN0eCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsaXN0ZW5lcnMsIHByb3BzIH0gPSBjdHhcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWxhYmVsJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LWxhYmVsLS1hY3RpdmUnOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgJ3YtbGFiZWwtLWlzLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIC4uLmZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMoY3R4KSxcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBmb3I6IHByb3BzLmZvcixcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogIXByb3BzLmZvcixcbiAgICAgIH0sXG4gICAgICBvbjogbGlzdGVuZXJzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbGVmdDogY29udmVydFRvVW5pdChwcm9wcy5sZWZ0KSxcbiAgICAgICAgcmlnaHQ6IGNvbnZlcnRUb1VuaXQocHJvcHMucmlnaHQpLFxuICAgICAgICBwb3NpdGlvbjogcHJvcHMuYWJzb2x1dGUgPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJyxcbiAgICAgIH0sXG4gICAgICByZWY6ICdsYWJlbCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2xhYmVsJywgQ29sb3JhYmxlLm9wdGlvbnMubWV0aG9kcy5zZXRUZXh0Q29sb3IocHJvcHMuZm9jdXNlZCAmJiBwcm9wcy5jb2xvciwgZGF0YSksIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCBWTGFiZWwgZnJvbSAnLi9WTGFiZWwnXG5cbmV4cG9ydCB7IFZMYWJlbCB9XG5leHBvcnQgZGVmYXVsdCBWTGFiZWxcbiIsImltcG9ydCBWdWUsIHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyJ1xuXG5pbnRlcmZhY2UgY29sb3JhYmxlIGV4dGVuZHMgVnVlIHtcbiAgY29sb3I/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBMb2FkYWJsZVxuICpcbiAqIEBtaXhpblxuICpcbiAqIFVzZWQgdG8gYWRkIGxpbmVhciBwcm9ncmVzcyBiYXIgdG8gY29tcG9uZW50c1xuICogQ2FuIHVzZSBhIGRlZmF1bHQgYmFyIHdpdGggYSBzcGVjaWZpYyBjb2xvclxuICogb3IgZGVzaWduYXRlIGEgY3VzdG9tIHByb2dyZXNzIGxpbmVhciBiYXJcbiAqL1xuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQ8Y29sb3JhYmxlPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdsb2FkYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbG9hZGVySGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMixcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Qcm9ncmVzcyAoKTogVk5vZGUgfCBWTm9kZVtdIHwgbnVsbCB7XG4gICAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLnByb2dyZXNzIHx8IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlByb2dyZXNzTGluZWFyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICAgICAgY29sb3I6ICh0aGlzLmxvYWRpbmcgPT09IHRydWUgfHwgdGhpcy5sb2FkaW5nID09PSAnJylcbiAgICAgICAgICAgID8gKHRoaXMuY29sb3IgfHwgJ3ByaW1hcnknKVxuICAgICAgICAgICAgOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmxvYWRlckhlaWdodCxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uL3RoZW1lYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uL3JlZ2lzdHJhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBJbnB1dE1lc3NhZ2UsIElucHV0VmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBSZWdpc3RyYWJsZUluamVjdDwnZm9ybScsIGFueT4oJ2Zvcm0nKSxcbiAgVGhlbWVhYmxlLFxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndmFsaWRhdGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgZXJyb3JDb3VudDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBydWxlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRWYWxpZGF0aW9uUnVsZXM+LFxuICAgIHN1Y2Nlc3M6IEJvb2xlYW4sXG4gICAgc3VjY2Vzc01lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgdmFsaWRhdGVPbkJsdXI6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yQnVja2V0OiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgIGhhc0NvbG9yOiBmYWxzZSxcbiAgICAgIGhhc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaGFzSW5wdXQ6IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGlzUmVzZXR0aW5nOiBmYWxzZSxcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuY29sb3IpIHJldHVybiB0aGlzLmNvbG9yXG4gICAgICAvLyBJdCdzIGFzc3VtZWQgdGhhdCBpZiB0aGUgaW5wdXQgaXMgb24gYVxuICAgICAgLy8gZGFyayBiYWNrZ3JvdW5kLCB0aGUgdXNlciB3aWxsIHdhbnQgdG9cbiAgICAgIC8vIGhhdmUgYSB3aGl0ZSBjb2xvci4gSWYgdGhlIGVudGlyZSBhcHBcbiAgICAgIC8vIGlzIHNldHVwIHRvIGJlIGRhcmssIHRoZW4gdGhleSB3aWxsXG4gICAgICAvLyBsaWtlIHdhbnQgdG8gdXNlIHRoZWlyIHByaW1hcnkgY29sb3JcbiAgICAgIGlmICh0aGlzLmlzRGFyayAmJiAhdGhpcy5hcHBJc0RhcmspIHJldHVybiAnd2hpdGUnXG4gICAgICBlbHNlIHJldHVybiAncHJpbWFyeSdcbiAgICB9LFxuICAgIGhhc0Vycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5lcnJvckJ1Y2tldC5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuZXJyb3JcbiAgICAgIClcbiAgICB9LFxuICAgIC8vIFRPRE86IEFkZCBsb2dpYyB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYmFzZWRcbiAgICAvLyB1cG9uIGEgZ29vZCB2YWxpZGF0aW9uXG4gICAgaGFzU3VjY2VzcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5zdWNjZXNzXG4gICAgICApXG4gICAgfSxcbiAgICBleHRlcm5hbEVycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwIHx8IHRoaXMuZXJyb3JcbiAgICB9LFxuICAgIGhhc01lc3NhZ2VzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgaGFzU3RhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaGFzU3VjY2VzcyB8fFxuICAgICAgICAodGhpcy5zaG91bGRWYWxpZGF0ZSAmJiB0aGlzLmhhc0Vycm9yKVxuICAgICAgKVxuICAgIH0sXG4gICAgaW50ZXJuYWxFcnJvck1lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuZXJyb3JNZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5tZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsU3VjY2Vzc01lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuc3VjY2Vzc01lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiB1bmtub3duIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlzYWJsZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgKFxuICAgICAgICAhIXRoaXMuZm9ybSAmJlxuICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZWRcbiAgICAgIClcbiAgICB9LFxuICAgIGlzSW50ZXJhY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seVxuICAgIH0sXG4gICAgaXNSZWFkb25seSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFkb25seSB8fCAoXG4gICAgICAgICEhdGhpcy5mb3JtICYmXG4gICAgICAgIHRoaXMuZm9ybS5yZWFkb25seVxuICAgICAgKVxuICAgIH0sXG4gICAgc2hvdWxkVmFsaWRhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuZXh0ZXJuYWxFcnJvcikgcmV0dXJuIHRydWVcbiAgICAgIGlmICh0aGlzLmlzUmVzZXR0aW5nKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVPbkJsdXJcbiAgICAgICAgPyB0aGlzLmhhc0ZvY3VzZWQgJiYgIXRoaXMuaXNGb2N1c2VkXG4gICAgICAgIDogKHRoaXMuaGFzSW5wdXQgfHwgdGhpcy5oYXNGb2N1c2VkKVxuICAgIH0sXG4gICAgdmFsaWRhdGlvbnMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQuc2xpY2UoMCwgTnVtYmVyKHRoaXMuZXJyb3JDb3VudCkpXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU3RhdGUgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5oYXNFcnJvciAmJiB0aGlzLnNob3VsZFZhbGlkYXRlKSByZXR1cm4gJ2Vycm9yJ1xuICAgICAgaWYgKHRoaXMuaGFzU3VjY2VzcykgcmV0dXJuICdzdWNjZXNzJ1xuICAgICAgaWYgKHRoaXMuaGFzQ29sb3IpIHJldHVybiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbGlkYXRpb25UYXJnZXQgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICh0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN1Y2Nlc3NNZXNzYWdlcyAmJiB0aGlzLnN1Y2Nlc3NNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVzc2FnZXMgJiYgdGhpcy5tZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvckJ1Y2tldFxuICAgICAgfSBlbHNlIHJldHVybiBbXVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBydWxlczoge1xuICAgICAgaGFuZGxlciAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKGRlZXBFcXVhbChuZXdWYWwsIG9sZFZhbCkpIHJldHVyblxuICAgICAgICB0aGlzLnZhbGlkYXRlKClcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlLFxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZSAoKSB7XG4gICAgICAvLyBJZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIHNldHRpbmcgaW5wdXQsXG4gICAgICAvLyBtYXJrIGl0IHdpdGggaGFzSW5wdXRcbiAgICAgIHRoaXMuaGFzSW5wdXQgPSB0cnVlXG4gICAgICB0aGlzLnZhbGlkYXRlT25CbHVyIHx8IHRoaXMuJG5leHRUaWNrKHRoaXMudmFsaWRhdGUpXG4gICAgfSxcbiAgICBpc0ZvY3VzZWQgKHZhbCkge1xuICAgICAgLy8gU2hvdWxkIG5vdCBjaGVjayB2YWxpZGF0aW9uXG4gICAgICAvLyBpZiBkaXNhYmxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdmFsICYmXG4gICAgICAgICF0aGlzLmlzRGlzYWJsZWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIHRoaXMudmFsaWRhdGVPbkJsdXIgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy52YWxpZGF0ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmVzZXR0aW5nICgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc0lucHV0ID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYXNGb2N1c2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKVxuICAgICAgfSwgMClcbiAgICB9LFxuICAgIGhhc0Vycm9yICh2YWwpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTplcnJvcicsIHZhbClcbiAgICAgIH1cbiAgICB9LFxuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5mb3JtICYmIHRoaXMuZm9ybS5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0udW5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5JbnRlcm5hbE1lc3NhZ2VzIChtZXNzYWdlczogSW5wdXRNZXNzYWdlIHwgbnVsbCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICghbWVzc2FnZXMpIHJldHVybiBbXVxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlcykpIHJldHVybiBtZXNzYWdlc1xuICAgICAgZWxzZSByZXR1cm4gW21lc3NhZ2VzXVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICB0aGlzLmlzUmVzZXR0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gQXJyYXkuaXNBcnJheSh0aGlzLmludGVybmFsVmFsdWUpXG4gICAgICAgID8gW11cbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgcmVzZXRWYWxpZGF0aW9uICgpIHtcbiAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSB0cnVlXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHZhbGlkYXRlIChmb3JjZSA9IGZhbHNlLCB2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgZXJyb3JCdWNrZXQgPSBbXVxuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLmludGVybmFsVmFsdWVcblxuICAgICAgaWYgKGZvcmNlKSB0aGlzLmhhc0lucHV0ID0gdGhpcy5oYXNGb2N1c2VkID0gdHJ1ZVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5ydWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMucnVsZXNbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicgPyBydWxlKHZhbHVlKSA6IHJ1bGVcblxuICAgICAgICBpZiAodmFsaWQgPT09IGZhbHNlIHx8IHR5cGVvZiB2YWxpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlcnJvckJ1Y2tldC5wdXNoKHZhbGlkIHx8ICcnKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWxpZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgY29uc29sZUVycm9yKGBSdWxlcyBzaG91bGQgcmV0dXJuIGEgc3RyaW5nIG9yIGJvb2xlYW4sIHJlY2VpdmVkICcke3R5cGVvZiB2YWxpZH0nIGluc3RlYWRgLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXJyb3JCdWNrZXQgPSBlcnJvckJ1Y2tldFxuICAgICAgdGhpcy52YWxpZCA9IGVycm9yQnVja2V0Lmxlbmd0aCA9PT0gMFxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZFxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlRvb2xiYXIgZnJvbSAnLi9WVG9vbGJhcidcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5jb25zdCBWVG9vbGJhclRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX190aXRsZScpXG5jb25zdCBWVG9vbGJhckl0ZW1zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX19pdGVtcycpXG5cbmV4cG9ydCB7XG4gIFZUb29sYmFyLFxuICBWVG9vbGJhckl0ZW1zLFxuICBWVG9vbGJhclRpdGxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVlRvb2xiYXIsXG4gICAgVlRvb2xiYXJJdGVtcyxcbiAgICBWVG9vbGJhclRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkNvdW50ZXIuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgVGhlbWVhYmxlLCB7IGZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY291bnRlcicsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBtYXg6IFtOdW1iZXIsIFN0cmluZ10sXG4gIH0sXG5cbiAgcmVuZGVyIChoLCBjdHgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gY3R4XG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQocHJvcHMubWF4LCAxMClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHByb3BzLnZhbHVlLCAxMClcbiAgICBjb25zdCBjb250ZW50ID0gbWF4ID8gYCR7dmFsdWV9IC8gJHttYXh9YCA6IFN0cmluZyhwcm9wcy52YWx1ZSlcbiAgICBjb25zdCBpc0dyZWF0ZXIgPSBtYXggJiYgKHZhbHVlID4gbWF4KVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1jb3VudGVyJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdlcnJvci0tdGV4dCc6IGlzR3JlYXRlcixcbiAgICAgICAgLi4uZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyhjdHgpLFxuICAgICAgfSxcbiAgICB9LCBjb250ZW50KVxuICB9LFxufSlcbiIsImltcG9ydCBWQ291bnRlciBmcm9tICcuL1ZDb3VudGVyJ1xuXG5leHBvcnQgeyBWQ291bnRlciB9XG5leHBvcnQgZGVmYXVsdCBWQ291bnRlclxuIiwiLy8gRGlyZWN0aXZlc1xuaW1wb3J0IEludGVyc2VjdCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ludGVyc2VjdCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb25zb2xlV2FybiB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlcnNlY3RhYmxlIChvcHRpb25zOiB7IG9uVmlzaWJsZTogc3RyaW5nW10gfSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykpIHtcbiAgICAvLyBkbyBub3RoaW5nIGJlY2F1c2UgaW50ZXJzZWN0aW9uIG9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGVcbiAgICByZXR1cm4gVnVlLmV4dGVuZCh7IG5hbWU6ICdpbnRlcnNlY3RhYmxlJyB9KVxuICB9XG5cbiAgcmV0dXJuIFZ1ZS5leHRlbmQoe1xuICAgIG5hbWU6ICdpbnRlcnNlY3RhYmxlJyxcblxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0Lmluc2VydGVkKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50LCB7XG4gICAgICAgIG5hbWU6ICdpbnRlcnNlY3QnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vbk9ic2VydmUsXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZXN0cm95ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0LnVuYmluZCh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudClcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25PYnNlcnZlIChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciwgaXNJbnRlcnNlY3Rpbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFpc0ludGVyc2VjdGluZykgcmV0dXJuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG9wdGlvbnMub25WaXNpYmxlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAodGhpcyBhcyBhbnkpW29wdGlvbnMub25WaXNpYmxlW2ldXVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlV2FybihvcHRpb25zLm9uVmlzaWJsZVtpXSArICcgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUgb24gdGhlIGluc3RhbmNlIGJ1dCByZWZlcmVuY2VkIGluIGludGVyc2VjdGFibGUgbWl4aW4gb3B0aW9ucycpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUZXh0RmllbGQuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWQ291bnRlciBmcm9tICcuLi9WQ291bnRlcidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBJbnRlcnNlY3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9pbnRlcnNlY3RhYmxlJ1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4uLy4uL21peGlucy9sb2FkYWJsZSdcbmltcG9ydCBWYWxpZGF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdmFsaWRhdGFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwga2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBicmVha2luZywgY29uc29sZVdhcm4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWSW5wdXQsXG4gIEludGVyc2VjdGFibGUoe1xuICAgIG9uVmlzaWJsZTogW1xuICAgICAgJ3NldExhYmVsV2lkdGgnLFxuICAgICAgJ3NldFByZWZpeFdpZHRoJyxcbiAgICAgICdzZXRQcmVwZW5kV2lkdGgnLFxuICAgICAgJ3RyeUF1dG9mb2N1cycsXG4gICAgXSxcbiAgfSksXG4gIExvYWRhYmxlLFxuKVxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBsYWJlbDogSFRNTEVsZW1lbnRcbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICAgICdwcmVwZW5kLWlubmVyJzogSFRNTEVsZW1lbnRcbiAgICBwcmVmaXg6IEhUTUxFbGVtZW50XG4gICAgc3VmZml4OiBIVE1MRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGRpcnR5VHlwZXMgPSBbJ2NvbG9yJywgJ2ZpbGUnLCAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ3dlZWsnLCAnbW9udGgnXVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi10ZXh0LWZpZWxkJyxcblxuICBkaXJlY3RpdmVzOiB7IHJpcHBsZSB9LFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRPdXRlckljb246IFN0cmluZyxcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgIGNsZWFySWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjbGVhcicsXG4gICAgfSxcbiAgICBjb3VudGVyOiBbQm9vbGVhbiwgTnVtYmVyLCBTdHJpbmddLFxuICAgIGNvdW50ZXJWYWx1ZTogRnVuY3Rpb24gYXMgUHJvcFR5cGU8KHZhbHVlOiBhbnkpID0+IG51bWJlcj4sXG4gICAgZmlsbGVkOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgZnVsbFdpZHRoOiBCb29sZWFuLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBwcmVmaXg6IFN0cmluZyxcbiAgICBwcmVwZW5kSW5uZXJJY29uOiBTdHJpbmcsXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHNoYXBlZDogQm9vbGVhbixcbiAgICBzaW5nbGVMaW5lOiBCb29sZWFuLFxuICAgIHNvbG86IEJvb2xlYW4sXG4gICAgc29sb0ludmVydGVkOiBCb29sZWFuLFxuICAgIHN1ZmZpeDogU3RyaW5nLFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYmFkSW5wdXQ6IGZhbHNlLFxuICAgIGxhYmVsV2lkdGg6IDAsXG4gICAgcHJlZml4V2lkdGg6IDAsXG4gICAgcHJlcGVuZFdpZHRoOiAwLFxuICAgIGluaXRpYWxWYWx1ZTogbnVsbCxcbiAgICBpc0Jvb3RlZDogZmFsc2UsXG4gICAgaXNDbGVhcmluZzogZmFsc2UsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZCc6IHRydWUsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWZ1bGwtd2lkdGgnOiB0aGlzLmZ1bGxXaWR0aCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcHJlZml4JzogdGhpcy5wcmVmaXgsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNpbmdsZS1saW5lJzogdGhpcy5pc1NpbmdsZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sbyc6IHRoaXMuaXNTb2xvLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvLWludmVydGVkJzogdGhpcy5zb2xvSW52ZXJ0ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZmlsbGVkJzogdGhpcy5maWxsZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWlzLWJvb3RlZCc6IHRoaXMuaXNCb290ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWVuY2xvc2VkJzogdGhpcy5pc0VuY2xvc2VkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1yZXZlcnNlJzogdGhpcy5yZXZlcnNlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1vdXRsaW5lZCc6IHRoaXMub3V0bGluZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc2hhcGVkJzogdGhpcy5zaGFwZWQsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgY29uc3QgY29tcHV0ZWRDb2xvciA9IFZhbGlkYXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb2xvci5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghdGhpcy5zb2xvSW52ZXJ0ZWQgfHwgIXRoaXMuaXNGb2N1c2VkKSByZXR1cm4gY29tcHV0ZWRDb2xvclxuXG4gICAgICByZXR1cm4gdGhpcy5jb2xvciB8fCAncHJpbWFyeSdcbiAgICB9LFxuICAgIGNvbXB1dGVkQ291bnRlclZhbHVlICgpOiBudW1iZXIge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvdW50ZXJWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyVmFsdWUodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmludGVybmFsVmFsdWUgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoXG4gICAgfSxcbiAgICBoYXNDb3VudGVyICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvdW50ZXIgIT09IGZhbHNlICYmIHRoaXMuY291bnRlciAhPSBudWxsXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5jb21wdXRlZC5oYXNEZXRhaWxzLmNhbGwodGhpcykgfHwgdGhpcy5oYXNDb3VudGVyXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmxhenlWYWx1ZSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZT8udG9TdHJpbmcoKS5sZW5ndGggPiAwIHx8IHRoaXMuYmFkSW5wdXRcbiAgICB9LFxuICAgIGlzRW5jbG9zZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5maWxsZWQgfHxcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5vdXRsaW5lZFxuICAgICAgKVxuICAgIH0sXG4gICAgaXNMYWJlbEFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RpcnR5IHx8IGRpcnR5VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKVxuICAgIH0sXG4gICAgaXNTaW5nbGUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5zaW5nbGVMaW5lIHx8XG4gICAgICAgIHRoaXMuZnVsbFdpZHRoIHx8XG4gICAgICAgIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jZmlsbGVkLXRleHQtZmllbGRcbiAgICAgICAgKHRoaXMuZmlsbGVkICYmICF0aGlzLmhhc0xhYmVsKVxuICAgICAgKVxuICAgIH0sXG4gICAgaXNTb2xvICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNvbG8gfHwgdGhpcy5zb2xvSW52ZXJ0ZWRcbiAgICB9LFxuICAgIGxhYmVsUG9zaXRpb24gKCk6IFJlY29yZDwnbGVmdCcgfCAncmlnaHQnLCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+IHtcbiAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5wcmVmaXggJiYgIXRoaXMubGFiZWxWYWx1ZSkgPyB0aGlzLnByZWZpeFdpZHRoIDogMFxuXG4gICAgICBpZiAodGhpcy5sYWJlbFZhbHVlICYmIHRoaXMucHJlcGVuZFdpZHRoKSBvZmZzZXQgLT0gdGhpcy5wcmVwZW5kV2lkdGhcblxuICAgICAgcmV0dXJuICh0aGlzLiR2dWV0aWZ5LnJ0bCA9PT0gdGhpcy5yZXZlcnNlKSA/IHtcbiAgICAgICAgbGVmdDogb2Zmc2V0LFxuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgfSA6IHtcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICByaWdodDogb2Zmc2V0LFxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0xhYmVsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0xhYmVsICYmICghdGhpcy5pc1NpbmdsZSB8fCAoIXRoaXMuaXNMYWJlbEFjdGl2ZSAmJiAhdGhpcy5wbGFjZWhvbGRlcikpXG4gICAgfSxcbiAgICBsYWJlbFZhbHVlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc1NpbmdsZSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNMYWJlbEFjdGl2ZSB8fCB0aGlzLnBsYWNlaG9sZGVyKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBsYWJlbFZhbHVlOiAnc2V0TGFiZWxXaWR0aCcsXG4gICAgb3V0bGluZWQ6ICdzZXRMYWJlbFdpZHRoJyxcbiAgICBsYWJlbCAoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljayh0aGlzLnNldExhYmVsV2lkdGgpXG4gICAgfSxcbiAgICBwcmVmaXggKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5zZXRQcmVmaXhXaWR0aClcbiAgICB9LFxuICAgIGlzRm9jdXNlZDogJ3VwZGF0ZVZhbHVlJyxcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2JveCcpKSB7XG4gICAgICBicmVha2luZygnYm94JywgJ2ZpbGxlZCcsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2Jyb3dzZXItYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGJyZWFraW5nKCdicm93c2VyLWF1dG9jb21wbGV0ZScsICdhdXRvY29tcGxldGUnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0aGlzLnNoYXBlZCAmJiAhKHRoaXMuZmlsbGVkIHx8IHRoaXMub3V0bGluZWQgfHwgdGhpcy5pc1NvbG8pKSB7XG4gICAgICBjb25zb2xlV2Fybignc2hhcGVkIHNob3VsZCBiZSB1c2VkIHdpdGggZWl0aGVyIGZpbGxlZCBvciBvdXRsaW5lZCcsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuYXV0b2ZvY3VzICYmIHRoaXMudHJ5QXV0b2ZvY3VzKClcbiAgICB0aGlzLnNldExhYmVsV2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlZml4V2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlcGVuZFdpZHRoKClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gKHRoaXMuaXNCb290ZWQgPSB0cnVlKSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBmb2N1cyAoKSB7XG4gICAgICB0aGlzLm9uRm9jdXMoKVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBibHVyIChlPzogRXZlbnQpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvNTkxM1xuICAgICAgLy8gU2FmYXJpIHRhYiBvcmRlciBnZXRzIGJyb2tlbiBpZiBjYWxsZWQgc3luY2hyb25vdXNcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuYmx1cigpXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xlYXJhYmxlQ2FsbGJhY2sgKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuaW50ZXJuYWxWYWx1ZSA9IG51bGwpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ2FwcGVuZC1vdXRlciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLW91dGVyJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRPdXRlckljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kT3V0ZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlblByZXBlbmRJbm5lclNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlcGVuZElubmVySWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdwcmVwZW5kSW5uZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdpbm5lcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5JY29uU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydhcHBlbmQnXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ2FwcGVuZCddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgY29uc3QgcHJlcGVuZCA9IHRoaXMuZ2VuUHJlcGVuZElubmVyU2xvdCgpXG5cbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIGlucHV0LmNoaWxkcmVuID0gaW5wdXQuY2hpbGRyZW4gfHwgW11cbiAgICAgICAgaW5wdXQuY2hpbGRyZW4udW5zaGlmdChwcmVwZW5kKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9LFxuICAgIGdlbkNsZWFySWNvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuY2xlYXJhYmxlKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5pc0RpcnR5ID8gdW5kZWZpbmVkIDogeyBhdHRyczogeyBkaXNhYmxlZDogdHJ1ZSB9IH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgW1xuICAgICAgICB0aGlzLmdlbkljb24oJ2NsZWFyJywgdGhpcy5jbGVhcmFibGVDYWxsYmFjaywgZGF0YSksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQ291bnRlciAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzQ291bnRlcikgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5jb3VudGVyID09PSB0cnVlID8gdGhpcy5hdHRycyQubWF4bGVuZ3RoIDogdGhpcy5jb3VudGVyXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZDb3VudGVyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5jb21wdXRlZENvdW50ZXJWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5Db250cm9sICgpIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbkNvbnRyb2wuY2FsbCh0aGlzKVxuICAgIH0sXG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5GaWVsZHNldCgpLFxuICAgICAgICB0aGlzLmdlblRleHRGaWVsZFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5DbGVhckljb24oKSxcbiAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5GaWVsZHNldCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSwgW3RoaXMuZ2VuTGVnZW5kKCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dMYWJlbCkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogIXRoaXMuaXNTaW5nbGUgJiYgKHRoaXMuaXNGb2N1c2VkIHx8ICEhdGhpcy52YWxpZGF0aW9uU3RhdGUpLFxuICAgICAgICAgIGZvcjogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIGxlZnQ6IHRoaXMubGFiZWxQb3NpdGlvbi5sZWZ0LFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIHJpZ2h0OiB0aGlzLmxhYmVsUG9zaXRpb24ucmlnaHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubGFiZWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxhYmVsLCBkYXRhLCB0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgZ2VuTGVnZW5kICgpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gIXRoaXMuc2luZ2xlTGluZSAmJiAodGhpcy5sYWJlbFZhbHVlIHx8IHRoaXMuaXNEaXJ0eSkgPyB0aGlzLmxhYmVsV2lkdGggOiAwXG4gICAgICBjb25zdCBzcGFuID0gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiAnJiM4MjAzOycgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdsZWdlbmQnLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6ICF0aGlzLmlzU2luZ2xlID8gY29udmVydFRvVW5pdCh3aWR0aCkgOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9LCBbc3Bhbl0pXG4gICAgfSxcbiAgICBnZW5JbnB1dCAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpc3RlbmVycyQpXG4gICAgICBkZWxldGUgbGlzdGVuZXJzWydjaGFuZ2UnXSAvLyBDaGFuZ2Ugc2hvdWxkIG5vdCBiZSBib3VuZCBleHRlcm5hbGx5XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnbnVtYmVyJyAmJiBPYmplY3QuaXModGhpcy5sYXp5VmFsdWUsIC0wKSkgPyAnLTAnIDogdGhpcy5sYXp5VmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLi4udGhpcy5hdHRycyQsXG4gICAgICAgICAgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcmVhZG9ubHk6IHRoaXMuaXNSZWFkb25seSxcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiBPYmplY3QuYXNzaWduKGxpc3RlbmVycywge1xuICAgICAgICAgIGJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICAgIGlucHV0OiB0aGlzLm9uSW5wdXQsXG4gICAgICAgICAgZm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgfSksXG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzTm9kZSA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuTWVzc2FnZXMuY2FsbCh0aGlzKVxuICAgICAgY29uc3QgY291bnRlck5vZGUgPSB0aGlzLmdlbkNvdW50ZXIoKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fZGV0YWlscycsXG4gICAgICB9LCBbXG4gICAgICAgIG1lc3NhZ2VzTm9kZSxcbiAgICAgICAgY291bnRlck5vZGUsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuVGV4dEZpZWxkU2xvdCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fc2xvdCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy5wcmVmaXggPyB0aGlzLmdlbkFmZml4KCdwcmVmaXgnKSA6IG51bGwsXG4gICAgICAgIHRoaXMuZ2VuSW5wdXQoKSxcbiAgICAgICAgdGhpcy5zdWZmaXggPyB0aGlzLmdlbkFmZml4KCdzdWZmaXgnKSA6IG51bGwsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQWZmaXggKHR5cGU6ICdwcmVmaXgnIHwgJ3N1ZmZpeCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBgdi10ZXh0LWZpZWxkX18ke3R5cGV9YCxcbiAgICAgICAgcmVmOiB0eXBlLFxuICAgICAgfSwgdGhpc1t0eXBlXSlcbiAgICB9LFxuICAgIG9uQmx1ciAoZT86IEV2ZW50KSB7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICBlICYmIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJGVtaXQoJ2JsdXInLCBlKSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNEaXNhYmxlZCB8fCAhdGhpcy4kcmVmcy5pbnB1dCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgIH0sXG4gICAgb25Gb2N1cyAoZT86IEV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuaW5wdXQpIHJldHVyblxuXG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy4kcmVmcy5pbnB1dCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIGUgJiYgdGhpcy4kZW1pdCgnZm9jdXMnLCBlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25JbnB1dCAoZTogRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgdGhpcy5iYWRJbnB1dCA9IHRhcmdldC52YWxpZGl0eSAmJiB0YXJnZXQudmFsaWRpdHkuYmFkSW5wdXRcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIpIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuaW50ZXJuYWxWYWx1ZSlcblxuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlRG93biAoZTogRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgaW5wdXQgZnJvbSBiZWluZyBibHVycmVkXG4gICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuJHJlZnMuaW5wdXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgVklucHV0Lm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlRG93bi5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5oYXNNb3VzZURvd24pIHRoaXMuZm9jdXMoKVxuXG4gICAgICBWSW5wdXQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBzZXRMYWJlbFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMubGFiZWxXaWR0aCA9IHRoaXMuJHJlZnMubGFiZWxcbiAgICAgICAgPyBNYXRoLm1pbih0aGlzLiRyZWZzLmxhYmVsLnNjcm9sbFdpZHRoICogMC43NSArIDYsICh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudCkub2Zmc2V0V2lkdGggLSAyNClcbiAgICAgICAgOiAwXG4gICAgfSxcbiAgICBzZXRQcmVmaXhXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMucHJlZml4KSByZXR1cm5cblxuICAgICAgdGhpcy5wcmVmaXhXaWR0aCA9IHRoaXMuJHJlZnMucHJlZml4Lm9mZnNldFdpZHRoXG4gICAgfSxcbiAgICBzZXRQcmVwZW5kV2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkIHx8ICF0aGlzLiRyZWZzWydwcmVwZW5kLWlubmVyJ10pIHJldHVyblxuXG4gICAgICB0aGlzLnByZXBlbmRXaWR0aCA9IHRoaXMuJHJlZnNbJ3ByZXBlbmQtaW5uZXInXS5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgdHJ5QXV0b2ZvY3VzICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuYXV0b2ZvY3VzIHx8XG4gICAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaW5wdXQgfHxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgKSByZXR1cm4gZmFsc2VcblxuICAgICAgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICB1cGRhdGVWYWx1ZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBTZXRzIHZhbGlkYXRpb25TdGF0ZSBmcm9tIHZhbGlkYXRhYmxlXG4gICAgICB0aGlzLmhhc0NvbG9yID0gdmFsXG5cbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5sYXp5VmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5sYXp5VmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4vVlByb2dyZXNzTGluZWFyJ1xuXG5leHBvcnQgeyBWUHJvZ3Jlc3NMaW5lYXIgfVxuZXhwb3J0IGRlZmF1bHQgVlByb2dyZXNzTGluZWFyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ2NvbXBhcmFibGUnLFxuICBwcm9wczoge1xuICAgIHZhbHVlQ29tcGFyYXRvcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBkZWVwRXF1YWwsXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPHR5cGVvZiBkZWVwRXF1YWw+LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZW51LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vVlRoZW1lUHJvdmlkZXInXG5cbi8vIE1peGluc1xuaW1wb3J0IEFjdGl2YXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9hY3RpdmF0YWJsZSdcbmltcG9ydCBEZWxheWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2RlbGF5YWJsZSdcbmltcG9ydCBEZXBlbmRlbnQgZnJvbSAnLi4vLi4vbWl4aW5zL2RlcGVuZGVudCdcbmltcG9ydCBEZXRhY2hhYmxlIGZyb20gJy4uLy4uL21peGlucy9kZXRhY2hhYmxlJ1xuaW1wb3J0IE1lbnVhYmxlIGZyb20gJy4uLy4uL21peGlucy9tZW51YWJsZSdcbmltcG9ydCBSZXR1cm5hYmxlIGZyb20gJy4uLy4uL21peGlucy9yZXR1cm5hYmxlJ1xuaW1wb3J0IFJvdW5kYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91bmRhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlJ1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgcmVtb3ZlZCB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGtleUNvZGVzLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFZOb2RlRGF0YSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgRGVwZW5kZW50LFxuICBEZWxheWFibGUsXG4gIERldGFjaGFibGUsXG4gIE1lbnVhYmxlLFxuICBSZXR1cm5hYmxlLFxuICBSb3VuZGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIFRoZW1lYWJsZVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1tZW51JyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc0luTWVudTogdHJ1ZSxcbiAgICAgIC8vIFBhc3MgdGhlbWUgdGhyb3VnaCB0byBkZWZhdWx0IHNsb3RcbiAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgIH1cbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICAgIFJlc2l6ZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGF1dG86IEJvb2xlYW4sXG4gICAgY2xvc2VPbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUtleXM6IEJvb2xlYW4sXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgb2Zmc2V0WDogQm9vbGVhbixcbiAgICBvZmZzZXRZOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5PbkhvdmVyOiBCb29sZWFuLFxuICAgIG9yaWdpbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RvcCBsZWZ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ3YtbWVudS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWxjdWxhdGVkVG9wQXV0bzogMCxcbiAgICAgIGRlZmF1bHRPZmZzZXQ6IDgsXG4gICAgICBoYXNKdXN0Rm9jdXNlZDogZmFsc2UsXG4gICAgICBsaXN0SW5kZXg6IC0xLFxuICAgICAgcmVzaXplVGltZW91dDogMCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgIHRpbGVzOiBbXSBhcyBIVE1MRWxlbWVudFtdLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFjdGl2ZVRpbGUgKCk6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XVxuICAgIH0sXG4gICAgY2FsY3VsYXRlZExlZnQgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBtZW51V2lkdGggPSBNYXRoLm1heCh0aGlzLmRpbWVuc2lvbnMuY29udGVudC53aWR0aCwgcGFyc2VGbG9hdCh0aGlzLmNhbGN1bGF0ZWRNaW5XaWR0aCkpXG5cbiAgICAgIGlmICghdGhpcy5hdXRvKSByZXR1cm4gdGhpcy5jYWxjTGVmdChtZW51V2lkdGgpIHx8ICcwJ1xuXG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmNhbGNYT3ZlcmZsb3codGhpcy5jYWxjTGVmdEF1dG8oKSwgbWVudVdpZHRoKSkgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4SGVpZ2h0ICgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hdXRvXG4gICAgICAgID8gJzIwMHB4J1xuICAgICAgICA6IGNvbnZlcnRUb1VuaXQodGhpcy5tYXhIZWlnaHQpXG5cbiAgICAgIHJldHVybiBoZWlnaHQgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4V2lkdGggKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLm1heFdpZHRoKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRNaW5XaWR0aCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLm1pbldpZHRoKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMubWluV2lkdGgpIHx8ICcwJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWluKFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yLndpZHRoICtcbiAgICAgICAgTnVtYmVyKHRoaXMubnVkZ2VXaWR0aCkgK1xuICAgICAgICAodGhpcy5hdXRvID8gMTYgOiAwKSxcbiAgICAgICAgTWF0aC5tYXgodGhpcy5wYWdlV2lkdGggLSAyNCwgMClcbiAgICAgIClcblxuICAgICAgY29uc3QgY2FsY3VsYXRlZE1heFdpZHRoID0gaXNOYU4ocGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpKVxuICAgICAgICA/IG1pbldpZHRoXG4gICAgICAgIDogcGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpXG5cbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KE1hdGgubWluKFxuICAgICAgICBjYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIG1pbldpZHRoXG4gICAgICApKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRUb3AgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCB0b3AgPSAhdGhpcy5hdXRvXG4gICAgICAgID8gdGhpcy5jYWxjVG9wKClcbiAgICAgICAgOiBjb252ZXJ0VG9Vbml0KHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNhbGN1bGF0ZWRUb3BBdXRvKSlcblxuICAgICAgcmV0dXJuIHRvcCB8fCAnMCdcbiAgICB9LFxuICAgIGhhc0NsaWNrYWJsZVRpbGVzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudGlsZXMuZmluZCh0aWxlID0+IHRpbGUudGFiSW5kZXggPiAtMSkpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuY2FsY3VsYXRlZE1heEhlaWdodCxcbiAgICAgICAgbWluV2lkdGg6IHRoaXMuY2FsY3VsYXRlZE1pbldpZHRoLFxuICAgICAgICBtYXhXaWR0aDogdGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIHRvcDogdGhpcy5jYWxjdWxhdGVkVG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLmNhbGN1bGF0ZWRMZWZ0LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICB6SW5kZXg6IHRoaXMuekluZGV4IHx8IHRoaXMuYWN0aXZlWkluZGV4LFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZSAodmFsKSB7XG4gICAgICBpZiAoIXZhbCkgdGhpcy5saXN0SW5kZXggPSAtMVxuICAgIH0sXG4gICAgaXNDb250ZW50QWN0aXZlICh2YWwpIHtcbiAgICAgIHRoaXMuaGFzSnVzdEZvY3VzZWQgPSB2YWxcbiAgICB9LFxuICAgIGxpc3RJbmRleCAobmV4dCwgcHJldikge1xuICAgICAgaWYgKG5leHQgaW4gdGhpcy50aWxlcykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1tuZXh0XVxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zY3JvbGxUb3AgPSB0aWxlLm9mZnNldFRvcCAtIHRpbGUuY2xpZW50SGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHByZXYgaW4gdGhpcy50aWxlcyAmJlxuICAgICAgICB0aGlzLnRpbGVzW3ByZXZdLmNsYXNzTGlzdC5yZW1vdmUoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnZnVsbC13aWR0aCcpKSB7XG4gICAgICByZW1vdmVkKCdmdWxsLXdpZHRoJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLmNhbGxBY3RpdmF0ZSgpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucyBvZiBtZW51XG4gICAgICAvLyBhbmQgaXRzIGFjdGl2YXRvclxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICAgIC8vIFN0YXJ0IHRoZSB0cmFuc2l0aW9uXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAvLyBPbmNlIHRyYW5zaXRpb25pbmcsIGNhbGN1bGF0ZSBzY3JvbGwgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICB0aGlzLnN0YXJ0VHJhbnNpdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFRvcEF1dG8gPSB0aGlzLmNhbGNUb3BBdXRvKClcbiAgICAgICAgICAgIHRoaXMuYXV0byAmJiAodGhpcy4kcmVmcy5jb250ZW50LnNjcm9sbFRvcCA9IHRoaXMuY2FsY1Njcm9sbFBvc2l0aW9uKCkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNhbGNTY3JvbGxQb3NpdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSAkZWwucXVlcnlTZWxlY3RvcignLnYtbGlzdC1pdGVtLS1hY3RpdmUnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgbWF4U2Nyb2xsVG9wID0gJGVsLnNjcm9sbEhlaWdodCAtICRlbC5vZmZzZXRIZWlnaHRcblxuICAgICAgcmV0dXJuIGFjdGl2ZVRpbGVcbiAgICAgICAgPyBNYXRoLm1pbihtYXhTY3JvbGxUb3AsIE1hdGgubWF4KDAsIGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gJGVsLm9mZnNldEhlaWdodCAvIDIgKyBhY3RpdmVUaWxlLm9mZnNldEhlaWdodCAvIDIpKVxuICAgICAgICA6ICRlbC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGNhbGNMZWZ0QXV0byAoKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvci5sZWZ0IC0gdGhpcy5kZWZhdWx0T2Zmc2V0ICogMilcbiAgICB9LFxuICAgIGNhbGNUb3BBdXRvICgpIHtcbiAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgY29uc3QgYWN0aXZlVGlsZSA9ICRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0tLWFjdGl2ZScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuXG4gICAgICBpZiAoIWFjdGl2ZVRpbGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vZmZzZXRZIHx8ICFhY3RpdmVUaWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IEFycmF5LmZyb20odGhpcy50aWxlcykuaW5kZXhPZihhY3RpdmVUaWxlKVxuXG4gICAgICBjb25zdCB0aWxlRGlzdGFuY2VGcm9tTWVudVRvcCA9IGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gdGhpcy5jYWxjU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgY29uc3QgZmlyc3RUaWxlT2Zmc2V0VG9wID0gKCRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0nKSBhcyBIVE1MRWxlbWVudCkub2Zmc2V0VG9wXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wIC0gdGlsZURpc3RhbmNlRnJvbU1lbnVUb3AgLSBmaXJzdFRpbGVPZmZzZXRUb3AgLSAxXG4gICAgfSxcbiAgICBjaGFuZ2VMaXN0SW5kZXggKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIC8vIEZvciBpbmZpbml0ZSBzY3JvbGwgYW5kIGF1dG9jb21wbGV0ZSwgcmUtZXZhbHVhdGUgY2hpbGRyZW5cbiAgICAgIHRoaXMuZ2V0VGlsZXMoKVxuXG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgIXRoaXMuaGFzQ2xpY2thYmxlVGlsZXMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5kb3duKSB7XG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLnVwKSB7XG4gICAgICAgIHRoaXMucHJldlRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyICYmIHRoaXMubGlzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XS5jbGljaygpXG4gICAgICB9IGVsc2UgeyByZXR1cm4gfVxuICAgICAgLy8gT25lIG9mIHRoZSBjb25kaXRpb25zIHdhcyBtZXQsIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKCMyOTg4KVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSxcbiAgICBjbG9zZUNvbmRpdGlvbmFsIChlOiBFdmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgIXRoaXMuX2lzRGVzdHJveWVkICYmXG4gICAgICAgIHRoaXMuY2xvc2VPbkNsaWNrICYmXG4gICAgICAgICF0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnModGFyZ2V0KVxuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yQXR0cmlidXRlcyAoKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckF0dHJpYnV0ZXMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVUaWxlICYmIHRoaXMuYWN0aXZlVGlsZS5pZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IHRoaXMuYWN0aXZlVGlsZS5pZCxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlc1xuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IE1lbnVhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JMaXN0ZW5lcnMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZUtleXMpIHtcbiAgICAgICAgbGlzdGVuZXJzLmtleWRvd24gPSB0aGlzLm9uS2V5RG93blxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZW5Db250ZW50KClcblxuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBjb250ZW50XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sIFtjb250ZW50XSlcbiAgICB9LFxuICAgIGdlbkRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10ge1xuICAgICAgY29uc3QgZGlyZWN0aXZlczogVk5vZGVEaXJlY3RpdmVbXSA9IFt7XG4gICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuaXNDb250ZW50QWN0aXZlLFxuICAgICAgfV1cblxuICAgICAgLy8gRG8gbm90IGFkZCBjbGljayBvdXRzaWRlIGZvciBob3ZlciBtZW51XG4gICAgICBpZiAoIXRoaXMub3Blbk9uSG92ZXIgJiYgdGhpcy5jbG9zZU9uQ2xpY2spIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnY2xpY2stb3V0c2lkZScsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0sXG4gICAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgICAgICBpbmNsdWRlOiAoKSA9PiBbdGhpcy4kZWwsIC4uLnRoaXMuZ2V0T3BlbkRlcGVuZGVudEVsZW1lbnRzKCldLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RpdmVzXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLnRoaXMuZ2V0U2NvcGVJZEF0dHJzKCksXG4gICAgICAgICAgcm9sZTogJ3JvbGUnIGluIHRoaXMuJGF0dHJzID8gdGhpcy4kYXR0cnMucm9sZSA6ICdtZW51JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIC4uLnRoaXMucm9vdFRoZW1lQ2xhc3NlcyxcbiAgICAgICAgICAuLi50aGlzLnJvdW5kZWRDbGFzc2VzLFxuICAgICAgICAgICd2LW1lbnVfX2NvbnRlbnQtLWF1dG8nOiB0aGlzLmF1dG8sXG4gICAgICAgICAgJ3YtbWVudV9fY29udGVudC0tZml4ZWQnOiB0aGlzLmFjdGl2YXRvckZpeGVkLFxuICAgICAgICAgIG1lbnVhYmxlX19jb250ZW50X19hY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICAgW3RoaXMuY29udGVudENsYXNzLnRyaW0oKV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5nZW5EaXJlY3RpdmVzKCksXG4gICAgICAgIHJlZjogJ2NvbnRlbnQnLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlT25Db250ZW50Q2xpY2spIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIH0sXG4gICAgICB9IGFzIFZOb2RlRGF0YVxuXG4gICAgICBpZiAodGhpcy4kbGlzdGVuZXJzLnNjcm9sbCkge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLnNjcm9sbCA9IHRoaXMuJGxpc3RlbmVycy5zY3JvbGxcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMub3Blbk9uSG92ZXIpIHtcbiAgICAgICAgb3B0aW9ucy5vbiA9IG9wdGlvbnMub24gfHwge31cbiAgICAgICAgb3B0aW9ucy5vbi5tb3VzZWVudGVyID0gdGhpcy5tb3VzZUVudGVySGFuZGxlclxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcGVuT25Ib3Zlcikge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLm1vdXNlbGVhdmUgPSB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCBvcHRpb25zLCB0aGlzLmdldENvbnRlbnRTbG90KCkpXG4gICAgfSxcbiAgICBnZXRUaWxlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuY29udGVudCkgcmV0dXJuXG5cbiAgICAgIHRoaXMudGlsZXMgPSBBcnJheS5mcm9tKHRoaXMuJHJlZnMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1saXN0LWl0ZW0nKSlcbiAgICB9LFxuICAgIG1vdXNlRW50ZXJIYW5kbGVyICgpIHtcbiAgICAgIHRoaXMucnVuRGVsYXkoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0p1c3RGb2N1c2VkKSByZXR1cm5cblxuICAgICAgICB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIG1vdXNlTGVhdmVIYW5kbGVyIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgcmUtYWN0aXZhdGlvblxuICAgICAgdGhpcy5ydW5EZWxheSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkgcmV0dXJuXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgICAgICB0aGlzLmNhbGxEZWFjdGl2YXRlKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBuZXh0VGlsZSAoKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleCArIDFdXG5cbiAgICAgIGlmICghdGlsZSkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgICB0aGlzLmxpc3RJbmRleCA9IC0xXG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RJbmRleCsrXG4gICAgICBpZiAodGlsZS50YWJJbmRleCA9PT0gLTEpIHRoaXMubmV4dFRpbGUoKVxuICAgIH0sXG4gICAgcHJldlRpbGUgKCkge1xuICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXggLSAxXVxuXG4gICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5saXN0SW5kZXggPSB0aGlzLnRpbGVzLmxlbmd0aFxuICAgICAgICB0aGlzLnByZXZUaWxlKClcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0SW5kZXgtLVxuICAgICAgaWYgKHRpbGUudGFiSW5kZXggPT09IC0xKSB0aGlzLnByZXZUaWxlKClcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGRlcGVuZGVudCBlbGVtZW50cyB0byBjbG9zZSBmaXJzdFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvciA9IHRoaXMuZ2V0QWN0aXZhdG9yKClcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gYWN0aXZhdG9yICYmIGFjdGl2YXRvci5mb2N1cygpKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgW2tleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duXS5pbmNsdWRlcyhlLmtleUNvZGUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gQWxsb3cgZm9yIGlzQWN0aXZlIHdhdGNoZXIgdG8gZ2VuZXJhdGUgdGlsZSBsaXN0XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLmNoYW5nZUxpc3RJbmRleChlKSlcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIHNjcmVlbiByZXNpemVcbiAgICAgIC8vIGFuZCBvcmllbnRhdGlvbiBjaGFuZ2VcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcblxuICAgICAgLy8gV2hlbiByZXNpemluZyB0byBhIHNtYWxsZXIgd2lkdGhcbiAgICAgIC8vIGNvbnRlbnQgd2lkdGggaXMgZXZhbHVhdGVkIGJlZm9yZVxuICAgICAgLy8gdGhlIG5ldyBhY3RpdmF0b3Igd2lkdGggaGFzIGJlZW5cbiAgICAgIC8vIHNldCwgY2F1c2luZyBpdCB0byBub3Qgc2l6ZSBwcm9wZXJseVxuICAgICAgLy8gaGFja3kgYnV0IHdpbGwgcmV2aXNpdCBpbiB0aGUgZnV0dXJlXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KVxuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy51cGRhdGVEaW1lbnNpb25zLCAxMDApXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tZW51JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LW1lbnUtLWF0dGFjaGVkJzpcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gJycgfHxcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gdHJ1ZSB8fFxuICAgICAgICAgIHRoaXMuYXR0YWNoID09PSAnYXR0YWNoJyxcbiAgICAgIH0sXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBhcmc6ICc1MDAnLFxuICAgICAgICBuYW1lOiAncmVzaXplJyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25SZXNpemUsXG4gICAgICB9XSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgIXRoaXMuYWN0aXZhdG9yICYmIHRoaXMuZ2VuQWN0aXZhdG9yKCksXG4gICAgICB0aGlzLnNob3dMYXp5Q29udGVudCgoKSA9PiBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRoZW1lUHJvdmlkZXIsIHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIFt0aGlzLmdlblRyYW5zaXRpb24oKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IFZNZW51IGZyb20gJy4vVk1lbnUnXG5cbmV4cG9ydCB7IFZNZW51IH1cbmV4cG9ydCBkZWZhdWx0IFZNZW51XG4iLCIvLyBNaXhpbnNcbmltcG9ydCBQb3NpdGlvbmFibGUgZnJvbSAnLi4vcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFN0YWNrYWJsZSBmcm9tICcuLi9zdGFja2FibGUnXG5pbXBvcnQgQWN0aXZhdGFibGUgZnJvbSAnLi4vYWN0aXZhdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgU3RhY2thYmxlLFxuICBQb3NpdGlvbmFibGUsXG4gIEFjdGl2YXRhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICBhdHRhY2g6IGJvb2xlYW4gfCBzdHJpbmcgfCBFbGVtZW50XG4gIG9mZnNldFk6IGJvb2xlYW5cbiAgb2Zmc2V0WDogYm9vbGVhblxuICAkcmVmczoge1xuICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50XG4gICAgYWN0aXZhdG9yOiBIVE1MRWxlbWVudFxuICB9XG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdtZW51YWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBhbGxvd092ZXJmbG93OiBCb29sZWFuLFxuICAgIGxpZ2h0OiBCb29sZWFuLFxuICAgIGRhcms6IEJvb2xlYW4sXG4gICAgbWF4V2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBtaW5XaWR0aDogW051bWJlciwgU3RyaW5nXSxcbiAgICBudWRnZUJvdHRvbToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZUxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VSaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVRvcDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVdpZHRoOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG9mZnNldE92ZXJmbG93OiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiBCb29sZWFuLFxuICAgIHBvc2l0aW9uWDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHBvc2l0aW9uWToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGFic29sdXRlWDogMCxcbiAgICBhYnNvbHV0ZVk6IDAsXG4gICAgYWN0aXZhdGVkQnk6IG51bGwgYXMgRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGFjdGl2YXRvckZpeGVkOiBmYWxzZSxcbiAgICBkaW1lbnNpb25zOiB7XG4gICAgICBhY3RpdmF0b3I6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBvZmZzZXRUb3A6IDAsXG4gICAgICAgIHNjcm9sbEhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0VG9wOiAwLFxuICAgICAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaGFzSnVzdEZvY3VzZWQ6IGZhbHNlLFxuICAgIGhhc1dpbmRvdzogZmFsc2UsXG4gICAgaW5wdXRBY3RpdmF0b3I6IGZhbHNlLFxuICAgIGlzQ29udGVudEFjdGl2ZTogZmFsc2UsXG4gICAgcGFnZVdpZHRoOiAwLFxuICAgIHBhZ2VZT2Zmc2V0OiAwLFxuICAgIHN0YWNrQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQtLWFjdGl2ZScsXG4gICAgc3RhY2tNaW5aSW5kZXg6IDYsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRMZWZ0ICgpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2YXRvckxlZnQgPSAodGhpcy5hdHRhY2ggIT09IGZhbHNlID8gYS5vZmZzZXRMZWZ0IDogYS5sZWZ0KSB8fCAwXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWF4KGEud2lkdGgsIGMud2lkdGgpXG4gICAgICBsZXQgbGVmdCA9IDBcbiAgICAgIGxlZnQgKz0gdGhpcy5sZWZ0ID8gYWN0aXZhdG9yTGVmdCAtIChtaW5XaWR0aCAtIGEud2lkdGgpIDogYWN0aXZhdG9yTGVmdFxuICAgICAgaWYgKHRoaXMub2Zmc2V0WCkge1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IGlzTmFOKE51bWJlcih0aGlzLm1heFdpZHRoKSlcbiAgICAgICAgICA/IGEud2lkdGhcbiAgICAgICAgICA6IE1hdGgubWluKGEud2lkdGgsIE51bWJlcih0aGlzLm1heFdpZHRoKSlcblxuICAgICAgICBsZWZ0ICs9IHRoaXMubGVmdCA/IC1tYXhXaWR0aCA6IGEud2lkdGhcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm51ZGdlTGVmdCkgbGVmdCAtPSBwYXJzZUludCh0aGlzLm51ZGdlTGVmdClcbiAgICAgIGlmICh0aGlzLm51ZGdlUmlnaHQpIGxlZnQgKz0gcGFyc2VJbnQodGhpcy5udWRnZVJpZ2h0KVxuXG4gICAgICByZXR1cm4gbGVmdFxuICAgIH0sXG4gICAgY29tcHV0ZWRUb3AgKCkge1xuICAgICAgY29uc3QgYSA9IHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3JcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmRpbWVuc2lvbnMuY29udGVudFxuICAgICAgbGV0IHRvcCA9IDBcblxuICAgICAgaWYgKHRoaXMudG9wKSB0b3AgKz0gYS5oZWlnaHQgLSBjLmhlaWdodFxuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgdG9wICs9IGEub2Zmc2V0VG9wXG4gICAgICBlbHNlIHRvcCArPSBhLnRvcCArIHRoaXMucGFnZVlPZmZzZXRcbiAgICAgIGlmICh0aGlzLm9mZnNldFkpIHRvcCArPSB0aGlzLnRvcCA/IC1hLmhlaWdodCA6IGEuaGVpZ2h0XG4gICAgICBpZiAodGhpcy5udWRnZVRvcCkgdG9wIC09IHBhcnNlSW50KHRoaXMubnVkZ2VUb3ApXG4gICAgICBpZiAodGhpcy5udWRnZUJvdHRvbSkgdG9wICs9IHBhcnNlSW50KHRoaXMubnVkZ2VCb3R0b20pXG5cbiAgICAgIHJldHVybiB0b3BcbiAgICB9LFxuICAgIGhhc0FjdGl2YXRvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLiRzY29wZWRTbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLmFjdGl2YXRvciB8fCAhIXRoaXMuaW5wdXRBY3RpdmF0b3JcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZGlzYWJsZWQgKHZhbCkge1xuICAgICAgdmFsICYmIHRoaXMuY2FsbERlYWN0aXZhdGUoKVxuICAgIH0sXG4gICAgaXNBY3RpdmUgKHZhbCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVyblxuXG4gICAgICB2YWwgPyB0aGlzLmNhbGxBY3RpdmF0ZSgpIDogdGhpcy5jYWxsRGVhY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBwb3NpdGlvblg6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgICBwb3NpdGlvblk6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy5oYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhYnNvbHV0ZVBvc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uWCB8fCB0aGlzLmFic29sdXRlWCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb25YIHx8IHRoaXMuYWJzb2x1dGVYLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZhdGUgKCkge30sXG4gICAgY2FsY0xlZnQgKG1lbnVXaWR0aDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmF0dGFjaCAhPT0gZmFsc2VcbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkTGVmdFxuICAgICAgICA6IHRoaXMuY2FsY1hPdmVyZmxvdyh0aGlzLmNvbXB1dGVkTGVmdCwgbWVudVdpZHRoKSlcbiAgICB9LFxuICAgIGNhbGNUb3AgKCkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5hdHRhY2ggIT09IGZhbHNlXG4gICAgICAgID8gdGhpcy5jb21wdXRlZFRvcFxuICAgICAgICA6IHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNvbXB1dGVkVG9wKSlcbiAgICB9LFxuICAgIGNhbGNYT3ZlcmZsb3cgKGxlZnQ6IG51bWJlciwgbWVudVdpZHRoOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHhPdmVyZmxvdyA9IGxlZnQgKyBtZW51V2lkdGggLSB0aGlzLnBhZ2VXaWR0aCArIDEyXG5cbiAgICAgIGlmICgoIXRoaXMubGVmdCB8fCB0aGlzLnJpZ2h0KSAmJiB4T3ZlcmZsb3cgPiAwKSB7XG4gICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0IC0geE92ZXJmbG93LCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIDEyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVmdCArIHRoaXMuZ2V0T2Zmc2V0TGVmdCgpXG4gICAgfSxcbiAgICBjYWxjWU92ZXJmbG93ICh0b3A6IG51bWJlcikge1xuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KClcbiAgICAgIGNvbnN0IHRvVG9wID0gdGhpcy5wYWdlWU9mZnNldCArIGRvY3VtZW50SGVpZ2h0XG4gICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnQuaGVpZ2h0XG4gICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRvcCArIGNvbnRlbnRIZWlnaHRcbiAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSB0b1RvcCA8IHRvdGFsSGVpZ2h0XG5cbiAgICAgIC8vIElmIG92ZXJmbG93aW5nIGJvdHRvbSBhbmQgb2Zmc2V0XG4gICAgICAvLyBUT0RPOiBzZXQgJ2JvdHRvbScgcG9zaXRpb24gaW5zdGVhZCBvZiAndG9wJ1xuICAgICAgaWYgKGlzT3ZlcmZsb3dpbmcgJiZcbiAgICAgICAgdGhpcy5vZmZzZXRPdmVyZmxvdyAmJlxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGVub3VnaCByb29tIHRvIG9mZnNldFxuICAgICAgICAvLyB0aGUgb3ZlcmZsb3csIGRvbid0IG9mZnNldFxuICAgICAgICBhY3RpdmF0b3IudG9wID4gY29udGVudEhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAoYWN0aXZhdG9yLnRvcCAtIGNvbnRlbnRIZWlnaHQpXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyBib3R0b21cbiAgICAgIH0gZWxzZSBpZiAoaXNPdmVyZmxvd2luZyAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRvVG9wIC0gY29udGVudEhlaWdodCAtIDEyXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyB0b3BcbiAgICAgIH0gZWxzZSBpZiAodG9wIDwgdGhpcy5wYWdlWU9mZnNldCAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAxMlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9wIDwgMTIgPyAxMiA6IHRvcFxuICAgIH0sXG4gICAgY2FsbEFjdGl2YXRlICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVyblxuXG4gICAgICB0aGlzLmFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNhbGxEZWFjdGl2YXRlICgpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gZmFsc2VcblxuICAgICAgdGhpcy5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNoZWNrRm9yUGFnZVlPZmZzZXQgKCkge1xuICAgICAgaWYgKHRoaXMuaGFzV2luZG93KSB7XG4gICAgICAgIHRoaXMucGFnZVlPZmZzZXQgPSB0aGlzLmFjdGl2YXRvckZpeGVkID8gMCA6IHRoaXMuZ2V0T2Zmc2V0VG9wKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrQWN0aXZhdG9yRml4ZWQgKCkge1xuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgcmV0dXJuXG4gICAgICBsZXQgZWwgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSBmYWxzZVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSAoKSB7fSxcbiAgICBnZW5BY3RpdmF0b3JMaXN0ZW5lcnMgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckxpc3RlbmVycy5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IG9uQ2xpY2sgPSBsaXN0ZW5lcnMuY2xpY2tcblxuICAgICAgbGlzdGVuZXJzLmNsaWNrID0gKGU6IE1vdXNlRXZlbnQgJiBLZXlib2FyZEV2ZW50ICYgRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcGVuT25DbGljaykge1xuICAgICAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hYnNvbHV0ZVggPSBlLmNsaWVudFhcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVkgPSBlLmNsaWVudFlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVyc1xuICAgIH0sXG4gICAgZ2V0SW5uZXJIZWlnaHQgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfSxcbiAgICBnZXRPZmZzZXRMZWZ0ICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICB9LFxuICAgIGdldE9mZnNldFRvcCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGdldFJvdW5kZWRCb3VuZGVkQ2xpZW50UmVjdCAoZWw6IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGgucm91bmQocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5yb3VuZChyZWN0LnJpZ2h0KSxcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQocmVjdC53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChyZWN0LmhlaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWFzdXJlIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICghZWwgfHwgIXRoaXMuaGFzV2luZG93KSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSb3VuZGVkQm91bmRlZENsaWVudFJlY3QoZWwpXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIGFjdGl2YXRvciBtYXJnaW5cbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcblxuICAgICAgICByZWN0LmxlZnQgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0ISlcbiAgICAgICAgcmVjdC50b3AgPSBwYXJzZUludChzdHlsZS5tYXJnaW5Ub3AhKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdFxuICAgIH0sXG4gICAgc25lYWtQZWVrIChjYjogKCkgPT4gdm9pZCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcblxuICAgICAgICBpZiAoIWVsIHx8IGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgIGNiKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICBjYigpXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdGFydFRyYW5zaXRpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbnRlbnRBY3RpdmUgPSB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdGhpcy5pc0FjdGl2ZVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgdXBkYXRlRGltZW5zaW9ucyAoKSB7XG4gICAgICB0aGlzLmhhc1dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICB0aGlzLmNoZWNrQWN0aXZhdG9yRml4ZWQoKVxuICAgICAgdGhpcy5jaGVja0ZvclBhZ2VZT2Zmc2V0KClcbiAgICAgIHRoaXMucGFnZVdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbnM6IGFueSA9IHtcbiAgICAgICAgYWN0aXZhdG9yOiB7IC4uLnRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3IgfSxcbiAgICAgICAgY29udGVudDogeyAuLi50aGlzLmRpbWVuc2lvbnMuY29udGVudCB9LFxuICAgICAgfVxuXG4gICAgICAvLyBBY3RpdmF0b3Igc2hvdWxkIGFscmVhZHkgYmUgc2hvd25cbiAgICAgIGlmICghdGhpcy5oYXNBY3RpdmF0b3IgfHwgdGhpcy5hYnNvbHV0ZSkge1xuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICAgIGlmICghYWN0aXZhdG9yKSByZXR1cm5cblxuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMubWVhc3VyZShhY3RpdmF0b3IpXG4gICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldExlZnQgPSBhY3RpdmF0b3Iub2Zmc2V0TGVmdFxuICAgICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgY3NzIHBhZGRpbmcgY2F1c2luZyB0aGluZ3MgdG8gbm90IGxpbmUgdXBcbiAgICAgICAgICAvLyB0aGlzIGlzIG1vc3RseSBmb3Igdi1hdXRvY29tcGxldGUsIGhvcGVmdWxseSBpdCB3b24ndCBicmVhayBhbnl0aGluZ1xuICAgICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldFRvcCA9IGFjdGl2YXRvci5vZmZzZXRUb3BcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRUb3AgPSAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBhbmQgaGlkZSB0byBnZXQgZGltZW5zaW9uc1xuICAgICAgdGhpcy5zbmVha1BlZWsoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQgJiYgKGRpbWVuc2lvbnMuY29udGVudCA9IHRoaXMubWVhc3VyZSh0aGlzLiRyZWZzLmNvbnRlbnQpKVxuXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd0cmFuc2l0aW9uYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlOiBTdHJpbmcsXG4gICAgb3JpZ2luOiBTdHJpbmcsXG4gICAgdHJhbnNpdGlvbjogU3RyaW5nLFxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqXG4gKiBBZGRzIHRoZSBrZXktdmFsdWUgYHBhaXJgIHRvIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gcGFpciBUaGUga2V5LXZhbHVlIHBhaXIgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAqL1xuZnVuY3Rpb24gYWRkTWFwRW50cnkobWFwLCBwYWlyKSB7XG4gIC8vIERvbid0IHJldHVybiBgbWFwLnNldGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIG1hcC5zZXQocGFpclswXSwgcGFpclsxXSk7XG4gIHJldHVybiBtYXA7XG59XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgc2V0YC5cbiAqL1xuZnVuY3Rpb24gYWRkU2V0RW50cnkoc2V0LCB2YWx1ZSkge1xuICAvLyBEb24ndCByZXR1cm4gYHNldC5hZGRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBzZXQuYWRkKHZhbHVlKTtcbiAgcmV0dXJuIHNldDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpLFxuICAgIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfX1snZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBjYWNoZSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChjYWNoZSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGNhY2hlLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjYWNoZSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGNhY2hlLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNGdWxsXSBTcGVjaWZ5IGEgY2xvbmUgaW5jbHVkaW5nIHN5bWJvbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGlzRGVlcCwgaXNGdWxsLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgaWYgKGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVPYmplY3QoaXNGdW5jID8ge30gOiB2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGJhc2VDbG9uZSwgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoIWlzQXJyKSB7XG4gICAgdmFyIHByb3BzID0gaXNGdWxsID8gZ2V0QWxsS2V5cyh2YWx1ZSkgOiBrZXlzKHZhbHVlKTtcbiAgfVxuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGlzRGVlcCwgaXNGdWxsLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDcmVhdGUocHJvdG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHByb3RvKSA/IG9iamVjdENyZWF0ZShwcm90bykgOiB7fTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihidWZmZXIubGVuZ3RoKTtcbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCB0cnVlKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKHNldFRvQXJyYXkoc2V0KSwgdHJ1ZSkgOiBzZXRUb0FycmF5KHNldCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkU2V0RW50cnksIG5ldyBzZXQuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gc291cmNlW2tleV0gOiBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbCBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbCBwcm9wZXJ0aWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gbmF0aXZlR2V0U3ltYm9scyA/IG92ZXJBcmcobmF0aXZlR2V0U3ltYm9scywgT2JqZWN0KSA6IHN0dWJBcnJheTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExLFxuLy8gZm9yIGRhdGEgdmlld3MgaW4gRWRnZSA8IDE0LCBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcy5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIGNsb25lU2V0KG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIHRydWUsIHRydWUpO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZXaW5kb3cuc2FzcydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBWTm9kZURpcmVjdGl2ZSB9IGZyb20gJ3Z1ZS90eXBlcy92bm9kZSdcbmltcG9ydCB7IFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgVG91Y2hIYW5kbGVycyB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBUb3VjaCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkJ0biBmcm9tICcuLi9WQnRuJ1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuaW1wb3J0IHsgQmFzZUl0ZW1Hcm91cCB9IGZyb20gJy4uL1ZJdGVtR3JvdXAvVkl0ZW1Hcm91cCdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IEJhc2VJdGVtR3JvdXAuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytd2luZG93JyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB3aW5kb3dHcm91cDogdGhpcyxcbiAgICB9XG4gIH0sXG5cbiAgZGlyZWN0aXZlczogeyBUb3VjaCB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd2LXdpbmRvdy1pdGVtLS1hY3RpdmUnLFxuICAgIH0sXG4gICAgY29udGludW91czogQm9vbGVhbixcbiAgICBtYW5kYXRvcnk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgbmV4dEljb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJyRuZXh0JyxcbiAgICB9LFxuICAgIHByZXZJY29uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICckcHJldicsXG4gICAgfSxcbiAgICByZXZlcnNlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgc2hvd0Fycm93czogQm9vbGVhbixcbiAgICBzaG93QXJyb3dzT25Ib3ZlcjogQm9vbGVhbixcbiAgICB0b3VjaDogT2JqZWN0IGFzIFByb3BUeXBlPFRvdWNoSGFuZGxlcnM+LFxuICAgIHRvdWNobGVzczogQm9vbGVhbixcbiAgICB2YWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5nZWRCeURlbGltaXRlcnM6IGZhbHNlLFxuICAgICAgaW50ZXJuYWxIZWlnaHQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBzdHJpbmcsIC8vIFRoaXMgY2FuIGJlIGZpeGVkIGJ5IGNoaWxkIGNsYXNzLlxuICAgICAgdHJhbnNpdGlvbkhlaWdodDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IHN0cmluZywgLy8gSW50ZXJtZWRpYXRlIGhlaWdodCBkdXJpbmcgdHJhbnNpdGlvbi5cbiAgICAgIHRyYW5zaXRpb25Db3VudDogMCwgLy8gTnVtYmVyIG9mIHdpbmRvd3MgaW4gdHJhbnNpdGlvbiBzdGF0ZS5cbiAgICAgIGlzQm9vdGVkOiBmYWxzZSxcbiAgICAgIGlzUmV2ZXJzZTogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNBY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbkNvdW50ID4gMFxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLkJhc2VJdGVtR3JvdXAub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXdpbmRvdy0tc2hvdy1hcnJvd3Mtb24taG92ZXInOiB0aGlzLnNob3dBcnJvd3NPbkhvdmVyLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRUcmFuc2l0aW9uICgpOiBzdHJpbmcge1xuICAgICAgaWYgKCF0aGlzLmlzQm9vdGVkKSByZXR1cm4gJydcblxuICAgICAgY29uc3QgYXhpcyA9IHRoaXMudmVydGljYWwgPyAneScgOiAneCdcbiAgICAgIGNvbnN0IHJldmVyc2UgPSB0aGlzLiR2dWV0aWZ5LnJ0bCAmJiBheGlzID09PSAneCcgPyAhdGhpcy5pbnRlcm5hbFJldmVyc2UgOiB0aGlzLmludGVybmFsUmV2ZXJzZVxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcmV2ZXJzZSA/ICctcmV2ZXJzZScgOiAnJ1xuXG4gICAgICByZXR1cm4gYHYtd2luZG93LSR7YXhpc30ke2RpcmVjdGlvbn0tdHJhbnNpdGlvbmBcbiAgICB9LFxuICAgIGhhc0FjdGl2ZUl0ZW1zICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiAhaXRlbS5kaXNhYmxlZClcbiAgICAgIClcbiAgICB9LFxuICAgIGhhc05leHQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGludW91cyB8fCB0aGlzLmludGVybmFsSW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCAtIDFcbiAgICB9LFxuICAgIGhhc1ByZXYgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGludW91cyB8fCB0aGlzLmludGVybmFsSW5kZXggPiAwXG4gICAgfSxcbiAgICBpbnRlcm5hbEluZGV4ICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsVmFsdWUgPT09IHRoaXMuZ2V0VmFsdWUoaXRlbSwgaSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcm5hbFJldmVyc2UgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSA/ICF0aGlzLmlzUmV2ZXJzZSA6IHRoaXMuaXNSZXZlcnNlXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGludGVybmFsSW5kZXg6ICd1cGRhdGVSZXZlcnNlJyxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+ICh0aGlzLmlzQm9vdGVkID0gdHJ1ZSkpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNvbnRhaW5lciAoKTogVk5vZGUge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbdGhpcy4kc2xvdHMuZGVmYXVsdF1cblxuICAgICAgaWYgKHRoaXMuc2hvd0Fycm93cykge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuQ29udHJvbEljb25zKCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi13aW5kb3dfX2NvbnRhaW5lcicsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3Ytd2luZG93X19jb250YWluZXItLWlzLWFjdGl2ZSc6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmludGVybmFsSGVpZ2h0IHx8IHRoaXMudHJhbnNpdGlvbkhlaWdodCxcbiAgICAgICAgfSxcbiAgICAgIH0sIGNoaWxkcmVuKVxuICAgIH0sXG4gICAgZ2VuSWNvbiAoXG4gICAgICBkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0JyxcbiAgICAgIGljb246IHN0cmluZyxcbiAgICAgIGZuOiAoKSA9PiB2b2lkXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtd2luZG93X18ke2RpcmVjdGlvbn1gLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZCdG4sIHtcbiAgICAgICAgICBwcm9wczogeyBpY29uOiB0cnVlIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy4kdnVldGlmeS5sYW5nLnQoYCR2dWV0aWZ5LmNhcm91c2VsLiR7ZGlyZWN0aW9ufWApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEJ5RGVsaW1pdGVycyA9IHRydWVcbiAgICAgICAgICAgICAgZm4oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LCBbXG4gICAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICAgICAgcHJvcHM6IHsgbGFyZ2U6IHRydWUgfSxcbiAgICAgICAgICB9LCBpY29uKSxcbiAgICAgICAgXSksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQ29udHJvbEljb25zICgpIHtcbiAgICAgIGNvbnN0IGljb25zID0gW11cblxuICAgICAgY29uc3QgcHJldkljb24gPSB0aGlzLiR2dWV0aWZ5LnJ0bFxuICAgICAgICA/IHRoaXMubmV4dEljb25cbiAgICAgICAgOiB0aGlzLnByZXZJY29uXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzUHJldiAmJlxuICAgICAgICBwcmV2SWNvbiAmJlxuICAgICAgICB0eXBlb2YgcHJldkljb24gPT09ICdzdHJpbmcnXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2VuSWNvbigncHJldicsIHByZXZJY29uLCB0aGlzLnByZXYpXG4gICAgICAgIGljb24gJiYgaWNvbnMucHVzaChpY29uKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXh0SWNvbiA9IHRoaXMuJHZ1ZXRpZnkucnRsXG4gICAgICAgID8gdGhpcy5wcmV2SWNvblxuICAgICAgICA6IHRoaXMubmV4dEljb25cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oYXNOZXh0ICYmXG4gICAgICAgIG5leHRJY29uICYmXG4gICAgICAgIHR5cGVvZiBuZXh0SWNvbiA9PT0gJ3N0cmluZydcbiAgICAgICkge1xuICAgICAgICBjb25zdCBpY29uID0gdGhpcy5nZW5JY29uKCduZXh0JywgbmV4dEljb24sIHRoaXMubmV4dClcbiAgICAgICAgaWNvbiAmJiBpY29ucy5wdXNoKGljb24pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpY29uc1xuICAgIH0sXG4gICAgZ2V0TmV4dEluZGV4IChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IChpbmRleCArIDEpICUgdGhpcy5pdGVtcy5sZW5ndGhcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW25leHRJbmRleF1cblxuICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybiB0aGlzLmdldE5leHRJbmRleChuZXh0SW5kZXgpXG5cbiAgICAgIHJldHVybiBuZXh0SW5kZXhcbiAgICB9LFxuICAgIGdldFByZXZJbmRleCAoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSAoaW5kZXggKyB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpICUgdGhpcy5pdGVtcy5sZW5ndGhcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3ByZXZJbmRleF1cblxuICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybiB0aGlzLmdldFByZXZJbmRleChwcmV2SW5kZXgpXG5cbiAgICAgIHJldHVybiBwcmV2SW5kZXhcbiAgICB9LFxuICAgIG5leHQgKCkge1xuICAgICAgdGhpcy5pc1JldmVyc2UgPSB0aGlzLiR2dWV0aWZ5LnJ0bFxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghdGhpcy5oYXNBY3RpdmVJdGVtcyB8fCAhdGhpcy5oYXNOZXh0KSByZXR1cm5cblxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5nZXROZXh0SW5kZXgodGhpcy5pbnRlcm5hbEluZGV4KVxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbbmV4dEluZGV4XVxuXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0sIG5leHRJbmRleClcbiAgICB9LFxuICAgIHByZXYgKCkge1xuICAgICAgdGhpcy5pc1JldmVyc2UgPSAhdGhpcy4kdnVldGlmeS5ydGxcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXRoaXMuaGFzQWN0aXZlSXRlbXMgfHwgIXRoaXMuaGFzUHJldikgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuZ2V0UHJldkluZGV4KHRoaXMuaW50ZXJuYWxJbmRleClcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2xhc3RJbmRleF1cblxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdGhpcy5nZXRWYWx1ZShpdGVtLCBsYXN0SW5kZXgpXG4gICAgfSxcbiAgICB1cGRhdGVSZXZlcnNlICh2YWw6IG51bWJlciwgb2xkVmFsOiBudW1iZXIpIHtcbiAgICAgIGlmICh0aGlzLmNoYW5nZWRCeURlbGltaXRlcnMpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkQnlEZWxpbWl0ZXJzID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNSZXZlcnNlID0gdmFsIDwgb2xkVmFsXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi13aW5kb3cnLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IFtdIGFzIFZOb2RlRGlyZWN0aXZlW10sXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRvdWNobGVzcykge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnRvdWNoIHx8IHtcbiAgICAgICAgbGVmdDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJHZ1ZXRpZnkucnRsID8gdGhpcy5wcmV2KCkgOiB0aGlzLm5leHQoKVxuICAgICAgICB9LFxuICAgICAgICByaWdodDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJHZ1ZXRpZnkucnRsID8gdGhpcy5uZXh0KCkgOiB0aGlzLnByZXYoKVxuICAgICAgICB9LFxuICAgICAgICBlbmQ6IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9LFxuICAgICAgICBzdGFydDogKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIGRhdGEuZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3RvdWNoJyxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBbdGhpcy5nZW5Db250YWluZXIoKV0pXG4gIH0sXG59KVxuIiwiLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZXaW5kb3cgZnJvbSAnLi4vVldpbmRvdy9WV2luZG93J1xuXG4vLyBUeXBlcyAmIENvbXBvbmVudHNcbmltcG9ydCB7IEJhc2VJdGVtR3JvdXAsIEdyb3VwYWJsZUluc3RhbmNlIH0gZnJvbSAnLi8uLi9WSXRlbUdyb3VwL1ZJdGVtR3JvdXAnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWV2luZG93LmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYnMtaXRlbXMnLFxuXG4gIHByb3BzOiB7XG4gICAgbWFuZGF0b3J5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WV2luZG93Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10YWJzLWl0ZW1zJzogdHJ1ZSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRGFyayAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5yb290SXNEYXJrXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2V0VmFsdWUgKGl0ZW06IEdyb3VwYWJsZUluc3RhbmNlLCBpOiBudW1iZXIpIHtcbiAgICAgIHJldHVybiBpdGVtLmlkIHx8IEJhc2VJdGVtR3JvdXAub3B0aW9ucy5tZXRob2RzLmdldFZhbHVlLmNhbGwodGhpcywgaXRlbSwgaSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZBcHBCYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZUb29sYmFyIGZyb20gJy4uL1ZUb29sYmFyL1ZUb29sYmFyJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2Nyb2xsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBBcHBsaWNhdGlvbmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2FwcGxpY2F0aW9uYWJsZSdcbmltcG9ydCBTY3JvbGxhYmxlIGZyb20gJy4uLy4uL21peGlucy9zY3JvbGxhYmxlJ1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWVG9vbGJhcixcbiAgU2Nyb2xsYWJsZSxcbiAgU1NSQm9vdGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIEFwcGxpY2F0aW9uYWJsZSgndG9wJywgW1xuICAgICdjbGlwcGVkTGVmdCcsXG4gICAgJ2NsaXBwZWRSaWdodCcsXG4gICAgJ2NvbXB1dGVkSGVpZ2h0JyxcbiAgICAnaW52ZXJ0ZWRTY3JvbGwnLFxuICAgICdpc0V4dGVuZGVkJyxcbiAgICAnaXNQcm9taW5lbnQnLFxuICAgICd2YWx1ZScsXG4gIF0pXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWFwcC1iYXInLFxuXG4gIGRpcmVjdGl2ZXM6IHsgU2Nyb2xsIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBjbGlwcGVkTGVmdDogQm9vbGVhbixcbiAgICBjbGlwcGVkUmlnaHQ6IEJvb2xlYW4sXG4gICAgY29sbGFwc2VPblNjcm9sbDogQm9vbGVhbixcbiAgICBlbGV2YXRlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgZmFkZUltZ09uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGhpZGVPblNjcm9sbDogQm9vbGVhbixcbiAgICBpbnZlcnRlZFNjcm9sbDogQm9vbGVhbixcbiAgICBzY3JvbGxPZmZTY3JlZW46IEJvb2xlYW4sXG4gICAgc2hyaW5rT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLnZhbHVlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFwcGxpY2F0aW9uUHJvcGVydHkgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gIXRoaXMuYm90dG9tID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgIH0sXG4gICAgY2FuU2Nyb2xsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFNjcm9sbGFibGUub3B0aW9ucy5jb21wdXRlZC5jYW5TY3JvbGwuY2FsbCh0aGlzKSAmJlxuICAgICAgICAoXG4gICAgICAgICAgdGhpcy5pbnZlcnRlZFNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuZWxldmF0ZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5oaWRlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmlzQm9vdGVkIHx8XG4gICAgICAgICAgLy8gSWYgZmFsc2V5LCB1c2VyIGhhcyBwcm92aWRlZCBhblxuICAgICAgICAgIC8vIGV4cGxpY2l0IHZhbHVlIHdoaWNoIHNob3VsZFxuICAgICAgICAgIC8vIG92ZXJ3cml0ZSBhbnl0aGluZyB3ZSBkb1xuICAgICAgICAgICF0aGlzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdG9vbGJhci0tY29sbGFwc2UnOiB0aGlzLmNvbGxhcHNlIHx8IHRoaXMuY29sbGFwc2VPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhcic6IHRydWUsXG4gICAgICAgICd2LWFwcC1iYXItLWNsaXBwZWQnOiB0aGlzLmNsaXBwZWRMZWZ0IHx8IHRoaXMuY2xpcHBlZFJpZ2h0LFxuICAgICAgICAndi1hcHAtYmFyLS1mYWRlLWltZy1vbi1zY3JvbGwnOiB0aGlzLmZhZGVJbWdPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZWxldmF0ZS1vbi1zY3JvbGwnOiB0aGlzLmVsZXZhdGVPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZml4ZWQnOiAhdGhpcy5hYnNvbHV0ZSAmJiAodGhpcy5hcHAgfHwgdGhpcy5maXhlZCksXG4gICAgICAgICd2LWFwcC1iYXItLWhpZGUtc2hhZG93JzogdGhpcy5oaWRlU2hhZG93LFxuICAgICAgICAndi1hcHAtYmFyLS1pcy1zY3JvbGxlZCc6IHRoaXMuY3VycmVudFNjcm9sbCA+IDAsXG4gICAgICAgICd2LWFwcC1iYXItLXNocmluay1vbi1zY3JvbGwnOiB0aGlzLnNocmlua09uU2Nyb2xsLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb250ZW50SGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLnNocmlua09uU2Nyb2xsKSByZXR1cm4gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbnRlbnRIZWlnaHQuY2FsbCh0aGlzKVxuXG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbXB1dGVkT3JpZ2luYWxIZWlnaHRcblxuICAgICAgY29uc3QgbWluID0gdGhpcy5kZW5zZSA/IDQ4IDogNTZcbiAgICAgIGNvbnN0IG1heCA9IGhlaWdodFxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heCAtIG1pblxuICAgICAgY29uc3QgaXRlcmF0aW9uID0gZGlmZmVyZW5jZSAvIHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY3VycmVudFNjcm9sbCAqIGl0ZXJhdGlvblxuXG4gICAgICByZXR1cm4gTWF0aC5tYXgobWluLCBtYXggLSBvZmZzZXQpXG4gICAgfSxcbiAgICBjb21wdXRlZEZvbnRTaXplICgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF0aGlzLmlzUHJvbWluZW50KSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuZGVuc2UgPyA5NiA6IDEyOFxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heCAtIHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG4gICAgICBjb25zdCBpbmNyZW1lbnQgPSAwLjAwMzQ3XG5cbiAgICAgIC8vIDEuNXJlbSB0byBhIG1pbmltdW0gb2YgMS4yNXJlbVxuICAgICAgcmV0dXJuIE51bWJlcigoMS41MCAtIGRpZmZlcmVuY2UgKiBpbmNyZW1lbnQpLnRvRml4ZWQoMikpXG4gICAgfSxcbiAgICBjb21wdXRlZExlZnQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwIHx8IHRoaXMuY2xpcHBlZExlZnQpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLmxlZnRcbiAgICB9LFxuICAgIGNvbXB1dGVkTWFyZ2luVG9wICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb24uYmFyXG4gICAgfSxcbiAgICBjb21wdXRlZE9wYWNpdHkgKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXRoaXMuZmFkZUltZ09uU2Nyb2xsKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IG9wYWNpdHkgPSBNYXRoLm1heChcbiAgICAgICAgKHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQgLSB0aGlzLmN1cnJlbnRTY3JvbGwpIC8gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCxcbiAgICAgICAgMFxuICAgICAgKVxuXG4gICAgICByZXR1cm4gTnVtYmVyKHBhcnNlRmxvYXQob3BhY2l0eSkudG9GaXhlZCgyKSlcbiAgICB9LFxuICAgIGNvbXB1dGVkT3JpZ2luYWxIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBsZXQgaGVpZ2h0ID0gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbnRlbnRIZWlnaHQuY2FsbCh0aGlzKVxuICAgICAgaWYgKHRoaXMuaXNFeHRlbmRlZCkgaGVpZ2h0ICs9IHBhcnNlSW50KHRoaXMuZXh0ZW5zaW9uSGVpZ2h0KVxuICAgICAgcmV0dXJuIGhlaWdodFxuICAgIH0sXG4gICAgY29tcHV0ZWRSaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHAgfHwgdGhpcy5jbGlwcGVkUmlnaHQpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLnJpZ2h0XG4gICAgfSxcbiAgICBjb21wdXRlZFNjcm9sbFRocmVzaG9sZCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLnNjcm9sbFRocmVzaG9sZCkgcmV0dXJuIE51bWJlcih0aGlzLnNjcm9sbFRocmVzaG9sZClcblxuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRPcmlnaW5hbEhlaWdodCAtICh0aGlzLmRlbnNlID8gNDggOiA1NilcbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNmb3JtICgpOiBudW1iZXIge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TY3JvbGwgfHxcbiAgICAgICAgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsICYmIHRoaXMuY3VycmVudFNjcm9sbCA9PT0gMCAmJiB0aGlzLmlzQWN0aXZlKVxuICAgICAgKSByZXR1cm4gMFxuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgcmV0dXJuIDBcblxuICAgICAgY29uc3Qgc2Nyb2xsT2ZmU2NyZWVuID0gdGhpcy5zY3JvbGxPZmZTY3JlZW5cbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkSGVpZ2h0XG4gICAgICAgIDogdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID8gc2Nyb2xsT2ZmU2NyZWVuIDogLXNjcm9sbE9mZlNjcmVlblxuICAgIH0sXG4gICAgaGlkZVNoYWRvdyAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5lbGV2YXRlT25TY3JvbGwgJiYgdGhpcy5pc0V4dGVuZGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZXZhdGVPblNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsID09PSAwIHx8XG4gICAgICAgICAgdGhpcy5jb21wdXRlZFRyYW5zZm9ybSA8IDBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIXRoaXMuaXNFeHRlbmRlZCB8fFxuICAgICAgICB0aGlzLnNjcm9sbE9mZlNjcmVlblxuICAgICAgKSAmJiB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtICE9PSAwXG4gICAgfSxcbiAgICBpc0NvbGxhcHNlZCAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAoIXRoaXMuY29sbGFwc2VPblNjcm9sbCkge1xuICAgICAgICByZXR1cm4gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5pc0NvbGxhcHNlZC5jYWxsKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPiAwXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmlzUHJvbWluZW50LmNhbGwodGhpcykgfHxcbiAgICAgICAgdGhpcy5zaHJpbmtPblNjcm9sbFxuICAgICAgKVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5zdHlsZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgZm9udFNpemU6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZEZvbnRTaXplLCAncmVtJyksXG4gICAgICAgIG1hcmdpblRvcDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkTWFyZ2luVG9wKSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke2NvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZFRyYW5zZm9ybSl9KWAsXG4gICAgICAgIGxlZnQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZExlZnQpLFxuICAgICAgICByaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkUmlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBjYW5TY3JvbGw6ICdvblNjcm9sbCcsXG4gICAgY29tcHV0ZWRUcmFuc2Zvcm0gKCkge1xuICAgICAgLy8gTm9ybWFsbHkgd2UgZG8gbm90IHdhbnQgdGhlIHYtYXBwLWJhclxuICAgICAgLy8gdG8gdXBkYXRlIHRoZSBhcHBsaWNhdGlvbiB0b3AgdmFsdWVcbiAgICAgIC8vIHRvIGF2b2lkIHNjcmVlbiBqdW1wLiBIb3dldmVyLCBpblxuICAgICAgLy8gdGhpcyBzaXR1YXRpb24sIHdlIG11c3Qgc28gdGhhdFxuICAgICAgLy8gdGhlIGNsaXBwZWQgZHJhd2VyIGNhbiB1cGRhdGVcbiAgICAgIC8vIGl0cyB0b3AgdmFsdWUgd2hlbiBzY3JvbGxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TY3JvbGwgfHxcbiAgICAgICAgKCF0aGlzLmNsaXBwZWRMZWZ0ICYmICF0aGlzLmNsaXBwZWRSaWdodClcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIHRoaXMuY2FsbFVwZGF0ZSgpXG4gICAgfSxcbiAgICBpbnZlcnRlZFNjcm9sbCAodmFsOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gIXZhbCB8fCB0aGlzLmN1cnJlbnRTY3JvbGwgIT09IDBcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGlmICh0aGlzLmludmVydGVkU2Nyb2xsKSB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQmFja2dyb3VuZCAoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBWVG9vbGJhci5vcHRpb25zLm1ldGhvZHMuZ2VuQmFja2dyb3VuZC5jYWxsKHRoaXMpXG5cbiAgICAgIHJlbmRlci5kYXRhID0gdGhpcy5fYihyZW5kZXIuZGF0YSB8fCB7fSwgcmVuZGVyLnRhZyEsIHtcbiAgICAgICAgc3R5bGU6IHsgb3BhY2l0eTogdGhpcy5jb21wdXRlZE9wYWNpdHkgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIHVwZGF0ZUFwcGxpY2F0aW9uICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaW52ZXJ0ZWRTY3JvbGxcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5jb21wdXRlZEhlaWdodCArIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm1cbiAgICB9LFxuICAgIHRocmVzaG9sZE1ldCAoKSB7XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5jdXJyZW50U2Nyb2xsID4gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGlkZU9uU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmlzU2Nyb2xsaW5nVXAgfHxcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JvbGwgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaHJlc2hvbGQgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkKSByZXR1cm5cblxuICAgICAgdGhpcy5zYXZlZFNjcm9sbCA9IHRoaXMuY3VycmVudFNjcm9sbFxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHJlbmRlciA9IFZUb29sYmFyLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIHJlbmRlci5kYXRhID0gcmVuZGVyLmRhdGEgfHwge31cblxuICAgIGlmICh0aGlzLmNhblNjcm9sbCkge1xuICAgICAgcmVuZGVyLmRhdGEuZGlyZWN0aXZlcyA9IHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMgfHwgW11cbiAgICAgIHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgIGFyZzogdGhpcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgIG5hbWU6ICdzY3JvbGwnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vblNjcm9sbCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNYWluLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNTUkJvb3RhYmxlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1haW4nLFxuXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbWFpbicsXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYmFyLCB0b3AsIHJpZ2h0LCBmb290ZXIsIGluc2V0Rm9vdGVyLCBib3R0b20sIGxlZnQsXG4gICAgICB9ID0gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nVG9wOiBgJHt0b3AgKyBiYXJ9cHhgLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IGAke3JpZ2h0fXB4YCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogYCR7Zm9vdGVyICsgaW5zZXRGb290ZXIgKyBib3R0b219cHhgLFxuICAgICAgICBwYWRkaW5nTGVmdDogYCR7bGVmdH1weGAsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tYWluJyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIHJlZjogJ21haW4nLFxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCBbXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdGF0aWNDbGFzczogJ3YtbWFpbl9fd3JhcCcgfSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgICAgKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZNYWluIGZyb20gJy4uL1ZNYWluL1ZNYWluJ1xuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVk1haW4uZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWFpbicsXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgZGVwcmVjYXRlKCd2LWNvbnRlbnQnLCAndi1tYWluJywgdGhpcylcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgLy8gQWRkIHRoZSBsZWdhY3kgY2xhc3MgbmFtZXNcbiAgICBjb25zdCBub2RlID0gVk1haW4ub3B0aW9ucy5yZW5kZXIuY2FsbCh0aGlzLCBoKVxuXG4gICAgbm9kZS5kYXRhIS5zdGF0aWNDbGFzcyArPSAnIHYtY29udGVudCdcbiAgICBub2RlLmNoaWxkcmVuIVswXSEuZGF0YSEuc3RhdGljQ2xhc3MgKz0gJyB2LWNvbnRlbnRfX3dyYXAnXG5cbiAgICByZXR1cm4gaChub2RlLnRhZywgbm9kZS5kYXRhLCBub2RlLmNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCAnLi9fZ3JpZC5zYXNzJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgnc3BhY2VyJywgJ2RpdicsICd2LXNwYWNlcicpXG4iLCJpbXBvcnQgJy4vX2dyaWQuc2FzcydcbmltcG9ydCAnLi9WR3JpZC5zYXNzJ1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnXG5cbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBHcmlkKCdjb250YWluZXInKS5leHRlbmQoe1xuICBuYW1lOiAndi1jb250YWluZXInLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIGlkOiBTdHJpbmcsXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICB9LFxuICAgIGZsdWlkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyIChoLCB7IHByb3BzLCBkYXRhLCBjaGlsZHJlbiB9KSB7XG4gICAgbGV0IGNsYXNzZXNcbiAgICBjb25zdCB7IGF0dHJzIH0gPSBkYXRhXG4gICAgaWYgKGF0dHJzKSB7XG4gICAgICAvLyByZXNldCBhdHRycyB0byBleHRyYWN0IHV0aWxpdHkgY2xhc2VzIGxpa2UgcGEtM1xuICAgICAgZGF0YS5hdHRycyA9IHt9XG4gICAgICBjbGFzc2VzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgb25jZSByZXNvbHZlZFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy83ODQxXG4gICAgICAgIGlmIChrZXkgPT09ICdzbG90JykgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyc1trZXldXG5cbiAgICAgICAgLy8gYWRkIGJhY2sgZGF0YSBhdHRyaWJ1dGVzIGxpa2UgZGF0YS10ZXN0PVwiZm9vXCIgYnV0IGRvIG5vdFxuICAgICAgICAvLyBhZGQgdGhlbSBhcyBjbGFzc2VzXG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGRhdGEuYXR0cnMhW2tleV0gPSB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICBkYXRhLmRvbVByb3BzID0gZGF0YS5kb21Qcm9wcyB8fCB7fVxuICAgICAgZGF0YS5kb21Qcm9wcy5pZCA9IHByb3BzLmlkXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoXG4gICAgICBwcm9wcy50YWcsXG4gICAgICBtZXJnZURhdGEoZGF0YSwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ2NvbnRhaW5lcicsXG4gICAgICAgIGNsYXNzOiBBcnJheTxhbnk+KHtcbiAgICAgICAgICAnY29udGFpbmVyLS1mbHVpZCc6IHByb3BzLmZsdWlkLFxuICAgICAgICB9KS5jb25jYXQoY2xhc3NlcyB8fCBbXSksXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDaGlwLnNhc3MnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZFeHBhbmRYVHJhbnNpdGlvbiB9IGZyb20gJy4uL3RyYW5zaXRpb25zJ1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgR3JvdXBhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9ncm91cGFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFRvZ2dsZWFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgUm91dGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdXRhYmxlJ1xuaW1wb3J0IFNpemVhYmxlIGZyb20gJy4uLy4uL21peGlucy9zaXplYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgU2l6ZWFibGUsXG4gIFJvdXRhYmxlLFxuICBUaGVtZWFibGUsXG4gIEdyb3VwYWJsZUZhY3RvcnkoJ2NoaXBHcm91cCcpLFxuICBUb2dnbGVhYmxlRmFjdG9yeSgnaW5wdXRWYWx1ZScpXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNoaXAnLFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoIXRoaXMuY2hpcEdyb3VwKSByZXR1cm4gJydcblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlwR3JvdXAuYWN0aXZlQ2xhc3NcbiAgICAgIH0sXG4gICAgfSBhcyBhbnkgYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmc+LFxuICAgIGNsb3NlOiBCb29sZWFuLFxuICAgIGNsb3NlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkZWxldGUnLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZHJhZ2dhYmxlOiBCb29sZWFuLFxuICAgIGZpbHRlcjogQm9vbGVhbixcbiAgICBmaWx0ZXJJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNvbXBsZXRlJyxcbiAgICB9LFxuICAgIGxhYmVsOiBCb29sZWFuLFxuICAgIGxpbms6IEJvb2xlYW4sXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGlsbDogQm9vbGVhbixcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzcGFuJyxcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuICAgIHZhbHVlOiBudWxsIGFzIGFueSBhcyBQcm9wVHlwZTxhbnk+LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgcHJveHlDbGFzczogJ3YtY2hpcC0tYWN0aXZlJyxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtY2hpcCc6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1jaGlwLS1jbGlja2FibGUnOiB0aGlzLmlzQ2xpY2thYmxlLFxuICAgICAgICAndi1jaGlwLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICd2LWNoaXAtLWRyYWdnYWJsZSc6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgICAndi1jaGlwLS1sYWJlbCc6IHRoaXMubGFiZWwsXG4gICAgICAgICd2LWNoaXAtLWxpbmsnOiB0aGlzLmlzTGluayxcbiAgICAgICAgJ3YtY2hpcC0tbm8tY29sb3InOiAhdGhpcy5jb2xvcixcbiAgICAgICAgJ3YtY2hpcC0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuICAgICAgICAndi1jaGlwLS1waWxsJzogdGhpcy5waWxsLFxuICAgICAgICAndi1jaGlwLS1yZW1vdmFibGUnOiB0aGlzLmhhc0Nsb3NlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgICAgLi4udGhpcy5zaXplYWJsZUNsYXNzZXMsXG4gICAgICAgIC4uLnRoaXMuZ3JvdXBDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzQ2xvc2UgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5jbG9zZSlcbiAgICB9LFxuICAgIGlzQ2xpY2thYmxlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICBSb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmlzQ2xpY2thYmxlLmNhbGwodGhpcykgfHxcbiAgICAgICAgdGhpcy5jaGlwR3JvdXBcbiAgICAgIClcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGNvbnN0IGJyZWFraW5nUHJvcHMgPSBbXG4gICAgICBbJ291dGxpbmUnLCAnb3V0bGluZWQnXSxcbiAgICAgIFsnc2VsZWN0ZWQnLCAnaW5wdXQtdmFsdWUnXSxcbiAgICAgIFsndmFsdWUnLCAnYWN0aXZlJ10sXG4gICAgICBbJ0BpbnB1dCcsICdAYWN0aXZlLnN5bmMnXSxcbiAgICBdXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGJyZWFraW5nUHJvcHMuZm9yRWFjaCgoW29yaWdpbmFsLCByZXBsYWNlbWVudF0pID0+IHtcbiAgICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eShvcmlnaW5hbCkpIGJyZWFraW5nKG9yaWdpbmFsLCByZXBsYWNlbWVudCwgdGhpcylcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljayAoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgICB0aGlzLmNoaXBHcm91cCAmJiB0aGlzLnRvZ2dsZSgpXG4gICAgfSxcbiAgICBnZW5GaWx0ZXIgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fZmlsdGVyJyxcbiAgICAgICAgICAgIHByb3BzOiB7IGxlZnQ6IHRydWUgfSxcbiAgICAgICAgICB9LCB0aGlzLmZpbHRlckljb24pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkV4cGFuZFhUcmFuc2l0aW9uLCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlbkNsb3NlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fY2xvc2UnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgICAgIHNpemU6IDE4LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljazpjbG9zZScpXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6YWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuY2xvc2VJY29uKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1jaGlwX19jb250ZW50JyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5maWx0ZXIgJiYgdGhpcy5nZW5GaWx0ZXIoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgICAgdGhpcy5oYXNDbG9zZSAmJiB0aGlzLmdlbkNsb3NlKCksXG4gICAgICBdKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuZ2VuQ29udGVudCgpXVxuICAgIGxldCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLmF0dHJzID0ge1xuICAgICAgLi4uZGF0YS5hdHRycyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICB0YWJpbmRleDogdGhpcy5jaGlwR3JvdXAgJiYgIXRoaXMuZGlzYWJsZWQgPyAwIDogZGF0YS5hdHRycyEudGFiaW5kZXgsXG4gICAgfVxuICAgIGRhdGEuZGlyZWN0aXZlcyEucHVzaCh7XG4gICAgICBuYW1lOiAnc2hvdycsXG4gICAgICB2YWx1ZTogdGhpcy5hY3RpdmUsXG4gICAgfSlcbiAgICBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgZGF0YSlcblxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy50ZXh0Q29sb3IgfHwgKHRoaXMub3V0bGluZWQgJiYgdGhpcy5jb2xvcilcblxuICAgIHJldHVybiBoKHRhZywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIGRhdGEpLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVkNoaXAgZnJvbSAnLi9WQ2hpcCdcblxuZXhwb3J0IHsgVkNoaXAgfVxuZXhwb3J0IGRlZmF1bHQgVkNoaXBcbiIsImltcG9ydCAnLi9WU2ltcGxlQ2hlY2tib3guc2FzcydcblxuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuaW1wb3J0IFZ1ZSwgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuaW1wb3J0IHsgd3JhcEluQXJyYXkgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1zaW1wbGUtY2hlY2tib3gnLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIHJpcHBsZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIC4uLkNvbG9yYWJsZS5vcHRpb25zLnByb3BzLFxuICAgIC4uLlRoZW1lYWJsZS5vcHRpb25zLnByb3BzLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGVJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94SW5kZXRlcm1pbmF0ZScsXG4gICAgfSxcbiAgICBvbkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2hlY2tib3hPbicsXG4gICAgfSxcbiAgICBvZmZJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94T2ZmJyxcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCwgeyBwcm9wcywgZGF0YSwgbGlzdGVuZXJzIH0pOiBWTm9kZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuXG4gICAgaWYgKHByb3BzLnJpcHBsZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGgoJ2RpdicsIENvbG9yYWJsZS5vcHRpb25zLm1ldGhvZHMuc2V0VGV4dENvbG9yKHByb3BzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dC0tc2VsZWN0aW9uLWNvbnRyb2xzX19yaXBwbGUnLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdyaXBwbGUnLFxuICAgICAgICAgIHZhbHVlOiB7IGNlbnRlcjogdHJ1ZSB9LFxuICAgICAgICB9XSBhcyBWTm9kZURpcmVjdGl2ZVtdLFxuICAgICAgfSkpXG5cbiAgICAgIGNoaWxkcmVuLnB1c2gocmlwcGxlKVxuICAgIH1cblxuICAgIGxldCBpY29uID0gcHJvcHMub2ZmSWNvblxuICAgIGlmIChwcm9wcy5pbmRldGVybWluYXRlKSBpY29uID0gcHJvcHMuaW5kZXRlcm1pbmF0ZUljb25cbiAgICBlbHNlIGlmIChwcm9wcy52YWx1ZSkgaWNvbiA9IHByb3BzLm9uSWNvblxuXG4gICAgY2hpbGRyZW4ucHVzaChoKFZJY29uLCBDb2xvcmFibGUub3B0aW9ucy5tZXRob2RzLnNldFRleHRDb2xvcihwcm9wcy52YWx1ZSAmJiBwcm9wcy5jb2xvciwge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBkYXJrOiBwcm9wcy5kYXJrLFxuICAgICAgICBsaWdodDogcHJvcHMubGlnaHQsXG4gICAgICB9LFxuICAgIH0pLCBpY29uKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAndi1zaW1wbGUtY2hlY2tib3gnOiB0cnVlLFxuICAgICAgJ3Ytc2ltcGxlLWNoZWNrYm94LS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgIGlmIChkYXRhLm9uICYmIGRhdGEub24uaW5wdXQgJiYgIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHdyYXBJbkFycmF5KGRhdGEub24uaW5wdXQpLmZvckVhY2goZiA9PiBmKCFwcm9wcy52YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlNpbXBsZUNoZWNrYm94IGZyb20gJy4uL1ZDaGVja2JveC9WU2ltcGxlQ2hlY2tib3gnXG5pbXBvcnQgVkRpdmlkZXIgZnJvbSAnLi4vVkRpdmlkZXInXG5pbXBvcnQgVlN1YmhlYWRlciBmcm9tICcuLi9WU3ViaGVhZGVyJ1xuaW1wb3J0IHtcbiAgVkxpc3QsXG4gIFZMaXN0SXRlbSxcbiAgVkxpc3RJdGVtQWN0aW9uLFxuICBWTGlzdEl0ZW1Db250ZW50LFxuICBWTGlzdEl0ZW1UaXRsZSxcbn0gZnJvbSAnLi4vVkxpc3QnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQge1xuICBlc2NhcGVIVE1MLFxuICBnZXRQcm9wZXJ0eUZyb21JdGVtLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlLCBWTm9kZUNoaWxkcmVuIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgU2VsZWN0SXRlbUtleSB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbnR5cGUgTGlzdFRpbGUgPSB7IGl0ZW06IGFueSwgZGlzYWJsZWQ/OiBudWxsIHwgYm9vbGVhbiwgdmFsdWU/OiBib29sZWFuLCBpbmRleDogbnVtYmVyIH07XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlLCBUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNlbGVjdC1saXN0JyxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy82ODcyXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICByaXBwbGUsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhY3Rpb246IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkOiBCb29sZWFuLFxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxhbnlbXT4sXG4gICAgaXRlbURpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICB9LFxuICAgIGl0ZW1UZXh0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgIH0sXG4gICAgaXRlbVZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIG5vRGF0YVRleHQ6IFN0cmluZyxcbiAgICBub0ZpbHRlcjogQm9vbGVhbixcbiAgICBzZWFyY2hJbnB1dDogbnVsbCBhcyB1bmtub3duIGFzIFByb3BUeXBlPGFueT4sXG4gICAgc2VsZWN0ZWRJdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8YW55W10+LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgcGFyc2VkSXRlbXMgKCk6IGFueVtdIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICB9LFxuICAgIHRpbGVBY3RpdmVDbGFzcyAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbG9yKS5jbGFzcyB8fCB7fSkuam9pbignICcpXG4gICAgfSxcbiAgICBzdGF0aWNOb0RhdGFUaWxlICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCB0aWxlID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBtb3VzZWRvd246IChlOiBFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLCAvLyBQcmV2ZW50IG9uQmx1ciBmcm9tIGJlaW5nIGNhbGxlZFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFtcbiAgICAgICAgdGhpcy5nZW5UaWxlQ29udGVudCh0aGlzLm5vRGF0YVRleHQpLFxuICAgICAgXSlcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5BY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5wdXRWYWx1ZTogYW55KTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtQWN0aW9uLCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlNpbXBsZUNoZWNrYm94LCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6ICgpID0+IHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRpdmlkZXIgKHByb3BzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWRGl2aWRlciwgeyBwcm9wcyB9KVxuICAgIH0sXG4gICAgZ2VuRmlsdGVyZWRUZXh0ICh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgIHRleHQgPSB0ZXh0IHx8ICcnXG5cbiAgICAgIGlmICghdGhpcy5zZWFyY2hJbnB1dCB8fCB0aGlzLm5vRmlsdGVyKSByZXR1cm4gZXNjYXBlSFRNTCh0ZXh0KVxuXG4gICAgICBjb25zdCB7IHN0YXJ0LCBtaWRkbGUsIGVuZCB9ID0gdGhpcy5nZXRNYXNrZWRDaGFyYWN0ZXJzKHRleHQpXG5cbiAgICAgIHJldHVybiBgJHtlc2NhcGVIVE1MKHN0YXJ0KX0ke3RoaXMuZ2VuSGlnaGxpZ2h0KG1pZGRsZSl9JHtlc2NhcGVIVE1MKGVuZCl9YFxuICAgIH0sXG4gICAgZ2VuSGVhZGVyIChwcm9wczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTdWJoZWFkZXIsIHsgcHJvcHMgfSwgcHJvcHMuaGVhZGVyKVxuICAgIH0sXG4gICAgZ2VuSGlnaGxpZ2h0ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInYtbGlzdC1pdGVtX19tYXNrXCI+JHtlc2NhcGVIVE1MKHRleHQpfTwvc3Bhbj5gXG4gICAgfSxcbiAgICBnZXRNYXNrZWRDaGFyYWN0ZXJzICh0ZXh0OiBzdHJpbmcpOiB7XG4gICAgICBzdGFydDogc3RyaW5nXG4gICAgICBtaWRkbGU6IHN0cmluZ1xuICAgICAgZW5kOiBzdHJpbmdcbiAgICB9IHtcbiAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gKHRoaXMuc2VhcmNoSW5wdXQgfHwgJycpLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgY29uc3QgaW5kZXggPSB0ZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hJbnB1dClcblxuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHsgc3RhcnQ6ICcnLCBtaWRkbGU6IHRleHQsIGVuZDogJycgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHRleHQuc2xpY2UoMCwgaW5kZXgpXG4gICAgICBjb25zdCBtaWRkbGUgPSB0ZXh0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaElucHV0Lmxlbmd0aClcbiAgICAgIGNvbnN0IGVuZCA9IHRleHQuc2xpY2UoaW5kZXggKyBzZWFyY2hJbnB1dC5sZW5ndGgpXG4gICAgICByZXR1cm4geyBzdGFydCwgbWlkZGxlLCBlbmQgfVxuICAgIH0sXG4gICAgZ2VuVGlsZSAoe1xuICAgICAgaXRlbSxcbiAgICAgIGluZGV4LFxuICAgICAgZGlzYWJsZWQgPSBudWxsLFxuICAgICAgdmFsdWUgPSBmYWxzZSxcbiAgICB9OiBMaXN0VGlsZSk6IFZOb2RlIHwgVk5vZGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXZhbHVlKSB2YWx1ZSA9IHRoaXMuaGFzSXRlbShpdGVtKVxuXG4gICAgICBpZiAoaXRlbSA9PT0gT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGRpc2FibGVkID0gZGlzYWJsZWQgIT09IG51bGxcbiAgICAgICAgICA/IGRpc2FibGVkXG4gICAgICAgICAgOiB0aGlzLmdldERpc2FibGVkKGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpbGUgPSB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpbiBsaXN0IGRvZXMgbm90XG4gICAgICAgICAgLy8gY29udGFpbiBhcmlhLXNlbGVjdGVkIGJ5IGRlZmF1bHRcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IFN0cmluZyh2YWx1ZSksXG4gICAgICAgICAgaWQ6IGBsaXN0LWl0ZW0tJHt0aGlzLl91aWR9LSR7aW5kZXh9YCxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBtb3VzZWRvd246IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gUHJldmVudCBvbkJsdXIgZnJvbSBiZWluZyBjYWxsZWRcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xpY2s6ICgpID0+IGRpc2FibGVkIHx8IHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLnRpbGVBY3RpdmVDbGFzcyxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICByaXBwbGU6IHRydWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFtcbiAgICAgICAgICB0aGlzLmFjdGlvbiAmJiAhdGhpcy5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMuZ2VuQWN0aW9uKGl0ZW0sIHZhbHVlKVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIHRoaXMuZ2VuVGlsZUNvbnRlbnQoaXRlbSwgaW5kZXgpLFxuICAgICAgICBdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzXG4gICAgICBjb25zdCBzY29wZWRTbG90ID0gdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSh7XG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAuLi50aWxlLmF0dHJzLFxuICAgICAgICAgIC4uLnRpbGUucHJvcHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB0aWxlLm9uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRoaXMubmVlZHNUaWxlKHNjb3BlZFNsb3QpXG4gICAgICAgID8gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIHNjb3BlZFNsb3QpXG4gICAgICAgIDogc2NvcGVkU2xvdFxuICAgIH0sXG4gICAgZ2VuVGlsZUNvbnRlbnQgKGl0ZW06IGFueSwgaW5kZXggPSAwKTogVk5vZGUge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5nZW5GaWx0ZXJlZFRleHQodGhpcy5nZXRUZXh0KGl0ZW0pKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW1Db250ZW50LFxuICAgICAgICBbdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW1UaXRsZSwge1xuICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTCB9LFxuICAgICAgICB9KV1cbiAgICAgIClcbiAgICB9LFxuICAgIGhhc0l0ZW0gKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VkSXRlbXMuaW5kZXhPZih0aGlzLmdldFZhbHVlKGl0ZW0pKSA+IC0xXG4gICAgfSxcbiAgICBuZWVkc1RpbGUgKHNsb3Q6IFZOb2RlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzbG90IS5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgc2xvdCFbMF0uY29tcG9uZW50T3B0aW9ucyA9PSBudWxsIHx8XG4gICAgICAgIHNsb3QhWzBdLmNvbXBvbmVudE9wdGlvbnMuQ3Rvci5vcHRpb25zLm5hbWUgIT09ICd2LWxpc3QtaXRlbSdcbiAgICB9LFxuICAgIGdldERpc2FibGVkIChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtRGlzYWJsZWQsIGZhbHNlKSlcbiAgICB9LFxuICAgIGdldFRleHQgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQsIGl0ZW0pKVxuICAgIH0sXG4gICAgZ2V0VmFsdWUgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtVmFsdWUsIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoKTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuOiBWTm9kZUNoaWxkcmVuID0gW11cbiAgICBjb25zdCBpdGVtc0xlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF1cblxuICAgICAgaWYgKHRoaXMuaGlkZVNlbGVjdGVkICYmXG4gICAgICAgIHRoaXMuaGFzSXRlbShpdGVtKVxuICAgICAgKSBjb250aW51ZVxuXG4gICAgICBpZiAoaXRlbSA9PSBudWxsKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuVGlsZSh7IGl0ZW0sIGluZGV4IH0pKVxuICAgICAgZWxzZSBpZiAoaXRlbS5oZWFkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5IZWFkZXIoaXRlbSkpXG4gICAgICBlbHNlIGlmIChpdGVtLmRpdmlkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5EaXZpZGVyKGl0ZW0pKVxuICAgICAgZWxzZSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuVGlsZSh7IGl0ZW0sIGluZGV4IH0pKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmxlbmd0aCB8fCBjaGlsZHJlbi5wdXNoKHRoaXMuJHNsb3RzWyduby1kYXRhJ10gfHwgdGhpcy5zdGF0aWNOb0RhdGFUaWxlKVxuXG4gICAgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddICYmIGNoaWxkcmVuLnVuc2hpZnQodGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddKVxuXG4gICAgdGhpcy4kc2xvdHNbJ2FwcGVuZC1pdGVtJ10gJiYgY2hpbGRyZW4ucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSlcblxuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMaXN0LCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc2VsZWN0LWxpc3QnLFxuICAgICAgY2xhc3M6IHRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICB9LFxuICAgICAgcHJvcHM6IHsgZGVuc2U6IHRoaXMuZGVuc2UgfSxcbiAgICB9LCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAnZmlsdGVyYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBub0RhdGFUZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHZ1ZXRpZnkubm9EYXRhVGV4dCcsXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi4vVlRleHRGaWVsZC9WVGV4dEZpZWxkLnNhc3MnXG5pbXBvcnQgJy4vVlNlbGVjdC5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkNoaXAgZnJvbSAnLi4vVkNoaXAnXG5pbXBvcnQgVk1lbnUgZnJvbSAnLi4vVk1lbnUnXG5pbXBvcnQgVlNlbGVjdExpc3QgZnJvbSAnLi9WU2VsZWN0TGlzdCdcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbXBhcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbXBhcmFibGUnXG5pbXBvcnQgRmlsdGVyYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZmlsdGVyYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7IGdldFByb3BlcnR5RnJvbUl0ZW0sIGdldE9iamVjdFZhbHVlQnlQYXRoLCBrZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFByb3BUeXBlLCBWTm9kZURhdGEgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBTZWxlY3RJdGVtS2V5IH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZW51UHJvcHMgPSB7XG4gIGNsb3NlT25DbGljazogZmFsc2UsXG4gIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICBkaXNhYmxlS2V5czogdHJ1ZSxcbiAgb3Blbk9uQ2xpY2s6IGZhbHNlLFxuICBtYXhIZWlnaHQ6IDMwNCxcbn1cblxuLy8gVHlwZXNcbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFZUZXh0RmllbGQsXG4gIENvbXBhcmFibGUsXG4gIEZpbHRlcmFibGVcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBtZW51OiBJbnN0YW5jZVR5cGU8dHlwZW9mIFZNZW51PlxuICAgIGxhYmVsOiBIVE1MRWxlbWVudFxuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgJ3ByZXBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgICdhcHBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgIHByZWZpeDogSFRNTEVsZW1lbnRcbiAgICBzdWZmaXg6IEhUTUxFbGVtZW50XG4gIH1cbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2VsZWN0JyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZW5kSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkcm9wZG93bicsXG4gICAgfSxcbiAgICBhdHRhY2g6IHtcbiAgICAgIHR5cGU6IG51bGwgYXMgdW5rbm93biBhcyBQcm9wVHlwZTxzdHJpbmcgfCBib29sZWFuIHwgRWxlbWVudCB8IFZOb2RlPixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgY2FjaGVJdGVtczogQm9vbGVhbixcbiAgICBjaGlwczogQm9vbGVhbixcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgZGVsZXRhYmxlQ2hpcHM6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUxvb2t1cDogQm9vbGVhbixcbiAgICBlYWdlcjogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWQ6IEJvb2xlYW4sXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPGFueVtdPixcbiAgICBpdGVtQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGl0ZW1EaXNhYmxlZDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgfSxcbiAgICBpdGVtVGV4dDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICAgIGl0ZW1WYWx1ZToge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgfSxcbiAgICBtZW51UHJvcHM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdE1lbnVQcm9wcyxcbiAgICB9LFxuICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsZWFyOiBCb29sZWFuLFxuICAgIHJldHVybk9iamVjdDogQm9vbGVhbixcbiAgICBzbWFsbENoaXBzOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWNoZWRJdGVtczogdGhpcy5jYWNoZUl0ZW1zID8gdGhpcy5pdGVtcyA6IFtdLFxuICAgICAgbWVudUlzQm9vdGVkOiBmYWxzZSxcbiAgICAgIGlzTWVudUFjdGl2ZTogZmFsc2UsXG4gICAgICBsYXN0SXRlbTogMjAsXG4gICAgICAvLyBBcyBsb25nIGFzIGEgdmFsdWUgaXMgZGVmaW5lZCwgc2hvdyBpdFxuICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayBpZiBtdWx0aXBsZVxuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoaWNoIGRlZmF1bHQgdG8gcHJvdmlkZVxuICAgICAgbGF6eVZhbHVlOiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyB0aGlzLnZhbHVlXG4gICAgICAgIDogdGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkLFxuICAgICAgc2VsZWN0ZWRJbmRleDogLTEsXG4gICAgICBzZWxlY3RlZEl0ZW1zOiBbXSBhcyBhbnlbXSxcbiAgICAgIGtleWJvYXJkTG9va3VwUHJlZml4OiAnJyxcbiAgICAgIGtleWJvYXJkTG9va3VwTGFzdFRpbWU6IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLyogQWxsIGl0ZW1zIHRoYXQgdGhlIHNlbGVjdCBoYXMgKi9cbiAgICBhbGxJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyRHVwbGljYXRlcyh0aGlzLmNhY2hlZEl0ZW1zLmNvbmNhdCh0aGlzLml0ZW1zKSlcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVGV4dEZpZWxkLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1zZWxlY3QnOiB0cnVlLFxuICAgICAgICAndi1zZWxlY3QtLWNoaXBzJzogdGhpcy5oYXNDaGlwcyxcbiAgICAgICAgJ3Ytc2VsZWN0LS1jaGlwcy0tc21hbGwnOiB0aGlzLnNtYWxsQ2hpcHMsXG4gICAgICAgICd2LXNlbGVjdC0taXMtbWVudS1hY3RpdmUnOiB0aGlzLmlzTWVudUFjdGl2ZSxcbiAgICAgICAgJ3Ytc2VsZWN0LS1pcy1tdWx0aSc6IHRoaXMubXVsdGlwbGUsXG4gICAgICB9XG4gICAgfSxcbiAgICAvKiBVc2VkIGJ5IG90aGVyIGNvbXBvbmVudHMgdG8gb3ZlcndyaXRlICovXG4gICAgY29tcHV0ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsSXRlbXNcbiAgICB9LFxuICAgIGNvbXB1dGVkT3ducyAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgbGlzdC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBjb21wdXRlZENvdW50ZXJWYWx1ZSAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlXG4gICAgICAgID8gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgICA6ICh0aGlzLmdldFRleHQodGhpcy5zZWxlY3RlZEl0ZW1zWzBdKSB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGhcbiAgICB9LFxuICAgIGRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuaXNGb2N1c2VkID8gW3tcbiAgICAgICAgbmFtZTogJ2NsaWNrLW91dHNpZGUnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGhhbmRsZXI6IHRoaXMuYmx1cixcbiAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgIH0sXG4gICAgICB9XSA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZHluYW1pY0hlaWdodCAoKSB7XG4gICAgICByZXR1cm4gJ2F1dG8nXG4gICAgfSxcbiAgICBoYXNDaGlwcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlwcyB8fCB0aGlzLnNtYWxsQ2hpcHNcbiAgICB9LFxuICAgIGhhc1Nsb3QgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5oYXNDaGlwcyB8fCB0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24pXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgbGlzdERhdGEgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzY29wZUlkID0gdGhpcy4kdm5vZGUgJiYgKHRoaXMuJHZub2RlLmNvbnRleHQhLiRvcHRpb25zIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLl9zY29wZUlkXG4gICAgICBjb25zdCBhdHRycyA9IHNjb3BlSWQgPyB7XG4gICAgICAgIFtzY29wZUlkXTogdHJ1ZSxcbiAgICAgIH0gOiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkT3ducyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhY3Rpb246IHRoaXMubXVsdGlwbGUsXG4gICAgICAgICAgY29sb3I6IHRoaXMuaXRlbUNvbG9yLFxuICAgICAgICAgIGRlbnNlOiB0aGlzLmRlbnNlLFxuICAgICAgICAgIGhpZGVTZWxlY3RlZDogdGhpcy5oaWRlU2VsZWN0ZWQsXG4gICAgICAgICAgaXRlbXM6IHRoaXMudmlydHVhbGl6ZWRJdGVtcyxcbiAgICAgICAgICBpdGVtRGlzYWJsZWQ6IHRoaXMuaXRlbURpc2FibGVkLFxuICAgICAgICAgIGl0ZW1UZXh0OiB0aGlzLml0ZW1UZXh0LFxuICAgICAgICAgIGl0ZW1WYWx1ZTogdGhpcy5pdGVtVmFsdWUsXG4gICAgICAgICAgbm9EYXRhVGV4dDogdGhpcy4kdnVldGlmeS5sYW5nLnQodGhpcy5ub0RhdGFUZXh0KSxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLnNlbGVjdGVkSXRlbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc2VsZWN0OiB0aGlzLnNlbGVjdEl0ZW0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgaXRlbTogdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YXRpY0xpc3QgKCk6IFZOb2RlIHtcbiAgICAgIGlmICh0aGlzLiRzbG90c1snbm8tZGF0YSddIHx8IHRoaXMuJHNsb3RzWydwcmVwZW5kLWl0ZW0nXSB8fCB0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoJ2Fzc2VydDogc3RhdGljTGlzdCBzaG91bGQgbm90IGJlIGNhbGxlZCBpZiBzbG90cyBhcmUgdXNlZCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTZWxlY3RMaXN0LCB0aGlzLmxpc3REYXRhKVxuICAgIH0sXG4gICAgdmlydHVhbGl6ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuICh0aGlzLiRfbWVudVByb3BzIGFzIGFueSkuYXV0b1xuICAgICAgICA/IHRoaXMuY29tcHV0ZWRJdGVtc1xuICAgICAgICA6IHRoaXMuY29tcHV0ZWRJdGVtcy5zbGljZSgwLCB0aGlzLmxhc3RJdGVtKVxuICAgIH0sXG4gICAgbWVudUNhblNob3c6ICgpID0+IHRydWUsXG4gICAgJF9tZW51UHJvcHMgKCk6IG9iamVjdCB7XG4gICAgICBsZXQgbm9ybWFsaXNlZFByb3BzID0gdHlwZW9mIHRoaXMubWVudVByb3BzID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHRoaXMubWVudVByb3BzLnNwbGl0KCcsJylcbiAgICAgICAgOiB0aGlzLm1lbnVQcm9wc1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShub3JtYWxpc2VkUHJvcHMpKSB7XG4gICAgICAgIG5vcm1hbGlzZWRQcm9wcyA9IG5vcm1hbGlzZWRQcm9wcy5yZWR1Y2UoKGFjYywgcCkgPT4ge1xuICAgICAgICAgIGFjY1twLnRyaW0oKV0gPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9LCB7fSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdE1lbnVQcm9wcyxcbiAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgIHZhbHVlOiB0aGlzLm1lbnVDYW5TaG93ICYmIHRoaXMuaXNNZW51QWN0aXZlLFxuICAgICAgICBudWRnZUJvdHRvbTogbm9ybWFsaXNlZFByb3BzLm9mZnNldFkgPyAxIDogMCwgLy8gY29udmVydCB0byBpbnRcbiAgICAgICAgLi4ubm9ybWFsaXNlZFByb3BzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbFZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsXG4gICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMoKVxuICAgIH0sXG4gICAgaXNNZW51QWN0aXZlICh2YWwpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub25NZW51QWN0aXZlQ2hhbmdlKHZhbCkpXG4gICAgfSxcbiAgICBpdGVtczoge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlciAodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlSXRlbXMpIHtcbiAgICAgICAgICAvLyBCcmVha3MgdnVlLXRlc3QtdXRpbHMgaWZcbiAgICAgICAgICAvLyB0aGlzIGlzbid0IGNhbGN1bGF0ZWRcbiAgICAgICAgICAvLyBvbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRJdGVtcyA9IHRoaXMuZmlsdGVyRHVwbGljYXRlcyh0aGlzLmNhY2hlZEl0ZW1zLmNvbmNhdCh2YWwpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMoKVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGJsdXIgKGU/OiBFdmVudCkge1xuICAgICAgVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuYmx1ci5jYWxsKHRoaXMsIGUpXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBhY3RpdmF0ZU1lbnUgKCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIGNsZWFyYWJsZUNhbGxiYWNrICgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkKVxuICAgICAgdGhpcy5zZXRNZW51SW5kZXgoLTEpXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKSlcblxuICAgICAgaWYgKHRoaXMub3Blbk9uQ2xlYXIpIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VDb25kaXRpb25hbCAoZTogRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc01lbnVBY3RpdmUpIHJldHVybiB0cnVlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLl9pc0Rlc3Ryb3llZCAmJlxuXG4gICAgICAgIC8vIENsaWNrIG9yaWdpbmF0ZXMgZnJvbSBvdXRzaWRlIHRoZSBtZW51IGNvbnRlbnRcbiAgICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkb24ndCBjbG9zZSB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZFxuICAgICAgICAoIXRoaXMuZ2V0Q29udGVudCgpIHx8XG4gICAgICAgICF0aGlzLmdldENvbnRlbnQoKS5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkgJiZcblxuICAgICAgICAvLyBDbGljayBvcmlnaW5hdGVzIGZyb20gb3V0c2lkZSB0aGUgZWxlbWVudFxuICAgICAgICB0aGlzLiRlbCAmJlxuICAgICAgICAhdGhpcy4kZWwuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkgJiZcbiAgICAgICAgZS50YXJnZXQgIT09IHRoaXMuJGVsXG4gICAgICApXG4gICAgfSxcbiAgICBmaWx0ZXJEdXBsaWNhdGVzIChhcnI6IGFueVtdKSB7XG4gICAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgTWFwKClcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhcnJbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZ2V0VmFsdWUoaXRlbSlcblxuICAgICAgICAvLyBUT0RPOiBjb21wYXJhdG9yXG4gICAgICAgICF1bmlxdWVWYWx1ZXMuaGFzKHZhbCkgJiYgdW5pcXVlVmFsdWVzLnNldCh2YWwsIGl0ZW0pXG4gICAgICB9XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWVWYWx1ZXMudmFsdWVzKCkpXG4gICAgfSxcbiAgICBmaW5kRXhpc3RpbmdJbmRleCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0pXG5cbiAgICAgIHJldHVybiAodGhpcy5pbnRlcm5hbFZhbHVlIHx8IFtdKS5maW5kSW5kZXgoKGk6IG9iamVjdCkgPT4gdGhpcy52YWx1ZUNvbXBhcmF0b3IodGhpcy5nZXRWYWx1ZShpKSwgaXRlbVZhbHVlKSlcbiAgICB9LFxuICAgIGdldENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMubWVudSAmJiB0aGlzLiRyZWZzLm1lbnUuJHJlZnMuY29udGVudFxuICAgIH0sXG4gICAgZ2VuQ2hpcFNlbGVjdGlvbiAoaXRlbTogb2JqZWN0LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBpc0Rpc2FibGVkID0gKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuZ2V0RGlzYWJsZWQoaXRlbSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkNoaXAsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNoaXAtLXNlbGVjdCcsXG4gICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiAtMSB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNsb3NlOiB0aGlzLmRlbGV0YWJsZUNoaXBzICYmICFpc0Rpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlucHV0VmFsdWU6IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgc21hbGw6IHRoaXMuc21hbGxDaGlwcyxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm5cblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NsaWNrOmNsb3NlJzogKCkgPT4gdGhpcy5vbkNoaXBJbnB1dChpdGVtKSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKGl0ZW0pKSxcbiAgICAgIH0sIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICAgIGdlbkNvbW1hU2VsZWN0aW9uIChpdGVtOiBvYmplY3QsIGluZGV4OiBudW1iZXIsIGxhc3Q6IGJvb2xlYW4pIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCAmJiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAoXG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5nZXREaXNhYmxlZChpdGVtKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9uIHYtc2VsZWN0X19zZWxlY3Rpb24tLWNvbW1hJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zZWxlY3RfX3NlbGVjdGlvbi0tZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoaXRlbSkpLFxuICAgICAgfSksIGAke3RoaXMuZ2V0VGV4dChpdGVtKX0ke2xhc3QgPyAnJyA6ICcsICd9YClcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpOiAoVk5vZGUgfCBWTm9kZVtdIHwgbnVsbClbXSB7XG4gICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5nZW5TZWxlY3Rpb25zKClcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZW5JbnB1dCgpXG5cbiAgICAgIC8vIElmIHRoZSByZXR1cm4gaXMgYW4gZW1wdHkgYXJyYXlcbiAgICAgIC8vIHB1c2ggdGhlIGlucHV0XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3Rpb25zKSkge1xuICAgICAgICBzZWxlY3Rpb25zLnB1c2goaW5wdXQpXG4gICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCBpbnRvIGNoaWxkcmVuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuID0gc2VsZWN0aW9ucy5jaGlsZHJlbiB8fCBbXVxuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuLnB1c2goaW5wdXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuRmllbGRzZXQoKSxcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiAndi1zZWxlY3RfX3Nsb3QnLFxuICAgICAgICAgIGRpcmVjdGl2ZXM6IHRoaXMuZGlyZWN0aXZlcyxcbiAgICAgICAgfSwgW1xuICAgICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgICB0aGlzLnByZWZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3ByZWZpeCcpIDogbnVsbCxcbiAgICAgICAgICBzZWxlY3Rpb25zLFxuICAgICAgICAgIHRoaXMuc3VmZml4ID8gdGhpcy5nZW5BZmZpeCgnc3VmZml4JykgOiBudWxsLFxuICAgICAgICAgIHRoaXMuZ2VuQ2xlYXJJY29uKCksXG4gICAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICAgIHRoaXMuZ2VuSGlkZGVuSW5wdXQoKSxcbiAgICAgICAgXSksXG4gICAgICAgIHRoaXMuZ2VuTWVudSgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5JY29uIChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGNiPzogKGU6IEV2ZW50KSA9PiB2b2lkLFxuICAgICAgZXh0cmFEYXRhPzogVk5vZGVEYXRhXG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5JY29uLmNhbGwodGhpcywgdHlwZSwgY2IsIGV4dHJhRGF0YSlcblxuICAgICAgaWYgKHR5cGUgPT09ICdhcHBlbmQnKSB7XG4gICAgICAgIC8vIERvbid0IGFsbG93IHRoZSBkcm9wZG93biBpY29uIHRvIGJlIGZvY3VzZWRcbiAgICAgICAgaWNvbi5jaGlsZHJlbiFbMF0uZGF0YSA9IG1lcmdlRGF0YShpY29uLmNoaWxkcmVuIVswXS5kYXRhISwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YWJpbmRleDogaWNvbi5jaGlsZHJlbiFbMF0uY29tcG9uZW50T3B0aW9ucyEubGlzdGVuZXJzICYmICctMScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWNvblxuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXQuY2FsbCh0aGlzKVxuXG4gICAgICBkZWxldGUgaW5wdXQuZGF0YSEuYXR0cnMhLm5hbWVcblxuICAgICAgaW5wdXQuZGF0YSA9IG1lcmdlRGF0YShpbnB1dC5kYXRhISwge1xuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAnYXJpYS1yZWFkb25seSc6IFN0cmluZyh0aGlzLmlzUmVhZG9ubHkpLFxuICAgICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aCh0aGlzLiRyZWZzLm1lbnUsICdhY3RpdmVUaWxlLmlkJyksXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aChpbnB1dC5kYXRhISwgJ2F0dHJzLmF1dG9jb21wbGV0ZScsICdvZmYnKSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsga2V5cHJlc3M6IHRoaXMub25LZXlQcmVzcyB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBnZW5IaWRkZW5JbnB1dCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogdGhpcy5sYXp5VmFsdWUgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLmF0dHJzJC5uYW1lLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKTogVk5vZGUge1xuICAgICAgY29uc3QgcmVuZGVyID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgcmVuZGVyLmRhdGEhLmF0dHJzID0ge1xuICAgICAgICAuLi5yZW5kZXIuZGF0YSEuYXR0cnMsXG4gICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICdsaXN0Ym94JyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBTdHJpbmcodGhpcy5pc01lbnVBY3RpdmUpLFxuICAgICAgICAnYXJpYS1vd25zJzogdGhpcy5jb21wdXRlZE93bnMsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIGdlbkxpc3QgKCk6IFZOb2RlIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gc2xvdHMsIHdlIGNhbiB1c2UgYSBjYWNoZWQgVk5vZGUgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgICAgaWYgKHRoaXMuJHNsb3RzWyduby1kYXRhJ10gfHwgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddIHx8IHRoaXMuJHNsb3RzWydhcHBlbmQtaXRlbSddKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkxpc3RXaXRoU2xvdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aWNMaXN0XG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5MaXN0V2l0aFNsb3QgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHNsb3RzID0gWydwcmVwZW5kLWl0ZW0nLCAnbm8tZGF0YScsICdhcHBlbmQtaXRlbSddXG4gICAgICAgIC5maWx0ZXIoc2xvdE5hbWUgPT4gdGhpcy4kc2xvdHNbc2xvdE5hbWVdKVxuICAgICAgICAubWFwKHNsb3ROYW1lID0+IHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywge1xuICAgICAgICAgIHNsb3Q6IHNsb3ROYW1lLFxuICAgICAgICB9LCB0aGlzLiRzbG90c1tzbG90TmFtZV0pKVxuICAgICAgLy8gUmVxdWlyZXMgZGVzdHJ1Y3R1cmluZyBkdWUgdG8gVnVlXG4gICAgICAvLyBtb2RpZnlpbmcgdGhlIGBvbmAgcHJvcGVydHkgd2hlbiBwYXNzZWRcbiAgICAgIC8vIGFzIGEgcmVmZXJlbmNlZCBvYmplY3RcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTZWxlY3RMaXN0LCB7XG4gICAgICAgIC4uLnRoaXMubGlzdERhdGEsXG4gICAgICB9LCBzbG90cylcbiAgICB9LFxuICAgIGdlbk1lbnUgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy4kX21lbnVQcm9wcyBhcyBhbnlcbiAgICAgIHByb3BzLmFjdGl2YXRvciA9IHRoaXMuJHJlZnNbJ2lucHV0LXNsb3QnXVxuXG4gICAgICAvLyBBdHRhY2ggdG8gcm9vdCBlbCBzbyB0aGF0XG4gICAgICAvLyBtZW51IGNvdmVycyBwcmVwZW5kL2FwcGVuZCBpY29uc1xuICAgICAgaWYgKFxuICAgICAgICAvLyBUT0RPOiBtYWtlIHRoaXMgYSBjb21wdXRlZCBwcm9wZXJ0eSBvciBoZWxwZXIgb3Igc29tZXRoaW5nXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSAnJyB8fCAvLyBJZiB1c2VkIGFzIGEgYm9vbGVhbiBwcm9wICg8di1tZW51IGF0dGFjaD4pXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSB0cnVlIHx8IC8vIElmIGJvdW5kIHRvIGEgYm9vbGVhbiAoPHYtbWVudSA6YXR0YWNoPVwidHJ1ZVwiPilcbiAgICAgICAgdGhpcy5hdHRhY2ggPT09ICdhdHRhY2gnIC8vIElmIGJvdW5kIGFzIGJvb2xlYW4gcHJvcCBpbiBwdWcgKHYtbWVudShhdHRhY2gpKVxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmF0dGFjaCA9IHRoaXMuJGVsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5hdHRhY2ggPSB0aGlzLmF0dGFjaFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTWVudSwge1xuICAgICAgICBhdHRyczogeyByb2xlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6ICh2YWw6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdmFsXG4gICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHZhbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Nyb2xsOiB0aGlzLm9uU2Nyb2xsLFxuICAgICAgICB9LFxuICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgIH0sIFt0aGlzLmdlbkxpc3QoKV0pXG4gICAgfSxcbiAgICBnZW5TZWxlY3Rpb25zICgpOiBWTm9kZSB7XG4gICAgICBsZXQgbGVuZ3RoID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgQXJyYXkobGVuZ3RoKVxuXG4gICAgICBsZXQgZ2VuU2VsZWN0aW9uXG4gICAgICBpZiAodGhpcy4kc2NvcGVkU2xvdHMuc2VsZWN0aW9uKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuU2xvdFNlbGVjdGlvblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0NoaXBzKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuQ2hpcFNlbGVjdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VuU2VsZWN0aW9uID0gdGhpcy5nZW5Db21tYVNlbGVjdGlvblxuICAgICAgfVxuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgY2hpbGRyZW5bbGVuZ3RoXSA9IGdlblNlbGVjdGlvbihcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNbbGVuZ3RoXSxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID09PSBjaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9ucycsXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlblNsb3RTZWxlY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5kZXg6IG51bWJlcik6IFZOb2RlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvbiEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGNsYXNzOiAndi1jaGlwLS1zZWxlY3QnLFxuICAgICAgICB9LFxuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzZWxlY3Q6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZDogaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLmlzSW50ZXJhY3RpdmUsXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0TWVudUluZGV4ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLm1lbnUgPyAodGhpcy4kcmVmcy5tZW51IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmxpc3RJbmRleCA6IC0xXG4gICAgfSxcbiAgICBnZXREaXNhYmxlZCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1EaXNhYmxlZCwgZmFsc2UpXG4gICAgfSxcbiAgICBnZXRUZXh0IChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQsIGl0ZW0pXG4gICAgfSxcbiAgICBnZXRWYWx1ZSAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1WYWx1ZSwgdGhpcy5nZXRUZXh0KGl0ZW0pKVxuICAgIH0sXG4gICAgb25CbHVyIChlPzogRXZlbnQpIHtcbiAgICAgIGUgJiYgdGhpcy4kZW1pdCgnYmx1cicsIGUpXG4gICAgfSxcbiAgICBvbkNoaXBJbnB1dCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pXG4gICAgICBlbHNlIHRoaXMuc2V0VmFsdWUobnVsbClcbiAgICAgIC8vIElmIGFsbCBpdGVtcyBoYXZlIGJlZW4gZGVsZXRlZCxcbiAgICAgIC8vIG9wZW4gYHYtbWVudWBcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTFcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc0ludGVyYWN0aXZlKSByZXR1cm5cblxuICAgICAgaWYgKCF0aGlzLmlzQXBwZW5kSW5uZXIoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9LFxuICAgIG9uRXNjRG93biAoZTogRXZlbnQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKHRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgb25LZXlQcmVzcyAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm11bHRpcGxlIHx8XG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5kaXNhYmxlTG9va3VwXG4gICAgICApIHJldHVyblxuXG4gICAgICBjb25zdCBLRVlCT0FSRF9MT09LVVBfVEhSRVNIT0xEID0gMTAwMCAvLyBtaWxsaXNlY29uZHNcbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICBpZiAobm93IC0gdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID4gS0VZQk9BUkRfTE9PS1VQX1RIUkVTSE9MRCkge1xuICAgICAgICB0aGlzLmtleWJvYXJkTG9va3VwUHJlZml4ID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXggKz0gZS5rZXkudG9Mb3dlckNhc2UoKVxuICAgICAgdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID0gbm93XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAodGhpcy5nZXRUZXh0KGl0ZW0pIHx8ICcnKS50b1N0cmluZygpXG5cbiAgICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXgpXG4gICAgICB9KVxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYWxsSXRlbXNbaW5kZXhdXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMubGFzdEl0ZW0gPSBNYXRoLm1heCh0aGlzLmxhc3RJdGVtLCBpbmRleCArIDUpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5yZXR1cm5PYmplY3QgPyBpdGVtIDogdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kcmVmcy5tZW51LmdldFRpbGVzKCkpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRNZW51SW5kZXgoaW5kZXgpKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5pc1JlYWRvbmx5ICYmIGUua2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSByZXR1cm5cblxuICAgICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZVxuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICAvLyBJZiBlbnRlciwgc3BhY2UsIG9wZW4gbWVudVxuICAgICAgaWYgKFtcbiAgICAgICAga2V5Q29kZXMuZW50ZXIsXG4gICAgICAgIGtleUNvZGVzLnNwYWNlLFxuICAgICAgXS5pbmNsdWRlcyhrZXlDb2RlKSkgdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcblxuICAgICAgaWYgKCFtZW51KSByZXR1cm5cblxuICAgICAgLy8gSWYgbWVudSBpcyBhY3RpdmUsIGFsbG93IGRlZmF1bHRcbiAgICAgIC8vIGxpc3RJbmRleCBjaGFuZ2UgZnJvbSBtZW51XG4gICAgICBpZiAodGhpcy5pc01lbnVBY3RpdmUgJiYga2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBtZW51LmNoYW5nZUxpc3RJbmRleChlKVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpsaXN0LWluZGV4JywgbWVudS5saXN0SW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIElmIG1lbnUgaXMgbm90IGFjdGl2ZSwgdXAgYW5kIGRvd24gY2FuIGRvXG4gICAgICAvLyBvbmUgb2YgMiB0aGluZ3MuIElmIG11bHRpcGxlLCBvcGVucyB0aGVcbiAgICAgIC8vIG1lbnUsIGlmIG5vdCwgd2lsbCBjeWNsZSB0aHJvdWdoIGFsbFxuICAgICAgLy8gYXZhaWxhYmxlIG9wdGlvbnNcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNNZW51QWN0aXZlICYmXG4gICAgICAgIFtrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93bl0uaW5jbHVkZXMoa2V5Q29kZSlcbiAgICAgICkgcmV0dXJuIHRoaXMub25VcERvd24oZSlcblxuICAgICAgLy8gSWYgZXNjYXBlIGRlYWN0aXZhdGUgdGhlIG1lbnVcbiAgICAgIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MpIHJldHVybiB0aGlzLm9uRXNjRG93bihlKVxuXG4gICAgICAvLyBJZiB0YWIgLSBzZWxlY3QgaXRlbSBvciBjbG9zZSBtZW51XG4gICAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSByZXR1cm4gdGhpcy5vblRhYkRvd24oZSlcblxuICAgICAgLy8gSWYgc3BhY2UgcHJldmVudERlZmF1bHRcbiAgICAgIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5zcGFjZSkgcmV0dXJuIHRoaXMub25TcGFjZURvd24oZSlcbiAgICB9LFxuICAgIG9uTWVudUFjdGl2ZUNoYW5nZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBJZiBtZW51IGlzIGNsb3NpbmcgYW5kIG11bGl0cGxlXG4gICAgICAvLyBvciBtZW51SW5kZXggaXMgYWxyZWFkeSBzZXRcbiAgICAgIC8vIHNraXAgbWVudSBpbmRleCByZWNhbGN1bGF0aW9uXG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLm11bHRpcGxlICYmICF2YWwpIHx8XG4gICAgICAgIHRoaXMuZ2V0TWVudUluZGV4KCkgPiAtMVxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUgfHwgIXRoaXMuaXNEaXJ0eSkgcmV0dXJuXG5cbiAgICAgIC8vIFdoZW4gbWVudSBvcGVucywgc2V0IGluZGV4IG9mIGZpcnN0IGFjdGl2ZSBpdGVtXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUudGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1lbnUudGlsZXNbaV0uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRoaXMuc2V0TWVudUluZGV4KGkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25Nb3VzZVVwIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzTW91c2VEb3duICYmXG4gICAgICAgIGUud2hpY2ggIT09IDMgJiZcbiAgICAgICAgdGhpcy5pc0ludGVyYWN0aXZlXG4gICAgICApIHtcbiAgICAgICAgLy8gSWYgYXBwZW5kIGlubmVyIGlzIHByZXNlbnRcbiAgICAgICAgLy8gYW5kIHRoZSB0YXJnZXQgaXMgaXRzZWxmXG4gICAgICAgIC8vIG9yIGluc2lkZSwgdG9nZ2xlIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuaXNBcHBlbmRJbm5lcihlLnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiAodGhpcy5pc01lbnVBY3RpdmUgPSAhdGhpcy5pc01lbnVBY3RpdmUpKVxuICAgICAgICAvLyBJZiB1c2VyIGlzIGNsaWNraW5nIGluIHRoZSBjb250YWluZXJcbiAgICAgICAgLy8gYW5kIGZpZWxkIGlzIGVuY2xvc2VkLCBhY3RpdmF0ZSBpdFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmNsb3NlZCkge1xuICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvblNjcm9sbCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsVG9wID0gMCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5sYXN0SXRlbSA+IHRoaXMuY29tcHV0ZWRJdGVtcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IHNob3dNb3JlSXRlbXMgPSAoXG4gICAgICAgICAgdGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsSGVpZ2h0IC1cbiAgICAgICAgICAodGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsVG9wICtcbiAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKS5jbGllbnRIZWlnaHQpXG4gICAgICAgICkgPCAyMDBcblxuICAgICAgICBpZiAoc2hvd01vcmVJdGVtcykge1xuICAgICAgICAgIHRoaXMubGFzdEl0ZW0gKz0gMjBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TcGFjZURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gICAgb25UYWJEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy4kcmVmcy5tZW51XG5cbiAgICAgIGlmICghbWVudSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSBtZW51LmFjdGl2ZVRpbGVcblxuICAgICAgLy8gQW4gaXRlbSB0aGF0IGlzIHNlbGVjdGVkIGJ5XG4gICAgICAvLyBtZW51LWluZGV4IHNob3VsZCB0b2dnbGVkXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLm11bHRpcGxlICYmXG4gICAgICAgIGFjdGl2ZVRpbGUgJiZcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmVcbiAgICAgICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGFjdGl2ZVRpbGUuY2xpY2soKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgbWFrZSBpdCBoZXJlLFxuICAgICAgICAvLyB0aGUgdXNlciBoYXMgbm8gc2VsZWN0ZWQgaW5kZXhlc1xuICAgICAgICAvLyBhbmQgaXMgcHJvYmFibHkgdGFiYmluZyBvdXRcbiAgICAgICAgdGhpcy5ibHVyKGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvblVwRG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUpIHJldHVyblxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkbyBub3QgY3ljbGUgdGhlaXIgdmFsdWVcbiAgICAgIC8vIHdoZW4gcHJlc3NpbmcgdXAgb3IgZG93biwgaW5zdGVhZCBhY3RpdmF0ZVxuICAgICAgLy8gdGhlIG1lbnVcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSByZXR1cm4gdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlXG5cbiAgICAgIC8vIEN5Y2xlIHRocm91Z2ggYXZhaWxhYmxlIHZhbHVlcyB0byBhY2hpZXZlXG4gICAgICAvLyBzZWxlY3QgbmF0aXZlIGJlaGF2aW9yXG4gICAgICBtZW51LmlzQm9vdGVkID0gdHJ1ZVxuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgbWVudS5nZXRUaWxlcygpXG4gICAgICAgIGtleUNvZGVzLnVwID09PSBrZXlDb2RlID8gbWVudS5wcmV2VGlsZSgpIDogbWVudS5uZXh0VGlsZSgpXG4gICAgICAgIG1lbnUuYWN0aXZlVGlsZSAmJiBtZW51LmFjdGl2ZVRpbGUuY2xpY2soKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlbGVjdEl0ZW0gKGl0ZW06IG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5yZXR1cm5PYmplY3QgPyBpdGVtIDogdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxWYWx1ZSA9ICh0aGlzLmludGVybmFsVmFsdWUgfHwgW10pLnNsaWNlKClcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZmluZEV4aXN0aW5nSW5kZXgoaXRlbSlcblxuICAgICAgICBpICE9PSAtMSA/IGludGVybmFsVmFsdWUuc3BsaWNlKGksIDEpIDogaW50ZXJuYWxWYWx1ZS5wdXNoKGl0ZW0pXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoaW50ZXJuYWxWYWx1ZS5tYXAoKGk6IG9iamVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJldHVybk9iamVjdCA/IGkgOiB0aGlzLmdldFZhbHVlKGkpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIC8vIFdoZW4gc2VsZWN0aW5nIG11bHRpcGxlXG4gICAgICAgIC8vIGFkanVzdCBtZW51IGFmdGVyIGVhY2hcbiAgICAgICAgLy8gc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLm1lbnUgJiZcbiAgICAgICAgICAgICh0aGlzLiRyZWZzLm1lbnUgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkudXBkYXRlRGltZW5zaW9ucygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHJlc2V0IGxpc3QgaW5kZXggZm9yIG11bHRpcGxlXG4gICAgICAgIC8vIHRvIGtlZXAgaGlnaGxpZ2h0IHdoZW4gYW4gaXRlbSBpcyB0b2dnbGVkXG4gICAgICAgIC8vIG9uIGFuZCBvZmZcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSByZXR1cm5cblxuICAgICAgICBjb25zdCBsaXN0SW5kZXggPSB0aGlzLmdldE1lbnVJbmRleCgpXG5cbiAgICAgICAgdGhpcy5zZXRNZW51SW5kZXgoLTEpXG5cbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gaXRlbSB0byByZS1oaWdobGlnaHRcbiAgICAgICAgLy8gd2hlbiBzZWxlY3Rpb25zIGFyZSBoaWRkZW5cbiAgICAgICAgaWYgKHRoaXMuaGlkZVNlbGVjdGVkKSByZXR1cm5cblxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLnNldE1lbnVJbmRleChsaXN0SW5kZXgpKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0TWVudUluZGV4IChpbmRleDogbnVtYmVyKSB7XG4gICAgICB0aGlzLiRyZWZzLm1lbnUgJiYgKCh0aGlzLiRyZWZzLm1lbnUgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubGlzdEluZGV4ID0gaW5kZXgpXG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZEl0ZW1zICgpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXVxuICAgICAgY29uc3QgdmFsdWVzID0gIXRoaXMubXVsdGlwbGUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgICA/IFt0aGlzLmludGVybmFsVmFsdWVdXG4gICAgICAgIDogdGhpcy5pbnRlcm5hbFZhbHVlXG5cbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgodiA9PiB0aGlzLnZhbHVlQ29tcGFyYXRvcihcbiAgICAgICAgICB0aGlzLmdldFZhbHVlKHYpLFxuICAgICAgICAgIHRoaXMuZ2V0VmFsdWUodmFsdWUpXG4gICAgICAgICkpXG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5hbGxJdGVtc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRJdGVtc1xuICAgIH0sXG4gICAgc2V0VmFsdWUgKHZhbHVlOiBhbnkpIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5pbnRlcm5hbFZhbHVlXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWx1ZVxuICAgICAgdmFsdWUgIT09IG9sZFZhbHVlICYmIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKVxuICAgIH0sXG4gICAgaXNBcHBlbmRJbm5lciAodGFyZ2V0OiBhbnkpIHtcbiAgICAgIC8vIHJldHVybiB0cnVlIGlmIGFwcGVuZCBpbm5lciBpcyBwcmVzZW50XG4gICAgICAvLyBhbmQgdGhlIHRhcmdldCBpcyBpdHNlbGYgb3IgaW5zaWRlXG4gICAgICBjb25zdCBhcHBlbmRJbm5lciA9IHRoaXMuJHJlZnNbJ2FwcGVuZC1pbm5lciddXG5cbiAgICAgIHJldHVybiBhcHBlbmRJbm5lciAmJiAoYXBwZW5kSW5uZXIgPT09IHRhcmdldCB8fCBhcHBlbmRJbm5lci5jb250YWlucyh0YXJnZXQpKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkJhZGdlLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbi9WSWNvbidcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcbmltcG9ydCBUcmFuc2l0aW9uYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdHJhbnNpdGlvbmFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQge1xuICBjb252ZXJ0VG9Vbml0LFxuICBnZXRTbG90LFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFBvc2l0aW9uYWJsZUZhY3RvcnkoWydsZWZ0JywgJ2JvdHRvbSddKSxcbiAgVGhlbWVhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBUcmFuc2l0aW9uYWJsZSxcbi8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWJhZGdlJyxcblxuICBwcm9wczoge1xuICAgIGF2YXRhcjogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgY29udGVudDogeyByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBkb3Q6IEJvb2xlYW4sXG4gICAgbGFiZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckdnVldGlmeS5iYWRnZScsXG4gICAgfSxcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgaW5saW5lOiBCb29sZWFuLFxuICAgIG9mZnNldFg6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgb2Zmc2V0WTogW051bWJlciwgU3RyaW5nXSxcbiAgICBvdmVybGFwOiBCb29sZWFuLFxuICAgIHRpbGU6IEJvb2xlYW4sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3NjYWxlLXJvdGF0ZS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICAgIHZhbHVlOiB7IGRlZmF1bHQ6IHRydWUgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1iYWRnZS0tYXZhdGFyJzogdGhpcy5hdmF0YXIsXG4gICAgICAgICd2LWJhZGdlLS1ib3JkZXJlZCc6IHRoaXMuYm9yZGVyZWQsXG4gICAgICAgICd2LWJhZGdlLS1ib3R0b20nOiB0aGlzLmJvdHRvbSxcbiAgICAgICAgJ3YtYmFkZ2UtLWRvdCc6IHRoaXMuZG90LFxuICAgICAgICAndi1iYWRnZS0taWNvbic6IHRoaXMuaWNvbiAhPSBudWxsLFxuICAgICAgICAndi1iYWRnZS0taW5saW5lJzogdGhpcy5pbmxpbmUsXG4gICAgICAgICd2LWJhZGdlLS1sZWZ0JzogdGhpcy5sZWZ0LFxuICAgICAgICAndi1iYWRnZS0tb3ZlcmxhcCc6IHRoaXMub3ZlcmxhcCxcbiAgICAgICAgJ3YtYmFkZ2UtLXRpbGUnOiB0aGlzLnRpbGUsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRCb3R0b20gKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5ib3R0b20gPyAnYXV0bycgOiB0aGlzLmNvbXB1dGVkWU9mZnNldFxuICAgIH0sXG4gICAgY29tcHV0ZWRMZWZ0ICgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMuaXNSdGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdCA/IHRoaXMuY29tcHV0ZWRYT2Zmc2V0IDogJ2F1dG8nXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmxlZnQgPyAnYXV0bycgOiB0aGlzLmNvbXB1dGVkWE9mZnNldFxuICAgIH0sXG4gICAgY29tcHV0ZWRSaWdodCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmlzUnRsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQgPyAnYXV0bycgOiB0aGlzLmNvbXB1dGVkWE9mZnNldFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gIXRoaXMubGVmdCA/ICdhdXRvJyA6IHRoaXMuY29tcHV0ZWRYT2Zmc2V0XG4gICAgfSxcbiAgICBjb21wdXRlZFRvcCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA/IHRoaXMuY29tcHV0ZWRZT2Zmc2V0IDogJ2F1dG8nXG4gICAgfSxcbiAgICBjb21wdXRlZFhPZmZzZXQgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjUG9zaXRpb24odGhpcy5vZmZzZXRYKVxuICAgIH0sXG4gICAgY29tcHV0ZWRZT2Zmc2V0ICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY1Bvc2l0aW9uKHRoaXMub2Zmc2V0WSlcbiAgICB9LFxuICAgIGlzUnRsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bFxuICAgIH0sXG4gICAgLy8gRGVmYXVsdCBmYWxsYmFjayBpZiBvZmZzZXRYXG4gICAgLy8gb3Igb2Zmc2V0WSBhcmUgdW5kZWZpbmVkLlxuICAgIG9mZnNldCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLm92ZXJsYXApIHJldHVybiB0aGlzLmRvdCA/IDggOiAxMlxuICAgICAgcmV0dXJuIHRoaXMuZG90ID8gMiA6IDRcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGlmICh0aGlzLmlubGluZSkgcmV0dXJuIHt9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvdHRvbTogdGhpcy5jb21wdXRlZEJvdHRvbSxcbiAgICAgICAgbGVmdDogdGhpcy5jb21wdXRlZExlZnQsXG4gICAgICAgIHJpZ2h0OiB0aGlzLmNvbXB1dGVkUmlnaHQsXG4gICAgICAgIHRvcDogdGhpcy5jb21wdXRlZFRvcCxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxjUG9zaXRpb24gKG9mZnNldDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgY2FsYygxMDAlIC0gJHtjb252ZXJ0VG9Vbml0KG9mZnNldCB8fCB0aGlzLm9mZnNldCl9KWBcbiAgICB9LFxuICAgIGdlbkJhZGdlICgpIHtcbiAgICAgIGNvbnN0IGxhbmcgPSB0aGlzLiR2dWV0aWZ5LmxhbmdcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy4kYXR0cnNbJ2FyaWEtbGFiZWwnXSB8fCBsYW5nLnQodGhpcy5sYWJlbClcblxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWJhZGdlX19iYWRnZScsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1hdG9taWMnOiB0aGlzLiRhdHRyc1snYXJpYS1hdG9taWMnXSB8fCAndHJ1ZScsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBsYWJlbCxcbiAgICAgICAgICAnYXJpYS1saXZlJzogdGhpcy4kYXR0cnNbJ2FyaWEtbGl2ZSddIHx8ICdwb2xpdGUnLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLiRhdHRycy50aXRsZSxcbiAgICAgICAgICByb2xlOiB0aGlzLiRhdHRycy5yb2xlIHx8ICdzdGF0dXMnLFxuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfV0sXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBiYWRnZSA9IHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBkYXRhLCBbdGhpcy5nZW5CYWRnZUNvbnRlbnQoKV0pXG5cbiAgICAgIGlmICghdGhpcy50cmFuc2l0aW9uKSByZXR1cm4gYmFkZ2VcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RyYW5zaXRpb24nLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgbmFtZTogdGhpcy50cmFuc2l0aW9uLFxuICAgICAgICAgIG9yaWdpbjogdGhpcy5vcmlnaW4sXG4gICAgICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgICB9LFxuICAgICAgfSwgW2JhZGdlXSlcbiAgICB9LFxuICAgIGdlbkJhZGdlQ29udGVudCAoKSB7XG4gICAgICAvLyBEb3QgcHJvcCBzaG93cyBubyBjb250ZW50XG4gICAgICBpZiAodGhpcy5kb3QpIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgY29uc3Qgc2xvdCA9IGdldFNsb3QodGhpcywgJ2JhZGdlJylcblxuICAgICAgaWYgKHNsb3QpIHJldHVybiBzbG90XG4gICAgICBpZiAodGhpcy5jb250ZW50KSByZXR1cm4gU3RyaW5nKHRoaXMuY29udGVudClcbiAgICAgIGlmICh0aGlzLmljb24pIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB0aGlzLmljb24pXG5cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGdlbkJhZGdlV3JhcHBlciAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWJhZGdlX193cmFwcGVyJyxcbiAgICAgIH0sIFt0aGlzLmdlbkJhZGdlKCldKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGJhZGdlID0gW3RoaXMuZ2VuQmFkZ2VXcmFwcGVyKCldXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbZ2V0U2xvdCh0aGlzKV1cbiAgICBjb25zdCB7XG4gICAgICAnYXJpYS1hdG9taWMnOiBfeCxcbiAgICAgICdhcmlhLWxhYmVsJzogX3ksXG4gICAgICAnYXJpYS1saXZlJzogX3osXG4gICAgICByb2xlLFxuICAgICAgdGl0bGUsXG4gICAgICAuLi5hdHRyc1xuICAgIH0gPSB0aGlzLiRhdHRyc1xuXG4gICAgaWYgKHRoaXMuaW5saW5lICYmIHRoaXMubGVmdCkgY2hpbGRyZW4udW5zaGlmdChiYWRnZSlcbiAgICBlbHNlIGNoaWxkcmVuLnB1c2goYmFkZ2UpXG5cbiAgICByZXR1cm4gaCgnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1iYWRnZScsXG4gICAgICBhdHRycyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgfSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCAnLi9WR3JpZC5zYXNzJ1xuXG5pbXBvcnQgVnVlLCB7IFByb3BPcHRpb25zIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7IHVwcGVyRmlyc3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIG5vIHhzXG5jb25zdCBicmVha3BvaW50cyA9IFsnc20nLCAnbWQnLCAnbGcnLCAneGwnXVxuXG5jb25zdCBBTElHTk1FTlQgPSBbJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInXVxuXG5mdW5jdGlvbiBtYWtlUHJvcHMgKHByZWZpeDogc3RyaW5nLCBkZWY6ICgpID0+IFByb3BPcHRpb25zKSB7XG4gIHJldHVybiBicmVha3BvaW50cy5yZWR1Y2UoKHByb3BzLCB2YWwpID0+IHtcbiAgICBwcm9wc1twcmVmaXggKyB1cHBlckZpcnN0KHZhbCldID0gZGVmKClcbiAgICByZXR1cm4gcHJvcHNcbiAgfSwge30gYXMgRGljdGlvbmFyeTxQcm9wT3B0aW9ucz4pXG59XG5cbmNvbnN0IGFsaWduVmFsaWRhdG9yID0gKHN0cjogYW55KSA9PiBbLi4uQUxJR05NRU5ULCAnYmFzZWxpbmUnLCAnc3RyZXRjaCddLmluY2x1ZGVzKHN0cilcbmNvbnN0IGFsaWduUHJvcHMgPSBtYWtlUHJvcHMoJ2FsaWduJywgKCkgPT4gKHtcbiAgdHlwZTogU3RyaW5nLFxuICBkZWZhdWx0OiBudWxsLFxuICB2YWxpZGF0b3I6IGFsaWduVmFsaWRhdG9yLFxufSkpXG5cbmNvbnN0IGp1c3RpZnlWYWxpZGF0b3IgPSAoc3RyOiBhbnkpID0+IFsuLi5BTElHTk1FTlQsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCddLmluY2x1ZGVzKHN0cilcbmNvbnN0IGp1c3RpZnlQcm9wcyA9IG1ha2VQcm9wcygnanVzdGlmeScsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBqdXN0aWZ5VmFsaWRhdG9yLFxufSkpXG5cbmNvbnN0IGFsaWduQ29udGVudFZhbGlkYXRvciA9IChzdHI6IGFueSkgPT4gWy4uLkFMSUdOTUVOVCwgJ3NwYWNlLWJldHdlZW4nLCAnc3BhY2UtYXJvdW5kJywgJ3N0cmV0Y2gnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBhbGlnbkNvbnRlbnRQcm9wcyA9IG1ha2VQcm9wcygnYWxpZ25Db250ZW50JywgKCkgPT4gKHtcbiAgdHlwZTogU3RyaW5nLFxuICBkZWZhdWx0OiBudWxsLFxuICB2YWxpZGF0b3I6IGFsaWduQ29udGVudFZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBwcm9wTWFwID0ge1xuICBhbGlnbjogT2JqZWN0LmtleXMoYWxpZ25Qcm9wcyksXG4gIGp1c3RpZnk6IE9iamVjdC5rZXlzKGp1c3RpZnlQcm9wcyksXG4gIGFsaWduQ29udGVudDogT2JqZWN0LmtleXMoYWxpZ25Db250ZW50UHJvcHMpLFxufVxuXG5jb25zdCBjbGFzc01hcCA9IHtcbiAgYWxpZ246ICdhbGlnbicsXG4gIGp1c3RpZnk6ICdqdXN0aWZ5JyxcbiAgYWxpZ25Db250ZW50OiAnYWxpZ24tY29udGVudCcsXG59XG5cbmZ1bmN0aW9uIGJyZWFrcG9pbnRDbGFzcyAodHlwZToga2V5b2YgdHlwZW9mIHByb3BNYXAsIHByb3A6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcbiAgbGV0IGNsYXNzTmFtZSA9IGNsYXNzTWFwW3R5cGVdXG4gIGlmICh2YWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBpZiAocHJvcCkge1xuICAgIC8vIGFsaWduU20gLT4gU21cbiAgICBjb25zdCBicmVha3BvaW50ID0gcHJvcC5yZXBsYWNlKHR5cGUsICcnKVxuICAgIGNsYXNzTmFtZSArPSBgLSR7YnJlYWtwb2ludH1gXG4gIH1cbiAgLy8gLmFsaWduLWl0ZW1zLXNtLWNlbnRlclxuICBjbGFzc05hbWUgKz0gYC0ke3ZhbH1gXG4gIHJldHVybiBjbGFzc05hbWUudG9Mb3dlckNhc2UoKVxufVxuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBhbnlbXT4oKVxuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytcm93JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgIH0sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgbm9HdXR0ZXJzOiBCb29sZWFuLFxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBhbGlnblZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmFsaWduUHJvcHMsXG4gICAganVzdGlmeToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjoganVzdGlmeVZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmp1c3RpZnlQcm9wcyxcbiAgICBhbGlnbkNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGFsaWduQ29udGVudFZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmFsaWduQ29udGVudFByb3BzLFxuICB9LFxuICByZW5kZXIgKGgsIHsgcHJvcHMsIGRhdGEsIGNoaWxkcmVuIH0pIHtcbiAgICAvLyBTdXBlci1mYXN0IG1lbW9pemF0aW9uIGJhc2VkIG9uIHByb3BzLCA1eCBmYXN0ZXIgdGhhbiBKU09OLnN0cmluZ2lmeVxuICAgIGxldCBjYWNoZUtleSA9ICcnXG4gICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgICBjYWNoZUtleSArPSBTdHJpbmcoKHByb3BzIGFzIGFueSlbcHJvcF0pXG4gICAgfVxuICAgIGxldCBjbGFzc0xpc3QgPSBjYWNoZS5nZXQoY2FjaGVLZXkpXG5cbiAgICBpZiAoIWNsYXNzTGlzdCkge1xuICAgICAgY2xhc3NMaXN0ID0gW11cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBgYWxpZ25gLCBganVzdGlmeWAsIGBhbGlnbkNvbnRlbnRgIGJyZWFrcG9pbnQgcHJvcHNcbiAgICAgIGxldCB0eXBlOiBrZXlvZiB0eXBlb2YgcHJvcE1hcFxuICAgICAgZm9yICh0eXBlIGluIHByb3BNYXApIHtcbiAgICAgICAgcHJvcE1hcFt0eXBlXS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSAocHJvcHMgYXMgYW55KVtwcm9wXVxuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGJyZWFrcG9pbnRDbGFzcyh0eXBlLCBwcm9wLCB2YWx1ZSlcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBjbGFzc0xpc3QhLnB1c2goY2xhc3NOYW1lKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjbGFzc0xpc3QucHVzaCh7XG4gICAgICAgICduby1ndXR0ZXJzJzogcHJvcHMubm9HdXR0ZXJzLFxuICAgICAgICAncm93LS1kZW5zZSc6IHByb3BzLmRlbnNlLFxuICAgICAgICBbYGFsaWduLSR7cHJvcHMuYWxpZ259YF06IHByb3BzLmFsaWduLFxuICAgICAgICBbYGp1c3RpZnktJHtwcm9wcy5qdXN0aWZ5fWBdOiBwcm9wcy5qdXN0aWZ5LFxuICAgICAgICBbYGFsaWduLWNvbnRlbnQtJHtwcm9wcy5hbGlnbkNvbnRlbnR9YF06IHByb3BzLmFsaWduQ29udGVudCxcbiAgICAgIH0pXG5cbiAgICAgIGNhY2hlLnNldChjYWNoZUtleSwgY2xhc3NMaXN0KVxuICAgIH1cblxuICAgIHJldHVybiBoKFxuICAgICAgcHJvcHMudGFnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICdyb3cnLFxuICAgICAgICBjbGFzczogY2xhc3NMaXN0LFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlblxuICAgIClcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5pbXBvcnQgVkJ0biBmcm9tICcuLi9WQnRuL1ZCdG4nXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1hcHAtYmFyLW5hdi1pY29uJyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHJlbmRlciAoaCwgeyBzbG90cywgbGlzdGVuZXJzLCBwcm9wcywgZGF0YSB9KSB7XG4gICAgY29uc3QgZCA9IE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgc3RhdGljQ2xhc3M6IChgdi1hcHAtYmFyX19uYXYtaWNvbiAke2RhdGEuc3RhdGljQ2xhc3MgfHwgJyd9YCkudHJpbSgpLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGljb246IHRydWUsXG4gICAgICB9LFxuICAgICAgb246IGxpc3RlbmVycyxcbiAgICB9KVxuXG4gICAgY29uc3QgZGVmYXVsdFNsb3QgPSBzbG90cygpLmRlZmF1bHRcblxuICAgIHJldHVybiBoKFZCdG4sIGQsIGRlZmF1bHRTbG90IHx8IFtoKFZJY29uLCAnJG1lbnUnKV0pXG4gIH0sXG59KVxuIiwiLy8gTWl4aW5zXG5pbXBvcnQgeyBmYWN0b3J5IGFzIEdyb3VwYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvZ3JvdXBhYmxlJ1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gJy4vLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IEV4dHJhY3RWdWUgfSBmcm9tICcuLy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFJvdXRhYmxlLFxuICAvLyBNdXN0IGJlIGFmdGVyIHJvdXRhYmxlXG4gIC8vIHRvIG92ZXJ3cml0ZSBhY3RpdmVDbGFzc1xuICBHcm91cGFibGVGYWN0b3J5KCd0YWJzQmFyJyksXG4gIFRoZW1lYWJsZVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJGVsOiBIVE1MRWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZChcbiAgLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFiJyxcblxuICBwcm9wczoge1xuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBwcm94eUNsYXNzOiAndi10YWItLWFjdGl2ZScsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXRhYic6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10YWItLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgLi4udGhpcy5ncm91cENsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZSAoKTogYW55IHtcbiAgICAgIGxldCB0byA9IHRoaXMudG8gfHwgdGhpcy5ocmVmIHx8ICcnXG5cbiAgICAgIGlmICh0aGlzLiRyb3V0ZXIgJiZcbiAgICAgICAgdGhpcy50byA9PT0gT2JqZWN0KHRoaXMudG8pXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZSA9IHRoaXMuJHJvdXRlci5yZXNvbHZlKFxuICAgICAgICAgIHRoaXMudG8sXG4gICAgICAgICAgdGhpcy4kcm91dGUsXG4gICAgICAgICAgdGhpcy5hcHBlbmRcbiAgICAgICAgKVxuXG4gICAgICAgIHRvID0gcmVzb2x2ZS5ocmVmXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0by5yZXBsYWNlKCcjJywgJycpXG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLm9uUm91dGVDaGFuZ2UoKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljayAoZTogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIC8vIElmIHVzZXIgcHJvdmlkZXMgYW5cbiAgICAgIC8vIGFjdHVhbCBsaW5rLCBkbyBub3RcbiAgICAgIC8vIHByZXZlbnQgZGVmYXVsdFxuICAgICAgaWYgKHRoaXMuaHJlZiAmJlxuICAgICAgICB0aGlzLmhyZWYuaW5kZXhPZignIycpID4gLTFcbiAgICAgICkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGlmIChlLmRldGFpbCkgdGhpcy4kZWwuYmx1cigpXG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcblxuICAgICAgdGhpcy50byB8fCB0aGlzLnRvZ2dsZSgpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyB0YWcsIGRhdGEgfSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZUxpbmsoKVxuXG4gICAgZGF0YS5hdHRycyA9IHtcbiAgICAgIC4uLmRhdGEuYXR0cnMsXG4gICAgICAnYXJpYS1zZWxlY3RlZCc6IFN0cmluZyh0aGlzLmlzQWN0aXZlKSxcbiAgICAgIHJvbGU6ICd0YWInLFxuICAgICAgdGFiaW5kZXg6IDAsXG4gICAgfVxuICAgIGRhdGEub24gPSB7XG4gICAgICAuLi5kYXRhLm9uLFxuICAgICAga2V5ZG93bjogKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIpIHRoaXMuY2xpY2soZSlcblxuICAgICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGFnLCBkYXRhLCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZTbGlkZUdyb3VwLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCB7IFZGYWRlVHJhbnNpdGlvbiB9IGZyb20gJy4uL3RyYW5zaXRpb25zJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgeyBCYXNlSXRlbUdyb3VwIH0gZnJvbSAnLi4vVkl0ZW1Hcm91cC9WSXRlbUdyb3VwJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBNb2JpbGUgZnJvbSAnLi4vLi4vbWl4aW5zL21vYmlsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcbmltcG9ydCBUb3VjaCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMsIHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSwgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuaW50ZXJmYWNlIFRvdWNoRXZlbnQge1xuICB0b3VjaHN0YXJ0WDogbnVtYmVyXG4gIHRvdWNobW92ZVg6IG51bWJlclxuICBzdG9wUHJvcGFnYXRpb246IEZ1bmN0aW9uXG59XG5cbmludGVyZmFjZSBXaWR0aHMge1xuICBjb250ZW50OiBudW1iZXJcbiAgd3JhcHBlcjogbnVtYmVyXG59XG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgVnVlIHtcbiAgJHJlZnM6IHtcbiAgICBjb250ZW50OiBIVE1MRWxlbWVudFxuICAgIHdyYXBwZXI6IEhUTUxFbGVtZW50XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEJhc2VTbGlkZUdyb3VwID0gbWl4aW5zPG9wdGlvbnMgJlxuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4gIEV4dHJhY3RWdWU8W1xuICAgIHR5cGVvZiBCYXNlSXRlbUdyb3VwLFxuICAgIHR5cGVvZiBNb2JpbGUsXG4gIF0+XG4vKiBlc2xpbnQtZW5hYmxlIGluZGVudCAqL1xuPihcbiAgQmFzZUl0ZW1Hcm91cCxcbiAgTW9iaWxlLFxuICAvKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAnYmFzZS1zbGlkZS1ncm91cCcsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIFJlc2l6ZSxcbiAgICBUb3VjaCxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndi1zbGlkZS1pdGVtLS1hY3RpdmUnLFxuICAgIH0sXG4gICAgY2VudGVyQWN0aXZlOiBCb29sZWFuLFxuICAgIG5leHRJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJG5leHQnLFxuICAgIH0sXG4gICAgcHJldkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckcHJldicsXG4gICAgfSxcbiAgICBzaG93QXJyb3dzOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAoXG4gICAgICAgIHR5cGVvZiB2ID09PSAnYm9vbGVhbicgfHwgW1xuICAgICAgICAgICdhbHdheXMnLFxuICAgICAgICAgICdkZXNrdG9wJyxcbiAgICAgICAgICAnbW9iaWxlJyxcbiAgICAgICAgXS5pbmNsdWRlcyh2KVxuICAgICAgKSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgaW50ZXJuYWxJdGVtc0xlbmd0aDogMCxcbiAgICBpc092ZXJmbG93aW5nOiBmYWxzZSxcbiAgICByZXNpemVUaW1lb3V0OiAwLFxuICAgIHN0YXJ0WDogMCxcbiAgICBzY3JvbGxPZmZzZXQ6IDAsXG4gICAgd2lkdGhzOiB7XG4gICAgICBjb250ZW50OiAwLFxuICAgICAgd3JhcHBlcjogMCxcbiAgICB9LFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIF9fY2FjaGVkTmV4dCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuVHJhbnNpdGlvbignbmV4dCcpXG4gICAgfSxcbiAgICBfX2NhY2hlZFByZXYgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLmdlblRyYW5zaXRpb24oJ3ByZXYnKVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLkJhc2VJdGVtR3JvdXAub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXNsaWRlLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgJ3Ytc2xpZGUtZ3JvdXAtLWhhcy1hZmZpeGVzJzogdGhpcy5oYXNBZmZpeGVzLFxuICAgICAgICAndi1zbGlkZS1ncm91cC0taXMtb3ZlcmZsb3dpbmcnOiB0aGlzLmlzT3ZlcmZsb3dpbmcsXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNBZmZpeGVzICgpOiBCb29sZWFuIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zaG93QXJyb3dzKSB7XG4gICAgICAgIC8vIEFsd2F5cyBzaG93IGFycm93cyBvbiBkZXNrdG9wICYgbW9iaWxlXG4gICAgICAgIGNhc2UgJ2Fsd2F5cyc6IHJldHVybiB0cnVlXG5cbiAgICAgICAgLy8gQWx3YXlzIHNob3cgYXJyb3dzIG9uIGRlc2t0b3BcbiAgICAgICAgY2FzZSAnZGVza3RvcCc6IHJldHVybiAhdGhpcy5pc01vYmlsZVxuXG4gICAgICAgIC8vIFNob3cgYXJyb3dzIG9uIG1vYmlsZSB3aGVuIG92ZXJmbG93aW5nLlxuICAgICAgICAvLyBUaGlzIG1hdGNoZXMgdGhlIGRlZmF1bHQgMi4yIGJlaGF2aW9yXG4gICAgICAgIGNhc2UgdHJ1ZTogcmV0dXJuIHRoaXMuaXNPdmVyZmxvd2luZ1xuXG4gICAgICAgIC8vIEFsd2F5cyBzaG93IG9uIG1vYmlsZVxuICAgICAgICBjYXNlICdtb2JpbGUnOiByZXR1cm4gKFxuICAgICAgICAgIHRoaXMuaXNNb2JpbGUgfHxcbiAgICAgICAgICB0aGlzLmlzT3ZlcmZsb3dpbmdcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vY29tcG9uZW50cy90YWJzI3Njcm9sbGFibGUtdGFic1xuICAgICAgICAvLyBBbHdheXMgc2hvdyBhcnJvd3Mgd2hlblxuICAgICAgICAvLyBvdmVyZmxvd2VkIG9uIGRlc2t0b3BcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIChcbiAgICAgICAgICAhdGhpcy5pc01vYmlsZSAmJlxuICAgICAgICAgIHRoaXMuaXNPdmVyZmxvd2luZ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNOZXh0ICgpOiBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy5oYXNBZmZpeGVzKSByZXR1cm4gZmFsc2VcblxuICAgICAgY29uc3QgeyBjb250ZW50LCB3cmFwcGVyIH0gPSB0aGlzLndpZHRoc1xuXG4gICAgICAvLyBDaGVjayBvbmUgc2Nyb2xsIGFoZWFkIHRvIGtub3cgdGhlIHdpZHRoIG9mIHJpZ2h0LW1vc3QgaXRlbVxuICAgICAgcmV0dXJuIGNvbnRlbnQgPiBNYXRoLmFicyh0aGlzLnNjcm9sbE9mZnNldCkgKyB3cmFwcGVyXG4gICAgfSxcbiAgICBoYXNQcmV2ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0FmZml4ZXMgJiYgdGhpcy5zY3JvbGxPZmZzZXQgIT09IDBcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaW50ZXJuYWxWYWx1ZTogJ3NldFdpZHRocycsXG4gICAgLy8gV2hlbiBvdmVyZmxvdyBjaGFuZ2VzLCB0aGUgYXJyb3dzIGFsdGVyXG4gICAgLy8gdGhlIHdpZHRocyBvZiB0aGUgY29udGVudCBhbmQgd3JhcHBlclxuICAgIC8vIGFuZCBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZFxuICAgIGlzT3ZlcmZsb3dpbmc6ICdzZXRXaWR0aHMnLFxuICAgIHNjcm9sbE9mZnNldCAodmFsKSB7XG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstdmFsfXB4KWBcbiAgICB9LFxuICB9LFxuXG4gIGJlZm9yZVVwZGF0ZSAoKSB7XG4gICAgdGhpcy5pbnRlcm5hbEl0ZW1zTGVuZ3RoID0gKHRoaXMuJGNoaWxkcmVuIHx8IFtdKS5sZW5ndGhcbiAgfSxcblxuICB1cGRhdGVkICgpIHtcbiAgICBpZiAodGhpcy5pbnRlcm5hbEl0ZW1zTGVuZ3RoID09PSAodGhpcy4kY2hpbGRyZW4gfHwgW10pLmxlbmd0aCkgcmV0dXJuXG4gICAgdGhpcy5zZXRXaWR0aHMoKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvLyBBbHdheXMgZ2VuZXJhdGUgbmV4dCBmb3Igc2Nyb2xsYWJsZSBoaW50XG4gICAgZ2VuTmV4dCAoKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLiRzY29wZWRTbG90cy5uZXh0XG4gICAgICAgID8gdGhpcy4kc2NvcGVkU2xvdHMubmV4dCh7fSlcbiAgICAgICAgOiB0aGlzLiRzbG90cy5uZXh0IHx8IHRoaXMuX19jYWNoZWROZXh0XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbGlkZS1ncm91cF9fbmV4dCcsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3Ytc2xpZGUtZ3JvdXBfX25leHQtLWRpc2FibGVkJzogIXRoaXMuaGFzTmV4dCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5vbkFmZml4Q2xpY2soJ25leHQnKSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiAnbmV4dCcsXG4gICAgICB9LCBbc2xvdF0pXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc2xpZGUtZ3JvdXBfX2NvbnRlbnQnLFxuICAgICAgICByZWY6ICdjb250ZW50JyxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgfSxcbiAgICBnZW5EYXRhICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAncmVzaXplJyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5vblJlc2l6ZSxcbiAgICAgICAgfV0sXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5JY29uIChsb2NhdGlvbjogJ3ByZXYnIHwgJ25leHQnKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGxldCBpY29uID0gbG9jYXRpb25cblxuICAgICAgaWYgKHRoaXMuJHZ1ZXRpZnkucnRsICYmIGxvY2F0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgaWNvbiA9ICduZXh0J1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiR2dWV0aWZ5LnJ0bCAmJiBsb2NhdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIGljb24gPSAncHJldidcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXBwZXJMb2NhdGlvbiA9IGAke2xvY2F0aW9uWzBdLnRvVXBwZXJDYXNlKCl9JHtsb2NhdGlvbi5zbGljZSgxKX1gXG4gICAgICBjb25zdCBoYXNBZmZpeCA9ICh0aGlzIGFzIGFueSlbYGhhcyR7dXBwZXJMb2NhdGlvbn1gXVxuXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLnNob3dBcnJvd3MgJiZcbiAgICAgICAgIWhhc0FmZml4XG4gICAgICApIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGlzYWJsZWQ6ICFoYXNBZmZpeCxcbiAgICAgICAgfSxcbiAgICAgIH0sICh0aGlzIGFzIGFueSlbYCR7aWNvbn1JY29uYF0pXG4gICAgfSxcbiAgICAvLyBBbHdheXMgZ2VuZXJhdGUgcHJldiBmb3Igc2Nyb2xsYWJsZSBoaW50XG4gICAgZ2VuUHJldiAoKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLiRzY29wZWRTbG90cy5wcmV2XG4gICAgICAgID8gdGhpcy4kc2NvcGVkU2xvdHMucHJldih7fSlcbiAgICAgICAgOiB0aGlzLiRzbG90cy5wcmV2IHx8IHRoaXMuX19jYWNoZWRQcmV2XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbGlkZS1ncm91cF9fcHJldicsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3Ytc2xpZGUtZ3JvdXBfX3ByZXYtLWRpc2FibGVkJzogIXRoaXMuaGFzUHJldixcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5vbkFmZml4Q2xpY2soJ3ByZXYnKSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiAncHJldicsXG4gICAgICB9LCBbc2xvdF0pXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uIChsb2NhdGlvbjogJ3ByZXYnIHwgJ25leHQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWRmFkZVRyYW5zaXRpb24sIFt0aGlzLmdlbkljb24obG9jYXRpb24pXSlcbiAgICB9LFxuICAgIGdlbldyYXBwZXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbGlkZS1ncm91cF9fd3JhcHBlcicsXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3RvdWNoJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgc3RhcnQ6IChlOiBUb3VjaEV2ZW50KSA9PiB0aGlzLm92ZXJmbG93Q2hlY2soZSwgdGhpcy5vblRvdWNoU3RhcnQpLFxuICAgICAgICAgICAgbW92ZTogKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMub3ZlcmZsb3dDaGVjayhlLCB0aGlzLm9uVG91Y2hNb3ZlKSxcbiAgICAgICAgICAgIGVuZDogKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMub3ZlcmZsb3dDaGVjayhlLCB0aGlzLm9uVG91Y2hFbmQpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1dLFxuICAgICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgIH0sIFt0aGlzLmdlbkNvbnRlbnQoKV0pXG4gICAgfSxcbiAgICBjYWxjdWxhdGVOZXdPZmZzZXQgKGRpcmVjdGlvbjogJ3ByZXYnIHwgJ25leHQnLCB3aWR0aHM6IFdpZHRocywgcnRsOiBib29sZWFuLCBjdXJyZW50U2Nyb2xsT2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHNpZ24gPSBydGwgPyAtMSA6IDFcbiAgICAgIGNvbnN0IG5ld0Fib3NsdXRlT2Zmc2V0ID0gc2lnbiAqIGN1cnJlbnRTY3JvbGxPZmZzZXQgK1xuICAgICAgICAoZGlyZWN0aW9uID09PSAncHJldicgPyAtMSA6IDEpICogd2lkdGhzLndyYXBwZXJcblxuICAgICAgcmV0dXJuIHNpZ24gKiBNYXRoLm1heChNYXRoLm1pbihuZXdBYm9zbHV0ZU9mZnNldCwgd2lkdGhzLmNvbnRlbnQgLSB3aWR0aHMud3JhcHBlciksIDApXG4gICAgfSxcbiAgICBvbkFmZml4Q2xpY2sgKGxvY2F0aW9uOiAncHJldicgfCAnbmV4dCcpIHtcbiAgICAgIHRoaXMuJGVtaXQoYGNsaWNrOiR7bG9jYXRpb259YClcbiAgICAgIHRoaXMuc2Nyb2xsVG8obG9jYXRpb24pXG4gICAgfSxcbiAgICBvblJlc2l6ZSAoKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm5cblxuICAgICAgdGhpcy5zZXRXaWR0aHMoKVxuICAgIH0sXG4gICAgb25Ub3VjaFN0YXJ0IChlOiBUb3VjaEV2ZW50KSB7XG4gICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuJHJlZnNcblxuICAgICAgdGhpcy5zdGFydFggPSB0aGlzLnNjcm9sbE9mZnNldCArIGUudG91Y2hzdGFydFggYXMgbnVtYmVyXG5cbiAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCAnbm9uZScpXG4gICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCd3aWxsQ2hhbmdlJywgJ3RyYW5zZm9ybScpXG4gICAgfSxcbiAgICBvblRvdWNoTW92ZSAoZTogVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB0aGlzLnN0YXJ0WCAtIGUudG91Y2htb3ZlWFxuICAgIH0sXG4gICAgb25Ub3VjaEVuZCAoKSB7XG4gICAgICBjb25zdCB7IGNvbnRlbnQsIHdyYXBwZXIgfSA9IHRoaXMuJHJlZnNcbiAgICAgIGNvbnN0IG1heFNjcm9sbE9mZnNldCA9IGNvbnRlbnQuY2xpZW50V2lkdGggLSB3cmFwcGVyLmNsaWVudFdpZHRoXG5cbiAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCBudWxsKVxuICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lsbENoYW5nZScsIG51bGwpXG5cbiAgICAgIGlmICh0aGlzLiR2dWV0aWZ5LnJ0bCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxPZmZzZXQgPiAwIHx8ICF0aGlzLmlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IDBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbE9mZnNldCA8PSAtbWF4U2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSAtbWF4U2Nyb2xsT2Zmc2V0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbE9mZnNldCA8IDAgfHwgIXRoaXMuaXNPdmVyZmxvd2luZykge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gMFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsT2Zmc2V0ID49IG1heFNjcm9sbE9mZnNldCkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gbWF4U2Nyb2xsT2Zmc2V0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG92ZXJmbG93Q2hlY2sgKGU6IFRvdWNoRXZlbnQsIGZuOiAoZTogVG91Y2hFdmVudCkgPT4gdm9pZCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5pc092ZXJmbG93aW5nICYmIGZuKGUpXG4gICAgfSxcbiAgICBzY3JvbGxJbnRvVmlldyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gMCB8fFxuICAgICAgICAoIXRoaXMuY2VudGVyQWN0aXZlICYmICF0aGlzLmlzT3ZlcmZsb3dpbmcpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSAwXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2VudGVyQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gdGhpcy5jYWxjdWxhdGVDZW50ZXJlZE9mZnNldChcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS4kZWwgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgdGhpcy53aWR0aHMsXG4gICAgICAgICAgdGhpcy4kdnVldGlmeS5ydGxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB0aGlzLmNhbGN1bGF0ZVVwZGF0ZWRPZmZzZXQoXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uJGVsIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgIHRoaXMud2lkdGhzLFxuICAgICAgICAgIHRoaXMuJHZ1ZXRpZnkucnRsLFxuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbGN1bGF0ZVVwZGF0ZWRPZmZzZXQgKHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQsIHdpZHRoczogV2lkdGhzLCBydGw6IGJvb2xlYW4sIGN1cnJlbnRTY3JvbGxPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICBjb25zdCBjbGllbnRXaWR0aCA9IHNlbGVjdGVkRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHJ0bFxuICAgICAgICA/ICh3aWR0aHMuY29udGVudCAtIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRMZWZ0IC0gY2xpZW50V2lkdGgpXG4gICAgICAgIDogc2VsZWN0ZWRFbGVtZW50Lm9mZnNldExlZnRcblxuICAgICAgaWYgKHJ0bCkge1xuICAgICAgICBjdXJyZW50U2Nyb2xsT2Zmc2V0ID0gLWN1cnJlbnRTY3JvbGxPZmZzZXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG90YWxXaWR0aCA9IHdpZHRocy53cmFwcGVyICsgY3VycmVudFNjcm9sbE9mZnNldFxuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IGNsaWVudFdpZHRoICsgb2Zmc2V0TGVmdFxuICAgICAgY29uc3QgYWRkaXRpb25hbE9mZnNldCA9IGNsaWVudFdpZHRoICogMC40XG5cbiAgICAgIGlmIChvZmZzZXRMZWZ0IDw9IGN1cnJlbnRTY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgY3VycmVudFNjcm9sbE9mZnNldCA9IE1hdGgubWF4KG9mZnNldExlZnQgLSBhZGRpdGlvbmFsT2Zmc2V0LCAwKVxuICAgICAgfSBlbHNlIGlmICh0b3RhbFdpZHRoIDw9IGl0ZW1PZmZzZXQpIHtcbiAgICAgICAgY3VycmVudFNjcm9sbE9mZnNldCA9IE1hdGgubWluKGN1cnJlbnRTY3JvbGxPZmZzZXQgLSAodG90YWxXaWR0aCAtIGl0ZW1PZmZzZXQgLSBhZGRpdGlvbmFsT2Zmc2V0KSwgd2lkdGhzLmNvbnRlbnQgLSB3aWR0aHMud3JhcHBlcilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ0bCA/IC1jdXJyZW50U2Nyb2xsT2Zmc2V0IDogY3VycmVudFNjcm9sbE9mZnNldFxuICAgIH0sXG4gICAgY2FsY3VsYXRlQ2VudGVyZWRPZmZzZXQgKHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQsIHdpZHRoczogV2lkdGhzLCBydGw6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgICAgY29uc3QgeyBvZmZzZXRMZWZ0LCBjbGllbnRXaWR0aCB9ID0gc2VsZWN0ZWRFbGVtZW50XG5cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0Q2VudGVyZWQgPSB3aWR0aHMuY29udGVudCAtIG9mZnNldExlZnQgLSBjbGllbnRXaWR0aCAvIDIgLSB3aWR0aHMud3JhcHBlciAvIDJcbiAgICAgICAgcmV0dXJuIC1NYXRoLm1pbih3aWR0aHMuY29udGVudCAtIHdpZHRocy53cmFwcGVyLCBNYXRoLm1heCgwLCBvZmZzZXRDZW50ZXJlZCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvZmZzZXRDZW50ZXJlZCA9IG9mZnNldExlZnQgKyBjbGllbnRXaWR0aCAvIDIgLSB3aWR0aHMud3JhcHBlciAvIDJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKHdpZHRocy5jb250ZW50IC0gd2lkdGhzLndyYXBwZXIsIE1hdGgubWF4KDAsIG9mZnNldENlbnRlcmVkKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbFRvIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIChsb2NhdGlvbjogJ3ByZXYnIHwgJ25leHQnKSB7XG4gICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHRoaXMuY2FsY3VsYXRlTmV3T2Zmc2V0KGxvY2F0aW9uLCB7XG4gICAgICAgIC8vIEZvcmNlIHJlZmxvd1xuICAgICAgICBjb250ZW50OiB0aGlzLiRyZWZzLmNvbnRlbnQgPyB0aGlzLiRyZWZzLmNvbnRlbnQuY2xpZW50V2lkdGggOiAwLFxuICAgICAgICB3cmFwcGVyOiB0aGlzLiRyZWZzLndyYXBwZXIgPyB0aGlzLiRyZWZzLndyYXBwZXIuY2xpZW50V2lkdGggOiAwLFxuICAgICAgfSwgdGhpcy4kdnVldGlmeS5ydGwsIHRoaXMuc2Nyb2xsT2Zmc2V0KVxuICAgIH0sXG4gICAgc2V0V2lkdGhzIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICAoKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb250ZW50LCB3cmFwcGVyIH0gPSB0aGlzLiRyZWZzXG5cbiAgICAgICAgdGhpcy53aWR0aHMgPSB7XG4gICAgICAgICAgY29udGVudDogY29udGVudCA/IGNvbnRlbnQuY2xpZW50V2lkdGggOiAwLFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIgPyB3cmFwcGVyLmNsaWVudFdpZHRoIDogMCxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPdmVyZmxvd2luZyA9IHRoaXMud2lkdGhzLndyYXBwZXIgPCB0aGlzLndpZHRocy5jb250ZW50XG5cbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB0aGlzLmdlbkRhdGEoKSwgW1xuICAgICAgdGhpcy5nZW5QcmV2KCksXG4gICAgICB0aGlzLmdlbldyYXBwZXIoKSxcbiAgICAgIHRoaXMuZ2VuTmV4dCgpLFxuICAgIF0pXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlU2xpZGVHcm91cC5leHRlbmQoe1xuICBuYW1lOiAndi1zbGlkZS1ncm91cCcsXG5cbiAgcHJvdmlkZSAoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2xpZGVHcm91cDogdGhpcyxcbiAgICB9XG4gIH0sXG59KVxuIiwiLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IHsgQmFzZVNsaWRlR3JvdXAgfSBmcm9tICcuLi9WU2xpZGVHcm91cC9WU2xpZGVHcm91cCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZUYWIgZnJvbSAnLi9WVGFiJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcbmltcG9ydCBTU1JCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc3NyLWJvb3RhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxudHlwZSBWVGFiSW5zdGFuY2UgPSBJbnN0YW5jZVR5cGU8dHlwZW9mIFZUYWI+XG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgQmFzZVNsaWRlR3JvdXAsXG4gIFNTUkJvb3RhYmxlLFxuICBUaGVtZWFibGVcbiAgLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFicy1iYXInLFxuXG4gIHByb3ZpZGUgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWJzQmFyOiB0aGlzLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uQmFzZVNsaWRlR3JvdXAub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRhYnMtYmFyJzogdHJ1ZSxcbiAgICAgICAgJ3YtdGFicy1iYXItLWlzLW1vYmlsZSc6IHRoaXMuaXNNb2JpbGUsXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIGFuZCBtb3ZlIHRvIHYtc2xpZGUtZ3JvdXBcbiAgICAgICAgJ3YtdGFicy1iYXItLXNob3ctYXJyb3dzJzogdGhpcy5zaG93QXJyb3dzLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6ICdjYWxsU2xpZGVyJyxcbiAgICBpbnRlcm5hbFZhbHVlOiAnY2FsbFNsaWRlcicsXG4gICAgJHJvdXRlOiAnb25Sb3V0ZUNoYW5nZScsXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhbGxTbGlkZXIgKCkge1xuICAgICAgaWYgKCF0aGlzLmlzQm9vdGVkKSByZXR1cm5cblxuICAgICAgdGhpcy4kZW1pdCgnY2FsbDpzbGlkZXInKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBCYXNlU2xpZGVHcm91cC5vcHRpb25zLm1ldGhvZHMuZ2VuQ29udGVudC5jYWxsKHRoaXMpXG5cbiAgICAgIHJlbmRlci5kYXRhID0gcmVuZGVyLmRhdGEgfHwge31cbiAgICAgIHJlbmRlci5kYXRhLnN0YXRpY0NsYXNzICs9ICcgdi10YWJzLWJhcl9fY29udGVudCdcblxuICAgICAgcmV0dXJuIHJlbmRlclxuICAgIH0sXG4gICAgb25Sb3V0ZUNoYW5nZSAodmFsOiBSb3V0ZSwgb2xkVmFsOiBSb3V0ZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmICh0aGlzLm1hbmRhdG9yeSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcyBhcyB1bmtub3duIGFzIFZUYWJJbnN0YW5jZVtdXG4gICAgICBjb25zdCBuZXdQYXRoID0gdmFsLnBhdGhcbiAgICAgIGNvbnN0IG9sZFBhdGggPSBvbGRWYWwucGF0aFxuXG4gICAgICBsZXQgaGFzTmV3ID0gZmFsc2VcbiAgICAgIGxldCBoYXNPbGQgPSBmYWxzZVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGl0ZW0udG8gPT09IG5ld1BhdGgpIGhhc05ldyA9IHRydWVcbiAgICAgICAgZWxzZSBpZiAoaXRlbS50byA9PT0gb2xkUGF0aCkgaGFzT2xkID0gdHJ1ZVxuXG4gICAgICAgIGlmIChoYXNOZXcgJiYgaGFzT2xkKSBicmVha1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGFuIG9sZCBpdGVtIGFuZCBub3QgYSBuZXcgb25lXG4gICAgICAvLyBpdCdzIGFzc3VtZWQgdGhhdCB0aGUgdXNlciBuYXZpZ2F0ZWQgdG9cbiAgICAgIC8vIGEgcGF0aCB0aGF0IGlzIG5vdCBwcmVzZW50IGluIHRoZSBpdGVtc1xuICAgICAgaWYgKCFoYXNOZXcgJiYgaGFzT2xkKSB0aGlzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWRcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCByZW5kZXIgPSBCYXNlU2xpZGVHcm91cC5vcHRpb25zLnJlbmRlci5jYWxsKHRoaXMsIGgpXG5cbiAgICByZW5kZXIuZGF0YSEuYXR0cnMgPSB7XG4gICAgICByb2xlOiAndGFibGlzdCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZS90eXBlcydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhDb2xvcmFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYnMtc2xpZGVyJyxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi10YWJzLXNsaWRlcicsXG4gICAgfSkpXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRhYnMuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZUYWJzQmFyIGZyb20gJy4vVlRhYnNCYXInXG5pbXBvcnQgVlRhYnNJdGVtcyBmcm9tICcuL1ZUYWJzSXRlbXMnXG5pbXBvcnQgVlRhYnNTbGlkZXIgZnJvbSAnLi9WVGFic1NsaWRlcidcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgUHJveHlhYmxlIGZyb20gJy4uLy4uL21peGlucy9wcm94eWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBSZXNpemUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IEV4dHJhY3RWdWUgfSBmcm9tICcuLy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFByb3h5YWJsZSxcbiAgVGhlbWVhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkcmVmczoge1xuICAgIGl0ZW1zOiBJbnN0YW5jZVR5cGU8dHlwZW9mIFZUYWJzQmFyPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFicycsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIFJlc2l6ZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGFsaWduV2l0aFRpdGxlOiBCb29sZWFuLFxuICAgIGJhY2tncm91bmRDb2xvcjogU3RyaW5nLFxuICAgIGNlbnRlckFjdGl2ZTogQm9vbGVhbixcbiAgICBjZW50ZXJlZDogQm9vbGVhbixcbiAgICBmaXhlZFRhYnM6IEJvb2xlYW4sXG4gICAgZ3JvdzogQm9vbGVhbixcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBoaWRlU2xpZGVyOiBCb29sZWFuLFxuICAgIGljb25zQW5kVGV4dDogQm9vbGVhbixcbiAgICBtb2JpbGVCcmVha3BvaW50OiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgIG5leHRJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJG5leHQnLFxuICAgIH0sXG4gICAgb3B0aW9uYWw6IEJvb2xlYW4sXG4gICAgcHJldkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckcHJldicsXG4gICAgfSxcbiAgICByaWdodDogQm9vbGVhbixcbiAgICBzaG93QXJyb3dzOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICBzbGlkZXJDb2xvcjogU3RyaW5nLFxuICAgIHNsaWRlclNpemU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAyLFxuICAgIH0sXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2l6ZVRpbWVvdXQ6IDAsXG4gICAgICBzbGlkZXI6IHtcbiAgICAgICAgaGVpZ2h0OiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICAgIGxlZnQ6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgICAgcmlnaHQ6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgICAgdG9wOiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICAgIHdpZHRoOiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvblRpbWU6IDMwMCxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtdGFicy0tYWxpZ24td2l0aC10aXRsZSc6IHRoaXMuYWxpZ25XaXRoVGl0bGUsXG4gICAgICAgICd2LXRhYnMtLWNlbnRlcmVkJzogdGhpcy5jZW50ZXJlZCxcbiAgICAgICAgJ3YtdGFicy0tZml4ZWQtdGFicyc6IHRoaXMuZml4ZWRUYWJzLFxuICAgICAgICAndi10YWJzLS1ncm93JzogdGhpcy5ncm93LFxuICAgICAgICAndi10YWJzLS1pY29ucy1hbmQtdGV4dCc6IHRoaXMuaWNvbnNBbmRUZXh0LFxuICAgICAgICAndi10YWJzLS1yaWdodCc6IHRoaXMucmlnaHQsXG4gICAgICAgICd2LXRhYnMtLXZlcnRpY2FsJzogdGhpcy52ZXJ0aWNhbCxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc1JldmVyc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bCAmJiB0aGlzLnZlcnRpY2FsXG4gICAgfSxcbiAgICBzbGlkZXJTdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIuaGVpZ2h0KSxcbiAgICAgICAgbGVmdDogdGhpcy5pc1JldmVyc2VkID8gdW5kZWZpbmVkIDogY29udmVydFRvVW5pdCh0aGlzLnNsaWRlci5sZWZ0KSxcbiAgICAgICAgcmlnaHQ6IHRoaXMuaXNSZXZlcnNlZCA/IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIucmlnaHQpIDogdW5kZWZpbmVkLFxuICAgICAgICB0b3A6IHRoaXMudmVydGljYWwgPyBjb252ZXJ0VG9Vbml0KHRoaXMuc2xpZGVyLnRvcCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHRyYW5zaXRpb246IHRoaXMuc2xpZGVyLmxlZnQgIT0gbnVsbCA/IG51bGwgOiAnbm9uZScsXG4gICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMuc2xpZGVyLndpZHRoKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5jb2xvcikgcmV0dXJuIHRoaXMuY29sb3JcbiAgICAgIGVsc2UgaWYgKHRoaXMuaXNEYXJrICYmICF0aGlzLmFwcElzRGFyaykgcmV0dXJuICd3aGl0ZSdcbiAgICAgIGVsc2UgcmV0dXJuICdwcmltYXJ5J1xuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBhbGlnbldpdGhUaXRsZTogJ2NhbGxTbGlkZXInLFxuICAgIGNlbnRlcmVkOiAnY2FsbFNsaWRlcicsXG4gICAgY2VudGVyQWN0aXZlOiAnY2FsbFNsaWRlcicsXG4gICAgZml4ZWRUYWJzOiAnY2FsbFNsaWRlcicsXG4gICAgZ3JvdzogJ2NhbGxTbGlkZXInLFxuICAgIHJpZ2h0OiAnY2FsbFNsaWRlcicsXG4gICAgc2hvd0Fycm93czogJ2NhbGxTbGlkZXInLFxuICAgIHZlcnRpY2FsOiAnY2FsbFNsaWRlcicsXG4gICAgJyR2dWV0aWZ5LmFwcGxpY2F0aW9uLmxlZnQnOiAnb25SZXNpemUnLFxuICAgICckdnVldGlmeS5hcHBsaWNhdGlvbi5yaWdodCc6ICdvblJlc2l6ZScsXG4gICAgJyR2dWV0aWZ5LnJ0bCc6ICdvblJlc2l6ZScsXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5jYWxsU2xpZGVyLCAzMClcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxsU2xpZGVyICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaWRlU2xpZGVyIHx8XG4gICAgICAgICF0aGlzLiRyZWZzLml0ZW1zIHx8XG4gICAgICAgICF0aGlzLiRyZWZzLml0ZW1zLnNlbGVjdGVkSXRlbXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zbGlkZXIud2lkdGggPSAwXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIC8vIEdpdmUgc2NyZWVuIHRpbWUgdG8gcGFpbnRcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gdGhpcy4kcmVmcy5pdGVtcy5zZWxlY3RlZEl0ZW1zWzBdXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoIWFjdGl2ZVRhYiB8fCAhYWN0aXZlVGFiLiRlbCkge1xuICAgICAgICAgIHRoaXMuc2xpZGVyLndpZHRoID0gMFxuICAgICAgICAgIHRoaXMuc2xpZGVyLmxlZnQgPSAwXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSBhY3RpdmVUYWIuJGVsIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgdGhpcy5zbGlkZXIgPSB7XG4gICAgICAgICAgaGVpZ2h0OiAhdGhpcy52ZXJ0aWNhbCA/IE51bWJlcih0aGlzLnNsaWRlclNpemUpIDogZWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IHRoaXMudmVydGljYWwgPyAwIDogZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgICByaWdodDogdGhpcy52ZXJ0aWNhbCA/IDAgOiBlbC5vZmZzZXRMZWZ0ICsgZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgdG9wOiBlbC5vZmZzZXRUb3AsXG4gICAgICAgICAgd2lkdGg6IHRoaXMudmVydGljYWwgPyBOdW1iZXIodGhpcy5zbGlkZXJTaXplKSA6IGVsLnNjcm9sbFdpZHRoLFxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgZ2VuQmFyIChpdGVtczogVk5vZGVbXSwgc2xpZGVyOiBWTm9kZSB8IG51bGwpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBjZW50ZXJBY3RpdmU6IHRoaXMuY2VudGVyQWN0aXZlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICBtYW5kYXRvcnk6ICF0aGlzLm9wdGlvbmFsLFxuICAgICAgICAgIG1vYmlsZUJyZWFrcG9pbnQ6IHRoaXMubW9iaWxlQnJlYWtwb2ludCxcbiAgICAgICAgICBuZXh0SWNvbjogdGhpcy5uZXh0SWNvbixcbiAgICAgICAgICBwcmV2SWNvbjogdGhpcy5wcmV2SWNvbixcbiAgICAgICAgICBzaG93QXJyb3dzOiB0aGlzLnNob3dBcnJvd3MsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaW50ZXJuYWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnY2FsbDpzbGlkZXInOiB0aGlzLmNhbGxTbGlkZXIsXG4gICAgICAgICAgY2hhbmdlOiAodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHZhbFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ2l0ZW1zJyxcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb21wdXRlZENvbG9yLCBkYXRhKVxuICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IsIGRhdGEpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZUYWJzQmFyLCBkYXRhLCBbXG4gICAgICAgIHRoaXMuZ2VuU2xpZGVyKHNsaWRlciksXG4gICAgICAgIGl0ZW1zLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkl0ZW1zIChpdGVtczogVk5vZGUgfCBudWxsLCBpdGVtOiBWTm9kZVtdKSB7XG4gICAgICAvLyBJZiB1c2VyIHByb3ZpZGVzIGl0ZW1zXG4gICAgICAvLyBvcHQgdG8gdXNlIHRoZWlyc1xuICAgICAgaWYgKGl0ZW1zKSByZXR1cm4gaXRlbXNcblxuICAgICAgLy8gSWYgbm8gdGFicyBhcmUgcHJvdmlkZWRcbiAgICAgIC8vIHJlbmRlciBub3RoaW5nXG4gICAgICBpZiAoIWl0ZW0ubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWVGFic0l0ZW1zLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuaW50ZXJuYWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6ICh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sIGl0ZW0pXG4gICAgfSxcbiAgICBnZW5TbGlkZXIgKHNsaWRlcjogVk5vZGUgfCBudWxsKSB7XG4gICAgICBpZiAodGhpcy5oaWRlU2xpZGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICBpZiAoIXNsaWRlcikge1xuICAgICAgICBzbGlkZXIgPSB0aGlzLiRjcmVhdGVFbGVtZW50KFZUYWJzU2xpZGVyLCB7XG4gICAgICAgICAgcHJvcHM6IHsgY29sb3I6IHRoaXMuc2xpZGVyQ29sb3IgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRhYnMtc2xpZGVyLXdyYXBwZXInLFxuICAgICAgICBzdHlsZTogdGhpcy5zbGlkZXJTdHlsZXMsXG4gICAgICB9LCBbc2xpZGVyXSlcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpXG4gICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmNhbGxTbGlkZXIsIDApXG4gICAgfSxcbiAgICBwYXJzZU5vZGVzICgpIHtcbiAgICAgIGxldCBpdGVtcyA9IG51bGxcbiAgICAgIGxldCBzbGlkZXIgPSBudWxsXG4gICAgICBjb25zdCBpdGVtID0gW11cbiAgICAgIGNvbnN0IHRhYiA9IFtdXG4gICAgICBjb25zdCBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgY29uc3QgbGVuZ3RoID0gc2xvdC5sZW5ndGhcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2bm9kZSA9IHNsb3RbaV1cblxuICAgICAgICBpZiAodm5vZGUuY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgICAgIHN3aXRjaCAodm5vZGUuY29tcG9uZW50T3B0aW9ucy5DdG9yLm9wdGlvbnMubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAndi10YWJzLXNsaWRlcic6IHNsaWRlciA9IHZub2RlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd2LXRhYnMtaXRlbXMnOiBpdGVtcyA9IHZub2RlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd2LXRhYi1pdGVtJzogaXRlbS5wdXNoKHZub2RlKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgLy8gY2FzZSAndi10YWInIC0gaW50ZW50aW9uYWxseSBvbWl0dGVkXG4gICAgICAgICAgICBkZWZhdWx0OiB0YWIucHVzaCh2bm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFiLnB1c2godm5vZGUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiB0YWI6IGFycmF5IG9mIGB2LXRhYmBcbiAgICAgICAqIHNsaWRlcjogc2luZ2xlIGB2LXRhYnMtc2xpZGVyYFxuICAgICAgICogaXRlbXM6IHNpbmdsZSBgdi10YWJzLWl0ZW1zYFxuICAgICAgICogaXRlbTogYXJyYXkgb2YgYHYtdGFiLWl0ZW1gXG4gICAgICAgKi9cbiAgICAgIHJldHVybiB7IHRhYiwgc2xpZGVyLCBpdGVtcywgaXRlbSB9XG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyB0YWIsIHNsaWRlciwgaXRlbXMsIGl0ZW0gfSA9IHRoaXMucGFyc2VOb2RlcygpXG5cbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXRhYnMnLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6ICdyZXNpemUnLFxuICAgICAgICBtb2RpZmllcnM6IHsgcXVpZXQ6IHRydWUgfSxcbiAgICAgICAgdmFsdWU6IHRoaXMub25SZXNpemUsXG4gICAgICB9XSxcbiAgICB9LCBbXG4gICAgICB0aGlzLmdlbkJhcih0YWIsIHNsaWRlciksXG4gICAgICB0aGlzLmdlbkl0ZW1zKGl0ZW1zLCBpdGVtKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBWV2luZG93IGZyb20gJy4vVldpbmRvdydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQm9vdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2Jvb3RhYmxlJ1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBHcm91cGFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL2dyb3VwYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFRvdWNoIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMsIHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIEJvb3RhYmxlLFxuICBHcm91cGFibGVGYWN0b3J5KCd3aW5kb3dHcm91cCcsICd2LXdpbmRvdy1pdGVtJywgJ3Ytd2luZG93JylcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBFeHRyYWN0VnVlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRlbDogSFRNTEVsZW1lbnRcbiAgd2luZG93R3JvdXA6IEluc3RhbmNlVHlwZTx0eXBlb2YgVldpbmRvdz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoXG4gIC8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXdpbmRvdy1pdGVtJyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgVG91Y2gsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICByZXZlcnNlVHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgaW5UcmFuc2l0aW9uOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBDbGFzc2VzXG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zaXRpb24gKCk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICAgICAgaWYgKCF0aGlzLndpbmRvd0dyb3VwLmludGVybmFsUmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMudHJhbnNpdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICA/IHRoaXMudHJhbnNpdGlvbiB8fCAnJ1xuICAgICAgICAgIDogdGhpcy53aW5kb3dHcm91cC5jb21wdXRlZFRyYW5zaXRpb25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJldmVyc2VUcmFuc2l0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMucmV2ZXJzZVRyYW5zaXRpb24gfHwgJydcbiAgICAgICAgOiB0aGlzLndpbmRvd0dyb3VwLmNvbXB1dGVkVHJhbnNpdGlvblxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzbG90cy5kZWZhdWx0XG4gICAgfSxcbiAgICBnZW5XaW5kb3dJdGVtICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi13aW5kb3ctaXRlbScsXG4gICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICB9XSxcbiAgICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICAgIH0sIHRoaXMuZ2VuRGVmYXVsdFNsb3QoKSlcbiAgICB9LFxuICAgIG9uQWZ0ZXJUcmFuc2l0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmFsaXplIHRyYW5zaXRpb24gc3RhdGUuXG4gICAgICB0aGlzLmluVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICBpZiAodGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQgPiAwKSB7XG4gICAgICAgIHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkNvdW50LS1cblxuICAgICAgICAvLyBSZW1vdmUgY29udGFpbmVyIGhlaWdodCBpZiB3ZSBhcmUgb3V0IG9mIHRyYW5zaXRpb24uXG4gICAgICAgIGlmICh0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25Db3VudCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkhlaWdodCA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkJlZm9yZVRyYW5zaXRpb24gKCkge1xuICAgICAgaWYgKHRoaXMuaW5UcmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJbml0aWFsaXplIHRyYW5zaXRpb24gc3RhdGUgaGVyZS5cbiAgICAgIHRoaXMuaW5UcmFuc2l0aW9uID0gdHJ1ZVxuICAgICAgaWYgKHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkNvdW50ID09PSAwKSB7XG4gICAgICAgIC8vIFNldCBpbml0aWFsIGhlaWdodCBmb3IgaGVpZ2h0IHRyYW5zaXRpb24uXG4gICAgICAgIHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkhlaWdodCA9IGNvbnZlcnRUb1VuaXQodGhpcy53aW5kb3dHcm91cC4kZWwuY2xpZW50SGVpZ2h0KVxuICAgICAgfVxuICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQrK1xuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uQ2FuY2VsbGVkICgpIHtcbiAgICAgIHRoaXMub25BZnRlclRyYW5zaXRpb24oKSAvLyBUaGlzIHNob3VsZCBoYXZlIHRoZSBzYW1lIHBhdGggYXMgbm9ybWFsIHRyYW5zaXRpb24gZW5kLlxuICAgIH0sXG4gICAgb25FbnRlciAoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaW5UcmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIC8vIERvIG5vdCBzZXQgaGVpZ2h0IGlmIG5vIHRyYW5zaXRpb24gb3IgY2FuY2VsbGVkLlxuICAgICAgICBpZiAoIXRoaXMuY29tcHV0ZWRUcmFuc2l0aW9uIHx8ICF0aGlzLmluVHJhbnNpdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRyYW5zaXRpb24gdGFyZ2V0IGhlaWdodC5cbiAgICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uSGVpZ2h0ID0gY29udmVydFRvVW5pdChlbC5jbGllbnRIZWlnaHQpXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCd0cmFuc2l0aW9uJywge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbmFtZTogdGhpcy5jb21wdXRlZFRyYW5zaXRpb24sXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgLy8gSGFuZGxlcnMgZm9yIGVudGVyIHdpbmRvd3MuXG4gICAgICAgIGJlZm9yZUVudGVyOiB0aGlzLm9uQmVmb3JlVHJhbnNpdGlvbixcbiAgICAgICAgYWZ0ZXJFbnRlcjogdGhpcy5vbkFmdGVyVHJhbnNpdGlvbixcbiAgICAgICAgZW50ZXJDYW5jZWxsZWQ6IHRoaXMub25UcmFuc2l0aW9uQ2FuY2VsbGVkLFxuXG4gICAgICAgIC8vIEhhbmRsZXJzIGZvciBsZWF2ZSB3aW5kb3dzLlxuICAgICAgICBiZWZvcmVMZWF2ZTogdGhpcy5vbkJlZm9yZVRyYW5zaXRpb24sXG4gICAgICAgIGFmdGVyTGVhdmU6IHRoaXMub25BZnRlclRyYW5zaXRpb24sXG4gICAgICAgIGxlYXZlQ2FuY2VsbGVkOiB0aGlzLm9uVHJhbnNpdGlvbkNhbmNlbGxlZCxcblxuICAgICAgICAvLyBFbnRlciBoYW5kbGVyIGZvciBoZWlnaHQgdHJhbnNpdGlvbi5cbiAgICAgICAgZW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIH0sXG4gICAgfSwgdGhpcy5zaG93TGF6eUNvbnRlbnQoKCkgPT4gW3RoaXMuZ2VuV2luZG93SXRlbSgpXSkpXG4gIH0sXG59KVxuIiwiLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZXaW5kb3dJdGVtIGZyb20gJy4uL1ZXaW5kb3cvVldpbmRvd0l0ZW0nXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWV2luZG93SXRlbS5leHRlbmQoe1xuICBuYW1lOiAndi10YWItaXRlbScsXG5cbiAgcHJvcHM6IHtcbiAgICBpZDogU3RyaW5nLFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5XaW5kb3dJdGVtICgpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBWV2luZG93SXRlbS5vcHRpb25zLm1ldGhvZHMuZ2VuV2luZG93SXRlbS5jYWxsKHRoaXMpXG5cbiAgICAgIGl0ZW0uZGF0YSEuZG9tUHJvcHMgPSBpdGVtLmRhdGEhLmRvbVByb3BzIHx8IHt9XG4gICAgICBpdGVtLmRhdGEhLmRvbVByb3BzLmlkID0gdGhpcy5pZCB8fCB0aGlzLnZhbHVlXG5cbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSxcbiAgfSxcbn0pXG4iLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLW9uZU9mLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0zLW9uZU9mLTEtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZDc0ODMyNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIE1peGluc1xuaW1wb3J0IE1lYXN1cmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL21lYXN1cmFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IGludGVyc2VjdCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ludGVyc2VjdCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIE1lYXN1cmFibGUsXG4gIFRvZ2dsZWFibGVcbikuZXh0ZW5kKHtcbiAgbmFtZTogJ1ZMYXp5JyxcblxuICBkaXJlY3RpdmVzOiB7IGludGVyc2VjdCB9LFxuXG4gIHByb3BzOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdHlwZXMsIG5hdmlnYXRlIHRvOlxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbl9PYnNlcnZlcl9BUElcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7XG4gICAgICAgIHJvb3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgcm9vdE1hcmdpbjogdW5kZWZpbmVkLFxuICAgICAgICB0aHJlc2hvbGQ6IHVuZGVmaW5lZCxcbiAgICAgIH0pLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQ+LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZmFkZS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5tZWFzdXJhYmxlU3R5bGVzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IGdldFNsb3QodGhpcylcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbikgcmV0dXJuIHNsb3RcblxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgY2hpbGRyZW4ucHVzaChzbG90KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHsgbmFtZTogdGhpcy50cmFuc2l0aW9uIH0sXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIG9uT2JzZXJ2ZSAoXG4gICAgICBlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sXG4gICAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsXG4gICAgICBpc0ludGVyc2VjdGluZzogYm9vbGVhbixcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSByZXR1cm5cblxuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzSW50ZXJzZWN0aW5nXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgodGhpcy50YWcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1sYXp5JyxcbiAgICAgIGF0dHJzOiB0aGlzLiRhdHRycyxcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6ICdpbnRlcnNlY3QnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGhhbmRsZXI6IHRoaXMub25PYnNlcnZlLFxuICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgIH1dLFxuICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICB9LCBbdGhpcy5nZW5Db250ZW50KCldKVxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJwYS0yXCIsYXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDRcIjpcIlwiLFwic202XCI6XCJcIixcImxnM1wiOlwiXCJ9fSxbX2MoJ3YtbGF6eScse2F0dHJzOntcIm9wdGlvbnNcIjp7XG4gICAgICB0aHJlc2hvbGQ6IC42XG4gICAgfSxcIm1pbi1oZWlnaHRcIjpcIjIwMFwiLFwidHJhbnNpdGlvblwiOlwiZmFkZS10cmFuc2l0aW9uXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmlzQWN0aXZlKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmlzQWN0aXZlPSQkdn0sZXhwcmVzc2lvbjpcImlzQWN0aXZlXCJ9fSxbX2MoJ3YtY2FyZCcse2F0dHJzOntcIndpZHRoXCI6XCIxMDAlXCIsXCJ0b1wiOl92bS51cmwsXCJkaXNhYmxlZFwiOl92bS5kYXRhLmRyYWZ0fX0sW19jKCd2LWltZycse2F0dHJzOntcInNyY1wiOl92bS5kYXRhLmJhY2tkcm9wLFwiaGVpZ2h0XCI6XCIyMDBweFwiLFwibWluLXdpZHRoXCI6XCIxMDAlXCIsXCJ3aWR0aFwiOlwiMTAwJVwifX0sWyhfdm0uZGVsaXZlcnlfZmVlPjApP19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJvbnNhbGVcIn0sW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmRlbGl2ZXJ5X2ZlZSkpK1wiIERlbGl2ZXJ5XCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmRhdGEucmF0ZXMuY3I+MCk/X2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImJlc3RzZWxsZXJcIn0sW192bS5fdihcIlJlY29tbWVuZGVkXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmRhdGEuZHJhZnQpP19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJ0cmFuc3R5cGVcIn0sW192bS5fdihcIk5vdCBBY2NlcHRpbmcgT3JkZXJcIildKTpfdm0uX2UoKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1hdmF0YXInLHthdHRyczp7XCJjb2xvclwiOlwiZ3JleSBkYXJrZW4tM1wifX0sW19jKCd2LWltZycse3N0YXRpY0NsYXNzOlwiZWxldmF0aW9uLTZcIixhdHRyczp7XCJzcmNcIjpfdm0uZGF0YS5sb2dvfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5idXNpbmVzc19uYW1lKSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW19jKCdzbWFsbCcsW192bS5fdihfdm0uX3MoX3ZtLmRhdGEuYnJhbmNoKSldKV0pXSwxKV0sMSldLDEpXSwxKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPHYtZmxleCB4czEyIG1kNCBzbTYgbGczIGNsYXNzPVwicGEtMlwiPlxuICAgICAgICA8di1sYXp5IHYtbW9kZWw9XCJpc0FjdGl2ZVwiIDpvcHRpb25zPVwie1xuICAgICAgICAgIHRocmVzaG9sZDogLjZcbiAgICAgICAgfVwiIG1pbi1oZWlnaHQ9XCIyMDBcIiB0cmFuc2l0aW9uPVwiZmFkZS10cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICA8di1jYXJkIHdpZHRoPVwiMTAwJVwiIDp0bz1cInVybFwiIDpkaXNhYmxlZD1cImRhdGEuZHJhZnRcIj5cbiAgICAgICAgICAgICAgICA8di1pbWcgOnNyYz1cImRhdGEuYmFja2Ryb3BcIiBoZWlnaHQ9XCIyMDBweFwiIG1pbi13aWR0aD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvbnNhbGVcIiB2LWlmPVwiZGVsaXZlcnlfZmVlPjBcIj4ge3tkZWxpdmVyeV9mZWV8dG9QSFB9fSBEZWxpdmVyeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRhdGEucmF0ZXMuY3I+MFwiIGNsYXNzPVwiYmVzdHNlbGxlclwiPlJlY29tbWVuZGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyYW5zdHlwZVwiIHYtaWY9XCJkYXRhLmRyYWZ0XCI+Tm90IEFjY2VwdGluZyBPcmRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3YtaW1nPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWF2YXRhciBjb2xvcj1cImdyZXkgZGFya2VuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pbWcgY2xhc3M9XCJlbGV2YXRpb24tNlwiIDpzcmM9XCJkYXRhLmxvZ29cIiAvPiA8L3YtbGlzdC1pdGVtLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT57eyBkYXRhLmJ1c2luZXNzX25hbWUgfX08L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnt7IGRhdGEuYnJhbmNoIH19PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWxhenk+XG4gICAgPC92LWZsZXg+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBjdXJyZW50TG9jYXRpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbJ21hcC9nZXRMb2NhdGlvbiddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsaXZlcnlfZmVlKCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGVsaXZlcnlfZmVlcy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSB0aGlzLmRhdGEuaWQpXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHJldHVybiB0aGlzLmRlbGl2ZXJ5X2ZlZXNbaW5kZXhdLmFtb3VudFxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxpdmVyeV9mZWVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydtYXAvZ2V0RGVsaXZlcnlGZWVzJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYWRtaW4vZ2V0RmFyZSddXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgaXNBY3RpdmUodmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAmJiAhdGhpcy5kYXRhLmRyYWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogdGhpcy5kYXRhLmNvb3JkaW5hdGVzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiB0aGlzLmRhdGEuY29vcmRpbmF0ZXMubG9uZ2l0dWRlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRsID0gdGhpcy5jdXJyZW50TG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsaXZlcnlfZmVlPT09MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVGZWVzKGRsLCBzbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQgKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjYWxjdWxhdGVGZWVzKGRsLCBzbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLiRnZXQoJy9kaXN0YW5jZS8nLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luczogc2wubGF0ICsgJywnICsgc2wubG5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25zOiBkbC5sYXQgKyAnLCcgKyBkbC5sbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBSXphU3lEWC1hdG9MbTZuUXBNZ1FfR1lISW8xa2lzY0FlNXR4WGMnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBwYXJzZUZsb2F0KHRoaXMuZGYuZmVlcy5mb29kLmRpc3RhbmNlX3BsYXRmb3JtKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWRlciA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QuZGlzdGFuY2VfcmlkZXIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjdiA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2Quc2NfbWluX3ZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZCA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QubWluX2Rpc3RhbmNlKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW5fZGYgPSBwYXJzZUZsb2F0KHRoaXMuZGYuZmVlcy5mb29kLm1pbl9kZilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZml4ZWRfcmlkZXJfZmVlID0gcGFyc2VGbG9hdCh0aGlzLmRmLmZlZXMuZm9vZC5yaWRlcl9maXhlZF9mZWUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZC5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZiA9IDBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRzID0gZGlzdGFuY2UgLyAxMDAwXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSAvIDEwMDAgPCBtZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGYgPSBtaW5fZGZcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtdWx0aXBsaWVyID0gZGlzdGFuY2UgLyAxMDAwIC0gbWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsaWVyIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gTWF0aC5mbG9vcihtdWx0aXBsaWVyKSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGRmID0gKHJpZGVyICsgcGxhdGZvcm0pICogbXVsdGlwbGllciArIG1pbl9kZlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRzID0gTWF0aC5mbG9vcihkcykgKyAxXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlX2FjdHVhbCA9IHBhcnNlRmxvYXQoZC5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlLnZhbHVlIC8gMTAwMCkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmlkZXJfZGYgPSAwXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZV9hY3R1YWwgPD0gbWQpIHJpZGVyX2RmID0gZml4ZWRfcmlkZXJfZmVlXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmlkZXJfZGYgPSBmaXhlZF9yaWRlcl9mZWUgKyAoKGRpc3RhbmNlX2FjdHVhbCAtIG1kKSAqIHJpZGVyKVxuICAgICAgICAgICAgICAgICAgICByaWRlcl9kZiA9IE1hdGguZmxvb3IocmlkZXJfZGYpXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF0Zm9ybV9kZiA9IE1hdGguZmxvb3IoZGYgLSByaWRlcl9kZilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdtYXAvYWRkRGVsaXZlcnlGZWVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGxhdGZvcm1fZGYgKyByaWRlcl9kZlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgICAgIC5vbnNhbGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiA5OTtcbiAgfVxuICBcbiAgLnRyYW5zdHlwZSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC52LWNhcmRfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXN0b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZXN0b0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkNzQ4MzI2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Jlc3RvQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Jlc3RvQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL1Jlc3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZDc0ODMyNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiMGQ3NDgzMjZcIixcbiAgXCI5OWY3ZTg1YVwiXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0c1xuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSW1nJztcbmltcG9ydCB7IFZMYXp5IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGF6eSc7XG5pbXBvcnQgeyBWTGlzdEl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUF2YXRhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbVRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQ2FyZCxWQ2FyZEFjdGlvbnMsVkZsZXgsVkltZyxWTGF6eSxWTGlzdEl0ZW0sVkxpc3RJdGVtQXZhdGFyLFZMaXN0SXRlbUNvbnRlbnQsVkxpc3RJdGVtU3VidGl0bGUsVkxpc3RJdGVtVGl0bGV9KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkF1dG9jb21wbGV0ZS5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlNlbGVjdCwgeyBkZWZhdWx0TWVudVByb3BzIGFzIFZTZWxlY3RNZW51UHJvcHMgfSBmcm9tICcuLi9WU2VsZWN0L1ZTZWxlY3QnXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7XG4gIGdldE9iamVjdFZhbHVlQnlQYXRoLFxuICBnZXRQcm9wZXJ0eUZyb21JdGVtLFxuICBrZXlDb2Rlcyxcbn0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUHJvcFR5cGUsIFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuXG5jb25zdCBkZWZhdWx0TWVudVByb3BzID0ge1xuICAuLi5WU2VsZWN0TWVudVByb3BzLFxuICBvZmZzZXRZOiB0cnVlLFxuICBvZmZzZXRPdmVyZmxvdzogdHJ1ZSxcbiAgdHJhbnNpdGlvbjogZmFsc2UsXG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWU2VsZWN0LmV4dGVuZCh7XG4gIG5hbWU6ICd2LWF1dG9jb21wbGV0ZScsXG5cbiAgcHJvcHM6IHtcbiAgICBhbGxvd092ZXJmbG93OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGF1dG9TZWxlY3RGaXJzdDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IChpdGVtOiBhbnksIHF1ZXJ5VGV4dDogc3RyaW5nLCBpdGVtVGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnlUZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkpID4gLTFcbiAgICAgIH0sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPChpdGVtOiBhbnksIHF1ZXJ5VGV4dDogc3RyaW5nLCBpdGVtVGV4dDogc3RyaW5nKSA9PiBib29sZWFuPixcbiAgICBoaWRlTm9EYXRhOiBCb29sZWFuLFxuICAgIG1lbnVQcm9wczoge1xuICAgICAgdHlwZTogVlNlbGVjdC5vcHRpb25zLnByb3BzLm1lbnVQcm9wcy50eXBlLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdE1lbnVQcm9wcyxcbiAgICB9LFxuICAgIG5vRmlsdGVyOiBCb29sZWFuLFxuICAgIHNlYXJjaElucHV0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcgYXMgUHJvcFR5cGU8c3RyaW5nIHwgdW5kZWZpbmVkPixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXp5U2VhcmNoOiB0aGlzLnNlYXJjaElucHV0LFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WU2VsZWN0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1hdXRvY29tcGxldGUnOiB0cnVlLFxuICAgICAgICAndi1hdXRvY29tcGxldGUtLWlzLXNlbGVjdGluZy1pbmRleCc6IHRoaXMuc2VsZWN0ZWRJbmRleCA+IC0xLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRJdGVtc1xuICAgIH0sXG4gICAgc2VsZWN0ZWRWYWx1ZXMgKCk6IG9iamVjdFtdIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICB9LFxuICAgIGhhc0Rpc3BsYXllZEl0ZW1zICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGVTZWxlY3RlZFxuICAgICAgICA/IHRoaXMuZmlsdGVyZWRJdGVtcy5zb21lKGl0ZW0gPT4gIXRoaXMuaGFzSXRlbShpdGVtKSlcbiAgICAgICAgOiB0aGlzLmZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgY3VycmVudFJhbmdlICgpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtID09IG51bGwpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiBTdHJpbmcodGhpcy5nZXRUZXh0KHRoaXMuc2VsZWN0ZWRJdGVtKSkubGVuZ3RoXG4gICAgfSxcbiAgICBmaWx0ZXJlZEl0ZW1zICgpOiBvYmplY3RbXSB7XG4gICAgICBpZiAoIXRoaXMuaXNTZWFyY2hpbmcgfHwgdGhpcy5ub0ZpbHRlciB8fCB0aGlzLmludGVybmFsU2VhcmNoID09IG51bGwpIHJldHVybiB0aGlzLmFsbEl0ZW1zXG5cbiAgICAgIHJldHVybiB0aGlzLmFsbEl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQpXG4gICAgICAgIGNvbnN0IHRleHQgPSB2YWx1ZSAhPSBudWxsID8gU3RyaW5nKHZhbHVlKSA6ICcnXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGl0ZW0sIFN0cmluZyh0aGlzLmludGVybmFsU2VhcmNoKSwgdGV4dClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcm5hbFNlYXJjaDoge1xuICAgICAgZ2V0ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5U2VhcmNoXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlTZWFyY2ggPSB2YWxcblxuICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6c2VhcmNoLWlucHV0JywgdmFsKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzQW55VmFsdWVBbGxvd2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0sXG4gICAgaXNEaXJ0eSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hJc0RpcnR5IHx8IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwXG4gICAgfSxcbiAgICBpc1NlYXJjaGluZyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLm11bHRpcGxlICYmXG4gICAgICAgIHRoaXMuc2VhcmNoSXNEaXJ0eVxuICAgICAgKSB8fCAoXG4gICAgICAgIHRoaXMuc2VhcmNoSXNEaXJ0eSAmJlxuICAgICAgICB0aGlzLmludGVybmFsU2VhcmNoICE9PSB0aGlzLmdldFRleHQodGhpcy5zZWxlY3RlZEl0ZW0pXG4gICAgICApXG4gICAgfSxcbiAgICBtZW51Q2FuU2hvdyAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIHRoaXMuaGFzRGlzcGxheWVkSXRlbXMgfHwgIXRoaXMuaGlkZU5vRGF0YVxuICAgIH0sXG4gICAgJF9tZW51UHJvcHMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBwcm9wcyA9IFZTZWxlY3Qub3B0aW9ucy5jb21wdXRlZC4kX21lbnVQcm9wcy5jYWxsKHRoaXMpO1xuICAgICAgKHByb3BzIGFzIGFueSkuY29udGVudENsYXNzID0gYHYtYXV0b2NvbXBsZXRlX19jb250ZW50ICR7KHByb3BzIGFzIGFueSkuY29udGVudENsYXNzIHx8ICcnfWAudHJpbSgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0TWVudVByb3BzLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlYXJjaElzRGlydHkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTZWFyY2ggIT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmludGVybmFsU2VhcmNoICE9PSAnJ1xuICAgIH0sXG4gICAgc2VsZWN0ZWRJdGVtICgpOiBhbnkge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZChpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDb21wYXJhdG9yKHRoaXMuZ2V0VmFsdWUoaSksIHRoaXMuZ2V0VmFsdWUodGhpcy5pbnRlcm5hbFZhbHVlKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBsaXN0RGF0YSAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVlNlbGVjdC5vcHRpb25zLmNvbXB1dGVkLmxpc3REYXRhLmNhbGwodGhpcykgYXMgYW55XG5cbiAgICAgIGRhdGEucHJvcHMgPSB7XG4gICAgICAgIC4uLmRhdGEucHJvcHMsXG4gICAgICAgIGl0ZW1zOiB0aGlzLnZpcnR1YWxpemVkSXRlbXMsXG4gICAgICAgIG5vRmlsdGVyOiAoXG4gICAgICAgICAgdGhpcy5ub0ZpbHRlciB8fFxuICAgICAgICAgICF0aGlzLmlzU2VhcmNoaW5nIHx8XG4gICAgICAgICAgIXRoaXMuZmlsdGVyZWRJdGVtcy5sZW5ndGhcbiAgICAgICAgKSxcbiAgICAgICAgc2VhcmNoSW5wdXQ6IHRoaXMuaW50ZXJuYWxTZWFyY2gsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGZpbHRlcmVkSXRlbXM6ICdvbkZpbHRlcmVkSXRlbXNDaGFuZ2VkJyxcbiAgICBpbnRlcm5hbFZhbHVlOiAnc2V0U2VhcmNoJyxcbiAgICBpc0ZvY3VzZWQgKHZhbCkge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb3B5JywgdGhpcy5vbkNvcHkpXG4gICAgICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgdGhpcy4kcmVmcy5pbnB1dC5zZWxlY3QoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29weScsIHRoaXMub25Db3B5KVxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGYoKVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNNZW51QWN0aXZlICh2YWwpIHtcbiAgICAgIGlmICh2YWwgfHwgIXRoaXMuaGFzU2xvdCkgcmV0dXJuXG5cbiAgICAgIHRoaXMubGF6eVNlYXJjaCA9IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgaXRlbXMgKHZhbCwgb2xkVmFsKSB7XG4gICAgICAvLyBJZiB3ZSBhcmUgZm9jdXNlZCwgdGhlIG1lbnVcbiAgICAgIC8vIGlzIG5vdCBhY3RpdmUsIGhpZGUgbm8gZGF0YSBpcyBlbmFibGVkLFxuICAgICAgLy8gYW5kIGl0ZW1zIGNoYW5nZVxuICAgICAgLy8gVXNlciBpcyBwcm9iYWJseSBhc3luYyBsb2FkaW5nXG4gICAgICAvLyBpdGVtcywgdHJ5IHRvIGFjdGl2YXRlIHRoZSBtZW51XG4gICAgICBpZiAoXG4gICAgICAgICEob2xkVmFsICYmIG9sZFZhbC5sZW5ndGgpICYmXG4gICAgICAgIHRoaXMuaGlkZU5vRGF0YSAmJlxuICAgICAgICB0aGlzLmlzRm9jdXNlZCAmJlxuICAgICAgICAhdGhpcy5pc01lbnVBY3RpdmUgJiZcbiAgICAgICAgdmFsLmxlbmd0aFxuICAgICAgKSB0aGlzLmFjdGl2YXRlTWVudSgpXG4gICAgfSxcbiAgICBzZWFyY2hJbnB1dCAodmFsOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMubGF6eVNlYXJjaCA9IHZhbFxuICAgIH0sXG4gICAgaW50ZXJuYWxTZWFyY2g6ICdvbkludGVybmFsU2VhcmNoQ2hhbmdlZCcsXG4gICAgaXRlbVRleHQ6ICd1cGRhdGVTZWxmJyxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLnNldFNlYXJjaCgpXG4gIH0sXG5cbiAgZGVzdHJveWVkICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb3B5JywgdGhpcy5vbkNvcHkpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uRmlsdGVyZWRJdGVtc0NoYW5nZWQgKHZhbDogbmV2ZXJbXSwgb2xkVmFsOiBuZXZlcltdKSB7XG4gICAgICAvLyBUT0RPOiBIb3cgaXMgdGhlIHdhdGNoZXIgdHJpZ2dlcmVkXG4gICAgICAvLyBmb3IgZHVwbGljYXRlIGl0ZW1zPyBubyBpZGVhXG4gICAgICBpZiAodmFsID09PSBvbGRWYWwpIHJldHVyblxuXG4gICAgICB0aGlzLnNldE1lbnVJbmRleCgtMSlcblxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuaW50ZXJuYWxTZWFyY2ggfHxcbiAgICAgICAgICAodmFsLmxlbmd0aCAhPT0gMSAmJlxuICAgICAgICAgICAgIXRoaXMuYXV0b1NlbGVjdEZpcnN0KVxuICAgICAgICApIHJldHVyblxuXG4gICAgICAgIHRoaXMuJHJlZnMubWVudS5nZXRUaWxlcygpXG4gICAgICAgIHRoaXMuc2V0TWVudUluZGV4KDApXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25JbnRlcm5hbFNlYXJjaENoYW5nZWQgKCkge1xuICAgICAgdGhpcy51cGRhdGVNZW51RGltZW5zaW9ucygpXG4gICAgfSxcbiAgICB1cGRhdGVNZW51RGltZW5zaW9ucyAoKSB7XG4gICAgICAvLyBUeXBlIGZyb20gbWVudWFibGUgaXMgbm90IG1ha2luZyBpdCB0aHJvdWdoXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSAmJiB0aGlzLiRyZWZzLm1lbnUgJiYgdGhpcy4kcmVmcy5tZW51LnVwZGF0ZURpbWVuc2lvbnMoKVxuICAgIH0sXG4gICAgY2hhbmdlU2VsZWN0ZWRJbmRleCAoa2V5Q29kZTogbnVtYmVyKSB7XG4gICAgICAvLyBEbyBub3QgYWxsb3cgY2hhbmdpbmcgb2Ygc2VsZWN0ZWRJbmRleFxuICAgICAgLy8gd2hlbiBzZWFyY2ggaXMgZGlydHlcbiAgICAgIGlmICh0aGlzLnNlYXJjaElzRGlydHkpIHJldHVyblxuXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBrZXlDb2RlID09PSBrZXlDb2Rlcy5sZWZ0KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXgtLVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubXVsdGlwbGUgJiYga2V5Q29kZSA9PT0ga2V5Q29kZXMucmlnaHQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4KytcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5iYWNrc3BhY2UgfHwga2V5Q29kZSA9PT0ga2V5Q29kZXMuZGVsZXRlKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlQ3VycmVudEl0ZW0oKVxuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlQ3VycmVudEl0ZW0gKCkge1xuICAgICAgY29uc3QgY3VySW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhcbiAgICAgIGNvbnN0IGN1ckl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbXNbY3VySW5kZXhdXG5cbiAgICAgIC8vIERvIG5vdGhpbmcgaWYgaW5wdXQgb3IgaXRlbSBpcyBkaXNhYmxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuZ2V0RGlzYWJsZWQoY3VySXRlbSlcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxXG5cbiAgICAgIC8vIFNlbGVjdCB0aGUgbGFzdCBpdGVtIGlmXG4gICAgICAvLyB0aGVyZSBpcyBubyBzZWxlY3Rpb25cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID09PSAtMSAmJlxuICAgICAgICBsYXN0SW5kZXggIT09IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBsYXN0SW5kZXhcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gY3VySW5kZXggIT09IGxlbmd0aCAtIDFcbiAgICAgICAgPyBjdXJJbmRleFxuICAgICAgICA6IGN1ckluZGV4IC0gMVxuICAgICAgY29uc3QgbmV4dEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbXNbbmV4dEluZGV4XVxuXG4gICAgICBpZiAoIW5leHRJdGVtKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGN1ckl0ZW0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG5leHRJbmRleFxuICAgIH0sXG4gICAgY2xlYXJhYmxlQ2FsbGJhY2sgKCkge1xuICAgICAgdGhpcy5pbnRlcm5hbFNlYXJjaCA9IHVuZGVmaW5lZFxuXG4gICAgICBWU2VsZWN0Lm9wdGlvbnMubWV0aG9kcy5jbGVhcmFibGVDYWxsYmFjay5jYWxsKHRoaXMpXG4gICAgfSxcbiAgICBnZW5JbnB1dCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLmdlbklucHV0LmNhbGwodGhpcylcblxuICAgICAgaW5wdXQuZGF0YSA9IG1lcmdlRGF0YShpbnB1dC5kYXRhISwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aCh0aGlzLiRyZWZzLm1lbnUsICdhY3RpdmVUaWxlLmlkJyksXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aChpbnB1dC5kYXRhISwgJ2F0dHJzLmF1dG9jb21wbGV0ZScsICdvZmYnKSxcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHRoaXMuaW50ZXJuYWxTZWFyY2ggfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH0sXG4gICAgZ2VuSW5wdXRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBWU2VsZWN0Lm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dFNsb3QuY2FsbCh0aGlzKVxuXG4gICAgICBzbG90LmRhdGEhLmF0dHJzIS5yb2xlID0gJ2NvbWJvYm94J1xuXG4gICAgICByZXR1cm4gc2xvdFxuICAgIH0sXG4gICAgZ2VuU2VsZWN0aW9ucyAoKTogVk5vZGUgfCBuZXZlcltdIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc1Nsb3QgfHwgdGhpcy5tdWx0aXBsZVxuICAgICAgICA/IFZTZWxlY3Qub3B0aW9ucy5tZXRob2RzLmdlblNlbGVjdGlvbnMuY2FsbCh0aGlzKVxuICAgICAgICA6IFtdXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaXNJbnRlcmFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA+IC0xXG4gICAgICAgID8gKHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xKVxuICAgICAgICA6IHRoaXMub25Gb2N1cygpXG5cbiAgICAgIGlmICghdGhpcy5pc0FwcGVuZElubmVyKGUudGFyZ2V0KSkgdGhpcy5hY3RpdmF0ZU1lbnUoKVxuICAgIH0sXG4gICAgb25JbnB1dCAoZTogRXZlbnQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID4gLTEgfHxcbiAgICAgICAgIWUudGFyZ2V0XG4gICAgICApIHJldHVyblxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuXG4gICAgICAvLyBJZiB0eXBpbmcgYW5kIG1lbnUgaXMgbm90IGN1cnJlbnRseSBhY3RpdmVcbiAgICAgIGlmICh0YXJnZXQudmFsdWUpIHRoaXMuYWN0aXZhdGVNZW51KClcblxuICAgICAgdGhpcy5pbnRlcm5hbFNlYXJjaCA9IHZhbHVlXG4gICAgICB0aGlzLmJhZElucHV0ID0gdGFyZ2V0LnZhbGlkaXR5ICYmIHRhcmdldC52YWxpZGl0eS5iYWRJbnB1dFxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlXG5cbiAgICAgIFZTZWxlY3Qub3B0aW9ucy5tZXRob2RzLm9uS2V5RG93bi5jYWxsKHRoaXMsIGUpXG5cbiAgICAgIC8vIFRoZSBvcmRlcmluZyBpcyBpbXBvcnRhbnQgaGVyZVxuICAgICAgLy8gYWxsb3dzIG5ldyB2YWx1ZSB0byBiZSB1cGRhdGVkXG4gICAgICAvLyBhbmQgdGhlbiBtb3ZlcyB0aGUgaW5kZXggdG8gdGhlXG4gICAgICAvLyBwcm9wZXIgbG9jYXRpb25cbiAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRJbmRleChrZXlDb2RlKVxuICAgIH0sXG4gICAgb25TcGFjZURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHsgLyogbm9vcCAqLyB9LFxuICAgIG9uVGFiRG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgVlNlbGVjdC5vcHRpb25zLm1ldGhvZHMub25UYWJEb3duLmNhbGwodGhpcywgZSlcbiAgICAgIHRoaXMudXBkYXRlU2VsZigpXG4gICAgfSxcbiAgICBvblVwRG93biAoZTogRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgc2NyZWVuIGZyb20gc2Nyb2xsaW5nXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgLy8gRm9yIGF1dG9jb21wbGV0ZSAvIGNvbWJvYm94LCBjeWNsaW5nXG4gICAgICAvLyBpbnRlcmZlcnMgd2l0aCBuYXRpdmUgdXAvZG93biBiZWhhdmlvclxuICAgICAgLy8gaW5zdGVhZCBhY3RpdmF0ZSB0aGUgbWVudVxuICAgICAgdGhpcy5hY3RpdmF0ZU1lbnUoKVxuICAgIH0sXG4gICAgc2VsZWN0SXRlbSAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBWU2VsZWN0Lm9wdGlvbnMubWV0aG9kcy5zZWxlY3RJdGVtLmNhbGwodGhpcywgaXRlbSlcbiAgICAgIHRoaXMuc2V0U2VhcmNoKClcbiAgICB9LFxuICAgIHNldFNlbGVjdGVkSXRlbXMgKCkge1xuICAgICAgVlNlbGVjdC5vcHRpb25zLm1ldGhvZHMuc2V0U2VsZWN0ZWRJdGVtcy5jYWxsKHRoaXMpXG5cbiAgICAgIC8vICM0MjczIERvbid0IHJlcGxhY2UgaWYgc2VhcmNoaW5nXG4gICAgICAvLyAjNDQwMyBEb24ndCByZXBsYWNlIGlmIGZvY3VzZWRcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHRoaXMuc2V0U2VhcmNoKClcbiAgICB9LFxuICAgIHNldFNlYXJjaCAoKSB7XG4gICAgICAvLyBXYWl0IGZvciBuZXh0VGljayBzbyBzZWxlY3RlZEl0ZW1cbiAgICAgIC8vIGhhcyBoYWQgdGltZSB0byB1cGRhdGVcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLm11bHRpcGxlIHx8XG4gICAgICAgICAgIXRoaXMuaW50ZXJuYWxTZWFyY2ggfHxcbiAgICAgICAgICAhdGhpcy5pc01lbnVBY3RpdmVcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5pbnRlcm5hbFNlYXJjaCA9IChcbiAgICAgICAgICAgICF0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIHx8XG4gICAgICAgICAgICB0aGlzLm11bHRpcGxlIHx8XG4gICAgICAgICAgICB0aGlzLmhhc1Nsb3RcbiAgICAgICAgICApXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogdGhpcy5nZXRUZXh0KHRoaXMuc2VsZWN0ZWRJdGVtKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgdXBkYXRlU2VsZiAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoSXNEaXJ0eSAmJlxuICAgICAgICAhdGhpcy5pbnRlcm5hbFZhbHVlXG4gICAgICApIHJldHVyblxuXG4gICAgICBpZiAoIXRoaXMudmFsdWVDb21wYXJhdG9yKFxuICAgICAgICB0aGlzLmludGVybmFsU2VhcmNoLFxuICAgICAgICB0aGlzLmdldFZhbHVlKHRoaXMuaW50ZXJuYWxWYWx1ZSlcbiAgICAgICkpIHtcbiAgICAgICAgdGhpcy5zZXRTZWFyY2goKVxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzSXRlbSAoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlcy5pbmRleE9mKHRoaXMuZ2V0VmFsdWUoaXRlbSkpID4gLTFcbiAgICB9LFxuICAgIG9uQ29weSAoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSAtMSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW1zW3RoaXMuc2VsZWN0ZWRJbmRleF1cbiAgICAgIGNvbnN0IGN1cnJlbnRJdGVtVGV4dCA9IHRoaXMuZ2V0VGV4dChjdXJyZW50SXRlbSlcbiAgICAgIGV2ZW50LmNsaXBib2FyZERhdGEhLnNldERhdGEoJ3RleHQvcGxhaW4nLCBjdXJyZW50SXRlbVRleHQpXG4gICAgICBldmVudC5jbGlwYm9hcmREYXRhIS5zZXREYXRhKCd0ZXh0L3ZuZC52dWV0aWZ5LmF1dG9jb21wbGV0ZS5pdGVtK3BsYWluJywgY3VycmVudEl0ZW1UZXh0KVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTEsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOCxcbiAgICBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdGhlIG1heGltdW0gbGVuZ3RoIGFuZCBpbmRleCBvZiBhbiBhcnJheS4gKi9cbnZhciBNQVhfQVJSQVlfTEVOR1RIID0gNDI5NDk2NzI5NTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjMnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmMCcsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlVW5pY29kZSA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9NYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnZhbHVlc2AgYW5kIGBfLnZhbHVlc0luYCB3aGljaCBjcmVhdGVzIGFuXG4gKiBhcnJheSBvZiBgb2JqZWN0YCBwcm9wZXJ0eSB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkgbmFtZXNcbiAqIG9mIGBwcm9wc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBnZXQgdmFsdWVzIGZvci5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZVZhbHVlcyhvYmplY3QsIHByb3BzKSB7XG4gIHJldHVybiBhcnJheU1hcChwcm9wcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSBzeW1ib2wgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZShzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZS50ZXN0KHN0cmluZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGl0ZXJhdG9yYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGl0ZXJhdG9yIFRoZSBpdGVyYXRvciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yVG9BcnJheShpdGVyYXRvcikge1xuICB2YXIgZGF0YSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICghKGRhdGEgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICByZXN1bHQucHVzaChkYXRhLnZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgID8gdW5pY29kZVRvQXJyYXkoc3RyaW5nKVxuICAgIDogYXNjaWlUb0FycmF5KHN0cmluZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgaXRlcmF0b3JTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXRlcmF0b3IgOiB1bmRlZmluZWQsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUZsb29yID0gTWF0aC5mbG9vcixcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KSxcbiAgICBuYXRpdmVSYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xhbXBgIHdoaWNoIGRvZXNuJ3QgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBUaGUgbnVtYmVyIHRvIGNsYW1wLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsb3dlcl0gVGhlIGxvd2VyIGJvdW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBib3VuZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNsYW1wZWQgbnVtYmVyLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xhbXAobnVtYmVyLCBsb3dlciwgdXBwZXIpIHtcbiAgaWYgKG51bWJlciA9PT0gbnVtYmVyKSB7XG4gICAgaWYgKHVwcGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG51bWJlciA9IG51bWJlciA8PSB1cHBlciA/IG51bWJlciA6IHVwcGVyO1xuICAgIH1cbiAgICBpZiAobG93ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbnVtYmVyID0gbnVtYmVyID49IGxvd2VyID8gbnVtYmVyIDogbG93ZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXI7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJhbmRvbWAgd2l0aG91dCBzdXBwb3J0IGZvciByZXR1cm5pbmdcbiAqIGZsb2F0aW5nLXBvaW50IG51bWJlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsb3dlciBUaGUgbG93ZXIgYm91bmQuXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGJvdW5kLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgcmFuZG9tIG51bWJlci5cbiAqL1xuZnVuY3Rpb24gYmFzZVJhbmRvbShsb3dlciwgdXBwZXIpIHtcbiAgcmV0dXJuIGxvd2VyICsgbmF0aXZlRmxvb3IobmF0aXZlUmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlciArIDEpKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogR2V0cyBgbmAgcmFuZG9tIGVsZW1lbnRzIGF0IHVuaXF1ZSBrZXlzIGZyb20gYGNvbGxlY3Rpb25gIHVwIHRvIHRoZVxuICogc2l6ZSBvZiBgY29sbGVjdGlvbmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIHNhbXBsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj0xXSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNhbXBsZS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHJhbmRvbSBlbGVtZW50cy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zYW1wbGVTaXplKFsxLCAyLCAzXSwgMik7XG4gKiAvLyA9PiBbMywgMV1cbiAqXG4gKiBfLnNhbXBsZVNpemUoWzEsIDIsIDNdLCA0KTtcbiAqIC8vID0+IFsyLCAzLCAxXVxuICovXG5mdW5jdGlvbiBzYW1wbGVTaXplKGNvbGxlY3Rpb24sIG4sIGd1YXJkKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdG9BcnJheShjb2xsZWN0aW9uKSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gIGlmICgoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbChjb2xsZWN0aW9uLCBuLCBndWFyZCkgOiBuID09PSB1bmRlZmluZWQpKSB7XG4gICAgbiA9IDE7XG4gIH0gZWxzZSB7XG4gICAgbiA9IGJhc2VDbGFtcCh0b0ludGVnZXIobiksIDAsIGxlbmd0aCk7XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgdmFyIHJhbmQgPSBiYXNlUmFuZG9tKGluZGV4LCBsYXN0SW5kZXgpLFxuICAgICAgICB2YWx1ZSA9IHJlc3VsdFtyYW5kXTtcblxuICAgIHJlc3VsdFtyYW5kXSA9IHJlc3VsdFtpbmRleF07XG4gICAgcmVzdWx0W2luZGV4XSA9IHZhbHVlO1xuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBuO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygc2h1ZmZsZWQgdmFsdWVzLCB1c2luZyBhIHZlcnNpb24gb2YgdGhlXG4gKiBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlci1ZYXRlc19zaHVmZmxlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2h1ZmZsZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNodWZmbGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNodWZmbGUoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFs0LCAxLCAzLCAyXVxuICovXG5mdW5jdGlvbiBzaHVmZmxlKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIHNhbXBsZVNpemUoY29sbGVjdGlvbiwgTUFYX0FSUkFZX0xFTkdUSCk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvQXJyYXkoeyAnYSc6IDEsICdiJzogMiB9KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIF8udG9BcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ11cbiAqXG4gKiBfLnRvQXJyYXkoMSk7XG4gKiAvLyA9PiBbXVxuICpcbiAqIF8udG9BcnJheShudWxsKTtcbiAqIC8vID0+IFtdXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHN0cmluZ1RvQXJyYXkodmFsdWUpIDogY29weUFycmF5KHZhbHVlKTtcbiAgfVxuICBpZiAoaXRlcmF0b3JTeW1ib2wgJiYgdmFsdWVbaXRlcmF0b3JTeW1ib2xdKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yVG9BcnJheSh2YWx1ZVtpdGVyYXRvclN5bWJvbF0oKSk7XG4gIH1cbiAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICBmdW5jID0gdGFnID09IG1hcFRhZyA/IG1hcFRvQXJyYXkgOiAodGFnID09IHNldFRhZyA/IHNldFRvQXJyYXkgOiB2YWx1ZXMpO1xuXG4gIHJldHVybiBmdW5jKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eSB2YWx1ZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8udmFsdWVzKG5ldyBGb28pO1xuICogLy8gPT4gWzEsIDJdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy52YWx1ZXMoJ2hpJyk7XG4gKiAvLyA9PiBbJ2gnLCAnaSddXG4gKi9cbmZ1bmN0aW9uIHZhbHVlcyhvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA/IGJhc2VWYWx1ZXMob2JqZWN0LCBrZXlzKG9iamVjdCkpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2h1ZmZsZTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdsb2NhdGlvbi1zZWxlY3RvcicpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1sYXlvdXQnLFtfYygnbmF2LWRyYXdlcicse21vZGVsOnt2YWx1ZTooX3ZtLmRyYXdlciksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5kcmF3ZXI9JCR2fSxleHByZXNzaW9uOlwiZHJhd2VyXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnbG9hZGluZycse2F0dHJzOntcImFjdGl2ZVwiOl92bS5pc0xvYWRpbmcsXCJsb2FkZXJcIjpcImJhcnNcIixcImlzLWZ1bGwtcGFnZVwiOnRydWUsXCJjb2xvclwiOlwiIzAwYWZmMFwifSxvbjp7XCJ1cGRhdGU6YWN0aXZlXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNMb2FkaW5nPSRldmVudH19fSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkJyx7c3RhdGljQ2xhc3M6XCJjYXJkaHl0IG1iLTEwXCIsYXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJ3aWR0aFwiOlwiMTAwJVwifX0sW19jKCd2LWFwcC1iYXInLHthdHRyczp7XCJjb2xvclwiOlwicmdiYSgxMDAsMTE1LDIwMSlcIixcImFwcFwiOlwiXCIsXCJkYXJrXCI6XCJcIixcImZsYXRcIjpcIlwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJleHRlbnNpb25cIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ2NsaWVudC1vbmx5JyxbKCFfdm0uaXNIaWRlKT9fYygndi10YWJzJyx7YXR0cnM6e1wic2xpZGVyLWNvbG9yXCI6XCJ3aGl0ZVwiLFwiZGVuc2VcIjpcIlwiLFwiZ3Jvd1wiOlwiXCIsXCJzaG93LWFycm93c1wiOlwiXCIsXCJjZW50ZXItYWN0aXZlXCI6XCJcIixcImNlbnRlcmVkXCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0uY3VycmVudEl0ZW0pLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uY3VycmVudEl0ZW09JCR2fSxleHByZXNzaW9uOlwiY3VycmVudEl0ZW1cIn19LFtfYygndi10YWInLHtrZXk6XCJhbGxcIixhdHRyczp7XCJocmVmXCI6XCIjdGFiLWFsbFwifX0sW192bS5fdihcIiBBbGwgXCIpXSksX3ZtLl92KFwiIFwiKSxfdm0uX2woKF92bS5pbml0aWFsVGFiKSxmdW5jdGlvbihpdGVtKXtyZXR1cm4gX2MoJ3YtdGFiJyx7a2V5Oml0ZW0ubmFtZSxhdHRyczp7XCJocmVmXCI6JyN0YWItJyArIGl0ZW0ubmFtZX19LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGl0ZW0ubmFtZSkrXCIgXCIpXSl9KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwiYWxpZ24tc2VsZi1jZW50ZXIgbXItNFwiLGF0dHJzOntcInRleHRcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5tb3JlQlM9dHJ1ZX19fSxbX3ZtLl92KFwiIG1vcmVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpLF9jKCd2LWljb24nLHthdHRyczp7XCJyaWdodFwiOlwiXCJ9fSxbX3ZtLl92KFwibWRpLW1lbnUtZG93blwiKV0pXSwxKV0sMik6X3ZtLl9lKCldLDEpXX0scHJveHk6dHJ1ZX1dKX0sWyghX3ZtLmlzU2VhcmNoKT9fYygndi1hcHAtYmFyLW5hdi1pY29uJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uZHJhd2VyPSFfdm0uZHJhd2VyfX19KTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLCghX3ZtLmlzU2VhcmNoKT9fYygndi1hdmF0YXInLHtzdGF0aWNDbGFzczpcIm1yLTJcIixhdHRyczp7XCJyb3VuZGVkXCI6XCJcIixcInNpemVcIjpcIjM1XCJ9fSxbX2MoJ3YtaW1nJyx7YXR0cnM6e1wic3JjXCI6XCIvaWNvbi5wbmdcIn19KV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoIV92bS5pc1NlYXJjaCk/X2MoJ3YtdG9vbGJhci10aXRsZScsW192bS5fdihcIiBKaWZmeSBGYXZvcnMgXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoIV92bS5pc1NlYXJjaCk/X2MoJ3Ytc3BhY2VyJyk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygnY2xpZW50LW9ubHknLFsoX3ZtLmlzU2VhcmNoKT9fYygndi1hdXRvY29tcGxldGUnLHthdHRyczp7XCJpdGVtc1wiOl92bS5nZXRSZXN0b3MoJ2FsbCcpLFwiYXV0b2ZvY3VzXCI6XCJcIixcInByZXBlbmQtaW5uZXItaWNvblwiOlwibWRpLW1hZ25pZnlcIixcInNvbG9cIjpcIlwiLFwiaGlkZS1kZXRhaWxzXCI6XCJcIixcImhpZGUtc2VsZWN0ZWRcIjpcIlwiLFwiZGVuc2VcIjpcIlwiLFwibGlnaHRcIjpcIlwiLFwibGFiZWxcIjpcIlNlbGVjdFwiLFwiaXRlbS12YWx1ZVwiOlwiaWRcIixcIml0ZW0tdGV4dFwiOlwiYnVzaW5lc3NfbmFtZVwifSxvbjp7XCJibHVyXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNTZWFyY2ggPSBmYWxzZX19LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcIml0ZW1cIixmbjpmdW5jdGlvbihkYXRhKXtyZXR1cm4gW19jKCd2LWxpc3QnLHthdHRyczp7XCJmbGF0XCI6XCJcIixcImRlbnNlXCI6XCJcIixcInRvXCI6Jy9yZXN0by8nICsgZGF0YS5pdGVtLnVybH19LFtfYygndi1saXN0LWl0ZW0tZ3JvdXAnLFtfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJ0b1wiOicvcmVzdG8vJyArIGRhdGEuaXRlbS51cmx9fSxbX2MoJ3YtbGlzdC1pdGVtLWF2YXRhcicsW19jKCd2LWltZycse2F0dHJzOntcInNyY1wiOmRhdGEuaXRlbS5sb2dvfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhkYXRhLml0ZW0uYnVzaW5lc3NfbmFtZSkrXCIgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGRhdGEuaXRlbS5icmFuY2gpK1wiIFwiKV0pXSwxKV0sMSldLDEpXSwxKV19fV0sbnVsbCxmYWxzZSwzMTczNDI3MjcyKX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKCFfdm0uaXNTZWFyY2gpP19jKCd2LWJ0bicse2F0dHJzOntcImljb25cIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5pc1NlYXJjaCA9IHRydWV9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktbWFnbmlmeVwiKV0pXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uY2FydFNpemUgPiAwKT9fYygndi1idG4nLHthdHRyczp7XCJpY29uXCI6XCJcIixcInRvXCI6XCIvY2FydFwifX0sW19jKCd2LWJhZGdlJyx7YXR0cnM6e1wiY29sb3JcIjpcInJlZFwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJiYWRnZVwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5jYXJ0U2l6ZSkrXCIgXCIpXX0scHJveHk6dHJ1ZX1dLG51bGwsZmFsc2UsMTI4NTA0NTg3Nil9LFtfdm0uX3YoXCIgXCIpLF9jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwid2hpdGVcIixcImRlbnNlXCI6XCJcIn19LFtfdm0uX3YoXCIgbWRpLWNhcnQtb3V0bGluZSBcIildKV0sMSldLDEpOl92bS5fZSgpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1zaGVldCcse3N0YXRpY0NsYXNzOlwib3ZlcmZsb3cteS1hdXRvIGZpbGwtaGVpZ2h0XCIsYXR0cnM6e1wiaWRcIjpcInNjcm9sbGluZy10ZWNobmlxdWVzLTNcIn19LFtfYygndi1jb250YWluZXInLHthdHRyczp7XCJmbHVpZFwiOlwiXCJ9fSxbKF92bS5pc0hpZGUpP19jKCd2LWNvbnRlbnQnLFtfYygndi1sYXlvdXQnLHthdHRyczp7XCJ3cmFwXCI6XCJcIixcImp1c3RpZnktY2VudGVyXCI6XCJcIixcImFsaWduLWNlbnRlclwiOlwiXCIsXCJ0ZXh0LWxlZnRcIjpcIlwifX0sW19jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyXCIsYXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDRcIjpcIlwiLFwic200XCI6XCJcIixcImxnM1wiOlwiXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibWFwY29udGFpbmVyXCJ9LFtfYygnR01hcCcse3JlZjpcImdNYXBcIixhdHRyczp7XCJpZFwiOlwiZ21hcFwiLFwiY2VudGVyXCI6X3ZtLm15bG9jYXRpb24sXCJvcHRpb25zXCI6e1xuICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeSdcbiAgICAgICAgICB9LFwiem9vbVwiOjE1fSxvbjp7XCJjZW50ZXJfY2hhbmdlZFwiOl92bS5jZW50ZXJDaGFuZ2V9fSxbX2MoJ0dNYXBNYXJrZXInLHtyZWY6XCJnbWFwbWFya2VyXCIsYXR0cnM6e1wicG9zaXRpb25cIjpfdm0ubXlsb2NhdGlvbixcIm9wdGlvbnNcIjp7IGljb246IF92bS5zZWxlY3RlZG1hcmtlciB9fX0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHtzdGF0aWNDbGFzczpcIndoaXRlLS10ZXh0IG10LTVcIixhdHRyczp7XCJjb2xvclwiOlwiYmx1ZSBkYXJrZW4tMVwiLFwidGV4dFwiOlwiXCIsXCJibG9ja1wiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6X3ZtLnVwZGF0ZU1hcExvY2F0aW9ufX0sW192bS5fdihcIiBGaW5kIFJlc3RhdXJhbnQgXCIpXSldLDEpXSwxKV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoIV92bS5pc0hpZGUpP19jKCd2LWNvbnRlbnQnLFtfYygnY2xpZW50LW9ubHknLFtfYygndi10YWJzLWl0ZW1zJyx7bW9kZWw6e3ZhbHVlOihfdm0uY3VycmVudEl0ZW0pLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uY3VycmVudEl0ZW09JCR2fSxleHByZXNzaW9uOlwiY3VycmVudEl0ZW1cIn19LFtfYygndi10YWItaXRlbScse2tleTpcImFsbFwiLGF0dHJzOntcInZhbHVlXCI6XCJ0YWItYWxsXCJ9fSxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LF92bS5fbCgoX3ZtLmdldFJlc3RvcygnYWxsJykpLGZ1bmN0aW9uKGkpe3JldHVybiBfYygncmVzdG8tY2FyZCcse2tleTppLmlkLHN0YXRpY0NsYXNzOlwicmV2aWV3LWNhcmRcIixzdGF0aWNTdHlsZTp7XCJ3aGl0ZS1zcGFjZVwiOlwiaW5pdGlhbFwifSxhdHRyczp7XCJkYXRhXCI6aSxcInVybFwiOi9yZXN0by8raS51cmx9fSl9KSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfdm0uX2woKF92bS5pbml0aWFsVGFiLmNvbmNhdChfdm0ubW9yZVRhYikpLGZ1bmN0aW9uKGl0ZW0pe3JldHVybiBfYygndi10YWItaXRlbScse2tleTppdGVtLm5hbWUsYXR0cnM6e1widmFsdWVcIjondGFiLScgKyBpdGVtLm5hbWV9fSxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LF92bS5fbCgoaXRlbS52YWx1ZXMpLGZ1bmN0aW9uKGkpe3JldHVybiBfYygncmVzdG8tY2FyZCcse2tleTppLmlkLHN0YXRpY0NsYXNzOlwicmV2aWV3LWNhcmRcIixzdGF0aWNTdHlsZTp7XCJ3aGl0ZS1zcGFjZVwiOlwiaW5pdGlhbFwifSxhdHRyczp7XCJkYXRhXCI6aSxcInVybFwiOi9yZXN0by8raS51cmx9fSl9KSwxKV0sMSl9KV0sMildLDEpXSwxKTpfdm0uX2UoKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXJvdycse2F0dHJzOntcImp1c3RpZnlcIjpcImNlbnRlclwifX0sWyhfdm0ubW9yZVRhYi5sZW5ndGgpP19jKCd2LWJvdHRvbS1zaGVldCcse2F0dHJzOntcImluc2V0XCI6XCJcIixcInNjcm9sbGFibGVcIjpcIlwiLFwibWF4LXdpZHRoXCI6XCI0MDBcIn0sbW9kZWw6e3ZhbHVlOihfdm0ubW9yZUJTKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLm1vcmVCUz0kJHZ9LGV4cHJlc3Npb246XCJtb3JlQlNcIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10aXRsZScsW192bS5fdihcIk1vcmUgT3B0aW9uc1wiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0Jyx7c3RhdGljU3R5bGU6e1wiaGVpZ2h0XCI6XCIzMDBweFwifX0sW19jKCd2LWxpc3QnLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxfdm0uX2woKF92bS5tb3JlVGFiKSxmdW5jdGlvbihpdGVtKXtyZXR1cm4gX2MoJ3YtbGlzdC1pdGVtJyx7a2V5Oml0ZW0ubmFtZSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5hZGRJdGVtKGl0ZW0pfX19LFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGl0ZW0ubmFtZSkpXSksX3ZtLl92KFwiIFwiKSxfYygndi1kaXZpZGVyJyldLDEpfSksMSldLDEpXSwxKV0sMSk6X3ZtLl9lKCldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDx2LWxheW91dD5cbiAgICAgICAgPG5hdi1kcmF3ZXIgdi1tb2RlbD1cImRyYXdlclwiPjwvbmF2LWRyYXdlcj5cbiAgICAgICAgPGxvYWRpbmcgOmFjdGl2ZS5zeW5jPVwiaXNMb2FkaW5nXCIgbG9hZGVyPVwiYmFyc1wiIDppcy1mdWxsLXBhZ2U9XCJ0cnVlXCIgY29sb3I9XCIjMDBhZmYwXCIgLz5cbiAgICAgICAgPHYtY2FyZCBmbGF0IHdpZHRoPVwiMTAwJVwiIGNsYXNzPVwiY2FyZGh5dCBtYi0xMFwiPlxuICAgICAgICAgICAgPHYtYXBwLWJhciBjb2xvcj1cInJnYmEoMTAwLDExNSwyMDEpXCIgYXBwIGRhcmsgZmxhdD5cbiAgICAgICAgICAgICAgICA8di1hcHAtYmFyLW5hdi1pY29uIHYtaWY9XCIhaXNTZWFyY2hcIiBAY2xpY2suc3RvcD1cImRyYXdlcj0hZHJhd2VyXCI+PC92LWFwcC1iYXItbmF2LWljb24+XG4gICAgICAgICAgICAgICAgPHYtYXZhdGFyIHYtaWY9XCIhaXNTZWFyY2hcIiBjbGFzcz1cIm1yLTJcIiByb3VuZGVkIHNpemU9XCIzNVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1pbWcgc3JjPVwiL2ljb24ucG5nXCIgLz4gPC92LWF2YXRhcj5cbiAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIHYtaWY9XCIhaXNTZWFyY2hcIj4gSmlmZnkgRmF2b3JzIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LXNwYWNlciB2LWlmPVwiIWlzU2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICA8Y2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZSB2LWlmPVwiaXNTZWFyY2hcIiA6aXRlbXM9XCJnZXRSZXN0b3MoJ2FsbCcpXCIgYXV0b2ZvY3VzIHByZXBlbmQtaW5uZXItaWNvbj1cIm1kaS1tYWduaWZ5XCIgc29sbyBoaWRlLWRldGFpbHMgaGlkZS1zZWxlY3RlZCBkZW5zZSBsaWdodCBsYWJlbD1cIlNlbGVjdFwiIGl0ZW0tdmFsdWU9XCJpZFwiIGl0ZW0tdGV4dD1cImJ1c2luZXNzX25hbWVcIiBAYmx1cj1cImlzU2VhcmNoID0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaXRlbT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IGZsYXQgZGVuc2UgOnRvPVwiJy9yZXN0by8nICsgZGF0YS5pdGVtLnVybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gOnRvPVwiJy9yZXN0by8nICsgZGF0YS5pdGVtLnVybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWltZyA6c3JjPVwiZGF0YS5pdGVtLmxvZ29cIiAvPiA8L3YtbGlzdC1pdGVtLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPiB7eyBkYXRhLml0ZW0uYnVzaW5lc3NfbmFtZSB9fSA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+IHt7IGRhdGEuaXRlbS5icmFuY2ggfX0gPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCIhaXNTZWFyY2hcIiBpY29uIEBjbGljay5zdG9wPVwiaXNTZWFyY2ggPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1tYWduaWZ5PC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiY2FydFNpemUgPiAwXCIgaWNvbiB0bz1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1iYWRnZSBjb2xvcj1cInJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYmFkZ2Ugb3ZlcmxhcD4ge3sgY2FydFNpemUgfX0gPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwid2hpdGVcIiBkZW5zZT4gbWRpLWNhcnQtb3V0bGluZSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1iYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L2NsaWVudC1vbmx5PlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZXh0ZW5zaW9uPlxuICAgICAgICAgICAgICAgICAgICA8Y2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10YWJzIHYtaWY9XCIhaXNIaWRlXCIgdi1tb2RlbD1cImN1cnJlbnRJdGVtXCIgc2xpZGVyLWNvbG9yPVwid2hpdGVcIiBkZW5zZSBncm93IHNob3ctYXJyb3dzIGNlbnRlci1hY3RpdmUgY2VudGVyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiIGtleT1cImFsbFwiIGhyZWY9XCIjdGFiLWFsbFwiPiBBbGwgPC92LXRhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10YWIgdi1mb3I9XCJpdGVtIGluIGluaXRpYWxUYWJcIiA6a2V5PVwiaXRlbS5uYW1lXCIgOmhyZWY9XCInI3RhYi0nICsgaXRlbS5uYW1lXCI+IHt7IGl0ZW0ubmFtZSB9fSA8L3YtdGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB0ZXh0IGNsYXNzPVwiYWxpZ24tc2VsZi1jZW50ZXIgbXItNFwiIEBjbGljay5zdG9wPVwibW9yZUJTPXRydWVcIj4gbW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIHJpZ2h0Pm1kaS1tZW51LWRvd248L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYnM+XG4gICAgICAgICAgICAgICAgICAgIDwvY2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdi1hcHAtYmFyPlxuICAgICAgICAgICAgPHYtc2hlZXQgaWQ9XCJzY3JvbGxpbmctdGVjaG5pcXVlcy0zXCIgY2xhc3M9XCJvdmVyZmxvdy15LWF1dG8gZmlsbC1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRlbnQgdi1pZj1cImlzSGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQ0IHNtNCBsZzMgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R01hcCBpZD1cImdtYXBcIiByZWY9XCJnTWFwXCIgOmNlbnRlcj1cIm15bG9jYXRpb25cIiA6b3B0aW9ucz1cIntcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeSdcbiAgICAgICAgICAgICAgfVwiIDp6b29tPVwiMTVcIiBAY2VudGVyX2NoYW5nZWQ9XCJjZW50ZXJDaGFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R01hcE1hcmtlciByZWY9XCJnbWFwbWFya2VyXCIgOnBvc2l0aW9uPVwibXlsb2NhdGlvblwiIDpvcHRpb25zPVwieyBpY29uOiBzZWxlY3RlZG1hcmtlciB9XCIgLz4gPC9HTWFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIHRleHQgY2xhc3M9XCJ3aGl0ZS0tdGV4dCBtdC01XCIgYmxvY2sgb3V0bGluZWQgQGNsaWNrPVwidXBkYXRlTWFwTG9jYXRpb25cIj4gRmluZCBSZXN0YXVyYW50IDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29udGVudCB2LWlmPVwiIWlzSGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNsaWVudC1vbmx5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYnMtaXRlbXMgdi1tb2RlbD1cImN1cnJlbnRJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYi1pdGVtIGtleT1cImFsbFwiIHZhbHVlPVwidGFiLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVzdG8tY2FyZCB2LWZvcj1cImkgaW4gZ2V0UmVzdG9zKCdhbGwnKVwiIDprZXk9XCJpLmlkXCIgY2xhc3M9XCJyZXZpZXctY2FyZFwiIHN0eWxlPVwid2hpdGUtc3BhY2U6aW5pdGlhbDtcIiA6ZGF0YT1cImlcIiA6dXJsPVwiL3Jlc3RvLytpLnVybFwiIC8+IDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiLWl0ZW0gdi1mb3I9XCJpdGVtIGluIGluaXRpYWxUYWIuY29uY2F0KG1vcmVUYWIpXCIgOmtleT1cIml0ZW0ubmFtZVwiIDp2YWx1ZT1cIid0YWItJyArIGl0ZW0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVzdG8tY2FyZCB2LWZvcj1cImkgaW4gaXRlbS52YWx1ZXNcIiA6a2V5PVwiaS5pZFwiIGNsYXNzPVwicmV2aWV3LWNhcmRcIiBzdHlsZT1cIndoaXRlLXNwYWNlOmluaXRpYWw7XCIgOmRhdGE9XCJpXCIgOnVybD1cIi9yZXN0by8raS51cmxcIiAvPiA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYnMtaXRlbXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NsaWVudC1vbmx5PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29udGVudD5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPC92LXNoZWV0PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPHYtcm93IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwibW9yZUJTXCIgdi1pZj1cIm1vcmVUYWIubGVuZ3RoXCIgaW5zZXQgc2Nyb2xsYWJsZSBtYXgtd2lkdGg9XCI0MDBcIj5cbiAgICAgICAgICAgICAgICA8di1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPk1vcmUgT3B0aW9uczwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgc3R5bGU9XCJoZWlnaHQ6IDMwMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gdi1mb3I9XCJpdGVtIGluIG1vcmVUYWJcIiA6a2V5PVwiaXRlbS5uYW1lXCIgQGNsaWNrPVwiYWRkSXRlbShpdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+IHt7IGl0ZW0ubmFtZSB9fTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPC92LXJvdz5cbiAgICA8L3YtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgY2xvbmVkZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnXG5pbXBvcnQgTG9hZGluZyBmcm9tICd2dWUtbG9hZGluZy1vdmVybGF5J1xuaW1wb3J0IFJlc3RvQ2FyZCBmcm9tICd+L2NvbXBvbmVudHMvUmVzdG9DYXJkLnZ1ZSdcbmltcG9ydCAndnVlLWxvYWRpbmctb3ZlcmxheS9kaXN0L3Z1ZS1sb2FkaW5nLmNzcydcbmltcG9ydCBzaHVmZmxlIGZyb20gJ2xvZGFzaC5zaHVmZmxlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgUmVzdG9DYXJkLFxuICAgICAgICBMb2FkaW5nXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZHJhd2VyOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkbWFya2VyOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUhVU1VSQlZIZ0I1VlU3U3dOQkVKN0xtWkJnTUMrVWRLS3gwTVpDRzJzcndjYkNCMmdscEZEUTN0by9JZWd2U0FJV1ByQkpJeVNsaXBVS0txWUxhSEozaVdJZWx6dS9EVGs4ajcxSDdNUVBsdG1abmZsbVozYjNqdWl2UTNCekNJZkRJNEZBWUJ2VFJWM1hSN3RCZ2xDQ09JUDlvRnd1di80NlFTd1dXd2ZaSWFhRE5pN3ZHT2xxdFpxaGZoUEU0L0VWaUF5NVY2bGpFOHVWU3VYWWM0SmtNam5jYXJVZU1SMGliNURiN2ZaRXZWNnZXQmQ4UEcrUTczTElGWXlqM2xBc2ExRy8zNy9ENCtKV2dQYmNRa3liZDlqcGRHWVZSWGxtU2lRU1NZbWllTVdtaGdNdXdJMGtTVFBrcFFKZ3pLSm5EZkp1S1lyeUJKSDdzVk5CU1BHSTdCS29GbDNuK0dndU1ZNEpIaXo2R3RveWJpaXNSY3ptRXRQRkFNK0lmbDZpNURtVEtZcWVYK05zc2oxOWxVejlOMko0WE54RFRpUVNrd2k0b3o2QURVM2hMZHhiN2R3VzlSeUw1QjBGSHJsdEFnWlVzRWNlNGVScm13QjN1Z0NSSjNmazRWdnNPd0VESHRjV3hLZUR5NGVtYVdtSGRSS2RGcHZOcGhRS2hkaEZtT2V0NDJEM3NmdFRKdzdYL3dIZ3cvVThoMXl3a0ovZ1lKZUkvd2kvZzhrZG1xcXFHNUFsazYyRXIrZW1HN25YQkZTcjFhcm9OU05rbndPVnpabk5TNnhJSHRGb05GNkN3ZUFicGhleUxPZm8zK0FMZnJTdXpKMUY4RXNBQUFBQVNVVk9SSzVDWUlJPScsXG4gICAgICAgICAgICBjb29yZGlhZzogZmFsc2UsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBpc0hpZGU6IGZhbHNlLFxuICAgICAgICAgICAgaXNTZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgaW5pdGlhbFRhYjogW10sXG4gICAgICAgICAgICBtb3JlVGFiOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtOiBudWxsLFxuICAgICAgICAgICAgcGFydG5lcnM6IFtdLFxuICAgICAgICAgICAgbW9yZUJTOiBmYWxzZSxcbiAgICAgICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICBnZW9jZW50ZXI6IHtcbiAgICAgICAgICAgICAgICBsYXQ6IDkuNzk0MTE4NSxcbiAgICAgICAgICAgICAgICBsbmc6IDExOC43MzIyNTk5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbXlsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIGxhdDogOS43OTQxMTg1LFxuICAgICAgICAgICAgICAgIGxuZzogMTE4LjczMjI1OTlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2FydFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0SXRlbUNvdW50J11cbiAgICAgICAgfSxcbiAgICAgICAgcmVzdG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snbWFwL2dldFN0b3JlcyddXG4gICAgICAgIH0sXG4gICAgICAgIHRhZ3MoKSB7XG4gICAgICAgICAgICBjb25zdCBmYXJlID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYWRtaW4vZ2V0RmFyZSddXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gW11cbiAgICAgICAgICAgIGlmIChmYXJlICE9PSBudWxsICYmIGZhcmUuaGFzT3duUHJvcGVydHkoJ3RhZ3MnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBjbG9uZWRlZXAoZmFyZS50YWdzKS5zb3J0KChhLCBiKSA9PiAoYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDApKVxuICAgICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb29kcyA9IHRoaXMuZ2V0UmVzdG9zKHRhZylcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvb2RzLmxlbmd0aCA+IDApIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IGZvb2RzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVudVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdGFncygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhZ3MubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFRhYiA9IGNsb25lZGVlcCh0aGlzLnRhZ3MpLnNwbGljZSgwLCAzKVxuICAgICAgICAgICAgICAgIHRoaXMubW9yZVRhYiA9IGNsb25lZGVlcCh0aGlzLnRhZ3MpLnNwbGljZSg0LCB0aGlzLnRhZ3MubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudEl0ZW0oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsaW5nLXRlY2huaXF1ZXMtMycpLnNjcm9sbCh7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21hcC9jbGVhckRlbGl2ZXJ5RmVlcycpXG4gICAgICAgIGlmICgnZ2VvbG9jYXRpb24nIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZ2V0TG9jYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuYWNjdXJhY3kgPCA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRTdG9yZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0hpZGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSGlkZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5pc0hpZGUgPSB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNIaWRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLmluaXRpYWxUYWIuc3BsaWNlKDAsIDEpXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxUYWIucHVzaCguLi50aGlzLm1vcmVUYWIuc3BsaWNlKHRoaXMubW9yZVRhYi5pbmRleE9mKGl0ZW0pLCAxKSlcbiAgICAgICAgICAgIHRoaXMubW9yZVRhYi5wdXNoKC4uLnJlbW92ZWQpXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3JlQlMgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSAndGFiLScgKyBpdGVtLm5hbWVcbiAgICAgICAgICAgICAgICB0aGlzLm1vcmVUYWIgPSB0aGlzLm1vcmVUYWIuc29ydCgoYSwgYikgPT4gKGEubmFtZSA8IGIubmFtZSA/IC0xIDogYS5uYW1lID4gYi5uYW1lID8gMSA6IDApKVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZpbmRTdG9yZXMoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnbWFwL3NldExvY2F0aW9uJywge1xuICAgICAgICAgICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0LFxuICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21hcC9nZXROZWFyYnlTdG9yZScsIHtcbiAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZ1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaXNIaWRlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaWFnID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNlbnRlckNoYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy4kcmVmcy5nTWFwLm1hcC5nZXRDZW50ZXIoKVxuICAgICAgICAgICAgdGhpcy4kcmVmcy5nbWFwbWFya2VyLm1hcmtlci5zZXRQb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQoKSxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVNYXBMb2NhdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLiRyZWZzLmdNYXAubWFwLmdldENlbnRlcigpXG4gICAgICAgICAgICB0aGlzLmZpbmRTdG9yZXMoe1xuICAgICAgICAgICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0KCksXG4gICAgICAgICAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmVzdG9zKGl0ZW0pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN0byA9IGNsb25lZGVlcCh0aGlzLnJlc3RvLmZpbHRlcigoYSkgPT4gYS50YWdzLmluY2x1ZGVzKGl0ZW0pKSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVkID0gc2h1ZmZsZShyZXN0by5maWx0ZXIoKGEpID0+IGEucmF0ZXMuY3IgPiAwKSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZlYXR1cmVkID0gc2h1ZmZsZShyZXN0by5maWx0ZXIoKGEpID0+IGEucmF0ZXMuY3IgPT0gMCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmZWF0dXJlZC5jb25jYXQobm90RmVhdHVyZWQuc29ydCgoYSwgYikgPT4gYS5kcmFmdCAtIGIuZHJhZnQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3RvID0gY2xvbmVkZWVwKHRoaXMucmVzdG8pXG4gICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlZCA9IHNodWZmbGUocmVzdG8uZmlsdGVyKChhKSA9PiBhLnJhdGVzLmNyID4gMCkpXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGZWF0dXJlZCA9IHNodWZmbGUocmVzdG8uZmlsdGVyKChhKSA9PiBhLnJhdGVzLmNyID09IDApKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmVhdHVyZWQuY29uY2F0KG5vdEZlYXR1cmVkLnNvcnQoKGEsIGIpID0+IGEuZHJhZnQgLSBiLmRyYWZ0KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrSWZFeGlzdChpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5yZXN0by5maWx0ZXIoKGEpID0+IGEudGFncy5pbmNsdWRlcyhpdGVtKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGMsIGl0ZW0pXG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2NhdGlvblNlbGVjdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjUxMDg0YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2NhdGlvblNlbGVjdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9jYXRpb25TZWxlY3Rvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjM3MmQ2ZjVjXCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcEJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQXBwQmFyTmF2SWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQXV0b2NvbXBsZXRlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IFZBdmF0YXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBdmF0YXInO1xuaW1wb3J0IHsgVkJhZGdlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQmFkZ2UnO1xuaW1wb3J0IHsgVkJvdHRvbVNoZWV0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQm90dG9tU2hlZXQnO1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNvbnRlbnQnO1xuaW1wb3J0IHsgVkRpdmlkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEaXZpZGVyJztcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkljb24nO1xuaW1wb3J0IHsgVkltZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkltZyc7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWTGlzdCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1BdmF0YXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUNvbnRlbnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUdyb3VwIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1TdWJ0aXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZSb3cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTaGVldCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlNoZWV0JztcbmltcG9ydCB7IFZTcGFjZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZUYWIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUYWJzJztcbmltcG9ydCB7IFZUYWJJdGVtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGFicyc7XG5pbXBvcnQgeyBWVGFicyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW1wb3J0IHsgVlRhYnNJdGVtcyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW1wb3J0IHsgVlRvb2xiYXJUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRvb2xiYXInO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcEJhcixWQXBwQmFyTmF2SWNvbixWQXV0b2NvbXBsZXRlLFZBdmF0YXIsVkJhZGdlLFZCb3R0b21TaGVldCxWQnRuLFZDYXJkLFZDYXJkVGV4dCxWQ2FyZFRpdGxlLFZDb250YWluZXIsVkNvbnRlbnQsVkRpdmlkZXIsVkZsZXgsVkljb24sVkltZyxWTGF5b3V0LFZMaXN0LFZMaXN0SXRlbSxWTGlzdEl0ZW1BdmF0YXIsVkxpc3RJdGVtQ29udGVudCxWTGlzdEl0ZW1Hcm91cCxWTGlzdEl0ZW1TdWJ0aXRsZSxWTGlzdEl0ZW1UaXRsZSxWUm93LFZTaGVldCxWU3BhY2VyLFZUYWIsVlRhYkl0ZW0sVlRhYnMsVlRhYnNJdGVtcyxWVG9vbGJhclRpdGxlfSlcbiIsIjx0ZW1wbGF0ZT5cbiA8bG9jYXRpb24tc2VsZWN0b3IvPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgTG9jYXRpb25TZWxlY3RvciBmcm9tICd+L2NvbXBvbmVudHMvTG9jYXRpb25TZWxlY3Rvci52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBMb2NhdGlvblNlbGVjdG9yXG4gIH0sXG4gIGxheW91dDogJ21lbnUnLFxuICAgbW91bnRlZCgpe1xuICAgIFx0dGhpcy4kZmlyZUFuYWx5dGljcy5sb2dFdmVudCgncGFnZV92aWV3JylcbiAgICBcdFxuICAgIH1cbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Zvb2QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThiYWNjZjg4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Zvb2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mb29kLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTFiNjhiMmNcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgVkJ0biBmcm9tICcuL1ZCdG4nXG5cbmV4cG9ydCB7IFZCdG4gfVxuZXhwb3J0IGRlZmF1bHQgVkJ0blxuIl0sInNvdXJjZVJvb3QiOiIifQ==