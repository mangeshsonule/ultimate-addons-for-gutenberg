/**
 * Returns Dynamic Generated CSS
 */

import { generateCSS } from "../../components/build-css"

function styling( props ) {

	const {
		icon_color,
		label_color,
		icon_hover_color,
		label_hover_color,
		icon_bg_color,
		icon_bg_hover_color,
		icon_border_color,
		icon_border_hover_color,
	} = props.attributes

	var selectors = {
		".uagb-icon-list-repeater .uagb-icon-list__source-icon" : {
			"color" : icon_color
		},
		".uagb-icon-list-repeater .uagb-icon-list__source-icon svg" : {
			"fill" : icon_color
		},
		".uagb-icon-list-repeater:hover .uagb-icon-list__source-icon" : {
			"color" : icon_hover_color
		},
		".uagb-icon-list-repeater:hover .uagb-icon-list__source-icon svg" : {
			"fill" : icon_hover_color
		},
		".uagb-icon-list-repeater .uagb-icon-list__label" : {
			"color" : label_color,
		},
		".uagb-icon-list-repeater:hover .uagb-icon-list__label" : {
			"color" : label_hover_color
		},
		".uagb-icon-list-repeater .uagb-icon-list__source-wrap" : {
			"background" : icon_bg_color,
			"border-color" : icon_border_color
		},
		".uagb-icon-list-repeater:hover .uagb-icon-list__source-wrap" : {
			"background" : icon_bg_hover_color,
			"border-color" : icon_border_hover_color
		}
	}

	var styling_css = ""
	var id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`

	styling_css = generateCSS( selectors, id )

	return styling_css
}

export default styling
