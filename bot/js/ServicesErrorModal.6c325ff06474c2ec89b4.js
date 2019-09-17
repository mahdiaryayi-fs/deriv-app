(window.webpackJsonp=window.webpackJsonp||[]).push([["ServicesErrorModal"],{536:function(e,n,t){"use strict";var o=t(6),r=t.n(o),a=t(0),l=t.n(a),i=t(1),c=t.n(i),u=t(151),s=t(61),p=t(21);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=function(e){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=m(this,(e=d(n)).call.apply(e,[this].concat(r)))).handleCancel=function(){t.props.is_closed_on_cancel&&t.props.hideFullBlur(),t.props.onCancel()},t.handleConfirm=function(){t.props.is_closed_on_confirm&&t.props.hideFullBlur(),t.props.onConfirm()},t}var t,o,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,l.a.Component),t=n,(o=[{key:"componentDidMount",value:function(){this.props.is_visible&&this.props.showFullBlur()}},{key:"componentDidUpdate",value:function(){this.props.is_visible&&this.props.showFullBlur()}},{key:"render",value:function(){var e=this.props,n=e.cancel_button_text,t=e.children,o=e.confirm_button_text,a=e.onCancel,i=e.is_loading,c=e.is_visible,p=e.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.CSSTransition,{appear:!0,in:c&&!i,timeout:50,classNames:{appear:"full-page-modal__background--enter",enter:"full-page-modal__background--enter",enterDone:"full-page-modal__background--enter-done",exit:"full-page-modal__background--exit"},unmountOnExit:!0},l.a.createElement("div",{className:"full-page-modal__background"})),l.a.createElement(u.CSSTransition,{appear:!0,in:c&&!i,timeout:50,classNames:{appear:"full-page-modal__wrapper--enter",enter:"full-page-modal__wrapper--enter",enterDone:"full-page-modal__wrapper--enter-done",exit:"full-page-modal__wrapper--exit"},unmountOnExit:!0},l.a.createElement("div",{className:"full-page-modal__wrapper"},l.a.createElement("div",{className:"full-page-modal__dialog"},p&&l.a.createElement("h1",{className:"full-page-modal__header"},p),"string"==typeof t?l.a.createElement("p",{className:"full-page-modal__content"},t):l.a.createElement("div",{className:"full-page-modal__content"},t),l.a.createElement("div",{className:"full-page-modal__footer"},a&&l.a.createElement(s.a,{className:r()("full-page-modal__button","btn--secondary","btn--secondary--orange"),has_effect:!0,text:n,onClick:this.handleCancel}),o&&l.a.createElement(s.a,{className:r()("full-page-modal__button","btn--primary","btn--primary--orange"),has_effect:!0,text:o,onClick:this.handleConfirm}))))))}}])&&_(t.prototype,o),a&&_(t,a),n}();g.defaultProps={is_closed_on_cancel:!0,is_closed_on_confirm:!0},g.propTypes={cancel_button_text:c.a.string,confirm_button_text:c.a.string,hideFullBlur:c.a.func,is_closed_on_cancel:c.a.bool,is_closed_on_confirm:c.a.bool,is_loading:c.a.bool,is_visible:c.a.bool,onCancel:c.a.func,onConfirm:c.a.func,showFullBlur:c.a.func,title:c.a.string};var h=Object(p.b)(function(e){var n=e.ui;return{hideFullBlur:n.hideFullBlur,is_loading:n.is_loading,showFullBlur:n.showFullBlur}})(g);n.a=h},544:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),l=t.n(a),i=t(3),c=t(536),u={buy:Object(i.localize)("Purchase Error"),sell:Object(i.localize)("Sell Error")},s=function(e){var n=e.is_visible,t=e.onConfirm,o=e.services_error,a=o.code,l=o.message;return a&&l?r.a.createElement(c.a,{title:u[o.type],confirm_button_text:Object(i.localize)("OK"),onConfirm:t,is_visible:n},l):null};s.propTypes={is_visible:l.a.bool,onConfirm:l.a.func,services_error:l.a.object};var p=s;t.d(n,"default",function(){return p})}}]);
//# sourceMappingURL=ServicesErrorModal.6c325ff06474c2ec89b4.js.map