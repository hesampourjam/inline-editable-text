import React, { useState } from 'react';

const InlineEditableText = ({
                                initialValue,
                                onSave,
                                type = 'text',
                                placeholder,
                                placeholderClass,
                                valueClass='',
                                ...componentProps
                            }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue || '');

    const handleSave = () => {
        onSave(value);
        setIsEditing(false);
    };

    const handleBlur = () => {
        handleSave();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey === false && type !== 'textarea') {
            e.preventDefault();
            handleSave();
        }
    };

    const renderInput = () => {
        if (type === 'textarea') {
            return (
                <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    {...componentProps}
                />
            );
        } else {
            return (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    {...componentProps}
                />
            );
        }
    };

    return (
        <div>
            {isEditing ? (
                renderInput()
            ) : (
                <div onClick={() => setIsEditing(true)} className={placeholderClass}>
                    {value ? <div className={valueClass}>{value}</div> : placeholder }
                </div>
            )}
        </div>
    );
};

export default InlineEditableText;
