export interface NavItem {
    displayName: string;
    iconName: string;
    route?: string;
    children?: NavItem[];
}

export const NavItemFake: NavItem[] = [
    {
        displayName: 'Browse',
        iconName: 'arrow-right',
        children: [
            {
                displayName: 'Web Development',
                iconName: 'arrow-down',
                children: [
                    {
                        displayName: 'Bootstrap',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'React',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'GraphQl',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Gatsby',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Grunt',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Svelte',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Meteor',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'HTML5',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Angular',
                        iconName: 'arrow-down',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Design',
                iconName: 'arrow-down',
                children: [
                    {
                        displayName: 'Graphic Design',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Illustrator',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'UX/UI Design',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Figma Design',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Adobe XD',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Sketch',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Icon Design',
                        iconName: 'arrow-down',
                        children: [],
                    },
                    {
                        displayName: 'Photoshop',
                        iconName: 'arrow-down',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Mobile App',
                iconName: 'arrow-down',
                children: [],
            },
            {
                displayName: 'IT Software',
                iconName: 'arrow-down',
                children: [],
            },
            {
                displayName: 'Marketing',
                iconName: 'arrow-down',
                children: [],
            },
            {
                displayName: 'Music',
                iconName: 'arrow-down',
                children: [],
            },
            {
                displayName: 'Life Style',
                iconName: 'arrow-down',
                children: [],
            },
            {
                displayName: 'Business',
                iconName: 'arrow-down',
                children: [],
            },
            {
                displayName: 'Photography',
                iconName: 'arrow-down',
                children: [],
            },
        ],
    },
    {
        displayName: 'Landings',
        iconName: 'arrow-right',
        children: [
            {
                displayName: 'Landings',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Home Academy',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Courses',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Lead Course',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Request Access',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'SaaS',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Job Listing',
                iconName: 'arrow-right',
                children: [],
            },
        ],
    },
    {
        displayName: 'Pages',
        iconName: 'arrow-right',
        children: [
            {
                displayName: 'Courses',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Course Single',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Course Single v2',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Course Resume',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Course Category',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Course Checkout',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Course List/Grid',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Add New Course',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Paths',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Browse Path',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Path Single',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Blog',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Listing',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Article',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Category',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Sidebar',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Career',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Overview',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Listing',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Opening',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Portfolio',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'List',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Single',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Job',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Home',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'List',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Grid',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Single',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Company List',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Company Single',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Specialty',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Coming Soon',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Error 404',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Maintenance Mode',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Terms & Conditions',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: '&nbsp;',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'About',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Help Center',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Help Center',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: "FAQ's",
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Guide',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Guid Single',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Support',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: 'Pricing',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Compare Plan',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Contact',
                iconName: 'arrow-right',
                children: [],
            },
        ],
    },
    {
        displayName: 'Accounts',
        iconName: 'arrow-right',
        children: [
            {
                displayName: 'Accounts',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Instructor',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Instructor',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Instructor dashboard for manage courses and earning.',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Dashboard',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Profile',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'My Courses',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Orders',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Reviews',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Students',
                        iconName: 'arrow-right',
                        children: [],
                    },

                    {
                        displayName: 'Payouts',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Earning',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Quiz',
                        iconName: 'arrow-right',
                        children: [
                            {
                                displayName: 'Quiz',
                                iconName: 'arrow-right',
                                children: [],
                            },
                            {
                                displayName: 'Single',
                                iconName: 'arrow-right',
                                children: [],
                            },
                            {
                                displayName: 'Result',
                                iconName: 'arrow-right',
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                displayName: 'Students',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Students',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Students dashboard to manage your courses and subscriptions.',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: '&nbsp;',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Dashboard',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Subscriptions',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Payments',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Billing Info',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Invoice',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Invoice Details',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Bookmarked',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'My Path',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Quiz',
                        iconName: 'arrow-right',
                        children: [
                            {
                                displayName: 'Quiz',
                                iconName: 'arrow-right',
                                children: [],
                            },
                            {
                                displayName: 'Attempt',
                                iconName: 'arrow-right',
                                children: [],
                            },
                            {
                                displayName: 'Start',
                                iconName: 'arrow-right',
                                children: [],
                            },
                            {
                                displayName: 'Result',
                                iconName: 'arrow-right',
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                displayName: 'Admin',
                iconName: 'arrow-right',
                children: [
                    {
                        displayName: 'Master Admin',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName:
                            'Master admin dashboard to manage courses, user, site setting , and work with amazing apps.',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: '&nbsp;',
                        iconName: 'arrow-right',
                        children: [],
                    },
                    {
                        displayName: 'Go to Dashboard',
                        iconName: 'arrow-right',
                        children: [],
                    },
                ],
            },
            {
                displayName: '&nbsp;',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Sign In',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Sign Up',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Forgot Password',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Edit Profile',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Security',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Social Profiles',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Notifications',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Privacy Settings',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Delete Profile',
                iconName: 'arrow-right',
                children: [],
            },
            {
                displayName: 'Linked Account',
                iconName: 'arrow-right',
                children: [],
            },
        ],
    },
];
