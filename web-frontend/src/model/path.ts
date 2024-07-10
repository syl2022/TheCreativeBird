export const paths = {
    home: '/',
    auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
    dashboard: {
        overview: '/home',
        account: '/dashboard/account',
        customers: '/dashboard/customers',
        integrations: '/create',
        settings: '/dashboard/settings',
    },
    errors: { notFound: '/errors/not-found' },
} as const;