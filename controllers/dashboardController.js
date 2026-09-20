export const dashboardController = {
    index: (req, res) => {
        
        const recentActivity = [
                {
                    icon: 'check',
                    iconBg: 'bg-emerald-50',
                    iconColor: 'text-emerald-600',
                    title: 'Order #10482 completed',
                    description: 'Maria Santos placed an order worth $248.00.',
                    time: '12 minutes ago'
                },
                {
                    icon: 'user-plus',
                    iconBg: 'bg-blue-50',
                    iconColor: 'text-blue-600',
                    title: 'New customer signed up',
                    description: 'Alex Cruz created a new account.',
                    time: '36 minutes ago'
                },
                {
                    icon: 'file-pen-line',
                    iconBg: 'bg-violet-50',
                    iconColor: 'text-violet-600',
                    title: 'Project updated',
                    description: 'Website redesign moved to QA review.',
                    time: '1 hour ago'
                },
                {
                    icon: 'triangle-alert',
                    iconBg: 'bg-amber-50',
                    iconColor: 'text-amber-600',
                    title: 'Payment requires review',
                    description: 'Transaction #8821 needs manual verification.',
                    time: '2 hours ago'
                }
            ]

            const topProducts = [
                {
                    icon: 'laptop',
                    name: 'Apex Laptop Pro',
                    category: 'Electronics',
                    orders: 284,
                    revenue: '$24,820',
                    trend: '18.4%',
                    trendUp: true
                },
                {
                    icon: 'headphones',
                    name: 'CloudSound Headphones',
                    category: 'Audio',
                    orders: 212,
                    revenue: '$13,420',
                    trend: '11.2%',
                    trendUp: true
                },
                {
                    icon: 'smartphone',
                    name: 'Nova X1',
                    category: 'Mobile',
                    orders: 176,
                    revenue: '$11,906',
                    trend: '3.8%',
                    trendUp: false
                },
                {
                    icon: 'watch',
                    name: 'Pulse Watch 4',
                    category: 'Wearables',
                    orders: 148,
                    revenue: '$9,440',
                    trend: '7.1%',
                    trendUp: true
                }
            ]
        
        res.render("dashboard_assignment", {
            topProducts, 
            recentActivity
        })
    }
}