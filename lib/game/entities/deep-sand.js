ig.module('game.entities.deep-sand')

.requires('impact.entity')

.defines(function() {

	EntityDeepSand = ig.Entity.extend({

		// Load image resource.
		animSheet: new ig.AnimationSheet('media/rs.deep-sand.png', 16, 8),

		startAtEnd: false,

		init: function(x, y, settings) {
			this.parent(x, y, settings);

			// Define animation sequence.
			this.addAnim('sand', (1 / 60), [1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 0], true);

			// Set current animation.
			this.currentAnim = this.anims.sand;

			if(this.startAtEnd) {

				// Start at the very last frame.
				this.currentAnim.gotoFrame(this.currentAnim.sequence.length-1);
			}
		}


	});
});