/**
 * Returns Dynamic Generated CSS
 */

import { generateCSS, generateCSSUnit, hexToRgba } from "../../components/build-css"

function styling( props ) {

	const {
		titleSpace,
		//Icon
		iconPosition,
		iconSpace,
		iconFontSize,
		iconFontSizeType,
		iconFontSizeMobile,
		iconFontSizeTablet,
		//Colors
		titleColor,
		titleHoverColor,
		prefixColor,
		prefixHoverColor,
		iconColor,
		iconHoverColor,
		//Border
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		//Background
		vPadding,
		hPadding,
		hPaddingMobile,
		vPaddingMobile,
		hPaddingTablet,
		vPaddingTablet,
		paddingType,
		backgroundType,
		backgroundColor,
		backgroundHoverColor,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		backgroundOpacity,
		backgroundHoverOpacity,
		//Typography
		titleFontFamily,
		titleFontWeight,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		prefixFontFamily,
		prefixFontWeight,
		prefixFontSize,
		prefixFontSizeType,
		prefixFontSizeTablet,
		prefixFontSizeMobile,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightTablet,
		prefixLineHeightMobile,
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	let icon_color = ( "" == iconColor ) ? titleColor : iconColor
	let icon_hover_color = ( "" == iconHoverColor ) ? titleHoverColor : iconHoverColor

	selectors = {
		" .uagb-marketing-btn__title-wrap" : {
			"margin-bottom" : generateCSSUnit( titleSpace, "px" )
		},
		" .block-editor-rich-text__editable.uagb-marketing-btn__title" : {
			"font-size" : generateCSSUnit( titleFontSize, titleFontSizeType ),
			"line-height" : generateCSSUnit( titleLineHeight, titleLineHeightType ),
			"font-family": titleFontFamily,
			"font-weight": titleFontWeight,
			"color": titleColor,
		},
		" .uagb-marketing-btn__icon-wrap svg" : {
			"fill" : icon_color
		},
		" .uagb-marketing-btn__icon-wrap" : {
			"width" : generateCSSUnit( iconFontSize, iconFontSizeType ),
			"height" : generateCSSUnit( iconFontSize, iconFontSizeType )
		},
		" .block-editor-rich-text__editable.uagb-marketing-btn__prefix" : {
			"font-size" : generateCSSUnit( prefixFontSize, prefixFontSizeType ),
			"line-height" : generateCSSUnit( prefixLineHeight, prefixLineHeightType ),
			"font-family": prefixFontFamily,
			"font-weight": prefixFontWeight,
			"color": prefixColor,
		},
		" .uagb-marketing-btn__link:hover .block-editor-rich-text__editable.uagb-marketing-btn__title" : {
			"color": titleHoverColor,
		},
		" .uagb-marketing-btn__link:hover .block-editor-rich-text__editable.uagb-marketing-btn__prefix" : {
			"color": prefixHoverColor,
		},
		" .uagb-marketing-btn__link:hover .uagb-marketing-btn__icon-wrap svg" : {
			"fill" : icon_hover_color
		},
		" .uagb-marketing-btn__link" : {
			"padding-left" : generateCSSUnit( hPadding, paddingType ),
			"padding-right" : generateCSSUnit( hPadding, paddingType ),
			"padding-top" : generateCSSUnit( vPadding, paddingType ),
			"padding-bottom" : generateCSSUnit( vPadding, paddingType ),
			"border-style": borderStyle,
			"border-width": generateCSSUnit( borderWidth, "px" ),
			"border-color": borderColor,
			"border-radius": generateCSSUnit( borderRadius, "px" ),
		},
		" .uagb-marketing-btn__link:hover" : {
			"border-color": borderHoverColor
		},
	}

	if ( "transparent" == backgroundType ) {

		selectors[" .uagb-marketing-btn__link"]["background"] = "transparent"

	} else if ( "color" == backgroundType ) {

		selectors[" .uagb-marketing-btn__link"]["background"] = hexToRgba( backgroundColor, backgroundOpacity )

		// Hover Background
		selectors[" .uagb-marketing-btn__link:hover"]["background"] = hexToRgba( backgroundHoverColor, backgroundHoverOpacity )

	} else if ( "gradient" == backgroundType ) {

		selectors[" .uagb-marketing-btn__link"]["background-color"] = "transparent"

		if ( "linear" === gradientType ) {

			selectors[" .uagb-marketing-btn__link"]["background-image"] = `linear-gradient(${ gradientAngle }deg, ${ hexToRgba( gradientColor1, backgroundOpacity ) } ${ gradientLocation1 }%, ${ hexToRgba( gradientColor2, backgroundOpacity ) } ${ gradientLocation2 }%)`
		} else {

			selectors[" .uagb-marketing-btn__link"]["background-image"] = `radial-gradient( at center center, ${ hexToRgba( gradientColor1, backgroundOpacity ) } ${ gradientLocation1 }%, ${ hexToRgba( gradientColor2, backgroundOpacity ) } ${ gradientLocation2 }%)`
		}

	}

	let margin_type = ( "after" == iconPosition ) ? "margin-left" : "margin-right"

	selectors[" .uagb-marketing-btn__icon-wrap"][margin_type] = generateCSSUnit( iconSpace, "px" )

	tablet_selectors = {
		" .block-editor-rich-text__editable.uagb-marketing-btn__title" : {
			"font-size": generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			"line-height": generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
		},
		" .block-editor-rich-text__editable.uagb-marketing-btn__prefix" : {
			"font-size": generateCSSUnit( prefixFontSizeTablet, prefixFontSizeType ),
			"line-height": generateCSSUnit( prefixLineHeightTablet, prefixLineHeightType ),
		},
		" .uagb-marketing-btn__icon-wrap" : {
			"width" : generateCSSUnit( iconFontSizeTablet, iconFontSizeType ),
			"height" : generateCSSUnit( iconFontSizeTablet, iconFontSizeType )
		},
		" .uagb-marketing-btn__link" : {
			"padding-left" : generateCSSUnit( hPaddingTablet, paddingType ),
			"padding-right" : generateCSSUnit( hPaddingTablet, paddingType ),
			"padding-top" : generateCSSUnit( vPaddingTablet, paddingType ),
			"padding-bottom" : generateCSSUnit( vPaddingTablet, paddingType ),
		},
	}

	mobile_selectors = {
		" .block-editor-rich-text__editable.uagb-marketing-btn__title" : {
			"font-size": generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			"line-height": generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
		},
		" .block-editor-rich-text__editable.uagb-marketing-btn__prefix" : {
			"font-size": generateCSSUnit( prefixFontSizeMobile, prefixFontSizeType ),
			"line-height": generateCSSUnit( prefixLineHeightMobile, prefixLineHeightType ),
		},
		" .uagb-marketing-btn__icon-wrap" : {
			"width" : generateCSSUnit( iconFontSizeMobile, iconFontSizeType ),
			"height" : generateCSSUnit( iconFontSizeMobile, iconFontSizeType )
		},
		" .uagb-marketing-btn__link" : {
			"padding-left" : generateCSSUnit( hPaddingMobile, paddingType ),
			"padding-right" : generateCSSUnit( hPaddingMobile, paddingType ),
			"padding-top" : generateCSSUnit( vPaddingMobile, paddingType ),
			"padding-bottom" : generateCSSUnit( vPaddingMobile, paddingType ),
		},
	}

	var id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
