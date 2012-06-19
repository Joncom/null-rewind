ig.module('game.main')

.requires(

'impact.game',

'game.entities.deep-sand'

)

.defines(function() {

	MyGame = ig.Game.extend({

		timer: new ig.Timer(),

		// Rewind after how many seconds?
		loop: 1.5,

		init: function() {

			// Spawn two deep-sand entities.
			this.entityA = this.spawnEntity(EntityDeepSand, 8, 8, {});
			this.entityB = this.spawnEntity(EntityDeepSand, 40, 8, {
				startAtEnd: true
			});

			// Set the timer.
			this.timer.set(this.loop);
		},

		update: function() {
			// Update all entities and backgroundMaps
			this.parent();

			if (this.timer.delta() >= 0) {

				// Start the timer over again.
				this.timer.set(this.loop);

				// Rewind entity animations.
				this.entityA.currentAnim.rewind();
				this.entityB.currentAnim.rewind();
			}
		},

		draw: function() {
			// Draw all entities and backgroundMaps
			this.parent();
		}
	});


	// Start the Game with 60fps, a resolution of 320x240, scaled
	// up by a factor of 2
	ig.main('#canvas', MyGame, 60, 64, 24, 4);

});