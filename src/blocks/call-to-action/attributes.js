/**
 * BLOCK: UAGB CTA Attributes
 */

const attributes = {	
	ctaTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
		default: "Call To Action",
	},
	description: {
		source: "html",
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	textAlign: {
		type: "string",
		default: "left",
	},
	titleColor: {
		type: "string",
	},
	descColor: {
		type: "string",
	},		
	ctaPosition: {
		type: "string",
		default: "right"
	},	
	titleTag: {
		type: "string",
		default: "h3"
	},	
	titleFontSize: {
		type: "number",
	},	
	descFontSize: {
		type: "number",
	},
	titleSpace: {
		type: "number",
		default : 10,
	},
	descSpace: {
		type: "number",
		default : 10,
	},		
	block_id :{
		type : "string",
		default : "not_set"
	},
	buttonAlign:{
		type : "string",
		default : "middle"
	},
	ctaTarget: {
		type: "boolean",
		default: false,
	},
	ctaIcon : {
		type : "string",
		default : ""
	},
	ctaIconPosition: {
		type: "string",
		default: "after"
	},
	ctaIconSpace :{
		type: "number",
		default : 5
	},	
	ctaType: {
		type: "string",
		default: "button",
	},
	ctaText: {
		type: "string",
		default: "Read More",
	},
	ctaLink: {
		type: "string",
		default: "#",
	},
	ctaLinkColor :{
		type: "string",
		default: "#333",
	},
	ctaFontSize :{
		type: "number",
	},
	ctaBtnLinkColor :{
		type: "string",
		default: "#333",
	},
	ctaLinkHoverColor:{
		type: "string",
		default: "",
	},
	ctaBgColor :{
		type: "string",
		default:"transparent",
	},
	ctaBgHoverColor :{
		type: "string",
		default:"transparent",
	},
	ctaBorderColor: {
		type: "string",
		default: "#333",
	},
	ctaBorderhoverColor:{
		type: "string",
		default: "",
	},
	ctaBorderStyle: {
		type: "string",
		default: "solid",
	},
	ctaBtnVertPadding :{
		type: "number",
		default: 10,
	},
	ctaBtnHrPadding :{
		type: "number",
		default: 14,
	},
	ctaBorderWidth :{
		type: "number",
		default: 1,
	},
	ctaBorderRadius :{
		type: "number",
		default: 0,
	},		
	stack: {
		type: "string",
		default: "tablet"
	},
	ctaLeftSpace :{
		type: "number",
		default: 5,
	},
	ctaRightSpace :{
		type: "number",
		default: 5,
	},
}

export default attributes
