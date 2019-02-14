<?php
/**
 * UAGB Helper.
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Helper' ) ) {

	/**
	 * Class UAGB_Helper.
	 */
	final class UAGB_Helper {



		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		public static $block_list;

		/**
		 * Store Json variable
		 *
		 * @since 1.8.1
		 * @var instance
		 */
		public static $icon_json;

		/**
		 * Page Blocks Variable
		 *
		 * @since 1.6.0
		 * @var instance
		 */
		public static $page_blocks;

		/**
		 * Google fonts to enqueue
		 *
		 * @var array
		 */
		public static $gfonts = array();

		/**
		 *  Initiator
		 *
		 * @since 0.0.1
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self;
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {

			require( UAGB_DIR . 'classes/class-uagb-config.php' );
			require( UAGB_DIR . 'classes/class-uagb-block-helper.php' );

			self::$block_list = UAGB_Config::get_block_attributes();

			add_action( 'wp_head', array( $this, 'generate_stylesheet' ), 80 );
			add_action( 'wp_head', array( $this, 'frontend_gfonts' ), 120 );
			add_action( 'wp_footer', array( $this, 'generate_script' ), 1000 );
		}

		/**
		 * Load the front end Google Fonts
		 */
		public function frontend_gfonts() {
			if ( empty( self::$gfonts ) ) {
				return;
			}
			$show_google_fonts = apply_filters( 'uagb_blocks_show_google_fonts', true );
			if ( ! $show_google_fonts ) {
				return;
			}
			$link    = '';
			$subsets = array();
			foreach ( self::$gfonts as $key => $gfont_values ) {
				if ( ! empty( $link ) ) {
					$link .= '%7C'; // Append a new font to the string.
				}
				$link .= $gfont_values['fontfamily'];
				if ( ! empty( $gfont_values['fontvariants'] ) ) {
					$link .= ':';
					$link .= implode( ',', $gfont_values['fontvariants'] );
				}
				if ( ! empty( $gfont_values['fontsubsets'] ) ) {
					foreach ( $gfont_values['fontsubsets'] as $subset ) {
						if ( ! in_array( $subset, $subsets ) ) {
							array_push( $subsets, $subset );
						}
					}
				}
			}
			if ( ! empty( $subsets ) ) {
				$link .= '&amp;subset=' . implode( ',', $subsets );
			}
			echo '<link href="//fonts.googleapis.com/css?family=' . esc_attr( str_replace( '|', '%7C', $link ) ) . '" rel="stylesheet">';
		}


		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param array  $selectors The block selectors.
		 * @param string $id The selector ID.
		 * @since 0.0.1
		 */
		public static function generate_css( $selectors, $id ) {

			$styling_css = '';

			if ( empty( $selectors ) ) {
				return;
			}

			foreach ( $selectors as $key => $value ) {
				$styling_css .= $id;

				$styling_css .= $key . ' { ';
				$css          = '';

				foreach ( $value as $j => $val ) {
					$css .= $j . ': ' . $val . ';';
				}

				$styling_css .= $css . ' } ';
			}

			return $styling_css;
		}

		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param array  $selectors The block selectors.
		 * @param string $id The selector ID.
		 * @param string $type Media Query type mobile/tablet.
		 * @since 0.0.1
		 */
		public static function generate_responsive_css( $selectors, $id, $type ) {

			$breakpoint = ( 'mobile' == $type ) ? UAGB_MOBILE_BREAKPOINT : UAGB_TABLET_BREAKPOINT;

			$css  = '@media only screen and (max-width: ' . $breakpoint . 'px) { ';
			$css .= self::generate_css( $selectors, $id );
			$css .= ' } ';

			return $css;
		}

		/**
		 * Generates CSS recurrsively.
		 *
		 * @param object $block The block object.
		 * @since 0.0.1
		 */
		public function get_block_css( $block ) {

            // @codingStandardsIgnoreStart

            $block = ( array ) $block;

            $name = $block['blockName'];
            $css  = '';

            if( ! isset( $name ) ) {
                return;
            }

            if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
                $blockattr = $block['attrs'];
                if ( isset( $blockattr['block_id'] ) ) {
                    $block_id = $blockattr['block_id'];
                }
            }

            switch ( $name ) {
                case 'uagb/section':
                    $css .= UAGB_Block_Helper::get_section_css( $blockattr, $block_id );
                    break;

                case 'uagb/advanced-heading':
                    $css .= UAGB_Block_Helper::get_adv_heading_css( $blockattr, $block_id );
                    $this->blocks_advanced_heading_gfont( $blockattr );
                    break;

                case 'uagb/info-box':
                    $css .= UAGB_Block_Helper::get_info_box_css( $blockattr, $block_id );
                    break;

                case 'uagb/buttons':
                    $css .= UAGB_Block_Helper::get_buttons_css( $blockattr, $block_id );
                    $this->blocks_buttons_gfont( $blockattr );
                    break;

                case 'uagb/blockquote':
                    $css .= UAGB_Block_Helper::get_blockquote_css( $blockattr, $block_id );
                    break;

				case 'uagb/testimonial':
					$css .= UAGB_Block_Helper::get_testimonial_css( $blockattr, $block_id );
					$this->blocks_testimonial_gfont( $blockattr );
					break;

                case 'uagb/team':
                    $css .= UAGB_Block_Helper::get_team_css( $blockattr, $block_id );
                    break;

                case 'uagb/social-share':
                    $css .= UAGB_Block_Helper::get_social_share_css( $blockattr, $block_id );
                    break;

                case 'uagb/content-timeline':
                    $css .= UAGB_Block_Helper::get_content_timeline_css( $blockattr, $block_id );
                    $this->blocks_content_timeline_gfont( $blockattr );
                    break;

				case 'uagb/restaurant-menu':
					$css .= UAGB_Block_Helper::get_restaurant_menu_css( $blockattr, $block_id );
					$this->blocks_restaurant_menu_gfont( $blockattr );
					break;

                case 'uagb/call-to-action':
                    $css .= UAGB_Block_Helper::get_call_to_action_css( $blockattr, $block_id );
                    $this->blocks_call_to_action_gfont( $blockattr );
                    break;

                case 'uagb/post-timeline':
                    $css .= UAGB_Block_Helper::get_post_timeline_css( $blockattr, $block_id );
                    $this->blocks_post_timeline_gfont( $blockattr );
                    break;

                case 'uagb/icon-list':
                    $css .= UAGB_Block_Helper::get_icon_list_css( $blockattr, $block_id );
                     $this->blocks_icon_list_gfont( $blockattr );
                    break;

                case 'uagb/post-grid':
                    $css .= UAGB_Block_Helper::get_post_grid_css( $blockattr, $block_id );
                    $this->blocks_post_gfont( $blockattr );
                    break;

                case 'uagb/post-carousel':
                    $css .= UAGB_Block_Helper::get_post_carousel_css( $blockattr, $block_id );
                    $this->blocks_post_gfont( $blockattr );
                    break;

                case 'uagb/post-masonry':
                    $css .= UAGB_Block_Helper::get_post_masonry_css( $blockattr, $block_id );
                    $this->blocks_post_gfont( $blockattr );
                    break;

                case 'uagb/columns':
                    $css .= UAGB_Block_Helper::get_columns_css( $blockattr, $block_id );
                    break;

                case 'uagb/column':
                    $css .= UAGB_Block_Helper::get_column_css( $blockattr, $block_id );
                    break;

                default:
                    // Nothing to do here.
                    break;
            }

            if ( isset( $block['innerBlocks'] ) ) {
                foreach ( $block['innerBlocks'] as $j => $inner_block ) {
                    if ( 'core/block' == $inner_block['blockName'] ) {
                        $id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

                        if ( $id ) {
                            $content = get_post_field( 'post_content', $id );

                            $reusable_blocks = $this->parse( $content );

                            $this->get_stylesheet( $reusable_blocks );
                        }
                    } else {
                        // Get CSS for the Block.
                        $css .= $this->get_block_css( $inner_block );
                    }
                }
            }

            echo $css;

            // @codingStandardsIgnoreEnd
		}

		/**
		 * Adds Google fonts for Advanced Heading block.
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_advanced_heading_gfont( $attr ) {

			$head_load_google_font = isset( $attr['headLoadGoogleFonts'] ) ? $attr['headLoadGoogleFonts'] : '';
			$head_font_family      = isset( $attr['headFontFamily'] ) ? $attr['headFontFamily'] : '';
			$head_font_weight      = isset( $attr['headFontWeight'] ) ? $attr['headFontWeight'] : '';
			$head_font_subset      = isset( $attr['headFontSubset'] ) ? $attr['headFontSubset'] : '';

			$subhead_load_google_font = isset( $attr['subHeadLoadGoogleFonts'] ) ? $attr['subHeadLoadGoogleFonts'] : '';
			$subhead_font_family      = isset( $attr['subHeadFontFamily'] ) ? $attr['subHeadFontFamily'] : '';
			$subhead_font_weight      = isset( $attr['subHeadFontWeight'] ) ? $attr['subHeadFontWeight'] : '';
			$subhead_font_subset      = isset( $attr['subHeadFontSubset'] ) ? $attr['subHeadFontSubset'] : '';

			self::blocks_google_font( $head_load_google_font, $head_font_family, $head_font_weight, $head_font_subset );
			self::blocks_google_font( $subhead_load_google_font, $subhead_font_family, $subhead_font_weight, $subhead_font_subset );
		}

		/**
		 * Adds Google fonts for Call To Action block.
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_call_to_action_gfont( $attr ) {

			$title_load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$desc_load_google_font = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family      = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight      = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset      = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			$cta_load_google_font = isset( $attr['ctaLoadGoogleFonts'] ) ? $attr['ctaLoadGoogleFonts'] : '';
			$cta_font_family      = isset( $attr['ctaFontFamily'] ) ? $attr['ctaFontFamily'] : '';
			$cta_font_weight      = isset( $attr['ctaFontWeight'] ) ? $attr['ctaFontWeight'] : '';
			$cta_font_subset      = isset( $attr['ctaFontSubset'] ) ? $attr['ctaFontSubset'] : '';

			self::blocks_google_font( $cta_load_google_font, $cta_font_family, $cta_font_weight, $cta_font_subset );
			self::blocks_google_font( $title_load_google_font, $title_font_family, $title_font_weight, $title_font_subset );
			self::blocks_google_font( $desc_load_google_font, $desc_font_family, $desc_font_weight, $desc_font_subset );
		}

		/**
		 * Adds Google fonts for Testimonial block.
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_testimonial_gfont( $attr ) {
			$desc_load_google_fonts = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family       = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight       = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset       = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			$name_load_google_fonts = isset( $attr['nameLoadGoogleFonts'] ) ? $attr['nameLoadGoogleFonts'] : '';
			$name_font_family       = isset( $attr['nameFontFamily'] ) ? $attr['nameFontFamily'] : '';
			$name_font_weight       = isset( $attr['nameFontWeight'] ) ? $attr['nameFontWeight'] : '';
			$name_font_subset       = isset( $attr['nameFontSubset'] ) ? $attr['nameFontSubset'] : '';

			$company_load_google_fonts = isset( $attr['companyLoadGoogleFonts'] ) ? $attr['companyLoadGoogleFonts'] : '';
			$company_font_family       = isset( $attr['companyFontFamily'] ) ? $attr['companyFontFamily'] : '';
			$company_font_weight       = isset( $attr['companyFontWeight'] ) ? $attr['companyFontWeight'] : '';
			$company_font_subset       = isset( $attr['companyFontSubset'] ) ? $attr['companyFontSubset'] : '';

			self::blocks_google_font( $desc_load_google_fonts, $desc_font_family, $desc_font_weight, $desc_font_subset );
			self::blocks_google_font( $name_load_google_fonts, $name_font_family, $name_font_family, $name_font_subset );
			self::blocks_google_font( $company_load_google_fonts, $company_font_family, $company_font_family, $company_font_subset );
		}

		/**
		 *
		 * Adds Google fonts for Restaurant Menu block.
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_restaurant_menu_gfont( $attr ) {
			$title_load_google_fonts = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family       = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight       = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset       = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$price_load_google_fonts = isset( $attr['priceLoadGoogleFonts'] ) ? $attr['priceLoadGoogleFonts'] : '';
			$price_font_family       = isset( $attr['priceFontFamily'] ) ? $attr['priceFontFamily'] : '';
			$price_font_weight       = isset( $attr['priceFontWeight'] ) ? $attr['priceFontWeight'] : '';
			$price_font_subset       = isset( $attr['priceFontSubset'] ) ? $attr['priceFontSubset'] : '';

			$desc_load_google_fonts = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family       = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight       = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset       = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			self::blocks_google_font( $title_load_google_fonts, $title_font_family, $title_font_weight, $title_font_subset );
			self::blocks_google_font( $price_load_google_fonts, $price_font_family, $price_font_weight, $price_font_subset );
			self::blocks_google_font( $desc_load_google_fonts, $desc_font_family, $desc_font_weight, $desc_font_subset );
		}

		/**
		 * Adds Google fonts for Content Timeline block.
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_content_timeline_gfont( $attr ) {
			$head_load_google_fonts = isset( $attr['headLoadGoogleFonts'] ) ? $attr['headLoadGoogleFonts'] : '';
			$head_font_family       = isset( $attr['headFontFamily'] ) ? $attr['headFontFamily'] : '';
			$head_font_weight       = isset( $attr['headFontWeight'] ) ? $attr['headFontWeight'] : '';
			$head_font_subset       = isset( $attr['headFontSubset'] ) ? $attr['headFontSubset'] : '';

			$subheadload_google_fonts = isset( $attr['subHeadLoadGoogleFonts'] ) ? $attr['subHeadLoadGoogleFonts'] : '';
			$subheadfont_family       = isset( $attr['subHeadFontFamily'] ) ? $attr['subHeadFontFamily'] : '';
			$subheadfont_weight       = isset( $attr['subHeadFontWeight'] ) ? $attr['subHeadFontWeight'] : '';
			$subheadfont_subset       = isset( $attr['subHeadFontSubset'] ) ? $attr['subHeadFontSubset'] : '';

			$date_load_google_fonts = isset( $attr['dateLoadGoogleFonts'] ) ? $attr['dateLoadGoogleFonts'] : '';
			$date_font_family       = isset( $attr['dateFontFamily'] ) ? $attr['dateFontFamily'] : '';
			$date_font_weight       = isset( $attr['dateFontWeight'] ) ? $attr['dateFontWeight'] : '';
			$date_font_subset       = isset( $attr['dateFontSubset'] ) ? $attr['dateFontSubset'] : '';

			self::blocks_google_font( $head_load_google_fonts, $head_font_family, $head_font_weight, $head_font_subset );
			self::blocks_google_font( $subheadload_google_fonts, $subheadfont_family, $subheadfont_weight, $subheadfont_subset );
			self::blocks_google_font( $date_load_google_fonts, $date_font_family, $date_font_weight, $date_font_subset );
		}

		/**
		 * Adds Google fonts for Post Timeline block.
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_post_timeline_gfont( $attr ) {
			$this->blocks_content_timeline_gfont( $attr );

			$author_load_google_fonts = isset( $attr['authorLoadGoogleFonts'] ) ? $attr['authorLoadGoogleFonts'] : '';
			$author_font_family       = isset( $attr['authorFontFamily'] ) ? $attr['authorFontFamily'] : '';
			$author_font_weight       = isset( $attr['authorFontWeight'] ) ? $attr['authorFontWeight'] : '';
			$author_font_subset       = isset( $attr['authorFontSubset'] ) ? $attr['authorFontSubset'] : '';

			$cta_load_google_fonts = isset( $attr['ctaLoadGoogleFonts'] ) ? $attr['ctaLoadGoogleFonts'] : '';
			$cta_font_family       = isset( $attr['ctaFontFamily'] ) ? $attr['ctaFontFamily'] : '';
			$cta_font_weight       = isset( $attr['ctaFontWeight'] ) ? $attr['ctaFontWeight'] : '';
			$cta_font_subset       = isset( $attr['ctaFontSubset'] ) ? $attr['ctaFontSubset'] : '';

			self::blocks_google_font( $author_load_google_fonts, $author_font_family, $author_font_weight, $author_font_subset );
			self::blocks_google_font( $cta_load_google_fonts, $cta_font_family, $cta_font_weight, $cta_font_subset );
		}

		/**
		 * Adds Google fonts for Mulit Button's block.
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_buttons_gfont( $attr ) {

			$load_google_font = isset( $attr['loadGoogleFonts'] ) ? $attr['loadGoogleFonts'] : '';
			$font_family      = isset( $attr['fontFamily'] ) ? $attr['fontFamily'] : '';
			$font_weight      = isset( $attr['fontWeight'] ) ? $attr['fontWeight'] : '';
			$font_subset      = isset( $attr['fontSubset'] ) ? $attr['fontSubset'] : '';

			self::blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset );
		}

		/**
		 * Adds Google fonts for Icon List block
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_icon_list_gfont( $attr ) {

			$load_google_font = isset( $attr['loadGoogleFonts'] ) ? $attr['loadGoogleFonts'] : '';
			$font_family      = isset( $attr['fontFamily'] ) ? $attr['fontFamily'] : '';
			$font_weight      = isset( $attr['fontWeight'] ) ? $attr['fontWeight'] : '';
			$font_subset      = isset( $attr['fontSubset'] ) ? $attr['fontSubset'] : '';

			self::blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset );
		}

		/**
		 * Adds Google fonts for Post block.
		 *
		 * @param array $attr the blocks attr.
		 */
		public function blocks_post_gfont( $attr ) {

			$title_load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$meta_load_google_font = isset( $attr['metaLoadGoogleFonts'] ) ? $attr['metaLoadGoogleFonts'] : '';
			$meta_font_family      = isset( $attr['metaFontFamily'] ) ? $attr['metaFontFamily'] : '';
			$meta_font_weight      = isset( $attr['metaFontWeight'] ) ? $attr['metaFontWeight'] : '';
			$meta_font_subset      = isset( $attr['metaFontSubset'] ) ? $attr['metaFontSubset'] : '';

			$excerpt_load_google_font = isset( $attr['excerptLoadGoogleFonts'] ) ? $attr['excerptLoadGoogleFonts'] : '';
			$excerpt_font_family      = isset( $attr['excerptFontFamily'] ) ? $attr['excerptFontFamily'] : '';
			$excerpt_font_weight      = isset( $attr['excerptFontWeight'] ) ? $attr['excerptFontWeight'] : '';
			$excerpt_font_subset      = isset( $attr['excerptFontSubset'] ) ? $attr['excerptFontSubset'] : '';

			$cta_load_google_font = isset( $attr['ctaLoadGoogleFonts'] ) ? $attr['ctaLoadGoogleFonts'] : '';
			$cta_font_family      = isset( $attr['ctaFontFamily'] ) ? $attr['ctaFontFamily'] : '';
			$cta_font_weight      = isset( $attr['ctaFontWeight'] ) ? $attr['ctaFontWeight'] : '';
			$cta_font_subset      = isset( $attr['ctaFontSubset'] ) ? $attr['ctaFontSubset'] : '';

			self::blocks_google_font( $title_load_google_font, $title_font_family, $title_font_weight, $title_font_subset );

			self::blocks_google_font( $meta_load_google_font, $meta_font_family, $meta_font_weight, $meta_font_subset );

			self::blocks_google_font( $excerpt_load_google_font, $excerpt_font_family, $excerpt_font_weight, $excerpt_font_subset );

			self::blocks_google_font( $cta_load_google_font, $cta_font_family, $cta_font_weight, $cta_font_subset );
		}

		/**
		 * Adds Google fonts all blocks.
		 *
		 * @param array $load_google_font the blocks attr.
		 * @param array $font_family the blocks attr.
		 * @param array $font_weight the blocks attr.
		 * @param array $font_subset the blocks attr.
		 */
		public static function blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset ) {

			if ( true == $load_google_font ) {
				if ( ! array_key_exists( $font_family, self::$gfonts ) ) {
					$add_font                     = array(
						'fontfamily'   => $font_family,
						'fontvariants' => ( isset( $font_weight ) && ! empty( $font_weight ) ? array( $font_weight ) : array() ),
						'fontsubsets'  => ( isset( $font_subset ) && ! empty( $font_subset ) ? array( $font_subset ) : array() ),
					);
					self::$gfonts[ $font_family ] = $add_font;
				} else {
					if ( isset( $font_weight ) && ! empty( $font_weight ) ) {
						if ( ! in_array( $font_weight, self::$gfonts[ $font_family ]['fontvariants'], true ) ) {
							array_push( self::$gfonts[ $font_family ]['fontvariants'], $font_weight );
						}
					}
					if ( isset( $font_subset ) && ! empty( $font_subset ) ) {
						if ( ! in_array( $font_subset, self::$gfonts[ $font_family ]['fontsubsets'], true ) ) {
							array_push( self::$gfonts[ $font_family ]['fontsubsets'], $font_subset );
						}
					}
				}
			}
		}

		/**
		 * Generates Js recurrsively.
		 *
		 * @param object $block The block object.
		 * @since 1.6.0
		 */
		public function get_block_js( $block ) {

            // @codingStandardsIgnoreStart

            $block = ( array ) $block;

            $name = $block['blockName'];
            $js  = '';

            if( ! isset( $name ) ) {
                return;
            }

            if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
                $blockattr = $block['attrs'];
                if ( isset( $blockattr['block_id'] ) ) {
                    $block_id = $blockattr['block_id'];
                }
            }

            switch ( $name ) {

                case 'uagb/testimonial':
                    $js .= UAGB_Block_Helper::get_testimonial_js( $blockattr, $block_id );
                    break;

                case 'uagb/blockquote':
                    $js .= UAGB_Block_Helper::get_blockquote_js( $blockattr, $block_id );
                    break;

                case 'uagb/social-share':
                    $js .= UAGB_Block_Helper::get_social_share_js( $block_id );
                    break;

                default:
                    // Nothing to do here.
                    break;
            }

            if ( isset( $block['innerBlocks'] ) ) {

                foreach ( $block['innerBlocks'] as $j => $inner_block ) {

                    if ( 'core/block' == $inner_block['blockName'] ) {
                        $id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

                        if ( $id ) {
                            $content = get_post_field( 'post_content', $id );

                            $reusable_blocks = $this->parse( $content );

                            $this->get_scripts( $reusable_blocks );
                        }
                    } else {
                        // Get JS for the Block.
                        $js .= $this->get_block_js( $inner_block );
                    }
                }
            }

            echo $js;

            // @codingStandardsIgnoreEnd
		}

		/**
		 * Generates stylesheet and appends in head tag.
		 *
		 * @since 0.0.1
		 */
		public function generate_stylesheet() {

			$this_post = array();

			if ( is_single() || is_page() || is_404() ) {
				global $post;
				$this_post = $post;
				$this->_generate_stylesheet( $this_post );
				if ( ! is_object( $post ) ) {
					return;
				}
			} elseif ( is_archive() || is_home() || is_search() ) {
				global $wp_query;

				if ( $wp_query->have_posts() ) {
					while ( $wp_query->have_posts() ) {
						$wp_query->the_post();
						global $post;
						$this_post = $post;
						$this->_generate_stylesheet( $this_post );
					}
				}
			}
		}

		/**
		 * Generates stylesheet in loop.
		 *
		 * @param object $this_post Current Post Object.
		 * @since 1.7.0
		 */
		public function _generate_stylesheet( $this_post ) {

			if ( has_blocks( get_the_ID() ) ) {
				$blocks            = $this->parse( $this_post->post_content );
				self::$page_blocks = $blocks;

				if ( ! is_array( $blocks ) || empty( $blocks ) ) {
					return;
				}

				ob_start();
				?>
				<style type="text/css" media="all" id="uagb-style-frontend"><?php $this->get_stylesheet( $blocks ); ?></style>
				<?php
			}
		}

		/**
		 * Generates scripts and appends in footer tag.
		 *
		 * @since 1.5.0
		 */
		public function generate_script() {

			$blocks = self::$page_blocks;

			if ( ! is_array( $blocks ) || empty( $blocks ) ) {
				return;
			}

			ob_start();
			?>
			<script type="text/javascript" id="uagb-script-frontend">
				( function( $ ) {
					<?php $this->get_scripts( $blocks ); ?>
				})(jQuery)
			</script>
			<?php
		}

		/**
		 * Parse Guten Block.
		 *
		 * @param string $content the content string.
		 * @since 1.1.0
		 */
		public function parse( $content ) {

			global $wp_version;

			return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );
		}

		/**
		 * Generates stylesheet for reusable blocks.
		 *
		 * @param array $blocks Blocks array.
		 * @since 1.1.0
		 */
		public function get_stylesheet( $blocks ) {

			foreach ( $blocks as $i => $block ) {
				if ( is_array( $block ) ) {
					if ( 'core/block' == $block['blockName'] ) {
						$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

						if ( $id ) {
							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = $this->parse( $content );

							$this->get_stylesheet( $reusable_blocks );
						}
					} else {
						// Get CSS for the Block.
						$this->get_block_css( $block );
					}
				}
			}
		}


		/**
		 * Generates scripts for reusable blocks.
		 *
		 * @param array $blocks Blocks array.
		 * @since 1.6.0
		 */
		public function get_scripts( $blocks ) {

			foreach ( $blocks as $i => $block ) {
				if ( is_array( $block ) ) {
					if ( 'core/block' == $block['blockName'] ) {
						$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

						if ( $id ) {
							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = $this->parse( $content );

							$this->get_scripts( $reusable_blocks );
						}
					} else {
						// Get JS for the Block.
						$this->get_block_js( $block );
					}
				}
			}
		}

		/**
		 * Get Buttons default array.
		 *
		 * @since 0.0.1
		 */
		public static function get_button_defaults() {

			$default = array();

			for ( $i = 1; $i <= 2; $i++ ) {
				array_push(
					$default,
					array(
						'size'             => '',
						'vPadding'         => 10,
						'hPadding'         => 14,
						'borderWidth'      => 1,
						'borderRadius'     => 2,
						'borderStyle'      => 'solid',
						'borderColor'      => '#333',
						'borderHColor'     => '#333',
						'color'            => '#333',
						'background'       => '',
						'hColor'           => '#333',
						'hBackground'      => '',
						'sizeType'         => 'px',
						'sizeMobile'       => '',
						'sizeTablet'       => '',
						'lineHeightType'   => 'px',
						'lineHeight'       => '',
						'lineHeightMobile' => '',
						'lineHeightTablet' => '',
					)
				);
			}

			return $default;
		}

		/**
		 * Returns an option from the database for
		 * the admin settings page.
		 *
		 * @param  string  $key     The option key.
		 * @param  mixed   $default Option default value if option is not available.
		 * @param  boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
		 * @return string           Return the option value
		 */
		public static function get_admin_settings_option( $key, $default = false, $network_override = false ) {

			// Get the site-wide option if we're in the network admin.
			if ( $network_override && is_multisite() ) {
				$value = get_site_option( $key, $default );
			} else {
				$value = get_option( $key, $default );
			}

			return $value;
		}

		/**
		 * Updates an option from the admin settings page.
		 *
		 * @param string $key       The option key.
		 * @param mixed  $value     The value to update.
		 * @param bool   $network   Whether to allow the network admin setting to be overridden on subsites.
		 * @return mixed
		 */
		public static function update_admin_settings_option( $key, $value, $network = false ) {

			// Update the site-wide option since we're in the network admin.
			if ( $network && is_multisite() ) {
				update_site_option( $key, $value );
			} else {
				update_option( $key, $value );
			}
		}

		/**
		 * Is Knowledgebase.
		 *
		 * @return string
		 * @since 0.0.1
		 */
		public static function knowledgebase_data() {

			$knowledgebase = array(
				'enable_knowledgebase' => true,
				'knowledgebase_url'    => 'https://www.ultimategutenberg.com/docs/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard',
			);

			return $knowledgebase;
		}

		/**
		 * Is Knowledgebase.
		 *
		 * @return string
		 * @since 0.0.1
		 */
		public static function support_data() {

			$support = array(
				'enable_support' => true,
				'support_url'    => 'https://www.ultimategutenberg.com/support/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard',
			);

			return $support;
		}

		/**
		 * Provide Widget settings.
		 *
		 * @return array()
		 * @since 0.0.1
		 */
		public static function get_block_options() {

			$blocks       = self::$block_list;
			$saved_blocks = self::get_admin_settings_option( '_uagb_blocks' );
			if ( is_array( $blocks ) ) {
				foreach ( $blocks as $slug => $data ) {
					$_slug = str_replace( 'uagb/', '', $slug );

					if ( isset( $saved_blocks[ $_slug ] ) ) {
						if ( 'disabled' === $saved_blocks[ $_slug ] ) {
							$blocks[ $slug ]['is_activate'] = false;
						} else {
							$blocks[ $slug ]['is_activate'] = true;
						}
					} else {
						$blocks[ $slug ]['is_activate'] = ( isset( $data['default'] ) ) ? $data['default'] : false;
					}
				}
			}

			self::$block_list = $blocks;

			return apply_filters( 'uagb_enabled_blocks', self::$block_list );
		}

		/**
		 * Get Json Data.
		 *
		 * @since 1.8.1
		 * @return Array
		 */
		public static function backend_load_font_awesome_icons() {

			$json_file = UAGB_DIR . 'dist/blocks/uagb-controls/UAGBIcon.json';
			if ( ! file_exists( $json_file ) ) {
				return array();
			}

			// Function has already run.
			if ( null !== self::$icon_json ) {
				return self::$icon_json;
			}

			$str             = file_get_contents( $json_file );
			self::$icon_json = json_decode( $str, true );
			return self::$icon_json;
		}

		/**
		 * Generate SVG.
		 *
		 * @since 1.8.1
		 * @param  array $icon Decoded fontawesome json file data.
		 * @return string
		 */
		public static function render_svg_html( $icon ) {
			$icon = str_replace( 'far', '', $icon );
			$icon = str_replace( 'fas', '', $icon );
			$icon = str_replace( 'fab', '', $icon );
			$icon = str_replace( 'fa-', '', $icon );
			$icon = str_replace( 'fa', '', $icon );
			$icon = sanitize_text_field( esc_attr( $icon ) );

			$json = UAGB_Helper::backend_load_font_awesome_icons();
			$path = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['path'] : $json[ $icon ]['svg']['solid']['path'];
			$view = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['viewBox'] : $json[ $icon ]['svg']['solid']['viewBox'];
			if ( $view ) {
				$view = implode( ' ', $view );
			}
			$htm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox= "' . $view . '"><path d="' . $path . '"></path></svg>';
			return $htm;
		}

		/**
		 * Returns Query.
		 *
		 * @param array  $attributes The block attributes.
		 * @param string $block_type The Block Type.
		 * @since 1.8.2
		 */
		public static function get_query( $attributes, $block_type ) {

			// Block type is grid/masonry/carousel/timeline.
			$query_args = array(
				'posts_per_page'      => ( isset( $attributes['postsToShow'] ) ) ? $attributes['postsToShow'] : 6,
				'post_status'         => 'publish',
				'order'               => ( isset( $attributes['order'] ) ) ? $attributes['order'] : 'desc',
				'orderby'             => ( isset( $attributes['orderBy'] ) ) ? $attributes['orderBy'] : 'date',
				'category__in'        => ( isset( $attributes['categories'] ) ) ? $attributes['categories'] : '',
				'ignore_sticky_posts' => 1,
			);

			$query_args = apply_filters( "uagb_post_query_args_{$block_type}", $query_args );

			return new WP_Query( $query_args );
		}

		/**
		 * Get size information for all currently-registered image sizes.
		 *
		 * @global $_wp_additional_image_sizes
		 * @uses   get_intermediate_image_sizes()
		 * @link   https://codex.wordpress.org/Function_Reference/get_intermediate_image_sizes
		 * @since x.x.x
		 * @return array $sizes Data for all currently-registered image sizes.
		 */
		public static function get_image_sizes() {

			global $_wp_additional_image_sizes;

			$sizes       = get_intermediate_image_sizes();
			$image_sizes = array();

			$image_sizes[] = array(
				'value' => 'full',
				'label' => esc_html__( 'Full', 'ultimate-addons-for-gutenberg' ),
			);

			foreach ( $sizes as $size ) {
				if ( in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ) ) ) {
					$image_sizes[] = array(
						'value' => $size,
						'label' => ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
					);
				} else {
					$image_sizes[] = array(
						'value' => $size,
						'label' => sprintf(
							'%1$s (%2$sx%3$s)',
							ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
							$_wp_additional_image_sizes[ $size ]['width'],
							$_wp_additional_image_sizes[ $size ]['height']
						),
					);
				}
			}

			$image_sizes = apply_filters( 'uagb_post_featured_image_sizes', $image_sizes );

			return $image_sizes;
		}
	}

	/**
	 *  Prepare if class 'UAGB_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Helper::get_instance();
}
