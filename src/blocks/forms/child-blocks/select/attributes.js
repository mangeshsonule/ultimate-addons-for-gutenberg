const { __ } = wp.i18n

const attributes = {
    block_id: {
		type: "string"
    },
    selectName:{
        type: "string",
        default: __( "Select Title" )
    },
	selectRequired : {
        type: "boolean",
        default: false
    },
    options: {
        type: "array",
        default: [
            {
                "optiontitle": "Option Name 1"
            },           
        ],
        
    },
    
}
export default attributes
