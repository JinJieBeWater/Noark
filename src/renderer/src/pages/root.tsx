import { cn } from '@renderer/lib/utils'
import { Separator } from '@renderer/components/ui/separator'
import TitleBar from '@renderer/components/title-bar'
import { TooltipProvider } from '@renderer/components/ui/tooltip'
import { Outlet } from 'react-router-dom'
function App(): JSX.Element {
  return (
    <>
      <TooltipProvider>
        <div className={cn('flex flex-col h-screen')}>
          <TitleBar />
          <Separator />
          <Outlet />
        </div>
      </TooltipProvider>
    </>
  )
}

export default App
