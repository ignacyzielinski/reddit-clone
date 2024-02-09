const Button = (props) => {
    const backgroundColorClass = {
        orange: 'bg-orange-600',
        blue: 'bg-blue-500',
        white: 'bg-white'
    };

    const textColorClass = {
        white: 'text-white',
        blue: 'text-blue-500'
    };

    const borderColorClass = {
        none: '',
        blue: 'border-blue-500'
    }
    const borderClass = borderColorClass[props.borderColor]
    const backgroundClass = backgroundColorClass[props.backgroundColor];
    const textClass = textColorClass[props.textColor];

    return (
        <div className={`text-center ${backgroundClass} rounded-2xl ${textClass} font-bold font-3xl p-1 hover:opacity-80 mx-4 border border-solid cursor-pointer ${borderClass}`}>
            <div>{props.text}</div>
        </div>
    );
};

export default Button;
