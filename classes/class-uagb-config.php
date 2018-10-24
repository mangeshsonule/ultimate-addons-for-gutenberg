<?php
/**
 * UAGB Config.
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Config' ) ) {

	/**
	 * Class UAGB_Config.
	 */
	class UAGB_Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {

				self::$block_attributes = array(
					'uagb/section'          => array(
						'slug'       => '',
						'title'      => __( 'Section', 'uagb' ),
						'attributes' => array(
							'topPadding'             => '20',
							'bottomPadding'          => '20',
							'leftPadding'            => '20',
							'rightPadding'           => '20',
							'topMargin'              => '0',
							'bottomMargin'           => '0',
							'leftMargin'             => '0',
							'rightMargin'            => '0',
							'contentWidth'           => 'boxed',
							'width'                  => '',
							'innerWidth'             => '',
							'tag'                    => 'section',
							'backgroundType'         => 'none',
							'gradientColor1'         => '',
							'gradientColor2'         => '',
							'backgroundVideoColor'   => '',
							'backgroundPosition'     => 'center-center',
							'backgroundSize'         => 'cover',
							'backgroundRepeat'       => 'no-repeat',
							'backgroundAttachment'   => 'scroll',
							'gradientType'           => 'linear',
							'gradientLocation1'      => '0',
							'gradientLocation2'      => '100',
							'gradientAngle'          => '0',
							'backgroundColor'        => '',
							'backgroundOpacity'      => '0',
							'backgroundVideoOpacity' => '50',
							'align'                  => '',
						),
					),
					'uagb/advanced-heading' => array(
						'slug'       => '',
						'title'      => __( 'Advanced Heading', 'uagb' ),
						'attributes' => array(
							'headingTitle'    => '',
							'headingDesc'     => '',
							'headingAlign'    => 'center',
							'headingColor'    => '',
							'subHeadingColor' => '',
							'separatorColor'  => '',
							'headingTag'      => 'h1',
							'separatorHeight' => '',
							'separatorWidth'  => '',
							'headFontSize'    => '',
							'subHeadFontSize' => '',
							'headSpace'       => 15,
							'separatorSpace'  => 15,
							'subHeadSpace'    => '',
						),
					),
					'uagb/info-box'         => array(
						'slug'       => '',
						'title'      => __( 'InfoBox', 'uagb' ),
						'attributes' => array(
							'headingAlign'        => 'center',
							'headingColor'        => '',
							'subHeadingColor'     => '',
							'prefixColor'         => '',
							'prefixFontSize'      => '',
							'headFontSize'        => '',
							'subHeadFontSize'     => '',
							'separatorWidth'      => '',
							'separatorHeight'     => '',
							'headSpace'           => '',
							'separatorSpace'      => '',
							'subHeadSpace'        => '',
							'icon'                => '',
							'iconColor'           => '#333',
							'iconSize'            => '40',
							'iconRotate'          => '0',
							'iconimgPosition'     => 'above-title',
							'block_id'            => '',
							'iconHover'           => '',
							'iconBgHover'         => '',
							'iconimgBorderHover'  => '',
							'iconimgBorder'       => '#eee',
							'iconimgBg'           => '',
							'iconimgBorderstyle'  => 'solid',
							'iconimgBorderWidth'  => '1',
							'iconimgBorderRadius' => '0',
							'iconimgbgSize'       => '15',
							'seperatorStyle'      => 'solid',
							'seperatorWidth'      => '30',
							'seperatorColor'      => '#61ce70',
							'seperatorThickness'  => '2',
							'ctaLinkColor'        => '#61ce70',
							'ctaFontSize'         => '12',
							'ctaLineHeight'       => '12',
							'ctaBtnSize'          => 'sm',
							'ctaBtnLinkColor'     => '#fff',
							'ctaBgColor'          => '#61ce70',
							'ctaBtnPadding'       => '',
							'ctaBorderStyle'      => 'none',
							'ctaBorderColor'      => '',
							'ctaBorderWidth'      => '',
							'ctaBorderRadius'     => '',
							'prefixSpace'         => '10',
							'iconLeftMargin'      => '5',
							'iconRightMargin'     => '5',
							'iconTopMargin'       => '5',
							'iconBottomMargin'    => '5',
							'imageSize'           => 'thumbnail',
							'imageWidth'          => '120',
							'backgroundType'      => '',
							'backgroundColor'     => '',
							'backgroundImage'     => '',
							'backgroundPosition'  => 'center-center',
							'backgroundSize'      => 'cover',
							'backgroundRepeat'    => 'no-repeat',
							'backgroundOpacity'   => '100',
							'gradientColor1'      => '',
							'gradientColor2'      => '',
							'gradientType'        => 'linear',
							'gradientLocation1'   => '0',
							'gradientLocation2'   => '100',
							'gradientDirection'   => 'center_center',
							'gradientAngle'       => '0',
							'blockPadding'        => '10',
							'blockMargin'         => '',
							'enableBorder'        => 'false',
							'borderstyle'         => 'solid',
							'borderWidth'         => '1',
							'borderRadius'        => '0',
						),
					),
					'uagb/buttons'          => array(
						'slug'       => '',
						'title'      => __( 'Multi Buttons', 'uagb' ),
						'attributes' => array(
							'block_id'  => '',
							'align'     => 'center',
							'btn_count' => '2',
							'buttons'   => UAGB_Helper::get_button_defaults(),
							'gap'       => 10,
							'stack'     => 'none',
						),
					),
					'uagb/google-map'       => array(
						'slug'       => '',
						'title'      => __( 'Google Map', 'uagb' ),
						'attributes' => array(
							'markers'           => array(
								array(
									'lat'         => '51.503333',
									'lon'         => '-0.119562',
									'title'       => 'Coca-Cola London Eye',
									'desc'        => '',
									'infoTrigger' => 'none',
								),
							),
							'block_id'          => '',
							'align'             => 'center',
							'marker_count'      => 1,
							'mapType'           => 'roadmap',
							'mapSkin'           => 'standard',
							'customStyle'       => '',
							'zoom'              => 12,
							'height'            => 500,
							'fullscreenControl' => 'true',
							'gestureHandling'   => 'true',
							'streetViewControl' => 'true',
							'mapTypeControl'    => 'true',
							'zoomControl'       => 'true',
							'cluster'           => 'false',
						),
					),
					'uagb/team'       => array(
						'slug'       => '',
						'title'      => __( 'Team', 'uagb' ),
						'attributes' => array(
							"block_id" => "",
							"align" => "center",
							"tag" => "h3",
							"title" => "John Doe",
							"prefix" => "Designation",
							"description_text" => "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
							"titleColor" => "",
							"prefixColor" => "#888888",
							"descColor" => "",
							"socialColor" => "#333",
							"socialHoverColor" => "",
							"titleFontSize" => "",
							"prefixFontSize" => 15,
							"descFontSize" => "",
							"socialFontSize" => 30,
							"image" => "",
							"imgStyle" => "normal",
							"imgPosition" => "above",
							"imgAlign" => "top",
							"imgSiz" => "thumbnail",
							"imgWidth" => 120,
							"titleSpace" => "",
							"prefixSpace" => "",
							"descSpace" => 10,
							"imgLeftMargin" => 5,
							"imgRightMargin" => 5,
							"imgTopMargin" => 5,
							"imgBottomMargin" => 5,
							"socialSpace" => 10,
							"twitterIcon" => "fab fa fa-twitter-square",
							"fbIcon" => "fab fa fa-facebook-official",
							"linkedinIcon" => "fab fa fa-linkedin-square",
							"pinIcon" => "fab fa fa-pinterest-square",
							"twitterLink" => "",
							"fbLink" => "",
							"linkedinLink" => "",
							"pinLink" => "",
						),
					),
				);
			}
			return self::$block_attributes;
		}
	}
}
