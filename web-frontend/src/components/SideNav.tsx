import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight as ArrowSquareUpRightIcon } from '@mui/icons-material';
import { CoffeeMakerTwoTone as CaretUpDownIcon } from '@mui/icons-material';

import type { NavItemConfig } from '../model/NavItem';
import { paths } from '../model/path';
import { isNavItemActive } from '../model/isNavItemActive';

import { navItems } from '../model/config';
import { navIcons } from '../model/navIcons';
import {AdbIcon} from "../components/Icons";

export function SideNav(): React.JSX.Element {
    const pathname = "jhvkjdh";

    return (
        <Box
            sx={{
                '--SideNav-background': 'var(--mui-palette-neutral-950)',
                '--SideNav-color': 'var(--mui-palette-common-white)',
                '--NavItem-color': 'var(--mui-palette-neutral-300)',
                '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
                '--NavItem-active-background': 'var(--mui-palette-primary-main)',
                '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
                '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
                '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
                '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
                '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
                bgcolor: '#605143',
                color: 'whitesmoke',
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                height: '100%',
                left: 0,
                maxWidth: '100%',
                position: 'fixed',
                scrollbarWidth: 'none',
                top: 0,
                width: 'var(--SideNav-width)',
                zIndex: 'var(--SideNav-zIndex)',
                '&::-webkit-scrollbar': { display: 'none' },
            }}
        >
            <Stack spacing={2} sx={{ p: 3 }}>
                <Box component={'a'} href={paths.home} sx={{ display: 'inline-flex' }}>
                    <AdbIcon />
                </Box>
                <Box
                    sx={{
                        alignItems: 'center',
                        backgroundColor: 'var(--mui-palette-neutral-950)',
                        border: '1px solid var(--mui-palette-neutral-700)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        p: '4px 12px',
                    }}
                >
                    <Box sx={{ flex: '1 1 auto' }}>
                        <Typography color="var(--mui-palette-neutral-400)" variant="body2">
                            Workspace
                        </Typography>
                        <Typography color="inherit" variant="subtitle1">
                            Shruti
                        </Typography>
                    </Box>
                    <CaretUpDownIcon />
                </Box>
            </Stack>
            <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
            <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
                {renderNavItems({ pathname, items: navItems })}
            </Box>
            <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
            <Stack spacing={2} sx={{ p: '12px' }}>
                <div>
                    <Typography color="var(--mui-palette-neutral-100)" variant="subtitle2">
                        This page is work in progress!
                    </Typography>
                    <Typography color="var(--mui-palette-neutral-400)" variant="body2">
                        Hope it will be able to serve the audience soon!
                    </Typography>
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <AdbIcon />
                </Box>
                <Button
                    component="a"
                    endIcon={<ArrowSquareUpRightIcon />}
                    fullWidth
                    href="#"
                    sx={{ mt: 2 }}
                    target="_blank"
                    variant="contained"
                >
                    TODO
                </Button>
            </Stack>
        </Box>
    );
}

function renderNavItems({ items = [], pathname }: { items?: NavItemConfig[]; pathname: string }): React.JSX.Element {
    const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
        const { key, ...item } = curr;

        acc.push(<NavItem key={key} pathname={pathname} {...item} />);

        return acc;
    }, []);

    return (
        <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {children}
        </Stack>
    );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
    pathname: string;
}

function NavItem({ disabled, external, href, icon, matcher, pathname, title }: NavItemProps): React.JSX.Element {
    const active = isNavItemActive({ disabled, external, href, matcher, pathname });
    const Icon = icon ? navIcons[icon] : null;

    return (
        <li>
            <Box
                {...(href
                    ? {
                        component: external ? 'a' : 'a',
                        href,
                        target: external ? '_blank' : undefined,
                        rel: external ? 'noreferrer' : undefined,
                    }
                    : { role: 'button' })}
                sx={{
                    alignItems: 'center',
                    borderRadius: 1,
                    color: 'var(--NavItem-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    flex: '0 0 auto',
                    gap: 1,
                    p: '6px 16px',
                    position: 'relative',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    ...(disabled && {
                        bgcolor: 'var(--NavItem-disabled-background)',
                        color: 'var(--NavItem-disabled-color)',
                        cursor: 'not-allowed',
                    }),
                    ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
                }}
            >
                <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
                    {Icon ? (
                        <Icon



                        />
                    ) : null}
                </Box>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography
                        component="span"
                        sx={{ color: 'inherit', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px' }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </li>
    );
}