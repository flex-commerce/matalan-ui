(function($) {

  $.extend($.fn, {
    renameAttr: function(oldName, newName) {
      return this.each(function() {
        var $el = $(this);
        $el
          .attr(newName, $el.attr(oldName))
          .removeAttr(oldName);
      });
    }
  });

  module.exports = {

    classes: {
      CONTAINER: 'container--bodyfix',
      FIXED: 'is-fixed'
    },

    _init: function(element) {
      this.$element = $(element);
      this.$html = $('html');
      this.$body = $('body');
      this.$modals = this.$body.children('.modal');
      this.$doc = $(document);

      this.$container = this._buildContainer();
    },


    /**
     * This function contains several methods for fixing scrolling issues across different browsers.
     * See each if statement for an in depth explanation.
     */
    lock: function() {
      this._init();

      var self = this;

      var getPadding = function(position) {
        return parseInt(self.$body.css('padding-' + position));
      };

      this.scrollPosition = this.$body.scrollTop();
      this.$doc.off('touchmove', this._preventDefault);
      this.$container.addClass(this.classes.FIXED);


      /**
       * On Chrome, we can get away with fixing the position of the html and moving it up to the equivalent of
       * the scroll position to lock scrolling.
       */

      if ($.browser.chrome) {
        this.$html.css('position', 'fixed');
        this.$html.css('top', this.scrollPosition * -1);
      }


      /**
       * On iOS, we lock the height of the element's body wrapping div as well as do some scrolling magic to make
       * sure forms don't jump the page around when they're focused.
       */
      else if ($.os.ios && $.os.major >= 7) {
        this.$body
          .css('margin-top', 0)
          .css('margin-bottom', 0)
          .css('position', 'fixed');

        this.$container
          .height(window.innerHeight)
          .css('overflow', 'hidden')
          .scrollTop(this.scrollPosition - getPadding('top') - getPadding('bottom'));
      }
    },


    /**
     * The body content needs to be wrapped in a containing element in order to facilitate scroll blocking.
     * One can either be supplied in the options, or we'll create one automatically, and append all body content to it.
     */

    _buildContainer: function() {
      // Check if there's a lockup container already created. If there is, use it
      var $container = $('.' + this.classes.CONTAINER);
      if (!$container.length) {
        $container = this._createContainer();
      }

      return $container;
    },

    _createContainer: function() {
      this._disableScripts(function() {
        this.$body.wrapInner($('<div />').addClass(this.classes.CONTAINER));
        this._moveExistingModals();
      });

      return this.$body.find('.' + this.classes.CONTAINER).data('generated', true);
    },

    // scripts within the body must be disabled to avoid re-executing them
    _disableScripts: function(fn) {
      var $scripts = this.$body.find('script')
        .renameAttr('src', 'x-src')
        .attr('type', 'text/lockup-script');

      fn.call(this);
      $scripts.renameAttr('x-src', 'src').attr('type', 'text/javascript');
    },

    _moveExistingModals: function() {
      this.$modals.appendTo(this.$body);
    },

    /**
     * Undo all the things above
     */
    unlock: function() {
      if (this.isFixed()) {
        this.$doc.on('touchmove', this._preventDefault);
        this.$container.removeClass(this.classes.FIXED);

        if ($.browser.chrome) {
          this.$html.css('position', '');
          this.$html.css('top', '');
          window.scrollTo(0, this.scrollPosition);

        } else if ($.os.ios && $.os.major >= 7) {
          this.$body
            .css('margin', '')
            .css('position', '');
          this.$container
            .css('overflow', '')
            .css('height', '');
          window.scrollTo(0, this.scrollPosition);
        }

        this.$doc.off('touchmove', this._preventDefault);
      }
    },

    isFixed: function() {
      return this.$container.hasClass(this.classes.FIXED);
    },

    _preventDefault: function(e) {
      e.preventDefault();
    }
  };



})($);
