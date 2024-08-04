import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Icon from '@components/Icon';
import { Button, Radio } from 'antd';
import stores from '@stores';

export default observer(() => {
    const [showMore, setShowMore] = useState(false);
    const handelChange = (e) => {
        stores.option.setFrame(e.target.value)
    }
    return (
        <div className="[&_label]:font-semibold [&_label]:text-sm">
            <div className="flex justify-between items-center">
                <label>Frame</label>
                <Button
                    type="text"
                    size="small"
                    className="text-xs flex items-center opacity-80 m-0"
                    disabled
                    onClick={() => setShowMore(true)}
                >More <Icon.ChevronRight size={16} /></Button>
            </div>
            <div className="py-3 [&_.ant-radio-wrapper_span]:p-0 [&_.ant-radio-wrapper_span]:px-1">
                <Radio.Group
                    rootClassName="grid grid-cols-5"
                    onChange={handelChange}
                    value={stores.option.frame}
                >
                    <Radio className="[&_.ant-radio]:hidden [&_span]:mr-0 [&_span]:block [&_span]:w-full" value='none'>
                        <div className="bg-gray-300/30 rounded-md h-8 overflow-hidden">
                            <div className="bg-slate-300/40 h-7 w-[85%] rounded-md shadow-md -mt-1 -ml-1"></div>
                        </div>
                    </Radio>
                    <Radio className="[&_.ant-radio]:hidden [&_span]:mr-0 [&_span]:block [&_span]:w-full" value='light'>
                        <div className="bg-gray-300/30 rounded-md h-8 overflow-hidden">
                            <div className="bg-slate-300/40 border-2 border-white/80 h-7 w-[85%] rounded-md shadow-md -mt-1 -ml-1"></div>
                        </div>
                    </Radio>
                    <Radio className="[&_.ant-radio]:hidden [&_span]:mr-0 [&_span]:block [&_span]:w-full" value='dark'>
                        <div className="bg-gray-300/30 rounded-md h-8 overflow-hidden">
                            <div className="bg-slate-300/40 border-2 border-black/40 h-7 w-[85%] rounded-md shadow-md -mt-1 -ml-1"></div>
                        </div>
                    </Radio>
                    <Radio className="[&_.ant-radio]:hidden [&_span]:mr-0 [&_span]:block [&_span]:w-full" value='macosBarLight'>
                        <div className="bg-gray-300/30 rounded-md h-8 overflow-hidden">
                            <div className="bg-slate-300/40 h-7 w-[85%] rounded-sm shadow-md mt-2 ml-3 overflow-hidden">
                                <div
                                    className="h-1.5 bg-white/90 px-0.5 flex items-center gap-[1px] before:block before:rounded-full before:w-0.5 before:h-0.5 before:bg-red-500 after:w-0.5 after:h-0.5 after:bg-green-500"
                                >
                                    <i className="block w-0.5 h-0.5 bg-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                    </Radio>
                    <Radio className="[&_.ant-radio]:hidden [&_span]:mr-0 [&_span]:block [&_span]:w-full" value='macosBarDark'>
                        <div className="bg-gray-300/30 rounded-md h-8 overflow-hidden">
                            <div className="bg-slate-300/40 h-7 w-[85%] rounded-sm shadow-md mt-2 ml-3 overflow-hidden">
                                <div
                                    className="h-1.5 bg-black/90 px-0.5 flex items-center gap-[1px] before:block before:rounded-full before:w-0.5 before:h-0.5 before:bg-red-500 after:w-0.5 after:h-0.5 after:bg-green-500"
                                >
                                    <i className="block w-0.5 h-0.5 bg-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                    </Radio>
                </Radio.Group>
            </div>
        </div>
    );
});