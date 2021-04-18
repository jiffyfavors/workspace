exports.ids = [5];
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

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Directives
 // Types


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'rippleable',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  methods: {
    genRipple(data = {}) {
      if (!this.ripple) return null;
      data.staticClass = 'v-input--selection-controls__ripple';
      data.directives = data.directives || [];
      data.directives.push({
        name: 'ripple',
        value: {
          center: true
        }
      });
      return this.$createElement('div', data);
    }

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

/***/ 194:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prevent; });
/* harmony import */ var _components_VInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _rippleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(188);
/* harmony import */ var _comparable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(166);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Components
 // Mixins


 // Utilities


function prevent(e) {
  e.preventDefault();
}
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_components_VInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _rippleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _comparable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'selectable',
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  props: {
    id: String,
    inputValue: null,
    falseValue: null,
    trueValue: null,
    multiple: {
      type: Boolean,
      default: null
    },
    label: String
  },

  data() {
    return {
      hasColor: this.inputValue,
      lazyValue: this.inputValue
    };
  },

  computed: {
    computedColor() {
      if (!this.isActive) return undefined;
      if (this.color) return this.color;
      if (this.isDark && !this.appIsDark) return 'white';
      return 'primary';
    },

    isMultiple() {
      return this.multiple === true || this.multiple === null && Array.isArray(this.internalValue);
    },

    isActive() {
      const value = this.value;
      const input = this.internalValue;

      if (this.isMultiple) {
        if (!Array.isArray(input)) return false;
        return input.some(item => this.valueComparator(item, value));
      }

      if (this.trueValue === undefined || this.falseValue === undefined) {
        return value ? this.valueComparator(value, input) : Boolean(input);
      }

      return this.valueComparator(input, this.trueValue);
    },

    isDirty() {
      return this.isActive;
    },

    rippleState() {
      return !this.isDisabled && !this.validationState ? undefined : this.validationState;
    }

  },
  watch: {
    inputValue(val) {
      this.lazyValue = val;
      this.hasColor = val;
    }

  },
  methods: {
    genLabel() {
      const label = _components_VInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].options.methods.genLabel.call(this);
      if (!label) return label;
      label.data.on = {
        // Label shouldn't cause the input to focus
        click: prevent
      };
      return label;
    },

    genInput(type, attrs) {
      return this.$createElement('input', {
        attrs: Object.assign({
          'aria-checked': this.isActive.toString(),
          disabled: this.isDisabled,
          id: this.computedId,
          role: type,
          type
        }, attrs),
        domProps: {
          value: this.value,
          checked: this.isActive
        },
        on: {
          blur: this.onBlur,
          change: this.onChange,
          focus: this.onFocus,
          keydown: this.onKeydown,
          click: prevent
        },
        ref: 'input'
      });
    },

    onBlur() {
      this.isFocused = false;
    },

    onClick(e) {
      this.onChange();
      this.$emit('click', e);
    },

    onChange() {
      if (!this.isInteractive) return;
      const value = this.value;
      let input = this.internalValue;

      if (this.isMultiple) {
        if (!Array.isArray(input)) {
          input = [];
        }

        const length = input.length;
        input = input.filter(item => !this.valueComparator(item, value));

        if (input.length === length) {
          input.push(value);
        }
      } else if (this.trueValue !== undefined && this.falseValue !== undefined) {
        input = this.valueComparator(input, this.trueValue) ? this.falseValue : this.trueValue;
      } else if (value) {
        input = this.valueComparator(input, value) ? null : value;
      } else {
        input = !input;
      }

      this.validate(true, input);
      this.internalValue = input;
      this.hasColor = input;
    },

    onFocus() {
      this.isFocused = true;
    },

    /** @abstract */
    onKeydown(e) {}

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

/***/ 199:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 200:
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

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(146);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(195);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },

  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },

  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },

    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }

  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },

    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },

    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }

  },
  methods: {
    genCheckbox() {
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', { ...this.attrs$,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },

    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }

  }
}));

/***/ }),

/***/ 225:
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

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Permission.vue?vue&type=template&id=513bc24e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('client-only',[(_vm.isShow)?_c('v-card',{staticClass:"mx-auto",attrs:{"max-width":"500"}},[_c('v-card-title',[_vm._v("Request Permission")]),_vm._v(" "),_c('v-list',{attrs:{"shaped":""}},[(_vm.isNotifShow)?_c('v-list-item-group',[_c('v-list-item',{attrs:{"dense":"","active-class":"deep-purple--text text--accent-4"},on:{"click":function($event){$event.stopPropagation();_vm.notification = !_vm.notification}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var active = ref.active;
var toggle = ref.toggle;
return [_c('v-list-item-action',[_c('v-checkbox',{attrs:{"input-value":active,"true-value":true,"false-value":false,"color":"deep-purple accent-4"},on:{"click":toggle}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("Allow Notification")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Receive latest promos of your favorite merchant.")])],1)]}}],null,false,2982398508)})],1):_vm._e(),_vm._v(" "),(_vm.isLocShow)?_c('v-list-item-group',[_c('v-list-item',{attrs:{"dense":"","active-class":"deep-purple--text text--accent-4"},on:{"click":function($event){$event.stopPropagation();_vm.locations=!_vm.locations}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var active = ref.active;
var toggle = ref.toggle;
return [_c('v-list-item-action',[_c('v-checkbox',{attrs:{"input-value":active,"true-value":true,"false-value":false,"color":"deep-purple accent-4"},on:{"click":toggle}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("Allow Location")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("To show you nearby merchants, billers and stores.")])],1)]}}],null,false,437487635)})],1):_vm._e()],1)],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Permission.vue?vue&type=template&id=513bc24e&

// EXTERNAL MODULE: external "geofirestore"
var external_geofirestore_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Permission.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Permissionvue_type_script_lang_js_ = ({
  data() {
    return {
      isNotifShow: false,
      isLocShow: false,
      locations: false,
      notification: false
    };
  },

  computed: {
    lastUpdate() {
      try {
        return this.$store.getters['auth/lastUpdate'];
      } catch (e) {
        return new Date().getTime() - 119000;
      }
    },

    fcmToken() {
      return this.$store.getters['auth/getFCMToken'];
    },

    df() {
      return this.$store.getters['admin/getFare'];
    },

    user() {
      return this.$store.getters['auth/getUser'];
    },

    isShow() {
      return this.isLocShow || this.isNotifShow;
    }

  },
  watch: {
    locations() {
      if (this.locations) {
        this.getLocation();
      }
    },

    notification() {
      if (this.notification) {
        this.getToken('Line 78');
      }
    }

  },

  mounted() {
    this.checkNotification();

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(() => {
        this.isLocShow = false;
        let now = new Date().getTime();

        if (now - this.lastUpdate > 60 * 1000 * 30) {
          this.getLocation();
        }
      }, () => {
        this.isLocShow = false;
      });
    } else {
      this.isLocShow = false;
    }
  },

  methods: {
    getLocation() {
      var geoOptions = {
        maximumAge: 5 * 60 * 1000,
        enableHighAccuracy: true
      };
      this.isLocShow = false;
      navigator.geolocation.getCurrentPosition(pos => {
        let coord = pos.coords;

        if (this.user && this.fcmToken) {
          const firestore = this.$fireStoreObj();
          const user = new external_geofirestore_["GeoCollectionReference"](firestore.collection('users'));
          let payload = {
            coordinates: new this.$fireStoreObj.GeoPoint(coord.latitude, coord.longitude)
          };
          payload.tokens = this.$fireStoreObj.FieldValue.arrayUnion(this.fcmToken);
          user.doc(this.user.id).update(payload);
        }

        if (coord.accuracy < 500) {
          this.$store.dispatch('admin/getArea', {
            lat: coord.latitude,
            lng: coord.longitude
          }).then(() => {
            this.updateFCMToken();
          });
        }

        this.isLocShow = false;
      }, error => {
        console.log('error');
        this.isLocShow = false;
      }, geoOptions);
    },

    checkLocation() {
      if (navigator.geolocation) {
        this.isLocShow = true;
      } else {
        this.isLocShow = false;
      }
    },

    updateFCMToken() {
      if ("Notification" in window) {
        if (Notification.permission === "granted" && this.fcmToken) {
          let path = this.user ? 'registered' : 'unregistered';
          const firestore = this.$fireStoreObj();
          let area_name = this.df.name.replace(/ /g, '_').toLowerCase();
          const area = new external_geofirestore_["GeoCollectionReference"](firestore.collection('areas').doc(this.df.id).collection('tokens'));

          if (this.user) {
            area.doc('registered').update({
              tokens: this.$fireStoreObj.FieldValue.arrayUnion(this.fcmToken)
            });
            area.doc('unregistered').update({
              tokens: this.$fireStoreObj.FieldValue.arrayRemove(this.fcmToken)
            });
            this.topicSubscription([this.fcmToken], ['registered', 'registered' + '_' + area_name, 'registered' + '_' + this.df.country.code], 'subscribeToTopic');
            this.topicSubscription([this.fcmToken], ['unregistered', 'unregistered' + '_' + area_name, 'unregistered' + '_' + this.df.country.code], 'unsubscribeFromTopic');
          } else {
            area.doc('registered').update({
              tokens: this.$fireStoreObj.FieldValue.arrayRemove(this.fcmToken)
            });
            area.doc('unregistered').update({
              tokens: this.$fireStoreObj.FieldValue.arrayUnion(this.fcmToken)
            });
            this.topicSubscription([this.fcmToken], ['registered', 'registered' + '_' + area_name, 'registered' + '_' + this.df.country.code], 'unsubscribeFromTopic');
            this.topicSubscription([this.fcmToken], ['unregistered', 'unregistered' + '_' + area_name, 'unregistered' + '_' + this.df.country.code], 'subscribeToTopic');
          }
        }
      } else {
        this.$store.commit('auth/setFCMToken', 'Not Supported');
        this.isNotifShow = false;
      }
    },

    checkNotification() {
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
          this.isNotifShow = false;
          this.$fireMess.onMessage(payload => {
            this.displayNotification(payload);
          }, error => {
            console.log('FCM Error:', error);
          }, completed => {
            console.log('FCM Sucess', completed);
          });
          let now = new Date().getTime();

          if (now - this.lastUpdate > 60 * 1000 * 30 || !this.fcmToken) {
            this.getToken('Line 163');
            this.onTokenChange();
          }
        } else if (Notification.permission !== "denied") {
          this.isNotifShow = true;
        } else {
          this.isNotifShow = false;
        }
      } else {
        this.$store.commit('auth/setFCMToken', 'Not Supported');
        this.isNotifShow = false;
      }
    },

    displayNotification(payload) {
      if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
          var options = {
            body: payload.notification.body,
            icon: '/icon-96px.png',
            badge: '/badge.png',
            vibrate: [100, 50, 100],
            data: payload.notification.data
          };
          reg.showNotification(payload.notification.title, options);
        });
      }
    },

    async getToken(line) {
      if ("Notification" in window) {
        let permission = await Notification.requestPermission();

        if (permission === "granted") {
          this.isNotifShow = false;
          let currentToken;

          try {
            currentToken = await this.$fireMess.getToken();
          } catch (e) {
            console.log('An error occurred while retrieving token. ', e);
          }

          if (currentToken) {
            this.$store.commit('auth/setFCMToken', currentToken);
          }

          if (currentToken && this.fcmToken && currentToken !== this.fcmToken) {
            this.$store.commit('auth/setFCMToken', currentToken);
          } else {
            console.info('No Instance ID token available. Request permission to generate one.');
          }
        } else {
          this.isNotifShow = false;
        }
      } else {
        this.$store.commit('auth/setFCMToken', 'Not Supported');
        this.isNotifShow = false;
      }
    },

    topicSubscription(tokens, topics, fn) {
      this.$fireFunc.httpsCallable(fn)({
        tokens: tokens,
        topics: topics
      });
    },

    onTokenChange() {
      try {
        this.$fireMess.onTokenRefresh(async () => {
          try {
            const refreshedToken = await this.$fireMess.getToken();
            let path = this.user ? 'registered' : 'unregistered';
            let area_name = this.df.name.replace(/ /g, '_').toLowerCase();

            if (this.user) {
              const firestore = this.$fireStoreObj();
              const user = new external_geofirestore_["GeoCollectionReference"](firestore.collection('users'));
              payload.tokens = this.$fireStoreObj.FieldValue.arrayUnion(refreshedToken);
              await user.doc(this.user.id).update(payload);
              payload.tokens = this.$fireStoreObj.FieldValue.arrayRemove(this.fcmToken);
              await user.doc(this.user.id).update(payload);
            }

            this.topicSubscription([this.fcmToken], [path, path + '_' + area_name, path + '_' + this.df.country.code], 'unsubscribeFromTopic');
            this.topicSubscription([refreshedToken], [path, path + '_' + area_name, path + '_' + this.df.country.code], 'subscribeToTopic');
            this.$store.commit('auth/setFCMToken', refreshedToken);
          } catch (e) {
            console.log('Unable to retrieve refreshed token ', e);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Permission.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Permissionvue_type_script_lang_js_ = (Permissionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(224);

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

// CONCATENATED MODULE: ./components/Permission.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Permissionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6ad308f7"
  
)

/* harmony default export */ var Permission = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["d" /* VCardTitle */],VCheckbox: VCheckbox["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */]})


/***/ }),

/***/ 233:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_20a5b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_20a5b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_20a5b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_20a5b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_style_index_0_id_20a5b1b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 250:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 251:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=template&id=20a5b1b9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"width":"100%","height":"100%"}},[_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"#00aff0"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('img',{staticStyle:{"display":"none"},attrs:{"height":"1","width":"1","src":"https://www.facebook.com/tr?id=2320510864924437&ev=PageView&noscript=1"}}),_vm._v(" "),_c('v-app-bar',{attrs:{"app":"","fixed":"","dark":"","color":"#00aff0"}},[_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();return _vm.$router.go(-1)}}},[_c('v-icon',[_vm._v(" mdi-arrow-left-bold")])],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v("Cart")])],1),_vm._v(" "),_c('client-only',[_c('v-sheet',{staticClass:"overflow-y-auto",attrs:{"max-height":"85vh"}},[_c('v-content',[_c('v-container',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},[(_vm.isHide && _vm.cartSize < 1)?_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-icon',{staticClass:"mb-2",attrs:{"color":"success","size":"200"}},[_vm._v(" mdi-checkbox-marked-circle ")]),_vm._v(" "),_c('blockquote',{staticClass:"blockquote mb-5"},[_c('span',{staticStyle:{"font-size":"50px"}},[_vm._v("😋")]),_vm._v(" "),_c('h4',[_vm._v("Order Completed")])]),_vm._v(" "),_c('footer',[_c('v-btn',{attrs:{"outlined":"","text":"","block":"","to":"/transactions","color":"red"}},[_vm._v(" View Orders ")])],1)],1):_vm._e(),_vm._v(" "),(!_vm.isHide && _vm.cartSize < 1)?_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-icon',{staticClass:"mb-2",attrs:{"color":"red","size":"200"}},[_vm._v(" mdi-cart-off ")]),_vm._v(" "),_c('blockquote',{staticClass:"blockquote"},[_c('span',{staticStyle:{"font-size":"50px"}},[_vm._v("😢")]),_vm._v(" "),_c('h4',[_vm._v("Your cart is lonely")])]),_vm._v(" "),_c('footer',[_c('v-btn',{attrs:{"outlined":"","text":"","block":"","to":"/","color":"red"}},[_vm._v(" Shop Now ")])],1)],1):_vm._e(),_vm._v(" "),(!_vm.isHide && _vm.cartSize > 0)?_c('v-flex',{attrs:{"xs12":"","sm6":"","md6":"","lg4":""}},[_c('v-card',{attrs:{"width":"100%"}},[_c('v-list',{attrs:{"two-line":""}},_vm._l((_vm.cartItem),function(item,index){return _c('v-list-item-group',{key:item.index},[_c('v-divider'),_vm._v(" "),_c('v-list-item',{attrs:{"dense":""}},[_c('v-list-item-avatar',{attrs:{"color":"grey darken-3"}},[(item.info.img != '')?_c('v-img',{staticClass:"elevation-6",attrs:{"src":item.info.img}}):_c('v-avatar',{staticClass:"white--text",attrs:{"color":"blue"}},[_vm._v(" "+_vm._s(item.info.name .match(/\b(\w)/g) .join('') .substr(0, 2))+" ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',{domProps:{"textContent":_vm._s(item.info.name)}}),_vm._v(" "),_c('v-list-item-subtitle',{staticClass:"red--text"},[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.computeTotal(item)))+" ")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-list-item-action-text',[_vm._v(" "+_vm._s(_vm._f("toPHP")((_vm.computeTotal(item) / item.qty)))+" x "+_vm._s(item.qty)+" ")]),_vm._v(" "),_c('v-icon',{attrs:{"small":"","color":"red"},on:{"click":function($event){$event.stopPropagation();return _vm.removeCart(item)}}},[_vm._v(" mdi-delete ")])],1)],1),_vm._v(" "),_c('v-simple-table',{attrs:{"dense":""},scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('thead',[_c('tr',[_c('th',{staticClass:"text-left"},[_vm._v(" Item ")]),_vm._v(" "),_c('th',{staticClass:"text-left"},[_vm._v(" Value ")]),_vm._v(" "),_c('th',{staticClass:"text-left"},[_vm._v(" Price ")])])]),_vm._v(" "),_c('tbody',_vm._l((_vm.computeAddOns(
                            item.add_ons,
                            item.info.base_price
                          )),function(addon,i){return _c('tr',{key:addon.name + "_" + i + "_" + index},[_c('td',[_vm._v(_vm._s(addon.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(addon.values))]),_vm._v(" "),(addon.price>0)?_c('td',[_vm._v(_vm._s(_vm._f("toPHP")(addon.price)))]):_vm._e(),_vm._v(" "),(addon.price<1)?_c('td',[_vm._v("-")]):_vm._e()])}),0)]},proxy:true}],null,true)}),_vm._v(" "),(index + 1 <= _vm.cartItem.length)?_c('v-divider',{key:index}):_vm._e()],1)}),1)],1)],1):_vm._e(),_vm._v(" "),(_vm.isHide && _vm.cartSize > 0)?_c('v-flex',{staticClass:"ma-1",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('v-card',[_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{staticClass:"subtitle-2",attrs:{"xs8":"","sm8":"","md8":""}},[_vm._v(" Order Value ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.checkoutPayload.amount.order_value))+" ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_vm._v(" Delivery Fee -\n                                            "),_c('small',[_vm._v(" "+_vm._s(_vm.checkoutPayload.delivery.distance.computed)+" km ")])]),_vm._v(" "),_c('v-flex',{staticClass:"text-end",attrs:{"xs4":"","sm4":"","md4":""}},[_vm._v(" "+_vm._s(_vm._f("toPHP")((_vm.checkoutPayload.amount.delivery.platform + _vm.checkoutPayload.amount.delivery.rider)))+" ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_vm._v(" Convenience Fee ")]),_vm._v(" "),_c('v-flex',{staticClass:"text-end",attrs:{"xs4":"","sm4":"","md4":""}},[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.checkoutPayload.amount.sc.markup))+" ")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_c('v-text-field',{staticClass:"mr-2",attrs:{"text":"","append-icon":"mdi-ticket-percent","solo":"","dense":"","small":"","placeholder":"Promo Code","label":"Promo Code"},model:{value:(_vm.promoCode),callback:function ($$v) {_vm.promoCode=$$v},expression:"promoCode"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_c('v-btn',{attrs:{"outlined":"","color":"green"},on:{"click":function($event){$event.stopPropagation();return _vm.findVoucher()}}},[_vm._v("Apply")])],1),_vm._v(" "),(_vm.promoCodeStatus.accepted)?_c('v-flex',{staticClass:"subtitle-2",attrs:{"xs8":"","sm8":"","md8":""}},[_vm._v("Discount - "+_vm._s(_vm.promoCodeStatus.status.code)+" ")]):_vm._e(),_vm._v(" "),(_vm.promoCodeStatus.accepted)?_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_vm._v(" "+_vm._s(_vm.promoCodeStatus.status.value)+" ")]):_vm._e(),_vm._v(" "),(_vm.promoCodeStatus.accepted)?_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_c('span',{staticClass:"subheading"},[_vm._v("Subtotal")])]):_vm._e(),_vm._v(" "),(_vm.promoCodeStatus.accepted)?_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.checkoutPayload.amount.grandtotal))+" ")]):_vm._e(),_vm._v(" "),(_vm.promoCodeStatus.accepted)?_c('v-flex',{staticClass:"subtitle-2",attrs:{"xs8":"","sm8":"","md8":""}},[_vm._v(" Amount ")]):_vm._e(),_vm._v(" "),(_vm.promoCodeStatus.accepted)?_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_vm._v(" - "+_vm._s(_vm._f("toPHP")(_vm.promoCodeStatus.status.computed))+" ")]):_vm._e(),_vm._v(" "),(_vm.promoCodeStatus.accepted == false)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-alert',{attrs:{"type":"error"}},[_vm._v(_vm._s(_vm.promoCodeStatus.status))])],1):_vm._e(),_vm._v(" "),(!_vm.promoCodeStatus.accepted)?_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_c('span',{staticClass:"subheading"},[_vm._v("Grandtotal")])]):_vm._e(),_vm._v(" "),(!_vm.promoCodeStatus.accepted)?_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_c('div',{staticClass:"ml-2 red--text"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.checkoutPayload.amount.grandtotal)))])])]):_vm._e(),_vm._v(" "),(_vm.promoCodeStatus.accepted)?_c('v-flex',{attrs:{"xs8":"","sm8":"","md8":""}},[_c('span',{staticClass:"subheading"},[_vm._v("Grandtotal")])]):_vm._e(),_vm._v(" "),(_vm.promoCodeStatus.accepted)?_c('v-flex',{attrs:{"xs4":"","sm4":"","md4":""}},[_c('div',{staticClass:"ml-2 red--text"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.checkoutPayload.amount.grandtotal - _vm.promoCodeStatus.status.computed)))])])]):_vm._e(),_vm._v(" "),_c('v-list',{attrs:{"nav":"","outlined":"","tile":"","width":"100%","dense":""}},[_c('v-divider'),_vm._v(" "),_c('v-list-item',{attrs:{"id":"needAuth","dense":""}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-cellphone ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.checkoutPayload.order.by.name)+" "+_vm._s(_vm.checkoutPayload.order.by.contact)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Contact Information ")])],1),_vm._v(" "),_c('v-list-item-action',{on:{"click":function($event){$event.stopPropagation();_vm.authDiag = true}}},[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-chevron-right ")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-item',{attrs:{"id":"needAddr"}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-map ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.checkoutPayload.delivery.to.address)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Delivery Address ")])],1),_vm._v(" "),_c('v-list-item-action',{on:{"click":function($event){$event.stopPropagation();_vm.addressDiag = true}}},[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-chevron-right ")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-item',{attrs:{"id":"needDeli"}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-clock ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.delivery_date.label)+", "+_vm._s(_vm.delivery_date.day_name.substring(0, 3))+" "+_vm._s(_vm.delivery_date.name)+" "+_vm._s(_vm.delivery_date.day)+" "+_vm._s(_vm.checkoutPayload.delivery.time)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Delivery Time ")])],1),_vm._v(" "),_c('v-list-item-action',{on:{"click":function($event){$event.stopPropagation();_vm.generateDates(), (_vm.timediag = true)}}},[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-chevron-right ")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-item',{attrs:{"id":"needMoney"}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-cash-multiple ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.checkoutPayload.amount.money))+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Your money\n                                                        "),_c('v-tooltip',{attrs:{"bottom":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
                          var on = ref.on;
                          var attrs = ref.attrs;
return [_c('v-icon',_vm._g(_vm._b({attrs:{"color":"blue","small":""},on:{"click":function($event){_vm.moneytooltip = !_vm.moneytooltip}}},'v-icon',attrs,false),on),[_vm._v(" mdi-alert-circle-outline ")])]}}],null,false,491466262),model:{value:(_vm.moneytooltip),callback:function ($$v) {_vm.moneytooltip=$$v},expression:"moneytooltip"}},[_vm._v(" "),_c('span',[_vm._v(" So our rider can prepare exact change for you. ")])])],1)],1),_vm._v(" "),_c('v-list-item-action',{on:{"click":function($event){$event.stopPropagation();_vm.moneydiag = true}}},[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-chevron-right ")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-cash-100 ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm._f("toPHP")(_vm.checkoutPayload.amount.tip))+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Rider tip(Optional)\n                                                        "),_c('v-tooltip',{attrs:{"bottom":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
                          var on = ref.on;
                          var attrs = ref.attrs;
return [_c('v-icon',_vm._g(_vm._b({attrs:{"color":"blue","small":""},on:{"click":function($event){_vm.ridertooltip = !_vm.ridertooltip}}},'v-icon',attrs,false),on),[_vm._v(" mdi-alert-circle-outline ")])]}}],null,false,516359574),model:{value:(_vm.ridertooltip),callback:function ($$v) {_vm.ridertooltip=$$v},expression:"ridertooltip"}},[_vm._v(" "),_c('span',[_vm._v(" Appreciate your rider effort. Give him tip. ")])])],1)],1),_vm._v(" "),_c('v-list-item-action',{on:{"click":function($event){$event.stopPropagation();_vm.tipdiag = true}}},[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-chevron-right ")])],1)],1),_vm._v(" "),_c('v-divider')],1),_vm._v(" "),_c('v-alert',{attrs:{"type":"info"}},[_vm._v("We accept CASH on Delivery, GCASH, Paymaya, Coins.ph. Your rider will instruct you how to Pay on non COD payment.")])],1),_vm._v(" "),_c('v-btn',{staticClass:"shopresponsive",attrs:{"block":"","color":"red","outlined":""},on:{"click":function($event){return _vm.confirmOrder()}}},[_vm._v(" Confirm Order ")])],1)],1)],1):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-bottom-sheet',{attrs:{"scrollable":""},model:{value:(_vm.addressDiag),callback:function ($$v) {_vm.addressDiag=$$v},expression:"addressDiag"}},[_c('v-card',{attrs:{"tile":"","height":"600px"}},[_c('v-card-title',{attrs:{"primary-title":""}},[_vm._v(" Delivery Address ")]),_vm._v(" "),_c('v-card-text',[_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-textarea',{attrs:{"a":"","hint":"Pls type 'NA' if not applicable","label":"Address","outlined":"","placeholder":"Address"},model:{value:(_vm.checkoutPayload.delivery.to.address),callback:function ($$v) {_vm.$set(_vm.checkoutPayload.delivery.to, "address", $$v)},expression:"checkoutPayload.delivery.to.address"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-text-field',{attrs:{"a":"","hint":"Pls type 'NA' if not applicable","label":"Floor/Unit/Room No.","persistent-hint":"","outlined":""},model:{value:(_vm.checkoutPayload.delivery.to.unit),callback:function ($$v) {_vm.$set(_vm.checkoutPayload.delivery.to, "unit", $$v)},expression:"checkoutPayload.delivery.to.unit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-textarea',{attrs:{"hint":"Pls type 'NA' if not applicable","label":"Note to rider","outlined":"","placeholder":"eg. Landmark/ Building"},model:{value:(_vm.checkoutPayload.delivery.to.rider_note),callback:function ($$v) {_vm.$set(_vm.checkoutPayload.delivery.to, "rider_note", $$v)},expression:"checkoutPayload.delivery.to.rider_note"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","color":"red"},on:{"click":function($event){_vm.addressDiag = false}}},[_vm._v(" Apply Changes ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"width":"500px","persistent":""},model:{value:(_vm.timediag),callback:function ($$v) {_vm.timediag=$$v},expression:"timediag"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Delivery Date & Time")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md6":"","lg6":"","sm6":""}},[_c('v-select',{attrs:{"flat":"","items":_vm.dates,"return-object":"","label":"Delivery Date"},scopedSlots:_vm._u([{key:"selection",fn:function(data){return [_vm._v(" "+_vm._s(data.item.label)+", "+_vm._s(data.item.day_name)+" "+_vm._s(data.item.name)+" "+_vm._s(data.item.day)+" ")]}},{key:"item",fn:function(data){return [_vm._v(" "+_vm._s(data.item.label)+", "+_vm._s(data.item.day_name)+" "+_vm._s(data.item.name)+" "+_vm._s(data.item.day)+" ")]}}]),model:{value:(_vm.delivery_date),callback:function ($$v) {_vm.delivery_date=$$v},expression:"delivery_date"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md6":"","lg6":"","sm6":""}},[_c('v-select',{attrs:{"flat":"","items":_vm.delivery_date.delivery_time,"label":"Delivery Time"},model:{value:(_vm.checkoutPayload.delivery.time),callback:function ($$v) {_vm.$set(_vm.checkoutPayload.delivery, "time", $$v)},expression:"checkoutPayload.delivery.time"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"blue darken-1","text":""},on:{"click":function($event){_vm.timediag = false}}},[_vm._v(" Save ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"inset":""},model:{value:(_vm.mapSheet),callback:function ($$v) {_vm.mapSheet=$$v},expression:"mapSheet"}},[_c('v-card',{attrs:{"flat":""}},[_c('v-card-title',[_vm._v("Select Delivery Location")]),_vm._v(" "),_c('v-card-text',[_c('div',{staticClass:"mapcontainer"},[_c('GMap',{ref:"gMap",attrs:{"id":"gmap","center":_vm.location,"options":{
              fullscreenControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              zoomControl: true,
              gestureHandling: 'greedy'
            },"zoom":15},on:{"center_changed":_vm.centerChange}},[_c('GMapMarker',{ref:"gmapmarker",attrs:{"position":_vm.location,"options":{ icon: _vm.selectedmarker }}})],1)],1)]),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"color":"red","block":"","outlined":""},on:{"click":function($event){$event.stopPropagation();return _vm.preCheckout($event)}}},[_vm._v(" Set Delivery Location ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"width":"500px","persistent":""},model:{value:(_vm.moneydiag),callback:function ($$v) {_vm.moneydiag=$$v},expression:"moneydiag"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Your money")])]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-text-field',{attrs:{"right":"","type":"number","dense":"","solo":"","label":"Your Money","outlined":"","placeholder":"Your Money"},model:{value:(_vm.checkoutPayload.amount.money),callback:function ($$v) {_vm.$set(_vm.checkoutPayload.amount, "money", $$v)},expression:"checkoutPayload.amount.money"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","disabled":_vm.checkoutPayload.amount.money < _vm.checkoutPayload.amount.grandtotal - _vm.promoCodeStatus.value,"color":"red"},on:{"click":function($event){_vm.moneydiag = false}}},[_vm._v(" Apply Changes ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{model:{value:(_vm.authDiag),callback:function ($$v) {_vm.authDiag=$$v},expression:"authDiag"}},[_c('v-card',{attrs:{"flat":""}},[_c('v-card-title',[_vm._v("Contact Info")]),_vm._v(" "),_c('v-card-text',[_c('fire-ui')],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"width":"500px","persistent":""},model:{value:(_vm.tipdiag),callback:function ($$v) {_vm.tipdiag=$$v},expression:"tipdiag"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Rider Tip")])]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md12":"","sm12":""}},[_c('v-text-field',{attrs:{"right":"","type":"number","dense":"","solo":"","label":"Rider Tip","outlined":"","placeholder":"Amount of tip"},model:{value:(_vm.checkoutPayload.amount.tip),callback:function ($$v) {_vm.$set(_vm.checkoutPayload.amount, "tip", $$v)},expression:"checkoutPayload.amount.tip"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","disabled":_vm.checkoutPayload.amount.tip < 0,"color":"red"},on:{"click":function($event){_vm.tipdiag = false}}},[_vm._v(" Apply Changes ")])],1)],1)],1)],1),_vm._v(" "),_c('v-snackbar',{attrs:{"color":"blue","timeout":3000},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_vm._v(" Item removed from cart ")]),_vm._v(" "),(!_vm.isHide && _vm.cartSize > 0)?_c('v-card',{staticClass:"shopresponsive",attrs:{"width":"100%"}},[_c('permission'),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-item',{attrs:{"dense":""}},[_c('v-list-item-avatar',{attrs:{"color":"grey darken-3"}},[(_vm.merchant.logo != '')?_c('v-img',{staticClass:"elevation-6",attrs:{"contain":"","src":_vm.merchant.logo}}):_c('v-avatar',{staticClass:"white--text",attrs:{"color":"blue"}},[_vm._v(" "+_vm._s(_vm.merchant.business_name .match(/\b(\w)/g) .join('') .substr(0, 2))+" ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-subtitle',[_c('small',[_vm._v("Sold by")])]),_vm._v(" "),_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.merchant.business_name)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" "+_vm._s(_vm.merchant.branch)+" ")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-list-item-action-text',[_c('span',{staticClass:"caption grey--text"},[_vm._v("Total")]),_vm._v(" "),_c('span',{staticClass:"red--text subtitle-2"},[_vm._v(_vm._s(_vm._f("toPHP")(_vm.grandtotal)))])]),_vm._v(" "),_c('v-btn',{attrs:{"color":"red","small":"","outlined":""},on:{"click":function($event){$event.stopPropagation();return _vm.initCheckout()}}},[_vm._v(" Checkout ")])],1)],1)],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/cart.vue?vue&type=template&id=20a5b1b9&scoped=true&

// EXTERNAL MODULE: external "google-maps-api-loader"
var external_google_maps_api_loader_ = __webpack_require__(70);
var external_google_maps_api_loader_default = /*#__PURE__*/__webpack_require__.n(external_google_maps_api_loader_);

// EXTERNAL MODULE: external "vue-loading-overlay"
var external_vue_loading_overlay_ = __webpack_require__(63);
var external_vue_loading_overlay_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_overlay_);

// EXTERNAL MODULE: ./node_modules/vue-loading-overlay/dist/vue-loading.css
var vue_loading = __webpack_require__(81);

// EXTERNAL MODULE: external "geofirestore"
var external_geofirestore_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/FireUi.vue + 8 modules
var FireUi = __webpack_require__(209);

// EXTERNAL MODULE: ./components/Permission.vue + 4 modules
var Permission = __webpack_require__(230);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  components: {
    FireUi: FireUi["a" /* default */],
    Loading: external_vue_loading_overlay_default.a,
    Permission: Permission["a" /* default */]
  },
  layout: 'area',

  data() {
    return {
      userProfile: {},
      isLoading: false,
      moneytooltip: false,
      ridertooltip: false,
      promoCode: '',
      delivery_date: {
        delivery_time: [],
        label: 'Today',
        day_name: ''
      },
      promoCodeStatus: {
        accepted: null,
        status: '',
        value: 0
      },
      isValid: false,
      dates: [],
      showtooltip: false,
      authDiag: false,
      timediag: false,
      moneydiag: false,
      tipdiag: false,
      isHide: false,
      addressDiag: false,
      qty: 1,
      selectedmarker: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
      snackbar: false,
      mapSheet: false,
      checkoutPayload: {
        amount: {
          delivery: {
            platform: 0,
            rider: 0
          },
          grandtotal: 0,
          money: 0,
          order_value: 0,
          sc: {
            markup: 0,
            store: 0
          },
          tip: 0
        },
        rider: 'unassigned',
        coordinates: null,
        status: 'placed',
        delivery: {
          date: '',
          distance: {
            actual: 0,
            computed: 0
          },
          from: {
            address: '',
            coord: {
              lat: 0,
              lng: 0
            }
          },
          rider_note: '',
          time: '',
          to: {
            address: '',
            coord: {
              lat: 0,
              lng: 0
            },
            unit: ''
          }
        },
        order: {
          by: {
            contact: null,
            id: null,
            name: ''
          },
          items: [],
          merchant: {
            branch: '',
            id: '',
            logo: '',
            name: ''
          },
          text: '',
          time: null
        }
      }
    };
  },

  computed: {
    cartSize() {
      return this.$store.getters['cart/getCartItemCount'];
    },

    user() {
      return this.$store.getters['auth/getUser'];
    },

    isAuth() {
      return this.$store.getters['auth/isAuth'];
    },

    df() {
      return this.$store.getters['admin/getFare'];
    },

    location() {
      return this.$store.getters['map/getLocation'];
    },

    grandtotal() {
      return this.$store.getters['cart/getTotal'];
    },

    merchant() {
      return this.$store.getters['cart/getStoreID'];
    },

    cartItem() {
      return this.$store.getters['cart/getCart'];
    },

    storeLocation() {
      return this.$store.getters['cart/getStoreLocation'];
    }

  },
  watch: {
    isAuth() {
      if (this.isAuth) {
        this.checkoutPayload.order.by = {
          contact: this.user.phoneNumber,
          id: this.user.id,
          name: this.user.displayName
        };
        this.$bind('userProfile', this.$fireStoreObj().collection('users').doc(this.user.id));
        this.authDiag = false;
      }
    },

    user() {
      if (this.isAuth) {
        this.checkoutPayload.order.by = {
          contact: this.user.phoneNumber,
          id: this.user.id,
          name: this.user.displayName
        };
        this.authDiag = false;
      }
    },

    authDiag() {
      if (this.isAuth) {
        this.checkoutPayload.order.by = {
          contact: this.user.phoneNumber,
          id: this.user.id,
          name: this.user.displayName
        };
      }
    },

    delivery_date(val) {
      this.checkoutPayload.delivery.date = val.date;
    }

  },

  mounted() {
    // this.$fireAnalytics.logEvent('page_view')
    if (this.isAuth) {
      this.checkoutPayload.order.by = {
        contact: this.user.phoneNumber,
        id: this.user.id,
        name: this.user.displayName
      };
      this.authDiag = false;
    }

    const GMapSettings = {
      apiKey: this.$GMaps.apiKey,
      language: this.language
    };
    const google = external_google_maps_api_loader_default()(GMapSettings);
    this.$GMaps.google = google;

    if ("Notification" in window && Notification.permission === "granted") {
      this.$getLocation({
        enableHighAccuracy: true,
        timeout: 10000
      }).then(coordinates => {
        this.$store.commit('map/setLocation', {
          lat: coordinates.lat,
          lng: coordinates.lng
        });
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
    } else {
      this.isLoading = false;
    }
  },

  methods: {
    findVoucher() {
      this.promoCode = this.promoCode.toUpperCase().replace(/ /g, '');
      this.$fireStoreObj().collection('voucher_codes').where('promoCode', '==', this.promoCode).get().then(snap => {
        if (snap.empty) {
          delete this.checkoutPayload.amount.deduction;
          this.promoCodeStatus = {
            accepted: false,
            status: 'Promo Code is invalid',
            value: 0
          };
        } else {
          snap.docs.forEach(codes => {
            if (codes.data().merchantCode && codes.data().stores.indexOf(this.merchant.id) > -1) {
              if (this.checkoutPayload.amount.order_value >= codes.data().MOV) {
                this.checkoutPayload.amount.deduction = {
                  type: 'Promo Code',
                  charged_to: 'merchant',
                  value: codes.data().type == 'Percent' ? codes.data().value + '%' : 'Less P ' + codes.data().value,
                  code: codes.data().promoCode,
                  computed: codes.data().type == 'Percent' ? this.checkoutPayload.amount.order_value * (codes.data().value / 100) : codes.data().value
                };
                this.promoCodeStatus = {
                  accepted: true,
                  status: this.checkoutPayload.amount.deduction,
                  value: codes.data().type == 'Percent' ? this.checkoutPayload.amount.order_value * (codes.data().value / 100) : codes.data().value
                };
              } else {
                this.promoCodeStatus = {
                  accepted: false,
                  status: 'Below Minimum Order Value. Order atleast P' + codes.data().MOV,
                  value: 0
                };
              }
            } else if (codes.data().platformCode) {
              if (this.checkoutPayload.amount.order_value >= codes.data().MOV) {
                this.checkoutPayload.amount.deduction = {
                  type: 'Promo Code',
                  charged_to: 'platform',
                  value: codes.data().type == 'Percent' ? codes.data().value + '%' : 'Less P ' + codes.data().value,
                  code: codes.data().promoCode,
                  computed: codes.data().type == 'Percent' ? this.checkoutPayload.amount.order_value * (codes.data().value / 100) : codes.data().value
                };
                this.promoCodeStatus = {
                  accepted: true,
                  status: this.checkoutPayload.amount.deduction,
                  value: codes.data().type == 'Percent' ? this.checkoutPayload.amount.order_value * (codes.data().value / 100) : codes.data().value
                };
              } else {
                this.promoCodeStatus = {
                  accepted: false,
                  status: 'Below Minimum Order Value. Order atleast P' + codes.data().MOV,
                  value: 0
                };
              }
            } else {
              this.promoCodeStatus = {
                accepted: false,
                status: 'Promo Code is invalid',
                value: 0
              };
            }
          });
        }
      });
    },

    initCheckout() {
      if (!this.isAuth) this.authDiag = true;else this.mapSheet = true;
    },

    attemptLogin() {
      if (!this.isAuth) {
        this.authDiag = true;
      }
    },

    confirmOrder() {
      this.isValid = true;
      if (!this.isAuth) this.shaker('needAuth');
      if (this.checkoutPayload.delivery.to.address === '' || this.checkoutPayload.delivery.to.unit === '') this.shaker('needAddr');
      if (this.checkoutPayload.delivery.date === '' || this.checkoutPayload.delivery.time === '') this.shaker('needDeli');
      if (this.checkoutPayload.amount.money < this.grandtotal - this.promoCodeStatus.value) this.shaker('needMoney');

      if (this.isValid) {
        this.isLoading = true;
        const firestore = this.$fireStoreObj();
        const geofirestore = new external_geofirestore_["GeoFirestore"](firestore);
        const geocollection = geofirestore.collection('orders');
        this.checkoutPayload.area = this.df.id;
        this.checkoutPayload.timestamp = this.$generateTimestamp(this.checkoutPayload.delivery.date, this.checkoutPayload.delivery.time);
        this.checkoutPayload.token = this.$store.getters['auth/getFCMToken'];
        this.checkoutPayload.order.by = {
          contact: this.user.phoneNumber,
          id: this.user.id,
          name: this.user.displayName
        };
        let tid = this.generateBookingId();
        geocollection.doc(tid).set(this.checkoutPayload).then(d => {
          this.$fireAnalytics.logEvent('purchase', {
            transaction_id: tid,
            value: this.grandtotal,
            currency: 'PHP',
            items: this.cartItem
          });
          this.$store.commit('cart/clearCart');
          this.isLoading = false;
        }).catch(e => {
          this.isLoading = false;
        });
      }
    },

    shaker(id) {
      this.isValid = false;
      document.getElementById(id).classList.add('shake');
      setTimeout(() => {
        document.getElementById(id).classList.remove('shake');
      }, 1500);
    },

    generateDates() {
      const today = this.addDays(new Date(), 0);
      const tomorrow = this.addDays(new Date(), 1);
      const nextday = this.addDays(new Date(), 2);
      let now = new Date(this.$getNow()).getTime();
      let close = new Date(this.$getNow().substring(0, 10) + ' ' + this.merchant.delivery.close);

      if (now < close) {
        this.dates = [today, tomorrow, nextday];
      } else {
        this.dates = [tomorrow, nextday];
      }

      for (let i = 3; i <= 6; i++) this.dates.push(this.addDays(new Date(), i));
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
      let close = new Date(this.$getNow().substring(0, 10) + ' ' + this.merchant.delivery.close);
      let open = new Date(this.$getNow().substring(0, 10) + ' ' + this.merchant.delivery.open);

      if (days === 0) {
        if (now < close && now > open) delivery_time = this.$timeRange(this.$formatAMPM(new Date()), this.merchant.delivery.close, 45);else delivery_time = this.$timeRange(this.merchant.delivery.open, this.merchant.delivery.close, 45);
        delivery_time.unshift('ASAP');
      } else {
        delivery_time = this.$timeRange(this.merchant.delivery.open, this.merchant.delivery.close, 45);
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

    preCheckout() {
      this.isLoading = true;
      const coordinates = this.$refs.gMap.map.getCenter();
      this.$store.commit('map/setLocation', {
        lat: coordinates.lat(),
        lng: coordinates.lng()
      });
      this.$store.dispatch('admin/getArea', {
        lat: coordinates.lat(),
        lng: coordinates.lng()
      }).then(() => {
        let sl = {
          lat: 0,
          lng: 0
        };

        if (this.merchant.location.hasOwnProperty('Ac')) {
          sl = {
            lat: this.merchant.location.Rc,
            lng: this.merchant.location.Ac
          };
        }

        if (this.merchant.location.hasOwnProperty('_lat')) {
          sl = {
            lat: this.merchant.location._lat,
            lng: this.merchant.location._long
          };
        }

        if (this.merchant.location.hasOwnProperty('latitude')) {
          sl = {
            lat: this.merchant.location.latitude,
            lng: this.merchant.location.longitude
          };
        }

        const dl = {
          lat: coordinates.lat(),
          lng: coordinates.lng()
        };
        this.calculateFees(dl, sl);
      });
    },

    generateBookingId() {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = 'OR-';

      for (let i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

      return result;
    },

    calculateFees(dl, sl) {
      console.log(dl, sl);
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
        this.isLoading = false;
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
        let sc = Math.floor(parseFloat(this.merchant.rates.sc * this.grandtotal / 100).toFixed(2));
        if (sc < scv) sc = scv;
        const total = parseFloat(this.grandtotal) + rider_df + platform_df + sc;
        this.checkoutPayload = {
          amount: {
            delivery: {
              platform: platform_df,
              rider: rider_df
            },
            grandtotal: total,
            money: 0,
            order_value: this.grandtotal,
            sc: {
              markup: sc,
              store: Math.floor(parseFloat(this.merchant.rates.cr * this.grandtotal / 100).toFixed(2))
            },
            tip: 0
          },
          rider: 'unassigned',
          coordinates: new this.$fireStoreObj.GeoPoint(dl.lat, dl.lng),
          status: 'placed',
          delivery: {
            date: '',
            distance: {
              actual: distance_actual,
              computed: ds
            },
            from: {
              address: d.origin_addresses[0],
              coord: {
                lat: sl.lat,
                lng: sl.lng
              }
            },
            rider_note: '',
            time: '',
            to: {
              address: d.destination_addresses[0],
              coord: {
                lat: dl.lat,
                lng: dl.lng
              },
              unit: ''
            }
          },
          order: {
            by: {
              contact: null,
              id: null,
              name: ''
            },
            items: this.cartItem,
            merchant: {
              branch: this.merchant.branch,
              id: this.merchant.id,
              logo: this.merchant.logo,
              name: this.merchant.business_name
            },
            text: '',
            time: new Date()
          }
        };
        console.log(this.checkoutPayload);

        if (this.isAuth) {
          this.checkoutPayload.order.by = {
            contact: this.user.phoneNumber,
            id: this.user.id,
            name: this.user.displayName
          };
        }

        this.$fireAnalytics.logEvent('begin_checkout', {
          value: this.grandtotal,
          currency: 'PHP',
          items: this.cartItem
        });
        this.mapSheet = false;
        this.isHide = true;
      }).catch(e => {
        console.log(e);
        this.mapSheet = false;
        this.isHide = true;
      });
    },

    computeAddOns(item, price) {
      const ads = [];

      const capitalize = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

      ads.push({
        name: 'Base Price',
        values: '',
        price
      });
      let total = parseFloat(price);
      Object.entries(item).map(([key, val]) => {
        if (Array.isArray(val)) {
          ads.push({
            name: capitalize(key),
            values: '',
            price: 0
          });
          val.forEach(i => {
            total = total + parseFloat(i.price);
            ads.push({
              name: '',
              values: i.name,
              price: i.price
            });
          });
        } else {
          total = total + parseFloat(val.price);
          ads.push({
            name: capitalize(key),
            values: val.name,
            price: val.price
          });
        }
      });
      ads.push({
        name: '',
        values: 'Total',
        price: parseFloat(total)
      });
      return ads;
    },

    removeCart(item) {
      this.$store.commit('cart/remove', item);
      this.snackbar = true;
    },

    centerChange() {
      const coordinates = this.$refs.gMap.map.getCenter();
      this.$refs.gmapmarker.marker.setPosition({
        lat: coordinates.lat(),
        lng: coordinates.lng()
      });
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
// CONCATENATED MODULE: ./pages/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VAlert/VAlert.sass
var VAlert = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/index.js
var VSheet = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/transitionable/index.js
var transitionable = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var util_console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
// Styles
 // Extensions

 // Components


 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ var VAlert_VAlert = (Object(mixins["a" /* default */])(VSheet["a" /* default */], toggleable["a" /* default */], transitionable["a" /* default */]).extend({
  name: 'v-alert',
  props: {
    border: {
      type: String,

      validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }

    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    coloredBorder: Boolean,
    dense: Boolean,
    dismissible: Boolean,
    closeIcon: {
      type: String,
      default: '$cancel'
    },
    icon: {
      default: '',
      type: [Boolean, String],

      validator(val) {
        return typeof val === 'string' || val === false;
      }

    },
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,
    type: {
      type: String,

      validator(val) {
        return ['info', 'error', 'success', 'warning'].includes(val);
      }

    },
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    __cachedBorder() {
      if (!this.border) return null;
      let data = {
        staticClass: 'v-alert__border',
        class: {
          [`v-alert__border--${this.border}`]: true
        }
      };

      if (this.coloredBorder) {
        data = this.setBackgroundColor(this.computedColor, data);
        data.class['v-alert__border--has-color'] = true;
      }

      return this.$createElement('div', data);
    },

    __cachedDismissible() {
      if (!this.dismissible) return null;
      const color = this.iconColor;
      return this.$createElement(VBtn["a" /* default */], {
        staticClass: 'v-alert__dismissible',
        props: {
          color,
          icon: true,
          small: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: () => this.isActive = false
        }
      }, [this.$createElement(VIcon["a" /* default */], {
        props: {
          color
        }
      }, this.closeIcon)]);
    },

    __cachedIcon() {
      if (!this.computedIcon) return null;
      return this.$createElement(VIcon["a" /* default */], {
        staticClass: 'v-alert__icon',
        props: {
          color: this.iconColor
        }
      }, this.computedIcon);
    },

    classes() {
      const classes = { ...VSheet["a" /* default */].options.computed.classes.call(this),
        'v-alert--border': Boolean(this.border),
        'v-alert--dense': this.dense,
        'v-alert--outlined': this.outlined,
        'v-alert--prominent': this.prominent,
        'v-alert--text': this.text
      };

      if (this.border) {
        classes[`v-alert--border-${this.border}`] = true;
      }

      return classes;
    },

    computedColor() {
      return this.color || this.type;
    },

    computedIcon() {
      if (this.icon === false) return false;
      if (typeof this.icon === 'string' && this.icon) return this.icon;
      if (!['error', 'info', 'success', 'warning'].includes(this.type)) return false;
      return `$${this.type}`;
    },

    hasColoredIcon() {
      return this.hasText || Boolean(this.border) && this.coloredBorder;
    },

    hasText() {
      return this.text || this.outlined;
    },

    iconColor() {
      return this.hasColoredIcon ? this.computedColor : undefined;
    },

    isDark() {
      if (this.type && !this.coloredBorder && !this.outlined) return true;
      return themeable["a" /* default */].options.computed.isDark.call(this);
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('outline')) {
      Object(util_console["a" /* breaking */])('outline', 'outlined', this);
    }
  },

  methods: {
    genWrapper() {
      const children = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
        toggle: this.toggle
      }) : this.__cachedDismissible];
      const data = {
        staticClass: 'v-alert__wrapper'
      };
      return this.$createElement('div', data, children);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-alert__content'
      }, this.$slots.default);
    },

    genAlert() {
      let data = {
        staticClass: 'v-alert',
        attrs: {
          role: 'alert'
        },
        on: this.listeners$,
        class: this.classes,
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      };

      if (!this.coloredBorder) {
        const setColor = this.hasText ? this.setTextColor : this.setBackgroundColor;
        data = setColor(this.computedColor, data);
      }

      return this.$createElement('div', data, [this.genWrapper()]);
    },

    /** @public */
    toggle() {
      this.isActive = !this.isActive;
    }

  },

  render(h) {
    const render = this.genAlert();
    if (!this.transition) return render;
    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [render]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
var VAppBar = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn_VBtn = __webpack_require__(121);

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
var VIcon_VIcon = __webpack_require__(45);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 5 modules
var VSelect = __webpack_require__(196);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet_VSheet = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js
var VSimpleTable = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTooltip/VTooltip.sass
var VTooltip = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/activatable/index.js
var activatable = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/detachable/index.js
var detachable = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/menuable/index.js
var menuable = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
 // Mixins







 // Helpers




/* @vue/component */

/* harmony default export */ var VTooltip_VTooltip = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], dependent["a" /* default */], detachable["a" /* default */], menuable["a" /* default */], toggleable["a" /* default */]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    fixed: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;

      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },

    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;

      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }

      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return `${this.calcYOverflow(top + this.pageYOffset)}px`;
    },

    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },

    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },

    offsetY() {
      return this.top || this.bottom;
    },

    offsetX() {
      return this.left || this.right;
    },

    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(helpers["f" /* convertToUnit */])(this.maxWidth),
        minWidth: Object(helpers["f" /* convertToUnit */])(this.minWidth),
        opacity: this.isActive ? 0.9 : 0,
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },

  mounted() {
    if (Object(helpers["p" /* getSlotType */])(this, 'activator', true) === 'v-slot') {
      Object(util_console["b" /* consoleError */])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },

    deactivate() {
      this.runDelay('close');
    },

    genActivatorListeners() {
      const listeners = activatable["a" /* default */].options.methods.genActivatorListeners.call(this);

      listeners.focus = e => {
        this.getActivator(e);
        this.runDelay('open');
      };

      listeners.blur = e => {
        this.getActivator(e);
        this.runDelay('close');
      };

      listeners.keydown = e => {
        if (e.keyCode === helpers["s" /* keyCodes */].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };

      return listeners;
    },

    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },

    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }

}));
// CONCATENATED MODULE: ./pages/cart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(249)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "20a5b1b9",
  "3e2c0fa8"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





































installComponents_default()(component, {VAlert: VAlert_VAlert,VAppBar: VAppBar["a" /* default */],VAvatar: VAvatar["a" /* default */],VBottomSheet: VBottomSheet["a" /* default */],VBtn: VBtn_VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VContainer: VContainer["a" /* default */],VContent: VContent["a" /* default */],VDivider: VDivider["a" /* default */],VFlex: VFlex["a" /* default */],VIcon: VIcon_VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemActionText: components_VList["a" /* VListItemActionText */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemIcon: VListItemIcon["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSheet: VSheet_VSheet["a" /* default */],VSimpleTable: VSimpleTable["a" /* default */],VSnackbar: VSnackbar["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */],VTooltip: VTooltip_VTooltip})


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkRpdmlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdWJoZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WUHJvZ3Jlc3NMaW5lYXIvVlByb2dyZXNzTGluZWFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbG9hZGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdmFsaWRhdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkdyaWQvVkdyaWQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRvb2xiYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL1ZDb3VudGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ291bnRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9pbnRlcnNlY3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2FyZC9WQ2FyZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkxhYmVsL1ZMYWJlbC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNZXNzYWdlcy9WTWVzc2FnZXMuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQXBwQmFyL1ZBcHBCYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNYWluL1ZNYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvY29tcGFyYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbWVudWFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdHJhbnNpdGlvbmFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WU2VsZWN0L1ZTZWxlY3Quc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2hlY2tib3gvVlNpbXBsZUNoZWNrYm94LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNoaXAvVkNoaXAuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGV4dGFyZWEvVlRleHRhcmVhLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9yaXBwbGVhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWFpbi9WTWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvbnRlbnQvVkNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZTcGFjZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL3N0eWxlcy9jb21wb25lbnRzL19zZWxlY3Rpb24tY29udHJvbHMuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9zZWxlY3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2hpcC9WQ2hpcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNoaXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDaGVja2JveC9WU2ltcGxlQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTZWxlY3QvVlNlbGVjdExpc3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvZmlsdGVyYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maXJlYmFzZXVpL2Rpc3QvZmlyZWJhc2V1aS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNoZWNrYm94L1ZDaGVja2JveC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZTbmFja2Jhci9WU25hY2tiYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkdyaWQvVlJvdy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WU3RlcHBlci9WU3RlcHBlci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZEYXRhVGFibGUvVlNpbXBsZVRhYmxlLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUZXh0YXJlYS9WVGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaXJlVWkudnVlPzU3NjgiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRmlyZVVpLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmVVaS52dWU/Y2MzNSIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlN0ZXBwZXIvVlN0ZXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdGVwcGVyL1ZTdGVwcGVyQ29udGVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlN0ZXBwZXIvVlN0ZXBwZXJTdGVwLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU3RlcHBlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmVVaS52dWUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDaGVja2JveC9WQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTbmFja2Jhci9WU25hY2tiYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZEYXRhVGFibGUvVlNpbXBsZVRhYmxlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGVybWlzc2lvbi52dWU/YjQ2YyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9QZXJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Blcm1pc3Npb24udnVlPzBiZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZXJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJ0LnZ1ZT80Zjk3Iiwid2VicGFjazovLy8uL3BhZ2VzL2NhcnQudnVlP2EwZTMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkFsZXJ0L1ZBbGVydC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUb29sdGlwL1ZUb29sdGlwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FydC52dWU/MTQxNCIsIndlYnBhY2s6Ly8vcGFnZXMvY2FydC52dWUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FydC52dWU/YjhhNiIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkFsZXJ0L1ZBbGVydC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRvb2x0aXAvVlRvb2x0aXAudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FydC52dWUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZCdG4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFFQTtBQUNBLG9IOzs7Ozs7OztBQ0hBO0FBQUE7QUFFQTtBQUNBLHNIOzs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNLFlBQVksR0FBRyxvRkFBc0IsQ0FBM0MsaUJBQTJDLENBQTNDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsb0ZBQXNCLENBQTVDLGtCQUE0QyxDQUE1QztBQUNBLE1BQU0sU0FBUyxHQUFHLG9GQUFzQixDQUF4QyxjQUF3QyxDQUF4QztBQUNB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O0FBRUE7QUFDdUY7QUFDdkYsZ0JBQWdCLDhDQUFVO0FBQzFCLEVBQUUsa0NBQU07QUFDUixFQUFFLE1BQU07QUFDUixFQUFFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsMkZBQWlCOztBQUVoQztBQUNnRztBQUN6QztBQUNFO0FBQ0E7QUFDVTtBQUNoQjtBQUNFO0FBQ087QUFDSDtBQUNDO0FBQ0E7QUFDQztBQUNBO0FBQ047QUFDQTtBQUNGO0FBQ0k7QUFDRjtBQUNJO0FBQ007QUFDSTtBQUNKO0FBQ0M7QUFDRjtBQUNEO0FBQ0k7QUFDSDtBQUNWO0FBQ0s7QUFDRjtBQUNVO0FBQ0o7QUFDTjtBQUNRO0FBQ0Y7QUFDRztBQUNMO0FBQzNELDJCQUFpQixhQUFhLHFCQUFNLENBQUMsbUNBQU8sQ0FBQyxtQ0FBTyxDQUFDLDZDQUFZLENBQUMsa0NBQUksQ0FBQywrQkFBSyxDQUFDLHNEQUFZLENBQUMsZ0RBQVMsQ0FBQyxrREFBVSxDQUFDLHlDQUFVLENBQUMscUNBQVEsQ0FBQyxxQ0FBUSxDQUFDLCtCQUFLLENBQUMscUNBQUssQ0FBQyw2QkFBSSxDQUFDLG1DQUFPLENBQUMsK0JBQUssQ0FBQyx1Q0FBUyxDQUFDLG1EQUFlLENBQUMsb0VBQW1CLENBQUMsbURBQWUsQ0FBQyw4REFBZ0IsQ0FBQyxpREFBYyxDQUFDLCtDQUFhLENBQUMsZ0VBQWlCLENBQUMsMERBQWMsQ0FBQyw2QkFBSSxDQUFDLG1DQUFPLENBQUMsd0NBQU0sQ0FBQyw2Q0FBWSxDQUFDLHVDQUFTLENBQUMsbUNBQU8sQ0FBQyx5Q0FBVSxDQUFDLHVDQUFTLENBQUMsZ0RBQWEsQ0FBQywyQkFBUSxDQUFDOzs7Ozs7Ozs7QUMvRHZaO0FBQUE7QUFFQTtBQUNBLGdIIiwiZmlsZSI6InBhZ2VzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVkRpdmlkZXIgZnJvbSAnLi9WRGl2aWRlcidcblxuZXhwb3J0IHsgVkRpdmlkZXIgfVxuZXhwb3J0IGRlZmF1bHQgVkRpdmlkZXJcbiIsImltcG9ydCBWU3ViaGVhZGVyIGZyb20gJy4vVlN1YmhlYWRlcidcblxuZXhwb3J0IHsgVlN1YmhlYWRlciB9XG5leHBvcnQgZGVmYXVsdCBWU3ViaGVhZGVyXG4iLCJpbXBvcnQgVkNhcmQgZnJvbSAnLi9WQ2FyZCdcbmltcG9ydCB7IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmNvbnN0IFZDYXJkQWN0aW9ucyA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fYWN0aW9ucycpXG5jb25zdCBWQ2FyZFN1YnRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX19zdWJ0aXRsZScpXG5jb25zdCBWQ2FyZFRleHQgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3RleHQnKVxuY29uc3QgVkNhcmRUaXRsZSA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fdGl0bGUnKVxuXG5leHBvcnQge1xuICBWQ2FyZCxcbiAgVkNhcmRBY3Rpb25zLFxuICBWQ2FyZFN1YnRpdGxlLFxuICBWQ2FyZFRleHQsXG4gIFZDYXJkVGl0bGUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJF92dWV0aWZ5X3N1YmNvbXBvbmVudHM6IHtcbiAgICBWQ2FyZCxcbiAgICBWQ2FyZEFjdGlvbnMsXG4gICAgVkNhcmRTdWJ0aXRsZSxcbiAgICBWQ2FyZFRleHQsXG4gICAgVkNhcmRUaXRsZSxcbiAgfSxcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUb29sYmFyLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWU2hlZXQgZnJvbSAnLi4vVlNoZWV0L1ZTaGVldCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJbWcsIHsgc3JjT2JqZWN0IH0gZnJvbSAnLi4vVkltZy9WSW1nJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZTaGVldC5leHRlbmQoe1xuICBuYW1lOiAndi10b29sYmFyJyxcblxuICBwcm9wczoge1xuICAgIGFic29sdXRlOiBCb29sZWFuLFxuICAgIGJvdHRvbTogQm9vbGVhbixcbiAgICBjb2xsYXBzZTogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBleHRlbmRlZDogQm9vbGVhbixcbiAgICBleHRlbnNpb25IZWlnaHQ6IHtcbiAgICAgIGRlZmF1bHQ6IDQ4LFxuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICB9LFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgZmxvYXRpbmc6IEJvb2xlYW4sXG4gICAgcHJvbWluZW50OiBCb29sZWFuLFxuICAgIHNob3J0OiBCb29sZWFuLFxuICAgIHNyYzoge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSBhcyBQcm9wVHlwZTxzdHJpbmcgfCBzcmNPYmplY3Q+LFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdoZWFkZXInLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBpc0V4dGVuZGVkOiBmYWxzZSxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG5cbiAgICAgIGlmICghdGhpcy5pc0V4dGVuZGVkKSByZXR1cm4gaGVpZ2h0XG5cbiAgICAgIGNvbnN0IGV4dGVuc2lvbkhlaWdodCA9IHBhcnNlSW50KHRoaXMuZXh0ZW5zaW9uSGVpZ2h0KVxuXG4gICAgICByZXR1cm4gdGhpcy5pc0NvbGxhcHNlZFxuICAgICAgICA/IGhlaWdodFxuICAgICAgICA6IGhlaWdodCArICghaXNOYU4oZXh0ZW5zaW9uSGVpZ2h0KSA/IGV4dGVuc2lvbkhlaWdodCA6IDApXG4gICAgfSxcbiAgICBjb21wdXRlZENvbnRlbnRIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBpZiAodGhpcy5oZWlnaHQpIHJldHVybiBwYXJzZUludCh0aGlzLmhlaWdodClcbiAgICAgIGlmICh0aGlzLmlzUHJvbWluZW50ICYmIHRoaXMuZGVuc2UpIHJldHVybiA5NlxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQgJiYgdGhpcy5zaG9ydCkgcmV0dXJuIDExMlxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQpIHJldHVybiAxMjhcbiAgICAgIGlmICh0aGlzLmRlbnNlKSByZXR1cm4gNDhcbiAgICAgIGlmICh0aGlzLnNob3J0IHx8IHRoaXMuJHZ1ZXRpZnkuYnJlYWtwb2ludC5zbUFuZERvd24pIHJldHVybiA1NlxuICAgICAgcmV0dXJuIDY0XG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10b29sYmFyJzogdHJ1ZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tYWJzb2x1dGUnOiB0aGlzLmFic29sdXRlLFxuICAgICAgICAndi10b29sYmFyLS1ib3R0b20nOiB0aGlzLmJvdHRvbSxcbiAgICAgICAgJ3YtdG9vbGJhci0tY29sbGFwc2UnOiB0aGlzLmNvbGxhcHNlLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZWQnOiB0aGlzLmlzQ29sbGFwc2VkLFxuICAgICAgICAndi10b29sYmFyLS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgICd2LXRvb2xiYXItLWV4dGVuZGVkJzogdGhpcy5pc0V4dGVuZGVkLFxuICAgICAgICAndi10b29sYmFyLS1mbGF0JzogdGhpcy5mbGF0LFxuICAgICAgICAndi10b29sYmFyLS1mbG9hdGluZyc6IHRoaXMuZmxvYXRpbmcsXG4gICAgICAgICd2LXRvb2xiYXItLXByb21pbmVudCc6IHRoaXMuaXNQcm9taW5lbnQsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0NvbGxhcHNlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jb2xsYXBzZVxuICAgIH0sXG4gICAgaXNQcm9taW5lbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvbWluZW50XG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLm1lYXN1cmFibGVTdHlsZXMsXG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkSGVpZ2h0KSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGNvbnN0IGJyZWFraW5nUHJvcHMgPSBbXG4gICAgICBbJ2FwcCcsICc8di1hcHAtYmFyIGFwcD4nXSxcbiAgICAgIFsnbWFudWFsLXNjcm9sbCcsICc8di1hcHAtYmFyIDp2YWx1ZT1cImZhbHNlXCI+J10sXG4gICAgICBbJ2NsaXBwZWQtbGVmdCcsICc8di1hcHAtYmFyIGNsaXBwZWQtbGVmdD4nXSxcbiAgICAgIFsnY2xpcHBlZC1yaWdodCcsICc8di1hcHAtYmFyIGNsaXBwZWQtcmlnaHQ+J10sXG4gICAgICBbJ2ludmVydGVkLXNjcm9sbCcsICc8di1hcHAtYmFyIGludmVydGVkLXNjcm9sbD4nXSxcbiAgICAgIFsnc2Nyb2xsLW9mZi1zY3JlZW4nLCAnPHYtYXBwLWJhciBzY3JvbGwtb2ZmLXNjcmVlbj4nXSxcbiAgICAgIFsnc2Nyb2xsLXRhcmdldCcsICc8di1hcHAtYmFyIHNjcm9sbC10YXJnZXQ+J10sXG4gICAgICBbJ3Njcm9sbC10aHJlc2hvbGQnLCAnPHYtYXBwLWJhciBzY3JvbGwtdGhyZXNob2xkPiddLFxuICAgICAgWydjYXJkJywgJzx2LWFwcC1iYXIgZmxhdD4nXSxcbiAgICBdXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGJyZWFraW5nUHJvcHMuZm9yRWFjaCgoW29yaWdpbmFsLCByZXBsYWNlbWVudF0pID0+IHtcbiAgICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eShvcmlnaW5hbCkpIGJyZWFraW5nKG9yaWdpbmFsLCByZXBsYWNlbWVudCwgdGhpcylcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5CYWNrZ3JvdW5kICgpIHtcbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZEhlaWdodCksXG4gICAgICAgIHNyYzogdGhpcy5zcmMsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy4kc2NvcGVkU2xvdHMuaW1nXG4gICAgICAgID8gdGhpcy4kc2NvcGVkU2xvdHMuaW1nKHsgcHJvcHMgfSlcbiAgICAgICAgOiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJbWcsIHsgcHJvcHMgfSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2ltYWdlJyxcbiAgICAgIH0sIFtpbWFnZV0pXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19jb250ZW50JyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHQpLFxuICAgICAgICB9LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzKSlcbiAgICB9LFxuICAgIGdlbkV4dGVuc2lvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9fZXh0ZW5zaW9uJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5leHRlbnNpb25IZWlnaHQpLFxuICAgICAgICB9LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzLCAnZXh0ZW5zaW9uJykpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgdGhpcy5pc0V4dGVuZGVkID0gdGhpcy5leHRlbmRlZCB8fCAhIXRoaXMuJHNjb3BlZFNsb3RzLmV4dGVuc2lvblxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbdGhpcy5nZW5Db250ZW50KCldXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICBvbjogdGhpcy4kbGlzdGVuZXJzLFxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc0V4dGVuZGVkKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuRXh0ZW5zaW9uKCkpXG4gICAgaWYgKHRoaXMuc3JjIHx8IHRoaXMuJHNjb3BlZFNsb3RzLmltZykgY2hpbGRyZW4udW5zaGlmdCh0aGlzLmdlbkJhY2tncm91bmQoKSlcblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WTWVzc2FnZXMuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IgfSBmcm9tICd2dWUvdHlwZXMvb3B0aW9ucydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhDb2xvcmFibGUsIFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWVzc2FnZXMnLFxuXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKFtdKSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8c3RyaW5nW10+LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5DaGlsZHJlbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbi1ncm91cCcsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzX193cmFwcGVyJyxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiAnbWVzc2FnZS10cmFuc2l0aW9uJyxcbiAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICB9LFxuICAgICAgfSwgdGhpcy52YWx1ZS5tYXAodGhpcy5nZW5NZXNzYWdlKSlcbiAgICB9LFxuICAgIGdlbk1lc3NhZ2UgKG1lc3NhZ2U6IHN0cmluZywga2V5OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1tZXNzYWdlc19fbWVzc2FnZScsXG4gICAgICAgIGtleSxcbiAgICAgIH0sIGdldFNsb3QodGhpcywgJ2RlZmF1bHQnLCB7IG1lc3NhZ2UsIGtleSB9KSB8fCBbbWVzc2FnZV0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tZXNzYWdlcycsXG4gICAgICBjbGFzczogdGhpcy50aGVtZUNsYXNzZXMsXG4gICAgfSksIFt0aGlzLmdlbkNoaWxkcmVuKCldKVxuICB9LFxufSlcbiIsImltcG9ydCBWTWVzc2FnZXMgZnJvbSAnLi9WTWVzc2FnZXMnXG5cbmV4cG9ydCB7IFZNZXNzYWdlcyB9XG5leHBvcnQgZGVmYXVsdCBWTWVzc2FnZXNcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZJbnB1dC5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5pbXBvcnQgVkxhYmVsIGZyb20gJy4uL1ZMYWJlbCdcbmltcG9ydCBWTWVzc2FnZXMgZnJvbSAnLi4vVk1lc3NhZ2VzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBCaW5kc0F0dHJzIGZyb20gJy4uLy4uL21peGlucy9iaW5kcy1hdHRycydcbmltcG9ydCBWYWxpZGF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdmFsaWRhdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHtcbiAgY29udmVydFRvVW5pdCxcbiAgZ2V0U2xvdCxcbiAga2ViYWJDYXNlLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFZOb2RlRGF0YSwgUHJvcFR5cGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgSW5wdXRWYWxpZGF0aW9uUnVsZSB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIEJpbmRzQXR0cnMsXG4gIFZhbGlkYXRhYmxlLFxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEluc3RhbmNlVHlwZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlICovXG4gICRfbW9kZWxFdmVudDogc3RyaW5nXG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWlucHV0JyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZW5kSWNvbjogU3RyaW5nLFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBoZWlnaHQ6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgaGlkZURldGFpbHM6IFtCb29sZWFuLCBTdHJpbmddIGFzIFByb3BUeXBlPGJvb2xlYW4gfCAnYXV0byc+LFxuICAgIGhpbnQ6IFN0cmluZyxcbiAgICBpZDogU3RyaW5nLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgbG9hZGluZzogQm9vbGVhbixcbiAgICBwZXJzaXN0ZW50SGludDogQm9vbGVhbixcbiAgICBwcmVwZW5kSWNvbjogU3RyaW5nLFxuICAgIHZhbHVlOiBudWxsIGFzIGFueSBhcyBQcm9wVHlwZTxhbnk+LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXp5VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBoYXNNb3VzZURvd246IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1pbnB1dC0taGFzLXN0YXRlJzogdGhpcy5oYXNTdGF0ZSxcbiAgICAgICAgJ3YtaW5wdXQtLWhpZGUtZGV0YWlscyc6ICF0aGlzLnNob3dEZXRhaWxzLFxuICAgICAgICAndi1pbnB1dC0taXMtbGFiZWwtYWN0aXZlJzogdGhpcy5pc0xhYmVsQWN0aXZlLFxuICAgICAgICAndi1pbnB1dC0taXMtZGlydHknOiB0aGlzLmlzRGlydHksXG4gICAgICAgICd2LWlucHV0LS1pcy1kaXNhYmxlZCc6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWZvY3VzZWQnOiB0aGlzLmlzRm9jdXNlZCxcbiAgICAgICAgLy8gPHYtc3dpdGNoIGxvYWRpbmc+LmxvYWRpbmcgPT09ICcnIHNvIHdlIGNhbid0IGp1c3QgY2FzdCB0byBib29sZWFuXG4gICAgICAgICd2LWlucHV0LS1pcy1sb2FkaW5nJzogdGhpcy5sb2FkaW5nICE9PSBmYWxzZSAmJiB0aGlzLmxvYWRpbmcgIT0gbnVsbCxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLXJlYWRvbmx5JzogdGhpcy5pc1JlYWRvbmx5LFxuICAgICAgICAndi1pbnB1dC0tZGVuc2UnOiB0aGlzLmRlbnNlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkSWQgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5pZCB8fCBgaW5wdXQtJHt0aGlzLl91aWR9YFxuICAgIH0sXG4gICAgaGFzRGV0YWlscyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1RvRGlzcGxheS5sZW5ndGggPiAwXG4gICAgfSxcbiAgICBoYXNIaW50ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5oYXNNZXNzYWdlcyAmJlxuICAgICAgICAhIXRoaXMuaGludCAmJlxuICAgICAgICAodGhpcy5wZXJzaXN0ZW50SGludCB8fCB0aGlzLmlzRm9jdXNlZClcbiAgICB9LFxuICAgIGhhc0xhYmVsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhISh0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgLy8gUHJveHkgZm9yIGBsYXp5VmFsdWVgXG4gICAgLy8gVGhpcyBhbGxvd3MgYW4gaW5wdXRcbiAgICAvLyB0byBmdW5jdGlvbiB3aXRob3V0XG4gICAgLy8gYSBwcm92aWRlZCBtb2RlbFxuICAgIGludGVybmFsVmFsdWU6IHtcbiAgICAgIGdldCAoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgICAgICB0aGlzLiRlbWl0KHRoaXMuJF9tb2RlbEV2ZW50LCB2YWwpXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNEaXJ0eSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISF0aGlzLmxhenlWYWx1ZVxuICAgIH0sXG4gICAgaXNMYWJlbEFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RpcnR5XG4gICAgfSxcbiAgICBtZXNzYWdlc1RvRGlzcGxheSAoKTogc3RyaW5nW10ge1xuICAgICAgaWYgKHRoaXMuaGFzSGludCkgcmV0dXJuIFt0aGlzLmhpbnRdXG5cbiAgICAgIGlmICghdGhpcy5oYXNNZXNzYWdlcykgcmV0dXJuIFtdXG5cbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25zLm1hcCgodmFsaWRhdGlvbjogc3RyaW5nIHwgSW5wdXRWYWxpZGF0aW9uUnVsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbGlkYXRpb24gPT09ICdzdHJpbmcnKSByZXR1cm4gdmFsaWRhdGlvblxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0aW9uKHRoaXMuaW50ZXJuYWxWYWx1ZSlcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnID8gdmFsaWRhdGlvblJlc3VsdCA6ICcnXG4gICAgICB9KS5maWx0ZXIobWVzc2FnZSA9PiBtZXNzYWdlICE9PSAnJylcbiAgICB9LFxuICAgIHNob3dEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGVEZXRhaWxzID09PSBmYWxzZSB8fCAodGhpcy5oaWRlRGV0YWlscyA9PT0gJ2F1dG8nICYmIHRoaXMuaGFzRGV0YWlscylcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgdmFsdWUgKHZhbCkge1xuICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICB9LFxuICB9LFxuXG4gIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgLy8gdi1yYWRpby1ncm91cCBuZWVkcyB0byBlbWl0IGEgZGlmZmVyZW50IGV2ZW50XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5L2lzc3Vlcy80NzUyXG4gICAgdGhpcy4kX21vZGVsRXZlbnQgPSAodGhpcy4kb3B0aW9ucy5tb2RlbCAmJiB0aGlzLiRvcHRpb25zLm1vZGVsLmV2ZW50KSB8fCAnaW5wdXQnXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5QcmVwZW5kU2xvdCgpLFxuICAgICAgICB0aGlzLmdlbkNvbnRyb2woKSxcbiAgICAgICAgdGhpcy5nZW5BcHBlbmRTbG90KCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5Db250cm9sICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dF9fY29udHJvbCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuSW5wdXRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuTWVzc2FnZXMoKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5EZWZhdWx0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlbkxhYmVsKCksXG4gICAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHQsXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5JY29uIChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGNiPzogKGU6IEV2ZW50KSA9PiB2b2lkLFxuICAgICAgZXh0cmFEYXRhOiBWTm9kZURhdGEgPSB7fVxuICAgICkge1xuICAgICAgY29uc3QgaWNvbiA9ICh0aGlzIGFzIGFueSlbYCR7dHlwZX1JY29uYF1cbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGBjbGljazoke2tlYmFiQ2FzZSh0eXBlKX1gXG4gICAgICBjb25zdCBoYXNMaXN0ZW5lciA9ICEhKHRoaXMubGlzdGVuZXJzJFtldmVudE5hbWVdIHx8IGNiKVxuXG4gICAgICBjb25zdCBkYXRhID0gbWVyZ2VEYXRhKHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IGhhc0xpc3RlbmVyID8ga2ViYWJDYXNlKHR5cGUpLnNwbGl0KCctJylbMF0gKyAnIGljb24nIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLnZhbGlkYXRpb25TdGF0ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgfSxcbiAgICAgICAgb246ICFoYXNMaXN0ZW5lclxuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICBjbGljazogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgICAgdGhpcy4kZW1pdChldmVudE5hbWUsIGUpXG4gICAgICAgICAgICAgIGNiICYmIGNiKGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQ29udGFpbmVyIGhhcyBnIGV2ZW50IHRoYXQgd2lsbFxuICAgICAgICAgICAgLy8gdHJpZ2dlciBtZW51IG9wZW4gaWYgZW5jbG9zZWRcbiAgICAgICAgICAgIG1vdXNldXA6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgfSwgZXh0cmFEYXRhKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtaW5wdXRfX2ljb25gLFxuICAgICAgICBjbGFzczogdHlwZSA/IGB2LWlucHV0X19pY29uLS0ke2tlYmFiQ2FzZSh0eXBlKX1gIDogdW5kZWZpbmVkLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFZJY29uLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgaWNvblxuICAgICAgICApLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0X19zbG90JyxcbiAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgICAgbW91c2Vkb3duOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgICAgIG1vdXNldXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICB9LFxuICAgICAgICByZWY6ICdpbnB1dC1zbG90JyxcbiAgICAgIH0pLCBbdGhpcy5nZW5EZWZhdWx0U2xvdCgpXSlcbiAgICB9LFxuICAgIGdlbkxhYmVsICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNMYWJlbCkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxhYmVsLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGZvY3VzZWQ6IHRoaXMuaGFzU3RhdGUsXG4gICAgICAgICAgZm9yOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZXMgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dEZXRhaWxzKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTWVzc2FnZXMsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy5oYXNIaW50ID8gJycgOiB0aGlzLnZhbGlkYXRpb25TdGF0ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubWVzc2FnZXNUb0Rpc3BsYXksXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgcm9sZTogdGhpcy5oYXNNZXNzYWdlcyA/ICdhbGVydCcgOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czoge1xuICAgICAgICAgIGRlZmF1bHQ6IHByb3BzID0+IGdldFNsb3QodGhpcywgJ21lc3NhZ2UnLCBwcm9wcyksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2VuU2xvdCAoXG4gICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgICAgc2xvdDogKFZOb2RlIHwgVk5vZGVbXSlbXVxuICAgICkge1xuICAgICAgaWYgKCFzbG90Lmxlbmd0aCkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgcmVmID0gYCR7dHlwZX0tJHtsb2NhdGlvbn1gXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1pbnB1dF9fJHtyZWZ9YCxcbiAgICAgICAgcmVmLFxuICAgICAgfSwgc2xvdClcbiAgICB9LFxuICAgIGdlblByZXBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHMucHJlcGVuZCkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHMucHJlcGVuZClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmVwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdwcmVwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ3ByZXBlbmQnLCAnb3V0ZXInLCBzbG90KVxuICAgIH0sXG4gICAgZ2VuQXBwZW5kU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgLy8gQXBwZW5kIGljb24gZm9yIHRleHQgZmllbGQgd2FzIHJlYWxseVxuICAgICAgLy8gYW4gYXBwZW5kZWQgaW5uZXIgaWNvbiwgdi10ZXh0LWZpZWxkXG4gICAgICAvLyB3aWxsIG92ZXJ3cml0ZSB0aGlzIG1ldGhvZCBpbiBvcmRlciB0byBvYnRhaW5cbiAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRcbiAgICAgIGlmICh0aGlzLiRzbG90cy5hcHBlbmQpIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzLmFwcGVuZClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ2FwcGVuZCcpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdhcHBlbmQnLCAnb3V0ZXInLCBzbG90KVxuICAgIH0sXG4gICAgb25DbGljayAoZTogRXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9LFxuICAgIG9uTW91c2VEb3duIChlOiBFdmVudCkge1xuICAgICAgdGhpcy5oYXNNb3VzZURvd24gPSB0cnVlXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWRvd24nLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZVVwIChlOiBFdmVudCkge1xuICAgICAgdGhpcy5oYXNNb3VzZURvd24gPSBmYWxzZVxuICAgICAgdGhpcy4kZW1pdCgnbW91c2V1cCcsIGUpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMudmFsaWRhdGlvblN0YXRlLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXQnLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICB9KSwgdGhpcy5nZW5Db250ZW50KCkpXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZJbnB1dCBmcm9tICcuL1ZJbnB1dCdcblxuZXhwb3J0IHsgVklucHV0IH1cbmV4cG9ydCBkZWZhdWx0IFZJbnB1dFxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkNhcmQuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZTaGVldCBmcm9tICcuLi9WU2hlZXQnXG5cbi8vIE1peGluc1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4uLy4uL21peGlucy9sb2FkYWJsZSdcbmltcG9ydCBSb3V0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91dGFibGUnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgTG9hZGFibGUsXG4gIFJvdXRhYmxlLFxuICBWU2hlZXRcbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY2FyZCcsXG5cbiAgcHJvcHM6IHtcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGhvdmVyOiBCb29sZWFuLFxuICAgIGltZzogU3RyaW5nLFxuICAgIGxpbms6IEJvb2xlYW4sXG4gICAgbG9hZGVySGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNCxcbiAgICB9LFxuICAgIHJhaXNlZDogQm9vbGVhbixcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1jYXJkJzogdHJ1ZSxcbiAgICAgICAgLi4uUm91dGFibGUub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LWNhcmQtLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LWNhcmQtLWhvdmVyJzogdGhpcy5ob3ZlcixcbiAgICAgICAgJ3YtY2FyZC0tbGluayc6IHRoaXMuaXNDbGlja2FibGUsXG4gICAgICAgICd2LWNhcmQtLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICd2LWNhcmQtLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ3YtY2FyZC0tcmFpc2VkJzogdGhpcy5yYWlzZWQsXG4gICAgICAgIC4uLlZTaGVldC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHN0eWxlOiBEaWN0aW9uYXJ5PHN0cmluZz4gPSB7XG4gICAgICAgIC4uLlZTaGVldC5vcHRpb25zLmNvbXB1dGVkLnN0eWxlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbWcpIHtcbiAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIke3RoaXMuaW1nfVwiKSBjZW50ZXIgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGVcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Qcm9ncmVzcyAoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBMb2FkYWJsZS5vcHRpb25zLm1ldGhvZHMuZ2VuUHJvZ3Jlc3MuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXJlbmRlcikgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNhcmRfX3Byb2dyZXNzJyxcbiAgICAgICAga2V5OiAncHJvZ3Jlc3MnLFxuICAgICAgfSwgW3JlbmRlcl0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyB0YWcsIGRhdGEgfSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZUxpbmsoKVxuXG4gICAgZGF0YS5zdHlsZSA9IHRoaXMuc3R5bGVzXG5cbiAgICBpZiAodGhpcy5pc0NsaWNrYWJsZSkge1xuICAgICAgZGF0YS5hdHRycyA9IGRhdGEuYXR0cnMgfHwge31cbiAgICAgIGRhdGEuYXR0cnMudGFiaW5kZXggPSAwXG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGFnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCBkYXRhKSwgW1xuICAgICAgdGhpcy5nZW5Qcm9ncmVzcygpLFxuICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICBdKVxuICB9LFxufSlcbiIsImltcG9ydCAnLi9WUHJvZ3Jlc3NMaW5lYXIuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHtcbiAgVkZhZGVUcmFuc2l0aW9uLFxuICBWU2xpZGVYVHJhbnNpdGlvbixcbn0gZnJvbSAnLi4vdHJhbnNpdGlvbnMnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBQb3NpdGlvbmFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3Bvc2l0aW9uYWJsZSdcbmltcG9ydCBQcm94eWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Byb3h5YWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IEZ1bmN0aW9uYWxDb21wb25lbnRPcHRpb25zIH0gZnJvbSAndnVlL3R5cGVzJ1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgUG9zaXRpb25hYmxlRmFjdG9yeShbJ2Fic29sdXRlJywgJ2ZpeGVkJywgJ3RvcCcsICdib3R0b20nXSksXG4gIFByb3h5YWJsZSxcbiAgVGhlbWVhYmxlXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXByb2dyZXNzLWxpbmVhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZE9wYWNpdHk6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgYnVmZmVyVmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAxMDAsXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNCxcbiAgICB9LFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcXVlcnk6IEJvb2xlYW4sXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHN0cmVhbTogQm9vbGVhbixcbiAgICBzdHJpcGVkOiBCb29sZWFuLFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlcm5hbExhenlWYWx1ZTogdGhpcy52YWx1ZSB8fCAwLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIF9fY2FjaGVkQmFja2dyb3VuZCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yIHx8IHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fYmFja2dyb3VuZCcsXG4gICAgICAgIHN0eWxlOiB0aGlzLmJhY2tncm91bmRTdHlsZSxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgX19jYWNoZWRCYXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KHRoaXMuY29tcHV0ZWRUcmFuc2l0aW9uLCBbdGhpcy5fX2NhY2hlZEJhclR5cGVdKVxuICAgIH0sXG4gICAgX19jYWNoZWRCYXJUeXBlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRldGVybWluYXRlID8gdGhpcy5fX2NhY2hlZEluZGV0ZXJtaW5hdGUgOiB0aGlzLl9fY2FjaGVkRGV0ZXJtaW5hdGVcbiAgICB9LFxuICAgIF9fY2FjaGVkQnVmZmVyICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19idWZmZXInLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICB9KVxuICAgIH0sXG4gICAgX19jYWNoZWREZXRlcm1pbmF0ZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LXByb2dyZXNzLWxpbmVhcl9fZGV0ZXJtaW5hdGVgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgICB9LFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBfX2NhY2hlZEluZGV0ZXJtaW5hdGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZS0tYWN0aXZlJzogdGhpcy5hY3RpdmUsXG4gICAgICAgIH0sXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuUHJvZ3Jlc3NCYXIoJ2xvbmcnKSxcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzc0Jhcignc2hvcnQnKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBfX2NhY2hlZFN0cmVhbSAoKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGlmICghdGhpcy5zdHJlYW0pIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX3N0cmVhbScsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQoMTAwIC0gdGhpcy5ub3JtYWxpemVkQnVmZmVyLCAnJScpLFxuICAgICAgICB9LFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kU3R5bGUgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kT3BhY2l0eSA9IHRoaXMuYmFja2dyb3VuZE9wYWNpdHkgPT0gbnVsbFxuICAgICAgICA/ICh0aGlzLmJhY2tncm91bmRDb2xvciA/IDEgOiAwLjMpXG4gICAgICAgIDogcGFyc2VGbG9hdCh0aGlzLmJhY2tncm91bmRPcGFjaXR5KVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBiYWNrZ3JvdW5kT3BhY2l0eSxcbiAgICAgICAgW3RoaXMuaXNSZXZlcnNlZCA/ICdyaWdodCcgOiAnbGVmdCddOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCh0aGlzLm5vcm1hbGl6ZWRCdWZmZXIgLSB0aGlzLm5vcm1hbGl6ZWRWYWx1ZSwgJyUnKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLWFic29sdXRlJzogdGhpcy5hYnNvbHV0ZSxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1maXhlZCc6IHRoaXMuZml4ZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcXVlcnknOiB0aGlzLnF1ZXJ5LFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJlYWN0aXZlJzogdGhpcy5yZWFjdGl2ZSxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1yZXZlcnNlJzogdGhpcy5pc1JldmVyc2VkLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJvdW5kZWQnOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tc3RyaXBlZCc6IHRoaXMuc3RyaXBlZCxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zaXRpb24gKCk6IEZ1bmN0aW9uYWxDb21wb25lbnRPcHRpb25zIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyBWRmFkZVRyYW5zaXRpb24gOiBWU2xpZGVYVHJhbnNpdGlvblxuICAgIH0sXG4gICAgaXNSZXZlcnNlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5ydGwgIT09IHRoaXMucmV2ZXJzZVxuICAgIH0sXG4gICAgbm9ybWFsaXplZEJ1ZmZlciAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSh0aGlzLmJ1ZmZlclZhbHVlKVxuICAgIH0sXG4gICAgbm9ybWFsaXplZFZhbHVlICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMuaW50ZXJuYWxMYXp5VmFsdWUpXG4gICAgfSxcbiAgICByZWFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLiRsaXN0ZW5lcnMuY2hhbmdlKVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qgc3R5bGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge31cblxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICBzdHlsZXMuaGVpZ2h0ID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaW5kZXRlcm1pbmF0ZSAmJiBwYXJzZUZsb2F0KHRoaXMubm9ybWFsaXplZEJ1ZmZlcikgIT09IDEwMCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZEJ1ZmZlciwgJyUnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGVzXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gZ2V0U2xvdCh0aGlzLCAnZGVmYXVsdCcsIHsgdmFsdWU6IHRoaXMuaW50ZXJuYWxMYXp5VmFsdWUgfSlcblxuICAgICAgaWYgKCFzbG90KSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19jb250ZW50JyxcbiAgICAgIH0sIHNsb3QpXG4gICAgfSxcbiAgICBnZW5MaXN0ZW5lcnMgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy4kbGlzdGVuZXJzXG5cbiAgICAgIGlmICh0aGlzLnJlYWN0aXZlKSB7XG4gICAgICAgIGxpc3RlbmVycy5jbGljayA9IHRoaXMub25DbGlja1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzXG4gICAgfSxcbiAgICBnZW5Qcm9ncmVzc0JhciAobmFtZTogJ2xvbmcnIHwgJ3Nob3J0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZScsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgW25hbWVdOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMucmVhY3RpdmUpIHJldHVyblxuXG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBlLm9mZnNldFggLyB3aWR0aCAqIDEwMFxuICAgIH0sXG4gICAgbm9ybWFsaXplICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICBpZiAodmFsdWUgPCAwKSByZXR1cm4gMFxuICAgICAgaWYgKHZhbHVlID4gMTAwKSByZXR1cm4gMTAwXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcicsXG4gICAgICBhdHRyczoge1xuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogdGhpcy5ub3JtYWxpemVkQnVmZmVyLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHRoaXMuaW5kZXRlcm1pbmF0ZSA/IHVuZGVmaW5lZCA6IHRoaXMubm9ybWFsaXplZFZhbHVlLFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBib3R0b206IHRoaXMuYm90dG9tID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmFjdGl2ZSA/IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpIDogMCxcbiAgICAgICAgdG9wOiB0aGlzLnRvcCA/IDAgOiB1bmRlZmluZWQsXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuZ2VuTGlzdGVuZXJzKCksXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIFtcbiAgICAgIHRoaXMuX19jYWNoZWRTdHJlYW0sXG4gICAgICB0aGlzLl9fY2FjaGVkQmFja2dyb3VuZCxcbiAgICAgIHRoaXMuX19jYWNoZWRCdWZmZXIsXG4gICAgICB0aGlzLl9fY2FjaGVkQmFyLFxuICAgICAgdGhpcy5nZW5Db250ZW50KCksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WTGFiZWwuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlLCB7IGZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbGFiZWwnLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBhYnNvbHV0ZTogQm9vbGVhbixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZm9jdXNlZDogQm9vbGVhbixcbiAgICBmb3I6IFN0cmluZyxcbiAgICBsZWZ0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgdmFsdWU6IEJvb2xlYW4sXG4gIH0sXG5cbiAgcmVuZGVyIChoLCBjdHgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbGlzdGVuZXJzLCBwcm9wcyB9ID0gY3R4XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1sYWJlbCcsXG4gICAgICBjbGFzczoge1xuICAgICAgICAndi1sYWJlbC0tYWN0aXZlJzogcHJvcHMudmFsdWUsXG4gICAgICAgICd2LWxhYmVsLS1pcy1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICAuLi5mdW5jdGlvbmFsVGhlbWVDbGFzc2VzKGN0eCksXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZm9yOiBwcm9wcy5mb3IsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICFwcm9wcy5mb3IsXG4gICAgICB9LFxuICAgICAgb246IGxpc3RlbmVycyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGxlZnQ6IGNvbnZlcnRUb1VuaXQocHJvcHMubGVmdCksXG4gICAgICAgIHJpZ2h0OiBjb252ZXJ0VG9Vbml0KHByb3BzLnJpZ2h0KSxcbiAgICAgICAgcG9zaXRpb246IHByb3BzLmFic29sdXRlID8gJ2Fic29sdXRlJyA6ICdyZWxhdGl2ZScsXG4gICAgICB9LFxuICAgICAgcmVmOiAnbGFiZWwnLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdsYWJlbCcsIENvbG9yYWJsZS5vcHRpb25zLm1ldGhvZHMuc2V0VGV4dENvbG9yKHByb3BzLmZvY3VzZWQgJiYgcHJvcHMuY29sb3IsIGRhdGEpLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVkxhYmVsIGZyb20gJy4vVkxhYmVsJ1xuXG5leHBvcnQgeyBWTGFiZWwgfVxuZXhwb3J0IGRlZmF1bHQgVkxhYmVsXG4iLCJpbXBvcnQgVnVlLCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IFZQcm9ncmVzc0xpbmVhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhcidcblxuaW50ZXJmYWNlIGNvbG9yYWJsZSBleHRlbmRzIFZ1ZSB7XG4gIGNvbG9yPzogc3RyaW5nXG59XG5cbi8qKlxuICogTG9hZGFibGVcbiAqXG4gKiBAbWl4aW5cbiAqXG4gKiBVc2VkIHRvIGFkZCBsaW5lYXIgcHJvZ3Jlc3MgYmFyIHRvIGNvbXBvbmVudHNcbiAqIENhbiB1c2UgYSBkZWZhdWx0IGJhciB3aXRoIGEgc3BlY2lmaWMgY29sb3JcbiAqIG9yIGRlc2lnbmF0ZSBhIGN1c3RvbSBwcm9ncmVzcyBsaW5lYXIgYmFyXG4gKi9cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kPGNvbG9yYWJsZT4oKS5leHRlbmQoe1xuICBuYW1lOiAnbG9hZGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGxvYWRlckhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDIsXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuUHJvZ3Jlc3MgKCk6IFZOb2RlIHwgVk5vZGVbXSB8IG51bGwge1xuICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gZmFsc2UpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRzbG90cy5wcm9ncmVzcyB8fCB0aGlzLiRjcmVhdGVFbGVtZW50KFZQcm9ncmVzc0xpbmVhciwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgICAgIGNvbG9yOiAodGhpcy5sb2FkaW5nID09PSB0cnVlIHx8IHRoaXMubG9hZGluZyA9PT0gJycpXG4gICAgICAgICAgICA/ICh0aGlzLmNvbG9yIHx8ICdwcmltYXJ5JylcbiAgICAgICAgICAgIDogdGhpcy5sb2FkaW5nLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5sb2FkZXJIZWlnaHQsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi90aGVtZWFibGUnXG5pbXBvcnQgeyBpbmplY3QgYXMgUmVnaXN0cmFibGVJbmplY3QgfSBmcm9tICcuLi9yZWdpc3RyYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBkZWVwRXF1YWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBjb25zb2xlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgSW5wdXRNZXNzYWdlLCBJbnB1dFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgUmVnaXN0cmFibGVJbmplY3Q8J2Zvcm0nLCBhbnk+KCdmb3JtJyksXG4gIFRoZW1lYWJsZSxcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3ZhbGlkYXRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGVycm9yOiBCb29sZWFuLFxuICAgIGVycm9yQ291bnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAxLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlczoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXldLFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPElucHV0TWVzc2FnZSB8IG51bGw+LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgcnVsZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPElucHV0VmFsaWRhdGlvblJ1bGVzPixcbiAgICBzdWNjZXNzOiBCb29sZWFuLFxuICAgIHN1Y2Nlc3NNZXNzYWdlczoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXldLFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPElucHV0TWVzc2FnZSB8IG51bGw+LFxuICAgIHZhbGlkYXRlT25CbHVyOiBCb29sZWFuLFxuICAgIHZhbHVlOiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvckJ1Y2tldDogW10gYXMgc3RyaW5nW10sXG4gICAgICBoYXNDb2xvcjogZmFsc2UsXG4gICAgICBoYXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGhhc0lucHV0OiBmYWxzZSxcbiAgICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgICBpc1Jlc2V0dGluZzogZmFsc2UsXG4gICAgICBsYXp5VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICB2YWxpZDogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRDb2xvciAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGlmICh0aGlzLmNvbG9yKSByZXR1cm4gdGhpcy5jb2xvclxuICAgICAgLy8gSXQncyBhc3N1bWVkIHRoYXQgaWYgdGhlIGlucHV0IGlzIG9uIGFcbiAgICAgIC8vIGRhcmsgYmFja2dyb3VuZCwgdGhlIHVzZXIgd2lsbCB3YW50IHRvXG4gICAgICAvLyBoYXZlIGEgd2hpdGUgY29sb3IuIElmIHRoZSBlbnRpcmUgYXBwXG4gICAgICAvLyBpcyBzZXR1cCB0byBiZSBkYXJrLCB0aGVuIHRoZXkgd2lsbFxuICAgICAgLy8gbGlrZSB3YW50IHRvIHVzZSB0aGVpciBwcmltYXJ5IGNvbG9yXG4gICAgICBpZiAodGhpcy5pc0RhcmsgJiYgIXRoaXMuYXBwSXNEYXJrKSByZXR1cm4gJ3doaXRlJ1xuICAgICAgZWxzZSByZXR1cm4gJ3ByaW1hcnknXG4gICAgfSxcbiAgICBoYXNFcnJvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuZXJyb3JCdWNrZXQubGVuZ3RoID4gMCB8fFxuICAgICAgICB0aGlzLmVycm9yXG4gICAgICApXG4gICAgfSxcbiAgICAvLyBUT0RPOiBBZGQgbG9naWMgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gZW5hYmxlIGJhc2VkXG4gICAgLy8gdXBvbiBhIGdvb2QgdmFsaWRhdGlvblxuICAgIGhhc1N1Y2Nlc3MgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN1Y2Nlc3NNZXNzYWdlcy5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuc3VjY2Vzc1xuICAgICAgKVxuICAgIH0sXG4gICAgZXh0ZXJuYWxFcnJvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCB8fCB0aGlzLmVycm9yXG4gICAgfSxcbiAgICBoYXNNZXNzYWdlcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Lmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGhhc1N0YXRlICgpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHJldHVybiBmYWxzZVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmhhc1N1Y2Nlc3MgfHxcbiAgICAgICAgKHRoaXMuc2hvdWxkVmFsaWRhdGUgJiYgdGhpcy5oYXNFcnJvcilcbiAgICAgIClcbiAgICB9LFxuICAgIGludGVybmFsRXJyb3JNZXNzYWdlcyAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuSW50ZXJuYWxNZXNzYWdlcyh0aGlzLmVycm9yTWVzc2FnZXMpXG4gICAgfSxcbiAgICBpbnRlcm5hbE1lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMubWVzc2FnZXMpXG4gICAgfSxcbiAgICBpbnRlcm5hbFN1Y2Nlc3NNZXNzYWdlcyAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuSW50ZXJuYWxNZXNzYWdlcyh0aGlzLnN1Y2Nlc3NNZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsVmFsdWU6IHtcbiAgICAgIGdldCAoKTogdW5rbm93biB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcblxuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0Rpc2FibGVkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8IChcbiAgICAgICAgISF0aGlzLmZvcm0gJiZcbiAgICAgICAgdGhpcy5mb3JtLmRpc2FibGVkXG4gICAgICApXG4gICAgfSxcbiAgICBpc0ludGVyYWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHlcbiAgICB9LFxuICAgIGlzUmVhZG9ubHkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgfHwgKFxuICAgICAgICAhIXRoaXMuZm9ybSAmJlxuICAgICAgICB0aGlzLmZvcm0ucmVhZG9ubHlcbiAgICAgIClcbiAgICB9LFxuICAgIHNob3VsZFZhbGlkYXRlICgpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmV4dGVybmFsRXJyb3IpIHJldHVybiB0cnVlXG4gICAgICBpZiAodGhpcy5pc1Jlc2V0dGluZykgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlT25CbHVyXG4gICAgICAgID8gdGhpcy5oYXNGb2N1c2VkICYmICF0aGlzLmlzRm9jdXNlZFxuICAgICAgICA6ICh0aGlzLmhhc0lucHV0IHx8IHRoaXMuaGFzRm9jdXNlZClcbiAgICB9LFxuICAgIHZhbGlkYXRpb25zICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0LnNsaWNlKDAsIE51bWJlcih0aGlzLmVycm9yQ291bnQpKVxuICAgIH0sXG4gICAgdmFsaWRhdGlvblN0YXRlICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuaGFzRXJyb3IgJiYgdGhpcy5zaG91bGRWYWxpZGF0ZSkgcmV0dXJuICdlcnJvcidcbiAgICAgIGlmICh0aGlzLmhhc1N1Y2Nlc3MpIHJldHVybiAnc3VjY2VzcydcbiAgICAgIGlmICh0aGlzLmhhc0NvbG9yKSByZXR1cm4gdGhpcy5jb21wdXRlZENvbG9yXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uVGFyZ2V0ICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbEVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEVycm9yTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdWNjZXNzTWVzc2FnZXMgJiYgdGhpcy5zdWNjZXNzTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN1Y2Nlc3NNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1lc3NhZ2VzICYmIHRoaXMubWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JCdWNrZXRcbiAgICAgIH0gZWxzZSByZXR1cm4gW11cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIGhhbmRsZXIgKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgIGlmIChkZWVwRXF1YWwobmV3VmFsLCBvbGRWYWwpKSByZXR1cm5cbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICB9LFxuICAgIGludGVybmFsVmFsdWUgKCkge1xuICAgICAgLy8gSWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBzZXR0aW5nIGlucHV0LFxuICAgICAgLy8gbWFyayBpdCB3aXRoIGhhc0lucHV0XG4gICAgICB0aGlzLmhhc0lucHV0ID0gdHJ1ZVxuICAgICAgdGhpcy52YWxpZGF0ZU9uQmx1ciB8fCB0aGlzLiRuZXh0VGljayh0aGlzLnZhbGlkYXRlKVxuICAgIH0sXG4gICAgaXNGb2N1c2VkICh2YWwpIHtcbiAgICAgIC8vIFNob3VsZCBub3QgY2hlY2sgdmFsaWRhdGlvblxuICAgICAgLy8gaWYgZGlzYWJsZWRcbiAgICAgIGlmIChcbiAgICAgICAgIXZhbCAmJlxuICAgICAgICAhdGhpcy5pc0Rpc2FibGVkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLnZhbGlkYXRlT25CbHVyICYmIHRoaXMuJG5leHRUaWNrKHRoaXMudmFsaWRhdGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBpc1Jlc2V0dGluZyAoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYXNJbnB1dCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaGFzRm9jdXNlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLnZhbGlkYXRlKClcbiAgICAgIH0sIDApXG4gICAgfSxcbiAgICBoYXNFcnJvciAodmFsKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6ZXJyb3InLCB2YWwpXG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIHRoaXMudmFsaWRhdGUoKVxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0ucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLnVucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuSW50ZXJuYWxNZXNzYWdlcyAobWVzc2FnZXM6IElucHV0TWVzc2FnZSB8IG51bGwpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICBpZiAoIW1lc3NhZ2VzKSByZXR1cm4gW11cbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWVzc2FnZXMpKSByZXR1cm4gbWVzc2FnZXNcbiAgICAgIGVsc2UgcmV0dXJuIFttZXNzYWdlc11cbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IHRydWVcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IEFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgICA/IFtdXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHJlc2V0VmFsaWRhdGlvbiAoKSB7XG4gICAgICB0aGlzLmlzUmVzZXR0aW5nID0gdHJ1ZVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICB2YWxpZGF0ZSAoZm9yY2UgPSBmYWxzZSwgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IGVycm9yQnVja2V0ID0gW11cbiAgICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5pbnRlcm5hbFZhbHVlXG5cbiAgICAgIGlmIChmb3JjZSkgdGhpcy5oYXNJbnB1dCA9IHRoaXMuaGFzRm9jdXNlZCA9IHRydWVcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucnVsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW2luZGV4XVxuICAgICAgICBjb25zdCB2YWxpZCA9IHR5cGVvZiBydWxlID09PSAnZnVuY3Rpb24nID8gcnVsZSh2YWx1ZSkgOiBydWxlXG5cbiAgICAgICAgaWYgKHZhbGlkID09PSBmYWxzZSB8fCB0eXBlb2YgdmFsaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZXJyb3JCdWNrZXQucHVzaCh2YWxpZCB8fCAnJylcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsaWQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIGNvbnNvbGVFcnJvcihgUnVsZXMgc2hvdWxkIHJldHVybiBhIHN0cmluZyBvciBib29sZWFuLCByZWNlaXZlZCAnJHt0eXBlb2YgdmFsaWR9JyBpbnN0ZWFkYCwgdGhpcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVycm9yQnVja2V0ID0gZXJyb3JCdWNrZXRcbiAgICAgIHRoaXMudmFsaWQgPSBlcnJvckJ1Y2tldC5sZW5ndGggPT09IDBcblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZUb29sYmFyIGZyb20gJy4vVlRvb2xiYXInXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuY29uc3QgVlRvb2xiYXJUaXRsZSA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtdG9vbGJhcl9fdGl0bGUnKVxuY29uc3QgVlRvb2xiYXJJdGVtcyA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtdG9vbGJhcl9faXRlbXMnKVxuXG5leHBvcnQge1xuICBWVG9vbGJhcixcbiAgVlRvb2xiYXJJdGVtcyxcbiAgVlRvb2xiYXJUaXRsZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAkX3Z1ZXRpZnlfc3ViY29tcG9uZW50czoge1xuICAgIFZUb29sYmFyLFxuICAgIFZUb29sYmFySXRlbXMsXG4gICAgVlRvb2xiYXJUaXRsZSxcbiAgfSxcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDb3VudGVyLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IFRoZW1lYWJsZSwgeyBmdW5jdGlvbmFsVGhlbWVDbGFzc2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNvdW50ZXInLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgbWF4OiBbTnVtYmVyLCBTdHJpbmddLFxuICB9LFxuXG4gIHJlbmRlciAoaCwgY3R4KTogVk5vZGUge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IGN0eFxuICAgIGNvbnN0IG1heCA9IHBhcnNlSW50KHByb3BzLm1heCwgMTApXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChwcm9wcy52YWx1ZSwgMTApXG4gICAgY29uc3QgY29udGVudCA9IG1heCA/IGAke3ZhbHVlfSAvICR7bWF4fWAgOiBTdHJpbmcocHJvcHMudmFsdWUpXG4gICAgY29uc3QgaXNHcmVhdGVyID0gbWF4ICYmICh2YWx1ZSA+IG1heClcblxuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtY291bnRlcicsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnZXJyb3ItLXRleHQnOiBpc0dyZWF0ZXIsXG4gICAgICAgIC4uLmZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMoY3R4KSxcbiAgICAgIH0sXG4gICAgfSwgY29udGVudClcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVkNvdW50ZXIgZnJvbSAnLi9WQ291bnRlcidcblxuZXhwb3J0IHsgVkNvdW50ZXIgfVxuZXhwb3J0IGRlZmF1bHQgVkNvdW50ZXJcbiIsIi8vIERpcmVjdGl2ZXNcbmltcG9ydCBJbnRlcnNlY3QgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9pbnRlcnNlY3QnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29uc29sZVdhcm4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW50ZXJzZWN0YWJsZSAob3B0aW9uczogeyBvblZpc2libGU6IHN0cmluZ1tdIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICEoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpKSB7XG4gICAgLy8gZG8gbm90aGluZyBiZWNhdXNlIGludGVyc2VjdGlvbiBvYnNlcnZlciBpcyBub3QgYXZhaWxhYmxlXG4gICAgcmV0dXJuIFZ1ZS5leHRlbmQoeyBuYW1lOiAnaW50ZXJzZWN0YWJsZScgfSlcbiAgfVxuXG4gIHJldHVybiBWdWUuZXh0ZW5kKHtcbiAgICBuYW1lOiAnaW50ZXJzZWN0YWJsZScsXG5cbiAgICBtb3VudGVkICgpIHtcbiAgICAgIEludGVyc2VjdC5pbnNlcnRlZCh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudCwge1xuICAgICAgICBuYW1lOiAnaW50ZXJzZWN0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25PYnNlcnZlLFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgZGVzdHJveWVkICgpIHtcbiAgICAgIEludGVyc2VjdC51bmJpbmQodGhpcy4kZWwgYXMgSFRNTEVsZW1lbnQpXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uT2JzZXJ2ZSAoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdLCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsIGlzSW50ZXJzZWN0aW5nOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghaXNJbnRlcnNlY3RpbmcpIHJldHVyblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBvcHRpb25zLm9uVmlzaWJsZS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKHRoaXMgYXMgYW55KVtvcHRpb25zLm9uVmlzaWJsZVtpXV1cblxuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZVdhcm4ob3B0aW9ucy5vblZpc2libGVbaV0gKyAnIG1ldGhvZCBpcyBub3QgYXZhaWxhYmxlIG9uIHRoZSBpbnN0YW5jZSBidXQgcmVmZXJlbmNlZCBpbiBpbnRlcnNlY3RhYmxlIG1peGluIG9wdGlvbnMnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WVGV4dEZpZWxkLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWSW5wdXQgZnJvbSAnLi4vVklucHV0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkNvdW50ZXIgZnJvbSAnLi4vVkNvdW50ZXInXG5pbXBvcnQgVkxhYmVsIGZyb20gJy4uL1ZMYWJlbCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgSW50ZXJzZWN0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvaW50ZXJzZWN0YWJsZSdcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvbG9hZGFibGUnXG5pbXBvcnQgVmFsaWRhdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3ZhbGlkYXRhYmxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgcmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgYnJlYWtpbmcsIGNvbnNvbGVXYXJuIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IFZOb2RlLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgVklucHV0LFxuICBJbnRlcnNlY3RhYmxlKHtcbiAgICBvblZpc2libGU6IFtcbiAgICAgICdzZXRMYWJlbFdpZHRoJyxcbiAgICAgICdzZXRQcmVmaXhXaWR0aCcsXG4gICAgICAnc2V0UHJlcGVuZFdpZHRoJyxcbiAgICAgICd0cnlBdXRvZm9jdXMnLFxuICAgIF0sXG4gIH0pLFxuICBMb2FkYWJsZSxcbilcbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRyZWZzOiB7XG4gICAgbGFiZWw6IEhUTUxFbGVtZW50XG4gICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICAncHJlcGVuZC1pbm5lcic6IEhUTUxFbGVtZW50XG4gICAgcHJlZml4OiBIVE1MRWxlbWVudFxuICAgIHN1ZmZpeDogSFRNTEVsZW1lbnRcbiAgfVxufVxuXG5jb25zdCBkaXJ0eVR5cGVzID0gWydjb2xvcicsICdmaWxlJywgJ3RpbWUnLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICd3ZWVrJywgJ21vbnRoJ11cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGV4dC1maWVsZCcsXG5cbiAgZGlyZWN0aXZlczogeyByaXBwbGUgfSxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZW5kT3V0ZXJJY29uOiBTdHJpbmcsXG4gICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICBjbGVhckljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2xlYXInLFxuICAgIH0sXG4gICAgY291bnRlcjogW0Jvb2xlYW4sIE51bWJlciwgU3RyaW5nXSxcbiAgICBjb3VudGVyVmFsdWU6IEZ1bmN0aW9uIGFzIFByb3BUeXBlPCh2YWx1ZTogYW55KSA9PiBudW1iZXI+LFxuICAgIGZpbGxlZDogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGZ1bGxXaWR0aDogQm9vbGVhbixcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIG91dGxpbmVkOiBCb29sZWFuLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgcHJlZml4OiBTdHJpbmcsXG4gICAgcHJlcGVuZElubmVySWNvbjogU3RyaW5nLFxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcbiAgICBzaGFwZWQ6IEJvb2xlYW4sXG4gICAgc2luZ2xlTGluZTogQm9vbGVhbixcbiAgICBzb2xvOiBCb29sZWFuLFxuICAgIHNvbG9JbnZlcnRlZDogQm9vbGVhbixcbiAgICBzdWZmaXg6IFN0cmluZyxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGJhZElucHV0OiBmYWxzZSxcbiAgICBsYWJlbFdpZHRoOiAwLFxuICAgIHByZWZpeFdpZHRoOiAwLFxuICAgIHByZXBlbmRXaWR0aDogMCxcbiAgICBpbml0aWFsVmFsdWU6IG51bGwsXG4gICAgaXNCb290ZWQ6IGZhbHNlLFxuICAgIGlzQ2xlYXJpbmc6IGZhbHNlLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WSW5wdXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRleHQtZmllbGQnOiB0cnVlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1mdWxsLXdpZHRoJzogdGhpcy5mdWxsV2lkdGgsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXByZWZpeCc6IHRoaXMucHJlZml4LFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zaW5nbGUtbGluZSc6IHRoaXMuaXNTaW5nbGUsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8nOiB0aGlzLmlzU29sbyxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sby1pbnZlcnRlZCc6IHRoaXMuc29sb0ludmVydGVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWZpbGxlZCc6IHRoaXMuZmlsbGVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1pcy1ib290ZWQnOiB0aGlzLmlzQm9vdGVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1lbmNsb3NlZCc6IHRoaXMuaXNFbmNsb3NlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcmV2ZXJzZSc6IHRoaXMucmV2ZXJzZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1wbGFjZWhvbGRlcic6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXJvdW5kZWQnOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNoYXBlZCc6IHRoaXMuc2hhcGVkLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb2xvciAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkQ29sb3IgPSBWYWxpZGF0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNvbXB1dGVkQ29sb3IuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXRoaXMuc29sb0ludmVydGVkIHx8ICF0aGlzLmlzRm9jdXNlZCkgcmV0dXJuIGNvbXB1dGVkQ29sb3JcblxuICAgICAgcmV0dXJuIHRoaXMuY29sb3IgfHwgJ3ByaW1hcnknXG4gICAgfSxcbiAgICBjb21wdXRlZENvdW50ZXJWYWx1ZSAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb3VudGVyVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlclZhbHVlKHRoaXMuaW50ZXJuYWxWYWx1ZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAodGhpcy5pbnRlcm5hbFZhbHVlIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aFxuICAgIH0sXG4gICAgaGFzQ291bnRlciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jb3VudGVyICE9PSBmYWxzZSAmJiB0aGlzLmNvdW50ZXIgIT0gbnVsbFxuICAgIH0sXG4gICAgaGFzRGV0YWlscyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gVklucHV0Lm9wdGlvbnMuY29tcHV0ZWQuaGFzRGV0YWlscy5jYWxsKHRoaXMpIHx8IHRoaXMuaGFzQ291bnRlclxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5sYXp5VmFsdWUpXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNEaXJ0eSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWU/LnRvU3RyaW5nKCkubGVuZ3RoID4gMCB8fCB0aGlzLmJhZElucHV0XG4gICAgfSxcbiAgICBpc0VuY2xvc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZmlsbGVkIHx8XG4gICAgICAgIHRoaXMuaXNTb2xvIHx8XG4gICAgICAgIHRoaXMub3V0bGluZWRcbiAgICAgIClcbiAgICB9LFxuICAgIGlzTGFiZWxBY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEaXJ0eSB8fCBkaXJ0eVR5cGVzLmluY2x1ZGVzKHRoaXMudHlwZSlcbiAgICB9LFxuICAgIGlzU2luZ2xlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaXNTb2xvIHx8XG4gICAgICAgIHRoaXMuc2luZ2xlTGluZSB8fFxuICAgICAgICB0aGlzLmZ1bGxXaWR0aCB8fFxuICAgICAgICAvLyBodHRwczovL21hdGVyaWFsLmlvL2NvbXBvbmVudHMvdGV4dC1maWVsZHMvI2ZpbGxlZC10ZXh0LWZpZWxkXG4gICAgICAgICh0aGlzLmZpbGxlZCAmJiAhdGhpcy5oYXNMYWJlbClcbiAgICAgIClcbiAgICB9LFxuICAgIGlzU29sbyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zb2xvIHx8IHRoaXMuc29sb0ludmVydGVkXG4gICAgfSxcbiAgICBsYWJlbFBvc2l0aW9uICgpOiBSZWNvcmQ8J2xlZnQnIHwgJ3JpZ2h0Jywgc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPiB7XG4gICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMucHJlZml4ICYmICF0aGlzLmxhYmVsVmFsdWUpID8gdGhpcy5wcmVmaXhXaWR0aCA6IDBcblxuICAgICAgaWYgKHRoaXMubGFiZWxWYWx1ZSAmJiB0aGlzLnByZXBlbmRXaWR0aCkgb2Zmc2V0IC09IHRoaXMucHJlcGVuZFdpZHRoXG5cbiAgICAgIHJldHVybiAodGhpcy4kdnVldGlmeS5ydGwgPT09IHRoaXMucmV2ZXJzZSkgPyB7XG4gICAgICAgIGxlZnQ6IG9mZnNldCxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgIH0gOiB7XG4gICAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgICAgcmlnaHQ6IG9mZnNldCxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dMYWJlbCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNMYWJlbCAmJiAoIXRoaXMuaXNTaW5nbGUgfHwgKCF0aGlzLmlzTGFiZWxBY3RpdmUgJiYgIXRoaXMucGxhY2Vob2xkZXIpKVxuICAgIH0sXG4gICAgbGFiZWxWYWx1ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNTaW5nbGUgJiZcbiAgICAgICAgQm9vbGVhbih0aGlzLmlzRm9jdXNlZCB8fCB0aGlzLmlzTGFiZWxBY3RpdmUgfHwgdGhpcy5wbGFjZWhvbGRlcilcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbGFiZWxWYWx1ZTogJ3NldExhYmVsV2lkdGgnLFxuICAgIG91dGxpbmVkOiAnc2V0TGFiZWxXaWR0aCcsXG4gICAgbGFiZWwgKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5zZXRMYWJlbFdpZHRoKVxuICAgIH0sXG4gICAgcHJlZml4ICgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKHRoaXMuc2V0UHJlZml4V2lkdGgpXG4gICAgfSxcbiAgICBpc0ZvY3VzZWQ6ICd1cGRhdGVWYWx1ZScsXG4gICAgdmFsdWUgKHZhbCkge1xuICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCdib3gnKSkge1xuICAgICAgYnJlYWtpbmcoJ2JveCcsICdmaWxsZWQnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCdicm93c2VyLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBicmVha2luZygnYnJvd3Nlci1hdXRvY29tcGxldGUnLCAnYXV0b2NvbXBsZXRlJywgdGhpcylcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodGhpcy5zaGFwZWQgJiYgISh0aGlzLmZpbGxlZCB8fCB0aGlzLm91dGxpbmVkIHx8IHRoaXMuaXNTb2xvKSkge1xuICAgICAgY29uc29sZVdhcm4oJ3NoYXBlZCBzaG91bGQgYmUgdXNlZCB3aXRoIGVpdGhlciBmaWxsZWQgb3Igb3V0bGluZWQnLCB0aGlzKVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmF1dG9mb2N1cyAmJiB0aGlzLnRyeUF1dG9mb2N1cygpXG4gICAgdGhpcy5zZXRMYWJlbFdpZHRoKClcbiAgICB0aGlzLnNldFByZWZpeFdpZHRoKClcbiAgICB0aGlzLnNldFByZXBlbmRXaWR0aCgpXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+ICh0aGlzLmlzQm9vdGVkID0gdHJ1ZSkpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8qKiBAcHVibGljICovXG4gICAgZm9jdXMgKCkge1xuICAgICAgdGhpcy5vbkZvY3VzKClcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgYmx1ciAoZT86IEV2ZW50KSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzU5MTNcbiAgICAgIC8vIFNhZmFyaSB0YWIgb3JkZXIgZ2V0cyBicm9rZW4gaWYgY2FsbGVkIHN5bmNocm9ub3VzXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmJsdXIoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNsZWFyYWJsZUNhbGxiYWNrICgpIHtcbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLmludGVybmFsVmFsdWUgPSBudWxsKVxuICAgIH0sXG4gICAgZ2VuQXBwZW5kU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydhcHBlbmQtb3V0ZXInXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ2FwcGVuZC1vdXRlciddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kT3V0ZXJJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ2FwcGVuZE91dGVyJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5QcmVwZW5kSW5uZXJTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ3ByZXBlbmQtaW5uZXInXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ3ByZXBlbmQtaW5uZXInXSBhcyBWTm9kZVtdKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXBlbmRJbm5lckljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbigncHJlcGVuZElubmVyJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ3ByZXBlbmQnLCAnaW5uZXInLCBzbG90KVxuICAgIH0sXG4gICAgZ2VuSWNvblNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1snYXBwZW5kJ10pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzWydhcHBlbmQnXSBhcyBWTm9kZVtdKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdpbm5lcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5JbnB1dFNsb3QgKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbklucHV0U2xvdC5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IHByZXBlbmQgPSB0aGlzLmdlblByZXBlbmRJbm5lclNsb3QoKVxuXG4gICAgICBpZiAocHJlcGVuZCkge1xuICAgICAgICBpbnB1dC5jaGlsZHJlbiA9IGlucHV0LmNoaWxkcmVuIHx8IFtdXG4gICAgICAgIGlucHV0LmNoaWxkcmVuLnVuc2hpZnQocHJlcGVuZClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBnZW5DbGVhckljb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmNsZWFyYWJsZSkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuaXNEaXJ0eSA/IHVuZGVmaW5lZCA6IHsgYXR0cnM6IHsgZGlzYWJsZWQ6IHRydWUgfSB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdpbm5lcicsIFtcbiAgICAgICAgdGhpcy5nZW5JY29uKCdjbGVhcicsIHRoaXMuY2xlYXJhYmxlQ2FsbGJhY2ssIGRhdGEpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkNvdW50ZXIgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0NvdW50ZXIpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuY291bnRlciA9PT0gdHJ1ZSA/IHRoaXMuYXR0cnMkLm1heGxlbmd0aCA6IHRoaXMuY291bnRlclxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWQ291bnRlciwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICBtYXgsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuY29tcHV0ZWRDb3VudGVyVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2VuQ29udHJvbCAoKSB7XG4gICAgICByZXR1cm4gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5Db250cm9sLmNhbGwodGhpcylcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuRmllbGRzZXQoKSxcbiAgICAgICAgdGhpcy5nZW5UZXh0RmllbGRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuQ2xlYXJJY29uKCksXG4gICAgICAgIHRoaXMuZ2VuSWNvblNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzcygpLFxuICAgICAgXVxuICAgIH0sXG4gICAgZ2VuRmllbGRzZXQgKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFt0aGlzLmdlbkxlZ2VuZCgpXSlcbiAgICB9LFxuICAgIGdlbkxhYmVsICgpIHtcbiAgICAgIGlmICghdGhpcy5zaG93TGFiZWwpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGZvY3VzZWQ6ICF0aGlzLmlzU2luZ2xlICYmICh0aGlzLmlzRm9jdXNlZCB8fCAhIXRoaXMudmFsaWRhdGlvblN0YXRlKSxcbiAgICAgICAgICBmb3I6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBsZWZ0OiB0aGlzLmxhYmVsUG9zaXRpb24ubGVmdCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICByaWdodDogdGhpcy5sYWJlbFBvc2l0aW9uLnJpZ2h0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxhYmVsVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMYWJlbCwgZGF0YSwgdGhpcy4kc2xvdHMubGFiZWwgfHwgdGhpcy5sYWJlbClcbiAgICB9LFxuICAgIGdlbkxlZ2VuZCAoKSB7XG4gICAgICBjb25zdCB3aWR0aCA9ICF0aGlzLnNpbmdsZUxpbmUgJiYgKHRoaXMubGFiZWxWYWx1ZSB8fCB0aGlzLmlzRGlydHkpID8gdGhpcy5sYWJlbFdpZHRoIDogMFxuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogJyYjODIwMzsnIH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnbGVnZW5kJywge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiAhdGhpcy5pc1NpbmdsZSA/IGNvbnZlcnRUb1VuaXQod2lkdGgpIDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSwgW3NwYW5dKVxuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5saXN0ZW5lcnMkKVxuICAgICAgZGVsZXRlIGxpc3RlbmVyc1snY2hhbmdlJ10gLy8gQ2hhbmdlIHNob3VsZCBub3QgYmUgYm91bmQgZXh0ZXJuYWxseVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB2YWx1ZTogKHRoaXMudHlwZSA9PT0gJ251bWJlcicgJiYgT2JqZWN0LmlzKHRoaXMubGF6eVZhbHVlLCAtMCkpID8gJy0wJyA6IHRoaXMubGF6eVZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLnRoaXMuYXR0cnMkLFxuICAgICAgICAgIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpZDogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIHJlYWRvbmx5OiB0aGlzLmlzUmVhZG9ubHksXG4gICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICB9LFxuICAgICAgICBvbjogT2JqZWN0LmFzc2lnbihsaXN0ZW5lcnMsIHtcbiAgICAgICAgICBibHVyOiB0aGlzLm9uQmx1cixcbiAgICAgICAgICBpbnB1dDogdGhpcy5vbklucHV0LFxuICAgICAgICAgIGZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIH0pLFxuICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZXMgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dEZXRhaWxzKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBtZXNzYWdlc05vZGUgPSBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbk1lc3NhZ2VzLmNhbGwodGhpcylcbiAgICAgIGNvbnN0IGNvdW50ZXJOb2RlID0gdGhpcy5nZW5Db3VudGVyKClcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRleHQtZmllbGRfX2RldGFpbHMnLFxuICAgICAgfSwgW1xuICAgICAgICBtZXNzYWdlc05vZGUsXG4gICAgICAgIGNvdW50ZXJOb2RlLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlblRleHRGaWVsZFNsb3QgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRleHQtZmllbGRfX3Nsb3QnLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLmdlbkxhYmVsKCksXG4gICAgICAgIHRoaXMucHJlZml4ID8gdGhpcy5nZW5BZmZpeCgncHJlZml4JykgOiBudWxsLFxuICAgICAgICB0aGlzLmdlbklucHV0KCksXG4gICAgICAgIHRoaXMuc3VmZml4ID8gdGhpcy5nZW5BZmZpeCgnc3VmZml4JykgOiBudWxsLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkFmZml4ICh0eXBlOiAncHJlZml4JyB8ICdzdWZmaXgnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzczogYHYtdGV4dC1maWVsZF9fJHt0eXBlfWAsXG4gICAgICAgIHJlZjogdHlwZSxcbiAgICAgIH0sIHRoaXNbdHlwZV0pXG4gICAgfSxcbiAgICBvbkJsdXIgKGU/OiBFdmVudCkge1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZVxuICAgICAgZSAmJiB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLiRlbWl0KCdibHVyJywgZSkpXG4gICAgfSxcbiAgICBvbkNsaWNrICgpIHtcbiAgICAgIGlmICh0aGlzLmlzRm9jdXNlZCB8fCB0aGlzLmlzRGlzYWJsZWQgfHwgIXRoaXMuJHJlZnMuaW5wdXQpIHJldHVyblxuXG4gICAgICB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICB9LFxuICAgIG9uRm9jdXMgKGU/OiBFdmVudCkge1xuICAgICAgaWYgKCF0aGlzLiRyZWZzLmlucHV0KSByZXR1cm5cblxuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuJHJlZnMuaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZVxuICAgICAgICBlICYmIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uSW5wdXQgKGU6IEV2ZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgIHRoaXMuYmFkSW5wdXQgPSB0YXJnZXQudmFsaWRpdHkgJiYgdGFyZ2V0LnZhbGlkaXR5LmJhZElucHV0XG4gICAgfSxcbiAgICBvbktleURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyKSB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmludGVybmFsVmFsdWUpXG5cbiAgICAgIHRoaXMuJGVtaXQoJ2tleWRvd24nLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZURvd24gKGU6IEV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IGlucHV0IGZyb20gYmVpbmcgYmx1cnJlZFxuICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLiRyZWZzLmlucHV0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIFZJbnB1dC5vcHRpb25zLm1ldGhvZHMub25Nb3VzZURvd24uY2FsbCh0aGlzLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZVVwIChlOiBFdmVudCkge1xuICAgICAgaWYgKHRoaXMuaGFzTW91c2VEb3duKSB0aGlzLmZvY3VzKClcblxuICAgICAgVklucHV0Lm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlVXAuY2FsbCh0aGlzLCBlKVxuICAgIH0sXG4gICAgc2V0TGFiZWxXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQpIHJldHVyblxuXG4gICAgICB0aGlzLmxhYmVsV2lkdGggPSB0aGlzLiRyZWZzLmxhYmVsXG4gICAgICAgID8gTWF0aC5taW4odGhpcy4kcmVmcy5sYWJlbC5zY3JvbGxXaWR0aCAqIDAuNzUgKyA2LCAodGhpcy4kZWwgYXMgSFRNTEVsZW1lbnQpLm9mZnNldFdpZHRoIC0gMjQpXG4gICAgICAgIDogMFxuICAgIH0sXG4gICAgc2V0UHJlZml4V2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLiRyZWZzLnByZWZpeCkgcmV0dXJuXG5cbiAgICAgIHRoaXMucHJlZml4V2lkdGggPSB0aGlzLiRyZWZzLnByZWZpeC5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgc2V0UHJlcGVuZFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCB8fCAhdGhpcy4kcmVmc1sncHJlcGVuZC1pbm5lciddKSByZXR1cm5cblxuICAgICAgdGhpcy5wcmVwZW5kV2lkdGggPSB0aGlzLiRyZWZzWydwcmVwZW5kLWlubmVyJ10ub2Zmc2V0V2lkdGhcbiAgICB9LFxuICAgIHRyeUF1dG9mb2N1cyAoKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmF1dG9mb2N1cyB8fFxuICAgICAgICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICF0aGlzLiRyZWZzLmlucHV0IHx8XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuJHJlZnMuaW5wdXRcbiAgICAgICkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgdXBkYXRlVmFsdWUgKHZhbDogYm9vbGVhbikge1xuICAgICAgLy8gU2V0cyB2YWxpZGF0aW9uU3RhdGUgZnJvbSB2YWxpZGF0YWJsZVxuICAgICAgdGhpcy5oYXNDb2xvciA9IHZhbFxuXG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsVmFsdWUgIT09IHRoaXMubGF6eVZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMubGF6eVZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZQcm9ncmVzc0xpbmVhciBmcm9tICcuL1ZQcm9ncmVzc0xpbmVhcidcblxuZXhwb3J0IHsgVlByb2dyZXNzTGluZWFyIH1cbmV4cG9ydCBkZWZhdWx0IFZQcm9ncmVzc0xpbmVhclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IgfSBmcm9tICd2dWUvdHlwZXMvb3B0aW9ucydcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICdjb21wYXJhYmxlJyxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZUNvbXBhcmF0b3I6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogZGVlcEVxdWFsLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjx0eXBlb2YgZGVlcEVxdWFsPixcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WTWVudS5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBWVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL1ZUaGVtZVByb3ZpZGVyJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBBY3RpdmF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvYWN0aXZhdGFibGUnXG5pbXBvcnQgRGVsYXlhYmxlIGZyb20gJy4uLy4uL21peGlucy9kZWxheWFibGUnXG5pbXBvcnQgRGVwZW5kZW50IGZyb20gJy4uLy4uL21peGlucy9kZXBlbmRlbnQnXG5pbXBvcnQgRGV0YWNoYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZGV0YWNoYWJsZSdcbmltcG9ydCBNZW51YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvbWVudWFibGUnXG5pbXBvcnQgUmV0dXJuYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcmV0dXJuYWJsZSdcbmltcG9ydCBSb3VuZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdW5kYWJsZSdcbmltcG9ydCBUb2dnbGVhYmxlIGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZSdcbmltcG9ydCBSZXNpemUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IHJlbW92ZWQgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5pbXBvcnQge1xuICBjb252ZXJ0VG9Vbml0LFxuICBrZXlDb2Rlcyxcbn0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFZOb2RlRGlyZWN0aXZlLCBWTm9kZURhdGEgfSBmcm9tICd2dWUnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIERlcGVuZGVudCxcbiAgRGVsYXlhYmxlLFxuICBEZXRhY2hhYmxlLFxuICBNZW51YWJsZSxcbiAgUmV0dXJuYWJsZSxcbiAgUm91bmRhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBUaGVtZWFibGVcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWVudScsXG5cbiAgcHJvdmlkZSAoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNJbk1lbnU6IHRydWUsXG4gICAgICAvLyBQYXNzIHRoZW1lIHRocm91Z2ggdG8gZGVmYXVsdCBzbG90XG4gICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICB9XG4gIH0sXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIENsaWNrT3V0c2lkZSxcbiAgICBSZXNpemUsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhdXRvOiBCb29sZWFuLFxuICAgIGNsb3NlT25DbGljazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBjbG9zZU9uQ29udGVudENsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGRpc2FibGVLZXlzOiBCb29sZWFuLFxuICAgIG1heEhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICdhdXRvJyxcbiAgICB9LFxuICAgIG9mZnNldFg6IEJvb2xlYW4sXG4gICAgb2Zmc2V0WTogQm9vbGVhbixcbiAgICBvcGVuT25DbGljazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBvcGVuT25Ib3ZlcjogQm9vbGVhbixcbiAgICBvcmlnaW46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgbGVmdCcsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICd2LW1lbnUtdHJhbnNpdGlvbicsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FsY3VsYXRlZFRvcEF1dG86IDAsXG4gICAgICBkZWZhdWx0T2Zmc2V0OiA4LFxuICAgICAgaGFzSnVzdEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgbGlzdEluZGV4OiAtMSxcbiAgICAgIHJlc2l6ZVRpbWVvdXQ6IDAsXG4gICAgICBzZWxlY3RlZEluZGV4OiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICB0aWxlczogW10gYXMgSFRNTEVsZW1lbnRbXSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3RpdmVUaWxlICgpOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleF1cbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRMZWZ0ICgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgbWVudVdpZHRoID0gTWF0aC5tYXgodGhpcy5kaW1lbnNpb25zLmNvbnRlbnQud2lkdGgsIHBhcnNlRmxvYXQodGhpcy5jYWxjdWxhdGVkTWluV2lkdGgpKVxuXG4gICAgICBpZiAoIXRoaXMuYXV0bykgcmV0dXJuIHRoaXMuY2FsY0xlZnQobWVudVdpZHRoKSB8fCAnMCdcblxuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5jYWxjWE92ZXJmbG93KHRoaXMuY2FsY0xlZnRBdXRvKCksIG1lbnVXaWR0aCkpIHx8ICcwJ1xuICAgIH0sXG4gICAgY2FsY3VsYXRlZE1heEhlaWdodCAoKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYXV0b1xuICAgICAgICA/ICcyMDBweCdcbiAgICAgICAgOiBjb252ZXJ0VG9Vbml0KHRoaXMubWF4SGVpZ2h0KVxuXG4gICAgICByZXR1cm4gaGVpZ2h0IHx8ICcwJ1xuICAgIH0sXG4gICAgY2FsY3VsYXRlZE1heFdpZHRoICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5tYXhXaWR0aCkgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWluV2lkdGggKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5taW5XaWR0aCkge1xuICAgICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLm1pbldpZHRoKSB8fCAnMCdcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWluV2lkdGggPSBNYXRoLm1pbihcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvci53aWR0aCArXG4gICAgICAgIE51bWJlcih0aGlzLm51ZGdlV2lkdGgpICtcbiAgICAgICAgKHRoaXMuYXV0byA/IDE2IDogMCksXG4gICAgICAgIE1hdGgubWF4KHRoaXMucGFnZVdpZHRoIC0gMjQsIDApXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRNYXhXaWR0aCA9IGlzTmFOKHBhcnNlSW50KHRoaXMuY2FsY3VsYXRlZE1heFdpZHRoKSlcbiAgICAgICAgPyBtaW5XaWR0aFxuICAgICAgICA6IHBhcnNlSW50KHRoaXMuY2FsY3VsYXRlZE1heFdpZHRoKVxuXG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdChNYXRoLm1pbihcbiAgICAgICAgY2FsY3VsYXRlZE1heFdpZHRoLFxuICAgICAgICBtaW5XaWR0aFxuICAgICAgKSkgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkVG9wICgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgdG9wID0gIXRoaXMuYXV0b1xuICAgICAgICA/IHRoaXMuY2FsY1RvcCgpXG4gICAgICAgIDogY29udmVydFRvVW5pdCh0aGlzLmNhbGNZT3ZlcmZsb3codGhpcy5jYWxjdWxhdGVkVG9wQXV0bykpXG5cbiAgICAgIHJldHVybiB0b3AgfHwgJzAnXG4gICAgfSxcbiAgICBoYXNDbGlja2FibGVUaWxlcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnRpbGVzLmZpbmQodGlsZSA9PiB0aWxlLnRhYkluZGV4ID4gLTEpKVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLmNhbGN1bGF0ZWRNYXhIZWlnaHQsXG4gICAgICAgIG1pbldpZHRoOiB0aGlzLmNhbGN1bGF0ZWRNaW5XaWR0aCxcbiAgICAgICAgbWF4V2lkdGg6IHRoaXMuY2FsY3VsYXRlZE1heFdpZHRoLFxuICAgICAgICB0b3A6IHRoaXMuY2FsY3VsYXRlZFRvcCxcbiAgICAgICAgbGVmdDogdGhpcy5jYWxjdWxhdGVkTGVmdCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiB0aGlzLm9yaWdpbixcbiAgICAgICAgekluZGV4OiB0aGlzLnpJbmRleCB8fCB0aGlzLmFjdGl2ZVpJbmRleCxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXNBY3RpdmUgKHZhbCkge1xuICAgICAgaWYgKCF2YWwpIHRoaXMubGlzdEluZGV4ID0gLTFcbiAgICB9LFxuICAgIGlzQ29udGVudEFjdGl2ZSAodmFsKSB7XG4gICAgICB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdmFsXG4gICAgfSxcbiAgICBsaXN0SW5kZXggKG5leHQsIHByZXYpIHtcbiAgICAgIGlmIChuZXh0IGluIHRoaXMudGlsZXMpIHtcbiAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbbmV4dF1cbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd2LWxpc3QtaXRlbS0taGlnaGxpZ2h0ZWQnKVxuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc2Nyb2xsVG9wID0gdGlsZS5vZmZzZXRUb3AgLSB0aWxlLmNsaWVudEhlaWdodFxuICAgICAgfVxuXG4gICAgICBwcmV2IGluIHRoaXMudGlsZXMgJiZcbiAgICAgICAgdGhpcy50aWxlc1twcmV2XS5jbGFzc0xpc3QucmVtb3ZlKCd2LWxpc3QtaXRlbS0taGlnaGxpZ2h0ZWQnKVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2Z1bGwtd2lkdGgnKSkge1xuICAgICAgcmVtb3ZlZCgnZnVsbC13aWR0aCcsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgJiYgdGhpcy5jYWxsQWN0aXZhdGUoKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhY3RpdmF0ZSAoKSB7XG4gICAgICAvLyBVcGRhdGUgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMgb2YgbWVudVxuICAgICAgLy8gYW5kIGl0cyBhY3RpdmF0b3JcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gICAgICAvLyBTdGFydCB0aGUgdHJhbnNpdGlvblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgLy8gT25jZSB0cmFuc2l0aW9uaW5nLCBjYWxjdWxhdGUgc2Nyb2xsIGFuZCB0b3AgcG9zaXRpb25cbiAgICAgICAgdGhpcy5zdGFydFRyYW5zaXRpb24oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZWRUb3BBdXRvID0gdGhpcy5jYWxjVG9wQXV0bygpXG4gICAgICAgICAgICB0aGlzLmF1dG8gJiYgKHRoaXMuJHJlZnMuY29udGVudC5zY3JvbGxUb3AgPSB0aGlzLmNhbGNTY3JvbGxQb3NpdGlvbigpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjYWxjU2Nyb2xsUG9zaXRpb24gKCkge1xuICAgICAgY29uc3QgJGVsID0gdGhpcy4kcmVmcy5jb250ZW50XG4gICAgICBjb25zdCBhY3RpdmVUaWxlID0gJGVsLnF1ZXJ5U2VsZWN0b3IoJy52LWxpc3QtaXRlbS0tYWN0aXZlJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGNvbnN0IG1heFNjcm9sbFRvcCA9ICRlbC5zY3JvbGxIZWlnaHQgLSAkZWwub2Zmc2V0SGVpZ2h0XG5cbiAgICAgIHJldHVybiBhY3RpdmVUaWxlXG4gICAgICAgID8gTWF0aC5taW4obWF4U2Nyb2xsVG9wLCBNYXRoLm1heCgwLCBhY3RpdmVUaWxlLm9mZnNldFRvcCAtICRlbC5vZmZzZXRIZWlnaHQgLyAyICsgYWN0aXZlVGlsZS5vZmZzZXRIZWlnaHQgLyAyKSlcbiAgICAgICAgOiAkZWwuc2Nyb2xsVG9wXG4gICAgfSxcbiAgICBjYWxjTGVmdEF1dG8gKCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3IubGVmdCAtIHRoaXMuZGVmYXVsdE9mZnNldCAqIDIpXG4gICAgfSxcbiAgICBjYWxjVG9wQXV0byAoKSB7XG4gICAgICBjb25zdCAkZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSAkZWwucXVlcnlTZWxlY3RvcignLnYtbGlzdC1pdGVtLS1hY3RpdmUnKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcblxuICAgICAgaWYgKCFhY3RpdmVUaWxlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub2Zmc2V0WSB8fCAhYWN0aXZlVGlsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wdXRlZFRvcFxuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBBcnJheS5mcm9tKHRoaXMudGlsZXMpLmluZGV4T2YoYWN0aXZlVGlsZSlcblxuICAgICAgY29uc3QgdGlsZURpc3RhbmNlRnJvbU1lbnVUb3AgPSBhY3RpdmVUaWxlLm9mZnNldFRvcCAtIHRoaXMuY2FsY1Njcm9sbFBvc2l0aW9uKClcbiAgICAgIGNvbnN0IGZpcnN0VGlsZU9mZnNldFRvcCA9ICgkZWwucXVlcnlTZWxlY3RvcignLnYtbGlzdC1pdGVtJykgYXMgSFRNTEVsZW1lbnQpLm9mZnNldFRvcFxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlZFRvcCAtIHRpbGVEaXN0YW5jZUZyb21NZW51VG9wIC0gZmlyc3RUaWxlT2Zmc2V0VG9wIC0gMVxuICAgIH0sXG4gICAgY2hhbmdlTGlzdEluZGV4IChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAvLyBGb3IgaW5maW5pdGUgc2Nyb2xsIGFuZCBhdXRvY29tcGxldGUsIHJlLWV2YWx1YXRlIGNoaWxkcmVuXG4gICAgICB0aGlzLmdldFRpbGVzKClcblxuICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8ICF0aGlzLmhhc0NsaWNrYWJsZVRpbGVzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLnRhYikge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZG93bikge1xuICAgICAgICB0aGlzLm5leHRUaWxlKClcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy51cCkge1xuICAgICAgICB0aGlzLnByZXZUaWxlKClcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lbnRlciAmJiB0aGlzLmxpc3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleF0uY2xpY2soKVxuICAgICAgfSBlbHNlIHsgcmV0dXJuIH1cbiAgICAgIC8vIE9uZSBvZiB0aGUgY29uZGl0aW9ucyB3YXMgbWV0LCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uICgjMjk4OClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gICAgY2xvc2VDb25kaXRpb25hbCAoZTogRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cbiAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlICYmXG4gICAgICAgICF0aGlzLl9pc0Rlc3Ryb3llZCAmJlxuICAgICAgICB0aGlzLmNsb3NlT25DbGljayAmJlxuICAgICAgICAhdGhpcy4kcmVmcy5jb250ZW50LmNvbnRhaW5zKHRhcmdldClcbiAgICB9LFxuICAgIGdlbkFjdGl2YXRvckF0dHJpYnV0ZXMgKCkge1xuICAgICAgY29uc3QgYXR0cmlidXRlcyA9IEFjdGl2YXRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JBdHRyaWJ1dGVzLmNhbGwodGhpcylcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlVGlsZSAmJiB0aGlzLmFjdGl2ZVRpbGUuaWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLFxuICAgICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiB0aGlzLmFjdGl2ZVRpbGUuaWQsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgICB9LFxuICAgIGdlbkFjdGl2YXRvckxpc3RlbmVycyAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBNZW51YWJsZS5vcHRpb25zLm1ldGhvZHMuZ2VuQWN0aXZhdG9yTGlzdGVuZXJzLmNhbGwodGhpcylcblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVLZXlzKSB7XG4gICAgICAgIGxpc3RlbmVycy5rZXlkb3duID0gdGhpcy5vbktleURvd25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVyc1xuICAgIH0sXG4gICAgZ2VuVHJhbnNpdGlvbiAoKTogVk5vZGUge1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2VuQ29udGVudCgpXG5cbiAgICAgIGlmICghdGhpcy50cmFuc2l0aW9uKSByZXR1cm4gY29udGVudFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLnRyYW5zaXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9LCBbY29udGVudF0pXG4gICAgfSxcbiAgICBnZW5EaXJlY3RpdmVzICgpOiBWTm9kZURpcmVjdGl2ZVtdIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZXM6IFZOb2RlRGlyZWN0aXZlW10gPSBbe1xuICAgICAgICBuYW1lOiAnc2hvdycsXG4gICAgICAgIHZhbHVlOiB0aGlzLmlzQ29udGVudEFjdGl2ZSxcbiAgICAgIH1dXG5cbiAgICAgIC8vIERvIG5vdCBhZGQgY2xpY2sgb3V0c2lkZSBmb3IgaG92ZXIgbWVudVxuICAgICAgaWYgKCF0aGlzLm9wZW5PbkhvdmVyICYmIHRoaXMuY2xvc2VPbkNsaWNrKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ2NsaWNrLW91dHNpZGUnLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7IHRoaXMuaXNBY3RpdmUgPSBmYWxzZSB9LFxuICAgICAgICAgICAgY2xvc2VDb25kaXRpb25hbDogdGhpcy5jbG9zZUNvbmRpdGlvbmFsLFxuICAgICAgICAgICAgaW5jbHVkZTogKCkgPT4gW3RoaXMuJGVsLCAuLi50aGlzLmdldE9wZW5EZXBlbmRlbnRFbGVtZW50cygpXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0aXZlc1xuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKTogVk5vZGUge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAuLi50aGlzLmdldFNjb3BlSWRBdHRycygpLFxuICAgICAgICAgIHJvbGU6ICdyb2xlJyBpbiB0aGlzLiRhdHRycyA/IHRoaXMuJGF0dHJzLnJvbGUgOiAnbWVudScsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1tZW51X19jb250ZW50JyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAuLi50aGlzLnJvb3RUaGVtZUNsYXNzZXMsXG4gICAgICAgICAgLi4udGhpcy5yb3VuZGVkQ2xhc3NlcyxcbiAgICAgICAgICAndi1tZW51X19jb250ZW50LS1hdXRvJzogdGhpcy5hdXRvLFxuICAgICAgICAgICd2LW1lbnVfX2NvbnRlbnQtLWZpeGVkJzogdGhpcy5hY3RpdmF0b3JGaXhlZCxcbiAgICAgICAgICBtZW51YWJsZV9fY29udGVudF9fYWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICAgIFt0aGlzLmNvbnRlbnRDbGFzcy50cmltKCldOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICAgIGRpcmVjdGl2ZXM6IHRoaXMuZ2VuRGlyZWN0aXZlcygpLFxuICAgICAgICByZWY6ICdjb250ZW50JyxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudFxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSkgcmV0dXJuXG4gICAgICAgICAgICBpZiAodGhpcy5jbG9zZU9uQ29udGVudENsaWNrKSB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGtleWRvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICB9LFxuICAgICAgfSBhcyBWTm9kZURhdGFcblxuICAgICAgaWYgKHRoaXMuJGxpc3RlbmVycy5zY3JvbGwpIHtcbiAgICAgICAgb3B0aW9ucy5vbiA9IG9wdGlvbnMub24gfHwge31cbiAgICAgICAgb3B0aW9ucy5vbi5zY3JvbGwgPSB0aGlzLiRsaXN0ZW5lcnMuc2Nyb2xsXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wZW5PbkhvdmVyKSB7XG4gICAgICAgIG9wdGlvbnMub24gPSBvcHRpb25zLm9uIHx8IHt9XG4gICAgICAgIG9wdGlvbnMub24ubW91c2VlbnRlciA9IHRoaXMubW91c2VFbnRlckhhbmRsZXJcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3Blbk9uSG92ZXIpIHtcbiAgICAgICAgb3B0aW9ucy5vbiA9IG9wdGlvbnMub24gfHwge31cbiAgICAgICAgb3B0aW9ucy5vbi5tb3VzZWxlYXZlID0gdGhpcy5tb3VzZUxlYXZlSGFuZGxlclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywgb3B0aW9ucywgdGhpcy5nZXRDb250ZW50U2xvdCgpKVxuICAgIH0sXG4gICAgZ2V0VGlsZXMgKCkge1xuICAgICAgaWYgKCF0aGlzLiRyZWZzLmNvbnRlbnQpIHJldHVyblxuXG4gICAgICB0aGlzLnRpbGVzID0gQXJyYXkuZnJvbSh0aGlzLiRyZWZzLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLnYtbGlzdC1pdGVtJykpXG4gICAgfSxcbiAgICBtb3VzZUVudGVySGFuZGxlciAoKSB7XG4gICAgICB0aGlzLnJ1bkRlbGF5KCdvcGVuJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYXNKdXN0Rm9jdXNlZCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5oYXNKdXN0Rm9jdXNlZCA9IHRydWVcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBtb3VzZUxlYXZlSGFuZGxlciAoZTogTW91c2VFdmVudCkge1xuICAgICAgLy8gUHJldmVudCBhY2NpZGVudGFsIHJlLWFjdGl2YXRpb25cbiAgICAgIHRoaXMucnVuRGVsYXkoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kcmVmcy5jb250ZW50LmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHJldHVyblxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5jYWxsRGVhY3RpdmF0ZSgpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgbmV4dFRpbGUgKCkge1xuICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXggKyAxXVxuXG4gICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5saXN0SW5kZXggPSAtMVxuICAgICAgICB0aGlzLm5leHRUaWxlKClcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0SW5kZXgrK1xuICAgICAgaWYgKHRpbGUudGFiSW5kZXggPT09IC0xKSB0aGlzLm5leHRUaWxlKClcbiAgICB9LFxuICAgIHByZXZUaWxlICgpIHtcbiAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4IC0gMV1cblxuICAgICAgaWYgKCF0aWxlKSB7XG4gICAgICAgIGlmICghdGhpcy50aWxlcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICAgIHRoaXMubGlzdEluZGV4ID0gdGhpcy50aWxlcy5sZW5ndGhcbiAgICAgICAgdGhpcy5wcmV2VGlsZSgpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdEluZGV4LS1cbiAgICAgIGlmICh0aWxlLnRhYkluZGV4ID09PSAtMSkgdGhpcy5wcmV2VGlsZSgpXG4gICAgfSxcbiAgICBvbktleURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVzYykge1xuICAgICAgICAvLyBXYWl0IGZvciBkZXBlbmRlbnQgZWxlbWVudHMgdG8gY2xvc2UgZmlyc3RcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuaXNBY3RpdmUgPSBmYWxzZSB9KVxuICAgICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IGFjdGl2YXRvciAmJiBhY3RpdmF0b3IuZm9jdXMoKSlcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF0aGlzLmlzQWN0aXZlICYmXG4gICAgICAgIFtrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93bl0uaW5jbHVkZXMoZS5rZXlDb2RlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIEFsbG93IGZvciBpc0FjdGl2ZSB3YXRjaGVyIHRvIGdlbmVyYXRlIHRpbGUgbGlzdFxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5jaGFuZ2VMaXN0SW5kZXgoZSkpXG4gICAgfSxcbiAgICBvblJlc2l6ZSAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHJldHVyblxuXG4gICAgICAvLyBBY2NvdW50IGZvciBzY3JlZW4gcmVzaXplXG4gICAgICAvLyBhbmQgb3JpZW50YXRpb24gY2hhbmdlXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0V2lkdGhcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG5cbiAgICAgIC8vIFdoZW4gcmVzaXppbmcgdG8gYSBzbWFsbGVyIHdpZHRoXG4gICAgICAvLyBjb250ZW50IHdpZHRoIGlzIGV2YWx1YXRlZCBiZWZvcmVcbiAgICAgIC8vIHRoZSBuZXcgYWN0aXZhdG9yIHdpZHRoIGhhcyBiZWVuXG4gICAgICAvLyBzZXQsIGNhdXNpbmcgaXQgdG8gbm90IHNpemUgcHJvcGVybHlcbiAgICAgIC8vIGhhY2t5IGJ1dCB3aWxsIHJldmlzaXQgaW4gdGhlIGZ1dHVyZVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dClcbiAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMudXBkYXRlRGltZW5zaW9ucywgMTAwKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbWVudScsXG4gICAgICBjbGFzczoge1xuICAgICAgICAndi1tZW51LS1hdHRhY2hlZCc6XG4gICAgICAgICAgdGhpcy5hdHRhY2ggPT09ICcnIHx8XG4gICAgICAgICAgdGhpcy5hdHRhY2ggPT09IHRydWUgfHxcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gJ2F0dGFjaCcsXG4gICAgICB9LFxuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgYXJnOiAnNTAwJyxcbiAgICAgICAgbmFtZTogJ3Jlc2l6ZScsXG4gICAgICAgIHZhbHVlOiB0aGlzLm9uUmVzaXplLFxuICAgICAgfV0sXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIFtcbiAgICAgICF0aGlzLmFjdGl2YXRvciAmJiB0aGlzLmdlbkFjdGl2YXRvcigpLFxuICAgICAgdGhpcy5zaG93TGF6eUNvbnRlbnQoKCkgPT4gW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZUaGVtZVByb3ZpZGVyLCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJvb3Q6IHRydWUsXG4gICAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICB9LFxuICAgICAgICB9LCBbdGhpcy5nZW5UcmFuc2l0aW9uKCldKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBWTWVudSBmcm9tICcuL1ZNZW51J1xuXG5leHBvcnQgeyBWTWVudSB9XG5leHBvcnQgZGVmYXVsdCBWTWVudVxuIiwiLy8gTWl4aW5zXG5pbXBvcnQgUG9zaXRpb25hYmxlIGZyb20gJy4uL3Bvc2l0aW9uYWJsZSdcbmltcG9ydCBTdGFja2FibGUgZnJvbSAnLi4vc3RhY2thYmxlJ1xuaW1wb3J0IEFjdGl2YXRhYmxlIGZyb20gJy4uL2FjdGl2YXRhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMsIHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLy8gVHlwZXNcbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFN0YWNrYWJsZSxcbiAgUG9zaXRpb25hYmxlLFxuICBBY3RpdmF0YWJsZVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgYXR0YWNoOiBib29sZWFuIHwgc3RyaW5nIHwgRWxlbWVudFxuICBvZmZzZXRZOiBib29sZWFuXG4gIG9mZnNldFg6IGJvb2xlYW5cbiAgJHJlZnM6IHtcbiAgICBjb250ZW50OiBIVE1MRWxlbWVudFxuICAgIGFjdGl2YXRvcjogSFRNTEVsZW1lbnRcbiAgfVxufVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAnbWVudWFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgYWxsb3dPdmVyZmxvdzogQm9vbGVhbixcbiAgICBsaWdodDogQm9vbGVhbixcbiAgICBkYXJrOiBCb29sZWFuLFxuICAgIG1heFdpZHRoOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgbWluV2lkdGg6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgbnVkZ2VCb3R0b206IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VMZWZ0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG51ZGdlUmlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VUb3A6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VXaWR0aDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBvZmZzZXRPdmVyZmxvdzogQm9vbGVhbixcbiAgICBvcGVuT25DbGljazogQm9vbGVhbixcbiAgICBwb3NpdGlvblg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBwb3NpdGlvblk6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBhYnNvbHV0ZVg6IDAsXG4gICAgYWJzb2x1dGVZOiAwLFxuICAgIGFjdGl2YXRlZEJ5OiBudWxsIGFzIEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBhY3RpdmF0b3JGaXhlZDogZmFsc2UsXG4gICAgZGltZW5zaW9uczoge1xuICAgICAgYWN0aXZhdG9yOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0VG9wOiAwLFxuICAgICAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgICAgIG9mZnNldExlZnQ6IDAsXG4gICAgICB9LFxuICAgICAgY29udGVudDoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGhhc0p1c3RGb2N1c2VkOiBmYWxzZSxcbiAgICBoYXNXaW5kb3c6IGZhbHNlLFxuICAgIGlucHV0QWN0aXZhdG9yOiBmYWxzZSxcbiAgICBpc0NvbnRlbnRBY3RpdmU6IGZhbHNlLFxuICAgIHBhZ2VXaWR0aDogMCxcbiAgICBwYWdlWU9mZnNldDogMCxcbiAgICBzdGFja0NsYXNzOiAndi1tZW51X19jb250ZW50LS1hY3RpdmUnLFxuICAgIHN0YWNrTWluWkluZGV4OiA2LFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkTGVmdCAoKSB7XG4gICAgICBjb25zdCBhID0gdGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvclxuICAgICAgY29uc3QgYyA9IHRoaXMuZGltZW5zaW9ucy5jb250ZW50XG4gICAgICBjb25zdCBhY3RpdmF0b3JMZWZ0ID0gKHRoaXMuYXR0YWNoICE9PSBmYWxzZSA/IGEub2Zmc2V0TGVmdCA6IGEubGVmdCkgfHwgMFxuICAgICAgY29uc3QgbWluV2lkdGggPSBNYXRoLm1heChhLndpZHRoLCBjLndpZHRoKVxuICAgICAgbGV0IGxlZnQgPSAwXG4gICAgICBsZWZ0ICs9IHRoaXMubGVmdCA/IGFjdGl2YXRvckxlZnQgLSAobWluV2lkdGggLSBhLndpZHRoKSA6IGFjdGl2YXRvckxlZnRcbiAgICAgIGlmICh0aGlzLm9mZnNldFgpIHtcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSBpc05hTihOdW1iZXIodGhpcy5tYXhXaWR0aCkpXG4gICAgICAgICAgPyBhLndpZHRoXG4gICAgICAgICAgOiBNYXRoLm1pbihhLndpZHRoLCBOdW1iZXIodGhpcy5tYXhXaWR0aCkpXG5cbiAgICAgICAgbGVmdCArPSB0aGlzLmxlZnQgPyAtbWF4V2lkdGggOiBhLndpZHRoXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5udWRnZUxlZnQpIGxlZnQgLT0gcGFyc2VJbnQodGhpcy5udWRnZUxlZnQpXG4gICAgICBpZiAodGhpcy5udWRnZVJpZ2h0KSBsZWZ0ICs9IHBhcnNlSW50KHRoaXMubnVkZ2VSaWdodClcblxuICAgICAgcmV0dXJuIGxlZnRcbiAgICB9LFxuICAgIGNvbXB1dGVkVG9wICgpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnRcbiAgICAgIGxldCB0b3AgPSAwXG5cbiAgICAgIGlmICh0aGlzLnRvcCkgdG9wICs9IGEuaGVpZ2h0IC0gYy5oZWlnaHRcbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHRvcCArPSBhLm9mZnNldFRvcFxuICAgICAgZWxzZSB0b3AgKz0gYS50b3AgKyB0aGlzLnBhZ2VZT2Zmc2V0XG4gICAgICBpZiAodGhpcy5vZmZzZXRZKSB0b3AgKz0gdGhpcy50b3AgPyAtYS5oZWlnaHQgOiBhLmhlaWdodFxuICAgICAgaWYgKHRoaXMubnVkZ2VUb3ApIHRvcCAtPSBwYXJzZUludCh0aGlzLm51ZGdlVG9wKVxuICAgICAgaWYgKHRoaXMubnVkZ2VCb3R0b20pIHRvcCArPSBwYXJzZUludCh0aGlzLm51ZGdlQm90dG9tKVxuXG4gICAgICByZXR1cm4gdG9wXG4gICAgfSxcbiAgICBoYXNBY3RpdmF0b3IgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHMuYWN0aXZhdG9yIHx8ICEhdGhpcy4kc2NvcGVkU2xvdHMuYWN0aXZhdG9yIHx8ICEhdGhpcy5hY3RpdmF0b3IgfHwgISF0aGlzLmlucHV0QWN0aXZhdG9yXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGRpc2FibGVkICh2YWwpIHtcbiAgICAgIHZhbCAmJiB0aGlzLmNhbGxEZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGlzQWN0aXZlICh2YWwpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm5cblxuICAgICAgdmFsID8gdGhpcy5jYWxsQWN0aXZhdGUoKSA6IHRoaXMuY2FsbERlYWN0aXZhdGUoKVxuICAgIH0sXG4gICAgcG9zaXRpb25YOiAndXBkYXRlRGltZW5zaW9ucycsXG4gICAgcG9zaXRpb25ZOiAndXBkYXRlRGltZW5zaW9ucycsXG4gIH0sXG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIHRoaXMuaGFzV2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYWJzb2x1dGVQb3NpdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXRUb3A6IDAsXG4gICAgICAgIG9mZnNldExlZnQ6IDAsXG4gICAgICAgIHNjcm9sbEhlaWdodDogMCxcbiAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uWSB8fCB0aGlzLmFic29sdXRlWSxcbiAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uWSB8fCB0aGlzLmFic29sdXRlWSxcbiAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvblggfHwgdGhpcy5hYnNvbHV0ZVgsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uWCB8fCB0aGlzLmFic29sdXRlWCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2YXRlICgpIHt9LFxuICAgIGNhbGNMZWZ0IChtZW51V2lkdGg6IG51bWJlcikge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5hdHRhY2ggIT09IGZhbHNlXG4gICAgICAgID8gdGhpcy5jb21wdXRlZExlZnRcbiAgICAgICAgOiB0aGlzLmNhbGNYT3ZlcmZsb3codGhpcy5jb21wdXRlZExlZnQsIG1lbnVXaWR0aCkpXG4gICAgfSxcbiAgICBjYWxjVG9wICgpIHtcbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMuYXR0YWNoICE9PSBmYWxzZVxuICAgICAgICA/IHRoaXMuY29tcHV0ZWRUb3BcbiAgICAgICAgOiB0aGlzLmNhbGNZT3ZlcmZsb3codGhpcy5jb21wdXRlZFRvcCkpXG4gICAgfSxcbiAgICBjYWxjWE92ZXJmbG93IChsZWZ0OiBudW1iZXIsIG1lbnVXaWR0aDogbnVtYmVyKSB7XG4gICAgICBjb25zdCB4T3ZlcmZsb3cgPSBsZWZ0ICsgbWVudVdpZHRoIC0gdGhpcy5wYWdlV2lkdGggKyAxMlxuXG4gICAgICBpZiAoKCF0aGlzLmxlZnQgfHwgdGhpcy5yaWdodCkgJiYgeE92ZXJmbG93ID4gMCkge1xuICAgICAgICBsZWZ0ID0gTWF0aC5tYXgobGVmdCAtIHhPdmVyZmxvdywgMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0LCAxMilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxlZnQgKyB0aGlzLmdldE9mZnNldExlZnQoKVxuICAgIH0sXG4gICAgY2FsY1lPdmVyZmxvdyAodG9wOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpXG4gICAgICBjb25zdCB0b1RvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyBkb2N1bWVudEhlaWdodFxuICAgICAgY29uc3QgYWN0aXZhdG9yID0gdGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvclxuICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IHRoaXMuZGltZW5zaW9ucy5jb250ZW50LmhlaWdodFxuICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0b3AgKyBjb250ZW50SGVpZ2h0XG4gICAgICBjb25zdCBpc092ZXJmbG93aW5nID0gdG9Ub3AgPCB0b3RhbEhlaWdodFxuXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyBib3R0b20gYW5kIG9mZnNldFxuICAgICAgLy8gVE9ETzogc2V0ICdib3R0b20nIHBvc2l0aW9uIGluc3RlYWQgb2YgJ3RvcCdcbiAgICAgIGlmIChpc092ZXJmbG93aW5nICYmXG4gICAgICAgIHRoaXMub2Zmc2V0T3ZlcmZsb3cgJiZcbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2ggcm9vbSB0byBvZmZzZXRcbiAgICAgICAgLy8gdGhlIG92ZXJmbG93LCBkb24ndCBvZmZzZXRcbiAgICAgICAgYWN0aXZhdG9yLnRvcCA+IGNvbnRlbnRIZWlnaHRcbiAgICAgICkge1xuICAgICAgICB0b3AgPSB0aGlzLnBhZ2VZT2Zmc2V0ICsgKGFjdGl2YXRvci50b3AgLSBjb250ZW50SGVpZ2h0KVxuICAgICAgLy8gSWYgb3ZlcmZsb3dpbmcgYm90dG9tXG4gICAgICB9IGVsc2UgaWYgKGlzT3ZlcmZsb3dpbmcgJiYgIXRoaXMuYWxsb3dPdmVyZmxvdykge1xuICAgICAgICB0b3AgPSB0b1RvcCAtIGNvbnRlbnRIZWlnaHQgLSAxMlxuICAgICAgLy8gSWYgb3ZlcmZsb3dpbmcgdG9wXG4gICAgICB9IGVsc2UgaWYgKHRvcCA8IHRoaXMucGFnZVlPZmZzZXQgJiYgIXRoaXMuYWxsb3dPdmVyZmxvdykge1xuICAgICAgICB0b3AgPSB0aGlzLnBhZ2VZT2Zmc2V0ICsgMTJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvcCA8IDEyID8gMTIgOiB0b3BcbiAgICB9LFxuICAgIGNhbGxBY3RpdmF0ZSAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm5cblxuICAgICAgdGhpcy5hY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBjYWxsRGVhY3RpdmF0ZSAoKSB7XG4gICAgICB0aGlzLmlzQ29udGVudEFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBjaGVja0ZvclBhZ2VZT2Zmc2V0ICgpIHtcbiAgICAgIGlmICh0aGlzLmhhc1dpbmRvdykge1xuICAgICAgICB0aGlzLnBhZ2VZT2Zmc2V0ID0gdGhpcy5hY3RpdmF0b3JGaXhlZCA/IDAgOiB0aGlzLmdldE9mZnNldFRvcCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja0FjdGl2YXRvckZpeGVkICgpIHtcbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHJldHVyblxuICAgICAgbGV0IGVsID0gdGhpcy5nZXRBY3RpdmF0b3IoKVxuICAgICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRvckZpeGVkID0gdHJ1ZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2YXRvckZpeGVkID0gZmFsc2VcbiAgICB9LFxuICAgIGRlYWN0aXZhdGUgKCkge30sXG4gICAgZ2VuQWN0aXZhdG9yTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEFjdGl2YXRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JMaXN0ZW5lcnMuY2FsbCh0aGlzKVxuXG4gICAgICBjb25zdCBvbkNsaWNrID0gbGlzdGVuZXJzLmNsaWNrXG5cbiAgICAgIGxpc3RlbmVycy5jbGljayA9IChlOiBNb3VzZUV2ZW50ICYgS2V5Ym9hcmRFdmVudCAmIEZvY3VzRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3Blbk9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrICYmIG9uQ2xpY2soZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWJzb2x1dGVYID0gZS5jbGllbnRYXG4gICAgICAgIHRoaXMuYWJzb2x1dGVZID0gZS5jbGllbnRZXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnNcbiAgICB9LFxuICAgIGdldElubmVySGVpZ2h0ICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH0sXG4gICAgZ2V0T2Zmc2V0TGVmdCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VYT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgfSxcbiAgICBnZXRPZmZzZXRUb3AgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfSxcbiAgICBnZXRSb3VuZGVkQm91bmRlZENsaWVudFJlY3QgKGVsOiBFbGVtZW50KSB7XG4gICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogTWF0aC5yb3VuZChyZWN0LnRvcCksXG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQocmVjdC5sZWZ0KSxcbiAgICAgICAgYm90dG9tOiBNYXRoLnJvdW5kKHJlY3QuYm90dG9tKSxcbiAgICAgICAgcmlnaHQ6IE1hdGgucm91bmQocmVjdC5yaWdodCksXG4gICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKHJlY3Qud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQocmVjdC5oZWlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gICAgbWVhc3VyZSAoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoIWVsIHx8ICF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0Um91bmRlZEJvdW5kZWRDbGllbnRSZWN0KGVsKVxuXG4gICAgICAvLyBBY2NvdW50IGZvciBhY3RpdmF0b3IgbWFyZ2luXG4gICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG5cbiAgICAgICAgcmVjdC5sZWZ0ID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCEpXG4gICAgICAgIHJlY3QudG9wID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luVG9wISlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlY3RcbiAgICB9LFxuICAgIHNuZWFrUGVlayAoY2I6ICgpID0+IHZvaWQpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy4kcmVmcy5jb250ZW50XG5cbiAgICAgICAgaWYgKCFlbCB8fCBlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICBjYigpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgY2IoKVxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgc3RhcnRUcmFuc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gdGhpcy5oYXNKdXN0Rm9jdXNlZCA9IHRoaXMuaXNBY3RpdmVcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KSlcbiAgICB9LFxuICAgIHVwZGF0ZURpbWVuc2lvbnMgKCkge1xuICAgICAgdGhpcy5oYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgdGhpcy5jaGVja0FjdGl2YXRvckZpeGVkKClcbiAgICAgIHRoaXMuY2hlY2tGb3JQYWdlWU9mZnNldCgpXG4gICAgICB0aGlzLnBhZ2VXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuXG4gICAgICBjb25zdCBkaW1lbnNpb25zOiBhbnkgPSB7XG4gICAgICAgIGFjdGl2YXRvcjogeyAuLi50aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yIH0sXG4gICAgICAgIGNvbnRlbnQ6IHsgLi4udGhpcy5kaW1lbnNpb25zLmNvbnRlbnQgfSxcbiAgICAgIH1cblxuICAgICAgLy8gQWN0aXZhdG9yIHNob3VsZCBhbHJlYWR5IGJlIHNob3duXG4gICAgICBpZiAoIXRoaXMuaGFzQWN0aXZhdG9yIHx8IHRoaXMuYWJzb2x1dGUpIHtcbiAgICAgICAgZGltZW5zaW9ucy5hY3RpdmF0b3IgPSB0aGlzLmFic29sdXRlUG9zaXRpb24oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYWN0aXZhdG9yID0gdGhpcy5nZXRBY3RpdmF0b3IoKVxuICAgICAgICBpZiAoIWFjdGl2YXRvcikgcmV0dXJuXG5cbiAgICAgICAgZGltZW5zaW9ucy5hY3RpdmF0b3IgPSB0aGlzLm1lYXN1cmUoYWN0aXZhdG9yKVxuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRMZWZ0ID0gYWN0aXZhdG9yLm9mZnNldExlZnRcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkge1xuICAgICAgICAgIC8vIGFjY291bnQgZm9yIGNzcyBwYWRkaW5nIGNhdXNpbmcgdGhpbmdzIHRvIG5vdCBsaW5lIHVwXG4gICAgICAgICAgLy8gdGhpcyBpcyBtb3N0bHkgZm9yIHYtYXV0b2NvbXBsZXRlLCBob3BlZnVsbHkgaXQgd29uJ3QgYnJlYWsgYW55dGhpbmdcbiAgICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRUb3AgPSBhY3RpdmF0b3Iub2Zmc2V0VG9wXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGltZW5zaW9ucy5hY3RpdmF0b3Iub2Zmc2V0VG9wID0gMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIERpc3BsYXkgYW5kIGhpZGUgdG8gZ2V0IGRpbWVuc2lvbnNcbiAgICAgIHRoaXMuc25lYWtQZWVrKCgpID0+IHtcbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50ICYmIChkaW1lbnNpb25zLmNvbnRlbnQgPSB0aGlzLm1lYXN1cmUodGhpcy4kcmVmcy5jb250ZW50KSlcblxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndHJhbnNpdGlvbmFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZTogU3RyaW5nLFxuICAgIG9yaWdpbjogU3RyaW5nLFxuICAgIHRyYW5zaXRpb246IFN0cmluZyxcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZBcHBCYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZUb29sYmFyIGZyb20gJy4uL1ZUb29sYmFyL1ZUb29sYmFyJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2Nyb2xsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBBcHBsaWNhdGlvbmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2FwcGxpY2F0aW9uYWJsZSdcbmltcG9ydCBTY3JvbGxhYmxlIGZyb20gJy4uLy4uL21peGlucy9zY3JvbGxhYmxlJ1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWVG9vbGJhcixcbiAgU2Nyb2xsYWJsZSxcbiAgU1NSQm9vdGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIEFwcGxpY2F0aW9uYWJsZSgndG9wJywgW1xuICAgICdjbGlwcGVkTGVmdCcsXG4gICAgJ2NsaXBwZWRSaWdodCcsXG4gICAgJ2NvbXB1dGVkSGVpZ2h0JyxcbiAgICAnaW52ZXJ0ZWRTY3JvbGwnLFxuICAgICdpc0V4dGVuZGVkJyxcbiAgICAnaXNQcm9taW5lbnQnLFxuICAgICd2YWx1ZScsXG4gIF0pXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWFwcC1iYXInLFxuXG4gIGRpcmVjdGl2ZXM6IHsgU2Nyb2xsIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBjbGlwcGVkTGVmdDogQm9vbGVhbixcbiAgICBjbGlwcGVkUmlnaHQ6IEJvb2xlYW4sXG4gICAgY29sbGFwc2VPblNjcm9sbDogQm9vbGVhbixcbiAgICBlbGV2YXRlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgZmFkZUltZ09uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGhpZGVPblNjcm9sbDogQm9vbGVhbixcbiAgICBpbnZlcnRlZFNjcm9sbDogQm9vbGVhbixcbiAgICBzY3JvbGxPZmZTY3JlZW46IEJvb2xlYW4sXG4gICAgc2hyaW5rT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLnZhbHVlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFwcGxpY2F0aW9uUHJvcGVydHkgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gIXRoaXMuYm90dG9tID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgIH0sXG4gICAgY2FuU2Nyb2xsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFNjcm9sbGFibGUub3B0aW9ucy5jb21wdXRlZC5jYW5TY3JvbGwuY2FsbCh0aGlzKSAmJlxuICAgICAgICAoXG4gICAgICAgICAgdGhpcy5pbnZlcnRlZFNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuZWxldmF0ZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5oaWRlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmlzQm9vdGVkIHx8XG4gICAgICAgICAgLy8gSWYgZmFsc2V5LCB1c2VyIGhhcyBwcm92aWRlZCBhblxuICAgICAgICAgIC8vIGV4cGxpY2l0IHZhbHVlIHdoaWNoIHNob3VsZFxuICAgICAgICAgIC8vIG92ZXJ3cml0ZSBhbnl0aGluZyB3ZSBkb1xuICAgICAgICAgICF0aGlzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdG9vbGJhci0tY29sbGFwc2UnOiB0aGlzLmNvbGxhcHNlIHx8IHRoaXMuY29sbGFwc2VPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhcic6IHRydWUsXG4gICAgICAgICd2LWFwcC1iYXItLWNsaXBwZWQnOiB0aGlzLmNsaXBwZWRMZWZ0IHx8IHRoaXMuY2xpcHBlZFJpZ2h0LFxuICAgICAgICAndi1hcHAtYmFyLS1mYWRlLWltZy1vbi1zY3JvbGwnOiB0aGlzLmZhZGVJbWdPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZWxldmF0ZS1vbi1zY3JvbGwnOiB0aGlzLmVsZXZhdGVPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZml4ZWQnOiAhdGhpcy5hYnNvbHV0ZSAmJiAodGhpcy5hcHAgfHwgdGhpcy5maXhlZCksXG4gICAgICAgICd2LWFwcC1iYXItLWhpZGUtc2hhZG93JzogdGhpcy5oaWRlU2hhZG93LFxuICAgICAgICAndi1hcHAtYmFyLS1pcy1zY3JvbGxlZCc6IHRoaXMuY3VycmVudFNjcm9sbCA+IDAsXG4gICAgICAgICd2LWFwcC1iYXItLXNocmluay1vbi1zY3JvbGwnOiB0aGlzLnNocmlua09uU2Nyb2xsLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb250ZW50SGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLnNocmlua09uU2Nyb2xsKSByZXR1cm4gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbnRlbnRIZWlnaHQuY2FsbCh0aGlzKVxuXG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbXB1dGVkT3JpZ2luYWxIZWlnaHRcblxuICAgICAgY29uc3QgbWluID0gdGhpcy5kZW5zZSA/IDQ4IDogNTZcbiAgICAgIGNvbnN0IG1heCA9IGhlaWdodFxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heCAtIG1pblxuICAgICAgY29uc3QgaXRlcmF0aW9uID0gZGlmZmVyZW5jZSAvIHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY3VycmVudFNjcm9sbCAqIGl0ZXJhdGlvblxuXG4gICAgICByZXR1cm4gTWF0aC5tYXgobWluLCBtYXggLSBvZmZzZXQpXG4gICAgfSxcbiAgICBjb21wdXRlZEZvbnRTaXplICgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF0aGlzLmlzUHJvbWluZW50KSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuZGVuc2UgPyA5NiA6IDEyOFxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heCAtIHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG4gICAgICBjb25zdCBpbmNyZW1lbnQgPSAwLjAwMzQ3XG5cbiAgICAgIC8vIDEuNXJlbSB0byBhIG1pbmltdW0gb2YgMS4yNXJlbVxuICAgICAgcmV0dXJuIE51bWJlcigoMS41MCAtIGRpZmZlcmVuY2UgKiBpbmNyZW1lbnQpLnRvRml4ZWQoMikpXG4gICAgfSxcbiAgICBjb21wdXRlZExlZnQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwIHx8IHRoaXMuY2xpcHBlZExlZnQpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLmxlZnRcbiAgICB9LFxuICAgIGNvbXB1dGVkTWFyZ2luVG9wICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb24uYmFyXG4gICAgfSxcbiAgICBjb21wdXRlZE9wYWNpdHkgKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXRoaXMuZmFkZUltZ09uU2Nyb2xsKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IG9wYWNpdHkgPSBNYXRoLm1heChcbiAgICAgICAgKHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQgLSB0aGlzLmN1cnJlbnRTY3JvbGwpIC8gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCxcbiAgICAgICAgMFxuICAgICAgKVxuXG4gICAgICByZXR1cm4gTnVtYmVyKHBhcnNlRmxvYXQob3BhY2l0eSkudG9GaXhlZCgyKSlcbiAgICB9LFxuICAgIGNvbXB1dGVkT3JpZ2luYWxIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBsZXQgaGVpZ2h0ID0gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbnRlbnRIZWlnaHQuY2FsbCh0aGlzKVxuICAgICAgaWYgKHRoaXMuaXNFeHRlbmRlZCkgaGVpZ2h0ICs9IHBhcnNlSW50KHRoaXMuZXh0ZW5zaW9uSGVpZ2h0KVxuICAgICAgcmV0dXJuIGhlaWdodFxuICAgIH0sXG4gICAgY29tcHV0ZWRSaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHAgfHwgdGhpcy5jbGlwcGVkUmlnaHQpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLnJpZ2h0XG4gICAgfSxcbiAgICBjb21wdXRlZFNjcm9sbFRocmVzaG9sZCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLnNjcm9sbFRocmVzaG9sZCkgcmV0dXJuIE51bWJlcih0aGlzLnNjcm9sbFRocmVzaG9sZClcblxuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRPcmlnaW5hbEhlaWdodCAtICh0aGlzLmRlbnNlID8gNDggOiA1NilcbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNmb3JtICgpOiBudW1iZXIge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TY3JvbGwgfHxcbiAgICAgICAgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsICYmIHRoaXMuY3VycmVudFNjcm9sbCA9PT0gMCAmJiB0aGlzLmlzQWN0aXZlKVxuICAgICAgKSByZXR1cm4gMFxuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgcmV0dXJuIDBcblxuICAgICAgY29uc3Qgc2Nyb2xsT2ZmU2NyZWVuID0gdGhpcy5zY3JvbGxPZmZTY3JlZW5cbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkSGVpZ2h0XG4gICAgICAgIDogdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID8gc2Nyb2xsT2ZmU2NyZWVuIDogLXNjcm9sbE9mZlNjcmVlblxuICAgIH0sXG4gICAgaGlkZVNoYWRvdyAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5lbGV2YXRlT25TY3JvbGwgJiYgdGhpcy5pc0V4dGVuZGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZXZhdGVPblNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsID09PSAwIHx8XG4gICAgICAgICAgdGhpcy5jb21wdXRlZFRyYW5zZm9ybSA8IDBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIXRoaXMuaXNFeHRlbmRlZCB8fFxuICAgICAgICB0aGlzLnNjcm9sbE9mZlNjcmVlblxuICAgICAgKSAmJiB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtICE9PSAwXG4gICAgfSxcbiAgICBpc0NvbGxhcHNlZCAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAoIXRoaXMuY29sbGFwc2VPblNjcm9sbCkge1xuICAgICAgICByZXR1cm4gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5pc0NvbGxhcHNlZC5jYWxsKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPiAwXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmlzUHJvbWluZW50LmNhbGwodGhpcykgfHxcbiAgICAgICAgdGhpcy5zaHJpbmtPblNjcm9sbFxuICAgICAgKVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5zdHlsZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgZm9udFNpemU6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZEZvbnRTaXplLCAncmVtJyksXG4gICAgICAgIG1hcmdpblRvcDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkTWFyZ2luVG9wKSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke2NvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZFRyYW5zZm9ybSl9KWAsXG4gICAgICAgIGxlZnQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZExlZnQpLFxuICAgICAgICByaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkUmlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBjYW5TY3JvbGw6ICdvblNjcm9sbCcsXG4gICAgY29tcHV0ZWRUcmFuc2Zvcm0gKCkge1xuICAgICAgLy8gTm9ybWFsbHkgd2UgZG8gbm90IHdhbnQgdGhlIHYtYXBwLWJhclxuICAgICAgLy8gdG8gdXBkYXRlIHRoZSBhcHBsaWNhdGlvbiB0b3AgdmFsdWVcbiAgICAgIC8vIHRvIGF2b2lkIHNjcmVlbiBqdW1wLiBIb3dldmVyLCBpblxuICAgICAgLy8gdGhpcyBzaXR1YXRpb24sIHdlIG11c3Qgc28gdGhhdFxuICAgICAgLy8gdGhlIGNsaXBwZWQgZHJhd2VyIGNhbiB1cGRhdGVcbiAgICAgIC8vIGl0cyB0b3AgdmFsdWUgd2hlbiBzY3JvbGxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TY3JvbGwgfHxcbiAgICAgICAgKCF0aGlzLmNsaXBwZWRMZWZ0ICYmICF0aGlzLmNsaXBwZWRSaWdodClcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIHRoaXMuY2FsbFVwZGF0ZSgpXG4gICAgfSxcbiAgICBpbnZlcnRlZFNjcm9sbCAodmFsOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gIXZhbCB8fCB0aGlzLmN1cnJlbnRTY3JvbGwgIT09IDBcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGlmICh0aGlzLmludmVydGVkU2Nyb2xsKSB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQmFja2dyb3VuZCAoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBWVG9vbGJhci5vcHRpb25zLm1ldGhvZHMuZ2VuQmFja2dyb3VuZC5jYWxsKHRoaXMpXG5cbiAgICAgIHJlbmRlci5kYXRhID0gdGhpcy5fYihyZW5kZXIuZGF0YSB8fCB7fSwgcmVuZGVyLnRhZyEsIHtcbiAgICAgICAgc3R5bGU6IHsgb3BhY2l0eTogdGhpcy5jb21wdXRlZE9wYWNpdHkgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIHVwZGF0ZUFwcGxpY2F0aW9uICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaW52ZXJ0ZWRTY3JvbGxcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5jb21wdXRlZEhlaWdodCArIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm1cbiAgICB9LFxuICAgIHRocmVzaG9sZE1ldCAoKSB7XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5jdXJyZW50U2Nyb2xsID4gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGlkZU9uU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmlzU2Nyb2xsaW5nVXAgfHxcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JvbGwgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaHJlc2hvbGQgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkKSByZXR1cm5cblxuICAgICAgdGhpcy5zYXZlZFNjcm9sbCA9IHRoaXMuY3VycmVudFNjcm9sbFxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHJlbmRlciA9IFZUb29sYmFyLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIHJlbmRlci5kYXRhID0gcmVuZGVyLmRhdGEgfHwge31cblxuICAgIGlmICh0aGlzLmNhblNjcm9sbCkge1xuICAgICAgcmVuZGVyLmRhdGEuZGlyZWN0aXZlcyA9IHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMgfHwgW11cbiAgICAgIHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgIGFyZzogdGhpcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgIG5hbWU6ICdzY3JvbGwnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vblNjcm9sbCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclxuICB9LFxufSlcbiIsIi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlLCB7IFZOb2RlLCBWTm9kZURhdGEsIFZOb2RlRGlyZWN0aXZlIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3JpcHBsZWFibGUnLFxuXG4gIGRpcmVjdGl2ZXM6IHsgcmlwcGxlIH0sXG5cbiAgcHJvcHM6IHtcbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5SaXBwbGUgKGRhdGE6IFZOb2RlRGF0YSA9IHt9KTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGlmICghdGhpcy5yaXBwbGUpIHJldHVybiBudWxsXG5cbiAgICAgIGRhdGEuc3RhdGljQ2xhc3MgPSAndi1pbnB1dC0tc2VsZWN0aW9uLWNvbnRyb2xzX19yaXBwbGUnXG5cbiAgICAgIGRhdGEuZGlyZWN0aXZlcyA9IGRhdGEuZGlyZWN0aXZlcyB8fCBbXVxuICAgICAgZGF0YS5kaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICBuYW1lOiAncmlwcGxlJyxcbiAgICAgICAgdmFsdWU6IHsgY2VudGVyOiB0cnVlIH0sXG4gICAgICB9IGFzIFZOb2RlRGlyZWN0aXZlKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0YSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNYWluLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNTUkJvb3RhYmxlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1haW4nLFxuXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbWFpbicsXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYmFyLCB0b3AsIHJpZ2h0LCBmb290ZXIsIGluc2V0Rm9vdGVyLCBib3R0b20sIGxlZnQsXG4gICAgICB9ID0gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nVG9wOiBgJHt0b3AgKyBiYXJ9cHhgLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IGAke3JpZ2h0fXB4YCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogYCR7Zm9vdGVyICsgaW5zZXRGb290ZXIgKyBib3R0b219cHhgLFxuICAgICAgICBwYWRkaW5nTGVmdDogYCR7bGVmdH1weGAsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tYWluJyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIHJlZjogJ21haW4nLFxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCBbXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdGF0aWNDbGFzczogJ3YtbWFpbl9fd3JhcCcgfSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgICAgKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZNYWluIGZyb20gJy4uL1ZNYWluL1ZNYWluJ1xuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVk1haW4uZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWFpbicsXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgZGVwcmVjYXRlKCd2LWNvbnRlbnQnLCAndi1tYWluJywgdGhpcylcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgLy8gQWRkIHRoZSBsZWdhY3kgY2xhc3MgbmFtZXNcbiAgICBjb25zdCBub2RlID0gVk1haW4ub3B0aW9ucy5yZW5kZXIuY2FsbCh0aGlzLCBoKVxuXG4gICAgbm9kZS5kYXRhIS5zdGF0aWNDbGFzcyArPSAnIHYtY29udGVudCdcbiAgICBub2RlLmNoaWxkcmVuIVswXSEuZGF0YSEuc3RhdGljQ2xhc3MgKz0gJyB2LWNvbnRlbnRfX3dyYXAnXG5cbiAgICByZXR1cm4gaChub2RlLnRhZywgbm9kZS5kYXRhLCBub2RlLmNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCAnLi9fZ3JpZC5zYXNzJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgnc3BhY2VyJywgJ2RpdicsICd2LXNwYWNlcicpXG4iLCJpbXBvcnQgJy4vX2dyaWQuc2FzcydcbmltcG9ydCAnLi9WR3JpZC5zYXNzJ1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnXG5cbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBHcmlkKCdjb250YWluZXInKS5leHRlbmQoe1xuICBuYW1lOiAndi1jb250YWluZXInLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIGlkOiBTdHJpbmcsXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICB9LFxuICAgIGZsdWlkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyIChoLCB7IHByb3BzLCBkYXRhLCBjaGlsZHJlbiB9KSB7XG4gICAgbGV0IGNsYXNzZXNcbiAgICBjb25zdCB7IGF0dHJzIH0gPSBkYXRhXG4gICAgaWYgKGF0dHJzKSB7XG4gICAgICAvLyByZXNldCBhdHRycyB0byBleHRyYWN0IHV0aWxpdHkgY2xhc2VzIGxpa2UgcGEtM1xuICAgICAgZGF0YS5hdHRycyA9IHt9XG4gICAgICBjbGFzc2VzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgb25jZSByZXNvbHZlZFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy83ODQxXG4gICAgICAgIGlmIChrZXkgPT09ICdzbG90JykgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyc1trZXldXG5cbiAgICAgICAgLy8gYWRkIGJhY2sgZGF0YSBhdHRyaWJ1dGVzIGxpa2UgZGF0YS10ZXN0PVwiZm9vXCIgYnV0IGRvIG5vdFxuICAgICAgICAvLyBhZGQgdGhlbSBhcyBjbGFzc2VzXG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGRhdGEuYXR0cnMhW2tleV0gPSB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICBkYXRhLmRvbVByb3BzID0gZGF0YS5kb21Qcm9wcyB8fCB7fVxuICAgICAgZGF0YS5kb21Qcm9wcy5pZCA9IHByb3BzLmlkXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoXG4gICAgICBwcm9wcy50YWcsXG4gICAgICBtZXJnZURhdGEoZGF0YSwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ2NvbnRhaW5lcicsXG4gICAgICAgIGNsYXNzOiBBcnJheTxhbnk+KHtcbiAgICAgICAgICAnY29udGFpbmVyLS1mbHVpZCc6IHByb3BzLmZsdWlkLFxuICAgICAgICB9KS5jb25jYXQoY2xhc3NlcyB8fCBbXSksXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKVxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVklucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVklucHV0J1xuXG4vLyBNaXhpbnNcbmltcG9ydCBSaXBwbGVhYmxlIGZyb20gJy4uL3JpcHBsZWFibGUnXG5pbXBvcnQgQ29tcGFyYWJsZSBmcm9tICcuLi9jb21wYXJhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50IChlOiBFdmVudCkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgVklucHV0LFxuICBSaXBwbGVhYmxlLFxuICBDb21wYXJhYmxlXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICdzZWxlY3RhYmxlJyxcblxuICBtb2RlbDoge1xuICAgIHByb3A6ICdpbnB1dFZhbHVlJyxcbiAgICBldmVudDogJ2NoYW5nZScsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBpZDogU3RyaW5nLFxuICAgIGlucHV0VmFsdWU6IG51bGwgYXMgYW55LFxuICAgIGZhbHNlVmFsdWU6IG51bGwgYXMgYW55LFxuICAgIHRydWVWYWx1ZTogbnVsbCBhcyBhbnksXG4gICAgbXVsdGlwbGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQ29sb3I6IHRoaXMuaW5wdXRWYWx1ZSxcbiAgICAgIGxhenlWYWx1ZTogdGhpcy5pbnB1dFZhbHVlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGlmICh0aGlzLmNvbG9yKSByZXR1cm4gdGhpcy5jb2xvclxuICAgICAgaWYgKHRoaXMuaXNEYXJrICYmICF0aGlzLmFwcElzRGFyaykgcmV0dXJuICd3aGl0ZSdcbiAgICAgIHJldHVybiAncHJpbWFyeSdcbiAgICB9LFxuICAgIGlzTXVsdGlwbGUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPT09IHRydWUgfHwgKHRoaXMubXVsdGlwbGUgPT09IG51bGwgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmludGVybmFsVmFsdWUpKVxuICAgIH0sXG4gICAgaXNBY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW50ZXJuYWxWYWx1ZVxuXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIHJldHVybiBpbnB1dC5zb21lKGl0ZW0gPT4gdGhpcy52YWx1ZUNvbXBhcmF0b3IoaXRlbSwgdmFsdWUpKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50cnVlVmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmZhbHNlVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICA/IHRoaXMudmFsdWVDb21wYXJhdG9yKHZhbHVlLCBpbnB1dClcbiAgICAgICAgICA6IEJvb2xlYW4oaW5wdXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnZhbHVlQ29tcGFyYXRvcihpbnB1dCwgdGhpcy50cnVlVmFsdWUpXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlXG4gICAgfSxcbiAgICByaXBwbGVTdGF0ZSAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLnZhbGlkYXRpb25TdGF0ZVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHRoaXMudmFsaWRhdGlvblN0YXRlXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGlucHV0VmFsdWUgKHZhbCkge1xuICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICAgIHRoaXMuaGFzQ29sb3IgPSB2YWxcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5MYWJlbCAoKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuTGFiZWwuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIWxhYmVsKSByZXR1cm4gbGFiZWxcblxuICAgICAgbGFiZWwhLmRhdGEhLm9uID0ge1xuICAgICAgICAvLyBMYWJlbCBzaG91bGRuJ3QgY2F1c2UgdGhlIGlucHV0IHRvIGZvY3VzXG4gICAgICAgIGNsaWNrOiBwcmV2ZW50LFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGFiZWxcbiAgICB9LFxuICAgIGdlbklucHV0ICh0eXBlOiBzdHJpbmcsIGF0dHJzOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgYXR0cnM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICdhcmlhLWNoZWNrZWQnOiB0aGlzLmlzQWN0aXZlLnRvU3RyaW5nKCksXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpZDogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIHJvbGU6IHR5cGUsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgfSwgYXR0cnMpLFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIGNoZWNrZWQ6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgYmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgY2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgIGZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgICAga2V5ZG93bjogdGhpcy5vbktleWRvd24sXG4gICAgICAgICAgY2xpY2s6IHByZXZlbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvbkJsdXIgKCkge1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZVxuICAgIH0sXG4gICAgb25DbGljayAoZTogRXZlbnQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuICAgIH0sXG4gICAgb25DaGFuZ2UgKCkge1xuICAgICAgaWYgKCF0aGlzLmlzSW50ZXJhY3RpdmUpIHJldHVyblxuXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgIGxldCBpbnB1dCA9IHRoaXMuaW50ZXJuYWxWYWx1ZVxuXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgICBpbnB1dCA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSBpbnB1dC5sZW5ndGhcblxuICAgICAgICBpbnB1dCA9IGlucHV0LmZpbHRlcigoaXRlbTogYW55KSA9PiAhdGhpcy52YWx1ZUNvbXBhcmF0b3IoaXRlbSwgdmFsdWUpKVxuXG4gICAgICAgIGlmIChpbnB1dC5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgICAgIGlucHV0LnB1c2godmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cnVlVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmZhbHNlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnB1dCA9IHRoaXMudmFsdWVDb21wYXJhdG9yKGlucHV0LCB0aGlzLnRydWVWYWx1ZSkgPyB0aGlzLmZhbHNlVmFsdWUgOiB0aGlzLnRydWVWYWx1ZVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICBpbnB1dCA9IHRoaXMudmFsdWVDb21wYXJhdG9yKGlucHV0LCB2YWx1ZSkgPyBudWxsIDogdmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0ID0gIWlucHV0XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmFsaWRhdGUodHJ1ZSwgaW5wdXQpXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBpbnB1dFxuICAgICAgdGhpcy5oYXNDb2xvciA9IGlucHV0XG4gICAgfSxcbiAgICBvbkZvY3VzICgpIHtcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZVxuICAgIH0sXG4gICAgLyoqIEBhYnN0cmFjdCAqL1xuICAgIG9uS2V5ZG93biAoZTogRXZlbnQpIHt9LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDaGlwLnNhc3MnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZFeHBhbmRYVHJhbnNpdGlvbiB9IGZyb20gJy4uL3RyYW5zaXRpb25zJ1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgR3JvdXBhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9ncm91cGFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFRvZ2dsZWFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgUm91dGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdXRhYmxlJ1xuaW1wb3J0IFNpemVhYmxlIGZyb20gJy4uLy4uL21peGlucy9zaXplYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgU2l6ZWFibGUsXG4gIFJvdXRhYmxlLFxuICBUaGVtZWFibGUsXG4gIEdyb3VwYWJsZUZhY3RvcnkoJ2NoaXBHcm91cCcpLFxuICBUb2dnbGVhYmxlRmFjdG9yeSgnaW5wdXRWYWx1ZScpXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNoaXAnLFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoIXRoaXMuY2hpcEdyb3VwKSByZXR1cm4gJydcblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlwR3JvdXAuYWN0aXZlQ2xhc3NcbiAgICAgIH0sXG4gICAgfSBhcyBhbnkgYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmc+LFxuICAgIGNsb3NlOiBCb29sZWFuLFxuICAgIGNsb3NlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkZWxldGUnLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZHJhZ2dhYmxlOiBCb29sZWFuLFxuICAgIGZpbHRlcjogQm9vbGVhbixcbiAgICBmaWx0ZXJJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNvbXBsZXRlJyxcbiAgICB9LFxuICAgIGxhYmVsOiBCb29sZWFuLFxuICAgIGxpbms6IEJvb2xlYW4sXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGlsbDogQm9vbGVhbixcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzcGFuJyxcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuICAgIHZhbHVlOiBudWxsIGFzIGFueSBhcyBQcm9wVHlwZTxhbnk+LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgcHJveHlDbGFzczogJ3YtY2hpcC0tYWN0aXZlJyxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtY2hpcCc6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1jaGlwLS1jbGlja2FibGUnOiB0aGlzLmlzQ2xpY2thYmxlLFxuICAgICAgICAndi1jaGlwLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICd2LWNoaXAtLWRyYWdnYWJsZSc6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgICAndi1jaGlwLS1sYWJlbCc6IHRoaXMubGFiZWwsXG4gICAgICAgICd2LWNoaXAtLWxpbmsnOiB0aGlzLmlzTGluayxcbiAgICAgICAgJ3YtY2hpcC0tbm8tY29sb3InOiAhdGhpcy5jb2xvcixcbiAgICAgICAgJ3YtY2hpcC0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuICAgICAgICAndi1jaGlwLS1waWxsJzogdGhpcy5waWxsLFxuICAgICAgICAndi1jaGlwLS1yZW1vdmFibGUnOiB0aGlzLmhhc0Nsb3NlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgICAgLi4udGhpcy5zaXplYWJsZUNsYXNzZXMsXG4gICAgICAgIC4uLnRoaXMuZ3JvdXBDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzQ2xvc2UgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5jbG9zZSlcbiAgICB9LFxuICAgIGlzQ2xpY2thYmxlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICBSb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmlzQ2xpY2thYmxlLmNhbGwodGhpcykgfHxcbiAgICAgICAgdGhpcy5jaGlwR3JvdXBcbiAgICAgIClcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGNvbnN0IGJyZWFraW5nUHJvcHMgPSBbXG4gICAgICBbJ291dGxpbmUnLCAnb3V0bGluZWQnXSxcbiAgICAgIFsnc2VsZWN0ZWQnLCAnaW5wdXQtdmFsdWUnXSxcbiAgICAgIFsndmFsdWUnLCAnYWN0aXZlJ10sXG4gICAgICBbJ0BpbnB1dCcsICdAYWN0aXZlLnN5bmMnXSxcbiAgICBdXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGJyZWFraW5nUHJvcHMuZm9yRWFjaCgoW29yaWdpbmFsLCByZXBsYWNlbWVudF0pID0+IHtcbiAgICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eShvcmlnaW5hbCkpIGJyZWFraW5nKG9yaWdpbmFsLCByZXBsYWNlbWVudCwgdGhpcylcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljayAoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgICB0aGlzLmNoaXBHcm91cCAmJiB0aGlzLnRvZ2dsZSgpXG4gICAgfSxcbiAgICBnZW5GaWx0ZXIgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fZmlsdGVyJyxcbiAgICAgICAgICAgIHByb3BzOiB7IGxlZnQ6IHRydWUgfSxcbiAgICAgICAgICB9LCB0aGlzLmZpbHRlckljb24pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkV4cGFuZFhUcmFuc2l0aW9uLCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlbkNsb3NlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fY2xvc2UnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgICAgIHNpemU6IDE4LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljazpjbG9zZScpXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6YWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuY2xvc2VJY29uKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1jaGlwX19jb250ZW50JyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5maWx0ZXIgJiYgdGhpcy5nZW5GaWx0ZXIoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgICAgdGhpcy5oYXNDbG9zZSAmJiB0aGlzLmdlbkNsb3NlKCksXG4gICAgICBdKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuZ2VuQ29udGVudCgpXVxuICAgIGxldCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLmF0dHJzID0ge1xuICAgICAgLi4uZGF0YS5hdHRycyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICB0YWJpbmRleDogdGhpcy5jaGlwR3JvdXAgJiYgIXRoaXMuZGlzYWJsZWQgPyAwIDogZGF0YS5hdHRycyEudGFiaW5kZXgsXG4gICAgfVxuICAgIGRhdGEuZGlyZWN0aXZlcyEucHVzaCh7XG4gICAgICBuYW1lOiAnc2hvdycsXG4gICAgICB2YWx1ZTogdGhpcy5hY3RpdmUsXG4gICAgfSlcbiAgICBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgZGF0YSlcblxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy50ZXh0Q29sb3IgfHwgKHRoaXMub3V0bGluZWQgJiYgdGhpcy5jb2xvcilcblxuICAgIHJldHVybiBoKHRhZywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIGRhdGEpLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVkNoaXAgZnJvbSAnLi9WQ2hpcCdcblxuZXhwb3J0IHsgVkNoaXAgfVxuZXhwb3J0IGRlZmF1bHQgVkNoaXBcbiIsImltcG9ydCAnLi9WU2ltcGxlQ2hlY2tib3guc2FzcydcblxuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuaW1wb3J0IFZ1ZSwgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuaW1wb3J0IHsgd3JhcEluQXJyYXkgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1zaW1wbGUtY2hlY2tib3gnLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIHJpcHBsZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIC4uLkNvbG9yYWJsZS5vcHRpb25zLnByb3BzLFxuICAgIC4uLlRoZW1lYWJsZS5vcHRpb25zLnByb3BzLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGVJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94SW5kZXRlcm1pbmF0ZScsXG4gICAgfSxcbiAgICBvbkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2hlY2tib3hPbicsXG4gICAgfSxcbiAgICBvZmZJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94T2ZmJyxcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCwgeyBwcm9wcywgZGF0YSwgbGlzdGVuZXJzIH0pOiBWTm9kZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuXG4gICAgaWYgKHByb3BzLnJpcHBsZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGgoJ2RpdicsIENvbG9yYWJsZS5vcHRpb25zLm1ldGhvZHMuc2V0VGV4dENvbG9yKHByb3BzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dC0tc2VsZWN0aW9uLWNvbnRyb2xzX19yaXBwbGUnLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdyaXBwbGUnLFxuICAgICAgICAgIHZhbHVlOiB7IGNlbnRlcjogdHJ1ZSB9LFxuICAgICAgICB9XSBhcyBWTm9kZURpcmVjdGl2ZVtdLFxuICAgICAgfSkpXG5cbiAgICAgIGNoaWxkcmVuLnB1c2gocmlwcGxlKVxuICAgIH1cblxuICAgIGxldCBpY29uID0gcHJvcHMub2ZmSWNvblxuICAgIGlmIChwcm9wcy5pbmRldGVybWluYXRlKSBpY29uID0gcHJvcHMuaW5kZXRlcm1pbmF0ZUljb25cbiAgICBlbHNlIGlmIChwcm9wcy52YWx1ZSkgaWNvbiA9IHByb3BzLm9uSWNvblxuXG4gICAgY2hpbGRyZW4ucHVzaChoKFZJY29uLCBDb2xvcmFibGUub3B0aW9ucy5tZXRob2RzLnNldFRleHRDb2xvcihwcm9wcy52YWx1ZSAmJiBwcm9wcy5jb2xvciwge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBkYXJrOiBwcm9wcy5kYXJrLFxuICAgICAgICBsaWdodDogcHJvcHMubGlnaHQsXG4gICAgICB9LFxuICAgIH0pLCBpY29uKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAndi1zaW1wbGUtY2hlY2tib3gnOiB0cnVlLFxuICAgICAgJ3Ytc2ltcGxlLWNoZWNrYm94LS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgIGlmIChkYXRhLm9uICYmIGRhdGEub24uaW5wdXQgJiYgIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHdyYXBJbkFycmF5KGRhdGEub24uaW5wdXQpLmZvckVhY2goZiA9PiBmKCFwcm9wcy52YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlNpbXBsZUNoZWNrYm94IGZyb20gJy4uL1ZDaGVja2JveC9WU2ltcGxlQ2hlY2tib3gnXG5pbXBvcnQgVkRpdmlkZXIgZnJvbSAnLi4vVkRpdmlkZXInXG5pbXBvcnQgVlN1YmhlYWRlciBmcm9tICcuLi9WU3ViaGVhZGVyJ1xuaW1wb3J0IHtcbiAgVkxpc3QsXG4gIFZMaXN0SXRlbSxcbiAgVkxpc3RJdGVtQWN0aW9uLFxuICBWTGlzdEl0ZW1Db250ZW50LFxuICBWTGlzdEl0ZW1UaXRsZSxcbn0gZnJvbSAnLi4vVkxpc3QnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQge1xuICBlc2NhcGVIVE1MLFxuICBnZXRQcm9wZXJ0eUZyb21JdGVtLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlLCBWTm9kZUNoaWxkcmVuIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgU2VsZWN0SXRlbUtleSB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbnR5cGUgTGlzdFRpbGUgPSB7IGl0ZW06IGFueSwgZGlzYWJsZWQ/OiBudWxsIHwgYm9vbGVhbiwgdmFsdWU/OiBib29sZWFuLCBpbmRleDogbnVtYmVyIH07XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlLCBUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNlbGVjdC1saXN0JyxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy82ODcyXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICByaXBwbGUsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhY3Rpb246IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkOiBCb29sZWFuLFxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxhbnlbXT4sXG4gICAgaXRlbURpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICB9LFxuICAgIGl0ZW1UZXh0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgIH0sXG4gICAgaXRlbVZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIG5vRGF0YVRleHQ6IFN0cmluZyxcbiAgICBub0ZpbHRlcjogQm9vbGVhbixcbiAgICBzZWFyY2hJbnB1dDogbnVsbCBhcyB1bmtub3duIGFzIFByb3BUeXBlPGFueT4sXG4gICAgc2VsZWN0ZWRJdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8YW55W10+LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgcGFyc2VkSXRlbXMgKCk6IGFueVtdIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICB9LFxuICAgIHRpbGVBY3RpdmVDbGFzcyAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbG9yKS5jbGFzcyB8fCB7fSkuam9pbignICcpXG4gICAgfSxcbiAgICBzdGF0aWNOb0RhdGFUaWxlICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCB0aWxlID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBtb3VzZWRvd246IChlOiBFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLCAvLyBQcmV2ZW50IG9uQmx1ciBmcm9tIGJlaW5nIGNhbGxlZFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFtcbiAgICAgICAgdGhpcy5nZW5UaWxlQ29udGVudCh0aGlzLm5vRGF0YVRleHQpLFxuICAgICAgXSlcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5BY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5wdXRWYWx1ZTogYW55KTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtQWN0aW9uLCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlNpbXBsZUNoZWNrYm94LCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6ICgpID0+IHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRpdmlkZXIgKHByb3BzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWRGl2aWRlciwgeyBwcm9wcyB9KVxuICAgIH0sXG4gICAgZ2VuRmlsdGVyZWRUZXh0ICh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgIHRleHQgPSB0ZXh0IHx8ICcnXG5cbiAgICAgIGlmICghdGhpcy5zZWFyY2hJbnB1dCB8fCB0aGlzLm5vRmlsdGVyKSByZXR1cm4gZXNjYXBlSFRNTCh0ZXh0KVxuXG4gICAgICBjb25zdCB7IHN0YXJ0LCBtaWRkbGUsIGVuZCB9ID0gdGhpcy5nZXRNYXNrZWRDaGFyYWN0ZXJzKHRleHQpXG5cbiAgICAgIHJldHVybiBgJHtlc2NhcGVIVE1MKHN0YXJ0KX0ke3RoaXMuZ2VuSGlnaGxpZ2h0KG1pZGRsZSl9JHtlc2NhcGVIVE1MKGVuZCl9YFxuICAgIH0sXG4gICAgZ2VuSGVhZGVyIChwcm9wczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTdWJoZWFkZXIsIHsgcHJvcHMgfSwgcHJvcHMuaGVhZGVyKVxuICAgIH0sXG4gICAgZ2VuSGlnaGxpZ2h0ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInYtbGlzdC1pdGVtX19tYXNrXCI+JHtlc2NhcGVIVE1MKHRleHQpfTwvc3Bhbj5gXG4gICAgfSxcbiAgICBnZXRNYXNrZWRDaGFyYWN0ZXJzICh0ZXh0OiBzdHJpbmcpOiB7XG4gICAgICBzdGFydDogc3RyaW5nXG4gICAgICBtaWRkbGU6IHN0cmluZ1xuICAgICAgZW5kOiBzdHJpbmdcbiAgICB9IHtcbiAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gKHRoaXMuc2VhcmNoSW5wdXQgfHwgJycpLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgY29uc3QgaW5kZXggPSB0ZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hJbnB1dClcblxuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHsgc3RhcnQ6ICcnLCBtaWRkbGU6IHRleHQsIGVuZDogJycgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHRleHQuc2xpY2UoMCwgaW5kZXgpXG4gICAgICBjb25zdCBtaWRkbGUgPSB0ZXh0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaElucHV0Lmxlbmd0aClcbiAgICAgIGNvbnN0IGVuZCA9IHRleHQuc2xpY2UoaW5kZXggKyBzZWFyY2hJbnB1dC5sZW5ndGgpXG4gICAgICByZXR1cm4geyBzdGFydCwgbWlkZGxlLCBlbmQgfVxuICAgIH0sXG4gICAgZ2VuVGlsZSAoe1xuICAgICAgaXRlbSxcbiAgICAgIGluZGV4LFxuICAgICAgZGlzYWJsZWQgPSBudWxsLFxuICAgICAgdmFsdWUgPSBmYWxzZSxcbiAgICB9OiBMaXN0VGlsZSk6IFZOb2RlIHwgVk5vZGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXZhbHVlKSB2YWx1ZSA9IHRoaXMuaGFzSXRlbShpdGVtKVxuXG4gICAgICBpZiAoaXRlbSA9PT0gT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGRpc2FibGVkID0gZGlzYWJsZWQgIT09IG51bGxcbiAgICAgICAgICA/IGRpc2FibGVkXG4gICAgICAgICAgOiB0aGlzLmdldERpc2FibGVkKGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpbGUgPSB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpbiBsaXN0IGRvZXMgbm90XG4gICAgICAgICAgLy8gY29udGFpbiBhcmlhLXNlbGVjdGVkIGJ5IGRlZmF1bHRcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IFN0cmluZyh2YWx1ZSksXG4gICAgICAgICAgaWQ6IGBsaXN0LWl0ZW0tJHt0aGlzLl91aWR9LSR7aW5kZXh9YCxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBtb3VzZWRvd246IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gUHJldmVudCBvbkJsdXIgZnJvbSBiZWluZyBjYWxsZWRcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xpY2s6ICgpID0+IGRpc2FibGVkIHx8IHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLnRpbGVBY3RpdmVDbGFzcyxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICByaXBwbGU6IHRydWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFtcbiAgICAgICAgICB0aGlzLmFjdGlvbiAmJiAhdGhpcy5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMuZ2VuQWN0aW9uKGl0ZW0sIHZhbHVlKVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIHRoaXMuZ2VuVGlsZUNvbnRlbnQoaXRlbSwgaW5kZXgpLFxuICAgICAgICBdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzXG4gICAgICBjb25zdCBzY29wZWRTbG90ID0gdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSh7XG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAuLi50aWxlLmF0dHJzLFxuICAgICAgICAgIC4uLnRpbGUucHJvcHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB0aWxlLm9uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRoaXMubmVlZHNUaWxlKHNjb3BlZFNsb3QpXG4gICAgICAgID8gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIHNjb3BlZFNsb3QpXG4gICAgICAgIDogc2NvcGVkU2xvdFxuICAgIH0sXG4gICAgZ2VuVGlsZUNvbnRlbnQgKGl0ZW06IGFueSwgaW5kZXggPSAwKTogVk5vZGUge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5nZW5GaWx0ZXJlZFRleHQodGhpcy5nZXRUZXh0KGl0ZW0pKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW1Db250ZW50LFxuICAgICAgICBbdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW1UaXRsZSwge1xuICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTCB9LFxuICAgICAgICB9KV1cbiAgICAgIClcbiAgICB9LFxuICAgIGhhc0l0ZW0gKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VkSXRlbXMuaW5kZXhPZih0aGlzLmdldFZhbHVlKGl0ZW0pKSA+IC0xXG4gICAgfSxcbiAgICBuZWVkc1RpbGUgKHNsb3Q6IFZOb2RlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzbG90IS5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgc2xvdCFbMF0uY29tcG9uZW50T3B0aW9ucyA9PSBudWxsIHx8XG4gICAgICAgIHNsb3QhWzBdLmNvbXBvbmVudE9wdGlvbnMuQ3Rvci5vcHRpb25zLm5hbWUgIT09ICd2LWxpc3QtaXRlbSdcbiAgICB9LFxuICAgIGdldERpc2FibGVkIChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtRGlzYWJsZWQsIGZhbHNlKSlcbiAgICB9LFxuICAgIGdldFRleHQgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQsIGl0ZW0pKVxuICAgIH0sXG4gICAgZ2V0VmFsdWUgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtVmFsdWUsIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoKTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuOiBWTm9kZUNoaWxkcmVuID0gW11cbiAgICBjb25zdCBpdGVtc0xlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF1cblxuICAgICAgaWYgKHRoaXMuaGlkZVNlbGVjdGVkICYmXG4gICAgICAgIHRoaXMuaGFzSXRlbShpdGVtKVxuICAgICAgKSBjb250aW51ZVxuXG4gICAgICBpZiAoaXRlbSA9PSBudWxsKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuVGlsZSh7IGl0ZW0sIGluZGV4IH0pKVxuICAgICAgZWxzZSBpZiAoaXRlbS5oZWFkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5IZWFkZXIoaXRlbSkpXG4gICAgICBlbHNlIGlmIChpdGVtLmRpdmlkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5EaXZpZGVyKGl0ZW0pKVxuICAgICAgZWxzZSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuVGlsZSh7IGl0ZW0sIGluZGV4IH0pKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmxlbmd0aCB8fCBjaGlsZHJlbi5wdXNoKHRoaXMuJHNsb3RzWyduby1kYXRhJ10gfHwgdGhpcy5zdGF0aWNOb0RhdGFUaWxlKVxuXG4gICAgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddICYmIGNoaWxkcmVuLnVuc2hpZnQodGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddKVxuXG4gICAgdGhpcy4kc2xvdHNbJ2FwcGVuZC1pdGVtJ10gJiYgY2hpbGRyZW4ucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSlcblxuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMaXN0LCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc2VsZWN0LWxpc3QnLFxuICAgICAgY2xhc3M6IHRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICB9LFxuICAgICAgcHJvcHM6IHsgZGVuc2U6IHRoaXMuZGVuc2UgfSxcbiAgICB9LCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAnZmlsdGVyYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBub0RhdGFUZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHZ1ZXRpZnkubm9EYXRhVGV4dCcsXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi4vVlRleHRGaWVsZC9WVGV4dEZpZWxkLnNhc3MnXG5pbXBvcnQgJy4vVlNlbGVjdC5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkNoaXAgZnJvbSAnLi4vVkNoaXAnXG5pbXBvcnQgVk1lbnUgZnJvbSAnLi4vVk1lbnUnXG5pbXBvcnQgVlNlbGVjdExpc3QgZnJvbSAnLi9WU2VsZWN0TGlzdCdcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbXBhcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbXBhcmFibGUnXG5pbXBvcnQgRmlsdGVyYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZmlsdGVyYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7IGdldFByb3BlcnR5RnJvbUl0ZW0sIGdldE9iamVjdFZhbHVlQnlQYXRoLCBrZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFByb3BUeXBlLCBWTm9kZURhdGEgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBTZWxlY3RJdGVtS2V5IH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZW51UHJvcHMgPSB7XG4gIGNsb3NlT25DbGljazogZmFsc2UsXG4gIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICBkaXNhYmxlS2V5czogdHJ1ZSxcbiAgb3Blbk9uQ2xpY2s6IGZhbHNlLFxuICBtYXhIZWlnaHQ6IDMwNCxcbn1cblxuLy8gVHlwZXNcbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFZUZXh0RmllbGQsXG4gIENvbXBhcmFibGUsXG4gIEZpbHRlcmFibGVcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBtZW51OiBJbnN0YW5jZVR5cGU8dHlwZW9mIFZNZW51PlxuICAgIGxhYmVsOiBIVE1MRWxlbWVudFxuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgJ3ByZXBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgICdhcHBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgIHByZWZpeDogSFRNTEVsZW1lbnRcbiAgICBzdWZmaXg6IEhUTUxFbGVtZW50XG4gIH1cbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2VsZWN0JyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZW5kSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkcm9wZG93bicsXG4gICAgfSxcbiAgICBhdHRhY2g6IHtcbiAgICAgIHR5cGU6IG51bGwgYXMgdW5rbm93biBhcyBQcm9wVHlwZTxzdHJpbmcgfCBib29sZWFuIHwgRWxlbWVudCB8IFZOb2RlPixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgY2FjaGVJdGVtczogQm9vbGVhbixcbiAgICBjaGlwczogQm9vbGVhbixcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgZGVsZXRhYmxlQ2hpcHM6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUxvb2t1cDogQm9vbGVhbixcbiAgICBlYWdlcjogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWQ6IEJvb2xlYW4sXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPGFueVtdPixcbiAgICBpdGVtQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGl0ZW1EaXNhYmxlZDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgfSxcbiAgICBpdGVtVGV4dDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICAgIGl0ZW1WYWx1ZToge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgfSxcbiAgICBtZW51UHJvcHM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdE1lbnVQcm9wcyxcbiAgICB9LFxuICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsZWFyOiBCb29sZWFuLFxuICAgIHJldHVybk9iamVjdDogQm9vbGVhbixcbiAgICBzbWFsbENoaXBzOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWNoZWRJdGVtczogdGhpcy5jYWNoZUl0ZW1zID8gdGhpcy5pdGVtcyA6IFtdLFxuICAgICAgbWVudUlzQm9vdGVkOiBmYWxzZSxcbiAgICAgIGlzTWVudUFjdGl2ZTogZmFsc2UsXG4gICAgICBsYXN0SXRlbTogMjAsXG4gICAgICAvLyBBcyBsb25nIGFzIGEgdmFsdWUgaXMgZGVmaW5lZCwgc2hvdyBpdFxuICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayBpZiBtdWx0aXBsZVxuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoaWNoIGRlZmF1bHQgdG8gcHJvdmlkZVxuICAgICAgbGF6eVZhbHVlOiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyB0aGlzLnZhbHVlXG4gICAgICAgIDogdGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkLFxuICAgICAgc2VsZWN0ZWRJbmRleDogLTEsXG4gICAgICBzZWxlY3RlZEl0ZW1zOiBbXSBhcyBhbnlbXSxcbiAgICAgIGtleWJvYXJkTG9va3VwUHJlZml4OiAnJyxcbiAgICAgIGtleWJvYXJkTG9va3VwTGFzdFRpbWU6IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLyogQWxsIGl0ZW1zIHRoYXQgdGhlIHNlbGVjdCBoYXMgKi9cbiAgICBhbGxJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyRHVwbGljYXRlcyh0aGlzLmNhY2hlZEl0ZW1zLmNvbmNhdCh0aGlzLml0ZW1zKSlcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVGV4dEZpZWxkLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1zZWxlY3QnOiB0cnVlLFxuICAgICAgICAndi1zZWxlY3QtLWNoaXBzJzogdGhpcy5oYXNDaGlwcyxcbiAgICAgICAgJ3Ytc2VsZWN0LS1jaGlwcy0tc21hbGwnOiB0aGlzLnNtYWxsQ2hpcHMsXG4gICAgICAgICd2LXNlbGVjdC0taXMtbWVudS1hY3RpdmUnOiB0aGlzLmlzTWVudUFjdGl2ZSxcbiAgICAgICAgJ3Ytc2VsZWN0LS1pcy1tdWx0aSc6IHRoaXMubXVsdGlwbGUsXG4gICAgICB9XG4gICAgfSxcbiAgICAvKiBVc2VkIGJ5IG90aGVyIGNvbXBvbmVudHMgdG8gb3ZlcndyaXRlICovXG4gICAgY29tcHV0ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsSXRlbXNcbiAgICB9LFxuICAgIGNvbXB1dGVkT3ducyAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgbGlzdC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBjb21wdXRlZENvdW50ZXJWYWx1ZSAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlXG4gICAgICAgID8gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgICA6ICh0aGlzLmdldFRleHQodGhpcy5zZWxlY3RlZEl0ZW1zWzBdKSB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGhcbiAgICB9LFxuICAgIGRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuaXNGb2N1c2VkID8gW3tcbiAgICAgICAgbmFtZTogJ2NsaWNrLW91dHNpZGUnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGhhbmRsZXI6IHRoaXMuYmx1cixcbiAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgIH0sXG4gICAgICB9XSA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZHluYW1pY0hlaWdodCAoKSB7XG4gICAgICByZXR1cm4gJ2F1dG8nXG4gICAgfSxcbiAgICBoYXNDaGlwcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlwcyB8fCB0aGlzLnNtYWxsQ2hpcHNcbiAgICB9LFxuICAgIGhhc1Nsb3QgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5oYXNDaGlwcyB8fCB0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24pXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgbGlzdERhdGEgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzY29wZUlkID0gdGhpcy4kdm5vZGUgJiYgKHRoaXMuJHZub2RlLmNvbnRleHQhLiRvcHRpb25zIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLl9zY29wZUlkXG4gICAgICBjb25zdCBhdHRycyA9IHNjb3BlSWQgPyB7XG4gICAgICAgIFtzY29wZUlkXTogdHJ1ZSxcbiAgICAgIH0gOiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkT3ducyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhY3Rpb246IHRoaXMubXVsdGlwbGUsXG4gICAgICAgICAgY29sb3I6IHRoaXMuaXRlbUNvbG9yLFxuICAgICAgICAgIGRlbnNlOiB0aGlzLmRlbnNlLFxuICAgICAgICAgIGhpZGVTZWxlY3RlZDogdGhpcy5oaWRlU2VsZWN0ZWQsXG4gICAgICAgICAgaXRlbXM6IHRoaXMudmlydHVhbGl6ZWRJdGVtcyxcbiAgICAgICAgICBpdGVtRGlzYWJsZWQ6IHRoaXMuaXRlbURpc2FibGVkLFxuICAgICAgICAgIGl0ZW1UZXh0OiB0aGlzLml0ZW1UZXh0LFxuICAgICAgICAgIGl0ZW1WYWx1ZTogdGhpcy5pdGVtVmFsdWUsXG4gICAgICAgICAgbm9EYXRhVGV4dDogdGhpcy4kdnVldGlmeS5sYW5nLnQodGhpcy5ub0RhdGFUZXh0KSxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLnNlbGVjdGVkSXRlbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc2VsZWN0OiB0aGlzLnNlbGVjdEl0ZW0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgaXRlbTogdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YXRpY0xpc3QgKCk6IFZOb2RlIHtcbiAgICAgIGlmICh0aGlzLiRzbG90c1snbm8tZGF0YSddIHx8IHRoaXMuJHNsb3RzWydwcmVwZW5kLWl0ZW0nXSB8fCB0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoJ2Fzc2VydDogc3RhdGljTGlzdCBzaG91bGQgbm90IGJlIGNhbGxlZCBpZiBzbG90cyBhcmUgdXNlZCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTZWxlY3RMaXN0LCB0aGlzLmxpc3REYXRhKVxuICAgIH0sXG4gICAgdmlydHVhbGl6ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuICh0aGlzLiRfbWVudVByb3BzIGFzIGFueSkuYXV0b1xuICAgICAgICA/IHRoaXMuY29tcHV0ZWRJdGVtc1xuICAgICAgICA6IHRoaXMuY29tcHV0ZWRJdGVtcy5zbGljZSgwLCB0aGlzLmxhc3RJdGVtKVxuICAgIH0sXG4gICAgbWVudUNhblNob3c6ICgpID0+IHRydWUsXG4gICAgJF9tZW51UHJvcHMgKCk6IG9iamVjdCB7XG4gICAgICBsZXQgbm9ybWFsaXNlZFByb3BzID0gdHlwZW9mIHRoaXMubWVudVByb3BzID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHRoaXMubWVudVByb3BzLnNwbGl0KCcsJylcbiAgICAgICAgOiB0aGlzLm1lbnVQcm9wc1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShub3JtYWxpc2VkUHJvcHMpKSB7XG4gICAgICAgIG5vcm1hbGlzZWRQcm9wcyA9IG5vcm1hbGlzZWRQcm9wcy5yZWR1Y2UoKGFjYywgcCkgPT4ge1xuICAgICAgICAgIGFjY1twLnRyaW0oKV0gPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9LCB7fSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdE1lbnVQcm9wcyxcbiAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgIHZhbHVlOiB0aGlzLm1lbnVDYW5TaG93ICYmIHRoaXMuaXNNZW51QWN0aXZlLFxuICAgICAgICBudWRnZUJvdHRvbTogbm9ybWFsaXNlZFByb3BzLm9mZnNldFkgPyAxIDogMCwgLy8gY29udmVydCB0byBpbnRcbiAgICAgICAgLi4ubm9ybWFsaXNlZFByb3BzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbFZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsXG4gICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMoKVxuICAgIH0sXG4gICAgaXNNZW51QWN0aXZlICh2YWwpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub25NZW51QWN0aXZlQ2hhbmdlKHZhbCkpXG4gICAgfSxcbiAgICBpdGVtczoge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlciAodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlSXRlbXMpIHtcbiAgICAgICAgICAvLyBCcmVha3MgdnVlLXRlc3QtdXRpbHMgaWZcbiAgICAgICAgICAvLyB0aGlzIGlzbid0IGNhbGN1bGF0ZWRcbiAgICAgICAgICAvLyBvbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRJdGVtcyA9IHRoaXMuZmlsdGVyRHVwbGljYXRlcyh0aGlzLmNhY2hlZEl0ZW1zLmNvbmNhdCh2YWwpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMoKVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGJsdXIgKGU/OiBFdmVudCkge1xuICAgICAgVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuYmx1ci5jYWxsKHRoaXMsIGUpXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBhY3RpdmF0ZU1lbnUgKCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIGNsZWFyYWJsZUNhbGxiYWNrICgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkKVxuICAgICAgdGhpcy5zZXRNZW51SW5kZXgoLTEpXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKSlcblxuICAgICAgaWYgKHRoaXMub3Blbk9uQ2xlYXIpIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VDb25kaXRpb25hbCAoZTogRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc01lbnVBY3RpdmUpIHJldHVybiB0cnVlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLl9pc0Rlc3Ryb3llZCAmJlxuXG4gICAgICAgIC8vIENsaWNrIG9yaWdpbmF0ZXMgZnJvbSBvdXRzaWRlIHRoZSBtZW51IGNvbnRlbnRcbiAgICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkb24ndCBjbG9zZSB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZFxuICAgICAgICAoIXRoaXMuZ2V0Q29udGVudCgpIHx8XG4gICAgICAgICF0aGlzLmdldENvbnRlbnQoKS5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkgJiZcblxuICAgICAgICAvLyBDbGljayBvcmlnaW5hdGVzIGZyb20gb3V0c2lkZSB0aGUgZWxlbWVudFxuICAgICAgICB0aGlzLiRlbCAmJlxuICAgICAgICAhdGhpcy4kZWwuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkgJiZcbiAgICAgICAgZS50YXJnZXQgIT09IHRoaXMuJGVsXG4gICAgICApXG4gICAgfSxcbiAgICBmaWx0ZXJEdXBsaWNhdGVzIChhcnI6IGFueVtdKSB7XG4gICAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgTWFwKClcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhcnJbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZ2V0VmFsdWUoaXRlbSlcblxuICAgICAgICAvLyBUT0RPOiBjb21wYXJhdG9yXG4gICAgICAgICF1bmlxdWVWYWx1ZXMuaGFzKHZhbCkgJiYgdW5pcXVlVmFsdWVzLnNldCh2YWwsIGl0ZW0pXG4gICAgICB9XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWVWYWx1ZXMudmFsdWVzKCkpXG4gICAgfSxcbiAgICBmaW5kRXhpc3RpbmdJbmRleCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0pXG5cbiAgICAgIHJldHVybiAodGhpcy5pbnRlcm5hbFZhbHVlIHx8IFtdKS5maW5kSW5kZXgoKGk6IG9iamVjdCkgPT4gdGhpcy52YWx1ZUNvbXBhcmF0b3IodGhpcy5nZXRWYWx1ZShpKSwgaXRlbVZhbHVlKSlcbiAgICB9LFxuICAgIGdldENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMubWVudSAmJiB0aGlzLiRyZWZzLm1lbnUuJHJlZnMuY29udGVudFxuICAgIH0sXG4gICAgZ2VuQ2hpcFNlbGVjdGlvbiAoaXRlbTogb2JqZWN0LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBpc0Rpc2FibGVkID0gKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuZ2V0RGlzYWJsZWQoaXRlbSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkNoaXAsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNoaXAtLXNlbGVjdCcsXG4gICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiAtMSB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNsb3NlOiB0aGlzLmRlbGV0YWJsZUNoaXBzICYmICFpc0Rpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlucHV0VmFsdWU6IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgc21hbGw6IHRoaXMuc21hbGxDaGlwcyxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm5cblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NsaWNrOmNsb3NlJzogKCkgPT4gdGhpcy5vbkNoaXBJbnB1dChpdGVtKSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKGl0ZW0pKSxcbiAgICAgIH0sIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICAgIGdlbkNvbW1hU2VsZWN0aW9uIChpdGVtOiBvYmplY3QsIGluZGV4OiBudW1iZXIsIGxhc3Q6IGJvb2xlYW4pIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCAmJiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAoXG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5nZXREaXNhYmxlZChpdGVtKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9uIHYtc2VsZWN0X19zZWxlY3Rpb24tLWNvbW1hJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zZWxlY3RfX3NlbGVjdGlvbi0tZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoaXRlbSkpLFxuICAgICAgfSksIGAke3RoaXMuZ2V0VGV4dChpdGVtKX0ke2xhc3QgPyAnJyA6ICcsICd9YClcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpOiAoVk5vZGUgfCBWTm9kZVtdIHwgbnVsbClbXSB7XG4gICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5nZW5TZWxlY3Rpb25zKClcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZW5JbnB1dCgpXG5cbiAgICAgIC8vIElmIHRoZSByZXR1cm4gaXMgYW4gZW1wdHkgYXJyYXlcbiAgICAgIC8vIHB1c2ggdGhlIGlucHV0XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3Rpb25zKSkge1xuICAgICAgICBzZWxlY3Rpb25zLnB1c2goaW5wdXQpXG4gICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCBpbnRvIGNoaWxkcmVuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuID0gc2VsZWN0aW9ucy5jaGlsZHJlbiB8fCBbXVxuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuLnB1c2goaW5wdXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuRmllbGRzZXQoKSxcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiAndi1zZWxlY3RfX3Nsb3QnLFxuICAgICAgICAgIGRpcmVjdGl2ZXM6IHRoaXMuZGlyZWN0aXZlcyxcbiAgICAgICAgfSwgW1xuICAgICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgICB0aGlzLnByZWZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3ByZWZpeCcpIDogbnVsbCxcbiAgICAgICAgICBzZWxlY3Rpb25zLFxuICAgICAgICAgIHRoaXMuc3VmZml4ID8gdGhpcy5nZW5BZmZpeCgnc3VmZml4JykgOiBudWxsLFxuICAgICAgICAgIHRoaXMuZ2VuQ2xlYXJJY29uKCksXG4gICAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICAgIHRoaXMuZ2VuSGlkZGVuSW5wdXQoKSxcbiAgICAgICAgXSksXG4gICAgICAgIHRoaXMuZ2VuTWVudSgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5JY29uIChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGNiPzogKGU6IEV2ZW50KSA9PiB2b2lkLFxuICAgICAgZXh0cmFEYXRhPzogVk5vZGVEYXRhXG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5JY29uLmNhbGwodGhpcywgdHlwZSwgY2IsIGV4dHJhRGF0YSlcblxuICAgICAgaWYgKHR5cGUgPT09ICdhcHBlbmQnKSB7XG4gICAgICAgIC8vIERvbid0IGFsbG93IHRoZSBkcm9wZG93biBpY29uIHRvIGJlIGZvY3VzZWRcbiAgICAgICAgaWNvbi5jaGlsZHJlbiFbMF0uZGF0YSA9IG1lcmdlRGF0YShpY29uLmNoaWxkcmVuIVswXS5kYXRhISwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YWJpbmRleDogaWNvbi5jaGlsZHJlbiFbMF0uY29tcG9uZW50T3B0aW9ucyEubGlzdGVuZXJzICYmICctMScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWNvblxuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXQuY2FsbCh0aGlzKVxuXG4gICAgICBkZWxldGUgaW5wdXQuZGF0YSEuYXR0cnMhLm5hbWVcblxuICAgICAgaW5wdXQuZGF0YSA9IG1lcmdlRGF0YShpbnB1dC5kYXRhISwge1xuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAnYXJpYS1yZWFkb25seSc6IFN0cmluZyh0aGlzLmlzUmVhZG9ubHkpLFxuICAgICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aCh0aGlzLiRyZWZzLm1lbnUsICdhY3RpdmVUaWxlLmlkJyksXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aChpbnB1dC5kYXRhISwgJ2F0dHJzLmF1dG9jb21wbGV0ZScsICdvZmYnKSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsga2V5cHJlc3M6IHRoaXMub25LZXlQcmVzcyB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBnZW5IaWRkZW5JbnB1dCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogdGhpcy5sYXp5VmFsdWUgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLmF0dHJzJC5uYW1lLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKTogVk5vZGUge1xuICAgICAgY29uc3QgcmVuZGVyID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgcmVuZGVyLmRhdGEhLmF0dHJzID0ge1xuICAgICAgICAuLi5yZW5kZXIuZGF0YSEuYXR0cnMsXG4gICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICdsaXN0Ym94JyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBTdHJpbmcodGhpcy5pc01lbnVBY3RpdmUpLFxuICAgICAgICAnYXJpYS1vd25zJzogdGhpcy5jb21wdXRlZE93bnMsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIGdlbkxpc3QgKCk6IFZOb2RlIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gc2xvdHMsIHdlIGNhbiB1c2UgYSBjYWNoZWQgVk5vZGUgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgICAgaWYgKHRoaXMuJHNsb3RzWyduby1kYXRhJ10gfHwgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddIHx8IHRoaXMuJHNsb3RzWydhcHBlbmQtaXRlbSddKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkxpc3RXaXRoU2xvdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aWNMaXN0XG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5MaXN0V2l0aFNsb3QgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHNsb3RzID0gWydwcmVwZW5kLWl0ZW0nLCAnbm8tZGF0YScsICdhcHBlbmQtaXRlbSddXG4gICAgICAgIC5maWx0ZXIoc2xvdE5hbWUgPT4gdGhpcy4kc2xvdHNbc2xvdE5hbWVdKVxuICAgICAgICAubWFwKHNsb3ROYW1lID0+IHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywge1xuICAgICAgICAgIHNsb3Q6IHNsb3ROYW1lLFxuICAgICAgICB9LCB0aGlzLiRzbG90c1tzbG90TmFtZV0pKVxuICAgICAgLy8gUmVxdWlyZXMgZGVzdHJ1Y3R1cmluZyBkdWUgdG8gVnVlXG4gICAgICAvLyBtb2RpZnlpbmcgdGhlIGBvbmAgcHJvcGVydHkgd2hlbiBwYXNzZWRcbiAgICAgIC8vIGFzIGEgcmVmZXJlbmNlZCBvYmplY3RcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTZWxlY3RMaXN0LCB7XG4gICAgICAgIC4uLnRoaXMubGlzdERhdGEsXG4gICAgICB9LCBzbG90cylcbiAgICB9LFxuICAgIGdlbk1lbnUgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy4kX21lbnVQcm9wcyBhcyBhbnlcbiAgICAgIHByb3BzLmFjdGl2YXRvciA9IHRoaXMuJHJlZnNbJ2lucHV0LXNsb3QnXVxuXG4gICAgICAvLyBBdHRhY2ggdG8gcm9vdCBlbCBzbyB0aGF0XG4gICAgICAvLyBtZW51IGNvdmVycyBwcmVwZW5kL2FwcGVuZCBpY29uc1xuICAgICAgaWYgKFxuICAgICAgICAvLyBUT0RPOiBtYWtlIHRoaXMgYSBjb21wdXRlZCBwcm9wZXJ0eSBvciBoZWxwZXIgb3Igc29tZXRoaW5nXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSAnJyB8fCAvLyBJZiB1c2VkIGFzIGEgYm9vbGVhbiBwcm9wICg8di1tZW51IGF0dGFjaD4pXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSB0cnVlIHx8IC8vIElmIGJvdW5kIHRvIGEgYm9vbGVhbiAoPHYtbWVudSA6YXR0YWNoPVwidHJ1ZVwiPilcbiAgICAgICAgdGhpcy5hdHRhY2ggPT09ICdhdHRhY2gnIC8vIElmIGJvdW5kIGFzIGJvb2xlYW4gcHJvcCBpbiBwdWcgKHYtbWVudShhdHRhY2gpKVxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmF0dGFjaCA9IHRoaXMuJGVsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5hdHRhY2ggPSB0aGlzLmF0dGFjaFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTWVudSwge1xuICAgICAgICBhdHRyczogeyByb2xlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6ICh2YWw6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdmFsXG4gICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHZhbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Nyb2xsOiB0aGlzLm9uU2Nyb2xsLFxuICAgICAgICB9LFxuICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgIH0sIFt0aGlzLmdlbkxpc3QoKV0pXG4gICAgfSxcbiAgICBnZW5TZWxlY3Rpb25zICgpOiBWTm9kZSB7XG4gICAgICBsZXQgbGVuZ3RoID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgQXJyYXkobGVuZ3RoKVxuXG4gICAgICBsZXQgZ2VuU2VsZWN0aW9uXG4gICAgICBpZiAodGhpcy4kc2NvcGVkU2xvdHMuc2VsZWN0aW9uKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuU2xvdFNlbGVjdGlvblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0NoaXBzKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuQ2hpcFNlbGVjdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VuU2VsZWN0aW9uID0gdGhpcy5nZW5Db21tYVNlbGVjdGlvblxuICAgICAgfVxuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgY2hpbGRyZW5bbGVuZ3RoXSA9IGdlblNlbGVjdGlvbihcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNbbGVuZ3RoXSxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID09PSBjaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9ucycsXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlblNsb3RTZWxlY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5kZXg6IG51bWJlcik6IFZOb2RlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvbiEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGNsYXNzOiAndi1jaGlwLS1zZWxlY3QnLFxuICAgICAgICB9LFxuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzZWxlY3Q6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZDogaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLmlzSW50ZXJhY3RpdmUsXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0TWVudUluZGV4ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLm1lbnUgPyAodGhpcy4kcmVmcy5tZW51IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmxpc3RJbmRleCA6IC0xXG4gICAgfSxcbiAgICBnZXREaXNhYmxlZCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1EaXNhYmxlZCwgZmFsc2UpXG4gICAgfSxcbiAgICBnZXRUZXh0IChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQsIGl0ZW0pXG4gICAgfSxcbiAgICBnZXRWYWx1ZSAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1WYWx1ZSwgdGhpcy5nZXRUZXh0KGl0ZW0pKVxuICAgIH0sXG4gICAgb25CbHVyIChlPzogRXZlbnQpIHtcbiAgICAgIGUgJiYgdGhpcy4kZW1pdCgnYmx1cicsIGUpXG4gICAgfSxcbiAgICBvbkNoaXBJbnB1dCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pXG4gICAgICBlbHNlIHRoaXMuc2V0VmFsdWUobnVsbClcbiAgICAgIC8vIElmIGFsbCBpdGVtcyBoYXZlIGJlZW4gZGVsZXRlZCxcbiAgICAgIC8vIG9wZW4gYHYtbWVudWBcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTFcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc0ludGVyYWN0aXZlKSByZXR1cm5cblxuICAgICAgaWYgKCF0aGlzLmlzQXBwZW5kSW5uZXIoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9LFxuICAgIG9uRXNjRG93biAoZTogRXZlbnQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKHRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgb25LZXlQcmVzcyAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm11bHRpcGxlIHx8XG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5kaXNhYmxlTG9va3VwXG4gICAgICApIHJldHVyblxuXG4gICAgICBjb25zdCBLRVlCT0FSRF9MT09LVVBfVEhSRVNIT0xEID0gMTAwMCAvLyBtaWxsaXNlY29uZHNcbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICBpZiAobm93IC0gdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID4gS0VZQk9BUkRfTE9PS1VQX1RIUkVTSE9MRCkge1xuICAgICAgICB0aGlzLmtleWJvYXJkTG9va3VwUHJlZml4ID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXggKz0gZS5rZXkudG9Mb3dlckNhc2UoKVxuICAgICAgdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID0gbm93XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAodGhpcy5nZXRUZXh0KGl0ZW0pIHx8ICcnKS50b1N0cmluZygpXG5cbiAgICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXgpXG4gICAgICB9KVxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYWxsSXRlbXNbaW5kZXhdXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMubGFzdEl0ZW0gPSBNYXRoLm1heCh0aGlzLmxhc3RJdGVtLCBpbmRleCArIDUpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5yZXR1cm5PYmplY3QgPyBpdGVtIDogdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kcmVmcy5tZW51LmdldFRpbGVzKCkpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRNZW51SW5kZXgoaW5kZXgpKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5pc1JlYWRvbmx5ICYmIGUua2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSByZXR1cm5cblxuICAgICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZVxuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICAvLyBJZiBlbnRlciwgc3BhY2UsIG9wZW4gbWVudVxuICAgICAgaWYgKFtcbiAgICAgICAga2V5Q29kZXMuZW50ZXIsXG4gICAgICAgIGtleUNvZGVzLnNwYWNlLFxuICAgICAgXS5pbmNsdWRlcyhrZXlDb2RlKSkgdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcblxuICAgICAgaWYgKCFtZW51KSByZXR1cm5cblxuICAgICAgLy8gSWYgbWVudSBpcyBhY3RpdmUsIGFsbG93IGRlZmF1bHRcbiAgICAgIC8vIGxpc3RJbmRleCBjaGFuZ2UgZnJvbSBtZW51XG4gICAgICBpZiAodGhpcy5pc01lbnVBY3RpdmUgJiYga2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBtZW51LmNoYW5nZUxpc3RJbmRleChlKVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpsaXN0LWluZGV4JywgbWVudS5saXN0SW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIElmIG1lbnUgaXMgbm90IGFjdGl2ZSwgdXAgYW5kIGRvd24gY2FuIGRvXG4gICAgICAvLyBvbmUgb2YgMiB0aGluZ3MuIElmIG11bHRpcGxlLCBvcGVucyB0aGVcbiAgICAgIC8vIG1lbnUsIGlmIG5vdCwgd2lsbCBjeWNsZSB0aHJvdWdoIGFsbFxuICAgICAgLy8gYXZhaWxhYmxlIG9wdGlvbnNcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNNZW51QWN0aXZlICYmXG4gICAgICAgIFtrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93bl0uaW5jbHVkZXMoa2V5Q29kZSlcbiAgICAgICkgcmV0dXJuIHRoaXMub25VcERvd24oZSlcblxuICAgICAgLy8gSWYgZXNjYXBlIGRlYWN0aXZhdGUgdGhlIG1lbnVcbiAgICAgIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MpIHJldHVybiB0aGlzLm9uRXNjRG93bihlKVxuXG4gICAgICAvLyBJZiB0YWIgLSBzZWxlY3QgaXRlbSBvciBjbG9zZSBtZW51XG4gICAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSByZXR1cm4gdGhpcy5vblRhYkRvd24oZSlcblxuICAgICAgLy8gSWYgc3BhY2UgcHJldmVudERlZmF1bHRcbiAgICAgIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5zcGFjZSkgcmV0dXJuIHRoaXMub25TcGFjZURvd24oZSlcbiAgICB9LFxuICAgIG9uTWVudUFjdGl2ZUNoYW5nZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBJZiBtZW51IGlzIGNsb3NpbmcgYW5kIG11bGl0cGxlXG4gICAgICAvLyBvciBtZW51SW5kZXggaXMgYWxyZWFkeSBzZXRcbiAgICAgIC8vIHNraXAgbWVudSBpbmRleCByZWNhbGN1bGF0aW9uXG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLm11bHRpcGxlICYmICF2YWwpIHx8XG4gICAgICAgIHRoaXMuZ2V0TWVudUluZGV4KCkgPiAtMVxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUgfHwgIXRoaXMuaXNEaXJ0eSkgcmV0dXJuXG5cbiAgICAgIC8vIFdoZW4gbWVudSBvcGVucywgc2V0IGluZGV4IG9mIGZpcnN0IGFjdGl2ZSBpdGVtXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUudGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1lbnUudGlsZXNbaV0uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRoaXMuc2V0TWVudUluZGV4KGkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25Nb3VzZVVwIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzTW91c2VEb3duICYmXG4gICAgICAgIGUud2hpY2ggIT09IDMgJiZcbiAgICAgICAgdGhpcy5pc0ludGVyYWN0aXZlXG4gICAgICApIHtcbiAgICAgICAgLy8gSWYgYXBwZW5kIGlubmVyIGlzIHByZXNlbnRcbiAgICAgICAgLy8gYW5kIHRoZSB0YXJnZXQgaXMgaXRzZWxmXG4gICAgICAgIC8vIG9yIGluc2lkZSwgdG9nZ2xlIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuaXNBcHBlbmRJbm5lcihlLnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiAodGhpcy5pc01lbnVBY3RpdmUgPSAhdGhpcy5pc01lbnVBY3RpdmUpKVxuICAgICAgICAvLyBJZiB1c2VyIGlzIGNsaWNraW5nIGluIHRoZSBjb250YWluZXJcbiAgICAgICAgLy8gYW5kIGZpZWxkIGlzIGVuY2xvc2VkLCBhY3RpdmF0ZSBpdFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmNsb3NlZCkge1xuICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvblNjcm9sbCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsVG9wID0gMCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5sYXN0SXRlbSA+IHRoaXMuY29tcHV0ZWRJdGVtcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IHNob3dNb3JlSXRlbXMgPSAoXG4gICAgICAgICAgdGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsSGVpZ2h0IC1cbiAgICAgICAgICAodGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsVG9wICtcbiAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKS5jbGllbnRIZWlnaHQpXG4gICAgICAgICkgPCAyMDBcblxuICAgICAgICBpZiAoc2hvd01vcmVJdGVtcykge1xuICAgICAgICAgIHRoaXMubGFzdEl0ZW0gKz0gMjBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TcGFjZURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gICAgb25UYWJEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy4kcmVmcy5tZW51XG5cbiAgICAgIGlmICghbWVudSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSBtZW51LmFjdGl2ZVRpbGVcblxuICAgICAgLy8gQW4gaXRlbSB0aGF0IGlzIHNlbGVjdGVkIGJ5XG4gICAgICAvLyBtZW51LWluZGV4IHNob3VsZCB0b2dnbGVkXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLm11bHRpcGxlICYmXG4gICAgICAgIGFjdGl2ZVRpbGUgJiZcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmVcbiAgICAgICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGFjdGl2ZVRpbGUuY2xpY2soKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgbWFrZSBpdCBoZXJlLFxuICAgICAgICAvLyB0aGUgdXNlciBoYXMgbm8gc2VsZWN0ZWQgaW5kZXhlc1xuICAgICAgICAvLyBhbmQgaXMgcHJvYmFibHkgdGFiYmluZyBvdXRcbiAgICAgICAgdGhpcy5ibHVyKGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvblVwRG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUpIHJldHVyblxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkbyBub3QgY3ljbGUgdGhlaXIgdmFsdWVcbiAgICAgIC8vIHdoZW4gcHJlc3NpbmcgdXAgb3IgZG93biwgaW5zdGVhZCBhY3RpdmF0ZVxuICAgICAgLy8gdGhlIG1lbnVcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSByZXR1cm4gdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlXG5cbiAgICAgIC8vIEN5Y2xlIHRocm91Z2ggYXZhaWxhYmxlIHZhbHVlcyB0byBhY2hpZXZlXG4gICAgICAvLyBzZWxlY3QgbmF0aXZlIGJlaGF2aW9yXG4gICAgICBtZW51LmlzQm9vdGVkID0gdHJ1ZVxuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgbWVudS5nZXRUaWxlcygpXG4gICAgICAgIGtleUNvZGVzLnVwID09PSBrZXlDb2RlID8gbWVudS5wcmV2VGlsZSgpIDogbWVudS5uZXh0VGlsZSgpXG4gICAgICAgIG1lbnUuYWN0aXZlVGlsZSAmJiBtZW51LmFjdGl2ZVRpbGUuY2xpY2soKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlbGVjdEl0ZW0gKGl0ZW06IG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5yZXR1cm5PYmplY3QgPyBpdGVtIDogdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxWYWx1ZSA9ICh0aGlzLmludGVybmFsVmFsdWUgfHwgW10pLnNsaWNlKClcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZmluZEV4aXN0aW5nSW5kZXgoaXRlbSlcblxuICAgICAgICBpICE9PSAtMSA/IGludGVybmFsVmFsdWUuc3BsaWNlKGksIDEpIDogaW50ZXJuYWxWYWx1ZS5wdXNoKGl0ZW0pXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoaW50ZXJuYWxWYWx1ZS5tYXAoKGk6IG9iamVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJldHVybk9iamVjdCA/IGkgOiB0aGlzLmdldFZhbHVlKGkpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIC8vIFdoZW4gc2VsZWN0aW5nIG11bHRpcGxlXG4gICAgICAgIC8vIGFkanVzdCBtZW51IGFmdGVyIGVhY2hcbiAgICAgICAgLy8gc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLm1lbnUgJiZcbiAgICAgICAgICAgICh0aGlzLiRyZWZzLm1lbnUgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkudXBkYXRlRGltZW5zaW9ucygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHJlc2V0IGxpc3QgaW5kZXggZm9yIG11bHRpcGxlXG4gICAgICAgIC8vIHRvIGtlZXAgaGlnaGxpZ2h0IHdoZW4gYW4gaXRlbSBpcyB0b2dnbGVkXG4gICAgICAgIC8vIG9uIGFuZCBvZmZcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSByZXR1cm5cblxuICAgICAgICBjb25zdCBsaXN0SW5kZXggPSB0aGlzLmdldE1lbnVJbmRleCgpXG5cbiAgICAgICAgdGhpcy5zZXRNZW51SW5kZXgoLTEpXG5cbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gaXRlbSB0byByZS1oaWdobGlnaHRcbiAgICAgICAgLy8gd2hlbiBzZWxlY3Rpb25zIGFyZSBoaWRkZW5cbiAgICAgICAgaWYgKHRoaXMuaGlkZVNlbGVjdGVkKSByZXR1cm5cblxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLnNldE1lbnVJbmRleChsaXN0SW5kZXgpKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0TWVudUluZGV4IChpbmRleDogbnVtYmVyKSB7XG4gICAgICB0aGlzLiRyZWZzLm1lbnUgJiYgKCh0aGlzLiRyZWZzLm1lbnUgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubGlzdEluZGV4ID0gaW5kZXgpXG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZEl0ZW1zICgpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXVxuICAgICAgY29uc3QgdmFsdWVzID0gIXRoaXMubXVsdGlwbGUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgICA/IFt0aGlzLmludGVybmFsVmFsdWVdXG4gICAgICAgIDogdGhpcy5pbnRlcm5hbFZhbHVlXG5cbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgodiA9PiB0aGlzLnZhbHVlQ29tcGFyYXRvcihcbiAgICAgICAgICB0aGlzLmdldFZhbHVlKHYpLFxuICAgICAgICAgIHRoaXMuZ2V0VmFsdWUodmFsdWUpXG4gICAgICAgICkpXG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5hbGxJdGVtc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRJdGVtc1xuICAgIH0sXG4gICAgc2V0VmFsdWUgKHZhbHVlOiBhbnkpIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5pbnRlcm5hbFZhbHVlXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWx1ZVxuICAgICAgdmFsdWUgIT09IG9sZFZhbHVlICYmIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKVxuICAgIH0sXG4gICAgaXNBcHBlbmRJbm5lciAodGFyZ2V0OiBhbnkpIHtcbiAgICAgIC8vIHJldHVybiB0cnVlIGlmIGFwcGVuZCBpbm5lciBpcyBwcmVzZW50XG4gICAgICAvLyBhbmQgdGhlIHRhcmdldCBpcyBpdHNlbGYgb3IgaW5zaWRlXG4gICAgICBjb25zdCBhcHBlbmRJbm5lciA9IHRoaXMuJHJlZnNbJ2FwcGVuZC1pbm5lciddXG5cbiAgICAgIHJldHVybiBhcHBlbmRJbm5lciAmJiAoYXBwZW5kSW5uZXIgPT09IHRhcmdldCB8fCBhcHBlbmRJbm5lci5jb250YWlucyh0YXJnZXQpKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0ICcuL1ZHcmlkLnNhc3MnXG5cbmltcG9ydCBWdWUsIHsgUHJvcE9wdGlvbnMgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuaW1wb3J0IHsgdXBwZXJGaXJzdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLy8gbm8geHNcbmNvbnN0IGJyZWFrcG9pbnRzID0gWydzbScsICdtZCcsICdsZycsICd4bCddXG5cbmNvbnN0IEFMSUdOTUVOVCA9IFsnc3RhcnQnLCAnZW5kJywgJ2NlbnRlciddXG5cbmZ1bmN0aW9uIG1ha2VQcm9wcyAocHJlZml4OiBzdHJpbmcsIGRlZjogKCkgPT4gUHJvcE9wdGlvbnMpIHtcbiAgcmV0dXJuIGJyZWFrcG9pbnRzLnJlZHVjZSgocHJvcHMsIHZhbCkgPT4ge1xuICAgIHByb3BzW3ByZWZpeCArIHVwcGVyRmlyc3QodmFsKV0gPSBkZWYoKVxuICAgIHJldHVybiBwcm9wc1xuICB9LCB7fSBhcyBEaWN0aW9uYXJ5PFByb3BPcHRpb25zPilcbn1cblxuY29uc3QgYWxpZ25WYWxpZGF0b3IgPSAoc3RyOiBhbnkpID0+IFsuLi5BTElHTk1FTlQsICdiYXNlbGluZScsICdzdHJldGNoJ10uaW5jbHVkZXMoc3RyKVxuY29uc3QgYWxpZ25Qcm9wcyA9IG1ha2VQcm9wcygnYWxpZ24nLCAoKSA9PiAoe1xuICB0eXBlOiBTdHJpbmcsXG4gIGRlZmF1bHQ6IG51bGwsXG4gIHZhbGlkYXRvcjogYWxpZ25WYWxpZGF0b3IsXG59KSlcblxuY29uc3QganVzdGlmeVZhbGlkYXRvciA9IChzdHI6IGFueSkgPT4gWy4uLkFMSUdOTUVOVCwgJ3NwYWNlLWJldHdlZW4nLCAnc3BhY2UtYXJvdW5kJ10uaW5jbHVkZXMoc3RyKVxuY29uc3QganVzdGlmeVByb3BzID0gbWFrZVByb3BzKCdqdXN0aWZ5JywgKCkgPT4gKHtcbiAgdHlwZTogU3RyaW5nLFxuICBkZWZhdWx0OiBudWxsLFxuICB2YWxpZGF0b3I6IGp1c3RpZnlWYWxpZGF0b3IsXG59KSlcblxuY29uc3QgYWxpZ25Db250ZW50VmFsaWRhdG9yID0gKHN0cjogYW55KSA9PiBbLi4uQUxJR05NRU5ULCAnc3BhY2UtYmV0d2VlbicsICdzcGFjZS1hcm91bmQnLCAnc3RyZXRjaCddLmluY2x1ZGVzKHN0cilcbmNvbnN0IGFsaWduQ29udGVudFByb3BzID0gbWFrZVByb3BzKCdhbGlnbkNvbnRlbnQnLCAoKSA9PiAoe1xuICB0eXBlOiBTdHJpbmcsXG4gIGRlZmF1bHQ6IG51bGwsXG4gIHZhbGlkYXRvcjogYWxpZ25Db250ZW50VmFsaWRhdG9yLFxufSkpXG5cbmNvbnN0IHByb3BNYXAgPSB7XG4gIGFsaWduOiBPYmplY3Qua2V5cyhhbGlnblByb3BzKSxcbiAganVzdGlmeTogT2JqZWN0LmtleXMoanVzdGlmeVByb3BzKSxcbiAgYWxpZ25Db250ZW50OiBPYmplY3Qua2V5cyhhbGlnbkNvbnRlbnRQcm9wcyksXG59XG5cbmNvbnN0IGNsYXNzTWFwID0ge1xuICBhbGlnbjogJ2FsaWduJyxcbiAganVzdGlmeTogJ2p1c3RpZnknLFxuICBhbGlnbkNvbnRlbnQ6ICdhbGlnbi1jb250ZW50Jyxcbn1cblxuZnVuY3Rpb24gYnJlYWtwb2ludENsYXNzICh0eXBlOiBrZXlvZiB0eXBlb2YgcHJvcE1hcCwgcHJvcDogc3RyaW5nLCB2YWw6IHN0cmluZykge1xuICBsZXQgY2xhc3NOYW1lID0gY2xhc3NNYXBbdHlwZV1cbiAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIGlmIChwcm9wKSB7XG4gICAgLy8gYWxpZ25TbSAtPiBTbVxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBwcm9wLnJlcGxhY2UodHlwZSwgJycpXG4gICAgY2xhc3NOYW1lICs9IGAtJHticmVha3BvaW50fWBcbiAgfVxuICAvLyAuYWxpZ24taXRlbXMtc20tY2VudGVyXG4gIGNsYXNzTmFtZSArPSBgLSR7dmFsfWBcbiAgcmV0dXJuIGNsYXNzTmFtZS50b0xvd2VyQ2FzZSgpXG59XG5cbmNvbnN0IGNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIGFueVtdPigpXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1yb3cnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgfSxcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBub0d1dHRlcnM6IEJvb2xlYW4sXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGFsaWduVmFsaWRhdG9yLFxuICAgIH0sXG4gICAgLi4uYWxpZ25Qcm9wcyxcbiAgICBqdXN0aWZ5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBqdXN0aWZ5VmFsaWRhdG9yLFxuICAgIH0sXG4gICAgLi4uanVzdGlmeVByb3BzLFxuICAgIGFsaWduQ29udGVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogYWxpZ25Db250ZW50VmFsaWRhdG9yLFxuICAgIH0sXG4gICAgLi4uYWxpZ25Db250ZW50UHJvcHMsXG4gIH0sXG4gIHJlbmRlciAoaCwgeyBwcm9wcywgZGF0YSwgY2hpbGRyZW4gfSkge1xuICAgIC8vIFN1cGVyLWZhc3QgbWVtb2l6YXRpb24gYmFzZWQgb24gcHJvcHMsIDV4IGZhc3RlciB0aGFuIEpTT04uc3RyaW5naWZ5XG4gICAgbGV0IGNhY2hlS2V5ID0gJydcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcbiAgICAgIGNhY2hlS2V5ICs9IFN0cmluZygocHJvcHMgYXMgYW55KVtwcm9wXSlcbiAgICB9XG4gICAgbGV0IGNsYXNzTGlzdCA9IGNhY2hlLmdldChjYWNoZUtleSlcblxuICAgIGlmICghY2xhc3NMaXN0KSB7XG4gICAgICBjbGFzc0xpc3QgPSBbXVxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGBhbGlnbmAsIGBqdXN0aWZ5YCwgYGFsaWduQ29udGVudGAgYnJlYWtwb2ludCBwcm9wc1xuICAgICAgbGV0IHR5cGU6IGtleW9mIHR5cGVvZiBwcm9wTWFwXG4gICAgICBmb3IgKHR5cGUgaW4gcHJvcE1hcCkge1xuICAgICAgICBwcm9wTWFwW3R5cGVdLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IChwcm9wcyBhcyBhbnkpW3Byb3BdXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYnJlYWtwb2ludENsYXNzKHR5cGUsIHByb3AsIHZhbHVlKVxuICAgICAgICAgIGlmIChjbGFzc05hbWUpIGNsYXNzTGlzdCEucHVzaChjbGFzc05hbWUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNsYXNzTGlzdC5wdXNoKHtcbiAgICAgICAgJ25vLWd1dHRlcnMnOiBwcm9wcy5ub0d1dHRlcnMsXG4gICAgICAgICdyb3ctLWRlbnNlJzogcHJvcHMuZGVuc2UsXG4gICAgICAgIFtgYWxpZ24tJHtwcm9wcy5hbGlnbn1gXTogcHJvcHMuYWxpZ24sXG4gICAgICAgIFtganVzdGlmeS0ke3Byb3BzLmp1c3RpZnl9YF06IHByb3BzLmp1c3RpZnksXG4gICAgICAgIFtgYWxpZ24tY29udGVudC0ke3Byb3BzLmFsaWduQ29udGVudH1gXTogcHJvcHMuYWxpZ25Db250ZW50LFxuICAgICAgfSlcblxuICAgICAgY2FjaGUuc2V0KGNhY2hlS2V5LCBjbGFzc0xpc3QpXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoXG4gICAgICBwcm9wcy50YWcsXG4gICAgICBtZXJnZURhdGEoZGF0YSwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3JvdycsXG4gICAgICAgIGNsYXNzOiBjbGFzc0xpc3QsXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKVxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRleHRhcmVhLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWVGV4dEZpZWxkIGZyb20gJy4uL1ZUZXh0RmllbGQvVlRleHRGaWVsZCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgVnVlIHtcbiAgJHJlZnM6IHtcbiAgICBpbnB1dDogSFRNTFRleHRBcmVhRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnM8b3B0aW9ucyAmXG4gIEluc3RhbmNlVHlwZTx0eXBlb2YgVlRleHRGaWVsZD5cbj4oXG4gIFZUZXh0RmllbGRcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGV4dGFyZWEnLFxuXG4gIHByb3BzOiB7XG4gICAgYXV0b0dyb3c6IEJvb2xlYW4sXG4gICAgbm9SZXNpemU6IEJvb2xlYW4sXG4gICAgcm93SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMjQsXG4gICAgICB2YWxpZGF0b3I6ICh2OiBhbnkpID0+ICFpc05hTihwYXJzZUZsb2F0KHYpKSxcbiAgICB9LFxuICAgIHJvd3M6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA1LFxuICAgICAgdmFsaWRhdG9yOiAodjogYW55KSA9PiAhaXNOYU4ocGFyc2VJbnQodiwgMTApKSxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXRleHRhcmVhJzogdHJ1ZSxcbiAgICAgICAgJ3YtdGV4dGFyZWEtLWF1dG8tZ3Jvdyc6IHRoaXMuYXV0b0dyb3csXG4gICAgICAgICd2LXRleHRhcmVhLS1uby1yZXNpemUnOiB0aGlzLm5vUmVzaXplSGFuZGxlLFxuICAgICAgICAuLi5WVGV4dEZpZWxkLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgbm9SZXNpemVIYW5kbGUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubm9SZXNpemUgfHwgdGhpcy5hdXRvR3Jvd1xuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBsYXp5VmFsdWUgKCkge1xuICAgICAgdGhpcy5hdXRvR3JvdyAmJiB0aGlzLiRuZXh0VGljayh0aGlzLmNhbGN1bGF0ZUlucHV0SGVpZ2h0KVxuICAgIH0sXG4gICAgcm93SGVpZ2h0ICgpIHtcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodClcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hdXRvR3JvdyAmJiB0aGlzLmNhbGN1bGF0ZUlucHV0SGVpZ2h0KClcbiAgICB9LCAwKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxjdWxhdGVJbnB1dEhlaWdodCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuJHJlZnMuaW5wdXRcbiAgICAgIGlmICghaW5wdXQpIHJldHVyblxuXG4gICAgICBpbnB1dC5zdHlsZS5oZWlnaHQgPSAnMCdcbiAgICAgIGNvbnN0IGhlaWdodCA9IGlucHV0LnNjcm9sbEhlaWdodFxuICAgICAgY29uc3QgbWluSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5yb3dzLCAxMCkgKiBwYXJzZUZsb2F0KHRoaXMucm93SGVpZ2h0KVxuICAgICAgLy8gVGhpcyBoYXMgdG8gYmUgZG9uZSBBU0FQLCB3YWl0aW5nIGZvciBWdWVcbiAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgRE9NIGNhdXNlcyB1Z2x5IGxheW91dCBqdW1waW5nXG4gICAgICBpbnB1dC5zdHlsZS5oZWlnaHQgPSBNYXRoLm1heChtaW5IZWlnaHQsIGhlaWdodCkgKyAncHgnXG4gICAgfSxcbiAgICBnZW5JbnB1dCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLmdlbklucHV0LmNhbGwodGhpcylcblxuICAgICAgaW5wdXQudGFnID0gJ3RleHRhcmVhJ1xuICAgICAgZGVsZXRlIGlucHV0LmRhdGEhLmF0dHJzIS50eXBlXG4gICAgICBpbnB1dC5kYXRhIS5hdHRycyEucm93cyA9IHRoaXMucm93c1xuXG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9LFxuICAgIG9uSW5wdXQgKGU6IEV2ZW50KSB7XG4gICAgICBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5vbklucHV0LmNhbGwodGhpcywgZSlcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodCgpXG4gICAgfSxcbiAgICBvbktleURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnRzIGNsb3Npbmcgb2YgYVxuICAgICAgLy8gZGlhbG9nIHdoZW4gcHJlc3NpbmdcbiAgICAgIC8vIGVudGVyXG4gICAgICBpZiAodGhpcy5pc0ZvY3VzZWQgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2tleWRvd24nLCBlKVxuICAgIH0sXG4gIH0sXG59KVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3Ytc3RlcHBlcicse21vZGVsOnt2YWx1ZTooX3ZtLmUxKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmUxPSQkdn0sZXhwcmVzc2lvbjpcImUxXCJ9fSxbX2MoJ2xvYWRpbmcnLHthdHRyczp7XCJhY3RpdmVcIjpfdm0uaXNMb2FkaW5nLFwibG9hZGVyXCI6XCJiYXJzXCIsXCJpcy1mdWxsLXBhZ2VcIjp0cnVlLFwiY29sb3JcIjpcImJsdWVcIn0sb246e1widXBkYXRlOmFjdGl2ZVwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmlzTG9hZGluZz0kZXZlbnR9fX0pLF92bS5fdihcIiBcIiksX2MoJ3Ytc3RlcHBlci1oZWFkZXInLFtfYygndi1zdGVwcGVyLXN0ZXAnLHthdHRyczp7XCJjb21wbGV0ZVwiOl92bS5lMSA+IDEsXCJzdGVwXCI6XCIxXCIsXCJlZGl0YWJsZVwiOmZhbHNlfX0sW192bS5fdihcIiBGdWxsIE5hbWUgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1zdGVwcGVyLXN0ZXAnLHthdHRyczp7XCJjb21wbGV0ZVwiOl92bS5lMSA+IDIsXCJzdGVwXCI6XCIyXCIsXCJlZGl0YWJsZVwiOmZhbHNlfX0sW192bS5fdihcIiBDb250YWN0IE51bWJlciBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1zdGVwcGVyLWl0ZW1zJyxbX2MoJ3Ytc3RlcHBlci1jb250ZW50Jyx7YXR0cnM6e1wic3RlcFwiOlwiMVwifX0sW19jKCd2LWNhcmQnLHtzdGF0aWNDbGFzczpcIm1iLTEyXCIsYXR0cnM6e1wiZmxhdFwiOlwiXCJ9fSxbX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCIsXCJzbTEyXCI6XCJcIn19LFtfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wicmlnaHRcIjpcIlwiLFwiZGVuc2VcIjpcIlwiLFwic29sb1wiOlwiXCIsXCJsYWJlbFwiOlwiRnVsbG5hbWVcIixcIm91dGxpbmVkXCI6XCJcIixcInBsYWNlaG9sZGVyXCI6XCJGdWxsbmFtZVwifSxtb2RlbDp7dmFsdWU6KF92bS5mdWxsbmFtZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5mdWxsbmFtZT0kJHZ9LGV4cHJlc3Npb246XCJmdWxsbmFtZVwifX0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwicHJpbWFyeVwiLFwiZGlzYWJsZWRcIjpfdm0uZnVsbG5hbWUubGVuZ3RoIDwgNX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpezsoX3ZtLmUxID0gMiksIF92bS5sb2FkQXV0aCgpfX19LFtfdm0uX3YoXCIgQ29udGludWUgXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1zdGVwcGVyLWNvbnRlbnQnLHthdHRyczp7XCJzdGVwXCI6XCIyXCJ9fSxbX2MoJ2Rpdicse2F0dHJzOntcImlkXCI6XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCJ9fSldKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPHYtc3RlcHBlciB2LW1vZGVsPVwiZTFcIj5cbiAgICAgICAgPGxvYWRpbmcgOmFjdGl2ZS5zeW5jPVwiaXNMb2FkaW5nXCIgbG9hZGVyPVwiYmFyc1wiIDppcy1mdWxsLXBhZ2U9XCJ0cnVlXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgICAgPHYtc3RlcHBlci1oZWFkZXI+XG4gICAgICAgICAgICA8di1zdGVwcGVyLXN0ZXAgOmNvbXBsZXRlPVwiZTEgPiAxXCIgc3RlcD1cIjFcIiA6ZWRpdGFibGU9XCJmYWxzZVwiPiBGdWxsIE5hbWUgPC92LXN0ZXBwZXItc3RlcD5cbiAgICAgICAgICAgIDx2LXN0ZXBwZXItc3RlcCA6Y29tcGxldGU9XCJlMSA+IDJcIiBzdGVwPVwiMlwiIDplZGl0YWJsZT1cImZhbHNlXCI+IENvbnRhY3QgTnVtYmVyIDwvdi1zdGVwcGVyLXN0ZXA+XG4gICAgICAgIDwvdi1zdGVwcGVyLWhlYWRlcj5cbiAgICAgICAgPHYtc3RlcHBlci1pdGVtcz5cbiAgICAgICAgICAgIDx2LXN0ZXBwZXItY29udGVudCBzdGVwPVwiMVwiPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJtYi0xMlwiIGZsYXQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDEyIHNtMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1tb2RlbD1cImZ1bGxuYW1lXCIgcmlnaHQgZGVuc2Ugc29sbyBsYWJlbD1cIkZ1bGxuYW1lXCIgb3V0bGluZWQgcGxhY2Vob2xkZXI9XCJGdWxsbmFtZVwiIC8+IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiZnVsbG5hbWUubGVuZ3RoIDwgNVwiIEBjbGljaz1cIjsoZTEgPSAyKSwgbG9hZEF1dGgoKVwiPiBDb250aW51ZSA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LXN0ZXBwZXItY29udGVudD5cbiAgICAgICAgICAgIDx2LXN0ZXBwZXItY29udGVudCBzdGVwPVwiMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCIgLz4gPC92LXN0ZXBwZXItY29udGVudD5cbiAgICAgICAgPC92LXN0ZXBwZXItaXRlbXM+XG4gICAgPC92LXN0ZXBwZXI+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2ZpcmViYXNldWkvZGlzdC9maXJlYmFzZXVpLmNzcydcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3Z1ZS1sb2FkaW5nLW92ZXJsYXknXG5pbXBvcnQgJ3Z1ZS1sb2FkaW5nLW92ZXJsYXkvZGlzdC92dWUtbG9hZGluZy5jc3MnXG5pbXBvcnQge1xuICAgIEdlb0NvbGxlY3Rpb25SZWZlcmVuY2Vcbn0gZnJvbSAnZ2VvZmlyZXN0b3JlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTG9hZGluZ1xuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZ1bGxuYW1lOiAnJyxcbiAgICAgICAgICAgIGUxOiAxLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIHVwZGF0ZVVzZXIoYXV0aFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYXV0aC91cGRhdGVVc2VyRGlzcGxheU5hbWUnLCB0aGlzLmZ1bGxuYW1lKVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2F1dGgvZ2V0RkNNVG9rZW4nXVxuICAgICAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gdGhpcy4kZmlyZVN0b3JlT2JqKClcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKGZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpKVxuICAgICAgICAgICAgbGV0IGQgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoYXV0aFVzZXIudWlkKS5nZXQoKVxuICAgICAgICAgICAgaWYgKCFkLmV4aXN0cykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlZi5kb2MoYXV0aFVzZXIudWlkKS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbmV3IHRoaXMuJGZpcmVTdG9yZU9iai5HZW9Qb2ludCgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiBbdG9rZW5dLFxuICAgICAgICAgICAgICAgICAgICBwcm9tb0NvZGVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGF1dGhVc2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogYXV0aFVzZXIucGhvbmVOdW1iZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoYXV0aFVzZXIudWlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAnZC5kaXNwbGF5TmFtZSc6IGF1dGhVc2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZC5waG9uZU51bWJlcic6IGF1dGhVc2VyLnBob25lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAnZC50b2tlbnMnOiB0aGlzLiRmaXJlU3RvcmVPYmouRmllbGRWYWx1ZS5hcnJheVVuaW9uKHRva2VuKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZEF1dGgoKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aCA9IHRoaXMuJGZpcmVBdXRoT2JqKClcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcmViYXNldWkgPSByZXF1aXJlKCdmaXJlYmFzZXVpJylcbiAgICAgICAgICAgICAgICBjb25zdCB1aSA9IGZpcmViYXNldWkuYXV0aC5BdXRoVUkuZ2V0SW5zdGFuY2UoKSB8fCBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShhdXRoKVxuICAgICAgICAgICAgICAgIHVpLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbkluT3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogdGhpcy4kZmlyZUF1dGhPYmouUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q291bnRyeTogJ1BIJ1xuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduSW5GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT09ICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdChhdXRoUmVzdWx0LCByZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBhdXRoUmVzdWx0LnVzZXIudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBzZWxmLmZ1bGxuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnVwZGF0ZVVzZXIoYXV0aFJlc3VsdC51c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpcmVVaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlyZVVpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZTdGVwcGVyLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWU3RlcHBlclN0ZXAgZnJvbSAnLi9WU3RlcHBlclN0ZXAnXG5pbXBvcnQgVlN0ZXBwZXJDb250ZW50IGZyb20gJy4vVlN0ZXBwZXJDb250ZW50J1xuXG4vLyBNaXhpbnNcbmltcG9ydCB7IHByb3ZpZGUgYXMgUmVnaXN0cmFibGVQcm92aWRlIH0gZnJvbSAnLi4vLi4vbWl4aW5zL3JlZ2lzdHJhYmxlJ1xuaW1wb3J0IFByb3h5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcHJveHlhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBSZWdpc3RyYWJsZVByb3ZpZGUoJ3N0ZXBwZXInKSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxudHlwZSBWU3RlcHBlclN0ZXBJbnN0YW5jZSA9IEluc3RhbmNlVHlwZTx0eXBlb2YgVlN0ZXBwZXJTdGVwPlxudHlwZSBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSA9IEluc3RhbmNlVHlwZTx0eXBlb2YgVlN0ZXBwZXJDb250ZW50PlxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1zdGVwcGVyJyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzdGVwQ2xpY2s6IHRoaXMuc3RlcENsaWNrLFxuICAgICAgaXNWZXJ0aWNhbDogdGhpcy52ZXJ0aWNhbCxcbiAgICB9XG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhbHRMYWJlbHM6IEJvb2xlYW4sXG4gICAgbm9uTGluZWFyOiBCb29sZWFuLFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIGNvbnN0IGRhdGE6IERpY3Rpb25hcnk8YW55PiA9IHtcbiAgICAgIGlzQm9vdGVkOiBmYWxzZSxcbiAgICAgIHN0ZXBzOiBbXSBhcyBWU3RlcHBlclN0ZXBJbnN0YW5jZVtdLFxuICAgICAgY29udGVudDogW10gYXMgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2VbXSxcbiAgICAgIGlzUmV2ZXJzZTogZmFsc2UsXG4gICAgfVxuXG4gICAgZGF0YS5pbnRlcm5hbExhenlWYWx1ZSA9IHRoaXMudmFsdWUgIT0gbnVsbFxuICAgICAgPyB0aGlzLnZhbHVlXG4gICAgICA6IChkYXRhWzBdIHx8IHt9KS5zdGVwIHx8IDFcblxuICAgIHJldHVybiBkYXRhXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3Ytc3RlcHBlci0taXMtYm9vdGVkJzogdGhpcy5pc0Jvb3RlZCxcbiAgICAgICAgJ3Ytc3RlcHBlci0tdmVydGljYWwnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgICAndi1zdGVwcGVyLS1hbHQtbGFiZWxzJzogdGhpcy5hbHRMYWJlbHMsXG4gICAgICAgICd2LXN0ZXBwZXItLW5vbi1saW5lYXInOiB0aGlzLm5vbkxpbmVhcixcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGludGVybmFsVmFsdWUgKHZhbCwgb2xkVmFsKSB7XG4gICAgICB0aGlzLmlzUmV2ZXJzZSA9IE51bWJlcih2YWwpIDwgTnVtYmVyKG9sZFZhbClcblxuICAgICAgb2xkVmFsICYmICh0aGlzLmlzQm9vdGVkID0gdHJ1ZSlcblxuICAgICAgdGhpcy51cGRhdGVWaWV3KClcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGxpc3RlbmVycy5pbnB1dCkge1xuICAgICAgYnJlYWtpbmcoJ0BpbnB1dCcsICdAY2hhbmdlJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy51cGRhdGVWaWV3KClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgcmVnaXN0ZXIgKGl0ZW06IFZTdGVwcGVyU3RlcEluc3RhbmNlIHwgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2UpIHtcbiAgICAgIGlmIChpdGVtLiRvcHRpb25zLm5hbWUgPT09ICd2LXN0ZXBwZXItc3RlcCcpIHtcbiAgICAgICAgdGhpcy5zdGVwcy5wdXNoKGl0ZW0gYXMgVlN0ZXBwZXJTdGVwSW5zdGFuY2UpXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uJG9wdGlvbnMubmFtZSA9PT0gJ3Ytc3RlcHBlci1jb250ZW50Jykge1xuICAgICAgICAoaXRlbSBhcyBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSkuaXNWZXJ0aWNhbCA9IHRoaXMudmVydGljYWxcbiAgICAgICAgdGhpcy5jb250ZW50LnB1c2goaXRlbSBhcyBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHVucmVnaXN0ZXIgKGl0ZW06IFZTdGVwcGVyU3RlcEluc3RhbmNlIHwgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2UpIHtcbiAgICAgIGlmIChpdGVtLiRvcHRpb25zLm5hbWUgPT09ICd2LXN0ZXBwZXItc3RlcCcpIHtcbiAgICAgICAgdGhpcy5zdGVwcyA9IHRoaXMuc3RlcHMuZmlsdGVyKChpOiBWU3RlcHBlclN0ZXBJbnN0YW5jZSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS4kb3B0aW9ucy5uYW1lID09PSAndi1zdGVwcGVyLWNvbnRlbnQnKSB7XG4gICAgICAgIChpdGVtIGFzIFZTdGVwcGVyQ29udGVudEluc3RhbmNlKS5pc1ZlcnRpY2FsID0gdGhpcy52ZXJ0aWNhbFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuZmlsdGVyKChpOiBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0ZXBDbGljayAoc3RlcDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiAodGhpcy5pbnRlcm5hbFZhbHVlID0gc3RlcCkpXG4gICAgfSxcbiAgICB1cGRhdGVWaWV3ICgpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5zdGVwcy5sZW5ndGg7IC0taW5kZXggPj0gMDspIHtcbiAgICAgICAgdGhpcy5zdGVwc1tpbmRleF0udG9nZ2xlKHRoaXMuaW50ZXJuYWxWYWx1ZSBhcyBhbnkpXG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMuY29udGVudC5sZW5ndGg7IC0taW5kZXggPj0gMDspIHtcbiAgICAgICAgdGhpcy5jb250ZW50W2luZGV4XS50b2dnbGUodGhpcy5pbnRlcm5hbFZhbHVlIGFzIGFueSwgdGhpcy5pc1JldmVyc2UpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQge1xuICBWVGFiVHJhbnNpdGlvbixcbiAgVlRhYlJldmVyc2VUcmFuc2l0aW9uLFxufSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gTWl4aW5zXG5pbXBvcnQgeyBpbmplY3QgYXMgUmVnaXN0cmFibGVJbmplY3QgfSBmcm9tICcuLi8uLi9taXhpbnMvcmVnaXN0cmFibGUnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBGdW5jdGlvbmFsQ29tcG9uZW50T3B0aW9ucywgVk5vZGVEYXRhIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBSZWdpc3RyYWJsZUluamVjdCgnc3RlcHBlcicsICd2LXN0ZXBwZXItY29udGVudCcsICd2LXN0ZXBwZXInKVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEluc3RhbmNlVHlwZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkcmVmczoge1xuICAgIHdyYXBwZXI6IEhUTUxFbGVtZW50XG4gIH1cbiAgaXNWZXJ0aWNhbFByb3ZpZGVkOiBib29sZWFuXG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXN0ZXBwZXItY29udGVudCcsXG5cbiAgaW5qZWN0OiB7XG4gICAgaXNWZXJ0aWNhbFByb3ZpZGVkOiB7XG4gICAgICBmcm9tOiAnaXNWZXJ0aWNhbCcsXG4gICAgfSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIHN0ZXA6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IDAgYXMgbnVtYmVyIHwgc3RyaW5nLFxuICAgICAgLy8gTXVzdCBiZSBudWxsIHRvIGFsbG93XG4gICAgICAvLyBwcmV2aW91cyBjb21wYXJpc29uXG4gICAgICBpc0FjdGl2ZTogbnVsbCBhcyBib29sZWFuIHwgbnVsbCxcbiAgICAgIGlzUmV2ZXJzZTogZmFsc2UsXG4gICAgICBpc1ZlcnRpY2FsOiB0aGlzLmlzVmVydGljYWxQcm92aWRlZCxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZFRyYW5zaXRpb24gKCk6IEZ1bmN0aW9uYWxDb21wb25lbnRPcHRpb25zIHtcbiAgICAgIC8vIEZpeCBmb3IgIzg5NzhcbiAgICAgIGNvbnN0IHJldmVyc2UgPSB0aGlzLiR2dWV0aWZ5LnJ0bCA/ICF0aGlzLmlzUmV2ZXJzZSA6IHRoaXMuaXNSZXZlcnNlXG5cbiAgICAgIHJldHVybiByZXZlcnNlXG4gICAgICAgID8gVlRhYlJldmVyc2VUcmFuc2l0aW9uXG4gICAgICAgIDogVlRhYlRyYW5zaXRpb25cbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGlmICghdGhpcy5pc1ZlcnRpY2FsKSByZXR1cm4ge31cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXNBY3RpdmUgKGN1cnJlbnQsIHByZXZpb3VzKSB7XG4gICAgICAvLyBJZiBhY3RpdmUgYW5kIHRoZSBwcmV2aW91cyBzdGF0ZVxuICAgICAgLy8gd2FzIG51bGwsIGlzIGp1c3QgYm9vdGluZyB1cFxuICAgICAgaWYgKGN1cnJlbnQgJiYgcHJldmlvdXMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9ICdhdXRvJ1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmlzVmVydGljYWwpIHJldHVyblxuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgdGhpcy5lbnRlcigpXG4gICAgICBlbHNlIHRoaXMubGVhdmUoKVxuICAgIH0sXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kcmVmcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgICB0aGlzLm9uVHJhbnNpdGlvbixcbiAgICAgIGZhbHNlXG4gICAgKVxuICAgIHRoaXMuc3RlcHBlciAmJiB0aGlzLnN0ZXBwZXIucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB0aGlzLiRyZWZzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIHRoaXMub25UcmFuc2l0aW9uLFxuICAgICAgZmFsc2VcbiAgICApXG4gICAgdGhpcy5zdGVwcGVyICYmIHRoaXMuc3RlcHBlci51bnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uVHJhbnNpdGlvbiAoZTogVHJhbnNpdGlvbkV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHxcbiAgICAgICAgZS5wcm9wZXJ0eU5hbWUgIT09ICdoZWlnaHQnXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmhlaWdodCA9ICdhdXRvJ1xuICAgIH0sXG4gICAgZW50ZXIgKCkge1xuICAgICAgbGV0IHNjcm9sbEhlaWdodCA9IDBcblxuICAgICAgLy8gUmVuZGVyIGJ1ZyB3aXRoIGhlaWdodFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kcmVmcy53cmFwcGVyLnNjcm9sbEhlaWdodFxuICAgICAgfSlcblxuICAgICAgdGhpcy5oZWlnaHQgPSAwXG5cbiAgICAgIC8vIEdpdmUgdGhlIGNvbGxhcHNpbmcgZWxlbWVudCB0aW1lIHRvIGNvbGxhcHNlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaXNBY3RpdmUgJiYgKHRoaXMuaGVpZ2h0ID0gKHNjcm9sbEhlaWdodCB8fCAnYXV0bycpKSwgNDUwKVxuICAgIH0sXG4gICAgbGVhdmUgKCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLiRyZWZzLndyYXBwZXIuY2xpZW50SGVpZ2h0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmhlaWdodCA9IDApLCAxMClcbiAgICB9LFxuICAgIHRvZ2dsZSAoc3RlcDogc3RyaW5nIHwgbnVtYmVyLCByZXZlcnNlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gc3RlcC50b1N0cmluZygpID09PSB0aGlzLnN0ZXAudG9TdHJpbmcoKVxuICAgICAgdGhpcy5pc1JldmVyc2UgPSByZXZlcnNlXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgY29udGVudERhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc3RlcHBlcl9fY29udGVudCcsXG4gICAgfSBhcyBWTm9kZURhdGFcbiAgICBjb25zdCB3cmFwcGVyRGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyX193cmFwcGVyJyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZlcnRpY2FsKSB7XG4gICAgICBjb250ZW50RGF0YS5kaXJlY3RpdmVzID0gW3tcbiAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29uc3Qgd3JhcHBlciA9IGgoJ2RpdicsIHdyYXBwZXJEYXRhLCBbdGhpcy4kc2xvdHMuZGVmYXVsdF0pXG4gICAgY29uc3QgY29udGVudCA9IGgoJ2RpdicsIGNvbnRlbnREYXRhLCBbd3JhcHBlcl0pXG5cbiAgICByZXR1cm4gaCh0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbiwge1xuICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICB9LCBbY29udGVudF0pXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uLy4uL21peGlucy9yZWdpc3RyYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbnR5cGUgVnVldGlmeVN0ZXBwZXJSdWxlVmFsaWRhdG9yID0gKCkgPT4gc3RyaW5nIHwgYm9vbGVhblxuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFJlZ2lzdHJhYmxlSW5qZWN0KCdzdGVwcGVyJywgJ3Ytc3RlcHBlci1zdGVwJywgJ3Ytc3RlcHBlcicpXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gIHN0ZXBDbGljazogKHN0ZXA6IG51bWJlciB8IHN0cmluZykgPT4gdm9pZFxufVxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc3RlcHBlci1zdGVwJyxcblxuICBkaXJlY3RpdmVzOiB7IHJpcHBsZSB9LFxuXG4gIGluamVjdDogWydzdGVwQ2xpY2snXSxcblxuICBwcm9wczoge1xuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBjb21wbGV0ZTogQm9vbGVhbixcbiAgICBjb21wbGV0ZUljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY29tcGxldGUnLFxuICAgIH0sXG4gICAgZWRpdGFibGU6IEJvb2xlYW4sXG4gICAgZWRpdEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZWRpdCcsXG4gICAgfSxcbiAgICBlcnJvckljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZXJyb3InLFxuICAgIH0sXG4gICAgcnVsZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPFZ1ZXRpZnlTdGVwcGVyUnVsZVZhbGlkYXRvcltdPixcbiAgICBzdGVwOiBbTnVtYmVyLCBTdHJpbmddLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICBpc0luYWN0aXZlOiB0cnVlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1zdGVwcGVyX19zdGVwLS1hY3RpdmUnOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICAndi1zdGVwcGVyX19zdGVwLS1lZGl0YWJsZSc6IHRoaXMuZWRpdGFibGUsXG4gICAgICAgICd2LXN0ZXBwZXJfX3N0ZXAtLWluYWN0aXZlJzogdGhpcy5pc0luYWN0aXZlLFxuICAgICAgICAndi1zdGVwcGVyX19zdGVwLS1lcnJvciBlcnJvci0tdGV4dCc6IHRoaXMuaGFzRXJyb3IsXG4gICAgICAgICd2LXN0ZXBwZXJfX3N0ZXAtLWNvbXBsZXRlJzogdGhpcy5jb21wbGV0ZSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc0Vycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzLnNvbWUodmFsaWRhdGUgPT4gdmFsaWRhdGUoKSAhPT0gdHJ1ZSlcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuc3RlcHBlciAmJiB0aGlzLnN0ZXBwZXIucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB0aGlzLnN0ZXBwZXIgJiYgdGhpcy5zdGVwcGVyLnVucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgICBpZiAodGhpcy5lZGl0YWJsZSkge1xuICAgICAgICB0aGlzLnN0ZXBDbGljayh0aGlzLnN0ZXApXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5JY29uIChpY29uOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCBpY29uKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXN0ZXBwZXJfX2xhYmVsJyxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgfSxcbiAgICBnZW5TdGVwICgpIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gKCF0aGlzLmhhc0Vycm9yICYmICh0aGlzLmNvbXBsZXRlIHx8IHRoaXMuaXNBY3RpdmUpKSA/IHRoaXMuY29sb3IgOiBmYWxzZVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyX19zdGVwX19zdGVwJyxcbiAgICAgIH0pLCB0aGlzLmdlblN0ZXBDb250ZW50KCkpXG4gICAgfSxcbiAgICBnZW5TdGVwQ29udGVudCAoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXG5cbiAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5nZW5JY29uKHRoaXMuZXJyb3JJY29uKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb21wbGV0ZSkge1xuICAgICAgICBpZiAodGhpcy5lZGl0YWJsZSkge1xuICAgICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5nZW5JY29uKHRoaXMuZWRpdEljb24pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5nZW5JY29uKHRoaXMuY29tcGxldGVJY29uKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChTdHJpbmcodGhpcy5zdGVwKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgfSxcbiAgICB0b2dnbGUgKHN0ZXA6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHN0ZXAudG9TdHJpbmcoKSA9PT0gdGhpcy5zdGVwLnRvU3RyaW5nKClcbiAgICAgIHRoaXMuaXNJbmFjdGl2ZSA9IE51bWJlcihzdGVwKSA8IE51bWJlcih0aGlzLnN0ZXApXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyX19zdGVwJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiAncmlwcGxlJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuZWRpdGFibGUsXG4gICAgICB9XSxcbiAgICAgIG9uOiB7IGNsaWNrOiB0aGlzLmNsaWNrIH0sXG4gICAgfSwgW1xuICAgICAgdGhpcy5nZW5TdGVwKCksXG4gICAgICB0aGlzLmdlbkxhYmVsKCksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IFZTdGVwcGVyIGZyb20gJy4vVlN0ZXBwZXInXG5pbXBvcnQgVlN0ZXBwZXJTdGVwIGZyb20gJy4vVlN0ZXBwZXJTdGVwJ1xuaW1wb3J0IFZTdGVwcGVyQ29udGVudCBmcm9tICcuL1ZTdGVwcGVyQ29udGVudCdcblxuY29uc3QgVlN0ZXBwZXJIZWFkZXIgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LXN0ZXBwZXJfX2hlYWRlcicpXG5jb25zdCBWU3RlcHBlckl0ZW1zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1zdGVwcGVyX19pdGVtcycpXG5cbmV4cG9ydCB7XG4gIFZTdGVwcGVyLFxuICBWU3RlcHBlckNvbnRlbnQsXG4gIFZTdGVwcGVyU3RlcCxcbiAgVlN0ZXBwZXJIZWFkZXIsXG4gIFZTdGVwcGVySXRlbXMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJF92dWV0aWZ5X3N1YmNvbXBvbmVudHM6IHtcbiAgICBWU3RlcHBlcixcbiAgICBWU3RlcHBlckNvbnRlbnQsXG4gICAgVlN0ZXBwZXJTdGVwLFxuICAgIFZTdGVwcGVySGVhZGVyLFxuICAgIFZTdGVwcGVySXRlbXMsXG4gIH0sXG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpcmVVaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGY3YmI1NTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlyZVVpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlyZVVpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTIyMGQxMTJcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHNcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTcGFjZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTdGVwcGVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3RlcHBlcic7XG5pbXBvcnQgeyBWU3RlcHBlckNvbnRlbnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTdGVwcGVyJztcbmltcG9ydCB7IFZTdGVwcGVySGVhZGVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3RlcHBlcic7XG5pbXBvcnQgeyBWU3RlcHBlckl0ZW1zIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3RlcHBlcic7XG5pbXBvcnQgeyBWU3RlcHBlclN0ZXAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTdGVwcGVyJztcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUZXh0RmllbGQnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZGbGV4LFZMYXlvdXQsVlNwYWNlcixWU3RlcHBlcixWU3RlcHBlckNvbnRlbnQsVlN0ZXBwZXJIZWFkZXIsVlN0ZXBwZXJJdGVtcyxWU3RlcHBlclN0ZXAsVlRleHRGaWVsZH0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ2hlY2tib3guc2FzcydcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvX3NlbGVjdGlvbi1jb250cm9scy5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5pbXBvcnQgVklucHV0IGZyb20gJy4uL1ZJbnB1dCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgU2VsZWN0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc2VsZWN0YWJsZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGFibGUuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY2hlY2tib3gnLFxuXG4gIHByb3BzOiB7XG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjaGVja2JveEluZGV0ZXJtaW5hdGUnLFxuICAgIH0sXG4gICAgb2ZmSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjaGVja2JveE9mZicsXG4gICAgfSxcbiAgICBvbkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2hlY2tib3hPbicsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRJbmRldGVybWluYXRlOiB0aGlzLmluZGV0ZXJtaW5hdGUsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtaW5wdXQtLXNlbGVjdGlvbi1jb250cm9scyc6IHRydWUsXG4gICAgICAgICd2LWlucHV0LS1jaGVja2JveCc6IHRydWUsXG4gICAgICAgICd2LWlucHV0LS1pbmRldGVybWluYXRlJzogdGhpcy5pbnB1dEluZGV0ZXJtaW5hdGUsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZEljb24gKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5pbnB1dEluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZUljb25cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkljb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZkljb25cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIERvIG5vdCByZXR1cm4gdW5kZWZpbmVkIGlmIGRpc2FibGVkLFxuICAgIC8vIGFjY29yZGluZyB0byBzcGVjLCBzaG91bGQgc3RpbGwgc2hvd1xuICAgIC8vIGEgY29sb3Igd2hlbiBkaXNhYmxlZCBhbmQgYWN0aXZlXG4gICAgdmFsaWRhdGlvblN0YXRlICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5pbnB1dEluZGV0ZXJtaW5hdGUpIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGlmICh0aGlzLmhhc0Vycm9yICYmIHRoaXMuc2hvdWxkVmFsaWRhdGUpIHJldHVybiAnZXJyb3InXG4gICAgICBpZiAodGhpcy5oYXNTdWNjZXNzKSByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgICBpZiAodGhpcy5oYXNDb2xvciAhPT0gbnVsbCkgcmV0dXJuIHRoaXMuY29tcHV0ZWRDb2xvclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbmRldGVybWluYXRlICh2YWwpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvODI3MFxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gKHRoaXMuaW5wdXRJbmRldGVybWluYXRlID0gdmFsKSlcbiAgICB9LFxuICAgIGlucHV0SW5kZXRlcm1pbmF0ZSAodmFsKSB7XG4gICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6aW5kZXRlcm1pbmF0ZScsIHZhbClcbiAgICB9LFxuICAgIGlzQWN0aXZlICgpIHtcbiAgICAgIGlmICghdGhpcy5pbmRldGVybWluYXRlKSByZXR1cm5cbiAgICAgIHRoaXMuaW5wdXRJbmRldGVybWluYXRlID0gZmFsc2VcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5DaGVja2JveCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXQtLXNlbGVjdGlvbi1jb250cm9sc19faW5wdXQnLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLnZhbGlkYXRpb25TdGF0ZSwge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkZW5zZTogdGhpcy5kZW5zZSxcbiAgICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLCB0aGlzLmNvbXB1dGVkSWNvbiksXG4gICAgICAgIHRoaXMuZ2VuSW5wdXQoJ2NoZWNrYm94Jywge1xuICAgICAgICAgIC4uLnRoaXMuYXR0cnMkLFxuICAgICAgICAgICdhcmlhLWNoZWNrZWQnOiB0aGlzLmlucHV0SW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgPyAnbWl4ZWQnXG4gICAgICAgICAgICA6IHRoaXMuaXNBY3RpdmUudG9TdHJpbmcoKSxcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMuZ2VuUmlwcGxlKHRoaXMuc2V0VGV4dENvbG9yKHRoaXMucmlwcGxlU3RhdGUpKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5EZWZhdWx0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlbkNoZWNrYm94KCksXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgIF1cbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZTbmFja2Jhci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldC9WU2hlZXQnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgZGVwcmVjYXRlLCByZW1vdmVkIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUHJvcFR5cGUsIFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIFZTaGVldCxcbiAgQ29sb3JhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFtcbiAgICAnYWJzb2x1dGUnLFxuICAgICdib3R0b20nLFxuICAgICdsZWZ0JyxcbiAgICAncmlnaHQnLFxuICAgICd0b3AnLFxuICBdKVxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc25hY2tiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwOiBCb29sZWFuLFxuICAgIGNlbnRlcmVkOiBCb29sZWFuLFxuICAgIGNvbnRlbnRDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBtdWx0aUxpbmU6IEJvb2xlYW4sXG4gICAgdGV4dDogQm9vbGVhbixcbiAgICB0aW1lb3V0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNTAwMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddIGFzIFByb3BUeXBlPGZhbHNlIHwgc3RyaW5nPixcbiAgICAgIGRlZmF1bHQ6ICd2LXNuYWNrLXRyYW5zaXRpb24nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVvZiB2ID09PSAnc3RyaW5nJyB8fCB2ID09PSBmYWxzZSxcbiAgICB9LFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYWN0aXZlVGltZW91dDogLTEsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXNuYWNrLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXNuYWNrLS1hY3RpdmUnOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICAndi1zbmFjay0tYm90dG9tJzogdGhpcy5ib3R0b20gfHwgIXRoaXMudG9wLFxuICAgICAgICAndi1zbmFjay0tY2VudGVyZWQnOiB0aGlzLmNlbnRlcmVkLFxuICAgICAgICAndi1zbmFjay0taGFzLWJhY2tncm91bmQnOiB0aGlzLmhhc0JhY2tncm91bmQsXG4gICAgICAgICd2LXNuYWNrLS1sZWZ0JzogdGhpcy5sZWZ0LFxuICAgICAgICAndi1zbmFjay0tbXVsdGktbGluZSc6IHRoaXMubXVsdGlMaW5lICYmICF0aGlzLnZlcnRpY2FsLFxuICAgICAgICAndi1zbmFjay0tcmlnaHQnOiB0aGlzLnJpZ2h0LFxuICAgICAgICAndi1zbmFjay0tdGV4dCc6IHRoaXMudGV4dCxcbiAgICAgICAgJ3Ytc25hY2stLXRvcCc6IHRoaXMudG9wLFxuICAgICAgICAndi1zbmFjay0tdmVydGljYWwnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gVGV4dCBhbmQgb3V0bGluZWQgc3R5bGVzIGJvdGhcbiAgICAvLyB1c2UgdHJhbnNwYXJlbnQgYmFja2dyb3VuZHNcbiAgICBoYXNCYWNrZ3JvdW5kICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLnRleHQgJiZcbiAgICAgICAgIXRoaXMub3V0bGluZWRcbiAgICAgIClcbiAgICB9LFxuICAgIC8vIFNuYWNrYmFyIGlzIGRhcmsgYnkgZGVmYXVsdFxuICAgIC8vIG92ZXJyaWRlIHRoZW1lYWJsZSBsb2dpYy5cbiAgICBpc0RhcmsgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQmFja2dyb3VuZFxuICAgICAgICA/ICF0aGlzLmxpZ2h0XG4gICAgICAgIDogVGhlbWVhYmxlLm9wdGlvbnMuY29tcHV0ZWQuaXNEYXJrLmNhbGwodGhpcylcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIC8vIFN0eWxlcyBhcmUgbm90IG5lZWRlZCB3aGVuXG4gICAgICAvLyB1c2luZyB0aGUgYWJzb2x1dGUgcHJvcC5cbiAgICAgIGlmICh0aGlzLmFic29sdXRlKSByZXR1cm4ge31cblxuICAgICAgY29uc3Qge1xuICAgICAgICBiYXIsXG4gICAgICAgIGJvdHRvbSxcbiAgICAgICAgZm9vdGVyLFxuICAgICAgICBpbnNldEZvb3RlcixcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIHRvcCxcbiAgICAgIH0gPSB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uXG5cbiAgICAgIC8vIFNob3VsZCBhbHdheXMgbW92ZSBmb3IgeS1heGlzXG4gICAgICAvLyBhcHBsaWNhdGlvbmFibGUgY29tcG9uZW50cy5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IGNvbnZlcnRUb1VuaXQoYm90dG9tICsgZm9vdGVyICsgaW5zZXRGb290ZXIpLFxuICAgICAgICBwYWRkaW5nTGVmdDogIXRoaXMuYXBwID8gdW5kZWZpbmVkIDogY29udmVydFRvVW5pdChsZWZ0KSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAhdGhpcy5hcHAgPyB1bmRlZmluZWQgOiBjb252ZXJ0VG9Vbml0KHJpZ2h0KSxcbiAgICAgICAgcGFkZGluZ1RvcDogY29udmVydFRvVW5pdChiYXIgKyB0b3ApLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZTogJ3NldFRpbWVvdXQnLFxuICAgIHRpbWVvdXQ6ICdzZXRUaW1lb3V0JyxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkgdGhpcy5zZXRUaW1lb3V0KClcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnYXV0by1oZWlnaHQnKSkge1xuICAgICAgcmVtb3ZlZCgnYXV0by1oZWlnaHQnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIGlmICh0aGlzLnRpbWVvdXQgPT0gMCkge1xuICAgICAgZGVwcmVjYXRlKCd0aW1lb3V0PVwiMFwiJywgJy0xJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkFjdGlvbnMgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNuYWNrX19hY3Rpb24gJyxcbiAgICAgIH0sIFtcbiAgICAgICAgZ2V0U2xvdCh0aGlzLCAnYWN0aW9uJywge1xuICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiAndi1zbmFja19fYnRuJyB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbmFja19fY29udGVudCcsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgW3RoaXMuY29udGVudENsYXNzXTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiAnc3RhdHVzJyxcbiAgICAgICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LCBbZ2V0U2xvdCh0aGlzKV0pXG4gICAgfSxcbiAgICBnZW5XcmFwcGVyICgpIHtcbiAgICAgIGNvbnN0IHNldENvbG9yID0gdGhpcy5oYXNCYWNrZ3JvdW5kXG4gICAgICAgID8gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgOiB0aGlzLnNldFRleHRDb2xvclxuXG4gICAgICBjb25zdCBkYXRhID0gc2V0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc25hY2tfX3dyYXBwZXInLFxuICAgICAgICBjbGFzczogVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfV0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0YSwgW1xuICAgICAgICB0aGlzLmdlbkNvbnRlbnQoKSxcbiAgICAgICAgdGhpcy5nZW5BY3Rpb25zKCksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuVHJhbnNpdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHsgbmFtZTogdGhpcy50cmFuc2l0aW9uIH0sXG4gICAgICB9LCBbdGhpcy5nZW5XcmFwcGVyKCldKVxuICAgIH0sXG4gICAgc2V0VGltZW91dCAoKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZlVGltZW91dClcblxuICAgICAgY29uc3QgdGltZW91dCA9IE51bWJlcih0aGlzLnRpbWVvdXQpXG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNBY3RpdmUgfHxcbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIDAgaW4gdjNcbiAgICAgICAgWzAsIC0xXS5pbmNsdWRlcyh0aW1lb3V0KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgfSwgdGltZW91dClcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXNuYWNrJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgfSwgW1xuICAgICAgdGhpcy50cmFuc2l0aW9uICE9PSBmYWxzZVxuICAgICAgICA/IHRoaXMuZ2VuVHJhbnNpdGlvbigpXG4gICAgICAgIDogdGhpcy5nZW5XcmFwcGVyKCksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vVlNpbXBsZVRhYmxlLnNhc3MnXG5cbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNpbXBsZS10YWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBmaXhlZEhlYWRlcjogQm9vbGVhbixcbiAgICBoZWlnaHQ6IFtOdW1iZXIsIFN0cmluZ10sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1kYXRhLXRhYmxlLS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgICd2LWRhdGEtdGFibGUtLWZpeGVkLWhlaWdodCc6ICEhdGhpcy5oZWlnaHQgJiYgIXRoaXMuZml4ZWRIZWFkZXIsXG4gICAgICAgICd2LWRhdGEtdGFibGUtLWZpeGVkLWhlYWRlcic6IHRoaXMuZml4ZWRIZWFkZXIsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbldyYXBwZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLndyYXBwZXIgfHwgdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtZGF0YS10YWJsZV9fd3JhcHBlcicsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudCgndGFibGUnLCB0aGlzLiRzbG90cy5kZWZhdWx0KSxcbiAgICAgIF0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1kYXRhLXRhYmxlJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgfSwgW1xuICAgICAgdGhpcy4kc2xvdHMudG9wLFxuICAgICAgdGhpcy5nZW5XcmFwcGVyKCksXG4gICAgICB0aGlzLiRzbG90cy5ib3R0b20sXG4gICAgXSlcbiAgfSxcbn0pXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1sYXlvdXQnLFtfYygnY2xpZW50LW9ubHknLFsoX3ZtLmlzU2hvdyk/X2MoJ3YtY2FyZCcse3N0YXRpY0NsYXNzOlwibXgtYXV0b1wiLGF0dHJzOntcIm1heC13aWR0aFwiOlwiNTAwXCJ9fSxbX2MoJ3YtY2FyZC10aXRsZScsW192bS5fdihcIlJlcXVlc3QgUGVybWlzc2lvblwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdCcse2F0dHJzOntcInNoYXBlZFwiOlwiXCJ9fSxbKF92bS5pc05vdGlmU2hvdyk/X2MoJ3YtbGlzdC1pdGVtLWdyb3VwJyxbX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwiLFwiYWN0aXZlLWNsYXNzXCI6XCJkZWVwLXB1cnBsZS0tdGV4dCB0ZXh0LS1hY2NlbnQtNFwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5ub3RpZmljYXRpb24gPSAhX3ZtLm5vdGlmaWNhdGlvbn19LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbihyZWYpe1xudmFyIGFjdGl2ZSA9IHJlZi5hY3RpdmU7XG52YXIgdG9nZ2xlID0gcmVmLnRvZ2dsZTtcbnJldHVybiBbX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbicsW19jKCd2LWNoZWNrYm94Jyx7YXR0cnM6e1wiaW5wdXQtdmFsdWVcIjphY3RpdmUsXCJ0cnVlLXZhbHVlXCI6dHJ1ZSxcImZhbHNlLXZhbHVlXCI6ZmFsc2UsXCJjb2xvclwiOlwiZGVlcC1wdXJwbGUgYWNjZW50LTRcIn0sb246e1wiY2xpY2tcIjp0b2dnbGV9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCJBbGxvdyBOb3RpZmljYXRpb25cIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIlJlY2VpdmUgbGF0ZXN0IHByb21vcyBvZiB5b3VyIGZhdm9yaXRlIG1lcmNoYW50LlwiKV0pXSwxKV19fV0sbnVsbCxmYWxzZSwyOTgyMzk4NTA4KX0pXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uaXNMb2NTaG93KT9fYygndi1saXN0LWl0ZW0tZ3JvdXAnLFtfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJkZW5zZVwiOlwiXCIsXCJhY3RpdmUtY2xhc3NcIjpcImRlZXAtcHVycGxlLS10ZXh0IHRleHQtLWFjY2VudC00XCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmxvY2F0aW9ucz0hX3ZtLmxvY2F0aW9uc319LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbihyZWYpe1xudmFyIGFjdGl2ZSA9IHJlZi5hY3RpdmU7XG52YXIgdG9nZ2xlID0gcmVmLnRvZ2dsZTtcbnJldHVybiBbX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbicsW19jKCd2LWNoZWNrYm94Jyx7YXR0cnM6e1wiaW5wdXQtdmFsdWVcIjphY3RpdmUsXCJ0cnVlLXZhbHVlXCI6dHJ1ZSxcImZhbHNlLXZhbHVlXCI6ZmFsc2UsXCJjb2xvclwiOlwiZGVlcC1wdXJwbGUgYWNjZW50LTRcIn0sb246e1wiY2xpY2tcIjp0b2dnbGV9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCJBbGxvdyBMb2NhdGlvblwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiVG8gc2hvdyB5b3UgbmVhcmJ5IG1lcmNoYW50cywgYmlsbGVycyBhbmQgc3RvcmVzLlwiKV0pXSwxKV19fV0sbnVsbCxmYWxzZSw0Mzc0ODc2MzUpfSldLDEpOl92bS5fZSgpXSwxKV0sMSk6X3ZtLl9lKCldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDx2LWxheW91dD5cbiAgICA8Y2xpZW50LW9ubHk+XG4gICAgICAgIDx2LWNhcmQgY2xhc3M9XCJteC1hdXRvXCIgbWF4LXdpZHRoPVwiNTAwXCIgdi1pZj1cImlzU2hvd1wiPlxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5SZXF1ZXN0IFBlcm1pc3Npb248L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDx2LWxpc3Qgc2hhcGVkPlxuICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1ncm91cCB2LWlmPVwiaXNOb3RpZlNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlIGFjdGl2ZS1jbGFzcz1cImRlZXAtcHVycGxlLS10ZXh0IHRleHQtLWFjY2VudC00XCIgQGNsaWNrLnN0b3A9XCJub3RpZmljYXRpb24gPSAhbm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmRlZmF1bHQ9XCJ7IGFjdGl2ZSwgdG9nZ2xlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jaGVja2JveCA6aW5wdXQtdmFsdWU9XCJhY3RpdmVcIiA6dHJ1ZS12YWx1ZT1cInRydWVcIiA6ZmFsc2UtdmFsdWU9XCJmYWxzZVwiIGNvbG9yPVwiZGVlcC1wdXJwbGUgYWNjZW50LTRcIiBAY2xpY2s9XCJ0b2dnbGVcIj48L3YtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT5BbGxvdyBOb3RpZmljYXRpb248L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+UmVjZWl2ZSBsYXRlc3QgcHJvbW9zIG9mIHlvdXIgZmF2b3JpdGUgbWVyY2hhbnQuPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWdyb3VwIHYtaWY9XCJpc0xvY1Nob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlIGFjdGl2ZS1jbGFzcz1cImRlZXAtcHVycGxlLS10ZXh0IHRleHQtLWFjY2VudC00XCIgQGNsaWNrLnN0b3A9XCJsb2NhdGlvbnM9IWxvY2F0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpkZWZhdWx0PVwieyBhY3RpdmUsIHRvZ2dsZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2hlY2tib3ggOmlucHV0LXZhbHVlPVwiYWN0aXZlXCIgOnRydWUtdmFsdWU9XCJ0cnVlXCIgOmZhbHNlLXZhbHVlPVwiZmFsc2VcIiBjb2xvcj1cImRlZXAtcHVycGxlIGFjY2VudC00XCIgQGNsaWNrPVwidG9nZ2xlXCI+PC92LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+QWxsb3cgTG9jYXRpb248L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+VG8gc2hvdyB5b3UgbmVhcmJ5IG1lcmNoYW50cywgYmlsbGVycyBhbmQgc3RvcmVzLjwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWdyb3VwPlxuICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgIDwvY2xpZW50LW9ubHk+XG48L3YtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQge1xuICAgIEdlb0NvbGxlY3Rpb25SZWZlcmVuY2Vcbn0gZnJvbSAnZ2VvZmlyZXN0b3JlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzTm90aWZTaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc0xvY1Nob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbGFzdFVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYXV0aC9sYXN0VXBkYXRlJ11cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDExOTAwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmY21Ub2tlbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYXV0aC9nZXRGQ01Ub2tlbiddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGYoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbJ2FkbWluL2dldEZhcmUnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbJ2F1dGgvZ2V0VXNlciddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNTaG93KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzTG9jU2hvdyB8fCB0aGlzLmlzTm90aWZTaG93XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgbG9jYXRpb25zKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2F0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldExvY2F0aW9uKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VuKCdMaW5lIDc4JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrTm90aWZpY2F0aW9uKClcbiAgICAgICAgICAgIGlmICgnZ2VvbG9jYXRpb24nIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9jU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0VXBkYXRlID4gNjAgKiAxMDAwICogMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9jU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9jU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldExvY2F0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBnZW9PcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtQWdlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvY1Nob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmQgPSBwb3MuY29vcmRzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIgJiYgdGhpcy5mY21Ub2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gdGhpcy4kZmlyZVN0b3JlT2JqKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgR2VvQ29sbGVjdGlvblJlZmVyZW5jZShmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBuZXcgdGhpcy4kZmlyZVN0b3JlT2JqLkdlb1BvaW50KGNvb3JkLmxhdGl0dWRlLCBjb29yZC5sb25naXR1ZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLnRva2VucyA9IHRoaXMuJGZpcmVTdG9yZU9iai5GaWVsZFZhbHVlLmFycmF5VW5pb24odGhpcy5mY21Ub2tlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZG9jKHRoaXMudXNlci5pZCkudXBkYXRlKHBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkLmFjY3VyYWN5IDwgNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWRtaW4vZ2V0QXJlYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogY29vcmQubG9uZ2l0dWRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZDTVRva2VuKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvY1Nob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9jU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgZ2VvT3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tMb2NhdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NTaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlRkNNVG9rZW4oKSB7XG4gICAgICAgICAgICAgICAgaWYgKChcIk5vdGlmaWNhdGlvblwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIiAmJiB0aGlzLmZjbVRva2VuKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IHRoaXMudXNlciA/ICdyZWdpc3RlcmVkJyA6ICd1bnJlZ2lzdGVyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSB0aGlzLiRmaXJlU3RvcmVPYmooKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyZWFfbmFtZSA9IHRoaXMuZGYubmFtZS5yZXBsYWNlKC8gL2csICdfJykudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJlYSA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdhcmVhcycpLmRvYyh0aGlzLmRmLmlkKS5jb2xsZWN0aW9uKCd0b2tlbnMnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhLmRvYygncmVnaXN0ZXJlZCcpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuczogdGhpcy4kZmlyZVN0b3JlT2JqLkZpZWxkVmFsdWUuYXJyYXlVbmlvbih0aGlzLmZjbVRva2VuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYS5kb2MoJ3VucmVnaXN0ZXJlZCcpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuczogdGhpcy4kZmlyZVN0b3JlT2JqLkZpZWxkVmFsdWUuYXJyYXlSZW1vdmUodGhpcy5mY21Ub2tlbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9waWNTdWJzY3JpcHRpb24oW3RoaXMuZmNtVG9rZW5dLCBbJ3JlZ2lzdGVyZWQnLCAncmVnaXN0ZXJlZCcgKyAnXycgKyBhcmVhX25hbWUsICdyZWdpc3RlcmVkJyArICdfJyArIHRoaXMuZGYuY291bnRyeS5jb2RlXSwgJ3N1YnNjcmliZVRvVG9waWMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9waWNTdWJzY3JpcHRpb24oW3RoaXMuZmNtVG9rZW5dLCBbJ3VucmVnaXN0ZXJlZCcsICd1bnJlZ2lzdGVyZWQnICsgJ18nICsgYXJlYV9uYW1lLCAndW5yZWdpc3RlcmVkJyArICdfJyArIHRoaXMuZGYuY291bnRyeS5jb2RlXSwgJ3Vuc3Vic2NyaWJlRnJvbVRvcGljJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYS5kb2MoJ3JlZ2lzdGVyZWQnKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnM6IHRoaXMuJGZpcmVTdG9yZU9iai5GaWVsZFZhbHVlLmFycmF5UmVtb3ZlKHRoaXMuZmNtVG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhLmRvYygndW5yZWdpc3RlcmVkJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiB0aGlzLiRmaXJlU3RvcmVPYmouRmllbGRWYWx1ZS5hcnJheVVuaW9uKHRoaXMuZmNtVG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcGljU3Vic2NyaXB0aW9uKFt0aGlzLmZjbVRva2VuXSwgWydyZWdpc3RlcmVkJywgJ3JlZ2lzdGVyZWQnICsgJ18nICsgYXJlYV9uYW1lLCAncmVnaXN0ZXJlZCcgKyAnXycgKyB0aGlzLmRmLmNvdW50cnkuY29kZV0sICd1bnN1YnNjcmliZUZyb21Ub3BpYycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BpY1N1YnNjcmlwdGlvbihbdGhpcy5mY21Ub2tlbl0sIFsndW5yZWdpc3RlcmVkJywgJ3VucmVnaXN0ZXJlZCcgKyAnXycgKyBhcmVhX25hbWUsICd1bnJlZ2lzdGVyZWQnICsgJ18nICsgdGhpcy5kZi5jb3VudHJ5LmNvZGVdLCAnc3Vic2NyaWJlVG9Ub3BpYycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2F1dGgvc2V0RkNNVG9rZW4nLCAnTm90IFN1cHBvcnRlZCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNOb3RpZlNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja05vdGlmaWNhdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoKFwiTm90aWZpY2F0aW9uXCIgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTm90aWZTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZpcmVNZXNzLm9uTWVzc2FnZSgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheU5vdGlmaWNhdGlvbihwYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZDTSBFcnJvcjonLCBlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIChjb21wbGV0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRkNNIFN1Y2VzcycsIGNvbXBsZXRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RVcGRhdGUgPiA2MCAqIDEwMDAgKiAzMCB8fCAhdGhpcy5mY21Ub2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4oJ0xpbmUgMTYzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVG9rZW5DaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSBcImRlbmllZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTm90aWZTaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc05vdGlmU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2F1dGgvc2V0RkNNVG9rZW4nLCAnTm90IFN1cHBvcnRlZCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNOb3RpZlNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNwbGF5Tm90aWZpY2F0aW9uKHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpLnRoZW4oZnVuY3Rpb24ocmVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBwYXlsb2FkLm5vdGlmaWNhdGlvbi5ib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICcvaWNvbi05NnB4LnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2U6ICcvYmFkZ2UucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWJyYXRlOiBbMTAwLCA1MCwgMTAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwYXlsb2FkLm5vdGlmaWNhdGlvbi5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWcuc2hvd05vdGlmaWNhdGlvbihwYXlsb2FkLm5vdGlmaWNhdGlvbi50aXRsZSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgZ2V0VG9rZW4obGluZSkge1xuICAgICAgICAgICAgICAgIGlmICgoXCJOb3RpZmljYXRpb25cIiBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uID0gYXdhaXQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTm90aWZTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRva2VuID0gYXdhaXQgdGhpcy4kZmlyZU1lc3MuZ2V0VG9rZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZXRyaWV2aW5nIHRva2VuLiAnLCBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYXV0aC9zZXRGQ01Ub2tlbicsIGN1cnJlbnRUb2tlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VG9rZW4gJiYgdGhpcy5mY21Ub2tlbiAmJiBjdXJyZW50VG9rZW4gIT09IHRoaXMuZmNtVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2F1dGgvc2V0RkNNVG9rZW4nLCBjdXJyZW50VG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnTm8gSW5zdGFuY2UgSUQgdG9rZW4gYXZhaWxhYmxlLiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gZ2VuZXJhdGUgb25lLicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTm90aWZTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYXV0aC9zZXRGQ01Ub2tlbicsICdOb3QgU3VwcG9ydGVkJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc05vdGlmU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvcGljU3Vic2NyaXB0aW9uKHRva2VucywgdG9waWNzLCBmbikge1xuICAgICAgICAgICAgICAgIHRoaXMuJGZpcmVGdW5jLmh0dHBzQ2FsbGFibGUoZm4pKHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICAgICAgICAgICAgICAgIHRvcGljczogdG9waWNzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRva2VuQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGZpcmVNZXNzLm9uVG9rZW5SZWZyZXNoKGFzeW5jKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZyZXNoZWRUb2tlbiA9IGF3YWl0IHRoaXMuJGZpcmVNZXNzLmdldFRva2VuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IHRoaXMudXNlciA/ICdyZWdpc3RlcmVkJyA6ICd1bnJlZ2lzdGVyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyZWFfbmFtZSA9IHRoaXMuZGYubmFtZS5yZXBsYWNlKC8gL2csICdfJykudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gdGhpcy4kZmlyZVN0b3JlT2JqKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKGZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLnRva2VucyA9IHRoaXMuJGZpcmVTdG9yZU9iai5GaWVsZFZhbHVlLmFycmF5VW5pb24ocmVmcmVzaGVkVG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHVzZXIuZG9jKHRoaXMudXNlci5pZCkudXBkYXRlKHBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQudG9rZW5zID0gdGhpcy4kZmlyZVN0b3JlT2JqLkZpZWxkVmFsdWUuYXJyYXlSZW1vdmUodGhpcy5mY21Ub2tlbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdXNlci5kb2ModGhpcy51c2VyLmlkKS51cGRhdGUocGF5bG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BpY1N1YnNjcmlwdGlvbihbdGhpcy5mY21Ub2tlbl0sIFtwYXRoLCBwYXRoICsgJ18nICsgYXJlYV9uYW1lLCBwYXRoICsgJ18nICsgdGhpcy5kZi5jb3VudHJ5LmNvZGVdLCAndW5zdWJzY3JpYmVGcm9tVG9waWMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9waWNTdWJzY3JpcHRpb24oW3JlZnJlc2hlZFRva2VuXSwgW3BhdGgsIHBhdGggKyAnXycgKyBhcmVhX25hbWUsIHBhdGggKyAnXycgKyB0aGlzLmRmLmNvdW50cnkuY29kZV0sICdzdWJzY3JpYmVUb1RvcGljJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2F1dGgvc2V0RkNNVG9rZW4nLCByZWZyZXNoZWRUb2tlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIHJldHJpZXZlIHJlZnJlc2hlZCB0b2tlbiAnLCBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Blcm1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTNiYzI0ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QZXJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGVybWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjZhZDMwOGY3XCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDaGVja2JveCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNoZWNrYm94JztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUFjdGlvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtR3JvdXAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbVN1YnRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1UaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkNhcmQsVkNhcmRUaXRsZSxWQ2hlY2tib3gsVkxheW91dCxWTGlzdCxWTGlzdEl0ZW0sVkxpc3RJdGVtQWN0aW9uLFZMaXN0SXRlbUNvbnRlbnQsVkxpc3RJdGVtR3JvdXAsVkxpc3RJdGVtU3VidGl0bGUsVkxpc3RJdGVtVGl0bGV9KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMS0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMS0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMGE1YjFiOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3YtY2FyZCcse2F0dHJzOntcIndpZHRoXCI6XCIxMDAlXCIsXCJoZWlnaHRcIjpcIjEwMCVcIn19LFtfYygnbG9hZGluZycse2F0dHJzOntcImFjdGl2ZVwiOl92bS5pc0xvYWRpbmcsXCJsb2FkZXJcIjpcImJhcnNcIixcImlzLWZ1bGwtcGFnZVwiOnRydWUsXCJjb2xvclwiOlwiIzAwYWZmMFwifSxvbjp7XCJ1cGRhdGU6YWN0aXZlXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNMb2FkaW5nPSRldmVudH19fSksX3ZtLl92KFwiIFwiKSxfYygnaW1nJyx7c3RhdGljU3R5bGU6e1wiZGlzcGxheVwiOlwibm9uZVwifSxhdHRyczp7XCJoZWlnaHRcIjpcIjFcIixcIndpZHRoXCI6XCIxXCIsXCJzcmNcIjpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90cj9pZD0yMzIwNTEwODY0OTI0NDM3JmV2PVBhZ2VWaWV3Jm5vc2NyaXB0PTFcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWFwcC1iYXInLHthdHRyczp7XCJhcHBcIjpcIlwiLFwiZml4ZWRcIjpcIlwiLFwiZGFya1wiOlwiXCIsXCJjb2xvclwiOlwiIzAwYWZmMFwifX0sW19jKCd2LWJ0bicse2F0dHJzOntcImljb25cIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uJHJvdXRlci5nbygtMSl9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCIgbWRpLWFycm93LWxlZnQtYm9sZFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRvb2xiYXItdGl0bGUnLFtfdm0uX3YoXCJDYXJ0XCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ2NsaWVudC1vbmx5JyxbX2MoJ3Ytc2hlZXQnLHtzdGF0aWNDbGFzczpcIm92ZXJmbG93LXktYXV0b1wiLGF0dHJzOntcIm1heC1oZWlnaHRcIjpcIjg1dmhcIn19LFtfYygndi1jb250ZW50JyxbX2MoJ3YtY29udGFpbmVyJyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCIsXCJqdXN0aWZ5LWNlbnRlclwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwiLFwidGV4dC1sZWZ0XCI6XCJcIn19LFsoX3ZtLmlzSGlkZSAmJiBfdm0uY2FydFNpemUgPCAxKT9fYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJsZzNcIjpcIlwifX0sW19jKCd2LWljb24nLHtzdGF0aWNDbGFzczpcIm1iLTJcIixhdHRyczp7XCJjb2xvclwiOlwic3VjY2Vzc1wiLFwic2l6ZVwiOlwiMjAwXCJ9fSxbX3ZtLl92KFwiIG1kaS1jaGVja2JveC1tYXJrZWQtY2lyY2xlIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2Jsb2NrcXVvdGUnLHtzdGF0aWNDbGFzczpcImJsb2NrcXVvdGUgbWItNVwifSxbX2MoJ3NwYW4nLHtzdGF0aWNTdHlsZTp7XCJmb250LXNpemVcIjpcIjUwcHhcIn19LFtfdm0uX3YoXCLwn5iLXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnaDQnLFtfdm0uX3YoXCJPcmRlciBDb21wbGV0ZWRcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ2Zvb3RlcicsW19jKCd2LWJ0bicse2F0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcInRleHRcIjpcIlwiLFwiYmxvY2tcIjpcIlwiLFwidG9cIjpcIi90cmFuc2FjdGlvbnNcIixcImNvbG9yXCI6XCJyZWRcIn19LFtfdm0uX3YoXCIgVmlldyBPcmRlcnMgXCIpXSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLCghX3ZtLmlzSGlkZSAmJiBfdm0uY2FydFNpemUgPCAxKT9fYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlclwiLGF0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJsZzNcIjpcIlwifX0sW19jKCd2LWljb24nLHtzdGF0aWNDbGFzczpcIm1iLTJcIixhdHRyczp7XCJjb2xvclwiOlwicmVkXCIsXCJzaXplXCI6XCIyMDBcIn19LFtfdm0uX3YoXCIgbWRpLWNhcnQtb2ZmIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2Jsb2NrcXVvdGUnLHtzdGF0aWNDbGFzczpcImJsb2NrcXVvdGVcIn0sW19jKCdzcGFuJyx7c3RhdGljU3R5bGU6e1wiZm9udC1zaXplXCI6XCI1MHB4XCJ9fSxbX3ZtLl92KFwi8J+YolwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2g0JyxbX3ZtLl92KFwiWW91ciBjYXJ0IGlzIGxvbmVseVwiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZm9vdGVyJyxbX2MoJ3YtYnRuJyx7YXR0cnM6e1wib3V0bGluZWRcIjpcIlwiLFwidGV4dFwiOlwiXCIsXCJibG9ja1wiOlwiXCIsXCJ0b1wiOlwiL1wiLFwiY29sb3JcIjpcInJlZFwifX0sW192bS5fdihcIiBTaG9wIE5vdyBcIildKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKCFfdm0uaXNIaWRlICYmIF92bS5jYXJ0U2l6ZSA+IDApP19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcInNtNlwiOlwiXCIsXCJtZDZcIjpcIlwiLFwibGc0XCI6XCJcIn19LFtfYygndi1jYXJkJyx7YXR0cnM6e1wid2lkdGhcIjpcIjEwMCVcIn19LFtfYygndi1saXN0Jyx7YXR0cnM6e1widHdvLWxpbmVcIjpcIlwifX0sX3ZtLl9sKChfdm0uY2FydEl0ZW0pLGZ1bmN0aW9uKGl0ZW0saW5kZXgpe3JldHVybiBfYygndi1saXN0LWl0ZW0tZ3JvdXAnLHtrZXk6aXRlbS5pbmRleH0sW19jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScse2F0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0tYXZhdGFyJyx7YXR0cnM6e1wiY29sb3JcIjpcImdyZXkgZGFya2VuLTNcIn19LFsoaXRlbS5pbmZvLmltZyAhPSAnJyk/X2MoJ3YtaW1nJyx7c3RhdGljQ2xhc3M6XCJlbGV2YXRpb24tNlwiLGF0dHJzOntcInNyY1wiOml0ZW0uaW5mby5pbWd9fSk6X2MoJ3YtYXZhdGFyJyx7c3RhdGljQ2xhc3M6XCJ3aGl0ZS0tdGV4dFwiLGF0dHJzOntcImNvbG9yXCI6XCJibHVlXCJ9fSxbX3ZtLl92KFwiIFwiK192bS5fcyhpdGVtLmluZm8ubmFtZSAubWF0Y2goL1xcYihcXHcpL2cpIC5qb2luKCcnKSAuc3Vic3RyKDAsIDIpKStcIiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScse2RvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKGl0ZW0uaW5mby5uYW1lKX19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScse3N0YXRpY0NsYXNzOlwicmVkLS10ZXh0XCJ9LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5jb21wdXRlVG90YWwoaXRlbSkpKStcIiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0JyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKSgoX3ZtLmNvbXB1dGVUb3RhbChpdGVtKSAvIGl0ZW0ucXR5KSkpK1wiIHggXCIrX3ZtLl9zKGl0ZW0ucXR5KStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWljb24nLHthdHRyczp7XCJzbWFsbFwiOlwiXCIsXCJjb2xvclwiOlwicmVkXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7cmV0dXJuIF92bS5yZW1vdmVDYXJ0KGl0ZW0pfX19LFtfdm0uX3YoXCIgbWRpLWRlbGV0ZSBcIildKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3Ytc2ltcGxlLXRhYmxlJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCd0aGVhZCcsW19jKCd0cicsW19jKCd0aCcse3N0YXRpY0NsYXNzOlwidGV4dC1sZWZ0XCJ9LFtfdm0uX3YoXCIgSXRlbSBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd0aCcse3N0YXRpY0NsYXNzOlwidGV4dC1sZWZ0XCJ9LFtfdm0uX3YoXCIgVmFsdWUgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndGgnLHtzdGF0aWNDbGFzczpcInRleHQtbGVmdFwifSxbX3ZtLl92KFwiIFByaWNlIFwiKV0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd0Ym9keScsX3ZtLl9sKChfdm0uY29tcHV0ZUFkZE9ucyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZF9vbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmZvLmJhc2VfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSksZnVuY3Rpb24oYWRkb24saSl7cmV0dXJuIF9jKCd0cicse2tleTphZGRvbi5uYW1lICsgXCJfXCIgKyBpICsgXCJfXCIgKyBpbmRleH0sW19jKCd0ZCcsW192bS5fdihfdm0uX3MoYWRkb24ubmFtZSkpXSksX3ZtLl92KFwiIFwiKSxfYygndGQnLFtfdm0uX3YoX3ZtLl9zKGFkZG9uLnZhbHVlcykpXSksX3ZtLl92KFwiIFwiKSwoYWRkb24ucHJpY2U+MCk/X2MoJ3RkJyxbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShhZGRvbi5wcmljZSkpKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKGFkZG9uLnByaWNlPDEpP19jKCd0ZCcsW192bS5fdihcIi1cIildKTpfdm0uX2UoKV0pfSksMCldfSxwcm94eTp0cnVlfV0sbnVsbCx0cnVlKX0pLF92bS5fdihcIiBcIiksKGluZGV4ICsgMSA8PSBfdm0uY2FydEl0ZW0ubGVuZ3RoKT9fYygndi1kaXZpZGVyJyx7a2V5OmluZGV4fSk6X3ZtLl9lKCldLDEpfSksMSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uaXNIaWRlICYmIF92bS5jYXJ0U2l6ZSA+IDApP19jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcIm1hLTFcIixhdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibGczXCI6XCJcIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse3N0YXRpY0NsYXNzOlwic3VidGl0bGUtMlwiLGF0dHJzOntcInhzOFwiOlwiXCIsXCJzbThcIjpcIlwiLFwibWQ4XCI6XCJcIn19LFtfdm0uX3YoXCIgT3JkZXIgVmFsdWUgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJtZDRcIjpcIlwifX0sW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQub3JkZXJfdmFsdWUpKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czhcIjpcIlwiLFwic204XCI6XCJcIixcIm1kOFwiOlwiXCJ9fSxbX3ZtLl92KFwiIERlbGl2ZXJ5IEZlZSAtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3NtYWxsJyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LmRpc3RhbmNlLmNvbXB1dGVkKStcIiBrbSBcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse3N0YXRpY0NsYXNzOlwidGV4dC1lbmRcIixhdHRyczp7XCJ4czRcIjpcIlwiLFwic200XCI6XCJcIixcIm1kNFwiOlwiXCJ9fSxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKSgoX3ZtLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQuZGVsaXZlcnkucGxhdGZvcm0gKyBfdm0uY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5kZWxpdmVyeS5yaWRlcikpKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czhcIjpcIlwiLFwic204XCI6XCJcIixcIm1kOFwiOlwiXCJ9fSxbX3ZtLl92KFwiIENvbnZlbmllbmNlIEZlZSBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcInRleHQtZW5kXCIsYXR0cnM6e1wieHM0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJtZDRcIjpcIlwifX0sW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQuc2MubWFya3VwKSkrXCIgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1kaXZpZGVyJyksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHM4XCI6XCJcIixcInNtOFwiOlwiXCIsXCJtZDhcIjpcIlwifX0sW19jKCd2LXRleHQtZmllbGQnLHtzdGF0aWNDbGFzczpcIm1yLTJcIixhdHRyczp7XCJ0ZXh0XCI6XCJcIixcImFwcGVuZC1pY29uXCI6XCJtZGktdGlja2V0LXBlcmNlbnRcIixcInNvbG9cIjpcIlwiLFwiZGVuc2VcIjpcIlwiLFwic21hbGxcIjpcIlwiLFwicGxhY2Vob2xkZXJcIjpcIlByb21vIENvZGVcIixcImxhYmVsXCI6XCJQcm9tbyBDb2RlXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnByb21vQ29kZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5wcm9tb0NvZGU9JCR2fSxleHByZXNzaW9uOlwicHJvbW9Db2RlXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZmxleCcse2F0dHJzOntcInhzNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibWQ0XCI6XCJcIn19LFtfYygndi1idG4nLHthdHRyczp7XCJvdXRsaW5lZFwiOlwiXCIsXCJjb2xvclwiOlwiZ3JlZW5cIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLmZpbmRWb3VjaGVyKCl9fX0sW192bS5fdihcIkFwcGx5XCIpXSldLDEpLF92bS5fdihcIiBcIiksKF92bS5wcm9tb0NvZGVTdGF0dXMuYWNjZXB0ZWQpP19jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcInN1YnRpdGxlLTJcIixhdHRyczp7XCJ4czhcIjpcIlwiLFwic204XCI6XCJcIixcIm1kOFwiOlwiXCJ9fSxbX3ZtLl92KFwiRGlzY291bnQgLSBcIitfdm0uX3MoX3ZtLnByb21vQ29kZVN0YXR1cy5zdGF0dXMuY29kZSkrXCIgXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLnByb21vQ29kZVN0YXR1cy5hY2NlcHRlZCk/X2MoJ3YtZmxleCcse2F0dHJzOntcInhzNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibWQ0XCI6XCJcIn19LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5wcm9tb0NvZGVTdGF0dXMuc3RhdHVzLnZhbHVlKStcIiBcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0ucHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkKT9fYygndi1mbGV4Jyx7YXR0cnM6e1wieHM4XCI6XCJcIixcInNtOFwiOlwiXCIsXCJtZDhcIjpcIlwifX0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJzdWJoZWFkaW5nXCJ9LFtfdm0uX3YoXCJTdWJ0b3RhbFwiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLnByb21vQ29kZVN0YXR1cy5hY2NlcHRlZCk/X2MoJ3YtZmxleCcse2F0dHJzOntcInhzNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibWQ0XCI6XCJcIn19LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5jaGVja291dFBheWxvYWQuYW1vdW50LmdyYW5kdG90YWwpKStcIiBcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0ucHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkKT9fYygndi1mbGV4Jyx7c3RhdGljQ2xhc3M6XCJzdWJ0aXRsZS0yXCIsYXR0cnM6e1wieHM4XCI6XCJcIixcInNtOFwiOlwiXCIsXCJtZDhcIjpcIlwifX0sW192bS5fdihcIiBBbW91bnQgXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLnByb21vQ29kZVN0YXR1cy5hY2NlcHRlZCk/X2MoJ3YtZmxleCcse2F0dHJzOntcInhzNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibWQ0XCI6XCJcIn19LFtfdm0uX3YoXCIgLSBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLnByb21vQ29kZVN0YXR1cy5zdGF0dXMuY29tcHV0ZWQpKStcIiBcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0ucHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkID09IGZhbHNlKT9fYygndi1mbGV4Jyx7YXR0cnM6e1wieHMxMlwiOlwiXCJ9fSxbX2MoJ3YtYWxlcnQnLHthdHRyczp7XCJ0eXBlXCI6XCJlcnJvclwifX0sW192bS5fdihfdm0uX3MoX3ZtLnByb21vQ29kZVN0YXR1cy5zdGF0dXMpKV0pXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLCghX3ZtLnByb21vQ29kZVN0YXR1cy5hY2NlcHRlZCk/X2MoJ3YtZmxleCcse2F0dHJzOntcInhzOFwiOlwiXCIsXCJzbThcIjpcIlwiLFwibWQ4XCI6XCJcIn19LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwic3ViaGVhZGluZ1wifSxbX3ZtLl92KFwiR3JhbmR0b3RhbFwiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoIV92bS5wcm9tb0NvZGVTdGF0dXMuYWNjZXB0ZWQpP19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czRcIjpcIlwiLFwic200XCI6XCJcIixcIm1kNFwiOlwiXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibWwtMiByZWQtLXRleHRcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5jaGVja291dFBheWxvYWQuYW1vdW50LmdyYW5kdG90YWwpKSldKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLnByb21vQ29kZVN0YXR1cy5hY2NlcHRlZCk/X2MoJ3YtZmxleCcse2F0dHJzOntcInhzOFwiOlwiXCIsXCJzbThcIjpcIlwiLFwibWQ4XCI6XCJcIn19LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwic3ViaGVhZGluZ1wifSxbX3ZtLl92KFwiR3JhbmR0b3RhbFwiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLnByb21vQ29kZVN0YXR1cy5hY2NlcHRlZCk/X2MoJ3YtZmxleCcse2F0dHJzOntcInhzNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibWQ0XCI6XCJcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtbC0yIHJlZC0tdGV4dFwifSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQuZ3JhbmR0b3RhbCAtIF92bS5wcm9tb0NvZGVTdGF0dXMuc3RhdHVzLmNvbXB1dGVkKSkpXSldKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdCcse2F0dHJzOntcIm5hdlwiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJ0aWxlXCI6XCJcIixcIndpZHRoXCI6XCIxMDAlXCIsXCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiaWRcIjpcIm5lZWRBdXRoXCIsXCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWljb24nLFtfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcInJlZFwifX0sW192bS5fdihcIiBtZGktY2VsbHBob25lIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uY2hlY2tvdXRQYXlsb2FkLm9yZGVyLmJ5Lm5hbWUpK1wiIFwiK192bS5fcyhfdm0uY2hlY2tvdXRQYXlsb2FkLm9yZGVyLmJ5LmNvbnRhY3QpK1wiIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiIENvbnRhY3QgSW5mb3JtYXRpb24gXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbicse29uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmF1dGhEaWFnID0gdHJ1ZX19fSxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIn19LFtfdm0uX3YoXCIgbWRpLWNoZXZyb24tcmlnaHQgXCIpXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScse2F0dHJzOntcImlkXCI6XCJuZWVkQWRkclwifX0sW19jKCd2LWxpc3QtaXRlbS1pY29uJyxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIn19LFtfdm0uX3YoXCIgbWRpLW1hcCBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS50by5hZGRyZXNzKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBEZWxpdmVyeSBBZGRyZXNzIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1hY3Rpb24nLHtvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5hZGRyZXNzRGlhZyA9IHRydWV9fX0sW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiIG1kaS1jaGV2cm9uLXJpZ2h0IFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1kaXZpZGVyJyksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJpZFwiOlwibmVlZERlbGlcIn19LFtfYygndi1saXN0LWl0ZW0taWNvbicsW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiIG1kaS1jbG9jayBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLmRlbGl2ZXJ5X2RhdGUubGFiZWwpK1wiLCBcIitfdm0uX3MoX3ZtLmRlbGl2ZXJ5X2RhdGUuZGF5X25hbWUuc3Vic3RyaW5nKDAsIDMpKStcIiBcIitfdm0uX3MoX3ZtLmRlbGl2ZXJ5X2RhdGUubmFtZSkrXCIgXCIrX3ZtLl9zKF92bS5kZWxpdmVyeV9kYXRlLmRheSkrXCIgXCIrX3ZtLl9zKF92bS5jaGVja291dFBheWxvYWQuZGVsaXZlcnkudGltZSkrXCIgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCIgRGVsaXZlcnkgVGltZSBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uZ2VuZXJhdGVEYXRlcygpLCAoX3ZtLnRpbWVkaWFnID0gdHJ1ZSl9fX0sW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiIG1kaS1jaGV2cm9uLXJpZ2h0IFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1kaXZpZGVyJyksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJpZFwiOlwibmVlZE1vbmV5XCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWljb24nLFtfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcInJlZFwifX0sW192bS5fdihcIiBtZGktY2FzaC1tdWx0aXBsZSBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIiBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQubW9uZXkpKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBZb3VyIG1vbmV5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3YtdG9vbHRpcCcse2F0dHJzOntcImJvdHRvbVwiOlwiXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImFjdGl2YXRvclwiLGZuOmZ1bmN0aW9uKHJlZil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbiA9IHJlZi5vbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzO1xucmV0dXJuIFtfYygndi1pY29uJyxfdm0uX2coX3ZtLl9iKHthdHRyczp7XCJjb2xvclwiOlwiYmx1ZVwiLFwic21hbGxcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLm1vbmV5dG9vbHRpcCA9ICFfdm0ubW9uZXl0b29sdGlwfX19LCd2LWljb24nLGF0dHJzLGZhbHNlKSxvbiksW192bS5fdihcIiBtZGktYWxlcnQtY2lyY2xlLW91dGxpbmUgXCIpXSldfX1dLG51bGwsZmFsc2UsNDkxNDY2MjYyKSxtb2RlbDp7dmFsdWU6KF92bS5tb25leXRvb2x0aXApLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ubW9uZXl0b29sdGlwPSQkdn0sZXhwcmVzc2lvbjpcIm1vbmV5dG9vbHRpcFwifX0sW192bS5fdihcIiBcIiksX2MoJ3NwYW4nLFtfdm0uX3YoXCIgU28gb3VyIHJpZGVyIGNhbiBwcmVwYXJlIGV4YWN0IGNoYW5nZSBmb3IgeW91LiBcIildKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0ubW9uZXlkaWFnID0gdHJ1ZX19fSxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIn19LFtfdm0uX3YoXCIgbWRpLWNoZXZyb24tcmlnaHQgXCIpXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScsW19jKCd2LWxpc3QtaXRlbS1pY29uJyxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIn19LFtfdm0uX3YoXCIgbWRpLWNhc2gtMTAwIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfdm0uY2hlY2tvdXRQYXlsb2FkLmFtb3VudC50aXApKStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBSaWRlciB0aXAoT3B0aW9uYWwpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ3YtdG9vbHRpcCcse2F0dHJzOntcImJvdHRvbVwiOlwiXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImFjdGl2YXRvclwiLGZuOmZ1bmN0aW9uKHJlZil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbiA9IHJlZi5vbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzO1xucmV0dXJuIFtfYygndi1pY29uJyxfdm0uX2coX3ZtLl9iKHthdHRyczp7XCJjb2xvclwiOlwiYmx1ZVwiLFwic21hbGxcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLnJpZGVydG9vbHRpcCA9ICFfdm0ucmlkZXJ0b29sdGlwfX19LCd2LWljb24nLGF0dHJzLGZhbHNlKSxvbiksW192bS5fdihcIiBtZGktYWxlcnQtY2lyY2xlLW91dGxpbmUgXCIpXSldfX1dLG51bGwsZmFsc2UsNTE2MzU5NTc0KSxtb2RlbDp7dmFsdWU6KF92bS5yaWRlcnRvb2x0aXApLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ucmlkZXJ0b29sdGlwPSQkdn0sZXhwcmVzc2lvbjpcInJpZGVydG9vbHRpcFwifX0sW192bS5fdihcIiBcIiksX2MoJ3NwYW4nLFtfdm0uX3YoXCIgQXBwcmVjaWF0ZSB5b3VyIHJpZGVyIGVmZm9ydC4gR2l2ZSBoaW0gdGlwLiBcIildKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0udGlwZGlhZyA9IHRydWV9fX0sW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiIG1kaS1jaGV2cm9uLXJpZ2h0IFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1kaXZpZGVyJyldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYWxlcnQnLHthdHRyczp7XCJ0eXBlXCI6XCJpbmZvXCJ9fSxbX3ZtLl92KFwiV2UgYWNjZXB0IENBU0ggb24gRGVsaXZlcnksIEdDQVNILCBQYXltYXlhLCBDb2lucy5waC4gWW91ciByaWRlciB3aWxsIGluc3RydWN0IHlvdSBob3cgdG8gUGF5IG9uIG5vbiBDT0QgcGF5bWVudC5cIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHtzdGF0aWNDbGFzczpcInNob3ByZXNwb25zaXZlXCIsYXR0cnM6e1wiYmxvY2tcIjpcIlwiLFwiY29sb3JcIjpcInJlZFwiLFwib3V0bGluZWRcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jb25maXJtT3JkZXIoKX19fSxbX3ZtLl92KFwiIENvbmZpcm0gT3JkZXIgXCIpXSldLDEpXSwxKV0sMSk6X3ZtLl9lKCldLDEpXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3Ytcm93Jyx7YXR0cnM6e1wianVzdGlmeVwiOlwiY2VudGVyXCJ9fSxbX2MoJ3YtYm90dG9tLXNoZWV0Jyx7YXR0cnM6e1wic2Nyb2xsYWJsZVwiOlwiXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmFkZHJlc3NEaWFnKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmFkZHJlc3NEaWFnPSQkdn0sZXhwcmVzc2lvbjpcImFkZHJlc3NEaWFnXCJ9fSxbX2MoJ3YtY2FyZCcse2F0dHJzOntcInRpbGVcIjpcIlwiLFwiaGVpZ2h0XCI6XCI2MDBweFwifX0sW19jKCd2LWNhcmQtdGl0bGUnLHthdHRyczp7XCJwcmltYXJ5LXRpdGxlXCI6XCJcIn19LFtfdm0uX3YoXCIgRGVsaXZlcnkgQWRkcmVzcyBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwiLFwic20xMlwiOlwiXCJ9fSxbX2MoJ3YtdGV4dGFyZWEnLHthdHRyczp7XCJhXCI6XCJcIixcImhpbnRcIjpcIlBscyB0eXBlICdOQScgaWYgbm90IGFwcGxpY2FibGVcIixcImxhYmVsXCI6XCJBZGRyZXNzXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJwbGFjZWhvbGRlclwiOlwiQWRkcmVzc1wifSxtb2RlbDp7dmFsdWU6KF92bS5jaGVja291dFBheWxvYWQuZGVsaXZlcnkudG8uYWRkcmVzcyksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5jaGVja291dFBheWxvYWQuZGVsaXZlcnkudG8sIFwiYWRkcmVzc1wiLCAkJHYpfSxleHByZXNzaW9uOlwiY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LnRvLmFkZHJlc3NcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDEyXCI6XCJcIixcInNtMTJcIjpcIlwifX0sW19jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJhXCI6XCJcIixcImhpbnRcIjpcIlBscyB0eXBlICdOQScgaWYgbm90IGFwcGxpY2FibGVcIixcImxhYmVsXCI6XCJGbG9vci9Vbml0L1Jvb20gTm8uXCIsXCJwZXJzaXN0ZW50LWhpbnRcIjpcIlwiLFwib3V0bGluZWRcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS5jaGVja291dFBheWxvYWQuZGVsaXZlcnkudG8udW5pdCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5jaGVja291dFBheWxvYWQuZGVsaXZlcnkudG8sIFwidW5pdFwiLCAkJHYpfSxleHByZXNzaW9uOlwiY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LnRvLnVuaXRcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDEyXCI6XCJcIixcInNtMTJcIjpcIlwifX0sW19jKCd2LXRleHRhcmVhJyx7YXR0cnM6e1wiaGludFwiOlwiUGxzIHR5cGUgJ05BJyBpZiBub3QgYXBwbGljYWJsZVwiLFwibGFiZWxcIjpcIk5vdGUgdG8gcmlkZXJcIixcIm91dGxpbmVkXCI6XCJcIixcInBsYWNlaG9sZGVyXCI6XCJlZy4gTGFuZG1hcmsvIEJ1aWxkaW5nXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS50by5yaWRlcl9ub3RlKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS50bywgXCJyaWRlcl9ub3RlXCIsICQkdil9LGV4cHJlc3Npb246XCJjaGVja291dFBheWxvYWQuZGVsaXZlcnkudG8ucmlkZXJfbm90ZVwifX0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcInRpbGVcIjpcIlwiLFwib3V0bGluZWRcIjpcIlwiLFwiY29sb3JcIjpcInJlZFwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmFkZHJlc3NEaWFnID0gZmFsc2V9fX0sW192bS5fdihcIiBBcHBseSBDaGFuZ2VzIFwiKV0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYm90dG9tLXNoZWV0Jyx7YXR0cnM6e1wid2lkdGhcIjpcIjUwMHB4XCIsXCJwZXJzaXN0ZW50XCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0udGltZWRpYWcpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0udGltZWRpYWc9JCR2fSxleHByZXNzaW9uOlwidGltZWRpYWdcIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10aXRsZScsW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJoZWFkbGluZVwifSxbX3ZtLl92KFwiRGVsaXZlcnkgRGF0ZSAmIFRpbWVcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtY29udGFpbmVyJyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ2XCI6XCJcIixcImxnNlwiOlwiXCIsXCJzbTZcIjpcIlwifX0sW19jKCd2LXNlbGVjdCcse2F0dHJzOntcImZsYXRcIjpcIlwiLFwiaXRlbXNcIjpfdm0uZGF0ZXMsXCJyZXR1cm4tb2JqZWN0XCI6XCJcIixcImxhYmVsXCI6XCJEZWxpdmVyeSBEYXRlXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcInNlbGVjdGlvblwiLGZuOmZ1bmN0aW9uKGRhdGEpe3JldHVybiBbX3ZtLl92KFwiIFwiK192bS5fcyhkYXRhLml0ZW0ubGFiZWwpK1wiLCBcIitfdm0uX3MoZGF0YS5pdGVtLmRheV9uYW1lKStcIiBcIitfdm0uX3MoZGF0YS5pdGVtLm5hbWUpK1wiIFwiK192bS5fcyhkYXRhLml0ZW0uZGF5KStcIiBcIildfX0se2tleTpcIml0ZW1cIixmbjpmdW5jdGlvbihkYXRhKXtyZXR1cm4gW192bS5fdihcIiBcIitfdm0uX3MoZGF0YS5pdGVtLmxhYmVsKStcIiwgXCIrX3ZtLl9zKGRhdGEuaXRlbS5kYXlfbmFtZSkrXCIgXCIrX3ZtLl9zKGRhdGEuaXRlbS5uYW1lKStcIiBcIitfdm0uX3MoZGF0YS5pdGVtLmRheSkrXCIgXCIpXX19XSksbW9kZWw6e3ZhbHVlOihfdm0uZGVsaXZlcnlfZGF0ZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5kZWxpdmVyeV9kYXRlPSQkdn0sZXhwcmVzc2lvbjpcImRlbGl2ZXJ5X2RhdGVcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1mbGV4Jyx7YXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDZcIjpcIlwiLFwibGc2XCI6XCJcIixcInNtNlwiOlwiXCJ9fSxbX2MoJ3Ytc2VsZWN0Jyx7YXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJpdGVtc1wiOl92bS5kZWxpdmVyeV9kYXRlLmRlbGl2ZXJ5X3RpbWUsXCJsYWJlbFwiOlwiRGVsaXZlcnkgVGltZVwifSxtb2RlbDp7dmFsdWU6KF92bS5jaGVja291dFBheWxvYWQuZGVsaXZlcnkudGltZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5jaGVja291dFBheWxvYWQuZGVsaXZlcnksIFwidGltZVwiLCAkJHYpfSxleHByZXNzaW9uOlwiY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LnRpbWVcIn19KV0sMSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJibHVlIGRhcmtlbi0xXCIsXCJ0ZXh0XCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS50aW1lZGlhZyA9IGZhbHNlfX19LFtfdm0uX3YoXCIgU2F2ZSBcIildKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse2F0dHJzOntcImluc2V0XCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0ubWFwU2hlZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ubWFwU2hlZXQ9JCR2fSxleHByZXNzaW9uOlwibWFwU2hlZXRcIn19LFtfYygndi1jYXJkJyx7YXR0cnM6e1wiZmxhdFwiOlwiXCJ9fSxbX2MoJ3YtY2FyZC10aXRsZScsW192bS5fdihcIlNlbGVjdCBEZWxpdmVyeSBMb2NhdGlvblwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibWFwY29udGFpbmVyXCJ9LFtfYygnR01hcCcse3JlZjpcImdNYXBcIixhdHRyczp7XCJpZFwiOlwiZ21hcFwiLFwiY2VudGVyXCI6X3ZtLmxvY2F0aW9uLFwib3B0aW9uc1wiOntcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeSdcbiAgICAgICAgICAgIH0sXCJ6b29tXCI6MTV9LG9uOntcImNlbnRlcl9jaGFuZ2VkXCI6X3ZtLmNlbnRlckNoYW5nZX19LFtfYygnR01hcE1hcmtlcicse3JlZjpcImdtYXBtYXJrZXJcIixhdHRyczp7XCJwb3NpdGlvblwiOl92bS5sb2NhdGlvbixcIm9wdGlvbnNcIjp7IGljb246IF92bS5zZWxlY3RlZG1hcmtlciB9fX0pXSwxKV0sMSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIixcImJsb2NrXCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLnByZUNoZWNrb3V0KCRldmVudCl9fX0sW192bS5fdihcIiBTZXQgRGVsaXZlcnkgTG9jYXRpb24gXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1ib3R0b20tc2hlZXQnLHthdHRyczp7XCJ3aWR0aFwiOlwiNTAwcHhcIixcInBlcnNpc3RlbnRcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS5tb25leWRpYWcpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ubW9uZXlkaWFnPSQkdn0sZXhwcmVzc2lvbjpcIm1vbmV5ZGlhZ1wifX0sW19jKCd2LWNhcmQnLFtfYygndi1jYXJkLXRpdGxlJyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImhlYWRsaW5lXCJ9LFtfdm0uX3YoXCJZb3VyIG1vbmV5XCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwifX0sW19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwiLFwic20xMlwiOlwiXCJ9fSxbX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcInJpZ2h0XCI6XCJcIixcInR5cGVcIjpcIm51bWJlclwiLFwiZGVuc2VcIjpcIlwiLFwic29sb1wiOlwiXCIsXCJsYWJlbFwiOlwiWW91ciBNb25leVwiLFwib3V0bGluZWRcIjpcIlwiLFwicGxhY2Vob2xkZXJcIjpcIllvdXIgTW9uZXlcIn0sbW9kZWw6e3ZhbHVlOihfdm0uY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5tb25leSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5jaGVja291dFBheWxvYWQuYW1vdW50LCBcIm1vbmV5XCIsICQkdil9LGV4cHJlc3Npb246XCJjaGVja291dFBheWxvYWQuYW1vdW50Lm1vbmV5XCJ9fSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcInRpbGVcIjpcIlwiLFwib3V0bGluZWRcIjpcIlwiLFwiZGlzYWJsZWRcIjpfdm0uY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5tb25leSA8IF92bS5jaGVja291dFBheWxvYWQuYW1vdW50LmdyYW5kdG90YWwgLSBfdm0ucHJvbW9Db2RlU3RhdHVzLnZhbHVlLFwiY29sb3JcIjpcInJlZFwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLm1vbmV5ZGlhZyA9IGZhbHNlfX19LFtfdm0uX3YoXCIgQXBwbHkgQ2hhbmdlcyBcIildKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse21vZGVsOnt2YWx1ZTooX3ZtLmF1dGhEaWFnKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmF1dGhEaWFnPSQkdn0sZXhwcmVzc2lvbjpcImF1dGhEaWFnXCJ9fSxbX2MoJ3YtY2FyZCcse2F0dHJzOntcImZsYXRcIjpcIlwifX0sW19jKCd2LWNhcmQtdGl0bGUnLFtfdm0uX3YoXCJDb250YWN0IEluZm9cIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCdmaXJlLXVpJyldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1ib3R0b20tc2hlZXQnLHthdHRyczp7XCJ3aWR0aFwiOlwiNTAwcHhcIixcInBlcnNpc3RlbnRcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS50aXBkaWFnKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnRpcGRpYWc9JCR2fSxleHByZXNzaW9uOlwidGlwZGlhZ1wifX0sW19jKCd2LWNhcmQnLFtfYygndi1jYXJkLXRpdGxlJyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImhlYWRsaW5lXCJ9LFtfdm0uX3YoXCJSaWRlciBUaXBcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCIsXCJzbTEyXCI6XCJcIn19LFtfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wicmlnaHRcIjpcIlwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJkZW5zZVwiOlwiXCIsXCJzb2xvXCI6XCJcIixcImxhYmVsXCI6XCJSaWRlciBUaXBcIixcIm91dGxpbmVkXCI6XCJcIixcInBsYWNlaG9sZGVyXCI6XCJBbW91bnQgb2YgdGlwXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQudGlwKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQsIFwidGlwXCIsICQkdil9LGV4cHJlc3Npb246XCJjaGVja291dFBheWxvYWQuYW1vdW50LnRpcFwifX0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJ0aWxlXCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIixcImRpc2FibGVkXCI6X3ZtLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQudGlwIDwgMCxcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS50aXBkaWFnID0gZmFsc2V9fX0sW192bS5fdihcIiBBcHBseSBDaGFuZ2VzIFwiKV0pXSwxKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXNuYWNrYmFyJyx7YXR0cnM6e1wiY29sb3JcIjpcImJsdWVcIixcInRpbWVvdXRcIjozMDAwfSxtb2RlbDp7dmFsdWU6KF92bS5zbmFja2JhciksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5zbmFja2Jhcj0kJHZ9LGV4cHJlc3Npb246XCJzbmFja2JhclwifX0sW192bS5fdihcIiBJdGVtIHJlbW92ZWQgZnJvbSBjYXJ0IFwiKV0pLF92bS5fdihcIiBcIiksKCFfdm0uaXNIaWRlICYmIF92bS5jYXJ0U2l6ZSA+IDApP19jKCd2LWNhcmQnLHtzdGF0aWNDbGFzczpcInNob3ByZXNwb25zaXZlXCIsYXR0cnM6e1wid2lkdGhcIjpcIjEwMCVcIn19LFtfYygncGVybWlzc2lvbicpLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1hdmF0YXInLHthdHRyczp7XCJjb2xvclwiOlwiZ3JleSBkYXJrZW4tM1wifX0sWyhfdm0ubWVyY2hhbnQubG9nbyAhPSAnJyk/X2MoJ3YtaW1nJyx7c3RhdGljQ2xhc3M6XCJlbGV2YXRpb24tNlwiLGF0dHJzOntcImNvbnRhaW5cIjpcIlwiLFwic3JjXCI6X3ZtLm1lcmNoYW50LmxvZ299fSk6X2MoJ3YtYXZhdGFyJyx7c3RhdGljQ2xhc3M6XCJ3aGl0ZS0tdGV4dFwiLGF0dHJzOntcImNvbG9yXCI6XCJibHVlXCJ9fSxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0ubWVyY2hhbnQuYnVzaW5lc3NfbmFtZSAubWF0Y2goL1xcYihcXHcpL2cpIC5qb2luKCcnKSAuc3Vic3RyKDAsIDIpKStcIiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW19jKCdzbWFsbCcsW192bS5fdihcIlNvbGQgYnlcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0ubWVyY2hhbnQuYnVzaW5lc3NfbmFtZSkrXCIgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5tZXJjaGFudC5icmFuY2gpK1wiIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1hY3Rpb24nLFtfYygndi1saXN0LWl0ZW0tYWN0aW9uLXRleHQnLFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY2FwdGlvbiBncmV5LS10ZXh0XCJ9LFtfdm0uX3YoXCJUb3RhbFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dCBzdWJ0aXRsZS0yXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5ncmFuZHRvdGFsKSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIixcInNtYWxsXCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLmluaXRDaGVja291dCgpfX19LFtfdm0uX3YoXCIgQ2hlY2tvdXQgXCIpXSldLDEpXSwxKV0sMSk6X3ZtLl9lKCldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDx2LWNhcmQgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICA8bG9hZGluZyA6YWN0aXZlLnN5bmM9XCJpc0xvYWRpbmdcIiBsb2FkZXI9XCJiYXJzXCIgOmlzLWZ1bGwtcGFnZT1cInRydWVcIiBjb2xvcj1cIiMwMGFmZjBcIiAvPiA8aW1nIGhlaWdodD1cIjFcIiB3aWR0aD1cIjFcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIHNyYz1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90cj9pZD0yMzIwNTEwODY0OTI0NDM3JmV2PVBhZ2VWaWV3Jm5vc2NyaXB0PTFcIiAvPlxuICAgICAgICA8di1hcHAtYmFyIGFwcCBmaXhlZCBkYXJrIGNvbG9yPVwiIzAwYWZmMFwiPlxuICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrLnN0b3A9XCIkcm91dGVyLmdvKC0xKVwiPlxuICAgICAgICAgICAgICAgIDx2LWljb24+IG1kaS1hcnJvdy1sZWZ0LWJvbGQ8L3YtaWNvbj5cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPkNhcnQ8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPC92LWFwcC1iYXI+XG4gICAgICAgIDxjbGllbnQtb25seT5cbiAgICAgICAgICAgIDx2LXNoZWV0IGNsYXNzPVwib3ZlcmZsb3cteS1hdXRvXCIgbWF4LWhlaWdodD1cIjg1dmhcIj5cbiAgICAgICAgICAgICAgICA8di1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgdGV4dC1sZWZ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggdi1pZj1cImlzSGlkZSAmJiBjYXJ0U2l6ZSA8IDFcIiB4czEyIG1kNCBzbTQgbGczIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjbGFzcz1cIm1iLTJcIiBjb2xvcj1cInN1Y2Nlc3NcIiBzaXplPVwiMjAwXCI+IG1kaS1jaGVja2JveC1tYXJrZWQtY2lyY2xlIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGUgbWItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6NTBweDtcIj4mIzEyODUyMzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+T3JkZXIgQ29tcGxldGVkPC9oND4gPC9ibG9ja3F1b3RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmVkIHRleHQgYmxvY2sgdG89XCIvdHJhbnNhY3Rpb25zXCIgY29sb3I9XCJyZWRcIj4gVmlldyBPcmRlcnMgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB2LWlmPVwiIWlzSGlkZSAmJiBjYXJ0U2l6ZSA8IDFcIiB4czEyIG1kNCBzbTQgbGczIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjbGFzcz1cIm1iLTJcIiBjb2xvcj1cInJlZFwiIHNpemU9XCIyMDBcIj4gbWRpLWNhcnQtb2ZmIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjUwcHg7XCI+JiMxMjg1NDY7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PllvdXIgY2FydCBpcyBsb25lbHk8L2g0PiA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZWQgdGV4dCBibG9jayB0bz1cIi9cIiBjb2xvcj1cInJlZFwiPiBTaG9wIE5vdyA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHYtaWY9XCIhaXNIaWRlICYmIGNhcnRTaXplID4gMFwiIHhzMTIgc202IG1kNiBsZzQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1ncm91cCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2FydEl0ZW1cIiA6a2V5PVwiaXRlbS5pbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hdmF0YXIgY29sb3I9XCJncmV5IGRhcmtlbi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XCJpdGVtLmluZm8uaW1nICE9ICcnXCIgY2xhc3M9XCJlbGV2YXRpb24tNlwiIDpzcmM9XCJpdGVtLmluZm8uaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1hdmF0YXIgdi1lbHNlIGNsYXNzPVwid2hpdGUtLXRleHRcIiBjb2xvcj1cImJsdWVcIj4ge3sgaXRlbS5pbmZvLm5hbWUgLm1hdGNoKC9cXGIoXFx3KS9nKSAuam9pbignJykgLnN1YnN0cigwLCAyKSB9fSA8L3YtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGUgdi10ZXh0PVwiaXRlbS5pbmZvLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZSBjbGFzcz1cInJlZC0tdGV4dFwiPiB7eyBjb21wdXRlVG90YWwoaXRlbSkgfCB0b1BIUCB9fSA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uLXRleHQ+IHt7IChjb21wdXRlVG90YWwoaXRlbSkgLyBpdGVtLnF0eSkgfCB0b1BIUCB9fSB4IHt7IGl0ZW0ucXR5IH19IDwvdi1saXN0LWl0ZW0tYWN0aW9uLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbCBjb2xvcj1cInJlZFwiIEBjbGljay5zdG9wPVwicmVtb3ZlQ2FydChpdGVtKVwiPiBtZGktZGVsZXRlIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNpbXBsZS10YWJsZSBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtbGVmdFwiPiBJdGVtIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWxlZnRcIj4gVmFsdWUgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtbGVmdFwiPiBQcmljZSA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoYWRkb24sIGkpIGluIGNvbXB1dGVBZGRPbnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkX29ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmZvLmJhc2VfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcIiA6a2V5PVwiYWRkb24ubmFtZSArIGBfYCArIGkgKyBgX2AgKyBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGFkZG9uLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGFkZG9uLnZhbHVlcyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImFkZG9uLnByaWNlPjBcIj57eyBhZGRvbi5wcmljZSB8IHRvUEhQIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwiYWRkb24ucHJpY2U8MVwiPi08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Ytc2ltcGxlLXRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIHYtaWY9XCJpbmRleCArIDEgPD0gY2FydEl0ZW0ubGVuZ3RoXCIgOmtleT1cImluZGV4XCIgLz4gPC92LWxpc3QtaXRlbS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHYtaWY9XCJpc0hpZGUgJiYgY2FydFNpemUgPiAwXCIgeHMxMiBtZDQgc200IGxnMyBjbGFzcz1cIm1hLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czggc204IG1kOCBjbGFzcz1cInN1YnRpdGxlLTJcIj4gT3JkZXIgVmFsdWUgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IHNtNCBtZDQ+IHt7IGNoZWNrb3V0UGF5bG9hZC5hbW91bnQub3JkZXJfdmFsdWUgfCB0b1BIUCB9fSA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czggc204IG1kOD4gRGVsaXZlcnkgRmVlIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3sgY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LmRpc3RhbmNlLmNvbXB1dGVkIH19IGttIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCBzbTQgbWQ0IGNsYXNzPVwidGV4dC1lbmRcIj4ge3sgKGNoZWNrb3V0UGF5bG9hZC5hbW91bnQuZGVsaXZlcnkucGxhdGZvcm0gKyBjaGVja291dFBheWxvYWQuYW1vdW50LmRlbGl2ZXJ5LnJpZGVyKSB8IHRvUEhQIH19IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzOCBzbTggbWQ4PiBDb252ZW5pZW5jZSBGZWUgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IHNtNCBtZDQgY2xhc3M9XCJ0ZXh0LWVuZFwiPiB7eyBjaGVja291dFBheWxvYWQuYW1vdW50LnNjLm1hcmt1cCB8dG9QSFB9fSA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzOCBzbTggbWQ4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB0ZXh0IGFwcGVuZC1pY29uPVwibWRpLXRpY2tldC1wZXJjZW50XCIgdi1tb2RlbD1cInByb21vQ29kZVwiIHNvbG8gZGVuc2Ugc21hbGwgY2xhc3M9XCJtci0yXCIgcGxhY2Vob2xkZXI9XCJQcm9tbyBDb2RlXCIgbGFiZWw9XCJQcm9tbyBDb2RlXCI+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IHNtNCBtZDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZWQgY29sb3I9XCJncmVlblwiIEBjbGljay5zdG9wPVwiZmluZFZvdWNoZXIoKVwiPkFwcGx5PC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM4IHNtOCBtZDggdi1pZj1cInByb21vQ29kZVN0YXR1cy5hY2NlcHRlZFwiIGNsYXNzPVwic3VidGl0bGUtMlwiPkRpc2NvdW50IC0ge3twcm9tb0NvZGVTdGF0dXMuc3RhdHVzLmNvZGV9fSA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgc200IG1kNCB2LWlmPVwicHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkXCI+IHt7cHJvbW9Db2RlU3RhdHVzLnN0YXR1cy52YWx1ZSB9fSA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czggc204IG1kOCB2LWlmPVwicHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1YmhlYWRpbmdcIj5TdWJ0b3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IHNtNCBtZDQgdi1pZj1cInByb21vQ29kZVN0YXR1cy5hY2NlcHRlZFwiPiB7eyBjaGVja291dFBheWxvYWQuYW1vdW50LmdyYW5kdG90YWwgfCB0b1BIUCB9fSA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czggc204IG1kOCBjbGFzcz1cInN1YnRpdGxlLTJcIiB2LWlmPVwicHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkXCI+IEFtb3VudCA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgc200IG1kNCB2LWlmPVwicHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkXCI+IC0ge3twcm9tb0NvZGVTdGF0dXMuc3RhdHVzLmNvbXB1dGVkfHRvUEhQfX0gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiB2LWlmPVwicHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkID09IGZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1hbGVydCB0eXBlPVwiZXJyb3JcIj57e3Byb21vQ29kZVN0YXR1cy5zdGF0dXN9fTwvdi1hbGVydD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM4IHNtOCBtZDggdi1pZj1cIiFwcm9tb0NvZGVTdGF0dXMuYWNjZXB0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ViaGVhZGluZ1wiPkdyYW5kdG90YWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCBzbTQgbWQ0IHYtaWY9XCIhcHJvbW9Db2RlU3RhdHVzLmFjY2VwdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtMiByZWQtLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGNoZWNrb3V0UGF5bG9hZC5hbW91bnQuZ3JhbmR0b3RhbCB8IHRvUEhQIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM4IHNtOCBtZDggdi1pZj1cInByb21vQ29kZVN0YXR1cy5hY2NlcHRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nXCI+R3JhbmR0b3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IHNtNCBtZDQgdi1pZj1cInByb21vQ29kZVN0YXR1cy5hY2NlcHRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTIgcmVkLS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBjaGVja291dFBheWxvYWQuYW1vdW50LmdyYW5kdG90YWwgLSBwcm9tb0NvZGVTdGF0dXMuc3RhdHVzLmNvbXB1dGVkIHwgdG9QSFAgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCBuYXYgb3V0bGluZWQgdGlsZSB3aWR0aD1cIjEwMCVcIiBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBpZD1cIm5lZWRBdXRoXCIgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJyZWRcIj4gbWRpLWNlbGxwaG9uZSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4ge3sgY2hlY2tvdXRQYXlsb2FkLm9yZGVyLmJ5Lm5hbWUgfX0ge3sgY2hlY2tvdXRQYXlsb2FkLm9yZGVyLmJ5LmNvbnRhY3QgfX0gPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPiBDb250YWN0IEluZm9ybWF0aW9uIDwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hY3Rpb24gQGNsaWNrLnN0b3A9XCJhdXRoRGlhZyA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiPiBtZGktY2hldnJvbi1yaWdodCA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gaWQ9XCJuZWVkQWRkclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwicmVkXCI+IG1kaS1tYXAgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+IHt7IGNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS50by5hZGRyZXNzIH19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT4gRGVsaXZlcnkgQWRkcmVzcyA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uIEBjbGljay5zdG9wPVwiYWRkcmVzc0RpYWcgPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJyZWRcIj4gbWRpLWNoZXZyb24tcmlnaHQgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGlkPVwibmVlZERlbGlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiPiBtZGktY2xvY2sgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+IHt7IGRlbGl2ZXJ5X2RhdGUubGFiZWwgfX0sIHt7IGRlbGl2ZXJ5X2RhdGUuZGF5X25hbWUuc3Vic3RyaW5nKDAsIDMpIH19IHt7IGRlbGl2ZXJ5X2RhdGUubmFtZSB9fSB7eyBkZWxpdmVyeV9kYXRlLmRheSB9fSB7eyBjaGVja291dFBheWxvYWQuZGVsaXZlcnkudGltZSB9fSA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+IERlbGl2ZXJ5IFRpbWUgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbiBAY2xpY2suc3RvcD1cImdlbmVyYXRlRGF0ZXMoKSwgKHRpbWVkaWFnID0gdHJ1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiPiBtZGktY2hldnJvbi1yaWdodCA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gaWQ9XCJuZWVkTW9uZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiPiBtZGktY2FzaC1tdWx0aXBsZSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4ge3sgY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5tb25leSB8IHRvUEhQIH19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT4gWW91ciBtb25leVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbHRpcCB2LW1vZGVsPVwibW9uZXl0b29sdGlwXCIgYm90dG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwiYmx1ZVwiIHNtYWxsIHYtYmluZD1cImF0dHJzXCIgQGNsaWNrPVwibW9uZXl0b29sdGlwID0gIW1vbmV5dG9vbHRpcFwiIHYtb249XCJvblwiPiBtZGktYWxlcnQtY2lyY2xlLW91dGxpbmUgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gU28gb3VyIHJpZGVyIGNhbiBwcmVwYXJlIGV4YWN0IGNoYW5nZSBmb3IgeW91LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbiBAY2xpY2suc3RvcD1cIm1vbmV5ZGlhZyA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiPiBtZGktY2hldnJvbi1yaWdodCA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJyZWRcIj4gbWRpLWNhc2gtMTAwIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPiB7eyBjaGVja291dFBheWxvYWQuYW1vdW50LnRpcCB8IHRvUEhQIH19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT4gUmlkZXIgdGlwKE9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbHRpcCB2LW1vZGVsPVwicmlkZXJ0b29sdGlwXCIgYm90dG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwiYmx1ZVwiIHNtYWxsIHYtYmluZD1cImF0dHJzXCIgQGNsaWNrPVwicmlkZXJ0b29sdGlwID0gIXJpZGVydG9vbHRpcFwiIHYtb249XCJvblwiPiBtZGktYWxlcnQtY2lyY2xlLW91dGxpbmUgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQXBwcmVjaWF0ZSB5b3VyIHJpZGVyIGVmZm9ydC4gR2l2ZSBoaW0gdGlwLiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbiBAY2xpY2suc3RvcD1cInRpcGRpYWcgPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJyZWRcIj4gbWRpLWNoZXZyb24tcmlnaHQgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciAvPiA8L3YtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYWxlcnQgdHlwZT1cImluZm9cIj5XZSBhY2NlcHQgQ0FTSCBvbiBEZWxpdmVyeSwgR0NBU0gsIFBheW1heWEsIENvaW5zLnBoLiBZb3VyIHJpZGVyIHdpbGwgaW5zdHJ1Y3QgeW91IGhvdyB0byBQYXkgb24gbm9uIENPRCBwYXltZW50Ljwvdi1hbGVydD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBibG9jayBjb2xvcj1cInJlZFwiIGNsYXNzPVwic2hvcHJlc3BvbnNpdmVcIiBvdXRsaW5lZCBAY2xpY2s9XCJjb25maXJtT3JkZXIoKVwiPiBDb25maXJtIE9yZGVyIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC92LWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3Ytc2hlZXQ+XG4gICAgICAgICAgICA8di1yb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwiYWRkcmVzc0RpYWdcIiBzY3JvbGxhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkIHRpbGUgaGVpZ2h0PVwiNjAwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT4gRGVsaXZlcnkgQWRkcmVzcyA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQxMiBzbTEyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0YXJlYSB2LW1vZGVsPVwiY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LnRvLmFkZHJlc3NcIiBhIGhpbnQ9XCJQbHMgdHlwZSAnTkEnIGlmIG5vdCBhcHBsaWNhYmxlXCIgbGFiZWw9XCJBZGRyZXNzXCIgb3V0bGluZWQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgLz4gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kMTIgc20xMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LW1vZGVsPVwiY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LnRvLnVuaXRcIiBhIGhpbnQ9XCJQbHMgdHlwZSAnTkEnIGlmIG5vdCBhcHBsaWNhYmxlXCIgbGFiZWw9XCJGbG9vci9Vbml0L1Jvb20gTm8uXCIgcGVyc2lzdGVudC1oaW50IG91dGxpbmVkIC8+IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDEyIHNtMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHRhcmVhIHYtbW9kZWw9XCJjaGVja291dFBheWxvYWQuZGVsaXZlcnkudG8ucmlkZXJfbm90ZVwiIGhpbnQ9XCJQbHMgdHlwZSAnTkEnIGlmIG5vdCBhcHBsaWNhYmxlXCIgbGFiZWw9XCJOb3RlIHRvIHJpZGVyXCIgb3V0bGluZWQgcGxhY2Vob2xkZXI9XCJlZy4gTGFuZG1hcmsvIEJ1aWxkaW5nXCIgLz4gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB0aWxlIG91dGxpbmVkIGNvbG9yPVwicmVkXCIgQGNsaWNrPVwiYWRkcmVzc0RpYWcgPSBmYWxzZVwiPiBBcHBseSBDaGFuZ2VzIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICAgICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwidGltZWRpYWdcIiB3aWR0aD1cIjUwMHB4XCIgcGVyc2lzdGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPkRlbGl2ZXJ5IERhdGUgJiBUaW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDYgbGc2IHNtNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3Qgdi1tb2RlbD1cImRlbGl2ZXJ5X2RhdGVcIiBmbGF0IDppdGVtcz1cImRhdGVzXCIgcmV0dXJuLW9iamVjdCBsYWJlbD1cIkRlbGl2ZXJ5IERhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNzZWxlY3Rpb249XCJkYXRhXCI+IHt7IGRhdGEuaXRlbS5sYWJlbCB9fSwge3sgZGF0YS5pdGVtLmRheV9uYW1lIH19IHt7IGRhdGEuaXRlbS5uYW1lIH19IHt7IGRhdGEuaXRlbS5kYXkgfX0gPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwiZGF0YVwiPiB7eyBkYXRhLml0ZW0ubGFiZWwgfX0sIHt7IGRhdGEuaXRlbS5kYXlfbmFtZSB9fSB7eyBkYXRhLml0ZW0ubmFtZSB9fSB7eyBkYXRhLml0ZW0uZGF5IH19IDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kNiBsZzYgc202PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCB2LW1vZGVsPVwiY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LnRpbWVcIiBmbGF0IDppdGVtcz1cImRlbGl2ZXJ5X2RhdGUuZGVsaXZlcnlfdGltZVwiIGxhYmVsPVwiRGVsaXZlcnkgVGltZVwiIC8+IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiB0ZXh0IEBjbGljaz1cInRpbWVkaWFnID0gZmFsc2VcIj4gU2F2ZSA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICAgICAgICAgICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cIm1hcFNoZWV0XCIgaW5zZXQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgZmxhdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+U2VsZWN0IERlbGl2ZXJ5IExvY2F0aW9uPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R01hcCBpZD1cImdtYXBcIiByZWY9XCJnTWFwXCIgOmNlbnRlcj1cImxvY2F0aW9uXCIgOm9wdGlvbnM9XCJ7XG4gICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeSdcbiAgICAgICAgICAgICAgICB9XCIgOnpvb209XCIxNVwiIEBjZW50ZXJfY2hhbmdlZD1cImNlbnRlckNoYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdNYXBNYXJrZXIgcmVmPVwiZ21hcG1hcmtlclwiIDpwb3NpdGlvbj1cImxvY2F0aW9uXCIgOm9wdGlvbnM9XCJ7IGljb246IHNlbGVjdGVkbWFya2VyIH1cIiAvPiA8L0dNYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiIGJsb2NrIG91dGxpbmVkIEBjbGljay5zdG9wPVwicHJlQ2hlY2tvdXRcIj4gU2V0IERlbGl2ZXJ5IExvY2F0aW9uIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICAgICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwibW9uZXlkaWFnXCIgd2lkdGg9XCI1MDBweFwiIHBlcnNpc3RlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj5Zb3VyIG1vbmV5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDEyIHNtMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJjaGVja291dFBheWxvYWQuYW1vdW50Lm1vbmV5XCIgcmlnaHQgdHlwZT1cIm51bWJlclwiIGRlbnNlIHNvbG8gbGFiZWw9XCJZb3VyIE1vbmV5XCIgb3V0bGluZWQgcGxhY2Vob2xkZXI9XCJZb3VyIE1vbmV5XCIgLz4gPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHRpbGUgb3V0bGluZWQgOmRpc2FibGVkPVwiXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5tb25leSA8IGNoZWNrb3V0UGF5bG9hZC5hbW91bnQuZ3JhbmR0b3RhbCAtIHByb21vQ29kZVN0YXR1cy52YWx1ZVxuICAgICAgICAgICAgICBcIiBjb2xvcj1cInJlZFwiIEBjbGljaz1cIm1vbmV5ZGlhZyA9IGZhbHNlXCI+IEFwcGx5IENoYW5nZXMgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDwvdi1ib3R0b20tc2hlZXQ+XG4gICAgICAgICAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJhdXRoRGlhZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkIGZsYXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPkNvbnRhY3QgSW5mbzwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaXJlLXVpIC8+IDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDwvdi1ib3R0b20tc2hlZXQ+XG4gICAgICAgICAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XCJ0aXBkaWFnXCIgd2lkdGg9XCI1MDBweFwiIHBlcnNpc3RlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj5SaWRlciBUaXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kMTIgc20xMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1tb2RlbD1cImNoZWNrb3V0UGF5bG9hZC5hbW91bnQudGlwXCIgcmlnaHQgdHlwZT1cIm51bWJlclwiIGRlbnNlIHNvbG8gbGFiZWw9XCJSaWRlciBUaXBcIiBvdXRsaW5lZCBwbGFjZWhvbGRlcj1cIkFtb3VudCBvZiB0aXBcIiAvPiA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdGlsZSBvdXRsaW5lZCA6ZGlzYWJsZWQ9XCJjaGVja291dFBheWxvYWQuYW1vdW50LnRpcCA8IDBcIiBjb2xvcj1cInJlZFwiIEBjbGljaz1cInRpcGRpYWcgPSBmYWxzZVwiPiBBcHBseSBDaGFuZ2VzIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgICAgIDx2LXNuYWNrYmFyIHYtbW9kZWw9XCJzbmFja2JhclwiIGNvbG9yPVwiYmx1ZVwiIDp0aW1lb3V0PVwiMzAwMFwiPiBJdGVtIHJlbW92ZWQgZnJvbSBjYXJ0IDwvdi1zbmFja2Jhcj5cbiAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJzaG9wcmVzcG9uc2l2ZVwiIHYtaWY9XCIhaXNIaWRlICYmIGNhcnRTaXplID4gMFwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgIDxwZXJtaXNzaW9uPjwvcGVybWlzc2lvbj5cbiAgICAgICAgICAgICAgICA8di1kaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYXZhdGFyIGNvbG9yPVwiZ3JleSBkYXJrZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaW1nIGNvbnRhaW4gdi1pZj1cIm1lcmNoYW50LmxvZ28gIT0gJydcIiBjbGFzcz1cImVsZXZhdGlvbi02XCIgOnNyYz1cIm1lcmNoYW50LmxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYXZhdGFyIHYtZWxzZSBjbGFzcz1cIndoaXRlLS10ZXh0XCIgY29sb3I9XCJibHVlXCI+IHt7IG1lcmNoYW50LmJ1c2luZXNzX25hbWUgLm1hdGNoKC9cXGIoXFx3KS9nKSAuam9pbignJykgLnN1YnN0cigwLCAyKSB9fSA8L3YtYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlNvbGQgYnk8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4ge3sgbWVyY2hhbnQuYnVzaW5lc3NfbmFtZSB9fSA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPiB7eyBtZXJjaGFudC5icmFuY2ggfX0gPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBncmV5LS10ZXh0XCI+VG90YWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWQtLXRleHQgc3VidGl0bGUtMlwiPnt7IGdyYW5kdG90YWwgfCB0b1BIUCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYWN0aW9uLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJyZWRcIiBzbWFsbCBvdXRsaW5lZCBAY2xpY2suc3RvcD1cImluaXRDaGVja291dCgpXCI+IENoZWNrb3V0IDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC9jbGllbnQtb25seT5cbiAgICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEdvb2dsZU1hcHNBcGlMb2FkZXIgZnJvbSAnZ29vZ2xlLW1hcHMtYXBpLWxvYWRlcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3Z1ZS1sb2FkaW5nLW92ZXJsYXknXG5pbXBvcnQgJ3Z1ZS1sb2FkaW5nLW92ZXJsYXkvZGlzdC92dWUtbG9hZGluZy5jc3MnXG5pbXBvcnQge1xuICAgIEdlb0ZpcmVzdG9yZVxufSBmcm9tICdnZW9maXJlc3RvcmUnXG5pbXBvcnQgRmlyZVVpIGZyb20gJ34vY29tcG9uZW50cy9GaXJlVWkudnVlJ1xuaW1wb3J0IFBlcm1pc3Npb24gZnJvbSAnfi9jb21wb25lbnRzL1Blcm1pc3Npb24udnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRmlyZVVpLFxuICAgICAgICBMb2FkaW5nLFxuICAgICAgICBQZXJtaXNzaW9uXG4gICAgfSxcbiAgICBsYXlvdXQ6ICdhcmVhJyxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlclByb2ZpbGU6IHt9LFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG1vbmV5dG9vbHRpcDogZmFsc2UsXG4gICAgICAgICAgICByaWRlcnRvb2x0aXA6IGZhbHNlLFxuICAgICAgICAgICAgcHJvbW9Db2RlOiAnJyxcbiAgICAgICAgICAgIGRlbGl2ZXJ5X2RhdGU6IHtcbiAgICAgICAgICAgICAgICBkZWxpdmVyeV90aW1lOiBbXSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RvZGF5JyxcbiAgICAgICAgICAgICAgICBkYXlfbmFtZTogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9tb0NvZGVTdGF0dXM6IHtcbiAgICAgICAgICAgICAgICBhY2NlcHRlZDogbnVsbCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGF0ZXM6IFtdLFxuICAgICAgICAgICAgc2hvd3Rvb2x0aXA6IGZhbHNlLFxuICAgICAgICAgICAgYXV0aERpYWc6IGZhbHNlLFxuICAgICAgICAgICAgdGltZWRpYWc6IGZhbHNlLFxuICAgICAgICAgICAgbW9uZXlkaWFnOiBmYWxzZSxcbiAgICAgICAgICAgIHRpcGRpYWc6IGZhbHNlLFxuICAgICAgICAgICAgaXNIaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFkZHJlc3NEaWFnOiBmYWxzZSxcbiAgICAgICAgICAgIHF0eTogMSxcbiAgICAgICAgICAgIHNlbGVjdGVkbWFya2VyOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUhVU1VSQlZIZ0I1VlU3U3dOQkVKN0xtWkJnTUMrVWRLS3gwTVpDRzJzcndjYkNCMmdscEZEUTN0by9JZWd2U0FJV1ByQkpJeVNsaXBVS0txWUxhSEozaVdJZWx6dS9EVGs4ajcxSDdNUVBsdG1abmZsbVozYjNqdWl2UTNCekNJZkRJNEZBWUJ2VFJWM1hSN3RCZ2xDQ09JUDlvRnd1di80NlFTd1dXd2ZaSWFhRE5pN3ZHT2xxdFpxaGZoUEU0L0VWaUF5NVY2bGpFOHVWU3VYWWM0SmtNam5jYXJVZU1SMGliNURiN2ZaRXZWNnZXQmQ4UEcrUTczTElGWXlqM2xBc2ExRy8zNy9ENCtKV2dQYmNRa3liZDlqcGRHWVZSWGxtU2lRU1NZbWllTVdtaGdNdXdJMGtTVFBrcFFKZ3pLSm5EZkp1S1lyeUJKSDdzVk5CU1BHSTdCS29GbDNuK0dndU1ZNEpIaXo2R3RveWJpaXNSY3ptRXRQRkFNK0lmbDZpNURtVEtZcWVYK05zc2oxOWxVejlOMko0WE54RFRpUVNrd2k0b3o2QURVM2hMZHhiN2R3VzlSeUw1QjBGSHJsdEFnWlVzRWNlNGVScm13QjN1Z0NSSjNmazRWdnNPd0VESHRjV3hLZUR5NGVtYVdtSGRSS2RGcHZOcGhRS2hkaEZtT2V0NDJEM3NmdFRKdzdYL3dIZ3cvVThoMXl3a0ovZ1lKZUkvd2kvZzhrZG1xcXFHNUFsazYyRXIrZW1HN25YQkZTcjFhcm9OU05rbndPVnpabk5TNnhJSHRGb05GNkN3ZUFicGhleUxPZm8zK0FMZnJTdXpKMUY4RXNBQUFBQVNVVk9SSzVDWUlJPScsXG4gICAgICAgICAgICBzbmFja2JhcjogZmFsc2UsXG4gICAgICAgICAgICBtYXBTaGVldDogZmFsc2UsXG4gICAgICAgICAgICBjaGVja291dFBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlkZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ3JhbmR0b3RhbDogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX3ZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgICBzYzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya3VwOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGlwOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByaWRlcjogJ3VuYXNzaWduZWQnLFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3BsYWNlZCcsXG4gICAgICAgICAgICAgICAgZGVsaXZlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlZDogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByaWRlcl9ub3RlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgIG1lcmNoYW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuY2g6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2FydFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0SXRlbUNvdW50J11cbiAgICAgICAgfSxcbiAgICAgICAgdXNlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhdXRoL2dldFVzZXInXVxuICAgICAgICB9LFxuICAgICAgICBpc0F1dGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYXV0aC9pc0F1dGgnXVxuICAgICAgICB9LFxuICAgICAgICBkZigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhZG1pbi9nZXRGYXJlJ11cbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snbWFwL2dldExvY2F0aW9uJ11cbiAgICAgICAgfSxcbiAgICAgICAgZ3JhbmR0b3RhbCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjYXJ0L2dldFRvdGFsJ11cbiAgICAgICAgfSxcbiAgICAgICAgbWVyY2hhbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRTdG9yZUlEJ11cbiAgICAgICAgfSxcbiAgICAgICAgY2FydEl0ZW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0J11cbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmVMb2NhdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjYXJ0L2dldFN0b3JlTG9jYXRpb24nXVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBpc0F1dGgoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0F1dGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0UGF5bG9hZC5vcmRlci5ieSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdDogdGhpcy51c2VyLnBob25lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy51c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnVzZXIuZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYmluZCgndXNlclByb2ZpbGUnLCB0aGlzLiRmaXJlU3RvcmVPYmooKS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyh0aGlzLnVzZXIuaWQpKVxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aERpYWcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1c2VyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja291dFBheWxvYWQub3JkZXIuYnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Q6IHRoaXMudXNlci5waG9uZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMudXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy51c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aERpYWcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhdXRoRGlhZygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXV0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXlsb2FkLm9yZGVyLmJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0OiB0aGlzLnVzZXIucGhvbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudXNlci5kaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsaXZlcnlfZGF0ZSh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXlsb2FkLmRlbGl2ZXJ5LmRhdGUgPSB2YWwuZGF0ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgIC8vIHRoaXMuJGZpcmVBbmFseXRpY3MubG9nRXZlbnQoJ3BhZ2VfdmlldycpXG4gICAgICAgIGlmICh0aGlzLmlzQXV0aCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja291dFBheWxvYWQub3JkZXIuYnkgPSB7XG4gICAgICAgICAgICAgICAgY29udGFjdDogdGhpcy51c2VyLnBob25lTnVtYmVyLFxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy51c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmF1dGhEaWFnID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBHTWFwU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBhcGlLZXk6IHRoaXMuJEdNYXBzLmFwaUtleSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ29vZ2xlID0gR29vZ2xlTWFwc0FwaUxvYWRlcihHTWFwU2V0dGluZ3MpXG4gICAgICAgIHRoaXMuJEdNYXBzLmdvb2dsZSA9IGdvb2dsZVxuICAgICAgICBpZiAoKFwiTm90aWZpY2F0aW9uXCIgaW4gd2luZG93KSAmJiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJGdldExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDBcbiAgICAgICAgICAgIH0pLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdtYXAvc2V0TG9jYXRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0LFxuICAgICAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGZpbmRWb3VjaGVyKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9tb0NvZGUgPSB0aGlzLnByb21vQ29kZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpXG4gICAgICAgICAgICB0aGlzLiRmaXJlU3RvcmVPYmooKS5jb2xsZWN0aW9uKCd2b3VjaGVyX2NvZGVzJykud2hlcmUoJ3Byb21vQ29kZScsICc9PScsIHRoaXMucHJvbW9Db2RlKS5nZXQoKS50aGVuKChzbmFwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNuYXAuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5kZWR1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9tb0NvZGVTdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdQcm9tbyBDb2RlIGlzIGludmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc25hcC5kb2NzLmZvckVhY2goY29kZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGVzLmRhdGEoKS5tZXJjaGFudENvZGUgJiYgKGNvZGVzLmRhdGEoKS5zdG9yZXMpLmluZGV4T2YodGhpcy5tZXJjaGFudC5pZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQub3JkZXJfdmFsdWUgPj0gY29kZXMuZGF0YSgpLk1PVikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQuZGVkdWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1Byb21vIENvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmdlZF90bzogJ21lcmNoYW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb2Rlcy5kYXRhKCkudHlwZSA9PSAnUGVyY2VudCcgPyBjb2Rlcy5kYXRhKCkudmFsdWUgKyAnJScgOiAnTGVzcyBQICcgKyBjb2Rlcy5kYXRhKCkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBjb2Rlcy5kYXRhKCkucHJvbW9Db2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWQ6IGNvZGVzLmRhdGEoKS50eXBlID09ICdQZXJjZW50JyA/ICh0aGlzLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQub3JkZXJfdmFsdWUgKiAoY29kZXMuZGF0YSgpLnZhbHVlIC8gMTAwKSkgOiAoY29kZXMuZGF0YSgpLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbW9Db2RlU3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5kZWR1Y3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29kZXMuZGF0YSgpLnR5cGUgPT0gJ1BlcmNlbnQnID8gKHRoaXMuY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5vcmRlcl92YWx1ZSAqIChjb2Rlcy5kYXRhKCkudmFsdWUgLyAxMDApKSA6IChjb2Rlcy5kYXRhKCkudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21vQ29kZVN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0JlbG93IE1pbmltdW0gT3JkZXIgVmFsdWUuIE9yZGVyIGF0bGVhc3QgUCcgKyBjb2Rlcy5kYXRhKCkuTU9WLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZXMuZGF0YSgpLnBsYXRmb3JtQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQub3JkZXJfdmFsdWUgPj0gY29kZXMuZGF0YSgpLk1PVikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQuZGVkdWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1Byb21vIENvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmdlZF90bzogJ3BsYXRmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb2Rlcy5kYXRhKCkudHlwZSA9PSAnUGVyY2VudCcgPyBjb2Rlcy5kYXRhKCkudmFsdWUgKyAnJScgOiAnTGVzcyBQICcgKyBjb2Rlcy5kYXRhKCkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBjb2Rlcy5kYXRhKCkucHJvbW9Db2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWQ6IGNvZGVzLmRhdGEoKS50eXBlID09ICdQZXJjZW50JyA/ICh0aGlzLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQub3JkZXJfdmFsdWUgKiAoY29kZXMuZGF0YSgpLnZhbHVlIC8gMTAwKSkgOiAoY29kZXMuZGF0YSgpLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbW9Db2RlU3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5kZWR1Y3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29kZXMuZGF0YSgpLnR5cGUgPT0gJ1BlcmNlbnQnID8gKHRoaXMuY2hlY2tvdXRQYXlsb2FkLmFtb3VudC5vcmRlcl92YWx1ZSAqIChjb2Rlcy5kYXRhKCkudmFsdWUgLyAxMDApKSA6IChjb2Rlcy5kYXRhKCkudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21vQ29kZVN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0JlbG93IE1pbmltdW0gT3JkZXIgVmFsdWUuIE9yZGVyIGF0bGVhc3QgUCcgKyBjb2Rlcy5kYXRhKCkuTU9WLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbW9Db2RlU3RhdHVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ1Byb21vIENvZGUgaXMgaW52YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBpbml0Q2hlY2tvdXQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBdXRoKSB0aGlzLmF1dGhEaWFnID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSB0aGlzLm1hcFNoZWV0ID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhdHRlbXB0TG9naW4oKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBdXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoRGlhZyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybU9yZGVyKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXV0aCkgdGhpcy5zaGFrZXIoJ25lZWRBdXRoJylcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS50by5hZGRyZXNzID09PSAnJyB8fCB0aGlzLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS50by51bml0ID09PSAnJykgdGhpcy5zaGFrZXIoJ25lZWRBZGRyJylcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS5kYXRlID09PSAnJyB8fCB0aGlzLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS50aW1lID09PSAnJykgdGhpcy5zaGFrZXIoJ25lZWREZWxpJylcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrb3V0UGF5bG9hZC5hbW91bnQubW9uZXkgPCB0aGlzLmdyYW5kdG90YWwgLSB0aGlzLnByb21vQ29kZVN0YXR1cy52YWx1ZSkgdGhpcy5zaGFrZXIoJ25lZWRNb25leScpXG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gdGhpcy4kZmlyZVN0b3JlT2JqKClcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9maXJlc3RvcmUgPSBuZXcgR2VvRmlyZXN0b3JlKGZpcmVzdG9yZSlcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9jb2xsZWN0aW9uID0gZ2VvZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ29yZGVycycpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja291dFBheWxvYWQuYXJlYSA9IHRoaXMuZGYuaWRcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0UGF5bG9hZC50aW1lc3RhbXAgPSB0aGlzLiRnZW5lcmF0ZVRpbWVzdGFtcCh0aGlzLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS5kYXRlLCB0aGlzLmNoZWNrb3V0UGF5bG9hZC5kZWxpdmVyeS50aW1lKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXlsb2FkLnRva2VuID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYXV0aC9nZXRGQ01Ub2tlbiddXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja291dFBheWxvYWQub3JkZXIuYnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Q6IHRoaXMudXNlci5waG9uZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMudXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy51c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB0aWQgPSB0aGlzLmdlbmVyYXRlQm9va2luZ0lkKClcbiAgICAgICAgICAgICAgICBnZW9jb2xsZWN0aW9uLmRvYyh0aWQpLnNldCh0aGlzLmNoZWNrb3V0UGF5bG9hZCkudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRmaXJlQW5hbHl0aWNzLmxvZ0V2ZW50KCdwdXJjaGFzZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkOiB0aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5ncmFuZHRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6ICdQSFAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuY2FydEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjYXJ0L2NsZWFyQ2FydCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2hha2VyKGlkKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoJ3NoYWtlJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZScpXG4gICAgICAgICAgICB9LCAxNTAwKVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZURhdGVzKCkge1xuICAgICAgICAgICAgY29uc3QgdG9kYXkgPSB0aGlzLmFkZERheXMobmV3IERhdGUoKSwgMClcbiAgICAgICAgICAgIGNvbnN0IHRvbW9ycm93ID0gdGhpcy5hZGREYXlzKG5ldyBEYXRlKCksIDEpXG4gICAgICAgICAgICBjb25zdCBuZXh0ZGF5ID0gdGhpcy5hZGREYXlzKG5ldyBEYXRlKCksIDIpXG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUodGhpcy4kZ2V0Tm93KCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgbGV0IGNsb3NlID0gbmV3IERhdGUodGhpcy4kZ2V0Tm93KCkuc3Vic3RyaW5nKDAsIDEwKSArICcgJyArIHRoaXMubWVyY2hhbnQuZGVsaXZlcnkuY2xvc2UpXG4gICAgICAgICAgICBpZiAobm93IDwgY2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVzID0gW3RvZGF5LCB0b21vcnJvdywgbmV4dGRheV1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlcyA9IFt0b21vcnJvdywgbmV4dGRheV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpIDw9IDY7IGkrKykgdGhpcy5kYXRlcy5wdXNoKHRoaXMuYWRkRGF5cyhuZXcgRGF0ZSgpLCBpKSlcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aE5hbWVzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuICAgICAgICAgICAgY29uc3QgZGF5TmFtZXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gWydUb2RheScsICdUb21vcnJvdycsICdBZHZhbmNlZCBPcmRlciddXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICAgICAgcmVzdWx0LnNldERhdGUocmVzdWx0LmdldERhdGUoKSArIGRheXMpXG4gICAgICAgICAgICBpZiAoZGF5cyA9PT0gMikge1xuICAgICAgICAgICAgICAgIGxhYmVsLnB1c2goZGF5TmFtZXNbcmVzdWx0LmdldERheSgpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkZWxpdmVyeV90aW1lID0gW11cbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSh0aGlzLiRnZXROb3coKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICBsZXQgY2xvc2UgPSBuZXcgRGF0ZSh0aGlzLiRnZXROb3coKS5zdWJzdHJpbmcoMCwgMTApICsgJyAnICsgdGhpcy5tZXJjaGFudC5kZWxpdmVyeS5jbG9zZSlcbiAgICAgICAgICAgIGxldCBvcGVuID0gbmV3IERhdGUodGhpcy4kZ2V0Tm93KCkuc3Vic3RyaW5nKDAsIDEwKSArICcgJyArIHRoaXMubWVyY2hhbnQuZGVsaXZlcnkub3BlbilcbiAgICAgICAgICAgIGlmIChkYXlzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA8IGNsb3NlICYmIG5vdyA+IG9wZW4pIGRlbGl2ZXJ5X3RpbWUgPSB0aGlzLiR0aW1lUmFuZ2UodGhpcy4kZm9ybWF0QU1QTShuZXcgRGF0ZSgpKSwgdGhpcy5tZXJjaGFudC5kZWxpdmVyeS5jbG9zZSwgNDUpXG4gICAgICAgICAgICAgICAgZWxzZSBkZWxpdmVyeV90aW1lID0gdGhpcy4kdGltZVJhbmdlKHRoaXMubWVyY2hhbnQuZGVsaXZlcnkub3BlbiwgdGhpcy5tZXJjaGFudC5kZWxpdmVyeS5jbG9zZSwgNDUpXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfdGltZS51bnNoaWZ0KCdBU0FQJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfdGltZSA9IHRoaXMuJHRpbWVSYW5nZSh0aGlzLm1lcmNoYW50LmRlbGl2ZXJ5Lm9wZW4sIHRoaXMubWVyY2hhbnQuZGVsaXZlcnkuY2xvc2UsIDQ1KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRlOiByZXN1bHQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICAgICAgICAgICAgbmFtZTogbW9udGhOYW1lc1tyZXN1bHQuZ2V0TW9udGgoKV0sXG4gICAgICAgICAgICAgICAgZGF5OiByZXN1bHQuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgICAgIGRheV9uYW1lOiBkYXlOYW1lc1tyZXN1bHQuZ2V0RGF5KCldLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXlzIDwgMiA/IGxhYmVsW2RheXNdIDogbGFiZWxbMl0sXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlfdGltZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmVDaGVja291dCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLiRyZWZzLmdNYXAubWFwLmdldENlbnRlcigpXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21hcC9zZXRMb2NhdGlvbicsIHtcbiAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCgpLFxuICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWRtaW4vZ2V0QXJlYScsIHtcbiAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCgpLFxuICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nKClcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiAwLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWVyY2hhbnQubG9jYXRpb24uaGFzT3duUHJvcGVydHkoJ0FjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2wgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHRoaXMubWVyY2hhbnQubG9jYXRpb24uUmMsXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHRoaXMubWVyY2hhbnQubG9jYXRpb24uQWNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXJjaGFudC5sb2NhdGlvbi5oYXNPd25Qcm9wZXJ0eSgnX2xhdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiB0aGlzLm1lcmNoYW50LmxvY2F0aW9uLl9sYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHRoaXMubWVyY2hhbnQubG9jYXRpb24uX2xvbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXJjaGFudC5sb2NhdGlvbi5oYXNPd25Qcm9wZXJ0eSgnbGF0aXR1ZGUnKSkge1xuICAgICAgICAgICAgICAgICAgICBzbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogdGhpcy5tZXJjaGFudC5sb2NhdGlvbi5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogdGhpcy5tZXJjaGFudC5sb2NhdGlvbi5sb25naXR1ZGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQoKSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmcoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUZlZXMoZGwsIHNsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVCb29raW5nSWQoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFycyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJ09SLSdcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSA2OyBpID4gMDsgLS1pKSByZXN1bHQgKz0gY2hhcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKV1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfSxcbiAgICAgICAgY2FsY3VsYXRlRmVlcyhkbCwgc2wpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRsLCBzbClcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLiRnZXQoJy9kaXN0YW5jZS8nLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbnM6IHNsLmxhdCArICcsJyArIHNsLmxuZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25zOiBkbC5sYXQgKyAnLCcgKyBkbC5sbmcsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0FJemFTeURYLWF0b0xtNm5RcE1nUV9HWUhJbzFraXNjQWU1dHhYYydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBwYXJzZUZsb2F0KHRoaXMuZGYuZmVlcy5mb29kLmRpc3RhbmNlX3BsYXRmb3JtKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZGVyID0gcGFyc2VGbG9hdCh0aGlzLmRmLmZlZXMuZm9vZC5kaXN0YW5jZV9yaWRlcilcbiAgICAgICAgICAgICAgICBjb25zdCBzY3YgPSBwYXJzZUZsb2F0KHRoaXMuZGYuZmVlcy5mb29kLnNjX21pbl92YWx1ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBtZCA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QubWluX2Rpc3RhbmNlKVxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbl9kZiA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QubWluX2RmKVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkX3JpZGVyX2ZlZSA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QucmlkZXJfZml4ZWRfZmVlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZC5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlLnZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IGRmID0gMFxuICAgICAgICAgICAgICAgIGxldCBkcyA9IGRpc3RhbmNlIC8gMTAwMFxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSAvIDEwMDAgPCBtZCkge1xuICAgICAgICAgICAgICAgICAgICBkZiA9IG1pbl9kZlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtdWx0aXBsaWVyID0gZGlzdGFuY2UgLyAxMDAwIC0gbWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxpZXIgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSBNYXRoLmZsb29yKG11bHRpcGxpZXIpICsgMVxuICAgICAgICAgICAgICAgICAgICBkZiA9IChyaWRlciArIHBsYXRmb3JtKSAqIG11bHRpcGxpZXIgKyBtaW5fZGZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHMgPSBNYXRoLmZsb29yKGRzKSArIDFcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZV9hY3R1YWwgPSBwYXJzZUZsb2F0KGQucm93c1swXS5lbGVtZW50c1swXS5kaXN0YW5jZS52YWx1ZSAvIDEwMDApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICBsZXQgcmlkZXJfZGYgPSAwXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlX2FjdHVhbCA8PSBtZCkgcmlkZXJfZGYgPSBmaXhlZF9yaWRlcl9mZWVcbiAgICAgICAgICAgICAgICBlbHNlIHJpZGVyX2RmID0gZml4ZWRfcmlkZXJfZmVlICsgKChkaXN0YW5jZV9hY3R1YWwgLSBtZCkgKiByaWRlcilcbiAgICAgICAgICAgICAgICByaWRlcl9kZiA9IE1hdGguZmxvb3IocmlkZXJfZGYpXG4gICAgICAgICAgICAgICAgbGV0IHBsYXRmb3JtX2RmID0gTWF0aC5mbG9vcihkZiAtIHJpZGVyX2RmKVxuICAgICAgICAgICAgICAgIGxldCBzYyA9IE1hdGguZmxvb3IocGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMubWVyY2hhbnQucmF0ZXMuc2MgKiB0aGlzLmdyYW5kdG90YWwpIC8gMTAwKS50b0ZpeGVkKDIpKVxuICAgICAgICAgICAgICAgIGlmIChzYyA8IHNjdikgc2MgPSBzY3ZcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodGhpcy5ncmFuZHRvdGFsKSArIHJpZGVyX2RmICsgcGxhdGZvcm1fZGYgKyBzY1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtX2RmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZGVyOiByaWRlcl9kZlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kdG90YWw6IHRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl92YWx1ZTogdGhpcy5ncmFuZHRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrdXA6IHNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiBNYXRoLmZsb29yKHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm1lcmNoYW50LnJhdGVzLmNyICogdGhpcy5ncmFuZHRvdGFsKSAvIDEwMCkudG9GaXhlZCgyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXA6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmlkZXI6ICd1bmFzc2lnbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IG5ldyB0aGlzLiRmaXJlU3RvcmVPYmouR2VvUG9pbnQoZGwubGF0LCBkbC5sbmcpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdwbGFjZWQnLFxuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogZGlzdGFuY2VfYWN0dWFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkOiBkc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkLm9yaWdpbl9hZGRyZXNzZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBzbC5sYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogc2wubG5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZGVyX25vdGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGQuZGVzdGluYXRpb25fYWRkcmVzc2VzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogZGwubGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IGRsLmxuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0aGlzLmNhcnRJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyY2hhbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuY2g6IHRoaXMubWVyY2hhbnQuYnJhbmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLm1lcmNoYW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IHRoaXMubWVyY2hhbnQubG9nbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm1lcmNoYW50LmJ1c2luZXNzX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoZWNrb3V0UGF5bG9hZClcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja291dFBheWxvYWQub3JkZXIuYnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0OiB0aGlzLnVzZXIucGhvbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy51c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy51c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kZmlyZUFuYWx5dGljcy5sb2dFdmVudCgnYmVnaW5fY2hlY2tvdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdyYW5kdG90YWwsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnUEhQJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuY2FydEl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMubWFwU2hlZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaXNIaWRlID0gdHJ1ZVxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgIHRoaXMubWFwU2hlZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaXNIaWRlID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZUFkZE9ucyhpdGVtLCBwcmljZSkge1xuICAgICAgICAgICAgY29uc3QgYWRzID0gW11cbiAgICAgICAgICAgIGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyLCBsb3dlciA9IGZhbHNlKSA9PiAobG93ZXIgPyBzdHIudG9Mb3dlckNhc2UoKSA6IHN0cikucmVwbGFjZSgvKD86XnxcXHN8W1wiJyhbe10pK1xcUy9nLCAobWF0Y2gpID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICBhZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0Jhc2UgUHJpY2UnLFxuICAgICAgICAgICAgICAgIHZhbHVlczogJycsXG4gICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgdG90YWwgPSBwYXJzZUZsb2F0KHByaWNlKVxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaXRlbSkubWFwKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICBhZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXBpdGFsaXplKGtleSksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdmFsLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwYXJzZUZsb2F0KGkucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBhZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBpLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGkucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHBhcnNlRmxvYXQodmFsLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICBhZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXBpdGFsaXplKGtleSksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHZhbC5wcmljZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiAnVG90YWwnLFxuICAgICAgICAgICAgICAgIHByaWNlOiBwYXJzZUZsb2F0KHRvdGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBhZHNcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQ2FydChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NhcnQvcmVtb3ZlJywgaXRlbSlcbiAgICAgICAgICAgIHRoaXMuc25hY2tiYXIgPSB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNlbnRlckNoYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy4kcmVmcy5nTWFwLm1hcC5nZXRDZW50ZXIoKVxuICAgICAgICAgICAgdGhpcy4kcmVmcy5nbWFwbWFya2VyLm1hcmtlci5zZXRQb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQoKSxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlVG90YWwoaXRlbSkge1xuICAgICAgICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIGl0ZW0uaW5mby5iYXNlX3ByaWNlICogaXRlbS5xdHlcbiAgICAgICAgICAgIGNvbnN0IGFkZG9ucyA9IE9iamVjdC52YWx1ZXMoaXRlbS5hZGRfb25zKVxuICAgICAgICAgICAgYWRkb25zLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgICAgICAgICBhLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBiLnByaWNlICogaXRlbS5xdHlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgYS5wcmljZSAqIGl0ZW0ucXR5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFxuICAgICAgICB9XG4gICAgfVxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgLnNoYWtlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkFsZXJ0LnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWU2hlZXQgZnJvbSAnLi4vVlNoZWV0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkJ0biBmcm9tICcuLi9WQnRuJ1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBUb2dnbGVhYmxlIGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IFRyYW5zaXRpb25hYmxlIGZyb20gJy4uLy4uL21peGlucy90cmFuc2l0aW9uYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgYnJlYWtpbmcgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZURhdGEgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZS90eXBlcydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgVlNoZWV0LFxuICBUb2dnbGVhYmxlLFxuICBUcmFuc2l0aW9uYWJsZVxuKS5leHRlbmQoe1xuICBuYW1lOiAndi1hbGVydCcsXG5cbiAgcHJvcHM6IHtcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvciAodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAncmlnaHQnLFxuICAgICAgICAgICdib3R0b20nLFxuICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgXS5pbmNsdWRlcyh2YWwpXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2xvc2VMYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyR2dWV0aWZ5LmNsb3NlJyxcbiAgICB9LFxuICAgIGNvbG9yZWRCb3JkZXI6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZGlzbWlzc2libGU6IEJvb2xlYW4sXG4gICAgY2xvc2VJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNhbmNlbCcsXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgdmFsaWRhdG9yICh2YWw6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHZhbCA9PT0gZmFsc2VcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBwcm9taW5lbnQ6IEJvb2xlYW4sXG4gICAgdGV4dDogQm9vbGVhbixcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3IgKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgJ2luZm8nLFxuICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAgICd3YXJuaW5nJyxcbiAgICAgICAgXS5pbmNsdWRlcyh2YWwpXG4gICAgICB9LFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBfX2NhY2hlZEJvcmRlciAoKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGlmICghdGhpcy5ib3JkZXIpIHJldHVybiBudWxsXG5cbiAgICAgIGxldCBkYXRhOiBWTm9kZURhdGEgPSB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1hbGVydF9fYm9yZGVyJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBbYHYtYWxlcnRfX2JvcmRlci0tJHt0aGlzLmJvcmRlcn1gXTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29sb3JlZEJvcmRlcikge1xuICAgICAgICBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb21wdXRlZENvbG9yLCBkYXRhKVxuICAgICAgICBkYXRhLmNsYXNzWyd2LWFsZXJ0X19ib3JkZXItLWhhcy1jb2xvciddID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0YSlcbiAgICB9LFxuICAgIF9fY2FjaGVkRGlzbWlzc2libGUgKCk6IFZOb2RlIHwgbnVsbCB7XG4gICAgICBpZiAoIXRoaXMuZGlzbWlzc2libGUpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5pY29uQ29sb3JcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkJ0biwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtYWxlcnRfX2Rpc21pc3NpYmxlJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcixcbiAgICAgICAgICBpY29uOiB0cnVlLFxuICAgICAgICAgIHNtYWxsOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy4kdnVldGlmeS5sYW5nLnQodGhpcy5jbG9zZUxhYmVsKSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKCkgPT4gKHRoaXMuaXNBY3RpdmUgPSBmYWxzZSksXG4gICAgICAgIH0sXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgICBwcm9wczogeyBjb2xvciB9LFxuICAgICAgICB9LCB0aGlzLmNsb3NlSWNvbiksXG4gICAgICBdKVxuICAgIH0sXG4gICAgX19jYWNoZWRJY29uICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgaWYgKCF0aGlzLmNvbXB1dGVkSWNvbikgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWFsZXJ0X19pY29uJyxcbiAgICAgICAgcHJvcHM6IHsgY29sb3I6IHRoaXMuaWNvbkNvbG9yIH0sXG4gICAgICB9LCB0aGlzLmNvbXB1dGVkSWNvbilcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBjbGFzc2VzOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHtcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1hbGVydC0tYm9yZGVyJzogQm9vbGVhbih0aGlzLmJvcmRlciksXG4gICAgICAgICd2LWFsZXJ0LS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgICd2LWFsZXJ0LS1vdXRsaW5lZCc6IHRoaXMub3V0bGluZWQsXG4gICAgICAgICd2LWFsZXJ0LS1wcm9taW5lbnQnOiB0aGlzLnByb21pbmVudCxcbiAgICAgICAgJ3YtYWxlcnQtLXRleHQnOiB0aGlzLnRleHQsXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJvcmRlcikge1xuICAgICAgICBjbGFzc2VzW2B2LWFsZXJ0LS1ib3JkZXItJHt0aGlzLmJvcmRlcn1gXSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzZXNcbiAgICB9LFxuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jb2xvciB8fCB0aGlzLnR5cGVcbiAgICB9LFxuICAgIGNvbXB1dGVkSWNvbiAoKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5pY29uID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAodHlwZW9mIHRoaXMuaWNvbiA9PT0gJ3N0cmluZycgJiYgdGhpcy5pY29uKSByZXR1cm4gdGhpcy5pY29uXG4gICAgICBpZiAoIVsnZXJyb3InLCAnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnXS5pbmNsdWRlcyh0aGlzLnR5cGUpKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIGAkJHt0aGlzLnR5cGV9YFxuICAgIH0sXG4gICAgaGFzQ29sb3JlZEljb24gKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5oYXNUZXh0IHx8XG4gICAgICAgIChCb29sZWFuKHRoaXMuYm9yZGVyKSAmJiB0aGlzLmNvbG9yZWRCb3JkZXIpXG4gICAgICApXG4gICAgfSxcbiAgICBoYXNUZXh0ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQgfHwgdGhpcy5vdXRsaW5lZFxuICAgIH0sXG4gICAgaWNvbkNvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQ29sb3JlZEljb24gPyB0aGlzLmNvbXB1dGVkQ29sb3IgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGlzRGFyayAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudHlwZSAmJlxuICAgICAgICAhdGhpcy5jb2xvcmVkQm9yZGVyICYmXG4gICAgICAgICF0aGlzLm91dGxpbmVkXG4gICAgICApIHJldHVybiB0cnVlXG5cbiAgICAgIHJldHVybiBUaGVtZWFibGUub3B0aW9ucy5jb21wdXRlZC5pc0RhcmsuY2FsbCh0aGlzKVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ291dGxpbmUnKSkge1xuICAgICAgYnJlYWtpbmcoJ291dGxpbmUnLCAnb3V0bGluZWQnLCB0aGlzKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuV3JhcHBlciAoKTogVk5vZGUge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXG4gICAgICAgIHRoaXMuJHNsb3RzLnByZXBlbmQgfHwgdGhpcy5fX2NhY2hlZEljb24sXG4gICAgICAgIHRoaXMuZ2VuQ29udGVudCgpLFxuICAgICAgICB0aGlzLl9fY2FjaGVkQm9yZGVyLFxuICAgICAgICB0aGlzLiRzbG90cy5hcHBlbmQsXG4gICAgICAgIHRoaXMuJHNjb3BlZFNsb3RzLmNsb3NlXG4gICAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5jbG9zZSh7IHRvZ2dsZTogdGhpcy50b2dnbGUgfSlcbiAgICAgICAgICA6IHRoaXMuX19jYWNoZWREaXNtaXNzaWJsZSxcbiAgICAgIF1cblxuICAgICAgY29uc3QgZGF0YTogVk5vZGVEYXRhID0ge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtYWxlcnRfX3dyYXBwZXInLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0YSwgY2hpbGRyZW4pXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtYWxlcnRfX2NvbnRlbnQnLFxuICAgICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgICB9LFxuICAgIGdlbkFsZXJ0ICgpOiBWTm9kZSB7XG4gICAgICBsZXQgZGF0YTogVk5vZGVEYXRhID0ge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtYWxlcnQnLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGU6ICdhbGVydCcsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB0aGlzLmxpc3RlbmVycyQsXG4gICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAnc2hvdycsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH1dLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY29sb3JlZEJvcmRlcikge1xuICAgICAgICBjb25zdCBzZXRDb2xvciA9IHRoaXMuaGFzVGV4dCA/IHRoaXMuc2V0VGV4dENvbG9yIDogdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgZGF0YSA9IHNldENvbG9yKHRoaXMuY29tcHV0ZWRDb2xvciwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRhdGEsIFt0aGlzLmdlbldyYXBwZXIoKV0pXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHRvZ2dsZSAoKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmVcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCByZW5kZXIgPSB0aGlzLmdlbkFsZXJ0KClcblxuICAgIGlmICghdGhpcy50cmFuc2l0aW9uKSByZXR1cm4gcmVuZGVyXG5cbiAgICByZXR1cm4gaCgndHJhbnNpdGlvbicsIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgICAgb3JpZ2luOiB0aGlzLm9yaWdpbixcbiAgICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgfSxcbiAgICB9LCBbcmVuZGVyXSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vVlRvb2x0aXAuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQWN0aXZhdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2FjdGl2YXRhYmxlJ1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IERlbGF5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZGVsYXlhYmxlJ1xuaW1wb3J0IERlcGVuZGVudCBmcm9tICcuLi8uLi9taXhpbnMvZGVwZW5kZW50J1xuaW1wb3J0IERldGFjaGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2RldGFjaGFibGUnXG5pbXBvcnQgTWVudWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL21lbnVhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGtleUNvZGVzLCBnZXRTbG90VHlwZSB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhDb2xvcmFibGUsIERlbGF5YWJsZSwgRGVwZW5kZW50LCBEZXRhY2hhYmxlLCBNZW51YWJsZSwgVG9nZ2xlYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdG9vbHRpcCcsXG5cbiAgcHJvcHM6IHtcbiAgICBjbG9zZURlbGF5OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGZpeGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5EZWxheToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBvcGVuT25Ib3Zlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzcGFuJyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IFN0cmluZyxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGNhbGN1bGF0ZWRNaW5XaWR0aDogMCxcbiAgICBjbG9zZURlcGVuZGVudHM6IGZhbHNlLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNhbGN1bGF0ZWRMZWZ0ICgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgeyBhY3RpdmF0b3IsIGNvbnRlbnQgfSA9IHRoaXMuZGltZW5zaW9uc1xuICAgICAgY29uc3QgdW5rbm93biA9ICF0aGlzLmJvdHRvbSAmJiAhdGhpcy5sZWZ0ICYmICF0aGlzLnRvcCAmJiAhdGhpcy5yaWdodFxuICAgICAgY29uc3QgYWN0aXZhdG9yTGVmdCA9IHRoaXMuYXR0YWNoICE9PSBmYWxzZSA/IGFjdGl2YXRvci5vZmZzZXRMZWZ0IDogYWN0aXZhdG9yLmxlZnRcbiAgICAgIGxldCBsZWZ0ID0gMFxuXG4gICAgICBpZiAodGhpcy50b3AgfHwgdGhpcy5ib3R0b20gfHwgdW5rbm93bikge1xuICAgICAgICBsZWZ0ID0gKFxuICAgICAgICAgIGFjdGl2YXRvckxlZnQgK1xuICAgICAgICAgIChhY3RpdmF0b3Iud2lkdGggLyAyKSAtXG4gICAgICAgICAgKGNvbnRlbnQud2lkdGggLyAyKVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdCB8fCB0aGlzLnJpZ2h0KSB7XG4gICAgICAgIGxlZnQgPSAoXG4gICAgICAgICAgYWN0aXZhdG9yTGVmdCArXG4gICAgICAgICAgKHRoaXMucmlnaHQgPyBhY3RpdmF0b3Iud2lkdGggOiAtY29udGVudC53aWR0aCkgK1xuICAgICAgICAgICh0aGlzLnJpZ2h0ID8gMTAgOiAtMTApXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubnVkZ2VMZWZ0KSBsZWZ0IC09IHBhcnNlSW50KHRoaXMubnVkZ2VMZWZ0KVxuICAgICAgaWYgKHRoaXMubnVkZ2VSaWdodCkgbGVmdCArPSBwYXJzZUludCh0aGlzLm51ZGdlUmlnaHQpXG5cbiAgICAgIHJldHVybiBgJHt0aGlzLmNhbGNYT3ZlcmZsb3cobGVmdCwgdGhpcy5kaW1lbnNpb25zLmNvbnRlbnQud2lkdGgpfXB4YFxuICAgIH0sXG4gICAgY2FsY3VsYXRlZFRvcCAoKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHsgYWN0aXZhdG9yLCBjb250ZW50IH0gPSB0aGlzLmRpbWVuc2lvbnNcbiAgICAgIGNvbnN0IGFjdGl2YXRvclRvcCA9IHRoaXMuYXR0YWNoICE9PSBmYWxzZSA/IGFjdGl2YXRvci5vZmZzZXRUb3AgOiBhY3RpdmF0b3IudG9wXG4gICAgICBsZXQgdG9wID0gMFxuXG4gICAgICBpZiAodGhpcy50b3AgfHwgdGhpcy5ib3R0b20pIHtcbiAgICAgICAgdG9wID0gKFxuICAgICAgICAgIGFjdGl2YXRvclRvcCArXG4gICAgICAgICAgKHRoaXMuYm90dG9tID8gYWN0aXZhdG9yLmhlaWdodCA6IC1jb250ZW50LmhlaWdodCkgK1xuICAgICAgICAgICh0aGlzLmJvdHRvbSA/IDEwIDogLTEwKVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdCB8fCB0aGlzLnJpZ2h0KSB7XG4gICAgICAgIHRvcCA9IChcbiAgICAgICAgICBhY3RpdmF0b3JUb3AgK1xuICAgICAgICAgIChhY3RpdmF0b3IuaGVpZ2h0IC8gMikgLVxuICAgICAgICAgIChjb250ZW50LmhlaWdodCAvIDIpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubnVkZ2VUb3ApIHRvcCAtPSBwYXJzZUludCh0aGlzLm51ZGdlVG9wKVxuICAgICAgaWYgKHRoaXMubnVkZ2VCb3R0b20pIHRvcCArPSBwYXJzZUludCh0aGlzLm51ZGdlQm90dG9tKVxuXG4gICAgICByZXR1cm4gYCR7dGhpcy5jYWxjWU92ZXJmbG93KHRvcCArIHRoaXMucGFnZVlPZmZzZXQpfXB4YFxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXRvb2x0aXAtLXRvcCc6IHRoaXMudG9wLFxuICAgICAgICAndi10b29sdGlwLS1yaWdodCc6IHRoaXMucmlnaHQsXG4gICAgICAgICd2LXRvb2x0aXAtLWJvdHRvbSc6IHRoaXMuYm90dG9tLFxuICAgICAgICAndi10b29sdGlwLS1sZWZ0JzogdGhpcy5sZWZ0LFxuICAgICAgICAndi10b29sdGlwLS1hdHRhY2hlZCc6XG4gICAgICAgICAgdGhpcy5hdHRhY2ggPT09ICcnIHx8XG4gICAgICAgICAgdGhpcy5hdHRhY2ggPT09IHRydWUgfHxcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gJ2F0dGFjaCcsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zaXRpb24gKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy50cmFuc2l0aW9uKSByZXR1cm4gdGhpcy50cmFuc2l0aW9uXG5cbiAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gJ3NjYWxlLXRyYW5zaXRpb24nIDogJ2ZhZGUtdHJhbnNpdGlvbidcbiAgICB9LFxuICAgIG9mZnNldFkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMudG9wIHx8IHRoaXMuYm90dG9tXG4gICAgfSxcbiAgICBvZmZzZXRYICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZnQgfHwgdGhpcy5yaWdodFxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogdGhpcy5jYWxjdWxhdGVkTGVmdCxcbiAgICAgICAgbWF4V2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5tYXhXaWR0aCksXG4gICAgICAgIG1pbldpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMubWluV2lkdGgpLFxuICAgICAgICBvcGFjaXR5OiB0aGlzLmlzQWN0aXZlID8gMC45IDogMCxcbiAgICAgICAgdG9wOiB0aGlzLmNhbGN1bGF0ZWRUb3AsXG4gICAgICAgIHpJbmRleDogdGhpcy56SW5kZXggfHwgdGhpcy5hY3RpdmVaSW5kZXgsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSAmJiB0aGlzLmNhbGxBY3RpdmF0ZSgpXG4gICAgfSlcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAoZ2V0U2xvdFR5cGUodGhpcywgJ2FjdGl2YXRvcicsIHRydWUpID09PSAndi1zbG90Jykge1xuICAgICAgY29uc29sZUVycm9yKGB2LXRvb2x0aXAncyBhY3RpdmF0b3Igc2xvdCBtdXN0IGJlIGJvdW5kLCB0cnkgJzx0ZW1wbGF0ZSAjYWN0aXZhdG9yPVwiZGF0YVwiPjx2LWJ0biB2LW9uPVwiZGF0YS5vbj4nYCwgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucyBvZiBtZW51XG4gICAgICAvLyBhbmQgaXRzIGFjdGl2YXRvclxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICAgIC8vIFN0YXJ0IHRoZSB0cmFuc2l0aW9uXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGFydFRyYW5zaXRpb24pXG4gICAgfSxcbiAgICBkZWFjdGl2YXRlICgpIHtcbiAgICAgIHRoaXMucnVuRGVsYXkoJ2Nsb3NlJylcbiAgICB9LFxuICAgIGdlbkFjdGl2YXRvckxpc3RlbmVycyAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBBY3RpdmF0YWJsZS5vcHRpb25zLm1ldGhvZHMuZ2VuQWN0aXZhdG9yTGlzdGVuZXJzLmNhbGwodGhpcylcblxuICAgICAgbGlzdGVuZXJzLmZvY3VzID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0QWN0aXZhdG9yKGUpXG4gICAgICAgIHRoaXMucnVuRGVsYXkoJ29wZW4nKVxuICAgICAgfVxuICAgICAgbGlzdGVuZXJzLmJsdXIgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5nZXRBY3RpdmF0b3IoZSlcbiAgICAgICAgdGhpcy5ydW5EZWxheSgnY2xvc2UnKVxuICAgICAgfVxuICAgICAgbGlzdGVuZXJzLmtleWRvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MpIHtcbiAgICAgICAgICB0aGlzLmdldEFjdGl2YXRvcihlKVxuICAgICAgICAgIHRoaXMucnVuRGVsYXkoJ2Nsb3NlJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uICgpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdlbkNvbnRlbnQoKVxuXG4gICAgICBpZiAoIXRoaXMuY29tcHV0ZWRUcmFuc2l0aW9uKSByZXR1cm4gY29udGVudFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sIFtjb250ZW50XSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2x0aXBfX2NvbnRlbnQnLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBbdGhpcy5jb250ZW50Q2xhc3NdOiB0cnVlLFxuICAgICAgICAgICAgbWVudWFibGVfX2NvbnRlbnRfX2FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgICAgICd2LXRvb2x0aXBfX2NvbnRlbnQtLWZpeGVkJzogdGhpcy5hY3RpdmF0b3JGaXhlZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgICBhdHRyczogdGhpcy5nZXRTY29wZUlkQXR0cnMoKSxcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaXNDb250ZW50QWN0aXZlLFxuICAgICAgICAgIH1dLFxuICAgICAgICAgIHJlZjogJ2NvbnRlbnQnLFxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5nZXRDb250ZW50U2xvdCgpXG4gICAgICApXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgodGhpcy50YWcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sdGlwJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgfSwgW1xuICAgICAgdGhpcy5zaG93TGF6eUNvbnRlbnQoKCkgPT4gW3RoaXMuZ2VuVHJhbnNpdGlvbigpXSksXG4gICAgICB0aGlzLmdlbkFjdGl2YXRvcigpLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGE1YjFiOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjBhNWIxYjkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpXG5pZiAoc3R5bGUwLl9faW5qZWN0X18pIHN0eWxlMC5fX2luamVjdF9fKGNvbnRleHQpXG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBcIjIwYTViMWI5XCIsXG4gIFwiM2UyYzBmYThcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHNcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQWxlcnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBbGVydCc7XG5pbXBvcnQgeyBWQXBwQmFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXBwQmFyJztcbmltcG9ydCB7IFZBdmF0YXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBdmF0YXInO1xuaW1wb3J0IHsgVkJvdHRvbVNoZWV0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQm90dG9tU2hlZXQnO1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRBY3Rpb25zIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRleHQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZDb250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ29udGVudCc7XG5pbXBvcnQgeyBWRGl2aWRlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRpdmlkZXInO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSW1nJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUFjdGlvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQWN0aW9uVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Db250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Hcm91cCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbVRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWUm93IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWU2VsZWN0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU2VsZWN0JztcbmltcG9ydCB7IFZTaGVldCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlNoZWV0JztcbmltcG9ydCB7IFZTaW1wbGVUYWJsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkRhdGFUYWJsZSc7XG5pbXBvcnQgeyBWU25hY2tiYXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTbmFja2Jhcic7XG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dEZpZWxkJztcbmltcG9ydCB7IFZUZXh0YXJlYSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRleHRhcmVhJztcbmltcG9ydCB7IFZUb29sYmFyVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUb29sYmFyJztcbmltcG9ydCB7IFZUb29sdGlwIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVG9vbHRpcCc7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQWxlcnQsVkFwcEJhcixWQXZhdGFyLFZCb3R0b21TaGVldCxWQnRuLFZDYXJkLFZDYXJkQWN0aW9ucyxWQ2FyZFRleHQsVkNhcmRUaXRsZSxWQ29udGFpbmVyLFZDb250ZW50LFZEaXZpZGVyLFZGbGV4LFZJY29uLFZJbWcsVkxheW91dCxWTGlzdCxWTGlzdEl0ZW0sVkxpc3RJdGVtQWN0aW9uLFZMaXN0SXRlbUFjdGlvblRleHQsVkxpc3RJdGVtQXZhdGFyLFZMaXN0SXRlbUNvbnRlbnQsVkxpc3RJdGVtR3JvdXAsVkxpc3RJdGVtSWNvbixWTGlzdEl0ZW1TdWJ0aXRsZSxWTGlzdEl0ZW1UaXRsZSxWUm93LFZTZWxlY3QsVlNoZWV0LFZTaW1wbGVUYWJsZSxWU25hY2tiYXIsVlNwYWNlcixWVGV4dEZpZWxkLFZUZXh0YXJlYSxWVG9vbGJhclRpdGxlLFZUb29sdGlwfSlcbiIsImltcG9ydCBWQnRuIGZyb20gJy4vVkJ0bidcblxuZXhwb3J0IHsgVkJ0biB9XG5leHBvcnQgZGVmYXVsdCBWQnRuXG4iXSwic291cmNlUm9vdCI6IiJ9