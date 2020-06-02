/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		classMigrate,
		customWidth,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthTypeTablet,
		widthTypeMobile,
		widthTypeDesktop,
		tColumnsDesktop,
		tColumnsTablet,
		tColumnsMobile,
		iconColor,
		bulletColor,
		iconSize,
		//Color
		backgroundColor,
		linkColor,
		linkHoverColor,
		scrollToTopColor,
		scrollToTopBgColor,
		headingColor,
		//Margin
		vMarginDesktop,
		vMarginTablet,
		vMarginMobile,
		hMarginDesktop,
		hMarginTablet,
		hMarginMobile,
		marginTypeMobile,
		marginTypeTablet,
		marginTypeDesktop,
		//Padding,
		vPaddingDesktop,
		vPaddingTablet,
		vPaddingMobile,
		hPaddingDesktop,
		hPaddingTablet,
		hPaddingMobile,
		headingBottom,
		paddingTypeDesktop,
		paddingTypeTablet,
		paddingTypeMobile,
		//Padding,
		contentPaddingDesktop,
		contentPaddingTablet,
		contentPaddingMobile,
		contentPaddingTypeDesktop,
		contentPaddingTypeTablet,
		contentPaddingTypeMobile,
		//Border
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		//Typography
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontSubset,
		fontSize,
		fontSizeType,
		fontSizeTablet,
		fontSizeMobile,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,

		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontSubset,
		headingFontSize,
		headingFontSizeType,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingLineHeightType,
		headingLineHeight,
		headingLineHeightTablet,
		headingLineHeightMobile,
		disableBullets,
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	selectors = {
		" .uagb-toc__list-wrap ul li a" : {
			"font-size" : generateCSSUnit( fontSize, fontSizeType ),
			"line-height" : generateCSSUnit( lineHeight, lineHeightType ),
			"font-family": fontFamily,
			"font-weight": fontWeight,
			"color": linkColor,
		},
		" .uagb-toc__title" : {
			"font-size" : generateCSSUnit( headingFontSize, headingFontSizeType ),
			"line-height" : generateCSSUnit( headingLineHeight, headingLineHeightType ),
			"font-family": headingFontFamily,
			"font-weight": headingFontWeight,
			"color": headingColor,
			"margin-bottom" : generateCSSUnit( headingBottom, "px" )
		},
		" .uagb-toc__list-wrap ul li a:hover" : {
			"color": linkHoverColor,
		},
		" .uagb-toc__wrap" : {
			"border-style": borderStyle,
			"border-width": generateCSSUnit( borderWidth, "px" ),
			"border-color": borderColor,
			"border-radius": generateCSSUnit( borderRadius, "px" ),
			"padding-left": generateCSSUnit( hPaddingDesktop, paddingTypeDesktop ),
			"padding-right": generateCSSUnit( hPaddingDesktop, paddingTypeDesktop ),
			"padding-top": generateCSSUnit( vPaddingDesktop, paddingTypeDesktop ),
			"padding-bottom": generateCSSUnit( vPaddingDesktop, paddingTypeDesktop ),
			"background": backgroundColor
		},
		" .uagb-toc__list-wrap ul.uagb-toc__list:first-child" : {
			"margin-left": generateCSSUnit( hMarginDesktop, marginTypeDesktop ),
			"margin-right": generateCSSUnit( hMarginDesktop, marginTypeDesktop ),
			"margin-top": generateCSSUnit( vMarginDesktop, marginTypeDesktop ),
			"margin-bottom": generateCSSUnit( vMarginDesktop, marginTypeDesktop ),
		},
		" .uagb-toc__list-wrap > ul.uagb-toc__list > li:first-child" : {
			"padding-top": 0
		},
		" .uagb-toc__list-wrap > ul.uagb-toc__list li" : {
		    "color" : bulletColor
		},
		" .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child" : {
		    "padding-bottom": 0
		},
		" .uagb-toc__list-wrap ul.uagb-toc__list > li" : {
		    "padding-top": "calc( " + generateCSSUnit( contentPaddingDesktop, contentPaddingTypeDesktop ) + " / 2 )",
			"padding-bottom": "calc( " + generateCSSUnit( contentPaddingDesktop, contentPaddingTypeDesktop ) + " / 2 )"
		},
		" .uag-toc__collapsible-wrap svg" : {
			"width" : generateCSSUnit( iconSize, "px" ),
			"height" : generateCSSUnit( iconSize, "px" ),
			"fill" : iconColor
		}
	}

	selectors[" .uagb-toc__list-wrap"] = {
		'column-count': tColumnsDesktop,
		'overflow': 'hidden'
	}

	if ( customWidth ) {
		selectors[" .uagb-toc__wrap"]["width"] = generateCSSUnit( widthDesktop, widthTypeDesktop )
	}

	if ( disableBullets ) {
		selectors[" .uagb-toc__list"] = {
			'list-style-type': 'none'
		}
		selectors[" .uagb-toc__list .uagb-toc__list"] = {
			'list-style-type': 'none'
		}
	}

	tablet_selectors = {
		" .uagb-toc__list-wrap ul li a" : {
			"font-size": generateCSSUnit( fontSizeTablet, fontSizeType ),
			"line-height": generateCSSUnit( lineHeightTablet, lineHeightType ),
		},
		" .uagb-toc__title" : {
			"font-size" : generateCSSUnit( headingFontSizeTablet, headingFontSizeType ),
			"line-height" : generateCSSUnit( headingLineHeightTablet, headingLineHeightType ),
		},
		" .uagb-toc__wrap" : {
			"width" : generateCSSUnit( widthTablet, widthTypeTablet ),
			"padding-left": generateCSSUnit( hPaddingTablet, paddingTypeTablet ),
			"padding-right": generateCSSUnit( hPaddingTablet, paddingTypeTablet ),
			"padding-top": generateCSSUnit( vPaddingTablet, paddingTypeTablet ),
			"padding-bottom": generateCSSUnit( vPaddingTablet, paddingTypeTablet ),
		},
		" .uagb-toc__list-wrap" : {
			'column-count': tColumnsTablet,
			'overflow': 'hidden'
		},

		" .uagb-toc__list-wrap > ul.uagb-toc__list > li:first-child" : {
			"padding-top": generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet )
		},
		" .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child" : {
		    "padding-bottom": generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet )
		},
		" .uagb-toc__list-wrap ul.uagb-toc__list > li" : {
		    "padding-top": "calc( " + generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet ) + " / 2 )",
		    "padding-bottom": "calc( " + generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet ) + " / 2 )"
		},
	}

	mobile_selectors = {
		" .uagb-toc__list-wrap ul li a" : {
			"font-size": generateCSSUnit( fontSizeMobile, fontSizeType ),
			"line-height": generateCSSUnit( lineHeightMobile, lineHeightType ),
		},
		" .uagb-toc__title" : {
			"font-size" : generateCSSUnit( headingFontSizeMobile, headingFontSizeType ),
			"line-height" : generateCSSUnit( headingLineHeightMobile, headingLineHeightType ),
		},
		" .uagb-toc__wrap" : {
			"width" : generateCSSUnit( widthMobile, widthTypeMobile ),
			"padding-left": generateCSSUnit( hPaddingMobile, paddingTypeMobile ),
			"padding-right": generateCSSUnit( hPaddingMobile, paddingTypeMobile ),
			"padding-top": generateCSSUnit( vPaddingMobile, paddingTypeMobile ),
			"padding-bottom": generateCSSUnit( vPaddingMobile, paddingTypeMobile ),
		},
		" .uagb-toc__list-wrap" : {
			'column-count': tColumnsMobile,
			'overflow': 'hidden'
		},		
		" .uagb-toc__list-wrap > ul.uagb-toc__list > li:first-child" : {
		    "padding-top": generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile )
		},
		" .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child" : {
		    "padding-bottom": generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile )
		},
		" .uagb-toc__list-wrap ul.uagb-toc__list > li" : {
		    "padding-top": "calc( " + generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile ) + " / 2 )",
		    "padding-bottom": "calc( " + generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile ) + " / 2 )"
		},
	}

	var id = `#uagb-toc-${ props.clientId }`
	if ( classMigrate ) {
		id = `.uagb-block-${ props.clientId }`
	}

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	if ( "" != scrollToTopColor ) {
		styling_css += ".uagb-toc__scroll-top { color: " + scrollToTopColor + "; }"
	}

	if ( "" != scrollToTopBgColor ) {
		styling_css += ".uagb-toc__scroll-top.uagb-toc__show-scroll { background: " + scrollToTopBgColor + "; }"
	}

	return styling_css
}

export default styling
