exports.ids = [12];
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

/***/ 174:
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

/***/ 179:
/***/ (function(module, exports) {

// Exports
module.exports = {};


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

/***/ 198:
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

/***/ 205:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 207:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 208:
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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/FireUi.vue?vue&type=template&id=4f7bb550&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-stepper',{model:{value:(_vm.e1),callback:function ($$v) {_vm.e1=$$v},expression:"e1"}},[_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"blue"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('v-stepper-header',[_c('v-stepper-step',{attrs:{"complete":_vm.e1 > 1,"step":"1","editable":false}},[_vm._v(" Full Name ")]),_vm._v(" "),_c('v-stepper-step',{attrs:{"complete":_vm.e1 > 2,"step":"2","editable":false}},[_vm._v(" Contact Number ")])],1),_vm._v(" "),_c('v-stepper-items',[_c('v-stepper-content',{attrs:{"step":"1"}},[_c('v-card',{staticClass:"mb-12",attrs:{"flat":""}},[_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-text-field',{attrs:{"right":"","dense":"","solo":"","label":"Fullname","outlined":"","placeholder":"Fullname"},model:{value:(_vm.fullname),callback:function ($$v) {_vm.fullname=$$v},expression:"fullname"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary","disabled":_vm.fullname.length < 5},on:{"click":function($event){;(_vm.e1 = 2), _vm.loadAuth()}}},[_vm._v(" Continue ")])],1)],1)],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"2"}},[_c('div',{attrs:{"id":"firebaseui-auth-container"}})])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FireUi.vue?vue&type=template&id=4f7bb550&

// EXTERNAL MODULE: ./node_modules/firebaseui/dist/firebaseui.css
var firebaseui = __webpack_require__(198);

// EXTERNAL MODULE: external "vue-loading-overlay"
var external_vue_loading_overlay_ = __webpack_require__(63);
var external_vue_loading_overlay_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_overlay_);

// EXTERNAL MODULE: ./node_modules/vue-loading-overlay/dist/vue-loading.css
var vue_loading = __webpack_require__(81);

// EXTERNAL MODULE: external "geofirestore"
var external_geofirestore_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FireUi.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var FireUivue_type_script_lang_js_ = ({
  components: {
    Loading: external_vue_loading_overlay_default.a
  },

  data() {
    return {
      fullname: '',
      e1: 1,
      isLoading: false
    };
  },

  methods: {
    async updateUser(authUser) {
      this.$store.commit('auth/updateUserDisplayName', this.fullname);
      this.isLoading = true;
      const token = this.$store.getters['auth/getFCMToken'];
      const firestore = this.$fireStoreObj();
      const ref = new external_geofirestore_["GeoCollectionReference"](firestore.collection('users'));
      let d = await firestore.collection('users').doc(authUser.uid).get();

      if (!d.exists) {
        await ref.doc(authUser.uid).set({
          coordinates: new this.$fireStoreObj.GeoPoint(0, 0),
          tokens: [token],
          promoCodes: [],
          displayName: authUser.displayName,
          phoneNumber: authUser.phoneNumber
        });
      } else {
        await firestore.collection('users').doc(authUser.uid).update({
          'd.displayName': authUser.displayName,
          'd.phoneNumber': authUser.phoneNumber,
          'd.tokens': this.$fireStoreObj.FieldValue.arrayUnion(token)
        });
      }

      this.isLoading = false;
      return this.isLoading;
    },

    loadAuth() {
      if (false) {}
    }

  }
});
// CONCATENATED MODULE: ./components/FireUi.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FireUivue_type_script_lang_js_ = (FireUivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VStepper/VStepper.sass
var VStepper = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/registrable/index.js
var registrable = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VStepper/VStepper.js
// Styles
 // Mixins



 // Utilities



const baseMixins = Object(mixins["a" /* default */])(Object(registrable["b" /* provide */])('stepper'), proxyable["a" /* default */], themeable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VStepper_VStepper = (baseMixins.extend({
  name: 'v-stepper',

  provide() {
    return {
      stepClick: this.stepClick,
      isVertical: this.vertical
    };
  },

  props: {
    altLabels: Boolean,
    nonLinear: Boolean,
    vertical: Boolean
  },

  data() {
    const data = {
      isBooted: false,
      steps: [],
      content: [],
      isReverse: false
    };
    data.internalLazyValue = this.value != null ? this.value : (data[0] || {}).step || 1;
    return data;
  },

  computed: {
    classes() {
      return {
        'v-stepper--is-booted': this.isBooted,
        'v-stepper--vertical': this.vertical,
        'v-stepper--alt-labels': this.altLabels,
        'v-stepper--non-linear': this.nonLinear,
        ...this.themeClasses
      };
    }

  },
  watch: {
    internalValue(val, oldVal) {
      this.isReverse = Number(val) < Number(oldVal);
      oldVal && (this.isBooted = true);
      this.updateView();
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$listeners.input) {
      Object(console["a" /* breaking */])('@input', '@change', this);
    }
  },

  mounted() {
    this.updateView();
  },

  methods: {
    register(item) {
      if (item.$options.name === 'v-stepper-step') {
        this.steps.push(item);
      } else if (item.$options.name === 'v-stepper-content') {
        item.isVertical = this.vertical;
        this.content.push(item);
      }
    },

    unregister(item) {
      if (item.$options.name === 'v-stepper-step') {
        this.steps = this.steps.filter(i => i !== item);
      } else if (item.$options.name === 'v-stepper-content') {
        item.isVertical = this.vertical;
        this.content = this.content.filter(i => i !== item);
      }
    },

    stepClick(step) {
      this.$nextTick(() => this.internalValue = step);
    },

    updateView() {
      for (let index = this.steps.length; --index >= 0;) {
        this.steps[index].toggle(this.internalValue);
      }

      for (let index = this.content.length; --index >= 0;) {
        this.content[index].toggle(this.internalValue, this.isReverse);
      }
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-stepper',
      class: this.classes
    }, this.$slots.default);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VStepper/VStepperContent.js
// Components
 // Mixins

 // Helpers

 // Utilities


const VStepperContent_baseMixins = Object(mixins["a" /* default */])(Object(registrable["a" /* inject */])('stepper', 'v-stepper-content', 'v-stepper'));
/* @vue/component */

/* harmony default export */ var VStepperContent = (VStepperContent_baseMixins.extend().extend({
  name: 'v-stepper-content',
  inject: {
    isVerticalProvided: {
      from: 'isVertical'
    }
  },
  props: {
    step: {
      type: [Number, String],
      required: true
    }
  },

  data() {
    return {
      height: 0,
      // Must be null to allow
      // previous comparison
      isActive: null,
      isReverse: false,
      isVertical: this.isVerticalProvided
    };
  },

  computed: {
    computedTransition() {
      // Fix for #8978
      const reverse = this.$vuetify.rtl ? !this.isReverse : this.isReverse;
      return reverse ? transitions["f" /* VTabReverseTransition */] : transitions["g" /* VTabTransition */];
    },

    styles() {
      if (!this.isVertical) return {};
      return {
        height: Object(helpers["f" /* convertToUnit */])(this.height)
      };
    }

  },
  watch: {
    isActive(current, previous) {
      // If active and the previous state
      // was null, is just booting up
      if (current && previous == null) {
        this.height = 'auto';
        return;
      }

      if (!this.isVertical) return;
      if (this.isActive) this.enter();else this.leave();
    }

  },

  mounted() {
    this.$refs.wrapper.addEventListener('transitionend', this.onTransition, false);
    this.stepper && this.stepper.register(this);
  },

  beforeDestroy() {
    this.$refs.wrapper.removeEventListener('transitionend', this.onTransition, false);
    this.stepper && this.stepper.unregister(this);
  },

  methods: {
    onTransition(e) {
      if (!this.isActive || e.propertyName !== 'height') return;
      this.height = 'auto';
    },

    enter() {
      let scrollHeight = 0; // Render bug with height

      requestAnimationFrame(() => {
        scrollHeight = this.$refs.wrapper.scrollHeight;
      });
      this.height = 0; // Give the collapsing element time to collapse

      setTimeout(() => this.isActive && (this.height = scrollHeight || 'auto'), 450);
    },

    leave() {
      this.height = this.$refs.wrapper.clientHeight;
      setTimeout(() => this.height = 0, 10);
    },

    toggle(step, reverse) {
      this.isActive = step.toString() === this.step.toString();
      this.isReverse = reverse;
    }

  },

  render(h) {
    const contentData = {
      staticClass: 'v-stepper__content'
    };
    const wrapperData = {
      staticClass: 'v-stepper__wrapper',
      style: this.styles,
      ref: 'wrapper'
    };

    if (!this.isVertical) {
      contentData.directives = [{
        name: 'show',
        value: this.isActive
      }];
    }

    const wrapper = h('div', wrapperData, [this.$slots.default]);
    const content = h('div', contentData, [wrapper]);
    return h(this.computedTransition, {
      on: this.$listeners
    }, [content]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VStepper/VStepperStep.js
// Components
 // Mixins


 // Directives

 // Utilities


const VStepperStep_baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], Object(registrable["a" /* inject */])('stepper', 'v-stepper-step', 'v-stepper'));
/* @vue/component */

/* harmony default export */ var VStepperStep = (VStepperStep_baseMixins.extend().extend({
  name: 'v-stepper-step',
  directives: {
    ripple: ripple["a" /* default */]
  },
  inject: ['stepClick'],
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    complete: Boolean,
    completeIcon: {
      type: String,
      default: '$complete'
    },
    editable: Boolean,
    editIcon: {
      type: String,
      default: '$edit'
    },
    errorIcon: {
      type: String,
      default: '$error'
    },
    rules: {
      type: Array,
      default: () => []
    },
    step: [Number, String]
  },

  data() {
    return {
      isActive: false,
      isInactive: true
    };
  },

  computed: {
    classes() {
      return {
        'v-stepper__step--active': this.isActive,
        'v-stepper__step--editable': this.editable,
        'v-stepper__step--inactive': this.isInactive,
        'v-stepper__step--error error--text': this.hasError,
        'v-stepper__step--complete': this.complete
      };
    },

    hasError() {
      return this.rules.some(validate => validate() !== true);
    }

  },

  mounted() {
    this.stepper && this.stepper.register(this);
  },

  beforeDestroy() {
    this.stepper && this.stepper.unregister(this);
  },

  methods: {
    click(e) {
      e.stopPropagation();
      this.$emit('click', e);

      if (this.editable) {
        this.stepClick(this.step);
      }
    },

    genIcon(icon) {
      return this.$createElement(VIcon["a" /* default */], icon);
    },

    genLabel() {
      return this.$createElement('div', {
        staticClass: 'v-stepper__label'
      }, this.$slots.default);
    },

    genStep() {
      const color = !this.hasError && (this.complete || this.isActive) ? this.color : false;
      return this.$createElement('span', this.setBackgroundColor(color, {
        staticClass: 'v-stepper__step__step'
      }), this.genStepContent());
    },

    genStepContent() {
      const children = [];

      if (this.hasError) {
        children.push(this.genIcon(this.errorIcon));
      } else if (this.complete) {
        if (this.editable) {
          children.push(this.genIcon(this.editIcon));
        } else {
          children.push(this.genIcon(this.completeIcon));
        }
      } else {
        children.push(String(this.step));
      }

      return children;
    },

    toggle(step) {
      this.isActive = step.toString() === this.step.toString();
      this.isInactive = Number(step) < Number(this.step);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-stepper__step',
      class: this.classes,
      directives: [{
        name: 'ripple',
        value: this.editable
      }],
      on: {
        click: this.click
      }
    }, [this.genStep(), this.genLabel()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VStepper/index.js




const VStepperHeader = Object(helpers["h" /* createSimpleFunctional */])('v-stepper__header');
const VStepperItems = Object(helpers["h" /* createSimpleFunctional */])('v-stepper__items');

/* harmony default export */ var components_VStepper = ({
  $_vuetify_subcomponents: {
    VStepper: VStepper_VStepper,
    VStepperContent: VStepperContent,
    VStepperStep: VStepperStep,
    VStepperHeader,
    VStepperItems
  }
});
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(155);

// CONCATENATED MODULE: ./components/FireUi.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FireUivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1220d112"
  
)

/* harmony default export */ var FireUi = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */














installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VFlex: VFlex["a" /* default */],VLayout: VLayout["a" /* default */],VSpacer: VSpacer["a" /* default */],VStepper: VStepper_VStepper,VStepperContent: VStepperContent,VStepperHeader: VStepperHeader,VStepperItems: VStepperItems,VStepperStep: VStepperStep,VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDataTable_VSimpleTable_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _src_components_VDataTable_VSimpleTable_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDataTable_VSimpleTable_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'v-simple-table',
  props: {
    dense: Boolean,
    fixedHeader: Boolean,
    height: [Number, String]
  },
  computed: {
    classes() {
      return {
        'v-data-table--dense': this.dense,
        'v-data-table--fixed-height': !!this.height && !this.fixedHeader,
        'v-data-table--fixed-header': this.fixedHeader,
        ...this.themeClasses
      };
    }

  },
  methods: {
    genWrapper() {
      return this.$slots.wrapper || this.$createElement('div', {
        staticClass: 'v-data-table__wrapper',
        style: {
          height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* convertToUnit */ "f"])(this.height)
        }
      }, [this.$createElement('table', this.$slots.default)]);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-data-table',
      class: this.classes
    }, [this.$slots.top, this.genWrapper(), this.$slots.bottom]);
  }

}));

/***/ }),

/***/ 238:
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

/***/ 239:
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

/***/ 240:
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

/***/ 241:
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

/***/ 245:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_364b913e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(245);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_364b913e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_364b913e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_364b913e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_364b913e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/_id/index.vue?vue&type=template&id=364b913e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"e3"}},[_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"blue"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('v-app-bar',{attrs:{"color":"#00aff0","dark":"","shrink-on-scroll":"","prominent":"","src":_vm.business.backdrop,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3","scroll-threshold":"300","fixed":"","app":""},scopedSlots:_vm._u([{key:"img",fn:function(ref){
var props = ref.props;
return [_c('v-img',_vm._b({attrs:{"gradient":"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},'v-img',props,false))]}}])},[_vm._v(" "),_c('v-btn',{attrs:{"icon":"","to":"/bills_payment"}},[_c('v-icon',[_vm._v(" mdi-arrow-left-bold")])],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v(_vm._s(_vm.business.business_name)+"\n            "),_c('small',[_vm._v(_vm._s(_vm.business.branch))])]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-menu',{attrs:{"bottom":"","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({attrs:{"dark":"","icon":""}},'v-btn',attrs,false),on),[_c('v-icon',[_vm._v(" mdi-share-variant")])],1)]}}])},[_vm._v(" "),_c('v-list',{attrs:{"nav":"","flat":"","single-line":"","dense":""}},_vm._l((_vm.networks),function(network){return _c('ShareNetwork',{key:network.network,style:({ backgroundColor: network.color }),attrs:{"network":network.network,"url":_vm.sharing.url,"title":_vm.sharing.title,"description":_vm.sharing.description,"hashtags":_vm.sharing.hashtags}},[_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"small":"","color":network.color}},[_vm._v(" "+_vm._s(network.icon)+" ")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v(_vm._s(network.name))])],1)],1)}),1)],1)],1),_vm._v(" "),_c('v-sheet',{staticClass:"overflow-y-auto",attrs:{"id":"scrolling-techniques-3","max-height":"85vh"}},[_c('v-content',[(_vm.aptconfimed)?_c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},[_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-icon',{staticClass:"mb-2",attrs:{"color":"success","size":"200"}},[_vm._v(" mdi-checkbox-marked-circle ")]),_vm._v(" "),_c('blockquote',{staticClass:"blockquote mb-5"},[_c('span',{staticStyle:{"font-size":"50px"}},[_vm._v("😋")]),_vm._v(" "),_c('h4',[_vm._v("List Submitted. Thank You for Shopping")])]),_vm._v(" "),_c('footer',[_c('v-btn',{attrs:{"outlined":"","text":"","block":"","to":"/transactions","color":"red"}},[_vm._v("Track Shopping")])],1)],1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.aptconfimed)?_c('v-container',{attrs:{"fluid":""}},[_c('h3',[_vm._v("Shop at "+_vm._s(_vm.business.business_name)+" "),_c('small',[_vm._v(_vm._s(_vm.business.branch))]),_vm._v(" with Jiffy Rider Shopper.")]),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-expansion-panels',{attrs:{"inset":""},model:{value:(_vm.faq),callback:function ($$v) {_vm.faq=$$v},expression:"faq"}},[_c('v-expansion-panel',{attrs:{"value":"0"}},[_c('v-expansion-panel-header',[_vm._v("How it works?")]),_vm._v(" "),_c('v-expansion-panel-content',[_c('p',[_vm._v("Shop at "+_vm._s(_vm.business.business_name)+" bill without leaving the comfort of your home or office. Let our\n                                        "),_c('strong',[_vm._v("Jiffy Rider Shopper")]),_vm._v(" handle the buying for you.\n                                        "),_c('strong',[_vm._v("No more waiting in line.")]),_vm._v(" "),_c('strong',[_vm._v("You can see the prices in realtime while your rider shop for you.")])])])],1),_vm._v(" "),_c('v-expansion-panel',[_c('v-expansion-panel-header',[_vm._v("Shopping Procedure")]),_vm._v(" "),_c('v-expansion-panel-content',[_c('ol',[_c('li',{attrs:{"value":"1"}},[_vm._v("Create a List of Items you want to buy at "+_vm._s(_vm.business.business_name)+" using the create list below.")]),_vm._v(" "),_c('li',[_vm._v("Submit your list and wait for the rider to accept the job.")]),_vm._v(" "),_c('li',[_vm._v("Your rider will proceed to\n                                            "),_c('strong',[_vm._v(_vm._s(_vm.business.business_name))]),_vm._v(" to buy item on the list.")]),_vm._v(" "),_c('li',[_vm._v("You will see the price real time as your rider shop for you.")]),_vm._v(" "),_c('li',[_vm._v("You can add or remove item from the list as long as the rider not yet paid the item.")]),_vm._v(" "),_c('li',[_vm._v("The rider will proceed with the payment and head your delivery location.")]),_vm._v(" "),_c('li',[_vm._v("Pay your rider with the total item on the list plus the computed service and delivery fee.")])])])],1),_vm._v(" "),_c('v-expansion-panel',[_c('v-expansion-panel-header',[_vm._v("Service Fee")]),_vm._v(" "),_c('v-expansion-panel-content',[_c('p',[_vm._v("The cost of service is\n                                        "),_c('strong',[_vm._v(_vm._s(_vm.business.rates.sc)+" %")]),_vm._v(" plus\n                                        "),_c('strong',[_vm._v("per km rate")]),_vm._v(" for travelled distance from "+_vm._s(_vm.business.business_name)+"-"+_vm._s(_vm.business.branch)+" to your delivery location. ")])])],1)],1)],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"persistent":_vm.calculated},model:{value:(_vm.bsAppointment),callback:function ($$v) {_vm.bsAppointment=$$v},expression:"bsAppointment"}},[(!_vm.calculated)?_c('v-card',[_c('v-card-title',[_vm._v("Delivery Location")]),_vm._v(" "),_c('v-card-text',[_c('div',{staticClass:"mapcontainer"},[_c('GMap',{ref:"gMap",attrs:{"id":"gmap","center":_vm.mylocation,"options":_vm.options,"zoom":15},on:{"center_changed":_vm.centerChange}},[_c('GMapMarker',{ref:"gmapmarker",attrs:{"position":_vm.mylocation,"options":{ icon: _vm.selectedmarker }}})],1)],1)]),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","text":"","color":"blue","block":""},on:{"click":function($event){$event.stopPropagation();return _vm.reqQoute()}}},[_vm._v("Next")])],1)],1):_vm._e(),_vm._v(" "),(_vm.calculated)?_c('v-card',[_c('v-card-title',[_c('v-btn',{attrs:{"icon":"","small":""},on:{"click":function($event){$event.stopPropagation();_vm.calculated = false}}},[_c('v-icon',[_vm._v("mdi-arrow-left")])],1),_vm._v("Submit List ")],1),_vm._v(" "),_c('v-card-text',[_c('v-list',{attrs:{"nav":"","outlined":"","tile":"","width":"100%","dense":""}},[_c('v-list-item',{attrs:{"id":"needAuth","dense":""}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-cellphone ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.contact.name)+" "+_vm._s(_vm.contact.number)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Contact Information ")])],1),_vm._v(" "),_c('v-list-item-action',{on:{"click":function($event){$event.stopPropagation();return _vm.attemptLogin()}}},[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-chevron-right ")])],1)],1),_vm._v(" "),_c('v-list-item',{attrs:{"id":"needDeli"}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"blue"}},[_vm._v(" mdi-clock ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.delivery_date.label)+", "+_vm._s(_vm.delivery_date.day_name.substring(0, 3))+" "+_vm._s(_vm.delivery_date.name)+" "+_vm._s(_vm.delivery_date.day)+" "+_vm._s(_vm.delivery_date.time)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Time")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-icon',{attrs:{"color":"red"},on:{"click":function($event){$event.stopPropagation();_vm.generateDates(), (_vm.timediag = true)}}},[_vm._v(" mdi-chevron-right ")])],1)],1),_vm._v(" "),_c('v-list-item',{attrs:{"id":"needEst","dense":""}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-cash-multiple ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.estimate))+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Your shopping estimate")])],1),_vm._v(" "),_c('v-list-item-action',{on:{"click":function($event){$event.stopPropagation();_vm.needEst = true}}},[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-chevron-right ")])],1)],1),_vm._v(" "),_c('v-list-item',{attrs:{"id":"dropoff","dense":""}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"blue"}},[_vm._v(" mdi-map-marker ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.fees.address))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Delivery Location ")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-icon',{attrs:{"color":"red"},on:{"click":function($event){$event.stopPropagation();_vm.currentLocation = _vm.fees , _vm.addrText='Delivery', _vm.addressDiag = true}}},[_vm._v(" mdi-chevron-right ")])],1)],1)],1),_vm._v(" "),_c('v-simple-table',{attrs:{"dense":""},scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('tbody',[_c('tr',[_c('td',[_vm._v("Service Fee")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.business.rates.sc)+" % plus Total")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("Delivery Fee ("+_vm._s(_vm.fees.distance.computed)+" km)")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.fees.fees.rider + _vm.fees.fees.platform)))])]),_vm._v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"red--text"},[_c('strong',[_vm._v("Total")])])]),_vm._v(" "),_c('td',[_c('span',{staticClass:"red--text"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.fees.fees.rider + _vm.fees.fees.platform)))]),_vm._v(" plus\n                                        "),_c('strong',[_vm._v(_vm._s(_vm.business.rates.sc)+" %")]),_vm._v(" of Total Item Values ")])])])])]},proxy:true}],null,false,633680908)})],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","color":"blue","width":"45%"},on:{"click":function($event){$event.stopPropagation();_vm.bsQoute = true}}},[_vm._v("View List")]),_vm._v(" "),_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","color":"blue","width":"45%"},on:{"click":function($event){$event.stopPropagation();return _vm.preConfirmAppointment()}}},[_vm._v("Submit List")])],1)],1):_vm._e()],1),_vm._v(" "),_c('v-bottom-sheet',{model:{value:(_vm.addNewItem),callback:function ($$v) {_vm.addNewItem=$$v},expression:"addNewItem"}},[_c('v-card',[_c('v-card-title',[_vm._v(_vm._s(_vm.mode=='add' ? 'Add Item to List' : 'Edit Item'))]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},[_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md12":"","sm12":"","lg12":""}},[_c('v-textarea',{attrs:{"rows":"3","label":"Item description","outlined":"","placeholder":"eg. Brand, Color, etc."},model:{value:(_vm.shopitem.desc),callback:function ($$v) {_vm.$set(_vm.shopitem, "desc", $$v)},expression:"shopitem.desc"}})],1),_vm._v(" "),_c('v-flex',{staticClass:"text-center",attrs:{"xs4":"","md4":"","sm4":"","lg4":""}},[_c('v-text-field',{attrs:{"type":"number","label":"Measure","dense":""},model:{value:(_vm.shopitem.measure),callback:function ($$v) {_vm.$set(_vm.shopitem, "measure", $$v)},expression:"shopitem.measure"}})],1),_vm._v(" "),_c('v-flex',{staticClass:"text-center",attrs:{"xs4":"","md4":"","sm4":"","lg4":""}},[_c('v-select',{attrs:{"dense":"","flat":"","items":_vm.units,"label":"Unit","item-text":"name","item-value":"value"},model:{value:(_vm.shopitem.unit),callback:function ($$v) {_vm.$set(_vm.shopitem, "unit", $$v)},expression:"shopitem.unit"}})],1),_vm._v(" "),_c('v-flex',{staticClass:"text-center",attrs:{"xs4":"","md4":"","sm4":"","lg4":""}},[_c('span',{staticClass:"caption grey--text"},[_vm._v(" Qty ")]),_vm._v(" "),_c('v-icon',{staticClass:"white--text",attrs:{"color":"red"},on:{"click":function($event){_vm.shopitem.qty = _vm.shopitem.qty < 1 ? 1 : _vm.shopitem.qty - 1}}},[_vm._v(" mdi-minus ")]),_vm._v(" "+_vm._s(_vm.shopitem.qty)+"\n                        "),_c('v-icon',{staticClass:"white--text",attrs:{"color":"green"},on:{"click":function($event){_vm.shopitem.qty = _vm.shopitem.qty + 1}}},[_vm._v(" mdi-plus ")])],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"shopresponsive",attrs:{"outlined":"","text":"","color":"blue","block":""},on:{"click":function($event){$event.stopPropagation();return _vm.addItem()}}},[_vm._v(_vm._s(_vm.mode=='add' ? 'Add Item to List' : 'Update Item'))])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"fullscreen":"","persistent":""},model:{value:(_vm.bsQoute),callback:function ($$v) {_vm.bsQoute=$$v},expression:"bsQoute"}},[_c('v-card',{staticStyle:{"height":"100vh"}},[_c('v-card-title',[_vm._v("Create Shopping List")]),_vm._v(" "),_c('v-card-text',[_c('v-list',{attrs:{"two-line":""}},_vm._l((_vm.list),function(item,index){return _c('v-list-item-group',{key:index},[_c('v-list-item',{attrs:{"dense":""}},[_c('v-list-item-content',{on:{"click":function($event){$event.stopPropagation();_vm.item_copy = Object.assign({},item), _vm.shopitem = Object.assign({},item), _vm.mode= 'edit', _vm.editIndex = index, _vm.addNewItem = true}}},[_c('v-list-item-title',{domProps:{"textContent":_vm._s(item.desc)}}),_vm._v(" "),_c('v-list-item-subtitle',{staticClass:"red--text"},[_vm._v(" "+_vm._s(item.measure)+" "+_vm._s(item.unit)+" x "+_vm._s(item.qty)+" = "+_vm._s(item.measure * item.qty)+" "+_vm._s(item.unit)+" ("+_vm._s(item.measure)+" "+_vm._s(item.unit)+"/unit ) ")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-icon',{attrs:{"small":"","color":"red"},on:{"click":function($event){$event.stopPropagation();return _vm.$store.commit('cart/removeFromList', index)}}},[_vm._v(" mdi-delete ")])],1)],1),_vm._v(" "),_c('v-divider')],1)}),1),_vm._v(" "),_c('v-fab-transition',[_c('v-btn',{staticStyle:{"margin-bottom":"100px"},attrs:{"color":"pink","dark":"","small":"","absolute":"","bottom":"","right":"","fab":""},on:{"click":function($event){$event.stopPropagation();_vm.mode='add' ,_vm.addNewItem = true}}},[_c('v-icon',[_vm._v("mdi-plus")])],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"shopresponsive",attrs:{"outlined":"","text":"","color":"blue","block":""},on:{"click":function($event){$event.stopPropagation();_vm.bsQoute=false}}},[_vm._v("I'm Finish")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"scrollable":""},model:{value:(_vm.addressDiag),callback:function ($$v) {_vm.addressDiag=$$v},expression:"addressDiag"}},[_c('v-card',{attrs:{"tile":""}},[_c('v-card-title',{attrs:{"primary-title":""}},[_vm._v(" "+_vm._s(_vm.addrText)+" Address ")]),_vm._v(" "),_c('v-card-text',[_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-textarea',{attrs:{"a":"","hint":"Pls type 'NA' if not applicable","label":"Address","outlined":"","placeholder":"Address"},model:{value:(_vm.currentLocation.address),callback:function ($$v) {_vm.$set(_vm.currentLocation, "address", $$v)},expression:"currentLocation.address"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-text-field',{attrs:{"a":"","hint":"Pls type 'NA' if not applicable","label":"Floor/Unit/Room No. or Landmark","persistent-hint":"","outlined":""},model:{value:(_vm.currentLocation.landmark),callback:function ($$v) {_vm.$set(_vm.currentLocation, "landmark", $$v)},expression:"currentLocation.landmark"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"tile":"","outlined":"","block":"","color":"red"},on:{"click":function($event){_vm.addressDiag=false}}},[_vm._v(" Apply Changes ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"persistent":""},model:{value:(_vm.needEst),callback:function ($$v) {_vm.needEst=$$v},expression:"needEst"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Your shopping Estimate")])]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-text-field',{attrs:{"right":"","type":"number","dense":"","solo":"","label":"Your shopping estimate","outlined":"","placeholder":"Estimate"},model:{value:(_vm.estimate),callback:function ($$v) {_vm.estimate=$$v},expression:"estimate"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","disabled":_vm.estimate <0,"color":"red"},on:{"click":function($event){_vm.needEst = false}}},[_vm._v(" Apply Changes ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{model:{value:(_vm.authDiag),callback:function ($$v) {_vm.authDiag=$$v},expression:"authDiag"}},[_c('v-card',{attrs:{"flat":""}},[_c('v-card-title',[_vm._v("Contact Info")]),_vm._v(" "),_c('v-card-text',[_c('fire-ui')],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"persistent":""},model:{value:(_vm.timediag),callback:function ($$v) {_vm.timediag=$$v},expression:"timediag"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Appointment Time")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md6":"","lg6":"","sm6":""}},[_c('v-select',{attrs:{"flat":"","items":_vm.dates,"return-object":"","label":"Delivery Date"},scopedSlots:_vm._u([{key:"selection",fn:function(data){return [_vm._v(" "+_vm._s(data.item.label)+", "+_vm._s(data.item.day_name)+" "+_vm._s(data.item.name)+" "+_vm._s(data.item.day)+" ")]}},{key:"item",fn:function(data){return [_vm._v(" "+_vm._s(data.item.label)+", "+_vm._s(data.item.day_name)+" "+_vm._s(data.item.name)+" "+_vm._s(data.item.day)+" ")]}}]),model:{value:(_vm.delivery_date),callback:function ($$v) {_vm.delivery_date=$$v},expression:"delivery_date"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md6":"","lg6":"","sm6":""}},[_c('v-select',{attrs:{"flat":"","items":_vm.delivery_date.delivery_time,"label":"Delivery Time"},model:{value:(_vm.delivery_date.time),callback:function ($$v) {_vm.$set(_vm.delivery_date, "time", $$v)},expression:"delivery_date.time"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"blue darken-1","text":""},on:{"click":function($event){_vm.timediag = false}}},[_vm._v(" Save ")])],1)],1)],1),_vm._v(" "),(!_vm.aptconfimed)?_c('v-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoaded),expression:"isLoaded"}],staticClass:"shopresponsive",attrs:{"width":"100%"}},[_c('v-card-text',[_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","color":"blue","width":"45%"},on:{"click":function($event){$event.stopPropagation();_vm.bsQoute = true}}},[_vm._v("Create List")]),_vm._v(" "),_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","color":"blue","width":"45%"},on:{"click":function($event){$event.stopPropagation();_vm.bsAppointment = true}}},[_vm._v("Submit List")])],1)],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/_id/index.vue?vue&type=template&id=364b913e&scoped=true&

// EXTERNAL MODULE: external "vue-loading-overlay"
var external_vue_loading_overlay_ = __webpack_require__(63);
var external_vue_loading_overlay_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_overlay_);

// EXTERNAL MODULE: ./node_modules/vue-loading-overlay/dist/vue-loading.css
var vue_loading = __webpack_require__(81);

// EXTERNAL MODULE: external "geofirestore"
var external_geofirestore_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/FireUi.vue + 8 modules
var FireUi = __webpack_require__(209);

// EXTERNAL MODULE: external "google-maps-api-loader"
var external_google_maps_api_loader_ = __webpack_require__(70);
var external_google_maps_api_loader_default = /*#__PURE__*/__webpack_require__.n(external_google_maps_api_loader_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    FireUi: FireUi["a" /* default */],
    Loading: external_vue_loading_overlay_default.a
  },
  layout: 'area',

  asyncData({
    app,
    params,
    error
  }) {
    try {
      const db = app.$fireStore;
      const geocollection = new external_geofirestore_["GeoCollectionReference"](db.collection('shops'));
      return geocollection.where('url', '==', params.id).get().then(data => {
        const d = data.docs[0].data();
        let delivery = d.delivery_time;

        if (delivery === undefined) {
          delivery = {
            open: '9:00:00',
            close: '19:00:00'
          };
        }

        const biz = {
          isLoaded: true,
          isLoading: false,
          business: {
            id: data.docs[0].id,
            business_name: d.business_name,
            branch: d.branch,
            backdrop: d.backdrop,
            logo: d.logo,
            rates: d.rates,
            location: d.coordinates,
            delivery
          },
          sharing: {
            url: 'https://m.jiffyfavors.com/shop/' + params.id,
            title: `Pay your ${d.business_name} - ${d.branch} with Jiffy Favors`,
            description: `${d.business_name} - ${d.branch} Bill Payment & Collection`,
            hashtags: 'jiffyfavors,bills,paybills,onlineorder'
          },
          networks: [{
            network: 'facebook',
            name: 'Facebook',
            icon: 'mdi-facebook',
            color: '#1877f2'
          }, {
            network: 'email',
            name: 'Email',
            icon: 'mdi-gmail',
            color: 'red'
          }, {
            network: 'skype',
            name: 'Skype',
            icon: 'mdi-skype-business',
            color: '#00aff0'
          }, {
            network: 'sms',
            name: 'SMS',
            icon: 'mdi-android-messages',
            color: '#333333'
          }, {
            network: 'telegram',
            name: 'Telegram',
            icon: 'mdi-telegram',
            color: '#0088cc'
          }, {
            network: 'twitter',
            name: 'Twitter',
            icon: 'mdi-twitter',
            color: '#1da1f2'
          }, {
            network: 'whatsapp',
            name: 'Whatsapp',
            icon: 'mdi-whatsapp',
            color: '#25d366'
          }]
        };
        return biz;
      }).catch(e => {
        console.log(e);
        return error({
          statusCode: 404,
          message: 'Blog not found'
        });
      });
    } catch (e) {
      console.log(e);
      return error({
        statusCode: 404,
        message: 'Blog not found'
      });
    }
  },

  watch: {
    bsAppointment() {
      this.bsQoute = false;

      if (this.list.length === 0 && this.bsAppointment) {
        alert('Create a List First');
        this.bsQoute = true;
        this.bsAppointment = false;
      } else {
        if (this.isAuth) {
          this.contact = {
            number: this.user.phoneNumber,
            id: this.user.id,
            name: this.user.displayName
          };
          this.authDiag = false;
        }
      }
    },

    isAuth() {
      if (this.isAuth) {
        this.contact = {
          number: this.user.phoneNumber,
          id: this.user.id,
          name: this.user.displayName
        };
        this.authDiag = false;
      }
    }

  },

  mounted() {
    this.$fireAnalytics.logEvent('page_view');
    const GMapSettings = {
      apiKey: this.$GMaps.apiKey,
      language: this.language
    };
    this.mylocation = this.sl();
    const google = external_google_maps_api_loader_default()(GMapSettings);
    this.$GMaps.google = google;
    this.$getLocation({
      enableHighAccuracy: true,
      timeout: 10000
    }).then(coordinates => {
      if (coordinates.accuracy < 100) {
        this.mylocation = {
          lat: coordinates.lat,
          lng: coordinates.lng
        };
      }
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  },

  computed: {
    list() {
      return this.$store.getters['cart/getList'];
    },

    checkoutPayload() {
      return {
        token: this.$store.getters['auth/getFCMToken'],
        timestamp: this.$generateTimestamp(this.delivery_date.date, this.delivery_date.time),
        store: {
          id: this.business.id,
          name: this.business.business_name,
          branch: this.business.branch,
          logo: this.business.logo
        },
        deliver: {
          address: this.fees.address,
          landmark: this.fees.landmark,
          distance: this.fees.distance
        },
        coordinates: new this.$fireStoreObj.GeoPoint(this.mylocation.lat, this.mylocation.lng),
        fees: {
          delivery: this.fees.fees,
          sc: this.business.rates.sc
        },
        date: {
          date: this.delivery_date.date,
          time: this.delivery_date.time
        },
        estimate: this.estimate,
        items: this.list,
        contact: this.contact
      };
    },

    user() {
      return this.$store.getters['auth/getUser'];
    },

    isAuth() {
      return this.$store.getters['auth/isAuth'];
    },

    df() {
      return this.$store.getters['admin/getFare'];
    }

  },

  data() {
    return {
      mode: 'add',
      item_copy: {},
      timediag: false,
      delivery_date: {
        delivery_time: [],
        label: 'Today',
        day_name: '',
        time: ''
      },
      dates: [],
      isLoaded: false,
      addNewItem: false,
      estimate: 0,
      needEst: false,
      shopitem: {
        desc: '',
        qty: 1,
        price: 0,
        measure: 1,
        unit: 'pc',
        status: 'unpaid'
      },
      units: [{
        name: 'Pieces(pc)',
        value: 'pc'
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
      }],
      faq: 0,
      aptconfimed: false,
      authDiag: false,
      contact: {
        name: '',
        number: ''
      },
      currentLocation: {},
      addrText: '',
      bsAppointment: false,
      timediag: false,
      delivery_date: {
        delivery_time: [],
        label: 'Today',
        day_name: ''
      },
      dates: [],
      addressDiag: false,
      calculated: false,
      mapSheet: false,
      currentMode: 'pickup',
      mode: 'same',
      options: {
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: true,
        zoomControl: true,
        gestureHandling: 'greedy'
      },
      steps: 0,
      mylocation: {
        lat: 9.7941185,
        lng: 118.7322599
      },
      selectedmarker: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
      isLoading: true,
      bsQoute: false,
      business: null,
      e1: 1,
      isValid: false,
      fees: {
        fees: {
          rider: 0,
          platform: 0
        },
        distance: {
          computed: 0,
          actual: 0
        },
        address: '',
        landmark: ''
      }
    };
  },

  head() {
    const business = this.business;
    const url = 'https://m.jiffyfavors.com' + this.$route.fullPath;
    return {
      title: `${business.business_name} - Online Shopping`,
      meta: [{
        hid: `description`,
        name: 'description',
        content: `Shop at ${business.business_name} ${business.branch} with Jiffy Favors Rider Shopper`
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'product'
      }, {
        hid: 'og:title',
        name: 'og:title',
        content: `Bills Payment|${business.business_name} ${business.branch}`
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: `Shopping for  ${business.business_name} ${business.branch} with Jiffy Favors Rider Shopper`
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: `${business.logo}`
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: url
      }],
      link: [{
        rel: 'icon',
        type: 'image/png',
        href: `${business.logo}`
      }]
    };
  },

  methods: {
    addItem() {
      if (this.mode === 'add') {
        this.$store.commit('cart/addList', this.shopitem);
      } else {
        this.$store.commit('cart/updateItemList', {
          data: this.shopitem,
          index: this.editIndex
        });
      }

      this.shopitem = {
        desc: '',
        qty: 1,
        price: 0,
        measure: 1,
        unit: 'pc',
        status: 'unpaid'
      };
      this.editIndex = -1;
      this.mode = 'add';
      this.addNewItem = false;
    },

    generateBookingId() {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = 'SR-';

      for (let i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

      return result;
    },

    attemptLogin() {
      if (!this.isAuth) {
        this.authDiag = true;
      }
    },

    generateDates() {
      const today = this.addDays(new Date(), 0);
      const tomorrow = this.addDays(new Date(), 1);
      const nextday = this.addDays(new Date(), 2);
      let now = new Date(this.$getNow()).getTime();
      let close = new Date(this.$getNow().substring(0, 10) + ' ' + this.business.delivery.close);

      if (now < close) {
        this.dates = [today, tomorrow, nextday];
      } else {
        this.dates = [tomorrow, nextday];
      }
    },

    addDays(date, days) {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const label = ['Today', 'Tomorrow'];
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
        label: label[days],
        delivery_time
      };
    },

    preConfirmAppointment() {
      this.isValid = true;
      if (!this.isAuth) this.shake('needAuth');
      if (this.estimate < 1) this.shake('needEst');
      if (this.fees.address.length === 0 || this.fees.landmark.length === 0) this.shake('dropoff');

      if (this.isValid) {
        this.bsAppointment = false;
        this.isLoading = true;
        const firestore = this.$fireStoreObj();
        this.checkoutPayload.status = 'placed';
        this.checkoutPayload.rider = 'unassigned';
        this.checkoutPayload.area = this.df.id;
        const geocollection = new external_geofirestore_["GeoCollectionReference"](firestore.collection('shop_request'));
        geocollection.doc(this.generateBookingId()).set(this.checkoutPayload).then(d => {
          this.aptconfimed = true;
          this.isLoading = false;
          this.$store.commit('cart/clearList');
        }).catch(e => {
          this.isLoading = false;
        });
      }
    },

    sl() {
      let sl = {
        lat: 0,
        lng: 0
      };

      if (this.business.location.hasOwnProperty('Ac')) {
        sl = {
          lat: this.business.location.Rc,
          lng: this.business.location.Ac
        };
      }

      if (this.business.location.hasOwnProperty('_lat')) {
        sl = {
          lat: this.business.location._lat,
          lng: this.business.location._long
        };
      }

      if (this.business.location.hasOwnProperty('latitude')) {
        sl = {
          lat: this.business.location.latitude,
          lng: this.business.location.longitude
        };
      }

      return sl;
    },

    reqQoute() {
      const coordinates = this.$refs.gMap.map.getCenter();
      const dl = {
        lat: coordinates.lat(),
        lng: coordinates.lng()
      };
      this.calculated = false;
      this.bsQoute = false;
      this.isLoading = true;
      this.bsAppointment = false;
      let sl = this.sl();
      this.$store.dispatch('admin/getArea', sl).then(() => {
        this.reqApi(dl, sl);
      });
    },

    reqApi(dl, location) {
      this.calculated = false;
      this.$axios.$get('/distance/', {
        progress: true,
        params: {
          origins: location.lat + ',' + location.lng,
          destinations: dl.lat + ',' + dl.lng,
          key: 'AIzaSyDX-atoLm6nQpMgQ_GYHIo1kiscAe5txXc'
        },
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then(d => {
        try {
          const platform = parseFloat(this.df.fees.distance_platform);
          const rider = parseFloat(this.df.fees.distance_rider);
          const distance = d.rows[0].elements[0].distance.value;
          const md = parseFloat(this.df.fees.min_distance);
          const min_df = parseFloat(this.df.fees.min_df);
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
          const distance_actual = parseFloat((d.rows[0].elements[0].distance.value / 1000).toFixed(2));
          const rider_df = Math.floor(rider * distance_actual);
          const platform_df = Math.floor(df - rider_df);
          this.fees.fees.rider = rider_df;
          this.fees.fees.platform = platform_df;
          this.fees.distance = {
            computed: ds,
            actual: distance_actual
          };
          this.fees.address = d.destination_addresses[0];
          this.calculated = true;
          this.isLoading = false;
          this.bsAppointment = true;
        } catch (e) {
          console.log(e);
        }
      }).catch(e => {
        this.calculated = false;
        this.isLoading = false;
        this.bsAppointment = false;
        return new Error({
          statusCode: 500,
          message: 'Blog not found'
        });
      });
    },

    centerChange() {
      const coordinates = this.$refs.gMap.map.getCenter();
      this.$refs.gmapmarker.marker.setPosition({
        lat: coordinates.lat(),
        lng: coordinates.lng()
      });
      this.mylocation = {
        lat: coordinates.lat(),
        lng: coordinates.lng()
      };
    },

    scrollTo() {
      document.getElementById('scrolling-techniques-3').scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },

    shake(id) {
      this.isValid = false;
      document.getElementById(id).classList.add('shake');
      setTimeout(() => {
        document.getElementById(id).classList.remove('shake');
      }, 1500);
    }

  }
});
// CONCATENATED MODULE: ./pages/shop/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var shop_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
var VAppBar = __webpack_require__(187);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(55);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var components_VList = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 5 modules
var VSelect = __webpack_require__(196);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js
var VSimpleTable = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(154);

// CONCATENATED MODULE: ./pages/shop/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(269)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shop_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "364b913e",
  "53eb4a70"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






































installComponents_default()(component, {VApp: VApp["a" /* default */],VAppBar: VAppBar["a" /* default */],VBottomSheet: VBottomSheet["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VContainer: VContainer["a" /* default */],VContent: VContent["a" /* default */],VDivider: VDivider["a" /* default */],VExpansionPanel: VExpansionPanel["a" /* default */],VExpansionPanelContent: VExpansionPanelContent["a" /* default */],VExpansionPanelHeader: VExpansionPanelHeader["a" /* default */],VExpansionPanels: VExpansionPanels["a" /* default */],VFabTransition: transitions["c" /* VFabTransition */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemIcon: VListItemIcon["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSheet: VSheet["a" /* default */],VSimpleTable: VSimpleTable["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkRpdmlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdWJoZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WUHJvZ3Jlc3NMaW5lYXIvVlByb2dyZXNzTGluZWFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbG9hZGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdmFsaWRhdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkdyaWQvVkdyaWQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRvb2xiYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL1ZDb3VudGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ291bnRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9pbnRlcnNlY3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2FyZC9WQ2FyZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkxhYmVsL1ZMYWJlbC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNZXNzYWdlcy9WTWVzc2FnZXMuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQXBwQmFyL1ZBcHBCYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNYWluL1ZNYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvY29tcGFyYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbWVudWFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WU2VsZWN0L1ZTZWxlY3Quc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2hlY2tib3gvVlNpbXBsZUNoZWNrYm94LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNoaXAvVkNoaXAuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGV4dGFyZWEvVlRleHRhcmVhLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1haW4vVk1haW4udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb250ZW50L1ZDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WU3BhY2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2hpcC9WQ2hpcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNoaXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDaGVja2JveC9WU2ltcGxlQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTZWxlY3QvVlNlbGVjdExpc3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvZmlsdGVyYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maXJlYmFzZXVpL2Rpc3QvZmlyZWJhc2V1aS5jc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZSb3cudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlN0ZXBwZXIvVlN0ZXBwZXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WRGF0YVRhYmxlL1ZTaW1wbGVUYWJsZS5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dGFyZWEvVlRleHRhcmVhLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlyZVVpLnZ1ZT81NzY4Iiwid2VicGFjazovLy9jb21wb25lbnRzL0ZpcmVVaS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaXJlVWkudnVlP2NjMzUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdGVwcGVyL1ZTdGVwcGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU3RlcHBlci9WU3RlcHBlckNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdGVwcGVyL1ZTdGVwcGVyU3RlcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlN0ZXBwZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaXJlVWkudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbC9WRXhwYW5zaW9uUGFuZWwuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkRhdGFUYWJsZS9WU2ltcGxlVGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbC9WRXhwYW5zaW9uUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbC9WRXhwYW5zaW9uUGFuZWxDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WRXhwYW5zaW9uUGFuZWwvVkV4cGFuc2lvblBhbmVsSGVhZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WRXhwYW5zaW9uUGFuZWwvVkV4cGFuc2lvblBhbmVscy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL19pZC9pbmRleC52dWU/YTdhMCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL19pZC9pbmRleC52dWU/NmQ2NyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL19pZC9pbmRleC52dWU/YWFiNiIsIndlYnBhY2s6Ly8vcGFnZXMvc2hvcC9faWQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3BhZ2VzL3Nob3AvX2lkL2luZGV4LnZ1ZT9iNDQ4Iiwid2VicGFjazovLy8uL3BhZ2VzL3Nob3AvX2lkL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQTtBQUVBO0FBQ0Esb0g7Ozs7Ozs7O0FDSEE7QUFBQTtBQUVBO0FBQ0Esc0g7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU0sWUFBWSxHQUFHLG9GQUFzQixDQUEzQyxpQkFBMkMsQ0FBM0M7QUFDQSxNQUFNLGFBQWEsR0FBRyxvRkFBc0IsQ0FBNUMsa0JBQTRDLENBQTVDO0FBQ0EsTUFBTSxTQUFTLEdBQUcsb0ZBQXNCLENBQXhDLGNBQXdDLENBQXhDO0FBQ0EsTUFBTSxVQUFVLEdBQUcsb0ZBQXNCLENBQXpDLGVBQXlDLENBQXpDO0FBRUE7QUFRZTtBQUNiLHlCQUF1QixFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLdkI7QUFMdUI7QUFEWixDQUFmLEU7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUtBOztBQUNlLHVIQUFNLENBQU4sT0FBYztBQUMzQixNQUFJLEVBRHVCO0FBRzNCLE9BQUssRUFBRTtBQUNMLFlBQVEsRUFESDtBQUVMLFVBQU0sRUFGRDtBQUdMLFlBQVEsRUFISDtBQUlMLFNBQUssRUFKQTtBQUtMLFlBQVEsRUFMSDtBQU1MLG1CQUFlLEVBQUU7QUFDZixhQUFPLEVBRFE7QUFFZixVQUFJLEVBQUU7QUFGUyxLQU5aO0FBVUwsUUFBSSxFQVZDO0FBV0wsWUFBUSxFQVhIO0FBWUwsYUFBUyxFQVpKO0FBYUwsU0FBSyxFQWJBO0FBY0wsT0FBRyxFQUFFO0FBQ0gsVUFBSSxFQUFFLFNBREgsTUFDRyxDQURIO0FBRUgsYUFBTyxFQUFFO0FBRk4sS0FkQTtBQWtCTCxPQUFHLEVBQUU7QUFDSCxVQUFJLEVBREQ7QUFFSCxhQUFPLEVB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Q1IsRUFBRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLDBGQUFpQjs7QUFFaEM7QUFDc0c7QUFDbkQ7QUFDTTtBQUNVO0FBQ2hCO0FBQ0U7QUFDTztBQUNIO0FBQ0M7QUFDQTtBQUNDO0FBQ0E7QUFDYztBQUNPO0FBQ0Q7QUFDTDtBQUNOO0FBQ2Y7QUFDQTtBQUNGO0FBQ0k7QUFDRjtBQUNJO0FBQ007QUFDQztBQUNGO0FBQ0Q7QUFDSTtBQUNIO0FBQ1Q7QUFDRDtBQUNLO0FBQ0Y7QUFDVTtBQUNWO0FBQ1E7QUFDRjtBQUNHO0FBQ2hFLDJCQUFpQixhQUFhLDZCQUFJLENBQUMsbUNBQU8sQ0FBQyw2Q0FBWSxDQUFDLDZCQUFJLENBQUMsK0JBQUssQ0FBQyxzREFBWSxDQUFDLGdEQUFTLENBQUMsa0RBQVUsQ0FBQyx5Q0FBVSxDQUFDLHFDQUFRLENBQUMscUNBQVEsQ0FBQyxtREFBZSxDQUFDLGlFQUFzQixDQUFDLCtEQUFxQixDQUFDLHFEQUFnQixDQUFDLHFEQUFjLENBQUMsK0JBQUssQ0FBQywrQkFBSyxDQUFDLDZCQUFJLENBQUMsbUNBQU8sQ0FBQywrQkFBSyxDQUFDLHVDQUFTLENBQUMsbURBQWUsQ0FBQyw4REFBZ0IsQ0FBQyxpREFBYyxDQUFDLCtDQUFhLENBQUMsZ0VBQWlCLENBQUMsMERBQWMsQ0FBQywrQkFBSyxDQUFDLDZCQUFJLENBQUMsbUNBQU8sQ0FBQyxpQ0FBTSxDQUFDLDZDQUFZLENBQUMsbUNBQU8sQ0FBQyx5Q0FBVSxDQUFDLHVDQUFTLENBQUMsZ0RBQWEsQ0FBQyIsImZpbGUiOiJwYWdlcy9zaG9wL19pZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWRGl2aWRlciBmcm9tICcuL1ZEaXZpZGVyJ1xuXG5leHBvcnQgeyBWRGl2aWRlciB9XG5leHBvcnQgZGVmYXVsdCBWRGl2aWRlclxuIiwiaW1wb3J0IFZTdWJoZWFkZXIgZnJvbSAnLi9WU3ViaGVhZGVyJ1xuXG5leHBvcnQgeyBWU3ViaGVhZGVyIH1cbmV4cG9ydCBkZWZhdWx0IFZTdWJoZWFkZXJcbiIsImltcG9ydCBWQ2FyZCBmcm9tICcuL1ZDYXJkJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuY29uc3QgVkNhcmRBY3Rpb25zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX19hY3Rpb25zJylcbmNvbnN0IFZDYXJkU3VidGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3N1YnRpdGxlJylcbmNvbnN0IFZDYXJkVGV4dCA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fdGV4dCcpXG5jb25zdCBWQ2FyZFRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX190aXRsZScpXG5cbmV4cG9ydCB7XG4gIFZDYXJkLFxuICBWQ2FyZEFjdGlvbnMsXG4gIFZDYXJkU3VidGl0bGUsXG4gIFZDYXJkVGV4dCxcbiAgVkNhcmRUaXRsZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAkX3Z1ZXRpZnlfc3ViY29tcG9uZW50czoge1xuICAgIFZDYXJkLFxuICAgIFZDYXJkQWN0aW9ucyxcbiAgICBWQ2FyZFN1YnRpdGxlLFxuICAgIFZDYXJkVGV4dCxcbiAgICBWQ2FyZFRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRvb2xiYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZTaGVldCBmcm9tICcuLi9WU2hlZXQvVlNoZWV0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkltZywgeyBzcmNPYmplY3QgfSBmcm9tICcuLi9WSW1nL1ZJbWcnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGJyZWFraW5nIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVlNoZWV0LmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRvb2xiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYWJzb2x1dGU6IEJvb2xlYW4sXG4gICAgYm90dG9tOiBCb29sZWFuLFxuICAgIGNvbGxhcHNlOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGV4dGVuZGVkOiBCb29sZWFuLFxuICAgIGV4dGVuc2lvbkhlaWdodDoge1xuICAgICAgZGVmYXVsdDogNDgsXG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIH0sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBmbG9hdGluZzogQm9vbGVhbixcbiAgICBwcm9taW5lbnQ6IEJvb2xlYW4sXG4gICAgc2hvcnQ6IEJvb2xlYW4sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdIGFzIFByb3BUeXBlPHN0cmluZyB8IHNyY09iamVjdD4sXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hlYWRlcicsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGlzRXh0ZW5kZWQ6IGZhbHNlLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgaWYgKCF0aGlzLmlzRXh0ZW5kZWQpIHJldHVybiBoZWlnaHRcblxuICAgICAgY29uc3QgZXh0ZW5zaW9uSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5leHRlbnNpb25IZWlnaHQpXG5cbiAgICAgIHJldHVybiB0aGlzLmlzQ29sbGFwc2VkXG4gICAgICAgID8gaGVpZ2h0XG4gICAgICAgIDogaGVpZ2h0ICsgKCFpc05hTihleHRlbnNpb25IZWlnaHQpID8gZXh0ZW5zaW9uSGVpZ2h0IDogMClcbiAgICB9LFxuICAgIGNvbXB1dGVkQ29udGVudEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLmhlaWdodCkgcmV0dXJuIHBhcnNlSW50KHRoaXMuaGVpZ2h0KVxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQgJiYgdGhpcy5kZW5zZSkgcmV0dXJuIDk2XG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCAmJiB0aGlzLnNob3J0KSByZXR1cm4gMTEyXG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCkgcmV0dXJuIDEyOFxuICAgICAgaWYgKHRoaXMuZGVuc2UpIHJldHVybiA0OFxuICAgICAgaWYgKHRoaXMuc2hvcnQgfHwgdGhpcy4kdnVldGlmeS5icmVha3BvaW50LnNtQW5kRG93bikgcmV0dXJuIDU2XG4gICAgICByZXR1cm4gNjRcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRvb2xiYXInOiB0cnVlLFxuICAgICAgICAndi10b29sYmFyLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXRvb2xiYXItLWJvdHRvbSc6IHRoaXMuYm90dG9tLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZSc6IHRoaXMuY29sbGFwc2UsXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlZCc6IHRoaXMuaXNDb2xsYXBzZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tZXh0ZW5kZWQnOiB0aGlzLmlzRXh0ZW5kZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsb2F0aW5nJzogdGhpcy5mbG9hdGluZyxcbiAgICAgICAgJ3YtdG9vbGJhci0tcHJvbWluZW50JzogdGhpcy5pc1Byb21pbmVudCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQ29sbGFwc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taW5lbnRcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMubWVhc3VyYWJsZVN0eWxlcyxcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRIZWlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgY29uc3QgYnJlYWtpbmdQcm9wcyA9IFtcbiAgICAgIFsnYXBwJywgJzx2LWFwcC1iYXIgYXBwPiddLFxuICAgICAgWydtYW51YWwtc2Nyb2xsJywgJzx2LWFwcC1iYXIgOnZhbHVlPVwiZmFsc2VcIj4nXSxcbiAgICAgIFsnY2xpcHBlZC1sZWZ0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1sZWZ0PiddLFxuICAgICAgWydjbGlwcGVkLXJpZ2h0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1yaWdodD4nXSxcbiAgICAgIFsnaW52ZXJ0ZWQtc2Nyb2xsJywgJzx2LWFwcC1iYXIgaW52ZXJ0ZWQtc2Nyb2xsPiddLFxuICAgICAgWydzY3JvbGwtb2ZmLXNjcmVlbicsICc8di1hcHAtYmFyIHNjcm9sbC1vZmYtc2NyZWVuPiddLFxuICAgICAgWydzY3JvbGwtdGFyZ2V0JywgJzx2LWFwcC1iYXIgc2Nyb2xsLXRhcmdldD4nXSxcbiAgICAgIFsnc2Nyb2xsLXRocmVzaG9sZCcsICc8di1hcHAtYmFyIHNjcm9sbC10aHJlc2hvbGQ+J10sXG4gICAgICBbJ2NhcmQnLCAnPHYtYXBwLWJhciBmbGF0PiddLFxuICAgIF1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgYnJlYWtpbmdQcm9wcy5mb3JFYWNoKChbb3JpZ2luYWwsIHJlcGxhY2VtZW50XSkgPT4ge1xuICAgICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KG9yaWdpbmFsKSkgYnJlYWtpbmcob3JpZ2luYWwsIHJlcGxhY2VtZW50LCB0aGlzKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJhY2tncm91bmQgKCkge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkSGVpZ2h0KSxcbiAgICAgICAgc3JjOiB0aGlzLnNyYyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLiRzY29wZWRTbG90cy5pbWdcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5pbWcoeyBwcm9wcyB9KVxuICAgICAgICA6IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkltZywgeyBwcm9wcyB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9faW1hZ2UnLFxuICAgICAgfSwgW2ltYWdlXSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2NvbnRlbnQnLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMpKVxuICAgIH0sXG4gICAgZ2VuRXh0ZW5zaW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19leHRlbnNpb24nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmV4dGVuc2lvbkhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMsICdleHRlbnNpb24nKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICB0aGlzLmlzRXh0ZW5kZWQgPSB0aGlzLmV4dGVuZGVkIHx8ICEhdGhpcy4kc2NvcGVkU2xvdHMuZXh0ZW5zaW9uXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFt0aGlzLmdlbkNvbnRlbnQoKV1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzRXh0ZW5kZWQpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5FeHRlbnNpb24oKSlcbiAgICBpZiAodGhpcy5zcmMgfHwgdGhpcy4kc2NvcGVkU2xvdHMuaW1nKSBjaGlsZHJlbi51bnNoaWZ0KHRoaXMuZ2VuQmFja2dyb3VuZCgpKVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZXNzYWdlcy5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKENvbG9yYWJsZSwgVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1tZXNzYWdlcycsXG5cbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmdbXT4sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNoaWxkcmVuICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uLWdyb3VwJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXNfX3dyYXBwZXInLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6ICdtZXNzYWdlLXRyYW5zaXRpb24nLFxuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLnZhbHVlLm1hcCh0aGlzLmdlbk1lc3NhZ2UpKVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZSAobWVzc2FnZTogc3RyaW5nLCBrZXk6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzX19tZXNzYWdlJyxcbiAgICAgICAga2V5LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzLCAnZGVmYXVsdCcsIHsgbWVzc2FnZSwga2V5IH0pIHx8IFttZXNzYWdlXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzJyxcbiAgICAgIGNsYXNzOiB0aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICB9KSwgW3RoaXMuZ2VuQ2hpbGRyZW4oKV0pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuL1ZNZXNzYWdlcydcblxuZXhwb3J0IHsgVk1lc3NhZ2VzIH1cbmV4cG9ydCBkZWZhdWx0IFZNZXNzYWdlc1xuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVklucHV0LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuLi9WTWVzc2FnZXMnXG5cbi8vIE1peGluc1xuaW1wb3J0IEJpbmRzQXR0cnMgZnJvbSAnLi4vLi4vbWl4aW5zL2JpbmRzLWF0dHJzJ1xuaW1wb3J0IFZhbGlkYXRhYmxlIGZyb20gJy4uLy4uL21peGlucy92YWxpZGF0YWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQge1xuICBjb252ZXJ0VG9Vbml0LFxuICBnZXRTbG90LFxuICBrZWJhYkNhc2UsXG59IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEYXRhLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBJbnB1dFZhbGlkYXRpb25SdWxlIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQmluZHNBdHRycyxcbiAgVmFsaWRhdGFibGUsXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UgKi9cbiAgJF9tb2RlbEV2ZW50OiBzdHJpbmdcbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtaW5wdXQnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRJY29uOiBTdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcbiAgICBoaWRlRGV0YWlsczogW0Jvb2xlYW4sIFN0cmluZ10gYXMgUHJvcFR5cGU8Ym9vbGVhbiB8ICdhdXRvJz4sXG4gICAgaGludDogU3RyaW5nLFxuICAgIGlkOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnRIaW50OiBCb29sZWFuLFxuICAgIHByZXBlbmRJY29uOiBTdHJpbmcsXG4gICAgdmFsdWU6IG51bGwgYXMgYW55IGFzIFByb3BUeXBlPGFueT4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGhhc01vdXNlRG93bjogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWlucHV0LS1oYXMtc3RhdGUnOiB0aGlzLmhhc1N0YXRlLFxuICAgICAgICAndi1pbnB1dC0taGlkZS1kZXRhaWxzJzogIXRoaXMuc2hvd0RldGFpbHMsXG4gICAgICAgICd2LWlucHV0LS1pcy1sYWJlbC1hY3RpdmUnOiB0aGlzLmlzTGFiZWxBY3RpdmUsXG4gICAgICAgICd2LWlucHV0LS1pcy1kaXJ0eSc6IHRoaXMuaXNEaXJ0eSxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWRpc2FibGVkJzogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAndi1pbnB1dC0taXMtZm9jdXNlZCc6IHRoaXMuaXNGb2N1c2VkLFxuICAgICAgICAvLyA8di1zd2l0Y2ggbG9hZGluZz4ubG9hZGluZyA9PT0gJycgc28gd2UgY2FuJ3QganVzdCBjYXN0IHRvIGJvb2xlYW5cbiAgICAgICAgJ3YtaW5wdXQtLWlzLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcgIT09IGZhbHNlICYmIHRoaXMubG9hZGluZyAhPSBudWxsLFxuICAgICAgICAndi1pbnB1dC0taXMtcmVhZG9ubHknOiB0aGlzLmlzUmVhZG9ubHksXG4gICAgICAgICd2LWlucHV0LS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRJZCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmlkIHx8IGBpbnB1dC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzVG9EaXNwbGF5Lmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGhhc0hpbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmhhc01lc3NhZ2VzICYmXG4gICAgICAgICEhdGhpcy5oaW50ICYmXG4gICAgICAgICh0aGlzLnBlcnNpc3RlbnRIaW50IHx8IHRoaXMuaXNGb2N1c2VkKVxuICAgIH0sXG4gICAgaGFzTGFiZWwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhKHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICAvLyBQcm94eSBmb3IgYGxhenlWYWx1ZWBcbiAgICAvLyBUaGlzIGFsbG93cyBhbiBpbnB1dFxuICAgIC8vIHRvIGZ1bmN0aW9uIHdpdGhvdXRcbiAgICAvLyBhIHByb3ZpZGVkIG1vZGVsXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgICAgIHRoaXMuJGVtaXQodGhpcy4kX21vZGVsRXZlbnQsIHZhbClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhIXRoaXMubGF6eVZhbHVlXG4gICAgfSxcbiAgICBpc0xhYmVsQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGlydHlcbiAgICB9LFxuICAgIG1lc3NhZ2VzVG9EaXNwbGF5ICgpOiBzdHJpbmdbXSB7XG4gICAgICBpZiAodGhpcy5oYXNIaW50KSByZXR1cm4gW3RoaXMuaGludF1cblxuICAgICAgaWYgKCF0aGlzLmhhc01lc3NhZ2VzKSByZXR1cm4gW11cblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnMubWFwKCh2YWxpZGF0aW9uOiBzdHJpbmcgfCBJbnB1dFZhbGlkYXRpb25SdWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsaWRhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiB2YWxpZGF0aW9uXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRpb24odGhpcy5pbnRlcm5hbFZhbHVlKVxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsaWRhdGlvblJlc3VsdCA9PT0gJ3N0cmluZycgPyB2YWxpZGF0aW9uUmVzdWx0IDogJydcbiAgICAgIH0pLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UgIT09ICcnKVxuICAgIH0sXG4gICAgc2hvd0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZURldGFpbHMgPT09IGZhbHNlIHx8ICh0aGlzLmhpZGVEZXRhaWxzID09PSAnYXV0bycgJiYgdGhpcy5oYXNEZXRhaWxzKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyB2LXJhZGlvLWdyb3VwIG5lZWRzIHRvIGVtaXQgYSBkaWZmZXJlbnQgZXZlbnRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzQ3NTJcbiAgICB0aGlzLiRfbW9kZWxFdmVudCA9ICh0aGlzLiRvcHRpb25zLm1vZGVsICYmIHRoaXMuJG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlblByZXBlbmRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuQ29udHJvbCgpLFxuICAgICAgICB0aGlzLmdlbkFwcGVuZFNsb3QoKSxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkNvbnRyb2wgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0X19jb250cm9sJyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5JbnB1dFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5NZXNzYWdlcygpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkljb24gKFxuICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgY2I/OiAoZTogRXZlbnQpID0+IHZvaWQsXG4gICAgICBleHRyYURhdGE6IFZOb2RlRGF0YSA9IHt9XG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gKHRoaXMgYXMgYW55KVtgJHt0eXBlfUljb25gXVxuICAgICAgY29uc3QgZXZlbnROYW1lID0gYGNsaWNrOiR7a2ViYWJDYXNlKHR5cGUpfWBcbiAgICAgIGNvbnN0IGhhc0xpc3RlbmVyID0gISEodGhpcy5saXN0ZW5lcnMkW2V2ZW50TmFtZV0gfHwgY2IpXG5cbiAgICAgIGNvbnN0IGRhdGEgPSBtZXJnZURhdGEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWxhYmVsJzogaGFzTGlzdGVuZXIgPyBrZWJhYkNhc2UodHlwZSkuc3BsaXQoJy0nKVswXSArICcgaWNvbicgOiB1bmRlZmluZWQsXG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICB9LFxuICAgICAgICBvbjogIWhhc0xpc3RlbmVyXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwgZSlcbiAgICAgICAgICAgICAgY2IgJiYgY2IoZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBDb250YWluZXIgaGFzIGcgZXZlbnQgdGhhdCB3aWxsXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG1lbnUgb3BlbiBpZiBlbmNsb3NlZFxuICAgICAgICAgICAgbW91c2V1cDogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICB9LCBleHRyYURhdGEpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1pbnB1dF9faWNvbmAsXG4gICAgICAgIGNsYXNzOiB0eXBlID8gYHYtaW5wdXRfX2ljb24tLSR7a2ViYWJDYXNlKHR5cGUpfWAgOiB1bmRlZmluZWQsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgVkljb24sXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBpY29uXG4gICAgICAgICksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuSW5wdXRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXRfX3Nsb3QnLFxuICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgICBtb3VzZWRvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgbW91c2V1cDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ2lucHV0LXNsb3QnLFxuICAgICAgfSksIFt0aGlzLmdlbkRlZmF1bHRTbG90KCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0xhYmVsKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGFiZWwsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogdGhpcy5oYXNTdGF0ZSxcbiAgICAgICAgICBmb3I6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZNZXNzYWdlcywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNvbG9yOiB0aGlzLmhhc0hpbnQgPyAnJyA6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5tZXNzYWdlc1RvRGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiB0aGlzLmhhc01lc3NhZ2VzID8gJ2FsZXJ0JyA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogcHJvcHMgPT4gZ2V0U2xvdCh0aGlzLCAnbWVzc2FnZScsIHByb3BzKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5TbG90IChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgICBzbG90OiAoVk5vZGUgfCBWTm9kZVtdKVtdXG4gICAgKSB7XG4gICAgICBpZiAoIXNsb3QubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWYgPSBgJHt0eXBlfS0ke2xvY2F0aW9ufWBcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LWlucHV0X18ke3JlZn1gLFxuICAgICAgICByZWYsXG4gICAgICB9LCBzbG90KVxuICAgIH0sXG4gICAgZ2VuUHJlcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90cy5wcmVwZW5kKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90cy5wcmVwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ3ByZXBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICAvLyBBcHBlbmQgaWNvbiBmb3IgdGV4dCBmaWVsZCB3YXMgcmVhbGx5XG4gICAgICAvLyBhbiBhcHBlbmRlZCBpbm5lciBpY29uLCB2LXRleHQtZmllbGRcbiAgICAgIC8vIHdpbGwgb3ZlcndyaXRlIHRoaXMgbWV0aG9kIGluIG9yZGVyIHRvIG9idGFpblxuICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdFxuICAgICAgaWYgKHRoaXMuJHNsb3RzLmFwcGVuZCkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHMuYXBwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBFdmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZURvd24gKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IHRydWVcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IGZhbHNlXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZXVwJywgZSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy52YWxpZGF0aW9uU3RhdGUsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dCcsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgIH0pLCB0aGlzLmdlbkNvbnRlbnQoKSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVklucHV0IGZyb20gJy4vVklucHV0J1xuXG5leHBvcnQgeyBWSW5wdXQgfVxuZXhwb3J0IGRlZmF1bHQgVklucHV0XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ2FyZC5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2xvYWRhYmxlJ1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSdcblxuLy8gSGVscGVyc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBMb2FkYWJsZSxcbiAgUm91dGFibGUsXG4gIFZTaGVldFxuKS5leHRlbmQoe1xuICBuYW1lOiAndi1jYXJkJyxcblxuICBwcm9wczoge1xuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgaG92ZXI6IEJvb2xlYW4sXG4gICAgaW1nOiBTdHJpbmcsXG4gICAgbGluazogQm9vbGVhbixcbiAgICBsb2FkZXJIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgcmFpc2VkOiBCb29sZWFuLFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWNhcmQnOiB0cnVlLFxuICAgICAgICAuLi5Sb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtY2FyZC0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtY2FyZC0taG92ZXInOiB0aGlzLmhvdmVyLFxuICAgICAgICAndi1jYXJkLS1saW5rJzogdGhpcy5pc0NsaWNrYWJsZSxcbiAgICAgICAgJ3YtY2FyZC0tbG9hZGluZyc6IHRoaXMubG9hZGluZyxcbiAgICAgICAgJ3YtY2FyZC0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAndi1jYXJkLS1yYWlzZWQnOiB0aGlzLnJhaXNlZCxcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qgc3R5bGU6IERpY3Rpb25hcnk8c3RyaW5nPiA9IHtcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuc3R5bGVzLmNhbGwodGhpcyksXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmltZykge1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7dGhpcy5pbWd9XCIpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXRgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlblByb2dyZXNzICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IExvYWRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5Qcm9ncmVzcy5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghcmVuZGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2FyZF9fcHJvZ3Jlc3MnLFxuICAgICAgICBrZXk6ICdwcm9ncmVzcycsXG4gICAgICB9LCBbcmVuZGVyXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLnN0eWxlID0gdGhpcy5zdHlsZXNcblxuICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICBkYXRhLmF0dHJzID0gZGF0YS5hdHRycyB8fCB7fVxuICAgICAgZGF0YS5hdHRycy50YWJpbmRleCA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIGRhdGEpLCBbXG4gICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICB0aGlzLiRzbG90cy5kZWZhdWx0LFxuICAgIF0pXG4gIH0sXG59KVxuIiwiaW1wb3J0ICcuL1ZQcm9ncmVzc0xpbmVhci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQge1xuICBWRmFkZVRyYW5zaXRpb24sXG4gIFZTbGlkZVhUcmFuc2l0aW9uLFxufSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFByb3h5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcHJveHlhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMgfSBmcm9tICd2dWUvdHlwZXMnXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAndG9wJywgJ2JvdHRvbSddKSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kT3BhY2l0eToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBidWZmZXJWYWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEwMCxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBxdWVyeTogQm9vbGVhbixcbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3RyZWFtOiBCb29sZWFuLFxuICAgIHN0cmlwZWQ6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVybmFsTGF6eVZhbHVlOiB0aGlzLnZhbHVlIHx8IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgX19jYWNoZWRCYWNrZ3JvdW5kICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19iYWNrZ3JvdW5kJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuYmFja2dyb3VuZFN0eWxlLFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQodGhpcy5jb21wdXRlZFRyYW5zaXRpb24sIFt0aGlzLl9fY2FjaGVkQmFyVHlwZV0pXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhclR5cGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB0aGlzLl9fY2FjaGVkSW5kZXRlcm1pbmF0ZSA6IHRoaXMuX19jYWNoZWREZXRlcm1pbmF0ZVxuICAgIH0sXG4gICAgX19jYWNoZWRCdWZmZXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2J1ZmZlcicsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBfX2NhY2hlZERldGVybWluYXRlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtcHJvZ3Jlc3MtbGluZWFyX19kZXRlcm1pbmF0ZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIF9fY2FjaGVkSW5kZXRlcm1pbmF0ZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZScsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlLS1hY3RpdmUnOiB0aGlzLmFjdGl2ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzc0JhcignbG9uZycpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzQmFyKCdzaG9ydCcpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIF9fY2FjaGVkU3RyZWFtICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgaWYgKCF0aGlzLnN0cmVhbSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fc3RyZWFtJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCgxMDAgLSB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGJhY2tncm91bmRTdHlsZSAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gdGhpcy5iYWNrZ3JvdW5kT3BhY2l0eSA9PSBudWxsXG4gICAgICAgID8gKHRoaXMuYmFja2dyb3VuZENvbG9yID8gMSA6IDAuMylcbiAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMuYmFja2dyb3VuZE9wYWNpdHkpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGJhY2tncm91bmRPcGFjaXR5LFxuICAgICAgICBbdGhpcy5pc1JldmVyc2VkID8gJ3JpZ2h0JyA6ICdsZWZ0J106IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZEJ1ZmZlciAtIHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tYWJzb2x1dGUnOiB0aGlzLmFic29sdXRlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLWZpeGVkJzogdGhpcy5maXhlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1xdWVyeSc6IHRoaXMucXVlcnksXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcmVhY3RpdmUnOiB0aGlzLnJlYWN0aXZlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJldmVyc2UnOiB0aGlzLmlzUmV2ZXJzZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1zdHJpcGVkJzogdGhpcy5zdHJpcGVkLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IFZGYWRlVHJhbnNpdGlvbiA6IFZTbGlkZVhUcmFuc2l0aW9uXG4gICAgfSxcbiAgICBpc1JldmVyc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bCAhPT0gdGhpcy5yZXZlcnNlXG4gICAgfSxcbiAgICBub3JtYWxpemVkQnVmZmVyICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMuYnVmZmVyVmFsdWUpXG4gICAgfSxcbiAgICBub3JtYWxpemVkVmFsdWUgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5pbnRlcm5hbExhenlWYWx1ZSlcbiAgICB9LFxuICAgIHJlYWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuJGxpc3RlbmVycy5jaGFuZ2UpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzdHlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxuXG4gICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHN0eWxlcy5oZWlnaHQgPSAwXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pbmRldGVybWluYXRlICYmIHBhcnNlRmxvYXQodGhpcy5ub3JtYWxpemVkQnVmZmVyKSAhPT0gMTAwKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkQnVmZmVyLCAnJScpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZXNcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90KHRoaXMsICdkZWZhdWx0JywgeyB2YWx1ZTogdGhpcy5pbnRlcm5hbExhenlWYWx1ZSB9KVxuXG4gICAgICBpZiAoIXNsb3QpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2NvbnRlbnQnLFxuICAgICAgfSwgc2xvdClcbiAgICB9LFxuICAgIGdlbkxpc3RlbmVycyAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLiRsaXN0ZW5lcnNcblxuICAgICAgaWYgKHRoaXMucmVhY3RpdmUpIHtcbiAgICAgICAgbGlzdGVuZXJzLmNsaWNrID0gdGhpcy5vbkNsaWNrXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnNcbiAgICB9LFxuICAgIGdlblByb2dyZXNzQmFyIChuYW1lOiAnbG9uZycgfCAnc2hvcnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBbbmFtZV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5yZWFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IGUub2Zmc2V0WCAvIHdpZHRoICogMTAwXG4gICAgfSxcbiAgICBub3JtYWxpemUgKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgIGlmICh2YWx1ZSA8IDApIHJldHVybiAwXG4gICAgICBpZiAodmFsdWUgPiAxMDApIHJldHVybiAxMDBcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5pbmRldGVybWluYXRlID8gdW5kZWZpbmVkIDogdGhpcy5ub3JtYWxpemVkVmFsdWUsXG4gICAgICB9LFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20gPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuYWN0aXZlID8gY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCkgOiAwLFxuICAgICAgICB0b3A6IHRoaXMudG9wID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5nZW5MaXN0ZW5lcnMoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgdGhpcy5fX2NhY2hlZFN0cmVhbSxcbiAgICAgIHRoaXMuX19jYWNoZWRCYWNrZ3JvdW5kLFxuICAgICAgdGhpcy5fX2NhY2hlZEJ1ZmZlcixcbiAgICAgIHRoaXMuX19jYWNoZWRCYXIsXG4gICAgICB0aGlzLmdlbkNvbnRlbnQoKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZMYWJlbC5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUsIHsgZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyB9IGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1sYWJlbCcsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGFic29sdXRlOiBCb29sZWFuLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBmb2N1c2VkOiBCb29sZWFuLFxuICAgIGZvcjogU3RyaW5nLFxuICAgIGxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgfSxcblxuICByZW5kZXIgKGgsIGN0eCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsaXN0ZW5lcnMsIHByb3BzIH0gPSBjdHhcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWxhYmVsJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LWxhYmVsLS1hY3RpdmUnOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgJ3YtbGFiZWwtLWlzLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIC4uLmZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMoY3R4KSxcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBmb3I6IHByb3BzLmZvcixcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogIXByb3BzLmZvcixcbiAgICAgIH0sXG4gICAgICBvbjogbGlzdGVuZXJzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbGVmdDogY29udmVydFRvVW5pdChwcm9wcy5sZWZ0KSxcbiAgICAgICAgcmlnaHQ6IGNvbnZlcnRUb1VuaXQocHJvcHMucmlnaHQpLFxuICAgICAgICBwb3NpdGlvbjogcHJvcHMuYWJzb2x1dGUgPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJyxcbiAgICAgIH0sXG4gICAgICByZWY6ICdsYWJlbCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2xhYmVsJywgQ29sb3JhYmxlLm9wdGlvbnMubWV0aG9kcy5zZXRUZXh0Q29sb3IocHJvcHMuZm9jdXNlZCAmJiBwcm9wcy5jb2xvciwgZGF0YSksIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCBWTGFiZWwgZnJvbSAnLi9WTGFiZWwnXG5cbmV4cG9ydCB7IFZMYWJlbCB9XG5leHBvcnQgZGVmYXVsdCBWTGFiZWxcbiIsImltcG9ydCBWdWUsIHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyJ1xuXG5pbnRlcmZhY2UgY29sb3JhYmxlIGV4dGVuZHMgVnVlIHtcbiAgY29sb3I/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBMb2FkYWJsZVxuICpcbiAqIEBtaXhpblxuICpcbiAqIFVzZWQgdG8gYWRkIGxpbmVhciBwcm9ncmVzcyBiYXIgdG8gY29tcG9uZW50c1xuICogQ2FuIHVzZSBhIGRlZmF1bHQgYmFyIHdpdGggYSBzcGVjaWZpYyBjb2xvclxuICogb3IgZGVzaWduYXRlIGEgY3VzdG9tIHByb2dyZXNzIGxpbmVhciBiYXJcbiAqL1xuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQ8Y29sb3JhYmxlPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdsb2FkYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbG9hZGVySGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMixcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Qcm9ncmVzcyAoKTogVk5vZGUgfCBWTm9kZVtdIHwgbnVsbCB7XG4gICAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLnByb2dyZXNzIHx8IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlByb2dyZXNzTGluZWFyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICAgICAgY29sb3I6ICh0aGlzLmxvYWRpbmcgPT09IHRydWUgfHwgdGhpcy5sb2FkaW5nID09PSAnJylcbiAgICAgICAgICAgID8gKHRoaXMuY29sb3IgfHwgJ3ByaW1hcnknKVxuICAgICAgICAgICAgOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmxvYWRlckhlaWdodCxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uL3RoZW1lYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uL3JlZ2lzdHJhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBJbnB1dE1lc3NhZ2UsIElucHV0VmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBSZWdpc3RyYWJsZUluamVjdDwnZm9ybScsIGFueT4oJ2Zvcm0nKSxcbiAgVGhlbWVhYmxlLFxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndmFsaWRhdGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgZXJyb3JDb3VudDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBydWxlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRWYWxpZGF0aW9uUnVsZXM+LFxuICAgIHN1Y2Nlc3M6IEJvb2xlYW4sXG4gICAgc3VjY2Vzc01lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgdmFsaWRhdGVPbkJsdXI6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yQnVja2V0OiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgIGhhc0NvbG9yOiBmYWxzZSxcbiAgICAgIGhhc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaGFzSW5wdXQ6IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGlzUmVzZXR0aW5nOiBmYWxzZSxcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuY29sb3IpIHJldHVybiB0aGlzLmNvbG9yXG4gICAgICAvLyBJdCdzIGFzc3VtZWQgdGhhdCBpZiB0aGUgaW5wdXQgaXMgb24gYVxuICAgICAgLy8gZGFyayBiYWNrZ3JvdW5kLCB0aGUgdXNlciB3aWxsIHdhbnQgdG9cbiAgICAgIC8vIGhhdmUgYSB3aGl0ZSBjb2xvci4gSWYgdGhlIGVudGlyZSBhcHBcbiAgICAgIC8vIGlzIHNldHVwIHRvIGJlIGRhcmssIHRoZW4gdGhleSB3aWxsXG4gICAgICAvLyBsaWtlIHdhbnQgdG8gdXNlIHRoZWlyIHByaW1hcnkgY29sb3JcbiAgICAgIGlmICh0aGlzLmlzRGFyayAmJiAhdGhpcy5hcHBJc0RhcmspIHJldHVybiAnd2hpdGUnXG4gICAgICBlbHNlIHJldHVybiAncHJpbWFyeSdcbiAgICB9LFxuICAgIGhhc0Vycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5lcnJvckJ1Y2tldC5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuZXJyb3JcbiAgICAgIClcbiAgICB9LFxuICAgIC8vIFRPRE86IEFkZCBsb2dpYyB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYmFzZWRcbiAgICAvLyB1cG9uIGEgZ29vZCB2YWxpZGF0aW9uXG4gICAgaGFzU3VjY2VzcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5zdWNjZXNzXG4gICAgICApXG4gICAgfSxcbiAgICBleHRlcm5hbEVycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwIHx8IHRoaXMuZXJyb3JcbiAgICB9LFxuICAgIGhhc01lc3NhZ2VzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgaGFzU3RhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaGFzU3VjY2VzcyB8fFxuICAgICAgICAodGhpcy5zaG91bGRWYWxpZGF0ZSAmJiB0aGlzLmhhc0Vycm9yKVxuICAgICAgKVxuICAgIH0sXG4gICAgaW50ZXJuYWxFcnJvck1lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuZXJyb3JNZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5tZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsU3VjY2Vzc01lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuc3VjY2Vzc01lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiB1bmtub3duIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlzYWJsZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgKFxuICAgICAgICAhIXRoaXMuZm9ybSAmJlxuICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZWRcbiAgICAgIClcbiAgICB9LFxuICAgIGlzSW50ZXJhY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seVxuICAgIH0sXG4gICAgaXNSZWFkb25seSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFkb25seSB8fCAoXG4gICAgICAgICEhdGhpcy5mb3JtICYmXG4gICAgICAgIHRoaXMuZm9ybS5yZWFkb25seVxuICAgICAgKVxuICAgIH0sXG4gICAgc2hvdWxkVmFsaWRhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuZXh0ZXJuYWxFcnJvcikgcmV0dXJuIHRydWVcbiAgICAgIGlmICh0aGlzLmlzUmVzZXR0aW5nKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVPbkJsdXJcbiAgICAgICAgPyB0aGlzLmhhc0ZvY3VzZWQgJiYgIXRoaXMuaXNGb2N1c2VkXG4gICAgICAgIDogKHRoaXMuaGFzSW5wdXQgfHwgdGhpcy5oYXNGb2N1c2VkKVxuICAgIH0sXG4gICAgdmFsaWRhdGlvbnMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQuc2xpY2UoMCwgTnVtYmVyKHRoaXMuZXJyb3JDb3VudCkpXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU3RhdGUgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5oYXNFcnJvciAmJiB0aGlzLnNob3VsZFZhbGlkYXRlKSByZXR1cm4gJ2Vycm9yJ1xuICAgICAgaWYgKHRoaXMuaGFzU3VjY2VzcykgcmV0dXJuICdzdWNjZXNzJ1xuICAgICAgaWYgKHRoaXMuaGFzQ29sb3IpIHJldHVybiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbGlkYXRpb25UYXJnZXQgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICh0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN1Y2Nlc3NNZXNzYWdlcyAmJiB0aGlzLnN1Y2Nlc3NNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVzc2FnZXMgJiYgdGhpcy5tZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvckJ1Y2tldFxuICAgICAgfSBlbHNlIHJldHVybiBbXVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBydWxlczoge1xuICAgICAgaGFuZGxlciAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKGRlZXBFcXVhbChuZXdWYWwsIG9sZFZhbCkpIHJldHVyblxuICAgICAgICB0aGlzLnZhbGlkYXRlKClcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlLFxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZSAoKSB7XG4gICAgICAvLyBJZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIHNldHRpbmcgaW5wdXQsXG4gICAgICAvLyBtYXJrIGl0IHdpdGggaGFzSW5wdXRcbiAgICAgIHRoaXMuaGFzSW5wdXQgPSB0cnVlXG4gICAgICB0aGlzLnZhbGlkYXRlT25CbHVyIHx8IHRoaXMuJG5leHRUaWNrKHRoaXMudmFsaWRhdGUpXG4gICAgfSxcbiAgICBpc0ZvY3VzZWQgKHZhbCkge1xuICAgICAgLy8gU2hvdWxkIG5vdCBjaGVjayB2YWxpZGF0aW9uXG4gICAgICAvLyBpZiBkaXNhYmxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdmFsICYmXG4gICAgICAgICF0aGlzLmlzRGlzYWJsZWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIHRoaXMudmFsaWRhdGVPbkJsdXIgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy52YWxpZGF0ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmVzZXR0aW5nICgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc0lucHV0ID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYXNGb2N1c2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKVxuICAgICAgfSwgMClcbiAgICB9LFxuICAgIGhhc0Vycm9yICh2YWwpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTplcnJvcicsIHZhbClcbiAgICAgIH1cbiAgICB9LFxuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5mb3JtICYmIHRoaXMuZm9ybS5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0udW5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5JbnRlcm5hbE1lc3NhZ2VzIChtZXNzYWdlczogSW5wdXRNZXNzYWdlIHwgbnVsbCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICghbWVzc2FnZXMpIHJldHVybiBbXVxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlcykpIHJldHVybiBtZXNzYWdlc1xuICAgICAgZWxzZSByZXR1cm4gW21lc3NhZ2VzXVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICB0aGlzLmlzUmVzZXR0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gQXJyYXkuaXNBcnJheSh0aGlzLmludGVybmFsVmFsdWUpXG4gICAgICAgID8gW11cbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgcmVzZXRWYWxpZGF0aW9uICgpIHtcbiAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSB0cnVlXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHZhbGlkYXRlIChmb3JjZSA9IGZhbHNlLCB2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgZXJyb3JCdWNrZXQgPSBbXVxuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLmludGVybmFsVmFsdWVcblxuICAgICAgaWYgKGZvcmNlKSB0aGlzLmhhc0lucHV0ID0gdGhpcy5oYXNGb2N1c2VkID0gdHJ1ZVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5ydWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMucnVsZXNbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicgPyBydWxlKHZhbHVlKSA6IHJ1bGVcblxuICAgICAgICBpZiAodmFsaWQgPT09IGZhbHNlIHx8IHR5cGVvZiB2YWxpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlcnJvckJ1Y2tldC5wdXNoKHZhbGlkIHx8ICcnKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWxpZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgY29uc29sZUVycm9yKGBSdWxlcyBzaG91bGQgcmV0dXJuIGEgc3RyaW5nIG9yIGJvb2xlYW4sIHJlY2VpdmVkICcke3R5cGVvZiB2YWxpZH0nIGluc3RlYWRgLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXJyb3JCdWNrZXQgPSBlcnJvckJ1Y2tldFxuICAgICAgdGhpcy52YWxpZCA9IGVycm9yQnVja2V0Lmxlbmd0aCA9PT0gMFxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZFxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlRvb2xiYXIgZnJvbSAnLi9WVG9vbGJhcidcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5jb25zdCBWVG9vbGJhclRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX190aXRsZScpXG5jb25zdCBWVG9vbGJhckl0ZW1zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX19pdGVtcycpXG5cbmV4cG9ydCB7XG4gIFZUb29sYmFyLFxuICBWVG9vbGJhckl0ZW1zLFxuICBWVG9vbGJhclRpdGxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVlRvb2xiYXIsXG4gICAgVlRvb2xiYXJJdGVtcyxcbiAgICBWVG9vbGJhclRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkNvdW50ZXIuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgVGhlbWVhYmxlLCB7IGZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY291bnRlcicsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBtYXg6IFtOdW1iZXIsIFN0cmluZ10sXG4gIH0sXG5cbiAgcmVuZGVyIChoLCBjdHgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gY3R4XG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQocHJvcHMubWF4LCAxMClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHByb3BzLnZhbHVlLCAxMClcbiAgICBjb25zdCBjb250ZW50ID0gbWF4ID8gYCR7dmFsdWV9IC8gJHttYXh9YCA6IFN0cmluZyhwcm9wcy52YWx1ZSlcbiAgICBjb25zdCBpc0dyZWF0ZXIgPSBtYXggJiYgKHZhbHVlID4gbWF4KVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1jb3VudGVyJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdlcnJvci0tdGV4dCc6IGlzR3JlYXRlcixcbiAgICAgICAgLi4uZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyhjdHgpLFxuICAgICAgfSxcbiAgICB9LCBjb250ZW50KVxuICB9LFxufSlcbiIsImltcG9ydCBWQ291bnRlciBmcm9tICcuL1ZDb3VudGVyJ1xuXG5leHBvcnQgeyBWQ291bnRlciB9XG5leHBvcnQgZGVmYXVsdCBWQ291bnRlclxuIiwiLy8gRGlyZWN0aXZlc1xuaW1wb3J0IEludGVyc2VjdCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ludGVyc2VjdCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb25zb2xlV2FybiB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlcnNlY3RhYmxlIChvcHRpb25zOiB7IG9uVmlzaWJsZTogc3RyaW5nW10gfSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykpIHtcbiAgICAvLyBkbyBub3RoaW5nIGJlY2F1c2UgaW50ZXJzZWN0aW9uIG9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGVcbiAgICByZXR1cm4gVnVlLmV4dGVuZCh7IG5hbWU6ICdpbnRlcnNlY3RhYmxlJyB9KVxuICB9XG5cbiAgcmV0dXJuIFZ1ZS5leHRlbmQoe1xuICAgIG5hbWU6ICdpbnRlcnNlY3RhYmxlJyxcblxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0Lmluc2VydGVkKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50LCB7XG4gICAgICAgIG5hbWU6ICdpbnRlcnNlY3QnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vbk9ic2VydmUsXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZXN0cm95ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0LnVuYmluZCh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudClcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25PYnNlcnZlIChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciwgaXNJbnRlcnNlY3Rpbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFpc0ludGVyc2VjdGluZykgcmV0dXJuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG9wdGlvbnMub25WaXNpYmxlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAodGhpcyBhcyBhbnkpW29wdGlvbnMub25WaXNpYmxlW2ldXVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlV2FybihvcHRpb25zLm9uVmlzaWJsZVtpXSArICcgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUgb24gdGhlIGluc3RhbmNlIGJ1dCByZWZlcmVuY2VkIGluIGludGVyc2VjdGFibGUgbWl4aW4gb3B0aW9ucycpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUZXh0RmllbGQuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWQ291bnRlciBmcm9tICcuLi9WQ291bnRlcidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBJbnRlcnNlY3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9pbnRlcnNlY3RhYmxlJ1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4uLy4uL21peGlucy9sb2FkYWJsZSdcbmltcG9ydCBWYWxpZGF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdmFsaWRhdGFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwga2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBicmVha2luZywgY29uc29sZVdhcm4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWSW5wdXQsXG4gIEludGVyc2VjdGFibGUoe1xuICAgIG9uVmlzaWJsZTogW1xuICAgICAgJ3NldExhYmVsV2lkdGgnLFxuICAgICAgJ3NldFByZWZpeFdpZHRoJyxcbiAgICAgICdzZXRQcmVwZW5kV2lkdGgnLFxuICAgICAgJ3RyeUF1dG9mb2N1cycsXG4gICAgXSxcbiAgfSksXG4gIExvYWRhYmxlLFxuKVxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBsYWJlbDogSFRNTEVsZW1lbnRcbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICAgICdwcmVwZW5kLWlubmVyJzogSFRNTEVsZW1lbnRcbiAgICBwcmVmaXg6IEhUTUxFbGVtZW50XG4gICAgc3VmZml4OiBIVE1MRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGRpcnR5VHlwZXMgPSBbJ2NvbG9yJywgJ2ZpbGUnLCAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ3dlZWsnLCAnbW9udGgnXVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi10ZXh0LWZpZWxkJyxcblxuICBkaXJlY3RpdmVzOiB7IHJpcHBsZSB9LFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRPdXRlckljb246IFN0cmluZyxcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgIGNsZWFySWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjbGVhcicsXG4gICAgfSxcbiAgICBjb3VudGVyOiBbQm9vbGVhbiwgTnVtYmVyLCBTdHJpbmddLFxuICAgIGNvdW50ZXJWYWx1ZTogRnVuY3Rpb24gYXMgUHJvcFR5cGU8KHZhbHVlOiBhbnkpID0+IG51bWJlcj4sXG4gICAgZmlsbGVkOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgZnVsbFdpZHRoOiBCb29sZWFuLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBwcmVmaXg6IFN0cmluZyxcbiAgICBwcmVwZW5kSW5uZXJJY29uOiBTdHJpbmcsXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHNoYXBlZDogQm9vbGVhbixcbiAgICBzaW5nbGVMaW5lOiBCb29sZWFuLFxuICAgIHNvbG86IEJvb2xlYW4sXG4gICAgc29sb0ludmVydGVkOiBCb29sZWFuLFxuICAgIHN1ZmZpeDogU3RyaW5nLFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYmFkSW5wdXQ6IGZhbHNlLFxuICAgIGxhYmVsV2lkdGg6IDAsXG4gICAgcHJlZml4V2lkdGg6IDAsXG4gICAgcHJlcGVuZFdpZHRoOiAwLFxuICAgIGluaXRpYWxWYWx1ZTogbnVsbCxcbiAgICBpc0Jvb3RlZDogZmFsc2UsXG4gICAgaXNDbGVhcmluZzogZmFsc2UsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZCc6IHRydWUsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWZ1bGwtd2lkdGgnOiB0aGlzLmZ1bGxXaWR0aCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcHJlZml4JzogdGhpcy5wcmVmaXgsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNpbmdsZS1saW5lJzogdGhpcy5pc1NpbmdsZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sbyc6IHRoaXMuaXNTb2xvLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvLWludmVydGVkJzogdGhpcy5zb2xvSW52ZXJ0ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZmlsbGVkJzogdGhpcy5maWxsZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWlzLWJvb3RlZCc6IHRoaXMuaXNCb290ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWVuY2xvc2VkJzogdGhpcy5pc0VuY2xvc2VkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1yZXZlcnNlJzogdGhpcy5yZXZlcnNlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1vdXRsaW5lZCc6IHRoaXMub3V0bGluZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc2hhcGVkJzogdGhpcy5zaGFwZWQsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgY29uc3QgY29tcHV0ZWRDb2xvciA9IFZhbGlkYXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb2xvci5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghdGhpcy5zb2xvSW52ZXJ0ZWQgfHwgIXRoaXMuaXNGb2N1c2VkKSByZXR1cm4gY29tcHV0ZWRDb2xvclxuXG4gICAgICByZXR1cm4gdGhpcy5jb2xvciB8fCAncHJpbWFyeSdcbiAgICB9LFxuICAgIGNvbXB1dGVkQ291bnRlclZhbHVlICgpOiBudW1iZXIge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvdW50ZXJWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyVmFsdWUodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmludGVybmFsVmFsdWUgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoXG4gICAgfSxcbiAgICBoYXNDb3VudGVyICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvdW50ZXIgIT09IGZhbHNlICYmIHRoaXMuY291bnRlciAhPSBudWxsXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5jb21wdXRlZC5oYXNEZXRhaWxzLmNhbGwodGhpcykgfHwgdGhpcy5oYXNDb3VudGVyXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmxhenlWYWx1ZSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZT8udG9TdHJpbmcoKS5sZW5ndGggPiAwIHx8IHRoaXMuYmFkSW5wdXRcbiAgICB9LFxuICAgIGlzRW5jbG9zZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5maWxsZWQgfHxcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5vdXRsaW5lZFxuICAgICAgKVxuICAgIH0sXG4gICAgaXNMYWJlbEFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RpcnR5IHx8IGRpcnR5VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKVxuICAgIH0sXG4gICAgaXNTaW5nbGUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5zaW5nbGVMaW5lIHx8XG4gICAgICAgIHRoaXMuZnVsbFdpZHRoIHx8XG4gICAgICAgIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jZmlsbGVkLXRleHQtZmllbGRcbiAgICAgICAgKHRoaXMuZmlsbGVkICYmICF0aGlzLmhhc0xhYmVsKVxuICAgICAgKVxuICAgIH0sXG4gICAgaXNTb2xvICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNvbG8gfHwgdGhpcy5zb2xvSW52ZXJ0ZWRcbiAgICB9LFxuICAgIGxhYmVsUG9zaXRpb24gKCk6IFJlY29yZDwnbGVmdCcgfCAncmlnaHQnLCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+IHtcbiAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5wcmVmaXggJiYgIXRoaXMubGFiZWxWYWx1ZSkgPyB0aGlzLnByZWZpeFdpZHRoIDogMFxuXG4gICAgICBpZiAodGhpcy5sYWJlbFZhbHVlICYmIHRoaXMucHJlcGVuZFdpZHRoKSBvZmZzZXQgLT0gdGhpcy5wcmVwZW5kV2lkdGhcblxuICAgICAgcmV0dXJuICh0aGlzLiR2dWV0aWZ5LnJ0bCA9PT0gdGhpcy5yZXZlcnNlKSA/IHtcbiAgICAgICAgbGVmdDogb2Zmc2V0LFxuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgfSA6IHtcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICByaWdodDogb2Zmc2V0LFxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0xhYmVsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0xhYmVsICYmICghdGhpcy5pc1NpbmdsZSB8fCAoIXRoaXMuaXNMYWJlbEFjdGl2ZSAmJiAhdGhpcy5wbGFjZWhvbGRlcikpXG4gICAgfSxcbiAgICBsYWJlbFZhbHVlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc1NpbmdsZSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNMYWJlbEFjdGl2ZSB8fCB0aGlzLnBsYWNlaG9sZGVyKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBsYWJlbFZhbHVlOiAnc2V0TGFiZWxXaWR0aCcsXG4gICAgb3V0bGluZWQ6ICdzZXRMYWJlbFdpZHRoJyxcbiAgICBsYWJlbCAoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljayh0aGlzLnNldExhYmVsV2lkdGgpXG4gICAgfSxcbiAgICBwcmVmaXggKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5zZXRQcmVmaXhXaWR0aClcbiAgICB9LFxuICAgIGlzRm9jdXNlZDogJ3VwZGF0ZVZhbHVlJyxcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2JveCcpKSB7XG4gICAgICBicmVha2luZygnYm94JywgJ2ZpbGxlZCcsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2Jyb3dzZXItYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGJyZWFraW5nKCdicm93c2VyLWF1dG9jb21wbGV0ZScsICdhdXRvY29tcGxldGUnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0aGlzLnNoYXBlZCAmJiAhKHRoaXMuZmlsbGVkIHx8IHRoaXMub3V0bGluZWQgfHwgdGhpcy5pc1NvbG8pKSB7XG4gICAgICBjb25zb2xlV2Fybignc2hhcGVkIHNob3VsZCBiZSB1c2VkIHdpdGggZWl0aGVyIGZpbGxlZCBvciBvdXRsaW5lZCcsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuYXV0b2ZvY3VzICYmIHRoaXMudHJ5QXV0b2ZvY3VzKClcbiAgICB0aGlzLnNldExhYmVsV2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlZml4V2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlcGVuZFdpZHRoKClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gKHRoaXMuaXNCb290ZWQgPSB0cnVlKSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBmb2N1cyAoKSB7XG4gICAgICB0aGlzLm9uRm9jdXMoKVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBibHVyIChlPzogRXZlbnQpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvNTkxM1xuICAgICAgLy8gU2FmYXJpIHRhYiBvcmRlciBnZXRzIGJyb2tlbiBpZiBjYWxsZWQgc3luY2hyb25vdXNcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuYmx1cigpXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xlYXJhYmxlQ2FsbGJhY2sgKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuaW50ZXJuYWxWYWx1ZSA9IG51bGwpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ2FwcGVuZC1vdXRlciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLW91dGVyJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRPdXRlckljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kT3V0ZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlblByZXBlbmRJbm5lclNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlcGVuZElubmVySWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdwcmVwZW5kSW5uZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdpbm5lcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5JY29uU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydhcHBlbmQnXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ2FwcGVuZCddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgY29uc3QgcHJlcGVuZCA9IHRoaXMuZ2VuUHJlcGVuZElubmVyU2xvdCgpXG5cbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIGlucHV0LmNoaWxkcmVuID0gaW5wdXQuY2hpbGRyZW4gfHwgW11cbiAgICAgICAgaW5wdXQuY2hpbGRyZW4udW5zaGlmdChwcmVwZW5kKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9LFxuICAgIGdlbkNsZWFySWNvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuY2xlYXJhYmxlKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5pc0RpcnR5ID8gdW5kZWZpbmVkIDogeyBhdHRyczogeyBkaXNhYmxlZDogdHJ1ZSB9IH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgW1xuICAgICAgICB0aGlzLmdlbkljb24oJ2NsZWFyJywgdGhpcy5jbGVhcmFibGVDYWxsYmFjaywgZGF0YSksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQ291bnRlciAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzQ291bnRlcikgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5jb3VudGVyID09PSB0cnVlID8gdGhpcy5hdHRycyQubWF4bGVuZ3RoIDogdGhpcy5jb3VudGVyXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZDb3VudGVyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5jb21wdXRlZENvdW50ZXJWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5Db250cm9sICgpIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbkNvbnRyb2wuY2FsbCh0aGlzKVxuICAgIH0sXG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5GaWVsZHNldCgpLFxuICAgICAgICB0aGlzLmdlblRleHRGaWVsZFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5DbGVhckljb24oKSxcbiAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5GaWVsZHNldCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSwgW3RoaXMuZ2VuTGVnZW5kKCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dMYWJlbCkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogIXRoaXMuaXNTaW5nbGUgJiYgKHRoaXMuaXNGb2N1c2VkIHx8ICEhdGhpcy52YWxpZGF0aW9uU3RhdGUpLFxuICAgICAgICAgIGZvcjogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIGxlZnQ6IHRoaXMubGFiZWxQb3NpdGlvbi5sZWZ0LFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIHJpZ2h0OiB0aGlzLmxhYmVsUG9zaXRpb24ucmlnaHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubGFiZWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxhYmVsLCBkYXRhLCB0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgZ2VuTGVnZW5kICgpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gIXRoaXMuc2luZ2xlTGluZSAmJiAodGhpcy5sYWJlbFZhbHVlIHx8IHRoaXMuaXNEaXJ0eSkgPyB0aGlzLmxhYmVsV2lkdGggOiAwXG4gICAgICBjb25zdCBzcGFuID0gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiAnJiM4MjAzOycgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdsZWdlbmQnLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6ICF0aGlzLmlzU2luZ2xlID8gY29udmVydFRvVW5pdCh3aWR0aCkgOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9LCBbc3Bhbl0pXG4gICAgfSxcbiAgICBnZW5JbnB1dCAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpc3RlbmVycyQpXG4gICAgICBkZWxldGUgbGlzdGVuZXJzWydjaGFuZ2UnXSAvLyBDaGFuZ2Ugc2hvdWxkIG5vdCBiZSBib3VuZCBleHRlcm5hbGx5XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnbnVtYmVyJyAmJiBPYmplY3QuaXModGhpcy5sYXp5VmFsdWUsIC0wKSkgPyAnLTAnIDogdGhpcy5sYXp5VmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLi4udGhpcy5hdHRycyQsXG4gICAgICAgICAgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcmVhZG9ubHk6IHRoaXMuaXNSZWFkb25seSxcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiBPYmplY3QuYXNzaWduKGxpc3RlbmVycywge1xuICAgICAgICAgIGJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICAgIGlucHV0OiB0aGlzLm9uSW5wdXQsXG4gICAgICAgICAgZm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgfSksXG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzTm9kZSA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuTWVzc2FnZXMuY2FsbCh0aGlzKVxuICAgICAgY29uc3QgY291bnRlck5vZGUgPSB0aGlzLmdlbkNvdW50ZXIoKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fZGV0YWlscycsXG4gICAgICB9LCBbXG4gICAgICAgIG1lc3NhZ2VzTm9kZSxcbiAgICAgICAgY291bnRlck5vZGUsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuVGV4dEZpZWxkU2xvdCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fc2xvdCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy5wcmVmaXggPyB0aGlzLmdlbkFmZml4KCdwcmVmaXgnKSA6IG51bGwsXG4gICAgICAgIHRoaXMuZ2VuSW5wdXQoKSxcbiAgICAgICAgdGhpcy5zdWZmaXggPyB0aGlzLmdlbkFmZml4KCdzdWZmaXgnKSA6IG51bGwsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQWZmaXggKHR5cGU6ICdwcmVmaXgnIHwgJ3N1ZmZpeCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBgdi10ZXh0LWZpZWxkX18ke3R5cGV9YCxcbiAgICAgICAgcmVmOiB0eXBlLFxuICAgICAgfSwgdGhpc1t0eXBlXSlcbiAgICB9LFxuICAgIG9uQmx1ciAoZT86IEV2ZW50KSB7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICBlICYmIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJGVtaXQoJ2JsdXInLCBlKSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNEaXNhYmxlZCB8fCAhdGhpcy4kcmVmcy5pbnB1dCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgIH0sXG4gICAgb25Gb2N1cyAoZT86IEV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuaW5wdXQpIHJldHVyblxuXG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy4kcmVmcy5pbnB1dCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIGUgJiYgdGhpcy4kZW1pdCgnZm9jdXMnLCBlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25JbnB1dCAoZTogRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgdGhpcy5iYWRJbnB1dCA9IHRhcmdldC52YWxpZGl0eSAmJiB0YXJnZXQudmFsaWRpdHkuYmFkSW5wdXRcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIpIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuaW50ZXJuYWxWYWx1ZSlcblxuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlRG93biAoZTogRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgaW5wdXQgZnJvbSBiZWluZyBibHVycmVkXG4gICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuJHJlZnMuaW5wdXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgVklucHV0Lm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlRG93bi5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5oYXNNb3VzZURvd24pIHRoaXMuZm9jdXMoKVxuXG4gICAgICBWSW5wdXQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBzZXRMYWJlbFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMubGFiZWxXaWR0aCA9IHRoaXMuJHJlZnMubGFiZWxcbiAgICAgICAgPyBNYXRoLm1pbih0aGlzLiRyZWZzLmxhYmVsLnNjcm9sbFdpZHRoICogMC43NSArIDYsICh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudCkub2Zmc2V0V2lkdGggLSAyNClcbiAgICAgICAgOiAwXG4gICAgfSxcbiAgICBzZXRQcmVmaXhXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMucHJlZml4KSByZXR1cm5cblxuICAgICAgdGhpcy5wcmVmaXhXaWR0aCA9IHRoaXMuJHJlZnMucHJlZml4Lm9mZnNldFdpZHRoXG4gICAgfSxcbiAgICBzZXRQcmVwZW5kV2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkIHx8ICF0aGlzLiRyZWZzWydwcmVwZW5kLWlubmVyJ10pIHJldHVyblxuXG4gICAgICB0aGlzLnByZXBlbmRXaWR0aCA9IHRoaXMuJHJlZnNbJ3ByZXBlbmQtaW5uZXInXS5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgdHJ5QXV0b2ZvY3VzICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuYXV0b2ZvY3VzIHx8XG4gICAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaW5wdXQgfHxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgKSByZXR1cm4gZmFsc2VcblxuICAgICAgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICB1cGRhdGVWYWx1ZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBTZXRzIHZhbGlkYXRpb25TdGF0ZSBmcm9tIHZhbGlkYXRhYmxlXG4gICAgICB0aGlzLmhhc0NvbG9yID0gdmFsXG5cbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5sYXp5VmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5sYXp5VmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4vVlByb2dyZXNzTGluZWFyJ1xuXG5leHBvcnQgeyBWUHJvZ3Jlc3NMaW5lYXIgfVxuZXhwb3J0IGRlZmF1bHQgVlByb2dyZXNzTGluZWFyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ2NvbXBhcmFibGUnLFxuICBwcm9wczoge1xuICAgIHZhbHVlQ29tcGFyYXRvcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBkZWVwRXF1YWwsXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPHR5cGVvZiBkZWVwRXF1YWw+LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZW51LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vVlRoZW1lUHJvdmlkZXInXG5cbi8vIE1peGluc1xuaW1wb3J0IEFjdGl2YXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9hY3RpdmF0YWJsZSdcbmltcG9ydCBEZWxheWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2RlbGF5YWJsZSdcbmltcG9ydCBEZXBlbmRlbnQgZnJvbSAnLi4vLi4vbWl4aW5zL2RlcGVuZGVudCdcbmltcG9ydCBEZXRhY2hhYmxlIGZyb20gJy4uLy4uL21peGlucy9kZXRhY2hhYmxlJ1xuaW1wb3J0IE1lbnVhYmxlIGZyb20gJy4uLy4uL21peGlucy9tZW51YWJsZSdcbmltcG9ydCBSZXR1cm5hYmxlIGZyb20gJy4uLy4uL21peGlucy9yZXR1cm5hYmxlJ1xuaW1wb3J0IFJvdW5kYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91bmRhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlJ1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgcmVtb3ZlZCB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGtleUNvZGVzLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFZOb2RlRGF0YSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgRGVwZW5kZW50LFxuICBEZWxheWFibGUsXG4gIERldGFjaGFibGUsXG4gIE1lbnVhYmxlLFxuICBSZXR1cm5hYmxlLFxuICBSb3VuZGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIFRoZW1lYWJsZVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1tZW51JyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc0luTWVudTogdHJ1ZSxcbiAgICAgIC8vIFBhc3MgdGhlbWUgdGhyb3VnaCB0byBkZWZhdWx0IHNsb3RcbiAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgIH1cbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICAgIFJlc2l6ZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGF1dG86IEJvb2xlYW4sXG4gICAgY2xvc2VPbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUtleXM6IEJvb2xlYW4sXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgb2Zmc2V0WDogQm9vbGVhbixcbiAgICBvZmZzZXRZOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5PbkhvdmVyOiBCb29sZWFuLFxuICAgIG9yaWdpbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RvcCBsZWZ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ3YtbWVudS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWxjdWxhdGVkVG9wQXV0bzogMCxcbiAgICAgIGRlZmF1bHRPZmZzZXQ6IDgsXG4gICAgICBoYXNKdXN0Rm9jdXNlZDogZmFsc2UsXG4gICAgICBsaXN0SW5kZXg6IC0xLFxuICAgICAgcmVzaXplVGltZW91dDogMCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgIHRpbGVzOiBbXSBhcyBIVE1MRWxlbWVudFtdLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFjdGl2ZVRpbGUgKCk6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XVxuICAgIH0sXG4gICAgY2FsY3VsYXRlZExlZnQgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBtZW51V2lkdGggPSBNYXRoLm1heCh0aGlzLmRpbWVuc2lvbnMuY29udGVudC53aWR0aCwgcGFyc2VGbG9hdCh0aGlzLmNhbGN1bGF0ZWRNaW5XaWR0aCkpXG5cbiAgICAgIGlmICghdGhpcy5hdXRvKSByZXR1cm4gdGhpcy5jYWxjTGVmdChtZW51V2lkdGgpIHx8ICcwJ1xuXG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmNhbGNYT3ZlcmZsb3codGhpcy5jYWxjTGVmdEF1dG8oKSwgbWVudVdpZHRoKSkgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4SGVpZ2h0ICgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hdXRvXG4gICAgICAgID8gJzIwMHB4J1xuICAgICAgICA6IGNvbnZlcnRUb1VuaXQodGhpcy5tYXhIZWlnaHQpXG5cbiAgICAgIHJldHVybiBoZWlnaHQgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4V2lkdGggKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLm1heFdpZHRoKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRNaW5XaWR0aCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLm1pbldpZHRoKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMubWluV2lkdGgpIHx8ICcwJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWluKFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yLndpZHRoICtcbiAgICAgICAgTnVtYmVyKHRoaXMubnVkZ2VXaWR0aCkgK1xuICAgICAgICAodGhpcy5hdXRvID8gMTYgOiAwKSxcbiAgICAgICAgTWF0aC5tYXgodGhpcy5wYWdlV2lkdGggLSAyNCwgMClcbiAgICAgIClcblxuICAgICAgY29uc3QgY2FsY3VsYXRlZE1heFdpZHRoID0gaXNOYU4ocGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpKVxuICAgICAgICA/IG1pbldpZHRoXG4gICAgICAgIDogcGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpXG5cbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KE1hdGgubWluKFxuICAgICAgICBjYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIG1pbldpZHRoXG4gICAgICApKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRUb3AgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCB0b3AgPSAhdGhpcy5hdXRvXG4gICAgICAgID8gdGhpcy5jYWxjVG9wKClcbiAgICAgICAgOiBjb252ZXJ0VG9Vbml0KHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNhbGN1bGF0ZWRUb3BBdXRvKSlcblxuICAgICAgcmV0dXJuIHRvcCB8fCAnMCdcbiAgICB9LFxuICAgIGhhc0NsaWNrYWJsZVRpbGVzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudGlsZXMuZmluZCh0aWxlID0+IHRpbGUudGFiSW5kZXggPiAtMSkpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuY2FsY3VsYXRlZE1heEhlaWdodCxcbiAgICAgICAgbWluV2lkdGg6IHRoaXMuY2FsY3VsYXRlZE1pbldpZHRoLFxuICAgICAgICBtYXhXaWR0aDogdGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIHRvcDogdGhpcy5jYWxjdWxhdGVkVG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLmNhbGN1bGF0ZWRMZWZ0LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICB6SW5kZXg6IHRoaXMuekluZGV4IHx8IHRoaXMuYWN0aXZlWkluZGV4LFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZSAodmFsKSB7XG4gICAgICBpZiAoIXZhbCkgdGhpcy5saXN0SW5kZXggPSAtMVxuICAgIH0sXG4gICAgaXNDb250ZW50QWN0aXZlICh2YWwpIHtcbiAgICAgIHRoaXMuaGFzSnVzdEZvY3VzZWQgPSB2YWxcbiAgICB9LFxuICAgIGxpc3RJbmRleCAobmV4dCwgcHJldikge1xuICAgICAgaWYgKG5leHQgaW4gdGhpcy50aWxlcykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1tuZXh0XVxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zY3JvbGxUb3AgPSB0aWxlLm9mZnNldFRvcCAtIHRpbGUuY2xpZW50SGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHByZXYgaW4gdGhpcy50aWxlcyAmJlxuICAgICAgICB0aGlzLnRpbGVzW3ByZXZdLmNsYXNzTGlzdC5yZW1vdmUoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnZnVsbC13aWR0aCcpKSB7XG4gICAgICByZW1vdmVkKCdmdWxsLXdpZHRoJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLmNhbGxBY3RpdmF0ZSgpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucyBvZiBtZW51XG4gICAgICAvLyBhbmQgaXRzIGFjdGl2YXRvclxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICAgIC8vIFN0YXJ0IHRoZSB0cmFuc2l0aW9uXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAvLyBPbmNlIHRyYW5zaXRpb25pbmcsIGNhbGN1bGF0ZSBzY3JvbGwgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICB0aGlzLnN0YXJ0VHJhbnNpdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFRvcEF1dG8gPSB0aGlzLmNhbGNUb3BBdXRvKClcbiAgICAgICAgICAgIHRoaXMuYXV0byAmJiAodGhpcy4kcmVmcy5jb250ZW50LnNjcm9sbFRvcCA9IHRoaXMuY2FsY1Njcm9sbFBvc2l0aW9uKCkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNhbGNTY3JvbGxQb3NpdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSAkZWwucXVlcnlTZWxlY3RvcignLnYtbGlzdC1pdGVtLS1hY3RpdmUnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgbWF4U2Nyb2xsVG9wID0gJGVsLnNjcm9sbEhlaWdodCAtICRlbC5vZmZzZXRIZWlnaHRcblxuICAgICAgcmV0dXJuIGFjdGl2ZVRpbGVcbiAgICAgICAgPyBNYXRoLm1pbihtYXhTY3JvbGxUb3AsIE1hdGgubWF4KDAsIGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gJGVsLm9mZnNldEhlaWdodCAvIDIgKyBhY3RpdmVUaWxlLm9mZnNldEhlaWdodCAvIDIpKVxuICAgICAgICA6ICRlbC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGNhbGNMZWZ0QXV0byAoKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvci5sZWZ0IC0gdGhpcy5kZWZhdWx0T2Zmc2V0ICogMilcbiAgICB9LFxuICAgIGNhbGNUb3BBdXRvICgpIHtcbiAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgY29uc3QgYWN0aXZlVGlsZSA9ICRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0tLWFjdGl2ZScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuXG4gICAgICBpZiAoIWFjdGl2ZVRpbGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vZmZzZXRZIHx8ICFhY3RpdmVUaWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IEFycmF5LmZyb20odGhpcy50aWxlcykuaW5kZXhPZihhY3RpdmVUaWxlKVxuXG4gICAgICBjb25zdCB0aWxlRGlzdGFuY2VGcm9tTWVudVRvcCA9IGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gdGhpcy5jYWxjU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgY29uc3QgZmlyc3RUaWxlT2Zmc2V0VG9wID0gKCRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0nKSBhcyBIVE1MRWxlbWVudCkub2Zmc2V0VG9wXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wIC0gdGlsZURpc3RhbmNlRnJvbU1lbnVUb3AgLSBmaXJzdFRpbGVPZmZzZXRUb3AgLSAxXG4gICAgfSxcbiAgICBjaGFuZ2VMaXN0SW5kZXggKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIC8vIEZvciBpbmZpbml0ZSBzY3JvbGwgYW5kIGF1dG9jb21wbGV0ZSwgcmUtZXZhbHVhdGUgY2hpbGRyZW5cbiAgICAgIHRoaXMuZ2V0VGlsZXMoKVxuXG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgIXRoaXMuaGFzQ2xpY2thYmxlVGlsZXMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5kb3duKSB7XG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLnVwKSB7XG4gICAgICAgIHRoaXMucHJldlRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyICYmIHRoaXMubGlzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XS5jbGljaygpXG4gICAgICB9IGVsc2UgeyByZXR1cm4gfVxuICAgICAgLy8gT25lIG9mIHRoZSBjb25kaXRpb25zIHdhcyBtZXQsIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKCMyOTg4KVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSxcbiAgICBjbG9zZUNvbmRpdGlvbmFsIChlOiBFdmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgIXRoaXMuX2lzRGVzdHJveWVkICYmXG4gICAgICAgIHRoaXMuY2xvc2VPbkNsaWNrICYmXG4gICAgICAgICF0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnModGFyZ2V0KVxuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yQXR0cmlidXRlcyAoKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckF0dHJpYnV0ZXMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVUaWxlICYmIHRoaXMuYWN0aXZlVGlsZS5pZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IHRoaXMuYWN0aXZlVGlsZS5pZCxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlc1xuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IE1lbnVhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JMaXN0ZW5lcnMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZUtleXMpIHtcbiAgICAgICAgbGlzdGVuZXJzLmtleWRvd24gPSB0aGlzLm9uS2V5RG93blxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZW5Db250ZW50KClcblxuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBjb250ZW50XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sIFtjb250ZW50XSlcbiAgICB9LFxuICAgIGdlbkRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10ge1xuICAgICAgY29uc3QgZGlyZWN0aXZlczogVk5vZGVEaXJlY3RpdmVbXSA9IFt7XG4gICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuaXNDb250ZW50QWN0aXZlLFxuICAgICAgfV1cblxuICAgICAgLy8gRG8gbm90IGFkZCBjbGljayBvdXRzaWRlIGZvciBob3ZlciBtZW51XG4gICAgICBpZiAoIXRoaXMub3Blbk9uSG92ZXIgJiYgdGhpcy5jbG9zZU9uQ2xpY2spIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnY2xpY2stb3V0c2lkZScsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0sXG4gICAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgICAgICBpbmNsdWRlOiAoKSA9PiBbdGhpcy4kZWwsIC4uLnRoaXMuZ2V0T3BlbkRlcGVuZGVudEVsZW1lbnRzKCldLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RpdmVzXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLnRoaXMuZ2V0U2NvcGVJZEF0dHJzKCksXG4gICAgICAgICAgcm9sZTogJ3JvbGUnIGluIHRoaXMuJGF0dHJzID8gdGhpcy4kYXR0cnMucm9sZSA6ICdtZW51JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIC4uLnRoaXMucm9vdFRoZW1lQ2xhc3NlcyxcbiAgICAgICAgICAuLi50aGlzLnJvdW5kZWRDbGFzc2VzLFxuICAgICAgICAgICd2LW1lbnVfX2NvbnRlbnQtLWF1dG8nOiB0aGlzLmF1dG8sXG4gICAgICAgICAgJ3YtbWVudV9fY29udGVudC0tZml4ZWQnOiB0aGlzLmFjdGl2YXRvckZpeGVkLFxuICAgICAgICAgIG1lbnVhYmxlX19jb250ZW50X19hY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICAgW3RoaXMuY29udGVudENsYXNzLnRyaW0oKV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5nZW5EaXJlY3RpdmVzKCksXG4gICAgICAgIHJlZjogJ2NvbnRlbnQnLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlT25Db250ZW50Q2xpY2spIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIH0sXG4gICAgICB9IGFzIFZOb2RlRGF0YVxuXG4gICAgICBpZiAodGhpcy4kbGlzdGVuZXJzLnNjcm9sbCkge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLnNjcm9sbCA9IHRoaXMuJGxpc3RlbmVycy5zY3JvbGxcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMub3Blbk9uSG92ZXIpIHtcbiAgICAgICAgb3B0aW9ucy5vbiA9IG9wdGlvbnMub24gfHwge31cbiAgICAgICAgb3B0aW9ucy5vbi5tb3VzZWVudGVyID0gdGhpcy5tb3VzZUVudGVySGFuZGxlclxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcGVuT25Ib3Zlcikge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLm1vdXNlbGVhdmUgPSB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCBvcHRpb25zLCB0aGlzLmdldENvbnRlbnRTbG90KCkpXG4gICAgfSxcbiAgICBnZXRUaWxlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuY29udGVudCkgcmV0dXJuXG5cbiAgICAgIHRoaXMudGlsZXMgPSBBcnJheS5mcm9tKHRoaXMuJHJlZnMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1saXN0LWl0ZW0nKSlcbiAgICB9LFxuICAgIG1vdXNlRW50ZXJIYW5kbGVyICgpIHtcbiAgICAgIHRoaXMucnVuRGVsYXkoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0p1c3RGb2N1c2VkKSByZXR1cm5cblxuICAgICAgICB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIG1vdXNlTGVhdmVIYW5kbGVyIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgcmUtYWN0aXZhdGlvblxuICAgICAgdGhpcy5ydW5EZWxheSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkgcmV0dXJuXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgICAgICB0aGlzLmNhbGxEZWFjdGl2YXRlKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBuZXh0VGlsZSAoKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleCArIDFdXG5cbiAgICAgIGlmICghdGlsZSkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgICB0aGlzLmxpc3RJbmRleCA9IC0xXG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RJbmRleCsrXG4gICAgICBpZiAodGlsZS50YWJJbmRleCA9PT0gLTEpIHRoaXMubmV4dFRpbGUoKVxuICAgIH0sXG4gICAgcHJldlRpbGUgKCkge1xuICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXggLSAxXVxuXG4gICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5saXN0SW5kZXggPSB0aGlzLnRpbGVzLmxlbmd0aFxuICAgICAgICB0aGlzLnByZXZUaWxlKClcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0SW5kZXgtLVxuICAgICAgaWYgKHRpbGUudGFiSW5kZXggPT09IC0xKSB0aGlzLnByZXZUaWxlKClcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGRlcGVuZGVudCBlbGVtZW50cyB0byBjbG9zZSBmaXJzdFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvciA9IHRoaXMuZ2V0QWN0aXZhdG9yKClcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gYWN0aXZhdG9yICYmIGFjdGl2YXRvci5mb2N1cygpKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgW2tleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duXS5pbmNsdWRlcyhlLmtleUNvZGUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gQWxsb3cgZm9yIGlzQWN0aXZlIHdhdGNoZXIgdG8gZ2VuZXJhdGUgdGlsZSBsaXN0XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLmNoYW5nZUxpc3RJbmRleChlKSlcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIHNjcmVlbiByZXNpemVcbiAgICAgIC8vIGFuZCBvcmllbnRhdGlvbiBjaGFuZ2VcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcblxuICAgICAgLy8gV2hlbiByZXNpemluZyB0byBhIHNtYWxsZXIgd2lkdGhcbiAgICAgIC8vIGNvbnRlbnQgd2lkdGggaXMgZXZhbHVhdGVkIGJlZm9yZVxuICAgICAgLy8gdGhlIG5ldyBhY3RpdmF0b3Igd2lkdGggaGFzIGJlZW5cbiAgICAgIC8vIHNldCwgY2F1c2luZyBpdCB0byBub3Qgc2l6ZSBwcm9wZXJseVxuICAgICAgLy8gaGFja3kgYnV0IHdpbGwgcmV2aXNpdCBpbiB0aGUgZnV0dXJlXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KVxuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy51cGRhdGVEaW1lbnNpb25zLCAxMDApXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tZW51JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LW1lbnUtLWF0dGFjaGVkJzpcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gJycgfHxcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gdHJ1ZSB8fFxuICAgICAgICAgIHRoaXMuYXR0YWNoID09PSAnYXR0YWNoJyxcbiAgICAgIH0sXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBhcmc6ICc1MDAnLFxuICAgICAgICBuYW1lOiAncmVzaXplJyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25SZXNpemUsXG4gICAgICB9XSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgIXRoaXMuYWN0aXZhdG9yICYmIHRoaXMuZ2VuQWN0aXZhdG9yKCksXG4gICAgICB0aGlzLnNob3dMYXp5Q29udGVudCgoKSA9PiBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRoZW1lUHJvdmlkZXIsIHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIFt0aGlzLmdlblRyYW5zaXRpb24oKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IFZNZW51IGZyb20gJy4vVk1lbnUnXG5cbmV4cG9ydCB7IFZNZW51IH1cbmV4cG9ydCBkZWZhdWx0IFZNZW51XG4iLCIvLyBNaXhpbnNcbmltcG9ydCBQb3NpdGlvbmFibGUgZnJvbSAnLi4vcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFN0YWNrYWJsZSBmcm9tICcuLi9zdGFja2FibGUnXG5pbXBvcnQgQWN0aXZhdGFibGUgZnJvbSAnLi4vYWN0aXZhdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgU3RhY2thYmxlLFxuICBQb3NpdGlvbmFibGUsXG4gIEFjdGl2YXRhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICBhdHRhY2g6IGJvb2xlYW4gfCBzdHJpbmcgfCBFbGVtZW50XG4gIG9mZnNldFk6IGJvb2xlYW5cbiAgb2Zmc2V0WDogYm9vbGVhblxuICAkcmVmczoge1xuICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50XG4gICAgYWN0aXZhdG9yOiBIVE1MRWxlbWVudFxuICB9XG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdtZW51YWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBhbGxvd092ZXJmbG93OiBCb29sZWFuLFxuICAgIGxpZ2h0OiBCb29sZWFuLFxuICAgIGRhcms6IEJvb2xlYW4sXG4gICAgbWF4V2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBtaW5XaWR0aDogW051bWJlciwgU3RyaW5nXSxcbiAgICBudWRnZUJvdHRvbToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZUxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VSaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVRvcDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVdpZHRoOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG9mZnNldE92ZXJmbG93OiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiBCb29sZWFuLFxuICAgIHBvc2l0aW9uWDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHBvc2l0aW9uWToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGFic29sdXRlWDogMCxcbiAgICBhYnNvbHV0ZVk6IDAsXG4gICAgYWN0aXZhdGVkQnk6IG51bGwgYXMgRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGFjdGl2YXRvckZpeGVkOiBmYWxzZSxcbiAgICBkaW1lbnNpb25zOiB7XG4gICAgICBhY3RpdmF0b3I6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBvZmZzZXRUb3A6IDAsXG4gICAgICAgIHNjcm9sbEhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0VG9wOiAwLFxuICAgICAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaGFzSnVzdEZvY3VzZWQ6IGZhbHNlLFxuICAgIGhhc1dpbmRvdzogZmFsc2UsXG4gICAgaW5wdXRBY3RpdmF0b3I6IGZhbHNlLFxuICAgIGlzQ29udGVudEFjdGl2ZTogZmFsc2UsXG4gICAgcGFnZVdpZHRoOiAwLFxuICAgIHBhZ2VZT2Zmc2V0OiAwLFxuICAgIHN0YWNrQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQtLWFjdGl2ZScsXG4gICAgc3RhY2tNaW5aSW5kZXg6IDYsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRMZWZ0ICgpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2YXRvckxlZnQgPSAodGhpcy5hdHRhY2ggIT09IGZhbHNlID8gYS5vZmZzZXRMZWZ0IDogYS5sZWZ0KSB8fCAwXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWF4KGEud2lkdGgsIGMud2lkdGgpXG4gICAgICBsZXQgbGVmdCA9IDBcbiAgICAgIGxlZnQgKz0gdGhpcy5sZWZ0ID8gYWN0aXZhdG9yTGVmdCAtIChtaW5XaWR0aCAtIGEud2lkdGgpIDogYWN0aXZhdG9yTGVmdFxuICAgICAgaWYgKHRoaXMub2Zmc2V0WCkge1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IGlzTmFOKE51bWJlcih0aGlzLm1heFdpZHRoKSlcbiAgICAgICAgICA/IGEud2lkdGhcbiAgICAgICAgICA6IE1hdGgubWluKGEud2lkdGgsIE51bWJlcih0aGlzLm1heFdpZHRoKSlcblxuICAgICAgICBsZWZ0ICs9IHRoaXMubGVmdCA/IC1tYXhXaWR0aCA6IGEud2lkdGhcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm51ZGdlTGVmdCkgbGVmdCAtPSBwYXJzZUludCh0aGlzLm51ZGdlTGVmdClcbiAgICAgIGlmICh0aGlzLm51ZGdlUmlnaHQpIGxlZnQgKz0gcGFyc2VJbnQodGhpcy5udWRnZVJpZ2h0KVxuXG4gICAgICByZXR1cm4gbGVmdFxuICAgIH0sXG4gICAgY29tcHV0ZWRUb3AgKCkge1xuICAgICAgY29uc3QgYSA9IHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3JcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmRpbWVuc2lvbnMuY29udGVudFxuICAgICAgbGV0IHRvcCA9IDBcblxuICAgICAgaWYgKHRoaXMudG9wKSB0b3AgKz0gYS5oZWlnaHQgLSBjLmhlaWdodFxuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgdG9wICs9IGEub2Zmc2V0VG9wXG4gICAgICBlbHNlIHRvcCArPSBhLnRvcCArIHRoaXMucGFnZVlPZmZzZXRcbiAgICAgIGlmICh0aGlzLm9mZnNldFkpIHRvcCArPSB0aGlzLnRvcCA/IC1hLmhlaWdodCA6IGEuaGVpZ2h0XG4gICAgICBpZiAodGhpcy5udWRnZVRvcCkgdG9wIC09IHBhcnNlSW50KHRoaXMubnVkZ2VUb3ApXG4gICAgICBpZiAodGhpcy5udWRnZUJvdHRvbSkgdG9wICs9IHBhcnNlSW50KHRoaXMubnVkZ2VCb3R0b20pXG5cbiAgICAgIHJldHVybiB0b3BcbiAgICB9LFxuICAgIGhhc0FjdGl2YXRvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLiRzY29wZWRTbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLmFjdGl2YXRvciB8fCAhIXRoaXMuaW5wdXRBY3RpdmF0b3JcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZGlzYWJsZWQgKHZhbCkge1xuICAgICAgdmFsICYmIHRoaXMuY2FsbERlYWN0aXZhdGUoKVxuICAgIH0sXG4gICAgaXNBY3RpdmUgKHZhbCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVyblxuXG4gICAgICB2YWwgPyB0aGlzLmNhbGxBY3RpdmF0ZSgpIDogdGhpcy5jYWxsRGVhY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBwb3NpdGlvblg6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgICBwb3NpdGlvblk6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy5oYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhYnNvbHV0ZVBvc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uWCB8fCB0aGlzLmFic29sdXRlWCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb25YIHx8IHRoaXMuYWJzb2x1dGVYLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZhdGUgKCkge30sXG4gICAgY2FsY0xlZnQgKG1lbnVXaWR0aDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmF0dGFjaCAhPT0gZmFsc2VcbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkTGVmdFxuICAgICAgICA6IHRoaXMuY2FsY1hPdmVyZmxvdyh0aGlzLmNvbXB1dGVkTGVmdCwgbWVudVdpZHRoKSlcbiAgICB9LFxuICAgIGNhbGNUb3AgKCkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5hdHRhY2ggIT09IGZhbHNlXG4gICAgICAgID8gdGhpcy5jb21wdXRlZFRvcFxuICAgICAgICA6IHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNvbXB1dGVkVG9wKSlcbiAgICB9LFxuICAgIGNhbGNYT3ZlcmZsb3cgKGxlZnQ6IG51bWJlciwgbWVudVdpZHRoOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHhPdmVyZmxvdyA9IGxlZnQgKyBtZW51V2lkdGggLSB0aGlzLnBhZ2VXaWR0aCArIDEyXG5cbiAgICAgIGlmICgoIXRoaXMubGVmdCB8fCB0aGlzLnJpZ2h0KSAmJiB4T3ZlcmZsb3cgPiAwKSB7XG4gICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0IC0geE92ZXJmbG93LCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIDEyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVmdCArIHRoaXMuZ2V0T2Zmc2V0TGVmdCgpXG4gICAgfSxcbiAgICBjYWxjWU92ZXJmbG93ICh0b3A6IG51bWJlcikge1xuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KClcbiAgICAgIGNvbnN0IHRvVG9wID0gdGhpcy5wYWdlWU9mZnNldCArIGRvY3VtZW50SGVpZ2h0XG4gICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnQuaGVpZ2h0XG4gICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRvcCArIGNvbnRlbnRIZWlnaHRcbiAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSB0b1RvcCA8IHRvdGFsSGVpZ2h0XG5cbiAgICAgIC8vIElmIG92ZXJmbG93aW5nIGJvdHRvbSBhbmQgb2Zmc2V0XG4gICAgICAvLyBUT0RPOiBzZXQgJ2JvdHRvbScgcG9zaXRpb24gaW5zdGVhZCBvZiAndG9wJ1xuICAgICAgaWYgKGlzT3ZlcmZsb3dpbmcgJiZcbiAgICAgICAgdGhpcy5vZmZzZXRPdmVyZmxvdyAmJlxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGVub3VnaCByb29tIHRvIG9mZnNldFxuICAgICAgICAvLyB0aGUgb3ZlcmZsb3csIGRvbid0IG9mZnNldFxuICAgICAgICBhY3RpdmF0b3IudG9wID4gY29udGVudEhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAoYWN0aXZhdG9yLnRvcCAtIGNvbnRlbnRIZWlnaHQpXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyBib3R0b21cbiAgICAgIH0gZWxzZSBpZiAoaXNPdmVyZmxvd2luZyAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRvVG9wIC0gY29udGVudEhlaWdodCAtIDEyXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyB0b3BcbiAgICAgIH0gZWxzZSBpZiAodG9wIDwgdGhpcy5wYWdlWU9mZnNldCAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAxMlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9wIDwgMTIgPyAxMiA6IHRvcFxuICAgIH0sXG4gICAgY2FsbEFjdGl2YXRlICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVyblxuXG4gICAgICB0aGlzLmFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNhbGxEZWFjdGl2YXRlICgpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gZmFsc2VcblxuICAgICAgdGhpcy5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNoZWNrRm9yUGFnZVlPZmZzZXQgKCkge1xuICAgICAgaWYgKHRoaXMuaGFzV2luZG93KSB7XG4gICAgICAgIHRoaXMucGFnZVlPZmZzZXQgPSB0aGlzLmFjdGl2YXRvckZpeGVkID8gMCA6IHRoaXMuZ2V0T2Zmc2V0VG9wKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrQWN0aXZhdG9yRml4ZWQgKCkge1xuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgcmV0dXJuXG4gICAgICBsZXQgZWwgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSBmYWxzZVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSAoKSB7fSxcbiAgICBnZW5BY3RpdmF0b3JMaXN0ZW5lcnMgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckxpc3RlbmVycy5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IG9uQ2xpY2sgPSBsaXN0ZW5lcnMuY2xpY2tcblxuICAgICAgbGlzdGVuZXJzLmNsaWNrID0gKGU6IE1vdXNlRXZlbnQgJiBLZXlib2FyZEV2ZW50ICYgRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcGVuT25DbGljaykge1xuICAgICAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hYnNvbHV0ZVggPSBlLmNsaWVudFhcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVkgPSBlLmNsaWVudFlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVyc1xuICAgIH0sXG4gICAgZ2V0SW5uZXJIZWlnaHQgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfSxcbiAgICBnZXRPZmZzZXRMZWZ0ICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICB9LFxuICAgIGdldE9mZnNldFRvcCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGdldFJvdW5kZWRCb3VuZGVkQ2xpZW50UmVjdCAoZWw6IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGgucm91bmQocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5yb3VuZChyZWN0LnJpZ2h0KSxcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQocmVjdC53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChyZWN0LmhlaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWFzdXJlIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICghZWwgfHwgIXRoaXMuaGFzV2luZG93KSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSb3VuZGVkQm91bmRlZENsaWVudFJlY3QoZWwpXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIGFjdGl2YXRvciBtYXJnaW5cbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcblxuICAgICAgICByZWN0LmxlZnQgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0ISlcbiAgICAgICAgcmVjdC50b3AgPSBwYXJzZUludChzdHlsZS5tYXJnaW5Ub3AhKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdFxuICAgIH0sXG4gICAgc25lYWtQZWVrIChjYjogKCkgPT4gdm9pZCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcblxuICAgICAgICBpZiAoIWVsIHx8IGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgIGNiKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICBjYigpXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdGFydFRyYW5zaXRpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbnRlbnRBY3RpdmUgPSB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdGhpcy5pc0FjdGl2ZVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgdXBkYXRlRGltZW5zaW9ucyAoKSB7XG4gICAgICB0aGlzLmhhc1dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICB0aGlzLmNoZWNrQWN0aXZhdG9yRml4ZWQoKVxuICAgICAgdGhpcy5jaGVja0ZvclBhZ2VZT2Zmc2V0KClcbiAgICAgIHRoaXMucGFnZVdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbnM6IGFueSA9IHtcbiAgICAgICAgYWN0aXZhdG9yOiB7IC4uLnRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3IgfSxcbiAgICAgICAgY29udGVudDogeyAuLi50aGlzLmRpbWVuc2lvbnMuY29udGVudCB9LFxuICAgICAgfVxuXG4gICAgICAvLyBBY3RpdmF0b3Igc2hvdWxkIGFscmVhZHkgYmUgc2hvd25cbiAgICAgIGlmICghdGhpcy5oYXNBY3RpdmF0b3IgfHwgdGhpcy5hYnNvbHV0ZSkge1xuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICAgIGlmICghYWN0aXZhdG9yKSByZXR1cm5cblxuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMubWVhc3VyZShhY3RpdmF0b3IpXG4gICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldExlZnQgPSBhY3RpdmF0b3Iub2Zmc2V0TGVmdFxuICAgICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgY3NzIHBhZGRpbmcgY2F1c2luZyB0aGluZ3MgdG8gbm90IGxpbmUgdXBcbiAgICAgICAgICAvLyB0aGlzIGlzIG1vc3RseSBmb3Igdi1hdXRvY29tcGxldGUsIGhvcGVmdWxseSBpdCB3b24ndCBicmVhayBhbnl0aGluZ1xuICAgICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldFRvcCA9IGFjdGl2YXRvci5vZmZzZXRUb3BcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRUb3AgPSAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBhbmQgaGlkZSB0byBnZXQgZGltZW5zaW9uc1xuICAgICAgdGhpcy5zbmVha1BlZWsoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQgJiYgKGRpbWVuc2lvbnMuY29udGVudCA9IHRoaXMubWVhc3VyZSh0aGlzLiRyZWZzLmNvbnRlbnQpKVxuXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZBcHBCYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZUb29sYmFyIGZyb20gJy4uL1ZUb29sYmFyL1ZUb29sYmFyJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2Nyb2xsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBBcHBsaWNhdGlvbmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2FwcGxpY2F0aW9uYWJsZSdcbmltcG9ydCBTY3JvbGxhYmxlIGZyb20gJy4uLy4uL21peGlucy9zY3JvbGxhYmxlJ1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWVG9vbGJhcixcbiAgU2Nyb2xsYWJsZSxcbiAgU1NSQm9vdGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIEFwcGxpY2F0aW9uYWJsZSgndG9wJywgW1xuICAgICdjbGlwcGVkTGVmdCcsXG4gICAgJ2NsaXBwZWRSaWdodCcsXG4gICAgJ2NvbXB1dGVkSGVpZ2h0JyxcbiAgICAnaW52ZXJ0ZWRTY3JvbGwnLFxuICAgICdpc0V4dGVuZGVkJyxcbiAgICAnaXNQcm9taW5lbnQnLFxuICAgICd2YWx1ZScsXG4gIF0pXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWFwcC1iYXInLFxuXG4gIGRpcmVjdGl2ZXM6IHsgU2Nyb2xsIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBjbGlwcGVkTGVmdDogQm9vbGVhbixcbiAgICBjbGlwcGVkUmlnaHQ6IEJvb2xlYW4sXG4gICAgY29sbGFwc2VPblNjcm9sbDogQm9vbGVhbixcbiAgICBlbGV2YXRlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgZmFkZUltZ09uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGhpZGVPblNjcm9sbDogQm9vbGVhbixcbiAgICBpbnZlcnRlZFNjcm9sbDogQm9vbGVhbixcbiAgICBzY3JvbGxPZmZTY3JlZW46IEJvb2xlYW4sXG4gICAgc2hyaW5rT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLnZhbHVlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFwcGxpY2F0aW9uUHJvcGVydHkgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gIXRoaXMuYm90dG9tID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgIH0sXG4gICAgY2FuU2Nyb2xsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFNjcm9sbGFibGUub3B0aW9ucy5jb21wdXRlZC5jYW5TY3JvbGwuY2FsbCh0aGlzKSAmJlxuICAgICAgICAoXG4gICAgICAgICAgdGhpcy5pbnZlcnRlZFNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuZWxldmF0ZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5oaWRlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmlzQm9vdGVkIHx8XG4gICAgICAgICAgLy8gSWYgZmFsc2V5LCB1c2VyIGhhcyBwcm92aWRlZCBhblxuICAgICAgICAgIC8vIGV4cGxpY2l0IHZhbHVlIHdoaWNoIHNob3VsZFxuICAgICAgICAgIC8vIG92ZXJ3cml0ZSBhbnl0aGluZyB3ZSBkb1xuICAgICAgICAgICF0aGlzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdG9vbGJhci0tY29sbGFwc2UnOiB0aGlzLmNvbGxhcHNlIHx8IHRoaXMuY29sbGFwc2VPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhcic6IHRydWUsXG4gICAgICAgICd2LWFwcC1iYXItLWNsaXBwZWQnOiB0aGlzLmNsaXBwZWRMZWZ0IHx8IHRoaXMuY2xpcHBlZFJpZ2h0LFxuICAgICAgICAndi1hcHAtYmFyLS1mYWRlLWltZy1vbi1zY3JvbGwnOiB0aGlzLmZhZGVJbWdPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZWxldmF0ZS1vbi1zY3JvbGwnOiB0aGlzLmVsZXZhdGVPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZml4ZWQnOiAhdGhpcy5hYnNvbHV0ZSAmJiAodGhpcy5hcHAgfHwgdGhpcy5maXhlZCksXG4gICAgICAgICd2LWFwcC1iYXItLWhpZGUtc2hhZG93JzogdGhpcy5oaWRlU2hhZG93LFxuICAgICAgICAndi1hcHAtYmFyLS1pcy1zY3JvbGxlZCc6IHRoaXMuY3VycmVudFNjcm9sbCA+IDAsXG4gICAgICAgICd2LWFwcC1iYXItLXNocmluay1vbi1zY3JvbGwnOiB0aGlzLnNocmlua09uU2Nyb2xsLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb250ZW50SGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLnNocmlua09uU2Nyb2xsKSByZXR1cm4gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbnRlbnRIZWlnaHQuY2FsbCh0aGlzKVxuXG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbXB1dGVkT3JpZ2luYWxIZWlnaHRcblxuICAgICAgY29uc3QgbWluID0gdGhpcy5kZW5zZSA/IDQ4IDogNTZcbiAgICAgIGNvbnN0IG1heCA9IGhlaWdodFxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heCAtIG1pblxuICAgICAgY29uc3QgaXRlcmF0aW9uID0gZGlmZmVyZW5jZSAvIHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY3VycmVudFNjcm9sbCAqIGl0ZXJhdGlvblxuXG4gICAgICByZXR1cm4gTWF0aC5tYXgobWluLCBtYXggLSBvZmZzZXQpXG4gICAgfSxcbiAgICBjb21wdXRlZEZvbnRTaXplICgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF0aGlzLmlzUHJvbWluZW50KSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuZGVuc2UgPyA5NiA6IDEyOFxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heCAtIHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG4gICAgICBjb25zdCBpbmNyZW1lbnQgPSAwLjAwMzQ3XG5cbiAgICAgIC8vIDEuNXJlbSB0byBhIG1pbmltdW0gb2YgMS4yNXJlbVxuICAgICAgcmV0dXJuIE51bWJlcigoMS41MCAtIGRpZmZlcmVuY2UgKiBpbmNyZW1lbnQpLnRvRml4ZWQoMikpXG4gICAgfSxcbiAgICBjb21wdXRlZExlZnQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwIHx8IHRoaXMuY2xpcHBlZExlZnQpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLmxlZnRcbiAgICB9LFxuICAgIGNvbXB1dGVkTWFyZ2luVG9wICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb24uYmFyXG4gICAgfSxcbiAgICBjb21wdXRlZE9wYWNpdHkgKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXRoaXMuZmFkZUltZ09uU2Nyb2xsKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IG9wYWNpdHkgPSBNYXRoLm1heChcbiAgICAgICAgKHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQgLSB0aGlzLmN1cnJlbnRTY3JvbGwpIC8gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCxcbiAgICAgICAgMFxuICAgICAgKVxuXG4gICAgICByZXR1cm4gTnVtYmVyKHBhcnNlRmxvYXQob3BhY2l0eSkudG9GaXhlZCgyKSlcbiAgICB9LFxuICAgIGNvbXB1dGVkT3JpZ2luYWxIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBsZXQgaGVpZ2h0ID0gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbnRlbnRIZWlnaHQuY2FsbCh0aGlzKVxuICAgICAgaWYgKHRoaXMuaXNFeHRlbmRlZCkgaGVpZ2h0ICs9IHBhcnNlSW50KHRoaXMuZXh0ZW5zaW9uSGVpZ2h0KVxuICAgICAgcmV0dXJuIGhlaWdodFxuICAgIH0sXG4gICAgY29tcHV0ZWRSaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHAgfHwgdGhpcy5jbGlwcGVkUmlnaHQpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLnJpZ2h0XG4gICAgfSxcbiAgICBjb21wdXRlZFNjcm9sbFRocmVzaG9sZCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLnNjcm9sbFRocmVzaG9sZCkgcmV0dXJuIE51bWJlcih0aGlzLnNjcm9sbFRocmVzaG9sZClcblxuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRPcmlnaW5hbEhlaWdodCAtICh0aGlzLmRlbnNlID8gNDggOiA1NilcbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNmb3JtICgpOiBudW1iZXIge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TY3JvbGwgfHxcbiAgICAgICAgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsICYmIHRoaXMuY3VycmVudFNjcm9sbCA9PT0gMCAmJiB0aGlzLmlzQWN0aXZlKVxuICAgICAgKSByZXR1cm4gMFxuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgcmV0dXJuIDBcblxuICAgICAgY29uc3Qgc2Nyb2xsT2ZmU2NyZWVuID0gdGhpcy5zY3JvbGxPZmZTY3JlZW5cbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkSGVpZ2h0XG4gICAgICAgIDogdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID8gc2Nyb2xsT2ZmU2NyZWVuIDogLXNjcm9sbE9mZlNjcmVlblxuICAgIH0sXG4gICAgaGlkZVNoYWRvdyAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5lbGV2YXRlT25TY3JvbGwgJiYgdGhpcy5pc0V4dGVuZGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZXZhdGVPblNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsID09PSAwIHx8XG4gICAgICAgICAgdGhpcy5jb21wdXRlZFRyYW5zZm9ybSA8IDBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIXRoaXMuaXNFeHRlbmRlZCB8fFxuICAgICAgICB0aGlzLnNjcm9sbE9mZlNjcmVlblxuICAgICAgKSAmJiB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtICE9PSAwXG4gICAgfSxcbiAgICBpc0NvbGxhcHNlZCAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAoIXRoaXMuY29sbGFwc2VPblNjcm9sbCkge1xuICAgICAgICByZXR1cm4gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5pc0NvbGxhcHNlZC5jYWxsKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPiAwXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmlzUHJvbWluZW50LmNhbGwodGhpcykgfHxcbiAgICAgICAgdGhpcy5zaHJpbmtPblNjcm9sbFxuICAgICAgKVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5zdHlsZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgZm9udFNpemU6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZEZvbnRTaXplLCAncmVtJyksXG4gICAgICAgIG1hcmdpblRvcDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkTWFyZ2luVG9wKSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke2NvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZFRyYW5zZm9ybSl9KWAsXG4gICAgICAgIGxlZnQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZExlZnQpLFxuICAgICAgICByaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkUmlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBjYW5TY3JvbGw6ICdvblNjcm9sbCcsXG4gICAgY29tcHV0ZWRUcmFuc2Zvcm0gKCkge1xuICAgICAgLy8gTm9ybWFsbHkgd2UgZG8gbm90IHdhbnQgdGhlIHYtYXBwLWJhclxuICAgICAgLy8gdG8gdXBkYXRlIHRoZSBhcHBsaWNhdGlvbiB0b3AgdmFsdWVcbiAgICAgIC8vIHRvIGF2b2lkIHNjcmVlbiBqdW1wLiBIb3dldmVyLCBpblxuICAgICAgLy8gdGhpcyBzaXR1YXRpb24sIHdlIG11c3Qgc28gdGhhdFxuICAgICAgLy8gdGhlIGNsaXBwZWQgZHJhd2VyIGNhbiB1cGRhdGVcbiAgICAgIC8vIGl0cyB0b3AgdmFsdWUgd2hlbiBzY3JvbGxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TY3JvbGwgfHxcbiAgICAgICAgKCF0aGlzLmNsaXBwZWRMZWZ0ICYmICF0aGlzLmNsaXBwZWRSaWdodClcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIHRoaXMuY2FsbFVwZGF0ZSgpXG4gICAgfSxcbiAgICBpbnZlcnRlZFNjcm9sbCAodmFsOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gIXZhbCB8fCB0aGlzLmN1cnJlbnRTY3JvbGwgIT09IDBcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGlmICh0aGlzLmludmVydGVkU2Nyb2xsKSB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQmFja2dyb3VuZCAoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBWVG9vbGJhci5vcHRpb25zLm1ldGhvZHMuZ2VuQmFja2dyb3VuZC5jYWxsKHRoaXMpXG5cbiAgICAgIHJlbmRlci5kYXRhID0gdGhpcy5fYihyZW5kZXIuZGF0YSB8fCB7fSwgcmVuZGVyLnRhZyEsIHtcbiAgICAgICAgc3R5bGU6IHsgb3BhY2l0eTogdGhpcy5jb21wdXRlZE9wYWNpdHkgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIHVwZGF0ZUFwcGxpY2F0aW9uICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaW52ZXJ0ZWRTY3JvbGxcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5jb21wdXRlZEhlaWdodCArIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm1cbiAgICB9LFxuICAgIHRocmVzaG9sZE1ldCAoKSB7XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5jdXJyZW50U2Nyb2xsID4gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGlkZU9uU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmlzU2Nyb2xsaW5nVXAgfHxcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JvbGwgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaHJlc2hvbGQgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkKSByZXR1cm5cblxuICAgICAgdGhpcy5zYXZlZFNjcm9sbCA9IHRoaXMuY3VycmVudFNjcm9sbFxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHJlbmRlciA9IFZUb29sYmFyLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIHJlbmRlci5kYXRhID0gcmVuZGVyLmRhdGEgfHwge31cblxuICAgIGlmICh0aGlzLmNhblNjcm9sbCkge1xuICAgICAgcmVuZGVyLmRhdGEuZGlyZWN0aXZlcyA9IHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMgfHwgW11cbiAgICAgIHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgIGFyZzogdGhpcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgIG5hbWU6ICdzY3JvbGwnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vblNjcm9sbCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNYWluLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNTUkJvb3RhYmxlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1haW4nLFxuXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbWFpbicsXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYmFyLCB0b3AsIHJpZ2h0LCBmb290ZXIsIGluc2V0Rm9vdGVyLCBib3R0b20sIGxlZnQsXG4gICAgICB9ID0gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nVG9wOiBgJHt0b3AgKyBiYXJ9cHhgLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IGAke3JpZ2h0fXB4YCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogYCR7Zm9vdGVyICsgaW5zZXRGb290ZXIgKyBib3R0b219cHhgLFxuICAgICAgICBwYWRkaW5nTGVmdDogYCR7bGVmdH1weGAsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tYWluJyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIHJlZjogJ21haW4nLFxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCBbXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdGF0aWNDbGFzczogJ3YtbWFpbl9fd3JhcCcgfSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgICAgKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZNYWluIGZyb20gJy4uL1ZNYWluL1ZNYWluJ1xuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVk1haW4uZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWFpbicsXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgZGVwcmVjYXRlKCd2LWNvbnRlbnQnLCAndi1tYWluJywgdGhpcylcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgLy8gQWRkIHRoZSBsZWdhY3kgY2xhc3MgbmFtZXNcbiAgICBjb25zdCBub2RlID0gVk1haW4ub3B0aW9ucy5yZW5kZXIuY2FsbCh0aGlzLCBoKVxuXG4gICAgbm9kZS5kYXRhIS5zdGF0aWNDbGFzcyArPSAnIHYtY29udGVudCdcbiAgICBub2RlLmNoaWxkcmVuIVswXSEuZGF0YSEuc3RhdGljQ2xhc3MgKz0gJyB2LWNvbnRlbnRfX3dyYXAnXG5cbiAgICByZXR1cm4gaChub2RlLnRhZywgbm9kZS5kYXRhLCBub2RlLmNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCAnLi9fZ3JpZC5zYXNzJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgnc3BhY2VyJywgJ2RpdicsICd2LXNwYWNlcicpXG4iLCJpbXBvcnQgJy4vX2dyaWQuc2FzcydcbmltcG9ydCAnLi9WR3JpZC5zYXNzJ1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnXG5cbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBHcmlkKCdjb250YWluZXInKS5leHRlbmQoe1xuICBuYW1lOiAndi1jb250YWluZXInLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIGlkOiBTdHJpbmcsXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICB9LFxuICAgIGZsdWlkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyIChoLCB7IHByb3BzLCBkYXRhLCBjaGlsZHJlbiB9KSB7XG4gICAgbGV0IGNsYXNzZXNcbiAgICBjb25zdCB7IGF0dHJzIH0gPSBkYXRhXG4gICAgaWYgKGF0dHJzKSB7XG4gICAgICAvLyByZXNldCBhdHRycyB0byBleHRyYWN0IHV0aWxpdHkgY2xhc2VzIGxpa2UgcGEtM1xuICAgICAgZGF0YS5hdHRycyA9IHt9XG4gICAgICBjbGFzc2VzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgb25jZSByZXNvbHZlZFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy83ODQxXG4gICAgICAgIGlmIChrZXkgPT09ICdzbG90JykgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyc1trZXldXG5cbiAgICAgICAgLy8gYWRkIGJhY2sgZGF0YSBhdHRyaWJ1dGVzIGxpa2UgZGF0YS10ZXN0PVwiZm9vXCIgYnV0IGRvIG5vdFxuICAgICAgICAvLyBhZGQgdGhlbSBhcyBjbGFzc2VzXG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGRhdGEuYXR0cnMhW2tleV0gPSB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICBkYXRhLmRvbVByb3BzID0gZGF0YS5kb21Qcm9wcyB8fCB7fVxuICAgICAgZGF0YS5kb21Qcm9wcy5pZCA9IHByb3BzLmlkXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoXG4gICAgICBwcm9wcy50YWcsXG4gICAgICBtZXJnZURhdGEoZGF0YSwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ2NvbnRhaW5lcicsXG4gICAgICAgIGNsYXNzOiBBcnJheTxhbnk+KHtcbiAgICAgICAgICAnY29udGFpbmVyLS1mbHVpZCc6IHByb3BzLmZsdWlkLFxuICAgICAgICB9KS5jb25jYXQoY2xhc3NlcyB8fCBbXSksXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDaGlwLnNhc3MnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZFeHBhbmRYVHJhbnNpdGlvbiB9IGZyb20gJy4uL3RyYW5zaXRpb25zJ1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgR3JvdXBhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9ncm91cGFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFRvZ2dsZWFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgUm91dGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdXRhYmxlJ1xuaW1wb3J0IFNpemVhYmxlIGZyb20gJy4uLy4uL21peGlucy9zaXplYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgU2l6ZWFibGUsXG4gIFJvdXRhYmxlLFxuICBUaGVtZWFibGUsXG4gIEdyb3VwYWJsZUZhY3RvcnkoJ2NoaXBHcm91cCcpLFxuICBUb2dnbGVhYmxlRmFjdG9yeSgnaW5wdXRWYWx1ZScpXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNoaXAnLFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoIXRoaXMuY2hpcEdyb3VwKSByZXR1cm4gJydcblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlwR3JvdXAuYWN0aXZlQ2xhc3NcbiAgICAgIH0sXG4gICAgfSBhcyBhbnkgYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmc+LFxuICAgIGNsb3NlOiBCb29sZWFuLFxuICAgIGNsb3NlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkZWxldGUnLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZHJhZ2dhYmxlOiBCb29sZWFuLFxuICAgIGZpbHRlcjogQm9vbGVhbixcbiAgICBmaWx0ZXJJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNvbXBsZXRlJyxcbiAgICB9LFxuICAgIGxhYmVsOiBCb29sZWFuLFxuICAgIGxpbms6IEJvb2xlYW4sXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGlsbDogQm9vbGVhbixcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzcGFuJyxcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuICAgIHZhbHVlOiBudWxsIGFzIGFueSBhcyBQcm9wVHlwZTxhbnk+LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgcHJveHlDbGFzczogJ3YtY2hpcC0tYWN0aXZlJyxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtY2hpcCc6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1jaGlwLS1jbGlja2FibGUnOiB0aGlzLmlzQ2xpY2thYmxlLFxuICAgICAgICAndi1jaGlwLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICd2LWNoaXAtLWRyYWdnYWJsZSc6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgICAndi1jaGlwLS1sYWJlbCc6IHRoaXMubGFiZWwsXG4gICAgICAgICd2LWNoaXAtLWxpbmsnOiB0aGlzLmlzTGluayxcbiAgICAgICAgJ3YtY2hpcC0tbm8tY29sb3InOiAhdGhpcy5jb2xvcixcbiAgICAgICAgJ3YtY2hpcC0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuICAgICAgICAndi1jaGlwLS1waWxsJzogdGhpcy5waWxsLFxuICAgICAgICAndi1jaGlwLS1yZW1vdmFibGUnOiB0aGlzLmhhc0Nsb3NlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgICAgLi4udGhpcy5zaXplYWJsZUNsYXNzZXMsXG4gICAgICAgIC4uLnRoaXMuZ3JvdXBDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzQ2xvc2UgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5jbG9zZSlcbiAgICB9LFxuICAgIGlzQ2xpY2thYmxlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICBSb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmlzQ2xpY2thYmxlLmNhbGwodGhpcykgfHxcbiAgICAgICAgdGhpcy5jaGlwR3JvdXBcbiAgICAgIClcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGNvbnN0IGJyZWFraW5nUHJvcHMgPSBbXG4gICAgICBbJ291dGxpbmUnLCAnb3V0bGluZWQnXSxcbiAgICAgIFsnc2VsZWN0ZWQnLCAnaW5wdXQtdmFsdWUnXSxcbiAgICAgIFsndmFsdWUnLCAnYWN0aXZlJ10sXG4gICAgICBbJ0BpbnB1dCcsICdAYWN0aXZlLnN5bmMnXSxcbiAgICBdXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGJyZWFraW5nUHJvcHMuZm9yRWFjaCgoW29yaWdpbmFsLCByZXBsYWNlbWVudF0pID0+IHtcbiAgICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eShvcmlnaW5hbCkpIGJyZWFraW5nKG9yaWdpbmFsLCByZXBsYWNlbWVudCwgdGhpcylcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljayAoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgICB0aGlzLmNoaXBHcm91cCAmJiB0aGlzLnRvZ2dsZSgpXG4gICAgfSxcbiAgICBnZW5GaWx0ZXIgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fZmlsdGVyJyxcbiAgICAgICAgICAgIHByb3BzOiB7IGxlZnQ6IHRydWUgfSxcbiAgICAgICAgICB9LCB0aGlzLmZpbHRlckljb24pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkV4cGFuZFhUcmFuc2l0aW9uLCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlbkNsb3NlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fY2xvc2UnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgICAgIHNpemU6IDE4LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljazpjbG9zZScpXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6YWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuY2xvc2VJY29uKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1jaGlwX19jb250ZW50JyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5maWx0ZXIgJiYgdGhpcy5nZW5GaWx0ZXIoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgICAgdGhpcy5oYXNDbG9zZSAmJiB0aGlzLmdlbkNsb3NlKCksXG4gICAgICBdKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuZ2VuQ29udGVudCgpXVxuICAgIGxldCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLmF0dHJzID0ge1xuICAgICAgLi4uZGF0YS5hdHRycyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICB0YWJpbmRleDogdGhpcy5jaGlwR3JvdXAgJiYgIXRoaXMuZGlzYWJsZWQgPyAwIDogZGF0YS5hdHRycyEudGFiaW5kZXgsXG4gICAgfVxuICAgIGRhdGEuZGlyZWN0aXZlcyEucHVzaCh7XG4gICAgICBuYW1lOiAnc2hvdycsXG4gICAgICB2YWx1ZTogdGhpcy5hY3RpdmUsXG4gICAgfSlcbiAgICBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgZGF0YSlcblxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy50ZXh0Q29sb3IgfHwgKHRoaXMub3V0bGluZWQgJiYgdGhpcy5jb2xvcilcblxuICAgIHJldHVybiBoKHRhZywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIGRhdGEpLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVkNoaXAgZnJvbSAnLi9WQ2hpcCdcblxuZXhwb3J0IHsgVkNoaXAgfVxuZXhwb3J0IGRlZmF1bHQgVkNoaXBcbiIsImltcG9ydCAnLi9WU2ltcGxlQ2hlY2tib3guc2FzcydcblxuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuaW1wb3J0IFZ1ZSwgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuaW1wb3J0IHsgd3JhcEluQXJyYXkgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1zaW1wbGUtY2hlY2tib3gnLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIHJpcHBsZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIC4uLkNvbG9yYWJsZS5vcHRpb25zLnByb3BzLFxuICAgIC4uLlRoZW1lYWJsZS5vcHRpb25zLnByb3BzLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGVJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94SW5kZXRlcm1pbmF0ZScsXG4gICAgfSxcbiAgICBvbkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2hlY2tib3hPbicsXG4gICAgfSxcbiAgICBvZmZJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94T2ZmJyxcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCwgeyBwcm9wcywgZGF0YSwgbGlzdGVuZXJzIH0pOiBWTm9kZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuXG4gICAgaWYgKHByb3BzLnJpcHBsZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGgoJ2RpdicsIENvbG9yYWJsZS5vcHRpb25zLm1ldGhvZHMuc2V0VGV4dENvbG9yKHByb3BzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dC0tc2VsZWN0aW9uLWNvbnRyb2xzX19yaXBwbGUnLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdyaXBwbGUnLFxuICAgICAgICAgIHZhbHVlOiB7IGNlbnRlcjogdHJ1ZSB9LFxuICAgICAgICB9XSBhcyBWTm9kZURpcmVjdGl2ZVtdLFxuICAgICAgfSkpXG5cbiAgICAgIGNoaWxkcmVuLnB1c2gocmlwcGxlKVxuICAgIH1cblxuICAgIGxldCBpY29uID0gcHJvcHMub2ZmSWNvblxuICAgIGlmIChwcm9wcy5pbmRldGVybWluYXRlKSBpY29uID0gcHJvcHMuaW5kZXRlcm1pbmF0ZUljb25cbiAgICBlbHNlIGlmIChwcm9wcy52YWx1ZSkgaWNvbiA9IHByb3BzLm9uSWNvblxuXG4gICAgY2hpbGRyZW4ucHVzaChoKFZJY29uLCBDb2xvcmFibGUub3B0aW9ucy5tZXRob2RzLnNldFRleHRDb2xvcihwcm9wcy52YWx1ZSAmJiBwcm9wcy5jb2xvciwge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBkYXJrOiBwcm9wcy5kYXJrLFxuICAgICAgICBsaWdodDogcHJvcHMubGlnaHQsXG4gICAgICB9LFxuICAgIH0pLCBpY29uKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAndi1zaW1wbGUtY2hlY2tib3gnOiB0cnVlLFxuICAgICAgJ3Ytc2ltcGxlLWNoZWNrYm94LS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgIGlmIChkYXRhLm9uICYmIGRhdGEub24uaW5wdXQgJiYgIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHdyYXBJbkFycmF5KGRhdGEub24uaW5wdXQpLmZvckVhY2goZiA9PiBmKCFwcm9wcy52YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlNpbXBsZUNoZWNrYm94IGZyb20gJy4uL1ZDaGVja2JveC9WU2ltcGxlQ2hlY2tib3gnXG5pbXBvcnQgVkRpdmlkZXIgZnJvbSAnLi4vVkRpdmlkZXInXG5pbXBvcnQgVlN1YmhlYWRlciBmcm9tICcuLi9WU3ViaGVhZGVyJ1xuaW1wb3J0IHtcbiAgVkxpc3QsXG4gIFZMaXN0SXRlbSxcbiAgVkxpc3RJdGVtQWN0aW9uLFxuICBWTGlzdEl0ZW1Db250ZW50LFxuICBWTGlzdEl0ZW1UaXRsZSxcbn0gZnJvbSAnLi4vVkxpc3QnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQge1xuICBlc2NhcGVIVE1MLFxuICBnZXRQcm9wZXJ0eUZyb21JdGVtLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlLCBWTm9kZUNoaWxkcmVuIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgU2VsZWN0SXRlbUtleSB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbnR5cGUgTGlzdFRpbGUgPSB7IGl0ZW06IGFueSwgZGlzYWJsZWQ/OiBudWxsIHwgYm9vbGVhbiwgdmFsdWU/OiBib29sZWFuLCBpbmRleDogbnVtYmVyIH07XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlLCBUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNlbGVjdC1saXN0JyxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy82ODcyXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICByaXBwbGUsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhY3Rpb246IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkOiBCb29sZWFuLFxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxhbnlbXT4sXG4gICAgaXRlbURpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICB9LFxuICAgIGl0ZW1UZXh0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgIH0sXG4gICAgaXRlbVZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIG5vRGF0YVRleHQ6IFN0cmluZyxcbiAgICBub0ZpbHRlcjogQm9vbGVhbixcbiAgICBzZWFyY2hJbnB1dDogbnVsbCBhcyB1bmtub3duIGFzIFByb3BUeXBlPGFueT4sXG4gICAgc2VsZWN0ZWRJdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8YW55W10+LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgcGFyc2VkSXRlbXMgKCk6IGFueVtdIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICB9LFxuICAgIHRpbGVBY3RpdmVDbGFzcyAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbG9yKS5jbGFzcyB8fCB7fSkuam9pbignICcpXG4gICAgfSxcbiAgICBzdGF0aWNOb0RhdGFUaWxlICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCB0aWxlID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBtb3VzZWRvd246IChlOiBFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLCAvLyBQcmV2ZW50IG9uQmx1ciBmcm9tIGJlaW5nIGNhbGxlZFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFtcbiAgICAgICAgdGhpcy5nZW5UaWxlQ29udGVudCh0aGlzLm5vRGF0YVRleHQpLFxuICAgICAgXSlcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5BY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5wdXRWYWx1ZTogYW55KTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtQWN0aW9uLCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlNpbXBsZUNoZWNrYm94LCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6ICgpID0+IHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRpdmlkZXIgKHByb3BzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWRGl2aWRlciwgeyBwcm9wcyB9KVxuICAgIH0sXG4gICAgZ2VuRmlsdGVyZWRUZXh0ICh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgIHRleHQgPSB0ZXh0IHx8ICcnXG5cbiAgICAgIGlmICghdGhpcy5zZWFyY2hJbnB1dCB8fCB0aGlzLm5vRmlsdGVyKSByZXR1cm4gZXNjYXBlSFRNTCh0ZXh0KVxuXG4gICAgICBjb25zdCB7IHN0YXJ0LCBtaWRkbGUsIGVuZCB9ID0gdGhpcy5nZXRNYXNrZWRDaGFyYWN0ZXJzKHRleHQpXG5cbiAgICAgIHJldHVybiBgJHtlc2NhcGVIVE1MKHN0YXJ0KX0ke3RoaXMuZ2VuSGlnaGxpZ2h0KG1pZGRsZSl9JHtlc2NhcGVIVE1MKGVuZCl9YFxuICAgIH0sXG4gICAgZ2VuSGVhZGVyIChwcm9wczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTdWJoZWFkZXIsIHsgcHJvcHMgfSwgcHJvcHMuaGVhZGVyKVxuICAgIH0sXG4gICAgZ2VuSGlnaGxpZ2h0ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInYtbGlzdC1pdGVtX19tYXNrXCI+JHtlc2NhcGVIVE1MKHRleHQpfTwvc3Bhbj5gXG4gICAgfSxcbiAgICBnZXRNYXNrZWRDaGFyYWN0ZXJzICh0ZXh0OiBzdHJpbmcpOiB7XG4gICAgICBzdGFydDogc3RyaW5nXG4gICAgICBtaWRkbGU6IHN0cmluZ1xuICAgICAgZW5kOiBzdHJpbmdcbiAgICB9IHtcbiAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gKHRoaXMuc2VhcmNoSW5wdXQgfHwgJycpLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgY29uc3QgaW5kZXggPSB0ZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hJbnB1dClcblxuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHsgc3RhcnQ6ICcnLCBtaWRkbGU6IHRleHQsIGVuZDogJycgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHRleHQuc2xpY2UoMCwgaW5kZXgpXG4gICAgICBjb25zdCBtaWRkbGUgPSB0ZXh0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaElucHV0Lmxlbmd0aClcbiAgICAgIGNvbnN0IGVuZCA9IHRleHQuc2xpY2UoaW5kZXggKyBzZWFyY2hJbnB1dC5sZW5ndGgpXG4gICAgICByZXR1cm4geyBzdGFydCwgbWlkZGxlLCBlbmQgfVxuICAgIH0sXG4gICAgZ2VuVGlsZSAoe1xuICAgICAgaXRlbSxcbiAgICAgIGluZGV4LFxuICAgICAgZGlzYWJsZWQgPSBudWxsLFxuICAgICAgdmFsdWUgPSBmYWxzZSxcbiAgICB9OiBMaXN0VGlsZSk6IFZOb2RlIHwgVk5vZGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXZhbHVlKSB2YWx1ZSA9IHRoaXMuaGFzSXRlbShpdGVtKVxuXG4gICAgICBpZiAoaXRlbSA9PT0gT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGRpc2FibGVkID0gZGlzYWJsZWQgIT09IG51bGxcbiAgICAgICAgICA/IGRpc2FibGVkXG4gICAgICAgICAgOiB0aGlzLmdldERpc2FibGVkKGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpbGUgPSB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpbiBsaXN0IGRvZXMgbm90XG4gICAgICAgICAgLy8gY29udGFpbiBhcmlhLXNlbGVjdGVkIGJ5IGRlZmF1bHRcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IFN0cmluZyh2YWx1ZSksXG4gICAgICAgICAgaWQ6IGBsaXN0LWl0ZW0tJHt0aGlzLl91aWR9LSR7aW5kZXh9YCxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBtb3VzZWRvd246IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gUHJldmVudCBvbkJsdXIgZnJvbSBiZWluZyBjYWxsZWRcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xpY2s6ICgpID0+IGRpc2FibGVkIHx8IHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLnRpbGVBY3RpdmVDbGFzcyxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICByaXBwbGU6IHRydWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFtcbiAgICAgICAgICB0aGlzLmFjdGlvbiAmJiAhdGhpcy5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMuZ2VuQWN0aW9uKGl0ZW0sIHZhbHVlKVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIHRoaXMuZ2VuVGlsZUNvbnRlbnQoaXRlbSwgaW5kZXgpLFxuICAgICAgICBdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzXG4gICAgICBjb25zdCBzY29wZWRTbG90ID0gdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSh7XG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAuLi50aWxlLmF0dHJzLFxuICAgICAgICAgIC4uLnRpbGUucHJvcHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB0aWxlLm9uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRoaXMubmVlZHNUaWxlKHNjb3BlZFNsb3QpXG4gICAgICAgID8gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIHNjb3BlZFNsb3QpXG4gICAgICAgIDogc2NvcGVkU2xvdFxuICAgIH0sXG4gICAgZ2VuVGlsZUNvbnRlbnQgKGl0ZW06IGFueSwgaW5kZXggPSAwKTogVk5vZGUge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5nZW5GaWx0ZXJlZFRleHQodGhpcy5nZXRUZXh0KGl0ZW0pKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW1Db250ZW50LFxuICAgICAgICBbdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW1UaXRsZSwge1xuICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTCB9LFxuICAgICAgICB9KV1cbiAgICAgIClcbiAgICB9LFxuICAgIGhhc0l0ZW0gKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VkSXRlbXMuaW5kZXhPZih0aGlzLmdldFZhbHVlKGl0ZW0pKSA+IC0xXG4gICAgfSxcbiAgICBuZWVkc1RpbGUgKHNsb3Q6IFZOb2RlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzbG90IS5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgc2xvdCFbMF0uY29tcG9uZW50T3B0aW9ucyA9PSBudWxsIHx8XG4gICAgICAgIHNsb3QhWzBdLmNvbXBvbmVudE9wdGlvbnMuQ3Rvci5vcHRpb25zLm5hbWUgIT09ICd2LWxpc3QtaXRlbSdcbiAgICB9LFxuICAgIGdldERpc2FibGVkIChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtRGlzYWJsZWQsIGZhbHNlKSlcbiAgICB9LFxuICAgIGdldFRleHQgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQsIGl0ZW0pKVxuICAgIH0sXG4gICAgZ2V0VmFsdWUgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtVmFsdWUsIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoKTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuOiBWTm9kZUNoaWxkcmVuID0gW11cbiAgICBjb25zdCBpdGVtc0xlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF1cblxuICAgICAgaWYgKHRoaXMuaGlkZVNlbGVjdGVkICYmXG4gICAgICAgIHRoaXMuaGFzSXRlbShpdGVtKVxuICAgICAgKSBjb250aW51ZVxuXG4gICAgICBpZiAoaXRlbSA9PSBudWxsKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuVGlsZSh7IGl0ZW0sIGluZGV4IH0pKVxuICAgICAgZWxzZSBpZiAoaXRlbS5oZWFkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5IZWFkZXIoaXRlbSkpXG4gICAgICBlbHNlIGlmIChpdGVtLmRpdmlkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5EaXZpZGVyKGl0ZW0pKVxuICAgICAgZWxzZSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuVGlsZSh7IGl0ZW0sIGluZGV4IH0pKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmxlbmd0aCB8fCBjaGlsZHJlbi5wdXNoKHRoaXMuJHNsb3RzWyduby1kYXRhJ10gfHwgdGhpcy5zdGF0aWNOb0RhdGFUaWxlKVxuXG4gICAgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddICYmIGNoaWxkcmVuLnVuc2hpZnQodGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddKVxuXG4gICAgdGhpcy4kc2xvdHNbJ2FwcGVuZC1pdGVtJ10gJiYgY2hpbGRyZW4ucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSlcblxuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMaXN0LCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc2VsZWN0LWxpc3QnLFxuICAgICAgY2xhc3M6IHRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICB9LFxuICAgICAgcHJvcHM6IHsgZGVuc2U6IHRoaXMuZGVuc2UgfSxcbiAgICB9LCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAnZmlsdGVyYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBub0RhdGFUZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHZ1ZXRpZnkubm9EYXRhVGV4dCcsXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi4vVlRleHRGaWVsZC9WVGV4dEZpZWxkLnNhc3MnXG5pbXBvcnQgJy4vVlNlbGVjdC5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkNoaXAgZnJvbSAnLi4vVkNoaXAnXG5pbXBvcnQgVk1lbnUgZnJvbSAnLi4vVk1lbnUnXG5pbXBvcnQgVlNlbGVjdExpc3QgZnJvbSAnLi9WU2VsZWN0TGlzdCdcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbXBhcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbXBhcmFibGUnXG5pbXBvcnQgRmlsdGVyYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZmlsdGVyYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7IGdldFByb3BlcnR5RnJvbUl0ZW0sIGdldE9iamVjdFZhbHVlQnlQYXRoLCBrZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFByb3BUeXBlLCBWTm9kZURhdGEgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBTZWxlY3RJdGVtS2V5IH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZW51UHJvcHMgPSB7XG4gIGNsb3NlT25DbGljazogZmFsc2UsXG4gIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICBkaXNhYmxlS2V5czogdHJ1ZSxcbiAgb3Blbk9uQ2xpY2s6IGZhbHNlLFxuICBtYXhIZWlnaHQ6IDMwNCxcbn1cblxuLy8gVHlwZXNcbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFZUZXh0RmllbGQsXG4gIENvbXBhcmFibGUsXG4gIEZpbHRlcmFibGVcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBtZW51OiBJbnN0YW5jZVR5cGU8dHlwZW9mIFZNZW51PlxuICAgIGxhYmVsOiBIVE1MRWxlbWVudFxuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgJ3ByZXBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgICdhcHBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgIHByZWZpeDogSFRNTEVsZW1lbnRcbiAgICBzdWZmaXg6IEhUTUxFbGVtZW50XG4gIH1cbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2VsZWN0JyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZW5kSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkcm9wZG93bicsXG4gICAgfSxcbiAgICBhdHRhY2g6IHtcbiAgICAgIHR5cGU6IG51bGwgYXMgdW5rbm93biBhcyBQcm9wVHlwZTxzdHJpbmcgfCBib29sZWFuIHwgRWxlbWVudCB8IFZOb2RlPixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgY2FjaGVJdGVtczogQm9vbGVhbixcbiAgICBjaGlwczogQm9vbGVhbixcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgZGVsZXRhYmxlQ2hpcHM6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUxvb2t1cDogQm9vbGVhbixcbiAgICBlYWdlcjogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWQ6IEJvb2xlYW4sXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPGFueVtdPixcbiAgICBpdGVtQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGl0ZW1EaXNhYmxlZDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgfSxcbiAgICBpdGVtVGV4dDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICAgIGl0ZW1WYWx1ZToge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgfSxcbiAgICBtZW51UHJvcHM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdE1lbnVQcm9wcyxcbiAgICB9LFxuICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsZWFyOiBCb29sZWFuLFxuICAgIHJldHVybk9iamVjdDogQm9vbGVhbixcbiAgICBzbWFsbENoaXBzOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWNoZWRJdGVtczogdGhpcy5jYWNoZUl0ZW1zID8gdGhpcy5pdGVtcyA6IFtdLFxuICAgICAgbWVudUlzQm9vdGVkOiBmYWxzZSxcbiAgICAgIGlzTWVudUFjdGl2ZTogZmFsc2UsXG4gICAgICBsYXN0SXRlbTogMjAsXG4gICAgICAvLyBBcyBsb25nIGFzIGEgdmFsdWUgaXMgZGVmaW5lZCwgc2hvdyBpdFxuICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayBpZiBtdWx0aXBsZVxuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoaWNoIGRlZmF1bHQgdG8gcHJvdmlkZVxuICAgICAgbGF6eVZhbHVlOiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyB0aGlzLnZhbHVlXG4gICAgICAgIDogdGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkLFxuICAgICAgc2VsZWN0ZWRJbmRleDogLTEsXG4gICAgICBzZWxlY3RlZEl0ZW1zOiBbXSBhcyBhbnlbXSxcbiAgICAgIGtleWJvYXJkTG9va3VwUHJlZml4OiAnJyxcbiAgICAgIGtleWJvYXJkTG9va3VwTGFzdFRpbWU6IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLyogQWxsIGl0ZW1zIHRoYXQgdGhlIHNlbGVjdCBoYXMgKi9cbiAgICBhbGxJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyRHVwbGljYXRlcyh0aGlzLmNhY2hlZEl0ZW1zLmNvbmNhdCh0aGlzLml0ZW1zKSlcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVGV4dEZpZWxkLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1zZWxlY3QnOiB0cnVlLFxuICAgICAgICAndi1zZWxlY3QtLWNoaXBzJzogdGhpcy5oYXNDaGlwcyxcbiAgICAgICAgJ3Ytc2VsZWN0LS1jaGlwcy0tc21hbGwnOiB0aGlzLnNtYWxsQ2hpcHMsXG4gICAgICAgICd2LXNlbGVjdC0taXMtbWVudS1hY3RpdmUnOiB0aGlzLmlzTWVudUFjdGl2ZSxcbiAgICAgICAgJ3Ytc2VsZWN0LS1pcy1tdWx0aSc6IHRoaXMubXVsdGlwbGUsXG4gICAgICB9XG4gICAgfSxcbiAgICAvKiBVc2VkIGJ5IG90aGVyIGNvbXBvbmVudHMgdG8gb3ZlcndyaXRlICovXG4gICAgY29tcHV0ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsSXRlbXNcbiAgICB9LFxuICAgIGNvbXB1dGVkT3ducyAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgbGlzdC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBjb21wdXRlZENvdW50ZXJWYWx1ZSAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlXG4gICAgICAgID8gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgICA6ICh0aGlzLmdldFRleHQodGhpcy5zZWxlY3RlZEl0ZW1zWzBdKSB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGhcbiAgICB9LFxuICAgIGRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuaXNGb2N1c2VkID8gW3tcbiAgICAgICAgbmFtZTogJ2NsaWNrLW91dHNpZGUnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGhhbmRsZXI6IHRoaXMuYmx1cixcbiAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgIH0sXG4gICAgICB9XSA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZHluYW1pY0hlaWdodCAoKSB7XG4gICAgICByZXR1cm4gJ2F1dG8nXG4gICAgfSxcbiAgICBoYXNDaGlwcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlwcyB8fCB0aGlzLnNtYWxsQ2hpcHNcbiAgICB9LFxuICAgIGhhc1Nsb3QgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5oYXNDaGlwcyB8fCB0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24pXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgbGlzdERhdGEgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzY29wZUlkID0gdGhpcy4kdm5vZGUgJiYgKHRoaXMuJHZub2RlLmNvbnRleHQhLiRvcHRpb25zIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLl9zY29wZUlkXG4gICAgICBjb25zdCBhdHRycyA9IHNjb3BlSWQgPyB7XG4gICAgICAgIFtzY29wZUlkXTogdHJ1ZSxcbiAgICAgIH0gOiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkT3ducyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhY3Rpb246IHRoaXMubXVsdGlwbGUsXG4gICAgICAgICAgY29sb3I6IHRoaXMuaXRlbUNvbG9yLFxuICAgICAgICAgIGRlbnNlOiB0aGlzLmRlbnNlLFxuICAgICAgICAgIGhpZGVTZWxlY3RlZDogdGhpcy5oaWRlU2VsZWN0ZWQsXG4gICAgICAgICAgaXRlbXM6IHRoaXMudmlydHVhbGl6ZWRJdGVtcyxcbiAgICAgICAgICBpdGVtRGlzYWJsZWQ6IHRoaXMuaXRlbURpc2FibGVkLFxuICAgICAgICAgIGl0ZW1UZXh0OiB0aGlzLml0ZW1UZXh0LFxuICAgICAgICAgIGl0ZW1WYWx1ZTogdGhpcy5pdGVtVmFsdWUsXG4gICAgICAgICAgbm9EYXRhVGV4dDogdGhpcy4kdnVldGlmeS5sYW5nLnQodGhpcy5ub0RhdGFUZXh0KSxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLnNlbGVjdGVkSXRlbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc2VsZWN0OiB0aGlzLnNlbGVjdEl0ZW0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgaXRlbTogdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YXRpY0xpc3QgKCk6IFZOb2RlIHtcbiAgICAgIGlmICh0aGlzLiRzbG90c1snbm8tZGF0YSddIHx8IHRoaXMuJHNsb3RzWydwcmVwZW5kLWl0ZW0nXSB8fCB0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoJ2Fzc2VydDogc3RhdGljTGlzdCBzaG91bGQgbm90IGJlIGNhbGxlZCBpZiBzbG90cyBhcmUgdXNlZCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTZWxlY3RMaXN0LCB0aGlzLmxpc3REYXRhKVxuICAgIH0sXG4gICAgdmlydHVhbGl6ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuICh0aGlzLiRfbWVudVByb3BzIGFzIGFueSkuYXV0b1xuICAgICAgICA/IHRoaXMuY29tcHV0ZWRJdGVtc1xuICAgICAgICA6IHRoaXMuY29tcHV0ZWRJdGVtcy5zbGljZSgwLCB0aGlzLmxhc3RJdGVtKVxuICAgIH0sXG4gICAgbWVudUNhblNob3c6ICgpID0+IHRydWUsXG4gICAgJF9tZW51UHJvcHMgKCk6IG9iamVjdCB7XG4gICAgICBsZXQgbm9ybWFsaXNlZFByb3BzID0gdHlwZW9mIHRoaXMubWVudVByb3BzID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHRoaXMubWVudVByb3BzLnNwbGl0KCcsJylcbiAgICAgICAgOiB0aGlzLm1lbnVQcm9wc1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShub3JtYWxpc2VkUHJvcHMpKSB7XG4gICAgICAgIG5vcm1hbGlzZWRQcm9wcyA9IG5vcm1hbGlzZWRQcm9wcy5yZWR1Y2UoKGFjYywgcCkgPT4ge1xuICAgICAgICAgIGFjY1twLnRyaW0oKV0gPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9LCB7fSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdE1lbnVQcm9wcyxcbiAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgIHZhbHVlOiB0aGlzLm1lbnVDYW5TaG93ICYmIHRoaXMuaXNNZW51QWN0aXZlLFxuICAgICAgICBudWRnZUJvdHRvbTogbm9ybWFsaXNlZFByb3BzLm9mZnNldFkgPyAxIDogMCwgLy8gY29udmVydCB0byBpbnRcbiAgICAgICAgLi4ubm9ybWFsaXNlZFByb3BzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbFZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsXG4gICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMoKVxuICAgIH0sXG4gICAgaXNNZW51QWN0aXZlICh2YWwpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub25NZW51QWN0aXZlQ2hhbmdlKHZhbCkpXG4gICAgfSxcbiAgICBpdGVtczoge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlciAodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlSXRlbXMpIHtcbiAgICAgICAgICAvLyBCcmVha3MgdnVlLXRlc3QtdXRpbHMgaWZcbiAgICAgICAgICAvLyB0aGlzIGlzbid0IGNhbGN1bGF0ZWRcbiAgICAgICAgICAvLyBvbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRJdGVtcyA9IHRoaXMuZmlsdGVyRHVwbGljYXRlcyh0aGlzLmNhY2hlZEl0ZW1zLmNvbmNhdCh2YWwpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMoKVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGJsdXIgKGU/OiBFdmVudCkge1xuICAgICAgVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuYmx1ci5jYWxsKHRoaXMsIGUpXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBhY3RpdmF0ZU1lbnUgKCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIGNsZWFyYWJsZUNhbGxiYWNrICgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkKVxuICAgICAgdGhpcy5zZXRNZW51SW5kZXgoLTEpXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKSlcblxuICAgICAgaWYgKHRoaXMub3Blbk9uQ2xlYXIpIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VDb25kaXRpb25hbCAoZTogRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc01lbnVBY3RpdmUpIHJldHVybiB0cnVlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLl9pc0Rlc3Ryb3llZCAmJlxuXG4gICAgICAgIC8vIENsaWNrIG9yaWdpbmF0ZXMgZnJvbSBvdXRzaWRlIHRoZSBtZW51IGNvbnRlbnRcbiAgICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkb24ndCBjbG9zZSB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZFxuICAgICAgICAoIXRoaXMuZ2V0Q29udGVudCgpIHx8XG4gICAgICAgICF0aGlzLmdldENvbnRlbnQoKS5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkgJiZcblxuICAgICAgICAvLyBDbGljayBvcmlnaW5hdGVzIGZyb20gb3V0c2lkZSB0aGUgZWxlbWVudFxuICAgICAgICB0aGlzLiRlbCAmJlxuICAgICAgICAhdGhpcy4kZWwuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkgJiZcbiAgICAgICAgZS50YXJnZXQgIT09IHRoaXMuJGVsXG4gICAgICApXG4gICAgfSxcbiAgICBmaWx0ZXJEdXBsaWNhdGVzIChhcnI6IGFueVtdKSB7XG4gICAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgTWFwKClcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhcnJbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZ2V0VmFsdWUoaXRlbSlcblxuICAgICAgICAvLyBUT0RPOiBjb21wYXJhdG9yXG4gICAgICAgICF1bmlxdWVWYWx1ZXMuaGFzKHZhbCkgJiYgdW5pcXVlVmFsdWVzLnNldCh2YWwsIGl0ZW0pXG4gICAgICB9XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWVWYWx1ZXMudmFsdWVzKCkpXG4gICAgfSxcbiAgICBmaW5kRXhpc3RpbmdJbmRleCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0pXG5cbiAgICAgIHJldHVybiAodGhpcy5pbnRlcm5hbFZhbHVlIHx8IFtdKS5maW5kSW5kZXgoKGk6IG9iamVjdCkgPT4gdGhpcy52YWx1ZUNvbXBhcmF0b3IodGhpcy5nZXRWYWx1ZShpKSwgaXRlbVZhbHVlKSlcbiAgICB9LFxuICAgIGdldENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMubWVudSAmJiB0aGlzLiRyZWZzLm1lbnUuJHJlZnMuY29udGVudFxuICAgIH0sXG4gICAgZ2VuQ2hpcFNlbGVjdGlvbiAoaXRlbTogb2JqZWN0LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBpc0Rpc2FibGVkID0gKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuZ2V0RGlzYWJsZWQoaXRlbSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkNoaXAsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNoaXAtLXNlbGVjdCcsXG4gICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiAtMSB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNsb3NlOiB0aGlzLmRlbGV0YWJsZUNoaXBzICYmICFpc0Rpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlucHV0VmFsdWU6IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgc21hbGw6IHRoaXMuc21hbGxDaGlwcyxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm5cblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NsaWNrOmNsb3NlJzogKCkgPT4gdGhpcy5vbkNoaXBJbnB1dChpdGVtKSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKGl0ZW0pKSxcbiAgICAgIH0sIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICAgIGdlbkNvbW1hU2VsZWN0aW9uIChpdGVtOiBvYmplY3QsIGluZGV4OiBudW1iZXIsIGxhc3Q6IGJvb2xlYW4pIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCAmJiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAoXG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5nZXREaXNhYmxlZChpdGVtKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9uIHYtc2VsZWN0X19zZWxlY3Rpb24tLWNvbW1hJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zZWxlY3RfX3NlbGVjdGlvbi0tZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoaXRlbSkpLFxuICAgICAgfSksIGAke3RoaXMuZ2V0VGV4dChpdGVtKX0ke2xhc3QgPyAnJyA6ICcsICd9YClcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpOiAoVk5vZGUgfCBWTm9kZVtdIHwgbnVsbClbXSB7XG4gICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5nZW5TZWxlY3Rpb25zKClcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZW5JbnB1dCgpXG5cbiAgICAgIC8vIElmIHRoZSByZXR1cm4gaXMgYW4gZW1wdHkgYXJyYXlcbiAgICAgIC8vIHB1c2ggdGhlIGlucHV0XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3Rpb25zKSkge1xuICAgICAgICBzZWxlY3Rpb25zLnB1c2goaW5wdXQpXG4gICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCBpbnRvIGNoaWxkcmVuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuID0gc2VsZWN0aW9ucy5jaGlsZHJlbiB8fCBbXVxuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuLnB1c2goaW5wdXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuRmllbGRzZXQoKSxcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiAndi1zZWxlY3RfX3Nsb3QnLFxuICAgICAgICAgIGRpcmVjdGl2ZXM6IHRoaXMuZGlyZWN0aXZlcyxcbiAgICAgICAgfSwgW1xuICAgICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgICB0aGlzLnByZWZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3ByZWZpeCcpIDogbnVsbCxcbiAgICAgICAgICBzZWxlY3Rpb25zLFxuICAgICAgICAgIHRoaXMuc3VmZml4ID8gdGhpcy5nZW5BZmZpeCgnc3VmZml4JykgOiBudWxsLFxuICAgICAgICAgIHRoaXMuZ2VuQ2xlYXJJY29uKCksXG4gICAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICAgIHRoaXMuZ2VuSGlkZGVuSW5wdXQoKSxcbiAgICAgICAgXSksXG4gICAgICAgIHRoaXMuZ2VuTWVudSgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5JY29uIChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGNiPzogKGU6IEV2ZW50KSA9PiB2b2lkLFxuICAgICAgZXh0cmFEYXRhPzogVk5vZGVEYXRhXG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5JY29uLmNhbGwodGhpcywgdHlwZSwgY2IsIGV4dHJhRGF0YSlcblxuICAgICAgaWYgKHR5cGUgPT09ICdhcHBlbmQnKSB7XG4gICAgICAgIC8vIERvbid0IGFsbG93IHRoZSBkcm9wZG93biBpY29uIHRvIGJlIGZvY3VzZWRcbiAgICAgICAgaWNvbi5jaGlsZHJlbiFbMF0uZGF0YSA9IG1lcmdlRGF0YShpY29uLmNoaWxkcmVuIVswXS5kYXRhISwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YWJpbmRleDogaWNvbi5jaGlsZHJlbiFbMF0uY29tcG9uZW50T3B0aW9ucyEubGlzdGVuZXJzICYmICctMScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWNvblxuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXQuY2FsbCh0aGlzKVxuXG4gICAgICBkZWxldGUgaW5wdXQuZGF0YSEuYXR0cnMhLm5hbWVcblxuICAgICAgaW5wdXQuZGF0YSA9IG1lcmdlRGF0YShpbnB1dC5kYXRhISwge1xuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAnYXJpYS1yZWFkb25seSc6IFN0cmluZyh0aGlzLmlzUmVhZG9ubHkpLFxuICAgICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aCh0aGlzLiRyZWZzLm1lbnUsICdhY3RpdmVUaWxlLmlkJyksXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aChpbnB1dC5kYXRhISwgJ2F0dHJzLmF1dG9jb21wbGV0ZScsICdvZmYnKSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsga2V5cHJlc3M6IHRoaXMub25LZXlQcmVzcyB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBnZW5IaWRkZW5JbnB1dCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogdGhpcy5sYXp5VmFsdWUgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLmF0dHJzJC5uYW1lLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKTogVk5vZGUge1xuICAgICAgY29uc3QgcmVuZGVyID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgcmVuZGVyLmRhdGEhLmF0dHJzID0ge1xuICAgICAgICAuLi5yZW5kZXIuZGF0YSEuYXR0cnMsXG4gICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICdsaXN0Ym94JyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBTdHJpbmcodGhpcy5pc01lbnVBY3RpdmUpLFxuICAgICAgICAnYXJpYS1vd25zJzogdGhpcy5jb21wdXRlZE93bnMsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIGdlbkxpc3QgKCk6IFZOb2RlIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gc2xvdHMsIHdlIGNhbiB1c2UgYSBjYWNoZWQgVk5vZGUgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgICAgaWYgKHRoaXMuJHNsb3RzWyduby1kYXRhJ10gfHwgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddIHx8IHRoaXMuJHNsb3RzWydhcHBlbmQtaXRlbSddKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkxpc3RXaXRoU2xvdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aWNMaXN0XG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5MaXN0V2l0aFNsb3QgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHNsb3RzID0gWydwcmVwZW5kLWl0ZW0nLCAnbm8tZGF0YScsICdhcHBlbmQtaXRlbSddXG4gICAgICAgIC5maWx0ZXIoc2xvdE5hbWUgPT4gdGhpcy4kc2xvdHNbc2xvdE5hbWVdKVxuICAgICAgICAubWFwKHNsb3ROYW1lID0+IHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywge1xuICAgICAgICAgIHNsb3Q6IHNsb3ROYW1lLFxuICAgICAgICB9LCB0aGlzLiRzbG90c1tzbG90TmFtZV0pKVxuICAgICAgLy8gUmVxdWlyZXMgZGVzdHJ1Y3R1cmluZyBkdWUgdG8gVnVlXG4gICAgICAvLyBtb2RpZnlpbmcgdGhlIGBvbmAgcHJvcGVydHkgd2hlbiBwYXNzZWRcbiAgICAgIC8vIGFzIGEgcmVmZXJlbmNlZCBvYmplY3RcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTZWxlY3RMaXN0LCB7XG4gICAgICAgIC4uLnRoaXMubGlzdERhdGEsXG4gICAgICB9LCBzbG90cylcbiAgICB9LFxuICAgIGdlbk1lbnUgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy4kX21lbnVQcm9wcyBhcyBhbnlcbiAgICAgIHByb3BzLmFjdGl2YXRvciA9IHRoaXMuJHJlZnNbJ2lucHV0LXNsb3QnXVxuXG4gICAgICAvLyBBdHRhY2ggdG8gcm9vdCBlbCBzbyB0aGF0XG4gICAgICAvLyBtZW51IGNvdmVycyBwcmVwZW5kL2FwcGVuZCBpY29uc1xuICAgICAgaWYgKFxuICAgICAgICAvLyBUT0RPOiBtYWtlIHRoaXMgYSBjb21wdXRlZCBwcm9wZXJ0eSBvciBoZWxwZXIgb3Igc29tZXRoaW5nXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSAnJyB8fCAvLyBJZiB1c2VkIGFzIGEgYm9vbGVhbiBwcm9wICg8di1tZW51IGF0dGFjaD4pXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSB0cnVlIHx8IC8vIElmIGJvdW5kIHRvIGEgYm9vbGVhbiAoPHYtbWVudSA6YXR0YWNoPVwidHJ1ZVwiPilcbiAgICAgICAgdGhpcy5hdHRhY2ggPT09ICdhdHRhY2gnIC8vIElmIGJvdW5kIGFzIGJvb2xlYW4gcHJvcCBpbiBwdWcgKHYtbWVudShhdHRhY2gpKVxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmF0dGFjaCA9IHRoaXMuJGVsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5hdHRhY2ggPSB0aGlzLmF0dGFjaFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTWVudSwge1xuICAgICAgICBhdHRyczogeyByb2xlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6ICh2YWw6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdmFsXG4gICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHZhbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Nyb2xsOiB0aGlzLm9uU2Nyb2xsLFxuICAgICAgICB9LFxuICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgIH0sIFt0aGlzLmdlbkxpc3QoKV0pXG4gICAgfSxcbiAgICBnZW5TZWxlY3Rpb25zICgpOiBWTm9kZSB7XG4gICAgICBsZXQgbGVuZ3RoID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgQXJyYXkobGVuZ3RoKVxuXG4gICAgICBsZXQgZ2VuU2VsZWN0aW9uXG4gICAgICBpZiAodGhpcy4kc2NvcGVkU2xvdHMuc2VsZWN0aW9uKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuU2xvdFNlbGVjdGlvblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0NoaXBzKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuQ2hpcFNlbGVjdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VuU2VsZWN0aW9uID0gdGhpcy5nZW5Db21tYVNlbGVjdGlvblxuICAgICAgfVxuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgY2hpbGRyZW5bbGVuZ3RoXSA9IGdlblNlbGVjdGlvbihcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNbbGVuZ3RoXSxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID09PSBjaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9ucycsXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlblNsb3RTZWxlY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5kZXg6IG51bWJlcik6IFZOb2RlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvbiEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGNsYXNzOiAndi1jaGlwLS1zZWxlY3QnLFxuICAgICAgICB9LFxuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzZWxlY3Q6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZDogaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLmlzSW50ZXJhY3RpdmUsXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0TWVudUluZGV4ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLm1lbnUgPyAodGhpcy4kcmVmcy5tZW51IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmxpc3RJbmRleCA6IC0xXG4gICAgfSxcbiAgICBnZXREaXNhYmxlZCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1EaXNhYmxlZCwgZmFsc2UpXG4gICAgfSxcbiAgICBnZXRUZXh0IChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQsIGl0ZW0pXG4gICAgfSxcbiAgICBnZXRWYWx1ZSAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1WYWx1ZSwgdGhpcy5nZXRUZXh0KGl0ZW0pKVxuICAgIH0sXG4gICAgb25CbHVyIChlPzogRXZlbnQpIHtcbiAgICAgIGUgJiYgdGhpcy4kZW1pdCgnYmx1cicsIGUpXG4gICAgfSxcbiAgICBvbkNoaXBJbnB1dCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pXG4gICAgICBlbHNlIHRoaXMuc2V0VmFsdWUobnVsbClcbiAgICAgIC8vIElmIGFsbCBpdGVtcyBoYXZlIGJlZW4gZGVsZXRlZCxcbiAgICAgIC8vIG9wZW4gYHYtbWVudWBcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTFcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc0ludGVyYWN0aXZlKSByZXR1cm5cblxuICAgICAgaWYgKCF0aGlzLmlzQXBwZW5kSW5uZXIoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9LFxuICAgIG9uRXNjRG93biAoZTogRXZlbnQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKHRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgb25LZXlQcmVzcyAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm11bHRpcGxlIHx8XG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5kaXNhYmxlTG9va3VwXG4gICAgICApIHJldHVyblxuXG4gICAgICBjb25zdCBLRVlCT0FSRF9MT09LVVBfVEhSRVNIT0xEID0gMTAwMCAvLyBtaWxsaXNlY29uZHNcbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICBpZiAobm93IC0gdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID4gS0VZQk9BUkRfTE9PS1VQX1RIUkVTSE9MRCkge1xuICAgICAgICB0aGlzLmtleWJvYXJkTG9va3VwUHJlZml4ID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXggKz0gZS5rZXkudG9Mb3dlckNhc2UoKVxuICAgICAgdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID0gbm93XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAodGhpcy5nZXRUZXh0KGl0ZW0pIHx8ICcnKS50b1N0cmluZygpXG5cbiAgICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXgpXG4gICAgICB9KVxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYWxsSXRlbXNbaW5kZXhdXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMubGFzdEl0ZW0gPSBNYXRoLm1heCh0aGlzLmxhc3RJdGVtLCBpbmRleCArIDUpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5yZXR1cm5PYmplY3QgPyBpdGVtIDogdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kcmVmcy5tZW51LmdldFRpbGVzKCkpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRNZW51SW5kZXgoaW5kZXgpKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5pc1JlYWRvbmx5ICYmIGUua2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSByZXR1cm5cblxuICAgICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZVxuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICAvLyBJZiBlbnRlciwgc3BhY2UsIG9wZW4gbWVudVxuICAgICAgaWYgKFtcbiAgICAgICAga2V5Q29kZXMuZW50ZXIsXG4gICAgICAgIGtleUNvZGVzLnNwYWNlLFxuICAgICAgXS5pbmNsdWRlcyhrZXlDb2RlKSkgdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcblxuICAgICAgaWYgKCFtZW51KSByZXR1cm5cblxuICAgICAgLy8gSWYgbWVudSBpcyBhY3RpdmUsIGFsbG93IGRlZmF1bHRcbiAgICAgIC8vIGxpc3RJbmRleCBjaGFuZ2UgZnJvbSBtZW51XG4gICAgICBpZiAodGhpcy5pc01lbnVBY3RpdmUgJiYga2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBtZW51LmNoYW5nZUxpc3RJbmRleChlKVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpsaXN0LWluZGV4JywgbWVudS5saXN0SW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIElmIG1lbnUgaXMgbm90IGFjdGl2ZSwgdXAgYW5kIGRvd24gY2FuIGRvXG4gICAgICAvLyBvbmUgb2YgMiB0aGluZ3MuIElmIG11bHRpcGxlLCBvcGVucyB0aGVcbiAgICAgIC8vIG1lbnUsIGlmIG5vdCwgd2lsbCBjeWNsZSB0aHJvdWdoIGFsbFxuICAgICAgLy8gYXZhaWxhYmxlIG9wdGlvbnNcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNNZW51QWN0aXZlICYmXG4gICAgICAgIFtrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93bl0uaW5jbHVkZXMoa2V5Q29kZSlcbiAgICAgICkgcmV0dXJuIHRoaXMub25VcERvd24oZSlcblxuICAgICAgLy8gSWYgZXNjYXBlIGRlYWN0aXZhdGUgdGhlIG1lbnVcbiAgICAgIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MpIHJldHVybiB0aGlzLm9uRXNjRG93bihlKVxuXG4gICAgICAvLyBJZiB0YWIgLSBzZWxlY3QgaXRlbSBvciBjbG9zZSBtZW51XG4gICAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSByZXR1cm4gdGhpcy5vblRhYkRvd24oZSlcblxuICAgICAgLy8gSWYgc3BhY2UgcHJldmVudERlZmF1bHRcbiAgICAgIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5zcGFjZSkgcmV0dXJuIHRoaXMub25TcGFjZURvd24oZSlcbiAgICB9LFxuICAgIG9uTWVudUFjdGl2ZUNoYW5nZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBJZiBtZW51IGlzIGNsb3NpbmcgYW5kIG11bGl0cGxlXG4gICAgICAvLyBvciBtZW51SW5kZXggaXMgYWxyZWFkeSBzZXRcbiAgICAgIC8vIHNraXAgbWVudSBpbmRleCByZWNhbGN1bGF0aW9uXG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLm11bHRpcGxlICYmICF2YWwpIHx8XG4gICAgICAgIHRoaXMuZ2V0TWVudUluZGV4KCkgPiAtMVxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUgfHwgIXRoaXMuaXNEaXJ0eSkgcmV0dXJuXG5cbiAgICAgIC8vIFdoZW4gbWVudSBvcGVucywgc2V0IGluZGV4IG9mIGZpcnN0IGFjdGl2ZSBpdGVtXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUudGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1lbnUudGlsZXNbaV0uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRoaXMuc2V0TWVudUluZGV4KGkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25Nb3VzZVVwIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzTW91c2VEb3duICYmXG4gICAgICAgIGUud2hpY2ggIT09IDMgJiZcbiAgICAgICAgdGhpcy5pc0ludGVyYWN0aXZlXG4gICAgICApIHtcbiAgICAgICAgLy8gSWYgYXBwZW5kIGlubmVyIGlzIHByZXNlbnRcbiAgICAgICAgLy8gYW5kIHRoZSB0YXJnZXQgaXMgaXRzZWxmXG4gICAgICAgIC8vIG9yIGluc2lkZSwgdG9nZ2xlIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuaXNBcHBlbmRJbm5lcihlLnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiAodGhpcy5pc01lbnVBY3RpdmUgPSAhdGhpcy5pc01lbnVBY3RpdmUpKVxuICAgICAgICAvLyBJZiB1c2VyIGlzIGNsaWNraW5nIGluIHRoZSBjb250YWluZXJcbiAgICAgICAgLy8gYW5kIGZpZWxkIGlzIGVuY2xvc2VkLCBhY3RpdmF0ZSBpdFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmNsb3NlZCkge1xuICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvblNjcm9sbCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsVG9wID0gMCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5sYXN0SXRlbSA+IHRoaXMuY29tcHV0ZWRJdGVtcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IHNob3dNb3JlSXRlbXMgPSAoXG4gICAgICAgICAgdGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsSGVpZ2h0IC1cbiAgICAgICAgICAodGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsVG9wICtcbiAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKS5jbGllbnRIZWlnaHQpXG4gICAgICAgICkgPCAyMDBcblxuICAgICAgICBpZiAoc2hvd01vcmVJdGVtcykge1xuICAgICAgICAgIHRoaXMubGFzdEl0ZW0gKz0gMjBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TcGFjZURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gICAgb25UYWJEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy4kcmVmcy5tZW51XG5cbiAgICAgIGlmICghbWVudSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSBtZW51LmFjdGl2ZVRpbGVcblxuICAgICAgLy8gQW4gaXRlbSB0aGF0IGlzIHNlbGVjdGVkIGJ5XG4gICAgICAvLyBtZW51LWluZGV4IHNob3VsZCB0b2dnbGVkXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLm11bHRpcGxlICYmXG4gICAgICAgIGFjdGl2ZVRpbGUgJiZcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmVcbiAgICAgICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGFjdGl2ZVRpbGUuY2xpY2soKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgbWFrZSBpdCBoZXJlLFxuICAgICAgICAvLyB0aGUgdXNlciBoYXMgbm8gc2VsZWN0ZWQgaW5kZXhlc1xuICAgICAgICAvLyBhbmQgaXMgcHJvYmFibHkgdGFiYmluZyBvdXRcbiAgICAgICAgdGhpcy5ibHVyKGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvblVwRG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUpIHJldHVyblxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkbyBub3QgY3ljbGUgdGhlaXIgdmFsdWVcbiAgICAgIC8vIHdoZW4gcHJlc3NpbmcgdXAgb3IgZG93biwgaW5zdGVhZCBhY3RpdmF0ZVxuICAgICAgLy8gdGhlIG1lbnVcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSByZXR1cm4gdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlXG5cbiAgICAgIC8vIEN5Y2xlIHRocm91Z2ggYXZhaWxhYmxlIHZhbHVlcyB0byBhY2hpZXZlXG4gICAgICAvLyBzZWxlY3QgbmF0aXZlIGJlaGF2aW9yXG4gICAgICBtZW51LmlzQm9vdGVkID0gdHJ1ZVxuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgbWVudS5nZXRUaWxlcygpXG4gICAgICAgIGtleUNvZGVzLnVwID09PSBrZXlDb2RlID8gbWVudS5wcmV2VGlsZSgpIDogbWVudS5uZXh0VGlsZSgpXG4gICAgICAgIG1lbnUuYWN0aXZlVGlsZSAmJiBtZW51LmFjdGl2ZVRpbGUuY2xpY2soKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlbGVjdEl0ZW0gKGl0ZW06IG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5yZXR1cm5PYmplY3QgPyBpdGVtIDogdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxWYWx1ZSA9ICh0aGlzLmludGVybmFsVmFsdWUgfHwgW10pLnNsaWNlKClcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZmluZEV4aXN0aW5nSW5kZXgoaXRlbSlcblxuICAgICAgICBpICE9PSAtMSA/IGludGVybmFsVmFsdWUuc3BsaWNlKGksIDEpIDogaW50ZXJuYWxWYWx1ZS5wdXNoKGl0ZW0pXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoaW50ZXJuYWxWYWx1ZS5tYXAoKGk6IG9iamVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJldHVybk9iamVjdCA/IGkgOiB0aGlzLmdldFZhbHVlKGkpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIC8vIFdoZW4gc2VsZWN0aW5nIG11bHRpcGxlXG4gICAgICAgIC8vIGFkanVzdCBtZW51IGFmdGVyIGVhY2hcbiAgICAgICAgLy8gc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLm1lbnUgJiZcbiAgICAgICAgICAgICh0aGlzLiRyZWZzLm1lbnUgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkudXBkYXRlRGltZW5zaW9ucygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHJlc2V0IGxpc3QgaW5kZXggZm9yIG11bHRpcGxlXG4gICAgICAgIC8vIHRvIGtlZXAgaGlnaGxpZ2h0IHdoZW4gYW4gaXRlbSBpcyB0b2dnbGVkXG4gICAgICAgIC8vIG9uIGFuZCBvZmZcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSByZXR1cm5cblxuICAgICAgICBjb25zdCBsaXN0SW5kZXggPSB0aGlzLmdldE1lbnVJbmRleCgpXG5cbiAgICAgICAgdGhpcy5zZXRNZW51SW5kZXgoLTEpXG5cbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gaXRlbSB0byByZS1oaWdobGlnaHRcbiAgICAgICAgLy8gd2hlbiBzZWxlY3Rpb25zIGFyZSBoaWRkZW5cbiAgICAgICAgaWYgKHRoaXMuaGlkZVNlbGVjdGVkKSByZXR1cm5cblxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLnNldE1lbnVJbmRleChsaXN0SW5kZXgpKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0TWVudUluZGV4IChpbmRleDogbnVtYmVyKSB7XG4gICAgICB0aGlzLiRyZWZzLm1lbnUgJiYgKCh0aGlzLiRyZWZzLm1lbnUgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubGlzdEluZGV4ID0gaW5kZXgpXG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZEl0ZW1zICgpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXVxuICAgICAgY29uc3QgdmFsdWVzID0gIXRoaXMubXVsdGlwbGUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgICA/IFt0aGlzLmludGVybmFsVmFsdWVdXG4gICAgICAgIDogdGhpcy5pbnRlcm5hbFZhbHVlXG5cbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgodiA9PiB0aGlzLnZhbHVlQ29tcGFyYXRvcihcbiAgICAgICAgICB0aGlzLmdldFZhbHVlKHYpLFxuICAgICAgICAgIHRoaXMuZ2V0VmFsdWUodmFsdWUpXG4gICAgICAgICkpXG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5hbGxJdGVtc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRJdGVtc1xuICAgIH0sXG4gICAgc2V0VmFsdWUgKHZhbHVlOiBhbnkpIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5pbnRlcm5hbFZhbHVlXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWx1ZVxuICAgICAgdmFsdWUgIT09IG9sZFZhbHVlICYmIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKVxuICAgIH0sXG4gICAgaXNBcHBlbmRJbm5lciAodGFyZ2V0OiBhbnkpIHtcbiAgICAgIC8vIHJldHVybiB0cnVlIGlmIGFwcGVuZCBpbm5lciBpcyBwcmVzZW50XG4gICAgICAvLyBhbmQgdGhlIHRhcmdldCBpcyBpdHNlbGYgb3IgaW5zaWRlXG4gICAgICBjb25zdCBhcHBlbmRJbm5lciA9IHRoaXMuJHJlZnNbJ2FwcGVuZC1pbm5lciddXG5cbiAgICAgIHJldHVybiBhcHBlbmRJbm5lciAmJiAoYXBwZW5kSW5uZXIgPT09IHRhcmdldCB8fCBhcHBlbmRJbm5lci5jb250YWlucyh0YXJnZXQpKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCAnLi9WR3JpZC5zYXNzJ1xuXG5pbXBvcnQgVnVlLCB7IFByb3BPcHRpb25zIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7IHVwcGVyRmlyc3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIG5vIHhzXG5jb25zdCBicmVha3BvaW50cyA9IFsnc20nLCAnbWQnLCAnbGcnLCAneGwnXVxuXG5jb25zdCBBTElHTk1FTlQgPSBbJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInXVxuXG5mdW5jdGlvbiBtYWtlUHJvcHMgKHByZWZpeDogc3RyaW5nLCBkZWY6ICgpID0+IFByb3BPcHRpb25zKSB7XG4gIHJldHVybiBicmVha3BvaW50cy5yZWR1Y2UoKHByb3BzLCB2YWwpID0+IHtcbiAgICBwcm9wc1twcmVmaXggKyB1cHBlckZpcnN0KHZhbCldID0gZGVmKClcbiAgICByZXR1cm4gcHJvcHNcbiAgfSwge30gYXMgRGljdGlvbmFyeTxQcm9wT3B0aW9ucz4pXG59XG5cbmNvbnN0IGFsaWduVmFsaWRhdG9yID0gKHN0cjogYW55KSA9PiBbLi4uQUxJR05NRU5ULCAnYmFzZWxpbmUnLCAnc3RyZXRjaCddLmluY2x1ZGVzKHN0cilcbmNvbnN0IGFsaWduUHJvcHMgPSBtYWtlUHJvcHMoJ2FsaWduJywgKCkgPT4gKHtcbiAgdHlwZTogU3RyaW5nLFxuICBkZWZhdWx0OiBudWxsLFxuICB2YWxpZGF0b3I6IGFsaWduVmFsaWRhdG9yLFxufSkpXG5cbmNvbnN0IGp1c3RpZnlWYWxpZGF0b3IgPSAoc3RyOiBhbnkpID0+IFsuLi5BTElHTk1FTlQsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCddLmluY2x1ZGVzKHN0cilcbmNvbnN0IGp1c3RpZnlQcm9wcyA9IG1ha2VQcm9wcygnanVzdGlmeScsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBqdXN0aWZ5VmFsaWRhdG9yLFxufSkpXG5cbmNvbnN0IGFsaWduQ29udGVudFZhbGlkYXRvciA9IChzdHI6IGFueSkgPT4gWy4uLkFMSUdOTUVOVCwgJ3NwYWNlLWJldHdlZW4nLCAnc3BhY2UtYXJvdW5kJywgJ3N0cmV0Y2gnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBhbGlnbkNvbnRlbnRQcm9wcyA9IG1ha2VQcm9wcygnYWxpZ25Db250ZW50JywgKCkgPT4gKHtcbiAgdHlwZTogU3RyaW5nLFxuICBkZWZhdWx0OiBudWxsLFxuICB2YWxpZGF0b3I6IGFsaWduQ29udGVudFZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBwcm9wTWFwID0ge1xuICBhbGlnbjogT2JqZWN0LmtleXMoYWxpZ25Qcm9wcyksXG4gIGp1c3RpZnk6IE9iamVjdC5rZXlzKGp1c3RpZnlQcm9wcyksXG4gIGFsaWduQ29udGVudDogT2JqZWN0LmtleXMoYWxpZ25Db250ZW50UHJvcHMpLFxufVxuXG5jb25zdCBjbGFzc01hcCA9IHtcbiAgYWxpZ246ICdhbGlnbicsXG4gIGp1c3RpZnk6ICdqdXN0aWZ5JyxcbiAgYWxpZ25Db250ZW50OiAnYWxpZ24tY29udGVudCcsXG59XG5cbmZ1bmN0aW9uIGJyZWFrcG9pbnRDbGFzcyAodHlwZToga2V5b2YgdHlwZW9mIHByb3BNYXAsIHByb3A6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcbiAgbGV0IGNsYXNzTmFtZSA9IGNsYXNzTWFwW3R5cGVdXG4gIGlmICh2YWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBpZiAocHJvcCkge1xuICAgIC8vIGFsaWduU20gLT4gU21cbiAgICBjb25zdCBicmVha3BvaW50ID0gcHJvcC5yZXBsYWNlKHR5cGUsICcnKVxuICAgIGNsYXNzTmFtZSArPSBgLSR7YnJlYWtwb2ludH1gXG4gIH1cbiAgLy8gLmFsaWduLWl0ZW1zLXNtLWNlbnRlclxuICBjbGFzc05hbWUgKz0gYC0ke3ZhbH1gXG4gIHJldHVybiBjbGFzc05hbWUudG9Mb3dlckNhc2UoKVxufVxuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBhbnlbXT4oKVxuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytcm93JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgIH0sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgbm9HdXR0ZXJzOiBCb29sZWFuLFxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBhbGlnblZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmFsaWduUHJvcHMsXG4gICAganVzdGlmeToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjoganVzdGlmeVZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmp1c3RpZnlQcm9wcyxcbiAgICBhbGlnbkNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGFsaWduQ29udGVudFZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmFsaWduQ29udGVudFByb3BzLFxuICB9LFxuICByZW5kZXIgKGgsIHsgcHJvcHMsIGRhdGEsIGNoaWxkcmVuIH0pIHtcbiAgICAvLyBTdXBlci1mYXN0IG1lbW9pemF0aW9uIGJhc2VkIG9uIHByb3BzLCA1eCBmYXN0ZXIgdGhhbiBKU09OLnN0cmluZ2lmeVxuICAgIGxldCBjYWNoZUtleSA9ICcnXG4gICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgICBjYWNoZUtleSArPSBTdHJpbmcoKHByb3BzIGFzIGFueSlbcHJvcF0pXG4gICAgfVxuICAgIGxldCBjbGFzc0xpc3QgPSBjYWNoZS5nZXQoY2FjaGVLZXkpXG5cbiAgICBpZiAoIWNsYXNzTGlzdCkge1xuICAgICAgY2xhc3NMaXN0ID0gW11cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBgYWxpZ25gLCBganVzdGlmeWAsIGBhbGlnbkNvbnRlbnRgIGJyZWFrcG9pbnQgcHJvcHNcbiAgICAgIGxldCB0eXBlOiBrZXlvZiB0eXBlb2YgcHJvcE1hcFxuICAgICAgZm9yICh0eXBlIGluIHByb3BNYXApIHtcbiAgICAgICAgcHJvcE1hcFt0eXBlXS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSAocHJvcHMgYXMgYW55KVtwcm9wXVxuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGJyZWFrcG9pbnRDbGFzcyh0eXBlLCBwcm9wLCB2YWx1ZSlcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBjbGFzc0xpc3QhLnB1c2goY2xhc3NOYW1lKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjbGFzc0xpc3QucHVzaCh7XG4gICAgICAgICduby1ndXR0ZXJzJzogcHJvcHMubm9HdXR0ZXJzLFxuICAgICAgICAncm93LS1kZW5zZSc6IHByb3BzLmRlbnNlLFxuICAgICAgICBbYGFsaWduLSR7cHJvcHMuYWxpZ259YF06IHByb3BzLmFsaWduLFxuICAgICAgICBbYGp1c3RpZnktJHtwcm9wcy5qdXN0aWZ5fWBdOiBwcm9wcy5qdXN0aWZ5LFxuICAgICAgICBbYGFsaWduLWNvbnRlbnQtJHtwcm9wcy5hbGlnbkNvbnRlbnR9YF06IHByb3BzLmFsaWduQ29udGVudCxcbiAgICAgIH0pXG5cbiAgICAgIGNhY2hlLnNldChjYWNoZUtleSwgY2xhc3NMaXN0KVxuICAgIH1cblxuICAgIHJldHVybiBoKFxuICAgICAgcHJvcHMudGFnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICdyb3cnLFxuICAgICAgICBjbGFzczogY2xhc3NMaXN0LFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlblxuICAgIClcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUZXh0YXJlYS5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIFZ1ZSB7XG4gICRyZWZzOiB7XG4gICAgaW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgfVxufVxuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zPG9wdGlvbnMgJlxuICBJbnN0YW5jZVR5cGU8dHlwZW9mIFZUZXh0RmllbGQ+XG4+KFxuICBWVGV4dEZpZWxkXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRleHRhcmVhJyxcblxuICBwcm9wczoge1xuICAgIGF1dG9Hcm93OiBCb29sZWFuLFxuICAgIG5vUmVzaXplOiBCb29sZWFuLFxuICAgIHJvd0hlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDI0LFxuICAgICAgdmFsaWRhdG9yOiAodjogYW55KSA9PiAhaXNOYU4ocGFyc2VGbG9hdCh2KSksXG4gICAgfSxcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNSxcbiAgICAgIHZhbGlkYXRvcjogKHY6IGFueSkgPT4gIWlzTmFOKHBhcnNlSW50KHYsIDEwKSksXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi10ZXh0YXJlYSc6IHRydWUsXG4gICAgICAgICd2LXRleHRhcmVhLS1hdXRvLWdyb3cnOiB0aGlzLmF1dG9Hcm93LFxuICAgICAgICAndi10ZXh0YXJlYS0tbm8tcmVzaXplJzogdGhpcy5ub1Jlc2l6ZUhhbmRsZSxcbiAgICAgICAgLi4uVlRleHRGaWVsZC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG5vUmVzaXplSGFuZGxlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm5vUmVzaXplIHx8IHRoaXMuYXV0b0dyb3dcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbGF6eVZhbHVlICgpIHtcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodClcbiAgICB9LFxuICAgIHJvd0hlaWdodCAoKSB7XG4gICAgICB0aGlzLmF1dG9Hcm93ICYmIHRoaXMuJG5leHRUaWNrKHRoaXMuY2FsY3VsYXRlSW5wdXRIZWlnaHQpXG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodCgpXG4gICAgfSwgMClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FsY3VsYXRlSW5wdXRIZWlnaHQgKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLiRyZWZzLmlucHV0XG4gICAgICBpZiAoIWlucHV0KSByZXR1cm5cblxuICAgICAgaW5wdXQuc3R5bGUuaGVpZ2h0ID0gJzAnXG4gICAgICBjb25zdCBoZWlnaHQgPSBpbnB1dC5zY3JvbGxIZWlnaHRcbiAgICAgIGNvbnN0IG1pbkhlaWdodCA9IHBhcnNlSW50KHRoaXMucm93cywgMTApICogcGFyc2VGbG9hdCh0aGlzLnJvd0hlaWdodClcbiAgICAgIC8vIFRoaXMgaGFzIHRvIGJlIGRvbmUgQVNBUCwgd2FpdGluZyBmb3IgVnVlXG4gICAgICAvLyB0byB1cGRhdGUgdGhlIERPTSBjYXVzZXMgdWdseSBsYXlvdXQganVtcGluZ1xuICAgICAgaW5wdXQuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBoZWlnaHQpICsgJ3B4J1xuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dC5jYWxsKHRoaXMpXG5cbiAgICAgIGlucHV0LnRhZyA9ICd0ZXh0YXJlYSdcbiAgICAgIGRlbGV0ZSBpbnB1dC5kYXRhIS5hdHRycyEudHlwZVxuICAgICAgaW5wdXQuZGF0YSEuYXR0cnMhLnJvd3MgPSB0aGlzLnJvd3NcblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBvbklucHV0IChlOiBFdmVudCkge1xuICAgICAgVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMub25JbnB1dC5jYWxsKHRoaXMsIGUpXG4gICAgICB0aGlzLmF1dG9Hcm93ICYmIHRoaXMuY2FsY3VsYXRlSW5wdXRIZWlnaHQoKVxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50cyBjbG9zaW5nIG9mIGFcbiAgICAgIC8vIGRpYWxvZyB3aGVuIHByZXNzaW5nXG4gICAgICAvLyBlbnRlclxuICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcbiAgICB9LFxuICB9LFxufSlcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LXN0ZXBwZXInLHttb2RlbDp7dmFsdWU6KF92bS5lMSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5lMT0kJHZ9LGV4cHJlc3Npb246XCJlMVwifX0sW19jKCdsb2FkaW5nJyx7YXR0cnM6e1wiYWN0aXZlXCI6X3ZtLmlzTG9hZGluZyxcImxvYWRlclwiOlwiYmFyc1wiLFwiaXMtZnVsbC1wYWdlXCI6dHJ1ZSxcImNvbG9yXCI6XCJibHVlXCJ9LG9uOntcInVwZGF0ZTphY3RpdmVcIjpmdW5jdGlvbigkZXZlbnQpe192bS5pc0xvYWRpbmc9JGV2ZW50fX19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXN0ZXBwZXItaGVhZGVyJyxbX2MoJ3Ytc3RlcHBlci1zdGVwJyx7YXR0cnM6e1wiY29tcGxldGVcIjpfdm0uZTEgPiAxLFwic3RlcFwiOlwiMVwiLFwiZWRpdGFibGVcIjpmYWxzZX19LFtfdm0uX3YoXCIgRnVsbCBOYW1lIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3Ytc3RlcHBlci1zdGVwJyx7YXR0cnM6e1wiY29tcGxldGVcIjpfdm0uZTEgPiAyLFwic3RlcFwiOlwiMlwiLFwiZWRpdGFibGVcIjpmYWxzZX19LFtfdm0uX3YoXCIgQ29udGFjdCBOdW1iZXIgXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3Ytc3RlcHBlci1pdGVtcycsW19jKCd2LXN0ZXBwZXItY29udGVudCcse2F0dHJzOntcInN0ZXBcIjpcIjFcIn19LFtfYygndi1jYXJkJyx7c3RhdGljQ2xhc3M6XCJtYi0xMlwiLGF0dHJzOntcImZsYXRcIjpcIlwifX0sW19jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwifX0sW19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwiLFwic20xMlwiOlwiXCJ9fSxbX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcInJpZ2h0XCI6XCJcIixcImRlbnNlXCI6XCJcIixcInNvbG9cIjpcIlwiLFwibGFiZWxcIjpcIkZ1bGxuYW1lXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJwbGFjZWhvbGRlclwiOlwiRnVsbG5hbWVcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZnVsbG5hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uZnVsbG5hbWU9JCR2fSxleHByZXNzaW9uOlwiZnVsbG5hbWVcIn19KV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1wiY29sb3JcIjpcInByaW1hcnlcIixcImRpc2FibGVkXCI6X3ZtLmZ1bGxuYW1lLmxlbmd0aCA8IDV9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXs7KF92bS5lMSA9IDIpLCBfdm0ubG9hZEF1dGgoKX19fSxbX3ZtLl92KFwiIENvbnRpbnVlIFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3Ytc3RlcHBlci1jb250ZW50Jyx7YXR0cnM6e1wic3RlcFwiOlwiMlwifX0sW19jKCdkaXYnLHthdHRyczp7XCJpZFwiOlwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwifX0pXSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDx2LXN0ZXBwZXIgdi1tb2RlbD1cImUxXCI+XG4gICAgICAgIDxsb2FkaW5nIDphY3RpdmUuc3luYz1cImlzTG9hZGluZ1wiIGxvYWRlcj1cImJhcnNcIiA6aXMtZnVsbC1wYWdlPVwidHJ1ZVwiIGNvbG9yPVwiYmx1ZVwiIC8+XG4gICAgICAgIDx2LXN0ZXBwZXItaGVhZGVyPlxuICAgICAgICAgICAgPHYtc3RlcHBlci1zdGVwIDpjb21wbGV0ZT1cImUxID4gMVwiIHN0ZXA9XCIxXCIgOmVkaXRhYmxlPVwiZmFsc2VcIj4gRnVsbCBOYW1lIDwvdi1zdGVwcGVyLXN0ZXA+XG4gICAgICAgICAgICA8di1zdGVwcGVyLXN0ZXAgOmNvbXBsZXRlPVwiZTEgPiAyXCIgc3RlcD1cIjJcIiA6ZWRpdGFibGU9XCJmYWxzZVwiPiBDb250YWN0IE51bWJlciA8L3Ytc3RlcHBlci1zdGVwPlxuICAgICAgICA8L3Ytc3RlcHBlci1oZWFkZXI+XG4gICAgICAgIDx2LXN0ZXBwZXItaXRlbXM+XG4gICAgICAgICAgICA8di1zdGVwcGVyLWNvbnRlbnQgc3RlcD1cIjFcIj5cbiAgICAgICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwibWItMTJcIiBmbGF0PlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQxMiBzbTEyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJmdWxsbmFtZVwiIHJpZ2h0IGRlbnNlIHNvbG8gbGFiZWw9XCJGdWxsbmFtZVwiIG91dGxpbmVkIHBsYWNlaG9sZGVyPVwiRnVsbG5hbWVcIiAvPiA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIDpkaXNhYmxlZD1cImZ1bGxuYW1lLmxlbmd0aCA8IDVcIiBAY2xpY2s9XCI7KGUxID0gMiksIGxvYWRBdXRoKClcIj4gQ29udGludWUgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi1zdGVwcGVyLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1zdGVwcGVyLWNvbnRlbnQgc3RlcD1cIjJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiIC8+IDwvdi1zdGVwcGVyLWNvbnRlbnQ+XG4gICAgICAgIDwvdi1zdGVwcGVyLWl0ZW1zPlxuICAgIDwvdi1zdGVwcGVyPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9maXJlYmFzZXVpL2Rpc3QvZmlyZWJhc2V1aS5jc3MnXG5pbXBvcnQgTG9hZGluZyBmcm9tICd2dWUtbG9hZGluZy1vdmVybGF5J1xuaW1wb3J0ICd2dWUtbG9hZGluZy1vdmVybGF5L2Rpc3QvdnVlLWxvYWRpbmcuY3NzJ1xuaW1wb3J0IHtcbiAgICBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlXG59IGZyb20gJ2dlb2ZpcmVzdG9yZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIExvYWRpbmdcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdWxsbmFtZTogJycsXG4gICAgICAgICAgICBlMTogMSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyB1cGRhdGVVc2VyKGF1dGhVc2VyKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2F1dGgvdXBkYXRlVXNlckRpc3BsYXlOYW1lJywgdGhpcy5mdWxsbmFtZSlcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhdXRoL2dldEZDTVRva2VuJ11cbiAgICAgICAgICAgIGNvbnN0IGZpcmVzdG9yZSA9IHRoaXMuJGZpcmVTdG9yZU9iaigpXG4gICAgICAgICAgICBjb25zdCByZWYgPSBuZXcgR2VvQ29sbGVjdGlvblJlZmVyZW5jZShmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKSlcbiAgICAgICAgICAgIGxldCBkID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGF1dGhVc2VyLnVpZCkuZ2V0KClcbiAgICAgICAgICAgIGlmICghZC5leGlzdHMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCByZWYuZG9jKGF1dGhVc2VyLnVpZCkuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IG5ldyB0aGlzLiRmaXJlU3RvcmVPYmouR2VvUG9pbnQoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgIHRva2VuczogW3Rva2VuXSxcbiAgICAgICAgICAgICAgICAgICAgcHJvbW9Db2RlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBhdXRoVXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGF1dGhVc2VyLnBob25lTnVtYmVyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGF1dGhVc2VyLnVpZCkudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ2QuZGlzcGxheU5hbWUnOiBhdXRoVXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2QucGhvbmVOdW1iZXInOiBhdXRoVXNlci5waG9uZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgJ2QudG9rZW5zJzogdGhpcy4kZmlyZVN0b3JlT2JqLkZpZWxkVmFsdWUuYXJyYXlVbmlvbih0b2tlbilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2FkaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRBdXRoKCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGggPSB0aGlzLiRmaXJlQXV0aE9iaigpXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJlYmFzZXVpID0gcmVxdWlyZSgnZmlyZWJhc2V1aScpXG4gICAgICAgICAgICAgICAgY29uc3QgdWkgPSBmaXJlYmFzZXVpLmF1dGguQXV0aFVJLmdldEluc3RhbmNlKCkgfHwgbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoYXV0aClcbiAgICAgICAgICAgICAgICB1aS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHRoaXMuJGZpcmVBdXRoT2JqLlBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvdW50cnk6ICdQSCdcbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbkluRmFpbHVyZShlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlICE9PSAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWQgPSBlcnJvci5jcmVkZW50aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYyBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQoYXV0aFJlc3VsdCwgcmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgYXV0aFJlc3VsdC51c2VyLnVwZGF0ZVByb2ZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogc2VsZi5mdWxsbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi51cGRhdGVVc2VyKGF1dGhSZXN1bHQudXNlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaXJlVWkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpcmVVaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WU3RlcHBlci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVlN0ZXBwZXJTdGVwIGZyb20gJy4vVlN0ZXBwZXJTdGVwJ1xuaW1wb3J0IFZTdGVwcGVyQ29udGVudCBmcm9tICcuL1ZTdGVwcGVyQ29udGVudCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgeyBwcm92aWRlIGFzIFJlZ2lzdHJhYmxlUHJvdmlkZSB9IGZyb20gJy4uLy4uL21peGlucy9yZWdpc3RyYWJsZSdcbmltcG9ydCBQcm94eWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Byb3h5YWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgYnJlYWtpbmcgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgUmVnaXN0cmFibGVQcm92aWRlKCdzdGVwcGVyJyksXG4gIFByb3h5YWJsZSxcbiAgVGhlbWVhYmxlXG4pXG5cbnR5cGUgVlN0ZXBwZXJTdGVwSW5zdGFuY2UgPSBJbnN0YW5jZVR5cGU8dHlwZW9mIFZTdGVwcGVyU3RlcD5cbnR5cGUgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2UgPSBJbnN0YW5jZVR5cGU8dHlwZW9mIFZTdGVwcGVyQ29udGVudD5cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc3RlcHBlcicsXG5cbiAgcHJvdmlkZSAoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RlcENsaWNrOiB0aGlzLnN0ZXBDbGljayxcbiAgICAgIGlzVmVydGljYWw6IHRoaXMudmVydGljYWwsXG4gICAgfVxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWx0TGFiZWxzOiBCb29sZWFuLFxuICAgIG5vbkxpbmVhcjogQm9vbGVhbixcbiAgICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICBjb25zdCBkYXRhOiBEaWN0aW9uYXJ5PGFueT4gPSB7XG4gICAgICBpc0Jvb3RlZDogZmFsc2UsXG4gICAgICBzdGVwczogW10gYXMgVlN0ZXBwZXJTdGVwSW5zdGFuY2VbXSxcbiAgICAgIGNvbnRlbnQ6IFtdIGFzIFZTdGVwcGVyQ29udGVudEluc3RhbmNlW10sXG4gICAgICBpc1JldmVyc2U6IGZhbHNlLFxuICAgIH1cblxuICAgIGRhdGEuaW50ZXJuYWxMYXp5VmFsdWUgPSB0aGlzLnZhbHVlICE9IG51bGxcbiAgICAgID8gdGhpcy52YWx1ZVxuICAgICAgOiAoZGF0YVswXSB8fCB7fSkuc3RlcCB8fCAxXG5cbiAgICByZXR1cm4gZGF0YVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXN0ZXBwZXItLWlzLWJvb3RlZCc6IHRoaXMuaXNCb290ZWQsXG4gICAgICAgICd2LXN0ZXBwZXItLXZlcnRpY2FsJzogdGhpcy52ZXJ0aWNhbCxcbiAgICAgICAgJ3Ytc3RlcHBlci0tYWx0LWxhYmVscyc6IHRoaXMuYWx0TGFiZWxzLFxuICAgICAgICAndi1zdGVwcGVyLS1ub24tbGluZWFyJzogdGhpcy5ub25MaW5lYXIsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbFZhbHVlICh2YWwsIG9sZFZhbCkge1xuICAgICAgdGhpcy5pc1JldmVyc2UgPSBOdW1iZXIodmFsKSA8IE51bWJlcihvbGRWYWwpXG5cbiAgICAgIG9sZFZhbCAmJiAodGhpcy5pc0Jvb3RlZCA9IHRydWUpXG5cbiAgICAgIHRoaXMudXBkYXRlVmlldygpXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRsaXN0ZW5lcnMuaW5wdXQpIHtcbiAgICAgIGJyZWFraW5nKCdAaW5wdXQnLCAnQGNoYW5nZScsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMudXBkYXRlVmlldygpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHJlZ2lzdGVyIChpdGVtOiBWU3RlcHBlclN0ZXBJbnN0YW5jZSB8IFZTdGVwcGVyQ29udGVudEluc3RhbmNlKSB7XG4gICAgICBpZiAoaXRlbS4kb3B0aW9ucy5uYW1lID09PSAndi1zdGVwcGVyLXN0ZXAnKSB7XG4gICAgICAgIHRoaXMuc3RlcHMucHVzaChpdGVtIGFzIFZTdGVwcGVyU3RlcEluc3RhbmNlKVxuICAgICAgfSBlbHNlIGlmIChpdGVtLiRvcHRpb25zLm5hbWUgPT09ICd2LXN0ZXBwZXItY29udGVudCcpIHtcbiAgICAgICAgKGl0ZW0gYXMgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2UpLmlzVmVydGljYWwgPSB0aGlzLnZlcnRpY2FsXG4gICAgICAgIHRoaXMuY29udGVudC5wdXNoKGl0ZW0gYXMgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2UpXG4gICAgICB9XG4gICAgfSxcbiAgICB1bnJlZ2lzdGVyIChpdGVtOiBWU3RlcHBlclN0ZXBJbnN0YW5jZSB8IFZTdGVwcGVyQ29udGVudEluc3RhbmNlKSB7XG4gICAgICBpZiAoaXRlbS4kb3B0aW9ucy5uYW1lID09PSAndi1zdGVwcGVyLXN0ZXAnKSB7XG4gICAgICAgIHRoaXMuc3RlcHMgPSB0aGlzLnN0ZXBzLmZpbHRlcigoaTogVlN0ZXBwZXJTdGVwSW5zdGFuY2UpID0+IGkgIT09IGl0ZW0pXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uJG9wdGlvbnMubmFtZSA9PT0gJ3Ytc3RlcHBlci1jb250ZW50Jykge1xuICAgICAgICAoaXRlbSBhcyBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSkuaXNWZXJ0aWNhbCA9IHRoaXMudmVydGljYWxcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmZpbHRlcigoaTogVlN0ZXBwZXJDb250ZW50SW5zdGFuY2UpID0+IGkgIT09IGl0ZW0pXG4gICAgICB9XG4gICAgfSxcbiAgICBzdGVwQ2xpY2sgKHN0ZXA6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gKHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHN0ZXApKVxuICAgIH0sXG4gICAgdXBkYXRlVmlldyAoKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMuc3RlcHMubGVuZ3RoOyAtLWluZGV4ID49IDA7KSB7XG4gICAgICAgIHRoaXMuc3RlcHNbaW5kZXhdLnRvZ2dsZSh0aGlzLmludGVybmFsVmFsdWUgYXMgYW55KVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLmNvbnRlbnQubGVuZ3RoOyAtLWluZGV4ID49IDA7KSB7XG4gICAgICAgIHRoaXMuY29udGVudFtpbmRleF0udG9nZ2xlKHRoaXMuaW50ZXJuYWxWYWx1ZSBhcyBhbnksIHRoaXMuaXNSZXZlcnNlKVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc3RlcHBlcicsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IHtcbiAgVlRhYlRyYW5zaXRpb24sXG4gIFZUYWJSZXZlcnNlVHJhbnNpdGlvbixcbn0gZnJvbSAnLi4vdHJhbnNpdGlvbnMnXG5cbi8vIE1peGluc1xuaW1wb3J0IHsgaW5qZWN0IGFzIFJlZ2lzdHJhYmxlSW5qZWN0IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3JlZ2lzdHJhYmxlJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMsIFZOb2RlRGF0YSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgUmVnaXN0cmFibGVJbmplY3QoJ3N0ZXBwZXInLCAndi1zdGVwcGVyLWNvbnRlbnQnLCAndi1zdGVwcGVyJylcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICB3cmFwcGVyOiBIVE1MRWxlbWVudFxuICB9XG4gIGlzVmVydGljYWxQcm92aWRlZDogYm9vbGVhblxufVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi1zdGVwcGVyLWNvbnRlbnQnLFxuXG4gIGluamVjdDoge1xuICAgIGlzVmVydGljYWxQcm92aWRlZDoge1xuICAgICAgZnJvbTogJ2lzVmVydGljYWwnLFxuICAgIH0sXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBzdGVwOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiAwIGFzIG51bWJlciB8IHN0cmluZyxcbiAgICAgIC8vIE11c3QgYmUgbnVsbCB0byBhbGxvd1xuICAgICAgLy8gcHJldmlvdXMgY29tcGFyaXNvblxuICAgICAgaXNBY3RpdmU6IG51bGwgYXMgYm9vbGVhbiB8IG51bGwsXG4gICAgICBpc1JldmVyc2U6IGZhbHNlLFxuICAgICAgaXNWZXJ0aWNhbDogdGhpcy5pc1ZlcnRpY2FsUHJvdmlkZWQsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRUcmFuc2l0aW9uICgpOiBGdW5jdGlvbmFsQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgICAvLyBGaXggZm9yICM4OTc4XG4gICAgICBjb25zdCByZXZlcnNlID0gdGhpcy4kdnVldGlmeS5ydGwgPyAhdGhpcy5pc1JldmVyc2UgOiB0aGlzLmlzUmV2ZXJzZVxuXG4gICAgICByZXR1cm4gcmV2ZXJzZVxuICAgICAgICA/IFZUYWJSZXZlcnNlVHJhbnNpdGlvblxuICAgICAgICA6IFZUYWJUcmFuc2l0aW9uXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBpZiAoIXRoaXMuaXNWZXJ0aWNhbCkgcmV0dXJuIHt9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGlzQWN0aXZlIChjdXJyZW50LCBwcmV2aW91cykge1xuICAgICAgLy8gSWYgYWN0aXZlIGFuZCB0aGUgcHJldmlvdXMgc3RhdGVcbiAgICAgIC8vIHdhcyBudWxsLCBpcyBqdXN0IGJvb3RpbmcgdXBcbiAgICAgIGlmIChjdXJyZW50ICYmIHByZXZpb3VzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAnYXV0bydcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pc1ZlcnRpY2FsKSByZXR1cm5cblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHRoaXMuZW50ZXIoKVxuICAgICAgZWxzZSB0aGlzLmxlYXZlKClcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuJHJlZnMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgdGhpcy5vblRyYW5zaXRpb24sXG4gICAgICBmYWxzZVxuICAgIClcbiAgICB0aGlzLnN0ZXBwZXIgJiYgdGhpcy5zdGVwcGVyLnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgdGhpcy4kcmVmcy53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgICB0aGlzLm9uVHJhbnNpdGlvbixcbiAgICAgIGZhbHNlXG4gICAgKVxuICAgIHRoaXMuc3RlcHBlciAmJiB0aGlzLnN0ZXBwZXIudW5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvblRyYW5zaXRpb24gKGU6IFRyYW5zaXRpb25FdmVudCkge1xuICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8XG4gICAgICAgIGUucHJvcGVydHlOYW1lICE9PSAnaGVpZ2h0J1xuICAgICAgKSByZXR1cm5cblxuICAgICAgdGhpcy5oZWlnaHQgPSAnYXV0bydcbiAgICB9LFxuICAgIGVudGVyICgpIHtcbiAgICAgIGxldCBzY3JvbGxIZWlnaHQgPSAwXG5cbiAgICAgIC8vIFJlbmRlciBidWcgd2l0aCBoZWlnaHRcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHNjcm9sbEhlaWdodCA9IHRoaXMuJHJlZnMud3JhcHBlci5zY3JvbGxIZWlnaHRcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaGVpZ2h0ID0gMFxuXG4gICAgICAvLyBHaXZlIHRoZSBjb2xsYXBzaW5nIGVsZW1lbnQgdGltZSB0byBjb2xsYXBzZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlzQWN0aXZlICYmICh0aGlzLmhlaWdodCA9IChzY3JvbGxIZWlnaHQgfHwgJ2F1dG8nKSksIDQ1MClcbiAgICB9LFxuICAgIGxlYXZlICgpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy4kcmVmcy53cmFwcGVyLmNsaWVudEhlaWdodFxuICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5oZWlnaHQgPSAwKSwgMTApXG4gICAgfSxcbiAgICB0b2dnbGUgKHN0ZXA6IHN0cmluZyB8IG51bWJlciwgcmV2ZXJzZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHN0ZXAudG9TdHJpbmcoKSA9PT0gdGhpcy5zdGVwLnRvU3RyaW5nKClcbiAgICAgIHRoaXMuaXNSZXZlcnNlID0gcmV2ZXJzZVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGNvbnRlbnREYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXN0ZXBwZXJfX2NvbnRlbnQnLFxuICAgIH0gYXMgVk5vZGVEYXRhXG4gICAgY29uc3Qgd3JhcHBlckRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc3RlcHBlcl9fd3JhcHBlcicsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWZXJ0aWNhbCkge1xuICAgICAgY29udGVudERhdGEuZGlyZWN0aXZlcyA9IFt7XG4gICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbnN0IHdyYXBwZXIgPSBoKCdkaXYnLCB3cmFwcGVyRGF0YSwgW3RoaXMuJHNsb3RzLmRlZmF1bHRdKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBoKCdkaXYnLCBjb250ZW50RGF0YSwgW3dyYXBwZXJdKVxuXG4gICAgcmV0dXJuIGgodGhpcy5jb21wdXRlZFRyYW5zaXRpb24sIHtcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgfSwgW2NvbnRlbnRdKVxuICB9LFxufSlcbiIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgeyBpbmplY3QgYXMgUmVnaXN0cmFibGVJbmplY3QgfSBmcm9tICcuLi8uLi9taXhpbnMvcmVnaXN0cmFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuXG50eXBlIFZ1ZXRpZnlTdGVwcGVyUnVsZVZhbGlkYXRvciA9ICgpID0+IHN0cmluZyB8IGJvb2xlYW5cblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBSZWdpc3RyYWJsZUluamVjdCgnc3RlcHBlcicsICd2LXN0ZXBwZXItc3RlcCcsICd2LXN0ZXBwZXInKVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEluc3RhbmNlVHlwZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICBzdGVwQ2xpY2s6IChzdGVwOiBudW1iZXIgfCBzdHJpbmcpID0+IHZvaWRcbn1cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXN0ZXBwZXItc3RlcCcsXG5cbiAgZGlyZWN0aXZlczogeyByaXBwbGUgfSxcblxuICBpbmplY3Q6IFsnc3RlcENsaWNrJ10sXG5cbiAgcHJvcHM6IHtcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgY29tcGxldGU6IEJvb2xlYW4sXG4gICAgY29tcGxldGVJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNvbXBsZXRlJyxcbiAgICB9LFxuICAgIGVkaXRhYmxlOiBCb29sZWFuLFxuICAgIGVkaXRJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGVkaXQnLFxuICAgIH0sXG4gICAgZXJyb3JJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGVycm9yJyxcbiAgICB9LFxuICAgIHJ1bGVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxWdWV0aWZ5U3RlcHBlclJ1bGVWYWxpZGF0b3JbXT4sXG4gICAgc3RlcDogW051bWJlciwgU3RyaW5nXSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgaXNJbmFjdGl2ZTogdHJ1ZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3Ytc3RlcHBlcl9fc3RlcC0tYWN0aXZlJzogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgJ3Ytc3RlcHBlcl9fc3RlcC0tZWRpdGFibGUnOiB0aGlzLmVkaXRhYmxlLFxuICAgICAgICAndi1zdGVwcGVyX19zdGVwLS1pbmFjdGl2ZSc6IHRoaXMuaXNJbmFjdGl2ZSxcbiAgICAgICAgJ3Ytc3RlcHBlcl9fc3RlcC0tZXJyb3IgZXJyb3ItLXRleHQnOiB0aGlzLmhhc0Vycm9yLFxuICAgICAgICAndi1zdGVwcGVyX19zdGVwLS1jb21wbGV0ZSc6IHRoaXMuY29tcGxldGUsXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNFcnJvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5ydWxlcy5zb21lKHZhbGlkYXRlID0+IHZhbGlkYXRlKCkgIT09IHRydWUpXG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLnN0ZXBwZXIgJiYgdGhpcy5zdGVwcGVyLnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgdGhpcy5zdGVwcGVyICYmIHRoaXMuc3RlcHBlci51bnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcblxuICAgICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgdGhpcy5zdGVwQ2xpY2sodGhpcy5zdGVwKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuSWNvbiAoaWNvbjogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwgaWNvbilcbiAgICB9LFxuICAgIGdlbkxhYmVsICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyX19sYWJlbCcsXG4gICAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICAgIH0sXG4gICAgZ2VuU3RlcCAoKSB7XG4gICAgICBjb25zdCBjb2xvciA9ICghdGhpcy5oYXNFcnJvciAmJiAodGhpcy5jb21wbGV0ZSB8fCB0aGlzLmlzQWN0aXZlKSkgPyB0aGlzLmNvbG9yIDogZmFsc2VcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcihjb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc3RlcHBlcl9fc3RlcF9fc3RlcCcsXG4gICAgICB9KSwgdGhpcy5nZW5TdGVwQ29udGVudCgpKVxuICAgIH0sXG4gICAgZ2VuU3RlcENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuXG4gICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuSWNvbih0aGlzLmVycm9ySWNvbikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGxldGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuSWNvbih0aGlzLmVkaXRJY29uKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuSWNvbih0aGlzLmNvbXBsZXRlSWNvbikpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goU3RyaW5nKHRoaXMuc3RlcCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGlsZHJlblxuICAgIH0sXG4gICAgdG9nZ2xlIChzdGVwOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBzdGVwLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RlcC50b1N0cmluZygpXG4gICAgICB0aGlzLmlzSW5hY3RpdmUgPSBOdW1iZXIoc3RlcCkgPCBOdW1iZXIodGhpcy5zdGVwKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc3RlcHBlcl9fc3RlcCcsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogJ3JpcHBsZScsXG4gICAgICAgIHZhbHVlOiB0aGlzLmVkaXRhYmxlLFxuICAgICAgfV0sXG4gICAgICBvbjogeyBjbGljazogdGhpcy5jbGljayB9LFxuICAgIH0sIFtcbiAgICAgIHRoaXMuZ2VuU3RlcCgpLFxuICAgICAgdGhpcy5nZW5MYWJlbCgpLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBWU3RlcHBlciBmcm9tICcuL1ZTdGVwcGVyJ1xuaW1wb3J0IFZTdGVwcGVyU3RlcCBmcm9tICcuL1ZTdGVwcGVyU3RlcCdcbmltcG9ydCBWU3RlcHBlckNvbnRlbnQgZnJvbSAnLi9WU3RlcHBlckNvbnRlbnQnXG5cbmNvbnN0IFZTdGVwcGVySGVhZGVyID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1zdGVwcGVyX19oZWFkZXInKVxuY29uc3QgVlN0ZXBwZXJJdGVtcyA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3Ytc3RlcHBlcl9faXRlbXMnKVxuXG5leHBvcnQge1xuICBWU3RlcHBlcixcbiAgVlN0ZXBwZXJDb250ZW50LFxuICBWU3RlcHBlclN0ZXAsXG4gIFZTdGVwcGVySGVhZGVyLFxuICBWU3RlcHBlckl0ZW1zLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVlN0ZXBwZXIsXG4gICAgVlN0ZXBwZXJDb250ZW50LFxuICAgIFZTdGVwcGVyU3RlcCxcbiAgICBWU3RlcHBlckhlYWRlcixcbiAgICBWU3RlcHBlckl0ZW1zLFxuICB9LFxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaXJlVWkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmN2JiNTUwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpcmVVaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpcmVVaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjEyMjBkMTEyXCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRBY3Rpb25zIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRleHQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWU3RlcHBlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlN0ZXBwZXInO1xuaW1wb3J0IHsgVlN0ZXBwZXJDb250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3RlcHBlcic7XG5pbXBvcnQgeyBWU3RlcHBlckhlYWRlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlN0ZXBwZXInO1xuaW1wb3J0IHsgVlN0ZXBwZXJJdGVtcyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlN0ZXBwZXInO1xuaW1wb3J0IHsgVlN0ZXBwZXJTdGVwIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3RlcHBlcic7XG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dEZpZWxkJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCdG4sVkNhcmQsVkNhcmRBY3Rpb25zLFZDYXJkVGV4dCxWRmxleCxWTGF5b3V0LFZTcGFjZXIsVlN0ZXBwZXIsVlN0ZXBwZXJDb250ZW50LFZTdGVwcGVySGVhZGVyLFZTdGVwcGVySXRlbXMsVlN0ZXBwZXJTdGVwLFZUZXh0RmllbGR9KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCAnLi9WU2ltcGxlVGFibGUuc2FzcydcblxuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2ltcGxlLXRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGZpeGVkSGVhZGVyOiBCb29sZWFuLFxuICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWRhdGEtdGFibGUtLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ3YtZGF0YS10YWJsZS0tZml4ZWQtaGVpZ2h0JzogISF0aGlzLmhlaWdodCAmJiAhdGhpcy5maXhlZEhlYWRlcixcbiAgICAgICAgJ3YtZGF0YS10YWJsZS0tZml4ZWQtaGVhZGVyJzogdGhpcy5maXhlZEhlYWRlcixcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuV3JhcHBlciAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc2xvdHMud3JhcHBlciB8fCB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1kYXRhLXRhYmxlX193cmFwcGVyJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpLFxuICAgICAgICB9LFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KCd0YWJsZScsIHRoaXMuJHNsb3RzLmRlZmF1bHQpLFxuICAgICAgXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWRhdGEtdGFibGUnLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICB9LCBbXG4gICAgICB0aGlzLiRzbG90cy50b3AsXG4gICAgICB0aGlzLmdlbldyYXBwZXIoKSxcbiAgICAgIHRoaXMuJHNsb3RzLmJvdHRvbSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBWRXhwYW5zaW9uUGFuZWxzIGZyb20gJy4vVkV4cGFuc2lvblBhbmVscydcbmltcG9ydCBWRXhwYW5zaW9uUGFuZWxIZWFkZXIgZnJvbSAnLi9WRXhwYW5zaW9uUGFuZWxIZWFkZXInXG5pbXBvcnQgVkV4cGFuc2lvblBhbmVsQ29udGVudCBmcm9tICcuL1ZFeHBhbnNpb25QYW5lbENvbnRlbnQnXG5cbi8vIE1peGluc1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBHcm91cGFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL2dyb3VwYWJsZSdcbmltcG9ydCB7IHByb3ZpZGUgYXMgUmVnaXN0cmFibGVQcm92aWRlIH0gZnJvbSAnLi4vLi4vbWl4aW5zL3JlZ2lzdHJhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbnR5cGUgVkV4cGFuc2lvblBhbmVsSGVhZGVySW5zdGFuY2UgPSBJbnN0YW5jZVR5cGU8dHlwZW9mIFZFeHBhbnNpb25QYW5lbEhlYWRlcj5cbnR5cGUgVkV4cGFuc2lvblBhbmVsQ29udGVudEluc3RhbmNlID0gSW5zdGFuY2VUeXBlPHR5cGVvZiBWRXhwYW5zaW9uUGFuZWxDb250ZW50PlxuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIEdyb3VwYWJsZUZhY3Rvcnk8J2V4cGFuc2lvblBhbmVscycsIHR5cGVvZiBWRXhwYW5zaW9uUGFuZWxzPignZXhwYW5zaW9uUGFuZWxzJywgJ3YtZXhwYW5zaW9uLXBhbmVsJywgJ3YtZXhwYW5zaW9uLXBhbmVscycpLFxuICBSZWdpc3RyYWJsZVByb3ZpZGUoJ2V4cGFuc2lvblBhbmVsJywgdHJ1ZSlcbiAgLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtZXhwYW5zaW9uLXBhbmVsJyxcblxuICBwcm9wczoge1xuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBudWxsIGFzIFZFeHBhbnNpb25QYW5lbENvbnRlbnRJbnN0YW5jZSB8IG51bGwsXG4gICAgICBoZWFkZXI6IG51bGwgYXMgVkV4cGFuc2lvblBhbmVsSGVhZGVySW5zdGFuY2UgfCBudWxsLFxuICAgICAgbmV4dElzQWN0aXZlOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVsLS1hY3RpdmUnOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICAndi1leHBhbnNpb24tcGFuZWwtLW5leHQtYWN0aXZlJzogdGhpcy5uZXh0SXNBY3RpdmUsXG4gICAgICAgICd2LWV4cGFuc2lvbi1wYW5lbC0tZGlzYWJsZWQnOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgIC4uLnRoaXMuZ3JvdXBDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNEaXNhYmxlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbnNpb25QYW5lbHMuZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZFxuICAgIH0sXG4gICAgaXNSZWFkb25seSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbnNpb25QYW5lbHMucmVhZG9ubHkgfHwgdGhpcy5yZWFkb25seVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHJlZ2lzdGVyQ29udGVudCAodm06IFZFeHBhbnNpb25QYW5lbENvbnRlbnRJbnN0YW5jZSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gdm1cbiAgICB9LFxuICAgIHVucmVnaXN0ZXJDb250ZW50ICgpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IG51bGxcbiAgICB9LFxuICAgIHJlZ2lzdGVySGVhZGVyICh2bTogVkV4cGFuc2lvblBhbmVsSGVhZGVySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaGVhZGVyID0gdm1cbiAgICAgIHZtLiRvbignY2xpY2snLCB0aGlzLm9uQ2xpY2spXG4gICAgfSxcbiAgICB1bnJlZ2lzdGVySGVhZGVyICgpIHtcbiAgICAgIHRoaXMuaGVhZGVyID0gbnVsbFxuICAgIH0sXG4gICAgb25DbGljayAoZTogTW91c2VFdmVudCkge1xuICAgICAgaWYgKGUuZGV0YWlsKSB0aGlzLmhlYWRlciEuJGVsLmJsdXIoKVxuXG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpXG5cbiAgICAgIHRoaXMuaXNSZWFkb25seSB8fCB0aGlzLmlzRGlzYWJsZWQgfHwgdGhpcy50b2dnbGUoKVxuICAgIH0sXG4gICAgdG9nZ2xlICgpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAodGhpcy5jb250ZW50KSB0aGlzLmNvbnRlbnQuaXNCb290ZWQgPSB0cnVlXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLiRlbWl0KCdjaGFuZ2UnKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWV4cGFuc2lvbi1wYW5lbCcsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBTdHJpbmcodGhpcy5pc0FjdGl2ZSksXG4gICAgICB9LFxuICAgIH0sIGdldFNsb3QodGhpcykpXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZFeHBhbnNpb25QYW5lbCBmcm9tICcuL1ZFeHBhbnNpb25QYW5lbCdcbmltcG9ydCB7IFZFeHBhbmRUcmFuc2l0aW9uIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMnXG5cbi8vIE1peGluc1xuaW1wb3J0IEJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9ib290YWJsZSdcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uLy4uL21peGlucy9yZWdpc3RyYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlLCB7IFZOb2RlLCBWdWVDb25zdHJ1Y3RvciB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQm9vdGFibGUsXG4gIENvbG9yYWJsZSxcbiAgUmVnaXN0cmFibGVJbmplY3Q8J2V4cGFuc2lvblBhbmVsJywgVnVlQ29uc3RydWN0b3I8VnVlPj4oJ2V4cGFuc2lvblBhbmVsJywgJ3YtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQnLCAndi1leHBhbnNpb24tcGFuZWwnKVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgZXhwYW5zaW9uUGFuZWw6IEluc3RhbmNlVHlwZTx0eXBlb2YgVkV4cGFuc2lvblBhbmVsPlxufVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi1leHBhbnNpb24tcGFuZWwtY29udGVudCcsXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0FjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbnNpb25QYW5lbC5pc0FjdGl2ZVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5leHBhbnNpb25QYW5lbC5yZWdpc3RlckNvbnRlbnQodGhpcylcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVsLnVucmVnaXN0ZXJDb250ZW50KClcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoVkV4cGFuZFRyYW5zaXRpb24sIHRoaXMuc2hvd0xhenlDb250ZW50KCgpID0+IFtcbiAgICAgIGgoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50JyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAnc2hvdycsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH1dLFxuICAgICAgfSksIFtcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3YtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnRfX3dyYXAnIH0sIGdldFNsb3QodGhpcykpLFxuICAgICAgXSksXG4gICAgXSkpXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVkZhZGVUcmFuc2l0aW9uIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMnXG5pbXBvcnQgVkV4cGFuc2lvblBhbmVsIGZyb20gJy4vVkV4cGFuc2lvblBhbmVsJ1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uLy4uL21peGlucy9yZWdpc3RyYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlLCB7IFZOb2RlLCBWdWVDb25zdHJ1Y3RvciB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBSZWdpc3RyYWJsZUluamVjdDwnZXhwYW5zaW9uUGFuZWwnLCBWdWVDb25zdHJ1Y3RvcjxWdWU+PignZXhwYW5zaW9uUGFuZWwnLCAndi1leHBhbnNpb24tcGFuZWwtaGVhZGVyJywgJ3YtZXhwYW5zaW9uLXBhbmVsJylcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBFeHRyYWN0VnVlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRlbDogSFRNTEVsZW1lbnRcbiAgZXhwYW5zaW9uUGFuZWw6IEluc3RhbmNlVHlwZTx0eXBlb2YgVkV4cGFuc2lvblBhbmVsPlxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuXG4gIGRpcmVjdGl2ZXM6IHsgcmlwcGxlIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlSWNvblJvdGF0ZTogQm9vbGVhbixcbiAgICBleHBhbmRJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGV4cGFuZCcsXG4gICAgfSxcbiAgICBoaWRlQWN0aW9uczogQm9vbGVhbixcbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGhhc01vdXNlZG93bjogZmFsc2UsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItLWFjdGl2ZSc6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICd2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItLW1vdXNlZG93bic6IHRoaXMuaGFzTW91c2Vkb3duLFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNBY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5zaW9uUGFuZWwuaXNBY3RpdmVcbiAgICB9LFxuICAgIGlzRGlzYWJsZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5zaW9uUGFuZWwuaXNEaXNhYmxlZFxuICAgIH0sXG4gICAgaXNSZWFkb25seSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbnNpb25QYW5lbC5pc1JlYWRvbmx5XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVsLnJlZ2lzdGVySGVhZGVyKHRoaXMpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgdGhpcy5leHBhbnNpb25QYW5lbC51bnJlZ2lzdGVySGVhZGVyKClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb25DbGljayAoZTogTW91c2VFdmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuICAgIH0sXG4gICAgZ2VuSWNvbiAoKSB7XG4gICAgICBjb25zdCBpY29uID0gZ2V0U2xvdCh0aGlzLCAnYWN0aW9ucycpIHx8XG4gICAgICAgIFt0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB0aGlzLmV4cGFuZEljb24pXVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWRmFkZVRyYW5zaXRpb24sIFtcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiAndi1leHBhbnNpb24tcGFuZWwtaGVhZGVyX19pY29uJyxcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcl9faWNvbi0tZGlzYWJsZS1yb3RhdGUnOiB0aGlzLmRpc2FibGVJY29uUm90YXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICAgIHZhbHVlOiAhdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIH1dLFxuICAgICAgICB9LCBpY29uKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2J1dHRvbicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0YWJpbmRleDogdGhpcy5pc0Rpc2FibGVkID8gLTEgOiBudWxsLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIH0sXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiAncmlwcGxlJyxcbiAgICAgICAgdmFsdWU6IHRoaXMucmlwcGxlLFxuICAgICAgfV0sXG4gICAgICBvbjoge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIG1vdXNlZG93bjogKCkgPT4gKHRoaXMuaGFzTW91c2Vkb3duID0gdHJ1ZSksXG4gICAgICAgIG1vdXNldXA6ICgpID0+ICh0aGlzLmhhc01vdXNlZG93biA9IGZhbHNlKSxcbiAgICAgIH0sXG4gICAgfSksIFtcbiAgICAgIGdldFNsb3QodGhpcywgJ2RlZmF1bHQnLCB7IG9wZW46IHRoaXMuaXNBY3RpdmUgfSwgdHJ1ZSksXG4gICAgICB0aGlzLmhpZGVBY3Rpb25zIHx8IHRoaXMuZ2VuSWNvbigpLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkV4cGFuc2lvblBhbmVsLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IEJhc2VJdGVtR3JvdXAsIEdyb3VwYWJsZUluc3RhbmNlIH0gZnJvbSAnLi4vVkl0ZW1Hcm91cC9WSXRlbUdyb3VwJ1xuaW1wb3J0IFZFeHBhbnNpb25QYW5lbCBmcm9tICcuL1ZFeHBhbnNpb25QYW5lbCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmludGVyZmFjZSBWRXhwYW5zaW9uUGFuZWxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlVHlwZTx0eXBlb2YgVkV4cGFuc2lvblBhbmVsPiB7fVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgQmFzZUl0ZW1Hcm91cC5leHRlbmQoe1xuICBuYW1lOiAndi1leHBhbnNpb24tcGFuZWxzJyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBleHBhbnNpb25QYW5lbHM6IHRoaXMsXG4gICAgfVxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWNjb3JkaW9uOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgaG92ZXI6IEJvb2xlYW4sXG4gICAgZm9jdXNhYmxlOiBCb29sZWFuLFxuICAgIGluc2V0OiBCb29sZWFuLFxuICAgIHBvcG91dDogQm9vbGVhbixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICB0aWxlOiBCb29sZWFuLFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLkJhc2VJdGVtR3JvdXAub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LWV4cGFuc2lvbi1wYW5lbHMnOiB0cnVlLFxuICAgICAgICAndi1leHBhbnNpb24tcGFuZWxzLS1hY2NvcmRpb24nOiB0aGlzLmFjY29yZGlvbixcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVscy0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVscy0taG92ZXInOiB0aGlzLmhvdmVyLFxuICAgICAgICAndi1leHBhbnNpb24tcGFuZWxzLS1mb2N1c2FibGUnOiB0aGlzLmZvY3VzYWJsZSxcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVscy0taW5zZXQnOiB0aGlzLmluc2V0LFxuICAgICAgICAndi1leHBhbnNpb24tcGFuZWxzLS1wb3BvdXQnOiB0aGlzLnBvcG91dCxcbiAgICAgICAgJ3YtZXhwYW5zaW9uLXBhbmVscy0tdGlsZSc6IHRoaXMudGlsZSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCdleHBhbmQnKSkge1xuICAgICAgYnJlYWtpbmcoJ2V4cGFuZCcsICdtdWx0aXBsZScsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpICYmXG4gICAgICB0aGlzLnZhbHVlLmxlbmd0aCA+IDAgJiZcbiAgICAgIHR5cGVvZiB0aGlzLnZhbHVlWzBdID09PSAnYm9vbGVhbidcbiAgICApIHtcbiAgICAgIGJyZWFraW5nKCc6dmFsdWU9XCJbdHJ1ZSwgZmFsc2UsIHRydWVdXCInLCAnOnZhbHVlPVwiWzAsIDJdXCInLCB0aGlzKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlSXRlbSAoaXRlbTogR3JvdXBhYmxlSW5zdGFuY2UgJiBWRXhwYW5zaW9uUGFuZWxJbnN0YW5jZSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0sIGluZGV4KVxuICAgICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5nZXRWYWx1ZShpdGVtLCBpbmRleCArIDEpXG5cbiAgICAgIGl0ZW0uaXNBY3RpdmUgPSB0aGlzLnRvZ2dsZU1ldGhvZCh2YWx1ZSlcbiAgICAgIGl0ZW0ubmV4dElzQWN0aXZlID0gdGhpcy50b2dnbGVNZXRob2QobmV4dFZhbHVlKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzY0YjkxM2Umc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1hcHAnLHthdHRyczp7XCJpZFwiOlwiZTNcIn19LFtfYygnbG9hZGluZycse2F0dHJzOntcImFjdGl2ZVwiOl92bS5pc0xvYWRpbmcsXCJsb2FkZXJcIjpcImJhcnNcIixcImlzLWZ1bGwtcGFnZVwiOnRydWUsXCJjb2xvclwiOlwiYmx1ZVwifSxvbjp7XCJ1cGRhdGU6YWN0aXZlXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNMb2FkaW5nPSRldmVudH19fSksX3ZtLl92KFwiIFwiKSxfYygndi1hcHAtYmFyJyx7YXR0cnM6e1wiY29sb3JcIjpcIiMwMGFmZjBcIixcImRhcmtcIjpcIlwiLFwic2hyaW5rLW9uLXNjcm9sbFwiOlwiXCIsXCJwcm9taW5lbnRcIjpcIlwiLFwic3JjXCI6X3ZtLmJ1c2luZXNzLmJhY2tkcm9wLFwiZmFkZS1pbWctb24tc2Nyb2xsXCI6XCJcIixcInNjcm9sbC10YXJnZXRcIjpcIiNzY3JvbGxpbmctdGVjaG5pcXVlcy0zXCIsXCJzY3JvbGwtdGhyZXNob2xkXCI6XCIzMDBcIixcImZpeGVkXCI6XCJcIixcImFwcFwiOlwiXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImltZ1wiLGZuOmZ1bmN0aW9uKHJlZil7XG52YXIgcHJvcHMgPSByZWYucHJvcHM7XG5yZXR1cm4gW19jKCd2LWltZycsX3ZtLl9iKHthdHRyczp7XCJncmFkaWVudFwiOlwidG8gdG9wIHJpZ2h0LCByZ2JhKDEwMCwxMTUsMjAxLC43KSwgcmdiYSgyNSwzMiw3MiwuNylcIn19LCd2LWltZycscHJvcHMsZmFsc2UpKV19fV0pfSxbX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJpY29uXCI6XCJcIixcInRvXCI6XCIvYmlsbHNfcGF5bWVudFwifX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCIgbWRpLWFycm93LWxlZnQtYm9sZFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRvb2xiYXItdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKF92bS5idXNpbmVzcy5idXNpbmVzc19uYW1lKStcIlxcbiAgICAgICAgICAgIFwiKSxfYygnc21hbGwnLFtfdm0uX3YoX3ZtLl9zKF92bS5idXNpbmVzcy5icmFuY2gpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LW1lbnUnLHthdHRyczp7XCJib3R0b21cIjpcIlwiLFwibGVmdFwiOlwiXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImFjdGl2YXRvclwiLGZuOmZ1bmN0aW9uKHJlZil7XG52YXIgb24gPSByZWYub247XG52YXIgYXR0cnMgPSByZWYuYXR0cnM7XG5yZXR1cm4gW19jKCd2LWJ0bicsX3ZtLl9nKF92bS5fYih7YXR0cnM6e1wiZGFya1wiOlwiXCIsXCJpY29uXCI6XCJcIn19LCd2LWJ0bicsYXR0cnMsZmFsc2UpLG9uKSxbX2MoJ3YtaWNvbicsW192bS5fdihcIiBtZGktc2hhcmUtdmFyaWFudFwiKV0pXSwxKV19fV0pfSxbX3ZtLl92KFwiIFwiKSxfYygndi1saXN0Jyx7YXR0cnM6e1wibmF2XCI6XCJcIixcImZsYXRcIjpcIlwiLFwic2luZ2xlLWxpbmVcIjpcIlwiLFwiZGVuc2VcIjpcIlwifX0sX3ZtLl9sKChfdm0ubmV0d29ya3MpLGZ1bmN0aW9uKG5ldHdvcmspe3JldHVybiBfYygnU2hhcmVOZXR3b3JrJyx7a2V5Om5ldHdvcmsubmV0d29yayxzdHlsZTooeyBiYWNrZ3JvdW5kQ29sb3I6IG5ldHdvcmsuY29sb3IgfSksYXR0cnM6e1wibmV0d29ya1wiOm5ldHdvcmsubmV0d29yayxcInVybFwiOl92bS5zaGFyaW5nLnVybCxcInRpdGxlXCI6X3ZtLnNoYXJpbmcudGl0bGUsXCJkZXNjcmlwdGlvblwiOl92bS5zaGFyaW5nLmRlc2NyaXB0aW9uLFwiaGFzaHRhZ3NcIjpfdm0uc2hhcmluZy5oYXNodGFnc319LFtfYygndi1saXN0LWl0ZW0nLFtfYygndi1saXN0LWl0ZW0taWNvbicsW19jKCd2LWljb24nLHthdHRyczp7XCJzbWFsbFwiOlwiXCIsXCJjb2xvclwiOm5ldHdvcmsuY29sb3J9fSxbX3ZtLl92KFwiIFwiK192bS5fcyhuZXR3b3JrLmljb24pK1wiIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihfdm0uX3MobmV0d29yay5uYW1lKSldKV0sMSldLDEpfSksMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXNoZWV0Jyx7c3RhdGljQ2xhc3M6XCJvdmVyZmxvdy15LWF1dG9cIixhdHRyczp7XCJpZFwiOlwic2Nyb2xsaW5nLXRlY2huaXF1ZXMtM1wiLFwibWF4LWhlaWdodFwiOlwiODV2aFwifX0sW19jKCd2LWNvbnRlbnQnLFsoX3ZtLmFwdGNvbmZpbWVkKT9fYygndi1jb250YWluZXInLHthdHRyczp7XCJmbHVpZFwiOlwiXCJ9fSxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LFtfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJsZzNcIjpcIlwifX0sW19jKCd2LWljb24nLHtzdGF0aWNDbGFzczpcIm1iLTJcIixhdHRyczp7XCJjb2xvclwiOlwic3VjY2Vzc1wiLFwic2l6ZVwiOlwiMjAwXCJ9fSxbX3ZtLl92KFwiIG1kaS1jaGVja2JveC1tYXJrZWQtY2lyY2xlIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2Jsb2NrcXVvdGUnLHtzdGF0aWNDbGFzczpcImJsb2NrcXVvdGUgbWItNVwifSxbX2MoJ3NwYW4nLHtzdGF0aWNTdHlsZTp7XCJmb250LXNpemVcIjpcIjUwcHhcIn19LFtfdm0uX3YoXCLwn5iLXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnaDQnLFtfdm0uX3YoXCJMaXN0IFN1Ym1pdHRlZC4gVGhhbmsgWW91IGZvciBTaG9wcGluZ1wiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZm9vdGVyJyxbX2MoJ3YtYnRuJyx7YXR0cnM6e1wib3V0bGluZWRcIjpcIlwiLFwidGV4dFwiOlwiXCIsXCJibG9ja1wiOlwiXCIsXCJ0b1wiOlwiL3RyYW5zYWN0aW9uc1wiLFwiY29sb3JcIjpcInJlZFwifX0sW192bS5fdihcIlRyYWNrIFNob3BwaW5nXCIpXSldLDEpXSwxKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKCFfdm0uYXB0Y29uZmltZWQpP19jKCd2LWNvbnRhaW5lcicse2F0dHJzOntcImZsdWlkXCI6XCJcIn19LFtfYygnaDMnLFtfdm0uX3YoXCJTaG9wIGF0IFwiK192bS5fcyhfdm0uYnVzaW5lc3MuYnVzaW5lc3NfbmFtZSkrXCIgXCIpLF9jKCdzbWFsbCcsW192bS5fdihfdm0uX3MoX3ZtLmJ1c2luZXNzLmJyYW5jaCkpXSksX3ZtLl92KFwiIHdpdGggSmlmZnkgUmlkZXIgU2hvcHBlci5cIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXJvdycse2F0dHJzOntcImp1c3RpZnlcIjpcImNlbnRlclwifX0sW19jKCd2LWV4cGFuc2lvbi1wYW5lbHMnLHthdHRyczp7XCJpbnNldFwiOlwiXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmZhcSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5mYXE9JCR2fSxleHByZXNzaW9uOlwiZmFxXCJ9fSxbX2MoJ3YtZXhwYW5zaW9uLXBhbmVsJyx7YXR0cnM6e1widmFsdWVcIjpcIjBcIn19LFtfYygndi1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxbX3ZtLl92KFwiSG93IGl0IHdvcmtzP1wiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQnLFtfYygncCcsW192bS5fdihcIlNob3AgYXQgXCIrX3ZtLl9zKF92bS5idXNpbmVzcy5idXNpbmVzc19uYW1lKStcIiBiaWxsIHdpdGhvdXQgbGVhdmluZyB0aGUgY29tZm9ydCBvZiB5b3VyIGhvbWUgb3Igb2ZmaWNlLiBMZXQgb3VyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKSxfYygnc3Ryb25nJyxbX3ZtLl92KFwiSmlmZnkgUmlkZXIgU2hvcHBlclwiKV0pLF92bS5fdihcIiBoYW5kbGUgdGhlIGJ1eWluZyBmb3IgeW91LlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3N0cm9uZycsW192bS5fdihcIk5vIG1vcmUgd2FpdGluZyBpbiBsaW5lLlwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3N0cm9uZycsW192bS5fdihcIllvdSBjYW4gc2VlIHRoZSBwcmljZXMgaW4gcmVhbHRpbWUgd2hpbGUgeW91ciByaWRlciBzaG9wIGZvciB5b3UuXCIpXSldKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWV4cGFuc2lvbi1wYW5lbCcsW19jKCd2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFtfdm0uX3YoXCJTaG9wcGluZyBQcm9jZWR1cmVcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50JyxbX2MoJ29sJyxbX2MoJ2xpJyx7YXR0cnM6e1widmFsdWVcIjpcIjFcIn19LFtfdm0uX3YoXCJDcmVhdGUgYSBMaXN0IG9mIEl0ZW1zIHlvdSB3YW50IHRvIGJ1eSBhdCBcIitfdm0uX3MoX3ZtLmJ1c2luZXNzLmJ1c2luZXNzX25hbWUpK1wiIHVzaW5nIHRoZSBjcmVhdGUgbGlzdCBiZWxvdy5cIildKSxfdm0uX3YoXCIgXCIpLF9jKCdsaScsW192bS5fdihcIlN1Ym1pdCB5b3VyIGxpc3QgYW5kIHdhaXQgZm9yIHRoZSByaWRlciB0byBhY2NlcHQgdGhlIGpvYi5cIildKSxfdm0uX3YoXCIgXCIpLF9jKCdsaScsW192bS5fdihcIllvdXIgcmlkZXIgd2lsbCBwcm9jZWVkIHRvXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLmJ1c2luZXNzLmJ1c2luZXNzX25hbWUpKV0pLF92bS5fdihcIiB0byBidXkgaXRlbSBvbiB0aGUgbGlzdC5cIildKSxfdm0uX3YoXCIgXCIpLF9jKCdsaScsW192bS5fdihcIllvdSB3aWxsIHNlZSB0aGUgcHJpY2UgcmVhbCB0aW1lIGFzIHlvdXIgcmlkZXIgc2hvcCBmb3IgeW91LlwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2xpJyxbX3ZtLl92KFwiWW91IGNhbiBhZGQgb3IgcmVtb3ZlIGl0ZW0gZnJvbSB0aGUgbGlzdCBhcyBsb25nIGFzIHRoZSByaWRlciBub3QgeWV0IHBhaWQgdGhlIGl0ZW0uXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnbGknLFtfdm0uX3YoXCJUaGUgcmlkZXIgd2lsbCBwcm9jZWVkIHdpdGggdGhlIHBheW1lbnQgYW5kIGhlYWQgeW91ciBkZWxpdmVyeSBsb2NhdGlvbi5cIildKSxfdm0uX3YoXCIgXCIpLF9jKCdsaScsW192bS5fdihcIlBheSB5b3VyIHJpZGVyIHdpdGggdGhlIHRvdGFsIGl0ZW0gb24gdGhlIGxpc3QgcGx1cyB0aGUgY29tcHV0ZWQgc2VydmljZSBhbmQgZGVsaXZlcnkgZmVlLlwiKV0pXSldKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1leHBhbnNpb24tcGFuZWwnLFtfYygndi1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxbX3ZtLl92KFwiU2VydmljZSBGZWVcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50JyxbX2MoJ3AnLFtfdm0uX3YoXCJUaGUgY29zdCBvZiBzZXJ2aWNlIGlzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKSxfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uYnVzaW5lc3MucmF0ZXMuc2MpK1wiICVcIildKSxfdm0uX3YoXCIgcGx1c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3N0cm9uZycsW192bS5fdihcInBlciBrbSByYXRlXCIpXSksX3ZtLl92KFwiIGZvciB0cmF2ZWxsZWQgZGlzdGFuY2UgZnJvbSBcIitfdm0uX3MoX3ZtLmJ1c2luZXNzLmJ1c2luZXNzX25hbWUpK1wiLVwiK192bS5fcyhfdm0uYnVzaW5lc3MuYnJhbmNoKStcIiB0byB5b3VyIGRlbGl2ZXJ5IGxvY2F0aW9uLiBcIildKV0pXSwxKV0sMSldLDEpXSwxKTpfdm0uX2UoKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYm90dG9tLXNoZWV0Jyx7YXR0cnM6e1wicGVyc2lzdGVudFwiOl92bS5jYWxjdWxhdGVkfSxtb2RlbDp7dmFsdWU6KF92bS5ic0FwcG9pbnRtZW50KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmJzQXBwb2ludG1lbnQ9JCR2fSxleHByZXNzaW9uOlwiYnNBcHBvaW50bWVudFwifX0sWyghX3ZtLmNhbGN1bGF0ZWQpP19jKCd2LWNhcmQnLFtfYygndi1jYXJkLXRpdGxlJyxbX3ZtLl92KFwiRGVsaXZlcnkgTG9jYXRpb25cIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1hcGNvbnRhaW5lclwifSxbX2MoJ0dNYXAnLHtyZWY6XCJnTWFwXCIsYXR0cnM6e1wiaWRcIjpcImdtYXBcIixcImNlbnRlclwiOl92bS5teWxvY2F0aW9uLFwib3B0aW9uc1wiOl92bS5vcHRpb25zLFwiem9vbVwiOjE1fSxvbjp7XCJjZW50ZXJfY2hhbmdlZFwiOl92bS5jZW50ZXJDaGFuZ2V9fSxbX2MoJ0dNYXBNYXJrZXInLHtyZWY6XCJnbWFwbWFya2VyXCIsYXR0cnM6e1wicG9zaXRpb25cIjpfdm0ubXlsb2NhdGlvbixcIm9wdGlvbnNcIjp7IGljb246IF92bS5zZWxlY3RlZG1hcmtlciB9fX0pXSwxKV0sMSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibWEtMVwiLGF0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcInRleHRcIjpcIlwiLFwiY29sb3JcIjpcImJsdWVcIixcImJsb2NrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLnJlcVFvdXRlKCl9fX0sW192bS5fdihcIk5leHRcIildKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5jYWxjdWxhdGVkKT9fYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10aXRsZScsW19jKCd2LWJ0bicse2F0dHJzOntcImljb25cIjpcIlwiLFwic21hbGxcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5jYWxjdWxhdGVkID0gZmFsc2V9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktYXJyb3ctbGVmdFwiKV0pXSwxKSxfdm0uX3YoXCJTdWJtaXQgTGlzdCBcIildLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGlzdCcse2F0dHJzOntcIm5hdlwiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJ0aWxlXCI6XCJcIixcIndpZHRoXCI6XCIxMDAlXCIsXCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiaWRcIjpcIm5lZWRBdXRoXCIsXCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWljb24nLFtfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcInJlZFwifX0sW192bS5fdihcIiBtZGktY2VsbHBob25lIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uY29udGFjdC5uYW1lKStcIiBcIitfdm0uX3MoX3ZtLmNvbnRhY3QubnVtYmVyKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBDb250YWN0IEluZm9ybWF0aW9uIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1hY3Rpb24nLHtvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uYXR0ZW1wdExvZ2luKCl9fX0sW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiIG1kaS1jaGV2cm9uLXJpZ2h0IFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJpZFwiOlwibmVlZERlbGlcIn19LFtfYygndi1saXN0LWl0ZW0taWNvbicsW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwiYmx1ZVwifX0sW192bS5fdihcIiBtZGktY2xvY2sgXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5kZWxpdmVyeV9kYXRlLmxhYmVsKStcIiwgXCIrX3ZtLl9zKF92bS5kZWxpdmVyeV9kYXRlLmRheV9uYW1lLnN1YnN0cmluZygwLCAzKSkrXCIgXCIrX3ZtLl9zKF92bS5kZWxpdmVyeV9kYXRlLm5hbWUpK1wiIFwiK192bS5fcyhfdm0uZGVsaXZlcnlfZGF0ZS5kYXkpK1wiIFwiK192bS5fcyhfdm0uZGVsaXZlcnlfZGF0ZS50aW1lKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIlRpbWVcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uZ2VuZXJhdGVEYXRlcygpLCAoX3ZtLnRpbWVkaWFnID0gdHJ1ZSl9fX0sW192bS5fdihcIiBtZGktY2hldnJvbi1yaWdodCBcIildKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiaWRcIjpcIm5lZWRFc3RcIixcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0taWNvbicsW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiIG1kaS1jYXNoLW11bHRpcGxlIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfdm0uZXN0aW1hdGUpKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIllvdXIgc2hvcHBpbmcgZXN0aW1hdGVcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0ubmVlZEVzdCA9IHRydWV9fX0sW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiIG1kaS1jaGV2cm9uLXJpZ2h0IFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJpZFwiOlwiZHJvcG9mZlwiLFwiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1pY29uJyxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJibHVlXCJ9fSxbX3ZtLl92KFwiIG1kaS1tYXAtbWFya2VyIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhfdm0uZmVlcy5hZGRyZXNzKSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBEZWxpdmVyeSBMb2NhdGlvbiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uY3VycmVudExvY2F0aW9uID0gX3ZtLmZlZXMgLCBfdm0uYWRkclRleHQ9J0RlbGl2ZXJ5JywgX3ZtLmFkZHJlc3NEaWFnID0gdHJ1ZX19fSxbX3ZtLl92KFwiIG1kaS1jaGV2cm9uLXJpZ2h0IFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3Ytc2ltcGxlLXRhYmxlJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCd0Ym9keScsW19jKCd0cicsW19jKCd0ZCcsW192bS5fdihcIlNlcnZpY2UgRmVlXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndGQnLFtfdm0uX3YoX3ZtLl9zKF92bS5idXNpbmVzcy5yYXRlcy5zYykrXCIgJSBwbHVzIFRvdGFsXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd0cicsW19jKCd0ZCcsW192bS5fdihcIkRlbGl2ZXJ5IEZlZSAoXCIrX3ZtLl9zKF92bS5mZWVzLmRpc3RhbmNlLmNvbXB1dGVkKStcIiBrbSlcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd0ZCcsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmZlZXMuZmVlcy5yaWRlciArIF92bS5mZWVzLmZlZXMucGxhdGZvcm0pKSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3RyJyxbX2MoJ3RkJyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dFwifSxbX2MoJ3N0cm9uZycsW192bS5fdihcIlRvdGFsXCIpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3RkJyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dFwifSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmZlZXMuZmVlcy5yaWRlciArIF92bS5mZWVzLmZlZXMucGxhdGZvcm0pKSldKSxfdm0uX3YoXCIgcGx1c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLmJ1c2luZXNzLnJhdGVzLnNjKStcIiAlXCIpXSksX3ZtLl92KFwiIG9mIFRvdGFsIEl0ZW0gVmFsdWVzIFwiKV0pXSldKV0pXX0scHJveHk6dHJ1ZX1dLG51bGwsZmFsc2UsNjMzNjgwOTA4KX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibWEtMVwiLGF0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcImNvbG9yXCI6XCJibHVlXCIsXCJ3aWR0aFwiOlwiNDUlXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmJzUW91dGUgPSB0cnVlfX19LFtfdm0uX3YoXCJWaWV3IExpc3RcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibWEtMVwiLGF0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcImNvbG9yXCI6XCJibHVlXCIsXCJ3aWR0aFwiOlwiNDUlXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7cmV0dXJuIF92bS5wcmVDb25maXJtQXBwb2ludG1lbnQoKX19fSxbX3ZtLl92KFwiU3VibWl0IExpc3RcIildKV0sMSldLDEpOl92bS5fZSgpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse21vZGVsOnt2YWx1ZTooX3ZtLmFkZE5ld0l0ZW0pLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYWRkTmV3SXRlbT0kJHZ9LGV4cHJlc3Npb246XCJhZGROZXdJdGVtXCJ9fSxbX2MoJ3YtY2FyZCcsW19jKCd2LWNhcmQtdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKF92bS5tb2RlPT0nYWRkJyA/ICdBZGQgSXRlbSB0byBMaXN0JyA6ICdFZGl0IEl0ZW0nKSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwiLFwianVzdGlmeS1jZW50ZXJcIjpcIlwiLFwiYWxpZ24tY2VudGVyXCI6XCJcIixcInRleHQtbGVmdFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXJcIixhdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwiLFwic20xMlwiOlwiXCIsXCJsZzEyXCI6XCJcIn19LFtfYygndi10ZXh0YXJlYScse2F0dHJzOntcInJvd3NcIjpcIjNcIixcImxhYmVsXCI6XCJJdGVtIGRlc2NyaXB0aW9uXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJwbGFjZWhvbGRlclwiOlwiZWcuIEJyYW5kLCBDb2xvciwgZXRjLlwifSxtb2RlbDp7dmFsdWU6KF92bS5zaG9waXRlbS5kZXNjKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnNob3BpdGVtLCBcImRlc2NcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInNob3BpdGVtLmRlc2NcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzNFwiOlwiXCIsXCJtZDRcIjpcIlwiLFwic200XCI6XCJcIixcImxnNFwiOlwiXCJ9fSxbX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcInR5cGVcIjpcIm51bWJlclwiLFwibGFiZWxcIjpcIk1lYXN1cmVcIixcImRlbnNlXCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0uc2hvcGl0ZW0ubWVhc3VyZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zaG9waXRlbSwgXCJtZWFzdXJlXCIsICQkdil9LGV4cHJlc3Npb246XCJzaG9waXRlbS5tZWFzdXJlXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXJcIixhdHRyczp7XCJ4czRcIjpcIlwiLFwibWQ0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJsZzRcIjpcIlwifX0sW19jKCd2LXNlbGVjdCcse2F0dHJzOntcImRlbnNlXCI6XCJcIixcImZsYXRcIjpcIlwiLFwiaXRlbXNcIjpfdm0udW5pdHMsXCJsYWJlbFwiOlwiVW5pdFwiLFwiaXRlbS10ZXh0XCI6XCJuYW1lXCIsXCJpdGVtLXZhbHVlXCI6XCJ2YWx1ZVwifSxtb2RlbDp7dmFsdWU6KF92bS5zaG9waXRlbS51bml0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnNob3BpdGVtLCBcInVuaXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInNob3BpdGVtLnVuaXRcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzNFwiOlwiXCIsXCJtZDRcIjpcIlwiLFwic200XCI6XCJcIixcImxnNFwiOlwiXCJ9fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNhcHRpb24gZ3JleS0tdGV4dFwifSxbX3ZtLl92KFwiIFF0eSBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWljb24nLHtzdGF0aWNDbGFzczpcIndoaXRlLS10ZXh0XCIsYXR0cnM6e1wiY29sb3JcIjpcInJlZFwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLnNob3BpdGVtLnF0eSA9IF92bS5zaG9waXRlbS5xdHkgPCAxID8gMSA6IF92bS5zaG9waXRlbS5xdHkgLSAxfX19LFtfdm0uX3YoXCIgbWRpLW1pbnVzIFwiKV0pLF92bS5fdihcIiBcIitfdm0uX3MoX3ZtLnNob3BpdGVtLnF0eSkrXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3YtaWNvbicse3N0YXRpY0NsYXNzOlwid2hpdGUtLXRleHRcIixhdHRyczp7XCJjb2xvclwiOlwiZ3JlZW5cIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5zaG9waXRlbS5xdHkgPSBfdm0uc2hvcGl0ZW0ucXR5ICsgMX19fSxbX3ZtLl92KFwiIG1kaS1wbHVzIFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJzaG9wcmVzcG9uc2l2ZVwiLGF0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcInRleHRcIjpcIlwiLFwiY29sb3JcIjpcImJsdWVcIixcImJsb2NrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLmFkZEl0ZW0oKX19fSxbX3ZtLl92KF92bS5fcyhfdm0ubW9kZT09J2FkZCcgPyAnQWRkIEl0ZW0gdG8gTGlzdCcgOiAnVXBkYXRlIEl0ZW0nKSldKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse2F0dHJzOntcImZ1bGxzY3JlZW5cIjpcIlwiLFwicGVyc2lzdGVudFwiOlwiXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmJzUW91dGUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYnNRb3V0ZT0kJHZ9LGV4cHJlc3Npb246XCJic1FvdXRlXCJ9fSxbX2MoJ3YtY2FyZCcse3N0YXRpY1N0eWxlOntcImhlaWdodFwiOlwiMTAwdmhcIn19LFtfYygndi1jYXJkLXRpdGxlJyxbX3ZtLl92KFwiQ3JlYXRlIFNob3BwaW5nIExpc3RcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWxpc3QnLHthdHRyczp7XCJ0d28tbGluZVwiOlwiXCJ9fSxfdm0uX2woKF92bS5saXN0KSxmdW5jdGlvbihpdGVtLGluZGV4KXtyZXR1cm4gX2MoJ3YtbGlzdC1pdGVtLWdyb3VwJyx7a2V5OmluZGV4fSxbX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1jb250ZW50Jyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uaXRlbV9jb3B5ID0gT2JqZWN0LmFzc2lnbih7fSxpdGVtKSwgX3ZtLnNob3BpdGVtID0gT2JqZWN0LmFzc2lnbih7fSxpdGVtKSwgX3ZtLm1vZGU9ICdlZGl0JywgX3ZtLmVkaXRJbmRleCA9IGluZGV4LCBfdm0uYWRkTmV3SXRlbSA9IHRydWV9fX0sW19jKCd2LWxpc3QtaXRlbS10aXRsZScse2RvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKGl0ZW0uZGVzYyl9fSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dFwifSxbX3ZtLl92KFwiIFwiK192bS5fcyhpdGVtLm1lYXN1cmUpK1wiIFwiK192bS5fcyhpdGVtLnVuaXQpK1wiIHggXCIrX3ZtLl9zKGl0ZW0ucXR5KStcIiA9IFwiK192bS5fcyhpdGVtLm1lYXN1cmUgKiBpdGVtLnF0eSkrXCIgXCIrX3ZtLl9zKGl0ZW0udW5pdCkrXCIgKFwiK192bS5fcyhpdGVtLm1lYXN1cmUpK1wiIFwiK192bS5fcyhpdGVtLnVuaXQpK1wiL3VuaXQgKSBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtaWNvbicse2F0dHJzOntcInNtYWxsXCI6XCJcIixcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLiRzdG9yZS5jb21taXQoJ2NhcnQvcmVtb3ZlRnJvbUxpc3QnLCBpbmRleCl9fX0sW192bS5fdihcIiBtZGktZGVsZXRlIFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1kaXZpZGVyJyldLDEpfSksMSksX3ZtLl92KFwiIFwiKSxfYygndi1mYWItdHJhbnNpdGlvbicsW19jKCd2LWJ0bicse3N0YXRpY1N0eWxlOntcIm1hcmdpbi1ib3R0b21cIjpcIjEwMHB4XCJ9LGF0dHJzOntcImNvbG9yXCI6XCJwaW5rXCIsXCJkYXJrXCI6XCJcIixcInNtYWxsXCI6XCJcIixcImFic29sdXRlXCI6XCJcIixcImJvdHRvbVwiOlwiXCIsXCJyaWdodFwiOlwiXCIsXCJmYWJcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5tb2RlPSdhZGQnICxfdm0uYWRkTmV3SXRlbSA9IHRydWV9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJzaG9wcmVzcG9uc2l2ZVwiLGF0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcInRleHRcIjpcIlwiLFwiY29sb3JcIjpcImJsdWVcIixcImJsb2NrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uYnNRb3V0ZT1mYWxzZX19fSxbX3ZtLl92KFwiSSdtIEZpbmlzaFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYm90dG9tLXNoZWV0Jyx7YXR0cnM6e1wic2Nyb2xsYWJsZVwiOlwiXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmFkZHJlc3NEaWFnKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmFkZHJlc3NEaWFnPSQkdn0sZXhwcmVzc2lvbjpcImFkZHJlc3NEaWFnXCJ9fSxbX2MoJ3YtY2FyZCcse2F0dHJzOntcInRpbGVcIjpcIlwifX0sW19jKCd2LWNhcmQtdGl0bGUnLHthdHRyczp7XCJwcmltYXJ5LXRpdGxlXCI6XCJcIn19LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5hZGRyVGV4dCkrXCIgQWRkcmVzcyBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwiLFwic20xMlwiOlwiXCJ9fSxbX2MoJ3YtdGV4dGFyZWEnLHthdHRyczp7XCJhXCI6XCJcIixcImhpbnRcIjpcIlBscyB0eXBlICdOQScgaWYgbm90IGFwcGxpY2FibGVcIixcImxhYmVsXCI6XCJBZGRyZXNzXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJwbGFjZWhvbGRlclwiOlwiQWRkcmVzc1wifSxtb2RlbDp7dmFsdWU6KF92bS5jdXJyZW50TG9jYXRpb24uYWRkcmVzcyksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5jdXJyZW50TG9jYXRpb24sIFwiYWRkcmVzc1wiLCAkJHYpfSxleHByZXNzaW9uOlwiY3VycmVudExvY2F0aW9uLmFkZHJlc3NcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDEyXCI6XCJcIixcInNtMTJcIjpcIlwifX0sW19jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJhXCI6XCJcIixcImhpbnRcIjpcIlBscyB0eXBlICdOQScgaWYgbm90IGFwcGxpY2FibGVcIixcImxhYmVsXCI6XCJGbG9vci9Vbml0L1Jvb20gTm8uIG9yIExhbmRtYXJrXCIsXCJwZXJzaXN0ZW50LWhpbnRcIjpcIlwiLFwib3V0bGluZWRcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS5jdXJyZW50TG9jYXRpb24ubGFuZG1hcmspLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uY3VycmVudExvY2F0aW9uLCBcImxhbmRtYXJrXCIsICQkdil9LGV4cHJlc3Npb246XCJjdXJyZW50TG9jYXRpb24ubGFuZG1hcmtcIn19KV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3YtYnRuJyx7YXR0cnM6e1widGlsZVwiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJibG9ja1wiOlwiXCIsXCJjb2xvclwiOlwicmVkXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uYWRkcmVzc0RpYWc9ZmFsc2V9fX0sW192bS5fdihcIiBBcHBseSBDaGFuZ2VzIFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYm90dG9tLXNoZWV0Jyx7YXR0cnM6e1wicGVyc2lzdGVudFwiOlwiXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLm5lZWRFc3QpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ubmVlZEVzdD0kJHZ9LGV4cHJlc3Npb246XCJuZWVkRXN0XCJ9fSxbX2MoJ3YtY2FyZCcsW19jKCd2LWNhcmQtdGl0bGUnLFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiaGVhZGxpbmVcIn0sW192bS5fdihcIllvdXIgc2hvcHBpbmcgRXN0aW1hdGVcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCIsXCJzbTEyXCI6XCJcIn19LFtfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wicmlnaHRcIjpcIlwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZW5zZVwiOlwiXCIsXCJzb2xvXCI6XCJcIixcImxhYmVsXCI6XCJZb3VyIHNob3BwaW5nIGVzdGltYXRlXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJwbGFjZWhvbGRlclwiOlwiRXN0aW1hdGVcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZXN0aW1hdGUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uZXN0aW1hdGU9JCR2fSxleHByZXNzaW9uOlwiZXN0aW1hdGVcIn19KV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1widGlsZVwiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJkaXNhYmxlZFwiOl92bS5lc3RpbWF0ZSA8MCxcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5uZWVkRXN0ID0gZmFsc2V9fX0sW192bS5fdihcIiBBcHBseSBDaGFuZ2VzIFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYm90dG9tLXNoZWV0Jyx7bW9kZWw6e3ZhbHVlOihfdm0uYXV0aERpYWcpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYXV0aERpYWc9JCR2fSxleHByZXNzaW9uOlwiYXV0aERpYWdcIn19LFtfYygndi1jYXJkJyx7YXR0cnM6e1wiZmxhdFwiOlwiXCJ9fSxbX2MoJ3YtY2FyZC10aXRsZScsW192bS5fdihcIkNvbnRhY3QgSW5mb1wiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ2ZpcmUtdWknKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse2F0dHJzOntcInBlcnNpc3RlbnRcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS50aW1lZGlhZyksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50aW1lZGlhZz0kJHZ9LGV4cHJlc3Npb246XCJ0aW1lZGlhZ1wifX0sW19jKCd2LWNhcmQnLFtfYygndi1jYXJkLXRpdGxlJyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImhlYWRsaW5lXCJ9LFtfdm0uX3YoXCJBcHBvaW50bWVudCBUaW1lXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWNvbnRhaW5lcicsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwifX0sW19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kNlwiOlwiXCIsXCJsZzZcIjpcIlwiLFwic202XCI6XCJcIn19LFtfYygndi1zZWxlY3QnLHthdHRyczp7XCJmbGF0XCI6XCJcIixcIml0ZW1zXCI6X3ZtLmRhdGVzLFwicmV0dXJuLW9iamVjdFwiOlwiXCIsXCJsYWJlbFwiOlwiRGVsaXZlcnkgRGF0ZVwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJzZWxlY3Rpb25cIixmbjpmdW5jdGlvbihkYXRhKXtyZXR1cm4gW192bS5fdihcIiBcIitfdm0uX3MoZGF0YS5pdGVtLmxhYmVsKStcIiwgXCIrX3ZtLl9zKGRhdGEuaXRlbS5kYXlfbmFtZSkrXCIgXCIrX3ZtLl9zKGRhdGEuaXRlbS5uYW1lKStcIiBcIitfdm0uX3MoZGF0YS5pdGVtLmRheSkrXCIgXCIpXX19LHtrZXk6XCJpdGVtXCIsZm46ZnVuY3Rpb24oZGF0YSl7cmV0dXJuIFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGRhdGEuaXRlbS5sYWJlbCkrXCIsIFwiK192bS5fcyhkYXRhLml0ZW0uZGF5X25hbWUpK1wiIFwiK192bS5fcyhkYXRhLml0ZW0ubmFtZSkrXCIgXCIrX3ZtLl9zKGRhdGEuaXRlbS5kYXkpK1wiIFwiKV19fV0pLG1vZGVsOnt2YWx1ZTooX3ZtLmRlbGl2ZXJ5X2RhdGUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uZGVsaXZlcnlfZGF0ZT0kJHZ9LGV4cHJlc3Npb246XCJkZWxpdmVyeV9kYXRlXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ2XCI6XCJcIixcImxnNlwiOlwiXCIsXCJzbTZcIjpcIlwifX0sW19jKCd2LXNlbGVjdCcse2F0dHJzOntcImZsYXRcIjpcIlwiLFwiaXRlbXNcIjpfdm0uZGVsaXZlcnlfZGF0ZS5kZWxpdmVyeV90aW1lLFwibGFiZWxcIjpcIkRlbGl2ZXJ5IFRpbWVcIn0sbW9kZWw6e3ZhbHVlOihfdm0uZGVsaXZlcnlfZGF0ZS50aW1lKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmRlbGl2ZXJ5X2RhdGUsIFwidGltZVwiLCAkJHYpfSxleHByZXNzaW9uOlwiZGVsaXZlcnlfZGF0ZS50aW1lXCJ9fSldLDEpXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwiYmx1ZSBkYXJrZW4tMVwiLFwidGV4dFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0udGltZWRpYWcgPSBmYWxzZX19fSxbX3ZtLl92KFwiIFNhdmUgXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSwoIV92bS5hcHRjb25maW1lZCk/X2MoJ3YtY2FyZCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTooX3ZtLmlzTG9hZGVkKSxleHByZXNzaW9uOlwiaXNMb2FkZWRcIn1dLHN0YXRpY0NsYXNzOlwic2hvcHJlc3BvbnNpdmVcIixhdHRyczp7XCJ3aWR0aFwiOlwiMTAwJVwifX0sW19jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibWEtMVwiLGF0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcImNvbG9yXCI6XCJibHVlXCIsXCJ3aWR0aFwiOlwiNDUlXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmJzUW91dGUgPSB0cnVlfX19LFtfdm0uX3YoXCJDcmVhdGUgTGlzdFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJtYS0xXCIsYXR0cnM6e1wib3V0bGluZWRcIjpcIlwiLFwiY29sb3JcIjpcImJsdWVcIixcIndpZHRoXCI6XCI0NSVcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uYnNBcHBvaW50bWVudCA9IHRydWV9fX0sW192bS5fdihcIlN1Ym1pdCBMaXN0XCIpXSldLDEpXSwxKTpfdm0uX2UoKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgICA8di1hcHAgaWQ9XCJlM1wiPlxuICAgICAgICA8bG9hZGluZyA6YWN0aXZlLnN5bmM9XCJpc0xvYWRpbmdcIiBsb2FkZXI9XCJiYXJzXCIgOmlzLWZ1bGwtcGFnZT1cInRydWVcIiBjb2xvcj1cImJsdWVcIiAvPlxuICAgICAgICA8di1hcHAtYmFyIGNvbG9yPVwiIzAwYWZmMFwiIGRhcmsgc2hyaW5rLW9uLXNjcm9sbCBwcm9taW5lbnQgOnNyYz1cImJ1c2luZXNzLmJhY2tkcm9wXCIgZmFkZS1pbWctb24tc2Nyb2xsIHNjcm9sbC10YXJnZXQ9XCIjc2Nyb2xsaW5nLXRlY2huaXF1ZXMtM1wiIHNjcm9sbC10aHJlc2hvbGQ9XCIzMDBcIiBmaXhlZCBhcHA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI2ltZz1cInsgcHJvcHMgfVwiPlxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWJpbmQ9XCJwcm9wc1wiIGdyYWRpZW50PVwidG8gdG9wIHJpZ2h0LCByZ2JhKDEwMCwxMTUsMjAxLC43KSwgcmdiYSgyNSwzMiw3MiwuNylcIiAvPiA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHYtYnRuIGljb24gdG89XCIvYmlsbHNfcGF5bWVudFwiPlxuICAgICAgICAgICAgICAgIDx2LWljb24+IG1kaS1hcnJvdy1sZWZ0LWJvbGQ8L3YtaWNvbj5cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPnt7IGJ1c2luZXNzLmJ1c2luZXNzX25hbWUgfX1cbiAgICAgICAgICAgICAgICA8c21hbGw+e3tidXNpbmVzcy5icmFuY2h9fTwvc21hbGw+XG4gICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgPHYtbWVudSBib3R0b20gbGVmdD5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2FjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGRhcmsgaWNvbiB2LWJpbmQ9XCJhdHRyc1wiIHYtb249XCJvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj4gbWRpLXNoYXJlLXZhcmlhbnQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QgbmF2IGZsYXQgc2luZ2xlLWxpbmUgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgIDxTaGFyZU5ldHdvcmsgdi1mb3I9XCJuZXR3b3JrIGluIG5ldHdvcmtzXCIgOmtleT1cIm5ldHdvcmsubmV0d29ya1wiIDpuZXR3b3JrPVwibmV0d29yay5uZXR3b3JrXCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IG5ldHdvcmsuY29sb3IgfVwiIDp1cmw9XCJzaGFyaW5nLnVybFwiIDp0aXRsZT1cInNoYXJpbmcudGl0bGVcIiA6ZGVzY3JpcHRpb249XCJzaGFyaW5nLmRlc2NyaXB0aW9uXCIgOmhhc2h0YWdzPVwic2hhcmluZy5oYXNodGFnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIHNtYWxsIDpjb2xvcj1cIm5ldHdvcmsuY29sb3JcIj4ge3sgbmV0d29yay5pY29uIH19IDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+e3sgbmV0d29yay5uYW1lIH19PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvU2hhcmVOZXR3b3JrPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgPC92LW1lbnU+XG4gICAgICAgIDwvdi1hcHAtYmFyPlxuICAgICAgICA8di1zaGVldCBpZD1cInNjcm9sbGluZy10ZWNobmlxdWVzLTNcIiBjbGFzcz1cIm92ZXJmbG93LXktYXV0b1wiIG1heC1oZWlnaHQ9XCI4NXZoXCI+XG4gICAgICAgICAgICA8di1jb250ZW50PlxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWlmPVwiYXB0Y29uZmltZWRcIiBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDQgc200IGxnMyBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjbGFzcz1cIm1iLTJcIiBjb2xvcj1cInN1Y2Nlc3NcIiBzaXplPVwiMjAwXCI+IG1kaS1jaGVja2JveC1tYXJrZWQtY2lyY2xlIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZSBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjUwcHg7XCI+JiMxMjg1MjM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TGlzdCBTdWJtaXR0ZWQuIFRoYW5rIFlvdSBmb3IgU2hvcHBpbmc8L2g0PiA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmVkIHRleHQgYmxvY2sgdG89XCIvdHJhbnNhY3Rpb25zXCIgY29sb3I9XCJyZWRcIj5UcmFjayBTaG9wcGluZzwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1pZj1cIiFhcHRjb25maW1lZFwiIGZsdWlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNob3AgYXQge3tidXNpbmVzcy5idXNpbmVzc19uYW1lfX0gPHNtYWxsPnt7YnVzaW5lc3MuYnJhbmNofX08L3NtYWxsPiB3aXRoIEppZmZ5IFJpZGVyIFNob3BwZXIuPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZXhwYW5zaW9uLXBhbmVscyB2LW1vZGVsPVwiZmFxXCIgaW5zZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWV4cGFuc2lvbi1wYW5lbCB2YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+SG93IGl0IHdvcmtzPzwvdi1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2hvcCBhdCB7e2J1c2luZXNzLmJ1c2luZXNzX25hbWV9fSBiaWxsIHdpdGhvdXQgbGVhdmluZyB0aGUgY29tZm9ydCBvZiB5b3VyIGhvbWUgb3Igb2ZmaWNlLiBMZXQgb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SmlmZnkgUmlkZXIgU2hvcHBlcjwvc3Ryb25nPiBoYW5kbGUgdGhlIGJ1eWluZyBmb3IgeW91LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5vIG1vcmUgd2FpdGluZyBpbiBsaW5lLjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPllvdSBjYW4gc2VlIHRoZSBwcmljZXMgaW4gcmVhbHRpbWUgd2hpbGUgeW91ciByaWRlciBzaG9wIGZvciB5b3UuPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZXhwYW5zaW9uLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1leHBhbnNpb24tcGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlNob3BwaW5nIFByb2NlZHVyZTwvdi1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdmFsdWU9XCIxXCI+Q3JlYXRlIGEgTGlzdCBvZiBJdGVtcyB5b3Ugd2FudCB0byBidXkgYXQge3tidXNpbmVzcy5idXNpbmVzc19uYW1lfX0gdXNpbmcgdGhlIGNyZWF0ZSBsaXN0IGJlbG93LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdWJtaXQgeW91ciBsaXN0IGFuZCB3YWl0IGZvciB0aGUgcmlkZXIgdG8gYWNjZXB0IHRoZSBqb2IuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPllvdXIgcmlkZXIgd2lsbCBwcm9jZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7YnVzaW5lc3MuYnVzaW5lc3NfbmFtZX19PC9zdHJvbmc+IHRvIGJ1eSBpdGVtIG9uIHRoZSBsaXN0LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Zb3Ugd2lsbCBzZWUgdGhlIHByaWNlIHJlYWwgdGltZSBhcyB5b3VyIHJpZGVyIHNob3AgZm9yIHlvdS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+WW91IGNhbiBhZGQgb3IgcmVtb3ZlIGl0ZW0gZnJvbSB0aGUgbGlzdCBhcyBsb25nIGFzIHRoZSByaWRlciBub3QgeWV0IHBhaWQgdGhlIGl0ZW0uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZSByaWRlciB3aWxsIHByb2NlZWQgd2l0aCB0aGUgcGF5bWVudCBhbmQgaGVhZCB5b3VyIGRlbGl2ZXJ5IGxvY2F0aW9uLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QYXkgeW91ciByaWRlciB3aXRoIHRoZSB0b3RhbCBpdGVtIG9uIHRoZSBsaXN0IHBsdXMgdGhlIGNvbXB1dGVkIHNlcnZpY2UgYW5kIGRlbGl2ZXJ5IGZlZS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1leHBhbnNpb24tcGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWV4cGFuc2lvbi1wYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+U2VydmljZSBGZWU8L3YtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBjb3N0IG9mIHNlcnZpY2UgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57e2J1c2luZXNzLnJhdGVzLnNjfX0gJTwvc3Ryb25nPiBwbHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+cGVyIGttIHJhdGU8L3N0cm9uZz4gZm9yIHRyYXZlbGxlZCBkaXN0YW5jZSBmcm9tIHt7YnVzaW5lc3MuYnVzaW5lc3NfbmFtZX19LXt7YnVzaW5lc3MuYnJhbmNofX0gdG8geW91ciBkZWxpdmVyeSBsb2NhdGlvbi4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZXhwYW5zaW9uLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1leHBhbnNpb24tcGFuZWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPC92LWNvbnRlbnQ+XG4gICAgICAgICAgIFxuICAgICAgICA8L3Ytc2hlZXQ+XG4gICAgICAgIDx2LWJvdHRvbS1zaGVldCA6cGVyc2lzdGVudD1cImNhbGN1bGF0ZWRcIiB2LW1vZGVsPVwiYnNBcHBvaW50bWVudFwiPlxuICAgICAgICAgICAgPHYtY2FyZCB2LWlmPVwiIWNhbGN1bGF0ZWRcIj5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPkRlbGl2ZXJ5IExvY2F0aW9uPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R01hcCBpZD1cImdtYXBcIiByZWY9XCJnTWFwXCIgOmNlbnRlcj1cIm15bG9jYXRpb25cIiA6b3B0aW9ucz1cIm9wdGlvbnNcIiA6em9vbT1cIjE1XCIgQGNlbnRlcl9jaGFuZ2VkPVwiY2VudGVyQ2hhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdNYXBNYXJrZXIgcmVmPVwiZ21hcG1hcmtlclwiIDpwb3NpdGlvbj1cIm15bG9jYXRpb25cIiA6b3B0aW9ucz1cInsgaWNvbjogc2VsZWN0ZWRtYXJrZXIgfVwiIC8+IDwvR01hcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lZCBAY2xpY2suc3RvcD1cInJlcVFvdXRlKClcIiB0ZXh0IGNvbG9yPVwiYmx1ZVwiIGJsb2NrIGNsYXNzPVwibWEtMVwiPk5leHQ8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDx2LWNhcmQgdi1pZj1cImNhbGN1bGF0ZWRcIj5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2suc3RvcD1cImNhbGN1bGF0ZWQgPSBmYWxzZVwiIHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktYXJyb3ctbGVmdDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlN1Ym1pdCBMaXN0IDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCBuYXYgb3V0bGluZWQgdGlsZSB3aWR0aD1cIjEwMCVcIiBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBpZD1cIm5lZWRBdXRoXCIgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJyZWRcIj4gbWRpLWNlbGxwaG9uZSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4ge3sgY29udGFjdC5uYW1lIH19IHt7IGNvbnRhY3QubnVtYmVyIH19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT4gQ29udGFjdCBJbmZvcm1hdGlvbiA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uIEBjbGljay5zdG9wPVwiYXR0ZW1wdExvZ2luKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiPiBtZGktY2hldnJvbi1yaWdodCA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gaWQ9XCJuZWVkRGVsaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwiYmx1ZVwiPiBtZGktY2xvY2sgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+IHt7IGRlbGl2ZXJ5X2RhdGUubGFiZWwgfX0sIHt7IGRlbGl2ZXJ5X2RhdGUuZGF5X25hbWUuc3Vic3RyaW5nKDAsIDMpIH19IHt7IGRlbGl2ZXJ5X2RhdGUubmFtZSB9fSB7eyBkZWxpdmVyeV9kYXRlLmRheSB9fSB7e2RlbGl2ZXJ5X2RhdGUudGltZX19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5UaW1lPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiIEBjbGljay5zdG9wPVwiZ2VuZXJhdGVEYXRlcygpLCAodGltZWRpYWcgPSB0cnVlKVwiPiBtZGktY2hldnJvbi1yaWdodCA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gaWQ9XCJuZWVkRXN0XCIgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJyZWRcIj4gbWRpLWNhc2gtbXVsdGlwbGUgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+e3tlc3RpbWF0ZXx0b1BIUH19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5Zb3VyIHNob3BwaW5nIGVzdGltYXRlPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbiBAY2xpY2suc3RvcD1cIm5lZWRFc3QgPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJyZWRcIj4gbWRpLWNoZXZyb24tcmlnaHQgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGlkPVwiZHJvcG9mZlwiIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwiYmx1ZVwiPiBtZGktbWFwLW1hcmtlciA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT57e2ZlZXMuYWRkcmVzc319PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPiBEZWxpdmVyeSBMb2NhdGlvbiA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwicmVkXCIgQGNsaWNrLnN0b3A9XCJjdXJyZW50TG9jYXRpb24gPSBmZWVzICwgYWRkclRleHQ9J0RlbGl2ZXJ5JywgYWRkcmVzc0RpYWcgPSB0cnVlXCI+IG1kaS1jaGV2cm9uLXJpZ2h0IDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNpbXBsZS10YWJsZSBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TZXJ2aWNlIEZlZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tidXNpbmVzcy5yYXRlcy5zY319ICUgcGx1cyBUb3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EZWxpdmVyeSBGZWUgKHt7ZmVlcy5kaXN0YW5jZS5jb21wdXRlZH19IGttKTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tmZWVzLmZlZXMucmlkZXIgKyBmZWVzLmZlZXMucGxhdGZvcm18dG9QSFB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZC0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRvdGFsPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZC0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7ZmVlcy5mZWVzLnJpZGVyICsgZmVlcy5mZWVzLnBsYXRmb3JtfHRvUEhQfX08L3N0cm9uZz4gcGx1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7YnVzaW5lc3MucmF0ZXMuc2N9fSAlPC9zdHJvbmc+IG9mIFRvdGFsIEl0ZW0gVmFsdWVzIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1zaW1wbGUtdGFibGU+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lZCBAY2xpY2suc3RvcD1cImJzUW91dGUgPSB0cnVlXCIgY29sb3I9XCJibHVlXCIgd2lkdGg9XCI0NSVcIiBjbGFzcz1cIm1hLTFcIj5WaWV3IExpc3Q8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZWQgQGNsaWNrLnN0b3A9XCJwcmVDb25maXJtQXBwb2ludG1lbnQoKVwiIGNvbG9yPVwiYmx1ZVwiIHdpZHRoPVwiNDUlXCIgY2xhc3M9XCJtYS0xXCI+U3VibWl0IExpc3Q8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJhZGROZXdJdGVtXCI+XG4gICAgICAgICAgICA8di1jYXJkPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+e3ttb2RlPT0nYWRkJyA/ICdBZGQgSXRlbSB0byBMaXN0JyA6ICdFZGl0IEl0ZW0nfX08L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwIGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciB0ZXh0LWxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQxMiBzbTEyIGxnMTIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHRhcmVhIHJvd3M9XCIzXCIgbGFiZWw9XCJJdGVtIGRlc2NyaXB0aW9uXCIgb3V0bGluZWQgdi1tb2RlbD1cInNob3BpdGVtLmRlc2NcIiBwbGFjZWhvbGRlcj1cImVnLiBCcmFuZCwgQ29sb3IsIGV0Yy5cIj48L3YtdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IG1kNCBzbTQgbGc0IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIHR5cGU9XCJudW1iZXJcIiBsYWJlbD1cIk1lYXN1cmVcIiB2LW1vZGVsPVwic2hvcGl0ZW0ubWVhc3VyZVwiIGRlbnNlPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCBtZDQgc200IGxnNCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IGRlbnNlIHYtbW9kZWw9XCJzaG9waXRlbS51bml0XCIgZmxhdCA6aXRlbXM9XCJ1bml0c1wiIGxhYmVsPVwiVW5pdFwiIGl0ZW0tdGV4dD1cIm5hbWVcIiBpdGVtLXZhbHVlPVwidmFsdWVcIiAvPiA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IG1kNCBzbTQgbGc0IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb24gZ3JleS0tdGV4dFwiPiBRdHkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiIGNvbG9yPVwicmVkXCIgQGNsaWNrPVwic2hvcGl0ZW0ucXR5ID0gc2hvcGl0ZW0ucXR5IDwgMSA/IDEgOiBzaG9waXRlbS5xdHkgLSAxXCI+IG1kaS1taW51cyA8L3YtaWNvbj4ge3tzaG9waXRlbS5xdHl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiIGNvbG9yPVwiZ3JlZW5cIiBAY2xpY2s9XCJzaG9waXRlbS5xdHkgPSBzaG9waXRlbS5xdHkgKyAxXCI+IG1kaS1wbHVzIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lZCB0ZXh0IGNsYXNzPVwic2hvcHJlc3BvbnNpdmVcIiBjb2xvcj1cImJsdWVcIiBAY2xpY2suc3RvcD1cImFkZEl0ZW0oKVwiIGJsb2NrPnt7bW9kZT09J2FkZCcgPyAnQWRkIEl0ZW0gdG8gTGlzdCcgOiAnVXBkYXRlIEl0ZW0nfX08L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJic1FvdXRlXCIgZnVsbHNjcmVlbiBwZXJzaXN0ZW50PlxuICAgICAgICAgICAgPHYtY2FyZCBzdHlsZT1cImhlaWdodDogMTAwdmg7XCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5DcmVhdGUgU2hvcHBpbmcgTGlzdDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1ncm91cCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbGlzdFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQgQGNsaWNrLnN0b3A9XCJpdGVtX2NvcHkgPSBPYmplY3QuYXNzaWduKHt9LGl0ZW0pLCBzaG9waXRlbSA9IE9iamVjdC5hc3NpZ24oe30saXRlbSksIG1vZGU9ICdlZGl0JywgZWRpdEluZGV4ID0gaW5kZXgsIGFkZE5ld0l0ZW0gPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGUgdi10ZXh0PVwiaXRlbS5kZXNjXCI+PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZSBjbGFzcz1cInJlZC0tdGV4dFwiPiB7e2l0ZW0ubWVhc3VyZX19IHt7aXRlbS51bml0fX0geCB7e2l0ZW0ucXR5fX0gPSB7e2l0ZW0ubWVhc3VyZSAqIGl0ZW0ucXR5fX0ge3tpdGVtLnVuaXR9fSAoe3tpdGVtLm1lYXN1cmV9fSB7e2l0ZW0udW5pdH19L3VuaXQgKSA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIHNtYWxsIGNvbG9yPVwicmVkXCIgQGNsaWNrLnN0b3A9XCIkc3RvcmUuY29tbWl0KCdjYXJ0L3JlbW92ZUZyb21MaXN0JywgaW5kZXgpXCI+IG1kaS1kZWxldGUgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8di1mYWItdHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInBpbmtcIiBkYXJrIHNtYWxsIEBjbGljay5zdG9wPVwibW9kZT0nYWRkJyAsYWRkTmV3SXRlbSA9IHRydWVcIiBhYnNvbHV0ZSBib3R0b20gcmlnaHQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMDBweDtcIiBmYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZhYi10cmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZWQgdGV4dCBjbGFzcz1cInNob3ByZXNwb25zaXZlXCIgY29sb3I9XCJibHVlXCIgQGNsaWNrLnN0b3A9XCJic1FvdXRlPWZhbHNlXCIgYmxvY2s+SSdtIEZpbmlzaDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cImFkZHJlc3NEaWFnXCIgc2Nyb2xsYWJsZT5cbiAgICAgICAgICAgIDx2LWNhcmQgdGlsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+IHt7YWRkclRleHR9fSBBZGRyZXNzIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kMTIgc20xMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHRhcmVhIHYtbW9kZWw9XCJjdXJyZW50TG9jYXRpb24uYWRkcmVzc1wiIGEgaGludD1cIlBscyB0eXBlICdOQScgaWYgbm90IGFwcGxpY2FibGVcIiBsYWJlbD1cIkFkZHJlc3NcIiBvdXRsaW5lZCBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiAvPiA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kMTIgc20xMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1tb2RlbD1cImN1cnJlbnRMb2NhdGlvbi5sYW5kbWFya1wiIGEgaGludD1cIlBscyB0eXBlICdOQScgaWYgbm90IGFwcGxpY2FibGVcIiBsYWJlbD1cIkZsb29yL1VuaXQvUm9vbSBOby4gb3IgTGFuZG1hcmtcIiBwZXJzaXN0ZW50LWhpbnQgb3V0bGluZWQgLz4gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biB0aWxlIG91dGxpbmVkIGJsb2NrIGNvbG9yPVwicmVkXCIgQGNsaWNrPVwiYWRkcmVzc0RpYWc9ZmFsc2VcIj4gQXBwbHkgQ2hhbmdlcyA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJuZWVkRXN0XCIgcGVyc2lzdGVudD5cbiAgICAgICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPllvdXIgc2hvcHBpbmcgRXN0aW1hdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDEyIHNtMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LW1vZGVsPVwiZXN0aW1hdGVcIiByaWdodCB0eXBlPVwibnVtYmVyXCIgZGVuc2Ugc29sbyBsYWJlbD1cIllvdXIgc2hvcHBpbmcgZXN0aW1hdGVcIiBvdXRsaW5lZCBwbGFjZWhvbGRlcj1cIkVzdGltYXRlXCIgLz4gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gdGlsZSBvdXRsaW5lZCA6ZGlzYWJsZWQ9XCJcbiAgICAgICAgICAgICAgICAgZXN0aW1hdGUgPDBcbiAgICAgICAgICAgICAgXCIgY29sb3I9XCJyZWRcIiBAY2xpY2s9XCJuZWVkRXN0ID0gZmFsc2VcIj4gQXBwbHkgQ2hhbmdlcyA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJhdXRoRGlhZ1wiPlxuICAgICAgICAgICAgPHYtY2FyZCBmbGF0PlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+Q29udGFjdCBJbmZvPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8ZmlyZS11aSAvPiA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDwvdi1ib3R0b20tc2hlZXQ+XG4gICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwidGltZWRpYWdcIiBwZXJzaXN0ZW50PlxuICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+QXBwb2ludG1lbnQgVGltZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDYgbGc2IHNtNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IHYtbW9kZWw9XCJkZWxpdmVyeV9kYXRlXCIgZmxhdCA6aXRlbXM9XCJkYXRlc1wiIHJldHVybi1vYmplY3QgbGFiZWw9XCJEZWxpdmVyeSBEYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI3NlbGVjdGlvbj1cImRhdGFcIj4ge3sgZGF0YS5pdGVtLmxhYmVsIH19LCB7eyBkYXRhLml0ZW0uZGF5X25hbWUgfX0ge3sgZGF0YS5pdGVtLm5hbWUgfX0ge3sgZGF0YS5pdGVtLmRheSB9fSA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwiZGF0YVwiPiB7eyBkYXRhLml0ZW0ubGFiZWwgfX0sIHt7IGRhdGEuaXRlbS5kYXlfbmFtZSB9fSB7eyBkYXRhLml0ZW0ubmFtZSB9fSB7eyBkYXRhLml0ZW0uZGF5IH19IDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kNiBsZzYgc202PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3Qgdi1tb2RlbD1cImRlbGl2ZXJ5X2RhdGUudGltZVwiIGZsYXQgOml0ZW1zPVwiZGVsaXZlcnlfZGF0ZS5kZWxpdmVyeV90aW1lXCIgbGFiZWw9XCJEZWxpdmVyeSBUaW1lXCIgLz4gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIHRleHQgQGNsaWNrPVwidGltZWRpYWcgPSBmYWxzZVwiPiBTYXZlIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICA8di1jYXJkIHYtc2hvdz1cImlzTG9hZGVkXCIgdi1pZj1cIiFhcHRjb25maW1lZFwiIGNsYXNzPVwic2hvcHJlc3BvbnNpdmVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZWQgQGNsaWNrLnN0b3A9XCJic1FvdXRlID0gdHJ1ZVwiIGNvbG9yPVwiYmx1ZVwiIHdpZHRoPVwiNDUlXCIgY2xhc3M9XCJtYS0xXCI+Q3JlYXRlIExpc3Q8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lZCBAY2xpY2suc3RvcD1cImJzQXBwb2ludG1lbnQgPSB0cnVlXCIgY29sb3I9XCJibHVlXCIgd2lkdGg9XCI0NSVcIiBjbGFzcz1cIm1hLTFcIj5TdWJtaXQgTGlzdDwvdi1idG4+XG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgTG9hZGluZyBmcm9tICd2dWUtbG9hZGluZy1vdmVybGF5J1xuaW1wb3J0ICd2dWUtbG9hZGluZy1vdmVybGF5L2Rpc3QvdnVlLWxvYWRpbmcuY3NzJ1xuaW1wb3J0IHtcbiAgICBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlXG59XG5mcm9tICdnZW9maXJlc3RvcmUnXG5pbXBvcnQgRmlyZVVpIGZyb20gJ34vY29tcG9uZW50cy9GaXJlVWkudnVlJ1xuaW1wb3J0IEdvb2dsZU1hcHNBcGlMb2FkZXIgZnJvbSAnZ29vZ2xlLW1hcHMtYXBpLWxvYWRlcidcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEZpcmVVaSxcbiAgICAgICAgTG9hZGluZ1xuICAgIH0sXG4gICAgbGF5b3V0OiAnYXJlYScsXG4gICAgYXN5bmNEYXRhKHtcbiAgICAgICAgYXBwLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIGVycm9yXG4gICAgfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGIgPSBhcHAuJGZpcmVTdG9yZVxuICAgICAgICAgICAgY29uc3QgZ2VvY29sbGVjdGlvbiA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKGRiLmNvbGxlY3Rpb24oJ3Nob3BzJykpXG4gICAgICAgICAgICByZXR1cm4gZ2VvY29sbGVjdGlvbi53aGVyZSgndXJsJywgJz09JywgcGFyYW1zLmlkKS5nZXQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGRhdGEuZG9jc1swXS5kYXRhKClcbiAgICAgICAgICAgICAgICBsZXQgZGVsaXZlcnkgPSBkLmRlbGl2ZXJ5X3RpbWVcbiAgICAgICAgICAgICAgICBpZiAoZGVsaXZlcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46ICc5OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiAnMTk6MDA6MDAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYml6ID0ge1xuICAgICAgICAgICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmRvY3NbMF0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzc19uYW1lOiBkLmJ1c2luZXNzX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuY2g6IGQuYnJhbmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6IGQuYmFja2Ryb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBkLmxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRlczogZC5yYXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBkLmNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2hhcmluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9tLmppZmZ5ZmF2b3JzLmNvbS9zaG9wLycgKyBwYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYFBheSB5b3VyICR7ZC5idXNpbmVzc19uYW1lfSAtICR7ZC5icmFuY2h9IHdpdGggSmlmZnkgRmF2b3JzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtkLmJ1c2luZXNzX25hbWV9IC0gJHtkLmJyYW5jaH0gQmlsbCBQYXltZW50ICYgQ29sbGVjdGlvbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNodGFnczogJ2ppZmZ5ZmF2b3JzLGJpbGxzLHBheWJpbGxzLG9ubGluZW9yZGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICdmYWNlYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRmFjZWJvb2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS1mYWNlYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxODc3ZjInXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW1haWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS1nbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29yazogJ3NreXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTa3lwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWRpLXNreXBlLWJ1c2luZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwYWZmMCdcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29yazogJ3NtcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU01TJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdtZGktYW5kcm9pZC1tZXNzYWdlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMzMzMzMnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICd0ZWxlZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGVsZWdyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS10ZWxlZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDg4Y2MnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICd0d2l0dGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUd2l0dGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdtZGktdHdpdHRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxZGExZjInXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICd3aGF0c2FwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2hhdHNhcHAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS13aGF0c2FwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMyNWQzNjYnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBiaXpcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdCbG9nIG5vdCBmb3VuZCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiBlcnJvcih7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdCbG9nIG5vdCBmb3VuZCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGJzQXBwb2ludG1lbnQoKSB7XG4gICAgICAgICAgICB0aGlzLmJzUW91dGUgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPT09IDAgJiYgdGhpcy5ic0FwcG9pbnRtZW50KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0NyZWF0ZSBhIExpc3QgRmlyc3QnKVxuICAgICAgICAgICAgICAgIHRoaXMuYnNRb3V0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmJzQXBwb2ludG1lbnQgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiB0aGlzLnVzZXIucGhvbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy51c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy51c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoRGlhZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpc0F1dGgoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0F1dGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlcjogdGhpcy51c2VyLnBob25lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy51c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnVzZXIuZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoRGlhZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRmaXJlQW5hbHl0aWNzLmxvZ0V2ZW50KCdwYWdlX3ZpZXcnKVxuICAgICAgICBjb25zdCBHTWFwU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBhcGlLZXk6IHRoaXMuJEdNYXBzLmFwaUtleSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5teWxvY2F0aW9uID0gdGhpcy5zbCgpXG4gICAgICAgIGNvbnN0IGdvb2dsZSA9IEdvb2dsZU1hcHNBcGlMb2FkZXIoR01hcFNldHRpbmdzKVxuICAgICAgICB0aGlzLiRHTWFwcy5nb29nbGUgPSBnb29nbGVcbiAgICAgICAgdGhpcy4kZ2V0TG9jYXRpb24oe1xuICAgICAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMDBcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5hY2N1cmFjeSA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15bG9jYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbGlzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjYXJ0L2dldExpc3QnXVxuICAgICAgICB9LFxuICAgICAgICBjaGVja291dFBheWxvYWQoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhdXRoL2dldEZDTVRva2VuJ10sXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLiRnZW5lcmF0ZVRpbWVzdGFtcCh0aGlzLmRlbGl2ZXJ5X2RhdGUuZGF0ZSwgdGhpcy5kZWxpdmVyeV9kYXRlLnRpbWUpLFxuICAgICAgICAgICAgICAgIHN0b3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmJ1c2luZXNzLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmJ1c2luZXNzLmJ1c2luZXNzX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaDogdGhpcy5idXNpbmVzcy5icmFuY2gsXG4gICAgICAgICAgICAgICAgICAgIGxvZ286IHRoaXMuYnVzaW5lc3MubG9nb1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVsaXZlcjoge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmZlZXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgbGFuZG1hcms6IHRoaXMuZmVlcy5sYW5kbWFyayxcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IHRoaXMuZmVlcy5kaXN0YW5jZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IG5ldyB0aGlzLiRmaXJlU3RvcmVPYmouR2VvUG9pbnQodGhpcy5teWxvY2F0aW9uLmxhdCwgdGhpcy5teWxvY2F0aW9uLmxuZyksXG4gICAgICAgICAgICAgICAgZmVlczoge1xuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeTogdGhpcy5mZWVzLmZlZXMsXG4gICAgICAgICAgICAgICAgICAgIHNjOiB0aGlzLmJ1c2luZXNzLnJhdGVzLnNjXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMuZGVsaXZlcnlfZGF0ZS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiB0aGlzLmRlbGl2ZXJ5X2RhdGUudGltZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXN0aW1hdGU6IHRoaXMuZXN0aW1hdGUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMubGlzdCxcbiAgICAgICAgICAgICAgICBjb250YWN0OiB0aGlzLmNvbnRhY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXNlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhdXRoL2dldFVzZXInXVxuICAgICAgICB9LFxuICAgICAgICBpc0F1dGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYXV0aC9pc0F1dGgnXVxuICAgICAgICB9LFxuICAgICAgICBkZigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhZG1pbi9nZXRGYXJlJ11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGU6ICdhZGQnLFxuICAgICAgICAgICAgaXRlbV9jb3B5OiB7fSxcbiAgICAgICAgICAgIHRpbWVkaWFnOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5X2RhdGU6IHtcbiAgICAgICAgICAgICAgICBkZWxpdmVyeV90aW1lOiBbXSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RvZGF5JyxcbiAgICAgICAgICAgICAgICBkYXlfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0ZXM6IFtdLFxuICAgICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYWRkTmV3SXRlbTogZmFsc2UsXG4gICAgICAgICAgICBlc3RpbWF0ZTogMCxcbiAgICAgICAgICAgIG5lZWRFc3Q6IGZhbHNlLFxuICAgICAgICAgICAgc2hvcGl0ZW06IHtcbiAgICAgICAgICAgICAgICBkZXNjOiAnJyxcbiAgICAgICAgICAgICAgICBxdHk6IDEsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDAsXG4gICAgICAgICAgICAgICAgbWVhc3VyZTogMSxcbiAgICAgICAgICAgICAgICB1bml0OiAncGMnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3VucGFpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5pdHM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1BpZWNlcyhwYyknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAncGMnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0xpdGVyKEwpJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0wnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ01pbGxpbGl0ZXIobUwpJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ21MJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWNrKHBhY2spJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3BhY2snXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0tpbG9ncmFtKGtnKScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdrZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnR3JhbXMoZyknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWlsbGlncmFtKG1nKScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdtZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnT3VuY2Uob3opJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ296J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdJbmNoZXMoaW4pJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2luJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRlcihtKScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdtJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdGZWV0KGZ0KScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmdCdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgZmFxOiAwLFxuICAgICAgICAgICAgYXB0Y29uZmltZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0aERpYWc6IGZhbHNlLFxuICAgICAgICAgICAgY29udGFjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIG51bWJlcjogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVudExvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgIGFkZHJUZXh0OiAnJyxcbiAgICAgICAgICAgIGJzQXBwb2ludG1lbnQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZWRpYWc6IGZhbHNlLFxuICAgICAgICAgICAgZGVsaXZlcnlfZGF0ZToge1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5X3RpbWU6IFtdLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnVG9kYXknLFxuICAgICAgICAgICAgICAgIGRheV9uYW1lOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGVzOiBbXSxcbiAgICAgICAgICAgIGFkZHJlc3NEaWFnOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGN1bGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWFwU2hlZXQ6IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVudE1vZGU6ICdwaWNrdXAnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgbXlsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIGxhdDogOS43OTQxMTg1LFxuICAgICAgICAgICAgICAgIGxuZzogMTE4LjczMjI1OTlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZG1hcmtlcjogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFIVVNVUkJWSGdCNVZVN1N3TkJFSjdMbVpCZ01DK1VkS0t4ME1aQ0cyc3J3Y2JDQjJnbHBGRFEzdG8vSWVndlNBSVdQckJKSXlTbGlwVUtLcVlMYUhKM2lXSWVsenUvRFRrOGo3MUg3TVFQbHRtWm5mbG1aM2IzanVpdlEzQnpDSWZESTRGQVlCdlRSVjNYUjd0QmdsQ0NPSVA5b0Z3dXYvNDZRU3dXV3dmWklhYUROaTd2R09scXRacWhmaFBFNC9FVmlBeTVWNmxqRTh1VlN1WFljNEprTWpuY2FyVWVNUjBpYjVEYjdmWkV2VjZ2V0JkOFBHK1E3M0xJRll5ajNsQXNhMUcvMzcvRDQrSldnUGJjUWt5YmQ5anBkR1lWUlhsbVNpUVNTWW1pZU1XbWhnTXV3STBrU1RQa3BRSmd6S0puRGZKdUtZcnlCSkg3c1ZOQlNQR0k3QktvRmwzbitHZ3VNWTRKSGl6Nkd0b3liaWlzUmN6bUV0UEZBTStJZmw2aTVEbVRLWXFlWCtOc3NqMTlsVXo5TjJKNFhOeERUaVFTa3dpNG96NkFEVTNoTGR4Yjdkd1c5UnlMNUIwRkhybHRBZ1pVc0VjZTRlUnJtd0IzdWdDUkozZms0VnZzT3dFREh0Y1d4S2VEeTRlbWFXbUhkUktkRnB2TnBoUUtoZGhGbU9ldDQyRDNzZnRUSnc3WC93SGd3L1U4aDF5d2tKL2dZSmVJL3dpL2c4a2RtcXFxRzVBbGs2MkVyK2VtRzduWEJGU3IxYXJvTlNOa253T1Z6Wm5OUzZ4SUh0Rm9ORjZDd2VBYnBoZXlMT2ZvMytBTGZyU3V6SjFGOEVzQUFBQUFTVVZPUks1Q1lJST0nLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgYnNRb3V0ZTogZmFsc2UsXG4gICAgICAgICAgICBidXNpbmVzczogbnVsbCxcbiAgICAgICAgICAgIGUxOiAxLFxuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICBmZWVzOiB7XG4gICAgICAgICAgICAgICAgZmVlczoge1xuICAgICAgICAgICAgICAgICAgICByaWRlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgIGxhbmRtYXJrOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGVhZCgpIHtcbiAgICAgICAgY29uc3QgYnVzaW5lc3MgPSB0aGlzLmJ1c2luZXNzXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL20uamlmZnlmYXZvcnMuY29tJyArIHRoaXMuJHJvdXRlLmZ1bGxQYXRoXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogYCR7YnVzaW5lc3MuYnVzaW5lc3NfbmFtZX0gLSBPbmxpbmUgU2hvcHBpbmdgLFxuICAgICAgICAgICAgbWV0YTogW3tcbiAgICAgICAgICAgICAgICBoaWQ6IGBkZXNjcmlwdGlvbmAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgU2hvcCBhdCAke2J1c2luZXNzLmJ1c2luZXNzX25hbWV9ICR7YnVzaW5lc3MuYnJhbmNofSB3aXRoIEppZmZ5IEZhdm9ycyBSaWRlciBTaG9wcGVyYFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhpZDogJ29nOnR5cGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvZzp0eXBlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAncHJvZHVjdCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoaWQ6ICdvZzp0aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29nOnRpdGxlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgQmlsbHMgUGF5bWVudHwke2J1c2luZXNzLmJ1c2luZXNzX25hbWV9ICR7YnVzaW5lc3MuYnJhbmNofWBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoaWQ6ICdvZzpkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29nOmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgU2hvcHBpbmcgZm9yICAke2J1c2luZXNzLmJ1c2luZXNzX25hbWV9ICR7YnVzaW5lc3MuYnJhbmNofSB3aXRoIEppZmZ5IEZhdm9ycyBSaWRlciBTaG9wcGVyYFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhpZDogJ29nOmltYWdlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnb2c6aW1hZ2UnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGAke2J1c2luZXNzLmxvZ299YFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhpZDogJ29nOnVybCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29nOnVybCcsXG4gICAgICAgICAgICAgICAgY29udGVudDogdXJsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGxpbms6IFt7XG4gICAgICAgICAgICAgICAgcmVsOiAnaWNvbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7YnVzaW5lc3MubG9nb31gXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZEl0ZW0oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnYWRkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2FydC9hZGRMaXN0JywgdGhpcy5zaG9waXRlbSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjYXJ0L3VwZGF0ZUl0ZW1MaXN0Jywge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnNob3BpdGVtLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5lZGl0SW5kZXhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaG9waXRlbSA9IHtcbiAgICAgICAgICAgICAgICBkZXNjOiAnJyxcbiAgICAgICAgICAgICAgICBxdHk6IDEsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDAsXG4gICAgICAgICAgICAgICAgbWVhc3VyZTogMSxcbiAgICAgICAgICAgICAgICB1bml0OiAncGMnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3VucGFpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWRpdEluZGV4ID0gLTFcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdhZGQnXG4gICAgICAgICAgICB0aGlzLmFkZE5ld0l0ZW0gPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZUJvb2tpbmdJZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJzID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWidcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnU1ItJ1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDY7IGkgPiAwOyAtLWkpIHJlc3VsdCArPSBjaGFyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpXVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9LFxuICAgICAgICBhdHRlbXB0TG9naW4oKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBdXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoRGlhZyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVEYXRlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5hZGREYXlzKG5ldyBEYXRlKCksIDApXG4gICAgICAgICAgICBjb25zdCB0b21vcnJvdyA9IHRoaXMuYWRkRGF5cyhuZXcgRGF0ZSgpLCAxKVxuICAgICAgICAgICAgY29uc3QgbmV4dGRheSA9IHRoaXMuYWRkRGF5cyhuZXcgRGF0ZSgpLCAyKVxuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKHRoaXMuJGdldE5vdygpKS5nZXRUaW1lKClcbiAgICAgICAgICAgIGxldCBjbG9zZSA9IG5ldyBEYXRlKHRoaXMuJGdldE5vdygpLnN1YnN0cmluZygwLCAxMCkgKyAnICcgKyB0aGlzLmJ1c2luZXNzLmRlbGl2ZXJ5LmNsb3NlKVxuICAgICAgICAgICAgaWYgKG5vdyA8IGNsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlcyA9IFt0b2RheSwgdG9tb3Jyb3csIG5leHRkYXldXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXMgPSBbdG9tb3Jyb3csIG5leHRkYXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFkZERheXMoZGF0ZSwgZGF5cykge1xuICAgICAgICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IFsnVG9kYXknLCAnVG9tb3Jyb3cnXVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgICAgIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBkYXlzKVxuICAgICAgICAgICAgaWYgKGRheXMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5wdXNoKGRheU5hbWVzW3Jlc3VsdC5nZXREYXkoKV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGVsaXZlcnlfdGltZSA9IFtdXG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUodGhpcy4kZ2V0Tm93KCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgbGV0IGNsb3NlID0gbmV3IERhdGUodGhpcy4kZ2V0Tm93KCkuc3Vic3RyaW5nKDAsIDEwKSArICcgJyArIHRoaXMuYnVzaW5lc3MuZGVsaXZlcnkuY2xvc2UpXG4gICAgICAgICAgICBsZXQgb3BlbiA9IG5ldyBEYXRlKHRoaXMuJGdldE5vdygpLnN1YnN0cmluZygwLCAxMCkgKyAnICcgKyB0aGlzLmJ1c2luZXNzLmRlbGl2ZXJ5Lm9wZW4pXG4gICAgICAgICAgICBpZiAoZGF5cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPCBjbG9zZSAmJiBub3cgPiBvcGVuKSBkZWxpdmVyeV90aW1lID0gdGhpcy4kdGltZVJhbmdlKHRoaXMuJGZvcm1hdEFNUE0obmV3IERhdGUoKSksIHRoaXMuYnVzaW5lc3MuZGVsaXZlcnkuY2xvc2UsIDQ1KVxuICAgICAgICAgICAgICAgIGVsc2UgZGVsaXZlcnlfdGltZSA9IHRoaXMuJHRpbWVSYW5nZSh0aGlzLmJ1c2luZXNzLmRlbGl2ZXJ5Lm9wZW4sIHRoaXMuYnVzaW5lc3MuZGVsaXZlcnkuY2xvc2UsIDQ1KVxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5X3RpbWUudW5zaGlmdCgnQVNBUCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5X3RpbWUgPSB0aGlzLiR0aW1lUmFuZ2UodGhpcy5idXNpbmVzcy5kZWxpdmVyeS5vcGVuLCB0aGlzLmJ1c2luZXNzLmRlbGl2ZXJ5LmNsb3NlLCA0NSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogcmVzdWx0LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1vbnRoTmFtZXNbcmVzdWx0LmdldE1vbnRoKCldLFxuICAgICAgICAgICAgICAgIGRheTogcmVzdWx0LmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBkYXlfbmFtZTogZGF5TmFtZXNbcmVzdWx0LmdldERheSgpXSxcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxbZGF5c10sXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfdGltZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmVDb25maXJtQXBwb2ludG1lbnQoKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBdXRoKSB0aGlzLnNoYWtlKCduZWVkQXV0aCcpXG4gICAgICAgICAgICBpZiAodGhpcy5lc3RpbWF0ZSA8IDEpIHRoaXMuc2hha2UoJ25lZWRFc3QnKVxuICAgICAgICAgICAgaWYgKHRoaXMuZmVlcy5hZGRyZXNzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmZlZXMubGFuZG1hcmsubGVuZ3RoID09PSAwKSB0aGlzLnNoYWtlKCdkcm9wb2ZmJylcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJzQXBwb2ludG1lbnQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcmVzdG9yZSA9IHRoaXMuJGZpcmVTdG9yZU9iaigpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja291dFBheWxvYWQuc3RhdHVzID0gJ3BsYWNlZCdcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0UGF5bG9hZC5yaWRlciA9ICd1bmFzc2lnbmVkJ1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXlsb2FkLmFyZWEgPSB0aGlzLmRmLmlkXG4gICAgICAgICAgICAgICAgY29uc3QgZ2VvY29sbGVjdGlvbiA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdzaG9wX3JlcXVlc3QnKSlcbiAgICAgICAgICAgICAgICBnZW9jb2xsZWN0aW9uLmRvYyh0aGlzLmdlbmVyYXRlQm9va2luZ0lkKCkpLnNldCh0aGlzLmNoZWNrb3V0UGF5bG9hZCkudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwdGNvbmZpbWVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2FydC9jbGVhckxpc3QnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzbCgpIHtcbiAgICAgICAgICAgIGxldCBzbCA9IHtcbiAgICAgICAgICAgICAgICBsYXQ6IDAsXG4gICAgICAgICAgICAgICAgbG5nOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5idXNpbmVzcy5sb2NhdGlvbi5oYXNPd25Qcm9wZXJ0eSgnQWMnKSkge1xuICAgICAgICAgICAgICAgIHNsID0ge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IHRoaXMuYnVzaW5lc3MubG9jYXRpb24uUmMsXG4gICAgICAgICAgICAgICAgICAgIGxuZzogdGhpcy5idXNpbmVzcy5sb2NhdGlvbi5BY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJ1c2luZXNzLmxvY2F0aW9uLmhhc093blByb3BlcnR5KCdfbGF0JykpIHtcbiAgICAgICAgICAgICAgICBzbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiB0aGlzLmJ1c2luZXNzLmxvY2F0aW9uLl9sYXQsXG4gICAgICAgICAgICAgICAgICAgIGxuZzogdGhpcy5idXNpbmVzcy5sb2NhdGlvbi5fbG9uZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJ1c2luZXNzLmxvY2F0aW9uLmhhc093blByb3BlcnR5KCdsYXRpdHVkZScpKSB7XG4gICAgICAgICAgICAgICAgc2wgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogdGhpcy5idXNpbmVzcy5sb2NhdGlvbi5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiB0aGlzLmJ1c2luZXNzLmxvY2F0aW9uLmxvbmdpdHVkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzbFxuICAgICAgICB9LFxuICAgICAgICByZXFRb3V0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy4kcmVmcy5nTWFwLm1hcC5nZXRDZW50ZXIoKVxuICAgICAgICAgICAgY29uc3QgZGwgPSB7XG4gICAgICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQoKSxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5ic1FvdXRlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5ic0FwcG9pbnRtZW50ID0gZmFsc2VcbiAgICAgICAgICAgIGxldCBzbCA9IHRoaXMuc2woKVxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FkbWluL2dldEFyZWEnLCBzbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXFBcGkoZGwsIHNsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVxQXBpKGRsLCBsb2NhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVkID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLiRnZXQoJy9kaXN0YW5jZS8nLCB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbnM6IGxvY2F0aW9uLmxhdCArICcsJyArIGxvY2F0aW9uLmxuZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25zOiBkbC5sYXQgKyAnLCcgKyBkbC5sbmcsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0FJemFTeURYLWF0b0xtNm5RcE1nUV9HWUhJbzFraXNjQWU1dHhYYydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmRpc3RhbmNlX3BsYXRmb3JtKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWRlciA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmRpc3RhbmNlX3JpZGVyKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGQucm93c1swXS5lbGVtZW50c1swXS5kaXN0YW5jZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZCA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLm1pbl9kaXN0YW5jZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluX2RmID0gcGFyc2VGbG9hdCh0aGlzLmRmLmZlZXMubWluX2RmKVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGYgPSAwXG4gICAgICAgICAgICAgICAgICAgIGxldCBkcyA9IGRpc3RhbmNlIC8gMTAwMFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgLyAxMDAwIDwgbWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRmID0gbWluX2RmXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXVsdGlwbGllciA9IGRpc3RhbmNlIC8gMTAwMCAtIG1kXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGllciA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IE1hdGguZmxvb3IobXVsdGlwbGllcikgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICBkZiA9IChyaWRlciArIHBsYXRmb3JtKSAqIG11bHRpcGxpZXIgKyBtaW5fZGZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkcyA9IE1hdGguZmxvb3IoZHMpICsgMVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZV9hY3R1YWwgPSBwYXJzZUZsb2F0KChkLnJvd3NbMF0uZWxlbWVudHNbMF0uZGlzdGFuY2UudmFsdWUgLyAxMDAwKS50b0ZpeGVkKDIpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWRlcl9kZiA9IE1hdGguZmxvb3IocmlkZXIgKiBkaXN0YW5jZV9hY3R1YWwpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXRmb3JtX2RmID0gTWF0aC5mbG9vcihkZiAtIHJpZGVyX2RmKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlZXMuZmVlcy5yaWRlciA9IHJpZGVyX2RmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlcy5mZWVzLnBsYXRmb3JtID0gcGxhdGZvcm1fZGZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWVzLmRpc3RhbmNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWQ6IGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBkaXN0YW5jZV9hY3R1YWxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlZXMuYWRkcmVzcyA9IGQuZGVzdGluYXRpb25fYWRkcmVzc2VzWzBdXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJzQXBwb2ludG1lbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuYnNBcHBvaW50bWVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Jsb2cgbm90IGZvdW5kJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjZW50ZXJDaGFuZ2UoKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuJHJlZnMuZ01hcC5tYXAuZ2V0Q2VudGVyKClcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuZ21hcG1hcmtlci5tYXJrZXIuc2V0UG9zaXRpb24oe1xuICAgICAgICAgICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0KCksXG4gICAgICAgICAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMubXlsb2NhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCgpLFxuICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG8oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsaW5nLXRlY2huaXF1ZXMtMycpLnNjcm9sbCh7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzaGFrZShpZCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKCdzaGFrZScpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKVxuICAgICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnYtbGlzdC1pdGVtX19pY29uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnNoYWtlIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICB9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY0YjkxM2Umc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2NGI5MTNlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKVxuaWYgKHN0eWxlMC5fX2luamVjdF9fKSBzdHlsZTAuX19pbmplY3RfXyhjb250ZXh0KVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgXCIzNjRiOTEzZVwiLFxuICBcIjUzZWI0YTcwXCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcCc7XG5pbXBvcnQgeyBWQXBwQmFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXBwQmFyJztcbmltcG9ydCB7IFZCb3R0b21TaGVldCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJvdHRvbVNoZWV0JztcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkQWN0aW9ucyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNvbnRlbnQnO1xuaW1wb3J0IHsgVkRpdmlkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEaXZpZGVyJztcbmltcG9ydCB7IFZFeHBhbnNpb25QYW5lbCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkV4cGFuc2lvblBhbmVsJztcbmltcG9ydCB7IFZFeHBhbnNpb25QYW5lbENvbnRlbnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbCc7XG5pbXBvcnQgeyBWRXhwYW5zaW9uUGFuZWxIZWFkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZFeHBhbnNpb25QYW5lbCc7XG5pbXBvcnQgeyBWRXhwYW5zaW9uUGFuZWxzIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WRXhwYW5zaW9uUGFuZWwnO1xuaW1wb3J0IHsgVkZhYlRyYW5zaXRpb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL3RyYW5zaXRpb25zJztcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkljb24nO1xuaW1wb3J0IHsgVkltZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkltZyc7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWTGlzdCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1BY3Rpb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUNvbnRlbnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUdyb3VwIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1JY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1TdWJ0aXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZNZW51IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTWVudSc7XG5pbXBvcnQgeyBWUm93IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWU2VsZWN0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU2VsZWN0JztcbmltcG9ydCB7IFZTaGVldCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlNoZWV0JztcbmltcG9ydCB7IFZTaW1wbGVUYWJsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRhdGFUYWJsZSc7XG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dEZpZWxkJztcbmltcG9ydCB7IFZUZXh0YXJlYSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRleHRhcmVhJztcbmltcG9ydCB7IFZUb29sYmFyVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUb29sYmFyJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBcHAsVkFwcEJhcixWQm90dG9tU2hlZXQsVkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZDYXJkVGl0bGUsVkNvbnRhaW5lcixWQ29udGVudCxWRGl2aWRlcixWRXhwYW5zaW9uUGFuZWwsVkV4cGFuc2lvblBhbmVsQ29udGVudCxWRXhwYW5zaW9uUGFuZWxIZWFkZXIsVkV4cGFuc2lvblBhbmVscyxWRmFiVHJhbnNpdGlvbixWRmxleCxWSWNvbixWSW1nLFZMYXlvdXQsVkxpc3QsVkxpc3RJdGVtLFZMaXN0SXRlbUFjdGlvbixWTGlzdEl0ZW1Db250ZW50LFZMaXN0SXRlbUdyb3VwLFZMaXN0SXRlbUljb24sVkxpc3RJdGVtU3VidGl0bGUsVkxpc3RJdGVtVGl0bGUsVk1lbnUsVlJvdyxWU2VsZWN0LFZTaGVldCxWU2ltcGxlVGFibGUsVlNwYWNlcixWVGV4dEZpZWxkLFZUZXh0YXJlYSxWVG9vbGJhclRpdGxlfSlcbiJdLCJzb3VyY2VSb290IjoiIn0=