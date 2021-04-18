exports.ids = [1];
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

/***/ 175:
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

/***/ 198:
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

/***/ 205:
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

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/account.vue?vue&type=template&id=82afac38&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('account')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account.vue?vue&type=template&id=82afac38&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Account.vue?vue&type=template&id=6024aeee&
var Accountvue_type_template_id_6024aeee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('nav-drawer',{model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}}),_vm._v(" "),_c('v-card',{staticClass:"cardhyt mb-10",attrs:{"flat":"","width":"100%"}},[_c('v-app-bar',{attrs:{"color":"rgba(100,115,201)","app":"","dark":"","flat":""}},[_c('v-app-bar-nav-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer=!_vm.drawer}}}),_vm._v(" "),_c('v-avatar',{staticClass:"mr-2",attrs:{"rounded":"","size":"35"}},[_c('v-img',{attrs:{"src":"/icon.png"}})],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v(" Jiffy Favors ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('client-only',[(_vm.cartSize > 0)?_c('v-btn',{attrs:{"icon":"","to":"/cart"}},[_c('v-badge',{attrs:{"color":"red"},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_vm._v(" "+_vm._s(_vm.cartSize)+" ")]},proxy:true}],null,false,1285045876)},[_vm._v(" "),_c('v-icon',{attrs:{"color":"white","dense":""}},[_vm._v(" mdi-cart-outline ")])],1)],1):_vm._e()],1)],1),_vm._v(" "),_c('v-sheet',{staticClass:"overflow-y-auto fill-height",attrs:{"id":"scrolling-techniques-3"}},[_c('v-container',{attrs:{"fluid":""}},[_c('v-content',[_c('v-layout',{attrs:{"wrap":"","justify-center":"","align-center":"","text-left":""}},[(_vm.user===null)?_c('v-flex',{staticClass:"text-center",attrs:{"xs12":"","md4":"","sm4":"","lg3":"","t":""}},[_c('v-icon',{staticClass:"mb-5",attrs:{"color":"blue","size":"200"}},[_vm._v("mdi-account-circle")]),_vm._v(" "),_c('blockquote',{staticClass:"blockquote"},[_vm._v(" “\n                                "),_c('strong',[_vm._v("Please Login to view your account.")]),_vm._v("”\n                                "),_c('footer',[(_vm.user===null)?_c('v-btn',{attrs:{"tile":"","outlined":"","color":"blue"},on:{"click":function($event){_vm.loginSheet = true}}},[_vm._v(" Login ")]):_vm._e()],1)])],1):_vm._e(),_vm._v(" "),(_vm.user!==null)?_c('v-flex',{attrs:{"xs12":"","md4":"","sm4":"","lg3":"","t":""}},[_c('v-list',{attrs:{"dense":""}},[_c('v-list-item',{attrs:{"id":"contact"}},[_c('v-list-item-avatar',[_c('v-icon',{attrs:{"color":"blue"}},[_vm._v(" mdi-account ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.fullname))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Fullname")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.fullnameSheet = true}}},[_c('v-icon',{attrs:{"color":"pink"}},[_vm._v(" mdi-chevron-right ")])],1)],1)],1)],1),_vm._v(" "),_c('v-list',{attrs:{"dense":""}},[_c('v-list-item',{attrs:{"id":"contact"}},[_c('v-list-item-avatar',[_c('v-icon',{attrs:{"color":"red"}},[_vm._v(" mdi-phone ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.number))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Contact")])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.phoneAuthSheet = true}}},[_c('v-icon',{attrs:{"color":"pink"}},[_vm._v(" mdi-chevron-right ")])],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"block":"","tile":"","color":"red"},on:{"click":function($event){$event.stopPropagation();return _vm.$fireAuth.signOut()}}},[_vm._v("Logout")])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{model:{value:(_vm.loginSheet),callback:function ($$v) {_vm.loginSheet=$$v},expression:"loginSheet"}},[_c('v-card',{attrs:{"tile":""}},[_c('v-card-title',{attrs:{"primary-title":""}},[_vm._v(" Login ")]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('fire-ui')],1)],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{model:{value:(_vm.fullnameSheet),callback:function ($$v) {_vm.fullnameSheet=$$v},expression:"fullnameSheet"}},[_c('v-card',{attrs:{"tile":""}},[_c('v-card-title',{attrs:{"primary-title":""}},[_vm._v(" Contact Information ")]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md12":""}},[_c('v-text-field',{attrs:{"dense":"","label":"Fullname","outlined":"","placeholder":"Fullname"},model:{value:(_vm.fullname),callback:function ($$v) {_vm.fullname=$$v},expression:"fullname"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","color":"red"},on:{"click":function($event){return _vm.updateDisplayName()}}},[_vm._v(" Apply Changes ")])],1)],1)],1),_vm._v(" "),_c('v-bottom-sheet',{model:{value:(_vm.phoneAuthSheet),callback:function ($$v) {_vm.phoneAuthSheet=$$v},expression:"phoneAuthSheet"}},[_c('v-card',{attrs:{"tile":""}},[_c('v-card-title',{attrs:{"primary-title":""}},[_vm._v(" Update Phone ")]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","md12":""}},[_c('v-text-field',{attrs:{"dense":"","label":"Your number","outlined":"","placeholder":"Your number"},model:{value:(_vm.number),callback:function ($$v) {_vm.number=$$v},expression:"number"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":""}},[_c('div',{attrs:{"id":"recaptcha-container"}})])],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"tile":"","outlined":"","color":"red"},on:{"click":function($event){return _vm.phoneNumberLinker()}}},[_vm._v(" Apply Changes ")])],1)],1)],1)],1)}
var Accountvue_type_template_id_6024aeee_staticRenderFns = []


// CONCATENATED MODULE: ./components/Account.vue?vue&type=template&id=6024aeee&

// EXTERNAL MODULE: ./components/FireUi.vue + 8 modules
var FireUi = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Account.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Accountvue_type_script_lang_js_ = ({
  components: {
    FireUi: FireUi["a" /* default */]
  },
  computed: {
    cartSize() {
      return this.$store.getters['cart/getCartItemCount'];
    },

    user() {
      return this.$store.getters['auth/getUser'];
    }

  },

  data() {
    return {
      drawer: false,
      loginSheet: false,
      fullnameSheet: false,
      phoneAuthSheet: false,
      fullname: '',
      number: ''
    };
  },

  watch: {
    user(val) {
      console.log(val);

      if (val !== null) {
        this.fullname = val.displayName;
        this.number = val.phoneNumber;
      }
    }

  },
  methods: {
    phoneNumberLinker() {
      if (this.number === null || this.number === '') {
        var provider = new this.$fireAuthObj.PhoneAuthProvider();
        var auth = this.$fireAuth.currentUser;
        var appVerifier = new this.$fireAuthObj.RecaptchaVerifier('recaptcha-container', {
          size: 'invisible'
        });
        auth.linkWithPhoneNumber(this.number, appVerifier).then(result => {
          var code = window.prompt('Provide your SMS code'); // Complete sign-in.

          self.phoneAuthSheet = false;
          return result.confirm(code);
        });
      } else {
        this.updatePhoneNumber();
      }
    },

    logOut() {
      this.$fireAuth.signOut();
    },

    updatePhoneNumber() {
      var self = this;
      var applicationVerifier = new this.$fireAuthObj.RecaptchaVerifier('recaptcha-container');
      let fbo = this.$fireAuthObj.PhoneAuthProvider;
      let fu = this.$fireAuth;
      var provider = new this.$fireAuthObj.PhoneAuthProvider();
      provider.verifyPhoneNumber(this.number, applicationVerifier).then(function (verificationId) {
        var verificationCode = window.prompt('Please enter the verification ' + 'code that was sent to your mobile device.');
        return fbo.credential(verificationId, verificationCode);
      }).then(function (phoneCredential) {
        return fu.currentUser.updatePhoneNumber(phoneCredential).then(function () {
          self.phoneAuthSheet = false;
          return fu.currentUser.reauthenticateWithCredential(phoneCredential);
        });
      });
    },

    showUser() {
      setTimeout(() => {
        console.log(this.$fireAuth.currentUser);
      }, 3000);
    },

    updateDisplayName() {
      this.$fireAuth.currentUser.updateProfile({
        displayName: this.fullname
      }).then(() => {
        this.fullnameSheet = false;
      });
    }

  },

  mounted() {
    if (this.user != null) {
      this.fullname = this.user.displayName;
      this.number = this.user.phoneNumber;
    }
  }

});
// CONCATENATED MODULE: ./components/Account.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Accountvue_type_script_lang_js_ = (Accountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
var VAppBar = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js
var VAppBarNavIcon = __webpack_require__(206);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(154);

// CONCATENATED MODULE: ./components/Account.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Accountvue_type_script_lang_js_,
  Accountvue_type_template_id_6024aeee_render,
  Accountvue_type_template_id_6024aeee_staticRenderFns,
  false,
  null,
  null,
  "d0c86f96"
  
)

/* harmony default export */ var Account = (component.exports);

/* vuetify-loader */




























installComponents_default()(component, {VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VAvatar: VAvatar["a" /* default */],VBadge: VBadge["a" /* default */],VBottomSheet: VBottomSheet["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VContainer: VContainer["a" /* default */],VContent: VContent["a" /* default */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["b" /* VListItemContent */],VListItemSubtitle: components_VList["c" /* VListItemSubtitle */],VListItemTitle: components_VList["d" /* VListItemTitle */],VSheet: VSheet["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextField: VTextField["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var accountvue_type_script_lang_js_ = ({
  components: {
    Account: Account
  },
  layout: 'menu',

  mounted() {
    this.$fireAnalytics.logEvent('page_view');
  }

});
// CONCATENATED MODULE: ./pages/account.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_accountvue_type_script_lang_js_ = (accountvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/account.vue





/* normalize component */

var account_component = Object(componentNormalizer["a" /* default */])(
  pages_accountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "20b67f51"
  
)

/* harmony default export */ var account = __webpack_exports__["default"] = (account_component.exports);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNhcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUb29sYmFyL1ZUb29sYmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVzc2FnZXMvVk1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWVzc2FnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZJbnB1dC9WSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZJbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNhcmQvVkNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhci9WUHJvZ3Jlc3NMaW5lYXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYWJlbC9WTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZMYWJlbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy9sb2FkYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21peGlucy92YWxpZGF0YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WR3JpZC9WR3JpZC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUZXh0RmllbGQvVlRleHRGaWVsZC5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WVG9vbGJhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvdW50ZXIvVkNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZDb3VudGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL2ludGVyc2VjdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUZXh0RmllbGQvVlRleHRGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZDYXJkL1ZDYXJkLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyL1ZQcm9ncmVzc0xpbmVhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZJbnB1dC9WSW5wdXQuc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WTGFiZWwvVkxhYmVsLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1lc3NhZ2VzL1ZNZXNzYWdlcy5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZBcHBCYXIvVkFwcEJhci5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZUb29sYmFyL1ZUb29sYmFyLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnkvc3JjL2NvbXBvbmVudHMvVk1haW4vVk1haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WQ291bnRlci9WQ291bnRlci5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWl4aW5zL3RyYW5zaXRpb25hYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5L3NyYy9jb21wb25lbnRzL1ZCYWRnZS9WQmFkZ2Uuc2FzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkFwcEJhci9WQXBwQmFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WTWFpbi9WTWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkNvbnRlbnQvVkNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZTcGFjZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZHcmlkL1ZDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNldWkvZGlzdC9maXJlYmFzZXVpLmNzcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVkJhZGdlL1ZCYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS9zcmMvY29tcG9uZW50cy9WU3RlcHBlci9WU3RlcHBlci5zYXNzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQXBwQmFyL1ZBcHBCYXJOYXZJY29uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlyZVVpLnZ1ZT81NzY4Iiwid2VicGFjazovLy9jb21wb25lbnRzL0ZpcmVVaS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaXJlVWkudnVlP2NjMzUiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdGVwcGVyL1ZTdGVwcGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WU3RlcHBlci9WU3RlcHBlckNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZTdGVwcGVyL1ZTdGVwcGVyU3RlcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVlN0ZXBwZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaXJlVWkudnVlIiwid2VicGFjazovLy8uL3BhZ2VzL2FjY291bnQudnVlP2FmYjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50LnZ1ZT8xZTI4Iiwid2VicGFjazovLy9jb21wb25lbnRzL0FjY291bnQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWNjb3VudC52dWU/ZGY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjY291bnQudnVlIiwid2VicGFjazovLy9wYWdlcy9hY2NvdW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hY2NvdW50LnZ1ZT9kNzNlIiwid2VicGFjazovLy8uL3BhZ2VzL2FjY291bnQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTSxZQUFZLEdBQUcsb0ZBQXNCLENBQTNDLGlCQUEyQyxDQUEzQztBQUNBLE1BQU0sYUFBYSxHQUFHLG9GQUFzQixDQUE1QyxrQkFBNEMsQ0FBNUM7QUFDQSxNQUFNLFNBQVMsR0FBRyxvRkFBc0IsQ0FBeEMsY0FBd0MsQ0FBeEM7QUFDQSxNQUFNLFVBQVUsR0FBRyxvRkFBc0IsQ0FBekMsZUFBeUMsQ0FBekM7QUFFQTtBQVFlO0FBQ2IseUJBQXVCLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUt2QjtBQUx1QjtBQURaLENBQWYsRTs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBS0E7O0FB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ZmlsZSI6InBhZ2VzL2FjY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVkNhcmQgZnJvbSAnLi9WQ2FyZCdcbmltcG9ydCB7IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbmNvbnN0IFZDYXJkQWN0aW9ucyA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fYWN0aW9ucycpXG5jb25zdCBWQ2FyZFN1YnRpdGxlID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX19zdWJ0aXRsZScpXG5jb25zdCBWQ2FyZFRleHQgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LWNhcmRfX3RleHQnKVxuY29uc3QgVkNhcmRUaXRsZSA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fdGl0bGUnKVxuXG5leHBvcnQge1xuICBWQ2FyZCxcbiAgVkNhcmRBY3Rpb25zLFxuICBWQ2FyZFN1YnRpdGxlLFxuICBWQ2FyZFRleHQsXG4gIFZDYXJkVGl0bGUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJF92dWV0aWZ5X3N1YmNvbXBvbmVudHM6IHtcbiAgICBWQ2FyZCxcbiAgICBWQ2FyZEFjdGlvbnMsXG4gICAgVkNhcmRTdWJ0aXRsZSxcbiAgICBWQ2FyZFRleHQsXG4gICAgVkNhcmRUaXRsZSxcbiAgfSxcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZUb29sYmFyLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWU2hlZXQgZnJvbSAnLi4vVlNoZWV0L1ZTaGVldCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJbWcsIHsgc3JjT2JqZWN0IH0gZnJvbSAnLi4vVkltZy9WSW1nJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGdldFNsb3QgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZTaGVldC5leHRlbmQoe1xuICBuYW1lOiAndi10b29sYmFyJyxcblxuICBwcm9wczoge1xuICAgIGFic29sdXRlOiBCb29sZWFuLFxuICAgIGJvdHRvbTogQm9vbGVhbixcbiAgICBjb2xsYXBzZTogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBleHRlbmRlZDogQm9vbGVhbixcbiAgICBleHRlbnNpb25IZWlnaHQ6IHtcbiAgICAgIGRlZmF1bHQ6IDQ4LFxuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICB9LFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgZmxvYXRpbmc6IEJvb2xlYW4sXG4gICAgcHJvbWluZW50OiBCb29sZWFuLFxuICAgIHNob3J0OiBCb29sZWFuLFxuICAgIHNyYzoge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSBhcyBQcm9wVHlwZTxzdHJpbmcgfCBzcmNPYmplY3Q+LFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdoZWFkZXInLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBpc0V4dGVuZGVkOiBmYWxzZSxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY29tcHV0ZWRDb250ZW50SGVpZ2h0XG5cbiAgICAgIGlmICghdGhpcy5pc0V4dGVuZGVkKSByZXR1cm4gaGVpZ2h0XG5cbiAgICAgIGNvbnN0IGV4dGVuc2lvbkhlaWdodCA9IHBhcnNlSW50KHRoaXMuZXh0ZW5zaW9uSGVpZ2h0KVxuXG4gICAgICByZXR1cm4gdGhpcy5pc0NvbGxhcHNlZFxuICAgICAgICA/IGhlaWdodFxuICAgICAgICA6IGhlaWdodCArICghaXNOYU4oZXh0ZW5zaW9uSGVpZ2h0KSA/IGV4dGVuc2lvbkhlaWdodCA6IDApXG4gICAgfSxcbiAgICBjb21wdXRlZENvbnRlbnRIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBpZiAodGhpcy5oZWlnaHQpIHJldHVybiBwYXJzZUludCh0aGlzLmhlaWdodClcbiAgICAgIGlmICh0aGlzLmlzUHJvbWluZW50ICYmIHRoaXMuZGVuc2UpIHJldHVybiA5NlxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQgJiYgdGhpcy5zaG9ydCkgcmV0dXJuIDExMlxuICAgICAgaWYgKHRoaXMuaXNQcm9taW5lbnQpIHJldHVybiAxMjhcbiAgICAgIGlmICh0aGlzLmRlbnNlKSByZXR1cm4gNDhcbiAgICAgIGlmICh0aGlzLnNob3J0IHx8IHRoaXMuJHZ1ZXRpZnkuYnJlYWtwb2ludC5zbUFuZERvd24pIHJldHVybiA1NlxuICAgICAgcmV0dXJuIDY0XG4gICAgfSxcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uVlNoZWV0Lm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10b29sYmFyJzogdHJ1ZSxcbiAgICAgICAgJ3YtdG9vbGJhci0tYWJzb2x1dGUnOiB0aGlzLmFic29sdXRlLFxuICAgICAgICAndi10b29sYmFyLS1ib3R0b20nOiB0aGlzLmJvdHRvbSxcbiAgICAgICAgJ3YtdG9vbGJhci0tY29sbGFwc2UnOiB0aGlzLmNvbGxhcHNlLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZWQnOiB0aGlzLmlzQ29sbGFwc2VkLFxuICAgICAgICAndi10b29sYmFyLS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgICd2LXRvb2xiYXItLWV4dGVuZGVkJzogdGhpcy5pc0V4dGVuZGVkLFxuICAgICAgICAndi10b29sYmFyLS1mbGF0JzogdGhpcy5mbGF0LFxuICAgICAgICAndi10b29sYmFyLS1mbG9hdGluZyc6IHRoaXMuZmxvYXRpbmcsXG4gICAgICAgICd2LXRvb2xiYXItLXByb21pbmVudCc6IHRoaXMuaXNQcm9taW5lbnQsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0NvbGxhcHNlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jb2xsYXBzZVxuICAgIH0sXG4gICAgaXNQcm9taW5lbnQgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJvbWluZW50XG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLm1lYXN1cmFibGVTdHlsZXMsXG4gICAgICAgIGhlaWdodDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkSGVpZ2h0KSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGNvbnN0IGJyZWFraW5nUHJvcHMgPSBbXG4gICAgICBbJ2FwcCcsICc8di1hcHAtYmFyIGFwcD4nXSxcbiAgICAgIFsnbWFudWFsLXNjcm9sbCcsICc8di1hcHAtYmFyIDp2YWx1ZT1cImZhbHNlXCI+J10sXG4gICAgICBbJ2NsaXBwZWQtbGVmdCcsICc8di1hcHAtYmFyIGNsaXBwZWQtbGVmdD4nXSxcbiAgICAgIFsnY2xpcHBlZC1yaWdodCcsICc8di1hcHAtYmFyIGNsaXBwZWQtcmlnaHQ+J10sXG4gICAgICBbJ2ludmVydGVkLXNjcm9sbCcsICc8di1hcHAtYmFyIGludmVydGVkLXNjcm9sbD4nXSxcbiAgICAgIFsnc2Nyb2xsLW9mZi1zY3JlZW4nLCAnPHYtYXBwLWJhciBzY3JvbGwtb2ZmLXNjcmVlbj4nXSxcbiAgICAgIFsnc2Nyb2xsLXRhcmdldCcsICc8di1hcHAtYmFyIHNjcm9sbC10YXJnZXQ+J10sXG4gICAgICBbJ3Njcm9sbC10aHJlc2hvbGQnLCAnPHYtYXBwLWJhciBzY3JvbGwtdGhyZXNob2xkPiddLFxuICAgICAgWydjYXJkJywgJzx2LWFwcC1iYXIgZmxhdD4nXSxcbiAgICBdXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGJyZWFraW5nUHJvcHMuZm9yRWFjaCgoW29yaWdpbmFsLCByZXBsYWNlbWVudF0pID0+IHtcbiAgICAgIGlmICh0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eShvcmlnaW5hbCkpIGJyZWFraW5nKG9yaWdpbmFsLCByZXBsYWNlbWVudCwgdGhpcylcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5CYWNrZ3JvdW5kICgpIHtcbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZEhlaWdodCksXG4gICAgICAgIHNyYzogdGhpcy5zcmMsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy4kc2NvcGVkU2xvdHMuaW1nXG4gICAgICAgID8gdGhpcy4kc2NvcGVkU2xvdHMuaW1nKHsgcHJvcHMgfSlcbiAgICAgICAgOiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJbWcsIHsgcHJvcHMgfSlcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRvb2xiYXJfX2ltYWdlJyxcbiAgICAgIH0sIFtpbWFnZV0pXG4gICAgfSxcbiAgICBnZW5Db250ZW50ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi10b29sYmFyX19jb250ZW50JyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHQpLFxuICAgICAgICB9LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzKSlcbiAgICB9LFxuICAgIGdlbkV4dGVuc2lvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtdG9vbGJhcl9fZXh0ZW5zaW9uJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGNvbnZlcnRUb1VuaXQodGhpcy5leHRlbnNpb25IZWlnaHQpLFxuICAgICAgICB9LFxuICAgICAgfSwgZ2V0U2xvdCh0aGlzLCAnZXh0ZW5zaW9uJykpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgdGhpcy5pc0V4dGVuZGVkID0gdGhpcy5leHRlbmRlZCB8fCAhIXRoaXMuJHNjb3BlZFNsb3RzLmV4dGVuc2lvblxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbdGhpcy5nZW5Db250ZW50KCldXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICBvbjogdGhpcy4kbGlzdGVuZXJzLFxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc0V4dGVuZGVkKSBjaGlsZHJlbi5wdXNoKHRoaXMuZ2VuRXh0ZW5zaW9uKCkpXG4gICAgaWYgKHRoaXMuc3JjIHx8IHRoaXMuJHNjb3BlZFNsb3RzLmltZykgY2hpbGRyZW4udW5zaGlmdCh0aGlzLmdlbkJhY2tncm91bmQoKSlcblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WTWVzc2FnZXMuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFByb3BWYWxpZGF0b3IgfSBmcm9tICd2dWUvdHlwZXMvb3B0aW9ucydcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgZ2V0U2xvdCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhDb2xvcmFibGUsIFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWVzc2FnZXMnLFxuXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKFtdKSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8c3RyaW5nW10+LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5DaGlsZHJlbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndHJhbnNpdGlvbi1ncm91cCcsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LW1lc3NhZ2VzX193cmFwcGVyJyxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiAnbWVzc2FnZS10cmFuc2l0aW9uJyxcbiAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICB9LFxuICAgICAgfSwgdGhpcy52YWx1ZS5tYXAodGhpcy5nZW5NZXNzYWdlKSlcbiAgICB9LFxuICAgIGdlbk1lc3NhZ2UgKG1lc3NhZ2U6IHN0cmluZywga2V5OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1tZXNzYWdlc19fbWVzc2FnZScsXG4gICAgICAgIGtleSxcbiAgICAgIH0sIGdldFNsb3QodGhpcywgJ2RlZmF1bHQnLCB7IG1lc3NhZ2UsIGtleSB9KSB8fCBbbWVzc2FnZV0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1tZXNzYWdlcycsXG4gICAgICBjbGFzczogdGhpcy50aGVtZUNsYXNzZXMsXG4gICAgfSksIFt0aGlzLmdlbkNoaWxkcmVuKCldKVxuICB9LFxufSlcbiIsImltcG9ydCBWTWVzc2FnZXMgZnJvbSAnLi9WTWVzc2FnZXMnXG5cbmV4cG9ydCB7IFZNZXNzYWdlcyB9XG5leHBvcnQgZGVmYXVsdCBWTWVzc2FnZXNcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZJbnB1dC5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5pbXBvcnQgVkxhYmVsIGZyb20gJy4uL1ZMYWJlbCdcbmltcG9ydCBWTWVzc2FnZXMgZnJvbSAnLi4vVk1lc3NhZ2VzJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBCaW5kc0F0dHJzIGZyb20gJy4uLy4uL21peGlucy9iaW5kcy1hdHRycydcbmltcG9ydCBWYWxpZGF0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdmFsaWRhdGFibGUnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHtcbiAgY29udmVydFRvVW5pdCxcbiAgZ2V0U2xvdCxcbiAga2ViYWJDYXNlLFxufSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWVyZ2VEYXRhIGZyb20gJy4uLy4uL3V0aWwvbWVyZ2VEYXRhJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUsIFZOb2RlRGF0YSwgUHJvcFR5cGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHsgSW5wdXRWYWxpZGF0aW9uUnVsZSB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIEJpbmRzQXR0cnMsXG4gIFZhbGlkYXRhYmxlLFxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEluc3RhbmNlVHlwZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlICovXG4gICRfbW9kZWxFdmVudDogc3RyaW5nXG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWlucHV0JyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZW5kSWNvbjogU3RyaW5nLFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBoZWlnaHQ6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgaGlkZURldGFpbHM6IFtCb29sZWFuLCBTdHJpbmddIGFzIFByb3BUeXBlPGJvb2xlYW4gfCAnYXV0byc+LFxuICAgIGhpbnQ6IFN0cmluZyxcbiAgICBpZDogU3RyaW5nLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgbG9hZGluZzogQm9vbGVhbixcbiAgICBwZXJzaXN0ZW50SGludDogQm9vbGVhbixcbiAgICBwcmVwZW5kSWNvbjogU3RyaW5nLFxuICAgIHZhbHVlOiBudWxsIGFzIGFueSBhcyBQcm9wVHlwZTxhbnk+LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXp5VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBoYXNNb3VzZURvd246IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1pbnB1dC0taGFzLXN0YXRlJzogdGhpcy5oYXNTdGF0ZSxcbiAgICAgICAgJ3YtaW5wdXQtLWhpZGUtZGV0YWlscyc6ICF0aGlzLnNob3dEZXRhaWxzLFxuICAgICAgICAndi1pbnB1dC0taXMtbGFiZWwtYWN0aXZlJzogdGhpcy5pc0xhYmVsQWN0aXZlLFxuICAgICAgICAndi1pbnB1dC0taXMtZGlydHknOiB0aGlzLmlzRGlydHksXG4gICAgICAgICd2LWlucHV0LS1pcy1kaXNhYmxlZCc6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLWZvY3VzZWQnOiB0aGlzLmlzRm9jdXNlZCxcbiAgICAgICAgLy8gPHYtc3dpdGNoIGxvYWRpbmc+LmxvYWRpbmcgPT09ICcnIHNvIHdlIGNhbid0IGp1c3QgY2FzdCB0byBib29sZWFuXG4gICAgICAgICd2LWlucHV0LS1pcy1sb2FkaW5nJzogdGhpcy5sb2FkaW5nICE9PSBmYWxzZSAmJiB0aGlzLmxvYWRpbmcgIT0gbnVsbCxcbiAgICAgICAgJ3YtaW5wdXQtLWlzLXJlYWRvbmx5JzogdGhpcy5pc1JlYWRvbmx5LFxuICAgICAgICAndi1pbnB1dC0tZGVuc2UnOiB0aGlzLmRlbnNlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkSWQgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5pZCB8fCBgaW5wdXQtJHt0aGlzLl91aWR9YFxuICAgIH0sXG4gICAgaGFzRGV0YWlscyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1RvRGlzcGxheS5sZW5ndGggPiAwXG4gICAgfSxcbiAgICBoYXNIaW50ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5oYXNNZXNzYWdlcyAmJlxuICAgICAgICAhIXRoaXMuaGludCAmJlxuICAgICAgICAodGhpcy5wZXJzaXN0ZW50SGludCB8fCB0aGlzLmlzRm9jdXNlZClcbiAgICB9LFxuICAgIGhhc0xhYmVsICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhISh0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgLy8gUHJveHkgZm9yIGBsYXp5VmFsdWVgXG4gICAgLy8gVGhpcyBhbGxvd3MgYW4gaW5wdXRcbiAgICAvLyB0byBmdW5jdGlvbiB3aXRob3V0XG4gICAgLy8gYSBwcm92aWRlZCBtb2RlbFxuICAgIGludGVybmFsVmFsdWU6IHtcbiAgICAgIGdldCAoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF6eVZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgICAgICB0aGlzLiRlbWl0KHRoaXMuJF9tb2RlbEV2ZW50LCB2YWwpXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNEaXJ0eSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISF0aGlzLmxhenlWYWx1ZVxuICAgIH0sXG4gICAgaXNMYWJlbEFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RpcnR5XG4gICAgfSxcbiAgICBtZXNzYWdlc1RvRGlzcGxheSAoKTogc3RyaW5nW10ge1xuICAgICAgaWYgKHRoaXMuaGFzSGludCkgcmV0dXJuIFt0aGlzLmhpbnRdXG5cbiAgICAgIGlmICghdGhpcy5oYXNNZXNzYWdlcykgcmV0dXJuIFtdXG5cbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25zLm1hcCgodmFsaWRhdGlvbjogc3RyaW5nIHwgSW5wdXRWYWxpZGF0aW9uUnVsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbGlkYXRpb24gPT09ICdzdHJpbmcnKSByZXR1cm4gdmFsaWRhdGlvblxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0aW9uKHRoaXMuaW50ZXJuYWxWYWx1ZSlcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnID8gdmFsaWRhdGlvblJlc3VsdCA6ICcnXG4gICAgICB9KS5maWx0ZXIobWVzc2FnZSA9PiBtZXNzYWdlICE9PSAnJylcbiAgICB9LFxuICAgIHNob3dEZXRhaWxzICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGVEZXRhaWxzID09PSBmYWxzZSB8fCAodGhpcy5oaWRlRGV0YWlscyA9PT0gJ2F1dG8nICYmIHRoaXMuaGFzRGV0YWlscylcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgdmFsdWUgKHZhbCkge1xuICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICB9LFxuICB9LFxuXG4gIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgLy8gdi1yYWRpby1ncm91cCBuZWVkcyB0byBlbWl0IGEgZGlmZmVyZW50IGV2ZW50XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5L2lzc3Vlcy80NzUyXG4gICAgdGhpcy4kX21vZGVsRXZlbnQgPSAodGhpcy4kb3B0aW9ucy5tb2RlbCAmJiB0aGlzLiRvcHRpb25zLm1vZGVsLmV2ZW50KSB8fCAnaW5wdXQnXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdlbkNvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5nZW5QcmVwZW5kU2xvdCgpLFxuICAgICAgICB0aGlzLmdlbkNvbnRyb2woKSxcbiAgICAgICAgdGhpcy5nZW5BcHBlbmRTbG90KCksXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5Db250cm9sICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1pbnB1dF9fY29udHJvbCcsXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuSW5wdXRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuTWVzc2FnZXMoKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBnZW5EZWZhdWx0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLmdlbkxhYmVsKCksXG4gICAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHQsXG4gICAgICBdXG4gICAgfSxcbiAgICBnZW5JY29uIChcbiAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgIGNiPzogKGU6IEV2ZW50KSA9PiB2b2lkLFxuICAgICAgZXh0cmFEYXRhOiBWTm9kZURhdGEgPSB7fVxuICAgICkge1xuICAgICAgY29uc3QgaWNvbiA9ICh0aGlzIGFzIGFueSlbYCR7dHlwZX1JY29uYF1cbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGBjbGljazoke2tlYmFiQ2FzZSh0eXBlKX1gXG4gICAgICBjb25zdCBoYXNMaXN0ZW5lciA9ICEhKHRoaXMubGlzdGVuZXJzJFtldmVudE5hbWVdIHx8IGNiKVxuXG4gICAgICBjb25zdCBkYXRhID0gbWVyZ2VEYXRhKHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IGhhc0xpc3RlbmVyID8ga2ViYWJDYXNlKHR5cGUpLnNwbGl0KCctJylbMF0gKyAnIGljb24nIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLnZhbGlkYXRpb25TdGF0ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgfSxcbiAgICAgICAgb246ICFoYXNMaXN0ZW5lclxuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICBjbGljazogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgICAgdGhpcy4kZW1pdChldmVudE5hbWUsIGUpXG4gICAgICAgICAgICAgIGNiICYmIGNiKGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQ29udGFpbmVyIGhhcyBnIGV2ZW50IHRoYXQgd2lsbFxuICAgICAgICAgICAgLy8gdHJpZ2dlciBtZW51IG9wZW4gaWYgZW5jbG9zZWRcbiAgICAgICAgICAgIG1vdXNldXA6IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgfSwgZXh0cmFEYXRhKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogYHYtaW5wdXRfX2ljb25gLFxuICAgICAgICBjbGFzczogdHlwZSA/IGB2LWlucHV0X19pY29uLS0ke2tlYmFiQ2FzZSh0eXBlKX1gIDogdW5kZWZpbmVkLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLiRjcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFZJY29uLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgaWNvblxuICAgICAgICApLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbklucHV0U2xvdCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWlucHV0X19zbG90JyxcbiAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgICAgbW91c2Vkb3duOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgICAgIG1vdXNldXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICB9LFxuICAgICAgICByZWY6ICdpbnB1dC1zbG90JyxcbiAgICAgIH0pLCBbdGhpcy5nZW5EZWZhdWx0U2xvdCgpXSlcbiAgICB9LFxuICAgIGdlbkxhYmVsICgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNMYWJlbCkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoVkxhYmVsLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGZvY3VzZWQ6IHRoaXMuaGFzU3RhdGUsXG4gICAgICAgICAgZm9yOiB0aGlzLmNvbXB1dGVkSWQsXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLiRzbG90cy5sYWJlbCB8fCB0aGlzLmxhYmVsKVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZXMgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dEZXRhaWxzKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWTWVzc2FnZXMsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy5oYXNIaW50ID8gJycgOiB0aGlzLnZhbGlkYXRpb25TdGF0ZSxcbiAgICAgICAgICBkYXJrOiB0aGlzLmRhcmssXG4gICAgICAgICAgbGlnaHQ6IHRoaXMubGlnaHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMubWVzc2FnZXNUb0Rpc3BsYXksXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgcm9sZTogdGhpcy5oYXNNZXNzYWdlcyA/ICdhbGVydCcgOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czoge1xuICAgICAgICAgIGRlZmF1bHQ6IHByb3BzID0+IGdldFNsb3QodGhpcywgJ21lc3NhZ2UnLCBwcm9wcyksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2VuU2xvdCAoXG4gICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgICAgc2xvdDogKFZOb2RlIHwgVk5vZGVbXSlbXVxuICAgICkge1xuICAgICAgaWYgKCFzbG90Lmxlbmd0aCkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgcmVmID0gYCR7dHlwZX0tJHtsb2NhdGlvbn1gXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBgdi1pbnB1dF9fJHtyZWZ9YCxcbiAgICAgICAgcmVmLFxuICAgICAgfSwgc2xvdClcbiAgICB9LFxuICAgIGdlblByZXBlbmRTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHMucHJlcGVuZCkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHMucHJlcGVuZClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmVwZW5kSWNvbikge1xuICAgICAgICBzbG90LnB1c2godGhpcy5nZW5JY29uKCdwcmVwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ3ByZXBlbmQnLCAnb3V0ZXInLCBzbG90KVxuICAgIH0sXG4gICAgZ2VuQXBwZW5kU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgLy8gQXBwZW5kIGljb24gZm9yIHRleHQgZmllbGQgd2FzIHJlYWxseVxuICAgICAgLy8gYW4gYXBwZW5kZWQgaW5uZXIgaWNvbiwgdi10ZXh0LWZpZWxkXG4gICAgICAvLyB3aWxsIG92ZXJ3cml0ZSB0aGlzIG1ldGhvZCBpbiBvcmRlciB0byBvYnRhaW5cbiAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRcbiAgICAgIGlmICh0aGlzLiRzbG90cy5hcHBlbmQpIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzLmFwcGVuZClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBlbmRJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ2FwcGVuZCcpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZW5TbG90KCdhcHBlbmQnLCAnb3V0ZXInLCBzbG90KVxuICAgIH0sXG4gICAgb25DbGljayAoZTogRXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9LFxuICAgIG9uTW91c2VEb3duIChlOiBFdmVudCkge1xuICAgICAgdGhpcy5oYXNNb3VzZURvd24gPSB0cnVlXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWRvd24nLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZVVwIChlOiBFdmVudCkge1xuICAgICAgdGhpcy5oYXNNb3VzZURvd24gPSBmYWxzZVxuICAgICAgdGhpcy4kZW1pdCgnbW91c2V1cCcsIGUpXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHRoaXMuc2V0VGV4dENvbG9yKHRoaXMudmFsaWRhdGlvblN0YXRlLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtaW5wdXQnLFxuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICB9KSwgdGhpcy5nZW5Db250ZW50KCkpXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZJbnB1dCBmcm9tICcuL1ZJbnB1dCdcblxuZXhwb3J0IHsgVklucHV0IH1cbmV4cG9ydCBkZWZhdWx0IFZJbnB1dFxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkNhcmQuc2FzcydcblxuLy8gRXh0ZW5zaW9uc1xuaW1wb3J0IFZTaGVldCBmcm9tICcuLi9WU2hlZXQnXG5cbi8vIE1peGluc1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4uLy4uL21peGlucy9sb2FkYWJsZSdcbmltcG9ydCBSb3V0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcm91dGFibGUnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBWTm9kZSB9IGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgTG9hZGFibGUsXG4gIFJvdXRhYmxlLFxuICBWU2hlZXRcbikuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtY2FyZCcsXG5cbiAgcHJvcHM6IHtcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGhvdmVyOiBCb29sZWFuLFxuICAgIGltZzogU3RyaW5nLFxuICAgIGxpbms6IEJvb2xlYW4sXG4gICAgbG9hZGVySGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNCxcbiAgICB9LFxuICAgIHJhaXNlZDogQm9vbGVhbixcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1jYXJkJzogdHJ1ZSxcbiAgICAgICAgLi4uUm91dGFibGUub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LWNhcmQtLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LWNhcmQtLWhvdmVyJzogdGhpcy5ob3ZlcixcbiAgICAgICAgJ3YtY2FyZC0tbGluayc6IHRoaXMuaXNDbGlja2FibGUsXG4gICAgICAgICd2LWNhcmQtLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICd2LWNhcmQtLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ3YtY2FyZC0tcmFpc2VkJzogdGhpcy5yYWlzZWQsXG4gICAgICAgIC4uLlZTaGVldC5vcHRpb25zLmNvbXB1dGVkLmNsYXNzZXMuY2FsbCh0aGlzKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGNvbnN0IHN0eWxlOiBEaWN0aW9uYXJ5PHN0cmluZz4gPSB7XG4gICAgICAgIC4uLlZTaGVldC5vcHRpb25zLmNvbXB1dGVkLnN0eWxlcy5jYWxsKHRoaXMpLFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbWcpIHtcbiAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIke3RoaXMuaW1nfVwiKSBjZW50ZXIgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGVcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Qcm9ncmVzcyAoKSB7XG4gICAgICBjb25zdCByZW5kZXIgPSBMb2FkYWJsZS5vcHRpb25zLm1ldGhvZHMuZ2VuUHJvZ3Jlc3MuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXJlbmRlcikgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LWNhcmRfX3Byb2dyZXNzJyxcbiAgICAgICAga2V5OiAncHJvZ3Jlc3MnLFxuICAgICAgfSwgW3JlbmRlcl0pXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyB0YWcsIGRhdGEgfSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZUxpbmsoKVxuXG4gICAgZGF0YS5zdHlsZSA9IHRoaXMuc3R5bGVzXG5cbiAgICBpZiAodGhpcy5pc0NsaWNrYWJsZSkge1xuICAgICAgZGF0YS5hdHRycyA9IGRhdGEuYXR0cnMgfHwge31cbiAgICAgIGRhdGEuYXR0cnMudGFiaW5kZXggPSAwXG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGFnLCB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCBkYXRhKSwgW1xuICAgICAgdGhpcy5nZW5Qcm9ncmVzcygpLFxuICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdCxcbiAgICBdKVxuICB9LFxufSlcbiIsImltcG9ydCAnLi9WUHJvZ3Jlc3NMaW5lYXIuc2FzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHtcbiAgVkZhZGVUcmFuc2l0aW9uLFxuICBWU2xpZGVYVHJhbnNpdGlvbixcbn0gZnJvbSAnLi4vdHJhbnNpdGlvbnMnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBQb3NpdGlvbmFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3Bvc2l0aW9uYWJsZSdcbmltcG9ydCBQcm94eWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Byb3h5YWJsZSdcbmltcG9ydCBUaGVtZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0LCBnZXRTbG90IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IEZ1bmN0aW9uYWxDb21wb25lbnRPcHRpb25zIH0gZnJvbSAndnVlL3R5cGVzJ1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgUG9zaXRpb25hYmxlRmFjdG9yeShbJ2Fic29sdXRlJywgJ2ZpeGVkJywgJ3RvcCcsICdib3R0b20nXSksXG4gIFByb3h5YWJsZSxcbiAgVGhlbWVhYmxlXG4pXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXByb2dyZXNzLWxpbmVhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZE9wYWNpdHk6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgYnVmZmVyVmFsdWU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAxMDAsXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogNCxcbiAgICB9LFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcXVlcnk6IEJvb2xlYW4sXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHN0cmVhbTogQm9vbGVhbixcbiAgICBzdHJpcGVkOiBCb29sZWFuLFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlcm5hbExhenlWYWx1ZTogdGhpcy52YWx1ZSB8fCAwLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIF9fY2FjaGVkQmFja2dyb3VuZCAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yIHx8IHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9fYmFja2dyb3VuZCcsXG4gICAgICAgIHN0eWxlOiB0aGlzLmJhY2tncm91bmRTdHlsZSxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgX19jYWNoZWRCYXIgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KHRoaXMuY29tcHV0ZWRUcmFuc2l0aW9uLCBbdGhpcy5fX2NhY2hlZEJhclR5cGVdKVxuICAgIH0sXG4gICAgX19jYWNoZWRCYXJUeXBlICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRldGVybWluYXRlID8gdGhpcy5fX2NhY2hlZEluZGV0ZXJtaW5hdGUgOiB0aGlzLl9fY2FjaGVkRGV0ZXJtaW5hdGVcbiAgICB9LFxuICAgIF9fY2FjaGVkQnVmZmVyICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19idWZmZXInLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICB9KVxuICAgIH0sXG4gICAgX19jYWNoZWREZXRlcm1pbmF0ZSAoKTogVk5vZGUge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGB2LXByb2dyZXNzLWxpbmVhcl9fZGV0ZXJtaW5hdGVgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgICB9LFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBfX2NhY2hlZEluZGV0ZXJtaW5hdGUgKCk6IFZOb2RlIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZS0tYWN0aXZlJzogdGhpcy5hY3RpdmUsXG4gICAgICAgIH0sXG4gICAgICB9LCBbXG4gICAgICAgIHRoaXMuZ2VuUHJvZ3Jlc3NCYXIoJ2xvbmcnKSxcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzc0Jhcignc2hvcnQnKSxcbiAgICAgIF0pXG4gICAgfSxcbiAgICBfX2NhY2hlZFN0cmVhbSAoKTogVk5vZGUgfCBudWxsIHtcbiAgICAgIGlmICghdGhpcy5zdHJlYW0pIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLnNldFRleHRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1wcm9ncmVzcy1saW5lYXJfX3N0cmVhbScsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IGNvbnZlcnRUb1VuaXQoMTAwIC0gdGhpcy5ub3JtYWxpemVkQnVmZmVyLCAnJScpLFxuICAgICAgICB9LFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kU3R5bGUgKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kT3BhY2l0eSA9IHRoaXMuYmFja2dyb3VuZE9wYWNpdHkgPT0gbnVsbFxuICAgICAgICA/ICh0aGlzLmJhY2tncm91bmRDb2xvciA/IDEgOiAwLjMpXG4gICAgICAgIDogcGFyc2VGbG9hdCh0aGlzLmJhY2tncm91bmRPcGFjaXR5KVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBiYWNrZ3JvdW5kT3BhY2l0eSxcbiAgICAgICAgW3RoaXMuaXNSZXZlcnNlZCA/ICdyaWdodCcgOiAnbGVmdCddOiBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZFZhbHVlLCAnJScpLFxuICAgICAgICB3aWR0aDogY29udmVydFRvVW5pdCh0aGlzLm5vcm1hbGl6ZWRCdWZmZXIgLSB0aGlzLm5vcm1hbGl6ZWRWYWx1ZSwgJyUnKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLWFic29sdXRlJzogdGhpcy5hYnNvbHV0ZSxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1maXhlZCc6IHRoaXMuZml4ZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tcXVlcnknOiB0aGlzLnF1ZXJ5LFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJlYWN0aXZlJzogdGhpcy5yZWFjdGl2ZSxcbiAgICAgICAgJ3YtcHJvZ3Jlc3MtbGluZWFyLS1yZXZlcnNlJzogdGhpcy5pc1JldmVyc2VkLFxuICAgICAgICAndi1wcm9ncmVzcy1saW5lYXItLXJvdW5kZWQnOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICd2LXByb2dyZXNzLWxpbmVhci0tc3RyaXBlZCc6IHRoaXMuc3RyaXBlZCxcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZFRyYW5zaXRpb24gKCk6IEZ1bmN0aW9uYWxDb21wb25lbnRPcHRpb25zIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyBWRmFkZVRyYW5zaXRpb24gOiBWU2xpZGVYVHJhbnNpdGlvblxuICAgIH0sXG4gICAgaXNSZXZlcnNlZCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5ydGwgIT09IHRoaXMucmV2ZXJzZVxuICAgIH0sXG4gICAgbm9ybWFsaXplZEJ1ZmZlciAoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSh0aGlzLmJ1ZmZlclZhbHVlKVxuICAgIH0sXG4gICAgbm9ybWFsaXplZFZhbHVlICgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHRoaXMuaW50ZXJuYWxMYXp5VmFsdWUpXG4gICAgfSxcbiAgICByZWFjdGl2ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLiRsaXN0ZW5lcnMuY2hhbmdlKVxuICAgIH0sXG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qgc3R5bGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge31cblxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICBzdHlsZXMuaGVpZ2h0ID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaW5kZXRlcm1pbmF0ZSAmJiBwYXJzZUZsb2F0KHRoaXMubm9ybWFsaXplZEJ1ZmZlcikgIT09IDEwMCkge1xuICAgICAgICBzdHlsZXMud2lkdGggPSBjb252ZXJ0VG9Vbml0KHRoaXMubm9ybWFsaXplZEJ1ZmZlciwgJyUnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGVzXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuQ29udGVudCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gZ2V0U2xvdCh0aGlzLCAnZGVmYXVsdCcsIHsgdmFsdWU6IHRoaXMuaW50ZXJuYWxMYXp5VmFsdWUgfSlcblxuICAgICAgaWYgKCFzbG90KSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcHJvZ3Jlc3MtbGluZWFyX19jb250ZW50JyxcbiAgICAgIH0sIHNsb3QpXG4gICAgfSxcbiAgICBnZW5MaXN0ZW5lcnMgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy4kbGlzdGVuZXJzXG5cbiAgICAgIGlmICh0aGlzLnJlYWN0aXZlKSB7XG4gICAgICAgIGxpc3RlbmVycy5jbGljayA9IHRoaXMub25DbGlja1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzXG4gICAgfSxcbiAgICBnZW5Qcm9ncmVzc0JhciAobmFtZTogJ2xvbmcnIHwgJ3Nob3J0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcl9faW5kZXRlcm1pbmF0ZScsXG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgW25hbWVdOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBvbkNsaWNrIChlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMucmVhY3RpdmUpIHJldHVyblxuXG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBlLm9mZnNldFggLyB3aWR0aCAqIDEwMFxuICAgIH0sXG4gICAgbm9ybWFsaXplICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICBpZiAodmFsdWUgPCAwKSByZXR1cm4gMFxuICAgICAgaWYgKHZhbHVlID4gMTAwKSByZXR1cm4gMTAwXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXByb2dyZXNzLWxpbmVhcicsXG4gICAgICBhdHRyczoge1xuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogdGhpcy5ub3JtYWxpemVkQnVmZmVyLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHRoaXMuaW5kZXRlcm1pbmF0ZSA/IHVuZGVmaW5lZCA6IHRoaXMubm9ybWFsaXplZFZhbHVlLFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBib3R0b206IHRoaXMuYm90dG9tID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmFjdGl2ZSA/IGNvbnZlcnRUb1VuaXQodGhpcy5oZWlnaHQpIDogMCxcbiAgICAgICAgdG9wOiB0aGlzLnRvcCA/IDAgOiB1bmRlZmluZWQsXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuZ2VuTGlzdGVuZXJzKCksXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIFtcbiAgICAgIHRoaXMuX19jYWNoZWRTdHJlYW0sXG4gICAgICB0aGlzLl9fY2FjaGVkQmFja2dyb3VuZCxcbiAgICAgIHRoaXMuX19jYWNoZWRCdWZmZXIsXG4gICAgICB0aGlzLl9fY2FjaGVkQmFyLFxuICAgICAgdGhpcy5nZW5Db250ZW50KCksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WTGFiZWwuc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL21peGlucy9jb2xvcmFibGUnXG5pbXBvcnQgVGhlbWVhYmxlLCB7IGZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBIZWxwZXJzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgbWl4aW5zKFRoZW1lYWJsZSkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbGFiZWwnLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBhYnNvbHV0ZTogQm9vbGVhbixcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgZm9jdXNlZDogQm9vbGVhbixcbiAgICBmb3I6IFN0cmluZyxcbiAgICBsZWZ0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgdmFsdWU6IEJvb2xlYW4sXG4gIH0sXG5cbiAgcmVuZGVyIChoLCBjdHgpOiBWTm9kZSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbGlzdGVuZXJzLCBwcm9wcyB9ID0gY3R4XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1sYWJlbCcsXG4gICAgICBjbGFzczoge1xuICAgICAgICAndi1sYWJlbC0tYWN0aXZlJzogcHJvcHMudmFsdWUsXG4gICAgICAgICd2LWxhYmVsLS1pcy1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICAuLi5mdW5jdGlvbmFsVGhlbWVDbGFzc2VzKGN0eCksXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZm9yOiBwcm9wcy5mb3IsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICFwcm9wcy5mb3IsXG4gICAgICB9LFxuICAgICAgb246IGxpc3RlbmVycyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGxlZnQ6IGNvbnZlcnRUb1VuaXQocHJvcHMubGVmdCksXG4gICAgICAgIHJpZ2h0OiBjb252ZXJ0VG9Vbml0KHByb3BzLnJpZ2h0KSxcbiAgICAgICAgcG9zaXRpb246IHByb3BzLmFic29sdXRlID8gJ2Fic29sdXRlJyA6ICdyZWxhdGl2ZScsXG4gICAgICB9LFxuICAgICAgcmVmOiAnbGFiZWwnLFxuICAgIH1cblxuICAgIHJldHVybiBoKCdsYWJlbCcsIENvbG9yYWJsZS5vcHRpb25zLm1ldGhvZHMuc2V0VGV4dENvbG9yKHByb3BzLmZvY3VzZWQgJiYgcHJvcHMuY29sb3IsIGRhdGEpLCBjaGlsZHJlbilcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVkxhYmVsIGZyb20gJy4vVkxhYmVsJ1xuXG5leHBvcnQgeyBWTGFiZWwgfVxuZXhwb3J0IGRlZmF1bHQgVkxhYmVsXG4iLCJpbXBvcnQgVnVlLCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IFZQcm9ncmVzc0xpbmVhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhcidcblxuaW50ZXJmYWNlIGNvbG9yYWJsZSBleHRlbmRzIFZ1ZSB7XG4gIGNvbG9yPzogc3RyaW5nXG59XG5cbi8qKlxuICogTG9hZGFibGVcbiAqXG4gKiBAbWl4aW5cbiAqXG4gKiBVc2VkIHRvIGFkZCBsaW5lYXIgcHJvZ3Jlc3MgYmFyIHRvIGNvbXBvbmVudHNcbiAqIENhbiB1c2UgYSBkZWZhdWx0IGJhciB3aXRoIGEgc3BlY2lmaWMgY29sb3JcbiAqIG9yIGRlc2lnbmF0ZSBhIGN1c3RvbSBwcm9ncmVzcyBsaW5lYXIgYmFyXG4gKi9cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kPGNvbG9yYWJsZT4oKS5leHRlbmQoe1xuICBuYW1lOiAnbG9hZGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGxvYWRlckhlaWdodDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDIsXG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuUHJvZ3Jlc3MgKCk6IFZOb2RlIHwgVk5vZGVbXSB8IG51bGwge1xuICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gZmFsc2UpIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiB0aGlzLiRzbG90cy5wcm9ncmVzcyB8fCB0aGlzLiRjcmVhdGVFbGVtZW50KFZQcm9ncmVzc0xpbmVhciwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgICAgIGNvbG9yOiAodGhpcy5sb2FkaW5nID09PSB0cnVlIHx8IHRoaXMubG9hZGluZyA9PT0gJycpXG4gICAgICAgICAgICA/ICh0aGlzLmNvbG9yIHx8ICdwcmltYXJ5JylcbiAgICAgICAgICAgIDogdGhpcy5sb2FkaW5nLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5sb2FkZXJIZWlnaHQsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbn0pXG4iLCIvLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi90aGVtZWFibGUnXG5pbXBvcnQgeyBpbmplY3QgYXMgUmVnaXN0cmFibGVJbmplY3QgfSBmcm9tICcuLi9yZWdpc3RyYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBkZWVwRXF1YWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgeyBjb25zb2xlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUHJvcFZhbGlkYXRvciB9IGZyb20gJ3Z1ZS90eXBlcy9vcHRpb25zJ1xuaW1wb3J0IHsgSW5wdXRNZXNzYWdlLCBJbnB1dFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJ3Z1ZXRpZnkvdHlwZXMnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIENvbG9yYWJsZSxcbiAgUmVnaXN0cmFibGVJbmplY3Q8J2Zvcm0nLCBhbnk+KCdmb3JtJyksXG4gIFRoZW1lYWJsZSxcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3ZhbGlkYXRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGVycm9yOiBCb29sZWFuLFxuICAgIGVycm9yQ291bnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAxLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlczoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXldLFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPElucHV0TWVzc2FnZSB8IG51bGw+LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9IGFzIFByb3BWYWxpZGF0b3I8SW5wdXRNZXNzYWdlIHwgbnVsbD4sXG4gICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgcnVsZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPElucHV0VmFsaWRhdGlvblJ1bGVzPixcbiAgICBzdWNjZXNzOiBCb29sZWFuLFxuICAgIHN1Y2Nlc3NNZXNzYWdlczoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXldLFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPElucHV0TWVzc2FnZSB8IG51bGw+LFxuICAgIHZhbGlkYXRlT25CbHVyOiBCb29sZWFuLFxuICAgIHZhbHVlOiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvckJ1Y2tldDogW10gYXMgc3RyaW5nW10sXG4gICAgICBoYXNDb2xvcjogZmFsc2UsXG4gICAgICBoYXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGhhc0lucHV0OiBmYWxzZSxcbiAgICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgICBpc1Jlc2V0dGluZzogZmFsc2UsXG4gICAgICBsYXp5VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICB2YWxpZDogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRDb2xvciAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGlmICh0aGlzLmNvbG9yKSByZXR1cm4gdGhpcy5jb2xvclxuICAgICAgLy8gSXQncyBhc3N1bWVkIHRoYXQgaWYgdGhlIGlucHV0IGlzIG9uIGFcbiAgICAgIC8vIGRhcmsgYmFja2dyb3VuZCwgdGhlIHVzZXIgd2lsbCB3YW50IHRvXG4gICAgICAvLyBoYXZlIGEgd2hpdGUgY29sb3IuIElmIHRoZSBlbnRpcmUgYXBwXG4gICAgICAvLyBpcyBzZXR1cCB0byBiZSBkYXJrLCB0aGVuIHRoZXkgd2lsbFxuICAgICAgLy8gbGlrZSB3YW50IHRvIHVzZSB0aGVpciBwcmltYXJ5IGNvbG9yXG4gICAgICBpZiAodGhpcy5pc0RhcmsgJiYgIXRoaXMuYXBwSXNEYXJrKSByZXR1cm4gJ3doaXRlJ1xuICAgICAgZWxzZSByZXR1cm4gJ3ByaW1hcnknXG4gICAgfSxcbiAgICBoYXNFcnJvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmludGVybmFsRXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuZXJyb3JCdWNrZXQubGVuZ3RoID4gMCB8fFxuICAgICAgICB0aGlzLmVycm9yXG4gICAgICApXG4gICAgfSxcbiAgICAvLyBUT0RPOiBBZGQgbG9naWMgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gZW5hYmxlIGJhc2VkXG4gICAgLy8gdXBvbiBhIGdvb2QgdmFsaWRhdGlvblxuICAgIGhhc1N1Y2Nlc3MgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN1Y2Nlc3NNZXNzYWdlcy5sZW5ndGggPiAwIHx8XG4gICAgICAgIHRoaXMuc3VjY2Vzc1xuICAgICAgKVxuICAgIH0sXG4gICAgZXh0ZXJuYWxFcnJvciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCB8fCB0aGlzLmVycm9yXG4gICAgfSxcbiAgICBoYXNNZXNzYWdlcyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Lmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGhhc1N0YXRlICgpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHJldHVybiBmYWxzZVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmhhc1N1Y2Nlc3MgfHxcbiAgICAgICAgKHRoaXMuc2hvdWxkVmFsaWRhdGUgJiYgdGhpcy5oYXNFcnJvcilcbiAgICAgIClcbiAgICB9LFxuICAgIGludGVybmFsRXJyb3JNZXNzYWdlcyAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuSW50ZXJuYWxNZXNzYWdlcyh0aGlzLmVycm9yTWVzc2FnZXMpXG4gICAgfSxcbiAgICBpbnRlcm5hbE1lc3NhZ2VzICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5JbnRlcm5hbE1lc3NhZ2VzKHRoaXMubWVzc2FnZXMpXG4gICAgfSxcbiAgICBpbnRlcm5hbFN1Y2Nlc3NNZXNzYWdlcyAoKTogSW5wdXRWYWxpZGF0aW9uUnVsZXMge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuSW50ZXJuYWxNZXNzYWdlcyh0aGlzLnN1Y2Nlc3NNZXNzYWdlcylcbiAgICB9LFxuICAgIGludGVybmFsVmFsdWU6IHtcbiAgICAgIGdldCAoKTogdW5rbm93biB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhenlWYWx1ZVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcblxuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0Rpc2FibGVkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8IChcbiAgICAgICAgISF0aGlzLmZvcm0gJiZcbiAgICAgICAgdGhpcy5mb3JtLmRpc2FibGVkXG4gICAgICApXG4gICAgfSxcbiAgICBpc0ludGVyYWN0aXZlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHlcbiAgICB9LFxuICAgIGlzUmVhZG9ubHkgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgfHwgKFxuICAgICAgICAhIXRoaXMuZm9ybSAmJlxuICAgICAgICB0aGlzLmZvcm0ucmVhZG9ubHlcbiAgICAgIClcbiAgICB9LFxuICAgIHNob3VsZFZhbGlkYXRlICgpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmV4dGVybmFsRXJyb3IpIHJldHVybiB0cnVlXG4gICAgICBpZiAodGhpcy5pc1Jlc2V0dGluZykgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlT25CbHVyXG4gICAgICAgID8gdGhpcy5oYXNGb2N1c2VkICYmICF0aGlzLmlzRm9jdXNlZFxuICAgICAgICA6ICh0aGlzLmhhc0lucHV0IHx8IHRoaXMuaGFzRm9jdXNlZClcbiAgICB9LFxuICAgIHZhbGlkYXRpb25zICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0LnNsaWNlKDAsIE51bWJlcih0aGlzLmVycm9yQ291bnQpKVxuICAgIH0sXG4gICAgdmFsaWRhdGlvblN0YXRlICgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuaGFzRXJyb3IgJiYgdGhpcy5zaG91bGRWYWxpZGF0ZSkgcmV0dXJuICdlcnJvcidcbiAgICAgIGlmICh0aGlzLmhhc1N1Y2Nlc3MpIHJldHVybiAnc3VjY2VzcydcbiAgICAgIGlmICh0aGlzLmhhc0NvbG9yKSByZXR1cm4gdGhpcy5jb21wdXRlZENvbG9yXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uVGFyZ2V0ICgpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbEVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEVycm9yTWVzc2FnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdWNjZXNzTWVzc2FnZXMgJiYgdGhpcy5zdWNjZXNzTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN1Y2Nlc3NNZXNzYWdlc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1lc3NhZ2VzICYmIHRoaXMubWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1lc3NhZ2VzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JCdWNrZXRcbiAgICAgIH0gZWxzZSByZXR1cm4gW11cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIGhhbmRsZXIgKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgIGlmIChkZWVwRXF1YWwobmV3VmFsLCBvbGRWYWwpKSByZXR1cm5cbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICB9LFxuICAgIGludGVybmFsVmFsdWUgKCkge1xuICAgICAgLy8gSWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBzZXR0aW5nIGlucHV0LFxuICAgICAgLy8gbWFyayBpdCB3aXRoIGhhc0lucHV0XG4gICAgICB0aGlzLmhhc0lucHV0ID0gdHJ1ZVxuICAgICAgdGhpcy52YWxpZGF0ZU9uQmx1ciB8fCB0aGlzLiRuZXh0VGljayh0aGlzLnZhbGlkYXRlKVxuICAgIH0sXG4gICAgaXNGb2N1c2VkICh2YWwpIHtcbiAgICAgIC8vIFNob3VsZCBub3QgY2hlY2sgdmFsaWRhdGlvblxuICAgICAgLy8gaWYgZGlzYWJsZWRcbiAgICAgIGlmIChcbiAgICAgICAgIXZhbCAmJlxuICAgICAgICAhdGhpcy5pc0Rpc2FibGVkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1c2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLnZhbGlkYXRlT25CbHVyICYmIHRoaXMuJG5leHRUaWNrKHRoaXMudmFsaWRhdGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBpc1Jlc2V0dGluZyAoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYXNJbnB1dCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaGFzRm9jdXNlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNSZXNldHRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLnZhbGlkYXRlKClcbiAgICAgIH0sIDApXG4gICAgfSxcbiAgICBoYXNFcnJvciAodmFsKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6ZXJyb3InLCB2YWwpXG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLmxhenlWYWx1ZSA9IHZhbFxuICAgIH0sXG4gIH0sXG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIHRoaXMudmFsaWRhdGUoKVxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0ucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLnVucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuSW50ZXJuYWxNZXNzYWdlcyAobWVzc2FnZXM6IElucHV0TWVzc2FnZSB8IG51bGwpOiBJbnB1dFZhbGlkYXRpb25SdWxlcyB7XG4gICAgICBpZiAoIW1lc3NhZ2VzKSByZXR1cm4gW11cbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWVzc2FnZXMpKSByZXR1cm4gbWVzc2FnZXNcbiAgICAgIGVsc2UgcmV0dXJuIFttZXNzYWdlc11cbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgdGhpcy5pc1Jlc2V0dGluZyA9IHRydWVcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IEFycmF5LmlzQXJyYXkodGhpcy5pbnRlcm5hbFZhbHVlKVxuICAgICAgICA/IFtdXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICAvKiogQHB1YmxpYyAqL1xuICAgIHJlc2V0VmFsaWRhdGlvbiAoKSB7XG4gICAgICB0aGlzLmlzUmVzZXR0aW5nID0gdHJ1ZVxuICAgIH0sXG4gICAgLyoqIEBwdWJsaWMgKi9cbiAgICB2YWxpZGF0ZSAoZm9yY2UgPSBmYWxzZSwgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IGVycm9yQnVja2V0ID0gW11cbiAgICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5pbnRlcm5hbFZhbHVlXG5cbiAgICAgIGlmIChmb3JjZSkgdGhpcy5oYXNJbnB1dCA9IHRoaXMuaGFzRm9jdXNlZCA9IHRydWVcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucnVsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW2luZGV4XVxuICAgICAgICBjb25zdCB2YWxpZCA9IHR5cGVvZiBydWxlID09PSAnZnVuY3Rpb24nID8gcnVsZSh2YWx1ZSkgOiBydWxlXG5cbiAgICAgICAgaWYgKHZhbGlkID09PSBmYWxzZSB8fCB0eXBlb2YgdmFsaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZXJyb3JCdWNrZXQucHVzaCh2YWxpZCB8fCAnJylcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsaWQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIGNvbnNvbGVFcnJvcihgUnVsZXMgc2hvdWxkIHJldHVybiBhIHN0cmluZyBvciBib29sZWFuLCByZWNlaXZlZCAnJHt0eXBlb2YgdmFsaWR9JyBpbnN0ZWFkYCwgdGhpcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVycm9yQnVja2V0ID0gZXJyb3JCdWNrZXRcbiAgICAgIHRoaXMudmFsaWQgPSBlcnJvckJ1Y2tldC5sZW5ndGggPT09IDBcblxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRcbiAgICB9LFxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZUb29sYmFyIGZyb20gJy4vVlRvb2xiYXInXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcblxuY29uc3QgVlRvb2xiYXJUaXRsZSA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtdG9vbGJhcl9fdGl0bGUnKVxuY29uc3QgVlRvb2xiYXJJdGVtcyA9IGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtdG9vbGJhcl9faXRlbXMnKVxuXG5leHBvcnQge1xuICBWVG9vbGJhcixcbiAgVlRvb2xiYXJJdGVtcyxcbiAgVlRvb2xiYXJUaXRsZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAkX3Z1ZXRpZnlfc3ViY29tcG9uZW50czoge1xuICAgIFZUb29sYmFyLFxuICAgIFZUb29sYmFySXRlbXMsXG4gICAgVlRvb2xiYXJUaXRsZSxcbiAgfSxcbn1cbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZDb3VudGVyLnNhc3MnXG5cbi8vIE1peGluc1xuaW1wb3J0IFRoZW1lYWJsZSwgeyBmdW5jdGlvbmFsVGhlbWVDbGFzc2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL3RoZW1lYWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhUaGVtZWFibGUpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNvdW50ZXInLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgbWF4OiBbTnVtYmVyLCBTdHJpbmddLFxuICB9LFxuXG4gIHJlbmRlciAoaCwgY3R4KTogVk5vZGUge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IGN0eFxuICAgIGNvbnN0IG1heCA9IHBhcnNlSW50KHByb3BzLm1heCwgMTApXG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChwcm9wcy52YWx1ZSwgMTApXG4gICAgY29uc3QgY29udGVudCA9IG1heCA/IGAke3ZhbHVlfSAvICR7bWF4fWAgOiBTdHJpbmcocHJvcHMudmFsdWUpXG4gICAgY29uc3QgaXNHcmVhdGVyID0gbWF4ICYmICh2YWx1ZSA+IG1heClcblxuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtY291bnRlcicsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnZXJyb3ItLXRleHQnOiBpc0dyZWF0ZXIsXG4gICAgICAgIC4uLmZ1bmN0aW9uYWxUaGVtZUNsYXNzZXMoY3R4KSxcbiAgICAgIH0sXG4gICAgfSwgY29udGVudClcbiAgfSxcbn0pXG4iLCJpbXBvcnQgVkNvdW50ZXIgZnJvbSAnLi9WQ291bnRlcidcblxuZXhwb3J0IHsgVkNvdW50ZXIgfVxuZXhwb3J0IGRlZmF1bHQgVkNvdW50ZXJcbiIsIi8vIERpcmVjdGl2ZXNcbmltcG9ydCBJbnRlcnNlY3QgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9pbnRlcnNlY3QnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgY29uc29sZVdhcm4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW50ZXJzZWN0YWJsZSAob3B0aW9uczogeyBvblZpc2libGU6IHN0cmluZ1tdIH0pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICEoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpKSB7XG4gICAgLy8gZG8gbm90aGluZyBiZWNhdXNlIGludGVyc2VjdGlvbiBvYnNlcnZlciBpcyBub3QgYXZhaWxhYmxlXG4gICAgcmV0dXJuIFZ1ZS5leHRlbmQoeyBuYW1lOiAnaW50ZXJzZWN0YWJsZScgfSlcbiAgfVxuXG4gIHJldHVybiBWdWUuZXh0ZW5kKHtcbiAgICBuYW1lOiAnaW50ZXJzZWN0YWJsZScsXG5cbiAgICBtb3VudGVkICgpIHtcbiAgICAgIEludGVyc2VjdC5pbnNlcnRlZCh0aGlzLiRlbCBhcyBIVE1MRWxlbWVudCwge1xuICAgICAgICBuYW1lOiAnaW50ZXJzZWN0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMub25PYnNlcnZlLFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgZGVzdHJveWVkICgpIHtcbiAgICAgIEludGVyc2VjdC51bmJpbmQodGhpcy4kZWwgYXMgSFRNTEVsZW1lbnQpXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uT2JzZXJ2ZSAoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdLCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsIGlzSW50ZXJzZWN0aW5nOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghaXNJbnRlcnNlY3RpbmcpIHJldHVyblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBvcHRpb25zLm9uVmlzaWJsZS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKHRoaXMgYXMgYW55KVtvcHRpb25zLm9uVmlzaWJsZVtpXV1cblxuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZVdhcm4ob3B0aW9ucy5vblZpc2libGVbaV0gKyAnIG1ldGhvZCBpcyBub3QgYXZhaWxhYmxlIG9uIHRoZSBpbnN0YW5jZSBidXQgcmVmZXJlbmNlZCBpbiBpbnRlcnNlY3RhYmxlIG1peGluIG9wdGlvbnMnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG4iLCIvLyBTdHlsZXNcbmltcG9ydCAnLi9WVGV4dEZpZWxkLnNhc3MnXG5cbi8vIEV4dGVuc2lvbnNcbmltcG9ydCBWSW5wdXQgZnJvbSAnLi4vVklucHV0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkNvdW50ZXIgZnJvbSAnLi4vVkNvdW50ZXInXG5pbXBvcnQgVkxhYmVsIGZyb20gJy4uL1ZMYWJlbCdcblxuLy8gTWl4aW5zXG5pbXBvcnQgSW50ZXJzZWN0YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvaW50ZXJzZWN0YWJsZSdcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvbG9hZGFibGUnXG5pbXBvcnQgVmFsaWRhdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3ZhbGlkYXRhYmxlJ1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgcmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQsIGtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgYnJlYWtpbmcsIGNvbnNvbGVXYXJuIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcbmltcG9ydCB7IFZOb2RlLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZS90eXBlcydcblxuY29uc3QgYmFzZU1peGlucyA9IG1peGlucyhcbiAgVklucHV0LFxuICBJbnRlcnNlY3RhYmxlKHtcbiAgICBvblZpc2libGU6IFtcbiAgICAgICdzZXRMYWJlbFdpZHRoJyxcbiAgICAgICdzZXRQcmVmaXhXaWR0aCcsXG4gICAgICAnc2V0UHJlcGVuZFdpZHRoJyxcbiAgICAgICd0cnlBdXRvZm9jdXMnLFxuICAgIF0sXG4gIH0pLFxuICBMb2FkYWJsZSxcbilcbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gICRyZWZzOiB7XG4gICAgbGFiZWw6IEhUTUxFbGVtZW50XG4gICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgICAncHJlcGVuZC1pbm5lcic6IEhUTUxFbGVtZW50XG4gICAgcHJlZml4OiBIVE1MRWxlbWVudFxuICAgIHN1ZmZpeDogSFRNTEVsZW1lbnRcbiAgfVxufVxuXG5jb25zdCBkaXJ0eVR5cGVzID0gWydjb2xvcicsICdmaWxlJywgJ3RpbWUnLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICd3ZWVrJywgJ21vbnRoJ11cblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtdGV4dC1maWVsZCcsXG5cbiAgZGlyZWN0aXZlczogeyByaXBwbGUgfSxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZW5kT3V0ZXJJY29uOiBTdHJpbmcsXG4gICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICBjbGVhckljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY2xlYXInLFxuICAgIH0sXG4gICAgY291bnRlcjogW0Jvb2xlYW4sIE51bWJlciwgU3RyaW5nXSxcbiAgICBjb3VudGVyVmFsdWU6IEZ1bmN0aW9uIGFzIFByb3BUeXBlPCh2YWx1ZTogYW55KSA9PiBudW1iZXI+LFxuICAgIGZpbGxlZDogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGZ1bGxXaWR0aDogQm9vbGVhbixcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIG91dGxpbmVkOiBCb29sZWFuLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgcHJlZml4OiBTdHJpbmcsXG4gICAgcHJlcGVuZElubmVySWNvbjogU3RyaW5nLFxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcbiAgICBzaGFwZWQ6IEJvb2xlYW4sXG4gICAgc2luZ2xlTGluZTogQm9vbGVhbixcbiAgICBzb2xvOiBCb29sZWFuLFxuICAgIHNvbG9JbnZlcnRlZDogQm9vbGVhbixcbiAgICBzdWZmaXg6IFN0cmluZyxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGJhZElucHV0OiBmYWxzZSxcbiAgICBsYWJlbFdpZHRoOiAwLFxuICAgIHByZWZpeFdpZHRoOiAwLFxuICAgIHByZXBlbmRXaWR0aDogMCxcbiAgICBpbml0aWFsVmFsdWU6IG51bGwsXG4gICAgaXNCb290ZWQ6IGZhbHNlLFxuICAgIGlzQ2xlYXJpbmc6IGZhbHNlLFxuICB9KSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WSW5wdXQub3B0aW9ucy5jb21wdXRlZC5jbGFzc2VzLmNhbGwodGhpcyksXG4gICAgICAgICd2LXRleHQtZmllbGQnOiB0cnVlLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1mdWxsLXdpZHRoJzogdGhpcy5mdWxsV2lkdGgsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXByZWZpeCc6IHRoaXMucHJlZml4LFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zaW5nbGUtbGluZSc6IHRoaXMuaXNTaW5nbGUsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNvbG8nOiB0aGlzLmlzU29sbyxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tc29sby1pbnZlcnRlZCc6IHRoaXMuc29sb0ludmVydGVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1zb2xvLWZsYXQnOiB0aGlzLmZsYXQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLWZpbGxlZCc6IHRoaXMuZmlsbGVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1pcy1ib290ZWQnOiB0aGlzLmlzQm9vdGVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1lbmNsb3NlZCc6IHRoaXMuaXNFbmNsb3NlZCxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tcmV2ZXJzZSc6IHRoaXMucmV2ZXJzZSxcbiAgICAgICAgJ3YtdGV4dC1maWVsZC0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuICAgICAgICAndi10ZXh0LWZpZWxkLS1wbGFjZWhvbGRlcic6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXJvdW5kZWQnOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICd2LXRleHQtZmllbGQtLXNoYXBlZCc6IHRoaXMuc2hhcGVkLFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWRDb2xvciAoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkQ29sb3IgPSBWYWxpZGF0YWJsZS5vcHRpb25zLmNvbXB1dGVkLmNvbXB1dGVkQ29sb3IuY2FsbCh0aGlzKVxuXG4gICAgICBpZiAoIXRoaXMuc29sb0ludmVydGVkIHx8ICF0aGlzLmlzRm9jdXNlZCkgcmV0dXJuIGNvbXB1dGVkQ29sb3JcblxuICAgICAgcmV0dXJuIHRoaXMuY29sb3IgfHwgJ3ByaW1hcnknXG4gICAgfSxcbiAgICBjb21wdXRlZENvdW50ZXJWYWx1ZSAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb3VudGVyVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlclZhbHVlKHRoaXMuaW50ZXJuYWxWYWx1ZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAodGhpcy5pbnRlcm5hbFZhbHVlIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aFxuICAgIH0sXG4gICAgaGFzQ291bnRlciAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jb3VudGVyICE9PSBmYWxzZSAmJiB0aGlzLmNvdW50ZXIgIT0gbnVsbFxuICAgIH0sXG4gICAgaGFzRGV0YWlscyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gVklucHV0Lm9wdGlvbnMuY29tcHV0ZWQuaGFzRGV0YWlscy5jYWxsKHRoaXMpIHx8IHRoaXMuaGFzQ291bnRlclxuICAgIH0sXG4gICAgaW50ZXJuYWxWYWx1ZToge1xuICAgICAgZ2V0ICgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMubGF6eVZhbHVlID0gdmFsXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5sYXp5VmFsdWUpXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNEaXJ0eSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5sYXp5VmFsdWU/LnRvU3RyaW5nKCkubGVuZ3RoID4gMCB8fCB0aGlzLmJhZElucHV0XG4gICAgfSxcbiAgICBpc0VuY2xvc2VkICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZmlsbGVkIHx8XG4gICAgICAgIHRoaXMuaXNTb2xvIHx8XG4gICAgICAgIHRoaXMub3V0bGluZWRcbiAgICAgIClcbiAgICB9LFxuICAgIGlzTGFiZWxBY3RpdmUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEaXJ0eSB8fCBkaXJ0eVR5cGVzLmluY2x1ZGVzKHRoaXMudHlwZSlcbiAgICB9LFxuICAgIGlzU2luZ2xlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuaXNTb2xvIHx8XG4gICAgICAgIHRoaXMuc2luZ2xlTGluZSB8fFxuICAgICAgICB0aGlzLmZ1bGxXaWR0aCB8fFxuICAgICAgICAvLyBodHRwczovL21hdGVyaWFsLmlvL2NvbXBvbmVudHMvdGV4dC1maWVsZHMvI2ZpbGxlZC10ZXh0LWZpZWxkXG4gICAgICAgICh0aGlzLmZpbGxlZCAmJiAhdGhpcy5oYXNMYWJlbClcbiAgICAgIClcbiAgICB9LFxuICAgIGlzU29sbyAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zb2xvIHx8IHRoaXMuc29sb0ludmVydGVkXG4gICAgfSxcbiAgICBsYWJlbFBvc2l0aW9uICgpOiBSZWNvcmQ8J2xlZnQnIHwgJ3JpZ2h0Jywgc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPiB7XG4gICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMucHJlZml4ICYmICF0aGlzLmxhYmVsVmFsdWUpID8gdGhpcy5wcmVmaXhXaWR0aCA6IDBcblxuICAgICAgaWYgKHRoaXMubGFiZWxWYWx1ZSAmJiB0aGlzLnByZXBlbmRXaWR0aCkgb2Zmc2V0IC09IHRoaXMucHJlcGVuZFdpZHRoXG5cbiAgICAgIHJldHVybiAodGhpcy4kdnVldGlmeS5ydGwgPT09IHRoaXMucmV2ZXJzZSkgPyB7XG4gICAgICAgIGxlZnQ6IG9mZnNldCxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgIH0gOiB7XG4gICAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgICAgcmlnaHQ6IG9mZnNldCxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dMYWJlbCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNMYWJlbCAmJiAoIXRoaXMuaXNTaW5nbGUgfHwgKCF0aGlzLmlzTGFiZWxBY3RpdmUgJiYgIXRoaXMucGxhY2Vob2xkZXIpKVxuICAgIH0sXG4gICAgbGFiZWxWYWx1ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNTaW5nbGUgJiZcbiAgICAgICAgQm9vbGVhbih0aGlzLmlzRm9jdXNlZCB8fCB0aGlzLmlzTGFiZWxBY3RpdmUgfHwgdGhpcy5wbGFjZWhvbGRlcilcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbGFiZWxWYWx1ZTogJ3NldExhYmVsV2lkdGgnLFxuICAgIG91dGxpbmVkOiAnc2V0TGFiZWxXaWR0aCcsXG4gICAgbGFiZWwgKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5zZXRMYWJlbFdpZHRoKVxuICAgIH0sXG4gICAgcHJlZml4ICgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKHRoaXMuc2V0UHJlZml4V2lkdGgpXG4gICAgfSxcbiAgICBpc0ZvY3VzZWQ6ICd1cGRhdGVWYWx1ZScsXG4gICAgdmFsdWUgKHZhbCkge1xuICAgICAgdGhpcy5sYXp5VmFsdWUgPSB2YWxcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCdib3gnKSkge1xuICAgICAgYnJlYWtpbmcoJ2JveCcsICdmaWxsZWQnLCB0aGlzKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCdicm93c2VyLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBicmVha2luZygnYnJvd3Nlci1hdXRvY29tcGxldGUnLCAnYXV0b2NvbXBsZXRlJywgdGhpcylcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodGhpcy5zaGFwZWQgJiYgISh0aGlzLmZpbGxlZCB8fCB0aGlzLm91dGxpbmVkIHx8IHRoaXMuaXNTb2xvKSkge1xuICAgICAgY29uc29sZVdhcm4oJ3NoYXBlZCBzaG91bGQgYmUgdXNlZCB3aXRoIGVpdGhlciBmaWxsZWQgb3Igb3V0bGluZWQnLCB0aGlzKVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmF1dG9mb2N1cyAmJiB0aGlzLnRyeUF1dG9mb2N1cygpXG4gICAgdGhpcy5zZXRMYWJlbFdpZHRoKClcbiAgICB0aGlzLnNldFByZWZpeFdpZHRoKClcbiAgICB0aGlzLnNldFByZXBlbmRXaWR0aCgpXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+ICh0aGlzLmlzQm9vdGVkID0gdHJ1ZSkpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8qKiBAcHVibGljICovXG4gICAgZm9jdXMgKCkge1xuICAgICAgdGhpcy5vbkZvY3VzKClcbiAgICB9LFxuICAgIC8qKiBAcHVibGljICovXG4gICAgYmx1ciAoZT86IEV2ZW50KSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzU5MTNcbiAgICAgIC8vIFNhZmFyaSB0YWIgb3JkZXIgZ2V0cyBicm9rZW4gaWYgY2FsbGVkIHN5bmNocm9ub3VzXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmJsdXIoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNsZWFyYWJsZUNhbGxiYWNrICgpIHtcbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLmludGVybmFsVmFsdWUgPSBudWxsKVxuICAgIH0sXG4gICAgZ2VuQXBwZW5kU2xvdCAoKSB7XG4gICAgICBjb25zdCBzbG90ID0gW11cblxuICAgICAgaWYgKHRoaXMuJHNsb3RzWydhcHBlbmQtb3V0ZXInXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ2FwcGVuZC1vdXRlciddIGFzIFZOb2RlW10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kT3V0ZXJJY29uKSB7XG4gICAgICAgIHNsb3QucHVzaCh0aGlzLmdlbkljb24oJ2FwcGVuZE91dGVyJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdvdXRlcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5QcmVwZW5kSW5uZXJTbG90ICgpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSBbXVxuXG4gICAgICBpZiAodGhpcy4kc2xvdHNbJ3ByZXBlbmQtaW5uZXInXSkge1xuICAgICAgICBzbG90LnB1c2godGhpcy4kc2xvdHNbJ3ByZXBlbmQtaW5uZXInXSBhcyBWTm9kZVtdKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXBlbmRJbm5lckljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbigncHJlcGVuZElubmVyJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ3ByZXBlbmQnLCAnaW5uZXInLCBzbG90KVxuICAgIH0sXG4gICAgZ2VuSWNvblNsb3QgKCkge1xuICAgICAgY29uc3Qgc2xvdCA9IFtdXG5cbiAgICAgIGlmICh0aGlzLiRzbG90c1snYXBwZW5kJ10pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuJHNsb3RzWydhcHBlbmQnXSBhcyBWTm9kZVtdKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZEljb24pIHtcbiAgICAgICAgc2xvdC5wdXNoKHRoaXMuZ2VuSWNvbignYXBwZW5kJykpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdpbm5lcicsIHNsb3QpXG4gICAgfSxcbiAgICBnZW5JbnB1dFNsb3QgKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbklucHV0U2xvdC5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IHByZXBlbmQgPSB0aGlzLmdlblByZXBlbmRJbm5lclNsb3QoKVxuXG4gICAgICBpZiAocHJlcGVuZCkge1xuICAgICAgICBpbnB1dC5jaGlsZHJlbiA9IGlucHV0LmNoaWxkcmVuIHx8IFtdXG4gICAgICAgIGlucHV0LmNoaWxkcmVuLnVuc2hpZnQocHJlcGVuZClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSxcbiAgICBnZW5DbGVhckljb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmNsZWFyYWJsZSkgcmV0dXJuIG51bGxcblxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuaXNEaXJ0eSA/IHVuZGVmaW5lZCA6IHsgYXR0cnM6IHsgZGlzYWJsZWQ6IHRydWUgfSB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdlblNsb3QoJ2FwcGVuZCcsICdpbm5lcicsIFtcbiAgICAgICAgdGhpcy5nZW5JY29uKCdjbGVhcicsIHRoaXMuY2xlYXJhYmxlQ2FsbGJhY2ssIGRhdGEpLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkNvdW50ZXIgKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0NvdW50ZXIpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuY291bnRlciA9PT0gdHJ1ZSA/IHRoaXMuYXR0cnMkLm1heGxlbmd0aCA6IHRoaXMuY291bnRlclxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWQ291bnRlciwge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICBtYXgsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuY29tcHV0ZWRDb3VudGVyVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2VuQ29udHJvbCAoKSB7XG4gICAgICByZXR1cm4gVklucHV0Lm9wdGlvbnMubWV0aG9kcy5nZW5Db250cm9sLmNhbGwodGhpcylcbiAgICB9LFxuICAgIGdlbkRlZmF1bHRTbG90ICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZ2VuRmllbGRzZXQoKSxcbiAgICAgICAgdGhpcy5nZW5UZXh0RmllbGRTbG90KCksXG4gICAgICAgIHRoaXMuZ2VuQ2xlYXJJY29uKCksXG4gICAgICAgIHRoaXMuZ2VuSWNvblNsb3QoKSxcbiAgICAgICAgdGhpcy5nZW5Qcm9ncmVzcygpLFxuICAgICAgXVxuICAgIH0sXG4gICAgZ2VuRmllbGRzZXQgKCkge1xuICAgICAgaWYgKCF0aGlzLm91dGxpbmVkKSByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFt0aGlzLmdlbkxlZ2VuZCgpXSlcbiAgICB9LFxuICAgIGdlbkxhYmVsICgpIHtcbiAgICAgIGlmICghdGhpcy5zaG93TGFiZWwpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICAgICAgY29sb3I6IHRoaXMudmFsaWRhdGlvblN0YXRlLFxuICAgICAgICAgIGRhcms6IHRoaXMuZGFyayxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGZvY3VzZWQ6ICF0aGlzLmlzU2luZ2xlICYmICh0aGlzLmlzRm9jdXNlZCB8fCAhIXRoaXMudmFsaWRhdGlvblN0YXRlKSxcbiAgICAgICAgICBmb3I6IHRoaXMuY29tcHV0ZWRJZCxcbiAgICAgICAgICBsZWZ0OiB0aGlzLmxhYmVsUG9zaXRpb24ubGVmdCxcbiAgICAgICAgICBsaWdodDogdGhpcy5saWdodCxcbiAgICAgICAgICByaWdodDogdGhpcy5sYWJlbFBvc2l0aW9uLnJpZ2h0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmxhYmVsVmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZMYWJlbCwgZGF0YSwgdGhpcy4kc2xvdHMubGFiZWwgfHwgdGhpcy5sYWJlbClcbiAgICB9LFxuICAgIGdlbkxlZ2VuZCAoKSB7XG4gICAgICBjb25zdCB3aWR0aCA9ICF0aGlzLnNpbmdsZUxpbmUgJiYgKHRoaXMubGFiZWxWYWx1ZSB8fCB0aGlzLmlzRGlydHkpID8gdGhpcy5sYWJlbFdpZHRoIDogMFxuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogJyYjODIwMzsnIH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnbGVnZW5kJywge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiAhdGhpcy5pc1NpbmdsZSA/IGNvbnZlcnRUb1VuaXQod2lkdGgpIDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSwgW3NwYW5dKVxuICAgIH0sXG4gICAgZ2VuSW5wdXQgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5saXN0ZW5lcnMkKVxuICAgICAgZGVsZXRlIGxpc3RlbmVyc1snY2hhbmdlJ10gLy8gQ2hhbmdlIHNob3VsZCBub3QgYmUgYm91bmQgZXh0ZXJuYWxseVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB2YWx1ZTogKHRoaXMudHlwZSA9PT0gJ251bWJlcicgJiYgT2JqZWN0LmlzKHRoaXMubGF6eVZhbHVlLCAtMCkpID8gJy0wJyA6IHRoaXMubGF6eVZhbHVlLFxuICAgICAgICB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIC4uLnRoaXMuYXR0cnMkLFxuICAgICAgICAgIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpZDogdGhpcy5jb21wdXRlZElkLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIHJlYWRvbmx5OiB0aGlzLmlzUmVhZG9ubHksXG4gICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICB9LFxuICAgICAgICBvbjogT2JqZWN0LmFzc2lnbihsaXN0ZW5lcnMsIHtcbiAgICAgICAgICBibHVyOiB0aGlzLm9uQmx1cixcbiAgICAgICAgICBpbnB1dDogdGhpcy5vbklucHV0LFxuICAgICAgICAgIGZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIH0pLFxuICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2VuTWVzc2FnZXMgKCkge1xuICAgICAgaWYgKCF0aGlzLnNob3dEZXRhaWxzKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBtZXNzYWdlc05vZGUgPSBWSW5wdXQub3B0aW9ucy5tZXRob2RzLmdlbk1lc3NhZ2VzLmNhbGwodGhpcylcbiAgICAgIGNvbnN0IGNvdW50ZXJOb2RlID0gdGhpcy5nZW5Db3VudGVyKClcblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRleHQtZmllbGRfX2RldGFpbHMnLFxuICAgICAgfSwgW1xuICAgICAgICBtZXNzYWdlc05vZGUsXG4gICAgICAgIGNvdW50ZXJOb2RlLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlblRleHRGaWVsZFNsb3QgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXRleHQtZmllbGRfX3Nsb3QnLFxuICAgICAgfSwgW1xuICAgICAgICB0aGlzLmdlbkxhYmVsKCksXG4gICAgICAgIHRoaXMucHJlZml4ID8gdGhpcy5nZW5BZmZpeCgncHJlZml4JykgOiBudWxsLFxuICAgICAgICB0aGlzLmdlbklucHV0KCksXG4gICAgICAgIHRoaXMuc3VmZml4ID8gdGhpcy5nZW5BZmZpeCgnc3VmZml4JykgOiBudWxsLFxuICAgICAgXSlcbiAgICB9LFxuICAgIGdlbkFmZml4ICh0eXBlOiAncHJlZml4JyB8ICdzdWZmaXgnKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzczogYHYtdGV4dC1maWVsZF9fJHt0eXBlfWAsXG4gICAgICAgIHJlZjogdHlwZSxcbiAgICAgIH0sIHRoaXNbdHlwZV0pXG4gICAgfSxcbiAgICBvbkJsdXIgKGU/OiBFdmVudCkge1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZVxuICAgICAgZSAmJiB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLiRlbWl0KCdibHVyJywgZSkpXG4gICAgfSxcbiAgICBvbkNsaWNrICgpIHtcbiAgICAgIGlmICh0aGlzLmlzRm9jdXNlZCB8fCB0aGlzLmlzRGlzYWJsZWQgfHwgIXRoaXMuJHJlZnMuaW5wdXQpIHJldHVyblxuXG4gICAgICB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICB9LFxuICAgIG9uRm9jdXMgKGU/OiBFdmVudCkge1xuICAgICAgaWYgKCF0aGlzLiRyZWZzLmlucHV0KSByZXR1cm5cblxuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuJHJlZnMuaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZVxuICAgICAgICBlICYmIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uSW5wdXQgKGU6IEV2ZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgIHRoaXMuYmFkSW5wdXQgPSB0YXJnZXQudmFsaWRpdHkgJiYgdGFyZ2V0LnZhbGlkaXR5LmJhZElucHV0XG4gICAgfSxcbiAgICBvbktleURvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IGtleUNvZGVzLmVudGVyKSB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmludGVybmFsVmFsdWUpXG5cbiAgICAgIHRoaXMuJGVtaXQoJ2tleWRvd24nLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZURvd24gKGU6IEV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IGlucHV0IGZyb20gYmVpbmcgYmx1cnJlZFxuICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLiRyZWZzLmlucHV0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIFZJbnB1dC5vcHRpb25zLm1ldGhvZHMub25Nb3VzZURvd24uY2FsbCh0aGlzLCBlKVxuICAgIH0sXG4gICAgb25Nb3VzZVVwIChlOiBFdmVudCkge1xuICAgICAgaWYgKHRoaXMuaGFzTW91c2VEb3duKSB0aGlzLmZvY3VzKClcblxuICAgICAgVklucHV0Lm9wdGlvbnMubWV0aG9kcy5vbk1vdXNlVXAuY2FsbCh0aGlzLCBlKVxuICAgIH0sXG4gICAgc2V0TGFiZWxXaWR0aCAoKSB7XG4gICAgICBpZiAoIXRoaXMub3V0bGluZWQpIHJldHVyblxuXG4gICAgICB0aGlzLmxhYmVsV2lkdGggPSB0aGlzLiRyZWZzLmxhYmVsXG4gICAgICAgID8gTWF0aC5taW4odGhpcy4kcmVmcy5sYWJlbC5zY3JvbGxXaWR0aCAqIDAuNzUgKyA2LCAodGhpcy4kZWwgYXMgSFRNTEVsZW1lbnQpLm9mZnNldFdpZHRoIC0gMjQpXG4gICAgICAgIDogMFxuICAgIH0sXG4gICAgc2V0UHJlZml4V2lkdGggKCkge1xuICAgICAgaWYgKCF0aGlzLiRyZWZzLnByZWZpeCkgcmV0dXJuXG5cbiAgICAgIHRoaXMucHJlZml4V2lkdGggPSB0aGlzLiRyZWZzLnByZWZpeC5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgc2V0UHJlcGVuZFdpZHRoICgpIHtcbiAgICAgIGlmICghdGhpcy5vdXRsaW5lZCB8fCAhdGhpcy4kcmVmc1sncHJlcGVuZC1pbm5lciddKSByZXR1cm5cblxuICAgICAgdGhpcy5wcmVwZW5kV2lkdGggPSB0aGlzLiRyZWZzWydwcmVwZW5kLWlubmVyJ10ub2Zmc2V0V2lkdGhcbiAgICB9LFxuICAgIHRyeUF1dG9mb2N1cyAoKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmF1dG9mb2N1cyB8fFxuICAgICAgICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICF0aGlzLiRyZWZzLmlucHV0IHx8XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuJHJlZnMuaW5wdXRcbiAgICAgICkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgdXBkYXRlVmFsdWUgKHZhbDogYm9vbGVhbikge1xuICAgICAgLy8gU2V0cyB2YWxpZGF0aW9uU3RhdGUgZnJvbSB2YWxpZGF0YWJsZVxuICAgICAgdGhpcy5oYXNDb2xvciA9IHZhbFxuXG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5sYXp5VmFsdWVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsVmFsdWUgIT09IHRoaXMubGF6eVZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMubGF6eVZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KVxuIiwiaW1wb3J0IFZQcm9ncmVzc0xpbmVhciBmcm9tICcuL1ZQcm9ncmVzc0xpbmVhcidcblxuZXhwb3J0IHsgVlByb2dyZXNzTGluZWFyIH1cbmV4cG9ydCBkZWZhdWx0IFZQcm9ncmVzc0xpbmVhclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndHJhbnNpdGlvbmFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZTogU3RyaW5nLFxuICAgIG9yaWdpbjogU3RyaW5nLFxuICAgIHRyYW5zaXRpb246IFN0cmluZyxcbiAgfSxcbn0pXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVkFwcEJhci5zYXNzJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVlRvb2xiYXIgZnJvbSAnLi4vVlRvb2xiYXIvVlRvb2xiYXInXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9zY3JvbGwnXG5cbi8vIE1peGluc1xuaW1wb3J0IEFwcGxpY2F0aW9uYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvYXBwbGljYXRpb25hYmxlJ1xuaW1wb3J0IFNjcm9sbGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Njcm9sbGFibGUnXG5pbXBvcnQgU1NSQm9vdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Nzci1ib290YWJsZSdcbmltcG9ydCBUb2dnbGVhYmxlIGZyb20gJy4uLy4uL21peGlucy90b2dnbGVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmNvbnN0IGJhc2VNaXhpbnMgPSBtaXhpbnMoXG4gIFZUb29sYmFyLFxuICBTY3JvbGxhYmxlLFxuICBTU1JCb290YWJsZSxcbiAgVG9nZ2xlYWJsZSxcbiAgQXBwbGljYXRpb25hYmxlKCd0b3AnLCBbXG4gICAgJ2NsaXBwZWRMZWZ0JyxcbiAgICAnY2xpcHBlZFJpZ2h0JyxcbiAgICAnY29tcHV0ZWRIZWlnaHQnLFxuICAgICdpbnZlcnRlZFNjcm9sbCcsXG4gICAgJ2lzRXh0ZW5kZWQnLFxuICAgICdpc1Byb21pbmVudCcsXG4gICAgJ3ZhbHVlJyxcbiAgXSlcbilcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtYXBwLWJhcicsXG5cbiAgZGlyZWN0aXZlczogeyBTY3JvbGwgfSxcblxuICBwcm9wczoge1xuICAgIGNsaXBwZWRMZWZ0OiBCb29sZWFuLFxuICAgIGNsaXBwZWRSaWdodDogQm9vbGVhbixcbiAgICBjb2xsYXBzZU9uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGVsZXZhdGVPblNjcm9sbDogQm9vbGVhbixcbiAgICBmYWRlSW1nT25TY3JvbGw6IEJvb2xlYW4sXG4gICAgaGlkZU9uU2Nyb2xsOiBCb29sZWFuLFxuICAgIGludmVydGVkU2Nyb2xsOiBCb29sZWFuLFxuICAgIHNjcm9sbE9mZlNjcmVlbjogQm9vbGVhbixcbiAgICBzaHJpbmtPblNjcm9sbDogQm9vbGVhbixcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMudmFsdWUsXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgYXBwbGljYXRpb25Qcm9wZXJ0eSAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAhdGhpcy5ib3R0b20gPyAndG9wJyA6ICdib3R0b20nXG4gICAgfSxcbiAgICBjYW5TY3JvbGwgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgU2Nyb2xsYWJsZS5vcHRpb25zLmNvbXB1dGVkLmNhblNjcm9sbC5jYWxsKHRoaXMpICYmXG4gICAgICAgIChcbiAgICAgICAgICB0aGlzLmludmVydGVkU2Nyb2xsIHx8XG4gICAgICAgICAgdGhpcy5lbGV2YXRlT25TY3JvbGwgfHxcbiAgICAgICAgICB0aGlzLmhpZGVPblNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuY29sbGFwc2VPblNjcm9sbCB8fFxuICAgICAgICAgIHRoaXMuaXNCb290ZWQgfHxcbiAgICAgICAgICAvLyBJZiBmYWxzZXksIHVzZXIgaGFzIHByb3ZpZGVkIGFuXG4gICAgICAgICAgLy8gZXhwbGljaXQgdmFsdWUgd2hpY2ggc2hvdWxkXG4gICAgICAgICAgLy8gb3ZlcndyaXRlIGFueXRoaW5nIHdlIGRvXG4gICAgICAgICAgIXRoaXMudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH0sXG4gICAgY2xhc3NlcyAoKTogb2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLlZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuY2xhc3Nlcy5jYWxsKHRoaXMpLFxuICAgICAgICAndi10b29sYmFyLS1jb2xsYXBzZSc6IHRoaXMuY29sbGFwc2UgfHwgdGhpcy5jb2xsYXBzZU9uU2Nyb2xsLFxuICAgICAgICAndi1hcHAtYmFyJzogdHJ1ZSxcbiAgICAgICAgJ3YtYXBwLWJhci0tY2xpcHBlZCc6IHRoaXMuY2xpcHBlZExlZnQgfHwgdGhpcy5jbGlwcGVkUmlnaHQsXG4gICAgICAgICd2LWFwcC1iYXItLWZhZGUtaW1nLW9uLXNjcm9sbCc6IHRoaXMuZmFkZUltZ09uU2Nyb2xsLFxuICAgICAgICAndi1hcHAtYmFyLS1lbGV2YXRlLW9uLXNjcm9sbCc6IHRoaXMuZWxldmF0ZU9uU2Nyb2xsLFxuICAgICAgICAndi1hcHAtYmFyLS1maXhlZCc6ICF0aGlzLmFic29sdXRlICYmICh0aGlzLmFwcCB8fCB0aGlzLmZpeGVkKSxcbiAgICAgICAgJ3YtYXBwLWJhci0taGlkZS1zaGFkb3cnOiB0aGlzLmhpZGVTaGFkb3csXG4gICAgICAgICd2LWFwcC1iYXItLWlzLXNjcm9sbGVkJzogdGhpcy5jdXJyZW50U2Nyb2xsID4gMCxcbiAgICAgICAgJ3YtYXBwLWJhci0tc2hyaW5rLW9uLXNjcm9sbCc6IHRoaXMuc2hyaW5rT25TY3JvbGwsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZENvbnRlbnRIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuc2hyaW5rT25TY3JvbGwpIHJldHVybiBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmNvbXB1dGVkQ29udGVudEhlaWdodC5jYWxsKHRoaXMpXG5cbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY29tcHV0ZWRPcmlnaW5hbEhlaWdodFxuXG4gICAgICBjb25zdCBtaW4gPSB0aGlzLmRlbnNlID8gNDggOiA1NlxuICAgICAgY29uc3QgbWF4ID0gaGVpZ2h0XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gbWF4IC0gbWluXG4gICAgICBjb25zdCBpdGVyYXRpb24gPSBkaWZmZXJlbmNlIC8gdGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZFxuICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jdXJyZW50U2Nyb2xsICogaXRlcmF0aW9uXG5cbiAgICAgIHJldHVybiBNYXRoLm1heChtaW4sIG1heCAtIG9mZnNldClcbiAgICB9LFxuICAgIGNvbXB1dGVkRm9udFNpemUgKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoIXRoaXMuaXNQcm9taW5lbnQpIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5kZW5zZSA/IDk2IDogMTI4XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gbWF4IC0gdGhpcy5jb21wdXRlZENvbnRlbnRIZWlnaHRcbiAgICAgIGNvbnN0IGluY3JlbWVudCA9IDAuMDAzNDdcblxuICAgICAgLy8gMS41cmVtIHRvIGEgbWluaW11bSBvZiAxLjI1cmVtXG4gICAgICByZXR1cm4gTnVtYmVyKCgxLjUwIC0gZGlmZmVyZW5jZSAqIGluY3JlbWVudCkudG9GaXhlZCgyKSlcbiAgICB9LFxuICAgIGNvbXB1dGVkTGVmdCAoKTogbnVtYmVyIHtcbiAgICAgIGlmICghdGhpcy5hcHAgfHwgdGhpcy5jbGlwcGVkTGVmdCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb24ubGVmdFxuICAgIH0sXG4gICAgY29tcHV0ZWRNYXJnaW5Ub3AgKCk6IG51bWJlciB7XG4gICAgICBpZiAoIXRoaXMuYXBwKSByZXR1cm4gMFxuXG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5hcHBsaWNhdGlvbi5iYXJcbiAgICB9LFxuICAgIGNvbXB1dGVkT3BhY2l0eSAoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICghdGhpcy5mYWRlSW1nT25TY3JvbGwpIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgY29uc3Qgb3BhY2l0eSA9IE1hdGgubWF4KFxuICAgICAgICAodGhpcy5jb21wdXRlZFNjcm9sbFRocmVzaG9sZCAtIHRoaXMuY3VycmVudFNjcm9sbCkgLyB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkLFxuICAgICAgICAwXG4gICAgICApXG5cbiAgICAgIHJldHVybiBOdW1iZXIocGFyc2VGbG9hdChvcGFjaXR5KS50b0ZpeGVkKDIpKVxuICAgIH0sXG4gICAgY29tcHV0ZWRPcmlnaW5hbEhlaWdodCAoKTogbnVtYmVyIHtcbiAgICAgIGxldCBoZWlnaHQgPSBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmNvbXB1dGVkQ29udGVudEhlaWdodC5jYWxsKHRoaXMpXG4gICAgICBpZiAodGhpcy5pc0V4dGVuZGVkKSBoZWlnaHQgKz0gcGFyc2VJbnQodGhpcy5leHRlbnNpb25IZWlnaHQpXG4gICAgICByZXR1cm4gaGVpZ2h0XG4gICAgfSxcbiAgICBjb21wdXRlZFJpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgaWYgKCF0aGlzLmFwcCB8fCB0aGlzLmNsaXBwZWRSaWdodCkgcmV0dXJuIDBcblxuICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYXBwbGljYXRpb24ucmlnaHRcbiAgICB9LFxuICAgIGNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkICgpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsVGhyZXNob2xkKSByZXR1cm4gTnVtYmVyKHRoaXMuc2Nyb2xsVGhyZXNob2xkKVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlZE9yaWdpbmFsSGVpZ2h0IC0gKHRoaXMuZGVuc2UgPyA0OCA6IDU2KVxuICAgIH0sXG4gICAgY29tcHV0ZWRUcmFuc2Zvcm0gKCk6IG51bWJlciB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNhblNjcm9sbCB8fFxuICAgICAgICAodGhpcy5lbGV2YXRlT25TY3JvbGwgJiYgdGhpcy5jdXJyZW50U2Nyb2xsID09PSAwICYmIHRoaXMuaXNBY3RpdmUpXG4gICAgICApIHJldHVybiAwXG5cbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSByZXR1cm4gMFxuXG4gICAgICBjb25zdCBzY3JvbGxPZmZTY3JlZW4gPSB0aGlzLnNjcm9sbE9mZlNjcmVlblxuICAgICAgICA/IHRoaXMuY29tcHV0ZWRIZWlnaHRcbiAgICAgICAgOiB0aGlzLmNvbXB1dGVkQ29udGVudEhlaWdodFxuXG4gICAgICByZXR1cm4gdGhpcy5ib3R0b20gPyBzY3JvbGxPZmZTY3JlZW4gOiAtc2Nyb2xsT2ZmU2NyZWVuXG4gICAgfSxcbiAgICBoaWRlU2hhZG93ICgpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmVsZXZhdGVPblNjcm9sbCAmJiB0aGlzLmlzRXh0ZW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcm9sbCA8IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxldmF0ZU9uU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTY3JvbGwgPT09IDAgfHxcbiAgICAgICAgICB0aGlzLmNvbXB1dGVkVHJhbnNmb3JtIDwgMFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAhdGhpcy5pc0V4dGVuZGVkIHx8XG4gICAgICAgIHRoaXMuc2Nyb2xsT2ZmU2NyZWVuXG4gICAgICApICYmIHRoaXMuY29tcHV0ZWRUcmFuc2Zvcm0gIT09IDBcbiAgICB9LFxuICAgIGlzQ29sbGFwc2VkICgpOiBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy5jb2xsYXBzZU9uU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiBWVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLmlzQ29sbGFwc2VkLmNhbGwodGhpcylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcm9sbCA+IDBcbiAgICB9LFxuICAgIGlzUHJvbWluZW50ICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFZUb29sYmFyLm9wdGlvbnMuY29tcHV0ZWQuaXNQcm9taW5lbnQuY2FsbCh0aGlzKSB8fFxuICAgICAgICB0aGlzLnNocmlua09uU2Nyb2xsXG4gICAgICApXG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5WVG9vbGJhci5vcHRpb25zLmNvbXB1dGVkLnN0eWxlcy5jYWxsKHRoaXMpLFxuICAgICAgICBmb250U2l6ZTogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkRm9udFNpemUsICdyZW0nKSxcbiAgICAgICAgbWFyZ2luVG9wOiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRNYXJnaW5Ub3ApLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7Y29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkVHJhbnNmb3JtKX0pYCxcbiAgICAgICAgbGVmdDogY29udmVydFRvVW5pdCh0aGlzLmNvbXB1dGVkTGVmdCksXG4gICAgICAgIHJpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuY29tcHV0ZWRSaWdodCksXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGNhblNjcm9sbDogJ29uU2Nyb2xsJyxcbiAgICBjb21wdXRlZFRyYW5zZm9ybSAoKSB7XG4gICAgICAvLyBOb3JtYWxseSB3ZSBkbyBub3Qgd2FudCB0aGUgdi1hcHAtYmFyXG4gICAgICAvLyB0byB1cGRhdGUgdGhlIGFwcGxpY2F0aW9uIHRvcCB2YWx1ZVxuICAgICAgLy8gdG8gYXZvaWQgc2NyZWVuIGp1bXAuIEhvd2V2ZXIsIGluXG4gICAgICAvLyB0aGlzIHNpdHVhdGlvbiwgd2UgbXVzdCBzbyB0aGF0XG4gICAgICAvLyB0aGUgY2xpcHBlZCBkcmF3ZXIgY2FuIHVwZGF0ZVxuICAgICAgLy8gaXRzIHRvcCB2YWx1ZSB3aGVuIHNjcm9sbGVkXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNhblNjcm9sbCB8fFxuICAgICAgICAoIXRoaXMuY2xpcHBlZExlZnQgJiYgIXRoaXMuY2xpcHBlZFJpZ2h0KVxuICAgICAgKSByZXR1cm5cblxuICAgICAgdGhpcy5jYWxsVXBkYXRlKClcbiAgICB9LFxuICAgIGludmVydGVkU2Nyb2xsICh2YWw6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSAhdmFsIHx8IHRoaXMuY3VycmVudFNjcm9sbCAhPT0gMFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgaWYgKHRoaXMuaW52ZXJ0ZWRTY3JvbGwpIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5CYWNrZ3JvdW5kICgpIHtcbiAgICAgIGNvbnN0IHJlbmRlciA9IFZUb29sYmFyLm9wdGlvbnMubWV0aG9kcy5nZW5CYWNrZ3JvdW5kLmNhbGwodGhpcylcblxuICAgICAgcmVuZGVyLmRhdGEgPSB0aGlzLl9iKHJlbmRlci5kYXRhIHx8IHt9LCByZW5kZXIudGFnISwge1xuICAgICAgICBzdHlsZTogeyBvcGFjaXR5OiB0aGlzLmNvbXB1dGVkT3BhY2l0eSB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHJlbmRlclxuICAgIH0sXG4gICAgdXBkYXRlQXBwbGljYXRpb24gKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZlcnRlZFNjcm9sbFxuICAgICAgICA/IDBcbiAgICAgICAgOiB0aGlzLmNvbXB1dGVkSGVpZ2h0ICsgdGhpcy5jb21wdXRlZFRyYW5zZm9ybVxuICAgIH0sXG4gICAgdGhyZXNob2xkTWV0ICgpIHtcbiAgICAgIGlmICh0aGlzLmludmVydGVkU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmN1cnJlbnRTY3JvbGwgPiB0aGlzLmNvbXB1dGVkU2Nyb2xsVGhyZXNob2xkXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oaWRlT25TY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRoaXMuaXNTY3JvbGxpbmdVcCB8fFxuICAgICAgICAgIHRoaXMuY3VycmVudFNjcm9sbCA8IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3VycmVudFRocmVzaG9sZCA8IHRoaXMuY29tcHV0ZWRTY3JvbGxUaHJlc2hvbGQpIHJldHVyblxuXG4gICAgICB0aGlzLnNhdmVkU2Nyb2xsID0gdGhpcy5jdXJyZW50U2Nyb2xsXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgcmVuZGVyID0gVlRvb2xiYXIub3B0aW9ucy5yZW5kZXIuY2FsbCh0aGlzLCBoKVxuXG4gICAgcmVuZGVyLmRhdGEgPSByZW5kZXIuZGF0YSB8fCB7fVxuXG4gICAgaWYgKHRoaXMuY2FuU2Nyb2xsKSB7XG4gICAgICByZW5kZXIuZGF0YS5kaXJlY3RpdmVzID0gcmVuZGVyLmRhdGEuZGlyZWN0aXZlcyB8fCBbXVxuICAgICAgcmVuZGVyLmRhdGEuZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgYXJnOiB0aGlzLnNjcm9sbFRhcmdldCxcbiAgICAgICAgbmFtZTogJ3Njcm9sbCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLm9uU2Nyb2xsLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyXG4gIH0sXG59KVxuIiwiLy8gU3R5bGVzXG5pbXBvcnQgJy4vVk1haW4uc2FzcydcblxuLy8gTWl4aW5zXG5pbXBvcnQgU1NSQm9vdGFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3Nzci1ib290YWJsZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgU1NSQm9vdGFibGUuZXh0ZW5kKHtcbiAgbmFtZTogJ3YtbWFpbicsXG5cbiAgcHJvcHM6IHtcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdtYWluJyxcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgc3R5bGVzICgpOiBvYmplY3Qge1xuICAgICAgY29uc3Qge1xuICAgICAgICBiYXIsIHRvcCwgcmlnaHQsIGZvb3RlciwgaW5zZXRGb290ZXIsIGJvdHRvbSwgbGVmdCxcbiAgICAgIH0gPSB0aGlzLiR2dWV0aWZ5LmFwcGxpY2F0aW9uXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IGAke3RvcCArIGJhcn1weGAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogYCR7cmlnaHR9cHhgLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBgJHtmb290ZXIgKyBpbnNldEZvb3RlciArIGJvdHRvbX1weGAsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBgJHtsZWZ0fXB4YCxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LW1haW4nLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzLFxuICAgICAgcmVmOiAnbWFpbicsXG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIFtcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiAndi1tYWluX193cmFwJyB9LFxuICAgICAgICB0aGlzLiRzbG90cy5kZWZhdWx0XG4gICAgICApLFxuICAgIF0pXG4gIH0sXG59KVxuIiwiLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG4vLyBFeHRlbnNpb25zXG5pbXBvcnQgVk1haW4gZnJvbSAnLi4vVk1haW4vVk1haW4nXG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi8uLi91dGlsL2NvbnNvbGUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWTWFpbi5leHRlbmQoe1xuICBuYW1lOiAndi1tYWluJyxcblxuICBjcmVhdGVkICgpIHtcbiAgICBkZXByZWNhdGUoJ3YtY29udGVudCcsICd2LW1haW4nLCB0aGlzKVxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICAvLyBBZGQgdGhlIGxlZ2FjeSBjbGFzcyBuYW1lc1xuICAgIGNvbnN0IG5vZGUgPSBWTWFpbi5vcHRpb25zLnJlbmRlci5jYWxsKHRoaXMsIGgpXG5cbiAgICBub2RlLmRhdGEhLnN0YXRpY0NsYXNzICs9ICcgdi1jb250ZW50J1xuICAgIG5vZGUuY2hpbGRyZW4hWzBdIS5kYXRhIS5zdGF0aWNDbGFzcyArPSAnIHYtY29udGVudF9fd3JhcCdcblxuICAgIHJldHVybiBoKG5vZGUudGFnLCBub2RlLmRhdGEsIG5vZGUuY2hpbGRyZW4pXG4gIH0sXG59KVxuIiwiaW1wb3J0ICcuL19ncmlkLnNhc3MnXG5pbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCdzcGFjZXInLCAnZGl2JywgJ3Ytc3BhY2VyJylcbiIsImltcG9ydCAnLi9fZ3JpZC5zYXNzJ1xuaW1wb3J0ICcuL1ZHcmlkLnNhc3MnXG5cbmltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCdcblxuaW1wb3J0IG1lcmdlRGF0YSBmcm9tICcuLi8uLi91dGlsL21lcmdlRGF0YSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IEdyaWQoJ2NvbnRhaW5lcicpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LWNvbnRhaW5lcicsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgaWQ6IFN0cmluZyxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgIH0sXG4gICAgZmx1aWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICByZW5kZXIgKGgsIHsgcHJvcHMsIGRhdGEsIGNoaWxkcmVuIH0pIHtcbiAgICBsZXQgY2xhc3Nlc1xuICAgIGNvbnN0IHsgYXR0cnMgfSA9IGRhdGFcbiAgICBpZiAoYXR0cnMpIHtcbiAgICAgIC8vIHJlc2V0IGF0dHJzIHRvIGV4dHJhY3QgdXRpbGl0eSBjbGFzZXMgbGlrZSBwYS0zXG4gICAgICBkYXRhLmF0dHJzID0ge31cbiAgICAgIGNsYXNzZXMgPSBPYmplY3Qua2V5cyhhdHRycykuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBvbmNlIHJlc29sdmVkXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvaXNzdWVzLzc4NDFcbiAgICAgICAgaWYgKGtleSA9PT0gJ3Nsb3QnKSByZXR1cm4gZmFsc2VcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJzW2tleV1cblxuICAgICAgICAvLyBhZGQgYmFjayBkYXRhIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXRlc3Q9XCJmb29cIiBidXQgZG8gbm90XG4gICAgICAgIC8vIGFkZCB0aGVtIGFzIGNsYXNzZXNcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdkYXRhLScpKSB7XG4gICAgICAgICAgZGF0YS5hdHRycyFba2V5XSA9IHZhbHVlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaWQpIHtcbiAgICAgIGRhdGEuZG9tUHJvcHMgPSBkYXRhLmRvbVByb3BzIHx8IHt9XG4gICAgICBkYXRhLmRvbVByb3BzLmlkID0gcHJvcHMuaWRcbiAgICB9XG5cbiAgICByZXR1cm4gaChcbiAgICAgIHByb3BzLnRhZyxcbiAgICAgIG1lcmdlRGF0YShkYXRhLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAnY29udGFpbmVyJyxcbiAgICAgICAgY2xhc3M6IEFycmF5PGFueT4oe1xuICAgICAgICAgICdjb250YWluZXItLWZsdWlkJzogcHJvcHMuZmx1aWQsXG4gICAgICAgIH0pLmNvbmNhdChjbGFzc2VzIHx8IFtdKSxcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApXG4gIH0sXG59KVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZCYWRnZS5zYXNzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24vVkljb24nXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuaW1wb3J0IFRvZ2dsZWFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RvZ2dsZWFibGUnXG5pbXBvcnQgVHJhbnNpdGlvbmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL3RyYW5zaXRpb25hYmxlJ1xuaW1wb3J0IHsgZmFjdG9yeSBhcyBQb3NpdGlvbmFibGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbWl4aW5zL3Bvc2l0aW9uYWJsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuaW1wb3J0IHtcbiAgY29udmVydFRvVW5pdCxcbiAgZ2V0U2xvdCxcbn0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IG1peGlucyhcbiAgQ29sb3JhYmxlLFxuICBQb3NpdGlvbmFibGVGYWN0b3J5KFsnbGVmdCcsICdib3R0b20nXSksXG4gIFRoZW1lYWJsZSxcbiAgVG9nZ2xlYWJsZSxcbiAgVHJhbnNpdGlvbmFibGUsXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuKS5leHRlbmQoe1xuICBuYW1lOiAndi1iYWRnZScsXG5cbiAgcHJvcHM6IHtcbiAgICBhdmF0YXI6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgZG90OiBCb29sZWFuLFxuICAgIGxhYmVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJHZ1ZXRpZnkuYmFkZ2UnLFxuICAgIH0sXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGlubGluZTogQm9vbGVhbixcbiAgICBvZmZzZXRYOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIG9mZnNldFk6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgb3ZlcmxhcDogQm9vbGVhbixcbiAgICB0aWxlOiBCb29sZWFuLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzY2FsZS1yb3RhdGUtdHJhbnNpdGlvbicsXG4gICAgfSxcbiAgICB2YWx1ZTogeyBkZWZhdWx0OiB0cnVlIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3YtYmFkZ2UtLWF2YXRhcic6IHRoaXMuYXZhdGFyLFxuICAgICAgICAndi1iYWRnZS0tYm9yZGVyZWQnOiB0aGlzLmJvcmRlcmVkLFxuICAgICAgICAndi1iYWRnZS0tYm90dG9tJzogdGhpcy5ib3R0b20sXG4gICAgICAgICd2LWJhZGdlLS1kb3QnOiB0aGlzLmRvdCxcbiAgICAgICAgJ3YtYmFkZ2UtLWljb24nOiB0aGlzLmljb24gIT0gbnVsbCxcbiAgICAgICAgJ3YtYmFkZ2UtLWlubGluZSc6IHRoaXMuaW5saW5lLFxuICAgICAgICAndi1iYWRnZS0tbGVmdCc6IHRoaXMubGVmdCxcbiAgICAgICAgJ3YtYmFkZ2UtLW92ZXJsYXAnOiB0aGlzLm92ZXJsYXAsXG4gICAgICAgICd2LWJhZGdlLS10aWxlJzogdGhpcy50aWxlLFxuICAgICAgICAuLi50aGlzLnRoZW1lQ2xhc3NlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkQm90dG9tICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID8gJ2F1dG8nIDogdGhpcy5jb21wdXRlZFlPZmZzZXRcbiAgICB9LFxuICAgIGNvbXB1dGVkTGVmdCAoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmlzUnRsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQgPyB0aGlzLmNvbXB1dGVkWE9mZnNldCA6ICdhdXRvJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5sZWZ0ID8gJ2F1dG8nIDogdGhpcy5jb21wdXRlZFhPZmZzZXRcbiAgICB9LFxuICAgIGNvbXB1dGVkUmlnaHQgKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5pc1J0bCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0ID8gJ2F1dG8nIDogdGhpcy5jb21wdXRlZFhPZmZzZXRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICF0aGlzLmxlZnQgPyAnYXV0bycgOiB0aGlzLmNvbXB1dGVkWE9mZnNldFxuICAgIH0sXG4gICAgY29tcHV0ZWRUb3AgKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5ib3R0b20gPyB0aGlzLmNvbXB1dGVkWU9mZnNldCA6ICdhdXRvJ1xuICAgIH0sXG4gICAgY29tcHV0ZWRYT2Zmc2V0ICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY1Bvc2l0aW9uKHRoaXMub2Zmc2V0WClcbiAgICB9LFxuICAgIGNvbXB1dGVkWU9mZnNldCAoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNQb3NpdGlvbih0aGlzLm9mZnNldFkpXG4gICAgfSxcbiAgICBpc1J0bCAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5ydGxcbiAgICB9LFxuICAgIC8vIERlZmF1bHQgZmFsbGJhY2sgaWYgb2Zmc2V0WFxuICAgIC8vIG9yIG9mZnNldFkgYXJlIHVuZGVmaW5lZC5cbiAgICBvZmZzZXQgKCk6IG51bWJlciB7XG4gICAgICBpZiAodGhpcy5vdmVybGFwKSByZXR1cm4gdGhpcy5kb3QgPyA4IDogMTJcbiAgICAgIHJldHVybiB0aGlzLmRvdCA/IDIgOiA0XG4gICAgfSxcbiAgICBzdHlsZXMgKCk6IG9iamVjdCB7XG4gICAgICBpZiAodGhpcy5pbmxpbmUpIHJldHVybiB7fVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBib3R0b206IHRoaXMuY29tcHV0ZWRCb3R0b20sXG4gICAgICAgIGxlZnQ6IHRoaXMuY29tcHV0ZWRMZWZ0LFxuICAgICAgICByaWdodDogdGhpcy5jb21wdXRlZFJpZ2h0LFxuICAgICAgICB0b3A6IHRoaXMuY29tcHV0ZWRUb3AsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FsY1Bvc2l0aW9uIChvZmZzZXQ6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gICAgICByZXR1cm4gYGNhbGMoMTAwJSAtICR7Y29udmVydFRvVW5pdChvZmZzZXQgfHwgdGhpcy5vZmZzZXQpfSlgXG4gICAgfSxcbiAgICBnZW5CYWRnZSAoKSB7XG4gICAgICBjb25zdCBsYW5nID0gdGhpcy4kdnVldGlmeS5sYW5nXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuJGF0dHJzWydhcmlhLWxhYmVsJ10gfHwgbGFuZy50KHRoaXMubGFiZWwpXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1iYWRnZV9fYmFkZ2UnLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXMsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgJ2FyaWEtYXRvbWljJzogdGhpcy4kYXR0cnNbJ2FyaWEtYXRvbWljJ10gfHwgJ3RydWUnLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogbGFiZWwsXG4gICAgICAgICAgJ2FyaWEtbGl2ZSc6IHRoaXMuJGF0dHJzWydhcmlhLWxpdmUnXSB8fCAncG9saXRlJyxcbiAgICAgICAgICB0aXRsZTogdGhpcy4kYXR0cnMudGl0bGUsXG4gICAgICAgICAgcm9sZTogdGhpcy4kYXR0cnMucm9sZSB8fCAnc3RhdHVzJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgICBuYW1lOiAnc2hvdycsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICAgIH1dLFxuICAgICAgfSlcblxuICAgICAgY29uc3QgYmFkZ2UgPSB0aGlzLiRjcmVhdGVFbGVtZW50KCdzcGFuJywgZGF0YSwgW3RoaXMuZ2VuQmFkZ2VDb250ZW50KCldKVxuXG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbikgcmV0dXJuIGJhZGdlXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0cmFuc2l0aW9uJywge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIG5hbWU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgICAgICBvcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgICAgfSxcbiAgICAgIH0sIFtiYWRnZV0pXG4gICAgfSxcbiAgICBnZW5CYWRnZUNvbnRlbnQgKCkge1xuICAgICAgLy8gRG90IHByb3Agc2hvd3Mgbm8gY29udGVudFxuICAgICAgaWYgKHRoaXMuZG90KSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGNvbnN0IHNsb3QgPSBnZXRTbG90KHRoaXMsICdiYWRnZScpXG5cbiAgICAgIGlmIChzbG90KSByZXR1cm4gc2xvdFxuICAgICAgaWYgKHRoaXMuY29udGVudCkgcmV0dXJuIFN0cmluZyh0aGlzLmNvbnRlbnQpXG4gICAgICBpZiAodGhpcy5pY29uKSByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudChWSWNvbiwgdGhpcy5pY29uKVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSxcbiAgICBnZW5CYWRnZVdyYXBwZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1iYWRnZV9fd3JhcHBlcicsXG4gICAgICB9LCBbdGhpcy5nZW5CYWRnZSgpXSlcbiAgICB9LFxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICBjb25zdCBiYWRnZSA9IFt0aGlzLmdlbkJhZGdlV3JhcHBlcigpXVxuICAgIGNvbnN0IGNoaWxkcmVuID0gW2dldFNsb3QodGhpcyldXG4gICAgY29uc3Qge1xuICAgICAgJ2FyaWEtYXRvbWljJzogX3gsXG4gICAgICAnYXJpYS1sYWJlbCc6IF95LFxuICAgICAgJ2FyaWEtbGl2ZSc6IF96LFxuICAgICAgcm9sZSxcbiAgICAgIHRpdGxlLFxuICAgICAgLi4uYXR0cnNcbiAgICB9ID0gdGhpcy4kYXR0cnNcblxuICAgIGlmICh0aGlzLmlubGluZSAmJiB0aGlzLmxlZnQpIGNoaWxkcmVuLnVuc2hpZnQoYmFkZ2UpXG4gICAgZWxzZSBjaGlsZHJlbi5wdXNoKGJhZGdlKVxuXG4gICAgcmV0dXJuIGgoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtYmFkZ2UnLFxuICAgICAgYXR0cnMsXG4gICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgIH0sIGNoaWxkcmVuKVxuICB9LFxufSlcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgVkljb24gZnJvbSAnLi4vVkljb24nXG5pbXBvcnQgVkJ0biBmcm9tICcuLi9WQnRuL1ZCdG4nXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1hcHAtYmFyLW5hdi1pY29uJyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHJlbmRlciAoaCwgeyBzbG90cywgbGlzdGVuZXJzLCBwcm9wcywgZGF0YSB9KSB7XG4gICAgY29uc3QgZCA9IE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgc3RhdGljQ2xhc3M6IChgdi1hcHAtYmFyX19uYXYtaWNvbiAke2RhdGEuc3RhdGljQ2xhc3MgfHwgJyd9YCkudHJpbSgpLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGljb246IHRydWUsXG4gICAgICB9LFxuICAgICAgb246IGxpc3RlbmVycyxcbiAgICB9KVxuXG4gICAgY29uc3QgZGVmYXVsdFNsb3QgPSBzbG90cygpLmRlZmF1bHRcblxuICAgIHJldHVybiBoKFZCdG4sIGQsIGRlZmF1bHRTbG90IHx8IFtoKFZJY29uLCAnJG1lbnUnKV0pXG4gIH0sXG59KVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3Ytc3RlcHBlcicse21vZGVsOnt2YWx1ZTooX3ZtLmUxKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmUxPSQkdn0sZXhwcmVzc2lvbjpcImUxXCJ9fSxbX2MoJ2xvYWRpbmcnLHthdHRyczp7XCJhY3RpdmVcIjpfdm0uaXNMb2FkaW5nLFwibG9hZGVyXCI6XCJiYXJzXCIsXCJpcy1mdWxsLXBhZ2VcIjp0cnVlLFwiY29sb3JcIjpcImJsdWVcIn0sb246e1widXBkYXRlOmFjdGl2ZVwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmlzTG9hZGluZz0kZXZlbnR9fX0pLF92bS5fdihcIiBcIiksX2MoJ3Ytc3RlcHBlci1oZWFkZXInLFtfYygndi1zdGVwcGVyLXN0ZXAnLHthdHRyczp7XCJjb21wbGV0ZVwiOl92bS5lMSA+IDEsXCJzdGVwXCI6XCIxXCIsXCJlZGl0YWJsZVwiOmZhbHNlfX0sW192bS5fdihcIiBGdWxsIE5hbWUgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1zdGVwcGVyLXN0ZXAnLHthdHRyczp7XCJjb21wbGV0ZVwiOl92bS5lMSA+IDIsXCJzdGVwXCI6XCIyXCIsXCJlZGl0YWJsZVwiOmZhbHNlfX0sW192bS5fdihcIiBDb250YWN0IE51bWJlciBcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1zdGVwcGVyLWl0ZW1zJyxbX2MoJ3Ytc3RlcHBlci1jb250ZW50Jyx7YXR0cnM6e1wic3RlcFwiOlwiMVwifX0sW19jKCd2LWNhcmQnLHtzdGF0aWNDbGFzczpcIm1iLTEyXCIsYXR0cnM6e1wiZmxhdFwiOlwiXCJ9fSxbX2MoJ3YtY2FyZC10ZXh0JyxbX2MoJ3YtbGF5b3V0Jyx7YXR0cnM6e1wid3JhcFwiOlwiXCJ9fSxbX2MoJ3YtZmxleCcse2F0dHJzOntcInhzMTJcIjpcIlwiLFwibWQxMlwiOlwiXCIsXCJzbTEyXCI6XCJcIn19LFtfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wicmlnaHRcIjpcIlwiLFwiZGVuc2VcIjpcIlwiLFwic29sb1wiOlwiXCIsXCJsYWJlbFwiOlwiRnVsbG5hbWVcIixcIm91dGxpbmVkXCI6XCJcIixcInBsYWNlaG9sZGVyXCI6XCJGdWxsbmFtZVwifSxtb2RlbDp7dmFsdWU6KF92bS5mdWxsbmFtZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5mdWxsbmFtZT0kJHZ9LGV4cHJlc3Npb246XCJmdWxsbmFtZVwifX0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJjb2xvclwiOlwicHJpbWFyeVwiLFwiZGlzYWJsZWRcIjpfdm0uZnVsbG5hbWUubGVuZ3RoIDwgNX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpezsoX3ZtLmUxID0gMiksIF92bS5sb2FkQXV0aCgpfX19LFtfdm0uX3YoXCIgQ29udGludWUgXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1zdGVwcGVyLWNvbnRlbnQnLHthdHRyczp7XCJzdGVwXCI6XCIyXCJ9fSxbX2MoJ2Rpdicse2F0dHJzOntcImlkXCI6XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCJ9fSldKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPHYtc3RlcHBlciB2LW1vZGVsPVwiZTFcIj5cbiAgICAgICAgPGxvYWRpbmcgOmFjdGl2ZS5zeW5jPVwiaXNMb2FkaW5nXCIgbG9hZGVyPVwiYmFyc1wiIDppcy1mdWxsLXBhZ2U9XCJ0cnVlXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgICAgPHYtc3RlcHBlci1oZWFkZXI+XG4gICAgICAgICAgICA8di1zdGVwcGVyLXN0ZXAgOmNvbXBsZXRlPVwiZTEgPiAxXCIgc3RlcD1cIjFcIiA6ZWRpdGFibGU9XCJmYWxzZVwiPiBGdWxsIE5hbWUgPC92LXN0ZXBwZXItc3RlcD5cbiAgICAgICAgICAgIDx2LXN0ZXBwZXItc3RlcCA6Y29tcGxldGU9XCJlMSA+IDJcIiBzdGVwPVwiMlwiIDplZGl0YWJsZT1cImZhbHNlXCI+IENvbnRhY3QgTnVtYmVyIDwvdi1zdGVwcGVyLXN0ZXA+XG4gICAgICAgIDwvdi1zdGVwcGVyLWhlYWRlcj5cbiAgICAgICAgPHYtc3RlcHBlci1pdGVtcz5cbiAgICAgICAgICAgIDx2LXN0ZXBwZXItY29udGVudCBzdGVwPVwiMVwiPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJtYi0xMlwiIGZsYXQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDEyIHNtMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1tb2RlbD1cImZ1bGxuYW1lXCIgcmlnaHQgZGVuc2Ugc29sbyBsYWJlbD1cIkZ1bGxuYW1lXCIgb3V0bGluZWQgcGxhY2Vob2xkZXI9XCJGdWxsbmFtZVwiIC8+IDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiZnVsbG5hbWUubGVuZ3RoIDwgNVwiIEBjbGljaz1cIjsoZTEgPSAyKSwgbG9hZEF1dGgoKVwiPiBDb250aW51ZSA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LXN0ZXBwZXItY29udGVudD5cbiAgICAgICAgICAgIDx2LXN0ZXBwZXItY29udGVudCBzdGVwPVwiMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCIgLz4gPC92LXN0ZXBwZXItY29udGVudD5cbiAgICAgICAgPC92LXN0ZXBwZXItaXRlbXM+XG4gICAgPC92LXN0ZXBwZXI+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2ZpcmViYXNldWkvZGlzdC9maXJlYmFzZXVpLmNzcydcbmltcG9ydCBMb2FkaW5nIGZyb20gJ3Z1ZS1sb2FkaW5nLW92ZXJsYXknXG5pbXBvcnQgJ3Z1ZS1sb2FkaW5nLW92ZXJsYXkvZGlzdC92dWUtbG9hZGluZy5jc3MnXG5pbXBvcnQge1xuICAgIEdlb0NvbGxlY3Rpb25SZWZlcmVuY2Vcbn0gZnJvbSAnZ2VvZmlyZXN0b3JlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTG9hZGluZ1xuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZ1bGxuYW1lOiAnJyxcbiAgICAgICAgICAgIGUxOiAxLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIHVwZGF0ZVVzZXIoYXV0aFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYXV0aC91cGRhdGVVc2VyRGlzcGxheU5hbWUnLCB0aGlzLmZ1bGxuYW1lKVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2F1dGgvZ2V0RkNNVG9rZW4nXVxuICAgICAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gdGhpcy4kZmlyZVN0b3JlT2JqKClcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IG5ldyBHZW9Db2xsZWN0aW9uUmVmZXJlbmNlKGZpcmVzdG9yZS5jb2xsZWN0aW9uKCd1c2VycycpKVxuICAgICAgICAgICAgbGV0IGQgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoYXV0aFVzZXIudWlkKS5nZXQoKVxuICAgICAgICAgICAgaWYgKCFkLmV4aXN0cykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlZi5kb2MoYXV0aFVzZXIudWlkKS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbmV3IHRoaXMuJGZpcmVTdG9yZU9iai5HZW9Qb2ludCgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiBbdG9rZW5dLFxuICAgICAgICAgICAgICAgICAgICBwcm9tb0NvZGVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGF1dGhVc2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogYXV0aFVzZXIucGhvbmVOdW1iZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoYXV0aFVzZXIudWlkKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAnZC5kaXNwbGF5TmFtZSc6IGF1dGhVc2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZC5waG9uZU51bWJlcic6IGF1dGhVc2VyLnBob25lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAnZC50b2tlbnMnOiB0aGlzLiRmaXJlU3RvcmVPYmouRmllbGRWYWx1ZS5hcnJheVVuaW9uKHRva2VuKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZEF1dGgoKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aCA9IHRoaXMuJGZpcmVBdXRoT2JqKClcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcmViYXNldWkgPSByZXF1aXJlKCdmaXJlYmFzZXVpJylcbiAgICAgICAgICAgICAgICBjb25zdCB1aSA9IGZpcmViYXNldWkuYXV0aC5BdXRoVUkuZ2V0SW5zdGFuY2UoKSB8fCBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShhdXRoKVxuICAgICAgICAgICAgICAgIHVpLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbkluT3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogdGhpcy4kZmlyZUF1dGhPYmouUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q291bnRyeTogJ1BIJ1xuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduSW5GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT09ICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdChhdXRoUmVzdWx0LCByZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBhdXRoUmVzdWx0LnVzZXIudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBzZWxmLmZ1bGxuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnVwZGF0ZVVzZXIoYXV0aFJlc3VsdC51c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpcmVVaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlyZVVpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vIFN0eWxlc1xuaW1wb3J0ICcuL1ZTdGVwcGVyLnNhc3MnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBWU3RlcHBlclN0ZXAgZnJvbSAnLi9WU3RlcHBlclN0ZXAnXG5pbXBvcnQgVlN0ZXBwZXJDb250ZW50IGZyb20gJy4vVlN0ZXBwZXJDb250ZW50J1xuXG4vLyBNaXhpbnNcbmltcG9ydCB7IHByb3ZpZGUgYXMgUmVnaXN0cmFibGVQcm92aWRlIH0gZnJvbSAnLi4vLi4vbWl4aW5zL3JlZ2lzdHJhYmxlJ1xuaW1wb3J0IFByb3h5YWJsZSBmcm9tICcuLi8uLi9taXhpbnMvcHJveHlhYmxlJ1xuaW1wb3J0IFRoZW1lYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvdGhlbWVhYmxlJ1xuXG4vLyBVdGlsaXRpZXNcbmltcG9ydCBtaXhpbnMgZnJvbSAnLi4vLi4vdXRpbC9taXhpbnMnXG5pbXBvcnQgeyBicmVha2luZyB9IGZyb20gJy4uLy4uL3V0aWwvY29uc29sZSdcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBSZWdpc3RyYWJsZVByb3ZpZGUoJ3N0ZXBwZXInKSxcbiAgUHJveHlhYmxlLFxuICBUaGVtZWFibGVcbilcblxudHlwZSBWU3RlcHBlclN0ZXBJbnN0YW5jZSA9IEluc3RhbmNlVHlwZTx0eXBlb2YgVlN0ZXBwZXJTdGVwPlxudHlwZSBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSA9IEluc3RhbmNlVHlwZTx0eXBlb2YgVlN0ZXBwZXJDb250ZW50PlxuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgYmFzZU1peGlucy5leHRlbmQoe1xuICBuYW1lOiAndi1zdGVwcGVyJyxcblxuICBwcm92aWRlICgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzdGVwQ2xpY2s6IHRoaXMuc3RlcENsaWNrLFxuICAgICAgaXNWZXJ0aWNhbDogdGhpcy52ZXJ0aWNhbCxcbiAgICB9XG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBhbHRMYWJlbHM6IEJvb2xlYW4sXG4gICAgbm9uTGluZWFyOiBCb29sZWFuLFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIGNvbnN0IGRhdGE6IERpY3Rpb25hcnk8YW55PiA9IHtcbiAgICAgIGlzQm9vdGVkOiBmYWxzZSxcbiAgICAgIHN0ZXBzOiBbXSBhcyBWU3RlcHBlclN0ZXBJbnN0YW5jZVtdLFxuICAgICAgY29udGVudDogW10gYXMgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2VbXSxcbiAgICAgIGlzUmV2ZXJzZTogZmFsc2UsXG4gICAgfVxuXG4gICAgZGF0YS5pbnRlcm5hbExhenlWYWx1ZSA9IHRoaXMudmFsdWUgIT0gbnVsbFxuICAgICAgPyB0aGlzLnZhbHVlXG4gICAgICA6IChkYXRhWzBdIHx8IHt9KS5zdGVwIHx8IDFcblxuICAgIHJldHVybiBkYXRhXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpOiBvYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3Ytc3RlcHBlci0taXMtYm9vdGVkJzogdGhpcy5pc0Jvb3RlZCxcbiAgICAgICAgJ3Ytc3RlcHBlci0tdmVydGljYWwnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgICAndi1zdGVwcGVyLS1hbHQtbGFiZWxzJzogdGhpcy5hbHRMYWJlbHMsXG4gICAgICAgICd2LXN0ZXBwZXItLW5vbi1saW5lYXInOiB0aGlzLm5vbkxpbmVhcixcbiAgICAgICAgLi4udGhpcy50aGVtZUNsYXNzZXMsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGludGVybmFsVmFsdWUgKHZhbCwgb2xkVmFsKSB7XG4gICAgICB0aGlzLmlzUmV2ZXJzZSA9IE51bWJlcih2YWwpIDwgTnVtYmVyKG9sZFZhbClcblxuICAgICAgb2xkVmFsICYmICh0aGlzLmlzQm9vdGVkID0gdHJ1ZSlcblxuICAgICAgdGhpcy51cGRhdGVWaWV3KClcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuJGxpc3RlbmVycy5pbnB1dCkge1xuICAgICAgYnJlYWtpbmcoJ0BpbnB1dCcsICdAY2hhbmdlJywgdGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy51cGRhdGVWaWV3KClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgcmVnaXN0ZXIgKGl0ZW06IFZTdGVwcGVyU3RlcEluc3RhbmNlIHwgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2UpIHtcbiAgICAgIGlmIChpdGVtLiRvcHRpb25zLm5hbWUgPT09ICd2LXN0ZXBwZXItc3RlcCcpIHtcbiAgICAgICAgdGhpcy5zdGVwcy5wdXNoKGl0ZW0gYXMgVlN0ZXBwZXJTdGVwSW5zdGFuY2UpXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uJG9wdGlvbnMubmFtZSA9PT0gJ3Ytc3RlcHBlci1jb250ZW50Jykge1xuICAgICAgICAoaXRlbSBhcyBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSkuaXNWZXJ0aWNhbCA9IHRoaXMudmVydGljYWxcbiAgICAgICAgdGhpcy5jb250ZW50LnB1c2goaXRlbSBhcyBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHVucmVnaXN0ZXIgKGl0ZW06IFZTdGVwcGVyU3RlcEluc3RhbmNlIHwgVlN0ZXBwZXJDb250ZW50SW5zdGFuY2UpIHtcbiAgICAgIGlmIChpdGVtLiRvcHRpb25zLm5hbWUgPT09ICd2LXN0ZXBwZXItc3RlcCcpIHtcbiAgICAgICAgdGhpcy5zdGVwcyA9IHRoaXMuc3RlcHMuZmlsdGVyKChpOiBWU3RlcHBlclN0ZXBJbnN0YW5jZSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS4kb3B0aW9ucy5uYW1lID09PSAndi1zdGVwcGVyLWNvbnRlbnQnKSB7XG4gICAgICAgIChpdGVtIGFzIFZTdGVwcGVyQ29udGVudEluc3RhbmNlKS5pc1ZlcnRpY2FsID0gdGhpcy52ZXJ0aWNhbFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuZmlsdGVyKChpOiBWU3RlcHBlckNvbnRlbnRJbnN0YW5jZSkgPT4gaSAhPT0gaXRlbSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0ZXBDbGljayAoc3RlcDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiAodGhpcy5pbnRlcm5hbFZhbHVlID0gc3RlcCkpXG4gICAgfSxcbiAgICB1cGRhdGVWaWV3ICgpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5zdGVwcy5sZW5ndGg7IC0taW5kZXggPj0gMDspIHtcbiAgICAgICAgdGhpcy5zdGVwc1tpbmRleF0udG9nZ2xlKHRoaXMuaW50ZXJuYWxWYWx1ZSBhcyBhbnkpXG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMuY29udGVudC5sZW5ndGg7IC0taW5kZXggPj0gMDspIHtcbiAgICAgICAgdGhpcy5jb250ZW50W2luZGV4XS50b2dnbGUodGhpcy5pbnRlcm5hbFZhbHVlIGFzIGFueSwgdGhpcy5pc1JldmVyc2UpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfSxcbn0pXG4iLCIvLyBDb21wb25lbnRzXG5pbXBvcnQge1xuICBWVGFiVHJhbnNpdGlvbixcbiAgVlRhYlJldmVyc2VUcmFuc2l0aW9uLFxufSBmcm9tICcuLi90cmFuc2l0aW9ucydcblxuLy8gTWl4aW5zXG5pbXBvcnQgeyBpbmplY3QgYXMgUmVnaXN0cmFibGVJbmplY3QgfSBmcm9tICcuLi8uLi9taXhpbnMvcmVnaXN0cmFibGUnXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IGNvbnZlcnRUb1VuaXQgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnXG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IG1peGlucyBmcm9tICcuLi8uLi91dGlsL21peGlucydcblxuLy8gVHlwZXNcbmltcG9ydCB7IFZOb2RlLCBGdW5jdGlvbmFsQ29tcG9uZW50T3B0aW9ucywgVk5vZGVEYXRhIH0gZnJvbSAndnVlJ1xuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBSZWdpc3RyYWJsZUluamVjdCgnc3RlcHBlcicsICd2LXN0ZXBwZXItY29udGVudCcsICd2LXN0ZXBwZXInKVxuKVxuXG5pbnRlcmZhY2Ugb3B0aW9ucyBleHRlbmRzIEluc3RhbmNlVHlwZTx0eXBlb2YgYmFzZU1peGlucz4ge1xuICAkcmVmczoge1xuICAgIHdyYXBwZXI6IEhUTUxFbGVtZW50XG4gIH1cbiAgaXNWZXJ0aWNhbFByb3ZpZGVkOiBib29sZWFuXG59XG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBiYXNlTWl4aW5zLmV4dGVuZDxvcHRpb25zPigpLmV4dGVuZCh7XG4gIG5hbWU6ICd2LXN0ZXBwZXItY29udGVudCcsXG5cbiAgaW5qZWN0OiB7XG4gICAgaXNWZXJ0aWNhbFByb3ZpZGVkOiB7XG4gICAgICBmcm9tOiAnaXNWZXJ0aWNhbCcsXG4gICAgfSxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIHN0ZXA6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IDAgYXMgbnVtYmVyIHwgc3RyaW5nLFxuICAgICAgLy8gTXVzdCBiZSBudWxsIHRvIGFsbG93XG4gICAgICAvLyBwcmV2aW91cyBjb21wYXJpc29uXG4gICAgICBpc0FjdGl2ZTogbnVsbCBhcyBib29sZWFuIHwgbnVsbCxcbiAgICAgIGlzUmV2ZXJzZTogZmFsc2UsXG4gICAgICBpc1ZlcnRpY2FsOiB0aGlzLmlzVmVydGljYWxQcm92aWRlZCxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb21wdXRlZFRyYW5zaXRpb24gKCk6IEZ1bmN0aW9uYWxDb21wb25lbnRPcHRpb25zIHtcbiAgICAgIC8vIEZpeCBmb3IgIzg5NzhcbiAgICAgIGNvbnN0IHJldmVyc2UgPSB0aGlzLiR2dWV0aWZ5LnJ0bCA/ICF0aGlzLmlzUmV2ZXJzZSA6IHRoaXMuaXNSZXZlcnNlXG5cbiAgICAgIHJldHVybiByZXZlcnNlXG4gICAgICAgID8gVlRhYlJldmVyc2VUcmFuc2l0aW9uXG4gICAgICAgIDogVlRhYlRyYW5zaXRpb25cbiAgICB9LFxuICAgIHN0eWxlcyAoKTogb2JqZWN0IHtcbiAgICAgIGlmICghdGhpcy5pc1ZlcnRpY2FsKSByZXR1cm4ge31cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXNBY3RpdmUgKGN1cnJlbnQsIHByZXZpb3VzKSB7XG4gICAgICAvLyBJZiBhY3RpdmUgYW5kIHRoZSBwcmV2aW91cyBzdGF0ZVxuICAgICAgLy8gd2FzIG51bGwsIGlzIGp1c3QgYm9vdGluZyB1cFxuICAgICAgaWYgKGN1cnJlbnQgJiYgcHJldmlvdXMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9ICdhdXRvJ1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmlzVmVydGljYWwpIHJldHVyblxuXG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkgdGhpcy5lbnRlcigpXG4gICAgICBlbHNlIHRoaXMubGVhdmUoKVxuICAgIH0sXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kcmVmcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgICB0aGlzLm9uVHJhbnNpdGlvbixcbiAgICAgIGZhbHNlXG4gICAgKVxuICAgIHRoaXMuc3RlcHBlciAmJiB0aGlzLnN0ZXBwZXIucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB0aGlzLiRyZWZzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIHRoaXMub25UcmFuc2l0aW9uLFxuICAgICAgZmFsc2VcbiAgICApXG4gICAgdGhpcy5zdGVwcGVyICYmIHRoaXMuc3RlcHBlci51bnJlZ2lzdGVyKHRoaXMpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uVHJhbnNpdGlvbiAoZTogVHJhbnNpdGlvbkV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHxcbiAgICAgICAgZS5wcm9wZXJ0eU5hbWUgIT09ICdoZWlnaHQnXG4gICAgICApIHJldHVyblxuXG4gICAgICB0aGlzLmhlaWdodCA9ICdhdXRvJ1xuICAgIH0sXG4gICAgZW50ZXIgKCkge1xuICAgICAgbGV0IHNjcm9sbEhlaWdodCA9IDBcblxuICAgICAgLy8gUmVuZGVyIGJ1ZyB3aXRoIGhlaWdodFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kcmVmcy53cmFwcGVyLnNjcm9sbEhlaWdodFxuICAgICAgfSlcblxuICAgICAgdGhpcy5oZWlnaHQgPSAwXG5cbiAgICAgIC8vIEdpdmUgdGhlIGNvbGxhcHNpbmcgZWxlbWVudCB0aW1lIHRvIGNvbGxhcHNlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaXNBY3RpdmUgJiYgKHRoaXMuaGVpZ2h0ID0gKHNjcm9sbEhlaWdodCB8fCAnYXV0bycpKSwgNDUwKVxuICAgIH0sXG4gICAgbGVhdmUgKCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLiRyZWZzLndyYXBwZXIuY2xpZW50SGVpZ2h0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmhlaWdodCA9IDApLCAxMClcbiAgICB9LFxuICAgIHRvZ2dsZSAoc3RlcDogc3RyaW5nIHwgbnVtYmVyLCByZXZlcnNlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gc3RlcC50b1N0cmluZygpID09PSB0aGlzLnN0ZXAudG9TdHJpbmcoKVxuICAgICAgdGhpcy5pc1JldmVyc2UgPSByZXZlcnNlXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgY29uc3QgY29udGVudERhdGEgPSB7XG4gICAgICBzdGF0aWNDbGFzczogJ3Ytc3RlcHBlcl9fY29udGVudCcsXG4gICAgfSBhcyBWTm9kZURhdGFcbiAgICBjb25zdCB3cmFwcGVyRGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyX193cmFwcGVyJyxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyxcbiAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZlcnRpY2FsKSB7XG4gICAgICBjb250ZW50RGF0YS5kaXJlY3RpdmVzID0gW3tcbiAgICAgICAgbmFtZTogJ3Nob3cnLFxuICAgICAgICB2YWx1ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29uc3Qgd3JhcHBlciA9IGgoJ2RpdicsIHdyYXBwZXJEYXRhLCBbdGhpcy4kc2xvdHMuZGVmYXVsdF0pXG4gICAgY29uc3QgY29udGVudCA9IGgoJ2RpdicsIGNvbnRlbnREYXRhLCBbd3JhcHBlcl0pXG5cbiAgICByZXR1cm4gaCh0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbiwge1xuICAgICAgb246IHRoaXMuJGxpc3RlbmVycyxcbiAgICB9LCBbY29udGVudF0pXG4gIH0sXG59KVxuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFZJY29uIGZyb20gJy4uL1ZJY29uJ1xuXG4vLyBNaXhpbnNcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vbWl4aW5zL2NvbG9yYWJsZSdcbmltcG9ydCB7IGluamVjdCBhcyBSZWdpc3RyYWJsZUluamVjdCB9IGZyb20gJy4uLy4uL21peGlucy9yZWdpc3RyYWJsZSdcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgbWl4aW5zIGZyb20gJy4uLy4uL3V0aWwvbWl4aW5zJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbnR5cGUgVnVldGlmeVN0ZXBwZXJSdWxlVmFsaWRhdG9yID0gKCkgPT4gc3RyaW5nIHwgYm9vbGVhblxuXG5jb25zdCBiYXNlTWl4aW5zID0gbWl4aW5zKFxuICBDb2xvcmFibGUsXG4gIFJlZ2lzdHJhYmxlSW5qZWN0KCdzdGVwcGVyJywgJ3Ytc3RlcHBlci1zdGVwJywgJ3Ytc3RlcHBlcicpXG4pXG5cbmludGVyZmFjZSBvcHRpb25zIGV4dGVuZHMgSW5zdGFuY2VUeXBlPHR5cGVvZiBiYXNlTWl4aW5zPiB7XG4gIHN0ZXBDbGljazogKHN0ZXA6IG51bWJlciB8IHN0cmluZykgPT4gdm9pZFxufVxuLyogQHZ1ZS9jb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGJhc2VNaXhpbnMuZXh0ZW5kPG9wdGlvbnM+KCkuZXh0ZW5kKHtcbiAgbmFtZTogJ3Ytc3RlcHBlci1zdGVwJyxcblxuICBkaXJlY3RpdmVzOiB7IHJpcHBsZSB9LFxuXG4gIGluamVjdDogWydzdGVwQ2xpY2snXSxcblxuICBwcm9wczoge1xuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBjb21wbGV0ZTogQm9vbGVhbixcbiAgICBjb21wbGV0ZUljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckY29tcGxldGUnLFxuICAgIH0sXG4gICAgZWRpdGFibGU6IEJvb2xlYW4sXG4gICAgZWRpdEljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZWRpdCcsXG4gICAgfSxcbiAgICBlcnJvckljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICckZXJyb3InLFxuICAgIH0sXG4gICAgcnVsZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSBhcyBQcm9wVmFsaWRhdG9yPFZ1ZXRpZnlTdGVwcGVyUnVsZVZhbGlkYXRvcltdPixcbiAgICBzdGVwOiBbTnVtYmVyLCBTdHJpbmddLFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICBpc0luYWN0aXZlOiB0cnVlLFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCk6IG9iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndi1zdGVwcGVyX19zdGVwLS1hY3RpdmUnOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgICAndi1zdGVwcGVyX19zdGVwLS1lZGl0YWJsZSc6IHRoaXMuZWRpdGFibGUsXG4gICAgICAgICd2LXN0ZXBwZXJfX3N0ZXAtLWluYWN0aXZlJzogdGhpcy5pc0luYWN0aXZlLFxuICAgICAgICAndi1zdGVwcGVyX19zdGVwLS1lcnJvciBlcnJvci0tdGV4dCc6IHRoaXMuaGFzRXJyb3IsXG4gICAgICAgICd2LXN0ZXBwZXJfX3N0ZXAtLWNvbXBsZXRlJzogdGhpcy5jb21wbGV0ZSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc0Vycm9yICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzLnNvbWUodmFsaWRhdGUgPT4gdmFsaWRhdGUoKSAhPT0gdHJ1ZSlcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuc3RlcHBlciAmJiB0aGlzLnN0ZXBwZXIucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB0aGlzLnN0ZXBwZXIgJiYgdGhpcy5zdGVwcGVyLnVucmVnaXN0ZXIodGhpcylcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2sgKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgICBpZiAodGhpcy5lZGl0YWJsZSkge1xuICAgICAgICB0aGlzLnN0ZXBDbGljayh0aGlzLnN0ZXApXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5JY29uIChpY29uOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KFZJY29uLCBpY29uKVxuICAgIH0sXG4gICAgZ2VuTGFiZWwgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd2LXN0ZXBwZXJfX2xhYmVsJyxcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgfSxcbiAgICBnZW5TdGVwICgpIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gKCF0aGlzLmhhc0Vycm9yICYmICh0aGlzLmNvbXBsZXRlIHx8IHRoaXMuaXNBY3RpdmUpKSA/IHRoaXMuY29sb3IgOiBmYWxzZVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnc3BhbicsIHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyX19zdGVwX19zdGVwJyxcbiAgICAgIH0pLCB0aGlzLmdlblN0ZXBDb250ZW50KCkpXG4gICAgfSxcbiAgICBnZW5TdGVwQ29udGVudCAoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXG5cbiAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5nZW5JY29uKHRoaXMuZXJyb3JJY29uKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb21wbGV0ZSkge1xuICAgICAgICBpZiAodGhpcy5lZGl0YWJsZSkge1xuICAgICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5nZW5JY29uKHRoaXMuZWRpdEljb24pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkcmVuLnB1c2godGhpcy5nZW5JY29uKHRoaXMuY29tcGxldGVJY29uKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChTdHJpbmcodGhpcy5zdGVwKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgfSxcbiAgICB0b2dnbGUgKHN0ZXA6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHN0ZXAudG9TdHJpbmcoKSA9PT0gdGhpcy5zdGVwLnRvU3RyaW5nKClcbiAgICAgIHRoaXMuaXNJbmFjdGl2ZSA9IE51bWJlcihzdGVwKSA8IE51bWJlcih0aGlzLnN0ZXApXG4gICAgfSxcbiAgfSxcblxuICByZW5kZXIgKGgpOiBWTm9kZSB7XG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiAndi1zdGVwcGVyX19zdGVwJyxcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiAncmlwcGxlJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuZWRpdGFibGUsXG4gICAgICB9XSxcbiAgICAgIG9uOiB7IGNsaWNrOiB0aGlzLmNsaWNrIH0sXG4gICAgfSwgW1xuICAgICAgdGhpcy5nZW5TdGVwKCksXG4gICAgICB0aGlzLmdlbkxhYmVsKCksXG4gICAgXSlcbiAgfSxcbn0pXG4iLCJpbXBvcnQgeyBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IFZTdGVwcGVyIGZyb20gJy4vVlN0ZXBwZXInXG5pbXBvcnQgVlN0ZXBwZXJTdGVwIGZyb20gJy4vVlN0ZXBwZXJTdGVwJ1xuaW1wb3J0IFZTdGVwcGVyQ29udGVudCBmcm9tICcuL1ZTdGVwcGVyQ29udGVudCdcblxuY29uc3QgVlN0ZXBwZXJIZWFkZXIgPSBjcmVhdGVTaW1wbGVGdW5jdGlvbmFsKCd2LXN0ZXBwZXJfX2hlYWRlcicpXG5jb25zdCBWU3RlcHBlckl0ZW1zID0gY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1zdGVwcGVyX19pdGVtcycpXG5cbmV4cG9ydCB7XG4gIFZTdGVwcGVyLFxuICBWU3RlcHBlckNvbnRlbnQsXG4gIFZTdGVwcGVyU3RlcCxcbiAgVlN0ZXBwZXJIZWFkZXIsXG4gIFZTdGVwcGVySXRlbXMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJF92dWV0aWZ5X3N1YmNvbXBvbmVudHM6IHtcbiAgICBWU3RlcHBlcixcbiAgICBWU3RlcHBlckNvbnRlbnQsXG4gICAgVlN0ZXBwZXJTdGVwLFxuICAgIFZTdGVwcGVySGVhZGVyLFxuICAgIFZTdGVwcGVySXRlbXMsXG4gIH0sXG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpcmVVaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGY3YmI1NTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlyZVVpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlyZVVpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTIyMGQxMTJcIlxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHNcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTcGFjZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZTdGVwcGVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3RlcHBlcic7XG5pbXBvcnQgeyBWU3RlcHBlckNvbnRlbnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTdGVwcGVyJztcbmltcG9ydCB7IFZTdGVwcGVySGVhZGVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3RlcHBlcic7XG5pbXBvcnQgeyBWU3RlcHBlckl0ZW1zIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WU3RlcHBlcic7XG5pbXBvcnQgeyBWU3RlcHBlclN0ZXAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZTdGVwcGVyJztcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUZXh0RmllbGQnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZGbGV4LFZMYXlvdXQsVlNwYWNlcixWU3RlcHBlcixWU3RlcHBlckNvbnRlbnQsVlN0ZXBwZXJIZWFkZXIsVlN0ZXBwZXJJdGVtcyxWU3RlcHBlclN0ZXAsVlRleHRGaWVsZH0pXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnYWNjb3VudCcpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1sYXlvdXQnLFtfYygnbmF2LWRyYXdlcicse21vZGVsOnt2YWx1ZTooX3ZtLmRyYXdlciksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5kcmF3ZXI9JCR2fSxleHByZXNzaW9uOlwiZHJhd2VyXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkJyx7c3RhdGljQ2xhc3M6XCJjYXJkaHl0IG1iLTEwXCIsYXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJ3aWR0aFwiOlwiMTAwJVwifX0sW19jKCd2LWFwcC1iYXInLHthdHRyczp7XCJjb2xvclwiOlwicmdiYSgxMDAsMTE1LDIwMSlcIixcImFwcFwiOlwiXCIsXCJkYXJrXCI6XCJcIixcImZsYXRcIjpcIlwifX0sW19jKCd2LWFwcC1iYXItbmF2LWljb24nLHtvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO192bS5kcmF3ZXI9IV92bS5kcmF3ZXJ9fX0pLF92bS5fdihcIiBcIiksX2MoJ3YtYXZhdGFyJyx7c3RhdGljQ2xhc3M6XCJtci0yXCIsYXR0cnM6e1wicm91bmRlZFwiOlwiXCIsXCJzaXplXCI6XCIzNVwifX0sW19jKCd2LWltZycse2F0dHJzOntcInNyY1wiOlwiL2ljb24ucG5nXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtdG9vbGJhci10aXRsZScsW192bS5fdihcIiBKaWZmeSBGYXZvcnMgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCdjbGllbnQtb25seScsWyhfdm0uY2FydFNpemUgPiAwKT9fYygndi1idG4nLHthdHRyczp7XCJpY29uXCI6XCJcIixcInRvXCI6XCIvY2FydFwifX0sW19jKCd2LWJhZGdlJyx7YXR0cnM6e1wiY29sb3JcIjpcInJlZFwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJiYWRnZVwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS5jYXJ0U2l6ZSkrXCIgXCIpXX0scHJveHk6dHJ1ZX1dLG51bGwsZmFsc2UsMTI4NTA0NTg3Nil9LFtfdm0uX3YoXCIgXCIpLF9jKCd2LWljb24nLHthdHRyczp7XCJjb2xvclwiOlwid2hpdGVcIixcImRlbnNlXCI6XCJcIn19LFtfdm0uX3YoXCIgbWRpLWNhcnQtb3V0bGluZSBcIildKV0sMSldLDEpOl92bS5fZSgpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1zaGVldCcse3N0YXRpY0NsYXNzOlwib3ZlcmZsb3cteS1hdXRvIGZpbGwtaGVpZ2h0XCIsYXR0cnM6e1wiaWRcIjpcInNjcm9sbGluZy10ZWNobmlxdWVzLTNcIn19LFtfYygndi1jb250YWluZXInLHthdHRyczp7XCJmbHVpZFwiOlwiXCJ9fSxbX2MoJ3YtY29udGVudCcsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwiLFwianVzdGlmeS1jZW50ZXJcIjpcIlwiLFwiYWxpZ24tY2VudGVyXCI6XCJcIixcInRleHQtbGVmdFwiOlwiXCJ9fSxbKF92bS51c2VyPT09bnVsbCk/X2MoJ3YtZmxleCcse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXJcIixhdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibGczXCI6XCJcIixcInRcIjpcIlwifX0sW19jKCd2LWljb24nLHtzdGF0aWNDbGFzczpcIm1iLTVcIixhdHRyczp7XCJjb2xvclwiOlwiYmx1ZVwiLFwic2l6ZVwiOlwiMjAwXCJ9fSxbX3ZtLl92KFwibWRpLWFjY291bnQtY2lyY2xlXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnYmxvY2txdW90ZScse3N0YXRpY0NsYXNzOlwiYmxvY2txdW90ZVwifSxbX3ZtLl92KFwiIOKAnFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpLF9jKCdzdHJvbmcnLFtfdm0uX3YoXCJQbGVhc2UgTG9naW4gdG8gdmlldyB5b3VyIGFjY291bnQuXCIpXSksX3ZtLl92KFwi4oCdXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiksX2MoJ2Zvb3RlcicsWyhfdm0udXNlcj09PW51bGwpP19jKCd2LWJ0bicse2F0dHJzOntcInRpbGVcIjpcIlwiLFwib3V0bGluZWRcIjpcIlwiLFwiY29sb3JcIjpcImJsdWVcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5sb2dpblNoZWV0ID0gdHJ1ZX19fSxbX3ZtLl92KFwiIExvZ2luIFwiKV0pOl92bS5fZSgpXSwxKV0pXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0udXNlciE9PW51bGwpP19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kNFwiOlwiXCIsXCJzbTRcIjpcIlwiLFwibGczXCI6XCJcIixcInRcIjpcIlwifX0sW19jKCd2LWxpc3QnLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxbX2MoJ3YtbGlzdC1pdGVtJyx7YXR0cnM6e1wiaWRcIjpcImNvbnRhY3RcIn19LFtfYygndi1saXN0LWl0ZW0tYXZhdGFyJyxbX2MoJ3YtaWNvbicse2F0dHJzOntcImNvbG9yXCI6XCJibHVlXCJ9fSxbX3ZtLl92KFwiIG1kaS1hY2NvdW50IFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1jb250ZW50JyxbX2MoJ3YtbGlzdC1pdGVtLXRpdGxlJyxbX3ZtLl92KF92bS5fcyhfdm0uZnVsbG5hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiRnVsbG5hbWVcIildKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1saXN0LWl0ZW0tYWN0aW9uJyxbX2MoJ3YtYnRuJyx7YXR0cnM6e1wiaWNvblwiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7X3ZtLmZ1bGxuYW1lU2hlZXQgPSB0cnVlfX19LFtfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcInBpbmtcIn19LFtfdm0uX3YoXCIgbWRpLWNoZXZyb24tcmlnaHQgXCIpXSldLDEpXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdCcse2F0dHJzOntcImRlbnNlXCI6XCJcIn19LFtfYygndi1saXN0LWl0ZW0nLHthdHRyczp7XCJpZFwiOlwiY29udGFjdFwifX0sW19jKCd2LWxpc3QtaXRlbS1hdmF0YXInLFtfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcInJlZFwifX0sW192bS5fdihcIiBtZGktcGhvbmUgXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLWNvbnRlbnQnLFtfYygndi1saXN0LWl0ZW0tdGl0bGUnLFtfdm0uX3YoX3ZtLl9zKF92bS5udW1iZXIpKV0pLF92bS5fdihcIiBcIiksX2MoJ3YtbGlzdC1pdGVtLXN1YnRpdGxlJyxbX3ZtLl92KFwiQ29udGFjdFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWxpc3QtaXRlbS1hY3Rpb24nLFtfYygndi1idG4nLHthdHRyczp7XCJpY29uXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpeyRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtfdm0ucGhvbmVBdXRoU2hlZXQgPSB0cnVlfX19LFtfYygndi1pY29uJyx7YXR0cnM6e1wiY29sb3JcIjpcInBpbmtcIn19LFtfdm0uX3YoXCIgbWRpLWNoZXZyb24tcmlnaHQgXCIpXSldLDEpXSwxKV0sMSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse2F0dHJzOntcImJsb2NrXCI6XCJcIixcInRpbGVcIjpcIlwiLFwiY29sb3JcIjpcInJlZFwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uJGZpcmVBdXRoLnNpZ25PdXQoKX19fSxbX3ZtLl92KFwiTG9nb3V0XCIpXSldLDEpXSwxKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse21vZGVsOnt2YWx1ZTooX3ZtLmxvZ2luU2hlZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ubG9naW5TaGVldD0kJHZ9LGV4cHJlc3Npb246XCJsb2dpblNoZWV0XCJ9fSxbX2MoJ3YtY2FyZCcse2F0dHJzOntcInRpbGVcIjpcIlwifX0sW19jKCd2LWNhcmQtdGl0bGUnLHthdHRyczp7XCJwcmltYXJ5LXRpdGxlXCI6XCJcIn19LFtfdm0uX3YoXCIgTG9naW4gXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1jYXJkLXRleHQnLFtfYygndi1sYXlvdXQnLHthdHRyczp7XCJ3cmFwXCI6XCJcIn19LFtfYygnZmlyZS11aScpXSwxKV0sMSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJvdHRvbS1zaGVldCcse21vZGVsOnt2YWx1ZTooX3ZtLmZ1bGxuYW1lU2hlZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uZnVsbG5hbWVTaGVldD0kJHZ9LGV4cHJlc3Npb246XCJmdWxsbmFtZVNoZWV0XCJ9fSxbX2MoJ3YtY2FyZCcse2F0dHJzOntcInRpbGVcIjpcIlwifX0sW19jKCd2LWNhcmQtdGl0bGUnLHthdHRyczp7XCJwcmltYXJ5LXRpdGxlXCI6XCJcIn19LFtfdm0uX3YoXCIgQ29udGFjdCBJbmZvcm1hdGlvbiBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwifX0sW19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwifX0sW19jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJkZW5zZVwiOlwiXCIsXCJsYWJlbFwiOlwiRnVsbG5hbWVcIixcIm91dGxpbmVkXCI6XCJcIixcInBsYWNlaG9sZGVyXCI6XCJGdWxsbmFtZVwifSxtb2RlbDp7dmFsdWU6KF92bS5mdWxsbmFtZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5mdWxsbmFtZT0kJHZ9LGV4cHJlc3Npb246XCJmdWxsbmFtZVwifX0pXSwxKV0sMSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZC1hY3Rpb25zJyxbX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHthdHRyczp7XCJ0aWxlXCI6XCJcIixcIm91dGxpbmVkXCI6XCJcIixcImNvbG9yXCI6XCJyZWRcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0udXBkYXRlRGlzcGxheU5hbWUoKX19fSxbX3ZtLl92KFwiIEFwcGx5IENoYW5nZXMgXCIpXSldLDEpXSwxKV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1ib3R0b20tc2hlZXQnLHttb2RlbDp7dmFsdWU6KF92bS5waG9uZUF1dGhTaGVldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5waG9uZUF1dGhTaGVldD0kJHZ9LGV4cHJlc3Npb246XCJwaG9uZUF1dGhTaGVldFwifX0sW19jKCd2LWNhcmQnLHthdHRyczp7XCJ0aWxlXCI6XCJcIn19LFtfYygndi1jYXJkLXRpdGxlJyx7YXR0cnM6e1wicHJpbWFyeS10aXRsZVwiOlwiXCJ9fSxbX3ZtLl92KFwiIFVwZGF0ZSBQaG9uZSBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtdGV4dCcsW19jKCd2LWxheW91dCcse2F0dHJzOntcIndyYXBcIjpcIlwifX0sW19jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwifX0sW19jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJkZW5zZVwiOlwiXCIsXCJsYWJlbFwiOlwiWW91ciBudW1iZXJcIixcIm91dGxpbmVkXCI6XCJcIixcInBsYWNlaG9sZGVyXCI6XCJZb3VyIG51bWJlclwifSxtb2RlbDp7dmFsdWU6KF92bS5udW1iZXIpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ubnVtYmVyPSQkdn0sZXhwcmVzc2lvbjpcIm51bWJlclwifX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWZsZXgnLHthdHRyczp7XCJ4czEyXCI6XCJcIixcIm1kMTJcIjpcIlwifX0sW19jKCdkaXYnLHthdHRyczp7XCJpZFwiOlwicmVjYXB0Y2hhLWNvbnRhaW5lclwifX0pXSldLDEpXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNhcmQtYWN0aW9ucycsW19jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1widGlsZVwiOlwiXCIsXCJvdXRsaW5lZFwiOlwiXCIsXCJjb2xvclwiOlwicmVkXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLnBob25lTnVtYmVyTGlua2VyKCl9fX0sW192bS5fdihcIiBBcHBseSBDaGFuZ2VzIFwiKV0pXSwxKV0sMSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDx2LWxheW91dD5cbiAgICAgICAgICAgICA8bmF2LWRyYXdlciB2LW1vZGVsPVwiZHJhd2VyXCIgPjwvbmF2LWRyYXdlcj5cbiAgICAgICAgPHYtY2FyZCBmbGF0IHdpZHRoPVwiMTAwJVwiIGNsYXNzPVwiY2FyZGh5dCBtYi0xMFwiPlxuICAgICAgICAgICAgPHYtYXBwLWJhciBjb2xvcj1cInJnYmEoMTAwLDExNSwyMDEpXCIgYXBwIGRhcmsgZmxhdD5cbiAgICAgICAgICAgICAgICA8di1hcHAtYmFyLW5hdi1pY29uIEBjbGljay5zdG9wPVwiZHJhd2VyPSFkcmF3ZXJcIj48L3YtYXBwLWJhci1uYXYtaWNvbj5cbiAgICAgICAgICAgICAgICA8di1hdmF0YXIgcm91bmRlZCBjbGFzcz1cIm1yLTJcIiBzaXplPVwiMzVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtaW1nIHNyYz1cIi9pY29uLnBuZ1wiIC8+IDwvdi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT4gSmlmZnkgRmF2b3JzIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgIDxjbGllbnQtb25seT5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCJjYXJ0U2l6ZSA+IDBcIiBpY29uIHRvPVwiL2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJhZGdlIGNvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNiYWRnZSBvdmVybGFwPiB7eyBjYXJ0U2l6ZSB9fSA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ3aGl0ZVwiIGRlbnNlPiBtZGktY2FydC1vdXRsaW5lIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvY2xpZW50LW9ubHk+XG4gICAgICAgICAgICA8L3YtYXBwLWJhcj5cbiAgICAgICAgICAgIDx2LXNoZWV0IGlkPVwic2Nyb2xsaW5nLXRlY2huaXF1ZXMtM1wiIGNsYXNzPVwib3ZlcmZsb3cteS1hdXRvIGZpbGwtaGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgICAgICAgICAgICA8di1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQ0IHNtNCBsZzMgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHQgdi1pZj1cInVzZXI9PT1udWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY2xhc3M9XCJtYi01XCIgY29sb3I9XCJibHVlXCIgc2l6ZT1cIjIwMFwiPm1kaS1hY2NvdW50LWNpcmNsZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVcIj4gJiM4MjIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QbGVhc2UgTG9naW4gdG8gdmlldyB5b3VyIGFjY291bnQuPC9zdHJvbmc+JiM4MjIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdGlsZSBvdXRsaW5lZCB2LWlmPVwidXNlcj09PW51bGxcIiBjb2xvcj1cImJsdWVcIiBAY2xpY2s9XCJsb2dpblNoZWV0ID0gdHJ1ZVwiPiBMb2dpbiA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgbWQ0IHNtNCBsZzMgdCB2LWlmPVwidXNlciE9PW51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdCBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwiYmx1ZVwiPiBtZGktYWNjb3VudCA8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlPnt7ZnVsbG5hbWV9fTwvdi1saXN0LWl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1zdWJ0aXRsZT5GdWxsbmFtZTwvdi1saXN0LWl0ZW0tc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljay5zdG9wPVwiZnVsbG5hbWVTaGVldCA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJwaW5rXCI+IG1kaS1jaGV2cm9uLXJpZ2h0IDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0gaWQ9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInJlZFwiPiBtZGktcGhvbmUgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZT57e251bWJlcn19PC92LWxpc3QtaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXN1YnRpdGxlPkNvbnRhY3Q8L3YtbGlzdC1pdGVtLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1saXN0LWl0ZW0tYWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2suc3RvcD1cInBob25lQXV0aFNoZWV0ID0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInBpbmtcIj4gbWRpLWNoZXZyb24tcmlnaHQgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gYmxvY2sgdGlsZSBjb2xvcj1cInJlZFwiIEBjbGljay5zdG9wPVwiJGZpcmVBdXRoLnNpZ25PdXQoKVwiPkxvZ291dDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29udGVudD5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPC92LXNoZWV0PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwibG9naW5TaGVldFwiPlxuICAgICAgICAgICAgPHYtY2FyZCB0aWxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT4gTG9naW4gPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaXJlLXVpIC8+IDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cImZ1bGxuYW1lU2hlZXRcIj5cbiAgICAgICAgICAgIDx2LWNhcmQgdGlsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+IENvbnRhY3QgSW5mb3JtYXRpb24gPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDEyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1tb2RlbD1cImZ1bGxuYW1lXCIgZGVuc2UgbGFiZWw9XCJGdWxsbmFtZVwiIG91dGxpbmVkIHBsYWNlaG9sZGVyPVwiRnVsbG5hbWVcIiAvPiA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHYtZmxleCB4czEyIG1kMTI+XG4gICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1tb2RlbD1cIm51bWJlclwiIGRlbnNlIGxhYmVsPVwiWW91ciBudW1iZXJcIiBvdXRsaW5lZCBwbGFjZWhvbGRlcj1cIllvdXIgbnVtYmVyXCIgLz5cbiAgICAgICAgICAgIDwvdi1mbGV4PiAtLT48L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHRpbGUgb3V0bGluZWQgY29sb3I9XCJyZWRcIiBAY2xpY2s9XCJ1cGRhdGVEaXNwbGF5TmFtZSgpXCI+IEFwcGx5IENoYW5nZXMgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDwvdi1ib3R0b20tc2hlZXQ+XG4gICAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwicGhvbmVBdXRoU2hlZXRcIj5cbiAgICAgICAgICAgIDx2LWNhcmQgdGlsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+IFVwZGF0ZSBQaG9uZSA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIG1kMTI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LW1vZGVsPVwibnVtYmVyXCIgZGVuc2UgbGFiZWw9XCJZb3VyIG51bWJlclwiIG91dGxpbmVkIHBsYWNlaG9sZGVyPVwiWW91ciBudW1iZXJcIiAvPiA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBtZDEyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyZWNhcHRjaGEtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biB0aWxlIG91dGxpbmVkIGNvbG9yPVwicmVkXCIgQGNsaWNrPVwicGhvbmVOdW1iZXJMaW5rZXIoKVwiPiBBcHBseSBDaGFuZ2VzIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgIDwvdi1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBGaXJlVWkgZnJvbSAnfi9jb21wb25lbnRzL0ZpcmVVaSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEZpcmVVaVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgY2FydFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY2FydC9nZXRDYXJ0SXRlbUNvdW50J11cbiAgICAgICAgfSxcbiAgICAgICAgdXNlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhdXRoL2dldFVzZXInXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZHJhd2VyOiBmYWxzZSxcbiAgICAgICAgICAgIGxvZ2luU2hlZXQ6IGZhbHNlLFxuICAgICAgICAgICAgZnVsbG5hbWVTaGVldDogZmFsc2UsXG4gICAgICAgICAgICBwaG9uZUF1dGhTaGVldDogZmFsc2UsXG4gICAgICAgICAgICBmdWxsbmFtZTogJycsXG4gICAgICAgICAgICBudW1iZXI6ICcnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB1c2VyKHZhbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsKVxuICAgICAgICAgICAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbG5hbWUgPSB2YWwuZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlciA9IHZhbC5waG9uZU51bWJlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHBob25lTnVtYmVyTGlua2VyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubnVtYmVyID09PSBudWxsIHx8IHRoaXMubnVtYmVyID09PSAnJykge1xuICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyB0aGlzLiRmaXJlQXV0aE9iai5QaG9uZUF1dGhQcm92aWRlcigpXG4gICAgICAgICAgICAgICAgdmFyIGF1dGggPSB0aGlzLiRmaXJlQXV0aC5jdXJyZW50VXNlclxuICAgICAgICAgICAgICAgIHZhciBhcHBWZXJpZmllciA9IG5ldyB0aGlzLiRmaXJlQXV0aE9iai5SZWNhcHRjaGFWZXJpZmllcigncmVjYXB0Y2hhLWNvbnRhaW5lcicsIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ2ludmlzaWJsZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhdXRoLmxpbmtXaXRoUGhvbmVOdW1iZXIodGhpcy5udW1iZXIsIGFwcFZlcmlmaWVyKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RlID0gd2luZG93LnByb21wdCgnUHJvdmlkZSB5b3VyIFNNUyBjb2RlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbXBsZXRlIHNpZ24taW4uXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGhvbmVBdXRoU2hlZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmNvbmZpcm0oY29kZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQaG9uZU51bWJlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxvZ091dCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGZpcmVBdXRoLnNpZ25PdXQoKVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVQaG9uZU51bWJlcigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICAgICAgdmFyIGFwcGxpY2F0aW9uVmVyaWZpZXIgPSBuZXcgdGhpcy4kZmlyZUF1dGhPYmouUmVjYXB0Y2hhVmVyaWZpZXIoJ3JlY2FwdGNoYS1jb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCBmYm8gPSB0aGlzLiRmaXJlQXV0aE9iai5QaG9uZUF1dGhQcm92aWRlclxuICAgICAgICAgICAgbGV0IGZ1ID0gdGhpcy4kZmlyZUF1dGhcbiAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyB0aGlzLiRmaXJlQXV0aE9iai5QaG9uZUF1dGhQcm92aWRlcigpO1xuICAgICAgICAgICAgcHJvdmlkZXIudmVyaWZ5UGhvbmVOdW1iZXIodGhpcy5udW1iZXIsIGFwcGxpY2F0aW9uVmVyaWZpZXIpLnRoZW4oZnVuY3Rpb24odmVyaWZpY2F0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmVyaWZpY2F0aW9uQ29kZSA9IHdpbmRvdy5wcm9tcHQoJ1BsZWFzZSBlbnRlciB0aGUgdmVyaWZpY2F0aW9uICcgKyAnY29kZSB0aGF0IHdhcyBzZW50IHRvIHlvdXIgbW9iaWxlIGRldmljZS4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmJvLmNyZWRlbnRpYWwodmVyaWZpY2F0aW9uSWQsIHZlcmlmaWNhdGlvbkNvZGUpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihwaG9uZUNyZWRlbnRpYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnUuY3VycmVudFVzZXIudXBkYXRlUGhvbmVOdW1iZXIocGhvbmVDcmVkZW50aWFsKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBob25lQXV0aFNoZWV0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1LmN1cnJlbnRVc2VyLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwocGhvbmVDcmVkZW50aWFsKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1VzZXIoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRmaXJlQXV0aC5jdXJyZW50VXNlcilcbiAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZURpc3BsYXlOYW1lKCkge1xuICAgICAgICAgICAgdGhpcy4kZmlyZUF1dGguY3VycmVudFVzZXIudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZnVsbG5hbWVcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbG5hbWVTaGVldCA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZnVsbG5hbWUgPSB0aGlzLnVzZXIuZGlzcGxheU5hbWVcbiAgICAgICAgICAgIHRoaXMubnVtYmVyID0gdGhpcy51c2VyLnBob25lTnVtYmVyXG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjY291bnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjY291bnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BY2NvdW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDI0YWVlZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BY2NvdW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWNjb3VudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImQwYzg2Zjk2XCJcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcEJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQXBwQmFyTmF2SWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcEJhcic7XG5pbXBvcnQgeyBWQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXZhdGFyJztcbmltcG9ydCB7IFZCYWRnZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJhZGdlJztcbmltcG9ydCB7IFZCb3R0b21TaGVldCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJvdHRvbVNoZWV0JztcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkQWN0aW9ucyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWQ29udGVudCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNvbnRlbnQnO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSW1nJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZMaXN0SXRlbUFjdGlvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtQXZhdGFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1Db250ZW50IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WTGlzdCc7XG5pbXBvcnQgeyBWTGlzdEl0ZW1TdWJ0aXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVkxpc3RJdGVtVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZMaXN0JztcbmltcG9ydCB7IFZTaGVldCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlNoZWV0JztcbmltcG9ydCB7IFZTcGFjZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUZXh0RmllbGQnO1xuaW1wb3J0IHsgVlRvb2xiYXJUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRvb2xiYXInO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcEJhcixWQXBwQmFyTmF2SWNvbixWQXZhdGFyLFZCYWRnZSxWQm90dG9tU2hlZXQsVkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZDYXJkVGl0bGUsVkNvbnRhaW5lcixWQ29udGVudCxWRmxleCxWSWNvbixWSW1nLFZMYXlvdXQsVkxpc3QsVkxpc3RJdGVtLFZMaXN0SXRlbUFjdGlvbixWTGlzdEl0ZW1BdmF0YXIsVkxpc3RJdGVtQ29udGVudCxWTGlzdEl0ZW1TdWJ0aXRsZSxWTGlzdEl0ZW1UaXRsZSxWU2hlZXQsVlNwYWNlcixWVGV4dEZpZWxkLFZUb29sYmFyVGl0bGV9KVxuIiwiPHRlbXBsYXRlPlxuPGFjY291bnQvPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgQWNjb3VudCBmcm9tICd+L2NvbXBvbmVudHMvQWNjb3VudC52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBBY2NvdW50XG4gIH0sXG4gIGxheW91dDogJ21lbnUnLFxuICAgICBtb3VudGVkKCl7XG4gICAgXHR0aGlzLiRmaXJlQW5hbHl0aWNzLmxvZ0V2ZW50KCdwYWdlX3ZpZXcnKVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hY2NvdW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hY2NvdW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYWNjb3VudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODJhZmFjMzgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYWNjb3VudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FjY291bnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIyMGI2N2Y1MVwiXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=