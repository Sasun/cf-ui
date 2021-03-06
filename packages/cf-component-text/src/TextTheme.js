export default baseTheme => ({
  fontSizeNormal: '1em',
  fontWeightNormal: 400,
  fontSizeSmall: '.8em',
  lineHeightSmall: 1.3,
  textAlignStart: 'left',
  textAlignCenter: 'center',
  textAlignJustify: 'justify',
  textAlignEnd: 'right',
  textTransformCapitalize: 'capitalize',
  'textTransformTitlecase:first-letter': 'capitalize',
  textTransformLowercase: 'lowercase',
  textTransformUppercase: 'uppercase',
  colorInfo: baseTheme.colorInfo,
  colorSuccess: baseTheme.colorSuccess,
  colorWarning: baseTheme.colorWarning,
  colorError: baseTheme.colorError,
  colorMuted: baseTheme.colorMuted
});
