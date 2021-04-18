exports.ids = [11];
exports.modules = {

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

/***/ 168:
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

/***/ 234:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 235:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_030ef788_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_030ef788_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_030ef788_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_030ef788_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_030ef788_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Rides_vue_vue_type_style_index_0_id_3183f7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Rides_vue_vue_type_style_index_0_id_3183f7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Rides_vue_vue_type_style_index_0_id_3183f7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Rides_vue_vue_type_style_index_0_id_3183f7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Rides_vue_vue_type_style_index_0_id_3183f7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/rides.vue?vue&type=template&id=67475214&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('rides')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/rides.vue?vue&type=template&id=67475214&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Rides.vue?vue&type=template&id=3183f7d2&scoped=true&
var Ridesvue_type_template_id_3183f7d2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"blue"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('nav-drawer',{model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}}),_vm._v(" "),_c('v-card',{staticClass:"cardhyt mb-10",attrs:{"flat":"","width":"100%"}},[_c('v-app-bar',{attrs:{"color":"rgba(100,115,201)","app":"","dark":"","flat":""}},[_c('v-app-bar-nav-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer=!_vm.drawer}}}),_vm._v(" "),_c('v-avatar',{staticClass:"mr-2",attrs:{"rounded":"","size":"35"}},[_c('v-img',{attrs:{"src":"/icon.png"}})],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v(" Jiffy Favors ")])],1),_vm._v(" "),_c('v-content',[_c('v-card',[_c('v-card-title',[_vm._v(" Humanap ng rider")]),_vm._v(" "),_c('v-card-text',[_c('v-list',{attrs:{"nav":"","outlined":"","tile":"","width":"100%","dense":""}},[_c('v-list-item',{attrs:{"dense":""},on:{"click":function($event){$event.stopPropagation();_vm.mode = {mode:'pickup', text:'Select Pickup Location', btnText:'Set Pickup'}, _vm.mapSheet = true}}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-map-marker ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("Select origin")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Pickup")])],1)],1),_vm._v(" "),_c('v-list-item',{attrs:{"id":"needDeli"},on:{"click":function($event){$event.stopPropagation();_vm.mode = {mode:'dropoff', text:'Select Destination', btnText:'Set Destination'}, _vm.mapSheet = true}}},[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"blue"}},[_vm._v(" mdi-navigation ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("Select destination")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Destination")])],1)],1)],1),_vm._v(" "),_c('v-textarea',{staticClass:"mt-1",attrs:{"rows":"3","outlined":"","dense":"","hint":"e.g Blue ang sout na damit.","placeholder":"Describe instruction. e.g nakaWhite T-Shirt"}}),_vm._v(" "),_c('timer')],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","color":"blue","width":"45%","block":""},on:{"click":function($event){$event.stopPropagation();return _vm.findRider()}}},[_vm._v("Calculate Fare")])],1)],1)],1)],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-bottom-sheet',{model:{value:(_vm.mapSheet),callback:function ($$v) {_vm.mapSheet=$$v},expression:"mapSheet"}},[_c('v-card',[_c('v-card-title',[_vm._v(_vm._s(_vm.mode.text))]),_vm._v(" "),_c('v-card-text',[_c('div',{staticClass:"mapcontainer"},[_c('GMap',{ref:"gMap",attrs:{"id":"gmap","center":_vm.mylocation,"options":_vm.options,"zoom":15},on:{"center_changed":_vm.centerChange}},[_c('GMapMarker',{ref:"gmapmarker",attrs:{"position":_vm.mylocation,"options":{ icon: _vm.selectedmarker }}})],1)],1)]),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","text":"","color":"blue","block":""},on:{"click":function($event){$event.stopPropagation();return _vm.setLocation()}}},[_vm._v(_vm._s(_vm.mode.btnText))])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{attrs:{"inset":"","persistent":"","scrollable":""},model:{value:(_vm.rideType),callback:function ($$v) {_vm.rideType=$$v},expression:"rideType"}},[_c('v-card',[_c('v-card-title',[_c('v-icon',{on:{"click":function($event){$event.stopPropagation();_vm.rideType = false}}},[_vm._v("mdi-close")]),_vm._v("Calculated Fare Matrix ")],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-card-text',{staticStyle:{"height":"400px"}},[_c('v-list',{attrs:{"dense":""}},[_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-subtitle',[_vm._v("Distance")]),_vm._v(" "),_c('v-list-item-title',[_vm._v(_vm._s(_vm.ride.distance)+" km")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" Back Ride")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Solo Angkas")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-list-item-action-text',[_c('span',{staticClass:"caption grey--text"},[_vm._v("Fare")]),_vm._v(" "),_c('span',{staticClass:"red--text subtitle-2"},[_vm._v(_vm._s(_vm._f("toPHP")(_vm.ride.fares.back_ride)))])]),_vm._v(" "),_c('v-btn',{attrs:{"color":"red","small":"","outlined":""},on:{"click":function($event){$event.stopPropagation();}}},[_vm._v("Select")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("Tricycle")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Book entire tricycle ")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-list-item-action-text',[_c('span',{staticClass:"caption grey--text"},[_vm._v("Fare")]),_vm._v(" "),_c('span',{staticClass:"red--text subtitle-2"},[_vm._v(_vm._s(_vm._f("toPHP")(_vm.ride.fares.tricycle_hire)))])]),_vm._v(" "),_c('v-btn',{attrs:{"color":"red","small":"","outlined":""},on:{"click":function($event){$event.stopPropagation();}}},[_vm._v("Select")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("Tricycle - Shared")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Pickup is allowed ")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-list-item-action-text',[_c('span',{staticClass:"caption grey--text"},[_vm._v("Fare")]),_vm._v(" "),_c('span',{staticClass:"red--text subtitle-2"},[_vm._v(_vm._s(_vm._f("toPHP")(_vm.ride.fares.tricycle_shared)))])]),_vm._v(" "),_c('v-btn',{attrs:{"color":"red","small":"","outlined":""},on:{"click":function($event){$event.stopPropagation();}}},[_vm._v("Select")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("Car or Sedan")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Rent entire car ")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-list-item-action-text',[_c('span',{staticClass:"caption grey--text"},[_vm._v("Fare")]),_vm._v(" "),_c('span',{staticClass:"red--text subtitle-2"},[_vm._v(_vm._s(_vm._f("toPHP")(_vm.ride.fares.car_hire)))])]),_vm._v(" "),_c('v-btn',{attrs:{"color":"red","small":"","outlined":""},on:{"click":function($event){$event.stopPropagation();}}},[_vm._v("Select")])],1)],1)],1)],1)],1)],1)],1)],1)}
var Ridesvue_type_template_id_3183f7d2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Rides.vue?vue&type=template&id=3183f7d2&scoped=true&

// EXTERNAL MODULE: external "vue-loading-overlay"
var external_vue_loading_overlay_ = __webpack_require__(63);
var external_vue_loading_overlay_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_overlay_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Timer.vue?vue&type=template&id=030ef788&scoped=true&
var Timervue_type_template_id_030ef788_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"base-timer"},[_vm._ssrNode("<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" class=\"base-timer__svg\" data-v-030ef788><g class=\"base-timer__circle\" data-v-030ef788><circle cx=\"50\" cy=\"50\" r=\"45\" class=\"base-timer__path-elapsed\" data-v-030ef788></circle> <path"+(_vm._ssrAttr("stroke-dasharray",_vm.circleDasharray))+" d=\"\n          M 50, 50\n          m -45, 0\n          a 45,45 0 1,0 90,0\n          a 45,45 0 1,0 -90,0\n        \""+(_vm._ssrClass("base-timer__path-remaining",_vm.remainingPathColor))+" data-v-030ef788></path></g></svg> <span class=\"base-timer__label\" data-v-030ef788>"+_vm._ssrEscape(_vm._s(_vm.formattedTimeLeft))+"</span>")])}
var Timervue_type_template_id_030ef788_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Timer.vue?vue&type=template&id=030ef788&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Timer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 30;
const ALERT_THRESHOLD = 15;
const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};
const TIME_LIMIT = 50;
/* harmony default export */ var Timervue_type_script_lang_js_ = ({
  data() {
    return {
      timePassed: 0,
      timerInterval: null
    };
  },

  computed: {
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}s`;
    },

    timeLeft() {
      return TIME_LIMIT - this.timePassed;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / TIME_LIMIT;
      return rawTimeFraction - 1 / TIME_LIMIT * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const {
        alert,
        warning,
        info
      } = COLOR_CODES;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    }

  },
  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    }

  },

  mounted() {
    this.startTimer();
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
    },

    startTimer() {
      this.timerInterval = setInterval(() => this.timePassed += 1, 1000);
    }

  }
});
// CONCATENATED MODULE: ./components/Timer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Timervue_type_script_lang_js_ = (Timervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Timer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(253)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Timervue_type_script_lang_js_,
  Timervue_type_template_id_030ef788_scoped_true_render,
  Timervue_type_template_id_030ef788_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "030ef788",
  "2e19b54d"
  
)

/* harmony default export */ var Timer = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-loading-overlay/dist/vue-loading.css
var vue_loading = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rides.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Ridesvue_type_script_lang_js_ = ({
  components: {
    Loading: external_vue_loading_overlay_default.a,
    Timer: Timer
  },
  computed: {
    fares() {
      return this.$store.getters['admin/getFare'].service_fees.rides;
    }

  },

  data() {
    return {
      options: {
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: true,
        zoomControl: true,
        gestureHandling: 'greedy'
      },
      mapSheet: false,
      mode: {
        mode: '',
        text: '',
        btnText: ''
      },
      coords: {
        pickup: {
          lat: 0,
          lng: 0
        },
        dropoff: {
          lat: 0,
          lng: 0
        }
      },
      ride: {
        distance: 0,
        fares: {
          back_ride: 0,
          tricycle_hire: 0,
          tricycle_shared: 0,
          car_hire: 0,
          car_shared: 0
        }
      },
      rideType: false,
      drawer: false,
      isLoading: false,
      mylocation: {
        lat: 9.7941185,
        lng: 118.7322599
      },
      origin: {
        lat: 9.7941185,
        lng: 118.7322599
      },
      distanceMatrix: null,
      directionsService: null,
      directionsRenderer: null,
      markerA: 'http://maps.google.com/mapfiles/kml/paddle/A.png',
      selectedmarker: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII='
    };
  },

  mounted() {
    this.getArea();
  },

  methods: {
    setLocation() {
      let coordinates = this.$refs.gMap.map.getCenter();

      if (this.mode.mode === 'pickup') {
        this.coords.pickup = {
          lat: coordinates.lat(),
          lng: coordinates.lng()
        };
      } else {
        this.coords.dropoff = {
          lat: coordinates.lat(),
          lng: coordinates.lng()
        };
      }

      this.mapSheet = false;
    },

    mapLoaded() {},

    getArea() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(() => {
          this.$getLocation({
            enableHighAccuracy: true,
            timeout: 10000
          }).then(coordinates => {
            if (coordinates.accuracy < 500) {
              this.$store.dispatch('admin/getArea', {
                lat: coordinates.lat,
                lng: coordinates.lng
              }, {
                root: true
              });
              this.origin = {
                lat: coordinates.lat,
                lng: coordinates.lng
              };
            }
          });
        });
      }
    },

    findRider() {
      console.log(this.coords);
      this.distanceMatrix = new google.maps.DistanceMatrixService();
      this.distanceMatrix.getDistanceMatrix({
        origins: [this.coords.pickup],
        destinations: [this.coords.dropoff],
        travelMode: 'DRIVING'
      }, res => {
        if (res.rows[0].elements[0].status === 'OK') {
          let distance = parseFloat(parseFloat((500 + res.rows[0].elements[0].distance.value) / 1000).toFixed(2));
          this.ride.distance = distance;
          let fares = this.fares;
          this.ride.fares.back_ride = this.fareGenerator(fares.backride.base, fares.backride.base_distance, fares.backride.distance);
          this.ride.fares.tricycle_shared = this.fareGenerator(fares.trike.shared.base, fares.trike.shared.base_distance, fares.trike.shared.distance);
          this.ride.fares.tricycle_hire = this.fareGenerator(fares.trike.hired.base, fares.trike.hired.base_distance, fares.trike.hired.distance);
          this.ride.fares.car_hire = this.fareGenerator(fares.cars.hired.base, fares.cars.hired.base_distance, fares.cars.hired.distance);
          this.ride.fares.car_shared = this.fareGenerator(fares.cars.shared.base, fares.cars.shared.base_distance, fares.cars.shared.distance);
          this.rideType = true;
        }
      });
    },

    fareGenerator(base, base_distance, fare_distance) {
      let backridefare = this.ride.distance <= base_distance ? base : base + (this.ride.distance - base_distance) * fare_distance;
      let dec = parseInt(backridefare);
      let booking_fee = Math.round(backridefare * 0.10);
      let checker = backridefare - dec;
      if (checker < 0.5) backridefare += 0.5 - checker + 0.1;
      console.log('Fare', Math.round(backridefare));
      console.log('Booking Fee', Math.round(booking_fee));
      console.log('Rider Revenue', Math.round(backridefare * 0.85));
      console.log('Platform Revenue', Math.round(backridefare * 0.15));
      return Math.round(backridefare + booking_fee);
    },

    centerChange() {
      const coordinates = this.$refs.gMap.map.getCenter();
      this.$refs.gmapmarker.marker.setPosition({
        lat: coordinates.lat(),
        lng: coordinates.lng()
      });
      this.$refs.gmapmarker.marker.setAnimation(google.maps.Animation.BOUNCE);
    }

  }
});
// CONCATENATED MODULE: ./components/Rides.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Ridesvue_type_script_lang_js_ = (Ridesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
var VAppBar = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js
var VAppBarNavIcon = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBottomSheet/VBottomSheet.js
var VBottomSheet = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VContent/VContent.js + 1 modules
var VContent = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(154);

// CONCATENATED MODULE: ./components/Rides.vue



function Rides_injectStyles (context) {
  
  var style0 = __webpack_require__(254)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Rides_component = Object(componentNormalizer["a" /* default */])(
  components_Ridesvue_type_script_lang_js_,
  Ridesvue_type_template_id_3183f7d2_scoped_true_render,
  Ridesvue_type_template_id_3183f7d2_scoped_true_staticRenderFns,
  false,
  Rides_injectStyles,
  "3183f7d2",
  "2986d983"
  
)

/* harmony default export */ var Rides = (Rides_component.exports);

/* vuetify-loader */


























installComponents_default()(Rides_component, {VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VAvatar: VAvatar["a" /* default */],VBottomSheet: VBottomSheet["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VContent: VContent["a" /* default */],VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemActionText: components_VList["a" /* VListItemActionText */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemIcon: VListItemIcon["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VRow: VRow["a" /* default */],VTextarea: VTextarea["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/rides.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var ridesvue_type_script_lang_js_ = ({
  components: {
    Rides: Rides
  },
  layout: 'menu',

  mounted() {
    this.$fireAnalytics.logEvent('page_view');
  }

});
// CONCATENATED MODULE: ./pages/rides.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ridesvue_type_script_lang_js_ = (ridesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/rides.vue





/* normalize component */

var rides_component = Object(componentNormalizer["a" /* default */])(
  pages_ridesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30dca79f"
  
)

/* harmony default export */ var rides = __webpack_exports__["default"] = (rides_component.exports);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNhcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUb29sYmFyL1ZUb29sYmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVzc2FnZXMvVk1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVzc2FnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZJbnB1dC9WSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZJbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNhcmQvVkNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYWJlbC9WTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYWJlbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9sb2FkYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy92YWxpZGF0YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WR3JpZC9WR3JpZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUZXh0RmllbGQvVlRleHRGaWVsZC5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL2ludGVyc2VjdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUZXh0RmllbGQvVlRleHRGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyL1ZQcm9ncmVzc0xpbmVhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZJbnB1dC9WSW5wdXQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUb29sYmFyL1ZUb29sYmFyLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1haW4vVk1haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ291bnRlci9WQ291bnRlci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUZXh0YXJlYS9WVGV4dGFyZWEuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkFwcEJhci9WQXBwQmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWFpbi9WTWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvbnRlbnQvVkNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZSb3cudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhck5hdkljb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUZXh0YXJlYS9WVGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaW1lci52dWU/MDFhOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JpZGVzLnZ1ZT8xOGYxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGltZXIudnVlPzQyMTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SaWRlcy52dWU/NjAyOSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yaWRlcy52dWU/NzU5MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JpZGVzLnZ1ZT9hNWI5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGltZXIudnVlPzJiZTQiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvVGltZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGltZXIudnVlPzYxMTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaW1lci52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmlkZXMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmlkZXMudnVlP2M0YWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SaWRlcy52dWUiLCJ3ZWJwYWNrOi8vL3BhZ2VzL3JpZGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yaWRlcy52dWU/ODAwNSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yaWRlcy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNLFlBQVksR0FBRyxvRkFBc0IsQ0FBM0MsaUJBQTJDLENBQTNDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsb0ZBQXNCLENBQTVDLGtCQUE0QyxDQUE1QztBQUNBLE1BQU0sU0FBUyxHQUFHLG9GQUFzQixDQUF4QyxjQUF3QyxDQUF4QztBQUNBLE1BQU0sVUFBVSxHQUFHLG9GQUFzQixDQUF6QyxlQUF5QyxDQUF6QztBQUVBO0FBUWU7QUFDYix5QkFBdUIsRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3ZCO0FBTHVCO0FBRFosQ0FBZixFOzs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFLQTs7QUFDZSx1SEFBTSxDQUFOLE9BQWM7QUFDM0IsTUFBSSxFQUR1QjtBQUczQixPQUFLLEVBQUU7QUFDTCxZQUFRLEVBREg7QUFFTCxVQUFNLEVBRkQ7QUFHTCxZQUFRLEVBSEg7QUFJTCxTQUFLLEVBSkE7QUFLTCxZQUFRLEVBTEg7QUFNTCxtQkFBZSxFQUFFO0FBQ2YsYUFBTyxFQURRO0FBRWYsVUFBSSxFQUFFO0FBRlMsS0FOWjtBQVVMLFFBQUksRUFWQztBQVdMLFlBQVEsRUFYSDtBQVlMLGFBQVMsRUFaSjtBQWFMLFNBQUssRUFiQTtBQWNMLE9BQUcsRUFBRTtBQUNILFVBQUksRUFBRSxTQURILE1BQ0csQ0FESDtBQUVILGFBQU8sRUFBRTtBQUZOLEtBZEE7QUFrQkwsT0FBRyxFQUFFO0FBQ0gs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QUcsOENBQVU7QUFDMUIsRUFBRSxtQ0FBTTtBQUNSLEVBQUUsTUFBTTtBQUNSLEVBQUUsZUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSwwRkFBUyxRIiwiZmlsZSI6InBhZ2VzL3JpZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZDYXJkIGZyb20gJy4vVkNhcmQnXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5jb25zdCBWQ2FyZEFjdGlvbnMgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX2FjdGlvbnMnKVxuY29uc3QgVkNhcmRTdWJ0aXRsZSA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fc3VidGl0bGUnKVxuY29uc3QgVkNhcmRUZXh0ID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX190ZXh0JylcbmNvbnN0IFZDYXJkVGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3RpdGxlJylcblxuZXhwb3J0IHtcbiAgVkNhcmQsXG4gIFZDYXJkQWN0aW9ucyxcbiAgVkNhcmRTdWJ0aXRsZSxcbiAgVkNhcmRUZXh0LFxuICBWQ2FyZFRpdGxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVkNhcmQsXG4gICAgVkNhcmRBY3Rpb25zLFxuICAgIFZDYXJkU3VidGl0bGUsXG4gICAgVkNhcmRUZXh0LFxuICAgIFZDYXJkVGl0bGUsXG4gIH0sXG59XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WVG9vbGJhci5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldC9WU2hlZXQnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSW1nLCB7IHNyY09iamVjdCB9IGZyb20gJy4uL1ZJbWcvVkltZydcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgYnJlYWtpbmcgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgUHJvcFR5cGUgfSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWU2hlZXQuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdG9vbGJhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBhYnNvbHV0ZTogQm9vbGVhbixcbiAgICBib3R0b206IEJvb2xlYW4sXG4gICAgY29sbGFwc2U6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZXh0ZW5kZWQ6IEJvb2xlYW4sXG4gICAgZXh0ZW5zaW9uSGVpZ2h0OiB7XG4gICAgICBkZWZhdWx0OiA0OCxcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgfSxcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGZsb2F0aW5nOiBCb29sZWFuLFxuICAgIHByb21pbmVudDogQm9vbGVhbixcbiAgICBzaG9ydDogQm9vbGVhbixcbiAgICBzcmM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0gYXMgUHJvcFR5cGU8c3RyaW5nIHwgc3JjT2JqZWN0PixcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaGVhZGVyJyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgaXNFeHRlbmRlZDogZmFsc2UsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodFxuXG4gICAgICBpZiAoIXRoaXMuaXNFeHRlbmRlZCkgcmV0dXJuIGhlaWdodFxuXG4gICAgICBjb25zdCBleHRlbnNpb25IZWlnaHQgPSBwYXJzZUludCh0aGlzLmV4dGVuc2lvbkhlaWdodClcblxuICAgICAgcmV0dXJuIHRoaXMuaXNDb2xsYXBzZWRcbiAgICAgICAgPyBoZWlnaHRcbiAgICAgICAgOiBoZWlnaHQgKyAoIWlzTmFOKGV4dGVuc2lvbkhlaWdodCkgPyBleHRlbnNpb25IZWlnaHQgOiAwKVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb250ZW50SGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMuaGVpZ2h0KSByZXR1cm4gcGFyc2VJbnQodGhpcy5oZWlnaHQpXG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCAmJiB0aGlzLmRlbnNlKSByZXR1cm4gOTZcbiAgICAgIGlmICh0aGlzLmlzUHJvbWluZW50ICYmIHRoaXMuc2hvcnQpIHJldHVybiAxMTJcbiAgICAgIGlmICh0aGlzLmlzUHJvbWluZW50KSByZXR1cm4gMTI4XG4gICAgICBpZiAodGhpcy5kZW5zZSkgcmV0dXJuIDQ4XG4gICAgICBpZiAodGhpcy5zaG9ydCB8fCB0aGlzLiR2dWV0aWZ5LmJyZWFrcG9pbnQuc21BbmREb3duKSByZXR1cm4gNTZcbiAgICAgIHJldHVybiA2NFxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZTaGVldC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdG9vbGJhcic6IHRydWUsXG4gICAgICAgICd2LXRvb2xiYXItLWFic29sdXRlJzogdGhpcy5hYnNvbHV0ZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tYm90dG9tJzogdGhpcy5ib3R0b20sXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlJzogdGhpcy5jb2xsYXBzZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tY29sbGFwc2VkJzogdGhpcy5pc0NvbGxhcHNlZCxcbiAgICAgICAgJ3YtdG9vbGJhci0tZGVuc2UnOiB0aGlzLmRlbnNlLFxuICAgICAgICAndi10b29sYmFyLS1leHRlbmRlZCc6IHRoaXMuaXNFeHRlbmRlZCxcbiAgICAgICAgJ3YtdG9vbGJhci0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtdG9vbGJhci0tZmxvYXRpbmcnOiB0aGlzLmZsb2F0aW5nLFxuICAgICAgICAndi10b29sYmFyLS1wcm9taW5lbnQnOiB0aGlzLmlzUHJvbWluZW50LFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNDb2xsYXBzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29sbGFwc2VcbiAgICB9LFxuICAgIGlzUHJvbWluZW50ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pbmVudFxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5tZWFzdXJhYmxlU3R5bGVzLFxuICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZEhlaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICBjb25zdCBicmVha2luZ1Byb3BzID0gW1xuICAgICAgWydhcHAnLCAnPHYtYXBwLWJhciBhcHA+J10sXG4gICAgICBbJ21hbnVhbC1zY3JvbGwnLCAnPHYtYXBwLWJhciA6dmFsdWU9XCJmYWxzZVwiPiddLFxuICAgICAgWydjbGlwcGVkLWxlZnQnLCAnPHYtYXBwLWJhciBjbGlwcGVkLWxlZnQ+J10sXG4gICAgICBbJ2NsaXBwZWQtcmlnaHQnLCAnPHYtYXBwLWJhciBjbGlwcGVkLXJpZ2h0PiddLFxuICAgICAgWydpbnZlcnRlZC1zY3JvbGwnLCAnPHYtYXBwLWJhciBpbnZlcnRlZC1zY3JvbGw+J10sXG4gICAgICBbJ3Njcm9sbC1vZmYtc2NyZWVuJywgJzx2LWFwcC1iYXIgc2Nyb2xsLW9mZi1zY3JlZW4+J10sXG4gICAgICBbJ3Njcm9sbC10YXJnZXQnLCAnPHYtYXBwLWJhciBzY3JvbGwtdGFyZ2V0PiddLFxuICAgICAgWydzY3JvbGwtdGhyZXNob2xkJywgJzx2LWFwcC1iYXIgc2Nyb2xsLXRocmVzaG9sZD4nXSxcbiAgICAgIFsnY2FyZCcsICc8di1hcHAtYmFyIGZsYXQ+J10sXG4gICAgXVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBicmVha2luZ1Byb3BzLmZvckVhY2goKFtvcmlnaW5hbCwgcmVwbGFjZW1lbnRdKSA9PiB7XG4gICAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkob3JpZ2luYWwpKSBicmVha2luZyhvcmlnaW5hbCwgcmVwbGFjZW1lbnQsIHRoaXMpXG4gICAgfSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQmFja2dyb3VuZCAoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRIZWlnaHQpLFxuICAgICAgICBzcmM6IHRoaXMuc3JjLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuJHNjb3BlZFNsb3RzLmltZ1xuICAgICAgICA/IHRoaXMuJHNjb3BlZFNsb3RzLmltZyh7IHByb3BzIH0pXG4gICAgICAgIDogdGhpcy4kY3JlYXRlRWxlbWVudChWSW1nLCB7IHByb3BzIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19pbWFnZScsXG4gICAgICB9LCBbaW1hZ2VdKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9fY29udGVudCcsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0KSxcbiAgICAgICAgfSxcbiAgICAgIH0sIGdldFNsb3QodGhpcykpXG4gICAgfSxcbiAgICBnZW5FeHRlbnNpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2V4dGVuc2lvbicsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuZXh0ZW5zaW9uSGVpZ2h0KSxcbiAgICAgICAgfSxcbiAgICAgIH0sIGdldFNsb3QodGhpcywgJ2V4dGVuc2lvbicpKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHRoaXMuaXNFeHRlbmRlZCA9IHRoaXMuZXh0ZW5kZWQgfHwgISF0aGlzLiRzY29wZWRTbG90cy5leHRlbnNpb25cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuZ2VuQ29udGVudCgpXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaXNFeHRlbmRlZCkgY2hpbGRyZW4ucHVzaCh0aGlzLmdlbkV4dGVuc2lvbigpKVxuICAgIGlmICh0aGlzLnNyYyB8fCB0aGlzLiRzY29wZWRTbG90cy5pbWcpIGNoaWxkcmVuLnVuc2hpZnQodGhpcy5nZW5CYWNrZ3JvdW5kKCkpXG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVk1lc3NhZ2VzLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlLCBUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1lc3NhZ2VzJyxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSksXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPHN0cmluZ1tdPixcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ2hpbGRyZW4gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RyYW5zaXRpb24tZ3JvdXAnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1tZXNzYWdlc19fd3JhcHBlcicsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogJ21lc3NhZ2UtdHJhbnNpdGlvbicsXG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMudmFsdWUubWFwKHRoaXMuZ2VuTWVzc2FnZSkpXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlIChtZXNzYWdlOiBzdHJpbmcsIGtleTogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXNfX21lc3NhZ2UnLFxuICAgICAgICBrZXksXG4gICAgICB9LCBnZXRTbG90KHRoaXMsICdkZWZhdWx0JywgeyBtZXNzYWdlLCBrZXkgfSkgfHwgW21lc3NhZ2VdKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXMnLFxuICAgICAgY2xhc3M6IHRoaXMudGhlbWVDbGFzc2VzLFxuICAgIH0pLCBbdGhpcy5nZW5DaGlsZHJlbigpXSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVk1lc3NhZ2VzIGZyb20gJy4vVk1lc3NhZ2VzJ1xuXG5leHBvcnQgeyBWTWVzc2FnZXMgfVxuZXhwb3J0IGRlZmF1bHQgVk1lc3NhZ2VzXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WSW5wdXQuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuaW1wb3J0IFZMYWJlbCBmcm9tICcuLi9WTGFiZWwnXG5pbXBvcnQgVk1lc3NhZ2VzIGZyb20gJy4uL1ZNZXNzYWdlcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQmluZHNBdHRycyBmcm9tICcuLi8uLi9taXhpbnMvYmluZHMtYXR0cnMnXG5pbXBvcnQgVmFsaWRhdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3ZhbGlkYXRhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGdldFNsb3QsXG4gIGtlYmFiQ2FzZSxcbn0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBWTm9kZURhdGEsIFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IElucHV0VmFsaWRhdGlvblJ1bGUgfSBmcm9tICd2dWV0aWZ5L3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBCaW5kc0F0dHJzLFxuICBWYWxpZGF0YWJsZSxcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSAqL1xuICAkX21vZGVsRXZlbnQ6IHN0cmluZ1xufVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi1pbnB1dCcsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIGFwcGVuZEljb246IFN0cmluZyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaGVpZ2h0OiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIGhpZGVEZXRhaWxzOiBbQm9vbGVhbiwgU3RyaW5nXSBhcyBQcm9wVHlwZTxib29sZWFuIHwgJ2F1dG8nPixcbiAgICBoaW50OiBTdHJpbmcsXG4gICAgaWQ6IFN0cmluZyxcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudEhpbnQ6IEJvb2xlYW4sXG4gICAgcHJlcGVuZEljb246IFN0cmluZyxcbiAgICB2YWx1ZTogbnVsbCBhcyBhbnkgYXMgUHJvcFR5cGU8YW55PixcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF6eVZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgaGFzTW91c2VEb3duOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtaW5wdXQtLWhhcy1zdGF0ZSc6IHRoaXMuaGFzU3RhdGUsXG4gICAgICAgICd2LWlucHV0LS1oaWRlLWRldGFpbHMnOiAhdGhpcy5zaG93RGV0YWlscyxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWxhYmVsLWFjdGl2ZSc6IHRoaXMuaXNMYWJlbEFjdGl2ZSxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWRpcnR5JzogdGhpcy5pc0RpcnR5LFxuICAgICAgICAndi1pbnB1dC0taXMtZGlzYWJsZWQnOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICd2LWlucHV0LS1pcy1mb2N1c2VkJzogdGhpcy5pc0ZvY3VzZWQsXG4gICAgICAgIC8vIDx2LXN3aXRjaCBsb2FkaW5nPi5sb2FkaW5nID09PSAnJyBzbyB3ZSBjYW4ndCBqdXN0IGNhc3QgdG8gYm9vbGVhblxuICAgICAgICAndi1pbnB1dC0taXMtbG9hZGluZyc6IHRoaXMubG9hZGluZyAhPT0gZmFsc2UgJiYgdGhpcy5sb2FkaW5nICE9IG51bGwsXG4gICAgICAgICd2LWlucHV0LS1pcy1yZWFkb25seSc6IHRoaXMuaXNSZWFkb25seSxcbiAgICAgICAgJ3YtaW5wdXQtLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZElkICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaWQgfHwgYGlucHV0LSR7dGhpcy5fdWlkfWBcbiAgICB9LFxuICAgIGhhc0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNUb0Rpc3BsYXkubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgaGFzSGludCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gIXRoaXMuaGFzTWVzc2FnZXMgJiZcbiAgICAgICAgISF0aGlzLmhpbnQgJiZcbiAgICAgICAgKHRoaXMucGVyc2lzdGVudEhpbnQgfHwgdGhpcy5pc0ZvY3VzZWQpXG4gICAgfSxcbiAgICBoYXNMYWJlbCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISEodGhpcy4kc2xvdHMubGFiZWwgfHwgdGhpcy5sYWJlbClcbiAgICB9LFxuICAgIC8vIFByb3h5IGZvciBgbGF6eVZhbHVlYFxuICAgIC8vIFRoaXMgYWxsb3dzIGFuIGlucHV0XG4gICAgLy8gdG8gZnVuY3Rpb24gd2l0aG91dFxuICAgIC8vIGEgcHJvdmlkZWQgbW9kZWxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICAgICAgdGhpcy4kZW1pdCh0aGlzLiRfbW9kZWxFdmVudCwgdmFsKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlydHkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhdGhpcy5sYXp5VmFsdWVcbiAgICB9LFxuICAgIGlzTGFiZWxBY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEaXJ0eVxuICAgIH0sXG4gICAgbWVzc2FnZXNUb0Rpc3BsYXkgKCk6IHN0cmluZ1tdIHtcbiAgICAgIGlmICh0aGlzLmhhc0hpbnQpIHJldHVybiBbdGhpcy5oaW50XVxuXG4gICAgICBpZiAoIXRoaXMuaGFzTWVzc2FnZXMpIHJldHVybiBbXVxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9ucy5tYXAoKHZhbGlkYXRpb246IHN0cmluZyB8IElucHV0VmFsaWRhdGlvblJ1bGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWxpZGF0aW9uID09PSAnc3RyaW5nJykgcmV0dXJuIHZhbGlkYXRpb25cblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGlvbih0aGlzLmludGVybmFsVmFsdWUpXG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWxpZGF0aW9uUmVzdWx0ID09PSAnc3RyaW5nJyA/IHZhbGlkYXRpb25SZXN1bHQgOiAnJ1xuICAgICAgfSkuZmlsdGVyKG1lc3NhZ2UgPT4gbWVzc2FnZSAhPT0gJycpXG4gICAgfSxcbiAgICBzaG93RGV0YWlscyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlRGV0YWlscyA9PT0gZmFsc2UgfHwgKHRoaXMuaGlkZURldGFpbHMgPT09ICdhdXRvJyAmJiB0aGlzLmhhc0RldGFpbHMpXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVDcmVhdGUgKCkge1xuICAgIC8vIHYtcmFkaW8tZ3JvdXAgbmVlZHMgdG8gZW1pdCBhIGRpZmZlcmVudCBldmVudFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvNDc1MlxuICAgIHRoaXMuJF9tb2RlbEV2ZW50ID0gKHRoaXMuJG9wdGlvbnMubW9kZWwgJiYgdGhpcy4kb3B0aW9ucy5tb2RlbC5ldmVudCkgfHwgJ2lucHV0J1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuUHJlcGVuZFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5Db250cm9sKCksXG4gICAgICAgIHRoaXMuZ2VuQXBwZW5kU2xvdCgpLFxuICAgICAgXVxuICAgIH0sXG4gICAgZ2VuQ29udHJvbCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXRfX2NvbnRyb2wnLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLmdlbklucHV0U2xvdCgpLFxuICAgICAgICB0aGlzLmdlbk1lc3NhZ2VzKCksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5MYWJlbCgpLFxuICAgICAgICB0aGlzLiRzbG90cy5kZWZhdWx0LFxuICAgICAgXVxuICAgIH0sXG4gICAgZ2VuSWNvbiAoXG4gICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICBjYj86IChlOiBFdmVudCkgPT4gdm9pZCxcbiAgICAgIGV4dHJhRGF0YTogVk5vZGVEYXRhID0ge31cbiAgICApIHtcbiAgICAgIGNvbnN0IGljb24gPSAodGhpcyBhcyBhbnkpW2Ake3R5cGV9SWNvbmBdXG4gICAgICBjb25zdCBldmVudE5hbWUgPSBgY2xpY2s6JHtrZWJhYkNhc2UodHlwZSl9YFxuICAgICAgY29uc3QgaGFzTGlzdGVuZXIgPSAhISh0aGlzLmxpc3RlbmVycyRbZXZlbnROYW1lXSB8fCBjYilcblxuICAgICAgY29uc3QgZGF0YSA9IG1lcmdlRGF0YSh7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBoYXNMaXN0ZW5lciA/IGtlYmFiQ2FzZSh0eXBlKS5zcGxpdCgnLScpWzBdICsgJyBpY29uJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiAhaGFzTGlzdGVuZXJcbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgY2xpY2s6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoZXZlbnROYW1lLCBlKVxuICAgICAgICAgICAgICBjYiAmJiBjYihlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIENvbnRhaW5lciBoYXMgZyBldmVudCB0aGF0IHdpbGxcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbWVudSBvcGVuIGlmIGVuY2xvc2VkXG4gICAgICAgICAgICBtb3VzZXVwOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgIH0sIGV4dHJhRGF0YSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LWlucHV0X19pY29uYCxcbiAgICAgICAgY2xhc3M6IHR5cGUgPyBgdi1pbnB1dF9faWNvbi0tJHtrZWJhYkNhc2UodHlwZSl9YCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBWSWNvbixcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGljb25cbiAgICAgICAgKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5JbnB1dFNsb3QgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dF9fc2xvdCcsXG4gICAgICAgIHN0eWxlOiB7IGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCkgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgIG1vdXNlZG93bjogdGhpcy5vbk1vdXNlRG93bixcbiAgICAgICAgICBtb3VzZXVwOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiAnaW5wdXQtc2xvdCcsXG4gICAgICB9KSwgW3RoaXMuZ2VuRGVmYXVsdFNsb3QoKV0pXG4gICAgfSxcbiAgICBnZW5MYWJlbCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzTGFiZWwpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMYWJlbCwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNvbG9yOiB0aGlzLnZhbGlkYXRpb25TdGF0ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBmb2N1c2VkOiB0aGlzLmhhc1N0YXRlLFxuICAgICAgICAgIGZvcjogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICB9LFxuICAgICAgfSwgdGhpcy4kc2xvdHMubGFiZWwgfHwgdGhpcy5sYWJlbClcbiAgICB9LFxuICAgIGdlbk1lc3NhZ2VzICgpIHtcbiAgICAgIGlmICghdGhpcy5zaG93RGV0YWlscykgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVk1lc3NhZ2VzLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgY29sb3I6IHRoaXMuaGFzSGludCA/ICcnIDogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLm1lc3NhZ2VzVG9EaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGU6IHRoaXMuaGFzTWVzc2FnZXMgPyAnYWxlcnQnIDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiBwcm9wcyA9PiBnZXRTbG90KHRoaXMsICdtZXNzYWdlJywgcHJvcHMpLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlblNsb3QgKFxuICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgbG9jYXRpb246IHN0cmluZyxcbiAgICAgIHNsb3Q6IChWTm9kZSB8IFZOb2RlW10pW11cbiAgICApIHtcbiAgICAgIGlmICghc2xvdC5sZW5ndGgpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IHJlZiA9IGAke3R5cGV9LSR7bG9jYXRpb259YFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtaW5wdXRfXyR7cmVmfWAsXG4gICAgICAgIHJlZixcbiAgICAgIH0sIHNsb3QpXG4gICAgfSxcbiAgICBnZW5QcmVwZW5kU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzLnByZXBlbmQpIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzLnByZXBlbmQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbigncHJlcGVuZCcpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdwcmVwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbkFwcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIC8vIEFwcGVuZCBpY29uIGZvciB0ZXh0IGZpZWxkIHdhcyByZWFsbHlcbiAgICAgIC8vIGFuIGFwcGVuZGVkIGlubmVyIGljb24sIHYtdGV4dC1maWVsZFxuICAgICAgLy8gd2lsbCBvdmVyd3JpdGUgdGhpcyBtZXRob2QgaW4gb3JkZXIgdG8gb2J0YWluXG4gICAgICAvLyBiYWNrd2FyZHMgY29tcGF0XG4gICAgICBpZiAodGhpcy4kc2xvdHMuYXBwZW5kKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90cy5hcHBlbmQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlRG93biAoZTogRXZlbnQpIHtcbiAgICAgIHRoaXMuaGFzTW91c2VEb3duID0gdHJ1ZVxuICAgICAgdGhpcy4kZW1pdCgnbW91c2Vkb3duJywgZSlcbiAgICB9LFxuICAgIG9uTW91c2VVcCAoZTogRXZlbnQpIHtcbiAgICAgIHRoaXMuaGFzTW91c2VEb3duID0gZmFsc2VcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNldXAnLCBlKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLnZhbGlkYXRpb25TdGF0ZSwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0JyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgfSksIHRoaXMuZ2VuQ29udGVudCgpKVxuICB9LFxufSlcbiIsImltcG9ydCBWSW5wdXQgZnJvbSAnLi9WSW5wdXQnXG5cbmV4cG9ydCB7IFZJbnB1dCB9XG5leHBvcnQgZGVmYXVsdCBWSW5wdXRcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDYXJkLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWU2hlZXQgZnJvbSAnLi4vVlNoZWV0J1xuXG4vLyBNaXhpbnNcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvbG9hZGFibGUnXG5pbXBvcnQgUm91dGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdXRhYmxlJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIExvYWRhYmxlLFxuICBSb3V0YWJsZSxcbiAgVlNoZWV0XG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNhcmQnLFxuXG4gIHByb3BzOiB7XG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBob3ZlcjogQm9vbGVhbixcbiAgICBpbWc6IFN0cmluZyxcbiAgICBsaW5rOiBCb29sZWFuLFxuICAgIGxvYWRlckhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDQsXG4gICAgfSxcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtY2FyZCc6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1jYXJkLS1mbGF0JzogdGhpcy5mbGF0LFxuICAgICAgICAndi1jYXJkLS1ob3Zlcic6IHRoaXMuaG92ZXIsXG4gICAgICAgICd2LWNhcmQtLWxpbmsnOiB0aGlzLmlzQ2xpY2thYmxlLFxuICAgICAgICAndi1jYXJkLS1sb2FkaW5nJzogdGhpcy5sb2FkaW5nLFxuICAgICAgICAndi1jYXJkLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICd2LWNhcmQtLXJhaXNlZCc6IHRoaXMucmFpc2VkLFxuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICB9XG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzdHlsZTogRGljdGlvbmFyeTxzdHJpbmc+ID0ge1xuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5zdHlsZXMuY2FsbCh0aGlzKSxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW1nKSB7XG4gICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSBgdXJsKFwiJHt0aGlzLmltZ31cIikgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuUHJvZ3Jlc3MgKCkge1xuICAgICAgY29uc3QgcmVuZGVyID0gTG9hZGFibGUub3B0aW9ucy5tZXRob2RzLmdlblByb2dyZXNzLmNhbGwodGhpcylcblxuICAgICAgaWYgKCFyZW5kZXIpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1jYXJkX19wcm9ncmVzcycsXG4gICAgICAgIGtleTogJ3Byb2dyZXNzJyxcbiAgICAgIH0sIFtyZW5kZXJdKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHsgdGFnLCBkYXRhIH0gPSB0aGlzLmdlbmVyYXRlUm91dGVMaW5rKClcblxuICAgIGRhdGEuc3R5bGUgPSB0aGlzLnN0eWxlc1xuXG4gICAgaWYgKHRoaXMuaXNDbGlja2FibGUpIHtcbiAgICAgIGRhdGEuYXR0cnMgPSBkYXRhLmF0dHJzIHx8IHt9XG4gICAgICBkYXRhLmF0dHJzLnRhYmluZGV4ID0gMFxuICAgIH1cblxuICAgIHJldHVybiBoKHRhZywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgZGF0YSksIFtcbiAgICAgIHRoaXMuZ2VuUHJvZ3Jlc3MoKSxcbiAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHQsXG4gICAgXSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vVlByb2dyZXNzTGluZWFyLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7XG4gIFZGYWRlVHJhbnNpdGlvbixcbiAgVlNsaWRlWFRyYW5zaXRpb24sXG59IGZyb20gJy4uL3RyYW5zaXRpb25zJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgUG9zaXRpb25hYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9wb3NpdGlvbmFibGUnXG5pbXBvcnQgUHJveHlhYmxlIGZyb20gJy4uLy4uL21peGlucy9wcm94eWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBGdW5jdGlvbmFsQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gJ3Z1ZS90eXBlcydcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFBvc2l0aW9uYWJsZUZhY3RvcnkoWydhYnNvbHV0ZScsICdmaXhlZCcsICd0b3AnLCAnYm90dG9tJ10pLFxuICBQcm94eWFibGUsXG4gIFRoZW1lYWJsZVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1wcm9ncmVzcy1saW5lYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIGJhY2tncm91bmRPcGFjaXR5OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIGJ1ZmZlclZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMTAwLFxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDQsXG4gICAgfSxcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIHF1ZXJ5OiBCb29sZWFuLFxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcbiAgICBzdHJlYW06IEJvb2xlYW4sXG4gICAgc3RyaXBlZDogQm9vbGVhbixcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZXJuYWxMYXp5VmFsdWU6IHRoaXMudmFsdWUgfHwgMCxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBfX2NhY2hlZEJhY2tncm91bmQgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciB8fCB0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2JhY2tncm91bmQnLFxuICAgICAgICBzdHlsZTogdGhpcy5iYWNrZ3JvdW5kU3R5bGUsXG4gICAgICB9KSlcbiAgICB9LFxuICAgIF9fY2FjaGVkQmFyICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCh0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbiwgW3RoaXMuX19jYWNoZWRCYXJUeXBlXSlcbiAgICB9LFxuICAgIF9fY2FjaGVkQmFyVHlwZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IHRoaXMuX19jYWNoZWRJbmRldGVybWluYXRlIDogdGhpcy5fX2NhY2hlZERldGVybWluYXRlXG4gICAgfSxcbiAgICBfX2NhY2hlZEJ1ZmZlciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fYnVmZmVyJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgfSlcbiAgICB9LFxuICAgIF9fY2FjaGVkRGV0ZXJtaW5hdGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1wcm9ncmVzcy1saW5lYXJfX2RldGVybWluYXRlYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCh0aGlzLm5vcm1hbGl6ZWRWYWx1ZSwgJyUnKSxcbiAgICAgICAgfSxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgX19jYWNoZWRJbmRldGVybWluYXRlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1wcm9ncmVzcy1saW5lYXJfX2luZGV0ZXJtaW5hdGUtLWFjdGl2ZSc6IHRoaXMuYWN0aXZlLFxuICAgICAgICB9LFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLmdlblByb2dyZXNzQmFyKCdsb25nJyksXG4gICAgICAgIHRoaXMuZ2VuUHJvZ3Jlc3NCYXIoJ3Nob3J0JyksXG4gICAgICBdKVxuICAgIH0sXG4gICAgX19jYWNoZWRTdHJlYW0gKCk6IFZOb2RlIHwgbnVsbCB7XG4gICAgICBpZiAoIXRoaXMuc3RyZWFtKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19zdHJlYW0nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KDEwMCAtIHRoaXMubm9ybWFsaXplZEJ1ZmZlciwgJyUnKSxcbiAgICAgICAgfSxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgYmFja2dyb3VuZFN0eWxlICgpOiBvYmplY3Qge1xuICAgICAgY29uc3QgYmFja2dyb3VuZE9wYWNpdHkgPSB0aGlzLmJhY2tncm91bmRPcGFjaXR5ID09IG51bGxcbiAgICAgICAgPyAodGhpcy5iYWNrZ3JvdW5kQ29sb3IgPyAxIDogMC4zKVxuICAgICAgICA6IHBhcnNlRmxvYXQodGhpcy5iYWNrZ3JvdW5kT3BhY2l0eSlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogYmFja2dyb3VuZE9wYWNpdHksXG4gICAgICAgIFt0aGlzLmlzUmV2ZXJzZWQgPyAncmlnaHQnIDogJ2xlZnQnXTogY29udmVydFRvVW5pdCh0aGlzLm5vcm1hbGl6ZWRWYWx1ZSwgJyUnKSxcbiAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkQnVmZmVyIC0gdGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICB9XG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tZml4ZWQnOiB0aGlzLmZpeGVkLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXF1ZXJ5JzogdGhpcy5xdWVyeSxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1yZWFjdGl2ZSc6IHRoaXMucmVhY3RpdmUsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcmV2ZXJzZSc6IHRoaXMuaXNSZXZlcnNlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1yb3VuZGVkJzogdGhpcy5yb3VuZGVkLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXN0cmlwZWQnOiB0aGlzLnN0cmlwZWQsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRUcmFuc2l0aW9uICgpOiBGdW5jdGlvbmFsQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRldGVybWluYXRlID8gVkZhZGVUcmFuc2l0aW9uIDogVlNsaWRlWFRyYW5zaXRpb25cbiAgICB9LFxuICAgIGlzUmV2ZXJzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkucnRsICE9PSB0aGlzLnJldmVyc2VcbiAgICB9LFxuICAgIG5vcm1hbGl6ZWRCdWZmZXIgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5idWZmZXJWYWx1ZSlcbiAgICB9LFxuICAgIG5vcm1hbGl6ZWRWYWx1ZSAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSh0aGlzLmludGVybmFsTGF6eVZhbHVlKVxuICAgIH0sXG4gICAgcmVhY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy4kbGlzdGVuZXJzLmNoYW5nZSlcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHN0eWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9XG5cbiAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgc3R5bGVzLmhlaWdodCA9IDBcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmluZGV0ZXJtaW5hdGUgJiYgcGFyc2VGbG9hdCh0aGlzLm5vcm1hbGl6ZWRCdWZmZXIpICE9PSAxMDApIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gY29udmVydFRvVW5pdCh0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsICclJylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlc1xuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IGdldFNsb3QodGhpcywgJ2RlZmF1bHQnLCB7IHZhbHVlOiB0aGlzLmludGVybmFsTGF6eVZhbHVlIH0pXG5cbiAgICAgIGlmICghc2xvdCkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fY29udGVudCcsXG4gICAgICB9LCBzbG90KVxuICAgIH0sXG4gICAgZ2VuTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuJGxpc3RlbmVyc1xuXG4gICAgICBpZiAodGhpcy5yZWFjdGl2ZSkge1xuICAgICAgICBsaXN0ZW5lcnMuY2xpY2sgPSB0aGlzLm9uQ2xpY2tcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVyc1xuICAgIH0sXG4gICAgZ2VuUHJvZ3Jlc3NCYXIgKG5hbWU6ICdsb25nJyB8ICdzaG9ydCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIFtuYW1lXTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgb25DbGljayAoZTogTW91c2VFdmVudCkge1xuICAgICAgaWYgKCF0aGlzLnJlYWN0aXZlKSByZXR1cm5cblxuICAgICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gZS5vZmZzZXRYIC8gd2lkdGggKiAxMDBcbiAgICB9LFxuICAgIG5vcm1hbGl6ZSAodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgaWYgKHZhbHVlIDwgMCkgcmV0dXJuIDBcbiAgICAgIGlmICh2YWx1ZSA+IDEwMCkgcmV0dXJuIDEwMFxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXInLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiAwLFxuICAgICAgICAnYXJpYS12YWx1ZW1heCc6IHRoaXMubm9ybWFsaXplZEJ1ZmZlcixcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB1bmRlZmluZWQgOiB0aGlzLm5vcm1hbGl6ZWRWYWx1ZSxcbiAgICAgIH0sXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSA/IDAgOiB1bmRlZmluZWQsXG4gICAgICAgIGhlaWdodDogdGhpcy5hY3RpdmUgPyBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSA6IDAsXG4gICAgICAgIHRvcDogdGhpcy50b3AgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLmdlbkxpc3RlbmVycygpLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBbXG4gICAgICB0aGlzLl9fY2FjaGVkU3RyZWFtLFxuICAgICAgdGhpcy5fX2NhY2hlZEJhY2tncm91bmQsXG4gICAgICB0aGlzLl9fY2FjaGVkQnVmZmVyLFxuICAgICAgdGhpcy5fX2NhY2hlZEJhcixcbiAgICAgIHRoaXMuZ2VuQ29udGVudCgpLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkxhYmVsLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSwgeyBmdW5jdGlvbmFsVGhlbWVDbGFzc2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gSGVscGVyc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWxhYmVsJyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgYWJzb2x1dGU6IEJvb2xlYW4sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGZvY3VzZWQ6IEJvb2xlYW4sXG4gICAgZm9yOiBTdHJpbmcsXG4gICAgbGVmdDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICdhdXRvJyxcbiAgICB9LFxuICAgIHZhbHVlOiBCb29sZWFuLFxuICB9LFxuXG4gIHJlbmRlciAoaCwgY3R4KTogVk5vZGUge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxpc3RlbmVycywgcHJvcHMgfSA9IGN0eFxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbGFiZWwnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ3YtbGFiZWwtLWFjdGl2ZSc6IHByb3BzLnZhbHVlLFxuICAgICAgICAndi1sYWJlbC0taXMtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgLi4uZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyhjdHgpLFxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGZvcjogcHJvcHMuZm9yLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAhcHJvcHMuZm9yLFxuICAgICAgfSxcbiAgICAgIG9uOiBsaXN0ZW5lcnMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBsZWZ0OiBjb252ZXJ0VG9Vbml0KHByb3BzLmxlZnQpLFxuICAgICAgICByaWdodDogY29udmVydFRvVW5pdChwcm9wcy5yaWdodCksXG4gICAgICAgIHBvc2l0aW9uOiBwcm9wcy5hYnNvbHV0ZSA/ICdhYnNvbHV0ZScgOiAncmVsYXRpdmUnLFxuICAgICAgfSxcbiAgICAgIHJlZjogJ2xhYmVsJyxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnbGFiZWwnLCBDb2xvcmFibGUub3B0aW9ucy5tZXRob2RzLnNldFRleHRDb2xvcihwcm9wcy5mb2N1c2VkICYmIHByb3BzLmNvbG9yLCBkYXRhKSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZMYWJlbCBmcm9tICcuL1ZMYWJlbCdcblxuZXhwb3J0IHsgVkxhYmVsIH1cbmV4cG9ydCBkZWZhdWx0IFZMYWJlbFxuIiwiaW1wb3J0IFZ1ZSwgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBWUHJvZ3Jlc3NMaW5lYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WUHJvZ3Jlc3NMaW5lYXInXG5cbmludGVyZmFjZSBjb2xvcmFibGUgZXh0ZW5kcyBWdWUge1xuICBjb2xvcj86IHN0cmluZ1xufVxuXG4vKipcbiAqIExvYWRhYmxlXG4gKlxuICogQG1peGluXG4gKlxuICogVXNlZCB0byBhZGQgbGluZWFyIHByb2dyZXNzIGJhciB0byBjb21wb25lbnRzXG4gKiBDYW4gdXNlIGEgZGVmYXVsdCBiYXIgd2l0aCBhIHNwZWNpZmljIGNvbG9yXG4gKiBvciBkZXNpZ25hdGUgYSBjdXN0b20gcHJvZ3Jlc3MgbGluZWFyIGJhclxuICovXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZDxjb2xvcmFibGU+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ2xvYWRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIGxvYWRpbmc6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBsb2FkZXJIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAyLFxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlblByb2dyZXNzICgpOiBWTm9kZSB8IFZOb2RlW10gfCBudWxsIHtcbiAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kc2xvdHMucHJvZ3Jlc3MgfHwgdGhpcy4kY3JlYXRlRWxlbWVudChWUHJvZ3Jlc3NMaW5lYXIsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogKHRoaXMubG9hZGluZyA9PT0gdHJ1ZSB8fCB0aGlzLmxvYWRpbmcgPT09ICcnKVxuICAgICAgICAgICAgPyAodGhpcy5jb2xvciB8fCAncHJpbWFyeScpXG4gICAgICAgICAgICA6IHRoaXMubG9hZGluZyxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMubG9hZGVySGVpZ2h0LFxuICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vdGhlbWVhYmxlJ1xuaW1wb3J0IHsgaW5qZWN0IGFzIFJlZ2lzdHJhYmxlSW5qZWN0IH0gZnJvbSAnLi4vcmVnaXN0cmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgY29uc29sZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IgfSBmcm9tICd2dWUvdHlwZXMvb3B0aW9ucydcbmltcG9ydCB7IElucHV0TWVzc2FnZSwgSW5wdXRWYWxpZGF0aW9uUnVsZXMgfSBmcm9tICd2dWV0aWZ5L3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFJlZ2lzdHJhYmxlSW5qZWN0PCdmb3JtJywgYW55PignZm9ybScpLFxuICBUaGVtZWFibGUsXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2YWxpZGF0YWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBlcnJvcjogQm9vbGVhbixcbiAgICBlcnJvckNvdW50OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMSxcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICBtZXNzYWdlczoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXldLFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPElucHV0TWVzc2FnZSB8IG51bGw+LFxuICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgIHJ1bGVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dFZhbGlkYXRpb25SdWxlcz4sXG4gICAgc3VjY2VzczogQm9vbGVhbixcbiAgICBzdWNjZXNzTWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICB2YWxpZGF0ZU9uQmx1cjogQm9vbGVhbixcbiAgICB2YWx1ZTogeyByZXF1aXJlZDogZmFsc2UgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JCdWNrZXQ6IFtdIGFzIHN0cmluZ1tdLFxuICAgICAgaGFzQ29sb3I6IGZhbHNlLFxuICAgICAgaGFzRm9jdXNlZDogZmFsc2UsXG4gICAgICBoYXNJbnB1dDogZmFsc2UsXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaXNSZXNldHRpbmc6IGZhbHNlLFxuICAgICAgbGF6eVZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5jb2xvcikgcmV0dXJuIHRoaXMuY29sb3JcbiAgICAgIC8vIEl0J3MgYXNzdW1lZCB0aGF0IGlmIHRoZSBpbnB1dCBpcyBvbiBhXG4gICAgICAvLyBkYXJrIGJhY2tncm91bmQsIHRoZSB1c2VyIHdpbGwgd2FudCB0b1xuICAgICAgLy8gaGF2ZSBhIHdoaXRlIGNvbG9yLiBJZiB0aGUgZW50aXJlIGFwcFxuICAgICAgLy8gaXMgc2V0dXAgdG8gYmUgZGFyaywgdGhlbiB0aGV5IHdpbGxcbiAgICAgIC8vIGxpa2Ugd2FudCB0byB1c2UgdGhlaXIgcHJpbWFyeSBjb2xvclxuICAgICAgaWYgKHRoaXMuaXNEYXJrICYmICF0aGlzLmFwcElzRGFyaykgcmV0dXJuICd3aGl0ZSdcbiAgICAgIGVsc2UgcmV0dXJuICdwcmltYXJ5J1xuICAgIH0sXG4gICAgaGFzRXJyb3IgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pbnRlcm5hbEVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCB8fFxuICAgICAgICB0aGlzLmVycm9yQnVja2V0Lmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5lcnJvclxuICAgICAgKVxuICAgIH0sXG4gICAgLy8gVE9ETzogQWRkIGxvZ2ljIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZSBiYXNlZFxuICAgIC8vIHVwb24gYSBnb29kIHZhbGlkYXRpb25cbiAgICBoYXNTdWNjZXNzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdWNjZXNzTWVzc2FnZXMubGVuZ3RoID4gMCB8fFxuICAgICAgICB0aGlzLnN1Y2Nlc3NcbiAgICAgIClcbiAgICB9LFxuICAgIGV4dGVybmFsRXJyb3IgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDAgfHwgdGhpcy5lcnJvclxuICAgIH0sXG4gICAgaGFzTWVzc2FnZXMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblRhcmdldC5sZW5ndGggPiAwXG4gICAgfSxcbiAgICBoYXNTdGF0ZSAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5oYXNTdWNjZXNzIHx8XG4gICAgICAgICh0aGlzLnNob3VsZFZhbGlkYXRlICYmIHRoaXMuaGFzRXJyb3IpXG4gICAgICApXG4gICAgfSxcbiAgICBpbnRlcm5hbEVycm9yTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5lcnJvck1lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxNZXNzYWdlcyAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuSW50ZXJuYWxNZXNzYWdlcyh0aGlzLm1lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxTdWNjZXNzTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5zdWNjZXNzTWVzc2FnZXMpXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IHVua25vd24ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG5cbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWwpXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNEaXNhYmxlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAoXG4gICAgICAgICEhdGhpcy5mb3JtICYmXG4gICAgICAgIHRoaXMuZm9ybS5kaXNhYmxlZFxuICAgICAgKVxuICAgIH0sXG4gICAgaXNJbnRlcmFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5pc1JlYWRvbmx5XG4gICAgfSxcbiAgICBpc1JlYWRvbmx5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5IHx8IChcbiAgICAgICAgISF0aGlzLmZvcm0gJiZcbiAgICAgICAgdGhpcy5mb3JtLnJlYWRvbmx5XG4gICAgICApXG4gICAgfSxcbiAgICBzaG91bGRWYWxpZGF0ZSAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5leHRlcm5hbEVycm9yKSByZXR1cm4gdHJ1ZVxuICAgICAgaWYgKHRoaXMuaXNSZXNldHRpbmcpIHJldHVybiBmYWxzZVxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU9uQmx1clxuICAgICAgICA/IHRoaXMuaGFzRm9jdXNlZCAmJiAhdGhpcy5pc0ZvY3VzZWRcbiAgICAgICAgOiAodGhpcy5oYXNJbnB1dCB8fCB0aGlzLmhhc0ZvY3VzZWQpXG4gICAgfSxcbiAgICB2YWxpZGF0aW9ucyAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblRhcmdldC5zbGljZSgwLCBOdW1iZXIodGhpcy5lcnJvckNvdW50KSlcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TdGF0ZSAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGlmICh0aGlzLmhhc0Vycm9yICYmIHRoaXMuc2hvdWxkVmFsaWRhdGUpIHJldHVybiAnZXJyb3InXG4gICAgICBpZiAodGhpcy5oYXNTdWNjZXNzKSByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgICBpZiAodGhpcy5oYXNDb2xvcikgcmV0dXJuIHRoaXMuY29tcHV0ZWRDb2xvclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblRhcmdldCAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgaWYgKHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3VjY2Vzc01lc3NhZ2VzICYmIHRoaXMuc3VjY2Vzc01lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdWNjZXNzTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXNzYWdlcyAmJiB0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yQnVja2V0XG4gICAgICB9IGVsc2UgcmV0dXJuIFtdXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHJ1bGVzOiB7XG4gICAgICBoYW5kbGVyIChuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICBpZiAoZGVlcEVxdWFsKG5ld1ZhbCwgb2xkVmFsKSkgcmV0dXJuXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKVxuICAgICAgfSxcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlICgpIHtcbiAgICAgIC8vIElmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgc2V0dGluZyBpbnB1dCxcbiAgICAgIC8vIG1hcmsgaXQgd2l0aCBoYXNJbnB1dFxuICAgICAgdGhpcy5oYXNJbnB1dCA9IHRydWVcbiAgICAgIHRoaXMudmFsaWRhdGVPbkJsdXIgfHwgdGhpcy4kbmV4dFRpY2sodGhpcy52YWxpZGF0ZSlcbiAgICB9LFxuICAgIGlzRm9jdXNlZCAodmFsKSB7XG4gICAgICAvLyBTaG91bGQgbm90IGNoZWNrIHZhbGlkYXRpb25cbiAgICAgIC8vIGlmIGRpc2FibGVkXG4gICAgICBpZiAoXG4gICAgICAgICF2YWwgJiZcbiAgICAgICAgIXRoaXMuaXNEaXNhYmxlZFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXNlZCA9IHRydWVcbiAgICAgICAgdGhpcy52YWxpZGF0ZU9uQmx1ciAmJiB0aGlzLiRuZXh0VGljayh0aGlzLnZhbGlkYXRlKVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNSZXNldHRpbmcgKCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzSW5wdXQgPSBmYWxzZVxuICAgICAgICB0aGlzLmhhc0ZvY3VzZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzUmVzZXR0aW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgICB9LCAwKVxuICAgIH0sXG4gICAgaGFzRXJyb3IgKHZhbCkge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmVycm9yJywgdmFsKVxuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWUgKHZhbCkge1xuICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICB9LFxuICB9LFxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRlKClcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgdGhpcy5mb3JtICYmIHRoaXMuZm9ybS51bnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkludGVybmFsTWVzc2FnZXMgKG1lc3NhZ2VzOiBJbnB1dE1lc3NhZ2UgfCBudWxsKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgaWYgKCFtZXNzYWdlcykgcmV0dXJuIFtdXG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2VzKSkgcmV0dXJuIG1lc3NhZ2VzXG4gICAgICBlbHNlIHJldHVybiBbbWVzc2FnZXNdXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHJlc2V0ICgpIHtcbiAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSB0cnVlXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBBcnJheS5pc0FycmF5KHRoaXMuaW50ZXJuYWxWYWx1ZSlcbiAgICAgICAgPyBbXVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICByZXNldFZhbGlkYXRpb24gKCkge1xuICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IHRydWVcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgdmFsaWRhdGUgKGZvcmNlID0gZmFsc2UsIHZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBlcnJvckJ1Y2tldCA9IFtdXG4gICAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuaW50ZXJuYWxWYWx1ZVxuXG4gICAgICBpZiAoZm9yY2UpIHRoaXMuaGFzSW5wdXQgPSB0aGlzLmhhc0ZvY3VzZWQgPSB0cnVlXG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnJ1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBydWxlID0gdGhpcy5ydWxlc1tpbmRleF1cbiAgICAgICAgY29uc3QgdmFsaWQgPSB0eXBlb2YgcnVsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJ1bGUodmFsdWUpIDogcnVsZVxuXG4gICAgICAgIGlmICh2YWxpZCA9PT0gZmFsc2UgfHwgdHlwZW9mIHZhbGlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGVycm9yQnVja2V0LnB1c2godmFsaWQgfHwgJycpXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbGlkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBjb25zb2xlRXJyb3IoYFJ1bGVzIHNob3VsZCByZXR1cm4gYSBzdHJpbmcgb3IgYm9vbGVhbiwgcmVjZWl2ZWQgJyR7dHlwZW9mIHZhbGlkfScgaW5zdGVhZGAsIHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lcnJvckJ1Y2tldCA9IGVycm9yQnVja2V0XG4gICAgICB0aGlzLnZhbGlkID0gZXJyb3JCdWNrZXQubGVuZ3RoID09PSAwXG5cbiAgICAgIHJldHVybiB0aGlzLnZhbGlkXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBWVG9vbGJhciBmcm9tICcuL1ZUb29sYmFyJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmNvbnN0IFZUb29sYmFyVGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LXRvb2xiYXJfX3RpdGxlJylcbmNvbnN0IFZUb29sYmFySXRlbXMgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LXRvb2xiYXJfX2l0ZW1zJylcblxuZXhwb3J0IHtcbiAgVlRvb2xiYXIsXG4gIFZUb29sYmFySXRlbXMsXG4gIFZUb29sYmFyVGl0bGUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJF92dWV0aWZ5X3N1YmNvbXBvbmVudHM6IHtcbiAgICBWVG9vbGJhcixcbiAgICBWVG9vbGJhckl0ZW1zLFxuICAgIFZUb29sYmFyVGl0bGUsXG4gIH0sXG59XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ291bnRlci5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBUaGVtZWFibGUsIHsgZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyB9IGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1jb3VudGVyJyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIG1heDogW051bWJlciwgU3RyaW5nXSxcbiAgfSxcblxuICByZW5kZXIgKGgsIGN0eCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSBjdHhcbiAgICBjb25zdCBtYXggPSBwYXJzZUludChwcm9wcy5tYXgsIDEwKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQocHJvcHMudmFsdWUsIDEwKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBtYXggPyBgJHt2YWx1ZX0gLyAke21heH1gIDogU3RyaW5nKHByb3BzLnZhbHVlKVxuICAgIGNvbnN0IGlzR3JlYXRlciA9IG1heCAmJiAodmFsdWUgPiBtYXgpXG5cbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWNvdW50ZXInLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2Vycm9yLS10ZXh0JzogaXNHcmVhdGVyLFxuICAgICAgICAuLi5mdW5jdGlvbmFsVGhlbWVDbGFzc2VzKGN0eCksXG4gICAgICB9LFxuICAgIH0sIGNvbnRlbnQpXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZDb3VudGVyIGZyb20gJy4vVkNvdW50ZXInXG5cbmV4cG9ydCB7IFZDb3VudGVyIH1cbmV4cG9ydCBkZWZhdWx0IFZDb3VudGVyXG4iLCIvLyBEaXJlY3RpdmVzXG5pbXBvcnQgSW50ZXJzZWN0IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaW50ZXJzZWN0J1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnNvbGVXYXJuIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGVyc2VjdGFibGUgKG9wdGlvbnM6IHsgb25WaXNpYmxlOiBzdHJpbmdbXSB9KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSkge1xuICAgIC8vIGRvIG5vdGhpbmcgYmVjYXVzZSBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgaXMgbm90IGF2YWlsYWJsZVxuICAgIHJldHVybiBWdWUuZXh0ZW5kKHsgbmFtZTogJ2ludGVyc2VjdGFibGUnIH0pXG4gIH1cblxuICByZXR1cm4gVnVlLmV4dGVuZCh7XG4gICAgbmFtZTogJ2ludGVyc2VjdGFibGUnLFxuXG4gICAgbW91bnRlZCAoKSB7XG4gICAgICBJbnRlcnNlY3QuaW5zZXJ0ZWQodGhpcy4kZWwgYXMgSFRNTEVsZW1lbnQsIHtcbiAgICAgICAgbmFtZTogJ2ludGVyc2VjdCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLm9uT2JzZXJ2ZSxcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGRlc3Ryb3llZCAoKSB7XG4gICAgICBJbnRlcnNlY3QudW5iaW5kKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50KVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBvbk9ic2VydmUgKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSwgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyLCBpc0ludGVyc2VjdGluZzogYm9vbGVhbikge1xuICAgICAgICBpZiAoIWlzSW50ZXJzZWN0aW5nKSByZXR1cm5cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gb3B0aW9ucy5vblZpc2libGUubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICh0aGlzIGFzIGFueSlbb3B0aW9ucy5vblZpc2libGVbaV1dXG5cbiAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnNvbGVXYXJuKG9wdGlvbnMub25WaXNpYmxlW2ldICsgJyBtZXRob2QgaXMgbm90IGF2YWlsYWJsZSBvbiB0aGUgaW5zdGFuY2UgYnV0IHJlZmVyZW5jZWQgaW4gaW50ZXJzZWN0YWJsZSBtaXhpbiBvcHRpb25zJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRleHRGaWVsZC5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVklucHV0IGZyb20gJy4uL1ZJbnB1dCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZDb3VudGVyIGZyb20gJy4uL1ZDb3VudGVyJ1xuaW1wb3J0IFZMYWJlbCBmcm9tICcuLi9WTGFiZWwnXG5cbi8vIE1peGluc1xuaW1wb3J0IEludGVyc2VjdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2ludGVyc2VjdGFibGUnXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2xvYWRhYmxlJ1xuaW1wb3J0IFZhbGlkYXRhYmxlIGZyb20gJy4uLy4uL21peGlucy92YWxpZGF0YWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBrZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGJyZWFraW5nLCBjb25zb2xlV2FybiB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBWTm9kZSwgUHJvcFR5cGUgfSBmcm9tICd2dWUvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFZJbnB1dCxcbiAgSW50ZXJzZWN0YWJsZSh7XG4gICAgb25WaXNpYmxlOiBbXG4gICAgICAnc2V0TGFiZWxXaWR0aCcsXG4gICAgICAnc2V0UHJlZml4V2lkdGgnLFxuICAgICAgJ3NldFByZXBlbmRXaWR0aCcsXG4gICAgICAndHJ5QXV0b2ZvY3VzJyxcbiAgICBdLFxuICB9KSxcbiAgTG9hZGFibGUsXG4pXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEluc3RhbmNlVHlwZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkcmVmczoge1xuICAgIGxhYmVsOiBIVE1MRWxlbWVudFxuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgJ3ByZXBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgIHByZWZpeDogSFRNTEVsZW1lbnRcbiAgICBzdWZmaXg6IEhUTUxFbGVtZW50XG4gIH1cbn1cblxuY29uc3QgZGlydHlUeXBlcyA9IFsnY29sb3InLCAnZmlsZScsICd0aW1lJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnd2VlaycsICdtb250aCddXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRleHQtZmllbGQnLFxuXG4gIGRpcmVjdGl2ZXM6IHsgcmlwcGxlIH0sXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIGFwcGVuZE91dGVySWNvbjogU3RyaW5nLFxuICAgIGF1dG9mb2N1czogQm9vbGVhbixcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgY2xlYXJJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNsZWFyJyxcbiAgICB9LFxuICAgIGNvdW50ZXI6IFtCb29sZWFuLCBOdW1iZXIsIFN0cmluZ10sXG4gICAgY291bnRlclZhbHVlOiBGdW5jdGlvbiBhcyBQcm9wVHlwZTwodmFsdWU6IGFueSkgPT4gbnVtYmVyPixcbiAgICBmaWxsZWQ6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBmdWxsV2lkdGg6IEJvb2xlYW4sXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIHByZWZpeDogU3RyaW5nLFxuICAgIHByZXBlbmRJbm5lckljb246IFN0cmluZyxcbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc2hhcGVkOiBCb29sZWFuLFxuICAgIHNpbmdsZUxpbmU6IEJvb2xlYW4sXG4gICAgc29sbzogQm9vbGVhbixcbiAgICBzb2xvSW52ZXJ0ZWQ6IEJvb2xlYW4sXG4gICAgc3VmZml4OiBTdHJpbmcsXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBiYWRJbnB1dDogZmFsc2UsXG4gICAgbGFiZWxXaWR0aDogMCxcbiAgICBwcmVmaXhXaWR0aDogMCxcbiAgICBwcmVwZW5kV2lkdGg6IDAsXG4gICAgaW5pdGlhbFZhbHVlOiBudWxsLFxuICAgIGlzQm9vdGVkOiBmYWxzZSxcbiAgICBpc0NsZWFyaW5nOiBmYWxzZSxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVklucHV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10ZXh0LWZpZWxkJzogdHJ1ZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZnVsbC13aWR0aCc6IHRoaXMuZnVsbFdpZHRoLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1wcmVmaXgnOiB0aGlzLnByZWZpeCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc2luZ2xlLWxpbmUnOiB0aGlzLmlzU2luZ2xlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvJzogdGhpcy5pc1NvbG8sXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8taW52ZXJ0ZWQnOiB0aGlzLnNvbG9JbnZlcnRlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sby1mbGF0JzogdGhpcy5mbGF0LFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1maWxsZWQnOiB0aGlzLmZpbGxlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0taXMtYm9vdGVkJzogdGhpcy5pc0Jvb3RlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZW5jbG9zZWQnOiB0aGlzLmlzRW5jbG9zZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXJldmVyc2UnOiB0aGlzLnJldmVyc2UsXG4gICAgICAgICd2LXRleHQtZmllbGQtLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcGxhY2Vob2xkZXInOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1yb3VuZGVkJzogdGhpcy5yb3VuZGVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zaGFwZWQnOiB0aGlzLnNoYXBlZCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBjb25zdCBjb21wdXRlZENvbG9yID0gVmFsaWRhdGFibGUub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbG9yLmNhbGwodGhpcylcblxuICAgICAgaWYgKCF0aGlzLnNvbG9JbnZlcnRlZCB8fCAhdGhpcy5pc0ZvY3VzZWQpIHJldHVybiBjb21wdXRlZENvbG9yXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbG9yIHx8ICdwcmltYXJ5J1xuICAgIH0sXG4gICAgY29tcHV0ZWRDb3VudGVyVmFsdWUgKCk6IG51bWJlciB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY291bnRlclZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJWYWx1ZSh0aGlzLmludGVybmFsVmFsdWUpXG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMuaW50ZXJuYWxWYWx1ZSB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGhcbiAgICB9LFxuICAgIGhhc0NvdW50ZXIgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY291bnRlciAhPT0gZmFsc2UgJiYgdGhpcy5jb3VudGVyICE9IG51bGxcbiAgICB9LFxuICAgIGhhc0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIFZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmhhc0RldGFpbHMuY2FsbCh0aGlzKSB8fCB0aGlzLmhhc0NvdW50ZXJcbiAgICB9LFxuICAgIGludGVybmFsVmFsdWU6IHtcbiAgICAgIGdldCAoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMubGF6eVZhbHVlKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlydHkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlPy50b1N0cmluZygpLmxlbmd0aCA+IDAgfHwgdGhpcy5iYWRJbnB1dFxuICAgIH0sXG4gICAgaXNFbmNsb3NlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmZpbGxlZCB8fFxuICAgICAgICB0aGlzLmlzU29sbyB8fFxuICAgICAgICB0aGlzLm91dGxpbmVkXG4gICAgICApXG4gICAgfSxcbiAgICBpc0xhYmVsQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGlydHkgfHwgZGlydHlUeXBlcy5pbmNsdWRlcyh0aGlzLnR5cGUpXG4gICAgfSxcbiAgICBpc1NpbmdsZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmlzU29sbyB8fFxuICAgICAgICB0aGlzLnNpbmdsZUxpbmUgfHxcbiAgICAgICAgdGhpcy5mdWxsV2lkdGggfHxcbiAgICAgICAgLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9jb21wb25lbnRzL3RleHQtZmllbGRzLyNmaWxsZWQtdGV4dC1maWVsZFxuICAgICAgICAodGhpcy5maWxsZWQgJiYgIXRoaXMuaGFzTGFiZWwpXG4gICAgICApXG4gICAgfSxcbiAgICBpc1NvbG8gKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc29sbyB8fCB0aGlzLnNvbG9JbnZlcnRlZFxuICAgIH0sXG4gICAgbGFiZWxQb3NpdGlvbiAoKTogUmVjb3JkPCdsZWZ0JyB8ICdyaWdodCcsIHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD4ge1xuICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLnByZWZpeCAmJiAhdGhpcy5sYWJlbFZhbHVlKSA/IHRoaXMucHJlZml4V2lkdGggOiAwXG5cbiAgICAgIGlmICh0aGlzLmxhYmVsVmFsdWUgJiYgdGhpcy5wcmVwZW5kV2lkdGgpIG9mZnNldCAtPSB0aGlzLnByZXBlbmRXaWR0aFxuXG4gICAgICByZXR1cm4gKHRoaXMuJHZ1ZXRpZnkucnRsID09PSB0aGlzLnJldmVyc2UpID8ge1xuICAgICAgICBsZWZ0OiBvZmZzZXQsXG4gICAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICB9IDoge1xuICAgICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICAgIHJpZ2h0OiBvZmZzZXQsXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93TGFiZWwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzTGFiZWwgJiYgKCF0aGlzLmlzU2luZ2xlIHx8ICghdGhpcy5pc0xhYmVsQWN0aXZlICYmICF0aGlzLnBsYWNlaG9sZGVyKSlcbiAgICB9LFxuICAgIGxhYmVsVmFsdWUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmlzU2luZ2xlICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5pc0ZvY3VzZWQgfHwgdGhpcy5pc0xhYmVsQWN0aXZlIHx8IHRoaXMucGxhY2Vob2xkZXIpXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGxhYmVsVmFsdWU6ICdzZXRMYWJlbFdpZHRoJyxcbiAgICBvdXRsaW5lZDogJ3NldExhYmVsV2lkdGgnLFxuICAgIGxhYmVsICgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKHRoaXMuc2V0TGFiZWxXaWR0aClcbiAgICB9LFxuICAgIHByZWZpeCAoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljayh0aGlzLnNldFByZWZpeFdpZHRoKVxuICAgIH0sXG4gICAgaXNGb2N1c2VkOiAndXBkYXRlVmFsdWUnLFxuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnYm94JykpIHtcbiAgICAgIGJyZWFraW5nKCdib3gnLCAnZmlsbGVkJywgdGhpcylcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnYnJvd3Nlci1hdXRvY29tcGxldGUnKSkge1xuICAgICAgYnJlYWtpbmcoJ2Jyb3dzZXItYXV0b2NvbXBsZXRlJywgJ2F1dG9jb21wbGV0ZScsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHRoaXMuc2hhcGVkICYmICEodGhpcy5maWxsZWQgfHwgdGhpcy5vdXRsaW5lZCB8fCB0aGlzLmlzU29sbykpIHtcbiAgICAgIGNvbnNvbGVXYXJuKCdzaGFwZWQgc2hvdWxkIGJlIHVzZWQgd2l0aCBlaXRoZXIgZmlsbGVkIG9yIG91dGxpbmVkJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5hdXRvZm9jdXMgJiYgdGhpcy50cnlBdXRvZm9jdXMoKVxuICAgIHRoaXMuc2V0TGFiZWxXaWR0aCgpXG4gICAgdGhpcy5zZXRQcmVmaXhXaWR0aCgpXG4gICAgdGhpcy5zZXRQcmVwZW5kV2lkdGgoKVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy5pc0Jvb3RlZCA9IHRydWUpKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGZvY3VzICgpIHtcbiAgICAgIHRoaXMub25Gb2N1cygpXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGJsdXIgKGU/OiBFdmVudCkge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5L2lzc3Vlcy81OTEzXG4gICAgICAvLyBTYWZhcmkgdGFiIG9yZGVyIGdldHMgYnJva2VuIGlmIGNhbGxlZCBzeW5jaHJvbm91c1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgdGhpcy4kcmVmcy5pbnB1dC5ibHVyKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjbGVhcmFibGVDYWxsYmFjayAoKSB7XG4gICAgICB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5pbnRlcm5hbFZhbHVlID0gbnVsbClcbiAgICB9LFxuICAgIGdlbkFwcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1snYXBwZW5kLW91dGVyJ10pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzWydhcHBlbmQtb3V0ZXInXSBhcyBWTm9kZVtdKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZE91dGVySWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmRPdXRlcicpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdhcHBlbmQnLCAnb3V0ZXInLCBzbG90KVxuICAgIH0sXG4gICAgZ2VuUHJlcGVuZElubmVyU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydwcmVwZW5kLWlubmVyJ10pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzWydwcmVwZW5kLWlubmVyJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmVwZW5kSW5uZXJJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ3ByZXBlbmRJbm5lcicpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdwcmVwZW5kJywgJ2lubmVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbkljb25TbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ2FwcGVuZCddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ2FwcGVuZCcpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdhcHBlbmQnLCAnaW5uZXInLCBzbG90KVxuICAgIH0sXG4gICAgZ2VuSW5wdXRTbG90ICgpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dFNsb3QuY2FsbCh0aGlzKVxuXG4gICAgICBjb25zdCBwcmVwZW5kID0gdGhpcy5nZW5QcmVwZW5kSW5uZXJTbG90KClcblxuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgaW5wdXQuY2hpbGRyZW4gPSBpbnB1dC5jaGlsZHJlbiB8fCBbXVxuICAgICAgICBpbnB1dC5jaGlsZHJlbi51bnNoaWZ0KHByZXBlbmQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH0sXG4gICAgZ2VuQ2xlYXJJY29uICgpIHtcbiAgICAgIGlmICghdGhpcy5jbGVhcmFibGUpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmlzRGlydHkgPyB1bmRlZmluZWQgOiB7IGF0dHJzOiB7IGRpc2FibGVkOiB0cnVlIH0gfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdhcHBlbmQnLCAnaW5uZXInLCBbXG4gICAgICAgIHRoaXMuZ2VuSWNvbignY2xlYXInLCB0aGlzLmNsZWFyYWJsZUNhbGxiYWNrLCBkYXRhKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5Db3VudGVyICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNDb3VudGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBtYXggPSB0aGlzLmNvdW50ZXIgPT09IHRydWUgPyB0aGlzLmF0dHJzJC5tYXhsZW5ndGggOiB0aGlzLmNvdW50ZXJcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkNvdW50ZXIsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgbWF4LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmNvbXB1dGVkQ291bnRlclZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlbkNvbnRyb2wgKCkge1xuICAgICAgcmV0dXJuIFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuQ29udHJvbC5jYWxsKHRoaXMpXG4gICAgfSxcbiAgICBnZW5EZWZhdWx0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlbkZpZWxkc2V0KCksXG4gICAgICAgIHRoaXMuZ2VuVGV4dEZpZWxkU2xvdCgpLFxuICAgICAgICB0aGlzLmdlbkNsZWFySWNvbigpLFxuICAgICAgICB0aGlzLmdlbkljb25TbG90KCksXG4gICAgICAgIHRoaXMuZ2VuUHJvZ3Jlc3MoKSxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkZpZWxkc2V0ICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWhpZGRlbic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LCBbdGhpcy5nZW5MZWdlbmQoKV0pXG4gICAgfSxcbiAgICBnZW5MYWJlbCAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0xhYmVsKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLnZhbGlkYXRpb25TdGF0ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBmb2N1c2VkOiAhdGhpcy5pc1NpbmdsZSAmJiAodGhpcy5pc0ZvY3VzZWQgfHwgISF0aGlzLnZhbGlkYXRpb25TdGF0ZSksXG4gICAgICAgICAgZm9yOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgbGVmdDogdGhpcy5sYWJlbFBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgcmlnaHQ6IHRoaXMubGFiZWxQb3NpdGlvbi5yaWdodCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sYWJlbFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGFiZWwsIGRhdGEsIHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICBnZW5MZWdlbmQgKCkge1xuICAgICAgY29uc3Qgd2lkdGggPSAhdGhpcy5zaW5nbGVMaW5lICYmICh0aGlzLmxhYmVsVmFsdWUgfHwgdGhpcy5pc0RpcnR5KSA/IHRoaXMubGFiZWxXaWR0aCA6IDBcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLiRjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6ICcmIzgyMDM7JyB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogIXRoaXMuaXNTaW5nbGUgPyBjb252ZXJ0VG9Vbml0KHdpZHRoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtzcGFuXSlcbiAgICB9LFxuICAgIGdlbklucHV0ICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGlzdGVuZXJzJClcbiAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbJ2NoYW5nZSddIC8vIENoYW5nZSBzaG91bGQgbm90IGJlIGJvdW5kIGV4dGVybmFsbHlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICBzdHlsZToge30sXG4gICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgdmFsdWU6ICh0aGlzLnR5cGUgPT09ICdudW1iZXInICYmIE9iamVjdC5pcyh0aGlzLmxhenlWYWx1ZSwgLTApKSA/ICctMCcgOiB0aGlzLmxhenlWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAuLi50aGlzLmF0dHJzJCxcbiAgICAgICAgICBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgaWQ6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgICByZWFkb25seTogdGhpcy5pc1JlYWRvbmx5LFxuICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IE9iamVjdC5hc3NpZ24obGlzdGVuZXJzLCB7XG4gICAgICAgICAgYmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgaW5wdXQ6IHRoaXMub25JbnB1dCxcbiAgICAgICAgICBmb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgIGtleWRvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICB9KSxcbiAgICAgICAgcmVmOiAnaW5wdXQnLFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlbk1lc3NhZ2VzICgpIHtcbiAgICAgIGlmICghdGhpcy5zaG93RGV0YWlscykgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgbWVzc2FnZXNOb2RlID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5NZXNzYWdlcy5jYWxsKHRoaXMpXG4gICAgICBjb25zdCBjb3VudGVyTm9kZSA9IHRoaXMuZ2VuQ291bnRlcigpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10ZXh0LWZpZWxkX19kZXRhaWxzJyxcbiAgICAgIH0sIFtcbiAgICAgICAgbWVzc2FnZXNOb2RlLFxuICAgICAgICBjb3VudGVyTm9kZSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5UZXh0RmllbGRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10ZXh0LWZpZWxkX19zbG90JyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5MYWJlbCgpLFxuICAgICAgICB0aGlzLnByZWZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3ByZWZpeCcpIDogbnVsbCxcbiAgICAgICAgdGhpcy5nZW5JbnB1dCgpLFxuICAgICAgICB0aGlzLnN1ZmZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3N1ZmZpeCcpIDogbnVsbCxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5BZmZpeCAodHlwZTogJ3ByZWZpeCcgfCAnc3VmZml4Jykge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGB2LXRleHQtZmllbGRfXyR7dHlwZX1gLFxuICAgICAgICByZWY6IHR5cGUsXG4gICAgICB9LCB0aGlzW3R5cGVdKVxuICAgIH0sXG4gICAgb25CbHVyIChlPzogRXZlbnQpIHtcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2VcbiAgICAgIGUgJiYgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kZW1pdCgnYmx1cicsIGUpKVxuICAgIH0sXG4gICAgb25DbGljayAoKSB7XG4gICAgICBpZiAodGhpcy5pc0ZvY3VzZWQgfHwgdGhpcy5pc0Rpc2FibGVkIHx8ICF0aGlzLiRyZWZzLmlucHV0KSByZXR1cm5cblxuICAgICAgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgfSxcbiAgICBvbkZvY3VzIChlPzogRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy4kcmVmcy5pbnB1dCkgcmV0dXJuXG5cbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0aGlzLiRyZWZzLmlucHV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWVcbiAgICAgICAgZSAmJiB0aGlzLiRlbWl0KCdmb2N1cycsIGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbklucHV0IChlOiBFdmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICB0aGlzLmJhZElucHV0ID0gdGFyZ2V0LnZhbGlkaXR5ICYmIHRhcmdldC52YWxpZGl0eS5iYWRJbnB1dFxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lbnRlcikgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5pbnRlcm5hbFZhbHVlKVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcbiAgICB9LFxuICAgIG9uTW91c2VEb3duIChlOiBFdmVudCkge1xuICAgICAgLy8gUHJldmVudCBpbnB1dCBmcm9tIGJlaW5nIGJsdXJyZWRcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcy4kcmVmcy5pbnB1dCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICBWSW5wdXQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VEb3duLmNhbGwodGhpcywgZSlcbiAgICB9LFxuICAgIG9uTW91c2VVcCAoZTogRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmhhc01vdXNlRG93bikgdGhpcy5mb2N1cygpXG5cbiAgICAgIFZJbnB1dC5vcHRpb25zLm1ldGhvZHMub25Nb3VzZVVwLmNhbGwodGhpcywgZSlcbiAgICB9LFxuICAgIHNldExhYmVsV2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkKSByZXR1cm5cblxuICAgICAgdGhpcy5sYWJlbFdpZHRoID0gdGhpcy4kcmVmcy5sYWJlbFxuICAgICAgICA/IE1hdGgubWluKHRoaXMuJHJlZnMubGFiZWwuc2Nyb2xsV2lkdGggKiAwLjc1ICsgNiwgKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50KS5vZmZzZXRXaWR0aCAtIDI0KVxuICAgICAgICA6IDBcbiAgICB9LFxuICAgIHNldFByZWZpeFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy4kcmVmcy5wcmVmaXgpIHJldHVyblxuXG4gICAgICB0aGlzLnByZWZpeFdpZHRoID0gdGhpcy4kcmVmcy5wcmVmaXgub2Zmc2V0V2lkdGhcbiAgICB9LFxuICAgIHNldFByZXBlbmRXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQgfHwgIXRoaXMuJHJlZnNbJ3ByZXBlbmQtaW5uZXInXSkgcmV0dXJuXG5cbiAgICAgIHRoaXMucHJlcGVuZFdpZHRoID0gdGhpcy4kcmVmc1sncHJlcGVuZC1pbm5lciddLm9mZnNldFdpZHRoXG4gICAgfSxcbiAgICB0cnlBdXRvZm9jdXMgKCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5hdXRvZm9jdXMgfHxcbiAgICAgICAgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAhdGhpcy4kcmVmcy5pbnB1dCB8fFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLiRyZWZzLmlucHV0XG4gICAgICApIHJldHVybiBmYWxzZVxuXG4gICAgICB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIHVwZGF0ZVZhbHVlICh2YWw6IGJvb2xlYW4pIHtcbiAgICAgIC8vIFNldHMgdmFsaWRhdGlvblN0YXRlIGZyb20gdmFsaWRhdGFibGVcbiAgICAgIHRoaXMuaGFzQ29sb3IgPSB2YWxcblxuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHRoaXMubGF6eVZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdGlhbFZhbHVlICE9PSB0aGlzLmxhenlWYWx1ZSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmxhenlWYWx1ZSlcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSlcbiIsImltcG9ydCBWUHJvZ3Jlc3NMaW5lYXIgZnJvbSAnLi9WUHJvZ3Jlc3NMaW5lYXInXG5cbmV4cG9ydCB7IFZQcm9ncmVzc0xpbmVhciB9XG5leHBvcnQgZGVmYXVsdCBWUHJvZ3Jlc3NMaW5lYXJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQXBwQmFyLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWVG9vbGJhciBmcm9tICcuLi9WVG9vbGJhci9WVG9vbGJhcidcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Njcm9sbCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgQXBwbGljYXRpb25hYmxlIGZyb20gJy4uLy4uL21peGlucy9hcHBsaWNhdGlvbmFibGUnXG5pbXBvcnQgU2Nyb2xsYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc2Nyb2xsYWJsZSdcbmltcG9ydCBTU1JCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc3NyLWJvb3RhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgVlRvb2xiYXIsXG4gIFNjcm9sbGFibGUsXG4gIFNTUkJvb3RhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBBcHBsaWNhdGlvbmFibGUoJ3RvcCcsIFtcbiAgICAnY2xpcHBlZExlZnQnLFxuICAgICdjbGlwcGVkUmlnaHQnLFxuICAgICdjb21wdXRlZEhlaWdodCcsXG4gICAgJ2ludmVydGVkU2Nyb2xsJyxcbiAgICAnaXNFeHRlbmRlZCcsXG4gICAgJ2lzUHJvbWluZW50JyxcbiAgICAndmFsdWUnLFxuICBdKVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1hcHAtYmFyJyxcblxuICBkaXJlY3RpdmVzOiB7IFNjcm9sbCB9LFxuXG4gIHByb3BzOiB7XG4gICAgY2xpcHBlZExlZnQ6IEJvb2xlYW4sXG4gICAgY2xpcHBlZFJpZ2h0OiBCb29sZWFuLFxuICAgIGNvbGxhcHNlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgZWxldmF0ZU9uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGZhZGVJbWdPblNjcm9sbDogQm9vbGVhbixcbiAgICBoaWRlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgaW52ZXJ0ZWRTY3JvbGw6IEJvb2xlYW4sXG4gICAgc2Nyb2xsT2ZmU2NyZWVuOiBCb29sZWFuLFxuICAgIHNocmlua09uU2Nyb2xsOiBCb29sZWFuLFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy52YWx1ZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBhcHBsaWNhdGlvblByb3BlcnR5ICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICF0aGlzLmJvdHRvbSA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICB9LFxuICAgIGNhblNjcm9sbCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBTY3JvbGxhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2FuU2Nyb2xsLmNhbGwodGhpcykgJiZcbiAgICAgICAgKFxuICAgICAgICAgIHRoaXMuaW52ZXJ0ZWRTY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmVsZXZhdGVPblNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuaGlkZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5pc0Jvb3RlZCB8fFxuICAgICAgICAgIC8vIElmIGZhbHNleSwgdXNlciBoYXMgcHJvdmlkZWQgYW5cbiAgICAgICAgICAvLyBleHBsaWNpdCB2YWx1ZSB3aGljaCBzaG91bGRcbiAgICAgICAgICAvLyBvdmVyd3JpdGUgYW55dGhpbmcgd2UgZG9cbiAgICAgICAgICAhdGhpcy52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlJzogdGhpcy5jb2xsYXBzZSB8fCB0aGlzLmNvbGxhcHNlT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXInOiB0cnVlLFxuICAgICAgICAndi1hcHAtYmFyLS1jbGlwcGVkJzogdGhpcy5jbGlwcGVkTGVmdCB8fCB0aGlzLmNsaXBwZWRSaWdodCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZmFkZS1pbWctb24tc2Nyb2xsJzogdGhpcy5mYWRlSW1nT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXItLWVsZXZhdGUtb24tc2Nyb2xsJzogdGhpcy5lbGV2YXRlT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXItLWZpeGVkJzogIXRoaXMuYWJzb2x1dGUgJiYgKHRoaXMuYXBwIHx8IHRoaXMuZml4ZWQpLFxuICAgICAgICAndi1hcHAtYmFyLS1oaWRlLXNoYWRvdyc6IHRoaXMuaGlkZVNoYWRvdyxcbiAgICAgICAgJ3YtYXBwLWJhci0taXMtc2Nyb2xsZWQnOiB0aGlzLmN1cnJlbnRTY3JvbGwgPiAwLFxuICAgICAgICAndi1hcHAtYmFyLS1zaHJpbmstb24tc2Nyb2xsJzogdGhpcy5zaHJpbmtPblNjcm9sbCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQ29udGVudEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5zaHJpbmtPblNjcm9sbCkgcmV0dXJuIFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb250ZW50SGVpZ2h0LmNhbGwodGhpcylcblxuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wdXRlZE9yaWdpbmFsSGVpZ2h0XG5cbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMuZGVuc2UgPyA0OCA6IDU2XG4gICAgICBjb25zdCBtYXggPSBoZWlnaHRcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXggLSBtaW5cbiAgICAgIGNvbnN0IGl0ZXJhdGlvbiA9IGRpZmZlcmVuY2UgLyB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmN1cnJlbnRTY3JvbGwgKiBpdGVyYXRpb25cblxuICAgICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgbWF4IC0gb2Zmc2V0KVxuICAgIH0sXG4gICAgY29tcHV0ZWRGb250U2l6ZSAoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICghdGhpcy5pc1Byb21pbmVudCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICBjb25zdCBtYXggPSB0aGlzLmRlbnNlID8gOTYgOiAxMjhcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXggLSB0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodFxuICAgICAgY29uc3QgaW5jcmVtZW50ID0gMC4wMDM0N1xuXG4gICAgICAvLyAxLjVyZW0gdG8gYSBtaW5pbXVtIG9mIDEuMjVyZW1cbiAgICAgIHJldHVybiBOdW1iZXIoKDEuNTAgLSBkaWZmZXJlbmNlICogaW5jcmVtZW50KS50b0ZpeGVkKDIpKVxuICAgIH0sXG4gICAgY29tcHV0ZWRMZWZ0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCB8fCB0aGlzLmNsaXBwZWRMZWZ0KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvbi5sZWZ0XG4gICAgfSxcbiAgICBjb21wdXRlZE1hcmdpblRvcCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHApIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLmJhclxuICAgIH0sXG4gICAgY29tcHV0ZWRPcGFjaXR5ICgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF0aGlzLmZhZGVJbWdPblNjcm9sbCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICBjb25zdCBvcGFjaXR5ID0gTWF0aC5tYXgoXG4gICAgICAgICh0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkIC0gdGhpcy5jdXJyZW50U2Nyb2xsKSAvIHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQsXG4gICAgICAgIDBcbiAgICAgIClcblxuICAgICAgcmV0dXJuIE51bWJlcihwYXJzZUZsb2F0KG9wYWNpdHkpLnRvRml4ZWQoMikpXG4gICAgfSxcbiAgICBjb21wdXRlZE9yaWdpbmFsSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgbGV0IGhlaWdodCA9IFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb250ZW50SGVpZ2h0LmNhbGwodGhpcylcbiAgICAgIGlmICh0aGlzLmlzRXh0ZW5kZWQpIGhlaWdodCArPSBwYXJzZUludCh0aGlzLmV4dGVuc2lvbkhlaWdodClcbiAgICAgIHJldHVybiBoZWlnaHRcbiAgICB9LFxuICAgIGNvbXB1dGVkUmlnaHQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwIHx8IHRoaXMuY2xpcHBlZFJpZ2h0KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvbi5yaWdodFxuICAgIH0sXG4gICAgY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQgKCk6IG51bWJlciB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxUaHJlc2hvbGQpIHJldHVybiBOdW1iZXIodGhpcy5zY3JvbGxUaHJlc2hvbGQpXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkT3JpZ2luYWxIZWlnaHQgLSAodGhpcy5kZW5zZSA/IDQ4IDogNTYpXG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zZm9ybSAoKTogbnVtYmVyIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2Nyb2xsIHx8XG4gICAgICAgICh0aGlzLmVsZXZhdGVPblNjcm9sbCAmJiB0aGlzLmN1cnJlbnRTY3JvbGwgPT09IDAgJiYgdGhpcy5pc0FjdGl2ZSlcbiAgICAgICkgcmV0dXJuIDBcblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHJldHVybiAwXG5cbiAgICAgIGNvbnN0IHNjcm9sbE9mZlNjcmVlbiA9IHRoaXMuc2Nyb2xsT2ZmU2NyZWVuXG4gICAgICAgID8gdGhpcy5jb21wdXRlZEhlaWdodFxuICAgICAgICA6IHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG5cbiAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA/IHNjcm9sbE9mZlNjcmVlbiA6IC1zY3JvbGxPZmZTY3JlZW5cbiAgICB9LFxuICAgIGhpZGVTaGFkb3cgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsICYmIHRoaXMuaXNFeHRlbmRlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGV2YXRlT25TY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcm9sbCA9PT0gMCB8fFxuICAgICAgICAgIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm0gPCAwXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLmlzRXh0ZW5kZWQgfHxcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZTY3JlZW5cbiAgICAgICkgJiYgdGhpcy5jb21wdXRlZFRyYW5zZm9ybSAhPT0gMFxuICAgIH0sXG4gICAgaXNDb2xsYXBzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKCF0aGlzLmNvbGxhcHNlT25TY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuaXNDb2xsYXBzZWQuY2FsbCh0aGlzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsID4gMFxuICAgIH0sXG4gICAgaXNQcm9taW5lbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5pc1Byb21pbmVudC5jYWxsKHRoaXMpIHx8XG4gICAgICAgIHRoaXMuc2hyaW5rT25TY3JvbGxcbiAgICAgIClcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuc3R5bGVzLmNhbGwodGhpcyksXG4gICAgICAgIGZvbnRTaXplOiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRGb250U2l6ZSwgJ3JlbScpLFxuICAgICAgICBtYXJnaW5Ub3A6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZE1hcmdpblRvcCksXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm0pfSlgLFxuICAgICAgICBsZWZ0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRMZWZ0KSxcbiAgICAgICAgcmlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZFJpZ2h0KSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgY2FuU2Nyb2xsOiAnb25TY3JvbGwnLFxuICAgIGNvbXB1dGVkVHJhbnNmb3JtICgpIHtcbiAgICAgIC8vIE5vcm1hbGx5IHdlIGRvIG5vdCB3YW50IHRoZSB2LWFwcC1iYXJcbiAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgYXBwbGljYXRpb24gdG9wIHZhbHVlXG4gICAgICAvLyB0byBhdm9pZCBzY3JlZW4ganVtcC4gSG93ZXZlciwgaW5cbiAgICAgIC8vIHRoaXMgc2l0dWF0aW9uLCB3ZSBtdXN0IHNvIHRoYXRcbiAgICAgIC8vIHRoZSBjbGlwcGVkIGRyYXdlciBjYW4gdXBkYXRlXG4gICAgICAvLyBpdHMgdG9wIHZhbHVlIHdoZW4gc2Nyb2xsZWRcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2Nyb2xsIHx8XG4gICAgICAgICghdGhpcy5jbGlwcGVkTGVmdCAmJiAhdGhpcy5jbGlwcGVkUmlnaHQpXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmNhbGxVcGRhdGUoKVxuICAgIH0sXG4gICAgaW52ZXJ0ZWRTY3JvbGwgKHZhbDogYm9vbGVhbikge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9ICF2YWwgfHwgdGhpcy5jdXJyZW50U2Nyb2xsICE9PSAwXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICBpZiAodGhpcy5pbnZlcnRlZFNjcm9sbCkgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJhY2tncm91bmQgKCkge1xuICAgICAgY29uc3QgcmVuZGVyID0gVlRvb2xiYXIub3B0aW9ucy5tZXRob2RzLmdlbkJhY2tncm91bmQuY2FsbCh0aGlzKVxuXG4gICAgICByZW5kZXIuZGF0YSA9IHRoaXMuX2IocmVuZGVyLmRhdGEgfHwge30sIHJlbmRlci50YWchLCB7XG4gICAgICAgIHN0eWxlOiB7IG9wYWNpdHk6IHRoaXMuY29tcHV0ZWRPcGFjaXR5IH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcmVuZGVyXG4gICAgfSxcbiAgICB1cGRhdGVBcHBsaWNhdGlvbiAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLmludmVydGVkU2Nyb2xsXG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMuY29tcHV0ZWRIZWlnaHQgKyB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtXG4gICAgfSxcbiAgICB0aHJlc2hvbGRNZXQgKCkge1xuICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMuY3VycmVudFNjcm9sbCA+IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhpZGVPblNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5pc1Njcm9sbGluZ1VwIHx8XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2Nyb2xsIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50VGhyZXNob2xkIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc2F2ZWRTY3JvbGwgPSB0aGlzLmN1cnJlbnRTY3JvbGxcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCByZW5kZXIgPSBWVG9vbGJhci5vcHRpb25zLnJlbmRlci5jYWxsKHRoaXMsIGgpXG5cbiAgICByZW5kZXIuZGF0YSA9IHJlbmRlci5kYXRhIHx8IHt9XG5cbiAgICBpZiAodGhpcy5jYW5TY3JvbGwpIHtcbiAgICAgIHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMgPSByZW5kZXIuZGF0YS5kaXJlY3RpdmVzIHx8IFtdXG4gICAgICByZW5kZXIuZGF0YS5kaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICBhcmc6IHRoaXMuc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBuYW1lOiAnc2Nyb2xsJyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25TY3JvbGwsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WTWFpbi5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBTU1JCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc3NyLWJvb3RhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBTU1JCb290YWJsZS5leHRlbmQoe1xuICBuYW1lOiAndi1tYWluJyxcblxuICBwcm9wczoge1xuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ21haW4nLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGJhciwgdG9wLCByaWdodCwgZm9vdGVyLCBpbnNldEZvb3RlciwgYm90dG9tLCBsZWZ0LFxuICAgICAgfSA9IHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb25cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZ1RvcDogYCR7dG9wICsgYmFyfXB4YCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBgJHtyaWdodH1weGAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGAke2Zvb3RlciArIGluc2V0Rm9vdGVyICsgYm90dG9tfXB4YCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IGAke2xlZnR9cHhgLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbWFpbicsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICByZWY6ICdtYWluJyxcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgW1xuICAgICAgaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6ICd2LW1haW5fX3dyYXAnIH0sXG4gICAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHRcbiAgICAgICksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWTWFpbiBmcm9tICcuLi9WTWFpbi9WTWFpbidcbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZNYWluLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1haW4nLFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGRlcHJlY2F0ZSgndi1jb250ZW50JywgJ3YtbWFpbicsIHRoaXMpXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIC8vIEFkZCB0aGUgbGVnYWN5IGNsYXNzIG5hbWVzXG4gICAgY29uc3Qgbm9kZSA9IFZNYWluLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIG5vZGUuZGF0YSEuc3RhdGljQ2xhc3MgKz0gJyB2LWNvbnRlbnQnXG4gICAgbm9kZS5jaGlsZHJlbiFbMF0hLmRhdGEhLnN0YXRpY0NsYXNzICs9ICcgdi1jb250ZW50X193cmFwJ1xuXG4gICAgcmV0dXJuIGgobm9kZS50YWcsIG5vZGUuZGF0YSwgbm9kZS5jaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vVkdyaWQuc2FzcydcblxuaW1wb3J0IFZ1ZSwgeyBQcm9wT3B0aW9ucyB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5pbXBvcnQgeyB1cHBlckZpcnN0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBubyB4c1xuY29uc3QgYnJlYWtwb2ludHMgPSBbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ11cblxuY29uc3QgQUxJR05NRU5UID0gWydzdGFydCcsICdlbmQnLCAnY2VudGVyJ11cblxuZnVuY3Rpb24gbWFrZVByb3BzIChwcmVmaXg6IHN0cmluZywgZGVmOiAoKSA9PiBQcm9wT3B0aW9ucykge1xuICByZXR1cm4gYnJlYWtwb2ludHMucmVkdWNlKChwcm9wcywgdmFsKSA9PiB7XG4gICAgcHJvcHNbcHJlZml4ICsgdXBwZXJGaXJzdCh2YWwpXSA9IGRlZigpXG4gICAgcmV0dXJuIHByb3BzXG4gIH0sIHt9IGFzIERpY3Rpb25hcnk8UHJvcE9wdGlvbnM+KVxufVxuXG5jb25zdCBhbGlnblZhbGlkYXRvciA9IChzdHI6IGFueSkgPT4gWy4uLkFMSUdOTUVOVCwgJ2Jhc2VsaW5lJywgJ3N0cmV0Y2gnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBhbGlnblByb3BzID0gbWFrZVByb3BzKCdhbGlnbicsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBhbGlnblZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBqdXN0aWZ5VmFsaWRhdG9yID0gKHN0cjogYW55KSA9PiBbLi4uQUxJR05NRU5ULCAnc3BhY2UtYmV0d2VlbicsICdzcGFjZS1hcm91bmQnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBqdXN0aWZ5UHJvcHMgPSBtYWtlUHJvcHMoJ2p1c3RpZnknLCAoKSA9PiAoe1xuICB0eXBlOiBTdHJpbmcsXG4gIGRlZmF1bHQ6IG51bGwsXG4gIHZhbGlkYXRvcjoganVzdGlmeVZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBhbGlnbkNvbnRlbnRWYWxpZGF0b3IgPSAoc3RyOiBhbnkpID0+IFsuLi5BTElHTk1FTlQsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCcsICdzdHJldGNoJ10uaW5jbHVkZXMoc3RyKVxuY29uc3QgYWxpZ25Db250ZW50UHJvcHMgPSBtYWtlUHJvcHMoJ2FsaWduQ29udGVudCcsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBhbGlnbkNvbnRlbnRWYWxpZGF0b3IsXG59KSlcblxuY29uc3QgcHJvcE1hcCA9IHtcbiAgYWxpZ246IE9iamVjdC5rZXlzKGFsaWduUHJvcHMpLFxuICBqdXN0aWZ5OiBPYmplY3Qua2V5cyhqdXN0aWZ5UHJvcHMpLFxuICBhbGlnbkNvbnRlbnQ6IE9iamVjdC5rZXlzKGFsaWduQ29udGVudFByb3BzKSxcbn1cblxuY29uc3QgY2xhc3NNYXAgPSB7XG4gIGFsaWduOiAnYWxpZ24nLFxuICBqdXN0aWZ5OiAnanVzdGlmeScsXG4gIGFsaWduQ29udGVudDogJ2FsaWduLWNvbnRlbnQnLFxufVxuXG5mdW5jdGlvbiBicmVha3BvaW50Q2xhc3MgKHR5cGU6IGtleW9mIHR5cGVvZiBwcm9wTWFwLCBwcm9wOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gIGxldCBjbGFzc05hbWUgPSBjbGFzc01hcFt0eXBlXVxuICBpZiAodmFsID09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgaWYgKHByb3ApIHtcbiAgICAvLyBhbGlnblNtIC0+IFNtXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IHByb3AucmVwbGFjZSh0eXBlLCAnJylcbiAgICBjbGFzc05hbWUgKz0gYC0ke2JyZWFrcG9pbnR9YFxuICB9XG4gIC8vIC5hbGlnbi1pdGVtcy1zbS1jZW50ZXJcbiAgY2xhc3NOYW1lICs9IGAtJHt2YWx9YFxuICByZXR1cm4gY2xhc3NOYW1lLnRvTG93ZXJDYXNlKClcbn1cblxuY29uc3QgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgYW55W10+KClcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXJvdycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIG5vR3V0dGVyczogQm9vbGVhbixcbiAgICBhbGlnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogYWxpZ25WYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5hbGlnblByb3BzLFxuICAgIGp1c3RpZnk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGp1c3RpZnlWYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5qdXN0aWZ5UHJvcHMsXG4gICAgYWxpZ25Db250ZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBhbGlnbkNvbnRlbnRWYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5hbGlnbkNvbnRlbnRQcm9wcyxcbiAgfSxcbiAgcmVuZGVyIChoLCB7IHByb3BzLCBkYXRhLCBjaGlsZHJlbiB9KSB7XG4gICAgLy8gU3VwZXItZmFzdCBtZW1vaXphdGlvbiBiYXNlZCBvbiBwcm9wcywgNXggZmFzdGVyIHRoYW4gSlNPTi5zdHJpbmdpZnlcbiAgICBsZXQgY2FjaGVLZXkgPSAnJ1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgICAgY2FjaGVLZXkgKz0gU3RyaW5nKChwcm9wcyBhcyBhbnkpW3Byb3BdKVxuICAgIH1cbiAgICBsZXQgY2xhc3NMaXN0ID0gY2FjaGUuZ2V0KGNhY2hlS2V5KVxuXG4gICAgaWYgKCFjbGFzc0xpc3QpIHtcbiAgICAgIGNsYXNzTGlzdCA9IFtdXG4gICAgICAvLyBMb29wIHRocm91Z2ggYGFsaWduYCwgYGp1c3RpZnlgLCBgYWxpZ25Db250ZW50YCBicmVha3BvaW50IHByb3BzXG4gICAgICBsZXQgdHlwZToga2V5b2YgdHlwZW9mIHByb3BNYXBcbiAgICAgIGZvciAodHlwZSBpbiBwcm9wTWFwKSB7XG4gICAgICAgIHByb3BNYXBbdHlwZV0uZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gKHByb3BzIGFzIGFueSlbcHJvcF1cbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBicmVha3BvaW50Q2xhc3ModHlwZSwgcHJvcCwgdmFsdWUpXG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkgY2xhc3NMaXN0IS5wdXNoKGNsYXNzTmFtZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY2xhc3NMaXN0LnB1c2goe1xuICAgICAgICAnbm8tZ3V0dGVycyc6IHByb3BzLm5vR3V0dGVycyxcbiAgICAgICAgJ3Jvdy0tZGVuc2UnOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgW2BhbGlnbi0ke3Byb3BzLmFsaWdufWBdOiBwcm9wcy5hbGlnbixcbiAgICAgICAgW2BqdXN0aWZ5LSR7cHJvcHMuanVzdGlmeX1gXTogcHJvcHMuanVzdGlmeSxcbiAgICAgICAgW2BhbGlnbi1jb250ZW50LSR7cHJvcHMuYWxpZ25Db250ZW50fWBdOiBwcm9wcy5hbGlnbkNvbnRlbnQsXG4gICAgICB9KVxuXG4gICAgICBjYWNoZS5zZXQoY2FjaGVLZXksIGNsYXNzTGlzdClcbiAgICB9XG5cbiAgICByZXR1cm4gaChcbiAgICAgIHByb3BzLnRhZyxcbiAgICAgIG1lcmdlRGF0YShkYXRhLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAncm93JyxcbiAgICAgICAgY2xhc3M6IGNsYXNzTGlzdCxcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuaW1wb3J0IFZCdG4gZnJvbSAnLi4vVkJ0bi9WQnRuJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtYXBwLWJhci1uYXYtaWNvbicsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICByZW5kZXIgKGgsIHsgc2xvdHMsIGxpc3RlbmVycywgcHJvcHMsIGRhdGEgfSkge1xuICAgIGNvbnN0IGQgPSBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAoYHYtYXBwLWJhcl9fbmF2LWljb24gJHtkYXRhLnN0YXRpY0NsYXNzIHx8ICcnfWApLnRyaW0oKSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBpY29uOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG9uOiBsaXN0ZW5lcnMsXG4gICAgfSlcblxuICAgIGNvbnN0IGRlZmF1bHRTbG90ID0gc2xvdHMoKS5kZWZhdWx0XG5cbiAgICByZXR1cm4gaChWQnRuLCBkLCBkZWZhdWx0U2xvdCB8fCBbaChWSWNvbiwgJyRtZW51JyldKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUZXh0YXJlYS5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlRleHRGaWVsZCBmcm9tICcuLi9WVGV4dEZpZWxkL1ZUZXh0RmllbGQnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIFZ1ZSB7XG4gICRyZWZzOiB7XG4gICAgaW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgfVxufVxuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zPG9wdGlvbnMgJlxuICBJbnN0YW5jZVR5cGU8dHlwZW9mIFZUZXh0RmllbGQ+XG4+KFxuICBWVGV4dEZpZWxkXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRleHRhcmVhJyxcblxuICBwcm9wczoge1xuICAgIGF1dG9Hcm93OiBCb29sZWFuLFxuICAgIG5vUmVzaXplOiBCb29sZWFuLFxuICAgIHJvd0hlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDI0LFxuICAgICAgdmFsaWRhdG9yOiAodjogYW55KSA9PiAhaXNOYU4ocGFyc2VGbG9hdCh2KSksXG4gICAgfSxcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNSxcbiAgICAgIHZhbGlkYXRvcjogKHY6IGFueSkgPT4gIWlzTmFOKHBhcnNlSW50KHYsIDEwKSksXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi10ZXh0YXJlYSc6IHRydWUsXG4gICAgICAgICd2LXRleHRhcmVhLS1hdXRvLWdyb3cnOiB0aGlzLmF1dG9Hcm93LFxuICAgICAgICAndi10ZXh0YXJlYS0tbm8tcmVzaXplJzogdGhpcy5ub1Jlc2l6ZUhhbmRsZSxcbiAgICAgICAgLi4uVlRleHRGaWVsZC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG5vUmVzaXplSGFuZGxlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm5vUmVzaXplIHx8IHRoaXMuYXV0b0dyb3dcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbGF6eVZhbHVlICgpIHtcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodClcbiAgICB9LFxuICAgIHJvd0hlaWdodCAoKSB7XG4gICAgICB0aGlzLmF1dG9Hcm93ICYmIHRoaXMuJG5leHRUaWNrKHRoaXMuY2FsY3VsYXRlSW5wdXRIZWlnaHQpXG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodCgpXG4gICAgfSwgMClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FsY3VsYXRlSW5wdXRIZWlnaHQgKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLiRyZWZzLmlucHV0XG4gICAgICBpZiAoIWlucHV0KSByZXR1cm5cblxuICAgICAgaW5wdXQuc3R5bGUuaGVpZ2h0ID0gJzAnXG4gICAgICBjb25zdCBoZWlnaHQgPSBpbnB1dC5zY3JvbGxIZWlnaHRcbiAgICAgIGNvbnN0IG1pbkhlaWdodCA9IHBhcnNlSW50KHRoaXMucm93cywgMTApICogcGFyc2VGbG9hdCh0aGlzLnJvd0hlaWdodClcbiAgICAgIC8vIFRoaXMgaGFzIHRvIGJlIGRvbmUgQVNBUCwgd2FpdGluZyBmb3IgVnVlXG4gICAgICAvLyB0byB1cGRhdGUgdGhlIERPTSBjYXVzZXMgdWdseSBsYXlvdXQganVtcGluZ1xuICAgICAgaW5wdXQuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBoZWlnaHQpICsgJ3B4J1xuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dC5jYWxsKHRoaXMpXG5cbiAgICAgIGlucHV0LnRhZyA9ICd0ZXh0YXJlYSdcbiAgICAgIGRlbGV0ZSBpbnB1dC5kYXRhIS5hdHRycyEudHlwZVxuICAgICAgaW5wdXQuZGF0YSEuYXR0cnMhLnJvd3MgPSB0aGlzLnJvd3NcblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBvbklucHV0IChlOiBFdmVudCkge1xuICAgICAgVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMub25JbnB1dC5jYWxsKHRoaXMsIGUpXG4gICAgICB0aGlzLmF1dG9Hcm93ICYmIHRoaXMuY2FsY3VsYXRlSW5wdXRIZWlnaHQoKVxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50cyBjbG9zaW5nIG9mIGFcbiAgICAgIC8vIGRpYWxvZyB3aGVuIHByZXNzaW5nXG4gICAgICAvLyBlbnRlclxuICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy1vbmVPZi0xLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1vbmVPZi0xLTEhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctb25lT2YtMS0yIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGltZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDMwZWY3ODgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy1vbmVPZi0xLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMy1vbmVPZi0xLTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SaWRlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMTgzZjdkMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdyaWRlcycpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1sYXlvdXQnLFtfYygnbG9hZGluZycse2F0dHJzOntcImFjdGl2ZVwiOl92bS5pc0xvYWRpbmcsXCJsb2FkZXJcIjpcImJhcnNcIixcImlzLWZ1bGwtcGFnZVwiOnRydWUsXCJjb2xvclwiOlwiYmx1ZVwifSxvbjp7XCJ1cGRhdGU6YWN0aXZlXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNMb2FkaW5nPSRldmVudH19fSksX3ZtLl92KFwiIFwiKSxfYygnbmF2LWRyYXdlcicse21vZGVsOnt2YWx1ZTooX3ZtLmRyYXdlciksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5kcmF3ZXI9JCR2fSxleHByZXNzaW9uOlwiZHJhd2VyXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkJyx7c3RhdGljQ2xhc3M6XCJjYXJkaHl0IG1iLTEwXCIsYXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJ3aWR0aFwiOlwiMTAwJVwifX0sW19jKCd2LWFwcC1iYXInLHthdHRyczp7XCJjb2xvclwiOlwicmdiYSgxMDAsMTE1LDIwMSlcIixcImFwcFwiOlwiXCIsXCJkYXJrXCI6XCJcIixcImZsYXRcIjpcIlwifX0sW19jKCd2LWFwcC1iYXItbmF2LWljb24nLHtvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5kcmF3ZXI9IV92bS5kcmF3ZXJ9fX0pLF92bS5fdihcIiBcIiksX2MoJ3YtYXZhdGFyJyx7c3RhdGljQ2xhc3M6XCJtci0yXCIsYXR0cnM6e1wicm91bmRlZFwiOlwiXCIsXCJzaXplXCI6XCIzNVwifX0sW19jKCd2LWltZycse2F0dHJzOntcInNyY1wiOlwiL2ljb24ucG5nXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtdG9vbGJhci10aXRsZScsW192bS5fdihcIiBKaWZmeSBGYXZvcnMgXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY29udGVudCcsW19jKCd2LWNhcmQnLFtfYygndi1jYXJkLXRpdGxlJyxbX3ZtLl92KFwiIEh1bWFuYXAgbmcgcmlkZXJcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWxpc3QnLHthdHRyczp7XCJuYXZcIjpcIlwiLFwib3V0bGluZWRcIjpcIlwiLFwidGlsZVwiOlwiXCIsXCJ3aWR0aFwiOlwiMTAwJVwiLFwiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbScse2F0dHJzOntcImRlbnNlXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0ubW9kZSA9IHttb2RlOidwaWNrdXAnLCB0ZXh0OidTZWxlY3QgUGlja3VwIExvY2F0aW9uJywgYnRuVGV4dDonU2V0IFBpY2t1cCd9LCBfdm0ubWFwU2hlZXQgPSB0cnVlfX19LFtfYygndi1saXN0LWl0ZW0taWNvbicsW19jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCJ9fSxbX3ZtLl92KFwiIG1kaS1tYXAtbWFya2VyIFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiU2VsZWN0IG9yaWdpblwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiUGlja3VwXCIpXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScse2F0dHJzOntcImlkXCI6XCJuZWVkRGVsaVwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5tb2RlID0ge21vZGU6J2Ryb3BvZmYnLCB0ZXh0OidTZWxlY3QgRGVzdGluYXRpb24nLCBidG5UZXh0OidTZXQgRGVzdGluYXRpb24nfSwgX3ZtLm1hcFNoZWV0ID0gdHJ1ZX19fSxbX2MoJ3YtbGlzdC1pdGVtLWljb24nLFtfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcImJsdWVcIn19LFtfdm0uX3YoXCIgbWRpLW5hdmlnYXRpb24gXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCJTZWxlY3QgZGVzdGluYXRpb25cIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIkRlc3RpbmF0aW9uXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi10ZXh0YXJlYScse3N0YXRpY0NsYXNzOlwibXQtMVwiLGF0dHJzOntcInJvd3NcIjpcIjNcIixcIm91dGxpbmVkXCI6XCJcIixcImRlbnNlXCI6XCJcIixcImhpbnRcIjpcImUuZyBCbHVlIGFuZyBzb3V0IG5hIGRhbWl0LlwiLFwicGxhY2Vob2xkZXJcIjpcIkRlc2NyaWJlIGluc3RydWN0aW9uLiBlLmcgbmFrYVdoaXRlIFQtU2hpcnRcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd0aW1lcicpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibWEtMVwiLGF0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcImNvbG9yXCI6XCJibHVlXCIsXCJ3aWR0aFwiOlwiNDUlXCIsXCJibG9ja1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7cmV0dXJuIF92bS5maW5kUmlkZXIoKX19fSxbX3ZtLl92KFwiQ2FsY3VsYXRlIEZhcmVcIildKV0sMSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1yb3cnLHthdHRyczp7XCJqdXN0aWZ5XCI6XCJjZW50ZXJcIn19LFtfYygndi1ib3R0b20tc2hlZXQnLHttb2RlbDp7dmFsdWU6KF92bS5tYXBTaGVldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5tYXBTaGVldD0kJHZ9LGV4cHJlc3Npb246XCJtYXBTaGVldFwifX0sW19jKCd2LWNhcmQnLFtfYygndi1jYXJkLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhfdm0ubW9kZS50ZXh0KSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1hcGNvbnRhaW5lclwifSxbX2MoJ0dNYXAnLHtyZWY6XCJnTWFwXCIsYXR0cnM6e1wiaWRcIjpcImdtYXBcIixcImNlbnRlclwiOl92bS5teWxvY2F0aW9uLFwib3B0aW9uc1wiOl92bS5vcHRpb25zLFwiem9vbVwiOjE1fSxvbjp7XCJjZW50ZXJfY2hhbmdlZFwiOl92bS5jZW50ZXJDaGFuZ2V9fSxbX2MoJ0dNYXBNYXJrZXInLHtyZWY6XCJnbWFwbWFya2VyXCIsYXR0cnM6e1wicG9zaXRpb25cIjpfdm0ubXlsb2NhdGlvbixcIm9wdGlvbnNcIjp7IGljb246IF92bS5zZWxlY3RlZG1hcmtlciB9fX0pXSwxKV0sMSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibWEtMVwiLGF0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcInRleHRcIjpcIlwiLFwiY29sb3JcIjpcImJsdWVcIixcImJsb2NrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLnNldExvY2F0aW9uKCl9fX0sW192bS5fdihfdm0uX3MoX3ZtLm1vZGUuYnRuVGV4dCkpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1ib3R0b20tc2hlZXQnLHthdHRyczp7XCJpbnNldFwiOlwiXCIsXCJwZXJzaXN0ZW50XCI6XCJcIixcInNjcm9sbGFibGVcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS5yaWRlVHlwZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5yaWRlVHlwZT0kJHZ9LGV4cHJlc3Npb246XCJyaWRlVHlwZVwifX0sW19jKCd2LWNhcmQnLFtfYygndi1jYXJkLXRpdGxlJyxbX2MoJ3YtaWNvbicse29uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLnJpZGVUeXBlID0gZmFsc2V9fX0sW192bS5fdihcIm1kaS1jbG9zZVwiKV0pLF92bS5fdihcIkNhbGN1bGF0ZWQgRmFyZSBNYXRyaXggXCIpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcse3N0YXRpY1N0eWxlOntcImhlaWdodFwiOlwiNDAwcHhcIn19LFtfYygndi1saXN0Jyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbScsW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiRGlzdGFuY2VcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihfdm0uX3MoX3ZtLnJpZGUuZGlzdGFuY2UpK1wiIGttXCIpXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbScsW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIEJhY2sgUmlkZVwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiU29sbyBBbmdrYXNcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0JyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNhcHRpb24gZ3JleS0tdGV4dFwifSxbX3ZtLl92KFwiRmFyZVwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dCBzdWJ0aXRsZS0yXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5yaWRlLmZhcmVzLmJhY2tfcmlkZSkpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCIsXCJzbWFsbFwiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7fX19LFtfdm0uX3YoXCJTZWxlY3RcIildKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCJUcmljeWNsZVwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiQm9vayBlbnRpcmUgdHJpY3ljbGUgXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbicsW19jKCd2LWxpc3QtaXRlbS1hY3Rpb24tdGV4dCcsW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjYXB0aW9uIGdyZXktLXRleHRcIn0sW192bS5fdihcIkZhcmVcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJyZWQtLXRleHQgc3VidGl0bGUtMlwifSxbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfdm0ucmlkZS5mYXJlcy50cmljeWNsZV9oaXJlKSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIixcInNtYWxsXCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTt9fX0sW192bS5fdihcIlNlbGVjdFwiKV0pXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIlRyaWN5Y2xlIC0gU2hhcmVkXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCJQaWNrdXAgaXMgYWxsb3dlZCBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0JyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNhcHRpb24gZ3JleS0tdGV4dFwifSxbX3ZtLl92KFwiRmFyZVwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dCBzdWJ0aXRsZS0yXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5yaWRlLmZhcmVzLnRyaWN5Y2xlX3NoYXJlZCkpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwicmVkXCIsXCJzbWFsbFwiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7fX19LFtfdm0uX3YoXCJTZWxlY3RcIildKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCJDYXIgb3IgU2VkYW5cIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIlJlbnQgZW50aXJlIGNhciBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0JyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNhcHRpb24gZ3JleS0tdGV4dFwifSxbX3ZtLl92KFwiRmFyZVwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInJlZC0tdGV4dCBzdWJ0aXRsZS0yXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5yaWRlLmZhcmVzLmNhcl9oaXJlKSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIixcInNtYWxsXCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTt9fX0sW192bS5fdihcIlNlbGVjdFwiKV0pXSwxKV0sMSldLDEpXSwxKV0sMSldLDEpXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJhc2UtdGltZXJcIn0sW192bS5fc3NyTm9kZShcIjxzdmcgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgY2xhc3M9XFxcImJhc2UtdGltZXJfX3N2Z1xcXCIgZGF0YS12LTAzMGVmNzg4PjxnIGNsYXNzPVxcXCJiYXNlLXRpbWVyX19jaXJjbGVcXFwiIGRhdGEtdi0wMzBlZjc4OD48Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI0NVxcXCIgY2xhc3M9XFxcImJhc2UtdGltZXJfX3BhdGgtZWxhcHNlZFxcXCIgZGF0YS12LTAzMGVmNzg4PjwvY2lyY2xlPiA8cGF0aFwiKyhfdm0uX3NzckF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsX3ZtLmNpcmNsZURhc2hhcnJheSkpK1wiIGQ9XFxcIlxcbiAgICAgICAgICBNIDUwLCA1MFxcbiAgICAgICAgICBtIC00NSwgMFxcbiAgICAgICAgICBhIDQ1LDQ1IDAgMSwwIDkwLDBcXG4gICAgICAgICAgYSA0NSw0NSAwIDEsMCAtOTAsMFxcbiAgICAgICAgXFxcIlwiKyhfdm0uX3NzckNsYXNzKFwiYmFzZS10aW1lcl9fcGF0aC1yZW1haW5pbmdcIixfdm0ucmVtYWluaW5nUGF0aENvbG9yKSkrXCIgZGF0YS12LTAzMGVmNzg4PjwvcGF0aD48L2c+PC9zdmc+IDxzcGFuIGNsYXNzPVxcXCJiYXNlLXRpbWVyX19sYWJlbFxcXCIgZGF0YS12LTAzMGVmNzg4PlwiK192bS5fc3NyRXNjYXBlKF92bS5fcyhfdm0uZm9ybWF0dGVkVGltZUxlZnQpKStcIjwvc3Bhbj5cIildKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYmFzZS10aW1lclwiPlxuICAgIDxzdmcgY2xhc3M9XCJiYXNlLXRpbWVyX19zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICA8ZyBjbGFzcz1cImJhc2UtdGltZXJfX2NpcmNsZVwiPlxuICAgICAgICA8Y2lyY2xlIGNsYXNzPVwiYmFzZS10aW1lcl9fcGF0aC1lbGFwc2VkXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNDVcIj48L2NpcmNsZT5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICA6c3Ryb2tlLWRhc2hhcnJheT1cImNpcmNsZURhc2hhcnJheVwiXG4gICAgICAgICAgY2xhc3M9XCJiYXNlLXRpbWVyX19wYXRoLXJlbWFpbmluZ1wiXG4gICAgICAgICAgOmNsYXNzPVwicmVtYWluaW5nUGF0aENvbG9yXCJcbiAgICAgICAgICBkPVwiXG4gICAgICAgICAgICBNIDUwLCA1MFxuICAgICAgICAgICAgbSAtNDUsIDBcbiAgICAgICAgICAgIGEgNDUsNDUgMCAxLDAgOTAsMFxuICAgICAgICAgICAgYSA0NSw0NSAwIDEsMCAtOTAsMFxuICAgICAgICAgIFwiXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICAgPHNwYW4gY2xhc3M9XCJiYXNlLXRpbWVyX19sYWJlbFwiPnt7IGZvcm1hdHRlZFRpbWVMZWZ0IH19PC9zcGFuPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5jb25zdCBGVUxMX0RBU0hfQVJSQVkgPSAyODM7XG5jb25zdCBXQVJOSU5HX1RIUkVTSE9MRCA9IDMwO1xuY29uc3QgQUxFUlRfVEhSRVNIT0xEID0gMTU7XG5cbmNvbnN0IENPTE9SX0NPREVTID0ge1xuICBpbmZvOiB7XG4gICAgY29sb3I6IFwiZ3JlZW5cIlxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgdGhyZXNob2xkOiBXQVJOSU5HX1RIUkVTSE9MRFxuICB9LFxuICBhbGVydDoge1xuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIHRocmVzaG9sZDogQUxFUlRfVEhSRVNIT0xEXG4gIH1cbn07XG5cbmNvbnN0IFRJTUVfTElNSVQgPSA1MDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lUGFzc2VkOiAwLFxuICAgICAgdGltZXJJbnRlcnZhbDogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjaXJjbGVEYXNoYXJyYXkoKSB7XG4gICAgICByZXR1cm4gYCR7KHRoaXMudGltZUZyYWN0aW9uICogRlVMTF9EQVNIX0FSUkFZKS50b0ZpeGVkKDApfSAyODNgO1xuICAgIH0sXG5cbiAgICBmb3JtYXR0ZWRUaW1lTGVmdCgpIHtcbiAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gdGhpcy50aW1lTGVmdDtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWVMZWZ0IC8gNjApO1xuICAgICAgbGV0IHNlY29uZHMgPSB0aW1lTGVmdCAlIDYwO1xuXG4gICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHNlY29uZHMgPSBgMCR7c2Vjb25kc31gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYCR7bWludXRlc306JHtzZWNvbmRzfXNgO1xuICAgIH0sXG5cbiAgICB0aW1lTGVmdCgpIHtcbiAgICAgIHJldHVybiBUSU1FX0xJTUlUIC0gdGhpcy50aW1lUGFzc2VkO1xuICAgIH0sXG5cbiAgICB0aW1lRnJhY3Rpb24oKSB7XG4gICAgICBjb25zdCByYXdUaW1lRnJhY3Rpb24gPSB0aGlzLnRpbWVMZWZ0IC8gVElNRV9MSU1JVDtcbiAgICAgIHJldHVybiByYXdUaW1lRnJhY3Rpb24gLSAoMSAvIFRJTUVfTElNSVQpICogKDEgLSByYXdUaW1lRnJhY3Rpb24pO1xuICAgIH0sXG5cbiAgICByZW1haW5pbmdQYXRoQ29sb3IoKSB7XG4gICAgICBjb25zdCB7IGFsZXJ0LCB3YXJuaW5nLCBpbmZvIH0gPSBDT0xPUl9DT0RFUztcblxuICAgICAgaWYgKHRoaXMudGltZUxlZnQgPD0gYWxlcnQudGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybiBhbGVydC5jb2xvcjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lTGVmdCA8PSB3YXJuaW5nLnRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm4gd2FybmluZy5jb2xvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbmZvLmNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHRpbWVMZWZ0KG5ld1ZhbHVlKSB7XG4gICAgICBpZiAobmV3VmFsdWUgPT09IDApIHtcbiAgICAgICAgdGhpcy5vblRpbWVzVXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb25UaW1lc1VwKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpO1xuICAgIH0sXG5cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgdGhpcy50aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gKHRoaXMudGltZVBhc3NlZCArPSAxKSwgMTAwMCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbi5iYXNlLXRpbWVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG5cbiAgJl9fc3ZnIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIH1cblxuICAmX19jaXJjbGUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiBub25lO1xuICB9XG5cbiAgJl9fcGF0aC1lbGFwc2VkIHtcbiAgICBzdHJva2Utd2lkdGg6IDdweDtcbiAgICBzdHJva2U6IGdyZXk7XG4gIH1cblxuICAmX19wYXRoLXJlbWFpbmluZyB7XG4gICAgc3Ryb2tlLXdpZHRoOiA3cHg7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMXMgbGluZWFyIGFsbDtcbiAgICBmaWxsLXJ1bGU6IG5vbnplcm87XG4gICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG5cbiAgICAmLmdyZWVuIHtcbiAgICAgIGNvbG9yOiByZ2IoNjUsIDE4NCwgMTMxKTtcbiAgICB9XG5cbiAgICAmLm9yYW5nZSB7XG4gICAgICBjb2xvcjogb3JhbmdlO1xuICAgIH1cblxuICAgICYucmVkIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICB9XG5cbiAgJl9fbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGltZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGltZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzMGVmNzg4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RpbWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGltZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIHZhciBzdHlsZTAgPSByZXF1aXJlKFwiLi9UaW1lci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMzBlZjc4OCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpXG5pZiAoc3R5bGUwLl9faW5qZWN0X18pIHN0eWxlMC5fX2luamVjdF9fKGNvbnRleHQpXG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBcIjAzMGVmNzg4XCIsXG4gIFwiMmUxOWI1NGRcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCI8dGVtcGxhdGU+XG4gICAgPHYtbGF5b3V0PlxuICAgICAgICA8bG9hZGluZyA6YWN0aXZlLnN5bmM9XCJpc0xvYWRpbmdcIiBsb2FkZXI9XCJiYXJzXCIgOmlzLWZ1bGwtcGFnZT1cInRydWVcIiBjb2xvcj1cImJsdWVcIj4gPC9sb2FkaW5nPlxuICAgICAgICA8bmF2LWRyYXdlciB2LW1vZGVsPVwiZHJhd2VyXCI+PC9uYXYtZHJhd2VyPlxuICAgICAgICA8di1jYXJkIGZsYXQgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJjYXJkaHl0IG1iLTEwXCI+XG4gICAgICAgICAgICA8di1hcHAtYmFyIGNvbG9yPVwicmdiYSgxMDAsMTE1LDIwMSlcIiBhcHAgZGFyayBmbGF0PlxuICAgICAgICAgICAgICAgIDx2LWFwcC1iYXItbmF2LWljb24gQGNsaWNrLnN0b3A9XCJkcmF3ZXI9IWRyYXdlclwiPjwvdi1hcHAtYmFyLW5hdi1pY29uPlxuICAgICAgICAgICAgICAgIDx2LWF2YXRhciBjbGFzcz1cIm1yLTJcIiByb3VuZGVkIHNpemU9XCIzNVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1pbWcgc3JjPVwiL2ljb24ucG5nXCI+IDwvdi1pbWc+XG4gICAgICAgICAgICAgICAgPC92LWF2YXRhcj5cbiAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPiBKaWZmeSBGYXZvcnMgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICA8L3YtYXBwLWJhcj5cbiAgICAgICAgICAgIDx2LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT4gSHVtYW5hcCBuZyByaWRlcjwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IG5hdiBvdXRsaW5lZCB0aWxlIHdpZHRoPVwiMTAwJVwiIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZSBAY2xpY2suc3RvcD1cIm1vZGUgPSB7bW9kZToncGlja3VwJywgdGV4dDonU2VsZWN0IFBpY2t1cCBMb2NhdGlvbicsIGJ0blRleHQ6J1NldCBQaWNrdXAnfSwgbWFwU2hlZXQgPSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiPiBtZGktbWFwLW1hcmtlciA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT5TZWxlY3Qgb3JpZ2luPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5QaWNrdXA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gaWQ9XCJuZWVkRGVsaVwiIEBjbGljay5zdG9wPVwibW9kZSA9IHttb2RlOidkcm9wb2ZmJywgdGV4dDonU2VsZWN0IERlc3RpbmF0aW9uJywgYnRuVGV4dDonU2V0IERlc3RpbmF0aW9uJ30sIG1hcFNoZWV0ID0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJibHVlXCI+IG1kaS1uYXZpZ2F0aW9uIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPlNlbGVjdCBkZXN0aW5hdGlvbjwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+RGVzdGluYXRpb248L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dGFyZWEgcm93cz1cIjNcIiBvdXRsaW5lZCBkZW5zZSBoaW50PVwiZS5nIEJsdWUgYW5nIHNvdXQgbmEgZGFtaXQuXCIgY2xhc3M9XCJtdC0xXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSBpbnN0cnVjdGlvbi4gZS5nIG5ha2FXaGl0ZSBULVNoaXJ0XCI+PC92LXRleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWVyPjwvdGltZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lZCBAY2xpY2suc3RvcD1cImZpbmRSaWRlcigpXCIgY29sb3I9XCJibHVlXCIgd2lkdGg9XCI0NSVcIiBjbGFzcz1cIm1hLTFcIiBibG9jaz5DYWxjdWxhdGUgRmFyZTwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICA8L3YtY29udGVudD5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDx2LXJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cIm1hcFNoZWV0XCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT57e21vZGUudGV4dH19PC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R01hcCBpZD1cImdtYXBcIiByZWY9XCJnTWFwXCIgOmNlbnRlcj1cIm15bG9jYXRpb25cIiA6b3B0aW9ucz1cIm9wdGlvbnNcIiA6em9vbT1cIjE1XCIgQGNlbnRlcl9jaGFuZ2VkPVwiY2VudGVyQ2hhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHTWFwTWFya2VyIHJlZj1cImdtYXBtYXJrZXJcIiA6cG9zaXRpb249XCJteWxvY2F0aW9uXCIgOm9wdGlvbnM9XCJ7IGljb246IHNlbGVjdGVkbWFya2VyIH1cIj4gPC9HTWFwTWFya2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR01hcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZWQgdGV4dCBjb2xvcj1cImJsdWVcIiBAY2xpY2suc3RvcD1cInNldExvY2F0aW9uKClcIiBibG9jayBjbGFzcz1cIm1hLTFcIj57e21vZGUuYnRuVGV4dH19PC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi1ib3R0b20tc2hlZXQ+XG4gICAgICAgICAgICA8di1ib3R0b20tc2hlZXQgaW5zZXQgdi1tb2RlbD1cInJpZGVUeXBlXCIgcGVyc2lzdGVudCBzY3JvbGxhYmxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIEBjbGljay5zdG9wPVwicmlkZVR5cGUgPSBmYWxzZVwiPm1kaS1jbG9zZTwvdi1pY29uPkNhbGN1bGF0ZWQgRmFyZSBNYXRyaXggPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCBzdHlsZT1cImhlaWdodDogNDAwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+RGlzdGFuY2U8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7cmlkZS5kaXN0YW5jZX19IGttPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4gQmFjayBSaWRlPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5Tb2xvIEFuZ2thczwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hY3Rpb24tdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb24gZ3JleS0tdGV4dFwiPkZhcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWQtLXRleHQgc3VidGl0bGUtMlwiPnt7IHJpZGUuZmFyZXMuYmFja19yaWRlIHwgdG9QSFAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicmVkXCIgc21hbGwgb3V0bGluZWQgQGNsaWNrLnN0b3A9XCJcIj5TZWxlY3Q8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+VHJpY3ljbGU8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPkJvb2sgZW50aXJlIHRyaWN5Y2xlIDwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hY3Rpb24tdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb24gZ3JleS0tdGV4dFwiPkZhcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWQtLXRleHQgc3VidGl0bGUtMlwiPnt7IHJpZGUuZmFyZXMudHJpY3ljbGVfaGlyZSB8IHRvUEhQIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24tdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiIHNtYWxsIG91dGxpbmVkIEBjbGljay5zdG9wPVwiXCI+U2VsZWN0PC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPlRyaWN5Y2xlIC0gU2hhcmVkPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5QaWNrdXAgaXMgYWxsb3dlZCA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uIGdyZXktLXRleHRcIj5GYXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVkLS10ZXh0IHN1YnRpdGxlLTJcIj57e3JpZGUuZmFyZXMudHJpY3ljbGVfc2hhcmVkIHwgdG9QSFAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicmVkXCIgc21hbGwgb3V0bGluZWQgQGNsaWNrLnN0b3A9XCJcIj5TZWxlY3Q8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+Q2FyIG9yIFNlZGFuPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5SZW50IGVudGlyZSBjYXIgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBncmV5LS10ZXh0XCI+RmFyZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZC0tdGV4dCBzdWJ0aXRsZS0yXCI+e3tyaWRlLmZhcmVzLmNhcl9oaXJlfCB0b1BIUCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYWN0aW9uLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJyZWRcIiBzbWFsbCBvdXRsaW5lZCBAY2xpY2suc3RvcD1cIlwiPlNlbGVjdDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8di1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPkNhciAtIFNoYXJlZDwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+Q2FyIFBvb2wtUGlja3VwIGFsbG93ZWQgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBncmV5LS10ZXh0XCI+RmFyZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZC0tdGV4dCBzdWJ0aXRsZS0yXCI+e3tyaWRlLmZhcmVzLmNhcl9zaGFyZWR8IHRvUEhQIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24tdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiIHNtYWxsIG91dGxpbmVkIEBjbGljay5zdG9wPVwiXCI+U2VsZWN0PC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT4gLS0+PC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICA8L3Ytcm93PlxuICAgIDwvdi1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBMb2FkaW5nIGZyb20gJ3Z1ZS1sb2FkaW5nLW92ZXJsYXknXG5pbXBvcnQgVGltZXIgZnJvbSAnfi9jb21wb25lbnRzL1RpbWVyJ1xuaW1wb3J0ICd2dWUtbG9hZGluZy1vdmVybGF5L2Rpc3QvdnVlLWxvYWRpbmcuY3NzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTG9hZGluZyxcbiAgICAgICAgVGltZXJcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGZhcmVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbJ2FkbWluL2dldEZhcmUnXS5zZXJ2aWNlX2ZlZXMucmlkZXNcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXBTaGVldDogZmFsc2UsXG4gICAgICAgICAgICBtb2RlOiB7XG4gICAgICAgICAgICAgICAgbW9kZTogJycsXG4gICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgYnRuVGV4dDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29vcmRzOiB7XG4gICAgICAgICAgICAgICAgcGlja3VwOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogMCxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkcm9wb2ZmOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogMCxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByaWRlOiB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICAgICAgICAgICAgZmFyZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja19yaWRlOiAwLFxuICAgICAgICAgICAgICAgICAgICB0cmljeWNsZV9oaXJlOiAwLFxuICAgICAgICAgICAgICAgICAgICB0cmljeWNsZV9zaGFyZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNhcl9oaXJlOiAwLFxuICAgICAgICAgICAgICAgICAgICBjYXJfc2hhcmVkOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJpZGVUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdlcjogZmFsc2UsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbXlsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIGxhdDogOS43OTQxMTg1LFxuICAgICAgICAgICAgICAgIGxuZzogMTE4LjczMjI1OTlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmlnaW46IHtcbiAgICAgICAgICAgICAgICBsYXQ6IDkuNzk0MTE4NSxcbiAgICAgICAgICAgICAgICBsbmc6IDExOC43MzIyNTk5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzdGFuY2VNYXRyaXg6IG51bGwsXG4gICAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZTogbnVsbCxcbiAgICAgICAgICAgIGRpcmVjdGlvbnNSZW5kZXJlcjogbnVsbCxcbiAgICAgICAgICAgIG1hcmtlckE6ICdodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL2ttbC9wYWRkbGUvQS5wbmcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRtYXJrZXI6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSFVTVVJCVkhnQjVWVTdTd05CRUo3TG1aQmdNQytVZEtLeDBNWkNHMnNyd2NiQ0IyZ2xwRkRRM3RvL0llZ3ZTQUlXUHJCSkl5U2xpcFVLS3FZTGFISjNpV0llbHp1L0RUazhqNzFIN01RUGx0bVpuZmxtWjNiM2p1aXZRM0J6Q0lmREk0RkFZQnZUUlYzWFI3dEJnbENDT0lQOW9Gd3V2LzQ2UVN3V1d3ZlpJYWFETmk3dkdPbHF0WnFoZmhQRTQvRVZpQXk1VjZsakU4dVZTdVhZYzRKa01qbmNhclVlTVIwaWI1RGI3ZlpFdlY2dldCZDhQRytRNzNMSUZZeWozbEFzYTFHLzM3L0Q0K0pXZ1BiY1FreWJkOWpwZEdZVlJYbG1TaVFTU1ltaWVNV21oZ011d0kwa1NUUGtwUUpnektKbkRmSnVLWXJ5QkpIN3NWTkJTUEdJN0JLb0ZsM24rR2d1TVk0SkhpejZHdG95Ymlpc1Jjem1FdFBGQU0rSWZsNmk1RG1US1lxZVgrTnNzajE5bFV6OU4ySjRYTnhEVGlRU2t3aTRvejZBRFUzaExkeGI3ZHdXOVJ5TDVCMEZIcmx0QWdaVXNFY2U0ZVJybXdCM3VnQ1JKM2ZrNFZ2c093RURIdGNXeEtlRHk0ZW1hV21IZFJLZEZwdk5waFFLaGRoRm1PZXQ0MkQzc2Z0VEp3N1gvd0hndy9VOGgxeXdrSi9nWUplSS93aS9nOGtkbXFxcUc1QWxrNjJFcitlbUc3blhCRlNyMWFyb05TTmtud09WelpuTlM2eElIdEZvTkY2Q3dlQWJwaGV5TE9mbzMrQUxmclN1ekoxRjhFc0FBQUFBU1VWT1JLNUNZSUk9JyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRBcmVhKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0TG9jYXRpb24oKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLiRyZWZzLmdNYXAubWFwLmdldENlbnRlcigpXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlLm1vZGUgPT09ICdwaWNrdXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb29yZHMucGlja3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCgpLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkcy5kcm9wb2ZmID0ge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCgpLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXBTaGVldCA9IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIG1hcExvYWRlZCgpIHt9LFxuICAgICAgICBnZXRBcmVhKCkge1xuICAgICAgICAgICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGdldExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuYWNjdXJhY3kgPCA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FkbWluL2dldEFyZWEnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnaW4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmRSaWRlcigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29vcmRzKVxuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZU1hdHJpeCA9IG5ldyBnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFNlcnZpY2UoKVxuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZU1hdHJpeC5nZXREaXN0YW5jZU1hdHJpeCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luczogW3RoaXMuY29vcmRzLnBpY2t1cF0sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25zOiBbdGhpcy5jb29yZHMuZHJvcG9mZl0sXG4gICAgICAgICAgICAgICAgdHJhdmVsTW9kZTogJ0RSSVZJTkcnLFxuICAgICAgICAgICAgfSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMucm93c1swXS5lbGVtZW50c1swXS5zdGF0dXMgPT09ICdPSycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KCg1MDAgKyByZXMucm93c1swXS5lbGVtZW50c1swXS5kaXN0YW5jZS52YWx1ZSkgLyAxMDAwKS50b0ZpeGVkKDIpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZGUuZGlzdGFuY2UgPSBkaXN0YW5jZVxuICAgICAgICAgICAgICAgICAgICBsZXQgZmFyZXMgPSB0aGlzLmZhcmVzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlkZS5mYXJlcy5iYWNrX3JpZGUgPSB0aGlzLmZhcmVHZW5lcmF0b3IoZmFyZXMuYmFja3JpZGUuYmFzZSwgZmFyZXMuYmFja3JpZGUuYmFzZV9kaXN0YW5jZSwgZmFyZXMuYmFja3JpZGUuZGlzdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlkZS5mYXJlcy50cmljeWNsZV9zaGFyZWQgPSB0aGlzLmZhcmVHZW5lcmF0b3IoZmFyZXMudHJpa2Uuc2hhcmVkLmJhc2UsIGZhcmVzLnRyaWtlLnNoYXJlZC5iYXNlX2Rpc3RhbmNlLCBmYXJlcy50cmlrZS5zaGFyZWQuZGlzdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlkZS5mYXJlcy50cmljeWNsZV9oaXJlID0gdGhpcy5mYXJlR2VuZXJhdG9yKGZhcmVzLnRyaWtlLmhpcmVkLmJhc2UsIGZhcmVzLnRyaWtlLmhpcmVkLmJhc2VfZGlzdGFuY2UsIGZhcmVzLnRyaWtlLmhpcmVkLmRpc3RhbmNlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZGUuZmFyZXMuY2FyX2hpcmUgPSB0aGlzLmZhcmVHZW5lcmF0b3IoZmFyZXMuY2Fycy5oaXJlZC5iYXNlLCBmYXJlcy5jYXJzLmhpcmVkLmJhc2VfZGlzdGFuY2UsIGZhcmVzLmNhcnMuaGlyZWQuZGlzdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlkZS5mYXJlcy5jYXJfc2hhcmVkID0gdGhpcy5mYXJlR2VuZXJhdG9yKGZhcmVzLmNhcnMuc2hhcmVkLmJhc2UsIGZhcmVzLmNhcnMuc2hhcmVkLmJhc2VfZGlzdGFuY2UsIGZhcmVzLmNhcnMuc2hhcmVkLmRpc3RhbmNlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZGVUeXBlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZhcmVHZW5lcmF0b3IoYmFzZSwgYmFzZV9kaXN0YW5jZSwgZmFyZV9kaXN0YW5jZSkge1xuICAgICAgICAgICAgbGV0IGJhY2tyaWRlZmFyZSA9IHRoaXMucmlkZS5kaXN0YW5jZSA8PSBiYXNlX2Rpc3RhbmNlID8gYmFzZSA6IChiYXNlICsgKCh0aGlzLnJpZGUuZGlzdGFuY2UgLSBiYXNlX2Rpc3RhbmNlKSkgKiBmYXJlX2Rpc3RhbmNlKVxuICAgICAgICAgICAgbGV0IGRlYyA9IHBhcnNlSW50KGJhY2tyaWRlZmFyZSlcbiAgICAgICAgICAgIGxldCBib29raW5nX2ZlZSA9IE1hdGgucm91bmQoYmFja3JpZGVmYXJlICogMC4xMClcbiAgICAgICAgICAgIGxldCBjaGVja2VyID0gYmFja3JpZGVmYXJlIC0gZGVjXG4gICAgICAgICAgICBpZiAoY2hlY2tlciA8IDAuNSkgYmFja3JpZGVmYXJlICs9ICgoMC41IC0gY2hlY2tlcikgKyAwLjEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmFyZScsIE1hdGgucm91bmQoYmFja3JpZGVmYXJlKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCb29raW5nIEZlZScsIE1hdGgucm91bmQoYm9va2luZ19mZWUpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JpZGVyIFJldmVudWUnLCBNYXRoLnJvdW5kKGJhY2tyaWRlZmFyZSAqIDAuODUpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXRmb3JtIFJldmVudWUnLCBNYXRoLnJvdW5kKGJhY2tyaWRlZmFyZSAqIDAuMTUpKVxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYmFja3JpZGVmYXJlICsgYm9va2luZ19mZWUpXG4gICAgICAgIH0sXG4gICAgICAgIGNlbnRlckNoYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy4kcmVmcy5nTWFwLm1hcC5nZXRDZW50ZXIoKVxuICAgICAgICAgICAgdGhpcy4kcmVmcy5nbWFwbWFya2VyLm1hcmtlci5zZXRQb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXQoKSxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZygpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy4kcmVmcy5nbWFwbWFya2VyLm1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSlcbiAgICAgICAgfSxcbiAgICB9XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubWFwY29udGFpbmVyLFxuICAgIC5HTWFwLFxuICAgIC5HTWFwX19XcmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiA4MHZoICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2dyAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SaWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmlkZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SaWRlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzE4M2Y3ZDImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmlkZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SaWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL1JpZGVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxODNmN2QyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKVxuaWYgKHN0eWxlMC5fX2luamVjdF9fKSBzdHlsZTAuX19pbmplY3RfXyhjb250ZXh0KVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgXCIzMTgzZjdkMlwiLFxuICBcIjI5ODZkOTgzXCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcEJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQXBwQmFyTmF2SWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXZhdGFyJztcbmltcG9ydCB7IFZCb3R0b21TaGVldCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJvdHRvbVNoZWV0JztcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkQWN0aW9ucyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNvbnRlbnQnO1xuaW1wb3J0IHsgVkRpdmlkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEaXZpZGVyJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSW1nJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUFjdGlvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQWN0aW9uVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbVRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWUm93IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWVGV4dGFyZWEgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUZXh0YXJlYSc7XG5pbXBvcnQgeyBWVG9vbGJhclRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVG9vbGJhcic7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQXBwQmFyLFZBcHBCYXJOYXZJY29uLFZBdmF0YXIsVkJvdHRvbVNoZWV0LFZCdG4sVkNhcmQsVkNhcmRBY3Rpb25zLFZDYXJkVGV4dCxWQ2FyZFRpdGxlLFZDb250ZW50LFZEaXZpZGVyLFZJY29uLFZJbWcsVkxheW91dCxWTGlzdCxWTGlzdEl0ZW0sVkxpc3RJdGVtQWN0aW9uLFZMaXN0SXRlbUFjdGlvblRleHQsVkxpc3RJdGVtQ29udGVudCxWTGlzdEl0ZW1JY29uLFZMaXN0SXRlbVN1YnRpdGxlLFZMaXN0SXRlbVRpdGxlLFZSb3csVlRleHRhcmVhLFZUb29sYmFyVGl0bGV9KVxuIiwiPHRlbXBsYXRlPlxuIDxyaWRlcz48L3JpZGVzPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgUmlkZXMgZnJvbSAnfi9jb21wb25lbnRzL1JpZGVzLnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFJpZGVzXG4gIH0sXG4gIGxheW91dDogJ21lbnUnLFxuICAgICBtb3VudGVkKCl7XG4gICAgXHR0aGlzLiRmaXJlQW5hbHl0aWNzLmxvZ0V2ZW50KCdwYWdlX3ZpZXcnKVxuICAgIH1cbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmlkZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JpZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcmlkZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDc1MjE0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JpZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmlkZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzMGRjYTc5ZlwiXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=