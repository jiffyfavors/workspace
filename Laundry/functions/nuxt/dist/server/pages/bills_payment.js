exports.ids = [3];
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/bills_payment.vue?vue&type=template&id=29df081c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bills-payment')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/bills_payment.vue?vue&type=template&id=29df081c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BillsPayment.vue?vue&type=template&id=ada0a92e&
var BillsPaymentvue_type_template_id_ada0a92e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"blue"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('nav-drawer',{model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}}),_vm._v(" "),_c('v-card',{staticClass:"cardhyt mb-10",attrs:{"flat":"","width":"100%"}},[_c('v-app-bar',{attrs:{"color":"rgba(100,115,201)","app":"","dark":"","flat":""},scopedSlots:_vm._u([{key:"extension",fn:function(){return [_c('client-only',[(!_vm.isHide)?_c('v-tabs',{attrs:{"slider-color":"white","dense":"","grow":"","center-active":"","centered":"","show-arrows":""},model:{value:(_vm.currentItem),callback:function ($$v) {_vm.currentItem=$$v},expression:"currentItem"}},[_c('v-tab',{key:"all",attrs:{"href":"#tab-all"}},[_vm._v(" All ")]),_vm._v(" "),_vm._l((_vm.tags),function(item){return _c('v-tab',{key:item.name,attrs:{"href":'#tab-' + item.name}},[_vm._v(" "+_vm._s(item.name)+" ")])})],2):_vm._e()],1)]},proxy:true}])},[(!_vm.isSearch)?_c('v-app-bar-nav-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer=!_vm.drawer}}}):_vm._e(),_vm._v(" "),(!_vm.isSearch)?_c('v-avatar',{staticClass:"mr-2",attrs:{"rounded":"","size":"35"}},[_c('v-img',{attrs:{"src":"/icon.png"}})],1):_vm._e(),_vm._v(" "),(!_vm.isSearch)?_c('v-toolbar-title',[_vm._v(" Jiffy Favors ")]):_vm._e(),_vm._v(" "),(!_vm.isSearch)?_c('v-spacer'):_vm._e(),_vm._v(" "),_c('client-only',[(_vm.isSearch)?_c('v-autocomplete',{attrs:{"items":_vm.getRestos('all'),"item-key":"url","autofocus":"","prepend-inner-icon":"mdi-magnify","solo":"","hide-details":"","hide-selected":"","dense":"","light":"","label":"Select","item-value":"id","item-text":"business_name"},on:{"blur":function($event){_vm.isSearch = false}},scopedSlots:_vm._u([{key:"item",fn:function(data){return [_c('v-list',{attrs:{"dense":""}},[_c('v-list-item-group',[_c('v-list-item',{attrs:{"to":'/bills_payment/' + data.item.url}},[_c('v-list-item-avatar',[_c('v-img',{attrs:{"src":data.item.logo}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(data.item.business_name)+" ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" "+_vm._s(data.item.branch)+" ")])],1)],1)],1)],1)]}}],null,false,3277591188)}):_vm._e(),_vm._v(" "),(!_vm.isSearch)?_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.isSearch = true}}},[_c('v-icon',[_vm._v("mdi-magnify")])],1):_vm._e(),_vm._v(" "),(_vm.cartSize > 0)?_c('v-btn',{attrs:{"icon":"","to":"/cart"}},[_c('v-badge',{attrs:{"color":"red"},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_vm._v(" "+_vm._s(_vm.cartSize)+" ")]},proxy:true}],null,false,1285045876)},[_vm._v(" "),_c('v-icon',{attrs:{"color":"white","dense":""}},[_vm._v(" mdi-cart-outline ")])],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('v-sheet',{staticClass:"overflow-y-auto fill-height",attrs:{"id":"scrolling-techniques-3"}},[_c('v-container',{attrs:{"fluid":""}},[(_vm.isHide)?_c('v-content',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},[_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":""}},[_c('div',{staticClass:"mapcontainer"},[_c('GMap',{ref:"gMap",attrs:{"id":"gmap","center":_vm.mylocation,"options":{
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: true,
            zoomControl: true,
            gestureHandling: 'greedy'
          },"zoom":15},on:{"center_changed":_vm.centerChange}},[_c('GMapMarker',{ref:"gmapmarker",attrs:{"position":_vm.mylocation,"options":{ icon: _vm.selectedmarker }}})],1)],1),_vm._v(" "),_c('v-btn',{staticClass:"white--text mt-5",attrs:{"color":"blue darken-1","text":"","block":"","outlined":""},on:{"click":_vm.updateMapLocation}},[_vm._v(" Find Biller ")])],1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.isHide)?_c('v-content',[_c('client-only',[_c('v-tabs-items',{model:{value:(_vm.currentItem),callback:function ($$v) {_vm.currentItem=$$v},expression:"currentItem"}},[_c('v-tab-item',{key:"all",attrs:{"value":"tab-all"}},[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},_vm._l((_vm.getRestos('all')),function(i){return _c('resto-card',{key:i.id,staticClass:"review-card",staticStyle:{"white-space":"initial"},attrs:{"data":i,"url":/biller/+i.url}})}),1)],1),_vm._v(" "),_vm._l((_vm.tags),function(item){return _c('v-tab-item',{key:item.name,attrs:{"value":'tab-' + item.name}},[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},_vm._l((item.values),function(i){return _c('resto-card',{key:i.id,staticClass:"review-card",staticStyle:{"white-space":"initial"},attrs:{"data":i,"url":/biller/+i.url}})}),1)],1)})],2)],1)],1):_vm._e()],1)],1)],1)],1)}
var BillsPaymentvue_type_template_id_ada0a92e_staticRenderFns = []


// CONCATENATED MODULE: ./components/BillsPayment.vue?vue&type=template&id=ada0a92e&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BillsPayment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BillsPaymentvue_type_script_lang_js_ = ({
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
      currentItem: null,
      partners: [],
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
      return this.$store.getters['map/getBillers'];
    },

    tags() {
      const tags = ['Electric', 'Water', 'Telcos', 'Loans', 'Motorcycle', 'Insurane', 'Real Estate'].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      const menu = [];
      tags.forEach(tag => {
        const foods = this.getRestos(tag);
        if (foods.length > 0) menu.push({
          name: tag,
          values: foods
        });
      });
      return menu;
    }

  },
  watch: {
    currentItem() {
      document.getElementById('scrolling-techniques-3').scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

  },

  mounted() {
    this.isLoading = false;
    this.$getLocation({
      enableHighAccuracy: true,
      timeout: 10000
    }).then(coordinates => {
      if (coordinates.accuracy < 100) {
        this.findStores({
          lat: coordinates.lat,
          lng: coordinates.lng
        });
      } else {
        this.isHide = true;
      }
    }, error => {
      console.log(error);
      this.isHide = true;
    });
  },

  methods: {
    findStores(coordinates) {
      this.$store.commit('map/setLocation', {
        lat: coordinates.lat,
        lng: coordinates.lng
      });
      this.$store.dispatch('map/getNearbyBiller', {
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
        if (item !== 'all') return lodash_clonedeep_default()(this.resto.filter(a => a.tags.includes(item))).sort((a, b) => a.business_name < b.business_name ? -1 : a.business_name > b.business_name ? 1 : 0);else return lodash_clonedeep_default()(this.resto).sort((a, b) => a.business_name < b.business_name ? -1 : a.business_name > b.business_name ? 1 : 0);
      } catch (e) {
        console.log(e);
      }
    },

    checkIfExist(item) {
      const c = this.resto.filter(a => a.tags.includes(item));
      console.log(c, item);
    }

  }
});
// CONCATENATED MODULE: ./components/BillsPayment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BillsPaymentvue_type_script_lang_js_ = (BillsPaymentvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VContent/VContent.js + 1 modules
var VContent = __webpack_require__(189);

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

// CONCATENATED MODULE: ./components/BillsPayment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BillsPaymentvue_type_script_lang_js_,
  BillsPaymentvue_type_template_id_ada0a92e_render,
  BillsPaymentvue_type_template_id_ada0a92e_staticRenderFns,
  false,
  null,
  null,
  "b849fe7c"
  
)

/* harmony default export */ var BillsPayment = (component.exports);

/* vuetify-loader */




























installComponents_default()(component, {VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VAutocomplete: VAutocomplete["a" /* default */],VAvatar: VAvatar["a" /* default */],VBadge: VBadge["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VContainer: VContainer["a" /* default */],VContent: VContent["a" /* default */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VSheet: VSheet["a" /* default */],VSpacer: VSpacer["a" /* default */],VTab: VTab["a" /* default */],VTabItem: VTabItem["a" /* default */],VTabs: VTabs["a" /* default */],VTabsItems: VTabsItems["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/bills_payment.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var bills_paymentvue_type_script_lang_js_ = ({
  components: {
    BillsPayment: BillsPayment
  },
  layout: 'menu',

  mounted() {
    this.$fireAnalytics.logEvent('page_view');
  }

});
// CONCATENATED MODULE: ./pages/bills_payment.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_bills_paymentvue_type_script_lang_js_ = (bills_paymentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/bills_payment.vue





/* normalize component */

var bills_payment_component = Object(componentNormalizer["a" /* default */])(
  pages_bills_paymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cf8e7992"
  
)

/* harmony default export */ var bills_payment = __webpack_exports__["default"] = (bills_payment_component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkRpdmlkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdWJoZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WUHJvZ3Jlc3NMaW5lYXIvVlByb2dyZXNzTGluZWFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTGFiZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbG9hZGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdmFsaWRhdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkdyaWQvVkdyaWQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRvb2xiYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL1ZDb3VudGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ291bnRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9pbnRlcnNlY3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dEZpZWxkL1ZUZXh0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2FyZC9WQ2FyZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WSW5wdXQvVklucHV0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkxhYmVsL1ZMYWJlbC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNZXNzYWdlcy9WTWVzc2FnZXMuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQXBwQmFyL1ZBcHBCYXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9WVG9vbGJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNYWluL1ZNYWluLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvY29tcGFyYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1lbnUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvbWVudWFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvdHJhbnNpdGlvbmFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lbnUvVk1lbnUuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQmFkZ2UvVkJhZGdlLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkNoZWNrYm94L1ZTaW1wbGVDaGVja2JveC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZDaGlwL1ZDaGlwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5jbG9uZWRlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFicy5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZTbGlkZUdyb3VwL1ZTbGlkZUdyb3VwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVldpbmRvdy9WV2luZG93LnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZXaW5kb3cvVldpbmRvdy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYnNJdGVtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkFwcEJhci9WQXBwQmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWFpbi9WTWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvbnRlbnQvVkNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZTcGFjZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDaGlwL1ZDaGlwLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2hpcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNoZWNrYm94L1ZTaW1wbGVDaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlNlbGVjdC9WU2VsZWN0TGlzdC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9maWx0ZXJhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU2VsZWN0L1ZTZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZCYWRnZS9WQmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN0b0NhcmQudnVlPzBjYjgiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhck5hdkljb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTbGlkZUdyb3VwL1ZTbGlkZUdyb3VwLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFic0Jhci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYnNTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WV2luZG93L1ZXaW5kb3dJdGVtLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFiSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RvQ2FyZC52dWU/MmM2YiIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkxhenkvVkxhenkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkF1dG9jb21wbGV0ZS9WQXV0b2NvbXBsZXRlLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN0b0NhcmQudnVlPzNmYzgiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVzdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RvQ2FyZC52dWU/N2QyMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBdXRvY29tcGxldGUvVkF1dG9jb21wbGV0ZS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9iaWxsc19wYXltZW50LnZ1ZT81ZDU0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmlsbHNQYXltZW50LnZ1ZT9kNDAyIiwid2VicGFjazovLy9jb21wb25lbnRzL0JpbGxzUGF5bWVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CaWxsc1BheW1lbnQudnVlP2M4ZWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CaWxsc1BheW1lbnQudnVlIiwid2VicGFjazovLy9wYWdlcy9iaWxsc19wYXltZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9iaWxsc19wYXltZW50LnZ1ZT8xNTMzIiwid2VicGFjazovLy8uL3BhZ2VzL2JpbGxzX3BheW1lbnQudnVlIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQnRuL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFBO0FBRUE7QUFDQSxvSDs7Ozs7Ozs7QUNIQTtBQUFBO0FBRUE7QUFDQSxzSDs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTSxZQUFZLEdBQUcsb0ZBQXNCLENBQTNDLGlCQUEyQyxDQUEzQztBQUNBLE1BQU0sYUFBYSxHQUFHLG9GQUFzQixDQUE1QyxrQkFBNEMsQ0FBNUM7QUFDQSxNQUFNLFNBQVMsR0FBRyxvRkFBc0IsQ0FBeEMsY0FBd0MsQ0FBeEM7QUFDQSxNQUFNLFVBQVUsR0FBRyxvRkFBc0IsQ0FBekMsZUFBeUMsQ0FBekM7QUFFQTtBQVFlO0FBQ2IseUJBQXVCLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUt2QjtBQUx1QjtBQURaLENBQWYsRTs7Ozs7Ozs7QUNoQkE7QUFBQTtB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QUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ2dHO0FBQ3ZDO0FBQ087QUFDSztBQUNaO0FBQ0Y7QUFDSjtBQUNFO0FBQ0s7QUFDQztBQUNOO0FBQ0E7QUFDRjtBQUNJO0FBQ0Y7QUFDSTtBQUNNO0FBQ0M7QUFDRjtBQUNHO0FBQ0g7QUFDUDtBQUNBO0FBQ0g7QUFDSTtBQUNIO0FBQ0s7QUFDTTtBQUNoRSwyQkFBaUIsYUFBYSxtQ0FBTyxDQUFDLGlEQUFjLENBQUMsK0NBQWEsQ0FBQyxtQ0FBTyxDQUFDLGlDQUFNLENBQUMsNkJBQUksQ0FBQywrQkFBSyxDQUFDLHlDQUFVLENBQUMscUNBQVEsQ0FBQywrQkFBSyxDQUFDLCtCQUFLLENBQUMsNkJBQUksQ0FBQyxtQ0FBTyxDQUFDLCtCQUFLLENBQUMsdUNBQVMsQ0FBQyxtREFBZSxDQUFDLDhEQUFnQixDQUFDLGlEQUFjLENBQUMsZ0VBQWlCLENBQUMsMERBQWMsQ0FBQyxpQ0FBTSxDQUFDLG1DQUFPLENBQUMsNkJBQUksQ0FBQyxxQ0FBUSxDQUFDLCtCQUFLLENBQUMseUNBQVUsQ0FBQyxnREFBYSxDQUFDOzs7Ozs7QUM3Q3ZTO0FBQ0E7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBLGdCQUpBOztBQUtBO0FBQ0E7QUFDQTs7QUFQQSxHOztBQ0xpTCxDQUFnQixxSEFBRyxFQUFDLEM7O0FDQXpHO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUN1RjtBQUN2RixJQUFJLHVCQUFTLEdBQUcsOENBQVU7QUFDMUIsRUFBRSwyQ0FBTTtBQUNSLEVBQUUsTUFBTTtBQUNSLEVBQUUsZUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSwwR0FBUyxROzs7Ozs7OztBQ2xCeEI7QUFBQTtBQUVBO0FBQ0EsZ0giLCJmaWxlIjoicGFnZXMvYmlsbHNfcGF5bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWRGl2aWRlciBmcm9tICcuL1ZEaXZpZGVyJ1xuXG5leHBvcnQgeyBWRGl2aWRlciB9XG5leHBvcnQgZGVmYXVsdCBWRGl2aWRlclxuIiwiaW1wb3J0IFZTdWJoZWFkZXIgZnJvbSAnLi9WU3ViaGVhZGVyJ1xuXG5leHBvcnQgeyBWU3ViaGVhZGVyIH1cbmV4cG9ydCBkZWZhdWx0IFZTdWJoZWFkZXJcbiIsImltcG9ydCBWQ2FyZCBmcm9tICcuL1ZDYXJkJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuY29uc3QgVkNhcmRBY3Rpb25zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX19hY3Rpb25zJylcbmNvbnN0IFZDYXJkU3VidGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3N1YnRpdGxlJylcbmNvbnN0IFZDYXJkVGV4dCA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fdGV4dCcpXG5jb25zdCBWQ2FyZFRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX190aXRsZScpXG5cbmV4cG9ydCB7XG4gIFZDYXJkLFxuICBWQ2FyZEFjdGlvbnMsXG4gIFZDYXJkU3VidGl0bGUsXG4gIFZDYXJkVGV4dCxcbiAgVkNhcmRUaXRsZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAkX3Z1ZXRpZnlfc3ViY29tcG9uZW50czoge1xuICAgIFZDYXJkLFxuICAgIFZDYXJkQWN0aW9ucyxcbiAgICBWQ2FyZFN1YnRpdGxlLFxuICAgIFZDYXJkVGV4dCxcbiAgICBWQ2FyZFRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRvb2xiYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZTaGVldCBmcm9tICcuLi9WU2hlZXQvVlNoZWV0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkltZywgeyBzcmNPYmplY3QgfSBmcm9tICcuLi9WSW1nL1ZJbWcnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGJyZWFraW5nIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVlNoZWV0LmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRvb2xiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYWJzb2x1dGU6IEJvb2xlYW4sXG4gICAgYm90dG9tOiBCb29sZWFuLFxuICAgIGNvbGxhcHNlOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGV4dGVuZGVkOiBCb29sZWFuLFxuICAgIGV4dGVuc2lvbkhlaWdodDoge1xuICAgICAgZGVmYXVsdDogNDgsXG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIH0sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBmbG9hdGluZzogQm9vbGVhbixcbiAgICBwcm9taW5lbnQ6IEJvb2xlYW4sXG4gICAgc2hvcnQ6IEJvb2xlYW4sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdIGFzIFByb3BUeXBlPHN0cmluZyB8IHNyY09iamVjdD4sXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hlYWRlcicsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGlzRXh0ZW5kZWQ6IGZhbHNlLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgaWYgKCF0aGlzLmlzRXh0ZW5kZWQpIHJldHVybiBoZWlnaHRcblxuICAgICAgY29uc3QgZXh0ZW5zaW9uSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5leHRlbnNpb25IZWlnaHQpXG5cbiAgICAgIHJldHVybiB0aGlzLmlzQ29sbGFwc2VkXG4gICAgICAgID8gaGVpZ2h0XG4gICAgICAgIDogaGVpZ2h0ICsgKCFpc05hTihleHRlbnNpb25IZWlnaHQpID8gZXh0ZW5zaW9uSGVpZ2h0IDogMClcbiAgICB9LFxuICAgIGNvbXB1dGVkQ29udGVudEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLmhlaWdodCkgcmV0dXJuIHBhcnNlSW50KHRoaXMuaGVpZ2h0KVxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQgJiYgdGhpcy5kZW5zZSkgcmV0dXJuIDk2XG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCAmJiB0aGlzLnNob3J0KSByZXR1cm4gMTEyXG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCkgcmV0dXJuIDEyOFxuICAgICAgaWYgKHRoaXMuZGVuc2UpIHJldHVybiA0OFxuICAgICAgaWYgKHRoaXMuc2hvcnQgfHwgdGhpcy4kdnVldGlmeS5icmVha3BvaW50LnNtQW5kRG93bikgcmV0dXJuIDU2XG4gICAgICByZXR1cm4gNjRcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRvb2xiYXInOiB0cnVlLFxuICAgICAgICAndi10b29sYmFyLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXRvb2xiYXItLWJvdHRvbSc6IHRoaXMuYm90dG9tLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZSc6IHRoaXMuY29sbGFwc2UsXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlZCc6IHRoaXMuaXNDb2xsYXBzZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tZXh0ZW5kZWQnOiB0aGlzLmlzRXh0ZW5kZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsb2F0aW5nJzogdGhpcy5mbG9hdGluZyxcbiAgICAgICAgJ3YtdG9vbGJhci0tcHJvbWluZW50JzogdGhpcy5pc1Byb21pbmVudCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQ29sbGFwc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taW5lbnRcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMubWVhc3VyYWJsZVN0eWxlcyxcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRIZWlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgY29uc3QgYnJlYWtpbmdQcm9wcyA9IFtcbiAgICAgIFsnYXBwJywgJzx2LWFwcC1iYXIgYXBwPiddLFxuICAgICAgWydtYW51YWwtc2Nyb2xsJywgJzx2LWFwcC1iYXIgOnZhbHVlPVwiZmFsc2VcIj4nXSxcbiAgICAgIFsnY2xpcHBlZC1sZWZ0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1sZWZ0PiddLFxuICAgICAgWydjbGlwcGVkLXJpZ2h0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1yaWdodD4nXSxcbiAgICAgIFsnaW52ZXJ0ZWQtc2Nyb2xsJywgJzx2LWFwcC1iYXIgaW52ZXJ0ZWQtc2Nyb2xsPiddLFxuICAgICAgWydzY3JvbGwtb2ZmLXNjcmVlbicsICc8di1hcHAtYmFyIHNjcm9sbC1vZmYtc2NyZWVuPiddLFxuICAgICAgWydzY3JvbGwtdGFyZ2V0JywgJzx2LWFwcC1iYXIgc2Nyb2xsLXRhcmdldD4nXSxcbiAgICAgIFsnc2Nyb2xsLXRocmVzaG9sZCcsICc8di1hcHAtYmFyIHNjcm9sbC10aHJlc2hvbGQ+J10sXG4gICAgICBbJ2NhcmQnLCAnPHYtYXBwLWJhciBmbGF0PiddLFxuICAgIF1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgYnJlYWtpbmdQcm9wcy5mb3JFYWNoKChbb3JpZ2luYWwsIHJlcGxhY2VtZW50XSkgPT4ge1xuICAgICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KG9yaWdpbmFsKSkgYnJlYWtpbmcob3JpZ2luYWwsIHJlcGxhY2VtZW50LCB0aGlzKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJhY2tncm91bmQgKCkge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkSGVpZ2h0KSxcbiAgICAgICAgc3JjOiB0aGlzLnNyYyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLiRzY29wZWRTbG90cy5pbWdcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5pbWcoeyBwcm9wcyB9KVxuICAgICAgICA6IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkltZywgeyBwcm9wcyB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9faW1hZ2UnLFxuICAgICAgfSwgW2ltYWdlXSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2NvbnRlbnQnLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMpKVxuICAgIH0sXG4gICAgZ2VuRXh0ZW5zaW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19leHRlbnNpb24nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmV4dGVuc2lvbkhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMsICdleHRlbnNpb24nKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICB0aGlzLmlzRXh0ZW5kZWQgPSB0aGlzLmV4dGVuZGVkIHx8ICEhdGhpcy4kc2NvcGVkU2xvdHMuZXh0ZW5zaW9uXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFt0aGlzLmdlbkNvbnRlbnQoKV1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzRXh0ZW5kZWQpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5FeHRlbnNpb24oKSlcbiAgICBpZiAodGhpcy5zcmMgfHwgdGhpcy4kc2NvcGVkU2xvdHMuaW1nKSBjaGlsZHJlbi51bnNoaWZ0KHRoaXMuZ2VuQmFja2dyb3VuZCgpKVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZXNzYWdlcy5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKENvbG9yYWJsZSwgVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1tZXNzYWdlcycsXG5cbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmdbXT4sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNoaWxkcmVuICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uLWdyb3VwJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXNfX3dyYXBwZXInLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6ICdtZXNzYWdlLXRyYW5zaXRpb24nLFxuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLnZhbHVlLm1hcCh0aGlzLmdlbk1lc3NhZ2UpKVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZSAobWVzc2FnZTogc3RyaW5nLCBrZXk6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzX19tZXNzYWdlJyxcbiAgICAgICAga2V5LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzLCAnZGVmYXVsdCcsIHsgbWVzc2FnZSwga2V5IH0pIHx8IFttZXNzYWdlXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzJyxcbiAgICAgIGNsYXNzOiB0aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICB9KSwgW3RoaXMuZ2VuQ2hpbGRyZW4oKV0pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuL1ZNZXNzYWdlcydcblxuZXhwb3J0IHsgVk1lc3NhZ2VzIH1cbmV4cG9ydCBkZWZhdWx0IFZNZXNzYWdlc1xuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVklucHV0LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuLi9WTWVzc2FnZXMnXG5cbi8vIE1peGluc1xuaW1wb3J0IEJpbmRzQXR0cnMgZnJvbSAnLi4vLi4vbWl4aW5zL2JpbmRzLWF0dHJzJ1xuaW1wb3J0IFZhbGlkYXRhYmxlIGZyb20gJy4uLy4uL21peGlucy92YWxpZGF0YWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQge1xuICBjb252ZXJ0VG9Vbml0LFxuICBnZXRTbG90LFxuICBrZWJhYkNhc2UsXG59IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEYXRhLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBJbnB1dFZhbGlkYXRpb25SdWxlIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQmluZHNBdHRycyxcbiAgVmFsaWRhdGFibGUsXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UgKi9cbiAgJF9tb2RlbEV2ZW50OiBzdHJpbmdcbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtaW5wdXQnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRJY29uOiBTdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcbiAgICBoaWRlRGV0YWlsczogW0Jvb2xlYW4sIFN0cmluZ10gYXMgUHJvcFR5cGU8Ym9vbGVhbiB8ICdhdXRvJz4sXG4gICAgaGludDogU3RyaW5nLFxuICAgIGlkOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnRIaW50OiBCb29sZWFuLFxuICAgIHByZXBlbmRJY29uOiBTdHJpbmcsXG4gICAgdmFsdWU6IG51bGwgYXMgYW55IGFzIFByb3BUeXBlPGFueT4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGhhc01vdXNlRG93bjogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWlucHV0LS1oYXMtc3RhdGUnOiB0aGlzLmhhc1N0YXRlLFxuICAgICAgICAndi1pbnB1dC0taGlkZS1kZXRhaWxzJzogIXRoaXMuc2hvd0RldGFpbHMsXG4gICAgICAgICd2LWlucHV0LS1pcy1sYWJlbC1hY3RpdmUnOiB0aGlzLmlzTGFiZWxBY3RpdmUsXG4gICAgICAgICd2LWlucHV0LS1pcy1kaXJ0eSc6IHRoaXMuaXNEaXJ0eSxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWRpc2FibGVkJzogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAndi1pbnB1dC0taXMtZm9jdXNlZCc6IHRoaXMuaXNGb2N1c2VkLFxuICAgICAgICAvLyA8di1zd2l0Y2ggbG9hZGluZz4ubG9hZGluZyA9PT0gJycgc28gd2UgY2FuJ3QganVzdCBjYXN0IHRvIGJvb2xlYW5cbiAgICAgICAgJ3YtaW5wdXQtLWlzLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcgIT09IGZhbHNlICYmIHRoaXMubG9hZGluZyAhPSBudWxsLFxuICAgICAgICAndi1pbnB1dC0taXMtcmVhZG9ubHknOiB0aGlzLmlzUmVhZG9ubHksXG4gICAgICAgICd2LWlucHV0LS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRJZCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmlkIHx8IGBpbnB1dC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzVG9EaXNwbGF5Lmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGhhc0hpbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmhhc01lc3NhZ2VzICYmXG4gICAgICAgICEhdGhpcy5oaW50ICYmXG4gICAgICAgICh0aGlzLnBlcnNpc3RlbnRIaW50IHx8IHRoaXMuaXNGb2N1c2VkKVxuICAgIH0sXG4gICAgaGFzTGFiZWwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhKHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICAvLyBQcm94eSBmb3IgYGxhenlWYWx1ZWBcbiAgICAvLyBUaGlzIGFsbG93cyBhbiBpbnB1dFxuICAgIC8vIHRvIGZ1bmN0aW9uIHdpdGhvdXRcbiAgICAvLyBhIHByb3ZpZGVkIG1vZGVsXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgICAgIHRoaXMuJGVtaXQodGhpcy4kX21vZGVsRXZlbnQsIHZhbClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhIXRoaXMubGF6eVZhbHVlXG4gICAgfSxcbiAgICBpc0xhYmVsQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGlydHlcbiAgICB9LFxuICAgIG1lc3NhZ2VzVG9EaXNwbGF5ICgpOiBzdHJpbmdbXSB7XG4gICAgICBpZiAodGhpcy5oYXNIaW50KSByZXR1cm4gW3RoaXMuaGludF1cblxuICAgICAgaWYgKCF0aGlzLmhhc01lc3NhZ2VzKSByZXR1cm4gW11cblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnMubWFwKCh2YWxpZGF0aW9uOiBzdHJpbmcgfCBJbnB1dFZhbGlkYXRpb25SdWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsaWRhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiB2YWxpZGF0aW9uXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRpb24odGhpcy5pbnRlcm5hbFZhbHVlKVxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsaWRhdGlvblJlc3VsdCA9PT0gJ3N0cmluZycgPyB2YWxpZGF0aW9uUmVzdWx0IDogJydcbiAgICAgIH0pLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UgIT09ICcnKVxuICAgIH0sXG4gICAgc2hvd0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZURldGFpbHMgPT09IGZhbHNlIHx8ICh0aGlzLmhpZGVEZXRhaWxzID09PSAnYXV0bycgJiYgdGhpcy5oYXNEZXRhaWxzKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyB2LXJhZGlvLWdyb3VwIG5lZWRzIHRvIGVtaXQgYSBkaWZmZXJlbnQgZXZlbnRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzQ3NTJcbiAgICB0aGlzLiRfbW9kZWxFdmVudCA9ICh0aGlzLiRvcHRpb25zLm1vZGVsICYmIHRoaXMuJG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlblByZXBlbmRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuQ29udHJvbCgpLFxuICAgICAgICB0aGlzLmdlbkFwcGVuZFNsb3QoKSxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkNvbnRyb2wgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0X19jb250cm9sJyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5JbnB1dFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5NZXNzYWdlcygpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkljb24gKFxuICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgY2I/OiAoZTogRXZlbnQpID0+IHZvaWQsXG4gICAgICBleHRyYURhdGE6IFZOb2RlRGF0YSA9IHt9XG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gKHRoaXMgYXMgYW55KVtgJHt0eXBlfUljb25gXVxuICAgICAgY29uc3QgZXZlbnROYW1lID0gYGNsaWNrOiR7a2ViYWJDYXNlKHR5cGUpfWBcbiAgICAgIGNvbnN0IGhhc0xpc3RlbmVyID0gISEodGhpcy5saXN0ZW5lcnMkW2V2ZW50TmFtZV0gfHwgY2IpXG5cbiAgICAgIGNvbnN0IGRhdGEgPSBtZXJnZURhdGEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWxhYmVsJzogaGFzTGlzdGVuZXIgPyBrZWJhYkNhc2UodHlwZSkuc3BsaXQoJy0nKVswXSArICcgaWNvbicgOiB1bmRlZmluZWQsXG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICB9LFxuICAgICAgICBvbjogIWhhc0xpc3RlbmVyXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwgZSlcbiAgICAgICAgICAgICAgY2IgJiYgY2IoZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBDb250YWluZXIgaGFzIGcgZXZlbnQgdGhhdCB3aWxsXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG1lbnUgb3BlbiBpZiBlbmNsb3NlZFxuICAgICAgICAgICAgbW91c2V1cDogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICB9LCBleHRyYURhdGEpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1pbnB1dF9faWNvbmAsXG4gICAgICAgIGNsYXNzOiB0eXBlID8gYHYtaW5wdXRfX2ljb24tLSR7a2ViYWJDYXNlKHR5cGUpfWAgOiB1bmRlZmluZWQsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgVkljb24sXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBpY29uXG4gICAgICAgICksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuSW5wdXRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXRfX3Nsb3QnLFxuICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgICBtb3VzZWRvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgbW91c2V1cDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ2lucHV0LXNsb3QnLFxuICAgICAgfSksIFt0aGlzLmdlbkRlZmF1bHRTbG90KCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0xhYmVsKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGFiZWwsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogdGhpcy5oYXNTdGF0ZSxcbiAgICAgICAgICBmb3I6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZNZXNzYWdlcywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNvbG9yOiB0aGlzLmhhc0hpbnQgPyAnJyA6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5tZXNzYWdlc1RvRGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiB0aGlzLmhhc01lc3NhZ2VzID8gJ2FsZXJ0JyA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogcHJvcHMgPT4gZ2V0U2xvdCh0aGlzLCAnbWVzc2FnZScsIHByb3BzKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5TbG90IChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgICBzbG90OiAoVk5vZGUgfCBWTm9kZVtdKVtdXG4gICAgKSB7XG4gICAgICBpZiAoIXNsb3QubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWYgPSBgJHt0eXBlfS0ke2xvY2F0aW9ufWBcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LWlucHV0X18ke3JlZn1gLFxuICAgICAgICByZWYsXG4gICAgICB9LCBzbG90KVxuICAgIH0sXG4gICAgZ2VuUHJlcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90cy5wcmVwZW5kKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90cy5wcmVwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ3ByZXBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICAvLyBBcHBlbmQgaWNvbiBmb3IgdGV4dCBmaWVsZCB3YXMgcmVhbGx5XG4gICAgICAvLyBhbiBhcHBlbmRlZCBpbm5lciBpY29uLCB2LXRleHQtZmllbGRcbiAgICAgIC8vIHdpbGwgb3ZlcndyaXRlIHRoaXMgbWV0aG9kIGluIG9yZGVyIHRvIG9idGFpblxuICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdFxuICAgICAgaWYgKHRoaXMuJHNsb3RzLmFwcGVuZCkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHMuYXBwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBFdmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZURvd24gKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IHRydWVcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IGZhbHNlXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZXVwJywgZSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy52YWxpZGF0aW9uU3RhdGUsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dCcsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgIH0pLCB0aGlzLmdlbkNvbnRlbnQoKSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVklucHV0IGZyb20gJy4vVklucHV0J1xuXG5leHBvcnQgeyBWSW5wdXQgfVxuZXhwb3J0IGRlZmF1bHQgVklucHV0XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ2FyZC5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2xvYWRhYmxlJ1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSdcblxuLy8gSGVscGVyc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBMb2FkYWJsZSxcbiAgUm91dGFibGUsXG4gIFZTaGVldFxuKS5leHRlbmQoe1xuICBuYW1lOiAndi1jYXJkJyxcblxuICBwcm9wczoge1xuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgaG92ZXI6IEJvb2xlYW4sXG4gICAgaW1nOiBTdHJpbmcsXG4gICAgbGluazogQm9vbGVhbixcbiAgICBsb2FkZXJIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgcmFpc2VkOiBCb29sZWFuLFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWNhcmQnOiB0cnVlLFxuICAgICAgICAuLi5Sb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtY2FyZC0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtY2FyZC0taG92ZXInOiB0aGlzLmhvdmVyLFxuICAgICAgICAndi1jYXJkLS1saW5rJzogdGhpcy5pc0NsaWNrYWJsZSxcbiAgICAgICAgJ3YtY2FyZC0tbG9hZGluZyc6IHRoaXMubG9hZGluZyxcbiAgICAgICAgJ3YtY2FyZC0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAndi1jYXJkLS1yYWlzZWQnOiB0aGlzLnJhaXNlZCxcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qgc3R5bGU6IERpY3Rpb25hcnk8c3RyaW5nPiA9IHtcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuc3R5bGVzLmNhbGwodGhpcyksXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmltZykge1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7dGhpcy5pbWd9XCIpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXRgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlblByb2dyZXNzICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IExvYWRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5Qcm9ncmVzcy5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghcmVuZGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2FyZF9fcHJvZ3Jlc3MnLFxuICAgICAgICBrZXk6ICdwcm9ncmVzcycsXG4gICAgICB9LCBbcmVuZGVyXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLnN0eWxlID0gdGhpcy5zdHlsZXNcblxuICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICBkYXRhLmF0dHJzID0gZGF0YS5hdHRycyB8fCB7fVxuICAgICAgZGF0YS5hdHRycy50YWJpbmRleCA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIGRhdGEpLCBbXG4gICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICB0aGlzLiRzbG90cy5kZWZhdWx0LFxuICAgIF0pXG4gIH0sXG59KVxuIiwiaW1wb3J0ICcuL1ZQcm9ncmVzc0xpbmVhci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQge1xuICBWRmFkZVRyYW5zaXRpb24sXG4gIFZTbGlkZVhUcmFuc2l0aW9uLFxufSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFByb3h5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcHJveHlhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMgfSBmcm9tICd2dWUvdHlwZXMnXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAndG9wJywgJ2JvdHRvbSddKSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kT3BhY2l0eToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBidWZmZXJWYWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEwMCxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBxdWVyeTogQm9vbGVhbixcbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3RyZWFtOiBCb29sZWFuLFxuICAgIHN0cmlwZWQ6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVybmFsTGF6eVZhbHVlOiB0aGlzLnZhbHVlIHx8IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgX19jYWNoZWRCYWNrZ3JvdW5kICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19iYWNrZ3JvdW5kJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuYmFja2dyb3VuZFN0eWxlLFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQodGhpcy5jb21wdXRlZFRyYW5zaXRpb24sIFt0aGlzLl9fY2FjaGVkQmFyVHlwZV0pXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhclR5cGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB0aGlzLl9fY2FjaGVkSW5kZXRlcm1pbmF0ZSA6IHRoaXMuX19jYWNoZWREZXRlcm1pbmF0ZVxuICAgIH0sXG4gICAgX19jYWNoZWRCdWZmZXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2J1ZmZlcicsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBfX2NhY2hlZERldGVybWluYXRlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtcHJvZ3Jlc3MtbGluZWFyX19kZXRlcm1pbmF0ZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIF9fY2FjaGVkSW5kZXRlcm1pbmF0ZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZScsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlLS1hY3RpdmUnOiB0aGlzLmFjdGl2ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzc0JhcignbG9uZycpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzQmFyKCdzaG9ydCcpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIF9fY2FjaGVkU3RyZWFtICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgaWYgKCF0aGlzLnN0cmVhbSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fc3RyZWFtJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCgxMDAgLSB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGJhY2tncm91bmRTdHlsZSAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gdGhpcy5iYWNrZ3JvdW5kT3BhY2l0eSA9PSBudWxsXG4gICAgICAgID8gKHRoaXMuYmFja2dyb3VuZENvbG9yID8gMSA6IDAuMylcbiAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMuYmFja2dyb3VuZE9wYWNpdHkpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGJhY2tncm91bmRPcGFjaXR5LFxuICAgICAgICBbdGhpcy5pc1JldmVyc2VkID8gJ3JpZ2h0JyA6ICdsZWZ0J106IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZEJ1ZmZlciAtIHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tYWJzb2x1dGUnOiB0aGlzLmFic29sdXRlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLWZpeGVkJzogdGhpcy5maXhlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1xdWVyeSc6IHRoaXMucXVlcnksXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcmVhY3RpdmUnOiB0aGlzLnJlYWN0aXZlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJldmVyc2UnOiB0aGlzLmlzUmV2ZXJzZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1zdHJpcGVkJzogdGhpcy5zdHJpcGVkLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IFZGYWRlVHJhbnNpdGlvbiA6IFZTbGlkZVhUcmFuc2l0aW9uXG4gICAgfSxcbiAgICBpc1JldmVyc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bCAhPT0gdGhpcy5yZXZlcnNlXG4gICAgfSxcbiAgICBub3JtYWxpemVkQnVmZmVyICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMuYnVmZmVyVmFsdWUpXG4gICAgfSxcbiAgICBub3JtYWxpemVkVmFsdWUgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5pbnRlcm5hbExhenlWYWx1ZSlcbiAgICB9LFxuICAgIHJlYWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuJGxpc3RlbmVycy5jaGFuZ2UpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzdHlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxuXG4gICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHN0eWxlcy5oZWlnaHQgPSAwXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pbmRldGVybWluYXRlICYmIHBhcnNlRmxvYXQodGhpcy5ub3JtYWxpemVkQnVmZmVyKSAhPT0gMTAwKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkQnVmZmVyLCAnJScpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZXNcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90KHRoaXMsICdkZWZhdWx0JywgeyB2YWx1ZTogdGhpcy5pbnRlcm5hbExhenlWYWx1ZSB9KVxuXG4gICAgICBpZiAoIXNsb3QpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2NvbnRlbnQnLFxuICAgICAgfSwgc2xvdClcbiAgICB9LFxuICAgIGdlbkxpc3RlbmVycyAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLiRsaXN0ZW5lcnNcblxuICAgICAgaWYgKHRoaXMucmVhY3RpdmUpIHtcbiAgICAgICAgbGlzdGVuZXJzLmNsaWNrID0gdGhpcy5vbkNsaWNrXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnNcbiAgICB9LFxuICAgIGdlblByb2dyZXNzQmFyIChuYW1lOiAnbG9uZycgfCAnc2hvcnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBbbmFtZV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5yZWFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IGUub2Zmc2V0WCAvIHdpZHRoICogMTAwXG4gICAgfSxcbiAgICBub3JtYWxpemUgKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgIGlmICh2YWx1ZSA8IDApIHJldHVybiAwXG4gICAgICBpZiAodmFsdWUgPiAxMDApIHJldHVybiAxMDBcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5pbmRldGVybWluYXRlID8gdW5kZWZpbmVkIDogdGhpcy5ub3JtYWxpemVkVmFsdWUsXG4gICAgICB9LFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20gPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuYWN0aXZlID8gY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCkgOiAwLFxuICAgICAgICB0b3A6IHRoaXMudG9wID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5nZW5MaXN0ZW5lcnMoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgdGhpcy5fX2NhY2hlZFN0cmVhbSxcbiAgICAgIHRoaXMuX19jYWNoZWRCYWNrZ3JvdW5kLFxuICAgICAgdGhpcy5fX2NhY2hlZEJ1ZmZlcixcbiAgICAgIHRoaXMuX19jYWNoZWRCYXIsXG4gICAgICB0aGlzLmdlbkNvbnRlbnQoKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZMYWJlbC5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUsIHsgZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyB9IGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1sYWJlbCcsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGFic29sdXRlOiBCb29sZWFuLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBmb2N1c2VkOiBCb29sZWFuLFxuICAgIGZvcjogU3RyaW5nLFxuICAgIGxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgfSxcblxuICByZW5kZXIgKGgsIGN0eCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsaXN0ZW5lcnMsIHByb3BzIH0gPSBjdHhcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWxhYmVsJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LWxhYmVsLS1hY3RpdmUnOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgJ3YtbGFiZWwtLWlzLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIC4uLmZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMoY3R4KSxcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBmb3I6IHByb3BzLmZvcixcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogIXByb3BzLmZvcixcbiAgICAgIH0sXG4gICAgICBvbjogbGlzdGVuZXJzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbGVmdDogY29udmVydFRvVW5pdChwcm9wcy5sZWZ0KSxcbiAgICAgICAgcmlnaHQ6IGNvbnZlcnRUb1VuaXQocHJvcHMucmlnaHQpLFxuICAgICAgICBwb3NpdGlvbjogcHJvcHMuYWJzb2x1dGUgPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJyxcbiAgICAgIH0sXG4gICAgICByZWY6ICdsYWJlbCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2xhYmVsJywgQ29sb3JhYmxlLm9wdGlvbnMubWV0aG9kcy5zZXRUZXh0Q29sb3IocHJvcHMuZm9jdXNlZCAmJiBwcm9wcy5jb2xvciwgZGF0YSksIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCBWTGFiZWwgZnJvbSAnLi9WTGFiZWwnXG5cbmV4cG9ydCB7IFZMYWJlbCB9XG5leHBvcnQgZGVmYXVsdCBWTGFiZWxcbiIsImltcG9ydCBWdWUsIHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyJ1xuXG5pbnRlcmZhY2UgY29sb3JhYmxlIGV4dGVuZHMgVnVlIHtcbiAgY29sb3I/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBMb2FkYWJsZVxuICpcbiAqIEBtaXhpblxuICpcbiAqIFVzZWQgdG8gYWRkIGxpbmVhciBwcm9ncmVzcyBiYXIgdG8gY29tcG9uZW50c1xuICogQ2FuIHVzZSBhIGRlZmF1bHQgYmFyIHdpdGggYSBzcGVjaWZpYyBjb2xvclxuICogb3IgZGVzaWduYXRlIGEgY3VzdG9tIHByb2dyZXNzIGxpbmVhciBiYXJcbiAqL1xuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQ8Y29sb3JhYmxlPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdsb2FkYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbG9hZGVySGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMixcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Qcm9ncmVzcyAoKTogVk5vZGUgfCBWTm9kZVtdIHwgbnVsbCB7XG4gICAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLnByb2dyZXNzIHx8IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlByb2dyZXNzTGluZWFyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICAgICAgY29sb3I6ICh0aGlzLmxvYWRpbmcgPT09IHRydWUgfHwgdGhpcy5sb2FkaW5nID09PSAnJylcbiAgICAgICAgICAgID8gKHRoaXMuY29sb3IgfHwgJ3ByaW1hcnknKVxuICAgICAgICAgICAgOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmxvYWRlckhlaWdodCxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uL3RoZW1lYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uL3JlZ2lzdHJhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBJbnB1dE1lc3NhZ2UsIElucHV0VmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBSZWdpc3RyYWJsZUluamVjdDwnZm9ybScsIGFueT4oJ2Zvcm0nKSxcbiAgVGhlbWVhYmxlLFxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndmFsaWRhdGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgZXJyb3JDb3VudDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBydWxlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRWYWxpZGF0aW9uUnVsZXM+LFxuICAgIHN1Y2Nlc3M6IEJvb2xlYW4sXG4gICAgc3VjY2Vzc01lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgdmFsaWRhdGVPbkJsdXI6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yQnVja2V0OiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgIGhhc0NvbG9yOiBmYWxzZSxcbiAgICAgIGhhc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaGFzSW5wdXQ6IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGlzUmVzZXR0aW5nOiBmYWxzZSxcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuY29sb3IpIHJldHVybiB0aGlzLmNvbG9yXG4gICAgICAvLyBJdCdzIGFzc3VtZWQgdGhhdCBpZiB0aGUgaW5wdXQgaXMgb24gYVxuICAgICAgLy8gZGFyayBiYWNrZ3JvdW5kLCB0aGUgdXNlciB3aWxsIHdhbnQgdG9cbiAgICAgIC8vIGhhdmUgYSB3aGl0ZSBjb2xvci4gSWYgdGhlIGVudGlyZSBhcHBcbiAgICAgIC8vIGlzIHNldHVwIHRvIGJlIGRhcmssIHRoZW4gdGhleSB3aWxsXG4gICAgICAvLyBsaWtlIHdhbnQgdG8gdXNlIHRoZWlyIHByaW1hcnkgY29sb3JcbiAgICAgIGlmICh0aGlzLmlzRGFyayAmJiAhdGhpcy5hcHBJc0RhcmspIHJldHVybiAnd2hpdGUnXG4gICAgICBlbHNlIHJldHVybiAncHJpbWFyeSdcbiAgICB9LFxuICAgIGhhc0Vycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5lcnJvckJ1Y2tldC5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuZXJyb3JcbiAgICAgIClcbiAgICB9LFxuICAgIC8vIFRPRE86IEFkZCBsb2dpYyB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYmFzZWRcbiAgICAvLyB1cG9uIGEgZ29vZCB2YWxpZGF0aW9uXG4gICAgaGFzU3VjY2VzcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5zdWNjZXNzXG4gICAgICApXG4gICAgfSxcbiAgICBleHRlcm5hbEVycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwIHx8IHRoaXMuZXJyb3JcbiAgICB9LFxuICAgIGhhc01lc3NhZ2VzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgaGFzU3RhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaGFzU3VjY2VzcyB8fFxuICAgICAgICAodGhpcy5zaG91bGRWYWxpZGF0ZSAmJiB0aGlzLmhhc0Vycm9yKVxuICAgICAgKVxuICAgIH0sXG4gICAgaW50ZXJuYWxFcnJvck1lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuZXJyb3JNZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5tZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsU3VjY2Vzc01lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuc3VjY2Vzc01lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiB1bmtub3duIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlzYWJsZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgKFxuICAgICAgICAhIXRoaXMuZm9ybSAmJlxuICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZWRcbiAgICAgIClcbiAgICB9LFxuICAgIGlzSW50ZXJhY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seVxuICAgIH0sXG4gICAgaXNSZWFkb25seSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFkb25seSB8fCAoXG4gICAgICAgICEhdGhpcy5mb3JtICYmXG4gICAgICAgIHRoaXMuZm9ybS5yZWFkb25seVxuICAgICAgKVxuICAgIH0sXG4gICAgc2hvdWxkVmFsaWRhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuZXh0ZXJuYWxFcnJvcikgcmV0dXJuIHRydWVcbiAgICAgIGlmICh0aGlzLmlzUmVzZXR0aW5nKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVPbkJsdXJcbiAgICAgICAgPyB0aGlzLmhhc0ZvY3VzZWQgJiYgIXRoaXMuaXNGb2N1c2VkXG4gICAgICAgIDogKHRoaXMuaGFzSW5wdXQgfHwgdGhpcy5oYXNGb2N1c2VkKVxuICAgIH0sXG4gICAgdmFsaWRhdGlvbnMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQuc2xpY2UoMCwgTnVtYmVyKHRoaXMuZXJyb3JDb3VudCkpXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU3RhdGUgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5oYXNFcnJvciAmJiB0aGlzLnNob3VsZFZhbGlkYXRlKSByZXR1cm4gJ2Vycm9yJ1xuICAgICAgaWYgKHRoaXMuaGFzU3VjY2VzcykgcmV0dXJuICdzdWNjZXNzJ1xuICAgICAgaWYgKHRoaXMuaGFzQ29sb3IpIHJldHVybiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbGlkYXRpb25UYXJnZXQgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICh0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN1Y2Nlc3NNZXNzYWdlcyAmJiB0aGlzLnN1Y2Nlc3NNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVzc2FnZXMgJiYgdGhpcy5tZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvckJ1Y2tldFxuICAgICAgfSBlbHNlIHJldHVybiBbXVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBydWxlczoge1xuICAgICAgaGFuZGxlciAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKGRlZXBFcXVhbChuZXdWYWwsIG9sZFZhbCkpIHJldHVyblxuICAgICAgICB0aGlzLnZhbGlkYXRlKClcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlLFxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZSAoKSB7XG4gICAgICAvLyBJZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIHNldHRpbmcgaW5wdXQsXG4gICAgICAvLyBtYXJrIGl0IHdpdGggaGFzSW5wdXRcbiAgICAgIHRoaXMuaGFzSW5wdXQgPSB0cnVlXG4gICAgICB0aGlzLnZhbGlkYXRlT25CbHVyIHx8IHRoaXMuJG5leHRUaWNrKHRoaXMudmFsaWRhdGUpXG4gICAgfSxcbiAgICBpc0ZvY3VzZWQgKHZhbCkge1xuICAgICAgLy8gU2hvdWxkIG5vdCBjaGVjayB2YWxpZGF0aW9uXG4gICAgICAvLyBpZiBkaXNhYmxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdmFsICYmXG4gICAgICAgICF0aGlzLmlzRGlzYWJsZWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIHRoaXMudmFsaWRhdGVPbkJsdXIgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy52YWxpZGF0ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmVzZXR0aW5nICgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc0lucHV0ID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYXNGb2N1c2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKVxuICAgICAgfSwgMClcbiAgICB9LFxuICAgIGhhc0Vycm9yICh2YWwpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTplcnJvcicsIHZhbClcbiAgICAgIH1cbiAgICB9LFxuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5mb3JtICYmIHRoaXMuZm9ybS5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0udW5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5JbnRlcm5hbE1lc3NhZ2VzIChtZXNzYWdlczogSW5wdXRNZXNzYWdlIHwgbnVsbCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICghbWVzc2FnZXMpIHJldHVybiBbXVxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlcykpIHJldHVybiBtZXNzYWdlc1xuICAgICAgZWxzZSByZXR1cm4gW21lc3NhZ2VzXVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICB0aGlzLmlzUmVzZXR0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gQXJyYXkuaXNBcnJheSh0aGlzLmludGVybmFsVmFsdWUpXG4gICAgICAgID8gW11cbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgcmVzZXRWYWxpZGF0aW9uICgpIHtcbiAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSB0cnVlXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHZhbGlkYXRlIChmb3JjZSA9IGZhbHNlLCB2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgZXJyb3JCdWNrZXQgPSBbXVxuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLmludGVybmFsVmFsdWVcblxuICAgICAgaWYgKGZvcmNlKSB0aGlzLmhhc0lucHV0ID0gdGhpcy5oYXNGb2N1c2VkID0gdHJ1ZVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5ydWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMucnVsZXNbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicgPyBydWxlKHZhbHVlKSA6IHJ1bGVcblxuICAgICAgICBpZiAodmFsaWQgPT09IGZhbHNlIHx8IHR5cGVvZiB2YWxpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlcnJvckJ1Y2tldC5wdXNoKHZhbGlkIHx8ICcnKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWxpZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgY29uc29sZUVycm9yKGBSdWxlcyBzaG91bGQgcmV0dXJuIGEgc3RyaW5nIG9yIGJvb2xlYW4sIHJlY2VpdmVkICcke3R5cGVvZiB2YWxpZH0nIGluc3RlYWRgLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXJyb3JCdWNrZXQgPSBlcnJvckJ1Y2tldFxuICAgICAgdGhpcy52YWxpZCA9IGVycm9yQnVja2V0Lmxlbmd0aCA9PT0gMFxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZFxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlRvb2xiYXIgZnJvbSAnLi9WVG9vbGJhcidcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5jb25zdCBWVG9vbGJhclRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX190aXRsZScpXG5jb25zdCBWVG9vbGJhckl0ZW1zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX19pdGVtcycpXG5cbmV4cG9ydCB7XG4gIFZUb29sYmFyLFxuICBWVG9vbGJhckl0ZW1zLFxuICBWVG9vbGJhclRpdGxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVlRvb2xiYXIsXG4gICAgVlRvb2xiYXJJdGVtcyxcbiAgICBWVG9vbGJhclRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkNvdW50ZXIuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgVGhlbWVhYmxlLCB7IGZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY291bnRlcicsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBtYXg6IFtOdW1iZXIsIFN0cmluZ10sXG4gIH0sXG5cbiAgcmVuZGVyIChoLCBjdHgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gY3R4XG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQocHJvcHMubWF4LCAxMClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHByb3BzLnZhbHVlLCAxMClcbiAgICBjb25zdCBjb250ZW50ID0gbWF4ID8gYCR7dmFsdWV9IC8gJHttYXh9YCA6IFN0cmluZyhwcm9wcy52YWx1ZSlcbiAgICBjb25zdCBpc0dyZWF0ZXIgPSBtYXggJiYgKHZhbHVlID4gbWF4KVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1jb3VudGVyJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdlcnJvci0tdGV4dCc6IGlzR3JlYXRlcixcbiAgICAgICAgLi4uZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyhjdHgpLFxuICAgICAgfSxcbiAgICB9LCBjb250ZW50KVxuICB9LFxufSlcbiIsImltcG9ydCBWQ291bnRlciBmcm9tICcuL1ZDb3VudGVyJ1xuXG5leHBvcnQgeyBWQ291bnRlciB9XG5leHBvcnQgZGVmYXVsdCBWQ291bnRlclxuIiwiLy8gRGlyZWN0aXZlc1xuaW1wb3J0IEludGVyc2VjdCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ludGVyc2VjdCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb25zb2xlV2FybiB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlcnNlY3RhYmxlIChvcHRpb25zOiB7IG9uVmlzaWJsZTogc3RyaW5nW10gfSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykpIHtcbiAgICAvLyBkbyBub3RoaW5nIGJlY2F1c2UgaW50ZXJzZWN0aW9uIG9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGVcbiAgICByZXR1cm4gVnVlLmV4dGVuZCh7IG5hbWU6ICdpbnRlcnNlY3RhYmxlJyB9KVxuICB9XG5cbiAgcmV0dXJuIFZ1ZS5leHRlbmQoe1xuICAgIG5hbWU6ICdpbnRlcnNlY3RhYmxlJyxcblxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0Lmluc2VydGVkKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50LCB7XG4gICAgICAgIG5hbWU6ICdpbnRlcnNlY3QnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vbk9ic2VydmUsXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZXN0cm95ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0LnVuYmluZCh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudClcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25PYnNlcnZlIChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciwgaXNJbnRlcnNlY3Rpbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFpc0ludGVyc2VjdGluZykgcmV0dXJuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG9wdGlvbnMub25WaXNpYmxlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAodGhpcyBhcyBhbnkpW29wdGlvbnMub25WaXNpYmxlW2ldXVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlV2FybihvcHRpb25zLm9uVmlzaWJsZVtpXSArICcgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUgb24gdGhlIGluc3RhbmNlIGJ1dCByZWZlcmVuY2VkIGluIGludGVyc2VjdGFibGUgbWl4aW4gb3B0aW9ucycpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUZXh0RmllbGQuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWQ291bnRlciBmcm9tICcuLi9WQ291bnRlcidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBJbnRlcnNlY3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9pbnRlcnNlY3RhYmxlJ1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4uLy4uL21peGlucy9sb2FkYWJsZSdcbmltcG9ydCBWYWxpZGF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdmFsaWRhdGFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwga2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBicmVha2luZywgY29uc29sZVdhcm4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWSW5wdXQsXG4gIEludGVyc2VjdGFibGUoe1xuICAgIG9uVmlzaWJsZTogW1xuICAgICAgJ3NldExhYmVsV2lkdGgnLFxuICAgICAgJ3NldFByZWZpeFdpZHRoJyxcbiAgICAgICdzZXRQcmVwZW5kV2lkdGgnLFxuICAgICAgJ3RyeUF1dG9mb2N1cycsXG4gICAgXSxcbiAgfSksXG4gIExvYWRhYmxlLFxuKVxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBsYWJlbDogSFRNTEVsZW1lbnRcbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICAgICdwcmVwZW5kLWlubmVyJzogSFRNTEVsZW1lbnRcbiAgICBwcmVmaXg6IEhUTUxFbGVtZW50XG4gICAgc3VmZml4OiBIVE1MRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGRpcnR5VHlwZXMgPSBbJ2NvbG9yJywgJ2ZpbGUnLCAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ3dlZWsnLCAnbW9udGgnXVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi10ZXh0LWZpZWxkJyxcblxuICBkaXJlY3RpdmVzOiB7IHJpcHBsZSB9LFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRPdXRlckljb246IFN0cmluZyxcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgIGNsZWFySWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjbGVhcicsXG4gICAgfSxcbiAgICBjb3VudGVyOiBbQm9vbGVhbiwgTnVtYmVyLCBTdHJpbmddLFxuICAgIGNvdW50ZXJWYWx1ZTogRnVuY3Rpb24gYXMgUHJvcFR5cGU8KHZhbHVlOiBhbnkpID0+IG51bWJlcj4sXG4gICAgZmlsbGVkOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgZnVsbFdpZHRoOiBCb29sZWFuLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBwcmVmaXg6IFN0cmluZyxcbiAgICBwcmVwZW5kSW5uZXJJY29uOiBTdHJpbmcsXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHNoYXBlZDogQm9vbGVhbixcbiAgICBzaW5nbGVMaW5lOiBCb29sZWFuLFxuICAgIHNvbG86IEJvb2xlYW4sXG4gICAgc29sb0ludmVydGVkOiBCb29sZWFuLFxuICAgIHN1ZmZpeDogU3RyaW5nLFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYmFkSW5wdXQ6IGZhbHNlLFxuICAgIGxhYmVsV2lkdGg6IDAsXG4gICAgcHJlZml4V2lkdGg6IDAsXG4gICAgcHJlcGVuZFdpZHRoOiAwLFxuICAgIGluaXRpYWxWYWx1ZTogbnVsbCxcbiAgICBpc0Jvb3RlZDogZmFsc2UsXG4gICAgaXNDbGVhcmluZzogZmFsc2UsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZCc6IHRydWUsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWZ1bGwtd2lkdGgnOiB0aGlzLmZ1bGxXaWR0aCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcHJlZml4JzogdGhpcy5wcmVmaXgsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNpbmdsZS1saW5lJzogdGhpcy5pc1NpbmdsZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sbyc6IHRoaXMuaXNTb2xvLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvLWludmVydGVkJzogdGhpcy5zb2xvSW52ZXJ0ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZmlsbGVkJzogdGhpcy5maWxsZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWlzLWJvb3RlZCc6IHRoaXMuaXNCb290ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWVuY2xvc2VkJzogdGhpcy5pc0VuY2xvc2VkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1yZXZlcnNlJzogdGhpcy5yZXZlcnNlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1vdXRsaW5lZCc6IHRoaXMub3V0bGluZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc2hhcGVkJzogdGhpcy5zaGFwZWQsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgY29uc3QgY29tcHV0ZWRDb2xvciA9IFZhbGlkYXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb2xvci5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghdGhpcy5zb2xvSW52ZXJ0ZWQgfHwgIXRoaXMuaXNGb2N1c2VkKSByZXR1cm4gY29tcHV0ZWRDb2xvclxuXG4gICAgICByZXR1cm4gdGhpcy5jb2xvciB8fCAncHJpbWFyeSdcbiAgICB9LFxuICAgIGNvbXB1dGVkQ291bnRlclZhbHVlICgpOiBudW1iZXIge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvdW50ZXJWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyVmFsdWUodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmludGVybmFsVmFsdWUgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoXG4gICAgfSxcbiAgICBoYXNDb3VudGVyICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvdW50ZXIgIT09IGZhbHNlICYmIHRoaXMuY291bnRlciAhPSBudWxsXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5jb21wdXRlZC5oYXNEZXRhaWxzLmNhbGwodGhpcykgfHwgdGhpcy5oYXNDb3VudGVyXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmxhenlWYWx1ZSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZT8udG9TdHJpbmcoKS5sZW5ndGggPiAwIHx8IHRoaXMuYmFkSW5wdXRcbiAgICB9LFxuICAgIGlzRW5jbG9zZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5maWxsZWQgfHxcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5vdXRsaW5lZFxuICAgICAgKVxuICAgIH0sXG4gICAgaXNMYWJlbEFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RpcnR5IHx8IGRpcnR5VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKVxuICAgIH0sXG4gICAgaXNTaW5nbGUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5zaW5nbGVMaW5lIHx8XG4gICAgICAgIHRoaXMuZnVsbFdpZHRoIHx8XG4gICAgICAgIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jZmlsbGVkLXRleHQtZmllbGRcbiAgICAgICAgKHRoaXMuZmlsbGVkICYmICF0aGlzLmhhc0xhYmVsKVxuICAgICAgKVxuICAgIH0sXG4gICAgaXNTb2xvICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNvbG8gfHwgdGhpcy5zb2xvSW52ZXJ0ZWRcbiAgICB9LFxuICAgIGxhYmVsUG9zaXRpb24gKCk6IFJlY29yZDwnbGVmdCcgfCAncmlnaHQnLCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+IHtcbiAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5wcmVmaXggJiYgIXRoaXMubGFiZWxWYWx1ZSkgPyB0aGlzLnByZWZpeFdpZHRoIDogMFxuXG4gICAgICBpZiAodGhpcy5sYWJlbFZhbHVlICYmIHRoaXMucHJlcGVuZFdpZHRoKSBvZmZzZXQgLT0gdGhpcy5wcmVwZW5kV2lkdGhcblxuICAgICAgcmV0dXJuICh0aGlzLiR2dWV0aWZ5LnJ0bCA9PT0gdGhpcy5yZXZlcnNlKSA/IHtcbiAgICAgICAgbGVmdDogb2Zmc2V0LFxuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgfSA6IHtcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICByaWdodDogb2Zmc2V0LFxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0xhYmVsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0xhYmVsICYmICghdGhpcy5pc1NpbmdsZSB8fCAoIXRoaXMuaXNMYWJlbEFjdGl2ZSAmJiAhdGhpcy5wbGFjZWhvbGRlcikpXG4gICAgfSxcbiAgICBsYWJlbFZhbHVlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc1NpbmdsZSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNMYWJlbEFjdGl2ZSB8fCB0aGlzLnBsYWNlaG9sZGVyKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBsYWJlbFZhbHVlOiAnc2V0TGFiZWxXaWR0aCcsXG4gICAgb3V0bGluZWQ6ICdzZXRMYWJlbFdpZHRoJyxcbiAgICBsYWJlbCAoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljayh0aGlzLnNldExhYmVsV2lkdGgpXG4gICAgfSxcbiAgICBwcmVmaXggKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5zZXRQcmVmaXhXaWR0aClcbiAgICB9LFxuICAgIGlzRm9jdXNlZDogJ3VwZGF0ZVZhbHVlJyxcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2JveCcpKSB7XG4gICAgICBicmVha2luZygnYm94JywgJ2ZpbGxlZCcsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2Jyb3dzZXItYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGJyZWFraW5nKCdicm93c2VyLWF1dG9jb21wbGV0ZScsICdhdXRvY29tcGxldGUnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0aGlzLnNoYXBlZCAmJiAhKHRoaXMuZmlsbGVkIHx8IHRoaXMub3V0bGluZWQgfHwgdGhpcy5pc1NvbG8pKSB7XG4gICAgICBjb25zb2xlV2Fybignc2hhcGVkIHNob3VsZCBiZSB1c2VkIHdpdGggZWl0aGVyIGZpbGxlZCBvciBvdXRsaW5lZCcsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuYXV0b2ZvY3VzICYmIHRoaXMudHJ5QXV0b2ZvY3VzKClcbiAgICB0aGlzLnNldExhYmVsV2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlZml4V2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlcGVuZFdpZHRoKClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gKHRoaXMuaXNCb290ZWQgPSB0cnVlKSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBmb2N1cyAoKSB7XG4gICAgICB0aGlzLm9uRm9jdXMoKVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBibHVyIChlPzogRXZlbnQpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvNTkxM1xuICAgICAgLy8gU2FmYXJpIHRhYiBvcmRlciBnZXRzIGJyb2tlbiBpZiBjYWxsZWQgc3luY2hyb25vdXNcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuYmx1cigpXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xlYXJhYmxlQ2FsbGJhY2sgKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuaW50ZXJuYWxWYWx1ZSA9IG51bGwpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ2FwcGVuZC1vdXRlciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLW91dGVyJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRPdXRlckljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kT3V0ZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlblByZXBlbmRJbm5lclNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlcGVuZElubmVySWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdwcmVwZW5kSW5uZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdpbm5lcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5JY29uU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydhcHBlbmQnXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ2FwcGVuZCddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgY29uc3QgcHJlcGVuZCA9IHRoaXMuZ2VuUHJlcGVuZElubmVyU2xvdCgpXG5cbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIGlucHV0LmNoaWxkcmVuID0gaW5wdXQuY2hpbGRyZW4gfHwgW11cbiAgICAgICAgaW5wdXQuY2hpbGRyZW4udW5zaGlmdChwcmVwZW5kKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9LFxuICAgIGdlbkNsZWFySWNvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuY2xlYXJhYmxlKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5pc0RpcnR5ID8gdW5kZWZpbmVkIDogeyBhdHRyczogeyBkaXNhYmxlZDogdHJ1ZSB9IH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgW1xuICAgICAgICB0aGlzLmdlbkljb24oJ2NsZWFyJywgdGhpcy5jbGVhcmFibGVDYWxsYmFjaywgZGF0YSksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQ291bnRlciAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzQ291bnRlcikgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5jb3VudGVyID09PSB0cnVlID8gdGhpcy5hdHRycyQubWF4bGVuZ3RoIDogdGhpcy5jb3VudGVyXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZDb3VudGVyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5jb21wdXRlZENvdW50ZXJWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5Db250cm9sICgpIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbkNvbnRyb2wuY2FsbCh0aGlzKVxuICAgIH0sXG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5GaWVsZHNldCgpLFxuICAgICAgICB0aGlzLmdlblRleHRGaWVsZFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5DbGVhckljb24oKSxcbiAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5GaWVsZHNldCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSwgW3RoaXMuZ2VuTGVnZW5kKCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dMYWJlbCkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogIXRoaXMuaXNTaW5nbGUgJiYgKHRoaXMuaXNGb2N1c2VkIHx8ICEhdGhpcy52YWxpZGF0aW9uU3RhdGUpLFxuICAgICAgICAgIGZvcjogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIGxlZnQ6IHRoaXMubGFiZWxQb3NpdGlvbi5sZWZ0LFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIHJpZ2h0OiB0aGlzLmxhYmVsUG9zaXRpb24ucmlnaHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubGFiZWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxhYmVsLCBkYXRhLCB0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgZ2VuTGVnZW5kICgpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gIXRoaXMuc2luZ2xlTGluZSAmJiAodGhpcy5sYWJlbFZhbHVlIHx8IHRoaXMuaXNEaXJ0eSkgPyB0aGlzLmxhYmVsV2lkdGggOiAwXG4gICAgICBjb25zdCBzcGFuID0gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiAnJiM4MjAzOycgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdsZWdlbmQnLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6ICF0aGlzLmlzU2luZ2xlID8gY29udmVydFRvVW5pdCh3aWR0aCkgOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9LCBbc3Bhbl0pXG4gICAgfSxcbiAgICBnZW5JbnB1dCAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpc3RlbmVycyQpXG4gICAgICBkZWxldGUgbGlzdGVuZXJzWydjaGFuZ2UnXSAvLyBDaGFuZ2Ugc2hvdWxkIG5vdCBiZSBib3VuZCBleHRlcm5hbGx5XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnbnVtYmVyJyAmJiBPYmplY3QuaXModGhpcy5sYXp5VmFsdWUsIC0wKSkgPyAnLTAnIDogdGhpcy5sYXp5VmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLi4udGhpcy5hdHRycyQsXG4gICAgICAgICAgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcmVhZG9ubHk6IHRoaXMuaXNSZWFkb25seSxcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiBPYmplY3QuYXNzaWduKGxpc3RlbmVycywge1xuICAgICAgICAgIGJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICAgIGlucHV0OiB0aGlzLm9uSW5wdXQsXG4gICAgICAgICAgZm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgfSksXG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzTm9kZSA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuTWVzc2FnZXMuY2FsbCh0aGlzKVxuICAgICAgY29uc3QgY291bnRlck5vZGUgPSB0aGlzLmdlbkNvdW50ZXIoKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fZGV0YWlscycsXG4gICAgICB9LCBbXG4gICAgICAgIG1lc3NhZ2VzTm9kZSxcbiAgICAgICAgY291bnRlck5vZGUsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuVGV4dEZpZWxkU2xvdCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fc2xvdCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy5wcmVmaXggPyB0aGlzLmdlbkFmZml4KCdwcmVmaXgnKSA6IG51bGwsXG4gICAgICAgIHRoaXMuZ2VuSW5wdXQoKSxcbiAgICAgICAgdGhpcy5zdWZmaXggPyB0aGlzLmdlbkFmZml4KCdzdWZmaXgnKSA6IG51bGwsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQWZmaXggKHR5cGU6ICdwcmVmaXgnIHwgJ3N1ZmZpeCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBgdi10ZXh0LWZpZWxkX18ke3R5cGV9YCxcbiAgICAgICAgcmVmOiB0eXBlLFxuICAgICAgfSwgdGhpc1t0eXBlXSlcbiAgICB9LFxuICAgIG9uQmx1ciAoZT86IEV2ZW50KSB7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICBlICYmIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJGVtaXQoJ2JsdXInLCBlKSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNEaXNhYmxlZCB8fCAhdGhpcy4kcmVmcy5pbnB1dCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgIH0sXG4gICAgb25Gb2N1cyAoZT86IEV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuaW5wdXQpIHJldHVyblxuXG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy4kcmVmcy5pbnB1dCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIGUgJiYgdGhpcy4kZW1pdCgnZm9jdXMnLCBlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25JbnB1dCAoZTogRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgdGhpcy5iYWRJbnB1dCA9IHRhcmdldC52YWxpZGl0eSAmJiB0YXJnZXQudmFsaWRpdHkuYmFkSW5wdXRcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIpIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuaW50ZXJuYWxWYWx1ZSlcblxuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlRG93biAoZTogRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgaW5wdXQgZnJvbSBiZWluZyBibHVycmVkXG4gICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuJHJlZnMuaW5wdXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgVklucHV0Lm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlRG93bi5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5oYXNNb3VzZURvd24pIHRoaXMuZm9jdXMoKVxuXG4gICAgICBWSW5wdXQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBzZXRMYWJlbFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMubGFiZWxXaWR0aCA9IHRoaXMuJHJlZnMubGFiZWxcbiAgICAgICAgPyBNYXRoLm1pbih0aGlzLiRyZWZzLmxhYmVsLnNjcm9sbFdpZHRoICogMC43NSArIDYsICh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudCkub2Zmc2V0V2lkdGggLSAyNClcbiAgICAgICAgOiAwXG4gICAgfSxcbiAgICBzZXRQcmVmaXhXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMucHJlZml4KSByZXR1cm5cblxuICAgICAgdGhpcy5wcmVmaXhXaWR0aCA9IHRoaXMuJHJlZnMucHJlZml4Lm9mZnNldFdpZHRoXG4gICAgfSxcbiAgICBzZXRQcmVwZW5kV2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkIHx8ICF0aGlzLiRyZWZzWydwcmVwZW5kLWlubmVyJ10pIHJldHVyblxuXG4gICAgICB0aGlzLnByZXBlbmRXaWR0aCA9IHRoaXMuJHJlZnNbJ3ByZXBlbmQtaW5uZXInXS5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgdHJ5QXV0b2ZvY3VzICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuYXV0b2ZvY3VzIHx8XG4gICAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaW5wdXQgfHxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgKSByZXR1cm4gZmFsc2VcblxuICAgICAgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICB1cGRhdGVWYWx1ZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBTZXRzIHZhbGlkYXRpb25TdGF0ZSBmcm9tIHZhbGlkYXRhYmxlXG4gICAgICB0aGlzLmhhc0NvbG9yID0gdmFsXG5cbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5sYXp5VmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5sYXp5VmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4vVlByb2dyZXNzTGluZWFyJ1xuXG5leHBvcnQgeyBWUHJvZ3Jlc3NMaW5lYXIgfVxuZXhwb3J0IGRlZmF1bHQgVlByb2dyZXNzTGluZWFyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ2NvbXBhcmFibGUnLFxuICBwcm9wczoge1xuICAgIHZhbHVlQ29tcGFyYXRvcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBkZWVwRXF1YWwsXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPHR5cGVvZiBkZWVwRXF1YWw+LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZW51LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vVlRoZW1lUHJvdmlkZXInXG5cbi8vIE1peGluc1xuaW1wb3J0IEFjdGl2YXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9hY3RpdmF0YWJsZSdcbmltcG9ydCBEZWxheWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2RlbGF5YWJsZSdcbmltcG9ydCBEZXBlbmRlbnQgZnJvbSAnLi4vLi4vbWl4aW5zL2RlcGVuZGVudCdcbmltcG9ydCBEZXRhY2hhYmxlIGZyb20gJy4uLy4uL21peGlucy9kZXRhY2hhYmxlJ1xuaW1wb3J0IE1lbnVhYmxlIGZyb20gJy4uLy4uL21peGlucy9tZW51YWJsZSdcbmltcG9ydCBSZXR1cm5hYmxlIGZyb20gJy4uLy4uL21peGlucy9yZXR1cm5hYmxlJ1xuaW1wb3J0IFJvdW5kYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91bmRhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlJ1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgcmVtb3ZlZCB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGtleUNvZGVzLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFZOb2RlRGF0YSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgRGVwZW5kZW50LFxuICBEZWxheWFibGUsXG4gIERldGFjaGFibGUsXG4gIE1lbnVhYmxlLFxuICBSZXR1cm5hYmxlLFxuICBSb3VuZGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIFRoZW1lYWJsZVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1tZW51JyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc0luTWVudTogdHJ1ZSxcbiAgICAgIC8vIFBhc3MgdGhlbWUgdGhyb3VnaCB0byBkZWZhdWx0IHNsb3RcbiAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgIH1cbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICAgIFJlc2l6ZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGF1dG86IEJvb2xlYW4sXG4gICAgY2xvc2VPbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUtleXM6IEJvb2xlYW4sXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgb2Zmc2V0WDogQm9vbGVhbixcbiAgICBvZmZzZXRZOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5PbkhvdmVyOiBCb29sZWFuLFxuICAgIG9yaWdpbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RvcCBsZWZ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ3YtbWVudS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWxjdWxhdGVkVG9wQXV0bzogMCxcbiAgICAgIGRlZmF1bHRPZmZzZXQ6IDgsXG4gICAgICBoYXNKdXN0Rm9jdXNlZDogZmFsc2UsXG4gICAgICBsaXN0SW5kZXg6IC0xLFxuICAgICAgcmVzaXplVGltZW91dDogMCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgIHRpbGVzOiBbXSBhcyBIVE1MRWxlbWVudFtdLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFjdGl2ZVRpbGUgKCk6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XVxuICAgIH0sXG4gICAgY2FsY3VsYXRlZExlZnQgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBtZW51V2lkdGggPSBNYXRoLm1heCh0aGlzLmRpbWVuc2lvbnMuY29udGVudC53aWR0aCwgcGFyc2VGbG9hdCh0aGlzLmNhbGN1bGF0ZWRNaW5XaWR0aCkpXG5cbiAgICAgIGlmICghdGhpcy5hdXRvKSByZXR1cm4gdGhpcy5jYWxjTGVmdChtZW51V2lkdGgpIHx8ICcwJ1xuXG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmNhbGNYT3ZlcmZsb3codGhpcy5jYWxjTGVmdEF1dG8oKSwgbWVudVdpZHRoKSkgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4SGVpZ2h0ICgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hdXRvXG4gICAgICAgID8gJzIwMHB4J1xuICAgICAgICA6IGNvbnZlcnRUb1VuaXQodGhpcy5tYXhIZWlnaHQpXG5cbiAgICAgIHJldHVybiBoZWlnaHQgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4V2lkdGggKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLm1heFdpZHRoKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRNaW5XaWR0aCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLm1pbldpZHRoKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMubWluV2lkdGgpIHx8ICcwJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWluKFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yLndpZHRoICtcbiAgICAgICAgTnVtYmVyKHRoaXMubnVkZ2VXaWR0aCkgK1xuICAgICAgICAodGhpcy5hdXRvID8gMTYgOiAwKSxcbiAgICAgICAgTWF0aC5tYXgodGhpcy5wYWdlV2lkdGggLSAyNCwgMClcbiAgICAgIClcblxuICAgICAgY29uc3QgY2FsY3VsYXRlZE1heFdpZHRoID0gaXNOYU4ocGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpKVxuICAgICAgICA/IG1pbldpZHRoXG4gICAgICAgIDogcGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpXG5cbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KE1hdGgubWluKFxuICAgICAgICBjYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIG1pbldpZHRoXG4gICAgICApKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRUb3AgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCB0b3AgPSAhdGhpcy5hdXRvXG4gICAgICAgID8gdGhpcy5jYWxjVG9wKClcbiAgICAgICAgOiBjb252ZXJ0VG9Vbml0KHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNhbGN1bGF0ZWRUb3BBdXRvKSlcblxuICAgICAgcmV0dXJuIHRvcCB8fCAnMCdcbiAgICB9LFxuICAgIGhhc0NsaWNrYWJsZVRpbGVzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudGlsZXMuZmluZCh0aWxlID0+IHRpbGUudGFiSW5kZXggPiAtMSkpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuY2FsY3VsYXRlZE1heEhlaWdodCxcbiAgICAgICAgbWluV2lkdGg6IHRoaXMuY2FsY3VsYXRlZE1pbldpZHRoLFxuICAgICAgICBtYXhXaWR0aDogdGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIHRvcDogdGhpcy5jYWxjdWxhdGVkVG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLmNhbGN1bGF0ZWRMZWZ0LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICB6SW5kZXg6IHRoaXMuekluZGV4IHx8IHRoaXMuYWN0aXZlWkluZGV4LFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZSAodmFsKSB7XG4gICAgICBpZiAoIXZhbCkgdGhpcy5saXN0SW5kZXggPSAtMVxuICAgIH0sXG4gICAgaXNDb250ZW50QWN0aXZlICh2YWwpIHtcbiAgICAgIHRoaXMuaGFzSnVzdEZvY3VzZWQgPSB2YWxcbiAgICB9LFxuICAgIGxpc3RJbmRleCAobmV4dCwgcHJldikge1xuICAgICAgaWYgKG5leHQgaW4gdGhpcy50aWxlcykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1tuZXh0XVxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zY3JvbGxUb3AgPSB0aWxlLm9mZnNldFRvcCAtIHRpbGUuY2xpZW50SGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHByZXYgaW4gdGhpcy50aWxlcyAmJlxuICAgICAgICB0aGlzLnRpbGVzW3ByZXZdLmNsYXNzTGlzdC5yZW1vdmUoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnZnVsbC13aWR0aCcpKSB7XG4gICAgICByZW1vdmVkKCdmdWxsLXdpZHRoJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLmNhbGxBY3RpdmF0ZSgpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucyBvZiBtZW51XG4gICAgICAvLyBhbmQgaXRzIGFjdGl2YXRvclxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICAgIC8vIFN0YXJ0IHRoZSB0cmFuc2l0aW9uXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAvLyBPbmNlIHRyYW5zaXRpb25pbmcsIGNhbGN1bGF0ZSBzY3JvbGwgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICB0aGlzLnN0YXJ0VHJhbnNpdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFRvcEF1dG8gPSB0aGlzLmNhbGNUb3BBdXRvKClcbiAgICAgICAgICAgIHRoaXMuYXV0byAmJiAodGhpcy4kcmVmcy5jb250ZW50LnNjcm9sbFRvcCA9IHRoaXMuY2FsY1Njcm9sbFBvc2l0aW9uKCkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNhbGNTY3JvbGxQb3NpdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSAkZWwucXVlcnlTZWxlY3RvcignLnYtbGlzdC1pdGVtLS1hY3RpdmUnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgbWF4U2Nyb2xsVG9wID0gJGVsLnNjcm9sbEhlaWdodCAtICRlbC5vZmZzZXRIZWlnaHRcblxuICAgICAgcmV0dXJuIGFjdGl2ZVRpbGVcbiAgICAgICAgPyBNYXRoLm1pbihtYXhTY3JvbGxUb3AsIE1hdGgubWF4KDAsIGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gJGVsLm9mZnNldEhlaWdodCAvIDIgKyBhY3RpdmVUaWxlLm9mZnNldEhlaWdodCAvIDIpKVxuICAgICAgICA6ICRlbC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGNhbGNMZWZ0QXV0byAoKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvci5sZWZ0IC0gdGhpcy5kZWZhdWx0T2Zmc2V0ICogMilcbiAgICB9LFxuICAgIGNhbGNUb3BBdXRvICgpIHtcbiAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgY29uc3QgYWN0aXZlVGlsZSA9ICRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0tLWFjdGl2ZScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuXG4gICAgICBpZiAoIWFjdGl2ZVRpbGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vZmZzZXRZIHx8ICFhY3RpdmVUaWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IEFycmF5LmZyb20odGhpcy50aWxlcykuaW5kZXhPZihhY3RpdmVUaWxlKVxuXG4gICAgICBjb25zdCB0aWxlRGlzdGFuY2VGcm9tTWVudVRvcCA9IGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gdGhpcy5jYWxjU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgY29uc3QgZmlyc3RUaWxlT2Zmc2V0VG9wID0gKCRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0nKSBhcyBIVE1MRWxlbWVudCkub2Zmc2V0VG9wXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wIC0gdGlsZURpc3RhbmNlRnJvbU1lbnVUb3AgLSBmaXJzdFRpbGVPZmZzZXRUb3AgLSAxXG4gICAgfSxcbiAgICBjaGFuZ2VMaXN0SW5kZXggKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIC8vIEZvciBpbmZpbml0ZSBzY3JvbGwgYW5kIGF1dG9jb21wbGV0ZSwgcmUtZXZhbHVhdGUgY2hpbGRyZW5cbiAgICAgIHRoaXMuZ2V0VGlsZXMoKVxuXG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgIXRoaXMuaGFzQ2xpY2thYmxlVGlsZXMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5kb3duKSB7XG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLnVwKSB7XG4gICAgICAgIHRoaXMucHJldlRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyICYmIHRoaXMubGlzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XS5jbGljaygpXG4gICAgICB9IGVsc2UgeyByZXR1cm4gfVxuICAgICAgLy8gT25lIG9mIHRoZSBjb25kaXRpb25zIHdhcyBtZXQsIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKCMyOTg4KVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSxcbiAgICBjbG9zZUNvbmRpdGlvbmFsIChlOiBFdmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgIXRoaXMuX2lzRGVzdHJveWVkICYmXG4gICAgICAgIHRoaXMuY2xvc2VPbkNsaWNrICYmXG4gICAgICAgICF0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnModGFyZ2V0KVxuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yQXR0cmlidXRlcyAoKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckF0dHJpYnV0ZXMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVUaWxlICYmIHRoaXMuYWN0aXZlVGlsZS5pZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IHRoaXMuYWN0aXZlVGlsZS5pZCxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlc1xuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IE1lbnVhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JMaXN0ZW5lcnMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZUtleXMpIHtcbiAgICAgICAgbGlzdGVuZXJzLmtleWRvd24gPSB0aGlzLm9uS2V5RG93blxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZW5Db250ZW50KClcblxuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBjb250ZW50XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sIFtjb250ZW50XSlcbiAgICB9LFxuICAgIGdlbkRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10ge1xuICAgICAgY29uc3QgZGlyZWN0aXZlczogVk5vZGVEaXJlY3RpdmVbXSA9IFt7XG4gICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuaXNDb250ZW50QWN0aXZlLFxuICAgICAgfV1cblxuICAgICAgLy8gRG8gbm90IGFkZCBjbGljayBvdXRzaWRlIGZvciBob3ZlciBtZW51XG4gICAgICBpZiAoIXRoaXMub3Blbk9uSG92ZXIgJiYgdGhpcy5jbG9zZU9uQ2xpY2spIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnY2xpY2stb3V0c2lkZScsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0sXG4gICAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgICAgICBpbmNsdWRlOiAoKSA9PiBbdGhpcy4kZWwsIC4uLnRoaXMuZ2V0T3BlbkRlcGVuZGVudEVsZW1lbnRzKCldLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RpdmVzXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLnRoaXMuZ2V0U2NvcGVJZEF0dHJzKCksXG4gICAgICAgICAgcm9sZTogJ3JvbGUnIGluIHRoaXMuJGF0dHJzID8gdGhpcy4kYXR0cnMucm9sZSA6ICdtZW51JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIC4uLnRoaXMucm9vdFRoZW1lQ2xhc3NlcyxcbiAgICAgICAgICAuLi50aGlzLnJvdW5kZWRDbGFzc2VzLFxuICAgICAgICAgICd2LW1lbnVfX2NvbnRlbnQtLWF1dG8nOiB0aGlzLmF1dG8sXG4gICAgICAgICAgJ3YtbWVudV9fY29udGVudC0tZml4ZWQnOiB0aGlzLmFjdGl2YXRvckZpeGVkLFxuICAgICAgICAgIG1lbnVhYmxlX19jb250ZW50X19hY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICAgW3RoaXMuY29udGVudENsYXNzLnRyaW0oKV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5nZW5EaXJlY3RpdmVzKCksXG4gICAgICAgIHJlZjogJ2NvbnRlbnQnLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlT25Db250ZW50Q2xpY2spIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIH0sXG4gICAgICB9IGFzIFZOb2RlRGF0YVxuXG4gICAgICBpZiAodGhpcy4kbGlzdGVuZXJzLnNjcm9sbCkge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLnNjcm9sbCA9IHRoaXMuJGxpc3RlbmVycy5zY3JvbGxcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMub3Blbk9uSG92ZXIpIHtcbiAgICAgICAgb3B0aW9ucy5vbiA9IG9wdGlvbnMub24gfHwge31cbiAgICAgICAgb3B0aW9ucy5vbi5tb3VzZWVudGVyID0gdGhpcy5tb3VzZUVudGVySGFuZGxlclxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcGVuT25Ib3Zlcikge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLm1vdXNlbGVhdmUgPSB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCBvcHRpb25zLCB0aGlzLmdldENvbnRlbnRTbG90KCkpXG4gICAgfSxcbiAgICBnZXRUaWxlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuY29udGVudCkgcmV0dXJuXG5cbiAgICAgIHRoaXMudGlsZXMgPSBBcnJheS5mcm9tKHRoaXMuJHJlZnMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1saXN0LWl0ZW0nKSlcbiAgICB9LFxuICAgIG1vdXNlRW50ZXJIYW5kbGVyICgpIHtcbiAgICAgIHRoaXMucnVuRGVsYXkoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0p1c3RGb2N1c2VkKSByZXR1cm5cblxuICAgICAgICB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIG1vdXNlTGVhdmVIYW5kbGVyIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgcmUtYWN0aXZhdGlvblxuICAgICAgdGhpcy5ydW5EZWxheSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkgcmV0dXJuXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgICAgICB0aGlzLmNhbGxEZWFjdGl2YXRlKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBuZXh0VGlsZSAoKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleCArIDFdXG5cbiAgICAgIGlmICghdGlsZSkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgICB0aGlzLmxpc3RJbmRleCA9IC0xXG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RJbmRleCsrXG4gICAgICBpZiAodGlsZS50YWJJbmRleCA9PT0gLTEpIHRoaXMubmV4dFRpbGUoKVxuICAgIH0sXG4gICAgcHJldlRpbGUgKCkge1xuICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXggLSAxXVxuXG4gICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5saXN0SW5kZXggPSB0aGlzLnRpbGVzLmxlbmd0aFxuICAgICAgICB0aGlzLnByZXZUaWxlKClcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0SW5kZXgtLVxuICAgICAgaWYgKHRpbGUudGFiSW5kZXggPT09IC0xKSB0aGlzLnByZXZUaWxlKClcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGRlcGVuZGVudCBlbGVtZW50cyB0byBjbG9zZSBmaXJzdFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvciA9IHRoaXMuZ2V0QWN0aXZhdG9yKClcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gYWN0aXZhdG9yICYmIGFjdGl2YXRvci5mb2N1cygpKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgW2tleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duXS5pbmNsdWRlcyhlLmtleUNvZGUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gQWxsb3cgZm9yIGlzQWN0aXZlIHdhdGNoZXIgdG8gZ2VuZXJhdGUgdGlsZSBsaXN0XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLmNoYW5nZUxpc3RJbmRleChlKSlcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIHNjcmVlbiByZXNpemVcbiAgICAgIC8vIGFuZCBvcmllbnRhdGlvbiBjaGFuZ2VcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcblxuICAgICAgLy8gV2hlbiByZXNpemluZyB0byBhIHNtYWxsZXIgd2lkdGhcbiAgICAgIC8vIGNvbnRlbnQgd2lkdGggaXMgZXZhbHVhdGVkIGJlZm9yZVxuICAgICAgLy8gdGhlIG5ldyBhY3RpdmF0b3Igd2lkdGggaGFzIGJlZW5cbiAgICAgIC8vIHNldCwgY2F1c2luZyBpdCB0byBub3Qgc2l6ZSBwcm9wZXJseVxuICAgICAgLy8gaGFja3kgYnV0IHdpbGwgcmV2aXNpdCBpbiB0aGUgZnV0dXJlXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KVxuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy51cGRhdGVEaW1lbnNpb25zLCAxMDApXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tZW51JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LW1lbnUtLWF0dGFjaGVkJzpcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gJycgfHxcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gdHJ1ZSB8fFxuICAgICAgICAgIHRoaXMuYXR0YWNoID09PSAnYXR0YWNoJyxcbiAgICAgIH0sXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBhcmc6ICc1MDAnLFxuICAgICAgICBuYW1lOiAncmVzaXplJyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25SZXNpemUsXG4gICAgICB9XSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgIXRoaXMuYWN0aXZhdG9yICYmIHRoaXMuZ2VuQWN0aXZhdG9yKCksXG4gICAgICB0aGlzLnNob3dMYXp5Q29udGVudCgoKSA9PiBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRoZW1lUHJvdmlkZXIsIHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIFt0aGlzLmdlblRyYW5zaXRpb24oKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IFZNZW51IGZyb20gJy4vVk1lbnUnXG5cbmV4cG9ydCB7IFZNZW51IH1cbmV4cG9ydCBkZWZhdWx0IFZNZW51XG4iLCIvLyBNaXhpbnNcbmltcG9ydCBQb3NpdGlvbmFibGUgZnJvbSAnLi4vcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFN0YWNrYWJsZSBmcm9tICcuLi9zdGFja2FibGUnXG5pbXBvcnQgQWN0aXZhdGFibGUgZnJvbSAnLi4vYWN0aXZhdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgU3RhY2thYmxlLFxuICBQb3NpdGlvbmFibGUsXG4gIEFjdGl2YXRhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICBhdHRhY2g6IGJvb2xlYW4gfCBzdHJpbmcgfCBFbGVtZW50XG4gIG9mZnNldFk6IGJvb2xlYW5cbiAgb2Zmc2V0WDogYm9vbGVhblxuICAkcmVmczoge1xuICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50XG4gICAgYWN0aXZhdG9yOiBIVE1MRWxlbWVudFxuICB9XG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdtZW51YWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBhbGxvd092ZXJmbG93OiBCb29sZWFuLFxuICAgIGxpZ2h0OiBCb29sZWFuLFxuICAgIGRhcms6IEJvb2xlYW4sXG4gICAgbWF4V2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBtaW5XaWR0aDogW051bWJlciwgU3RyaW5nXSxcbiAgICBudWRnZUJvdHRvbToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZUxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VSaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVRvcDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVdpZHRoOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG9mZnNldE92ZXJmbG93OiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiBCb29sZWFuLFxuICAgIHBvc2l0aW9uWDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHBvc2l0aW9uWToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGFic29sdXRlWDogMCxcbiAgICBhYnNvbHV0ZVk6IDAsXG4gICAgYWN0aXZhdGVkQnk6IG51bGwgYXMgRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGFjdGl2YXRvckZpeGVkOiBmYWxzZSxcbiAgICBkaW1lbnNpb25zOiB7XG4gICAgICBhY3RpdmF0b3I6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBvZmZzZXRUb3A6IDAsXG4gICAgICAgIHNjcm9sbEhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0VG9wOiAwLFxuICAgICAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaGFzSnVzdEZvY3VzZWQ6IGZhbHNlLFxuICAgIGhhc1dpbmRvdzogZmFsc2UsXG4gICAgaW5wdXRBY3RpdmF0b3I6IGZhbHNlLFxuICAgIGlzQ29udGVudEFjdGl2ZTogZmFsc2UsXG4gICAgcGFnZVdpZHRoOiAwLFxuICAgIHBhZ2VZT2Zmc2V0OiAwLFxuICAgIHN0YWNrQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQtLWFjdGl2ZScsXG4gICAgc3RhY2tNaW5aSW5kZXg6IDYsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRMZWZ0ICgpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2YXRvckxlZnQgPSAodGhpcy5hdHRhY2ggIT09IGZhbHNlID8gYS5vZmZzZXRMZWZ0IDogYS5sZWZ0KSB8fCAwXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWF4KGEud2lkdGgsIGMud2lkdGgpXG4gICAgICBsZXQgbGVmdCA9IDBcbiAgICAgIGxlZnQgKz0gdGhpcy5sZWZ0ID8gYWN0aXZhdG9yTGVmdCAtIChtaW5XaWR0aCAtIGEud2lkdGgpIDogYWN0aXZhdG9yTGVmdFxuICAgICAgaWYgKHRoaXMub2Zmc2V0WCkge1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IGlzTmFOKE51bWJlcih0aGlzLm1heFdpZHRoKSlcbiAgICAgICAgICA/IGEud2lkdGhcbiAgICAgICAgICA6IE1hdGgubWluKGEud2lkdGgsIE51bWJlcih0aGlzLm1heFdpZHRoKSlcblxuICAgICAgICBsZWZ0ICs9IHRoaXMubGVmdCA/IC1tYXhXaWR0aCA6IGEud2lkdGhcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm51ZGdlTGVmdCkgbGVmdCAtPSBwYXJzZUludCh0aGlzLm51ZGdlTGVmdClcbiAgICAgIGlmICh0aGlzLm51ZGdlUmlnaHQpIGxlZnQgKz0gcGFyc2VJbnQodGhpcy5udWRnZVJpZ2h0KVxuXG4gICAgICByZXR1cm4gbGVmdFxuICAgIH0sXG4gICAgY29tcHV0ZWRUb3AgKCkge1xuICAgICAgY29uc3QgYSA9IHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3JcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmRpbWVuc2lvbnMuY29udGVudFxuICAgICAgbGV0IHRvcCA9IDBcblxuICAgICAgaWYgKHRoaXMudG9wKSB0b3AgKz0gYS5oZWlnaHQgLSBjLmhlaWdodFxuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgdG9wICs9IGEub2Zmc2V0VG9wXG4gICAgICBlbHNlIHRvcCArPSBhLnRvcCArIHRoaXMucGFnZVlPZmZzZXRcbiAgICAgIGlmICh0aGlzLm9mZnNldFkpIHRvcCArPSB0aGlzLnRvcCA/IC1hLmhlaWdodCA6IGEuaGVpZ2h0XG4gICAgICBpZiAodGhpcy5udWRnZVRvcCkgdG9wIC09IHBhcnNlSW50KHRoaXMubnVkZ2VUb3ApXG4gICAgICBpZiAodGhpcy5udWRnZUJvdHRvbSkgdG9wICs9IHBhcnNlSW50KHRoaXMubnVkZ2VCb3R0b20pXG5cbiAgICAgIHJldHVybiB0b3BcbiAgICB9LFxuICAgIGhhc0FjdGl2YXRvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLiRzY29wZWRTbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLmFjdGl2YXRvciB8fCAhIXRoaXMuaW5wdXRBY3RpdmF0b3JcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZGlzYWJsZWQgKHZhbCkge1xuICAgICAgdmFsICYmIHRoaXMuY2FsbERlYWN0aXZhdGUoKVxuICAgIH0sXG4gICAgaXNBY3RpdmUgKHZhbCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVyblxuXG4gICAgICB2YWwgPyB0aGlzLmNhbGxBY3RpdmF0ZSgpIDogdGhpcy5jYWxsRGVhY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBwb3NpdGlvblg6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgICBwb3NpdGlvblk6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy5oYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhYnNvbHV0ZVBvc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uWCB8fCB0aGlzLmFic29sdXRlWCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb25YIHx8IHRoaXMuYWJzb2x1dGVYLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZhdGUgKCkge30sXG4gICAgY2FsY0xlZnQgKG1lbnVXaWR0aDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmF0dGFjaCAhPT0gZmFsc2VcbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkTGVmdFxuICAgICAgICA6IHRoaXMuY2FsY1hPdmVyZmxvdyh0aGlzLmNvbXB1dGVkTGVmdCwgbWVudVdpZHRoKSlcbiAgICB9LFxuICAgIGNhbGNUb3AgKCkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5hdHRhY2ggIT09IGZhbHNlXG4gICAgICAgID8gdGhpcy5jb21wdXRlZFRvcFxuICAgICAgICA6IHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNvbXB1dGVkVG9wKSlcbiAgICB9LFxuICAgIGNhbGNYT3ZlcmZsb3cgKGxlZnQ6IG51bWJlciwgbWVudVdpZHRoOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHhPdmVyZmxvdyA9IGxlZnQgKyBtZW51V2lkdGggLSB0aGlzLnBhZ2VXaWR0aCArIDEyXG5cbiAgICAgIGlmICgoIXRoaXMubGVmdCB8fCB0aGlzLnJpZ2h0KSAmJiB4T3ZlcmZsb3cgPiAwKSB7XG4gICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0IC0geE92ZXJmbG93LCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIDEyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVmdCArIHRoaXMuZ2V0T2Zmc2V0TGVmdCgpXG4gICAgfSxcbiAgICBjYWxjWU92ZXJmbG93ICh0b3A6IG51bWJlcikge1xuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KClcbiAgICAgIGNvbnN0IHRvVG9wID0gdGhpcy5wYWdlWU9mZnNldCArIGRvY3VtZW50SGVpZ2h0XG4gICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnQuaGVpZ2h0XG4gICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRvcCArIGNvbnRlbnRIZWlnaHRcbiAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSB0b1RvcCA8IHRvdGFsSGVpZ2h0XG5cbiAgICAgIC8vIElmIG92ZXJmbG93aW5nIGJvdHRvbSBhbmQgb2Zmc2V0XG4gICAgICAvLyBUT0RPOiBzZXQgJ2JvdHRvbScgcG9zaXRpb24gaW5zdGVhZCBvZiAndG9wJ1xuICAgICAgaWYgKGlzT3ZlcmZsb3dpbmcgJiZcbiAgICAgICAgdGhpcy5vZmZzZXRPdmVyZmxvdyAmJlxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGVub3VnaCByb29tIHRvIG9mZnNldFxuICAgICAgICAvLyB0aGUgb3ZlcmZsb3csIGRvbid0IG9mZnNldFxuICAgICAgICBhY3RpdmF0b3IudG9wID4gY29udGVudEhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAoYWN0aXZhdG9yLnRvcCAtIGNvbnRlbnRIZWlnaHQpXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyBib3R0b21cbiAgICAgIH0gZWxzZSBpZiAoaXNPdmVyZmxvd2luZyAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRvVG9wIC0gY29udGVudEhlaWdodCAtIDEyXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyB0b3BcbiAgICAgIH0gZWxzZSBpZiAodG9wIDwgdGhpcy5wYWdlWU9mZnNldCAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAxMlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9wIDwgMTIgPyAxMiA6IHRvcFxuICAgIH0sXG4gICAgY2FsbEFjdGl2YXRlICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVyblxuXG4gICAgICB0aGlzLmFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNhbGxEZWFjdGl2YXRlICgpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gZmFsc2VcblxuICAgICAgdGhpcy5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNoZWNrRm9yUGFnZVlPZmZzZXQgKCkge1xuICAgICAgaWYgKHRoaXMuaGFzV2luZG93KSB7XG4gICAgICAgIHRoaXMucGFnZVlPZmZzZXQgPSB0aGlzLmFjdGl2YXRvckZpeGVkID8gMCA6IHRoaXMuZ2V0T2Zmc2V0VG9wKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrQWN0aXZhdG9yRml4ZWQgKCkge1xuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgcmV0dXJuXG4gICAgICBsZXQgZWwgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSBmYWxzZVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSAoKSB7fSxcbiAgICBnZW5BY3RpdmF0b3JMaXN0ZW5lcnMgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckxpc3RlbmVycy5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IG9uQ2xpY2sgPSBsaXN0ZW5lcnMuY2xpY2tcblxuICAgICAgbGlzdGVuZXJzLmNsaWNrID0gKGU6IE1vdXNlRXZlbnQgJiBLZXlib2FyZEV2ZW50ICYgRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcGVuT25DbGljaykge1xuICAgICAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hYnNvbHV0ZVggPSBlLmNsaWVudFhcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVkgPSBlLmNsaWVudFlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVyc1xuICAgIH0sXG4gICAgZ2V0SW5uZXJIZWlnaHQgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfSxcbiAgICBnZXRPZmZzZXRMZWZ0ICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICB9LFxuICAgIGdldE9mZnNldFRvcCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGdldFJvdW5kZWRCb3VuZGVkQ2xpZW50UmVjdCAoZWw6IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGgucm91bmQocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5yb3VuZChyZWN0LnJpZ2h0KSxcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQocmVjdC53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChyZWN0LmhlaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWFzdXJlIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICghZWwgfHwgIXRoaXMuaGFzV2luZG93KSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSb3VuZGVkQm91bmRlZENsaWVudFJlY3QoZWwpXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIGFjdGl2YXRvciBtYXJnaW5cbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcblxuICAgICAgICByZWN0LmxlZnQgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0ISlcbiAgICAgICAgcmVjdC50b3AgPSBwYXJzZUludChzdHlsZS5tYXJnaW5Ub3AhKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdFxuICAgIH0sXG4gICAgc25lYWtQZWVrIChjYjogKCkgPT4gdm9pZCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcblxuICAgICAgICBpZiAoIWVsIHx8IGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgIGNiKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICBjYigpXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdGFydFRyYW5zaXRpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbnRlbnRBY3RpdmUgPSB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdGhpcy5pc0FjdGl2ZVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgdXBkYXRlRGltZW5zaW9ucyAoKSB7XG4gICAgICB0aGlzLmhhc1dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICB0aGlzLmNoZWNrQWN0aXZhdG9yRml4ZWQoKVxuICAgICAgdGhpcy5jaGVja0ZvclBhZ2VZT2Zmc2V0KClcbiAgICAgIHRoaXMucGFnZVdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbnM6IGFueSA9IHtcbiAgICAgICAgYWN0aXZhdG9yOiB7IC4uLnRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3IgfSxcbiAgICAgICAgY29udGVudDogeyAuLi50aGlzLmRpbWVuc2lvbnMuY29udGVudCB9LFxuICAgICAgfVxuXG4gICAgICAvLyBBY3RpdmF0b3Igc2hvdWxkIGFscmVhZHkgYmUgc2hvd25cbiAgICAgIGlmICghdGhpcy5oYXNBY3RpdmF0b3IgfHwgdGhpcy5hYnNvbHV0ZSkge1xuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICAgIGlmICghYWN0aXZhdG9yKSByZXR1cm5cblxuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMubWVhc3VyZShhY3RpdmF0b3IpXG4gICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldExlZnQgPSBhY3RpdmF0b3Iub2Zmc2V0TGVmdFxuICAgICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgY3NzIHBhZGRpbmcgY2F1c2luZyB0aGluZ3MgdG8gbm90IGxpbmUgdXBcbiAgICAgICAgICAvLyB0aGlzIGlzIG1vc3RseSBmb3Igdi1hdXRvY29tcGxldGUsIGhvcGVmdWxseSBpdCB3b24ndCBicmVhayBhbnl0aGluZ1xuICAgICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldFRvcCA9IGFjdGl2YXRvci5vZmZzZXRUb3BcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRUb3AgPSAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBhbmQgaGlkZSB0byBnZXQgZGltZW5zaW9uc1xuICAgICAgdGhpcy5zbmVha1BlZWsoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQgJiYgKGRpbWVuc2lvbnMuY29udGVudCA9IHRoaXMubWVhc3VyZSh0aGlzLiRyZWZzLmNvbnRlbnQpKVxuXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd0cmFuc2l0aW9uYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlOiBTdHJpbmcsXG4gICAgb3JpZ2luOiBTdHJpbmcsXG4gICAgdHJhbnNpdGlvbjogU3RyaW5nLFxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqXG4gKiBBZGRzIHRoZSBrZXktdmFsdWUgYHBhaXJgIHRvIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gcGFpciBUaGUga2V5LXZhbHVlIHBhaXIgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAqL1xuZnVuY3Rpb24gYWRkTWFwRW50cnkobWFwLCBwYWlyKSB7XG4gIC8vIERvbid0IHJldHVybiBgbWFwLnNldGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIG1hcC5zZXQocGFpclswXSwgcGFpclsxXSk7XG4gIHJldHVybiBtYXA7XG59XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgc2V0YC5cbiAqL1xuZnVuY3Rpb24gYWRkU2V0RW50cnkoc2V0LCB2YWx1ZSkge1xuICAvLyBEb24ndCByZXR1cm4gYHNldC5hZGRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBzZXQuYWRkKHZhbHVlKTtcbiAgcmV0dXJuIHNldDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpLFxuICAgIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfX1snZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBjYWNoZSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChjYWNoZSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGNhY2hlLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjYWNoZSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGNhY2hlLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNGdWxsXSBTcGVjaWZ5IGEgY2xvbmUgaW5jbHVkaW5nIHN5bWJvbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGlzRGVlcCwgaXNGdWxsLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgaWYgKGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVPYmplY3QoaXNGdW5jID8ge30gOiB2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGJhc2VDbG9uZSwgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoIWlzQXJyKSB7XG4gICAgdmFyIHByb3BzID0gaXNGdWxsID8gZ2V0QWxsS2V5cyh2YWx1ZSkgOiBrZXlzKHZhbHVlKTtcbiAgfVxuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGlzRGVlcCwgaXNGdWxsLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDcmVhdGUocHJvdG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHByb3RvKSA/IG9iamVjdENyZWF0ZShwcm90bykgOiB7fTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihidWZmZXIubGVuZ3RoKTtcbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCB0cnVlKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKHNldFRvQXJyYXkoc2V0KSwgdHJ1ZSkgOiBzZXRUb0FycmF5KHNldCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkU2V0RW50cnksIG5ldyBzZXQuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gc291cmNlW2tleV0gOiBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbCBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbCBwcm9wZXJ0aWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gbmF0aXZlR2V0U3ltYm9scyA/IG92ZXJBcmcobmF0aXZlR2V0U3ltYm9scywgT2JqZWN0KSA6IHN0dWJBcnJheTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExLFxuLy8gZm9yIGRhdGEgdmlld3MgaW4gRWRnZSA8IDE0LCBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcy5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIGNsb25lU2V0KG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIHRydWUsIHRydWUpO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZXaW5kb3cuc2FzcydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBWTm9kZURpcmVjdGl2ZSB9IGZyb20gJ3Z1ZS90eXBlcy92bm9kZSdcbmltcG9ydCB7IFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgVG91Y2hIYW5kbGVycyB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBUb3VjaCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkJ0biBmcm9tICcuLi9WQnRuJ1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuaW1wb3J0IHsgQmFzZUl0ZW1Hcm91cCB9IGZyb20gJy4uL1ZJdGVtR3JvdXAvVkl0ZW1Hcm91cCdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IEJhc2VJdGVtR3JvdXAuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytd2luZG93JyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB3aW5kb3dHcm91cDogdGhpcyxcbiAgICB9XG4gIH0sXG5cbiAgZGlyZWN0aXZlczogeyBUb3VjaCB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd2LXdpbmRvdy1pdGVtLS1hY3RpdmUnLFxuICAgIH0sXG4gICAgY29udGludW91czogQm9vbGVhbixcbiAgICBtYW5kYXRvcnk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgbmV4dEljb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJyRuZXh0JyxcbiAgICB9LFxuICAgIHByZXZJY29uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICckcHJldicsXG4gICAgfSxcbiAgICByZXZlcnNlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgc2hvd0Fycm93czogQm9vbGVhbixcbiAgICBzaG93QXJyb3dzT25Ib3ZlcjogQm9vbGVhbixcbiAgICB0b3VjaDogT2JqZWN0IGFzIFByb3BUeXBlPFRvdWNoSGFuZGxlcnM+LFxuICAgIHRvdWNobGVzczogQm9vbGVhbixcbiAgICB2YWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5nZWRCeURlbGltaXRlcnM6IGZhbHNlLFxuICAgICAgaW50ZXJuYWxIZWlnaHQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBzdHJpbmcsIC8vIFRoaXMgY2FuIGJlIGZpeGVkIGJ5IGNoaWxkIGNsYXNzLlxuICAgICAgdHJhbnNpdGlvbkhlaWdodDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IHN0cmluZywgLy8gSW50ZXJtZWRpYXRlIGhlaWdodCBkdXJpbmcgdHJhbnNpdGlvbi5cbiAgICAgIHRyYW5zaXRpb25Db3VudDogMCwgLy8gTnVtYmVyIG9mIHdpbmRvd3MgaW4gdHJhbnNpdGlvbiBzdGF0ZS5cbiAgICAgIGlzQm9vdGVkOiBmYWxzZSxcbiAgICAgIGlzUmV2ZXJzZTogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNBY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbkNvdW50ID4gMFxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLkJhc2VJdGVtR3JvdXAub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXdpbmRvdy0tc2hvdy1hcnJvd3Mtb24taG92ZXInOiB0aGlzLnNob3dBcnJvd3NPbkhvdmVyLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRUcmFuc2l0aW9uICgpOiBzdHJpbmcge1xuICAgICAgaWYgKCF0aGlzLmlzQm9vdGVkKSByZXR1cm4gJydcblxuICAgICAgY29uc3QgYXhpcyA9IHRoaXMudmVydGljYWwgPyAneScgOiAneCdcbiAgICAgIGNvbnN0IHJldmVyc2UgPSB0aGlzLiR2dWV0aWZ5LnJ0bCAmJiBheGlzID09PSAneCcgPyAhdGhpcy5pbnRlcm5hbFJldmVyc2UgOiB0aGlzLmludGVybmFsUmV2ZXJzZVxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gcmV2ZXJzZSA/ICctcmV2ZXJzZScgOiAnJ1xuXG4gICAgICByZXR1cm4gYHYtd2luZG93LSR7YXhpc30ke2RpcmVjdGlvbn0tdHJhbnNpdGlvbmBcbiAgICB9LFxuICAgIGhhc0FjdGl2ZUl0ZW1zICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiAhaXRlbS5kaXNhYmxlZClcbiAgICAgIClcbiAgICB9LFxuICAgIGhhc05leHQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGludW91cyB8fCB0aGlzLmludGVybmFsSW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCAtIDFcbiAgICB9LFxuICAgIGhhc1ByZXYgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGludW91cyB8fCB0aGlzLmludGVybmFsSW5kZXggPiAwXG4gICAgfSxcbiAgICBpbnRlcm5hbEluZGV4ICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsVmFsdWUgPT09IHRoaXMuZ2V0VmFsdWUoaXRlbSwgaSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcm5hbFJldmVyc2UgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSA/ICF0aGlzLmlzUmV2ZXJzZSA6IHRoaXMuaXNSZXZlcnNlXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGludGVybmFsSW5kZXg6ICd1cGRhdGVSZXZlcnNlJyxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+ICh0aGlzLmlzQm9vdGVkID0gdHJ1ZSkpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNvbnRhaW5lciAoKTogVk5vZGUge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbdGhpcy4kc2xvdHMuZGVmYXVsdF1cblxuICAgICAgaWYgKHRoaXMuc2hvd0Fycm93cykge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuQ29udHJvbEljb25zKCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi13aW5kb3dfX2NvbnRhaW5lcicsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3Ytd2luZG93X19jb250YWluZXItLWlzLWFjdGl2ZSc6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmludGVybmFsSGVpZ2h0IHx8IHRoaXMudHJhbnNpdGlvbkhlaWdodCxcbiAgICAgICAgfSxcbiAgICAgIH0sIGNoaWxkcmVuKVxuICAgIH0sXG4gICAgZ2VuSWNvbiAoXG4gICAgICBkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0JyxcbiAgICAgIGljb246IHN0cmluZyxcbiAgICAgIGZuOiAoKSA9PiB2b2lkXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtd2luZG93X18ke2RpcmVjdGlvbn1gLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZCdG4sIHtcbiAgICAgICAgICBwcm9wczogeyBpY29uOiB0cnVlIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy4kdnVldGlmeS5sYW5nLnQoYCR2dWV0aWZ5LmNhcm91c2VsLiR7ZGlyZWN0aW9ufWApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEJ5RGVsaW1pdGVycyA9IHRydWVcbiAgICAgICAgICAgICAgZm4oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LCBbXG4gICAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICAgICAgcHJvcHM6IHsgbGFyZ2U6IHRydWUgfSxcbiAgICAgICAgICB9LCBpY29uKSxcbiAgICAgICAgXSksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQ29udHJvbEljb25zICgpIHtcbiAgICAgIGNvbnN0IGljb25zID0gW11cblxuICAgICAgY29uc3QgcHJldkljb24gPSB0aGlzLiR2dWV0aWZ5LnJ0bFxuICAgICAgICA/IHRoaXMubmV4dEljb25cbiAgICAgICAgOiB0aGlzLnByZXZJY29uXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzUHJldiAmJlxuICAgICAgICBwcmV2SWNvbiAmJlxuICAgICAgICB0eXBlb2YgcHJldkljb24gPT09ICdzdHJpbmcnXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2VuSWNvbigncHJldicsIHByZXZJY29uLCB0aGlzLnByZXYpXG4gICAgICAgIGljb24gJiYgaWNvbnMucHVzaChpY29uKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXh0SWNvbiA9IHRoaXMuJHZ1ZXRpZnkucnRsXG4gICAgICAgID8gdGhpcy5wcmV2SWNvblxuICAgICAgICA6IHRoaXMubmV4dEljb25cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oYXNOZXh0ICYmXG4gICAgICAgIG5leHRJY29uICYmXG4gICAgICAgIHR5cGVvZiBuZXh0SWNvbiA9PT0gJ3N0cmluZydcbiAgICAgICkge1xuICAgICAgICBjb25zdCBpY29uID0gdGhpcy5nZW5JY29uKCduZXh0JywgbmV4dEljb24sIHRoaXMubmV4dClcbiAgICAgICAgaWNvbiAmJiBpY29ucy5wdXNoKGljb24pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpY29uc1xuICAgIH0sXG4gICAgZ2V0TmV4dEluZGV4IChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IChpbmRleCArIDEpICUgdGhpcy5pdGVtcy5sZW5ndGhcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW25leHRJbmRleF1cblxuICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybiB0aGlzLmdldE5leHRJbmRleChuZXh0SW5kZXgpXG5cbiAgICAgIHJldHVybiBuZXh0SW5kZXhcbiAgICB9LFxuICAgIGdldFByZXZJbmRleCAoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSAoaW5kZXggKyB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpICUgdGhpcy5pdGVtcy5sZW5ndGhcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3ByZXZJbmRleF1cblxuICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybiB0aGlzLmdldFByZXZJbmRleChwcmV2SW5kZXgpXG5cbiAgICAgIHJldHVybiBwcmV2SW5kZXhcbiAgICB9LFxuICAgIG5leHQgKCkge1xuICAgICAgdGhpcy5pc1JldmVyc2UgPSB0aGlzLiR2dWV0aWZ5LnJ0bFxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghdGhpcy5oYXNBY3RpdmVJdGVtcyB8fCAhdGhpcy5oYXNOZXh0KSByZXR1cm5cblxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5nZXROZXh0SW5kZXgodGhpcy5pbnRlcm5hbEluZGV4KVxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbbmV4dEluZGV4XVxuXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0sIG5leHRJbmRleClcbiAgICB9LFxuICAgIHByZXYgKCkge1xuICAgICAgdGhpcy5pc1JldmVyc2UgPSAhdGhpcy4kdnVldGlmeS5ydGxcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXRoaXMuaGFzQWN0aXZlSXRlbXMgfHwgIXRoaXMuaGFzUHJldikgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuZ2V0UHJldkluZGV4KHRoaXMuaW50ZXJuYWxJbmRleClcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2xhc3RJbmRleF1cblxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdGhpcy5nZXRWYWx1ZShpdGVtLCBsYXN0SW5kZXgpXG4gICAgfSxcbiAgICB1cGRhdGVSZXZlcnNlICh2YWw6IG51bWJlciwgb2xkVmFsOiBudW1iZXIpIHtcbiAgICAgIGlmICh0aGlzLmNoYW5nZWRCeURlbGltaXRlcnMpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkQnlEZWxpbWl0ZXJzID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNSZXZlcnNlID0gdmFsIDwgb2xkVmFsXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi13aW5kb3cnLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IFtdIGFzIFZOb2RlRGlyZWN0aXZlW10sXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRvdWNobGVzcykge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnRvdWNoIHx8IHtcbiAgICAgICAgbGVmdDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJHZ1ZXRpZnkucnRsID8gdGhpcy5wcmV2KCkgOiB0aGlzLm5leHQoKVxuICAgICAgICB9LFxuICAgICAgICByaWdodDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJHZ1ZXRpZnkucnRsID8gdGhpcy5uZXh0KCkgOiB0aGlzLnByZXYoKVxuICAgICAgICB9LFxuICAgICAgICBlbmQ6IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9LFxuICAgICAgICBzdGFydDogKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIGRhdGEuZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3RvdWNoJyxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBbdGhpcy5nZW5Db250YWluZXIoKV0pXG4gIH0sXG59KVxuIiwiLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZXaW5kb3cgZnJvbSAnLi4vVldpbmRvdy9WV2luZG93J1xuXG4vLyBUeXBlcyAmIENvbXBvbmVudHNcbmltcG9ydCB7IEJhc2VJdGVtR3JvdXAsIEdyb3VwYWJsZUluc3RhbmNlIH0gZnJvbSAnLi8uLi9WSXRlbUdyb3VwL1ZJdGVtR3JvdXAnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWV2luZG93LmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYnMtaXRlbXMnLFxuXG4gIHByb3BzOiB7XG4gICAgbWFuZGF0b3J5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WV2luZG93Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10YWJzLWl0ZW1zJzogdHJ1ZSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRGFyayAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5yb290SXNEYXJrXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2V0VmFsdWUgKGl0ZW06IEdyb3VwYWJsZUluc3RhbmNlLCBpOiBudW1iZXIpIHtcbiAgICAgIHJldHVybiBpdGVtLmlkIHx8IEJhc2VJdGVtR3JvdXAub3B0aW9ucy5tZXRob2RzLmdldFZhbHVlLmNhbGwodGhpcywgaXRlbSwgaSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZBcHBCYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZUb29sYmFyIGZyb20gJy4uL1ZUb29sYmFyL1ZUb29sYmFyJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2Nyb2xsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBBcHBsaWNhdGlvbmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2FwcGxpY2F0aW9uYWJsZSdcbmltcG9ydCBTY3JvbGxhYmxlIGZyb20gJy4uLy4uL21peGlucy9zY3JvbGxhYmxlJ1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWVG9vbGJhcixcbiAgU2Nyb2xsYWJsZSxcbiAgU1NSQm9vdGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIEFwcGxpY2F0aW9uYWJsZSgndG9wJywgW1xuICAgICdjbGlwcGVkTGVmdCcsXG4gICAgJ2NsaXBwZWRSaWdodCcsXG4gICAgJ2NvbXB1dGVkSGVpZ2h0JyxcbiAgICAnaW52ZXJ0ZWRTY3JvbGwnLFxuICAgICdpc0V4dGVuZGVkJyxcbiAgICAnaXNQcm9taW5lbnQnLFxuICAgICd2YWx1ZScsXG4gIF0pXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWFwcC1iYXInLFxuXG4gIGRpcmVjdGl2ZXM6IHsgU2Nyb2xsIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBjbGlwcGVkTGVmdDogQm9vbGVhbixcbiAgICBjbGlwcGVkUmlnaHQ6IEJvb2xlYW4sXG4gICAgY29sbGFwc2VPblNjcm9sbDogQm9vbGVhbixcbiAgICBlbGV2YXRlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgZmFkZUltZ09uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGhpZGVPblNjcm9sbDogQm9vbGVhbixcbiAgICBpbnZlcnRlZFNjcm9sbDogQm9vbGVhbixcbiAgICBzY3JvbGxPZmZTY3JlZW46IEJvb2xlYW4sXG4gICAgc2hyaW5rT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLnZhbHVlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFwcGxpY2F0aW9uUHJvcGVydHkgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gIXRoaXMuYm90dG9tID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgIH0sXG4gICAgY2FuU2Nyb2xsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFNjcm9sbGFibGUub3B0aW9ucy5jb21wdXRlZC5jYW5TY3JvbGwuY2FsbCh0aGlzKSAmJlxuICAgICAgICAoXG4gICAgICAgICAgdGhpcy5pbnZlcnRlZFNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuZWxldmF0ZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5oaWRlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmlzQm9vdGVkIHx8XG4gICAgICAgICAgLy8gSWYgZmFsc2V5LCB1c2VyIGhhcyBwcm92aWRlZCBhblxuICAgICAgICAgIC8vIGV4cGxpY2l0IHZhbHVlIHdoaWNoIHNob3VsZFxuICAgICAgICAgIC8vIG92ZXJ3cml0ZSBhbnl0aGluZyB3ZSBkb1xuICAgICAgICAgICF0aGlzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdG9vbGJhci0tY29sbGFwc2UnOiB0aGlzLmNvbGxhcHNlIHx8IHRoaXMuY29sbGFwc2VPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhcic6IHRydWUsXG4gICAgICAgICd2LWFwcC1iYXItLWNsaXBwZWQnOiB0aGlzLmNsaXBwZWRMZWZ0IHx8IHRoaXMuY2xpcHBlZFJpZ2h0LFxuICAgICAgICAndi1hcHAtYmFyLS1mYWRlLWltZy1vbi1zY3JvbGwnOiB0aGlzLmZhZGVJbWdPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZWxldmF0ZS1vbi1zY3JvbGwnOiB0aGlzLmVsZXZhdGVPblNjcm9sbCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZml4ZWQnOiAhdGhpcy5hYnNvbHV0ZSAmJiAodGhpcy5hcHAgfHwgdGhpcy5maXhlZCksXG4gICAgICAgICd2LWFwcC1iYXItLWhpZGUtc2hhZG93JzogdGhpcy5oaWRlU2hhZG93LFxuICAgICAgICAndi1hcHAtYmFyLS1pcy1zY3JvbGxlZCc6IHRoaXMuY3VycmVudFNjcm9sbCA+IDAsXG4gICAgICAgICd2LWFwcC1iYXItLXNocmluay1vbi1zY3JvbGwnOiB0aGlzLnNocmlua09uU2Nyb2xsLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb250ZW50SGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLnNocmlua09uU2Nyb2xsKSByZXR1cm4gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbnRlbnRIZWlnaHQuY2FsbCh0aGlzKVxuXG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbXB1dGVkT3JpZ2luYWxIZWlnaHRcblxuICAgICAgY29uc3QgbWluID0gdGhpcy5kZW5zZSA/IDQ4IDogNTZcbiAgICAgIGNvbnN0IG1heCA9IGhlaWdodFxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heCAtIG1pblxuICAgICAgY29uc3QgaXRlcmF0aW9uID0gZGlmZmVyZW5jZSAvIHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY3VycmVudFNjcm9sbCAqIGl0ZXJhdGlvblxuXG4gICAgICByZXR1cm4gTWF0aC5tYXgobWluLCBtYXggLSBvZmZzZXQpXG4gICAgfSxcbiAgICBjb21wdXRlZEZvbnRTaXplICgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF0aGlzLmlzUHJvbWluZW50KSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuZGVuc2UgPyA5NiA6IDEyOFxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heCAtIHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG4gICAgICBjb25zdCBpbmNyZW1lbnQgPSAwLjAwMzQ3XG5cbiAgICAgIC8vIDEuNXJlbSB0byBhIG1pbmltdW0gb2YgMS4yNXJlbVxuICAgICAgcmV0dXJuIE51bWJlcigoMS41MCAtIGRpZmZlcmVuY2UgKiBpbmNyZW1lbnQpLnRvRml4ZWQoMikpXG4gICAgfSxcbiAgICBjb21wdXRlZExlZnQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwIHx8IHRoaXMuY2xpcHBlZExlZnQpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLmxlZnRcbiAgICB9LFxuICAgIGNvbXB1dGVkTWFyZ2luVG9wICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb24uYmFyXG4gICAgfSxcbiAgICBjb21wdXRlZE9wYWNpdHkgKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXRoaXMuZmFkZUltZ09uU2Nyb2xsKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IG9wYWNpdHkgPSBNYXRoLm1heChcbiAgICAgICAgKHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQgLSB0aGlzLmN1cnJlbnRTY3JvbGwpIC8gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCxcbiAgICAgICAgMFxuICAgICAgKVxuXG4gICAgICByZXR1cm4gTnVtYmVyKHBhcnNlRmxvYXQob3BhY2l0eSkudG9GaXhlZCgyKSlcbiAgICB9LFxuICAgIGNvbXB1dGVkT3JpZ2luYWxIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBsZXQgaGVpZ2h0ID0gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbnRlbnRIZWlnaHQuY2FsbCh0aGlzKVxuICAgICAgaWYgKHRoaXMuaXNFeHRlbmRlZCkgaGVpZ2h0ICs9IHBhcnNlSW50KHRoaXMuZXh0ZW5zaW9uSGVpZ2h0KVxuICAgICAgcmV0dXJuIGhlaWdodFxuICAgIH0sXG4gICAgY29tcHV0ZWRSaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHAgfHwgdGhpcy5jbGlwcGVkUmlnaHQpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLnJpZ2h0XG4gICAgfSxcbiAgICBjb21wdXRlZFNjcm9sbFRocmVzaG9sZCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLnNjcm9sbFRocmVzaG9sZCkgcmV0dXJuIE51bWJlcih0aGlzLnNjcm9sbFRocmVzaG9sZClcblxuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRPcmlnaW5hbEhlaWdodCAtICh0aGlzLmRlbnNlID8gNDggOiA1NilcbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNmb3JtICgpOiBudW1iZXIge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TY3JvbGwgfHxcbiAgICAgICAgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsICYmIHRoaXMuY3VycmVudFNjcm9sbCA9PT0gMCAmJiB0aGlzLmlzQWN0aXZlKVxuICAgICAgKSByZXR1cm4gMFxuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgcmV0dXJuIDBcblxuICAgICAgY29uc3Qgc2Nyb2xsT2ZmU2NyZWVuID0gdGhpcy5zY3JvbGxPZmZTY3JlZW5cbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkSGVpZ2h0XG4gICAgICAgIDogdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID8gc2Nyb2xsT2ZmU2NyZWVuIDogLXNjcm9sbE9mZlNjcmVlblxuICAgIH0sXG4gICAgaGlkZVNoYWRvdyAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5lbGV2YXRlT25TY3JvbGwgJiYgdGhpcy5pc0V4dGVuZGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZXZhdGVPblNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsID09PSAwIHx8XG4gICAgICAgICAgdGhpcy5jb21wdXRlZFRyYW5zZm9ybSA8IDBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIXRoaXMuaXNFeHRlbmRlZCB8fFxuICAgICAgICB0aGlzLnNjcm9sbE9mZlNjcmVlblxuICAgICAgKSAmJiB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtICE9PSAwXG4gICAgfSxcbiAgICBpc0NvbGxhcHNlZCAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAoIXRoaXMuY29sbGFwc2VPblNjcm9sbCkge1xuICAgICAgICByZXR1cm4gVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5pc0NvbGxhcHNlZC5jYWxsKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPiAwXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmlzUHJvbWluZW50LmNhbGwodGhpcykgfHxcbiAgICAgICAgdGhpcy5zaHJpbmtPblNjcm9sbFxuICAgICAgKVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5zdHlsZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgZm9udFNpemU6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZEZvbnRTaXplLCAncmVtJyksXG4gICAgICAgIG1hcmdpblRvcDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkTWFyZ2luVG9wKSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke2NvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZFRyYW5zZm9ybSl9KWAsXG4gICAgICAgIGxlZnQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZExlZnQpLFxuICAgICAgICByaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkUmlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBjYW5TY3JvbGw6ICdvblNjcm9sbCcsXG4gICAgY29tcHV0ZWRUcmFuc2Zvcm0gKCkge1xuICAgICAgLy8gTm9ybWFsbHkgd2UgZG8gbm90IHdhbnQgdGhlIHYtYXBwLWJhclxuICAgICAgLy8gdG8gdXBkYXRlIHRoZSBhcHBsaWNhdGlvbiB0b3AgdmFsdWVcbiAgICAgIC8vIHRvIGF2b2lkIHNjcmVlbiBqdW1wLiBIb3dldmVyLCBpblxuICAgICAgLy8gdGhpcyBzaXR1YXRpb24sIHdlIG11c3Qgc28gdGhhdFxuICAgICAgLy8gdGhlIGNsaXBwZWQgZHJhd2VyIGNhbiB1cGRhdGVcbiAgICAgIC8vIGl0cyB0b3AgdmFsdWUgd2hlbiBzY3JvbGxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TY3JvbGwgfHxcbiAgICAgICAgKCF0aGlzLmNsaXBwZWRMZWZ0ICYmICF0aGlzLmNsaXBwZWRSaWdodClcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIHRoaXMuY2FsbFVwZGF0ZSgpXG4gICAgfSxcbiAgICBpbnZlcnRlZFNjcm9sbCAodmFsOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gIXZhbCB8fCB0aGlzLmN1cnJlbnRTY3JvbGwgIT09IDBcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGlmICh0aGlzLmludmVydGVkU2Nyb2xsKSB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQmFja2dyb3VuZCAoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBWVG9vbGJhci5vcHRpb25zLm1ldGhvZHMuZ2VuQmFja2dyb3VuZC5jYWxsKHRoaXMpXG5cbiAgICAgIHJlbmRlci5kYXRhID0gdGhpcy5fYihyZW5kZXIuZGF0YSB8fCB7fSwgcmVuZGVyLnRhZyEsIHtcbiAgICAgICAgc3R5bGU6IHsgb3BhY2l0eTogdGhpcy5jb21wdXRlZE9wYWNpdHkgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIHVwZGF0ZUFwcGxpY2F0aW9uICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaW52ZXJ0ZWRTY3JvbGxcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5jb21wdXRlZEhlaWdodCArIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm1cbiAgICB9LFxuICAgIHRocmVzaG9sZE1ldCAoKSB7XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5jdXJyZW50U2Nyb2xsID4gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGlkZU9uU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmlzU2Nyb2xsaW5nVXAgfHxcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JvbGwgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaHJlc2hvbGQgPCB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkKSByZXR1cm5cblxuICAgICAgdGhpcy5zYXZlZFNjcm9sbCA9IHRoaXMuY3VycmVudFNjcm9sbFxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHJlbmRlciA9IFZUb29sYmFyLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIHJlbmRlci5kYXRhID0gcmVuZGVyLmRhdGEgfHwge31cblxuICAgIGlmICh0aGlzLmNhblNjcm9sbCkge1xuICAgICAgcmVuZGVyLmRhdGEuZGlyZWN0aXZlcyA9IHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMgfHwgW11cbiAgICAgIHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgIGFyZzogdGhpcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgIG5hbWU6ICdzY3JvbGwnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vblNjcm9sbCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNYWluLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNTUkJvb3RhYmxlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1haW4nLFxuXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbWFpbicsXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYmFyLCB0b3AsIHJpZ2h0LCBmb290ZXIsIGluc2V0Rm9vdGVyLCBib3R0b20sIGxlZnQsXG4gICAgICB9ID0gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nVG9wOiBgJHt0b3AgKyBiYXJ9cHhgLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IGAke3JpZ2h0fXB4YCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogYCR7Zm9vdGVyICsgaW5zZXRGb290ZXIgKyBib3R0b219cHhgLFxuICAgICAgICBwYWRkaW5nTGVmdDogYCR7bGVmdH1weGAsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tYWluJyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIHJlZjogJ21haW4nLFxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCBbXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdGF0aWNDbGFzczogJ3YtbWFpbl9fd3JhcCcgfSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgICAgKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZNYWluIGZyb20gJy4uL1ZNYWluL1ZNYWluJ1xuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVk1haW4uZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWFpbicsXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgZGVwcmVjYXRlKCd2LWNvbnRlbnQnLCAndi1tYWluJywgdGhpcylcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgLy8gQWRkIHRoZSBsZWdhY3kgY2xhc3MgbmFtZXNcbiAgICBjb25zdCBub2RlID0gVk1haW4ub3B0aW9ucy5yZW5kZXIuY2FsbCh0aGlzLCBoKVxuXG4gICAgbm9kZS5kYXRhIS5zdGF0aWNDbGFzcyArPSAnIHYtY29udGVudCdcbiAgICBub2RlLmNoaWxkcmVuIVswXSEuZGF0YSEuc3RhdGljQ2xhc3MgKz0gJyB2LWNvbnRlbnRfX3dyYXAnXG5cbiAgICByZXR1cm4gaChub2RlLnRhZywgbm9kZS5kYXRhLCBub2RlLmNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCAnLi9fZ3JpZC5zYXNzJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgnc3BhY2VyJywgJ2RpdicsICd2LXNwYWNlcicpXG4iLCJpbXBvcnQgJy4vX2dyaWQuc2FzcydcbmltcG9ydCAnLi9WR3JpZC5zYXNzJ1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnXG5cbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBHcmlkKCdjb250YWluZXInKS5leHRlbmQoe1xuICBuYW1lOiAndi1jb250YWluZXInLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIGlkOiBTdHJpbmcsXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICB9LFxuICAgIGZsdWlkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyIChoLCB7IHByb3BzLCBkYXRhLCBjaGlsZHJlbiB9KSB7XG4gICAgbGV0IGNsYXNzZXNcbiAgICBjb25zdCB7IGF0dHJzIH0gPSBkYXRhXG4gICAgaWYgKGF0dHJzKSB7XG4gICAgICAvLyByZXNldCBhdHRycyB0byBleHRyYWN0IHV0aWxpdHkgY2xhc2VzIGxpa2UgcGEtM1xuICAgICAgZGF0YS5hdHRycyA9IHt9XG4gICAgICBjbGFzc2VzID0gT2JqZWN0LmtleXMoYXR0cnMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgb25jZSByZXNvbHZlZFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy83ODQxXG4gICAgICAgIGlmIChrZXkgPT09ICdzbG90JykgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyc1trZXldXG5cbiAgICAgICAgLy8gYWRkIGJhY2sgZGF0YSBhdHRyaWJ1dGVzIGxpa2UgZGF0YS10ZXN0PVwiZm9vXCIgYnV0IGRvIG5vdFxuICAgICAgICAvLyBhZGQgdGhlbSBhcyBjbGFzc2VzXG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGRhdGEuYXR0cnMhW2tleV0gPSB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICBkYXRhLmRvbVByb3BzID0gZGF0YS5kb21Qcm9wcyB8fCB7fVxuICAgICAgZGF0YS5kb21Qcm9wcy5pZCA9IHByb3BzLmlkXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoXG4gICAgICBwcm9wcy50YWcsXG4gICAgICBtZXJnZURhdGEoZGF0YSwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ2NvbnRhaW5lcicsXG4gICAgICAgIGNsYXNzOiBBcnJheTxhbnk+KHtcbiAgICAgICAgICAnY29udGFpbmVyLS1mbHVpZCc6IHByb3BzLmZsdWlkLFxuICAgICAgICB9KS5jb25jYXQoY2xhc3NlcyB8fCBbXSksXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDaGlwLnNhc3MnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZFeHBhbmRYVHJhbnNpdGlvbiB9IGZyb20gJy4uL3RyYW5zaXRpb25zJ1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgR3JvdXBhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9ncm91cGFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFRvZ2dsZWFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgUm91dGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdXRhYmxlJ1xuaW1wb3J0IFNpemVhYmxlIGZyb20gJy4uLy4uL21peGlucy9zaXplYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgU2l6ZWFibGUsXG4gIFJvdXRhYmxlLFxuICBUaGVtZWFibGUsXG4gIEdyb3VwYWJsZUZhY3RvcnkoJ2NoaXBHcm91cCcpLFxuICBUb2dnbGVhYmxlRmFjdG9yeSgnaW5wdXRWYWx1ZScpXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNoaXAnLFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoIXRoaXMuY2hpcEdyb3VwKSByZXR1cm4gJydcblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlwR3JvdXAuYWN0aXZlQ2xhc3NcbiAgICAgIH0sXG4gICAgfSBhcyBhbnkgYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmc+LFxuICAgIGNsb3NlOiBCb29sZWFuLFxuICAgIGNsb3NlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkZWxldGUnLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZHJhZ2dhYmxlOiBCb29sZWFuLFxuICAgIGZpbHRlcjogQm9vbGVhbixcbiAgICBmaWx0ZXJJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNvbXBsZXRlJyxcbiAgICB9LFxuICAgIGxhYmVsOiBCb29sZWFuLFxuICAgIGxpbms6IEJvb2xlYW4sXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGlsbDogQm9vbGVhbixcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzcGFuJyxcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuICAgIHZhbHVlOiBudWxsIGFzIGFueSBhcyBQcm9wVHlwZTxhbnk+LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgcHJveHlDbGFzczogJ3YtY2hpcC0tYWN0aXZlJyxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtY2hpcCc6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1jaGlwLS1jbGlja2FibGUnOiB0aGlzLmlzQ2xpY2thYmxlLFxuICAgICAgICAndi1jaGlwLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICd2LWNoaXAtLWRyYWdnYWJsZSc6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgICAndi1jaGlwLS1sYWJlbCc6IHRoaXMubGFiZWwsXG4gICAgICAgICd2LWNoaXAtLWxpbmsnOiB0aGlzLmlzTGluayxcbiAgICAgICAgJ3YtY2hpcC0tbm8tY29sb3InOiAhdGhpcy5jb2xvcixcbiAgICAgICAgJ3YtY2hpcC0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuICAgICAgICAndi1jaGlwLS1waWxsJzogdGhpcy5waWxsLFxuICAgICAgICAndi1jaGlwLS1yZW1vdmFibGUnOiB0aGlzLmhhc0Nsb3NlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgICAgLi4udGhpcy5zaXplYWJsZUNsYXNzZXMsXG4gICAgICAgIC4uLnRoaXMuZ3JvdXBDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzQ2xvc2UgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5jbG9zZSlcbiAgICB9LFxuICAgIGlzQ2xpY2thYmxlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICBSb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmlzQ2xpY2thYmxlLmNhbGwodGhpcykgfHxcbiAgICAgICAgdGhpcy5jaGlwR3JvdXBcbiAgICAgIClcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGNvbnN0IGJyZWFraW5nUHJvcHMgPSBbXG4gICAgICBbJ291dGxpbmUnLCAnb3V0bGluZWQnXSxcbiAgICAgIFsnc2VsZWN0ZWQnLCAnaW5wdXQtdmFsdWUnXSxcbiAgICAgIFsndmFsdWUnLCAnYWN0aXZlJ10sXG4gICAgICBbJ0BpbnB1dCcsICdAYWN0aXZlLnN5bmMnXSxcbiAgICBdXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGJyZWFraW5nUHJvcHMuZm9yRWFjaCgoW29yaWdpbmFsLCByZXBsYWNlbWVudF0pID0+IHtcbiAgICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eShvcmlnaW5hbCkpIGJyZWFraW5nKG9yaWdpbmFsLCByZXBsYWNlbWVudCwgdGhpcylcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljayAoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgICB0aGlzLmNoaXBHcm91cCAmJiB0aGlzLnRvZ2dsZSgpXG4gICAgfSxcbiAgICBnZW5GaWx0ZXIgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fZmlsdGVyJyxcbiAgICAgICAgICAgIHByb3BzOiB7IGxlZnQ6IHRydWUgfSxcbiAgICAgICAgICB9LCB0aGlzLmZpbHRlckljb24pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkV4cGFuZFhUcmFuc2l0aW9uLCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlbkNsb3NlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2hpcF9fY2xvc2UnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgICAgIHNpemU6IDE4LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljazpjbG9zZScpXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6YWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuY2xvc2VJY29uKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1jaGlwX19jb250ZW50JyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5maWx0ZXIgJiYgdGhpcy5nZW5GaWx0ZXIoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgICAgdGhpcy5oYXNDbG9zZSAmJiB0aGlzLmdlbkNsb3NlKCksXG4gICAgICBdKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuZ2VuQ29udGVudCgpXVxuICAgIGxldCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLmF0dHJzID0ge1xuICAgICAgLi4uZGF0YS5hdHRycyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICB0YWJpbmRleDogdGhpcy5jaGlwR3JvdXAgJiYgIXRoaXMuZGlzYWJsZWQgPyAwIDogZGF0YS5hdHRycyEudGFiaW5kZXgsXG4gICAgfVxuICAgIGRhdGEuZGlyZWN0aXZlcyEucHVzaCh7XG4gICAgICBuYW1lOiAnc2hvdycsXG4gICAgICB2YWx1ZTogdGhpcy5hY3RpdmUsXG4gICAgfSlcbiAgICBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgZGF0YSlcblxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy50ZXh0Q29sb3IgfHwgKHRoaXMub3V0bGluZWQgJiYgdGhpcy5jb2xvcilcblxuICAgIHJldHVybiBoKHRhZywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIGRhdGEpLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVkNoaXAgZnJvbSAnLi9WQ2hpcCdcblxuZXhwb3J0IHsgVkNoaXAgfVxuZXhwb3J0IGRlZmF1bHQgVkNoaXBcbiIsImltcG9ydCAnLi9WU2ltcGxlQ2hlY2tib3guc2FzcydcblxuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuaW1wb3J0IFZ1ZSwgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuaW1wb3J0IHsgd3JhcEluQXJyYXkgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1zaW1wbGUtY2hlY2tib3gnLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIHJpcHBsZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIC4uLkNvbG9yYWJsZS5vcHRpb25zLnByb3BzLFxuICAgIC4uLlRoZW1lYWJsZS5vcHRpb25zLnByb3BzLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGVJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94SW5kZXRlcm1pbmF0ZScsXG4gICAgfSxcbiAgICBvbkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2hlY2tib3hPbicsXG4gICAgfSxcbiAgICBvZmZJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94T2ZmJyxcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCwgeyBwcm9wcywgZGF0YSwgbGlzdGVuZXJzIH0pOiBWTm9kZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuXG4gICAgaWYgKHByb3BzLnJpcHBsZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGgoJ2RpdicsIENvbG9yYWJsZS5vcHRpb25zLm1ldGhvZHMuc2V0VGV4dENvbG9yKHByb3BzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dC0tc2VsZWN0aW9uLWNvbnRyb2xzX19yaXBwbGUnLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdyaXBwbGUnLFxuICAgICAgICAgIHZhbHVlOiB7IGNlbnRlcjogdHJ1ZSB9LFxuICAgICAgICB9XSBhcyBWTm9kZURpcmVjdGl2ZVtdLFxuICAgICAgfSkpXG5cbiAgICAgIGNoaWxkcmVuLnB1c2gocmlwcGxlKVxuICAgIH1cblxuICAgIGxldCBpY29uID0gcHJvcHMub2ZmSWNvblxuICAgIGlmIChwcm9wcy5pbmRldGVybWluYXRlKSBpY29uID0gcHJvcHMuaW5kZXRlcm1pbmF0ZUljb25cbiAgICBlbHNlIGlmIChwcm9wcy52YWx1ZSkgaWNvbiA9IHByb3BzLm9uSWNvblxuXG4gICAgY2hpbGRyZW4ucHVzaChoKFZJY29uLCBDb2xvcmFibGUub3B0aW9ucy5tZXRob2RzLnNldFRleHRDb2xvcihwcm9wcy52YWx1ZSAmJiBwcm9wcy5jb2xvciwge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBkYXJrOiBwcm9wcy5kYXJrLFxuICAgICAgICBsaWdodDogcHJvcHMubGlnaHQsXG4gICAgICB9LFxuICAgIH0pLCBpY29uKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAndi1zaW1wbGUtY2hlY2tib3gnOiB0cnVlLFxuICAgICAgJ3Ytc2ltcGxlLWNoZWNrYm94LS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgIGlmIChkYXRhLm9uICYmIGRhdGEub24uaW5wdXQgJiYgIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHdyYXBJbkFycmF5KGRhdGEub24uaW5wdXQpLmZvckVhY2goZiA9PiBmKCFwcm9wcy52YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlNpbXBsZUNoZWNrYm94IGZyb20gJy4uL1ZDaGVja2JveC9WU2ltcGxlQ2hlY2tib3gnXG5pbXBvcnQgVkRpdmlkZXIgZnJvbSAnLi4vVkRpdmlkZXInXG5pbXBvcnQgVlN1YmhlYWRlciBmcm9tICcuLi9WU3ViaGVhZGVyJ1xuaW1wb3J0IHtcbiAgVkxpc3QsXG4gIFZMaXN0SXRlbSxcbiAgVkxpc3RJdGVtQWN0aW9uLFxuICBWTGlzdEl0ZW1Db250ZW50LFxuICBWTGlzdEl0ZW1UaXRsZSxcbn0gZnJvbSAnLi4vVkxpc3QnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQge1xuICBlc2NhcGVIVE1MLFxuICBnZXRQcm9wZXJ0eUZyb21JdGVtLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlLCBWTm9kZUNoaWxkcmVuIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgU2VsZWN0SXRlbUtleSB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbnR5cGUgTGlzdFRpbGUgPSB7IGl0ZW06IGFueSwgZGlzYWJsZWQ/OiBudWxsIHwgYm9vbGVhbiwgdmFsdWU/OiBib29sZWFuLCBpbmRleDogbnVtYmVyIH07XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlLCBUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNlbGVjdC1saXN0JyxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy82ODcyXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICByaXBwbGUsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhY3Rpb246IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkOiBCb29sZWFuLFxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxhbnlbXT4sXG4gICAgaXRlbURpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICB9LFxuICAgIGl0ZW1UZXh0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgIH0sXG4gICAgaXRlbVZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheSwgRnVuY3Rpb25dIGFzIFByb3BUeXBlPFNlbGVjdEl0ZW1LZXk+LFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIG5vRGF0YVRleHQ6IFN0cmluZyxcbiAgICBub0ZpbHRlcjogQm9vbGVhbixcbiAgICBzZWFyY2hJbnB1dDogbnVsbCBhcyB1bmtub3duIGFzIFByb3BUeXBlPGFueT4sXG4gICAgc2VsZWN0ZWRJdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8YW55W10+LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgcGFyc2VkSXRlbXMgKCk6IGFueVtdIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICB9LFxuICAgIHRpbGVBY3RpdmVDbGFzcyAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbG9yKS5jbGFzcyB8fCB7fSkuam9pbignICcpXG4gICAgfSxcbiAgICBzdGF0aWNOb0RhdGFUaWxlICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCB0aWxlID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBtb3VzZWRvd246IChlOiBFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLCAvLyBQcmV2ZW50IG9uQmx1ciBmcm9tIGJlaW5nIGNhbGxlZFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFtcbiAgICAgICAgdGhpcy5nZW5UaWxlQ29udGVudCh0aGlzLm5vRGF0YVRleHQpLFxuICAgICAgXSlcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5BY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5wdXRWYWx1ZTogYW55KTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxpc3RJdGVtQWN0aW9uLCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlNpbXBsZUNoZWNrYm94LCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6ICgpID0+IHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRpdmlkZXIgKHByb3BzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWRGl2aWRlciwgeyBwcm9wcyB9KVxuICAgIH0sXG4gICAgZ2VuRmlsdGVyZWRUZXh0ICh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgIHRleHQgPSB0ZXh0IHx8ICcnXG5cbiAgICAgIGlmICghdGhpcy5zZWFyY2hJbnB1dCB8fCB0aGlzLm5vRmlsdGVyKSByZXR1cm4gZXNjYXBlSFRNTCh0ZXh0KVxuXG4gICAgICBjb25zdCB7IHN0YXJ0LCBtaWRkbGUsIGVuZCB9ID0gdGhpcy5nZXRNYXNrZWRDaGFyYWN0ZXJzKHRleHQpXG5cbiAgICAgIHJldHVybiBgJHtlc2NhcGVIVE1MKHN0YXJ0KX0ke3RoaXMuZ2VuSGlnaGxpZ2h0KG1pZGRsZSl9JHtlc2NhcGVIVE1MKGVuZCl9YFxuICAgIH0sXG4gICAgZ2VuSGVhZGVyIChwcm9wczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTdWJoZWFkZXIsIHsgcHJvcHMgfSwgcHJvcHMuaGVhZGVyKVxuICAgIH0sXG4gICAgZ2VuSGlnaGxpZ2h0ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInYtbGlzdC1pdGVtX19tYXNrXCI+JHtlc2NhcGVIVE1MKHRleHQpfTwvc3Bhbj5gXG4gICAgfSxcbiAgICBnZXRNYXNrZWRDaGFyYWN0ZXJzICh0ZXh0OiBzdHJpbmcpOiB7XG4gICAgICBzdGFydDogc3RyaW5nXG4gICAgICBtaWRkbGU6IHN0cmluZ1xuICAgICAgZW5kOiBzdHJpbmdcbiAgICB9IHtcbiAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gKHRoaXMuc2VhcmNoSW5wdXQgfHwgJycpLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgY29uc3QgaW5kZXggPSB0ZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hJbnB1dClcblxuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHsgc3RhcnQ6ICcnLCBtaWRkbGU6IHRleHQsIGVuZDogJycgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHRleHQuc2xpY2UoMCwgaW5kZXgpXG4gICAgICBjb25zdCBtaWRkbGUgPSB0ZXh0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaElucHV0Lmxlbmd0aClcbiAgICAgIGNvbnN0IGVuZCA9IHRleHQuc2xpY2UoaW5kZXggKyBzZWFyY2hJbnB1dC5sZW5ndGgpXG4gICAgICByZXR1cm4geyBzdGFydCwgbWlkZGxlLCBlbmQgfVxuICAgIH0sXG4gICAgZ2VuVGlsZSAoe1xuICAgICAgaXRlbSxcbiAgICAgIGluZGV4LFxuICAgICAgZGlzYWJsZWQgPSBudWxsLFxuICAgICAgdmFsdWUgPSBmYWxzZSxcbiAgICB9OiBMaXN0VGlsZSk6IFZOb2RlIHwgVk5vZGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXZhbHVlKSB2YWx1ZSA9IHRoaXMuaGFzSXRlbShpdGVtKVxuXG4gICAgICBpZiAoaXRlbSA9PT0gT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGRpc2FibGVkID0gZGlzYWJsZWQgIT09IG51bGxcbiAgICAgICAgICA/IGRpc2FibGVkXG4gICAgICAgICAgOiB0aGlzLmdldERpc2FibGVkKGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpbGUgPSB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpbiBsaXN0IGRvZXMgbm90XG4gICAgICAgICAgLy8gY29udGFpbiBhcmlhLXNlbGVjdGVkIGJ5IGRlZmF1bHRcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IFN0cmluZyh2YWx1ZSksXG4gICAgICAgICAgaWQ6IGBsaXN0LWl0ZW0tJHt0aGlzLl91aWR9LSR7aW5kZXh9YCxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBtb3VzZWRvd246IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gUHJldmVudCBvbkJsdXIgZnJvbSBiZWluZyBjYWxsZWRcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xpY2s6ICgpID0+IGRpc2FibGVkIHx8IHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLnRpbGVBY3RpdmVDbGFzcyxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICByaXBwbGU6IHRydWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIFtcbiAgICAgICAgICB0aGlzLmFjdGlvbiAmJiAhdGhpcy5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMuZ2VuQWN0aW9uKGl0ZW0sIHZhbHVlKVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIHRoaXMuZ2VuVGlsZUNvbnRlbnQoaXRlbSwgaW5kZXgpLFxuICAgICAgICBdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzXG4gICAgICBjb25zdCBzY29wZWRTbG90ID0gdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSh7XG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAuLi50aWxlLmF0dHJzLFxuICAgICAgICAgIC4uLnRpbGUucHJvcHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB0aWxlLm9uLFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRoaXMubmVlZHNUaWxlKHNjb3BlZFNsb3QpXG4gICAgICAgID8gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW0sIHRpbGUsIHNjb3BlZFNsb3QpXG4gICAgICAgIDogc2NvcGVkU2xvdFxuICAgIH0sXG4gICAgZ2VuVGlsZUNvbnRlbnQgKGl0ZW06IGFueSwgaW5kZXggPSAwKTogVk5vZGUge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5nZW5GaWx0ZXJlZFRleHQodGhpcy5nZXRUZXh0KGl0ZW0pKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW1Db250ZW50LFxuICAgICAgICBbdGhpcy4kY3JlYXRlRWxlbWVudChWTGlzdEl0ZW1UaXRsZSwge1xuICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTCB9LFxuICAgICAgICB9KV1cbiAgICAgIClcbiAgICB9LFxuICAgIGhhc0l0ZW0gKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VkSXRlbXMuaW5kZXhPZih0aGlzLmdldFZhbHVlKGl0ZW0pKSA+IC0xXG4gICAgfSxcbiAgICBuZWVkc1RpbGUgKHNsb3Q6IFZOb2RlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzbG90IS5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgc2xvdCFbMF0uY29tcG9uZW50T3B0aW9ucyA9PSBudWxsIHx8XG4gICAgICAgIHNsb3QhWzBdLmNvbXBvbmVudE9wdGlvbnMuQ3Rvci5vcHRpb25zLm5hbWUgIT09ICd2LWxpc3QtaXRlbSdcbiAgICB9LFxuICAgIGdldERpc2FibGVkIChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtRGlzYWJsZWQsIGZhbHNlKSlcbiAgICB9LFxuICAgIGdldFRleHQgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQsIGl0ZW0pKVxuICAgIH0sXG4gICAgZ2V0VmFsdWUgKGl0ZW06IG9iamVjdCkge1xuICAgICAgcmV0dXJuIGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtVmFsdWUsIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoKTogVk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuOiBWTm9kZUNoaWxkcmVuID0gW11cbiAgICBjb25zdCBpdGVtc0xlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF1cblxuICAgICAgaWYgKHRoaXMuaGlkZVNlbGVjdGVkICYmXG4gICAgICAgIHRoaXMuaGFzSXRlbShpdGVtKVxuICAgICAgKSBjb250aW51ZVxuXG4gICAgICBpZiAoaXRlbSA9PSBudWxsKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuVGlsZSh7IGl0ZW0sIGluZGV4IH0pKVxuICAgICAgZWxzZSBpZiAoaXRlbS5oZWFkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5IZWFkZXIoaXRlbSkpXG4gICAgICBlbHNlIGlmIChpdGVtLmRpdmlkZXIpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5EaXZpZGVyKGl0ZW0pKVxuICAgICAgZWxzZSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuVGlsZSh7IGl0ZW0sIGluZGV4IH0pKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmxlbmd0aCB8fCBjaGlsZHJlbi5wdXNoKHRoaXMuJHNsb3RzWyduby1kYXRhJ10gfHwgdGhpcy5zdGF0aWNOb0RhdGFUaWxlKVxuXG4gICAgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddICYmIGNoaWxkcmVuLnVuc2hpZnQodGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddKVxuXG4gICAgdGhpcy4kc2xvdHNbJ2FwcGVuZC1pdGVtJ10gJiYgY2hpbGRyZW4ucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSlcblxuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMaXN0LCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc2VsZWN0LWxpc3QnLFxuICAgICAgY2xhc3M6IHRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICB9LFxuICAgICAgcHJvcHM6IHsgZGVuc2U6IHRoaXMuZGVuc2UgfSxcbiAgICB9LCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAnZmlsdGVyYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBub0RhdGFUZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHZ1ZXRpZnkubm9EYXRhVGV4dCcsXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi4vVlRleHRGaWVsZC9WVGV4dEZpZWxkLnNhc3MnXG5pbXBvcnQgJy4vVlNlbGVjdC5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkNoaXAgZnJvbSAnLi4vVkNoaXAnXG5pbXBvcnQgVk1lbnUgZnJvbSAnLi4vVk1lbnUnXG5pbXBvcnQgVlNlbGVjdExpc3QgZnJvbSAnLi9WU2VsZWN0TGlzdCdcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbXBhcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbXBhcmFibGUnXG5pbXBvcnQgRmlsdGVyYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZmlsdGVyYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7IGdldFByb3BlcnR5RnJvbUl0ZW0sIGdldE9iamVjdFZhbHVlQnlQYXRoLCBrZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFByb3BUeXBlLCBWTm9kZURhdGEgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBTZWxlY3RJdGVtS2V5IH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZW51UHJvcHMgPSB7XG4gIGNsb3NlT25DbGljazogZmFsc2UsXG4gIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICBkaXNhYmxlS2V5czogdHJ1ZSxcbiAgb3Blbk9uQ2xpY2s6IGZhbHNlLFxuICBtYXhIZWlnaHQ6IDMwNCxcbn1cblxuLy8gVHlwZXNcbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFZUZXh0RmllbGQsXG4gIENvbXBhcmFibGUsXG4gIEZpbHRlcmFibGVcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBtZW51OiBJbnN0YW5jZVR5cGU8dHlwZW9mIFZNZW51PlxuICAgIGxhYmVsOiBIVE1MRWxlbWVudFxuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgJ3ByZXBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgICdhcHBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgIHByZWZpeDogSFRNTEVsZW1lbnRcbiAgICBzdWZmaXg6IEhUTUxFbGVtZW50XG4gIH1cbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc2VsZWN0JyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZW5kSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRkcm9wZG93bicsXG4gICAgfSxcbiAgICBhdHRhY2g6IHtcbiAgICAgIHR5cGU6IG51bGwgYXMgdW5rbm93biBhcyBQcm9wVHlwZTxzdHJpbmcgfCBib29sZWFuIHwgRWxlbWVudCB8IFZOb2RlPixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgY2FjaGVJdGVtczogQm9vbGVhbixcbiAgICBjaGlwczogQm9vbGVhbixcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgZGVsZXRhYmxlQ2hpcHM6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUxvb2t1cDogQm9vbGVhbixcbiAgICBlYWdlcjogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWQ6IEJvb2xlYW4sXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPGFueVtdPixcbiAgICBpdGVtQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGl0ZW1EaXNhYmxlZDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgfSxcbiAgICBpdGVtVGV4dDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICAgIGl0ZW1WYWx1ZToge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXksIEZ1bmN0aW9uXSBhcyBQcm9wVHlwZTxTZWxlY3RJdGVtS2V5PixcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgfSxcbiAgICBtZW51UHJvcHM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5LCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdE1lbnVQcm9wcyxcbiAgICB9LFxuICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsZWFyOiBCb29sZWFuLFxuICAgIHJldHVybk9iamVjdDogQm9vbGVhbixcbiAgICBzbWFsbENoaXBzOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWNoZWRJdGVtczogdGhpcy5jYWNoZUl0ZW1zID8gdGhpcy5pdGVtcyA6IFtdLFxuICAgICAgbWVudUlzQm9vdGVkOiBmYWxzZSxcbiAgICAgIGlzTWVudUFjdGl2ZTogZmFsc2UsXG4gICAgICBsYXN0SXRlbTogMjAsXG4gICAgICAvLyBBcyBsb25nIGFzIGEgdmFsdWUgaXMgZGVmaW5lZCwgc2hvdyBpdFxuICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayBpZiBtdWx0aXBsZVxuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoaWNoIGRlZmF1bHQgdG8gcHJvdmlkZVxuICAgICAgbGF6eVZhbHVlOiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyB0aGlzLnZhbHVlXG4gICAgICAgIDogdGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkLFxuICAgICAgc2VsZWN0ZWRJbmRleDogLTEsXG4gICAgICBzZWxlY3RlZEl0ZW1zOiBbXSBhcyBhbnlbXSxcbiAgICAgIGtleWJvYXJkTG9va3VwUHJlZml4OiAnJyxcbiAgICAgIGtleWJvYXJkTG9va3VwTGFzdFRpbWU6IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLyogQWxsIGl0ZW1zIHRoYXQgdGhlIHNlbGVjdCBoYXMgKi9cbiAgICBhbGxJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyRHVwbGljYXRlcyh0aGlzLmNhY2hlZEl0ZW1zLmNvbmNhdCh0aGlzLml0ZW1zKSlcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVGV4dEZpZWxkLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1zZWxlY3QnOiB0cnVlLFxuICAgICAgICAndi1zZWxlY3QtLWNoaXBzJzogdGhpcy5oYXNDaGlwcyxcbiAgICAgICAgJ3Ytc2VsZWN0LS1jaGlwcy0tc21hbGwnOiB0aGlzLnNtYWxsQ2hpcHMsXG4gICAgICAgICd2LXNlbGVjdC0taXMtbWVudS1hY3RpdmUnOiB0aGlzLmlzTWVudUFjdGl2ZSxcbiAgICAgICAgJ3Ytc2VsZWN0LS1pcy1tdWx0aSc6IHRoaXMubXVsdGlwbGUsXG4gICAgICB9XG4gICAgfSxcbiAgICAvKiBVc2VkIGJ5IG90aGVyIGNvbXBvbmVudHMgdG8gb3ZlcndyaXRlICovXG4gICAgY29tcHV0ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsSXRlbXNcbiAgICB9LFxuICAgIGNvbXB1dGVkT3ducyAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgbGlzdC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBjb21wdXRlZENvdW50ZXJWYWx1ZSAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlXG4gICAgICAgID8gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgICA6ICh0aGlzLmdldFRleHQodGhpcy5zZWxlY3RlZEl0ZW1zWzBdKSB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGhcbiAgICB9LFxuICAgIGRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuaXNGb2N1c2VkID8gW3tcbiAgICAgICAgbmFtZTogJ2NsaWNrLW91dHNpZGUnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGhhbmRsZXI6IHRoaXMuYmx1cixcbiAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgIH0sXG4gICAgICB9XSA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZHluYW1pY0hlaWdodCAoKSB7XG4gICAgICByZXR1cm4gJ2F1dG8nXG4gICAgfSxcbiAgICBoYXNDaGlwcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlwcyB8fCB0aGlzLnNtYWxsQ2hpcHNcbiAgICB9LFxuICAgIGhhc1Nsb3QgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5oYXNDaGlwcyB8fCB0aGlzLiRzY29wZWRTbG90cy5zZWxlY3Rpb24pXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgbGlzdERhdGEgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzY29wZUlkID0gdGhpcy4kdm5vZGUgJiYgKHRoaXMuJHZub2RlLmNvbnRleHQhLiRvcHRpb25zIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLl9zY29wZUlkXG4gICAgICBjb25zdCBhdHRycyA9IHNjb3BlSWQgPyB7XG4gICAgICAgIFtzY29wZUlkXTogdHJ1ZSxcbiAgICAgIH0gOiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkT3ducyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhY3Rpb246IHRoaXMubXVsdGlwbGUsXG4gICAgICAgICAgY29sb3I6IHRoaXMuaXRlbUNvbG9yLFxuICAgICAgICAgIGRlbnNlOiB0aGlzLmRlbnNlLFxuICAgICAgICAgIGhpZGVTZWxlY3RlZDogdGhpcy5oaWRlU2VsZWN0ZWQsXG4gICAgICAgICAgaXRlbXM6IHRoaXMudmlydHVhbGl6ZWRJdGVtcyxcbiAgICAgICAgICBpdGVtRGlzYWJsZWQ6IHRoaXMuaXRlbURpc2FibGVkLFxuICAgICAgICAgIGl0ZW1UZXh0OiB0aGlzLml0ZW1UZXh0LFxuICAgICAgICAgIGl0ZW1WYWx1ZTogdGhpcy5pdGVtVmFsdWUsXG4gICAgICAgICAgbm9EYXRhVGV4dDogdGhpcy4kdnVldGlmeS5sYW5nLnQodGhpcy5ub0RhdGFUZXh0KSxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLnNlbGVjdGVkSXRlbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc2VsZWN0OiB0aGlzLnNlbGVjdEl0ZW0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgaXRlbTogdGhpcy4kc2NvcGVkU2xvdHMuaXRlbSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YXRpY0xpc3QgKCk6IFZOb2RlIHtcbiAgICAgIGlmICh0aGlzLiRzbG90c1snbm8tZGF0YSddIHx8IHRoaXMuJHNsb3RzWydwcmVwZW5kLWl0ZW0nXSB8fCB0aGlzLiRzbG90c1snYXBwZW5kLWl0ZW0nXSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoJ2Fzc2VydDogc3RhdGljTGlzdCBzaG91bGQgbm90IGJlIGNhbGxlZCBpZiBzbG90cyBhcmUgdXNlZCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTZWxlY3RMaXN0LCB0aGlzLmxpc3REYXRhKVxuICAgIH0sXG4gICAgdmlydHVhbGl6ZWRJdGVtcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuICh0aGlzLiRfbWVudVByb3BzIGFzIGFueSkuYXV0b1xuICAgICAgICA/IHRoaXMuY29tcHV0ZWRJdGVtc1xuICAgICAgICA6IHRoaXMuY29tcHV0ZWRJdGVtcy5zbGljZSgwLCB0aGlzLmxhc3RJdGVtKVxuICAgIH0sXG4gICAgbWVudUNhblNob3c6ICgpID0+IHRydWUsXG4gICAgJF9tZW51UHJvcHMgKCk6IG9iamVjdCB7XG4gICAgICBsZXQgbm9ybWFsaXNlZFByb3BzID0gdHlwZW9mIHRoaXMubWVudVByb3BzID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHRoaXMubWVudVByb3BzLnNwbGl0KCcsJylcbiAgICAgICAgOiB0aGlzLm1lbnVQcm9wc1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShub3JtYWxpc2VkUHJvcHMpKSB7XG4gICAgICAgIG5vcm1hbGlzZWRQcm9wcyA9IG5vcm1hbGlzZWRQcm9wcy5yZWR1Y2UoKGFjYywgcCkgPT4ge1xuICAgICAgICAgIGFjY1twLnRyaW0oKV0gPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9LCB7fSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdE1lbnVQcm9wcyxcbiAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgIHZhbHVlOiB0aGlzLm1lbnVDYW5TaG93ICYmIHRoaXMuaXNNZW51QWN0aXZlLFxuICAgICAgICBudWRnZUJvdHRvbTogbm9ybWFsaXNlZFByb3BzLm9mZnNldFkgPyAxIDogMCwgLy8gY29udmVydCB0byBpbnRcbiAgICAgICAgLi4ubm9ybWFsaXNlZFByb3BzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbFZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdmFsXG4gICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMoKVxuICAgIH0sXG4gICAgaXNNZW51QWN0aXZlICh2YWwpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMub25NZW51QWN0aXZlQ2hhbmdlKHZhbCkpXG4gICAgfSxcbiAgICBpdGVtczoge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlciAodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlSXRlbXMpIHtcbiAgICAgICAgICAvLyBCcmVha3MgdnVlLXRlc3QtdXRpbHMgaWZcbiAgICAgICAgICAvLyB0aGlzIGlzbid0IGNhbGN1bGF0ZWRcbiAgICAgICAgICAvLyBvbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRJdGVtcyA9IHRoaXMuZmlsdGVyRHVwbGljYXRlcyh0aGlzLmNhY2hlZEl0ZW1zLmNvbmNhdCh2YWwpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbXMoKVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGJsdXIgKGU/OiBFdmVudCkge1xuICAgICAgVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuYmx1ci5jYWxsKHRoaXMsIGUpXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBhY3RpdmF0ZU1lbnUgKCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmlzTWVudUFjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIGNsZWFyYWJsZUNhbGxiYWNrICgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5tdWx0aXBsZSA/IFtdIDogdW5kZWZpbmVkKVxuICAgICAgdGhpcy5zZXRNZW51SW5kZXgoLTEpXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKSlcblxuICAgICAgaWYgKHRoaXMub3Blbk9uQ2xlYXIpIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VDb25kaXRpb25hbCAoZTogRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc01lbnVBY3RpdmUpIHJldHVybiB0cnVlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLl9pc0Rlc3Ryb3llZCAmJlxuXG4gICAgICAgIC8vIENsaWNrIG9yaWdpbmF0ZXMgZnJvbSBvdXRzaWRlIHRoZSBtZW51IGNvbnRlbnRcbiAgICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkb24ndCBjbG9zZSB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZFxuICAgICAgICAoIXRoaXMuZ2V0Q29udGVudCgpIHx8XG4gICAgICAgICF0aGlzLmdldENvbnRlbnQoKS5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkgJiZcblxuICAgICAgICAvLyBDbGljayBvcmlnaW5hdGVzIGZyb20gb3V0c2lkZSB0aGUgZWxlbWVudFxuICAgICAgICB0aGlzLiRlbCAmJlxuICAgICAgICAhdGhpcy4kZWwuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkgJiZcbiAgICAgICAgZS50YXJnZXQgIT09IHRoaXMuJGVsXG4gICAgICApXG4gICAgfSxcbiAgICBmaWx0ZXJEdXBsaWNhdGVzIChhcnI6IGFueVtdKSB7XG4gICAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgTWFwKClcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhcnJbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZ2V0VmFsdWUoaXRlbSlcblxuICAgICAgICAvLyBUT0RPOiBjb21wYXJhdG9yXG4gICAgICAgICF1bmlxdWVWYWx1ZXMuaGFzKHZhbCkgJiYgdW5pcXVlVmFsdWVzLnNldCh2YWwsIGl0ZW0pXG4gICAgICB9XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWVWYWx1ZXMudmFsdWVzKCkpXG4gICAgfSxcbiAgICBmaW5kRXhpc3RpbmdJbmRleCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0pXG5cbiAgICAgIHJldHVybiAodGhpcy5pbnRlcm5hbFZhbHVlIHx8IFtdKS5maW5kSW5kZXgoKGk6IG9iamVjdCkgPT4gdGhpcy52YWx1ZUNvbXBhcmF0b3IodGhpcy5nZXRWYWx1ZShpKSwgaXRlbVZhbHVlKSlcbiAgICB9LFxuICAgIGdldENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMubWVudSAmJiB0aGlzLiRyZWZzLm1lbnUuJHJlZnMuY29udGVudFxuICAgIH0sXG4gICAgZ2VuQ2hpcFNlbGVjdGlvbiAoaXRlbTogb2JqZWN0LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBpc0Rpc2FibGVkID0gKFxuICAgICAgICAhdGhpcy5pc0ludGVyYWN0aXZlIHx8XG4gICAgICAgIHRoaXMuZ2V0RGlzYWJsZWQoaXRlbSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkNoaXAsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNoaXAtLXNlbGVjdCcsXG4gICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiAtMSB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNsb3NlOiB0aGlzLmRlbGV0YWJsZUNoaXBzICYmICFpc0Rpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlucHV0VmFsdWU6IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgc21hbGw6IHRoaXMuc21hbGxDaGlwcyxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm5cblxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NsaWNrOmNsb3NlJzogKCkgPT4gdGhpcy5vbkNoaXBJbnB1dChpdGVtKSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKGl0ZW0pKSxcbiAgICAgIH0sIHRoaXMuZ2V0VGV4dChpdGVtKSlcbiAgICB9LFxuICAgIGdlbkNvbW1hU2VsZWN0aW9uIChpdGVtOiBvYmplY3QsIGluZGV4OiBudW1iZXIsIGxhc3Q6IGJvb2xlYW4pIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCAmJiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAoXG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5nZXREaXNhYmxlZChpdGVtKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IoY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9uIHYtc2VsZWN0X19zZWxlY3Rpb24tLWNvbW1hJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zZWxlY3RfX3NlbGVjdGlvbi0tZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoaXRlbSkpLFxuICAgICAgfSksIGAke3RoaXMuZ2V0VGV4dChpdGVtKX0ke2xhc3QgPyAnJyA6ICcsICd9YClcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpOiAoVk5vZGUgfCBWTm9kZVtdIHwgbnVsbClbXSB7XG4gICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5nZW5TZWxlY3Rpb25zKClcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZW5JbnB1dCgpXG5cbiAgICAgIC8vIElmIHRoZSByZXR1cm4gaXMgYW4gZW1wdHkgYXJyYXlcbiAgICAgIC8vIHB1c2ggdGhlIGlucHV0XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3Rpb25zKSkge1xuICAgICAgICBzZWxlY3Rpb25zLnB1c2goaW5wdXQpXG4gICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCBpbnRvIGNoaWxkcmVuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuID0gc2VsZWN0aW9ucy5jaGlsZHJlbiB8fCBbXVxuICAgICAgICBzZWxlY3Rpb25zLmNoaWxkcmVuLnB1c2goaW5wdXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuRmllbGRzZXQoKSxcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiAndi1zZWxlY3RfX3Nsb3QnLFxuICAgICAgICAgIGRpcmVjdGl2ZXM6IHRoaXMuZGlyZWN0aXZlcyxcbiAgICAgICAgfSwgW1xuICAgICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgICB0aGlzLnByZWZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3ByZWZpeCcpIDogbnVsbCxcbiAgICAgICAgICBzZWxlY3Rpb25zLFxuICAgICAgICAgIHRoaXMuc3VmZml4ID8gdGhpcy5nZW5BZmZpeCgnc3VmZml4JykgOiBudWxsLFxuICAgICAgICAgIHRoaXMuZ2VuQ2xlYXJJY29uKCksXG4gICAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICAgIHRoaXMuZ2VuSGlkZGVuSW5wdXQoKSxcbiAgICAgICAgXSksXG4gICAgICAgIHRoaXMuZ2VuTWVudSgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5JY29uIChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGNiPzogKGU6IEV2ZW50KSA9PiB2b2lkLFxuICAgICAgZXh0cmFEYXRhPzogVk5vZGVEYXRhXG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5JY29uLmNhbGwodGhpcywgdHlwZSwgY2IsIGV4dHJhRGF0YSlcblxuICAgICAgaWYgKHR5cGUgPT09ICdhcHBlbmQnKSB7XG4gICAgICAgIC8vIERvbid0IGFsbG93IHRoZSBkcm9wZG93biBpY29uIHRvIGJlIGZvY3VzZWRcbiAgICAgICAgaWNvbi5jaGlsZHJlbiFbMF0uZGF0YSA9IG1lcmdlRGF0YShpY29uLmNoaWxkcmVuIVswXS5kYXRhISwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YWJpbmRleDogaWNvbi5jaGlsZHJlbiFbMF0uY29tcG9uZW50T3B0aW9ucyEubGlzdGVuZXJzICYmICctMScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWNvblxuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXQuY2FsbCh0aGlzKVxuXG4gICAgICBkZWxldGUgaW5wdXQuZGF0YSEuYXR0cnMhLm5hbWVcblxuICAgICAgaW5wdXQuZGF0YSA9IG1lcmdlRGF0YShpbnB1dC5kYXRhISwge1xuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAnYXJpYS1yZWFkb25seSc6IFN0cmluZyh0aGlzLmlzUmVhZG9ubHkpLFxuICAgICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aCh0aGlzLiRyZWZzLm1lbnUsICdhY3RpdmVUaWxlLmlkJyksXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBnZXRPYmplY3RWYWx1ZUJ5UGF0aChpbnB1dC5kYXRhISwgJ2F0dHJzLmF1dG9jb21wbGV0ZScsICdvZmYnKSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsga2V5cHJlc3M6IHRoaXMub25LZXlQcmVzcyB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBnZW5IaWRkZW5JbnB1dCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogdGhpcy5sYXp5VmFsdWUgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLmF0dHJzJC5uYW1lLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKTogVk5vZGUge1xuICAgICAgY29uc3QgcmVuZGVyID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgcmVuZGVyLmRhdGEhLmF0dHJzID0ge1xuICAgICAgICAuLi5yZW5kZXIuZGF0YSEuYXR0cnMsXG4gICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICdsaXN0Ym94JyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBTdHJpbmcodGhpcy5pc01lbnVBY3RpdmUpLFxuICAgICAgICAnYXJpYS1vd25zJzogdGhpcy5jb21wdXRlZE93bnMsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZW5kZXJcbiAgICB9LFxuICAgIGdlbkxpc3QgKCk6IFZOb2RlIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gc2xvdHMsIHdlIGNhbiB1c2UgYSBjYWNoZWQgVk5vZGUgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgICAgaWYgKHRoaXMuJHNsb3RzWyduby1kYXRhJ10gfHwgdGhpcy4kc2xvdHNbJ3ByZXBlbmQtaXRlbSddIHx8IHRoaXMuJHNsb3RzWydhcHBlbmQtaXRlbSddKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbkxpc3RXaXRoU2xvdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aWNMaXN0XG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5MaXN0V2l0aFNsb3QgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHNsb3RzID0gWydwcmVwZW5kLWl0ZW0nLCAnbm8tZGF0YScsICdhcHBlbmQtaXRlbSddXG4gICAgICAgIC5maWx0ZXIoc2xvdE5hbWUgPT4gdGhpcy4kc2xvdHNbc2xvdE5hbWVdKVxuICAgICAgICAubWFwKHNsb3ROYW1lID0+IHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywge1xuICAgICAgICAgIHNsb3Q6IHNsb3ROYW1lLFxuICAgICAgICB9LCB0aGlzLiRzbG90c1tzbG90TmFtZV0pKVxuICAgICAgLy8gUmVxdWlyZXMgZGVzdHJ1Y3R1cmluZyBkdWUgdG8gVnVlXG4gICAgICAvLyBtb2RpZnlpbmcgdGhlIGBvbmAgcHJvcGVydHkgd2hlbiBwYXNzZWRcbiAgICAgIC8vIGFzIGEgcmVmZXJlbmNlZCBvYmplY3RcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZTZWxlY3RMaXN0LCB7XG4gICAgICAgIC4uLnRoaXMubGlzdERhdGEsXG4gICAgICB9LCBzbG90cylcbiAgICB9LFxuICAgIGdlbk1lbnUgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy4kX21lbnVQcm9wcyBhcyBhbnlcbiAgICAgIHByb3BzLmFjdGl2YXRvciA9IHRoaXMuJHJlZnNbJ2lucHV0LXNsb3QnXVxuXG4gICAgICAvLyBBdHRhY2ggdG8gcm9vdCBlbCBzbyB0aGF0XG4gICAgICAvLyBtZW51IGNvdmVycyBwcmVwZW5kL2FwcGVuZCBpY29uc1xuICAgICAgaWYgKFxuICAgICAgICAvLyBUT0RPOiBtYWtlIHRoaXMgYSBjb21wdXRlZCBwcm9wZXJ0eSBvciBoZWxwZXIgb3Igc29tZXRoaW5nXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSAnJyB8fCAvLyBJZiB1c2VkIGFzIGEgYm9vbGVhbiBwcm9wICg8di1tZW51IGF0dGFjaD4pXG4gICAgICAgIHRoaXMuYXR0YWNoID09PSB0cnVlIHx8IC8vIElmIGJvdW5kIHRvIGEgYm9vbGVhbiAoPHYtbWVudSA6YXR0YWNoPVwidHJ1ZVwiPilcbiAgICAgICAgdGhpcy5hdHRhY2ggPT09ICdhdHRhY2gnIC8vIElmIGJvdW5kIGFzIGJvb2xlYW4gcHJvcCBpbiBwdWcgKHYtbWVudShhdHRhY2gpKVxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmF0dGFjaCA9IHRoaXMuJGVsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5hdHRhY2ggPSB0aGlzLmF0dGFjaFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTWVudSwge1xuICAgICAgICBhdHRyczogeyByb2xlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6ICh2YWw6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdmFsXG4gICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHZhbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Nyb2xsOiB0aGlzLm9uU2Nyb2xsLFxuICAgICAgICB9LFxuICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgIH0sIFt0aGlzLmdlbkxpc3QoKV0pXG4gICAgfSxcbiAgICBnZW5TZWxlY3Rpb25zICgpOiBWTm9kZSB7XG4gICAgICBsZXQgbGVuZ3RoID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aFxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgQXJyYXkobGVuZ3RoKVxuXG4gICAgICBsZXQgZ2VuU2VsZWN0aW9uXG4gICAgICBpZiAodGhpcy4kc2NvcGVkU2xvdHMuc2VsZWN0aW9uKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuU2xvdFNlbGVjdGlvblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0NoaXBzKSB7XG4gICAgICAgIGdlblNlbGVjdGlvbiA9IHRoaXMuZ2VuQ2hpcFNlbGVjdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VuU2VsZWN0aW9uID0gdGhpcy5nZW5Db21tYVNlbGVjdGlvblxuICAgICAgfVxuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgY2hpbGRyZW5bbGVuZ3RoXSA9IGdlblNlbGVjdGlvbihcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNbbGVuZ3RoXSxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID09PSBjaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNlbGVjdF9fc2VsZWN0aW9ucycsXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlblNsb3RTZWxlY3Rpb24gKGl0ZW06IG9iamVjdCwgaW5kZXg6IG51bWJlcik6IFZOb2RlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlZFNsb3RzLnNlbGVjdGlvbiEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGNsYXNzOiAndi1jaGlwLS1zZWxlY3QnLFxuICAgICAgICB9LFxuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzZWxlY3Q6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZDogaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLmlzSW50ZXJhY3RpdmUsXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0TWVudUluZGV4ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLm1lbnUgPyAodGhpcy4kcmVmcy5tZW51IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmxpc3RJbmRleCA6IC0xXG4gICAgfSxcbiAgICBnZXREaXNhYmxlZCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1EaXNhYmxlZCwgZmFsc2UpXG4gICAgfSxcbiAgICBnZXRUZXh0IChpdGVtOiBvYmplY3QpIHtcbiAgICAgIHJldHVybiBnZXRQcm9wZXJ0eUZyb21JdGVtKGl0ZW0sIHRoaXMuaXRlbVRleHQsIGl0ZW0pXG4gICAgfSxcbiAgICBnZXRWYWx1ZSAoaXRlbTogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZ2V0UHJvcGVydHlGcm9tSXRlbShpdGVtLCB0aGlzLml0ZW1WYWx1ZSwgdGhpcy5nZXRUZXh0KGl0ZW0pKVxuICAgIH0sXG4gICAgb25CbHVyIChlPzogRXZlbnQpIHtcbiAgICAgIGUgJiYgdGhpcy4kZW1pdCgnYmx1cicsIGUpXG4gICAgfSxcbiAgICBvbkNoaXBJbnB1dCAoaXRlbTogb2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkgdGhpcy5zZWxlY3RJdGVtKGl0ZW0pXG4gICAgICBlbHNlIHRoaXMuc2V0VmFsdWUobnVsbClcbiAgICAgIC8vIElmIGFsbCBpdGVtcyBoYXZlIGJlZW4gZGVsZXRlZCxcbiAgICAgIC8vIG9wZW4gYHYtbWVudWBcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTFcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc0ludGVyYWN0aXZlKSByZXR1cm5cblxuICAgICAgaWYgKCF0aGlzLmlzQXBwZW5kSW5uZXIoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9LFxuICAgIG9uRXNjRG93biAoZTogRXZlbnQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKHRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgb25LZXlQcmVzcyAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm11bHRpcGxlIHx8XG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5kaXNhYmxlTG9va3VwXG4gICAgICApIHJldHVyblxuXG4gICAgICBjb25zdCBLRVlCT0FSRF9MT09LVVBfVEhSRVNIT0xEID0gMTAwMCAvLyBtaWxsaXNlY29uZHNcbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICBpZiAobm93IC0gdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID4gS0VZQk9BUkRfTE9PS1VQX1RIUkVTSE9MRCkge1xuICAgICAgICB0aGlzLmtleWJvYXJkTG9va3VwUHJlZml4ID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXggKz0gZS5rZXkudG9Mb3dlckNhc2UoKVxuICAgICAgdGhpcy5rZXlib2FyZExvb2t1cExhc3RUaW1lID0gbm93XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAodGhpcy5nZXRUZXh0KGl0ZW0pIHx8ICcnKS50b1N0cmluZygpXG5cbiAgICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMua2V5Ym9hcmRMb29rdXBQcmVmaXgpXG4gICAgICB9KVxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYWxsSXRlbXNbaW5kZXhdXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMubGFzdEl0ZW0gPSBNYXRoLm1heCh0aGlzLmxhc3RJdGVtLCBpbmRleCArIDUpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5yZXR1cm5PYmplY3QgPyBpdGVtIDogdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kcmVmcy5tZW51LmdldFRpbGVzKCkpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRNZW51SW5kZXgoaW5kZXgpKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5pc1JlYWRvbmx5ICYmIGUua2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSByZXR1cm5cblxuICAgICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZVxuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICAvLyBJZiBlbnRlciwgc3BhY2UsIG9wZW4gbWVudVxuICAgICAgaWYgKFtcbiAgICAgICAga2V5Q29kZXMuZW50ZXIsXG4gICAgICAgIGtleUNvZGVzLnNwYWNlLFxuICAgICAgXS5pbmNsdWRlcyhrZXlDb2RlKSkgdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcblxuICAgICAgaWYgKCFtZW51KSByZXR1cm5cblxuICAgICAgLy8gSWYgbWVudSBpcyBhY3RpdmUsIGFsbG93IGRlZmF1bHRcbiAgICAgIC8vIGxpc3RJbmRleCBjaGFuZ2UgZnJvbSBtZW51XG4gICAgICBpZiAodGhpcy5pc01lbnVBY3RpdmUgJiYga2V5Q29kZSAhPT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBtZW51LmNoYW5nZUxpc3RJbmRleChlKVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpsaXN0LWluZGV4JywgbWVudS5saXN0SW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIElmIG1lbnUgaXMgbm90IGFjdGl2ZSwgdXAgYW5kIGRvd24gY2FuIGRvXG4gICAgICAvLyBvbmUgb2YgMiB0aGluZ3MuIElmIG11bHRpcGxlLCBvcGVucyB0aGVcbiAgICAgIC8vIG1lbnUsIGlmIG5vdCwgd2lsbCBjeWNsZSB0aHJvdWdoIGFsbFxuICAgICAgLy8gYXZhaWxhYmxlIG9wdGlvbnNcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNNZW51QWN0aXZlICYmXG4gICAgICAgIFtrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93bl0uaW5jbHVkZXMoa2V5Q29kZSlcbiAgICAgICkgcmV0dXJuIHRoaXMub25VcERvd24oZSlcblxuICAgICAgLy8gSWYgZXNjYXBlIGRlYWN0aXZhdGUgdGhlIG1lbnVcbiAgICAgIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MpIHJldHVybiB0aGlzLm9uRXNjRG93bihlKVxuXG4gICAgICAvLyBJZiB0YWIgLSBzZWxlY3QgaXRlbSBvciBjbG9zZSBtZW51XG4gICAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSByZXR1cm4gdGhpcy5vblRhYkRvd24oZSlcblxuICAgICAgLy8gSWYgc3BhY2UgcHJldmVudERlZmF1bHRcbiAgICAgIGlmIChrZXlDb2RlID09PSBrZXlDb2Rlcy5zcGFjZSkgcmV0dXJuIHRoaXMub25TcGFjZURvd24oZSlcbiAgICB9LFxuICAgIG9uTWVudUFjdGl2ZUNoYW5nZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBJZiBtZW51IGlzIGNsb3NpbmcgYW5kIG11bGl0cGxlXG4gICAgICAvLyBvciBtZW51SW5kZXggaXMgYWxyZWFkeSBzZXRcbiAgICAgIC8vIHNraXAgbWVudSBpbmRleCByZWNhbGN1bGF0aW9uXG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLm11bHRpcGxlICYmICF2YWwpIHx8XG4gICAgICAgIHRoaXMuZ2V0TWVudUluZGV4KCkgPiAtMVxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUgfHwgIXRoaXMuaXNEaXJ0eSkgcmV0dXJuXG5cbiAgICAgIC8vIFdoZW4gbWVudSBvcGVucywgc2V0IGluZGV4IG9mIGZpcnN0IGFjdGl2ZSBpdGVtXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUudGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1lbnUudGlsZXNbaV0uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRoaXMuc2V0TWVudUluZGV4KGkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25Nb3VzZVVwIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzTW91c2VEb3duICYmXG4gICAgICAgIGUud2hpY2ggIT09IDMgJiZcbiAgICAgICAgdGhpcy5pc0ludGVyYWN0aXZlXG4gICAgICApIHtcbiAgICAgICAgLy8gSWYgYXBwZW5kIGlubmVyIGlzIHByZXNlbnRcbiAgICAgICAgLy8gYW5kIHRoZSB0YXJnZXQgaXMgaXRzZWxmXG4gICAgICAgIC8vIG9yIGluc2lkZSwgdG9nZ2xlIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuaXNBcHBlbmRJbm5lcihlLnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiAodGhpcy5pc01lbnVBY3RpdmUgPSAhdGhpcy5pc01lbnVBY3RpdmUpKVxuICAgICAgICAvLyBJZiB1c2VyIGlzIGNsaWNraW5nIGluIHRoZSBjb250YWluZXJcbiAgICAgICAgLy8gYW5kIGZpZWxkIGlzIGVuY2xvc2VkLCBhY3RpdmF0ZSBpdFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmNsb3NlZCkge1xuICAgICAgICAgIHRoaXMuaXNNZW51QWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvblNjcm9sbCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNNZW51QWN0aXZlKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsVG9wID0gMCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5sYXN0SXRlbSA+IHRoaXMuY29tcHV0ZWRJdGVtcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IHNob3dNb3JlSXRlbXMgPSAoXG4gICAgICAgICAgdGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsSGVpZ2h0IC1cbiAgICAgICAgICAodGhpcy5nZXRDb250ZW50KCkuc2Nyb2xsVG9wICtcbiAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKS5jbGllbnRIZWlnaHQpXG4gICAgICAgICkgPCAyMDBcblxuICAgICAgICBpZiAoc2hvd01vcmVJdGVtcykge1xuICAgICAgICAgIHRoaXMubGFzdEl0ZW0gKz0gMjBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TcGFjZURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gICAgb25UYWJEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy4kcmVmcy5tZW51XG5cbiAgICAgIGlmICghbWVudSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSBtZW51LmFjdGl2ZVRpbGVcblxuICAgICAgLy8gQW4gaXRlbSB0aGF0IGlzIHNlbGVjdGVkIGJ5XG4gICAgICAvLyBtZW51LWluZGV4IHNob3VsZCB0b2dnbGVkXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLm11bHRpcGxlICYmXG4gICAgICAgIGFjdGl2ZVRpbGUgJiZcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmVcbiAgICAgICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGFjdGl2ZVRpbGUuY2xpY2soKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgbWFrZSBpdCBoZXJlLFxuICAgICAgICAvLyB0aGUgdXNlciBoYXMgbm8gc2VsZWN0ZWQgaW5kZXhlc1xuICAgICAgICAvLyBhbmQgaXMgcHJvYmFibHkgdGFiYmluZyBvdXRcbiAgICAgICAgdGhpcy5ibHVyKGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvblVwRG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuJHJlZnMubWVudVxuXG4gICAgICBpZiAoIW1lbnUpIHJldHVyblxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgLy8gTXVsdGlwbGUgc2VsZWN0cyBkbyBub3QgY3ljbGUgdGhlaXIgdmFsdWVcbiAgICAgIC8vIHdoZW4gcHJlc3NpbmcgdXAgb3IgZG93biwgaW5zdGVhZCBhY3RpdmF0ZVxuICAgICAgLy8gdGhlIG1lbnVcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSByZXR1cm4gdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlXG5cbiAgICAgIC8vIEN5Y2xlIHRocm91Z2ggYXZhaWxhYmxlIHZhbHVlcyB0byBhY2hpZXZlXG4gICAgICAvLyBzZWxlY3QgbmF0aXZlIGJlaGF2aW9yXG4gICAgICBtZW51LmlzQm9vdGVkID0gdHJ1ZVxuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgbWVudS5nZXRUaWxlcygpXG4gICAgICAgIGtleUNvZGVzLnVwID09PSBrZXlDb2RlID8gbWVudS5wcmV2VGlsZSgpIDogbWVudS5uZXh0VGlsZSgpXG4gICAgICAgIG1lbnUuYWN0aXZlVGlsZSAmJiBtZW51LmFjdGl2ZVRpbGUuY2xpY2soKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlbGVjdEl0ZW0gKGl0ZW06IG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5yZXR1cm5PYmplY3QgPyBpdGVtIDogdGhpcy5nZXRWYWx1ZShpdGVtKSlcbiAgICAgICAgdGhpcy5pc01lbnVBY3RpdmUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxWYWx1ZSA9ICh0aGlzLmludGVybmFsVmFsdWUgfHwgW10pLnNsaWNlKClcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZmluZEV4aXN0aW5nSW5kZXgoaXRlbSlcblxuICAgICAgICBpICE9PSAtMSA/IGludGVybmFsVmFsdWUuc3BsaWNlKGksIDEpIDogaW50ZXJuYWxWYWx1ZS5wdXNoKGl0ZW0pXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoaW50ZXJuYWxWYWx1ZS5tYXAoKGk6IG9iamVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJldHVybk9iamVjdCA/IGkgOiB0aGlzLmdldFZhbHVlKGkpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIC8vIFdoZW4gc2VsZWN0aW5nIG11bHRpcGxlXG4gICAgICAgIC8vIGFkanVzdCBtZW51IGFmdGVyIGVhY2hcbiAgICAgICAgLy8gc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLm1lbnUgJiZcbiAgICAgICAgICAgICh0aGlzLiRyZWZzLm1lbnUgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkudXBkYXRlRGltZW5zaW9ucygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHJlc2V0IGxpc3QgaW5kZXggZm9yIG11bHRpcGxlXG4gICAgICAgIC8vIHRvIGtlZXAgaGlnaGxpZ2h0IHdoZW4gYW4gaXRlbSBpcyB0b2dnbGVkXG4gICAgICAgIC8vIG9uIGFuZCBvZmZcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSByZXR1cm5cblxuICAgICAgICBjb25zdCBsaXN0SW5kZXggPSB0aGlzLmdldE1lbnVJbmRleCgpXG5cbiAgICAgICAgdGhpcy5zZXRNZW51SW5kZXgoLTEpXG5cbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gaXRlbSB0byByZS1oaWdobGlnaHRcbiAgICAgICAgLy8gd2hlbiBzZWxlY3Rpb25zIGFyZSBoaWRkZW5cbiAgICAgICAgaWYgKHRoaXMuaGlkZVNlbGVjdGVkKSByZXR1cm5cblxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLnNldE1lbnVJbmRleChsaXN0SW5kZXgpKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0TWVudUluZGV4IChpbmRleDogbnVtYmVyKSB7XG4gICAgICB0aGlzLiRyZWZzLm1lbnUgJiYgKCh0aGlzLiRyZWZzLm1lbnUgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubGlzdEluZGV4ID0gaW5kZXgpXG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZEl0ZW1zICgpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXVxuICAgICAgY29uc3QgdmFsdWVzID0gIXRoaXMubXVsdGlwbGUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgICA/IFt0aGlzLmludGVybmFsVmFsdWVdXG4gICAgICAgIDogdGhpcy5pbnRlcm5hbFZhbHVlXG5cbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5maW5kSW5kZXgodiA9PiB0aGlzLnZhbHVlQ29tcGFyYXRvcihcbiAgICAgICAgICB0aGlzLmdldFZhbHVlKHYpLFxuICAgICAgICAgIHRoaXMuZ2V0VmFsdWUodmFsdWUpXG4gICAgICAgICkpXG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5hbGxJdGVtc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRJdGVtc1xuICAgIH0sXG4gICAgc2V0VmFsdWUgKHZhbHVlOiBhbnkpIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5pbnRlcm5hbFZhbHVlXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWx1ZVxuICAgICAgdmFsdWUgIT09IG9sZFZhbHVlICYmIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKVxuICAgIH0sXG4gICAgaXNBcHBlbmRJbm5lciAodGFyZ2V0OiBhbnkpIHtcbiAgICAgIC8vIHJldHVybiB0cnVlIGlmIGFwcGVuZCBpbm5lciBpcyBwcmVzZW50XG4gICAgICAvLyBhbmQgdGhlIHRhcmdldCBpcyBpdHNlbGYgb3IgaW5zaWRlXG4gICAgICBjb25zdCBhcHBlbmRJbm5lciA9IHRoaXMuJHJlZnNbJ2FwcGVuZC1pbm5lciddXG5cbiAgICAgIHJldHVybiBhcHBlbmRJbm5lciAmJiAoYXBwZW5kSW5uZXIgPT09IHRhcmdldCB8fCBhcHBlbmRJbm5lci5jb250YWlucyh0YXJnZXQpKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkJhZGdlLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbi9WSWNvbidcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcbmltcG9ydCBUcmFuc2l0aW9uYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdHJhbnNpdGlvbmFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQge1xuICBjb252ZXJ0VG9Vbml0LFxuICBnZXRTbG90LFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFBvc2l0aW9uYWJsZUZhY3RvcnkoWydsZWZ0JywgJ2JvdHRvbSddKSxcbiAgVGhlbWVhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBUcmFuc2l0aW9uYWJsZSxcbi8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWJhZGdlJyxcblxuICBwcm9wczoge1xuICAgIGF2YXRhcjogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgY29udGVudDogeyByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBkb3Q6IEJvb2xlYW4sXG4gICAgbGFiZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckdnVldGlmeS5iYWRnZScsXG4gICAgfSxcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgaW5saW5lOiBCb29sZWFuLFxuICAgIG9mZnNldFg6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgb2Zmc2V0WTogW051bWJlciwgU3RyaW5nXSxcbiAgICBvdmVybGFwOiBCb29sZWFuLFxuICAgIHRpbGU6IEJvb2xlYW4sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3NjYWxlLXJvdGF0ZS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICAgIHZhbHVlOiB7IGRlZmF1bHQ6IHRydWUgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1iYWRnZS0tYXZhdGFyJzogdGhpcy5hdmF0YXIsXG4gICAgICAgICd2LWJhZGdlLS1ib3JkZXJlZCc6IHRoaXMuYm9yZGVyZWQsXG4gICAgICAgICd2LWJhZGdlLS1ib3R0b20nOiB0aGlzLmJvdHRvbSxcbiAgICAgICAgJ3YtYmFkZ2UtLWRvdCc6IHRoaXMuZG90LFxuICAgICAgICAndi1iYWRnZS0taWNvbic6IHRoaXMuaWNvbiAhPSBudWxsLFxuICAgICAgICAndi1iYWRnZS0taW5saW5lJzogdGhpcy5pbmxpbmUsXG4gICAgICAgICd2LWJhZGdlLS1sZWZ0JzogdGhpcy5sZWZ0LFxuICAgICAgICAndi1iYWRnZS0tb3ZlcmxhcCc6IHRoaXMub3ZlcmxhcCxcbiAgICAgICAgJ3YtYmFkZ2UtLXRpbGUnOiB0aGlzLnRpbGUsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRCb3R0b20gKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5ib3R0b20gPyAnYXV0bycgOiB0aGlzLmNvbXB1dGVkWU9mZnNldFxuICAgIH0sXG4gICAgY29tcHV0ZWRMZWZ0ICgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMuaXNSdGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdCA/IHRoaXMuY29tcHV0ZWRYT2Zmc2V0IDogJ2F1dG8nXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmxlZnQgPyAnYXV0bycgOiB0aGlzLmNvbXB1dGVkWE9mZnNldFxuICAgIH0sXG4gICAgY29tcHV0ZWRSaWdodCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmlzUnRsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQgPyAnYXV0bycgOiB0aGlzLmNvbXB1dGVkWE9mZnNldFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gIXRoaXMubGVmdCA/ICdhdXRvJyA6IHRoaXMuY29tcHV0ZWRYT2Zmc2V0XG4gICAgfSxcbiAgICBjb21wdXRlZFRvcCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA/IHRoaXMuY29tcHV0ZWRZT2Zmc2V0IDogJ2F1dG8nXG4gICAgfSxcbiAgICBjb21wdXRlZFhPZmZzZXQgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjUG9zaXRpb24odGhpcy5vZmZzZXRYKVxuICAgIH0sXG4gICAgY29tcHV0ZWRZT2Zmc2V0ICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY1Bvc2l0aW9uKHRoaXMub2Zmc2V0WSlcbiAgICB9LFxuICAgIGlzUnRsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bFxuICAgIH0sXG4gICAgLy8gRGVmYXVsdCBmYWxsYmFjayBpZiBvZmZzZXRYXG4gICAgLy8gb3Igb2Zmc2V0WSBhcmUgdW5kZWZpbmVkLlxuICAgIG9mZnNldCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLm92ZXJsYXApIHJldHVybiB0aGlzLmRvdCA/IDggOiAxMlxuICAgICAgcmV0dXJuIHRoaXMuZG90ID8gMiA6IDRcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGlmICh0aGlzLmlubGluZSkgcmV0dXJuIHt9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvdHRvbTogdGhpcy5jb21wdXRlZEJvdHRvbSxcbiAgICAgICAgbGVmdDogdGhpcy5jb21wdXRlZExlZnQsXG4gICAgICAgIHJpZ2h0OiB0aGlzLmNvbXB1dGVkUmlnaHQsXG4gICAgICAgIHRvcDogdGhpcy5jb21wdXRlZFRvcCxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxjUG9zaXRpb24gKG9mZnNldDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgY2FsYygxMDAlIC0gJHtjb252ZXJ0VG9Vbml0KG9mZnNldCB8fCB0aGlzLm9mZnNldCl9KWBcbiAgICB9LFxuICAgIGdlbkJhZGdlICgpIHtcbiAgICAgIGNvbnN0IGxhbmcgPSB0aGlzLiR2dWV0aWZ5LmxhbmdcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy4kYXR0cnNbJ2FyaWEtbGFiZWwnXSB8fCBsYW5nLnQodGhpcy5sYWJlbClcblxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWJhZGdlX19iYWRnZScsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1hdG9taWMnOiB0aGlzLiRhdHRyc1snYXJpYS1hdG9taWMnXSB8fCAndHJ1ZScsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBsYWJlbCxcbiAgICAgICAgICAnYXJpYS1saXZlJzogdGhpcy4kYXR0cnNbJ2FyaWEtbGl2ZSddIHx8ICdwb2xpdGUnLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLiRhdHRycy50aXRsZSxcbiAgICAgICAgICByb2xlOiB0aGlzLiRhdHRycy5yb2xlIHx8ICdzdGF0dXMnLFxuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfV0sXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBiYWRnZSA9IHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBkYXRhLCBbdGhpcy5nZW5CYWRnZUNvbnRlbnQoKV0pXG5cbiAgICAgIGlmICghdGhpcy50cmFuc2l0aW9uKSByZXR1cm4gYmFkZ2VcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RyYW5zaXRpb24nLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgbmFtZTogdGhpcy50cmFuc2l0aW9uLFxuICAgICAgICAgIG9yaWdpbjogdGhpcy5vcmlnaW4sXG4gICAgICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgICB9LFxuICAgICAgfSwgW2JhZGdlXSlcbiAgICB9LFxuICAgIGdlbkJhZGdlQ29udGVudCAoKSB7XG4gICAgICAvLyBEb3QgcHJvcCBzaG93cyBubyBjb250ZW50XG4gICAgICBpZiAodGhpcy5kb3QpIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgY29uc3Qgc2xvdCA9IGdldFNsb3QodGhpcywgJ2JhZGdlJylcblxuICAgICAgaWYgKHNsb3QpIHJldHVybiBzbG90XG4gICAgICBpZiAodGhpcy5jb250ZW50KSByZXR1cm4gU3RyaW5nKHRoaXMuY29udGVudClcbiAgICAgIGlmICh0aGlzLmljb24pIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB0aGlzLmljb24pXG5cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGdlbkJhZGdlV3JhcHBlciAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWJhZGdlX193cmFwcGVyJyxcbiAgICAgIH0sIFt0aGlzLmdlbkJhZGdlKCldKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGJhZGdlID0gW3RoaXMuZ2VuQmFkZ2VXcmFwcGVyKCldXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbZ2V0U2xvdCh0aGlzKV1cbiAgICBjb25zdCB7XG4gICAgICAnYXJpYS1hdG9taWMnOiBfeCxcbiAgICAgICdhcmlhLWxhYmVsJzogX3ksXG4gICAgICAnYXJpYS1saXZlJzogX3osXG4gICAgICByb2xlLFxuICAgICAgdGl0bGUsXG4gICAgICAuLi5hdHRyc1xuICAgIH0gPSB0aGlzLiRhdHRyc1xuXG4gICAgaWYgKHRoaXMuaW5saW5lICYmIHRoaXMubGVmdCkgY2hpbGRyZW4udW5zaGlmdChiYWRnZSlcbiAgICBlbHNlIGNoaWxkcmVuLnB1c2goYmFkZ2UpXG5cbiAgICByZXR1cm4gaCgnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1iYWRnZScsXG4gICAgICBhdHRycyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgfSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCBWQnRuIGZyb20gJy4uL1ZCdG4vVkJ0bidcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWFwcC1iYXItbmF2LWljb24nLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgcmVuZGVyIChoLCB7IHNsb3RzLCBsaXN0ZW5lcnMsIHByb3BzLCBkYXRhIH0pIHtcbiAgICBjb25zdCBkID0gT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBzdGF0aWNDbGFzczogKGB2LWFwcC1iYXJfX25hdi1pY29uICR7ZGF0YS5zdGF0aWNDbGFzcyB8fCAnJ31gKS50cmltKCksXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgaWNvbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvbjogbGlzdGVuZXJzLFxuICAgIH0pXG5cbiAgICBjb25zdCBkZWZhdWx0U2xvdCA9IHNsb3RzKCkuZGVmYXVsdFxuXG4gICAgcmV0dXJuIGgoVkJ0biwgZCwgZGVmYXVsdFNsb3QgfHwgW2goVkljb24sICckbWVudScpXSlcbiAgfSxcbn0pXG4iLCIvLyBNaXhpbnNcbmltcG9ydCB7IGZhY3RvcnkgYXMgR3JvdXBhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9ncm91cGFibGUnXG5pbXBvcnQgUm91dGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdXRhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4vLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgUm91dGFibGUsXG4gIC8vIE11c3QgYmUgYWZ0ZXIgcm91dGFibGVcbiAgLy8gdG8gb3ZlcndyaXRlIGFjdGl2ZUNsYXNzXG4gIEdyb3VwYWJsZUZhY3RvcnkoJ3RhYnNCYXInKSxcbiAgVGhlbWVhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkZWw6IEhUTUxFbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKFxuICAvKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi10YWInLFxuXG4gIHByb3BzOiB7XG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHByb3h5Q2xhc3M6ICd2LXRhYi0tYWN0aXZlJyxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtdGFiJzogdHJ1ZSxcbiAgICAgICAgLi4uUm91dGFibGUub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRhYi0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAuLi50aGlzLmdyb3VwQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHZhbHVlICgpOiBhbnkge1xuICAgICAgbGV0IHRvID0gdGhpcy50byB8fCB0aGlzLmhyZWYgfHwgJydcblxuICAgICAgaWYgKHRoaXMuJHJvdXRlciAmJlxuICAgICAgICB0aGlzLnRvID09PSBPYmplY3QodGhpcy50bylcbiAgICAgICkge1xuICAgICAgICBjb25zdCByZXNvbHZlID0gdGhpcy4kcm91dGVyLnJlc29sdmUoXG4gICAgICAgICAgdGhpcy50byxcbiAgICAgICAgICB0aGlzLiRyb3V0ZSxcbiAgICAgICAgICB0aGlzLmFwcGVuZFxuICAgICAgICApXG5cbiAgICAgICAgdG8gPSByZXNvbHZlLmhyZWZcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvLnJlcGxhY2UoJyMnLCAnJylcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMub25Sb3V0ZUNoYW5nZSgpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrIChlOiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgLy8gSWYgdXNlciBwcm92aWRlcyBhblxuICAgICAgLy8gYWN0dWFsIGxpbmssIGRvIG5vdFxuICAgICAgLy8gcHJldmVudCBkZWZhdWx0XG4gICAgICBpZiAodGhpcy5ocmVmICYmXG4gICAgICAgIHRoaXMuaHJlZi5pbmRleE9mKCcjJykgPiAtMVxuICAgICAgKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgaWYgKGUuZGV0YWlsKSB0aGlzLiRlbC5ibHVyKClcblxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgICB0aGlzLnRvIHx8IHRoaXMudG9nZ2xlKClcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLmF0dHJzID0ge1xuICAgICAgLi4uZGF0YS5hdHRycyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogU3RyaW5nKHRoaXMuaXNBY3RpdmUpLFxuICAgICAgcm9sZTogJ3RhYicsXG4gICAgICB0YWJpbmRleDogMCxcbiAgICB9XG4gICAgZGF0YS5vbiA9IHtcbiAgICAgIC4uLmRhdGEub24sXG4gICAgICBrZXlkb3duOiAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lbnRlcikgdGhpcy5jbGljayhlKVxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2tleWRvd24nLCBlKVxuICAgICAgfSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIGRhdGEsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlNsaWRlR3JvdXAuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuaW1wb3J0IHsgVkZhZGVUcmFuc2l0aW9uIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCB7IEJhc2VJdGVtR3JvdXAgfSBmcm9tICcuLi9WSXRlbUdyb3VwL1ZJdGVtR3JvdXAnXG5cbi8vIE1peGluc1xuaW1wb3J0IE1vYmlsZSBmcm9tICcuLi8uLi9taXhpbnMvbW9iaWxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgUmVzaXplIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplJ1xuaW1wb3J0IFRvdWNoIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlLCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5pbnRlcmZhY2UgVG91Y2hFdmVudCB7XG4gIHRvdWNoc3RhcnRYOiBudW1iZXJcbiAgdG91Y2htb3ZlWDogbnVtYmVyXG4gIHN0b3BQcm9wYWdhdGlvbjogRnVuY3Rpb25cbn1cblxuaW50ZXJmYWNlIFdpZHRocyB7XG4gIGNvbnRlbnQ6IG51bWJlclxuICB3cmFwcGVyOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBWdWUge1xuICAkcmVmczoge1xuICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50XG4gICAgd3JhcHBlcjogSFRNTEVsZW1lbnRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQmFzZVNsaWRlR3JvdXAgPSBtaXhpbnM8b3B0aW9ucyAmXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbiAgRXh0cmFjdFZ1ZTxbXG4gICAgdHlwZW9mIEJhc2VJdGVtR3JvdXAsXG4gICAgdHlwZW9mIE1vYmlsZSxcbiAgXT5cbi8qIGVzbGludC1lbmFibGUgaW5kZW50ICovXG4+KFxuICBCYXNlSXRlbUdyb3VwLFxuICBNb2JpbGUsXG4gIC8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICdiYXNlLXNsaWRlLWdyb3VwJyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgUmVzaXplLFxuICAgIFRvdWNoLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd2LXNsaWRlLWl0ZW0tLWFjdGl2ZScsXG4gICAgfSxcbiAgICBjZW50ZXJBY3RpdmU6IEJvb2xlYW4sXG4gICAgbmV4dEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckbmV4dCcsXG4gICAgfSxcbiAgICBwcmV2SWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRwcmV2JyxcbiAgICB9LFxuICAgIHNob3dBcnJvd3M6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IChcbiAgICAgICAgdHlwZW9mIHYgPT09ICdib29sZWFuJyB8fCBbXG4gICAgICAgICAgJ2Fsd2F5cycsXG4gICAgICAgICAgJ2Rlc2t0b3AnLFxuICAgICAgICAgICdtb2JpbGUnLFxuICAgICAgICBdLmluY2x1ZGVzKHYpXG4gICAgICApLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBpbnRlcm5hbEl0ZW1zTGVuZ3RoOiAwLFxuICAgIGlzT3ZlcmZsb3dpbmc6IGZhbHNlLFxuICAgIHJlc2l6ZVRpbWVvdXQ6IDAsXG4gICAgc3RhcnRYOiAwLFxuICAgIHNjcm9sbE9mZnNldDogMCxcbiAgICB3aWR0aHM6IHtcbiAgICAgIGNvbnRlbnQ6IDAsXG4gICAgICB3cmFwcGVyOiAwLFxuICAgIH0sXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgX19jYWNoZWROZXh0ICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5UcmFuc2l0aW9uKCduZXh0JylcbiAgICB9LFxuICAgIF9fY2FjaGVkUHJldiAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuVHJhbnNpdGlvbigncHJldicpXG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uQmFzZUl0ZW1Hcm91cC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3Ytc2xpZGUtZ3JvdXAnOiB0cnVlLFxuICAgICAgICAndi1zbGlkZS1ncm91cC0taGFzLWFmZml4ZXMnOiB0aGlzLmhhc0FmZml4ZXMsXG4gICAgICAgICd2LXNsaWRlLWdyb3VwLS1pcy1vdmVyZmxvd2luZyc6IHRoaXMuaXNPdmVyZmxvd2luZyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc0FmZml4ZXMgKCk6IEJvb2xlYW4ge1xuICAgICAgc3dpdGNoICh0aGlzLnNob3dBcnJvd3MpIHtcbiAgICAgICAgLy8gQWx3YXlzIHNob3cgYXJyb3dzIG9uIGRlc2t0b3AgJiBtb2JpbGVcbiAgICAgICAgY2FzZSAnYWx3YXlzJzogcmV0dXJuIHRydWVcblxuICAgICAgICAvLyBBbHdheXMgc2hvdyBhcnJvd3Mgb24gZGVza3RvcFxuICAgICAgICBjYXNlICdkZXNrdG9wJzogcmV0dXJuICF0aGlzLmlzTW9iaWxlXG5cbiAgICAgICAgLy8gU2hvdyBhcnJvd3Mgb24gbW9iaWxlIHdoZW4gb3ZlcmZsb3dpbmcuXG4gICAgICAgIC8vIFRoaXMgbWF0Y2hlcyB0aGUgZGVmYXVsdCAyLjIgYmVoYXZpb3JcbiAgICAgICAgY2FzZSB0cnVlOiByZXR1cm4gdGhpcy5pc092ZXJmbG93aW5nXG5cbiAgICAgICAgLy8gQWx3YXlzIHNob3cgb24gbW9iaWxlXG4gICAgICAgIGNhc2UgJ21vYmlsZSc6IHJldHVybiAoXG4gICAgICAgICAgdGhpcy5pc01vYmlsZSB8fFxuICAgICAgICAgIHRoaXMuaXNPdmVyZmxvd2luZ1xuICAgICAgICApXG5cbiAgICAgICAgLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9jb21wb25lbnRzL3RhYnMjc2Nyb2xsYWJsZS10YWJzXG4gICAgICAgIC8vIEFsd2F5cyBzaG93IGFycm93cyB3aGVuXG4gICAgICAgIC8vIG92ZXJmbG93ZWQgb24gZGVza3RvcFxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gKFxuICAgICAgICAgICF0aGlzLmlzTW9iaWxlICYmXG4gICAgICAgICAgdGhpcy5pc092ZXJmbG93aW5nXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc05leHQgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKCF0aGlzLmhhc0FmZml4ZXMpIHJldHVybiBmYWxzZVxuXG4gICAgICBjb25zdCB7IGNvbnRlbnQsIHdyYXBwZXIgfSA9IHRoaXMud2lkdGhzXG5cbiAgICAgIC8vIENoZWNrIG9uZSBzY3JvbGwgYWhlYWQgdG8ga25vdyB0aGUgd2lkdGggb2YgcmlnaHQtbW9zdCBpdGVtXG4gICAgICByZXR1cm4gY29udGVudCA+IE1hdGguYWJzKHRoaXMuc2Nyb2xsT2Zmc2V0KSArIHdyYXBwZXJcbiAgICB9LFxuICAgIGhhc1ByZXYgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQWZmaXhlcyAmJiB0aGlzLnNjcm9sbE9mZnNldCAhPT0gMFxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbFZhbHVlOiAnc2V0V2lkdGhzJyxcbiAgICAvLyBXaGVuIG92ZXJmbG93IGNoYW5nZXMsIHRoZSBhcnJvd3MgYWx0ZXJcbiAgICAvLyB0aGUgd2lkdGhzIG9mIHRoZSBjb250ZW50IGFuZCB3cmFwcGVyXG4gICAgLy8gYW5kIG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkXG4gICAgaXNPdmVyZmxvd2luZzogJ3NldFdpZHRocycsXG4gICAgc2Nyb2xsT2Zmc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey12YWx9cHgpYFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICB0aGlzLmludGVybmFsSXRlbXNMZW5ndGggPSAodGhpcy4kY2hpbGRyZW4gfHwgW10pLmxlbmd0aFxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIGlmICh0aGlzLmludGVybmFsSXRlbXNMZW5ndGggPT09ICh0aGlzLiRjaGlsZHJlbiB8fCBbXSkubGVuZ3RoKSByZXR1cm5cbiAgICB0aGlzLnNldFdpZHRocygpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8vIEFsd2F5cyBnZW5lcmF0ZSBuZXh0IGZvciBzY3JvbGxhYmxlIGhpbnRcbiAgICBnZW5OZXh0ICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuJHNjb3BlZFNsb3RzLm5leHRcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5uZXh0KHt9KVxuICAgICAgICA6IHRoaXMuJHNsb3RzLm5leHQgfHwgdGhpcy5fX2NhY2hlZE5leHRcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNsaWRlLWdyb3VwX19uZXh0JyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zbGlkZS1ncm91cF9fbmV4dC0tZGlzYWJsZWQnOiAhdGhpcy5oYXNOZXh0LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLm9uQWZmaXhDbGljaygnbmV4dCcpLFxuICAgICAgICB9LFxuICAgICAgICBrZXk6ICduZXh0JyxcbiAgICAgIH0sIFtzbG90XSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbGlkZS1ncm91cF9fY29udGVudCcsXG4gICAgICAgIHJlZjogJ2NvbnRlbnQnLFxuICAgICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgICB9LFxuICAgIGdlbkRhdGEgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdyZXNpemUnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLm9uUmVzaXplLFxuICAgICAgICB9XSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbkljb24gKGxvY2F0aW9uOiAncHJldicgfCAnbmV4dCcpOiBWTm9kZSB8IG51bGwge1xuICAgICAgbGV0IGljb24gPSBsb2NhdGlvblxuXG4gICAgICBpZiAodGhpcy4kdnVldGlmeS5ydGwgJiYgbG9jYXRpb24gPT09ICdwcmV2Jykge1xuICAgICAgICBpY29uID0gJ25leHQnXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuJHZ1ZXRpZnkucnRsICYmIGxvY2F0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgaWNvbiA9ICdwcmV2J1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1cHBlckxvY2F0aW9uID0gYCR7bG9jYXRpb25bMF0udG9VcHBlckNhc2UoKX0ke2xvY2F0aW9uLnNsaWNlKDEpfWBcbiAgICAgIGNvbnN0IGhhc0FmZml4ID0gKHRoaXMgYXMgYW55KVtgaGFzJHt1cHBlckxvY2F0aW9ufWBdXG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuc2hvd0Fycm93cyAmJlxuICAgICAgICAhaGFzQWZmaXhcbiAgICAgICkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogIWhhc0FmZml4LFxuICAgICAgICB9LFxuICAgICAgfSwgKHRoaXMgYXMgYW55KVtgJHtpY29ufUljb25gXSlcbiAgICB9LFxuICAgIC8vIEFsd2F5cyBnZW5lcmF0ZSBwcmV2IGZvciBzY3JvbGxhYmxlIGhpbnRcbiAgICBnZW5QcmV2ICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuJHNjb3BlZFNsb3RzLnByZXZcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5wcmV2KHt9KVxuICAgICAgICA6IHRoaXMuJHNsb3RzLnByZXYgfHwgdGhpcy5fX2NhY2hlZFByZXZcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNsaWRlLWdyb3VwX19wcmV2JyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zbGlkZS1ncm91cF9fcHJldi0tZGlzYWJsZWQnOiAhdGhpcy5oYXNQcmV2LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLm9uQWZmaXhDbGljaygncHJldicpLFxuICAgICAgICB9LFxuICAgICAgICBrZXk6ICdwcmV2JyxcbiAgICAgIH0sIFtzbG90XSlcbiAgICB9LFxuICAgIGdlblRyYW5zaXRpb24gKGxvY2F0aW9uOiAncHJldicgfCAnbmV4dCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZGYWRlVHJhbnNpdGlvbiwgW3RoaXMuZ2VuSWNvbihsb2NhdGlvbildKVxuICAgIH0sXG4gICAgZ2VuV3JhcHBlciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNsaWRlLWdyb3VwX193cmFwcGVyJyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAndG91Y2gnLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBzdGFydDogKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMub3ZlcmZsb3dDaGVjayhlLCB0aGlzLm9uVG91Y2hTdGFydCksXG4gICAgICAgICAgICBtb3ZlOiAoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5vdmVyZmxvd0NoZWNrKGUsIHRoaXMub25Ub3VjaE1vdmUpLFxuICAgICAgICAgICAgZW5kOiAoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5vdmVyZmxvd0NoZWNrKGUsIHRoaXMub25Ub3VjaEVuZCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgICAgfSwgW3RoaXMuZ2VuQ29udGVudCgpXSlcbiAgICB9LFxuICAgIGNhbGN1bGF0ZU5ld09mZnNldCAoZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsIHdpZHRoczogV2lkdGhzLCBydGw6IGJvb2xlYW4sIGN1cnJlbnRTY3JvbGxPZmZzZXQ6IG51bWJlcikge1xuICAgICAgY29uc3Qgc2lnbiA9IHJ0bCA/IC0xIDogMVxuICAgICAgY29uc3QgbmV3QWJvc2x1dGVPZmZzZXQgPSBzaWduICogY3VycmVudFNjcm9sbE9mZnNldCArXG4gICAgICAgIChkaXJlY3Rpb24gPT09ICdwcmV2JyA/IC0xIDogMSkgKiB3aWR0aHMud3JhcHBlclxuXG4gICAgICByZXR1cm4gc2lnbiAqIE1hdGgubWF4KE1hdGgubWluKG5ld0Fib3NsdXRlT2Zmc2V0LCB3aWR0aHMuY29udGVudCAtIHdpZHRocy53cmFwcGVyKSwgMClcbiAgICB9LFxuICAgIG9uQWZmaXhDbGljayAobG9jYXRpb246ICdwcmV2JyB8ICduZXh0Jykge1xuICAgICAgdGhpcy4kZW1pdChgY2xpY2s6JHtsb2NhdGlvbn1gKVxuICAgICAgdGhpcy5zY3JvbGxUbyhsb2NhdGlvbilcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVyblxuXG4gICAgICB0aGlzLnNldFdpZHRocygpXG4gICAgfSxcbiAgICBvblRvdWNoU3RhcnQgKGU6IFRvdWNoRXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy4kcmVmc1xuXG4gICAgICB0aGlzLnN0YXJ0WCA9IHRoaXMuc2Nyb2xsT2Zmc2V0ICsgZS50b3VjaHN0YXJ0WCBhcyBudW1iZXJcblxuICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNpdGlvbicsICdub25lJylcbiAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpbGxDaGFuZ2UnLCAndHJhbnNmb3JtJylcbiAgICB9LFxuICAgIG9uVG91Y2hNb3ZlIChlOiBUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHRoaXMuc3RhcnRYIC0gZS50b3VjaG1vdmVYXG4gICAgfSxcbiAgICBvblRvdWNoRW5kICgpIHtcbiAgICAgIGNvbnN0IHsgY29udGVudCwgd3JhcHBlciB9ID0gdGhpcy4kcmVmc1xuICAgICAgY29uc3QgbWF4U2Nyb2xsT2Zmc2V0ID0gY29udGVudC5jbGllbnRXaWR0aCAtIHdyYXBwZXIuY2xpZW50V2lkdGhcblxuICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNpdGlvbicsIG51bGwpXG4gICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCd3aWxsQ2hhbmdlJywgbnVsbClcblxuICAgICAgaWYgKHRoaXMuJHZ1ZXRpZnkucnRsKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbE9mZnNldCA+IDAgfHwgIXRoaXMuaXNPdmVyZmxvd2luZykge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gMFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsT2Zmc2V0IDw9IC1tYXhTY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IC1tYXhTY3JvbGxPZmZzZXRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsT2Zmc2V0IDwgMCB8fCAhdGhpcy5pc092ZXJmbG93aW5nKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSAwXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGxPZmZzZXQgPj0gbWF4U2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSBtYXhTY3JvbGxPZmZzZXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb3ZlcmZsb3dDaGVjayAoZTogVG91Y2hFdmVudCwgZm46IChlOiBUb3VjaEV2ZW50KSA9PiB2b2lkKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLmlzT3ZlcmZsb3dpbmcgJiYgZm4oZSlcbiAgICB9LFxuICAgIHNjcm9sbEludG9WaWV3IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICgpIHtcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID09PSAwIHx8XG4gICAgICAgICghdGhpcy5jZW50ZXJBY3RpdmUgJiYgIXRoaXMuaXNPdmVyZmxvd2luZylcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IDBcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jZW50ZXJBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB0aGlzLmNhbGN1bGF0ZUNlbnRlcmVkT2Zmc2V0KFxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLiRlbCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICB0aGlzLndpZHRocyxcbiAgICAgICAgICB0aGlzLiR2dWV0aWZ5LnJ0bFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHRoaXMuY2FsY3VsYXRlVXBkYXRlZE9mZnNldChcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS4kZWwgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgdGhpcy53aWR0aHMsXG4gICAgICAgICAgdGhpcy4kdnVldGlmeS5ydGwsXG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsY3VsYXRlVXBkYXRlZE9mZnNldCAoc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudCwgd2lkdGhzOiBXaWR0aHMsIHJ0bDogYm9vbGVhbiwgY3VycmVudFNjcm9sbE9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IGNsaWVudFdpZHRoID0gc2VsZWN0ZWRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gcnRsXG4gICAgICAgID8gKHdpZHRocy5jb250ZW50IC0gc2VsZWN0ZWRFbGVtZW50Lm9mZnNldExlZnQgLSBjbGllbnRXaWR0aClcbiAgICAgICAgOiBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0TGVmdFxuXG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIGN1cnJlbnRTY3JvbGxPZmZzZXQgPSAtY3VycmVudFNjcm9sbE9mZnNldFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0b3RhbFdpZHRoID0gd2lkdGhzLndyYXBwZXIgKyBjdXJyZW50U2Nyb2xsT2Zmc2V0XG4gICAgICBjb25zdCBpdGVtT2Zmc2V0ID0gY2xpZW50V2lkdGggKyBvZmZzZXRMZWZ0XG4gICAgICBjb25zdCBhZGRpdGlvbmFsT2Zmc2V0ID0gY2xpZW50V2lkdGggKiAwLjRcblxuICAgICAgaWYgKG9mZnNldExlZnQgPD0gY3VycmVudFNjcm9sbE9mZnNldCkge1xuICAgICAgICBjdXJyZW50U2Nyb2xsT2Zmc2V0ID0gTWF0aC5tYXgob2Zmc2V0TGVmdCAtIGFkZGl0aW9uYWxPZmZzZXQsIDApXG4gICAgICB9IGVsc2UgaWYgKHRvdGFsV2lkdGggPD0gaXRlbU9mZnNldCkge1xuICAgICAgICBjdXJyZW50U2Nyb2xsT2Zmc2V0ID0gTWF0aC5taW4oY3VycmVudFNjcm9sbE9mZnNldCAtICh0b3RhbFdpZHRoIC0gaXRlbU9mZnNldCAtIGFkZGl0aW9uYWxPZmZzZXQpLCB3aWR0aHMuY29udGVudCAtIHdpZHRocy53cmFwcGVyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnRsID8gLWN1cnJlbnRTY3JvbGxPZmZzZXQgOiBjdXJyZW50U2Nyb2xsT2Zmc2V0XG4gICAgfSxcbiAgICBjYWxjdWxhdGVDZW50ZXJlZE9mZnNldCAoc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudCwgd2lkdGhzOiBXaWR0aHMsIHJ0bDogYm9vbGVhbik6IG51bWJlciB7XG4gICAgICBjb25zdCB7IG9mZnNldExlZnQsIGNsaWVudFdpZHRoIH0gPSBzZWxlY3RlZEVsZW1lbnRcblxuICAgICAgaWYgKHJ0bCkge1xuICAgICAgICBjb25zdCBvZmZzZXRDZW50ZXJlZCA9IHdpZHRocy5jb250ZW50IC0gb2Zmc2V0TGVmdCAtIGNsaWVudFdpZHRoIC8gMiAtIHdpZHRocy53cmFwcGVyIC8gMlxuICAgICAgICByZXR1cm4gLU1hdGgubWluKHdpZHRocy5jb250ZW50IC0gd2lkdGhzLndyYXBwZXIsIE1hdGgubWF4KDAsIG9mZnNldENlbnRlcmVkKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9mZnNldENlbnRlcmVkID0gb2Zmc2V0TGVmdCArIGNsaWVudFdpZHRoIC8gMiAtIHdpZHRocy53cmFwcGVyIC8gMlxuICAgICAgICByZXR1cm4gTWF0aC5taW4od2lkdGhzLmNvbnRlbnQgLSB3aWR0aHMud3JhcHBlciwgTWF0aC5tYXgoMCwgb2Zmc2V0Q2VudGVyZWQpKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsVG8gLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKGxvY2F0aW9uOiAncHJldicgfCAnbmV4dCcpIHtcbiAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gdGhpcy5jYWxjdWxhdGVOZXdPZmZzZXQobG9jYXRpb24sIHtcbiAgICAgICAgLy8gRm9yY2UgcmVmbG93XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuJHJlZnMuY29udGVudCA/IHRoaXMuJHJlZnMuY29udGVudC5jbGllbnRXaWR0aCA6IDAsXG4gICAgICAgIHdyYXBwZXI6IHRoaXMuJHJlZnMud3JhcHBlciA/IHRoaXMuJHJlZnMud3JhcHBlci5jbGllbnRXaWR0aCA6IDAsXG4gICAgICB9LCB0aGlzLiR2dWV0aWZ5LnJ0bCwgdGhpcy5zY3JvbGxPZmZzZXQpXG4gICAgfSxcbiAgICBzZXRXaWR0aHMgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gICgpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbnRlbnQsIHdyYXBwZXIgfSA9IHRoaXMuJHJlZnNcblxuICAgICAgICB0aGlzLndpZHRocyA9IHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50ID8gY29udGVudC5jbGllbnRXaWR0aCA6IDAsXG4gICAgICAgICAgd3JhcHBlcjogd3JhcHBlciA/IHdyYXBwZXIuY2xpZW50V2lkdGggOiAwLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc092ZXJmbG93aW5nID0gdGhpcy53aWR0aHMud3JhcHBlciA8IHRoaXMud2lkdGhzLmNvbnRlbnRcblxuICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KClcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuZ2VuRGF0YSgpLCBbXG4gICAgICB0aGlzLmdlblByZXYoKSxcbiAgICAgIHRoaXMuZ2VuV3JhcHBlcigpLFxuICAgICAgdGhpcy5nZW5OZXh0KCksXG4gICAgXSlcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VTbGlkZUdyb3VwLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNsaWRlLWdyb3VwJyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzbGlkZUdyb3VwOiB0aGlzLFxuICAgIH1cbiAgfSxcbn0pXG4iLCIvLyBFeHRlbnNpb25zXG5pbXBvcnQgeyBCYXNlU2xpZGVHcm91cCB9IGZyb20gJy4uL1ZTbGlkZUdyb3VwL1ZTbGlkZUdyb3VwJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVlRhYiBmcm9tICcuL1ZUYWInXG5cbi8vIE1peGluc1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcidcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG50eXBlIFZUYWJJbnN0YW5jZSA9IEluc3RhbmNlVHlwZTx0eXBlb2YgVlRhYj5cblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBCYXNlU2xpZGVHcm91cCxcbiAgU1NSQm9vdGFibGUsXG4gIFRoZW1lYWJsZVxuICAvKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi10YWJzLWJhcicsXG5cbiAgcHJvdmlkZSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYnNCYXI6IHRoaXMsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5CYXNlU2xpZGVHcm91cC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGFicy1iYXInOiB0cnVlLFxuICAgICAgICAndi10YWJzLWJhci0taXMtbW9iaWxlJzogdGhpcy5pc01vYmlsZSxcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgYW5kIG1vdmUgdG8gdi1zbGlkZS1ncm91cFxuICAgICAgICAndi10YWJzLWJhci0tc2hvdy1hcnJvd3MnOiB0aGlzLnNob3dBcnJvd3MsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpdGVtczogJ2NhbGxTbGlkZXInLFxuICAgIGludGVybmFsVmFsdWU6ICdjYWxsU2xpZGVyJyxcbiAgICAkcm91dGU6ICdvblJvdXRlQ2hhbmdlJyxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FsbFNsaWRlciAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNCb290ZWQpIHJldHVyblxuXG4gICAgICB0aGlzLiRlbWl0KCdjYWxsOnNsaWRlcicpXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IEJhc2VTbGlkZUdyb3VwLm9wdGlvbnMubWV0aG9kcy5nZW5Db250ZW50LmNhbGwodGhpcylcblxuICAgICAgcmVuZGVyLmRhdGEgPSByZW5kZXIuZGF0YSB8fCB7fVxuICAgICAgcmVuZGVyLmRhdGEuc3RhdGljQ2xhc3MgKz0gJyB2LXRhYnMtYmFyX19jb250ZW50J1xuXG4gICAgICByZXR1cm4gcmVuZGVyXG4gICAgfSxcbiAgICBvblJvdXRlQ2hhbmdlICh2YWw6IFJvdXRlLCBvbGRWYWw6IFJvdXRlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKHRoaXMubWFuZGF0b3J5KSByZXR1cm5cblxuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zIGFzIHVua25vd24gYXMgVlRhYkluc3RhbmNlW11cbiAgICAgIGNvbnN0IG5ld1BhdGggPSB2YWwucGF0aFxuICAgICAgY29uc3Qgb2xkUGF0aCA9IG9sZFZhbC5wYXRoXG5cbiAgICAgIGxldCBoYXNOZXcgPSBmYWxzZVxuICAgICAgbGV0IGhhc09sZCA9IGZhbHNlXG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoaXRlbS50byA9PT0gbmV3UGF0aCkgaGFzTmV3ID0gdHJ1ZVxuICAgICAgICBlbHNlIGlmIChpdGVtLnRvID09PSBvbGRQYXRoKSBoYXNPbGQgPSB0cnVlXG5cbiAgICAgICAgaWYgKGhhc05ldyAmJiBoYXNPbGQpIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYW4gb2xkIGl0ZW0gYW5kIG5vdCBhIG5ldyBvbmVcbiAgICAgIC8vIGl0J3MgYXNzdW1lZCB0aGF0IHRoZSB1c2VyIG5hdmlnYXRlZCB0b1xuICAgICAgLy8gYSBwYXRoIHRoYXQgaXMgbm90IHByZXNlbnQgaW4gdGhlIGl0ZW1zXG4gICAgICBpZiAoIWhhc05ldyAmJiBoYXNPbGQpIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZFxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHJlbmRlciA9IEJhc2VTbGlkZUdyb3VwLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIHJlbmRlci5kYXRhIS5hdHRycyA9IHtcbiAgICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyXG4gIH0sXG59KVxuIiwiLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKENvbG9yYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFicy1zbGlkZXInLFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXRhYnMtc2xpZGVyJyxcbiAgICB9KSlcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WVGFicy5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVlRhYnNCYXIgZnJvbSAnLi9WVGFic0JhcidcbmltcG9ydCBWVGFic0l0ZW1zIGZyb20gJy4vVlRhYnNJdGVtcydcbmltcG9ydCBWVGFic1NsaWRlciBmcm9tICcuL1ZUYWJzU2xpZGVyJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBQcm94eWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Byb3h5YWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4vLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBFeHRyYWN0VnVlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRyZWZzOiB7XG4gICAgaXRlbXM6IEluc3RhbmNlVHlwZTx0eXBlb2YgVlRhYnNCYXI+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi10YWJzJyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgUmVzaXplLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgYWxpZ25XaXRoVGl0bGU6IEJvb2xlYW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBTdHJpbmcsXG4gICAgY2VudGVyQWN0aXZlOiBCb29sZWFuLFxuICAgIGNlbnRlcmVkOiBCb29sZWFuLFxuICAgIGZpeGVkVGFiczogQm9vbGVhbixcbiAgICBncm93OiBCb29sZWFuLFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIGhpZGVTbGlkZXI6IEJvb2xlYW4sXG4gICAgaWNvbnNBbmRUZXh0OiBCb29sZWFuLFxuICAgIG1vYmlsZUJyZWFrcG9pbnQ6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgbmV4dEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckbmV4dCcsXG4gICAgfSxcbiAgICBvcHRpb25hbDogQm9vbGVhbixcbiAgICBwcmV2SWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRwcmV2JyxcbiAgICB9LFxuICAgIHJpZ2h0OiBCb29sZWFuLFxuICAgIHNob3dBcnJvd3M6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgIHNsaWRlckNvbG9yOiBTdHJpbmcsXG4gICAgc2xpZGVyU2l6ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDIsXG4gICAgfSxcbiAgICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzaXplVGltZW91dDogMCxcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBoZWlnaHQ6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgICAgbGVmdDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuICAgICAgICByaWdodDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuICAgICAgICB0b3A6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgICAgd2lkdGg6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uVGltZTogMzAwLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi10YWJzLS1hbGlnbi13aXRoLXRpdGxlJzogdGhpcy5hbGlnbldpdGhUaXRsZSxcbiAgICAgICAgJ3YtdGFicy0tY2VudGVyZWQnOiB0aGlzLmNlbnRlcmVkLFxuICAgICAgICAndi10YWJzLS1maXhlZC10YWJzJzogdGhpcy5maXhlZFRhYnMsXG4gICAgICAgICd2LXRhYnMtLWdyb3cnOiB0aGlzLmdyb3csXG4gICAgICAgICd2LXRhYnMtLWljb25zLWFuZC10ZXh0JzogdGhpcy5pY29uc0FuZFRleHQsXG4gICAgICAgICd2LXRhYnMtLXJpZ2h0JzogdGhpcy5yaWdodCxcbiAgICAgICAgJ3YtdGFicy0tdmVydGljYWwnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmV2ZXJzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkucnRsICYmIHRoaXMudmVydGljYWxcbiAgICB9LFxuICAgIHNsaWRlclN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLnNsaWRlci5oZWlnaHQpLFxuICAgICAgICBsZWZ0OiB0aGlzLmlzUmV2ZXJzZWQgPyB1bmRlZmluZWQgOiBjb252ZXJ0VG9Vbml0KHRoaXMuc2xpZGVyLmxlZnQpLFxuICAgICAgICByaWdodDogdGhpcy5pc1JldmVyc2VkID8gY29udmVydFRvVW5pdCh0aGlzLnNsaWRlci5yaWdodCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHRvcDogdGhpcy52ZXJ0aWNhbCA/IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIudG9wKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhpcy5zbGlkZXIubGVmdCAhPSBudWxsID8gbnVsbCA6ICdub25lJyxcbiAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIud2lkdGgpLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb2xvciAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yKSByZXR1cm4gdGhpcy5jb2xvclxuICAgICAgZWxzZSBpZiAodGhpcy5pc0RhcmsgJiYgIXRoaXMuYXBwSXNEYXJrKSByZXR1cm4gJ3doaXRlJ1xuICAgICAgZWxzZSByZXR1cm4gJ3ByaW1hcnknXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGFsaWduV2l0aFRpdGxlOiAnY2FsbFNsaWRlcicsXG4gICAgY2VudGVyZWQ6ICdjYWxsU2xpZGVyJyxcbiAgICBjZW50ZXJBY3RpdmU6ICdjYWxsU2xpZGVyJyxcbiAgICBmaXhlZFRhYnM6ICdjYWxsU2xpZGVyJyxcbiAgICBncm93OiAnY2FsbFNsaWRlcicsXG4gICAgcmlnaHQ6ICdjYWxsU2xpZGVyJyxcbiAgICBzaG93QXJyb3dzOiAnY2FsbFNsaWRlcicsXG4gICAgdmVydGljYWw6ICdjYWxsU2xpZGVyJyxcbiAgICAnJHZ1ZXRpZnkuYXBwbGljYXRpb24ubGVmdCc6ICdvblJlc2l6ZScsXG4gICAgJyR2dWV0aWZ5LmFwcGxpY2F0aW9uLnJpZ2h0JzogJ29uUmVzaXplJyxcbiAgICAnJHZ1ZXRpZnkucnRsJzogJ29uUmVzaXplJyxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmNhbGxTbGlkZXIsIDMwKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhbGxTbGlkZXIgKCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmhpZGVTbGlkZXIgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaXRlbXMgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaXRlbXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNsaWRlci53aWR0aCA9IDBcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgLy8gR2l2ZSBzY3JlZW4gdGltZSB0byBwYWludFxuICAgICAgICBjb25zdCBhY3RpdmVUYWIgPSB0aGlzLiRyZWZzLml0ZW1zLnNlbGVjdGVkSXRlbXNbMF1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICghYWN0aXZlVGFiIHx8ICFhY3RpdmVUYWIuJGVsKSB7XG4gICAgICAgICAgdGhpcy5zbGlkZXIud2lkdGggPSAwXG4gICAgICAgICAgdGhpcy5zbGlkZXIubGVmdCA9IDBcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbCA9IGFjdGl2ZVRhYi4kZWwgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICB0aGlzLnNsaWRlciA9IHtcbiAgICAgICAgICBoZWlnaHQ6ICF0aGlzLnZlcnRpY2FsID8gTnVtYmVyKHRoaXMuc2xpZGVyU2l6ZSkgOiBlbC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgbGVmdDogdGhpcy52ZXJ0aWNhbCA/IDAgOiBlbC5vZmZzZXRMZWZ0LFxuICAgICAgICAgIHJpZ2h0OiB0aGlzLnZlcnRpY2FsID8gMCA6IGVsLm9mZnNldExlZnQgKyBlbC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB0b3A6IGVsLm9mZnNldFRvcCxcbiAgICAgICAgICB3aWR0aDogdGhpcy52ZXJ0aWNhbCA/IE51bWJlcih0aGlzLnNsaWRlclNpemUpIDogZWwuc2Nyb2xsV2lkdGgsXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICBnZW5CYXIgKGl0ZW1zOiBWTm9kZVtdLCBzbGlkZXI6IFZOb2RlIHwgbnVsbCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGNlbnRlckFjdGl2ZTogdGhpcy5jZW50ZXJBY3RpdmUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIG1hbmRhdG9yeTogIXRoaXMub3B0aW9uYWwsXG4gICAgICAgICAgbW9iaWxlQnJlYWtwb2ludDogdGhpcy5tb2JpbGVCcmVha3BvaW50LFxuICAgICAgICAgIG5leHRJY29uOiB0aGlzLm5leHRJY29uLFxuICAgICAgICAgIHByZXZJY29uOiB0aGlzLnByZXZJY29uLFxuICAgICAgICAgIHNob3dBcnJvd3M6IHRoaXMuc2hvd0Fycm93cyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pbnRlcm5hbFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICdjYWxsOnNsaWRlcic6IHRoaXMuY2FsbFNsaWRlcixcbiAgICAgICAgICBjaGFuZ2U6ICh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiAnaXRlbXMnLFxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbXB1dGVkQ29sb3IsIGRhdGEpXG4gICAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwgZGF0YSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRhYnNCYXIsIGRhdGEsIFtcbiAgICAgICAgdGhpcy5nZW5TbGlkZXIoc2xpZGVyKSxcbiAgICAgICAgaXRlbXMsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuSXRlbXMgKGl0ZW1zOiBWTm9kZSB8IG51bGwsIGl0ZW06IFZOb2RlW10pIHtcbiAgICAgIC8vIElmIHVzZXIgcHJvdmlkZXMgaXRlbXNcbiAgICAgIC8vIG9wdCB0byB1c2UgdGhlaXJzXG4gICAgICBpZiAoaXRlbXMpIHJldHVybiBpdGVtc1xuXG4gICAgICAvLyBJZiBubyB0YWJzIGFyZSBwcm92aWRlZFxuICAgICAgLy8gcmVuZGVyIG5vdGhpbmdcbiAgICAgIGlmICghaXRlbS5sZW5ndGgpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZUYWJzSXRlbXMsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pbnRlcm5hbFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNoYW5nZTogKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSwgaXRlbSlcbiAgICB9LFxuICAgIGdlblNsaWRlciAoc2xpZGVyOiBWTm9kZSB8IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmhpZGVTbGlkZXIpIHJldHVybiBudWxsXG5cbiAgICAgIGlmICghc2xpZGVyKSB7XG4gICAgICAgIHNsaWRlciA9IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRhYnNTbGlkZXIsIHtcbiAgICAgICAgICBwcm9wczogeyBjb2xvcjogdGhpcy5zbGlkZXJDb2xvciB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGFicy1zbGlkZXItd3JhcHBlcicsXG4gICAgICAgIHN0eWxlOiB0aGlzLnNsaWRlclN0eWxlcyxcbiAgICAgIH0sIFtzbGlkZXJdKVxuICAgIH0sXG4gICAgb25SZXNpemUgKCkge1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm5cblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dClcbiAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuY2FsbFNsaWRlciwgMClcbiAgICB9LFxuICAgIHBhcnNlTm9kZXMgKCkge1xuICAgICAgbGV0IGl0ZW1zID0gbnVsbFxuICAgICAgbGV0IHNsaWRlciA9IG51bGxcbiAgICAgIGNvbnN0IGl0ZW0gPSBbXVxuICAgICAgY29uc3QgdGFiID0gW11cbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICBjb25zdCBsZW5ndGggPSBzbG90Lmxlbmd0aFxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZub2RlID0gc2xvdFtpXVxuXG4gICAgICAgIGlmICh2bm9kZS5jb21wb25lbnRPcHRpb25zKSB7XG4gICAgICAgICAgc3dpdGNoICh2bm9kZS5jb21wb25lbnRPcHRpb25zLkN0b3Iub3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd2LXRhYnMtc2xpZGVyJzogc2xpZGVyID0gdm5vZGVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3YtdGFicy1pdGVtcyc6IGl0ZW1zID0gdm5vZGVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3YtdGFiLWl0ZW0nOiBpdGVtLnB1c2godm5vZGUpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAvLyBjYXNlICd2LXRhYicgLSBpbnRlbnRpb25hbGx5IG9taXR0ZWRcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRhYi5wdXNoKHZub2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWIucHVzaCh2bm9kZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIHRhYjogYXJyYXkgb2YgYHYtdGFiYFxuICAgICAgICogc2xpZGVyOiBzaW5nbGUgYHYtdGFicy1zbGlkZXJgXG4gICAgICAgKiBpdGVtczogc2luZ2xlIGB2LXRhYnMtaXRlbXNgXG4gICAgICAgKiBpdGVtOiBhcnJheSBvZiBgdi10YWItaXRlbWBcbiAgICAgICAqL1xuICAgICAgcmV0dXJuIHsgdGFiLCBzbGlkZXIsIGl0ZW1zLCBpdGVtIH1cbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhYiwgc2xpZGVyLCBpdGVtcywgaXRlbSB9ID0gdGhpcy5wYXJzZU5vZGVzKClcblxuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtdGFicycsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogJ3Jlc2l6ZScsXG4gICAgICAgIG1vZGlmaWVyczogeyBxdWlldDogdHJ1ZSB9LFxuICAgICAgICB2YWx1ZTogdGhpcy5vblJlc2l6ZSxcbiAgICAgIH1dLFxuICAgIH0sIFtcbiAgICAgIHRoaXMuZ2VuQmFyKHRhYiwgc2xpZGVyKSxcbiAgICAgIHRoaXMuZ2VuSXRlbXMoaXRlbXMsIGl0ZW0pLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZXaW5kb3cgZnJvbSAnLi9WV2luZG93J1xuXG4vLyBNaXhpbnNcbmltcG9ydCBCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvYm9vdGFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIEdyb3VwYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvZ3JvdXBhYmxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgVG91Y2ggZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQm9vdGFibGUsXG4gIEdyb3VwYWJsZUZhY3RvcnkoJ3dpbmRvd0dyb3VwJywgJ3Ytd2luZG93LWl0ZW0nLCAndi13aW5kb3cnKVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJGVsOiBIVE1MRWxlbWVudFxuICB3aW5kb3dHcm91cDogSW5zdGFuY2VUeXBlPHR5cGVvZiBWV2luZG93PlxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZChcbiAgLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytd2luZG93LWl0ZW0nLFxuXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBUb3VjaCxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJldmVyc2VUcmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICBpblRyYW5zaXRpb246IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4gdGhpcy5ncm91cENsYXNzZXNcbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoIXRoaXMud2luZG93R3JvdXAuaW50ZXJuYWxSZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy50cmFuc2l0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgID8gdGhpcy50cmFuc2l0aW9uIHx8ICcnXG4gICAgICAgICAgOiB0aGlzLndpbmRvd0dyb3VwLmNvbXB1dGVkVHJhbnNpdGlvblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMucmV2ZXJzZVRyYW5zaXRpb24gIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5yZXZlcnNlVHJhbnNpdGlvbiB8fCAnJ1xuICAgICAgICA6IHRoaXMud2luZG93R3JvdXAuY29tcHV0ZWRUcmFuc2l0aW9uXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLmRlZmF1bHRcbiAgICB9LFxuICAgIGdlbldpbmRvd0l0ZW0gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXdpbmRvdy1pdGVtJyxcbiAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAnc2hvdycsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH1dLFxuICAgICAgICBvbjogdGhpcy4kbGlzdGVuZXJzLFxuICAgICAgfSwgdGhpcy5nZW5EZWZhdWx0U2xvdCgpKVxuICAgIH0sXG4gICAgb25BZnRlclRyYW5zaXRpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmluVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gRmluYWxpemUgdHJhbnNpdGlvbiBzdGF0ZS5cbiAgICAgIHRoaXMuaW5UcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgIGlmICh0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25Db3VudCA+IDApIHtcbiAgICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQtLVxuXG4gICAgICAgIC8vIFJlbW92ZSBjb250YWluZXIgaGVpZ2h0IGlmIHdlIGFyZSBvdXQgb2YgdHJhbnNpdGlvbi5cbiAgICAgICAgaWYgKHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uSGVpZ2h0ID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQmVmb3JlVHJhbnNpdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIEluaXRpYWxpemUgdHJhbnNpdGlvbiBzdGF0ZSBoZXJlLlxuICAgICAgdGhpcy5pblRyYW5zaXRpb24gPSB0cnVlXG4gICAgICBpZiAodGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQgPT09IDApIHtcbiAgICAgICAgLy8gU2V0IGluaXRpYWwgaGVpZ2h0IGZvciBoZWlnaHQgdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uSGVpZ2h0ID0gY29udmVydFRvVW5pdCh0aGlzLndpbmRvd0dyb3VwLiRlbC5jbGllbnRIZWlnaHQpXG4gICAgICB9XG4gICAgICB0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25Db3VudCsrXG4gICAgfSxcbiAgICBvblRyYW5zaXRpb25DYW5jZWxsZWQgKCkge1xuICAgICAgdGhpcy5vbkFmdGVyVHJhbnNpdGlvbigpIC8vIFRoaXMgc2hvdWxkIGhhdmUgdGhlIHNhbWUgcGF0aCBhcyBub3JtYWwgdHJhbnNpdGlvbiBlbmQuXG4gICAgfSxcbiAgICBvbkVudGVyIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICghdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgLy8gRG8gbm90IHNldCBoZWlnaHQgaWYgbm8gdHJhbnNpdGlvbiBvciBjYW5jZWxsZWQuXG4gICAgICAgIGlmICghdGhpcy5jb21wdXRlZFRyYW5zaXRpb24gfHwgIXRoaXMuaW5UcmFuc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdHJhbnNpdGlvbiB0YXJnZXQgaGVpZ2h0LlxuICAgICAgICB0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25IZWlnaHQgPSBjb252ZXJ0VG9Vbml0KGVsLmNsaWVudEhlaWdodClcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ3RyYW5zaXRpb24nLCB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBuYW1lOiB0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbixcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAvLyBIYW5kbGVycyBmb3IgZW50ZXIgd2luZG93cy5cbiAgICAgICAgYmVmb3JlRW50ZXI6IHRoaXMub25CZWZvcmVUcmFuc2l0aW9uLFxuICAgICAgICBhZnRlckVudGVyOiB0aGlzLm9uQWZ0ZXJUcmFuc2l0aW9uLFxuICAgICAgICBlbnRlckNhbmNlbGxlZDogdGhpcy5vblRyYW5zaXRpb25DYW5jZWxsZWQsXG5cbiAgICAgICAgLy8gSGFuZGxlcnMgZm9yIGxlYXZlIHdpbmRvd3MuXG4gICAgICAgIGJlZm9yZUxlYXZlOiB0aGlzLm9uQmVmb3JlVHJhbnNpdGlvbixcbiAgICAgICAgYWZ0ZXJMZWF2ZTogdGhpcy5vbkFmdGVyVHJhbnNpdGlvbixcbiAgICAgICAgbGVhdmVDYW5jZWxsZWQ6IHRoaXMub25UcmFuc2l0aW9uQ2FuY2VsbGVkLFxuXG4gICAgICAgIC8vIEVudGVyIGhhbmRsZXIgZm9yIGhlaWdodCB0cmFuc2l0aW9uLlxuICAgICAgICBlbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgfSxcbiAgICB9LCB0aGlzLnNob3dMYXp5Q29udGVudCgoKSA9PiBbdGhpcy5nZW5XaW5kb3dJdGVtKCldKSlcbiAgfSxcbn0pXG4iLCIvLyBFeHRlbnNpb25zXG5pbXBvcnQgVldpbmRvd0l0ZW0gZnJvbSAnLi4vVldpbmRvdy9WV2luZG93SXRlbSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZXaW5kb3dJdGVtLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYi1pdGVtJyxcblxuICBwcm9wczoge1xuICAgIGlkOiBTdHJpbmcsXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbldpbmRvd0l0ZW0gKCkge1xuICAgICAgY29uc3QgaXRlbSA9IFZXaW5kb3dJdGVtLm9wdGlvbnMubWV0aG9kcy5nZW5XaW5kb3dJdGVtLmNhbGwodGhpcylcblxuICAgICAgaXRlbS5kYXRhIS5kb21Qcm9wcyA9IGl0ZW0uZGF0YSEuZG9tUHJvcHMgfHwge31cbiAgICAgIGl0ZW0uZGF0YSEuZG9tUHJvcHMuaWQgPSB0aGlzLmlkIHx8IHRoaXMudmFsdWVcblxuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9LFxuICB9LFxufSlcbiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMS0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMS0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBkNzQ4MzI2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gTWl4aW5zXG5pbXBvcnQgTWVhc3VyYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvbWVhc3VyYWJsZSdcbmltcG9ydCBUb2dnbGVhYmxlIGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgaW50ZXJzZWN0IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaW50ZXJzZWN0J1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgTWVhc3VyYWJsZSxcbiAgVG9nZ2xlYWJsZVxuKS5leHRlbmQoe1xuICBuYW1lOiAnVkxhenknLFxuXG4gIGRpcmVjdGl2ZXM6IHsgaW50ZXJzZWN0IH0sXG5cbiAgcHJvcHM6IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAvLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0eXBlcywgbmF2aWdhdGUgdG86XG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uX09ic2VydmVyX0FQSVxuICAgICAgZGVmYXVsdDogKCkgPT4gKHtcbiAgICAgICAgcm9vdDogdW5kZWZpbmVkLFxuICAgICAgICByb290TWFyZ2luOiB1bmRlZmluZWQsXG4gICAgICAgIHRocmVzaG9sZDogdW5kZWZpbmVkLFxuICAgICAgfSksXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPEludGVyc2VjdGlvbk9ic2VydmVySW5pdD4sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdmYWRlLXRyYW5zaXRpb24nLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLm1lYXN1cmFibGVTdHlsZXMsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gZ2V0U2xvdCh0aGlzKVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghdGhpcy50cmFuc2l0aW9uKSByZXR1cm4gc2xvdFxuXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXG5cbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSBjaGlsZHJlbi5wdXNoKHNsb3QpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczogeyBuYW1lOiB0aGlzLnRyYW5zaXRpb24gfSxcbiAgICAgIH0sIGNoaWxkcmVuKVxuICAgIH0sXG4gICAgb25PYnNlcnZlIChcbiAgICAgIGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSxcbiAgICAgIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcixcbiAgICAgIGlzSW50ZXJzZWN0aW5nOiBib29sZWFuLFxuICAgICkge1xuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHJldHVyblxuXG4gICAgICB0aGlzLmlzQWN0aXZlID0gaXNJbnRlcnNlY3RpbmdcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCh0aGlzLnRhZywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWxhenknLFxuICAgICAgYXR0cnM6IHRoaXMuJGF0dHJzLFxuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogJ2ludGVyc2VjdCcsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgaGFuZGxlcjogdGhpcy5vbk9ic2VydmUsXG4gICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgfV0sXG4gICAgICBvbjogdGhpcy4kbGlzdGVuZXJzLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgIH0sIFt0aGlzLmdlbkNvbnRlbnQoKV0pXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcInBhLTJcIixhdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibGczXCI6XCJcIn19LFtfYygndi1sYXp5Jyx7YXR0cnM6e1wib3B0aW9uc1wiOntcbiAgICAgIHRocmVzaG9sZDogLjZcbiAgICB9LFwibWluLWhlaWdodFwiOlwiMjAwXCIsXCJ0cmFuc2l0aW9uXCI6XCJmYWRlLXRyYW5zaXRpb25cIn0sbW9kZWw6e3ZhbHVlOihfdm0uaXNBY3RpdmUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uaXNBY3RpdmU9JCR2fSxleHByZXNzaW9uOlwiaXNBY3RpdmVcIn19LFtfYygndi1jYXJkJyx7YXR0cnM6e1wid2lkdGhcIjpcIjEwMCVcIixcInRvXCI6X3ZtLnVybCxcImRpc2FibGVkXCI6X3ZtLmRhdGEuZHJhZnR9fSxbX2MoJ3YtaW1nJyx7YXR0cnM6e1wic3JjXCI6X3ZtLmRhdGEuYmFja2Ryb3AsXCJoZWlnaHRcIjpcIjIwMHB4XCIsXCJtaW4td2lkdGhcIjpcIjEwMCVcIixcIndpZHRoXCI6XCIxMDAlXCJ9fSxbKF92bS5kZWxpdmVyeV9mZWU+MCk/X2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcIm9uc2FsZVwifSxbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfdm0uZGVsaXZlcnlfZmVlKSkrXCIgRGVsaXZlcnlcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uZGF0YS5yYXRlcy5jcj4wKT9fYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiYmVzdHNlbGxlclwifSxbX3ZtLl92KFwiUmVjb21tZW5kZWRcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uZGF0YS5kcmFmdCk/X2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInRyYW5zdHlwZVwifSxbX3ZtLl92KFwiTm90IEFjY2VwdGluZyBPcmRlclwiKV0pOl92bS5fZSgpXSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLWFjdGlvbnMnLFtfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWF2YXRhcicse2F0dHJzOntcImNvbG9yXCI6XCJncmV5IGRhcmtlbi0zXCJ9fSxbX2MoJ3YtaW1nJyx7c3RhdGljQ2xhc3M6XCJlbGV2YXRpb24tNlwiLGF0dHJzOntcInNyY1wiOl92bS5kYXRhLmxvZ299fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLmJ1c2luZXNzX25hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX2MoJ3NtYWxsJyxbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5icmFuY2gpKV0pXSldLDEpXSwxKV0sMSldLDEpXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgICA8di1mbGV4IHhzMTIgbWQ0IHNtNiBsZzMgY2xhc3M9XCJwYS0yXCI+XG4gICAgICAgIDx2LWxhenkgdi1tb2RlbD1cImlzQWN0aXZlXCIgOm9wdGlvbnM9XCJ7XG4gICAgICAgICAgdGhyZXNob2xkOiAuNlxuICAgICAgICB9XCIgbWluLWhlaWdodD1cIjIwMFwiIHRyYW5zaXRpb249XCJmYWRlLXRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgIDx2LWNhcmQgd2lkdGg9XCIxMDAlXCIgOnRvPVwidXJsXCIgOmRpc2FibGVkPVwiZGF0YS5kcmFmdFwiPlxuICAgICAgICAgICAgICAgIDx2LWltZyA6c3JjPVwiZGF0YS5iYWNrZHJvcFwiIGhlaWdodD1cIjIwMHB4XCIgbWluLXdpZHRoPVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9uc2FsZVwiIHYtaWY9XCJkZWxpdmVyeV9mZWU+MFwiPiB7e2RlbGl2ZXJ5X2ZlZXx0b1BIUH19IERlbGl2ZXJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZGF0YS5yYXRlcy5jcj4wXCIgY2xhc3M9XCJiZXN0c2VsbGVyXCI+UmVjb21tZW5kZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJhbnN0eXBlXCIgdi1pZj1cImRhdGEuZHJhZnRcIj5Ob3QgQWNjZXB0aW5nIE9yZGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdi1pbWc+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYXZhdGFyIGNvbG9yPVwiZ3JleSBkYXJrZW4tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWltZyBjbGFzcz1cImVsZXZhdGlvbi02XCIgOnNyYz1cImRhdGEubG9nb1wiIC8+IDwvdi1saXN0LWl0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7IGRhdGEuYnVzaW5lc3NfbmFtZSB9fTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3sgZGF0YS5icmFuY2ggfX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtbGF6eT5cbiAgICA8L3YtZmxleD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snbWFwL2dldExvY2F0aW9uJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxpdmVyeV9mZWUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kZWxpdmVyeV9mZWVzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IHRoaXMuZGF0YS5pZClcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgcmV0dXJuIHRoaXMuZGVsaXZlcnlfZmVlc1tpbmRleF0uYW1vdW50XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5X2ZlZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbJ21hcC9nZXREZWxpdmVyeUZlZXMnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRmKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhZG1pbi9nZXRGYXJlJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBpc0FjdGl2ZSh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsICYmICF0aGlzLmRhdGEuZHJhZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiB0aGlzLmRhdGEuY29vcmRpbmF0ZXMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHRoaXMuZGF0YS5jb29yZGluYXRlcy5sb25naXR1ZGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGwgPSB0aGlzLmN1cnJlbnRMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxpdmVyeV9mZWU9PT0wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUZlZXMoZGwsIHNsKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdCAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZUZlZXMoZGwsIHNsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXhpb3MuJGdldCgnL2Rpc3RhbmNlLycsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5zOiBzbC5sYXQgKyAnLCcgKyBzbC5sbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbnM6IGRsLmxhdCArICcsJyArIGRsLmxuZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FJemFTeURYLWF0b0xtNm5RcE1nUV9HWUhJbzFraXNjQWU1dHhYYydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QuZGlzdGFuY2VfcGxhdGZvcm0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZGVyID0gcGFyc2VGbG9hdCh0aGlzLmRmLmZlZXMuZm9vZC5kaXN0YW5jZV9yaWRlcilcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2N2ID0gcGFyc2VGbG9hdCh0aGlzLmRmLmZlZXMuZm9vZC5zY19taW5fdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1kID0gcGFyc2VGbG9hdCh0aGlzLmRmLmZlZXMuZm9vZC5taW5fZGlzdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbl9kZiA9IHBhcnNlRmxvYXQodGhpcy5kZi5mZWVzLmZvb2QubWluX2RmKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXhlZF9yaWRlcl9mZWUgPSBwYXJzZUZsb2F0KHRoaXMuZGYuZmVlcy5mb29kLnJpZGVyX2ZpeGVkX2ZlZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBkLnJvd3NbMF0uZWxlbWVudHNbMF0uZGlzdGFuY2UudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRmID0gMFxuICAgICAgICAgICAgICAgICAgICBsZXQgZHMgPSBkaXN0YW5jZSAvIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIC8gMTAwMCA8IG1kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZiA9IG1pbl9kZlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG11bHRpcGxpZXIgPSBkaXN0YW5jZSAvIDEwMDAgLSBtZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGxpZXIgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSBNYXRoLmZsb29yKG11bHRpcGxpZXIpICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgZGYgPSAocmlkZXIgKyBwbGF0Zm9ybSkgKiBtdWx0aXBsaWVyICsgbWluX2RmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZHMgPSBNYXRoLmZsb29yKGRzKSArIDFcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VfYWN0dWFsID0gcGFyc2VGbG9hdChkLnJvd3NbMF0uZWxlbWVudHNbMF0uZGlzdGFuY2UudmFsdWUgLyAxMDAwKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgIGxldCByaWRlcl9kZiA9IDBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlX2FjdHVhbCA8PSBtZCkgcmlkZXJfZGYgPSBmaXhlZF9yaWRlcl9mZWVcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByaWRlcl9kZiA9IGZpeGVkX3JpZGVyX2ZlZSArICgoZGlzdGFuY2VfYWN0dWFsIC0gbWQpICogcmlkZXIpXG4gICAgICAgICAgICAgICAgICAgIHJpZGVyX2RmID0gTWF0aC5mbG9vcihyaWRlcl9kZilcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXRmb3JtX2RmID0gTWF0aC5mbG9vcihkZiAtIHJpZGVyX2RmKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21hcC9hZGREZWxpdmVyeUZlZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5kYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBwbGF0Zm9ybV9kZiArIHJpZGVyX2RmXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAgICAgLm9uc2FsZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDk5O1xuICB9XG4gIFxuICAudHJhbnN0eXBlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnYtY2FyZF9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXN0b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3RvQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Jlc3RvQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQ3NDgzMjYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVzdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVzdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICB2YXIgc3R5bGUwID0gcmVxdWlyZShcIi4vUmVzdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBkNzQ4MzI2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKVxuaWYgKHN0eWxlMC5fX2luamVjdF9fKSBzdHlsZTAuX19pbmplY3RfXyhjb250ZXh0KVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgXCIwZDc0ODMyNlwiLFxuICBcIjk5ZjdlODVhXCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkQWN0aW9ucyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZJbWcgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJbWcnO1xuaW1wb3J0IHsgVkxhenkgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMYXp5JztcbmltcG9ydCB7IFZMaXN0SXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Db250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1TdWJ0aXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0Jztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZDYXJkLFZDYXJkQWN0aW9ucyxWRmxleCxWSW1nLFZMYXp5LFZMaXN0SXRlbSxWTGlzdEl0ZW1BdmF0YXIsVkxpc3RJdGVtQ29udGVudCxWTGlzdEl0ZW1TdWJ0aXRsZSxWTGlzdEl0ZW1UaXRsZX0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQXV0b2NvbXBsZXRlLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWU2VsZWN0LCB7IGRlZmF1bHRNZW51UHJvcHMgYXMgVlNlbGVjdE1lbnVQcm9wcyB9IGZyb20gJy4uL1ZTZWxlY3QvVlNlbGVjdCdcbmltcG9ydCBWVGV4dEZpZWxkIGZyb20gJy4uL1ZUZXh0RmllbGQvVlRleHRGaWVsZCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuaW1wb3J0IHtcbiAgZ2V0T2JqZWN0VmFsdWVCeVBhdGgsXG4gIGdldFByb3BlcnR5RnJvbUl0ZW0sXG4gIGtleUNvZGVzLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQcm9wVHlwZSwgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbmNvbnN0IGRlZmF1bHRNZW51UHJvcHMgPSB7XG4gIC4uLlZTZWxlY3RNZW51UHJvcHMsXG4gIG9mZnNldFk6IHRydWUsXG4gIG9mZnNldE92ZXJmbG93OiB0cnVlLFxuICB0cmFuc2l0aW9uOiBmYWxzZSxcbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZTZWxlY3QuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtYXV0b2NvbXBsZXRlJyxcblxuICBwcm9wczoge1xuICAgIGFsbG93T3ZlcmZsb3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgYXV0b1NlbGVjdEZpcnN0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogKGl0ZW06IGFueSwgcXVlcnlUZXh0OiBzdHJpbmcsIGl0ZW1UZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1UZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeVRleHQudG9Mb2NhbGVMb3dlckNhc2UoKSkgPiAtMVxuICAgICAgfSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8KGl0ZW06IGFueSwgcXVlcnlUZXh0OiBzdHJpbmcsIGl0ZW1UZXh0OiBzdHJpbmcpID0+IGJvb2xlYW4+LFxuICAgIGhpZGVOb0RhdGE6IEJvb2xlYW4sXG4gICAgbWVudVByb3BzOiB7XG4gICAgICB0eXBlOiBWU2VsZWN0Lm9wdGlvbnMucHJvcHMubWVudVByb3BzLnR5cGUsXG4gICAgICBkZWZhdWx0OiAoKSA9PiBkZWZhdWx0TWVudVByb3BzLFxuICAgIH0sXG4gICAgbm9GaWx0ZXI6IEJvb2xlYW4sXG4gICAgc2VhcmNoSW5wdXQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyBhcyBQcm9wVHlwZTxzdHJpbmcgfCB1bmRlZmluZWQ+LFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhenlTZWFyY2g6IHRoaXMuc2VhcmNoSW5wdXQsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZTZWxlY3Qub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LWF1dG9jb21wbGV0ZSc6IHRydWUsXG4gICAgICAgICd2LWF1dG9jb21wbGV0ZS0taXMtc2VsZWN0aW5nLWluZGV4JzogdGhpcy5zZWxlY3RlZEluZGV4ID4gLTEsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZEl0ZW1zICgpOiBvYmplY3RbXSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zXG4gICAgfSxcbiAgICBzZWxlY3RlZFZhbHVlcyAoKTogb2JqZWN0W10ge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoaXRlbSA9PiB0aGlzLmdldFZhbHVlKGl0ZW0pKVxuICAgIH0sXG4gICAgaGFzRGlzcGxheWVkSXRlbXMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZVNlbGVjdGVkXG4gICAgICAgID8gdGhpcy5maWx0ZXJlZEl0ZW1zLnNvbWUoaXRlbSA9PiAhdGhpcy5oYXNJdGVtKGl0ZW0pKVxuICAgICAgICA6IHRoaXMuZmlsdGVyZWRJdGVtcy5sZW5ndGggPiAwXG4gICAgfSxcbiAgICBjdXJyZW50UmFuZ2UgKCk6IG51bWJlciB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gPT0gbnVsbCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLmdldFRleHQodGhpcy5zZWxlY3RlZEl0ZW0pKS5sZW5ndGhcbiAgICB9LFxuICAgIGZpbHRlcmVkSXRlbXMgKCk6IG9iamVjdFtdIHtcbiAgICAgIGlmICghdGhpcy5pc1NlYXJjaGluZyB8fCB0aGlzLm5vRmlsdGVyIHx8IHRoaXMuaW50ZXJuYWxTZWFyY2ggPT0gbnVsbCkgcmV0dXJuIHRoaXMuYWxsSXRlbXNcblxuICAgICAgcmV0dXJuIHRoaXMuYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGdldFByb3BlcnR5RnJvbUl0ZW0oaXRlbSwgdGhpcy5pdGVtVGV4dClcbiAgICAgICAgY29uc3QgdGV4dCA9IHZhbHVlICE9IG51bGwgPyBTdHJpbmcodmFsdWUpIDogJydcblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIoaXRlbSwgU3RyaW5nKHRoaXMuaW50ZXJuYWxTZWFyY2gpLCB0ZXh0KVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVybmFsU2VhcmNoOiB7XG4gICAgICBnZXQgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlTZWFyY2hcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVNlYXJjaCA9IHZhbFxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpzZWFyY2gtaW5wdXQnLCB2YWwpXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNBbnlWYWx1ZUFsbG93ZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaElzRGlydHkgfHwgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGlzU2VhcmNoaW5nICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMubXVsdGlwbGUgJiZcbiAgICAgICAgdGhpcy5zZWFyY2hJc0RpcnR5XG4gICAgICApIHx8IChcbiAgICAgICAgdGhpcy5zZWFyY2hJc0RpcnR5ICYmXG4gICAgICAgIHRoaXMuaW50ZXJuYWxTZWFyY2ggIT09IHRoaXMuZ2V0VGV4dCh0aGlzLnNlbGVjdGVkSXRlbSlcbiAgICAgIClcbiAgICB9LFxuICAgIG1lbnVDYW5TaG93ICgpOiBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgICByZXR1cm4gdGhpcy5oYXNEaXNwbGF5ZWRJdGVtcyB8fCAhdGhpcy5oaWRlTm9EYXRhXG4gICAgfSxcbiAgICAkX21lbnVQcm9wcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHByb3BzID0gVlNlbGVjdC5vcHRpb25zLmNvbXB1dGVkLiRfbWVudVByb3BzLmNhbGwodGhpcyk7XG4gICAgICAocHJvcHMgYXMgYW55KS5jb250ZW50Q2xhc3MgPSBgdi1hdXRvY29tcGxldGVfX2NvbnRlbnQgJHsocHJvcHMgYXMgYW55KS5jb250ZW50Q2xhc3MgfHwgJyd9YC50cmltKClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRlZmF1bHRNZW51UHJvcHMsXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgfVxuICAgIH0sXG4gICAgc2VhcmNoSXNEaXJ0eSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFNlYXJjaCAhPSBudWxsICYmXG4gICAgICAgIHRoaXMuaW50ZXJuYWxTZWFyY2ggIT09ICcnXG4gICAgfSxcbiAgICBzZWxlY3RlZEl0ZW0gKCk6IGFueSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kKGkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUNvbXBhcmF0b3IodGhpcy5nZXRWYWx1ZShpKSwgdGhpcy5nZXRWYWx1ZSh0aGlzLmludGVybmFsVmFsdWUpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGxpc3REYXRhICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBWU2VsZWN0Lm9wdGlvbnMuY29tcHV0ZWQubGlzdERhdGEuY2FsbCh0aGlzKSBhcyBhbnlcblxuICAgICAgZGF0YS5wcm9wcyA9IHtcbiAgICAgICAgLi4uZGF0YS5wcm9wcyxcbiAgICAgICAgaXRlbXM6IHRoaXMudmlydHVhbGl6ZWRJdGVtcyxcbiAgICAgICAgbm9GaWx0ZXI6IChcbiAgICAgICAgICB0aGlzLm5vRmlsdGVyIHx8XG4gICAgICAgICAgIXRoaXMuaXNTZWFyY2hpbmcgfHxcbiAgICAgICAgICAhdGhpcy5maWx0ZXJlZEl0ZW1zLmxlbmd0aFxuICAgICAgICApLFxuICAgICAgICBzZWFyY2hJbnB1dDogdGhpcy5pbnRlcm5hbFNlYXJjaCxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZmlsdGVyZWRJdGVtczogJ29uRmlsdGVyZWRJdGVtc0NoYW5nZWQnLFxuICAgIGludGVybmFsVmFsdWU6ICdzZXRTZWFyY2gnLFxuICAgIGlzRm9jdXNlZCAodmFsKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvcHknLCB0aGlzLm9uQ29weSlcbiAgICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LnNlbGVjdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb3B5JywgdGhpcy5vbkNvcHkpXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZigpXG4gICAgICB9XG4gICAgfSxcbiAgICBpc01lbnVBY3RpdmUgKHZhbCkge1xuICAgICAgaWYgKHZhbCB8fCAhdGhpcy5oYXNTbG90KSByZXR1cm5cblxuICAgICAgdGhpcy5sYXp5U2VhcmNoID0gdW5kZWZpbmVkXG4gICAgfSxcbiAgICBpdGVtcyAodmFsLCBvbGRWYWwpIHtcbiAgICAgIC8vIElmIHdlIGFyZSBmb2N1c2VkLCB0aGUgbWVudVxuICAgICAgLy8gaXMgbm90IGFjdGl2ZSwgaGlkZSBubyBkYXRhIGlzIGVuYWJsZWQsXG4gICAgICAvLyBhbmQgaXRlbXMgY2hhbmdlXG4gICAgICAvLyBVc2VyIGlzIHByb2JhYmx5IGFzeW5jIGxvYWRpbmdcbiAgICAgIC8vIGl0ZW1zLCB0cnkgdG8gYWN0aXZhdGUgdGhlIG1lbnVcbiAgICAgIGlmIChcbiAgICAgICAgIShvbGRWYWwgJiYgb2xkVmFsLmxlbmd0aCkgJiZcbiAgICAgICAgdGhpcy5oaWRlTm9EYXRhICYmXG4gICAgICAgIHRoaXMuaXNGb2N1c2VkICYmXG4gICAgICAgICF0aGlzLmlzTWVudUFjdGl2ZSAmJlxuICAgICAgICB2YWwubGVuZ3RoXG4gICAgICApIHRoaXMuYWN0aXZhdGVNZW51KClcbiAgICB9LFxuICAgIHNlYXJjaElucHV0ICh2YWw6IHN0cmluZykge1xuICAgICAgdGhpcy5sYXp5U2VhcmNoID0gdmFsXG4gICAgfSxcbiAgICBpbnRlcm5hbFNlYXJjaDogJ29uSW50ZXJuYWxTZWFyY2hDaGFuZ2VkJyxcbiAgICBpdGVtVGV4dDogJ3VwZGF0ZVNlbGYnLFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuc2V0U2VhcmNoKClcbiAgfSxcblxuICBkZXN0cm95ZWQgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvcHknLCB0aGlzLm9uQ29weSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb25GaWx0ZXJlZEl0ZW1zQ2hhbmdlZCAodmFsOiBuZXZlcltdLCBvbGRWYWw6IG5ldmVyW10pIHtcbiAgICAgIC8vIFRPRE86IEhvdyBpcyB0aGUgd2F0Y2hlciB0cmlnZ2VyZWRcbiAgICAgIC8vIGZvciBkdXBsaWNhdGUgaXRlbXM/IG5vIGlkZWFcbiAgICAgIGlmICh2YWwgPT09IG9sZFZhbCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc2V0TWVudUluZGV4KC0xKVxuXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy5pbnRlcm5hbFNlYXJjaCB8fFxuICAgICAgICAgICh2YWwubGVuZ3RoICE9PSAxICYmXG4gICAgICAgICAgICAhdGhpcy5hdXRvU2VsZWN0Rmlyc3QpXG4gICAgICAgICkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy4kcmVmcy5tZW51LmdldFRpbGVzKClcbiAgICAgICAgdGhpcy5zZXRNZW51SW5kZXgoMClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvbkludGVybmFsU2VhcmNoQ2hhbmdlZCAoKSB7XG4gICAgICB0aGlzLnVwZGF0ZU1lbnVEaW1lbnNpb25zKClcbiAgICB9LFxuICAgIHVwZGF0ZU1lbnVEaW1lbnNpb25zICgpIHtcbiAgICAgIC8vIFR5cGUgZnJvbSBtZW51YWJsZSBpcyBub3QgbWFraW5nIGl0IHRocm91Z2hcbiAgICAgIHRoaXMuaXNNZW51QWN0aXZlICYmIHRoaXMuJHJlZnMubWVudSAmJiB0aGlzLiRyZWZzLm1lbnUudXBkYXRlRGltZW5zaW9ucygpXG4gICAgfSxcbiAgICBjaGFuZ2VTZWxlY3RlZEluZGV4IChrZXlDb2RlOiBudW1iZXIpIHtcbiAgICAgIC8vIERvIG5vdCBhbGxvdyBjaGFuZ2luZyBvZiBzZWxlY3RlZEluZGV4XG4gICAgICAvLyB3aGVuIHNlYXJjaCBpcyBkaXJ0eVxuICAgICAgaWYgKHRoaXMuc2VhcmNoSXNEaXJ0eSkgcmV0dXJuXG5cbiAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIGtleUNvZGUgPT09IGtleUNvZGVzLmxlZnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tdWx0aXBsZSAmJiBrZXlDb2RlID09PSBrZXlDb2Rlcy5yaWdodCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID49IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXgrK1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IGtleUNvZGVzLmJhY2tzcGFjZSB8fCBrZXlDb2RlID09PSBrZXlDb2Rlcy5kZWxldGUpIHtcbiAgICAgICAgdGhpcy5kZWxldGVDdXJyZW50SXRlbSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBkZWxldGVDdXJyZW50SXRlbSAoKSB7XG4gICAgICBjb25zdCBjdXJJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleFxuICAgICAgY29uc3QgY3VySXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtc1tjdXJJbmRleF1cblxuICAgICAgLy8gRG8gbm90aGluZyBpZiBpbnB1dCBvciBpdGVtIGlzIGRpc2FibGVkXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmlzSW50ZXJhY3RpdmUgfHxcbiAgICAgICAgdGhpcy5nZXREaXNhYmxlZChjdXJJdGVtKVxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDFcblxuICAgICAgLy8gU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaWZcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHNlbGVjdGlvblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPT09IC0xICYmXG4gICAgICAgIGxhc3RJbmRleCAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGxhc3RJbmRleFxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoXG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJJbmRleCAhPT0gbGVuZ3RoIC0gMVxuICAgICAgICA/IGN1ckluZGV4XG4gICAgICAgIDogY3VySW5kZXggLSAxXG4gICAgICBjb25zdCBuZXh0SXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtc1tuZXh0SW5kZXhdXG5cbiAgICAgIGlmICghbmV4dEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLm11bHRpcGxlID8gW10gOiB1bmRlZmluZWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oY3VySXRlbSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbmV4dEluZGV4XG4gICAgfSxcbiAgICBjbGVhcmFibGVDYWxsYmFjayAoKSB7XG4gICAgICB0aGlzLmludGVybmFsU2VhcmNoID0gdW5kZWZpbmVkXG5cbiAgICAgIFZTZWxlY3Qub3B0aW9ucy5tZXRob2RzLmNsZWFyYWJsZUNhbGxiYWNrLmNhbGwodGhpcylcbiAgICB9LFxuICAgIGdlbklucHV0ICgpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXQuY2FsbCh0aGlzKVxuXG4gICAgICBpbnB1dC5kYXRhID0gbWVyZ2VEYXRhKGlucHV0LmRhdGEhLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGdldE9iamVjdFZhbHVlQnlQYXRoKHRoaXMuJHJlZnMubWVudSwgJ2FjdGl2ZVRpbGUuaWQnKSxcbiAgICAgICAgICBhdXRvY29tcGxldGU6IGdldE9iamVjdFZhbHVlQnlQYXRoKGlucHV0LmRhdGEhLCAnYXR0cnMuYXV0b2NvbXBsZXRlJywgJ29mZicpLFxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogdGhpcy5pbnRlcm5hbFNlYXJjaCB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBnZW5JbnB1dFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFZTZWxlY3Qub3B0aW9ucy5tZXRob2RzLmdlbklucHV0U2xvdC5jYWxsKHRoaXMpXG5cbiAgICAgIHNsb3QuZGF0YSEuYXR0cnMhLnJvbGUgPSAnY29tYm9ib3gnXG5cbiAgICAgIHJldHVybiBzbG90XG4gICAgfSxcbiAgICBnZW5TZWxlY3Rpb25zICgpOiBWTm9kZSB8IG5ldmVyW10ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzU2xvdCB8fCB0aGlzLm11bHRpcGxlXG4gICAgICAgID8gVlNlbGVjdC5vcHRpb25zLm1ldGhvZHMuZ2VuU2VsZWN0aW9ucy5jYWxsKHRoaXMpXG4gICAgICAgIDogW11cbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5pc0ludGVyYWN0aXZlKSByZXR1cm5cblxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID4gLTFcbiAgICAgICAgPyAodGhpcy5zZWxlY3RlZEluZGV4ID0gLTEpXG4gICAgICAgIDogdGhpcy5vbkZvY3VzKClcblxuICAgICAgaWYgKCF0aGlzLmlzQXBwZW5kSW5uZXIoZS50YXJnZXQpKSB0aGlzLmFjdGl2YXRlTWVudSgpXG4gICAgfSxcbiAgICBvbklucHV0IChlOiBFdmVudCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPiAtMSB8fFxuICAgICAgICAhZS50YXJnZXRcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlXG5cbiAgICAgIC8vIElmIHR5cGluZyBhbmQgbWVudSBpcyBub3QgY3VycmVudGx5IGFjdGl2ZVxuICAgICAgaWYgKHRhcmdldC52YWx1ZSkgdGhpcy5hY3RpdmF0ZU1lbnUoKVxuXG4gICAgICB0aGlzLmludGVybmFsU2VhcmNoID0gdmFsdWVcbiAgICAgIHRoaXMuYmFkSW5wdXQgPSB0YXJnZXQudmFsaWRpdHkgJiYgdGFyZ2V0LnZhbGlkaXR5LmJhZElucHV0XG4gICAgfSxcbiAgICBvbktleURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGVcblxuICAgICAgVlNlbGVjdC5vcHRpb25zLm1ldGhvZHMub25LZXlEb3duLmNhbGwodGhpcywgZSlcblxuICAgICAgLy8gVGhlIG9yZGVyaW5nIGlzIGltcG9ydGFudCBoZXJlXG4gICAgICAvLyBhbGxvd3MgbmV3IHZhbHVlIHRvIGJlIHVwZGF0ZWRcbiAgICAgIC8vIGFuZCB0aGVuIG1vdmVzIHRoZSBpbmRleCB0byB0aGVcbiAgICAgIC8vIHByb3BlciBsb2NhdGlvblxuICAgICAgdGhpcy5jaGFuZ2VTZWxlY3RlZEluZGV4KGtleUNvZGUpXG4gICAgfSxcbiAgICBvblNwYWNlRG93biAoZTogS2V5Ym9hcmRFdmVudCkgeyAvKiBub29wICovIH0sXG4gICAgb25UYWJEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBWU2VsZWN0Lm9wdGlvbnMubWV0aG9kcy5vblRhYkRvd24uY2FsbCh0aGlzLCBlKVxuICAgICAgdGhpcy51cGRhdGVTZWxmKClcbiAgICB9LFxuICAgIG9uVXBEb3duIChlOiBFdmVudCkge1xuICAgICAgLy8gUHJldmVudCBzY3JlZW4gZnJvbSBzY3JvbGxpbmdcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAvLyBGb3IgYXV0b2NvbXBsZXRlIC8gY29tYm9ib3gsIGN5Y2xpbmdcbiAgICAgIC8vIGludGVyZmVycyB3aXRoIG5hdGl2ZSB1cC9kb3duIGJlaGF2aW9yXG4gICAgICAvLyBpbnN0ZWFkIGFjdGl2YXRlIHRoZSBtZW51XG4gICAgICB0aGlzLmFjdGl2YXRlTWVudSgpXG4gICAgfSxcbiAgICBzZWxlY3RJdGVtIChpdGVtOiBvYmplY3QpIHtcbiAgICAgIFZTZWxlY3Qub3B0aW9ucy5tZXRob2RzLnNlbGVjdEl0ZW0uY2FsbCh0aGlzLCBpdGVtKVxuICAgICAgdGhpcy5zZXRTZWFyY2goKVxuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyAoKSB7XG4gICAgICBWU2VsZWN0Lm9wdGlvbnMubWV0aG9kcy5zZXRTZWxlY3RlZEl0ZW1zLmNhbGwodGhpcylcblxuICAgICAgLy8gIzQyNzMgRG9uJ3QgcmVwbGFjZSBpZiBzZWFyY2hpbmdcbiAgICAgIC8vICM0NDAzIERvbid0IHJlcGxhY2UgaWYgZm9jdXNlZFxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkgdGhpcy5zZXRTZWFyY2goKVxuICAgIH0sXG4gICAgc2V0U2VhcmNoICgpIHtcbiAgICAgIC8vIFdhaXQgZm9yIG5leHRUaWNrIHNvIHNlbGVjdGVkSXRlbVxuICAgICAgLy8gaGFzIGhhZCB0aW1lIHRvIHVwZGF0ZVxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMubXVsdGlwbGUgfHxcbiAgICAgICAgICAhdGhpcy5pbnRlcm5hbFNlYXJjaCB8fFxuICAgICAgICAgICF0aGlzLmlzTWVudUFjdGl2ZVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmludGVybmFsU2VhcmNoID0gKFxuICAgICAgICAgICAgIXRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggfHxcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGUgfHxcbiAgICAgICAgICAgIHRoaXMuaGFzU2xvdFxuICAgICAgICAgIClcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiB0aGlzLmdldFRleHQodGhpcy5zZWxlY3RlZEl0ZW0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB1cGRhdGVTZWxmICgpIHtcbiAgICAgIGlmICghdGhpcy5zZWFyY2hJc0RpcnR5ICYmXG4gICAgICAgICF0aGlzLmludGVybmFsVmFsdWVcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIGlmICghdGhpcy52YWx1ZUNvbXBhcmF0b3IoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxTZWFyY2gsXG4gICAgICAgIHRoaXMuZ2V0VmFsdWUodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgKSkge1xuICAgICAgICB0aGlzLnNldFNlYXJjaCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNJdGVtIChpdGVtOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWVzLmluZGV4T2YodGhpcy5nZXRWYWx1ZShpdGVtKSkgPiAtMVxuICAgIH0sXG4gICAgb25Db3B5IChldmVudDogQ2xpcGJvYXJkRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IC0xKSByZXR1cm5cblxuICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbXNbdGhpcy5zZWxlY3RlZEluZGV4XVxuICAgICAgY29uc3QgY3VycmVudEl0ZW1UZXh0ID0gdGhpcy5nZXRUZXh0KGN1cnJlbnRJdGVtKVxuICAgICAgZXZlbnQuY2xpcGJvYXJkRGF0YSEuc2V0RGF0YSgndGV4dC9wbGFpbicsIGN1cnJlbnRJdGVtVGV4dClcbiAgICAgIGV2ZW50LmNsaXBib2FyZERhdGEhLnNldERhdGEoJ3RleHQvdm5kLnZ1ZXRpZnkuYXV0b2NvbXBsZXRlLml0ZW0rcGxhaW4nLCBjdXJyZW50SXRlbVRleHQpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSxcbiAgfSxcbn0pXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnYmlsbHMtcGF5bWVudCcpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1sYXlvdXQnLFtfYygnbG9hZGluZycse2F0dHJzOntcImFjdGl2ZVwiOl92bS5pc0xvYWRpbmcsXCJsb2FkZXJcIjpcImJhcnNcIixcImlzLWZ1bGwtcGFnZVwiOnRydWUsXCJjb2xvclwiOlwiYmx1ZVwifSxvbjp7XCJ1cGRhdGU6YWN0aXZlXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNMb2FkaW5nPSRldmVudH19fSksX3ZtLl92KFwiIFwiKSxfYygnbmF2LWRyYXdlcicse21vZGVsOnt2YWx1ZTooX3ZtLmRyYXdlciksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5kcmF3ZXI9JCR2fSxleHByZXNzaW9uOlwiZHJhd2VyXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkJyx7c3RhdGljQ2xhc3M6XCJjYXJkaHl0IG1iLTEwXCIsYXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJ3aWR0aFwiOlwiMTAwJVwifX0sW19jKCd2LWFwcC1iYXInLHthdHRyczp7XCJjb2xvclwiOlwicmdiYSgxMDAsMTE1LDIwMSlcIixcImFwcFwiOlwiXCIsXCJkYXJrXCI6XCJcIixcImZsYXRcIjpcIlwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJleHRlbnNpb25cIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ2NsaWVudC1vbmx5JyxbKCFfdm0uaXNIaWRlKT9fYygndi10YWJzJyx7YXR0cnM6e1wic2xpZGVyLWNvbG9yXCI6XCJ3aGl0ZVwiLFwiZGVuc2VcIjpcIlwiLFwiZ3Jvd1wiOlwiXCIsXCJjZW50ZXItYWN0aXZlXCI6XCJcIixcImNlbnRlcmVkXCI6XCJcIixcInNob3ctYXJyb3dzXCI6XCJcIn0sbW9kZWw6e3ZhbHVlOihfdm0uY3VycmVudEl0ZW0pLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uY3VycmVudEl0ZW09JCR2fSxleHByZXNzaW9uOlwiY3VycmVudEl0ZW1cIn19LFtfYygndi10YWInLHtrZXk6XCJhbGxcIixhdHRyczp7XCJocmVmXCI6XCIjdGFiLWFsbFwifX0sW192bS5fdihcIiBBbGwgXCIpXSksX3ZtLl92KFwiIFwiKSxfdm0uX2woKF92bS50YWdzKSxmdW5jdGlvbihpdGVtKXtyZXR1cm4gX2MoJ3YtdGFiJyx7a2V5Oml0ZW0ubmFtZSxhdHRyczp7XCJocmVmXCI6JyN0YWItJyArIGl0ZW0ubmFtZX19LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGl0ZW0ubmFtZSkrXCIgXCIpXSl9KV0sMik6X3ZtLl9lKCldLDEpXX0scHJveHk6dHJ1ZX1dKX0sWyghX3ZtLmlzU2VhcmNoKT9fYygndi1hcHAtYmFyLW5hdi1pY29uJyx7b246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uZHJhd2VyPSFfdm0uZHJhd2VyfX19KTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLCghX3ZtLmlzU2VhcmNoKT9fYygndi1hdmF0YXInLHtzdGF0aWNDbGFzczpcIm1yLTJcIixhdHRyczp7XCJyb3VuZGVkXCI6XCJcIixcInNpemVcIjpcIjM1XCJ9fSxbX2MoJ3YtaW1nJyx7YXR0cnM6e1wic3JjXCI6XCIvaWNvbi5wbmdcIn19KV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoIV92bS5pc1NlYXJjaCk/X2MoJ3YtdG9vbGJhci10aXRsZScsW192bS5fdihcIiBKaWZmeSBGYXZvcnMgXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoIV92bS5pc1NlYXJjaCk/X2MoJ3Ytc3BhY2VyJyk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygnY2xpZW50LW9ubHknLFsoX3ZtLmlzU2VhcmNoKT9fYygndi1hdXRvY29tcGxldGUnLHthdHRyczp7XCJpdGVtc1wiOl92bS5nZXRSZXN0b3MoJ2FsbCcpLFwiaXRlbS1rZXlcIjpcInVybFwiLFwiYXV0b2ZvY3VzXCI6XCJcIixcInByZXBlbmQtaW5uZXItaWNvblwiOlwibWRpLW1hZ25pZnlcIixcInNvbG9cIjpcIlwiLFwiaGlkZS1kZXRhaWxzXCI6XCJcIixcImhpZGUtc2VsZWN0ZWRcIjpcIlwiLFwiZGVuc2VcIjpcIlwiLFwibGlnaHRcIjpcIlwiLFwibGFiZWxcIjpcIlNlbGVjdFwiLFwiaXRlbS12YWx1ZVwiOlwiaWRcIixcIml0ZW0tdGV4dFwiOlwiYnVzaW5lc3NfbmFtZVwifSxvbjp7XCJibHVyXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNTZWFyY2ggPSBmYWxzZX19LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcIml0ZW1cIixmbjpmdW5jdGlvbihkYXRhKXtyZXR1cm4gW19jKCd2LWxpc3QnLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWdyb3VwJyxbX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1widG9cIjonL2JpbGxzX3BheW1lbnQvJyArIGRhdGEuaXRlbS51cmx9fSxbX2MoJ3YtbGlzdC1pdGVtLWF2YXRhcicsW19jKCd2LWltZycse2F0dHJzOntcInNyY1wiOmRhdGEuaXRlbS5sb2dvfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhkYXRhLml0ZW0uYnVzaW5lc3NfbmFtZSkrXCIgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGRhdGEuaXRlbS5icmFuY2gpK1wiIFwiKV0pXSwxKV0sMSldLDEpXSwxKV19fV0sbnVsbCxmYWxzZSwzMjc3NTkxMTg4KX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKCFfdm0uaXNTZWFyY2gpP19jKCd2LWJ0bicse2F0dHJzOntcImljb25cIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5pc1NlYXJjaCA9IHRydWV9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktbWFnbmlmeVwiKV0pXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uY2FydFNpemUgPiAwKT9fYygndi1idG4nLHthdHRyczp7XCJpY29uXCI6XCJcIixcInRvXCI6XCIvY2FydFwifX0sW19jKCd2LWJhZGdlJyx7YXR0cnM6e1wiY29sb3JcIjpcInJlZFwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJiYWRnZVwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5jYXJ0U2l6ZSkrXCIgXCIpXX0scHJveHk6dHJ1ZX1dLG51bGwsZmFsc2UsMTI4NTA0NTg3Nil9LFtfdm0uX3YoXCIgXCIpLF9jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwid2hpdGVcIixcImRlbnNlXCI6XCJcIn19LFtfdm0uX3YoXCIgbWRpLWNhcnQtb3V0bGluZSBcIildKV0sMSldLDEpOl92bS5fZSgpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1zaGVldCcse3N0YXRpY0NsYXNzOlwib3ZlcmZsb3cteS1hdXRvIGZpbGwtaGVpZ2h0XCIsYXR0cnM6e1wiaWRcIjpcInNjcm9sbGluZy10ZWNobmlxdWVzLTNcIn19LFtfYygndi1jb250YWluZXInLHthdHRyczp7XCJmbHVpZFwiOlwiXCJ9fSxbKF92bS5pc0hpZGUpP19jKCd2LWNvbnRlbnQnLFtfYygndi1sYXlvdXQnLHthdHRyczp7XCJ3cmFwXCI6XCJcIixcImp1c3RpZnktY2VudGVyXCI6XCJcIixcImFsaWduLWNlbnRlclwiOlwiXCIsXCJ0ZXh0LWxlZnRcIjpcIlwifX0sW19jKCd2LWZsZXgnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyXCIsYXR0cnM6e1wieHMxMlwiOlwiXCIsXCJtZDRcIjpcIlwiLFwic200XCI6XCJcIixcImxnM1wiOlwiXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwibWFwY29udGFpbmVyXCJ9LFtfYygnR01hcCcse3JlZjpcImdNYXBcIixhdHRyczp7XCJpZFwiOlwiZ21hcFwiLFwiY2VudGVyXCI6X3ZtLm15bG9jYXRpb24sXCJvcHRpb25zXCI6e1xuICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeSdcbiAgICAgICAgICB9LFwiem9vbVwiOjE1fSxvbjp7XCJjZW50ZXJfY2hhbmdlZFwiOl92bS5jZW50ZXJDaGFuZ2V9fSxbX2MoJ0dNYXBNYXJrZXInLHtyZWY6XCJnbWFwbWFya2VyXCIsYXR0cnM6e1wicG9zaXRpb25cIjpfdm0ubXlsb2NhdGlvbixcIm9wdGlvbnNcIjp7IGljb246IF92bS5zZWxlY3RlZG1hcmtlciB9fX0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHtzdGF0aWNDbGFzczpcIndoaXRlLS10ZXh0IG10LTVcIixhdHRyczp7XCJjb2xvclwiOlwiYmx1ZSBkYXJrZW4tMVwiLFwidGV4dFwiOlwiXCIsXCJibG9ja1wiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6X3ZtLnVwZGF0ZU1hcExvY2F0aW9ufX0sW192bS5fdihcIiBGaW5kIEJpbGxlciBcIildKV0sMSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLCghX3ZtLmlzSGlkZSk/X2MoJ3YtY29udGVudCcsW19jKCdjbGllbnQtb25seScsW19jKCd2LXRhYnMtaXRlbXMnLHttb2RlbDp7dmFsdWU6KF92bS5jdXJyZW50SXRlbSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5jdXJyZW50SXRlbT0kJHZ9LGV4cHJlc3Npb246XCJjdXJyZW50SXRlbVwifX0sW19jKCd2LXRhYi1pdGVtJyx7a2V5OlwiYWxsXCIsYXR0cnM6e1widmFsdWVcIjpcInRhYi1hbGxcIn19LFtfYygndi1sYXlvdXQnLHthdHRyczp7XCJ3cmFwXCI6XCJcIixcImp1c3RpZnktY2VudGVyXCI6XCJcIixcImFsaWduLWNlbnRlclwiOlwiXCIsXCJ0ZXh0LWxlZnRcIjpcIlwifX0sX3ZtLl9sKChfdm0uZ2V0UmVzdG9zKCdhbGwnKSksZnVuY3Rpb24oaSl7cmV0dXJuIF9jKCdyZXN0by1jYXJkJyx7a2V5OmkuaWQsc3RhdGljQ2xhc3M6XCJyZXZpZXctY2FyZFwiLHN0YXRpY1N0eWxlOntcIndoaXRlLXNwYWNlXCI6XCJpbml0aWFsXCJ9LGF0dHJzOntcImRhdGFcIjppLFwidXJsXCI6L2JpbGxlci8raS51cmx9fSl9KSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfdm0uX2woKF92bS50YWdzKSxmdW5jdGlvbihpdGVtKXtyZXR1cm4gX2MoJ3YtdGFiLWl0ZW0nLHtrZXk6aXRlbS5uYW1lLGF0dHJzOntcInZhbHVlXCI6J3RhYi0nICsgaXRlbS5uYW1lfX0sW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwiLFwianVzdGlmeS1jZW50ZXJcIjpcIlwiLFwiYWxpZ24tY2VudGVyXCI6XCJcIixcInRleHQtbGVmdFwiOlwiXCJ9fSxfdm0uX2woKGl0ZW0udmFsdWVzKSxmdW5jdGlvbihpKXtyZXR1cm4gX2MoJ3Jlc3RvLWNhcmQnLHtrZXk6aS5pZCxzdGF0aWNDbGFzczpcInJldmlldy1jYXJkXCIsc3RhdGljU3R5bGU6e1wid2hpdGUtc3BhY2VcIjpcImluaXRpYWxcIn0sYXR0cnM6e1wiZGF0YVwiOmksXCJ1cmxcIjovYmlsbGVyLytpLnVybH19KX0pLDEpXSwxKX0pXSwyKV0sMSldLDEpOl92bS5fZSgpXSwxKV0sMSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDx2LWxheW91dD5cbiAgICAgICAgPGxvYWRpbmcgOmFjdGl2ZS5zeW5jPVwiaXNMb2FkaW5nXCIgbG9hZGVyPVwiYmFyc1wiIDppcy1mdWxsLXBhZ2U9XCJ0cnVlXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgICAgICA8bmF2LWRyYXdlciB2LW1vZGVsPVwiZHJhd2VyXCIgPjwvbmF2LWRyYXdlcj5cbiAgICAgICAgPHYtY2FyZCBmbGF0IHdpZHRoPVwiMTAwJVwiIGNsYXNzPVwiY2FyZGh5dCBtYi0xMFwiPlxuICAgICAgICAgICAgPHYtYXBwLWJhciBjb2xvcj1cInJnYmEoMTAwLDExNSwyMDEpXCIgYXBwIGRhcmsgZmxhdD5cbiAgICAgICAgICAgICAgICAgICA8di1hcHAtYmFyLW5hdi1pY29uICB2LWlmPVwiIWlzU2VhcmNoXCIgQGNsaWNrLnN0b3A9XCJkcmF3ZXI9IWRyYXdlclwiPjwvdi1hcHAtYmFyLW5hdi1pY29uPlxuICAgICAgICAgICAgICAgIDx2LWF2YXRhciB2LWlmPVwiIWlzU2VhcmNoXCIgY2xhc3M9XCJtci0yXCIgcm91bmRlZCBzaXplPVwiMzVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtaW1nIHNyYz1cIi9pY29uLnBuZ1wiIC8+IDwvdi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSB2LWlmPVwiIWlzU2VhcmNoXCI+IEppZmZ5IEZhdm9ycyA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1zcGFjZXIgdi1pZj1cIiFpc1NlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgPGNsaWVudC1vbmx5PlxuICAgICAgICAgICAgICAgICAgICA8di1hdXRvY29tcGxldGUgdi1pZj1cImlzU2VhcmNoXCIgOml0ZW1zPVwiZ2V0UmVzdG9zKCdhbGwnKVwiIGl0ZW0ta2V5PVwidXJsXCIgYXV0b2ZvY3VzIHByZXBlbmQtaW5uZXItaWNvbj1cIm1kaS1tYWduaWZ5XCIgc29sbyBoaWRlLWRldGFpbHMgaGlkZS1zZWxlY3RlZCBkZW5zZSBsaWdodCBsYWJlbD1cIlNlbGVjdFwiIGl0ZW0tdmFsdWU9XCJpZFwiIGl0ZW0tdGV4dD1cImJ1c2luZXNzX25hbWVcIiBAYmx1cj1cImlzU2VhcmNoID0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaXRlbT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gOnRvPVwiJy9iaWxsc19wYXltZW50LycgKyBkYXRhLml0ZW0udXJsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaW1nIDpzcmM9XCJkYXRhLml0ZW0ubG9nb1wiIC8+IDwvdi1saXN0LWl0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+IHt7IGRhdGEuaXRlbS5idXNpbmVzc19uYW1lIH19IDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT4ge3sgZGF0YS5pdGVtLmJyYW5jaCB9fSA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3YtYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cIiFpc1NlYXJjaFwiIGljb24gQGNsaWNrLnN0b3A9XCJpc1NlYXJjaCA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLW1hZ25pZnk8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiY2FydFNpemUgPiAwXCIgaWNvbiB0bz1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1iYWRnZSBjb2xvcj1cInJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYmFkZ2Ugb3ZlcmxhcD4ge3sgY2FydFNpemUgfX0gPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwid2hpdGVcIiBkZW5zZT4gbWRpLWNhcnQtb3V0bGluZSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1iYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L2NsaWVudC1vbmx5PlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZXh0ZW5zaW9uPlxuICAgICAgICAgICAgICAgICAgICA8Y2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10YWJzIHYtaWY9XCIhaXNIaWRlXCIgdi1tb2RlbD1cImN1cnJlbnRJdGVtXCIgc2xpZGVyLWNvbG9yPVwid2hpdGVcIiBkZW5zZSBncm93IGNlbnRlci1hY3RpdmUgY2VudGVyZWQgc2hvdy1hcnJvd3M+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGFiIGtleT1cImFsbFwiIGhyZWY9XCIjdGFiLWFsbFwiPiBBbGwgPC92LXRhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10YWIgdi1mb3I9XCJpdGVtIGluIHRhZ3NcIiA6a2V5PVwiaXRlbS5uYW1lXCIgOmhyZWY9XCInI3RhYi0nICsgaXRlbS5uYW1lXCI+IHt7IGl0ZW0ubmFtZSB9fSA8L3YtdGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYnM+XG4gICAgICAgICAgICAgICAgICAgIDwvY2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdi1hcHAtYmFyPlxuICAgICAgICAgICAgPHYtc2hlZXQgaWQ9XCJzY3JvbGxpbmctdGVjaG5pcXVlcy0zXCIgY2xhc3M9XCJvdmVyZmxvdy15LWF1dG8gZmlsbC1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRlbnQgdi1pZj1cImlzSGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQ0IHNtNCBsZzMgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHTWFwIGlkPVwiZ21hcFwiIHJlZj1cImdNYXBcIiA6Y2VudGVyPVwibXlsb2NhdGlvblwiIDpvcHRpb25zPVwie1xuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5J1xuICAgICAgICAgICAgICB9XCIgOnpvb209XCIxNVwiIEBjZW50ZXJfY2hhbmdlZD1cImNlbnRlckNoYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHTWFwTWFya2VyIHJlZj1cImdtYXBtYXJrZXJcIiA6cG9zaXRpb249XCJteWxvY2F0aW9uXCIgOm9wdGlvbnM9XCJ7IGljb246IHNlbGVjdGVkbWFya2VyIH1cIiAvPiA8L0dNYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgdGV4dCBjbGFzcz1cIndoaXRlLS10ZXh0IG10LTVcIiBibG9jayBvdXRsaW5lZCBAY2xpY2s9XCJ1cGRhdGVNYXBMb2NhdGlvblwiPiBGaW5kIEJpbGxlciA8L3YtYnRuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29udGVudCB2LWlmPVwiIWlzSGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNsaWVudC1vbmx5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYnMtaXRlbXMgdi1tb2RlbD1cImN1cnJlbnRJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYi1pdGVtIGtleT1cImFsbFwiIHZhbHVlPVwidGFiLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVzdG8tY2FyZCB2LWZvcj1cImkgaW4gZ2V0UmVzdG9zKCdhbGwnKVwiIDprZXk9XCJpLmlkXCIgY2xhc3M9XCJyZXZpZXctY2FyZFwiIHN0eWxlPVwid2hpdGUtc3BhY2U6aW5pdGlhbDtcIiA6ZGF0YT1cImlcIiA6dXJsPVwiL2JpbGxlci8raS51cmxcIiAvPiA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRhYi1pdGVtIHYtZm9yPVwiaXRlbSBpbiB0YWdzXCIgOmtleT1cIml0ZW0ubmFtZVwiIDp2YWx1ZT1cIid0YWItJyArIGl0ZW0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVzdG8tY2FyZCB2LWZvcj1cImkgaW4gaXRlbS52YWx1ZXNcIiA6a2V5PVwiaS5pZFwiIGNsYXNzPVwicmV2aWV3LWNhcmRcIiBzdHlsZT1cIndoaXRlLXNwYWNlOmluaXRpYWw7XCIgOmRhdGE9XCJpXCIgOnVybD1cIi9iaWxsZXIvK2kudXJsXCIgLz4gPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10YWJzLWl0ZW1zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jbGllbnQtb25seT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdi1zaGVldD5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgXG4gICAgPC92LWxheW91dD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGNsb25lZGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAndnVlLWxvYWRpbmctb3ZlcmxheSdcbmltcG9ydCBSZXN0b0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL1Jlc3RvQ2FyZC52dWUnXG5pbXBvcnQgJ3Z1ZS1sb2FkaW5nLW92ZXJsYXkvZGlzdC92dWUtbG9hZGluZy5jc3MnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBSZXN0b0NhcmQsXG4gICAgICAgIExvYWRpbmdcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkcmF3ZXI6ZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZG1hcmtlcjogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFIVVNVUkJWSGdCNVZVN1N3TkJFSjdMbVpCZ01DK1VkS0t4ME1aQ0cyc3J3Y2JDQjJnbHBGRFEzdG8vSWVndlNBSVdQckJKSXlTbGlwVUtLcVlMYUhKM2lXSWVsenUvRFRrOGo3MUg3TVFQbHRtWm5mbG1aM2IzanVpdlEzQnpDSWZESTRGQVlCdlRSVjNYUjd0QmdsQ0NPSVA5b0Z3dXYvNDZRU3dXV3dmWklhYUROaTd2R09scXRacWhmaFBFNC9FVmlBeTVWNmxqRTh1VlN1WFljNEprTWpuY2FyVWVNUjBpYjVEYjdmWkV2VjZ2V0JkOFBHK1E3M0xJRll5ajNsQXNhMUcvMzcvRDQrSldnUGJjUWt5YmQ5anBkR1lWUlhsbVNpUVNTWW1pZU1XbWhnTXV3STBrU1RQa3BRSmd6S0puRGZKdUtZcnlCSkg3c1ZOQlNQR0k3QktvRmwzbitHZ3VNWTRKSGl6Nkd0b3liaWlzUmN6bUV0UEZBTStJZmw2aTVEbVRLWXFlWCtOc3NqMTlsVXo5TjJKNFhOeERUaVFTa3dpNG96NkFEVTNoTGR4Yjdkd1c5UnlMNUIwRkhybHRBZ1pVc0VjZTRlUnJtd0IzdWdDUkozZms0VnZzT3dFREh0Y1d4S2VEeTRlbWFXbUhkUktkRnB2TnBoUUtoZGhGbU9ldDQyRDNzZnRUSnc3WC93SGd3L1U4aDF5d2tKL2dZSmVJL3dpL2c4a2RtcXFxRzVBbGs2MkVyK2VtRzduWEJGU3IxYXJvTlNOa253T1Z6Wm5OUzZ4SUh0Rm9ORjZDd2VBYnBoZXlMT2ZvMytBTGZyU3V6SjFGOEVzQUFBQUFTVVZPUks1Q1lJST0nLFxuICAgICAgICAgICAgY29vcmRpYWc6IGZhbHNlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgaXNIaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtOiBudWxsLFxuICAgICAgICAgICAgcGFydG5lcnM6IFtdLFxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgICAgIGdlb2NlbnRlcjoge1xuICAgICAgICAgICAgICAgIGxhdDogOS43OTQxMTg1LFxuICAgICAgICAgICAgICAgIGxuZzogMTE4LjczMjI1OTlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBteWxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgbGF0OiA5Ljc5NDExODUsXG4gICAgICAgICAgICAgICAgbG5nOiAxMTguNzMyMjU5OVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAgY2FydFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0SXRlbUNvdW50J11cbiAgICAgICAgfSxcbiAgICAgICAgcmVzdG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snbWFwL2dldEJpbGxlcnMnXVxuICAgICAgICB9LFxuICAgICAgICB0YWdzKCkge1xuICAgICAgICAgICAgY29uc3QgdGFncyA9IFsnRWxlY3RyaWMnLCAnV2F0ZXInLCAnVGVsY29zJywgJ0xvYW5zJywgJ01vdG9yY3ljbGUnLCAnSW5zdXJhbmUnLCAnUmVhbCBFc3RhdGUnXS5zb3J0KChhLCBiKSA9PiAoYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDApKVxuICAgICAgICAgICAgY29uc3QgbWVudSA9IFtdXG4gICAgICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb29kcyA9IHRoaXMuZ2V0UmVzdG9zKHRhZylcbiAgICAgICAgICAgICAgICBpZiAoZm9vZHMubGVuZ3RoID4gMCkgbWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGFnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IGZvb2RzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWVudVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBjdXJyZW50SXRlbSgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxpbmctdGVjaG5pcXVlcy0zJykuc2Nyb2xsKHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgdGhpcy4kZ2V0TG9jYXRpb24oe1xuICAgICAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICAgICAgICAgICAgdGltZW91dDogMTAwMDBcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5hY2N1cmFjeSA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRTdG9yZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNIaWRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5pc0hpZGUgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmaW5kU3RvcmVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21hcC9zZXRMb2NhdGlvbicsIHtcbiAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtYXAvZ2V0TmVhcmJ5QmlsbGVyJywge1xuICAgICAgICAgICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0LFxuICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5pc0hpZGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpYWcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY2VudGVyQ2hhbmdlKCkge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLiRyZWZzLmdNYXAubWFwLmdldENlbnRlcigpXG4gICAgICAgICAgICB0aGlzLiRyZWZzLmdtYXBtYXJrZXIubWFya2VyLnNldFBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCgpLFxuICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZU1hcExvY2F0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuJHJlZnMuZ01hcC5tYXAuZ2V0Q2VudGVyKClcbiAgICAgICAgICAgIHRoaXMuZmluZFN0b3Jlcyh7XG4gICAgICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQoKSxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBnZXRSZXN0b3MoaXRlbSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gJ2FsbCcpIHJldHVybiBjbG9uZWRlZXAodGhpcy5yZXN0by5maWx0ZXIoKGEpID0+IGEudGFncy5pbmNsdWRlcyhpdGVtKSkpLnNvcnQoKGEsIGIpID0+IGEuYnVzaW5lc3NfbmFtZSA8IGIuYnVzaW5lc3NfbmFtZSA/IC0xIDogYS5idXNpbmVzc19uYW1lID4gYi5idXNpbmVzc19uYW1lID8gMSA6IDApXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gY2xvbmVkZWVwKHRoaXMucmVzdG8pLnNvcnQoKGEsIGIpID0+IGEuYnVzaW5lc3NfbmFtZSA8IGIuYnVzaW5lc3NfbmFtZSA/IC0xIDogYS5idXNpbmVzc19uYW1lID4gYi5idXNpbmVzc19uYW1lID8gMSA6IDApXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tJZkV4aXN0KGl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLnJlc3RvLmZpbHRlcigoYSkgPT4gYS50YWdzLmluY2x1ZGVzKGl0ZW0pKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYywgaXRlbSlcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JpbGxzUGF5bWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmlsbHNQYXltZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQmlsbHNQYXltZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZGEwYTkyZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CaWxsc1BheW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CaWxsc1BheW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJiODQ5ZmU3Y1wiXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0c1xuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBcHBCYXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBcHBCYXInO1xuaW1wb3J0IHsgVkFwcEJhck5hdkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBcHBCYXInO1xuaW1wb3J0IHsgVkF1dG9jb21wbGV0ZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBWQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXZhdGFyJztcbmltcG9ydCB7IFZCYWRnZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJhZGdlJztcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZDb250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ29udGVudCc7XG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJY29uJztcbmltcG9ydCB7IFZJbWcgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJbWcnO1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkxpc3QgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Db250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Hcm91cCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbVRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWU2hlZXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTaGVldCc7XG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWVGFiIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGFicyc7XG5pbXBvcnQgeyBWVGFiSXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW1wb3J0IHsgVlRhYnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUYWJzJztcbmltcG9ydCB7IFZUYWJzSXRlbXMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUYWJzJztcbmltcG9ydCB7IFZUb29sYmFyVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUb29sYmFyJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBcHBCYXIsVkFwcEJhck5hdkljb24sVkF1dG9jb21wbGV0ZSxWQXZhdGFyLFZCYWRnZSxWQnRuLFZDYXJkLFZDb250YWluZXIsVkNvbnRlbnQsVkZsZXgsVkljb24sVkltZyxWTGF5b3V0LFZMaXN0LFZMaXN0SXRlbSxWTGlzdEl0ZW1BdmF0YXIsVkxpc3RJdGVtQ29udGVudCxWTGlzdEl0ZW1Hcm91cCxWTGlzdEl0ZW1TdWJ0aXRsZSxWTGlzdEl0ZW1UaXRsZSxWU2hlZXQsVlNwYWNlcixWVGFiLFZUYWJJdGVtLFZUYWJzLFZUYWJzSXRlbXMsVlRvb2xiYXJUaXRsZX0pXG4iLCI8dGVtcGxhdGU+XG4gPGJpbGxzLXBheW1lbnQvPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgQmlsbHNQYXltZW50IGZyb20gJ34vY29tcG9uZW50cy9CaWxsc1BheW1lbnQudnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQmlsbHNQYXltZW50XG4gIH0sXG4gIGxheW91dDogJ21lbnUnLFxuICAgICBtb3VudGVkKCl7XG4gICAgXHR0aGlzLiRmaXJlQW5hbHl0aWNzLmxvZ0V2ZW50KCdwYWdlX3ZpZXcnKVxuICAgIH1cbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmlsbHNfcGF5bWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmlsbHNfcGF5bWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2JpbGxzX3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZGYwODFjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2JpbGxzX3BheW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9iaWxsc19wYXltZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiY2Y4ZTc5OTJcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgVkJ0biBmcm9tICcuL1ZCdG4nXG5cbmV4cG9ydCB7IFZCdG4gfVxuZXhwb3J0IGRlZmF1bHQgVkJ0blxuIl0sInNvdXJjZVJvb3QiOiIifQ==