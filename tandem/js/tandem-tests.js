// Copyright 2017, University of Colorado Boulder

/**
 * Unit tests for tandem. Please run once in phet brand and once in brand=phet-io to cover all functionality.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  require( 'TANDEM/PhetioObjectTests' );
  require( 'TANDEM/phetioInheritTests' );

  // Since our tests are loaded asynchronously, we must direct QUnit to begin the tests
  QUnit.start();
} );