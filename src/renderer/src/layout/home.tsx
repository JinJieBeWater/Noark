import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@renderer/components/ui/resizable'
import { cn } from '@renderer/lib/utils'

export default function HomeLayout(props: React.PropsWithChildren): React.JSX.Element {
  console.log(props)

  return (
    <>
      <ResizablePanelGroup direction="horizontal" autoSaveId="persistence">
        <ResizablePanel collapsible={false} defaultSize={10} maxSize={20} minSize={10}>
          <div className={cn('h-screen')}>侧边栏</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className={cn('h-screen')}></div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}
