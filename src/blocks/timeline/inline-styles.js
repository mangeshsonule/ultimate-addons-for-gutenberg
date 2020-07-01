/**
 * Returns Dynamic Generated CSS
 */

import { generateCSS, generateCSSUnit } from "../../components/build-css"

function contentTimelineStyle( props ) {
	const {
		dateBottomspace,
		backgroundColor,
		separatorColor,
		separatorFillColor,
		separatorBg,
		separatorBorder,
		borderFocus,
		verticalSpace,
		horizontalSpace,
		separatorwidth,
		borderwidth,
		connectorBgsize,
		borderRadius,
		bgPadding,
		width,
		readMoreText,
		icon,
		iconColor,
		dateFontsizeType,
		dateFontsize,
		dateFontsizeTablet,
		dateFontsizeMobile,
		dateFontFamily,
		dateFontWeight,
		dateFontSubset,
		dateLineHeightType,
		dateLineHeight,
		dateLineHeightTablet,
		dateLineHeightMobile,
		dateLoadGoogleFonts,
		dateColor,
		iconSize,
		iconFocus,
		iconBgFocus,
		block_id,
		headFontSizeType,
		headFontSize,
		headFontSizeTablet,
		headFontSizeMobile,
		headFontFamily,
		headFontWeight,
		headFontSubset,
		headLineHeightType,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
		headLoadGoogleFonts,
		align,
		headingColor,
		headSpace,
		subHeadFontSizeType,
		subHeadFontSize,
		subHeadFontSizeTablet,
		subHeadFontSizeMobile,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontSubset,
		subHeadLineHeightType,
		subHeadLineHeight,
		subHeadLineHeightTablet,
		subHeadLineHeightMobile,
		subHeadLoadGoogleFonts,
		subHeadingColor,
		authorSpace,
		authorColor,
		authorFontSizeType,
		authorFontSize,
		authorFontSizeTablet,
		authorFontSizeMobile,
		authorFontFamily,
		authorFontWeight,
		authorFontSubset,
		authorLineHeightType,
		authorLineHeight,
		authorLineHeightTablet,
		authorLineHeightMobile,
		authorLoadGoogleFonts,
		ctaColor,
		ctaFontSizeType,
		ctaFontSize,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
		ctaFontFamily,
		ctaFontWeight,
		ctaFontSubset,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaLoadGoogleFonts,
		ctaBackground,
	} = props.attributes

	var resp_selectors = "left"

	var selectors = {
		" .uagb-timeline__heading" : {
			"font-size" : generateCSSUnit( headFontSize, headFontSizeType ),
			"font-family": headFontFamily,
			"font-weight": headFontWeight,
			"line-height": generateCSSUnit( headLineHeight, headLineHeightType ),
			"text-align": align,
			"color": headingColor,
		},
		" .uagb-timeline__heading a" : {
			"font-size" : generateCSSUnit( headFontSize, headFontSizeType ),
			"font-family": headFontFamily,
			"font-weight": headFontWeight,
			"line-height": generateCSSUnit( headLineHeight, headLineHeightType ),
			"text-align": align,
			"color": headingColor,
		},
		" .uagb-timeline__heading-text" : {
			"margin-bottom" : generateCSSUnit( headSpace, "px" ),
		},
		" .uagb-timeline-desc-content" : {
			"font-size" : generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			"font-family": subHeadFontFamily,
			"font-weight": subHeadFontWeight,
			"line-height": generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			"text-align": align,
			"color": subHeadingColor,
		},
		" .uagb-timeline__events-new" : {
			"text-align": align,
		},
		" .uagb-timeline__date-inner" : {
			"text-align": align,
		},
		" .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-left-color" : backgroundColor,
		},
		" .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-left-color" : backgroundColor
		},
		" .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
			"border-right-color" : backgroundColor
		},
		" .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
			"border-right-color" : backgroundColor
		},
		" .uagb-timeline__line__inner" : {
			"background-color" : separatorFillColor
		},
		" .uagb-timeline__line" : {
			"background-color" : separatorColor,
			"width" : generateCSSUnit( separatorwidth, "px" ),
		},
		" .uagb-timeline__right-block .uagb-timeline__line" : {
			"right" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__left-block .uagb-timeline__line" : {
			"left" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__center-block .uagb-timeline__line" : {
			"right" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__marker" : {
			"background-color" : separatorBg,
			"min-height": generateCSSUnit( connectorBgsize, "px" ),
			"min-width" : generateCSSUnit( connectorBgsize, "px" ),
			"line-height" : generateCSSUnit( connectorBgsize, "px" ),
			"border": borderwidth+"px solid"+separatorBorder,
		},
		" .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow" : {
			"height" : generateCSSUnit( connectorBgsize, "px" ),
		},
		" .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow" : {
			"height" : generateCSSUnit( connectorBgsize, "px" ),
		},
		" .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow" : {
			"height" : generateCSSUnit( connectorBgsize, "px" ),
		},
		" .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow" : {
			"height" : generateCSSUnit( connectorBgsize, "px" ),
		},
		" .uagb-timeline__center-block .uagb-timeline__marker" : {
			"margin-left" : generateCSSUnit( horizontalSpace, "px" ),
			"margin-right": generateCSSUnit( horizontalSpace, "px" ),
		},
		" .uagb-timeline__field:not(:last-child)" : {
			"margin-bottom" : generateCSSUnit( verticalSpace, "px" ),
		},
		" .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"margin-bottom" : generateCSSUnit( dateBottomspace, "px" ),
			"color": dateColor,
			"font-size" : generateCSSUnit( dateFontsize, dateFontsizeType ),
			"font-family": dateFontFamily,
			"font-weight": dateFontWeight,
			"line-height": generateCSSUnit( dateLineHeight, dateLineHeightType ),
			"text-align": align,
		},
		" .uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left" : {
			"margin-left" : generateCSSUnit( horizontalSpace, "px" ),
		},
		" .uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right" : {
			"margin-right" : generateCSSUnit( horizontalSpace, "px" ),
		},
		" .uagb-timeline__date-new" : {
			"color": dateColor,
			"font-size" : generateCSSUnit( dateFontsize, dateFontsizeType ),
			"font-family": dateFontFamily,
			"font-weight": dateFontWeight,
			"line-height": generateCSSUnit( dateLineHeight, dateLineHeightType ),
		},
		" .uagb-timeline__events-inner-new" : {
			"background-color" : backgroundColor,
			"border-radius" : generateCSSUnit( borderRadius, "px" ),
			"padding": generateCSSUnit( bgPadding, "px" ),
		},
		" .uagb-timeline__main .uagb-timeline__icon-new" : {
			"color": iconColor,
			"font-size" : generateCSSUnit( iconSize, "px" ),
			"width": generateCSSUnit( iconSize, "px" ),
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon" : {
			"background" : iconBgFocus,
			"border-color": borderFocus,
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new" : {
			"color": iconFocus,
		},
		" .uagb-timeline__main .uagb-timeline__icon-new svg" : {
			"fill": iconColor,
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new svg" : {
			"fill": iconFocus,
		},

		//Author and CTA
		" .uagb-timeline__author" : {
			"margin-bottom" : generateCSSUnit( authorSpace, "px" ),
			"text-align": align,
		},
		" .uagb-timeline__author .dashicons-admin-users" : {
			"font-size" : generateCSSUnit( authorFontSize, authorFontSizeType ),			
			"font-weight": authorFontWeight,
			"line-height": generateCSSUnit( authorLineHeight, authorLineHeightType ),
			"color": authorColor,
		},
		" .uagb-timeline__author-link" :{
			"font-size" : generateCSSUnit( authorFontSize, authorFontSizeType ),
			"font-family": authorFontFamily,
			"font-weight": authorFontWeight,
			"line-height": generateCSSUnit( authorLineHeight, authorLineHeightType ),
			"color": authorColor,
		},

		" .uagb-timeline__link_parent" :{
			"text-align": align,
		},
		" .uagb-timeline__link" :{
			"font-size" : generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			"font-family": ctaFontFamily,
			"font-weight": ctaFontWeight,
			"line-height": generateCSSUnit( ctaLineHeight, ctaLineHeightType ),
			"color": ctaColor,
			"background-color": ctaBackground,
		}
	}

	/* Generate Responsive CSS for timeline */
	var tablet_selectors = {
		" .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"font-size" : generateCSSUnit( dateFontsizeTablet, dateFontsizeType ),
			"line-height": generateCSSUnit( dateLineHeightTablet, dateLineHeightType ),
		},
		" .uagb-timeline__date-new" : {
			"font-size" : generateCSSUnit( dateFontsizeTablet, dateFontsizeType ),
			"line-height": generateCSSUnit( dateLineHeightTablet, dateLineHeightType ),
		},
		" .uagb-timeline__heading" : {
			"font-size" : generateCSSUnit( headFontSizeTablet, headFontSizeType ),
			"line-height": generateCSSUnit( headLineHeightTablet, headLineHeightType ),
		},
		" .uagb-timeline__heading a" : {
			"font-size" : generateCSSUnit( headFontSizeTablet, headFontSizeType ),
			"line-height": generateCSSUnit( headLineHeightTablet, headLineHeightType ),
		},
		" .uagb-timeline-desc-content" : {
			"font-size" : generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			"line-height": generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
		},
		" .uagb-timeline__center-block .uagb-timeline__marker" : {
		    "margin-left" : 0,
		    "margin-right" : 0,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__heading" : {
			"text-align"  : resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline-desc-content" : {
			"text-align"  : resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__events-new" : {
			"text-align" : resp_selectors
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-inner" : {
		    "text-align" : resp_selectors
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-right-color"  : backgroundColor,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__line" : {
			"left" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author" :{
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent" :{
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__image a" :{
			"text-align": resp_selectors,
		},

		// CTA AUTHOR.
		" .uagb-timeline__author .dashicons-admin-users" : {
			"font-size" : generateCSSUnit( authorFontSizeTablet,authorFontSizeType ),
			"line-height": generateCSSUnit( authorLineHeightTablet, authorLineHeightType ),
		},
		" .uagb-timeline__author-link" :{
			"font-size" : generateCSSUnit( authorFontSizeTablet,authorFontSizeType ),
			"line-height": generateCSSUnit( authorLineHeightTablet, authorLineHeightType ),
		},
		" .uagb-timeline__link" :{
			"font-size" : generateCSSUnit( ctaFontSizeTablet,ctaFontSizeType ),
			"line-height": generateCSSUnit( ctaLineHeightTablet, ctaLineHeightType ),
		}
	}

	var mobile_selectors = {
		" .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"font-size" : generateCSSUnit( dateFontsizeMobile, dateFontsizeType ),
			"line-height": generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
		},
		" .uagb-timeline__date-new" : {
			"font-size" : generateCSSUnit( dateFontsizeMobile, dateFontsizeType ),
			"line-height": generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
		},
		" .uagb-timeline__heading" : {
			"font-size" : generateCSSUnit( headFontSizeMobile, headFontSizeType ),
			"line-height": generateCSSUnit( headLineHeightMobile, headLineHeightType ),
		},
		" .uagb-timeline__heading a" : {
			"font-size" : generateCSSUnit( headFontSizeMobile, headFontSizeType ),
			"line-height": generateCSSUnit( headLineHeightMobile, headLineHeightType ),
		},
		" .uagb-timeline-desc-content" : {
			"font-size" : generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			"line-height": generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
		},
		" .uagb-timeline__center-block .uagb-timeline__marker" : {
		    "margin-left" : 0,
		    "margin-right" : 0,
		},
		" .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left" : {
			"margin-left" : generateCSSUnit( horizontalSpace, "px" ),
		},
		" .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right" : {
		    "margin-left" : generateCSSUnit( horizontalSpace, "px" ),
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__heading" : {
			"text-align"  : resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline-desc-content" : {
			"text-align"  : resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__events-new" : {
			"text-align" : resp_selectors
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-inner" : {
			"text-align" : resp_selectors
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-right-color"  : backgroundColor,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__line" : {
			"left" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__author" :{
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__link_parent" :{
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__image a" :{
			"text-align": resp_selectors,
		},

		// CTA  AUthor
		" .uagb-timeline__author .dashicons-admin-users" : {
			"font-size" : generateCSSUnit( authorFontSizeMobile, authorFontSizeType ),
			"line-height": generateCSSUnit( authorLineHeightMobile, authorLineHeightType ),
		},
		" .uagb-timeline__author-link" :{
			"font-size" : generateCSSUnit( authorFontSizeMobile, authorFontSizeType ),
			"line-height": generateCSSUnit( authorLineHeightMobile, authorLineHeightType ),
		},
		" .uagb-timeline__link" :{
			"font-size" : generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			"line-height": generateCSSUnit( ctaLineHeightMobile, ctaLineHeightType ),
		}
	}

	var styling_css = ""
	var id = `.block-editor-page #wpwrap .uagb-block-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css

}

export default contentTimelineStyle