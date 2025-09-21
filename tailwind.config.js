module.exports = {
    theme: {
        extend: {
            keyframes: {
                spinSlow: {
                    '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
                    '50%': { transform: 'rotateY(180deg) rotateX(15deg)' },
                    '100%': { transform: 'rotateY(360deg) rotateX(0deg)' },
                },
            },
            animation: {
                'spin-slow': 'spinSlow 8s linear infinite',
            },
        },
    },
    plugins: [],
};
