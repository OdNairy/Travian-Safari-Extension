if (window.top === window) {
	
	$LAB.script(safari.extension.baseURI + 'travian.js')
	// .script(safari.extension.baseURI + 'jquery-2.0.3.js')
	.script(safari.extension.baseURI + 'market.js')
	.wait(function() {
	
		// safari.self.tab.dispatchMessage("village_links");
		village_links();
		market_main();
		// notify("My title","My body")
	})
};