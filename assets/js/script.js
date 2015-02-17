jQuery(function($){
	'use strict';

	// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#basic');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());
	// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#basic1');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic1',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());
// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#basic2');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic2',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());
// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#basic3');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic3',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());
		// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#basic5');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic5',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());
	// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#basic4');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic4',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());	
});
/*!
 * jQuery Raty - A Star Rating Plugin
 *
 * The MIT License
 *
 * @author  : Washington Botelho
 * @doc     : http://wbotelhos.com/raty
 * @version : 2.7.0
 *
 */

;
(function($) {
  'use strict';

  var methods = {
    init: function(options) {
      return this.each(function() {
        this.self = $(this);

        methods.destroy.call(this.self);

        this.opt = $.extend(true, {}, $.fn.raty.defaults, options);

        methods._adjustCallback.call(this);
        methods._adjustNumber.call(this);
        methods._adjustHints.call(this);

        this.opt.score = methods._adjustedScore.call(this, this.opt.score);

        if (this.opt.starType !== 'img') {
          methods._adjustStarType.call(this);
        }

        methods._adjustPath.call(this);
        methods._createStars.call(this);

        if (this.opt.cancel) {
          methods._createCancel.call(this);
        }

        if (this.opt.precision) {
          methods._adjustPrecision.call(this);
        }

        methods._createScore.call(this);
        methods._apply.call(this, this.opt.score);
        methods._setTitle.call(this, this.opt.score);
        methods._target.call(this, this.opt.score);

        if (this.opt.readOnly) {
          methods._lock.call(this);
        } else {
          this.style.cursor = 'pointer';

          methods._binds.call(this);
        }
      });
    },

    _adjustCallback: function() {
      var options = ['number', 'readOnly', 'score', 'scoreName', 'target'];

      for (var i = 0; i < options.length; i++) {
        if (typeof this.opt[options[i]] === 'function') {
          this.opt[options[i]] = this.opt[options[i]].call(this);
        }
      }
    },

    _adjustedScore: function(score) {
      if (!score) {
        return score;
      }

      return methods._between(score, 0, this.opt.number);
    },

    _adjustHints: function() {
      if (!this.opt.hints) {
        this.opt.hints = [];
      }

      if (!this.opt.halfShow && !this.opt.half) {
        return;
      }

      var steps = this.opt.precision ? 10 : 2;

      for (var i = 0; i < this.opt.number; i++) {
        var group = this.opt.hints[i];

        if (Object.prototype.toString.call(group) !== '[object Array]') {
          group = [group];
        }

        this.opt.hints[i] = [];

        for (var j = 0; j < steps; j++) {
          var
            hint = group[j],
            last = group[group.length - 1];

          if (last === undefined) {
            last = null;
          }

          this.opt.hints[i][j] = hint === undefined ? last : hint;
        }
      }
    },

    _adjustNumber: function() {
      this.opt.number = methods._between(this.opt.number, 1, this.opt.numberMax);
    },

    _adjustPath: function() {
      this.opt.path = this.opt.path || '';

      if (this.opt.path && this.opt.path.charAt(this.opt.path.length - 1) !== '/') {
        this.opt.path += '/';
      }
    },

    _adjustPrecision: function() {
      this.opt.half = true;
    },

    _adjustStarType: function() {
      var replaces = ['cancelOff', 'cancelOn', 'starHalf', 'starOff', 'starOn'];

      this.opt.path = '';

      for (var i = 0; i < replaces.length; i++) {
        this.opt[replaces[i]] = this.opt[replaces[i]].replace('.', '-');
      }
    },

    _apply: function(score) {
      methods._fill.call(this, score);

      if (score) {
        if (score > 0) {
          this.score.val(score);
        }

        methods._roundStars.call(this, score);
      }
    },

    _between: function(value, min, max) {
      return Math.min(Math.max(parseFloat(value), min), max);
    },

    _binds: function() {
      if (this.cancel) {
        methods._bindOverCancel.call(this);
        methods._bindClickCancel.call(this);
        methods._bindOutCancel.call(this);
      }

      methods._bindOver.call(this);
      methods._bindClick.call(this);
      methods._bindOut.call(this);
    },

    _bindClick: function() {
      var that = this;

      that.stars.on('click.raty', function(evt) {
        var
          execute = true,
          score   = (that.opt.half || that.opt.precision) ? that.self.data('score') : (this.alt || $(this).data('alt'));

        if (that.opt.click) {
          execute = that.opt.click.call(that, +score, evt);
        }

        if (execute || execute === undefined) {
          if (that.opt.half && !that.opt.precision) {
            score = methods._roundHalfScore.call(that, score);
          }

          methods._apply.call(that, score);
        }
      });
    },

    _bindClickCancel: function() {
      var that = this;

      that.cancel.on('click.raty', function(evt) {
        that.score.removeAttr('value');

        if (that.opt.click) {
          that.opt.click.call(that, null, evt);
        }
      });
    },

    _bindOut: function() {
      var that = this;

      that.self.on('mouseleave.raty', function(evt) {
        var score = +that.score.val() || undefined;

        methods._apply.call(that, score);
        methods._target.call(that, score, evt);
        methods._resetTitle.call(that);

        if (that.opt.mouseout) {
          that.opt.mouseout.call(that, score, evt);
        }
      });
    },

    _bindOutCancel: function() {
      var that = this;

      that.cancel.on('mouseleave.raty', function(evt) {
        var icon = that.opt.cancelOff;

        if (that.opt.starType !== 'img') {
          icon = that.opt.cancelClass + ' ' + icon;
        }

        methods._setIcon.call(that, this, icon);

        if (that.opt.mouseout) {
          var score = +that.score.val() || undefined;

          that.opt.mouseout.call(that, score, evt);
        }
      });
    },

    _bindOver: function() {
      var that   = this,
          action = that.opt.half ? 'mousemove.raty' : 'mouseover.raty';

      that.stars.on(action, function(evt) {
        var score = methods._getScoreByPosition.call(that, evt, this);

        methods._fill.call(that, score);

        if (that.opt.half) {
          methods._roundStars.call(that, score, evt);
          methods._setTitle.call(that, score, evt);

          that.self.data('score', score);
        }

        methods._target.call(that, score, evt);

        if (that.opt.mouseover) {
          that.opt.mouseover.call(that, score, evt);
        }
      });
    },

    _bindOverCancel: function() {
      var that = this;

      that.cancel.on('mouseover.raty', function(evt) {
        var
          starOff = that.opt.path + that.opt.starOff,
          icon    = that.opt.cancelOn;

        if (that.opt.starType === 'img') {
          that.stars.attr('src', starOff);
        } else {
          icon = that.opt.cancelClass + ' ' + icon;

          that.stars.attr('class', starOff);
        }

        methods._setIcon.call(that, this, icon);
        methods._target.call(that, null, evt);

        if (that.opt.mouseover) {
          that.opt.mouseover.call(that, null);
        }
      });
    },

    _buildScoreField: function() {
      return $('<input />', { name: this.opt.scoreName, type: 'hidden' }).appendTo(this);
    },

    _createCancel: function() {
      var icon   = this.opt.path + this.opt.cancelOff,
          cancel = $('<' + this.opt.starType + ' />', { title: this.opt.cancelHint, 'class': this.opt.cancelClass });

      if (this.opt.starType === 'img') {
        cancel.attr({ src: icon, alt: 'x' });
      } else {
        // TODO: use $.data
        cancel.attr('data-alt', 'x').addClass(icon);
      }

      if (this.opt.cancelPlace === 'left') {
        this.self.prepend('&#160;').prepend(cancel);
      } else {
        this.self.append('&#160;').append(cancel);
      }

      this.cancel = cancel;
    },

    _createScore: function() {
      var score = $(this.opt.targetScore);

      this.score = score.length ? score : methods._buildScoreField.call(this);
    },

    _createStars: function() {
      for (var i = 1; i <= this.opt.number; i++) {
        var
          name  = methods._nameForIndex.call(this, i),
          attrs = { alt: i, src: this.opt.path + this.opt[name] };

        if (this.opt.starType !== 'img') {
          attrs = { 'data-alt': i, 'class': attrs.src }; // TODO: use $.data.
        }

        attrs.title = methods._getHint.call(this, i);

        $('<' + this.opt.starType + ' />', attrs).appendTo(this);

        if (this.opt.space) {
          this.self.append(i < this.opt.number ? '&#160;' : '');
        }
      }

      this.stars = this.self.children(this.opt.starType);
    },

    _error: function(message) {
      $(this).text(message);

      $.error(message);
    },

    _fill: function(score) {
      var hash = 0;

      for (var i = 1; i <= this.stars.length; i++) {
        var
          icon,
          star   = this.stars[i - 1],
          turnOn = methods._turnOn.call(this, i, score);

        if (this.opt.iconRange && this.opt.iconRange.length > hash) {
          var irange = this.opt.iconRange[hash];

          icon = methods._getRangeIcon.call(this, irange, turnOn);

          if (i <= irange.range) {
            methods._setIcon.call(this, star, icon);
          }

          if (i === irange.range) {
            hash++;
          }
        } else {
          icon = this.opt[turnOn ? 'starOn' : 'starOff'];

          methods._setIcon.call(this, star, icon);
        }
      }
    },

    _getFirstDecimal: function(number) {
      var
        decimal = number.toString().split('.')[1],
        result  = 0;

      if (decimal) {
        result = parseInt(decimal.charAt(0), 10);

        if (decimal.slice(1, 5) === '9999') {
          result++;
        }
      }

      return result;
    },

    _getRangeIcon: function(irange, turnOn) {
      return turnOn ? irange.on || this.opt.starOn : irange.off || this.opt.starOff;
    },

    _getScoreByPosition: function(evt, icon) {
      var score = parseInt(icon.alt || icon.getAttribute('data-alt'), 10);

      if (this.opt.half) {
        var
          size    = methods._getWidth.call(this),
          percent = parseFloat((evt.pageX - $(icon).offset().left) / size);

        score = score - 1 + percent;
      }

      return score;
    },

    _getHint: function(score, evt) {
      if (score !== 0 && !score) {
        return this.opt.noRatedMsg;
      }

      var
        decimal = methods._getFirstDecimal.call(this, score),
        integer = Math.ceil(score),
        group   = this.opt.hints[(integer || 1) - 1],
        hint    = group,
        set     = !evt || this.move;

      if (this.opt.precision) {
        if (set) {
          decimal = decimal === 0 ? 9 : decimal - 1;
        }

        hint = group[decimal];
      } else if (this.opt.halfShow || this.opt.half) {
        decimal = set && decimal === 0 ? 1 : decimal > 5 ? 1 : 0;

        hint = group[decimal];
      }

      return hint === '' ? '' : hint || score;
    },

    _getWidth: function() {
      var width = this.stars[0].width || parseFloat(this.stars.eq(0).css('font-size'));

      if (!width) {
        methods._error.call(this, 'Could not get the icon width!');
      }

      return width;
    },

    _lock: function() {
      var hint = methods._getHint.call(this, this.score.val());

      this.style.cursor = '';
      this.title        = hint;

      this.score.prop('readonly', true);
      this.stars.prop('title', hint);

      if (this.cancel) {
        this.cancel.hide();
      }

      this.self.data('readonly', true);
    },

    _nameForIndex: function(i) {
      return this.opt.score && this.opt.score >= i ? 'starOn' : 'starOff';
    },

    _resetTitle: function(star) {
      for (var i = 0; i < this.opt.number; i++) {
        this.stars[i].title = methods._getHint.call(this, i + 1);
      }
    },

     _roundHalfScore: function(score) {
      var integer = parseInt(score, 10),
          decimal = methods._getFirstDecimal.call(this, score);

      if (decimal !== 0) {
        decimal = decimal > 5 ? 1 : 0.5;
      }

      return integer + decimal;
    },

    _roundStars: function(score, evt) {
      var
        decimal = (score % 1).toFixed(2),
        name    ;

      if (evt || this.move) {
        name = decimal > 0.5 ? 'starOn' : 'starHalf';
      } else if (decimal > this.opt.round.down) {               // Up:   [x.76 .. x.99]
        name = 'starOn';

        if (this.opt.halfShow && decimal < this.opt.round.up) { // Half: [x.26 .. x.75]
          name = 'starHalf';
        } else if (decimal < this.opt.round.full) {             // Down: [x.00 .. x.5]
          name = 'starOff';
        }
      }

      if (name) {
        var
          icon = this.opt[name],
          star = this.stars[Math.ceil(score) - 1];

        methods._setIcon.call(this, star, icon);
      }                                                         // Full down: [x.00 .. x.25]
    },

    _setIcon: function(star, icon) {
      star[this.opt.starType === 'img' ? 'src' : 'className'] = this.opt.path + icon;
    },

    _setTarget: function(target, score) {
      if (score) {
        score = this.opt.targetFormat.toString().replace('{score}', score);
      }

      if (target.is(':input')) {
        target.val(score);
      } else {
        target.html(score);
      }
    },

    _setTitle: function(score, evt) {
      if (score) {
        var
          integer = parseInt(Math.ceil(score), 10),
          star    = this.stars[integer - 1];

        star.title = methods._getHint.call(this, score, evt);
      }
    },

    _target: function(score, evt) {
      if (this.opt.target) {
        var target = $(this.opt.target);

        if (!target.length) {
          methods._error.call(this, 'Target selector invalid or missing!');
        }

        var mouseover = evt && evt.type === 'mouseover';

        if (score === undefined) {
          score = this.opt.targetText;
        } else if (score === null) {
          score = mouseover ? this.opt.cancelHint : this.opt.targetText;
        } else {
          if (this.opt.targetType === 'hint') {
            score = methods._getHint.call(this, score, evt);
          } else if (this.opt.precision) {
            score = parseFloat(score).toFixed(1);
          }

          var mousemove = evt && evt.type === 'mousemove';

          if (!mouseover && !mousemove && !this.opt.targetKeep) {
            score = this.opt.targetText;
          }
        }

        methods._setTarget.call(this, target, score);
      }
    },

    _turnOn: function(i, score) {
      return this.opt.single ? (i === score) : (i <= score);
    },

    _unlock: function() {
      this.style.cursor = 'pointer';
      this.removeAttribute('title');

      this.score.removeAttr('readonly');

      this.self.data('readonly', false);

      for (var i = 0; i < this.opt.number; i++) {
        this.stars[i].title = methods._getHint.call(this, i + 1);
      }

      if (this.cancel) {
        this.cancel.css('display', '');
      }
    },

    cancel: function(click) {
      return this.each(function() {
        var self = $(this);

        if (self.data('readonly') !== true) {
          methods[click ? 'click' : 'score'].call(self, null);

          this.score.removeAttr('value');
        }
      });
    },

    click: function(score) {
      return this.each(function() {
        if ($(this).data('readonly') !== true) {
          score = methods._adjustedScore.call(this, score);

          methods._apply.call(this, score);

          if (this.opt.click) {
            this.opt.click.call(this, score, $.Event('click'));
          }

          methods._target.call(this, score);
        }
      });
    },

    destroy: function() {
      return this.each(function() {
        var self = $(this),
            raw  = self.data('raw');

        if (raw) {
          self.off('.raty').empty().css({ cursor: raw.style.cursor }).removeData('readonly');
        } else {
          self.data('raw', self.clone()[0]);
        }
      });
    },

    getScore: function() {
      var score = [],
          value ;

      this.each(function() {
        value = this.score.val();

        score.push(value ? +value : undefined);
      });

      return (score.length > 1) ? score : score[0];
    },

    move: function(score) {
      return this.each(function() {
        var
          integer  = parseInt(score, 10),
          decimal  = methods._getFirstDecimal.call(this, score);

        if (integer >= this.opt.number) {
          integer = this.opt.number - 1;
          decimal = 10;
        }

        var
          width   = methods._getWidth.call(this),
          steps   = width / 10,
          star    = $(this.stars[integer]),
          percent = star.offset().left + steps * decimal,
          evt     = $.Event('mousemove', { pageX: percent });

        this.move = true;

        star.trigger(evt);

        this.move = false;
      });
    },

    readOnly: function(readonly) {
      return this.each(function() {
        var self = $(this);

        if (self.data('readonly') !== readonly) {
          if (readonly) {
            self.off('.raty').children('img').off('.raty');

            methods._lock.call(this);
          } else {
            methods._binds.call(this);
            methods._unlock.call(this);
          }

          self.data('readonly', readonly);
        }
      });
    },

    reload: function() {
      return methods.set.call(this, {});
    },

    score: function() {
      var self = $(this);

      return arguments.length ? methods.setScore.apply(self, arguments) : methods.getScore.call(self);
    },

    set: function(options) {
      return this.each(function() {
        $(this).raty($.extend({}, this.opt, options));
      });
    },

    setScore: function(score) {
      return this.each(function() {
        if ($(this).data('readonly') !== true) {
          score = methods._adjustedScore.call(this, score);

          methods._apply.call(this, score);
          methods._target.call(this, score);
        }
      });
    }
  };

  $.fn.raty = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist!');
    }
  };

  $.fn.raty.defaults = {
    cancel       : false,
    cancelClass  : 'raty-cancel',
    cancelHint   : 'Cancel this rating!',
    cancelOff    : 'cancel-off.png',
    cancelOn     : 'cancel-on.png',
    cancelPlace  : 'left',
    click        : undefined,
    half         : false,
    halfShow     : true,
    hints        : ['bad', 'poor', 'regular', 'good', 'gorgeous'],
    iconRange    : undefined,
    mouseout     : undefined,
    mouseover    : undefined,
    noRatedMsg   : 'Not rated yet!',
    number       : 5,
    numberMax    : 20,
    path         : undefined,
    precision    : false,
    readOnly     : false,
    round        : { down: 0.25, full: 0.6, up: 0.76 },
    score        : undefined,
    scoreName    : 'score',
    single       : false,
    space        : true,
    starHalf     : 'star-half.png',
    starOff      : 'star-off.png',
    starOn       : 'star-on.png',
    starType     : 'img',
    target       : undefined,
    targetFormat : '{score}',
    targetKeep   : false,
    targetScore  : undefined,
    targetText   : '',
    targetType   : 'hint'
  };

})(jQuery);

//region PI accordion
jQuery(function($){

	var set = {
		classAccordion: 'pi-accordion',
		classTogglerBehavior: 'pi-behavior-toggle',
		classItem: 'pi-accordion-item',
		classItemActive: 'pi-accordion-item-active',
		classItemDefaultOpen: 'pi-default-open',
		classTitle: 'pi-accordion-title',
		classContent: 'pi-accordion-content'
	};

	var $accs = $('.' + set.classItem);

	if($accs.length){

		$accs.each(function () {
			var $item = $(this);
			if (!$item.hasClass(set.classItemDefaultOpen)) {
				$item.find('.' + set.classContent).hide();
			} else {
				$item.addClass(set.classItemActive);
			}
		});

		$('.' + set.classTitle).click(function(e) {

			var $link = $(this),
				$item = $link.parents('.' + set.classItem),
				$acc = $item.parents('.' + set.classAccordion);

			if ($item.hasClass(set.classItemActive)) {
				if (!$acc.hasClass(set.classTogglerBehavior)) {
					$acc.find('.' + set.classItem).removeClass(set.classItemActive);
					$acc.find('.' + set.classContent).slideUp();
				} else {
					$item.removeClass(set.classItemActive);
					$link.next('.' + set.classContent).slideUp();
				}
			} else {
				if (!$acc.hasClass(set.classTogglerBehavior)) {
					$acc.find('.' + set.classItem).removeClass(set.classItemActive);
					$acc.find('.' + set.classContent).slideUp();
				}
				$item.addClass(set.classItemActive);
				$link.next('.' + set.classContent).slideToggle();
			}

			e.preventDefault();
		});
	}

});
//endregion
jQuery(function($){var set={classAccordion:"pi-accordion",classTogglerBehavior:"pi-behavior-toggle",classItem:"pi-accordion-item",classItemActive:"pi-accordion-item-active",classItemDefaultOpen:"pi-default-open",classTitle:"pi-accordion-title",classContent:"pi-accordion-content"},$accs=$("."+set.classItem);$accs.length&&($accs.each(function(){var $item=$(this);$item.hasClass(set.classItemDefaultOpen)?$item.addClass(set.classItemActive):$item.find("."+set.classContent).hide()}),$("."+set.classTitle).click(function(e){var $link=$(this),$item=$link.parents("."+set.classItem),$acc=$item.parents("."+set.classAccordion);$item.hasClass(set.classItemActive)?$acc.hasClass(set.classTogglerBehavior)?($item.removeClass(set.classItemActive),$link.next("."+set.classContent).slideUp()):($acc.find("."+set.classItem).removeClass(set.classItemActive),$acc.find("."+set.classContent).slideUp()):($acc.hasClass(set.classTogglerBehavior)||($acc.find("."+set.classItem).removeClass(set.classItemActive),$acc.find("."+set.classContent).slideUp()),$item.addClass(set.classItemActive),$link.next("."+set.classContent).slideToggle()),e.preventDefault()}))});
/* ========================================================================
 * PI: pi.alert.js v1.0.0
 * BASED ON: bootstrap-alert.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#alerts
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

	"use strict"; // jshint ;_;


	/* ALERT CLASS DEFINITION
	 * ====================== */

	var dismiss = '[data-dismiss="alert"]'
		, Alert = function (el) {
			$(el).on('click', dismiss, this.close);
		}

	Alert.prototype.close = function (e) {
		var $this = $(this)
			, selector = $this.attr('data-target')
			, $parent;

		if (!selector) {
			selector = $this.attr('href');
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
		}

		$parent = $(selector);

		e && e.preventDefault();

		$parent.length || ($parent = $this.hasClass('pi-alert') ? $this : $this.parent());

		$parent.trigger(e = $.Event('close'));

		if (e.isDefaultPrevented()) return;

		$parent.removeClass('in');

		function removeElement() {
			$parent
				.trigger('closed')
				.remove();
		}

		if($.support.transition && $parent.hasClass('fade')) {
			$this.on($.support.transition.end, function(e){
				e.stopPropagation();
			});
			$parent.on($.support.transition.end, removeElement);
		} else {
			removeElement();
		}

	}


	/* ALERT PLUGIN DEFINITION
	 * ======================= */

	var old = $.fn.alert

	$.fn.alert = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('alert');
			if (!data) $this.data('alert', (data = new Alert(this)));
			if (typeof option == 'string') data[option].call($this);
		});
	}

	$.fn.alert.Constructor = Alert;


	/* ALERT NO CONFLICT
	 * ================= */

	$.fn.alert.noConflict = function () {
		$.fn.alert = old;
		return this;
	}


	/* ALERT DATA-API
	 * ============== */

	$(document).on('click.alert.data-api', dismiss, Alert.prototype.close);

}(window.jQuery);
!function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on("click",dismiss,this.close)};Alert.prototype.close=function(e){function removeElement(){$parent.trigger("closed").remove()}var $parent,$this=$(this),selector=$this.attr("data-target");selector||(selector=$this.attr("href"),selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")),$parent=$(selector),e&&e.preventDefault(),$parent.length||($parent=$this.hasClass("pi-alert")?$this:$this.parent()),$parent.trigger(e=$.Event("close")),e.isDefaultPrevented()||($parent.removeClass("in"),$.support.transition&&$parent.hasClass("fade")?($this.on($.support.transition.end,function(e){e.stopPropagation()}),$parent.on($.support.transition.end,removeElement)):removeElement())};var old=$.fn.alert;$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data("alert");data||$this.data("alert",data=new Alert(this)),"string"==typeof option&&data[option].call($this)})},$.fn.alert.Constructor=Alert,$.fn.alert.noConflict=function(){return $.fn.alert=old,this},$(document).on("click.alert.data-api",dismiss,Alert.prototype.close)}(window.jQuery);
var piBounds = {
	lg: 1140,
	md: 992,
	sm: 768,
	xs: 480,
	xs2: 320
};

jQuery(function($){

	var $w = $(window),
		$d = $(document),
		resizeTMT;

	window.piViewportSize = getViewportSize();
	window.piViewportWidth = window.piViewportSize.width;
	window.piViewportHeight = window.piViewportSize.height;
	window.piCurrentBound = piBounds[0];

	function checkBound(){

		var previousBound = window.piCurrentBound;

		window.piViewportSize = getViewportSize();
		window.piViewportWidth = window.piViewportSize.width;
		window.piViewportHeight = window.piViewportSize.height;

		if(window.piViewportWidth >= piBounds.lg && window.piCurrentBound != 'lg'){
			window.piCurrentBound = 'lg';
		} else if(window.piViewportWidth >= piBounds.md && window.piViewportWidth < piBounds.lg && window.piCurrentBound != 'md') {
			window.piCurrentBound = 'md';
		} else if(window.piViewportWidth >= piBounds.sm && window.piViewportWidth < piBounds.md && window.piCurrentBound != 'sm') {
			window.piCurrentBound = 'sm';
		} else if(window.piViewportWidth >= piBounds.xs && window.piViewportWidth < piBounds.sm && window.piCurrentBound != 'xs') {
			window.piCurrentBound = 'xs';
		} else if(window.piViewportWidth >= piBounds.xs2 && window.piViewportWidth < piBounds.xs && window.piCurrentBound != '2xs') {
			window.piCurrentBound = '2xs';
		} else if(window.piViewportWidth < piBounds.xs2 && window.piCurrentBound != '3xs') {
			window.piCurrentBound = '3xs';
		}
		if(previousBound != window.piCurrentBound){
			$d.trigger('piBoundChanged');
		}

	}

	$w.resize(function(){
		clearTimeout(resizeTMT);
		resizeTMT = setTimeout(function(){
			checkBound();
		}, 10);
	});

	$w.trigger('resize');


});
var piBounds={lg:1140,md:992,sm:768,xs:480,xs2:320};jQuery(function($){function checkBound(){var previousBound=window.piCurrentBound;window.piViewportSize=getViewportSize(),window.piViewportWidth=window.piViewportSize.width,window.piViewportHeight=window.piViewportSize.height,window.piViewportWidth>=piBounds.lg&&"lg"!=window.piCurrentBound?window.piCurrentBound="lg":window.piViewportWidth>=piBounds.md&&window.piViewportWidth<piBounds.lg&&"md"!=window.piCurrentBound?window.piCurrentBound="md":window.piViewportWidth>=piBounds.sm&&window.piViewportWidth<piBounds.md&&"sm"!=window.piCurrentBound?window.piCurrentBound="sm":window.piViewportWidth>=piBounds.xs&&window.piViewportWidth<piBounds.sm&&"xs"!=window.piCurrentBound?window.piCurrentBound="xs":window.piViewportWidth>=piBounds.xs2&&window.piViewportWidth<piBounds.xs&&"2xs"!=window.piCurrentBound?window.piCurrentBound="2xs":window.piViewportWidth<piBounds.xs2&&"3xs"!=window.piCurrentBound&&(window.piCurrentBound="3xs"),previousBound!=window.piCurrentBound&&$d.trigger("piBoundChanged")}var resizeTMT,$w=$(window),$d=$(document);window.piViewportSize=getViewportSize(),window.piViewportWidth=window.piViewportSize.width,window.piViewportHeight=window.piViewportSize.height,window.piCurrentBound=piBounds[0],$w.resize(function(){clearTimeout(resizeTMT),resizeTMT=setTimeout(function(){checkBound()},10)}),$w.trigger("resize")});
jQuery(function($){

//region Columns fix
	var $w = $(window),
		$galleries = $('.pi-gallery.pi-column-fix'),
		$liquidGalleries = $galleries.filter('[class*=pi-liquid-col]');

	$liquidGalleries.each(function(){

		var $g = $(this),
			$gItems = $g.find('.pi-gallery-item'),
			isStacked = $g.hasClass('pi-stacked'),
			itemsWidthRejected = 0;

		detectColumnSizeNumber($g,'gallery');

		$w.load(function () {
			var tmt;

			$w.resize(function(){
				if(!itemsWidthRejected){
					itemsWidthRejected = 1;
					$gItems.each(function(i){
						var $el = $(this);
						$el.css('width', '');
					});
				}
			});

			$w.resize(function(){
				clearTimeout(tmt);
				tmt = setTimeout(function(){

					itemsWidthRejected = 0;

					if(isStacked){
						$g.css('cssText', 'margin-right: 0 !important');
					}

					var cols = $g.data('width-' + window.piCurrentBound),
						galleryWidth = $g.width(),
						galleryItemPadding = parseInt($gItems.eq(0).css('padding-left'), 10) + parseInt($gItems.eq(0).css('padding-right'), 10),
						galleryWidthWithoutPadding = galleryWidth - cols*galleryItemPadding,
						itemWidthExcess = galleryWidthWithoutPadding % cols,
						galleryItemWidth = (galleryWidthWithoutPadding - itemWidthExcess) / cols;

					if(itemWidthExcess && isStacked){
						galleryItemWidth++;
						$g.css('cssText', 'margin-right: -' + cols + 'px !important');
					} else if(isStacked) {
						$g.css('cssText', 'margin-right: 0 !important');
					}

					$gItems.each(function(i){
						var $el = $(this);
						$el.width(galleryItemWidth);
					});

				}, 100);

			});
			$w.trigger('resize');
		});

	});

	var $colsToFix = $('.pi-column-fix').filter('[class*=pi-col-]');

	if($colsToFix.length){

		$w.load(function () {

			var tmt;

			$colsToFix.each(function(){
				detectColumnSizeNumber($(this),'grid');
			});

			$w.resize(function(){

				clearTimeout(tmt);

				tmt = setTimeout(function(){

					$colsToFix.each(function(){

						var $el = $(this),
							elPadding = parseInt($el.css('padding-left'), 10) + parseInt($el.css('padding-right'), 10),
							newWidth = Math.floor( $el.parent().width() / 12 * $el.data('width-' + window.piCurrentBound ) ) - elPadding;

						$(this).width(newWidth);

					});

				}, 100);
			});

			$w.trigger('resize');
		});

	}

	function detectColumnSizeNumber($el, gridType){

		var classesList = $el.attr('class'),
			gClasses = classesList.match(/pi-liquid-col-\d?\D\D-\d/g) || classesList.match(/pi-col-\d?\D\D-\d/g),
			bounds = {};

		for(var i = 0; i < gClasses.length; i++){
			var bound = gClasses[i].match(/pi-liquid-col-(\d?\D\D)-(\d)/i) || gClasses[i].match(/pi-col-(\d?\D\D)-(\d)/i);
			if(bound){
				bounds[bound[1]] = bound[2];
			}
		}

		if(gridType == 'gallery'){
			if(!bounds['3xs']) {
				bounds['3xs'] = 1;
			}
		} else {
			if(!bounds['3xs']) {
				bounds['3xs'] = 12;
			}
		}

		if(!bounds['2xs']) {
			bounds['2xs'] = bounds['3xs'];
		}
		if(!bounds['xs']) {
			bounds['xs'] = bounds['2xs'];
		}
		if(!bounds['sm']) {
			bounds['sm'] = bounds['xs'];
		}
		if(!bounds['md']) {
			bounds['md'] = bounds['sm'];
		}
		if(!bounds['lg']) {
			bounds['lg'] = bounds['md'];
		}

		for(var bound in bounds){
			$el.data('width-' + bound, bounds[bound]);
		}
	}
	//endregion

});
jQuery(function($){function detectColumnSizeNumber($el,gridType){for(var classesList=$el.attr("class"),gClasses=classesList.match(/pi-liquid-col-\d?\D\D-\d/g)||classesList.match(/pi-col-\d?\D\D-\d/g),bounds={},i=0;i<gClasses.length;i++){var bound=gClasses[i].match(/pi-liquid-col-(\d?\D\D)-(\d)/i)||gClasses[i].match(/pi-col-(\d?\D\D)-(\d)/i);bound&&(bounds[bound[1]]=bound[2])}"gallery"==gridType?bounds["3xs"]||(bounds["3xs"]=1):bounds["3xs"]||(bounds["3xs"]=12),bounds["2xs"]||(bounds["2xs"]=bounds["3xs"]),bounds.xs||(bounds.xs=bounds["2xs"]),bounds.sm||(bounds.sm=bounds.xs),bounds.md||(bounds.md=bounds.sm),bounds.lg||(bounds.lg=bounds.md);for(var bound in bounds)$el.data("width-"+bound,bounds[bound])}var $w=$(window),$galleries=$(".pi-gallery.pi-column-fix"),$liquidGalleries=$galleries.filter("[class*=pi-liquid-col]");$liquidGalleries.each(function(){var $g=$(this),$gItems=$g.find(".pi-gallery-item"),isStacked=$g.hasClass("pi-stacked"),itemsWidthRejected=0;detectColumnSizeNumber($g,"gallery"),$w.load(function(){var tmt;$w.resize(function(){itemsWidthRejected||(itemsWidthRejected=1,$gItems.each(function(){var $el=$(this);$el.css("width","")}))}),$w.resize(function(){clearTimeout(tmt),tmt=setTimeout(function(){itemsWidthRejected=0,isStacked&&$g.css("cssText","margin-right: 0 !important");var cols=$g.data("width-"+window.piCurrentBound),galleryWidth=$g.width(),galleryItemPadding=parseInt($gItems.eq(0).css("padding-left"),10)+parseInt($gItems.eq(0).css("padding-right"),10),galleryWidthWithoutPadding=galleryWidth-cols*galleryItemPadding,itemWidthExcess=galleryWidthWithoutPadding%cols,galleryItemWidth=(galleryWidthWithoutPadding-itemWidthExcess)/cols;itemWidthExcess&&isStacked?(galleryItemWidth++,$g.css("cssText","margin-right: -"+cols+"px !important")):isStacked&&$g.css("cssText","margin-right: 0 !important"),$gItems.each(function(){var $el=$(this);$el.width(galleryItemWidth)})},100)}),$w.trigger("resize")})});var $colsToFix=$(".pi-column-fix").filter("[class*=pi-col-]");$colsToFix.length&&$w.load(function(){var tmt;$colsToFix.each(function(){detectColumnSizeNumber($(this),"grid")}),$w.resize(function(){clearTimeout(tmt),tmt=setTimeout(function(){$colsToFix.each(function(){var $el=$(this),elPadding=parseInt($el.css("padding-left"),10)+parseInt($el.css("padding-right"),10),newWidth=Math.floor($el.parent().width()/12*$el.data("width-"+window.piCurrentBound))-elPadding;$(this).width(newWidth)})},100)}),$w.trigger("resize")})});
jQuery(function($){

	$.fn.piCounter = function(){

		var types = [
			'simple',
			'line',
			'circle'
		],
		defaultType = types[0],
		defaultFrom = 0,
		defaultTo = 100,
		defaultFramesPerSecond = 20,
		defaultDuration = 3000,
		defaultEasing = 'none',
		defaultColorStart = '#835fbb',
		defaultColorStop = '#835fbb',
		defaultColorStroke = '#edeff3',
		defaultLineWidth = 0.025,
		defaultCircleAnimationSpeed = 32;

		return this.each(function() {

			var $el = $(this),
				$elColors = $el.find('.pi-counter-circle-colors'),
				$blockNum = $el.find('.pi-counter-number'),
				$blockProgress = $el.find('.pi-counter-progress'),
				/*elId = $el.attr('id') ? $el.attr('id') : '',*/
				type = $el.data('counterType') ? $el.data('counterType') : defaultType,
				start = $el.data('countFrom') ? $el.data('countFrom') : defaultFrom,
				end = $el.data('countTo') ? $el.data('countTo') : defaultTo,
				duration = $el.data('duration') ? $el.data('duration') : defaultDuration,
				easing = $el.data('easing') ? $el.data('easing') : defaultEasing,
				frameRate = 1000 / ($el.data('framesPerSecond') ? $el.data('framesPerSecond') :defaultFramesPerSecond),
				_colorStart = $elColors.css('background-color') ? rgb2hex($elColors.css('background-color')) : defaultColorStart,
				_colorStop = $elColors.css('background-color') ? rgb2hex($elColors.css('background-color')) : defaultColorStop,
				_colorStroke = $elColors.css('border-color') ? rgb2hex($elColors.css('border-color')) : defaultColorStroke,
				_lineWidth = $el.data('lineWidth') ? $el.data('lineWidth') : defaultLineWidth,
				_circleAnimationSpeed = $el.data('circleAnimationSpeed') ? $el.data('circleAnimationSpeed') : defaultCircleAnimationSpeed,
				step = Math.abs(end - start) / (duration / frameRate),
				current = start,
				currentTime = 0;

			function updateNum(){
				if(easing === 'none'){
					current += step;
				} else if($.easing[easing]) {
					step = $.easing[easing](0, currentTime, start, end, duration);
					if(step > end){
						step = end;
					}
					current = step;
				}
				$blockNum.html(parseInt(current, 10));
			}

			function updateWidth(){
				$blockProgress.css({
					width: parseInt(end, 10) + '%'
				});
			}

			function startAnimation(){
				if(type === types[0]) {
					setInitialNum();
					if($blockNum.length){
						animate();
					}
				} else if(type === types[1]) {
					setInitialWidth();
					if($blockProgress.length){
						setTimeout(function(){
							updateWidth();
						},100);
					}
				} else if(type === types[2]){
						var opts = {
							lines: 12, // The number of lines to draw
							angle: 0.5, // The length of each line
							lineWidth: _lineWidth, // The line thickness
							limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
							colorStart: _colorStart,   // Colors
							colorStop: _colorStop,    // just experiment with them
							strokeColor: _colorStroke, // to see which ones work best for you
							generateGradient: false
						};
						var target = $el.find('canvas')[0]; // your canvas element
						var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
						gauge.maxValue = 100; // set max gauge value
						gauge.animationSpeed = _circleAnimationSpeed; // set animation speed (32 is default value)
						gauge.set(end); // set actual value
					}

				/*}*/
			}

			function setInitialNum(){
				$blockNum.html(parseInt(start, 10));
			}

			function setInitialWidth(){
				$blockProgress.css({
					width: parseInt(start, 10) + '%'
				});
			}

			function animate(){
				setTimeout(function(){
					if(currentTime < duration){
						currentTime += frameRate;
						if(type === types[0]) {
							updateNum();
						}
						animate();
					}
				}, frameRate );
			}

			function init(){
				startAnimation();
			}

			init();

		});
	};

});
jQuery(function($){$.fn.piCounter=function(){var types=["simple","line","circle"],defaultType=types[0],defaultFrom=0,defaultTo=100,defaultFramesPerSecond=20,defaultDuration=3e3,defaultEasing="none",defaultColorStart="#835fbb",defaultColorStop="#835fbb",defaultColorStroke="#edeff3",defaultLineWidth=.025,defaultCircleAnimationSpeed=32;return this.each(function(){function updateNum(){"none"===easing?current+=step:$.easing[easing]&&(step=$.easing[easing](0,currentTime,start,end,duration),step>end&&(step=end),current=step),$blockNum.html(parseInt(current,10))}function updateWidth(){$blockProgress.css({width:parseInt(end,10)+"%"})}function startAnimation(){if(type===types[0])setInitialNum(),$blockNum.length&&animate();else if(type===types[1])setInitialWidth(),$blockProgress.length&&setTimeout(function(){updateWidth()},100);else if(type===types[2]){var opts={lines:12,angle:.5,lineWidth:_lineWidth,limitMax:"false",colorStart:_colorStart,colorStop:_colorStop,strokeColor:_colorStroke,generateGradient:!1},target=$el.find("canvas")[0],gauge=new Donut(target).setOptions(opts);gauge.maxValue=100,gauge.animationSpeed=_circleAnimationSpeed,gauge.set(end)}}function setInitialNum(){$blockNum.html(parseInt(start,10))}function setInitialWidth(){$blockProgress.css({width:parseInt(start,10)+"%"})}function animate(){setTimeout(function(){duration>currentTime&&(currentTime+=frameRate,type===types[0]&&updateNum(),animate())},frameRate)}function init(){startAnimation()}var $el=$(this),$elColors=$el.find(".pi-counter-circle-colors"),$blockNum=$el.find(".pi-counter-number"),$blockProgress=$el.find(".pi-counter-progress"),type=$el.data("counterType")?$el.data("counterType"):defaultType,start=$el.data("countFrom")?$el.data("countFrom"):defaultFrom,end=$el.data("countTo")?$el.data("countTo"):defaultTo,duration=$el.data("duration")?$el.data("duration"):defaultDuration,easing=$el.data("easing")?$el.data("easing"):defaultEasing,frameRate=1e3/($el.data("framesPerSecond")?$el.data("framesPerSecond"):defaultFramesPerSecond),_colorStart=$elColors.css("background-color")?rgb2hex($elColors.css("background-color")):defaultColorStart,_colorStop=$elColors.css("background-color")?rgb2hex($elColors.css("background-color")):defaultColorStop,_colorStroke=$elColors.css("border-color")?rgb2hex($elColors.css("border-color")):defaultColorStroke,_lineWidth=$el.data("lineWidth")?$el.data("lineWidth"):defaultLineWidth,_circleAnimationSpeed=$el.data("circleAnimationSpeed")?$el.data("circleAnimationSpeed"):defaultCircleAnimationSpeed,step=Math.abs(end-start)/(duration/frameRate),current=start,currentTime=0;init()})}});
jQuery(function($){

	var $w = $(window),
		$mainWrapperWidth = $('#pi-all').width(),
		mainWrapDifference = (window.piViewportWidth - $mainWrapperWidth)/2,
		classLeftSide = 'pi-submenu-left-side';

	//region Menu DD side fix
	function checkMenus($submenu, initialOffset){
		var offset = $submenu.offset().left - mainWrapDifference,
			width = $submenu.width();
		if($mainWrapperWidth - offset < width){
			$submenu.addClass(classLeftSide);
		} else if($mainWrapperWidth - initialOffset > width) {
			$submenu.removeClass(classLeftSide);
		}
	}

	$('.pi-submenu').each(function(){

		var $el = $(this),
			initialOffset = $el.offset().left - mainWrapDifference,
			timer;

		$w.on('resize', function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				$mainWrapperWidth = $('#pi-all').width();
				mainWrapDifference = (window.piViewportWidth - $mainWrapperWidth)/2;
				checkMenus($el,initialOffset);
			}, 200);
		});
		checkMenus($el,initialOffset);

	});
	//endregion

});
jQuery(function($){function checkMenus($submenu,initialOffset){var offset=$submenu.offset().left-mainWrapDifference,width=$submenu.width();width>$mainWrapperWidth-offset?$submenu.addClass(classLeftSide):$mainWrapperWidth-initialOffset>width&&$submenu.removeClass(classLeftSide)}var $w=$(window),$mainWrapperWidth=$("#pi-all").width(),mainWrapDifference=(window.piViewportWidth-$mainWrapperWidth)/2,classLeftSide="pi-submenu-left-side";$(".pi-submenu").each(function(){var timer,$el=$(this),initialOffset=$el.offset().left-mainWrapDifference;$w.on("resize",function(){clearTimeout(timer),timer=setTimeout(function(){$mainWrapperWidth=$("#pi-all").width(),mainWrapDifference=(window.piViewportWidth-$mainWrapperWidth)/2,checkMenus($el,initialOffset)},200)}),checkMenus($el,initialOffset)})});
/*var h_slider = 400,
	screenSize = $(window).width(),
	direxionate = { 
		slider: function(i){ 
		}, init: function(){
			this.slider();
		}
	};
$(document).on('ready', function(){ direxionate.init(); });*/

/* Slider */

jQuery(function($){

	//region Revolution Slider
	if($.fn.revolution){
		$('.pi-revolution-slider-home').revolution({
			delay:9000,
			startwidth:1130,
			startheight:400,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"off",
			hideTimerBar:"on"
		});
	}
	//endregion
});

/* Search Home*/
$('.option-advance').on('click', function () {
	$(this).text('Opcion Basica');
	if ($(this).data('type') =='0') {
		$('.search-basic').hide(400);
		$('.search-advanced').show(400);		
			$(this).data('type','1');
	} else{
		$(this).text('Opcion Avanzada');
		$('.search-basic').show(400);	
		$('.search-advanced').hide(400);
			$(this).data('type','0');
	};
});
jQuery(function($){

	//region Fixed header
	var $w = $(window),
		$b = $('body'),
		classRow = 'pi-section-w',
		сlassFixedRow = 'pi-header-row-fixed',
		сlassFixedRows = 'pi-header-rows-fixed',
		сlassFixed = '',
		classReducible = 'pi-row-reducible',
		classReduced = 'pi-row-reduced',
		$stickyHeader = $('.pi-header-sticky'),
		$reducibleRow = $stickyHeader.find('.' + classReducible),
		rowsQuantity = $stickyHeader.find('.' + classRow).length,
		reduceTreshold = 400,
		stateFixed = 'default',
		stateReduce = 'default',
		headerTopOffset = 0 ,
		scrollTop = 0;

	if($stickyHeader.length){
		init();
		checkHeader();
	}

	function init(){

		scrollTop = $w.scrollTop();
		headerTopOffset += $stickyHeader.offset().top;

		сlassFixed = rowsQuantity > 1 ? сlassFixedRows : сlassFixedRow;

		$w.scroll(function(){
			scrollTop = $w.scrollTop();
			checkHeader();
		});
	}

	function checkHeader(){
		fixHeader();
		if($reducibleRow.length) {
			reduceHeader();
		}
	}

	function fixHeader(){
		if(scrollTop >= headerTopOffset){
			if(stateFixed == 'default'){
				requestAnimationFrame(function(){
					$b.addClass(сlassFixed);
				});
				stateFixed = 'fixed';
			}
		} else {
			if(stateFixed == 'fixed'){
				requestAnimationFrame(function(){
					$b.removeClass(сlassFixed);
				});
				stateFixed = 'default';
			}
		}
	}

	function reduceHeader(){
		var scrollTopExcess = scrollTop - headerTopOffset;

		if (scrollTopExcess > reduceTreshold && stateReduce != 'reduced') {
			requestAnimationFrame(function(){
				$reducibleRow.addClass(classReduced);
			});
			stateReduce = 'reduced';
		} else if(scrollTopExcess <= reduceTreshold && stateReduce != 'default') {
			requestAnimationFrame(function(){
				$reducibleRow.removeClass(classReduced);
			});
			stateReduce = 'default';
		}

	}

	//endregion

});
jQuery(function($){function init(){scrollTop=$w.scrollTop(),headerTopOffset+=$stickyHeader.offset().top,сlassFixed=rowsQuantity>1?сlassFixedRows:сlassFixedRow,$w.scroll(function(){scrollTop=$w.scrollTop(),checkHeader()})}function checkHeader(){fixHeader(),$reducibleRow.length&&reduceHeader()}function fixHeader(){scrollTop>=headerTopOffset?"default"==stateFixed&&(requestAnimationFrame(function(){$b.addClass(сlassFixed)}),stateFixed="fixed"):"fixed"==stateFixed&&(requestAnimationFrame(function(){$b.removeClass(сlassFixed)}),stateFixed="default")}function reduceHeader(){var scrollTopExcess=scrollTop-headerTopOffset;scrollTopExcess>reduceTreshold&&"reduced"!=stateReduce?(requestAnimationFrame(function(){$reducibleRow.addClass(classReduced)}),stateReduce="reduced"):reduceTreshold>=scrollTopExcess&&"default"!=stateReduce&&(requestAnimationFrame(function(){$reducibleRow.removeClass(classReduced)}),stateReduce="default")}var $w=$(window),$b=$("body"),classRow="pi-section-w",сlassFixedRow="pi-header-row-fixed",сlassFixedRows="pi-header-rows-fixed",сlassFixed="",classReducible="pi-row-reducible",classReduced="pi-row-reduced",$stickyHeader=$(".pi-header-sticky"),$reducibleRow=$stickyHeader.find("."+classReducible),rowsQuantity=$stickyHeader.find("."+classRow).length,reduceTreshold=400,stateFixed="default",stateReduce="default",headerTopOffset=0,scrollTop=0;$stickyHeader.length&&(init(),checkHeader())});


/*_____ scripts/pi.helpers.js*/

//region getViewportSize
function getViewportSize(){
	var e = window, a = 'inner';
	if (!('innerWidth' in window )) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
//endregion

//region old IE rgba backgrounds fix
function fixIE8rgba() {
	var $ = jQuery;

	if(isOldIE() === 8){
		var selectors = [
				'.pi-tooltip'
			],
			$elements = $(selectors.join(','));
		$elements.each(function(){
			var $el = $(this),
				bg = $el.css('background'),
				rgba = bg.match(/rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{1,3})\)/),
				hex = rgba ? rgba2hex(rgba[1],rgba[2],rgba[3],rgba[4]) : '#000000';
			if(rgba && hex){
				$el.css('background', 'filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=' + hex + ', EndColorStr=' + hex + ')')
			}
		});
	}
}
//endregion

//region old IE detection
function isOldIE() {
	var version = navigator.appVersion.match(/MSIE (\d)\.\d*/);
	if(version){
		return version[1];
	}
	return false;
}
//endregion

//region RGB -> HEX
var hexDigits = new Array
("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

function rgb2hex(rgb) {
	if(!rgb) {
		rgb ='rgb(0,0,0)';
	}
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
//endregion

//region RGBA -> HEX
function rgba2hex(r, g, b, a) {
	if (r > 255 || g > 255 || b > 255 || a > 255)
		throw "Invalid color component";
	return (256 + r).toString(16).substr(1) +((1 << 24) + (g << 16) | (b << 8) | a).toString(16).substr(1);
}
//endregion

function getElementHeight($el){
	var $ = jQuery,
		h = 0,
		vis = $el.css('visibility'),
		display = $el.css('display');

	if(display == 'none' || display == 'none !important'){
		$el.css({
			visibility: 'hidden',
			display: 'block'
		});
		h = $el.outerHeight();
		$el.css({
			visibility: vis,
			display: display
		});
	} else {
		h = $el.outerHeight();
	}
	return h;
}


/*_____ scripts/pi.boundManager.js*/
var piBounds = {
	lg: 1140,
	md: 992,
	sm: 768,
	xs: 480,
	xs2: 320
};

jQuery(function($){

	var $w = $(window),
		$d = $(document),
		resizeTMT;

	window.piViewportSize = getViewportSize();
	window.piViewportWidth = window.piViewportSize.width;
	window.piViewportHeight = window.piViewportSize.height;
	window.piCurrentBound = piBounds[0];

	function checkBound(){

		var previousBound = window.piCurrentBound;

		window.piViewportSize = getViewportSize();
		window.piViewportWidth = window.piViewportSize.width;
		window.piViewportHeight = window.piViewportSize.height;

		if(window.piViewportWidth >= piBounds.lg && window.piCurrentBound != 'lg'){
			window.piCurrentBound = 'lg';
		} else if(window.piViewportWidth >= piBounds.md && window.piViewportWidth < piBounds.lg && window.piCurrentBound != 'md') {
			window.piCurrentBound = 'md';
		} else if(window.piViewportWidth >= piBounds.sm && window.piViewportWidth < piBounds.md && window.piCurrentBound != 'sm') {
			window.piCurrentBound = 'sm';
		} else if(window.piViewportWidth >= piBounds.xs && window.piViewportWidth < piBounds.sm && window.piCurrentBound != 'xs') {
			window.piCurrentBound = 'xs';
		} else if(window.piViewportWidth >= piBounds.xs2 && window.piViewportWidth < piBounds.xs && window.piCurrentBound != '2xs') {
			window.piCurrentBound = '2xs';
		} else if(window.piViewportWidth < piBounds.xs2 && window.piCurrentBound != '3xs') {
			window.piCurrentBound = '3xs';
		}
		if(previousBound != window.piCurrentBound){
			$d.trigger('piBoundChanged');
		}

	}

	$w.resize(function(){
		clearTimeout(resizeTMT);
		resizeTMT = setTimeout(function(){
			checkBound();
		}, 10);
	});

	$w.trigger('resize');


});


/*_____ scripts/pi.imagesLoader.js*/
function PiImagesLoader($el, callback, delay) {

	var o = {},
		$ = jQuery;

	o.$el = $el ? typeof($el) == 'string' ? jQuery($el) : $el : 0;
	o.$imgs = o.$el.find('img');
	o.imgsQ = o.$imgs.length;
	o.imgsQ_loaded = 0;
	o.delay = delay ? delay : 0;
	o.started = 0;
	o.loaderShown = 0;
	o.$loadingAnimation = 0;
	o.$dots = 0;

	o.s = {
		c: {}
	};
	o.s.dotDistance = 14;
	o.s.dotQuantity = 3;
	o.s.dotAnimationSpeed = 100;
	o.s.c.loading = 'pi-loader';
	o.s.c.dot = 'pi-loader-dot';
	o.s.c.dotActive = 'pi-loader-dot-active';
	o.callback = (callback && (typeof(callback) == 'function')) ? callback : function () {
	};

	o.addLoadingAnimation = function () {

			o.loaderShown = true;

			var appendHtml = '<span class="' + o.s.c.loading + '"><span><span>';

			for (var i = 0; i < o.s.dotQuantity; i++) {
				appendHtml += '<span class="' + o.s.c.dot + '"></span>';
			}

			appendHtml += '</span></span></span>';

			$(appendHtml).appendTo(o.$el);

			o.$loadingAnimation = o.$el.find('.' + o.s.c.loading);
			o.$dots = o.$loadingAnimation.find('.' + o.s.c.dot);

			o.activeDotNum = 0;

			requestAnimationFrame(o.loadingDotsAnimate, o.$el);

	}

	o.hideLoadingAnimation = function () {
		o.loaderShown = 0;
		o.$dots.each(function () {
			$(this).removeClass(o.s.c.dotActive);
		});
		o.$loadingAnimation.remove();
	}

	o.loadingDotsAnimate = function (time) {

			if(!o.$loadingAnimation) {
				return;
			}
			if(!o.loadingAnimationStartTime) {
				o.loadingAnimationStartTime = time;
			}

			var needToRedraw = (time - o.loadingAnimationStartTime) >= 200 ? 1 : 0;

			if (needToRedraw) {

				o.loadingAnimationStartTime = time;

				var $currentDot = o.$dots.eq(o.activeDotNum),
					$previousDot = $currentDot.prev();

				if (!$previousDot.get(0)) {
					$previousDot = o.$dots.eq(o.s.dotQuantity - 1);
				}

				$currentDot.addClass(o.s.c.dotActive);
				$previousDot.removeClass(o.s.c.dotActive);

				o.activeDotNum++;

				if (o.activeDotNum >= o.s.dotQuantity + 1) {
					o.activeDotNum = 0;
				}
			}
			requestAnimationFrame(o.loadingDotsAnimate);

	}

	o.check_images_states = function () {

		o.$imgs.each(function(){

			var oldImg = new Image(),
				newImg = new Image(),
				imgSrc = $(this).attr('src');

			oldImg.src = imgSrc;

			if (oldImg.complete) {
				o.image_was_loaded();
			} else {

				jQuery(newImg).load(function () {
					o.image_was_loaded();
				}).error(function () {
						o.image_was_loaded();
					});

				newImg.src = imgSrc;

			}

		});

		o.addLoadingAnimation();

	}

	o.image_was_loaded = function () {
		o.imgsQ_loaded++;
		o.check_ready_state();
	}

	o.check_ready_state = function () {

		if (o.imgsQ == o.imgsQ_loaded && !o.started) {

			o.started = true;

			setTimeout(function () {
				o.callback();
				if (o.loaderShown) {
					o.hideLoadingAnimation();
				}
			}, o.delay);

		}

	}

	o.init = function () {
		if (o.imgsQ > 0) {
			o.check_images_states();
		} else {
			o.callback();
		}
	}

	o.init();
}


/*_____ scripts/pi.ddMenu.js*/
jQuery(function($){

	var $w = $(window),
		$mainWrapperWidth = $('#pi-all').width(),
		mainWrapDifference = (window.piViewportWidth - $mainWrapperWidth)/2,
		classLeftSide = 'pi-submenu-left-side';

	//region Menu DD side fix
	function checkMenus($submenu, initialOffset){
		var offset = $submenu.offset().left - mainWrapDifference,
			width = $submenu.width();
		if($mainWrapperWidth - offset < width){
			$submenu.addClass(classLeftSide);
		} else if($mainWrapperWidth - initialOffset > width) {
			$submenu.removeClass(classLeftSide);
		}
	}

	$('.pi-submenu').each(function(){

		var $el = $(this),
			initialOffset = $el.offset().left - mainWrapDifference,
			timer;

		$w.on('resize', function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				$mainWrapperWidth = $('#pi-all').width();
				mainWrapDifference = (window.piViewportWidth - $mainWrapperWidth)/2;
				checkMenus($el,initialOffset);
			}, 200);
		});
		checkMenus($el,initialOffset);

	});
	//endregion

});


/*_____ scripts/pi.init.removeLastElMargin.js*/
jQuery(function($){

	//region Remove Last Header Element Margin
	var $w = $(window),
		$hrs = $('.pi-section-header'),
		clsFloatRight = 'pi-pull-right',
		clsHeaderBlock = 'pi-row-block',
		tmt,
		hrObjects = [];

	$hrs.each(function(){
		var $curHr = $(this),
			$blocks = $curHr.find('.' + clsHeaderBlock).filter('.' + clsFloatRight);
		hrObjects.push({
			$hr: $curHr,
			$blocks: $blocks,
			currentBlock: false
		});
	});

	function checkHeaderBlocks(){
		for (var i = 0; i < hrObjects.length; i++) {

			var $curHr = hrObjects[i],
				$firstVisibleBlock = $curHr.$blocks.not(':hidden').first();

			if($firstVisibleBlock.length <1) {
				continue;
			}

			if(!$curHr.currentBlock || ($curHr.currentBlock.get(0) != $firstVisibleBlock.get(0) ) ){

				if($curHr.currentBlock) {
					$curHr.currentBlock.css({
						marginRight: $curHr.currentBlock.get(0).initialMarginRight + 'px'
					});
				}

				$curHr.currentBlock = $firstVisibleBlock;
				if(!$curHr.currentBlock.get(0).initialMarginRight){
					$curHr.currentBlock.get(0).initialMarginRight = parseInt($firstVisibleBlock.css('margin-right'), 10);
				}

				$firstVisibleBlock.css({
					marginRight: 0
				});

			}

		}
	}

	$w.resize(function(){

		clearTimeout(tmt);

		tmt = setTimeout(function(){

			checkHeaderBlocks();

		}, 300);

	});

	checkHeaderBlocks();

	//endregion

});




/*_____ scripts/pi.init.sectionHigh.js*/
jQuery(function($){

	//region Section Full Height
	var $w = $(window),
		$sections = $('.pi-section-high, .pi-block-high'),
		resizeTMT;

	$w.resize(function(){
		clearTimeout(resizeTMT);
		resizeTMT = setTimeout(function(){
			setSectionHeight();
		}, 100);
	});

	setSectionHeight();

	function setSectionHeight(){
		$sections.each(function(){
			var $el = $(this);
			$el.height(window.piViewportHeight);
		});
	}

	//endregion

});


/*_____ scripts/pi.fixedHeader.js*/
jQuery(function($){

	//region Fixed header
	var $w = $(window),
		$b = $('body'),
		classRow = 'pi-section-w',
		сlassFixedRow = 'pi-header-row-fixed',
		сlassFixedRows = 'pi-header-rows-fixed',
		сlassFixed = '',
		classReducible = 'pi-row-reducible',
		classReduced = 'pi-row-reduced',
		$stickyHeader = $('.pi-header-sticky'),
		$reducibleRow = $stickyHeader.find('.' + classReducible),
		rowsQuantity = $stickyHeader.find('.' + classRow).length,
		reduceTreshold = 400,
		stateFixed = 'default',
		stateReduce = 'default',
		headerTopOffset = 0 ,
		scrollTop = 0;

	if($stickyHeader.length){
		init();
		checkHeader();
	}

	function init(){

		scrollTop = $w.scrollTop();
		headerTopOffset += $stickyHeader.offset().top;

		сlassFixed = rowsQuantity > 1 ? сlassFixedRows : сlassFixedRow;

		$w.scroll(function(){
			scrollTop = $w.scrollTop();
			checkHeader();
		});
	}

	function checkHeader(){
		fixHeader();
		if($reducibleRow.length) {
			reduceHeader();
		}
	}

	function fixHeader(){
		if(scrollTop >= headerTopOffset){
			if(stateFixed == 'default'){
				requestAnimationFrame(function(){
					$b.addClass(сlassFixed);
				});
				stateFixed = 'fixed';
			}
		} else {
			if(stateFixed == 'fixed'){
				requestAnimationFrame(function(){
					$b.removeClass(сlassFixed);
				});
				stateFixed = 'default';
			}
		}
	}

	function reduceHeader(){
		var scrollTopExcess = scrollTop - headerTopOffset;

		if (scrollTopExcess > reduceTreshold && stateReduce != 'reduced') {
			requestAnimationFrame(function(){
				$reducibleRow.addClass(classReduced);
			});
			stateReduce = 'reduced';
		} else if(scrollTopExcess <= reduceTreshold && stateReduce != 'default') {
			requestAnimationFrame(function(){
				$reducibleRow.removeClass(classReduced);
			});
			stateReduce = 'default';
		}

	}

	//endregion

});


/*_____ scripts/pi.mobileMenu.js*/
jQuery(function ($) {

	//region Mobile menus
	var $d = $(document),
		$w = $(window),
		resizeTmt;

	new MobileMenus();

	function MobileMenus() {

		var mobileMenus = [],
			settings = {
				classMenuItemHasSubmenu: 'pi-has-dropdown',
				classParentRowWrapper: 'pi-header-row-sticky',
				classOpen: 'pi-menu-open',
				classParentRow: 'pi-section-header-w',
				classMenuWrapper: 'pi-section-menu-mobile-w',
				classMenu: 'pi-section-menu-mobile'
			};

		function init() {

			//remove targetting from regular menu in tablet wide mode.
			$('.' + settings.classMenuItemHasSubmenu).each(function(){
				$(this).find(' > a').on('click', function(e){
					if(window.piCurrentBound != 'lg'){
						e.preventDefault();
					}
				});
			});

			$('.pi-mobile-menu-toggler').each(function () {
				var $el = $(this);

				if ($el.get(0).piMenuWasInitialized) {
					return;
				}

				$el.get(0).piMenuWasInitialized = 1;

				var mobileMenu = {
					$parentRowWrapper: null,
					$toggler: $el,
					$wrapper: null,
					$menu: null,
					height: null,
					top: null,
					state: 0
				};

				mobileMenu.$parentRowWrapper = $(mobileMenu.$toggler.parents('.' + settings.classParentRowWrapper));
				mobileMenu.$wrapper = $(mobileMenu.$toggler.data('target'));
				mobileMenu.$menu = mobileMenu.$wrapper.find('.' + settings.classMenu);
				mobileMenu.$menuElements = mobileMenu.$menu.find('li');

				mobileMenu.height = mobileMenu.$menu.outerHeight();

				mobileMenu.$toggler.click(function () {
					toggleMenu(mobileMenu);
				});

				mobileMenu.$menuElements.each(function () {
					var $li = $(this);

					$li.get(0).$link = $li.find(' > a');
					$li.get(0).$siblings = $li.siblings();
					$li.get(0).$list = $li.find(' > ul');

					if ($li.get(0).$list.length) {
						$li.get(0).$link.click(function (e) {
							toggleSubmenu(mobileMenu, $li);
							e.preventDefault();
						});
					}
				});

				$d.bind('piBoundChanged', function () {
					if (mobileMenu.state && mobileMenu.$toggler.is(':hidden')) {
						toggleMenu(mobileMenu);
					}
				});

				mobileMenus.push(mobileMenu);

			});

			$w.resize(function () {
				clearTimeout(resizeTmt);
				resizeTmt = setTimeout(function () {
					checkMobileSubmenuHeight();
				}, 100);
			});

			checkMobileSubmenuHeight();

		};

		function toggleSubmenu(mobileMenu, $li) {
			if ($li.get(0).$list.hasClass('pi-active')) {
				mobileMenu.height = mobileMenu.height - $li.get(0).listHeight;
				mobileMenu.$wrapper.height(mobileMenu.height);
				$li.get(0).$list.removeClass('pi-active');
				$li.get(0).$list.animate({
					height: 0
				}, 500, function () {
					changeParentsListHeight($li, $li.get(0).listHeight, 'take');
				});
			} else {
				mobileMenu.height = mobileMenu.height + $li.get(0).listHeight;
				mobileMenu.$wrapper.height(mobileMenu.height);
				$li.get(0).$list.addClass('pi-active');
				$li.get(0).$list.animate({
					height: $li.get(0).listHeight
				}, 500, function () {
					changeParentsListHeight($li, $li.get(0).listHeight, 'add');
					$(this).height('auto');
				});
				$li.get(0).$siblings.each(function () {
					if ($(this).find(' > ul.pi-active').length) {
						toggleSubmenu(mobileMenu, $(this));
					}
				});
			}
		}

		function changeParentsListHeight($li, h, action) {
			var parentLI = $li.parents('li').length ? $li.parents('li').eq(0) : null;
			if (parentLI && parentLI.get(0).listHeight) {
				if (action == 'add') {
					parentLI.get(0).listHeight += h;
				} else {
					parentLI.get(0).listHeight -= h;
				}
				changeParentsListHeight(parentLI, h, action);
			}
		}

		function checkMobileSubmenuHeight() {
			for (var i = 0; i < mobileMenus.length; i++) {
				mobileMenus[i].$menuElements.each(function () {
					var $li = $(this);
					if ($li.get(0).$list.length) {
						var initH = getElementHeight($li.get(0).$list);
						if (initH != 0) {
							$li.get(0).listHeight = initH;
						} else {
							$li.get(0).$list.height('auto');
							$li.get(0).listHeight = getElementHeight($li.get(0).$list);
							$li.get(0).$list.height(initH);
						}
					}
				});
			}
		}

		function toggleMenu(m) {
			m.$wrapper.toggleClass(settings.classOpen);
			if (!m.$wrapper.hasClass(settings.classOpen)) {
				m.$wrapper.height(0);
				m.$wrapper.css({
					overflow: 'none'
				});
				m.state = 0;
			} else {
				m.$wrapper.height(m.height);
				m.$wrapper.css({
					overflow: 'auto'
				});
				m.state = 1;
			}
		}

		init();

		return mobileMenus;
	}

	//endregion

});


/*_____ scripts/pi.columnFix.js*/
jQuery(function($){

//region Columns fix
	var $w = $(window),
		$galleries = $('.pi-gallery.pi-column-fix'),
		$liquidGalleries = $galleries.filter('[class*=pi-liquid-col]');

	$liquidGalleries.each(function(){

		var $g = $(this),
			$gItems = $g.find('.pi-gallery-item'),
			isStacked = $g.hasClass('pi-stacked'),
			itemsWidthRejected = 0;

		detectColumnSizeNumber($g,'gallery');

		$w.load(function () {
			var tmt;

			$w.resize(function(){
				if(!itemsWidthRejected){
					itemsWidthRejected = 1;
					$gItems.each(function(i){
						var $el = $(this);
						$el.css('width', '');
					});
				}
			});

			$w.resize(function(){
				clearTimeout(tmt);
				tmt = setTimeout(function(){

					itemsWidthRejected = 0;

					if(isStacked){
						$g.css('cssText', 'margin-right: 0 !important');
					}

					var cols = $g.data('width-' + window.piCurrentBound),
						galleryWidth = $g.width(),
						galleryItemPadding = parseInt($gItems.eq(0).css('padding-left'), 10) + parseInt($gItems.eq(0).css('padding-right'), 10),
						galleryWidthWithoutPadding = galleryWidth - cols*galleryItemPadding,
						itemWidthExcess = galleryWidthWithoutPadding % cols,
						galleryItemWidth = (galleryWidthWithoutPadding - itemWidthExcess) / cols;

					if(itemWidthExcess && isStacked){
						galleryItemWidth++;
						$g.css('cssText', 'margin-right: -' + cols + 'px !important');
					} else if(isStacked) {
						$g.css('cssText', 'margin-right: 0 !important');
					}

					$gItems.each(function(i){
						var $el = $(this);
						$el.width(galleryItemWidth);
					});

				}, 100);

			});
			$w.trigger('resize');
		});

	});

	var $colsToFix = $('.pi-column-fix').filter('[class*=pi-col-]');

	if($colsToFix.length){

		$w.load(function () {

			var tmt;

			$colsToFix.each(function(){
				detectColumnSizeNumber($(this),'grid');
			});

			$w.resize(function(){

				clearTimeout(tmt);

				tmt = setTimeout(function(){

					$colsToFix.each(function(){

						var $el = $(this),
							elPadding = parseInt($el.css('padding-left'), 10) + parseInt($el.css('padding-right'), 10),
							newWidth = Math.floor( $el.parent().width() / 12 * $el.data('width-' + window.piCurrentBound ) ) - elPadding;

						$(this).width(newWidth);

					});

				}, 100);
			});

			$w.trigger('resize');
		});

	}

	function detectColumnSizeNumber($el, gridType){

		var classesList = $el.attr('class'),
			gClasses = classesList.match(/pi-liquid-col-\d?\D\D-\d/g) || classesList.match(/pi-col-\d?\D\D-\d/g),
			bounds = {};

		for(var i = 0; i < gClasses.length; i++){
			var bound = gClasses[i].match(/pi-liquid-col-(\d?\D\D)-(\d)/i) || gClasses[i].match(/pi-col-(\d?\D\D)-(\d)/i);
			if(bound){
				bounds[bound[1]] = bound[2];
			}
		}

		if(gridType == 'gallery'){
			if(!bounds['3xs']) {
				bounds['3xs'] = 1;
			}
		} else {
			if(!bounds['3xs']) {
				bounds['3xs'] = 12;
			}
		}

		if(!bounds['2xs']) {
			bounds['2xs'] = bounds['3xs'];
		}
		if(!bounds['xs']) {
			bounds['xs'] = bounds['2xs'];
		}
		if(!bounds['sm']) {
			bounds['sm'] = bounds['xs'];
		}
		if(!bounds['md']) {
			bounds['md'] = bounds['sm'];
		}
		if(!bounds['lg']) {
			bounds['lg'] = bounds['md'];
		}

		for(var bound in bounds){
			$el.data('width-' + bound, bounds[bound]);
		}
	}
	//endregion

});


/*_____ scripts/pi.alert.js*/
/* ========================================================================
 * PI: pi.alert.js v1.0.0
 * BASED ON: bootstrap-alert.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#alerts
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

	"use strict"; // jshint ;_;


	/* ALERT CLASS DEFINITION
	 * ====================== */

	var dismiss = '[data-dismiss="alert"]'
		, Alert = function (el) {
			$(el).on('click', dismiss, this.close);
		}

	Alert.prototype.close = function (e) {
		var $this = $(this)
			, selector = $this.attr('data-target')
			, $parent;

		if (!selector) {
			selector = $this.attr('href');
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
		}

		$parent = $(selector);

		e && e.preventDefault();

		$parent.length || ($parent = $this.hasClass('pi-alert') ? $this : $this.parent());

		$parent.trigger(e = $.Event('close'));

		if (e.isDefaultPrevented()) return;

		$parent.removeClass('in');

		function removeElement() {
			$parent
				.trigger('closed')
				.remove();
		}

		if($.support.transition && $parent.hasClass('fade')) {
			$this.on($.support.transition.end, function(e){
				e.stopPropagation();
			});
			$parent.on($.support.transition.end, removeElement);
		} else {
			removeElement();
		}

	}


	/* ALERT PLUGIN DEFINITION
	 * ======================= */

	var old = $.fn.alert

	$.fn.alert = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('alert');
			if (!data) $this.data('alert', (data = new Alert(this)));
			if (typeof option == 'string') data[option].call($this);
		});
	}

	$.fn.alert.Constructor = Alert;


	/* ALERT NO CONFLICT
	 * ================= */

	$.fn.alert.noConflict = function () {
		$.fn.alert = old;
		return this;
	}


	/* ALERT DATA-API
	 * ============== */

	$(document).on('click.alert.data-api', dismiss, Alert.prototype.close);

}(window.jQuery);


/*_____ scripts/pi.init.formsBlurClasses.js*/
jQuery(function ($) {

	//region Input blur styles
	var $b = $('body'),
		cls = {
			changed: 'pi-form-control-changed',
			focused: 'pi-form-control-focused',
			withIcon: 'pi-input-with-icon'
		};
	$b.delegate('.form-control', 'keyup',function () {
		var $el = $(this),
			val = $el.val();
		if (val !== 'placeholder' && $.trim(val)) {
			$el.addClass(cls.changed);
			$el.parents('form').addClass(cls.changed);
		} else {
			$el.removeClass(cls.changed);
			$el.parents('form').removeClass(cls.changed);
		}
	}).delegate('.form-control', 'focus',function () {
		var $el = $(this);
		$el.parents('form').addClass(cls.focused);
		$el.parents('.' + cls.withIcon).addClass(cls.focused);
	}).delegate('.form-control', 'blur', function () {
		var $el = $(this);
		$el.parents('form').removeClass(cls.focused);
		$el.parents('.' + cls.withIcon).removeClass(cls.focused);
	});
	//endregion

});


/*_____ scripts/pi.init.placeholder.js*/
jQuery(function($){

	//region form placeholder
	if($.fn.placeholder){
		$('input, textarea').placeholder();
	}
	//endregion

});


/*_____ scripts/pi.init.jqueryScrollTo.js*/
jQuery(function($){

	//region Scroll To
	if($.fn.scrollTo){

		var $w = $(window),
			defaultOffset = -100,
			defaultOffsetMin = -20,
			defaultDuration = 750,
			defaultEasing = 'easeOutExpo';

		$('[data-scroll-to]').each(function(){

			var $el = $(this),
				target = $el.data('scrollTo'),
				duration = $el.data('scrollToDuration') || defaultDuration,
				offset = $el.data('scrollToOffset') || defaultOffset,
				initialOffset = offset,
				easing = $el.data('scrollToEasing') || defaultEasing;

			target = $(target).length ? $(target) : target;

			$el.bind('click', function(e){

				$.scrollTo.window().stop(true);

				if(window.piCurrentBound != 'lg'){
					offset = defaultOffsetMin;
				} else {
					offset = initialOffset;
				}

				$w.scrollTo(target, duration, {
					offset: offset,
					easing: easing
				});

				e.preventDefault();

			});

		});
	}
	//endregion

});


/*_____ scripts/pi.scrollTopArrow.js*/
jQuery(function($){

	//region Scroll Top Arrow logic

	var $w = $(window),
		$d = $(document),
		$arrow = $('.pi-scroll-top-arrow'),
		classActive = 'pi-active',
		classBottom = 'pi-scroll-top-arrow-footer',
		footerHeight = 100,
		treshold = 400,
		scrollCheckTmt;

	if($arrow.length) {
		$w.on('scroll resize', function(){
			clearTimeout(scrollCheckTmt);
			scrollCheckTmt = setTimeout(function(){
				checkArrow();
			}, 100);
		});

		$arrow.on('click', function(){
			$arrow.removeClass(classActive);
		});
	}

	function checkArrow(){
		var scrollTop = $w.scrollTop(),
			documentHeight = $d.height(),
			nearFooter = (window.piViewportHeight + scrollTop) >= documentHeight - footerHeight;

		if(scrollTop >= treshold){
			$arrow.addClass(classActive);
		} else {
			$arrow.removeClass(classActive);
		}

		if(nearFooter && window.piCurrentBound != 'lg'){
			$arrow.addClass(classBottom);
		} else {
			$arrow.removeClass(classBottom);
		}

	}

	//endregion

});


/*_____ scripts/pi.init.social.js*/
jQuery(function($){

	//region Socials jumps
	$('.pi-jump a,' +
		'.pi-jump-bg a').each(function () {
			var $el = $(this);
			$el.append($el.find('i').clone());
		});

	$('.pi-social-icons-big a i').wrap('<span></span>');
	//endregion

});


/*_____ scripts/pi.init.caption.js*/
jQuery(function($){

	//region Captions animations
	$('.pi-overlay-slide:not(.pi-caption-opened)').each(function () {
		var $caption = $(this),
			$parent = $caption.parents('.pi-img-w'),
			height = $caption.outerHeight(true);

		if ($caption.hasClass('pi-show-heading')) {
			height -= $caption.find('h2,h3,h4,h5,h6').eq(0).outerHeight(true) + parseInt($caption.css('padding-top'), 10);
		}

		$caption.css({
			bottom: -height,
			visibility: 'visible'
		});

		$parent.hover(function () {
			$caption.css({
				bottom: 0
			})
		}, function () {
			$caption.css({
				bottom: -height
			})
		});

	});
	//endregion

});


/*_____ scripts/pi.init.submitFormContact.js*/
jQuery(function($){

	//region Init Footer Form submit
	$('.pi-contact-form').submit(function(){

		var $form = $(this),
			$error = $form.find('.pi-error-container'),
			action  = $form.attr('action');

		$error.slideUp(750, function() {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$companyName = $form.find('.form-control-company-name'),
				$phone = $form.find('.form-control-phone'),
				$budjet = $form.find('.form-control-budjet'),
				$comments = $form.find('.form-control-comments'),
				captchaEnabled = $form.data('captcha') == 'no' ? 0 : 1,
				$recaptcha = $form.find('#recaptcha_response_field'),
				$recaptcha_challenge = $form.find('#recaptcha_challenge_field');

			$.post(action, {
					name: $name.val(),
					email: $email.val(),
					companyName: $companyName.val(),
					phone: $phone.val(),
					budjet: $budjet.val(),
					comments: $comments.val(),
					captchaEnabled: captchaEnabled,
					recaptcha: $recaptcha.val(),
					recaptcha_challenge: $recaptcha_challenge.val()
				},
				function(data){
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$name.val('');
						$email.val('');
						$companyName.val('');
						$phone.val('');
						$budjet.val('');
						$comments.val('');
					}
				}
			);

		});

		return false;

	});
	//endregion

});


/*_____ scripts/pi.init.colorbox.js*/
jQuery(function($){

	//region colorbox
	if($.fn.colorbox){

		var $d = $(document),
			$w = $(window),
			$colorboxLinks = $('.pi-colorbox'),
			//Breakpoints could be 3xs, 2xs, xs, sm, md, lg
			breakpoints = [
				'sm',
				'md',
				'lg'
			],
			colorboxState = 0,
			colorboxNeeded = 0;


		function piColorboxInit(){

			colorboxNeeded = 0;

			for(var i in breakpoints){
				if(breakpoints[i] == window.piCurrentBound){
					colorboxNeeded = 1;
					break;
				}
			}

			if(colorboxNeeded && !colorboxState){
				$colorboxLinks.each(function(){
					var $el = $(this),
						videoData = $el.data('videoSize'),
						videoSize = videoData ? videoData.split(',') : 0,
						groupFromData = $el.data('colorboxGroup'),
						group = groupFromData ? groupFromData : 'pi-group';

					if(videoSize[0]){
						videoSize[0] = parseInt(videoSize[0], 10);
						videoSize[1] = parseInt(videoSize[1], 10);
						if(typeof(videoSize[0]) == 'number' && typeof(videoSize[1]) == 'number'){
							$el.colorbox({
								rel:group,
								iframe:true,
								innerWidth: videoSize[0],
								innerHeight: videoSize[1],
								maxWidth:'95%',
								maxHeight:'95%'
							});
						}
					} else {
						$el.colorbox({
							rel:group,
							maxWidth:'95%',
							maxHeight:'95%'
						});
					}

				});
				colorboxState = 1;
			} else if(!colorboxNeeded && colorboxState) {
				$colorboxLinks.colorbox.remove();
				colorboxState = 0;
			}
		}

		$d.bind('piBoundChanged', piColorboxInit);
		piColorboxInit();

	}
	//endregion

});



 
function getViewportSize(){var e=window,a="inner";return"innerWidth"in window||(a="client",e=document.documentElement||document.body),{width:e[a+"Width"],height:e[a+"Height"]}}function fixIE8rgba(){var $=jQuery;if(8===isOldIE()){var selectors=[".pi-tooltip"],$elements=$(selectors.join(","));$elements.each(function(){var $el=$(this),bg=$el.css("background"),rgba=bg.match(/rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{1,3})\)/),hex=rgba?rgba2hex(rgba[1],rgba[2],rgba[3],rgba[4]):"#000000";rgba&&hex&&$el.css("background","filter: progid:DXImageTransform.Microsoft.gradient(startColorStr="+hex+", EndColorStr="+hex+")")})}}function isOldIE(){var version=navigator.appVersion.match(/MSIE (\d)\.\d*/);return version?version[1]:!1}function rgb2hex(rgb){return rgb||(rgb="rgb(0,0,0)"),rgb=rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#"+hex(rgb[1])+hex(rgb[2])+hex(rgb[3])}function hex(x){return isNaN(x)?"00":hexDigits[(x-x%16)/16]+hexDigits[x%16]}function rgba2hex(r,g,b,a){if(r>255||g>255||b>255||a>255)throw"Invalid color component";return(256+r).toString(16).substr(1)+((1<<24)+(g<<16)|b<<8|a).toString(16).substr(1)}function getElementHeight($el){var h=0,vis=$el.css("visibility"),display=$el.css("display");return"none"==display||"none !important"==display?($el.css({visibility:"hidden",display:"block"}),h=$el.outerHeight(),$el.css({visibility:vis,display:display})):h=$el.outerHeight(),h}function PiImagesLoader($el,callback,delay){var o={},$=jQuery;o.$el=$el?"string"==typeof $el?jQuery($el):$el:0,o.$imgs=o.$el.find("img"),o.imgsQ=o.$imgs.length,o.imgsQ_loaded=0,o.delay=delay?delay:0,o.started=0,o.loaderShown=0,o.$loadingAnimation=0,o.$dots=0,o.s={c:{}},o.s.dotDistance=14,o.s.dotQuantity=3,o.s.dotAnimationSpeed=100,o.s.c.loading="pi-loader",o.s.c.dot="pi-loader-dot",o.s.c.dotActive="pi-loader-dot-active",o.callback=callback&&"function"==typeof callback?callback:function(){},o.addLoadingAnimation=function(){o.loaderShown=!0;for(var appendHtml='<span class="'+o.s.c.loading+'"><span><span>',i=0;i<o.s.dotQuantity;i++)appendHtml+='<span class="'+o.s.c.dot+'"></span>';appendHtml+="</span></span></span>",$(appendHtml).appendTo(o.$el),o.$loadingAnimation=o.$el.find("."+o.s.c.loading),o.$dots=o.$loadingAnimation.find("."+o.s.c.dot),o.activeDotNum=0,requestAnimationFrame(o.loadingDotsAnimate,o.$el)},o.hideLoadingAnimation=function(){o.loaderShown=0,o.$dots.each(function(){$(this).removeClass(o.s.c.dotActive)}),o.$loadingAnimation.remove()},o.loadingDotsAnimate=function(time){if(o.$loadingAnimation){o.loadingAnimationStartTime||(o.loadingAnimationStartTime=time);var needToRedraw=time-o.loadingAnimationStartTime>=200?1:0;if(needToRedraw){o.loadingAnimationStartTime=time;var $currentDot=o.$dots.eq(o.activeDotNum),$previousDot=$currentDot.prev();$previousDot.get(0)||($previousDot=o.$dots.eq(o.s.dotQuantity-1)),$currentDot.addClass(o.s.c.dotActive),$previousDot.removeClass(o.s.c.dotActive),o.activeDotNum++,o.activeDotNum>=o.s.dotQuantity+1&&(o.activeDotNum=0)}requestAnimationFrame(o.loadingDotsAnimate)}},o.check_images_states=function(){o.$imgs.each(function(){var oldImg=new Image,newImg=new Image,imgSrc=$(this).attr("src");oldImg.src=imgSrc,oldImg.complete?o.image_was_loaded():(jQuery(newImg).load(function(){o.image_was_loaded()}).error(function(){o.image_was_loaded()}),newImg.src=imgSrc)}),o.addLoadingAnimation()},o.image_was_loaded=function(){o.imgsQ_loaded++,o.check_ready_state()},o.check_ready_state=function(){o.imgsQ!=o.imgsQ_loaded||o.started||(o.started=!0,setTimeout(function(){o.callback(),o.loaderShown&&o.hideLoadingAnimation()},o.delay))},o.init=function(){o.imgsQ>0?o.check_images_states():o.callback()},o.init()}var hexDigits=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),piBounds={lg:1140,md:992,sm:768,xs:480,xs2:320};jQuery(function($){function checkBound(){var previousBound=window.piCurrentBound;window.piViewportSize=getViewportSize(),window.piViewportWidth=window.piViewportSize.width,window.piViewportHeight=window.piViewportSize.height,window.piViewportWidth>=piBounds.lg&&"lg"!=window.piCurrentBound?window.piCurrentBound="lg":window.piViewportWidth>=piBounds.md&&window.piViewportWidth<piBounds.lg&&"md"!=window.piCurrentBound?window.piCurrentBound="md":window.piViewportWidth>=piBounds.sm&&window.piViewportWidth<piBounds.md&&"sm"!=window.piCurrentBound?window.piCurrentBound="sm":window.piViewportWidth>=piBounds.xs&&window.piViewportWidth<piBounds.sm&&"xs"!=window.piCurrentBound?window.piCurrentBound="xs":window.piViewportWidth>=piBounds.xs2&&window.piViewportWidth<piBounds.xs&&"2xs"!=window.piCurrentBound?window.piCurrentBound="2xs":window.piViewportWidth<piBounds.xs2&&"3xs"!=window.piCurrentBound&&(window.piCurrentBound="3xs"),previousBound!=window.piCurrentBound&&$d.trigger("piBoundChanged")}var resizeTMT,$w=$(window),$d=$(document);window.piViewportSize=getViewportSize(),window.piViewportWidth=window.piViewportSize.width,window.piViewportHeight=window.piViewportSize.height,window.piCurrentBound=piBounds[0],$w.resize(function(){clearTimeout(resizeTMT),resizeTMT=setTimeout(function(){checkBound()},10)}),$w.trigger("resize")}),jQuery(function($){function checkMenus($submenu,initialOffset){var offset=$submenu.offset().left-mainWrapDifference,width=$submenu.width();width>$mainWrapperWidth-offset?$submenu.addClass(classLeftSide):$mainWrapperWidth-initialOffset>width&&$submenu.removeClass(classLeftSide)}var $w=$(window),$mainWrapperWidth=$("#pi-all").width(),mainWrapDifference=(window.piViewportWidth-$mainWrapperWidth)/2,classLeftSide="pi-submenu-left-side";$(".pi-submenu").each(function(){var timer,$el=$(this),initialOffset=$el.offset().left-mainWrapDifference;$w.on("resize",function(){clearTimeout(timer),timer=setTimeout(function(){$mainWrapperWidth=$("#pi-all").width(),mainWrapDifference=(window.piViewportWidth-$mainWrapperWidth)/2,checkMenus($el,initialOffset)},200)}),checkMenus($el,initialOffset)})}),jQuery(function($){function checkHeaderBlocks(){for(var i=0;i<hrObjects.length;i++){var $curHr=hrObjects[i],$firstVisibleBlock=$curHr.$blocks.not(":hidden").first();$firstVisibleBlock.length<1||$curHr.currentBlock&&$curHr.currentBlock.get(0)==$firstVisibleBlock.get(0)||($curHr.currentBlock&&$curHr.currentBlock.css({marginRight:$curHr.currentBlock.get(0).initialMarginRight+"px"}),$curHr.currentBlock=$firstVisibleBlock,$curHr.currentBlock.get(0).initialMarginRight||($curHr.currentBlock.get(0).initialMarginRight=parseInt($firstVisibleBlock.css("margin-right"),10)),$firstVisibleBlock.css({marginRight:0}))}}var tmt,$w=$(window),$hrs=$(".pi-section-header"),clsFloatRight="pi-pull-right",clsHeaderBlock="pi-row-block",hrObjects=[];$hrs.each(function(){var $curHr=$(this),$blocks=$curHr.find("."+clsHeaderBlock).filter("."+clsFloatRight);hrObjects.push({$hr:$curHr,$blocks:$blocks,currentBlock:!1})}),$w.resize(function(){clearTimeout(tmt),tmt=setTimeout(function(){checkHeaderBlocks()},300)}),checkHeaderBlocks()}),jQuery(function($){function setSectionHeight(){$sections.each(function(){var $el=$(this);$el.height(window.piViewportHeight)})}var resizeTMT,$w=$(window),$sections=$(".pi-section-high, .pi-block-high");$w.resize(function(){clearTimeout(resizeTMT),resizeTMT=setTimeout(function(){setSectionHeight()},100)}),setSectionHeight()}),jQuery(function($){function init(){scrollTop=$w.scrollTop(),headerTopOffset+=$stickyHeader.offset().top,сlassFixed=rowsQuantity>1?сlassFixedRows:сlassFixedRow,$w.scroll(function(){scrollTop=$w.scrollTop(),checkHeader()})}function checkHeader(){fixHeader(),$reducibleRow.length&&reduceHeader()}function fixHeader(){scrollTop>=headerTopOffset?"default"==stateFixed&&(requestAnimationFrame(function(){$b.addClass(сlassFixed)}),stateFixed="fixed"):"fixed"==stateFixed&&(requestAnimationFrame(function(){$b.removeClass(сlassFixed)}),stateFixed="default")}function reduceHeader(){var scrollTopExcess=scrollTop-headerTopOffset;scrollTopExcess>reduceTreshold&&"reduced"!=stateReduce?(requestAnimationFrame(function(){$reducibleRow.addClass(classReduced)}),stateReduce="reduced"):reduceTreshold>=scrollTopExcess&&"default"!=stateReduce&&(requestAnimationFrame(function(){$reducibleRow.removeClass(classReduced)}),stateReduce="default")}var $w=$(window),$b=$("body"),classRow="pi-section-w",сlassFixedRow="pi-header-row-fixed",сlassFixedRows="pi-header-rows-fixed",сlassFixed="",classReducible="pi-row-reducible",classReduced="pi-row-reduced",$stickyHeader=$(".pi-header-sticky"),$reducibleRow=$stickyHeader.find("."+classReducible),rowsQuantity=$stickyHeader.find("."+classRow).length,reduceTreshold=400,stateFixed="default",stateReduce="default",headerTopOffset=0,scrollTop=0;$stickyHeader.length&&(init(),checkHeader())}),jQuery(function($){function MobileMenus(){function init(){$("."+settings.classMenuItemHasSubmenu).each(function(){$(this).find(" > a").on("click",function(e){"lg"!=window.piCurrentBound&&e.preventDefault()})}),$(".pi-mobile-menu-toggler").each(function(){var $el=$(this);if(!$el.get(0).piMenuWasInitialized){$el.get(0).piMenuWasInitialized=1;var mobileMenu={$parentRowWrapper:null,$toggler:$el,$wrapper:null,$menu:null,height:null,top:null,state:0};mobileMenu.$parentRowWrapper=$(mobileMenu.$toggler.parents("."+settings.classParentRowWrapper)),mobileMenu.$wrapper=$(mobileMenu.$toggler.data("target")),mobileMenu.$menu=mobileMenu.$wrapper.find("."+settings.classMenu),mobileMenu.$menuElements=mobileMenu.$menu.find("li"),mobileMenu.height=mobileMenu.$menu.outerHeight(),mobileMenu.$toggler.click(function(){toggleMenu(mobileMenu)}),mobileMenu.$menuElements.each(function(){var $li=$(this);$li.get(0).$link=$li.find(" > a"),$li.get(0).$siblings=$li.siblings(),$li.get(0).$list=$li.find(" > ul"),$li.get(0).$list.length&&$li.get(0).$link.click(function(e){toggleSubmenu(mobileMenu,$li),e.preventDefault()})}),$d.bind("piBoundChanged",function(){mobileMenu.state&&mobileMenu.$toggler.is(":hidden")&&toggleMenu(mobileMenu)}),mobileMenus.push(mobileMenu)}}),$w.resize(function(){clearTimeout(resizeTmt),resizeTmt=setTimeout(function(){checkMobileSubmenuHeight()},100)}),checkMobileSubmenuHeight()}function toggleSubmenu(mobileMenu,$li){$li.get(0).$list.hasClass("pi-active")?(mobileMenu.height=mobileMenu.height-$li.get(0).listHeight,mobileMenu.$wrapper.height(mobileMenu.height),$li.get(0).$list.removeClass("pi-active"),$li.get(0).$list.animate({height:0},500,function(){changeParentsListHeight($li,$li.get(0).listHeight,"take")})):(mobileMenu.height=mobileMenu.height+$li.get(0).listHeight,mobileMenu.$wrapper.height(mobileMenu.height),$li.get(0).$list.addClass("pi-active"),$li.get(0).$list.animate({height:$li.get(0).listHeight},500,function(){changeParentsListHeight($li,$li.get(0).listHeight,"add"),$(this).height("auto")}),$li.get(0).$siblings.each(function(){$(this).find(" > ul.pi-active").length&&toggleSubmenu(mobileMenu,$(this))}))}function changeParentsListHeight($li,h,action){var parentLI=$li.parents("li").length?$li.parents("li").eq(0):null;parentLI&&parentLI.get(0).listHeight&&("add"==action?parentLI.get(0).listHeight+=h:parentLI.get(0).listHeight-=h,changeParentsListHeight(parentLI,h,action))}function checkMobileSubmenuHeight(){for(var i=0;i<mobileMenus.length;i++)mobileMenus[i].$menuElements.each(function(){var $li=$(this);if($li.get(0).$list.length){var initH=getElementHeight($li.get(0).$list);0!=initH?$li.get(0).listHeight=initH:($li.get(0).$list.height("auto"),$li.get(0).listHeight=getElementHeight($li.get(0).$list),$li.get(0).$list.height(initH))}})}function toggleMenu(m){m.$wrapper.toggleClass(settings.classOpen),m.$wrapper.hasClass(settings.classOpen)?(m.$wrapper.height(m.height),m.$wrapper.css({overflow:"auto"}),m.state=1):(m.$wrapper.height(0),m.$wrapper.css({overflow:"none"}),m.state=0)}var mobileMenus=[],settings={classMenuItemHasSubmenu:"pi-has-dropdown",classParentRowWrapper:"pi-header-row-sticky",classOpen:"pi-menu-open",classParentRow:"pi-section-header-w",classMenuWrapper:"pi-section-menu-mobile-w",classMenu:"pi-section-menu-mobile"};return init(),mobileMenus}var resizeTmt,$d=$(document),$w=$(window);new MobileMenus}),jQuery(function($){function detectColumnSizeNumber($el,gridType){for(var classesList=$el.attr("class"),gClasses=classesList.match(/pi-liquid-col-\d?\D\D-\d/g)||classesList.match(/pi-col-\d?\D\D-\d/g),bounds={},i=0;i<gClasses.length;i++){var bound=gClasses[i].match(/pi-liquid-col-(\d?\D\D)-(\d)/i)||gClasses[i].match(/pi-col-(\d?\D\D)-(\d)/i);bound&&(bounds[bound[1]]=bound[2])}"gallery"==gridType?bounds["3xs"]||(bounds["3xs"]=1):bounds["3xs"]||(bounds["3xs"]=12),bounds["2xs"]||(bounds["2xs"]=bounds["3xs"]),bounds.xs||(bounds.xs=bounds["2xs"]),bounds.sm||(bounds.sm=bounds.xs),bounds.md||(bounds.md=bounds.sm),bounds.lg||(bounds.lg=bounds.md);for(var bound in bounds)$el.data("width-"+bound,bounds[bound])}var $w=$(window),$galleries=$(".pi-gallery.pi-column-fix"),$liquidGalleries=$galleries.filter("[class*=pi-liquid-col]");$liquidGalleries.each(function(){var $g=$(this),$gItems=$g.find(".pi-gallery-item"),isStacked=$g.hasClass("pi-stacked"),itemsWidthRejected=0;detectColumnSizeNumber($g,"gallery"),$w.load(function(){var tmt;$w.resize(function(){itemsWidthRejected||(itemsWidthRejected=1,$gItems.each(function(){var $el=$(this);$el.css("width","")}))}),$w.resize(function(){clearTimeout(tmt),tmt=setTimeout(function(){itemsWidthRejected=0,isStacked&&$g.css("cssText","margin-right: 0 !important");var cols=$g.data("width-"+window.piCurrentBound),galleryWidth=$g.width(),galleryItemPadding=parseInt($gItems.eq(0).css("padding-left"),10)+parseInt($gItems.eq(0).css("padding-right"),10),galleryWidthWithoutPadding=galleryWidth-cols*galleryItemPadding,itemWidthExcess=galleryWidthWithoutPadding%cols,galleryItemWidth=(galleryWidthWithoutPadding-itemWidthExcess)/cols;itemWidthExcess&&isStacked?(galleryItemWidth++,$g.css("cssText","margin-right: -"+cols+"px !important")):isStacked&&$g.css("cssText","margin-right: 0 !important"),$gItems.each(function(){var $el=$(this);$el.width(galleryItemWidth)})},100)}),$w.trigger("resize")})});var $colsToFix=$(".pi-column-fix").filter("[class*=pi-col-]");$colsToFix.length&&$w.load(function(){var tmt;$colsToFix.each(function(){detectColumnSizeNumber($(this),"grid")}),$w.resize(function(){clearTimeout(tmt),tmt=setTimeout(function(){$colsToFix.each(function(){var $el=$(this),elPadding=parseInt($el.css("padding-left"),10)+parseInt($el.css("padding-right"),10),newWidth=Math.floor($el.parent().width()/12*$el.data("width-"+window.piCurrentBound))-elPadding;$(this).width(newWidth)})},100)}),$w.trigger("resize")})}),!function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on("click",dismiss,this.close)};Alert.prototype.close=function(e){function removeElement(){$parent.trigger("closed").remove()}var $parent,$this=$(this),selector=$this.attr("data-target");selector||(selector=$this.attr("href"),selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")),$parent=$(selector),e&&e.preventDefault(),$parent.length||($parent=$this.hasClass("pi-alert")?$this:$this.parent()),$parent.trigger(e=$.Event("close")),e.isDefaultPrevented()||($parent.removeClass("in"),$.support.transition&&$parent.hasClass("fade")?($this.on($.support.transition.end,function(e){e.stopPropagation()}),$parent.on($.support.transition.end,removeElement)):removeElement())};var old=$.fn.alert;$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data("alert");data||$this.data("alert",data=new Alert(this)),"string"==typeof option&&data[option].call($this)})},$.fn.alert.Constructor=Alert,$.fn.alert.noConflict=function(){return $.fn.alert=old,this},$(document).on("click.alert.data-api",dismiss,Alert.prototype.close)}(window.jQuery),jQuery(function($){var $b=$("body"),cls={changed:"pi-form-control-changed",focused:"pi-form-control-focused",withIcon:"pi-input-with-icon"};$b.delegate(".form-control","keyup",function(){var $el=$(this),val=$el.val();"placeholder"!==val&&$.trim(val)?($el.addClass(cls.changed),$el.parents("form").addClass(cls.changed)):($el.removeClass(cls.changed),$el.parents("form").removeClass(cls.changed))}).delegate(".form-control","focus",function(){var $el=$(this);$el.parents("form").addClass(cls.focused),$el.parents("."+cls.withIcon).addClass(cls.focused)}).delegate(".form-control","blur",function(){var $el=$(this);$el.parents("form").removeClass(cls.focused),$el.parents("."+cls.withIcon).removeClass(cls.focused)})}),jQuery(function($){$.fn.placeholder&&$("input, textarea").placeholder()}),jQuery(function($){if($.fn.scrollTo){var $w=$(window),defaultOffset=-100,defaultOffsetMin=-20,defaultDuration=750,defaultEasing="easeOutExpo";$("[data-scroll-to]").each(function(){var $el=$(this),target=$el.data("scrollTo"),duration=$el.data("scrollToDuration")||defaultDuration,offset=$el.data("scrollToOffset")||defaultOffset,initialOffset=offset,easing=$el.data("scrollToEasing")||defaultEasing;target=$(target).length?$(target):target,$el.bind("click",function(e){$.scrollTo.window().stop(!0),offset="lg"!=window.piCurrentBound?defaultOffsetMin:initialOffset,$w.scrollTo(target,duration,{offset:offset,easing:easing}),e.preventDefault()})})}}),jQuery(function($){function checkArrow(){var scrollTop=$w.scrollTop(),documentHeight=$d.height(),nearFooter=window.piViewportHeight+scrollTop>=documentHeight-footerHeight;scrollTop>=treshold?$arrow.addClass(classActive):$arrow.removeClass(classActive),nearFooter&&"lg"!=window.piCurrentBound?$arrow.addClass(classBottom):$arrow.removeClass(classBottom)}var scrollCheckTmt,$w=$(window),$d=$(document),$arrow=$(".pi-scroll-top-arrow"),classActive="pi-active",classBottom="pi-scroll-top-arrow-footer",footerHeight=100,treshold=400;$arrow.length&&($w.on("scroll resize",function(){clearTimeout(scrollCheckTmt),scrollCheckTmt=setTimeout(function(){checkArrow()},100)}),$arrow.on("click",function(){$arrow.removeClass(classActive)}))}),jQuery(function($){$(".pi-jump a,.pi-jump-bg a").each(function(){var $el=$(this);$el.append($el.find("i").clone())}),$(".pi-social-icons-big a i").wrap("<span></span>")}),jQuery(function($){$(".pi-overlay-slide:not(.pi-caption-opened)").each(function(){var $caption=$(this),$parent=$caption.parents(".pi-img-w"),height=$caption.outerHeight(!0);$caption.hasClass("pi-show-heading")&&(height-=$caption.find("h2,h3,h4,h5,h6").eq(0).outerHeight(!0)+parseInt($caption.css("padding-top"),10)),$caption.css({bottom:-height,visibility:"visible"}),$parent.hover(function(){$caption.css({bottom:0})},function(){$caption.css({bottom:-height})})})}),jQuery(function($){$(".pi-contact-form").submit(function(){var $form=$(this),$error=$form.find(".pi-error-container"),action=$form.attr("action");return $error.slideUp(750,function(){$error.hide();var $name=$form.find(".form-control-name"),$email=$form.find(".form-control-email"),$companyName=$form.find(".form-control-company-name"),$phone=$form.find(".form-control-phone"),$budjet=$form.find(".form-control-budjet"),$comments=$form.find(".form-control-comments"),captchaEnabled="no"==$form.data("captcha")?0:1,$recaptcha=$form.find("#recaptcha_response_field"),$recaptcha_challenge=$form.find("#recaptcha_challenge_field");$.post(action,{name:$name.val(),email:$email.val(),companyName:$companyName.val(),phone:$phone.val(),budjet:$budjet.val(),comments:$comments.val(),captchaEnabled:captchaEnabled,recaptcha:$recaptcha.val(),recaptcha_challenge:$recaptcha_challenge.val()},function(data){$error.html(data),$error.slideDown("slow"),null!=data.match("success")&&($name.val(""),$email.val(""),$companyName.val(""),$phone.val(""),$budjet.val(""),$comments.val(""))})}),!1})}),jQuery(function($){function piColorboxInit(){colorboxNeeded=0;for(var i in breakpoints)if(breakpoints[i]==window.piCurrentBound){colorboxNeeded=1;break}colorboxNeeded&&!colorboxState?($colorboxLinks.each(function(){var $el=$(this),videoData=$el.data("videoSize"),videoSize=videoData?videoData.split(","):0,groupFromData=$el.data("colorboxGroup"),group=groupFromData?groupFromData:"pi-group";videoSize[0]?(videoSize[0]=parseInt(videoSize[0],10),videoSize[1]=parseInt(videoSize[1],10),"number"==typeof videoSize[0]&&"number"==typeof videoSize[1]&&$el.colorbox({rel:group,iframe:!0,innerWidth:videoSize[0],innerHeight:videoSize[1],maxWidth:"95%",maxHeight:"95%"})):$el.colorbox({rel:group,maxWidth:"95%",maxHeight:"95%"})}),colorboxState=1):!colorboxNeeded&&colorboxState&&($colorboxLinks.colorbox.remove(),colorboxState=0)}if($.fn.colorbox){var $d=$(document),$colorboxLinks=($(window),$(".pi-colorbox")),breakpoints=["sm","md","lg"],colorboxState=0,colorboxNeeded=0;$d.bind("piBoundChanged",piColorboxInit),piColorboxInit()}});
var googleMapStyle_dark = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}],
	googleMapStyle_light = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}],
	googleMapStyle_base = [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}];
var googleMapStyle_dark=[{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]}],googleMapStyle_light=[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:40}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{saturation:-10},{lightness:30}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:10}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:60}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]}],googleMapStyle_base=[{stylers:[{saturation:-100},{gamma:1}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:50},{gamma:0},{hue:"#50a5d1"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#333333"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{weight:.5},{color:"#333333"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{gamma:1},{saturation:50}]}];

//region getViewportSize
function getViewportSize(){
	var e = window, a = 'inner';
	if (!('innerWidth' in window )) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
//endregion

//region old IE rgba backgrounds fix
function fixIE8rgba() {
	var $ = jQuery;

	if(isOldIE() === 8){
		var selectors = [
				'.pi-tooltip'
			],
			$elements = $(selectors.join(','));
		$elements.each(function(){
			var $el = $(this),
				bg = $el.css('background'),
				rgba = bg.match(/rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{1,3})\)/),
				hex = rgba ? rgba2hex(rgba[1],rgba[2],rgba[3],rgba[4]) : '#000000';
			if(rgba && hex){
				$el.css('background', 'filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=' + hex + ', EndColorStr=' + hex + ')')
			}
		});
	}
}
//endregion

//region old IE detection
function isOldIE() {
	var version = navigator.appVersion.match(/MSIE (\d)\.\d*/);
	if(version){
		return version[1];
	}
	return false;
}
//endregion

//region RGB -> HEX
var hexDigits = new Array
("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

function rgb2hex(rgb) {
	if(!rgb) {
		rgb ='rgb(0,0,0)';
	}
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
//endregion

//region RGBA -> HEX
function rgba2hex(r, g, b, a) {
	if (r > 255 || g > 255 || b > 255 || a > 255)
		throw "Invalid color component";
	return (256 + r).toString(16).substr(1) +((1 << 24) + (g << 16) | (b << 8) | a).toString(16).substr(1);
}
//endregion

function getElementHeight($el){
	var $ = jQuery,
		h = 0,
		vis = $el.css('visibility'),
		display = $el.css('display');

	if(display == 'none' || display == 'none !important'){
		$el.css({
			visibility: 'hidden',
			display: 'block'
		});
		h = $el.outerHeight();
		$el.css({
			visibility: vis,
			display: display
		});
	} else {
		h = $el.outerHeight();
	}
	return h;
}
function getViewportSize(){var e=window,a="inner";return"innerWidth"in window||(a="client",e=document.documentElement||document.body),{width:e[a+"Width"],height:e[a+"Height"]}}function fixIE8rgba(){var $=jQuery;if(8===isOldIE()){var selectors=[".pi-tooltip"],$elements=$(selectors.join(","));$elements.each(function(){var $el=$(this),bg=$el.css("background"),rgba=bg.match(/rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{1,3})\)/),hex=rgba?rgba2hex(rgba[1],rgba[2],rgba[3],rgba[4]):"#000000";rgba&&hex&&$el.css("background","filter: progid:DXImageTransform.Microsoft.gradient(startColorStr="+hex+", EndColorStr="+hex+")")})}}function isOldIE(){var version=navigator.appVersion.match(/MSIE (\d)\.\d*/);return version?version[1]:!1}function rgb2hex(rgb){return rgb||(rgb="rgb(0,0,0)"),rgb=rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#"+hex(rgb[1])+hex(rgb[2])+hex(rgb[3])}function hex(x){return isNaN(x)?"00":hexDigits[(x-x%16)/16]+hexDigits[x%16]}function rgba2hex(r,g,b,a){if(r>255||g>255||b>255||a>255)throw"Invalid color component";return(256+r).toString(16).substr(1)+((1<<24)+(g<<16)|b<<8|a).toString(16).substr(1)}function getElementHeight($el){var h=0,vis=$el.css("visibility"),display=$el.css("display");return"none"==display||"none !important"==display?($el.css({visibility:"hidden",display:"block"}),h=$el.outerHeight(),$el.css({visibility:vis,display:display})):h=$el.outerHeight(),h}var hexDigits=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
function PiImagesLoader($el, callback, delay) {

	var o = {},
		$ = jQuery;

	o.$el = $el ? typeof($el) == 'string' ? jQuery($el) : $el : 0;
	o.$imgs = o.$el.find('img');
	o.imgsQ = o.$imgs.length;
	o.imgsQ_loaded = 0;
	o.delay = delay ? delay : 0;
	o.started = 0;
	o.loaderShown = 0;
	o.$loadingAnimation = 0;
	o.$dots = 0;

	o.s = {
		c: {}
	};
	o.s.dotDistance = 14;
	o.s.dotQuantity = 3;
	o.s.dotAnimationSpeed = 100;
	o.s.c.loading = 'pi-loader';
	o.s.c.dot = 'pi-loader-dot';
	o.s.c.dotActive = 'pi-loader-dot-active';
	o.callback = (callback && (typeof(callback) == 'function')) ? callback : function () {
	};

	o.addLoadingAnimation = function () {

			o.loaderShown = true;

			var appendHtml = '<span class="' + o.s.c.loading + '"><span><span>';

			for (var i = 0; i < o.s.dotQuantity; i++) {
				appendHtml += '<span class="' + o.s.c.dot + '"></span>';
			}

			appendHtml += '</span></span></span>';

			$(appendHtml).appendTo(o.$el);

			o.$loadingAnimation = o.$el.find('.' + o.s.c.loading);
			o.$dots = o.$loadingAnimation.find('.' + o.s.c.dot);

			o.activeDotNum = 0;

			requestAnimationFrame(o.loadingDotsAnimate, o.$el);

	}

	o.hideLoadingAnimation = function () {
		o.loaderShown = 0;
		o.$dots.each(function () {
			$(this).removeClass(o.s.c.dotActive);
		});
		o.$loadingAnimation.remove();
	}

	o.loadingDotsAnimate = function (time) {

			if(!o.$loadingAnimation) {
				return;
			}
			if(!o.loadingAnimationStartTime) {
				o.loadingAnimationStartTime = time;
			}

			var needToRedraw = (time - o.loadingAnimationStartTime) >= 200 ? 1 : 0;

			if (needToRedraw) {

				o.loadingAnimationStartTime = time;

				var $currentDot = o.$dots.eq(o.activeDotNum),
					$previousDot = $currentDot.prev();

				if (!$previousDot.get(0)) {
					$previousDot = o.$dots.eq(o.s.dotQuantity - 1);
				}

				$currentDot.addClass(o.s.c.dotActive);
				$previousDot.removeClass(o.s.c.dotActive);

				o.activeDotNum++;

				if (o.activeDotNum >= o.s.dotQuantity + 1) {
					o.activeDotNum = 0;
				}
			}
			requestAnimationFrame(o.loadingDotsAnimate);

	}

	o.check_images_states = function () {

		o.$imgs.each(function(){

			var oldImg = new Image(),
				newImg = new Image(),
				imgSrc = $(this).attr('src');

			oldImg.src = imgSrc;

			if (oldImg.complete) {
				o.image_was_loaded();
			} else {

				jQuery(newImg).load(function () {
					o.image_was_loaded();
				}).error(function () {
						o.image_was_loaded();
					});

				newImg.src = imgSrc;

			}

		});

		o.addLoadingAnimation();

	}

	o.image_was_loaded = function () {
		o.imgsQ_loaded++;
		o.check_ready_state();
	}

	o.check_ready_state = function () {

		if (o.imgsQ == o.imgsQ_loaded && !o.started) {

			o.started = true;

			setTimeout(function () {
				o.callback();
				if (o.loaderShown) {
					o.hideLoadingAnimation();
				}
			}, o.delay);

		}

	}

	o.init = function () {
		if (o.imgsQ > 0) {
			o.check_images_states();
		} else {
			o.callback();
		}
	}

	o.init();
}
function PiImagesLoader($el,callback,delay){var o={},$=jQuery;o.$el=$el?"string"==typeof $el?jQuery($el):$el:0,o.$imgs=o.$el.find("img"),o.imgsQ=o.$imgs.length,o.imgsQ_loaded=0,o.delay=delay?delay:0,o.started=0,o.loaderShown=0,o.$loadingAnimation=0,o.$dots=0,o.s={c:{}},o.s.dotDistance=14,o.s.dotQuantity=3,o.s.dotAnimationSpeed=100,o.s.c.loading="pi-loader",o.s.c.dot="pi-loader-dot",o.s.c.dotActive="pi-loader-dot-active",o.callback=callback&&"function"==typeof callback?callback:function(){},o.addLoadingAnimation=function(){o.loaderShown=!0;for(var appendHtml='<span class="'+o.s.c.loading+'"><span><span>',i=0;i<o.s.dotQuantity;i++)appendHtml+='<span class="'+o.s.c.dot+'"></span>';appendHtml+="</span></span></span>",$(appendHtml).appendTo(o.$el),o.$loadingAnimation=o.$el.find("."+o.s.c.loading),o.$dots=o.$loadingAnimation.find("."+o.s.c.dot),o.activeDotNum=0,requestAnimationFrame(o.loadingDotsAnimate,o.$el)},o.hideLoadingAnimation=function(){o.loaderShown=0,o.$dots.each(function(){$(this).removeClass(o.s.c.dotActive)}),o.$loadingAnimation.remove()},o.loadingDotsAnimate=function(time){if(o.$loadingAnimation){o.loadingAnimationStartTime||(o.loadingAnimationStartTime=time);var needToRedraw=time-o.loadingAnimationStartTime>=200?1:0;if(needToRedraw){o.loadingAnimationStartTime=time;var $currentDot=o.$dots.eq(o.activeDotNum),$previousDot=$currentDot.prev();$previousDot.get(0)||($previousDot=o.$dots.eq(o.s.dotQuantity-1)),$currentDot.addClass(o.s.c.dotActive),$previousDot.removeClass(o.s.c.dotActive),o.activeDotNum++,o.activeDotNum>=o.s.dotQuantity+1&&(o.activeDotNum=0)}requestAnimationFrame(o.loadingDotsAnimate)}},o.check_images_states=function(){o.$imgs.each(function(){var oldImg=new Image,newImg=new Image,imgSrc=$(this).attr("src");oldImg.src=imgSrc,oldImg.complete?o.image_was_loaded():(jQuery(newImg).load(function(){o.image_was_loaded()}).error(function(){o.image_was_loaded()}),newImg.src=imgSrc)}),o.addLoadingAnimation()},o.image_was_loaded=function(){o.imgsQ_loaded++,o.check_ready_state()},o.check_ready_state=function(){o.imgsQ!=o.imgsQ_loaded||o.started||(o.started=!0,setTimeout(function(){o.callback(),o.loaderShown&&o.hideLoadingAnimation()},o.delay))},o.init=function(){o.imgsQ>0?o.check_images_states():o.callback()},o.init()}
jQuery(function ($) {

	//region init animations
	$('[data-animation]').each(function () {

		var $el = $(this),
			animationType = $el.data('animation'),
			animationDelay = $el.data('animationDelay') || 1,
			animationDirection = ~animationType.indexOf('Out') ? 'back' : 'forward';
		
		if(animationDirection == 'forward'){
			$el.one('inview', function () {
				setTimeout(function () {
					$el.addClass(animationType + ' visible');
				}, animationDelay);
			});
		} else {
			$el.addClass('visible');
			$el.one('click', function () {
				setTimeout(function () {
					$el.addClass(animationType);
				}, 0);
			});
		}

	});
	//endregion


});
jQuery(function($){$("[data-animation]").each(function(){var $el=$(this),animationType=$el.data("animation"),animationDelay=$el.data("animationDelay")||1,animationDirection=~animationType.indexOf("Out")?"back":"forward";"forward"==animationDirection?$el.one("inview",function(){setTimeout(function(){$el.addClass(animationType+" visible")},animationDelay)}):($el.addClass("visible"),$el.one("click",function(){setTimeout(function(){$el.addClass(animationType)},0)}))})});
jQuery(function($){

	//region Captions animations
	$('.pi-overlay-slide:not(.pi-caption-opened)').each(function () {
		var $caption = $(this),
			$parent = $caption.parents('.pi-img-w'),
			height = $caption.outerHeight(true);

		if ($caption.hasClass('pi-show-heading')) {
			height -= $caption.find('h2,h3,h4,h5,h6').eq(0).outerHeight(true) + parseInt($caption.css('padding-top'), 10);
		}

		$caption.css({
			bottom: -height,
			visibility: 'visible'
		});

		$parent.hover(function () {
			$caption.css({
				bottom: 0
			})
		}, function () {
			$caption.css({
				bottom: -height
			})
		});

	});
	//endregion

});
jQuery(function($){$(".pi-overlay-slide:not(.pi-caption-opened)").each(function(){var $caption=$(this),$parent=$caption.parents(".pi-img-w"),height=$caption.outerHeight(!0);$caption.hasClass("pi-show-heading")&&(height-=$caption.find("h2,h3,h4,h5,h6").eq(0).outerHeight(!0)+parseInt($caption.css("padding-top"),10)),$caption.css({bottom:-height,visibility:"visible"}),$parent.hover(function(){$caption.css({bottom:0})},function(){$caption.css({bottom:-height})})})});
jQuery(function($){

	//region colorbox
	if($.fn.colorbox){

		var $d = $(document),
			$w = $(window),
			$colorboxLinks = $('.pi-colorbox'),
			//Breakpoints could be 3xs, 2xs, xs, sm, md, lg
			breakpoints = [
				'sm',
				'md',
				'lg'
			],
			colorboxState = 0,
			colorboxNeeded = 0;


		function piColorboxInit(){

			colorboxNeeded = 0;

			for(var i in breakpoints){
				if(breakpoints[i] == window.piCurrentBound){
					colorboxNeeded = 1;
					break;
				}
			}

			if(colorboxNeeded && !colorboxState){
				$colorboxLinks.each(function(){
					var $el = $(this),
						videoData = $el.data('videoSize'),
						videoSize = videoData ? videoData.split(',') : 0,
						groupFromData = $el.data('colorboxGroup'),
						group = groupFromData ? groupFromData : 'pi-group';

					if(videoSize[0]){
						videoSize[0] = parseInt(videoSize[0], 10);
						videoSize[1] = parseInt(videoSize[1], 10);
						if(typeof(videoSize[0]) == 'number' && typeof(videoSize[1]) == 'number'){
							$el.colorbox({
								rel:group,
								iframe:true,
								innerWidth: videoSize[0],
								innerHeight: videoSize[1],
								maxWidth:'95%',
								maxHeight:'95%'
							});
						}
					} else {
						$el.colorbox({
							rel:group,
							maxWidth:'95%',
							maxHeight:'95%'
						});
					}

				});
				colorboxState = 1;
			} else if(!colorboxNeeded && colorboxState) {
				$colorboxLinks.colorbox.remove();
				colorboxState = 0;
			}
		}

		$d.bind('piBoundChanged', piColorboxInit);
		piColorboxInit();

	}
	//endregion

});
jQuery(function($){function piColorboxInit(){colorboxNeeded=0;for(var i in breakpoints)if(breakpoints[i]==window.piCurrentBound){colorboxNeeded=1;break}colorboxNeeded&&!colorboxState?($colorboxLinks.each(function(){var $el=$(this),videoData=$el.data("videoSize"),videoSize=videoData?videoData.split(","):0,groupFromData=$el.data("colorboxGroup"),group=groupFromData?groupFromData:"pi-group";videoSize[0]?(videoSize[0]=parseInt(videoSize[0],10),videoSize[1]=parseInt(videoSize[1],10),"number"==typeof videoSize[0]&&"number"==typeof videoSize[1]&&$el.colorbox({rel:group,iframe:!0,innerWidth:videoSize[0],innerHeight:videoSize[1],maxWidth:"95%",maxHeight:"95%"})):$el.colorbox({rel:group,maxWidth:"95%",maxHeight:"95%"})}),colorboxState=1):!colorboxNeeded&&colorboxState&&($colorboxLinks.colorbox.remove(),colorboxState=0)}if($.fn.colorbox){var $d=$(document),$colorboxLinks=($(window),$(".pi-colorbox")),breakpoints=["sm","md","lg"],colorboxState=0,colorboxNeeded=0;$d.bind("piBoundChanged",piColorboxInit),piColorboxInit()}});
jQuery(function($){

	//region piCounter
	if($.fn.piCounter){
		$('.pi-counter').each(function(){
			$(this).one('inview',function(){
				$(this).piCounter();
			});
		});
	}
	//endregion

});
jQuery(function($){$.fn.piCounter&&$(".pi-counter").each(function(){$(this).one("inview",function(){$(this).piCounter()})})});
jQuery(function($){

	$(".pi-img-w").fitVids();

});
jQuery(function($){$(".pi-img-w").fitVids()});
jQuery(function ($) {

	//region Input blur styles
	var $b = $('body'),
		cls = {
			changed: 'pi-form-control-changed',
			focused: 'pi-form-control-focused',
			withIcon: 'pi-input-with-icon'
		};
	$b.delegate('.form-control', 'keyup',function () {
		var $el = $(this),
			val = $el.val();
		if (val !== 'placeholder' && $.trim(val)) {
			$el.addClass(cls.changed);
			$el.parents('form').addClass(cls.changed);
		} else {
			$el.removeClass(cls.changed);
			$el.parents('form').removeClass(cls.changed);
		}
	}).delegate('.form-control', 'focus',function () {
		var $el = $(this);
		$el.parents('form').addClass(cls.focused);
		$el.parents('.' + cls.withIcon).addClass(cls.focused);
	}).delegate('.form-control', 'blur', function () {
		var $el = $(this);
		$el.parents('form').removeClass(cls.focused);
		$el.parents('.' + cls.withIcon).removeClass(cls.focused);
	});
	//endregion

});
jQuery(function($){var $b=$("body"),cls={changed:"pi-form-control-changed",focused:"pi-form-control-focused",withIcon:"pi-input-with-icon"};$b.delegate(".form-control","keyup",function(){var $el=$(this),val=$el.val();"placeholder"!==val&&$.trim(val)?($el.addClass(cls.changed),$el.parents("form").addClass(cls.changed)):($el.removeClass(cls.changed),$el.parents("form").removeClass(cls.changed))}).delegate(".form-control","focus",function(){var $el=$(this);$el.parents("form").addClass(cls.focused),$el.parents("."+cls.withIcon).addClass(cls.focused)}).delegate(".form-control","blur",function(){var $el=$(this);$el.parents("form").removeClass(cls.focused),$el.parents("."+cls.withIcon).removeClass(cls.focused)})});
jQuery(function($){

	//region iCheck
	if($.fn.iCheck){
		$('input.pi-stylish-checkbox, input.pi-stylish-radio').iCheck({
			checkboxClass: 'icheckbox_square',
			radioClass: 'iradio_square',
			focusClass: 'focus',
			increaseArea: '20%' // optional
		});
	}
	//endregion

});
jQuery(function($){$.fn.iCheck&&$("input.pi-stylish-checkbox, input.pi-stylish-radio").iCheck({checkboxClass:"icheckbox_square",radioClass:"iradio_square",focusClass:"focus",increaseArea:"20%"})});
jQuery(function($){

	//region Isotope
	if($.fn.isotope) {

		var $w = $(window);

		$w.load(function () {
			var $isotops = $('.isotope');

			$isotops.each(function () {
				var $el = $(this),
					id = $el.attr('id'),
					mode = $el.data('isotopeMode') || 'fitRows',
					tmt;


				$el.isotope({
					itemSelector: '.isotope-item',
					layoutMode: mode,
					animationOptions: {
						duration: 400,
						queue: false
					}
				});


				$w.resize(function(){
					clearTimeout(tmt);
					tmt = setTimeout(function(){
						$el.isotope('layout');
					}, 150);
				});

				var $menu = $('[data-isotope-nav="' + id + '"]');

				if ($menu.length) {
					$menu.find('a').click(function (e) {
						var $link = $(this);
						if(!$link.hasClass('pi-active')){
							var selector = $link.attr('data-filter');
							$link.parents('ul').eq(0).find('.pi-active').removeClass('pi-active');
							$link.addClass('pi-active');
							$el.isotope({ filter: selector });
						}
						e.preventDefault();
					});
				}

				$w.resize();

			});

		});

	}
	//endregion

});
jQuery(function($){if($.fn.isotope){var $w=$(window);$w.load(function(){var $isotops=$(".isotope");$isotops.each(function(){var tmt,$el=$(this),id=$el.attr("id"),mode=$el.data("isotopeMode")||"fitRows";$el.isotope({itemSelector:".isotope-item",layoutMode:mode,animationOptions:{duration:400,queue:!1}}),$w.resize(function(){clearTimeout(tmt),tmt=setTimeout(function(){$el.isotope("layout")},150)});var $menu=$('[data-isotope-nav="'+id+'"]');$menu.length&&$menu.find("a").click(function(e){var $link=$(this);if(!$link.hasClass("pi-active")){var selector=$link.attr("data-filter");$link.parents("ul").eq(0).find(".pi-active").removeClass("pi-active"),$link.addClass("pi-active"),$el.isotope({filter:selector})}e.preventDefault()}),$w.resize()})})}});
jQuery(function($){

	//region Scroll To
	if($.fn.scrollTo){

		var $w = $(window),
			defaultOffset = -100,
			defaultOffsetMin = -20,
			defaultDuration = 750,
			defaultEasing = 'easeOutExpo';

		$('[data-scroll-to]').each(function(){

			var $el = $(this),
				target = $el.data('scrollTo'),
				duration = $el.data('scrollToDuration') || defaultDuration,
				offset = $el.data('scrollToOffset') || defaultOffset,
				initialOffset = offset,
				easing = $el.data('scrollToEasing') || defaultEasing;

			target = $(target).length ? $(target) : target;

			$el.bind('click', function(e){

				$.scrollTo.window().stop(true);

				if(window.piCurrentBound != 'lg'){
					offset = defaultOffsetMin;
				} else {
					offset = initialOffset;
				}

				$w.scrollTo(target, duration, {
					offset: offset,
					easing: easing
				});

				e.preventDefault();

			});

		});
	}
	//endregion

});
jQuery(function($){if($.fn.scrollTo){var $w=$(window),defaultOffset=-100,defaultOffsetMin=-20,defaultDuration=750,defaultEasing="easeOutExpo";$("[data-scroll-to]").each(function(){var $el=$(this),target=$el.data("scrollTo"),duration=$el.data("scrollToDuration")||defaultDuration,offset=$el.data("scrollToOffset")||defaultOffset,initialOffset=offset,easing=$el.data("scrollToEasing")||defaultEasing;target=$(target).length?$(target):target,$el.bind("click",function(e){$.scrollTo.window().stop(!0),offset="lg"!=window.piCurrentBound?defaultOffsetMin:initialOffset,$w.scrollTo(target,duration,{offset:offset,easing:easing}),e.preventDefault()})})}});
jQuery(function($){

	//region Google Map
	if($.fn.gMap){
		$('.pi-google-map').each(function (i) {
			var $map = $(this),
				markers = [],
				type = $map.data('mapType') || 'roadmap',
				zoom = $map.data('mapZoom') || 14,
				style = $map.data('mapStyle') || [],
				scrollwheel = $map.data('mapScrollWheel') || 0,
				markerImg = $map.data('mapMarker') || '',
				markerImgSize = $map.data('mapMarkerSize') || [],
				markerAnchor = $map.data('mapMarkerAnchor') || [];

			if(markerImg) {

				if(markerImgSize.length > 1){
					markerImgSize = markerImgSize.split(',');
					markerImgSize[0] = parseInt(markerImgSize[0], 10);
					markerImgSize[1] = parseInt(markerImgSize[1], 10);
				}

				if(markerAnchor.length > 1){
					markerAnchor = markerAnchor.split(',');
					markerAnchor[0] = parseInt(markerAnchor[0], 10);
					markerAnchor[1] = parseInt(markerAnchor[1], 10);
				}

			}

			buildMarkers();

			function buildMarkers(){

				var data = $map.data(),
					dataArray = [],
					addresses = [],
					titles = [],
					coords = [];

				for(var prop in data){
					if (data.hasOwnProperty(prop)) {
						dataArray[prop] = data[prop];
					}
				}

				for(var prop2 in dataArray){
					if (dataArray.hasOwnProperty(prop2)) {
						if(~prop2.indexOf('mapAddress')){
							addresses.push(dataArray[prop2]);
						} else if(~prop2.indexOf('mapCoords')){
							var c = dataArray[prop2].split(';');
							if(c.length > 1){
								coords.push({
									latitude: c[0],
									longitude: c[1]
								});
							}
						} else if(~prop2.indexOf('mapTitle')){
							titles.push(dataArray[prop2]);
						}
					}
				}

				for(var i = addresses.length - 1; i >= 0; i--){
					var marker = {
						address: addresses[i] ? addresses[i] : '',
						title: titles[i] ? titles[i] : ''
					};

					if(markerImg){
						marker.icon = {
							image: markerImg,
							iconsize: markerImgSize,
							iconanchor: markerAnchor
						}
					}

					markers.push(marker);
				}

				for(var j = coords.length - 1; j >= 0; j--){
					var marker2 = {
						latitude: coords[j] ? coords[j].latitude : '',
						longitude: coords[j] ? coords[j].longitude : '',
						title: titles[j] ? titles[j] : ''
					};

					if(markerImg){
						marker2.icon = {
							image: markerImg,
							iconsize: markerImgSize,
							iconanchor: markerAnchor
						}
					}

					markers.push(marker2);
				}

			}

			if(style && window['googleMapStyle_' + style] && window['googleMapStyle_' + style].length){
				style = window['googleMapStyle_' + style];
			}


			if(markers[0].address){
				$map.gMap({
					maptype: type,
					address: markers[0].address,
					zoom: zoom,
					styles: style,
					scrollwheel: scrollwheel,
					markers: markers
				});
			} else if(markers[0].latitude) {
				$map.gMap({
					maptype: type,
					latitude: markers[0].latitude,
					longitude: markers[0].longitude,
					zoom: zoom,
					styles: style,
					scrollwheel: scrollwheel,
					markers: markers
				});
			}

		});
	}
	//endregion

});
jQuery(function($){$.fn.gMap&&$(".pi-google-map").each(function(){function buildMarkers(){var data=$map.data(),dataArray=[],addresses=[],titles=[],coords=[];for(var prop in data)data.hasOwnProperty(prop)&&(dataArray[prop]=data[prop]);for(var prop2 in dataArray)if(dataArray.hasOwnProperty(prop2))if(~prop2.indexOf("mapAddress"))addresses.push(dataArray[prop2]);else if(~prop2.indexOf("mapCoords")){var c=dataArray[prop2].split(";");c.length>1&&coords.push({latitude:c[0],longitude:c[1]})}else~prop2.indexOf("mapTitle")&&titles.push(dataArray[prop2]);for(var i=addresses.length-1;i>=0;i--){var marker={address:addresses[i]?addresses[i]:"",title:titles[i]?titles[i]:""};markerImg&&(marker.icon={image:markerImg,iconsize:markerImgSize,iconanchor:markerAnchor}),markers.push(marker)}for(var j=coords.length-1;j>=0;j--){var marker2={latitude:coords[j]?coords[j].latitude:"",longitude:coords[j]?coords[j].longitude:"",title:titles[j]?titles[j]:""};markerImg&&(marker2.icon={image:markerImg,iconsize:markerImgSize,iconanchor:markerAnchor}),markers.push(marker2)}}var $map=$(this),markers=[],type=$map.data("mapType")||"roadmap",zoom=$map.data("mapZoom")||14,style=$map.data("mapStyle")||[],scrollwheel=$map.data("mapScrollWheel")||0,markerImg=$map.data("mapMarker")||"",markerImgSize=$map.data("mapMarkerSize")||[],markerAnchor=$map.data("mapMarkerAnchor")||[];markerImg&&(markerImgSize.length>1&&(markerImgSize=markerImgSize.split(","),markerImgSize[0]=parseInt(markerImgSize[0],10),markerImgSize[1]=parseInt(markerImgSize[1],10)),markerAnchor.length>1&&(markerAnchor=markerAnchor.split(","),markerAnchor[0]=parseInt(markerAnchor[0],10),markerAnchor[1]=parseInt(markerAnchor[1],10))),buildMarkers(),style&&window["googleMapStyle_"+style]&&window["googleMapStyle_"+style].length&&(style=window["googleMapStyle_"+style]),markers[0].address?$map.gMap({maptype:type,address:markers[0].address,zoom:zoom,styles:style,scrollwheel:scrollwheel,markers:markers}):markers[0].latitude&&$map.gMap({maptype:type,latitude:markers[0].latitude,longitude:markers[0].longitude,zoom:zoom,styles:style,scrollwheel:scrollwheel,markers:markers})})});
jQuery(function($){

	//region Parallax
	if($.fn.parallax){
		$('.pi-section-parallax').parallax("50%", 0.5);
	}
	//endregion

});
jQuery(function($){$.fn.parallax&&$(".pi-section-parallax").parallax("50%",.5)});
jQuery(function($){

	//region form placeholder
	if($.fn.placeholder){
		$('input, textarea').placeholder();
	}
	//endregion

});
jQuery(function($){$.fn.placeholder&&$("input, textarea").placeholder()});
jQuery(function($){

	//region Google Prettify
	if(typeof(prettyPrint) === 'function'){
		prettyPrint();
	}
	//endregion

});
jQuery(function(){"function"==typeof prettyPrint&&prettyPrint()});
jQuery(function($){

	//region Remove Last Header Element Margin
	var $w = $(window),
		$hrs = $('.pi-section-header'),
		clsFloatRight = 'pi-pull-right',
		clsHeaderBlock = 'pi-row-block',
		tmt,
		hrObjects = [];

	$hrs.each(function(){
		var $curHr = $(this),
			$blocks = $curHr.find('.' + clsHeaderBlock).filter('.' + clsFloatRight);
		hrObjects.push({
			$hr: $curHr,
			$blocks: $blocks,
			currentBlock: false
		});
	});

	function checkHeaderBlocks(){
		for (var i = 0; i < hrObjects.length; i++) {

			var $curHr = hrObjects[i],
				$firstVisibleBlock = $curHr.$blocks.not(':hidden').first();

			if($firstVisibleBlock.length <1) {
				continue;
			}

			if(!$curHr.currentBlock || ($curHr.currentBlock.get(0) != $firstVisibleBlock.get(0) ) ){

				if($curHr.currentBlock) {
					$curHr.currentBlock.css({
						marginRight: $curHr.currentBlock.get(0).initialMarginRight + 'px'
					});
				}

				$curHr.currentBlock = $firstVisibleBlock;
				if(!$curHr.currentBlock.get(0).initialMarginRight){
					$curHr.currentBlock.get(0).initialMarginRight = parseInt($firstVisibleBlock.css('margin-right'), 10);
				}

				$firstVisibleBlock.css({
					marginRight: 0
				});

			}

		}
	}

	$w.resize(function(){

		clearTimeout(tmt);

		tmt = setTimeout(function(){

			checkHeaderBlocks();

		}, 300);

	});

	checkHeaderBlocks();

	//endregion

});


jQuery(function($){function checkHeaderBlocks(){for(var i=0;i<hrObjects.length;i++){var $curHr=hrObjects[i],$firstVisibleBlock=$curHr.$blocks.not(":hidden").first();$firstVisibleBlock.length<1||$curHr.currentBlock&&$curHr.currentBlock.get(0)==$firstVisibleBlock.get(0)||($curHr.currentBlock&&$curHr.currentBlock.css({marginRight:$curHr.currentBlock.get(0).initialMarginRight+"px"}),$curHr.currentBlock=$firstVisibleBlock,$curHr.currentBlock.get(0).initialMarginRight||($curHr.currentBlock.get(0).initialMarginRight=parseInt($firstVisibleBlock.css("margin-right"),10)),$firstVisibleBlock.css({marginRight:0}))}}var tmt,$w=$(window),$hrs=$(".pi-section-header"),clsFloatRight="pi-pull-right",clsHeaderBlock="pi-row-block",hrObjects=[];$hrs.each(function(){var $curHr=$(this),$blocks=$curHr.find("."+clsHeaderBlock).filter("."+clsFloatRight);hrObjects.push({$hr:$curHr,$blocks:$blocks,currentBlock:!1})}),$w.resize(function(){clearTimeout(tmt),tmt=setTimeout(function(){checkHeaderBlocks()},300)}),checkHeaderBlocks()});
jQuery(function($){

	//region Revolution Slider
	if($.fn.revolution){
		$('.pi-revolution-slider').revolution({
			delay:9000,
			startwidth:1130,
			startheight:400,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"off",
			hideTimerBar:"on"
		});
	}
	//endregion

});


jQuery(function($){$.fn.revolution&&$(".pi-revolution-slider").revolution({delay:9e3,startwidth:1130,startheight:500,hideThumbs:10,fullWidth:"on",forceFullWidth:"off",hideTimerBar:"on"})});
jQuery(function($){



});
jQuery(function(){});
jQuery(function($){

	//region Section Full Height
	var $w = $(window),
		$sections = $('.pi-section-high, .pi-block-high'),
		resizeTMT;

	$w.resize(function(){
		clearTimeout(resizeTMT);
		resizeTMT = setTimeout(function(){
			setSectionHeight();
		}, 100);
	});

	setSectionHeight();

	function setSectionHeight(){
		$sections.each(function(){
			var $el = $(this);
			$el.height(window.piViewportHeight);
		});
	}

	//endregion

});
jQuery(function($){function setSectionHeight(){$sections.each(function(){var $el=$(this);$el.height(window.piViewportHeight)})}var resizeTMT,$w=$(window),$sections=$(".pi-section-high, .pi-block-high");$w.resize(function(){clearTimeout(resizeTMT),resizeTMT=setTimeout(function(){setSectionHeight()},100)}),setSectionHeight()});
jQuery(function($){

	//region Sliders
	if(typeof(PiSlider) === 'function'){
		$('.pi-slider').each(function(){
			var slider = new PiSlider($(this), {
				debug: 0,
				preload: $(this).data('sliderPreloader') !== undefined ? $(this).data('sliderPreloader') : 1,
				preloadDelay: $(this).data('sliderPreloaderDelay') !== undefined ? $(this).data('sliderPreloaderDelay') : 1000,
				circular: $(this).data('sliderCircular') !== undefined ? $(this).data('sliderCircular') : 1,
				enableSwipes: $(this).data('sliderSwipes') !== undefined ? $(this).data('sliderSwipes') : 1,
				enablePagination: $(this).data('sliderPagination') !== undefined ? $(this).data('sliderPagination') : 1,
				enableArrows: $(this).data('sliderArrows') !== undefined ? $(this).data('sliderArrows') : 1,
				enableKeys: $(this).data('sliderKeys') !== undefined ? $(this).data('sliderKeys') : 1,
				autoplayDelay: $(this).data('sliderAutoplayDelay') !== undefined ? $(this).data('sliderAutoplayDelay') : 0,
				action: $(this).data('sliderAction')
			});
		});
	}
	//endregion

});
jQuery(function($){"function"==typeof PiSlider&&$(".pi-slider").each(function(){new PiSlider($(this),{debug:0,preload:void 0!==$(this).data("sliderPreloader")?$(this).data("sliderPreloader"):1,preloadDelay:void 0!==$(this).data("sliderPreloaderDelay")?$(this).data("sliderPreloaderDelay"):1e3,circular:void 0!==$(this).data("sliderCircular")?$(this).data("sliderCircular"):1,enableSwipes:void 0!==$(this).data("sliderSwipes")?$(this).data("sliderSwipes"):1,enablePagination:void 0!==$(this).data("sliderPagination")?$(this).data("sliderPagination"):1,enableArrows:void 0!==$(this).data("sliderArrows")?$(this).data("sliderArrows"):1,enableKeys:void 0!==$(this).data("sliderKeys")?$(this).data("sliderKeys"):1,autoplayDelay:void 0!==$(this).data("sliderAutoplayDelay")?$(this).data("sliderAutoplayDelay"):0,action:$(this).data("sliderAction")})})});
jQuery(function($){

	//region Socials jumps
	$('.pi-jump a,' +
		'.pi-jump-bg a').each(function () {
			var $el = $(this);
			$el.append($el.find('i').clone());
		});

	$('.pi-social-icons-big a i').wrap('<span></span>');
	//endregion

});
jQuery(function($){$(".pi-jump a,.pi-jump-bg a").each(function(){var $el=$(this);$el.append($el.find("i").clone())}),$(".pi-social-icons-big a i").wrap("<span></span>")});
jQuery(function($){

	//region Stylish Select
	if($.fn.sSelect){
		$('.pi-stylish-select').sSelect({
			ddMaxHeight: '200px'
		});
		$('.newListSelected').append('<span class="pi-select-icon"></span>')
	}
	//endregion

});
jQuery(function($){$.fn.sSelect&&($(".pi-stylish-select").sSelect({ddMaxHeight:"200px"}),$(".newListSelected").append('<span class="pi-select-icon"></span>'))});
jQuery(function($){

	//region Init Footer Form submit
	$('.pi-contact-form').submit(function(){

		var $form = $(this),
			$error = $form.find('.pi-error-container'),
			action  = $form.attr('action');

		$error.slideUp(750, function() {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$companyName = $form.find('.form-control-company-name'),
				$phone = $form.find('.form-control-phone'),
				$budjet = $form.find('.form-control-budjet'),
				$comments = $form.find('.form-control-comments'),
				captchaEnabled = $form.data('captcha') == 'no' ? 0 : 1,
				$recaptcha = $form.find('#recaptcha_response_field'),
				$recaptcha_challenge = $form.find('#recaptcha_challenge_field');

			$.post(action, {
					name: $name.val(),
					email: $email.val(),
					companyName: $companyName.val(),
					phone: $phone.val(),
					budjet: $budjet.val(),
					comments: $comments.val(),
					captchaEnabled: captchaEnabled,
					recaptcha: $recaptcha.val(),
					recaptcha_challenge: $recaptcha_challenge.val()
				},
				function(data){
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$name.val('');
						$email.val('');
						$companyName.val('');
						$phone.val('');
						$budjet.val('');
						$comments.val('');
					}
				}
			);

		});

		return false;

	});
	//endregion

});
jQuery(function($){$(".pi-contact-form").submit(function(){var $form=$(this),$error=$form.find(".pi-error-container"),action=$form.attr("action");return $error.slideUp(750,function(){$error.hide();var $name=$form.find(".form-control-name"),$email=$form.find(".form-control-email"),$companyName=$form.find(".form-control-company-name"),$phone=$form.find(".form-control-phone"),$budjet=$form.find(".form-control-budjet"),$comments=$form.find(".form-control-comments"),captchaEnabled="no"==$form.data("captcha")?0:1,$recaptcha=$form.find("#recaptcha_response_field"),$recaptcha_challenge=$form.find("#recaptcha_challenge_field");$.post(action,{name:$name.val(),email:$email.val(),companyName:$companyName.val(),phone:$phone.val(),budjet:$budjet.val(),comments:$comments.val(),captchaEnabled:captchaEnabled,recaptcha:$recaptcha.val(),recaptcha_challenge:$recaptcha_challenge.val()},function(data){$error.html(data),$error.slideDown("slow"),null!=data.match("success")&&($name.val(""),$email.val(""),$companyName.val(""),$phone.val(""),$budjet.val(""),$comments.val(""))})}),!1})});
jQuery(function($){

	//region Init Subscribe Form submit
	$('.pi-subscribe-form').submit(function(){

		var $form = $(this),
			$error = $form.find('.pi-error-container'),
			action  = $form.attr('action');

		$error.slideUp(750, function() {
			$error.hide();

			var $email = $form.find('.form-control-email'),
				$fname = $form.find('.form-control-fname'),
				$lname = $form.find('.form-control-lname');

			$.post(action, {
					fname: $fname.val(),
					lname: $lname.val(),
					email: $email.val()
				},
				function(data){
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$fname.val('');
						$lname.val('');
						$email.val('');
					}
				}
			);

		});

		return false;

	});
	//endregion

});
jQuery(function($){$(".pi-subscribe-form").submit(function(){var $form=$(this),$error=$form.find(".pi-error-container"),action=$form.attr("action");return $error.slideUp(750,function(){$error.hide();var $email=$form.find(".form-control-email"),$fname=$form.find(".form-control-fname"),$lname=$form.find(".form-control-lname");$.post(action,{fname:$fname.val(),lname:$lname.val(),email:$email.val()},function(data){$error.html(data),$error.slideDown("slow"),null!=data.match("success")&&($fname.val(""),$lname.val(""),$email.val(""))})}),!1})});
jQuery(function($){

	//region Tabs
	if($.fn.tab){
		$('.pi-tabs-navigation a').click(function (e) {
			$(this).tab('show');
			e.preventDefault();
		});

		$('.pi-tabs-vertical').each(function(){
			var $parent = $(this),
				$nav = $parent.find('.pi-tabs-navigation'),
				$content = $parent.find('.pi-tabs-content'),
				navHeight = $nav.height();
			$content.css({
				minHeight: Math.abs(navHeight) + 1
			});
		});
	}
	//endregion

});
jQuery(function($){$.fn.tab&&($(".pi-tabs-navigation a").click(function(e){$(this).tab("show"),e.preventDefault()}),$(".pi-tabs-vertical").each(function(){var $parent=$(this),$nav=$parent.find(".pi-tabs-navigation"),$content=$parent.find(".pi-tabs-content"),navHeight=$nav.height();$content.css({minHeight:Math.abs(navHeight)+1})}))});
jQuery(function($){

	//region Tooltip
	if($.fn.tooltip){
		$('.pi-tooltip').each(function(){
			var $el = $(this),
				size = $el.data('tooltipSize');
			if($el.hasClass('pi-tooltip-base')){
				$el.tooltip({
					template: '<div class="tooltip pi-base"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
					trigger: 'hover',
					size: size
				});
			} else {
				$el.tooltip({
					template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
					trigger: 'hover',
					size: size
				});
			}
		});
	}
	//endregion

});
jQuery(function($){$.fn.tooltip&&$(".pi-tooltip").each(function(){var $el=$(this),size=$el.data("tooltipSize");$el.tooltip($el.hasClass("pi-tooltip-base")?{template:'<div class="tooltip pi-base"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",size:size}:{template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",size:size})})});
jQuery(function($){

	var tweetsBock = $('.pi-footer-tweets'),
	twitterAcc = twitterAccount || '@PIthemess';

	tweetsBock.twittie({
		apiPath : '/3dParty/tweetie/api/tweet.php',
		username: twitterAcc,
		dateFormat: '%b. %d, %Y',
		template: '<span class="pi-bullet-icon"><i class="icon-twitter"></i></span>{{screen_name}} {{tweet}} <br /><span class="pi-smaller-text pi-italic pi-text-opacity-50">{{date}}</span>',
		count: 2
	}, function(){
		tweetsBock.find('ul').addClass('pi-bullets-circle pi-bullets-base pi-bullets pi-list-big-margins');
	});

});
jQuery(function($){var tweetsBock=$(".pi-footer-tweets"),twitterAcc=twitterAccount||"@PIthemess";tweetsBock.twittie({apiPath:"/3dParty/tweetie/api/tweet.php",username:twitterAcc,dateFormat:"%b. %d, %Y",template:'<span class="pi-bullet-icon"><i class="icon-twitter"></i></span>{{screen_name}} {{tweet}} <br /><span class="pi-smaller-text pi-italic pi-text-opacity-50">{{date}}</span>',count:2},function(){tweetsBock.find("ul").addClass("pi-bullets-circle pi-bullets-base pi-bullets pi-list-big-margins")})});
jQuery(function ($) {

	//region Video Full Height
	var $w = $(window),
		$sections = $('.pi-section-video'),
		resizeTMT;

	function adjust($el) {

		var parent = $el.get(0).parent,
			parentW = parent.width(),
			parentH = parent.height(),
			parentAspectRatio = $el.get(0).parentAspectRatio = parentW / parentH,
			videoAspectRatio = $el.get(0).videoAspectRatio,
			videoInitialW = $el.get(0).videoInitialW,
			videoInitialH = $el.get(0).videoInitialH;

		if (parentAspectRatio > videoAspectRatio) {
			$el.css({
				width: parentW + 'px',
				height: 'auto',
				top: (parentH - parentW / videoAspectRatio) / 2 + 'px',
				left: 0
			});
		} else {
			$el.css({
				width: 'auto',
				height: parentH + 'px',
				top: 0,
				left: (parentW - parentH * videoAspectRatio) / 2 + 'px'
			});
		}

	}

	$sections.each(function () {
		var $el = $(this);
		$el.get(0).parent = $el.parent();
		$el.get(0).parentAspectRatio = $el.get(0).parent.width() / $el.get(0).parent.height();
		$el.get(0).videoAspectRatio = $el.width() / $el.height();
		$el.get(0).videoInitialW = $el.width();
		$el.get(0).videoInitialH = $el.height();
		adjust($el);
	});

	$w.resize(function () {
		clearTimeout(resizeTMT);
		resizeTMT = setTimeout(function () {

			$sections.each(function () {
				var $el = $(this);
				adjust($el);
			});

		}, 100);
	});

	//endregion

});
jQuery(function($){function adjust($el){{var parent=$el.get(0).parent,parentW=parent.width(),parentH=parent.height(),parentAspectRatio=$el.get(0).parentAspectRatio=parentW/parentH,videoAspectRatio=$el.get(0).videoAspectRatio;$el.get(0).videoInitialW,$el.get(0).videoInitialH}$el.css(parentAspectRatio>videoAspectRatio?{width:parentW+"px",height:"auto",top:(parentH-parentW/videoAspectRatio)/2+"px",left:0}:{width:"auto",height:parentH+"px",top:0,left:(parentW-parentH*videoAspectRatio)/2+"px"})}var resizeTMT,$w=$(window),$sections=$(".pi-section-video");$sections.each(function(){var $el=$(this);$el.get(0).parent=$el.parent(),$el.get(0).parentAspectRatio=$el.get(0).parent.width()/$el.get(0).parent.height(),$el.get(0).videoAspectRatio=$el.width()/$el.height(),$el.get(0).videoInitialW=$el.width(),$el.get(0).videoInitialH=$el.height(),adjust($el)}),$w.resize(function(){clearTimeout(resizeTMT),resizeTMT=setTimeout(function(){$sections.each(function(){var $el=$(this);adjust($el)})},100)})});
jQuery(function ($) {

	//region Mobile menus
	var $d = $(document),
		$w = $(window),
		resizeTmt;

	new MobileMenus();

	function MobileMenus() {

		var mobileMenus = [],
			settings = {
				classMenuItemHasSubmenu: 'pi-has-dropdown',
				classParentRowWrapper: 'pi-header-row-sticky',
				classOpen: 'pi-menu-open',
				classParentRow: 'pi-section-header-w',
				classMenuWrapper: 'pi-section-menu-mobile-w',
				classMenu: 'pi-section-menu-mobile'
			};

		function init() {

			//remove targetting from regular menu in tablet wide mode.
			$('.' + settings.classMenuItemHasSubmenu).each(function(){
				$(this).find(' > a').on('click', function(e){
					if(window.piCurrentBound != 'lg'){
						e.preventDefault();
					}
				});
			});

			$('.pi-mobile-menu-toggler').each(function () {
				var $el = $(this);

				if ($el.get(0).piMenuWasInitialized) {
					return;
				}

				$el.get(0).piMenuWasInitialized = 1;

				var mobileMenu = {
					$parentRowWrapper: null,
					$toggler: $el,
					$wrapper: null,
					$menu: null,
					height: null,
					top: null,
					state: 0
				};

				mobileMenu.$parentRowWrapper = $(mobileMenu.$toggler.parents('.' + settings.classParentRowWrapper));
				mobileMenu.$wrapper = $(mobileMenu.$toggler.data('target'));
				mobileMenu.$menu = mobileMenu.$wrapper.find('.' + settings.classMenu);
				mobileMenu.$menuElements = mobileMenu.$menu.find('li');

				mobileMenu.height = mobileMenu.$menu.outerHeight();

				mobileMenu.$toggler.click(function () {
					toggleMenu(mobileMenu);
				});

				mobileMenu.$menuElements.each(function () {
					var $li = $(this);

					$li.get(0).$link = $li.find(' > a');
					$li.get(0).$siblings = $li.siblings();
					$li.get(0).$list = $li.find(' > ul');

					if ($li.get(0).$list.length) {
						$li.get(0).$link.click(function (e) {
							toggleSubmenu(mobileMenu, $li);
							e.preventDefault();
						});
					}
				});

				$d.bind('piBoundChanged', function () {
					if (mobileMenu.state && mobileMenu.$toggler.is(':hidden')) {
						toggleMenu(mobileMenu);
					}
				});

				mobileMenus.push(mobileMenu);

			});

			$w.resize(function () {
				clearTimeout(resizeTmt);
				resizeTmt = setTimeout(function () {
					checkMobileSubmenuHeight();
				}, 100);
			});

			checkMobileSubmenuHeight();

		};

		function toggleSubmenu(mobileMenu, $li) {
			if ($li.get(0).$list.hasClass('pi-active')) {
				mobileMenu.height = mobileMenu.height - $li.get(0).listHeight;
				mobileMenu.$wrapper.height(mobileMenu.height);
				$li.get(0).$list.removeClass('pi-active');
				$li.get(0).$list.animate({
					height: 0
				}, 500, function () {
					changeParentsListHeight($li, $li.get(0).listHeight, 'take');
				});
			} else {
				mobileMenu.height = mobileMenu.height + $li.get(0).listHeight;
				mobileMenu.$wrapper.height(mobileMenu.height);
				$li.get(0).$list.addClass('pi-active');
				$li.get(0).$list.animate({
					height: $li.get(0).listHeight
				}, 500, function () {
					changeParentsListHeight($li, $li.get(0).listHeight, 'add');
					$(this).height('auto');
				});
				$li.get(0).$siblings.each(function () {
					if ($(this).find(' > ul.pi-active').length) {
						toggleSubmenu(mobileMenu, $(this));
					}
				});
			}
		}

		function changeParentsListHeight($li, h, action) {
			var parentLI = $li.parents('li').length ? $li.parents('li').eq(0) : null;
			if (parentLI && parentLI.get(0).listHeight) {
				if (action == 'add') {
					parentLI.get(0).listHeight += h;
				} else {
					parentLI.get(0).listHeight -= h;
				}
				changeParentsListHeight(parentLI, h, action);
			}
		}

		function checkMobileSubmenuHeight() {
			for (var i = 0; i < mobileMenus.length; i++) {
				mobileMenus[i].$menuElements.each(function () {
					var $li = $(this);
					if ($li.get(0).$list.length) {
						var initH = getElementHeight($li.get(0).$list);
						if (initH != 0) {
							$li.get(0).listHeight = initH;
						} else {
							$li.get(0).$list.height('auto');
							$li.get(0).listHeight = getElementHeight($li.get(0).$list);
							$li.get(0).$list.height(initH);
						}
					}
				});
			}
		}

		function toggleMenu(m) {
			m.$wrapper.toggleClass(settings.classOpen);
			if (!m.$wrapper.hasClass(settings.classOpen)) {
				m.$wrapper.height(0);
				m.$wrapper.css({
					overflow: 'none'
				});
				m.state = 0;
			} else {
				m.$wrapper.height(m.height);
				m.$wrapper.css({
					overflow: 'auto'
				});
				m.state = 1;
			}
		}

		init();

		return mobileMenus;
	}

	//endregion

});
jQuery(function($){function MobileMenus(){function init(){$("."+settings.classMenuItemHasSubmenu).each(function(){$(this).find(" > a").on("click",function(e){"lg"!=window.piCurrentBound&&e.preventDefault()})}),$(".pi-mobile-menu-toggler").each(function(){var $el=$(this);if(!$el.get(0).piMenuWasInitialized){$el.get(0).piMenuWasInitialized=1;var mobileMenu={$parentRowWrapper:null,$toggler:$el,$wrapper:null,$menu:null,height:null,top:null,state:0};mobileMenu.$parentRowWrapper=$(mobileMenu.$toggler.parents("."+settings.classParentRowWrapper)),mobileMenu.$wrapper=$(mobileMenu.$toggler.data("target")),mobileMenu.$menu=mobileMenu.$wrapper.find("."+settings.classMenu),mobileMenu.$menuElements=mobileMenu.$menu.find("li"),mobileMenu.height=mobileMenu.$menu.outerHeight(),mobileMenu.$toggler.click(function(){toggleMenu(mobileMenu)}),mobileMenu.$menuElements.each(function(){var $li=$(this);$li.get(0).$link=$li.find(" > a"),$li.get(0).$siblings=$li.siblings(),$li.get(0).$list=$li.find(" > ul"),$li.get(0).$list.length&&$li.get(0).$link.click(function(e){toggleSubmenu(mobileMenu,$li),e.preventDefault()})}),$d.bind("piBoundChanged",function(){mobileMenu.state&&mobileMenu.$toggler.is(":hidden")&&toggleMenu(mobileMenu)}),mobileMenus.push(mobileMenu)}}),$w.resize(function(){clearTimeout(resizeTmt),resizeTmt=setTimeout(function(){checkMobileSubmenuHeight()},100)}),checkMobileSubmenuHeight()}function toggleSubmenu(mobileMenu,$li){$li.get(0).$list.hasClass("pi-active")?(mobileMenu.height=mobileMenu.height-$li.get(0).listHeight,mobileMenu.$wrapper.height(mobileMenu.height),$li.get(0).$list.removeClass("pi-active"),$li.get(0).$list.animate({height:0},500,function(){changeParentsListHeight($li,$li.get(0).listHeight,"take")})):(mobileMenu.height=mobileMenu.height+$li.get(0).listHeight,mobileMenu.$wrapper.height(mobileMenu.height),$li.get(0).$list.addClass("pi-active"),$li.get(0).$list.animate({height:$li.get(0).listHeight},500,function(){changeParentsListHeight($li,$li.get(0).listHeight,"add"),$(this).height("auto")}),$li.get(0).$siblings.each(function(){$(this).find(" > ul.pi-active").length&&toggleSubmenu(mobileMenu,$(this))}))}function changeParentsListHeight($li,h,action){var parentLI=$li.parents("li").length?$li.parents("li").eq(0):null;parentLI&&parentLI.get(0).listHeight&&("add"==action?parentLI.get(0).listHeight+=h:parentLI.get(0).listHeight-=h,changeParentsListHeight(parentLI,h,action))}function checkMobileSubmenuHeight(){for(var i=0;i<mobileMenus.length;i++)mobileMenus[i].$menuElements.each(function(){var $li=$(this);if($li.get(0).$list.length){var initH=getElementHeight($li.get(0).$list);0!=initH?$li.get(0).listHeight=initH:($li.get(0).$list.height("auto"),$li.get(0).listHeight=getElementHeight($li.get(0).$list),$li.get(0).$list.height(initH))}})}function toggleMenu(m){m.$wrapper.toggleClass(settings.classOpen),m.$wrapper.hasClass(settings.classOpen)?(m.$wrapper.height(m.height),m.$wrapper.css({overflow:"auto"}),m.state=1):(m.$wrapper.height(0),m.$wrapper.css({overflow:"none"}),m.state=0)}var mobileMenus=[],settings={classMenuItemHasSubmenu:"pi-has-dropdown",classParentRowWrapper:"pi-header-row-sticky",classOpen:"pi-menu-open",classParentRow:"pi-section-header-w",classMenuWrapper:"pi-section-menu-mobile-w",classMenu:"pi-section-menu-mobile"};return init(),mobileMenus}var resizeTmt,$d=$(document),$w=$(window);new MobileMenus});
/*
 Plugin: PI Parallax
 Version 1.0.0
 Author: Pavel Shlykov

 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 */

jQuery(function($) {
	var $w = $(window),
		$d = $(document),
		windowHeight = $w.height(),
		elements = [];

	$w.resize(function () {
		windowHeight = $w.height();
	});

	$.fn.parallax = function () {

		$(this).each(function () {

			var $el = $(this),
				el = {
					$el: $el,
					t: $el.offset().top,
					x: $el.data('parallaxX') || '50%',
					y: $el.data('parallaxY') || 0,
					s: $el.data('parallaxSpeed') || 0.5,
					h: getHeight($el, ($el.data('parallaxOuterHeight') || 1))
				};

			elements.push(el);

		});

	};

	$d.on('piBoundChanged', function(){
		checkParallaxState();
	});
	checkParallaxState();

	function checkParallaxState(){
		if(window.piCurrentBound == 'lg'){
			enableParallax();
		} else {
			disableParallax();
		}
	}

	function update() {
		var scrollTop = $w.scrollTop();

		for (var i = 0; i < elements.length; i++) {
			var o = elements[i];
				o.t = o.$el.offset().top;
				o.h = getHeight(o.$el, 1);

			if (o.t + o.h > scrollTop && o.t < scrollTop + windowHeight) {
				o.$el.css('backgroundPosition', o.x + " " + Math.round((o.t - scrollTop + o.y) * o.s) + "px");
			}
		}
	}

	function getHeight($el, outerHeight) {
		if (outerHeight) {
			return $el.outerHeight(true);
		} else {
			return $el.height();
		}
	}

	function enableParallax(){
		$w.on('scroll.piParallax resize.piParallax', update);
		update();
	}

	function disableParallax(){
		$w.off('scroll.piParallax resize.piParallax');
		for (var i = 0; i < elements.length; i++) {
			var o = elements[i];
			o.$el.css('backgroundPosition', '');
		}
	}


});
jQuery(function($){function checkParallaxState(){"lg"==window.piCurrentBound?enableParallax():disableParallax()}function update(){for(var scrollTop=$w.scrollTop(),i=0;i<elements.length;i++){var o=elements[i];o.t=o.$el.offset().top,o.h=getHeight(o.$el,1),o.t+o.h>scrollTop&&o.t<scrollTop+windowHeight&&o.$el.css("backgroundPosition",o.x+" "+Math.round((o.t-scrollTop+o.y)*o.s)+"px")}}function getHeight($el,outerHeight){return outerHeight?$el.outerHeight(!0):$el.height()}function enableParallax(){$w.on("scroll.piParallax resize.piParallax",update),update()}function disableParallax(){$w.off("scroll.piParallax resize.piParallax");for(var i=0;i<elements.length;i++){var o=elements[i];o.$el.css("backgroundPosition","")}}var $w=$(window),$d=$(document),windowHeight=$w.height(),elements=[];$w.resize(function(){windowHeight=$w.height()}),$.fn.parallax=function(){$(this).each(function(){var $el=$(this),el={$el:$el,t:$el.offset().top,x:$el.data("parallaxX")||"50%",y:$el.data("parallaxY")||0,s:$el.data("parallaxSpeed")||.5,h:getHeight($el,$el.data("parallaxOuterHeight")||1)};elements.push(el)})},$d.on("piBoundChanged",function(){checkParallaxState()}),checkParallaxState()});
jQuery(function($){

	//region Scroll Top Arrow logic

	var $w = $(window),
		$d = $(document),
		$arrow = $('.pi-scroll-top-arrow'),
		classActive = 'pi-active',
		classBottom = 'pi-scroll-top-arrow-footer',
		footerHeight = 100,
		treshold = 400,
		scrollCheckTmt;

	if($arrow.length) {
		$w.on('scroll resize', function(){
			clearTimeout(scrollCheckTmt);
			scrollCheckTmt = setTimeout(function(){
				checkArrow();
			}, 100);
		});

		$arrow.on('click', function(){
			$arrow.removeClass(classActive);
		});
	}

	function checkArrow(){
		var scrollTop = $w.scrollTop(),
			documentHeight = $d.height(),
			nearFooter = (window.piViewportHeight + scrollTop) >= documentHeight - footerHeight;

		if(scrollTop >= treshold){
			$arrow.addClass(classActive);
		} else {
			$arrow.removeClass(classActive);
		}

		if(nearFooter && window.piCurrentBound != 'lg'){
			$arrow.addClass(classBottom);
		} else {
			$arrow.removeClass(classBottom);
		}

	}

	//endregion

});
jQuery(function($){function checkArrow(){var scrollTop=$w.scrollTop(),documentHeight=$d.height(),nearFooter=window.piViewportHeight+scrollTop>=documentHeight-footerHeight;scrollTop>=treshold?$arrow.addClass(classActive):$arrow.removeClass(classActive),nearFooter&&"lg"!=window.piCurrentBound?$arrow.addClass(classBottom):$arrow.removeClass(classBottom)}var scrollCheckTmt,$w=$(window),$d=$(document),$arrow=$(".pi-scroll-top-arrow"),classActive="pi-active",classBottom="pi-scroll-top-arrow-footer",footerHeight=100,treshold=400;$arrow.length&&($w.on("scroll resize",function(){clearTimeout(scrollCheckTmt),scrollCheckTmt=setTimeout(function(){checkArrow()},100)}),$arrow.on("click",function(){$arrow.removeClass(classActive)}))});

function PiSlider(el, options) {

	var o = {},
		$ = jQuery;

	o.$el = el;

	o.s = {
		speed: 2000,
		slideDelay: 35,
		autoplayDelay: 0,
		preload: 0,
		preloadDelay: 1000,
		action: 'fade',
		circular: 0,
		enableArrows: 0,
		enablePagination: 0,
		enableSwipes: 0,
		enableKeys: 0,
		c: {
			pane: 'pi-slider',
			paneWrapper: 'pi-slider-wrapper',
			paneFast: 'pi-slider-fast',
			slide: 'pi-slide',
			slideTransparent: 'pi-slide-transparent',
			pagination: 'pi-slider-pagination',
			page: 'pi-slider-page',
			arrow: 'pi-slider-arrow',
			arrowLeft: 'pi-slider-arrow-left',
			arrowRight: 'pi-slider-arrow-right',
			slideActive: 'pi-slide-active',
			pageActive: 'pi-slider-page-active',
			arrowActive: 'pi-slider-arrow-active',
			arrowDisabled: 'pi-slider-arrow-disabled'
		},
		debug: 0
	};

	if (options) {
		$.extend(o.s, options);
	}

	o.init = function () {
		o.$doc = $(document);
		o.cssTransisions = 1;
		o.$paneWrapper = o.$el.parents('.' + o.s.c.paneWrapper).eq(0);
		o.$pane = o.$el.hasClass(o.s.c.pane) ? o.$el : o.$el.find('.' + o.s.c.pane);
		o.$slides = o.$el.find('.' + o.s.c.slide);
		o.autoPlayInterval = 0;
		o.slidesQ = o.$slides.length;

		if (o.slidesQ <= 0) {
			return;
		}

		o.slideWidth = o.$slides.eq(0).width();
		o.slideOuterWidth = o.$slides.eq(0).outerWidth();
		o.slideMargin = (o.slideOuterWidth - o.slideWidth) / 2;
		o.slidesWidth = o.slideOuterWidth * o.slidesQ;
		o.sceneWidth = o.$paneWrapper.width();
		o.margin = (o.sceneWidth - o.slideWidth) / 2;
		o.way = o.slideWidth - o.margin;

		o.slidesTransparent = [];

		o.current = -1;

		if (o.s.debug) {
			console.log('SCENE' + o.sceneWidth);
			console.log('MARGIN' + o.margin);
			console.log('WAY' + o.way);
		}

		o.beforeStart();
		o.addSwipeActions();
	}

	o.beforeStart = function () {
		if (o.s.preload) {
			var preloader = new PiImagesLoader(o.$paneWrapper, o.start, o.s.preloadDelay);
		} else {
			o.start();
		}
	}

	o.start = function () {

		if (o.s.enablePagination && o.slidesQ > 1) {

			o.$paneWrapper.append('<div class="' + o.s.c.pagination + '"></div>');
			o.$pagination = o.$paneWrapper.find('.' + o.s.c.pagination);

			var n = 0;
			o.$slides.each(function () {

				if (n == 0) {
					active = o.s.c.pageActive;
				} else {
					active = '';
				}

				o.$pagination.append('<span class="' + o.s.c.page + ' ' + active + '"><span></span></span>');
				n++;
			});

			o.$pages = o.$pagination.find('.' + o.s.c.page);

			o.$pages.click(function () {
				var n = $(this).index();

				if (o.current != n) {
					o.applyAnimation(n);
				}

			});
			if(o.s.action == 'slide'){
				o.prepareSlides();
			}

		}

		if (o.s.enableArrows && o.slidesQ > 1) {

			o.$paneWrapper.append('<div class="' + o.s.c.arrow + ' ' + o.s.c.arrowLeft +' "><span></span></div>');
			o.$paneWrapper.append('<div class="' + o.s.c.arrow + ' ' + o.s.c.arrowRight +' "><span></span></div>');
			o.$leftArrow = o.$paneWrapper.find('.' + o.s.c.arrowLeft);
			o.$rightArrow = o.$paneWrapper.find('.' + o.s.c.arrowRight);

			if(!o.s.circular) {
				o.$leftArrow.addClass(o.s.c.arrowDisabled);
			}

			o.$leftArrow.click(function () {
				o.toPrev();
			});
			o.$rightArrow.click(function () {
				o.toNext();
			});
		}

		if (o.s.enableKeys && o.slidesQ > 1) {

			o.$doc.keydown(function (e) {
				if ((e.keyCode || e.which) == '37') {
					o.toPrev();
				} else if ((e.keyCode || e.which) == '39') {
					o.toNext();
				}
			});

		}

		o.applyAnimation(0);
		if(o.s.autoplayDelay){
			o.startAutoplay();
		}

		o.resizeGallery();

	}

	o.applyAnimation = function (n, f) {

		if (!f) {
			f = 0;
		}

		if (o.s.action == 'slide') {
			o.moveSlide(n, f);
		} else if (o.s.action == 'fade') {
			o.fadeSlide(n);
		}

		o.current = n;
		o.checkArrowsState(n);
		o.checkPagesState(n);

	}

	o.checkPagesState = function (n) {
		if (o.s.enablePagination && o.slidesQ > 1) {
			o.$pages.removeClass(o.s.c.pageActive);
			o.$pages.eq(n).addClass(o.s.c.pageActive);
		}
	}

	o.checkArrowsState = function (n) {
		if (o.s.enableArrows && o.slidesQ > 1 && !o.s.circular) {
			if (n == 0) {
				o.$leftArrow.addClass(o.s.c.arrowDisabled);
			} else {
				o.$leftArrow.removeClass(o.s.c.arrowDisabled);
			}
			if (n == o.slidesQ - 1) {
				o.$rightArrow.addClass(o.s.c.arrowDisabled);
			} else {
				o.$rightArrow.removeClass(o.s.c.arrowDisabled);
			}
		}
	}

	o.moveSlide = function(n, f) {

		var fast = f || 0,
			speed = fast ? 0 : o.s.speed,
			$prev = o.$slides.eq(o.current),
			$next = o.$slides.eq(n);

		$prev.removeClass(o.s.c.slideActive);

		if(!o.cssTransisions){
			$prev.stop().animate({
				left: -o.slideOuterWidth,
				opacity: 0
			}, speed, 'easeInOutExpo',function(){
				$(this).css({
					left: o.slideOuterWidth
				});
			});
			$next.stop().animate({
				left: 0,
				opacity: 1
			}, speed, 'easeInOutExpo');
			$next.addClass(o.s.c.slideActive);

		} else {
			$prev.css({
				'-webkit-transform': 'translateX(' + -o.slideOuterWidth + 'px)',
				'-moz-transform': 'translateX(' + -o.slideOuterWidth + 'px)',
				'-o-transform': 'translateX(' + -o.slideOuterWidth + 'px)',
				'transform': 'translateX(' + -o.slideOuterWidth + 'px)'
			});
			$next.addClass('pi-no-transitions').css({
				'-webkit-transform': 'translateX(' + o.slideOuterWidth + 'px)',
				'-moz-transform': 'translateX(' + o.slideOuterWidth + 'px)',
				'-o-transform': 'translateX(' + o.slideOuterWidth + 'px)',
				'transform': 'translateX(' + o.slideOuterWidth + 'px)'
			});
			//debugger;
			setTimeout(function(){
				$next.removeClass('pi-no-transitions').addClass(o.s.c.slideActive).css({
					'-webkit-transform': 'translateX(' + 0 + 'px)',
					'-moz-transform': 'translateX(' + 0 + 'px)',
					'-o-transform': 'translateX(' + 0 + 'px)',
					'transform': 'translateX(' + 0 + 'px)'
				});
			},10);
		}

	}


	o.fadeSlide = function (n) {

		var $prev = o.$slides.eq(o.current),
			$next = o.$slides.eq(n);

		$prev.removeClass(o.s.c.slideActive);
		$next.addClass(o.s.c.slideActive);

		if(!o.cssTransisions){
			$next.stop().animate({
				opacity: 1
			}, o.s.speed, 'easeOutQuad', function () {
				$prev.fadeTo(0, 0);
			});
		}

	}

	o.prepareSlides = function () {

		o.$slides.each(function(i){
			if(i != 0) {
				if (o.cssTransisions) {
					$(this).css({
						'-webkit-transform': 'translateX(' + o.slideOuterWidth + 'px)',
						'-moz-transform': 'translateX(' + o.slideOuterWidth + 'px)',
						'-o-transform': 'translateX(' + o.slideOuterWidth + 'px)',
						'transform': 'translateX(' + o.slideOuterWidth + 'px)'
					});
				} else {
					$(this).css({
						'left': o.slideOuterWidth + 'px'
					});
				}
			}
		});

	}

	o.toNext = function () {
		if (o.current < o.slidesQ - 1) {
			o.applyAnimation(o.current + 1);
		} else if(o.s.circular){
			o.applyAnimation(0);
		}
	}

	o.toPrev = function () {
		if (o.current > 0) {
			o.applyAnimation(o.current - 1);
		} else if(o.s.circular){
			o.applyAnimation(o.slidesQ - 1);
		}
	}

	o.startAutoplay = function(){
		o.autoPlayInterval = setInterval(function(){
			o.toNext();
		}, o.s.autoplayDelay);
	}

	o.stopAutoplay = function(){
		clearInterval(o.autoPlayInterval);
	}

	o.resizeGallery = function () {
		/*o.slideOuterWidth = o.$slides.eq(0).outerWidth();
		o.sceneWidth = o.$paneWrapper.width();
		o.margin = (o.sceneWidth - o.slideOuterWidth) / 2;

		if (o.s.action == 'fade') {
			o.$pane.css('left', o.margin);
		}*/
	}

	o.addSwipeActions = function() {
		if(o.s.enableSwipes && $.fn.swipe && typeof($.fn.swipe) === 'function') {
			o.$pane.swipe({
				swipeStatus:function(event, phase, direction, distance, duration, fingers){
					if (phase == 'end'){
						if(direction == 'left'){
							o.toNext();
						} else if(direction == 'right'){
							o.toPrev();
						}
					}
				},
				allowPageScroll:"vertical",
				excludedElements:''
			});
		}
	}

	o.init();

	return o;

}

function PiSlider(el,options){var o={},$=jQuery;return o.$el=el,o.s={speed:2e3,slideDelay:35,autoplayDelay:0,preload:0,preloadDelay:1e3,action:"fade",circular:0,enableArrows:0,enablePagination:0,enableSwipes:0,enableKeys:0,c:{pane:"pi-slider",paneWrapper:"pi-slider-wrapper",paneFast:"pi-slider-fast",slide:"pi-slide",slideTransparent:"pi-slide-transparent",pagination:"pi-slider-pagination",page:"pi-slider-page",arrow:"pi-slider-arrow",arrowLeft:"pi-slider-arrow-left",arrowRight:"pi-slider-arrow-right",slideActive:"pi-slide-active",pageActive:"pi-slider-page-active",arrowActive:"pi-slider-arrow-active",arrowDisabled:"pi-slider-arrow-disabled"},debug:0},options&&$.extend(o.s,options),o.init=function(){o.$doc=$(document),o.cssTransisions=1,o.$paneWrapper=o.$el.parents("."+o.s.c.paneWrapper).eq(0),o.$pane=o.$el.hasClass(o.s.c.pane)?o.$el:o.$el.find("."+o.s.c.pane),o.$slides=o.$el.find("."+o.s.c.slide),o.autoPlayInterval=0,o.slidesQ=o.$slides.length,o.slidesQ<=0||(o.slideWidth=o.$slides.eq(0).width(),o.slideOuterWidth=o.$slides.eq(0).outerWidth(),o.slideMargin=(o.slideOuterWidth-o.slideWidth)/2,o.slidesWidth=o.slideOuterWidth*o.slidesQ,o.sceneWidth=o.$paneWrapper.width(),o.margin=(o.sceneWidth-o.slideWidth)/2,o.way=o.slideWidth-o.margin,o.slidesTransparent=[],o.current=-1,o.s.debug&&(console.log("SCENE"+o.sceneWidth),console.log("MARGIN"+o.margin),console.log("WAY"+o.way)),o.beforeStart(),o.addSwipeActions())},o.beforeStart=function(){if(o.s.preload){new PiImagesLoader(o.$paneWrapper,o.start,o.s.preloadDelay)}else o.start()},o.start=function(){if(o.s.enablePagination&&o.slidesQ>1){o.$paneWrapper.append('<div class="'+o.s.c.pagination+'"></div>'),o.$pagination=o.$paneWrapper.find("."+o.s.c.pagination);var n=0;o.$slides.each(function(){active=0==n?o.s.c.pageActive:"",o.$pagination.append('<span class="'+o.s.c.page+" "+active+'"><span></span></span>'),n++}),o.$pages=o.$pagination.find("."+o.s.c.page),o.$pages.click(function(){var n=$(this).index();o.current!=n&&o.applyAnimation(n)}),"slide"==o.s.action&&o.prepareSlides()}o.s.enableArrows&&o.slidesQ>1&&(o.$paneWrapper.append('<div class="'+o.s.c.arrow+" "+o.s.c.arrowLeft+' "><span></span></div>'),o.$paneWrapper.append('<div class="'+o.s.c.arrow+" "+o.s.c.arrowRight+' "><span></span></div>'),o.$leftArrow=o.$paneWrapper.find("."+o.s.c.arrowLeft),o.$rightArrow=o.$paneWrapper.find("."+o.s.c.arrowRight),o.s.circular||o.$leftArrow.addClass(o.s.c.arrowDisabled),o.$leftArrow.click(function(){o.toPrev()}),o.$rightArrow.click(function(){o.toNext()})),o.s.enableKeys&&o.slidesQ>1&&o.$doc.keydown(function(e){"37"==(e.keyCode||e.which)?o.toPrev():"39"==(e.keyCode||e.which)&&o.toNext()}),o.applyAnimation(0),o.s.autoplayDelay&&o.startAutoplay(),o.resizeGallery()},o.applyAnimation=function(n,f){f||(f=0),"slide"==o.s.action?o.moveSlide(n,f):"fade"==o.s.action&&o.fadeSlide(n),o.current=n,o.checkArrowsState(n),o.checkPagesState(n)},o.checkPagesState=function(n){o.s.enablePagination&&o.slidesQ>1&&(o.$pages.removeClass(o.s.c.pageActive),o.$pages.eq(n).addClass(o.s.c.pageActive))},o.checkArrowsState=function(n){o.s.enableArrows&&o.slidesQ>1&&!o.s.circular&&(0==n?o.$leftArrow.addClass(o.s.c.arrowDisabled):o.$leftArrow.removeClass(o.s.c.arrowDisabled),n==o.slidesQ-1?o.$rightArrow.addClass(o.s.c.arrowDisabled):o.$rightArrow.removeClass(o.s.c.arrowDisabled))},o.moveSlide=function(n,f){var fast=f||0,speed=fast?0:o.s.speed,$prev=o.$slides.eq(o.current),$next=o.$slides.eq(n);$prev.removeClass(o.s.c.slideActive),o.cssTransisions?($prev.css({"-webkit-transform":"translateX("+-o.slideOuterWidth+"px)","-moz-transform":"translateX("+-o.slideOuterWidth+"px)","-o-transform":"translateX("+-o.slideOuterWidth+"px)",transform:"translateX("+-o.slideOuterWidth+"px)"}),$next.addClass("pi-no-transitions").css({"-webkit-transform":"translateX("+o.slideOuterWidth+"px)","-moz-transform":"translateX("+o.slideOuterWidth+"px)","-o-transform":"translateX("+o.slideOuterWidth+"px)",transform:"translateX("+o.slideOuterWidth+"px)"}),setTimeout(function(){$next.removeClass("pi-no-transitions").addClass(o.s.c.slideActive).css({"-webkit-transform":"translateX(0px)","-moz-transform":"translateX(0px)","-o-transform":"translateX(0px)",transform:"translateX(0px)"})},10)):($prev.stop().animate({left:-o.slideOuterWidth,opacity:0},speed,"easeInOutExpo",function(){$(this).css({left:o.slideOuterWidth})}),$next.stop().animate({left:0,opacity:1},speed,"easeInOutExpo"),$next.addClass(o.s.c.slideActive))},o.fadeSlide=function(n){var $prev=o.$slides.eq(o.current),$next=o.$slides.eq(n);$prev.removeClass(o.s.c.slideActive),$next.addClass(o.s.c.slideActive),o.cssTransisions||$next.stop().animate({opacity:1},o.s.speed,"easeOutQuad",function(){$prev.fadeTo(0,0)})},o.prepareSlides=function(){o.$slides.each(function(i){0!=i&&$(this).css(o.cssTransisions?{"-webkit-transform":"translateX("+o.slideOuterWidth+"px)","-moz-transform":"translateX("+o.slideOuterWidth+"px)","-o-transform":"translateX("+o.slideOuterWidth+"px)",transform:"translateX("+o.slideOuterWidth+"px)"}:{left:o.slideOuterWidth+"px"})})},o.toNext=function(){o.current<o.slidesQ-1?o.applyAnimation(o.current+1):o.s.circular&&o.applyAnimation(0)},o.toPrev=function(){o.current>0?o.applyAnimation(o.current-1):o.s.circular&&o.applyAnimation(o.slidesQ-1)},o.startAutoplay=function(){o.autoPlayInterval=setInterval(function(){o.toNext()},o.s.autoplayDelay)},o.stopAutoplay=function(){clearInterval(o.autoPlayInterval)},o.resizeGallery=function(){},o.addSwipeActions=function(){o.s.enableSwipes&&$.fn.swipe&&"function"==typeof $.fn.swipe&&o.$pane.swipe({swipeStatus:function(event,phase,direction){"end"==phase&&("left"==direction?o.toNext():"right"==direction&&o.toPrev())},allowPageScroll:"vertical",excludedElements:""})},o.init(),o}
/* ========================================================================
 * PI: pi.tabs.js v1.0.0
 * base on bootstrap 3.0.0. tabs
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */



(function ($) {
	"use strict";

	// TAB CLASS DEFINITION
	// ====================

	var activeClass = "pi-active";

	var Tab = function (element) {
		this.element = $(element)
	}

	Tab.prototype.show = function () {
		var $this = this.element
		var $ul = $this.closest('ul:not(.dropdown-menu)')
		var selector = $this.attr('data-target')

		if (!selector) {
			selector = $this.attr('href')
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
		}

		if ($this.parent('li').hasClass(activeClass)) return

		var previous = $ul.find('.' + activeClass + ':last a')[0]
		var e = $.Event('show.bs.tab', {
			relatedTarget: previous
		})

		$this.trigger(e)

		if (e.isDefaultPrevented()) return

		var $target = $(selector)

		this.activate($this.parent('li'), $ul)
		this.activate($target, $target.parent(), function () {
			$this.trigger({
				type: 'shown.bs.tab', relatedTarget: previous
			})
		})
	}

	Tab.prototype.activate = function (element, container, callback) {
		var $active = container.find('> .' + activeClass)
		var transition = callback
			&& $.support.transition
			&& $active.hasClass('fade')

		function next() {
			$active
				.removeClass(activeClass)
				.find('> .dropdown-menu > .' + activeClass)
				.removeClass(activeClass)

			element.addClass(activeClass)

			if (transition) {
				element[0].offsetWidth // reflow for transition
				element.addClass('in')
			} else {
				element.removeClass('fade')
			}

			if (element.parent('.dropdown-menu')) {
				element.closest('li.dropdown').addClass(activeClass)
			}

			callback && callback()
		}

		transition ?
			$active
				.one($.support.transition.end, next)
				.emulateTransitionEnd(150) :
			next()

		$active.removeClass('in')
	}


	// TAB PLUGIN DEFINITION
	// =====================

	var old = $.fn.tab

	$.fn.tab = function (option) {
		return this.each(function () {
			var $this = $(this)
			var data = $this.data('bs.tab')

			if (!data) $this.data('bs.tab', (data = new Tab(this)))
			if (typeof option == 'string') data[option]()
		})
	}

	$.fn.tab.Constructor = Tab


	// TAB NO CONFLICT
	// ===============

	$.fn.tab.noConflict = function () {
		$.fn.tab = old
		return this
	}


	// TAB DATA-API
	// ============

	$(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

})(window.jQuery);

!function($){"use strict";var activeClass="pi-active",Tab=function(element){this.element=$(element)};Tab.prototype.show=function(){var $this=this.element,$ul=$this.closest("ul:not(.dropdown-menu)"),selector=$this.attr("data-target");if(selector||(selector=$this.attr("href"),selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")),!$this.parent("li").hasClass(activeClass)){var previous=$ul.find("."+activeClass+":last a")[0],e=$.Event("show.bs.tab",{relatedTarget:previous});if($this.trigger(e),!e.isDefaultPrevented()){var $target=$(selector);this.activate($this.parent("li"),$ul),this.activate($target,$target.parent(),function(){$this.trigger({type:"shown.bs.tab",relatedTarget:previous})})}}},Tab.prototype.activate=function(element,container,callback){function next(){$active.removeClass(activeClass).find("> .dropdown-menu > ."+activeClass).removeClass(activeClass),element.addClass(activeClass),transition?(element[0].offsetWidth,element.addClass("in")):element.removeClass("fade"),element.parent(".dropdown-menu")&&element.closest("li.dropdown").addClass(activeClass),callback&&callback()}var $active=container.find("> ."+activeClass),transition=callback&&$.support.transition&&$active.hasClass("fade");transition?$active.one($.support.transition.end,next).emulateTransitionEnd(150):next(),$active.removeClass("in")};var old=$.fn.tab;$.fn.tab=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.tab");data||$this.data("bs.tab",data=new Tab(this)),"string"==typeof option&&data[option]()})},$.fn.tab.Constructor=Tab,$.fn.tab.noConflict=function(){return $.fn.tab=old,this},$(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),$(this).tab("show")})}(window.jQuery);
/* ========================================================================
 * PI: pi.tooltip.js v1.0.0
 * based on: bootstrap v3.0.0 toltip
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


(function ($) { "use strict";

	// TOOLTIP PUBLIC CLASS DEFINITION
	// ===============================

	var Tooltip = function (element, options) {
		this.type       =
			this.options    =
				this.enabled    =
					this.timeout    =
						this.hoverState =
							this.$element   = null

		this.init('tooltip', element, options)
	}

	Tooltip.DEFAULTS = {
		animation: true
		, placement: 'top'
		, selector: false
		, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
		, trigger: 'hover focus'
		, title: ''
		, delay: 0
		, html: false
		, container: false
		, size: 'default'
	}

	Tooltip.prototype.init = function (type, element, options) {
		this.enabled  = true
		this.type     = type
		this.$element = $(element)
		this.options  = this.getOptions(options)

		var triggers = this.options.trigger.split(' ')

		for (var i = triggers.length; i--;) {
			var trigger = triggers[i]

			if (trigger == 'click') {
				this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
			} else if (trigger != 'manual') {
				var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
				var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

				this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
				this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
			}
		}

		this.options.selector ?
			(this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
			this.fixTitle()
	}

	Tooltip.prototype.getDefaults = function () {
		return Tooltip.DEFAULTS
	}

	Tooltip.prototype.getOptions = function (options) {
		options = $.extend({}, this.getDefaults(), this.$element.data(), options)

		if (options.delay && typeof options.delay == 'number') {
			options.delay = {
				show: options.delay
				, hide: options.delay
			}
		}

		return options
	}

	Tooltip.prototype.getDelegateOptions = function () {
		var options  = {}
		var defaults = this.getDefaults()

		this._options && $.each(this._options, function (key, value) {
			if (defaults[key] != value) options[key] = value
		})

		return options
	}

	Tooltip.prototype.enter = function (obj) {
		var self = obj instanceof this.constructor ?
			obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

		clearTimeout(self.timeout)

		self.hoverState = 'in'

		if (!self.options.delay || !self.options.delay.show) return self.show()

		self.timeout = setTimeout(function () {
			if (self.hoverState == 'in') self.show()
		}, self.options.delay.show)
	}

	Tooltip.prototype.leave = function (obj) {
		var self = obj instanceof this.constructor ?
			obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

		clearTimeout(self.timeout)

		self.hoverState = 'out'

		if (!self.options.delay || !self.options.delay.hide) return self.hide()

		self.timeout = setTimeout(function () {
			if (self.hoverState == 'out') self.hide()
		}, self.options.delay.hide)
	}

	Tooltip.prototype.show = function () {
		var e = $.Event('show.bs.'+ this.type)

		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e)

			if (e.isDefaultPrevented()) return

			var $tip = this.tip()

			this.setContent()
			this.setSize()

			if (this.options.animation) $tip.addClass('fade')

			var placement = typeof this.options.placement == 'function' ?
				this.options.placement.call(this, $tip[0], this.$element[0]) :
				this.options.placement

			var autoToken = /\s?auto?\s?/i
			var autoPlace = autoToken.test(placement)
			if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

			$tip
				.detach()
				.css({ top: 0, left: 0, display: 'block' })
				.addClass(placement)

			this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

			var pos          = this.getPosition()
			var actualWidth  = $tip[0].offsetWidth
			var actualHeight = $tip[0].offsetHeight

			if (autoPlace) {
				var $parent = this.$element.parent()

				var orgPlacement = placement
				var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
				var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
				var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
				var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

				placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
					placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
						placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
							placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
								placement

				$tip
					.removeClass(orgPlacement)
					.addClass(placement)
			}

			var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

			this.applyPlacement(calculatedOffset, placement)
			this.$element.trigger('shown.bs.' + this.type)
		}
	}

	Tooltip.prototype.applyPlacement = function(offset, placement) {
		var replace
		var $tip   = this.tip()
		var width  = $tip[0].offsetWidth
		var height = $tip[0].offsetHeight

		// manually read margins because getBoundingClientRect includes difference
		var marginTop = parseInt($tip.css('margin-top'), 10)
		var marginLeft = parseInt($tip.css('margin-left'), 10)

		// we must check for NaN for ie 8/9
		if (isNaN(marginTop))  marginTop  = 0
		if (isNaN(marginLeft)) marginLeft = 0

		offset.top  = offset.top  + marginTop
		offset.left = offset.left + marginLeft

		$tip
			.offset(offset)
			.addClass('in')

		// check to see if placing tip in new offset caused the tip to resize itself
		var actualWidth  = $tip[0].offsetWidth
		var actualHeight = $tip[0].offsetHeight

		if (placement == 'top' && actualHeight != height) {
			replace = true
			offset.top = offset.top + height - actualHeight
		}

		if (/bottom|top/.test(placement)) {
			var delta = 0

			if (offset.left < 0) {
				delta       = offset.left * -2
				offset.left = 0

				$tip.offset(offset)

				actualWidth  = $tip[0].offsetWidth
				actualHeight = $tip[0].offsetHeight
			}

			this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
		} else {
			this.replaceArrow(actualHeight - height, actualHeight, 'top')
		}

		if (replace) $tip.offset(offset)
	}

	Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
		this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
	}

	Tooltip.prototype.setContent = function () {
		var $tip  = this.tip()
		var title = this.getTitle()

		$tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
		$tip.removeClass('fade in top bottom left right')
	}

	Tooltip.prototype.setSize = function () {
		if(this.options.size != 'default'){
			this.tip().addClass('tooltip-' + this.options.size);
		}
	}

	Tooltip.prototype.hide = function () {
		var that = this
		var $tip = this.tip()
		var e    = $.Event('hide.bs.' + this.type)

		function complete() {
			if (that.hoverState != 'in') $tip.detach()
		}

		this.$element.trigger(e)

		if (e.isDefaultPrevented()) return

		$tip.removeClass('in')

		$.support.transition && this.$tip.hasClass('fade') ?
			$tip
				.one($.support.transition.end, complete)
				.emulateTransitionEnd(150) :
			complete()

		this.$element.trigger('hidden.bs.' + this.type)

		return this
	}

	Tooltip.prototype.fixTitle = function () {
		var $e = this.$element
		if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
			$e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
		}
	}

	Tooltip.prototype.hasContent = function () {
		return this.getTitle()
	}

	Tooltip.prototype.getPosition = function () {
		var el = this.$element[0]
		return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
			width: el.offsetWidth
			, height: el.offsetHeight
		}, this.$element.offset())
	}

	Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
		return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
			placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
				placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
					/* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
	}

	Tooltip.prototype.getTitle = function () {
		var title
		var $e = this.$element
		var o  = this.options

		title = $e.attr('data-original-title')
			|| (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

		return title
	}

	Tooltip.prototype.tip = function () {
		return this.$tip = this.$tip || $(this.options.template)
	}

	Tooltip.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
	}

	Tooltip.prototype.validate = function () {
		if (!this.$element[0].parentNode) {
			this.hide()
			this.$element = null
			this.options  = null
		}
	}

	Tooltip.prototype.enable = function () {
		this.enabled = true
	}

	Tooltip.prototype.disable = function () {
		this.enabled = false
	}

	Tooltip.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}

	Tooltip.prototype.toggle = function (e) {
		var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
		self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	}

	Tooltip.prototype.destroy = function () {
		this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
	}


	// TOOLTIP PLUGIN DEFINITION
	// =========================

	var old = $.fn.tooltip

	$.fn.tooltip = function (option) {
		return this.each(function () {
			var $this   = $(this)
			var data    = $this.data('bs.tooltip')
			var options = typeof option == 'object' && option

			if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}

	$.fn.tooltip.Constructor = Tooltip


	// TOOLTIP NO CONFLICT
	// ===================

	$.fn.tooltip.noConflict = function () {
		$.fn.tooltip = old
		return this
	}

})(window.jQuery);

!function($){"use strict";var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",element,options)};Tooltip.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,size:"default"},Tooltip.prototype.init=function(type,element,options){this.enabled=!0,this.type=type,this.$element=$(element),this.options=this.getOptions(options);for(var triggers=this.options.trigger.split(" "),i=triggers.length;i--;){var trigger=triggers[i];if("click"==trigger)this.$element.on("click."+this.type,this.options.selector,$.proxy(this.toggle,this));else if("manual"!=trigger){var eventIn="hover"==trigger?"mouseenter":"focus",eventOut="hover"==trigger?"mouseleave":"blur";this.$element.on(eventIn+"."+this.type,this.options.selector,$.proxy(this.enter,this)),this.$element.on(eventOut+"."+this.type,this.options.selector,$.proxy(this.leave,this))}}this.options.selector?this._options=$.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS},Tooltip.prototype.getOptions=function(options){return options=$.extend({},this.getDefaults(),this.$element.data(),options),options.delay&&"number"==typeof options.delay&&(options.delay={show:options.delay,hide:options.delay}),options},Tooltip.prototype.getDelegateOptions=function(){var options={},defaults=this.getDefaults();return this._options&&$.each(this._options,function(key,value){defaults[key]!=value&&(options[key]=value)}),options},Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(self.timeout),self.hoverState="in",self.options.delay&&self.options.delay.show?void(self.timeout=setTimeout(function(){"in"==self.hoverState&&self.show()},self.options.delay.show)):self.show()},Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(self.timeout),self.hoverState="out",self.options.delay&&self.options.delay.hide?void(self.timeout=setTimeout(function(){"out"==self.hoverState&&self.hide()},self.options.delay.hide)):self.hide()},Tooltip.prototype.show=function(){var e=$.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return;var $tip=this.tip();this.setContent(),this.setSize(),this.options.animation&&$tip.addClass("fade");var placement="function"==typeof this.options.placement?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement,autoToken=/\s?auto?\s?/i,autoPlace=autoToken.test(placement);autoPlace&&(placement=placement.replace(autoToken,"")||"top"),$tip.detach().css({top:0,left:0,display:"block"}).addClass(placement),this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element);var pos=this.getPosition(),actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if(autoPlace){var $parent=this.$element.parent(),orgPlacement=placement,docScroll=document.documentElement.scrollTop||document.body.scrollTop,parentWidth="body"==this.options.container?window.innerWidth:$parent.outerWidth(),parentHeight="body"==this.options.container?window.innerHeight:$parent.outerHeight(),parentLeft="body"==this.options.container?0:$parent.offset().left;placement="bottom"==placement&&pos.top+pos.height+actualHeight-docScroll>parentHeight?"top":"top"==placement&&pos.top-docScroll-actualHeight<0?"bottom":"right"==placement&&pos.right+actualWidth>parentWidth?"left":"left"==placement&&pos.left-actualWidth<parentLeft?"right":placement,$tip.removeClass(orgPlacement).addClass(placement)}var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight);this.applyPlacement(calculatedOffset,placement),this.$element.trigger("shown.bs."+this.type)}},Tooltip.prototype.applyPlacement=function(offset,placement){var replace,$tip=this.tip(),width=$tip[0].offsetWidth,height=$tip[0].offsetHeight,marginTop=parseInt($tip.css("margin-top"),10),marginLeft=parseInt($tip.css("margin-left"),10);isNaN(marginTop)&&(marginTop=0),isNaN(marginLeft)&&(marginLeft=0),offset.top=offset.top+marginTop,offset.left=offset.left+marginLeft,$tip.offset(offset).addClass("in");var actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if("top"==placement&&actualHeight!=height&&(replace=!0,offset.top=offset.top+height-actualHeight),/bottom|top/.test(placement)){var delta=0;offset.left<0&&(delta=-2*offset.left,offset.left=0,$tip.offset(offset),actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight),this.replaceArrow(delta-width+actualWidth,actualWidth,"left")}else this.replaceArrow(actualHeight-height,actualHeight,"top");replace&&$tip.offset(offset)},Tooltip.prototype.replaceArrow=function(delta,dimension,position){this.arrow().css(position,delta?50*(1-delta/dimension)+"%":"")},Tooltip.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle();$tip.find(".tooltip-inner")[this.options.html?"html":"text"](title),$tip.removeClass("fade in top bottom left right")},Tooltip.prototype.setSize=function(){"default"!=this.options.size&&this.tip().addClass("tooltip-"+this.options.size)},Tooltip.prototype.hide=function(){function complete(){"in"!=that.hoverState&&$tip.detach()}var that=this,$tip=this.tip(),e=$.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:($tip.removeClass("in"),$.support.transition&&this.$tip.hasClass("fade")?$tip.one($.support.transition.end,complete).emulateTransitionEnd(150):complete(),this.$element.trigger("hidden.bs."+this.type),this)},Tooltip.prototype.fixTitle=function(){var $e=this.$element;($e.attr("title")||"string"!=typeof $e.attr("data-original-title"))&&$e.attr("data-original-title",$e.attr("title")||"").attr("title","")},Tooltip.prototype.hasContent=function(){return this.getTitle()},Tooltip.prototype.getPosition=function(){var el=this.$element[0];return $.extend({},"function"==typeof el.getBoundingClientRect?el.getBoundingClientRect():{width:el.offsetWidth,height:el.offsetHeight},this.$element.offset())},Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return"bottom"==placement?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:"top"==placement?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:"left"==placement?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}},Tooltip.prototype.getTitle=function(){var title,$e=this.$element,o=this.options;return title=$e.attr("data-original-title")||("function"==typeof o.title?o.title.call($e[0]):o.title)},Tooltip.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template)},Tooltip.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},Tooltip.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},Tooltip.prototype.enable=function(){this.enabled=!0},Tooltip.prototype.disable=function(){this.enabled=!1},Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled},Tooltip.prototype.toggle=function(e){var self=e?$(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;self.tip().hasClass("in")?self.leave(self):self.enter(self)},Tooltip.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var old=$.fn.tooltip;$.fn.tooltip=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.tooltip"),options="object"==typeof option&&option;data||$this.data("bs.tooltip",data=new Tooltip(this,options)),"string"==typeof option&&data[option]()})},$.fn.tooltip.Constructor=Tooltip,$.fn.tooltip.noConflict=function(){return $.fn.tooltip=old,this}}(window.jQuery);
/*! sly 1.3.0 - 30th Nov 2014 | https://github.com/darsain/sly */
!function(a,b,c){"use strict";function d(b,p,q){function K(){if(sb.initialized){var c=0,d=Gb.length;if(yb.old=a.extend({},yb),wb=tb?0:ub[rb.horizontal?"width":"height"](),Bb=zb[rb.horizontal?"width":"height"](),xb=tb?b:vb[rb.horizontal?"outerWidth":"outerHeight"](),Gb.length=0,yb.start=0,yb.end=H(xb-wb,0),Rb){c=Ib.length,Hb=vb.children(rb.itemSelector),Ib.length=0;var e,f=j(vb,rb.horizontal?"paddingLeft":"paddingTop"),g=j(vb,rb.horizontal?"paddingRight":"paddingBottom"),h="border-box"===a(Hb).css("boxSizing"),i="none"!==Hb.css("float"),l=0,m=Hb.length-1;xb=0,Hb.each(function(b,c){var d=a(c),h=d[rb.horizontal?"outerWidth":"outerHeight"](),k=j(d,rb.horizontal?"marginLeft":"marginTop"),n=j(d,rb.horizontal?"marginRight":"marginBottom"),o=h+k+n,p=!k||!n,q={};q.el=c,q.size=p?h:o,q.half=q.size/2,q.start=xb+(p?k:0),q.center=q.start-G(wb/2-q.size/2),q.end=q.start-wb+q.size,b||(xb+=f),xb+=o,rb.horizontal||i||n&&k&&b>0&&(xb-=I(k,n)),b===m&&(q.end+=g,xb+=g,l=p?n:0),Ib.push(q),e=q}),vb[0].style[rb.horizontal?"width":"height"]=(h?xb:xb-f-g)+"px",xb-=l,Ib.length?(yb.start=Ib[0][Pb?"center":"start"],yb.end=Pb?e.center:xb>wb?e.end:yb.start):yb.start=yb.end=0}if(yb.center=G(yb.end/2+yb.start/2),V(),Ab.length&&Bb>0&&(rb.dynamicHandle?(Cb=yb.start===yb.end?Bb:G(Bb*wb/xb),Cb=k(Cb,rb.minHandleSize,Bb),Ab[0].style[rb.horizontal?"width":"height"]=Cb+"px"):Cb=Ab[rb.horizontal?"outerWidth":"outerHeight"](),Db.end=Bb-Cb,ec||N()),!tb&&wb>0){var n=yb.start,o="";if(Rb)a.each(Ib,function(a,b){Pb?Gb.push(b.center):b.start+b.size>n&&n<=yb.end&&(n=b.start,Gb.push(n),n+=wb,n>yb.end&&n<yb.end+wb&&Gb.push(yb.end))});else for(;n-wb<yb.end;)Gb.push(n),n+=wb;if(Eb[0]&&d!==Gb.length){for(var p=0;p<Gb.length;p++)o+=rb.pageBuilder.call(sb,p);Fb=Eb.html(o).children(),Fb.eq(Jb.activePage).addClass(rb.activeClass)}}if(Jb.slideeSize=xb,Jb.frameSize=wb,Jb.sbSize=Bb,Jb.handleSize=Cb,Rb){sb.initialized?(Jb.activeItem>=Ib.length||0===c&&Ib.length>0)&&T(Jb.activeItem>=Ib.length?Ib.length-1:0,!c):(T(rb.startAt),sb[Qb?"toCenter":"toStart"](rb.startAt));var q=Ib[Jb.activeItem];L(Qb&&q?q.center:k(yb.dest,yb.start,yb.end))}else sb.initialized?L(k(yb.dest,yb.start,yb.end)):L(rb.startAt,1);ob("load")}}function L(a,b,c){if(Rb&&cc.released&&!c){var d=U(a),e=a>yb.start&&a<yb.end;Qb?(e&&(a=Ib[d.centerItem].center),Pb&&rb.activateMiddle&&T(d.centerItem)):e&&(a=Ib[d.firstItem].start)}cc.init&&cc.slidee&&rb.elasticBounds?a>yb.end?a=yb.end+(a-yb.end)/6:a<yb.start&&(a=yb.start+(a-yb.start)/6):a=k(a,yb.start,yb.end),ac.start=+new Date,ac.time=0,ac.from=yb.cur,ac.to=a,ac.delta=a-yb.cur,ac.tweesing=cc.tweese||cc.init&&!cc.slidee,ac.immediate=!ac.tweesing&&(b||cc.init&&cc.slidee||!rb.speed),cc.tweese=0,a!==yb.dest&&(yb.dest=a,ob("change"),ec||M()),Z(),V(),W(),O()}function M(){if(sb.initialized){if(!ec)return ec=t(M),void(cc.released&&ob("moveStart"));ac.immediate?yb.cur=ac.to:ac.tweesing?(ac.tweeseDelta=ac.to-yb.cur,D(ac.tweeseDelta)<.1?yb.cur=ac.to:yb.cur+=ac.tweeseDelta*(cc.released?rb.swingSpeed:rb.syncSpeed)):(ac.time=I(+new Date-ac.start,rb.speed),yb.cur=ac.from+ac.delta*jQuery.easing[rb.easing](ac.time/rb.speed,ac.time,0,1,rb.speed)),ac.to===yb.cur?(yb.cur=ac.to,cc.tweese=ec=0):ec=t(M),ob("move"),tb||(m?vb[0].style[m]=n+(rb.horizontal?"translateX":"translateY")+"("+-yb.cur+"px)":vb[0].style[rb.horizontal?"left":"top"]=-G(yb.cur)+"px"),!ec&&cc.released&&ob("moveEnd"),N()}}function N(){Ab.length&&(Db.cur=yb.start===yb.end?0:((cc.init&&!cc.slidee?yb.dest:yb.cur)-yb.start)/(yb.end-yb.start)*Db.end,Db.cur=k(G(Db.cur),Db.start,Db.end),_b.hPos!==Db.cur&&(_b.hPos=Db.cur,m?Ab[0].style[m]=n+(rb.horizontal?"translateX":"translateY")+"("+Db.cur+"px)":Ab[0].style[rb.horizontal?"left":"top"]=Db.cur+"px"))}function O(){Fb[0]&&_b.page!==Jb.activePage&&(_b.page=Jb.activePage,Fb.removeClass(rb.activeClass).eq(Jb.activePage).addClass(rb.activeClass),ob("activePage",_b.page))}function P(){bc.speed&&yb.cur!==(bc.speed>0?yb.end:yb.start)||sb.stop(),hc=cc.init?t(P):0,bc.now=+new Date,bc.pos=yb.cur+(bc.now-bc.lastTime)/1e3*bc.speed,L(cc.init?bc.pos:G(bc.pos)),cc.init||yb.cur!==yb.dest||ob("moveEnd"),bc.lastTime=bc.now}function Q(a,b,d){if("boolean"===e(b)&&(d=b,b=c),b===c)L(yb[a],d);else{if(Qb&&"center"!==a)return;var f=sb.getPos(b);f&&L(f[a],d,!Qb)}}function R(a){return null!=a?i(a)?a>=0&&a<Ib.length?a:-1:Hb.index(a):-1}function S(a){return R(i(a)&&0>a?a+Ib.length:a)}function T(a,b){var c=R(a);return!Rb||0>c?!1:((_b.active!==c||b)&&(Hb.eq(Jb.activeItem).removeClass(rb.activeClass),Hb.eq(c).addClass(rb.activeClass),_b.active=Jb.activeItem=c,W(),ob("active",c)),c)}function U(a){a=k(i(a)?a:yb.dest,yb.start,yb.end);var b={},c=Pb?0:wb/2;if(!tb)for(var d=0,e=Gb.length;e>d;d++){if(a>=yb.end||d===Gb.length-1){b.activePage=Gb.length-1;break}if(a<=Gb[d]+c){b.activePage=d;break}}if(Rb){for(var f=!1,g=!1,h=!1,j=0,l=Ib.length;l>j;j++)if(f===!1&&a<=Ib[j].start+Ib[j].half&&(f=j),h===!1&&a<=Ib[j].center+Ib[j].half&&(h=j),j===l-1||a<=Ib[j].end+Ib[j].half){g=j;break}b.firstItem=i(f)?f:0,b.centerItem=i(h)?h:b.firstItem,b.lastItem=i(g)?g:b.centerItem}return b}function V(b){a.extend(Jb,U(b))}function W(){var a=yb.dest<=yb.start,b=yb.dest>=yb.end,c=a?1:b?2:3;if(_b.slideePosState!==c&&(_b.slideePosState=c,Yb.is("button,input")&&Yb.prop("disabled",a),Zb.is("button,input")&&Zb.prop("disabled",b),Yb.add(Vb)[a?"addClass":"removeClass"](rb.disabledClass),Zb.add(Ub)[b?"addClass":"removeClass"](rb.disabledClass)),_b.fwdbwdState!==c&&cc.released&&(_b.fwdbwdState=c,Vb.is("button,input")&&Vb.prop("disabled",a),Ub.is("button,input")&&Ub.prop("disabled",b)),Rb){var d=0===Jb.activeItem,e=Jb.activeItem>=Ib.length-1,f=d?1:e?2:3;_b.itemsButtonState!==f&&(_b.itemsButtonState=f,Wb.is("button,input")&&Wb.prop("disabled",d),Xb.is("button,input")&&Xb.prop("disabled",e),Wb[d?"addClass":"removeClass"](rb.disabledClass),Xb[e?"addClass":"removeClass"](rb.disabledClass))}}function X(a,b,c){if(a=S(a),b=S(b),a>-1&&b>-1&&a!==b&&(!c||b!==a-1)&&(c||b!==a+1)){Hb.eq(a)[c?"insertAfter":"insertBefore"](Ib[b].el);var d=b>a?a:c?b:b-1,e=a>b?a:c?b+1:b,f=a>b;a===Jb.activeItem?_b.active=Jb.activeItem=c?f?b+1:b:f?b:b-1:Jb.activeItem>d&&Jb.activeItem<e&&(_b.active=Jb.activeItem+=f?1:-1),K()}}function Y(a,b){for(var c=0,d=$b[a].length;d>c;c++)if($b[a][c]===b)return c;return-1}function Z(){cc.released&&!sb.isPaused&&sb.resume()}function $(a){return G(k(a,Db.start,Db.end)/Db.end*(yb.end-yb.start))+yb.start}function _(){cc.history[0]=cc.history[1],cc.history[1]=cc.history[2],cc.history[2]=cc.history[3],cc.history[3]=cc.delta}function ab(a){cc.released=0,cc.source=a,cc.slidee="slidee"===a}function bb(b){var c="touchstart"===b.type,d=b.data.source,e="slidee"===d;cc.init||!c&&eb(b.target)||("handle"!==d||rb.dragHandle&&Db.start!==Db.end)&&(!e||(c?rb.touchDragging:rb.mouseDragging&&b.which<2))&&(c||f(b),ab(d),cc.init=0,cc.$source=a(b.target),cc.touch=c,cc.pointer=c?b.originalEvent.touches[0]:b,cc.initX=cc.pointer.pageX,cc.initY=cc.pointer.pageY,cc.initPos=e?yb.cur:Db.cur,cc.start=+new Date,cc.time=0,cc.path=0,cc.delta=0,cc.locked=0,cc.history=[0,0,0,0],cc.pathToLock=e?c?30:10:0,u.on(c?x:w,cb),sb.pause(1),(e?vb:Ab).addClass(rb.draggedClass),ob("moveStart"),e&&(fc=setInterval(_,10)))}function cb(a){if(cc.released="mouseup"===a.type||"touchend"===a.type,cc.pointer=cc.touch?a.originalEvent[cc.released?"changedTouches":"touches"][0]:a,cc.pathX=cc.pointer.pageX-cc.initX,cc.pathY=cc.pointer.pageY-cc.initY,cc.path=E(F(cc.pathX,2)+F(cc.pathY,2)),cc.delta=rb.horizontal?cc.pathX:cc.pathY,!cc.init){if(!(rb.horizontal?D(cc.pathX)>D(cc.pathY):D(cc.pathX)<D(cc.pathY)))return db();cc.init=1}f(a),!cc.locked&&cc.path>cc.pathToLock&&cc.slidee&&(cc.locked=1,cc.$source.on(z,g)),cc.released&&(db(),rb.releaseSwing&&cc.slidee&&(cc.swing=(cc.delta-cc.history[0])/40*300,cc.delta+=cc.swing,cc.tweese=D(cc.swing)>10)),L(cc.slidee?G(cc.initPos-cc.delta):$(cc.initPos+cc.delta))}function db(){clearInterval(fc),u.off(cc.touch?x:w,cb),(cc.slidee?vb:Ab).removeClass(rb.draggedClass),setTimeout(function(){cc.$source.off(z,g)}),sb.resume(1),yb.cur===yb.dest&&cc.init&&ob("moveEnd"),cc.init=0}function eb(b){return~a.inArray(b.nodeName,B)||a(b).is(rb.interactive)}function fb(){sb.stop(),u.off("mouseup",fb)}function gb(a){switch(f(a),this){case Ub[0]:case Vb[0]:sb.moveBy(Ub.is(this)?rb.moveBy:-rb.moveBy),u.on("mouseup",fb);break;case Wb[0]:sb.prev();break;case Xb[0]:sb.next();break;case Yb[0]:sb.prevPage();break;case Zb[0]:sb.nextPage()}}function hb(a){return dc.curDelta=(rb.horizontal?a.deltaY||a.deltaX:a.deltaY)||-a.wheelDelta,dc.curDelta/=1===a.deltaMode?3:100,Rb?(o=+new Date,dc.last<o-dc.resetTime&&(dc.delta=0),dc.last=o,dc.delta+=dc.curDelta,D(dc.delta)<1?dc.finalDelta=0:(dc.finalDelta=G(dc.delta/1),dc.delta%=1),dc.finalDelta):dc.curDelta}function ib(a){var b=+new Date;if(J+300>b)return void(J=b);if(rb.scrollBy&&yb.start!==yb.end){var c=hb(a.originalEvent);(rb.scrollTrap||c>0&&yb.dest<yb.end||0>c&&yb.dest>yb.start)&&f(a,1),sb.slideBy(rb.scrollBy*c)}}function jb(a){rb.clickBar&&a.target===zb[0]&&(f(a),L($((rb.horizontal?a.pageX-zb.offset().left:a.pageY-zb.offset().top)-Cb/2)))}function kb(a){if(rb.keyboardNavBy)switch(a.which){case rb.horizontal?37:38:f(a),sb["pages"===rb.keyboardNavBy?"prevPage":"prev"]();break;case rb.horizontal?39:40:f(a),sb["pages"===rb.keyboardNavBy?"nextPage":"next"]()}}function lb(a){return eb(this)?void a.stopPropagation():void(this.parentNode===vb[0]&&sb.activate(this))}function mb(){this.parentNode===Eb[0]&&sb.activatePage(Fb.index(this))}function nb(a){rb.pauseOnHover&&sb["mouseenter"===a.type?"pause":"resume"](2)}function ob(a,b){if($b[a]){for(qb=$b[a].length,C.length=0,pb=0;qb>pb;pb++)C.push($b[a][pb]);for(pb=0;qb>pb;pb++)C[pb].call(sb,a,b)}}var pb,qb,rb=a.extend({},d.defaults,p),sb=this,tb=i(b),ub=a(b),vb=ub.children().eq(0),wb=0,xb=0,yb={start:0,center:0,end:0,cur:0,dest:0},zb=a(rb.scrollBar).eq(0),Ab=zb.children().eq(0),Bb=0,Cb=0,Db={start:0,end:0,cur:0},Eb=a(rb.pagesBar),Fb=0,Gb=[],Hb=0,Ib=[],Jb={firstItem:0,lastItem:0,centerItem:0,activeItem:-1,activePage:0},Kb=new l(ub[0]),Lb=new l(vb[0]),Mb=new l(zb[0]),Nb=new l(Ab[0]),Ob="basic"===rb.itemNav,Pb="forceCentered"===rb.itemNav,Qb="centered"===rb.itemNav||Pb,Rb=!tb&&(Ob||Qb||Pb),Sb=rb.scrollSource?a(rb.scrollSource):ub,Tb=rb.dragSource?a(rb.dragSource):ub,Ub=a(rb.forward),Vb=a(rb.backward),Wb=a(rb.prev),Xb=a(rb.next),Yb=a(rb.prevPage),Zb=a(rb.nextPage),$b={},_b={},ac={},bc={},cc={released:1},dc={last:0,delta:0,resetTime:200},ec=0,fc=0,gc=0,hc=0;tb||(b=ub[0]),sb.initialized=0,sb.frame=b,sb.slidee=vb[0],sb.pos=yb,sb.rel=Jb,sb.items=Ib,sb.pages=Gb,sb.isPaused=0,sb.options=rb,sb.dragging=cc,sb.reload=K,sb.getPos=function(a){if(Rb){var b=R(a);return-1!==b?Ib[b]:!1}var c=vb.find(a).eq(0);if(c[0]){var d=rb.horizontal?c.offset().left-vb.offset().left:c.offset().top-vb.offset().top,e=c[rb.horizontal?"outerWidth":"outerHeight"]();return{start:d,center:d-wb/2+e/2,end:d-wb+e,size:e}}return!1},sb.moveBy=function(a){bc.speed=a,!cc.init&&bc.speed&&yb.cur!==(bc.speed>0?yb.end:yb.start)&&(bc.lastTime=+new Date,bc.startPos=yb.cur,ab("button"),cc.init=1,ob("moveStart"),s(hc),P())},sb.stop=function(){"button"===cc.source&&(cc.init=0,cc.released=1)},sb.prev=function(){sb.activate(Jb.activeItem-1)},sb.next=function(){sb.activate(Jb.activeItem+1)},sb.prevPage=function(){sb.activatePage(Jb.activePage-1)},sb.nextPage=function(){sb.activatePage(Jb.activePage+1)},sb.slideBy=function(a,b){a&&(Rb?sb[Qb?"toCenter":"toStart"](k((Qb?Jb.centerItem:Jb.firstItem)+rb.scrollBy*a,0,Ib.length)):L(yb.dest+a,b))},sb.slideTo=function(a,b){L(a,b)},sb.toStart=function(a,b){Q("start",a,b)},sb.toEnd=function(a,b){Q("end",a,b)},sb.toCenter=function(a,b){Q("center",a,b)},sb.getIndex=R,sb.activate=function(a,b){var c=T(a);rb.smart&&c!==!1&&(Qb?sb.toCenter(c,b):c>=Jb.lastItem?sb.toStart(c,b):c<=Jb.firstItem?sb.toEnd(c,b):Z())},sb.activatePage=function(a,b){i(a)&&L(Gb[k(a,0,Gb.length-1)],b)},sb.resume=function(a){!rb.cycleBy||!rb.cycleInterval||"items"===rb.cycleBy&&!Ib[0]||a<sb.isPaused||(sb.isPaused=0,gc?gc=clearTimeout(gc):ob("resume"),gc=setTimeout(function(){switch(ob("cycle"),rb.cycleBy){case"items":sb.activate(Jb.activeItem>=Ib.length-1?0:Jb.activeItem+1);break;case"pages":sb.activatePage(Jb.activePage>=Gb.length-1?0:Jb.activePage+1)}},rb.cycleInterval))},sb.pause=function(a){a<sb.isPaused||(sb.isPaused=a||100,gc&&(gc=clearTimeout(gc),ob("pause")))},sb.toggle=function(){sb[gc?"pause":"resume"]()},sb.set=function(b,c){a.isPlainObject(b)?a.extend(rb,b):rb.hasOwnProperty(b)&&(rb[b]=c)},sb.add=function(b,c){var d=a(b);Rb?(null==c||!Ib[0]||c>=Ib.length?d.appendTo(vb):Ib.length&&d.insertBefore(Ib[c].el),c<=Jb.activeItem&&(_b.active=Jb.activeItem+=d.length)):vb.append(d),K()},sb.remove=function(b){if(Rb){var c=S(b);if(c>-1){Hb.eq(c).remove();var d=c===Jb.activeItem;c<Jb.activeItem&&(_b.active=--Jb.activeItem),K(),d&&(_b.active=null,sb.activate(Jb.activeItem))}}else a(b).remove(),K()},sb.moveAfter=function(a,b){X(a,b,1)},sb.moveBefore=function(a,b){X(a,b)},sb.on=function(a,b){if("object"===e(a))for(var c in a)a.hasOwnProperty(c)&&sb.on(c,a[c]);else if("function"===e(b))for(var d=a.split(" "),f=0,g=d.length;g>f;f++)$b[d[f]]=$b[d[f]]||[],-1===Y(d[f],b)&&$b[d[f]].push(b);else if("array"===e(b))for(var h=0,i=b.length;i>h;h++)sb.on(a,b[h])},sb.one=function(a,b){function c(){b.apply(sb,arguments),sb.off(a,c)}sb.on(a,c)},sb.off=function(a,b){if(b instanceof Array)for(var c=0,d=b.length;d>c;c++)sb.off(a,b[c]);else for(var e=a.split(" "),f=0,g=e.length;g>f;f++)if($b[e[f]]=$b[e[f]]||[],null==b)$b[e[f]].length=0;else{var h=Y(e[f],b);-1!==h&&$b[e[f]].splice(h,1)}},sb.destroy=function(){return u.add(Sb).add(Ab).add(zb).add(Eb).add(Ub).add(Vb).add(Wb).add(Xb).add(Yb).add(Zb).unbind("."+r),Wb.add(Xb).add(Yb).add(Zb).removeClass(rb.disabledClass),Hb&&Hb.eq(Jb.activeItem).removeClass(rb.activeClass),Eb.empty(),tb||(ub.unbind("."+r),Kb.restore(),Lb.restore(),Mb.restore(),Nb.restore(),a.removeData(b,r)),Ib.length=Gb.length=0,_b={},sb.initialized=0,sb},sb.init=function(){if(!sb.initialized){sb.on(q);var a=["overflow","position"],b=["position","webkitTransform","msTransform","transform","left","top","width","height"];Kb.save.apply(Kb,a),Mb.save.apply(Mb,a),Lb.save.apply(Lb,b),Nb.save.apply(Nb,b);var c=Ab;return tb||(c=c.add(vb),ub.css("overflow","hidden"),m||"static"!==ub.css("position")||ub.css("position","relative")),m?n&&c.css(m,n):("static"===zb.css("position")&&zb.css("position","relative"),c.css({position:"absolute"})),rb.forward&&Ub.on(A,gb),rb.backward&&Vb.on(A,gb),rb.prev&&Wb.on(z,gb),rb.next&&Xb.on(z,gb),rb.prevPage&&Yb.on(z,gb),rb.nextPage&&Zb.on(z,gb),Sb.on(y,ib),zb[0]&&zb.on(z,jb),Rb&&rb.activateOn&&ub.on(rb.activateOn+"."+r,"*",lb),Eb[0]&&rb.activatePageOn&&Eb.on(rb.activatePageOn+"."+r,"*",mb),Tb.on(v,{source:"slidee"},bb),Ab&&Ab.on(v,{source:"handle"},bb),u.bind("keydown."+r,kb),tb||(ub.on("mouseenter."+r+" mouseleave."+r,nb),ub.on("scroll."+r,h)),sb.initialized=1,K(),rb.cycleBy&&!tb&&sb[rb.startPaused?"pause":"resume"](),sb}}}function e(a){return null==a?String(a):"object"==typeof a||"function"==typeof a?Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof a}function f(a,b){a.preventDefault(),b&&a.stopPropagation()}function g(b){f(b,1),a(this).off(b.type,g)}function h(){this.scrollLeft=0,this.scrollTop=0}function i(a){return!isNaN(parseFloat(a))&&isFinite(a)}function j(a,b){return 0|G(String(a.css(b)).replace(/[^\-0-9.]/g,""))}function k(a,b,c){return b>a?b:a>c?c:a}function l(a){var b={};return b.style={},b.save=function(){if(a){for(var c=0;c<arguments.length;c++)b.style[arguments[c]]=a.style[arguments[c]];return b}},b.restore=function(){if(a){for(var c in b.style)b.style.hasOwnProperty(c)&&(a.style[c]=b.style[c]);return b}},b}var m,n,o,p="sly",q="Sly",r=p,s=b.cancelAnimationFrame||b.cancelRequestAnimationFrame,t=b.requestAnimationFrame,u=a(document),v="touchstart."+r+" mousedown."+r,w="mousemove."+r+" mouseup."+r,x="touchmove."+r+" touchend."+r,y=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+r,z="click."+r,A="mousedown."+r,B=["INPUT","SELECT","BUTTON","TEXTAREA"],C=[],D=Math.abs,E=Math.sqrt,F=Math.pow,G=Math.round,H=Math.max,I=Math.min,J=0;u.on(y,function(){J=+new Date}),function(a){function b(a){var b=(new Date).getTime(),d=Math.max(0,16-(b-c)),e=setTimeout(a,d);return c=b,e}t=a.requestAnimationFrame||a.webkitRequestAnimationFrame||b;var c=(new Date).getTime(),d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.clearTimeout;s=function(b){d.call(a,b)}}(window),function(){function a(a){for(var d=0,e=b.length;e>d;d++){var f=b[d]?b[d]+a.charAt(0).toUpperCase()+a.slice(1):a;if(null!=c.style[f])return f}}var b=["","webkit","moz","ms","o"],c=document.createElement("div");m=a("transform"),n=a("perspective")?"translateZ(0) ":""}(),b[q]=d,a.fn[p]=function(b,c){var f,g;return a.isPlainObject(b)||(("string"===e(b)||b===!1)&&(f=b===!1?"destroy":b,g=Array.prototype.slice.call(arguments,1)),b={}),this.each(function(e,h){var i=a.data(h,r);i||f?i&&f&&i[f]&&i[f].apply(i,g):i=a.data(h,r,new d(h,b,c).init())})},d.defaults={horizontal:!1,itemNav:null,itemSelector:null,smart:!1,activateOn:null,activateMiddle:!1,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:!1,dragSource:null,mouseDragging:!1,touchDragging:!1,releaseSwing:!1,swingSpeed:.2,elasticBounds:!1,interactive:null,scrollBar:null,dragHandle:!1,dynamicHandle:!1,minHandleSize:50,clickBar:!1,syncSpeed:.5,pagesBar:null,activatePageOn:null,pageBuilder:function(a){return"<li>"+(a+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5e3,pauseOnHover:!1,startPaused:!1,moveBy:300,speed:0,easing:"swing",startAt:0,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}}(jQuery,window);
/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

(function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            getUniqueId: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            }(),
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            noop: function() {}
        };
    }();
    var VERSION = "0.10.5";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function getObjTokenizer(tokenizer) {
            return function setKey() {
                var args = [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(args, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var ls, methods;
        try {
            ls = window.localStorage;
            ls.setItem("~~~", "!");
            ls.removeItem("~~~");
        } catch (err) {
            ls = null;
        }
        function PersistentStorage(namespace) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
        }
        if (ls && window.JSON) {
            methods = {
                _prefix: function(key) {
                    return this.prefix + key;
                },
                _ttlKey: function(key) {
                    return this._prefix(key) + this.ttlKey;
                },
                get: function(key) {
                    if (this.isExpired(key)) {
                        this.remove(key);
                    }
                    return decode(ls.getItem(this._prefix(key)));
                },
                set: function(key, val, ttl) {
                    if (_.isNumber(ttl)) {
                        ls.setItem(this._ttlKey(key), encode(now() + ttl));
                    } else {
                        ls.removeItem(this._ttlKey(key));
                    }
                    return ls.setItem(this._prefix(key), encode(val));
                },
                remove: function(key) {
                    ls.removeItem(this._ttlKey(key));
                    ls.removeItem(this._prefix(key));
                    return this;
                },
                clear: function() {
                    var i, key, keys = [], len = ls.length;
                    for (i = 0; i < len; i++) {
                        if ((key = ls.key(i)).match(this.keyMatcher)) {
                            keys.push(key.replace(this.keyMatcher, ""));
                        }
                    }
                    for (i = keys.length; i--; ) {
                        this.remove(keys[i]);
                    }
                    return this;
                },
                isExpired: function(key) {
                    var ttl = decode(ls.getItem(this._ttlKey(key)));
                    return _.isNumber(ttl) && now() > ttl ? true : false;
                }
            };
        } else {
            methods = {
                get: _.noop,
                set: _.noop,
                remove: _.noop,
                clear: _.noop,
                isExpired: _.noop
            };
        }
        _.mixin(PersistentStorage.prototype, methods);
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return JSON.parse(val);
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.cancelled = false;
            this.lastUrl = null;
            this._send = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            this._get = o.rateLimiter ? o.rateLimiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _get: function(url, o, cb) {
                var that = this, jqXhr;
                if (this.cancelled || url !== this.lastUrl) {
                    return;
                }
                if (jqXhr = pendingRequests[url]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[url] = this._send(url, o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb && cb(null, resp);
                    that._cache.set(url, resp);
                }
                function fail() {
                    cb && cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[url];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(url, o, cb) {
                var resp;
                if (_.isFunction(o)) {
                    cb = o;
                    o = {};
                }
                this.cancelled = false;
                this.lastUrl = url;
                if (resp = this._cache.get(url)) {
                    _.defer(function() {
                        cb && cb(null, resp);
                    });
                } else {
                    this._get(url, o, cb);
                }
                return !!resp;
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
        function callbackToDeferred(fn) {
            return function customSendWrapper(url, o) {
                var deferred = $.Deferred();
                fn(url, o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var SearchIndex = function() {
        "use strict";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    id = that.datums.push(datum) - 1;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node.children[ch] || (node.children[ch] = newNode());
                            node.ids.push(id);
                        }
                    });
                });
            },
            get: function get(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node.children[ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node.ids.slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            reset: function reset() {
                this.datums = [];
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            return {
                ids: [],
                children: {}
            };
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort(compare);
            arrayB = arrayB.sort(compare);
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
            function compare(a, b) {
                return a - b;
            }
        }
    }();
    var oParser = function() {
        "use strict";
        return {
            local: getLocal,
            prefetch: getPrefetch,
            remote: getRemote
        };
        function getLocal(o) {
            return o.local || null;
        }
        function getPrefetch(o) {
            var prefetch, defaults;
            defaults = {
                url: null,
                thumbprint: "",
                ttl: 24 * 60 * 60 * 1e3,
                filter: null,
                ajax: {}
            };
            if (prefetch = o.prefetch || null) {
                prefetch = _.isString(prefetch) ? {
                    url: prefetch
                } : prefetch;
                prefetch = _.mixin(defaults, prefetch);
                prefetch.thumbprint = VERSION + prefetch.thumbprint;
                prefetch.ajax.type = prefetch.ajax.type || "GET";
                prefetch.ajax.dataType = prefetch.ajax.dataType || "json";
                !prefetch.url && $.error("prefetch requires url to be set");
            }
            return prefetch;
        }
        function getRemote(o) {
            var remote, defaults;
            defaults = {
                url: null,
                cache: true,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            };
            if (remote = o.remote || null) {
                remote = _.isString(remote) ? {
                    url: remote
                } : remote;
                remote = _.mixin(defaults, remote);
                remote.rateLimiter = /^throttle$/i.test(remote.rateLimitBy) ? byThrottle(remote.rateLimitWait) : byDebounce(remote.rateLimitWait);
                remote.ajax.type = remote.ajax.type || "GET";
                remote.ajax.dataType = remote.ajax.dataType || "json";
                delete remote.rateLimitBy;
                delete remote.rateLimitWait;
                !remote.url && $.error("remote requires url to be set");
            }
            return remote;
            function byDebounce(wait) {
                return function(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function byThrottle(wait) {
                return function(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
    }();
    (function(root) {
        "use strict";
        var old, keys;
        old = root.Bloodhound;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        root.Bloodhound = Bloodhound;
        function Bloodhound(o) {
            if (!o || !o.local && !o.prefetch && !o.remote) {
                $.error("one of local, prefetch, or remote is required");
            }
            this.limit = o.limit || 5;
            this.sorter = getSorter(o.sorter);
            this.dupDetector = o.dupDetector || ignoreDuplicates;
            this.local = oParser.local(o);
            this.prefetch = oParser.prefetch(o);
            this.remote = oParser.remote(o);
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null;
            this.index = new SearchIndex({
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            this.storage = this.cacheKey ? new PersistentStorage(this.cacheKey) : null;
        }
        Bloodhound.noConflict = function noConflict() {
            root.Bloodhound = old;
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            _loadPrefetch: function loadPrefetch(o) {
                var that = this, serialized, deferred;
                if (serialized = this._readFromStorage(o.thumbprint)) {
                    this.index.bootstrap(serialized);
                    deferred = $.Deferred().resolve();
                } else {
                    deferred = $.ajax(o.url, o.ajax).done(handlePrefetchResponse);
                }
                return deferred;
                function handlePrefetchResponse(resp) {
                    that.clear();
                    that.add(o.filter ? o.filter(resp) : resp);
                    that._saveToStorage(that.index.serialize(), o.thumbprint, o.ttl);
                }
            },
            _getFromRemote: function getFromRemote(query, cb) {
                var that = this, url, uriEncodedQuery;
                if (!this.transport) {
                    return;
                }
                query = query || "";
                uriEncodedQuery = encodeURIComponent(query);
                url = this.remote.replace ? this.remote.replace(this.remote.url, query) : this.remote.url.replace(this.remote.wildcard, uriEncodedQuery);
                return this.transport.get(url, this.remote.ajax, handleRemoteResponse);
                function handleRemoteResponse(err, resp) {
                    err ? cb([]) : cb(that.remote.filter ? that.remote.filter(resp) : resp);
                }
            },
            _cancelLastRemoteRequest: function cancelLastRemoteRequest() {
                this.transport && this.transport.cancel();
            },
            _saveToStorage: function saveToStorage(data, thumbprint, ttl) {
                if (this.storage) {
                    this.storage.set(keys.data, data, ttl);
                    this.storage.set(keys.protocol, location.protocol, ttl);
                    this.storage.set(keys.thumbprint, thumbprint, ttl);
                }
            },
            _readFromStorage: function readFromStorage(thumbprint) {
                var stored = {}, isExpired;
                if (this.storage) {
                    stored.data = this.storage.get(keys.data);
                    stored.protocol = this.storage.get(keys.protocol);
                    stored.thumbprint = this.storage.get(keys.thumbprint);
                }
                isExpired = stored.thumbprint !== thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            _initialize: function initialize() {
                var that = this, local = this.local, deferred;
                deferred = this.prefetch ? this._loadPrefetch(this.prefetch) : $.Deferred().resolve();
                local && deferred.done(addLocalToIndex);
                this.transport = this.remote ? new Transport(this.remote) : null;
                return this.initPromise = deferred.promise();
                function addLocalToIndex() {
                    that.add(_.isFunction(local) ? local() : local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
            },
            get: function get(query, cb) {
                var that = this, matches = [], cacheHit = false;
                matches = this.index.get(query);
                matches = this.sorter(matches).slice(0, this.limit);
                matches.length < this.limit ? cacheHit = this._getFromRemote(query, returnRemoteMatches) : this._cancelLastRemoteRequest();
                if (!cacheHit) {
                    (matches.length > 0 || !this.transport) && cb && cb(matches);
                }
                function returnRemoteMatches(remoteMatches) {
                    var matchesWithBackfill = matches.slice(0);
                    _.each(remoteMatches, function(remoteMatch) {
                        var isDuplicate;
                        isDuplicate = _.some(matchesWithBackfill, function(match) {
                            return that.dupDetector(remoteMatch, match);
                        });
                        !isDuplicate && matchesWithBackfill.push(remoteMatch);
                        return matchesWithBackfill.length < that.limit;
                    });
                    cb && cb(that.sorter(matchesWithBackfill));
                }
            },
            clear: function clear() {
                this.index.reset();
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.storage && this.storage.clear();
            },
            clearRemoteCache: function clearRemoteCache() {
                this.transport && Transport.resetCache();
            },
            ttAdapter: function ttAdapter() {
                return _.bind(this.get, this);
            }
        });
        return Bloodhound;
        function getSorter(sortFn) {
            return _.isFunction(sortFn) ? sort : noSort;
            function sort(array) {
                return array.sort(sortFn);
            }
            function noSort(array) {
                return array;
            }
        }
        function ignoreDuplicates() {
            return false;
        }
    })(this);
    var html = function() {
        return {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions"></span>',
            suggestion: '<div class="tt-suggestion"></div>'
        };
    }();
    var css = function() {
        "use strict";
        var css = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
            },
            input: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            inputWithNoHint: {
                position: "relative",
                verticalAlign: "top"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            },
            suggestions: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            },
            ltr: {
                left: "0",
                right: "auto"
            },
            rtl: {
                left: "auto",
                right: " 0"
            }
        };
        if (_.isMsie()) {
            _.mixin(css.input, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            });
        }
        if (_.isMsie() && _.isMsie() <= 7) {
            _.mixin(css.input, {
                marginTop: "-1px"
            });
        }
        return css;
    }();
    var EventBus = function() {
        "use strict";
        var namespace = "typeahead:";
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o) {
            var that = this, onBlur, onFocus, onKeydown, onInput;
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            onBlur = _.bind(this._onBlur, this);
            onFocus = _.bind(this._onFocus, this);
            onKeydown = _.bind(this._onKeydown, this);
            onInput = _.bind(this._onInput, this);
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
            if (!_.isMsie()) {
                this.$input.on("input.tt", onInput);
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                    }
                    _.defer(_.bind(that._onInput, that, $e));
                });
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
        }
        Input.normalizeQuery = function(str) {
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._checkInputValue();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault, hintValue, inputValue;
                switch (keyName) {
                  case "tab":
                    hintValue = this.getHint();
                    inputValue = this.getInputValue();
                    preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
                    break;

                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkInputValue: function checkInputValue() {
                var inputValue, areEquivalent, hasDifferentWhitespace;
                inputValue = this.getInputValue();
                areEquivalent = areQueriesEquivalent(inputValue, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;
                this.query = inputValue;
                if (!areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getQuery: function getQuery() {
                return this.query;
            },
            setQuery: function setQuery(query) {
                this.query = query;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value, silent) {
                this.$input.val(value);
                silent ? this.clearHint() : this._checkInputValue();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query, true);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            getLanguageDirection: function getLanguageDirection() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null;
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var datasetKey = "ttDataset", valueKey = "ttValue", datumKey = "ttDatum";
        function Dataset(o) {
            o = o || {};
            o.templates = o.templates || {};
            if (!o.source) {
                $.error("missing source");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            this.query = null;
            this.highlight = !!o.highlight;
            this.name = o.name || _.getUniqueId();
            this.source = o.source;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.$el = $(html.dataset.replace("%CLASS%", this.name));
        }
        Dataset.extractDatasetName = function extractDatasetName(el) {
            return $(el).data(datasetKey);
        };
        Dataset.extractValue = function extractDatum(el) {
            return $(el).data(valueKey);
        };
        Dataset.extractDatum = function extractDatum(el) {
            return $(el).data(datumKey);
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _render: function render(query, suggestions) {
                if (!this.$el) {
                    return;
                }
                var that = this, hasSuggestions;
                this.$el.empty();
                hasSuggestions = suggestions && suggestions.length;
                if (!hasSuggestions && this.templates.empty) {
                    this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                } else if (hasSuggestions) {
                    this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                }
                this.trigger("rendered");
                function getEmptyHtml() {
                    return that.templates.empty({
                        query: query,
                        isEmpty: true
                    });
                }
                function getSuggestionsHtml() {
                    var $suggestions, nodes;
                    $suggestions = $(html.suggestions).css(css.suggestions);
                    nodes = _.map(suggestions, getSuggestionNode);
                    $suggestions.append.apply($suggestions, nodes);
                    that.highlight && highlight({
                        className: "tt-highlight",
                        node: $suggestions[0],
                        pattern: query
                    });
                    return $suggestions;
                    function getSuggestionNode(suggestion) {
                        var $el;
                        $el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey, that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                        });
                        return $el;
                    }
                }
                function getHeaderHtml() {
                    return that.templates.header({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
                function getFooterHtml() {
                    return that.templates.footer({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
            },
            getRoot: function getRoot() {
                return this.$el;
            },
            update: function update(query) {
                var that = this;
                this.query = query;
                this.canceled = false;
                this.source(query, render);
                function render(suggestions) {
                    if (!that.canceled && query === that.query) {
                        that._render(query, suggestions);
                    }
                }
            },
            cancel: function cancel() {
                this.canceled = true;
            },
            clear: function clear() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = null;
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || "value";
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                empty: templates.empty && _.templatify(templates.empty),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return "<p>" + displayFn(context) + "</p>";
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Dropdown = function() {
        "use strict";
        function Dropdown(o) {
            var that = this, onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;
            o = o || {};
            if (!o.menu) {
                $.error("menu is required");
            }
            this.isOpen = false;
            this.isEmpty = true;
            this.datasets = _.map(o.datasets, initializeDataset);
            onSuggestionClick = _.bind(this._onSuggestionClick, this);
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
            this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt", ".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
            _.each(this.datasets, function(dataset) {
                that.$menu.append(dataset.getRoot());
                dataset.onSync("rendered", that._onRendered, that);
            });
        }
        _.mixin(Dropdown.prototype, EventEmitter, {
            _onSuggestionClick: function onSuggestionClick($e) {
                this.trigger("suggestionClicked", $($e.currentTarget));
            },
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
                this._removeCursor();
                this._setCursor($($e.currentTarget), true);
            },
            _onSuggestionMouseLeave: function onSuggestionMouseLeave() {
                this._removeCursor();
            },
            _onRendered: function onRendered() {
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);
                this.isEmpty ? this._hide() : this.isOpen && this._show();
                this.trigger("datasetRendered");
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _hide: function() {
                this.$menu.hide();
            },
            _show: function() {
                this.$menu.css("display", "block");
            },
            _getSuggestions: function getSuggestions() {
                return this.$menu.find(".tt-suggestion");
            },
            _getCursor: function getCursor() {
                return this.$menu.find(".tt-cursor").first();
            },
            _setCursor: function setCursor($el, silent) {
                $el.first().addClass("tt-cursor");
                !silent && this.trigger("cursorMoved");
            },
            _removeCursor: function removeCursor() {
                this._getCursor().removeClass("tt-cursor");
            },
            _moveCursor: function moveCursor(increment) {
                var $suggestions, $oldCursor, newCursorIndex, $newCursor;
                if (!this.isOpen) {
                    return;
                }
                $oldCursor = this._getCursor();
                $suggestions = this._getSuggestions();
                this._removeCursor();
                newCursorIndex = $suggestions.index($oldCursor) + increment;
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
                if (newCursorIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
                } else if (newCursorIndex < -1) {
                    newCursorIndex = $suggestions.length - 1;
                }
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex));
                this._ensureVisible($newCursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, menuScrollTop, menuHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                menuScrollTop = this.$menu.scrollTop();
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
                }
            },
            close: function close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed");
                }
            },
            open: function open() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
                }
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);
            },
            moveCursorUp: function moveCursorUp() {
                this._moveCursor(-1);
            },
            moveCursorDown: function moveCursorDown() {
                this._moveCursor(+1);
            },
            getDatumForSuggestion: function getDatumForSuggestion($el) {
                var datum = null;
                if ($el.length) {
                    datum = {
                        raw: Dataset.extractDatum($el),
                        value: Dataset.extractValue($el),
                        datasetName: Dataset.extractDatasetName($el)
                    };
                }
                return datum;
            },
            getDatumForCursor: function getDatumForCursor() {
                return this.getDatumForSuggestion(this._getCursor().first());
            },
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {
                return this.getDatumForSuggestion(this._getSuggestions().first());
            },
            update: function update(query) {
                _.each(this.datasets, updateDataset);
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.isEmpty = true;
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            isVisible: function isVisible() {
                return this.isOpen && !this.isEmpty;
            },
            destroy: function destroy() {
                this.$menu.off(".tt");
                this.$menu = null;
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Dropdown;
        function initializeDataset(oDataset) {
            return new Dataset(oDataset);
        }
    }();
    var Typeahead = function() {
        "use strict";
        var attrsKey = "ttAttrs";
        function Typeahead(o) {
            var $menu, $input, $hint;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            this.isActivated = false;
            this.autoselect = !!o.autoselect;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.$node = buildDom(o.input, o.withHint);
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-input");
            $hint = this.$node.find(".tt-hint");
            $input.on("blur.tt", function($e) {
                var active, isActive, hasActive;
                active = document.activeElement;
                isActive = $menu.is(active);
                hasActive = $menu.has(active).length > 0;
                if (_.isMsie() && (isActive || hasActive)) {
                    $e.preventDefault();
                    $e.stopImmediatePropagation();
                    _.defer(function() {
                        $input.focus();
                    });
                }
            });
            $menu.on("mousedown.tt", function($e) {
                $e.preventDefault();
            });
            this.eventBus = o.eventBus || new EventBus({
                el: $input
            });
            this.dropdown = new Dropdown({
                menu: $menu,
                datasets: o.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Input({
                input: $input,
                hint: $hint
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection();
        }
        _.mixin(Typeahead.prototype, {
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {
                var datum;
                if (datum = this.dropdown.getDatumForSuggestion($el)) {
                    this._select(datum);
                }
            },
            _onCursorMoved: function onCursorMoved() {
                var datum = this.dropdown.getDatumForCursor();
                this.input.setInputValue(datum.value, true);
                this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);
            },
            _onCursorRemoved: function onCursorRemoved() {
                this.input.resetInputValue();
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered() {
                this._updateHint();
            },
            _onOpened: function onOpened() {
                this._updateHint();
                this.eventBus.trigger("opened");
            },
            _onClosed: function onClosed() {
                this.input.clearHint();
                this.eventBus.trigger("closed");
            },
            _onFocused: function onFocused() {
                this.isActivated = true;
                this.dropdown.open();
            },
            _onBlurred: function onBlurred() {
                this.isActivated = false;
                this.dropdown.empty();
                this.dropdown.close();
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var cursorDatum, topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                if (cursorDatum) {
                    this._select(cursorDatum);
                    $e.preventDefault();
                } else if (this.autoselect && topSuggestionDatum) {
                    this._select(topSuggestionDatum);
                    $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var datum;
                if (datum = this.dropdown.getDatumForCursor()) {
                    this._select(datum);
                    $e.preventDefault();
                } else {
                    this._autocomplete(true);
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.dropdown.close();
                this.input.resetInputValue();
            },
            _onUpKeyed: function onUpKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorUp();
                this.dropdown.open();
            },
            _onDownKeyed: function onDownKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorDown();
                this.dropdown.open();
            },
            _onLeftKeyed: function onLeftKeyed() {
                this.dir === "rtl" && this._autocomplete();
            },
            _onRightKeyed: function onRightKeyed() {
                this.dir === "ltr" && this._autocomplete();
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this.input.clearHintIfInvalid();
                query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();
                this.dropdown.open();
                this._setLanguageDirection();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
                this.dropdown.open();
            },
            _setLanguageDirection: function setLanguageDirection() {
                var dir;
                if (this.dir !== (dir = this.input.getLanguageDirection())) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdown.setLanguageDirection(dir);
                }
            },
            _updateHint: function updateHint() {
                var datum, val, query, escapedQuery, frontMatchRegEx, match;
                datum = this.dropdown.getDatumForTopSuggestion();
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    val = this.input.getInputValue();
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(datum.value);
                    match ? this.input.setHint(val + match[1]) : this.input.clearHint();
                } else {
                    this.input.clearHint();
                }
            },
            _autocomplete: function autocomplete(laxCursor) {
                var hint, query, isCursorAtEnd, datum;
                hint = this.input.getHint();
                query = this.input.getQuery();
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
                if (hint && query !== hint && isCursorAtEnd) {
                    datum = this.dropdown.getDatumForTopSuggestion();
                    datum && this.input.setInputValue(datum.value);
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);
                }
            },
            _select: function select(datum) {
                this.input.setQuery(datum.value);
                this.input.setInputValue(datum.value, true);
                this._setLanguageDirection();
                this.eventBus.trigger("selected", datum.raw, datum.datasetName);
                this.dropdown.close();
                _.defer(_.bind(this.dropdown.empty, this.dropdown));
            },
            open: function open() {
                this.dropdown.open();
            },
            close: function close() {
                this.dropdown.close();
            },
            setVal: function setVal(val) {
                val = _.toStr(val);
                if (this.isActivated) {
                    this.input.setInputValue(val);
                } else {
                    this.input.setQuery(val);
                    this.input.setInputValue(val, true);
                }
                this._setLanguageDirection();
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            destroy: function destroy() {
                this.input.destroy();
                this.dropdown.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
            }
        });
        return Typeahead;
        function buildDom(input, withHint) {
            var $input, $wrapper, $dropdown, $hint;
            $input = $(input);
            $wrapper = $(html.wrapper).css(css.wrapper);
            $dropdown = $(html.dropdown).css(css.dropdown);
            $hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));
            $hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", true).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
            $input.data(attrsKey, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: false
            }).css(withHint ? css.input : css.inputWithNoHint);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function destroyDomStructure($node) {
            var $input = $node.find(".tt-input");
            _.each($input.data(attrsKey), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);
            $node.remove();
        }
    }();
    (function() {
        "use strict";
        var old, typeaheadKey, methods;
        old = $.fn.typeahead;
        typeaheadKey = "ttTypeahead";
        methods = {
            initialize: function initialize(o, datasets) {
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                return this.each(attach);
                function attach() {
                    var $input = $(this), eventBus, typeahead;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    typeahead = new Typeahead({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                        }),
                        withHint: _.isUndefined(o.hint) ? true : !!o.hint,
                        minLength: o.minLength,
                        autoselect: o.autoselect,
                        datasets: datasets
                    });
                    $input.data(typeaheadKey, typeahead);
                }
            },
            open: function open() {
                return this.each(openTypeahead);
                function openTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.open();
                    }
                }
            },
            close: function close() {
                return this.each(closeTypeahead);
                function closeTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.close();
                    }
                }
            },
            val: function val(newVal) {
                return !arguments.length ? getVal(this.first()) : this.each(setVal);
                function setVal() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.setVal(newVal);
                    }
                }
                function getVal($input) {
                    var typeahead, query;
                    if (typeahead = $input.data(typeaheadKey)) {
                        query = typeahead.getVal();
                    }
                    return query;
                }
            },
            destroy: function destroy() {
                return this.each(unattach);
                function unattach() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.destroy();
                        $input.removeData(typeaheadKey);
                    }
                }
            }
        };
        $.fn.typeahead = function(method) {
            var tts;
            if (methods[method] && method !== "initialize") {
                tts = this.filter(function() {
                    return !!$(this).data(typeaheadKey);
                });
                return methods[method].apply(tts, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
    })();
})(window.jQuery);