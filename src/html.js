import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    href="http://fonts.cdnfonts.com/css/bookman-old-style"
                    rel="stylesheet"
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.intergramId = "339090681";
                            window.intergramServer = "https://chat.giatsidis.com";
                            window.intergramCustomizations = {
                                alwaysUseFloatingButton: true
                            }
                        `,
                    }}
                />
                <script
                    id="intergram"
                    type="text/javascript"
                    src="https://chat.giatsidis.com/js/widget.js"
                ></script>
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
