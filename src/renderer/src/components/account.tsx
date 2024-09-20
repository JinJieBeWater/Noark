import { Avatar, AvatarFallback, AvatarImage } from '@renderer/components/ui/avatar'
import { ClassAttributes, HTMLAttributes } from 'react'
import { JSX } from 'react/jsx-runtime'

type AccountProps = ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> &
  JSX.IntrinsicAttributes & {
    isCollapsed?: boolean
  }

export default function Account({ isCollapsed, ...props }: AccountProps) {
  return (
    <div {...props}>
      {isCollapsed ? (
        <div className="flex items-center justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/JinJieBeWater.png" />
            <AvatarFallback>Jin</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <div className="flex items-center justify-start gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/JinJieBeWater.png" />
            <AvatarFallback>Jin</AvatarFallback>
          </Avatar>
          <div className="flex-1 truncate">
            <div className="truncate">JinJieBeWater</div>
          </div>
        </div>
      )}
    </div>
  )
}
