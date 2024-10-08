import { CodeIcon } from '@radix-ui/react-icons'

import { cn } from '@renderer/lib/utils'
import { buttonVariants } from '@renderer/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@renderer/components/ui/tooltip'
import { Link, Path, useLocation } from 'react-router-dom'

export type LinkProp = {
  title: string
  label?: string
  icon: typeof CodeIcon
  href?: string | Partial<Path>
}

interface NavProps {
  isCollapsed: boolean
  links: LinkProp[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  const { pathname } = useLocation()
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  to={link.href || '#'}
                  className={cn(
                    buttonVariants({
                      variant: pathname === link.href ? 'default' : 'ghost',
                      size: 'icon'
                    }),
                    'h-9 w-9',
                    pathname === link.href &&
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && <span className="ml-auto text-muted-foreground">{link.label}</span>}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              to={link.href || '#'}
              key={index}
              className={cn(
                buttonVariants({
                  variant: pathname === link.href ? 'default' : 'ghost',
                  size: 'sm'
                }),
                pathname === link.href &&
                  'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                'justify-start'
              )}
            >
              <link.icon className="w-4 h-4 mr-2" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    'ml-auto',
                    pathname === link.href && 'text-background dark:text-white'
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  )
}
