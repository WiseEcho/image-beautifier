import { useState, useEffect } from 'react';
import Icon from '@components/Icon';
import { InputNumber, Button, Tooltip } from 'antd';

export default ({ frameWidth, frameHeight, type, onSet }) => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const setAuto = () => {
        onSet({ type: 'auto', title: 'Auto' });
    };
    const setCustom = () => {
        onSet({ type: 'custom', title: '自定义', width, height });
    };
    useEffect(() => {
        if (type === 'custom') {
            setWidth(frameWidth);
            setHeight(frameHeight);
        } else {
            setWidth('');
            setHeight('');
        }
    }, [type]);
    return (
        <div className='flex gap-2 items-center py-2 font-normal'>
            <InputNumber
                min={1}
                value={width}
                onChange={setWidth}
                placeholder={frameWidth}
                prefix={<span className='opacity-60 mx-1'>宽</span>}
                className='flex-1'
            />
            <span className='text-xs opacity-50'>x</span>
            <InputNumber
                min={1}
                value={height}
                onChange={setHeight}
                placeholder={frameHeight}
                prefix={<span className='opacity-60 mx-1'>高</span>}
                className='flex-1'
            />
            <Button
                type='primary'
                shape='circle'
                icon={<Icon.Check size={18} />}
                disabled={!width || !height}
                onClick={setCustom}
            ></Button>
            <Tooltip title="自适应">
                <Button
                    type='primary'
                    shape='circle'
                    icon={<Icon.Maximize size={18} />}
                    disabled={type === 'auto'}
                    onClick={setAuto}
                ></Button>
            </Tooltip>
        </div>
    );
};
