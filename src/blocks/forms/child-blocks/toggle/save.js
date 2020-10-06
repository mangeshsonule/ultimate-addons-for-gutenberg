/**
 * BLOCK: Forms - Toggle - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		toggleRequired,
		name,
		toggleStatus,
		layout,
		trueValue,
		falseValue
	} = attributes
	
	const isRequired = (toggleRequired) ? "required" : "";
	
	return (
		<div className={ classnames(
			"uagb-forms-toggle-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
				<RichText.Content
				tagName="div"
				value={ name }
				className={`uagb-forms-toggle-label ${isRequired} uagb-forms-input-label`}		
				/>
				<label class="uagb-switch">
					<input 
						type="checkbox"
						className="uagb-forms-toggle-input"
						checked={toggleStatus}
						value={ toggleStatus ? trueValue : falseValue }
						required={toggleRequired}					
					/>
					<span class={`uagb-slider ${layout}`}></span>
				</label>
		</div>
	)
}