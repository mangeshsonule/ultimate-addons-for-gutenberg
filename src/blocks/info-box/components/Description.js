const {
	RichText,
} = wp.blockEditor

const { __ } = wp.i18n

const {
	createBlock
} = wp.blocks

class InfoBoxDesc extends React.Component {

	render() {

		//const { attributes, setAttributes } = this.props;
		const {
			attributes,
			setAttributes ,
			props
		} = this.props

		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName='p'
	                value={ attributes.headingDesc }
	                placeholder={ __( "Write a Description" ) }
	                className='uagb-ifb-desc'
	                onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
	                onMerge = { props.mergeBlocks }
	                unstableOnSplit = {
						props.insertBlocksAfter ?
							( before, after, ...blocks ) => {
								setAttributes( { content: before } )
								props.insertBlocksAfter( [
									...blocks,
									createBlock( "core/paragraph", { content: after } ),
								] )
							} :
							undefined
					}
					onRemove={ () => props.onReplace( [] ) }
	            />
			)
		}else{
			return (
				<RichText.Content
	                tagName='p'
	                value={ attributes.headingDesc }
	                className='uagb-ifb-desc'
	            />
			)
		}
	}
}

export default InfoBoxDesc
