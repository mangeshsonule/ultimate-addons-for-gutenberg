/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		icon_color,
		icon_hover_color,
		icon_bg_color,
		icon_bg_hover_color,
	} = props.attributes

	var selectors = {
		".uagb-ss-repeater a.uagb-ss__link" : {
			"color" : icon_color
		},
		".uagb-ss-repeater a.uagb-ss__link svg" : {
			"fill" : icon_color
		},
		".uagb-ss-repeater:hover a.uagb-ss__link" : {
			"color" : icon_hover_color
		},
		".uagb-ss-repeater:hover a.uagb-ss__link svg" : {
			"fill" : icon_hover_color
		},
		".uagb-ss-repeater.uagb-ss__wrapper" : {
			"background" : icon_bg_color,
			// "border-color" : icon_border_color
		},
		".uagb-ss-repeater.uagb-ss__wrapper:hover" : {
			"background" : icon_bg_hover_color,
			// "border-color" : icon_border_hover_color
		}
	}

	var styling_css = ""
	var id = `.uagb-block-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	return styling_css
}

export default styling
