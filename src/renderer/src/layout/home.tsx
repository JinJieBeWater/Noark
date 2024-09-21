import { CodeIcon, DrawingPinIcon, FileTextIcon, HomeIcon } from '@radix-ui/react-icons'
import Account from '@renderer/components/account'
import { LinkProp, Nav } from '@renderer/components/nav'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@renderer/components/ui/resizable'
import { Separator } from '@renderer/components/ui/separator'
import { cn } from '@renderer/lib/utils'
import { useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

type DocumentData = {
  id: string
  title: string
  icon: typeof CodeIcon
}

export const homeLayoutloader = async (): Promise<{ documents: DocumentData[] }> => {
  const documents = [
    {
      id: '1',
      title: 'drafts',
      icon: FileTextIcon
    },
    {
      id: '2',
      title: 'drafts',
      icon: FileTextIcon
    },
    {
      id: '3',
      title: 'drafts',
      icon: FileTextIcon
    }
  ]
  return { documents }
}

type HomeProps = {
  defaultLayout?: number[]
  defaultCollapsed?: boolean
  navCollapsedSize?: number
} & React.PropsWithChildren

export default function HomeLayout({
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize = 4
}: HomeProps): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  const { documents } = useLoaderData() as { documents: DocumentData[] }

  // 导航栏
  const navs: LinkProp[] = [
    {
      title: '主页',
      label: '',
      icon: HomeIcon,
      href: '/'
    },
    {
      title: '置顶',
      label: '',
      icon: DrawingPinIcon,
      href: '/top'
    }
  ]

  const links: LinkProp[] = documents.map((document) => ({
    title: document.title,
    label: '',
    icon: document.icon,
    href: `/document/${document.id}`
  }))

  return (
    <>
      <div className={cn('flex-1 flex flex-col h-full')}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
          }}
          className="items-stretch h-full"
        >
          <ResizablePanel
            defaultSize={defaultLayout[0]}
            collapsedSize={navCollapsedSize}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={() => {
              setIsCollapsed(true)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
            }}
            onResize={() => {
              setIsCollapsed(false)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
            }}
            className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
          >
            <Account isCollapsed={isCollapsed} className="mx-2 mt-3 mb-2" />
            <Nav isCollapsed={isCollapsed} links={navs}></Nav>
            <Separator className={cn('mt-6')} />
            <Nav isCollapsed={isCollapsed} links={links}></Nav>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <Outlet />
          </ResizablePanel>
          {/* <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
            right
          </ResizablePanel> */}
        </ResizablePanelGroup>
      </div>

      {/* <ResizablePanelGroup direction="horizontal" autoSaveId="persistence">
        <ResizablePanel collapsible={false} defaultSize={10} maxSize={20} minSize={10}>
          <div className={cn('h-screen')}>侧边栏</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className={cn('h-screen')}></div>
        </ResizablePanel>
      </ResizablePanelGroup> */}
    </>
  )
}
