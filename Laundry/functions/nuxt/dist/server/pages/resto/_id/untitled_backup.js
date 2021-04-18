exports.ids = [10];
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

/***/ 246:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_untitled_backup_vue_vue_type_style_index_0_id_17220dd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(246);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_untitled_backup_vue_vue_type_style_index_0_id_17220dd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_untitled_backup_vue_vue_type_style_index_0_id_17220dd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_untitled_backup_vue_vue_type_style_index_0_id_17220dd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_untitled_backup_vue_vue_type_style_index_0_id_17220dd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/resto/_id/untitled_backup.vue?vue&type=template&id=17220dd4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"e3"}},[_c('loading',{attrs:{"active":_vm.isLoading,"loader":"bars","is-full-page":true,"color":"blue"},on:{"update:active":function($event){_vm.isLoading=$event}}}),_vm._v(" "),_c('v-app-bar',{attrs:{"color":"#00aff0","dark":"","shrink-on-scroll":"","prominent":"","src":_vm.business.backdrop,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3","scroll-threshold":"300","fixed":"","app":""},scopedSlots:_vm._u([{key:"img",fn:function(ref){
var props = ref.props;
return [_c('v-img',_vm._b({attrs:{"gradient":"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},'v-img',props,false))]}},{key:"extension",fn:function(){return [_c('v-tabs',{attrs:{"show-arrows":"","center-active":"","centered":"","dense":"","background-color":"transparent","color":"basil","grow":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},_vm._l((_vm.business.menu.filter(function (i){ return i.values.length>0; })),function(item){return _c('v-tab',{key:item.name,attrs:{"dense":""},on:{"click":function($event){$event.stopPropagation();return _vm.scrollTo()}}},[_vm._v(" "+_vm._s(item.name)+" ")])}),1)]},proxy:true}])},[_vm._v(" "),_c('v-btn',{attrs:{"icon":"","to":"/food"}},[_c('v-icon',[_vm._v(" mdi-arrow-left-bold")])],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v(_vm._s(_vm.business.business_name))]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-menu',{attrs:{"bottom":"","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({attrs:{"dark":"","icon":""}},'v-btn',attrs,false),on),[_c('v-icon',[_vm._v(" mdi-share-variant")])],1)]}}])},[_vm._v(" "),_c('v-list',{attrs:{"nav":"","flat":"","single-line":"","dense":""}},_vm._l((_vm.networks),function(network){return _c('ShareNetwork',{key:network.network,style:({ backgroundColor: network.color }),attrs:{"network":network.network,"url":_vm.sharing.url,"title":_vm.sharing.title,"description":_vm.sharing.description,"hashtags":_vm.sharing.hashtags}},[_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"small":"","color":network.color}},[_vm._v(" "+_vm._s(network.icon)+" ")])],1),_vm._v(" "),_c('v-list-item-title',[_vm._v(_vm._s(network.name))])],1)],1)}),1)],1),_vm._v(" "),_c('client-only',[(_vm.cartSize > 0)?_c('v-btn',{attrs:{"id":"cart","icon":"","to":"/cart"}},[_c('v-badge',{attrs:{"color":"red"},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_vm._v(" "+_vm._s(_vm.cartSize)+" ")]},proxy:true}],null,false,1285045876)},[_vm._v(" "),_c('v-icon',{attrs:{"color":"white","dense":""}},[_vm._v(" mdi-cart-outline ")])],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('v-sheet',{staticClass:"overflow-y-auto",attrs:{"id":"scrolling-techniques-3","max-height":"100vh"}},[_c('v-container',{attrs:{"fluid":""}},[_c('v-content',[_c('v-tabs-items',{model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},_vm._l((_vm.business.menu.filter(function (i){ return i.values.length>0; })),function(item){return _c('v-tab-item',{key:item.name},[_c('client-only',[_c('food-item',{attrs:{"data":item,"merchant":_vm.business}})],1)],1)}),1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/resto/_id/untitled_backup.vue?vue&type=template&id=17220dd4&scoped=true&

// EXTERNAL MODULE: external "vue-loading-overlay"
var external_vue_loading_overlay_ = __webpack_require__(63);
var external_vue_loading_overlay_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_overlay_);

// EXTERNAL MODULE: ./node_modules/vue-loading-overlay/dist/vue-loading.css
var vue_loading = __webpack_require__(81);

// EXTERNAL MODULE: external "geofirestore"
var external_geofirestore_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/FoodItem.vue + 10 modules
var FoodItem = __webpack_require__(229);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/resto/_id/untitled_backup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var untitled_backupvue_type_script_lang_js_ = ({
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
        return db.collection('foods').where('owner', '==', data.docs[0].id).get().then(food => {
          const foods = [];
          food.docs.forEach(f => {
            const fooditem = f.data();
            fooditem.id = f.id;
            fooditem.owner = data.docs[0].id;
            foods.push(fooditem);
          });
          const menu = [];
          const allvalues = [];
          d.menu.forEach(m => {
            const values = [];
            m.values.forEach(f => {
              allvalues.push(f);
              foods.forEach(fi => {
                if (fi.id === f) values.push(fi);
              });
            });
            menu.push({
              name: m.name,
              values: values.sort((a, b) => {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
              })
            });
          });
          menu.push({
            name: 'Others',
            values: foods.filter(a => !allvalues.includes(a.id)).sort((a, b) => {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            })
          });
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
              menu: menu.sort((a, b) => {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
              }),
              rates: d.rates,
              location: d.coordinates,
              foods,
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
          return error({
            statusCode: 404,
            message: 'Blog not found'
          });
        });
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
// CONCATENATED MODULE: ./pages/resto/_id/untitled_backup.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_untitled_backupvue_type_script_lang_js_ = (untitled_backupvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/resto/_id/untitled_backup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(270)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_untitled_backupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17220dd4",
  "d9239392"
  
)

/* harmony default export */ var untitled_backup = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNhcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUb29sYmFyL1ZUb29sYmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVzc2FnZXMvVk1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVzc2FnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZJbnB1dC9WSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZJbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNhcmQvVkNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYWJlbC9WTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYWJlbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9sb2FkYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy92YWxpZGF0YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WR3JpZC9WR3JpZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUZXh0RmllbGQvVlRleHRGaWVsZC5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL2ludGVyc2VjdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUZXh0RmllbGQvVlRleHRGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyL1ZQcm9ncmVzc0xpbmVhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZJbnB1dC9WSW5wdXQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUb29sYmFyL1ZUb29sYmFyLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1haW4vVk1haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9jb21wYXJhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVudS9WTWVudS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ291bnRlci9WQ291bnRlci5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL21lbnVhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL3RyYW5zaXRpb25hYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZNZW51L1ZNZW51LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVkJhZGdlL1ZCYWRnZS5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUZXh0YXJlYS9WVGV4dGFyZWEuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLmNsb25lZGVlcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlNsaWRlR3JvdXAvVlNsaWRlR3JvdXAuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WV2luZG93L1ZXaW5kb3cuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVldpbmRvdy9WV2luZG93LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFic0l0ZW1zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQXBwQmFyL1ZBcHBCYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvcmlwcGxlYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVk1haW4vVk1haW4udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb250ZW50L1ZDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WU3BhY2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9zdHlsZXMvY29tcG9uZW50cy9fc2VsZWN0aW9uLWNvbnRyb2xzLnNhc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9taXhpbnMvc2VsZWN0YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ2hlY2tib3gvVkNoZWNrYm94LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlNuYWNrYmFyL1ZTbmFja2Jhci5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQmFkZ2UvVkJhZGdlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WR3JpZC9WUm93LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGV4dGFyZWEvVlRleHRhcmVhLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFiLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU2xpZGVHcm91cC9WU2xpZGVHcm91cC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYnNCYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzU2xpZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVGFicy9WVGFicy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVldpbmRvdy9WV2luZG93SXRlbS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlRhYnMvVlRhYkl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYXp5L1ZMYXp5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2hlY2tib3gvVkNoZWNrYm94LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU25hY2tiYXIvVlNuYWNrYmFyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZTa2VsZXRvbkxvYWRlci9WU2tlbGV0b25Mb2FkZXIuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb2RJdGVtLnZ1ZT84ZmY2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vZENhcmQudnVlPzk4MWYiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRm9vZENhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vZENhcmQudnVlP2FlNmYiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTa2VsZXRvbkxvYWRlci9WU2tlbGV0b25Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb29kQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRm9vZEl0ZW0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vZEl0ZW0udnVlPzQ5NjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb29kSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzdG8vX2lkL3VudGl0bGVkX2JhY2t1cC52dWU/MmNkMyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXN0by9faWQvdW50aXRsZWRfYmFja3VwLnZ1ZT81MDc4Iiwid2VicGFjazovLy8uL3BhZ2VzL3Jlc3RvL19pZC91bnRpdGxlZF9iYWNrdXAudnVlPzJhNzEiLCJ3ZWJwYWNrOi8vL3BhZ2VzL3Jlc3RvL19pZC91bnRpdGxlZF9iYWNrdXAudnVlIiwid2VicGFjazovLy8uL3BhZ2VzL3Jlc3RvL19pZC91bnRpdGxlZF9iYWNrdXAudnVlPzU5ZGEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzdG8vX2lkL3VudGl0bGVkX2JhY2t1cC52dWUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZCdG4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNLFlBQVksR0FBRyxvRkFBc0IsQ0FBM0MsaUJBQTJDLENBQTNDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsb0ZBQXNCLENBQTVDLGtCQUE0QyxDQUE1QztBQUNBLE1BQU0sU0FBUyxHQUFHLG9GQUFzQixDQUF4QyxjQUF3QyxDQUF4QztBQUNBLE1BQU0sVUFBVSxHQUFHLG9GQUFzQixDQUF6QyxlQUF5QyxDQUF6QztBQUVBO0FBUWU7QUFDYix5QkFBdUIsRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3ZCO0FBTHVCO0FBRFosQ0FBZixFOzs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFLQTs7QUFDZSx1SEFBTSxDQUFOLE9BQWM7QUFDM0IsTUFBSSxFQUR1QjtBQUczQixPQUFLLEVBQUU7QUFDTCxZQUFRLEVBREg7QUFFTCxVQUFNLEVBRkQ7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFD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LGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEs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QUVBLElBRkE7QUFHQTs7QUFiQTtBQXpOQSxHOztBQy9EK0wsQ0FBZ0IsdUhBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBekc7QUFDdkM7QUFDTDtBQUM5RDs7QUFFQSxlQUFlLG1CQUFPLENBQUMsR0FBZ0Y7QUFDdkc7O0FBRUE7O0FBRUE7QUFDNkY7QUFDN0YsZ0JBQWdCLDhDQUFVO0FBQzFCLEVBQUUsMkNBQU07QUFDUixFQUFFLE1BQU07QUFDUixFQUFFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsc0dBQWlCOztBQUVoQztBQUNzRztBQUNuRDtBQUNNO0FBQ0Y7QUFDSjtBQUNPO0FBQ0M7QUFDTjtBQUNGO0FBQ0U7QUFDSTtBQUNJO0FBQ0M7QUFDVDtBQUNFO0FBQ0E7QUFDSDtBQUNJO0FBQ0g7QUFDSztBQUNNO0FBQ2hFLDJCQUFpQixhQUFhLDZCQUFJLENBQUMsbUNBQU8sQ0FBQyxpQ0FBTSxDQUFDLDZCQUFJLENBQUMseUNBQVUsQ0FBQyxxQ0FBUSxDQUFDLCtCQUFLLENBQUMsNkJBQUksQ0FBQywrQkFBSyxDQUFDLHVDQUFTLENBQUMsK0NBQWEsQ0FBQywwREFBYyxDQUFDLCtCQUFLLENBQUMsaUNBQU0sQ0FBQyxtQ0FBTyxDQUFDLDZCQUFJLENBQUMscUNBQVEsQ0FBQywrQkFBSyxDQUFDLHlDQUFVLENBQUMsZ0RBQWEsQ0FBQzs7Ozs7Ozs7O0FDL0NyTTtBQUFBO0FBRUE7QUFDQSxnSCIsImZpbGUiOiJwYWdlcy9yZXN0by9faWQvdW50aXRsZWRfYmFja3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZDYXJkIGZyb20gJy4vVkNhcmQnXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5jb25zdCBWQ2FyZEFjdGlvbnMgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX2FjdGlvbnMnKVxuY29uc3QgVkNhcmRTdWJ0aXRsZSA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fc3VidGl0bGUnKVxuY29uc3QgVkNhcmRUZXh0ID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX190ZXh0JylcbmNvbnN0IFZDYXJkVGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3RpdGxlJylcblxuZXhwb3J0IHtcbiAgVkNhcmQsXG4gIFZDYXJkQWN0aW9ucyxcbiAgVkNhcmRTdWJ0aXRsZSxcbiAgVkNhcmRUZXh0LFxuICBWQ2FyZFRpdGxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVkNhcmQsXG4gICAgVkNhcmRBY3Rpb25zLFxuICAgIFZDYXJkU3VidGl0bGUsXG4gICAgVkNhcmRUZXh0LFxuICAgIFZDYXJkVGl0bGUsXG4gIH0sXG59XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WVG9vbGJhci5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlNoZWV0IGZyb20gJy4uL1ZTaGVldC9WU2hlZXQnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSW1nLCB7IHNyY09iamVjdCB9IGZyb20gJy4uL1ZJbWcvVkltZydcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgYnJlYWtpbmcgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgUHJvcFR5cGUgfSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWU2hlZXQuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdG9vbGJhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBhYnNvbHV0ZTogQm9vbGVhbixcbiAgICBib3R0b206IEJvb2xlYW4sXG4gICAgY29sbGFwc2U6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZXh0ZW5kZWQ6IEJvb2xlYW4sXG4gICAgZXh0ZW5zaW9uSGVpZ2h0OiB7XG4gICAgICBkZWZhdWx0OiA0OCxcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgfSxcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGZsb2F0aW5nOiBCb29sZWFuLFxuICAgIHByb21pbmVudDogQm9vbGVhbixcbiAgICBzaG9ydDogQm9vbGVhbixcbiAgICBzcmM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0gYXMgUHJvcFR5cGU8c3RyaW5nIHwgc3JjT2JqZWN0PixcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaGVhZGVyJyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgaXNFeHRlbmRlZDogZmFsc2UsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodFxuXG4gICAgICBpZiAoIXRoaXMuaXNFeHRlbmRlZCkgcmV0dXJuIGhlaWdodFxuXG4gICAgICBjb25zdCBleHRlbnNpb25IZWlnaHQgPSBwYXJzZUludCh0aGlzLmV4dGVuc2lvbkhlaWdodClcblxuICAgICAgcmV0dXJuIHRoaXMuaXNDb2xsYXBzZWRcbiAgICAgICAgPyBoZWlnaHRcbiAgICAgICAgOiBoZWlnaHQgKyAoIWlzTmFOKGV4dGVuc2lvbkhlaWdodCkgPyBleHRlbnNpb25IZWlnaHQgOiAwKVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb250ZW50SGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMuaGVpZ2h0KSByZXR1cm4gcGFyc2VJbnQodGhpcy5oZWlnaHQpXG4gICAgICBpZiAodGhpcy5pc1Byb21pbmVudCAmJiB0aGlzLmRlbnNlKSByZXR1cm4gOTZcbiAgICAgIGlmICh0aGlzLmlzUHJvbWluZW50ICYmIHRoaXMuc2hvcnQpIHJldHVybiAxMTJcbiAgICAgIGlmICh0aGlzLmlzUHJvbWluZW50KSByZXR1cm4gMTI4XG4gICAgICBpZiAodGhpcy5kZW5zZSkgcmV0dXJuIDQ4XG4gICAgICBpZiAodGhpcy5zaG9ydCB8fCB0aGlzLiR2dWV0aWZ5LmJyZWFrcG9pbnQuc21BbmREb3duKSByZXR1cm4gNTZcbiAgICAgIHJldHVybiA2NFxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZTaGVldC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdG9vbGJhcic6IHRydWUsXG4gICAgICAgICd2LXRvb2xiYXItLWFic29sdXRlJzogdGhpcy5hYnNvbHV0ZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tYm90dG9tJzogdGhpcy5ib3R0b20sXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlJzogdGhpcy5jb2xsYXBzZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tY29sbGFwc2VkJzogdGhpcy5pc0NvbGxhcHNlZCxcbiAgICAgICAgJ3YtdG9vbGJhci0tZGVuc2UnOiB0aGlzLmRlbnNlLFxuICAgICAgICAndi10b29sYmFyLS1leHRlbmRlZCc6IHRoaXMuaXNFeHRlbmRlZCxcbiAgICAgICAgJ3YtdG9vbGJhci0tZmxhdCc6IHRoaXMuZmxhdCxcbiAgICAgICAgJ3YtdG9vbGJhci0tZmxvYXRpbmcnOiB0aGlzLmZsb2F0aW5nLFxuICAgICAgICAndi10b29sYmFyLS1wcm9taW5lbnQnOiB0aGlzLmlzUHJvbWluZW50LFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNDb2xsYXBzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29sbGFwc2VcbiAgICB9LFxuICAgIGlzUHJvbWluZW50ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pbmVudFxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5tZWFzdXJhYmxlU3R5bGVzLFxuICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZEhlaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICBjb25zdCBicmVha2luZ1Byb3BzID0gW1xuICAgICAgWydhcHAnLCAnPHYtYXBwLWJhciBhcHA+J10sXG4gICAgICBbJ21hbnVhbC1zY3JvbGwnLCAnPHYtYXBwLWJhciA6dmFsdWU9XCJmYWxzZVwiPiddLFxuICAgICAgWydjbGlwcGVkLWxlZnQnLCAnPHYtYXBwLWJhciBjbGlwcGVkLWxlZnQ+J10sXG4gICAgICBbJ2NsaXBwZWQtcmlnaHQnLCAnPHYtYXBwLWJhciBjbGlwcGVkLXJpZ2h0PiddLFxuICAgICAgWydpbnZlcnRlZC1zY3JvbGwnLCAnPHYtYXBwLWJhciBpbnZlcnRlZC1zY3JvbGw+J10sXG4gICAgICBbJ3Njcm9sbC1vZmYtc2NyZWVuJywgJzx2LWFwcC1iYXIgc2Nyb2xsLW9mZi1zY3JlZW4+J10sXG4gICAgICBbJ3Njcm9sbC10YXJnZXQnLCAnPHYtYXBwLWJhciBzY3JvbGwtdGFyZ2V0PiddLFxuICAgICAgWydzY3JvbGwtdGhyZXNob2xkJywgJzx2LWFwcC1iYXIgc2Nyb2xsLXRocmVzaG9sZD4nXSxcbiAgICAgIFsnY2FyZCcsICc8di1hcHAtYmFyIGZsYXQ+J10sXG4gICAgXVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBicmVha2luZ1Byb3BzLmZvckVhY2goKFtvcmlnaW5hbCwgcmVwbGFjZW1lbnRdKSA9PiB7XG4gICAgICBpZiAodGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkob3JpZ2luYWwpKSBicmVha2luZyhvcmlnaW5hbCwgcmVwbGFjZW1lbnQsIHRoaXMpXG4gICAgfSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQmFja2dyb3VuZCAoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRIZWlnaHQpLFxuICAgICAgICBzcmM6IHRoaXMuc3JjLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuJHNjb3BlZFNsb3RzLmltZ1xuICAgICAgICA/IHRoaXMuJHNjb3BlZFNsb3RzLmltZyh7IHByb3BzIH0pXG4gICAgICAgIDogdGhpcy4kY3JlYXRlRWxlbWVudChWSW1nLCB7IHByb3BzIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19pbWFnZScsXG4gICAgICB9LCBbaW1hZ2VdKVxuICAgIH0sXG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9fY29udGVudCcsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0KSxcbiAgICAgICAgfSxcbiAgICAgIH0sIGdldFNsb3QodGhpcykpXG4gICAgfSxcbiAgICBnZW5FeHRlbnNpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2V4dGVuc2lvbicsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuZXh0ZW5zaW9uSGVpZ2h0KSxcbiAgICAgICAgfSxcbiAgICAgIH0sIGdldFNsb3QodGhpcywgJ2V4dGVuc2lvbicpKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHRoaXMuaXNFeHRlbmRlZCA9IHRoaXMuZXh0ZW5kZWQgfHwgISF0aGlzLiRzY29wZWRTbG90cy5leHRlbnNpb25cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuZ2VuQ29udGVudCgpXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaXNFeHRlbmRlZCkgY2hpbGRyZW4ucHVzaCh0aGlzLmdlbkV4dGVuc2lvbigpKVxuICAgIGlmICh0aGlzLnNyYyB8fCB0aGlzLiRzY29wZWRTbG90cy5pbWcpIGNoaWxkcmVuLnVuc2hpZnQodGhpcy5nZW5CYWNrZ3JvdW5kKCkpXG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVk1lc3NhZ2VzLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoQ29sb3JhYmxlLCBUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1lc3NhZ2VzJyxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSksXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPHN0cmluZ1tdPixcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ2hpbGRyZW4gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RyYW5zaXRpb24tZ3JvdXAnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1tZXNzYWdlc19fd3JhcHBlcicsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogJ21lc3NhZ2UtdHJhbnNpdGlvbicsXG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMudmFsdWUubWFwKHRoaXMuZ2VuTWVzc2FnZSkpXG4gICAgfSxcbiAgICBnZW5NZXNzYWdlIChtZXNzYWdlOiBzdHJpbmcsIGtleTogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXNfX21lc3NhZ2UnLFxuICAgICAgICBrZXksXG4gICAgICB9LCBnZXRTbG90KHRoaXMsICdkZWZhdWx0JywgeyBtZXNzYWdlLCBrZXkgfSkgfHwgW21lc3NhZ2VdKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbWVzc2FnZXMnLFxuICAgICAgY2xhc3M6IHRoaXMudGhlbWVDbGFzc2VzLFxuICAgIH0pLCBbdGhpcy5nZW5DaGlsZHJlbigpXSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVk1lc3NhZ2VzIGZyb20gJy4vVk1lc3NhZ2VzJ1xuXG5leHBvcnQgeyBWTWVzc2FnZXMgfVxuZXhwb3J0IGRlZmF1bHQgVk1lc3NhZ2VzXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WSW5wdXQuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuaW1wb3J0IFZMYWJlbCBmcm9tICcuLi9WTGFiZWwnXG5pbXBvcnQgVk1lc3NhZ2VzIGZyb20gJy4uL1ZNZXNzYWdlcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQmluZHNBdHRycyBmcm9tICcuLi8uLi9taXhpbnMvYmluZHMtYXR0cnMnXG5pbXBvcnQgVmFsaWRhdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3ZhbGlkYXRhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7XG4gIGNvbnZlcnRUb1VuaXQsXG4gIGdldFNsb3QsXG4gIGtlYmFiQ2FzZSxcbn0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBWTm9kZURhdGEsIFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IElucHV0VmFsaWRhdGlvblJ1bGUgfSBmcm9tICd2dWV0aWZ5L3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBCaW5kc0F0dHJzLFxuICBWYWxpZGF0YWJsZSxcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSAqL1xuICAkX21vZGVsRXZlbnQ6IHN0cmluZ1xufVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi1pbnB1dCcsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIGFwcGVuZEljb246IFN0cmluZyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaGVpZ2h0OiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIGhpZGVEZXRhaWxzOiBbQm9vbGVhbiwgU3RyaW5nXSBhcyBQcm9wVHlwZTxib29sZWFuIHwgJ2F1dG8nPixcbiAgICBoaW50OiBTdHJpbmcsXG4gICAgaWQ6IFN0cmluZyxcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudEhpbnQ6IEJvb2xlYW4sXG4gICAgcHJlcGVuZEljb246IFN0cmluZyxcbiAgICB2YWx1ZTogbnVsbCBhcyBhbnkgYXMgUHJvcFR5cGU8YW55PixcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF6eVZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgaGFzTW91c2VEb3duOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtaW5wdXQtLWhhcy1zdGF0ZSc6IHRoaXMuaGFzU3RhdGUsXG4gICAgICAgICd2LWlucHV0LS1oaWRlLWRldGFpbHMnOiAhdGhpcy5zaG93RGV0YWlscyxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWxhYmVsLWFjdGl2ZSc6IHRoaXMuaXNMYWJlbEFjdGl2ZSxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWRpcnR5JzogdGhpcy5pc0RpcnR5LFxuICAgICAgICAndi1pbnB1dC0taXMtZGlzYWJsZWQnOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICd2LWlucHV0LS1pcy1mb2N1c2VkJzogdGhpcy5pc0ZvY3VzZWQsXG4gICAgICAgIC8vIDx2LXN3aXRjaCBsb2FkaW5nPi5sb2FkaW5nID09PSAnJyBzbyB3ZSBjYW4ndCBqdXN0IGNhc3QgdG8gYm9vbGVhblxuICAgICAgICAndi1pbnB1dC0taXMtbG9hZGluZyc6IHRoaXMubG9hZGluZyAhPT0gZmFsc2UgJiYgdGhpcy5sb2FkaW5nICE9IG51bGwsXG4gICAgICAgICd2LWlucHV0LS1pcy1yZWFkb25seSc6IHRoaXMuaXNSZWFkb25seSxcbiAgICAgICAgJ3YtaW5wdXQtLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZElkICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaWQgfHwgYGlucHV0LSR7dGhpcy5fdWlkfWBcbiAgICB9LFxuICAgIGhhc0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNUb0Rpc3BsYXkubGVuZ3RoID4gMFxuICAgIH0sXG4gICAgaGFzSGludCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gIXRoaXMuaGFzTWVzc2FnZXMgJiZcbiAgICAgICAgISF0aGlzLmhpbnQgJiZcbiAgICAgICAgKHRoaXMucGVyc2lzdGVudEhpbnQgfHwgdGhpcy5pc0ZvY3VzZWQpXG4gICAgfSxcbiAgICBoYXNMYWJlbCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISEodGhpcy4kc2xvdHMubGFiZWwgfHwgdGhpcy5sYWJlbClcbiAgICB9LFxuICAgIC8vIFByb3h5IGZvciBgbGF6eVZhbHVlYFxuICAgIC8vIFRoaXMgYWxsb3dzIGFuIGlucHV0XG4gICAgLy8gdG8gZnVuY3Rpb24gd2l0aG91dFxuICAgIC8vIGEgcHJvdmlkZWQgbW9kZWxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICAgICAgdGhpcy4kZW1pdCh0aGlzLiRfbW9kZWxFdmVudCwgdmFsKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlydHkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhdGhpcy5sYXp5VmFsdWVcbiAgICB9LFxuICAgIGlzTGFiZWxBY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEaXJ0eVxuICAgIH0sXG4gICAgbWVzc2FnZXNUb0Rpc3BsYXkgKCk6IHN0cmluZ1tdIHtcbiAgICAgIGlmICh0aGlzLmhhc0hpbnQpIHJldHVybiBbdGhpcy5oaW50XVxuXG4gICAgICBpZiAoIXRoaXMuaGFzTWVzc2FnZXMpIHJldHVybiBbXVxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9ucy5tYXAoKHZhbGlkYXRpb246IHN0cmluZyB8IElucHV0VmFsaWRhdGlvblJ1bGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWxpZGF0aW9uID09PSAnc3RyaW5nJykgcmV0dXJuIHZhbGlkYXRpb25cblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGlvbih0aGlzLmludGVybmFsVmFsdWUpXG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWxpZGF0aW9uUmVzdWx0ID09PSAnc3RyaW5nJyA/IHZhbGlkYXRpb25SZXN1bHQgOiAnJ1xuICAgICAgfSkuZmlsdGVyKG1lc3NhZ2UgPT4gbWVzc2FnZSAhPT0gJycpXG4gICAgfSxcbiAgICBzaG93RGV0YWlscyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlRGV0YWlscyA9PT0gZmFsc2UgfHwgKHRoaXMuaGlkZURldGFpbHMgPT09ICdhdXRvJyAmJiB0aGlzLmhhc0RldGFpbHMpXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBiZWZvcmVDcmVhdGUgKCkge1xuICAgIC8vIHYtcmFkaW8tZ3JvdXAgbmVlZHMgdG8gZW1pdCBhIGRpZmZlcmVudCBldmVudFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS9pc3N1ZXMvNDc1MlxuICAgIHRoaXMuJF9tb2RlbEV2ZW50ID0gKHRoaXMuJG9wdGlvbnMubW9kZWwgJiYgdGhpcy4kb3B0aW9ucy5tb2RlbC5ldmVudCkgfHwgJ2lucHV0J1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuUHJlcGVuZFNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5Db250cm9sKCksXG4gICAgICAgIHRoaXMuZ2VuQXBwZW5kU2xvdCgpLFxuICAgICAgXVxuICAgIH0sXG4gICAgZ2VuQ29udHJvbCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXRfX2NvbnRyb2wnLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLmdlbklucHV0U2xvdCgpLFxuICAgICAgICB0aGlzLmdlbk1lc3NhZ2VzKCksXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5MYWJlbCgpLFxuICAgICAgICB0aGlzLiRzbG90cy5kZWZhdWx0LFxuICAgICAgXVxuICAgIH0sXG4gICAgZ2VuSWNvbiAoXG4gICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICBjYj86IChlOiBFdmVudCkgPT4gdm9pZCxcbiAgICAgIGV4dHJhRGF0YTogVk5vZGVEYXRhID0ge31cbiAgICApIHtcbiAgICAgIGNvbnN0IGljb24gPSAodGhpcyBhcyBhbnkpW2Ake3R5cGV9SWNvbmBdXG4gICAgICBjb25zdCBldmVudE5hbWUgPSBgY2xpY2s6JHtrZWJhYkNhc2UodHlwZSl9YFxuICAgICAgY29uc3QgaGFzTGlzdGVuZXIgPSAhISh0aGlzLmxpc3RlbmVycyRbZXZlbnROYW1lXSB8fCBjYilcblxuICAgICAgY29uc3QgZGF0YSA9IG1lcmdlRGF0YSh7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBoYXNMaXN0ZW5lciA/IGtlYmFiQ2FzZSh0eXBlKS5zcGxpdCgnLScpWzBdICsgJyBpY29uJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjb2xvcjogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiAhaGFzTGlzdGVuZXJcbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgY2xpY2s6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoZXZlbnROYW1lLCBlKVxuICAgICAgICAgICAgICBjYiAmJiBjYihlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIENvbnRhaW5lciBoYXMgZyBldmVudCB0aGF0IHdpbGxcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgbWVudSBvcGVuIGlmIGVuY2xvc2VkXG4gICAgICAgICAgICBtb3VzZXVwOiAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgIH0sIGV4dHJhRGF0YSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LWlucHV0X19pY29uYCxcbiAgICAgICAgY2xhc3M6IHR5cGUgPyBgdi1pbnB1dF9faWNvbi0tJHtrZWJhYkNhc2UodHlwZSl9YCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBWSWNvbixcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGljb25cbiAgICAgICAgKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5JbnB1dFNsb3QgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dF9fc2xvdCcsXG4gICAgICAgIHN0eWxlOiB7IGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmhlaWdodCkgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgIG1vdXNlZG93bjogdGhpcy5vbk1vdXNlRG93bixcbiAgICAgICAgICBtb3VzZXVwOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiAnaW5wdXQtc2xvdCcsXG4gICAgICB9KSwgW3RoaXMuZ2VuRGVmYXVsdFNsb3QoKV0pXG4gICAgfSxcbiAgICBnZW5MYWJlbCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzTGFiZWwpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMYWJlbCwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNvbG9yOiB0aGlzLnZhbGlkYXRpb25TdGF0ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBmb2N1c2VkOiB0aGlzLmhhc1N0YXRlLFxuICAgICAgICAgIGZvcjogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICB9LFxuICAgICAgfSwgdGhpcy4kc2xvdHMubGFiZWwgfHwgdGhpcy5sYWJlbClcbiAgICB9LFxuICAgIGdlbk1lc3NhZ2VzICgpIHtcbiAgICAgIGlmICghdGhpcy5zaG93RGV0YWlscykgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVk1lc3NhZ2VzLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgY29sb3I6IHRoaXMuaGFzSGludCA/ICcnIDogdGhpcy52YWxpZGF0aW9uU3RhdGUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLm1lc3NhZ2VzVG9EaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGU6IHRoaXMuaGFzTWVzc2FnZXMgPyAnYWxlcnQnIDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiBwcm9wcyA9PiBnZXRTbG90KHRoaXMsICdtZXNzYWdlJywgcHJvcHMpLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlblNsb3QgKFxuICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgbG9jYXRpb246IHN0cmluZyxcbiAgICAgIHNsb3Q6IChWTm9kZSB8IFZOb2RlW10pW11cbiAgICApIHtcbiAgICAgIGlmICghc2xvdC5sZW5ndGgpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IHJlZiA9IGAke3R5cGV9LSR7bG9jYXRpb259YFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtaW5wdXRfXyR7cmVmfWAsXG4gICAgICAgIHJlZixcbiAgICAgIH0sIHNsb3QpXG4gICAgfSxcbiAgICBnZW5QcmVwZW5kU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzLnByZXBlbmQpIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzLnByZXBlbmQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbigncHJlcGVuZCcpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdwcmVwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbkFwcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIC8vIEFwcGVuZCBpY29uIGZvciB0ZXh0IGZpZWxkIHdhcyByZWFsbHlcbiAgICAgIC8vIGFuIGFwcGVuZGVkIGlubmVyIGljb24sIHYtdGV4dC1maWVsZFxuICAgICAgLy8gd2lsbCBvdmVyd3JpdGUgdGhpcyBtZXRob2QgaW4gb3JkZXIgdG8gb2J0YWluXG4gICAgICAvLyBiYWNrd2FyZHMgY29tcGF0XG4gICAgICBpZiAodGhpcy4kc2xvdHMuYXBwZW5kKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90cy5hcHBlbmQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmQnKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2VuU2xvdCgnYXBwZW5kJywgJ291dGVyJywgc2xvdClcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpXG4gICAgfSxcbiAgICBvbk1vdXNlRG93biAoZTogRXZlbnQpIHtcbiAgICAgIHRoaXMuaGFzTW91c2VEb3duID0gdHJ1ZVxuICAgICAgdGhpcy4kZW1pdCgnbW91c2Vkb3duJywgZSlcbiAgICB9LFxuICAgIG9uTW91c2VVcCAoZTogRXZlbnQpIHtcbiAgICAgIHRoaXMuaGFzTW91c2VEb3duID0gZmFsc2VcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNldXAnLCBlKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLnZhbGlkYXRpb25TdGF0ZSwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0JyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgfSksIHRoaXMuZ2VuQ29udGVudCgpKVxuICB9LFxufSlcbiIsImltcG9ydCBWSW5wdXQgZnJvbSAnLi9WSW5wdXQnXG5cbmV4cG9ydCB7IFZJbnB1dCB9XG5leHBvcnQgZGVmYXVsdCBWSW5wdXRcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDYXJkLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWU2hlZXQgZnJvbSAnLi4vVlNoZWV0J1xuXG4vLyBNaXhpbnNcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvbG9hZGFibGUnXG5pbXBvcnQgUm91dGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdXRhYmxlJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIExvYWRhYmxlLFxuICBSb3V0YWJsZSxcbiAgVlNoZWV0XG4pLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNhcmQnLFxuXG4gIHByb3BzOiB7XG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBob3ZlcjogQm9vbGVhbixcbiAgICBpbWc6IFN0cmluZyxcbiAgICBsaW5rOiBCb29sZWFuLFxuICAgIGxvYWRlckhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDQsXG4gICAgfSxcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtY2FyZCc6IHRydWUsXG4gICAgICAgIC4uLlJvdXRhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1jYXJkLS1mbGF0JzogdGhpcy5mbGF0LFxuICAgICAgICAndi1jYXJkLS1ob3Zlcic6IHRoaXMuaG92ZXIsXG4gICAgICAgICd2LWNhcmQtLWxpbmsnOiB0aGlzLmlzQ2xpY2thYmxlLFxuICAgICAgICAndi1jYXJkLS1sb2FkaW5nJzogdGhpcy5sb2FkaW5nLFxuICAgICAgICAndi1jYXJkLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICd2LWNhcmQtLXJhaXNlZCc6IHRoaXMucmFpc2VkLFxuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICB9XG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBzdHlsZTogRGljdGlvbmFyeTxzdHJpbmc+ID0ge1xuICAgICAgICAuLi5WU2hlZXQub3B0aW9ucy5jb21wdXRlZC5zdHlsZXMuY2FsbCh0aGlzKSxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW1nKSB7XG4gICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSBgdXJsKFwiJHt0aGlzLmltZ31cIikgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuUHJvZ3Jlc3MgKCkge1xuICAgICAgY29uc3QgcmVuZGVyID0gTG9hZGFibGUub3B0aW9ucy5tZXRob2RzLmdlblByb2dyZXNzLmNhbGwodGhpcylcblxuICAgICAgaWYgKCFyZW5kZXIpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1jYXJkX19wcm9ncmVzcycsXG4gICAgICAgIGtleTogJ3Byb2dyZXNzJyxcbiAgICAgIH0sIFtyZW5kZXJdKVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHsgdGFnLCBkYXRhIH0gPSB0aGlzLmdlbmVyYXRlUm91dGVMaW5rKClcblxuICAgIGRhdGEuc3R5bGUgPSB0aGlzLnN0eWxlc1xuXG4gICAgaWYgKHRoaXMuaXNDbGlja2FibGUpIHtcbiAgICAgIGRhdGEuYXR0cnMgPSBkYXRhLmF0dHJzIHx8IHt9XG4gICAgICBkYXRhLmF0dHJzLnRhYmluZGV4ID0gMFxuICAgIH1cblxuICAgIHJldHVybiBoKHRhZywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgZGF0YSksIFtcbiAgICAgIHRoaXMuZ2VuUHJvZ3Jlc3MoKSxcbiAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHQsXG4gICAgXSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vVlByb2dyZXNzTGluZWFyLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7XG4gIFZGYWRlVHJhbnNpdGlvbixcbiAgVlNsaWRlWFRyYW5zaXRpb24sXG59IGZyb20gJy4uL3RyYW5zaXRpb25zJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgUG9zaXRpb25hYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9wb3NpdGlvbmFibGUnXG5pbXBvcnQgUHJveHlhYmxlIGZyb20gJy4uLy4uL21peGlucy9wcm94eWFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCwgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBGdW5jdGlvbmFsQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gJ3Z1ZS90eXBlcydcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFBvc2l0aW9uYWJsZUZhY3RvcnkoWydhYnNvbHV0ZScsICdmaXhlZCcsICd0b3AnLCAnYm90dG9tJ10pLFxuICBQcm94eWFibGUsXG4gIFRoZW1lYWJsZVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1wcm9ncmVzcy1saW5lYXInLFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIGJhY2tncm91bmRPcGFjaXR5OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIGJ1ZmZlclZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMTAwLFxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDQsXG4gICAgfSxcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIHF1ZXJ5OiBCb29sZWFuLFxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcbiAgICBzdHJlYW06IEJvb2xlYW4sXG4gICAgc3RyaXBlZDogQm9vbGVhbixcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZXJuYWxMYXp5VmFsdWU6IHRoaXMudmFsdWUgfHwgMCxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBfX2NhY2hlZEJhY2tncm91bmQgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciB8fCB0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2JhY2tncm91bmQnLFxuICAgICAgICBzdHlsZTogdGhpcy5iYWNrZ3JvdW5kU3R5bGUsXG4gICAgICB9KSlcbiAgICB9LFxuICAgIF9fY2FjaGVkQmFyICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCh0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbiwgW3RoaXMuX19jYWNoZWRCYXJUeXBlXSlcbiAgICB9LFxuICAgIF9fY2FjaGVkQmFyVHlwZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IHRoaXMuX19jYWNoZWRJbmRldGVybWluYXRlIDogdGhpcy5fX2NhY2hlZERldGVybWluYXRlXG4gICAgfSxcbiAgICBfX2NhY2hlZEJ1ZmZlciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fYnVmZmVyJyxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgfSlcbiAgICB9LFxuICAgIF9fY2FjaGVkRGV0ZXJtaW5hdGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1wcm9ncmVzcy1saW5lYXJfX2RldGVybWluYXRlYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCh0aGlzLm5vcm1hbGl6ZWRWYWx1ZSwgJyUnKSxcbiAgICAgICAgfSxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgX19jYWNoZWRJbmRldGVybWluYXRlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19pbmRldGVybWluYXRlJyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1wcm9ncmVzcy1saW5lYXJfX2luZGV0ZXJtaW5hdGUtLWFjdGl2ZSc6IHRoaXMuYWN0aXZlLFxuICAgICAgICB9LFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLmdlblByb2dyZXNzQmFyKCdsb25nJyksXG4gICAgICAgIHRoaXMuZ2VuUHJvZ3Jlc3NCYXIoJ3Nob3J0JyksXG4gICAgICBdKVxuICAgIH0sXG4gICAgX19jYWNoZWRTdHJlYW0gKCk6IFZOb2RlIHwgbnVsbCB7XG4gICAgICBpZiAoIXRoaXMuc3RyZWFtKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRUZXh0Q29sb3IodGhpcy5jb2xvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19zdHJlYW0nLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KDEwMCAtIHRoaXMubm9ybWFsaXplZEJ1ZmZlciwgJyUnKSxcbiAgICAgICAgfSxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgYmFja2dyb3VuZFN0eWxlICgpOiBvYmplY3Qge1xuICAgICAgY29uc3QgYmFja2dyb3VuZE9wYWNpdHkgPSB0aGlzLmJhY2tncm91bmRPcGFjaXR5ID09IG51bGxcbiAgICAgICAgPyAodGhpcy5iYWNrZ3JvdW5kQ29sb3IgPyAxIDogMC4zKVxuICAgICAgICA6IHBhcnNlRmxvYXQodGhpcy5iYWNrZ3JvdW5kT3BhY2l0eSlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogYmFja2dyb3VuZE9wYWNpdHksXG4gICAgICAgIFt0aGlzLmlzUmV2ZXJzZWQgPyAncmlnaHQnIDogJ2xlZnQnXTogY29udmVydFRvVW5pdCh0aGlzLm5vcm1hbGl6ZWRWYWx1ZSwgJyUnKSxcbiAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5ub3JtYWxpemVkQnVmZmVyIC0gdGhpcy5ub3JtYWxpemVkVmFsdWUsICclJyksXG4gICAgICB9XG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1hYnNvbHV0ZSc6IHRoaXMuYWJzb2x1dGUsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tZml4ZWQnOiB0aGlzLmZpeGVkLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXF1ZXJ5JzogdGhpcy5xdWVyeSxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1yZWFjdGl2ZSc6IHRoaXMucmVhY3RpdmUsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcmV2ZXJzZSc6IHRoaXMuaXNSZXZlcnNlZCxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1yb3VuZGVkJzogdGhpcy5yb3VuZGVkLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXN0cmlwZWQnOiB0aGlzLnN0cmlwZWQsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRUcmFuc2l0aW9uICgpOiBGdW5jdGlvbmFsQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRldGVybWluYXRlID8gVkZhZGVUcmFuc2l0aW9uIDogVlNsaWRlWFRyYW5zaXRpb25cbiAgICB9LFxuICAgIGlzUmV2ZXJzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkucnRsICE9PSB0aGlzLnJldmVyc2VcbiAgICB9LFxuICAgIG5vcm1hbGl6ZWRCdWZmZXIgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUodGhpcy5idWZmZXJWYWx1ZSlcbiAgICB9LFxuICAgIG5vcm1hbGl6ZWRWYWx1ZSAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSh0aGlzLmludGVybmFsTGF6eVZhbHVlKVxuICAgIH0sXG4gICAgcmVhY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy4kbGlzdGVuZXJzLmNoYW5nZSlcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHN0eWxlczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9XG5cbiAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgc3R5bGVzLmhlaWdodCA9IDBcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmluZGV0ZXJtaW5hdGUgJiYgcGFyc2VGbG9hdCh0aGlzLm5vcm1hbGl6ZWRCdWZmZXIpICE9PSAxMDApIHtcbiAgICAgICAgc3R5bGVzLndpZHRoID0gY29udmVydFRvVW5pdCh0aGlzLm5vcm1hbGl6ZWRCdWZmZXIsICclJylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlc1xuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IGdldFNsb3QodGhpcywgJ2RlZmF1bHQnLCB7IHZhbHVlOiB0aGlzLmludGVybmFsTGF6eVZhbHVlIH0pXG5cbiAgICAgIGlmICghc2xvdCkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fY29udGVudCcsXG4gICAgICB9LCBzbG90KVxuICAgIH0sXG4gICAgZ2VuTGlzdGVuZXJzICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuJGxpc3RlbmVyc1xuXG4gICAgICBpZiAodGhpcy5yZWFjdGl2ZSkge1xuICAgICAgICBsaXN0ZW5lcnMuY2xpY2sgPSB0aGlzLm9uQ2xpY2tcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVyc1xuICAgIH0sXG4gICAgZ2VuUHJvZ3Jlc3NCYXIgKG5hbWU6ICdsb25nJyB8ICdzaG9ydCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIFtuYW1lXTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgb25DbGljayAoZTogTW91c2VFdmVudCkge1xuICAgICAgaWYgKCF0aGlzLnJlYWN0aXZlKSByZXR1cm5cblxuICAgICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gZS5vZmZzZXRYIC8gd2lkdGggKiAxMDBcbiAgICB9LFxuICAgIG5vcm1hbGl6ZSAodmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgaWYgKHZhbHVlIDwgMCkgcmV0dXJuIDBcbiAgICAgIGlmICh2YWx1ZSA+IDEwMCkgcmV0dXJuIDEwMFxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXInLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiAwLFxuICAgICAgICAnYXJpYS12YWx1ZW1heCc6IHRoaXMubm9ybWFsaXplZEJ1ZmZlcixcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB1bmRlZmluZWQgOiB0aGlzLm5vcm1hbGl6ZWRWYWx1ZSxcbiAgICAgIH0sXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSA/IDAgOiB1bmRlZmluZWQsXG4gICAgICAgIGhlaWdodDogdGhpcy5hY3RpdmUgPyBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSA6IDAsXG4gICAgICAgIHRvcDogdGhpcy50b3AgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLmdlbkxpc3RlbmVycygpLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBbXG4gICAgICB0aGlzLl9fY2FjaGVkU3RyZWFtLFxuICAgICAgdGhpcy5fX2NhY2hlZEJhY2tncm91bmQsXG4gICAgICB0aGlzLl9fY2FjaGVkQnVmZmVyLFxuICAgICAgdGhpcy5fX2NhY2hlZEJhcixcbiAgICAgIHRoaXMuZ2VuQ29udGVudCgpLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkxhYmVsLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSwgeyBmdW5jdGlvbmFsVGhlbWVDbGFzc2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gSGVscGVyc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWxhYmVsJyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgYWJzb2x1dGU6IEJvb2xlYW4sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGZvY3VzZWQ6IEJvb2xlYW4sXG4gICAgZm9yOiBTdHJpbmcsXG4gICAgbGVmdDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICdhdXRvJyxcbiAgICB9LFxuICAgIHZhbHVlOiBCb29sZWFuLFxuICB9LFxuXG4gIHJlbmRlciAoaCwgY3R4KTogVk5vZGUge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxpc3RlbmVycywgcHJvcHMgfSA9IGN0eFxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbGFiZWwnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ3YtbGFiZWwtLWFjdGl2ZSc6IHByb3BzLnZhbHVlLFxuICAgICAgICAndi1sYWJlbC0taXMtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgLi4uZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyhjdHgpLFxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGZvcjogcHJvcHMuZm9yLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAhcHJvcHMuZm9yLFxuICAgICAgfSxcbiAgICAgIG9uOiBsaXN0ZW5lcnMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBsZWZ0OiBjb252ZXJ0VG9Vbml0KHByb3BzLmxlZnQpLFxuICAgICAgICByaWdodDogY29udmVydFRvVW5pdChwcm9wcy5yaWdodCksXG4gICAgICAgIHBvc2l0aW9uOiBwcm9wcy5hYnNvbHV0ZSA/ICdhYnNvbHV0ZScgOiAncmVsYXRpdmUnLFxuICAgICAgfSxcbiAgICAgIHJlZjogJ2xhYmVsJyxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnbGFiZWwnLCBDb2xvcmFibGUub3B0aW9ucy5tZXRob2RzLnNldFRleHRDb2xvcihwcm9wcy5mb2N1c2VkICYmIHByb3BzLmNvbG9yLCBkYXRhKSwgY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZMYWJlbCBmcm9tICcuL1ZMYWJlbCdcblxuZXhwb3J0IHsgVkxhYmVsIH1cbmV4cG9ydCBkZWZhdWx0IFZMYWJlbFxuIiwiaW1wb3J0IFZ1ZSwgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBWUHJvZ3Jlc3NMaW5lYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WUHJvZ3Jlc3NMaW5lYXInXG5cbmludGVyZmFjZSBjb2xvcmFibGUgZXh0ZW5kcyBWdWUge1xuICBjb2xvcj86IHN0cmluZ1xufVxuXG4vKipcbiAqIExvYWRhYmxlXG4gKlxuICogQG1peGluXG4gKlxuICogVXNlZCB0byBhZGQgbGluZWFyIHByb2dyZXNzIGJhciB0byBjb21wb25lbnRzXG4gKiBDYW4gdXNlIGEgZGVmYXVsdCBiYXIgd2l0aCBhIHNwZWNpZmljIGNvbG9yXG4gKiBvciBkZXNpZ25hdGUgYSBjdXN0b20gcHJvZ3Jlc3MgbGluZWFyIGJhclxuICovXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZDxjb2xvcmFibGU+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ2xvYWRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIGxvYWRpbmc6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBsb2FkZXJIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAyLFxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlblByb2dyZXNzICgpOiBWTm9kZSB8IFZOb2RlW10gfCBudWxsIHtcbiAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kc2xvdHMucHJvZ3Jlc3MgfHwgdGhpcy4kY3JlYXRlRWxlbWVudChWUHJvZ3Jlc3NMaW5lYXIsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogKHRoaXMubG9hZGluZyA9PT0gdHJ1ZSB8fCB0aGlzLmxvYWRpbmcgPT09ICcnKVxuICAgICAgICAgICAgPyAodGhpcy5jb2xvciB8fCAncHJpbWFyeScpXG4gICAgICAgICAgICA6IHRoaXMubG9hZGluZyxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMubG9hZGVySGVpZ2h0LFxuICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uL2NvbG9yYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vdGhlbWVhYmxlJ1xuaW1wb3J0IHsgaW5qZWN0IGFzIFJlZ2lzdHJhYmxlSW5qZWN0IH0gZnJvbSAnLi4vcmVnaXN0cmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgY29uc29sZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IgfSBmcm9tICd2dWUvdHlwZXMvb3B0aW9ucydcbmltcG9ydCB7IElucHV0TWVzc2FnZSwgSW5wdXRWYWxpZGF0aW9uUnVsZXMgfSBmcm9tICd2dWV0aWZ5L3R5cGVzJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFJlZ2lzdHJhYmxlSW5qZWN0PCdmb3JtJywgYW55PignZm9ybScpLFxuICBUaGVtZWFibGUsXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2YWxpZGF0YWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBlcnJvcjogQm9vbGVhbixcbiAgICBlcnJvckNvdW50OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMSxcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICBtZXNzYWdlczoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXldLFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPElucHV0TWVzc2FnZSB8IG51bGw+LFxuICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgIHJ1bGVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dFZhbGlkYXRpb25SdWxlcz4sXG4gICAgc3VjY2VzczogQm9vbGVhbixcbiAgICBzdWNjZXNzTWVzc2FnZXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnB1dE1lc3NhZ2UgfCBudWxsPixcbiAgICB2YWxpZGF0ZU9uQmx1cjogQm9vbGVhbixcbiAgICB2YWx1ZTogeyByZXF1aXJlZDogZmFsc2UgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JCdWNrZXQ6IFtdIGFzIHN0cmluZ1tdLFxuICAgICAgaGFzQ29sb3I6IGZhbHNlLFxuICAgICAgaGFzRm9jdXNlZDogZmFsc2UsXG4gICAgICBoYXNJbnB1dDogZmFsc2UsXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaXNSZXNldHRpbmc6IGZhbHNlLFxuICAgICAgbGF6eVZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5jb2xvcikgcmV0dXJuIHRoaXMuY29sb3JcbiAgICAgIC8vIEl0J3MgYXNzdW1lZCB0aGF0IGlmIHRoZSBpbnB1dCBpcyBvbiBhXG4gICAgICAvLyBkYXJrIGJhY2tncm91bmQsIHRoZSB1c2VyIHdpbGwgd2FudCB0b1xuICAgICAgLy8gaGF2ZSBhIHdoaXRlIGNvbG9yLiBJZiB0aGUgZW50aXJlIGFwcFxuICAgICAgLy8gaXMgc2V0dXAgdG8gYmUgZGFyaywgdGhlbiB0aGV5IHdpbGxcbiAgICAgIC8vIGxpa2Ugd2FudCB0byB1c2UgdGhlaXIgcHJpbWFyeSBjb2xvclxuICAgICAgaWYgKHRoaXMuaXNEYXJrICYmICF0aGlzLmFwcElzRGFyaykgcmV0dXJuICd3aGl0ZSdcbiAgICAgIGVsc2UgcmV0dXJuICdwcmltYXJ5J1xuICAgIH0sXG4gICAgaGFzRXJyb3IgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pbnRlcm5hbEVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCB8fFxuICAgICAgICB0aGlzLmVycm9yQnVja2V0Lmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5lcnJvclxuICAgICAgKVxuICAgIH0sXG4gICAgLy8gVE9ETzogQWRkIGxvZ2ljIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZSBiYXNlZFxuICAgIC8vIHVwb24gYSBnb29kIHZhbGlkYXRpb25cbiAgICBoYXNTdWNjZXNzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdWNjZXNzTWVzc2FnZXMubGVuZ3RoID4gMCB8fFxuICAgICAgICB0aGlzLnN1Y2Nlc3NcbiAgICAgIClcbiAgICB9LFxuICAgIGV4dGVybmFsRXJyb3IgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDAgfHwgdGhpcy5lcnJvclxuICAgIH0sXG4gICAgaGFzTWVzc2FnZXMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblRhcmdldC5sZW5ndGggPiAwXG4gICAgfSxcbiAgICBoYXNTdGF0ZSAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5oYXNTdWNjZXNzIHx8XG4gICAgICAgICh0aGlzLnNob3VsZFZhbGlkYXRlICYmIHRoaXMuaGFzRXJyb3IpXG4gICAgICApXG4gICAgfSxcbiAgICBpbnRlcm5hbEVycm9yTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5lcnJvck1lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxNZXNzYWdlcyAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuSW50ZXJuYWxNZXNzYWdlcyh0aGlzLm1lc3NhZ2VzKVxuICAgIH0sXG4gICAgaW50ZXJuYWxTdWNjZXNzTWVzc2FnZXMgKCk6IElucHV0VmFsaWRhdGlvblJ1bGVzIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbkludGVybmFsTWVzc2FnZXModGhpcy5zdWNjZXNzTWVzc2FnZXMpXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlOiB7XG4gICAgICBnZXQgKCk6IHVua25vd24ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG5cbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWwpXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNEaXNhYmxlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAoXG4gICAgICAgICEhdGhpcy5mb3JtICYmXG4gICAgICAgIHRoaXMuZm9ybS5kaXNhYmxlZFxuICAgICAgKVxuICAgIH0sXG4gICAgaXNJbnRlcmFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5pc1JlYWRvbmx5XG4gICAgfSxcbiAgICBpc1JlYWRvbmx5ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5IHx8IChcbiAgICAgICAgISF0aGlzLmZvcm0gJiZcbiAgICAgICAgdGhpcy5mb3JtLnJlYWRvbmx5XG4gICAgICApXG4gICAgfSxcbiAgICBzaG91bGRWYWxpZGF0ZSAoKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5leHRlcm5hbEVycm9yKSByZXR1cm4gdHJ1ZVxuICAgICAgaWYgKHRoaXMuaXNSZXNldHRpbmcpIHJldHVybiBmYWxzZVxuXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU9uQmx1clxuICAgICAgICA/IHRoaXMuaGFzRm9jdXNlZCAmJiAhdGhpcy5pc0ZvY3VzZWRcbiAgICAgICAgOiAodGhpcy5oYXNJbnB1dCB8fCB0aGlzLmhhc0ZvY3VzZWQpXG4gICAgfSxcbiAgICB2YWxpZGF0aW9ucyAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblRhcmdldC5zbGljZSgwLCBOdW1iZXIodGhpcy5lcnJvckNvdW50KSlcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TdGF0ZSAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGlmICh0aGlzLmhhc0Vycm9yICYmIHRoaXMuc2hvdWxkVmFsaWRhdGUpIHJldHVybiAnZXJyb3InXG4gICAgICBpZiAodGhpcy5oYXNTdWNjZXNzKSByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgICBpZiAodGhpcy5oYXNDb2xvcikgcmV0dXJuIHRoaXMuY29tcHV0ZWRDb2xvclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblRhcmdldCAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgaWYgKHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxFcnJvck1lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3VjY2Vzc01lc3NhZ2VzICYmIHRoaXMuc3VjY2Vzc01lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdWNjZXNzTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXNzYWdlcyAmJiB0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yQnVja2V0XG4gICAgICB9IGVsc2UgcmV0dXJuIFtdXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHJ1bGVzOiB7XG4gICAgICBoYW5kbGVyIChuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICBpZiAoZGVlcEVxdWFsKG5ld1ZhbCwgb2xkVmFsKSkgcmV0dXJuXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKVxuICAgICAgfSxcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgfSxcbiAgICBpbnRlcm5hbFZhbHVlICgpIHtcbiAgICAgIC8vIElmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgc2V0dGluZyBpbnB1dCxcbiAgICAgIC8vIG1hcmsgaXQgd2l0aCBoYXNJbnB1dFxuICAgICAgdGhpcy5oYXNJbnB1dCA9IHRydWVcbiAgICAgIHRoaXMudmFsaWRhdGVPbkJsdXIgfHwgdGhpcy4kbmV4dFRpY2sodGhpcy52YWxpZGF0ZSlcbiAgICB9LFxuICAgIGlzRm9jdXNlZCAodmFsKSB7XG4gICAgICAvLyBTaG91bGQgbm90IGNoZWNrIHZhbGlkYXRpb25cbiAgICAgIC8vIGlmIGRpc2FibGVkXG4gICAgICBpZiAoXG4gICAgICAgICF2YWwgJiZcbiAgICAgICAgIXRoaXMuaXNEaXNhYmxlZFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXNlZCA9IHRydWVcbiAgICAgICAgdGhpcy52YWxpZGF0ZU9uQmx1ciAmJiB0aGlzLiRuZXh0VGljayh0aGlzLnZhbGlkYXRlKVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNSZXNldHRpbmcgKCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzSW5wdXQgPSBmYWxzZVxuICAgICAgICB0aGlzLmhhc0ZvY3VzZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzUmVzZXR0aW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgICB9LCAwKVxuICAgIH0sXG4gICAgaGFzRXJyb3IgKHZhbCkge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmVycm9yJywgdmFsKVxuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWUgKHZhbCkge1xuICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICB9LFxuICB9LFxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRlKClcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgdGhpcy5mb3JtICYmIHRoaXMuZm9ybS51bnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkludGVybmFsTWVzc2FnZXMgKG1lc3NhZ2VzOiBJbnB1dE1lc3NhZ2UgfCBudWxsKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgaWYgKCFtZXNzYWdlcykgcmV0dXJuIFtdXG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2VzKSkgcmV0dXJuIG1lc3NhZ2VzXG4gICAgICBlbHNlIHJldHVybiBbbWVzc2FnZXNdXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHJlc2V0ICgpIHtcbiAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSB0cnVlXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBBcnJheS5pc0FycmF5KHRoaXMuaW50ZXJuYWxWYWx1ZSlcbiAgICAgICAgPyBbXVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICByZXNldFZhbGlkYXRpb24gKCkge1xuICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IHRydWVcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgdmFsaWRhdGUgKGZvcmNlID0gZmFsc2UsIHZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBlcnJvckJ1Y2tldCA9IFtdXG4gICAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuaW50ZXJuYWxWYWx1ZVxuXG4gICAgICBpZiAoZm9yY2UpIHRoaXMuaGFzSW5wdXQgPSB0aGlzLmhhc0ZvY3VzZWQgPSB0cnVlXG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnJ1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBydWxlID0gdGhpcy5ydWxlc1tpbmRleF1cbiAgICAgICAgY29uc3QgdmFsaWQgPSB0eXBlb2YgcnVsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJ1bGUodmFsdWUpIDogcnVsZVxuXG4gICAgICAgIGlmICh2YWxpZCA9PT0gZmFsc2UgfHwgdHlwZW9mIHZhbGlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGVycm9yQnVja2V0LnB1c2godmFsaWQgfHwgJycpXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbGlkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBjb25zb2xlRXJyb3IoYFJ1bGVzIHNob3VsZCByZXR1cm4gYSBzdHJpbmcgb3IgYm9vbGVhbiwgcmVjZWl2ZWQgJyR7dHlwZW9mIHZhbGlkfScgaW5zdGVhZGAsIHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lcnJvckJ1Y2tldCA9IGVycm9yQnVja2V0XG4gICAgICB0aGlzLnZhbGlkID0gZXJyb3JCdWNrZXQubGVuZ3RoID09PSAwXG5cbiAgICAgIHJldHVybiB0aGlzLnZhbGlkXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBWVG9vbGJhciBmcm9tICcuL1ZUb29sYmFyJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmNvbnN0IFZUb29sYmFyVGl0bGUgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LXRvb2xiYXJfX3RpdGxlJylcbmNvbnN0IFZUb29sYmFySXRlbXMgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LXRvb2xiYXJfX2l0ZW1zJylcblxuZXhwb3J0IHtcbiAgVlRvb2xiYXIsXG4gIFZUb29sYmFySXRlbXMsXG4gIFZUb29sYmFyVGl0bGUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJF92dWV0aWZ5X3N1YmNvbXBvbmVudHM6IHtcbiAgICBWVG9vbGJhcixcbiAgICBWVG9vbGJhckl0ZW1zLFxuICAgIFZUb29sYmFyVGl0bGUsXG4gIH0sXG59XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQ291bnRlci5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBUaGVtZWFibGUsIHsgZnVuY3Rpb25hbFRoZW1lQ2xhc3NlcyB9IGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoVGhlbWVhYmxlKS5leHRlbmQoe1xuICBuYW1lOiAndi1jb3VudGVyJyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIG1heDogW051bWJlciwgU3RyaW5nXSxcbiAgfSxcblxuICByZW5kZXIgKGgsIGN0eCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSBjdHhcbiAgICBjb25zdCBtYXggPSBwYXJzZUludChwcm9wcy5tYXgsIDEwKVxuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQocHJvcHMudmFsdWUsIDEwKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBtYXggPyBgJHt2YWx1ZX0gLyAke21heH1gIDogU3RyaW5nKHByb3BzLnZhbHVlKVxuICAgIGNvbnN0IGlzR3JlYXRlciA9IG1heCAmJiAodmFsdWUgPiBtYXgpXG5cbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LWNvdW50ZXInLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2Vycm9yLS10ZXh0JzogaXNHcmVhdGVyLFxuICAgICAgICAuLi5mdW5jdGlvbmFsVGhlbWVDbGFzc2VzKGN0eCksXG4gICAgICB9LFxuICAgIH0sIGNvbnRlbnQpXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZDb3VudGVyIGZyb20gJy4vVkNvdW50ZXInXG5cbmV4cG9ydCB7IFZDb3VudGVyIH1cbmV4cG9ydCBkZWZhdWx0IFZDb3VudGVyXG4iLCIvLyBEaXJlY3RpdmVzXG5pbXBvcnQgSW50ZXJzZWN0IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaW50ZXJzZWN0J1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnNvbGVXYXJuIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGVyc2VjdGFibGUgKG9wdGlvbnM6IHsgb25WaXNpYmxlOiBzdHJpbmdbXSB9KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSkge1xuICAgIC8vIGRvIG5vdGhpbmcgYmVjYXVzZSBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgaXMgbm90IGF2YWlsYWJsZVxuICAgIHJldHVybiBWdWUuZXh0ZW5kKHsgbmFtZTogJ2ludGVyc2VjdGFibGUnIH0pXG4gIH1cblxuICByZXR1cm4gVnVlLmV4dGVuZCh7XG4gICAgbmFtZTogJ2ludGVyc2VjdGFibGUnLFxuXG4gICAgbW91bnRlZCAoKSB7XG4gICAgICBJbnRlcnNlY3QuaW5zZXJ0ZWQodGhpcy4kZWwgYXMgSFRNTEVsZW1lbnQsIHtcbiAgICAgICAgbmFtZTogJ2ludGVyc2VjdCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLm9uT2JzZXJ2ZSxcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGRlc3Ryb3llZCAoKSB7XG4gICAgICBJbnRlcnNlY3QudW5iaW5kKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50KVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBvbk9ic2VydmUgKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSwgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyLCBpc0ludGVyc2VjdGluZzogYm9vbGVhbikge1xuICAgICAgICBpZiAoIWlzSW50ZXJzZWN0aW5nKSByZXR1cm5cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gb3B0aW9ucy5vblZpc2libGUubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICh0aGlzIGFzIGFueSlbb3B0aW9ucy5vblZpc2libGVbaV1dXG5cbiAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnNvbGVXYXJuKG9wdGlvbnMub25WaXNpYmxlW2ldICsgJyBtZXRob2QgaXMgbm90IGF2YWlsYWJsZSBvbiB0aGUgaW5zdGFuY2UgYnV0IHJlZmVyZW5jZWQgaW4gaW50ZXJzZWN0YWJsZSBtaXhpbiBvcHRpb25zJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlRleHRGaWVsZC5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVklucHV0IGZyb20gJy4uL1ZJbnB1dCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZDb3VudGVyIGZyb20gJy4uL1ZDb3VudGVyJ1xuaW1wb3J0IFZMYWJlbCBmcm9tICcuLi9WTGFiZWwnXG5cbi8vIE1peGluc1xuaW1wb3J0IEludGVyc2VjdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2ludGVyc2VjdGFibGUnXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2xvYWRhYmxlJ1xuaW1wb3J0IFZhbGlkYXRhYmxlIGZyb20gJy4uLy4uL21peGlucy92YWxpZGF0YWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBrZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IGJyZWFraW5nLCBjb25zb2xlV2FybiB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBWTm9kZSwgUHJvcFR5cGUgfSBmcm9tICd2dWUvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFZJbnB1dCxcbiAgSW50ZXJzZWN0YWJsZSh7XG4gICAgb25WaXNpYmxlOiBbXG4gICAgICAnc2V0TGFiZWxXaWR0aCcsXG4gICAgICAnc2V0UHJlZml4V2lkdGgnLFxuICAgICAgJ3NldFByZXBlbmRXaWR0aCcsXG4gICAgICAndHJ5QXV0b2ZvY3VzJyxcbiAgICBdLFxuICB9KSxcbiAgTG9hZGFibGUsXG4pXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEluc3RhbmNlVHlwZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkcmVmczoge1xuICAgIGxhYmVsOiBIVE1MRWxlbWVudFxuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgJ3ByZXBlbmQtaW5uZXInOiBIVE1MRWxlbWVudFxuICAgIHByZWZpeDogSFRNTEVsZW1lbnRcbiAgICBzdWZmaXg6IEhUTUxFbGVtZW50XG4gIH1cbn1cblxuY29uc3QgZGlydHlUeXBlcyA9IFsnY29sb3InLCAnZmlsZScsICd0aW1lJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnd2VlaycsICdtb250aCddXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRleHQtZmllbGQnLFxuXG4gIGRpcmVjdGl2ZXM6IHsgcmlwcGxlIH0sXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIGFwcGVuZE91dGVySWNvbjogU3RyaW5nLFxuICAgIGF1dG9mb2N1czogQm9vbGVhbixcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgY2xlYXJJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNsZWFyJyxcbiAgICB9LFxuICAgIGNvdW50ZXI6IFtCb29sZWFuLCBOdW1iZXIsIFN0cmluZ10sXG4gICAgY291bnRlclZhbHVlOiBGdW5jdGlvbiBhcyBQcm9wVHlwZTwodmFsdWU6IGFueSkgPT4gbnVtYmVyPixcbiAgICBmaWxsZWQ6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBmdWxsV2lkdGg6IEJvb2xlYW4sXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIHByZWZpeDogU3RyaW5nLFxuICAgIHByZXBlbmRJbm5lckljb246IFN0cmluZyxcbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc2hhcGVkOiBCb29sZWFuLFxuICAgIHNpbmdsZUxpbmU6IEJvb2xlYW4sXG4gICAgc29sbzogQm9vbGVhbixcbiAgICBzb2xvSW52ZXJ0ZWQ6IEJvb2xlYW4sXG4gICAgc3VmZml4OiBTdHJpbmcsXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBiYWRJbnB1dDogZmFsc2UsXG4gICAgbGFiZWxXaWR0aDogMCxcbiAgICBwcmVmaXhXaWR0aDogMCxcbiAgICBwcmVwZW5kV2lkdGg6IDAsXG4gICAgaW5pdGlhbFZhbHVlOiBudWxsLFxuICAgIGlzQm9vdGVkOiBmYWxzZSxcbiAgICBpc0NsZWFyaW5nOiBmYWxzZSxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVklucHV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10ZXh0LWZpZWxkJzogdHJ1ZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZnVsbC13aWR0aCc6IHRoaXMuZnVsbFdpZHRoLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1wcmVmaXgnOiB0aGlzLnByZWZpeCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc2luZ2xlLWxpbmUnOiB0aGlzLmlzU2luZ2xlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvJzogdGhpcy5pc1NvbG8sXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8taW52ZXJ0ZWQnOiB0aGlzLnNvbG9JbnZlcnRlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sby1mbGF0JzogdGhpcy5mbGF0LFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1maWxsZWQnOiB0aGlzLmZpbGxlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0taXMtYm9vdGVkJzogdGhpcy5pc0Jvb3RlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tZW5jbG9zZWQnOiB0aGlzLmlzRW5jbG9zZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXJldmVyc2UnOiB0aGlzLnJldmVyc2UsXG4gICAgICAgICd2LXRleHQtZmllbGQtLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcGxhY2Vob2xkZXInOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1yb3VuZGVkJzogdGhpcy5yb3VuZGVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zaGFwZWQnOiB0aGlzLnNoYXBlZCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBjb25zdCBjb21wdXRlZENvbG9yID0gVmFsaWRhdGFibGUub3B0aW9ucy5jb21wdXRlZC5jb21wdXRlZENvbG9yLmNhbGwodGhpcylcblxuICAgICAgaWYgKCF0aGlzLnNvbG9JbnZlcnRlZCB8fCAhdGhpcy5pc0ZvY3VzZWQpIHJldHVybiBjb21wdXRlZENvbG9yXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbG9yIHx8ICdwcmltYXJ5J1xuICAgIH0sXG4gICAgY29tcHV0ZWRDb3VudGVyVmFsdWUgKCk6IG51bWJlciB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY291bnRlclZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJWYWx1ZSh0aGlzLmludGVybmFsVmFsdWUpXG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMuaW50ZXJuYWxWYWx1ZSB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGhcbiAgICB9LFxuICAgIGhhc0NvdW50ZXIgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY291bnRlciAhPT0gZmFsc2UgJiYgdGhpcy5jb3VudGVyICE9IG51bGxcbiAgICB9LFxuICAgIGhhc0RldGFpbHMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIFZJbnB1dC5vcHRpb25zLmNvbXB1dGVkLmhhc0RldGFpbHMuY2FsbCh0aGlzKSB8fCB0aGlzLmhhc0NvdW50ZXJcbiAgICB9LFxuICAgIGludGVybmFsVmFsdWU6IHtcbiAgICAgIGdldCAoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMubGF6eVZhbHVlKVxuICAgICAgfSxcbiAgICB9LFxuICAgIGlzRGlydHkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlPy50b1N0cmluZygpLmxlbmd0aCA+IDAgfHwgdGhpcy5iYWRJbnB1dFxuICAgIH0sXG4gICAgaXNFbmNsb3NlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmZpbGxlZCB8fFxuICAgICAgICB0aGlzLmlzU29sbyB8fFxuICAgICAgICB0aGlzLm91dGxpbmVkXG4gICAgICApXG4gICAgfSxcbiAgICBpc0xhYmVsQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGlydHkgfHwgZGlydHlUeXBlcy5pbmNsdWRlcyh0aGlzLnR5cGUpXG4gICAgfSxcbiAgICBpc1NpbmdsZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmlzU29sbyB8fFxuICAgICAgICB0aGlzLnNpbmdsZUxpbmUgfHxcbiAgICAgICAgdGhpcy5mdWxsV2lkdGggfHxcbiAgICAgICAgLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9jb21wb25lbnRzL3RleHQtZmllbGRzLyNmaWxsZWQtdGV4dC1maWVsZFxuICAgICAgICAodGhpcy5maWxsZWQgJiYgIXRoaXMuaGFzTGFiZWwpXG4gICAgICApXG4gICAgfSxcbiAgICBpc1NvbG8gKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc29sbyB8fCB0aGlzLnNvbG9JbnZlcnRlZFxuICAgIH0sXG4gICAgbGFiZWxQb3NpdGlvbiAoKTogUmVjb3JkPCdsZWZ0JyB8ICdyaWdodCcsIHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD4ge1xuICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLnByZWZpeCAmJiAhdGhpcy5sYWJlbFZhbHVlKSA/IHRoaXMucHJlZml4V2lkdGggOiAwXG5cbiAgICAgIGlmICh0aGlzLmxhYmVsVmFsdWUgJiYgdGhpcy5wcmVwZW5kV2lkdGgpIG9mZnNldCAtPSB0aGlzLnByZXBlbmRXaWR0aFxuXG4gICAgICByZXR1cm4gKHRoaXMuJHZ1ZXRpZnkucnRsID09PSB0aGlzLnJldmVyc2UpID8ge1xuICAgICAgICBsZWZ0OiBvZmZzZXQsXG4gICAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICB9IDoge1xuICAgICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICAgIHJpZ2h0OiBvZmZzZXQsXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93TGFiZWwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzTGFiZWwgJiYgKCF0aGlzLmlzU2luZ2xlIHx8ICghdGhpcy5pc0xhYmVsQWN0aXZlICYmICF0aGlzLnBsYWNlaG9sZGVyKSlcbiAgICB9LFxuICAgIGxhYmVsVmFsdWUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICF0aGlzLmlzU2luZ2xlICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy5pc0ZvY3VzZWQgfHwgdGhpcy5pc0xhYmVsQWN0aXZlIHx8IHRoaXMucGxhY2Vob2xkZXIpXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGxhYmVsVmFsdWU6ICdzZXRMYWJlbFdpZHRoJyxcbiAgICBvdXRsaW5lZDogJ3NldExhYmVsV2lkdGgnLFxuICAgIGxhYmVsICgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKHRoaXMuc2V0TGFiZWxXaWR0aClcbiAgICB9LFxuICAgIHByZWZpeCAoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljayh0aGlzLnNldFByZWZpeFdpZHRoKVxuICAgIH0sXG4gICAgaXNGb2N1c2VkOiAndXBkYXRlVmFsdWUnLFxuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnYm94JykpIHtcbiAgICAgIGJyZWFraW5nKCdib3gnLCAnZmlsbGVkJywgdGhpcylcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnYnJvd3Nlci1hdXRvY29tcGxldGUnKSkge1xuICAgICAgYnJlYWtpbmcoJ2Jyb3dzZXItYXV0b2NvbXBsZXRlJywgJ2F1dG9jb21wbGV0ZScsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHRoaXMuc2hhcGVkICYmICEodGhpcy5maWxsZWQgfHwgdGhpcy5vdXRsaW5lZCB8fCB0aGlzLmlzU29sbykpIHtcbiAgICAgIGNvbnNvbGVXYXJuKCdzaGFwZWQgc2hvdWxkIGJlIHVzZWQgd2l0aCBlaXRoZXIgZmlsbGVkIG9yIG91dGxpbmVkJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5hdXRvZm9jdXMgJiYgdGhpcy50cnlBdXRvZm9jdXMoKVxuICAgIHRoaXMuc2V0TGFiZWxXaWR0aCgpXG4gICAgdGhpcy5zZXRQcmVmaXhXaWR0aCgpXG4gICAgdGhpcy5zZXRQcmVwZW5kV2lkdGgoKVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy5pc0Jvb3RlZCA9IHRydWUpKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGZvY3VzICgpIHtcbiAgICAgIHRoaXMub25Gb2N1cygpXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIGJsdXIgKGU/OiBFdmVudCkge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5L2lzc3Vlcy81OTEzXG4gICAgICAvLyBTYWZhcmkgdGFiIG9yZGVyIGdldHMgYnJva2VuIGlmIGNhbGxlZCBzeW5jaHJvbm91c1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgdGhpcy4kcmVmcy5pbnB1dC5ibHVyKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjbGVhcmFibGVDYWxsYmFjayAoKSB7XG4gICAgICB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5pbnRlcm5hbFZhbHVlID0gbnVsbClcbiAgICB9LFxuICAgIGdlbkFwcGVuZFNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1snYXBwZW5kLW91dGVyJ10pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzWydhcHBlbmQtb3V0ZXInXSBhcyBWTm9kZVtdKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZE91dGVySWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdhcHBlbmRPdXRlcicpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdhcHBlbmQnLCAnb3V0ZXInLCBzbG90KVxuICAgIH0sXG4gICAgZ2VuUHJlcGVuZElubmVyU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydwcmVwZW5kLWlubmVyJ10pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzWydwcmVwZW5kLWlubmVyJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmVwZW5kSW5uZXJJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ3ByZXBlbmRJbm5lcicpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdwcmVwZW5kJywgJ2lubmVyJywgc2xvdClcbiAgICB9LFxuICAgIGdlbkljb25TbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ2FwcGVuZCddKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLiRzbG90c1snYXBwZW5kJ10gYXMgVk5vZGVbXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ2FwcGVuZCcpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdhcHBlbmQnLCAnaW5uZXInLCBzbG90KVxuICAgIH0sXG4gICAgZ2VuSW5wdXRTbG90ICgpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5JbnB1dFNsb3QuY2FsbCh0aGlzKVxuXG4gICAgICBjb25zdCBwcmVwZW5kID0gdGhpcy5nZW5QcmVwZW5kSW5uZXJTbG90KClcblxuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgaW5wdXQuY2hpbGRyZW4gPSBpbnB1dC5jaGlsZHJlbiB8fCBbXVxuICAgICAgICBpbnB1dC5jaGlsZHJlbi51bnNoaWZ0KHByZXBlbmQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH0sXG4gICAgZ2VuQ2xlYXJJY29uICgpIHtcbiAgICAgIGlmICghdGhpcy5jbGVhcmFibGUpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmlzRGlydHkgPyB1bmRlZmluZWQgOiB7IGF0dHJzOiB7IGRpc2FibGVkOiB0cnVlIH0gfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdhcHBlbmQnLCAnaW5uZXInLCBbXG4gICAgICAgIHRoaXMuZ2VuSWNvbignY2xlYXInLCB0aGlzLmNsZWFyYWJsZUNhbGxiYWNrLCBkYXRhKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5Db3VudGVyICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNDb3VudGVyKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBtYXggPSB0aGlzLmNvdW50ZXIgPT09IHRydWUgPyB0aGlzLmF0dHJzJC5tYXhsZW5ndGggOiB0aGlzLmNvdW50ZXJcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkNvdW50ZXIsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgbWF4LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmNvbXB1dGVkQ291bnRlclZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlbkNvbnRyb2wgKCkge1xuICAgICAgcmV0dXJuIFZJbnB1dC5vcHRpb25zLm1ldGhvZHMuZ2VuQ29udHJvbC5jYWxsKHRoaXMpXG4gICAgfSxcbiAgICBnZW5EZWZhdWx0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlbkZpZWxkc2V0KCksXG4gICAgICAgIHRoaXMuZ2VuVGV4dEZpZWxkU2xvdCgpLFxuICAgICAgICB0aGlzLmdlbkNsZWFySWNvbigpLFxuICAgICAgICB0aGlzLmdlbkljb25TbG90KCksXG4gICAgICAgIHRoaXMuZ2VuUHJvZ3Jlc3MoKSxcbiAgICAgIF1cbiAgICB9LFxuICAgIGdlbkZpZWxkc2V0ICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jywge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICdhcmlhLWhpZGRlbic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LCBbdGhpcy5nZW5MZWdlbmQoKV0pXG4gICAgfSxcbiAgICBnZW5MYWJlbCAoKSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd0xhYmVsKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLnZhbGlkYXRpb25TdGF0ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBmb2N1c2VkOiAhdGhpcy5pc1NpbmdsZSAmJiAodGhpcy5pc0ZvY3VzZWQgfHwgISF0aGlzLnZhbGlkYXRpb25TdGF0ZSksXG4gICAgICAgICAgZm9yOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgbGVmdDogdGhpcy5sYWJlbFBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgcmlnaHQ6IHRoaXMubGFiZWxQb3NpdGlvbi5yaWdodCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5sYWJlbFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTGFiZWwsIGRhdGEsIHRoaXMuJHNsb3RzLmxhYmVsIHx8IHRoaXMubGFiZWwpXG4gICAgfSxcbiAgICBnZW5MZWdlbmQgKCkge1xuICAgICAgY29uc3Qgd2lkdGggPSAhdGhpcy5zaW5nbGVMaW5lICYmICh0aGlzLmxhYmVsVmFsdWUgfHwgdGhpcy5pc0RpcnR5KSA/IHRoaXMubGFiZWxXaWR0aCA6IDBcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLiRjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6ICcmIzgyMDM7JyB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogIXRoaXMuaXNTaW5nbGUgPyBjb252ZXJ0VG9Vbml0KHdpZHRoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtzcGFuXSlcbiAgICB9LFxuICAgIGdlbklucHV0ICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGlzdGVuZXJzJClcbiAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbJ2NoYW5nZSddIC8vIENoYW5nZSBzaG91bGQgbm90IGJlIGJvdW5kIGV4dGVybmFsbHlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICBzdHlsZToge30sXG4gICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgdmFsdWU6ICh0aGlzLnR5cGUgPT09ICdudW1iZXInICYmIE9iamVjdC5pcyh0aGlzLmxhenlWYWx1ZSwgLTApKSA/ICctMCcgOiB0aGlzLmxhenlWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAuLi50aGlzLmF0dHJzJCxcbiAgICAgICAgICBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgaWQ6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgICByZWFkb25seTogdGhpcy5pc1JlYWRvbmx5LFxuICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IE9iamVjdC5hc3NpZ24obGlzdGVuZXJzLCB7XG4gICAgICAgICAgYmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgaW5wdXQ6IHRoaXMub25JbnB1dCxcbiAgICAgICAgICBmb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgIGtleWRvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICB9KSxcbiAgICAgICAgcmVmOiAnaW5wdXQnLFxuICAgICAgfSlcbiAgICB9LFxuICAgIGdlbk1lc3NhZ2VzICgpIHtcbiAgICAgIGlmICghdGhpcy5zaG93RGV0YWlscykgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgbWVzc2FnZXNOb2RlID0gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5NZXNzYWdlcy5jYWxsKHRoaXMpXG4gICAgICBjb25zdCBjb3VudGVyTm9kZSA9IHRoaXMuZ2VuQ291bnRlcigpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10ZXh0LWZpZWxkX19kZXRhaWxzJyxcbiAgICAgIH0sIFtcbiAgICAgICAgbWVzc2FnZXNOb2RlLFxuICAgICAgICBjb3VudGVyTm9kZSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5UZXh0RmllbGRTbG90ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10ZXh0LWZpZWxkX19zbG90JyxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy5nZW5MYWJlbCgpLFxuICAgICAgICB0aGlzLnByZWZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3ByZWZpeCcpIDogbnVsbCxcbiAgICAgICAgdGhpcy5nZW5JbnB1dCgpLFxuICAgICAgICB0aGlzLnN1ZmZpeCA/IHRoaXMuZ2VuQWZmaXgoJ3N1ZmZpeCcpIDogbnVsbCxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5BZmZpeCAodHlwZTogJ3ByZWZpeCcgfCAnc3VmZml4Jykge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGB2LXRleHQtZmllbGRfXyR7dHlwZX1gLFxuICAgICAgICByZWY6IHR5cGUsXG4gICAgICB9LCB0aGlzW3R5cGVdKVxuICAgIH0sXG4gICAgb25CbHVyIChlPzogRXZlbnQpIHtcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2VcbiAgICAgIGUgJiYgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy4kZW1pdCgnYmx1cicsIGUpKVxuICAgIH0sXG4gICAgb25DbGljayAoKSB7XG4gICAgICBpZiAodGhpcy5pc0ZvY3VzZWQgfHwgdGhpcy5pc0Rpc2FibGVkIHx8ICF0aGlzLiRyZWZzLmlucHV0KSByZXR1cm5cblxuICAgICAgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgfSxcbiAgICBvbkZvY3VzIChlPzogRXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy4kcmVmcy5pbnB1dCkgcmV0dXJuXG5cbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0aGlzLiRyZWZzLmlucHV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWVcbiAgICAgICAgZSAmJiB0aGlzLiRlbWl0KCdmb2N1cycsIGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbklucHV0IChlOiBFdmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICB0aGlzLmJhZElucHV0ID0gdGFyZ2V0LnZhbGlkaXR5ICYmIHRhcmdldC52YWxpZGl0eS5iYWRJbnB1dFxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lbnRlcikgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5pbnRlcm5hbFZhbHVlKVxuXG4gICAgICB0aGlzLiRlbWl0KCdrZXlkb3duJywgZSlcbiAgICB9LFxuICAgIG9uTW91c2VEb3duIChlOiBFdmVudCkge1xuICAgICAgLy8gUHJldmVudCBpbnB1dCBmcm9tIGJlaW5nIGJsdXJyZWRcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcy4kcmVmcy5pbnB1dCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfVxuXG4gICAgICBWSW5wdXQub3B0aW9ucy5tZXRob2RzLm9uTW91c2VEb3duLmNhbGwodGhpcywgZSlcbiAgICB9LFxuICAgIG9uTW91c2VVcCAoZTogRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmhhc01vdXNlRG93bikgdGhpcy5mb2N1cygpXG5cbiAgICAgIFZJbnB1dC5vcHRpb25zLm1ldGhvZHMub25Nb3VzZVVwLmNhbGwodGhpcywgZSlcbiAgICB9LFxuICAgIHNldExhYmVsV2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkKSByZXR1cm5cblxuICAgICAgdGhpcy5sYWJlbFdpZHRoID0gdGhpcy4kcmVmcy5sYWJlbFxuICAgICAgICA/IE1hdGgubWluKHRoaXMuJHJlZnMubGFiZWwuc2Nyb2xsV2lkdGggKiAwLjc1ICsgNiwgKHRoaXMuJGVsIGFzIEhUTUxFbGVtZW50KS5vZmZzZXRXaWR0aCAtIDI0KVxuICAgICAgICA6IDBcbiAgICB9LFxuICAgIHNldFByZWZpeFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy4kcmVmcy5wcmVmaXgpIHJldHVyblxuXG4gICAgICB0aGlzLnByZWZpeFdpZHRoID0gdGhpcy4kcmVmcy5wcmVmaXgub2Zmc2V0V2lkdGhcbiAgICB9LFxuICAgIHNldFByZXBlbmRXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQgfHwgIXRoaXMuJHJlZnNbJ3ByZXBlbmQtaW5uZXInXSkgcmV0dXJuXG5cbiAgICAgIHRoaXMucHJlcGVuZFdpZHRoID0gdGhpcy4kcmVmc1sncHJlcGVuZC1pbm5lciddLm9mZnNldFdpZHRoXG4gICAgfSxcbiAgICB0cnlBdXRvZm9jdXMgKCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5hdXRvZm9jdXMgfHxcbiAgICAgICAgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAhdGhpcy4kcmVmcy5pbnB1dCB8fFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLiRyZWZzLmlucHV0XG4gICAgICApIHJldHVybiBmYWxzZVxuXG4gICAgICB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIHVwZGF0ZVZhbHVlICh2YWw6IGJvb2xlYW4pIHtcbiAgICAgIC8vIFNldHMgdmFsaWRhdGlvblN0YXRlIGZyb20gdmFsaWRhdGFibGVcbiAgICAgIHRoaXMuaGFzQ29sb3IgPSB2YWxcblxuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHRoaXMubGF6eVZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdGlhbFZhbHVlICE9PSB0aGlzLmxhenlWYWx1ZSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmxhenlWYWx1ZSlcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSlcbiIsImltcG9ydCBWUHJvZ3Jlc3NMaW5lYXIgZnJvbSAnLi9WUHJvZ3Jlc3NMaW5lYXInXG5cbmV4cG9ydCB7IFZQcm9ncmVzc0xpbmVhciB9XG5leHBvcnQgZGVmYXVsdCBWUHJvZ3Jlc3NMaW5lYXJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5pbXBvcnQgeyBkZWVwRXF1YWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAnY29tcGFyYWJsZScsXG4gIHByb3BzOiB7XG4gICAgdmFsdWVDb21wYXJhdG9yOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IGRlZXBFcXVhbCxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8dHlwZW9mIGRlZXBFcXVhbD4sXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVk1lbnUuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVlRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9WVGhlbWVQcm92aWRlcidcblxuLy8gTWl4aW5zXG5pbXBvcnQgQWN0aXZhdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2FjdGl2YXRhYmxlJ1xuaW1wb3J0IERlbGF5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvZGVsYXlhYmxlJ1xuaW1wb3J0IERlcGVuZGVudCBmcm9tICcuLi8uLi9taXhpbnMvZGVwZW5kZW50J1xuaW1wb3J0IERldGFjaGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2RldGFjaGFibGUnXG5pbXBvcnQgTWVudWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL21lbnVhYmxlJ1xuaW1wb3J0IFJldHVybmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JldHVybmFibGUnXG5pbXBvcnQgUm91bmRhYmxlIGZyb20gJy4uLy4uL21peGlucy9yb3VuZGFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUnXG5pbXBvcnQgUmVzaXplIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyByZW1vdmVkIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuaW1wb3J0IHtcbiAgY29udmVydFRvVW5pdCxcbiAga2V5Q29kZXMsXG59IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBWTm9kZURpcmVjdGl2ZSwgVk5vZGVEYXRhIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBEZXBlbmRlbnQsXG4gIERlbGF5YWJsZSxcbiAgRGV0YWNoYWJsZSxcbiAgTWVudWFibGUsXG4gIFJldHVybmFibGUsXG4gIFJvdW5kYWJsZSxcbiAgVG9nZ2xlYWJsZSxcbiAgVGhlbWVhYmxlXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1lbnUnLFxuXG4gIHByb3ZpZGUgKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzSW5NZW51OiB0cnVlLFxuICAgICAgLy8gUGFzcyB0aGVtZSB0aHJvdWdoIHRvIGRlZmF1bHQgc2xvdFxuICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgfVxuICB9LFxuXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBDbGlja091dHNpZGUsXG4gICAgUmVzaXplLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYXV0bzogQm9vbGVhbixcbiAgICBjbG9zZU9uQ2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgY2xvc2VPbkNvbnRlbnRDbGljazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBkaXNhYmxlS2V5czogQm9vbGVhbixcbiAgICBtYXhIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBvZmZzZXRYOiBCb29sZWFuLFxuICAgIG9mZnNldFk6IEJvb2xlYW4sXG4gICAgb3Blbk9uQ2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgb3Blbk9uSG92ZXI6IEJvb2xlYW4sXG4gICAgb3JpZ2luOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndG9wIGxlZnQnLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAndi1tZW51LXRyYW5zaXRpb24nLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbGN1bGF0ZWRUb3BBdXRvOiAwLFxuICAgICAgZGVmYXVsdE9mZnNldDogOCxcbiAgICAgIGhhc0p1c3RGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGxpc3RJbmRleDogLTEsXG4gICAgICByZXNpemVUaW1lb3V0OiAwLFxuICAgICAgc2VsZWN0ZWRJbmRleDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuICAgICAgdGlsZXM6IFtdIGFzIEhUTUxFbGVtZW50W10sXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgYWN0aXZlVGlsZSAoKTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXhdXG4gICAgfSxcbiAgICBjYWxjdWxhdGVkTGVmdCAoKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IG1lbnVXaWR0aCA9IE1hdGgubWF4KHRoaXMuZGltZW5zaW9ucy5jb250ZW50LndpZHRoLCBwYXJzZUZsb2F0KHRoaXMuY2FsY3VsYXRlZE1pbldpZHRoKSlcblxuICAgICAgaWYgKCF0aGlzLmF1dG8pIHJldHVybiB0aGlzLmNhbGNMZWZ0KG1lbnVXaWR0aCkgfHwgJzAnXG5cbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMuY2FsY1hPdmVyZmxvdyh0aGlzLmNhbGNMZWZ0QXV0bygpLCBtZW51V2lkdGgpKSB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRNYXhIZWlnaHQgKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmF1dG9cbiAgICAgICAgPyAnMjAwcHgnXG4gICAgICAgIDogY29udmVydFRvVW5pdCh0aGlzLm1heEhlaWdodClcblxuICAgICAgcmV0dXJuIGhlaWdodCB8fCAnMCdcbiAgICB9LFxuICAgIGNhbGN1bGF0ZWRNYXhXaWR0aCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBjb252ZXJ0VG9Vbml0KHRoaXMubWF4V2lkdGgpIHx8ICcwJ1xuICAgIH0sXG4gICAgY2FsY3VsYXRlZE1pbldpZHRoICgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMubWluV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5taW5XaWR0aCkgfHwgJzAnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1pbldpZHRoID0gTWF0aC5taW4oXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3Iud2lkdGggK1xuICAgICAgICBOdW1iZXIodGhpcy5udWRnZVdpZHRoKSArXG4gICAgICAgICh0aGlzLmF1dG8gPyAxNiA6IDApLFxuICAgICAgICBNYXRoLm1heCh0aGlzLnBhZ2VXaWR0aCAtIDI0LCAwKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjYWxjdWxhdGVkTWF4V2lkdGggPSBpc05hTihwYXJzZUludCh0aGlzLmNhbGN1bGF0ZWRNYXhXaWR0aCkpXG4gICAgICAgID8gbWluV2lkdGhcbiAgICAgICAgOiBwYXJzZUludCh0aGlzLmNhbGN1bGF0ZWRNYXhXaWR0aClcblxuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQoTWF0aC5taW4oXG4gICAgICAgIGNhbGN1bGF0ZWRNYXhXaWR0aCxcbiAgICAgICAgbWluV2lkdGhcbiAgICAgICkpIHx8ICcwJ1xuICAgIH0sXG4gICAgY2FsY3VsYXRlZFRvcCAoKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHRvcCA9ICF0aGlzLmF1dG9cbiAgICAgICAgPyB0aGlzLmNhbGNUb3AoKVxuICAgICAgICA6IGNvbnZlcnRUb1VuaXQodGhpcy5jYWxjWU92ZXJmbG93KHRoaXMuY2FsY3VsYXRlZFRvcEF1dG8pKVxuXG4gICAgICByZXR1cm4gdG9wIHx8ICcwJ1xuICAgIH0sXG4gICAgaGFzQ2xpY2thYmxlVGlsZXMgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy50aWxlcy5maW5kKHRpbGUgPT4gdGlsZS50YWJJbmRleCA+IC0xKSlcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1heEhlaWdodDogdGhpcy5jYWxjdWxhdGVkTWF4SGVpZ2h0LFxuICAgICAgICBtaW5XaWR0aDogdGhpcy5jYWxjdWxhdGVkTWluV2lkdGgsXG4gICAgICAgIG1heFdpZHRoOiB0aGlzLmNhbGN1bGF0ZWRNYXhXaWR0aCxcbiAgICAgICAgdG9wOiB0aGlzLmNhbGN1bGF0ZWRUb3AsXG4gICAgICAgIGxlZnQ6IHRoaXMuY2FsY3VsYXRlZExlZnQsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogdGhpcy5vcmlnaW4sXG4gICAgICAgIHpJbmRleDogdGhpcy56SW5kZXggfHwgdGhpcy5hY3RpdmVaSW5kZXgsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGlzQWN0aXZlICh2YWwpIHtcbiAgICAgIGlmICghdmFsKSB0aGlzLmxpc3RJbmRleCA9IC0xXG4gICAgfSxcbiAgICBpc0NvbnRlbnRBY3RpdmUgKHZhbCkge1xuICAgICAgdGhpcy5oYXNKdXN0Rm9jdXNlZCA9IHZhbFxuICAgIH0sXG4gICAgbGlzdEluZGV4IChuZXh0LCBwcmV2KSB7XG4gICAgICBpZiAobmV4dCBpbiB0aGlzLnRpbGVzKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLnRpbGVzW25leHRdXG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndi1saXN0LWl0ZW0tLWhpZ2hsaWdodGVkJylcbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50LnNjcm9sbFRvcCA9IHRpbGUub2Zmc2V0VG9wIC0gdGlsZS5jbGllbnRIZWlnaHRcbiAgICAgIH1cblxuICAgICAgcHJldiBpbiB0aGlzLnRpbGVzICYmXG4gICAgICAgIHRoaXMudGlsZXNbcHJldl0uY2xhc3NMaXN0LnJlbW92ZSgndi1saXN0LWl0ZW0tLWhpZ2hsaWdodGVkJylcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCdmdWxsLXdpZHRoJykpIHtcbiAgICAgIHJlbW92ZWQoJ2Z1bGwtd2lkdGgnLCB0aGlzKVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmlzQWN0aXZlICYmIHRoaXMuY2FsbEFjdGl2YXRlKClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYWN0aXZhdGUgKCkge1xuICAgICAgLy8gVXBkYXRlIGNvb3JkaW5hdGVzIGFuZCBkaW1lbnNpb25zIG9mIG1lbnVcbiAgICAgIC8vIGFuZCBpdHMgYWN0aXZhdG9yXG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKVxuICAgICAgLy8gU3RhcnQgdGhlIHRyYW5zaXRpb25cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8vIE9uY2UgdHJhbnNpdGlvbmluZywgY2FsY3VsYXRlIHNjcm9sbCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuc3RhcnRUcmFuc2l0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJlZnMuY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVkVG9wQXV0byA9IHRoaXMuY2FsY1RvcEF1dG8oKVxuICAgICAgICAgICAgdGhpcy5hdXRvICYmICh0aGlzLiRyZWZzLmNvbnRlbnQuc2Nyb2xsVG9wID0gdGhpcy5jYWxjU2Nyb2xsUG9zaXRpb24oKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2FsY1Njcm9sbFBvc2l0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgY29uc3QgYWN0aXZlVGlsZSA9ICRlbC5xdWVyeVNlbGVjdG9yKCcudi1saXN0LWl0ZW0tLWFjdGl2ZScpIGFzIEhUTUxFbGVtZW50XG4gICAgICBjb25zdCBtYXhTY3JvbGxUb3AgPSAkZWwuc2Nyb2xsSGVpZ2h0IC0gJGVsLm9mZnNldEhlaWdodFxuXG4gICAgICByZXR1cm4gYWN0aXZlVGlsZVxuICAgICAgICA/IE1hdGgubWluKG1heFNjcm9sbFRvcCwgTWF0aC5tYXgoMCwgYWN0aXZlVGlsZS5vZmZzZXRUb3AgLSAkZWwub2Zmc2V0SGVpZ2h0IC8gMiArIGFjdGl2ZVRpbGUub2Zmc2V0SGVpZ2h0IC8gMikpXG4gICAgICAgIDogJGVsLnNjcm9sbFRvcFxuICAgIH0sXG4gICAgY2FsY0xlZnRBdXRvICgpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yLmxlZnQgLSB0aGlzLmRlZmF1bHRPZmZzZXQgKiAyKVxuICAgIH0sXG4gICAgY2FsY1RvcEF1dG8gKCkge1xuICAgICAgY29uc3QgJGVsID0gdGhpcy4kcmVmcy5jb250ZW50XG4gICAgICBjb25zdCBhY3RpdmVUaWxlID0gJGVsLnF1ZXJ5U2VsZWN0b3IoJy52LWxpc3QtaXRlbS0tYWN0aXZlJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG5cbiAgICAgIGlmICghYWN0aXZlVGlsZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9mZnNldFkgfHwgIWFjdGl2ZVRpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRUb3BcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gQXJyYXkuZnJvbSh0aGlzLnRpbGVzKS5pbmRleE9mKGFjdGl2ZVRpbGUpXG5cbiAgICAgIGNvbnN0IHRpbGVEaXN0YW5jZUZyb21NZW51VG9wID0gYWN0aXZlVGlsZS5vZmZzZXRUb3AgLSB0aGlzLmNhbGNTY3JvbGxQb3NpdGlvbigpXG4gICAgICBjb25zdCBmaXJzdFRpbGVPZmZzZXRUb3AgPSAoJGVsLnF1ZXJ5U2VsZWN0b3IoJy52LWxpc3QtaXRlbScpIGFzIEhUTUxFbGVtZW50KS5vZmZzZXRUb3BcblxuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRUb3AgLSB0aWxlRGlzdGFuY2VGcm9tTWVudVRvcCAtIGZpcnN0VGlsZU9mZnNldFRvcCAtIDFcbiAgICB9LFxuICAgIGNoYW5nZUxpc3RJbmRleCAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgLy8gRm9yIGluZmluaXRlIHNjcm9sbCBhbmQgYXV0b2NvbXBsZXRlLCByZS1ldmFsdWF0ZSBjaGlsZHJlblxuICAgICAgdGhpcy5nZXRUaWxlcygpXG5cbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCAhdGhpcy5oYXNDbGlja2FibGVUaWxlcykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy50YWIpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmRvd24pIHtcbiAgICAgICAgdGhpcy5uZXh0VGlsZSgpXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMudXApIHtcbiAgICAgICAgdGhpcy5wcmV2VGlsZSgpXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZW50ZXIgJiYgdGhpcy5saXN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMudGlsZXNbdGhpcy5saXN0SW5kZXhdLmNsaWNrKClcbiAgICAgIH0gZWxzZSB7IHJldHVybiB9XG4gICAgICAvLyBPbmUgb2YgdGhlIGNvbmRpdGlvbnMgd2FzIG1ldCwgcHJldmVudCBkZWZhdWx0IGFjdGlvbiAoIzI5ODgpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9LFxuICAgIGNsb3NlQ29uZGl0aW9uYWwgKGU6IEV2ZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudFxuXG4gICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSAmJlxuICAgICAgICAhdGhpcy5faXNEZXN0cm95ZWQgJiZcbiAgICAgICAgdGhpcy5jbG9zZU9uQ2xpY2sgJiZcbiAgICAgICAgIXRoaXMuJHJlZnMuY29udGVudC5jb250YWlucyh0YXJnZXQpXG4gICAgfSxcbiAgICBnZW5BY3RpdmF0b3JBdHRyaWJ1dGVzICgpIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBBY3RpdmF0YWJsZS5vcHRpb25zLm1ldGhvZHMuZ2VuQWN0aXZhdG9yQXR0cmlidXRlcy5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZVRpbGUgJiYgdGhpcy5hY3RpdmVUaWxlLmlkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYXR0cmlidXRlcyxcbiAgICAgICAgICAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogdGhpcy5hY3RpdmVUaWxlLmlkLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gICAgfSxcbiAgICBnZW5BY3RpdmF0b3JMaXN0ZW5lcnMgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gTWVudWFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckxpc3RlbmVycy5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghdGhpcy5kaXNhYmxlS2V5cykge1xuICAgICAgICBsaXN0ZW5lcnMua2V5ZG93biA9IHRoaXMub25LZXlEb3duXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnNcbiAgICB9LFxuICAgIGdlblRyYW5zaXRpb24gKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdlbkNvbnRlbnQoKVxuXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbikgcmV0dXJuIGNvbnRlbnRcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RyYW5zaXRpb24nLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgbmFtZTogdGhpcy50cmFuc2l0aW9uLFxuICAgICAgICB9LFxuICAgICAgfSwgW2NvbnRlbnRdKVxuICAgIH0sXG4gICAgZ2VuRGlyZWN0aXZlcyAoKTogVk5vZGVEaXJlY3RpdmVbXSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmVzOiBWTm9kZURpcmVjdGl2ZVtdID0gW3tcbiAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICB2YWx1ZTogdGhpcy5pc0NvbnRlbnRBY3RpdmUsXG4gICAgICB9XVxuXG4gICAgICAvLyBEbyBub3QgYWRkIGNsaWNrIG91dHNpZGUgZm9yIGhvdmVyIG1lbnVcbiAgICAgIGlmICghdGhpcy5vcGVuT25Ib3ZlciAmJiB0aGlzLmNsb3NlT25DbGljaykge1xuICAgICAgICBkaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdjbGljay1vdXRzaWRlJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4geyB0aGlzLmlzQWN0aXZlID0gZmFsc2UgfSxcbiAgICAgICAgICAgIGNsb3NlQ29uZGl0aW9uYWw6IHRoaXMuY2xvc2VDb25kaXRpb25hbCxcbiAgICAgICAgICAgIGluY2x1ZGU6ICgpID0+IFt0aGlzLiRlbCwgLi4udGhpcy5nZXRPcGVuRGVwZW5kZW50RWxlbWVudHMoKV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgLi4udGhpcy5nZXRTY29wZUlkQXR0cnMoKSxcbiAgICAgICAgICByb2xlOiAncm9sZScgaW4gdGhpcy4kYXR0cnMgPyB0aGlzLiRhdHRycy5yb2xlIDogJ21lbnUnLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0aWNDbGFzczogJ3YtbWVudV9fY29udGVudCcsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgLi4udGhpcy5yb290VGhlbWVDbGFzc2VzLFxuICAgICAgICAgIC4uLnRoaXMucm91bmRlZENsYXNzZXMsXG4gICAgICAgICAgJ3YtbWVudV9fY29udGVudC0tYXV0byc6IHRoaXMuYXV0byxcbiAgICAgICAgICAndi1tZW51X19jb250ZW50LS1maXhlZCc6IHRoaXMuYWN0aXZhdG9yRml4ZWQsXG4gICAgICAgICAgbWVudWFibGVfX2NvbnRlbnRfX2FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgICAgICBbdGhpcy5jb250ZW50Q2xhc3MudHJpbSgpXTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLmdlbkRpcmVjdGl2ZXMoKSxcbiAgICAgICAgcmVmOiAnY29udGVudCcsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHJldHVyblxuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VPbkNvbnRlbnRDbGljaykgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgfSxcbiAgICAgIH0gYXMgVk5vZGVEYXRhXG5cbiAgICAgIGlmICh0aGlzLiRsaXN0ZW5lcnMuc2Nyb2xsKSB7XG4gICAgICAgIG9wdGlvbnMub24gPSBvcHRpb25zLm9uIHx8IHt9XG4gICAgICAgIG9wdGlvbnMub24uc2Nyb2xsID0gdGhpcy4kbGlzdGVuZXJzLnNjcm9sbFxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5vcGVuT25Ib3Zlcikge1xuICAgICAgICBvcHRpb25zLm9uID0gb3B0aW9ucy5vbiB8fCB7fVxuICAgICAgICBvcHRpb25zLm9uLm1vdXNlZW50ZXIgPSB0aGlzLm1vdXNlRW50ZXJIYW5kbGVyXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wZW5PbkhvdmVyKSB7XG4gICAgICAgIG9wdGlvbnMub24gPSBvcHRpb25zLm9uIHx8IHt9XG4gICAgICAgIG9wdGlvbnMub24ubW91c2VsZWF2ZSA9IHRoaXMubW91c2VMZWF2ZUhhbmRsZXJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIG9wdGlvbnMsIHRoaXMuZ2V0Q29udGVudFNsb3QoKSlcbiAgICB9LFxuICAgIGdldFRpbGVzICgpIHtcbiAgICAgIGlmICghdGhpcy4kcmVmcy5jb250ZW50KSByZXR1cm5cblxuICAgICAgdGhpcy50aWxlcyA9IEFycmF5LmZyb20odGhpcy4kcmVmcy5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52LWxpc3QtaXRlbScpKVxuICAgIH0sXG4gICAgbW91c2VFbnRlckhhbmRsZXIgKCkge1xuICAgICAgdGhpcy5ydW5EZWxheSgnb3BlbicsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaGFzSnVzdEZvY3VzZWQpIHJldHVyblxuXG4gICAgICAgIHRoaXMuaGFzSnVzdEZvY3VzZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgbW91c2VMZWF2ZUhhbmRsZXIgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCByZS1hY3RpdmF0aW9uXG4gICAgICB0aGlzLnJ1bkRlbGF5KCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJHJlZnMuY29udGVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpKSByZXR1cm5cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuY2FsbERlYWN0aXZhdGUoKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIG5leHRUaWxlICgpIHtcbiAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLnRpbGVzW3RoaXMubGlzdEluZGV4ICsgMV1cblxuICAgICAgaWYgKCF0aWxlKSB7XG4gICAgICAgIGlmICghdGhpcy50aWxlcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICAgIHRoaXMubGlzdEluZGV4ID0gLTFcbiAgICAgICAgdGhpcy5uZXh0VGlsZSgpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdEluZGV4KytcbiAgICAgIGlmICh0aWxlLnRhYkluZGV4ID09PSAtMSkgdGhpcy5uZXh0VGlsZSgpXG4gICAgfSxcbiAgICBwcmV2VGlsZSAoKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy50aWxlc1t0aGlzLmxpc3RJbmRleCAtIDFdXG5cbiAgICAgIGlmICghdGlsZSkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgICB0aGlzLmxpc3RJbmRleCA9IHRoaXMudGlsZXMubGVuZ3RoXG4gICAgICAgIHRoaXMucHJldlRpbGUoKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RJbmRleC0tXG4gICAgICBpZiAodGlsZS50YWJJbmRleCA9PT0gLTEpIHRoaXMucHJldlRpbGUoKVxuICAgIH0sXG4gICAgb25LZXlEb3duIChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MpIHtcbiAgICAgICAgLy8gV2FpdCBmb3IgZGVwZW5kZW50IGVsZW1lbnRzIHRvIGNsb3NlIGZpcnN0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmlzQWN0aXZlID0gZmFsc2UgfSlcbiAgICAgICAgY29uc3QgYWN0aXZhdG9yID0gdGhpcy5nZXRBY3RpdmF0b3IoKVxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiBhY3RpdmF0b3IgJiYgYWN0aXZhdG9yLmZvY3VzKCkpXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhdGhpcy5pc0FjdGl2ZSAmJlxuICAgICAgICBba2V5Q29kZXMudXAsIGtleUNvZGVzLmRvd25dLmluY2x1ZGVzKGUua2V5Q29kZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBBbGxvdyBmb3IgaXNBY3RpdmUgd2F0Y2hlciB0byBnZW5lcmF0ZSB0aWxlIGxpc3RcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuY2hhbmdlTGlzdEluZGV4KGUpKVxuICAgIH0sXG4gICAgb25SZXNpemUgKCkge1xuICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm5cblxuICAgICAgLy8gQWNjb3VudCBmb3Igc2NyZWVuIHJlc2l6ZVxuICAgICAgLy8gYW5kIG9yaWVudGF0aW9uIGNoYW5nZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgdGhpcy4kcmVmcy5jb250ZW50Lm9mZnNldFdpZHRoXG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKVxuXG4gICAgICAvLyBXaGVuIHJlc2l6aW5nIHRvIGEgc21hbGxlciB3aWR0aFxuICAgICAgLy8gY29udGVudCB3aWR0aCBpcyBldmFsdWF0ZWQgYmVmb3JlXG4gICAgICAvLyB0aGUgbmV3IGFjdGl2YXRvciB3aWR0aCBoYXMgYmVlblxuICAgICAgLy8gc2V0LCBjYXVzaW5nIGl0IHRvIG5vdCBzaXplIHByb3Blcmx5XG4gICAgICAvLyBoYWNreSBidXQgd2lsbCByZXZpc2l0IGluIHRoZSBmdXR1cmVcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpXG4gICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLnVwZGF0ZURpbWVuc2lvbnMsIDEwMClcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lbnUnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ3YtbWVudS0tYXR0YWNoZWQnOlxuICAgICAgICAgIHRoaXMuYXR0YWNoID09PSAnJyB8fFxuICAgICAgICAgIHRoaXMuYXR0YWNoID09PSB0cnVlIHx8XG4gICAgICAgICAgdGhpcy5hdHRhY2ggPT09ICdhdHRhY2gnLFxuICAgICAgfSxcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIGFyZzogJzUwMCcsXG4gICAgICAgIG5hbWU6ICdyZXNpemUnLFxuICAgICAgICB2YWx1ZTogdGhpcy5vblJlc2l6ZSxcbiAgICAgIH1dLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBbXG4gICAgICAhdGhpcy5hY3RpdmF0b3IgJiYgdGhpcy5nZW5BY3RpdmF0b3IoKSxcbiAgICAgIHRoaXMuc2hvd0xhenlDb250ZW50KCgpID0+IFtcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudChWVGhlbWVQcm92aWRlciwge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICByb290OiB0cnVlLFxuICAgICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgfSxcbiAgICAgICAgfSwgW3RoaXMuZ2VuVHJhbnNpdGlvbigpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBNaXhpbnNcbmltcG9ydCBQb3NpdGlvbmFibGUgZnJvbSAnLi4vcG9zaXRpb25hYmxlJ1xuaW1wb3J0IFN0YWNrYWJsZSBmcm9tICcuLi9zdGFja2FibGUnXG5pbXBvcnQgQWN0aXZhdGFibGUgZnJvbSAnLi4vYWN0aXZhdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgU3RhY2thYmxlLFxuICBQb3NpdGlvbmFibGUsXG4gIEFjdGl2YXRhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICBhdHRhY2g6IGJvb2xlYW4gfCBzdHJpbmcgfCBFbGVtZW50XG4gIG9mZnNldFk6IGJvb2xlYW5cbiAgb2Zmc2V0WDogYm9vbGVhblxuICAkcmVmczoge1xuICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50XG4gICAgYWN0aXZhdG9yOiBIVE1MRWxlbWVudFxuICB9XG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICdtZW51YWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBhbGxvd092ZXJmbG93OiBCb29sZWFuLFxuICAgIGxpZ2h0OiBCb29sZWFuLFxuICAgIGRhcms6IEJvb2xlYW4sXG4gICAgbWF4V2lkdGg6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBtaW5XaWR0aDogW051bWJlciwgU3RyaW5nXSxcbiAgICBudWRnZUJvdHRvbToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZUxlZnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgbnVkZ2VSaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVRvcDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBudWRnZVdpZHRoOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG9mZnNldE92ZXJmbG93OiBCb29sZWFuLFxuICAgIG9wZW5PbkNsaWNrOiBCb29sZWFuLFxuICAgIHBvc2l0aW9uWDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHBvc2l0aW9uWToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGFic29sdXRlWDogMCxcbiAgICBhYnNvbHV0ZVk6IDAsXG4gICAgYWN0aXZhdGVkQnk6IG51bGwgYXMgRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGFjdGl2YXRvckZpeGVkOiBmYWxzZSxcbiAgICBkaW1lbnNpb25zOiB7XG4gICAgICBhY3RpdmF0b3I6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBvZmZzZXRUb3A6IDAsXG4gICAgICAgIHNjcm9sbEhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgb2Zmc2V0VG9wOiAwLFxuICAgICAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaGFzSnVzdEZvY3VzZWQ6IGZhbHNlLFxuICAgIGhhc1dpbmRvdzogZmFsc2UsXG4gICAgaW5wdXRBY3RpdmF0b3I6IGZhbHNlLFxuICAgIGlzQ29udGVudEFjdGl2ZTogZmFsc2UsXG4gICAgcGFnZVdpZHRoOiAwLFxuICAgIHBhZ2VZT2Zmc2V0OiAwLFxuICAgIHN0YWNrQ2xhc3M6ICd2LW1lbnVfX2NvbnRlbnQtLWFjdGl2ZScsXG4gICAgc3RhY2tNaW5aSW5kZXg6IDYsXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRMZWZ0ICgpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnRcbiAgICAgIGNvbnN0IGFjdGl2YXRvckxlZnQgPSAodGhpcy5hdHRhY2ggIT09IGZhbHNlID8gYS5vZmZzZXRMZWZ0IDogYS5sZWZ0KSB8fCAwXG4gICAgICBjb25zdCBtaW5XaWR0aCA9IE1hdGgubWF4KGEud2lkdGgsIGMud2lkdGgpXG4gICAgICBsZXQgbGVmdCA9IDBcbiAgICAgIGxlZnQgKz0gdGhpcy5sZWZ0ID8gYWN0aXZhdG9yTGVmdCAtIChtaW5XaWR0aCAtIGEud2lkdGgpIDogYWN0aXZhdG9yTGVmdFxuICAgICAgaWYgKHRoaXMub2Zmc2V0WCkge1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IGlzTmFOKE51bWJlcih0aGlzLm1heFdpZHRoKSlcbiAgICAgICAgICA/IGEud2lkdGhcbiAgICAgICAgICA6IE1hdGgubWluKGEud2lkdGgsIE51bWJlcih0aGlzLm1heFdpZHRoKSlcblxuICAgICAgICBsZWZ0ICs9IHRoaXMubGVmdCA/IC1tYXhXaWR0aCA6IGEud2lkdGhcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm51ZGdlTGVmdCkgbGVmdCAtPSBwYXJzZUludCh0aGlzLm51ZGdlTGVmdClcbiAgICAgIGlmICh0aGlzLm51ZGdlUmlnaHQpIGxlZnQgKz0gcGFyc2VJbnQodGhpcy5udWRnZVJpZ2h0KVxuXG4gICAgICByZXR1cm4gbGVmdFxuICAgIH0sXG4gICAgY29tcHV0ZWRUb3AgKCkge1xuICAgICAgY29uc3QgYSA9IHRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3JcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmRpbWVuc2lvbnMuY29udGVudFxuICAgICAgbGV0IHRvcCA9IDBcblxuICAgICAgaWYgKHRoaXMudG9wKSB0b3AgKz0gYS5oZWlnaHQgLSBjLmhlaWdodFxuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgdG9wICs9IGEub2Zmc2V0VG9wXG4gICAgICBlbHNlIHRvcCArPSBhLnRvcCArIHRoaXMucGFnZVlPZmZzZXRcbiAgICAgIGlmICh0aGlzLm9mZnNldFkpIHRvcCArPSB0aGlzLnRvcCA/IC1hLmhlaWdodCA6IGEuaGVpZ2h0XG4gICAgICBpZiAodGhpcy5udWRnZVRvcCkgdG9wIC09IHBhcnNlSW50KHRoaXMubnVkZ2VUb3ApXG4gICAgICBpZiAodGhpcy5udWRnZUJvdHRvbSkgdG9wICs9IHBhcnNlSW50KHRoaXMubnVkZ2VCb3R0b20pXG5cbiAgICAgIHJldHVybiB0b3BcbiAgICB9LFxuICAgIGhhc0FjdGl2YXRvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLiRzY29wZWRTbG90cy5hY3RpdmF0b3IgfHwgISF0aGlzLmFjdGl2YXRvciB8fCAhIXRoaXMuaW5wdXRBY3RpdmF0b3JcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZGlzYWJsZWQgKHZhbCkge1xuICAgICAgdmFsICYmIHRoaXMuY2FsbERlYWN0aXZhdGUoKVxuICAgIH0sXG4gICAgaXNBY3RpdmUgKHZhbCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVyblxuXG4gICAgICB2YWwgPyB0aGlzLmNhbGxBY3RpdmF0ZSgpIDogdGhpcy5jYWxsRGVhY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBwb3NpdGlvblg6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgICBwb3NpdGlvblk6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgfSxcblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgdGhpcy5oYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhYnNvbHV0ZVBvc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgb2Zmc2V0TGVmdDogMCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb25ZIHx8IHRoaXMuYWJzb2x1dGVZLFxuICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uWCB8fCB0aGlzLmFic29sdXRlWCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb25YIHx8IHRoaXMuYWJzb2x1dGVYLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZhdGUgKCkge30sXG4gICAgY2FsY0xlZnQgKG1lbnVXaWR0aDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVW5pdCh0aGlzLmF0dGFjaCAhPT0gZmFsc2VcbiAgICAgICAgPyB0aGlzLmNvbXB1dGVkTGVmdFxuICAgICAgICA6IHRoaXMuY2FsY1hPdmVyZmxvdyh0aGlzLmNvbXB1dGVkTGVmdCwgbWVudVdpZHRoKSlcbiAgICB9LFxuICAgIGNhbGNUb3AgKCkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRUb1VuaXQodGhpcy5hdHRhY2ggIT09IGZhbHNlXG4gICAgICAgID8gdGhpcy5jb21wdXRlZFRvcFxuICAgICAgICA6IHRoaXMuY2FsY1lPdmVyZmxvdyh0aGlzLmNvbXB1dGVkVG9wKSlcbiAgICB9LFxuICAgIGNhbGNYT3ZlcmZsb3cgKGxlZnQ6IG51bWJlciwgbWVudVdpZHRoOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHhPdmVyZmxvdyA9IGxlZnQgKyBtZW51V2lkdGggLSB0aGlzLnBhZ2VXaWR0aCArIDEyXG5cbiAgICAgIGlmICgoIXRoaXMubGVmdCB8fCB0aGlzLnJpZ2h0KSAmJiB4T3ZlcmZsb3cgPiAwKSB7XG4gICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0IC0geE92ZXJmbG93LCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIDEyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVmdCArIHRoaXMuZ2V0T2Zmc2V0TGVmdCgpXG4gICAgfSxcbiAgICBjYWxjWU92ZXJmbG93ICh0b3A6IG51bWJlcikge1xuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KClcbiAgICAgIGNvbnN0IHRvVG9wID0gdGhpcy5wYWdlWU9mZnNldCArIGRvY3VtZW50SGVpZ2h0XG4gICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmRpbWVuc2lvbnMuYWN0aXZhdG9yXG4gICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zLmNvbnRlbnQuaGVpZ2h0XG4gICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRvcCArIGNvbnRlbnRIZWlnaHRcbiAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSB0b1RvcCA8IHRvdGFsSGVpZ2h0XG5cbiAgICAgIC8vIElmIG92ZXJmbG93aW5nIGJvdHRvbSBhbmQgb2Zmc2V0XG4gICAgICAvLyBUT0RPOiBzZXQgJ2JvdHRvbScgcG9zaXRpb24gaW5zdGVhZCBvZiAndG9wJ1xuICAgICAgaWYgKGlzT3ZlcmZsb3dpbmcgJiZcbiAgICAgICAgdGhpcy5vZmZzZXRPdmVyZmxvdyAmJlxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGVub3VnaCByb29tIHRvIG9mZnNldFxuICAgICAgICAvLyB0aGUgb3ZlcmZsb3csIGRvbid0IG9mZnNldFxuICAgICAgICBhY3RpdmF0b3IudG9wID4gY29udGVudEhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAoYWN0aXZhdG9yLnRvcCAtIGNvbnRlbnRIZWlnaHQpXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyBib3R0b21cbiAgICAgIH0gZWxzZSBpZiAoaXNPdmVyZmxvd2luZyAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRvVG9wIC0gY29udGVudEhlaWdodCAtIDEyXG4gICAgICAvLyBJZiBvdmVyZmxvd2luZyB0b3BcbiAgICAgIH0gZWxzZSBpZiAodG9wIDwgdGhpcy5wYWdlWU9mZnNldCAmJiAhdGhpcy5hbGxvd092ZXJmbG93KSB7XG4gICAgICAgIHRvcCA9IHRoaXMucGFnZVlPZmZzZXQgKyAxMlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9wIDwgMTIgPyAxMiA6IHRvcFxuICAgIH0sXG4gICAgY2FsbEFjdGl2YXRlICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVyblxuXG4gICAgICB0aGlzLmFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNhbGxEZWFjdGl2YXRlICgpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50QWN0aXZlID0gZmFsc2VcblxuICAgICAgdGhpcy5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNoZWNrRm9yUGFnZVlPZmZzZXQgKCkge1xuICAgICAgaWYgKHRoaXMuaGFzV2luZG93KSB7XG4gICAgICAgIHRoaXMucGFnZVlPZmZzZXQgPSB0aGlzLmFjdGl2YXRvckZpeGVkID8gMCA6IHRoaXMuZ2V0T2Zmc2V0VG9wKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrQWN0aXZhdG9yRml4ZWQgKCkge1xuICAgICAgaWYgKHRoaXMuYXR0YWNoICE9PSBmYWxzZSkgcmV0dXJuXG4gICAgICBsZXQgZWwgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZhdG9yRml4ZWQgPSBmYWxzZVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSAoKSB7fSxcbiAgICBnZW5BY3RpdmF0b3JMaXN0ZW5lcnMgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gQWN0aXZhdGFibGUub3B0aW9ucy5tZXRob2RzLmdlbkFjdGl2YXRvckxpc3RlbmVycy5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IG9uQ2xpY2sgPSBsaXN0ZW5lcnMuY2xpY2tcblxuICAgICAgbGlzdGVuZXJzLmNsaWNrID0gKGU6IE1vdXNlRXZlbnQgJiBLZXlib2FyZEV2ZW50ICYgRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcGVuT25DbGljaykge1xuICAgICAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hYnNvbHV0ZVggPSBlLmNsaWVudFhcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVkgPSBlLmNsaWVudFlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVyc1xuICAgIH0sXG4gICAgZ2V0SW5uZXJIZWlnaHQgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc1dpbmRvdykgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfSxcbiAgICBnZXRPZmZzZXRMZWZ0ICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNXaW5kb3cpIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICB9LFxuICAgIGdldE9mZnNldFRvcCAoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzV2luZG93KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB9LFxuICAgIGdldFJvdW5kZWRCb3VuZGVkQ2xpZW50UmVjdCAoZWw6IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGgucm91bmQocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5yb3VuZChyZWN0LnJpZ2h0KSxcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQocmVjdC53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChyZWN0LmhlaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWFzdXJlIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICghZWwgfHwgIXRoaXMuaGFzV2luZG93KSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSb3VuZGVkQm91bmRlZENsaWVudFJlY3QoZWwpXG5cbiAgICAgIC8vIEFjY291bnQgZm9yIGFjdGl2YXRvciBtYXJnaW5cbiAgICAgIGlmICh0aGlzLmF0dGFjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcblxuICAgICAgICByZWN0LmxlZnQgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0ISlcbiAgICAgICAgcmVjdC50b3AgPSBwYXJzZUludChzdHlsZS5tYXJnaW5Ub3AhKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVjdFxuICAgIH0sXG4gICAgc25lYWtQZWVrIChjYjogKCkgPT4gdm9pZCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcblxuICAgICAgICBpZiAoIWVsIHx8IGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgIGNiKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICBjYigpXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdGFydFRyYW5zaXRpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbnRlbnRBY3RpdmUgPSB0aGlzLmhhc0p1c3RGb2N1c2VkID0gdGhpcy5pc0FjdGl2ZVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgdXBkYXRlRGltZW5zaW9ucyAoKSB7XG4gICAgICB0aGlzLmhhc1dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICB0aGlzLmNoZWNrQWN0aXZhdG9yRml4ZWQoKVxuICAgICAgdGhpcy5jaGVja0ZvclBhZ2VZT2Zmc2V0KClcbiAgICAgIHRoaXMucGFnZVdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbnM6IGFueSA9IHtcbiAgICAgICAgYWN0aXZhdG9yOiB7IC4uLnRoaXMuZGltZW5zaW9ucy5hY3RpdmF0b3IgfSxcbiAgICAgICAgY29udGVudDogeyAuLi50aGlzLmRpbWVuc2lvbnMuY29udGVudCB9LFxuICAgICAgfVxuXG4gICAgICAvLyBBY3RpdmF0b3Igc2hvdWxkIGFscmVhZHkgYmUgc2hvd25cbiAgICAgIGlmICghdGhpcy5oYXNBY3RpdmF0b3IgfHwgdGhpcy5hYnNvbHV0ZSkge1xuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3IgPSB0aGlzLmdldEFjdGl2YXRvcigpXG4gICAgICAgIGlmICghYWN0aXZhdG9yKSByZXR1cm5cblxuICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvciA9IHRoaXMubWVhc3VyZShhY3RpdmF0b3IpXG4gICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldExlZnQgPSBhY3RpdmF0b3Iub2Zmc2V0TGVmdFxuICAgICAgICBpZiAodGhpcy5hdHRhY2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgY3NzIHBhZGRpbmcgY2F1c2luZyB0aGluZ3MgdG8gbm90IGxpbmUgdXBcbiAgICAgICAgICAvLyB0aGlzIGlzIG1vc3RseSBmb3Igdi1hdXRvY29tcGxldGUsIGhvcGVmdWxseSBpdCB3b24ndCBicmVhayBhbnl0aGluZ1xuICAgICAgICAgIGRpbWVuc2lvbnMuYWN0aXZhdG9yLm9mZnNldFRvcCA9IGFjdGl2YXRvci5vZmZzZXRUb3BcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaW1lbnNpb25zLmFjdGl2YXRvci5vZmZzZXRUb3AgPSAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBhbmQgaGlkZSB0byBnZXQgZGltZW5zaW9uc1xuICAgICAgdGhpcy5zbmVha1BlZWsoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQgJiYgKGRpbWVuc2lvbnMuY29udGVudCA9IHRoaXMubWVhc3VyZSh0aGlzLiRyZWZzLmNvbnRlbnQpKVxuXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICd0cmFuc2l0aW9uYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlOiBTdHJpbmcsXG4gICAgb3JpZ2luOiBTdHJpbmcsXG4gICAgdHJhbnNpdGlvbjogU3RyaW5nLFxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKCFpc0Fycikge1xuICAgIHZhciBwcm9wcyA9IGlzRnVsbCA/IGdldEFsbEtleXModmFsdWUpIDoga2V5cyh2YWx1ZSk7XG4gIH1cbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGUgVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90bykgPyBvYmplY3RDcmVhdGUocHJvdG8pIDoge307XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBidWZmZXIuY29uc3RydWN0b3IoYnVmZmVyLmxlbmd0aCk7XG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgdHJ1ZSkgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIHRydWUpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WV2luZG93LnNhc3MnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSwgVk5vZGVEaXJlY3RpdmUgfSBmcm9tICd2dWUvdHlwZXMvdm5vZGUnXG5pbXBvcnQgeyBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFRvdWNoSGFuZGxlcnMgfSBmcm9tICd2dWV0aWZ5L3R5cGVzJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgVG91Y2ggZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZCdG4gZnJvbSAnLi4vVkJ0bidcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCB7IEJhc2VJdGVtR3JvdXAgfSBmcm9tICcuLi9WSXRlbUdyb3VwL1ZJdGVtR3JvdXAnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBCYXNlSXRlbUdyb3VwLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXdpbmRvdycsXG5cbiAgcHJvdmlkZSAoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgd2luZG93R3JvdXA6IHRoaXMsXG4gICAgfVxuICB9LFxuXG4gIGRpcmVjdGl2ZXM6IHsgVG91Y2ggfSxcblxuICBwcm9wczoge1xuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndi13aW5kb3ctaXRlbS0tYWN0aXZlJyxcbiAgICB9LFxuICAgIGNvbnRpbnVvdXM6IEJvb2xlYW4sXG4gICAgbWFuZGF0b3J5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG5leHRJY29uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICckbmV4dCcsXG4gICAgfSxcbiAgICBwcmV2SWNvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAnJHByZXYnLFxuICAgIH0sXG4gICAgcmV2ZXJzZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHNob3dBcnJvd3M6IEJvb2xlYW4sXG4gICAgc2hvd0Fycm93c09uSG92ZXI6IEJvb2xlYW4sXG4gICAgdG91Y2g6IE9iamVjdCBhcyBQcm9wVHlwZTxUb3VjaEhhbmRsZXJzPixcbiAgICB0b3VjaGxlc3M6IEJvb2xlYW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFuZ2VkQnlEZWxpbWl0ZXJzOiBmYWxzZSxcbiAgICAgIGludGVybmFsSGVpZ2h0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgc3RyaW5nLCAvLyBUaGlzIGNhbiBiZSBmaXhlZCBieSBjaGlsZCBjbGFzcy5cbiAgICAgIHRyYW5zaXRpb25IZWlnaHQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBzdHJpbmcsIC8vIEludGVybWVkaWF0ZSBoZWlnaHQgZHVyaW5nIHRyYW5zaXRpb24uXG4gICAgICB0cmFuc2l0aW9uQ291bnQ6IDAsIC8vIE51bWJlciBvZiB3aW5kb3dzIGluIHRyYW5zaXRpb24gc3RhdGUuXG4gICAgICBpc0Jvb3RlZDogZmFsc2UsXG4gICAgICBpc1JldmVyc2U6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGlzQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb25Db3VudCA+IDBcbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5CYXNlSXRlbUdyb3VwLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi13aW5kb3ctLXNob3ctYXJyb3dzLW9uLWhvdmVyJzogdGhpcy5zaG93QXJyb3dzT25Ib3ZlcixcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogc3RyaW5nIHtcbiAgICAgIGlmICghdGhpcy5pc0Jvb3RlZCkgcmV0dXJuICcnXG5cbiAgICAgIGNvbnN0IGF4aXMgPSB0aGlzLnZlcnRpY2FsID8gJ3knIDogJ3gnXG4gICAgICBjb25zdCByZXZlcnNlID0gdGhpcy4kdnVldGlmeS5ydGwgJiYgYXhpcyA9PT0gJ3gnID8gIXRoaXMuaW50ZXJuYWxSZXZlcnNlIDogdGhpcy5pbnRlcm5hbFJldmVyc2VcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHJldmVyc2UgPyAnLXJldmVyc2UnIDogJydcblxuICAgICAgcmV0dXJuIGB2LXdpbmRvdy0ke2F4aXN9JHtkaXJlY3Rpb259LXRyYW5zaXRpb25gXG4gICAgfSxcbiAgICBoYXNBY3RpdmVJdGVtcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gIWl0ZW0uZGlzYWJsZWQpXG4gICAgICApXG4gICAgfSxcbiAgICBoYXNOZXh0ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVvdXMgfHwgdGhpcy5pbnRlcm5hbEluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxXG4gICAgfSxcbiAgICBoYXNQcmV2ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVvdXMgfHwgdGhpcy5pbnRlcm5hbEluZGV4ID4gMFxuICAgIH0sXG4gICAgaW50ZXJuYWxJbmRleCAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFZhbHVlID09PSB0aGlzLmdldFZhbHVlKGl0ZW0sIGkpXG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJuYWxSZXZlcnNlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnJldmVyc2UgPyAhdGhpcy5pc1JldmVyc2UgOiB0aGlzLmlzUmV2ZXJzZVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbEluZGV4OiAndXBkYXRlUmV2ZXJzZScsXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy5pc0Jvb3RlZCA9IHRydWUpKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250YWluZXIgKCk6IFZOb2RlIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW3RoaXMuJHNsb3RzLmRlZmF1bHRdXG5cbiAgICAgIGlmICh0aGlzLnNob3dBcnJvd3MpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaCh0aGlzLmdlbkNvbnRyb2xJY29ucygpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytd2luZG93X19jb250YWluZXInLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICd2LXdpbmRvd19fY29udGFpbmVyLS1pcy1hY3RpdmUnOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogdGhpcy5pbnRlcm5hbEhlaWdodCB8fCB0aGlzLnRyYW5zaXRpb25IZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlbkljb24gKFxuICAgICAgZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsXG4gICAgICBpY29uOiBzdHJpbmcsXG4gICAgICBmbjogKCkgPT4gdm9pZFxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LXdpbmRvd19fJHtkaXJlY3Rpb259YCxcbiAgICAgIH0sIFtcbiAgICAgICAgdGhpcy4kY3JlYXRlRWxlbWVudChWQnRuLCB7XG4gICAgICAgICAgcHJvcHM6IHsgaWNvbjogdHJ1ZSB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHRoaXMuJHZ1ZXRpZnkubGFuZy50KGAkdnVldGlmeS5jYXJvdXNlbC4ke2RpcmVjdGlvbn1gKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRCeURlbGltaXRlcnMgPSB0cnVlXG4gICAgICAgICAgICAgIGZuKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSwgW1xuICAgICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgICAgIHByb3BzOiB7IGxhcmdlOiB0cnVlIH0sXG4gICAgICAgICAgfSwgaWNvbiksXG4gICAgICAgIF0pLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkNvbnRyb2xJY29ucyAoKSB7XG4gICAgICBjb25zdCBpY29ucyA9IFtdXG5cbiAgICAgIGNvbnN0IHByZXZJY29uID0gdGhpcy4kdnVldGlmeS5ydGxcbiAgICAgICAgPyB0aGlzLm5leHRJY29uXG4gICAgICAgIDogdGhpcy5wcmV2SWNvblxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmhhc1ByZXYgJiZcbiAgICAgICAgcHJldkljb24gJiZcbiAgICAgICAgdHlwZW9mIHByZXZJY29uID09PSAnc3RyaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSB0aGlzLmdlbkljb24oJ3ByZXYnLCBwcmV2SWNvbiwgdGhpcy5wcmV2KVxuICAgICAgICBpY29uICYmIGljb25zLnB1c2goaWNvbilcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dEljb24gPSB0aGlzLiR2dWV0aWZ5LnJ0bFxuICAgICAgICA/IHRoaXMucHJldkljb25cbiAgICAgICAgOiB0aGlzLm5leHRJY29uXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzTmV4dCAmJlxuICAgICAgICBuZXh0SWNvbiAmJlxuICAgICAgICB0eXBlb2YgbmV4dEljb24gPT09ICdzdHJpbmcnXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2VuSWNvbignbmV4dCcsIG5leHRJY29uLCB0aGlzLm5leHQpXG4gICAgICAgIGljb24gJiYgaWNvbnMucHVzaChpY29uKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWNvbnNcbiAgICB9LFxuICAgIGdldE5leHRJbmRleCAoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSAoaW5kZXggKyAxKSAlIHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tuZXh0SW5kZXhdXG5cbiAgICAgIGlmIChpdGVtLmRpc2FibGVkKSByZXR1cm4gdGhpcy5nZXROZXh0SW5kZXgobmV4dEluZGV4KVxuXG4gICAgICByZXR1cm4gbmV4dEluZGV4XG4gICAgfSxcbiAgICBnZXRQcmV2SW5kZXggKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgY29uc3QgcHJldkluZGV4ID0gKGluZGV4ICsgdGhpcy5pdGVtcy5sZW5ndGggLSAxKSAlIHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1twcmV2SW5kZXhdXG5cbiAgICAgIGlmIChpdGVtLmRpc2FibGVkKSByZXR1cm4gdGhpcy5nZXRQcmV2SW5kZXgocHJldkluZGV4KVxuXG4gICAgICByZXR1cm4gcHJldkluZGV4XG4gICAgfSxcbiAgICBuZXh0ICgpIHtcbiAgICAgIHRoaXMuaXNSZXZlcnNlID0gdGhpcy4kdnVldGlmeS5ydGxcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXRoaXMuaGFzQWN0aXZlSXRlbXMgfHwgIXRoaXMuaGFzTmV4dCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZ2V0TmV4dEluZGV4KHRoaXMuaW50ZXJuYWxJbmRleClcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW25leHRJbmRleF1cblxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdGhpcy5nZXRWYWx1ZShpdGVtLCBuZXh0SW5kZXgpXG4gICAgfSxcbiAgICBwcmV2ICgpIHtcbiAgICAgIHRoaXMuaXNSZXZlcnNlID0gIXRoaXMuJHZ1ZXRpZnkucnRsXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZUl0ZW1zIHx8ICF0aGlzLmhhc1ByZXYpIHJldHVyblxuXG4gICAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLmdldFByZXZJbmRleCh0aGlzLmludGVybmFsSW5kZXgpXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tsYXN0SW5kZXhdXG5cbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoaXRlbSwgbGFzdEluZGV4KVxuICAgIH0sXG4gICAgdXBkYXRlUmV2ZXJzZSAodmFsOiBudW1iZXIsIG9sZFZhbDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5jaGFuZ2VkQnlEZWxpbWl0ZXJzKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEJ5RGVsaW1pdGVycyA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmlzUmV2ZXJzZSA9IHZhbCA8IG9sZFZhbFxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytd2luZG93JyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBkaXJlY3RpdmVzOiBbXSBhcyBWTm9kZURpcmVjdGl2ZVtdLFxuICAgIH1cblxuICAgIGlmICghdGhpcy50b3VjaGxlc3MpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy50b3VjaCB8fCB7XG4gICAgICAgIGxlZnQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLiR2dWV0aWZ5LnJ0bCA/IHRoaXMucHJldigpIDogdGhpcy5uZXh0KClcbiAgICAgICAgfSxcbiAgICAgICAgcmlnaHQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLiR2dWV0aWZ5LnJ0bCA/IHRoaXMubmV4dCgpIDogdGhpcy5wcmV2KClcbiAgICAgICAgfSxcbiAgICAgICAgZW5kOiAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnQ6IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICBkYXRhLmRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgIG5hbWU6ICd0b3VjaCcsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW3RoaXMuZ2VuQ29udGFpbmVyKCldKVxuICB9LFxufSlcbiIsIi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWV2luZG93IGZyb20gJy4uL1ZXaW5kb3cvVldpbmRvdydcblxuLy8gVHlwZXMgJiBDb21wb25lbnRzXG5pbXBvcnQgeyBCYXNlSXRlbUdyb3VwLCBHcm91cGFibGVJbnN0YW5jZSB9IGZyb20gJy4vLi4vVkl0ZW1Hcm91cC9WSXRlbUdyb3VwJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgVldpbmRvdy5leHRlbmQoe1xuICBuYW1lOiAndi10YWJzLWl0ZW1zJyxcblxuICBwcm9wczoge1xuICAgIG1hbmRhdG9yeToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVldpbmRvdy5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGFicy1pdGVtcyc6IHRydWUsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0RhcmsgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdElzRGFya1xuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdldFZhbHVlIChpdGVtOiBHcm91cGFibGVJbnN0YW5jZSwgaTogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gaXRlbS5pZCB8fCBCYXNlSXRlbUdyb3VwLm9wdGlvbnMubWV0aG9kcy5nZXRWYWx1ZS5jYWxsKHRoaXMsIGl0ZW0sIGkpXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WQXBwQmFyLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWVG9vbGJhciBmcm9tICcuLi9WVG9vbGJhci9WVG9vbGJhcidcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Njcm9sbCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgQXBwbGljYXRpb25hYmxlIGZyb20gJy4uLy4uL21peGlucy9hcHBsaWNhdGlvbmFibGUnXG5pbXBvcnQgU2Nyb2xsYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc2Nyb2xsYWJsZSdcbmltcG9ydCBTU1JCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc3NyLWJvb3RhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29udmVydFRvVW5pdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgVlRvb2xiYXIsXG4gIFNjcm9sbGFibGUsXG4gIFNTUkJvb3RhYmxlLFxuICBUb2dnbGVhYmxlLFxuICBBcHBsaWNhdGlvbmFibGUoJ3RvcCcsIFtcbiAgICAnY2xpcHBlZExlZnQnLFxuICAgICdjbGlwcGVkUmlnaHQnLFxuICAgICdjb21wdXRlZEhlaWdodCcsXG4gICAgJ2ludmVydGVkU2Nyb2xsJyxcbiAgICAnaXNFeHRlbmRlZCcsXG4gICAgJ2lzUHJvbWluZW50JyxcbiAgICAndmFsdWUnLFxuICBdKVxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1hcHAtYmFyJyxcblxuICBkaXJlY3RpdmVzOiB7IFNjcm9sbCB9LFxuXG4gIHByb3BzOiB7XG4gICAgY2xpcHBlZExlZnQ6IEJvb2xlYW4sXG4gICAgY2xpcHBlZFJpZ2h0OiBCb29sZWFuLFxuICAgIGNvbGxhcHNlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgZWxldmF0ZU9uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGZhZGVJbWdPblNjcm9sbDogQm9vbGVhbixcbiAgICBoaWRlT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgaW52ZXJ0ZWRTY3JvbGw6IEJvb2xlYW4sXG4gICAgc2Nyb2xsT2ZmU2NyZWVuOiBCb29sZWFuLFxuICAgIHNocmlua09uU2Nyb2xsOiBCb29sZWFuLFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy52YWx1ZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBhcHBsaWNhdGlvblByb3BlcnR5ICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICF0aGlzLmJvdHRvbSA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICB9LFxuICAgIGNhblNjcm9sbCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBTY3JvbGxhYmxlLm9wdGlvbnMuY29tcHV0ZWQuY2FuU2Nyb2xsLmNhbGwodGhpcykgJiZcbiAgICAgICAgKFxuICAgICAgICAgIHRoaXMuaW52ZXJ0ZWRTY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmVsZXZhdGVPblNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuaGlkZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZU9uU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5pc0Jvb3RlZCB8fFxuICAgICAgICAgIC8vIElmIGZhbHNleSwgdXNlciBoYXMgcHJvdmlkZWQgYW5cbiAgICAgICAgICAvLyBleHBsaWNpdCB2YWx1ZSB3aGljaCBzaG91bGRcbiAgICAgICAgICAvLyBvdmVyd3JpdGUgYW55dGhpbmcgd2UgZG9cbiAgICAgICAgICAhdGhpcy52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRvb2xiYXItLWNvbGxhcHNlJzogdGhpcy5jb2xsYXBzZSB8fCB0aGlzLmNvbGxhcHNlT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXInOiB0cnVlLFxuICAgICAgICAndi1hcHAtYmFyLS1jbGlwcGVkJzogdGhpcy5jbGlwcGVkTGVmdCB8fCB0aGlzLmNsaXBwZWRSaWdodCxcbiAgICAgICAgJ3YtYXBwLWJhci0tZmFkZS1pbWctb24tc2Nyb2xsJzogdGhpcy5mYWRlSW1nT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXItLWVsZXZhdGUtb24tc2Nyb2xsJzogdGhpcy5lbGV2YXRlT25TY3JvbGwsXG4gICAgICAgICd2LWFwcC1iYXItLWZpeGVkJzogIXRoaXMuYWJzb2x1dGUgJiYgKHRoaXMuYXBwIHx8IHRoaXMuZml4ZWQpLFxuICAgICAgICAndi1hcHAtYmFyLS1oaWRlLXNoYWRvdyc6IHRoaXMuaGlkZVNoYWRvdyxcbiAgICAgICAgJ3YtYXBwLWJhci0taXMtc2Nyb2xsZWQnOiB0aGlzLmN1cnJlbnRTY3JvbGwgPiAwLFxuICAgICAgICAndi1hcHAtYmFyLS1zaHJpbmstb24tc2Nyb2xsJzogdGhpcy5zaHJpbmtPblNjcm9sbCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQ29udGVudEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5zaHJpbmtPblNjcm9sbCkgcmV0dXJuIFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb250ZW50SGVpZ2h0LmNhbGwodGhpcylcblxuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wdXRlZE9yaWdpbmFsSGVpZ2h0XG5cbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMuZGVuc2UgPyA0OCA6IDU2XG4gICAgICBjb25zdCBtYXggPSBoZWlnaHRcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXggLSBtaW5cbiAgICAgIGNvbnN0IGl0ZXJhdGlvbiA9IGRpZmZlcmVuY2UgLyB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmN1cnJlbnRTY3JvbGwgKiBpdGVyYXRpb25cblxuICAgICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgbWF4IC0gb2Zmc2V0KVxuICAgIH0sXG4gICAgY29tcHV0ZWRGb250U2l6ZSAoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICghdGhpcy5pc1Byb21pbmVudCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICBjb25zdCBtYXggPSB0aGlzLmRlbnNlID8gOTYgOiAxMjhcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXggLSB0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodFxuICAgICAgY29uc3QgaW5jcmVtZW50ID0gMC4wMDM0N1xuXG4gICAgICAvLyAxLjVyZW0gdG8gYSBtaW5pbXVtIG9mIDEuMjVyZW1cbiAgICAgIHJldHVybiBOdW1iZXIoKDEuNTAgLSBkaWZmZXJlbmNlICogaW5jcmVtZW50KS50b0ZpeGVkKDIpKVxuICAgIH0sXG4gICAgY29tcHV0ZWRMZWZ0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCB8fCB0aGlzLmNsaXBwZWRMZWZ0KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvbi5sZWZ0XG4gICAgfSxcbiAgICBjb21wdXRlZE1hcmdpblRvcCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHApIHJldHVybiAwXG5cbiAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uLmJhclxuICAgIH0sXG4gICAgY29tcHV0ZWRPcGFjaXR5ICgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF0aGlzLmZhZGVJbWdPblNjcm9sbCkgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICBjb25zdCBvcGFjaXR5ID0gTWF0aC5tYXgoXG4gICAgICAgICh0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkIC0gdGhpcy5jdXJyZW50U2Nyb2xsKSAvIHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQsXG4gICAgICAgIDBcbiAgICAgIClcblxuICAgICAgcmV0dXJuIE51bWJlcihwYXJzZUZsb2F0KG9wYWNpdHkpLnRvRml4ZWQoMikpXG4gICAgfSxcbiAgICBjb21wdXRlZE9yaWdpbmFsSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgbGV0IGhlaWdodCA9IFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuY29tcHV0ZWRDb250ZW50SGVpZ2h0LmNhbGwodGhpcylcbiAgICAgIGlmICh0aGlzLmlzRXh0ZW5kZWQpIGhlaWdodCArPSBwYXJzZUludCh0aGlzLmV4dGVuc2lvbkhlaWdodClcbiAgICAgIHJldHVybiBoZWlnaHRcbiAgICB9LFxuICAgIGNvbXB1dGVkUmlnaHQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwIHx8IHRoaXMuY2xpcHBlZFJpZ2h0KSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvbi5yaWdodFxuICAgIH0sXG4gICAgY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQgKCk6IG51bWJlciB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxUaHJlc2hvbGQpIHJldHVybiBOdW1iZXIodGhpcy5zY3JvbGxUaHJlc2hvbGQpXG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkT3JpZ2luYWxIZWlnaHQgLSAodGhpcy5kZW5zZSA/IDQ4IDogNTYpXG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zZm9ybSAoKTogbnVtYmVyIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2Nyb2xsIHx8XG4gICAgICAgICh0aGlzLmVsZXZhdGVPblNjcm9sbCAmJiB0aGlzLmN1cnJlbnRTY3JvbGwgPT09IDAgJiYgdGhpcy5pc0FjdGl2ZSlcbiAgICAgICkgcmV0dXJuIDBcblxuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHJldHVybiAwXG5cbiAgICAgIGNvbnN0IHNjcm9sbE9mZlNjcmVlbiA9IHRoaXMuc2Nyb2xsT2ZmU2NyZWVuXG4gICAgICAgID8gdGhpcy5jb21wdXRlZEhlaWdodFxuICAgICAgICA6IHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG5cbiAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA/IHNjcm9sbE9mZlNjcmVlbiA6IC1zY3JvbGxPZmZTY3JlZW5cbiAgICB9LFxuICAgIGhpZGVTaGFkb3cgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsICYmIHRoaXMuaXNFeHRlbmRlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGV2YXRlT25TY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcm9sbCA9PT0gMCB8fFxuICAgICAgICAgIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm0gPCAwXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICF0aGlzLmlzRXh0ZW5kZWQgfHxcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZTY3JlZW5cbiAgICAgICkgJiYgdGhpcy5jb21wdXRlZFRyYW5zZm9ybSAhPT0gMFxuICAgIH0sXG4gICAgaXNDb2xsYXBzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKCF0aGlzLmNvbGxhcHNlT25TY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuaXNDb2xsYXBzZWQuY2FsbCh0aGlzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Nyb2xsID4gMFxuICAgIH0sXG4gICAgaXNQcm9taW5lbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgVlRvb2xiYXIub3B0aW9ucy5jb21wdXRlZC5pc1Byb21pbmVudC5jYWxsKHRoaXMpIHx8XG4gICAgICAgIHRoaXMuc2hyaW5rT25TY3JvbGxcbiAgICAgIClcbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuc3R5bGVzLmNhbGwodGhpcyksXG4gICAgICAgIGZvbnRTaXplOiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRGb250U2l6ZSwgJ3JlbScpLFxuICAgICAgICBtYXJnaW5Ub3A6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZE1hcmdpblRvcCksXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm0pfSlgLFxuICAgICAgICBsZWZ0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRMZWZ0KSxcbiAgICAgICAgcmlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZFJpZ2h0KSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgY2FuU2Nyb2xsOiAnb25TY3JvbGwnLFxuICAgIGNvbXB1dGVkVHJhbnNmb3JtICgpIHtcbiAgICAgIC8vIE5vcm1hbGx5IHdlIGRvIG5vdCB3YW50IHRoZSB2LWFwcC1iYXJcbiAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgYXBwbGljYXRpb24gdG9wIHZhbHVlXG4gICAgICAvLyB0byBhdm9pZCBzY3JlZW4ganVtcC4gSG93ZXZlciwgaW5cbiAgICAgIC8vIHRoaXMgc2l0dWF0aW9uLCB3ZSBtdXN0IHNvIHRoYXRcbiAgICAgIC8vIHRoZSBjbGlwcGVkIGRyYXdlciBjYW4gdXBkYXRlXG4gICAgICAvLyBpdHMgdG9wIHZhbHVlIHdoZW4gc2Nyb2xsZWRcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2Nyb2xsIHx8XG4gICAgICAgICghdGhpcy5jbGlwcGVkTGVmdCAmJiAhdGhpcy5jbGlwcGVkUmlnaHQpXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmNhbGxVcGRhdGUoKVxuICAgIH0sXG4gICAgaW52ZXJ0ZWRTY3JvbGwgKHZhbDogYm9vbGVhbikge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9ICF2YWwgfHwgdGhpcy5jdXJyZW50U2Nyb2xsICE9PSAwXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICBpZiAodGhpcy5pbnZlcnRlZFNjcm9sbCkgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkJhY2tncm91bmQgKCkge1xuICAgICAgY29uc3QgcmVuZGVyID0gVlRvb2xiYXIub3B0aW9ucy5tZXRob2RzLmdlbkJhY2tncm91bmQuY2FsbCh0aGlzKVxuXG4gICAgICByZW5kZXIuZGF0YSA9IHRoaXMuX2IocmVuZGVyLmRhdGEgfHwge30sIHJlbmRlci50YWchLCB7XG4gICAgICAgIHN0eWxlOiB7IG9wYWNpdHk6IHRoaXMuY29tcHV0ZWRPcGFjaXR5IH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcmVuZGVyXG4gICAgfSxcbiAgICB1cGRhdGVBcHBsaWNhdGlvbiAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLmludmVydGVkU2Nyb2xsXG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMuY29tcHV0ZWRIZWlnaHQgKyB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtXG4gICAgfSxcbiAgICB0aHJlc2hvbGRNZXQgKCkge1xuICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMuY3VycmVudFNjcm9sbCA+IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhpZGVPblNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5pc1Njcm9sbGluZ1VwIHx8XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2Nyb2xsIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50VGhyZXNob2xkIDwgdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCkgcmV0dXJuXG5cbiAgICAgIHRoaXMuc2F2ZWRTY3JvbGwgPSB0aGlzLmN1cnJlbnRTY3JvbGxcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCByZW5kZXIgPSBWVG9vbGJhci5vcHRpb25zLnJlbmRlci5jYWxsKHRoaXMsIGgpXG5cbiAgICByZW5kZXIuZGF0YSA9IHJlbmRlci5kYXRhIHx8IHt9XG5cbiAgICBpZiAodGhpcy5jYW5TY3JvbGwpIHtcbiAgICAgIHJlbmRlci5kYXRhLmRpcmVjdGl2ZXMgPSByZW5kZXIuZGF0YS5kaXJlY3RpdmVzIHx8IFtdXG4gICAgICByZW5kZXIuZGF0YS5kaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICBhcmc6IHRoaXMuc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBuYW1lOiAnc2Nyb2xsJyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25TY3JvbGwsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJcbiAgfSxcbn0pXG4iLCIvLyBEaXJlY3RpdmVzXG5pbXBvcnQgcmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IFZ1ZSwgeyBWTm9kZSwgVk5vZGVEYXRhLCBWTm9kZURpcmVjdGl2ZSB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICdyaXBwbGVhYmxlJyxcblxuICBkaXJlY3RpdmVzOiB7IHJpcHBsZSB9LFxuXG4gIHByb3BzOiB7XG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuUmlwcGxlIChkYXRhOiBWTm9kZURhdGEgPSB7fSk6IFZOb2RlIHwgbnVsbCB7XG4gICAgICBpZiAoIXRoaXMucmlwcGxlKSByZXR1cm4gbnVsbFxuXG4gICAgICBkYXRhLnN0YXRpY0NsYXNzID0gJ3YtaW5wdXQtLXNlbGVjdGlvbi1jb250cm9sc19fcmlwcGxlJ1xuXG4gICAgICBkYXRhLmRpcmVjdGl2ZXMgPSBkYXRhLmRpcmVjdGl2ZXMgfHwgW11cbiAgICAgIGRhdGEuZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3JpcHBsZScsXG4gICAgICAgIHZhbHVlOiB7IGNlbnRlcjogdHJ1ZSB9LFxuICAgICAgfSBhcyBWTm9kZURpcmVjdGl2ZSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRhdGEpXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WTWFpbi5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBTU1JCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvc3NyLWJvb3RhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBTU1JCb290YWJsZS5leHRlbmQoe1xuICBuYW1lOiAndi1tYWluJyxcblxuICBwcm9wczoge1xuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ21haW4nLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGJhciwgdG9wLCByaWdodCwgZm9vdGVyLCBpbnNldEZvb3RlciwgYm90dG9tLCBsZWZ0LFxuICAgICAgfSA9IHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb25cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZ1RvcDogYCR7dG9wICsgYmFyfXB4YCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBgJHtyaWdodH1weGAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGAke2Zvb3RlciArIGluc2V0Rm9vdGVyICsgYm90dG9tfXB4YCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IGAke2xlZnR9cHhgLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtbWFpbicsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICByZWY6ICdtYWluJyxcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgW1xuICAgICAgaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6ICd2LW1haW5fX3dyYXAnIH0sXG4gICAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHRcbiAgICAgICksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWTWFpbiBmcm9tICcuLi9WTWFpbi9WTWFpbidcbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZNYWluLmV4dGVuZCh7XG4gIG5hbWU6ICd2LW1haW4nLFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGRlcHJlY2F0ZSgndi1jb250ZW50JywgJ3YtbWFpbicsIHRoaXMpXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIC8vIEFkZCB0aGUgbGVnYWN5IGNsYXNzIG5hbWVzXG4gICAgY29uc3Qgbm9kZSA9IFZNYWluLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIG5vZGUuZGF0YSEuc3RhdGljQ2xhc3MgKz0gJyB2LWNvbnRlbnQnXG4gICAgbm9kZS5jaGlsZHJlbiFbMF0hLmRhdGEhLnN0YXRpY0NsYXNzICs9ICcgdi1jb250ZW50X193cmFwJ1xuXG4gICAgcmV0dXJuIGgobm9kZS50YWcsIG5vZGUuZGF0YSwgbm9kZS5jaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgJy4vX2dyaWQuc2FzcydcbmltcG9ydCB7IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3NwYWNlcicsICdkaXYnLCAndi1zcGFjZXInKVxuIiwiaW1wb3J0ICcuL19ncmlkLnNhc3MnXG5pbXBvcnQgJy4vVkdyaWQuc2FzcydcblxuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJ1xuXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgR3JpZCgnY29udGFpbmVyJykuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY29udGFpbmVyJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBpZDogU3RyaW5nLFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgfSxcbiAgICBmbHVpZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHJlbmRlciAoaCwgeyBwcm9wcywgZGF0YSwgY2hpbGRyZW4gfSkge1xuICAgIGxldCBjbGFzc2VzXG4gICAgY29uc3QgeyBhdHRycyB9ID0gZGF0YVxuICAgIGlmIChhdHRycykge1xuICAgICAgLy8gcmVzZXQgYXR0cnMgdG8gZXh0cmFjdCB1dGlsaXR5IGNsYXNlcyBsaWtlIHBhLTNcbiAgICAgIGRhdGEuYXR0cnMgPSB7fVxuICAgICAgY2xhc3NlcyA9IE9iamVjdC5rZXlzKGF0dHJzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIG9uY2UgcmVzb2x2ZWRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS9pc3N1ZXMvNzg0MVxuICAgICAgICBpZiAoa2V5ID09PSAnc2xvdCcpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNba2V5XVxuXG4gICAgICAgIC8vIGFkZCBiYWNrIGRhdGEgYXR0cmlidXRlcyBsaWtlIGRhdGEtdGVzdD1cImZvb1wiIGJ1dCBkbyBub3RcbiAgICAgICAgLy8gYWRkIHRoZW0gYXMgY2xhc3Nlc1xuICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICBkYXRhLmF0dHJzIVtrZXldID0gdmFsdWVcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5pZCkge1xuICAgICAgZGF0YS5kb21Qcm9wcyA9IGRhdGEuZG9tUHJvcHMgfHwge31cbiAgICAgIGRhdGEuZG9tUHJvcHMuaWQgPSBwcm9wcy5pZFxuICAgIH1cblxuICAgIHJldHVybiBoKFxuICAgICAgcHJvcHMudGFnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICdjb250YWluZXInLFxuICAgICAgICBjbGFzczogQXJyYXk8YW55Pih7XG4gICAgICAgICAgJ2NvbnRhaW5lci0tZmx1aWQnOiBwcm9wcy5mbHVpZCxcbiAgICAgICAgfSkuY29uY2F0KGNsYXNzZXMgfHwgW10pLFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlblxuICAgIClcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZJbnB1dCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgUmlwcGxlYWJsZSBmcm9tICcuLi9yaXBwbGVhYmxlJ1xuaW1wb3J0IENvbXBhcmFibGUgZnJvbSAnLi4vY29tcGFyYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmVudCAoZTogRXZlbnQpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIFZJbnB1dCxcbiAgUmlwcGxlYWJsZSxcbiAgQ29tcGFyYWJsZVxuKS5leHRlbmQoe1xuICBuYW1lOiAnc2VsZWN0YWJsZScsXG5cbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnaW5wdXRWYWx1ZScsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgaWQ6IFN0cmluZyxcbiAgICBpbnB1dFZhbHVlOiBudWxsIGFzIGFueSxcbiAgICBmYWxzZVZhbHVlOiBudWxsIGFzIGFueSxcbiAgICB0cnVlVmFsdWU6IG51bGwgYXMgYW55LFxuICAgIG11bHRpcGxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0NvbG9yOiB0aGlzLmlucHV0VmFsdWUsXG4gICAgICBsYXp5VmFsdWU6IHRoaXMuaW5wdXRWYWx1ZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZENvbG9yICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAodGhpcy5jb2xvcikgcmV0dXJuIHRoaXMuY29sb3JcbiAgICAgIGlmICh0aGlzLmlzRGFyayAmJiAhdGhpcy5hcHBJc0RhcmspIHJldHVybiAnd2hpdGUnXG4gICAgICByZXR1cm4gJ3ByaW1hcnknXG4gICAgfSxcbiAgICBpc011bHRpcGxlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlID09PSB0cnVlIHx8ICh0aGlzLm11bHRpcGxlID09PSBudWxsICYmIEFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKSlcbiAgICB9LFxuICAgIGlzQWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmludGVybmFsVmFsdWVcblxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSByZXR1cm4gZmFsc2VcblxuICAgICAgICByZXR1cm4gaW5wdXQuc29tZShpdGVtID0+IHRoaXMudmFsdWVDb21wYXJhdG9yKGl0ZW0sIHZhbHVlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudHJ1ZVZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy5mYWxzZVZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgPyB0aGlzLnZhbHVlQ29tcGFyYXRvcih2YWx1ZSwgaW5wdXQpXG4gICAgICAgICAgOiBCb29sZWFuKGlucHV0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZUNvbXBhcmF0b3IoaW5wdXQsIHRoaXMudHJ1ZVZhbHVlKVxuICAgIH0sXG4gICAgaXNEaXJ0eSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZVxuICAgIH0sXG4gICAgcmlwcGxlU3RhdGUgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy52YWxpZGF0aW9uU3RhdGVcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiB0aGlzLnZhbGlkYXRpb25TdGF0ZVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnB1dFZhbHVlICh2YWwpIHtcbiAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgICB0aGlzLmhhc0NvbG9yID0gdmFsXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgY29uc3QgbGFiZWwgPSBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbkxhYmVsLmNhbGwodGhpcylcblxuICAgICAgaWYgKCFsYWJlbCkgcmV0dXJuIGxhYmVsXG5cbiAgICAgIGxhYmVsIS5kYXRhIS5vbiA9IHtcbiAgICAgICAgLy8gTGFiZWwgc2hvdWxkbid0IGNhdXNlIHRoZSBpbnB1dCB0byBmb2N1c1xuICAgICAgICBjbGljazogcHJldmVudCxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxhYmVsXG4gICAgfSxcbiAgICBnZW5JbnB1dCAodHlwZTogc3RyaW5nLCBhdHRyczogb2JqZWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIGF0dHJzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAnYXJpYS1jaGVja2VkJzogdGhpcy5pc0FjdGl2ZS50b1N0cmluZygpLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgaWQ6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICByb2xlOiB0eXBlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgIH0sIGF0dHJzKSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBjaGVja2VkOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICAgIGNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICBmb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgIGtleWRvd246IHRoaXMub25LZXlkb3duLFxuICAgICAgICAgIGNsaWNrOiBwcmV2ZW50LFxuICAgICAgICB9LFxuICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25CbHVyICgpIHtcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2VcbiAgICB9LFxuICAgIG9uQ2xpY2sgKGU6IEV2ZW50KSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9LFxuICAgIG9uQ2hhbmdlICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0ludGVyYWN0aXZlKSByZXR1cm5cblxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICBsZXQgaW5wdXQgPSB0aGlzLmludGVybmFsVmFsdWVcblxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgICAgaW5wdXQgPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gaW5wdXQubGVuZ3RoXG5cbiAgICAgICAgaW5wdXQgPSBpbnB1dC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gIXRoaXMudmFsdWVDb21wYXJhdG9yKGl0ZW0sIHZhbHVlKSlcblxuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgICBpbnB1dC5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJ1ZVZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5mYWxzZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5wdXQgPSB0aGlzLnZhbHVlQ29tcGFyYXRvcihpbnB1dCwgdGhpcy50cnVlVmFsdWUpID8gdGhpcy5mYWxzZVZhbHVlIDogdGhpcy50cnVlVmFsdWVcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgaW5wdXQgPSB0aGlzLnZhbHVlQ29tcGFyYXRvcihpbnB1dCwgdmFsdWUpID8gbnVsbCA6IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dCA9ICFpbnB1dFxuICAgICAgfVxuXG4gICAgICB0aGlzLnZhbGlkYXRlKHRydWUsIGlucHV0KVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gaW5wdXRcbiAgICAgIHRoaXMuaGFzQ29sb3IgPSBpbnB1dFxuICAgIH0sXG4gICAgb25Gb2N1cyAoKSB7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWVcbiAgICB9LFxuICAgIC8qKiBAYWJzdHJhY3QgKi9cbiAgICBvbktleWRvd24gKGU6IEV2ZW50KSB7fSxcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZCYWRnZS5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24vVkljb24nXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgVHJhbnNpdGlvbmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RyYW5zaXRpb25hYmxlJ1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBQb3NpdGlvbmFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3Bvc2l0aW9uYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHtcbiAgY29udmVydFRvVW5pdCxcbiAgZ2V0U2xvdCxcbn0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFsnbGVmdCcsICdib3R0b20nXSksXG4gIFRoZW1lYWJsZSxcbiAgVG9nZ2xlYWJsZSxcbiAgVHJhbnNpdGlvbmFibGUsXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi1iYWRnZScsXG5cbiAgcHJvcHM6IHtcbiAgICBhdmF0YXI6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgZG90OiBCb29sZWFuLFxuICAgIGxhYmVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHZ1ZXRpZnkuYmFkZ2UnLFxuICAgIH0sXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGlubGluZTogQm9vbGVhbixcbiAgICBvZmZzZXRYOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIG9mZnNldFk6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgb3ZlcmxhcDogQm9vbGVhbixcbiAgICB0aWxlOiBCb29sZWFuLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzY2FsZS1yb3RhdGUtdHJhbnNpdGlvbicsXG4gICAgfSxcbiAgICB2YWx1ZTogeyBkZWZhdWx0OiB0cnVlIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtYmFkZ2UtLWF2YXRhcic6IHRoaXMuYXZhdGFyLFxuICAgICAgICAndi1iYWRnZS0tYm9yZGVyZWQnOiB0aGlzLmJvcmRlcmVkLFxuICAgICAgICAndi1iYWRnZS0tYm90dG9tJzogdGhpcy5ib3R0b20sXG4gICAgICAgICd2LWJhZGdlLS1kb3QnOiB0aGlzLmRvdCxcbiAgICAgICAgJ3YtYmFkZ2UtLWljb24nOiB0aGlzLmljb24gIT0gbnVsbCxcbiAgICAgICAgJ3YtYmFkZ2UtLWlubGluZSc6IHRoaXMuaW5saW5lLFxuICAgICAgICAndi1iYWRnZS0tbGVmdCc6IHRoaXMubGVmdCxcbiAgICAgICAgJ3YtYmFkZ2UtLW92ZXJsYXAnOiB0aGlzLm92ZXJsYXAsXG4gICAgICAgICd2LWJhZGdlLS10aWxlJzogdGhpcy50aWxlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQm90dG9tICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID8gJ2F1dG8nIDogdGhpcy5jb21wdXRlZFlPZmZzZXRcbiAgICB9LFxuICAgIGNvbXB1dGVkTGVmdCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmlzUnRsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQgPyB0aGlzLmNvbXB1dGVkWE9mZnNldCA6ICdhdXRvJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5sZWZ0ID8gJ2F1dG8nIDogdGhpcy5jb21wdXRlZFhPZmZzZXRcbiAgICB9LFxuICAgIGNvbXB1dGVkUmlnaHQgKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5pc1J0bCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0ID8gJ2F1dG8nIDogdGhpcy5jb21wdXRlZFhPZmZzZXRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICF0aGlzLmxlZnQgPyAnYXV0bycgOiB0aGlzLmNvbXB1dGVkWE9mZnNldFxuICAgIH0sXG4gICAgY29tcHV0ZWRUb3AgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5ib3R0b20gPyB0aGlzLmNvbXB1dGVkWU9mZnNldCA6ICdhdXRvJ1xuICAgIH0sXG4gICAgY29tcHV0ZWRYT2Zmc2V0ICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY1Bvc2l0aW9uKHRoaXMub2Zmc2V0WClcbiAgICB9LFxuICAgIGNvbXB1dGVkWU9mZnNldCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNQb3NpdGlvbih0aGlzLm9mZnNldFkpXG4gICAgfSxcbiAgICBpc1J0bCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5ydGxcbiAgICB9LFxuICAgIC8vIERlZmF1bHQgZmFsbGJhY2sgaWYgb2Zmc2V0WFxuICAgIC8vIG9yIG9mZnNldFkgYXJlIHVuZGVmaW5lZC5cbiAgICBvZmZzZXQgKCk6IG51bWJlciB7XG4gICAgICBpZiAodGhpcy5vdmVybGFwKSByZXR1cm4gdGhpcy5kb3QgPyA4IDogMTJcbiAgICAgIHJldHVybiB0aGlzLmRvdCA/IDIgOiA0XG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBpZiAodGhpcy5pbmxpbmUpIHJldHVybiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBib3R0b206IHRoaXMuY29tcHV0ZWRCb3R0b20sXG4gICAgICAgIGxlZnQ6IHRoaXMuY29tcHV0ZWRMZWZ0LFxuICAgICAgICByaWdodDogdGhpcy5jb21wdXRlZFJpZ2h0LFxuICAgICAgICB0b3A6IHRoaXMuY29tcHV0ZWRUb3AsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FsY1Bvc2l0aW9uIChvZmZzZXQ6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gICAgICByZXR1cm4gYGNhbGMoMTAwJSAtICR7Y29udmVydFRvVW5pdChvZmZzZXQgfHwgdGhpcy5vZmZzZXQpfSlgXG4gICAgfSxcbiAgICBnZW5CYWRnZSAoKSB7XG4gICAgICBjb25zdCBsYW5nID0gdGhpcy4kdnVldGlmeS5sYW5nXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuJGF0dHJzWydhcmlhLWxhYmVsJ10gfHwgbGFuZy50KHRoaXMubGFiZWwpXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1iYWRnZV9fYmFkZ2UnLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgJ2FyaWEtYXRvbWljJzogdGhpcy4kYXR0cnNbJ2FyaWEtYXRvbWljJ10gfHwgJ3RydWUnLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogbGFiZWwsXG4gICAgICAgICAgJ2FyaWEtbGl2ZSc6IHRoaXMuJGF0dHJzWydhcmlhLWxpdmUnXSB8fCAncG9saXRlJyxcbiAgICAgICAgICB0aXRsZTogdGhpcy4kYXR0cnMudGl0bGUsXG4gICAgICAgICAgcm9sZTogdGhpcy4kYXR0cnMucm9sZSB8fCAnc3RhdHVzJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAnc2hvdycsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH1dLFxuICAgICAgfSlcblxuICAgICAgY29uc3QgYmFkZ2UgPSB0aGlzLiRjcmVhdGVFbGVtZW50KCdzcGFuJywgZGF0YSwgW3RoaXMuZ2VuQmFkZ2VDb250ZW50KCldKVxuXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbikgcmV0dXJuIGJhZGdlXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgICAgICBvcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtiYWRnZV0pXG4gICAgfSxcbiAgICBnZW5CYWRnZUNvbnRlbnQgKCkge1xuICAgICAgLy8gRG90IHByb3Agc2hvd3Mgbm8gY29udGVudFxuICAgICAgaWYgKHRoaXMuZG90KSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90KHRoaXMsICdiYWRnZScpXG5cbiAgICAgIGlmIChzbG90KSByZXR1cm4gc2xvdFxuICAgICAgaWYgKHRoaXMuY29udGVudCkgcmV0dXJuIFN0cmluZyh0aGlzLmNvbnRlbnQpXG4gICAgICBpZiAodGhpcy5pY29uKSByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwgdGhpcy5pY29uKVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSxcbiAgICBnZW5CYWRnZVdyYXBwZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1iYWRnZV9fd3JhcHBlcicsXG4gICAgICB9LCBbdGhpcy5nZW5CYWRnZSgpXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBiYWRnZSA9IFt0aGlzLmdlbkJhZGdlV3JhcHBlcigpXVxuICAgIGNvbnN0IGNoaWxkcmVuID0gW2dldFNsb3QodGhpcyldXG4gICAgY29uc3Qge1xuICAgICAgJ2FyaWEtYXRvbWljJzogX3gsXG4gICAgICAnYXJpYS1sYWJlbCc6IF95LFxuICAgICAgJ2FyaWEtbGl2ZSc6IF96LFxuICAgICAgcm9sZSxcbiAgICAgIHRpdGxlLFxuICAgICAgLi4uYXR0cnNcbiAgICB9ID0gdGhpcy4kYXR0cnNcblxuICAgIGlmICh0aGlzLmlubGluZSAmJiB0aGlzLmxlZnQpIGNoaWxkcmVuLnVuc2hpZnQoYmFkZ2UpXG4gICAgZWxzZSBjaGlsZHJlbi5wdXNoKGJhZGdlKVxuXG4gICAgcmV0dXJuIGgoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtYmFkZ2UnLFxuICAgICAgYXR0cnMsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgIH0sIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsImltcG9ydCAnLi9WR3JpZC5zYXNzJ1xuXG5pbXBvcnQgVnVlLCB7IFByb3BPcHRpb25zIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcbmltcG9ydCB7IHVwcGVyRmlyc3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIG5vIHhzXG5jb25zdCBicmVha3BvaW50cyA9IFsnc20nLCAnbWQnLCAnbGcnLCAneGwnXVxuXG5jb25zdCBBTElHTk1FTlQgPSBbJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInXVxuXG5mdW5jdGlvbiBtYWtlUHJvcHMgKHByZWZpeDogc3RyaW5nLCBkZWY6ICgpID0+IFByb3BPcHRpb25zKSB7XG4gIHJldHVybiBicmVha3BvaW50cy5yZWR1Y2UoKHByb3BzLCB2YWwpID0+IHtcbiAgICBwcm9wc1twcmVmaXggKyB1cHBlckZpcnN0KHZhbCldID0gZGVmKClcbiAgICByZXR1cm4gcHJvcHNcbiAgfSwge30gYXMgRGljdGlvbmFyeTxQcm9wT3B0aW9ucz4pXG59XG5cbmNvbnN0IGFsaWduVmFsaWRhdG9yID0gKHN0cjogYW55KSA9PiBbLi4uQUxJR05NRU5ULCAnYmFzZWxpbmUnLCAnc3RyZXRjaCddLmluY2x1ZGVzKHN0cilcbmNvbnN0IGFsaWduUHJvcHMgPSBtYWtlUHJvcHMoJ2FsaWduJywgKCkgPT4gKHtcbiAgdHlwZTogU3RyaW5nLFxuICBkZWZhdWx0OiBudWxsLFxuICB2YWxpZGF0b3I6IGFsaWduVmFsaWRhdG9yLFxufSkpXG5cbmNvbnN0IGp1c3RpZnlWYWxpZGF0b3IgPSAoc3RyOiBhbnkpID0+IFsuLi5BTElHTk1FTlQsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCddLmluY2x1ZGVzKHN0cilcbmNvbnN0IGp1c3RpZnlQcm9wcyA9IG1ha2VQcm9wcygnanVzdGlmeScsICgpID0+ICh7XG4gIHR5cGU6IFN0cmluZyxcbiAgZGVmYXVsdDogbnVsbCxcbiAgdmFsaWRhdG9yOiBqdXN0aWZ5VmFsaWRhdG9yLFxufSkpXG5cbmNvbnN0IGFsaWduQ29udGVudFZhbGlkYXRvciA9IChzdHI6IGFueSkgPT4gWy4uLkFMSUdOTUVOVCwgJ3NwYWNlLWJldHdlZW4nLCAnc3BhY2UtYXJvdW5kJywgJ3N0cmV0Y2gnXS5pbmNsdWRlcyhzdHIpXG5jb25zdCBhbGlnbkNvbnRlbnRQcm9wcyA9IG1ha2VQcm9wcygnYWxpZ25Db250ZW50JywgKCkgPT4gKHtcbiAgdHlwZTogU3RyaW5nLFxuICBkZWZhdWx0OiBudWxsLFxuICB2YWxpZGF0b3I6IGFsaWduQ29udGVudFZhbGlkYXRvcixcbn0pKVxuXG5jb25zdCBwcm9wTWFwID0ge1xuICBhbGlnbjogT2JqZWN0LmtleXMoYWxpZ25Qcm9wcyksXG4gIGp1c3RpZnk6IE9iamVjdC5rZXlzKGp1c3RpZnlQcm9wcyksXG4gIGFsaWduQ29udGVudDogT2JqZWN0LmtleXMoYWxpZ25Db250ZW50UHJvcHMpLFxufVxuXG5jb25zdCBjbGFzc01hcCA9IHtcbiAgYWxpZ246ICdhbGlnbicsXG4gIGp1c3RpZnk6ICdqdXN0aWZ5JyxcbiAgYWxpZ25Db250ZW50OiAnYWxpZ24tY29udGVudCcsXG59XG5cbmZ1bmN0aW9uIGJyZWFrcG9pbnRDbGFzcyAodHlwZToga2V5b2YgdHlwZW9mIHByb3BNYXAsIHByb3A6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcbiAgbGV0IGNsYXNzTmFtZSA9IGNsYXNzTWFwW3R5cGVdXG4gIGlmICh2YWwgPT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBpZiAocHJvcCkge1xuICAgIC8vIGFsaWduU20gLT4gU21cbiAgICBjb25zdCBicmVha3BvaW50ID0gcHJvcC5yZXBsYWNlKHR5cGUsICcnKVxuICAgIGNsYXNzTmFtZSArPSBgLSR7YnJlYWtwb2ludH1gXG4gIH1cbiAgLy8gLmFsaWduLWl0ZW1zLXNtLWNlbnRlclxuICBjbGFzc05hbWUgKz0gYC0ke3ZhbH1gXG4gIHJldHVybiBjbGFzc05hbWUudG9Mb3dlckNhc2UoKVxufVxuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBhbnlbXT4oKVxuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytcm93JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgIH0sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgbm9HdXR0ZXJzOiBCb29sZWFuLFxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBhbGlnblZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmFsaWduUHJvcHMsXG4gICAganVzdGlmeToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjoganVzdGlmeVZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmp1c3RpZnlQcm9wcyxcbiAgICBhbGlnbkNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGFsaWduQ29udGVudFZhbGlkYXRvcixcbiAgICB9LFxuICAgIC4uLmFsaWduQ29udGVudFByb3BzLFxuICB9LFxuICByZW5kZXIgKGgsIHsgcHJvcHMsIGRhdGEsIGNoaWxkcmVuIH0pIHtcbiAgICAvLyBTdXBlci1mYXN0IG1lbW9pemF0aW9uIGJhc2VkIG9uIHByb3BzLCA1eCBmYXN0ZXIgdGhhbiBKU09OLnN0cmluZ2lmeVxuICAgIGxldCBjYWNoZUtleSA9ICcnXG4gICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgICBjYWNoZUtleSArPSBTdHJpbmcoKHByb3BzIGFzIGFueSlbcHJvcF0pXG4gICAgfVxuICAgIGxldCBjbGFzc0xpc3QgPSBjYWNoZS5nZXQoY2FjaGVLZXkpXG5cbiAgICBpZiAoIWNsYXNzTGlzdCkge1xuICAgICAgY2xhc3NMaXN0ID0gW11cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBgYWxpZ25gLCBganVzdGlmeWAsIGBhbGlnbkNvbnRlbnRgIGJyZWFrcG9pbnQgcHJvcHNcbiAgICAgIGxldCB0eXBlOiBrZXlvZiB0eXBlb2YgcHJvcE1hcFxuICAgICAgZm9yICh0eXBlIGluIHByb3BNYXApIHtcbiAgICAgICAgcHJvcE1hcFt0eXBlXS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSAocHJvcHMgYXMgYW55KVtwcm9wXVxuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGJyZWFrcG9pbnRDbGFzcyh0eXBlLCBwcm9wLCB2YWx1ZSlcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBjbGFzc0xpc3QhLnB1c2goY2xhc3NOYW1lKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjbGFzc0xpc3QucHVzaCh7XG4gICAgICAgICduby1ndXR0ZXJzJzogcHJvcHMubm9HdXR0ZXJzLFxuICAgICAgICAncm93LS1kZW5zZSc6IHByb3BzLmRlbnNlLFxuICAgICAgICBbYGFsaWduLSR7cHJvcHMuYWxpZ259YF06IHByb3BzLmFsaWduLFxuICAgICAgICBbYGp1c3RpZnktJHtwcm9wcy5qdXN0aWZ5fWBdOiBwcm9wcy5qdXN0aWZ5LFxuICAgICAgICBbYGFsaWduLWNvbnRlbnQtJHtwcm9wcy5hbGlnbkNvbnRlbnR9YF06IHByb3BzLmFsaWduQ29udGVudCxcbiAgICAgIH0pXG5cbiAgICAgIGNhY2hlLnNldChjYWNoZUtleSwgY2xhc3NMaXN0KVxuICAgIH1cblxuICAgIHJldHVybiBoKFxuICAgICAgcHJvcHMudGFnLFxuICAgICAgbWVyZ2VEYXRhKGRhdGEsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICdyb3cnLFxuICAgICAgICBjbGFzczogY2xhc3NMaXN0LFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlblxuICAgIClcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WVGV4dGFyZWEuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZUZXh0RmllbGQgZnJvbSAnLi4vVlRleHRGaWVsZC9WVGV4dEZpZWxkJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBWdWUge1xuICAkcmVmczoge1xuICAgIGlucHV0OiBIVE1MVGV4dEFyZWFFbGVtZW50XG4gIH1cbn1cblxuY29uc3QgYmFzZU1peGlucyA9IG1peGluczxvcHRpb25zICZcbiAgSW5zdGFuY2VUeXBlPHR5cGVvZiBWVGV4dEZpZWxkPlxuPihcbiAgVlRleHRGaWVsZFxuKVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi10ZXh0YXJlYScsXG5cbiAgcHJvcHM6IHtcbiAgICBhdXRvR3JvdzogQm9vbGVhbixcbiAgICBub1Jlc2l6ZTogQm9vbGVhbixcbiAgICByb3dIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAyNCxcbiAgICAgIHZhbGlkYXRvcjogKHY6IGFueSkgPT4gIWlzTmFOKHBhcnNlRmxvYXQodikpLFxuICAgIH0sXG4gICAgcm93czoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDUsXG4gICAgICB2YWxpZGF0b3I6ICh2OiBhbnkpID0+ICFpc05hTihwYXJzZUludCh2LCAxMCkpLFxuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtdGV4dGFyZWEnOiB0cnVlLFxuICAgICAgICAndi10ZXh0YXJlYS0tYXV0by1ncm93JzogdGhpcy5hdXRvR3JvdyxcbiAgICAgICAgJ3YtdGV4dGFyZWEtLW5vLXJlc2l6ZSc6IHRoaXMubm9SZXNpemVIYW5kbGUsXG4gICAgICAgIC4uLlZUZXh0RmllbGQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICB9XG4gICAgfSxcbiAgICBub1Jlc2l6ZUhhbmRsZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5ub1Jlc2l6ZSB8fCB0aGlzLmF1dG9Hcm93XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGxhenlWYWx1ZSAoKSB7XG4gICAgICB0aGlzLmF1dG9Hcm93ICYmIHRoaXMuJG5leHRUaWNrKHRoaXMuY2FsY3VsYXRlSW5wdXRIZWlnaHQpXG4gICAgfSxcbiAgICByb3dIZWlnaHQgKCkge1xuICAgICAgdGhpcy5hdXRvR3JvdyAmJiB0aGlzLiRuZXh0VGljayh0aGlzLmNhbGN1bGF0ZUlucHV0SGVpZ2h0KVxuICAgIH0sXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmF1dG9Hcm93ICYmIHRoaXMuY2FsY3VsYXRlSW5wdXRIZWlnaHQoKVxuICAgIH0sIDApXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhbGN1bGF0ZUlucHV0SGVpZ2h0ICgpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuXG5cbiAgICAgIGlucHV0LnN0eWxlLmhlaWdodCA9ICcwJ1xuICAgICAgY29uc3QgaGVpZ2h0ID0gaW5wdXQuc2Nyb2xsSGVpZ2h0XG4gICAgICBjb25zdCBtaW5IZWlnaHQgPSBwYXJzZUludCh0aGlzLnJvd3MsIDEwKSAqIHBhcnNlRmxvYXQodGhpcy5yb3dIZWlnaHQpXG4gICAgICAvLyBUaGlzIGhhcyB0byBiZSBkb25lIEFTQVAsIHdhaXRpbmcgZm9yIFZ1ZVxuICAgICAgLy8gdG8gdXBkYXRlIHRoZSBET00gY2F1c2VzIHVnbHkgbGF5b3V0IGp1bXBpbmdcbiAgICAgIGlucHV0LnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgaGVpZ2h0KSArICdweCdcbiAgICB9LFxuICAgIGdlbklucHV0ICgpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gVlRleHRGaWVsZC5vcHRpb25zLm1ldGhvZHMuZ2VuSW5wdXQuY2FsbCh0aGlzKVxuXG4gICAgICBpbnB1dC50YWcgPSAndGV4dGFyZWEnXG4gICAgICBkZWxldGUgaW5wdXQuZGF0YSEuYXR0cnMhLnR5cGVcbiAgICAgIGlucHV0LmRhdGEhLmF0dHJzIS5yb3dzID0gdGhpcy5yb3dzXG5cbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH0sXG4gICAgb25JbnB1dCAoZTogRXZlbnQpIHtcbiAgICAgIFZUZXh0RmllbGQub3B0aW9ucy5tZXRob2RzLm9uSW5wdXQuY2FsbCh0aGlzLCBlKVxuICAgICAgdGhpcy5hdXRvR3JvdyAmJiB0aGlzLmNhbGN1bGF0ZUlucHV0SGVpZ2h0KClcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgLy8gUHJldmVudHMgY2xvc2luZyBvZiBhXG4gICAgICAvLyBkaWFsb2cgd2hlbiBwcmVzc2luZ1xuICAgICAgLy8gZW50ZXJcbiAgICAgIGlmICh0aGlzLmlzRm9jdXNlZCAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH1cblxuICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBNaXhpbnNcbmltcG9ydCB7IGZhY3RvcnkgYXMgR3JvdXBhYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9ncm91cGFibGUnXG5pbXBvcnQgUm91dGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3JvdXRhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4vLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgUm91dGFibGUsXG4gIC8vIE11c3QgYmUgYWZ0ZXIgcm91dGFibGVcbiAgLy8gdG8gb3ZlcndyaXRlIGFjdGl2ZUNsYXNzXG4gIEdyb3VwYWJsZUZhY3RvcnkoJ3RhYnNCYXInKSxcbiAgVGhlbWVhYmxlXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgRXh0cmFjdFZ1ZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkZWw6IEhUTUxFbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKFxuICAvKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi10YWInLFxuXG4gIHByb3BzOiB7XG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHByb3h5Q2xhc3M6ICd2LXRhYi0tYWN0aXZlJyxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtdGFiJzogdHJ1ZSxcbiAgICAgICAgLi4uUm91dGFibGUub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRhYi0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAuLi50aGlzLmdyb3VwQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHZhbHVlICgpOiBhbnkge1xuICAgICAgbGV0IHRvID0gdGhpcy50byB8fCB0aGlzLmhyZWYgfHwgJydcblxuICAgICAgaWYgKHRoaXMuJHJvdXRlciAmJlxuICAgICAgICB0aGlzLnRvID09PSBPYmplY3QodGhpcy50bylcbiAgICAgICkge1xuICAgICAgICBjb25zdCByZXNvbHZlID0gdGhpcy4kcm91dGVyLnJlc29sdmUoXG4gICAgICAgICAgdGhpcy50byxcbiAgICAgICAgICB0aGlzLiRyb3V0ZSxcbiAgICAgICAgICB0aGlzLmFwcGVuZFxuICAgICAgICApXG5cbiAgICAgICAgdG8gPSByZXNvbHZlLmhyZWZcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvLnJlcGxhY2UoJyMnLCAnJylcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMub25Sb3V0ZUNoYW5nZSgpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrIChlOiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgLy8gSWYgdXNlciBwcm92aWRlcyBhblxuICAgICAgLy8gYWN0dWFsIGxpbmssIGRvIG5vdFxuICAgICAgLy8gcHJldmVudCBkZWZhdWx0XG4gICAgICBpZiAodGhpcy5ocmVmICYmXG4gICAgICAgIHRoaXMuaHJlZi5pbmRleE9mKCcjJykgPiAtMVxuICAgICAgKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgaWYgKGUuZGV0YWlsKSB0aGlzLiRlbC5ibHVyKClcblxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgICB0aGlzLnRvIHx8IHRoaXMudG9nZ2xlKClcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhZywgZGF0YSB9ID0gdGhpcy5nZW5lcmF0ZVJvdXRlTGluaygpXG5cbiAgICBkYXRhLmF0dHJzID0ge1xuICAgICAgLi4uZGF0YS5hdHRycyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogU3RyaW5nKHRoaXMuaXNBY3RpdmUpLFxuICAgICAgcm9sZTogJ3RhYicsXG4gICAgICB0YWJpbmRleDogMCxcbiAgICB9XG4gICAgZGF0YS5vbiA9IHtcbiAgICAgIC4uLmRhdGEub24sXG4gICAgICBrZXlkb3duOiAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lbnRlcikgdGhpcy5jbGljayhlKVxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2tleWRvd24nLCBlKVxuICAgICAgfSxcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIGRhdGEsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlNsaWRlR3JvdXAuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuaW1wb3J0IHsgVkZhZGVUcmFuc2l0aW9uIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCB7IEJhc2VJdGVtR3JvdXAgfSBmcm9tICcuLi9WSXRlbUdyb3VwL1ZJdGVtR3JvdXAnXG5cbi8vIE1peGluc1xuaW1wb3J0IE1vYmlsZSBmcm9tICcuLi8uLi9taXhpbnMvbW9iaWxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgUmVzaXplIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplJ1xuaW1wb3J0IFRvdWNoIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlLCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5pbnRlcmZhY2UgVG91Y2hFdmVudCB7XG4gIHRvdWNoc3RhcnRYOiBudW1iZXJcbiAgdG91Y2htb3ZlWDogbnVtYmVyXG4gIHN0b3BQcm9wYWdhdGlvbjogRnVuY3Rpb25cbn1cblxuaW50ZXJmYWNlIFdpZHRocyB7XG4gIGNvbnRlbnQ6IG51bWJlclxuICB3cmFwcGVyOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBWdWUge1xuICAkcmVmczoge1xuICAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50XG4gICAgd3JhcHBlcjogSFRNTEVsZW1lbnRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQmFzZVNsaWRlR3JvdXAgPSBtaXhpbnM8b3B0aW9ucyAmXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbiAgRXh0cmFjdFZ1ZTxbXG4gICAgdHlwZW9mIEJhc2VJdGVtR3JvdXAsXG4gICAgdHlwZW9mIE1vYmlsZSxcbiAgXT5cbi8qIGVzbGludC1lbmFibGUgaW5kZW50ICovXG4+KFxuICBCYXNlSXRlbUdyb3VwLFxuICBNb2JpbGUsXG4gIC8qIEB2dWUvY29tcG9uZW50ICovXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICdiYXNlLXNsaWRlLWdyb3VwJyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgUmVzaXplLFxuICAgIFRvdWNoLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd2LXNsaWRlLWl0ZW0tLWFjdGl2ZScsXG4gICAgfSxcbiAgICBjZW50ZXJBY3RpdmU6IEJvb2xlYW4sXG4gICAgbmV4dEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckbmV4dCcsXG4gICAgfSxcbiAgICBwcmV2SWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRwcmV2JyxcbiAgICB9LFxuICAgIHNob3dBcnJvd3M6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IChcbiAgICAgICAgdHlwZW9mIHYgPT09ICdib29sZWFuJyB8fCBbXG4gICAgICAgICAgJ2Fsd2F5cycsXG4gICAgICAgICAgJ2Rlc2t0b3AnLFxuICAgICAgICAgICdtb2JpbGUnLFxuICAgICAgICBdLmluY2x1ZGVzKHYpXG4gICAgICApLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBpbnRlcm5hbEl0ZW1zTGVuZ3RoOiAwLFxuICAgIGlzT3ZlcmZsb3dpbmc6IGZhbHNlLFxuICAgIHJlc2l6ZVRpbWVvdXQ6IDAsXG4gICAgc3RhcnRYOiAwLFxuICAgIHNjcm9sbE9mZnNldDogMCxcbiAgICB3aWR0aHM6IHtcbiAgICAgIGNvbnRlbnQ6IDAsXG4gICAgICB3cmFwcGVyOiAwLFxuICAgIH0sXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgX19jYWNoZWROZXh0ICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5UcmFuc2l0aW9uKCduZXh0JylcbiAgICB9LFxuICAgIF9fY2FjaGVkUHJldiAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuVHJhbnNpdGlvbigncHJldicpXG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uQmFzZUl0ZW1Hcm91cC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3Ytc2xpZGUtZ3JvdXAnOiB0cnVlLFxuICAgICAgICAndi1zbGlkZS1ncm91cC0taGFzLWFmZml4ZXMnOiB0aGlzLmhhc0FmZml4ZXMsXG4gICAgICAgICd2LXNsaWRlLWdyb3VwLS1pcy1vdmVyZmxvd2luZyc6IHRoaXMuaXNPdmVyZmxvd2luZyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc0FmZml4ZXMgKCk6IEJvb2xlYW4ge1xuICAgICAgc3dpdGNoICh0aGlzLnNob3dBcnJvd3MpIHtcbiAgICAgICAgLy8gQWx3YXlzIHNob3cgYXJyb3dzIG9uIGRlc2t0b3AgJiBtb2JpbGVcbiAgICAgICAgY2FzZSAnYWx3YXlzJzogcmV0dXJuIHRydWVcblxuICAgICAgICAvLyBBbHdheXMgc2hvdyBhcnJvd3Mgb24gZGVza3RvcFxuICAgICAgICBjYXNlICdkZXNrdG9wJzogcmV0dXJuICF0aGlzLmlzTW9iaWxlXG5cbiAgICAgICAgLy8gU2hvdyBhcnJvd3Mgb24gbW9iaWxlIHdoZW4gb3ZlcmZsb3dpbmcuXG4gICAgICAgIC8vIFRoaXMgbWF0Y2hlcyB0aGUgZGVmYXVsdCAyLjIgYmVoYXZpb3JcbiAgICAgICAgY2FzZSB0cnVlOiByZXR1cm4gdGhpcy5pc092ZXJmbG93aW5nXG5cbiAgICAgICAgLy8gQWx3YXlzIHNob3cgb24gbW9iaWxlXG4gICAgICAgIGNhc2UgJ21vYmlsZSc6IHJldHVybiAoXG4gICAgICAgICAgdGhpcy5pc01vYmlsZSB8fFxuICAgICAgICAgIHRoaXMuaXNPdmVyZmxvd2luZ1xuICAgICAgICApXG5cbiAgICAgICAgLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9jb21wb25lbnRzL3RhYnMjc2Nyb2xsYWJsZS10YWJzXG4gICAgICAgIC8vIEFsd2F5cyBzaG93IGFycm93cyB3aGVuXG4gICAgICAgIC8vIG92ZXJmbG93ZWQgb24gZGVza3RvcFxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gKFxuICAgICAgICAgICF0aGlzLmlzTW9iaWxlICYmXG4gICAgICAgICAgdGhpcy5pc092ZXJmbG93aW5nXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc05leHQgKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKCF0aGlzLmhhc0FmZml4ZXMpIHJldHVybiBmYWxzZVxuXG4gICAgICBjb25zdCB7IGNvbnRlbnQsIHdyYXBwZXIgfSA9IHRoaXMud2lkdGhzXG5cbiAgICAgIC8vIENoZWNrIG9uZSBzY3JvbGwgYWhlYWQgdG8ga25vdyB0aGUgd2lkdGggb2YgcmlnaHQtbW9zdCBpdGVtXG4gICAgICByZXR1cm4gY29udGVudCA+IE1hdGguYWJzKHRoaXMuc2Nyb2xsT2Zmc2V0KSArIHdyYXBwZXJcbiAgICB9LFxuICAgIGhhc1ByZXYgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQWZmaXhlcyAmJiB0aGlzLnNjcm9sbE9mZnNldCAhPT0gMFxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpbnRlcm5hbFZhbHVlOiAnc2V0V2lkdGhzJyxcbiAgICAvLyBXaGVuIG92ZXJmbG93IGNoYW5nZXMsIHRoZSBhcnJvd3MgYWx0ZXJcbiAgICAvLyB0aGUgd2lkdGhzIG9mIHRoZSBjb250ZW50IGFuZCB3cmFwcGVyXG4gICAgLy8gYW5kIG5lZWQgdG8gYmUgcmVjYWxjdWxhdGVkXG4gICAgaXNPdmVyZmxvd2luZzogJ3NldFdpZHRocycsXG4gICAgc2Nyb2xsT2Zmc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey12YWx9cHgpYFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICB0aGlzLmludGVybmFsSXRlbXNMZW5ndGggPSAodGhpcy4kY2hpbGRyZW4gfHwgW10pLmxlbmd0aFxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIGlmICh0aGlzLmludGVybmFsSXRlbXNMZW5ndGggPT09ICh0aGlzLiRjaGlsZHJlbiB8fCBbXSkubGVuZ3RoKSByZXR1cm5cbiAgICB0aGlzLnNldFdpZHRocygpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8vIEFsd2F5cyBnZW5lcmF0ZSBuZXh0IGZvciBzY3JvbGxhYmxlIGhpbnRcbiAgICBnZW5OZXh0ICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuJHNjb3BlZFNsb3RzLm5leHRcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5uZXh0KHt9KVxuICAgICAgICA6IHRoaXMuJHNsb3RzLm5leHQgfHwgdGhpcy5fX2NhY2hlZE5leHRcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNsaWRlLWdyb3VwX19uZXh0JyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zbGlkZS1ncm91cF9fbmV4dC0tZGlzYWJsZWQnOiAhdGhpcy5oYXNOZXh0LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLm9uQWZmaXhDbGljaygnbmV4dCcpLFxuICAgICAgICB9LFxuICAgICAgICBrZXk6ICduZXh0JyxcbiAgICAgIH0sIFtzbG90XSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbGlkZS1ncm91cF9fY29udGVudCcsXG4gICAgICAgIHJlZjogJ2NvbnRlbnQnLFxuICAgICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgICB9LFxuICAgIGdlbkRhdGEgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICAgIG5hbWU6ICdyZXNpemUnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLm9uUmVzaXplLFxuICAgICAgICB9XSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbkljb24gKGxvY2F0aW9uOiAncHJldicgfCAnbmV4dCcpOiBWTm9kZSB8IG51bGwge1xuICAgICAgbGV0IGljb24gPSBsb2NhdGlvblxuXG4gICAgICBpZiAodGhpcy4kdnVldGlmeS5ydGwgJiYgbG9jYXRpb24gPT09ICdwcmV2Jykge1xuICAgICAgICBpY29uID0gJ25leHQnXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuJHZ1ZXRpZnkucnRsICYmIGxvY2F0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgaWNvbiA9ICdwcmV2J1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1cHBlckxvY2F0aW9uID0gYCR7bG9jYXRpb25bMF0udG9VcHBlckNhc2UoKX0ke2xvY2F0aW9uLnNsaWNlKDEpfWBcbiAgICAgIGNvbnN0IGhhc0FmZml4ID0gKHRoaXMgYXMgYW55KVtgaGFzJHt1cHBlckxvY2F0aW9ufWBdXG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuc2hvd0Fycm93cyAmJlxuICAgICAgICAhaGFzQWZmaXhcbiAgICAgICkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogIWhhc0FmZml4LFxuICAgICAgICB9LFxuICAgICAgfSwgKHRoaXMgYXMgYW55KVtgJHtpY29ufUljb25gXSlcbiAgICB9LFxuICAgIC8vIEFsd2F5cyBnZW5lcmF0ZSBwcmV2IGZvciBzY3JvbGxhYmxlIGhpbnRcbiAgICBnZW5QcmV2ICgpOiBWTm9kZSB8IG51bGwge1xuICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuJHNjb3BlZFNsb3RzLnByZXZcbiAgICAgICAgPyB0aGlzLiRzY29wZWRTbG90cy5wcmV2KHt9KVxuICAgICAgICA6IHRoaXMuJHNsb3RzLnByZXYgfHwgdGhpcy5fX2NhY2hlZFByZXZcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNsaWRlLWdyb3VwX19wcmV2JyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAndi1zbGlkZS1ncm91cF9fcHJldi0tZGlzYWJsZWQnOiAhdGhpcy5oYXNQcmV2LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLm9uQWZmaXhDbGljaygncHJldicpLFxuICAgICAgICB9LFxuICAgICAgICBrZXk6ICdwcmV2JyxcbiAgICAgIH0sIFtzbG90XSlcbiAgICB9LFxuICAgIGdlblRyYW5zaXRpb24gKGxvY2F0aW9uOiAncHJldicgfCAnbmV4dCcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZGYWRlVHJhbnNpdGlvbiwgW3RoaXMuZ2VuSWNvbihsb2NhdGlvbildKVxuICAgIH0sXG4gICAgZ2VuV3JhcHBlciAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNsaWRlLWdyb3VwX193cmFwcGVyJyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAndG91Y2gnLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBzdGFydDogKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMub3ZlcmZsb3dDaGVjayhlLCB0aGlzLm9uVG91Y2hTdGFydCksXG4gICAgICAgICAgICBtb3ZlOiAoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5vdmVyZmxvd0NoZWNrKGUsIHRoaXMub25Ub3VjaE1vdmUpLFxuICAgICAgICAgICAgZW5kOiAoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5vdmVyZmxvd0NoZWNrKGUsIHRoaXMub25Ub3VjaEVuZCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgICAgfSwgW3RoaXMuZ2VuQ29udGVudCgpXSlcbiAgICB9LFxuICAgIGNhbGN1bGF0ZU5ld09mZnNldCAoZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsIHdpZHRoczogV2lkdGhzLCBydGw6IGJvb2xlYW4sIGN1cnJlbnRTY3JvbGxPZmZzZXQ6IG51bWJlcikge1xuICAgICAgY29uc3Qgc2lnbiA9IHJ0bCA/IC0xIDogMVxuICAgICAgY29uc3QgbmV3QWJvc2x1dGVPZmZzZXQgPSBzaWduICogY3VycmVudFNjcm9sbE9mZnNldCArXG4gICAgICAgIChkaXJlY3Rpb24gPT09ICdwcmV2JyA/IC0xIDogMSkgKiB3aWR0aHMud3JhcHBlclxuXG4gICAgICByZXR1cm4gc2lnbiAqIE1hdGgubWF4KE1hdGgubWluKG5ld0Fib3NsdXRlT2Zmc2V0LCB3aWR0aHMuY29udGVudCAtIHdpZHRocy53cmFwcGVyKSwgMClcbiAgICB9LFxuICAgIG9uQWZmaXhDbGljayAobG9jYXRpb246ICdwcmV2JyB8ICduZXh0Jykge1xuICAgICAgdGhpcy4kZW1pdChgY2xpY2s6JHtsb2NhdGlvbn1gKVxuICAgICAgdGhpcy5zY3JvbGxUbyhsb2NhdGlvbilcbiAgICB9LFxuICAgIG9uUmVzaXplICgpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHJldHVyblxuXG4gICAgICB0aGlzLnNldFdpZHRocygpXG4gICAgfSxcbiAgICBvblRvdWNoU3RhcnQgKGU6IFRvdWNoRXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy4kcmVmc1xuXG4gICAgICB0aGlzLnN0YXJ0WCA9IHRoaXMuc2Nyb2xsT2Zmc2V0ICsgZS50b3VjaHN0YXJ0WCBhcyBudW1iZXJcblxuICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNpdGlvbicsICdub25lJylcbiAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpbGxDaGFuZ2UnLCAndHJhbnNmb3JtJylcbiAgICB9LFxuICAgIG9uVG91Y2hNb3ZlIChlOiBUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHRoaXMuc3RhcnRYIC0gZS50b3VjaG1vdmVYXG4gICAgfSxcbiAgICBvblRvdWNoRW5kICgpIHtcbiAgICAgIGNvbnN0IHsgY29udGVudCwgd3JhcHBlciB9ID0gdGhpcy4kcmVmc1xuICAgICAgY29uc3QgbWF4U2Nyb2xsT2Zmc2V0ID0gY29udGVudC5jbGllbnRXaWR0aCAtIHdyYXBwZXIuY2xpZW50V2lkdGhcblxuICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNpdGlvbicsIG51bGwpXG4gICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCd3aWxsQ2hhbmdlJywgbnVsbClcblxuICAgICAgaWYgKHRoaXMuJHZ1ZXRpZnkucnRsKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbE9mZnNldCA+IDAgfHwgIXRoaXMuaXNPdmVyZmxvd2luZykge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gMFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsT2Zmc2V0IDw9IC1tYXhTY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IC1tYXhTY3JvbGxPZmZzZXRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsT2Zmc2V0IDwgMCB8fCAhdGhpcy5pc092ZXJmbG93aW5nKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSAwXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGxPZmZzZXQgPj0gbWF4U2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSBtYXhTY3JvbGxPZmZzZXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb3ZlcmZsb3dDaGVjayAoZTogVG91Y2hFdmVudCwgZm46IChlOiBUb3VjaEV2ZW50KSA9PiB2b2lkKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLmlzT3ZlcmZsb3dpbmcgJiYgZm4oZSlcbiAgICB9LFxuICAgIHNjcm9sbEludG9WaWV3IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICgpIHtcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID09PSAwIHx8XG4gICAgICAgICghdGhpcy5jZW50ZXJBY3RpdmUgJiYgIXRoaXMuaXNPdmVyZmxvd2luZylcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IDBcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jZW50ZXJBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB0aGlzLmNhbGN1bGF0ZUNlbnRlcmVkT2Zmc2V0KFxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLiRlbCBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICB0aGlzLndpZHRocyxcbiAgICAgICAgICB0aGlzLiR2dWV0aWZ5LnJ0bFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHRoaXMuY2FsY3VsYXRlVXBkYXRlZE9mZnNldChcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS4kZWwgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgdGhpcy53aWR0aHMsXG4gICAgICAgICAgdGhpcy4kdnVldGlmeS5ydGwsXG4gICAgICAgICAgdGhpcy5zY3JvbGxPZmZzZXRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsY3VsYXRlVXBkYXRlZE9mZnNldCAoc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudCwgd2lkdGhzOiBXaWR0aHMsIHJ0bDogYm9vbGVhbiwgY3VycmVudFNjcm9sbE9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IGNsaWVudFdpZHRoID0gc2VsZWN0ZWRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gcnRsXG4gICAgICAgID8gKHdpZHRocy5jb250ZW50IC0gc2VsZWN0ZWRFbGVtZW50Lm9mZnNldExlZnQgLSBjbGllbnRXaWR0aClcbiAgICAgICAgOiBzZWxlY3RlZEVsZW1lbnQub2Zmc2V0TGVmdFxuXG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIGN1cnJlbnRTY3JvbGxPZmZzZXQgPSAtY3VycmVudFNjcm9sbE9mZnNldFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0b3RhbFdpZHRoID0gd2lkdGhzLndyYXBwZXIgKyBjdXJyZW50U2Nyb2xsT2Zmc2V0XG4gICAgICBjb25zdCBpdGVtT2Zmc2V0ID0gY2xpZW50V2lkdGggKyBvZmZzZXRMZWZ0XG4gICAgICBjb25zdCBhZGRpdGlvbmFsT2Zmc2V0ID0gY2xpZW50V2lkdGggKiAwLjRcblxuICAgICAgaWYgKG9mZnNldExlZnQgPD0gY3VycmVudFNjcm9sbE9mZnNldCkge1xuICAgICAgICBjdXJyZW50U2Nyb2xsT2Zmc2V0ID0gTWF0aC5tYXgob2Zmc2V0TGVmdCAtIGFkZGl0aW9uYWxPZmZzZXQsIDApXG4gICAgICB9IGVsc2UgaWYgKHRvdGFsV2lkdGggPD0gaXRlbU9mZnNldCkge1xuICAgICAgICBjdXJyZW50U2Nyb2xsT2Zmc2V0ID0gTWF0aC5taW4oY3VycmVudFNjcm9sbE9mZnNldCAtICh0b3RhbFdpZHRoIC0gaXRlbU9mZnNldCAtIGFkZGl0aW9uYWxPZmZzZXQpLCB3aWR0aHMuY29udGVudCAtIHdpZHRocy53cmFwcGVyKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnRsID8gLWN1cnJlbnRTY3JvbGxPZmZzZXQgOiBjdXJyZW50U2Nyb2xsT2Zmc2V0XG4gICAgfSxcbiAgICBjYWxjdWxhdGVDZW50ZXJlZE9mZnNldCAoc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudCwgd2lkdGhzOiBXaWR0aHMsIHJ0bDogYm9vbGVhbik6IG51bWJlciB7XG4gICAgICBjb25zdCB7IG9mZnNldExlZnQsIGNsaWVudFdpZHRoIH0gPSBzZWxlY3RlZEVsZW1lbnRcblxuICAgICAgaWYgKHJ0bCkge1xuICAgICAgICBjb25zdCBvZmZzZXRDZW50ZXJlZCA9IHdpZHRocy5jb250ZW50IC0gb2Zmc2V0TGVmdCAtIGNsaWVudFdpZHRoIC8gMiAtIHdpZHRocy53cmFwcGVyIC8gMlxuICAgICAgICByZXR1cm4gLU1hdGgubWluKHdpZHRocy5jb250ZW50IC0gd2lkdGhzLndyYXBwZXIsIE1hdGgubWF4KDAsIG9mZnNldENlbnRlcmVkKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9mZnNldENlbnRlcmVkID0gb2Zmc2V0TGVmdCArIGNsaWVudFdpZHRoIC8gMiAtIHdpZHRocy53cmFwcGVyIC8gMlxuICAgICAgICByZXR1cm4gTWF0aC5taW4od2lkdGhzLmNvbnRlbnQgLSB3aWR0aHMud3JhcHBlciwgTWF0aC5tYXgoMCwgb2Zmc2V0Q2VudGVyZWQpKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsVG8gLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKGxvY2F0aW9uOiAncHJldicgfCAnbmV4dCcpIHtcbiAgICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0gdGhpcy5jYWxjdWxhdGVOZXdPZmZzZXQobG9jYXRpb24sIHtcbiAgICAgICAgLy8gRm9yY2UgcmVmbG93XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuJHJlZnMuY29udGVudCA/IHRoaXMuJHJlZnMuY29udGVudC5jbGllbnRXaWR0aCA6IDAsXG4gICAgICAgIHdyYXBwZXI6IHRoaXMuJHJlZnMud3JhcHBlciA/IHRoaXMuJHJlZnMud3JhcHBlci5jbGllbnRXaWR0aCA6IDAsXG4gICAgICB9LCB0aGlzLiR2dWV0aWZ5LnJ0bCwgdGhpcy5zY3JvbGxPZmZzZXQpXG4gICAgfSxcbiAgICBzZXRXaWR0aHMgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gICgpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbnRlbnQsIHdyYXBwZXIgfSA9IHRoaXMuJHJlZnNcblxuICAgICAgICB0aGlzLndpZHRocyA9IHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50ID8gY29udGVudC5jbGllbnRXaWR0aCA6IDAsXG4gICAgICAgICAgd3JhcHBlcjogd3JhcHBlciA/IHdyYXBwZXIuY2xpZW50V2lkdGggOiAwLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc092ZXJmbG93aW5nID0gdGhpcy53aWR0aHMud3JhcHBlciA8IHRoaXMud2lkdGhzLmNvbnRlbnRcblxuICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KClcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuZ2VuRGF0YSgpLCBbXG4gICAgICB0aGlzLmdlblByZXYoKSxcbiAgICAgIHRoaXMuZ2VuV3JhcHBlcigpLFxuICAgICAgdGhpcy5nZW5OZXh0KCksXG4gICAgXSlcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VTbGlkZUdyb3VwLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXNsaWRlLWdyb3VwJyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzbGlkZUdyb3VwOiB0aGlzLFxuICAgIH1cbiAgfSxcbn0pXG4iLCIvLyBFeHRlbnNpb25zXG5pbXBvcnQgeyBCYXNlU2xpZGVHcm91cCB9IGZyb20gJy4uL1ZTbGlkZUdyb3VwL1ZTbGlkZUdyb3VwJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVlRhYiBmcm9tICcuL1ZUYWInXG5cbi8vIE1peGluc1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IFNTUkJvb3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zc3ItYm9vdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcidcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG50eXBlIFZUYWJJbnN0YW5jZSA9IEluc3RhbmNlVHlwZTx0eXBlb2YgVlRhYj5cblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBCYXNlU2xpZGVHcm91cCxcbiAgU1NSQm9vdGFibGUsXG4gIFRoZW1lYWJsZVxuICAvKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi10YWJzLWJhcicsXG5cbiAgcHJvdmlkZSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYnNCYXI6IHRoaXMsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5CYXNlU2xpZGVHcm91cC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgICAgJ3YtdGFicy1iYXInOiB0cnVlLFxuICAgICAgICAndi10YWJzLWJhci0taXMtbW9iaWxlJzogdGhpcy5pc01vYmlsZSxcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgYW5kIG1vdmUgdG8gdi1zbGlkZS1ncm91cFxuICAgICAgICAndi10YWJzLWJhci0tc2hvdy1hcnJvd3MnOiB0aGlzLnNob3dBcnJvd3MsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpdGVtczogJ2NhbGxTbGlkZXInLFxuICAgIGludGVybmFsVmFsdWU6ICdjYWxsU2xpZGVyJyxcbiAgICAkcm91dGU6ICdvblJvdXRlQ2hhbmdlJyxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FsbFNsaWRlciAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNCb290ZWQpIHJldHVyblxuXG4gICAgICB0aGlzLiRlbWl0KCdjYWxsOnNsaWRlcicpXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IEJhc2VTbGlkZUdyb3VwLm9wdGlvbnMubWV0aG9kcy5nZW5Db250ZW50LmNhbGwodGhpcylcblxuICAgICAgcmVuZGVyLmRhdGEgPSByZW5kZXIuZGF0YSB8fCB7fVxuICAgICAgcmVuZGVyLmRhdGEuc3RhdGljQ2xhc3MgKz0gJyB2LXRhYnMtYmFyX19jb250ZW50J1xuXG4gICAgICByZXR1cm4gcmVuZGVyXG4gICAgfSxcbiAgICBvblJvdXRlQ2hhbmdlICh2YWw6IFJvdXRlLCBvbGRWYWw6IFJvdXRlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKHRoaXMubWFuZGF0b3J5KSByZXR1cm5cblxuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zIGFzIHVua25vd24gYXMgVlRhYkluc3RhbmNlW11cbiAgICAgIGNvbnN0IG5ld1BhdGggPSB2YWwucGF0aFxuICAgICAgY29uc3Qgb2xkUGF0aCA9IG9sZFZhbC5wYXRoXG5cbiAgICAgIGxldCBoYXNOZXcgPSBmYWxzZVxuICAgICAgbGV0IGhhc09sZCA9IGZhbHNlXG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoaXRlbS50byA9PT0gbmV3UGF0aCkgaGFzTmV3ID0gdHJ1ZVxuICAgICAgICBlbHNlIGlmIChpdGVtLnRvID09PSBvbGRQYXRoKSBoYXNPbGQgPSB0cnVlXG5cbiAgICAgICAgaWYgKGhhc05ldyAmJiBoYXNPbGQpIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYW4gb2xkIGl0ZW0gYW5kIG5vdCBhIG5ldyBvbmVcbiAgICAgIC8vIGl0J3MgYXNzdW1lZCB0aGF0IHRoZSB1c2VyIG5hdmlnYXRlZCB0b1xuICAgICAgLy8gYSBwYXRoIHRoYXQgaXMgbm90IHByZXNlbnQgaW4gdGhlIGl0ZW1zXG4gICAgICBpZiAoIWhhc05ldyAmJiBoYXNPbGQpIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZFxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIGNvbnN0IHJlbmRlciA9IEJhc2VTbGlkZUdyb3VwLm9wdGlvbnMucmVuZGVyLmNhbGwodGhpcywgaClcblxuICAgIHJlbmRlci5kYXRhIS5hdHRycyA9IHtcbiAgICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyXG4gIH0sXG59KVxuIiwiLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlL3R5cGVzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKENvbG9yYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGFicy1zbGlkZXInLFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXRhYnMtc2xpZGVyJyxcbiAgICB9KSlcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WVGFicy5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVlRhYnNCYXIgZnJvbSAnLi9WVGFic0JhcidcbmltcG9ydCBWVGFic0l0ZW1zIGZyb20gJy4vVlRhYnNJdGVtcydcbmltcG9ydCBWVGFic1NsaWRlciBmcm9tICcuL1ZUYWJzU2xpZGVyJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCBQcm94eWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Byb3h5YWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgRXh0cmFjdFZ1ZSB9IGZyb20gJy4vLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxuaW50ZXJmYWNlIG9wdGlvbnMgZXh0ZW5kcyBFeHRyYWN0VnVlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRyZWZzOiB7XG4gICAgaXRlbXM6IEluc3RhbmNlVHlwZTx0eXBlb2YgVlRhYnNCYXI+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQ8b3B0aW9ucz4oKS5leHRlbmQoe1xuICBuYW1lOiAndi10YWJzJyxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgUmVzaXplLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgYWxpZ25XaXRoVGl0bGU6IEJvb2xlYW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBTdHJpbmcsXG4gICAgY2VudGVyQWN0aXZlOiBCb29sZWFuLFxuICAgIGNlbnRlcmVkOiBCb29sZWFuLFxuICAgIGZpeGVkVGFiczogQm9vbGVhbixcbiAgICBncm93OiBCb29sZWFuLFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIGhpZGVTbGlkZXI6IEJvb2xlYW4sXG4gICAgaWNvbnNBbmRUZXh0OiBCb29sZWFuLFxuICAgIG1vYmlsZUJyZWFrcG9pbnQ6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgbmV4dEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckbmV4dCcsXG4gICAgfSxcbiAgICBvcHRpb25hbDogQm9vbGVhbixcbiAgICBwcmV2SWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRwcmV2JyxcbiAgICB9LFxuICAgIHJpZ2h0OiBCb29sZWFuLFxuICAgIHNob3dBcnJvd3M6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgIHNsaWRlckNvbG9yOiBTdHJpbmcsXG4gICAgc2xpZGVyU2l6ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDIsXG4gICAgfSxcbiAgICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzaXplVGltZW91dDogMCxcbiAgICAgIHNsaWRlcjoge1xuICAgICAgICBoZWlnaHQ6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgICAgbGVmdDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuICAgICAgICByaWdodDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuICAgICAgICB0b3A6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgICAgd2lkdGg6IG51bGwgYXMgbnVsbCB8IG51bWJlcixcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uVGltZTogMzAwLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi10YWJzLS1hbGlnbi13aXRoLXRpdGxlJzogdGhpcy5hbGlnbldpdGhUaXRsZSxcbiAgICAgICAgJ3YtdGFicy0tY2VudGVyZWQnOiB0aGlzLmNlbnRlcmVkLFxuICAgICAgICAndi10YWJzLS1maXhlZC10YWJzJzogdGhpcy5maXhlZFRhYnMsXG4gICAgICAgICd2LXRhYnMtLWdyb3cnOiB0aGlzLmdyb3csXG4gICAgICAgICd2LXRhYnMtLWljb25zLWFuZC10ZXh0JzogdGhpcy5pY29uc0FuZFRleHQsXG4gICAgICAgICd2LXRhYnMtLXJpZ2h0JzogdGhpcy5yaWdodCxcbiAgICAgICAgJ3YtdGFicy0tdmVydGljYWwnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzUmV2ZXJzZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkucnRsICYmIHRoaXMudmVydGljYWxcbiAgICB9LFxuICAgIHNsaWRlclN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLnNsaWRlci5oZWlnaHQpLFxuICAgICAgICBsZWZ0OiB0aGlzLmlzUmV2ZXJzZWQgPyB1bmRlZmluZWQgOiBjb252ZXJ0VG9Vbml0KHRoaXMuc2xpZGVyLmxlZnQpLFxuICAgICAgICByaWdodDogdGhpcy5pc1JldmVyc2VkID8gY29udmVydFRvVW5pdCh0aGlzLnNsaWRlci5yaWdodCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHRvcDogdGhpcy52ZXJ0aWNhbCA/IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIudG9wKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhpcy5zbGlkZXIubGVmdCAhPSBudWxsID8gbnVsbCA6ICdub25lJyxcbiAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQodGhpcy5zbGlkZXIud2lkdGgpLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb2xvciAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yKSByZXR1cm4gdGhpcy5jb2xvclxuICAgICAgZWxzZSBpZiAodGhpcy5pc0RhcmsgJiYgIXRoaXMuYXBwSXNEYXJrKSByZXR1cm4gJ3doaXRlJ1xuICAgICAgZWxzZSByZXR1cm4gJ3ByaW1hcnknXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGFsaWduV2l0aFRpdGxlOiAnY2FsbFNsaWRlcicsXG4gICAgY2VudGVyZWQ6ICdjYWxsU2xpZGVyJyxcbiAgICBjZW50ZXJBY3RpdmU6ICdjYWxsU2xpZGVyJyxcbiAgICBmaXhlZFRhYnM6ICdjYWxsU2xpZGVyJyxcbiAgICBncm93OiAnY2FsbFNsaWRlcicsXG4gICAgcmlnaHQ6ICdjYWxsU2xpZGVyJyxcbiAgICBzaG93QXJyb3dzOiAnY2FsbFNsaWRlcicsXG4gICAgdmVydGljYWw6ICdjYWxsU2xpZGVyJyxcbiAgICAnJHZ1ZXRpZnkuYXBwbGljYXRpb24ubGVmdCc6ICdvblJlc2l6ZScsXG4gICAgJyR2dWV0aWZ5LmFwcGxpY2F0aW9uLnJpZ2h0JzogJ29uUmVzaXplJyxcbiAgICAnJHZ1ZXRpZnkucnRsJzogJ29uUmVzaXplJyxcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmNhbGxTbGlkZXIsIDMwKVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhbGxTbGlkZXIgKCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmhpZGVTbGlkZXIgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaXRlbXMgfHxcbiAgICAgICAgIXRoaXMuJHJlZnMuaXRlbXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNsaWRlci53aWR0aCA9IDBcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgLy8gR2l2ZSBzY3JlZW4gdGltZSB0byBwYWludFxuICAgICAgICBjb25zdCBhY3RpdmVUYWIgPSB0aGlzLiRyZWZzLml0ZW1zLnNlbGVjdGVkSXRlbXNbMF1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICghYWN0aXZlVGFiIHx8ICFhY3RpdmVUYWIuJGVsKSB7XG4gICAgICAgICAgdGhpcy5zbGlkZXIud2lkdGggPSAwXG4gICAgICAgICAgdGhpcy5zbGlkZXIubGVmdCA9IDBcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbCA9IGFjdGl2ZVRhYi4kZWwgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICB0aGlzLnNsaWRlciA9IHtcbiAgICAgICAgICBoZWlnaHQ6ICF0aGlzLnZlcnRpY2FsID8gTnVtYmVyKHRoaXMuc2xpZGVyU2l6ZSkgOiBlbC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgbGVmdDogdGhpcy52ZXJ0aWNhbCA/IDAgOiBlbC5vZmZzZXRMZWZ0LFxuICAgICAgICAgIHJpZ2h0OiB0aGlzLnZlcnRpY2FsID8gMCA6IGVsLm9mZnNldExlZnQgKyBlbC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB0b3A6IGVsLm9mZnNldFRvcCxcbiAgICAgICAgICB3aWR0aDogdGhpcy52ZXJ0aWNhbCA/IE51bWJlcih0aGlzLnNsaWRlclNpemUpIDogZWwuc2Nyb2xsV2lkdGgsXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICBnZW5CYXIgKGl0ZW1zOiBWTm9kZVtdLCBzbGlkZXI6IFZOb2RlIHwgbnVsbCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGNlbnRlckFjdGl2ZTogdGhpcy5jZW50ZXJBY3RpdmUsXG4gICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgIGxpZ2h0OiB0aGlzLmxpZ2h0LFxuICAgICAgICAgIG1hbmRhdG9yeTogIXRoaXMub3B0aW9uYWwsXG4gICAgICAgICAgbW9iaWxlQnJlYWtwb2ludDogdGhpcy5tb2JpbGVCcmVha3BvaW50LFxuICAgICAgICAgIG5leHRJY29uOiB0aGlzLm5leHRJY29uLFxuICAgICAgICAgIHByZXZJY29uOiB0aGlzLnByZXZJY29uLFxuICAgICAgICAgIHNob3dBcnJvd3M6IHRoaXMuc2hvd0Fycm93cyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pbnRlcm5hbFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICdjYWxsOnNsaWRlcic6IHRoaXMuY2FsbFNsaWRlcixcbiAgICAgICAgICBjaGFuZ2U6ICh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiAnaXRlbXMnLFxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbXB1dGVkQ29sb3IsIGRhdGEpXG4gICAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvciwgZGF0YSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRhYnNCYXIsIGRhdGEsIFtcbiAgICAgICAgdGhpcy5nZW5TbGlkZXIoc2xpZGVyKSxcbiAgICAgICAgaXRlbXMsXG4gICAgICBdKVxuICAgIH0sXG4gICAgZ2VuSXRlbXMgKGl0ZW1zOiBWTm9kZSB8IG51bGwsIGl0ZW06IFZOb2RlW10pIHtcbiAgICAgIC8vIElmIHVzZXIgcHJvdmlkZXMgaXRlbXNcbiAgICAgIC8vIG9wdCB0byB1c2UgdGhlaXJzXG4gICAgICBpZiAoaXRlbXMpIHJldHVybiBpdGVtc1xuXG4gICAgICAvLyBJZiBubyB0YWJzIGFyZSBwcm92aWRlZFxuICAgICAgLy8gcmVuZGVyIG5vdGhpbmdcbiAgICAgIGlmICghaXRlbS5sZW5ndGgpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZUYWJzSXRlbXMsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5pbnRlcm5hbFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNoYW5nZTogKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSwgaXRlbSlcbiAgICB9LFxuICAgIGdlblNsaWRlciAoc2xpZGVyOiBWTm9kZSB8IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmhpZGVTbGlkZXIpIHJldHVybiBudWxsXG5cbiAgICAgIGlmICghc2xpZGVyKSB7XG4gICAgICAgIHNsaWRlciA9IHRoaXMuJGNyZWF0ZUVsZW1lbnQoVlRhYnNTbGlkZXIsIHtcbiAgICAgICAgICBwcm9wczogeyBjb2xvcjogdGhpcy5zbGlkZXJDb2xvciB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdGFicy1zbGlkZXItd3JhcHBlcicsXG4gICAgICAgIHN0eWxlOiB0aGlzLnNsaWRlclN0eWxlcyxcbiAgICAgIH0sIFtzbGlkZXJdKVxuICAgIH0sXG4gICAgb25SZXNpemUgKCkge1xuICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSByZXR1cm5cblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dClcbiAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuY2FsbFNsaWRlciwgMClcbiAgICB9LFxuICAgIHBhcnNlTm9kZXMgKCkge1xuICAgICAgbGV0IGl0ZW1zID0gbnVsbFxuICAgICAgbGV0IHNsaWRlciA9IG51bGxcbiAgICAgIGNvbnN0IGl0ZW0gPSBbXVxuICAgICAgY29uc3QgdGFiID0gW11cbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICBjb25zdCBsZW5ndGggPSBzbG90Lmxlbmd0aFxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZub2RlID0gc2xvdFtpXVxuXG4gICAgICAgIGlmICh2bm9kZS5jb21wb25lbnRPcHRpb25zKSB7XG4gICAgICAgICAgc3dpdGNoICh2bm9kZS5jb21wb25lbnRPcHRpb25zLkN0b3Iub3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd2LXRhYnMtc2xpZGVyJzogc2xpZGVyID0gdm5vZGVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3YtdGFicy1pdGVtcyc6IGl0ZW1zID0gdm5vZGVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3YtdGFiLWl0ZW0nOiBpdGVtLnB1c2godm5vZGUpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAvLyBjYXNlICd2LXRhYicgLSBpbnRlbnRpb25hbGx5IG9taXR0ZWRcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRhYi5wdXNoKHZub2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWIucHVzaCh2bm9kZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIHRhYjogYXJyYXkgb2YgYHYtdGFiYFxuICAgICAgICogc2xpZGVyOiBzaW5nbGUgYHYtdGFicy1zbGlkZXJgXG4gICAgICAgKiBpdGVtczogc2luZ2xlIGB2LXRhYnMtaXRlbXNgXG4gICAgICAgKiBpdGVtOiBhcnJheSBvZiBgdi10YWItaXRlbWBcbiAgICAgICAqL1xuICAgICAgcmV0dXJuIHsgdGFiLCBzbGlkZXIsIGl0ZW1zLCBpdGVtIH1cbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCB7IHRhYiwgc2xpZGVyLCBpdGVtcywgaXRlbSB9ID0gdGhpcy5wYXJzZU5vZGVzKClcblxuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtdGFicycsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogJ3Jlc2l6ZScsXG4gICAgICAgIG1vZGlmaWVyczogeyBxdWlldDogdHJ1ZSB9LFxuICAgICAgICB2YWx1ZTogdGhpcy5vblJlc2l6ZSxcbiAgICAgIH1dLFxuICAgIH0sIFtcbiAgICAgIHRoaXMuZ2VuQmFyKHRhYiwgc2xpZGVyKSxcbiAgICAgIHRoaXMuZ2VuSXRlbXMoaXRlbXMsIGl0ZW0pLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZXaW5kb3cgZnJvbSAnLi9WV2luZG93J1xuXG4vLyBNaXhpbnNcbmltcG9ydCBCb290YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvYm9vdGFibGUnXG5pbXBvcnQgeyBmYWN0b3J5IGFzIEdyb3VwYWJsZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9taXhpbnMvZ3JvdXBhYmxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgVG91Y2ggZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucywgeyBFeHRyYWN0VnVlIH0gZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgQm9vdGFibGUsXG4gIEdyb3VwYWJsZUZhY3RvcnkoJ3dpbmRvd0dyb3VwJywgJ3Ytd2luZG93LWl0ZW0nLCAndi13aW5kb3cnKVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEV4dHJhY3RWdWU8dHlwZW9mIGJhc2VNaXhpbnM+IHtcbiAgJGVsOiBIVE1MRWxlbWVudFxuICB3aW5kb3dHcm91cDogSW5zdGFuY2VUeXBlPHR5cGVvZiBWV2luZG93PlxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZChcbiAgLyogQHZ1ZS9jb21wb25lbnQgKi9cbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytd2luZG93LWl0ZW0nLFxuXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBUb3VjaCxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJldmVyc2VUcmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICBpblRyYW5zaXRpb246IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4gdGhpcy5ncm91cENsYXNzZXNcbiAgICB9LFxuICAgIGNvbXB1dGVkVHJhbnNpdGlvbiAoKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoIXRoaXMud2luZG93R3JvdXAuaW50ZXJuYWxSZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy50cmFuc2l0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgID8gdGhpcy50cmFuc2l0aW9uIHx8ICcnXG4gICAgICAgICAgOiB0aGlzLndpbmRvd0dyb3VwLmNvbXB1dGVkVHJhbnNpdGlvblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMucmV2ZXJzZVRyYW5zaXRpb24gIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5yZXZlcnNlVHJhbnNpdGlvbiB8fCAnJ1xuICAgICAgICA6IHRoaXMud2luZG93R3JvdXAuY29tcHV0ZWRUcmFuc2l0aW9uXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuRGVmYXVsdFNsb3QgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLmRlZmF1bHRcbiAgICB9LFxuICAgIGdlbldpbmRvd0l0ZW0gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXdpbmRvdy1pdGVtJyxcbiAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAnc2hvdycsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH1dLFxuICAgICAgICBvbjogdGhpcy4kbGlzdGVuZXJzLFxuICAgICAgfSwgdGhpcy5nZW5EZWZhdWx0U2xvdCgpKVxuICAgIH0sXG4gICAgb25BZnRlclRyYW5zaXRpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmluVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gRmluYWxpemUgdHJhbnNpdGlvbiBzdGF0ZS5cbiAgICAgIHRoaXMuaW5UcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgIGlmICh0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25Db3VudCA+IDApIHtcbiAgICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQtLVxuXG4gICAgICAgIC8vIFJlbW92ZSBjb250YWluZXIgaGVpZ2h0IGlmIHdlIGFyZSBvdXQgb2YgdHJhbnNpdGlvbi5cbiAgICAgICAgaWYgKHRoaXMud2luZG93R3JvdXAudHJhbnNpdGlvbkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uSGVpZ2h0ID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQmVmb3JlVHJhbnNpdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIEluaXRpYWxpemUgdHJhbnNpdGlvbiBzdGF0ZSBoZXJlLlxuICAgICAgdGhpcy5pblRyYW5zaXRpb24gPSB0cnVlXG4gICAgICBpZiAodGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uQ291bnQgPT09IDApIHtcbiAgICAgICAgLy8gU2V0IGluaXRpYWwgaGVpZ2h0IGZvciBoZWlnaHQgdHJhbnNpdGlvbi5cbiAgICAgICAgdGhpcy53aW5kb3dHcm91cC50cmFuc2l0aW9uSGVpZ2h0ID0gY29udmVydFRvVW5pdCh0aGlzLndpbmRvd0dyb3VwLiRlbC5jbGllbnRIZWlnaHQpXG4gICAgICB9XG4gICAgICB0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25Db3VudCsrXG4gICAgfSxcbiAgICBvblRyYW5zaXRpb25DYW5jZWxsZWQgKCkge1xuICAgICAgdGhpcy5vbkFmdGVyVHJhbnNpdGlvbigpIC8vIFRoaXMgc2hvdWxkIGhhdmUgdGhlIHNhbWUgcGF0aCBhcyBub3JtYWwgdHJhbnNpdGlvbiBlbmQuXG4gICAgfSxcbiAgICBvbkVudGVyIChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICghdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgLy8gRG8gbm90IHNldCBoZWlnaHQgaWYgbm8gdHJhbnNpdGlvbiBvciBjYW5jZWxsZWQuXG4gICAgICAgIGlmICghdGhpcy5jb21wdXRlZFRyYW5zaXRpb24gfHwgIXRoaXMuaW5UcmFuc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdHJhbnNpdGlvbiB0YXJnZXQgaGVpZ2h0LlxuICAgICAgICB0aGlzLndpbmRvd0dyb3VwLnRyYW5zaXRpb25IZWlnaHQgPSBjb252ZXJ0VG9Vbml0KGVsLmNsaWVudEhlaWdodClcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ3RyYW5zaXRpb24nLCB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBuYW1lOiB0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbixcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAvLyBIYW5kbGVycyBmb3IgZW50ZXIgd2luZG93cy5cbiAgICAgICAgYmVmb3JlRW50ZXI6IHRoaXMub25CZWZvcmVUcmFuc2l0aW9uLFxuICAgICAgICBhZnRlckVudGVyOiB0aGlzLm9uQWZ0ZXJUcmFuc2l0aW9uLFxuICAgICAgICBlbnRlckNhbmNlbGxlZDogdGhpcy5vblRyYW5zaXRpb25DYW5jZWxsZWQsXG5cbiAgICAgICAgLy8gSGFuZGxlcnMgZm9yIGxlYXZlIHdpbmRvd3MuXG4gICAgICAgIGJlZm9yZUxlYXZlOiB0aGlzLm9uQmVmb3JlVHJhbnNpdGlvbixcbiAgICAgICAgYWZ0ZXJMZWF2ZTogdGhpcy5vbkFmdGVyVHJhbnNpdGlvbixcbiAgICAgICAgbGVhdmVDYW5jZWxsZWQ6IHRoaXMub25UcmFuc2l0aW9uQ2FuY2VsbGVkLFxuXG4gICAgICAgIC8vIEVudGVyIGhhbmRsZXIgZm9yIGhlaWdodCB0cmFuc2l0aW9uLlxuICAgICAgICBlbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgfSxcbiAgICB9LCB0aGlzLnNob3dMYXp5Q29udGVudCgoKSA9PiBbdGhpcy5nZW5XaW5kb3dJdGVtKCldKSlcbiAgfSxcbn0pXG4iLCIvLyBFeHRlbnNpb25zXG5pbXBvcnQgVldpbmRvd0l0ZW0gZnJvbSAnLi4vVldpbmRvdy9WV2luZG93SXRlbSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZXaW5kb3dJdGVtLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYi1pdGVtJyxcblxuICBwcm9wczoge1xuICAgIGlkOiBTdHJpbmcsXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbldpbmRvd0l0ZW0gKCkge1xuICAgICAgY29uc3QgaXRlbSA9IFZXaW5kb3dJdGVtLm9wdGlvbnMubWV0aG9kcy5nZW5XaW5kb3dJdGVtLmNhbGwodGhpcylcblxuICAgICAgaXRlbS5kYXRhIS5kb21Qcm9wcyA9IGl0ZW0uZGF0YSEuZG9tUHJvcHMgfHwge31cbiAgICAgIGl0ZW0uZGF0YSEuZG9tUHJvcHMuaWQgPSB0aGlzLmlkIHx8IHRoaXMudmFsdWVcblxuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIE1peGluc1xuaW1wb3J0IE1lYXN1cmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL21lYXN1cmFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IGludGVyc2VjdCBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ludGVyc2VjdCdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBtaXhpbnMoXG4gIE1lYXN1cmFibGUsXG4gIFRvZ2dsZWFibGVcbikuZXh0ZW5kKHtcbiAgbmFtZTogJ1ZMYXp5JyxcblxuICBkaXJlY3RpdmVzOiB7IGludGVyc2VjdCB9LFxuXG4gIHByb3BzOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdHlwZXMsIG5hdmlnYXRlIHRvOlxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbl9PYnNlcnZlcl9BUElcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7XG4gICAgICAgIHJvb3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgcm9vdE1hcmdpbjogdW5kZWZpbmVkLFxuICAgICAgICB0aHJlc2hvbGQ6IHVuZGVmaW5lZCxcbiAgICAgIH0pLFxuICAgIH0gYXMgUHJvcFZhbGlkYXRvcjxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQ+LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZmFkZS10cmFuc2l0aW9uJyxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5tZWFzdXJhYmxlU3R5bGVzLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IGdldFNsb3QodGhpcylcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbikgcmV0dXJuIHNsb3RcblxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgY2hpbGRyZW4ucHVzaChzbG90KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHsgbmFtZTogdGhpcy50cmFuc2l0aW9uIH0sXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIG9uT2JzZXJ2ZSAoXG4gICAgICBlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sXG4gICAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsXG4gICAgICBpc0ludGVyc2VjdGluZzogYm9vbGVhbixcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSByZXR1cm5cblxuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzSW50ZXJzZWN0aW5nXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgodGhpcy50YWcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1sYXp5JyxcbiAgICAgIGF0dHJzOiB0aGlzLiRhdHRycyxcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6ICdpbnRlcnNlY3QnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGhhbmRsZXI6IHRoaXMub25PYnNlcnZlLFxuICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgIH1dLFxuICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICB9LCBbdGhpcy5nZW5Db250ZW50KCldKVxuICB9LFxufSlcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDaGVja2JveC5zYXNzJ1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9fc2VsZWN0aW9uLWNvbnRyb2xzLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWSWNvbiBmcm9tICcuLi9WSWNvbidcbmltcG9ydCBWSW5wdXQgZnJvbSAnLi4vVklucHV0J1xuXG4vLyBNaXhpbnNcbmltcG9ydCBTZWxlY3RhYmxlIGZyb20gJy4uLy4uL21peGlucy9zZWxlY3RhYmxlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0YWJsZS5leHRlbmQoe1xuICBuYW1lOiAndi1jaGVja2JveCcsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGVJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94SW5kZXRlcm1pbmF0ZScsXG4gICAgfSxcbiAgICBvZmZJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJGNoZWNrYm94T2ZmJyxcbiAgICB9LFxuICAgIG9uSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyRjaGVja2JveE9uJyxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dEluZGV0ZXJtaW5hdGU6IHRoaXMuaW5kZXRlcm1pbmF0ZSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVklucHV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi1pbnB1dC0tc2VsZWN0aW9uLWNvbnRyb2xzJzogdHJ1ZSxcbiAgICAgICAgJ3YtaW5wdXQtLWNoZWNrYm94JzogdHJ1ZSxcbiAgICAgICAgJ3YtaW5wdXQtLWluZGV0ZXJtaW5hdGUnOiB0aGlzLmlucHV0SW5kZXRlcm1pbmF0ZSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkSWNvbiAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmlucHV0SW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRldGVybWluYXRlSWNvblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uSWNvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2ZmSWNvblxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gRG8gbm90IHJldHVybiB1bmRlZmluZWQgaWYgZGlzYWJsZWQsXG4gICAgLy8gYWNjb3JkaW5nIHRvIHNwZWMsIHNob3VsZCBzdGlsbCBzaG93XG4gICAgLy8gYSBjb2xvciB3aGVuIGRpc2FibGVkIGFuZCBhY3RpdmVcbiAgICB2YWxpZGF0aW9uU3RhdGUgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlucHV0SW5kZXRlcm1pbmF0ZSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuaGFzRXJyb3IgJiYgdGhpcy5zaG91bGRWYWxpZGF0ZSkgcmV0dXJuICdlcnJvcidcbiAgICAgIGlmICh0aGlzLmhhc1N1Y2Nlc3MpIHJldHVybiAnc3VjY2VzcydcbiAgICAgIGlmICh0aGlzLmhhc0NvbG9yICE9PSBudWxsKSByZXR1cm4gdGhpcy5jb21wdXRlZENvbG9yXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGluZGV0ZXJtaW5hdGUgKHZhbCkge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5L2lzc3Vlcy84MjcwXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiAodGhpcy5pbnB1dEluZGV0ZXJtaW5hdGUgPSB2YWwpKVxuICAgIH0sXG4gICAgaW5wdXRJbmRldGVybWluYXRlICh2YWwpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTppbmRldGVybWluYXRlJywgdmFsKVxuICAgIH0sXG4gICAgaXNBY3RpdmUgKCkge1xuICAgICAgaWYgKCF0aGlzLmluZGV0ZXJtaW5hdGUpIHJldHVyblxuICAgICAgdGhpcy5pbnB1dEluZGV0ZXJtaW5hdGUgPSBmYWxzZVxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNoZWNrYm94ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dC0tc2VsZWN0aW9uLWNvbnRyb2xzX19pbnB1dCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkljb24sIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMudmFsaWRhdGlvblN0YXRlLCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRlbnNlOiB0aGlzLmRlbnNlLFxuICAgICAgICAgICAgZGFyazogdGhpcy5kYXJrLFxuICAgICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksIHRoaXMuY29tcHV0ZWRJY29uKSxcbiAgICAgICAgdGhpcy5nZW5JbnB1dCgnY2hlY2tib3gnLCB7XG4gICAgICAgICAgLi4udGhpcy5hdHRycyQsXG4gICAgICAgICAgJ2FyaWEtY2hlY2tlZCc6IHRoaXMuaW5wdXRJbmRldGVybWluYXRlXG4gICAgICAgICAgICA/ICdtaXhlZCdcbiAgICAgICAgICAgIDogdGhpcy5pc0FjdGl2ZS50b1N0cmluZygpLFxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5nZW5SaXBwbGUodGhpcy5zZXRUZXh0Q29sb3IodGhpcy5yaXBwbGVTdGF0ZSkpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuQ2hlY2tib3goKSxcbiAgICAgICAgdGhpcy5nZW5MYWJlbCgpLFxuICAgICAgXVxuICAgIH0sXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVlNuYWNrYmFyLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWU2hlZXQgZnJvbSAnLi4vVlNoZWV0L1ZTaGVldCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdG9nZ2xlYWJsZSdcbmltcG9ydCB7IGZhY3RvcnkgYXMgUG9zaXRpb25hYmxlRmFjdG9yeSB9IGZyb20gJy4uLy4uL21peGlucy9wb3NpdGlvbmFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBkZXByZWNhdGUsIHJlbW92ZWQgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQcm9wVHlwZSwgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgVlNoZWV0LFxuICBDb2xvcmFibGUsXG4gIFRvZ2dsZWFibGUsXG4gIFBvc2l0aW9uYWJsZUZhY3RvcnkoW1xuICAgICdhYnNvbHV0ZScsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2xlZnQnLFxuICAgICdyaWdodCcsXG4gICAgJ3RvcCcsXG4gIF0pXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi1zbmFja2JhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHA6IEJvb2xlYW4sXG4gICAgY2VudGVyZWQ6IEJvb2xlYW4sXG4gICAgY29udGVudENsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIG11bHRpTGluZTogQm9vbGVhbixcbiAgICB0ZXh0OiBCb29sZWFuLFxuICAgIHRpbWVvdXQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiA1MDAwLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10gYXMgUHJvcFR5cGU8ZmFsc2UgfCBzdHJpbmc+LFxuICAgICAgZGVmYXVsdDogJ3Ytc25hY2stdHJhbnNpdGlvbicsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gdHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8IHYgPT09IGZhbHNlLFxuICAgIH0sXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBhY3RpdmVUaW1lb3V0OiAtMSxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3Ytc25hY2stLWFic29sdXRlJzogdGhpcy5hYnNvbHV0ZSxcbiAgICAgICAgJ3Ytc25hY2stLWFjdGl2ZSc6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgICd2LXNuYWNrLS1ib3R0b20nOiB0aGlzLmJvdHRvbSB8fCAhdGhpcy50b3AsXG4gICAgICAgICd2LXNuYWNrLS1jZW50ZXJlZCc6IHRoaXMuY2VudGVyZWQsXG4gICAgICAgICd2LXNuYWNrLS1oYXMtYmFja2dyb3VuZCc6IHRoaXMuaGFzQmFja2dyb3VuZCxcbiAgICAgICAgJ3Ytc25hY2stLWxlZnQnOiB0aGlzLmxlZnQsXG4gICAgICAgICd2LXNuYWNrLS1tdWx0aS1saW5lJzogdGhpcy5tdWx0aUxpbmUgJiYgIXRoaXMudmVydGljYWwsXG4gICAgICAgICd2LXNuYWNrLS1yaWdodCc6IHRoaXMucmlnaHQsXG4gICAgICAgICd2LXNuYWNrLS10ZXh0JzogdGhpcy50ZXh0LFxuICAgICAgICAndi1zbmFjay0tdG9wJzogdGhpcy50b3AsXG4gICAgICAgICd2LXNuYWNrLS12ZXJ0aWNhbCc6IHRoaXMudmVydGljYWwsXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBUZXh0IGFuZCBvdXRsaW5lZCBzdHlsZXMgYm90aFxuICAgIC8vIHVzZSB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kc1xuICAgIGhhc0JhY2tncm91bmQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgIXRoaXMudGV4dCAmJlxuICAgICAgICAhdGhpcy5vdXRsaW5lZFxuICAgICAgKVxuICAgIH0sXG4gICAgLy8gU25hY2tiYXIgaXMgZGFyayBieSBkZWZhdWx0XG4gICAgLy8gb3ZlcnJpZGUgdGhlbWVhYmxlIGxvZ2ljLlxuICAgIGlzRGFyayAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNCYWNrZ3JvdW5kXG4gICAgICAgID8gIXRoaXMubGlnaHRcbiAgICAgICAgOiBUaGVtZWFibGUub3B0aW9ucy5jb21wdXRlZC5pc0RhcmsuY2FsbCh0aGlzKVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgLy8gU3R5bGVzIGFyZSBub3QgbmVlZGVkIHdoZW5cbiAgICAgIC8vIHVzaW5nIHRoZSBhYnNvbHV0ZSBwcm9wLlxuICAgICAgaWYgKHRoaXMuYWJzb2x1dGUpIHJldHVybiB7fVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGJhcixcbiAgICAgICAgYm90dG9tLFxuICAgICAgICBmb290ZXIsXG4gICAgICAgIGluc2V0Rm9vdGVyLFxuICAgICAgICBsZWZ0LFxuICAgICAgICByaWdodCxcbiAgICAgICAgdG9wLFxuICAgICAgfSA9IHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb25cblxuICAgICAgLy8gU2hvdWxkIGFsd2F5cyBtb3ZlIGZvciB5LWF4aXNcbiAgICAgIC8vIGFwcGxpY2F0aW9uYWJsZSBjb21wb25lbnRzLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogY29udmVydFRvVW5pdChib3R0b20gKyBmb290ZXIgKyBpbnNldEZvb3RlciksXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAhdGhpcy5hcHAgPyB1bmRlZmluZWQgOiBjb252ZXJ0VG9Vbml0KGxlZnQpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICF0aGlzLmFwcCA/IHVuZGVmaW5lZCA6IGNvbnZlcnRUb1VuaXQocmlnaHQpLFxuICAgICAgICBwYWRkaW5nVG9wOiBjb252ZXJ0VG9Vbml0KGJhciArIHRvcCksXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGlzQWN0aXZlOiAnc2V0VGltZW91dCcsXG4gICAgdGltZW91dDogJ3NldFRpbWVvdXQnLFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB0aGlzLnNldFRpbWVvdXQoKVxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCdhdXRvLWhlaWdodCcpKSB7XG4gICAgICByZW1vdmVkKCdhdXRvLWhlaWdodCcsIHRoaXMpXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgaWYgKHRoaXMudGltZW91dCA9PSAwKSB7XG4gICAgICBkZXByZWNhdGUoJ3RpbWVvdXQ9XCIwXCInLCAnLTEnLCB0aGlzKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQWN0aW9ucyAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3Ytc25hY2tfX2FjdGlvbiAnLFxuICAgICAgfSwgW1xuICAgICAgICBnZXRTbG90KHRoaXMsICdhY3Rpb24nLCB7XG4gICAgICAgICAgYXR0cnM6IHsgY2xhc3M6ICd2LXNuYWNrX19idG4nIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXNuYWNrX19jb250ZW50JyxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBbdGhpcy5jb250ZW50Q2xhc3NdOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGU6ICdzdGF0dXMnLFxuICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtnZXRTbG90KHRoaXMpXSlcbiAgICB9LFxuICAgIGdlbldyYXBwZXIgKCkge1xuICAgICAgY29uc3Qgc2V0Q29sb3IgPSB0aGlzLmhhc0JhY2tncm91bmRcbiAgICAgICAgPyB0aGlzLnNldEJhY2tncm91bmRDb2xvclxuICAgICAgICA6IHRoaXMuc2V0VGV4dENvbG9yXG5cbiAgICAgIGNvbnN0IGRhdGEgPSBzZXRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zbmFja19fd3JhcHBlcicsXG4gICAgICAgIGNsYXNzOiBWU2hlZXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICB9XSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCBkYXRhLCBbXG4gICAgICAgIHRoaXMuZ2VuQ29udGVudCgpLFxuICAgICAgICB0aGlzLmdlbkFjdGlvbnMoKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5UcmFuc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczogeyBuYW1lOiB0aGlzLnRyYW5zaXRpb24gfSxcbiAgICAgIH0sIFt0aGlzLmdlbldyYXBwZXIoKV0pXG4gICAgfSxcbiAgICBzZXRUaW1lb3V0ICgpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5hY3RpdmVUaW1lb3V0KVxuXG4gICAgICBjb25zdCB0aW1lb3V0ID0gTnVtYmVyKHRoaXMudGltZW91dClcblxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5pc0FjdGl2ZSB8fFxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgMCBpbiB2M1xuICAgICAgICBbMCwgLTFdLmluY2x1ZGVzKHRpbWVvdXQpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWN0aXZlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB9LCB0aW1lb3V0KVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc25hY2snLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICB9LCBbXG4gICAgICB0aGlzLnRyYW5zaXRpb24gIT09IGZhbHNlXG4gICAgICAgID8gdGhpcy5nZW5UcmFuc2l0aW9uKClcbiAgICAgICAgOiB0aGlzLmdlbldyYXBwZXIoKSxcbiAgICBdKVxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1jYXJkJyx7YXR0cnM6e1wiZmxhdFwiOlwiXCJ9fSxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCIsXCJhbGlnbi1jZW50ZXJcIjpcIlwifX0sX3ZtLl9sKChfdm0uZGF0YS52YWx1ZXMpLGZ1bmN0aW9uKGl0ZW0pe3JldHVybiBfYygndi1mbGV4Jyx7a2V5Ol92bS5kYXRhLm5hbWUgKyAnXycgKyBpdGVtLHN0YXRpY0NsYXNzOlwicGEtMVwiLGF0dHJzOntcInhzMTJcIjpcIlwiLFwibWQ0XCI6XCJcIixcInNtNFwiOlwiXCIsXCJsZzRcIjpcIlwifX0sW19jKCd2LWxhenknLHthdHRyczp7XCJvcHRpb25zXCI6e3RocmVzaG9sZDogLjZ9LFwidHJhbnNpdGlvblwiOlwiZmFkZS10cmFuc2l0aW9uXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmlzQWN0aXZlKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmlzQWN0aXZlPSQkdn0sZXhwcmVzc2lvbjpcImlzQWN0aXZlXCJ9fSxbX2MoJ2Zvb2QtY2FyZCcse2F0dHJzOntcImlkXCI6aXRlbSxcIm1lcmNoYW50XCI6X3ZtLm1lcmNoYW50fX0pXSwxKV0sMSl9KSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LWNhcmQnLHthdHRyczp7XCJtYXgtd2lkdGhcIjpcIjEwMCVcIixcIm91dGxpbmVkXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0uY3VycmVudF9kYXRhID1fdm0uaXRlbSAsIF92bS5nZW5lcmF0ZUFkZE9ucygpLCBfdm0uZGlhbG9nID0gdHJ1ZX19fSxbKCFfdm0uaXNMb2FkZWQpP19jKCd2LXNrZWxldG9uLWxvYWRlcicse3N0YXRpY0NsYXNzOlwibXgtYXV0b1wiLGF0dHJzOntcImJvaWxlcnBsYXRlXCI6IV92bS5pc0xvYWRlZCxcInR5cGVcIjpcImxpc3QtaXRlbS10aHJlZS1saW5lXCJ9fSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmlzTG9hZGVkKT9fYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygnaDMnLFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5uYW1lKSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNTdHlsZTp7XCJmb250LXN0eWxlXCI6XCJpdGFsaWNcIn19LFtfYygnc21hbGwnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLml0ZW0uZGVzYyl9fSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjYXB0aW9uIGdyZXktLXRleHRcIn0sW192bS5fdihcIkZyb21cIildKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1sLTIgcmVkLS10ZXh0IHN1YnRpdGxlLTFcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5pdGVtLmJhc2VfcHJpY2UpKStcIiBcIildKV0pXSksX3ZtLl92KFwiIFwiKSwoX3ZtLml0ZW0uaW1nLmxlbmd0aD4wKT9fYygndi1saXN0LWl0ZW0tYXZhdGFyJyx7YXR0cnM6e1widGlsZVwiOlwiXCIsXCJzaXplXCI6XCIxMDBcIn19LFtfYygndi1pbWcnLHthdHRyczp7XCJzcmNcIjpfdm0uaXRlbS5pbWd9fSldLDEpOl92bS5fZSgpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLCghX3ZtLmlzRW1wdHkoX3ZtLmN1cnJlbnRfZGF0YSkpP19jKCd2LXJvdycse2F0dHJzOntcImp1c3RpZnlcIjpcImNlbnRlclwifX0sW19jKCd2LWRpYWxvZycse2F0dHJzOntcImZ1bGxzY3JlZW5cIjpcIlwiLFwiaGlkZS1vdmVybGF5XCI6XCJcIixcInRyYW5zaXRpb25cIjpcImRpYWxvZy1ib3R0b20tdHJhbnNpdGlvblwifSxtb2RlbDp7dmFsdWU6KF92bS5kaWFsb2cpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uZGlhbG9nPSQkdn0sZXhwcmVzc2lvbjpcImRpYWxvZ1wifX0sW19jKCd2LWNhcmQnLFtfYygndi10b29sYmFyJyx7YXR0cnM6e1wiZGFya1wiOlwiXCIsXCJjb2xvclwiOlwicmdiYSgxMDAsMTE1LDIwMSlcIn19LFtfYygndi1idG4nLHthdHRyczp7XCJpY29uXCI6XCJcIixcImRhcmtcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmRpYWxvZyA9IGZhbHNlfX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLWNsb3NlXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtdG9vbGJhci10aXRsZScsW192bS5fdihcIkFkZCB0byBDYXJ0XCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1zcGFjZXInKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0nLFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50X2RhdGEubmFtZSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjYXB0aW9uIGdyZXktLXRleHRcIn0sW192bS5fdihcIkZyb21cIildKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJyZWQtLXRleHRcIn0sW192bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoX3ZtLmN1cnJlbnRfZGF0YS5iYXNlX3ByaWNlKSkpXSldKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksX3ZtLl9sKChfdm0uY3VycmVudF9kYXRhLm9wdGlvbnMpLGZ1bmN0aW9uKGl0ZW0saW5kZXgpe3JldHVybiBfYygndi1saXN0Jyx7a2V5OmluZGV4LGF0dHJzOntcImRlbnNlXCI6XCJcIixcImZsYXRcIjpcIlwiLFwic3ViaGVhZGVyXCI6XCJcIn19LFsoaXRlbS5taW4gPT0gMSAmJiBpdGVtLm1heCA9PSAxKT9fYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tc3VidGl0bGUnLFtfdm0uX3YoXCJPbmUgaXMgcmVxdWlyZWRcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QnLHthdHRyczp7XCJmbGF0XCI6XCJcIixcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0tZ3JvdXAnLHthdHRyczp7XCJtYW5kYXRvcnlcIjpcIlwiLFwiY29sb3JcIjpcImRlZXAtcHVycGxlIGFjY2VudC00XCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmFkZF9vbl9kYXRhW2l0ZW0ubmFtZS5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKCldKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmFkZF9vbl9kYXRhLCBpdGVtLm5hbWUucmVwbGFjZSgnICcsICcnKS50b0xvd2VyQ2FzZSgpLCAkJHYpfSxleHByZXNzaW9uOlwiYWRkX29uX2RhdGFbaXRlbS5uYW1lLnJlcGxhY2UoJyAnLCAnJykudG9Mb3dlckNhc2UoKV1cIn19LF92bS5fbCgoaXRlbS52YWx1ZXMpLGZ1bmN0aW9uKGksZSl7cmV0dXJuIF9jKCd2LWxpc3QtaXRlbScse2tleTplK2luZGV4LGF0dHJzOntcInZhbHVlXCI6aX19LFtfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihfdm0uX3MoaS5uYW1lKSldKV0sMSksX3ZtLl92KFwiIFwiKSwoaS5wcmljZT4wKT9fYygndi1saXN0LWl0ZW0tYWN0aW9uLXRleHQnLFtfdm0uX3YoXCIgKyBcIitfdm0uX3MoX3ZtLl9mKFwidG9QSFBcIikoaS5wcmljZSkpK1wiIFwiKV0pOl92bS5fZSgpXSwxKX0pLDEpXSwxKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKGl0ZW0ubWF4ID4gMSk/X2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGl0ZW0ubmFtZSkrXCIgLSBPcHRpb25hbCBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1zdWJ0aXRsZScsW192bS5fdihcIiBTZWxlY3QgdXAgdG8gXCIrX3ZtLl9zKGl0ZW0ubWF4KStcIiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QnLHthdHRyczp7XCJmbGF0XCI6XCJcIixcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0tZ3JvdXAnLHthdHRyczp7XCJtdWx0aXBsZVwiOlwiXCIsXCJtaW5cIjppdGVtLm1pbixcIm1heFwiOml0ZW0ubWF4fSxtb2RlbDp7dmFsdWU6KF92bS5hZGRfb25fZGF0YVtpdGVtLm5hbWUucmVwbGFjZSgnICcsICcnKS50b0xvd2VyQ2FzZSgpXSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5hZGRfb25fZGF0YSwgaXRlbS5uYW1lLnJlcGxhY2UoJyAnLCAnJykudG9Mb3dlckNhc2UoKSwgJCR2KX0sZXhwcmVzc2lvbjpcImFkZF9vbl9kYXRhW2l0ZW0ubmFtZS5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKCldXCJ9fSxbX3ZtLl9sKChpdGVtLnZhbHVlcyksZnVuY3Rpb24oX2l0ZW0saSl7cmV0dXJuIFsoIV9pdGVtKT9fYygndi1kaXZpZGVyJyx7a2V5OihcImRpdmlkZXItXCIgKyBpKX0pOl9jKCd2LWxpc3QtaXRlbScse2tleTooXCJpdGVtLVwiICsgaSksYXR0cnM6e1widmFsdWVcIjpfaXRlbSxcImFjdGl2ZS1jbGFzc1wiOlwiZGVlcC1wdXJwbGUtLXRleHQgdGV4dC0tYWNjZW50LTRcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwiZGVmYXVsdFwiLGZuOmZ1bmN0aW9uKHJlZil7XG52YXIgYWN0aXZlID0gcmVmLmFjdGl2ZTtcbnZhciB0b2dnbGUgPSByZWYudG9nZ2xlO1xucmV0dXJuIFtfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtY2hlY2tib3gnLHthdHRyczp7XCJpbnB1dC12YWx1ZVwiOmFjdGl2ZSxcInRydWUtdmFsdWVcIjpfaXRlbSxcImNvbG9yXCI6XCJkZWVwLXB1cnBsZSBhY2NlbnQtNFwifSxvbjp7XCJjbGlja1wiOnRvZ2dsZX19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tY29udGVudCcsW19jKCd2LWxpc3QtaXRlbS10aXRsZScsW192bS5fdihfdm0uX3MoX2l0ZW0ubmFtZSkpXSldLDEpLF92bS5fdihcIiBcIiksKF9pdGVtLnByaWNlPjApP19jKCd2LWxpc3QtaXRlbS1hY3Rpb24tdGV4dCcsW192bS5fdihcIiArIFwiK192bS5fcyhfdm0uX2YoXCJ0b1BIUFwiKShfaXRlbS5wcmljZSkpK1wiIFwiKV0pOl92bS5fZSgpXX19XSxudWxsLHRydWUpfSldfSldLDIpXSwxKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpXSwxKX0pLF92bS5fdihcIiBcIiksX2MoJ3YtZGl2aWRlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdCcsW19jKCd2LWxpc3QtaXRlbScsW19jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KFwiU3BlY2lhbCBJbnN0cnVjdGlvblwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiIGUuZyBBbGxlcmd5IHRvIHNvbWUgaW5ncmVkaWVudHMgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi10ZXh0YXJlYScse2F0dHJzOntcIm91dGxpbmVkXCI6XCJcIixcIm5hbWVcIjpcImlucHV0LTctNFwiLFwibGFiZWxcIjpcIkluc3RydWN0aW9uXCIsXCJ2YWx1ZVwiOlwiXCIsXCJwbGFjZWhvbGRlclwiOlwiUGxlYXNlIHByb3ZpZGUgaW5zdHJ1Y3Rpb24gaWYgYW55XCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmluc3RydWN0aW9ucyksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5pbnN0cnVjdGlvbnM9JCR2fSxleHByZXNzaW9uOlwiaW5zdHJ1Y3Rpb25zXCJ9fSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi10b29sYmFyJyx7c3RhdGljQ2xhc3M6XCJzaG9wcmVzcG9uc2l2ZVwiLGF0dHJzOntcImRlbnNlXCI6XCJcIixcIm1heC13aWR0aFwiOlwiMTAwJVwifX0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjYXB0aW9uIGdyZXktLXRleHRcIn0sW192bS5fdihcIiBRdHkgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1pY29uJyx7c3RhdGljQ2xhc3M6XCJtYS0yIHdoaXRlLS10ZXh0XCIsYXR0cnM6e1wiY29sb3JcIjpcImdyZWVuXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0ucXR5ID0gX3ZtLnF0eSA8IDEgPyAxIDogX3ZtLnF0eSAtIDF9fX0sW192bS5fdihcIiBtZGktbWludXMgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0ucXR5KSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWljb24nLHtzdGF0aWNDbGFzczpcIm1hLTIgd2hpdGUtLXRleHRcIixhdHRyczp7XCJjb2xvclwiOlwiZ3JlZW5cIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5xdHkgPSBfdm0ucXR5ICsgMX19fSxbX3ZtLl92KFwiIG1kaS1wbHVzIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImNhcHRpb24gZ3JleS0tdGV4dFwifSxbX3ZtLl92KFwiVG90YWxcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1sLTIgcmVkLS10ZXh0IHN1YnRpdGxlLTFcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRvUEhQXCIpKF92bS5jb21wdXRlVG90YWwoX3ZtLmFkZFRvQ2FydEl0ZW0pKSkrXCIgXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1widGlsZVwiOlwiXCIsXCJkaXNhYmxlZFwiOl92bS5xdHkgPCAxLFwib3V0bGluZWRcIjpcIlwiLFwiY29sb3JcIjpcInJlZFwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uYWRkVG9DYXJ0KCRldmVudCl9fX0sW192bS5fdihcIiBBZGQgdG8gQ2FydCBcIildKV0sMSldLDIpXSwxKV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygndi1zbmFja2Jhcicse2F0dHJzOntcImNvbG9yXCI6XCJibHVlXCIsXCJ0aW1lb3V0XCI6X3ZtLnRpbWVvdXR9LG1vZGVsOnt2YWx1ZTooX3ZtLnNuYWNrYmFyKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnNuYWNrYmFyPSQkdn0sZXhwcmVzc2lvbjpcInNuYWNrYmFyXCJ9fSxbX3ZtLl92KFwiIEl0ZW0gYWRkZWQgdG8gY2FydCBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXJvdycse2F0dHJzOntcImp1c3RpZnlcIjpcImNlbnRlclwifX0sW19jKCd2LWRpYWxvZycse2F0dHJzOntcInBlcnNpc3RlbnRcIjpcIlwiLFwibWF4LXdpZHRoXCI6XCIyOTBcIn0sbW9kZWw6e3ZhbHVlOihfdm0uaXNFeGlzdCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5pc0V4aXN0PSQkdn0sZXhwcmVzc2lvbjpcImlzRXhpc3RcIn19LFtfYygndi1jYXJkJyxbX2MoJ3YtY2FyZC10aXRsZScse3N0YXRpY0NsYXNzOlwiaGVhZGxpbmVcIn0sW192bS5fdihcIiBEaWZmZXJlbnQgU3RvcmUgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLXRleHQnLFtfdm0uX3YoXCIgVGhlcmUgYXJlIGl0ZW1zIGluIHlvdXIgY2FydCBmcm9tIGRpZmZlcmVudCBtZXJjaGFudC4gRG8geW91IHdhbnQgcmVwbGFjZSBjYXJ0IGl0ZW0/IFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwiZ3JlZW4gZGFya2VuLTFcIixcInRleHRcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmlzRXhpc3QgPSBmYWxzZX19fSxbX3ZtLl92KFwiIENhbmNlbCBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJncmVlbiBkYXJrZW4tMVwiLFwidGV4dFwiOlwiXCJ9LG9uOntcImNsaWNrXCI6X3ZtLnNhdmVJc0V4aXN0fX0sW192bS5fdihcIiBPayBcIildKV0sMSldLDEpXSwxKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPHYtY2FyZCBtYXgtd2lkdGg9XCIxMDAlXCIgb3V0bGluZWQgQGNsaWNrLnN0b3A9XCJjdXJyZW50X2RhdGEgPWl0ZW0gLCBnZW5lcmF0ZUFkZE9ucygpLCBkaWFsb2cgPSB0cnVlXCI+XG4gICAgICAgIDx2LXNrZWxldG9uLWxvYWRlciA6Ym9pbGVycGxhdGU9XCIhaXNMb2FkZWRcIiB0eXBlPVwibGlzdC1pdGVtLXRocmVlLWxpbmVcIiB2LWlmPVwiIWlzTG9hZGVkXCIgY2xhc3M9XCJteC1hdXRvXCI+PC92LXNrZWxldG9uLWxvYWRlcj5cbiAgICAgICAgPHYtbGlzdC1pdGVtIGRlbnNlIHYtaWY9XCJpc0xvYWRlZFwiPlxuICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgaXRlbS5uYW1lIH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXN0eWxlOml0YWxpYztcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHYtaHRtbD1cIml0ZW0uZGVzY1wiPjwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBncmV5LS10ZXh0XCI+RnJvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtMiByZWQtLXRleHQgc3VidGl0bGUtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGl0ZW0uYmFzZV9wcmljZSB8IHRvUEhQIH19IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWF2YXRhciB2LWlmPVwiaXRlbS5pbWcubGVuZ3RoPjBcIiB0aWxlIHNpemU9XCIxMDBcIj5cbiAgICAgICAgICAgICAgICA8di1pbWcgOnNyYz1cIml0ZW0uaW1nXCI+PC92LWltZz5cbiAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYXZhdGFyPlxuICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICA8di1yb3cgdi1pZj1cIiFpc0VtcHR5KGN1cnJlbnRfZGF0YSlcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIGZ1bGxzY3JlZW4gaGlkZS1vdmVybGF5IHRyYW5zaXRpb249XCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgICA8di1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyIGRhcmsgY29sb3I9XCJyZ2JhKDEwMCwxMTUsMjAxKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gZGFyayBAY2xpY2s9XCJkaWFsb2cgPSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWNsb3NlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5BZGQgdG8gQ2FydDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyIC8+IDwvdi10b29sYmFyPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgY3VycmVudF9kYXRhLm5hbWUgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uIGdyZXktLXRleHRcIj5Gcm9tPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZC0tdGV4dFwiPnt7IGN1cnJlbnRfZGF0YS5iYXNlX3ByaWNlIHwgdG9QSFAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjdXJyZW50X2RhdGEub3B0aW9uc1wiIDprZXk9XCJpbmRleFwiIGRlbnNlIGZsYXQgc3ViaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIHYtaWY9XCJpdGVtLm1pbiA9PSAxICYmIGl0ZW0ubWF4ID09IDFcIiBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7IGl0ZW0ubmFtZSB9fTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5PbmUgaXMgcmVxdWlyZWQ8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IGZsYXQgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tZ3JvdXAgdi1tb2RlbD1cImFkZF9vbl9kYXRhW2l0ZW0ubmFtZS5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKCldXCIgbWFuZGF0b3J5IGNvbG9yPVwiZGVlcC1wdXJwbGUgYWNjZW50LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gdi1mb3I9XCIoaSwgZSkgaW4gaXRlbS52YWx1ZXNcIiA6a2V5PVwiZStpbmRleFwiIDp2YWx1ZT1cImlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+e3tpLm5hbWV9fTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbi10ZXh0IHYtaWY9XCJpLnByaWNlPjBcIj4gKyB7e2kucHJpY2V8dG9QSFB9fSA8L3YtbGlzdC1pdGVtLWFjdGlvbi10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIHYtaWY9XCJpdGVtLm1heCA+IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPiB7eyBpdGVtLm5hbWUgfX0gLSBPcHRpb25hbCA8L3YtbGlzdC1pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tc3VidGl0bGU+IFNlbGVjdCB1cCB0byB7eyBpdGVtLm1heCB9fSA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0IGZsYXQgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tZ3JvdXAgdi1tb2RlbD1cImFkZF9vbl9kYXRhW2l0ZW0ubmFtZS5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKCldXCIgbXVsdGlwbGUgOm1pbj1cIml0ZW0ubWluXCIgOm1heD1cIml0ZW0ubWF4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKF9pdGVtLCBpKSBpbiBpdGVtLnZhbHVlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIHYtaWY9XCIhX2l0ZW1cIiA6a2V5PVwiYGRpdmlkZXItJHtpfWBcIj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIHYtZWxzZSA6a2V5PVwiYGl0ZW0tJHtpfWBcIiA6dmFsdWU9XCJfaXRlbVwiIGFjdGl2ZS1jbGFzcz1cImRlZXAtcHVycGxlLS10ZXh0IHRleHQtLWFjY2VudC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmRlZmF1bHQ9XCJ7IGFjdGl2ZSwgdG9nZ2xlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jaGVja2JveCA6aW5wdXQtdmFsdWU9XCJhY3RpdmVcIiA6dHJ1ZS12YWx1ZT1cIl9pdGVtXCIgY29sb3I9XCJkZWVwLXB1cnBsZSBhY2NlbnQtNFwiIEBjbGljaz1cInRvZ2dsZVwiPjwvdi1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7X2l0ZW0ubmFtZX19PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWFjdGlvbi10ZXh0IHYtaWY9XCJfaXRlbS5wcmljZT4wXCI+ICsge3tfaXRlbS5wcmljZXx0b1BIUH19IDwvdi1saXN0LWl0ZW0tYWN0aW9uLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciAvPiA8L3YtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8di1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGU+U3BlY2lhbCBJbnN0cnVjdGlvbjwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT4gZS5nIEFsbGVyZ3kgdG8gc29tZSBpbmdyZWRpZW50cyA8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0YXJlYSB2LW1vZGVsPVwiaW5zdHJ1Y3Rpb25zXCIgb3V0bGluZWQgbmFtZT1cImlucHV0LTctNFwiIGxhYmVsPVwiSW5zdHJ1Y3Rpb25cIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHByb3ZpZGUgaW5zdHJ1Y3Rpb24gaWYgYW55XCIgLz4gPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXIgZGVuc2UgbWF4LXdpZHRoPVwiMTAwJVwiIGNsYXNzPVwic2hvcHJlc3BvbnNpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBncmV5LS10ZXh0XCI+IFF0eSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNsYXNzPVwibWEtMiB3aGl0ZS0tdGV4dFwiIGNvbG9yPVwiZ3JlZW5cIiBAY2xpY2s9XCJxdHkgPSBxdHkgPCAxID8gMSA6IHF0eSAtIDFcIj4gbWRpLW1pbnVzIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57eyBxdHkgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY2xhc3M9XCJtYS0yIHdoaXRlLS10ZXh0XCIgY29sb3I9XCJncmVlblwiIEBjbGljaz1cInF0eSA9IHF0eSArIDFcIj4gbWRpLXBsdXMgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb24gZ3JleS0tdGV4dFwiPlRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTIgcmVkLS10ZXh0IHN1YnRpdGxlLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGNvbXB1dGVUb3RhbChhZGRUb0NhcnRJdGVtKSB8IHRvUEhQIH19IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB0aWxlIDpkaXNhYmxlZD1cInF0eSA8IDFcIiBvdXRsaW5lZCBjb2xvcj1cInJlZFwiIEBjbGljay5zdG9wPVwiYWRkVG9DYXJ0XCI+IEFkZCB0byBDYXJ0IDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPHYtc25hY2tiYXIgdi1tb2RlbD1cInNuYWNrYmFyXCIgY29sb3I9XCJibHVlXCIgOnRpbWVvdXQ9XCJ0aW1lb3V0XCI+IEl0ZW0gYWRkZWQgdG8gY2FydCA8L3Ytc25hY2tiYXI+XG4gICAgICAgIDx2LXJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImlzRXhpc3RcIiBwZXJzaXN0ZW50IG1heC13aWR0aD1cIjI5MFwiPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XCJoZWFkbGluZVwiPiBEaWZmZXJlbnQgU3RvcmUgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD4gVGhlcmUgYXJlIGl0ZW1zIGluIHlvdXIgY2FydCBmcm9tIGRpZmZlcmVudCBtZXJjaGFudC4gRG8geW91IHdhbnQgcmVwbGFjZSBjYXJ0IGl0ZW0/IDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiB0ZXh0IEBjbGljaz1cImlzRXhpc3QgPSBmYWxzZVwiPiBDYW5jZWwgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJzYXZlSXNFeGlzdFwiPiBPayA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgPC92LXJvdz5cbiAgICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGRlZXBjbG9uZSBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGlkOiBTdHJpbmcsXG4gICAgICAgIG1lcmNoYW50OiBPYmplY3RcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGFkZFRvQ2FydEl0ZW0oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBpbmZvOiB0aGlzLmN1cnJlbnRfZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcXR5OiB0aGlzLnF0eSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX29uczogdGhpcy5hZGRDbGVhbih0aGlzLmFkZF9vbl9kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiB0aGlzLmluc3RydWN0aW9uc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhcnRNZXJjaGFudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjYXJ0L2dldFN0b3JlSUQnXVxuICAgICAgICB9LFxuICAgICAgICBjYXJ0U2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjYXJ0L2dldENhcnRJdGVtQ291bnQnXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGJhc2VfcHJpY2U6IDAsXG4gICAgICAgICAgICAgICAgaW1nOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnRfZGF0YToge30sXG4gICAgICAgICAgICBmb29kZGF0YToge30sXG4gICAgICAgICAgICBxdHk6IDEsXG4gICAgICAgICAgICBzbmFja2JhcjogZmFsc2UsXG4gICAgICAgICAgICBhZGRfb25fZGF0YToge30sXG4gICAgICAgICAgICB0aW1lb3V0OiAyNTAwLFxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgc291bmQ6IHRydWUsXG4gICAgICAgICAgICB3aWRnZXRzOiBmYWxzZSxcbiAgICAgICAgICAgIHJhZGlvczogdHJ1ZSxcbiAgICAgICAgICAgIGluc3RydWN0aW9uczogJycsXG4gICAgICAgICAgICBpc0V4aXN0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmdldEl0ZW0oKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyBnZXRJdGVtKCkge1xuICAgICAgICAgICAgbGV0IGZvb2RpdGVtID0gYXdhaXQgdGhpcy4kZmlyZVN0b3JlT2JqKCkuY29sbGVjdGlvbignZm9vZHMnKS5kb2ModGhpcy5pZCkuZ2V0KClcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGZvb2RpdGVtLmRhdGEoKVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYWRkQ2xlYW4oZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IGRlZXBjbG9uZShkYXRhKVxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoIDw9IDApIGRlbGV0ZSBkYXRhW2tleV1cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDAgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIGRlbGV0ZSBkYXRhW2tleV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9LFxuICAgICAgICBpc0VtcHR5KG9iaikge1xuICAgICAgICAgICAgY29uc3Qgb2IgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYikge1xuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzYXZlSXNFeGlzdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFeGlzdCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NhcnQvY2xlYXJDYXJ0JylcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYnVzaW5lc3M6IHRoaXMubWVyY2hhbnQsXG4gICAgICAgICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgICAgICAgICBpbmZvOiB0aGlzLmN1cnJlbnRfZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcXR5OiB0aGlzLnF0eSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX29uczogdGhpcy5hZGRDbGVhbih0aGlzLmFkZF9vbl9kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiB0aGlzLmluc3RydWN0aW9uc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGZpcmVBbmFseXRpY3MubG9nRXZlbnQoJ2FkZF90b19jYXJ0Jywge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNvbXB1dGVUb3RhbChkYXRhLml0ZW0pLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnUEhQJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW2RhdGEuaXRlbV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NhcnQvYWRkJywgZGF0YSlcbiAgICAgICAgICAgIHRoaXMuc25hY2tiYXIgPSB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFRvQ2FydCgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcbiAgICAgICAgICAgIGlmICh0aGlzLm1lcmNoYW50LmlkID09PSB0aGlzLmNhcnRNZXJjaGFudC5pZCB8fCB0aGlzLmNhcnRTaXplIDwgMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzOiB0aGlzLm1lcmNoYW50LFxuICAgICAgICAgICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvOiB0aGlzLmN1cnJlbnRfZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogdGhpcy5xdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfb25zOiB0aGlzLmFkZENsZWFuKHRoaXMuYWRkX29uX2RhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiB0aGlzLmluc3RydWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGZpcmVBbmFseXRpY3MubG9nRXZlbnQoJ2FkZF90b19jYXJ0Jywge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5jb21wdXRlVG90YWwoZGF0YS5pdGVtKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6ICdQSFAnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW2RhdGEuaXRlbV1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2FydC9hZGQnLCBkYXRhKVxuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFeGlzdCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZVRvdGFsKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBpdGVtLmluZm8uYmFzZV9wcmljZSAqIGl0ZW0ucXR5XG4gICAgICAgICAgICBjb25zdCBhZGRvbnMgPSBPYmplY3QudmFsdWVzKGl0ZW0uYWRkX29ucylcbiAgICAgICAgICAgIGFkZG9ucy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5mb3JFYWNoKChiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgYi5wcmljZSAqIGl0ZW0ucXR5XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIGEucHJpY2UgKiBpdGVtLnF0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gdG90YWxcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVGaWx0ZXIoaXRlbSkge1xuICAgICAgICAgICAgbGV0IGkgPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KGkucHJpY2UpXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVBIJywge1xuICAgICAgICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnUEhQJyxcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lEaXNwbGF5OiAnc3ltYm9sJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IHZ2ID0gZm9ybWF0dGVyLmZvcm1hdChNYXRoLnJvdW5kKHZhbHVlKSlcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IDApIGkubmFtZSA9IGkubmFtZSArICcoKyAnICsgdnYgKyAnKSdcbiAgICAgICAgICAgIHJldHVybiBpLm5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVBZGRPbnMoKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRvbnMgPSB7fVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRfZGF0YS5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYWRkb25zW3RoaXMuY3VycmVudF9kYXRhLm9wdGlvbnNbaV0ubmFtZS5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKCldID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkX29uX2RhdGEgPSBhZGRvbnNcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9vZENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvb2RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZTa2VsZXRvbkxvYWRlci5zYXNzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBFbGV2YXRhYmxlIGZyb20gJy4uLy4uL21peGlucy9lbGV2YXRhYmxlJ1xuaW1wb3J0IE1lYXN1cmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL21lYXN1cmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IgfSBmcm9tICd2dWUvdHlwZXMvb3B0aW9ucydcblxuZXhwb3J0IGludGVyZmFjZSBIVE1MU2tlbGV0b25Mb2FkZXJFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfaW5pdGlhbFN0eWxlPzoge1xuICAgIGRpc3BsYXk6IHN0cmluZyB8IG51bGxcbiAgICB0cmFuc2l0aW9uOiBzdHJpbmdcbiAgfVxufVxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFxuICBFbGV2YXRhYmxlLFxuICBNZWFzdXJhYmxlLFxuICBUaGVtZWFibGUsXG4pLmV4dGVuZCh7XG4gIG5hbWU6ICdWU2tlbGV0b25Mb2FkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgYm9pbGVycGxhdGU6IEJvb2xlYW4sXG4gICAgbG9hZGluZzogQm9vbGVhbixcbiAgICB0aWxlOiBCb29sZWFuLFxuICAgIHRyYW5zaXRpb246IFN0cmluZyxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdHlwZXM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSksXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgYXR0cnMgKCk6IG9iamVjdCB7XG4gICAgICBpZiAoIXRoaXMuaXNMb2FkaW5nKSByZXR1cm4gdGhpcy4kYXR0cnNcblxuICAgICAgcmV0dXJuICF0aGlzLmJvaWxlcnBsYXRlID8ge1xuICAgICAgICAnYXJpYS1idXN5JzogdHJ1ZSxcbiAgICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxuICAgICAgICByb2xlOiAnYWxlcnQnLFxuICAgICAgICAuLi50aGlzLiRhdHRycyxcbiAgICAgIH0gOiB7fVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2LXNrZWxldG9uLWxvYWRlci0tYm9pbGVycGxhdGUnOiB0aGlzLmJvaWxlcnBsYXRlLFxuICAgICAgICAndi1za2VsZXRvbi1sb2FkZXItLWlzLWxvYWRpbmcnOiB0aGlzLmlzTG9hZGluZyxcbiAgICAgICAgJ3Ytc2tlbGV0b24tbG9hZGVyLS10aWxlJzogdGhpcy50aWxlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgICAgLi4udGhpcy5lbGV2YXRpb25DbGFzc2VzLFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNMb2FkaW5nICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhKCdkZWZhdWx0JyBpbiB0aGlzLiRzY29wZWRTbG90cykgfHwgdGhpcy5sb2FkaW5nXG4gICAgfSxcbiAgICByb290VHlwZXMgKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aW9uczogJ2J1dHRvbkAyJyxcbiAgICAgICAgYXJ0aWNsZTogJ2hlYWRpbmcsIHBhcmFncmFwaCcsXG4gICAgICAgIGF2YXRhcjogJ2F2YXRhcicsXG4gICAgICAgIGJ1dHRvbjogJ2J1dHRvbicsXG4gICAgICAgIGNhcmQ6ICdpbWFnZSwgY2FyZC1oZWFkaW5nJyxcbiAgICAgICAgJ2NhcmQtYXZhdGFyJzogJ2ltYWdlLCBsaXN0LWl0ZW0tYXZhdGFyJyxcbiAgICAgICAgJ2NhcmQtaGVhZGluZyc6ICdoZWFkaW5nJyxcbiAgICAgICAgY2hpcDogJ2NoaXAnLFxuICAgICAgICAnZGF0ZS1waWNrZXInOiAnbGlzdC1pdGVtLCBjYXJkLWhlYWRpbmcsIGRpdmlkZXIsIGRhdGUtcGlja2VyLW9wdGlvbnMsIGRhdGUtcGlja2VyLWRheXMsIGFjdGlvbnMnLFxuICAgICAgICAnZGF0ZS1waWNrZXItb3B0aW9ucyc6ICd0ZXh0LCBhdmF0YXJAMicsXG4gICAgICAgICdkYXRlLXBpY2tlci1kYXlzJzogJ2F2YXRhckAyOCcsXG4gICAgICAgIGhlYWRpbmc6ICdoZWFkaW5nJyxcbiAgICAgICAgaW1hZ2U6ICdpbWFnZScsXG4gICAgICAgICdsaXN0LWl0ZW0nOiAndGV4dCcsXG4gICAgICAgICdsaXN0LWl0ZW0tYXZhdGFyJzogJ2F2YXRhciwgdGV4dCcsXG4gICAgICAgICdsaXN0LWl0ZW0tdHdvLWxpbmUnOiAnc2VudGVuY2VzJyxcbiAgICAgICAgJ2xpc3QtaXRlbS1hdmF0YXItdHdvLWxpbmUnOiAnYXZhdGFyLCBzZW50ZW5jZXMnLFxuICAgICAgICAnbGlzdC1pdGVtLXRocmVlLWxpbmUnOiAncGFyYWdyYXBoJyxcbiAgICAgICAgJ2xpc3QtaXRlbS1hdmF0YXItdGhyZWUtbGluZSc6ICdhdmF0YXIsIHBhcmFncmFwaCcsXG4gICAgICAgIHBhcmFncmFwaDogJ3RleHRAMycsXG4gICAgICAgIHNlbnRlbmNlczogJ3RleHRAMicsXG4gICAgICAgIHRhYmxlOiAndGFibGUtaGVhZGluZywgdGFibGUtdGhlYWQsIHRhYmxlLXRib2R5LCB0YWJsZS10Zm9vdCcsXG4gICAgICAgICd0YWJsZS1oZWFkaW5nJzogJ2hlYWRpbmcsIHRleHQnLFxuICAgICAgICAndGFibGUtdGhlYWQnOiAnaGVhZGluZ0A2JyxcbiAgICAgICAgJ3RhYmxlLXRib2R5JzogJ3RhYmxlLXJvdy1kaXZpZGVyQDYnLFxuICAgICAgICAndGFibGUtcm93LWRpdmlkZXInOiAndGFibGUtcm93LCBkaXZpZGVyJyxcbiAgICAgICAgJ3RhYmxlLXJvdyc6ICd0YWJsZS1jZWxsQDYnLFxuICAgICAgICAndGFibGUtY2VsbCc6ICd0ZXh0JyxcbiAgICAgICAgJ3RhYmxlLXRmb290JzogJ3RleHRAMiwgYXZhdGFyQDInLFxuICAgICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICAgIC4uLnRoaXMudHlwZXMsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQm9uZSAodGV4dDogc3RyaW5nLCBjaGlsZHJlbjogVk5vZGVbXSkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LXNrZWxldG9uLWxvYWRlcl9fJHt0ZXh0fSB2LXNrZWxldG9uLWxvYWRlcl9fYm9uZWAsXG4gICAgICB9LCBjaGlsZHJlbilcbiAgICB9LFxuICAgIGdlbkJvbmVzIChib25lOiBzdHJpbmcpOiBWTm9kZVtdIHtcbiAgICAgIC8vIGUuZy4gJ3RleHRAMydcbiAgICAgIGNvbnN0IFt0eXBlLCBsZW5ndGhdID0gYm9uZS5zcGxpdCgnQCcpIGFzIFtzdHJpbmcsIG51bWJlcl1cbiAgICAgIGNvbnN0IGdlbmVyYXRvciA9ICgpID0+IHRoaXMuZ2VuU3RydWN0dXJlKHR5cGUpXG5cbiAgICAgIC8vIEdlbmVyYXRlIGEgbGVuZ3RoIGFycmF5IGJhc2VkIHVwb25cbiAgICAgIC8vIHZhbHVlIGFmdGVyIEAgaW4gdGhlIGJvbmUgc3RyaW5nXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aCB9KS5tYXAoZ2VuZXJhdG9yKVxuICAgIH0sXG4gICAgLy8gRml4IHR5cGUgd2hlbiB0aGlzIGlzIG1lcmdlZFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9wdWxsLzMzMDUwXG4gICAgZ2VuU3RydWN0dXJlICh0eXBlPzogc3RyaW5nKTogYW55IHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IFtdXG4gICAgICB0eXBlID0gdHlwZSB8fCB0aGlzLnR5cGUgfHwgJydcbiAgICAgIGNvbnN0IGJvbmUgPSB0aGlzLnJvb3RUeXBlc1t0eXBlXSB8fCAnJ1xuXG4gICAgICAvLyBFbmQgb2YgcmVjdXJzaW9uLCBkbyBub3RoaW5nXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHksIGJyYWNlLXN0eWxlICovXG4gICAgICBpZiAodHlwZSA9PT0gYm9uZSkge31cbiAgICAgIC8vIEFycmF5IG9mIHZhbHVlcyAtIGUuZy4gJ2hlYWRpbmcsIHBhcmFncmFwaCwgdGV4dEAyJ1xuICAgICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCcsJykgPiAtMSkgcmV0dXJuIHRoaXMubWFwQm9uZXModHlwZSlcbiAgICAgIC8vIEFycmF5IG9mIHZhbHVlcyAtIGUuZy4gJ3BhcmFncmFwaEA0J1xuICAgICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdAJykgPiAtMSkgcmV0dXJuIHRoaXMuZ2VuQm9uZXModHlwZSlcbiAgICAgIC8vIEFycmF5IG9mIHZhbHVlcyAtIGUuZy4gJ2NhcmRAMidcbiAgICAgIGVsc2UgaWYgKGJvbmUuaW5kZXhPZignLCcpID4gLTEpIGNoaWxkcmVuID0gdGhpcy5tYXBCb25lcyhib25lKVxuICAgICAgLy8gQXJyYXkgb2YgdmFsdWVzIC0gZS5nLiAnbGlzdC1pdGVtQDInXG4gICAgICBlbHNlIGlmIChib25lLmluZGV4T2YoJ0AnKSA+IC0xKSBjaGlsZHJlbiA9IHRoaXMuZ2VuQm9uZXMoYm9uZSlcbiAgICAgIC8vIFNpbmdsZSB2YWx1ZSAtIGUuZy4gJ2NhcmQtaGVhZGluZydcbiAgICAgIGVsc2UgaWYgKGJvbmUpIGNoaWxkcmVuLnB1c2godGhpcy5nZW5TdHJ1Y3R1cmUoYm9uZSkpXG5cbiAgICAgIHJldHVybiBbdGhpcy5nZW5Cb25lKHR5cGUsIGNoaWxkcmVuKV1cbiAgICB9LFxuICAgIGdlblNrZWxldG9uICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cblxuICAgICAgaWYgKCF0aGlzLmlzTG9hZGluZykgY2hpbGRyZW4ucHVzaChnZXRTbG90KHRoaXMpKVxuICAgICAgZWxzZSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuU3RydWN0dXJlKCkpXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbikgcmV0dXJuIGNoaWxkcmVuXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbicsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLnRyYW5zaXRpb24sXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE9ubHkgc2hvdyB0cmFuc2l0aW9uIHdoZW5cbiAgICAgICAgLy8gY29udGVudCBoYXMgYmVlbiBsb2FkZWRcbiAgICAgICAgb246IHtcbiAgICAgICAgICBhZnRlckVudGVyOiB0aGlzLnJlc2V0U3R5bGVzLFxuICAgICAgICAgIGJlZm9yZUVudGVyOiB0aGlzLm9uQmVmb3JlRW50ZXIsXG4gICAgICAgICAgYmVmb3JlTGVhdmU6IHRoaXMub25CZWZvcmVMZWF2ZSxcbiAgICAgICAgICBsZWF2ZUNhbmNlbGxlZDogdGhpcy5yZXNldFN0eWxlcyxcbiAgICAgICAgfSxcbiAgICAgIH0sIGNoaWxkcmVuKVxuICAgIH0sXG4gICAgbWFwQm9uZXMgKGJvbmVzOiBzdHJpbmcpIHtcbiAgICAgIC8vIFJlbW92ZSBzcGFjZXMgYW5kIHJldHVybiBhcnJheSBvZiBzdHJ1Y3R1cmVzXG4gICAgICByZXR1cm4gYm9uZXMucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpLm1hcCh0aGlzLmdlblN0cnVjdHVyZSlcbiAgICB9LFxuICAgIG9uQmVmb3JlRW50ZXIgKGVsOiBIVE1MU2tlbGV0b25Mb2FkZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlc2V0U3R5bGVzKGVsKVxuXG4gICAgICBpZiAoIXRoaXMuaXNMb2FkaW5nKSByZXR1cm5cblxuICAgICAgZWwuX2luaXRpYWxTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogZWwuc3R5bGUuZGlzcGxheSxcbiAgICAgICAgdHJhbnNpdGlvbjogZWwuc3R5bGUudHJhbnNpdGlvbixcbiAgICAgIH1cblxuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCAnbm9uZScsICdpbXBvcnRhbnQnKVxuICAgIH0sXG4gICAgb25CZWZvcmVMZWF2ZSAoZWw6IEhUTUxTa2VsZXRvbkxvYWRlckVsZW1lbnQpIHtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnLCAnaW1wb3J0YW50JylcbiAgICB9LFxuICAgIHJlc2V0U3R5bGVzIChlbDogSFRNTFNrZWxldG9uTG9hZGVyRWxlbWVudCkge1xuICAgICAgaWYgKCFlbC5faW5pdGlhbFN0eWxlKSByZXR1cm5cblxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9pbml0aWFsU3R5bGUuZGlzcGxheSB8fCAnJ1xuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IGVsLl9pbml0aWFsU3R5bGUudHJhbnNpdGlvblxuXG4gICAgICBkZWxldGUgZWwuX2luaXRpYWxTdHlsZVxuICAgIH0sXG4gIH0sXG5cbiAgcmVuZGVyIChoKTogVk5vZGUge1xuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc2tlbGV0b24tbG9hZGVyJyxcbiAgICAgIGF0dHJzOiB0aGlzLmF0dHJzLFxuICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZTogdGhpcy5pc0xvYWRpbmcgPyB0aGlzLm1lYXN1cmFibGVTdHlsZXMgOiB1bmRlZmluZWQsXG4gICAgfSwgW3RoaXMuZ2VuU2tlbGV0b24oKV0pXG4gIH0sXG59KVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Gb29kQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGZhMzJkMjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRm9vZENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Gb29kQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImQxNWRhNzk0XCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRBY3Rpb25zIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRleHQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDaGVja2JveCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNoZWNrYm94JztcbmltcG9ydCB7IFZEaWFsb2cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEaWFsb2cnO1xuaW1wb3J0IHsgVkRpdmlkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEaXZpZGVyJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSW1nJztcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUFjdGlvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQWN0aW9uVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Db250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Hcm91cCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbVRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWUm93IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWU2tlbGV0b25Mb2FkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTa2VsZXRvbkxvYWRlcic7XG5pbXBvcnQgeyBWU25hY2tiYXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTbmFja2Jhcic7XG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWVGV4dGFyZWEgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUZXh0YXJlYSc7XG5pbXBvcnQgeyBWVG9vbGJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRvb2xiYXInO1xuaW1wb3J0IHsgVlRvb2xiYXJUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRvb2xiYXInO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZDYXJkVGl0bGUsVkNoZWNrYm94LFZEaWFsb2csVkRpdmlkZXIsVkljb24sVkltZyxWTGlzdCxWTGlzdEl0ZW0sVkxpc3RJdGVtQWN0aW9uLFZMaXN0SXRlbUFjdGlvblRleHQsVkxpc3RJdGVtQXZhdGFyLFZMaXN0SXRlbUNvbnRlbnQsVkxpc3RJdGVtR3JvdXAsVkxpc3RJdGVtU3VidGl0bGUsVkxpc3RJdGVtVGl0bGUsVlJvdyxWU2tlbGV0b25Mb2FkZXIsVlNuYWNrYmFyLFZTcGFjZXIsVlRleHRhcmVhLFZUb29sYmFyLFZUb29sYmFyVGl0bGV9KVxuIiwiPHRlbXBsYXRlPlxuICAgIDx2LWNhcmQgZmxhdD5cbiAgICAgICAgPHYtbGF5b3V0IHdyYXAgYWxpZ24tY2VudGVyPlxuICAgICAgICAgICAgPHYtZmxleCB2LWZvcj1cIml0ZW0gaW4gZGF0YS52YWx1ZXNcIiA6a2V5PVwiZGF0YS5uYW1lICsgJ18nICsgaXRlbVwiIHhzMTIgbWQ0IHNtNCBsZzQgY2xhc3M9XCJwYS0xXCI+XG4gICAgICAgICAgICAgICAgPHYtbGF6eSB2LW1vZGVsPVwiaXNBY3RpdmVcIiA6b3B0aW9ucz1cInt0aHJlc2hvbGQ6IC42fVwiIHRyYW5zaXRpb249XCJmYWRlLXRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvb2QtY2FyZCA6aWQ9XCJpdGVtXCIgOm1lcmNoYW50PVwibWVyY2hhbnRcIj48L2Zvb2QtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtbGF6eT5cbiAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgIDwvdi1jYXJkPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmltcG9ydCBGb29kQ2FyZCBmcm9tICd+L2NvbXBvbmVudHMvRm9vZENhcmQnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBGb29kQ2FyZFxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtZXJjaGFudDoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Gb29kSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2QxYmRiOWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRm9vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Gb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjQ0MDMxYThlXCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWTGF6eSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxhenknO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkNhcmQsVkZsZXgsVkxheW91dCxWTGF6eX0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMy1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bnRpdGxlZF9iYWNrdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTcyMjBkZDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1hcHAnLHthdHRyczp7XCJpZFwiOlwiZTNcIn19LFtfYygnbG9hZGluZycse2F0dHJzOntcImFjdGl2ZVwiOl92bS5pc0xvYWRpbmcsXCJsb2FkZXJcIjpcImJhcnNcIixcImlzLWZ1bGwtcGFnZVwiOnRydWUsXCJjb2xvclwiOlwiYmx1ZVwifSxvbjp7XCJ1cGRhdGU6YWN0aXZlXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNMb2FkaW5nPSRldmVudH19fSksX3ZtLl92KFwiIFwiKSxfYygndi1hcHAtYmFyJyx7YXR0cnM6e1wiY29sb3JcIjpcIiMwMGFmZjBcIixcImRhcmtcIjpcIlwiLFwic2hyaW5rLW9uLXNjcm9sbFwiOlwiXCIsXCJwcm9taW5lbnRcIjpcIlwiLFwic3JjXCI6X3ZtLmJ1c2luZXNzLmJhY2tkcm9wLFwiZmFkZS1pbWctb24tc2Nyb2xsXCI6XCJcIixcInNjcm9sbC10YXJnZXRcIjpcIiNzY3JvbGxpbmctdGVjaG5pcXVlcy0zXCIsXCJzY3JvbGwtdGhyZXNob2xkXCI6XCIzMDBcIixcImZpeGVkXCI6XCJcIixcImFwcFwiOlwiXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImltZ1wiLGZuOmZ1bmN0aW9uKHJlZil7XG52YXIgcHJvcHMgPSByZWYucHJvcHM7XG5yZXR1cm4gW19jKCd2LWltZycsX3ZtLl9iKHthdHRyczp7XCJncmFkaWVudFwiOlwidG8gdG9wIHJpZ2h0LCByZ2JhKDEwMCwxMTUsMjAxLC43KSwgcmdiYSgyNSwzMiw3MiwuNylcIn19LCd2LWltZycscHJvcHMsZmFsc2UpKV19fSx7a2V5OlwiZXh0ZW5zaW9uXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCd2LXRhYnMnLHthdHRyczp7XCJzaG93LWFycm93c1wiOlwiXCIsXCJjZW50ZXItYWN0aXZlXCI6XCJcIixcImNlbnRlcmVkXCI6XCJcIixcImRlbnNlXCI6XCJcIixcImJhY2tncm91bmQtY29sb3JcIjpcInRyYW5zcGFyZW50XCIsXCJjb2xvclwiOlwiYmFzaWxcIixcImdyb3dcIjpcIlwifSxtb2RlbDp7dmFsdWU6KF92bS50YWIpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0udGFiPSQkdn0sZXhwcmVzc2lvbjpcInRhYlwifX0sX3ZtLl9sKChfdm0uYnVzaW5lc3MubWVudS5maWx0ZXIoZnVuY3Rpb24gKGkpeyByZXR1cm4gaS52YWx1ZXMubGVuZ3RoPjA7IH0pKSxmdW5jdGlvbihpdGVtKXtyZXR1cm4gX2MoJ3YtdGFiJyx7a2V5Oml0ZW0ubmFtZSxhdHRyczp7XCJkZW5zZVwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7cmV0dXJuIF92bS5zY3JvbGxUbygpfX19LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGl0ZW0ubmFtZSkrXCIgXCIpXSl9KSwxKV19LHByb3h5OnRydWV9XSl9LFtfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImljb25cIjpcIlwiLFwidG9cIjpcIi9mb29kXCJ9fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIiBtZGktYXJyb3ctbGVmdC1ib2xkXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtdG9vbGJhci10aXRsZScsW192bS5fdihfdm0uX3MoX3ZtLmJ1c2luZXNzLmJ1c2luZXNzX25hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1tZW51Jyx7YXR0cnM6e1wiYm90dG9tXCI6XCJcIixcImxlZnRcIjpcIlwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJhY3RpdmF0b3JcIixmbjpmdW5jdGlvbihyZWYpe1xudmFyIG9uID0gcmVmLm9uO1xudmFyIGF0dHJzID0gcmVmLmF0dHJzO1xucmV0dXJuIFtfYygndi1idG4nLF92bS5fZyhfdm0uX2Ioe2F0dHJzOntcImRhcmtcIjpcIlwiLFwiaWNvblwiOlwiXCJ9fSwndi1idG4nLGF0dHJzLGZhbHNlKSxvbiksW19jKCd2LWljb24nLFtfdm0uX3YoXCIgbWRpLXNoYXJlLXZhcmlhbnRcIildKV0sMSldfX1dKX0sW192bS5fdihcIiBcIiksX2MoJ3YtbGlzdCcse2F0dHJzOntcIm5hdlwiOlwiXCIsXCJmbGF0XCI6XCJcIixcInNpbmdsZS1saW5lXCI6XCJcIixcImRlbnNlXCI6XCJcIn19LF92bS5fbCgoX3ZtLm5ldHdvcmtzKSxmdW5jdGlvbihuZXR3b3JrKXtyZXR1cm4gX2MoJ1NoYXJlTmV0d29yaycse2tleTpuZXR3b3JrLm5ldHdvcmssc3R5bGU6KHsgYmFja2dyb3VuZENvbG9yOiBuZXR3b3JrLmNvbG9yIH0pLGF0dHJzOntcIm5ldHdvcmtcIjpuZXR3b3JrLm5ldHdvcmssXCJ1cmxcIjpfdm0uc2hhcmluZy51cmwsXCJ0aXRsZVwiOl92bS5zaGFyaW5nLnRpdGxlLFwiZGVzY3JpcHRpb25cIjpfdm0uc2hhcmluZy5kZXNjcmlwdGlvbixcImhhc2h0YWdzXCI6X3ZtLnNoYXJpbmcuaGFzaHRhZ3N9fSxbX2MoJ3YtbGlzdC1pdGVtJyxbX2MoJ3YtbGlzdC1pdGVtLWljb24nLFtfYygndi1pY29uJyx7YXR0cnM6e1wic21hbGxcIjpcIlwiLFwiY29sb3JcIjpuZXR3b3JrLmNvbG9yfX0sW192bS5fdihcIiBcIitfdm0uX3MobmV0d29yay5pY29uKStcIiBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKG5ldHdvcmsubmFtZSkpXSldLDEpXSwxKX0pLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjbGllbnQtb25seScsWyhfdm0uY2FydFNpemUgPiAwKT9fYygndi1idG4nLHthdHRyczp7XCJpZFwiOlwiY2FydFwiLFwiaWNvblwiOlwiXCIsXCJ0b1wiOlwiL2NhcnRcIn19LFtfYygndi1iYWRnZScse2F0dHJzOntcImNvbG9yXCI6XCJyZWRcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwiYmFkZ2VcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX3ZtLl92KFwiIFwiK192bS5fcyhfdm0uY2FydFNpemUpK1wiIFwiKV19LHByb3h5OnRydWV9XSxudWxsLGZhbHNlLDEyODUwNDU4NzYpfSxbX3ZtLl92KFwiIFwiKSxfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcIndoaXRlXCIsXCJkZW5zZVwiOlwiXCJ9fSxbX3ZtLl92KFwiIG1kaS1jYXJ0LW91dGxpbmUgXCIpXSldLDEpXSwxKTpfdm0uX2UoKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3Ytc2hlZXQnLHtzdGF0aWNDbGFzczpcIm92ZXJmbG93LXktYXV0b1wiLGF0dHJzOntcImlkXCI6XCJzY3JvbGxpbmctdGVjaG5pcXVlcy0zXCIsXCJtYXgtaGVpZ2h0XCI6XCIxMDB2aFwifX0sW19jKCd2LWNvbnRhaW5lcicse2F0dHJzOntcImZsdWlkXCI6XCJcIn19LFtfYygndi1jb250ZW50JyxbX2MoJ3YtdGFicy1pdGVtcycse21vZGVsOnt2YWx1ZTooX3ZtLnRhYiksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS50YWI9JCR2fSxleHByZXNzaW9uOlwidGFiXCJ9fSxfdm0uX2woKF92bS5idXNpbmVzcy5tZW51LmZpbHRlcihmdW5jdGlvbiAoaSl7IHJldHVybiBpLnZhbHVlcy5sZW5ndGg+MDsgfSkpLGZ1bmN0aW9uKGl0ZW0pe3JldHVybiBfYygndi10YWItaXRlbScse2tleTppdGVtLm5hbWV9LFtfYygnY2xpZW50LW9ubHknLFtfYygnZm9vZC1pdGVtJyx7YXR0cnM6e1wiZGF0YVwiOml0ZW0sXCJtZXJjaGFudFwiOl92bS5idXNpbmVzc319KV0sMSldLDEpfSksMSldLDEpXSwxKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPHYtYXBwIGlkPVwiZTNcIj5cbiAgICAgICAgPGxvYWRpbmcgOmFjdGl2ZS5zeW5jPVwiaXNMb2FkaW5nXCIgbG9hZGVyPVwiYmFyc1wiIDppcy1mdWxsLXBhZ2U9XCJ0cnVlXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgICAgPHYtYXBwLWJhciBjb2xvcj1cIiMwMGFmZjBcIiBkYXJrIHNocmluay1vbi1zY3JvbGwgcHJvbWluZW50IDpzcmM9XCJidXNpbmVzcy5iYWNrZHJvcFwiIGZhZGUtaW1nLW9uLXNjcm9sbCBzY3JvbGwtdGFyZ2V0PVwiI3Njcm9sbGluZy10ZWNobmlxdWVzLTNcIiBzY3JvbGwtdGhyZXNob2xkPVwiMzAwXCIgZml4ZWQgYXBwPlxuICAgICAgICAgICAgPHRlbXBsYXRlICNpbWc9XCJ7IHByb3BzIH1cIj5cbiAgICAgICAgICAgICAgICA8di1pbWcgdi1iaW5kPVwicHJvcHNcIiBncmFkaWVudD1cInRvIHRvcCByaWdodCwgcmdiYSgxMDAsMTE1LDIwMSwuNyksIHJnYmEoMjUsMzIsNzIsLjcpXCIgLz4gPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx2LWJ0biBpY29uIHRvPVwiL2Zvb2RcIj5cbiAgICAgICAgICAgICAgICA8di1pY29uPiBtZGktYXJyb3ctbGVmdC1ib2xkPC92LWljb24+XG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT57eyBidXNpbmVzcy5idXNpbmVzc19uYW1lIH19PC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgIDx2LW1lbnUgYm90dG9tIGxlZnQ+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNhY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBkYXJrIGljb24gdi1iaW5kPVwiYXR0cnNcIiB2LW9uPVwib25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+IG1kaS1zaGFyZS12YXJpYW50PC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8di1saXN0IG5hdiBmbGF0IHNpbmdsZS1saW5lIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICA8U2hhcmVOZXR3b3JrIHYtZm9yPVwibmV0d29yayBpbiBuZXR3b3Jrc1wiIDprZXk9XCJuZXR3b3JrLm5ldHdvcmtcIiA6bmV0d29yaz1cIm5ldHdvcmsubmV0d29ya1wiIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBuZXR3b3JrLmNvbG9yIH1cIiA6dXJsPVwic2hhcmluZy51cmxcIiA6dGl0bGU9XCJzaGFyaW5nLnRpdGxlXCIgOmRlc2NyaXB0aW9uPVwic2hhcmluZy5kZXNjcmlwdGlvblwiIDpoYXNodGFncz1cInNoYXJpbmcuaGFzaHRhZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbCA6Y29sb3I9XCJuZXR3b3JrLmNvbG9yXCI+IHt7IG5ldHdvcmsuaWNvbiB9fSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7IG5ldHdvcmsubmFtZSB9fTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L1NoYXJlTmV0d29yaz5cbiAgICAgICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgIDwvdi1tZW51PlxuICAgICAgICAgICAgPGNsaWVudC1vbmx5PlxuICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiY2FydFNpemUgPiAwXCIgaWQ9XCJjYXJ0XCIgaWNvbiB0bz1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJhZGdlIGNvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2JhZGdlIG92ZXJsYXA+IHt7IGNhcnRTaXplIH19IDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwid2hpdGVcIiBkZW5zZT4gbWRpLWNhcnQtb3V0bGluZSA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWJhZGdlPlxuICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8L2NsaWVudC1vbmx5PlxuICAgICAgICAgICAgPHRlbXBsYXRlICNleHRlbnNpb24+XG4gICAgICAgICAgICAgICAgPHYtdGFicyB2LW1vZGVsPVwidGFiXCIgc2hvdy1hcnJvd3MgY2VudGVyLWFjdGl2ZSBjZW50ZXJlZCBkZW5zZSBiYWNrZ3JvdW5kLWNvbG9yPVwidHJhbnNwYXJlbnRcIiBjb2xvcj1cImJhc2lsXCIgZ3Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGFiIHYtZm9yPVwiaXRlbSBpbiBidXNpbmVzcy5tZW51LmZpbHRlcihpPT5pLnZhbHVlcy5sZW5ndGg+MClcIiA6a2V5PVwiaXRlbS5uYW1lXCIgZGVuc2UgQGNsaWNrLnN0b3A9XCJzY3JvbGxUbygpXCI+IHt7IGl0ZW0ubmFtZSB9fSA8L3YtdGFiPlxuICAgICAgICAgICAgICAgIDwvdi10YWJzPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWFwcC1iYXI+XG4gICAgICAgIDx2LXNoZWV0IGlkPVwic2Nyb2xsaW5nLXRlY2huaXF1ZXMtM1wiIGNsYXNzPVwib3ZlcmZsb3cteS1hdXRvXCIgbWF4LWhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgPHYtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGFicy1pdGVtcyB2LW1vZGVsPVwidGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10YWItaXRlbSB2LWZvcj1cIml0ZW0gaW4gYnVzaW5lc3MubWVudS5maWx0ZXIoaT0+aS52YWx1ZXMubGVuZ3RoPjApXCIgOmtleT1cIml0ZW0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjbGllbnQtb25seT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb2QtaXRlbSA6ZGF0YT1cIml0ZW1cIiA6bWVyY2hhbnQ9XCJidXNpbmVzc1wiIC8+IDwvY2xpZW50LW9ubHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10YWJzLWl0ZW1zPlxuICAgICAgICAgICAgICAgIDwvdi1jb250ZW50PlxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC92LXNoZWV0PlxuICAgIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBMb2FkaW5nIGZyb20gJ3Z1ZS1sb2FkaW5nLW92ZXJsYXknXG5pbXBvcnQgJ3Z1ZS1sb2FkaW5nLW92ZXJsYXkvZGlzdC92dWUtbG9hZGluZy5jc3MnXG5pbXBvcnQge1xuICAgIEdlb0NvbGxlY3Rpb25SZWZlcmVuY2Vcbn0gZnJvbSAnZ2VvZmlyZXN0b3JlJ1xuaW1wb3J0IEZvb2RJdGVtIGZyb20gJ34vY29tcG9uZW50cy9Gb29kSXRlbS52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBGb29kSXRlbSxcbiAgICAgICAgTG9hZGluZ1xuICAgIH0sXG4gICAgbGF5b3V0OiAnYXJlYScsXG4gICAgYXN5bmNEYXRhKHtcbiAgICAgICAgYXBwLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIGVycm9yXG4gICAgfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGIgPSBhcHAuJGZpcmVTdG9yZVxuICAgICAgICAgICAgY29uc3QgZ2VvY29sbGVjdGlvbiA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKGRiLmNvbGxlY3Rpb24oJ21lcmNoYW50JykpXG4gICAgICAgICAgICByZXR1cm4gZ2VvY29sbGVjdGlvbi53aGVyZSgndXJsJywgJz09JywgcGFyYW1zLmlkKS5nZXQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGRhdGEuZG9jc1swXS5kYXRhKClcbiAgICAgICAgICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbignZm9vZHMnKS53aGVyZSgnb3duZXInLCAnPT0nLCBkYXRhLmRvY3NbMF0uaWQpLmdldCgpLnRoZW4oKGZvb2QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9vZHMgPSBbXVxuICAgICAgICAgICAgICAgICAgICBmb29kLmRvY3MuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9vZGl0ZW0gPSBmLmRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vZGl0ZW0uaWQgPSBmLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICBmb29kaXRlbS5vd25lciA9IGRhdGEuZG9jc1swXS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vZHMucHVzaChmb29kaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVudSA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbHZhbHVlcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGQubWVudS5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgbS52YWx1ZXMuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbHZhbHVlcy5wdXNoKGYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vZHMuZm9yRWFjaCgoZmkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpLmlkID09PSBmKSB2YWx1ZXMucHVzaChmaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA8IGIubmFtZSA/IC0xIDogYS5uYW1lID4gYi5uYW1lID8gMSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdPdGhlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBmb29kcy5maWx0ZXIoKGEpID0+ICFhbGx2YWx1ZXMuaW5jbHVkZXMoYS5pZCkpLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5uYW1lIDwgYi5uYW1lID8gLTEgOiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGl2ZXJ5ID0gZC5kZWxpdmVyeV90aW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxpdmVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiAnMDk6MDA6MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiAnMTk6MDA6MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYml6ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuZG9jc1swXS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzc19uYW1lOiBkLmJ1c2luZXNzX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmNoOiBkLmJyYW5jaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogZC5iYWNrZHJvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBkLmxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudTogbWVudS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm5hbWUgPCBiLm5hbWUgPyAtMSA6IGEubmFtZSA+IGIubmFtZSA/IDEgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZXM6IGQucmF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGQuY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9tLmppZmZ5ZmF2b3JzLmNvbS9yZXN0by8nICsgcGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBgT3JkZXIgeW91ciAke2QuYnVzaW5lc3NfbmFtZX0gLSAke2QuYnJhbmNofSBGb29kIE9ubGluZSBhdCBKaWZmeSBGYXZvcnNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtkLmJ1c2luZXNzX25hbWV9IC0gJHtkLmJyYW5jaH0gRm9vZCBNZW51ICYgT25saW5lIE9yZGVyaW5nYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNodGFnczogJ2ppZmZ5ZmF2b3JzLGZvb2QsZGVsaXZlcnksb25saW5lb3JkZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiAnZmFjZWJvb2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGYWNlYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS1mYWNlYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMTg3N2YyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS1nbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICdza3lwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NreXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWRpLXNreXBlLWJ1c2luZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMGFmZjAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms6ICdzbXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTTVMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdtZGktYW5kcm9pZC1tZXNzYWdlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzMzMzMzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiAndGVsZWdyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUZWxlZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS10ZWxlZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDA4OGNjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiAndHdpdHRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1R3aXR0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdtZGktdHdpdHRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMWRhMWYyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiAnd2hhdHNhcHAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdXaGF0c2FwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kaS13aGF0c2FwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMjVkMzY2J1xuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYml6XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdCbG9nIG5vdCBmb3VuZCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Jsb2cgbm90IGZvdW5kJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Jsb2cgbm90IGZvdW5kJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGJ1c2luZXNzOiBudWxsLFxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgICAgIHRhYjogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBoZWFkKCkge1xuICAgICAgICBjb25zdCBidXNpbmVzcyA9IHRoaXMuYnVzaW5lc3NcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vbS5qaWZmeWZhdm9ycy5jb20nICsgdGhpcy4kcm91dGUuZnVsbFBhdGhcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHtidXNpbmVzcy5idXNpbmVzc19uYW1lfSAtIE1lbnUgYW5kIEZvb2QgRGVsaXZlcnlgLFxuICAgICAgICAgICAgbWV0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhpZDogYGRlc2NyaXB0aW9uYCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGAke2J1c2luZXNzLmJ1c2luZXNzX25hbWV9ICR7YnVzaW5lc3MuYnJhbmNofS0gT25saW5lIEZvb2QgT3JkZXJpbmdgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhpZDogJ29nOnR5cGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvZzp0eXBlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAncmVzdGF1cmFudC5tZW51J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoaWQ6ICdvZzp0aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29nOnRpdGxlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgRm9vZCBNZW51fE9yZGVyIE9ubGluZSAtICR7YnVzaW5lc3MuYnVzaW5lc3NfbmFtZX0gJHtidXNpbmVzcy5icmFuY2h9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoaWQ6ICdvZzpkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29nOmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgTWVudSBmb3IgJHtidXNpbmVzcy5idXNpbmVzc19uYW1lfSAke2J1c2luZXNzLmJyYW5jaH0tIE9yZGVyIE5vdy4gUGF5IENPRCFgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhpZDogJ29nOmltYWdlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnb2c6aW1hZ2UnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGAke2J1c2luZXNzLmxvZ299YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoaWQ6ICdvZzp1cmwnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvZzp1cmwnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBsaW5rOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVsOiAnaWNvbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7YnVzaW5lc3MubG9nb31gXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjYXJ0U2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjYXJ0L2dldENhcnRJdGVtQ291bnQnXVxuICAgICAgICB9LFxuICAgICAgICBpdGVtQ291bnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0SXRlbUNvdW50J11cbiAgICAgICAgfSxcbiAgICAgICAgdG90YWxQcmljZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjYXJ0L2dldFRvdGFsJ11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgY2FydFNpemUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJ0U2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hha2UoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKXtcbiAgICAgICAgIHRoaXMuJGZpcmVBbmFseXRpY3MubG9nRXZlbnQoJ3BhZ2VfdmlldycpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNjcm9sbFRvKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbGluZy10ZWNobmlxdWVzLTMnKS5zY3JvbGwoe1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2hha2UoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydCcpLmNsYXNzTGlzdC5hZGQoJ3NoYWtlJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0JykuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKVxuICAgICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgLnYtbGlzdC1pdGVtX19pY29uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW50aXRsZWRfYmFja3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bnRpdGxlZF9iYWNrdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi91bnRpdGxlZF9iYWNrdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3MjIwZGQ0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VudGl0bGVkX2JhY2t1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VudGl0bGVkX2JhY2t1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL3VudGl0bGVkX2JhY2t1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzIyMGRkNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiMTcyMjBkZDRcIixcbiAgXCJkOTIzOTM5MlwiXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0c1xuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBcHAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBcHAnO1xuaW1wb3J0IHsgVkFwcEJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQmFkZ2UgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCYWRnZSc7XG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZDb250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ29udGVudCc7XG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkljb24nO1xuaW1wb3J0IHsgVkltZyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkltZyc7XG5pbXBvcnQgeyBWTGlzdCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1JY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1UaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVk1lbnUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZNZW51JztcbmltcG9ydCB7IFZTaGVldCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlNoZWV0JztcbmltcG9ydCB7IFZTcGFjZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZUYWIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUYWJzJztcbmltcG9ydCB7IFZUYWJJdGVtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGFicyc7XG5pbXBvcnQgeyBWVGFicyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW1wb3J0IHsgVlRhYnNJdGVtcyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW1wb3J0IHsgVlRvb2xiYXJUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRvb2xiYXInO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcCxWQXBwQmFyLFZCYWRnZSxWQnRuLFZDb250YWluZXIsVkNvbnRlbnQsVkljb24sVkltZyxWTGlzdCxWTGlzdEl0ZW0sVkxpc3RJdGVtSWNvbixWTGlzdEl0ZW1UaXRsZSxWTWVudSxWU2hlZXQsVlNwYWNlcixWVGFiLFZUYWJJdGVtLFZUYWJzLFZUYWJzSXRlbXMsVlRvb2xiYXJUaXRsZX0pXG4iLCJpbXBvcnQgVkJ0biBmcm9tICcuL1ZCdG4nXG5cbmV4cG9ydCB7IFZCdG4gfVxuZXhwb3J0IGRlZmF1bHQgVkJ0blxuIl0sInNvdXJjZVJvb3QiOiIifQ==