/**
 * BLOCK: Content Timeline Child - Save Block
 */

import classnames from "classnames"
import contentTimelineStyle from ".././inline-styles"
import ContentTmClasses from ".././classes"
import AlignClass from ".././align-classes"
import DayAlignClass from ".././day-align-classes"
import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

const { dateI18n, __experimentalGetSettings } = wp.date

const {
	RichText
} = wp.blockEditor

const { Fragment } = wp.element

export default function save( props ) {
	const {
		block_id,
		headingTag,
		timelinAlignment,
		displayPostDate,
		icon,
		tm_content,
		t_date,
		date_icon,
		stack,
		timelineItem,
		dateFormat
	} = props.attributes

	/* Style for elements */
	var front_style = contentTimelineStyle( props )

	const hasItems = Array.isArray( tm_content ) && tm_content.length

	var content_align_class = AlignClass( props.attributes, 0 ) // Get classname for layout alignment
	var day_align_class     = DayAlignClass( props.attributes, 0 ) //

	var display_inner_date = false

	return (
		<div  className={ classnames(
			props.className,
			"uagb-timeline__outer-wrap",
			`uagb-block-${block_id}`
		) }>
			<div  className = { classnames(
				"uagb-timeline__content-wrap",
				...ContentTmClasses( props.attributes ),
			) }>
				<div className = "uagb-timeline-wrapper">
					<div className = "uagb-timeline__main">
						<div className = "uagb-timeline__days">
							{
								tm_content.map((post,index) => {

									if ( timelineItem <= index ) {
										return
									}

									var second_index = "uagb-"+index
									if(timelinAlignment == "center"){
										display_inner_date = true
										content_align_class = AlignClass( props.attributes, index ) // Get classname for layout alignment
										day_align_class     = DayAlignClass( props.attributes, index ) //
									}
									const Tag = headingTag
									var icon_class = "uagb-timeline__icon-new out-view-uagb-timeline__icon "
									var post_date = t_date[index].title
									if ( 'custom' != dateFormat ) {

										post_date = dateI18n( dateFormat, t_date[index].title )
										if( post_date === "Invalid date" ){
											post_date = t_date[index].title
										}
									}
									return (
										<article className = "uagb-timeline__field uagb-timeline__field-wrap"  key={index}>
											<div className = { classnames(
												...content_align_class,
											) }>

												<div className = "uagb-timeline__marker out-view-uagb-timeline__icon">
													<span className = {icon_class}>{ renderSVG(icon) }</span>
												</div>

												<div className = { classnames(
													...day_align_class,
												) }>
													<div className="uagb-events-new" >
														<div className="uagb-timeline__events-inner-new" >
															<div className="uagb-timeline__date-hide uagb-timeline__date-inner" >
																{ displayPostDate && t_date[index].title &&
                                                                        <div className={ "uagb-timeline__inner-date-new" }>
                                                                        	{ post_date }
                                                                        </div>
																}
															</div>

															<div className="uagb-timeline-content">

																<div className="uagb-timeline__heading-text" >
																	<RichText.Content
																		tagName={ headingTag }
																		value={ post.time_heading }
																		className='uagb-timeline__heading'
																	/>
																</div>

																<RichText.Content
																	tagName= "p"
																	value={ post.time_desc }
																	className='uagb-timeline-desc-content'
																/>

																<div className="uagb-timeline__arrow"></div>

															</div>

														</div>
													</div>
												</div>

												{ display_inner_date && <div className = "uagb-timeline__date-new">
													{ displayPostDate && t_date[index].title &&
                                                            <div className={ "uagb-timeline__date-new" }>
                                                            	{ post_date }
                                                            </div>
													}
												</div>
												}
											</div>
										</article>
									)

								})
							}
						</div>
						<div className = "uagb-timeline__line" >
							<div className = "uagb-timeline__line__inner"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
