import Typography from 'typography';
import wordpress2016Theme from 'typography-theme-wordpress-2016';

wordpress2016Theme.overrideThemeStyles = () => ({
    a: {
        color: 'var(--textLink)',
        boxShadow: 'none',
    },
    h1: {
        fontFamily: 'Bookman Old Style',
    },
});

wordpress2016Theme.headerFontFamily = ['Bookman Old Style', 'sans-serif'];
wordpress2016Theme.bodyFontFamily = ['Bookman Old Style', 'sans-serif'];

delete wordpress2016Theme.googleFonts;
const typography = new Typography(wordpress2016Theme);

export const { scale, rhythm, options } = typography;
export default typography;
