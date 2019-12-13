/**
 * External Dependencies
 */

import React, { forwardRef } from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */

const View = forwardRef(({ classes, children, ...rest }, ref) => {
    const viewClassName = classNames("view", classes);

    return (
        <div ref={ref} className={viewClassName} {...rest}>
            {children}
        </div>
    );
});

export default View;
