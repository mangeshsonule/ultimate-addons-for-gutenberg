/**
 * BLOCK: Forms - Select - Edit
 */

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ButtonGroup,
	Button,
	Dashicon,
	ToggleControl,
	IconButton
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class UAGBFormsSelectEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-select-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes } = this.props

        const {
			block_id,
			selectRequired,
			options
		} = attributes
		
		const selectInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ selectRequired }
						onChange={ ( value ) => setAttributes( { selectRequired: ! selectRequired } ) }
					/>
				</PanelBody>
			)
		}

		const addSelect = () => {
			let newOption = {
				label: "Option " + (options.length + 1)
			};
			console.log((newOption));
	
			// let new_options = clone(select);
	
			// new_options.push(newOption);
	
			// setAttributes({ options: new_options });
			// setSelect(new_options);
		};
		const editView = options.map((s, index) => {
			return (
				<div className="uagb-form-select-option">
					<input
						aria-label={s}
						onChange={e => optionChange(e, index)}
						type="text"
						value={s.label}
						
					/>					
					<IconButton
        				icon="trash"
        				label="Remove"
    				/>
				</div>
			);
		});
		const SelectView = () => {
			return (
				<select>
					<option value="" disabled selected>
						Select your option
					</option>
					{options.map((s, index) => {
						return <option value={s.label}>{s.label}</option>;
					})}
				</select>
			);
		};
		const optionChange = (e, index) => {
			
			
			options[index] =  e.target.value;
				
				
				setAttributes({ options: options });
				console.log(options);
		};

		return (
			<Fragment>
				<InspectorControls>
					{ selectInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-select-wrap",
					`uagb-block-${ block_id }`,
				) }>
					{this.props.isSelected && (editView)}
					{this.props.isSelected && (
						<div className="uagb-forms-select-controls">
								<div>
									<Button isDefault onClick={addSelect}>{ __("+ Add Option") }</Button>									
								</div>								
							</div>
						)}
					</div>
					{!this.props.isSelected && (<SelectView/>)}
			</Fragment>
		)
	}
}

export default UAGBFormsSelectEdit
