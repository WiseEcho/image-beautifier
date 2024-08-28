import { useMemo, useEffect } from 'react';
import { message } from 'antd';
import { observer } from 'mobx-react-lite';
import Header from '@components/header/Header';
import Editor from '@components/editor/Editor';
import { ConfigProvider, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import SideBar from '@components/sideBar/SideBar';
import Init from '@components/init/Init';
import stores from '@stores';
import useSetImg from '@hooks/useSetImg';
import { cn } from '@utils/utils';
import '@style/main.css';

export default observer(({ defaultImg, headLeft, headRight, isDark, boxClassName = '', onClear }) => {
  const getFile = useSetImg(stores);
  const workplace = stores.editor.img?.src ? <Editor /> : <Init />
  const [messageApi, contextHolder] = message.useMessage();
  let listenerRegistered = false;
  stores.editor.setMessage(messageApi);
  stores.editor.setClearFun(onClear);
  useMemo(() => {
    const mode = isDark || localStorage.getItem('SHOTEASY_BEAUTIFIER_THEME') === 'dark' ? 'dark' : 'light';
    stores.editor.setTheme(mode);
  }, [isDark]);
  useEffect(() => {
    if (defaultImg) getFile(defaultImg, 'dataURL');
  }, [defaultImg]);
  // 从父窗口中获取图片
  useEffect(() => {
    if (window.self !== window.top) {
      if (!listenerRegistered) {
        // 只注册一次
        window.parent.postMessage({ type: 'getImageDateURL' }, '*');
        window.addEventListener('message', (e) => {
          console.log(e.data)
          if (e.data.from === 'wiseEditor') {
            getFile(e.data.data, 'dataURL');
          }
        });
        listenerRegistered = true;
      }
    }
  }, []); // 依赖数组为空，表示只在组件挂载时执行一次
  return (
    <StyleProvider>
      <ConfigProvider
        theme={{
          algorithm: stores.editor.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
        }}
      >
        {contextHolder}
        <div id="shoteasy-container" className={cn("polka flex flex-col overflow-hidden antialiased w-full h-[100vh] dark:bg-black", boxClassName)} data-mode={stores.editor.isDark ? 'dark' : 'light'}>
          <Header headLeft={headLeft} headRight={headRight} />
          <div className="flex flex-col flex-1 h-0 md:flex-row md:items-stretch">
            {workplace}
            <SideBar />
          </div>
        </div>
      </ConfigProvider>
    </StyleProvider>
  )
});