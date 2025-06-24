const defaultStyle = {
    select: {
        defaultProps: {
            className: "text-teal-blue dark:text-white font-semibold !border-teal-blue focus:!border-teal-blue dark:!border-white dark:focus:!border-white",
            labelProps: {
                className: "!text-teal-blue dark:!text-white",
            },
            variant: "standard",
        },
    },
    input: {
        defaultProps: {
            className: "text-teal-blue dark:text-white font-semibold !border-teal-blue focus:!border-teal-blue dark:!border-white dark:focus:!border-white disabled:bg-transparent !disabled:!border-b-white",
            labelProps: {
                className: "!text-teal-blue dark:!text-white",
            },
            variant: "standard",
        },
    },
    textarea: {
        defaultProps: {
            className: "text-teal-blue dark:text-white font-semibold !border-teal-blue focus:!border-teal-blue dark:!border-white dark:focus:!border-white",
            labelProps: {
                className: "!text-teal-blue dark:!text-white",
            },
            variant: "standard",
        },
    },
    button: {
        defaultProps: {
            className: "bg-teal-blue hover:bg-dark-teal-blue hover:text-gray-200 focus:outline-none focus:ring-2",
            size: "sm"
        },
    },
    iconButton: {
        defaultProps: {
            className: "bg-teal-blue hover:bg-dark-teal-blue hover:text-gray-200 focus:outline-none focus:ring-2",
            size: "sm"
        },
    },
};

export default defaultStyle
