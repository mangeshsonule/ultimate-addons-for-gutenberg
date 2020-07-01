/**
 * Returns Dynamic Generated CSS
 */

import { generateCSS, generateCSSUnit } from "../../components/build-css"

function styling( props ) {

	const {
		fontFamily,
		fontWeight,
		size,
		vPadding,
		hPadding,
		borderWidth,
		borderRadius,
		borderStyle,
		borderColor,
		borderHColor,
		color,
		background,
		hColor,
		hBackground,
		sizeType,
		sizeMobile,
		sizeTablet,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		inheritFromTheme,
		iconSpace
	} = props.attributes;

	var tablet_selectors = {}
	var mobile_selectors = {}
	var selectors = {}

	if ( ! inheritFromTheme ) {
		selectors = {
			" .uagb-buttons-repeater" : {
				"font-size" : generateCSSUnit( size, sizeType ),
				"line-height" : generateCSSUnit( lineHeight, lineHeightType ),
				"font-family": fontFamily,
				"font-weight": fontWeight,
				"border-width": generateCSSUnit( borderWidth, "px" ),
				"border-style": borderStyle,
				"border-color": borderColor,
				"border-radius" : generateCSSUnit( borderRadius, "px" ),
				"background": background,
				"padding" : vPadding + "px " + hPadding + "px",
			},
			" .uagb-buttons-repeater:hover" : {
				"background": hBackground,
				"border-width": generateCSSUnit( borderWidth, "px" ),
				"border-style": borderStyle,
				"border-color": borderHColor,
			},
			" .uagb-buttons-repeater a.uagb-button__link" : {
				"color": color
			},
			" .uagb-buttons-repeater:hover a.uagb-button__link" : {
				"color": hColor
			},
			" .uagb-buttons-repeater:hover .uagb-button__link": {
				"color": hColor
			},
			" .uagb-buttons-repeater .uagb-button__link" : {
				"color": color
			},	
		}

		mobile_selectors[" .uagb-buttons-repeater"] = {
			"font-size" : generateCSSUnit( sizeMobile, sizeType ),
			"line-height" : generateCSSUnit( lineHeightMobile, lineHeightType ),
		}
	
		tablet_selectors[" .uagb-buttons-repeater"] = {
			"font-size" : generateCSSUnit( sizeTablet, sizeType ),
			"line-height" : generateCSSUnit( lineHeightTablet, lineHeightType ),
		}
	}

	selectors[" .uagb-button__icon"] = {
		"width" : generateCSSUnit( size, sizeType ),
	}

	if ( ! inheritFromTheme ) {
		selectors[" .uagb-button__icon"]["color"] = color
	}

	selectors[" .uagb-button__icon-position-after"] = {
		'margin-left' : generateCSSUnit( iconSpace, 'px' )
	}

	selectors[" .uagb-button__icon-position-before"] = {
		'margin-right' : generateCSSUnit( iconSpace, 'px' )
	}

	mobile_selectors[" .uagb-button__icon"] = {
		"width" : generateCSSUnit( sizeMobile, sizeType ),
		"height" : generateCSSUnit( sizeMobile, sizeType ),
	}

	tablet_selectors[" .uagb-button__icon"] = {
		"width" : generateCSSUnit( sizeTablet, sizeType ),
		"height" : generateCSSUnit( sizeTablet, sizeType ),
	}

	var id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`
	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
