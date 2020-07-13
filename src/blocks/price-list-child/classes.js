/**
 * Returns Dynamic Generated Classes
 */

function PositionClasses( attributes ) {

	var iconimgStyle_class = ""

	let imge_cnt = 0

	
		iconimgStyle_class += "uagb-rm__image-position-"+attributes.imagePosition+ " "
	

	iconimgStyle_class += " uagb-rm__align-"+attributes.headingAlign+ " "

	if( "left" == attributes.imagePosition  || "right" == attributes.imagePosition ){
    	iconimgStyle_class += "uagb-rm__image-aligned-"+attributes.imageAlignment+ " "
		if( attributes.stack !== "none" ){
			iconimgStyle_class +="uagb-rm-stacked-"+attributes.stack+ " "
			if( attributes.imagePosition === "right" ){
				iconimgStyle_class += "uagb-rm-reverse-order-"+attributes.stack+ " "
			}
		}
	}

	iconimgStyle_class += "uagb-rm__desk-column-"+attributes.columns+ " "
	iconimgStyle_class += "uagb-rm__tablet-column-"+attributes.tcolumns+ " "
	iconimgStyle_class += "uagb-rm__mobile-column-"+attributes.mcolumns+ " "

	return [
		iconimgStyle_class
	]
}

export default PositionClasses