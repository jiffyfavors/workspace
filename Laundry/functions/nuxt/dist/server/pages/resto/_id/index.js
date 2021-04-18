exports.ids = [9];
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

/***/ 179:
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

/***/ 228:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/FoodItem.vue?vue&type=template&id=3d1bdb9a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('v-layout',{attrs:{"wrap":"","align-center":""}},_vm._l((_vm.data.values),function(item){return _c('v-flex',{key:_vm.data.name + '_' + item,staticClass:"pa-1",attrs:{"xs12":"","md4":"","sm4":"","lg4":""}},[_c('v-lazy',{attrs:{"options":{threshold: .6},"transition":"fade-transition"},model:{value:(_vm.isActive),callback:function ($$v) {_vm.isActive=$$v},expression:"isActive"}},[_c('food-card',{attrs:{"id":item,"merchant":_vm.merchant}})],1)],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FoodItem.vue?vue&type=template&id=3d1bdb9a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/FoodCard.vue?vue&type=template&id=dfa32d26&
var FoodCardvue_type_template_id_dfa32d26_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"max-width":"100%","outlined":""},on:{"click":function($event){$event.stopPropagation();_vm.current_data =_vm.item , _vm.generateAddOns(), _vm.dialog = true}}},[(!_vm.isLoaded)?_c('v-skeleton-loader',{staticClass:"mx-auto",attrs:{"boilerplate":!_vm.isLoaded,"type":"list-item-three-line"}}):_vm._e(),_vm._v(" "),(_vm.isLoaded)?_c('v-list-item',{attrs:{"dense":""}},[_c('v-list-item-content',[_c('h3',[_c('strong',[_vm._v(_vm._s(_vm.item.name))])]),_vm._v(" "),_c('span',{staticStyle:{"font-style":"italic"}},[_c('small',{domProps:{"innerHTML":_vm._s(_vm.item.desc)}})]),_vm._v(" "),_c('span',{staticClass:"caption grey--text"},[_vm._v("From")]),_vm._v(" "),_c('div',{staticClass:"ml-2 red--text subtitle-1"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.item.base_price))+" ")])])]),_vm._v(" "),(_vm.item.img.length>0)?_c('v-list-item-avatar',{attrs:{"tile":"","size":"100"}},[_c('v-img',{attrs:{"src":_vm.item.img}})],1):_vm._e()],1):_vm._e(),_vm._v(" "),(!_vm.isEmpty(_vm.current_data))?_c('v-row',{attrs:{"justify":"center"}},[_c('v-dialog',{attrs:{"fullscreen":"","hide-overlay":"","transition":"dialog-bottom-transition"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-toolbar',{attrs:{"dark":"","color":"rgba(100,115,201)"}},[_c('v-btn',{attrs:{"icon":"","dark":""},on:{"click":function($event){_vm.dialog = false}}},[_c('v-icon',[_vm._v("mdi-close")])],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v("Add to Cart")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_c('strong',[_vm._v(_vm._s(_vm.current_data.name))])]),_vm._v(" "),_c('v-list-item-subtitle',[_c('span',{staticClass:"caption grey--text"},[_vm._v("From")]),_vm._v(" "),_c('span',{staticClass:"red--text"},[_vm._v(_vm._s(_vm._f("toPHP")(_vm.current_data.base_price)))])])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_vm._l((_vm.current_data.options),function(item,index){return _c('v-list',{key:index,attrs:{"dense":"","flat":"","subheader":""}},[(item.min == 1 && item.max == 1)?_c('v-list-item',{attrs:{"dense":""}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("One is required")]),_vm._v(" "),_c('v-list',{attrs:{"flat":"","dense":""}},[_c('v-list-item-group',{attrs:{"mandatory":"","color":"deep-purple accent-4"},model:{value:(_vm.add_on_data[item.name.replace(' ', '').toLowerCase()]),callback:function ($$v) {_vm.$set(_vm.add_on_data, item.name.replace(' ', '').toLowerCase(), $$v)},expression:"add_on_data[item.name.replace(' ', '').toLowerCase()]"}},_vm._l((item.values),function(i,e){return _c('v-list-item',{key:e+index,attrs:{"value":i}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(i.name))])],1),_vm._v(" "),(i.price>0)?_c('v-list-item-action-text',[_vm._v(" + "+_vm._s(_vm._f("toPHP")(i.price))+" ")]):_vm._e()],1)}),1)],1)],1)],1):_vm._e(),_vm._v(" "),(item.max > 1)?_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(item.name)+" - Optional ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Select up to "+_vm._s(item.max)+" ")]),_vm._v(" "),_c('v-list',{attrs:{"flat":"","dense":""}},[_c('v-list-item-group',{attrs:{"multiple":"","min":item.min,"max":item.max},model:{value:(_vm.add_on_data[item.name.replace(' ', '').toLowerCase()]),callback:function ($$v) {_vm.$set(_vm.add_on_data, item.name.replace(' ', '').toLowerCase(), $$v)},expression:"add_on_data[item.name.replace(' ', '').toLowerCase()]"}},[_vm._l((item.values),function(_item,i){return [(!_item)?_c('v-divider',{key:("divider-" + i)}):_c('v-list-item',{key:("item-" + i),attrs:{"value":_item,"active-class":"deep-purple--text text--accent-4"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var active = ref.active;
var toggle = ref.toggle;
return [_c('v-list-item-action',[_c('v-checkbox',{attrs:{"input-value":active,"true-value":_item,"color":"deep-purple accent-4"},on:{"click":toggle}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_item.name))])],1),_vm._v(" "),(_item.price>0)?_c('v-list-item-action-text',[_vm._v(" + "+_vm._s(_vm._f("toPHP")(_item.price))+" ")]):_vm._e()]}}],null,true)})]})],2)],1)],1)],1):_vm._e(),_vm._v(" "),_c('v-divider')],1)}),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list',[_c('v-list-item',[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("Special Instruction")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" e.g Allergy to some ingredients ")]),_vm._v(" "),_c('v-textarea',{attrs:{"outlined":"","name":"input-7-4","label":"Instruction","value":"","placeholder":"Please provide instruction if any"},model:{value:(_vm.instructions),callback:function ($$v) {_vm.instructions=$$v},expression:"instructions"}})],1)],1)],1),_vm._v(" "),_c('v-toolbar',{staticClass:"shopresponsive",attrs:{"dense":"","max-width":"100%"}},[_c('span',{staticClass:"caption grey--text"},[_vm._v(" Qty ")]),_vm._v(" "),_c('v-icon',{staticClass:"ma-2 white--text",attrs:{"color":"green"},on:{"click":function($event){_vm.qty = _vm.qty < 1 ? 1 : _vm.qty - 1}}},[_vm._v(" mdi-minus ")]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.qty))]),_vm._v(" "),_c('v-icon',{staticClass:"ma-2 white--text",attrs:{"color":"green"},on:{"click":function($event){_vm.qty = _vm.qty + 1}}},[_vm._v(" mdi-plus ")]),_vm._v(" "),_c('span',{staticClass:"caption grey--text"},[_vm._v("Total")]),_vm._v(" "),_c('div',{staticClass:"ml-2 red--text subtitle-1"},[_c('strong',[_vm._v(_vm._s(_vm._f("toPHP")(_vm.computeTotal(_vm.addToCartItem)))+" ")])]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","disabled":_vm.qty < 1,"outlined":"","color":"red"},on:{"click":function($event){$event.stopPropagation();return _vm.addToCart($event)}}},[_vm._v(" Add to Cart ")])],1)],2)],1)],1):_vm._e(),_vm._v(" "),_c('v-snackbar',{attrs:{"color":"blue","timeout":_vm.timeout},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_vm._v(" Item added to cart ")]),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"290"},model:{value:(_vm.isExist),callback:function ($$v) {_vm.isExist=$$v},expression:"isExist"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v(" Different Store ")]),_vm._v(" "),_c('v-card-text',[_vm._v(" There are items in your cart from different merchant. Do you want replace cart item? ")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":function($event){_vm.isExist = false}}},[_vm._v(" Cancel ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","text":""},on:{"click":_vm.saveIsExist}},[_vm._v(" Ok ")])],1)],1)],1)],1)],1)}
var FoodCardvue_type_template_id_dfa32d26_staticRenderFns = []


// CONCATENATED MODULE: ./components/FoodCard.vue?vue&type=template&id=dfa32d26&

// EXTERNAL MODULE: ./node_modules/lodash.clonedeep/index.js
var lodash_clonedeep = __webpack_require__(180);
var lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FoodCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FoodCardvue_type_script_lang_js_ = ({
  props: {
    id: String,
    merchant: Object
  },
  computed: {
    addToCartItem() {
      try {
        let item = {
          info: this.current_data,
          qty: this.qty,
          add_ons: this.addClean(this.add_on_data),
          instructions: this.instructions
        };
        return item;
      } catch (e) {
        console.log(e);
      }
    },

    cartMerchant() {
      return this.$store.getters['cart/getStoreID'];
    },

    cartSize() {
      return this.$store.getters['cart/getCartItemCount'];
    }

  },

  data() {
    return {
      isLoaded: false,
      item: {
        name: '',
        base_price: 0,
        img: ''
      },
      current_data: {},
      fooddata: {},
      qty: 1,
      snackbar: false,
      add_on_data: {},
      timeout: 2500,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      radios: true,
      instructions: '',
      isExist: false
    };
  },

  mounted() {
    this.getItem();
  },

  methods: {
    async getItem() {
      let fooditem = await this.$fireStoreObj().collection('foods').doc(this.id).get();
      this.item = fooditem.data();
      this.isLoaded = true;
    },

    addClean(data) {
      data = lodash_clonedeep_default()(data);
      Object.entries(data).map(([key, val]) => {
        if (Array.isArray(val) && val.length <= 0) delete data[key];
        if (Object.keys(val).length === 0 && val.constructor === Object) delete data[key];
      });
      return data;
    },

    isEmpty(obj) {
      const ob = Object.assign({}, obj);

      for (const key in ob) {
        if (obj.hasOwnProperty(key)) return false;
      }

      return true;
    },

    saveIsExist() {
      this.isExist = false;
      this.$store.commit('cart/clearCart');
      const data = {
        business: this.merchant,
        item: {
          info: this.current_data,
          qty: this.qty,
          add_ons: this.addClean(this.add_on_data),
          instructions: this.instructions
        }
      };
      this.$fireAnalytics.logEvent('add_to_cart', {
        value: this.computeTotal(data.item),
        currency: 'PHP',
        items: [data.item]
      });
      this.$store.commit('cart/add', data);
      this.snackbar = true;
    },

    addToCart() {
      this.dialog = false;

      if (this.merchant.id === this.cartMerchant.id || this.cartSize < 1) {
        const data = {
          business: this.merchant,
          item: {
            info: this.current_data,
            qty: this.qty,
            add_ons: this.addClean(this.add_on_data),
            instructions: this.instructions
          }
        };
        this.$fireAnalytics.logEvent('add_to_cart', {
          value: this.computeTotal(data.item),
          currency: 'PHP',
          items: [data.item]
        });
        this.$store.commit('cart/add', data);
        this.snackbar = true;
      } else {
        this.isExist = true;
      }
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
    },

    generateFilter(item) {
      let i = Object.assign({}, item);
      const value = parseFloat(i.price);
      const formatter = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2,
        currencyDisplay: 'symbol'
      });
      const vv = formatter.format(Math.round(value));
      if (value > 0) i.name = i.name + '(+ ' + vv + ')';
      return i.name;
    },

    generateAddOns() {
      const addons = {};

      for (let i = 0; i < this.current_data.options.length; i++) {
        addons[this.current_data.options[i].name.replace(' ', '').toLowerCase()] = [];
      }

      this.add_on_data = addons;
    }

  }
});
// CONCATENATED MODULE: ./components/FoodCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FoodCardvue_type_script_lang_js_ = (FoodCardvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(64);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSkeletonLoader/VSkeletonLoader.sass
var VSkeletonLoader = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/measurable/index.js
var measurable = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
// Styles
 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ var VSkeletonLoader_VSkeletonLoader = (Object(mixins["a" /* default */])(elevatable["a" /* default */], measurable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'VSkeletonLoader',
  props: {
    boilerplate: Boolean,
    loading: Boolean,
    tile: Boolean,
    transition: String,
    type: String,
    types: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    attrs() {
      if (!this.isLoading) return this.$attrs;
      return !this.boilerplate ? {
        'aria-busy': true,
        'aria-live': 'polite',
        role: 'alert',
        ...this.$attrs
      } : {};
    },

    classes() {
      return {
        'v-skeleton-loader--boilerplate': this.boilerplate,
        'v-skeleton-loader--is-loading': this.isLoading,
        'v-skeleton-loader--tile': this.tile,
        ...this.themeClasses,
        ...this.elevationClasses
      };
    },

    isLoading() {
      return !('default' in this.$scopedSlots) || this.loading;
    },

    rootTypes() {
      return {
        actions: 'button@2',
        article: 'heading, paragraph',
        avatar: 'avatar',
        button: 'button',
        card: 'image, card-heading',
        'card-avatar': 'image, list-item-avatar',
        'card-heading': 'heading',
        chip: 'chip',
        'date-picker': 'list-item, card-heading, divider, date-picker-options, date-picker-days, actions',
        'date-picker-options': 'text, avatar@2',
        'date-picker-days': 'avatar@28',
        heading: 'heading',
        image: 'image',
        'list-item': 'text',
        'list-item-avatar': 'avatar, text',
        'list-item-two-line': 'sentences',
        'list-item-avatar-two-line': 'avatar, sentences',
        'list-item-three-line': 'paragraph',
        'list-item-avatar-three-line': 'avatar, paragraph',
        paragraph: 'text@3',
        sentences: 'text@2',
        table: 'table-heading, table-thead, table-tbody, table-tfoot',
        'table-heading': 'heading, text',
        'table-thead': 'heading@6',
        'table-tbody': 'table-row-divider@6',
        'table-row-divider': 'table-row, divider',
        'table-row': 'table-cell@6',
        'table-cell': 'text',
        'table-tfoot': 'text@2, avatar@2',
        text: 'text',
        ...this.types
      };
    }

  },
  methods: {
    genBone(text, children) {
      return this.$createElement('div', {
        staticClass: `v-skeleton-loader__${text} v-skeleton-loader__bone`
      }, children);
    },

    genBones(bone) {
      // e.g. 'text@3'
      const [type, length] = bone.split('@');

      const generator = () => this.genStructure(type); // Generate a length array based upon
      // value after @ in the bone string


      return Array.from({
        length
      }).map(generator);
    },

    // Fix type when this is merged
    // https://github.com/microsoft/TypeScript/pull/33050
    genStructure(type) {
      let children = [];
      type = type || this.type || '';
      const bone = this.rootTypes[type] || ''; // End of recursion, do nothing

      /* eslint-disable-next-line no-empty, brace-style */

      if (type === bone) {} // Array of values - e.g. 'heading, paragraph, text@2'
      else if (type.indexOf(',') > -1) return this.mapBones(type); // Array of values - e.g. 'paragraph@4'
        else if (type.indexOf('@') > -1) return this.genBones(type); // Array of values - e.g. 'card@2'
          else if (bone.indexOf(',') > -1) children = this.mapBones(bone); // Array of values - e.g. 'list-item@2'
            else if (bone.indexOf('@') > -1) children = this.genBones(bone); // Single value - e.g. 'card-heading'
              else if (bone) children.push(this.genStructure(bone));

      return [this.genBone(type, children)];
    },

    genSkeleton() {
      const children = [];
      if (!this.isLoading) children.push(Object(helpers["o" /* getSlot */])(this));else children.push(this.genStructure());
      /* istanbul ignore else */

      if (!this.transition) return children;
      /* istanbul ignore next */

      return this.$createElement('transition', {
        props: {
          name: this.transition
        },
        // Only show transition when
        // content has been loaded
        on: {
          afterEnter: this.resetStyles,
          beforeEnter: this.onBeforeEnter,
          beforeLeave: this.onBeforeLeave,
          leaveCancelled: this.resetStyles
        }
      }, children);
    },

    mapBones(bones) {
      // Remove spaces and return array of structures
      return bones.replace(/\s/g, '').split(',').map(this.genStructure);
    },

    onBeforeEnter(el) {
      this.resetStyles(el);
      if (!this.isLoading) return;
      el._initialStyle = {
        display: el.style.display,
        transition: el.style.transition
      };
      el.style.setProperty('transition', 'none', 'important');
    },

    onBeforeLeave(el) {
      el.style.setProperty('display', 'none', 'important');
    },

    resetStyles(el) {
      if (!el._initialStyle) return;
      el.style.display = el._initialStyle.display || '';
      el.style.transition = el._initialStyle.transition;
      delete el._initialStyle;
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-skeleton-loader',
      attrs: this.attrs,
      on: this.$listeners,
      class: this.classes,
      style: this.isLoading ? this.measurableStyles : undefined
    }, [this.genSkeleton()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(154);

// CONCATENATED MODULE: ./components/FoodCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FoodCardvue_type_script_lang_js_,
  FoodCardvue_type_template_id_dfa32d26_render,
  FoodCardvue_type_template_id_dfa32d26_staticRenderFns,
  false,
  null,
  null,
  "d15da794"
  
)

/* harmony default export */ var FoodCard = (component.exports);

/* vuetify-loader */



























installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCheckbox: VCheckbox["a" /* default */],VDialog: VDialog["a" /* default */],VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemActionText: components_VList["a" /* VListItemActionText */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VRow: VRow["a" /* default */],VSkeletonLoader: VSkeletonLoader_VSkeletonLoader,VSnackbar: VSnackbar["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextarea: VTextarea["a" /* default */],VToolbar: VToolbar["a" /* default */],VToolbarTitle: components_VToolbar["a" /* VToolbarTitle */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FoodItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FoodItemvue_type_script_lang_js_ = ({
  components: {
    FoodCard: FoodCard
  },
  props: {
    data: {
      type: Object,
      default: null
    },
    merchant: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      isActive: false
    };
  }

});
// CONCATENATED MODULE: ./components/FoodItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FoodItemvue_type_script_lang_js_ = (FoodItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLazy/VLazy.js
var VLazy = __webpack_require__(218);

// CONCATENATED MODULE: ./components/FoodItem.vue





/* normalize component */

var FoodItem_component = Object(componentNormalizer["a" /* default */])(
  components_FoodItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "44031a8e"
  
)

/* harmony default export */ var FoodItem = __webpack_exports__["a"] = (FoodItem_component.exports);

/* vuetify-loader */





installComponents_default()(FoodItem_component, {VCard: VCard["a" /* default */],VFlex: VFlex["a" /* default */],VLayout: VLayout["a" /* default */],VLazy: VLazy["a" /* default */]})


/***/ }),

/***/ 244:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58a28f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58a28f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58a28f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58a28f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58a28f5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/resto/_id/index.vue?vue&type=template&id=58a28f5a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"e3"}},[_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"blue"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('v-app-bar',{attrs:{"color":"#00aff0","dark":"","shrink-on-scroll":"","prominent":"","src":_vm.business.backdrop,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3","scroll-threshold":"300","fixed":"","app":""},scopedSlots:_vm._u([{key:"img",fn:function(ref){
var props = ref.props;
return [_c('v-img',_vm._b({attrs:{"gradient":"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},'v-img',props,false))]}},{key:"extension",fn:function(){return [_c('v-tabs',{attrs:{"show-arrows":"","center-active":"","centered":"","dense":"","background-color":"transparent","color":"basil","grow":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},_vm._l((_vm.business.menu.filter(function (i){ return i.values.length>0; })),function(item){return _c('v-tab',{key:item.name,attrs:{"dense":""},on:{"click":function($event){$event.stopPropagation();return _vm.scrollTo()}}},[_vm._v(" "+_vm._s(item.name)+" ")])}),1)]},proxy:true}])},[_vm._v(" "),_c('v-btn',{attrs:{"icon":"","to":"/food"}},[_c('v-icon',[_vm._v(" mdi-arrow-left-bold")])],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v(_vm._s(_vm.business.business_name))]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-menu',{attrs:{"bottom":"","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({attrs:{"dark":"","icon":""}},'v-btn',attrs,false),on),[_c('v-icon',[_vm._v(" mdi-share-variant")])],1)]}}])},[_vm._v(" "),_c('v-list',{attrs:{"nav":"","flat":"","single-line":"","dense":""}},_vm._l((_vm.networks),function(network){return _c('ShareNetwork',{key:network.network,style:({ backgroundColor: network.color }),attrs:{"network":network.network,"url":_vm.sharing.url,"title":_vm.sharing.title,"description":_vm.sharing.description,"hashtags":_vm.sharing.hashtags}},[_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"small":"","color":network.color}},[_vm._v(" "+_vm._s(network.icon)+" ")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v(_vm._s(network.name))])],1)],1)}),1)],1),_vm._v(" "),_c('client-only',[(_vm.cartSize > 0)?_c('v-btn',{attrs:{"id":"cart","icon":"","to":"/cart"}},[_c('v-badge',{attrs:{"color":"red"},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_vm._v(" "+_vm._s(_vm.cartSize)+" ")]},proxy:true}],null,false,1285045876)},[_vm._v(" "),_c('v-icon',{attrs:{"color":"white","dense":""}},[_vm._v(" mdi-cart-outline ")])],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('v-sheet',{staticClass:"overflow-y-auto",attrs:{"id":"scrolling-techniques-3","max-height":"100vh"}},[_c('v-container',{attrs:{"fluid":""}},[_c('v-content',[_c('v-tabs-items',{model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},_vm._l((_vm.business.menu.filter(function (i){ return i.values.length>0; })),function(item){return _c('v-tab-item',{key:item.name},[_c('client-only',[_c('food-item',{attrs:{"data":item,"merchant":_vm.business}})],1)],1)}),1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/resto/_id/index.vue?vue&type=template&id=58a28f5a&scoped=true&

// EXTERNAL MODULE: external "vue-loading-overlay"
var external_vue_loading_overlay_ = __webpack_require__(63);
var external_vue_loading_overlay_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_overlay_);

// EXTERNAL MODULE: ./node_modules/vue-loading-overlay/dist/vue-loading.css
var vue_loading = __webpack_require__(81);

// EXTERNAL MODULE: external "geofirestore"
var external_geofirestore_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/FoodItem.vue + 10 modules
var FoodItem = __webpack_require__(229);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/resto/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FoodItem: FoodItem["a" /* default */],
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
      const geocollection = new external_geofirestore_["GeoCollectionReference"](db.collection('merchant'));
      return geocollection.where('url', '==', params.id).get().then(data => {
        const d = data.docs[0].data();
        let delivery = d.delivery_time;

        if (delivery === undefined) {
          delivery = {
            open: '09:00:00',
            close: '19:00:00'
          };
        }

        const biz = {
          isLoading: false,
          business: {
            id: data.docs[0].id,
            business_name: d.business_name,
            branch: d.branch,
            backdrop: d.backdrop,
            logo: d.logo,
            menu: d.menu.sort((a, b) => {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            }),
            rates: d.rates,
            location: d.coordinates,
            delivery
          },
          sharing: {
            url: 'https://m.jiffyfavors.com/resto/' + params.id,
            title: `Order your ${d.business_name} - ${d.branch} Food Online at Jiffy Favors`,
            description: `${d.business_name} - ${d.branch} Food Menu & Online Ordering`,
            hashtags: 'jiffyfavors,food,delivery,onlineorder'
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

  data() {
    return {
      isLoading: true,
      business: null,
      dialog: false,
      tab: null
    };
  },

  head() {
    const business = this.business;
    const url = 'https://m.jiffyfavors.com' + this.$route.fullPath;
    return {
      title: `${business.business_name} - Menu and Food Delivery`,
      meta: [{
        hid: `description`,
        name: 'description',
        content: `${business.business_name} ${business.branch}- Online Food Ordering`
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'restaurant.menu'
      }, {
        hid: 'og:title',
        name: 'og:title',
        content: `Food Menu|Order Online - ${business.business_name} ${business.branch}`
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: `Menu for ${business.business_name} ${business.branch}- Order Now. Pay COD!`
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

  computed: {
    cartSize() {
      return this.$store.getters['cart/getCartItemCount'];
    },

    itemCount() {
      return this.$store.getters['cart/getCartItemCount'];
    },

    totalPrice() {
      return this.$store.getters['cart/getTotal'];
    }

  },
  watch: {
    cartSize() {
      if (this.cartSize > 0) {
        this.$nextTick(() => {
          this.shake();
        });
      }
    }

  },

  mounted() {
    this.$fireAnalytics.logEvent('page_view');
  },

  methods: {
    scrollTo() {
      document.getElementById('scrolling-techniques-3').scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },

    shake() {
      document.getElementById('cart').classList.add('shake');
      setTimeout(() => {
        document.getElementById('cart').classList.remove('shake');
      }, 1500);
    }

  }
});
// CONCATENATED MODULE: ./pages/resto/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var resto_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
var VAppBar = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBadge/VBadge.js
var VBadge = __webpack_require__(202);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VContent/VContent.js + 1 modules
var VContent = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var components_VList = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(167);

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

// CONCATENATED MODULE: ./pages/resto/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(268)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resto_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "58a28f5a",
  "1c76656d"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





















installComponents_default()(component, {VApp: VApp["a" /* default */],VAppBar: VAppBar["a" /* default */],VBadge: VBadge["a" /* default */],VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */],VContent: VContent["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemIcon: VListItemIcon["a" /* default */],VListItemTitle: components_VList["d" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VSheet: VSheet["a" /* default */],VSpacer: VSpacer["a" /* default */],VTab: VTab["a" /* default */],VTabItem: VTabItem["a" /* default */],VTabs: VTabs["a" /* default */],VTabsItems: VTabsItems["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNhcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUb29sYmFyL1ZUb29sYmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVzc2FnZXMvVk1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVzc2FnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZJbnB1dC9WSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZJbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNhcmQvVkNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYWJlbC9WTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYWJlbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9sb2FkYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy92YWxpZGF0YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WR3JpZC9WR3JpZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUZXh0RmllbGQvVlRleHRGaWVsZC5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL2ludGVyc2VjdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUZXh0RmllbGQvVlRleHRGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyL1ZQcm9ncmVzc0xpbmVhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZJbnB1dC9WSW5wdXQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUb29sYmFyL1ZUb29sYmFyLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1haW4vVk1haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9jb21wYXJhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVudS9WTWVudS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ291bnRlci9WQ291bnRlci5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL21lbnVhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL3RyYW5zaXRpb25hYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNZW51L1ZNZW51LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkJhZGdlL1ZCYWRnZS5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUZXh0YXJlYS9WVGV4dGFyZWEuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLmNsb25lZGVlcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlNsaWRlR3JvdXAvVlNsaWRlR3JvdXAuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WV2luZG93L1ZXaW5kb3cuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVldpbmRvdy9WV2luZG93LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFic0l0ZW1zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQXBwQmFyL1ZBcHBCYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvcmlwcGxlYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1haW4vVk1haW4udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb250ZW50L1ZDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WU3BhY2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9zdHlsZXMvY29tcG9uZW50cy9fc2VsZWN0aW9uLWNvbnRyb2xzLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvc2VsZWN0YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2hlY2tib3gvVkNoZWNrYm94LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlNuYWNrYmFyL1ZTbmFja2Jhci5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQmFkZ2UvVkJhZGdlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WUm93LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dGFyZWEvVlRleHRhcmVhLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFiLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU2xpZGVHcm91cC9WU2xpZGVHcm91cC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYnNCYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzU2xpZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFicy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVldpbmRvdy9WV2luZG93SXRlbS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYkl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYXp5L1ZMYXp5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2hlY2tib3gvVkNoZWNrYm94LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU25hY2tiYXIvVlNuYWNrYmFyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZTa2VsZXRvbkxvYWRlci9WU2tlbGV0b25Mb2FkZXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb2RJdGVtLnZ1ZT84ZmY2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vZENhcmQudnVlPzk4MWYiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRm9vZENhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vZENhcmQudnVlP2FlNmYiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTa2VsZXRvbkxvYWRlci9WU2tlbGV0b25Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb29kQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRm9vZEl0ZW0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vZEl0ZW0udnVlPzQ5NjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb29kSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzdG8vX2lkL2luZGV4LnZ1ZT9kYTYyIiwid2VicGFjazovLy8uL3BhZ2VzL3Jlc3RvL19pZC9pbmRleC52dWU/NTljYSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXN0by9faWQvaW5kZXgudnVlPzEyNWYiLCJ3ZWJwYWNrOi8vL3BhZ2VzL3Jlc3RvL19pZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzdG8vX2lkL2luZGV4LnZ1ZT84YTNiIiwid2VicGFjazovLy8uL3BhZ2VzL3Jlc3RvL19pZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZCdG4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNLFlBQVksR0FBRyxvRkFBc0IsQ0FBM0MsaUJBQTJDLENBQTNDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsb0ZBQXNCLENBQTVDLGtCQUE0QyxDQUE1QztBQUNBLE1BQU0sU0FBUyxHQUFHLG9GQUFzQixDQUF4QyxjQUF3QyxDQUF4QztBQUNBLE1BQU0sVUFBVSxHQUFHLG9GQUFzQixDQUF6QyxlQUF5QyxDQUF6QztBQUVBO0FBUWU7QUFDYix5QkFBdUIsRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3ZCO0FBTHVCO0FBRFosQ0FBZixFOzs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFLQTs7QUFDZSx1SEFBTSxDQUFOLE9BQWM7QUFDM0IsTUFBSSxFQUR1QjtBQUczQixPQUFLLEVBQUU7QUFDTCxZQUFRLEVBREg7QUFFTCxVQUFNLEVBRkQ7QUFHTCxZQUFRLEVBSEg7QUFJTCxTQUFLLEVBSkE7QUFLTCxZQUFRLEVBTEg7QUFNTCxtQkFBZSxFQUFF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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ087QUFDQztBQUNOO0FBQ0Y7QUFDRTtBQUNJO0FBQ0k7QUFDQztBQUNUO0FBQ0U7QUFDQTtBQUNIO0FBQ0k7QUFDSDtBQUNLO0FBQ007QUFDaEUsMkJBQWlCLGFBQWEsNkJBQUksQ0FBQyxtQ0FBTyxDQUFDLGlDQUFNLENBQUMsNkJBQUksQ0FBQyx5Q0FBVSxDQUFDLHFDQUFRLENBQUMsK0JBQUssQ0FBQyw2QkFBSSxDQUFDLCtCQUFLLENBQUMsdUNBQVMsQ0FBQywrQ0FBYSxDQUFDLDBEQUFjLENBQUMsK0JBQUssQ0FBQyxpQ0FBTSxDQUFDLG1DQUFPLENBQUMsNkJBQUksQ0FBQyxxQ0FBUSxDQUFDLCtCQUFLLENBQUMseUNBQVUsQ0FBQyxnREFBYSxDQUFDOzs7Ozs7Ozs7QUMvQ3JNO0FBQUE7QUFFQTtBQUNBLGdIIiwiZmlsZSI6InBhZ2VzL3Jlc3RvL19pZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWQ2FyZCBmcm9tICcuL1ZDYXJkJ1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuY29uc3QgVkNhcmRBY3Rpb25zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX19hY3Rpb25zJylcbmNvbnN0IFZDYXJkU3VidGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3N1YnRpdGxlJylcbmNvbnN0IFZDYXJkVGV4dCA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fdGV4dCcpXG5jb25zdCBWQ2FyZFRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX190aXRsZScpXG5cbmV4cG9ydCB7XG4gIFZDYXJkLFxuICBWQ2FyZEFjdGlvbnMsXG4gIFZDYXJkU3VidGl0bGUsXG4gIFZDYXJkVGV4dCxcbiAgVkNhcmRUaXRsZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAkX3Z1ZXRpZnlfc3ViY29tcG9uZW50czoge1xuICAgIFZDYXJkLFxuICAgIFZDYXJkQWN0aW9ucyxcbiAgICBWQ2FyZFN1YnRpdGxlLFxuICAgIFZDYXJkVGV4dCxcbiAgICBWQ2FyZFRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRvb2xiYXIuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZTaGVldCBmcm9tICcuLi9WU2hlZXQvVlNoZWV0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkltZywgeyBzcmNPYmplY3QgfSBmcm9tICcuLi9WSW1nL1ZJbWcnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGJyZWFraW5nIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVlNoZWV0LmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRvb2xiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYWJzb2x1dGU6IEJvb2xlYW4sXG4gICAgYm90dG9tOiBCb29sZWFuLFxuICAgIGNvbGxhcHNlOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGV4dGVuZGVkOiBCb29sZWFuLFxuICAgIGV4dGVuc2lvbkhlaWdodDoge1xuICAgICAgZGVmYXVsdDogNDgsXG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIH0sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBmbG9hdGluZzogQm9vbGVhbixcbiAgICBwcm9taW5lbnQ6IEJvb2xlYW4sXG4gICAgc2hvcnQ6IEJvb2xlYW4sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdIGFzIFByb3BUeXBlPHN0cmluZyB8IHNyY09iamVjdD4sXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hlYWRlcicsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGlzRXh0ZW5kZWQ6IGZhbHNlLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcblxuICAgICAgaWYgKCF0aGlzLmlzRXh0ZW5kZWQpIHJldHVybiBoZWlnaHRcblxuICAgICAgY29uc3QgZXh0ZW5zaW9uSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5leHRlbnNpb25IZWlnaHQpXG5cbiAgICAgIHJldHVybiB0aGlzLmlzQ29sbGFwc2VkXG4gICAgICAgID8gaGVpZ2h0XG4gICAgICAgIDogaGVpZ2h0ICsgKCFpc05hTihleHRlbnNpb25IZWlnaHQpID8gZXh0ZW5zaW9uSGVpZ2h0IDogMClcbiAgICB9LFxuICAgIGNvbXB1dGVkQ29udGVudEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLmhlaWdodCkgcmV0dXJuIHBhcnNlSW50KHRoaXMuaGVpZ2h0KVxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQgJiYgdGhpcy5kZW5zZSkgcmV0dXJuIDk2XG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCAmJiB0aGlzLnNob3J0KSByZXR1cm4gMTEyXG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCkgcmV0dXJuIDEyOFxuICAgICAgaWYgKHRoaXMuZGVuc2UpIHJldHVybiA0OFxuICAgICAgaWYgKHRoaXMuc2hvcnQgfHwgdGhpcy4kdnVldGlmeS5icmVha3BvaW50LnNtQW5kRG93bikgcmV0dXJuIDU2XG4gICAgICByZXR1cm4gNjRcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRvb2xiYXInOiB0cnVlLFxuICAgICAgICAndi10b29sYmFyLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXRvb2xiYXItLWJvdHRvbSc6IHRoaXMuYm90dG9tLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZSc6IHRoaXMuY29sbGFwc2UsXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlZCc6IHRoaXMuaXNDb2xsYXBzZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tZXh0ZW5kZWQnOiB0aGlzLmlzRXh0ZW5kZWQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LXRvb2xiYXItLWZsb2F0aW5nJzogdGhpcy5mbG9hdGluZyxcbiAgICAgICAgJ3YtdG9vbGJhci0tcHJvbWluZW50JzogdGhpcy5pc1Byb21pbmVudCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQ29sbGFwc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlXG4gICAgfSxcbiAgICBpc1Byb21pbmVudCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taW5lbnRcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMubWVhc3VyYWJsZVN0eWxlcyxcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRIZWlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgY29uc3QgYnJlYWtpbmdQcm9wcyA9IFtcbiAgICAgIFsnYXBwJywgJzx2LWFwcC1iYXIgYXBwPiddLFxuICAgICAgWydtYW51YWwtc2Nyb2xsJywgJzx2LWFwcC1iYXIgOnZhbHVlPVwiZmFsc2VcIj4nXSxcbiAgICAgIFsnY2xpcHBlZC1sZWZ0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1sZWZ0PiddLFxuICAgICAgWydjbGlwcGVkLXJpZ2h0JywgJzx2LWFwcC1iYXIgY2xpcHBlZC1yaWdodD4nXSxcbiAgICAgIFsnaW52ZXJ0ZWQtc2Nyb2xsJywgJzx2LWFwcC1iYXIgaW52ZXJ0ZWQtc2Nyb2xsPiddLFxuICAgICAgWydzY3JvbGwtb2ZmLXNjcmVlbicsICc8di1hcHAtYmFyIHNjcm9sbC1vZmYtc2NyZWVuPiddLFxuICAgICAgWydzY3JvbGwtdGFyZ2V0JywgJzx2LWFwcC1iYXIgc2Nyb2xsLXRhcmdldD4nXSxcbiAgICAgIFsnc2Nyb2xsLXRocmVzaG9sZCcsICc8di1hcHAtYmFyIHNjcm9sbC10aHJlc2hvbGQ+J10sXG4gICAgICBbJ2NhcmQnLCAnPHYtYXBwLWJhciBmbGF0PiddLFxuICAgIF1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgYnJlYWtpbmdQcm9wcy5mb3JFYWNoKChbb3JpZ2luYWwsIHJlcGxhY2VtZW50XSkgPT4ge1xuICAgICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KG9yaWdpbmFsKSkgYnJlYWtpbmcob3JpZ2luYWwsIHJlcGxhY2VtZW50LCB0aGlzKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJhY2tncm91bmQgKCkge1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkSGVpZ2h0KSxcbiAgICAgICAgc3JjOiB0aGlzLnNyYyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLiRzY29wZWRTbG90cy5pbWdcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5pbWcoeyBwcm9wcyB9KVxuICAgICAgICA6IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkltZywgeyBwcm9wcyB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9faW1hZ2UnLFxuICAgICAgfSwgW2ltYWdlXSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2NvbnRlbnQnLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMpKVxuICAgIH0sXG4gICAgZ2VuRXh0ZW5zaW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19leHRlbnNpb24nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmV4dGVuc2lvbkhlaWdodCksXG4gICAgICAgIH0sXG4gICAgICB9LCBnZXRTbG90KHRoaXMsICdleHRlbnNpb24nKSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICB0aGlzLmlzRXh0ZW5kZWQgPSB0aGlzLmV4dGVuZGVkIHx8ICEhdGhpcy4kc2NvcGVkU2xvdHMuZXh0ZW5zaW9uXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFt0aGlzLmdlbkNvbnRlbnQoKV1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzRXh0ZW5kZWQpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5FeHRlbnNpb24oKSlcbiAgICBpZiAodGhpcy5zcmMgfHwgdGhpcy4kc2NvcGVkU2xvdHMuaW1nKSBjaGlsZHJlbi51bnNoaWZ0KHRoaXMuZ2VuQmFja2dyb3VuZCgpKVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZXNzYWdlcy5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKENvbG9yYWJsZSwgVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1tZXNzYWdlcycsXG5cbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxzdHJpbmdbXT4sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNoaWxkcmVuICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uLWdyb3VwJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXNfX3dyYXBwZXInLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6ICdtZXNzYWdlLXRyYW5zaXRpb24nLFxuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLnZhbHVlLm1hcCh0aGlzLmdlbk1lc3NhZ2UpKVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZSAobWVzc2FnZTogc3RyaW5nLCBrZXk6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzX19tZXNzYWdlJyxcbiAgICAgICAga2V5LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzLCAnZGVmYXVsdCcsIHsgbWVzc2FnZSwga2V5IH0pIHx8IFttZXNzYWdlXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzJyxcbiAgICAgIGNsYXNzOiB0aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICB9KSwgW3RoaXMuZ2VuQ2hpbGRyZW4oKV0pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuL1ZNZXNzYWdlcydcblxuZXhwb3J0IHsgVk1lc3NhZ2VzIH1cbmV4cG9ydCBkZWZhdWx0IFZNZXNzYWdlc1xuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVklucHV0LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuaW1wb3J0IFZNZXNzYWdlcyBmcm9tICcuLi9WTWVzc2FnZXMnXG5cbi8vIE1peGluc1xuaW1wb3J0IEJpbmRzQXR0cnMgZnJvbSAnLi4vLi4vbWl4aW5zL2JpbmRzLWF0dHJzJ1xuaW1wb3J0IFZhbGlkYXRhYmxlIGZyb20gJy4uLy4uL21peGlucy92YWxpZGF0YWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQge1xuICBjb252ZXJ0VG9Vbml0LFxuICBnZXRTbG90LFxuICBrZWJhYkNhc2UsXG59IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEYXRhLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBJbnB1dFZhbGlkYXRpb25SdWxlIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQmluZHNBdHRycyxcbiAgVmFsaWRhdGFibGUsXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UgKi9cbiAgJF9tb2RlbEV2ZW50OiBzdHJpbmdcbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtaW5wdXQnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRJY29uOiBTdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcbiAgICBoaWRlRGV0YWlsczogW0Jvb2xlYW4sIFN0cmluZ10gYXMgUHJvcFR5cGU8Ym9vbGVhbiB8ICdhdXRvJz4sXG4gICAgaGludDogU3RyaW5nLFxuICAgIGlkOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnRIaW50OiBCb29sZWFuLFxuICAgIHByZXBlbmRJY29uOiBTdHJpbmcsXG4gICAgdmFsdWU6IG51bGwgYXMgYW55IGFzIFByb3BUeXBlPGFueT4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGhhc01vdXNlRG93bjogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWlucHV0LS1oYXMtc3RhdGUnOiB0aGlzLmhhc1N0YXRlLFxuICAgICAgICAndi1pbnB1dC0taGlkZS1kZXRhaWxzJzogIXRoaXMuc2hvd0RldGFpbHMsXG4gICAgICAgICd2LWlucHV0LS1pcy1sYWJlbC1hY3RpdmUnOiB0aGlzLmlzTGFiZWxBY3RpdmUsXG4gICAgICAgICd2LWlucHV0LS1pcy1kaXJ0eSc6IHRoaXMuaXNEaXJ0eSxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWRpc2FibGVkJzogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAndi1pbnB1dC0taXMtZm9jdXNlZCc6IHRoaXMuaXNGb2N1c2VkLFxuICAgICAgICAvLyA8di1zd2l0Y2ggbG9hZGluZz4ubG9hZGluZyA9PT0gJycgc28gd2UgY2FuJ3QganVzdCBjYXN0IHRvIGJvb2xlYW5cbiAgICAgICAgJ3YtaW5wdXQtLWlzLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcgIT09IGZhbHNlICYmIHRoaXMubG9hZGluZyAhPSBudWxsLFxuICAgICAgICAndi1pbnB1dC0taXMtcmVhZG9ubHknOiB0aGlzLmlzUmVhZG9ubHksXG4gICAgICAgICd2LWlucHV0LS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRJZCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmlkIHx8IGBpbnB1dC0ke3RoaXMuX3VpZH1gXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzVG9EaXNwbGF5Lmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGhhc0hpbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmhhc01lc3NhZ2VzICYmXG4gICAgICAgICEhdGhpcy5oaW50ICYmXG4gICAgICAgICh0aGlzLnBlcnNpc3RlbnRIaW50IHx8IHRoaXMuaXNGb2N1c2VkKVxuICAgIH0sXG4gICAgaGFzTGFiZWwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhKHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICAvLyBQcm94eSBmb3IgYGxhenlWYWx1ZWBcbiAgICAvLyBUaGlzIGFsbG93cyBhbiBpbnB1dFxuICAgIC8vIHRvIGZ1bmN0aW9uIHdpdGhvdXRcbiAgICAvLyBhIHByb3ZpZGVkIG1vZGVsXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgICAgIHRoaXMuJGVtaXQodGhpcy4kX21vZGVsRXZlbnQsIHZhbClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhIXRoaXMubGF6eVZhbHVlXG4gICAgfSxcbiAgICBpc0xhYmVsQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGlydHlcbiAgICB9LFxuICAgIG1lc3NhZ2VzVG9EaXNwbGF5ICgpOiBzdHJpbmdbXSB7XG4gICAgICBpZiAodGhpcy5oYXNIaW50KSByZXR1cm4gW3RoaXMuaGludF1cblxuICAgICAgaWYgKCF0aGlzLmhhc01lc3NhZ2VzKSByZXR1cm4gW11cblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnMubWFwKCh2YWxpZGF0aW9uOiBzdHJpbmcgfCBJbnB1dFZhbGlkYXRpb25SdWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsaWRhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiB2YWxpZGF0aW9uXG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRpb24odGhpcy5pbnRlcm5hbFZhbHVlKVxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsaWRhdGlvblJlc3VsdCA9PT0gJ3N0cmluZycgPyB2YWxpZGF0aW9uUmVzdWx0IDogJydcbiAgICAgIH0pLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UgIT09ICcnKVxuICAgIH0sXG4gICAgc2hvd0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZURldGFpbHMgPT09IGZhbHNlIHx8ICh0aGlzLmhpZGVEZXRhaWxzID09PSAnYXV0bycgJiYgdGhpcy5oYXNEZXRhaWxzKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyB2LXJhZGlvLWdyb3VwIG5lZWRzIHRvIGVtaXQgYSBkaWZmZXJlbnQgZXZlbnRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzQ3NTJcbiAgICB0aGlzLiRfbW9kZWxFdmVudCA9ICh0aGlzLiRvcHRpb25zLm1vZGVsICYmIHRoaXMuJG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlblByZXBlbmRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuQ29udHJvbCgpLFxuICAgICAgICB0aGlzLmdlbkFwcGVuZFNsb3QoKSxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkNvbnRyb2wgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0X19jb250cm9sJyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5JbnB1dFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5NZXNzYWdlcygpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkljb24gKFxuICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgY2I/OiAoZTogRXZlbnQpID0+IHZvaWQsXG4gICAgICBleHRyYURhdGE6IFZOb2RlRGF0YSA9IHt9XG4gICAgKSB7XG4gICAgICBjb25zdCBpY29uID0gKHRoaXMgYXMgYW55KVtgJHt0eXBlfUljb25gXVxuICAgICAgY29uc3QgZXZlbnROYW1lID0gYGNsaWNrOiR7a2ViYWJDYXNlKHR5cGUpfWBcbiAgICAgIGNvbnN0IGhhc0xpc3RlbmVyID0gISEodGhpcy5saXN0ZW5lcnMkW2V2ZW50TmFtZV0gfHwgY2IpXG5cbiAgICAgIGNvbnN0IGRhdGEgPSBtZXJnZURhdGEoe1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWxhYmVsJzogaGFzTGlzdGVuZXIgPyBrZWJhYkNhc2UodHlwZSkuc3BsaXQoJy0nKVswXSArICcgaWNvbicgOiB1bmRlZmluZWQsXG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICB9LFxuICAgICAgICBvbjogIWhhc0xpc3RlbmVyXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwgZSlcbiAgICAgICAgICAgICAgY2IgJiYgY2IoZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBDb250YWluZXIgaGFzIGcgZXZlbnQgdGhhdCB3aWxsXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG1lbnUgb3BlbiBpZiBlbmNsb3NlZFxuICAgICAgICAgICAgbW91c2V1cDogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICB9LCBleHRyYURhdGEpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1pbnB1dF9faWNvbmAsXG4gICAgICAgIGNsYXNzOiB0eXBlID8gYHYtaW5wdXRfX2ljb24tLSR7a2ViYWJDYXNlKHR5cGUpfWAgOiB1bmRlZmluZWQsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgVkljb24sXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBpY29uXG4gICAgICAgICksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuSW5wdXRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXRfX3Nsb3QnLFxuICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgICBtb3VzZWRvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgbW91c2V1cDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ2lucHV0LXNsb3QnLFxuICAgICAgfSksIFt0aGlzLmdlbkRlZmF1bHRTbG90KCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0xhYmVsKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGFiZWwsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogdGhpcy5oYXNTdGF0ZSxcbiAgICAgICAgICBmb3I6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZNZXNzYWdlcywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNvbG9yOiB0aGlzLmhhc0hpbnQgPyAnJyA6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5tZXNzYWdlc1RvRGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiB0aGlzLmhhc01lc3NhZ2VzID8gJ2FsZXJ0JyA6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogcHJvcHMgPT4gZ2V0U2xvdCh0aGlzLCAnbWVzc2FnZScsIHByb3BzKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5TbG90IChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgICBzbG90OiAoVk5vZGUgfCBWTm9kZVtdKVtdXG4gICAgKSB7XG4gICAgICBpZiAoIXNsb3QubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWYgPSBgJHt0eXBlfS0ke2xvY2F0aW9ufWBcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LWlucHV0X18ke3JlZn1gLFxuICAgICAgICByZWYsXG4gICAgICB9LCBzbG90KVxuICAgIH0sXG4gICAgZ2VuUHJlcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90cy5wcmVwZW5kKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90cy5wcmVwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ3ByZXBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICAvLyBBcHBlbmQgaWNvbiBmb3IgdGV4dCBmaWVsZCB3YXMgcmVhbGx5XG4gICAgICAvLyBhbiBhcHBlbmRlZCBpbm5lciBpY29uLCB2LXRleHQtZmllbGRcbiAgICAgIC8vIHdpbGwgb3ZlcndyaXRlIHRoaXMgbWV0aG9kIGluIG9yZGVyIHRvIG9idGFpblxuICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdFxuICAgICAgaWYgKHRoaXMuJHNsb3RzLmFwcGVuZCkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHMuYXBwZW5kKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBFdmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZURvd24gKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IHRydWVcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLmhhc01vdXNlRG93biA9IGZhbHNlXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZXVwJywgZSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy52YWxpZGF0aW9uU3RhdGUsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dCcsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgIH0pLCB0aGlzLmdlbkNvbnRlbnQoKSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVklucHV0IGZyb20gJy4vVklucHV0J1xuXG5leHBvcnQgeyBWSW5wdXQgfVxuZXhwb3J0IGRlZmF1bHQgVklucHV0XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ2FyZC5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2xvYWRhYmxlJ1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSdcblxuLy8gSGVscGVyc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBMb2FkYWJsZSxcbiAgUm91dGFibGUsXG4gIFZTaGVldFxuKS5leHRlbmQoe1xuICBuYW1lOiAndi1jYXJkJyxcblxuICBwcm9wczoge1xuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgaG92ZXI6IEJvb2xlYW4sXG4gICAgaW1nOiBTdHJpbmcsXG4gICAgbGluazogQm9vbGVhbixcbiAgICBsb2FkZXJIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgcmFpc2VkOiBCb29sZWFuLFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWNhcmQnOiB0cnVlLFxuICAgICAgICAuLi5Sb3V0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtY2FyZC0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtY2FyZC0taG92ZXInOiB0aGlzLmhvdmVyLFxuICAgICAgICAndi1jYXJkLS1saW5rJzogdGhpcy5pc0NsaWNrYWJsZSxcbiAgICAgICAgJ3YtY2FyZC0tbG9hZGluZyc6IHRoaXMubG9hZGluZyxcbiAgICAgICAgJ3YtY2FyZC0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAndi1jYXJkLS1yYWlzZWQnOiB0aGlzLnJhaXNlZCxcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qgc3R5bGU6IERpY3Rpb25hcnk8c3RyaW5nPiA9IHtcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuc3R5bGVzLmNhbGwodGhpcyksXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmltZykge1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7dGhpcy5pbWd9XCIpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXRgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlblByb2dyZXNzICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IExvYWRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5Qcm9ncmVzcy5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghcmVuZGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtY2FyZF9fcHJvZ3Jlc3MnLFxuICAgICAgICBrZXk6ICdwcm9ncmVzcycsXG4gICAgICB9LCBbcmVuZGVyXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLnN0eWxlID0gdGhpcy5zdHlsZXNcblxuICAgIGlmICh0aGlzLmlzQ2xpY2thYmxlKSB7XG4gICAgICBkYXRhLmF0dHJzID0gZGF0YS5hdHRycyB8fCB7fVxuICAgICAgZGF0YS5hdHRycy50YWJpbmRleCA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIGRhdGEpLCBbXG4gICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICB0aGlzLiRzbG90cy5kZWZhdWx0LFxuICAgIF0pXG4gIH0sXG59KVxuIiwiaW1wb3J0ICcuL1ZQcm9ncmVzc0xpbmVhci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQge1xuICBWRmFkZVRyYW5zaXRpb24sXG4gIFZTbGlkZVhUcmFuc2l0aW9uLFxufSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFByb3h5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcHJveHlhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMgfSBmcm9tICd2dWUvdHlwZXMnXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAndG9wJywgJ2JvdHRvbSddKSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kT3BhY2l0eToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBidWZmZXJWYWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEwMCxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA0LFxuICAgIH0sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBxdWVyeTogQm9vbGVhbixcbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3RyZWFtOiBCb29sZWFuLFxuICAgIHN0cmlwZWQ6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVybmFsTGF6eVZhbHVlOiB0aGlzLnZhbHVlIHx8IDAsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgX19jYWNoZWRCYWNrZ3JvdW5kICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19iYWNrZ3JvdW5kJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuYmFja2dyb3VuZFN0eWxlLFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQodGhpcy5jb21wdXRlZFRyYW5zaXRpb24sIFt0aGlzLl9fY2FjaGVkQmFyVHlwZV0pXG4gICAgfSxcbiAgICBfX2NhY2hlZEJhclR5cGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB0aGlzLl9fY2FjaGVkSW5kZXRlcm1pbmF0ZSA6IHRoaXMuX19jYWNoZWREZXRlcm1pbmF0ZVxuICAgIH0sXG4gICAgX19jYWNoZWRCdWZmZXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2J1ZmZlcicsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBfX2NhY2hlZERldGVybWluYXRlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtcHJvZ3Jlc3MtbGluZWFyX19kZXRlcm1pbmF0ZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIF9fY2FjaGVkSW5kZXRlcm1pbmF0ZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZScsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlLS1hY3RpdmUnOiB0aGlzLmFjdGl2ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzc0JhcignbG9uZycpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzQmFyKCdzaG9ydCcpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIF9fY2FjaGVkU3RyZWFtICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgaWYgKCF0aGlzLnN0cmVhbSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fc3RyZWFtJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCgxMDAgLSB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsICclJyksXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGJhY2tncm91bmRTdHlsZSAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gdGhpcy5iYWNrZ3JvdW5kT3BhY2l0eSA9PSBudWxsXG4gICAgICAgID8gKHRoaXMuYmFja2dyb3VuZENvbG9yID8gMSA6IDAuMylcbiAgICAgICAgOiBwYXJzZUZsb2F0KHRoaXMuYmFja2dyb3VuZE9wYWNpdHkpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGJhY2tncm91bmRPcGFjaXR5LFxuICAgICAgICBbdGhpcy5pc1JldmVyc2VkID8gJ3JpZ2h0JyA6ICdsZWZ0J106IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZEJ1ZmZlciAtIHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tYWJzb2x1dGUnOiB0aGlzLmFic29sdXRlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLWZpeGVkJzogdGhpcy5maXhlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1xdWVyeSc6IHRoaXMucXVlcnksXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcmVhY3RpdmUnOiB0aGlzLnJlYWN0aXZlLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJldmVyc2UnOiB0aGlzLmlzUmV2ZXJzZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1zdHJpcGVkJzogdGhpcy5zdHJpcGVkLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogRnVuY3Rpb25hbENvbXBvbmVudE9wdGlvbnMge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IFZGYWRlVHJhbnNpdGlvbiA6IFZTbGlkZVhUcmFuc2l0aW9uXG4gICAgfSxcbiAgICBpc1JldmVyc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bCAhPT0gdGhpcy5yZXZlcnNlXG4gICAgfSxcbiAgICBub3JtYWxpemVkQnVmZmVyICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMuYnVmZmVyVmFsdWUpXG4gICAgfSxcbiAgICBub3JtYWxpemVkVmFsdWUgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5pbnRlcm5hbExhenlWYWx1ZSlcbiAgICB9LFxuICAgIHJlYWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuJGxpc3RlbmVycy5jaGFuZ2UpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzdHlsZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxuXG4gICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHN0eWxlcy5oZWlnaHQgPSAwXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pbmRldGVybWluYXRlICYmIHBhcnNlRmxvYXQodGhpcy5ub3JtYWxpemVkQnVmZmVyKSAhPT0gMTAwKSB7XG4gICAgICAgIHN0eWxlcy53aWR0aCA9IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkQnVmZmVyLCAnJScpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZXNcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90KHRoaXMsICdkZWZhdWx0JywgeyB2YWx1ZTogdGhpcy5pbnRlcm5hbExhenlWYWx1ZSB9KVxuXG4gICAgICBpZiAoIXNsb3QpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2NvbnRlbnQnLFxuICAgICAgfSwgc2xvdClcbiAgICB9LFxuICAgIGdlbkxpc3RlbmVycyAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLiRsaXN0ZW5lcnNcblxuICAgICAgaWYgKHRoaXMucmVhY3RpdmUpIHtcbiAgICAgICAgbGlzdGVuZXJzLmNsaWNrID0gdGhpcy5vbkNsaWNrXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnNcbiAgICB9LFxuICAgIGdlblByb2dyZXNzQmFyIChuYW1lOiAnbG9uZycgfCAnc2hvcnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBbbmFtZV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5yZWFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IGUub2Zmc2V0WCAvIHdpZHRoICogMTAwXG4gICAgfSxcbiAgICBub3JtYWxpemUgKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgIGlmICh2YWx1ZSA8IDApIHJldHVybiAwXG4gICAgICBpZiAodmFsdWUgPiAxMDApIHJldHVybiAxMDBcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyJyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5pbmRldGVybWluYXRlID8gdW5kZWZpbmVkIDogdGhpcy5ub3JtYWxpemVkVmFsdWUsXG4gICAgICB9LFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20gPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuYWN0aXZlID8gY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCkgOiAwLFxuICAgICAgICB0b3A6IHRoaXMudG9wID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5nZW5MaXN0ZW5lcnMoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgdGhpcy5fX2NhY2hlZFN0cmVhbSxcbiAgICAgIHRoaXMuX19jYWNoZWRCYWNrZ3JvdW5kLFxuICAgICAgdGhpcy5fX2NhY2hlZEJ1ZmZlcixcbiAgICAgIHRoaXMuX19jYWNoZWRCYXIsXG4gICAgICB0aGlzLmdlbkNvbnRlbnQoKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZMYWJlbC5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUsIHsgZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyB9IGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1sYWJlbCcsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGFic29sdXRlOiBCb29sZWFuLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBmb2N1c2VkOiBCb29sZWFuLFxuICAgIGZvcjogU3RyaW5nLFxuICAgIGxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgfSxcblxuICByZW5kZXIgKGgsIGN0eCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsaXN0ZW5lcnMsIHByb3BzIH0gPSBjdHhcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWxhYmVsJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LWxhYmVsLS1hY3RpdmUnOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgJ3YtbGFiZWwtLWlzLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIC4uLmZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMoY3R4KSxcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBmb3I6IHByb3BzLmZvcixcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogIXByb3BzLmZvcixcbiAgICAgIH0sXG4gICAgICBvbjogbGlzdGVuZXJzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbGVmdDogY29udmVydFRvVW5pdChwcm9wcy5sZWZ0KSxcbiAgICAgICAgcmlnaHQ6IGNvbnZlcnRUb1VuaXQocHJvcHMucmlnaHQpLFxuICAgICAgICBwb3NpdGlvbjogcHJvcHMuYWJzb2x1dGUgPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJyxcbiAgICAgIH0sXG4gICAgICByZWY6ICdsYWJlbCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2xhYmVsJywgQ29sb3JhYmxlLm9wdGlvbnMubWV0aG9kcy5zZXRUZXh0Q29sb3IocHJvcHMuZm9jdXNlZCAmJiBwcm9wcy5jb2xvciwgZGF0YSksIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCBWTGFiZWwgZnJvbSAnLi9WTGFiZWwnXG5cbmV4cG9ydCB7IFZMYWJlbCB9XG5leHBvcnQgZGVmYXVsdCBWTGFiZWxcbiIsImltcG9ydCBWdWUsIHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyJ1xuXG5pbnRlcmZhY2UgY29sb3JhYmxlIGV4dGVuZHMgVnVlIHtcbiAgY29sb3I/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBMb2FkYWJsZVxuICpcbiAqIEBtaXhpblxuICpcbiAqIFVzZWQgdG8gYWRkIGxpbmVhciBwcm9ncmVzcyBiYXIgdG8gY29tcG9uZW50c1xuICogQ2FuIHVzZSBhIGRlZmF1bHQgYmFyIHdpdGggYSBzcGVjaWZpYyBjb2xvclxuICogb3IgZGVzaWduYXRlIGEgY3VzdG9tIHByb2dyZXNzIGxpbmVhciBiYXJcbiAqL1xuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQ8Y29sb3JhYmxlPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdsb2FkYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbG9hZGVySGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMixcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Qcm9ncmVzcyAoKTogVk5vZGUgfCBWTm9kZVtdIHwgbnVsbCB7XG4gICAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLnByb2dyZXNzIHx8IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlByb2dyZXNzTGluZWFyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICAgICAgY29sb3I6ICh0aGlzLmxvYWRpbmcgPT09IHRydWUgfHwgdGhpcy5sb2FkaW5nID09PSAnJylcbiAgICAgICAgICAgID8gKHRoaXMuY29sb3IgfHwgJ3ByaW1hcnknKVxuICAgICAgICAgICAgOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmxvYWRlckhlaWdodCxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uL3RoZW1lYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uL3JlZ2lzdHJhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGNvbnNvbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBJbnB1dE1lc3NhZ2UsIElucHV0VmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBSZWdpc3RyYWJsZUluamVjdDwnZm9ybScsIGFueT4oJ2Zvcm0nKSxcbiAgVGhlbWVhYmxlLFxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndmFsaWRhdGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZXJyb3I6IEJvb2xlYW4sXG4gICAgZXJyb3JDb3VudDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDEsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBydWxlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRWYWxpZGF0aW9uUnVsZXM+LFxuICAgIHN1Y2Nlc3M6IEJvb2xlYW4sXG4gICAgc3VjY2Vzc01lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgdmFsaWRhdGVPbkJsdXI6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yQnVja2V0OiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgIGhhc0NvbG9yOiBmYWxzZSxcbiAgICAgIGhhc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaGFzSW5wdXQ6IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGlzUmVzZXR0aW5nOiBmYWxzZSxcbiAgICAgIGxhenlWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuY29sb3IpIHJldHVybiB0aGlzLmNvbG9yXG4gICAgICAvLyBJdCdzIGFzc3VtZWQgdGhhdCBpZiB0aGUgaW5wdXQgaXMgb24gYVxuICAgICAgLy8gZGFyayBiYWNrZ3JvdW5kLCB0aGUgdXNlciB3aWxsIHdhbnQgdG9cbiAgICAgIC8vIGhhdmUgYSB3aGl0ZSBjb2xvci4gSWYgdGhlIGVudGlyZSBhcHBcbiAgICAgIC8vIGlzIHNldHVwIHRvIGJlIGRhcmssIHRoZW4gdGhleSB3aWxsXG4gICAgICAvLyBsaWtlIHdhbnQgdG8gdXNlIHRoZWlyIHByaW1hcnkgY29sb3JcbiAgICAgIGlmICh0aGlzLmlzRGFyayAmJiAhdGhpcy5hcHBJc0RhcmspIHJldHVybiAnd2hpdGUnXG4gICAgICBlbHNlIHJldHVybiAncHJpbWFyeSdcbiAgICB9LFxuICAgIGhhc0Vycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5lcnJvckJ1Y2tldC5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuZXJyb3JcbiAgICAgIClcbiAgICB9LFxuICAgIC8vIFRPRE86IEFkZCBsb2dpYyB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYmFzZWRcbiAgICAvLyB1cG9uIGEgZ29vZCB2YWxpZGF0aW9uXG4gICAgaGFzU3VjY2VzcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5zdWNjZXNzXG4gICAgICApXG4gICAgfSxcbiAgICBleHRlcm5hbEVycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwIHx8IHRoaXMuZXJyb3JcbiAgICB9LFxuICAgIGhhc01lc3NhZ2VzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgaGFzU3RhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaGFzU3VjY2VzcyB8fFxuICAgICAgICAodGhpcy5zaG91bGRWYWxpZGF0ZSAmJiB0aGlzLmhhc0Vycm9yKVxuICAgICAgKVxuICAgIH0sXG4gICAgaW50ZXJuYWxFcnJvck1lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuZXJyb3JNZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5tZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsU3VjY2Vzc01lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMuc3VjY2Vzc01lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiB1bmtub3duIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlzYWJsZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgKFxuICAgICAgICAhIXRoaXMuZm9ybSAmJlxuICAgICAgICB0aGlzLmZvcm0uZGlzYWJsZWRcbiAgICAgIClcbiAgICB9LFxuICAgIGlzSW50ZXJhY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seVxuICAgIH0sXG4gICAgaXNSZWFkb25seSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFkb25seSB8fCAoXG4gICAgICAgICEhdGhpcy5mb3JtICYmXG4gICAgICAgIHRoaXMuZm9ybS5yZWFkb25seVxuICAgICAgKVxuICAgIH0sXG4gICAgc2hvdWxkVmFsaWRhdGUgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuZXh0ZXJuYWxFcnJvcikgcmV0dXJuIHRydWVcbiAgICAgIGlmICh0aGlzLmlzUmVzZXR0aW5nKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVPbkJsdXJcbiAgICAgICAgPyB0aGlzLmhhc0ZvY3VzZWQgJiYgIXRoaXMuaXNGb2N1c2VkXG4gICAgICAgIDogKHRoaXMuaGFzSW5wdXQgfHwgdGhpcy5oYXNGb2N1c2VkKVxuICAgIH0sXG4gICAgdmFsaWRhdGlvbnMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQuc2xpY2UoMCwgTnVtYmVyKHRoaXMuZXJyb3JDb3VudCkpXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU3RhdGUgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5oYXNFcnJvciAmJiB0aGlzLnNob3VsZFZhbGlkYXRlKSByZXR1cm4gJ2Vycm9yJ1xuICAgICAgaWYgKHRoaXMuaGFzU3VjY2VzcykgcmV0dXJuICdzdWNjZXNzJ1xuICAgICAgaWYgKHRoaXMuaGFzQ29sb3IpIHJldHVybiB0aGlzLmNvbXB1dGVkQ29sb3JcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbGlkYXRpb25UYXJnZXQgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICh0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN1Y2Nlc3NNZXNzYWdlcyAmJiB0aGlzLnN1Y2Nlc3NNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3VjY2Vzc01lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVzc2FnZXMgJiYgdGhpcy5tZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvckJ1Y2tldFxuICAgICAgfSBlbHNlIHJldHVybiBbXVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBydWxlczoge1xuICAgICAgaGFuZGxlciAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKGRlZXBFcXVhbChuZXdWYWwsIG9sZFZhbCkpIHJldHVyblxuICAgICAgICB0aGlzLnZhbGlkYXRlKClcbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlLFxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZSAoKSB7XG4gICAgICAvLyBJZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIHNldHRpbmcgaW5wdXQsXG4gICAgICAvLyBtYXJrIGl0IHdpdGggaGFzSW5wdXRcbiAgICAgIHRoaXMuaGFzSW5wdXQgPSB0cnVlXG4gICAgICB0aGlzLnZhbGlkYXRlT25CbHVyIHx8IHRoaXMuJG5leHRUaWNrKHRoaXMudmFsaWRhdGUpXG4gICAgfSxcbiAgICBpc0ZvY3VzZWQgKHZhbCkge1xuICAgICAgLy8gU2hvdWxkIG5vdCBjaGVjayB2YWxpZGF0aW9uXG4gICAgICAvLyBpZiBkaXNhYmxlZFxuICAgICAgaWYgKFxuICAgICAgICAhdmFsICYmXG4gICAgICAgICF0aGlzLmlzRGlzYWJsZWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIHRoaXMudmFsaWRhdGVPbkJsdXIgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy52YWxpZGF0ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmVzZXR0aW5nICgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc0lucHV0ID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYXNGb2N1c2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKVxuICAgICAgfSwgMClcbiAgICB9LFxuICAgIGhhc0Vycm9yICh2YWwpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTplcnJvcicsIHZhbClcbiAgICAgIH1cbiAgICB9LFxuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5mb3JtICYmIHRoaXMuZm9ybS5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0udW5yZWdpc3Rlcih0aGlzKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5JbnRlcm5hbE1lc3NhZ2VzIChtZXNzYWdlczogSW5wdXRNZXNzYWdlIHwgbnVsbCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIGlmICghbWVzc2FnZXMpIHJldHVybiBbXVxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlcykpIHJldHVybiBtZXNzYWdlc1xuICAgICAgZWxzZSByZXR1cm4gW21lc3NhZ2VzXVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICB0aGlzLmlzUmVzZXR0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gQXJyYXkuaXNBcnJheSh0aGlzLmludGVybmFsVmFsdWUpXG4gICAgICAgID8gW11cbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgcmVzZXRWYWxpZGF0aW9uICgpIHtcbiAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSB0cnVlXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHZhbGlkYXRlIChmb3JjZSA9IGZhbHNlLCB2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgZXJyb3JCdWNrZXQgPSBbXVxuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLmludGVybmFsVmFsdWVcblxuICAgICAgaWYgKGZvcmNlKSB0aGlzLmhhc0lucHV0ID0gdGhpcy5oYXNGb2N1c2VkID0gdHJ1ZVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5ydWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMucnVsZXNbaW5kZXhdXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicgPyBydWxlKHZhbHVlKSA6IHJ1bGVcblxuICAgICAgICBpZiAodmFsaWQgPT09IGZhbHNlIHx8IHR5cGVvZiB2YWxpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlcnJvckJ1Y2tldC5wdXNoKHZhbGlkIHx8ICcnKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWxpZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgY29uc29sZUVycm9yKGBSdWxlcyBzaG91bGQgcmV0dXJuIGEgc3RyaW5nIG9yIGJvb2xlYW4sIHJlY2VpdmVkICcke3R5cGVvZiB2YWxpZH0nIGluc3RlYWRgLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXJyb3JCdWNrZXQgPSBlcnJvckJ1Y2tldFxuICAgICAgdGhpcy52YWxpZCA9IGVycm9yQnVja2V0Lmxlbmd0aCA9PT0gMFxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZFxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVlRvb2xiYXIgZnJvbSAnLi9WVG9vbGJhcidcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5jb25zdCBWVG9vbGJhclRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX190aXRsZScpXG5jb25zdCBWVG9vbGJhckl0ZW1zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi10b29sYmFyX19pdGVtcycpXG5cbmV4cG9ydCB7XG4gIFZUb29sYmFyLFxuICBWVG9vbGJhckl0ZW1zLFxuICBWVG9vbGJhclRpdGxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVlRvb2xiYXIsXG4gICAgVlRvb2xiYXJJdGVtcyxcbiAgICBWVG9vbGJhclRpdGxlLFxuICB9LFxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkNvdW50ZXIuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgVGhlbWVhYmxlLCB7IGZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY291bnRlcicsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBtYXg6IFtOdW1iZXIsIFN0cmluZ10sXG4gIH0sXG5cbiAgcmVuZGVyIChoLCBjdHgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gY3R4XG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQocHJvcHMubWF4LCAxMClcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHByb3BzLnZhbHVlLCAxMClcbiAgICBjb25zdCBjb250ZW50ID0gbWF4ID8gYCR7dmFsdWV9IC8gJHttYXh9YCA6IFN0cmluZyhwcm9wcy52YWx1ZSlcbiAgICBjb25zdCBpc0dyZWF0ZXIgPSBtYXggJiYgKHZhbHVlID4gbWF4KVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1jb3VudGVyJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdlcnJvci0tdGV4dCc6IGlzR3JlYXRlcixcbiAgICAgICAgLi4uZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyhjdHgpLFxuICAgICAgfSxcbiAgICB9LCBjb250ZW50KVxuICB9LFxufSlcbiIsImltcG9ydCBWQ291bnRlciBmcm9tICcuL1ZDb3VudGVyJ1xuXG5leHBvcnQgeyBWQ291bnRlciB9XG5leHBvcnQgZGVmYXVsdCBWQ291bnRlclxuIiwiLy8gRGlyZWN0aXZlc1xuaW1wb3J0IEludGVyc2VjdCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ludGVyc2VjdCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb25zb2xlV2FybiB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlcnNlY3RhYmxlIChvcHRpb25zOiB7IG9uVmlzaWJsZTogc3RyaW5nW10gfSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgISgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykpIHtcbiAgICAvLyBkbyBub3RoaW5nIGJlY2F1c2UgaW50ZXJzZWN0aW9uIG9ic2VydmVyIGlzIG5vdCBhdmFpbGFibGVcbiAgICByZXR1cm4gVnVlLmV4dGVuZCh7IG5hbWU6ICdpbnRlcnNlY3RhYmxlJyB9KVxuICB9XG5cbiAgcmV0dXJuIFZ1ZS5leHRlbmQoe1xuICAgIG5hbWU6ICdpbnRlcnNlY3RhYmxlJyxcblxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0Lmluc2VydGVkKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50LCB7XG4gICAgICAgIG5hbWU6ICdpbnRlcnNlY3QnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vbk9ic2VydmUsXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZXN0cm95ZWQgKCkge1xuICAgICAgSW50ZXJzZWN0LnVuYmluZCh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudClcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25PYnNlcnZlIChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciwgaXNJbnRlcnNlY3Rpbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFpc0ludGVyc2VjdGluZykgcmV0dXJuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG9wdGlvbnMub25WaXNpYmxlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAodGhpcyBhcyBhbnkpW29wdGlvbnMub25WaXNpYmxlW2ldXVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlV2FybihvcHRpb25zLm9uVmlzaWJsZVtpXSArICcgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUgb24gdGhlIGluc3RhbmNlIGJ1dCByZWZlcmVuY2VkIGluIGludGVyc2VjdGFibGUgbWl4aW4gb3B0aW9ucycpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUZXh0RmllbGQuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi9WSW5wdXQnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWQ291bnRlciBmcm9tICcuLi9WQ291bnRlcidcbmltcG9ydCBWTGFiZWwgZnJvbSAnLi4vVkxhYmVsJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBJbnRlcnNlY3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9pbnRlcnNlY3RhYmxlJ1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4uLy4uL21peGlucy9sb2FkYWJsZSdcbmltcG9ydCBWYWxpZGF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdmFsaWRhdGFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCByaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwga2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBicmVha2luZywgY29uc29sZVdhcm4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgVk5vZGUsIFByb3BUeXBlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBWSW5wdXQsXG4gIEludGVyc2VjdGFibGUoe1xuICAgIG9uVmlzaWJsZTogW1xuICAgICAgJ3NldExhYmVsV2lkdGgnLFxuICAgICAgJ3NldFByZWZpeFdpZHRoJyxcbiAgICAgICdzZXRQcmVwZW5kV2lkdGgnLFxuICAgICAgJ3RyeUF1dG9mb2N1cycsXG4gICAgXSxcbiAgfSksXG4gIExvYWRhYmxlLFxuKVxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJHJlZnM6IHtcbiAgICBsYWJlbDogSFRNTEVsZW1lbnRcbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICAgICdwcmVwZW5kLWlubmVyJzogSFRNTEVsZW1lbnRcbiAgICBwcmVmaXg6IEhUTUxFbGVtZW50XG4gICAgc3VmZml4OiBIVE1MRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGRpcnR5VHlwZXMgPSBbJ2NvbG9yJywgJ2ZpbGUnLCAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ3dlZWsnLCAnbW9udGgnXVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi10ZXh0LWZpZWxkJyxcblxuICBkaXJlY3RpdmVzOiB7IHJpcHBsZSB9LFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRPdXRlckljb246IFN0cmluZyxcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgIGNsZWFySWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjbGVhcicsXG4gICAgfSxcbiAgICBjb3VudGVyOiBbQm9vbGVhbiwgTnVtYmVyLCBTdHJpbmddLFxuICAgIGNvdW50ZXJWYWx1ZTogRnVuY3Rpb24gYXMgUHJvcFR5cGU8KHZhbHVlOiBhbnkpID0+IG51bWJlcj4sXG4gICAgZmlsbGVkOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgZnVsbFdpZHRoOiBCb29sZWFuLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBwcmVmaXg6IFN0cmluZyxcbiAgICBwcmVwZW5kSW5uZXJJY29uOiBTdHJpbmcsXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHNoYXBlZDogQm9vbGVhbixcbiAgICBzaW5nbGVMaW5lOiBCb29sZWFuLFxuICAgIHNvbG86IEJvb2xlYW4sXG4gICAgc29sb0ludmVydGVkOiBCb29sZWFuLFxuICAgIHN1ZmZpeDogU3RyaW5nLFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYmFkSW5wdXQ6IGZhbHNlLFxuICAgIGxhYmVsV2lkdGg6IDAsXG4gICAgcHJlZml4V2lkdGg6IDAsXG4gICAgcHJlcGVuZFdpZHRoOiAwLFxuICAgIGluaXRpYWxWYWx1ZTogbnVsbCxcbiAgICBpc0Jvb3RlZDogZmFsc2UsXG4gICAgaXNDbGVhcmluZzogZmFsc2UsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZCc6IHRydWUsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWZ1bGwtd2lkdGgnOiB0aGlzLmZ1bGxXaWR0aCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcHJlZml4JzogdGhpcy5wcmVmaXgsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNpbmdsZS1saW5lJzogdGhpcy5pc1NpbmdsZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sbyc6IHRoaXMuaXNTb2xvLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvLWludmVydGVkJzogdGhpcy5zb2xvSW52ZXJ0ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZmlsbGVkJzogdGhpcy5maWxsZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWlzLWJvb3RlZCc6IHRoaXMuaXNCb290ZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWVuY2xvc2VkJzogdGhpcy5pc0VuY2xvc2VkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1yZXZlcnNlJzogdGhpcy5yZXZlcnNlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1vdXRsaW5lZCc6IHRoaXMub3V0bGluZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc2hhcGVkJzogdGhpcy5zaGFwZWQsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgY29uc3QgY29tcHV0ZWRDb2xvciA9IFZhbGlkYXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb2xvci5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghdGhpcy5zb2xvSW52ZXJ0ZWQgfHwgIXRoaXMuaXNGb2N1c2VkKSByZXR1cm4gY29tcHV0ZWRDb2xvclxuXG4gICAgICByZXR1cm4gdGhpcy5jb2xvciB8fCAncHJpbWFyeSdcbiAgICB9LFxuICAgIGNvbXB1dGVkQ291bnRlclZhbHVlICgpOiBudW1iZXIge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvdW50ZXJWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyVmFsdWUodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmludGVybmFsVmFsdWUgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoXG4gICAgfSxcbiAgICBoYXNDb3VudGVyICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvdW50ZXIgIT09IGZhbHNlICYmIHRoaXMuY291bnRlciAhPSBudWxsXG4gICAgfSxcbiAgICBoYXNEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5jb21wdXRlZC5oYXNEZXRhaWxzLmNhbGwodGhpcykgfHwgdGhpcy5oYXNDb3VudGVyXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmxhenlWYWx1ZSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZT8udG9TdHJpbmcoKS5sZW5ndGggPiAwIHx8IHRoaXMuYmFkSW5wdXRcbiAgICB9LFxuICAgIGlzRW5jbG9zZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5maWxsZWQgfHxcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5vdXRsaW5lZFxuICAgICAgKVxuICAgIH0sXG4gICAgaXNMYWJlbEFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RpcnR5IHx8IGRpcnR5VHlwZXMuaW5jbHVkZXModGhpcy50eXBlKVxuICAgIH0sXG4gICAgaXNTaW5nbGUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pc1NvbG8gfHxcbiAgICAgICAgdGhpcy5zaW5nbGVMaW5lIHx8XG4gICAgICAgIHRoaXMuZnVsbFdpZHRoIHx8XG4gICAgICAgIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jZmlsbGVkLXRleHQtZmllbGRcbiAgICAgICAgKHRoaXMuZmlsbGVkICYmICF0aGlzLmhhc0xhYmVsKVxuICAgICAgKVxuICAgIH0sXG4gICAgaXNTb2xvICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNvbG8gfHwgdGhpcy5zb2xvSW52ZXJ0ZWRcbiAgICB9LFxuICAgIGxhYmVsUG9zaXRpb24gKCk6IFJlY29yZDwnbGVmdCcgfCAncmlnaHQnLCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+IHtcbiAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5wcmVmaXggJiYgIXRoaXMubGFiZWxWYWx1ZSkgPyB0aGlzLnByZWZpeFdpZHRoIDogMFxuXG4gICAgICBpZiAodGhpcy5sYWJlbFZhbHVlICYmIHRoaXMucHJlcGVuZFdpZHRoKSBvZmZzZXQgLT0gdGhpcy5wcmVwZW5kV2lkdGhcblxuICAgICAgcmV0dXJuICh0aGlzLiR2dWV0aWZ5LnJ0bCA9PT0gdGhpcy5yZXZlcnNlKSA/IHtcbiAgICAgICAgbGVmdDogb2Zmc2V0LFxuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgfSA6IHtcbiAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICByaWdodDogb2Zmc2V0LFxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0xhYmVsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0xhYmVsICYmICghdGhpcy5pc1NpbmdsZSB8fCAoIXRoaXMuaXNMYWJlbEFjdGl2ZSAmJiAhdGhpcy5wbGFjZWhvbGRlcikpXG4gICAgfSxcbiAgICBsYWJlbFZhbHVlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc1NpbmdsZSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNMYWJlbEFjdGl2ZSB8fCB0aGlzLnBsYWNlaG9sZGVyKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBsYWJlbFZhbHVlOiAnc2V0TGFiZWxXaWR0aCcsXG4gICAgb3V0bGluZWQ6ICdzZXRMYWJlbFdpZHRoJyxcbiAgICBsYWJlbCAoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljayh0aGlzLnNldExhYmVsV2lkdGgpXG4gICAgfSxcbiAgICBwcmVmaXggKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5zZXRQcmVmaXhXaWR0aClcbiAgICB9LFxuICAgIGlzRm9jdXNlZDogJ3VwZGF0ZVZhbHVlJyxcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2JveCcpKSB7XG4gICAgICBicmVha2luZygnYm94JywgJ2ZpbGxlZCcsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ2Jyb3dzZXItYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGJyZWFraW5nKCdicm93c2VyLWF1dG9jb21wbGV0ZScsICdhdXRvY29tcGxldGUnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0aGlzLnNoYXBlZCAmJiAhKHRoaXMuZmlsbGVkIHx8IHRoaXMub3V0bGluZWQgfHwgdGhpcy5pc1NvbG8pKSB7XG4gICAgICBjb25zb2xlV2Fybignc2hhcGVkIHNob3VsZCBiZSB1c2VkIHdpdGggZWl0aGVyIGZpbGxlZCBvciBvdXRsaW5lZCcsIHRoaXMpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuYXV0b2ZvY3VzICYmIHRoaXMudHJ5QXV0b2ZvY3VzKClcbiAgICB0aGlzLnNldExhYmVsV2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlZml4V2lkdGgoKVxuICAgIHRoaXMuc2V0UHJlcGVuZFdpZHRoKClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gKHRoaXMuaXNCb290ZWQgPSB0cnVlKSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBmb2N1cyAoKSB7XG4gICAgICB0aGlzLm9uRm9jdXMoKVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICBibHVyIChlPzogRXZlbnQpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvNTkxM1xuICAgICAgLy8gU2FmYXJpIHRhYiBvcmRlciBnZXRzIGJyb2tlbiBpZiBjYWxsZWQgc3luY2hyb25vdXNcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuYmx1cigpXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xlYXJhYmxlQ2FsbGJhY2sgKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuaW50ZXJuYWxWYWx1ZSA9IG51bGwpXG4gICAgfSxcbiAgICBnZW5BcHBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ2FwcGVuZC1vdXRlciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kLW91dGVyJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRPdXRlckljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kT3V0ZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlblByZXBlbmRJbm5lclNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1sncHJlcGVuZC1pbm5lciddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlcGVuZElubmVySWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdwcmVwZW5kSW5uZXInKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgncHJlcGVuZCcsICdpbm5lcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5JY29uU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydhcHBlbmQnXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ2FwcGVuZCddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXRTbG90LmNhbGwodGhpcylcblxuICAgICAgY29uc3QgcHJlcGVuZCA9IHRoaXMuZ2VuUHJlcGVuZElubmVyU2xvdCgpXG5cbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIGlucHV0LmNoaWxkcmVuID0gaW5wdXQuY2hpbGRyZW4gfHwgW11cbiAgICAgICAgaW5wdXQuY2hpbGRyZW4udW5zaGlmdChwcmVwZW5kKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9LFxuICAgIGdlbkNsZWFySWNvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuY2xlYXJhYmxlKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5pc0RpcnR5ID8gdW5kZWZpbmVkIDogeyBhdHRyczogeyBkaXNhYmxlZDogdHJ1ZSB9IH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ2lubmVyJywgW1xuICAgICAgICB0aGlzLmdlbkljb24oJ2NsZWFyJywgdGhpcy5jbGVhcmFibGVDYWxsYmFjaywgZGF0YSksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQ291bnRlciAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzQ291bnRlcikgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5jb3VudGVyID09PSB0cnVlID8gdGhpcy5hdHRycyQubWF4bGVuZ3RoIDogdGhpcy5jb3VudGVyXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZDb3VudGVyLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIG1heCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5jb21wdXRlZENvdW50ZXJWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5Db250cm9sICgpIHtcbiAgICAgIHJldHVybiBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbkNvbnRyb2wuY2FsbCh0aGlzKVxuICAgIH0sXG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5GaWVsZHNldCgpLFxuICAgICAgICB0aGlzLmdlblRleHRGaWVsZFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5DbGVhckljb24oKSxcbiAgICAgICAgdGhpcy5nZW5JY29uU2xvdCgpLFxuICAgICAgICB0aGlzLmdlblByb2dyZXNzKCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5GaWVsZHNldCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSwgW3RoaXMuZ2VuTGVnZW5kKCldKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dMYWJlbCkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNlZDogIXRoaXMuaXNTaW5nbGUgJiYgKHRoaXMuaXNGb2N1c2VkIHx8ICEhdGhpcy52YWxpZGF0aW9uU3RhdGUpLFxuICAgICAgICAgIGZvcjogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIGxlZnQ6IHRoaXMubGFiZWxQb3NpdGlvbi5sZWZ0LFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIHJpZ2h0OiB0aGlzLmxhYmVsUG9zaXRpb24ucmlnaHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubGFiZWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxhYmVsLCBkYXRhLCB0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgZ2VuTGVnZW5kICgpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gIXRoaXMuc2luZ2xlTGluZSAmJiAodGhpcy5sYWJlbFZhbHVlIHx8IHRoaXMuaXNEaXJ0eSkgPyB0aGlzLmxhYmVsV2lkdGggOiAwXG4gICAgICBjb25zdCBzcGFuID0gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiAnJiM4MjAzOycgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdsZWdlbmQnLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6ICF0aGlzLmlzU2luZ2xlID8gY29udmVydFRvVW5pdCh3aWR0aCkgOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9LCBbc3Bhbl0pXG4gICAgfSxcbiAgICBnZW5JbnB1dCAoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpc3RlbmVycyQpXG4gICAgICBkZWxldGUgbGlzdGVuZXJzWydjaGFuZ2UnXSAvLyBDaGFuZ2Ugc2hvdWxkIG5vdCBiZSBib3VuZCBleHRlcm5hbGx5XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnbnVtYmVyJyAmJiBPYmplY3QuaXModGhpcy5sYXp5VmFsdWUsIC0wKSkgPyAnLTAnIDogdGhpcy5sYXp5VmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLi4udGhpcy5hdHRycyQsXG4gICAgICAgICAgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcmVhZG9ubHk6IHRoaXMuaXNSZWFkb25seSxcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiBPYmplY3QuYXNzaWduKGxpc3RlbmVycywge1xuICAgICAgICAgIGJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICAgIGlucHV0OiB0aGlzLm9uSW5wdXQsXG4gICAgICAgICAgZm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgfSksXG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0RldGFpbHMpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzTm9kZSA9IFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuTWVzc2FnZXMuY2FsbCh0aGlzKVxuICAgICAgY29uc3QgY291bnRlck5vZGUgPSB0aGlzLmdlbkNvdW50ZXIoKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fZGV0YWlscycsXG4gICAgICB9LCBbXG4gICAgICAgIG1lc3NhZ2VzTm9kZSxcbiAgICAgICAgY291bnRlck5vZGUsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuVGV4dEZpZWxkU2xvdCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGV4dC1maWVsZF9fc2xvdCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgICAgdGhpcy5wcmVmaXggPyB0aGlzLmdlbkFmZml4KCdwcmVmaXgnKSA6IG51bGwsXG4gICAgICAgIHRoaXMuZ2VuSW5wdXQoKSxcbiAgICAgICAgdGhpcy5zdWZmaXggPyB0aGlzLmdlbkFmZml4KCdzdWZmaXgnKSA6IG51bGwsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuQWZmaXggKHR5cGU6ICdwcmVmaXgnIHwgJ3N1ZmZpeCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBgdi10ZXh0LWZpZWxkX18ke3R5cGV9YCxcbiAgICAgICAgcmVmOiB0eXBlLFxuICAgICAgfSwgdGhpc1t0eXBlXSlcbiAgICB9LFxuICAgIG9uQmx1ciAoZT86IEV2ZW50KSB7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgICBlICYmIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuJGVtaXQoJ2JsdXInLCBlKSlcbiAgICB9LFxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkIHx8IHRoaXMuaXNEaXNhYmxlZCB8fCAhdGhpcy4kcmVmcy5pbnB1dCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgIH0sXG4gICAgb25Gb2N1cyAoZT86IEV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuaW5wdXQpIHJldHVyblxuXG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy4kcmVmcy5pbnB1dCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlXG4gICAgICAgIGUgJiYgdGhpcy4kZW1pdCgnZm9jdXMnLCBlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25JbnB1dCAoZTogRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgdGhpcy5iYWRJbnB1dCA9IHRhcmdldC52YWxpZGl0eSAmJiB0YXJnZXQudmFsaWRpdHkuYmFkSW5wdXRcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIpIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuaW50ZXJuYWxWYWx1ZSlcblxuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlRG93biAoZTogRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgaW5wdXQgZnJvbSBiZWluZyBibHVycmVkXG4gICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuJHJlZnMuaW5wdXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgVklucHV0Lm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlRG93bi5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlVXAgKGU6IEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5oYXNNb3VzZURvd24pIHRoaXMuZm9jdXMoKVxuXG4gICAgICBWSW5wdXQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VVcC5jYWxsKHRoaXMsIGUpXG4gICAgfSxcbiAgICBzZXRMYWJlbFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMubGFiZWxXaWR0aCA9IHRoaXMuJHJlZnMubGFiZWxcbiAgICAgICAgPyBNYXRoLm1pbih0aGlzLiRyZWZzLmxhYmVsLnNjcm9sbFdpZHRoICogMC43NSArIDYsICh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudCkub2Zmc2V0V2lkdGggLSAyNClcbiAgICAgICAgOiAwXG4gICAgfSxcbiAgICBzZXRQcmVmaXhXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMucHJlZml4KSByZXR1cm5cblxuICAgICAgdGhpcy5wcmVmaXhXaWR0aCA9IHRoaXMuJHJlZnMucHJlZml4Lm9mZnNldFdpZHRoXG4gICAgfSxcbiAgICBzZXRQcmVwZW5kV2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkIHx8ICF0aGlzLiRyZWZzWydwcmVwZW5kLWlubmVyJ10pIHJldHVyblxuXG4gICAgICB0aGlzLnByZXBlbmRXaWR0aCA9IHRoaXMuJHJlZnNbJ3ByZXBlbmQtaW5uZXInXS5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgdHJ5QXV0b2ZvY3VzICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuYXV0b2ZvY3VzIHx8XG4gICAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaW5wdXQgfHxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgKSByZXR1cm4gZmFsc2VcblxuICAgICAgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICB1cGRhdGVWYWx1ZSAodmFsOiBib29sZWFuKSB7XG4gICAgICAvLyBTZXRzIHZhbGlkYXRpb25TdGF0ZSBmcm9tIHZhbGlkYXRhYmxlXG4gICAgICB0aGlzLmhhc0NvbG9yID0gdmFsXG5cbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5sYXp5VmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5sYXp5VmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVlByb2dyZXNzTGluZWFyIGZyb20gJy4vVlByb2dyZXNzTGluZWFyJ1xuXG5leHBvcnQgeyBWUHJvZ3Jlc3NMaW5lYXIgfVxuZXhwb3J0IGRlZmF1bHQgVlByb2dyZXNzTGluZWFyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ2NvbXBhcmFibGUnLFxuICBwcm9wczoge1xuICAgIHZhbHVlQ29tcGFyYXRvcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBkZWVwRXF1YWwsXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPHR5cGVvZiBkZWVwRXF1YWw+LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZNZW51LnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFZUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vVlRoZW1lUHJvdmlkZXInXG5cbi8vIE1peGluc1xuaW1wb3J0IEFjdGl2YXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9hY3RpdmF0YWJsZSdcbmltcG9ydCBEZWxheWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2RlbGF5YWJsZSdcbmltcG9ydCBEZXBlbmRlbnQgZnJvbSAnLi4vLi4vbWl4aW5zL2RlcGVuZGVudCdcbmltcG9ydCBEZXRhY2hhYmxlIGZyb20gJy4uLy4uL21peGlucy9kZXRhY2hhYmxlJ1xuaW1wb3J0IE1lbnVhYmxlIGZyb20gJy4uLy4uL21peGlucy9tZW51YWJsZSdcbmltcG9ydCBSZXR1cm5hYmxlIGZyb20gJy4uLy4uL21peGlucy9yZXR1cm5hYmxlJ1xuaW1wb3J0IFJvdW5kYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91bmRhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlJ1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgcmVtb3ZlZCB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGtleUNvZGVzLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUsIFZOb2RlRGF0YSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgRGVwZW5kZW50LFxuICBEZWxheWFibGUsXG4gIERldGFjaGFibGUsXG4gIE1lbnVhYmxlLFxuICBSZXR1cm5hYmxlLFxuICBSb3VuZGFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIFRoZW1lYWJsZVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1tZW51JyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc0luTWVudTogdHJ1ZSxcbiAgICAgIC8vIFBhc3MgdGhlbWUgdGhyb3VnaCB0byBkZWZhdWx0IHNsb3RcbiAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgIH1cbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgQ2xpY2tPdXRzaWRlLFxuICAgIFJlc2l6ZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGF1dG86IEJvb2xlYW4sXG4gICAgY2xvc2VPbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZGlzYWJsZUtleXM6IEJvb2xlYW4sXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgb2Zmc2V0WDogQm9vbGVhbixcbiAgICBvZmZzZXRZOiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5PbkhvdmVyOiBCb29sZWFuLFxuICAgIG9yaWdpbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RvcCBsZWZ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ3YtbWVudS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWxjdWxhdGVkVG9wQXV0bzogMCxcbiAgICAgIGRlZmF1bHRPZmZzZXQ6IDgsXG4gICAgICBoYXNKdXN0Rm9jdXNlZDogZmFsc2UsXG4gICAgICBsaXN0SW5kZXg6IC0xLFxuICAgICAgcmVzaXplVGltZW91dDogMCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgIHRpbGVzOiBbXSBhcyBIVE1MRWxlbWVudFtdLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGFjdGl2ZVRpbGUgKCk6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XVxuICAgIH0sXG4gICAgY2FsY3VsYXRlZExlZnQgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBtZW51V2lkdGggPSBNYXRoLm1heCh0aGlzLmRpbWVuc2lvbnMuY29udGVudC53aWR0aCwgcGFyc2VGbG9hdCh0aGlzLmNhbGN1bGF0ZWRNaW5XaWR0aCkpXG5cbiAgICAgIGlmICghdGhpcy5hdXRvKSByZXR1cm4gdGhpcy5jYWxjTGVmdChtZW51V2lkdGgpIHx8ICcwJ1xuXG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmNhbGNYT3ZlcmZsb3codGhpcy5jYWxjTGVmdEF1dG8oKSwgbWVudVdpZHRoKSkgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4SGVpZ2h0ICgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hdXRvXG4gICAgICAgID8gJzIwMHB4J1xuICAgICAgICA6IGNvbnZlcnRUb1VuaXQodGhpcy5tYXhIZWlnaHQpXG5cbiAgICAgIHJldHVybiBoZWlnaHQgfHwgJzAnXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTWF4V2lkdGggKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLm1heFdpZHRoKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRNaW5XaWR0aCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLm1pbldpZHRoKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMubWluV2lkdGgpIHx8ICcwJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWluKFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yLndpZHRoICtcbiAgICAgICAgTnVtYmVyKHRoaXMubnVkZ2VXaWR0aCkgK1xuICAgICAgICAodGhpcy5hdXRvID8gMTYgOiAwKSxcbiAgICAgICAgTWF0aC5tYXgodGhpcy5wYWdlV2lkdGggLSAyNCwgMClcbiAgICAgIClcblxuICAgICAgY29uc3QgY2FsY3VsYXRlZE1heFdpZHRoID0gaXNOYU4ocGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpKVxuICAgICAgICA/IG1pbldpZHRoXG4gICAgICAgIDogcGFyc2VJbnQodGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgpXG5cbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KE1hdGgubWluKFxuICAgICAgICBjYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIG1pbldpZHRoXG4gICAgICApKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRUb3AgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCB0b3AgPSAhdGhpcy5hdXRvXG4gICAgICAgID8gdGhpcy5jYWxjVG9wKClcbiAgICAgICAgOiBjb252ZXJ0VG9Vbml0KHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNhbGN1bGF0ZWRUb3BBdXRvKSlcblxuICAgICAgcmV0dXJuIHRvcCB8fCAnMCdcbiAgICB9LFxuICAgIGhhc0NsaWNrYWJsZVRpbGVzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudGlsZXMuZmluZCh0aWxlID0+IHRpbGUudGFiSW5kZXggPiAtMSkpXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuY2FsY3VsYXRlZE1heEhlaWdodCxcbiAgICAgICAgbWluV2lkdGg6IHRoaXMuY2FsY3VsYXRlZE1pbldpZHRoLFxuICAgICAgICBtYXhXaWR0aDogdGhpcy5jYWxjdWxhdGVkTWF4V2lkdGgsXG4gICAgICAgIHRvcDogdGhpcy5jYWxjdWxhdGVkVG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLmNhbGN1bGF0ZWRMZWZ0LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICB6SW5kZXg6IHRoaXMuekluZGV4IHx8IHRoaXMuYWN0aXZlWkluZGV4LFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZSAodmFsKSB7XG4gICAgICBpZiAoIXZhbCkgdGhpcy5saXN0SW5kZXggPSAtMVxuICAgIH0sXG4gICAgaXNDb250ZW50QWN0aXZlICh2YWwpIHtcbiAgICAgIHRoaXMuaGFzSnVzdEZvY3VzZWQgPSB2YWxcbiAgICB9LFxuICAgIGxpc3RJbmRleCAobmV4dCwgcHJldikge1xuICAgICAgaWYgKG5leHQgaW4gdGhpcy50aWxlcykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1tuZXh0XVxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zY3JvbGxUb3AgPSB0aWxlLm9mZnNldFRvcCAtIHRpbGUuY2xpZW50SGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHByZXYgaW4gdGhpcy50aWxlcyAmJlxuICAgICAgICB0aGlzLnRpbGVzW3ByZXZdLmNsYXNzTGlzdC5yZW1vdmUoJ3YtbGlzdC1pdGVtLS1oaWdobGlnaHRlZCcpXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnZnVsbC13aWR0aCcpKSB7XG4gICAgICByZW1vdmVkKCdmdWxsLXdpZHRoJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLmNhbGxBY3RpdmF0ZSgpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgIC8vIFVwZGF0ZSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucyBvZiBtZW51XG4gICAgICAvLyBhbmQgaXRzIGFjdGl2YXRvclxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICAgIC8vIFN0YXJ0IHRoZSB0cmFuc2l0aW9uXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAvLyBPbmNlIHRyYW5zaXRpb25pbmcsIGNhbGN1bGF0ZSBzY3JvbGwgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICB0aGlzLnN0YXJ0VHJhbnNpdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFRvcEF1dG8gPSB0aGlzLmNhbGNUb3BBdXRvKClcbiAgICAgICAgICAgIHRoaXMuYXV0byAmJiAodGhpcy4kcmVmcy5jb250ZW50LnNjcm9sbFRvcCA9IHRoaXMuY2FsY1Njcm9sbFBvc2l0aW9uKCkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNhbGNTY3JvbGxQb3NpdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2ZVRpbGUgPSAkZWwucXVlcnlTZWxlY3RvcignLnYtbGlzdC1pdGVtLS1hY3RpdmUnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgbWF4U2Nyb2xsVG9wID0gJGVsLnNjcm9sbEhlaWdodCAtICRlbC5vZmZzZXRIZWlnaHRcblxuICAgICAgcmV0dXJuIGFjdGl2ZVRpbGVcbiAgICAgICAgPyBNYXRoLm1pbihtYXhTY3JvbGxUb3AsIE1hdGgubWF4KDAsIGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gJGVsLm9mZnNldEhlaWdodCAvIDIgKyBhY3RpdmVUaWxlLm9mZnNldEhlaWdodCAvIDIpKVxuICAgICAgICA6ICRlbC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGNhbGNMZWZ0QXV0byAoKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvci5sZWZ0IC0gdGhpcy5kZWZhdWx0T2Zmc2V0ICogMilcbiAgICB9LFxuICAgIGNhbGNUb3BBdXRvICgpIHtcbiAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgY29uc3QgYWN0aXZlVGlsZSA9ICRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0tLWFjdGl2ZScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuXG4gICAgICBpZiAoIWFjdGl2ZVRpbGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vZmZzZXRZIHx8ICFhY3RpdmVUaWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IEFycmF5LmZyb20odGhpcy50aWxlcykuaW5kZXhPZihhY3RpdmVUaWxlKVxuXG4gICAgICBjb25zdCB0aWxlRGlzdGFuY2VGcm9tTWVudVRvcCA9IGFjdGl2ZVRpbGUub2Zmc2V0VG9wIC0gdGhpcy5jYWxjU2Nyb2xsUG9zaXRpb24oKVxuICAgICAgY29uc3QgZmlyc3RUaWxlT2Zmc2V0VG9wID0gKCRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0nKSBhcyBIVE1MRWxlbWVudCkub2Zmc2V0VG9wXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVG9wIC0gdGlsZURpc3RhbmNlRnJvbU1lbnVUb3AgLSBmaXJzdFRpbGVPZmZzZXRUb3AgLSAxXG4gICAgfSxcbiAgICBjaGFuZ2VMaXN0SW5kZXggKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIC8vIEZvciBpbmZpbml0ZSBzY3JvbGwgYW5kIGF1dG9jb21wbGV0ZSwgcmUtZXZhbHVhdGUgY2hpbGRyZW5cbiAgICAgIHRoaXMuZ2V0VGlsZXMoKVxuXG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgIXRoaXMuaGFzQ2xpY2thYmxlVGlsZXMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMudGFiKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5kb3duKSB7XG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLnVwKSB7XG4gICAgICAgIHRoaXMucHJldlRpbGUoKVxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyICYmIHRoaXMubGlzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4XS5jbGljaygpXG4gICAgICB9IGVsc2UgeyByZXR1cm4gfVxuICAgICAgLy8gT25lIG9mIHRoZSBjb25kaXRpb25zIHdhcyBtZXQsIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKCMyOTg4KVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSxcbiAgICBjbG9zZUNvbmRpdGlvbmFsIChlOiBFdmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgIXRoaXMuX2lzRGVzdHJveWVkICYmXG4gICAgICAgIHRoaXMuY2xvc2VPbkNsaWNrICYmXG4gICAgICAgICF0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnModGFyZ2V0KVxuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yQXR0cmlidXRlcyAoKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckF0dHJpYnV0ZXMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVUaWxlICYmIHRoaXMuYWN0aXZlVGlsZS5pZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IHRoaXMuYWN0aXZlVGlsZS5pZCxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlc1xuICAgIH0sXG4gICAgZ2VuQWN0aXZhdG9yTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IE1lbnVhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JMaXN0ZW5lcnMuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZUtleXMpIHtcbiAgICAgICAgbGlzdGVuZXJzLmtleWRvd24gPSB0aGlzLm9uS2V5RG93blxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZW5Db250ZW50KClcblxuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBjb250ZW50XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sIFtjb250ZW50XSlcbiAgICB9LFxuICAgIGdlbkRpcmVjdGl2ZXMgKCk6IFZOb2RlRGlyZWN0aXZlW10ge1xuICAgICAgY29uc3QgZGlyZWN0aXZlczogVk5vZGVEaXJlY3RpdmVbXSA9IFt7XG4gICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuaXNDb250ZW50QWN0aXZlLFxuICAgICAgfV1cblxuICAgICAgLy8gRG8gbm90IGFkZCBjbGljayBvdXRzaWRlIGZvciBob3ZlciBtZW51XG4gICAgICBpZiAoIXRoaXMub3Blbk9uSG92ZXIgJiYgdGhpcy5jbG9zZU9uQ2xpY2spIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnY2xpY2stb3V0c2lkZScsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0sXG4gICAgICAgICAgICBjbG9zZUNvbmRpdGlvbmFsOiB0aGlzLmNsb3NlQ29uZGl0aW9uYWwsXG4gICAgICAgICAgICBpbmNsdWRlOiAoKSA9PiBbdGhpcy4kZWwsIC4uLnRoaXMuZ2V0T3BlbkRlcGVuZGVudEVsZW1lbnRzKCldLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RpdmVzXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLnRoaXMuZ2V0U2NvcGVJZEF0dHJzKCksXG4gICAgICAgICAgcm9sZTogJ3JvbGUnIGluIHRoaXMuJGF0dHJzID8gdGhpcy4kYXR0cnMucm9sZSA6ICdtZW51JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIC4uLnRoaXMucm9vdFRoZW1lQ2xhc3NlcyxcbiAgICAgICAgICAuLi50aGlzLnJvdW5kZWRDbGFzc2VzLFxuICAgICAgICAgICd2LW1lbnVfX2NvbnRlbnQtLWF1dG8nOiB0aGlzLmF1dG8sXG4gICAgICAgICAgJ3YtbWVudV9fY29udGVudC0tZml4ZWQnOiB0aGlzLmFjdGl2YXRvckZpeGVkLFxuICAgICAgICAgIG1lbnVhYmxlX19jb250ZW50X19hY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICAgW3RoaXMuY29udGVudENsYXNzLnRyaW0oKV06IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5nZW5EaXJlY3RpdmVzKCksXG4gICAgICAgIHJlZjogJ2NvbnRlbnQnLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlT25Db250ZW50Q2xpY2spIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIH0sXG4gICAgICB9IGFzIFZOb2RlRGF0YVxuXG4gICAgICBpZiAodGhpcy4kbGlzdGVuZXJzLnNjcm9sbCkge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLnNjcm9sbCA9IHRoaXMuJGxpc3RlbmVycy5zY3JvbGxcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMub3Blbk9uSG92ZXIpIHtcbiAgICAgICAgb3B0aW9ucy5vbiA9IG9wdGlvbnMub24gfHwge31cbiAgICAgICAgb3B0aW9ucy5vbi5tb3VzZWVudGVyID0gdGhpcy5tb3VzZUVudGVySGFuZGxlclxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcGVuT25Ib3Zlcikge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLm1vdXNlbGVhdmUgPSB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCBvcHRpb25zLCB0aGlzLmdldENvbnRlbnRTbG90KCkpXG4gICAgfSxcbiAgICBnZXRUaWxlcyAoKSB7XG4gICAgICBpZiAoIXRoaXMuJHJlZnMuY29udGVudCkgcmV0dXJuXG5cbiAgICAgIHRoaXMudGlsZXMgPSBBcnJheS5mcm9tKHRoaXMuJHJlZnMuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1saXN0LWl0ZW0nKSlcbiAgICB9LFxuICAgIG1vdXNlRW50ZXJIYW5kbGVyICgpIHtcbiAgICAgIHRoaXMucnVuRGVsYXkoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0p1c3RGb2N1c2VkKSByZXR1cm5cblxuICAgICAgICB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIG1vdXNlTGVhdmVIYW5kbGVyIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgcmUtYWN0aXZhdGlvblxuICAgICAgdGhpcy5ydW5EZWxheSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbnRlbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkgcmV0dXJuXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgICAgICB0aGlzLmNhbGxEZWFjdGl2YXRlKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBuZXh0VGlsZSAoKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleCArIDFdXG5cbiAgICAgIGlmICghdGlsZSkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgICB0aGlzLmxpc3RJbmRleCA9IC0xXG4gICAgICAgIHRoaXMubmV4dFRpbGUoKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RJbmRleCsrXG4gICAgICBpZiAodGlsZS50YWJJbmRleCA9PT0gLTEpIHRoaXMubmV4dFRpbGUoKVxuICAgIH0sXG4gICAgcHJldlRpbGUgKCkge1xuICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXggLSAxXVxuXG4gICAgICBpZiAoIXRpbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5saXN0SW5kZXggPSB0aGlzLnRpbGVzLmxlbmd0aFxuICAgICAgICB0aGlzLnByZXZUaWxlKClcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0SW5kZXgtLVxuICAgICAgaWYgKHRpbGUudGFiSW5kZXggPT09IC0xKSB0aGlzLnByZXZUaWxlKClcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGRlcGVuZGVudCBlbGVtZW50cyB0byBjbG9zZSBmaXJzdFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvciA9IHRoaXMuZ2V0QWN0aXZhdG9yKClcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gYWN0aXZhdG9yICYmIGFjdGl2YXRvci5mb2N1cygpKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXRoaXMuaXNBY3RpdmUgJiZcbiAgICAgICAgW2tleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duXS5pbmNsdWRlcyhlLmtleUNvZGUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gQWxsb3cgZm9yIGlzQWN0aXZlIHdhdGNoZXIgdG8gZ2VuZXJhdGUgdGlsZSBsaXN0XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLmNoYW5nZUxpc3RJbmRleChlKSlcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIHNjcmVlbiByZXNpemVcbiAgICAgIC8vIGFuZCBvcmllbnRhdGlvbiBjaGFuZ2VcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcblxuICAgICAgLy8gV2hlbiByZXNpemluZyB0byBhIHNtYWxsZXIgd2lkdGhcbiAgICAgIC8vIGNvbnRlbnQgd2lkdGggaXMgZXZhbHVhdGVkIGJlZm9yZVxuICAgICAgLy8gdGhlIG5ldyBhY3RpdmF0b3Igd2lkdGggaGFzIGJlZW5cbiAgICAgIC8vIHNldCwgY2F1c2luZyBpdCB0byBub3Qgc2l6ZSBwcm9wZXJseVxuICAgICAgLy8gaGFja3kgYnV0IHdpbGwgcmV2aXNpdCBpbiB0aGUgZnV0dXJlXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KVxuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy51cGRhdGVEaW1lbnNpb25zLCAxMDApXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tZW51JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd2LW1lbnUtLWF0dGFjaGVkJzpcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gJycgfHxcbiAgICAgICAgICB0aGlzLmF0dGFjaCA9PT0gdHJ1ZSB8fFxuICAgICAgICAgIHRoaXMuYXR0YWNoID09PSAnYXR0YWNoJyxcbiAgICAgIH0sXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBhcmc6ICc1MDAnLFxuICAgICAgICBuYW1lOiAncmVzaXplJyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25SZXNpemUsXG4gICAgICB9XSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW1xuICAgICAgIXRoaXMuYWN0aXZhdG9yICYmIHRoaXMuZ2VuQWN0aXZhdG9yKCksXG4gICAgICB0aGlzLnNob3dMYXp5Q29udGVudCgoKSA9PiBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRoZW1lUHJvdmlkZXIsIHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIFt0aGlzLmdlblRyYW5zaXRpb24oKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gTWl4aW5zXG5pbXBvcnQgUG9zaXRpb25hYmxlIGZyb20gJy4uL3Bvc2l0aW9uYWJsZSdcbmltcG9ydCBTdGFja2FibGUgZnJvbSAnLi4vc3RhY2thYmxlJ1xuaW1wb3J0IEFjdGl2YXRhYmxlIGZyb20gJy4uL2FjdGl2YXRhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMsIHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLy8gVHlwZXNcbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFN0YWNrYWJsZSxcbiAgUG9zaXRpb25hYmxlLFxuICBBY3RpdmF0YWJsZVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgYXR0YWNoOiBib29sZWFuIHwgc3RyaW5nIHwgRWxlbWVudFxuICBvZmZzZXRZOiBib29sZWFuXG4gIG9mZnNldFg6IGJvb2xlYW5cbiAgJHJlZnM6IHtcbiAgICBjb250ZW50OiBIVE1MRWxlbWVudFxuICAgIGFjdGl2YXRvcjogSFRNTEVsZW1lbnRcbiAgfVxufVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAnbWVudWFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgYWxsb3dPdmVyZmxvdzogQm9vbGVhbixcbiAgICBsaWdodDogQm9vbGVhbixcbiAgICBkYXJrOiBCb29sZWFuLFxuICAgIG1heFdpZHRoOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgbWluV2lkdGg6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgbnVkZ2VCb3R0b206IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VMZWZ0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG51ZGdlUmlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VUb3A6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VXaWR0aDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBvZmZzZXRPdmVyZmxvdzogQm9vbGVhbixcbiAgICBvcGVuT25DbGljazogQm9vbGVhbixcbiAgICBwb3NpdGlvblg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBwb3NpdGlvblk6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBhYnNvbHV0ZVg6IDAsXG4gICAgYWJzb2x1dGVZOiAwLFxuICAgIGFjdGl2YXRlZEJ5OiBudWxsIGFzIEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBhY3RpdmF0b3JGaXhlZDogZmFsc2UsXG4gICAgZGltZW5zaW9uczoge1xuICAgICAgYWN0aXZhdG9yOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0VG9wOiAwLFxuICAgICAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgICAgIG9mZnNldExlZnQ6IDAsXG4gICAgICB9LFxuICAgICAgY29udGVudDoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGhhc0p1c3RGb2N1c2VkOiBmYWxzZSxcbiAgICBoYXNXaW5kb3c6IGZhbHNlLFxuICAgIGlucHV0QWN0aXZhdG9yOiBmYWxzZSxcbiAgICBpc0NvbnRlbnRBY3RpdmU6IGZhbHNlLFxuICAgIHBhZ2VXaWR0aDogMCxcbiAgICBwYWdlWU9mZnNldDogMCxcbiAgICBzdGFja0NsYXNzOiAndi1tZW51X19jb250ZW50LS1hY3RpdmUnLFxuICAgIHN0YWNrTWluWkluZGV4OiA2LFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkTGVmdCAoKSB7XG4gICAgICBjb25zdCBhID0gdGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvclxuICAgICAgY29uc3QgYyA9IHRoaXMuZGltZW5zaW9ucy5jb250ZW50XG4gICAgICBjb25zdCBhY3RpdmF0b3JMZWZ0ID0gKHRoaXMuYXR0YWNoICE9PSBmYWxzZSA/IGEub2Zmc2V0TGVmdCA6IGEubGVmdCkgfHwgMFxuICAgICAgY29uc3QgbWluV2lkdGggPSBNYXRoLm1heChhLndpZHRoLCBjLndpZHRoKVxuICAgICAgbGV0IGxlZnQgPSAwXG4gICAgICBsZWZ0ICs9IHRoaXMubGVmdCA/IGFjdGl2YXRvckxlZnQgLSAobWluV2lkdGggLSBhLndpZHRoKSA6IGFjdGl2YXRvckxlZnRcbiAgICAgIGlmICh0aGlzLm9mZnNldFgpIHtcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSBpc05hTihOdW1iZXIodGhpcy5tYXhXaWR0aCkpXG4gICAgICAgICAgPyBhLndpZHRoXG4gICAgICAgICAgOiBNYXRoLm1pbihhLndpZHRoLCBOdW1iZXIodGhpcy5tYXhXaWR0aCkpXG5cbiAgICAgICAgbGVmdCArPSB0aGlzLmxlZnQgPyAtbWF4V2lkdGggOiBhLndpZHRoXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5udWRnZUxlZnQpIGxlZnQgLT0gcGFyc2VJbnQodGhpcy5udWRnZUxlZnQpXG4gICAgICBpZiAodGhpcy5udWRnZVJpZ2h0KSBsZWZ0ICs9IHBhcnNlSW50KHRoaXMubnVkZ2VSaWdodClcblxuICAgICAgcmV0dXJuIGxlZnRcbiAgICB9LFxuICAgIGNvbXB1dGVkVG9wICgpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnRcbiAgICAgIGxldCB0b3AgPSAwXG5cbiAgICAgIGlmICh0aGlzLnRvcCkgdG9wICs9IGEuaGVpZ2h0IC0gYy5oZWlnaHRcbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHRvcCArPSBhLm9mZnNldFRvcFxuICAgICAgZWxzZSB0b3AgKz0gYS50b3AgKyB0aGlzLnBhZ2VZT2Zmc2V0XG4gICAgICBpZiAodGhpcy5vZmZzZXRZKSB0b3AgKz0gdGhpcy50b3AgPyAtYS5oZWlnaHQgOiBhLmhlaWdodFxuICAgICAgaWYgKHRoaXMubnVkZ2VUb3ApIHRvcCAtPSBwYXJzZUludCh0aGlzLm51ZGdlVG9wKVxuICAgICAgaWYgKHRoaXMubnVkZ2VCb3R0b20pIHRvcCArPSBwYXJzZUludCh0aGlzLm51ZGdlQm90dG9tKVxuXG4gICAgICByZXR1cm4gdG9wXG4gICAgfSxcbiAgICBoYXNBY3RpdmF0b3IgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHMuYWN0aXZhdG9yIHx8ICEhdGhpcy4kc2NvcGVkU2xvdHMuYWN0aXZhdG9yIHx8ICEhdGhpcy5hY3RpdmF0b3IgfHwgISF0aGlzLmlucHV0QWN0aXZhdG9yXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGRpc2FibGVkICh2YWwpIHtcbiAgICAgIHZhbCAmJiB0aGlzLmNhbGxEZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGlzQWN0aXZlICh2YWwpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm5cblxuICAgICAgdmFsID8gdGhpcy5jYWxsQWN0aXZhdGUoKSA6IHRoaXMuY2FsbERlYWN0aXZhdGUoKVxuICAgIH0sXG4gICAgcG9zaXRpb25YOiAndXBkYXRlRGltZW5zaW9ucycsXG4gICAgcG9zaXRpb25ZOiAndXBkYXRlRGltZW5zaW9ucycsXG4gIH0sXG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIHRoaXMuaGFzV2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYWJzb2x1dGVQb3NpdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXRUb3A6IDAsXG4gICAgICAgIG9mZnNldExlZnQ6IDAsXG4gICAgICAgIHNjcm9sbEhlaWdodDogMCxcbiAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uWSB8fCB0aGlzLmFic29sdXRlWSxcbiAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uWSB8fCB0aGlzLmFic29sdXRlWSxcbiAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvblggfHwgdGhpcy5hYnNvbHV0ZVgsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uWCB8fCB0aGlzLmFic29sdXRlWCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2YXRlICgpIHt9LFxuICAgIGNhbGNMZWZ0IChtZW51V2lkdGg6IG51bWJlcikge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5hdHRhY2ggIT09IGZhbHNlXG4gICAgICAgID8gdGhpcy5jb21wdXRlZExlZnRcbiAgICAgICAgOiB0aGlzLmNhbGNYT3ZlcmZsb3codGhpcy5jb21wdXRlZExlZnQsIG1lbnVXaWR0aCkpXG4gICAgfSxcbiAgICBjYWxjVG9wICgpIHtcbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMuYXR0YWNoICE9PSBmYWxzZVxuICAgICAgICA/IHRoaXMuY29tcHV0ZWRUb3BcbiAgICAgICAgOiB0aGlzLmNhbGNZT3ZlcmZsb3codGhpcy5jb21wdXRlZFRvcCkpXG4gICAgfSxcbiAgICBjYWxjWE92ZXJmbG93IChsZWZ0OiBudW1iZXIsIG1lbnVXaWR0aDogbnVtYmVyKSB7XG4gICAgICBjb25zdCB4T3ZlcmZsb3cgPSBsZWZ0ICsgbWVudVdpZHRoIC0gdGhpcy5wYWdlV2lkdGggKyAxMlxuXG4gICAgICBpZiAoKCF0aGlzLmxlZnQgfHwgdGhpcy5yaWdodCkgJiYgeE92ZXJmbG93ID4gMCkge1xuICAgICAgICBsZWZ0ID0gTWF0aC5tYXgobGVmdCAtIHhPdmVyZmxvdywgMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0LCAxMilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxlZnQgKyB0aGlzLmdldE9mZnNldExlZnQoKVxuICAgIH0sXG4gICAgY2FsY1lPdmVyZmxvdyAodG9wOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpXG4gICAgICBjb25zdCB0b1RvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyBkb2N1bWVudEhlaWdodFxuICAgICAgY29uc3QgYWN0aXZhdG9yID0gdGhpcy5kaW1lbnNpb25zLmFjdGl2YXRvclxuICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IHRoaXMuZGltZW5zaW9ucy5jb250ZW50LmhlaWdodFxuICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0b3AgKyBjb250ZW50SGVpZ2h0XG4gICAgICBjb25zdCBpc092ZXJmbG93aW5nID0gdG9Ub3AgPCB0b3RhbEhlaWdodFxuXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyBib3R0b20gYW5kIG9mZnNldFxuICAgICAgLy8gVE9ETzogc2V0ICdib3R0b20nIHBvc2l0aW9uIGluc3RlYWQgb2YgJ3RvcCdcbiAgICAgIGlmIChpc092ZXJmbG93aW5nICYmXG4gICAgICAgIHRoaXMub2Zmc2V0T3ZlcmZsb3cgJiZcbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2ggcm9vbSB0byBvZmZzZXRcbiAgICAgICAgLy8gdGhlIG92ZXJmbG93LCBkb24ndCBvZmZzZXRcbiAgICAgICAgYWN0aXZhdG9yLnRvcCA+IGNvbnRlbnRIZWlnaHRcbiAgICAgICkge1xuICAgICAgICB0b3AgPSB0aGlzLnBhZ2VZT2Zmc2V0ICsgKGFjdGl2YXRvci50b3AgLSBjb250ZW50SGVpZ2h0KVxuICAgICAgLy8gSWYgb3ZlcmZsb3dpbmcgYm90dG9tXG4gICAgICB9IGVsc2UgaWYgKGlzT3ZlcmZsb3dpbmcgJiYgIXRoaXMuYWxsb3dPdmVyZmxvdykge1xuICAgICAgICB0b3AgPSB0b1RvcCAtIGNvbnRlbnRIZWlnaHQgLSAxMlxuICAgICAgLy8gSWYgb3ZlcmZsb3dpbmcgdG9wXG4gICAgICB9IGVsc2UgaWYgKHRvcCA8IHRoaXMucGFnZVlPZmZzZXQgJiYgIXRoaXMuYWxsb3dPdmVyZmxvdykge1xuICAgICAgICB0b3AgPSB0aGlzLnBhZ2VZT2Zmc2V0ICsgMTJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvcCA8IDEyID8gMTIgOiB0b3BcbiAgICB9LFxuICAgIGNhbGxBY3RpdmF0ZSAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm5cblxuICAgICAgdGhpcy5hY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBjYWxsRGVhY3RpdmF0ZSAoKSB7XG4gICAgICB0aGlzLmlzQ29udGVudEFjdGl2ZSA9IGZhbHNlXG5cbiAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBjaGVja0ZvclBhZ2VZT2Zmc2V0ICgpIHtcbiAgICAgIGlmICh0aGlzLmhhc1dpbmRvdykge1xuICAgICAgICB0aGlzLnBhZ2VZT2Zmc2V0ID0gdGhpcy5hY3RpdmF0b3JGaXhlZCA/IDAgOiB0aGlzLmdldE9mZnNldFRvcCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja0FjdGl2YXRvckZpeGVkICgpIHtcbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHJldHVyblxuICAgICAgbGV0IGVsID0gdGhpcy5nZXRBY3RpdmF0b3IoKVxuICAgICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRvckZpeGVkID0gdHJ1ZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2YXRvckZpeGVkID0gZmFsc2VcbiAgICB9LFxuICAgIGRlYWN0aXZhdGUgKCkge30sXG4gICAgZ2VuQWN0aXZhdG9yTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEFjdGl2YXRhYmxlLm9wdGlvbnMubWV0aG9kcy5nZW5BY3RpdmF0b3JMaXN0ZW5lcnMuY2FsbCh0aGlzKVxuXG4gICAgICBjb25zdCBvbkNsaWNrID0gbGlzdGVuZXJzLmNsaWNrXG5cbiAgICAgIGxpc3RlbmVycy5jbGljayA9IChlOiBNb3VzZUV2ZW50ICYgS2V5Ym9hcmRFdmVudCAmIEZvY3VzRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3Blbk9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrICYmIG9uQ2xpY2soZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWJzb2x1dGVYID0gZS5jbGllbnRYXG4gICAgICAgIHRoaXMuYWJzb2x1dGVZID0gZS5jbGllbnRZXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnNcbiAgICB9LFxuICAgIGdldElubmVySGVpZ2h0ICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH0sXG4gICAgZ2V0T2Zmc2V0TGVmdCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VYT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgfSxcbiAgICBnZXRPZmZzZXRUb3AgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfSxcbiAgICBnZXRSb3VuZGVkQm91bmRlZENsaWVudFJlY3QgKGVsOiBFbGVtZW50KSB7XG4gICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogTWF0aC5yb3VuZChyZWN0LnRvcCksXG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQocmVjdC5sZWZ0KSxcbiAgICAgICAgYm90dG9tOiBNYXRoLnJvdW5kKHJlY3QuYm90dG9tKSxcbiAgICAgICAgcmlnaHQ6IE1hdGgucm91bmQocmVjdC5yaWdodCksXG4gICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKHJlY3Qud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQocmVjdC5oZWlnaHQpLFxuICAgICAgfVxuICAgIH0sXG4gICAgbWVhc3VyZSAoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoIWVsIHx8ICF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0Um91bmRlZEJvdW5kZWRDbGllbnRSZWN0KGVsKVxuXG4gICAgICAvLyBBY2NvdW50IGZvciBhY3RpdmF0b3IgbWFyZ2luXG4gICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG5cbiAgICAgICAgcmVjdC5sZWZ0ID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCEpXG4gICAgICAgIHJlY3QudG9wID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luVG9wISlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlY3RcbiAgICB9LFxuICAgIHNuZWFrUGVlayAoY2I6ICgpID0+IHZvaWQpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy4kcmVmcy5jb250ZW50XG5cbiAgICAgICAgaWYgKCFlbCB8fCBlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICBjYigpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgY2IoKVxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgc3RhcnRUcmFuc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gdGhpcy5oYXNKdXN0Rm9jdXNlZCA9IHRoaXMuaXNBY3RpdmVcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KSlcbiAgICB9LFxuICAgIHVwZGF0ZURpbWVuc2lvbnMgKCkge1xuICAgICAgdGhpcy5oYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgdGhpcy5jaGVja0FjdGl2YXRvckZpeGVkKClcbiAgICAgIHRoaXMuY2hlY2tGb3JQYWdlWU9mZnNldCgpXG4gICAgICB0aGlzLnBhZ2VXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuXG4gICAgICBjb25zdCBkaW1lbnNpb25zOiBhbnkgPSB7XG4gICAgICAgIGFjdGl2YXRvcjogeyAuLi50aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yIH0sXG4gICAgICAgIGNvbnRlbnQ6IHsgLi4udGhpcy5kaW1lbnNpb25zLmNvbnRlbnQgfSxcbiAgICAgIH1cblxuICAgICAgLy8gQWN0aXZhdG9yIHNob3VsZCBhbHJlYWR5IGJlIHNob3duXG4gICAgICBpZiAoIXRoaXMuaGFzQWN0aXZhdG9yIHx8IHRoaXMuYWJzb2x1dGUpIHtcbiAgICAgICAgZGltZW5zaW9ucy5hY3RpdmF0b3IgPSB0aGlzLmFic29sdXRlUG9zaXRpb24oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYWN0aXZhdG9yID0gdGhpcy5nZXRBY3RpdmF0b3IoKVxuICAgICAgICBpZiAoIWFjdGl2YXRvcikgcmV0dXJuXG5cbiAgICAgICAgZGltZW5zaW9ucy5hY3RpdmF0b3IgPSB0aGlzLm1lYXN1cmUoYWN0aXZhdG9yKVxuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRMZWZ0ID0gYWN0aXZhdG9yLm9mZnNldExlZnRcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkge1xuICAgICAgICAgIC8vIGFjY291bnQgZm9yIGNzcyBwYWRkaW5nIGNhdXNpbmcgdGhpbmdzIHRvIG5vdCBsaW5lIHVwXG4gICAgICAgICAgLy8gdGhpcyBpcyBtb3N0bHkgZm9yIHYtYXV0b2NvbXBsZXRlLCBob3BlZnVsbHkgaXQgd29uJ3QgYnJlYWsgYW55dGhpbmdcbiAgICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRUb3AgPSBhY3RpdmF0b3Iub2Zmc2V0VG9wXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGltZW5zaW9ucy5hY3RpdmF0b3Iub2Zmc2V0VG9wID0gMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIERpc3BsYXkgYW5kIGhpZGUgdG8gZ2V0IGRpbWVuc2lvbnNcbiAgICAgIHRoaXMuc25lYWtQZWVrKCgpID0+IHtcbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50ICYmIChkaW1lbnNpb25zLmNvbnRlbnQgPSB0aGlzLm1lYXN1cmUodGhpcy4kcmVmcy5jb250ZW50KSlcblxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndHJhbnNpdGlvbmFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZTogU3RyaW5nLFxuICAgIG9yaWdpbjogU3RyaW5nLFxuICAgIHRyYW5zaXRpb246IFN0cmluZyxcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKSxcbiAgICBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpLFxuICAgIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGNhY2hlID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGNhY2hlIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gY2FjaGUuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhY2hlID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0Z1bGxdIFNwZWNpZnkgYSBjbG9uZSBpbmNsdWRpbmcgc3ltYm9scy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICBpZiAoaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZU9iamVjdChpc0Z1bmMgPyB7fSA6IHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmICghaXNBcnIpIHtcbiAgICB2YXIgcHJvcHMgPSBpc0Z1bGwgPyBnZXRBbGxLZXlzKHZhbHVlKSA6IGtleXModmFsdWUpO1xuICB9XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG90eXBlIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNyZWF0ZShwcm90bykge1xuICByZXR1cm4gaXNPYmplY3QocHJvdG8pID8gb2JqZWN0Q3JlYXRlKHByb3RvKSA6IHt9O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGJ1ZmZlci5sZW5ndGgpO1xuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIHRydWUpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCB0cnVlKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgPyBzb3VyY2Vba2V5XSA6IG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9sIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9sIHByb3BlcnRpZXMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSBuYXRpdmVHZXRTeW1ib2xzID8gb3ZlckFyZyhuYXRpdmVHZXRTeW1ib2xzLCBPYmplY3QpIDogc3R1YkFycmF5O1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEsXG4vLyBmb3IgZGF0YSB2aWV3cyBpbiBFZGdlIDwgMTQsIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzLlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVldpbmRvdy5zYXNzJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFZOb2RlRGlyZWN0aXZlIH0gZnJvbSAndnVlL3R5cGVzL3Zub2RlJ1xuaW1wb3J0IHsgUHJvcFR5cGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBUb3VjaEhhbmRsZXJzIH0gZnJvbSAndnVldGlmeS90eXBlcydcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFRvdWNoIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWQnRuIGZyb20gJy4uL1ZCdG4nXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5pbXBvcnQgeyBCYXNlSXRlbUdyb3VwIH0gZnJvbSAnLi4vVkl0ZW1Hcm91cC9WSXRlbUdyb3VwJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgQmFzZUl0ZW1Hcm91cC5leHRlbmQoe1xuICBuYW1lOiAndi13aW5kb3cnLFxuXG4gIHByb3ZpZGUgKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbmRvd0dyb3VwOiB0aGlzLFxuICAgIH1cbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7IFRvdWNoIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3Ytd2luZG93LWl0ZW0tLWFjdGl2ZScsXG4gICAgfSxcbiAgICBjb250aW51b3VzOiBCb29sZWFuLFxuICAgIG1hbmRhdG9yeToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBuZXh0SWNvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnJG5leHQnLFxuICAgIH0sXG4gICAgcHJldkljb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJyRwcmV2JyxcbiAgICB9LFxuICAgIHJldmVyc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBzaG93QXJyb3dzOiBCb29sZWFuLFxuICAgIHNob3dBcnJvd3NPbkhvdmVyOiBCb29sZWFuLFxuICAgIHRvdWNoOiBPYmplY3QgYXMgUHJvcFR5cGU8VG91Y2hIYW5kbGVycz4sXG4gICAgdG91Y2hsZXNzOiBCb29sZWFuLFxuICAgIHZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbmdlZEJ5RGVsaW1pdGVyczogZmFsc2UsXG4gICAgICBpbnRlcm5hbEhlaWdodDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IHN0cmluZywgLy8gVGhpcyBjYW4gYmUgZml4ZWQgYnkgY2hpbGQgY2xhc3MuXG4gICAgICB0cmFuc2l0aW9uSGVpZ2h0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgc3RyaW5nLCAvLyBJbnRlcm1lZGlhdGUgaGVpZ2h0IGR1cmluZyB0cmFuc2l0aW9uLlxuICAgICAgdHJhbnNpdGlvbkNvdW50OiAwLCAvLyBOdW1iZXIgb2Ygd2luZG93cyBpbiB0cmFuc2l0aW9uIHN0YXRlLlxuICAgICAgaXNCb290ZWQ6IGZhbHNlLFxuICAgICAgaXNSZXZlcnNlOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0FjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uQ291bnQgPiAwXG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uQmFzZUl0ZW1Hcm91cC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3Ytd2luZG93LS1zaG93LWFycm93cy1vbi1ob3Zlcic6IHRoaXMuc2hvd0Fycm93c09uSG92ZXIsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zaXRpb24gKCk6IHN0cmluZyB7XG4gICAgICBpZiAoIXRoaXMuaXNCb290ZWQpIHJldHVybiAnJ1xuXG4gICAgICBjb25zdCBheGlzID0gdGhpcy52ZXJ0aWNhbCA/ICd5JyA6ICd4J1xuICAgICAgY29uc3QgcmV2ZXJzZSA9IHRoaXMuJHZ1ZXRpZnkucnRsICYmIGF4aXMgPT09ICd4JyA/ICF0aGlzLmludGVybmFsUmV2ZXJzZSA6IHRoaXMuaW50ZXJuYWxSZXZlcnNlXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSByZXZlcnNlID8gJy1yZXZlcnNlJyA6ICcnXG5cbiAgICAgIHJldHVybiBgdi13aW5kb3ctJHtheGlzfSR7ZGlyZWN0aW9ufS10cmFuc2l0aW9uYFxuICAgIH0sXG4gICAgaGFzQWN0aXZlSXRlbXMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICAgIHRoaXMuaXRlbXMuZmluZChpdGVtID0+ICFpdGVtLmRpc2FibGVkKVxuICAgICAgKVxuICAgIH0sXG4gICAgaGFzTmV4dCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzIHx8IHRoaXMuaW50ZXJuYWxJbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoIC0gMVxuICAgIH0sXG4gICAgaGFzUHJldiAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzIHx8IHRoaXMuaW50ZXJuYWxJbmRleCA+IDBcbiAgICB9LFxuICAgIGludGVybmFsSW5kZXggKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kSW5kZXgoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxWYWx1ZSA9PT0gdGhpcy5nZXRWYWx1ZShpdGVtLCBpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVybmFsUmV2ZXJzZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5yZXZlcnNlID8gIXRoaXMuaXNSZXZlcnNlIDogdGhpcy5pc1JldmVyc2VcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaW50ZXJuYWxJbmRleDogJ3VwZGF0ZVJldmVyc2UnLFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gKHRoaXMuaXNCb290ZWQgPSB0cnVlKSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGFpbmVyICgpOiBWTm9kZSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFt0aGlzLiRzbG90cy5kZWZhdWx0XVxuXG4gICAgICBpZiAodGhpcy5zaG93QXJyb3dzKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5nZW5Db250cm9sSWNvbnMoKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXdpbmRvd19fY29udGFpbmVyJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi13aW5kb3dfX2NvbnRhaW5lci0taXMtYWN0aXZlJzogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuaW50ZXJuYWxIZWlnaHQgfHwgdGhpcy50cmFuc2l0aW9uSGVpZ2h0LFxuICAgICAgICB9LFxuICAgICAgfSwgY2hpbGRyZW4pXG4gICAgfSxcbiAgICBnZW5JY29uIChcbiAgICAgIGRpcmVjdGlvbjogJ3ByZXYnIHwgJ25leHQnLFxuICAgICAgaWNvbjogc3RyaW5nLFxuICAgICAgZm46ICgpID0+IHZvaWRcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi13aW5kb3dfXyR7ZGlyZWN0aW9ufWAsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkJ0biwge1xuICAgICAgICAgIHByb3BzOiB7IGljb246IHRydWUgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLiR2dWV0aWZ5LmxhbmcudChgJHZ1ZXRpZnkuY2Fyb3VzZWwuJHtkaXJlY3Rpb259YCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkQnlEZWxpbWl0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICBmbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIFtcbiAgICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB7XG4gICAgICAgICAgICBwcm9wczogeyBsYXJnZTogdHJ1ZSB9LFxuICAgICAgICAgIH0sIGljb24pLFxuICAgICAgICBdKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5Db250cm9sSWNvbnMgKCkge1xuICAgICAgY29uc3QgaWNvbnMgPSBbXVxuXG4gICAgICBjb25zdCBwcmV2SWNvbiA9IHRoaXMuJHZ1ZXRpZnkucnRsXG4gICAgICAgID8gdGhpcy5uZXh0SWNvblxuICAgICAgICA6IHRoaXMucHJldkljb25cblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oYXNQcmV2ICYmXG4gICAgICAgIHByZXZJY29uICYmXG4gICAgICAgIHR5cGVvZiBwcmV2SWNvbiA9PT0gJ3N0cmluZydcbiAgICAgICkge1xuICAgICAgICBjb25zdCBpY29uID0gdGhpcy5nZW5JY29uKCdwcmV2JywgcHJldkljb24sIHRoaXMucHJldilcbiAgICAgICAgaWNvbiAmJiBpY29ucy5wdXNoKGljb24pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5leHRJY29uID0gdGhpcy4kdnVldGlmeS5ydGxcbiAgICAgICAgPyB0aGlzLnByZXZJY29uXG4gICAgICAgIDogdGhpcy5uZXh0SWNvblxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmhhc05leHQgJiZcbiAgICAgICAgbmV4dEljb24gJiZcbiAgICAgICAgdHlwZW9mIG5leHRJY29uID09PSAnc3RyaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSB0aGlzLmdlbkljb24oJ25leHQnLCBuZXh0SWNvbiwgdGhpcy5uZXh0KVxuICAgICAgICBpY29uICYmIGljb25zLnB1c2goaWNvbilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGljb25zXG4gICAgfSxcbiAgICBnZXROZXh0SW5kZXggKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gKGluZGV4ICsgMSkgJSB0aGlzLml0ZW1zLmxlbmd0aFxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbbmV4dEluZGV4XVxuXG4gICAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuZ2V0TmV4dEluZGV4KG5leHRJbmRleClcblxuICAgICAgcmV0dXJuIG5leHRJbmRleFxuICAgIH0sXG4gICAgZ2V0UHJldkluZGV4IChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IChpbmRleCArIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkgJSB0aGlzLml0ZW1zLmxlbmd0aFxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbcHJldkluZGV4XVxuXG4gICAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuZ2V0UHJldkluZGV4KHByZXZJbmRleClcblxuICAgICAgcmV0dXJuIHByZXZJbmRleFxuICAgIH0sXG4gICAgbmV4dCAoKSB7XG4gICAgICB0aGlzLmlzUmV2ZXJzZSA9IHRoaXMuJHZ1ZXRpZnkucnRsXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZUl0ZW1zIHx8ICF0aGlzLmhhc05leHQpIHJldHVyblxuXG4gICAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmdldE5leHRJbmRleCh0aGlzLmludGVybmFsSW5kZXgpXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tuZXh0SW5kZXhdXG5cbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoaXRlbSwgbmV4dEluZGV4KVxuICAgIH0sXG4gICAgcHJldiAoKSB7XG4gICAgICB0aGlzLmlzUmV2ZXJzZSA9ICF0aGlzLiR2dWV0aWZ5LnJ0bFxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghdGhpcy5oYXNBY3RpdmVJdGVtcyB8fCAhdGhpcy5oYXNQcmV2KSByZXR1cm5cblxuICAgICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5nZXRQcmV2SW5kZXgodGhpcy5pbnRlcm5hbEluZGV4KVxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbbGFzdEluZGV4XVxuXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW0sIGxhc3RJbmRleClcbiAgICB9LFxuICAgIHVwZGF0ZVJldmVyc2UgKHZhbDogbnVtYmVyLCBvbGRWYWw6IG51bWJlcikge1xuICAgICAgaWYgKHRoaXMuY2hhbmdlZEJ5RGVsaW1pdGVycykge1xuICAgICAgICB0aGlzLmNoYW5nZWRCeURlbGltaXRlcnMgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5pc1JldmVyc2UgPSB2YWwgPCBvbGRWYWxcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXdpbmRvdycsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgZGlyZWN0aXZlczogW10gYXMgVk5vZGVEaXJlY3RpdmVbXSxcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudG91Y2hsZXNzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudG91Y2ggfHwge1xuICAgICAgICBsZWZ0OiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kdnVldGlmeS5ydGwgPyB0aGlzLnByZXYoKSA6IHRoaXMubmV4dCgpXG4gICAgICAgIH0sXG4gICAgICAgIHJpZ2h0OiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kdnVldGlmeS5ydGwgPyB0aGlzLm5leHQoKSA6IHRoaXMucHJldigpXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDogKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0OiAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgZGF0YS5kaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICBuYW1lOiAndG91Y2gnLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIFt0aGlzLmdlbkNvbnRhaW5lcigpXSlcbiAgfSxcbn0pXG4iLCIvLyBFeHRlbnNpb25zXG5pbXBvcnQgVldpbmRvdyBmcm9tICcuLi9WV2luZG93L1ZXaW5kb3cnXG5cbi8vIFR5cGVzICYgQ29tcG9uZW50c1xuaW1wb3J0IHsgQmFzZUl0ZW1Hcm91cCwgR3JvdXBhYmxlSW5zdGFuY2UgfSBmcm9tICcuLy4uL1ZJdGVtR3JvdXAvVkl0ZW1Hcm91cCdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZXaW5kb3cuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFicy1pdGVtcycsXG5cbiAgcHJvcHM6IHtcbiAgICBtYW5kYXRvcnk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZXaW5kb3cub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRhYnMtaXRlbXMnOiB0cnVlLFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNEYXJrICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnJvb3RJc0RhcmtcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRWYWx1ZSAoaXRlbTogR3JvdXBhYmxlSW5zdGFuY2UsIGk6IG51bWJlcikge1xuICAgICAgcmV0dXJuIGl0ZW0uaWQgfHwgQmFzZUl0ZW1Hcm91cC5vcHRpb25zLm1ldGhvZHMuZ2V0VmFsdWUuY2FsbCh0aGlzLCBpdGVtLCBpKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkFwcEJhci5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlRvb2xiYXIgZnJvbSAnLi4vVlRvb2xiYXIvVlRvb2xiYXInXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9zY3JvbGwnXG5cbi8vIE1peGluc1xuaW1wb3J0IEFwcGxpY2F0aW9uYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvYXBwbGljYXRpb25hYmxlJ1xuaW1wb3J0IFNjcm9sbGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Njcm9sbGFibGUnXG5pbXBvcnQgU1NSQm9vdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Nzci1ib290YWJsZSdcbmltcG9ydCBUb2dnbGVhYmxlIGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFZUb29sYmFyLFxuICBTY3JvbGxhYmxlLFxuICBTU1JCb290YWJsZSxcbiAgVG9nZ2xlYWJsZSxcbiAgQXBwbGljYXRpb25hYmxlKCd0b3AnLCBbXG4gICAgJ2NsaXBwZWRMZWZ0JyxcbiAgICAnY2xpcHBlZFJpZ2h0JyxcbiAgICAnY29tcHV0ZWRIZWlnaHQnLFxuICAgICdpbnZlcnRlZFNjcm9sbCcsXG4gICAgJ2lzRXh0ZW5kZWQnLFxuICAgICdpc1Byb21pbmVudCcsXG4gICAgJ3ZhbHVlJyxcbiAgXSlcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtYXBwLWJhcicsXG5cbiAgZGlyZWN0aXZlczogeyBTY3JvbGwgfSxcblxuICBwcm9wczoge1xuICAgIGNsaXBwZWRMZWZ0OiBCb29sZWFuLFxuICAgIGNsaXBwZWRSaWdodDogQm9vbGVhbixcbiAgICBjb2xsYXBzZU9uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGVsZXZhdGVPblNjcm9sbDogQm9vbGVhbixcbiAgICBmYWRlSW1nT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgaGlkZU9uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGludmVydGVkU2Nyb2xsOiBCb29sZWFuLFxuICAgIHNjcm9sbE9mZlNjcmVlbjogQm9vbGVhbixcbiAgICBzaHJpbmtPblNjcm9sbDogQm9vbGVhbixcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMudmFsdWUsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgYXBwbGljYXRpb25Qcm9wZXJ0eSAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAhdGhpcy5ib3R0b20gPyAndG9wJyA6ICdib3R0b20nXG4gICAgfSxcbiAgICBjYW5TY3JvbGwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgU2Nyb2xsYWJsZS5vcHRpb25zLmNvbXB1dGVkLmNhblNjcm9sbC5jYWxsKHRoaXMpICYmXG4gICAgICAgIChcbiAgICAgICAgICB0aGlzLmludmVydGVkU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5lbGV2YXRlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmhpZGVPblNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuY29sbGFwc2VPblNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuaXNCb290ZWQgfHxcbiAgICAgICAgICAvLyBJZiBmYWxzZXksIHVzZXIgaGFzIHByb3ZpZGVkIGFuXG4gICAgICAgICAgLy8gZXhwbGljaXQgdmFsdWUgd2hpY2ggc2hvdWxkXG4gICAgICAgICAgLy8gb3ZlcndyaXRlIGFueXRoaW5nIHdlIGRvXG4gICAgICAgICAgIXRoaXMudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZSc6IHRoaXMuY29sbGFwc2UgfHwgdGhpcy5jb2xsYXBzZU9uU2Nyb2xsLFxuICAgICAgICAndi1hcHAtYmFyJzogdHJ1ZSxcbiAgICAgICAgJ3YtYXBwLWJhci0tY2xpcHBlZCc6IHRoaXMuY2xpcHBlZExlZnQgfHwgdGhpcy5jbGlwcGVkUmlnaHQsXG4gICAgICAgICd2LWFwcC1iYXItLWZhZGUtaW1nLW9uLXNjcm9sbCc6IHRoaXMuZmFkZUltZ09uU2Nyb2xsLFxuICAgICAgICAndi1hcHAtYmFyLS1lbGV2YXRlLW9uLXNjcm9sbCc6IHRoaXMuZWxldmF0ZU9uU2Nyb2xsLFxuICAgICAgICAndi1hcHAtYmFyLS1maXhlZCc6ICF0aGlzLmFic29sdXRlICYmICh0aGlzLmFwcCB8fCB0aGlzLmZpeGVkKSxcbiAgICAgICAgJ3YtYXBwLWJhci0taGlkZS1zaGFkb3cnOiB0aGlzLmhpZGVTaGFkb3csXG4gICAgICAgICd2LWFwcC1iYXItLWlzLXNjcm9sbGVkJzogdGhpcy5jdXJyZW50U2Nyb2xsID4gMCxcbiAgICAgICAgJ3YtYXBwLWJhci0tc2hyaW5rLW9uLXNjcm9sbCc6IHRoaXMuc2hyaW5rT25TY3JvbGwsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZENvbnRlbnRIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuc2hyaW5rT25TY3JvbGwpIHJldHVybiBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmNvbXB1dGVkQ29udGVudEhlaWdodC5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY29tcHV0ZWRPcmlnaW5hbEhlaWdodFxuXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLmRlbnNlID8gNDggOiA1NlxuICAgICAgY29uc3QgbWF4ID0gaGVpZ2h0XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gbWF4IC0gbWluXG4gICAgICBjb25zdCBpdGVyYXRpb24gPSBkaWZmZXJlbmNlIC8gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jdXJyZW50U2Nyb2xsICogaXRlcmF0aW9uXG5cbiAgICAgIHJldHVybiBNYXRoLm1heChtaW4sIG1heCAtIG9mZnNldClcbiAgICB9LFxuICAgIGNvbXB1dGVkRm9udFNpemUgKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXRoaXMuaXNQcm9taW5lbnQpIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5kZW5zZSA/IDk2IDogMTI4XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gbWF4IC0gdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcbiAgICAgIGNvbnN0IGluY3JlbWVudCA9IDAuMDAzNDdcblxuICAgICAgLy8gMS41cmVtIHRvIGEgbWluaW11bSBvZiAxLjI1cmVtXG4gICAgICByZXR1cm4gTnVtYmVyKCgxLjUwIC0gZGlmZmVyZW5jZSAqIGluY3JlbWVudCkudG9GaXhlZCgyKSlcbiAgICB9LFxuICAgIGNvbXB1dGVkTGVmdCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHAgfHwgdGhpcy5jbGlwcGVkTGVmdCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb24ubGVmdFxuICAgIH0sXG4gICAgY29tcHV0ZWRNYXJnaW5Ub3AgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwKSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvbi5iYXJcbiAgICB9LFxuICAgIGNvbXB1dGVkT3BhY2l0eSAoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICghdGhpcy5mYWRlSW1nT25TY3JvbGwpIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgY29uc3Qgb3BhY2l0eSA9IE1hdGgubWF4KFxuICAgICAgICAodGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCAtIHRoaXMuY3VycmVudFNjcm9sbCkgLyB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkLFxuICAgICAgICAwXG4gICAgICApXG5cbiAgICAgIHJldHVybiBOdW1iZXIocGFyc2VGbG9hdChvcGFjaXR5KS50b0ZpeGVkKDIpKVxuICAgIH0sXG4gICAgY29tcHV0ZWRPcmlnaW5hbEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGxldCBoZWlnaHQgPSBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmNvbXB1dGVkQ29udGVudEhlaWdodC5jYWxsKHRoaXMpXG4gICAgICBpZiAodGhpcy5pc0V4dGVuZGVkKSBoZWlnaHQgKz0gcGFyc2VJbnQodGhpcy5leHRlbnNpb25IZWlnaHQpXG4gICAgICByZXR1cm4gaGVpZ2h0XG4gICAgfSxcbiAgICBjb21wdXRlZFJpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCB8fCB0aGlzLmNsaXBwZWRSaWdodCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb24ucmlnaHRcbiAgICB9LFxuICAgIGNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkICgpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsVGhyZXNob2xkKSByZXR1cm4gTnVtYmVyKHRoaXMuc2Nyb2xsVGhyZXNob2xkKVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlZE9yaWdpbmFsSGVpZ2h0IC0gKHRoaXMuZGVuc2UgPyA0OCA6IDU2KVxuICAgIH0sXG4gICAgY29tcHV0ZWRUcmFuc2Zvcm0gKCk6IG51bWJlciB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNhblNjcm9sbCB8fFxuICAgICAgICAodGhpcy5lbGV2YXRlT25TY3JvbGwgJiYgdGhpcy5jdXJyZW50U2Nyb2xsID09PSAwICYmIHRoaXMuaXNBY3RpdmUpXG4gICAgICApIHJldHVybiAwXG5cbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSByZXR1cm4gMFxuXG4gICAgICBjb25zdCBzY3JvbGxPZmZTY3JlZW4gPSB0aGlzLnNjcm9sbE9mZlNjcmVlblxuICAgICAgICA/IHRoaXMuY29tcHV0ZWRIZWlnaHRcbiAgICAgICAgOiB0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodFxuXG4gICAgICByZXR1cm4gdGhpcy5ib3R0b20gPyBzY3JvbGxPZmZTY3JlZW4gOiAtc2Nyb2xsT2ZmU2NyZWVuXG4gICAgfSxcbiAgICBoaWRlU2hhZG93ICgpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmVsZXZhdGVPblNjcm9sbCAmJiB0aGlzLmlzRXh0ZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcm9sbCA8IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPT09IDAgfHxcbiAgICAgICAgICB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtIDwgMFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAhdGhpcy5pc0V4dGVuZGVkIHx8XG4gICAgICAgIHRoaXMuc2Nyb2xsT2ZmU2NyZWVuXG4gICAgICApICYmIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm0gIT09IDBcbiAgICB9LFxuICAgIGlzQ29sbGFwc2VkICgpOiBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy5jb2xsYXBzZU9uU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmlzQ29sbGFwc2VkLmNhbGwodGhpcylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcm9sbCA+IDBcbiAgICB9LFxuICAgIGlzUHJvbWluZW50ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuaXNQcm9taW5lbnQuY2FsbCh0aGlzKSB8fFxuICAgICAgICB0aGlzLnNocmlua09uU2Nyb2xsXG4gICAgICApXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLnN0eWxlcy5jYWxsKHRoaXMpLFxuICAgICAgICBmb250U2l6ZTogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkRm9udFNpemUsICdyZW0nKSxcbiAgICAgICAgbWFyZ2luVG9wOiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRNYXJnaW5Ub3ApLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7Y29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkVHJhbnNmb3JtKX0pYCxcbiAgICAgICAgbGVmdDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkTGVmdCksXG4gICAgICAgIHJpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRSaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGNhblNjcm9sbDogJ29uU2Nyb2xsJyxcbiAgICBjb21wdXRlZFRyYW5zZm9ybSAoKSB7XG4gICAgICAvLyBOb3JtYWxseSB3ZSBkbyBub3Qgd2FudCB0aGUgdi1hcHAtYmFyXG4gICAgICAvLyB0byB1cGRhdGUgdGhlIGFwcGxpY2F0aW9uIHRvcCB2YWx1ZVxuICAgICAgLy8gdG8gYXZvaWQgc2NyZWVuIGp1bXAuIEhvd2V2ZXIsIGluXG4gICAgICAvLyB0aGlzIHNpdHVhdGlvbiwgd2UgbXVzdCBzbyB0aGF0XG4gICAgICAvLyB0aGUgY2xpcHBlZCBkcmF3ZXIgY2FuIHVwZGF0ZVxuICAgICAgLy8gaXRzIHRvcCB2YWx1ZSB3aGVuIHNjcm9sbGVkXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNhblNjcm9sbCB8fFxuICAgICAgICAoIXRoaXMuY2xpcHBlZExlZnQgJiYgIXRoaXMuY2xpcHBlZFJpZ2h0KVxuICAgICAgKSByZXR1cm5cblxuICAgICAgdGhpcy5jYWxsVXBkYXRlKClcbiAgICB9LFxuICAgIGludmVydGVkU2Nyb2xsICh2YWw6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSAhdmFsIHx8IHRoaXMuY3VycmVudFNjcm9sbCAhPT0gMFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgaWYgKHRoaXMuaW52ZXJ0ZWRTY3JvbGwpIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5CYWNrZ3JvdW5kICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IFZUb29sYmFyLm9wdGlvbnMubWV0aG9kcy5nZW5CYWNrZ3JvdW5kLmNhbGwodGhpcylcblxuICAgICAgcmVuZGVyLmRhdGEgPSB0aGlzLl9iKHJlbmRlci5kYXRhIHx8IHt9LCByZW5kZXIudGFnISwge1xuICAgICAgICBzdHlsZTogeyBvcGFjaXR5OiB0aGlzLmNvbXB1dGVkT3BhY2l0eSB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHJlbmRlclxuICAgIH0sXG4gICAgdXBkYXRlQXBwbGljYXRpb24gKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZlcnRlZFNjcm9sbFxuICAgICAgICA/IDBcbiAgICAgICAgOiB0aGlzLmNvbXB1dGVkSGVpZ2h0ICsgdGhpcy5jb21wdXRlZFRyYW5zZm9ybVxuICAgIH0sXG4gICAgdGhyZXNob2xkTWV0ICgpIHtcbiAgICAgIGlmICh0aGlzLmludmVydGVkU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmN1cnJlbnRTY3JvbGwgPiB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oaWRlT25TY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMuaXNTY3JvbGxpbmdVcCB8fFxuICAgICAgICAgIHRoaXMuY3VycmVudFNjcm9sbCA8IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3VycmVudFRocmVzaG9sZCA8IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQpIHJldHVyblxuXG4gICAgICB0aGlzLnNhdmVkU2Nyb2xsID0gdGhpcy5jdXJyZW50U2Nyb2xsXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgcmVuZGVyID0gVlRvb2xiYXIub3B0aW9ucy5yZW5kZXIuY2FsbCh0aGlzLCBoKVxuXG4gICAgcmVuZGVyLmRhdGEgPSByZW5kZXIuZGF0YSB8fCB7fVxuXG4gICAgaWYgKHRoaXMuY2FuU2Nyb2xsKSB7XG4gICAgICByZW5kZXIuZGF0YS5kaXJlY3RpdmVzID0gcmVuZGVyLmRhdGEuZGlyZWN0aXZlcyB8fCBbXVxuICAgICAgcmVuZGVyLmRhdGEuZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgYXJnOiB0aGlzLnNjcm9sbFRhcmdldCxcbiAgICAgICAgbmFtZTogJ3Njcm9sbCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLm9uU2Nyb2xsLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyXG4gIH0sXG59KVxuIiwiLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUsIHsgVk5vZGUsIFZOb2RlRGF0YSwgVk5vZGVEaXJlY3RpdmUgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAncmlwcGxlYWJsZScsXG5cbiAgZGlyZWN0aXZlczogeyByaXBwbGUgfSxcblxuICBwcm9wczoge1xuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlblJpcHBsZSAoZGF0YTogVk5vZGVEYXRhID0ge30pOiBWTm9kZSB8IG51bGwge1xuICAgICAgaWYgKCF0aGlzLnJpcHBsZSkgcmV0dXJuIG51bGxcblxuICAgICAgZGF0YS5zdGF0aWNDbGFzcyA9ICd2LWlucHV0LS1zZWxlY3Rpb24tY29udHJvbHNfX3JpcHBsZSdcblxuICAgICAgZGF0YS5kaXJlY3RpdmVzID0gZGF0YS5kaXJlY3RpdmVzIHx8IFtdXG4gICAgICBkYXRhLmRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdyaXBwbGUnLFxuICAgICAgICB2YWx1ZTogeyBjZW50ZXI6IHRydWUgfSxcbiAgICAgIH0gYXMgVk5vZGVEaXJlY3RpdmUpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCBkYXRhKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVk1haW4uc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgU1NSQm9vdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Nzci1ib290YWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgU1NSQm9vdGFibGUuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWFpbicsXG5cbiAgcHJvcHM6IHtcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdtYWluJyxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qge1xuICAgICAgICBiYXIsIHRvcCwgcmlnaHQsIGZvb3RlciwgaW5zZXRGb290ZXIsIGJvdHRvbSwgbGVmdCxcbiAgICAgIH0gPSB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IGAke3RvcCArIGJhcn1weGAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogYCR7cmlnaHR9cHhgLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBgJHtmb290ZXIgKyBpbnNldEZvb3RlciArIGJvdHRvbX1weGAsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBgJHtsZWZ0fXB4YCxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LW1haW4nLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgcmVmOiAnbWFpbicsXG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIFtcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiAndi1tYWluX193cmFwJyB9LFxuICAgICAgICB0aGlzLiRzbG90cy5kZWZhdWx0XG4gICAgICApLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVk1haW4gZnJvbSAnLi4vVk1haW4vVk1haW4nXG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWTWFpbi5leHRlbmQoe1xuICBuYW1lOiAndi1tYWluJyxcblxuICBjcmVhdGVkICgpIHtcbiAgICBkZXByZWNhdGUoJ3YtY29udGVudCcsICd2LW1haW4nLCB0aGlzKVxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICAvLyBBZGQgdGhlIGxlZ2FjeSBjbGFzcyBuYW1lc1xuICAgIGNvbnN0IG5vZGUgPSBWTWFpbi5vcHRpb25zLnJlbmRlci5jYWxsKHRoaXMsIGgpXG5cbiAgICBub2RlLmRhdGEhLnN0YXRpY0NsYXNzICs9ICcgdi1jb250ZW50J1xuICAgIG5vZGUuY2hpbGRyZW4hWzBdIS5kYXRhIS5zdGF0aWNDbGFzcyArPSAnIHYtY29udGVudF9fd3JhcCdcblxuICAgIHJldHVybiBoKG5vZGUudGFnLCBub2RlLmRhdGEsIG5vZGUuY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiaW1wb3J0ICcuL19ncmlkLnNhc3MnXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCdzcGFjZXInLCAnZGl2JywgJ3Ytc3BhY2VyJylcbiIsImltcG9ydCAnLi9fZ3JpZC5zYXNzJ1xuaW1wb3J0ICcuL1ZHcmlkLnNhc3MnXG5cbmltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCdcblxuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IEdyaWQoJ2NvbnRhaW5lcicpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNvbnRhaW5lcicsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgaWQ6IFN0cmluZyxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgIH0sXG4gICAgZmx1aWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICByZW5kZXIgKGgsIHsgcHJvcHMsIGRhdGEsIGNoaWxkcmVuIH0pIHtcbiAgICBsZXQgY2xhc3Nlc1xuICAgIGNvbnN0IHsgYXR0cnMgfSA9IGRhdGFcbiAgICBpZiAoYXR0cnMpIHtcbiAgICAgIC8vIHJlc2V0IGF0dHJzIHRvIGV4dHJhY3QgdXRpbGl0eSBjbGFzZXMgbGlrZSBwYS0zXG4gICAgICBkYXRhLmF0dHJzID0ge31cbiAgICAgIGNsYXNzZXMgPSBPYmplY3Qua2V5cyhhdHRycykuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBvbmNlIHJlc29sdmVkXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvaXNzdWVzLzc4NDFcbiAgICAgICAgaWYgKGtleSA9PT0gJ3Nsb3QnKSByZXR1cm4gZmFsc2VcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJzW2tleV1cblxuICAgICAgICAvLyBhZGQgYmFjayBkYXRhIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXRlc3Q9XCJmb29cIiBidXQgZG8gbm90XG4gICAgICAgIC8vIGFkZCB0aGVtIGFzIGNsYXNzZXNcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdkYXRhLScpKSB7XG4gICAgICAgICAgZGF0YS5hdHRycyFba2V5XSA9IHZhbHVlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaWQpIHtcbiAgICAgIGRhdGEuZG9tUHJvcHMgPSBkYXRhLmRvbVByb3BzIHx8IHt9XG4gICAgICBkYXRhLmRvbVByb3BzLmlkID0gcHJvcHMuaWRcbiAgICB9XG5cbiAgICByZXR1cm4gaChcbiAgICAgIHByb3BzLnRhZyxcbiAgICAgIG1lcmdlRGF0YShkYXRhLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAnY29udGFpbmVyJyxcbiAgICAgICAgY2xhc3M6IEFycmF5PGFueT4oe1xuICAgICAgICAgICdjb250YWluZXItLWZsdWlkJzogcHJvcHMuZmx1aWQsXG4gICAgICAgIH0pLmNvbmNhdChjbGFzc2VzIHx8IFtdKSxcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBWSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WSW5wdXQnXG5cbi8vIE1peGluc1xuaW1wb3J0IFJpcHBsZWFibGUgZnJvbSAnLi4vcmlwcGxlYWJsZSdcbmltcG9ydCBDb21wYXJhYmxlIGZyb20gJy4uL2NvbXBhcmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZlbnQgKGU6IEV2ZW50KSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxufVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBWSW5wdXQsXG4gIFJpcHBsZWFibGUsXG4gIENvbXBhcmFibGVcbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3NlbGVjdGFibGUnLFxuXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ2lucHV0VmFsdWUnLFxuICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGlkOiBTdHJpbmcsXG4gICAgaW5wdXRWYWx1ZTogbnVsbCBhcyBhbnksXG4gICAgZmFsc2VWYWx1ZTogbnVsbCBhcyBhbnksXG4gICAgdHJ1ZVZhbHVlOiBudWxsIGFzIGFueSxcbiAgICBtdWx0aXBsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBsYWJlbDogU3RyaW5nLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNDb2xvcjogdGhpcy5pbnB1dFZhbHVlLFxuICAgICAgbGF6eVZhbHVlOiB0aGlzLmlucHV0VmFsdWUsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRDb2xvciAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuY29sb3IpIHJldHVybiB0aGlzLmNvbG9yXG4gICAgICBpZiAodGhpcy5pc0RhcmsgJiYgIXRoaXMuYXBwSXNEYXJrKSByZXR1cm4gJ3doaXRlJ1xuICAgICAgcmV0dXJuICdwcmltYXJ5J1xuICAgIH0sXG4gICAgaXNNdWx0aXBsZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA9PT0gdHJ1ZSB8fCAodGhpcy5tdWx0aXBsZSA9PT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KHRoaXMuaW50ZXJuYWxWYWx1ZSkpXG4gICAgfSxcbiAgICBpc0FjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnRlcm5hbFZhbHVlXG5cbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgcmV0dXJuIGlucHV0LnNvbWUoaXRlbSA9PiB0aGlzLnZhbHVlQ29tcGFyYXRvcihpdGVtLCB2YWx1ZSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRydWVWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZmFsc2VWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgID8gdGhpcy52YWx1ZUNvbXBhcmF0b3IodmFsdWUsIGlucHV0KVxuICAgICAgICAgIDogQm9vbGVhbihpbnB1dClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVDb21wYXJhdG9yKGlucHV0LCB0aGlzLnRydWVWYWx1ZSlcbiAgICB9LFxuICAgIGlzRGlydHkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmVcbiAgICB9LFxuICAgIHJpcHBsZVN0YXRlICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuICF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMudmFsaWRhdGlvblN0YXRlXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogdGhpcy52YWxpZGF0aW9uU3RhdGVcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRWYWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgICAgdGhpcy5oYXNDb2xvciA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkxhYmVsICgpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5MYWJlbC5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghbGFiZWwpIHJldHVybiBsYWJlbFxuXG4gICAgICBsYWJlbCEuZGF0YSEub24gPSB7XG4gICAgICAgIC8vIExhYmVsIHNob3VsZG4ndCBjYXVzZSB0aGUgaW5wdXQgdG8gZm9jdXNcbiAgICAgICAgY2xpY2s6IHByZXZlbnQsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYWJlbFxuICAgIH0sXG4gICAgZ2VuSW5wdXQgKHR5cGU6IHN0cmluZywgYXR0cnM6IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICBhdHRyczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgJ2FyaWEtY2hlY2tlZCc6IHRoaXMuaXNBY3RpdmUudG9TdHJpbmcoKSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlkOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgcm9sZTogdHlwZSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICB9LCBhdHRycyksXG4gICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBibHVyOiB0aGlzLm9uQmx1cixcbiAgICAgICAgICBjaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgZm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5ZG93bixcbiAgICAgICAgICBjbGljazogcHJldmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiAnaW5wdXQnLFxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uQmx1ciAoKSB7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBFdmVudCkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpXG4gICAgfSxcbiAgICBvbkNoYW5nZSAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNJbnRlcmFjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgbGV0IGlucHV0ID0gdGhpcy5pbnRlcm5hbFZhbHVlXG5cbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICAgIGlucHV0ID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0Lmxlbmd0aFxuXG4gICAgICAgIGlucHV0ID0gaW5wdXQuZmlsdGVyKChpdGVtOiBhbnkpID0+ICF0aGlzLnZhbHVlQ29tcGFyYXRvcihpdGVtLCB2YWx1ZSkpXG5cbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgaW5wdXQucHVzaCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRydWVWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmFsc2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlucHV0ID0gdGhpcy52YWx1ZUNvbXBhcmF0b3IoaW5wdXQsIHRoaXMudHJ1ZVZhbHVlKSA/IHRoaXMuZmFsc2VWYWx1ZSA6IHRoaXMudHJ1ZVZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgIGlucHV0ID0gdGhpcy52YWx1ZUNvbXBhcmF0b3IoaW5wdXQsIHZhbHVlKSA/IG51bGwgOiB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQgPSAhaW5wdXRcbiAgICAgIH1cblxuICAgICAgdGhpcy52YWxpZGF0ZSh0cnVlLCBpbnB1dClcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IGlucHV0XG4gICAgICB0aGlzLmhhc0NvbG9yID0gaW5wdXRcbiAgICB9LFxuICAgIG9uRm9jdXMgKCkge1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlXG4gICAgfSxcbiAgICAvKiogQGFic3RyYWN0ICovXG4gICAgb25LZXlkb3duIChlOiBFdmVudCkge30sXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQmFkZ2Uuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcbmltcG9ydCBUb2dnbGVhYmxlIGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJ1xuaW1wb3J0IFRyYW5zaXRpb25hYmxlIGZyb20gJy4uLy4uL21peGlucy90cmFuc2l0aW9uYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgUG9zaXRpb25hYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9wb3NpdGlvbmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGdldFNsb3QsXG59IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgUG9zaXRpb25hYmxlRmFjdG9yeShbJ2xlZnQnLCAnYm90dG9tJ10pLFxuICBUaGVtZWFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIFRyYW5zaXRpb25hYmxlLFxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtYmFkZ2UnLFxuXG4gIHByb3BzOiB7XG4gICAgYXZhdGFyOiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBjb250ZW50OiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgIGRvdDogQm9vbGVhbixcbiAgICBsYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyR2dWV0aWZ5LmJhZGdlJyxcbiAgICB9LFxuICAgIGljb246IFN0cmluZyxcbiAgICBpbmxpbmU6IEJvb2xlYW4sXG4gICAgb2Zmc2V0WDogW051bWJlciwgU3RyaW5nXSxcbiAgICBvZmZzZXRZOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIG92ZXJsYXA6IEJvb2xlYW4sXG4gICAgdGlsZTogQm9vbGVhbixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc2NhbGUtcm90YXRlLXRyYW5zaXRpb24nLFxuICAgIH0sXG4gICAgdmFsdWU6IHsgZGVmYXVsdDogdHJ1ZSB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LWJhZGdlLS1hdmF0YXInOiB0aGlzLmF2YXRhcixcbiAgICAgICAgJ3YtYmFkZ2UtLWJvcmRlcmVkJzogdGhpcy5ib3JkZXJlZCxcbiAgICAgICAgJ3YtYmFkZ2UtLWJvdHRvbSc6IHRoaXMuYm90dG9tLFxuICAgICAgICAndi1iYWRnZS0tZG90JzogdGhpcy5kb3QsXG4gICAgICAgICd2LWJhZGdlLS1pY29uJzogdGhpcy5pY29uICE9IG51bGwsXG4gICAgICAgICd2LWJhZGdlLS1pbmxpbmUnOiB0aGlzLmlubGluZSxcbiAgICAgICAgJ3YtYmFkZ2UtLWxlZnQnOiB0aGlzLmxlZnQsXG4gICAgICAgICd2LWJhZGdlLS1vdmVybGFwJzogdGhpcy5vdmVybGFwLFxuICAgICAgICAndi1iYWRnZS0tdGlsZSc6IHRoaXMudGlsZSxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZEJvdHRvbSAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA/ICdhdXRvJyA6IHRoaXMuY29tcHV0ZWRZT2Zmc2V0XG4gICAgfSxcbiAgICBjb21wdXRlZExlZnQgKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5pc1J0bCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0ID8gdGhpcy5jb21wdXRlZFhPZmZzZXQgOiAnYXV0bydcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMubGVmdCA/ICdhdXRvJyA6IHRoaXMuY29tcHV0ZWRYT2Zmc2V0XG4gICAgfSxcbiAgICBjb21wdXRlZFJpZ2h0ICgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMuaXNSdGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdCA/ICdhdXRvJyA6IHRoaXMuY29tcHV0ZWRYT2Zmc2V0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhdGhpcy5sZWZ0ID8gJ2F1dG8nIDogdGhpcy5jb21wdXRlZFhPZmZzZXRcbiAgICB9LFxuICAgIGNvbXB1dGVkVG9wICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID8gdGhpcy5jb21wdXRlZFlPZmZzZXQgOiAnYXV0bydcbiAgICB9LFxuICAgIGNvbXB1dGVkWE9mZnNldCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNQb3NpdGlvbih0aGlzLm9mZnNldFgpXG4gICAgfSxcbiAgICBjb21wdXRlZFlPZmZzZXQgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjUG9zaXRpb24odGhpcy5vZmZzZXRZKVxuICAgIH0sXG4gICAgaXNSdGwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkucnRsXG4gICAgfSxcbiAgICAvLyBEZWZhdWx0IGZhbGxiYWNrIGlmIG9mZnNldFhcbiAgICAvLyBvciBvZmZzZXRZIGFyZSB1bmRlZmluZWQuXG4gICAgb2Zmc2V0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMub3ZlcmxhcCkgcmV0dXJuIHRoaXMuZG90ID8gOCA6IDEyXG4gICAgICByZXR1cm4gdGhpcy5kb3QgPyAyIDogNFxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgaWYgKHRoaXMuaW5saW5lKSByZXR1cm4ge31cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm90dG9tOiB0aGlzLmNvbXB1dGVkQm90dG9tLFxuICAgICAgICBsZWZ0OiB0aGlzLmNvbXB1dGVkTGVmdCxcbiAgICAgICAgcmlnaHQ6IHRoaXMuY29tcHV0ZWRSaWdodCxcbiAgICAgICAgdG9wOiB0aGlzLmNvbXB1dGVkVG9wLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhbGNQb3NpdGlvbiAob2Zmc2V0OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAke2NvbnZlcnRUb1VuaXQob2Zmc2V0IHx8IHRoaXMub2Zmc2V0KX0pYFxuICAgIH0sXG4gICAgZ2VuQmFkZ2UgKCkge1xuICAgICAgY29uc3QgbGFuZyA9IHRoaXMuJHZ1ZXRpZnkubGFuZ1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLiRhdHRyc1snYXJpYS1sYWJlbCddIHx8IGxhbmcudCh0aGlzLmxhYmVsKVxuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtYmFkZ2VfX2JhZGdlJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWF0b21pYyc6IHRoaXMuJGF0dHJzWydhcmlhLWF0b21pYyddIHx8ICd0cnVlJyxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IGxhYmVsLFxuICAgICAgICAgICdhcmlhLWxpdmUnOiB0aGlzLiRhdHRyc1snYXJpYS1saXZlJ10gfHwgJ3BvbGl0ZScsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuJGF0dHJzLnRpdGxlLFxuICAgICAgICAgIHJvbGU6IHRoaXMuJGF0dHJzLnJvbGUgfHwgJ3N0YXR1cycsXG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICB9XSxcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGJhZGdlID0gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIGRhdGEsIFt0aGlzLmdlbkJhZGdlQ29udGVudCgpXSlcblxuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBiYWRnZVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLnRyYW5zaXRpb24sXG4gICAgICAgICAgb3JpZ2luOiB0aGlzLm9yaWdpbixcbiAgICAgICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICAgIH0sXG4gICAgICB9LCBbYmFkZ2VdKVxuICAgIH0sXG4gICAgZ2VuQmFkZ2VDb250ZW50ICgpIHtcbiAgICAgIC8vIERvdCBwcm9wIHNob3dzIG5vIGNvbnRlbnRcbiAgICAgIGlmICh0aGlzLmRvdCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICBjb25zdCBzbG90ID0gZ2V0U2xvdCh0aGlzLCAnYmFkZ2UnKVxuXG4gICAgICBpZiAoc2xvdCkgcmV0dXJuIHNsb3RcbiAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHJldHVybiBTdHJpbmcodGhpcy5jb250ZW50KVxuICAgICAgaWYgKHRoaXMuaWNvbikgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHRoaXMuaWNvbilcblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0sXG4gICAgZ2VuQmFkZ2VXcmFwcGVyICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtYmFkZ2VfX3dyYXBwZXInLFxuICAgICAgfSwgW3RoaXMuZ2VuQmFkZ2UoKV0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgYmFkZ2UgPSBbdGhpcy5nZW5CYWRnZVdyYXBwZXIoKV1cbiAgICBjb25zdCBjaGlsZHJlbiA9IFtnZXRTbG90KHRoaXMpXVxuICAgIGNvbnN0IHtcbiAgICAgICdhcmlhLWF0b21pYyc6IF94LFxuICAgICAgJ2FyaWEtbGFiZWwnOiBfeSxcbiAgICAgICdhcmlhLWxpdmUnOiBfeixcbiAgICAgIHJvbGUsXG4gICAgICB0aXRsZSxcbiAgICAgIC4uLmF0dHJzXG4gICAgfSA9IHRoaXMuJGF0dHJzXG5cbiAgICBpZiAodGhpcy5pbmxpbmUgJiYgdGhpcy5sZWZ0KSBjaGlsZHJlbi51bnNoaWZ0KGJhZGdlKVxuICAgIGVsc2UgY2hpbGRyZW4ucHVzaChiYWRnZSlcblxuICAgIHJldHVybiBoKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWJhZGdlJyxcbiAgICAgIGF0dHJzLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICB9LCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vVkdyaWQuc2FzcydcblxuaW1wb3J0IFZ1ZSwgeyBQcm9wT3B0aW9ucyB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtZXJnZURhdGEgZnJvbSAnLi4vLi4vdXRpbC9tZXJnZURhdGEnXG5pbXBvcnQgeyB1cHBlckZpcnN0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBubyB4c1xuY29uc3QgYnJlYWtwb2ludHMgPSBbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ11cblxuY29uc3QgQUxJR05NRU5UID0gWydzdGFydCcsICdlbmQnLCAnY2VudGVyJ11cblxuZnVuY3Rpb24gbWFrZVByb3BzIChwcmVmaXg6IHN0cmluZywgZGVmOiAoKSA9PiBQcm9wT3B0aW9ucykge1xuICByZXR1cm4gYnJlYWtwb2ludHMucmVkdWNlKChwcm9wcywgdmFsKSA9PiB7XG4gICAgcHJvcHNbcHJlZml4ICsgdXBwZXJGaXJzdCh2YWwpXSA9IGRlZigpXG4gICAgcmV0dXJuIHByb3BzXG4gIH0sIHt9IGFzIERpY3Rpb25hcnk8UHJvcE9wdGlvbnM+KVxufVxuXG5jb25zdCBhbGlnblZhbGlkYXRvciA9IChzdHI6IGFueSkgPT4gWy4uLkFMSUdOTUVOVCwgJ2Jhc2VsaW5lJywgJ3N0cmV0Y2gnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBhbGlnblByb3BzID0gbWFrZVByb3BzKCdhbGlnbicsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBhbGlnblZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBqdXN0aWZ5VmFsaWRhdG9yID0gKHN0cjogYW55KSA9PiBbLi4uQUxJR05NRU5ULCAnc3BhY2UtYmV0d2VlbicsICdzcGFjZS1hcm91bmQnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBqdXN0aWZ5UHJvcHMgPSBtYWtlUHJvcHMoJ2p1c3RpZnknLCAoKSA9PiAoe1xuICB0eXBlOiBTdHJpbmcsXG4gIGRlZmF1bHQ6IG51bGwsXG4gIHZhbGlkYXRvcjoganVzdGlmeVZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBhbGlnbkNvbnRlbnRWYWxpZGF0b3IgPSAoc3RyOiBhbnkpID0+IFsuLi5BTElHTk1FTlQsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCcsICdzdHJldGNoJ10uaW5jbHVkZXMoc3RyKVxuY29uc3QgYWxpZ25Db250ZW50UHJvcHMgPSBtYWtlUHJvcHMoJ2FsaWduQ29udGVudCcsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBhbGlnbkNvbnRlbnRWYWxpZGF0b3IsXG59KSlcblxuY29uc3QgcHJvcE1hcCA9IHtcbiAgYWxpZ246IE9iamVjdC5rZXlzKGFsaWduUHJvcHMpLFxuICBqdXN0aWZ5OiBPYmplY3Qua2V5cyhqdXN0aWZ5UHJvcHMpLFxuICBhbGlnbkNvbnRlbnQ6IE9iamVjdC5rZXlzKGFsaWduQ29udGVudFByb3BzKSxcbn1cblxuY29uc3QgY2xhc3NNYXAgPSB7XG4gIGFsaWduOiAnYWxpZ24nLFxuICBqdXN0aWZ5OiAnanVzdGlmeScsXG4gIGFsaWduQ29udGVudDogJ2FsaWduLWNvbnRlbnQnLFxufVxuXG5mdW5jdGlvbiBicmVha3BvaW50Q2xhc3MgKHR5cGU6IGtleW9mIHR5cGVvZiBwcm9wTWFwLCBwcm9wOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gIGxldCBjbGFzc05hbWUgPSBjbGFzc01hcFt0eXBlXVxuICBpZiAodmFsID09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgaWYgKHByb3ApIHtcbiAgICAvLyBhbGlnblNtIC0+IFNtXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IHByb3AucmVwbGFjZSh0eXBlLCAnJylcbiAgICBjbGFzc05hbWUgKz0gYC0ke2JyZWFrcG9pbnR9YFxuICB9XG4gIC8vIC5hbGlnbi1pdGVtcy1zbS1jZW50ZXJcbiAgY2xhc3NOYW1lICs9IGAtJHt2YWx9YFxuICByZXR1cm4gY2xhc3NOYW1lLnRvTG93ZXJDYXNlKClcbn1cblxuY29uc3QgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgYW55W10+KClcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXJvdycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIG5vR3V0dGVyczogQm9vbGVhbixcbiAgICBhbGlnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogYWxpZ25WYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5hbGlnblByb3BzLFxuICAgIGp1c3RpZnk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGp1c3RpZnlWYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5qdXN0aWZ5UHJvcHMsXG4gICAgYWxpZ25Db250ZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBhbGlnbkNvbnRlbnRWYWxpZGF0b3IsXG4gICAgfSxcbiAgICAuLi5hbGlnbkNvbnRlbnRQcm9wcyxcbiAgfSxcbiAgcmVuZGVyIChoLCB7IHByb3BzLCBkYXRhLCBjaGlsZHJlbiB9KSB7XG4gICAgLy8gU3VwZXItZmFzdCBtZW1vaXphdGlvbiBiYXNlZCBvbiBwcm9wcywgNXggZmFzdGVyIHRoYW4gSlNPTi5zdHJpbmdpZnlcbiAgICBsZXQgY2FjaGVLZXkgPSAnJ1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgICAgY2FjaGVLZXkgKz0gU3RyaW5nKChwcm9wcyBhcyBhbnkpW3Byb3BdKVxuICAgIH1cbiAgICBsZXQgY2xhc3NMaXN0ID0gY2FjaGUuZ2V0KGNhY2hlS2V5KVxuXG4gICAgaWYgKCFjbGFzc0xpc3QpIHtcbiAgICAgIGNsYXNzTGlzdCA9IFtdXG4gICAgICAvLyBMb29wIHRocm91Z2ggYGFsaWduYCwgYGp1c3RpZnlgLCBgYWxpZ25Db250ZW50YCBicmVha3BvaW50IHByb3BzXG4gICAgICBsZXQgdHlwZToga2V5b2YgdHlwZW9mIHByb3BNYXBcbiAgICAgIGZvciAodHlwZSBpbiBwcm9wTWFwKSB7XG4gICAgICAgIHByb3BNYXBbdHlwZV0uZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gKHByb3BzIGFzIGFueSlbcHJvcF1cbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBicmVha3BvaW50Q2xhc3ModHlwZSwgcHJvcCwgdmFsdWUpXG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkgY2xhc3NMaXN0IS5wdXNoKGNsYXNzTmFtZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY2xhc3NMaXN0LnB1c2goe1xuICAgICAgICAnbm8tZ3V0dGVycyc6IHByb3BzLm5vR3V0dGVycyxcbiAgICAgICAgJ3Jvdy0tZGVuc2UnOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgW2BhbGlnbi0ke3Byb3BzLmFsaWdufWBdOiBwcm9wcy5hbGlnbixcbiAgICAgICAgW2BqdXN0aWZ5LSR7cHJvcHMuanVzdGlmeX1gXTogcHJvcHMuanVzdGlmeSxcbiAgICAgICAgW2BhbGlnbi1jb250ZW50LSR7cHJvcHMuYWxpZ25Db250ZW50fWBdOiBwcm9wcy5hbGlnbkNvbnRlbnQsXG4gICAgICB9KVxuXG4gICAgICBjYWNoZS5zZXQoY2FjaGVLZXksIGNsYXNzTGlzdClcbiAgICB9XG5cbiAgICByZXR1cm4gaChcbiAgICAgIHByb3BzLnRhZyxcbiAgICAgIG1lcmdlRGF0YShkYXRhLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAncm93JyxcbiAgICAgICAgY2xhc3M6IGNsYXNzTGlzdCxcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRleHRhcmVhLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWVGV4dEZpZWxkIGZyb20gJy4uL1ZUZXh0RmllbGQvVlRleHRGaWVsZCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgVnVlIHtcbiAgJHJlZnM6IHtcbiAgICBpbnB1dDogSFRNTFRleHRBcmVhRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnM8b3B0aW9ucyAmXG4gIEluc3RhbmNlVHlwZTx0eXBlb2YgVlRleHRGaWVsZD5cbj4oXG4gIFZUZXh0RmllbGRcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGV4dGFyZWEnLFxuXG4gIHByb3BzOiB7XG4gICAgYXV0b0dyb3c6IEJvb2xlYW4sXG4gICAgbm9SZXNpemU6IEJvb2xlYW4sXG4gICAgcm93SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMjQsXG4gICAgICB2YWxpZGF0b3I6ICh2OiBhbnkpID0+ICFpc05hTihwYXJzZUZsb2F0KHYpKSxcbiAgICB9LFxuICAgIHJvd3M6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA1LFxuICAgICAgdmFsaWRhdG9yOiAodjogYW55KSA9PiAhaXNOYU4ocGFyc2VJbnQodiwgMTApKSxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXRleHRhcmVhJzogdHJ1ZSxcbiAgICAgICAgJ3YtdGV4dGFyZWEtLWF1dG8tZ3Jvdyc6IHRoaXMuYXV0b0dyb3csXG4gICAgICAgICd2LXRleHRhcmVhLS1uby1yZXNpemUnOiB0aGlzLm5vUmVzaXplSGFuZGxlLFxuICAgICAgICAuLi5WVGV4dEZpZWxkLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgbm9SZXNpemVIYW5kbGUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubm9SZXNpemUgfHwgdGhpcy5hdXRvR3Jvd1xuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBsYXp5VmFsdWUgKCkge1xuICAgICAgdGhpcy5hdXRvR3JvdyAmJiB0aGlzLiRuZXh0VGljayh0aGlzLmNhbGN1bGF0ZUlucHV0SGVpZ2h0KVxuICAgIH0sXG4gICAgcm93SGVpZ2h0ICgpIHtcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy4kbmV4dFRpY2sodGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodClcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hdXRvR3JvdyAmJiB0aGlzLmNhbGN1bGF0ZUlucHV0SGVpZ2h0KClcbiAgICB9LCAwKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxjdWxhdGVJbnB1dEhlaWdodCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuJHJlZnMuaW5wdXRcbiAgICAgIGlmICghaW5wdXQpIHJldHVyblxuXG4gICAgICBpbnB1dC5zdHlsZS5oZWlnaHQgPSAnMCdcbiAgICAgIGNvbnN0IGhlaWdodCA9IGlucHV0LnNjcm9sbEhlaWdodFxuICAgICAgY29uc3QgbWluSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5yb3dzLCAxMCkgKiBwYXJzZUZsb2F0KHRoaXMucm93SGVpZ2h0KVxuICAgICAgLy8gVGhpcyBoYXMgdG8gYmUgZG9uZSBBU0FQLCB3YWl0aW5nIGZvciBWdWVcbiAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgRE9NIGNhdXNlcyB1Z2x5IGxheW91dCBqdW1waW5nXG4gICAgICBpbnB1dC5zdHlsZS5oZWlnaHQgPSBNYXRoLm1heChtaW5IZWlnaHQsIGhlaWdodCkgKyAncHgnXG4gICAgfSxcbiAgICBnZW5JbnB1dCAoKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLmdlbklucHV0LmNhbGwodGhpcylcblxuICAgICAgaW5wdXQudGFnID0gJ3RleHRhcmVhJ1xuICAgICAgZGVsZXRlIGlucHV0LmRhdGEhLmF0dHJzIS50eXBlXG4gICAgICBpbnB1dC5kYXRhIS5hdHRycyEucm93cyA9IHRoaXMucm93c1xuXG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9LFxuICAgIG9uSW5wdXQgKGU6IEV2ZW50KSB7XG4gICAgICBWVGV4dEZpZWxkLm9wdGlvbnMubWV0aG9kcy5vbklucHV0LmNhbGwodGhpcywgZSlcbiAgICAgIHRoaXMuYXV0b0dyb3cgJiYgdGhpcy5jYWxjdWxhdGVJbnB1dEhlaWdodCgpXG4gICAgfSxcbiAgICBvbktleURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnRzIGNsb3Npbmcgb2YgYVxuICAgICAgLy8gZGlhbG9nIHdoZW4gcHJlc3NpbmdcbiAgICAgIC8vIGVudGVyXG4gICAgICBpZiAodGhpcy5pc0ZvY3VzZWQgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2tleWRvd24nLCBlKVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gTWl4aW5zXG5pbXBvcnQgeyBmYWN0b3J5IGFzIEdyb3VwYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvZ3JvdXBhYmxlJ1xuaW1wb3J0IFJvdXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3V0YWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gJy4vLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IEV4dHJhY3RWdWUgfSBmcm9tICcuLy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFJvdXRhYmxlLFxuICAvLyBNdXN0IGJlIGFmdGVyIHJvdXRhYmxlXG4gIC8vIHRvIG92ZXJ3cml0ZSBhY3RpdmVDbGFzc1xuICBHcm91cGFibGVGYWN0b3J5KCd0YWJzQmFyJyksXG4gIFRoZW1lYWJsZVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJGVsOiBIVE1MRWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZChcbiAgLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFiJyxcblxuICBwcm9wczoge1xuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBwcm94eUNsYXNzOiAndi10YWItLWFjdGl2ZScsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXRhYic6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10YWItLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgLi4udGhpcy5ncm91cENsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZSAoKTogYW55IHtcbiAgICAgIGxldCB0byA9IHRoaXMudG8gfHwgdGhpcy5ocmVmIHx8ICcnXG5cbiAgICAgIGlmICh0aGlzLiRyb3V0ZXIgJiZcbiAgICAgICAgdGhpcy50byA9PT0gT2JqZWN0KHRoaXMudG8pXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZSA9IHRoaXMuJHJvdXRlci5yZXNvbHZlKFxuICAgICAgICAgIHRoaXMudG8sXG4gICAgICAgICAgdGhpcy4kcm91dGUsXG4gICAgICAgICAgdGhpcy5hcHBlbmRcbiAgICAgICAgKVxuXG4gICAgICAgIHRvID0gcmVzb2x2ZS5ocmVmXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0by5yZXBsYWNlKCcjJywgJycpXG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLm9uUm91dGVDaGFuZ2UoKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljayAoZTogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIC8vIElmIHVzZXIgcHJvdmlkZXMgYW5cbiAgICAgIC8vIGFjdHVhbCBsaW5rLCBkbyBub3RcbiAgICAgIC8vIHByZXZlbnQgZGVmYXVsdFxuICAgICAgaWYgKHRoaXMuaHJlZiAmJlxuICAgICAgICB0aGlzLmhyZWYuaW5kZXhPZignIycpID4gLTFcbiAgICAgICkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGlmIChlLmRldGFpbCkgdGhpcy4kZWwuYmx1cigpXG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcblxuICAgICAgdGhpcy50byB8fCB0aGlzLnRvZ2dsZSgpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyB0YWcsIGRhdGEgfSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZUxpbmsoKVxuXG4gICAgZGF0YS5hdHRycyA9IHtcbiAgICAgIC4uLmRhdGEuYXR0cnMsXG4gICAgICAnYXJpYS1zZWxlY3RlZCc6IFN0cmluZyh0aGlzLmlzQWN0aXZlKSxcbiAgICAgIHJvbGU6ICd0YWInLFxuICAgICAgdGFiaW5kZXg6IDAsXG4gICAgfVxuICAgIGRhdGEub24gPSB7XG4gICAgICAuLi5kYXRhLm9uLFxuICAgICAga2V5ZG93bjogKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIpIHRoaXMuY2xpY2soZSlcblxuICAgICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGFnLCBkYXRhLCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZTbGlkZUdyb3VwLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCB7IFZGYWRlVHJhbnNpdGlvbiB9IGZyb20gJy4uL3RyYW5zaXRpb25zJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgeyBCYXNlSXRlbUdyb3VwIH0gZnJvbSAnLi4vVkl0ZW1Hcm91cC9WSXRlbUdyb3VwJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBNb2JpbGUgZnJvbSAnLi4vLi4vbWl4aW5zL21vYmlsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcbmltcG9ydCBUb3VjaCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMsIHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSwgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuaW50ZXJmYWNlIFRvdWNoRXZlbnQge1xuICB0b3VjaHN0YXJ0WDogbnVtYmVyXG4gIHRvdWNobW92ZVg6IG51bWJlclxuICBzdG9wUHJvcGFnYXRpb246IEZ1bmN0aW9uXG59XG5cbmludGVyZmFjZSBXaWR0aHMge1xuICBjb250ZW50OiBudW1iZXJcbiAgd3JhcHBlcjogbnVtYmVyXG59XG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgVnVlIHtcbiAgJHJlZnM6IHtcbiAgICBjb250ZW50OiBIVE1MRWxlbWVudFxuICAgIHdyYXBwZXI6IEhUTUxFbGVtZW50XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEJhc2VTbGlkZUdyb3VwID0gbWl4aW5zPG9wdGlvbnMgJlxuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4gIEV4dHJhY3RWdWU8W1xuICAgIHR5cGVvZiBCYXNlSXRlbUdyb3VwLFxuICAgIHR5cGVvZiBNb2JpbGUsXG4gIF0+XG4vKiBlc2xpbnQtZW5hYmxlIGluZGVudCAqL1xuPihcbiAgQmFzZUl0ZW1Hcm91cCxcbiAgTW9iaWxlLFxuICAvKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAnYmFzZS1zbGlkZS1ncm91cCcsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIFJlc2l6ZSxcbiAgICBUb3VjaCxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndi1zbGlkZS1pdGVtLS1hY3RpdmUnLFxuICAgIH0sXG4gICAgY2VudGVyQWN0aXZlOiBCb29sZWFuLFxuICAgIG5leHRJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJG5leHQnLFxuICAgIH0sXG4gICAgcHJldkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckcHJldicsXG4gICAgfSxcbiAgICBzaG93QXJyb3dzOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAoXG4gICAgICAgIHR5cGVvZiB2ID09PSAnYm9vbGVhbicgfHwgW1xuICAgICAgICAgICdhbHdheXMnLFxuICAgICAgICAgICdkZXNrdG9wJyxcbiAgICAgICAgICAnbW9iaWxlJyxcbiAgICAgICAgXS5pbmNsdWRlcyh2KVxuICAgICAgKSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgaW50ZXJuYWxJdGVtc0xlbmd0aDogMCxcbiAgICBpc092ZXJmbG93aW5nOiBmYWxzZSxcbiAgICByZXNpemVUaW1lb3V0OiAwLFxuICAgIHN0YXJ0WDogMCxcbiAgICBzY3JvbGxPZmZzZXQ6IDAsXG4gICAgd2lkdGhzOiB7XG4gICAgICBjb250ZW50OiAwLFxuICAgICAgd3JhcHBlcjogMCxcbiAgICB9LFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIF9fY2FjaGVkTmV4dCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuVHJhbnNpdGlvbignbmV4dCcpXG4gICAgfSxcbiAgICBfX2NhY2hlZFByZXYgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLmdlblRyYW5zaXRpb24oJ3ByZXYnKVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLkJhc2VJdGVtR3JvdXAub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXNsaWRlLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgJ3Ytc2xpZGUtZ3JvdXAtLWhhcy1hZmZpeGVzJzogdGhpcy5oYXNBZmZpeGVzLFxuICAgICAgICAndi1zbGlkZS1ncm91cC0taXMtb3ZlcmZsb3dpbmcnOiB0aGlzLmlzT3ZlcmZsb3dpbmcsXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNBZmZpeGVzICgpOiBCb29sZWFuIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zaG93QXJyb3dzKSB7XG4gICAgICAgIC8vIEFsd2F5cyBzaG93IGFycm93cyBvbiBkZXNrdG9wICYgbW9iaWxlXG4gICAgICAgIGNhc2UgJ2Fsd2F5cyc6IHJldHVybiB0cnVlXG5cbiAgICAgICAgLy8gQWx3YXlzIHNob3cgYXJyb3dzIG9uIGRlc2t0b3BcbiAgICAgICAgY2FzZSAnZGVza3RvcCc6IHJldHVybiAhdGhpcy5pc01vYmlsZVxuXG4gICAgICAgIC8vIFNob3cgYXJyb3dzIG9uIG1vYmlsZSB3aGVuIG92ZXJmbG93aW5nLlxuICAgICAgICAvLyBUaGlzIG1hdGNoZXMgdGhlIGRlZmF1bHQgMi4yIGJlaGF2aW9yXG4gICAgICAgIGNhc2UgdHJ1ZTogcmV0dXJuIHRoaXMuaXNPdmVyZmxvd2luZ1xuXG4gICAgICAgIC8vIEFsd2F5cyBzaG93IG9uIG1vYmlsZVxuICAgICAgICBjYXNlICdtb2JpbGUnOiByZXR1cm4gKFxuICAgICAgICAgIHRoaXMuaXNNb2JpbGUgfHxcbiAgICAgICAgICB0aGlzLmlzT3ZlcmZsb3dpbmdcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vY29tcG9uZW50cy90YWJzI3Njcm9sbGFibGUtdGFic1xuICAgICAgICAvLyBBbHdheXMgc2hvdyBhcnJvd3Mgd2hlblxuICAgICAgICAvLyBvdmVyZmxvd2VkIG9uIGRlc2t0b3BcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIChcbiAgICAgICAgICAhdGhpcy5pc01vYmlsZSAmJlxuICAgICAgICAgIHRoaXMuaXNPdmVyZmxvd2luZ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNOZXh0ICgpOiBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy5oYXNBZmZpeGVzKSByZXR1cm4gZmFsc2VcblxuICAgICAgY29uc3QgeyBjb250ZW50LCB3cmFwcGVyIH0gPSB0aGlzLndpZHRoc1xuXG4gICAgICAvLyBDaGVjayBvbmUgc2Nyb2xsIGFoZWFkIHRvIGtub3cgdGhlIHdpZHRoIG9mIHJpZ2h0LW1vc3QgaXRlbVxuICAgICAgcmV0dXJuIGNvbnRlbnQgPiBNYXRoLmFicyh0aGlzLnNjcm9sbE9mZnNldCkgKyB3cmFwcGVyXG4gICAgfSxcbiAgICBoYXNQcmV2ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0FmZml4ZXMgJiYgdGhpcy5zY3JvbGxPZmZzZXQgIT09IDBcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaW50ZXJuYWxWYWx1ZTogJ3NldFdpZHRocycsXG4gICAgLy8gV2hlbiBvdmVyZmxvdyBjaGFuZ2VzLCB0aGUgYXJyb3dzIGFsdGVyXG4gICAgLy8gdGhlIHdpZHRocyBvZiB0aGUgY29udGVudCBhbmQgd3JhcHBlclxuICAgIC8vIGFuZCBuZWVkIHRvIGJlIHJlY2FsY3VsYXRlZFxuICAgIGlzT3ZlcmZsb3dpbmc6ICdzZXRXaWR0aHMnLFxuICAgIHNjcm9sbE9mZnNldCAodmFsKSB7XG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstdmFsfXB4KWBcbiAgICB9LFxuICB9LFxuXG4gIGJlZm9yZVVwZGF0ZSAoKSB7XG4gICAgdGhpcy5pbnRlcm5hbEl0ZW1zTGVuZ3RoID0gKHRoaXMuJGNoaWxkcmVuIHx8IFtdKS5sZW5ndGhcbiAgfSxcblxuICB1cGRhdGVkICgpIHtcbiAgICBpZiAodGhpcy5pbnRlcm5hbEl0ZW1zTGVuZ3RoID09PSAodGhpcy4kY2hpbGRyZW4gfHwgW10pLmxlbmd0aCkgcmV0dXJuXG4gICAgdGhpcy5zZXRXaWR0aHMoKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvLyBBbHdheXMgZ2VuZXJhdGUgbmV4dCBmb3Igc2Nyb2xsYWJsZSBoaW50XG4gICAgZ2VuTmV4dCAoKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLiRzY29wZWRTbG90cy5uZXh0XG4gICAgICAgID8gdGhpcy4kc2NvcGVkU2xvdHMubmV4dCh7fSlcbiAgICAgICAgOiB0aGlzLiRzbG90cy5uZXh0IHx8IHRoaXMuX19jYWNoZWROZXh0XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbGlkZS1ncm91cF9fbmV4dCcsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3Ytc2xpZGUtZ3JvdXBfX25leHQtLWRpc2FibGVkJzogIXRoaXMuaGFzTmV4dCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5vbkFmZml4Q2xpY2soJ25leHQnKSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiAnbmV4dCcsXG4gICAgICB9LCBbc2xvdF0pXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc2xpZGUtZ3JvdXBfX2NvbnRlbnQnLFxuICAgICAgICByZWY6ICdjb250ZW50JyxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgfSxcbiAgICBnZW5EYXRhICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAncmVzaXplJyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5vblJlc2l6ZSxcbiAgICAgICAgfV0sXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5JY29uIChsb2NhdGlvbjogJ3ByZXYnIHwgJ25leHQnKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGxldCBpY29uID0gbG9jYXRpb25cblxuICAgICAgaWYgKHRoaXMuJHZ1ZXRpZnkucnRsICYmIGxvY2F0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgaWNvbiA9ICduZXh0J1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiR2dWV0aWZ5LnJ0bCAmJiBsb2NhdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIGljb24gPSAncHJldidcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXBwZXJMb2NhdGlvbiA9IGAke2xvY2F0aW9uWzBdLnRvVXBwZXJDYXNlKCl9JHtsb2NhdGlvbi5zbGljZSgxKX1gXG4gICAgICBjb25zdCBoYXNBZmZpeCA9ICh0aGlzIGFzIGFueSlbYGhhcyR7dXBwZXJMb2NhdGlvbn1gXVxuXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLnNob3dBcnJvd3MgJiZcbiAgICAgICAgIWhhc0FmZml4XG4gICAgICApIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGlzYWJsZWQ6ICFoYXNBZmZpeCxcbiAgICAgICAgfSxcbiAgICAgIH0sICh0aGlzIGFzIGFueSlbYCR7aWNvbn1JY29uYF0pXG4gICAgfSxcbiAgICAvLyBBbHdheXMgZ2VuZXJhdGUgcHJldiBmb3Igc2Nyb2xsYWJsZSBoaW50XG4gICAgZ2VuUHJldiAoKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLiRzY29wZWRTbG90cy5wcmV2XG4gICAgICAgID8gdGhpcy4kc2NvcGVkU2xvdHMucHJldih7fSlcbiAgICAgICAgOiB0aGlzLiRzbG90cy5wcmV2IHx8IHRoaXMuX19jYWNoZWRQcmV2XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbGlkZS1ncm91cF9fcHJldicsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ3Ytc2xpZGUtZ3JvdXBfX3ByZXYtLWRpc2FibGVkJzogIXRoaXMuaGFzUHJldixcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5vbkFmZml4Q2xpY2soJ3ByZXYnKSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiAncHJldicsXG4gICAgICB9LCBbc2xvdF0pXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uIChsb2NhdGlvbjogJ3ByZXYnIHwgJ25leHQnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWRmFkZVRyYW5zaXRpb24sIFt0aGlzLmdlbkljb24obG9jYXRpb24pXSlcbiAgICB9LFxuICAgIGdlbldyYXBwZXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbGlkZS1ncm91cF9fd3JhcHBlcicsXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3RvdWNoJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgc3RhcnQ6IChlOiBUb3VjaEV2ZW50KSA9PiB0aGlzLm92ZXJmbG93Q2hlY2soZSwgdGhpcy5vblRvdWNoU3RhcnQpLFxuICAgICAgICAgICAgbW92ZTogKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMub3ZlcmZsb3dDaGVjayhlLCB0aGlzLm9uVG91Y2hNb3ZlKSxcbiAgICAgICAgICAgIGVuZDogKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMub3ZlcmZsb3dDaGVjayhlLCB0aGlzLm9uVG91Y2hFbmQpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1dLFxuICAgICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgIH0sIFt0aGlzLmdlbkNvbnRlbnQoKV0pXG4gICAgfSxcbiAgICBjYWxjdWxhdGVOZXdPZmZzZXQgKGRpcmVjdGlvbjogJ3ByZXYnIHwgJ25leHQnLCB3aWR0aHM6IFdpZHRocywgcnRsOiBib29sZWFuLCBjdXJyZW50U2Nyb2xsT2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHNpZ24gPSBydGwgPyAtMSA6IDFcbiAgICAgIGNvbnN0IG5ld0Fib3NsdXRlT2Zmc2V0ID0gc2lnbiAqIGN1cnJlbnRTY3JvbGxPZmZzZXQgK1xuICAgICAgICAoZGlyZWN0aW9uID09PSAncHJldicgPyAtMSA6IDEpICogd2lkdGhzLndyYXBwZXJcblxuICAgICAgcmV0dXJuIHNpZ24gKiBNYXRoLm1heChNYXRoLm1pbihuZXdBYm9zbHV0ZU9mZnNldCwgd2lkdGhzLmNvbnRlbnQgLSB3aWR0aHMud3JhcHBlciksIDApXG4gICAgfSxcbiAgICBvbkFmZml4Q2xpY2sgKGxvY2F0aW9uOiAncHJldicgfCAnbmV4dCcpIHtcbiAgICAgIHRoaXMuJGVtaXQoYGNsaWNrOiR7bG9jYXRpb259YClcbiAgICAgIHRoaXMuc2Nyb2xsVG8obG9jYXRpb24pXG4gICAgfSxcbiAgICBvblJlc2l6ZSAoKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm5cblxuICAgICAgdGhpcy5zZXRXaWR0aHMoKVxuICAgIH0sXG4gICAgb25Ub3VjaFN0YXJ0IChlOiBUb3VjaEV2ZW50KSB7XG4gICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuJHJlZnNcblxuICAgICAgdGhpcy5zdGFydFggPSB0aGlzLnNjcm9sbE9mZnNldCArIGUudG91Y2hzdGFydFggYXMgbnVtYmVyXG5cbiAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCAnbm9uZScpXG4gICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCd3aWxsQ2hhbmdlJywgJ3RyYW5zZm9ybScpXG4gICAgfSxcbiAgICBvblRvdWNoTW92ZSAoZTogVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB0aGlzLnN0YXJ0WCAtIGUudG91Y2htb3ZlWFxuICAgIH0sXG4gICAgb25Ub3VjaEVuZCAoKSB7XG4gICAgICBjb25zdCB7IGNvbnRlbnQsIHdyYXBwZXIgfSA9IHRoaXMuJHJlZnNcbiAgICAgIGNvbnN0IG1heFNjcm9sbE9mZnNldCA9IGNvbnRlbnQuY2xpZW50V2lkdGggLSB3cmFwcGVyLmNsaWVudFdpZHRoXG5cbiAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCBudWxsKVxuICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lsbENoYW5nZScsIG51bGwpXG5cbiAgICAgIGlmICh0aGlzLiR2dWV0aWZ5LnJ0bCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxPZmZzZXQgPiAwIHx8ICF0aGlzLmlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IDBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbE9mZnNldCA8PSAtbWF4U2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSAtbWF4U2Nyb2xsT2Zmc2V0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbE9mZnNldCA8IDAgfHwgIXRoaXMuaXNPdmVyZmxvd2luZykge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gMFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsT2Zmc2V0ID49IG1heFNjcm9sbE9mZnNldCkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gbWF4U2Nyb2xsT2Zmc2V0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG92ZXJmbG93Q2hlY2sgKGU6IFRvdWNoRXZlbnQsIGZuOiAoZTogVG91Y2hFdmVudCkgPT4gdm9pZCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5pc092ZXJmbG93aW5nICYmIGZuKGUpXG4gICAgfSxcbiAgICBzY3JvbGxJbnRvVmlldyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gMCB8fFxuICAgICAgICAoIXRoaXMuY2VudGVyQWN0aXZlICYmICF0aGlzLmlzT3ZlcmZsb3dpbmcpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSAwXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2VudGVyQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gdGhpcy5jYWxjdWxhdGVDZW50ZXJlZE9mZnNldChcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS4kZWwgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgdGhpcy53aWR0aHMsXG4gICAgICAgICAgdGhpcy4kdnVldGlmeS5ydGxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB0aGlzLmNhbGN1bGF0ZVVwZGF0ZWRPZmZzZXQoXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uJGVsIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgIHRoaXMud2lkdGhzLFxuICAgICAgICAgIHRoaXMuJHZ1ZXRpZnkucnRsLFxuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbGN1bGF0ZVVwZGF0ZWRPZmZzZXQgKHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQsIHdpZHRoczogV2lkdGhzLCBydGw6IGJvb2xlYW4sIGN1cnJlbnRTY3JvbGxPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICBjb25zdCBjbGllbnRXaWR0aCA9IHNlbGVjdGVkRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHJ0bFxuICAgICAgICA/ICh3aWR0aHMuY29udGVudCAtIHNlbGVjdGVkRWxlbWVudC5vZmZzZXRMZWZ0IC0gY2xpZW50V2lkdGgpXG4gICAgICAgIDogc2VsZWN0ZWRFbGVtZW50Lm9mZnNldExlZnRcblxuICAgICAgaWYgKHJ0bCkge1xuICAgICAgICBjdXJyZW50U2Nyb2xsT2Zmc2V0ID0gLWN1cnJlbnRTY3JvbGxPZmZzZXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG90YWxXaWR0aCA9IHdpZHRocy53cmFwcGVyICsgY3VycmVudFNjcm9sbE9mZnNldFxuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IGNsaWVudFdpZHRoICsgb2Zmc2V0TGVmdFxuICAgICAgY29uc3QgYWRkaXRpb25hbE9mZnNldCA9IGNsaWVudFdpZHRoICogMC40XG5cbiAgICAgIGlmIChvZmZzZXRMZWZ0IDw9IGN1cnJlbnRTY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgY3VycmVudFNjcm9sbE9mZnNldCA9IE1hdGgubWF4KG9mZnNldExlZnQgLSBhZGRpdGlvbmFsT2Zmc2V0LCAwKVxuICAgICAgfSBlbHNlIGlmICh0b3RhbFdpZHRoIDw9IGl0ZW1PZmZzZXQpIHtcbiAgICAgICAgY3VycmVudFNjcm9sbE9mZnNldCA9IE1hdGgubWluKGN1cnJlbnRTY3JvbGxPZmZzZXQgLSAodG90YWxXaWR0aCAtIGl0ZW1PZmZzZXQgLSBhZGRpdGlvbmFsT2Zmc2V0KSwgd2lkdGhzLmNvbnRlbnQgLSB3aWR0aHMud3JhcHBlcilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ0bCA/IC1jdXJyZW50U2Nyb2xsT2Zmc2V0IDogY3VycmVudFNjcm9sbE9mZnNldFxuICAgIH0sXG4gICAgY2FsY3VsYXRlQ2VudGVyZWRPZmZzZXQgKHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQsIHdpZHRoczogV2lkdGhzLCBydGw6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgICAgY29uc3QgeyBvZmZzZXRMZWZ0LCBjbGllbnRXaWR0aCB9ID0gc2VsZWN0ZWRFbGVtZW50XG5cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0Q2VudGVyZWQgPSB3aWR0aHMuY29udGVudCAtIG9mZnNldExlZnQgLSBjbGllbnRXaWR0aCAvIDIgLSB3aWR0aHMud3JhcHBlciAvIDJcbiAgICAgICAgcmV0dXJuIC1NYXRoLm1pbih3aWR0aHMuY29udGVudCAtIHdpZHRocy53cmFwcGVyLCBNYXRoLm1heCgwLCBvZmZzZXRDZW50ZXJlZCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvZmZzZXRDZW50ZXJlZCA9IG9mZnNldExlZnQgKyBjbGllbnRXaWR0aCAvIDIgLSB3aWR0aHMud3JhcHBlciAvIDJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKHdpZHRocy5jb250ZW50IC0gd2lkdGhzLndyYXBwZXIsIE1hdGgubWF4KDAsIG9mZnNldENlbnRlcmVkKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbFRvIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIChsb2NhdGlvbjogJ3ByZXYnIHwgJ25leHQnKSB7XG4gICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHRoaXMuY2FsY3VsYXRlTmV3T2Zmc2V0KGxvY2F0aW9uLCB7XG4gICAgICAgIC8vIEZvcmNlIHJlZmxvd1xuICAgICAgICBjb250ZW50OiB0aGlzLiRyZWZzLmNvbnRlbnQgPyB0aGlzLiRyZWZzLmNvbnRlbnQuY2xpZW50V2lkdGggOiAwLFxuICAgICAgICB3cmFwcGVyOiB0aGlzLiRyZWZzLndyYXBwZXIgPyB0aGlzLiRyZWZzLndyYXBwZXIuY2xpZW50V2lkdGggOiAwLFxuICAgICAgfSwgdGhpcy4kdnVldGlmeS5ydGwsIHRoaXMuc2Nyb2xsT2Zmc2V0KVxuICAgIH0sXG4gICAgc2V0V2lkdGhzIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICAoKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb250ZW50LCB3cmFwcGVyIH0gPSB0aGlzLiRyZWZzXG5cbiAgICAgICAgdGhpcy53aWR0aHMgPSB7XG4gICAgICAgICAgY29udGVudDogY29udGVudCA/IGNvbnRlbnQuY2xpZW50V2lkdGggOiAwLFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIgPyB3cmFwcGVyLmNsaWVudFdpZHRoIDogMCxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPdmVyZmxvd2luZyA9IHRoaXMud2lkdGhzLndyYXBwZXIgPCB0aGlzLndpZHRocy5jb250ZW50XG5cbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB0aGlzLmdlbkRhdGEoKSwgW1xuICAgICAgdGhpcy5nZW5QcmV2KCksXG4gICAgICB0aGlzLmdlbldyYXBwZXIoKSxcbiAgICAgIHRoaXMuZ2VuTmV4dCgpLFxuICAgIF0pXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlU2xpZGVHcm91cC5leHRlbmQoe1xuICBuYW1lOiAndi1zbGlkZS1ncm91cCcsXG5cbiAgcHJvdmlkZSAoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2xpZGVHcm91cDogdGhpcyxcbiAgICB9XG4gIH0sXG59KVxuIiwiLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IHsgQmFzZVNsaWRlR3JvdXAgfSBmcm9tICcuLi9WU2xpZGVHcm91cC9WU2xpZGVHcm91cCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZUYWIgZnJvbSAnLi9WVGFiJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcbmltcG9ydCBTU1JCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc3NyLWJvb3RhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxudHlwZSBWVGFiSW5zdGFuY2UgPSBJbnN0YW5jZVR5cGU8dHlwZW9mIFZUYWI+XG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgQmFzZVNsaWRlR3JvdXAsXG4gIFNTUkJvb3RhYmxlLFxuICBUaGVtZWFibGVcbiAgLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFicy1iYXInLFxuXG4gIHByb3ZpZGUgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWJzQmFyOiB0aGlzLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uQmFzZVNsaWRlR3JvdXAub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRhYnMtYmFyJzogdHJ1ZSxcbiAgICAgICAgJ3YtdGFicy1iYXItLWlzLW1vYmlsZSc6IHRoaXMuaXNNb2JpbGUsXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIGFuZCBtb3ZlIHRvIHYtc2xpZGUtZ3JvdXBcbiAgICAgICAgJ3YtdGFicy1iYXItLXNob3ctYXJyb3dzJzogdGhpcy5zaG93QXJyb3dzLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6ICdjYWxsU2xpZGVyJyxcbiAgICBpbnRlcm5hbFZhbHVlOiAnY2FsbFNsaWRlcicsXG4gICAgJHJvdXRlOiAnb25Sb3V0ZUNoYW5nZScsXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhbGxTbGlkZXIgKCkge1xuICAgICAgaWYgKCF0aGlzLmlzQm9vdGVkKSByZXR1cm5cblxuICAgICAgdGhpcy4kZW1pdCgnY2FsbDpzbGlkZXInKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBCYXNlU2xpZGVHcm91cC5vcHRpb25zLm1ldGhvZHMuZ2VuQ29udGVudC5jYWxsKHRoaXMpXG5cbiAgICAgIHJlbmRlci5kYXRhID0gcmVuZGVyLmRhdGEgfHwge31cbiAgICAgIHJlbmRlci5kYXRhLnN0YXRpY0NsYXNzICs9ICcgdi10YWJzLWJhcl9fY29udGVudCdcblxuICAgICAgcmV0dXJuIHJlbmRlclxuICAgIH0sXG4gICAgb25Sb3V0ZUNoYW5nZSAodmFsOiBSb3V0ZSwgb2xkVmFsOiBSb3V0ZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmICh0aGlzLm1hbmRhdG9yeSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcyBhcyB1bmtub3duIGFzIFZUYWJJbnN0YW5jZVtdXG4gICAgICBjb25zdCBuZXdQYXRoID0gdmFsLnBhdGhcbiAgICAgIGNvbnN0IG9sZFBhdGggPSBvbGRWYWwucGF0aFxuXG4gICAgICBsZXQgaGFzTmV3ID0gZmFsc2VcbiAgICAgIGxldCBoYXNPbGQgPSBmYWxzZVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGl0ZW0udG8gPT09IG5ld1BhdGgpIGhhc05ldyA9IHRydWVcbiAgICAgICAgZWxzZSBpZiAoaXRlbS50byA9PT0gb2xkUGF0aCkgaGFzT2xkID0gdHJ1ZVxuXG4gICAgICAgIGlmIChoYXNOZXcgJiYgaGFzT2xkKSBicmVha1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGFuIG9sZCBpdGVtIGFuZCBub3QgYSBuZXcgb25lXG4gICAgICAvLyBpdCdzIGFzc3VtZWQgdGhhdCB0aGUgdXNlciBuYXZpZ2F0ZWQgdG9cbiAgICAgIC8vIGEgcGF0aCB0aGF0IGlzIG5vdCBwcmVzZW50IGluIHRoZSBpdGVtc1xuICAgICAgaWYgKCFoYXNOZXcgJiYgaGFzT2xkKSB0aGlzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWRcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCByZW5kZXIgPSBCYXNlU2xpZGVHcm91cC5vcHRpb25zLnJlbmRlci5jYWxsKHRoaXMsIGgpXG5cbiAgICByZW5kZXIuZGF0YSEuYXR0cnMgPSB7XG4gICAgICByb2xlOiAndGFibGlzdCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZS90eXBlcydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhDb2xvcmFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYnMtc2xpZGVyJyxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi10YWJzLXNsaWRlcicsXG4gICAgfSkpXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRhYnMuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZUYWJzQmFyIGZyb20gJy4vVlRhYnNCYXInXG5pbXBvcnQgVlRhYnNJdGVtcyBmcm9tICcuL1ZUYWJzSXRlbXMnXG5pbXBvcnQgVlRhYnNTbGlkZXIgZnJvbSAnLi9WVGFic1NsaWRlcidcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgUHJveHlhYmxlIGZyb20gJy4uLy4uL21peGlucy9wcm94eWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBSZXNpemUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IEV4dHJhY3RWdWUgfSBmcm9tICcuLy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFByb3h5YWJsZSxcbiAgVGhlbWVhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkcmVmczoge1xuICAgIGl0ZW1zOiBJbnN0YW5jZVR5cGU8dHlwZW9mIFZUYWJzQmFyPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFicycsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIFJlc2l6ZSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGFsaWduV2l0aFRpdGxlOiBCb29sZWFuLFxuICAgIGJhY2tncm91bmRDb2xvcjogU3RyaW5nLFxuICAgIGNlbnRlckFjdGl2ZTogQm9vbGVhbixcbiAgICBjZW50ZXJlZDogQm9vbGVhbixcbiAgICBmaXhlZFRhYnM6IEJvb2xlYW4sXG4gICAgZ3JvdzogQm9vbGVhbixcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBoaWRlU2xpZGVyOiBCb29sZWFuLFxuICAgIGljb25zQW5kVGV4dDogQm9vbGVhbixcbiAgICBtb2JpbGVCcmVha3BvaW50OiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgIG5leHRJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJG5leHQnLFxuICAgIH0sXG4gICAgb3B0aW9uYWw6IEJvb2xlYW4sXG4gICAgcHJldkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckcHJldicsXG4gICAgfSxcbiAgICByaWdodDogQm9vbGVhbixcbiAgICBzaG93QXJyb3dzOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICBzbGlkZXJDb2xvcjogU3RyaW5nLFxuICAgIHNsaWRlclNpemU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAyLFxuICAgIH0sXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2l6ZVRpbWVvdXQ6IDAsXG4gICAgICBzbGlkZXI6IHtcbiAgICAgICAgaGVpZ2h0OiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICAgIGxlZnQ6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgICAgcmlnaHQ6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgICAgdG9wOiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICAgIHdpZHRoOiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvblRpbWU6IDMwMCxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtdGFicy0tYWxpZ24td2l0aC10aXRsZSc6IHRoaXMuYWxpZ25XaXRoVGl0bGUsXG4gICAgICAgICd2LXRhYnMtLWNlbnRlcmVkJzogdGhpcy5jZW50ZXJlZCxcbiAgICAgICAgJ3YtdGFicy0tZml4ZWQtdGFicyc6IHRoaXMuZml4ZWRUYWJzLFxuICAgICAgICAndi10YWJzLS1ncm93JzogdGhpcy5ncm93LFxuICAgICAgICAndi10YWJzLS1pY29ucy1hbmQtdGV4dCc6IHRoaXMuaWNvbnNBbmRUZXh0LFxuICAgICAgICAndi10YWJzLS1yaWdodCc6IHRoaXMucmlnaHQsXG4gICAgICAgICd2LXRhYnMtLXZlcnRpY2FsJzogdGhpcy52ZXJ0aWNhbCxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc1JldmVyc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LnJ0bCAmJiB0aGlzLnZlcnRpY2FsXG4gICAgfSxcbiAgICBzbGlkZXJTdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIuaGVpZ2h0KSxcbiAgICAgICAgbGVmdDogdGhpcy5pc1JldmVyc2VkID8gdW5kZWZpbmVkIDogY29udmVydFRvVW5pdCh0aGlzLnNsaWRlci5sZWZ0KSxcbiAgICAgICAgcmlnaHQ6IHRoaXMuaXNSZXZlcnNlZCA/IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIucmlnaHQpIDogdW5kZWZpbmVkLFxuICAgICAgICB0b3A6IHRoaXMudmVydGljYWwgPyBjb252ZXJ0VG9Vbml0KHRoaXMuc2xpZGVyLnRvcCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHRyYW5zaXRpb246IHRoaXMuc2xpZGVyLmxlZnQgIT0gbnVsbCA/IG51bGwgOiAnbm9uZScsXG4gICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMuc2xpZGVyLndpZHRoKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5jb2xvcikgcmV0dXJuIHRoaXMuY29sb3JcbiAgICAgIGVsc2UgaWYgKHRoaXMuaXNEYXJrICYmICF0aGlzLmFwcElzRGFyaykgcmV0dXJuICd3aGl0ZSdcbiAgICAgIGVsc2UgcmV0dXJuICdwcmltYXJ5J1xuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBhbGlnbldpdGhUaXRsZTogJ2NhbGxTbGlkZXInLFxuICAgIGNlbnRlcmVkOiAnY2FsbFNsaWRlcicsXG4gICAgY2VudGVyQWN0aXZlOiAnY2FsbFNsaWRlcicsXG4gICAgZml4ZWRUYWJzOiAnY2FsbFNsaWRlcicsXG4gICAgZ3JvdzogJ2NhbGxTbGlkZXInLFxuICAgIHJpZ2h0OiAnY2FsbFNsaWRlcicsXG4gICAgc2hvd0Fycm93czogJ2NhbGxTbGlkZXInLFxuICAgIHZlcnRpY2FsOiAnY2FsbFNsaWRlcicsXG4gICAgJyR2dWV0aWZ5LmFwcGxpY2F0aW9uLmxlZnQnOiAnb25SZXNpemUnLFxuICAgICckdnVldGlmeS5hcHBsaWNhdGlvbi5yaWdodCc6ICdvblJlc2l6ZScsXG4gICAgJyR2dWV0aWZ5LnJ0bCc6ICdvblJlc2l6ZScsXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5jYWxsU2xpZGVyLCAzMClcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxsU2xpZGVyICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5oaWRlU2xpZGVyIHx8XG4gICAgICAgICF0aGlzLiRyZWZzLml0ZW1zIHx8XG4gICAgICAgICF0aGlzLiRyZWZzLml0ZW1zLnNlbGVjdGVkSXRlbXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zbGlkZXIud2lkdGggPSAwXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIC8vIEdpdmUgc2NyZWVuIHRpbWUgdG8gcGFpbnRcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gdGhpcy4kcmVmcy5pdGVtcy5zZWxlY3RlZEl0ZW1zWzBdXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoIWFjdGl2ZVRhYiB8fCAhYWN0aXZlVGFiLiRlbCkge1xuICAgICAgICAgIHRoaXMuc2xpZGVyLndpZHRoID0gMFxuICAgICAgICAgIHRoaXMuc2xpZGVyLmxlZnQgPSAwXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSBhY3RpdmVUYWIuJGVsIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgdGhpcy5zbGlkZXIgPSB7XG4gICAgICAgICAgaGVpZ2h0OiAhdGhpcy52ZXJ0aWNhbCA/IE51bWJlcih0aGlzLnNsaWRlclNpemUpIDogZWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IHRoaXMudmVydGljYWwgPyAwIDogZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgICByaWdodDogdGhpcy52ZXJ0aWNhbCA/IDAgOiBlbC5vZmZzZXRMZWZ0ICsgZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgdG9wOiBlbC5vZmZzZXRUb3AsXG4gICAgICAgICAgd2lkdGg6IHRoaXMudmVydGljYWwgPyBOdW1iZXIodGhpcy5zbGlkZXJTaXplKSA6IGVsLnNjcm9sbFdpZHRoLFxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgZ2VuQmFyIChpdGVtczogVk5vZGVbXSwgc2xpZGVyOiBWTm9kZSB8IG51bGwpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBjZW50ZXJBY3RpdmU6IHRoaXMuY2VudGVyQWN0aXZlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICBtYW5kYXRvcnk6ICF0aGlzLm9wdGlvbmFsLFxuICAgICAgICAgIG1vYmlsZUJyZWFrcG9pbnQ6IHRoaXMubW9iaWxlQnJlYWtwb2ludCxcbiAgICAgICAgICBuZXh0SWNvbjogdGhpcy5uZXh0SWNvbixcbiAgICAgICAgICBwcmV2SWNvbjogdGhpcy5wcmV2SWNvbixcbiAgICAgICAgICBzaG93QXJyb3dzOiB0aGlzLnNob3dBcnJvd3MsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaW50ZXJuYWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnY2FsbDpzbGlkZXInOiB0aGlzLmNhbGxTbGlkZXIsXG4gICAgICAgICAgY2hhbmdlOiAodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHZhbFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogJ2l0ZW1zJyxcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb21wdXRlZENvbG9yLCBkYXRhKVxuICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IsIGRhdGEpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZUYWJzQmFyLCBkYXRhLCBbXG4gICAgICAgIHRoaXMuZ2VuU2xpZGVyKHNsaWRlciksXG4gICAgICAgIGl0ZW1zLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkl0ZW1zIChpdGVtczogVk5vZGUgfCBudWxsLCBpdGVtOiBWTm9kZVtdKSB7XG4gICAgICAvLyBJZiB1c2VyIHByb3ZpZGVzIGl0ZW1zXG4gICAgICAvLyBvcHQgdG8gdXNlIHRoZWlyc1xuICAgICAgaWYgKGl0ZW1zKSByZXR1cm4gaXRlbXNcblxuICAgICAgLy8gSWYgbm8gdGFicyBhcmUgcHJvdmlkZWRcbiAgICAgIC8vIHJlbmRlciBub3RoaW5nXG4gICAgICBpZiAoIWl0ZW0ubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWVGFic0l0ZW1zLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuaW50ZXJuYWxWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6ICh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sIGl0ZW0pXG4gICAgfSxcbiAgICBnZW5TbGlkZXIgKHNsaWRlcjogVk5vZGUgfCBudWxsKSB7XG4gICAgICBpZiAodGhpcy5oaWRlU2xpZGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICBpZiAoIXNsaWRlcikge1xuICAgICAgICBzbGlkZXIgPSB0aGlzLiRjcmVhdGVFbGVtZW50KFZUYWJzU2xpZGVyLCB7XG4gICAgICAgICAgcHJvcHM6IHsgY29sb3I6IHRoaXMuc2xpZGVyQ29sb3IgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRhYnMtc2xpZGVyLXdyYXBwZXInLFxuICAgICAgICBzdHlsZTogdGhpcy5zbGlkZXJTdHlsZXMsXG4gICAgICB9LCBbc2xpZGVyXSlcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkgcmV0dXJuXG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpXG4gICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmNhbGxTbGlkZXIsIDApXG4gICAgfSxcbiAgICBwYXJzZU5vZGVzICgpIHtcbiAgICAgIGxldCBpdGVtcyA9IG51bGxcbiAgICAgIGxldCBzbGlkZXIgPSBudWxsXG4gICAgICBjb25zdCBpdGVtID0gW11cbiAgICAgIGNvbnN0IHRhYiA9IFtdXG4gICAgICBjb25zdCBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgY29uc3QgbGVuZ3RoID0gc2xvdC5sZW5ndGhcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2bm9kZSA9IHNsb3RbaV1cblxuICAgICAgICBpZiAodm5vZGUuY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgICAgIHN3aXRjaCAodm5vZGUuY29tcG9uZW50T3B0aW9ucy5DdG9yLm9wdGlvbnMubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAndi10YWJzLXNsaWRlcic6IHNsaWRlciA9IHZub2RlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd2LXRhYnMtaXRlbXMnOiBpdGVtcyA9IHZub2RlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd2LXRhYi1pdGVtJzogaXRlbS5wdXNoKHZub2RlKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgLy8gY2FzZSAndi10YWInIC0gaW50ZW50aW9uYWxseSBvbWl0dGVkXG4gICAgICAgICAgICBkZWZhdWx0OiB0YWIucHVzaCh2bm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFiLnB1c2godm5vZGUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiB0YWI6IGFycmF5IG9mIGB2LXRhYmBcbiAgICAgICAqIHNsaWRlcjogc2luZ2xlIGB2LXRhYnMtc2xpZGVyYFxuICAgICAgICogaXRlbXM6IHNpbmdsZSBgdi10YWJzLWl0ZW1zYFxuICAgICAgICogaXRlbTogYXJyYXkgb2YgYHYtdGFiLWl0ZW1gXG4gICAgICAgKi9cbiAgICAgIHJldHVybiB7IHRhYiwgc2xpZGVyLCBpdGVtcywgaXRlbSB9XG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyB0YWIsIHNsaWRlciwgaXRlbXMsIGl0ZW0gfSA9IHRoaXMucGFyc2VOb2RlcygpXG5cbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXRhYnMnLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6ICdyZXNpemUnLFxuICAgICAgICBtb2RpZmllcnM6IHsgcXVpZXQ6IHRydWUgfSxcbiAgICAgICAgdmFsdWU6IHRoaXMub25SZXNpemUsXG4gICAgICB9XSxcbiAgICB9LCBbXG4gICAgICB0aGlzLmdlbkJhcih0YWIsIHNsaWRlciksXG4gICAgICB0aGlzLmdlbkl0ZW1zKGl0ZW1zLCBpdGVtKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBWV2luZG93IGZyb20gJy4vVldpbmRvdydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQm9vdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2Jvb3RhYmxlJ1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBHcm91cGFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL2dyb3VwYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFRvdWNoIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMsIHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIEJvb3RhYmxlLFxuICBHcm91cGFibGVGYWN0b3J5KCd3aW5kb3dHcm91cCcsICd2LXdpbmRvdy1pdGVtJywgJ3Ytd2luZG93JylcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBFeHRyYWN0VnVlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRlbDogSFRNTEVsZW1lbnRcbiAgd2luZG93R3JvdXA6IEluc3RhbmNlVHlwZTx0eXBlb2YgVldpbmRvdz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoXG4gIC8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXdpbmRvdy1pdGVtJyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgVG91Y2gsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICByZXZlcnNlVHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgaW5UcmFuc2l0aW9uOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBDbGFzc2VzXG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zaXRpb24gKCk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICAgICAgaWYgKCF0aGlzLndpbmRvd0dyb3VwLmludGVybmFsUmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMudHJhbnNpdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICA/IHRoaXMudHJhbnNpdGlvbiB8fCAnJ1xuICAgICAgICAgIDogdGhpcy53aW5kb3dHcm91cC5jb21wdXRlZFRyYW5zaXRpb25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJldmVyc2VUcmFuc2l0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMucmV2ZXJzZVRyYW5zaXRpb24gfHwgJydcbiAgICAgICAgOiB0aGlzLndpbmRvd0dyb3VwLmNvbXB1dGVkVHJhbnNpdGlvblxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzbG90cy5kZWZhdWx0XG4gICAgfSxcbiAgICBnZW5XaW5kb3dJdGVtICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi13aW5kb3ctaXRlbScsXG4gICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICB9XSxcbiAgICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICAgIH0sIHRoaXMuZ2VuRGVmYXVsdFNsb3QoKSlcbiAgICB9LFxuICAgIG9uQWZ0ZXJUcmFuc2l0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmFsaXplIHRyYW5zaXRpb24gc3RhdGUuXG4gICAgICB0aGlzLmluVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICBpZiAodGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQgPiAwKSB7XG4gICAgICAgIHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkNvdW50LS1cblxuICAgICAgICAvLyBSZW1vdmUgY29udGFpbmVyIGhlaWdodCBpZiB3ZSBhcmUgb3V0IG9mIHRyYW5zaXRpb24uXG4gICAgICAgIGlmICh0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25Db3VudCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkhlaWdodCA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkJlZm9yZVRyYW5zaXRpb24gKCkge1xuICAgICAgaWYgKHRoaXMuaW5UcmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJbml0aWFsaXplIHRyYW5zaXRpb24gc3RhdGUgaGVyZS5cbiAgICAgIHRoaXMuaW5UcmFuc2l0aW9uID0gdHJ1ZVxuICAgICAgaWYgKHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkNvdW50ID09PSAwKSB7XG4gICAgICAgIC8vIFNldCBpbml0aWFsIGhlaWdodCBmb3IgaGVpZ2h0IHRyYW5zaXRpb24uXG4gICAgICAgIHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkhlaWdodCA9IGNvbnZlcnRUb1VuaXQodGhpcy53aW5kb3dHcm91cC4kZWwuY2xpZW50SGVpZ2h0KVxuICAgICAgfVxuICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQrK1xuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uQ2FuY2VsbGVkICgpIHtcbiAgICAgIHRoaXMub25BZnRlclRyYW5zaXRpb24oKSAvLyBUaGlzIHNob3VsZCBoYXZlIHRoZSBzYW1lIHBhdGggYXMgbm9ybWFsIHRyYW5zaXRpb24gZW5kLlxuICAgIH0sXG4gICAgb25FbnRlciAoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaW5UcmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIC8vIERvIG5vdCBzZXQgaGVpZ2h0IGlmIG5vIHRyYW5zaXRpb24gb3IgY2FuY2VsbGVkLlxuICAgICAgICBpZiAoIXRoaXMuY29tcHV0ZWRUcmFuc2l0aW9uIHx8ICF0aGlzLmluVHJhbnNpdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRyYW5zaXRpb24gdGFyZ2V0IGhlaWdodC5cbiAgICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uSGVpZ2h0ID0gY29udmVydFRvVW5pdChlbC5jbGllbnRIZWlnaHQpXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCd0cmFuc2l0aW9uJywge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbmFtZTogdGhpcy5jb21wdXRlZFRyYW5zaXRpb24sXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgLy8gSGFuZGxlcnMgZm9yIGVudGVyIHdpbmRvd3MuXG4gICAgICAgIGJlZm9yZUVudGVyOiB0aGlzLm9uQmVmb3JlVHJhbnNpdGlvbixcbiAgICAgICAgYWZ0ZXJFbnRlcjogdGhpcy5vbkFmdGVyVHJhbnNpdGlvbixcbiAgICAgICAgZW50ZXJDYW5jZWxsZWQ6IHRoaXMub25UcmFuc2l0aW9uQ2FuY2VsbGVkLFxuXG4gICAgICAgIC8vIEhhbmRsZXJzIGZvciBsZWF2ZSB3aW5kb3dzLlxuICAgICAgICBiZWZvcmVMZWF2ZTogdGhpcy5vbkJlZm9yZVRyYW5zaXRpb24sXG4gICAgICAgIGFmdGVyTGVhdmU6IHRoaXMub25BZnRlclRyYW5zaXRpb24sXG4gICAgICAgIGxlYXZlQ2FuY2VsbGVkOiB0aGlzLm9uVHJhbnNpdGlvbkNhbmNlbGxlZCxcblxuICAgICAgICAvLyBFbnRlciBoYW5kbGVyIGZvciBoZWlnaHQgdHJhbnNpdGlvbi5cbiAgICAgICAgZW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIH0sXG4gICAgfSwgdGhpcy5zaG93TGF6eUNvbnRlbnQoKCkgPT4gW3RoaXMuZ2VuV2luZG93SXRlbSgpXSkpXG4gIH0sXG59KVxuIiwiLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZXaW5kb3dJdGVtIGZyb20gJy4uL1ZXaW5kb3cvVldpbmRvd0l0ZW0nXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWV2luZG93SXRlbS5leHRlbmQoe1xuICBuYW1lOiAndi10YWItaXRlbScsXG5cbiAgcHJvcHM6IHtcbiAgICBpZDogU3RyaW5nLFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5XaW5kb3dJdGVtICgpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBWV2luZG93SXRlbS5vcHRpb25zLm1ldGhvZHMuZ2VuV2luZG93SXRlbS5jYWxsKHRoaXMpXG5cbiAgICAgIGl0ZW0uZGF0YSEuZG9tUHJvcHMgPSBpdGVtLmRhdGEhLmRvbVByb3BzIHx8IHt9XG4gICAgICBpdGVtLmRhdGEhLmRvbVByb3BzLmlkID0gdGhpcy5pZCB8fCB0aGlzLnZhbHVlXG5cbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBNaXhpbnNcbmltcG9ydCBNZWFzdXJhYmxlIGZyb20gJy4uLy4uL21peGlucy9tZWFzdXJhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBpbnRlcnNlY3QgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9pbnRlcnNlY3QnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IgfSBmcm9tICd2dWUvdHlwZXMvb3B0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBNZWFzdXJhYmxlLFxuICBUb2dnbGVhYmxlXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICdWTGF6eScsXG5cbiAgZGlyZWN0aXZlczogeyBpbnRlcnNlY3QgfSxcblxuICBwcm9wczoge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIC8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHR5cGVzLCBuYXZpZ2F0ZSB0bzpcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnRlcnNlY3Rpb25fT2JzZXJ2ZXJfQVBJXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe1xuICAgICAgICByb290OiB1bmRlZmluZWQsXG4gICAgICAgIHJvb3RNYXJnaW46IHVuZGVmaW5lZCxcbiAgICAgICAgdGhyZXNob2xkOiB1bmRlZmluZWQsXG4gICAgICB9KSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0PixcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2ZhZGUtdHJhbnNpdGlvbicsXG4gICAgfSxcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMubWVhc3VyYWJsZVN0eWxlcyxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90KHRoaXMpXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBzbG90XG5cbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIGNoaWxkcmVuLnB1c2goc2xvdClcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RyYW5zaXRpb24nLCB7XG4gICAgICAgIHByb3BzOiB7IG5hbWU6IHRoaXMudHJhbnNpdGlvbiB9LFxuICAgICAgfSwgY2hpbGRyZW4pXG4gICAgfSxcbiAgICBvbk9ic2VydmUgKFxuICAgICAgZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdLFxuICAgICAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyLFxuICAgICAgaXNJbnRlcnNlY3Rpbmc6IGJvb2xlYW4sXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgcmV0dXJuXG5cbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBpc0ludGVyc2VjdGluZ1xuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKHRoaXMudGFnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbGF6eScsXG4gICAgICBhdHRyczogdGhpcy4kYXR0cnMsXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiAnaW50ZXJzZWN0JyxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBoYW5kbGVyOiB0aGlzLm9uT2JzZXJ2ZSxcbiAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICB9XSxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgfSwgW3RoaXMuZ2VuQ29udGVudCgpXSlcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ2hlY2tib3guc2FzcydcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvX3NlbGVjdGlvbi1jb250cm9scy5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5pbXBvcnQgVklucHV0IGZyb20gJy4uL1ZJbnB1dCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgU2VsZWN0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc2VsZWN0YWJsZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGFibGUuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY2hlY2tib3gnLFxuXG4gIHByb3BzOiB7XG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjaGVja2JveEluZGV0ZXJtaW5hdGUnLFxuICAgIH0sXG4gICAgb2ZmSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjaGVja2JveE9mZicsXG4gICAgfSxcbiAgICBvbkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2hlY2tib3hPbicsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRJbmRldGVybWluYXRlOiB0aGlzLmluZGV0ZXJtaW5hdGUsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtaW5wdXQtLXNlbGVjdGlvbi1jb250cm9scyc6IHRydWUsXG4gICAgICAgICd2LWlucHV0LS1jaGVja2JveCc6IHRydWUsXG4gICAgICAgICd2LWlucHV0LS1pbmRldGVybWluYXRlJzogdGhpcy5pbnB1dEluZGV0ZXJtaW5hdGUsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZEljb24gKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5pbnB1dEluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZUljb25cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkljb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZkljb25cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIERvIG5vdCByZXR1cm4gdW5kZWZpbmVkIGlmIGRpc2FibGVkLFxuICAgIC8vIGFjY29yZGluZyB0byBzcGVjLCBzaG91bGQgc3RpbGwgc2hvd1xuICAgIC8vIGEgY29sb3Igd2hlbiBkaXNhYmxlZCBhbmQgYWN0aXZlXG4gICAgdmFsaWRhdGlvblN0YXRlICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5pbnB1dEluZGV0ZXJtaW5hdGUpIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGlmICh0aGlzLmhhc0Vycm9yICYmIHRoaXMuc2hvdWxkVmFsaWRhdGUpIHJldHVybiAnZXJyb3InXG4gICAgICBpZiAodGhpcy5oYXNTdWNjZXNzKSByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgICBpZiAodGhpcy5oYXNDb2xvciAhPT0gbnVsbCkgcmV0dXJuIHRoaXMuY29tcHV0ZWRDb2xvclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbmRldGVybWluYXRlICh2YWwpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvODI3MFxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gKHRoaXMuaW5wdXRJbmRldGVybWluYXRlID0gdmFsKSlcbiAgICB9LFxuICAgIGlucHV0SW5kZXRlcm1pbmF0ZSAodmFsKSB7XG4gICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6aW5kZXRlcm1pbmF0ZScsIHZhbClcbiAgICB9LFxuICAgIGlzQWN0aXZlICgpIHtcbiAgICAgIGlmICghdGhpcy5pbmRldGVybWluYXRlKSByZXR1cm5cbiAgICAgIHRoaXMuaW5wdXRJbmRldGVybWluYXRlID0gZmFsc2VcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5DaGVja2JveCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXQtLXNlbGVjdGlvbi1jb250cm9sc19faW5wdXQnLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLnZhbGlkYXRpb25TdGF0ZSwge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkZW5zZTogdGhpcy5kZW5zZSxcbiAgICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLCB0aGlzLmNvbXB1dGVkSWNvbiksXG4gICAgICAgIHRoaXMuZ2VuSW5wdXQoJ2NoZWNrYm94Jywge1xuICAgICAgICAgIC4uLnRoaXMuYXR0cnMkLFxuICAgICAgICAgICdhcmlhLWNoZWNrZWQnOiB0aGlzLmlucHV0SW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgPyAnbWl4ZWQnXG4gICAgICAgICAgICA6IHRoaXMuaXNBY3RpdmUudG9TdHJpbmcoKSxcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMuZ2VuUmlwcGxlKHRoaXMuc2V0VGV4dENvbG9yKHRoaXMucmlwcGxlU3RhdGUpKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5EZWZhdWx0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlbkNoZWNrYm94KCksXG4gICAgICAgIHRoaXMuZ2VuTGFiZWwoKSxcbiAgICAgIF1cbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZTbmFja2Jhci5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldC9WU2hlZXQnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIFBvc2l0aW9uYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvcG9zaXRpb25hYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgZGVwcmVjYXRlLCByZW1vdmVkIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUHJvcFR5cGUsIFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIFZTaGVldCxcbiAgQ29sb3JhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFtcbiAgICAnYWJzb2x1dGUnLFxuICAgICdib3R0b20nLFxuICAgICdsZWZ0JyxcbiAgICAncmlnaHQnLFxuICAgICd0b3AnLFxuICBdKVxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc25hY2tiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwOiBCb29sZWFuLFxuICAgIGNlbnRlcmVkOiBCb29sZWFuLFxuICAgIGNvbnRlbnRDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBtdWx0aUxpbmU6IEJvb2xlYW4sXG4gICAgdGV4dDogQm9vbGVhbixcbiAgICB0aW1lb3V0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNTAwMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddIGFzIFByb3BUeXBlPGZhbHNlIHwgc3RyaW5nPixcbiAgICAgIGRlZmF1bHQ6ICd2LXNuYWNrLXRyYW5zaXRpb24nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVvZiB2ID09PSAnc3RyaW5nJyB8fCB2ID09PSBmYWxzZSxcbiAgICB9LFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYWN0aXZlVGltZW91dDogLTEsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXNuYWNrLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXNuYWNrLS1hY3RpdmUnOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICAndi1zbmFjay0tYm90dG9tJzogdGhpcy5ib3R0b20gfHwgIXRoaXMudG9wLFxuICAgICAgICAndi1zbmFjay0tY2VudGVyZWQnOiB0aGlzLmNlbnRlcmVkLFxuICAgICAgICAndi1zbmFjay0taGFzLWJhY2tncm91bmQnOiB0aGlzLmhhc0JhY2tncm91bmQsXG4gICAgICAgICd2LXNuYWNrLS1sZWZ0JzogdGhpcy5sZWZ0LFxuICAgICAgICAndi1zbmFjay0tbXVsdGktbGluZSc6IHRoaXMubXVsdGlMaW5lICYmICF0aGlzLnZlcnRpY2FsLFxuICAgICAgICAndi1zbmFjay0tcmlnaHQnOiB0aGlzLnJpZ2h0LFxuICAgICAgICAndi1zbmFjay0tdGV4dCc6IHRoaXMudGV4dCxcbiAgICAgICAgJ3Ytc25hY2stLXRvcCc6IHRoaXMudG9wLFxuICAgICAgICAndi1zbmFjay0tdmVydGljYWwnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gVGV4dCBhbmQgb3V0bGluZWQgc3R5bGVzIGJvdGhcbiAgICAvLyB1c2UgdHJhbnNwYXJlbnQgYmFja2dyb3VuZHNcbiAgICBoYXNCYWNrZ3JvdW5kICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLnRleHQgJiZcbiAgICAgICAgIXRoaXMub3V0bGluZWRcbiAgICAgIClcbiAgICB9LFxuICAgIC8vIFNuYWNrYmFyIGlzIGRhcmsgYnkgZGVmYXVsdFxuICAgIC8vIG92ZXJyaWRlIHRoZW1lYWJsZSBsb2dpYy5cbiAgICBpc0RhcmsgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQmFja2dyb3VuZFxuICAgICAgICA/ICF0aGlzLmxpZ2h0XG4gICAgICAgIDogVGhlbWVhYmxlLm9wdGlvbnMuY29tcHV0ZWQuaXNEYXJrLmNhbGwodGhpcylcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIC8vIFN0eWxlcyBhcmUgbm90IG5lZWRlZCB3aGVuXG4gICAgICAvLyB1c2luZyB0aGUgYWJzb2x1dGUgcHJvcC5cbiAgICAgIGlmICh0aGlzLmFic29sdXRlKSByZXR1cm4ge31cblxuICAgICAgY29uc3Qge1xuICAgICAgICBiYXIsXG4gICAgICAgIGJvdHRvbSxcbiAgICAgICAgZm9vdGVyLFxuICAgICAgICBpbnNldEZvb3RlcixcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIHRvcCxcbiAgICAgIH0gPSB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uXG5cbiAgICAgIC8vIFNob3VsZCBhbHdheXMgbW92ZSBmb3IgeS1heGlzXG4gICAgICAvLyBhcHBsaWNhdGlvbmFibGUgY29tcG9uZW50cy5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IGNvbnZlcnRUb1VuaXQoYm90dG9tICsgZm9vdGVyICsgaW5zZXRGb290ZXIpLFxuICAgICAgICBwYWRkaW5nTGVmdDogIXRoaXMuYXBwID8gdW5kZWZpbmVkIDogY29udmVydFRvVW5pdChsZWZ0KSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAhdGhpcy5hcHAgPyB1bmRlZmluZWQgOiBjb252ZXJ0VG9Vbml0KHJpZ2h0KSxcbiAgICAgICAgcGFkZGluZ1RvcDogY29udmVydFRvVW5pdChiYXIgKyB0b3ApLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc0FjdGl2ZTogJ3NldFRpbWVvdXQnLFxuICAgIHRpbWVvdXQ6ICdzZXRUaW1lb3V0JyxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkgdGhpcy5zZXRUaW1lb3V0KClcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnYXV0by1oZWlnaHQnKSkge1xuICAgICAgcmVtb3ZlZCgnYXV0by1oZWlnaHQnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIGlmICh0aGlzLnRpbWVvdXQgPT0gMCkge1xuICAgICAgZGVwcmVjYXRlKCd0aW1lb3V0PVwiMFwiJywgJy0xJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkFjdGlvbnMgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNuYWNrX19hY3Rpb24gJyxcbiAgICAgIH0sIFtcbiAgICAgICAgZ2V0U2xvdCh0aGlzLCAnYWN0aW9uJywge1xuICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiAndi1zbmFja19fYnRuJyB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbmFja19fY29udGVudCcsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgW3RoaXMuY29udGVudENsYXNzXTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByb2xlOiAnc3RhdHVzJyxcbiAgICAgICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LCBbZ2V0U2xvdCh0aGlzKV0pXG4gICAgfSxcbiAgICBnZW5XcmFwcGVyICgpIHtcbiAgICAgIGNvbnN0IHNldENvbG9yID0gdGhpcy5oYXNCYWNrZ3JvdW5kXG4gICAgICAgID8gdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgOiB0aGlzLnNldFRleHRDb2xvclxuXG4gICAgICBjb25zdCBkYXRhID0gc2V0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc25hY2tfX3dyYXBwZXInLFxuICAgICAgICBjbGFzczogVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdzaG93JyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgfV0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0YSwgW1xuICAgICAgICB0aGlzLmdlbkNvbnRlbnQoKSxcbiAgICAgICAgdGhpcy5nZW5BY3Rpb25zKCksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuVHJhbnNpdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHsgbmFtZTogdGhpcy50cmFuc2l0aW9uIH0sXG4gICAgICB9LCBbdGhpcy5nZW5XcmFwcGVyKCldKVxuICAgIH0sXG4gICAgc2V0VGltZW91dCAoKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZlVGltZW91dClcblxuICAgICAgY29uc3QgdGltZW91dCA9IE51bWJlcih0aGlzLnRpbWVvdXQpXG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNBY3RpdmUgfHxcbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIDAgaW4gdjNcbiAgICAgICAgWzAsIC0xXS5pbmNsdWRlcyh0aW1lb3V0KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgfSwgdGltZW91dClcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXNuYWNrJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgfSwgW1xuICAgICAgdGhpcy50cmFuc2l0aW9uICE9PSBmYWxzZVxuICAgICAgICA/IHRoaXMuZ2VuVHJhbnNpdGlvbigpXG4gICAgICAgIDogdGhpcy5nZW5XcmFwcGVyKCksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3YtY2FyZCcse2F0dHJzOntcImZsYXRcIjpcIlwifX0sW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwiLFwiYWxpZ24tY2VudGVyXCI6XCJcIn19LF92bS5fbCgoX3ZtLmRhdGEudmFsdWVzKSxmdW5jdGlvbihpdGVtKXtyZXR1cm4gX2MoJ3YtZmxleCcse2tleTpfdm0uZGF0YS5uYW1lICsgJ18nICsgaXRlbSxzdGF0aWNDbGFzczpcInBhLTFcIixhdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibGc0XCI6XCJcIn19LFtfYygndi1sYXp5Jyx7YXR0cnM6e1wib3B0aW9uc1wiOnt0aHJlc2hvbGQ6IC42fSxcInRyYW5zaXRpb25cIjpcImZhZGUtdHJhbnNpdGlvblwifSxtb2RlbDp7dmFsdWU6KF92bS5pc0FjdGl2ZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5pc0FjdGl2ZT0kJHZ9LGV4cHJlc3Npb246XCJpc0FjdGl2ZVwifX0sW19jKCdmb29kLWNhcmQnLHthdHRyczp7XCJpZFwiOml0ZW0sXCJtZXJjaGFudFwiOl92bS5tZXJjaGFudH19KV0sMSldLDEpfSksMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1jYXJkJyx7YXR0cnM6e1wibWF4LXdpZHRoXCI6XCIxMDAlXCIsXCJvdXRsaW5lZFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmN1cnJlbnRfZGF0YSA9X3ZtLml0ZW0gLCBfdm0uZ2VuZXJhdGVBZGRPbnMoKSwgX3ZtLmRpYWxvZyA9IHRydWV9fX0sWyghX3ZtLmlzTG9hZGVkKT9fYygndi1za2VsZXRvbi1sb2FkZXInLHtzdGF0aWNDbGFzczpcIm14LWF1dG9cIixhdHRyczp7XCJib2lsZXJwbGF0ZVwiOiFfdm0uaXNMb2FkZWQsXCJ0eXBlXCI6XCJsaXN0LWl0ZW0tdGhyZWUtbGluZVwifX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5pc0xvYWRlZCk/X2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ2gzJyxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ubmFtZSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljU3R5bGU6e1wiZm9udC1zdHlsZVwiOlwiaXRhbGljXCJ9fSxbX2MoJ3NtYWxsJyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5pdGVtLmRlc2MpfX0pXSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY2FwdGlvbiBncmV5LS10ZXh0XCJ9LFtfdm0uX3YoXCJGcm9tXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtbC0yIHJlZC0tdGV4dCBzdWJ0aXRsZS0xXCJ9LFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfdm0uaXRlbS5iYXNlX3ByaWNlKSkrXCIgXCIpXSldKV0pLF92bS5fdihcIiBcIiksKF92bS5pdGVtLmltZy5sZW5ndGg+MCk/X2MoJ3YtbGlzdC1pdGVtLWF2YXRhcicse2F0dHJzOntcInRpbGVcIjpcIlwiLFwic2l6ZVwiOlwiMTAwXCJ9fSxbX2MoJ3YtaW1nJyx7YXR0cnM6e1wic3JjXCI6X3ZtLml0ZW0uaW1nfX0pXSwxKTpfdm0uX2UoKV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoIV92bS5pc0VtcHR5KF92bS5jdXJyZW50X2RhdGEpKT9fYygndi1yb3cnLHthdHRyczp7XCJqdXN0aWZ5XCI6XCJjZW50ZXJcIn19LFtfYygndi1kaWFsb2cnLHthdHRyczp7XCJmdWxsc2NyZWVuXCI6XCJcIixcImhpZGUtb3ZlcmxheVwiOlwiXCIsXCJ0cmFuc2l0aW9uXCI6XCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIn0sbW9kZWw6e3ZhbHVlOihfdm0uZGlhbG9nKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmRpYWxvZz0kJHZ9LGV4cHJlc3Npb246XCJkaWFsb2dcIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtdG9vbGJhcicse2F0dHJzOntcImRhcmtcIjpcIlwiLFwiY29sb3JcIjpcInJnYmEoMTAwLDExNSwyMDEpXCJ9fSxbX2MoJ3YtYnRuJyx7YXR0cnM6e1wiaWNvblwiOlwiXCIsXCJkYXJrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5kaWFsb2cgPSBmYWxzZX19fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIm1kaS1jbG9zZVwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRvb2xiYXItdGl0bGUnLFtfdm0uX3YoXCJBZGQgdG8gQ2FydFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3Ytc3BhY2VyJyldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uY3VycmVudF9kYXRhLm5hbWUpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY2FwdGlvbiBncmV5LS10ZXh0XCJ9LFtfdm0uX3YoXCJGcm9tXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwicmVkLS10ZXh0XCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5jdXJyZW50X2RhdGEuYmFzZV9wcmljZSkpKV0pXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF92bS5fbCgoX3ZtLmN1cnJlbnRfZGF0YS5vcHRpb25zKSxmdW5jdGlvbihpdGVtLGluZGV4KXtyZXR1cm4gX2MoJ3YtbGlzdCcse2tleTppbmRleCxhdHRyczp7XCJkZW5zZVwiOlwiXCIsXCJmbGF0XCI6XCJcIixcInN1YmhlYWRlclwiOlwiXCJ9fSxbKGl0ZW0ubWluID09IDEgJiYgaXRlbS5tYXggPT0gMSk/X2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiT25lIGlzIHJlcXVpcmVkXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0Jyx7YXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWdyb3VwJyx7YXR0cnM6e1wibWFuZGF0b3J5XCI6XCJcIixcImNvbG9yXCI6XCJkZWVwLXB1cnBsZSBhY2NlbnQtNFwifSxtb2RlbDp7dmFsdWU6KF92bS5hZGRfb25fZGF0YVtpdGVtLm5hbWUucmVwbGFjZSgnICcsICcnKS50b0xvd2VyQ2FzZSgpXSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5hZGRfb25fZGF0YSwgaXRlbS5uYW1lLnJlcGxhY2UoJyAnLCAnJykudG9Mb3dlckNhc2UoKSwgJCR2KX0sZXhwcmVzc2lvbjpcImFkZF9vbl9kYXRhW2l0ZW0ubmFtZS5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKCldXCJ9fSxfdm0uX2woKGl0ZW0udmFsdWVzKSxmdW5jdGlvbihpLGUpe3JldHVybiBfYygndi1saXN0LWl0ZW0nLHtrZXk6ZStpbmRleCxhdHRyczp7XCJ2YWx1ZVwiOml9fSxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKGkubmFtZSkpXSldLDEpLF92bS5fdihcIiBcIiksKGkucHJpY2U+MCk/X2MoJ3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0JyxbX3ZtLl92KFwiICsgXCIrX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKGkucHJpY2UpKStcIiBcIildKTpfdm0uX2UoKV0sMSl9KSwxKV0sMSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChpdGVtLm1heCA+IDEpP19jKCd2LWxpc3QtaXRlbScsW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiIFwiK192bS5fcyhpdGVtLm5hbWUpK1wiIC0gT3B0aW9uYWwgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCIgU2VsZWN0IHVwIHRvIFwiK192bS5fcyhpdGVtLm1heCkrXCIgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0Jyx7YXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWdyb3VwJyx7YXR0cnM6e1wibXVsdGlwbGVcIjpcIlwiLFwibWluXCI6aXRlbS5taW4sXCJtYXhcIjppdGVtLm1heH0sbW9kZWw6e3ZhbHVlOihfdm0uYWRkX29uX2RhdGFbaXRlbS5uYW1lLnJlcGxhY2UoJyAnLCAnJykudG9Mb3dlckNhc2UoKV0pLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uYWRkX29uX2RhdGEsIGl0ZW0ubmFtZS5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKCksICQkdil9LGV4cHJlc3Npb246XCJhZGRfb25fZGF0YVtpdGVtLm5hbWUucmVwbGFjZSgnICcsICcnKS50b0xvd2VyQ2FzZSgpXVwifX0sW192bS5fbCgoaXRlbS52YWx1ZXMpLGZ1bmN0aW9uKF9pdGVtLGkpe3JldHVybiBbKCFfaXRlbSk/X2MoJ3YtZGl2aWRlcicse2tleTooXCJkaXZpZGVyLVwiICsgaSl9KTpfYygndi1saXN0LWl0ZW0nLHtrZXk6KFwiaXRlbS1cIiArIGkpLGF0dHJzOntcInZhbHVlXCI6X2l0ZW0sXCJhY3RpdmUtY2xhc3NcIjpcImRlZXAtcHVycGxlLS10ZXh0IHRleHQtLWFjY2VudC00XCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbihyZWYpe1xudmFyIGFjdGl2ZSA9IHJlZi5hY3RpdmU7XG52YXIgdG9nZ2xlID0gcmVmLnRvZ2dsZTtcbnJldHVybiBbX2MoJ3YtbGlzdC1pdGVtLWFjdGlvbicsW19jKCd2LWNoZWNrYm94Jyx7YXR0cnM6e1wiaW5wdXQtdmFsdWVcIjphY3RpdmUsXCJ0cnVlLXZhbHVlXCI6X2l0ZW0sXCJjb2xvclwiOlwiZGVlcC1wdXJwbGUgYWNjZW50LTRcIn0sb246e1wiY2xpY2tcIjp0b2dnbGV9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKF9pdGVtLm5hbWUpKV0pXSwxKSxfdm0uX3YoXCIgXCIpLChfaXRlbS5wcmljZT4wKT9fYygndi1saXN0LWl0ZW0tYWN0aW9uLXRleHQnLFtfdm0uX3YoXCIgKyBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX2l0ZW0ucHJpY2UpKStcIiBcIildKTpfdm0uX2UoKV19fV0sbnVsbCx0cnVlKX0pXX0pXSwyKV0sMSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKV0sMSl9KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWRpdmlkZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QnLFtfYygndi1saXN0LWl0ZW0nLFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihcIlNwZWNpYWwgSW5zdHJ1Y3Rpb25cIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBlLmcgQWxsZXJneSB0byBzb21lIGluZ3JlZGllbnRzIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dGFyZWEnLHthdHRyczp7XCJvdXRsaW5lZFwiOlwiXCIsXCJuYW1lXCI6XCJpbnB1dC03LTRcIixcImxhYmVsXCI6XCJJbnN0cnVjdGlvblwiLFwidmFsdWVcIjpcIlwiLFwicGxhY2Vob2xkZXJcIjpcIlBsZWFzZSBwcm92aWRlIGluc3RydWN0aW9uIGlmIGFueVwifSxtb2RlbDp7dmFsdWU6KF92bS5pbnN0cnVjdGlvbnMpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uaW5zdHJ1Y3Rpb25zPSQkdn0sZXhwcmVzc2lvbjpcImluc3RydWN0aW9uc1wifX0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtdG9vbGJhcicse3N0YXRpY0NsYXNzOlwic2hvcHJlc3BvbnNpdmVcIixhdHRyczp7XCJkZW5zZVwiOlwiXCIsXCJtYXgtd2lkdGhcIjpcIjEwMCVcIn19LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY2FwdGlvbiBncmV5LS10ZXh0XCJ9LFtfdm0uX3YoXCIgUXR5IFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtaWNvbicse3N0YXRpY0NsYXNzOlwibWEtMiB3aGl0ZS0tdGV4dFwiLGF0dHJzOntcImNvbG9yXCI6XCJncmVlblwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLnF0eSA9IF92bS5xdHkgPCAxID8gMSA6IF92bS5xdHkgLSAxfX19LFtfdm0uX3YoXCIgbWRpLW1pbnVzIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLnF0eSkpXSksX3ZtLl92KFwiIFwiKSxfYygndi1pY29uJyx7c3RhdGljQ2xhc3M6XCJtYS0yIHdoaXRlLS10ZXh0XCIsYXR0cnM6e1wiY29sb3JcIjpcImdyZWVuXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0ucXR5ID0gX3ZtLnF0eSArIDF9fX0sW192bS5fdihcIiBtZGktcGx1cyBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjYXB0aW9uIGdyZXktLXRleHRcIn0sW192bS5fdihcIlRvdGFsXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJtbC0yIHJlZC0tdGV4dCBzdWJ0aXRsZS0xXCJ9LFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfdm0uY29tcHV0ZVRvdGFsKF92bS5hZGRUb0NhcnRJdGVtKSkpK1wiIFwiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcInRpbGVcIjpcIlwiLFwiZGlzYWJsZWRcIjpfdm0ucXR5IDwgMSxcIm91dGxpbmVkXCI6XCJcIixcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtyZXR1cm4gX3ZtLmFkZFRvQ2FydCgkZXZlbnQpfX19LFtfdm0uX3YoXCIgQWRkIHRvIENhcnQgXCIpXSldLDEpXSwyKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3Ytc25hY2tiYXInLHthdHRyczp7XCJjb2xvclwiOlwiYmx1ZVwiLFwidGltZW91dFwiOl92bS50aW1lb3V0fSxtb2RlbDp7dmFsdWU6KF92bS5zbmFja2JhciksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5zbmFja2Jhcj0kJHZ9LGV4cHJlc3Npb246XCJzbmFja2JhclwifX0sW192bS5fdihcIiBJdGVtIGFkZGVkIHRvIGNhcnQgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1yb3cnLHthdHRyczp7XCJqdXN0aWZ5XCI6XCJjZW50ZXJcIn19LFtfYygndi1kaWFsb2cnLHthdHRyczp7XCJwZXJzaXN0ZW50XCI6XCJcIixcIm1heC13aWR0aFwiOlwiMjkwXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmlzRXhpc3QpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uaXNFeGlzdD0kJHZ9LGV4cHJlc3Npb246XCJpc0V4aXN0XCJ9fSxbX2MoJ3YtY2FyZCcsW19jKCd2LWNhcmQtdGl0bGUnLHtzdGF0aWNDbGFzczpcImhlYWRsaW5lXCJ9LFtfdm0uX3YoXCIgRGlmZmVyZW50IFN0b3JlIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC10ZXh0JyxbX3ZtLl92KFwiIFRoZXJlIGFyZSBpdGVtcyBpbiB5b3VyIGNhcnQgZnJvbSBkaWZmZXJlbnQgbWVyY2hhbnQuIERvIHlvdSB3YW50IHJlcGxhY2UgY2FydCBpdGVtPyBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1wiY29sb3JcIjpcImdyZWVuIGRhcmtlbi0xXCIsXCJ0ZXh0XCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5pc0V4aXN0ID0gZmFsc2V9fX0sW192bS5fdihcIiBDYW5jZWwgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwiZ3JlZW4gZGFya2VuLTFcIixcInRleHRcIjpcIlwifSxvbjp7XCJjbGlja1wiOl92bS5zYXZlSXNFeGlzdH19LFtfdm0uX3YoXCIgT2sgXCIpXSldLDEpXSwxKV0sMSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDx2LWNhcmQgbWF4LXdpZHRoPVwiMTAwJVwiIG91dGxpbmVkIEBjbGljay5zdG9wPVwiY3VycmVudF9kYXRhID1pdGVtICwgZ2VuZXJhdGVBZGRPbnMoKSwgZGlhbG9nID0gdHJ1ZVwiPlxuICAgICAgICA8di1za2VsZXRvbi1sb2FkZXIgOmJvaWxlcnBsYXRlPVwiIWlzTG9hZGVkXCIgdHlwZT1cImxpc3QtaXRlbS10aHJlZS1saW5lXCIgdi1pZj1cIiFpc0xvYWRlZFwiIGNsYXNzPVwibXgtYXV0b1wiPjwvdi1za2VsZXRvbi1sb2FkZXI+XG4gICAgICAgIDx2LWxpc3QtaXRlbSBkZW5zZSB2LWlmPVwiaXNMb2FkZWRcIj5cbiAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGl0ZW0ubmFtZSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTppdGFsaWM7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCB2LWh0bWw9XCJpdGVtLmRlc2NcIj48L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb24gZ3JleS0tdGV4dFwiPkZyb208L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTIgcmVkLS10ZXh0IHN1YnRpdGxlLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBpdGVtLmJhc2VfcHJpY2UgfCB0b1BIUCB9fSA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hdmF0YXIgdi1pZj1cIml0ZW0uaW1nLmxlbmd0aD4wXCIgdGlsZSBzaXplPVwiMTAwXCI+XG4gICAgICAgICAgICAgICAgPHYtaW1nIDpzcmM9XCJpdGVtLmltZ1wiPjwvdi1pbWc+XG4gICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWF2YXRhcj5cbiAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgPHYtcm93IHYtaWY9XCIhaXNFbXB0eShjdXJyZW50X2RhdGEpXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBmdWxsc2NyZWVuIGhpZGUtb3ZlcmxheSB0cmFuc2l0aW9uPVwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhciBkYXJrIGNvbG9yPVwicmdiYSgxMDAsMTE1LDIwMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIGRhcmsgQGNsaWNrPVwiZGlhbG9nID0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+QWRkIHRvIENhcnQ8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPiA8L3YtdG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGN1cnJlbnRfZGF0YS5uYW1lIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBncmV5LS10ZXh0XCI+RnJvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWQtLXRleHRcIj57eyBjdXJyZW50X2RhdGEuYmFzZV9wcmljZSB8IHRvUEhQIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY3VycmVudF9kYXRhLm9wdGlvbnNcIiA6a2V5PVwiaW5kZXhcIiBkZW5zZSBmbGF0IHN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSB2LWlmPVwiaXRlbS5taW4gPT0gMSAmJiBpdGVtLm1heCA9PSAxXCIgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT57eyBpdGVtLm5hbWUgfX08L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+T25lIGlzIHJlcXVpcmVkPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCBmbGF0IGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWdyb3VwIHYtbW9kZWw9XCJhZGRfb25fZGF0YVtpdGVtLm5hbWUucmVwbGFjZSgnICcsICcnKS50b0xvd2VyQ2FzZSgpXVwiIG1hbmRhdG9yeSBjb2xvcj1cImRlZXAtcHVycGxlIGFjY2VudC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIHYtZm9yPVwiKGksIGUpIGluIGl0ZW0udmFsdWVzXCIgOmtleT1cImUraW5kZXhcIiA6dmFsdWU9XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7aS5uYW1lfX08L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hY3Rpb24tdGV4dCB2LWlmPVwiaS5wcmljZT4wXCI+ICsge3tpLnByaWNlfHRvUEhQfX0gPC92LWxpc3QtaXRlbS1hY3Rpb24tdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSB2LWlmPVwiaXRlbS5tYXggPiAxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT4ge3sgaXRlbS5uYW1lIH19IC0gT3B0aW9uYWwgPC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPiBTZWxlY3QgdXAgdG8ge3sgaXRlbS5tYXggfX0gPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCBmbGF0IGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWdyb3VwIHYtbW9kZWw9XCJhZGRfb25fZGF0YVtpdGVtLm5hbWUucmVwbGFjZSgnICcsICcnKS50b0xvd2VyQ2FzZSgpXVwiIG11bHRpcGxlIDptaW49XCJpdGVtLm1pblwiIDptYXg9XCJpdGVtLm1heFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihfaXRlbSwgaSkgaW4gaXRlbS52YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciB2LWlmPVwiIV9pdGVtXCIgOmtleT1cImBkaXZpZGVyLSR7aX1gXCI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSB2LWVsc2UgOmtleT1cImBpdGVtLSR7aX1gXCIgOnZhbHVlPVwiX2l0ZW1cIiBhY3RpdmUtY2xhc3M9XCJkZWVwLXB1cnBsZS0tdGV4dCB0ZXh0LS1hY2NlbnQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpkZWZhdWx0PVwieyBhY3RpdmUsIHRvZ2dsZSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2hlY2tib3ggOmlucHV0LXZhbHVlPVwiYWN0aXZlXCIgOnRydWUtdmFsdWU9XCJfaXRlbVwiIGNvbG9yPVwiZGVlcC1wdXJwbGUgYWNjZW50LTRcIiBAY2xpY2s9XCJ0b2dnbGVcIj48L3YtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT57e19pdGVtLm5hbWV9fTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hY3Rpb24tdGV4dCB2LWlmPVwiX2l0ZW0ucHJpY2U+MFwiPiArIHt7X2l0ZW0ucHJpY2V8dG9QSFB9fSA8L3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXIgLz4gPC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPlNwZWNpYWwgSW5zdHJ1Y3Rpb248L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+IGUuZyBBbGxlcmd5IHRvIHNvbWUgaW5ncmVkaWVudHMgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dGFyZWEgdi1tb2RlbD1cImluc3RydWN0aW9uc1wiIG91dGxpbmVkIG5hbWU9XCJpbnB1dC03LTRcIiBsYWJlbD1cIkluc3RydWN0aW9uXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIlBsZWFzZSBwcm92aWRlIGluc3RydWN0aW9uIGlmIGFueVwiIC8+IDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyIGRlbnNlIG1heC13aWR0aD1cIjEwMCVcIiBjbGFzcz1cInNob3ByZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb24gZ3JleS0tdGV4dFwiPiBRdHkgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjbGFzcz1cIm1hLTIgd2hpdGUtLXRleHRcIiBjb2xvcj1cImdyZWVuXCIgQGNsaWNrPVwicXR5ID0gcXR5IDwgMSA/IDEgOiBxdHkgLSAxXCI+IG1kaS1taW51cyA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgcXR5IH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNsYXNzPVwibWEtMiB3aGl0ZS0tdGV4dFwiIGNvbG9yPVwiZ3JlZW5cIiBAY2xpY2s9XCJxdHkgPSBxdHkgKyAxXCI+IG1kaS1wbHVzIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uIGdyZXktLXRleHRcIj5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0yIHJlZC0tdGV4dCBzdWJ0aXRsZS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBjb21wdXRlVG90YWwoYWRkVG9DYXJ0SXRlbSkgfCB0b1BIUCB9fSA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdGlsZSA6ZGlzYWJsZWQ9XCJxdHkgPCAxXCIgb3V0bGluZWQgY29sb3I9XCJyZWRcIiBAY2xpY2suc3RvcD1cImFkZFRvQ2FydFwiPiBBZGQgdG8gQ2FydCA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXNuYWNrYmFyIHYtbW9kZWw9XCJzbmFja2JhclwiIGNvbG9yPVwiYmx1ZVwiIDp0aW1lb3V0PVwidGltZW91dFwiPiBJdGVtIGFkZGVkIHRvIGNhcnQgPC92LXNuYWNrYmFyPlxuICAgICAgICA8di1yb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJpc0V4aXN0XCIgcGVyc2lzdGVudCBtYXgtd2lkdGg9XCIyOTBcIj5cbiAgICAgICAgICAgICAgICA8di1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwiaGVhZGxpbmVcIj4gRGlmZmVyZW50IFN0b3JlIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+IFRoZXJlIGFyZSBpdGVtcyBpbiB5b3VyIGNhcnQgZnJvbSBkaWZmZXJlbnQgbWVyY2hhbnQuIERvIHlvdSB3YW50IHJlcGxhY2UgY2FydCBpdGVtPyA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJpc0V4aXN0ID0gZmFsc2VcIj4gQ2FuY2VsIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIHRleHQgQGNsaWNrPVwic2F2ZUlzRXhpc3RcIj4gT2sgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgPC92LWNhcmQ+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBkZWVwY2xvbmUgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBpZDogU3RyaW5nLFxuICAgICAgICBtZXJjaGFudDogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBhZGRUb0NhcnRJdGVtKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5mbzogdGhpcy5jdXJyZW50X2RhdGEsXG4gICAgICAgICAgICAgICAgICAgIHF0eTogdGhpcy5xdHksXG4gICAgICAgICAgICAgICAgICAgIGFkZF9vbnM6IHRoaXMuYWRkQ2xlYW4odGhpcy5hZGRfb25fZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczogdGhpcy5pbnN0cnVjdGlvbnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYXJ0TWVyY2hhbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRTdG9yZUlEJ11cbiAgICAgICAgfSxcbiAgICAgICAgY2FydFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0SXRlbUNvdW50J11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBiYXNlX3ByaWNlOiAwLFxuICAgICAgICAgICAgICAgIGltZzogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXJyZW50X2RhdGE6IHt9LFxuICAgICAgICAgICAgZm9vZGRhdGE6IHt9LFxuICAgICAgICAgICAgcXR5OiAxLFxuICAgICAgICAgICAgc25hY2tiYXI6IGZhbHNlLFxuICAgICAgICAgICAgYWRkX29uX2RhdGE6IHt9LFxuICAgICAgICAgICAgdGltZW91dDogMjUwMCxcbiAgICAgICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICBub3RpZmljYXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxuICAgICAgICAgICAgd2lkZ2V0czogZmFsc2UsXG4gICAgICAgICAgICByYWRpb3M6IHRydWUsXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnM6ICcnLFxuICAgICAgICAgICAgaXNFeGlzdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgZ2V0SXRlbSgpIHtcbiAgICAgICAgICAgIGxldCBmb29kaXRlbSA9IGF3YWl0IHRoaXMuJGZpcmVTdG9yZU9iaigpLmNvbGxlY3Rpb24oJ2Zvb2RzJykuZG9jKHRoaXMuaWQpLmdldCgpXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBmb29kaXRlbS5kYXRhKClcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFkZENsZWFuKGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBkZWVwY2xvbmUoZGF0YSlcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA8PSAwKSBkZWxldGUgZGF0YVtrZXldXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSBkZWxldGUgZGF0YVtrZXldXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgaXNFbXB0eShvYmopIHtcbiAgICAgICAgICAgIGNvbnN0IG9iID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2IpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUlzRXhpc3QoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhpc3QgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjYXJ0L2NsZWFyQ2FydCcpXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGJ1c2luZXNzOiB0aGlzLm1lcmNoYW50LFxuICAgICAgICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgICAgICAgICAgaW5mbzogdGhpcy5jdXJyZW50X2RhdGEsXG4gICAgICAgICAgICAgICAgICAgIHF0eTogdGhpcy5xdHksXG4gICAgICAgICAgICAgICAgICAgIGFkZF9vbnM6IHRoaXMuYWRkQ2xlYW4odGhpcy5hZGRfb25fZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczogdGhpcy5pbnN0cnVjdGlvbnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRmaXJlQW5hbHl0aWNzLmxvZ0V2ZW50KCdhZGRfdG9fY2FydCcsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5jb21wdXRlVG90YWwoZGF0YS5pdGVtKSxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogJ1BIUCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtkYXRhLml0ZW1dXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjYXJ0L2FkZCcsIGRhdGEpXG4gICAgICAgICAgICB0aGlzLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhZGRUb0NhcnQoKSB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAodGhpcy5tZXJjaGFudC5pZCA9PT0gdGhpcy5jYXJ0TWVyY2hhbnQuaWQgfHwgdGhpcy5jYXJ0U2l6ZSA8IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBidXNpbmVzczogdGhpcy5tZXJjaGFudCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbzogdGhpcy5jdXJyZW50X2RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHk6IHRoaXMucXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX29uczogdGhpcy5hZGRDbGVhbih0aGlzLmFkZF9vbl9kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczogdGhpcy5pbnN0cnVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRmaXJlQW5hbHl0aWNzLmxvZ0V2ZW50KCdhZGRfdG9fY2FydCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuY29tcHV0ZVRvdGFsKGRhdGEuaXRlbSksXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnUEhQJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtkYXRhLml0ZW1dXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NhcnQvYWRkJywgZGF0YSlcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRXhpc3QgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVUb3RhbChpdGVtKSB7XG4gICAgICAgICAgICBsZXQgdG90YWwgPSAwXG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgaXRlbS5pbmZvLmJhc2VfcHJpY2UgKiBpdGVtLnF0eVxuICAgICAgICAgICAgY29uc3QgYWRkb25zID0gT2JqZWN0LnZhbHVlcyhpdGVtLmFkZF9vbnMpXG4gICAgICAgICAgICBhZGRvbnMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEuZm9yRWFjaCgoYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIGIucHJpY2UgKiBpdGVtLnF0eVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBhLnByaWNlICogaXRlbS5xdHlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsXG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlRmlsdGVyKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBpID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChpLnByaWNlKVxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1QSCcsIHtcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogJ1BIUCcsXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5RGlzcGxheTogJ3N5bWJvbCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCB2diA9IGZvcm1hdHRlci5mb3JtYXQoTWF0aC5yb3VuZCh2YWx1ZSkpXG4gICAgICAgICAgICBpZiAodmFsdWUgPiAwKSBpLm5hbWUgPSBpLm5hbWUgKyAnKCsgJyArIHZ2ICsgJyknXG4gICAgICAgICAgICByZXR1cm4gaS5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlQWRkT25zKCkge1xuICAgICAgICAgICAgY29uc3QgYWRkb25zID0ge31cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50X2RhdGEub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFkZG9uc1t0aGlzLmN1cnJlbnRfZGF0YS5vcHRpb25zW2ldLm5hbWUucmVwbGFjZSgnICcsICcnKS50b0xvd2VyQ2FzZSgpXSA9IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZF9vbl9kYXRhID0gYWRkb25zXG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvb2RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb29kQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WU2tlbGV0b25Mb2FkZXIuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgRWxldmF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZWxldmF0YWJsZSdcbmltcG9ydCBNZWFzdXJhYmxlIGZyb20gJy4uLy4uL21peGlucy9tZWFzdXJhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSFRNTFNrZWxldG9uTG9hZGVyRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX2luaXRpYWxTdHlsZT86IHtcbiAgICBkaXNwbGF5OiBzdHJpbmcgfCBudWxsXG4gICAgdHJhbnNpdGlvbjogc3RyaW5nXG4gIH1cbn1cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgRWxldmF0YWJsZSxcbiAgTWVhc3VyYWJsZSxcbiAgVGhlbWVhYmxlLFxuKS5leHRlbmQoe1xuICBuYW1lOiAnVlNrZWxldG9uTG9hZGVyJyxcblxuICBwcm9wczoge1xuICAgIGJvaWxlcnBsYXRlOiBCb29sZWFuLFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgdGlsZTogQm9vbGVhbixcbiAgICB0cmFuc2l0aW9uOiBTdHJpbmcsXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHR5cGVzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe30pLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PixcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGF0dHJzICgpOiBvYmplY3Qge1xuICAgICAgaWYgKCF0aGlzLmlzTG9hZGluZykgcmV0dXJuIHRoaXMuJGF0dHJzXG5cbiAgICAgIHJldHVybiAhdGhpcy5ib2lsZXJwbGF0ZSA/IHtcbiAgICAgICAgJ2FyaWEtYnVzeSc6IHRydWUsXG4gICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgcm9sZTogJ2FsZXJ0JyxcbiAgICAgICAgLi4udGhpcy4kYXR0cnMsXG4gICAgICB9IDoge31cbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1za2VsZXRvbi1sb2FkZXItLWJvaWxlcnBsYXRlJzogdGhpcy5ib2lsZXJwbGF0ZSxcbiAgICAgICAgJ3Ytc2tlbGV0b24tbG9hZGVyLS1pcy1sb2FkaW5nJzogdGhpcy5pc0xvYWRpbmcsXG4gICAgICAgICd2LXNrZWxldG9uLWxvYWRlci0tdGlsZSc6IHRoaXMudGlsZSxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICAgIC4uLnRoaXMuZWxldmF0aW9uQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzTG9hZGluZyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISgnZGVmYXVsdCcgaW4gdGhpcy4kc2NvcGVkU2xvdHMpIHx8IHRoaXMubG9hZGluZ1xuICAgIH0sXG4gICAgcm9vdFR5cGVzICgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGlvbnM6ICdidXR0b25AMicsXG4gICAgICAgIGFydGljbGU6ICdoZWFkaW5nLCBwYXJhZ3JhcGgnLFxuICAgICAgICBhdmF0YXI6ICdhdmF0YXInLFxuICAgICAgICBidXR0b246ICdidXR0b24nLFxuICAgICAgICBjYXJkOiAnaW1hZ2UsIGNhcmQtaGVhZGluZycsXG4gICAgICAgICdjYXJkLWF2YXRhcic6ICdpbWFnZSwgbGlzdC1pdGVtLWF2YXRhcicsXG4gICAgICAgICdjYXJkLWhlYWRpbmcnOiAnaGVhZGluZycsXG4gICAgICAgIGNoaXA6ICdjaGlwJyxcbiAgICAgICAgJ2RhdGUtcGlja2VyJzogJ2xpc3QtaXRlbSwgY2FyZC1oZWFkaW5nLCBkaXZpZGVyLCBkYXRlLXBpY2tlci1vcHRpb25zLCBkYXRlLXBpY2tlci1kYXlzLCBhY3Rpb25zJyxcbiAgICAgICAgJ2RhdGUtcGlja2VyLW9wdGlvbnMnOiAndGV4dCwgYXZhdGFyQDInLFxuICAgICAgICAnZGF0ZS1waWNrZXItZGF5cyc6ICdhdmF0YXJAMjgnLFxuICAgICAgICBoZWFkaW5nOiAnaGVhZGluZycsXG4gICAgICAgIGltYWdlOiAnaW1hZ2UnLFxuICAgICAgICAnbGlzdC1pdGVtJzogJ3RleHQnLFxuICAgICAgICAnbGlzdC1pdGVtLWF2YXRhcic6ICdhdmF0YXIsIHRleHQnLFxuICAgICAgICAnbGlzdC1pdGVtLXR3by1saW5lJzogJ3NlbnRlbmNlcycsXG4gICAgICAgICdsaXN0LWl0ZW0tYXZhdGFyLXR3by1saW5lJzogJ2F2YXRhciwgc2VudGVuY2VzJyxcbiAgICAgICAgJ2xpc3QtaXRlbS10aHJlZS1saW5lJzogJ3BhcmFncmFwaCcsXG4gICAgICAgICdsaXN0LWl0ZW0tYXZhdGFyLXRocmVlLWxpbmUnOiAnYXZhdGFyLCBwYXJhZ3JhcGgnLFxuICAgICAgICBwYXJhZ3JhcGg6ICd0ZXh0QDMnLFxuICAgICAgICBzZW50ZW5jZXM6ICd0ZXh0QDInLFxuICAgICAgICB0YWJsZTogJ3RhYmxlLWhlYWRpbmcsIHRhYmxlLXRoZWFkLCB0YWJsZS10Ym9keSwgdGFibGUtdGZvb3QnLFxuICAgICAgICAndGFibGUtaGVhZGluZyc6ICdoZWFkaW5nLCB0ZXh0JyxcbiAgICAgICAgJ3RhYmxlLXRoZWFkJzogJ2hlYWRpbmdANicsXG4gICAgICAgICd0YWJsZS10Ym9keSc6ICd0YWJsZS1yb3ctZGl2aWRlckA2JyxcbiAgICAgICAgJ3RhYmxlLXJvdy1kaXZpZGVyJzogJ3RhYmxlLXJvdywgZGl2aWRlcicsXG4gICAgICAgICd0YWJsZS1yb3cnOiAndGFibGUtY2VsbEA2JyxcbiAgICAgICAgJ3RhYmxlLWNlbGwnOiAndGV4dCcsXG4gICAgICAgICd0YWJsZS10Zm9vdCc6ICd0ZXh0QDIsIGF2YXRhckAyJyxcbiAgICAgICAgdGV4dDogJ3RleHQnLFxuICAgICAgICAuLi50aGlzLnR5cGVzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJvbmUgKHRleHQ6IHN0cmluZywgY2hpbGRyZW46IFZOb2RlW10pIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1za2VsZXRvbi1sb2FkZXJfXyR7dGV4dH0gdi1za2VsZXRvbi1sb2FkZXJfX2JvbmVgLFxuICAgICAgfSwgY2hpbGRyZW4pXG4gICAgfSxcbiAgICBnZW5Cb25lcyAoYm9uZTogc3RyaW5nKTogVk5vZGVbXSB7XG4gICAgICAvLyBlLmcuICd0ZXh0QDMnXG4gICAgICBjb25zdCBbdHlwZSwgbGVuZ3RoXSA9IGJvbmUuc3BsaXQoJ0AnKSBhcyBbc3RyaW5nLCBudW1iZXJdXG4gICAgICBjb25zdCBnZW5lcmF0b3IgPSAoKSA9PiB0aGlzLmdlblN0cnVjdHVyZSh0eXBlKVxuXG4gICAgICAvLyBHZW5lcmF0ZSBhIGxlbmd0aCBhcnJheSBiYXNlZCB1cG9uXG4gICAgICAvLyB2YWx1ZSBhZnRlciBAIGluIHRoZSBib25lIHN0cmluZ1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGggfSkubWFwKGdlbmVyYXRvcilcbiAgICB9LFxuICAgIC8vIEZpeCB0eXBlIHdoZW4gdGhpcyBpcyBtZXJnZWRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvcHVsbC8zMzA1MFxuICAgIGdlblN0cnVjdHVyZSAodHlwZT86IHN0cmluZyk6IGFueSB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSBbXVxuICAgICAgdHlwZSA9IHR5cGUgfHwgdGhpcy50eXBlIHx8ICcnXG4gICAgICBjb25zdCBib25lID0gdGhpcy5yb290VHlwZXNbdHlwZV0gfHwgJydcblxuICAgICAgLy8gRW5kIG9mIHJlY3Vyc2lvbiwgZG8gbm90aGluZ1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5LCBicmFjZS1zdHlsZSAqL1xuICAgICAgaWYgKHR5cGUgPT09IGJvbmUpIHt9XG4gICAgICAvLyBBcnJheSBvZiB2YWx1ZXMgLSBlLmcuICdoZWFkaW5nLCBwYXJhZ3JhcGgsIHRleHRAMidcbiAgICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignLCcpID4gLTEpIHJldHVybiB0aGlzLm1hcEJvbmVzKHR5cGUpXG4gICAgICAvLyBBcnJheSBvZiB2YWx1ZXMgLSBlLmcuICdwYXJhZ3JhcGhANCdcbiAgICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignQCcpID4gLTEpIHJldHVybiB0aGlzLmdlbkJvbmVzKHR5cGUpXG4gICAgICAvLyBBcnJheSBvZiB2YWx1ZXMgLSBlLmcuICdjYXJkQDInXG4gICAgICBlbHNlIGlmIChib25lLmluZGV4T2YoJywnKSA+IC0xKSBjaGlsZHJlbiA9IHRoaXMubWFwQm9uZXMoYm9uZSlcbiAgICAgIC8vIEFycmF5IG9mIHZhbHVlcyAtIGUuZy4gJ2xpc3QtaXRlbUAyJ1xuICAgICAgZWxzZSBpZiAoYm9uZS5pbmRleE9mKCdAJykgPiAtMSkgY2hpbGRyZW4gPSB0aGlzLmdlbkJvbmVzKGJvbmUpXG4gICAgICAvLyBTaW5nbGUgdmFsdWUgLSBlLmcuICdjYXJkLWhlYWRpbmcnXG4gICAgICBlbHNlIGlmIChib25lKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuU3RydWN0dXJlKGJvbmUpKVxuXG4gICAgICByZXR1cm4gW3RoaXMuZ2VuQm9uZSh0eXBlLCBjaGlsZHJlbildXG4gICAgfSxcbiAgICBnZW5Ta2VsZXRvbiAoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXG5cbiAgICAgIGlmICghdGhpcy5pc0xvYWRpbmcpIGNoaWxkcmVuLnB1c2goZ2V0U2xvdCh0aGlzKSlcbiAgICAgIGVsc2UgY2hpbGRyZW4ucHVzaCh0aGlzLmdlblN0cnVjdHVyZSgpKVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb24pIHJldHVybiBjaGlsZHJlblxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RyYW5zaXRpb24nLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgbmFtZTogdGhpcy50cmFuc2l0aW9uLFxuICAgICAgICB9LFxuICAgICAgICAvLyBPbmx5IHNob3cgdHJhbnNpdGlvbiB3aGVuXG4gICAgICAgIC8vIGNvbnRlbnQgaGFzIGJlZW4gbG9hZGVkXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgYWZ0ZXJFbnRlcjogdGhpcy5yZXNldFN0eWxlcyxcbiAgICAgICAgICBiZWZvcmVFbnRlcjogdGhpcy5vbkJlZm9yZUVudGVyLFxuICAgICAgICAgIGJlZm9yZUxlYXZlOiB0aGlzLm9uQmVmb3JlTGVhdmUsXG4gICAgICAgICAgbGVhdmVDYW5jZWxsZWQ6IHRoaXMucmVzZXRTdHlsZXMsXG4gICAgICAgIH0sXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIG1hcEJvbmVzIChib25lczogc3RyaW5nKSB7XG4gICAgICAvLyBSZW1vdmUgc3BhY2VzIGFuZCByZXR1cm4gYXJyYXkgb2Ygc3RydWN0dXJlc1xuICAgICAgcmV0dXJuIGJvbmVzLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKS5tYXAodGhpcy5nZW5TdHJ1Y3R1cmUpXG4gICAgfSxcbiAgICBvbkJlZm9yZUVudGVyIChlbDogSFRNTFNrZWxldG9uTG9hZGVyRWxlbWVudCkge1xuICAgICAgdGhpcy5yZXNldFN0eWxlcyhlbClcblxuICAgICAgaWYgKCF0aGlzLmlzTG9hZGluZykgcmV0dXJuXG5cbiAgICAgIGVsLl9pbml0aWFsU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IGVsLnN0eWxlLmRpc3BsYXksXG4gICAgICAgIHRyYW5zaXRpb246IGVsLnN0eWxlLnRyYW5zaXRpb24sXG4gICAgICB9XG5cbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2l0aW9uJywgJ25vbmUnLCAnaW1wb3J0YW50JylcbiAgICB9LFxuICAgIG9uQmVmb3JlTGVhdmUgKGVsOiBIVE1MU2tlbGV0b25Mb2FkZXJFbGVtZW50KSB7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpXG4gICAgfSxcbiAgICByZXNldFN0eWxlcyAoZWw6IEhUTUxTa2VsZXRvbkxvYWRlckVsZW1lbnQpIHtcbiAgICAgIGlmICghZWwuX2luaXRpYWxTdHlsZSkgcmV0dXJuXG5cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5faW5pdGlhbFN0eWxlLmRpc3BsYXkgfHwgJydcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBlbC5faW5pdGlhbFN0eWxlLnRyYW5zaXRpb25cblxuICAgICAgZGVsZXRlIGVsLl9pbml0aWFsU3R5bGVcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXNrZWxldG9uLWxvYWRlcicsXG4gICAgICBhdHRyczogdGhpcy5hdHRycyxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnMsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgc3R5bGU6IHRoaXMuaXNMb2FkaW5nID8gdGhpcy5tZWFzdXJhYmxlU3R5bGVzIDogdW5kZWZpbmVkLFxuICAgIH0sIFt0aGlzLmdlblNrZWxldG9uKCldKVxuICB9LFxufSlcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRm9vZENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmYTMyZDI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Zvb2RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9vZENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJkMTVkYTc5NFwiXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0c1xuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkQWN0aW9ucyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2hlY2tib3ggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDaGVja2JveCc7XG5pbXBvcnQgeyBWRGlhbG9nIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WRGlhbG9nJztcbmltcG9ydCB7IFZEaXZpZGVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WRGl2aWRlcic7XG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkljb24nO1xuaW1wb3J0IHsgVkltZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkltZyc7XG5pbXBvcnQgeyBWTGlzdCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1BY3Rpb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUFjdGlvblRleHQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUF2YXRhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtR3JvdXAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbVN1YnRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1UaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVlJvdyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVlNrZWxldG9uTG9hZGVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU2tlbGV0b25Mb2FkZXInO1xuaW1wb3J0IHsgVlNuYWNrYmFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU25hY2tiYXInO1xuaW1wb3J0IHsgVlNwYWNlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVlRleHRhcmVhIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dGFyZWEnO1xuaW1wb3J0IHsgVlRvb2xiYXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUb29sYmFyJztcbmltcG9ydCB7IFZUb29sYmFyVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUb29sYmFyJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCdG4sVkNhcmQsVkNhcmRBY3Rpb25zLFZDYXJkVGV4dCxWQ2FyZFRpdGxlLFZDaGVja2JveCxWRGlhbG9nLFZEaXZpZGVyLFZJY29uLFZJbWcsVkxpc3QsVkxpc3RJdGVtLFZMaXN0SXRlbUFjdGlvbixWTGlzdEl0ZW1BY3Rpb25UZXh0LFZMaXN0SXRlbUF2YXRhcixWTGlzdEl0ZW1Db250ZW50LFZMaXN0SXRlbUdyb3VwLFZMaXN0SXRlbVN1YnRpdGxlLFZMaXN0SXRlbVRpdGxlLFZSb3csVlNrZWxldG9uTG9hZGVyLFZTbmFja2JhcixWU3BhY2VyLFZUZXh0YXJlYSxWVG9vbGJhcixWVG9vbGJhclRpdGxlfSlcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8di1jYXJkIGZsYXQ+XG4gICAgICAgIDx2LWxheW91dCB3cmFwIGFsaWduLWNlbnRlcj5cbiAgICAgICAgICAgIDx2LWZsZXggdi1mb3I9XCJpdGVtIGluIGRhdGEudmFsdWVzXCIgOmtleT1cImRhdGEubmFtZSArICdfJyArIGl0ZW1cIiB4czEyIG1kNCBzbTQgbGc0IGNsYXNzPVwicGEtMVwiPlxuICAgICAgICAgICAgICAgIDx2LWxhenkgdi1tb2RlbD1cImlzQWN0aXZlXCIgOm9wdGlvbnM9XCJ7dGhyZXNob2xkOiAuNn1cIiB0cmFuc2l0aW9uPVwiZmFkZS10cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb29kLWNhcmQgOmlkPVwiaXRlbVwiIDptZXJjaGFudD1cIm1lcmNoYW50XCI+PC9mb29kLWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWxhenk+XG4gICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPC92LWxheW91dD5cbiAgICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5pbXBvcnQgRm9vZENhcmQgZnJvbSAnfi9jb21wb25lbnRzL0Zvb2RDYXJkJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRm9vZENhcmRcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbWVyY2hhbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRm9vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkMWJkYjlhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Zvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI0NDAzMWE4ZVwiXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0c1xuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkxhenkgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMYXp5Jztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZDYXJkLFZGbGV4LFZMYXlvdXQsVkxhenl9KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTMtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThhMjhmNWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1hcHAnLHthdHRyczp7XCJpZFwiOlwiZTNcIn19LFtfYygnbG9hZGluZycse2F0dHJzOntcImFjdGl2ZVwiOl92bS5pc0xvYWRpbmcsXCJsb2FkZXJcIjpcImJhcnNcIixcImlzLWZ1bGwtcGFnZVwiOnRydWUsXCJjb2xvclwiOlwiYmx1ZVwifSxvbjp7XCJ1cGRhdGU6YWN0aXZlXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNMb2FkaW5nPSRldmVudH19fSksX3ZtLl92KFwiIFwiKSxfYygndi1hcHAtYmFyJyx7YXR0cnM6e1wiY29sb3JcIjpcIiMwMGFmZjBcIixcImRhcmtcIjpcIlwiLFwic2hyaW5rLW9uLXNjcm9sbFwiOlwiXCIsXCJwcm9taW5lbnRcIjpcIlwiLFwic3JjXCI6X3ZtLmJ1c2luZXNzLmJhY2tkcm9wLFwiZmFkZS1pbWctb24tc2Nyb2xsXCI6XCJcIixcInNjcm9sbC10YXJnZXRcIjpcIiNzY3JvbGxpbmctdGVjaG5pcXVlcy0zXCIsXCJzY3JvbGwtdGhyZXNob2xkXCI6XCIzMDBcIixcImZpeGVkXCI6XCJcIixcImFwcFwiOlwiXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImltZ1wiLGZuOmZ1bmN0aW9uKHJlZil7XG52YXIgcHJvcHMgPSByZWYucHJvcHM7XG5yZXR1cm4gW19jKCd2LWltZycsX3ZtLl9iKHthdHRyczp7XCJncmFkaWVudFwiOlwidG8gdG9wIHJpZ2h0LCByZ2JhKDEwMCwxMTUsMjAxLC43KSwgcmdiYSgyNSwzMiw3MiwuNylcIn19LCd2LWltZycscHJvcHMsZmFsc2UpKV19fSx7a2V5OlwiZXh0ZW5zaW9uXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCd2LXRhYnMnLHthdHRyczp7XCJzaG93LWFycm93c1wiOlwiXCIsXCJjZW50ZXItYWN0aXZlXCI6XCJcIixcImNlbnRlcmVkXCI6XCJcIixcImRlbnNlXCI6XCJcIixcImJhY2tncm91bmQtY29sb3JcIjpcInRyYW5zcGFyZW50XCIsXCJjb2xvclwiOlwiYmFzaWxcIixcImdyb3dcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS50YWIpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0udGFiPSQkdn0sZXhwcmVzc2lvbjpcInRhYlwifX0sX3ZtLl9sKChfdm0uYnVzaW5lc3MubWVudS5maWx0ZXIoZnVuY3Rpb24gKGkpeyByZXR1cm4gaS52YWx1ZXMubGVuZ3RoPjA7IH0pKSxmdW5jdGlvbihpdGVtKXtyZXR1cm4gX2MoJ3YtdGFiJyx7a2V5Oml0ZW0ubmFtZSxhdHRyczp7XCJkZW5zZVwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7cmV0dXJuIF92bS5zY3JvbGxUbygpfX19LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGl0ZW0ubmFtZSkrXCIgXCIpXSl9KSwxKV19LHByb3h5OnRydWV9XSl9LFtfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImljb25cIjpcIlwiLFwidG9cIjpcIi9mb29kXCJ9fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIiBtZGktYXJyb3ctbGVmdC1ib2xkXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtdG9vbGJhci10aXRsZScsW192bS5fdihfdm0uX3MoX3ZtLmJ1c2luZXNzLmJ1c2luZXNzX25hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1tZW51Jyx7YXR0cnM6e1wiYm90dG9tXCI6XCJcIixcImxlZnRcIjpcIlwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJhY3RpdmF0b3JcIixmbjpmdW5jdGlvbihyZWYpe1xudmFyIG9uID0gcmVmLm9uO1xudmFyIGF0dHJzID0gcmVmLmF0dHJzO1xucmV0dXJuIFtfYygndi1idG4nLF92bS5fZyhfdm0uX2Ioe2F0dHJzOntcImRhcmtcIjpcIlwiLFwiaWNvblwiOlwiXCJ9fSwndi1idG4nLGF0dHJzLGZhbHNlKSxvbiksW19jKCd2LWljb24nLFtfdm0uX3YoXCIgbWRpLXNoYXJlLXZhcmlhbnRcIildKV0sMSldfX1dKX0sW192bS5fdihcIiBcIiksX2MoJ3YtbGlzdCcse2F0dHJzOntcIm5hdlwiOlwiXCIsXCJmbGF0XCI6XCJcIixcInNpbmdsZS1saW5lXCI6XCJcIixcImRlbnNlXCI6XCJcIn19LF92bS5fbCgoX3ZtLm5ldHdvcmtzKSxmdW5jdGlvbihuZXR3b3JrKXtyZXR1cm4gX2MoJ1NoYXJlTmV0d29yaycse2tleTpuZXR3b3JrLm5ldHdvcmssc3R5bGU6KHsgYmFja2dyb3VuZENvbG9yOiBuZXR3b3JrLmNvbG9yIH0pLGF0dHJzOntcIm5ldHdvcmtcIjpuZXR3b3JrLm5ldHdvcmssXCJ1cmxcIjpfdm0uc2hhcmluZy51cmwsXCJ0aXRsZVwiOl92bS5zaGFyaW5nLnRpdGxlLFwiZGVzY3JpcHRpb25cIjpfdm0uc2hhcmluZy5kZXNjcmlwdGlvbixcImhhc2h0YWdzXCI6X3ZtLnNoYXJpbmcuaGFzaHRhZ3N9fSxbX2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWljb24nLFtfYygndi1pY29uJyx7YXR0cnM6e1wic21hbGxcIjpcIlwiLFwiY29sb3JcIjpuZXR3b3JrLmNvbG9yfX0sW192bS5fdihcIiBcIitfdm0uX3MobmV0d29yay5pY29uKStcIiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKG5ldHdvcmsubmFtZSkpXSldLDEpXSwxKX0pLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjbGllbnQtb25seScsWyhfdm0uY2FydFNpemUgPiAwKT9fYygndi1idG4nLHthdHRyczp7XCJpZFwiOlwiY2FydFwiLFwiaWNvblwiOlwiXCIsXCJ0b1wiOlwiL2NhcnRcIn19LFtfYygndi1iYWRnZScse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwiYmFkZ2VcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uY2FydFNpemUpK1wiIFwiKV19LHByb3h5OnRydWV9XSxudWxsLGZhbHNlLDEyODUwNDU4NzYpfSxbX3ZtLl92KFwiIFwiKSxfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcIndoaXRlXCIsXCJkZW5zZVwiOlwiXCJ9fSxbX3ZtLl92KFwiIG1kaS1jYXJ0LW91dGxpbmUgXCIpXSldLDEpXSwxKTpfdm0uX2UoKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3Ytc2hlZXQnLHtzdGF0aWNDbGFzczpcIm92ZXJmbG93LXktYXV0b1wiLGF0dHJzOntcImlkXCI6XCJzY3JvbGxpbmctdGVjaG5pcXVlcy0zXCIsXCJtYXgtaGVpZ2h0XCI6XCIxMDB2aFwifX0sW19jKCd2LWNvbnRhaW5lcicse2F0dHJzOntcImZsdWlkXCI6XCJcIn19LFtfYygndi1jb250ZW50JyxbX2MoJ3YtdGFicy1pdGVtcycse21vZGVsOnt2YWx1ZTooX3ZtLnRhYiksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50YWI9JCR2fSxleHByZXNzaW9uOlwidGFiXCJ9fSxfdm0uX2woKF92bS5idXNpbmVzcy5tZW51LmZpbHRlcihmdW5jdGlvbiAoaSl7IHJldHVybiBpLnZhbHVlcy5sZW5ndGg+MDsgfSkpLGZ1bmN0aW9uKGl0ZW0pe3JldHVybiBfYygndi10YWItaXRlbScse2tleTppdGVtLm5hbWV9LFtfYygnY2xpZW50LW9ubHknLFtfYygnZm9vZC1pdGVtJyx7YXR0cnM6e1wiZGF0YVwiOml0ZW0sXCJtZXJjaGFudFwiOl92bS5idXNpbmVzc319KV0sMSldLDEpfSksMSldLDEpXSwxKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPHYtYXBwIGlkPVwiZTNcIj5cbiAgICAgICAgPGxvYWRpbmcgOmFjdGl2ZS5zeW5jPVwiaXNMb2FkaW5nXCIgbG9hZGVyPVwiYmFyc1wiIDppcy1mdWxsLXBhZ2U9XCJ0cnVlXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgICAgPHYtYXBwLWJhciBjb2xvcj1cIiMwMGFmZjBcIiBkYXJrIHNocmluay1vbi1zY3JvbGwgcHJvbWluZW50IDpzcmM9XCJidXNpbmVzcy5iYWNrZHJvcFwiIGZhZGUtaW1nLW9uLXNjcm9sbCBzY3JvbGwtdGFyZ2V0PVwiI3Njcm9sbGluZy10ZWNobmlxdWVzLTNcIiBzY3JvbGwtdGhyZXNob2xkPVwiMzAwXCIgZml4ZWQgYXBwPlxuICAgICAgICAgICAgPHRlbXBsYXRlICNpbWc9XCJ7IHByb3BzIH1cIj5cbiAgICAgICAgICAgICAgICA8di1pbWcgdi1iaW5kPVwicHJvcHNcIiBncmFkaWVudD1cInRvIHRvcCByaWdodCwgcmdiYSgxMDAsMTE1LDIwMSwuNyksIHJnYmEoMjUsMzIsNzIsLjcpXCIgLz4gPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx2LWJ0biBpY29uIHRvPVwiL2Zvb2RcIj5cbiAgICAgICAgICAgICAgICA8di1pY29uPiBtZGktYXJyb3ctbGVmdC1ib2xkPC92LWljb24+XG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT57eyBidXNpbmVzcy5idXNpbmVzc19uYW1lIH19PC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgIDx2LW1lbnUgYm90dG9tIGxlZnQ+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNhY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBkYXJrIGljb24gdi1iaW5kPVwiYXR0cnNcIiB2LW9uPVwib25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+IG1kaS1zaGFyZS12YXJpYW50PC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8di1saXN0IG5hdiBmbGF0IHNpbmdsZS1saW5lIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICA8U2hhcmVOZXR3b3JrIHYtZm9yPVwibmV0d29yayBpbiBuZXR3b3Jrc1wiIDprZXk9XCJuZXR3b3JrLm5ldHdvcmtcIiA6bmV0d29yaz1cIm5ldHdvcmsubmV0d29ya1wiIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBuZXR3b3JrLmNvbG9yIH1cIiA6dXJsPVwic2hhcmluZy51cmxcIiA6dGl0bGU9XCJzaGFyaW5nLnRpdGxlXCIgOmRlc2NyaXB0aW9uPVwic2hhcmluZy5kZXNjcmlwdGlvblwiIDpoYXNodGFncz1cInNoYXJpbmcuaGFzaHRhZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbCA6Y29sb3I9XCJuZXR3b3JrLmNvbG9yXCI+IHt7IG5ldHdvcmsuaWNvbiB9fSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7IG5ldHdvcmsubmFtZSB9fTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L1NoYXJlTmV0d29yaz5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgIDwvdi1tZW51PlxuICAgICAgICAgICAgPGNsaWVudC1vbmx5PlxuICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiY2FydFNpemUgPiAwXCIgaWQ9XCJjYXJ0XCIgaWNvbiB0bz1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJhZGdlIGNvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2JhZGdlIG92ZXJsYXA+IHt7IGNhcnRTaXplIH19IDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwid2hpdGVcIiBkZW5zZT4gbWRpLWNhcnQtb3V0bGluZSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWJhZGdlPlxuICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8L2NsaWVudC1vbmx5PlxuICAgICAgICAgICAgPHRlbXBsYXRlICNleHRlbnNpb24+XG4gICAgICAgICAgICAgICAgPHYtdGFicyB2LW1vZGVsPVwidGFiXCIgc2hvdy1hcnJvd3MgY2VudGVyLWFjdGl2ZSBjZW50ZXJlZCBkZW5zZSBiYWNrZ3JvdW5kLWNvbG9yPVwidHJhbnNwYXJlbnRcIiBjb2xvcj1cImJhc2lsXCIgZ3Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGFiIHYtZm9yPVwiaXRlbSBpbiBidXNpbmVzcy5tZW51LmZpbHRlcihpPT5pLnZhbHVlcy5sZW5ndGg+MClcIiA6a2V5PVwiaXRlbS5uYW1lXCIgZGVuc2UgQGNsaWNrLnN0b3A9XCJzY3JvbGxUbygpXCI+IHt7IGl0ZW0ubmFtZSB9fSA8L3YtdGFiPlxuICAgICAgICAgICAgICAgIDwvdi10YWJzPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWFwcC1iYXI+XG4gICAgICAgIDx2LXNoZWV0IGlkPVwic2Nyb2xsaW5nLXRlY2huaXF1ZXMtM1wiIGNsYXNzPVwib3ZlcmZsb3cteS1hdXRvXCIgbWF4LWhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgPHYtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGFicy1pdGVtcyB2LW1vZGVsPVwidGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10YWItaXRlbSB2LWZvcj1cIml0ZW0gaW4gYnVzaW5lc3MubWVudS5maWx0ZXIoaT0+aS52YWx1ZXMubGVuZ3RoPjApXCIgOmtleT1cIml0ZW0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjbGllbnQtb25seT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb2QtaXRlbSA6ZGF0YT1cIml0ZW1cIiA6bWVyY2hhbnQ9XCJidXNpbmVzc1wiIC8+IDwvY2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10YWJzLWl0ZW1zPlxuICAgICAgICAgICAgICAgIDwvdi1jb250ZW50PlxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC92LXNoZWV0PlxuICAgIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBMb2FkaW5nIGZyb20gJ3Z1ZS1sb2FkaW5nLW92ZXJsYXknXG5pbXBvcnQgJ3Z1ZS1sb2FkaW5nLW92ZXJsYXkvZGlzdC92dWUtbG9hZGluZy5jc3MnXG5pbXBvcnQge1xuICAgIEdlb0NvbGxlY3Rpb25SZWZlcmVuY2Vcbn0gZnJvbSAnZ2VvZmlyZXN0b3JlJ1xuaW1wb3J0IEZvb2RJdGVtIGZyb20gJ34vY29tcG9uZW50cy9Gb29kSXRlbS52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBGb29kSXRlbSxcbiAgICAgICAgTG9hZGluZ1xuICAgIH0sXG4gICAgbGF5b3V0OiAnYXJlYScsXG4gICAgYXN5bmNEYXRhKHtcbiAgICAgICAgYXBwLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIGVycm9yXG4gICAgfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGIgPSBhcHAuJGZpcmVTdG9yZVxuICAgICAgICAgICAgY29uc3QgZ2VvY29sbGVjdGlvbiA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKGRiLmNvbGxlY3Rpb24oJ21lcmNoYW50JykpXG4gICAgICAgICAgICByZXR1cm4gZ2VvY29sbGVjdGlvbi53aGVyZSgndXJsJywgJz09JywgcGFyYW1zLmlkKS5nZXQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGRhdGEuZG9jc1swXS5kYXRhKClcblxuICAgICAgICAgICAgICAgICAgbGV0IGRlbGl2ZXJ5ID0gZC5kZWxpdmVyeV90aW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxpdmVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiAnMDk6MDA6MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiAnMTk6MDA6MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYml6ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuZG9jc1swXS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzc19uYW1lOiBkLmJ1c2luZXNzX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmNoOiBkLmJyYW5jaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogZC5iYWNrZHJvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBkLmxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudTogZC5tZW51LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA8IGIubmFtZSA/IC0xIDogYS5uYW1lID4gYi5uYW1lID8gMSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRlczogZC5yYXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogZC5jb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL20uamlmZnlmYXZvcnMuY29tL3Jlc3RvLycgKyBwYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBPcmRlciB5b3VyICR7ZC5idXNpbmVzc19uYW1lfSAtICR7ZC5icmFuY2h9IEZvb2QgT25saW5lIGF0IEppZmZ5IEZhdm9yc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGAke2QuYnVzaW5lc3NfbmFtZX0gLSAke2QuYnJhbmNofSBGb29kIE1lbnUgJiBPbmxpbmUgT3JkZXJpbmdgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2h0YWdzOiAnamlmZnlmYXZvcnMsZm9vZCxkZWxpdmVyeSxvbmxpbmVvcmRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICdmYWNlYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZhY2Vib29rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWRpLWZhY2Vib29rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxODc3ZjInXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWRpLWdtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29yazogJ3NreXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU2t5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdtZGktc2t5cGUtYnVzaW5lc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwYWZmMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29yazogJ3NtcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NNUycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS1hbmRyb2lkLW1lc3NhZ2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMzMzMzMnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICd0ZWxlZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1RlbGVncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWRpLXRlbGVncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDg4Y2MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICd0d2l0dGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVHdpdHRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS10d2l0dGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMxZGExZjInXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICd3aGF0c2FwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1doYXRzYXBwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWRpLXdoYXRzYXBwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMyNWQzNjYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaXpcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdCbG9nIG5vdCBmb3VuZCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiBlcnJvcih7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdCbG9nIG5vdCBmb3VuZCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBidXNpbmVzczogbnVsbCxcbiAgICAgICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICB0YWI6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGVhZCgpIHtcbiAgICAgICAgY29uc3QgYnVzaW5lc3MgPSB0aGlzLmJ1c2luZXNzXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL20uamlmZnlmYXZvcnMuY29tJyArIHRoaXMuJHJvdXRlLmZ1bGxQYXRoXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogYCR7YnVzaW5lc3MuYnVzaW5lc3NfbmFtZX0gLSBNZW51IGFuZCBGb29kIERlbGl2ZXJ5YCxcbiAgICAgICAgICAgIG1ldGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoaWQ6IGBkZXNjcmlwdGlvbmAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgJHtidXNpbmVzcy5idXNpbmVzc19uYW1lfSAke2J1c2luZXNzLmJyYW5jaH0tIE9ubGluZSBGb29kIE9yZGVyaW5nYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoaWQ6ICdvZzp0eXBlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnb2c6dHlwZScsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ3Jlc3RhdXJhbnQubWVudSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGlkOiAnb2c6dGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvZzp0aXRsZScsXG4gICAgICAgICAgICAgICAgY29udGVudDogYEZvb2QgTWVudXxPcmRlciBPbmxpbmUgLSAke2J1c2luZXNzLmJ1c2luZXNzX25hbWV9ICR7YnVzaW5lc3MuYnJhbmNofWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGlkOiAnb2c6ZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvZzpkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgY29udGVudDogYE1lbnUgZm9yICR7YnVzaW5lc3MuYnVzaW5lc3NfbmFtZX0gJHtidXNpbmVzcy5icmFuY2h9LSBPcmRlciBOb3cuIFBheSBDT0QhYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoaWQ6ICdvZzppbWFnZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29nOmltYWdlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgJHtidXNpbmVzcy5sb2dvfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGlkOiAnb2c6dXJsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnb2c6dXJsJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1cmxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgbGluazogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgICAgIGhyZWY6IGAke2J1c2luZXNzLmxvZ299YFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2FydFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0SXRlbUNvdW50J11cbiAgICAgICAgfSxcbiAgICAgICAgaXRlbUNvdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NhcnQvZ2V0Q2FydEl0ZW1Db3VudCddXG4gICAgICAgIH0sXG4gICAgICAgIHRvdGFsUHJpY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRUb3RhbCddXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGNhcnRTaXplKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FydFNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYWtlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgICB0aGlzLiRmaXJlQW5hbHl0aWNzLmxvZ0V2ZW50KCdwYWdlX3ZpZXcnKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzY3JvbGxUbygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxpbmctdGVjaG5pcXVlcy0zJykuc2Nyb2xsKHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNoYWtlKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQnKS5jbGFzc0xpc3QuYWRkKCdzaGFrZScpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJylcbiAgICAgICAgICAgIH0sIDE1MDApXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC52LWxpc3QtaXRlbV9faWNvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OGEyOGY1YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICB2YXIgc3R5bGUwID0gcmVxdWlyZShcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThhMjhmNWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpXG5pZiAoc3R5bGUwLl9faW5qZWN0X18pIHN0eWxlMC5fX2luamVjdF9fKGNvbnRleHQpXG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBcIjU4YTI4ZjVhXCIsXG4gIFwiMWM3NjY1NmRcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHNcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQXBwIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXBwJztcbmltcG9ydCB7IFZBcHBCYXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBcHBCYXInO1xuaW1wb3J0IHsgVkJhZGdlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQmFkZ2UnO1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNvbnRlbnQnO1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJY29uJztcbmltcG9ydCB7IFZJbWcgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJbWcnO1xuaW1wb3J0IHsgVkxpc3QgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZNZW51IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTWVudSc7XG5pbXBvcnQgeyBWU2hlZXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTaGVldCc7XG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWVGFiIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGFicyc7XG5pbXBvcnQgeyBWVGFiSXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW1wb3J0IHsgVlRhYnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUYWJzJztcbmltcG9ydCB7IFZUYWJzSXRlbXMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUYWJzJztcbmltcG9ydCB7IFZUb29sYmFyVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUb29sYmFyJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBcHAsVkFwcEJhcixWQmFkZ2UsVkJ0bixWQ29udGFpbmVyLFZDb250ZW50LFZJY29uLFZJbWcsVkxpc3QsVkxpc3RJdGVtLFZMaXN0SXRlbUljb24sVkxpc3RJdGVtVGl0bGUsVk1lbnUsVlNoZWV0LFZTcGFjZXIsVlRhYixWVGFiSXRlbSxWVGFicyxWVGFic0l0ZW1zLFZUb29sYmFyVGl0bGV9KVxuIiwiaW1wb3J0IFZCdG4gZnJvbSAnLi9WQnRuJ1xuXG5leHBvcnQgeyBWQnRuIH1cbmV4cG9ydCBkZWZhdWx0IFZCdG5cbiJdLCJzb3VyY2VSb290IjoiIn0=