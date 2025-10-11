export const getColorClasses = (color) => {
    const colors = {
        blue: {
            bg: 'bg-blue-50',
            text: 'text-blue-700',
            icon: 'text-blue-600',
            gradient: 'from-blue-500 to-blue-600',
            border: 'border-blue-200',
            light: 'bg-blue-25'
        },
        emerald: {
            bg: 'bg-emerald-50',
            text: 'text-emerald-700',
            icon: 'text-emerald-600',
            gradient: 'from-emerald-500 to-emerald-600',
            border: 'border-emerald-200',
            light: 'bg-emerald-25'
        },
        violet: {
            bg: 'bg-violet-50',
            text: 'text-violet-700',
            icon: 'text-violet-600',
            gradient: 'from-violet-500 to-violet-600',
            border: 'border-violet-200',
            light: 'bg-violet-25'
        },
        orange: {
            bg: 'bg-orange-50',
            text: 'text-orange-700',
            icon: 'text-orange-600',
            gradient: 'from-orange-500 to-orange-600',
            border: 'border-orange-200',
            light: 'bg-orange-25'
        }
    };

    return colors[color] || colors.blue;
};
