/**
 * BLOCK: UAGB Rating Block Attributes
 */
  const { __ } = wp.i18n

 const features = []

 features.push(
 	{
 		"feature_name": __( "- Feature Name." ),
 	}
 )


 const attributes = {
	ID: {
		type: "string",
		default: "",
	},
	block_id: {
		type: "string",
	},
	schema: {
		type: "string",
		default: ""
	},
	rTitle: {
		type: "string",
		default: "Ultimate Addons for Gutenberg",
	},
	rContent: {
		type: "string",
		default: "The Ultimate Gutenberg Blocks Library. Supercharge the Gutenberg editor with beautiful and powerful blocks to design stunning websites in minutes!",
	},
	rAuthor: {
		type: "string",
		default: "Ultimate Addons for Gutenberg",
	},
	headingTag: {
		type: "string",
		default: "h2"
	},
	blockID: {
		type: "string",
		default: "",
	},
	mainimage: {
		type: "object",
		default:{
			"url": "",
		}
	},
	imgSize:{
		type: "string",
		default: "thumbnail",
	},
	authorName: {
		type: "string",
		default: "",
	},
	itemName: {
		type: "string",
		default: "",
	},
	items: {
		type: "string",
		default: '[{"label":"","value":0}]',
	},
	description: {
		type: "string",
		default: "",
	},
	descriptionAlign: {
		type: "string",
		default: "left",
	},
	imgURL: {
		type: "string",
		default: "",
	},
	imgID: {
		type: "number",
	},
	imgAlt: {
		type: "string",
		default: "",
	},
	parts: {
		type: "array",
		default: [{ label: "", value: 0 }],
	},
	starCount: {
		type: "number",
		default: 5,
	},
	summaryTitle: {
		type: "string",
		default: "Summary",
	},
	summaryDescription: {
		type: "string",
		default: "",
	},
	callToActionText: {
		type: "string",
		default: "",
	},
	ctaLink: {
		type: "string",
		default: "#",
	},
	callToActionBackColor: {
		type: "string",
		default: "#f63d3d",
	},
	callToActionForeColor: {
		type: "string",
		default: "#ffffff",
	},
	inactiveStarColor: {
		type: "string",
		default: "#888888",
	},
	activeStarColor: {
		type: "string",
		default: "#eeee00",
	},
	authorColor: {
		type: "string",
		default: "",
	},
	summaryColor:{
		type: "string",
		default: "",
	},
	titleAlign: {
		type: "string",
		default: "left",
	},
	authorAlign: {
		type: "string",
		default: "left",
	},
	enableCTA: {
		type: "boolean",
		default: true,
	},
	ctaNoFollow: {
		type: "boolean",
		default: true,
	},
	ctaOpenInNewTab: {
		type: "boolean",
		default: true,
	},
	enableReviewSchema: {
		type: "boolean",
		default: true,
	},
	enableImage: {
		type: "boolean",
		default: false,
	},
	enableDescription: {
		type: "boolean",
		default: false,
	},
	starOutlineColor: {
		type: "string",
		default: "#000000",
	},
	starActiveColor: {
		type: "string",
		default: "#000000",
	},
	imageSize: {
		type: "number",
		default: 100, //range: 0-200
	},
	brand: {
		type: "string",
		default: "",
	},
	sku: {
		type: "string",
		default: "",
	},
	identifier: {
		type: "string",
		default: "",
	},
	identifierType: {
		type: "string",
		default: "gtin", // nsn, mpn, gtin8, gtin12, gtin13, gtin14, gtin
	},
	offerType: {
		type: "string",
		default: "Offer", //can also be set to aggregate offer (which prevevnts calltoactionurl from being  used as offer url)
	},
	offerStatus: {
		type: "string",
		default: "InStock", //available values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, PreSale, SoldOut
	},
	//begin aggregate offer-only attributes
	offerHighPrice: {
		type: "number",
		default: 0,
	},
	offerLowPrice: {
		type: "number",
		default: 0,
	},
	offerCount: {
		type: "number",
		default: 0,
	},
	//end  aggregate offer-only attributes
	offerPrice: {
		//only for offer
		type: "number",
		default: 0,
	},
	offerCurrency: {
		type: "string",
		default: "USD",
	},
	offerExpiry: {
		type: "number",
		//default: 60 * (10080 + Math.ceil(Date.now() / 60000)),
		default: 0,
	},
	featuresTitle : {
		type: "string",
		default : __( "List Of Features:" ),
	},
	featuresAvgText : {
		type: "string",
		default : __( "Average Ratings" ),
	},
	feature_count: {
		type: "number",
		default: 1
	},
	features: {
		type: "array",
		default : features,
	},
	showFeature: {
		type: "boolean",
		default: false
	},
	showAuthor: {
		type: "boolean",
		default: false
	},
	starSize: {
		type: "number",
		default: 20,
	},
	starColor: {
		type: "string",
		default: "#ffff00",
	},
	selectedStars: {
		type: "number",
		default: 0,
	},
	starAlign: {
		type: "string",
		default: "left",
	},
	descColor: {
		type: "string",
		default: ""
	},
	titleColor: {
		type: "string",
		default: ""
	},
	pricevalue: {
		type: "string",
		default: "US$65"
	},
	pricetext: {
		type: "string",
		default: "Price"
	},
	availabilityvalue: {
		type: "string",
		default: "Instock"
	},
	availabilitytext: {
		type: "string",
		default: "Availability"
	},
	contentVrPadding: {
		type: "number",
		default : 15
	},
	contentHrPadding: {
		type: "number",
		default : 50
	},
	star_gap: {
		type: "number",
		default: 100
	},
	contentColor: {
		type: "string",
		default: ""
	},
	author: {
		type: "string",
		default: "",
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSubset: {
		type: "string",
	},
	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleLineHeightType: {
		type: "string",
		default: "em"
	},
	titleFontSize: {
		type: "number",
	},
	titleFontSizeTablet: {
		type: "number",
	},
	titleFontSizeMobile: {
		type: "number",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
	},
	descFontFamily: {
		type: "string",
		default: "Default",
	},
	descFontWeight: {
		type: "string",
	},
	descFontSubset: {
		type: "string",
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descFontSizeTablet: {
		type: "number",
	},
	descFontSizeMobile: {
		type: "number",
	},
	descLineHeight: {
		type: "number",
	},
	descLineHeightType: {
		type: "string",
		default: "em"
	},
	descLineHeightTablet: {
		type: "number",
	},
	descLineHeightMobile: {
		type: "number",
	},
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	descLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	contentLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	contentFontWeight: {
		type: "string",
	},
	contentFontSubset: {
		type: "string",
	},
	contentFontSize: {
		type: "number",
	},
	contentFontSizeType: {
		type: "string",
		default: "px"
	},
	contentFontSizeTablet: {
		type: "number",
	},
	contentFontSizeMobile: {
		type: "number",
	},
	contentLineHeight: {
		type: "number",
	},
	contentLineHeightType: {
		type: "string",
		default: "em"
	},
	contentLineHeightTablet: {
		type: "number",
	},
	contentLineHeightMobile: {
		type: "number",
	},
};

export default attributes