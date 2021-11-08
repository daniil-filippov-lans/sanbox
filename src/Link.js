import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

const Anchor = styled.apply('a')({});

export const NextLinkComposed = React.forwardRef(function NextLinkComposed(
    props,
    ref
) {
    const {
        to,
        linkAs,
        href,
        replace,
        scroll,
        shallow,
        prefetch,
        locale,
        ...other
    } = props;

    return (
        <NextLink
            href={to}
            prefetch={prefetch}
            as={linkAs}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            locale={locale}
        >
            <Anchor ref={ref} {...other} />
        </NextLink>
    );
});

NextLinkComposed.propTypes = {
    href: PropTypes.any,
    linkAs: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    locale: PropTypes.string,
    passHref: PropTypes.bool,
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    scroll: PropTypes.bool,
    shallow: PropTypes.bool,
    to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

const Link = React.forwardRef(function Link(props, ref) {
    const {
        activeClassName = 'active',
        as: linkAs,
        className: classNameProps,
        href,
        noLinkStyle,
        role,
        ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });
    const isExternal =
        typeof href === 'string' &&
        (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

    if (isExternal)
        if (noLinkStyle)
            return (
                <Anchor
                    className={className}
                    href={href}
                    ref={ref}
                    {...other}
                />
            );
        else
            return (
                <MuiLink
                    className={className}
                    href={href}
                    ref={ref}
                    {...other}
                />
            );
});
