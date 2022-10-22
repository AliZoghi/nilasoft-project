export interface NavItem {
    displayName: string;
    iconName?: string;
    route?: string;
    options?: object;
    children?: NavItem[];
}

export const NavItemFake: NavItem[] = [
    {
        displayName: 'Browse',
        iconName: 'angle-down',
        children: [
            {
                displayName: 'Web Development',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Bootstrap',
                        children: [],
                    },
                    {
                        displayName: 'React',
                        children: [],
                    },
                    {
                        displayName: 'GraphQl',
                        children: [],
                    },
                    {
                        displayName: 'Gatsby',
                        children: [],
                    },
                    {
                        displayName: 'Grunt',

                        children: [],
                    },
                    {
                        displayName: 'Svelte',

                        children: [],
                    },
                    {
                        displayName: 'Meteor',

                        children: [],
                    },
                    {
                        displayName: 'HTML5',

                        children: [],
                    },
                    {
                        displayName: 'Angular',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Design',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Graphic Design',

                        children: [],
                    },
                    {
                        displayName: 'Illustrator',

                        children: [],
                    },
                    {
                        displayName: 'UX/UI Design',

                        children: [],
                    },
                    {
                        displayName: 'Figma Design',

                        children: [],
                    },
                    {
                        displayName: 'Adobe XD',

                        children: [],
                    },
                    {
                        displayName: 'Sketch',

                        children: [],
                    },
                    {
                        displayName: 'Icon Design',

                        children: [],
                    },
                    {
                        displayName: 'Photoshop',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Mobile App',

                children: [],
            },
            {
                displayName: 'IT Software',

                children: [],
            },
            {
                displayName: 'Marketing',

                children: [],
            },
            {
                displayName: 'Music',

                children: [],
            },
            {
                displayName: 'Life Style',

                children: [],
            },
            {
                displayName: 'Business',

                children: [],
            },
            {
                displayName: 'Photography',

                children: [],
            },
        ],
    },
    {
        displayName: 'Landings',
        iconName: 'angle-down',

        children: [
            {
                displayName: 'Landings',
                options: {
                    style: {
                        heading: true,
                    },
                },
                children: [],
            },
            {
                displayName: 'Home Academy',
                options: {
                    component: {
                        label: 'New',
                    },
                },
                children: [],
            },
            {
                displayName: 'Courses',

                children: [],
            },
            {
                displayName: 'Lead Course',

                children: [],
            },
            {
                displayName: 'Request Access',

                children: [],
            },
            {
                displayName: 'SaaS',

                children: [],
            },
            {
                displayName: 'Job Listing',

                children: [],
            },
        ],
    },
    {
        displayName: 'Pages',
        iconName: 'angle-down',
        children: [
            {
                displayName: 'Courses',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Course Single',

                        children: [],
                    },
                    {
                        displayName: 'Course Single v2',

                        children: [],
                    },
                    {
                        displayName: 'Course Resume',

                        children: [],
                    },
                    {
                        displayName: 'Course Category',

                        children: [],
                    },
                    {
                        displayName: 'Course Checkout',

                        children: [],
                    },
                    {
                        displayName: 'Course List/Grid',

                        children: [],
                    },
                    {
                        displayName: 'Add New Course',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Paths',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Browse Path',

                        children: [],
                    },
                    {
                        displayName: 'Path Single',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Blog',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Listing',

                        children: [],
                    },
                    {
                        displayName: 'Article',

                        children: [],
                    },
                    {
                        displayName: 'Category',

                        children: [],
                    },
                    {
                        displayName: 'Sidebar',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Career',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Overview',

                        children: [],
                    },
                    {
                        displayName: 'Listing',

                        children: [],
                    },
                    {
                        displayName: 'Opening',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Portfolio',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'List',

                        children: [],
                    },
                    {
                        displayName: 'Single',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Job',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Home',

                        children: [],
                    },
                    {
                        displayName: 'List',

                        children: [],
                    },
                    {
                        displayName: 'Grid',

                        children: [],
                    },
                    {
                        displayName: 'Single',

                        children: [],
                    },
                    {
                        displayName: 'Company List',

                        children: [],
                    },
                    {
                        displayName: 'Company Single',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Specialty',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Coming Soon',

                        children: [],
                    },
                    {
                        displayName: 'Error 404',

                        children: [],
                    },
                    {
                        displayName: 'Maintenance Mode',

                        children: [],
                    },
                    {
                        displayName: 'Terms & Conditions',

                        children: [],
                    },
                ],
            },
            {
                displayName: '',
                options: {
                    style: {
                        border: true,
                    },
                },
                children: [],
            },
            {
                displayName: 'About',

                children: [],
            },
            {
                displayName: 'Help Center',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Help Center',

                        children: [],
                    },
                    {
                        displayName: "FAQ's",

                        children: [],
                    },
                    {
                        displayName: 'Guide',

                        children: [],
                    },
                    {
                        displayName: 'Guid Single',

                        children: [],
                    },
                    {
                        displayName: 'Support',

                        children: [],
                    },
                ],
            },
            {
                displayName: 'Pricing',

                children: [],
            },
            {
                displayName: 'Compare Plan',

                children: [],
            },
            {
                displayName: 'Contact',

                children: [],
            },
        ],
    },
    {
        displayName: 'Accounts',
        iconName: 'angle-down',
        children: [
            {
                displayName: 'Accounts',

                children: [],
            },
            {
                displayName: 'Instructor',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Instructor',

                        children: [],
                    },
                    {
                        displayName: 'Instructor dashboard for manage courses and earning.',

                        children: [],
                    },
                    {
                        displayName: 'Dashboard',

                        children: [],
                    },
                    {
                        displayName: 'Profile',

                        children: [],
                    },
                    {
                        displayName: 'My Courses',

                        children: [],
                    },
                    {
                        displayName: 'Orders',

                        children: [],
                    },
                    {
                        displayName: 'Reviews',

                        children: [],
                    },
                    {
                        displayName: 'Students',

                        children: [],
                    },

                    {
                        displayName: 'Payouts',

                        children: [],
                    },
                    {
                        displayName: 'Earning',

                        children: [],
                    },
                    {
                        displayName: 'Quiz',
                        iconName: 'angle-right',
                        children: [
                            {
                                displayName: 'Quiz',

                                children: [],
                            },
                            {
                                displayName: 'Single',

                                children: [],
                            },
                            {
                                displayName: 'Result',

                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                displayName: 'Students',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Students',

                        children: [],
                    },
                    {
                        displayName: 'Students dashboard to manage your courses and subscriptions.',

                        children: [],
                    },
                    {
                        displayName: '&nbsp;',

                        children: [],
                    },
                    {
                        displayName: 'Dashboard',

                        children: [],
                    },
                    {
                        displayName: 'Subscriptions',

                        children: [],
                    },
                    {
                        displayName: 'Payments',

                        children: [],
                    },
                    {
                        displayName: 'Billing Info',

                        children: [],
                    },
                    {
                        displayName: 'Invoice',

                        children: [],
                    },
                    {
                        displayName: 'Invoice Details',

                        children: [],
                    },
                    {
                        displayName: 'Bookmarked',

                        children: [],
                    },
                    {
                        displayName: 'My Path',

                        children: [],
                    },
                    {
                        displayName: 'Quiz',
                        iconName: 'angle-right',
                        children: [
                            {
                                displayName: 'Quiz',

                                children: [],
                            },
                            {
                                displayName: 'Attempt',

                                children: [],
                            },
                            {
                                displayName: 'Start',

                                children: [],
                            },
                            {
                                displayName: 'Result',

                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                displayName: 'Admin',
                iconName: 'angle-right',
                children: [
                    {
                        displayName: 'Master Admin',

                        children: [],
                    },
                    {
                        displayName:
                            'Master admin dashboard to manage courses, user, site setting , and work with amazing apps.',

                        children: [],
                    },
                    {
                        displayName: '&nbsp;',

                        children: [],
                    },
                    {
                        displayName: 'Go to Dashboard',

                        children: [],
                    },
                ],
            },
            {
                displayName: '&nbsp;',

                children: [],
            },
            {
                displayName: 'Sign In',

                children: [],
            },
            {
                displayName: 'Sign Up',

                children: [],
            },
            {
                displayName: 'Forgot Password',

                children: [],
            },
            {
                displayName: 'Edit Profile',

                children: [],
            },
            {
                displayName: 'Security',

                children: [],
            },
            {
                displayName: 'Social Profiles',

                children: [],
            },
            {
                displayName: 'Notifications',

                children: [],
            },
            {
                displayName: 'Privacy Settings',

                children: [],
            },
            {
                displayName: 'Delete Profile',

                children: [],
            },
            {
                displayName: 'Linked Account',

                children: [],
            },
        ],
    },
];
