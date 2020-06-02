/**
 * BLOCK: FAQ - Child - Save Block
 */

import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

const {
	Fragment,
} = wp.element

const {
	RichText
} = wp.blockEditor

export default function save( props ) {
	
	const { className } = props
	const {
		block_id,
		question,
		answer,
		icon,
		iconActive,
		layout
	} = props.attributes

	const faqRenderIcon = () => {
			
		return (
			<Fragment>
				<span className="uagb-icon uagb-faq-icon-wrap">
					{ renderSVG(icon) }
				</span>
				<span className="uagb-icon-active uagb-faq-icon-wrap">
					{ renderSVG(iconActive) }
				</span>
			</Fragment>
		)
	}
	const faqRenderAccordion = () => {

		return (
				<div className="uagb-faq-child__wrapper">
					<div className="uagb-faq-item">
						<div className="uagb-faq-questions-button uagb-faq-questions">
							{ 'accordion' === layout && faqRenderIcon() }
							<RichText.Content
								tagName='span'
								value={ question }
								className='uagb-question'
							/>
						</div>
						<div className="uagb-faq-content">
							<span>
								<RichText.Content
									tagName='p'
									value={ answer }
								/>
							</span>
						</div>
					</div>
				</div>
			)
	}
	return (
		<div className={ classnames(
			className,
			"uagb-faq-child__outer-wrap",
			`uagb-block-${ block_id }`
		) }
		>
			{ faqRenderAccordion() }

		</div>
	)
}
