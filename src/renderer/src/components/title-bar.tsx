import { MinusIcon, EnterFullScreenIcon, Cross2Icon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export default function TitleBar() {
  return (
    <nav className="flex items-stretch justify-between h-10 px-4 ">
      {/* 拖动条 */}
      <div className="flex-1 titlebar"></div>
      {/* 模拟系统控件 */}
      <div className="flex items-center gap-2 ">
        {/* 最小化 */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            window.electron.ipcRenderer.send('window-min')
          }}
        >
          <MinusIcon className="w-4 h-4 " />
        </Button>
        {/* 最大化 */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.electron.ipcRenderer.send('window-max')}
        >
          <EnterFullScreenIcon className="w-4 h-4 " />
        </Button>
        {/* 关闭 */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.electron.ipcRenderer.send('window-close')}
        >
          <Cross2Icon className="w-4 h-4 " />
        </Button>
      </div>
    </nav>
  )
}
