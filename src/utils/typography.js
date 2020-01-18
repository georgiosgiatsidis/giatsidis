import Typography from 'typography';
import wordpress2016Theme from 'typography-theme-wordpress-2016';

wordpress2016Theme.overrideThemeStyles = () => ({
    a: {
        color: 'var(--textLink)',
        boxShadow: 'none',
    },
});

// delete wordpress2016Theme.googleFonts;
const typography = new Typography(wordpress2016Theme);

export const { scale, rhythm, options } = typography;
export default typography;
