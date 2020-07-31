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
	Button,
	ToggleControl,
	
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class UAGBFormsSelectEdit extends Component {

	constructor() {
		super( ...arguments )
		this.state = { optionsstate: null };
		
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

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			selectRequired,
			options,
			selectName
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

		const addOption = () => {
			
			options[options.length] = "Option Name"; 
			setAttributes({ options:options });
			this.setState({optionsstate : options});
		};

		const changeOption = (e, index) => {
			options[index] =  e.target.value;
			setAttributes({ options: options });
			this.setState({optionsstate : options});

		};
		const deleteOption = index => {
		
			options.splice(index, 1);
			setAttributes({ options });
			
			this.setState({optionsstate : options});
		};

		const editView = options.map((s, index) => {
			return (
				<div className="uagb-form-select-option">
					<input
						aria-label={s}
						onChange={e => changeOption(e, index)}
						type="text"
						value={s}
						
					/>					
					<Button 
						className="uagb-form-select-option-delete"
        				icon="trash"
        				label="Remove" onClick={() => deleteOption(index)}
    				/>
				</div>
			);
		});
		const SelectView = () => {

			var showoptionsField =  options.map((o, index) => {
				var optionvalue = o.replace(/\s+/g, '-').toLowerCase();
				return <option value={optionvalue}>{o}</option>;
			})

			return  (
				<select className="uagb-forms-select-box" required={ selectRequired }>
					<option value="" disabled selected>Select your option</option>
					{ showoptionsField }
				</select>
			)			
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
					<RichText
						tagName="div"
						placeholder={ __( "Select Title" ) }
						value={ selectName }
						onChange={ ( value ) => setAttributes( { selectName: value } ) }
						className='uagb-forms-select-label'
						multiline={ false }
					/>
					{isSelected && (
						<Fragment>														
							{editView}
							<div className="uagb-forms-select-controls">
								<div>
									<Button isSecondary onClick={addOption}>{ __(" + Add Option ") }</Button>									
								</div>								
							</div>
						</Fragment>
						)}
					
					{!isSelected && (<SelectView/>)}
					</div>
			</Fragment>
		)
	}
}

export default UAGBFormsSelectEdit
