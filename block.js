( function( blocks, editor, i18n, element ) {
	var el       = element.createElement;
	var __       = i18n.__;
	var RichText = editor.RichText;

	blocks.registerBlockType(
		'my-g-block/border-block',
		{
			title: __( 'Border Block', 'My G Block' ),
			icon: 'admin-appearance',
			category: 'layout',

			attributes: {
				content: {
					type: 'array',
					source: 'children',
					selector: 'p',
				},
			},
            styles: [
                { name: 'default', label: __( 'Default' ), isDefault: true },
                { name: 'style1', label: __( 'Style 1' ) },
                { name: 'style2', label: __( 'Style 2' ) },
                { name: 'style3', label: __( 'Style 3' ) },
                { name: 'style4', label: __( 'Style 4' ) },
                { name: 'style5', label: __( 'Style 5' ) },
                { name: 'style6', label: __( 'Style 6' ) },
                { name: 'style7', label: __( 'Style 7' ) },
                { name: 'style8', label: __( 'Style 8' ) },
            ],

			edit: function( props ) {
				var content = props.attributes.content;
				function onChangeContent( newContent ) {
					props.setAttributes( { content: newContent } );
				}

				return el(
					RichText,
					{
						tagName: 'p',
						className: props.className,
						onChange: onChangeContent,
						value: content,
					}
				);
			},

			save: function( props ) {
				return el(
					RichText.Content,
					{
						tagName: 'p',
						value: props.attributes.content,
					}
				);
			},
		}
	);
}(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element
) );
