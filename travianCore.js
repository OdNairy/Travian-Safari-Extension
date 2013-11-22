if (window.top === window) {
	
	$LAB
    .script(safari.extension.baseURI + 'travian.js')
	.script(safari.extension.baseURI + 'market.js')
	.script(safari.extension.baseURI + 'images.js')
	.wait(function() {

		// safari.self.tab.dispatchMessage("village_links");
		village_links();
//        console.log(image);
		market_main();
		// notify("My title","My body")
	})
	// .script(safari.extension.baseURI + 'jquery-2.0.3.js')
};