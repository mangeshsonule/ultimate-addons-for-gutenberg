/**
 * BLOCK: FAQ - Schema - Child
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/faq-child", {
	title: uagb_blocks_info.blocks["uagb/faq-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/faq-child"]["description"],
	icon: UAGB_Block_Icons.faq,
	category: uagb_blocks_info.category,
	parent: [ "uagb/faq" ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	save,
} )